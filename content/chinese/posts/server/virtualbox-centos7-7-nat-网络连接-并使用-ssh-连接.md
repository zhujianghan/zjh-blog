+++
title = 'virtualbox-centos7-7-nat-网络连接-并使用-ssh-连接'
date = 2022-04-16T11:29:14+08:00
tags = ['linux']
draft = false
+++

1. virtual 添加 nat 网络
![图片.png](https://upload-images.jianshu.io/upload_images/4073481-89ce7bdca914502c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![图片.png](https://upload-images.jianshu.io/upload_images/4073481-a97db16bf796082c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2. 虚拟机配置 nat 网络
![图片.png](https://upload-images.jianshu.io/upload_images/4073481-4734a7c1a7665ff8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![图片.png](https://upload-images.jianshu.io/upload_images/4073481-544eff9d10ef9779.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

3. centos 系统文件修改
```
cd /etc/sysconfig/network-scripts/
// 查找 ifcfg-enp... 文件并修改其中的 onboot 为 yes
vi ifcfg-en0s3
// 修改后, 重启 network 服务, 并用 ping 或 curl 进行测试
service network restart
ping www.baidu.com
```
![图片.png](https://upload-images.jianshu.io/upload_images/4073481-2f40a652f3b310d2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![图片.png](https://upload-images.jianshu.io/upload_images/4073481-cf111bfeae0ff110.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![图片.png](https://upload-images.jianshu.io/upload_images/4073481-93743e2fd55974f5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

4. 虚拟机设置
![图片.png](https://upload-images.jianshu.io/upload_images/4073481-72a40ee35443b363.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

5. xshell 连接
ssh -p root@127.0.0.1 2222  
或  
文件-新建-连接....

