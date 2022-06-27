+++
title = 'a标签伪类：visited-text-decoration设置无效的原因'
date = 2018-06-28T18:33:09+08:00
tags = []
draft = false
+++

a:visited 伪类可能会暴露用户浏览信息记录，攻击者可能会据此判断用户曾经访问过的网站，造成不必要的损失，因此这些浏览器决定限制 a:visited 的功能， 所以不是代码的问题，而是浏览器方面的限制。

用下划线来判断某链接是否曾被点击过是失效的，那么我们就只能通过设置颜色来区别了


原文见: https://www.cnblogs.com/phoenixee/p/5960917.html
