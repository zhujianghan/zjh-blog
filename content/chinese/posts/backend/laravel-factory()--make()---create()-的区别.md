+++
title = 'laravel-factory()--make()---create()-的区别'
date = 2022-04-16T11:29:14+08:00
tags = []
draft = false
+++

相同点:
都是生成模型的实例  
  
  
不同点: 
create() 同时执行了 save()方法, 保存到了数据库中;    
make() 只生成了模型实例
