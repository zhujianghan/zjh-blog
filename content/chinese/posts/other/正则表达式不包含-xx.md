+++
title = '正则表达式不包含-xx'
date = 2020-04-21T14:39:24+08:00
tags = []
draft = false
+++

如: http://www.hao123.com/* 
不包含  http://www.hao123.com/abc 中有 abc 的情况

```js
// js
const str = 'http://www.hao123.com/abc'
const reg = /^htpp:\/\/www\.hao123\.com\/(?!abc).*$/

reg.test(str)
```
