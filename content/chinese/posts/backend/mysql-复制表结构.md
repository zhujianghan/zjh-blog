+++
title = 'mysql-复制表结构'
date = 2018-01-04T23:45:13+08:00
tags = ['mysql']
draft = false
+++

实例: 
mysql>create database db2018 charset=utf8 collate utf8_general_ci;
mysql>create table tb1(id int,name varchar(20)) engine=myisam charset=utf8;

创建一个临时表tbtemp,结构与tb1一致
mysql>create table tbtemp like tb1;
