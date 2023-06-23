---
# This is the title of the article
title: 如何使用GPU服务器
# This is the icon of the page
icon: page
# This control sidebar order
order: 1
# Set author
author: fengjk
# Set writing time
date: 2023-06-14
# A page can have multiple categories
category:
  - GPU服务器文档
# A page can have multiple tags
tag:
  - 使用技巧
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


欢迎使用**liandanlu（炼丹炉）系统**，炼丹炉系统作为实验室GPU管理的新模式，利用Linux容器技术实现每个用户的环境与资源隔离，同时控制每个容器可以访问到的GPU、磁盘、CPU等资源，减少竞争，增加资源利用率。

同时以8卡GPU服务器作为主机，NAS作为存储设备，实现高密度、高可用的GPU设备利用。
>NAS：磁盘存储系统，一个拥有很大存储空间的磁盘阵列；在目前的上机框架里，**存算分离**，这样就可以方便在不同计算设备之间迁移环境和数据。

## 前言

你还在账号没有sudo权限而苦恼吗？ 你还在为GPU资源抢占而焦躁吗？ 你还在为存储空间不足、CPU爆满而哭泣吗？

容器化的炼丹炉系统可以解决以上问题。

::: info ToDo list
- [ ] GPU使用率实时网页显示
- [x] GPU分配到人
- [x] 实现容器环境无缝迁移
- [ ] 文档整合
- [x] 服务器翻墙
- [ ] GPU中进程号显示
- [ ] 迁移、创建脚本  
:::


## 一、 服务器GPU配置分配说明

一台主机一般拥有8个GPU，但是不会同时给每个人都赋予8个GPU的调用权限。（防止抢占）

一般分配原则为：

**先保证每个人拥有1、2个独占的GPU来防止资源抢占；其次在为每个人分配共享GPU提高资源利用率。**

**对于GPU使用频次不高的情况，可以只分配共享GPU；对于特殊任务等长时间占用GPU的情况，可以只分配独占GPU。**

