+++
title = 'golang-删除-slice-中的部分元素'
date = 2019-11-08T16:08:40+08:00
tags = ['go']
draft = false
+++

golang 对 slice 的操作全在 [:] 中 和 append

``` go
// 删除切片的第三个元素
sslice := []int{0,1,2,3,4}
sslice = append(sslice[:2], sslice[3:]...)

```

> Notice
>  1. sslice[A:B], 包涵 A, 不包括 B; 若 A = B,包涵 A
>  2. append 第一个参数为 切片, 第二(三,四)个参数为 元素, 若为 切片, 可以使用 ... 分解 (析构) 为元素
