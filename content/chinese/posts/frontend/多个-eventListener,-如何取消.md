+++
title = '多个-eventListener,-如何取消'
date = 2020-07-08T23:35:08+08:00
tags = ['react']
draft = false
+++

参考: [JavaScript事件机制](https://juejin.im/post/5db7b2475188252e7c774773)

> 背景: 在 taro3.0.2 中, 小程序端使用 onPullDown(), 会造成 h5 端可以下拉, 但是不正常(顶部出现下拉空白, 不可恢复)

后来发现 tao-tabbar__pannel 的 `touchmove` 事件造成的
![image.png](https://upload-images.jianshu.io/upload_images/4073481-8fa1de22e629063d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

于是要关闭这个事件, 但是 使用 removeEventListener 不管用, 使用 addEventListener 覆盖, 会发现会依次执行, 不会覆盖, 于是就有了参考文章里的方法  e.stopImmediatePropagation()
```js
  async componentDidMount() {
    // h5 不支持下拉刷新, 下拉会出现空白, 且不消失
    if (process.env.TARO_ENV === 'h5') {
      const obj = document.getElementsByClassName('taro-tabbar__panel')
      obj[0].addEventListener('touchmove', function (e) {
        e.stopImmediatePropagation()
        e.preventDefault()
      })
    }
    .
    .
    .
  }
```
