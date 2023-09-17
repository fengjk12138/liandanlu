<template><div><h2 id="两地网络状况" tabindex="-1"><a class="header-anchor" href="#两地网络状况" aria-hidden="true">#</a> 两地网络状况</h2>
<div class="hint-container tip">
<p class="hint-container-title">链数服务器</p>
<p>链数服务器可以直接上网，但是对于安装国外软件较慢的情况，我们提供了一些解决方案，<strong>通过代理加速外国资源访问</strong>。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">校内服务器</p>
<p>校内服务器无法直接上网，只能正确配置代理之后才能上网。</p>
</div>
<p>我们使用上网方式，称为“代理”或者“代理上网”。</p>
<div class="hint-container info">
<p class="hint-container-title">代理上网原理</p>
<p><strong>现状</strong>：我们需要访问网站Web <a href="https://google.com:443" target="_blank" rel="noopener noreferrer">https://google.com:443<ExternalLinkIcon/></a>
机器A（服务器）无法访问Web，机器B（代理服务器）可以访问Web。</p>
<p>机器A和机器B可以互相访问。</p>
<p><strong>需求</strong>：使机器A可以访问网站Web。</p>
<p><strong>做法</strong>：机器A把自己需要访问的网站发送给机器B，让机器B访问网站Web，并将访问结果传送给A。</p>
</div>
<h2 id="代理上网" tabindex="-1"><a class="header-anchor" href="#代理上网" aria-hidden="true">#</a> 代理上网</h2>
<p>根据需要加速的命令不同，配置方法也不同。</p>
<h3 id="_1-国内资源访问" tabindex="-1"><a class="header-anchor" href="#_1-国内资源访问" aria-hidden="true">#</a> <strong>1. 国内资源访问</strong></h3>
<ul>
<li>
<p>链数机器可以自由访问国内网站，如gitee等资源。不需要做任何操作，不过在使用代理后，访问国内的网站可能会有影响，详情请阅读下一节。</p>
</li>
<li>
<p>校内服务器无法直接上网，请按照不同命令的区分</p>
</li>
</ul>
<h3 id="_2-国外资源加速" tabindex="-1"><a class="header-anchor" href="#_2-国外资源加速" aria-hidden="true">#</a> <strong>2. 国外资源加速</strong></h3>
<blockquote>
<p>可以加速的命令包括: <code v-pre>pip</code>， <code v-pre>git clone</code>，<code v-pre>conda</code>、<code v-pre>wandb</code>、<code v-pre>wget</code>、<code v-pre>curl</code>等</p>
</blockquote>
<ul>
<li>设置环境变量<code v-pre>ALL_PROXY</code>，<code v-pre>HTTPS_PROXY</code>，<code v-pre>HTTP_PROXY</code>:</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ALL_PROXY</span><span class="token operator">=</span>socks5://192.168.22.54:10808
<span class="token builtin class-name">export</span> <span class="token assign-left variable">HTTPS_PROXY</span><span class="token operator">=</span>http://192.168.22.54:10809
<span class="token builtin class-name">export</span> <span class="token assign-left variable">HTTP_PROXY</span><span class="token operator">=</span>http://192.168.22.54:10809
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>之后使用这些命令就可以加速。</li>
</ul>
<figure><img src="@source/GPUdocs/user/img/proxy.png" alt="使用代理前后速度变化" tabindex="0" loading="lazy"><figcaption>使用代理<code v-pre>git clone</code>前后速度变化</figcaption></figure>
<div class="hint-container info">
<p class="hint-container-title">解释</p>
<p>其中，<code v-pre>socks5</code>为通信协议；<code v-pre>192.168.22.54</code>为代理机（机器B）的IP地址；<code v-pre>10808</code>、<code v-pre>10809</code>为机器B接受信息的端口。</p>
</div>
<h3 id="_3-特殊命令的加速" tabindex="-1"><a class="header-anchor" href="#_3-特殊命令的加速" aria-hidden="true">#</a> <strong>3. 特殊命令的加速</strong></h3>
<ul>
<li>
<p><strong><code v-pre>apt</code>、<code v-pre>apt-get</code>命令</strong>：</p>
</li>
<li>
<p><strong><code v-pre>docker</code>命令</strong>：</p>
</li>
<li>
<p><strong>其他命令如何配置</strong>：
如果你的命令不在上述列表之中，那么需要在谷歌中搜索<code v-pre>xxx如何设置代理</code>。</p>
</li>
</ul>
<hr>
<h3 id="_4-通用的简便的配置方法" tabindex="-1"><a class="header-anchor" href="#_4-通用的简便的配置方法" aria-hidden="true">#</a> <mark>4. 通用的简便的配置方法</mark></h3>
<ul>
<li>在<code v-pre>~/.bashrc</code>文件中增加以下内容：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">set_proxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">HTTP_PROXY</span><span class="token operator">=</span>http://192.168.22.54:10809
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">HTTPS_PROXY</span><span class="token operator">=</span><span class="token variable">$HTTP_PROXY</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">ALL_PROXY</span><span class="token operator">=</span>socks5://192.168.22.54:10808
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>然后<strong>需要使用代理时</strong>，在命令行输入</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>set_proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


