+++
title = "Interview | Number of Chinese in a String"
date = 2022-08-26T16:18:04+08:00
tags = ["go"]
draft = false
+++

# 题目: 编写代码统计出字符串"hello沙河小王子"中汉字的数量
题目来源: [李文周blog: Go语言基础之基本数据类型](https://www.liwenzhou.com/posts/Go/02_datatype/)

tips:
- 字符串用 for 遍历, str[i] 的值是 byte(uint8) 类型, 且下标 i 是连续的, 从 0 到 len(str)  
- 字符串用 for range 遍历, index,value 的值是 rune(int32) 类型, 下标不一定是连续的, 碰到中文只会出现中文的首下标, 然后跳到下一个 rune 字符

```
func getChineseCharNumInAString(str string) (num int) {
	for i, r := range str {
		if byte(r) == str[i] {
			continue
		}
		num++
	}
	return num
}
```

