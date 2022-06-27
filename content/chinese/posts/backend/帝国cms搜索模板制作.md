+++
title = '帝国cms搜索模板制作'
date = 2018-12-04T10:22:59+08:00
tags = []
draft = false
+++

```
<form name="searchform" method="post" action="/e/search/index.php">
                    <!--按表搜索-->
                    <input type="hidden" name="tbname" value="activity">
                    <!--所用搜索模板-->
                    <input type="hidden" name="tempid" value="3">
                    <!--搜索字段变量-->
                    <input type="hidden" name="show" value="title">
                    <!--搜索范围不限制-->
                    <input type="hidden" name="member" value="0">
                    <!--查询逻辑, 默认模糊查询-->
                    <input type="hidden" name="hh" value="LK">

                    <!--按关键词搜索-->
                    <input name="keyboard" type="text" placeholder="输入活动关键词">
                    <button type="submit" name="submit">搜 索</button>
                </form>
```
1. 模板的所属系统模型要与『要搜索的表』一致
![image.png](https://upload-images.jianshu.io/upload_images/4073481-f9378212a8d67608.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2. 对应的系统模型中对应搜索字段要选中
![image.png](https://upload-images.jianshu.io/upload_images/4073481-ba071021d4c48cdb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
