+++
title = 'taro-alias'
date = 2020-07-09T09:27:08+08:00
tags = ['react']
draft = false
+++

官方文档: https://taro-docs.jd.com/taro/docs/config-detail
还要引入 path

```
const path = require('path') // 此步骤不能少
const config = {
    .  
    .
    .
    alias: {
        '@/components': path.resolve(__dirname, '..', 'src/components'),
        '@/utils': path.resolve(__dirname, '..', 'src/utils'),
        '@/assets': path.resolve(__dirname, '..', 'src/assets'),
        '@/static': path.resolve(__dirname, '..', 'src/static')
    },
    .
    .
    .
}

```
