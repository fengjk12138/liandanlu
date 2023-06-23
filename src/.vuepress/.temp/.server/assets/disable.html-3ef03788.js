import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p><!-- more --><p>本页面就是一个示例，禁用了如下功能:</p><ul><li>导航栏</li><li>侧边栏</li><li>路径导航</li><li>页面信息</li><li>贡献者</li><li>编辑此页链接</li><li>更新时间</li><li>上一篇/下一篇 链接</li><li>评论</li><li>页脚</li><li>返回顶部按钮</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/demo/disable.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const disable_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "disable.html.vue"]]);
export {
  disable_html as default
};
