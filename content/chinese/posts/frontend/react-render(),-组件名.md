+++
title = 'react-render(),-组件名'
date = 2020-07-02T14:59:54+08:00
tags = ['react']
draft = false
+++

render 方法中只能有一个 顶级父元素

```
// 正确
render() {
  <div>
        <p>1111</p>
        <p>2222</p>
  </div>
}

// 错误
render() {
    <p>1111</p>
    <p>2222</p>
}

```

---------
组件类名及 html 标签 的名称必须 首字母大写
