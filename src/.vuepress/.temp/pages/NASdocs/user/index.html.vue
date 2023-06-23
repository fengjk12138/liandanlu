<template><div><blockquote>
<p>NAS是什么</p>
</blockquote>
<blockquote>
<p>NAS：网络附加存储设备。就是一个网盘，不过更加方便与快速，可以直接挂载在电脑内，当做本地磁盘使用。同时也有一定的冗余防灾能力和超大的存储空间。</p>
</blockquote>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
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
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 校外的NAS访问</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> Linux系统适配（NFS）共享  modify: 因为nfs有权限问题漏洞，已改用smb共享</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> Window10系统共享（SMB）</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> MAC上的使用文档</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 手机安卓系统适配</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> GPU服务器默认挂载</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> 域名登录，目前域名为<code v-pre>lab.liandanlu.cn</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> 文档网页化，做成在线的</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> 公有文件夹使用WebDAV共享，可以挂载方便一点</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> 设置<code v-pre>resource</code>文件夹</label></li>
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
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>目前NAS挂靠在链数公网内，所有网络情况都可以连接到NAS了，不过因为运营商封禁445端口，远程链接仍然比较费事。（印度佬，Win10共享端口不要写死啊，凎。）</p>
<p>出于权限管理考虑目前远程连接是比较费事的，链数、实验室成员的权限均有不同。</p>
<p>已修改使用WebDAV协议共享，可以在浏览器访问，用软件就能挂载。</p>
<p>请严格保证密码安全，不要将密码共享给有泄露可能的人，数据安全重中之重。</p>
</div>
<div class="hint-container note">
<p class="hint-container-title">文件目录说明</p>
<p>因为NAS就相当于是个大磁盘，这个大磁盘我们建立了3个目录，功能与用途如下：</p>
<ul>
<li><code v-pre>private</code>: 私有文件夹，存放自己的私密文件，管理员已经设置了权限屏蔽，除了自己的账号，别人无法访问；</li>
<li><code v-pre>public</code>: 公共文件夹，所有人都可以访问和使用，请建立自己的文件夹，以避免文件混乱。会帮大家把自己的文件夹挂载进入GPU服务器内，这是主要的工作目录。</li>
<li><code v-pre>resource</code>: 资源文件夹，存放数据集，软件资源，共享文件等等。</li>
</ul>
<p>一般<code v-pre>private</code>存放自己的私有文件，但是由于权限问题，GPU服务器只会挂载各位的<code v-pre>public</code>文件夹的内容以及<code v-pre>resource</code>文件夹，所以怎么存放东西自己权衡。</p>
<figure><img src="@source/NASdocs/user/img/bigsd.png" alt="大磁盘的三个文件夹" tabindex="0" loading="lazy"><figcaption>大磁盘的三个文件夹</figcaption></figure>
</div>
<h2 id="_1-windows远程连接-链数公司以外的地方" tabindex="-1"><a class="header-anchor" href="#_1-windows远程连接-链数公司以外的地方" aria-hidden="true">#</a> 1. Windows远程连接（链数公司以外的地方）</h2>
<div class="hint-container tip">
<p class="hint-container-title">账密系统解释</p>
<p>实验室整体使用服务器时，会接触到3个账户密码：</p>
<ul>
<li>
<p>访问共享资源时使用的是实验室的公共账户<code v-pre>webdav</code>账户；</p>
</li>
<li>
<p>访问私有资源时使用的是个人账户<code v-pre>名字全拼前8位</code>；（当然，在<code v-pre>1.3节</code>中介绍的方法也可以使用个人账户访问公共数据）</p>
</li>
<li>
<p>访问GPU服务器使用的是GPU服务器的账密，为根据用途设计的主机名和密码，用户一般是<code v-pre>Linux</code>的<code v-pre>root</code>。</p>
</li>
</ul>
</div>
<h3 id="_1-1-windows-访问共享资源" tabindex="-1"><a class="header-anchor" href="#_1-1-windows-访问共享资源" aria-hidden="true">#</a> 1.1 Windows 访问共享资源</h3>
<p>如果你只需要访问与查看数据（不修改、不上传），那么只需要浏览器就行。手机、平板、电脑、各种系统的浏览器都可以，真正的跨平台。</p>
<ul>
<li>在<code v-pre>浏览器</code>地址栏输入网址<code v-pre>https://lab.liandanlu.cn:40081/public</code>或者<code v-pre>https://lab.liandanlu.cn:40081/resource</code>。</li>
</ul>
<blockquote>
<p>端口后面的路径表示需要访问的资源路径，目前开放的文件夹有<code v-pre>public</code>和<code v-pre>resource</code>。</p>
</blockquote>
<p>之后输入密码，就可以在浏览器内在线观看和下载数据，在线看视频也是可以的。</p>
<figure><img src="@source/NASdocs/user/img/web.png" alt="使用浏览器查看共享目录" tabindex="0" loading="lazy"><figcaption>使用浏览器查看共享目录</figcaption></figure>
<figure><img src="@source/NASdocs/user/img/webvideo.png" alt="使用浏览器在线共享视频" tabindex="0" loading="lazy"><figcaption>使用浏览器在线共享视频</figcaption></figure>
<h3 id="_1-2-windows-挂载共享文件夹" tabindex="-1"><a class="header-anchor" href="#_1-2-windows-挂载共享文件夹" aria-hidden="true">#</a> 1.2 Windows 挂载共享文件夹</h3>
<p>你可以使用软件将共享文件夹挂载在本地磁盘中，跟使用本地磁盘一样使用NAS，同时也可以上传数据。就是需要你下载一个软件<a href="https://www.raidrive.com/" target="_blank" rel="noopener noreferrer">RaiDriver<ExternalLinkIcon/></a>。</p>
<p>挂载之后你可以像使用自己的本地磁盘一样使用NAS。</p>
<ul>
<li>
<p>下载软件<a href="https://www.raidrive.com/" target="_blank" rel="noopener noreferrer">RaiDriver<ExternalLinkIcon/></a></p>
</li>
<li>
<p>安装之后，添加一个新的连接，配置如下</p>
</li>
</ul>
<figure><img src="@source/NASdocs/user/img/raidriver.png" alt="RaiDriver配置" tabindex="0" loading="lazy"><figcaption>RaiDriver配置</figcaption></figure>
<p>其中地址的域名和端口也就是上一节所输入的网址，后面的路径<code v-pre>public</code>和<code v-pre>resource</code>分别对应两个不同的共享文件夹。</p>
<p><code v-pre>容量</code>需要自己填写，因为他没法识别正常容量，可以填也可以不填，<code v-pre>public</code>有40T，肯定够用。</p>
<ul>
<li>之后你的<code v-pre>此电脑</code>内就会多出来两个分区</li>
</ul>
<figure><img src="@source/NASdocs/user/img/disk_raidriver.png" alt="内会多出来分区" tabindex="0" loading="lazy"><figcaption><code v-pre>此电脑</code>内会多出来分区</figcaption></figure>
<ul>
<li>你可以上传文件、下载文件、编辑文件，跟使用你的本地磁盘一样，数据会<strong>实时</strong>同步到NAS里。</li>
</ul>
<p><strong>如果你有多个设备连接NAS，那么你的多的设备的数据都能同步。</strong></p>
<h3 id="_1-3-windows-挂载私有文件" tabindex="-1"><a class="header-anchor" href="#_1-3-windows-挂载私有文件" aria-hidden="true">#</a> 1.3  Windows 挂载私有文件</h3>
<p>私有文件只有自己的账户可见，其他人无法访问自己的私有文件夹，但是挂载比较麻烦（在Windows上比较麻烦）。 也可以不挂载，不影响使用。</p>
<details>
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
<figure><img src="@source/NASdocs/user/img/127.0.0.1.png" alt="登陆成功后可以看到NAS共享的文件夹" tabindex="0" loading="lazy"><figcaption>登陆成功后可以看到NAS共享的文件夹</figcaption></figure>
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
<li>
<p>之后在对应目录中寻找自己专属文件夹即可</p>
</li>
<li>
<p>毕业后可以删除配置的端口转发，使用如下命令：</p>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>netsh interface portproxy delete v4tov4 <span class="token assign-left variable">listenport</span><span class="token operator">=</span><span class="token number">445</span> <span class="token assign-left variable">listenaddress</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details> 
<h2 id="_2-linux-ubuntu为例-远程连接-todo" tabindex="-1"><a class="header-anchor" href="#_2-linux-ubuntu为例-远程连接-todo" aria-hidden="true">#</a> 2. Linux（ubuntu为例）远程连接 //ToDo</h2>
<h2 id="_3-手机连接-todo" tabindex="-1"><a class="header-anchor" href="#_3-手机连接-todo" aria-hidden="true">#</a> 3. 手机连接 //ToDo</h2>
<h2 id="_4-链数公司内部-todo" tabindex="-1"><a class="header-anchor" href="#_4-链数公司内部-todo" aria-hidden="true">#</a> 4. 链数公司内部 //ToDo</h2>
<h2 id="_5-挂靠在liandanlu系统路由器下的服务器连接-todo" tabindex="-1"><a class="header-anchor" href="#_5-挂靠在liandanlu系统路由器下的服务器连接-todo" aria-hidden="true">#</a> 5. 挂靠在liandanlu系统路由器下的服务器连接 //ToDo</h2>
<h2 id="二、-进阶技巧" tabindex="-1"><a class="header-anchor" href="#二、-进阶技巧" aria-hidden="true">#</a> 二、 进阶技巧</h2>
<h2 id="_1-云盘资料下载到nas中" tabindex="-1"><a class="header-anchor" href="#_1-云盘资料下载到nas中" aria-hidden="true">#</a> 1. 云盘资料下载到NAS中</h2>
<p>我们在链数准备了一个Windows主机，利用向日葵连接上去之后，就可以下载东西，下载完成可以直接拖到NAS里。</p>
<p>因为NAS与GPU服务器相连，所以文件放入NAS之后，在GPU服务器上是可以直接访问的。（相当于从云盘直接下载到了GPU服务器里）。</p>
<figure><img src="@source/NASdocs/user/img/windowshost.jpg" alt="在链数展示厅的Windows主机" tabindex="0" loading="lazy"><figcaption>在链数展示厅的Windows主机</figcaption></figure>
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
<li>连接之后，就可以使用Windows主机内的云盘软件下载你的数据集；目前Windows主机长期开启，其中登录有实验室<code v-pre>百度网盘超级会员账号</code>，可以直接下载；</li>
</ul>
<figure><img src="@source/NASdocs/user/img/yun.png" alt="实验室百度网盘会员账号" tabindex="0" loading="lazy"><figcaption>实验室百度网盘会员账号</figcaption></figure>
<ul>
<li>
<p>下载完成之后，将Windows内下载的数据，迁移到NAS内；记得及时清除自己Windows内的文件，或者直接下载到NAS内也行；</p>
<figure><img src="@source/NASdocs/user/img/trans.png" alt="直接在Windows里将下载的文件拖到NAS里" tabindex="0" loading="lazy"><figcaption>直接在Windows里将下载的文件拖到NAS里</figcaption></figure>
</li>
</ul>
<div class="hint-container note">
<p class="hint-container-title">百度网盘账号使用</p>
<pre><code>因为百度网盘有登录设备数量限制，我们今后均使用向日葵连接进入Windows主机，下载完成之后放到NAS里。

