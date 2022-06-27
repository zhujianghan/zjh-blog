+++
title = 'php-二维数据排序'
date = 2019-06-13T09:17:11+08:00
tags = ['php']
draft = false
+++

```
<?php

$arr = [
    [
        'aaifdddk'   => 3,
        'name' => 'test8',
    ],
    [
        'aaifdddk'   => 5,
        'name' => 'test8',
    ],
    [
        'aaifdddk'   => 2,
        'name' => 'test8',
    ],
    [
        'aaifdddk'   => 4,
        'name' => 'test8',
    ],
    [
        'aaifdddk'   => 1,
        'name' => 'test8',
    ],
];

//usort($arr,function ($a,$b){
//    return $a['id'] > $b['id'] ? 1 : -1;
//});

array_multisort($arr);

var_dump($arr);

```
