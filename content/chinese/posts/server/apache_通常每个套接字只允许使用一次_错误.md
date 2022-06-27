+++
title = 'apache_通常每个套接字只允许使用一次_错误'
date = 2022-04-16T11:29:14+08:00
tags = []
draft = false
+++

安装了apache2.4.27, 在cmd中启动apache服务( httpd.exe -k start )的时候却提示：通常每个套接字只允许使用一次.

原因可能是系统默认 httpd.exe 服务自动开启, 可以先关闭该服务( httpd.exe -k stop ), 再重新开启;
然后在 计算机-( 右键 ) -管理-服务 中关闭apache服务的自动启动
