+++
title = 'php-的-session-文件'
date = 2020-10-12T15:34:47+08:00
tags = ['php']
draft = false
+++

由于 http 无状态性, 一般 MVC 可以使用session 用于存储用户信息.

```php
<?php

session_start();

 // 开启 session, 将会生成一个 session_id, 通过 http 响应头返回给浏览器, 浏览器存储到本地的 cookie 中, 下次 http 请示会自动携带给服务端; 

// 同时会在服务端生成一个文件 如 sess_2rh6hq44kjbtagri2r88dj16b1 (后面一串为 session_id), 当前会话(通过 id保持) 的数据, 会保存在该文件中, 如 session('name', 'test')


session_unset(); // 注销当前会话下的 session 变量, 但不会删除当前 sess_xxxx... 文件, 而是清空文件里的内容(key: value)



```
