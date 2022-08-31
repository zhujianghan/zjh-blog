+++
title = "Go 中 make 与 new 的区别"
date = 2022-08-31T09:01:20+08:00
tags = ["go"]
draft = false
+++

> 背景: 在 go 中, 基本类型的变量, 在使用`var`定义变量, 但是初始化值时, 系统会默认赋初始值, 如 string => ""(空字符串), int => 0, bool => false, 如果是 struct, 也会按 field 的类型(要求 field 的类型也为基本类型)进行初始化
> 
> 对于 slice, map, channel 这三种类型, 使用 var 定义类型后, 其值为 nil, 不占内存, 所以需要先分配内存, 不能只定义类型后就直接赋值

```
// map 初始化
map1 := make(map[string]string) // 推荐
map2 := map[string]string{}

fmt.Printf("%#v\n", map1)
fmt.Printf("%#v\n", map2)
```

```
// slice 初始化
slice1 := make([]int, 0)
slice1 = append(slice1, 1)

var slice2 []int
slice2 = append(slice2, 1)

slice3 := []int{} // 不推荐
slice3 = append(slice3, 1)

fmt.Printf("%#v\n", slice1)
fmt.Printf("%#v\n", slice2)
fmt.Printf("%#v\n", slice3)
```


```
// channel 初始化
// todo
```

## make 与 new 的区别
- 二者都用于给变量分配内存;
- make 只用于 slice, map, channel 的初始化内存分配, 返回的是类型本身;
- new 用于 string, int, bool, struct 等类型的初始化, 返回的是指向类型的指针

[参考链接: 李文周blog go语言基础之指针](https://www.liwenzhou.com/posts/Go/07_pointer/)