import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>欢迎使用liandanlu（炼丹炉）系统，炼丹炉系统作为实验室GPU管理的新模式，利用Linux容器技术实现每个用户的环境与资源隔离，同时控制每个容器可以访问到的GPU、磁盘、CPU等资源，减少竞争，增加资源利用率。</p><p>同时以8卡GPU服务器作为主机，NAS作为存储设备，实现高密度、高可用的GPU设备利用。</p><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>你还在账号没有sudo权限而苦恼吗？ 你还在为GPU资源抢占而焦躁吗？ 你还在为存储空间不足、CPU爆满而哭泣吗？</p><p>容器化的炼丹炉系统可以解决以上问题。</p><div class="hint-container info"><p class="hint-container-title">ToDo list</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> GPU使用率实时网页显示</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> GPU分配到人</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 实现容器环境无缝迁移</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 文档整合</label></li></ul></div><h2 id="一、-服务器gpu配置分配说明" tabindex="-1"><a class="header-anchor" href="#一、-服务器gpu配置分配说明" aria-hidden="true">#</a> 一、 服务器GPU配置分配说明</h2><p>一台主机一般拥有8个GPU，但是不会同时给每个人都赋予8个GPU的调用权限。（防止抢占）</p><p>一般分配原则为：</p><p><strong>先保证每个人拥有1、2个独占的GPU来防止资源抢占；其次在为每个人分配共享GPU提高资源利用率。</strong></p><p><strong>对于GPU使用频次不高的情况，可以只分配共享GPU；对于特殊任务等长时间占用GPU的情况，可以只分配独占GPU。</strong></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/GPUdocs/user/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
