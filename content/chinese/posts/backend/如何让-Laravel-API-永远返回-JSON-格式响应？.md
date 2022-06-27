+++
title = '如何让-Laravel-API-永远返回-JSON-格式响应？'
date = 2019-03-26T21:29:07+08:00
tags = []
draft = false
+++

见: https://www.jianshu.com/p/c0b7365a21e5


当你在编写完全为 API 服务的 Laravel 应用时，你希望所有响应都是 JSON 格式的，而不是例如说授权错误会重定向到 /home 或 /login，最终重定向会变成 InvalidArgumentException: Route [login] is not defined. 的视图。
下面这个简单的方案，可以让你的 Laravel 应用优先响应为 JSON 格式。
第一步、编写 BaseRequest
首先我们需要构建一个  BaseRequest 来重写 Illuminate\Http\Request ，修改为默认优先使用 JSON 响应：
app/Http/Requests/BaseRequest.php
<?php
namespace App\Http\Requests;

use Illuminate\Http\Request;
class BaseRequest extends Request
{
    public function expectsJson()
    {
        return true;
    }
    public function wantsJson()
    {
        return true;
    }
}

第二步、替换 BaseRequest
在 public/index.php 文件中，将 \Illumiate\Http\Request 替换为我们的 BaseRequest，如下：
$response = $kernel->handle(
    $request = \App\Http\Requests\BaseRequest::capture()
);

搞定！
现在所有的响应都是 application/json ，包括错误和异常。

作者：summerbluet
链接：https://www.jianshu.com/p/c0b7365a21e5
来源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
