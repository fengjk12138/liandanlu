<template><div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>按照之前说的功能，本文将会介绍<strong>不同终端如何挂载和使用nas</strong>。</p>
</div>
<h1 id="nas的目录结构" tabindex="-1"><a class="header-anchor" href="#nas的目录结构" aria-hidden="true">#</a> <strong>nas的目录结构</strong></h1>
<p>类似大U盘，他的目录如下：</p>
<p>nas里有两个目录：<code v-pre>public</code>，<code v-pre>resource</code>。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>┌ public
| |-huanghansheng
| |-zhangyide
| |-guanyunchang
| |...
├ resource
| |-ImageNet1k
| |-COCO
| |-VOC2017
| |...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>public</code>目录为每个人存放数据的目录，用使用拼音命名；</li>
<li><code v-pre>resource</code>目录为存放数据集的目录，方便大家公用数据集；</li>
</ul>
<blockquote>
<p>注：<code v-pre>private</code>目录因为权限问题已经移除（可能以后会添加回来）。</p>
</blockquote>
<h2 id="容器端-必读、重点" tabindex="-1"><a class="header-anchor" href="#容器端-必读、重点" aria-hidden="true">#</a> <mark>容器端（必读、重点）</mark></h2>
<p>在容器内，管理员已经为你挂载好了nas。</p>
<p>展示格式为：<code v-pre>nas的目录</code> <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mover><mo stretchy="true" minsize="3.0em">→</mo><mpadded width="+0.6em" lspace="0.3em"><mtext>对应</mtext></mpadded></mover></mrow><annotation encoding="application/x-tex">\xrightarrow{对应}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1113em;vertical-align:-0.011em;"></span><span class="mrel x-arrow"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.1003em;"><span style="top:-3.322em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight x-arrow-pad"><span class="mord mtight"><span class="mord cjk_fallback mtight">对应</span></span></span></span><span class="svg-align" style="top:-2.689em;"><span class="pstrut" style="height:2.7em;"></span><span class="hide-tail" style="height:0.522em;min-width:1.469em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='0.522em' viewBox='0 0 400000 522' preserveAspectRatio='xMaxYMin slice'><path d='M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.011em;"><span></span></span></span></span></span></span></span></span> <code v-pre>容器内的目录</code>：</p>
<p><code v-pre>public/人名</code><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mover><mo stretchy="true" minsize="3.0em">→</mo><mpadded width="+0.6em" lspace="0.3em"><mtext>对应</mtext></mpadded></mover></mrow><annotation encoding="application/x-tex">\xrightarrow{对应}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1113em;vertical-align:-0.011em;"></span><span class="mrel x-arrow"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.1003em;"><span style="top:-3.322em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight x-arrow-pad"><span class="mord mtight"><span class="mord cjk_fallback mtight">对应</span></span></span></span><span class="svg-align" style="top:-2.689em;"><span class="pstrut" style="height:2.7em;"></span><span class="hide-tail" style="height:0.522em;min-width:1.469em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='0.522em' viewBox='0 0 400000 522' preserveAspectRatio='xMaxYMin slice'><path d='M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.011em;"><span></span></span></span></span></span></span></span></span> <code v-pre>/root/nas-public-位置</code></p>
<p><code v-pre>public</code><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mover><mo stretchy="true" minsize="3.0em">→</mo><mpadded width="+0.6em" lspace="0.3em"><mtext>对应</mtext></mpadded></mover></mrow><annotation encoding="application/x-tex">\xrightarrow{对应}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1113em;vertical-align:-0.011em;"></span><span class="mrel x-arrow"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.1003em;"><span style="top:-3.322em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight x-arrow-pad"><span class="mord mtight"><span class="mord cjk_fallback mtight">对应</span></span></span></span><span class="svg-align" style="top:-2.689em;"><span class="pstrut" style="height:2.7em;"></span><span class="hide-tail" style="height:0.522em;min-width:1.469em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='0.522em' viewBox='0 0 400000 522' preserveAspectRatio='xMaxYMin slice'><path d='M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.011em;"><span></span></span></span></span></span></span></span></span> <code v-pre>/mnt/nas-public-位置</code></p>
<p><code v-pre>resource</code><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mover><mo stretchy="true" minsize="3.0em">→</mo><mpadded width="+0.6em" lspace="0.3em"><mtext>对应</mtext></mpadded></mover></mrow><annotation encoding="application/x-tex">\xrightarrow{对应}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1113em;vertical-align:-0.011em;"></span><span class="mrel x-arrow"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.1003em;"><span style="top:-3.322em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight x-arrow-pad"><span class="mord mtight"><span class="mord cjk_fallback mtight">对应</span></span></span></span><span class="svg-align" style="top:-2.689em;"><span class="pstrut" style="height:2.7em;"></span><span class="hide-tail" style="height:0.522em;min-width:1.469em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='0.522em' viewBox='0 0 400000 522' preserveAspectRatio='xMaxYMin slice'><path d='M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.011em;"><span></span></span></span></span></span></span></span></span> <code v-pre>/root/nas-resource-位置</code></p>
<blockquote>
<p>容器中，目录的命名方式为：<code v-pre>nas-文件类型-服务器位置</code>，服务器位置目前有<code v-pre>linkdata</code>和<code v-pre>tju</code>。比如<code v-pre>nas-public-linkdata</code>为链数<code v-pre>public</code>目录。</p>
</blockquote>
<p>自己按照自己的GPU服务器的所在位置使用目录，尽量不要跨地区访问。</p>
<div class="hint-container tip">
<p class="hint-container-title">在容器中的的使用建议</p>
<ul>
<li>
<p><strong>定期将自己的文件移动到NAS内</strong>，减少在其他目录上的数据量。</p>
<p>这样做可以减少自己的容器大小，在进行容器迁移时会方便，也防止GPU存储空间爆满。</p>
</li>
<li>
<p>大的数据集放入<code v-pre>/root/nas-resource-linkdata</code>目录。</p>
</li>
<li>
<p><strong>日志与checkpoint定期</strong>备份进入NAS。</p>
<p>NAS具有磁盘冗余设置，在一定量磁盘损坏的情况下，也可以保证数据不丢失，GPU内的磁盘则没有冗余，保护自己的重要数据，当心延毕。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>NAS具有文件恢复功能，NAS可以将整个文件、文件夹回滚到24h前（甚至一个月前）。如果误删了重要数据，请找管理员进行数据恢复。</p>
</div>
</li>
</ul>
</div>
<hr>
<h2 id="网页端" tabindex="-1"><a class="header-anchor" href="#网页端" aria-hidden="true">#</a> <strong>网页端</strong></h2>
<p>nas可以通过浏览器直接访问，可以查看、下载、上传文件。</p>
<p>可以详细查看<RouterLink to="/Userdocs/nas/alist.html">AList章节</RouterLink>来获取详情。</p>
<hr>
<h2 id="windows端" tabindex="-1"><a class="header-anchor" href="#windows端" aria-hidden="true">#</a> <strong>Windows端</strong></h2>
<p>Windows可以通过网络协议挂载nas，我们使用的协议是<strong>WebDAV</strong>。
下载<a href="https://www.raidrive.com/" target="_blank" rel="noopener noreferrer">RaiDriver软件<ExternalLinkIcon/></a>，挂载nas到本地。
这样就可以在Windows端修改文件了。</p>
<figure><img src="@source/Userdocs/nas/img/raidriver.png" alt="RaiDriver中的配置" height="400" tabindex="0" loading="lazy"><figcaption>RaiDriver中的配置</figcaption></figure>
<p>配制WebDAV时请参考图片中填写的内容。</p>
<p>地址：<a href="http://linkdata.liandanlu.cn:40000/dav" target="_blank" rel="noopener noreferrer">http://linkdata.liandanlu.cn:40000/dav<ExternalLinkIcon/></a>
<strong>这是在Raidriver中填写的地址，不是在网之内输入的地址。</strong></p>
<p><strong>用户名和密码请登录alist网页端查看。</strong></p>
<hr>
<h2 id="手机端" tabindex="-1"><a class="header-anchor" href="#手机端" aria-hidden="true">#</a> <strong>手机端</strong></h2>
<p>webdav协议</p>
<hr>
<h2 id="mac端" tabindex="-1"><a class="header-anchor" href="#mac端" aria-hidden="true">#</a> <strong>mac端</strong></h2>
<p>webdav协议</p>
<hr>
<h2 id="ubuntu端" tabindex="-1"><a class="header-anchor" href="#ubuntu端" aria-hidden="true">#</a> <strong>ubuntu端</strong></h2>
<p>webdav协议</p>
<figure><img src="@source/Userdocs/nas/img/webdav.png" alt="各种系统可以挂载webdav的软件" tabindex="0" loading="lazy"><figcaption>各种系统可以挂载webdav的软件</figcaption></figure>
</div></template>


