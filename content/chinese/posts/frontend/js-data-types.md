+++
title="Js Data Types"
date=2022-07-14T10:51:21+08:00
tags=["js","mermaid"]
draft=false
+++

{{<mermaid>}}
    flowchart TD
    L1([JS 数据类型])
    L1-->L21(基本类型 <br> 数值类型)
    L1-->L22(对象类型 <br> 引用类型)

    L21-->L301(字符串)
    L21-->L302(数字)
    L21-->L303(布尔)
    L21-->L304(undefined)
    L21-->L305(null)

    L22-->L311(对象)
    L22-->L312(数组)
    L22-->L313(函数)
{{</mermaid>}}

{{<mermaid>}}
    flowchart TD
    L1([JS 数据类型判断方法])
    L1-->L21(typeof)
    L1-->L22(instanceof)
    L1-->L23("===")

    L21--可以判断-->L311(字符串<br>数字<br>布尔<br>undefined<br>function)
    L21--不可以判断-->L312(null Vs Object<br>Object Vs Array)

    L22-->L321(对象的具体类型)

    L23-->L33(null, undefined)
{{</mermaid>}}
