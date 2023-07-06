<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>这是一个<strong>快速使用</strong>文档，会略去很多功能和细节，更多功能和方法可以参考<a href="../../GPUdocs"><strong>详细文档</strong></a></p>
<h2 id="一、-登入服务器" tabindex="-1"><a class="header-anchor" href="#一、-登入服务器" aria-hidden="true">#</a> 一、 登入服务器</h2>
<p>在你申请算力之后，管理员会给你容器的<strong>IP、端口、账号、密码</strong>，其中<strong>IP</strong>一般为我们的域名<code v-pre>位置.liandanlu.cn</code>，账号为<code v-pre>root</code>。</p>
<p>获得账密之后，你需要使用<strong>Xshell</strong>、<strong>xterm</strong>等软件连接，设置正确端口和账密之后就可以通过<code v-pre>ssh协议</code>连接进入容器系统，容器系统默认为<code v-pre>Ubuntu22.04</code>。</p>
<figure><img src="@source/GPUdocs/user/img/xhshell1.png" alt="使用Xshell正确设置地址、端口" tabindex="0" loading="lazy"><figcaption>使用Xshell正确设置地址、端口</figcaption></figure>
<figure><img src="@source/GPUdocs/user/img/xhshell2.png" alt="使用Xshell正确设置账密" tabindex="0" loading="lazy"><figcaption>使用Xshell正确设置账密</figcaption></figure>
<p>容器的使用与环境安装需要有一定的Linux和Shell基础，不会的需要加紧学习，这是基础中的基础。</p>
<h2 id="二、-使用说明" tabindex="-1"><a class="header-anchor" href="#二、-使用说明" aria-hidden="true">#</a> 二、 使用说明</h2>
<p>连接进入容器之后，就可以开始使用服务器。</p>
<p>服务器的物理机一般有8张GPU，但是为了每个人使用方便、防止抢占、环境隔离、权限管理，我们使用<strong>容器技术</strong>来隔离每个人的使用环境，并且为每个容器分配固定数量的GPU和CPU线程。</p>
<blockquote>
<p>容器技术一项伟大的发明，可以简单理解为虚拟机，在系统层面隔离每个人的使用环境，并且可以将容器打包、迁移、复制，实现每个人环境可以在不同计算机上的准确复现。详情可以了解<code v-pre>docker</code>、<code v-pre>liunxcontainer(lxc)</code>技术。</p>
</blockquote>
<ul>
<li>
<p>整个容器中的系统只属于使用者本人，可以任意重启、任意配置环境、任意修改，不用担心影响他人；</p>
</li>
<li>
<p>容器内也有与他人公用的资源，比如GPU与NAS存储。NAS存储详见<a href="https://docs.heartbreaker.icu/GPUdocs/" target="_blank" rel="noopener noreferrer">详细文档<ExternalLinkIcon/></a>，下文主要介绍GPU分配；</p>
</li>
</ul>
<blockquote>
<p><code v-pre>nas-public-linkdata</code>，<code v-pre>nas-public-tju</code>等目录为NAS目录，为方便用户使用而设立，具有极大的作用，详情了解<a href="https://docs.heartbreaker.icu/NASdocs/user" target="_blank" rel="noopener noreferrer">NAS文档<ExternalLinkIcon/></a>。</p>
</blockquote>
<ul>
<li>
<p>在容器名一般由<code v-pre>服务器名-人名</code>组成，比如<code v-pre>mars-huanghansheng</code>，在给管理员报告使用问题时，需要说清楚是哪台服务器的哪个容器出现问题，需要报告清楚<code v-pre>容器名</code>；</p>
</li>
<li>
<p>服务器上网与翻墙方式在不同地点有不同配置方式，见详细文档。</p>
</li>
</ul>
<h3 id="gpu分配原则" tabindex="-1"><a class="header-anchor" href="#gpu分配原则" aria-hidden="true">#</a> GPU分配原则</h3>
<p>由于物理机有8张GPU，同时分配给所有人会导致严重的抢占，因此我们使用容器进行资源控制，每个人的容器只能访问一部分GPU。</p>
<p>为每个人分配的GPU中，会包含<strong>独占卡</strong>和<strong>共享卡</strong>。</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>独占卡只有你能访问到，不会有其他人占用，防止抢占；</p>
<p>共享卡是为了提高显卡利用率，防止资源浪费。</p>
<p>每个人申请算力的时候可以根据自己的课题特点来申请资源，如确实需要长时间高频次占用显卡，那就申请多独占卡；自己使用的不太频繁，可以申请共享卡，共享卡的数量一般比较多。</p>
</div>
<figure><img src="@source/GPUdocs/user/img/GPU分配.png" alt="某台服务器的GPU分配示例" tabindex="0" loading="lazy"><figcaption>某台服务器的GPU分配示例</figcaption></figure>
<p>GPU可以细分到单人，如在<code v-pre>黄汉升</code>的容器内<code v-pre>nvidia-smi</code>，只能看到4张显卡</p>
<figure><img src="@source/GPUdocs/user/img/nvidia-smi.png" alt="8卡机器里，只能看到4张显卡" tabindex="0" loading="lazy"><figcaption>8卡机器里，<code v-pre>nvidia-smi</code>只能看到4张显卡</figcaption></figure>
<h2 id="三、-注意事项" tabindex="-1"><a class="header-anchor" href="#三、-注意事项" aria-hidden="true">#</a> 三、 注意事项</h2>
<div class="hint-container danger">
<p class="hint-container-title">警告</p>
<p>请认真阅读并执行注意事项，否则会造成巨大的经济损失与安全隐患。</p>
</div>
<p>实验服务器为多人使用，需要注意与其他人和平共处，并且有一部分使用禁忌，防止物理机损坏。</p>
<ul>
<li>不要使用<code v-pre>gpustat</code>包监视显卡利用率，会导致显卡驱动损坏，建议使用<a href="https://github.com/XuehaiPan/nvitop" target="_blank" rel="noopener noreferrer"><code v-pre>nvitop</code>包<ExternalLinkIcon/></a>，也十分美观和方便。
使用<code v-pre>pip install nvitop</code>或者<code v-pre>pip3 install nvitop</code>安装，然后直接在命令行调用<code v-pre>nvitop</code>即可。</li>
</ul>
<figure><img src="@source/GPUdocs/user/img/nvitop.png" alt="nvitop的使用界面" tabindex="0" loading="lazy"><figcaption>nvitop的使用界面</figcaption></figure>
<ul>
<li>
<p><strong>不要重新装nvidia显卡驱动</strong>，容器内已经包含驱动，重装会导致容器环境损坏。
可以装<strong>cudnn</strong>和<strong>nvcc</strong>，但是高版本<code v-pre>pytorch</code>已经不需要自己单独装<code v-pre>cudnnn</code>这些的，直接复制<a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer">pytorch官网<ExternalLinkIcon/></a>安装命令即可。</p>
</li>
<li>
<p>可以自行修改容器密码，设置秘钥登录等。但是<strong>禁止使用弱密码</strong>，因为容器对外网开放，会导致病毒入侵。</p>
</li>
<li>
<p>禁止使用命令<code v-pre>pkill -u root</code>，这个命令会中止root的所有进程，root用户包含很多系统进程，请使用固定的进程号杀死程序，如<code v-pre>kill -9 progress_id</code>。</p>
</li>
</ul>
<h2 id="四、-使用建议" tabindex="-1"><a class="header-anchor" href="#四、-使用建议" aria-hidden="true">#</a> 四、 使用建议</h2>
<ul>
<li>
<p>请经常将数据备份进入NAS。 在备份数据进入NAS时，<code v-pre>mv</code>指令有时会报错，可以使用<code v-pre>cp</code>指令。同时删除nas文件时也请检查清楚，防止误删（其实误删也可以恢复，但比较麻烦。）</p>
</li>
<li>
<p>较新型号的GPU需要使用高版本<code v-pre>pytorch</code>，注意代码兼容性问题</p>
</li>
<li>
<p>20系列以后的GPU使用混合精度运算，可以获得很好的加速</p>
</li>
<li>
<p>GPU空闲、CPU不够、有类似硬件错误之类的问题及时报告管理员修复。</p>
</li>
</ul>
</div></template>


