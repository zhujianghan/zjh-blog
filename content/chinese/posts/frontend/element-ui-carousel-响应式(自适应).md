+++
title = 'element-ui-carousel-响应式(自适应)'
date = 2019-10-12T09:44:38+08:00
tags = ['vue']
draft = false
+++

```
<template>
  <div>
    <!-- banner -->
    <el-carousel trigger="click" :height="bannerHeight + 'px'">
      <el-carousel-item v-for="item in banners" :key="item.id">
        <img
          :src="$store.state.back_url + item.image"
          alt="banner"
          ref="bannerHeight"
          width="100%"
          @load="imgLoad"
        >
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    async asyncData({params, $axios}) {
      const response = await $axios.get('/phpapi/home-banners')
      return {banners: response.data.data}
    },
    data() {
      return {
        bannerHeight: '',
      }
    },
    methods: {
      imgLoad() {
        this.$nextTick(() => {
          this.bannerHeight = this.$refs.bannerHeight[0].height
        })
      }
    },
    mounted() {
      this.imgLoad()
      window.addEventListener('resize', () => {
        this.bannerHeight = this.$refs.bannerHeight[0].height
        this.imgLoad()
      }, false)
    }
  }
</script>

<style lang="scss">

</style>

```

原文见: [cnblog](https://blog.csdn.net/juneoer/article/details/84205231)

这里比原文多一样的是, 在轮播图片宽度上设置 100%
