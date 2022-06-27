+++
title = 'laravel--Request-类-通过后的-$request-包含无需验证的-字段'
date = 2019-05-26T09:24:39+08:00
tags = []
draft = false
+++

```
// Request 类:
$rule = [
  'email' => 'required|email',
  'password' => 'required|alpha_dash|between:6,20'
];


// form
{
  name: 'abc',
  email: 'abc@qq.com',
  password: '123456',
}


// Request $request
[
  'name' => 'abc',
  'email' => 'abc@qq.com',
  'password' => '123456',
]

```

$request 里面会包含 name 这个没有 ( 无需 ) 验证的字段
