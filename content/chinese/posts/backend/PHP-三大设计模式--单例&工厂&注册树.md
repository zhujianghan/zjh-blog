+++
title = 'PHP-三大设计模式--单例&工厂&注册树'
date = 2022-04-16T11:29:14+08:00
tags = []
draft = false
+++

```php
<?php
// 单例模式(三私一公)
class Site{
    protected static $_instance;
    protected function __construct(){
        return self::$_instance;
    }
    protected function __clone(){     
    }
    public static function getSingleton(){
        if(! (self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

}

// 工厂模式
class Factory{
    public static function create($className){
        return $className::getSingleton();
    }
}

// 注册树模式
class Container{
    protected static $object = [];
    public static function set($alias, $obj){
        self::$object[$alias] = $obj;
    }
    public static function get($alias){
        return self::$object[$alias];
    }
    public static function _unset($alias){
        unset(self::$object[$alias]);
    }


Container::set('site', Factory::create('Site'));// 把单一对象实例挂到注册树上
$site = Container::get('site');// 从注册树中获取对象



```
