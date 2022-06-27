+++
title = 'jquery-中-attr()-和-prop()-方法的区别'
date = 2019-08-28T10:01:36+08:00
tags = []
draft = false
+++

### 背景:
 使用 jquery 执行 checkbox 的全选与多选时, 第三次点击不能生效
```
// html
    <input id="tt" type="checkbox">
    <button id="btn">select</button>

// js
    $('#btn').click(function () {
        if ($(this).text() == 'select') {
            $("#tt").attr('checked', 'checked') // attr 换成 prop
            $(this).text('cancel')
        } else {
            $("#tt").attr('checked', false) // attr 换成 prop
            $(this).text('select')
        }
    })
```

把 其中的 attr 换成 prop 即可

### 差异
> \$('').attr()返回的是html对象
> \$('').prop()返回的是DOM对象

### attr 和 prop 的使用场景：
1.添加属性名称该属性就会生效应该使用prop();
2.是有true,false两个属性使用prop();（如'checked','selected','disabled'等）
3.其他则使用attr();


[详见原文](https://www.jb51.net/article/140974.htm)
