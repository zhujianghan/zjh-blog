+++
title = "React(Next client) 执行两次"
date = 2024-01-26T13:36:34+08:00
tags = []
draft = true
+++

> 背景: 使用 nextjs 14.0 app route 开发 aliyun vod player 
```jsx
'use client'

import { useEffect } from 'react'

export default function AliyunVodPlayer({ config }) {
    if (!config || !config.origin_id || !config.vod_id || !config.play_auth) {
        return null
    }

    useEffect(() => {
        if (!window.Aliplayer) {
            return
        }

        let player = new window.Aliplayer({
            id: 'player_' + config.origin_id,
            autoplay: false,
            vid: config.vod_id,
            playauth: config.play_auth,
            width: '100%',
            cover: '',
            controlBarVisibility: 'always',
        })
    }, [config])

    return null
}
```

发现播放器异常, 经查 dom, 有两层播放器, 原因就是 react 开发模式执行了两次

react 执行两次是严格模式时为了提醒开发者 "keeping-components-pure"

解决办法: 在 useEffect 最后要消除副作用

```jsx
  useEffect(() => {
    if (!window.Aliplayer) {
      return
    }

    let player = new window.Aliplayer({
      id: 'player_' + config.origin_id,
      autoplay: false,
      vid: config.vod_id,
      playauth: config.play_auth,
      width: '100%',
      cover: '',
      controlBarVisibility: 'always',
    })

    return () => {
      try {
        player.dispose()
        player = null
      } catch (e) {
        console.log(e)
      }
    }
  }, [config])
```

[参考链接: 掘金 - React18的useEffect会执行两次 ](https://juejin.cn/post/7137654077743169573)
