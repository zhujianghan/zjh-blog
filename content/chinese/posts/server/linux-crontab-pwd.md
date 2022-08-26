+++
title = "Linux Crontab Pwd"
date = 2022-08-26T10:08:16+08:00
tags = ["linux", "crontab"]
draft = false
+++

> 背景: 使用 crontab -e 添加定时任务后, 发现任务没有如希望的执行, 发现要执行的命令是使用了相对路径引入文件, 推测是文件路径不正常

在 linux 中 root 用户执行命令 `crotab -e` 添加任务获取当前工作目录
```
* * * * * pwd >> ~/tmp.txt 2>&1
```

之后生成一新用户 
```
# root 用户
# -m 生成用户同名 home 目录
useradd -m test
passwd test

# test 用户 同样新增获取 pwd 输出到其 home 目录的任务 
crontab -e 
```

经过执行发现,  
在 /root/tmp.txt 文件中 pwd 输出为 `/root`  
在 /home/test/tmp.txt 文件中 pwd 输出为 `/home/test`  

> "The cron daemon starts a subshell from your HOME directory"
> [参考文档](https://www.ibm.com/docs/en/aix/7.2?topic=c-crontab-command)