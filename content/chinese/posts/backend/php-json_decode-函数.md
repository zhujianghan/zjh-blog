+++
title = 'php-json_decode-函数'
date = 2019-03-26T17:13:41+08:00
tags = ['php']
draft = false
+++

json_decode 把 json 字符串转成 object 或 array 

```
$str = '{"id":1, "name":"hello"}';
$obj = json_decode($str); // 转成对象
$arr = json_decode($str, true);// 转成数组

// 要求
// json 字符串中的键值必须用 双引号("") 包裹起来, 单引号或者不用引号都不能正确解析, 结果会是 null
```
