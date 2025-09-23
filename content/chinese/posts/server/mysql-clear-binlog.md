+++  
title = 'mysql8.4 清空 binlog 并重置序号'  
date = 2025-09-23T11:28:33+08:00  
tags = ['mysql', 'binlog']  
draft = false  
+++  

参考: https://blog.axiaoxin.com/post/how-to-disable-mysql-binlog/


```
# 登录到 mysql 后
# 查看日志文件
show binary logs;


# 清空全部 binlogs 并重置索引(编号, 0001,0002,0003,...)
RESET BINARY LOGS AND GTIDS;



```
