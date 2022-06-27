+++
title = '一个div内的两个行内块级元素(一个有内容,-一个无内容)不对齐'
date = 2020-09-09T09:24:03+08:00
tags = []
draft = false
+++

```
<style>
    .inline-block {
        display: inline-block;
        width: 100px;
        height: 100px;
        background-color: #aaa;
        /*vertical-align: middle;*/
    }
</style>
...
<div>
    <div class="inline-block"></div>
    <div class="inline-block>x</div>
</div>
```

![图片.png](https://upload-images.jianshu.io/upload_images/4073481-5bb3ec1c5ccd1366.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



原因: 基线不一致
解决: 给 inline-block 类添加 veritcal-align


[参考自csdn](https://blog.csdn.net/caseywei/article/details/103354722)
