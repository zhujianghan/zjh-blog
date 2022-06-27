+++
title = 'foreach-中使用-&地址符时,-最后要释放-value'
date = 2022-04-16T11:29:14+08:00
tags = ['php']
draft = false
+++

```
$arr = [1,2,3];
foreach($arr as $key=> &$value){
    if ($key){
        $value = $value +1;
    }
}

unset($value); // 要注意翻译 $value, 否则后面如果还要用到 $value 时, 会指向 $arr 的最后一个元素
```
