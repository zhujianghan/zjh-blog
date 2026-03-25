+++
title = 'rsync & screen to backup data in linux'
date = 2026-03-25T10:21:00+08:00
tags = ['rsync', 'screen', '7z']
draft = false
+++

## Steps
#### 1. 进行终端后, 新开一个 screen 窗口(例如名为 backup, 后续用于重新回到窗口)
```bash
screen -S backup
```

#### 2. 在 screen 窗口中执行 rsync 命令
```bash
# /data/share/ 中的文件 到 /data/backups/share/  中的文件, 后面的文件夹不再生成 share 路径, 只 sync 文件
# rync -anv 代表 模拟运行, 查看影响
# -P 表示 --progress + --partial, 显示进度 + 保留中断的临时文件(下次可续传)
# ps: 如果没有 --partial 且中断了, 只不过没有临时文件, 下次整个文件重新传输
rsync -avP /data/share/ /data/backups/share/   
```

#### 3. 退出 screen 窗口
```bash
# 不需要这个 screen 窗口了, `exit` 关闭退出
# 先按 Ctrl + A, 放开, 快速按 D
# 或者 先按 Ctrl + A, 放开 A, 再快速按 D
Ctrl + A -> D  
```

#### 4. 回到 screen 窗口 (名为 backup)
```bash
# 查看所有后台 screen 窗口: screen -ls
screen -r backup
```

#### 5. 使用 7zip 进行分片压缩
```
# 如果未安装则先安装 7zip(7zip包只支持 7z格式, full包还支持 zip等)
sudo apt install p7zip-full

# 分片10G, 指定目标的全路径(否则 backups.zip 到当前目录), source 目录
# backups.7z.001, backups.7z.002,...
7z a -v10g  /data/tmp/backups.7z /data/backups/


```


#### 6. 7zip 解压
```
# 小写o, 不要有空格, 到指定文件夹, 不添加 -o 则在当前文件夹
7z x -o/data/tmp/output backups.7z.001
```

#### 7. crontab 每日执行 rsync (上次未完成, 不允许重复执行, 直接跳过)
```
# 加锁
# 每天凌晨 2 点 执行 rsync 同步，绝不重复运行
# 0 2 * * * flock -n /tmp/rsync_backup.lock rsync -avP /源路径 /目标路径
0 2 * * * flock -n /tmp/rsync_backup.lock rsync -avP /data/share/ /data/backups/share/ >> /home/lenovo/rsync_backups.log 2>&1

```



[rscyc用法参考: 阮一峰-rsync 用法教程](https://www.ruanyifeng.com/blog/2020/08/rsync.html)
