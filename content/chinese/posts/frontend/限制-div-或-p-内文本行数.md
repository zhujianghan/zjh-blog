+++
title = '限制-div-或-p-内文本行数'
date = 2020-01-15T10:24:09+08:00
tags = []
draft = false
+++

```
/* css */
        .text {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
```

注意
  - 不能设置行高
  - 不论设备窗口多大 (pc, mobile), 始终显示指定行数
