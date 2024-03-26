---
# This is the title of the article
title: NAS是什么
# This is the icon of the page
# icon: page
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
  - NAS存储
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
:::tip 前言
我们的集群的整体设计理念是**存算分离，数据共享**。因此使用NAS作为核心存储设备，GPU服务器只是作为计算使用。

NAS拥有**更方便使用体验、 更大的存储空间、更高的安全等级**。
:::

---
## **NAS的概念**
nas就是网络附加存储。

一个单独的存储服务器，使用网线连接在GPU服务器上，GPU服务器通过网络协议可以访问、修改存储服务器上的数据。
>甚至简单的说，就是一个大U盘，这个U盘可以多台机器、多人同时访问。

**NAS服务器在GPU服务器上的形式，就是一个目录**，向这个目录内写入文件，这个文件就在NAS内了；访问**这个目录，就是访问NAS的数据。**

在你的容器内使用命令`df -h`命令可以看到nas目录的位置。

![`df -h`命令可以看见NAS挂载的位置和容器整体存储分布](./img/df-h.png)

::: info 我们nas的配置
目前拥有存储空间 56T（后续可扩展），磁盘双冗余（坏两个磁盘数据都不会丢）。

数据每24小时备份一次；如果误删数据，可以回退到24小时之前的版本来恢复数据。
:::
---
## **NAS能做的事**

nas将所有数据集中存放在一起，可以减少存储成本、跨机通信代价。方便用户使用数据。

下面将列举nas的一些功能，详细可以查看后续文档：

- [x] **扩大存储空间**，nas存储空间巨大，如果你有一个10T的数据集，可以直接放入nas即可，然后在GPU服务器上进行读写、运算。
- [x] **多人共享**，如果你需要读写其他人的数据，可以直接在nas目录中寻找，不需要进行网络传递。
- [x] **跨机器同步**，如果你在多台GPU服务器上有账号，那么nas的数据在这几台机器上是互通的，数据显示相同，**不需要存多份数据集和多份代码了**；不必来回传递数据，只需在nas上维护一份代码即可。
- [x] **跨平台访问**，目前nas支持linux挂载、windows挂载、手机端挂载，可以随时随地查看日志。
- [x] **文件分享**，可以创建类似百度云的分享，可以将你的数据共享给其他人。
- [ ]
一些使用示例，可以查看[功能展示](./show.md)章节。

:::note
目前实验室拥有两个nas，一个位于链数，一个位于校内，分别服务于各自位置的服务器。
:::