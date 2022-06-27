+++
title = 'vue-nuxt-中-通过路由来实现导航高亮'
date = 2022-04-16T11:29:14+08:00
tags = ['vue']
draft = false
+++

1. 首先在 mounted() 中判断了路由, 实现高亮, 后来发现刷新才有用, 直接 router.push 过去的链接则不生效
2. 监听路由变化, 执行同样的判断
```
    mounted() {
      this.initHighlight()
    },
    watch: {
      "$route"() {
        this.initHighlight()
      }
    },
    methods: {
      // 导航高亮
      initHighlight() {
        if (this.$route.name == 'route1') {
          this.active_id = -2
        } else if (this.$route.name == 'route2) {
          this.active_id = -1
        } else if (this.$route.name == 'route3') {
          this.active_id = this.$route.params.navid
        } else {
          this.active_id = 0
        }
      }
    }

```

[参考自: segmentfault](https://segmentfault.com/a/1190000015072603)
