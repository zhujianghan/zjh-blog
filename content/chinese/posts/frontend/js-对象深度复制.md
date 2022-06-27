+++
title = 'js-对象深度复制'
date = 2019-10-17T16:47:46+08:00
tags = []
draft = false
+++

js 对象复制是地址传递, 而不是值传递, 可以使用如下方法进行``深度复制`

```
       deepClone(origin) {
                let target = {}
                for (var prop in origin) {
                    if (origin.hasOwnProperty(prop)) {
                        if (typeof (origin[prop]) == 'object' && origin[prop]) {
                            target[prop] = Object.prototype.toString.call(prop) == '[object Array]' ? [] : {}
                            arguments.callee(origin[prop], target[prop])	//递归调用
                        } else {
                            target[prop] = origin[prop]	//原始类型直接复制
                        }
                    }
                }
                return target
            }
```
