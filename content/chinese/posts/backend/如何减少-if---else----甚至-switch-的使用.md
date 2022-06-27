+++
title = '如何减少-if---else----甚至-switch-的使用'
date = 2022-04-16T11:29:14+08:00
tags = ['php']
draft = false
+++

## 需求:  
```
$str = '1,3,5'; // 变成 'abc,ghi,mno'
$arr = [
  [
    'id'=>1,
    'name'=>'abc'
  ],
  [
    'id'=>2,
    'name'=>'def'
  ],
  [
    'id'=>3,
    'name'=>'ghi'
  ],
  [
    'id'=>4,
    'name'=>'jkl'
  ],
  [
    'id'=>5,
    'name'=>'mno'
  ],

];
```

使用 if..else 或 switch 方法可以完成

现考虑不使用这两种方式作法:
> 思路: 把下面的 id 值作为键, name 值作为值, 重新构成一个数组 $arr2, 从 $str 中获取数字 如1, 使用 $arr2['1'] 来获取对应的 name


```
php解法:
// 1. 把当前 $arr 转成 目标数组 $arr2
$arr2 = [];
foreach ($arr as $v) {
  $arr2[$v['id']] = $v['name'];
}

$str_to_arr = implode(',', $str);// [1,3,5]
$str_to_arr = array_map(function(value){
  return $arr2['value'];
})

$str2 = join(',', $str_to_arr);
```

```
JS 解法: js 只支持索引数组, 不支持关联数组, 但是 ES6 的 Map 对象支持任意的键或值

    var str = '1,3,5';

    var data = [
        {
            id: 1,
            name: '中国'
        },
        {
            id: 2,
            name: '美国'
        },
        {
            id: 3,
            name: '日本'
        },
        {
            id: 4,
            name: '韩国'
        },
        {
            id: 5,
            name: '俄国'
        }
    ];

    console.log(str);// 1,3,5

    var mmap = new Map();
    data.forEach(function (value) {
        mmap.set(value.id, value.name)
    });

    var arr = str.split(',');
    var temp = arr.map(function (value) {
        return mmap.get(parseInt(value));
    });


    console.log(temp.join());
```

