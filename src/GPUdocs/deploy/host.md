---
# This is the title of the article
title: 如何配置新物理机系统
# This is the icon of the page
icon: page
# This control sidebar order
order: 1
# Set author
author: fengjk
# Set writing time
date: 2023-04-08
# A page can have multiple categories
category:
  - GPU服务器文档
# A page can have multiple tags
tag:
  - 服务器部署
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
## NEWS
2023/06/23修改， 引入新的端口映射方式与桥接方式，更加方便统一配置，减少工作量

## 安装系统


## 1. 系统安装过程 

使用U盘启动盘安装系统，一般选择最新版本Ubuntu系统安装

- 选择系统进行安装

- 设置硬盘模式，一般使用sata固态作为主系统盘。（至于其他盘，可以等装完系统之后使用zfs管理即可，不在这里处理）

- **一定要选择安装openssh**

- 命名计算机与用户名，一般按照统一的规则进行命名

- 取消更新，完成安装


## 2. 系统初始化


### 1.1 网桥配置
首先进行网络桥接，将所有的万兆网口桥接在一起，形成网桥`br0`，这样的话，网线插主机的任何网口都可以正常dhcp了

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
```

- **在路由器上配置静态IP**和端口映射
:::info
以后的端口映射（甚至dhcp）大概会使用容器内的软路由进行分配，不需要在登录路由器进行配置。//ToDo List
:::


### 1.2 驱动安装

安装英伟达显卡驱动程序
::: tip 
只安装驱动程序即可，无需安装`cuda`和`cudnn`。

因为在安装`pytorch`时，`torch`会自己安装编译好的包，所以不用主系统再安装`cuda`这些，省的破坏环境纯洁性。
:::

- 直接安装最新版nvidia显卡驱动，利用`apt`进行安装
```bash
sudo apt install nvidia-driver-525
```

- 重启电脑
```
sudo reboot
```

### 1.3 安装必要的软件

安装网络、性能监控、zfs、cifs等软件，方便以后的使用和监控

- 更新安装包
```bash
sudo apt update
```

- 安装软件 网络工具，cifs的smb共享工具，zfs工具，查看磁盘工具，查看网络工具，opencv的依赖库，压缩工具
```
sudo apt install net-tools cifs-utils zfsutils-linux iotop sysstat nload libgl1 zip unzip
```

- 关闭`apt`自动更新，防止驱动自动更新造成不兼容情况//ToDo List

### 1.4 在`/mnt`下挂载`NAS`

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
//10.10.0.2/public /mnt/nas-public-linkdata cifs username=****,password=****,dir_mode=0777,file_mode=0777,noperm 0 0
//10.10.0.2/resource /mnt/nas-resource-linkdata cifs username=****,password=****,dir_mode=0777,file_mode=0777,noperm 0 0
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

## 容器管理器初始化

## 1.5 初始化lxd
现在安装的`ubuntu22.04`的系统中，`lxd`都是默认安装的
所以可以直接运行

- 运行`lxd init`命令

```bash
clustering `
```


## 1.6 配置容器基础`profile`

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


## 新创建用户容器初始化

### 将模板镜像导入


- 之前模板镜像已经保存为文件，我们将文件导入即可
```bash
lxc image import /mnt/nas-resource-linkdata/容器镜像/template/****.tar.gz --alias template
```
- 导入之后我们使用这个镜像来初始化用户的容器
```bash
# 生成一个名为mars-huanghansheng的容器
lxc launch template mars-huanghansheng
```

### 用户容器基础配置

- 修改用户`root`密码

::: note
按照正规的编码方式将每个人的密码进行修改，并且需要是强密码，因为nas数据是直连容器的。

一般不会为了数据安全，每个人设置不同的密码。因为每个人容器的链接方式只有端口不同，如果一个人输错了端口，进入了其他人的容器可能造成严重后果。
:::

```bash
lxc exec mars-huanghansheng -- passwd root
新密码： ***
重复密码：***
```

- 配置静态ip
```shell
lxc network attach lxdbr0 mars-huanghansheng eth0 eth0
lxc config device set mars-huanghansheng eth0 ipv4.address 172.16.4.1
```
`attach`的eth0可以不用

修改个人配置文件

```bash
lxc config edit mars-huanghansheng
```

- 挂载每个人自己的NAS文件

  在`device`下增加如下配置
  ```yaml
  nas-public-linkdata:
    path: /root/nas-public-linkdata
    source: /mnt/nas-public-linkdata/huanghansheng
    type: disk
  ```
:::note
一般只给每个人分配自己的目录，不会直接挂载整个public目录给他，因为这样可以更方便操作自己的文件夹，也防止病毒入侵后误删其他人的文件
:::

- 为每个人分配GPU
  在`device`下增加如下配置，按照`pci`的数值进行分配即可，
  ```yaml
  gpu0:
    pci: 0000:05:00.0
    type: gpu
  gpu3:
    pci: 0000:88:00.0
    type: gpu
  gpu4:
    pci: 0000:89:00.0
    type: gpu
  ```
:::info
没办法使用`id`属性进行分配，这个应该是`lxd`的bug，在github提了相关[issue](https://github.com/lxc/lxd/issues/11442)，但是尚未解决。
:::

:::tip
GPU分配原则可以见其他文档//ToDo List
:::

- 为每个人增加端口映射与静态地址
按照规则编码方式，为每个容器设置静态地址与端口映射
:::tip
静态地址设置可以在路由器中绑定MAC地址即可

端口映射按照编码规则，在nginx容器中设置端口转发即可
:::



## 端口映射容器的开启

开启一个容器，安装运行nginx