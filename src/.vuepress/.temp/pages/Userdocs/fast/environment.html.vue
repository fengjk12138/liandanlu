<template><div><div class="hint-container tip">
<p class="hint-container-title">前言</p>
<p>本节将介绍如何配置conda环境和pytorch环境。包含如何进行国外资源加速。</p>
<p>更多的内容在网络篇，这里只是很简单的讲解。</p>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>链数可以使用代理的方法来加速外国资源，校内机器就必须使用代理才能上网。</p>
<p>在校内情况下，记得把代理地址中的<code v-pre>linkdata</code>换成<code v-pre>tju</code>。</p>
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
<li>
<p><mark>安装完Anaconda后，请重新开一个terminal，以启动你的conda<code v-pre>base</code>环境。</mark>
否则你会发现pip指令not found。</p>
</li>
</ul>
<h2 id="pytorch安装" tabindex="-1"><a class="header-anchor" href="#pytorch安装" aria-hidden="true">#</a> PyTorch安装</h2>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>现在pytorch已经不需要单独安装cuda、cudnn等库就可以完美运行了，直接复制官网命令即可。</p>
<p>本方法也可以加速<code v-pre>pip</code>，<code v-pre>conda</code>，<code v-pre>wget</code>，<code v-pre>wandb</code>，<code v-pre>git clone</code>、<code v-pre>wget</code>、<code v-pre>curl</code>等命令。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">外网加速</p>
<p>由于下载国外资源缓慢，甚至断连，详情外网加速可以查看<RouterLink to="/Userdocs/fast/network.html">网络章节</RouterLink>，这里只介绍conda的加速方式。</p>
</div>
<ul>
<li>
<p>导入<code v-pre>$HTTPS_PROXY</code>环境变量，使用翻墙/代理来加速conda</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">HTTPS_PROXY</span><span class="token operator">=</span>http://proxy.linkdata.liandanlu.cn:10809
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>注意：<code v-pre>export</code>命令是导入环境变量，只对输入他的terminal有效，对于其他新开的terminal无效；因此<code v-pre>export</code>命令和<code v-pre>conda</code>安装命令必须在同一个terminal上执行。</p>
</blockquote>
<blockquote>
<p>检测是否设置成功，使用<code v-pre>echo $HTTPS_PROXY</code>命令，查看是否有代理网址内容输出。</p>
</blockquote>
</li>
<li>
<p>创建名为<code v-pre>pytorch</code>的虚拟环境，防止环境冲突，隔离base环境与实验环境</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>conda create <span class="token parameter variable">--name</span> pytorch <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>进入虚拟环境安装pytorch：</p>
<ul>
<li>进入自己创建的虚拟环境</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>conda activate pytorch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>登录<a href="https://pytorch.org/get-started/previous-versions/" target="_blank" rel="noopener noreferrer">PyTorch下载页面<ExternalLinkIcon/></a>，选择合适的版本，然后复制其安装命令即可：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 下面以1.13.1版本为例</span>
conda <span class="token function">install</span> <span class="token assign-left variable">pytorch</span><span class="token operator">==</span><span class="token number">1.13</span>.1 <span class="token assign-left variable">torchvision</span><span class="token operator">==</span><span class="token number">0.14</span>.1 <span class="token assign-left variable">torchaudio</span><span class="token operator">==</span><span class="token number">0.13</span>.1 pytorch-cuda<span class="token operator">=</span><span class="token number">11.7</span> <span class="token parameter variable">-c</span> pytorch <span class="token parameter variable">-c</span> nvidia
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>测试pytorch是否可以使用显卡:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># python</span>
<span class="token operator">></span>import torch
<span class="token operator">></span>torch.cuda.is_available<span class="token punctuation">(</span><span class="token punctuation">)</span>
输出True表示可以，False表示不行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
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
<h2 id="apt安装应用" tabindex="-1"><a class="header-anchor" href="#apt安装应用" aria-hidden="true">#</a> apt安装应用</h2>
<blockquote>
<p><code v-pre>apt</code>和<code v-pre>apt-get</code>的加速方法是一样。下面将以<code v-pre>apt</code>来举例，自己把命令进行替换就行。</p>
</blockquote>
<ul>
<li>设置代理的环境变量：<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">HTTPS_PROXY</span><span class="token operator">=</span>http://proxy.linkdata.liandanlu.cn:10809
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>让<code v-pre>apt</code>经过代理安装软件：<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> xxxxxx <span class="token parameter variable">-o</span> Acquire::http::proxy<span class="token operator">=</span><span class="token variable">$HTTPS_PROXY</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container note">
<p class="hint-container-title">注</p>
<p>如果你的报了404 not found之类的的错误，可以试试先使用update命令更新软件源</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update <span class="token parameter variable">-o</span> Acquire::http::proxy<span class="token operator">=</span><span class="token variable">$HTTPS_PROXY</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
</li>
</ul>
<blockquote>
<p>同上，<code v-pre>export</code>只对输入他的terminal有效。</p>
</blockquote>
<h2 id="docker使用" tabindex="-1"><a class="header-anchor" href="#docker使用" aria-hidden="true">#</a> docker使用</h2>
<blockquote>
<p>目前只能使用普通的docker，无法使用gpu docker。</p>
</blockquote>
<hr>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>可以看到，确实较麻烦。可以看看<RouterLink to="/Userdocs/fast/network.html">网络篇</RouterLink>的内容。</p>
</div>
</div></template>


