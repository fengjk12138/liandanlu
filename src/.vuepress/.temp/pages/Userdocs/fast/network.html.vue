<template><div><h2 id="两地网络状况" tabindex="-1"><a class="header-anchor" href="#两地网络状况" aria-hidden="true">#</a> 两地网络状况</h2>
<div class="hint-container tip">
<p class="hint-container-title">链数服务器</p>
<p>链数服务器可以直接上网，但是对于安装国外软件较慢的情况，我们提供了一些解决方案，<strong>通过代理加速外国资源访问</strong>。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">校内服务器</p>
<p>校内服务器无法直接上网，只能正确配置代理之后才能上网。</p>
</div>
<blockquote>
<p>本文的很多内容和<RouterLink to="/Userdocs/fast/environment.html">上一节</RouterLink>重叠，本文给出了一些解释和更简便的方法。</p>
</blockquote>
<p>我们使用上网方式，称为“代理”或者“代理上网”。</p>
<div class="hint-container info">
<p class="hint-container-title">代理上网原理（翻墙原理）</p>
<p><strong>现状</strong>：我们需要访问网站Web <a href="https://google.com:443" target="_blank" rel="noopener noreferrer">https://google.com:443<ExternalLinkIcon/></a>，但是
机器A（服务器）无法访问Web，机器B（代理服务器）可以访问Web。</p>
<p>机器A和机器B可以互相访问。</p>
<p><strong>需求</strong>：使机器A可以访问网站Web。</p>
<p><strong>做法</strong>：机器A把自己需要访问的网站发送给机器B，让机器B访问网站Web，并将访问结果传送给A。</p>
<p>我们使用<code v-pre>export</code>导入环境变量，然后命令行程序会把自己的访问请求转发给环境变量，让环境变量的服务器代为访问。</p>
<figure><img src="@source/Userdocs/fast/img/proxy-show.jpg" alt="代理上网的原理，请求链接的转发过程" tabindex="0" loading="lazy"><figcaption>代理上网的原理，请求链接的转发过程</figcaption></figure>
<p><strong>代理服务器</strong>：<code v-pre>proxy.xxx.liandanlu.cn</code>地址所对应的电脑在校内A417房间或者链数的Windows下载机。</p>
</div>
<!-- ## 代理上网
根据需要加速的命令不同，配置方法也不同。

### **1. 国内资源访问**
- 链数机器可以自由访问国内网站，如gitee等资源。不需要做任何操作，不过在使用代理后，访问国内的网站可能会有影响，详情请阅读下一节。

- 校内服务器无法直接上网，请按照不同命令的区分

### **2. 国外资源加速**
>可以加速的命令包括: `pip`， `git clone`，`conda`、`wandb`、`wget`、`curl`等

- 设置环境变量`ALL_PROXY`，`HTTPS_PROXY`，`HTTP_PROXY`:
```shell 
export ALL_PROXY=socks5://proxy.linkdata.liandanlu.cn:10808
export HTTPS_PROXY=http://proxy.linkdata.liandanlu.cn:10809
export HTTP_PROXY=http://proxy.linkdata.liandanlu.cn:10809
```

- 之后使用这些命令就可以加速。

![使用代理`git clone`前后速度变化](./img/proxy.png)


:::info 解释
其中，`socks5`、`http`为通信协议；`proxy.linkdata.liandanlu.cn`为代理机（机器B）的IP地址；`10808`、`10809`为机器B接受信息的端口。
:::

### **3. 特殊命令的加速**

- **`apt`、`apt-get`命令**：参考[上一节](./environment.md)

- **`docker`命令**：参考搜索引擎

- **其他命令如何配置**：
如果你的命令不在上述列表之中，那么需要在谷歌中搜索`xxx如何设置代理`。
 -->
<hr>
<h2 id="通用的简便的配置方法" tabindex="-1"><a class="header-anchor" href="#通用的简便的配置方法" aria-hidden="true">#</a> <mark>通用的简便的配置方法</mark></h2>
<ul>
<li>
<p>在<code v-pre>~/.bashrc</code>文件中增加以下内容：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">set_proxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">HTTP_PROXY</span><span class="token operator">=</span>http://proxy.linkdata.liandanlu.cn:10809
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">HTTPS_PROXY</span><span class="token operator">=</span><span class="token variable">$HTTP_PROXY</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">ALL_PROXY</span><span class="token operator">=</span>socks5://proxy.linkdata.liandanlu.cn:10808
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span><span class="token variable">$HTTP_PROXY</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">https_proxy</span><span class="token operator">=</span><span class="token variable">$HTTP_PROXY</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">all_proxy</span><span class="token operator">=</span><span class="token variable">$ALL_PROXY</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function-name function">unset_proxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin class-name">unset</span> HTTP_PROXY
    <span class="token builtin class-name">unset</span> HTTPS_PROXY
    <span class="token builtin class-name">unset</span> ALL_PROXY
    <span class="token builtin class-name">unset</span> http_proxy
    <span class="token builtin class-name">unset</span> https_proxy
    <span class="token builtin class-name">unset</span> all_proxy
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后运行：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>然后<strong>需要使用代理时</strong>，在命令行输入</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>set_proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>之后再使用<code v-pre>pip</code>，<code v-pre>git clone</code>，<code v-pre>wget</code>，<code v-pre>conda</code>，<code v-pre>wandb</code>，<code v-pre>curl</code>等命令就可连接代理服务器实现加速了。</p>
</li>
<li>
<p><strong>取消使用代理时</strong>，命令行输入</p>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>unset_proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<ul>
<li>
<p>如果你得服务器在校内，请注意替换字符串中的<code v-pre>linkdata</code>为<code v-pre>tju</code>。</p>
</li>
<li>
<p><code v-pre>set_proxy</code>也只对调用他的terminal有效。</p>
</li>
<li>
<p>检查<code v-pre>set_proxy</code>是否成功的方法为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token variable">$https_proxy</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果设置成功，则会有<code v-pre>http://xxxx</code>的输出。</p>
</li>
</ul>
</div>
<hr>
<h2 id="使用代理时的问题说明" tabindex="-1"><a class="header-anchor" href="#使用代理时的问题说明" aria-hidden="true">#</a> <strong>使用代理时的问题说明</strong></h2>
<ul>
<li>
<p><code v-pre>conda</code>时报错<code v-pre>OSError</code>，确实应有的包</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ERROR: Could not install packages due to an OSError: Missing depencies for SOCKS support.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>解决方法</strong>：安装<code v-pre>pysocks</code>包，在nas中有存放：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> ~/nas-resource-linkdata/常用软件/whl/PySocks-1.7.1-py3-none-any.whl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>apt</code>等命令无法代理，<code v-pre>set_proxy</code>后依然无法联网。</p>
<p><strong>原因</strong>：<code v-pre>apt</code>等命令有时无法直接调用环境变量，需要我们手动设置。</p>
<p><strong>解决方法</strong>：与上一节的方法相同，在命令后手动导入</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update <span class="token parameter variable">-o</span> Acquire::http::proxy<span class="token operator">=</span><span class="token variable">$HTTPS_PROXY</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以自己去搜索，修改<code v-pre>apt</code>配置文件，实现永久代理。</p>
</li>
<li>
<p><strong>更多其他命令的代理问题需要进行搜索，查看这个命令如何使用代理，将教程中的代理地址替换为我们的代理地址即可。</strong></p>
</li>
<li>
<p>更极端的解决办法，请搜索<code v-pre>ssh隧道上网</code>，将网络请求转发到自己电脑上。</p>
</li>
</ul>
</div></template>


