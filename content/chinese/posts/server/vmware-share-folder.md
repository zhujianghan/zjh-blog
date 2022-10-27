+++
title = 'vmware-共享文件夹设置'
date = 2022-10-27T10:01:10+08:00
tags = ['vmware','linux']
draft = false
+++

1. 虚拟机关机状态下, vmware中 设置-选项-共享文件夹 添加要共享的文件夹
2. 虚拟机开机, vmware中 虚拟机-安装VMware-Tools
3. 虚拟机中安装 open-vm-tools-desktop (has gui) 或 open-vm-tools (no gui)
4. 虚拟机中执行 `/usr/bin/vmhgfs-fuse .host:/ /home/user1/shares -o subtype=vmhgfs-fuse,allow_other` 挂载共享文件夹, ubuntu 提示 allow_user 需要其它设置, 则删除 ',allow_other' 即可


> open-vm-tools [安装参考官方文档](https://docs.vmware.com/en/VMware-Tools/12.1.0/com.vmware.vsphere.vmwaretools.doc/GUID-C48E1F14-240D-4DD1-8D4C-25B6EBE4BB0F.html)  

> 文件夹挂载 [参考文档](https://docs.vmware.com/en/VMware-Workstation-Pro/16.0/com.vmware.ws.using.doc/GUID-AB5C80FE-9B8A-4899-8186-3DB8201B1758.html)

> [参考csdn: vmware 挂载共享文件夹](https://blog.csdn.net/qq_30309813/article/details/79830356)
