<template><div><h2 id="一、-安装系统" tabindex="-1"><a class="header-anchor" href="#一、-安装系统" aria-hidden="true">#</a> 一、 安装系统</h2>
<h2 id="_1-系统安装过程" tabindex="-1"><a class="header-anchor" href="#_1-系统安装过程" aria-hidden="true">#</a> 1. 系统安装过程</h2>
<p>使用U盘启动盘安装系统，一般选择最新版本Ubuntu系统安装</p>
<ul>
<li>
<p>选择系统进行安装</p>
</li>
<li>
<p>设置硬盘模式，一般使用sata固态作为主系统盘。（至于其他盘，可以等装完系统之后使用zfs管理即可，不在这里处理）</p>
</li>
<li>
<p><strong>一定要选择安装openssh</strong></p>
</li>
<li>
<p>命名计算机与用户名，一般按照统一的规则进行命名</p>
</li>
<li>
<p>取消更新，完成安装</p>
</li>
</ul>
<h2 id="_2-系统初始化" tabindex="-1"><a class="header-anchor" href="#_2-系统初始化" aria-hidden="true">#</a> 2. 系统初始化</h2>
<h3 id="_2-1-主机网络配置" tabindex="-1"><a class="header-anchor" href="#_2-1-主机网络配置" aria-hidden="true">#</a> 2.1 主机网络配置</h3>
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
<ul>
<li>
<p><strong>在路由器上给主机设置静态IP</strong>和端口映射</p>
<ul>
<li>登入路由器后台，按照mac地址分配静态ip。<strong>请按照规则编码设置</strong>，防止IP冲突或者找不到机器</li>
<li>在路由器上设置这台机器的<strong>端口转发</strong>，一般将100个端口转发给一个机器，比如</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>40x00,40x10-40x99  →  22,40x10-40x99
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中<code v-pre>40x00</code>端口用于物理主机的ssh链接，其余的端口均给主机内的容器使用。</p>
<ul>
<li>主机重新获取IP</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> dhclient eno1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_2-2-驱动安装" tabindex="-1"><a class="header-anchor" href="#_2-2-驱动安装" aria-hidden="true">#</a> 2.2 驱动安装</h3>
<p>安装英伟达显卡驱动程序</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>只安装驱动程序即可，无需安装<code v-pre>cuda</code>和<code v-pre>cudnn</code>。</p>
<p>因为在安装<code v-pre>pytorch</code>时，<code v-pre>torch</code>会自己安装编译好的包，所以不用主系统再安装<code v-pre>cuda</code>这些，省的破坏环境纯洁性。</p>
</div>
<ul>
<li>直接安装最新版nvidia显卡驱动，利用<code v-pre>apt</code>进行安装</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nvidia-driver-525
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>重启电脑</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sudo reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-3-安装必要的软件" tabindex="-1"><a class="header-anchor" href="#_2-3-安装必要的软件" aria-hidden="true">#</a> 2.3 安装必要的软件</h3>
<p>安装网络、性能监控、zfs、cifs等软件，方便以后的使用和监控</p>
<ul>
<li>更新安装包</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>安装软件 网络工具，cifs的smb共享工具，zfs工具，查看磁盘工具，查看网络工具，opencv的依赖库，压缩工具</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> net-tools cifs-utils zfsutils-linux iotop sysstat nload libgl1 <span class="token function">zip</span> <span class="token function">unzip</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>关闭<code v-pre>apt</code>自动更新，防止驱动自动更新造成不兼容情况//ToDo List</li>
</ul>
<h3 id="_2-4-在-mnt下挂载nas" tabindex="-1"><a class="header-anchor" href="#_2-4-在-mnt下挂载nas" aria-hidden="true">#</a> 2.4 在<code v-pre>/mnt</code>下挂载<code v-pre>NAS</code></h3>
<ul>
<li>在<code v-pre>/mnt</code>下创建<code v-pre>NAS</code>文件夹</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /mnt
<span class="token function">sudo</span> <span class="token function">mkdir</span> nas-public-linkdata nas-resource-linkdata
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>在<code v-pre>/etc/fstab</code>文件中写入开机自动挂载选项</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/fstab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在文件中加入最后两行，表示nas的开机自动挂载</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>//10.10.0.2/public /mnt/nas<span class="token punctuation">-</span>public<span class="token punctuation">-</span>linkdata cifs username=<span class="token important">****</span><span class="token punctuation">,</span>password=<span class="token important">****</span><span class="token punctuation">,</span>dir_mode=0777<span class="token punctuation">,</span>file_mode=0777<span class="token punctuation">,</span>noperm<span class="token punctuation">,</span>vers=3.0 0 0
//10.10.0.2/resource /mnt/nas<span class="token punctuation">-</span>resource<span class="token punctuation">-</span>linkdata cifs username=<span class="token important">****</span><span class="token punctuation">,</span>password=<span class="token important">****</span><span class="token punctuation">,</span>dir_mode=0777<span class="token punctuation">,</span>file_mode=0777<span class="token punctuation">,</span>noperm<span class="token punctuation">,</span>vers=3.0 0 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note">
<p class="hint-container-title">注</p>
<p>第一项表示nas的网络路径，第二项表示挂载点，第三项表示挂载协议为cifs也就是smb协议，</p>
<p>第四项表示一些选项，其中需要用户名和密码，在线文档隐去账密，<strong>其中dir_mode和file_mode为0777表示设置目录权限，后面打算把resource权限设置为只读；noperm表示不做权限检查，因为有些程序会自动创建其他权限的文件（比如unzip解压），但是NAS又会保存成777权限，所以程序会报错，而这个选项用于跳过检查。</strong>//ToDo</p>
<p>最后两项默认为<code v-pre>0 0</code>即可</p>
</div>
<ul>
<li>重新加载<code v-pre>/etc/fstab</code>文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mount</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="二、-容器管理器初始化" tabindex="-1"><a class="header-anchor" href="#二、-容器管理器初始化" aria-hidden="true">#</a> 二、 容器管理器初始化</h2>
<h2 id="_1-初始化lxd" tabindex="-1"><a class="header-anchor" href="#_1-初始化lxd" aria-hidden="true">#</a> 1. 初始化lxd</h2>
<p>现在安装的<code v-pre>ubuntu22.04</code>的系统中，<code v-pre>lxd</code>已经默认安装，所以可以直接运行，不过为了使用新特性方便，请升级到最新版本</p>
<ul>
<li>升级<code v-pre>lxd</code></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> snap refresh lxd <span class="token parameter variable">--channel</span><span class="token operator">=</span>latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>运行初始化命令
<ul>
<li>后端选用<code v-pre>zfs</code>，尽量使用一个独立的磁盘</li>
<li>网桥选择创建新的网桥<code v-pre>lxdbr0</code></li>
<li>网桥的IPV4使用<code v-pre>172.16.0.1/16</code></li>
</ul>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>lxd init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-配置容器基础profile" tabindex="-1"><a class="header-anchor" href="#_2-配置容器基础profile" aria-hidden="true">#</a> 2. 配置容器基础<code v-pre>profile</code></h2>
<h3 id="_2-1-配置固定的权限和显卡驱动" tabindex="-1"><a class="header-anchor" href="#_2-1-配置固定的权限和显卡驱动" aria-hidden="true">#</a> 2.1 配置固定的权限和显卡驱动</h3>
<p><code v-pre>profile</code>属于公共配置，在这里可以给本机内的所有容器配置完成</p>
<ul>
<li>修改<code v-pre>profile</code></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>lxc profile edit default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在<code v-pre>config</code>的中增加如下内容：</p>
<p>分别表示自动开启，传递英伟达驱动，允许容器嵌套</p>
<p>自动开启是为了在宿主机重启后，每个容器可以开机自启</p>
<p>传递驱动是为了在容器内可以调用显卡</p>
<p>允许容器嵌套是为了允许其他人可以在容器内使用<code v-pre>docker</code>的容器</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>  <span class="token key atrule">boot.autostart</span><span class="token punctuation">:</span> <span class="token string">"true"</span>
  <span class="token key atrule">nvidia.runtime</span><span class="token punctuation">:</span> <span class="token string">"true"</span>
  <span class="token key atrule">security.nesting</span><span class="token punctuation">:</span> <span class="token string">"true"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container danger">
