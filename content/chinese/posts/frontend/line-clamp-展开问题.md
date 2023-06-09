+++
title = "Line Clamp 展开问题"
date = 2023-06-09T11:43:33+08:00
tags = []
draft = false
+++

## 要求: 多行文本时, 显示可展开按钮, 如果小于指定行数则无需显示

1. 通过 line-clamp 设置行数
2. 通过里外 div 的高度来初始化是否需要 "展开" 按钮

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .contentBox {
            margin: 20px 0;
            border: 1px solid #666;
            width: 200px;
        }

        input {
            display: none;
        }

        .outer {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
        }

        input[name="toggle"]:checked + .outer {
            -webkit-line-clamp: unset;
        }

        input[name="toggle"]:checked + div.outer + label::after {
            content: '收起';
        }

        label::after {
            content: '更多';
        }

        label {
            display: none;
            background: #aaa;
            padding: 1px 2px;
        }

    </style>
</head>
<body>


<button onclick="setLine('<3')">文本长度 < 3 行</button>
<button onclick="setLine('=3')">文本长度 = 3 行</button>
<button onclick="setLine('>3')">文本长度 > 3行</button>

<div class="contentBox">
    <input type="checkbox" id="toggle" name="toggle">
    <div class="outer">
        <div class="inner">
            -webkit-line-clamp CSS 属性可以把块容器中的内容限制为指定的行数。 <br>
            它只有在 display 属性设置成 -webkit-box 或者 -webkit-inline-box 并且 box-orient 属性设置成 vertical时才有效果。 <br>
            在大部分情况下，也需要设置 overflow 属性为 hidden，否则，里面的内容不会被裁减，并且在内容显示为指定行数后还会显示省略号。
        </div>
    </div>
    <label for="toggle"></label>
</div>


<script>
    function displayLabel() {
        if (document.querySelector('.outer').clientHeight < document.querySelector('.inner').clientHeight) {
            document.querySelector('label').style.display = 'inline-block'
        } else {
            document.querySelector('label').style.display = 'none'
        }
    }

    function setLine(x) {
        const m = {
            '<3': 'webkit-line-clamp',
            '=3': '-webkit-line-clamp CSS 属性可以把块容器中的内容限制为指定的行数。',
            '>3': `-webkit-line-clamp CSS 属性可以把块容器中的内容限制为指定的行数。
         它只有在 display 属性设置成 -webkit-box 或者 -webkit-inline-box 并且 box-orient 属性设置成 vertical时才有效果。
        在大部分情况下，也需要设置 overflow 属性为 hidden，否则，里面的内容不会被裁减，并且在内容显示为指定行数后还会显示省略号。`,
        }

        document.querySelector('.inner').innerHTML = m[x]

        setTimeout(() => {
            displayLabel()
        }, 100)
    }

    setLine('>3')
</script>
</body>
</html>
```

