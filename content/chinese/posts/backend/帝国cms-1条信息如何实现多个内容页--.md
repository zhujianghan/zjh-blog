+++
title = '帝国cms-1条信息如何实现多个内容页--'
date = 2022-04-16T11:29:14+08:00
tags = []
draft = false
+++

需要如图: ![image.png](https://upload-images.jianshu.io/upload_images/4073481-19a2d29841abae5e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


'曲线救国' 路线:   依然是一个内容页模板, 但是 聚集三个页面的内容, 比如分成三个 div, 通过js 默认第一个 div 显示, 另两个不显示, 
然后点击哪个 div, 哪个 div 显示, 其它的隐藏
