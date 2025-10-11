+++
title = 'linux 设置 smb'  
date = 2025-08-28T14:02:00+08:00  
tags = ['linux', 'smb']  
draft = false  
+++


## install
```
sudo apt update
sudo apt install samba
```

## set share folder
```
# /etc/samba/smb.conf
# append below lines

[smb_share]
	path = /data/smb_share
	comment = parent folder
	write list = @sambashare
	valid users = @sambashare
	writeable = yes
```

```
# 最终  /etc/samba/smb.conf 设置
...
[smb_share]
	path = /data/smb_share
	comment = parent folder
	write list = @sambashare
	valid users = @sambashare
	writeable = yes

	root preexec = /etc/samba/check_user_connection.sh %u %I %S
	root preexec close = yes

	inherit permissions = yes
	nt acl support = no
	store dos attributes = no
	map archive = no

	hide unreadable = yes
; 这里 inherit permissions 表示新增加的文件(夹) rwx 继承父文件夹, 从而让 用户A 新增的文件(夹), 用户B也有 rw 权限; nt acl support, store dos attributes, map archive 设置表示禁止映射到 windows 后, 用 office(或wps等) 编辑保存的文件自动添加了 +(扩展权限 acl)权限.
; hide unreadable 可选, 表示隐藏不可见的文件(夹)
; 更多 smb.conf 设置参考 https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html
```


## add user
```
# first: add linux user
# -M: don't create home directory
# -s: set shell (no login)
sudo useradd -M -s /sbin/nologin smb_jackma

# second: set user to sambashare group
sudo usermod -aG sambashare smb_jackma

# thire: bind to smb
sudo smbpasswd -a smb_jackma
(type password)
```

## set privilege
- /data/smb_share: chown 设置 root:root, chmod 设置 rwxr-xr-x, 让用户可访问, 子文件夹不允许用户删除、更名等
- /data/smb_share/foler1: chown 设置 sambashare:sambashare, 所有 smb 用户均可访问、编辑、删除文件; 同时设置 chmod 2770 让新创建的文件(夹)有同样的 group(smabashare)
- /data/smb_share/folerx: chown 设置 smb_groupx:smb_groupx, 只有当 smb 用户属于 smb_groupx 组时, 才有该文件夹的 wrx 权限

## 设置单设备登录
- 使用 max connections 设置的是全部允许连通的设备, 不区分用户账号, 不可用
- 使用 sudo smbcontrol smbd kill-client-ip xx.xx.xx.xx 只在服务端删除了连接, 在客户端(记住凭证)重新打开共享文件夹的话, 又自动新建了一个连接, 也不可用
- trick解决: 定时任务
    - 使用 sudo smbstatus 查看现有连接, 如果同名用户超过1个连接, 则 disable 该用户(sudo smbpasswd -d smbusername),
    - 删除该用户的全部连接 sudo smbcontrol smbd kill-client-ip 123.123.123.1 && sudo smbcontrol smbd kill-client-ip 123.123.123.2 ...
    - 让多设备登录的用户自行(或联系管理员)删除客户端的连接信息, 由管理员手动(或另一个定时任务, 查询没有连接的用户则 enable) enable 用户(sudo smbpasswd -e smbusername)
- smb script hook 事件解决 (参考: https://serverfault.com/questions/1121716/samba-server-single-user-connection-limit
https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html)

### smb script hook 设置
#### 1. smb.conf 设置
```[myshare]  # 具体共享名称
    path = /data/share
    ...
    preexec = /sbin/check_user_connection.sh %u  # 必须在共享段内, sh文件添加执行(+x)权限
    preexec close = Yes  # 可选，但不影响脚本执行（仅影响返回值是否拒绝连接）exit 1则不连接, exit 0 则继续
```
#### 2. sh script 设置 check_user_connection.sh
```
#!/bin/bash
\# 检查用户是否已有Samba连接

USERNAME="$1"
CLIENT_IP="$2"
SHARE_NAME="$3"

\# 使用 smbstatus 检查用户连接
\# -b 参数以简短格式输出，便于解析
CONNECTIONS=$(smbstatus -b -u "$USERNAME" 2>/dev/null | grep -c "$USERNAME")

\# 这里的 1 可改为2,3,4...表示允许的最多连接数
if [ "$CONNECTIONS" -gt 1 ]; then
    echo "$(date): 用户 $USERNAME 已有活跃连接，拒绝来自 $CLIENT_IP 的新连接" >> /var/log/samba_connection_check.log
    exit 1
else
    echo "$(date): 用户 $USERNAME 无活跃连接，允许来自 $CLIENT_IP 的连接" >> /var/log/samba_connection_check.log
    exit 0
fi
```
#### 3. 重启samba服务 `sudo systemctl restart smdb nmdb`
#### 4. ps:检查配置文件
```
ps: /etc/samba
● 校验配置文件:  `testparm`
● 查看日志: cat /var/log/samba/log.
```


> ps:
> 1. chmod 2770 后查看是否设置成功(新建文件跟随父文件夹的 group)
> ls 后文件属性变为 rwxrws---, 这里的 s 代表特殊权限

> 2. apt update/ apt upgrade/ apt-get update/ apt-get upgrade 的区别
> apt 是 apt-get 的简化写法, 日常推荐 apt, 脚本中推荐 apt-get(避免二次确认)
> update 是更新软件版本信息, upgrade 是 update 后的新版本进行升级

> 3. useradd 和 adduser 的区别:
> useradd 适用于批量创建, adduser 适用于交互式创建(新手友好)

> 4. 使用 sudo smbstatus -b 查看已登录(连接)的用户信息

> 5. windows 连接不上 smb 解决办法:  
>    - 运行->gpedit.msc->管理模板->网络->Lanman工作站->启用不安全的来宾登录->已启用
>    - PowerShell(不是CMD) Set-SmbClientConfiguration -RequireSecuritySignature $false
>    - 控制面板->程序->程序和功能->启用或关闭 Windows 功能-> SMB 1.0 ...和 SMB Direct 都选中  (一般不需要, 最新的 smb 服务端已是 smb3.0)

> 6. 给用户添加组 `sudo usermod -aG 目标组名 用户名`  
> 参数说明：
>    -a：append（追加），确保用户不会从原有组中被移除；
>    -G：指定要添加到的附加组（可同时指定多个组，用逗号分隔）

> 7. 从组中移除用户: gpasswd 命令（安全移除单个组）, gpasswd 是专门管理组的工具，-d 选项可直接将用户从指定组中移除，且不会影响用户所属的其他组（安全可靠）。
>    sudo gpasswd -d 用户名 要移除的组名

> 8. 对已添加了 acl 扩展权限的文件(夹) 清除 acl 权限
>    - sudo setfacl -R -b /data/samba_share
>    - sudo chmod g+w /data/samba_share, 清除可能会影响 group 的 write 权限, 这里补上 w
>    - sudo find /data/samba_share -type d ! -perm -g=x, 查找 group 没有 x 权限的文件夹, 若有, 则给其加上 g+x, 避免全部递归也给文件添加了 x 权限
