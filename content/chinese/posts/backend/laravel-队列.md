+++
title = 'laravel-队列'
date = 2019-09-24T22:40:09+08:00
tags = []
draft = false
+++

1. windows 中使用 horizon, 原文见 [github](https://github.com/laravel/horizon/issues/78), [learnku](https://learnku.com/laravel/t/14449/failed-to-install-composer-require-laravelhorizon10)
```
composer require laravel/horizon --ignore-platform-reqs
php artisan vendor:publish --provider="Laravel\Horizon\HorizonServiceProvider"
```

2. 在 .env 中将 `QUEUE_CONNECTION` 改为 `reids` 后需要在命令行运行 `php artisan queue:listen` 或 `php artisan queue:work` 才会开启队列中的任务

3. 因为错误原因一直重复执行某一个队列, 重启 redis 依然如此, 那么需要清空 redis  中的数据
![图片.png](https://upload-images.jianshu.io/upload_images/4073481-f7711f2d84fd90e5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
redis-cli #进入脚手架
flushall #清空redis的数据
```
[learnku](https://learnku.com/laravel/t/16677)
[overtrue 给队列新建 redis 连接](https://zhuanlan.zhihu.com/p/27609435)

