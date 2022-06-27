+++
title = 'phpstorm-连接-mysql5-7'
date = 2022-04-16T11:29:14+08:00
tags = []
draft = false
+++

连接 mysql5.6 没有问题, 但是连接 mysql5.7 就会报 
[08S01]  Communications link failure  The last packet sent successfully to ...

需要把 useSSL 改为 false

![image.png](https://upload-images.jianshu.io/upload_images/4073481-ecacb5754591218b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



参考: https://blog.csdn.net/baofeidyz/article/details/54344359
