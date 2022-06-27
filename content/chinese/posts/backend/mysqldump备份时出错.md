+++
title = 'mysqldump备份时出错'
date = 2018-07-15T23:06:58+08:00
tags = ['mysql']
draft = false
+++

mysqldump备份时出现 
  couldn't find table 或
  Got error: 1049: Unknown database 错误

原因可能是, 在命令行的末尾不能加入 分号

原因是通过DOS运行mysql命令的情况下，相当于没有进入mysql环境，不能再在命令行结束处加分号；，直接属于命令行即可！

原文见: https://blog.csdn.net/song19890528/article/details/9620981
