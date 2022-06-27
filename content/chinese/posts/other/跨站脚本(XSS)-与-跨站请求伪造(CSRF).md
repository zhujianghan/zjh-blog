+++
title = '跨站脚本(XSS)-与-跨站请求伪造(CSRF)'
date = 2021-06-16T09:26:42+08:00
tags = []
draft = false
+++

## cross-site-scripting (XSS)
动态网站才会存在, 静态站点则不存在这个问题

对 XSS 最佳的防护应该结合以下两种方法
- 一是验证所有**输入数据**，进行转义 (escaper)
- 另一个是对所有**输出数据**进行适当的处理，以防止任何已成功注入的脚本在浏览器端运行。

----

##  cross-site-request-forgery (CSRF)
跟XSS相比，XSS 利用的是用户对指定网站的信任，CSRF 利用的是 `网站` 对 `用户网页浏览器` 的信任。

攻击者并不能通过CSRF攻击来直接获取用户的账户控制权，也不能直接窃取用户的任何信息。
他们能做到的，是欺骗用户浏览器，让其以用户的名义运行操作

csrf 防护:
- 请求的 referer, 但不能保证 referer 不被篡改
- 随机生成的 校验token, 随表单页面一起生成, 并一起返回到后端

----
对于前后端分离的项目, 由于后端使用 token 进行用户身份验证, 所以即使 token 存储在 cookie 中, 也不会被 csrf 攻击.

[learnku.com](https://learnku.com/articles/12372/csrf-protection-of-laravel-front-and-rear-end-separation)
