import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = resolveComponent("RouterLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="nas文档包含以下内容" tabindex="-1"><a class="header-anchor" href="#nas文档包含以下内容" aria-hidden="true">#</a> NAS文档包含以下内容</h2><ul><li>`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/NASdocs/user/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`如何使用NAS？`);
      } else {
        return [
          createTextVNode("如何使用NAS？")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/NASdocs/deploy/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`如何装配NAS？`);
      } else {
        return [
          createTextVNode("如何装配NAS？")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/NASdocs/maintain/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`NAS如何进行日常维护？`);
      } else {
        return [
          createTextVNode("NAS如何进行日常维护？")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/NASdocs/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
