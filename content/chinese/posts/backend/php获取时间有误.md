+++
title = 'php获取时间有误'
date = 2017-08-27T00:06:40+08:00
tags = []
draft = false
+++

我们用echo date("Y-m-d H:i:s");获取当前时间； 但有时我们会发现我们获取的时间其实比北京时间少8个小时（获取的是标准时间），这说明我们没有修改php配置文件里面的data属性。

 
如果我们想获取的是当前北京时间的话，我们必须将我们的php.ini配置文件修改一下：

[Date]
; Defines the default timezone used by the date functions
date.timezone = 'PRC'

这样即可，同理我们可以更改‘PRC’获取不同地区的当前时间。

 ps：我这是wamp装的php，这里的php.ini不光在 wanmp/bin/php/php5.6.25/ 里的php.ini要改；wanmp/bin/apache/apache2.4.23/bin 里的php.ini 也要改

