<template><div><div class="hint-container tip">
<p class="hint-container-title">前言</p>
<p>我们的集群的整体设计理念是<strong>存算分离，数据共享</strong>。因此使用NAS作为核心存储设备，GPU服务器只是作为计算使用。</p>
<p>NAS拥有<strong>更方便使用体验、 更大的存储空间、更高的安全等级</strong>。</p>
</div>
<hr>
<h2 id="nas的概念" tabindex="-1"><a class="header-anchor" href="#nas的概念" aria-hidden="true">#</a> <strong>NAS的概念</strong></h2>
<p>nas就是网络附加存储。</p>
<p>一个单独的存储服务器，使用网线连接在GPU服务器上，GPU服务器通过网络协议可以访问、修改存储服务器上的数据。</p>
<blockquote>
<p>甚至简单的说，就是一个大U盘，这个U盘可以多台机器、多人同时访问。</p>
</blockquote>
<p><strong>NAS服务器在GPU服务器上的形式，就是一个目录</strong>，向这个目录内写入文件，这个文件就在NAS内了；访问<strong>这个目录，就是访问NAS的数据。</strong></p>
<p>在你的容器内使用命令<code v-pre>df -h</code>命令可以看到nas目录的位置。</p>
<figure><img src="@source/GPUdocs/user/img/df-h.png" alt="命令可以看见NAS挂载的位置和容器整体存储分布" tabindex="0" loading="lazy"><figcaption><code v-pre>df -h</code>命令可以看见NAS挂载的位置和容器整体存储分布</figcaption></figure>
<div class="hint-container info">
<p class="hint-container-title">我们nas的配置</p>
<p>目前拥有存储空间 56T（后续可扩展），磁盘双冗余（坏两个磁盘数据都不会丢）。</p>
<p>数据每24小时备份一次；如果误删数据，可以回退到24小时之前的版本来恢复数据。</p>
</div>
<hr>
<h2 id="nas能做的事" tabindex="-1"><a class="header-anchor" href="#nas能做的事" aria-hidden="true">#</a> <strong>NAS能做的事</strong></h2>
<p>nas将所有数据集中存放在一起，可以减少存储成本、跨机通信代价。方便用户使用数据。</p>
<p>下面将列举nas的一些功能，详细可以查看后续文档：</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> <strong>扩大存储空间</strong>，nas存储空间巨大，如果你有一个10T的数据集，可以直接放入nas即可，然后在GPU服务器上进行读写、运算。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> <strong>多人共享</strong>，如果你需要读写其他人的数据，可以直接在nas目录中寻找，不需要进行网络传递。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> <strong>跨机器同步</strong>，如果你在多台GPU服务器上有账号，那么nas的数据在这几台机器上是互通的，数据显示相同，<strong>不需要存多份数据集和多份代码了</strong>；不必来回传递数据，只需在nas上维护一份代码即可。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> <strong>跨平台访问</strong>，目前nas支持linux挂载、windows挂载、手机端挂载，可以随时随地查看日志。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> <strong>文件分享</strong>，可以创建类似百度云的分享，可以将你的数据共享给其他人。</label></li>
</ul>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>目前实验室拥有两个nas，一个位于链数，一个位于校内，分别服务于各自位置的服务器。</p>
</div>
</div></template>


