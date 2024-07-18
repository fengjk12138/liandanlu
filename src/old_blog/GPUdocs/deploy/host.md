---
# This is the title of the article
title: 如何配置新物理机系统
# This is the icon of the page
icon: computer
# This control sidebar order
order: 1
# Set author
author: fengjk
# Set writing time
date: 2023-04-08
# A page can have multiple categories
category:
  - 管理员文档
# A page can have multiple tags
tag:
  - 服务器部署
  - 宿主机
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
# You can customize footer content
footer: Footer content for test
# You can customize copyright content
copyright: No Copyright
---


## 一、 安装系统


## 1. 系统安装过程 

使用U盘启动盘安装系统，一般选择最新版本Ubuntu系统安装

- 选择系统进行安装

- 设置硬盘模式，一般使用sata固态作为主系统盘。（至于其他盘，可以等装完系统之后使用zfs管理即可，不在这里处理）

- **一定要选择安装openssh**

- 命名计算机与用户名，一般按照统一的规则进行命名

- 取消更新，完成安装


## 2. 系统初始化


### 2.1 主机网络配置
<!-- 首先进行网络桥接，将所有的万兆网口桥接在一起，形成网桥`br0`，这样的话，网线插主机的任何网口都可以正常dhcp了

同时网络桥接可以让lxd的容器也与主机共享网桥，从而完成网络互联互通

一般在路由器上设置静态ip，不在主机上设置静态地址，这样可以让主机在其他网络情况下也能正常上网（当然也可以改，做好记录就行） 


- 进入`/etc/netplan`  
```bash
cd /etc/netplan
```

- 修改配置文件为桥接模式，一般命名网桥为`br0`；

代码含义为：取消所有接口的dhcp功能，之后


```yaml
# 修改后如下
# This is the network config written by 'subiquity'
network:
ethernets:
    enp129s0f0:
    dhcp4: false
    enp129s0f1:
    dhcp4: false
    enp5s0f0:
    dhcp4: false
    enp5s0f1:
    dhcp4: false
bridges:
    br0:
    dhcp4: true
    dhcp6: true
    interfaces:
        - enp129s0f0
        - enp129s0f1
        - enp5s0f0
        - enp5s0f1
version: 2
```

- 应用修稿好的配置文件
```bash
sudo netplan apply
``` -->


- **在路由器上给主机设置静态IP**和端口映射

  - 登入路由器后台，按照mac地址分配静态ip。**请按照规则编码设置**，防止IP冲突或者找不到机器
  - 在路由器上设置这台机器的**端口转发**，一般将100个端口转发给一个机器，比如
  ```
  40x00,40x10-40x99  →  22,40x10-40x99
  ```
  其中`40x00`端口用于物理主机的ssh链接，其余的端口均给主机内的容器使用。

  - 主机重新获取IP
  ```shell
  sudo dhclient eno1
  ```
### 2.2 驱动安装

安装英伟达显卡驱动程序
::: tip 
只安装驱动程序即可，无需安装`cuda`和`cudnn`。

因为在安装`pytorch`时，`torch`会自己安装编译好的包，所以不用主系统再安装`cuda`这些，省的破坏环境纯洁性。
:::

- 直接安装最新版nvidia显卡驱动，利用`apt`进行安装
```bash
sudo apt update -o Acquire::http::proxy=$HTTPS_PROXY
sudo apt install nvidia-driver-525 -o Acquire::http::proxy=$HTTPS_PROXY
```

- 重启电脑
```
sudo reboot
```

### 2.3 安装必要的软件

安装网络、性能监控、zfs、cifs等软件，方便以后的使用和监控

- 更新安装包
```bash
sudo apt update
```

- 安装软件 网络工具，cifs的smb共享工具，zfs工具，查看磁盘工具，查看网络工具，opencv的依赖库，压缩工具
```bash
sudo apt install net-tools cifs-utils zfsutils-linux iotop sysstat nload libgl1 zip unzip nfs-common python3-pip -o Acquire::http::proxy=$HTTPS_PROXY
``` 

- 关闭`apt`自动更新，防止驱动自动更新造成不兼容情况//ToDo List

### 2.4 在`/mnt`下挂载`NAS`

- 在`/mnt`下创建`NAS`文件夹
```bash
cd /mnt
sudo mkdir nas-public-linkdata nas-resource-linkdata
```

- 在`/etc/fstab`文件中写入开机自动挂载选项
```bash
sudo vim /etc/fstab
```

在文件中加入最后两行，表示nas的开机自动挂载

