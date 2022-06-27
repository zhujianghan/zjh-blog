+++
title = '用-uploadifive-插件上传文件时的问题'
date = 2018-05-20T17:33:38+08:00
tags = ['php']
draft = false
+++

1. 官方文档错误   fileType 的值是 'fileType': 'image'   而不能是  'fileType': 'image/*'   

2. 后台用tp5框架时, 返回值如果是数组,则要通过json_encode [ 或者tp5 的 json ]函数进行转码,  而不能直接 return[即使配置文件中设置了 'default_return_type' => 'json',]  否则会出现错误
