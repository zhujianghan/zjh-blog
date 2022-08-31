+++
title = "Go | for...range 中 value 的地址"
date = 2022-08-31T11:20:14+08:00
tags = ["go"]
draft = false
+++

```
nums := []int{1, 2, 3}

for i := 0; i < len(nums); i++ {
	fmt.Printf("%p \n", &nums[i])
}

for index, num := range nums {
	fmt.Printf("%p %p \n", &nums[index], &num)
}

// 0xc00000c150
// 0xc00000c158 
// 0xc00000c160 
// 0xc0000180e0 0xc00000c150 
// 0xc0000180e0 0xc00000c158 
// 0xc0000180e0 0xc00000c160 
```

由上可知, 有 for range 遍历中, value 的地址是固定的, 相当于初始化一个变量, 之后每次遍历会把 value 值赋值给该变量

题目: 请问下面代码的执行结果是什么？
[题目来源: liwenzhou-blog go语言基础之结构体](https://www.liwenzhou.com/posts/Go/10-struct/)
```
type student struct {
	name string
	age  int
}

func main() {
	m := make(map[string]*student)
	stus := []student{
		{name: "小王子", age: 18},
		{name: "娜扎", age: 23},
		{name: "大王八", age: 9000},
	}

	for _, stu := range stus {
		m[stu.name] = &stu
	}
	for k, v := range m {
		fmt.Println(k, "=>", v.name)
	}
}
```
{{<click-to-show>}}
小王子 => 大王八  
娜扎 => 大王八  
大王八 => 大王八
{{</click-to-show>}}