+++
title = 'laravel-生命周期--路由实例'
date = 2019-05-03T19:31:42+08:00
tags = []
draft = false
+++

`{{host}}/api/topics/:topic/replies`   
如上路由(需要登录, 在中间件中使用了 `api.auth`)   

实测发现  
1. 如果 `:topic` 不存在, 则报 404, 说明首先走的路由中隐性绑定的数据模型;     
2. 填入正确的 `topic id` 后, 报错 401, authenticate failed, 说明第二步走的中间件;   
3. 填入正确的 `bearer token`, 报错 422,  Unprocessable Entity, 提示 xx 参数不能为空或格式不正确, 说明这里才开始进行 request 表单请求类验证



