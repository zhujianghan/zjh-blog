+++
title = 'nuxt-asyncData-多个接口异步'
date = 2019-11-04T13:05:38+08:00
tags = ['vue']
draft = false
+++

1. 接口同步, 耗时长
```
async asyncData({$axios}){
  let res1 = await $axios.get('...')
  let res2 = await $axios.get('...')

  return {
    res1: res1,
    res2: res2
  }
}
```

2. 接口异步
```
async asyncData({$axios}){
  let [res1, res2] = await Promise.all([
    $axios.get('...'),
    $axios.get('...')
  ]}

  return {
    res1: res1,
    res2: res2
}
```
