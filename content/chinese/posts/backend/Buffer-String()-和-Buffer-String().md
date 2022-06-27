+++
title = 'Buffer-String()-和-Buffer-String()'
date = 2022-06-16T11:29:14+08:00
tags = ['go']
draft = false
+++

```go
b1 := bytes.Buffer{} // 非指针
b2 := bytes.NewBuffer([]byte{}) // 指针
b3 := &bytes.Buffer{} // 指针, 等同于 b2

b1.WriteString("abc")
b2.WriteString("abc")

fmt.Println(b1) // {[97 98 99] 0 0}
fmt.Println(b1.String()) // abc
fmt.Println(b2) // abc
```
原因: *Buffer 有方法 String(), Buffer 没有 String() 方法.

- `fmt.Println(b1)`, 就是 fmt 将 b1 按普通结构体进行输出: 分别输出各项
- `fmt.Println(b1.String())`, 调用了 *Buffer 的 String() 方法
- `fmt.Println(b2)`, 自动调用 *Buffer 的 String() 方法

[参考自 stackoverflow](https://stackoverflow.com/questions/53005752/different-behavior-when-printing-a-bytes-buffer-in-go)
