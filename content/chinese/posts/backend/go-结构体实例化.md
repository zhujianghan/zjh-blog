+++
title = 'go-结构体实例化'
date = 2021-07-16T10:21:06+08:00
tags = ['go']
draft = false
+++

```
type Block struct {
  length int
  height int
}

// 方式一
var a Block
a.length = 1
a.height = 2

// 方式二
b := Block{1, 2}

// 方式三
c := &Block{1, 2}

// 方式四
d := new(Block)
d.length = 1
d.height = 2

fmt.Println(a)
fmt.Println(b)
fmt.Println(c)
fmt.Println(d)



```

方式一和二 相同, 结果都是 值对象
方式三和四 相同, 结果都是指针

值和指针的不同点在于, 如果需要对 结构体的实例进行修改时, 值需要加上 &, 而 指针不需要

如果一个 struct 内容很多, 占用内存大, 应该使用 指针而不是值来进行函数间的传递.


参考 [segmentfault](https://segmentfault.com/q/1010000018905584/a-1020000018909973)
[cnblog](https://www.cnblogs.com/f-ck-need-u/p/9882315.html)
