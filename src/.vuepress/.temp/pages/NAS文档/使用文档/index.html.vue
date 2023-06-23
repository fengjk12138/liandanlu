<template><div><h1 id="nas实验室用户手册" tabindex="-1"><a class="header-anchor" href="#nas实验室用户手册" aria-hidden="true">#</a> NAS实验室用户手册</h1>
<blockquote>
<p>NAS是什么</p>
</blockquote>
<blockquote>
<p>NAS：网络附加存储设备。就是一个网盘，不过更加方便与快速，可以直接挂载在电脑内，当做本地磁盘使用。同时也有一定的冗余防灾能力和超大的存储空间。</p>
</blockquote>
<h5 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h5>
<p>你还在为云盘速度拉胯而苦恼吗？ 你还在为实验数据过大而焦躁吗？ 你还在为多台电脑数据不容易同步而哭泣吗？
还在为百度云账号数量限制而寻求验证码吗？ 还在和同学使用QQ传递文件吗？</p>
<p>那就来使用实验室NAS吧，方便快捷，量大管饱。</p>
<div class="hint-container info">
<p class="hint-container-title">现状说明</p>
<p>目前拥有存储空间 56T（暂时只开放40T以供大家使用，后续扩容会更新文档），磁盘双冗余（坏两个磁盘数据都不会丢）。</p>
<p>记住我们的域名<code v-pre>炼丹炉（liandanlu）.cn</code>我们今后的服务器工程也将从这个域名展开</p>
</div>
<div class="hint-container note">
<p class="hint-container-title">ToDo List</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 校外的NAS访问</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> Linux系统适配（NFS）共享</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> Window10系统共享（SMB）</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> MAC上的使用文档</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 手机安卓系统适配</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> GPU服务器默认挂载</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> 域名登录，目前域名为<code v-pre>lab.liandanlu.cn</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> 文档网页化，做成在线的</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> 公有文件夹使用WebDAV共享，可以挂载方便一点</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> 设置<code v-pre>resource</code>文件夹</label></li>
<li>文档做成在线网站，方便实时更新与访问</li>
<li>非校园网的访问，成为真·云盘</li>
<li>GPU服务器和NAS的集成使用</li>
<li>做域名解析，使用域名访问，无需更改ip</li>
<li>212内网千兆速率</li>
<li>其他系统使用测试</li>
<li><strong>可能需要前端大佬、网络带师、系统专家来优化体验</strong></li>
</ul>
</div>
<h2 id="一、-使用方法" tabindex="-1"><a class="header-anchor" href="#一、-使用方法" aria-hidden="true">#</a> 一、 使用方法</h2>
<h3 id="_1-不同网络条件下的使用" tabindex="-1"><a class="header-anchor" href="#_1-不同网络条件下的使用" aria-hidden="true">#</a> 1. 不同网络条件下的使用</h3>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>目前NAS挂靠在链数公网内，所有网络情况都可以连接到NAS了，不过因为运营商封禁445端口，远程链接仍然比较费事。（印度佬，Win10共享端口不要写死啊，凎。）</p>
<p>出于权限管理考虑我们只使用了SMB共享协议，后续可能会更改为WebDAV协议共享，会缺少权限系统，但是访问方便点。</p>
</div>
<h4 id="_1-1-远程链接-挂载私有文件夹" tabindex="-1"><a class="header-anchor" href="#_1-1-远程链接-挂载私有文件夹" aria-hidden="true">#</a> 1.1 远程链接（挂载私有文件夹）</h4>
<h5 id="_1-1-1-windows10示例" tabindex="-1"><a class="header-anchor" href="#_1-1-1-windows10示例" aria-hidden="true">#</a> 1.1.1 windows10示例</h5>
<p>这个方法会占用你的机器回环地址（127.0.0.1）的445端口，而且也只能连接学校这一个NAS系统。如果有其他特殊需求，参考<a href="https://blog.csdn.net/zhungcan/article/details/110912546" target="_blank" rel="noopener noreferrer">这个博客<ExternalLinkIcon/></a>，下面的方法将对你不适用。</p>
<ul>
<li>设置端口转发，将电脑的<code v-pre>445</code>端口访问转发到远程的<code v-pre>40000</code>端口上。
以管理员身份打开<code v-pre>cmd</code>,<strong>（注意是cmd。powershell可能会出现奇怪的错误。）</strong></li>
</ul>
<p>输入下面命令:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>sc stop lanmanserver
sc config lanmanserver <span class="token assign-left variable">start</span><span class="token operator">=</span>disabled

netsh interface portproxy <span class="token function">add</span> v4tov4 <span class="token assign-left variable">listenport</span><span class="token operator">=</span><span class="token number">445</span> <span class="token assign-left variable">listenaddress</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1 <span class="token assign-left variable">connectport</span><span class="token operator">=</span><span class="token number">40000</span> <span class="token assign-left variable">connectaddress</span><span class="token operator">=</span>lab.liandanlu.cn

