+++
title = 'laravel-定时任务不执行了--'
date = 2022-04-16T11:29:14+08:00
tags = []
draft = false
+++

linux 服务端使用 pm2 开启 `php artisan queue:work` 守护进程, 突然 队列不工作了. 

原因可能是 代码更新后, 没有重启 任务, 所以 `pm2 reload 0` 即可
