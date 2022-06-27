+++
title = 'react-把一个组件的-props-全部传给子组件'
date = 2020-09-16T10:32:00+08:00
tags = ['react']
draft = false
+++

背景: 自定义了一个 MyNavLink, 统一修改了 activeClassName, 其它属性由 MyNavLink 转发到 NavLink

```jsx
// 定义组件
    function MyNavLink(props) {
        return  <NavLink activeClassName='my-active' {...props}/>
    }

// 使用
    <MyNavLink to='/home' className='link'}>a link</MyNavLink>
```

关键: 使用 `...` 对 props 进行解构
