+++
title = 'vue-@input-事件'
date = 2019-07-12T15:49:26+08:00
tags = []
draft = false
+++

input 事件 结合了 keyup事件 和 change事件, 会在 keyup 时判断值是否发生变化, 变化了则触发该事件
```
// html
      <input v-model="keyword" type="text" id="search" @input="onSearch" autofocus class="input_search"  placeholder="问题或选项关键词">

// js
onSearch() {
...
```


keyup事件 也可以使用一个旧值在 keyup 的时候来比较值是否变化, 如果没有变化就直接return, 否则给旧值赋上新值, 再进行接下去的业务逻辑
```
// html
      <input v-model="keyword" type="text" id="search" @keyup="onSearch" autofocus class="input_search"  placeholder="问题或选项关键词">

// js
onSearch() {
    if(this.keyword === this.keyword_old){
          return
    }

    this.keyword_old = this.keyword
    ...
```

