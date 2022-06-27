+++
title = 'js-中条件判断'
date = 2019-02-23T17:41:18+08:00
tags = []
draft = false
+++

> 前因: 在 `vue` 中使用各种条件判断 (如 `v-if`, `v-show`, `disabled` ) 时, 其中的 1, 0, '0' 等造成与想要的结果不同, 遂在此先记录一下

#### 说到底还是 `js` 的条件判断问题

```
if ( exp ) {
      // exp 为真
}
```
- exp 为 1, true
- exp 为 0, false
- exp 为 '0', true ---- 易混淆点
- exp 为 true, true
- exp 为 false, false.
- exp 为 null, false
- exp 为 undefined, false
- exp 为 'true', true
- exp 为 'false', true
