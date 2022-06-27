+++
title = 'lnmp-环境中-使用-system-函数被报安全因素无法启用'
date = 2019-04-02T09:43:30+08:00
tags = ['php']
draft = false
+++

原因: 要在 `php` 中使用 `mysqldump` 进行数据库备份
在本地 `wamp` 环境中使用没有问题 
在线上 `lnmp` 环境下报错 `system` 函数无法使用

解决办法:
1. 查看线上 `php.ini` 文件是否开启 safe_mode (安全模式); 

2.1.1 如果开启了 安全模式, 则查看 `disable_function` 是否禁用了 `system` 函数
2.1.2 如果 `disable_function` 是禁用了 `system` 函数, 那么取消禁用, 并在 `safe_mode_exec_dir` 中添加一个包含要执行命令的目录

2.2.1 如果未开户安全模式, 直接查看 `disable_function` 是否禁用了 `system` 函数, 取消掉即可
