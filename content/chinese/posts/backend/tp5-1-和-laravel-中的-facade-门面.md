+++
title = 'tp5-1-和-laravel-中的-facade-门面'
date = 2022-04-16T11:29:14+08:00
tags = ['php']
draft = false
+++

> facade 的作用是把 `类(动态)方法` 当作 `静态方法` 使用; 简称 **静态代理**
```php
<?php

class Demo
{
    public function index(){
        echo 'hello world';
        // echo __METHOD__;
    }

}

class DemoFacade
{
    public static function __callStatic($name, $arguments)
    {
        $demo = new Demo();
        $demo->$name();
    }
}

DemoFacade::index();// hello world
```
