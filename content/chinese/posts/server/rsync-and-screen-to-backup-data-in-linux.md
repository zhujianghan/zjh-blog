+++
title = 'rsync & screen to backup data in linux'
date = 2026-03-25T10:21:00+08:00
tags = ['rsync', 'screen']
draft = false
+++

```

## Steps
1. 进行终端后, 新开一个 screen 窗口(例如名为 backup, 后续用于重新回到窗口)
```bash
screen -S backup
```

2. 在 screen 窗口中执行 rsync 命令
```bash
# /data/share/ 中的文件 到 /data/backups/share/  中的文件, 后面的文件夹不再生成 share 路径, 只 sync 文件
# rync -anv 代表 模拟运行, 查看影响
rsync -av /data/share/ /data/backups/share/   
```

3. 退出 screen 窗口
```bash
# 不需要这个 screen 窗口了, `exit` 关闭退出
# 先按 Ctrl + A, 放开, 快速按 D
# 或者 先按 Ctrl + A, 放开 A, 再快速按 D
Ctrl + A -> D  
```

4. 回到 screen 窗口 (名为 backup)
```bash
# 查看所有后台 screen 窗口: screen -ls
screen -r backup
```



[rscyc用法参考: 阮一峰-rsync 用法教程](https://www.ruanyifeng.com/blog/2020/08/rsync.html)
