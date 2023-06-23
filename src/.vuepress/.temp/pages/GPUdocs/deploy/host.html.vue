<template><div><h2 id="news" tabindex="-1"><a class="header-anchor" href="#news" aria-hidden="true">#</a> NEWS</h2>
<p>2023/06/23修改， 引入新的端口映射方式与桥接方式，更加方便统一配置，减少工作量</p>
<h2 id="安装系统" tabindex="-1"><a class="header-anchor" href="#安装系统" aria-hidden="true">#</a> 安装系统</h2>
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
<h3 id="_1-1-网桥配置" tabindex="-1"><a class="header-anchor" href="#_1-1-网桥配置" aria-hidden="true">#</a> 1.1 网桥配置</h3>
<p>首先进行网络桥接，将所有的万兆网口桥接在一起，形成网桥<code v-pre>br0</code>，这样的话，网线插主机的任何网口都可以正常dhcp了</p>
<p>同时网络桥接可以让lxd的容器也与主机共享网桥，从而完成网络互联互通</p>
<p>一般在路由器上设置静态ip，不在主机上设置静态地址，这样可以让主机在其他网络情况下也能正常上网（当然也可以改，做好记录就行）</p>
<ul>
<li>进入<code v-pre>/etc/netplan</code></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/netplan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>修改配置文件为桥接模式，一般命名网桥为<code v-pre>br0</code>；</li>
</ul>
<p>代码含义为：取消所有接口的dhcp功能，之后</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token comment"># 修改后如下</span>
<span class="token comment"># This is the network config written by 'subiquity'</span>
<span class="token key atrule">network</span><span class="token punctuation">:</span>
<span class="token key atrule">ethernets</span><span class="token punctuation">:</span>
    <span class="token key atrule">enp129s0f0</span><span class="token punctuation">:</span>
    <span class="token key atrule">dhcp4</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">enp129s0f1</span><span class="token punctuation">:</span>
    <span class="token key atrule">dhcp4</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">enp5s0f0</span><span class="token punctuation">:</span>
    <span class="token key atrule">dhcp4</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">enp5s0f1</span><span class="token punctuation">:</span>
    <span class="token key atrule">dhcp4</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">bridges</span><span class="token punctuation">:</span>
    <span class="token key atrule">br0</span><span class="token punctuation">:</span>
    <span class="token key atrule">dhcp4</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">dhcp6</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">interfaces</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> enp129s0f0
        <span class="token punctuation">-</span> enp129s0f1
        <span class="token punctuation">-</span> enp5s0f0
        <span class="token punctuation">-</span> enp5s0f1
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>应用修稿好的配置文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> netplan apply
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>在路由器上配置静态IP</strong>和端口映射</li>
</ul>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>以后的端口映射（甚至dhcp）大概会使用容器内的软路由进行分配，不需要在登录路由器进行配置。//ToDo List</p>
</div>
<h3 id="_1-2-驱动安装" tabindex="-1"><a class="header-anchor" href="#_1-2-驱动安装" aria-hidden="true">#</a> 1.2 驱动安装</h3>
<p>安装英伟达显卡驱动程序</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>只安装驱动程序即可，无需安装<code v-pre>cuda</code>和<code v-pre>cudnn</code>。</p>
<p>因为在安装<code v-pre>pytorch</code>时，<code v-pre>torch</code>会自己安装编译好的包，所以不用主系统再安装<code v-pre>cuda</code>这些，省的破坏环境纯洁性。</p>
</div>
<ul>
<li>直接安装最新版nvidia显卡驱动，利用<code v-pre>apt</code>进行安装</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nvidia-driver-525
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>重启电脑</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sudo reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3-安装必要的软件" tabindex="-1"><a class="header-anchor" href="#_1-3-安装必要的软件" aria-hidden="true">#</a> 1.3 安装必要的软件</h3>
<p>安装网络、性能监控、zfs、cifs等软件，方便以后的使用和监控</p>
<ul>
<li>更新安装包</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>安装软件 网络工具，cifs的smb共享工具，zfs工具，查看磁盘工具，查看网络工具，opencv的依赖库，压缩工具</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sudo apt install net-tools cifs-utils zfsutils-linux iotop sysstat nload libgl1 zip unzip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>关闭<code v-pre>apt</code>自动更新，防止驱动自动更新造成不兼容情况//ToDo List</li>
</ul>
<h3 id="_1-4-在-mnt下挂载nas" tabindex="-1"><a class="header-anchor" href="#_1-4-在-mnt下挂载nas" aria-hidden="true">#</a> 1.4 在<code v-pre>/mnt</code>下挂载<code v-pre>NAS</code></h3>
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
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>//10.10.0.2/public /mnt/nas<span class="token punctuation">-</span>public<span class="token punctuation">-</span>linkdata cifs username=<span class="token important">****</span><span class="token punctuation">,</span>password=<span class="token important">****</span><span class="token punctuation">,</span>dir_mode=0777<span class="token punctuation">,</span>file_mode=0777<span class="token punctuation">,</span>noperm 0 0
//10.10.0.2/resource /mnt/nas<span class="token punctuation">-</span>resource<span class="token punctuation">-</span>linkdata cifs username=<span class="token important">****</span><span class="token punctuation">,</span>password=<span class="token important">****</span><span class="token punctuation">,</span>dir_mode=0777<span class="token punctuation">,</span>file_mode=0777<span class="token punctuation">,</span>noperm 0 0
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="容器管理器初始化" tabindex="-1"><a class="header-anchor" href="#容器管理器初始化" aria-hidden="true">#</a> 容器管理器初始化</h2>
<h2 id="_1-5-初始化lxd" tabindex="-1"><a class="header-anchor" href="#_1-5-初始化lxd" aria-hidden="true">#</a> 1.5 初始化lxd</h2>
<p>现在安装的<code v-pre>ubuntu22.04</code>的系统中，<code v-pre>lxd</code>都是默认安装的
所以可以直接运行</p>
<ul>
<li>运行<code v-pre>lxd init</code>命令</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>clustering `
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-6-配置容器基础profile" tabindex="-1"><a class="header-anchor" href="#_1-6-配置容器基础profile" aria-hidden="true">#</a> 1.6 配置容器基础<code v-pre>profile</code></h2>
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
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">boot.autostart</span><span class="token punctuation">:</span> <span class="token string">"true"</span>
<span class="token key atrule">nvidia.runtime</span><span class="token punctuation">:</span> <span class="token string">"true"</span>
<span class="token key atrule">security.nesting</span><span class="token punctuation">:</span> <span class="token string">"true"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container danger">
<p class="hint-container-title">高危操作</p>
<p>一般不给容器开启<code v-pre>特权容器</code>选项，特权会导致容器可以修改系统内核配置，可能导致宿主机崩溃。</p>
</div>
<ul>
<li>将<code v-pre>nas-resource-linkdata</code>等文件夹挂载进入容器内
在<code v-pre>profile</code>的<code v-pre>device</code>下增加如下配置即可<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">mnt-resource</span><span class="token punctuation">:</span>
  <span class="token key atrule">path</span><span class="token punctuation">:</span> /root/nas<span class="token punctuation">-</span>resource<span class="token punctuation">-</span>linkdata
  <span class="token key atrule">source</span><span class="token punctuation">:</span> /mnt/nas<span class="token punctuation">-</span>resource<span class="token punctuation">-</span>linkdata
  <span class="token key atrule">type</span><span class="token punctuation">:</span> disk
<span class="token key atrule">mnt-public</span><span class="token punctuation">:</span>
  <span class="token key atrule">path</span><span class="token punctuation">:</span> /mnt/nas<span class="token punctuation">-</span>public<span class="token punctuation">-</span>linkdata
  <span class="token key atrule">source</span><span class="token punctuation">:</span> /mnt/nas<span class="token punctuation">-</span>public<span class="token punctuation">-</span>linkdata
  <span class="token key atrule">type</span><span class="token punctuation">:</span> disk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="新创建用户容器初始化" tabindex="-1"><a class="header-anchor" href="#新创建用户容器初始化" aria-hidden="true">#</a> 新创建用户容器初始化</h2>
<h3 id="将模板镜像导入" tabindex="-1"><a class="header-anchor" href="#将模板镜像导入" aria-hidden="true">#</a> 将模板镜像导入</h3>
<ul>
<li>之前模板镜像已经保存为文件，我们将文件导入即可</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>lxc image <span class="token function">import</span> /mnt/nas-resource-linkdata/容器镜像/template/****.tar.gz <span class="token parameter variable">--alias</span> template
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>导入之后我们使用这个镜像来初始化用户的容器</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 生成一个名为mars-huanghansheng的容器</span>
lxc launch template mars-huanghansheng
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户容器基础配置" tabindex="-1"><a class="header-anchor" href="#用户容器基础配置" aria-hidden="true">#</a> 用户容器基础配置</h3>
<ul>
<li>修改用户<code v-pre>root</code>密码</li>
</ul>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>按照正规的编码方式将每个人的密码进行修改，并且需要是强密码，因为nas数据是直连容器的。</p>
<p>一般不会为了数据安全，每个人设置不同的密码。因为每个人容器的链接方式只有端口不同，如果一个人输错了端口，进入了其他人的容器可能造成严重后果。</p>
</div>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>lxc <span class="token builtin class-name">exec</span> mars-huanghansheng -- <span class="token function">passwd</span> root
新密码： ***
重复密码：***
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>配置静态ip</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>lxc network attach lxdbr0 mars-huanghansheng eth0 eth0
lxc config device <span class="token builtin class-name">set</span> mars-huanghansheng eth0 ipv4.address <span class="token number">172.16</span>.4.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>attach</code>的eth0可以不用</p>
<p>修改个人配置文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>lxc config edit mars-huanghansheng
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p>挂载每个人自己的NAS文件</p>
<p>在<code v-pre>device</code>下增加如下配置</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">nas-public-linkdata</span><span class="token punctuation">:</span>
  <span class="token key atrule">path</span><span class="token punctuation">:</span> /root/nas<span class="token punctuation">-</span>public<span class="token punctuation">-</span>linkdata
  <span class="token key atrule">source</span><span class="token punctuation">:</span> /mnt/nas<span class="token punctuation">-</span>public<span class="token punctuation">-</span>linkdata/huanghansheng
  <span class="token key atrule">type</span><span class="token punctuation">:</span> disk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>一般只给每个人分配自己的目录，不会直接挂载整个public目录给他，因为这样可以更方便操作自己的文件夹，也防止病毒入侵后误删其他人的文件</p>
</div>
<ul>
<li>为每个人分配GPU
在<code v-pre>device</code>下增加如下配置，按照<code v-pre>pci</code>的数值进行分配即可，<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">gpu0</span><span class="token punctuation">:</span>
  <span class="token key atrule">pci</span><span class="token punctuation">:</span> 0000<span class="token punctuation">:</span>05<span class="token punctuation">:</span><span class="token number">00.0</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> gpu
<span class="token key atrule">gpu3</span><span class="token punctuation">:</span>
  <span class="token key atrule">pci</span><span class="token punctuation">:</span> 0000<span class="token punctuation">:</span>88<span class="token punctuation">:</span><span class="token number">00.0</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> gpu
<span class="token key atrule">gpu4</span><span class="token punctuation">:</span>
  <span class="token key atrule">pci</span><span class="token punctuation">:</span> 0000<span class="token punctuation">:</span>89<span class="token punctuation">:</span><span class="token number">00.0</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> gpu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>没办法使用<code v-pre>id</code>属性进行分配，这个应该是<code v-pre>lxd</code>的bug，在github提了相关<a href="https://github.com/lxc/lxd/issues/11442" target="_blank" rel="noopener noreferrer">issue<ExternalLinkIcon/></a>，但是尚未解决。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>GPU分配原则可以见其他文档//ToDo List</p>
</div>
<ul>
<li>为每个人增加端口映射与静态地址
按照规则编码方式，为每个容器设置静态地址与端口映射</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>静态地址设置可以在路由器中绑定MAC地址即可</p>
<p>端口映射按照编码规则，在nginx容器中设置端口转发即可</p>
</div>
<h2 id="端口映射容器的开启" tabindex="-1"><a class="header-anchor" href="#端口映射容器的开启" aria-hidden="true">#</a> 端口映射容器的开启</h2>
<p>开启一个容器，安装运行nginx</p>
</div></template>


