import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as _,c as i,a as e,d as t,w as r,b as o,e as d}from"./app-dc48b2dc.js";const h={},a=d('<h1 id="微服务" tabindex="-1"><a class="header-anchor" href="#微服务" aria-hidden="true">#</a> 微服务</h1><blockquote><p><strong>微服务是一种架构模式</strong>，它提倡将一个单一应用拆分为一些<strong>可独立运行</strong>、<strong>可协同工作</strong>的<strong>小的服务</strong>。在微服务架构中，每个小服务都拥有独立的进程和轻量级通信。这些服务是围绕业务能力构建的，并且可以通过全自动化部署机制独立部署。这些服务会使用最小规模的集中式管理能力(例如 Docker) ，可以用不同的编程语言编写并使用不同的数据存储技术。</p></blockquote><h2 id="📖-内容" tabindex="-1"><a class="header-anchor" href="#📖-内容" aria-hidden="true">#</a> 📖 内容</h2>',3),E=e("code",null,"定义",-1),u=e("code",null,"演进",-1),m=e("code",null,"利弊",-1),A=e("code",null,"如何拆分",-1),f=e("code",null,"容量规划",-1),g=e("code",null,"核心组件",-1),p=e("code",null,"服务定义",-1),B=e("code",null,"注册中心",-1),b=e("code",null,"元数据",-1),k=e("code",null,"健康检查",-1),C=e("code",null,"服务订阅",-1),x=e("code",null,"一致性",-1),D=e("code",null,"RPC",-1),w=e("code",null,"通信协议",-1),v=e("code",null,"传输方式",-1),j=e("code",null,"序列化",-1),L=e("code",null,"微服务",-1),R=e("code",null,"序列化",-1),F=e("code",null,"动态代理",-1),I=e("code",null,"通信",-1),N=e("code",null,"服务注册发现",-1),V=e("code",null,"健康检查",-1),M=e("code",null,"路由",-1),T=e("code",null,"负载均衡",-1),q=e("code",null,"容错处理",-1),y=e("code",null,"优雅上线下线",-1),J=e("code",null,"限流",-1),P=e("code",null,"熔断",-1),z=e("code",null,"业务分组",-1),H=e("h2",{id:"📚-资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#📚-资料","aria-hidden":"true"},"#"),o(" 📚 资料")],-1),S=e("strong",null,"书籍",-1),G={href:"https://item.jd.com/11322972.html",target:"_blank",rel:"noopener noreferrer"},K={href:"https://item.jd.com/11449803.html",target:"_blank",rel:"noopener noreferrer"},O={href:"https://item.jd.com/12153914.html",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://item.jd.com/12176278.html",target:"_blank",rel:"noopener noreferrer"},U={href:"https://item.jd.com/12238227.html",target:"_blank",rel:"noopener noreferrer"},W=e("strong",null,"教程",-1),X={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://time.geekbang.org/column/intro/100014401",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://time.geekbang.org/course/intro/100003901",target:"_blank",rel:"noopener noreferrer"},$={href:"https://time.geekbang.org/course/intro/84",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://time.geekbang.org/column/intro/100046201",target:"_blank",rel:"noopener noreferrer"},oe=e("strong",null,"文章",-1),te={href:"https://www.martinfowler.com/articles/microservices.html",target:"_blank",rel:"noopener noreferrer"},ne=e("h2",{id:"🚪-传送",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#🚪-传送","aria-hidden":"true"},"#"),o(" 🚪 传送")],-1),le={href:"https://dunwu.github.io/waterdrop/",target:"_blank",rel:"noopener noreferrer"};function re(se,ce){const l=s("RouterLink"),n=s("ExternalLinkIcon");return _(),i("div",null,[a,e("ul",null,[e("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/01.%E5%BE%AE%E6%9C%8D%E5%8A%A1/01.%E5%BE%AE%E6%9C%8D%E5%8A%A1%E7%AE%80%E4%BB%8B.html"},{default:r(()=>[o("微服务简介")]),_:1}),o(" - 关键词："),E,o("、"),u,o("、"),m,o("、"),A,o("、"),f,o("、"),g]),e("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/01.%E5%BE%AE%E6%9C%8D%E5%8A%A1/02.%E5%BE%AE%E6%9C%8D%E5%8A%A1%E4%B9%8B%E6%B3%A8%E5%86%8C%E5%92%8C%E5%8F%91%E7%8E%B0.html"},{default:r(()=>[o("微服务之注册和发现")]),_:1}),o(" - 关键词："),p,o("、"),B,o("、"),b,o("、"),k,o("、"),C,o("、"),x]),e("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/01.%E5%BE%AE%E6%9C%8D%E5%8A%A1/03.%E5%BE%AE%E6%9C%8D%E5%8A%A1%E4%B9%8B%E6%9C%8D%E5%8A%A1%E8%B0%83%E7%94%A8.html"},{default:r(()=>[o("微服务之服务调用")]),_:1}),o(" - 关键词："),D,o("、"),w,o("、"),v,o("、"),j]),e("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/01.%E5%BE%AE%E6%9C%8D%E5%8A%A1/10.%E5%BE%AE%E6%9C%8D%E5%8A%A1%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86.html"},{default:r(()=>[o("微服务基本原理")]),_:1}),o(" - 关键词："),L,o("、"),R,o("、"),F,o("、"),I,o("、"),N,o("、"),V,o("、"),M,o("、"),T,o("、"),q,o("、"),y,o("、"),J,o("、"),P,o("、"),z])]),H,e("ul",null,[e("li",null,[S,e("ul",null,[e("li",null,[e("a",G,[o("《大型网站技术架构：核心原理与案例分析》"),t(n)]),o(" - 浅显易懂的将解大型网站架构演进之路；简介了大型系统所面临的挑战以及核心技术点。")]),e("li",null,[e("a",K,[o("大型网站系统与 Java 中间件实践"),t(n)])]),e("li",null,[e("a",O,[o("亿级流量网站架构核心技术：跟开涛学搭建高可用高并发系统"),t(n)])]),e("li",null,[e("a",Q,[o("企业 IT 架构转型之道：阿里巴巴中台战略思想与架构实战"),t(n)]),o(" - 阐述阿里巴巴中台系统发展，更多的是讲解应用场景和能力，没有讲解技术细节。")]),e("li",null,[e("a",U,[o("逆流而上：阿里巴巴技术成长之路"),t(n)]),o(" - 主要以运维的视角阐述系统运维中遇到的困难，定位思路以及解决方法。")])])]),e("li",null,[W,e("ul",null,[e("li",null,[e("a",X,[o("system-design-primer"),t(n)])]),e("li",null,[e("a",Y,[o("从 0 开始学微服务"),t(n)])]),e("li",null,[e("a",Z,[o("微服务架构核心 20 讲"),t(n)])]),e("li",null,[e("a",$,[o("微服务架构实战 160 讲"),t(n)])]),e("li",null,[e("a",ee,[o("RPC 实战与核心原理"),t(n)])])])]),e("li",null,[oe,e("ul",null,[e("li",null,[e("a",te,[o("Microservices"),t(n)]),o(" Martin Fowler 与 James Lewis 对微服务的定义")])])])]),ne,e("p",null,[o("◾ 💧 "),e("a",le,[o("钝悟的 IT 知识图谱"),t(n)]),o(" ◾")])])}const de=c(h,[["render",re],["__file","index.html.vue"]]);export{de as default};
