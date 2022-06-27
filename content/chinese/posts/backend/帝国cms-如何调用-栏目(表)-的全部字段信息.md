+++
title = '帝国cms-如何调用-栏目(表)-的全部字段信息'
date = 2018-11-07T18:08:21+08:00
tags = []
draft = false
+++

使用 e:loop 标签调用时, 会发现有些字段不能够读取出来, 可能是因为该字段没有加入到 列表模板或内容模板中

![image.png](https://upload-images.jianshu.io/upload_images/4073481-0a0a019b039254ee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
(亲测可用)


也可能是该字段不在 主表 中(此项没有测试, 未知是否正确)
