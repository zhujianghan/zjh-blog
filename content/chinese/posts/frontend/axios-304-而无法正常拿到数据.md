+++
title = 'axios-304-而无法正常拿到数据'
date = 2019-12-20T14:54:39+08:00
tags = ['微信']
draft = false
+++

### 服务器报 304 的原理: 
1. 客户端第一次向服务端请求资源时, 服务端响应 200 并在响应头中返回一个 ETag 值
2. 客户端再次向服务端请求同一个资源( url 未变), 此时会带上上一次服务端返回的 ETag, 服务器检查其自身内容的 ETag 值是否与其一致，如果一致就会返回 304 状态码，告诉你内容和你保存的一致，没有发生改变过。

### 解决办法:
1. 在请求头中加入 `'Cache-Control': 'no-cache'`
```
// axios 封装时, 全局设置
const options = {
    headers: {
      'Cache-Control': 'no-cache'
    }
  }
const client = axios.create(options)
```

2. 在请求中添加一个随机的查询字符串, 如 `?query=时间戳`

[参考:](https://zhidao.baidu.com/question/309560546979375444.html)
