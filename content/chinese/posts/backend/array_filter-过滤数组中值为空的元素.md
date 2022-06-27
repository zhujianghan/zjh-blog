+++
title = 'array_filter-过滤数组中值为空的元素'
date = 2019-08-29T11:21:16+08:00
tags = ['php']
draft = false
+++

**array_filter** ( array `$array` [, callable `$callback` [, int `$flag` = 0 ]] ) : array
通过回调函数返回 true 返回过滤数组中的单元, 组成新数组并最终返回

如果, callable 为空, 则默认过滤数组中等值为 false 的单元(如 null, '', ' ', 0) 等
