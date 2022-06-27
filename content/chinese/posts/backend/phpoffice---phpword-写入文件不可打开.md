+++
title = 'phpoffice---phpword-写入文件不可打开'
date = 2022-04-16T11:29:14+08:00
tags = ['php']
draft = false
+++

使用 phpword 的模板写入字符串时, 最后生成的文件打开失败.


这可能是因为  写入的文件内容没有 做 `htmlspecialchars` 处理, 而 docx 的 xml 不允许 &, ', ", <, > 字符, 这几样需要进行转义处理.
