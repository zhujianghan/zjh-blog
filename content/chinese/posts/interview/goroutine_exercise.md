+++
title = "Goroutine 练习题"
date = 2022-09-07T14:50:29+08:00
tags = ["go", "goroutine", "channel"]
draft = false
+++

### 题目: 使用 goroutine 和 channel 实现一个计算int64随机数各位数和的程序，例如生成随机数61345，计算其每个位数上的数字之和为19。
   - 开启一个 goroutine 循环生成int64类型的随机数，发送到 jobChan
   - 开启24个 goroutine 从jobChan中取出随机数计算各位数的和，将结果发送到resultChan
   - 主 goroutine 从resultChan取出结果并打印到终端输出

[题目来源: 李文周blog](https://www.liwenzhou.com/posts/Go/concurrence/#autoid-0-7-2)

```go
package main

import (
	"fmt"
	"math/rand"
	"runtime"
	"time"
)

func main() {
	numChan := make(chan int, 24)
	resChan := make(chan int)

	for i := 0; i < 24; i++ {
		go func() {
			for num := range numChan {
				if check19(num) {
					resChan <- num
					break
				}
			}
		}()
	}

FOR:
	for {
		select {
		case res := <-resChan:
			fmt.Println(res)
			break FOR
		default:
			fmt.Println("runtime.NumGoroutine() =", runtime.NumGoroutine(), time.Now())
			numChan <- genNum()
		}
	}

}

func genNum() int {
	rand.Seed(time.Now().UnixNano())
	return rand.Intn(10000)
}

func check19(num int) bool {
	time.Sleep(time.Second * 10)

	sum := 0
	for num >= 10 {
		sum += num % 10
		num /= 10
	}

	sum += num
	return sum == 19
}


```


[go channel(con-currency) 学习资料: medium Anatomy of Channels in Go - Concurrency in Go](https://medium.com/rungo/anatomy-of-channels-in-go-concurrency-in-go-1ec336086adb)