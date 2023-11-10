+++
title = 'Line Breaks for Strings on Canvas'
date = 2023-11-10T09:20:46+08:00
tags = ['canvas']
draft = false
+++


# canvas 绘制文本时, 换行如何解决
## 背景
微信小程序中使用 canvas 绘制分享海报长文本不能自动换行
> 题外: Taro 小程序中 canvas 的宽高设置 
```
// poster.jsx
export default () => {
  
  useLoad(() => {
    ...
    const dpr = Taro.getWindowInfo().pixelRatio
    // canvas对象 通过 createSelectorQuery 获取
    
    canvas.width = renderWidth * dpr
    canvas.height = renderHeight * dpr
    ctx.scale(dpr, dpr)
    ...
  })
  
  return (
    ...
    <Canvas 
      id='poster'
      type='2d'
      style='width:320px;height:400px'
    />    
    ...
  )

}
```

## 思路
1. 对于纯中文, 不用考虑单词被分到两行
   - 先将文本按每个 `字符` 分成数组
   - 按 canvas 的 measureText 方法调整一行的宽度(字体大小不同, 宽度不同), 获取每一行应该出现的文本
   - 分行按高度输出

2. 对于纯英文, 要考虑单词被分到两行
   - 先将文本按 `空格` 分成数组
   - 同上 


```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Canvas Demo</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<div class="">
  <canvas
      id="myCanvas"
      width="320"
      height="400"
      class="border border-black mx-auto"
  ></canvas>
</div>

<script>
  const canvas = document.querySelector('#myCanvas')
  const ctx = canvas.getContext('2d')

  const str1 = '这是一段中文的长文本,没有空格作为分隔符,不需要考虑会把单词分成两行的情况.'
  const str2 = 'This a string in English, which contains several empty chars, and each letter should not be break into 2 lines.'

  const arr1 = str1.split('')
  const arr2 = str2.split(' ')

  let lines1 = []
  let lines2 = []

  let tmpStr = ''
  for (let i = 0; i < arr1.length; i++) {
    if (ctx.measureText(tmpStr + arr1[i]).width > 120) {
      lines1.push(tmpStr)
      tmpStr = arr1[i]
    } else {
      tmpStr += arr1[i]
    }

    if (i === arr1.length - 1) {
      lines1.push(tmpStr)
    }
  }

  tmpStr = ''
  for (let i = 0; i < arr2.length; i++) {
    if (ctx.measureText(tmpStr + arr2[i]).width > 120) {
      lines2.push(tmpStr)
      tmpStr = arr2[i]
    } else {
      if (tmpStr === '') {
        tmpStr += arr2[i]
      } else {
        tmpStr = tmpStr + ' ' + arr2[i]
      }
    }

    if (i === arr2.length - 1) {
      lines2.push(tmpStr)
    }
  }

  console.log(lines1)
  console.log(lines2)

  ctx.font = 'bold 24px sans-serif'
  for (let i = 0; i < lines1.length; i++) {
    ctx.fillText(lines1[i], 20, 30 * (i + 1))
  }

  for (let i = 0; i < lines2.length; i++) {
    ctx.fillText(lines2[i], 20, 150 + 30 * (i + 1))
  }

  ctx.save()
</script>

</body>
</html>

```
