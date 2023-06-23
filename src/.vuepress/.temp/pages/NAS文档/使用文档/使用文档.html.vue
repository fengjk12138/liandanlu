<template><div><h1 id="nas实验室用户手册" tabindex="-1"><a class="header-anchor" href="#nas实验室用户手册" aria-hidden="true">#</a> NAS实验室用户手册</h1>
<p>NAS：网络附加存储设备，就是一个网盘，不过更加方便与快速，可以直接挂载在电脑内，当做本地磁盘使用。</p>
<h5 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h5>
<p>你还在为云盘速度拉胯而苦恼吗？ 你还在为实验数据过大而焦躁吗？ 你还在为多台电脑数据不容易同步而哭泣吗？
还在为百度云账号数量限制而寻求验证码吗？ 还在和同学使用QQ传递文件吗？</p>
<p>那就来使用实验室NAS吧，方便快捷，量大管饱。</p>
<p>!!!example 现状说明
目前拥有存储空间 56T（暂时只开放40T以供大家使用，后续扩容会更新文档），磁盘双冗余（坏两个磁盘数据都不会丢）。</p>
<p>!!! info  ToDo List
- [ ] 校外的NAS访问
- [ ] Linux系统适配（NFS）共享
- [x] Window10系统共享（SMB）
- [ ] MAC上的使用文档
- [ ] 手机安卓系统适配
- [ ] GPU服务器默认挂载
- [x] 域名登录，目前域名为<code v-pre>lab.liandanlu.cn</code>
- [ ] 文档网页化，做成在线的</p>
<h2 id="一、-使用方法" tabindex="-1"><a class="header-anchor" href="#一、-使用方法" aria-hidden="true">#</a> 一、 使用方法</h2>
<h3 id="_1-不同网络条件下的使用" tabindex="-1"><a class="header-anchor" href="#_1-不同网络条件下的使用" aria-hidden="true">#</a> 1. 不同网络条件下的使用</h3>
<h4 id="_1-1-连接天津大学校园网" tabindex="-1"><a class="header-anchor" href="#_1-1-连接天津大学校园网" aria-hidden="true">#</a> 1.1 连接天津大学校园网</h4>
<p>（windows10示例）</p>
<ul>
<li>
<p>打开任何<code v-pre>文件夹</code>或者<code v-pre>此电脑</code></p>
</li>
<li>
<p>在地址栏输入<code v-pre>\\lab.liandanlu.cn</code>
记住我们的域名<code v-pre>炼丹炉（liandanlu）.cn</code>我们今后的服务器工程也将从这个域名展开
<img src="@source/NAS文档/使用文档/img/liandanlu.png" alt="net" loading="lazy"></p>
</li>
<li>
<p>之后点击文件夹，如果未登录账户，则需要输入账密。可以选择<code v-pre>记住用户</code>，之后登录就不需要输入密码了。</p>
<p>!!! example 现状说明
由于所采用的NAS的系统限制，用户名没办法很长，所以目前账密编码为
账户：<code v-pre>姓名拼音的前8个字母</code>
密码：<code v-pre>a2+b2=c2-全名缩写</code></p>
<pre><code>  如`黄汉升`的账密分别为
  账号：`huanghan`
  密码：`a2+b2=c2-hhs`
