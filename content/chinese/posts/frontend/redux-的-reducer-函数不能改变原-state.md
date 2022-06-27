+++
title = 'redux-的-reducer-函数不能改变原-state'
date = 2020-09-23T15:21:44+08:00
tags = ['react']
draft = false
+++

可以使用如下方法来完全复制原来的 state, 再进行操作

1. 对于数组: concat, slice, 或 spread operator
2. 对于对象: Object.assign 或 spread operator


[参考 valentinog.com](https://www.valentinog.com/blog/redux/)
