+++
title = 'vue-cli3-0-项目-全局-styl-样式在-App-vue-引入后变量不生效'
date = 2022-04-16T11:29:14+08:00
tags = ['vue']
draft = false
+++

### 错误情况
在 assets 下新建 common.styl 样式, 在 App.vue 的 style 标签引入后. 在没有变量的情况下可以全局使用, 有变量时, 则变量不生效

### 解决办法
1. 不需要在 App.vue 中引用
2. 在 vue.config.js 中引用
```
module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme',
          './src/assets/css/public/common'
        ]
      }
    }
  }
}
```
