+++
title = "TCP/IP 模型"
date = 2022-09-09T11:12:46+08:00
tags = ["tcp/ip"]
draft = false
+++

## TCP/IP 模型分层
### DOD: The Department of Defense, 美国国防部模型
### OSI: Open Systems Interconnection, 国际标准化组织提供

| DOD四层模型 | OSI七层模型 |        备注        |
|:-------:|:-------:|:----------------:|
|   应用层   |   应用层   | http,smtp,ftp... |
|         |   表示层   |                  |
|         |   会话层   |                  |
|   传输层   |   传输层   |  tcp,udp...,端口   |
|   网络层   |   网络层   |      ip,arp      |
|  网络接口层  |  数据链路层  |     帧,mac地址      |
|         |   物理层   |       0,1        |

## Socket(套接字)
> Socket是BSD UNIX的进程通信机制，通常也称作”套接字”，用于描述IP地址和端口，是一个通信链的句柄。Socket可以理解为TCP/IP网络的API，它定义了许多函数或例程，程序员可以用它们来开发TCP/IP网络上的应用程序。电脑上运行的应用程序通常通过”套接字”向网络发出请求或者应答网络请求。


socket 抽象层, 是对 tcp/ip 的封装

## TCP...
## UDP...