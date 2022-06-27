+++
title = 'laravel-中用「hash_equals」防止时序攻击'
date = 2018-12-09T19:42:25+08:00
tags = []
draft = false
+++

比对验证码是否与缓存中一致时，使用了 [hash_equals](http://php.net/manual/zh/function.hash-equals.php) 方法。

```
hash_equals($verifyData['code'], $request->verification_code)
```

hash_equals 是可防止时序攻击的字符串比较，那么什么是时序攻击呢？比如这段代码我们使用

```
$verifyData['code'] == $request->verification_code
```

进行比较，那么两个字符串是从第一位开始逐一进行比较的，发现不同就立即返回 false，那么通过计算返回的速度就知道了大概是哪一位开始不同的，这样就实现了电影中经常出现的按位破解密码的场景。而使用 `hash_equals` 比较两个字符串，无论字符串是否相等，函数的时间消耗是恒定的，这样可以有效的防止时序攻击。


[原文见laravel-china.org:] (https://laravel-china.org/courses/laravel-advance-training/5.5/building-a-user-registration-interface/929)
