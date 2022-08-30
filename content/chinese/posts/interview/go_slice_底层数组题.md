+++
title = "Go slice 底层数组题"
date = 2022-08-30T11:25:55+08:00
tags = ["go"]
draft = false
+++

## 请写出下面代码的输出结果 
⭐⭐⭐⭐

```
func main() {
	type Map map[string][]int
	m := make(Map)
	s := []int{1, 2}
	s = append(s, 3)
	fmt.Printf("%+v\n", s)
	m["q1mi"] = s
	s = append(s[:1], s[2:]...)
	fmt.Printf("%+v\n", s)
	fmt.Printf("%+v\n", m["q1mi"])
}
```

问题简化为
```
	s := []int{1, 2, 3}
	s2 := s
	fmt.Println(s, s2)

	s = append(s[:1], s[2:]...)
	fmt.Println(s, s2)
```

{{<click-to-show>}}
result: 
<br>
[1 2 3] [1 2 3]
<br>
[1 3]   [1 3 3]
{{</click-to-show>}}

