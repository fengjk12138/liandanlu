<template><div><div class="hint-container tip">
<p class="hint-container-title">前言</p>
<p>这是一个<strong>快速使用</strong>说明，会略去很多功能和细节，更多功能请阅读全部用户手册。</p>
</div>
<h2 id="登入服务器" tabindex="-1"><a class="header-anchor" href="#登入服务器" aria-hidden="true">#</a> <strong>登入服务器</strong></h2>
<hr>
<p>申请算力之后，管理员会给你容器的<strong>IP、端口、账号、密码</strong>，</p>
<p><strong>IP</strong>一般为域名<code v-pre>位置.liandanlu.cn</code>，账号为<code v-pre>root</code>。</p>
<p>获得账密之后，你需要使用<strong>Xshell</strong>、<strong>xterm</strong>等软件连接，设置正确端口和账密之后就可以通过<code v-pre>ssh协议</code>连接进入容器系统，容器系统默认为<code v-pre>Ubuntu22.04</code>。</p>
<p>容器的使用与环境安装需要有一定的Linux和Shell基础，不会的需要加紧学习，这是基础中的基础。</p>
<figure><img src="@source/Userdocs/fast/img/xhshell1.png" alt="使用Xshell正确设置地址、端口" width="400" height="auto" tabindex="0" loading="lazy"><figcaption>使用Xshell正确设置地址、端口</figcaption></figure>
<figure><img src="@source/Userdocs/fast/img/xhshell2.png" alt="使用Xshell正确设置账密" width="400" height="auto" tabindex="0" loading="lazy"><figcaption>使用Xshell正确设置账密</figcaption></figure>
<hr>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> <strong>注意事项</strong></h2>
<div class="hint-container danger">
<p class="hint-container-title">警告</p>
<p>请认真阅读并执行注意事项，否则会造成<strong>巨大的经济损失与安全隐患</strong>。</p>
<p>实验服务器为多人使用，需要注意与其他人和平共处，并且有一部分使用禁忌，防止物理机损坏。</p>
</div>
<ul>
<li>
<p><strong>禁止使用<code v-pre>gpustat</code>包监视显卡利用率</strong>，会导致容器显卡驱动损坏。</p>
<p><strong>解决方案</strong>：建议使用<a href="https://github.com/XuehaiPan/nvitop" target="_blank" rel="noopener noreferrer"><code v-pre>nvitop</code>包<ExternalLinkIcon/></a>，也十分美观和方便。</p>
<details class="hint-container details"><summary>使用示例</summary>
<p>使用<code v-pre>pip install nvitop</code>或者<code v-pre>pip3 install nvitop</code>安装，然后直接在命令行调用<code v-pre>nvitop</code>即可。</p>
<figure><img src="@source/Userdocs/fast/img/nvitop.png" alt="nvitop的使用界面" tabindex="0" loading="lazy"><figcaption>nvitop的使用界面</figcaption></figure>
</details>
</li>
<li>
<p><strong>不要重新装nvidia显卡驱动</strong>，容器内已经包含驱动，重装会导致容器环境损坏。</p>
<p>可以装<strong>cudnn</strong>和<strong>nvcc</strong>，但是高版本<code v-pre>pytorch</code>已经不需要自己单独装<code v-pre>cudnnn</code>和<code v-pre>cuda</code>，直接复制<a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer">pytorch官网<ExternalLinkIcon/></a>的安装命令即可。</p>
</li>
<li>
<p>可以自行修改容器密码，设置秘钥登录等。但是<strong>禁止使用弱密码</strong>，因为容器对外网开放，会导致病毒入侵。</p>
<details class="hint-container details"><summary>密码说明</summary>
<p><code v-pre>容器密码</code>、<code v-pre>nas密码</code> 这两个密码没有关联，在容器内使用<code v-pre>passwd root</code>命令只能修改容器的登录密码，<em><strong>nas密码不会变</strong></em>。</p>
</details>
</li>
<li>
<p><strong>禁止使用命令<code v-pre>pkill -u root</code></strong>，这个命令会中止root的所有进程，root用户包含很多系统进程，请使用固定的进程号杀死程序，如<code v-pre>kill -9 progress_id</code>。</p>
<p>或者使用<code v-pre>reboot</code>命令<strong>重启容器</strong>，重启解决90%问题。</p>
</li>
</ul>
<hr>
<hr>
<h2 id="使用建议" tabindex="-1"><a class="header-anchor" href="#使用建议" aria-hidden="true">#</a> <strong>使用建议</strong></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>按照推荐方式使用，可以带来使用体验的提升，加快你的实验进度。</p>
</div>
<ul>
<li>
<p>请将重要数据定期备份进入NAS，NAS系统具有很高的容灾恢复能力。 在备份数据进入NAS时，<code v-pre>mv</code>指令有时会报错，可以使用<code v-pre>cp</code>指令。同时删除nas文件时也请检查清楚，防止误删（其实误删也可以恢复，但比较麻烦。）</p>
</li>
<li>
<p>较新型号的GPU需要使用高版本<code v-pre>pytorch</code>，注意代码兼容性问题；</p>
</li>
<li>
<p>20系列以后的GPU使用<a href="https://zhuanlan.zhihu.com/p/408610877" target="_blank" rel="noopener noreferrer">混合精度运算<ExternalLinkIcon/></a>，可以获得很好的加速；</p>
</li>
<li>
<p>将数据集、日志等存放入NAS，不要在本地磁盘存放过多数据，本地磁盘空间有限、安全性低；</p>
</li>
<li>
<p>GPU空闲、CPU不够、有类似硬件错误之类的问题及时报告管理员修复。</p>
</li>
</ul>
<hr>
<hr>
<div class="hint-container warning">
<p class="hint-container-title">🎁请支持本项目发展🎁</p>
<p>有文档不清晰、软硬件问题、网络不通、对项目有兴趣的话都可以联系管理员，既能解决你的问题也能方便未来面对相同问题的人。
fengjk12138 at <a href="http://qq.com" target="_blank" rel="noopener noreferrer">qq.com<ExternalLinkIcon/></a></p>
</div>
</div></template>


