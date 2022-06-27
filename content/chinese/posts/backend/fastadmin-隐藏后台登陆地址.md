+++
title = 'fastadmin-隐藏后台登陆地址'
date = 2018-12-23T20:38:09+08:00
tags = []
draft = false
+++

我们都知道后台`/admin`是我们最常用的登录入口，方便的同时也留下了隐患，如果你刚好使用了`admin/123456`这种账号密码的方式，会导致我们的后台完全暴露在外。
因此我们建议修改后台的登录入口，达到隐藏后台登录入口的效果。
原文见:https://forum.fastadmin.net/thread/7640

### 操作步骤

1、首页修改`application/config.php`中`deny_module_list`的值，其中默认已经有`common`，我们添加`admin`，改成`['common', 'admin']`
2、然后修改项目`public`目录下的`admin.php`，将其改名为`admin_d75KABNWt.php`，我们可以将`admin.php`其中的`admin`改成任意随机的字符串，越长越好。

### 登录后台

通过以上的修改后，我们不能再通过`[www.yoursite.com/admin](http://www.yoursite.com/admin)`的形式登录后台了，此时我们可以采用`[www.yoursite.com/admin_d75KABNWt.php](http://www.yoursite.com/admin_d75KABNWt.php)`，其中`admin_d75KABNWt.php`就是我们任意修改的名称。
请保护好你后台的登录入口，千万别到处去粘贴，如果有泄漏后台入口，请再次尝试修改即可。

### 安全建议

通过上面的隐藏后台入口地址，我们已经加好了第一道门，以下是FastAdmin给大家的安全建议，为我们后台添加更多的安全防护。
1、定期修改后台管理的登录入口和超级管理员密码，越复杂越好。
2、开启后台登录验证码，开启方式：修改`application/config.php`底部中`login_captcha`，将它的值改为`true`
3、修改后台超级管理员用户名，默认是`admin`，建议修改，修改方式直接在`权限管理`->`管理员管理`中修改
4、移除冗余的管理员，早期FastAdmin中默认添加了几个管理员用于权限划分，建议删除。
