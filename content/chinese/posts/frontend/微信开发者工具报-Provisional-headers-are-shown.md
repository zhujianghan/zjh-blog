+++
title = '微信开发者工具报-Provisional-headers-are-shown'
date = 2019-12-20T14:56:59+08:00
tags = ['微信']
draft = false
+++

表现为没有响应结果

1. 原因可能是 ios 设备对 get 请求头长度限制, 更换为 andriod 设备后没问题, 再换回 iphone 突然也好了
2. 可能与设置的 `axios.defaults.retry 及 axios.defaults.retryDelay` 有关


[参考:](https://developers.weixin.qq.com/community/develop/doc/00000ee9af05c0b10a0880b6f5b400?highLine=Provisional%20headers%20are%20shown&jumpto=comment&commentid=000c8ce52903c0959c1843955518)
