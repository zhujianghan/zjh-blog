+++
title = 'phpstorm-快捷生成函数的注释'
date = 2018-05-16T23:46:17+08:00
tags = ['php']
draft = false
+++

在函数上一行键入
/**  
```
/**
 * @param $a
 * @param $b
 * @return mixed
 */
function abc($a, $b)
{
    $c = $a + $b;
    return $c;
}
```
然后 enter 回车即可
