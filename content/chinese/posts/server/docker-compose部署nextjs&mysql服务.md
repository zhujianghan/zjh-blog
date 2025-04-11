+++
title = "docker compose 部署 nextjs & mysql"
date = 2025-02-10T16:07:00+08:00
tags = ["docker"]
draft = false
+++

```
# dock 文件夹为根文件夹
# 其下包涵 mysql 和 next 文件夹, 及 docker-compose.yml 和 .env 文件

```

```
# dock/.env
###########################################################
###################### General Setup ######################
###########################################################

### Paths #################################################

# Choose storage path on your machine. For all storage systems
DATA_PATH_HOST=~/.dock/data

### Drivers ################################################

# All volumes driver
VOLUMES_DRIVER=local

# All Networks driver
NETWORKS_DRIVER=bridge

### Docker compose files ##################################

# Select which docker-compose files to include. If using docker-sync append `:docker-compose.sync.yml` at the end
COMPOSE_FILE=docker-compose.yml

# Change the separator from : to ; on Windows
COMPOSE_PATH_SEPARATOR=:

# Define the prefix of container names. This is useful if you have multiple projects that use laradock to have separate containers per project.
COMPOSE_PROJECT_NAME=dock

### Docker Host IP ########################################

# Enter your Docker Host IP (will be appended to /etc/hosts). Default is `10.0.75.1`
DOCKER_HOST_IP=10.0.75.1

###########################################################
################ Containers Customization #################
###########################################################

### MYSQL #################################################

# 5.7, 8.0, 8.4, 9.0
MYSQL_VERSION=8.4
MYSQL_DATABASE=default
MYSQL_USER=default
MYSQL_PASSWORD=secret
MYSQL_PORT=13306
MYSQL_ROOT_PASSWORD=root
MYSQL_TIMEZONE=UTC
MYSQL_ENTRYPOINT_INITDB=./mysql/docker-entrypoint-initdb.d

### NEXT #################################################
NODE_VERSION=22
NEXT_PORT=13000

```



```
# dock/docker-compose.yml

networks:
  frontend:
    driver: ${NETWORKS_DRIVER}
  backend:
    driver: ${NETWORKS_DRIVER}
volumes:
  mysql:
    driver: ${VOLUMES_DRIVER}
  next:
    driver: ${VOLUMES_DRIVER}

services:
### MySQL ################################################
    mysql:
      restart: always
      build:
        context: ./mysql
        args:
          - MYSQL_VERSION=${MYSQL_VERSION}
      environment:
        - MYSQL_DATABASE=${MYSQL_DATABASE}
        - MYSQL_USER=${MYSQL_USER}
        - MYSQL_PASSWORD=${MYSQL_PASSWORD}
        - MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
        - TZ=${MYSQL_TIMEZONE}
      volumes:
        - ${DATA_PATH_HOST}/mysql:/var/lib/mysql
        - ${MYSQL_ENTRYPOINT_INITDB}:/docker-entrypoint-initdb.d
      ports:
        - "${MYSQL_PORT}:3306"
      networks:
        - backend

### next #####################################################
    next:
      restart: always
      depends_on:
        - mysql
      build:
        context: ./next
        args:
          - NODE_VERSION=${NODE_VERSION}
      ports:
        - "${NEXT_PORT}:3000"
      container_name: next
      stdin_open: true
      networks:
          - frontend
          - backend
      volumes:
        - ./next:/usr/src/app/next
        - /usr/src/app/next/node_modules

```

```
# dock/mysql/my.cnf

# The MySQL  Client configuration file.
#
# For explanations see
# http://dev.mysql.com/doc/mysql/en/server-system-variables.html

[mysql]

[mysqld]
sql-mode="STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION"
character-set-server=utf8
innodb_use_native_aio=0
```

```
# dock/mysql/Dockerfile

ARG MYSQL_VERSION
FROM mysql:${MYSQL_VERSION}

#####################################
# Set Timezone
#####################################

ARG TZ=UTC
ENV TZ ${TZ}
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone && chown -R mysql:root /var/lib/mysql/

COPY my.cnf /etc/mysql/conf.d/my.cnf

RUN chmod 0444 /etc/mysql/conf.d/my.cnf

RUN if [ ${MYSQL_MAJOR} = '8.0' ]; then \
    echo 'default-authentication-plugin=mysql_native_password' >> /etc/mysql/conf.d/my.cnf; \
  fi

```


```
# dock/next/Dockerfile
ARG NODE_VERSION
FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app/next

RUN \
    apk update && apk add --no-cache openssl && \
    npm config set registry https://registry.npmmirror.com && \
    npm install -g pnpm

# 创建并写入脚本文件
RUN \
    echo '#!/bin/sh' > /entrypoint.sh && \
    echo 'npm install' >> /entrypoint.sh && \
    echo 'npm run dev' >> /entrypoint.sh && \
    chmod +x /entrypoint.sh

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

ENTRYPOINT ["/entrypoint.sh"]

```


在 dock 文件夹执行 `docker compose up -d` 即可运行容器


> 注意: 这里使用 目录挂载的方式会导致在容器中 执行 npm run install 生成的 node_modules 目录属主为 root, 而非主机中执行 docker compose 的用户. 
> 可以 `docker run -it -v /home/demouser/docktmp/nextjs:/myapp:rw node:22-alpine sh` 进行一个容器(默认就是root用户), 在其中有权限去删除上个容器中的 root 生成的文件夹
> 推荐使用 Copy 代码到容器方式, 避免在主机生成 node_modules 等文件夹

## 如何进入mysql容器执行数据库导入导出
```
# 进入容器
docker compose exec mysql bin/bash

# 导出 sql
mysqldump -u <username> -p <source_database> > dump.sql

# 导入 sql
mysql -u <username> -p <target_database> < dump.sql
```


