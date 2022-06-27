+++
title = 'restful--patch-和-put-请求的区别'
date = 2018-09-01T20:34:49+08:00
tags = ['php']
draft = false
+++

看到 laravel 使用 Route::resource 生成 restful 架构的路由, 里面的更新用的是 patch 请求, 而有的地方说是用 put, 就查了一下, 这篇说得很明白, 就复制过来了

- put  更新全部资源
- patch 方法用来更新局部资源

假设我们有一个UserInfo，里面有userId， userName， userGender等10个字段。可你的编辑功能因为需求，在某个特别的页面里只能修改userName，这时候的更新怎么做？

人们通常(为徒省事)把一个包含了修改后userName的完整userInfo对象传给后端，做完整更新。但仔细想想，这种做法感觉有点二，而且真心浪费带宽(纯技术上讲，你不关心带宽那是你土豪)。

于是patch诞生，只传一个userName到指定资源去，表示该请求是一个局部更新，后端仅更新接收到的字段。

而put虽然也是更新资源，但要求前端提供的一定是一个完整的资源对象，理论上说，如果你用了put，但却没有提供完整的UserInfo，那么缺了的那些字段应该被清空



原文见 https://blog.csdn.net/mysevenyear/article/details/80674080