<p class="hint-container-title">高危操作</p>
<p>一般不给容器开启<code v-pre>特权容器</code>选项，特权会导致容器可以修改系统内核配置，可能导致宿主机崩溃。</p>
</div>
<h3 id="_2-2-为容器挂载nas目录" tabindex="-1"><a class="header-anchor" href="#_2-2-为容器挂载nas目录" aria-hidden="true">#</a> 2.2 为容器挂载NAS目录</h3>
<ul>
<li>将<code v-pre>nas-resource-linkdata</code>等文件夹挂载进入容器内
在<code v-pre>profile</code>的<code v-pre>device</code>下增加如下配置即可<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>  <span class="token key atrule">mnt-resource</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /root/nas<span class="token punctuation">-</span>resource<span class="token punctuation">-</span>linkdata
    <span class="token key atrule">source</span><span class="token punctuation">:</span> /mnt/nas<span class="token punctuation">-</span>resource<span class="token punctuation">-</span>linkdata
    <span class="token key atrule">type</span><span class="token punctuation">:</span> disk
  <span class="token key atrule">mnt-public</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /mnt/nas<span class="token punctuation">-</span>public<span class="token punctuation">-</span>linkdata
    <span class="token key atrule">source</span><span class="token punctuation">:</span> /mnt/nas<span class="token punctuation">-</span>public<span class="token punctuation">-</span>linkdata
    <span class="token key atrule">type</span><span class="token punctuation">:</span> disk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="_3-添加网络forward端口转发-目前不需要了-已经使用proxy设备代替" tabindex="-1"><a class="header-anchor" href="#_3-添加网络forward端口转发-目前不需要了-已经使用proxy设备代替" aria-hidden="true">#</a> 3. 添加网络forward端口转发 （<strong>目前不需要了，已经使用proxy设备代替</strong>）</h2>
