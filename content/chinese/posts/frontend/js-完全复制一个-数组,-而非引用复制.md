+++
title = 'js-完全复制一个-数组,-而非引用复制'
date = 2020-08-20T21:09:17+08:00
tags = []
draft = false
+++

```
// 1. 引用复制, 共用内存
let arr = [1, 2, 3]
let brr = arr
brr.splice(1, 1)
console.log(brr) // [1, 3]
console.log(arr) // [1, 3]

// 2. 完全复制, 不共享内存
let arr = [1, 2, 3]
let brr = [...arr]
brr.splice(1, 1)
console.log(brr) // [1, 3]
console.log(arr) // [1, 2, 3]
```

在 React 中对 state 数组数据的处理, 不要直接引用赋值, 而要完成复制赋值
因为直接修改 state 数据会对 React 性能调优造成影响
