+++
title = 'c语言中的-sleep()-函数在-windows-和-linux-下的不同表示'
date = 2019-10-15T15:39:21+08:00
tags = ['c']
draft = false
+++

在 windows 中, Sleep()
```
// test.c
#include <stdio.h>
#include <windows.h>
int main(){
  Sleep(3000);
  printf('hello C');
  return 0;
}

```
---

在 linux 中, sleep()
```
// test.c
#include <stdio.h>
#include <stdlib.h>
int main(){
  sleep(3000);
  printf('hello C');
  return 0;
}

```
