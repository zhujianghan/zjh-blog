+++
title = 'js-数组反转,-不改变原来的数组'
date = 2020-10-20T10:58:28+08:00
tags = []
draft = false
+++

array.reverse(), 会改变原来的数组, 并返回该数组

如果要不改变原数组, 需要完全复制一份新的数组

```
const arr = [1,2,3]
// 1. ...
const arr2 = [...arr].reverse()

// 2. slice()
const arr3 = arr.slice().reverse()
```
