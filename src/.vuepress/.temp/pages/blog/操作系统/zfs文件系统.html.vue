<template><div><h2 id="一、-zfs文件系统" tabindex="-1"><a class="header-anchor" href="#一、-zfs文件系统" aria-hidden="true">#</a> 一、 ZFS文件系统</h2>
<p>推荐的详细<a href="https://szclsya.me/zh-cn/posts/storage/zfs-setup" target="_blank" rel="noopener noreferrer">博客<ExternalLinkIcon/></a></p>
<h3 id="_1-什么是zfs文件系统" tabindex="-1"><a class="header-anchor" href="#_1-什么是zfs文件系统" aria-hidden="true">#</a> 1. 什么是zfs文件系统</h3>
<p>文件系统是操作系统中管理文件数据的一种东西。</p>
<p>比如Windows常用的的文件系统就是<code v-pre>NTFS</code>；U盘常用的文件系统就是<code v-pre>FAT32</code>；Linux常用的文件系统就有<code v-pre>ext4</code>之类的。
当格式化一个分区的时候，就需要选择一个文件系统进行格式化。</p>
<p>原来的文件系统有缺陷，比如<code v-pre>FAT32</code>不允许单个文件大小超过4G，<code v-pre>NTFS</code>又不开源。</p>
<p>ZFS也是一个文件系统，不过更加先进，并且可以进行很多管理操作。
其支持最大单个文件大小为 16 EB（1 EB = 1024 PB），
最大 256 千万亿（256*1015 ）的 ZB（1 ZB = 1024 EB）的存储</p>
<h3 id="_2-zfs文件系统的优势" tabindex="-1"><a class="header-anchor" href="#_2-zfs文件系统的优势" aria-hidden="true">#</a> 2. ZFS文件系统的优势</h3>
<p>ZFS文件系统可以进行<strong>磁盘软Raid</strong>，进行磁盘的冗余与整合。
同时也可以很方便的进行扩容与缩容之类的，（跟LVM之类的差不多吧，不过zfs可以组raid。）</p>
<p>但是zfs比较吃内存，因为他将内存用户读写缓存，因此比较吃内存。</p>
<h3 id="_3-zfs文件系统讲解" tabindex="-1"><a class="header-anchor" href="#_3-zfs文件系统讲解" aria-hidden="true">#</a> 3. ZFS文件系统讲解</h3>
<h4 id="_3-1-几个概念" tabindex="-1"><a class="header-anchor" href="#_3-1-几个概念" aria-hidden="true">#</a> 3.1 几个概念</h4>
<ul>
<li><code v-pre>disk</code>磁盘，物理磁盘，就是一块一块的物理介质</li>
<li><code v-pre>vdev</code>虚拟设备，逻辑磁盘，就是将物理磁盘整合之后形成的虚拟逻辑设备</li>
<li><code v-pre>pool</code>存储池，由虚拟磁盘组成的存储池，相当于LVM中的逻辑卷组</li>
<li><code v-pre>dataset</code>数据集（<code v-pre>zvol</code>），在存储池中划分出来的一部分分区叫做数据集，就相当于<code v-pre>分区</code></li>
</ul>
<figure><img src="@source/blog/操作系统/img/zfs.png" alt="zfs文件系统自底向上的组成示例" tabindex="0" loading="lazy"><figcaption>zfs文件系统自底向上的组成示例</figcaption></figure>
<h4 id="_3-2-管理方式以及如何使用" tabindex="-1"><a class="header-anchor" href="#_3-2-管理方式以及如何使用" aria-hidden="true">#</a> 3.2 管理方式以及如何使用</h4>
<ul>
<li>
<p>多个<code v-pre>磁盘(disk)</code>可以组成一个<code v-pre>vdev</code>；这个<code v-pre>vdev</code>可以选择磁盘的组成方式，可以选择<code v-pre>stripe</code>，<code v-pre>mirror</code>，<code v-pre>raid-z</code>等等方式（用来保证<code v-pre>vdev</code>的数据安全性，也就是<code v-pre>raid</code>）。损坏盘数超过限制，那么整个<code v-pre>vdev</code>数据将会损坏。
有硬盘损坏，那么可以<code v-pre>vdev</code>为单位重建。替换在命令行里分离（detach）损坏的磁盘，加入（add）新的磁盘，zfs会自动重建<code v-pre>vdev</code>重新恢复冗余性。</p>
<ul>
<li><code v-pre>stripe</code> 没有冗余</li>
<li><code v-pre>mirror</code> 镜像文件</li>
<li><code v-pre>raid-z</code> 一个磁盘冗余，允许损坏一个磁盘</li>
<li><code v-pre>raid-z2</code> 两个磁盘冗余。允许损坏两个磁盘</li>
</ul>
</li>
<li>
<p>多个<code v-pre>vdev</code>可以组成一个<code v-pre>池（pool）</code>，在一个<code v-pre>pool</code>中，每个<code v-pre>vdev</code>之间是<code v-pre>stripe</code>关系，也就是说<strong>一个<code v-pre>vdev</code>损坏，整个池的数据丢失</strong>。
一般来说，一个<code v-pre>pool</code>的<code v-pre>vdev</code>必须是同样的模式（比如说两个<code v-pre>vdev</code>组成<code v-pre>pool</code>，那么两个<code v-pre>vdev</code>不能一个是<code v-pre>raid-z</code>一个是<code v-pre>raid-z2</code>）。如果混合搭配会造成性能下降（不过也问题不大）。</p>
</li>
<li>
<p><code v-pre>zfs</code>存储池可以设置缓存，缓存分为3中，读缓存<code v-pre>L2ARC</code>缓存（cache），写日志缓存ZIL <code v-pre>log</code>，元数据缓存<code v-pre>metadata</code></p>
</li>
<li>
<p><code v-pre>L2ARC</code>缓存损坏不会引起数据损失，其他写缓存损坏会导致原存储池损坏</p>
</li>
<li>
<p><code v-pre>数据集（dataset）</code>就是<code v-pre>池(pool)</code>里面的目录/分区，（如<code v-pre>/mnt/labpool/public</code>），可以在<code v-pre>池</code>里新建<code v-pre>数据集</code>。</p>
</li>
</ul>
<h3 id="_4-命令使用" tabindex="-1"><a class="header-anchor" href="#_4-命令使用" aria-hidden="true">#</a> 4. 命令使用</h3>
<p>安装zfs</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> zfsutils-linux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-1-创建存储池" tabindex="-1"><a class="header-anchor" href="#_4-1-创建存储池" aria-hidden="true">#</a> 4.1 创建存储池</h4>
<ul>
<li>创建一个新的存储池</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>zpool create <span class="token operator">&lt;</span>pool_name<span class="token operator">></span> <span class="token punctuation">[</span>raidz<span class="token operator">|</span>raidz2<span class="token operator">|</span>raidz3<span class="token operator">|</span>mirror<span class="token punctuation">]</span> <span class="token operator">&lt;</span>disk<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中<code v-pre>disk</code>也就是<code v-pre>/dev/sda</code>这些磁盘，但是更推荐使用<code v-pre>ID</code>绑定，这样可以防止硬盘位置变化对于硬盘名称的改变。因此请使用<code v-pre>/dev/disks/by-id/disk_name</code>创建池。</p>
<ul>
<li>存储池设置挂载点，并且设置开机自动挂载</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>zfs <span class="token builtin class-name">set</span> <span class="token assign-left variable">mountpoint</span><span class="token operator">=</span><span class="token operator">&lt;</span>/mnt/挂载点<span class="token operator">></span> <span class="token operator">&lt;</span>pool_name<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-2-给存储池添加vdev" tabindex="-1"><a class="header-anchor" href="#_4-2-给存储池添加vdev" aria-hidden="true">#</a> 4.2 给存储池添加vdev</h4>
<ul>
<li>添加缓存<code v-pre>vdev</code>，其中<code v-pre>&lt;cache_type&gt;</code>就是之前介绍的几种类型（<code v-pre>cache</code>,<code v-pre>log</code>）</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>zpool <span class="token function">add</span> <span class="token operator">&lt;</span>pool_name<span class="token operator">></span> <span class="token operator">&lt;</span>cache_type<span class="token operator">></span> <span class="token punctuation">[</span>raidz<span class="token operator">|</span>raidz2<span class="token operator">|</span>raidz3<span class="token operator">|</span>mirror<span class="token punctuation">]</span> <span class="token operator">&lt;</span>disk<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>添加缓存<code v-pre>vdev</code></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>zpool <span class="token function">add</span> <span class="token operator">&lt;</span>pool_name<span class="token operator">></span> <span class="token punctuation">[</span>raidz<span class="token operator">|</span>raidz2<span class="token operator">|</span>raidz3<span class="token operator">|</span>mirror<span class="token punctuation">]</span> <span class="token operator">&lt;</span>disk<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="监控命令" tabindex="-1"><a class="header-anchor" href="#监控命令" aria-hidden="true">#</a> 监控命令</h4>
<ul>
<li>监视容量和读取操作</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>zpool iostat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>查看存储池状态</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>zpool status <span class="token operator">&lt;</span>pool_name<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


