+++
title = 'laravel5-5+-Package-Auto-Discovery-包自动发现'
date = 2022-04-16T11:29:14+08:00
tags = []
draft = false
+++

[转载自原文](https://www.jb51.net/article/123598.htm)   
一切的起源都是来自 composer.json ,在使用 composer 的时候，你可以在 post-autoload-dump 部分指定你想执行的脚本，比如在 Laravel 5.5 的时候，我们可以看到这样的定义：
```
"scripts": {
        "post-autoload-dump": [
            "Illuminate\\Foundation\\ComposerScripts::postAutoloadDump",
            "@php artisan package:discover --ansi"
        ],
...
}
```

对于 postAutoloadDump 是很熟悉了，Laravel 之前的版本基本都有，它的工作是清理一些缓存，删除一些旧的文件。  

我们的关注重点是 `@php artisan package:discover` ，也就是会执行 `@php artisan package:discover` 这个命令。  

这个命令是干嘛的呢？它其实是位于Illuminate\Foundation\Console\PackageDiscoverCommand 中，主要是通过执行Illuminate\Foundation\PackageManifest 的 `build()` 方法来达到 发现 package 的目的。  

而 PackageManifest 早就注册在 Laravel 的 Container 中，那么它可以保证每次在启动 Laravel 的时候都能使用 PackageManifest 的 `build()` 方法，这个 `build()` 方法主要的逻辑就是：  

找寻 vendor/composer/installed.json 这个文件，这个文件是 composer 自己生成的，记录着每一次的 composer autoload 的 class map。   

而此时，Laravel 又将这些内容映射到 extra.laravel 的部分，比如：   
```
"extra": { 
 "laravel": {  
  "providers": [   
  "Barryvdh\\Debugbar\\ServiceProvider"
  ],  
 "aliases": {   
  "Debugbar": "Barryvdh\\Debugbar\\Facade"
  }
 }
}
```

Laravel 首先将以上内容直接读取下来放到一个 collection 中，然后在去检查下面这个部分的定义，在决定是否需要执行 Package Discover 动作：  
```
"extra": { 
 "laravel": {  
  "dont-discover": [   
  "barryvdh/laravel-debugbar"
  ]
 }
}
```
如果你不想执行 @php artisan package:discover 的发现效果，可以直接在 dont-discover 的数组里面填上 *。  
这样判断完成之后，Laravel 将 collection 中需要发现的 Package 内容保存到一个缓存文件中bootstrap/cache/packages.php：  
```
<?php return array (
 'barryvdh/laravel-debugbar' => array (
 'providers' => array (
  0 => 'Barryvdh\\Debugbar\\ServiceProvider',
 ),
 'aliases' => array (
  'Debugbar' => 'Barryvdh\\Debugbar\\Facade',
 ),
 ),
);
``` 

Laravel 怎么拿到 Package 信息？   

这个时候，我们又需要看看 Laravel 项目启动的时候，主要启动下面的两个服务：  

*   \Illuminate\Foundation\Bootstrap\RegisterFacades
*   \Illuminate\Foundation\Bootstrap\RegisterProvider

而 上面的第一个服务会使用 Illuminate\Foundation\AliasLoader 加载所有的 alias ，在 AliasLoader 中：  
```
// in RegisterFacades::bootstrap()
 
AliasLoader::getInstance(array_merge(
 $app->make('config')->get('app.aliases', []),
 $app->make(PackageManifest::class)->aliases()
))->register();
```

可以看到，它首先读取 app.php 的 aliases 数组，然后与 bootstrap/cache/packages.php 的 packages 数组合并，这个时候，就可以获取到所有的 packages 信息进行发现和自带加载了。这样合并的好处就是，你还是可以直接在 app.php中定义你的 alias 来覆盖自动发现的 package，从而保证你的项目还是可以运行得很流畅。
