+++
title = 'laravel-wechat-公众号更换url时报-token-验证失败'
date = 2019-12-30T16:58:43+08:00
tags = []
draft = false
+++

1. VerifyCsrfToken 中间件, 排除 微信相关的 路由, [见文档](https://github.com/overtrue/laravel-wechat)
2. 是否开启了 debugbar, 关闭之, [见github](https://github.com/overtrue/laravel-wechat/issues/318)

