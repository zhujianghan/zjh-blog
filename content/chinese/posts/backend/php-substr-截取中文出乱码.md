+++
title = 'php-substr-截取中文出乱码'
date = 2019-05-21T17:02:59+08:00
tags = ['php']
draft = false
+++

使用 `mb_substr` 解决即可,

mb_substr 按字符来截取
而 substr 按字节来截取
