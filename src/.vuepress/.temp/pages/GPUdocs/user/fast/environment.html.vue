<template><div><div class="hint-container tip">
<p class="hint-container-title">前言</p>
<p>本节将介绍如何配置conda环境和pytorch环境。包含如何进行国外资源加速。</p>
<p>更多的内容在网络篇，这里只是很简单的讲解。</p>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>链数可以使用代理的方法来加速外国资源，校内机器就必须使用代理才能上网。</p>
</div>
</div>
<h2 id="anaconda安装" tabindex="-1"><a class="header-anchor" href="#anaconda安装" aria-hidden="true">#</a> Anaconda安装</h2>
<ul>
<li>
<p>如果你不挑剔版本，可以使用使用NAS中下载好的Anaconda</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#在这个文件夹下下载了几个版本的Anaconda，可以自己选择安装</span>
<span class="token builtin class-name">cd</span> ~/nas-resource-linkdata/常用软件/anaconda
<span class="token function">bash</span> Anaconda3-2023.03-Linux-x86_64.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>如果你需要特定版本，那么自己去网上下载，然后上传到服务器，之后安装。</p>
<blockquote>
<p>如果下载速度过慢，可以使用<strong>向日葵下载机</strong>下载，上面有开梯子。</p>
</blockquote>
</li>
</ul>
<h2 id="pytorch安装" tabindex="-1"><a class="header-anchor" href="#pytorch安装" aria-hidden="true">#</a> PyTorch安装</h2>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>现在pytorch已经不需要单独安装cuda、cudnn等库就可以完美运行了，直接复制官网命令即可。</p>
</div>
<ul>
<li>登录<a href="https://pytorch.org/get-started/previous-versions/" target="_blank" rel="noopener noreferrer">PyTorch下载页面<ExternalLinkIcon/></a>，选择合适的版本，然后复制其安装命令即可：<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 下面以1.13.1版本为例</span>
conda <span class="token function">install</span> <span class="token assign-left variable">pytorch</span><span class="token operator">==</span><span class="token number">1.13</span>.1 <span class="token assign-left variable">torchvision</span><span class="token operator">==</span><span class="token number">0.14</span>.1 <span class="token assign-left variable">torchaudio</span><span class="token operator">==</span><span class="token number">0.13</span>.1 pytorch-cuda<span class="token operator">=</span><span class="token number">11.7</span> <span class="token parameter variable">-c</span> pytorch <span class="token parameter variable">-c</span> nvidia
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">外网加速</p>
<p>由于下载国外资源缓慢，甚至断连，详情外网加速可以查看网络章节，这里只介绍conda的加速方式。
设置。</p>
<ul>
<li>
<p>安装pysocks包</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#如果你使用pip3，那就换成 pip3 install</span>
pip <span class="token function">install</span> ~/nas-resource-linkdata/常用软件/whl/PySocks-1.7.1-py3-none-any.whl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>设置socks5代理https代理</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ALL_PROXY</span><span class="token operator">=</span>socks5://proxy.liandanlu.cn:10808
<span class="token builtin class-name">export</span> <span class="token assign-left variable">HTTPS_PROXY</span><span class="token operator">=</span>http://proxy.liandanlu.cn:10809
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>之后使用conda安装pytorch就可以受到梯子加速。</p>
</li>
</ul>
<blockquote>
<p>注意：<code v-pre>export</code>命令是导入环境变量，只对输入他的terminal有效，对于其他terminal无效；因此<code v-pre>export</code>命令和<code v-pre>conda</code>安装命令必须在同一个terminal上。</p>
</blockquote>
</div>
<h2 id="apt安装应用" tabindex="-1"><a class="header-anchor" href="#apt安装应用" aria-hidden="true">#</a> apt安装应用</h2>
<blockquote>
<p><code v-pre>apt</code>和<code v-pre>apt-get</code>的加速方法是一样。下面将以<code v-pre>apt</code>来举例，自己把命令进行替换就行。</p>
</blockquote>
<ul>
<li>设置代理的环境变量：<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">HTTPS_PROXY</span><span class="token operator">=</span>http://proxy.liandanlu.cn:10809
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>让<code v-pre>apt</code>经过代理安装软件：<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> xxxxxx <span class="token parameter variable">-o</span> Acquire::http::proxy<span class="token operator">=</span><span class="token variable">$HTTPS_PROXY</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<blockquote>
<p>如果你能看懂这个命令的原理，两个命令可以缩短成一个命令。</p>
</blockquote>
<blockquote>
<p>同上，<code v-pre>export</code>只对输入他的terminal有效。</p>
</blockquote>
<h2 id="docker使用" tabindex="-1"><a class="header-anchor" href="#docker使用" aria-hidden="true">#</a> docker使用</h2>
<blockquote>
<p>目前只能使用普通的docker，无法使用gpu docker。</p>
</blockquote>
</div></template>


