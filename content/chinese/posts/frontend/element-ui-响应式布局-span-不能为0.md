+++
title = 'element-ui-响应式布局-span-不能为0'
date = 2019-11-13T15:33:30+08:00
tags = ['vue']
draft = false
+++

```
  <el-col :md="{span:8}" :sm="{span:0}"  :xs="{span:0}">
    ....
  </el-col >
```

会导致样式混乱, 达不到想要的隐藏效果, 可以用 `.hidden-sm-and-down` 类来实现
