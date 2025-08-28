+++
title = 'dell 用 ventoy 安装 win11 失败'
date = 2025-07-23T09:30:12+08:00
tags = ['ventoy']
draft = false
+++


### 安装失败解决方法:

1. boot项, 设置引导顺序, 关闭 security boot
2. storage项, 设置硬盘 ahci, 不能为 raid on 
3. security, 项保持 ptt on
4. 第一次重启后拔掉u盘
5. 使用 Shift+F10 进入 cmd 设置没有网络, `oobe\bypassnro`
