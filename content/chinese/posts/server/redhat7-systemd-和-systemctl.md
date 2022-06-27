+++
title = 'redhat7-systemd-和-systemctl'
date = 2020-11-09T09:45:17+08:00
tags = ['linux']
draft = false
+++

## systemd 是系统管理守护进程, 其中的 `d` 表示 `daemon`
## systemctl 是命令, 其中的 `ctl` 表示 `control`

> 以下的 `xxx` 表示服务名称
- systemctl start xxx      =>  启动服务
- systemctl restart xxx   =>  重新启动服务
- systemctl stop xxx      =>  停止服务
- systemctl enable xxx  =>  加入到启动项
- systemctl status xxx   =>  查看状态

----
## shell
> api: application interface 应用程序接口

硬件 <= 内核 <= api <= 应用程序

shell 是一种应用程序, 壳, 终端(解释器),  
bash 是 shell 的一种

---- 
## linux 命令
格式: 命令 参数 对象
         ls      -a      /
参数和对象有时可不需要

长格式参数 --单词, 多个不可合并, tar --create --gzip --verbose  --file
短格式参数 -字母, 多个可合并, tar -czvf

- echo, 输出到屏幕
- date, 输出日期时间, date "+%Y-%m-%d %H:%M:%S"
- reboot, 重启
- poweroff, 关机   
- shutdown -h, 关机
- wget, 下载




