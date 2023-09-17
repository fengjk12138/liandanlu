<template><div><h2 id="什么是容器" tabindex="-1"><a class="header-anchor" href="#什么是容器" aria-hidden="true">#</a> <strong>什么是容器</strong></h2>
<hr>
<p>一台机器的资源是有限的，比如CPU、GPU、内存、硬盘等；并且每个人的编程环境不同，权限冲突、版本冲突不断，因此我们需要一种技术来<strong>隔离每个人的环境，控制每个人的资源</strong>。</p>
<div class="hint-container note">
<p class="hint-container-title">容器技术</p>
<p>容器技术一项伟大的发明，可以简单理解为虚拟机，在系统层面隔离每个人的使用环境，并且可以将容器打包、迁移、复制，实现每个人环境可以在不同计算机上的准确复现。详情可以了解<code v-pre>docker</code>、<code v-pre>liunxcontainer(lxc)</code>技术。</p>
</div>
<h3 id="容器技术的优点" tabindex="-1"><a class="header-anchor" href="#容器技术的优点" aria-hidden="true">#</a> 容器技术的优点</h3>
<ul>
<li>每个人都是自己容器的<code v-pre>root</code>，可以自由重启、配置环境、删除文件；</li>
<li>容器可以完整的在不同服务器之间迁移，不会改变容器内已经配置好的环境和数据；</li>
<li>不同人之间的资源隔离和环境隔离，互不影响。</li>
</ul>
<h2 id="我们服务器上的容器设置" tabindex="-1"><a class="header-anchor" href="#我们服务器上的容器设置" aria-hidden="true">#</a> <strong>我们服务器上的容器设置</strong></h2>
<hr>
<p>服务器的物理机一般有8张GPU，隔离了每个人的GPU。</p>
<p>每个服务器的硬件配置和分配方式见<RouterLink to="/overview/gpu.html">分封图</RouterLink>。</p>
<p>为了避免资源抢占，每个人的容器只能访问一部分GPU。
为每个人分配的GPU中，会包含<strong>独占卡</strong>和<strong>共享卡</strong>。</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>独占卡只有你能访问到，不会有其他人占用，防止抢占；</p>
<p>共享卡是可以多人同时访问，可以提高显卡利用率，防止资源浪费。</p>
<p>每个人申请算力的时候可以根据自己的课题特点来申请资源，如确实需要长时间高频次占用显卡，那就申请多独占卡；自己使用的不太频繁，可以申请共享卡，共享卡的数量一般比较多。</p>
<p>不是自己访问内的卡，自己容器内不可见。<strong>如果赶DDL，可以和服务器内其他用户协商，让管理员给你的容器增加可访问GPU。</strong></p>
</div>
<!-- - 整个容器中的系统只属于使用者本人，可以任意重启、任意配置环境、任意修改，不用担心影响他人；

- 容器内也有与他人公用的资源，比如GPU与NAS存储。NAS存储详见[详细文档](https://docs.heartbreaker.icu/GPUdocs/)，下文主要介绍GPU分配；
>`nas-public-linkdata`，`nas-public-tju`等目录为NAS目录，为方便用户使用而设立，具有极大的作用，详情了解[NAS文档](https://docs.heartbreaker.icu/NASdocs/user)。 -->
<!-- - 在容器名一般由`服务器名-人名`组成，比如`mars-huanghansheng`，在给管理员报告使用问题时，需要说清楚是哪台服务器的哪个容器出现问题，需要报告清楚`容器名`；

- 服务器上网与翻墙方式在不同地点有不同配置方式，见详细文档。 -->
<!-- ### **2. GPU分配原则**
由于物理机有8张GPU，同时分配给所有人会导致严重的抢占，因此我们使用容器进行资源控制，每个人的容器只能访问一部分GPU。 -->
<figure><img src="@source/Userdocs/fast/img/GPU分配.png" alt="某台服务器的GPU分配示例" width="400" tabindex="0" loading="lazy"><figcaption>某台服务器的GPU分配示例</figcaption></figure>
<p>GPU可以细分到单人，如在<code v-pre>黄汉升</code>的容器内<code v-pre>nvidia-smi</code>，只能看到4张显卡。</p>
<p>0号卡只有自己可以访问，其他人是看不见的，<strong>永远不会被其他人占用</strong>。
其余几张卡是共享卡，可以协商使用。</p>
<figure><img src="@source/Userdocs/fast/img/nvidia-smi.png" alt="8卡机器里，只能看到4张显卡" height="300" tabindex="0" loading="lazy"><figcaption>8卡机器里，<code v-pre>nvidia-smi</code>只能看到4张显卡</figcaption></figure>
</div></template>


