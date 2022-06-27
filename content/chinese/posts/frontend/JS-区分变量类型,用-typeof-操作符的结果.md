+++
title = 'JS-区分变量类型,用-typeof-操作符的结果'
date = 2018-07-01T16:55:37+08:00
tags = []
draft = false
+++



原文见: [廖雪峰js教程](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/00143449957099176f55ba07b764c3daa522217d0e42643000)

在JavaScript的世界里，一切都是对象。
但是某些对象还是和其他对象不太一样。
为了区分对象的类型，我们用 typeof 操作符获取对象的类型，它总是返回一个字符串：
```
typeof 123; // 'number'
typeof NaN; // 'number'
typeof 'str'; // 'string'
typeof true; // 'boolean'
typeof undefined; // 'undefined'
typeof Math.abs; // 'function'
typeof null; // 'object'
typeof []; // 'object'
typeof {}; // 'object'
```
可见，number、string、boolean、function和undefined有别于其他类型。特别注意null的类型是object，Array的类型也是object，如果我们用typeof将无法区分出null、Array和通常意义上的object——{}。


此外 
```
        var val = 123.4;
        console.log(typeof val.toFixed(2));// string
```

    注意:

    用parseInt()或parseFloat()来转换任意类型到number；

    用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；

    通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；

    typeof操作符可以判断出 number、boolean、string、function 和 undefined；

    判断Array要使用 Array.isArray(arr)；

    判断null请使用 myVar === null；

    判断某个全局变量是否存在用 typeof window.myVar === 'undefined'；

    函数内部判断某个变量是否存在用 typeof myVar === 'undefined'。


