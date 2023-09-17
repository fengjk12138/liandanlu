---
# This is the title of the article
title: 容器分配方式
# This is the icon of the page
# icon: more
# This control sidebar order
order: 2
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


## **什么是容器**
---
一台机器的资源是有限的，比如CPU、GPU、内存、硬盘等；并且每个人的编程环境不同，权限冲突、版本冲突不断，因此我们需要一种技术来**隔离每个人的环境，控制每个人的资源**。

:::note 容器技术
容器技术一项伟大的发明，可以简单理解为虚拟机，在系统层面隔离每个人的使用环境，并且可以将容器打包、迁移、复制，实现每个人环境可以在不同计算机上的准确复现。详情可以了解`docker`、`liunxcontainer(lxc)`技术。
:::

### 容器技术的优点
 - 每个人都是自己容器的`root`，可以自由重启、配置环境、删除文件；
 - 容器可以完整的在不同服务器之间迁移，不会改变容器内已经配置好的环境和数据；
 - 不同人之间的资源隔离和环境隔离，互不影响。

## **我们服务器上的容器设置**
---
服务器的物理机一般有8张GPU，隔离了每个人的GPU。

每个服务器的硬件配置和分配方式见[分封图](/overview/gpu.md)。

为了避免资源抢占，每个人的容器只能访问一部分GPU。
为每个人分配的GPU中，会包含**独占卡**和**共享卡**。
:::info
独占卡只有你能访问到，不会有其他人占用，防止抢占；

共享卡是可以多人同时访问，可以提高显卡利用率，防止资源浪费。

每个人申请算力的时候可以根据自己的课题特点来申请资源，如确实需要长时间高频次占用显卡，那就申请多独占卡；自己使用的不太频繁，可以申请共享卡，共享卡的数量一般比较多。

不是自己访问内的卡，自己容器内不可见。**如果赶DDL，可以和服务器内其他用户协商，让管理员给你的容器增加可访问GPU。**
:::
<!-- - 整个容器中的系统只属于使用者本人，可以任意重启、任意配置环境、任意修改，不用担心影响他人；

- 容器内也有与他人公用的资源，比如GPU与NAS存储。NAS存储详见[详细文档](https://docs.heartbreaker.icu/GPUdocs/)，下文主要介绍GPU分配；
>`nas-public-linkdata`，`nas-public-tju`等目录为NAS目录，为方便用户使用而设立，具有极大的作用，详情了解[NAS文档](https://docs.heartbreaker.icu/NASdocs/user)。 -->

<!-- - 在容器名一般由`服务器名-人名`组成，比如`mars-huanghansheng`，在给管理员报告使用问题时，需要说清楚是哪台服务器的哪个容器出现问题，需要报告清楚`容器名`；

- 服务器上网与翻墙方式在不同地点有不同配置方式，见详细文档。 -->

<!-- ### **2. GPU分配原则**
由于物理机有8张GPU，同时分配给所有人会导致严重的抢占，因此我们使用容器进行资源控制，每个人的容器只能访问一部分GPU。 -->



![某台服务器的GPU分配示例](./img/GPU%E5%88%86%E9%85%8D.png){width=400}

GPU可以细分到单人，如在`黄汉升`的容器内`nvidia-smi`，只能看到4张显卡。

0号卡只有自己可以访问，其他人是看不见的，**永远不会被其他人占用**。
其余几张卡是共享卡，可以协商使用。

![8卡机器里，`nvidia-smi`只能看到4张显卡](./img/nvidia-smi.png){height=300}