+++
title = 'fastadmin----跨域问题'
date = 2019-02-21T08:49:23+08:00
tags = []
draft = false
+++

原文见: [https://forum.fastadmin.net/thread/7485](https://forum.fastadmin.net/thread/7485)

在入口文件 index.php 中添加如下代码
```
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With");
```

![图片.png](https://upload-images.jianshu.io/upload_images/4073481-117fac2723c5e593.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
