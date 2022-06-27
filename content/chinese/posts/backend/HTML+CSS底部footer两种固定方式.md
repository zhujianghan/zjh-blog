+++
title = 'HTML+CSS底部footer两种固定方式'
date = 2018-12-28T15:21:22+08:00
tags = []
draft = false
+++

原文见: https://blog.csdn.net/xianglikai1/article/details/78411615

网页常见的底部栏（footer）目前有两种：

一、永久固定，不管页面的内容有多高，footer一直位于浏览器最底部，适合做移动端底部菜单，这个比较好实现;
```
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <meta charset="utf-8" />
    <style>
        body {
            padding-bottom: 50px;
        }
 
        .footer {
            position: fixed;
            left: 0px;
            bottom: 0px;
            width: 100%;
            height: 50px;
            background-color: #eee;
            z-index: 9999;
        }
    </style>
</head>
<body>
    内容，可以大量复制看效果<br />
 
    <div class="footer">固定在底部</div>
</body>
</html>
```


二、相对固定，当页面内容高度不沾满浏览器高度，footer显示在浏览器底部，且不会出现滚动条，如果页面内容高度超出浏览器高度，footer则相对与内容的最底部，并且自动出现滚动条；
```html
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <meta charset="utf-8" />
    <style type="text/css">
        * {
            margin: 0px;
            padding: 0px;
        }
 
        html, body {
            height: 100%;
        }
 
        .footer {
            margin-top: -50px;
            height: 50px;
            background-color: #eee;
            z-index: 9999;
        }
 
        .wrap {
            min-height: 100%;
        }
 
        .main {
            padding-bottom: 50px;
        }
    </style>
</head>
<body>
    <div class="wrap">
        <div class="main">
            内容，可以大量复制看效果<br />
 
        </div>
    </div>
    <div class="footer">相对在底部</div>
</body>
</html>
```

