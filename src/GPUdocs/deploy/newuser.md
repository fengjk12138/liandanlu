---
# This is the title of the article
title: 如何添加一个新的用户容器
# This is the icon of the page
icon: page
# This control sidebar order
order: 1
# Set author
author: fengjk
# Set writing time
date: 2023-06-23
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


## 一、 导入模板容器

- 将之前保存的压缩包导入到镜像中，并且别名称为`template`。
```shell
lxc image import /mnt/nas-resource-linkdata/容器镜像/template/****.tar.gz --alias template
```
- 初始化用户实例。生成一个名为mars-huanghansheng的容器
```shell
lxc launch template mars-huanghansheng
```

## 二、 用户容器配置


### 1. 密码修改
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

### 2. 配置文件修改、设备添加
- 配置静态ip。（**使用新的端口映射方法不用分配静态ip了，不过为了分配端口映射时方便记忆，还是分配静态ip较为妥当**）
```shell
lxc network attach lxdbr0 mars-huanghansheng eth0 eth0
lxc config device set mars-huanghansheng eth0 ipv4.address 172.16.4.1
```
`attach`的eth0可以不用写

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
  >注：5.15版本修复了GPU ID的问题，可使用id进行操作。此前部分版本需要使用pci参数才能正常识别数量。详见github相关[issue](https://github.com/lxc/lxd/issues/11442)。值得注意的是，在有核显（集显）的机器里，nvidia显卡是从1开始的，其他情况从0开始，可以使用`lxc info --resources`看显卡。

  ```yaml
    gpu3:
      id: 3
      type: gpu
    gpu4:
      id: 4
      type: gpu
  ```

- 添加端口映射设备
```shell
lxc config device add mars-huanghansheng proxy-ssh proxy listen=tcp:0.0.0.0:40xy0-40xy9 connect=tcp:127.0.0.1:22,40xy1-40xy9
```
如果修改配置文件，加入以下内容
```yaml
  proxy-ssh:
    type: proxy
    listen: tcp:0.0.0.0:40xy0-40xy9
    connect: tcp:127.0.0.1:22,40xy1-40xy9
```

:::tip
GPU分配原则可以见[其他文档](https://docs.heartbreaker.icu/GPUdocs/user/fast.html#gpu%E5%88%86%E9%85%8D%E5%8E%9F%E5%88%99)
:::
### 3. 给容器加入`CPU`,`内存`限制
根据机器的特性选择是否需要限制容器的CPU、内存：
```shell
lxc config set mars-huanghansheng limits.cpu=30
lxc config set mars-huanghansheng limits.memory=64Gib
```
限制每一个容器只能操作30个核心（线程），64GB内存

---
现在每个人的容器就创建完毕了