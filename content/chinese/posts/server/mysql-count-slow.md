+++
title = 'mysql 220k 数据行时, count() 很慢, 要2s多'
date = 2025-03-21T15:43:00+08:00
tags = ['linux', 'mysql']
draft = false
+++

> 问 deepseek "mysql innodb 20万行, 使用 select count(*) from tablea; 耗时2s, 正常吗"  
> 答: mysql innodb 的查询行数是全表扫描, 而 myisam 是直接存储了数量,
可通过加大 innodb_buffer_pool_size 的值来加速, innodb_buffer_pool_size 一般默认为 128M, 现在 改为 4G, 速度变成了 0.2s


### 查询当前 mysql 的 innodb_buffer_pool_size 值
- sql: `SHOW VARIABLES LIKE 'innodb_buffer_pool_size';`
- my.ini(windows) 或 my.cnf(linux) 的 [mysqld] 下

### 修改
- my.ini(my.cnf) 配置文件修改(重启后生效)
    ```
    [mysqld]
    innodb_buffer_pool_size = 4G
    ```
- 临时修改（重启后失效）
  ```
  SET GLOBAL innodb_buffer_pool_size = 4294967296;  # 4G
  ```


### 如果是在 docker compose 中改了配置文件, 需要重新 build image
```
# 在 docker-compose.yml 同级文件夹下, 重新 build mysql, 不影响其它 image
docker compose build mysql

docker compose up -d
```
 
