+++
title = '清空(重置)-input-(tupe=file)-的-fileList'
date = 2020-09-03T09:43:06+08:00
tags = []
draft = false
+++

清空 input type=“file” 有两种方式

```
<input type="file"/>
```

```
var file = document.getElementById('file');

// 第一种
//虽然file的value值不能设为有内容的字符，但是可以设置为空字符
file.value = ''

// 第二种重新初始化file的html
file.outerHTML = file.outerHTML
```

[转自: 站内](https://www.jianshu.com/p/631bb07a051f)
