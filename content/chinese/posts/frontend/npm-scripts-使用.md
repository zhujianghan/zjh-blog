+++
title = 'npm-scripts-使用'
date = 2020-10-20T14:32:49+08:00
tags = []
draft = false
+++

背景: 项目安装了 browserify --save-dev, 如何在命令行中使用这个命令

这个命令的位置在 node_modules/.bin/ 目录下,
可以在终端使用
```
node_modules/.bin/browserify --version
```


也可以在 package.json 中使用 
```
  "scripts": {
    "prebuild": "rm -rf ./js/dist/*",
    "build": "browserify ./js/src/app.js -o ./js/dist/bundle.js"
  }
```



[参考自阮一峰博客: npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)
