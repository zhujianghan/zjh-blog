+++
title = '一个小事故---postman-接口走不通了'
date = 2019-04-24T09:15:24+08:00
tags = []
draft = false
+++

使用 `postman` 测试时, 发现接口走不通了, 而通过浏览器能访问到

想起昨天用了 fiddler 而给 postman 做了代理,   
解决办法就是   
1. 打开 fiddler, 让 fiddler 代理请求;   
2. 或者关闭 postman 的代理即可
