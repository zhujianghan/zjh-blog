+++
title = 'php-重写(override,-覆盖)-和-重载(overload)'
date = 2022-04-16T11:29:14+08:00
tags = ['php']
draft = false
+++

- 重写: 子类继承父类时, 重写了方法
- 重载: 
  - 传统意义上的重载(如java), 指一个类中存在多个同名的方法, 但接收参数不一样, php 不支持这样的写法
  - php 提供的 overloading(重载), 指的是 `动态地创建类属性和方法`, 通过 `魔术方法` 来实现
