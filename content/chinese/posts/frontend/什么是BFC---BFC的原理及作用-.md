+++
title = '什么是BFC---BFC的原理及作用-'
date = 2022-04-16T11:29:14+08:00
tags = []
draft = false
+++

原文见: https://www.cnblogs.com/libin-1/p/7098468.html  和 https://www.jianshu.com/p/acf76871d259

##BFC定义
在一个Web页面的CSS渲染中，**块级格式化上下文** (Block Fromatting Context) 是按照块级盒子布局的。W3C对BFC的定义如下：

```
浮动元素和绝对定位元素，非块级盒子的块级容器（例如 inline-blocks, table-cells, 和 table-captions），
以及overflow值不为“visiable”的块级盒子，都会为他们的内容创建新的BFC（块级格式上下文）。
```

一个HTML元素要创建BFC，则满足下列的任意一个或多个条件即可：
1、float的值不是none。
2、position的值不是static或者relative。
3、display的值是inline-block、table-cell、flex、table-caption或者inline-flex
4、overflow的值不是visible

BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。


##BFC的作用

######1. 清除内部浮动
我们在布局时经常会遇到这个问题：对子元素设置浮动后，父元素会发生高度塌陷，也就是父元素的高度变为0。
解决这个问题，只需要把把父元素变成一个BFC就行了。常用的办法是给父元素设置overflow:hidden。
######2. 垂直margin合并
在CSS当中，相邻的两个盒子的外边距可以结合成一个单独的外边距。这种合并外边距的方式被称为折叠，并且因而所结合成的外边距称为折叠外边距。
折叠的结果：
    两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值。
    两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值。
    两个外边距一正一负时，折叠结果是两者的相加的和。
    这个同样可以利用BFC解决。关于原理在前文已经讲过了。

######3. 创建自适应两栏布局
在很多网站中，我们常看到这样的一种结构，左图片+右文字的两栏结构。


