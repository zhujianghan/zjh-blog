+++
title = 'phpstorm-删除空行'
date = 2018-01-31T21:45:03+08:00
tags = []
draft = false
+++

思路: 用正则把所有空行找到，然后一键全部替换。

步骤:
首先把 Regex 打上勾
ctrl+f  搜索框就填写正则规则：^\n
ctrl+r  匹配到所有空行之后，点击【Replace all】即可