需要的话再自己从NAS里下载，NAS带宽速度还可以。不要再在个人电脑上登录实验室百度网盘账号了。
</code></pre>
</div>
<!-- ## 2. Windows上的挂载与用户切换

#### 1.1 NAS挂载到本地

NAS挂载到本地之后，就可跟使用本地磁盘一样使用NAS了；

- 直接挂载目录，之后在此电脑中就可以看见

![映射网络驱动器](./img/disk.png) 

![直接在`此电脑`中可以看见NAS盘符](./img/pan.png)

- 或者可以直接为自己的目录创建`快捷方式`，之后通过快捷方式就能直接进入目录

![创建快捷方式](./img/link.png)


#### 1.2 切换登录账户

需要登录其他用户或者清楚原有的"记住用户"时，需要进行的下面的操作。

- `控制面板`-`用户账户`-`Windows凭证` ，之后编辑或者删除之前的凭证即可

![进入控制面板](./img/user.png)

![管理Windows凭证](./img/user2.png)

![删除所有的Windows凭证](./img/user3.png)
  -->
<h2 id="_2-多设备文件同步" tabindex="-1"><a class="header-anchor" href="#_2-多设备文件同步" aria-hidden="true">#</a> <mark>2. 多设备文件同步</mark></h2>
<p>这个算是比较重点也比较有用的功能了，云上数据，yyds。</p>
<blockquote>
<p>简单的说就是，数据都放NAS里，然后所有设备连接NAS之后，就可以完美进行同步。</p>
</blockquote>
<p>基于以上原理，我们可以实现以下操作。</p>
<ul>
<li>
<p>在手机上实时观看NAS内的日志文件（由GPU服务器生成）；</p>
</li>
<li>
<p>在Windows上编辑代码，之后可以直接在GPU服务器上运行；</p>
</li>
<li>
<p>下班后把论文拖到NAS里，然后回宿舍用笔记本连接NAS看；</p>
</li>
</ul>
<p>...</p>
<p>云上空间，尽情使用。</p>
<h2 id="三、-连接速度-上传下载速度" tabindex="-1"><a class="header-anchor" href="#三、-连接速度-上传下载速度" aria-hidden="true">#</a> 三、 连接速度（上传下载速度）</h2>
<ul>
<li><code v-pre>链数内网速度</code>：1000Mbps</li>
<li><code v-pre>GPU服务器连接速度</code>：10Gbps</li>
<li><code v-pre>其他外网连接速度</code>：100Mbps</li>
</ul>
</div></template>


