+++
title = 'goland-import-包报红'
date = 2021-02-19T09:52:51+08:00
tags = ['go']
draft = false
+++

在使用 go mod 后(go 1.11 开始支持, go 1.14 全面推荐), 无需在 GOPATH 的 src 下存在项目目录, 可以随意存放.
> go 包依赖管理 gopath > go vender > go module, 参考 # [一文搞懂 Go Modules 前世今生及入门使用](https://www.cnblogs.com/wongbingming/p/12941021.html)

GOPATH 则只存放第三方包, 若不设置, 默认为 /[user]/go 目录

goland 配置 GOROOT, GOPATH 及 Go Modules

![image.png](https://upload-images.jianshu.io/upload_images/4073481-3ca5135cd4efee06.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image.png](https://upload-images.jianshu.io/upload_images/4073481-64f944129c9f7fcf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

结果会在 External Libraries 中多出一个 Go Modules
![image.png](https://upload-images.jianshu.io/upload_images/4073481-3052314ccbc663dd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
