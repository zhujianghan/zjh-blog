+++
title="gofrp (内网穿透) 的安装和使用"
date=2024-12-23T15:06:00+08:00
tags=["frp","linux"]
draft=false
+++

[文档地址](https://gofrp.org/zh-cn/docs/)

# 使用 gogrp 通过自定义域名访问内网的 Web 服务

## 1. 安装
分别在 client 和 server 下载便携版的可执行文件,   
如 client 是 windows 系统, 则下载后的文件为  
`frpc.exe`, `frpc.toml`, `frps.exe`, `frps.toml`, `LICENSE`, client 端只需要 `frpc.exe` 及 `frpc.toml` 即可

如 server 是 linux 系统, 则下载后的文件只需要 `frps` 及 `frps.toml`

## 2. 配置
```
# frps.toml 配置
bindPort = 7000
vhostHTTPPort = 8600  # 要设置 vhostHTTPPORT, 最后通过服务端的 ip:vhost端口 进行访问
```
  
```
# frpc.toml 配置
serverAddr = "xx.xx.xx.xx"
serverPort = 7000

[[proxies]]
name = "test-web"
type = "http"
localIP = "127.0.0.1"
localPort = 3000
#remotePort = 6000
customDomains = ["xx.xx.xx.xx"]
```

## 3. 启动服务

```
# 服务端
./frps -c ./frps.toml
```
  
```
# 客户端
./frpc -c ./frpc.toml
```

## 4. 访问
访问服务端的地址 http://xx.xx.xx.xx:8600