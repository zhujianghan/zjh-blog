+++
title = 'go-通用-http-client-请求头'
date = 2022-04-16T11:29:14+08:00
tags = ['go']
draft = false
+++

[参考stackoverflow: adding-a-default-http-header-in-go](https://stackoverflow.com/questions/51325704/adding-a-default-http-header-in-go)


```go
package main

import (
    "fmt"
    "net/http"
    "time"
)

const accessToken = "MY_DEMO_TOKEN"

type MyRoundTripper struct {
    r http.RoundTripper
}

func (mrt MyRoundTripper) RoundTrip(r *http.Request) (*http.Response, error) {
    r.Header.Add("Authorization", "Bearer: "+accessToken)
    return mrt.r.RoundTrip(r)
}

func main() {
    client := &http.Client{
        Timeout:   time.Second * 10,
        Transport: MyRoundTripper{r: http.DefaultTransport},
    }

    fmt.Println(client.Get("http://google.com/"))
}


```
