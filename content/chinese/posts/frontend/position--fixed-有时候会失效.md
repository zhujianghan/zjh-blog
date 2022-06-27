+++
title = 'position--fixed-有时候会失效'
date = 2022-04-16T11:29:14+08:00
tags = []
draft = false
+++

当父(祖)元素使用了 transform 后, 当前元素的 position 会发生改变, 其参照父元素进行定位, 而非 window 窗口

参见: https://www.jianshu.com/p/4f77fa62e14b
