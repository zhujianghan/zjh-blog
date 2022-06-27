+++
title = 'react-router-中-path-和-url-的关系'
date = 2020-09-16T13:37:31+08:00
tags = ['react']
draft = false
+++

```jsx
// jsx
let match = useRouteMatch()
console.log(match)
    // isExact: true
    // params: {topicId: "6"}
    // path: "/topics/:topicId"
    // url: "/topics/6"
```

- 在动态路由中
其中, path 指的是路由的名称, 路径;
url 指的是当前页面真实的地址, 也就是地址栏中显示的 url

- 在非动态路由中, 二者是一样的
