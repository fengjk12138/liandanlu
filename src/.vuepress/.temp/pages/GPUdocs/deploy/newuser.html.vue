<template><div><h2 id="一、-导入模板容器" tabindex="-1"><a class="header-anchor" href="#一、-导入模板容器" aria-hidden="true">#</a> 一、 导入模板容器</h2>
<ul>
<li>将之前保存的压缩包导入到镜像中，并且别名称为<code v-pre>template</code>。</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>lxc image <span class="token function">import</span> /mnt/nas-resource-linkdata/容器镜像/template/****.tar.gz <span class="token parameter variable">--alias</span> template
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>初始化用户实例。生成一个名为mars-huanghansheng的容器</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>lxc launch template mars-huanghansheng
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="二、-用户容器配置" tabindex="-1"><a class="header-anchor" href="#二、-用户容器配置" aria-hidden="true">#</a> 二、 用户容器配置</h2>
<h3 id="_1-密码修改" tabindex="-1"><a class="header-anchor" href="#_1-密码修改" aria-hidden="true">#</a> 1. 密码修改</h3>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-配置文件修改、设备添加" tabindex="-1"><a class="header-anchor" href="#_2-配置文件修改、设备添加" aria-hidden="true">#</a> 2. 配置文件修改、设备添加</h3>
<ul>
<li>
<p>配置静态ip。（<strong>使用新的端口映射方法不用分配静态ip了，不过为了分配端口映射时方便记忆，还是分配静态ip较为妥当</strong>）</p>
</li>
<li>
<p>挂载每个人自己的NAS文件</p>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>一般只给每个人分配自己的目录，不会直接挂载整个public目录给他，因为这样可以更方便操作自己的文件夹，也防止病毒入侵后误删其他人的文件</p>
</div>
</li>
<li>
<p>为每个人分配GPU
在<code v-pre>device</code>下增加如下配置，按照<code v-pre>id</code>的数值进行分配即可，</p>
<blockquote>
<p>注：5.15版本修复了GPU ID的问题，可使用id进行操作。此前部分版本需要使用pci参数才能正常识别数量。详见github相关<a href="https://github.com/lxc/lxd/issues/11442" target="_blank" rel="noopener noreferrer">issue<ExternalLinkIcon/></a>。值得注意的是，在有核显（集显）的机器里，nvidia显卡是从1开始的，其他情况从0开始，可以使用<code v-pre>lxc info --resources</code>看显卡。</p>
</blockquote>
</li>
<li>
<p>添加端口转发设备，将外部访问转发入容器22端口。</p>
</li>
</ul>
<div class="hint-container info">
<p class="hint-container-title">用户配置文件修改部分</p>
<p>相当于在用户<code v-pre>config</code>的<code v-pre>device</code>下增加如下部分：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">eth0</span><span class="token punctuation">:</span>
  <span class="token key atrule">ipv4.address</span><span class="token punctuation">:</span> 172.16.x.1
  <span class="token key atrule">name</span><span class="token punctuation">:</span> eth0
  <span class="token key atrule">network</span><span class="token punctuation">:</span> lxdbr0
  <span class="token key atrule">type</span><span class="token punctuation">:</span> nic
<span class="token key atrule">gpu1</span><span class="token punctuation">:</span>
  <span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token string">"1"</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> gpu
<span class="token key atrule">gpu2</span><span class="token punctuation">:</span>
  <span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token string">"2"</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> gpu
<span class="token key atrule">nas-public-tju</span><span class="token punctuation">:</span>
  <span class="token key atrule">path</span><span class="token punctuation">:</span> /root/nas<span class="token punctuation">-</span>public<span class="token punctuation">-</span>linkdata
  <span class="token key atrule">source</span><span class="token punctuation">:</span> /mnt/nas<span class="token punctuation">-</span>public<span class="token punctuation">-</span>linkdata/huanghansheng
  <span class="token key atrule">type</span><span class="token punctuation">:</span> disk
<span class="token key atrule">proxy-ssh</span><span class="token punctuation">:</span>
  <span class="token key atrule">connect</span><span class="token punctuation">:</span> tcp<span class="token punctuation">:</span>127.0.0.1<span class="token punctuation">:</span><span class="token number">22</span><span class="token punctuation">,</span>40xy1<span class="token punctuation">-</span>40xy9
  <span class="token key atrule">listen</span><span class="token punctuation">:</span> tcp<span class="token punctuation">:</span>0.0.0.0<span class="token punctuation">:</span>40xy0<span class="token punctuation">-</span>40xy9
  <span class="token key atrule">type</span><span class="token punctuation">:</span> proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>GPU分配原则可以见<RouterLink to="/Userdocs/fast/container.html">其他文档</RouterLink>。</p>
</div>
<h3 id="_3-给容器加入cpu-内存限制" tabindex="-1"><a class="header-anchor" href="#_3-给容器加入cpu-内存限制" aria-hidden="true">#</a> 3. 给容器加入<code v-pre>CPU</code>,<code v-pre>内存</code>限制</h3>
<p>根据机器的特性选择是否需要限制容器的CPU、内存：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>lxc config <span class="token builtin class-name">set</span> mars-huanghansheng <span class="token assign-left variable">limits.cpu</span><span class="token operator">=</span><span class="token number">30</span>
lxc config <span class="token builtin class-name">set</span> mars-huanghansheng <span class="token assign-left variable">limits.memory</span><span class="token operator">=</span>64Gib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>限制每一个容器只能操作30个核心（线程），64GB内存</p>
<hr>
<p>现在每个人的容器就创建完毕了。</p>
</div></template>


