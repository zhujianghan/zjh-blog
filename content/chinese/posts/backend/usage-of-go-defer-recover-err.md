+++
title = 'Usage of Go Defer Recover & Err'
date = 2024-03-04T15:28:24+08:00
tags = ['go']
draft = true
+++

## 1. go 中 defer recover 的使用
> defer recover 用于子函数中 panic 后, 通过子函数中的 recover 捕获 panic, 从而不中断上层函数的继续执行
```go
package main

import (
    "fmt"
    "io"
    "os"
)

func main() {
    boot()

    fmt.Println("----- main end")
}

func boot() {
//    defer func() {
//        if err := recover(); err != nil {
//            fmt.Println("recover in func boot")
//            fmt.Println(fmt.Sprintf("%T %v", err, err))
//        }
//    }()

    _, err := getConfig()

    if err != nil {
        panic(err)
    }

    fmt.Println("---- boot end")
}

func getConfig() ([]byte, error) {
    f, err := os.Open("env.config")
    if err != nil {
        return nil, fmt.Errorf("error-open-config-file: %w", err)
    }
    defer func() { _ = f.Close() }()

    return io.ReadAll(f)
}

```
不会输出 "----- main end"  
当在 boot 开始使用 defer recover 后, 则能输出 "----- main end", 从而达到不中断上层程序的目的

其实 boot 中如果不使用 panic, 而是用 if err != nil 判断的话, 也不会中断运行


> 另外, 如果把 defer recover 不直接放在 panic 相同的函数中, 放到 main 函数中, recover 也会捕获下层的 panic, 但是会中断之后的程序, 这里的 boot 中发生 panic, 则 panic 之后的程序不会执行

## 2. wrap err 
上例中的 `fmt.Errorf("error-open-config-file: %w", err)` 已实现包装 err 的作用, 将下一级返回的 err 添加上本层自定义的信息, 最终会形成多层包裹
如: 
```shell
*fmt.wrapError error-open-config-file: open env.config: The system cannot find the file specified.
```

