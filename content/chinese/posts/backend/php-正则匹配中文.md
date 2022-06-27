+++
title = 'php-正则匹配中文'
date = 2018-05-15T18:56:14+08:00
tags = ['php']
draft = false
+++

 php正则匹配汉字!

$reg = '/^[\x{4e00}-\x{9fa5}]+$/u';


而不是
$reg = '/^[\u4e00-\u9fa5]+$/u';
