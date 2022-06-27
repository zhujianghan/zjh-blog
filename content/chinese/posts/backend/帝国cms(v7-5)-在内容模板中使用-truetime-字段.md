+++
title = '帝国cms(v7-5)-在内容模板中使用-truetime-字段'
date = 2022-04-16T11:29:14+08:00
tags = []
draft = false
+++

truetime 是真实发布时间, 也就是后台 mysql 执行 insert 的时间;
lastdotime 是真实更新时间, 也就是后台 mysql 执行 update 的时间;
newstime 是发布时间, 由用户自定义, 在新增信息时, 表单中自行填写;

```
// 在模板中直接使用 $nvainfor 数组进行调用, 比如:

<br>navinfor[id]-<?=$navinfor[id]?>
<br>navinfor[content]-<?=$navinfor[content]?>
<br>navinfor[newstime]-<?=$navinfor[newstime]?>
<br>navinfor[truetime]-<?=$navinfor[truetime]?>
<br>navinfor[lastdotime]-<?=$navinfor[lastdotime]?>

```

> ps: 使用 $navinfor 可以访问当前记录(1条)的全部字段信息,
使用 [!--id--] 方式只能访问到部分信息
见: ![image.png](https://upload-images.jianshu.io/upload_images/4073481-e2838784b2d2a031.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
http://www.phome.net/doc/manual/template/


![image.png](https://upload-images.jianshu.io/upload_images/4073481-2181e4a91c301ff0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
原文见: http://www.phome.net/doc/manual/template/html/other.html#q17




