<template><div><h1 id="nas日常维护的文档" tabindex="-1"><a class="header-anchor" href="#nas日常维护的文档" aria-hidden="true">#</a> NAS日常维护的文档</h1>
<p>维护文档提供给管理员使用，用来做日常维护与常见故障处理。</p>
<p><a href="https://www.bilibili.com/video/BV1gG411T751/" target="_blank" rel="noopener noreferrer">b站视频详解讲解TrueNAS系统<ExternalLinkIcon/></a>，以下内容也是视频中重要知识点的总结和一些根据实际情况变化的补充</p>
<p>!!! info  ToDo List
- [ ] 实验室数据快照
- [x] public权限设置全公开
- [ ] private挂载进入GPU容器内
- [ ] 新建一个数据集，用来保存
- [ ] 服务器加内存，梭哈是一种智慧
- [ ] 寻找一种更优美的方式桥接网络</p>
<h2 id="一、-存储池管理" tabindex="-1"><a class="header-anchor" href="#一、-存储池管理" aria-hidden="true">#</a> 一、 存储池管理</h2>
<p>!!!tip 前置知识
ZFS文件系统，存储池、vdev、数据集、硬盘之间关系。</p>
<h3 id="_1-硬盘替换-原先硬盘无损坏情况下" tabindex="-1"><a class="header-anchor" href="#_1-硬盘替换-原先硬盘无损坏情况下" aria-hidden="true">#</a> 1. 硬盘替换（原先硬盘无损坏情况下）</h3>
<p>使用目的：原先硬盘容量小，更换为大硬盘（只有将一个vdev中的全部硬盘更换，整个池的容量才会变化。不然容量是遵循木桶原理的）</p>
<ul>
<li>进入存储池的<code v-pre>状态</code>中，选择一块池中的硬盘，选择<code v-pre>更换</code>
<img src="@source/NASdocs/维护文档/img/rep1.png" alt="rep1.jpg" loading="lazy"></li>
<li>选择<code v-pre>更换</code>之后，可以选择任意空闲硬盘，<strong>替换后的硬盘需要比原先硬盘大才行</strong>；之后需要等待半天的数据导入，就完成了替换
<img src="@source/NASdocs/维护文档/img/rep2.png" alt="rep2.jpg" loading="lazy"></li>
</ul>
<h3 id="_2-硬盘损坏-掉盘" tabindex="-1"><a class="header-anchor" href="#_2-硬盘损坏-掉盘" aria-hidden="true">#</a> 2. 硬盘损坏/掉盘</h3>
<p>!!! danger 高危故障
硬盘坏盘是最常见的故障，也是最危险的故障。需要及时替换新的硬盘，否则数据安全等级将要降级。
在冗余范围内的损坏不会对数据有影响，但是需要及时更换新的硬盘，如要定期查看truenas的存储池是否online
<mark>ONLINE为正常状态，在线状态；</mark>
<mark>DEGRADED为有硬盘损坏的状态，降级状态；</mark></p>
<p>损坏可以分为一下几种</p>
<h4 id="_2-1-硬盘掉线-硬盘本身没问题" tabindex="-1"><a class="header-anchor" href="#_2-1-硬盘掉线-硬盘本身没问题" aria-hidden="true">#</a> 2.1 硬盘掉线，硬盘本身没问题</h4>
<p>解决方法：将原来的硬盘重新插入即可，系统会自动恢复。在掉盘期间也可以正常读写。</p>
<h4 id="_2-2-硬盘掉线-硬盘本身出问题-这个硬盘内的数据无法恢复" tabindex="-1"><a class="header-anchor" href="#_2-2-硬盘掉线-硬盘本身出问题-这个硬盘内的数据无法恢复" aria-hidden="true">#</a> 2.2 硬盘掉线，硬盘本身出问题，这个硬盘内的数据无法恢复</h4>
<p>解决方法：</p>
<ul>
<li>拔出坏了的硬盘，之后进入存储池的设备管理中
<img src="@source/NASdocs/维护文档/img/break.png" alt="break.jpg" loading="lazy"></li>
<li>选择新的好硬盘进行<code v-pre>replace</code>即可。<strong>之后备份数据将会写入新的硬盘中，对于大容量NAS这个过程十分漫长，可能长达一个星期，期间一定做好监控，可能会有其他硬盘在恢复过程中损坏。（因为我们购买的硬盘属于统一批次，寿命可能相同）。</strong>
<img src="@source/NASdocs/维护文档/img/replace.png" alt="replace.jpg" loading="lazy"></li>
</ul>
<h3 id="_3-存储池扩展" tabindex="-1"><a class="header-anchor" href="#_3-存储池扩展" aria-hidden="true">#</a> 3. 存储池扩展</h3>
<p>如果原先服务器中的硬盘空间不够用了，除了新加硬盘之外，还需要将新加入的硬盘进行挂载。
挂载的硬盘可以建立新的存储池，也可以扩展原先的存储池。</p>
<ul>
<li>
<p>建立新的存储池（<strong>新建方法可以参考部署文档</strong>）
这种方案会使得新的存储池路径和原先的路径不同，需要设置新的共享，如同普通电脑新加入一个<code v-pre>E盘</code>分区，会与原先的<code v-pre>D盘</code>访问路径不同，需要修改。但是这种方案可以提升一定的数据安全性，不同存储池之间的数据不影响。</p>
</li>
<li>
<p>扩展原先的存储池 (<strong>下文重点介绍扩展存储池</strong>)</p>
</li>
</ul>
<p>!!! example 现状说明
目前的NAS为6块硬盘组成一个<code v-pre>vdev</code>的存储池，可以添加新的<code v-pre>vdev</code>，使得原先的存储池变成两个<code v-pre>vdev</code>，从而在路径不变的情况下提升原先文件夹的容量。<strong>新加vdev的raid方式需要和原来的vdev相同，不然无法扩展。原先的vdev为6块盘的raid-z2，因此建议新加的盘也组成raid-z2，加6块盘，刚好服务器最多支持12块盘。</strong></p>
<p><strong>ZFS文件系统中，vdev之间为raid-0（strip）组成存储池，一旦有一个vdev损坏，整个存储池的文件将无法恢复。扩展之后是无法缩容的。</strong></p>
<ul>
<li>在存储池选项中选择<code v-pre>添加vdevs</code>，之后配置vdevs即可
<img src="@source/NASdocs/维护文档/img/addvdev.png" alt="addvdev.jpg" loading="lazy"></li>
</ul>
<h3 id="_4-存储池迁移" tabindex="-1"><a class="header-anchor" href="#_4-存储池迁移" aria-hidden="true">#</a> 4. 存储池迁移</h3>
<p>如果更换服务器(或者原先TrueNAS系统损坏，重装系统)，可以直接将现在的所有存储池硬盘转移到新服务器上，然后让新服务器连接原来的硬盘中的池即可，<strong>注意不要新建池，新建池会破坏原来的所有数据。当然，新旧两台服务器的操作系统都必须是TrueNAS。</strong></p>
<ul>
<li>
<p>首先在原先服务器上断开(导出)存储池
<img src="@source/NASdocs/维护文档/img/discon.png" alt="discon.jpg" loading="lazy"></p>
</li>
<li>
<p>在全部硬盘插入新的服务器后，在新的服务器上选择导入存储池即可。
<img src="@source/NASdocs/维护文档/img/import.png" alt="import.jpg" loading="lazy"></p>
</li>
<li>
<p>由于在新的系统中没有之前的用户账号，所以需要重新设置数据集的权限，来方便在新的机器上访问。（或者在命令行里用root访问）</p>
</li>
</ul>
<h3 id="_5-存储池加密" tabindex="-1"><a class="header-anchor" href="#_5-存储池加密" aria-hidden="true">#</a> 5. 存储池加密</h3>
<p>!!! danger 高危操作
没有那个金刚钻就不要揽瓷器活......
这个操作不做介绍，需要有足够的能力；否则秘钥丢失，数据火葬场。
!!! example 现状说明
实验室目前的NAS没有加密，今后也不打算加密</p>
<h3 id="_6-邮件提醒" tabindex="-1"><a class="header-anchor" href="#_6-邮件提醒" aria-hidden="true">#</a> 6. 邮件提醒</h3>
<p>!!! example 现状说明
目前没有设置邮件提醒，比较复杂，后续设置人员设置完成后记得补充文档</p>
<h2 id="二、-数据集管理" tabindex="-1"><a class="header-anchor" href="#二、-数据集管理" aria-hidden="true">#</a> 二、 数据集管理</h2>
<p>数据集也就是存储池下的文件夹，可以设置共享与权限等内容。
后面可以根据需求新添加数据。</p>
<p>!!! example 现状说明
目前主要有两个数据集<code v-pre>public</code>和<code v-pre>private</code>数据集，分别用来保存私密文件和公开文件。两个数据集均开启了<code v-pre>去重</code>与<code v-pre>压缩</code>，提高硬盘使用效率。因为大家的数据集重复率很高。</p>
<h3 id="_1-基本设置" tabindex="-1"><a class="header-anchor" href="#_1-基本设置" aria-hidden="true">#</a> 1. 基本设置</h3>
<p>基本只更改<code v-pre>压缩</code>，<code v-pre>去重</code>这几个选项即可，其他选项根据需求自己看着办。</p>
<h3 id="_2-快照设置" tabindex="-1"><a class="header-anchor" href="#_2-快照设置" aria-hidden="true">#</a> 2. 快照设置</h3>
<p>可以为数据集添加定时快照功能，方便在数据误删除时恢复数据。
TrueNAS中的快照基本不占空间，创建很快，可以每天甚至每小时备份一次，然后每个备份存储一星期也没事。</p>
<p>!!! bug 现状（bug）说明
目前实验室NAS没有设置快照</p>
<h3 id="_3-权限设置" tabindex="-1"><a class="header-anchor" href="#_3-权限设置" aria-hidden="true">#</a> 3. 权限设置</h3>
<p>!!! danger 高危操作
错误的权限设置虽然不会让数据无法读取（因为root永远最大），但是会破坏原来的文件私有性或者公有性。不建议随意更改。</p>
<p>!!! bug 现状（bug）说明
<code v-pre>private</code>的权限为ACL，但是似乎和普通的通常权限没有什么区别，因为目前<code v-pre>私有</code>的控制是由<code v-pre>主目录</code>中的权限只有所属人有权限来控制（参考下一章“用户管理”）。  能跑就不要动，按理来说改回UOG权限也没问题，但是不要选择递归，这样会覆盖下面的<code v-pre>主目录</code>设置的权限，破坏私有性。</p>
<p>!!! bug 现状(bug)说明
<code v-pre>public</code>权限有问题，没办法让新建文件夹有读写权限
- 现在服务器有两个数据集<code v-pre>public</code>和<code v-pre>private</code>。
<code v-pre>public</code>的所属人是master，所属组是<code v-pre>lab-student</code>。正是这样，组内的学生才对其有全部读写执行权限。
<img src="@source/NASdocs/维护文档/img/public.png" alt="public.jpg" loading="lazy"></p>
<h2 id="三、用户管理" tabindex="-1"><a class="header-anchor" href="#三、用户管理" aria-hidden="true">#</a> 三、用户管理</h2>
<p>!!! tip 前置知识
linux的用户、组、所有人、所属组概念（即）</p>
<p>用户主要管理在<code v-pre>证书</code>这个项目下面。
需要为实验室每个人创建一个用户，方便他们登录。</p>
<p>!!! bug 现状（bug）说明
系统目前同时拥有一个管理员用户<code v-pre>master</code>，属于<code v-pre>admin</code>组（本来想叫master组，但是起错名字了），不过目前没有管理员权限，，，，没设置好，还是用root敲命令行吧</p>
<h3 id="_1-用户组" tabindex="-1"><a class="header-anchor" href="#_1-用户组" aria-hidden="true">#</a> 1. 用户组</h3>
<p>在创建新用户时，默认会创建一个同名的组，<strong>但是我们不这么做，为了方便管理，我们创建了一个名为<code v-pre>lab-student</code>的用户组，加入所有实验室学生</strong></p>
<h3 id="_2-创建用户" tabindex="-1"><a class="header-anchor" href="#_2-创建用户" aria-hidden="true">#</a> 2. 创建用户</h3>
<p>为没有账号的同学创建新的账户，请按照<code v-pre>使用指南</code>中的账户名、密码格式创建用户。</p>
<p>在创建新用户时注意</p>
<ul>
<li><code v-pre>全名</code>只是一个标记，没有什么用，<code v-pre>用户名</code>才是登录用的，但只有8位。一般用全名前8位（输入全名后，系统会自动节选前8位）</li>
<li>取消创建新的用户组，设置主用户组为<code v-pre>lab-student</code>，设置附加组为<code v-pre>builtin_user</code></li>
<li>设置主目录位于<code v-pre>private</code>下，文件名为全名。
<strong>第一次创建主目录时，他会在全名文件夹下新建一个缩写名的文件夹，这不符合我们的管理规范。因此在创建完之后，需要重新编辑新用户的主目录为<code v-pre>private</code>下的全名文件夹</strong>
下图为目录设置时产生的嵌套现象，我们需要再新建完用户，重新设置他的主目录，才能让全名文件夹为他的私有目录
<img src="@source/NASdocs/维护文档/img/dir.png" alt="dir.jpg" loading="lazy"></li>
<li>权限设置，只有用户本身有读写执行权限，其他人没有任何权限，这样能保证私密性。</li>
</ul>
<p>设置一览图
<img src="@source/NASdocs/维护文档/img/user.png" alt="user.jpg" loading="lazy"></p>
<h2 id="四、共享设置" tabindex="-1"><a class="header-anchor" href="#四、共享设置" aria-hidden="true">#</a> 四、共享设置</h2>
</div></template>


