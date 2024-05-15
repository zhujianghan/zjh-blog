+++
title = "Centos磁盘查看"
date = 2024-05-15T10:39:55+08:00
tags = ['server', 'centos']
draft = false
+++

# 记一次服务器负载过高导致web访问变慢

### 阿里云监控
在阿里云监控平台发现内存占用 75%以上, cpu在 50%左右,

### 检查系统负载
uptime, 分别显示一段时间的平均系统负载, 1分钟, 5分钟, 15分钟

### 检查内存
free -h

### 检查 cpu
服务器查看 top 都卡, 后查看 pm2, 发现一个实例就占用了 1G+内存, pm2 reload 1 实现重启, 内存占用到 200M

ps: ssh界面 如果宽度不够长, pm2 ls 只会显示部分列, 要查看更多(如 uptime 等), 需拉长或全屏终端.


### 检查磁盘
- df -h 查看总占用
- cd / && du -ah --max-depth=1 | sort -rh 查看根目录下文件夹占用
- 进去某个文件夹, du -ah --max-depth=1 | sort -rh 查看文件夹占用
- nginx access.log 过大, `echo -n '' > access.log` 清空文件