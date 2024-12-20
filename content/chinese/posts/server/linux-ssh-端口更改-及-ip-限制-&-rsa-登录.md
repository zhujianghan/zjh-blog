+++
title = 'linux-ssh-端口更改-及-ip-限制-&-rsa-登录'
date = 2022-04-16T11:29:14+08:00
tags = ['linux']
draft = false
+++

[原文见 cnblog: 修改linux的ssh默认端口号22的方法 ](https://www.cnblogs.com/sunshine-long/p/8820404.html)
[rsa 参考](https://www.linux.com/training-tutorials/ssh-server-without-password-using-rsa-key/)

## 一、修改配置文件

vi /etc/ssh/sshd_config

找到#Port 22

修改为自己要使用的端口号：Port 26000

然后 :x  退出保存

## 二、重启ssh服务 /etc/init.d./sshd restart

如果还要设置防火墙，配置：vi /etc/sysconfig/iptables

启用26000端口：/etc/init.d/iptables restart

## 三、如果要显示固定IP才能登陆：

1.修改 /etc/hosts.deny,  加入一行sshd:ALL      　　--#意思是任何ip都不能登陆

2.然后修改：/etc/hosts.allow,在其中进行如下设置:sshd:192.168.0.241:allow     --#意思是只允许192.168.0.241登陆

## 四、rsa 密钥对登录
- client 执行以下命令生成密钥对 (~/.ssh)
```
ssh-keygen -t rsa
```
- 把 is_rsa.pub 复制到服务器的 ~/.ssh/authorized_keys 文件后面
- 配置 /etc/ssh/sshd_config
```
RSAAuthentication yes
PubkeyAuthentication yes
AuthorizedKeysFile .ssh/authorized_keys
```
- service sshd restart



> 20241220 新增
> 上述是 centos 更改 ssh 端口, 不适用 ubuntu 2204 以后的版本, ubuntu 最新版本 配置ssh端口如下
[参考自 csdn: 【解决】Ubuntu SSH Server 修改默认端口无效](https://blog.csdn.net/Ervoconite/article/details/132987943)

### 1. enable ufw
默认 ufw 关闭, 首先加入端口, 防止开启后 ssh 退出
```bash
ufw allow 22/tcp
ufw allow 26000/tcp

ufw enable

# 查看
ufw status
```

### 2. 修改 /etc/ssh/sshd_config 配置文件, 设置 Port=26000
### 3. 打开 /usr/lib/systemd/system/ssh.socket, 设置 ListenStream=26000
### 4. 重启 ssh 服务
```
systemctl daemon-reload

systemctl restart ssh.socket
```

### 5. ufw deny 22/tcp


