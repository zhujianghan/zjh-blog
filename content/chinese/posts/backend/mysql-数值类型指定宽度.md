+++
title = 'mysql-数值类型指定宽度'
date = 2018-01-05T11:28:53+08:00
tags = ['mysql']
draft = false
+++

mysql 数值类型关键字后面的括号内指定整数值的显示宽度(例如，INT(4))。
但是这里的(4) 需要和 zerofill 一起用, 否则不会有效果.  
当结合可选扩展属性ZEROFILL使用时， 默认补充的空格用零代替。例如，对于声明为INT(5) ZEROFILL的列，值4检索为00004。

如果为一个数值列指定ZEROFILL，MySQL自动为该列添加UNSIGNED属性。
