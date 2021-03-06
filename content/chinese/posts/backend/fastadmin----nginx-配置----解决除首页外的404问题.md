+++
title = 'fastadmin----nginx-配置----解决除首页外的404问题'
date = 2019-02-21T08:46:08+08:00
tags = []
draft = false
+++

原文见: https://forum.fastadmin.net/thread/8320

在 nginx 配置文件中加入如下代码

```
server {
    ```
listen 80;
server_name www.abc.com abc.com;
index index.php index.html index.htm default.php default.htm default.html;
root /www/wwwroot/abc/public;

location / {
        index  index.html index.htm index.php;
        #autoindex  on;
         if (!-e $request_filename) {
                rewrite  ^(.*)$  /index.php?s=/$1  last;
                break;
            }
    }

#SSL-START SSL相关配置，请勿删除或修改下一行带注释的404规则
#error_page 404/404.html;
#SSL-END

#ERROR-PAGE-START  错误页配置，可以注释、删除或修改
error_page 404 /404.html;
error_page 502 /502.html;
#ERROR-PAGE-END

#PHP-INFO-START  PHP引用配置，可以注释或修改
include enable-php-72.conf;
#PHP-INFO-END

#REWRITE-START URL重写规则引用,修改后将导致面板设置的伪静态规则失效
#include /www/server/panel/vhost/rewrite/www.xfguoye.com.conf;
#REWRITE-END

#禁止访问的文件或目录
location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md)
{
    return 404;
}

#一键申请SSL证书验证目录相关设置
location ~ \.well-known{
    allow all;
}

location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
{
    expires      30d;
    error_log off;
    access_log /dev/null;
}

location ~ .*\.(js|css)?$
{
    expires      12h;
    error_log off;
    access_log /dev/null; 
}
access_log  /www/wwwlogs/www.abc.com.log;
error_log  /www/wwwlogs/www.abc.com.error.log;
    
}
```

