+++
title = 'git-clone-出错--RPC-failed'
date = 2022-04-16T11:29:14+08:00
tags = []
draft = false
+++

转载自: https://blog.csdn.net/qq_34121797/article/details/79561110


# 一、问题原因及现象

        在网络情况不稳定下克隆项目时，可能会出现如下错误：

        ![图片.png](https://upload-images.jianshu.io/upload_images/4073481-97a355f036ab54a1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


        出现此问题原因 http缓存不够或者网络不稳定等。
# 二、解决方案

 修改git配置：

 ## 1、查看当前配置命令

  git config -l

## 2、httpBuffer加大    

git config --global http.postBuffer 524288000

## 3、压缩配置

git config --global core.compression -1    

## 4、修改配置文件(可选)

export GIT_TRACE_PACKET=1

export GIT_TRACE=1

export GIT_CURL_VERBOSE=1
以上配置文件修改，也可以大幅度提升git 克隆速度
