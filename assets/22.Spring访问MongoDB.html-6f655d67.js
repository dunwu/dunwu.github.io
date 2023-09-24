import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as i,a as n,b as s,d as t,e}from"./app-9cc2d019.js";const l={},u=n("h1",{id:"spring-访问-mongodb",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#spring-访问-mongodb","aria-hidden":"true"},"#"),s(" Spring 访问 MongoDB")],-1),r=n("h2",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),s(" 简介")],-1),d={href:"https://www.mongodb.org/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/spring-projects/spring-data-mongodb",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.mongodb.org/",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"DBCollection",-1),g=n("code",null,"Repository",-1),b={href:"https://github.com/spring-projects/spring-boot",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/spring-projects/spring-boot/tree/main/spring-boot-project/spring-boot-starters/spring-boot-starter-data-mongodb",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/spring-projects/spring-data-mongodb",target:"_blank",rel:"noopener noreferrer"},_=e(`<h2 id="spring-boot-快速入门" tabindex="-1"><a class="header-anchor" href="#spring-boot-快速入门" aria-hidden="true">#</a> Spring Boot 快速入门</h2><h3 id="引入依赖" tabindex="-1"><a class="header-anchor" href="#引入依赖" aria-hidden="true">#</a> 引入依赖</h3><p>在 pom.xml 中引入依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-mongodb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据源配置" tabindex="-1"><a class="header-anchor" href="#数据源配置" aria-hidden="true">#</a> 数据源配置</h3><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.data.mongodb.host</span> <span class="token punctuation">=</span> <span class="token value attr-value">localhost</span>
<span class="token key attr-name">spring.data.mongodb.port</span> <span class="token punctuation">=</span> <span class="token value attr-value">27017</span>
<span class="token key attr-name">spring.data.mongodb.database</span> <span class="token punctuation">=</span> <span class="token value attr-value">test</span>
<span class="token key attr-name">spring.data.mongodb.username</span> <span class="token punctuation">=</span> <span class="token value attr-value">root</span>
<span class="token key attr-name">spring.data.mongodb.password</span> <span class="token punctuation">=</span> <span class="token value attr-value">root</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义实体" tabindex="-1"><a class="header-anchor" href="#定义实体" aria-hidden="true">#</a> 定义实体</h3><p>定义一个具有三个属性的 <code>Customer</code> 类：<code>id</code>、<code>firstName</code> 和 <code>lastName</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Id</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Customer</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Id</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> firstName<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> lastName<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Customer</span><span class="token punctuation">(</span><span class="token class-name">String</span> firstName<span class="token punctuation">,</span> <span class="token class-name">String</span> lastName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> firstName<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span class="token operator">=</span> lastName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>
            <span class="token string">&quot;Customer[id=%s, firstName=&#39;%s&#39;, lastName=&#39;%s&#39;]&quot;</span><span class="token punctuation">,</span>
            id<span class="token punctuation">,</span> firstName<span class="token punctuation">,</span> lastName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),y={href:"https://github.com/spring-projects/spring-data-mongodb",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"Customer",-1),S=n("code",null,"customer",-1),B=n("code",null,"@Document",-1),N=n("h3",{id:"创建-repository",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#创建-repository","aria-hidden":"true"},"#"),s(" 创建 Repository")],-1),C={href:"https://github.com/spring-projects/spring-data-mongodb",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/spring-projects/spring-data-commons",target:"_blank",rel:"noopener noreferrer"},D=n("code",null,"Repository",-1),q=e(`<p>先定义一个 <code>CustomerRepository</code> 类，继承 <code>MongoRepository</code> 接口，并指定其泛型参数：<code>Customer</code> 和 <code>String</code>。MongoRepository 接口支持多种操作，包括 CRUD 和分页查询。在下面的例子中，定义了两个查询方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>mongodb<span class="token punctuation">.</span>repository<span class="token punctuation">.</span></span><span class="token class-name">MongoRepository</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CustomerRepository</span> <span class="token keyword">extends</span> <span class="token class-name">MongoRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Customer</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token class-name">Customer</span> <span class="token function">findByFirstName</span><span class="token punctuation">(</span><span class="token class-name">String</span> firstName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Customer</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByLastName</span><span class="token punctuation">(</span><span class="token class-name">String</span> lastName<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建-application" tabindex="-1"><a class="header-anchor" href="#创建-application" aria-hidden="true">#</a> 创建 Application</h3><p>创建一个 Spring Boot 的启动类 Application，并在启动的 main 方法中使用 <code>CustomerRepository</code> 实例访问 MongoDB。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">CommandLineRunner</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataMongodbApplication</span> <span class="token keyword">implements</span> <span class="token class-name">CommandLineRunner</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">CustomerRepository</span> repository<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">DataMongodbApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        repository<span class="token punctuation">.</span><span class="token function">deleteAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// save a couple of customers</span>
        repository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Customer</span><span class="token punctuation">(</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Smith&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        repository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Customer</span><span class="token punctuation">(</span><span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Smith&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// fetch all customers</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Customers found with findAll():&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Customer</span> customer <span class="token operator">:</span> repository<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>customer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// fetch an individual customer</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Customer found with findByFirstName(&#39;Alice&#39;):&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>repository<span class="token punctuation">.</span><span class="token function">findByFirstName</span><span class="token punctuation">(</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Customers found with findByLastName(&#39;Smith&#39;):&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Customer</span> customer <span class="token operator">:</span> repository<span class="token punctuation">.</span><span class="token function">findByLastName</span><span class="token punctuation">(</span><span class="token string">&quot;Smith&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>customer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 <code>DataMongodbApplication</code> 的 main 方法后，输出类似如下类容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Customers found with findAll():
-------------------------------
Customer(id=63d6157b265e7c5e48077f63, firstName=Alice, lastName=Smith)
Customer(id=63d6157b265e7c5e48077f64, firstName=Bob, lastName=Smith)

Customer found with findByFirstName(&#39;Alice&#39;):
--------------------------------
Customer(id=63d6157b265e7c5e48077f63, firstName=Alice, lastName=Smith)
Customers found with findByLastName(&#39;Smith&#39;):
--------------------------------
Customer(id=63d6157b265e7c5e48077f63, firstName=Alice, lastName=Smith)
Customer(id=63d6157b265e7c5e48077f64, firstName=Bob, lastName=Smith)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例源码" tabindex="-1"><a class="header-anchor" href="#示例源码" aria-hidden="true">#</a> 示例源码</h2>`,8),A={href:"https://github.com/dunwu/spring-tutorial/tree/master/codes/data/nosql/mongodb",target:"_blank",rel:"noopener noreferrer"},M=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),j={href:"https://www.mongodb.com/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/mongodb/mongo",target:"_blank",rel:"noopener noreferrer"},I={href:"https://university.mongodb.com/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/spring-projects/spring-data-mongodb",target:"_blank",rel:"noopener noreferrer"},E={href:"https://docs.spring.io/spring-data/mongodb/docs/current/reference/html/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/spring-projects/spring-data-examples/",target:"_blank",rel:"noopener noreferrer"},F={href:"https://spring.io/guides/gs/accessing-data-mongodb/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://spring.io/guides/gs/accessing-mongodb-data-rest/",target:"_blank",rel:"noopener noreferrer"};function P(G,J){const a=p("ExternalLinkIcon");return c(),i("div",null,[u,r,n("p",null,[n("a",d,[s("MongoDB"),t(a)]),s(" 是一个基于分布式文件存储的数据库。由 C++ 语言编写。旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。MongoDB 将数据存储为一个文档，数据结构由键值对组成。MongoDB 文档类似于 JSON 对象。字段值可以包含其他文档，数组及文档数组。")]),n("p",null,[s("在 Spring 中，"),n("a",k,[s("spring-data-mongodb"),t(a)]),s(" 项目对访问 "),n("a",m,[s("MongoDB"),t(a)]),s(" 进行了 API 封装，提供了便捷的访问方式。 Spring Data MongoDB 的核心是一个以 POJO 为中心的模型，用于与 MongoDB "),v,s(" 交互并轻松编写 "),g,s(" 样式的数据访问层。")]),n("p",null,[n("a",b,[s("spring-boot"),t(a)]),s(" 项目中的子模块 "),n("a",h,[s("spring-boot-starter-data-mongodb"),t(a)]),s(" 基于 "),n("a",f,[s("spring-data-mongodb"),t(a)]),s(" 项目，做了二次封装，大大简化了 MongoDB 的相关配置。")]),_,n("p",null,[n("a",y,[s("spring-data-mongodb"),t(a)]),s(" 会将 "),w,s(" 类映射到一个名为 "),S,s(" 的集合中。如果要更改集合的名称，可以在类上使用 "),B,s(" 注解。")]),N,n("p",null,[n("a",C,[s("spring-data-mongodb"),t(a)]),s(" 继承了 "),n("a",x,[s("Spring Data Commons"),t(a)]),s(" 项目的能力，所以可以使用其通用 API——"),D,s("。")]),q,n("p",null,[s("更多 Spring 访问 MongoDB 示例请参考："),n("a",A,[s("MongoDB 示例源码"),t(a)])]),M,n("ul",null,[n("li",null,[n("a",j,[s("MongoDB 官网"),t(a)])]),n("li",null,[n("a",R,[s("MongoDB Github"),t(a)])]),n("li",null,[n("a",I,[s("MongoDB 官方免费教程"),t(a)])]),n("li",null,[n("a",L,[s("spring-data-mongodb Github"),t(a)])]),n("li",null,[n("a",E,[s("Spring Data MongoDB 官方文档"),t(a)])]),n("li",null,[n("a",O,[s("Spring Data 官方示例"),t(a)])]),n("li",null,[n("a",F,[s("Accessing Data with MongoDB"),t(a)])]),n("li",null,[n("a",V,[s("Accessing MongoDB Data with REST"),t(a)])])])])}const W=o(l,[["render",P],["__file","22.Spring访问MongoDB.html.vue"]]);export{W as default};
