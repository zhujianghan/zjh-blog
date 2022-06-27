+++
title = 'php-类方法的连接调用-$this--where()--select()'
date = 2022-04-16T11:29:14+08:00
tags = ['php']
draft = false
+++

这种类方法最后都返回了 `$this`, 从而能连续调用;   
至于中间的方法, 通过类属性将值保存起来, 可供后续方法继续使用

![图片.png](https://upload-images.jianshu.io/upload_images/4073481-42a753f43b28330c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![图片.png](https://upload-images.jianshu.io/upload_images/4073481-a55b68ae02ab6917.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
