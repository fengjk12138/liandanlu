<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<blockquote>
<p>魔法上网所使用的的原理是<code v-pre>代理</code>，即通过https加密让<code v-pre>代理服务器</code>代为请求所需国外资源以加速访问，可以在<a href="https://www.v2fly.org/" target="_blank" rel="noopener noreferrer">Project V<ExternalLinkIcon/></a>中了解更多。目前的代理服务器为服务器管理员搭建。</p>
</blockquote>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>代理地址和命令可能会发生变化，请关注文档变更和管理员通知。</p>
</div>
<h2 id="链数服务器网络" tabindex="-1"><a class="header-anchor" href="#链数服务器网络" aria-hidden="true">#</a> 链数服务器网络</h2>
<h3 id="_1-国内资源访问" tabindex="-1"><a class="header-anchor" href="#_1-国内资源访问" aria-hidden="true">#</a> 1. 国内资源访问</h3>
<p>链数机器可以自由访问国内网站，如gitee等资源。不需要做任何操作，不过在使用代理后，访问国内的网站可能会有影响，详情请阅读下一节。</p>
<h3 id="_2-国外资源加速-pip-git-clone-apt等" tabindex="-1"><a class="header-anchor" href="#_2-国外资源加速-pip-git-clone-apt等" aria-hidden="true">#</a> 2. 国外资源加速（<code v-pre>pip</code>， <code v-pre>git clone</code>，<code v-pre>apt</code>等）</h3>
<blockquote>
<p>基本上所有网络命令都能被代理，包括<code v-pre>conda</code>、<code v-pre>wandb</code>、<code v-pre>wget</code>等
因此我们不需要在机器上换源，用最新的国外版就行。</p>
</blockquote>
<p>由于懂的都懂的原因，在国内请求国外资源比较慢，甚至无法访问，因此需要设置代理服务器。</p>
<ul>
<li>在链数的GPU服务器内，开启一个终端<code v-pre>terminal</code>之后，输入下面命令，即可使用socks代理上网：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ALL_PROXY</span><span class="token operator">=</span>socks5://192.168.22.54:10808
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令的含义是导入一个临时环境变量<code v-pre>ALL_PROXY</code>。按照正常程序设计标准，linux程序上网时会检查这个环境变量，来判断是否走网络代理。</p>
<p>在导入变量之后，这个terminal的所有命令就会走socks代理（翻墙），以加速资源下载。</p>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>这个命令只影响运行这个export命令的terminal，不影响其他终端，因为这样导入的环境变量是临时的，更多trick可以学习Linux环境变量知识。</p>
</div>
<figure><img src="@source/GPUdocs/user/img/proxy.png" alt="使用代理前后速度变化" tabindex="0" loading="lazy"><figcaption>使用代理<code v-pre>git clone</code>前后速度变化</figcaption></figure>
<p>但也有程序不遵守标准协议，不走socks代理，走http、https代理，或者检查小写环境变量，解决方法参考总结。</p>
<ul>
<li>特殊情况
<ul>
<li><code v-pre>wget</code>，<code v-pre>curl</code>命令不走socks代理</li>
<li><code v-pre>wandb</code>不走socks代理</li>
</ul>
</li>
</ul>
<p>对于不走socks代理的情况，需要设置<code v-pre>http</code>，<code v-pre>https</code>代理，命令如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">HTTP_PROXY</span><span class="token operator">=</span>http://192.168.22.54:10809
<span class="token builtin class-name">export</span> <span class="token assign-left variable">HTTPS_PROXY</span><span class="token operator">=</span>http://192.168.22.54:10809
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>python在<code v-pre>pip</code>的时候，也可以走socks代理，但是需要具备<code v-pre>pysocks</code>包，否则会报错.(<strong>尤其是使用conda开了一个新的虚拟环境时，缺少很多依赖。</strong>)</li>
</ul>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>ERROR: Could not install packages due to an OSError: Missing depencies for SOCKS support.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以使用下面的命令来安装下载好的<code v-pre>pysocks</code>包：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#如果你使用pip3，那就换成 pip3 install</span>
pip <span class="token function">install</span> ~/nas-resource-linkdata/software/PySocks-1.7.1-py3-none-any.whl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装<code v-pre>PySocks</code>包之后，你就可以设置<code v-pre>ALL_PROXY</code>环境变量，开心的使用代理加速你的pip安装了。</p>
<ul>
<li><strong>总结如下，建议使用如下方法批量设置代理，解决特殊情况</strong></li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>建议在<code v-pre>.bashrc</code>文件中增加以下内容：</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样在命令行内调用命令<code v-pre>set_proxy</code>之后，即可应对所有代理情况；使用<code v-pre>unset_proxy</code>命令即可解除代理。</p>
</div>
<h3 id="_3-网盘-外网资源下载" tabindex="-1"><a class="header-anchor" href="#_3-网盘-外网资源下载" aria-hidden="true">#</a> 3. 网盘/外网资源下载</h3>
<p>由于很多数据位于百度网盘或者国外网页中，我们也提供了下载方式。</p>
<p>使用向日葵连接进入一台Windows电脑，电脑中已经启动了梯子和百度网盘（也有迅雷和阿里盘之类的）。使用Windows电脑下载资源</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>向日葵的Windows内的百度网盘已经买了会员，可以高速下载，<strong>平常自己下载其他网络资源也可以通过向日葵内的网盘下载，不需要再去要手机验证码</strong>。</p>
<p>向日葵账号： ******</p>
<p>向日葵密码： ******</p>
<p>隐去的账密请在内部文档内查找。</p>
</div>
<p>这台Windows电脑也与NAS相连，将下载文件拖入NAS即可。</p>
<p>这样，你的本地电脑和GPU服务器都可以访问到文件。</p>
</div></template>


