+++
title = 'laravel-dispatch()-异步任务耗时长--'
date = 2022-04-16T11:29:14+08:00
tags = []
draft = false
+++

在控制器中使用  This->dispatch(new Job()) 后, 接口依然耗时长.

原因是 job 类中 __contruct() 方法里操作过多(请求api等), 这一步是同步进行的.
真正 异步 执行的是 Job 类中的 handle() 方法