<details class="hint-container details"><summary>详情</summary>
<ul>
<li>创造监听网络，监听本地IP，<em>不能使用0.0.0.0</em>作为ip</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>lxc network forward create lxdbr0 <span class="token number">10.10</span>.1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>创建端口映射。替换里面的ip地址为合适的地址即可。<strong>也可以在添加容器时添加端口映射，不在这里添加。</strong></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>lxc network forward port <span class="token function">add</span> lxdbr0 <span class="token number">10.10</span>.1.1 tcp <span class="token number">20010</span>-20019 <span class="token number">172.16</span>.1.1 <span class="token number">22,20011</span>-20019
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令的含义是，将20010转发给<code v-pre>172.16.1.1</code>的22端口；将20011-20019转发给<code v-pre>172.16.1.1</code>的20011-20019端口</p>
</details>
<h2 id="三、-注意事项" tabindex="-1"><a class="header-anchor" href="#三、-注意事项" aria-hidden="true">#</a> 三、 注意事项</h2>
<div class="hint-container danger">
<p class="hint-container-title">警告</p>
<p>管理员请仔细阅读，不然会造成严重事故或数据丢失。</p>
</div>
<ul>
<li>
<p><strong>物理主机</strong>内不要用<code v-pre>docker</code>，引起<code v-pre>docker</code>创建的网桥<code v-pre>docker0</code>影响网络数据传输给lxd容器。会造成容器断网。
详见<a href="https://linuxcontainers.org/lxd/docs/latest/howto/network_bridge_firewalld/#prevent-connectivity-issues-with-lxd-and-docker" target="_blank" rel="noopener noreferrer">lxd官方文档<ExternalLinkIcon/></a>。</p>
<p><strong>容器内可以使用docker</strong>，如果需要使用docker请在lxd容器内使用。</p>
</li>
</ul>
</div></template>


