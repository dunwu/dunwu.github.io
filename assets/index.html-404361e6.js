import{_ as B}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as d,a as E,d as t,w as o,b as e,e as i}from"./app-4f05975a.js";const _={},h=i('<h1 id="架构" tabindex="-1"><a class="header-anchor" href="#架构" aria-hidden="true">#</a> 架构</h1><p>架构设计的目的是解决软件系统的复杂度带来的问题。架构即(重要)决策，是在一个有约束的盒子里去求解或接近最合适的解。这个有约束的盒子是团队经验、成本、资源、进度、业务所处阶段等所编织、掺杂在一起的综合体(人，财，物，时间，事情等)。架构无优劣，但是存在恰当的架构用在合适的软件系统中，而这些就是决策的结果。</p><p>架构设计原则：<strong>合适原则、简单原则、演化原则</strong>。合适优于先进 =&gt; 演化优于一步到位 =&gt; 简单优于复杂</p><p>架构设计有业务需求驱动，需要识别出主要问题，然后根据业务、技术、团队、成本等综合评估排序，优先解决当前面临的最主要的复杂度问题。</p><p>架构设计一般要给出多套备选方案（3 ~ 5 个最佳），并评估各方案利弊。</p><p>评估方案时，应该先列出关注的维度（如：功能性、性能、可用性、复杂度、硬件成本、运维成本等），然后根据这些维度去评估打分，再综合挑选最合适当时情况的方案。</p><p>架构失败的主因：</p><ul><li>没那么多人，却想干那么多活</li><li>没有那么多积累，却想一步登天</li><li>没有那么卓越的业务场景，却幻想灵光一闪成为天才</li></ul><h2 id="📖-内容" tabindex="-1"><a class="header-anchor" href="#📖-内容" aria-hidden="true">#</a> 📖 内容</h2><h3 id="综合" tabindex="-1"><a class="header-anchor" href="#综合" aria-hidden="true">#</a> 综合</h3>',10),a=E("h3",{id:"微服务",tabindex:"-1"},[E("a",{class:"header-anchor",href:"#微服务","aria-hidden":"true"},"#"),e(" 微服务")],-1),A=E("code",null,"定义",-1),c=E("code",null,"演进",-1),u=E("code",null,"利弊",-1),m=E("code",null,"如何拆分",-1),f=E("code",null,"容量规划",-1),p=E("code",null,"核心组件",-1),g=E("code",null,"服务定义",-1),C=E("code",null,"注册中心",-1),b=E("code",null,"元数据",-1),F=E("code",null,"健康检查",-1),k=E("code",null,"服务订阅",-1),D=E("code",null,"一致性",-1),x=E("code",null,"RPC",-1),j=E("code",null,"通信协议",-1),R=E("code",null,"传输方式",-1),v=E("code",null,"序列化",-1),I=E("code",null,"微服务",-1),L=E("code",null,"序列化",-1),N=E("code",null,"动态代理",-1),V=E("code",null,"通信",-1),w=E("code",null,"服务注册发现",-1),T=E("code",null,"健康检查",-1),y=E("code",null,"路由",-1),P=E("code",null,"负载均衡",-1),z=E("code",null,"容错处理",-1),H=E("code",null,"优雅上线下线",-1),J=E("code",null,"限流",-1),M=E("code",null,"熔断",-1),S=E("code",null,"业务分组",-1),q=E("h3",{id:"安全",tabindex:"-1"},[E("a",{class:"header-anchor",href:"#安全","aria-hidden":"true"},"#"),e(" 安全")],-1),G=E("h2",{id:"📚-资料",tabindex:"-1"},[E("a",{class:"header-anchor",href:"#📚-资料","aria-hidden":"true"},"#"),e(" 📚 资料")],-1),K=E("strong",null,"书籍",-1),O={href:"https://item.jd.com/11322972.html",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://item.jd.com/11449803.html",target:"_blank",rel:"noopener noreferrer"},U={href:"https://item.jd.com/12153914.html",target:"_blank",rel:"noopener noreferrer"},W={href:"https://item.jd.com/12176278.html",target:"_blank",rel:"noopener noreferrer"},X={href:"https://item.jd.com/12238227.html",target:"_blank",rel:"noopener noreferrer"},Y=E("strong",null,"教程",-1),Z={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md",target:"_blank",rel:"noopener noreferrer"},$={href:"https://time.geekbang.org/column/intro/100006601",target:"_blank",rel:"noopener noreferrer"},EE={href:"https://time.geekbang.org/column/intro/100014401",target:"_blank",rel:"noopener noreferrer"},eE={href:"https://time.geekbang.org/column/intro/100046201",target:"_blank",rel:"noopener noreferrer"},tE={href:"https://time.geekbang.org/course/intro/100003901",target:"_blank",rel:"noopener noreferrer"},lE={href:"https://time.geekbang.org/column/intro/100037301",target:"_blank",rel:"noopener noreferrer"},oE=E("h2",{id:"🚪-传送",tabindex:"-1"},[E("a",{class:"header-anchor",href:"#🚪-传送","aria-hidden":"true"},"#"),e(" 🚪 传送")],-1),nE={href:"https://dunwu.github.io/",target:"_blank",rel:"noopener noreferrer"};function rE(BE,sE){const l=r("RouterLink"),n=r("ExternalLinkIcon");return s(),d("div",null,[h,E("ul",null,[E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/00.%E7%BB%BC%E5%90%88/00.%E5%A6%82%E4%BD%95%E8%AE%BE%E8%AE%A1%E7%B3%BB%E7%BB%9F.html"},{default:o(()=>[e("如何设计系统")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/00.%E7%BB%BC%E5%90%88/01.%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84%E9%9D%A2%E8%AF%95.html"},{default:o(()=>[e("系统架构面试总结")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/00.%E7%BB%BC%E5%90%88/02.%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84%E6%A6%82%E8%BF%B0.html"},{default:o(()=>[e("系统架构概述")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/00.%E7%BB%BC%E5%90%88/03.%E7%B3%BB%E7%BB%9F%E9%AB%98%E6%80%A7%E8%83%BD%E6%9E%B6%E6%9E%84.html"},{default:o(()=>[e("系统高性能架构")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/00.%E7%BB%BC%E5%90%88/04.%E7%B3%BB%E7%BB%9F%E9%AB%98%E5%8F%AF%E7%94%A8%E6%9E%B6%E6%9E%84.html"},{default:o(()=>[e("系统高可用架构")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/00.%E7%BB%BC%E5%90%88/05.%E7%B3%BB%E7%BB%9F%E4%BC%B8%E7%BC%A9%E6%80%A7%E6%9E%B6%E6%9E%84.html"},{default:o(()=>[e("系统伸缩性架构")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/00.%E7%BB%BC%E5%90%88/06.%E7%B3%BB%E7%BB%9F%E6%89%A9%E5%B1%95%E6%80%A7%E6%9E%B6%E6%9E%84.html"},{default:o(()=>[e("系统扩展性架构")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/00.%E7%BB%BC%E5%90%88/07.%E7%B3%BB%E7%BB%9F%E5%AE%89%E5%85%A8%E6%80%A7%E6%9E%B6%E6%9E%84.html"},{default:o(()=>[e("系统安全性架构")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/00.%E7%BB%BC%E5%90%88/08.%E5%A4%A7%E5%9E%8B%E7%B3%BB%E7%BB%9F%E6%A0%B8%E5%BF%83%E6%8A%80%E6%9C%AF.html"},{default:o(()=>[e("大型系统核心技术")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/00.%E7%BB%BC%E5%90%88/09.%E7%B3%BB%E7%BB%9F%E6%B5%8B%E8%AF%95%E6%9E%B6%E6%9E%84.html"},{default:o(()=>[e("系统测试架构")]),_:1})])]),a,E("ul",null,[E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/01.%E5%BE%AE%E6%9C%8D%E5%8A%A1/01.%E5%BE%AE%E6%9C%8D%E5%8A%A1%E7%AE%80%E4%BB%8B.html"},{default:o(()=>[e("微服务简介")]),_:1}),e(" - 关键词："),A,e("、"),c,e("、"),u,e("、"),m,e("、"),f,e("、"),p]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/01.%E5%BE%AE%E6%9C%8D%E5%8A%A1/02.%E5%BE%AE%E6%9C%8D%E5%8A%A1%E4%B9%8B%E6%B3%A8%E5%86%8C%E5%92%8C%E5%8F%91%E7%8E%B0.html"},{default:o(()=>[e("微服务之注册和发现")]),_:1}),e(" - 关键词："),g,e("、"),C,e("、"),b,e("、"),F,e("、"),k,e("、"),D]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/01.%E5%BE%AE%E6%9C%8D%E5%8A%A1/03.%E5%BE%AE%E6%9C%8D%E5%8A%A1%E4%B9%8B%E6%9C%8D%E5%8A%A1%E8%B0%83%E7%94%A8.html"},{default:o(()=>[e("微服务之服务调用")]),_:1}),e(" - 关键词："),x,e("、"),j,e("、"),R,e("、"),v]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/01.%E5%BE%AE%E6%9C%8D%E5%8A%A1/10.%E5%BE%AE%E6%9C%8D%E5%8A%A1%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86.html"},{default:o(()=>[e("微服务基本原理")]),_:1}),e(" - 关键词："),I,e("、"),L,e("、"),N,e("、"),V,e("、"),w,e("、"),T,e("、"),y,e("、"),P,e("、"),z,e("、"),H,e("、"),J,e("、"),M,e("、"),S])]),q,E("ul",null,[E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/02.%E5%AE%89%E5%85%A8/01.%E7%BB%BC%E8%BF%B0.html"},{default:o(()=>[e("权限认证综述")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/02.%E5%AE%89%E5%85%A8/02.%E8%AE%A4%E8%AF%81.html"},{default:o(()=>[e("认证设计")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/02.%E5%AE%89%E5%85%A8/03.%E6%8E%88%E6%9D%83.html"},{default:o(()=>[e("授权设计")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/02.%E5%AE%89%E5%85%A8/05.%E5%AE%89%E5%85%A8%E6%BC%8F%E6%B4%9E.html"},{default:o(()=>[e("安全漏洞")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/02.%E5%AE%89%E5%85%A8/06.%E7%BC%96%E7%A0%81%E5%92%8C%E5%8A%A0%E5%AF%86.html"},{default:o(()=>[e("编码和加密")]),_:1})])]),G,E("ul",null,[E("li",null,[K,E("ul",null,[E("li",null,[E("a",O,[e("《大型网站技术架构：核心原理与案例分析》"),t(n)]),e(" - 浅显易懂的将解大型网站架构演进之路；简介了大型系统所面临的挑战以及核心技术点。")]),E("li",null,[E("a",Q,[e("《大型网站系统与 Java 中间件实践》"),t(n)])]),E("li",null,[E("a",U,[e("《亿级流量网站架构核心技术：跟开涛学搭建高可用高并发系统》"),t(n)])]),E("li",null,[E("a",W,[e("《企业 IT 架构转型之道：阿里巴巴中台战略思想与架构实战》"),t(n)]),e(" - 阐述阿里巴巴中台系统发展，更多的是讲解应用场景和能力，没有讲解技术细节。")]),E("li",null,[E("a",X,[e("《逆流而上：阿里巴巴技术成长之路》"),t(n)]),e(" - 主要以运维的视角阐述系统运维中遇到的困难，定位思路以及解决方法。")])])]),E("li",null,[Y,E("ul",null,[E("li",null,[E("a",Z,[e("system-design-primer"),t(n)])]),E("li",null,[E("a",$,[e("从 0 开始学架构"),t(n)])]),E("li",null,[E("a",EE,[e("从 0 开始学微服务"),t(n)])]),E("li",null,[E("a",eE,[e("RPC 实战与核心原理"),t(n)])]),E("li",null,[E("a",tE,[e("微服务架构核心 20 讲"),t(n)])]),E("li",null,[E("a",lE,[e("DDD 实战课"),t(n)])])])])]),oE,E("p",null,[e("◾ 💧 "),E("a",nE,[e("钝悟的 IT 知识图谱"),t(n)]),e(" ◾")])])}const _E=B(_,[["render",rE],["__file","index.html.vue"]]);export{_E as default};
