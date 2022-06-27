+++
title = 'vue-v-for-列表中的数据进行值的更改后,页面不能同步更新'
date = 2019-02-24T15:54:26+08:00
tags = []
draft = false
+++

```
<div id="app">
    <ul>
        <li v-for="item in list">{{ item }}</li>
    </ul>
</div>
<script src="vue.js"></script>
<script>
    let vm = new Vue({
       el:'#app',
       data:{
           list:['a','b','c']
       }
    });

    vm.list[0]= 1;
    // vm.list.push(1);
    // vm.list.pop();
</script>
```
如果没有最后的 `push` 与 `pop` 对 `list` 进行入栈、出栈, `list` 的值会改变, 但是页面不会改变;
通过对 `list` 进行入栈、出栈, 可以实现页面上值的改变



另附官方解决办法
![图片.png](https://upload-images.jianshu.io/upload_images/4073481-3e9c740bf608bfbf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

https://cn.vuejs.org/v2/guide/list.html#%E6%95%B0%E7%BB%84%E6%9B%B4%E6%96%B0%E6%A3%80%E6%B5%8B
