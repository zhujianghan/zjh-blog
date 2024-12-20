+++
title = 'linux 安装、配置 fail2ban 避免服务器恶意登录'
date = 2024-12-20T17:43:00+08:00
tags = ['fail2ban']
draft = false
+++

[详见 github: fail2ban](https://github.com/fail2ban/fail2ban/wiki)

## 安装 fail2ban, 以 ubuntu 为例
```
apt update && apt upgrade

apt install fail2ban

systemctl start fail2ban
systemctl enable fail2ban

```

## 配置 fail2ban

fail2ban 分为 server 和 client
- 在 `/etc/fail2ban/jail.d` 中增加一个自定义 conf, 如 my-jail.conf (从 defaults-debian.conf 复制得到), 添加如下 sshd 配置

```
# my-jail.conf

[DEFAULT]
banaction = nftables
banaction_allports = nftables[type=allports]
backend = systemd

[sshd]
enabled = true
port = 2222
filter = sshd
maxretry = 3
bantime = 2592000 # 2592000second = 30day, -1 为永久封禁
```

- 重启 fail2ban
```
sudo systemctl restart fail2ban   #重启
sudo fail2ban-client status       #查看状态
sudo fail2ban-client status sshd  #查看sshd的详细状态
```

- 查看已禁用的ip
```
fail2ban-client get sshd banned

fail2ban-client status sshd
```
