+++
title = "Go Defer Return 题 - 李文周"
date = 2022-08-30T15:14:25+08:00
tags = ["go"]
draft = false
+++

## 题1: 阅读下面的代码，写出最后的打印结果  
[来源: 李文周blog - go语言基础之函数](https://www.liwenzhou.com/posts/Go/09_function/)

> return res 底层实现: 
> 1. 返回值 = x, 如果函数中已定义返回变量名, 则该返回变量 = x
> 2. 执行返回

> 遇到 defer 时 return res 底层实现 
> 1. 返回值 = x. 如果函数中已定义返回变量名, 则该返回变量 = x; 如果函数中未指定返回变量名, 则假定返回变量名为 returnValue, 也就有 returnValue = x
> 2. 执行 defer 的函数
> 3. 执行 返回

```
func f1() int {
	x := 5
	defer func() {
		x++
	}()
	return x
}

func f2() (x int) {
	defer func() {
		x++
	}()
	return 5
}

func f3() (y int) {
	x := 5
	defer func() {
		x++
	}()
	return x
}
func f4() (x int) {
	defer func(x int) {
		x++
	}(x)
	return 5
}
func main() {
	fmt.Println(f1())
	fmt.Println(f2())
	fmt.Println(f3())
	fmt.Println(f4())
}
```

{{<click-to-show>}}
5 // returnValue = 5;x++;return returnValue <br>
6 // x=5;x++;return x <br>
5 // y=x (y=5);x++;return y<br>
5 // 形参不改变原变量 <br>
{{</click-to-show>}}

---
## 题2: 下面代码的输出结果是？（提示：defer注册要延迟执行的函数时该函数所有的参数都需要确定其值）
```
func calc(index string, a, b int) int {
	ret := a + b
	fmt.Println(index, a, b, ret)
	return ret
}

func main() {
	x := 1
	y := 2
	defer calc("AA", x, calc("A", x, y))
	x = 10
	defer calc("BB", x, calc("B", x, y))
	y = 20
}
```

{{<click-to-show>}}
A   1   2   3   <br>
B   10  2   12  <br>
BB  10  12  22  <br>
AA  1   3   4  <br>
{{</click-to-show>}}
