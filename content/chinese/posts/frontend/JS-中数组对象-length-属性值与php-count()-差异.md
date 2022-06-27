+++
title = 'JS-中数组对象-length-属性值与php-count()-差异'
date = 2018-06-30T14:24:58+08:00
tags = []
draft = false
+++

Js的length 指的是 最大**数字索引**(arr[0] 或 arr[‘0’])的下标值+1, 如果是关联数组, 那么length值为0;
Php中 count($arr) 反映的是 arr数组中元素的个数.

```
<script type=text/javascript>
var  arr = [];
var  brr = [];
arr[0]=0;
arr[5]=5;
brr['a'] = 'a';
brr['e']='e';
console.log(arr.length); // 6
console.log(brr.length); // 0
</script>
```

```
<?php
$arr=[];
$arr[0]=0;
$arr[5]=5;
echo count($arr);// 2

?>
```
