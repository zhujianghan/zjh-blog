+++
title = '$_ENV-&-getenv()'
date = 2022-04-16T11:29:14+08:00
tags = ['php']
draft = false
+++

php 中 $_ENV & getenv() 获取的是环境变量, 如 windows 中 高级系统设置中的环境变量 或 linux 中 export 设置

`getenv()` 或 `$_ENV` 获取的是(系统)环境变量, 而不是 `.env` 文件.

在默认`variables_order = "GPCS"` 时, `laravel` 中使用 `$_ENV` 不能获取到(系统)环境变量, 但是可以获取到 `.env` 中的变量, 是因为 `laravel` 在初始化时使用 `phpdotenv` 将 .env 中的值添加到 `$_ENV` 中了.

另外 `laravel` 中 `getenv()` 本来就可以获取到(系统)环境变量, 也可以获取到 `.env` 文件中的设置的环境变量, 是因为 `laravel(phpdotenv)` 用 `putenv()` 设置了请求期间内有效的环境变量.

> ini_set()  配置可修改范围 [参考php手册](https://www.php.net/manual/zh/configuration.changes.modes.php)
![image.png](https://upload-images.jianshu.io/upload_images/4073481-42d7eac9451e47fa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


laravel 初始化 dotenv 参考文章 [Laravel ENV—— 环境变量的加载与源码解析](https://learnku.com/articles/5638/laravel-env-loading-and-source-analysis-of-environment-variables)
