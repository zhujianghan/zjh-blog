+++
title = "Upgrade Nodejs by Yum on Centos"
date = 2023-06-20T09:51:24+08:00
tags = ['node', 'centos', 'yum']
draft = false
+++

## centos7.9 yum 升级 nodejs(14->16) 步骤

- 首先确定当前 nodejs 是由 yum 安装的
  ```
  $ yum list installed | grep nodejs
  # nodejs.x86_64                         2:12.22.12-1nodesource         @nodesource
  ```
- 删除当前 nodejs 版本 (https://github.com/nodesource/distributions)
    - yum remove nodejs
    - rm -r /etc/yum.repos.d/nodesource*.repo
    - yum clean all
- 添加 nodejs16 源
  ```
  $ curl -fsSL https://rpm.nodesource.com/setup_16.x | sudo bash -
  ```
- 安装 nodejs
  ```
  $ sudo yum install -y nodejs
  $ node -v
  $ npm -v
  ```