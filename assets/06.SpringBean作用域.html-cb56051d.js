import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as i,a,b as e,d as t,e as l}from"./app-dc48b2dc.js";const c={},r=l(`<h1 id="spring-bean-作用域" tabindex="-1"><a class="header-anchor" href="#spring-bean-作用域" aria-hidden="true">#</a> Spring Bean 作用域</h1><h2 id="spring-bean-作用域-1" tabindex="-1"><a class="header-anchor" href="#spring-bean-作用域-1" aria-hidden="true">#</a> Spring Bean 作用域</h2><table><thead><tr><th>来源</th><th>说明</th></tr></thead><tbody><tr><td>singleton</td><td>默认 Spring Bean 作用域，一个 BeanFactory 有且仅有一个实例</td></tr><tr><td>prototype</td><td>原型作用域，每次依赖查找和依赖注入生成新 Bean 对象</td></tr><tr><td>request</td><td>将 Spring Bean 存储在 ServletRequest 上下文中</td></tr><tr><td>session</td><td>将 Spring Bean 存储在 HttpSession 中</td></tr><tr><td>application</td><td>将 Spring Bean 存储在 ServletContext 中</td></tr></tbody></table><h2 id="singleton-bean-作用域" tabindex="-1"><a class="header-anchor" href="#singleton-bean-作用域" aria-hidden="true">#</a> &quot;singleton&quot; Bean 作用域</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20221221170833.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="prototype-bean-作用域" tabindex="-1"><a class="header-anchor" href="#prototype-bean-作用域" aria-hidden="true">#</a> &quot;prototype&quot; Bean 作用域</h2><p>Spring 容器没有办法管理 prototype Bean 的完整生命周期，也没有办法记录实例的存在。销毁回调方法将不会执行，可以利用 <code>BeanPostProcessor</code> 进行清扫工作。</p><h2 id="request-bean-作用域" tabindex="-1"><a class="header-anchor" href="#request-bean-作用域" aria-hidden="true">#</a> &quot;request&quot; Bean 作用域</h2><ul><li>配置 <ul><li>XML - <code>&lt;bean class=&quot;...&quot; scope = “request&quot; /&gt;</code></li><li>Java 注解 - <code>@RequestScope</code> 或 <code>@Scope(WebApplicationContext.SCOPE_REQUEST)</code></li></ul></li><li>实现 <ul><li>API - RequestScope</li></ul></li></ul><h2 id="session-bean-作用域" tabindex="-1"><a class="header-anchor" href="#session-bean-作用域" aria-hidden="true">#</a> &quot;session&quot; Bean 作用域</h2><ul><li>配置 <ul><li>XML - <code>&lt;bean class=&quot;...&quot; scope = “session&quot; /&gt;</code></li><li>Java 注解 - <code>@SessionScope</code> 或 <code>@Scope(WebApplicationContext.SCOPE_SESSION)</code></li></ul></li><li>实现 <ul><li>API - SessionScope</li></ul></li></ul><h2 id="application-bean-作用域" tabindex="-1"><a class="header-anchor" href="#application-bean-作用域" aria-hidden="true">#</a> &quot;application&quot; Bean 作用域</h2><ul><li>配置 <ul><li>XML - <code>&lt;bean class=&quot;...&quot; scope = “application&quot; /&gt;</code></li><li>Java 注解 - <code>@ApplicationScope</code> 或 <code>@Scope(WebApplicationContext.SCOPE_APPLICATION)</code></li></ul></li><li>实现 <ul><li>API - ServletContextScope</li></ul></li></ul><h2 id="自定义-bean-作用域" tabindex="-1"><a class="header-anchor" href="#自定义-bean-作用域" aria-hidden="true">#</a> 自定义 Bean 作用域</h2><ul><li><p>实现 Scope</p><ul><li><code>org.springframework.beans.factory.config.Scope</code></li></ul></li><li><p>注册 Scope</p><ul><li>API - <code>org.springframework.beans.factory.config.ConfigurableBeanFactory#registerScope</code></li></ul></li><li><p>配置</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.springframework.beans.factory.config.CustomScopeConfigurer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scopes<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>map</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>map</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>Spring 內建的 Bean 作用域有几种？</p><p>singleton、prototype、request、session、application 以及 websocket</p><p>singleton Bean 是否在一个应用是唯一的？</p><p>否。singleton bean 仅在当前 Spring IoC 容器（BeanFactory）中是单例对象。</p><p>application Bean 是否可以被其他方案替代？</p><p>可以的，实际上，“application” Bean 与“singleton” Bean 没有本质区别</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,23),u={href:"https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans",target:"_blank",rel:"noopener noreferrer"},d={href:"https://time.geekbang.org/course/intro/265",target:"_blank",rel:"noopener noreferrer"};function g(h,b){const n=o("ExternalLinkIcon");return p(),i("div",null,[r,a("ul",null,[a("li",null,[a("a",u,[e("Spring 官方文档之 Core Technologies"),t(n)])]),a("li",null,[a("a",d,[e("《小马哥讲 Spring 核心编程思想》"),t(n)])])])])}const S=s(c,[["render",g],["__file","06.SpringBean作用域.html.vue"]]);export{S as default};
