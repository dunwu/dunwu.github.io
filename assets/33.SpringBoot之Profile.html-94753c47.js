import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as i,a as n,b as a,d as e,e as c}from"./app-ab18ad7c.js";const l={},u=c(`<h1 id="springboot-之-profile" tabindex="-1"><a class="header-anchor" href="#springboot-之-profile" aria-hidden="true">#</a> SpringBoot 之 Profile</h1><blockquote><p>一个应用为了在不同的环境下工作，常常会有不同的配置，代码逻辑处理。Spring Boot 对此提供了简便的支持。</p><p>关键词： <code>@Profile</code>、<code>spring.profiles.active</code></p></blockquote><h2 id="区分环境的配置" tabindex="-1"><a class="header-anchor" href="#区分环境的配置" aria-hidden="true">#</a> 区分环境的配置</h2><h3 id="properties-配置" tabindex="-1"><a class="header-anchor" href="#properties-配置" aria-hidden="true">#</a> properties 配置</h3><p>假设，一个应用的工作环境有：dev、test、prod</p><p>那么，我们可以添加 4 个配置文件：</p><ul><li><code>applcation.properties</code> - 公共配置</li><li><code>application-dev.properties</code> - 开发环境配置</li><li><code>application-test.properties</code> - 测试环境配置</li><li><code>application-prod.properties</code> - 生产环境配置</li></ul><p>在 <code>applcation.properties</code> 文件中可以通过以下配置来激活 profile：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.profiles.active</span> <span class="token punctuation">=</span> <span class="token value attr-value">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="yml-配置" tabindex="-1"><a class="header-anchor" href="#yml-配置" aria-hidden="true">#</a> yml 配置</h3><p>与 properties 文件类似，我们也可以添加 4 个配置文件：</p><ul><li><code>applcation.yml</code> - 公共配置</li><li><code>application-dev.yml</code> - 开发环境配置</li><li><code>application-test.yml</code> - 测试环境配置</li><li><code>application-prod.yml</code> - 生产环境配置</li></ul><p>在 <code>applcation.yml</code> 文件中可以通过以下配置来激活 profile：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
    <span class="token key atrule">active</span><span class="token punctuation">:</span> prod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，yml 文件也可以在一个文件中完成所有 profile 的配置：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 激活 prod</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
    <span class="token key atrule">active</span><span class="token punctuation">:</span> prod
<span class="token comment"># 也可以同时激活多个 profile</span>
<span class="token comment"># spring.profiles.active: prod,proddb,prodlog</span>
<span class="token punctuation">---</span>
<span class="token comment"># dev 配置</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> dev

<span class="token comment"># 略去配置</span>

<span class="token punctuation">---</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> test

<span class="token comment"># 略去配置</span>

<span class="token punctuation">---</span>
<span class="token key atrule">spring.profiles</span><span class="token punctuation">:</span> prod
<span class="token key atrule">spring.profiles.include</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> proddb
  <span class="token punctuation">-</span> prodlog

<span class="token punctuation">---</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> proddb

<span class="token comment"># 略去配置</span>

<span class="token punctuation">---</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> prodlog
<span class="token comment"># 略去配置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：不同 profile 之间通过 <code>---</code> 分割</p><h2 id="区分环境的代码" tabindex="-1"><a class="header-anchor" href="#区分环境的代码" aria-hidden="true">#</a> 区分环境的代码</h2><p>使用 <code>@Profile</code> 注解可以指定类或方法在特定的 Profile 环境生效。</p><h3 id="修饰类" tabindex="-1"><a class="header-anchor" href="#修饰类" aria-hidden="true">#</a> 修饰类</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@Profile</span><span class="token punctuation">(</span><span class="token string">&quot;production&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JndiDataConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>destroyMethod<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">dataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Context</span> ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InitialContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">DataSource</span><span class="token punctuation">)</span> ctx<span class="token punctuation">.</span><span class="token function">lookup</span><span class="token punctuation">(</span><span class="token string">&quot;java:comp/env/jdbc/datasource&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修饰注解" tabindex="-1"><a class="header-anchor" href="#修饰注解" aria-hidden="true">#</a> 修饰注解</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Profile</span><span class="token punctuation">(</span><span class="token string">&quot;production&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Production</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修饰方法" tabindex="-1"><a class="header-anchor" href="#修饰方法" aria-hidden="true">#</a> 修饰方法</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;dataSource&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Profile</span><span class="token punctuation">(</span><span class="token string">&quot;development&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">standaloneDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">EmbeddedDatabaseBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span><span class="token class-name">EmbeddedDatabaseType</span><span class="token punctuation">.</span><span class="token constant">HSQL</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">addScript</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:com/bank/config/sql/schema.sql&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">addScript</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:com/bank/config/sql/test-data.sql&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;dataSource&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Profile</span><span class="token punctuation">(</span><span class="token string">&quot;production&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">jndiDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Context</span> ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InitialContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">DataSource</span><span class="token punctuation">)</span> ctx<span class="token punctuation">.</span><span class="token function">lookup</span><span class="token punctuation">(</span><span class="token string">&quot;java:comp/env/jdbc/datasource&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="激活-profile" tabindex="-1"><a class="header-anchor" href="#激活-profile" aria-hidden="true">#</a> 激活 profile</h2><h3 id="插件激活-profile" tabindex="-1"><a class="header-anchor" href="#插件激活-profile" aria-hidden="true">#</a> 插件激活 profile</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring-boot:run -Drun.profiles=prod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="main-方法激活-profile" tabindex="-1"><a class="header-anchor" href="#main-方法激活-profile" aria-hidden="true">#</a> main 方法激活 profile</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--spring.profiles.active=prod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="jar-激活-profile" tabindex="-1"><a class="header-anchor" href="#jar-激活-profile" aria-hidden="true">#</a> jar 激活 profile</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java -jar -Dspring.profiles.active=prod *.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="在-java-代码中激活-profile" tabindex="-1"><a class="header-anchor" href="#在-java-代码中激活-profile" aria-hidden="true">#</a> 在 Java 代码中激活 profile</h3><p>直接指定环境变量来激活 profile：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;spring.profiles.active&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 Spring 容器中激活 profile：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">AnnotationConfigApplicationContext</span> ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">getEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setActiveProfiles</span><span class="token punctuation">(</span><span class="token string">&quot;development&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">SomeConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">StandaloneDataConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">JndiDataConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例源码" tabindex="-1"><a class="header-anchor" href="#示例源码" aria-hidden="true">#</a> 示例源码</h2>`,38),r={href:"https://github.com/dunwu/spring-boot-tutorial/tree/master/codes/spring-boot-profile",target:"_blank",rel:"noopener noreferrer"},d=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),a(" 参考资料")],-1),k={href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/core.html#beans-definition-profiles",target:"_blank",rel:"noopener noreferrer"},v={href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-profiles",target:"_blank",rel:"noopener noreferrer"};function m(b,h){const s=p("ExternalLinkIcon");return o(),i("div",null,[u,n("blockquote",null,[n("p",null,[a("示例源码："),n("a",r,[a("spring-boot-profile"),e(s)])])]),d,n("ul",null,[n("li",null,[n("a",k,[a("Spring 官方文档之 Bean Definition Profiles"),e(s)])]),n("li",null,[n("a",v,[a("Spring Boot 官方文档之 boot-features-profiles"),e(s)])])])])}const y=t(l,[["render",m],["__file","33.SpringBoot之Profile.html.vue"]]);export{y as default};
