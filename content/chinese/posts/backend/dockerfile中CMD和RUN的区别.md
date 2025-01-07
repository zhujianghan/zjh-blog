+++
title = 'dockerfile中CMD和RUN的区别'
date = 2025-01-07T13:46:00+08:00
tags = ['docker']
draft = false
+++

> 背景: 在使用 docker-compose 构建镜像时, 对 nextjs service 执行 RUN npm install 报错, 找不到 package.json 文件
原因: volume 中共享的文件夹, 是在容器启动时才开始共享, 在构建时没有共享, 导致 RUN 找不到 package.json, 而 CMD 才是容器运行时执行的命令


## 在 Dockerfile 中，CMD 和 RUN 是两个不同的指令，它们用于不同的目的和阶段：
### RUN

    - 用途：RUN 指令用于在构建 Docker 镜像时执行命令。
    - 执行阶段：它在 Docker 镜像的构建过程中运行，生成一个新的镜像层。
    - 结果：RUN 命令的结果被永久保存在镜像中，成为镜像的一部分。每次执行 RUN 时，都会创建一个新的镜像层。
    - 常见用途：
        - 安装软件包和依赖项。
        - 下载和解压文件。
        - 编译源代码。
        - 创建目录和文件。
        - 配置环境和系统设置。

### CMD

    - 用途：CMD 指令用于指定容器启动时要执行的命令。
    - 执行阶段：它在容器启动时运行，而不是在镜像构建时。
    - 结果：CMD 命令的结果不会保存在镜像中，因为它是容器运行时的指令。
    - 常见用途：
        - 运行应用的主进程。
        - 执行容器的默认命令。
        - 可以被 docker run 命令中的命令覆盖。


## 配置示例
```env
# .env
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
NEXT_PORT=13300
```


```yml
# docker-compose.yml
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

```dockerfile
# next/dockerfile
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

ENTRYPOINT ["/entrypoint.sh"]ARG NODE_VERSION

```