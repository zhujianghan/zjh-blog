+++
title = 'php-图片处理扩展包-intervention-image-在-win-中使用遇到问题'
date = 2022-04-16T11:29:14+08:00
tags = []
draft = false
+++

环境: laravel-admin + laragon
使用 intervention/image 时, 报错 : encodeing format(tmp) is not suppoerted
![图片.png](https://upload-images.jianshu.io/upload_images/4073481-b9822248df234ab2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

原因: intervention/image 这个包不与 windows 兼容
临时解决办法: 修改 包文件 `AbstractEncoder.php`
![图片.png](https://upload-images.jianshu.io/upload_images/4073481-59866bb9ea6007f3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


原文见  [github laravel-admin issue](https://github.com/z-song/laravel-admin/issues/1379)
