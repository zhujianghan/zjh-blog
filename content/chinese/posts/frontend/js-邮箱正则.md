+++
title = 'js-邮箱正则'
date = 2019-11-27T16:43:50+08:00
tags = []
draft = false
+++

```
let  reg = new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$")
reg.test('123456@qq.com')

```
