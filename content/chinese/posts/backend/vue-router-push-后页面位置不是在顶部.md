+++
title = 'vue-router-push-后页面位置不是在顶部'
date = 2022-04-16T11:29:14+08:00
tags = []
draft = false
+++

原文见: https://blog.csdn.net/M_SSY/article/details/82850517

解决办法: 在 `router/index.js`  中 `new router` 时, 加入如下代码
```
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0 }
  }
```

![图片.png](https://upload-images.jianshu.io/upload_images/4073481-4ed37587c7c62865.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
