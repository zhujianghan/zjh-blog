+++
title = 'nuxt-部署并使用-nginx-作端口转发'
date = 2019-11-14T14:51:04+08:00
tags = ['vue']
draft = false
+++

1. 代码上传 linux 服务器后, 注意 windows 下开发的 node-sass 包需要重新安装(`npm rebuild node-sass`), 打包 nuxt 项目 `npm run build`  

2. pm2 启动 nuxt start, 在项目根目录下 `pm2 start node_modules/nuxt/bin/nuxt.js -- start`

3. 配置 nginx 文件
```
// 最简配置
server
{
    listen 80;
    server_name www.nuxt-project.com;
    
    location / {
    	proxy_pass http://127.0.0.1:3000;
    }    
}

```


> 部署时遇到一个问题, nuxt 代码里的 api 请求地址是本地的, 放到服务器也没改, 造成会返 500

> 部署也可参照 nuxt 官方部署文档
