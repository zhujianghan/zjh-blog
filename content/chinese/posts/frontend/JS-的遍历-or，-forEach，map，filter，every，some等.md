+++
title = 'JS-的遍历-or，-forEach，map，filter，every，some等'
date = 2019-03-06T10:40:03+08:00
tags = []
draft = false
+++

原文: https://www.cnblogs.com/ihboy/p/6878427.html

　1\. for循环，需要知道数组的长度，才能遍历，

　　　　2\. forEach循环，循环数组中每一个元素并采取操作， 没有返回值， 可以不用知道数组长度

　　　　　　![image](http://upload-images.jianshu.io/upload_images/4073481-000b36e5693f786e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

　　　　3\. map函数，遍历数组每个元素，并回调操作，需要返回值，返回值组成新的数组，原数组不变

　　　　　　![image](http://upload-images.jianshu.io/upload_images/4073481-425140b275d14068.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

　　　　4\. filter函数， 过滤通过条件的元素组成一个新数组， 原数组不变

　　　　　　![image](http://upload-images.jianshu.io/upload_images/4073481-5bcd13a8aab60f1d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

　　　　5\. some函数，遍历数组中是否有符合条件的元素，返回Boolean值

　　　　　　![image](http://upload-images.jianshu.io/upload_images/4073481-4978fdfb507b09a0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

　　　　6\. every函数， 遍历数组中是否每个元素都符合条件， 返回Boolean值

　　　　　　![image](http://upload-images.jianshu.io/upload_images/4073481-082a32540009c2f8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
