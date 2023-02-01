+++
title = "Apache_bench_in_go__hey"
date = 2023-02-01T10:04:05+08:00
tags = ["apache bench"]
draft = true
+++

## 使用 hey 代替 ab 对网站应用做性能测试 (服务器配置)

> https://github.com/rakyll/hey  
> hey is a tiny program that sends some load to a web application.

> 二八定律: 80% 的请求(访问)集中在 20% 的时间内

假设一个网站每日 pv (page visit) 300w,   
也就是 300w\*80% <=> 3600\*24\*20%, 240w pv 在 17280s 内,
240*10000/17280 = 138 QPS (query per second)

如果单台机器支持的 QPS 在 50, 那么需要 3 台这样的机器才能满足需求


```shell
## hey 执行结果示例
$ hey http://localhost:8080/api/tmp

Summary:
  Total:        0.1239 secs
  Slowest:      0.0961 secs
  Fastest:      0.0006 secs
  Average:      0.0274 secs
  Requests/sec: 1614.3249

  Total data:   11200 bytes
  Size/request: 56 bytes

Response time histogram:
  0.001 [1]     |■
  0.010 [19]    |■■■■■■■■■■■■■■■
  0.020 [46]    |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.029 [51]    |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.039 [33]    |■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.048 [28]    |■■■■■■■■■■■■■■■■■■■■■■
  0.058 [17]    |■■■■■■■■■■■■■
  0.067 [1]     |■
  0.077 [2]     |■■
  0.087 [0]     |
  0.096 [2]     |■■


Latency distribution:
  10% in 0.0127 secs
  25% in 0.0146 secs
  50% in 0.0233 secs
  75% in 0.0388 secs
  90% in 0.0490 secs
  95% in 0.0517 secs
  99% in 0.0943 secs

Details (average, fastest, slowest):
  DNS+dialup:   0.0040 secs, 0.0006 secs, 0.0961 secs
  DNS-lookup:   0.0018 secs, 0.0000 secs, 0.0118 secs
  req write:    0.0000 secs, 0.0000 secs, 0.0001 secs
  resp wait:    0.0233 secs, 0.0005 secs, 0.0780 secs
  resp read:    0.0001 secs, 0.0000 secs, 0.0003 secs

Status code distribution:
  [401] 200 responses
```