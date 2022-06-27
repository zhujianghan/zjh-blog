+++
title = 'notes--基于-Composer-的-PHP-模块化开发'
date = 2022-04-16T11:29:14+08:00
tags = ['php']
draft = false
+++

[笔记来源 overtrue: 基于 Composer 的 PHP 模块化开发](https://juejin.cn/post/6844903487688589320)

## 1. what & why
composer 是 php 版本的版本控制工具, 如 js 里的 npm, go 里的 mod.

### 1.1 composer.json 的组成
- 基础字段 name, description, keywords, license
- 依赖 require, require-dev
- 自动加载: autoload, autoload-dev
  - PSR-4
  - PSR-0
  - classmate
  - files
- 其它 scripts, minimum-stability, bin, repositories, support, config

> 其中, 若是一个项目, name 表示 project name, 若是一个包, name 表示 package name

在没有 composer 之前, 靠人工复制粘贴代码, 存在代码安全及 repeat yourself 的问题

### 1.2 版本号的组成
**Major.Minor.Patch**
- major: 大的功能变更, 不向后兼容
- minor: 新增功能, 向后兼容
- patch: 补丁, 向后兼容, 修复 bug

#### 1.2.1 `~`, `^` 区别
- "~": 指定向后兼容的最小版本
  - ~1.2 表示 >=1.2 && <2.0.0
  - ~1.2.3 表示 >=1.2.3 && <1.3.0 (二者有区别处)
- "^": 指定向后兼容的所有版本
  - ^1.2 表示 >=1.2 && <2.0.0
  - ^1.2.3 表示 >=1.2.3 && <2.0 (二者有区别处)

#### 1.2.2 使用版本号
- 确切版本 1.0.2
- 范围 >=1.0, >=1.0<2.0, >=1.0<1.1 || >=1.2
- 连字符范围 1.0-2.0
- 通配符 1.0.*
- 波浪 ~1.2.3
- caret  ^1.2.3

#### 1.3 版本锁定 composer.lock
- 不存在 .lock 文件
  - composer install 安装依赖同时生成 .lock 文件
  - composer update 安装(更新)依赖同时生成 .lock 文件
- 存在 .lock 文件,
  - composer install 会直接使用该文件安装
  - composer update 会忽略该文件, 更新同时生成新的 .lock 文件

> 使用说明, 发布包不要携带 .lock 文件, 项目则一定要携带 .lock 文件

> 注意: 项目不要直接使用 composer update, 如有需要, 应该单独给指定包进行 composer update package...



## 2. how
### 2.1 创建一个包
```bash
$ mkdir my-package && cd my-package
$ composer init
```
### 2.2 使用(测试)自己创建的本地包
```bash
# 另起一个 project
$ mkdir my-package-test
$ cd my-package-test
$ composer init
# 添加 repositories 项目
#  - type 为 path
#  - url 使用相对路径指向 my-package
# require 中 添加 yourname/my-package: *
$ composer install
```

> 也可以使用  `composer config repositories.foo path /users/test/foo/bar` 来给 composer 添加项目源, 然后就可以使用 `composer require foo/bar:dev-master -vvv` 进行安装. 

> ? 实际上并非复制到 vendor 目录里, 而是一个软链接, 从而可以直接在 vendor 里修改包 ?

### 2.3 安装官方(packagist.org)依赖包
- 方式一: 编辑 composer.json && composer update
- 方式二: composer require package_name

写完后可以使用 composer validate 进行验证是否有编辑错误

### 2.4 更新依赖
- 更新全部 composer update
- 更新指定包 composer update package_name






