+++
title = "Exercise_go_test_是否回文"
date = 2022-09-09T17:25:46+08:00
tags = ["go", "test"]
draft = false
+++

## 编写一个回文检测函数，并为其编写单元测试和基准测试，根据测试的结果逐步对其进行优化。（回文：一个字符串正序和逆序一样，如“Madam,I’mAdam”、“油灯少灯油”等。）
[来源:李文周blog](https://www.liwenzhou.com/posts/Go/unit-test/)
> tip: 要考虑中文则使用 rune

```go
// palindrome/palindrome.go
package palindrome

func IsPalindrome(s string) bool {
    // 转成 rune, 应对中文等特殊字符
    r := []rune(s)

    l := len(r)
    for i := 0; i < l/2; i++ {
        if r[i] != r[l-1-i] {
            return false
        }
    }
    return true
}

```

```go
// palindrome/palindrome_test.go
package palindrome

import (
    "fmt"
    "testing"
)

func TestIsPalindrome(t *testing.T) {
    type test struct {
        text string
        want bool
    }

    arr := []test{
        {"", true},
        {"a", true},
        {"aa", true},
        {"ab", false},
        {"aba", true},
        {"abcba", true},
        {"abccba", true},
        {"abcdabcd", false},
        {"Madam,I’mAdam", false},
        {"油灯少灯油", true},
    }

    for _, tc := range arr {
        t.Run(fmt.Sprintf("text:%#v", tc.text), func(t *testing.T) {
            if got := IsPalindrome(tc.text); tc.want != got {
                t.Errorf("want: %v, got: %v", tc.want, got)
            }
        })
    }
}
```