+++
title = '不使用-struct-定义-json-字符串'
date = 2021-09-01T09:07:16+08:00
tags = ['apache','域名']
keywords = ['apache多域名']
draft = false
+++

```go
// 方法一: 生写 string
jsonStr := `
"name": "Jack",
"age": 25
`

// 方法二: map[string]interface{}
jsonMap := map[string]interface{}{
  "name": "Jack",
  "age": 66,
}
jsonByte, _ = json.Marshal(jsonMap)
jsonStr = string(jsonByte)




```

另外 jsonStr 转 io.Reader
r := strings.NewReader(jsonStr)
