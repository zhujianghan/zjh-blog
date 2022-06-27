+++
title = '运行-npm-config-卡死'
date = 2019-09-24T22:39:43+08:00
tags = []
draft = false
+++

之前运行过
```
 npm config set prefix "D:\Program Files(×86)\nodejs\node_global"
```

之后再运行 `npm config ls -a` 都不动了. 重装 node 也没有用

解决办法: 删除 `users/{$user}/.npmrc` 文件

[原文地址](https://www.imooc.com/qadetail/196678?lastmedia=1)
