+++
title = 'git-创建远程分支---从远程分支拉取本地不存在的分支'
date = 2022-04-16T11:29:14+08:00
tags = []
draft = false
+++

[原文](https://blog.csdn.net/u012701023/article/details/79222731)   

## 新建远程分支
```
git push origin remote_branch_name:local_branch_name
// remote_branch_name 是远程分支的名字
// local_branch_name 是本地分支的名字

git branch -a // 查看所有分支(远程+本地)
```

## 删除远程分支  
```
git push origin :remote_branch_name

// 或
git push origin --delete remote_branch_name

```


[原文](https://www.cnblogs.com/hamsterPP/p/6810831.html) 
```
git fetch

git checkout -b local_branch_name origin/remote_branch_name
```

