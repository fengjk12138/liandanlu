---
# This is the title of the article
title: 如何配置模板容器、迁移用户容器
# This is the icon of the page
icon: truck-moving
# This control sidebar order
order: 1
# Set author
author: fengjk
# Set writing time
date: 2023-04-09
# A page can have multiple categories
category:
  - 管理员文档
# A page can have multiple tags
tag:
  - 服务器部署
  - 容器
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
# You can customize footer content
footer: Footer content for test
# You can customize copyright content
copyright: No Copyright
---

## 一、 构建模板容器

## 1. 初始化一个系统容器实例

- 开启一个系统模板容器，选择`ubuntu`作为镜像源，因为这里的镜像中的系统比较齐全，`images`中的镜像缺少很多库

```bash
lxc launch ubuntu:22.04 template
```

## 2. 容器安装必要的软件

与宿主机相同，模板容器内也安装相应的必要软件
```bash
lxc exec template -- apt install net-tools cifs-utils zfsutils-linux iotop sysstat nload libgl1 zip unzip
```

## 3. 容器的root密码登录配置

因为容器内一般使用root用户，我们需要开启root的ssh密码登录选项

- 修改`sshd`的配置文件`sshd_config`
```bash
lxc exec template -- vim /etc/ssh/sshd_config
```
修改其中的两个选项为`yes`
```
PermitRootLogin yes
PasswordAuthentication yes
```

- 重启`sshd`服务

```bash
lxc exec template -- service ssh restart
```




## 5. 设置模板时区为东八区

为了容器内的时间正常，我们需要设置机器的时区

```bash
lxc exec template bash -- timedatectl set-timezone Asia/Shanghai
```

## 6. 设置用户的基本terminal的色彩显示

镜像容器的root用户的terminal是没有颜色的，其他用户如ubuntu都有颜色，我们修改`.bashrc`来让颜色回复，方便操作。

```bash
vim .bashrc
```

将下面这段

```
# set a fancy prompt (non-color, unless we know we "want" color)
case "$TERM" in
    xterm-color) color_prompt=yes;;
esac
```

修改为

```
# set a fancy prompt (non-color, unless we know we "want" color)
case "$TERM" in
    xterm-color|*-256color) color_prompt=yes;;
esac
```

## 4. 导出模板容器为镜像文件
我们需要把我们的镜像导出为模板，这样在其他机器上直接使用模板文件创建新的镜像即可，不需要每次都重新设置

- 发布实例为镜像
```bash
# 将实例template发布为镜像
# 为了之后寻找方便，将镜像起名为template
# 否则之后只能通过指纹（一串MD5数字）来寻找镜像了
lxc publish template --alias template
```

- 将实例导出为压缩包文件
```bash
# 创建一个文件夹保存之后的压缩包文件
# 然后导出的文件就会保存在文件夹下面
mkdir template
lxc image export template ./template/
```


- 之后可以将模板容器复制到nas中，保存起来，方便其他机器使用


## 二、 迁移用户容器

## 1. 打包源服务器容器

- 关停需要迁移的用户的容器
```shell
lxc stop mars-huanghansheng
```

- 将容器打包成镜像
```shell
lxc publish mars-huanghansheng --alias mars-huanghansheng
```

- 导出镜像为压缩文件
```shell
mkdir huanghansheng
lxc image export mars-huanghansheng ./huanghansheng/
```

- 拷贝镜像进入nas中

## 2. 在新服务器中创建镜像

- 将压缩包导入为镜像
```shell
lxc image import /mnt/nas-resource-linkdata/容器镜像/huanghansheng/****.tar.gz --alias huanghansheng
```

- 创建新的容器实例
```shell
lxc launch huanghansheng vulcan-huanghansheng
```

- 后面就是设备设置之类的工作，参考
**[创建新的用户容器](./newuser.md)**


