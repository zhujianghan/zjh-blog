+++
title = "Go File Server"
date = 2023-10-10T14:36:51+08:00
tags = ["go", "http"]
draft = false
+++

# 使用 go 内置 http 快速开启文件服务器

```go

func main() {
	// 方式1
	// http.ListenAndServe(":8080", http.FileServer(http.Dir("./public")))

	// 方式2: 可自动生成对应文件列表页面
    fs := http.FileServer(http.Dir("public"))
    // http.Handle("/public/", http.StripPrefix("/public/", fs))
    // http.Handle("/", http.StripPrefix("/public/", fs))
    http.Handle("/", fs)
    http.ListenAndServe(":8080", nil)
}


```
