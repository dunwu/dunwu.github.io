import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as a,e as r}from"./app-4c6ca41d.js";const o={},c=r('<h2 id="tomcat-和-jetty" tabindex="-1"><a class="header-anchor" href="#tomcat-和-jetty" aria-hidden="true">#</a> Tomcat 和 Jetty</h2><p>Web 容器 Tomcat 或 Jetty，作为重要的系统中间件，连接着浏览器和你的 Web 应用，并且支撑着 Web 程序的运行，可以说，<strong>弄懂了 Tomcat 和 Jetty 的原理，Java Web 开发对你来说就毫无秘密可言</strong>。</p><h2 id="web-容器" tabindex="-1"><a class="header-anchor" href="#web-容器" aria-hidden="true">#</a> Web 容器</h2><p>早期的 Web 应用主要用于浏览新闻等静态页面，HTTP 服务器（比如 Apache、Nginx）向浏览器返回静态 HTML，浏览器负责解析 HTML，将结果呈现给用户。</p><p>随着互联网的发展，我们已经不满足于仅仅浏览静态页面，还希望通过一些交互操作，来获取动态结果，因此也就需要一些扩展机制能够让 HTTP 服务器调用服务端程序。</p><p>于是 Sun 公司推出了 Servlet 技术。你可以把 Servlet 简单理解为运行在服务端的 Java 小程序，但是 Servlet 没有 main 方法，不能独立运行，因此必须把它部署到 Servlet 容器中，由容器来实例化并调用 Servlet。</p><p>而 Tomcat 和 Jetty 就是一个 Servlet 容器。为了方便使用，它们也具有 HTTP 服务器的功能，因此<strong>Tomcat 或者 Jetty 就是一个“HTTP 服务器 + Servlet 容器”，我们也叫它们 Web 容器。</strong></p><p>其他应用服务器比如 JBoss 和 WebLogic，它们不仅仅有 Servlet 容器的功能，也包含 EJB 容器，是完整的 Java EE 应用服务器。从这个角度看，Tomcat 和 Jetty 算是一个轻量级的应用服务器。</p><p>在微服务架构日渐流行的今天，开发人员更喜欢稳定的、轻量级的应用服务器，并且应用程序用内嵌的方式来运行 Servlet 容器也逐渐流行起来。之所以选择轻量级，是因为在微服务架构下，我们把一个大而全的单体应用，拆分成一个个功能单一的微服务，在这个过程中，服务的数量必然要增加，但为了减少资源的消耗，并且降低部署的成本，我们希望运行服务的 Web 容器也是轻量级的，Web 容器本身应该消耗较少的内存和 CPU 资源，并且由应用本身来启动一个嵌入式的 Web 容器，而不是通过 Web 容器来部署和启动应用，这样可以降低应用部署的复杂度。</p>',9),n=[c];function s(i,l){return t(),a("div",null,n)}const _=e(o,[["render",s],["__file","05.Tomcat和Jetty.html.vue"]]);export{_ as default};
