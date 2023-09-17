<template><div><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> <strong>FAQ</strong></h2>
<h3 id="_1-容器内如何挂载其他nfs、smb等共享" tabindex="-1"><a class="header-anchor" href="#_1-容器内如何挂载其他nfs、smb等共享" aria-hidden="true">#</a> 1. 容器内如何挂载其他NFS、SMB等共享？</h3>
<blockquote>
<p>容器内没有<code v-pre>mount</code>指令的权限，请联系服务器管理员进行挂载，将路径映射进容器内。</p>
</blockquote>
<h3 id="_2-如何在容器内挂载iso镜像文件" tabindex="-1"><a class="header-anchor" href="#_2-如何在容器内挂载iso镜像文件" aria-hidden="true">#</a> 2. 如何在容器内挂载ISO镜像文件？</h3>
<blockquote>
<p>使用<code v-pre>fuseiso</code>命令挂载iso，在容器内无法使用<code v-pre>mount</code>指令。</p>
</blockquote>
<h3 id="_3-gpu服务器无法多卡并行-dp、ddp-是什么原因" tabindex="-1"><a class="header-anchor" href="#_3-gpu服务器无法多卡并行-dp、ddp-是什么原因" aria-hidden="true">#</a> 3. GPU服务器无法多卡并行（DP、DDP），是什么原因？</h3>
<blockquote>
<p>应该是服务器BIOS设置的原因，在多卡通信时，在<code v-pre>torch.distributed.barrier()</code>操作上hang了</p>
</blockquote>
<blockquote>
<p>目前解决方案：设置环境变量<code v-pre>NCCL_P2P_LEVEL=NVL</code>，
比如原来是运行脚本的命令是<code v-pre>python main.py</code> 现在就是<code v-pre>NCCL_P2P_LEVEL=NVL python main.py</code></p>
</blockquote>
<h3 id="_4-设置代理后-pip报错error-could-not-install-packages-due-to-an-oserror-missing-depencies-for-socks-support" tabindex="-1"><a class="header-anchor" href="#_4-设置代理后-pip报错error-could-not-install-packages-due-to-an-oserror-missing-depencies-for-socks-support" aria-hidden="true">#</a> 4. 设置代理后，<code v-pre>pip</code>报错<code v-pre>ERROR: Could not install packages due to an OSError: Missing depencies for SOCKS support.</code></h3>
<p>如果你的python环境缺少<code v-pre>pysocks</code>包，就会报错，尤其是使用conda开了一个新的虚拟环境时，缺少很多依赖。</p>
<p>安装我们下载好的<code v-pre>pysocks</code>包:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#如果你使用pip3，那就换成 pip3 install</span>
pip <span class="token function">install</span> ~/nas-resource-linkdata/常用软件/whl/PySocks-1.7.1-py3-none-any.whl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-能否在容器内使用docker" tabindex="-1"><a class="header-anchor" href="#_5-能否在容器内使用docker" aria-hidden="true">#</a> 5. 能否在容器内使用<code v-pre>docker</code>?</h3>
<p>可以使用<code v-pre>docker</code>，容器是可以嵌套的。但是由于管理员使用的容器管理系统的一些原因，里面只能使用普通的docker，无法使用gpu docker。</p>
</div></template>


