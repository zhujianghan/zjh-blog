+++
title = 'laradock-数据库连接'
date = 2019-08-02T10:20:49+08:00
tags = ['docker']
draft = false
+++

* adminer 容器 up 后, 在 127.0.0.1:8080 使用 [ '服务器' => 'mysql' ], root + root 默认账户可以登录;  
* 在 navicat 中, 则使用 127.0.0.1 + root + root 即可登录 

> 新的 mysql 数据库可以新建一个测试用户
```
CREATE USER 'test'@'%' IDENTIFIED BY 'test';

GRANT ALL ON *.* TO 'test'@'%'
```
