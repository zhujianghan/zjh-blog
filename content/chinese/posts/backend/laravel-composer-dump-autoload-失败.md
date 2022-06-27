+++
title = 'laravel-composer-dump-autoload-失败'
date = 2020-08-28T14:05:14+08:00
tags = []
draft = false
+++

报 class  xxx not found

```
// 1. 执行 php artisan config:clear

// 2. 再不行就执行 php artisan clear-compiled

// 3. 再不行就把 vendor/composer/ 文件夹里 autoload_ 开头的文件删除

```
