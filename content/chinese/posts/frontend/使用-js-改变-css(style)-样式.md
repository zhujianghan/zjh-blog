+++
title = '使用-js-改变-css(style)-样式'
date = 2020-12-10T15:30:31+08:00
tags = []
draft = false
+++

要改变的是样式表, 如: 

```
<style>
  a.active {
    color: red;
  }
</style>


<script>
  document.styleSheets[0].add('a.active', 'color: blue !important')
<script>
````

[参考cnblog: JS设置CSS样式的几种方式](https://www.cnblogs.com/LiuWeiLong/p/6058059.html)

