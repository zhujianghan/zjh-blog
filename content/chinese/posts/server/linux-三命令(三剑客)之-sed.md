+++
title = 'linux-三命令(三剑客)之-sed'
date = 2022-04-06T17:48:29+08:00
tags = ['linux']
draft = false
+++

使用 sed 对文件进行文本替换 (windows 下也可用)

```
// 输出替换后的文本
sed 's/foo/bar/g' input.txt

// 在原文件上进行修改 -i
sed -i 's/foo/bar/g' input.txt

// 要替换的文本中包含特殊字符 如 '/ ', 则使用 +/_或其它字符  作为分隔符
sed 's+http://+https://+g' input.txt
```



[参考自: www.cyberciti.biz](https://www.cyberciti.biz/faq/how-to-use-sed-to-find-and-replace-text-in-files-in-linux-unix-shell/)
