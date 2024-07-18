---
# This is the title of the article
title: NAS使用(服务器向)
# This is the icon of the page
icon: page
# This control sidebar order
order: 1
# Set author
author: fengjk
# Set writing time
date: 2023-06-18
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

## 前言
我们的集群的整体设计理念是**存算分离，数据共享**。因此使用NAS作为核心存储设备，GPU服务器只是作为计算使用。

使用NAS存储技术可以增加每个人的存储空间、同步多机之间的数据、降低存储成本、降低坏盘风险。
:::info NAS存储设计理念
存储设备和计算设备（GPU）分离，不在同一台机器上。NAS的空间很大（至少20T以上）。
在GPU服务器上的体现就是一个目录而已，和其他目录的使用没有任何区别。
:::


## 一、 GPU服务器上的使用方式
在你的容器内使用命令`df -h`可以看到容器的存储挂载分布。

![`df -h`命令可以看见NAS挂载的位置和容器整体存储分布](./img/df-h.png)

NAS在GPU服务器上的体现就是一个目录（容器内的`/root/nas-public-linkdata`）目录就是NAS，把文件放入这个目录，那么文件就进入了NAS存储，这个目录可以和其他目录一样完成所有正常的操作。
**可以直接将日志、代码、数据集写入NAS**，即安全也不用担心空间不足问题。

---

**NAS目录的命名方式为：`nas-文件类型-服务器位置`。下文的路径表述将以linkdata的nas为示例。**


- 文件类型目前拥有`public`，`resource`，`private`; 
  - `public`表示公开文件：所有人都有权限访问，用的最多的文件夹，存放自己的代码啥的；
  - `resource`表示资源文件，比如软件安装包、电影电视、数据集等，所有人都能访问；
  - `private`表示私有文件夹，自己爱存什么存什么，只有自己拥有访问权限。

- 服务器位置目前有`linkdata`和`tju`，自己按照自己的GPU服务器的所在位置使用目录，尽量不要跨地区访问。

### 1. 使用建议

::: tip 在GPU服务器上的使用建议
- 定期将自己的文件移动到NAS内，减少在其他目录上的数据量。

    这样做可以减少自己的容器大小，在进行容器迁移时会方便，也防止GPU存储空间爆满。

- 大的数据集放入`/root/nas-resource-linkdata`目录。 从Windows内下载完数据集拖入NAS内，同样减少GPU机器的存储压力。

- 日志与checkpoint定期备份进入NAS。 

    NAS具有磁盘冗余设置，在一定量磁盘损坏的情况下，也可以保证数据不丢失，GPU内的磁盘则没有冗余，保护自己的重要数据，防止延毕。
    :::warning
    NAS具有文件恢复功能，NAS可以将整个文件、文件夹回滚到24h前（甚至一个月前）。如果误删了重要数据，请找管理员进行数据恢复。
    :::
:::

### 2. NAS目录在容器内的位置

以`mars-huanghansheng`容器为例，拥有3个目录与NAS关联：
- `/root/nas-public-linkdata`:  对应NAS的`public/huanghansheng`目录，在`public/`有各个人的目录，为了防止误删，因此这里的挂载直接对应了自己名字的目录，需要找其他人名字的目录，可以在`/mnt`下找，参考第三条。
- `/root/nas-resource-linkdata`: 对应NAS的`resource`目录
- `/mnt/nas-public-linkdata`:对应NAS的`public/`目录

## 二、 本地Windows上的使用方式

NAS的更厉害之处在于可以使用Windows链接，跟云盘一样，上传、下载、分享文件，不过这个系统不需要会员、不限速。

- Windows挂载链数NAS

- Windows挂载天大内NAS（仅限校园网）