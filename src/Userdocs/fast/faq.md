---
# This is the title of the article
title: FAQ
# This is the icon of the page
icon: question
# This control sidebar order
order: 1
# Set author
author: fengjk
# Set writing time
date: 2023-08-31
# A page can have multiple categories
category:
  - GPU服务器文档
# A page can have multiple tags
tag:
  - 使用技巧
  - 快速开始
  - GPU服务器
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
# You can customize footer content
footer: Footer content for test
# You can customize copyright content
copyright: No Copyright
---

## **FAQ**

### 1. 容器内如何挂载其他NFS、SMB等共享？
>容器内没有`mount`指令的权限，请联系服务器管理员进行挂载，将路径映射进容器内。

### 2. 如何在容器内挂载ISO镜像文件？
>使用`fuseiso`命令挂载iso，在容器内无法使用`mount`指令。


### 3. GPU服务器无法多卡并行（DP、DDP），是什么原因？
>应该是服务器BIOS设置的原因，在多卡通信时，在`torch.distributed.barrier()`操作上hang了

>目前解决方案：设置环境变量`NCCL_P2P_LEVEL=NVL`，
比如原来是运行脚本的命令是`python main.py` 现在就是`NCCL_P2P_LEVEL=NVL python main.py`

### 4. 设置代理后，`pip`报错`ERROR: Could not install packages due to an OSError: Missing depencies for SOCKS support.`
如果你的python环境缺少`pysocks`包，就会报错，尤其是使用conda开了一个新的虚拟环境时，缺少很多依赖。

安装我们下载好的`pysocks`包:
```bash
#如果你使用pip3，那就换成 pip3 install
pip install ~/nas-resource-linkdata/常用软件/whl/PySocks-1.7.1-py3-none-any.whl
```

### 5. 能否在容器内使用`docker`?
可以使用`docker`，容器是可以嵌套的。但是由于管理员使用的容器管理系统的一些原因，里面只能使用普通的docker，无法使用gpu docker。
