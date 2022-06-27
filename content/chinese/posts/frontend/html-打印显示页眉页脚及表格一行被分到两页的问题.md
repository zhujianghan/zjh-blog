+++
title = 'html-打印显示页眉页脚及表格一行被分到两页的问题'
date = 2022-01-19T18:38:17+08:00
tags = []
draft = false
+++

## 1. 每页表头问题
参考: [The Ultimate Print HTML Template with Header & Footer | by Idan Cohen | Medium](https://medium.com/@Idan_Co/the-ultimate-print-html-template-with-header-footer-568f415f6d2a)

使用 table 中的 thead 会在每页打印其中的内容, 而不需要打印页眉页脚的页面(头2页, 3页等), 继续使用 div static 布局


## 2. table row 被分到两页的问题
对 tr 使用 break-inside-avoid, break-after-auto
参考: [How to Handle Page Breaks when Printing a Large HTML Table](https://www.w3docs.com/snippets/html/how-to-handle-page-breaks-when-printing-a-large-html-table.html)