```yaml
#//10.10.0.2/public /mnt/nas-public-linkdata cifs username=****,password=****,dir_mode=0777,file_mode=0777,noperm,vers=3.0 0 0
#//10.10.0.2/resource /mnt/nas-resource-linkdata cifs username=****,password=****,dir_mode=0777,file_mode=0777,noperm,vers=3.0 0 0
#校内nas
# 192.168.0.2:/mnt/tjupool/public /mnt/nas-public-tju nfs defaults 0 0
# 192.168.0.2:/mnt/tjupool/resource /mnt/nas-resource-tju nfs defaults 0 0
# 链数nas
10.10.0.2:/mnt/labpool/public /mnt/nas-public-linkdata nfs defaults 0 0
10.10.0.2:/mnt/labpool/resource /mnt/nas-resource-linkdata nfs defaults 0 0
```

::: note
第一项表示nas的网络路径，第二项表示挂载点，第三项表示挂载协议为cifs也就是smb协议，

第四项表示一些选项，其中需要用户名和密码，在线文档隐去账密，**其中dir_mode和file_mode为0777表示设置目录权限，后面打算把resource权限设置为只读；noperm表示不做权限检查，因为有些程序会自动创建其他权限的文件（比如unzip解压），但是NAS又会保存成777权限，所以程序会报错，而这个选项用于跳过检查。**//ToDo

最后两项默认为`0 0`即可
:::


- 重新加载`/etc/fstab`文件
```bash
sudo mount -a
```

## 二、 容器管理器初始化

## 1. 初始化lxd
现在安装的`ubuntu22.04`的系统中，`lxd`已经默认安装，所以可以直接运行，不过为了使用新特性方便，请升级到最新版本

- 升级`lxd`
```shell
sudo snap refresh lxd --channel=latest
```

- 运行初始化命令
  - 后端选用`zfs`，尽量使用一个独立的磁盘
  - 网桥选择创建新的网桥`lxdbr0`
  - 网桥的IPV4使用`172.16.0.1/16`
```bash
lxd init
```

## 2. 配置容器基础`profile`

### 2.1 配置固定的权限和显卡驱动

`profile`属于公共配置，在这里可以给本机内的所有容器配置完成

- 修改`profile`

```bash
lxc profile edit default
```

在`config`的中增加如下内容：

分别表示自动开启，传递英伟达驱动，允许容器嵌套

自动开启是为了在宿主机重启后，每个容器可以开机自启

传递驱动是为了在容器内可以调用显卡

允许容器嵌套是为了允许其他人可以在容器内使用`docker`的容器
```yaml
  boot.autostart: "true"
  nvidia.runtime: "true"
  security.nesting: "true"
```

::: danger 高危操作
一般不给容器开启`特权容器`选项，特权会导致容器可以修改系统内核配置，可能导致宿主机崩溃。
:::

### 2.2 为容器挂载NAS目录

- 将`nas-resource-linkdata`等文件夹挂载进入容器内
  在`profile`的`device`下增加如下配置即可
  ```yaml
    mnt-resource:
      path: /root/nas-resource-linkdata
      source: /mnt/nas-resource-linkdata
      type: disk
    mnt-public:
      path: /mnt/nas-public-linkdata
      source: /mnt/nas-public-linkdata
      type: disk
  ```

## 3. 添加网络forward端口转发 （**目前不需要了，已经使用proxy设备代替**）
:::details
- 创造监听网络，监听本地IP，*不能使用0.0.0.0*作为ip
```shell
lxc network forward create lxdbr0 10.10.1.1
```

- 创建端口映射。替换里面的ip地址为合适的地址即可。**也可以在添加容器时添加端口映射，不在这里添加。**
```shell
lxc network forward port add lxdbr0 10.10.1.1 tcp 20010-20019 172.16.1.1 22,20011-20019
```
这个命令的含义是，将20010转发给`172.16.1.1`的22端口；将20011-20019转发给`172.16.1.1`的20011-20019端口
:::

## 三、 注意事项
:::danger
管理员请仔细阅读，不然会造成严重事故或数据丢失。
:::

- **物理主机**内不要用`docker`，引起`docker`创建的网桥`docker0`影响网络数据传输给lxd容器。会造成容器断网。
详见[lxd官方文档](https://linuxcontainers.org/lxd/docs/latest/howto/network_bridge_firewalld/#prevent-connectivity-issues-with-lxd-and-docker)。

  **容器内可以使用docker**，如果需要使用docker请在lxd容器内使用。