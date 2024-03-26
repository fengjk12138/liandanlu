---
index: false
title: GPU服务器文档
icon: computer
headerDepth: 2
---

## 〇、 神一样的工具们
### [0. 翻墙]

### [1. nextcloud网盘工具]


## 一、 GPU服务器使用文档
### [0. 快速入门的文档](user/fast.md)

### [1. 服务器上网、翻墙、国外资源加速](user/network.md)
加速你的`pip`，`git clone`等，畅游世界资源。

### [2. NAS使用技巧](user/nas.md)
- [NAS介绍]
- [基础使用方法]
- [建议]

### [3. 加速你的计算、减少程序瓶颈](user/acc.md)

## 二、 服务器容器配置 (管理员阅读)
### [1. 物理机环境配置](deploy/host.md)
### [2. 创建新用户容器](deploy/newuser.md)
### [3. 模板容器环境搭建、容器迁移](deploy/container.md)


## 三、 服务器物理机配置 (管理员阅读)
### [1. GPU服务器硬件配置]

### [2. GPU服务器部署文档]


## 三、 NAS文档包含以下内容

- [如何使用NAS？](user/README.md)
- [如何装配NAS？](deploy/README.md)
- [NAS如何进行日常维护？](maintain/README.md)

## ChangeLog
**2023/04/08** 整体 创建，网络桥接，引入路由器分配静态地址

**2023/06/23** deploy/host.md 修改， 原来的分配方式太消耗管理员精力，引入新的端口映射方式与桥接方式，更加方便统一配置，减少工作量