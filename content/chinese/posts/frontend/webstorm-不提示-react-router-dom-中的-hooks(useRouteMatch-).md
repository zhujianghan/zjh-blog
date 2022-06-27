+++
title = 'webstorm-不提示-react-router-dom-中的-hooks(useRouteMatch-)'
date = 2020-09-17T10:12:45+08:00
tags = ['react']
draft = false
+++

## 现象:
```
import {
  BrowserRouter,
  Switch, // 不提示
  Route, // 不提示
  NavLink,
  useRouteMatch // 不提示
} from 'react-router-dom'

```

## 原因:
```
// react-router-dom.js
export { MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, 
Switch, generatePath, matchPath, useHistory, useLocation, useParams,
 useRouteMatch, withRouter } from 'react-router';
``` 
`Switch`, `Route`, `useRouteMatch `... 这类组件(或函数) 不是真正存在于 `react-router-dom.js` 文件中, 而是存在于 `react-router.js` 中导致 WebStorm 没有识别出来.

## 解决办法: 在 `package.json` 文件的 `dependencies` 加入 `react-router`

```
    "react-router": "^5.2.0", // 加入此行
    "react-router-dom": "^5.2.0",
```


>[参考自 stackoverflow: Why does IntelliJ does not auto import react router hooks?](https://stackoverflow.com/questions/59208991/why-does-intellij-does-not-auto-import-react-router-hooks)
