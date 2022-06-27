+++
title = 'firefox-下-jquery-ajax-不返回值的原因-(chrome正常)'
date = 2019-01-30T13:45:07+08:00
tags = []
draft = false
+++

可能是因为 点击的 button 标签的 type 属性设置为了 "submit",
而这样 firefox 会认为其是按表单提交, 而非 ajax 的异步

所以, 把 submit 改为 button 就好了
