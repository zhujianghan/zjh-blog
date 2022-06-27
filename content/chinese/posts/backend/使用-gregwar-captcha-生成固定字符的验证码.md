+++
title = '使用-gregwar-captcha-生成固定字符的验证码'
date = 2022-04-16T11:29:14+08:00
tags = []
draft = false
+++

使用 [gregwar/captcha](https://github.com/Gregwar/Captcha) 可以方便地生成验证码图片(直接输出或 base64)  

```
$builder = new CaptchaBuilder;
$builder->build();
$text = $builder->getPhrase(); // 验证码文本
$pic = $builder->inline();// base64 captcha
```

现如今在 laravel 本地环境中(非 production), 不想每次生成新的要去图片查验的验证码, 查看文档, 说是 "直接使用 `$builder = new CaptchaBuilder('12345')`", 其中的 12345 (phrase) 必须为 string
但是这样再使用 $builder->inline() 会报错, 无法生成验证码图片

经过查看  CaptchaBuilder.php 类文件, 比较两种方式有什么差别() 可以发现, 随机生成验证码我多走了一步 `$builder->build()`, 而这正是通过 GD 库来绘制图片的步骤. 问题的原因找到了

看完 build() 方法会看到 `return $this`, 于是可以通过 `$builder = $builder->build()` 来获取最新的实例, 接下来就可以使用 `inline()` 方法了

ps: 其实就算没有 `return $this` (不使用 `$builder = $builder->build()`  而用 `$builder->build()` ) 也可以正常返回 base64 图片, 因为图片内容在方法中传回给实例的属性了, 在 `inline()` 方法中会调到到这些属性



`
