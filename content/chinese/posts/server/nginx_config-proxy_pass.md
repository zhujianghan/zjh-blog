+++
title = "Nginx__config Proxy_pass"
date = 2023-02-10T15:06:45+08:00
tags = ["nginx"]
draft = false
+++

> 参考简书: [nginx 之 proxy_pass 详解](https://www.jianshu.com/p/b010c9302cd0)

## nginx conf 之 proxy_pass 使用背景
vue3 项目调用后台接口时, 不希望将后端接口地址(host地址) 暴露给普通用户, 并且直接解决浏览器跨域问题, 会使用 nginx 对接口地址作代码, 表面上访问前端 vue 项目的接口地址, 实际上会通过代码转发到真正的后端服务地址

## vue3+vite 开发环境在 vite.config.js 配置代理
```js
// vite.config.js
export defaut defineConfig({
  ...
  server: {
    proxy: {
      '/api': {
        target: 'http://backend.test/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')        
      }  
    }    
  }
  ...
})
```

## nginx conf 生产环境
按要代理的地址最后是否带 '/',及是否有 子目录分为 2 种情况, 每种情况按是否有子目录又可再细分为 2 种情况
> 有 '/' 表示绝对路径, 不带 location;   
> 没有表示相对路径, 要带上 location 后的路径

```
# 1. 不带 '/'
## 1.1 host 根目录 => http://backend.test

location /api/ {
  proxy_pass http://backend.test
}

# 此时访问 http://frontend.test/api/users/1 会被代理到
http://backend.test/api/users/1

######

## 1.2 子目录 => http://backend.test/admin
location /api/ {
  proxy_pass http://backend.test/admin
}

# 此时访问 http://frontend.test/api/users/1 会被代理到
http://backend.test/admin/api/users/1
```

```
# 2. 带 '/'
# 2.1 host 根目录 => http://backend.test/

location /api/ {
  proxy_pass http://backend.test/
}

# 此时访问 http://frontend.test/users/1 会被代理到
http://backend.test/users/1

# 2.2 子目录 => http://backend.test/admin/

location /api/ {
  proxy_pass http://backend.test/admin/
}

# 此时访问 http://frontend.test/api/users/1 会被代理到
http://backend.test/admin/users/1
```
