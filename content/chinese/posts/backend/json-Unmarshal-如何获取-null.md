+++
title = 'json-Unmarshal-如何获取-null'
date = 2022-04-16T11:29:14+08:00
tags = ['go']
draft = false
+++

对于如下 json 和 struct, 会将 gender 解析为 false, 而实际上应为 nil, 则需要 将 struct 中的 bool 类型转为 *bool 类型
```json
 {
    "name": "Jim Green",
    "age": 15,
    "gender": null
 }
```

```go
type Student struct {
  Name string `json:"name"`
  Age  int    `json:"age"`
  Name bool   `json:"gender"`
}
```

因为在 go 中指针不可以进行运算, 只能引用
对于 *bool 类型的变量, 不能直接赋值 如 
```go
var gender *bool
*gender = true // panic: runtime error: invalid memory address or nil pointer dereference
```

而应该对非指针类型赋值, 再引用指针
```go
var gender *bool
tempGender := true
gender = &tempGender
```
