+++
title = 'centos-部署-go-web'
date = 2021-09-17T09:27:47+08:00
tags = ['go']
draft = false
+++

编译后的文件上传至服务器, 有两个事情要做, 一是把 web 应用做成**守护进程**启动, 二是**端口开放**

使用纯净 centos7 环境(justhost.ru vps, 非阿里云环境)

## 1. 防火墙开放端口

1.1 查看防火墙状态
```bash
firewall-cmd --state
# running
```
1.2 如果没有开启, 启动防火墙
```bash
systemctl start firewalld.service
```
1.3 开放 8080 端口
```
firewall-cmd --zone=public --add-port=8080/tcp --permanent

# 开放多个端口
firewall-cmd --add-port=8081-8100/tcp --permanent

```
1.4 重启防火墙
```
systemctl restart firewall.service
```
1.5 重载配置
```
firewall-cmd --reload
```
1.6 查看端口开启情况
```
netstat -nltp
# 或者使用 firewall-cmd 查看
# 查看所有
firewall-cmd --list-all
# 查看指定
firewall-cmd --query-port=8080/tcp
```
1.7  移除端口
```
firewall-cmd --remove-port=8080/tcp  --permanent
```

## 2. supervisord 守护进程
2.1 安装
```
# 安装
pip install supervisor
# supervisor 加入到开机自启
# http://supervisord.org/running.html
# https://github.com/Supervisor/initscripts

# centos 中 yum install supervisor, 
# 这种形式安装的 supervisor 会默认加入到 systemd 中, 不用手动设置开机开启
# systemctl status supervisord
# systemctl enable supervisord


```
2.2 生成配置文件
```
echo_supervisord_conf > /etc/supervisord.conf
```
2.3 修改配置文件
```
# 最后一行加上
[include]
files = /etc/supervisord.d/*.ini
```
2.4 新建配置文件
```
mkdir /etc/supervisord.d
touch /etc/supervisord.d/deploy.ini
vi /etc/supervisord.d/deploy.ini
```
```
# deploy.ini
[program:DeployGinApi]
command=/root/___go_build_main_go_linux
directory=/root
environment=GIN_MODE=release
user=root
stopsignal=INT
autostart=true
autorestart=true
startsecs=3
stderr_logfile=/var/log/gin-api.err.log
stdout_logfile=/var/log/gin-api.out.log
```

2.5 启动 supervisord
```
supervisord -c /etc/supervisord.conf
```
如果报错 :
`Error: Another program is already listening on a port that one of our HTTP servers is configured to use.  Shut this program down first before starting supervisord.`
则需要先 kill 掉该被守护的进程, 再重启 supervisord 
```
# 找到对应的 pid, kill, 按配置文件启动 supervisor
[root@vm332297 ~]# ps -ef | grep supervisord
root      6977     1  0 Sep16 ?        00:00:31 /usr/bin/python /usr/bin/supervisord -c /etc/supervisord.conf
root      7788  7650  0 04:23 pts/0    00:00:00 grep --color=auto supervisord
[root@vm332297 ~]# kill 6977
[root@vm332297 ~]# supervisord -c /etc/supervisord.conf 
```

2.6 supervisor 停止(删除)守护的进程
```
supervisorctl stop (remove)<name>
```

2.7 supervisor 查看守护的进程
```
supervisorctl status
```

2.8 更新 supervisor 配置文件后
```
supervisorctl reread // 重新读取配置文件
supervisorctl update // 更新 process group
supervisorctl start|restart xxx   // start 或 restart
```



参考: 
[csdn: Centos7 开放8080端口](https://blog.csdn.net/u_ranfa/article/details/89888151)
[csdn: Centos7 防火墙配置](https://blog.csdn.net/qq_41153478/article/details/83033688)
[supervisor 官方文档](http://supervisord.org/)
[cnblog: ](https://www.cnblogs.com/kaerxifa/p/11578498.html)
