+++
title = 'lodash-的-防抖(debounce)和节流(throttle)'
date = 2019-07-26T16:32:00+08:00
tags = []
draft = false
+++

防抖适合于 input 框, 等到最后一次输入才执行需要进行的操作
节流适合于 点击事件, 第一下点击就能生效, 之后指定时间段内的点击不生效

```
<div id="app">
    <input type="text" v-model="tempInput">
    <br>
    <button @click="onClick">点击</button>
</div>
<script>
    const vm = new Vue({
        el: '#app',
        data: {
            tempInput: ''
        },
        methods: {
            alertFunc() {
                console.log(this.tempInput)
            },
            onClick() {
                // this.debouncedClick()
                this.throttledClick()
            },
            test() {
                console.log('click' + Date.now())
            }
        },
        created() {
            this.debouncedAlertFunc = _.debounce(this.alertFunc, 5000)
            // this.debouncedClick = _.debounce(this.test, 5000)
            this.throttledClick = _.throttle(this.test, 5000)
        },
        watch: {
            tempInput: function (newVal, oldVal) {
                this.debouncedAlertFunc()
            }
        }
    })
</script>
```

