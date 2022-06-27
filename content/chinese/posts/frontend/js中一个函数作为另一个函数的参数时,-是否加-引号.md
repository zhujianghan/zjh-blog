+++
title = 'js中一个函数作为另一个函数的参数时,-是否加-引号'
date = 2018-07-02T12:49:24+08:00
tags = []
draft = false
+++

```
setInterval("abc()",1000);
// setInterval(abc,1000);
function abc(){
  document.write("abc");
}
```

以上两种写法都可以:  加引号,就要带 括号;  不加引号,就不要带括号
