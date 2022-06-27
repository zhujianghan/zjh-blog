+++
title = 'vue-awesome-swiper-响应式'
date = 2020-06-01T09:54:30+08:00
tags = ['vue']
draft = false
+++

使用 vue-awesome-swiper 版本为 [3.1.4](https://github.com/surmon-china/vue-awesome-swiper/tree/v3.1.3) (对应的 swiper 版本为 [swiper4](https://www.swiper.com.cn/api/index.html))

```
// 先用原生 js + swiper4 写了一个响应式 demo.html, 每次 resize 重新 new 一个 swiper
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.js"></script>
    <style>
        .swiper-container {
            position: relative;
            margin: 0 auto;
        }

        .swiper-slide {
            background-color: #eee;
            text-align: center;
        }

        .avatar {
            width: 120px;
            border-radius: 50%;
            /*margin: 0 auto;*/
        }

        p.info {
            background-color: #fff;
            margin-top: -60px;
            margin-bottom: 0;
            padding: 80px 50px 50px 50px;
            color: #aaa;
            font-size: 18px;
            line-height: 30px;
        }

        .vague {
            height: 100%;
            position: absolute;
            top: 0;
            z-index: 2;
        }

        .vague-left {
            background: linear-gradient(90deg, #f9f9fb, hsla(0, 0%, 100%, .1));
            left: 0;
        }

        .vague-right {
            background: linear-gradient(270deg, #f9f9fb, hsla(0, 0%, 100%, .1));
            right: 0;
        }
    </style>
</head>
<body>
<div style="height: 100px"></div>
<div style="background-color: #ccc;">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="https://via.placeholder.com/120" alt="" class="avatar">
                <p class="info">
                    "slider1sl ider1slid er1slider 1slider1 sli der1sli de r1sli der1slider 1slider 1slid er 1slider"
                </p>
            </div>
            <div class="swiper-slide">
                <img src="https://via.placeholder.com/120" alt="" class="avatar">
                <p class="info">
                    "slider1sl ider1slid er1slider 1slider1 sli der1sli de r1sli der1slider 1slider 1slid er 1slide"
                </p>
            </div>
            <div class="swiper-slide">
                <img src="https://via.placeholder.com/120" alt="" class="avatar">
                <p class="info">
                    "slider1sl ider1slid er1slider 1slider1 sli der1sli de r1sli der1slider 1slider 1slid er 1slider"
                </p>
            </div>
            <div class="swiper-slide">
                <img src="https://via.placeholder.com/120" alt="" class="avatar">
                <p class="info">
                    "slider1sl ider1slid er1slider 1slider1 sli der1sli de "
                </p>
            </div>
            <div class="swiper-slide">
                <img src="https://via.placeholder.com/120" alt="" class="avatar">
                <p class="info">
                    "slider1sl ider1slid er1slider 1slider1 sli der1sli de r1sli der1s"
                </p>
            </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="vague vague-left"></div>
        <div class="vague vague-right"></div>
    </div>
</div>

<script>
    window.addEventListener('load', function () {
        getSwipper()

        window.addEventListener('resize', function () {
            getSwipper()
        })

    })

    function getSwipper() {
        const client_width = document.body.clientWidth
        const container = document.getElementsByClassName("swiper-container")[0]

        let per_view = 2
        let offset = 2

        if (client_width > 992) {
            container.style.width = '80%'
            if (client_width > 1200) {
                container.style.width = '50%'
            }
            const wrapper = document.getElementsByClassName("swiper-wrapper")[0]
            // console.log(wrapper.clientWidth)
            const item_width = (wrapper.clientWidth - 20) / 2
            const vague_width = (wrapper.clientWidth - item_width - 40) / 2
            offset = item_width - vague_width

            const vagueObjs = document.getElementsByClassName("vague")
            vagueObjs[0].style.width = vague_width + "px"
            vagueObjs[1].style.width = vague_width + "px"

        } else {
            container.style.width = '100%'
            per_view = 1
            offset = 0
        }


        // console.log(offset)
        let option = {
            slidesPerView: per_view,
            slidesPerGroup: 1,
            spaceBetween: 20,
            slidesOffsetBefore: offset,
            loop: true,
            // loopedSlides: 4,
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',
            // autoplay: 1000
        }

        var mySwiper = new Swiper('.swiper-container', option)
    }

</script>
</body>
</html>
```


在 vue(本次实例中使用的是 nuxt, vue 同理) 中使用则不完全一样, 因为 vue 有自己的生命周期, 在 vue 中重新生成(渲染 swiper) 可以使用 `v-if = is_resizing`, 通过 resize 时 `v-if = false`, resized 后 `v-if = true` 来实现重新渲染 dom.

```vue
// div
      <div class="swiper-container">
        <template v-if="swiper_visible">
          <div v-swiper:mySwiper="SwiperOption">
            <div class="swiper-wrapper">
              <template v-for="(item,index) in list">
                <div :key="index" class="swiper-slide">
                  <img :src="item.avatar" class="avatar">
                  <p class="content">{{ item.content }}</p>
                </div>
              </template>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </template>
      </el-row>

// script
    data(){
        return {
          mySwiperOption: {
              observer: true,
              observeParents: true,
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 20,
              slidesOffsetBefore: 0,
              loop: true,
              // loopedSlides: 4,
              navigation: {
                 nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              breakpoints: {
                992: {  //当屏幕宽度小于等于992
                  slidesPerView: 1,
                  spaceBetween: 0
                },
                1920: {  //当屏幕宽度小于等于1920
                  slidesPerView: 2,
                  spaceBetween: 20
                }
              },
          },
        }
    },
    mounted() {
      // 初始化 swiper
      this.initSwiper()
      this.swiper_visible = true

      // 绑定 swiper 随 resize 变动事件
      let _that = this
      window.onresize = function () {
        clearTimeout(this.timeout)
        _that.swiper_visible = false // 注意: 这里不能写到 setTimeout 里

        this.timeout = setTimeout(() => {
          _that.initSwiper()
          _that.swiper_visible = true
        }, 500)
      }
    },
    methods: {
      // swiper 配置初始化
      initSwiper() {
        const client_width = document.body.clientWidth

        let per_view = 2
        let offset = 2

        if (client_width > 992) {
          const wrapper = document.getElementsByClassName("swiper-container")[0]
          const item_width = (wrapper.clientWidth - 20) / 2 // 一个 slide 的宽度
          const vague_width = (wrapper.clientWidth - item_width - 40) / 2 // 两侧近似半个 slide 的宽度(与 slide 间距有关)
          offset = item_width - vague_width // swiper 偏移量
          this.vague_width = vague_width + "px"
        } else {
          per_view = 1
          offset = 0
          this.vague_width = 0
        }

        this.mySwiperOption.slidesPerView = per_view
        this.mySwiperOption.slidesOffsetBefore = offset
      },
```

最重要的代码在 onresize 里, 问题如下 v-if = false 和 initSwiper() 及 v-if = true 之间要有一个时间差.
```
    window.onresize = function () {
        clearTimeout(this.timeout)
        _that.swiper_visible = false // 注意: 这里不能写到 setTimeout 里

        this.timeout = setTimeout(() => {
          // _that.swiper_visible = false // 注意: 写在这里, 不会重新加载 swiper-dom
          _that.initSwiper()
          _that.swiper_visible = true
        }, 500)
      }
```

