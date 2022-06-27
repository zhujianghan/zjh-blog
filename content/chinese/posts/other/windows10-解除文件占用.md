+++
title = 'windows10-解除文件占用'
date = 2022-06-08T11:14:48+08:00
tags = []
draft = false
+++

win10 使用 powershell 删除文件夹 `rm -r -fo ./dirname`, 不能使用 `rm -rf ./dirname`
参考知乎 [Powershell 中的 rm -rf](https://zhuanlan.zhihu.com/p/441237235)

--- 

任务管理器 -> 性能 -> 打开资源监视器 -> cpu -> 关联的句柄 -> 搜索句柄
参考百度经验[强制解除文件占用](https://jingyan.baidu.com/article/c1a3101e9390fa9f656debdb.html)
