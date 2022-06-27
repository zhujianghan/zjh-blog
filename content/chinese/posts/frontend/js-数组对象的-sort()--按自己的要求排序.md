+++
title = 'js-数组对象的-sort()--按自己的要求排序'
date = 2018-07-01T16:34:23+08:00
tags = []
draft = false
+++

js 数组的 sort() 排序 默认是按 ascii 码排序
```
   var arr = [0,1,11,2,123,3,4];
   arr = arr.sort();
   console.log(arr); // Array [ 0, 1, 11, 123, 2, 3, 4 ]
```
如果想要按照大小排序, 可在 sort() 中将一个函数作为参数调用
```
var arr = [0,1,11,2,123,3,4];
arr = arr.sort(mySort);
function mySort(a,b) {
    return a-b;
}
console.log(arr);// Array [ 0, 1, 2, 3, 4, 11, 123 ]
```
这里的 mySort 函数, 接收两个参数, 依次是数组中的两个值, 然后返回一个值, 再让 sort 方法来判定哪个在前, 哪个在后 (类似于冒泡排序), 这里的返回值应该是按 正负 来判断, 大于0则a在前, 小于0则b在前.

于是可以设想, 一个数组需要按照字符串的长度来排序的话,可以如下编写 mySort 函数
```
var arr = ['ab', 'a', 'abcde', 'abc', 'abcdef','abcd'];
var arr2 = arr.sort(mySort);
console.log(arr2);

function mySort(a, b) {
    return a.length > b.length ? 1 : -1;
}
```
如果要按照倒序,可以将 1和-1 调个位置, 或者 也可以最后再反转数组(反转数组就更低效了)
