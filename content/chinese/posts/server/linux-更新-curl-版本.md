+++
title = 'linux-更新-curl-版本'
date = 2021-03-09T15:59:07+08:00
tags = ['linux']
draft = false
+++



[转自: How to yum update curl 7.29 to 7.61 - CentOS 7.X](https://qiita.com/tkprof/items/5460b8d603cbbc542c8c)

```
# rpm -Uvh http://www.city-fan.org/ftp/contrib/yum-repo/city-fan.org-release-2-1.rhel7.noarch.rpm

# cat /etc/yum.repos.d/city-fan.org.repo
# 这里要保证 enabled = 1
[city-fan.org]
name=city-fan.org repository for Red Hat Enterprise Linux (and clones) $releasever ($basearch)
#baseurl=http://mirror.city-fan.org/ftp/contrib/yum-repo/rhel$releasever/$basearch
mirrorlist=http://mirror.city-fan.org/ftp/contrib/yum-repo/mirrorlist-rhel$releasever
enabled=1
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-city-fan.org
...

# yum info curl

# yum update curl
```

版本回退
```
# mkdir ~/temp && cd ~/temp

# wget http://mirror.centos.org/centos/7.5.1804/os/x86_64/Packages/curl-7.29.0-46.el7.x86_64.rpm
# wget http://mirror.centos.org/centos/7.5.1804/os/x86_64/Packages/libcurl-7.29.0-46.el7.x86_64.rpm
# wget http://mirror.centos.org/centos/7.5.1804/os/x86_64/Packages/libcurl-devel-7.29.0-46.el7.x86_64.rpm

# rpm -Uvh --oldpackage *.rpm
```
