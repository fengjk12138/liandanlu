import { defineClientConfig } from "@vuepress/client";
import ChartJS from "/www/liandanlu/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "/www/liandanlu/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/www/liandanlu/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/www/liandanlu/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "/www/liandanlu/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "/www/liandanlu/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "/www/liandanlu/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import "/www/liandanlu/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "/www/liandanlu/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "/www/liandanlu/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "/www/liandanlu/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Mermaid from "/www/liandanlu/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import Presentation from "/www/liandanlu/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import Playground from "/www/liandanlu/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "/www/liandanlu/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/www/liandanlu/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "/www/liandanlu/node_modules/katex/dist/katex.min.css";
import "/www/liandanlu/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import { defineAsyncComponent } from "vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    app.component("VuePlayground", defineAsyncComponent(() => import("/www/liandanlu/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
    
  },
});
