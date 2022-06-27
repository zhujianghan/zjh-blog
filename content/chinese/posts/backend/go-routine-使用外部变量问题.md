+++
title = 'go-routine-使用外部变量问题'
date = 2022-04-26T10:28:36+08:00
tags = ['go']
draft = false
+++

```go
	for i := 0; i < 10; i++ {
		go func() {
			fmt.Println(i)
		}
	}

	time.Sleep(time.Second) // 10,10,10,10,...
```
使用 go vet 检查

```go
// 修改
	for i := 0; i < 10; i++ {
		go func() {
                        i2 := i
			fmt.Println(i2)
		}
	}
// 或者(推荐)
	for i := 0; i < 10; i++ {
		go func(i int) {
			fmt.Println(i)
		}(i)
	}

	time.Sleep(time.Second) 
```

参考 https://www.jianshu.com/p/e5f328819d4b
