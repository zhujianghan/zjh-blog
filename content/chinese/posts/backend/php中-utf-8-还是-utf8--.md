+++
title = 'php中-utf-8-还是-utf8--'
date = 2022-04-16T11:29:14+08:00
tags = ['php']
draft = false
+++

utf8、utf-8 和 UTF-8 的区别如下：

　　一、“UTF-8”这是标准写法，在PHP和HTML中设置编码，统一写成“UTF-8”。
　　举例：
　　PHP中 —— <?php header('Content-Type: text/html; charset=UTF-8'); ?>
　　HTML中　——　<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

　　二、“utf8”、“utf-8”和“UTF8”只是在window中不区分大小写的写法而已，一般程序能识别，但也有例外。例如简写的“UTF8”或“utf8”在ie浏览器里不识别。

　　三、数据库命令模式中，必须写成“utf8”，因为MySQL的命令模式中只能识别“utf8”，比如：PHP程序中可以写：
　　<?php
　　mysql_set_charset('utf8',$link);
　　?>

　　结论：MySQL操作使用“utf8” 【mysql_query(set names utf8)】，其他一律使用“UTF-8”。


原文见: https://blog.csdn.net/ahjxhy2010/article/details/79722997
