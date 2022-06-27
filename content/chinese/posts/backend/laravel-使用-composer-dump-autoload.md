+++
title = 'laravel-使用-composer-dump-autoload'
date = 2019-05-14T10:35:39+08:00
tags = []
draft = false
+++

给 User.php 模型文件复制一次为 bak.User.php 后, 执行了一次 vendor:publish , 给出了warning: 

![图片.png](https://upload-images.jianshu.io/upload_images/4073481-8758618585045ba5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

再之后 , 依赖注入 User 模型提示 User 找不到
![图片.png](https://upload-images.jianshu.io/upload_images/4073481-a10ab1715e660671.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

解决办法: 执行 `composer dump-autoload`
