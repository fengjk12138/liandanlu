---
# This is the title of the article
title: GPU分封图
# This is the icon of the page
icon: computer
# This control sidebar order
order: 1
# Set author
author: fengjk

# Set writing time
date: 2023-06-30
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

### linkdata位置服务器
::: tabs#linkdata
@tab 存储

**机器**：RH2288H-V3

**显卡**：NVIDIA GTX 1050Ti 4G

**CPU**：Intel Xeon E5-2643v4 * 2 共 12核24线程

**内存**：128G

**硬盘**：
- labpool： 16T 机械硬盘 * 6 Raid-z2
- visdrone：8T 机械硬盘 * 6 Raid-z2
- 系统盘：512G 三星sata + 120G 金士顿sata Raid1
- 缓存盘：1T NVME读缓存L2

**网段**：10.10.0.2

@tab mercury

**显卡**：NVIDIA GTX 1080ti 11G * 8

**CPU**：Intel Xeon E5-2690v4 * 2 共 28核56线程

**内存**：128G

**硬盘**：1T sata系统盘, 2T NVME容器盘

**网段**：10.10.1.1

**个人容器限制**：未限制

@tab venus      
**显卡**：NVIDIA TITAN Xp 12G * 8

**CPU**：Intel Xeon E5-2680v4 * 2 共 28核56线程

**内存**：128G

**硬盘**：1T sata系统盘, 2T NVME容器盘

**网段**：10.10.2.1

**个人容器限制**：CPU：每容器 **30线程**

@tab earth
**显卡**：NVIDIA RTX A6000 48G * 8

**CPU**：Intel Xeon Platinum 8255C * 2 共 48核96线程

**内存**：512G

**硬盘**：
- 系统盘：480 sata系统盘 * 2 Raid0
- 容器盘： 960G 机械容器盘 * 2 Raid0
- tank池：4T NVME资料盘 * 4 Raid0
- 未使用：2T NVME盘

**网段**：10.10.3.1

**个人容器限制**：未限制

@tab mars  
**显卡**：NVIDIA RTX 2080ti 22G * 7

**CPU**：Intel Xeon E5-2690v4 * 2 共 28核56线程

**内存**：192G

**硬盘**：1T sata系统盘, 2T NVME容器盘 * 2

**网段**：10.10.4.1

**个人容器限制**：未限制

@tab pluto
**显卡**：NVIDIA RTX 3090 24G * 8

**CPU**：Intel Xeon Gold 5218 * 2 共 32核64线程

**内存**：256G

**硬盘**：1T sata系统盘, 4T sata容器盘

**网段**：10.10.9.1

**个人容器限制**：CPU：亚茹 **30线程**

@tab charon

**显卡**：NVIDIA RTX 3090 24G * 8

**CPU**：Intel Xeon Gold 5218 * 2 共 32核64线程

**内存**：256G

**硬盘**：1T sata系统盘, 4T sata容器盘

**网段**：10.10.10.1

@tab 零散显卡

范博

**显卡**： NVIDIA RTX 3090 24G * 3

**网段**：无

vulcan

**显卡**：实验室零碎显卡

**网段**：10.10.99.1

api-server

**显卡**： NVIDIA GTX 1080ti 11G * 3

@tab labelme标注机

**CPU**：Intel Xeon E5-2673 v3 * 2 共 24核48线程

**内存**：128G

**显卡**：无显卡

**网段**：10.10.5.1

**硬盘**： 
- 系统盘： 1T sata系统盘
- highspeed池：2T NVME固态硬盘 * 2， Raid0
- tank池：8T 机械硬盘， 4T机械硬盘 * 2， Raid0
:::


### tju位置服务器

::: tabs#tju
@tab 存储 
**服务器**：浪潮SA5212M4

**CPU**：

**内存**：128G

**硬盘**：
- tjupool：14T SAS机械盘 * 6 Raid-z2
- 系统盘：128G金士顿 + 120G梵想 Raid1
- 缓存盘：2T NVME读缓存L2

@tab Alpha
**显卡**：NVIDIA RTX 3090 24G * 8

**CPU**：Intel Xeon Platinum 8249C * 2 共 52核104线程

**内存**：384G

**硬盘**：1T sata系统盘，4T NVME容器盘

**网段**：192.168.1.1
@tab Beta
**显卡**：NVIDIA RTX 3090 24G * 8

**CPU**：Intel Xeon Platinum 8255C * 2 共 48核96线程

**内存**：384G

**硬盘**：1T sata系统盘，4T NVME容器盘

**网段**：192.168.2.1

@tab Gamma
**显卡**：NVIDIA RTX 2080ti 22G * 8

**CPU**：Intel Xeon E5-2673v4 * 2 共 40核80线程

**内存**：240G (32G * 7 + 16G * 1)

**硬盘**：1T sata系统盘, 4T SATA固态容器盘

**网段**：192.168.3.1

**个人容器限制**：未限制
<!-- @tab Africa (no-budget)
**显卡**：NVIDIA RTX 3080 20G * 8

**CPU**：Intel Xeon Silver 4210R * 2 共 20核40线程

**内存**：192G

**硬盘**：1T sata系统盘, 2T NVME容器盘

**网段**：

**个人容器限制**：未限制 -->
@tab stark

**显卡**：NVIDIA RTX 3090 24G * 4

**CPU**：Intel Xeon E5-2673 v3 * 2 共 24核48线程

**内存**：256G

**硬盘**：1T sata系统盘，4T sata容器盘

**网段**：192.168.99.1


:::