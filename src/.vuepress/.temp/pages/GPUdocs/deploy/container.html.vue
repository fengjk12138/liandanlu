<template><div><h2 id="一、-构建模板容器" tabindex="-1"><a class="header-anchor" href="#一、-构建模板容器" aria-hidden="true">#</a> 一、 构建模板容器</h2>
<h2 id="_1-初始化一个系统容器实例" tabindex="-1"><a class="header-anchor" href="#_1-初始化一个系统容器实例" aria-hidden="true">#</a> 1. 初始化一个系统容器实例</h2>
<ul>
<li>开启一个系统模板容器，选择<code v-pre>ubuntu</code>作为镜像源，因为这里的镜像中的系统比较齐全，<code v-pre>images</code>中的镜像缺少很多库</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>lxc launch ubuntu:22.04 template
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-容器安装必要的软件" tabindex="-1"><a class="header-anchor" href="#_2-容器安装必要的软件" aria-hidden="true">#</a> 2. 容器安装必要的软件</h2>
<p>与宿主机相同，模板容器内也安装相应的必要软件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>lxc <span class="token builtin class-name">exec</span> template -- <span class="token function">apt</span> <span class="token function">install</span> net-tools cifs-utils zfsutils-linux iotop sysstat nload libgl1 <span class="token function">zip</span> <span class="token function">unzip</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-容器的root密码登录配置" tabindex="-1"><a class="header-anchor" href="#_3-容器的root密码登录配置" aria-hidden="true">#</a> 3. 容器的root密码登录配置</h2>
<p>因为容器内一般使用root用户，我们需要开启root的ssh密码登录选项</p>
<ul>
<li>修改<code v-pre>sshd</code>的配置文件<code v-pre>sshd_config</code></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>lxc <span class="token builtin class-name">exec</span> template -- <span class="token function">vim</span> /etc/ssh/sshd_config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改其中的两个选项为<code v-pre>yes</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>PermitRootLogin yes
PasswordAuthentication yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>重启<code v-pre>sshd</code>服务</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>lxc <span class="token builtin class-name">exec</span> template -- <span class="token function">service</span> <span class="token function">ssh</span> restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-设置模板时区为东八区" tabindex="-1"><a class="header-anchor" href="#_5-设置模板时区为东八区" aria-hidden="true">#</a> 5. 设置模板时区为东八区</h2>
<p>为了容器内的时间正常，我们需要设置机器的时区</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>lxc <span class="token builtin class-name">exec</span> template <span class="token function">bash</span> -- timedatectl set-timezone Asia/Shanghai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-设置用户的基本terminal的色彩显示" tabindex="-1"><a class="header-anchor" href="#_6-设置用户的基本terminal的色彩显示" aria-hidden="true">#</a> 6. 设置用户的基本terminal的色彩显示</h2>
<p>镜像容器的root用户的terminal是没有颜色的，其他用户如ubuntu都有颜色，我们修改<code v-pre>.bashrc</code>来让颜色回复，方便操作。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> .bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将下面这段</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># set a fancy prompt (non-color, unless we know we "want" color)
case "$TERM" in
    xterm-color) color_prompt=yes;;
esac
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改为</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># set a fancy prompt (non-color, unless we know we "want" color)
case "$TERM" in
    xterm-color|*-256color) color_prompt=yes;;
esac
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-导出模板容器为镜像文件" tabindex="-1"><a class="header-anchor" href="#_4-导出模板容器为镜像文件" aria-hidden="true">#</a> 4. 导出模板容器为镜像文件</h2>
<p>我们需要把我们的镜像导出为模板，这样在其他机器上直接使用模板文件创建新的镜像即可，不需要每次都重新设置</p>
<ul>
<li>发布实例为镜像</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 将实例template发布为镜像</span>
<span class="token comment"># 为了之后寻找方便，将镜像起名为template</span>
<span class="token comment"># 否则之后只能通过指纹（一串MD5数字）来寻找镜像了</span>
lxc publish template <span class="token parameter variable">--alias</span> template
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>将实例导出为压缩包文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 创建一个文件夹保存之后的压缩包文件</span>
<span class="token comment"># 然后导出的文件就会保存在文件夹下面</span>
<span class="token function">mkdir</span> template
lxc image <span class="token builtin class-name">export</span> template ./template/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>之后可以将模板容器复制到nas中，保存起来，方便其他机器使用</li>
</ul>
<h2 id="二、-迁移用户容器" tabindex="-1"><a class="header-anchor" href="#二、-迁移用户容器" aria-hidden="true">#</a> 二、 迁移用户容器</h2>
<h2 id="_1-打包源服务器容器" tabindex="-1"><a class="header-anchor" href="#_1-打包源服务器容器" aria-hidden="true">#</a> 1. 打包源服务器容器</h2>
<ul>
<li>关停需要迁移的用户的容器</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>lxc stop mars-huanghansheng
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>将容器打包成镜像</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>lxc publish mars-huanghansheng <span class="token parameter variable">--alias</span> mars-huanghansheng
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>导出镜像为压缩文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> huanghansheng
lxc image <span class="token builtin class-name">export</span> mars-huanghansheng ./huanghansheng/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>拷贝镜像进入nas中</li>
</ul>
<h2 id="_2-在新服务器中创建镜像" tabindex="-1"><a class="header-anchor" href="#_2-在新服务器中创建镜像" aria-hidden="true">#</a> 2. 在新服务器中创建镜像</h2>
<ul>
<li>将压缩包导入为镜像</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>lxc image <span class="token function">import</span> /mnt/nas-resource-linkdata/容器镜像/huanghansheng/****.tar.gz <span class="token parameter variable">--alias</span> huanghansheng
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>创建新的容器实例</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>lxc launch huanghansheng vulcan-huanghansheng
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>后面就是设备设置之类的工作，参考
<strong><RouterLink to="/GPUdocs/deploy/newuser.html">创建新的用户容器</RouterLink></strong></li>
</ul>
</div></template>


