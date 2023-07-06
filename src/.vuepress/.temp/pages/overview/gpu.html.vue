<template><div><h3 id="linkdata位置服务器" tabindex="-1"><a class="header-anchor" href="#linkdata位置服务器" aria-hidden="true">#</a> linkdata位置服务器</h3>
<Tabs id="3" :data='[{"title":"存储"},{"title":"mercury"},{"title":"venus"},{"title":"earth"},{"title":"mars"},{"title":"pluto"},{"title":"charon (尚未容器化)"}]' tab-id="linkdata">
<template #tab0="{ title, value, isActive }">
<p><strong>机器</strong>：RH2288H-V3</p>
<p><strong>显卡</strong>：NVIDIA GTX 1050Ti 4G</p>
<p><strong>CPU</strong>：Intel Xeon E5-2643v4 * 2 共 12核24线程</p>
<p><strong>内存</strong>：128G</p>
<p><strong>硬盘</strong>：</p>
<ul>
<li>labpool： 16T 机械硬盘 * 6 Raid-z2</li>
<li>visdrone：8T 机械硬盘 * 6 Raid-z2</li>
<li>系统盘：512G 三星sata + 120G 金士顿sata Raid1</li>
<li>缓存盘：1T NVME读缓存L2</li>
</ul>
<p><strong>网段</strong>：40000</p>
</template>
<template #tab1="{ title, value, isActive }">
<p><strong>显卡</strong>：NVIDIA GTX 1080ti 11G * 8</p>
<p><strong>CPU</strong>：Intel Xeon E5-2690v4 * 2 共 28核56线程</p>
<p><strong>内存</strong>：128G</p>
<p><strong>硬盘</strong>：1T sata系统盘, 2T NVME容器盘</p>
<p><strong>网段</strong>：40100</p>
<p><strong>个人容器限制</strong>：未限制</p>
</template>
<template #tab2="{ title, value, isActive }">
<p><strong>显卡</strong>：NVIDIA TITAN Xp 12G * 8</p>
<p><strong>CPU</strong>：Intel Xeon E5-2680v4 * 2 共 28核56线程</p>
<p><strong>内存</strong>：128G</p>
<p><strong>硬盘</strong>：1T sata系统盘, 2T NVME容器盘</p>
<p><strong>网段</strong>：40200</p>
<p><strong>个人容器限制</strong>：CPU：每容器 <strong>30线程</strong></p>
</template>
<template #tab3="{ title, value, isActive }">
<p><strong>显卡</strong>：NVIDIA RTX A6000 48G * 8</p>
<p><strong>CPU</strong>：Intel Xeon Platinum 8255C * 2 共 48核96线程</p>
<p><strong>内存</strong>：512G</p>
<p><strong>硬盘</strong>：480 sata系统盘 * 2, 960G 机械容器盘 * 2, 4T NVME资料盘 * 4，2T NVME盘</p>
<p><strong>网段</strong>：40300</p>
<p><strong>个人容器限制</strong>：未限制</p>
</template>
<template #tab4="{ title, value, isActive }">
<p><strong>显卡</strong>：NVIDIA RTX 2080ti 22G * 7</p>
<p><strong>CPU</strong>：Intel Xeon E5-2690v4 * 2 共 28核56线程</p>
<p><strong>内存</strong>：192G</p>
<p><strong>硬盘</strong>：1T sata系统盘, 2T NVME容器盘 * 2</p>
<p><strong>网段</strong>：40400</p>
<p><strong>个人容器限制</strong>：未限制</p>
</template>
<template #tab5="{ title, value, isActive }">
<p><strong>显卡</strong>：NVIDIA RTX 3090 24G * 8</p>
<p><strong>CPU</strong>：Intel Xeon Gold 5218 * 2 共 32核64线程</p>
<p><strong>内存</strong>：256G</p>
<p><strong>硬盘</strong>：1T sata系统盘, 4T sata容器盘</p>
<p><strong>网段</strong>：40900</p>
<p><strong>个人容器限制</strong>：CPU：亚茹 <strong>30线程</strong></p>
</template>
<template #tab6="{ title, value, isActive }">
<p><strong>显卡</strong>：NVIDIA RTX 3090 24G * 8</p>
<p><strong>CPU</strong>：Intel Xeon Gold 5218 * 2 共 32核64线程</p>
<p><strong>内存</strong>：256G</p>
<p><strong>硬盘</strong>：1T sata系统盘, 4T sata容器盘</p>
<p><strong>网段</strong>：40900</p>
<!-- @tab vulcan -->
</template>
</Tabs>
<h3 id="tju位置服务器" tabindex="-1"><a class="header-anchor" href="#tju位置服务器" aria-hidden="true">#</a> tju位置服务器</h3>
<Tabs id="168" :data='[{"title":"存储"},{"title":"stark (waiting)"},{"title":"S-America (waiting)"},{"title":"N-America (waiting)"},{"title":"Asia (waiting)"},{"title":"Africa (no-budget)"}]' tab-id="tju">
<template #tab0="{ title, value, isActive }">
<p><strong>服务器</strong>：浪潮SA5212M4</p>
<p><strong>CPU</strong>：</p>
<p><strong>内存</strong>：128G</p>
<p><strong>硬盘</strong>：</p>
<ul>
<li>tjupool：14T SAS机械盘 * 6 Raid-z2</li>
<li>系统盘：128G金士顿 + 120G梵想 Raid1</li>
<li>缓存盘：1T NVME读缓存L2</li>
</ul>
</template>
<template #tab1="{ title, value, isActive }">
<p><strong>显卡</strong>：NVIDIA RTX 3090 24G * 4</p>
<p><strong>CPU</strong>：Intel Xeon E5-2673 v3 * 2 共 24核48线程</p>
<p><strong>内存</strong>：</p>
<p><strong>硬盘</strong>：</p>
<p><strong>网段</strong>：</p>
</template>
<template #tab2="{ title, value, isActive }">
<p><strong>显卡</strong>：NVIDIA RTX 3090 24G * 8</p>
<p><strong>CPU</strong>：Intel Xeon Platinum 8255C * 2 共 48核96线程</p>
<p><strong>内存</strong>：384G</p>
<p><strong>硬盘</strong>：1T sata系统盘，4T NVME容器盘</p>
<p><strong>网段</strong>：</p>
</template>
<template #tab3="{ title, value, isActive }">
<p><strong>显卡</strong>：NVIDIA RTX 3090 24G * 8</p>
<p><strong>CPU</strong>：Intel Xeon Platinum 8255C * 2 共 48核96线程</p>
<p><strong>内存</strong>：384G</p>
<p><strong>硬盘</strong>：1T sata系统盘，4T NVME容器盘</p>
<p><strong>网段</strong>：</p>
</template>
<template #tab4="{ title, value, isActive }">
<p><strong>显卡</strong>：NVIDIA RTX 2080ti 22G * 8</p>
<p><strong>CPU</strong>：Intel Xeon E5-2673v4 * 2 共 40核80线程</p>
<p><strong>内存</strong>：256G</p>
<p><strong>硬盘</strong>：1T sata系统盘, 4T NVME容器盘</p>
<p><strong>网段</strong>：</p>
<p><strong>个人容器限制</strong>：未限制</p>
</template>
<template #tab5="{ title, value, isActive }">
<p><strong>显卡</strong>：NVIDIA RTX 3080 20G * 8</p>
<p><strong>CPU</strong>：Intel Xeon Silver 4210R * 2 共 20核40线程</p>
<p><strong>内存</strong>：192G</p>
<p><strong>硬盘</strong>：1T sata系统盘, 2T NVME容器盘</p>
<p><strong>网段</strong>：</p>
<p><strong>个人容器限制</strong>：未限制</p>
<p></p>
</template>
</Tabs>
</div></template>


