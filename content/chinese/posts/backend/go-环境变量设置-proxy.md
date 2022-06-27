+++
title = 'go-环境变量设置-proxy'
date = 2019-11-06T17:08:15+08:00
tags = ['go']
draft = false
+++

Go version >= 1.13 当你的GO的版本大于1.13的时候
当你安装的GO的语言版本大于1.13的时候，那么就不用这么麻烦了，直接使用go env -w命令就行了

```
go env -w GOPROXY=https://goproxy.io,direct
go env -w GOPRIVATE=*.corp.example.com
go env -w GO111MODULE=on
```

[转自掘金](https://juejin.im/post/5dbf82c7f265da4d556cf4ce)
