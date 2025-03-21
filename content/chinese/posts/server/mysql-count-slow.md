+++
title = 'mysql 220k 数据行时, count() 很慢, 要2s多'
date = 2025-03-21T15:43:00+08:00
tags = ['linux']
draft = false
+++

经咨询 deepseek 后"mysql innodb 20万行, 使用 select count(*) from tablea; 耗时2s, 正常吗", 发现 mysql innodb 的查询行数是全表扫描, 而 myisam 是直接存储了数量, 
可通过加大 innodb_buffer_pool_size 的值来加速, innodb_buffer_pool_size 一般默认为 128M, 现在 改为 4G, 速度变成了 0.2s
