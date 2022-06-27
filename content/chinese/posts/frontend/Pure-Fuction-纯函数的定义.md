+++
title = 'Pure-Fuction-纯函数的定义'
date = 2020-09-23T10:53:16+08:00
tags = ['react']
draft = false
+++

[Pure Function wiki definition](https://en.wikipedia.org/wiki/Pure_function):
> In computer programming a **pure function** is a that has the following properties: 
>  1. Its return value is the same for the same arguments.
>  2. Its evaluation has no side effects.


1.  同样参数总是返回相同的结果, 也就是函数内部没有随机生成的数
2. 没有副作用, 指的是不会改变其它的变量的值, 不会有日志记录等

redux 的 reducer 中使用 纯函数, 输入一个 state, 在不改变输入的 state 的情况下, 返回一个 新的 state