net stop iphlpsvc
net start iphlpsvc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>解释：关闭本机的<code v-pre>lanmanserver</code>服务，释放<code v-pre>445</code>端口。</p>
</blockquote>
<blockquote>
<p>之后，将本机的<code v-pre>445</code>端口的信息全部转发到<code v-pre>lab.liandanlu.cn</code>的<code v-pre>40000</code>端口上。</p>
</blockquote>
<blockquote>
<p>然后重启ip helper服务。</p>
</blockquote>
<ul>
<li>
<p>重启电脑</p>
</li>
<li>
<p>打开任何<code v-pre>文件夹</code>或者<code v-pre>此电脑</code>， <strong>注意不是浏览器、不是浏览器、不是浏览器</strong>，是文件资源管理器；</p>
</li>
<li>
<p>在地址栏输入<code v-pre>\\127.0.0.1</code>， <strong>注意斜杠的方向</strong>；</p>
<figure><img src="@source/NAS文档/使用文档/img/127.0.0.1.png" alt="登陆成功后可以看到NAS共享的文件夹" tabindex="0" loading="lazy"><figcaption>登陆成功后可以看到NAS共享的文件夹</figcaption></figure>
</li>
<li>
<p>之后点击文件夹，如果未登录账户，则需要输入账密。可以选择<code v-pre>记住用户</code>，之后登录就不需要输入密码了。</p>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<pre><code>由于所采用的NAS的系统限制，用户名没办法很长，所以目前账密编码为
账户：`姓名拼音的前8个字母`
密码： `线上文档隐去密码编码`

