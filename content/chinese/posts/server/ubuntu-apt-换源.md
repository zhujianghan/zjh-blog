+++
title = 'ubuntu-apt-换源'
date = 2020-11-11T13:50:46+08:00
tags = ['linux']
draft = false
+++

```
// 1. /etc/apt/sources.list 文件备份
cp -a /etc/apt/sources.list /etc/apt/sources.list.bak

// 2. 修改 sources.list 文件
sudo vim sources.list
```


tips: 
- [阿里源文件:](https://developer.aliyun.com/mirror/ubuntu?spm=a2c6h.13651102.0.0.3e221b11zojRzt)
- 出现 /etc/apt/sources.list" E212: Can't open file for writing 解决方案 , 可能是因为用户权限不足, 使用 root 或 sudo vim 试试



[参考自: /etc/apt/sources.list" E212: Can't open file for writing](https://stackoverflow.com/questions/8253362/etc-apt-sources-list-e212-cant-open-file-for-writing)
