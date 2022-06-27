+++
title = 'tp5-1-的依赖注入,-服务容器,-facade'
date = 2022-04-16T11:29:14+08:00
tags = []
draft = false
+++

## 在一个类中 实例化另外一个类, 就是依赖性强, 耦合度高, 在 tp5.1 中 可使用 `依赖注入` 来解耦
```
class A
{
  public function hello(){
    echo 'hello';
  }
}

class B
{
  public function sayHello(){
    $a = new A();
    $a->hello();
  }
}

class C
{
  // 依赖注入的用法
  public function sayHello(A $a){
    $a->hello();
  }
}
```

## 进一步使用 依赖容器 container 来解耦
> 容器就是一个装有各种类的对象的仓库, 然后通过 依赖容器 来实现对象的调用


## 最后还可以使用 facade 封装各个类(对象) 的方法, 形成对外的统一方法, 从而使用者(开发者) 无需关心调用的是哪个类的哪个方法, ( 而统一使用的是 facade 类的方法)
