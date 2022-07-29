---
title: "Jquery Fill Vue Input"
date: 2022-07-28T09:10:12+08:00
tags: ['jquery','vue']
draft: true
---

想要使用 Jquery 写油猴脚本自动填充网页中的 input 框时, 使用 jquery 操作如下

```html

<form>
    <input type="text" name="username">
    <input type="password" name="password">
</form>
```

```js
$('input:eq(0)').val('myname') // eq 用于特定第几个 input
$('input:eq(1)').val('mypassword')
```

但如果目标网页是由 Vue(React) 编写的, 那么此种方法并不能改变框架内的 v-model 的值,
原因是 Vue 监听的是 input 元素的 input 事件, 而直接使用 jquery(vanilla js) 修改 input 元素的值并不会触发 input 事件,

解决办法是修改值后, 手动触发 input 事件

```js
$('input:eq(0)')[0].dispatchEvent(new Event('input'), {bubbles: true})
```