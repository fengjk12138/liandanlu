import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = resolveComponent("RouterLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="功能亮点" tabindex="-1"><a class="header-anchor" href="#功能亮点" aria-hidden="true">#</a> 功能亮点</h2><h3 id="bar" tabindex="-1"><a class="header-anchor" href="#bar" aria-hidden="true">#</a> Bar</h3><ul><li>`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/zh/guide/bar/baz.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`baz`);
      } else {
        return [
          createTextVNode("baz")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</li><li>...</li></ul><h3 id="foo" tabindex="-1"><a class="header-anchor" href="#foo" aria-hidden="true">#</a> Foo</h3><ul><li>`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/zh/guide/foo/ray.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ray`);
      } else {
        return [
          createTextVNode("ray")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</li><li>...</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/guide/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
