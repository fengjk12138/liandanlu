---
# This is the title of the article
title: 国外资源加速、网络配置
# This is the icon of the page
icon: network
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

## 前言

>魔法上网所使用的的原理是`代理`，即通过https加密让`代理服务器`代为请求所需国外资源以加速访问，可以在[Project V](https://www.v2fly.org/)中了解更多。目前的代理服务器为服务器管理员搭建。

::: note
代理地址和命令可能会发生变化，请关注文档变更和管理员通知。
:::

## 链数服务器网络

### 1. 国内资源访问
链数机器可以自由访问国内网站，如gitee等资源。不需要做任何操作，不过在使用代理后，访问国内的网站可能会有影响，详情请阅读下一节。

### 2. 国外资源加速（`pip`， `git clone`，`apt`等）
>基本上所有网络命令都能被代理，包括`conda`、`wandb`、`wget`等
因此我们不需要在机器上换源，用最新的国外版就行。

由于懂的都懂的原因，在国内请求国外资源比较慢，甚至无法访问，因此需要设置代理服务器。

- 在链数的GPU服务器内，开启一个终端`terminal`之后，输入下面命令，即可使用socks代理上网：
```shell
export ALL_PROXY=socks5://192.168.22.54:10808
```
这个命令的含义是导入一个临时环境变量`ALL_PROXY`。按照正常程序设计标准，linux程序上网时会检查这个环境变量，来判断是否走网络代理。

在导入变量之后，这个terminal的所有命令就会走socks代理（翻墙），以加速资源下载。

:::note
这个命令只影响运行这个export命令的terminal，不影响其他终端，因为这样导入的环境变量是临时的，更多trick可以学习Linux环境变量知识。
:::
![使用代理`git clone`前后速度变化](./img/proxy.png)

但也有程序不遵守标准协议，不走socks代理，走http、https代理，或者检查小写环境变量，解决方法参考总结。
- 特殊情况
  - `wget`，`curl`命令不走socks代理
  - `wandb`不走socks代理

对于不走socks代理的情况，需要设置`http`，`https`代理，命令如下：
```shell
export HTTP_PROXY=http://192.168.22.54:10809
export HTTPS_PROXY=http://192.168.22.54:10809
```

- python在`pip`的时候，也可以走socks代理，但是需要具备`pysocks`包，否则会报错.(**尤其是使用conda开了一个新的虚拟环境时，缺少很多依赖。**)
```txt
ERROR: Could not install packages due to an OSError: Missing depencies for SOCKS support.
```
你可以使用下面的命令来安装下载好的`pysocks`包：
```shell
#如果你使用pip3，那就换成 pip3 install
pip install ~/nas-resource-linkdata/software/PySocks-1.7.1-py3-none-any.whl
```

安装`PySocks`包之后，你就可以设置`ALL_PROXY`环境变量，开心的使用代理加速你的pip安装了。

- **总结如下，建议使用如下方法批量设置代理，解决特殊情况**
:::tip
建议在`.bashrc`文件中增加以下内容：
```shell
function set_proxy(){
    export HTTP_PROXY=http://192.168.22.54:10809
    export HTTPS_PROXY=$HTTP_PROXY
    export ALL_PROXY=socks5://192.168.22.54:10808
    export http_proxy=$HTTP_PROXY
    export https_proxy=$HTTP_PROXY
    export all_proxy=$ALL_PROXY
}
function unset_proxy(){
    unset HTTP_PROXY
    unset HTTPS_PROXY
    unset ALL_PROXY
    unset http_proxy
    unset https_proxy
    unset all_proxy
}
```
之后
```shell
source ~/.bashrc
```

这样在命令行内调用命令`set_proxy`之后，即可应对所有代理情况；使用`unset_proxy`命令即可解除代理。
:::

- `apt-get`通过上述方法还是没办法解决代理问题，下面这样解决，加入`-o Acquire::http::proxy=$http_proxy`这个命令在尾部
```shell
#加上你已经将上述建议加入了`.bashrc`
set_proxy
sudo apt-get install xxxxxx -o Acquire::http::proxy=$http_proxy
```


### 3. 网盘/外网资源下载

由于很多数据位于百度网盘或者国外网页中，我们也提供了下载方式。

使用向日葵连接进入一台Windows电脑，电脑中已经启动了梯子和百度网盘（也有迅雷和阿里盘之类的）。使用Windows电脑下载资源

:::tip
向日葵的Windows内的百度网盘已经买了会员，可以高速下载，**平常自己下载其他网络资源也可以通过向日葵内的网盘下载，不需要再去要手机验证码**。

向日葵账号： ******

向日葵密码： ******

隐去的账密请在内部文档内查找。
:::

这台Windows电脑也与NAS相连，将下载文件拖入NAS即可。

这样，你的本地电脑和GPU服务器都可以访问到文件。