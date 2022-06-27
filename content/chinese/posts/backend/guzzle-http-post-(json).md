+++
title = 'guzzle-http-post-(json)'
date = 2022-04-16T11:29:14+08:00
tags = ['php']
draft = false
+++

```php
    $client   = new \GuzzleHttp\Client();
    $response = $client->post('http://xxx.com/api/login', [
        'json' => [
            'phone'      => "152xxxx1234",
            'password' => "123456",
        ]
    ]);

    $response = $client->post('http://xxx.com/api/login', [
        'form_params' => [
            'phone'      => "152xxxx1234",
            'password' => 123456,
        ]
    ]);
```

若使用 `json`, 则 数组中的值(不论是否数字), 都要用 引号 起来, 而 `form_params` 则不需要

[reference](https://guzzle-cn.readthedocs.io/zh_CN/latest/quickstart.html#id9)
