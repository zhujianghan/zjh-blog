+++
title = 'php-trait-的优先级'
date = 2019-01-22T21:04:44+08:00
tags = ['php']
draft = false
+++

```
<?php
trait Demo1{
    public function test(){
        return __METHOD__;
    }
}

trait Demo2{
    public function test(){
        return __METHOD__;
    }
}

class Demo0{
        public function test(){
        return __METHOD__;
    }
}

class Demo extends Demo0{
    use Demo1,Demo2{
        Demo1::test insteadof Demo2; // tait1中的test方法优先于trait2中的test方法(如果不这么设置,同名的方法会导致报错)
        Demo2::test as demo2test; // trait2 的test方法别名为 trait2test
    }
}

$obj = new demo();
$obj->test();// Demo1::test
$obj->demo2test();// Demo2::test
```
>1. `trait` ,当前类,父类优先级:   当前类方法 > `trait` 的方法 > 父类的方法

>2. 如果当前类引用了两个 `trait`, 并且这两个 `trait` 中有同名方法,则会报错, 可以使用 `insteadof` 指定使用哪个trait的方法, 此外还可以用 `as` 来设置别名, 从而供当前类使用
