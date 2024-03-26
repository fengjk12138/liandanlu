---
# This is the title of the article
title: 安装计算环境
# This is the icon of the page
icon: bug
# This control sidebar order
order: 1
# Set author
author: fengjk
# Set writing time
date: 2023-09-04
# A page can have multiple categories
category:
  - GPU服务器文档
# A page can have multiple tags
tag:
  - 使用技巧
  - 网络
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
本节将介绍如何配置conda环境和pytorch环境。包含如何进行国外资源加速。

更多的内容在网络篇，这里只是很简单的讲解。

:::note
链数可以使用代理的方法来加速外国资源，校内机器就必须使用代理才能上网。

在校内情况下，记得把代理地址中的`linkdata`换成`tju`。
:::


## Anaconda安装
- 如果你不挑剔版本，可以使用使用NAS中下载好的Anaconda
  ```bash
  #在这个文件夹下下载了几个版本的Anaconda，可以自己选择安装
  cd ~/nas-resource-linkdata/常用软件/anaconda
  bash Anaconda3-2023.03-Linux-x86_64.sh
  ```

- 如果你需要特定版本，那么自己去网上下载，然后上传到服务器，之后安装。
  >如果下载速度过慢，可以使用**向日葵下载机**下载，上面有开梯子。
  
- ==安装完Anaconda后，请重新开一个terminal，以启动你的conda`base`环境。==
否则你会发现pip指令not found。

## PyTorch安装
:::note
现在pytorch已经不需要单独安装cuda、cudnn等库就可以完美运行了，直接复制官网命令即可。

本方法也可以加速`pip`，`conda`，`wget`，`wandb`，`git clone`、`wget`、`curl`等命令。
:::

:::tip 外网加速
由于下载国外资源缓慢，甚至断连，详情外网加速可以查看[网络章节](./network.md)，这里只介绍conda的加速方式。
:::

- 导入`$HTTPS_PROXY`环境变量，使用翻墙/代理来加速conda
  ```bash
  export HTTPS_PROXY=http://proxy.linkdata.liandanlu.cn:10809
  ```
  >注意：`export`命令是导入环境变量，只对输入他的terminal有效，对于其他新开的terminal无效；因此`export`命令和`conda`安装命令必须在同一个terminal上执行。

  >检测是否设置成功，使用`echo $HTTPS_PROXY`命令，查看是否有代理网址内容输出。
  
  >==在校内情况下，记得把代理地址中的`linkdata`换成`tju`==。

- 创建名为`pytorch`的虚拟环境，防止环境冲突，隔离base环境与实验环境
  ```bash
  conda create --name pytorch python=3.10
  ```

- 进入虚拟环境安装pytorch：
  - 进入自己创建的虚拟环境
  ```bash
  conda activate pytorch
  ```
  - 登录[PyTorch下载页面](https://pytorch.org/get-started/previous-versions/)，选择合适的版本，然后复制其安装命令即可：
  ```bash
  # 下面以1.13.1版本为例
  conda install pytorch==1.13.1 torchvision==0.14.1 torchaudio==0.13.1 pytorch-cuda=11.7 -c pytorch -c nvidia
  ```

- 测试pytorch是否可以使用显卡:
  ```bash
  # python
  >import torch
  >torch.cuda.is_available()
  输出True表示可以，False表示不行。
  ```

<!-- - 安装pysocks包
  ```bash
  #如果你使用pip3，那就换成 pip3 install
  pip install ~/nas-resource-linkdata/常用软件/whl/PySocks-1.7.1-py3-none-any.whl
  ``` -->

<!-- - 设置socks5代理https代理
  ```bash
  export ALL_PROXY=socks5://proxy.linkdata.liandanlu.cn:10808
  export HTTP_PROXY=http://proxy.linkdata.liandanlu.cn:10809
  
  ```
- 之后使用conda安装pytorch就可以受到梯子加速。 -->



## apt安装应用

>`apt`和`apt-get`的加速方法是一样。下面将以`apt`来举例，自己把命令进行替换就行。


- 设置代理的环境变量：
  ```bash
  export HTTPS_PROXY=http://proxy.linkdata.liandanlu.cn:10809
  ```
>注：在校内情况下，记得把代理地址中的`linkdata`换成`tju`。
- 让`apt`经过代理安装软件：
  ```bash
  sudo apt install xxxxxx -o Acquire::http::proxy=$HTTPS_PROXY
  ```
  :::note
  如果你的报了404 not found之类的的错误，可以试试先使用update命令更新软件源
  ```bash
  sudo apt update -o Acquire::http::proxy=$HTTPS_PROXY
  ```
  :::

>同上，`export`只对输入他的terminal有效。

## docker使用
>目前只能使用普通的docker，无法使用gpu docker。

------

:::tip
可以看到，确实较麻烦。可以看看[网络篇](./network.md)的内容。
:::