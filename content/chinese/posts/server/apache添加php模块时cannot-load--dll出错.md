+++
title = 'apache添加php模块时cannot-load--dll出错'
date = 2022-04-16T11:29:14+08:00
tags = []
draft = false
+++

C:\Users\Administrator>httpd.exe -k start
httpd.exe: Syntax error on line 185 of C:/tnwamp/Apache24/conf/httpd.conf: Canno
t load C:/tnwamp/php5.6.31/php5apache2_4.dll into server: \xd5\xd2\xb2\xbb\xb5\x
bd\xd6\xb8\xb6\xa8\xb5\xc4\xc4\xa3\xbf\xe9\xa1\xa3


![QQ五笔截图未命名.png](http://upload-images.jianshu.io/upload_images/4073481-ba4c7460337752ae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
原因可能是缺失 mvcr100.dll, 可以通过双击打开 php.exe文件查看是否如此, 如果提示缺失 mvcr100.dll, 那么上 https://www.microsoft.com/zh-cn/download/confirmation.aspx?id=30679 下载一个 vcredist_x86.exe 即可( 这是是32位的 )
