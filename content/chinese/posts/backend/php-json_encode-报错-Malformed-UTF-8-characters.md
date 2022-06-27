+++
title = 'php-json_encode-报错-Malformed-UTF-8-characters'
date = 2019-05-22T15:10:19+08:00
tags = ['php']
draft = false
+++

当使用了 `substr()` 进行字符串切割后, 再进行 `json_encode()` 时, 报错  
改使用  `mb_substr()` 即可  

原因:  substr 按字节数进行截取产生了特殊字符, 而 mb_substr 按字符数截取, 则没有问题
