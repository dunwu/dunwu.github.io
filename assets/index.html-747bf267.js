import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as l,c as s,a as e,b as a,d as i,e as o}from"./app-d70a109d.js";const g={},c=o('<h1 id="skywalking-快速入门" tabindex="-1"><a class="header-anchor" href="#skywalking-快速入门" aria-hidden="true">#</a> SkyWalking 快速入门</h1><p>SkyWalking 是一个基于 Java 开发的分布式系统的应用程序性能监视工具，专为微服务、云原生架构和基于容器（Docker、K8s、Mesos）架构而设计。</p><h2 id="一、skywalking-简介" tabindex="-1"><a class="header-anchor" href="#一、skywalking-简介" aria-hidden="true">#</a> 一、SkyWalking 简介</h2><p>SkyWalking 是观察性分析平台和应用性能管理系统。</p><p>提供分布式追踪、服务网格遥测分析、度量聚合和可视化一体化解决方案。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200211152235.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="skywalking-特性" tabindex="-1"><a class="header-anchor" href="#skywalking-特性" aria-hidden="true">#</a> SkyWalking 特性</h3><ul><li>多种监控手段，语言探针和 service mesh</li><li>多语言自动探针，Java，.NET Core 和 Node.JS</li><li>轻量高效，不需要大数据</li><li>模块化，UI、存储、集群管理多种机制可选</li><li>支持告警</li><li>优秀的可视化方案</li></ul><h3 id="skywalking-核心概念" tabindex="-1"><a class="header-anchor" href="#skywalking-核心概念" aria-hidden="true">#</a> SkyWalking 核心概念</h3><ul><li><strong>Service</strong> - 服务。代表一组为传入请求提供相同的行为的工作负载。 使用代理或 SDK 时，可以定义服务名称。</li><li><strong>Service Instance</strong> - 服务实例。服务组中的每个工作负载都称为一个实例。就像 Kubernetes 中的 Pod 一样，它在 OS 中不必是单个进程。</li><li><strong>Endpoint</strong> - 端点。它是特定服务中用于传入请求的路径，例如 HTTP URI 路径或 RPC 服务类+方法签名。</li></ul><h2 id="二、skywalking-架构" tabindex="-1"><a class="header-anchor" href="#二、skywalking-架构" aria-hidden="true">#</a> 二、SkyWalking 架构</h2><p>从逻辑上讲，SkyWalking 分为四个部分：探针（Probes），平台后端，存储和 UI。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200211153516.png" alt="SkyWalking 架构" tabindex="0" loading="lazy"><figcaption>SkyWalking 架构</figcaption></figure><ul><li><strong>探针（Probes）</strong> - 探针是指集成到目标系统中的代理或 SDK 库。它们负责收集数据（包括跟踪数据和统计数据）并将其按照 SkyWalking 的要求重新格式化为。</li><li><strong>平台后端</strong> - 平台后端是一个提供后端服务的集群。它用于聚合、分析和驱动从探针到 UI 的流程。它还为传入格式（如 Zipkin 的格式），存储实现程序和集群管理提供可插入功能。 您甚至可以使用 Observability Analysis Language 自定义聚合和分析。</li><li><strong>存储</strong> - 您可以选择一个 SkyWalking 已实现的存储，如由 Sharding-Sphere 管理的 ElasticSearch，H2 或 MySQL 集群，也可以自行实现一个存储。</li><li><strong>UI</strong> - 用户界面很酷，对于 SkyWalking 最终用户而言非常强大。它也可以自定义以匹配您的自定义后端。</li></ul><h2 id="三、skywalking-安装" tabindex="-1"><a class="header-anchor" href="#三、skywalking-安装" aria-hidden="true">#</a> 三、SkyWalking 安装</h2>',15),k={href:"http://skywalking.apache.org/downloads/",target:"_blank",rel:"noopener noreferrer"},h=e("figure",null,[e("img",{src:"https://raw.githubusercontent.com/dunwu/images/master/snap/20200211154612.png",alt:"SkyWalking 组件",tabindex:"0",loading:"lazy"}),e("figcaption",null,"SkyWalking 组件")],-1),d=e("p",null,"安装分为三个部分：",-1),u={href:"https://github.com/apache/skywalking/blob/master/docs/en/setup/backend/backend-setup.md",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/apache/skywalking/blob/master/docs/en/setup/backend/ui-setup.md",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/apache/skywalking-cli",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),a(" 参考资料")],-1),b={href:"https://github.com/apache/skywalking",target:"_blank",rel:"noopener noreferrer"};function m(f,S){const n=r("ExternalLinkIcon");return l(),s("div",null,[c,e("p",null,[a("进入 "),e("a",k,[a("Apache SkyWalking 官方下载页面"),i(n)]),a("，选择安装版本，下载解压到本地。")]),h,d,e("ul",null,[e("li",null,[e("a",u,[a("Backend setup document"),i(n)])]),e("li",null,[e("a",p,[a("UI setup document"),i(n)])]),e("li",null,[e("a",y,[a("CLI set up document"),i(n)])])]),_,e("ul",null,[e("li",null,[e("a",b,[a("SkyWalking Github"),i(n)])])])])}const W=t(g,[["render",m],["__file","index.html.vue"]]);export{W as default};
