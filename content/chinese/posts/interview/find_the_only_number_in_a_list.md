+++
title = "Find the only number in a list"
date = 2022-08-29T10:12:23+08:00
tags = ["go"]
draft = false
+++

# 题: 有一堆数字，如果除了一个数字以外，其他数字都出现了两次，那么如何找到出现一次的数字？
[来源: 李文周 Go语言基础之运算符](https://www.liwenzhou.com/posts/Go/03_operators/)

利用 ^ 二进位异或 运算符
```
func findTheOnlyNumber(nums []int) (res int) {
	for index, num := range nums {
		if index == 0 {
			res = num
		} else {
			res = res ^ num
		}
	}

	return
}
```