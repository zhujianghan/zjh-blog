+++
title = 'localStorage-setItem()-存入的是-string'
date = 2022-04-16T11:29:14+08:00
tags = []
draft = false
+++

```
localStorage.setItem('flag', 0) // 存入 int
let a= localStorage.getItem('flag') // 取出的是 string '0'
console.log(typeof(a)) // string

```
