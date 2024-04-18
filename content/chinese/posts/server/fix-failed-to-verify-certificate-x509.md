+++
title = 'Fix Failed to Verify Certificate X509'
date = 2024-04-18T09:51:40+08:00
tags = ['https']
draft = false
+++

# 修复 "Failed to Verify Certificate X509" 问题

## 问题出现背景
linux 环境下在 go 中用一个函数获取 https 证书有效期, 在查询一个由 freessl cname 申请的证书后, 发现报错 
```shell
Errortls: failed to verify certificate: x509: certificate signed by unknown authority
```

而在 windows 环境又正常, 遂在 linux 中使用 curl https://xxx.com 得到
```shell
curl: (60) Peer's Certificate issuer is not recognized.
More details here: http://curl.haxx.se/docs/sslcerts.html
```

```go
package pkg

import (
    "crypto/tls"
    "errors"
    "time"
)

func WillExpireIn7Days(hostname string) (bool, time.Time, error) {
    conn, err := tls.Dial("tcp", hostname+":443", nil)
    if err != nil {
        return true, time.Time{}, errors.New("Error" + err.Error())
    }

    err = conn.VerifyHostname(hostname)
    if err != nil {
        return true, time.Time{}, errors.New("Hostname doesn't match with certificate: " + err.Error())
    }

    expiry := conn.ConnectionState().PeerCertificates[0].NotAfter

    return expiry.Sub(time.Now().Add(time.Hour*24*7)) < 0, expiry, nil
}


```

## 解决办法: 将证书(链)文件添加到 linux 服务器的受信任证书库中

1. 用火狐浏览器(Firefox)打开地址, 点击网址旁边那个安全锁的图标, 点击安全连接, 点击更多信息, 会弹出一个安全页面信息   
2. 点击安全证书, 在打开的页面中往下浏览, 找到一个下载项(如有多个 tab, 选择 chain), 点击 PEM（证书链）, 将该文件下载到本地  
3. 将该文件上传到服务器, 如果是centos, 将该文件上传到目录 `/etc/pki/ca-trust/source/anchors/` 下, 将文件的后缀名由 .pem 改为 .crt,
4. 执行命令 `yum install -y ca-certificate` 后 再执行 `update-ca-trust extract`  
5. 此时就可以正常 curl 了, go 中的 tls.Dial 也恢复正常  


参考文章: [解决cURL error 60 Peer's Certificate issuer is not recognized.问题](https://www.xiaoxiaoguo.cn/php/cURL-error-60.html)
