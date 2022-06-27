+++
title = 'git-修改本地及远程分支的名称'
date = 2019-05-07T14:50:14+08:00
tags = []
draft = false
+++

[原文地址](https://www.cnblogs.com/wangzhichao/p/git.html)

```
git branch -m old_branch new_branch # Rename branch locally 
git push origin :old_branch # Delete the old branch 
git push --set-upstream origin new_branch # Push the new branch, set local branch to track the new remote

// 第三步不在推送时关联远程分支, 可改为如下
git branch --set-upstream-to origin/master
git branch -u origin/new_branch
```
