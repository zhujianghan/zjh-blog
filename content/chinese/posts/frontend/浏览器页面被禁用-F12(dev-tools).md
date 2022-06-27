+++
title = '浏览器页面被禁用-F12(dev-tools)'
date = 2020-11-26T09:29:12+08:00
tags = []
draft = false
+++

背景: 打开一个[网页 havey.com](https://www.haveyb.com/article/302), 使用不了 F12

- 解决办法1: 使用浏览器设置栏, 打开`开发者工具`,  `设置->更多工具->开发者工具`
![image.png](https://upload-images.jianshu.io/upload_images/4073481-dc925c60aa1cb0c6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 解决办法2: 在页面还没完全打开时, 快速按下 F12

- 解决办法3: 命令行启动浏览器, 携带参数, 强制打开所有页面的 devtools
  ```
  chrome.exe –auto-open-devtools-for-tabs –user-data-dir=./
  ```
  [参考 it-refer.com](http://www.it-refer.com/2020/01/15/open-devtools-of-chrome-automatically/)