如`黄汉升`的账密分别为
账号：`huanghan`
密码：`线上文档隐去密码编码`
</code></pre>
</div>
<ul>
<li>之后在对应目录中寻找自己专属文件夹即可</li>
</ul>
<h5 id="_1-1-2-linux-ubuntu为例-连接-todo" tabindex="-1"><a class="header-anchor" href="#_1-1-2-linux-ubuntu为例-连接-todo" aria-hidden="true">#</a> 1.1.2 Linux（ubuntu为例）连接 //ToDo</h5>
<h5 id="_1-1-3-手机连接-todo" tabindex="-1"><a class="header-anchor" href="#_1-1-3-手机连接-todo" aria-hidden="true">#</a> 1.1.3 手机连接 //ToDo</h5>
<h4 id="_1-2-链数公司内部连接-todo" tabindex="-1"><a class="header-anchor" href="#_1-2-链数公司内部连接-todo" aria-hidden="true">#</a> 1.2 链数公司内部连接 //ToDo</h4>
<h4 id="_1-3-挂靠在liandanlu系统路由器下的服务器连接-todo" tabindex="-1"><a class="header-anchor" href="#_1-3-挂靠在liandanlu系统路由器下的服务器连接-todo" aria-hidden="true">#</a> 1.3 挂靠在liandanlu系统路由器下的服务器连接 //ToDo</h4>
<h3 id="_2-文件目录说明" tabindex="-1"><a class="header-anchor" href="#_2-文件目录说明" aria-hidden="true">#</a> 2. 文件目录说明</h3>
<p>目前分为两大文件目录</p>
<ul>
<li><code v-pre>private</code>: 私有文件夹，存放自己的私密文件，管理员已经设置了权限屏蔽，除了自己的账号，别人无法访问；</li>
<li><code v-pre>public</code>: 公共文件夹，所有人都可以访问和使用，请建立自己的文件夹，以避免文件混乱。会帮大家把自己的文件夹挂载进入GPU服务器内，这是主要的工作目录。</li>
<li><code v-pre>resource</code>: 资源文件夹，存放数据集，软件资源，共享文件等等。//ToDo</li>
</ul>
<p>一般<code v-pre>private</code>存放自己的私有文件，但是由于权限问题，GPU服务器只会挂载各位的<code v-pre>public</code>文件夹的内容，所以怎么存放东西自己权衡。</p>
<h2 id="二、-进阶技巧" tabindex="-1"><a class="header-anchor" href="#二、-进阶技巧" aria-hidden="true">#</a> 二、 进阶技巧</h2>
<h3 id="_1-windows上的挂载与用户切换" tabindex="-1"><a class="header-anchor" href="#_1-windows上的挂载与用户切换" aria-hidden="true">#</a> 1. Windows上的挂载与用户切换</h3>
<h4 id="_1-1-nas挂载到本地" tabindex="-1"><a class="header-anchor" href="#_1-1-nas挂载到本地" aria-hidden="true">#</a> 1.1 NAS挂载到本地</h4>
<ul>
<li>直接挂载目录，之后在此电脑中就可以看见</li>
</ul>
<figure><img src="@source/NAS文档/使用文档/img/disk.png" alt="映射网络驱动器" tabindex="0" loading="lazy"><figcaption>映射网络驱动器</figcaption></figure>
<figure><img src="@source/NAS文档/使用文档/img/pan.png" alt="直接在中可以看见NAS盘符" tabindex="0" loading="lazy"><figcaption>直接在<code v-pre>此电脑</code>中可以看见NAS盘符</figcaption></figure>
<ul>
<li>或者可以直接为自己的目录创建<code v-pre>快捷方式</code>，之后通过快捷方式就能直接进入目录</li>
</ul>
<figure><img src="@source/NAS文档/使用文档/img/link.png" alt="创建快捷方式" tabindex="0" loading="lazy"><figcaption>创建快捷方式</figcaption></figure>
<h4 id="_1-2-切换登录账户" tabindex="-1"><a class="header-anchor" href="#_1-2-切换登录账户" aria-hidden="true">#</a> 1.2 切换登录账户</h4>
<p>需要登录其他用户或者清楚原有的&quot;记住用户&quot;时，需要进行的下面的操作。</p>
<ul>
<li><code v-pre>控制面板</code>-<code v-pre>用户账户</code>-<code v-pre>Windows凭证</code> ，之后编辑或者删除之前的凭证即可</li>
</ul>
<figure><img src="@source/NAS文档/使用文档/img/user.png" alt="进入控制面板" tabindex="0" loading="lazy"><figcaption>进入控制面板</figcaption></figure>
<figure><img src="@source/NAS文档/使用文档/img/user2.png" alt="管理Windows凭证" tabindex="0" loading="lazy"><figcaption>管理Windows凭证</figcaption></figure>
<figure><img src="@source/NAS文档/使用文档/img/user3.png" alt="删除所有的Windows凭证" tabindex="0" loading="lazy"><figcaption>删除所有的Windows凭证</figcaption></figure>
<h4 id="_1-3" tabindex="-1"><a class="header-anchor" href="#_1-3" aria-hidden="true">#</a> 1.3</h4>
<h3 id="_2-云盘资料下载到nas中" tabindex="-1"><a class="header-anchor" href="#_2-云盘资料下载到nas中" aria-hidden="true">#</a> 2. 云盘资料下载到NAS中</h3>
<h4 id="_2-1-向日葵连接windows主机-暂定办法" tabindex="-1"><a class="header-anchor" href="#_2-1-向日葵连接windows主机-暂定办法" aria-hidden="true">#</a> 2.1 向日葵连接Windows主机（暂定办法）</h4>
<ul>
<li>连接远程桌面</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<pre><code>向日葵账号：线上文档隐去账密
密码：线上文档隐去账密
</code></pre>
</div>
<ul>
<li>连接之后，就可以使用虚拟机内的云盘软件下载你的数据集；目前虚拟机长期开启，其中登录有实验室<code v-pre>百度网盘超级会员账号</code>，可以直接下载；</li>
</ul>
<figure><img src="@source/NAS文档/使用文档/img/yun.png" alt="实验室百度网盘会员账号" tabindex="0" loading="lazy"><figcaption>实验室百度网盘会员账号</figcaption></figure>
<ul>
<li>
<p>下载完成之后，将虚拟机内下载的数据，迁移到NAS内；记得及时清除自己虚拟机内的文件，或者直接下载到NAS内也行；</p>
<figure><img src="@source/NAS文档/使用文档/img/trans.png" alt="直接在Windows里将下载的文件拖到NAS里" tabindex="0" loading="lazy"><figcaption>直接在Windows里将下载的文件拖到NAS里</figcaption></figure>
</li>
</ul>
<div class="hint-container note">
<p class="hint-container-title">百度网盘账号使用</p>
<pre><code>因为百度网盘有登录设备数量限制，我们今后均使用向日葵连接进入Windows主机，下载完成之后放到NAS里。
需要的话再自己从NAS里下载，NAS带宽速度还可以。不要再在个人电脑上登录实验室百度网盘账号了。
</code></pre>
</div>
<h3 id="_3-多设备文件同步" tabindex="-1"><a class="header-anchor" href="#_3-多设备文件同步" aria-hidden="true">#</a> <mark>3. 多设备文件同步</mark></h3>
<p>这个算是比较重点也比较有用的功能了，云上数据，yyds。</p>
<h2 id="三、-连接速度-上传下载速度" tabindex="-1"><a class="header-anchor" href="#三、-连接速度-上传下载速度" aria-hidden="true">#</a> 三、 连接速度（上传下载速度）</h2>
<ul>
<li><code v-pre>链数内网速度</code>：1000Mbps //ToDo</li>
<li><code v-pre>GPU服务器连接速度</code>：10Gbps</li>
<li><code v-pre>其他外网连接速度</code>：100Mbps</li>
</ul>
</div></template>


