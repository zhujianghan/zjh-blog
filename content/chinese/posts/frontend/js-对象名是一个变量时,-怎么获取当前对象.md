+++
title = 'js-对象名是一个变量时,-怎么获取当前对象'
date = 2019-04-02T15:07:55+08:00
tags = []
draft = false
+++

```
    var j1 = {
        'j11': 'a',
        'j12': 'b',
        'j13': 'c',
    };

    var j2 = {
        'n1': 'j1',
        'n2': 'j2',
    };

    var obj = {
        j1: j1
    };

    var x = 'n1';
    console.log(j2[x]['j11']);//undefined
    console.log(obj[j2[x]]['j11']);// a

// ? 如何直接通过对象名同名字符串来获取对象 ?

```
