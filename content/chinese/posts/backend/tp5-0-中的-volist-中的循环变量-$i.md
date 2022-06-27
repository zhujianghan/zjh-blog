+++
title = 'tp5-0-中的-volist-中的循环变量-$i'
date = 2022-04-16T11:29:14+08:00
tags = []
draft = false
+++

```
 // 输出循环变量：
{volist name="list" id="vo" key="k" }
{$k}.{$vo.name}
{/volist}

//如果没有指定key属性的话，默认使用循环变量i，例如：
{volist name="list" id="vo" }
{$i}.{$vo.name}
{/volist}
```

-这里的索引是从 1 开始的, 而不是从 0 开始
