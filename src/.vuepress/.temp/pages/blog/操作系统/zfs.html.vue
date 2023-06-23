<template><div><h2 id="zfs文件系统" tabindex="-1"><a class="header-anchor" href="#zfs文件系统" aria-hidden="true">#</a> ZFS文件系统</h2>
<h3 id="什么是zfs文件系统" tabindex="-1"><a class="header-anchor" href="#什么是zfs文件系统" aria-hidden="true">#</a> 什么是zfs文件系统</h3>
<p>文件系统是操作系统中管理文件数据的一种东西。</p>
<p>比如Windows常用的的文件系统就是NTFS；U盘常用的文件系统就是FAT32；Linux常用的文件系统就有ext4之类的。
当格式化一个分区的时候，就需要选择一个文件系统进行格式化。</p>
<p>ZFS也是一个文件系统，不过更加先进，并且可以进行很多管理操作。</p>
<h3 id="zfs文件系统的优势" tabindex="-1"><a class="header-anchor" href="#zfs文件系统的优势" aria-hidden="true">#</a> ZFS文件系统的优势</h3>
<p>ZFS文件系统可以进行<strong>磁盘软Raid</strong>，进行磁盘的冗余与整合。
同时也可以很方便的进行扩容与缩容之类的，（跟LVM之类的差不多吧，不过zfs可以组raid。）</p>
<p>但是zfs比较吃内存，因为他将内存用户读写缓存，因此比较吃内存。</p>
<h3 id="zfs文件系统讲解" tabindex="-1"><a class="header-anchor" href="#zfs文件系统讲解" aria-hidden="true">#</a> ZFS文件系统讲解</h3>
<h4 id="几个概念" tabindex="-1"><a class="header-anchor" href="#几个概念" aria-hidden="true">#</a> 几个概念</h4>
<p><code v-pre>disk</code>磁盘，物理磁盘，就是一块一块的物理介质
<code v-pre>vdev</code>虚拟设备，逻辑磁盘，就是将物理磁盘整合之后形成的虚拟逻辑设备
<code v-pre>pool</code>存储池，由虚拟磁盘组成的存储池，相当于LVM中的逻辑卷组
<code v-pre>dataset</code>数据集，在存储池中划分出来的一部分分区叫做数据集，就相当于<code v-pre>分区</code></p>
<figure><img src="https://note.youdao.com/yws/res/1366/WEBRESOURCE8dd4db345330c2ca682a309df91bfb5c" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h4 id="管理方式以及如何使用" tabindex="-1"><a class="header-anchor" href="#管理方式以及如何使用" aria-hidden="true">#</a> 管理方式以及如何使用</h4>
<ul>
<li>多个<code v-pre>磁盘(disk)</code>可以组成一个<code v-pre>vdev</code>；</li>
</ul>
<p>这个<code v-pre>vdev</code>可以选择磁盘的组成方式，可以选择<code v-pre>stripe</code>，<code v-pre>mirror</code>，<code v-pre>raid-z</code>等等方式（用来保证<code v-pre>vdev</code>的数据安全性，也就是<code v-pre>raid</code>）。损坏盘数超过限制，那么整个<code v-pre>vdev</code>数据将会损坏。</p>
<p>有硬盘损坏，那么可以<code v-pre>vdev</code>为单位重建。替换在命令行里分离（detach）损坏的磁盘，加入（add）新的磁盘，zfs会自动重建<code v-pre>vdev</code>重新恢复冗余性。</p>
<pre><code>- `stripe` 容量为
- 
</code></pre>
<figure><img src="https://note.youdao.com/yws/res/1359/WEBRESOURCEa8b601e5c9d9fe3e1a1e406d23c7e775" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<ul>
<li>多个<code v-pre>vdev</code>可以组成一个<code v-pre>池（pool）</code>，在一个<code v-pre>pool</code>中，每个<code v-pre>vdev</code>是<code v-pre>stripe</code>关系，一个<code v-pre>vdev</code>损坏，整个池的数据丢失</li>
</ul>
<p>一个<code v-pre>pool</code>的<code v-pre>vdev</code>必须是同样的模式（比如说两个<code v-pre>vdev</code>组成<code v-pre>pool</code>，那么两个<code v-pre>vdev</code>不能一个是<code v-pre>raid-z</code>一个是<code v-pre>raid-z2</code>）</p>
<ul>
<li><code v-pre>数据集（dataset）</code>就是<code v-pre>池(pool)</code>里面的目录（如<code v-pre>/mnt/mystorage</code>），可以在<code v-pre>池</code>里新建<code v-pre>数据集</code>，然后每个<code v-pre>数据集</code>进行单独网络共享</li>
</ul>
</div></template>


