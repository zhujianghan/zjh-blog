+++
title = 'laravel-多对多关联时,-会出现-pivot-字段,-如何删除'
date = 2020-01-13T10:28:39+08:00
tags = []
draft = false
+++

```
$user->roles->makeHidden('pivot');
// 或者在 model 中
protect $hidden = ['pivot'];
```
