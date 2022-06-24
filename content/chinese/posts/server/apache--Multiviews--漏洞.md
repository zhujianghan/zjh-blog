+++
title = 'apache--Multiviews--漏洞'
date = 2022-04-16T11:29:14+08:00
tags =  ['apache','安全']
keywords = ['multiviews']
draft = false
+++

腾讯云安全检测提示 `xxx.com/icons/index` 及 `xxx.com/icons/small/index` 存在安全漏洞

打开发现是一串 icons 图片, 而在项目文件里并没有这些文件
![图片.png](https://upload-images.jianshu.io/upload_images/4073481-cef30b4bbc8bb0fc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
见: [http://www.apache.org/icons/small/](http://www.apache.org/icons/small/)


> 以下引用自: [http://www.511yj.com/apache-colose-icons.html](http://www.511yj.com/apache-colose-icons.html)


我们如果使用了apache服务器，当我访问http://xxx.xxx.xxx/icons/时会自动显示这个目录下的所以文件列表，这行造成网站目录信息的泄露对我们的网站安全造成威胁，在 [关闭apache自动目录列表功能的三种方法](http://www.511yj.com/apache-down-listing.html) 这篇文章中的三种方法都不能禁止自动目录列表，你如果使用网站安全监测，会提醒你`发现目录启用了自动目录列表功能`，所以我们必须禁止它，经过测试，按如下步骤可以禁止：

打开目录apache/conf/extra/下的文件httpd-autoindex.conf
找到

```
Alias /icons/ "/xampp/apache/icons/"
 
<Directory "/xampp/apache/icons">
    Options Indexes MultiViews
    AllowOverride None
    Require all granted
</Directory>
```

```
<Directory "/xampp/apache/icons">
    Options  MultiViews
    AllowOverride None
    Require all granted
</Directory>
```


--- 
我实际上是注释掉了这些配置, 因为用不到这些 icons, 直接达到目的
