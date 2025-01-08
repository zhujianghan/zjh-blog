+++
title = 'access_token 和 refresh_token 的使用'
date = 2025-01-08T13:38:00+08:00
tags = ['axios', 'token']
draft = false
+++

在 Web 开发中，使用 access_token 和 refresh_token 的双 token 机制是为了在安全性与用户体验之间取得平衡。以下是它们各自的作用以及为什么需要使用双 token：

### access_token 的作用
- 访问受保护资源：access_token 是用于直接访问受保护资源的令牌。它通常包含用户的身份信息和权限范围。
- 短生命周期：access_token 的有效期较短，通常为几分钟到几小时。这样做的目的是减少令牌被泄露后可能造成的损害，因为攻击者只有很短的时间窗口可以利用这个令牌。

### refresh_token 的作用
- 刷新 access_token：当 access_token 过期时，refresh_token 用于获取新的 access_token。它不需要用户重新登录，从而提高了用户体验。
- 长生命周期：refresh_token 的有效期较长，通常为几天到几周。它通常存储在客户端的安全存储中，如加密的本地存储。
- 安全存储：由于 refresh_token 的有效期较长，它通常不会频繁地在网络中传输，从而降低了被盗的风险。

### 为什么要使用双 token
- 提高安全性：通过将 access_token 和 refresh_token 分开使用，即使 access_token 被泄露，攻击者也无法长时间利用它。而 refresh_token 由于其长生命周期和安全存储，即使被盗，服务器也可以随时将其标记为无效。
- 优化用户体验：用户不需要频繁重新登录。当 access_token 过期时，系统可以自动使用 refresh_token 获取新的 access_token，用户几乎感觉不到任何中断。
- 简化 Token 管理：双 token 机制使得 Token 的管理更加灵活，可以根据不同的安全需求设置不同的有效期。

### 实际 axios 使用时, 使用 axios 的 interceptor 拦截 access_token 失效的请求, 通过 refresh_token 无感刷新 access_token 后, 再重放 之前失败的请求

```ts
import axios from 'axios'

const instance = axios.create({
  baseURL: '/',
  timeout: 10000,
  validateStatus: (status) => {
    return status < 500
  },
})

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token')
  if (token) {
    config.headers.Authorization = token
  }

  return config
})

instance.interceptors.response.use(
  async (response) => {
    if (response.status === 401) {
      // 刷新 token
      if (await refreshToken()) {
        // 重放请求
        return await instance.request(response.config)
      } else {
        window.location.href = '/login'
      }
    } else if (response.status === 403) {
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      window.location.href = '/login'

      return Promise.reject('error to refresh token')
    }

    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

let promise: Promise<boolean> | null //Promise
async function refreshToken() {
  if (promise) {
    return promise
  }
  promise = new Promise(async (resolve) => {
    const { status, data } = await axios.put('/api/refresh-token', {
      refresh_token: localStorage.getItem('refresh_token'),
    }, {
      validateStatus: (status) => status < 500,
    })

    if (status !== 200) {
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      resolve(false)
    } else {
      const { access_token, refresh_token } = data
      localStorage.setItem('access_token', JSON.stringify(access_token))
      localStorage.setItem('refresh_token', JSON.stringify(refresh_token))
      resolve(true)
    }
  })

  promise.finally(() => {
    promise = null
  })

  return promise
}

export {
  instance,
}
```

[参考掘金:聊聊单点登录（SSO）](https://juejin.cn/post/7454474417318690831)  
该文中提到双 token 中的 refresh_token 用于服务端控制访问权限(退出登录)，但实际应用中，refresh_token 的作用是刷新 access_token，而不是控制访问权限; 并且后端存储 access_token 也能控制 access_token 的失效。  

[代码见github: demo-refresh-token-202501](https://github.com/llxcyzgh/demo-refresh-token-202501)