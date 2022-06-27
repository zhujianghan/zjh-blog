+++
title = 'acme-sh-自动申请-ssl-证书'
date = 2022-04-16T11:29:14+08:00
tags = ['linux']
draft = false
+++

```
/root/.acme.sh/acme.sh --install-cert --nginx /usr/local/nginx/conf/vhost/my.domain.conf  -d my.domain.com \
--key-file /usr/local/nginx/ssl/my.domain.com/key.pem \
--fullchain-file /usr/local/nginx/ssl/my.domain.com/cert.pem \
--reloadcmd "supervisorctl restart nginx"
```

**上面的 --nginx 指定配置文件路径**
参考: https://github.com/acmesh-official/acme.sh/wiki/%E8%AF%B4%E6%98%8E





```
1. 生成证书, 检测域名所有权
acme.sh  --issue  -d www.aaa.com --webroot  /www/wwwroot/www.aaa.com

2. 配置 nginx 文件路径
  ssl_certificate        /usr/local/nginx/ssl/www.aaa.com/cert.pem;
  ssl_certificate_key    /usr/local/nginx/ssl/www.aaa.com/key.pem;

3. 实施 (宝塔面板中重启 nginx 使用  /etc/init.d/nginx reload)
 acme.sh --install-cert --nginx /www/server/panel/vhost/nginx/www.aaa.com.conf  -d www.aaa.com \
--key-file /usr/local/nginx/ssl/www.aaa.com/key.pem \
--fullchain-file /usr/local/nginx/ssl/www.aaa.com/cert.pem \
--reloadcmd "/etc/init.d/nginx reload"

```
