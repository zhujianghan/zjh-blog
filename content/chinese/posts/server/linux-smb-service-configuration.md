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
- /data/smb_share: chown 设置 root:root, 子文件夹不允许用户删除
- /data/smb_share/foler1: chown 设置 sambashare:sambashare, 所有 smb 用户均可访问、编辑、删除文件; 同时设置 chmod 2770 让新创建的文件(夹)有同样的 group(smabashare)
- /data/smb_share/folerx: chown 设置 smb_groupx:smb_groupx, 只有当 smb 用户属于 smb_groupx 组时, 才有该文件夹的 wrx 权限




> ps:
> 1. chmod 2770 后查看是否设置成功(新建文件跟随父文件夹的 group)
> ls 后文件属性变为 rwxrws---, 这里的 s 代表特殊权限
>
> 2. apt update/ apt upgrade/ apt-get update/ apt-get upgrade 的区别
> apt 是 apt-get 的简化写法, 日常推荐 apt, 脚本中推荐 apt-get(避免二次确认)
> update 是更新软件版本信息, upgrade 是 update 后的新版本进行升级
>
> 3. useradd 和 adduser 的区别:
> useradd 适用于批量创建, adduser 适用于交互式创建(新手友好)
