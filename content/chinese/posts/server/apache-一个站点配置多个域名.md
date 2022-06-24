+++
title = 'apache-一个站点配置多个域名'
date = 2022-04-16T11:29:14+08:00
tags =  ['apache','域名']
keywords = ['apache多域名']
draft = false
+++

在 `ServerAlias` 中配置, 而不是在 `ServerName` 中配置
```
<VirtualHost *:80>
  ServerName 4a89w9.natappfree.cc
  ServerAlias 4a89w9.natappfree.cc www.appapi.test
  DocumentRoot "${INSTALL_DIR}/www/u/public"
  <Directory "${INSTALL_DIR}/www/u/public">
    AllowOverride All
    Require all granted
  </Directory>
</VirtualHost>
```
