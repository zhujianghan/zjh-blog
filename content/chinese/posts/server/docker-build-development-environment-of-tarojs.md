+++
title = "Docker Build Development Environment of Tarojs"
date = 2022-10-28T14:43:36+08:00
tags = ["docker","tarojs"]
draft = false
+++

```
// 目录结构
|-- project folder  
|   |-- xxx
|   |-- yyy
|   |-- zzz
|   |-- ...
|   |-- docker-files
|       |  Dockerfile
|       |  docker-compose.yml
```

```
// Dockerfile
# syntax=docker/dockerfile:1
FROM node:16-alpine

RUN \
   npm config set registry http://registry.npmmirror.com \
    && npm install -g @tarojs/cli

RUN mkdir -p /var/www

WORKDIR /var/www
```

```
// docker-compose.yml
version: '3.7'

networks:
  frontend:
    driver: bridge

services:

  ### Taro ##############################################
  taro:
    container_name: taro
    restart: always
    build:
      context: ./
      dockerfile: Dockerfile
    image: my_taro:1.0
    volumes:
      - ../:/var/www
    working_dir: /var/www
    ports:
      - '10086:10086'
    networks:
      - frontend
    stdin_open: true
    tty: true
```

> stdin_open: true  
> tty: true  
> 用于保持镜像运行, 而非 exit (使用 docker-compose up 会发现提示 container exit, 使用 docker-compose up -d 没有该提示)