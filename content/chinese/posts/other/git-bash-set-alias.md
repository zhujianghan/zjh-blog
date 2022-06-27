+++
title = 'git-bash-set-alias'
date = 2019-02-25T15:08:11+08:00
tags = []
draft = false
+++

原文见: https://www.jianshu.com/p/35d23e0e121b


基本使用：
alias com="git checkout master"

此时关闭终端窗口之后，再试该命令你就会发现这个命令不存在了，原因是没有永久保存，可以使用如下方法：
# 确认文件在不在
$ ls ~/.bash_profile

如果不在就创建一个：
 vi ~/.bash_profile

# 写入
alias la="ls -al"

永久保存
source ~/.bash_profile
alias

#会看见
alias la='ls -al'

#卸载使用
unalias xxx

source ~/.bash_profile