</code></pre>
</li>
<li>
<p>之后在对应目录中寻找自己专属文件夹即可</p>
</li>
</ul>
<h4 id="_1-2-校外使用-暂定为ipv6访问-todo-在做了在做了" tabindex="-1"><a class="header-anchor" href="#_1-2-校外使用-暂定为ipv6访问-todo-在做了在做了" aria-hidden="true">#</a> 1.2 校外使用（暂定为IPV6访问） //ToDo 在做了在做了</h4>
<h3 id="_2-文件目录说明" tabindex="-1"><a class="header-anchor" href="#_2-文件目录说明" aria-hidden="true">#</a> 2. 文件目录说明</h3>
<p>目前分为两大文件目录</p>
<ul>
<li><code v-pre>private</code>: 私有文件夹，存放自己的私密文件，管理员已经设置了权限屏蔽，除了自己的账号，别人无法访问；</li>
<li><code v-pre>public</code>: 公共文件夹，所有人都可以访问和使用，请建立自己的文件夹，以避免文件混乱。</li>
</ul>
<p>一般<code v-pre>private</code>存放自己的私有文件，</p>
<h3 id="_3-windows10上的高级操作" tabindex="-1"><a class="header-anchor" href="#_3-windows10上的高级操作" aria-hidden="true">#</a> 3. windows10上的高级操作</h3>
<h4 id="_3-1-nas挂载到本地" tabindex="-1"><a class="header-anchor" href="#_3-1-nas挂载到本地" aria-hidden="true">#</a> 3.1 NAS挂载到本地</h4>
<ul>
<li>
<p>直接挂载目录，之后在此电脑中就可以看见
<img src="@source/NAS文档/使用文档/img/disk.png" alt="net" loading="lazy"> <img src="@source/NAS文档/使用文档/img/pan.png" alt="net" loading="lazy"></p>
</li>
<li>
<p>或者可以直接为自己的目录创建<code v-pre>快捷方式</code>，之后通过快捷方式就能直接进入目录
<img src="@source/NAS文档/使用文档/img/link.png" alt="link" loading="lazy"></p>
</li>
</ul>
<h4 id="_3-2-切换登录账户" tabindex="-1"><a class="header-anchor" href="#_3-2-切换登录账户" aria-hidden="true">#</a> 3.2 切换登录账户</h4>
<ul>
<li><code v-pre>控制面板</code>-<code v-pre>用户账户</code>-<code v-pre>Windows凭证</code> ，之后编辑或者删除之前的凭证即可
<img src="@source/NAS文档/使用文档/img/user.png" alt="link" loading="lazy"><img src="@source/NAS文档/使用文档/img/user2.png" alt="link" loading="lazy"><img src="@source/NAS文档/使用文档/img/user3.png" alt="link" loading="lazy"></li>
</ul>
<h4 id="_3-3" tabindex="-1"><a class="header-anchor" href="#_3-3" aria-hidden="true">#</a> 3.3</h4>
<h3 id="_4-云盘资料下载到nas中" tabindex="-1"><a class="header-anchor" href="#_4-云盘资料下载到nas中" aria-hidden="true">#</a> 4. 云盘资料下载到NAS中</h3>
<h4 id="_4-1-向日葵连接虚拟机-暂定办法" tabindex="-1"><a class="header-anchor" href="#_4-1-向日葵连接虚拟机-暂定办法" aria-hidden="true">#</a> 4.1 向日葵连接虚拟机（暂定办法）</h4>
<ul>
<li>
<p>连接虚拟机远程桌面</p>
<p>!!! example 现状说明
向日葵账号：225 011 343
密码：p4a287</p>
</li>
<li>
<p>连接之后，就可以使用虚拟机内的云盘软件下载你的数据集；目前虚拟机长期开启，其中登录有实验室<code v-pre>百度网盘超级会员账号</code>，可以直接下载；
<img src="@source/NAS文档/使用文档/img/yun.png" alt="link" loading="lazy"></p>
</li>
<li>
<p>下载完成之后，将虚拟机内下载的数据，迁移到NAS内；记得及时清除自己虚拟机内的文件，或者直接下载到NAS内也行；
<img src="@source/NAS文档/使用文档/img/trans.png" alt="link" loading="lazy"></p>
</li>
</ul>
<p>!!! tip 小技巧
在虚拟机内访问的NAS地址为<code v-pre>192.168.0.2</code>，这个地址速度更快</p>
<h3 id="x-gpu服务器连接nas-todo-在做了在做了" tabindex="-1"><a class="header-anchor" href="#x-gpu服务器连接nas-todo-在做了在做了" aria-hidden="true">#</a> x. GPU服务器连接NAS //ToDo 在做了在做了</h3>
<h3 id="_10-连接速度-上传下载速度" tabindex="-1"><a class="header-anchor" href="#_10-连接速度-上传下载速度" aria-hidden="true">#</a> 10. 连接速度（上传下载速度）</h3>
<ul>
<li><code v-pre>212内网速度</code>：1000Mbps</li>
<li><code v-pre>GPU服务器连接速度</code>：10Gbps //ToDo 在做了在做了</li>
<li><code v-pre>其他校内网连接速度</code>：100Mbps
<blockquote>
<p>目前由于校园网的带宽限制，100Mbps为共享式</p>
</blockquote>
</li>
<li><code v-pre>外网连接速度</code>：0bps //ToDo 在做了在做了</li>
<li><code v-pre>校外VPN连接</code>：10Mbps</li>
</ul>
<h3 id="内测注意事项" tabindex="-1"><a class="header-anchor" href="#内测注意事项" aria-hidden="true">#</a> 内测注意事项</h3>
<ul>
<li>服务器目前在212放着，需要忍受一小会噪声</li>
<li>有bug或者其他使用问题或需求请及时联系<code v-pre>冯杰康</code>，提升未来公测的使用体验（需要内测账号的也联系我）</li>
<li>服务器IP可能会改变，会及时通知</li>
<li>现在大家可以提前把服务器的数据迁移到NAS中，之后重装GPU服务器时可以方便一点</li>
</ul>
<h2 id="todo-list" tabindex="-1"><a class="header-anchor" href="#todo-list" aria-hidden="true">#</a> ToDo List</h2>
<ul>
<li>文档做成在线网站，方便实时更新与访问</li>
<li>非校园网的访问，成为真·云盘</li>
<li>GPU服务器和NAS的集成使用</li>
<li>做域名解析，使用域名访问，无需更改ip</li>
<li>212内网千兆速率</li>
<li>其他系统使用测试</li>
<li><strong>可能需要前端大佬、网络带师、系统专家来优化体验</strong></li>
</ul>
<h2 id="目前内测用户" tabindex="-1"><a class="header-anchor" href="#目前内测用户" aria-hidden="true">#</a> 目前内测用户</h2>
<figure><img src="@source/NAS文档/使用文档/img/in.png" alt="link" tabindex="0" loading="lazy"><figcaption>link</figcaption></figure>
</div></template>


