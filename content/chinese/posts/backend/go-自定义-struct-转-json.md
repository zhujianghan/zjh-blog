+++
title = 'go-自定义-struct-转-json'
date = 2022-04-14T16:13:08+08:00
tags = ['go']
draft = false
+++

#### 需求: 从 api 获取到 json, 本地 unmarshal 为 struct 后, 以另外的 json tag marhsal 为 json 字符串
```go
type Student struct {
  Name string `json:"name"`
  Age int `json:"age"`
}

strIn := `{
  "stu_name": "Jim Green",
  "age": 14
}`

// to json
strOut := `{
  "name": "Jim Green",
  "age": 14
}`

```



使用到的方法 UmarshalJOSN / MarshalJSON

#### 方法一:  通过中间 struct 变量的匿名嵌套 struct embedding (注意防止无限循环使用 alias)
```go
package main

import (
	"encoding/json"
	"fmt"
)

type Student struct {
	Name string `json:"name"`
	Age  int    `json:"age"`
}

func (s *Student) UnmarshalJSON(data []byte) error {
	type Alias Student

	aux := &struct {
		*Alias
		StuName string `json:"stu_name"`
	}{
		Alias: (*Alias)(s),
	}

	if err := json.Unmarshal(data, &aux); err != nil {
		return err
	}

	s.Name = aux.StuName
	return nil
}

func main() {
	strIn := `{
  "stu_name": "Jim Green",
  "age": 14
}`

	var stu Student
	json.Unmarshal([]byte(strIn), &stu)

	res, _ := json.Marshal(stu)
	fmt.Println(string(res))
}

```

#### 方法二: 通过反射获取中间变量的 tag 
```go

```

> 注意: UmarshalJSON 和 MarshalJSON 方法只能针对 struct 类型使用, 不能对 alias 的 string, int ... 等使用
参考:
http://choly.ca/post/go-json-marshalling/ 
https://cloud.tencent.com/developer/ask/199561/answer/310806
