+++
title = 'css-左右分栏各自滚动'
date = 2014-12-20T14:11:38+08:00
tags = ['css']
draft = false
+++


### 方式: 左右分别设置 `h-screen, overflow-y-auto`

```
<body>
<div class="flex">
  <div class="h-screen overflow-y-auto w-1/6 bg-slate-500 text-white">
    <div>sidebar</div>
    <div class="h-[1200px]">sidebar</div>
    <div>sidebar</div>
    <div>sidebar</div>
  </div>

  <div class="h-screen overflow-y-auto w-5/6 overflow-y-auto bg-blue-200">
    <div>111</div>
    <div>111</div>
    <div class="h-[1200px]">111</div>
    <div>111</div>
  </div>
</div>
</body>
```
[参考自csdn:](https://blog.csdn.net/weixin_42321819/article/details/108361408)