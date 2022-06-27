+++
title = 'vmware-linux-网络配置'
date = 2021-03-11T09:49:10+08:00
tags = ['linux']
draft = false
+++

centos7.9

vmware 中设置 虚拟机网络连接为 桥接模式

虚拟机(centos) 中 设置  /etc/sysconfig/network-scripts/ifcfg-ens33 中 ONBOOT 为 

```shell
[root@bogon ~]# cat /etc/sysconfig/network-scripts/ifcfg-ens33 
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=dhcp
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=ens33
UUID=7e16f33b-714d-4386-ab0c-58b6ddbc7aa3
DEVICE=ens33
#ONBOOT=no
ONBOOT=yes

```
