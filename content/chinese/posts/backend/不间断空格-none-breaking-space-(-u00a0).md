+++
title = '不间断空格-none-breaking-space-(-u00a0)'
date = 2022-04-16T11:29:14+08:00
tags = ['php']
draft = false
+++

从网上复制的一些文本可能含有特殊字符, 不间断空格(unicode 编码为 \u00a0)就是一种, 效果与 ' ' 普通空格类似, 但有不同.
不同: 对英文单词间使用普通空格, 会自动换行; 使用不间断空格连接的单词会被认为是一个单词而直接全部换到下一行, 这在 html 也是同样的效果.
![图片.png](https://upload-images.jianshu.io/upload_images/4073481-61f2db95896fbc8f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在 php 中使用 普通空格替换 不间断空格的方式
```php
$str = "a a a";
$str = str_replace(chr( 194 ) . chr( 160 ), " ", $str);
```

参考自[stackoverflow](https://stackoverflow.com/questions/2592502/i-have-a-string-with-u00a0-and-i-need-to-replace-it-with-str-replace-fail)
