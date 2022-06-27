+++
title = 'go-判断-https-ssl-证书是否过期'
date = 2022-03-25T13:03:46+08:00
tags = ['go']
draft = false
+++

```
package main

import (
	"crypto/tls"
	"fmt"
	"time"
)

func main() {
	conn, err := tls.Dial("tcp", "blog.umesh.wtf:443", nil)
	if err != nil {
		panic("Server doesn't support SSL certificate err: " + err.Error())
	}

	err = conn.VerifyHostname("blog.umesh.wtf")
	if err != nil {
		panic("Hostname doesn't match with certificate: " + err.Error())
	}
	expiry := conn.ConnectionState().PeerCertificates[0].NotAfter
	fmt.Printf("Issuer: %s\nExpiry: %v\n", conn.ConnectionState().PeerCertificates[0].Issuer, expiry.Format(time.RFC850))
}
```

[参考自 freecodecamp](https://www.freecodecamp.org/news/how-to-validate-ssl-certificates-in-go/)
