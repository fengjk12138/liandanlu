import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><hr><h2 id="项目内容" tabindex="-1"><a class="header-anchor" href="#项目内容" aria-hidden="true">#</a> 项目内容</h2><p>你还在为云盘速度拉胯而苦恼吗？你还在为多台服务器数据、代码不同步而焦躁吗？你还在为管理员不给你sudo权限而哭泣吗？还在为资金不足而心烦吗？</p><blockquote><p><strong>炼丹炉系统</strong>都能解决你的问题</p></blockquote><div class="hint-container info"><p class="hint-container-title">系统简述</p><p>本系统以NAS为核心文件存储存储器，所有GPU服务器都会与NAS进行万兆高速连接，从而实现所有服务器间的文件全互联。</p><p>所有服务器可以共同连接、访问、修改NAS上自己的数据文件，切换服务器所有文件、代码、数据集不用重新迁移，无缝切换。</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
