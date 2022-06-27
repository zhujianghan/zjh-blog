+++
title = 'tp5-数据集(对象)转成数组(再转json)输出'
date = 2019-02-05T14:12:44+08:00
tags = []
draft = false
+++

原文见: https://www.jianshu.com/p/a69164fd1f50?utm_campaign

1. 先在数据库配置文件中
```
    // 数据集返回类型
    'resultset_type'  => 'collection',
```

2. 在使用时, 使用 toArray() 方法
```
// 查询数据库
$news = NewsModel::order('createtime desc')->limit($num)->page($page)->select()->toArray();

/*
array (size=2)
  0 => 
    array (size=8)
      'id' => int 2
      'title' => string '2' (length=1)
      'title_image' => string '2' (length=1)
      'label_name' => string '2' (length=1)
      'content' => string '<p>2</p>' (length=8)
      'link_url' => string '2' (length=1)
      'createtime' => int 1549338746
      'updatetime' => int 1549338746
  1 => 
    array (size=8)
      'id' => int 1
      'title' => string 'dd' (length=2)
      'title_image' => string '' (length=0)
      'label_name' => string '' (length=0)
      'content' => string 'dd' (length=2)
      'link_url' => string '' (length=0)
      'createtime' => int 11
      'updatetime' => int 11
*/
```
