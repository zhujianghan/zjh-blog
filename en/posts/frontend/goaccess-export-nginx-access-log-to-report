+++
title="goaccess export nginx access log to report"
date=2024-12-20T10:47:00+08:00
tags=["nginx","goaccess"]
draft=false
+++

## 使用 goaccess 将 nginx access.log 生成可视化 report.html
[goaccess github地址](https://github.com/allinurl/goaccess)

### nginx access.log 过滤
```bash
# 过滤不统计的日志(如图片、js、css、恶意访问的 login、404 等)
cat access.log | grep -vE '(\.css|\.js|\.jpg|\.png|\.gif|\.ico|\.jfif|\.woff|\.woff2|\.eot|\.ttf|\.svg|\.map|bot|Bot|favicon|404|curl|Java|scaninfo|phpMyAdmin|\.env|admin|login|python|http\-client|wp\-|post|POST|\.php|api|ajax|ads\.txt|humans\.txt|well\-known|security\.txt|CONNECT|Head)' > new.log
```

```bash
# 只统计 GET 请求
cat new.log | grep 'GET' > new2.log
```

```bash
# 只统计 GET 首页的请求
cat new2.log | grep 'GET /' > new3.log
```

### goaccess 操作步骤
1. linux 环境(编译/包管理器)安装 goaccess, 编译安装注意要 `--enable-utf8 --enable-geoip=mmdb`
2. /etc/goaccess/goaccess.conf 配置
```
## 2.1 打开 nginx time-format, date-format, log-format

# Apache/NGINX's log formats below.
time-format %H:%M:%S

# Apache/NGINX's log formats below.
date-format %d/%b/%Y

# NCSA Combined Log Format
log-format %h %^[%d:%t %^] "%r" %s %b "%R" "%u"

# ... 其他忽略静态文件、爬虫设置 
```
3. 下载 geo-ip 数据库备用
> https://github.com/P3TERX/GeoLite.mmdb 或 https://github.com/wp-statistics/GeoLite2-City   
> 如果下载的是 .gz 需要解压成 .mmdb 文件
4. 执行 goaccess 指定 conf 及 geo-ip 文件, 生成 report.html
```bash
goaccess access.log -p /etc/goaccess/goaccess.conf --geoip-database /root/goaccess/GeoLite2-Country.mmdb -a > report.html
```
