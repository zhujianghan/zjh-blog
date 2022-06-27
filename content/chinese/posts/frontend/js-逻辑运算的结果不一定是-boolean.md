+++
title = 'js-逻辑运算的结果不一定是-boolean'
date = 2018-06-29T17:21:59+08:00
tags = []
draft = false
+++

js 逻辑运算符的结果不一定是 boolean.
只有当 **逻辑非** 运算时,结果才是 布尔值中的 true 或 false;
**逻辑与** **逻辑或** 运算的结果为能确定运算结果的那一项, 可能是任意类型


```
var z =  9 && 0 && 99; 
console.log(z); // 0
console.log(typeof z); // number
```

```
var z =  9 && "" && 99; 
console.log(z); // 
console.log(typeof z); // string
```


```
var z =  9 && null && 99; 
console.log(z); // null
console.log(typeof z); // object
```


