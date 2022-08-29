+++
title = "Go_slice_写出代码的运行结果"
date = 2022-08-29T16:34:55+08:00
tags = ["go"]
draft = false
+++

## 请写出下面代码的输出结果  

```
func main() {
	var a = make([]string, 5, 10)
	for i := 0; i < 10; i++ {
		a = append(a, fmt.Sprintf("%v", i))
	}
	fmt.Println(a)
}
```

{{<click-to-show>}}
make 后 a 已经初始化为 []string{"","","","",""}  
<br>
之后再 append, 会添加到后面 []string{"","","","","","0","1","2","3","4","5","6","7","8",9"}
{{</click-to-show>}}

