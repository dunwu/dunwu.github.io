import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as p,a as n,b as s,d as e,e as t}from"./app-6ca995c0.js";const r={},l=n("h1",{id:"spring-security-快速入门",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#spring-security-快速入门","aria-hidden":"true"},"#"),s(" Spring Security 快速入门")],-1),u=n("h2",{id:"快速开始",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#快速开始","aria-hidden":"true"},"#"),s(" 快速开始")],-1),d={href:"https://spring.io/guides/gs/securing-web/",target:"_blank",rel:"noopener noreferrer"},k=t(`<h2 id="核心-api" tabindex="-1"><a class="header-anchor" href="#核心-api" aria-hidden="true">#</a> 核心 API</h2><h2 id="设计原理" tabindex="-1"><a class="header-anchor" href="#设计原理" aria-hidden="true">#</a> 设计原理</h2><p>Spring Security 对于 Servlet 的支持基于过滤链（<code>FilterChain</code>）实现。</p><p>Spring 提供了一个名为 <code>DelegatingFilterProxy</code> 的 <code>Filter</code> 实现，该实现允许在 Servlet 容器的生命周期和 Spring 的 <code>ApplicationContext</code> 之间进行桥接。 Servlet 容器允许使用其自己的标准注册 Filters，但它不了解 Spring 定义的 Bean。 <code>DelegatingFilterProxy</code> 可以通过标准的 Servlet 容器机制进行注册，但是可以将所有工作委托给实现 Filter 的 Spring Bean。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">ServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">FilterChain</span> chain<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Lazily get Filter that was registered as a Spring Bean</span>
    <span class="token comment">// For the example in DelegatingFilterProxy delegate is an instance of Bean Filter0</span>
    <span class="token class-name">Filter</span> delegate <span class="token operator">=</span> <span class="token function">getFilterBean</span><span class="token punctuation">(</span>someBeanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// delegate work to the Spring Bean</span>
    delegate<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>FilterChainProxy</code> 使用 <code>SecurityFilterChain</code> 确定应对此请求调用哪些 Spring Security 过滤器。</p><p><code>SecurityFilterChain</code> 中的安全过滤器通常是 Bean，但它们是使用 <code>FilterChainProxy</code> 而不是 <code>DelegatingFilterProxy</code> 注册的。</p><p>实际上，<code>FilterChainProxy</code> 可用于确定应使用哪个 <code>SecurityFilterChain</code>。如果您的应用程序可以为不同的模块提供完全独立的配置。</p><figure><img src="https://docs.spring.io/spring-security/site/docs/5.3.0.RELEASE/reference/html5/images/servlet/architecture/multi-securityfilterchain.png" alt="multi securityfilterchain" tabindex="0" loading="lazy"><figcaption>multi securityfilterchain</figcaption></figure><p>ExceptionTranslationFilter 可以将 AccessDeniedException 和 AuthenticationException 转换为 HTTP 响应。</p><figure><img src="https://docs.spring.io/spring-security/site/docs/5.3.0.RELEASE/reference/html5/images/servlet/architecture/exceptiontranslationfilter.png" alt="exceptiontranslationfilter" tabindex="0" loading="lazy"><figcaption>exceptiontranslationfilter</figcaption></figure><p>核心源码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    filterChain<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">AccessDeniedException</span> <span class="token operator">|</span> <span class="token class-name">AuthenticationException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>authenticated <span class="token operator">||</span> e <span class="token keyword">instanceof</span> <span class="token class-name">AuthenticationException</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">startAuthentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">accessDenied</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="认证" tabindex="-1"><a class="header-anchor" href="#认证" aria-hidden="true">#</a> 认证</h2><h3 id="数据模型" tabindex="-1"><a class="header-anchor" href="#数据模型" aria-hidden="true">#</a> 数据模型</h3><p>Spring Security 框架中的认证数据模型如下：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200331115710.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li><code>Authentication</code> - 认证信息实体。 <ul><li><code>principal</code> - 用户标识。如：用户名、账户名等。通常是 <code>UserDetails</code> 的实例（后面详细讲解）。</li><li><code>credentials</code> - 认证凭证。如：密码等。</li><li><code>authorities</code> - 授权信息。如：用户的角色、权限等信息。</li></ul></li><li><code>SecurityContext</code> - 安全上下文。包含一个 <code>Authentication</code> 对象。</li><li><code>SecurityContextHolder</code> - 安全上下文持有者。用于存储认证信息。</li></ul><p>【示例】注册认证信息</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">SecurityContext</span> context <span class="token operator">=</span> <span class="token class-name">SecurityContextHolder</span><span class="token punctuation">.</span><span class="token function">createEmptyContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Authentication</span> authentication <span class="token operator">=</span>
    <span class="token keyword">new</span> <span class="token class-name">TestingAuthenticationToken</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ROLE_USER&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
context<span class="token punctuation">.</span><span class="token function">setAuthentication</span><span class="token punctuation">(</span>authentication<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">SecurityContextHolder</span><span class="token punctuation">.</span><span class="token function">setContext</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【示例】访问认证信息</p><h3 id="认证基本流程" tabindex="-1"><a class="header-anchor" href="#认证基本流程" aria-hidden="true">#</a> 认证基本流程</h3><p>AbstractAuthenticationProcessingFilter 用作验证用户凭据的基本过滤器。 在对凭证进行身份验证之前，Spring Security 通常使用 AuthenticationEntryPoint 请求凭证。</p><figure><img src="https://docs.spring.io/spring-security/site/docs/5.3.0.RELEASE/reference/html5/images/servlet/authentication/architecture/abstractauthenticationprocessingfilter.png" alt="abstractauthenticationprocessingfilter" tabindex="0" loading="lazy"><figcaption>abstractauthenticationprocessingfilter</figcaption></figure><ul><li>（1）当用户提交其凭据时，<code>AbstractAuthenticationProcessingFilter</code> 从要验证的 <code>HttpServletRequest</code> 创建一个 <code>Authentication</code>。创建的身份验证类型取决于 <code>AbstractAuthenticationProcessingFilter</code> 的子类。例如，<code>UsernamePasswordAuthenticationFilter</code> 根据在 <code>HttpServletRequest</code> 中提交的用户名和密码来创建 <code>UsernamePasswordAuthenticationToken</code>。</li><li>（2）接下来，将身份验证传递到 <code>AuthenticationManager</code> 进行身份验证。</li><li>（3）如果身份验证失败，则认证失败 <ul><li>清除 <code>SecurityContextHolder</code>。</li><li>调用 <code>RememberMeServices.loginFail</code>。如果没有配置 remember me，则为空。</li><li>调用 <code>AuthenticationFailureHandler</code>。</li></ul></li><li>（4）如果身份验证成功，则认证成功。 <ul><li>如果是新的登录，则通知 <code>SessionAuthenticationStrategy</code>。</li><li>身份验证是在 <code>SecurityContextHolder</code> 上设置的。之后，<code>SecurityContextPersistenceFilter</code> 将 <code>SecurityContext</code> 保存到 <code>HttpSession</code> 中。</li><li>调用 <code>RememberMeServices.loginSuccess</code>。如果没有配置 remember me，则为空。</li><li><code>ApplicationEventPublisher</code> 发布一个 <code>InteractiveAuthenticationSuccessEvent</code>。</li></ul></li></ul><h3 id="用户名-密码认证" tabindex="-1"><a class="header-anchor" href="#用户名-密码认证" aria-hidden="true">#</a> 用户名/密码认证</h3><p>读取用户名和密码的方式：</p><ul><li>表单</li><li>基本认证</li><li>数字认证</li></ul><p>存储机制</p>`,29),h=n("li",null,"内存",-1),v=n("li",null,"JDBC",-1),m={href:"https://docs.spring.io/spring-security/site/docs/5.3.0.RELEASE/reference/html5/#servlet-authentication-userdetailsservice",target:"_blank",rel:"noopener noreferrer"},g=n("li",null,"LDAP",-1),b=t(`<h4 id="表单认证" tabindex="-1"><a class="header-anchor" href="#表单认证" aria-hidden="true">#</a> 表单认证</h4><p>spring security 支持通过从 html 表单获取登录时提交的用户名、密码。</p><figure><img src="https://docs.spring.io/spring-security/site/docs/5.3.0.RELEASE/reference/html5/images/servlet/authentication/unpwd/loginurlauthenticationentrypoint.png" alt="loginurlauthenticationentrypoint" tabindex="0" loading="lazy"><figcaption>loginurlauthenticationentrypoint</figcaption></figure><p>一旦，登录信息被提交，<code>UsernamePasswordAuthenticationFilter</code> 就会验证用户名和密码。</p><figure><img src="https://docs.spring.io/spring-security/site/docs/5.3.0.RELEASE/reference/html5/images/servlet/authentication/unpwd/usernamepasswordauthenticationfilter.png" alt="usernamepasswordauthenticationfilter" tabindex="0" loading="lazy"><figcaption>usernamepasswordauthenticationfilter</figcaption></figure><h4 id="基本认证" tabindex="-1"><a class="header-anchor" href="#基本认证" aria-hidden="true">#</a> 基本认证</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    http
        <span class="token comment">// ...</span>
        <span class="token punctuation">.</span><span class="token function">httpBasic</span><span class="token punctuation">(</span><span class="token function">withDefaults</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="内存认证" tabindex="-1"><a class="header-anchor" href="#内存认证" aria-hidden="true">#</a> 内存认证</h4>`,8),f=n("code",null,"InMemoryUserDetailsManager",-1),y={href:"https://docs.spring.io/spring-security/site/docs/5.3.0.RELEASE/reference/html5/#servlet-authentication-userdetailsservice",target:"_blank",rel:"noopener noreferrer"},S=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">UserDetailsService</span> <span class="token function">users</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// The builder will ensure the passwords are encoded before saving in memory</span>
    <span class="token class-name">UserBuilder</span> users <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token function">withDefaultPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">UserDetails</span> user <span class="token operator">=</span> users
        <span class="token punctuation">.</span><span class="token function">username</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">roles</span><span class="token punctuation">(</span><span class="token string">&quot;USER&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">UserDetails</span> user <span class="token operator">=</span> users
        <span class="token punctuation">.</span><span class="token function">username</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">roles</span><span class="token punctuation">(</span><span class="token string">&quot;USER&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ADMIN&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">InMemoryUserDetailsManager</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> admin<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="jdbc-认证" tabindex="-1"><a class="header-anchor" href="#jdbc-认证" aria-hidden="true">#</a> JDBC 认证</h4>`,2),x={href:"https://docs.spring.io/spring-security/site/docs/5.3.0.RELEASE/reference/html5/#servlet-authentication-userdetailsservice",target:"_blank",rel:"noopener noreferrer"},w=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Bean
UserDetailsManager users(DataSource dataSource) {
    UserDetails user = User.builder()
        .username(&quot;user&quot;)
        .password(&quot;{bcrypt}$2a$10$GRLdNijSQMUvl/au9ofL.eDwmoohzzS7.rmNSJZ.0FxO/BTk76klW&quot;)
        .roles(&quot;USER&quot;)
        .build();
    UserDetails admin = User.builder()
        .username(&quot;admin&quot;)
        .password(&quot;{bcrypt}$2a$10$GRLdNijSQMUvl/au9ofL.eDwmoohzzS7.rmNSJZ.0FxO/BTk76klW&quot;)
        .roles(&quot;USER&quot;, &quot;ADMIN&quot;)
        .build();
    JdbcUserDetailsManager users = new JdbcUserDetailsManager(dataSource);
    users.createUser()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基本的 scheam：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> users<span class="token punctuation">(</span>
    username varchar_ignorecase<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
    password varchar_ignorecase<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    enabled <span class="token keyword">boolean</span> <span class="token operator">not</span> <span class="token boolean">null</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">create</span> <span class="token keyword">table</span> authorities <span class="token punctuation">(</span>
    username varchar_ignorecase<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    authority varchar_ignorecase<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    <span class="token keyword">constraint</span> fk_authorities_users <span class="token keyword">foreign</span> <span class="token keyword">key</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span> <span class="token keyword">references</span> users<span class="token punctuation">(</span>username<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">unique</span> <span class="token keyword">index</span> ix_auth_username <span class="token keyword">on</span> authorities <span class="token punctuation">(</span>username<span class="token punctuation">,</span>authority<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="userdetailsservice" tabindex="-1"><a class="header-anchor" href="#userdetailsservice" aria-hidden="true">#</a> UserDetailsService</h4><p><code>UserDetails</code> 由 <code>UserDetailsService</code> 返回。 <code>DaoAuthenticationProvider</code> 验证 <code>UserDetails</code>，然后返回身份验证，该身份验证的主体是已配置的 <code>UserDetailsService</code> 返回的 <code>UserDetails</code>。</p><p><code>DaoAuthenticationProvider</code> 使用 <code>UserDetailsService</code> 检索用户名，密码和其他用于使用用户名和密码进行身份验证的属性。 Spring Security 提供 <code>UserDetailsService</code> 的内存中和 JDBC 实现。</p><p>您可以通过将自定义 <code>UserDetailsService</code> 公开为 bean 来定义自定义身份验证。</p><h4 id="passwordencoder" tabindex="-1"><a class="header-anchor" href="#passwordencoder" aria-hidden="true">#</a> PasswordEncoder</h4><p>Spring Security 的 servlet 支持通过与 <code>PasswordEncoder</code> 集成来安全地存储密码。 可以通过公开一个 PasswordEncoder Bean 来定制 Spring Security 使用的 PasswordEncoder 实现。</p><figure><img src="https://docs.spring.io/spring-security/site/docs/5.3.0.RELEASE/reference/html5/images/servlet/authentication/unpwd/daoauthenticationprovider.png" alt="daoauthenticationprovider" tabindex="0" loading="lazy"><figcaption>daoauthenticationprovider</figcaption></figure><h3 id="remember-me" tabindex="-1"><a class="header-anchor" href="#remember-me" aria-hidden="true">#</a> Remember-Me</h3><h2 id="spring-boot-集成" tabindex="-1"><a class="header-anchor" href="#spring-boot-集成" aria-hidden="true">#</a> Spring Boot 集成</h2><p><code>@EnableWebSecurity</code> 和 <code>@Configuration</code> 注解一起使用, 注解 <code>WebSecurityConfigurer</code> 类型的类。</p><p>或者利用<code>@EnableWebSecurity</code>注解继承 <code>WebSecurityConfigurerAdapter</code> 的类，这样就构成了 <em>Spring Security</em> 的配置。</p><ul><li>configure(WebSecurity)：通过重载该方法，可配置 Spring Security 的 Filter 链。</li><li>configure(HttpSecurity)：通过重载该方法，可配置如何通过拦截器保护请求。</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,16),_={href:"https://spring.io/guides/topicals/spring-security-architecture",target:"_blank",rel:"noopener noreferrer"},E={href:"https://spring.io/guides/gs/securing-web/",target:"_blank",rel:"noopener noreferrer"};function A(D,q){const a=o("ExternalLinkIcon");return c(),p("div",null,[l,u,n("p",null,[s("参考："),n("a",d,[s("Securing a Web Application"),e(a)])]),k,n("ul",null,[h,v,n("li",null,[n("a",m,[s("UserDetailsService"),e(a)])]),g]),b,n("p",null,[f,s(" 实现了 "),n("a",y,[s("UserDetailsService"),e(a)]),s(" ，提供了基本的用户名、密码认证，其认证数据存储在内存中。")]),S,n("p",null,[s("JdbcUserDetailsManager 实现了 "),n("a",x,[s("UserDetailsService"),e(a)]),s(" ，提供了基本的用户名、密码认证，其认证数据存储在关系型数据库中，通过 JDBC 方式访问。")]),w,n("ul",null,[n("li",null,[n("a",_,[s("Spring Security Architecture"),e(a)])]),n("li",null,[n("a",E,[s("Securing a Web Application"),e(a)])])])])}const C=i(r,[["render",A],["__file","02.SpringSecurity.html.vue"]]);export{C as default};
