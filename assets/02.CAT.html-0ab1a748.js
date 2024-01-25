import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as s,a as e,b as t,d as a,e as r}from"./app-ab18ad7c.js";const c={},h=r('<h1 id="cat-快速入门" tabindex="-1"><a class="header-anchor" href="#cat-快速入门" aria-hidden="true">#</a> CAT 快速入门</h1><h2 id="cat-简介" tabindex="-1"><a class="header-anchor" href="#cat-简介" aria-hidden="true">#</a> CAT 简介</h2><p>CAT（Central Application Tracking），是基于 Java 开发的分布式实时监控系统。CAT 在基础存储、高性能通信、大规模在线访问、服务治理、实时监控、容器化及集群智能调度等领域提供业界领先的、统一的解决方案。CAT 目前在美团的产品定位是应用层的统一监控组件，基本接入了美团所有核心应用，在中间件（RPC、数据库、缓存、MQ 等）框架中得到广泛应用，为各业务线提供系统的性能指标、健康状况、实时告警等。</p><h3 id="cat-的优势" tabindex="-1"><a class="header-anchor" href="#cat-的优势" aria-hidden="true">#</a> CAT 的优势</h3><ul><li>实时处理：信息的价值会随时间锐减，尤其是事故处理过程中</li><li>全量数据：最开始的设计目标就是全量采集，全量的好处有很多</li><li>高可用：所有应用都倒下了，需要监控还站着，并告诉工程师发生了什么，做到故障还原和问题定位</li><li>故障容忍：CAT 本身故障不应该影响业务正常运转，CAT 挂了，应用不该受影响，只是监控能力暂时减弱</li><li>高吞吐：要想还原真相，需要全方位地监控和度量，必须要有超强的处理吞吐能力</li><li>可扩展：支持分布式、跨 IDC 部署，横向扩展的监控系统</li></ul><h3 id="支持的消息类型" tabindex="-1"><a class="header-anchor" href="#支持的消息类型" aria-hidden="true">#</a> 支持的消息类型</h3><p>CAT 监控系统将每次 URL、Service 的请求内部执行情况都封装为一个完整的消息树、消息树可能包括 Transaction、Event、Heartbeat、Metric 等信息。</p><ul><li><strong>Transaction</strong> 适合记录跨越系统边界的程序访问行为,比如远程调用，数据库调用，也适合执行时间较长的业务逻辑监控，Transaction 用来记录一段代码的执行时间和次数</li><li><strong>Event</strong> 用来记录一件事发生的次数，比如记录系统异常，它和 transaction 相比缺少了时间的统计，开销比 transaction 要小</li><li><strong>Heartbeat</strong> 表示程序内定期产生的统计信息, 如 CPU 利用率, 内存利用率, 连接池状态, 系统负载等</li><li><strong>Metric</strong> 用于记录业务指标、指标可能包含对一个指标记录次数、记录平均值、记录总和，业务指标最低统计粒度为 1 分钟</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200211174235.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="cat-部署" tabindex="-1"><a class="header-anchor" href="#cat-部署" aria-hidden="true">#</a> CAT 部署</h2>',10),d={href:"https://github.com/dianping/cat/wiki/readme_server",target:"_blank",rel:"noopener noreferrer"},u=e("h2",{id:"cat-报表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cat-报表","aria-hidden":"true"},"#"),t(" CAT 报表")],-1),g=e("p",null,"与其他监控工具（如 Zipkin、SkyWalking）相比，CAT 的报表功能最丰富。支持以下报表类型：",-1),p={href:"https://github.com/dianping/cat/wiki/transaction",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/dianping/cat/wiki/event",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/dianping/cat/wiki/problem",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/dianping/cat/wiki/heartbeat",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/dianping/cat/wiki/business",target:"_blank",rel:"noopener noreferrer"},T=e("h2",{id:"cat-配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cat-配置","aria-hidden":"true"},"#"),t(" CAT 配置")],-1),k=e("p",null,"CAT 提供了以下配置：",-1),C={href:"https://github.com/dianping/cat/wiki/project",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/dianping/cat/wiki/alarm",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/dianping/cat/wiki/global",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/dianping/cat/wiki/business",target:"_blank",rel:"noopener noreferrer"},v=r('<h2 id="cat-架构" tabindex="-1"><a class="header-anchor" href="#cat-架构" aria-hidden="true">#</a> CAT 架构</h2><p>CAT 主要分为三个模块：</p><ul><li><strong>cat-client</strong> - 提供给业务以及中间层埋点的底层 SDK。</li><li><strong>cat-consumer</strong> - 用于实时分析从客户端的提供的数据。</li><li><strong>cat-home</strong> - 作为用户提供给用户的展示的控制端。</li></ul><p>在实际开发和部署中，cat-consumer 和 cat-home 是部署在一个 jvm 内部，每个 CAT 服务端都可以作为 consumer 也可以作为 home，这样既能减少整个 CAT 层级结构，也可以增加整个系统稳定性。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200211174001.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>上图是 CAT 目前多机房的整体结构图：</p><ul><li>路由中心是根据应用所在机房信息来决定客户端上报的 CAT 服务端地址</li><li>每个机房内部都有的独立的原始信息存储集群 HDFS</li><li>cat-home 可以部署在一个机房也可以部署在多个机房，在做报表展示的时候，cat-home 会从 cat-consumer 中进行跨机房的调用，将所有的数据合并展示给用户</li><li>实际过程中，cat-consumer、cat-home 以及路由中心都是部署在一起，每个服务端节点都可以充当任何一个角色</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',8),E={href:"https://github.com/dianping/cat",target:"_blank",rel:"noopener noreferrer"};function S(L,M){const n=o("ExternalLinkIcon");return l(),s("div",null,[h,e("p",null,[t("Cat 部署可以参考 "),e("a",d,[t("官方 Wiki - 服务端部署"),a(n)]),t(" ，非常详细，不赘述。")]),u,g,e("ul",null,[e("li",null,[e("strong",null,[e("a",p,[t("Transaction 报表"),a(n)])]),t(" - 一段代码运行时间、次数，比如 URL、Cache、SQL 执行次数和响应时间")]),e("li",null,[e("strong",null,[e("a",_,[t("Event 报表"),a(n)])]),t(" - 一行代码运行次数，比如出现一个异常")]),e("li",null,[e("strong",null,[e("a",m,[t("Problem 报表"),a(n)])]),t(" - 根据 Transaction/Event 数据分析出来系统可能出现的异常，包括访问较慢的程序等")]),e("li",null,[e("strong",null,[e("a",f,[t("Heartbeat 报表"),a(n)])]),t(" - JVM 内部一些状态信息，比如 Memory，Thread 等")]),e("li",null,[e("strong",null,[e("a",b,[t("Business 报表"),a(n)])]),t(" - 业务监控报表，比如订单指标，支付等业务指标")])]),T,k,e("ul",null,[e("li",null,[e("strong",null,[e("a",C,[t("项目配置"),a(n)])]),t(" 包括项目基本信息、机器分组配置")]),e("li",null,[e("strong",null,[e("a",A,[t("告警配置"),a(n)])]),t(" 包括基本告警配置、告警规则、以及具体告警配置")]),e("li",null,[e("strong",null,[e("a",x,[t("全局配置"),a(n)])]),t(" 包括服务端配置、消息采样配置、客户端路由")]),e("li",null,[e("strong",null,[e("a",w,[t("业务指标"),a(n)])]),t(" 包括业务监控配置、业务标签配置")])]),v,e("ul",null,[e("li",null,[e("a",E,[t("CAT Github"),a(n)])])])])}const B=i(c,[["render",S],["__file","02.CAT.html.vue"]]);export{B as default};
