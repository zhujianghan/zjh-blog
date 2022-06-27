+++
title = 'thinkphp5-0-解决跨域'
date = 2022-04-16T11:29:14+08:00
tags = []
draft = false
+++

在 public/index.php 中加入 
```
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods:GET, POST, OPTIONS, DELETE");
header("Access-Control-Allow-Headers:Request-Timestamp,Access-Token,Refresh-Token,Access-Control-Allow-Origin,DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type, Accept-Language, Origin, Accept-Encoding");

if(strtolower($_SERVER['REQUEST_METHOD']) === 'options'){
    exit;
}
```

![图片.png](https://upload-images.jianshu.io/upload_images/4073481-0ac291a8f4fe929d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


> 貌似 `tp5.1` 中路由可以设置允许跨域
```
Route::get('new/:id', 'News/read')
    ->ext('html')
    ->allowCrossDomain();
```
