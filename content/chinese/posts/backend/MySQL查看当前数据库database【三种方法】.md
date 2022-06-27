+++
title = 'MySQL查看当前数据库database【三种方法】'
date = 2018-01-04T23:28:49+08:00
tags = ['mysql']
draft = false
+++

在MySQL下查看当前使用的是哪个数据库，有三种方式

（1）用select database()语句

mysql> select database();
+------------+
| database() |
+------------+
| test       |
+------------+
1 row in set (0.00 sec)

从查询结果中可以看出，当前用的是test数据库

 
（2）用show tables语句，查询出来的结果中，第一行为Tables_in_XXX，这里XXX就

是当前所用的数据库名称。

mysql> show tables;
+-------------------+
| Tables_in_test    |
+-------------------+
| push_test         |
| ship_order_detail |
+-------------------+
2 rows in set (0.00 sec)

从查询结果中可以看出，当前用的是test数据库。
 

（3）用status语句，查询出来的结果中有一行是currrent database: XXX。这里XXX就
是当前所用的数据库名称。

mysql> status;
--------------
mysql  Ver 14.14 Distrib 5.1.60, for pc-linux-gnu (i686) using  EditLine wrapper
Connection id:          1484237
Current database:       test
Current user:           root@localhost
SSL:                    Not in use

从查询结果中可以看出，当前用的是test数据库。


ps:原帖地址 http://blog.csdn.net/qingzhuoran/article/details/56498908
