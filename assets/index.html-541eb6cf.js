import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as c,c as s,a as e,d as r,w as a,b as l,e as h}from"./app-dc48b2dc.js";const u={},_=h('<h1 id="java-模板引擎" tabindex="-1"><a class="header-anchor" href="#java-模板引擎" aria-hidden="true">#</a> Java 模板引擎</h1><p>模板引擎不属于特定技术领域，它是跨领域跨平台的概念。 模板引擎的作用就是分离业务数据和最终呈现内容，它可以生成特定格式的文档（模板） 。</p><p>模板引擎简单来说，就是：<strong><em><code>模板 + 数据模型 = 输出</code></em></strong></p><p>较早，也比较经典的模板引擎是 JavaEE 的标准技术 JSP。</p><p>但 JSP 存在以下缺点，导致逐渐被淘汰：</p><ul><li><strong>性能差</strong><ul><li>JSP 本质上是 Servlet，第一次请求 JSP 页面，必须要在 web 服务器中编译成 servlet，所以第一次响应较慢。</li><li>每次请求 JSP 都是访问 servlet 再用输出流输出的 html 页面。</li><li>JSP 中的内容很多，页面响应会很慢，因为是同步加载。</li></ul></li><li><strong>无法前后端分离</strong><ul><li>动态资源和静态资源全部耦合在一起，无法做到前后端分离。一旦服务器出现状况，前后台一起玩完。</li><li>而且 Java 工程师既当爹又当妈，又要维护 Java 代码，又要维护 JSP 代码，痛苦。</li><li>前端工程师如果不理解 JSP 语法，面对各种 JSP 标签、表达式、指令，会一脸懵逼，痛苦。</li></ul></li><li><strong>不是所有服务器都支持</strong> - JSP 必须要在支持 JSP 技术的 web 服务器里运行（如 Tomcat）。但有些服务器则不支持 JSP ，如 Nginx。</li></ul><p>在 Java 领域，目前最常见的模板引擎就是：</p><ul><li>Freemark</li><li>Thymeleaf</li><li>Velocity</li></ul><h2 id="内容" tabindex="-1"><a class="header-anchor" href="#内容" aria-hidden="true">#</a> 内容</h2>',9),d=e("h2",{id:"资源",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#资源","aria-hidden":"true"},"#"),l(" 资源")],-1),p=e("strong",null,"Freemark",-1),f={href:"https://github.com/apache/freemarker/",target:"_blank",rel:"noopener noreferrer"},m={href:"http://freemarker.foofun.cn/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://try.freemarker.apache.org/",target:"_blank",rel:"noopener noreferrer"},E=e("strong",null,"Velocity",-1),k={href:"https://github.com/apache/velocity-engine/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://velocity.apache.org/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://wizardforcel.gitbooks.io/velocity-doc/content/",target:"_blank",rel:"noopener noreferrer"},J={href:"https://github.com/alibaba/velocity-spring-boot-project",target:"_blank",rel:"noopener noreferrer"};function y(B,S){const o=n("RouterLink"),t=n("ExternalLinkIcon");return c(),s("div",null,[_,e("ul",null,[e("li",null,[r(o,{to:"/01.Java/12.%E5%B7%A5%E5%85%B7/03.%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E/01.Freemark.html"},{default:a(()=>[l("Freemark")]),_:1})]),e("li",null,[r(o,{to:"/01.Java/12.%E5%B7%A5%E5%85%B7/03.%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E/02.Thymeleaf.html"},{default:a(()=>[l("Thymeleaf")]),_:1})]),e("li",null,[r(o,{to:"/01.Java/12.%E5%B7%A5%E5%85%B7/03.%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E/03.Velocity.html"},{default:a(()=>[l("Velocity")]),_:1})])]),d,e("ul",null,[e("li",null,[p,e("ul",null,[e("li",null,[e("a",f,[l("Freemark Github"),r(t)])]),e("li",null,[e("a",m,[l("Freemark 中文教程"),r(t)])]),e("li",null,[e("a",g,[l("在线 Freemark 工具"),r(t)])])])]),e("li",null,[E,e("ul",null,[e("li",null,[e("a",k,[l("Velocity Github"),r(t)])]),e("li",null,[e("a",b,[l("Velocity 官网"),r(t)])]),e("li",null,[e("a",v,[l("Velocity 中文文档"),r(t)])]),e("li",null,[e("a",J,[l("velocity-spring-boot-project"),r(t)])])])])])])}const V=i(u,[["render",y],["__file","index.html.vue"]]);export{V as default};
