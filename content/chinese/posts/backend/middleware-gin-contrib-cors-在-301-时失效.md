+++
title = 'middleware-gin-contrib-cors-在-301-时失效'
date = 2022-04-16T11:29:14+08:00
tags = ['go']
draft = false
+++

背景:
 gin 配置了路由 router.GET("/api/users") , 添加了 cors 中间件,
但是访问 /api/users/ 时, 会返回 301 + cros 错误

原因:
gin 默认打开 "RedirectTrailingSlash", 表示自动添加(或删除) "/" 并作 301 跳转, 这时候还未进入 middleware, 所以 cors 中间件所添加的 header 不会出现在返回头中.

中间件其它现象:  
```go
c.Header("before-next": "can-be-show")     // 会写入到返回头
c.next()
c.Header("after-next": "won't be returned")  // 不会出现在返回头中
```

解决办法:
1. 在 gin 路由中同时添加 带 / 和不带 / 的路由, 工作量大, 且 ugly ❌
2. 使用 nginx 在 go-web 程序外部直接全部带上 cors 头 ✅

