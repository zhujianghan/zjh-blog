---
title: '一台机器内ssh连接两个github账号'
date: 2022-06-30T15:11:30+08:00
tags: ['ssh', 'github']
draft: false
---

## 问题: 如何在一台机器连接两个github账号

### step1 生成两个 id_rsa 文件
一台机器使用 ssh 连接到 github 需要用到本地的 id_rsa.pub 文件, 一般在 /users/.ssh 文件夹内, 如果没有 id_rsa 文件, 则使用如下命令生成, 然后把这个 key 复制到 github 中
```shell
ssh-keygen -t ed25519 -C "your_email@example.com"
```
如果直接把 ssh key 复制到另一个 github 账号, 会提示 key 已被使用, 那么需要另外再生成一个 key, 使用 -f 命令指定生成的文件名
```shell
ssh-keygen -t ed25519 -C "your_email@example.com" -f "id_rsa2"
```

### step2 配置 github 使用不同的 id_rsa
在 .ssh 文件夹内新建 config 文件
```
# 该文件用于配置私钥对应的服务器

# Default github user(first@mail.com)  
Host github.com  
HostName github.com 
User git  
IdentityFile C:\Users\xx\.ssh\id_rsa

# 建一个zhj.github.com的别名，个人仓库帐号使用这个别名做克隆和更新  
Host zjh.github.com  
HostName github.com  
User git  
IdentityFile C:\Users\xx\.ssh\id_ras2
```
第二个连接 github 时, 使用 **git remote add git@zjh.github.com:xxxxxx/test.git**

## 参考
[github: generate ssh key](https://docs.github.com/cn/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
[简书: 多个Github账号如何配置SSH Key](https://www.jianshu.com/p/e50aeb57ea57)
