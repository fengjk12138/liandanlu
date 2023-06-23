<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>我们的集群的整体设计理念是<strong>存算分离，数据共享</strong>。因此使用NAS作为核心存储设备，GPU服务器只是作为计算使用。</p>
<p>使用NAS存储技术可以增加每个人的存储空间、同步多机之间的数据、降低存储成本、降低坏盘风险。</p>
<div class="hint-container info">
<p class="hint-container-title">NAS存储设计理念</p>
<p>外部存储，存储设备和计算设备（GPU）分离，不在同一台机器上。NAS的空间很大（至少20T以上）。
在GPU服务器上的提现就是一个目录而已，和平时用没有任何区别。</p>
</div>
<h2 id="一、-gpu服务器上的使用方式" tabindex="-1"><a class="header-anchor" href="#一、-gpu服务器上的使用方式" aria-hidden="true">#</a> 一、 GPU服务器上的使用方式</h2>
<p>在你的容器内使用命令<code v-pre>df -h</code>可以看到容器的存储挂载分布。</p>
<figure><img src="@source/GPUdocs/user/img/df-h.png" alt="命令可以看见NAS挂载的位置和容器整体存储分布" tabindex="0" loading="lazy"><figcaption><code v-pre>df -h</code>命令可以看见NAS挂载的位置和容器整体存储分布</figcaption></figure>
<p>NAS在GPU服务器上的体现就是一个目录（容器内的<code v-pre>/root/nas-public-linkdata</code>）目录就是NAS，把文件放入这个目录，那么文件就进入了NAS存储，这个目录可以和其他目录一样完成所有正常的操作。
<strong>可以直接将日志、代码、数据集写入NAS</strong>，即安全也不用担心空间不足问题。</p>
<hr>
<p><strong>NAS目录的命名方式为：<code v-pre>nas-文件类型-服务器位置</code>。下文的路径表述将以linkdata的nas为示例。</strong></p>
<ul>
<li>
<p>文件类型目前拥有<code v-pre>public</code>，<code v-pre>resource</code>，<code v-pre>private</code>;</p>
<ul>
<li><code v-pre>public</code>表示公开文件：所有人都有权限访问，用的最多的文件夹，存放自己的代码啥的；</li>
<li><code v-pre>resource</code>表示资源文件，比如软件安装包、电影电视、数据集等，所有人都能访问；</li>
<li><code v-pre>private</code>表示私有文件夹，自己爱存什么存什么，只有自己拥有访问权限。</li>
</ul>
</li>
<li>
<p>服务器位置目前有<code v-pre>linkdata</code>和<code v-pre>tju</code>，自己按照自己的GPU服务器的所在位置使用目录，尽量不要跨地区访问。</p>
</li>
</ul>
<h3 id="_1-使用建议" tabindex="-1"><a class="header-anchor" href="#_1-使用建议" aria-hidden="true">#</a> 1. 使用建议</h3>
<div class="hint-container tip">
<p class="hint-container-title">在GPU服务器上的使用建议</p>
<ul>
<li>
<p>定期将自己的文件移动到NAS内，减少在其他目录上的数据量。</p>
<p>这样做可以减少自己的容器大小，在进行容器迁移时会方便，也防止GPU存储空间爆满。</p>
</li>
<li>
<p>大的数据集放入<code v-pre>/root/nas-resource-linkdata</code>目录。 从Windows内下载完数据集拖入NAS内，同样减少GPU机器的存储压力。</p>
</li>
<li>
<p>日志与checkpoint定期备份进入NAS。</p>
<p>NAS具有磁盘冗余设置，在一定量磁盘损坏的情况下，也可以保证数据不丢失，GPU内的磁盘则没有冗余，保护自己的重要数据，防止延毕。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>NAS具有文件恢复功能，NAS可以将整个文件、文件夹回滚到24h前（甚至一个月前）。如果误删了重要数据，请找管理员进行数据恢复。</p>
</div>
</li>
</ul>
</div>
<h3 id="_2-nas目录在容器内的位置" tabindex="-1"><a class="header-anchor" href="#_2-nas目录在容器内的位置" aria-hidden="true">#</a> 2. NAS目录在容器内的位置</h3>
<p>以<code v-pre>mars-huanghansheng</code>容器为例，拥有3个目录与NAS关联：</p>
<ul>
<li><code v-pre>/root/nas-public-linkdata</code>:  对应NAS的<code v-pre>public/huanghansheng</code>目录，在<code v-pre>public/</code>有各个人的目录，为了防止误删，因此这里的挂载直接对应了自己名字的目录，需要找其他人名字的目录，可以在<code v-pre>/mnt</code>下找，参考第三条。</li>
<li><code v-pre>/root/nas-resource-linkdata</code>: 对应NAS的<code v-pre>resource</code>目录</li>
<li><code v-pre>/mnt/nas-public-linkdata</code>:对应NAS的<code v-pre>public/</code>目录</li>
</ul>
<h2 id="二、-本地windows上的使用方式" tabindex="-1"><a class="header-anchor" href="#二、-本地windows上的使用方式" aria-hidden="true">#</a> 二、 本地Windows上的使用方式</h2>
<p>NAS的更厉害之处在于可以使用Windows链接，跟云盘一样，上传、下载、分享文件，不过这个系统不需要会员、不限速。</p>
<ul>
<li>
<p>Windows挂载链数NAS</p>
</li>
<li>
<p>Windows挂载天大内NAS（仅限校园网）</p>
</li>
</ul>
</div></template>


