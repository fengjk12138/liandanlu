---
# This is the title of the article
title: 炼丹炉系统整体设计蓝图
# This is the icon of the page
icon: list-ol
# This control sidebar order
order: 1
# Set author
author: fengjk

# Set writing time
date: 2023-06-14
# A page can have multiple categories
category:
  - overview
# A page can have multiple tags
tag:
  - 蓝图
  - 设计理念
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
本目录主要介绍一些设计理念与规划，以及综述文档

# 设计理念
设计重点为**存算分离**、**高密计算**、**容器管理**、**资源复用**。

:::info ToDo List
- [x] 网络端口映射改为新的形式
- [ ] 自动脚本来添加新的用户
- [ ] 监控面板安装
:::

:::tip Feature Request
- [x] 限制用户CPU、内存使用
- [ ] docker翻墙
- [ ] IPMI远程管理方式构建
- [ ] 显示每张卡都有哪些人在用
- [x] GPT4接入
- [ ] WandB本地化
- [ ] https引入
:::

::: note Docs Write
- [x] GPU服务器基础使用文档
- [x] 分封图构建
- [x] NAS文档重构
- [x] 网络连接视频录制、文档编写
:::

:::warning  BUG
- [x] Windows大文件进入WebDev有问题。  -> nextcloud方案可以解决，同时也可以方便文件的分享和网页查看，计划更改为nextcloud方式。 -> 已经使用alist方案进行构建了
- [x] 1080ti坏卡还没找出来 -> 散热问题
- [ ] lxd升级可能造成bug
:::