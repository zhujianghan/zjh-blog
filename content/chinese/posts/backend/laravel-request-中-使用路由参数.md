+++
title = 'laravel-request-中-使用路由参数'
date = 2019-04-20T23:31:30+08:00
tags = []
draft = false
+++

- 在 Controller 中使用请求参数直接使用 \$request->input('name') 或 $request->name;
- 在 Controller 中使用路由参数直接使用 [参数注入](https://learnku.com/docs/laravel/5.8/controllers/3893) 或 $request->name;

- 在 Request 中, 使用请求参数使用 \$this->input('name') 或 $this->name
- 在 Request 中, 使用请求参数使用 $this->name, (不能使用参数注入)

[在使用动态属性时，Laravel 首先会在请求载体中查找参数的值。如果该值不存在，Lavarel 将在路由参数中搜索](https://learnku.com/docs/laravel/5.8/requests/3894)。
