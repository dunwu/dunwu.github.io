import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c as i,a as e,d as t,b as n,e as s}from"./app-afc5da4f.js";const c={},d=e("h1",{id:"springboot-actuator-快速入门",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#springboot-actuator-快速入门","aria-hidden":"true"},"#"),n(" SpringBoot Actuator 快速入门")],-1),r={href:"https://github.com/spring-projects/spring-boot/tree/v2.7.0/spring-boot-project/spring-boot-actuator",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"spring-boot-actuator",-1),g=e("code",null,"spring-boot-starter-actuator",-1),k=s(`<p>如果是 Maven 项目，添加以下依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-actuator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是 Gradle 项目，添加以下声明：</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>dependencies <span class="token punctuation">{</span>
    implementation <span class="token string">&#39;org.springframework.boot:spring-boot-starter-actuator&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="端点-endpoint" tabindex="-1"><a class="header-anchor" href="#端点-endpoint" aria-hidden="true">#</a> 端点（Endpoint）</h2><p>Actuator Endpoint 使 Spring Boot 用户可以监控应用，并和应用进行交互。Spring Boot 内置了许多 端点，并允许用户自定义端点。例如，<code>health</code> 端点提供基本的应用健康信息。</p><p>用户可以启用或禁用每个单独的端点并通过 HTTP 或 JMX 暴露它们（使它们可远程访问）。当端点被启用和公开时，它被认为是可用的。内置端点仅在可用时才会自动配置。大多数应用程序选择通过 HTTP 公开。例如，默认情况下，<code>health</code> 端点映射到 <code>/actuator/health</code>。</p><h3 id="启用端点" tabindex="-1"><a class="header-anchor" href="#启用端点" aria-hidden="true">#</a> 启用端点</h3><p>默认情况下，除了 <code>shutdown</code> 之外的所有端点都已启用。要配置端点的启用，请使用 <code>management.endpoint.&lt;id&gt;.enabled</code> 属性。以下示例启用 <code>shutdown</code> 端点：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">management.endpoint.shutdown.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果您希望端点是明确指定才启用，请将 <code>management.endpoints.enabled-by-default</code> 属性设置为 false 并根据需要明确指定启用的端点，以下为示例：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">management.endpoints.enabled-by-default</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">management.endpoint.info.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="暴露端点" tabindex="-1"><a class="header-anchor" href="#暴露端点" aria-hidden="true">#</a> 暴露端点</h3><p>由于端点可能包含敏感信息，您应该仔细考虑何时暴露它们。下表显示了内置端点的默认曝光：</p><table><thead><tr><th style="text-align:left;">ID</th><th style="text-align:left;">JMX</th><th style="text-align:left;">Web</th></tr></thead><tbody><tr><td style="text-align:left;"><code>auditevents</code></td><td style="text-align:left;">Yes</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;"><code>beans</code></td><td style="text-align:left;">Yes</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;"><code>caches</code></td><td style="text-align:left;">Yes</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;"><code>conditions</code></td><td style="text-align:left;">Yes</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;"><code>configprops</code></td><td style="text-align:left;">Yes</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;"><code>env</code></td><td style="text-align:left;">Yes</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;"><code>flyway</code></td><td style="text-align:left;">Yes</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;"><code>health</code></td><td style="text-align:left;">Yes</td><td style="text-align:left;">Yes</td></tr><tr><td style="text-align:left;"><code>heapdump</code></td><td style="text-align:left;">N/A</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;"><code>httptrace</code></td><td style="text-align:left;">Yes</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;"><code>info</code></td><td style="text-align:left;">Yes</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;"><code>integrationgraph</code></td><td style="text-align:left;">Yes</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;"><code>jolokia</code></td><td style="text-align:left;">N/A</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;"><code>logfile</code></td><td style="text-align:left;">N/A</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;"><code>loggers</code></td><td style="text-align:left;">Yes</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;"><code>liquibase</code></td><td style="text-align:left;">Yes</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;"><code>metrics</code></td><td style="text-align:left;">Yes</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;"><code>mappings</code></td><td style="text-align:left;">Yes</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;"><code>prometheus</code></td><td style="text-align:left;">N/A</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;"><code>quartz</code></td><td style="text-align:left;">Yes</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;"><code>scheduledtasks</code></td><td style="text-align:left;">Yes</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;"><code>sessions</code></td><td style="text-align:left;">Yes</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;"><code>shutdown</code></td><td style="text-align:left;">Yes</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;"><code>startup</code></td><td style="text-align:left;">Yes</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;"><code>threaddump</code></td><td style="text-align:left;">Yes</td><td style="text-align:left;">No</td></tr></tbody></table><p>要更改暴露的端点，请使用以下特定于技术的包含和排除属性：</p><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;"><code>management.endpoints.jmx.exposure.exclude</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>management.endpoints.jmx.exposure.include</code></td><td style="text-align:left;"><code>*</code></td></tr><tr><td style="text-align:left;"><code>management.endpoints.web.exposure.exclude</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>management.endpoints.web.exposure.include</code></td><td style="text-align:left;"><code>health</code></td></tr></tbody></table><p><code>include</code> 属性列出了暴露的端点的 ID。 <code>exclude</code> 属性列出了不应暴露的端点的 ID。 <code>exclude</code> 属性优先于 <code>include</code> 属性。您可以使用端点 ID 列表配置包含和排除属性。</p><p>例如，仅暴露 <code>health</code> 和 info 端点，其他端点都不通过 JMX 暴露，可以按如下配置：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">management.endpoints.jmx.exposure.include</span><span class="token punctuation">=</span><span class="token value attr-value">health,info</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：<code>*</code> 可用于选择所有端点。</p><h3 id="安全" tabindex="-1"><a class="header-anchor" href="#安全" aria-hidden="true">#</a> 安全</h3><p>出于安全考虑，只有 <code>/health</code> 端点会通过 HTTP 方式暴露。用户可以通过 <code>management.endpoints.web.exposure.include</code> 决定哪些端点可以通过 HTTP 方式暴露。</p><p>如果 Spring Security 在类路径上并且不存在其他 <code>WebSecurityConfigurerAdapter</code> 或 <code>SecurityFilterChain</code> bean，则除 <code>/health</code> 之外的所有 actuator 都由 Spring Boot 自动启用安全控制。如果用户自定义了 <code>WebSecurityConfigurerAdapter</code> 或 <code>SecurityFilterChain</code> bean，Spring Boot 不再启用安全控制，由用户自行控制访问规则。</p><p>如果您希望为 HTTP 端点定义安全控制（例如，只允许具有特定角色的用户访问它们），Spring Boot 提供了一些方便的 <code>RequestMatcher</code> 对象，您可以将它们与 Spring Security 结合使用。</p><p>下面是一个典型的 Spring Security 配置示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span><span class="token punctuation">(</span>proxyBeanMethods <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MySecurityConfiguration</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">SecurityFilterChain</span> <span class="token function">securityFilterChain</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        http<span class="token punctuation">.</span><span class="token function">requestMatcher</span><span class="token punctuation">(</span><span class="token class-name">EndpointRequest</span><span class="token punctuation">.</span><span class="token function">toAnyEndpoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">(</span>requests<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> requests<span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasRole</span><span class="token punctuation">(</span><span class="token string">&quot;ENDPOINT_ADMIN&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        http<span class="token punctuation">.</span><span class="token function">httpBasic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> http<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前面的示例使用 EndpointRequest.toAnyEndpoint() 将请求匹配到任何端点，然后确保所有端点都具有 ENDPOINT_ADMIN 角色。 EndpointRequest 上还提供了其他几种匹配器方法。</p><p>如果希望无需身份验证即可访问所有执行器端点。可以通过更改 management.endpoints.web.exposure.include 属性来做到这一点，如下所示：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">management.endpoints.web.exposure.include</span><span class="token punctuation">=</span><span class="token value attr-value">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此外，如果存在 Spring Security，您将需要添加自定义安全配置，以允许未经身份验证的访问端点，如以下示例所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span><span class="token punctuation">(</span>proxyBeanMethods <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MySecurityConfiguration</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">SecurityFilterChain</span> <span class="token function">securityFilterChain</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        http<span class="token punctuation">.</span><span class="token function">requestMatcher</span><span class="token punctuation">(</span><span class="token class-name">EndpointRequest</span><span class="token punctuation">.</span><span class="token function">toAnyEndpoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">(</span>requests<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> requests<span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> http<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 Spring Boot 依赖于 Spring Security 的默认设置，因此 CSRF 保护默认开启。这意味着在使用默认安全配置时，需要 POST（关闭和记录器端点）、PUT 或 DELETE 的执行器端点会收到 403（禁止）错误。</p><blockquote><p>建议仅在创建非浏览器客户端使用的服务时完全禁用 CSRF 保护。</p></blockquote><h3 id="配置端点" tabindex="-1"><a class="header-anchor" href="#配置端点" aria-hidden="true">#</a> 配置端点</h3><p>端点会自动缓存对不带任何参数的读操作的响应数据。要配置端点缓存响应的时间量，请使用其 <code>cache.time-to-live</code> 属性。以下示例将 bean 端点缓存的生存时间设置为 10 秒：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">management.endpoint.beans.cache.time-to-live</span><span class="token punctuation">=</span><span class="token value attr-value">10s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="actuator-web-端点的超媒体" tabindex="-1"><a class="header-anchor" href="#actuator-web-端点的超媒体" aria-hidden="true">#</a> Actuator Web 端点的超媒体</h3><p>Spring Boot Actuator 中内置了一个“发现页面”端点，其中包含了所有端点的链接。默认情况下，“发现页面”在 <code>/actuator</code> 上可用。</p><p>要禁用“发现页面”，请将以下属性添加到您的应用程序属性中：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">management.endpoints.web.discovery.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置自定义管理上下文路径后，“发现页面”会自动从 <code>/actuator</code> 移动到应用管理上下文的根目录。例如，如果管理上下文路径是 <code>/management</code>，则发现页面可从 <code>/management</code> 获得。当管理上下文路径设置为 / 时，发现页面被禁用以防止与其他映射发生冲突的可能性。</p><h3 id="跨域支持" tabindex="-1"><a class="header-anchor" href="#跨域支持" aria-hidden="true">#</a> 跨域支持</h3><p>CORS 是一种 W3C 规范，可让用户以灵活的方式指定授权哪种跨域请求。如果使用 Spring MVC 或 Spring WebFlux，则可以配置 Actuator 的 Web 端点以支持此类场景。</p>`,44),v=e("code",null,"management.endpoints.web.cors.allowed-origins",-1),m={href:"http://example.com",target:"_blank",rel:"noopener noreferrer"},h=s(`<div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">management.endpoints.web.cors.allowed-origins</span><span class="token punctuation">=</span><span class="token value attr-value">https://example.com</span>
<span class="token key attr-name">management.endpoints.web.cors.allowed-methods</span><span class="token punctuation">=</span><span class="token value attr-value">GET,POST</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义端点" tabindex="-1"><a class="header-anchor" href="#自定义端点" aria-hidden="true">#</a> 自定义端点</h3><p>如果添加带有 <code>@Endpoint</code> 注释的 <code>@Bean</code>，则任何带有 <code>@ReadOperation</code>、<code>@WriteOperation</code> 或 <code>@DeleteOperation</code> 注释的方法都会自动通过 JMX 公开，并且在 Web 应用程序中，也可以通过 HTTP 公开。可以使用 Jersey、Spring MVC 或 Spring WebFlux 通过 HTTP 公开端点。如果 Jersey 和 Spring MVC 都可用，则使用 Spring MVC。</p><p>以下示例公开了一个返回自定义对象的读取操作：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@ReadOperation</span>
<span class="token keyword">public</span> <span class="token class-name">CustomData</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CustomData</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您还可以使用 <code>@JmxEndpoint</code> 或 <code>@WebEndpoint</code> 编写特定技术的端点。这些端点仅限于各自的技术。例如，<code>@WebEndpoint</code> 仅通过 HTTP 而不是通过 JMX 公开。</p><p>您可以使用 <code>@EndpointWebExtension</code> 和 <code>@EndpointJmxExtension</code> 编写特定技术的扩展。这些注释让您可以提供特定技术的操作来扩充现有端点。</p><p>最后，如果您需要访问 Web 框架的功能，您可以实现 servlet 或 Spring <code>@Controller</code> 和 <code>@RestController</code> 端点，但代价是它们无法通过 JMX 或使用不同的 Web 框架获得。</p><h2 id="通过-http-进行监控和管理" tabindex="-1"><a class="header-anchor" href="#通过-http-进行监控和管理" aria-hidden="true">#</a> 通过 HTTP 进行监控和管理</h2><h3 id="自定义管理端点路径" tabindex="-1"><a class="header-anchor" href="#自定义管理端点路径" aria-hidden="true">#</a> 自定义管理端点路径</h3><p>如果是 Web 应用，Spring Boot Actuator 会自动将所有启用的端点通过 HTTP 方式暴露。默认约定是使用前缀为 <code>/actuator</code> 的端点的 id 作为 URL 路径。例如，健康被暴露为 <code>/actuator/health</code>。</p><p>有时，自定义管理端点的前缀很有用。例如，您的应用程序可能已经将 <code>/actuator</code> 用于其他目的。您可以使用 <code>management.endpoints.web.base-path</code> 属性更改管理端点的前缀，如以下示例所示：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">management.endpoints.web.base-path</span><span class="token punctuation">=</span><span class="token value attr-value">/manage</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该示例将端点从 <code>/actuator/{id}</code> 更改为 <code>/manage/{id}</code>（例如，<code>/manage/info</code>）。</p><h3 id="自定义管理服务器端口" tabindex="-1"><a class="header-anchor" href="#自定义管理服务器端口" aria-hidden="true">#</a> 自定义管理服务器端口</h3><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">management.server.port</span><span class="token punctuation">=</span><span class="token value attr-value">8081</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置-ssl" tabindex="-1"><a class="header-anchor" href="#配置-ssl" aria-hidden="true">#</a> 配置 SSL</h3><p>当配置为使用自定义端口时，还可以使用各种 <code>management.server.ssl.*</code> 属性为管理服务器配置自己的 SSL。例如，这样做可以让管理服务器在主应用程序使用 HTTPS 时通过 HTTP 可用，如以下属性设置所示：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">8443</span>
<span class="token key attr-name">server.ssl.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">server.ssl.key-store</span><span class="token punctuation">=</span><span class="token value attr-value">classpath:store.jks</span>
<span class="token key attr-name">server.ssl.key-password</span><span class="token punctuation">=</span><span class="token value attr-value">secret</span>
<span class="token key attr-name">management.server.port</span><span class="token punctuation">=</span><span class="token value attr-value">8080</span>
<span class="token key attr-name">management.server.ssl.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者，主服务器和管理服务器都可以使用 SSL，但使用不同的密钥存储，如下所示：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">8443</span>
<span class="token key attr-name">server.ssl.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">server.ssl.key-store</span><span class="token punctuation">=</span><span class="token value attr-value">classpath:main.jks</span>
<span class="token key attr-name">server.ssl.key-password</span><span class="token punctuation">=</span><span class="token value attr-value">secret</span>
<span class="token key attr-name">management.server.port</span><span class="token punctuation">=</span><span class="token value attr-value">8080</span>
<span class="token key attr-name">management.server.ssl.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">management.server.ssl.key-store</span><span class="token punctuation">=</span><span class="token value attr-value">classpath:management.jks</span>
<span class="token key attr-name">management.server.ssl.key-password</span><span class="token punctuation">=</span><span class="token value attr-value">secret</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义管理服务器地址" tabindex="-1"><a class="header-anchor" href="#自定义管理服务器地址" aria-hidden="true">#</a> 自定义管理服务器地址</h3><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">management.server.port</span><span class="token punctuation">=</span><span class="token value attr-value">8081</span>
<span class="token key attr-name">management.server.address</span><span class="token punctuation">=</span><span class="token value attr-value">127.0.0.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="禁用-http-端点" tabindex="-1"><a class="header-anchor" href="#禁用-http-端点" aria-hidden="true">#</a> 禁用 HTTP 端点</h3><p>如果您不想通过 HTTP 方式暴露端点，可以将管理端口设置为 -1，如以下示例所示：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">management.server.port</span><span class="token punctuation">=</span><span class="token value attr-value">-1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以通过使用 management.endpoints.web.exposure.exclude 属性来实现这一点，如以下示例所示：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">management.endpoints.web.exposure.exclude</span><span class="token punctuation">=</span><span class="token value attr-value">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="通过-jmx-进行监控和管理" tabindex="-1"><a class="header-anchor" href="#通过-jmx-进行监控和管理" aria-hidden="true">#</a> 通过 JMX 进行监控和管理</h2><p>Java 管理扩展 (JMX) 提供了一种标准机制来监视和管理应用程序。默认情况下，此功能未启用。您可以通过将 <code>spring.jmx.enabled</code> 配置属性设置为 true 来打开它。 Spring Boot 将最合适的 <code>MBeanServer</code> 暴露为 ID 为 <code>mbeanServer</code> 的 bean。使用 Spring JMX 注释（<code>@ManagedResource</code>、<code>@ManagedAttribute</code> 或 <code>@ManagedOperation</code>）注释的任何 bean 都会暴露给它。</p><p>如果您的平台提供标准 <code>MBeanServer</code>，则 Spring Boot 会使用该标准并在必要时默认使用 VM <code>MBeanServer</code>。如果一切都失败了，则创建一个新的 <code>MBeanServer</code>。</p>`,31),b={href:"https://github.com/spring-projects/spring-boot/tree/v2.7.0/spring-boot-project/spring-boot-autoconfigure/src/main/java/org/springframework/boot/autoconfigure/jmx/JmxAutoConfiguration.java",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"JmxAutoConfiguration",-1),y=s(`<p>默认情况下，Spring Boot 还将管理端点公开为 <code>org.springframework.boot</code> 域下的 JMX MBean。要完全控制 JMX 域中的端点注册，请考虑注册您自己的 <code>EndpointObjectNameFactory</code> 实现。</p><h3 id="定制化-mbean-names" tabindex="-1"><a class="header-anchor" href="#定制化-mbean-names" aria-hidden="true">#</a> 定制化 MBean Names</h3><p>MBean 的名称通常由端点的 id 生成。例如，健康端点公开为 <code>org.springframework.boot:type=Endpoint,name=Health</code>。</p><p>如果您的应用程序包含多个 Spring <code>ApplicationContext</code>，您可能会发现名称冲突。要解决此问题，您可以将 <code>spring.jmx.unique-names</code> 属性设置为 true，以便 MBean 名称始终是唯一的。</p><p>如果需要定制，跨域按如下配置：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.jmx.unique-names</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">management.endpoints.jmx.domain</span><span class="token punctuation">=</span><span class="token value attr-value">com.example.myapp</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="禁用-jmx-端点" tabindex="-1"><a class="header-anchor" href="#禁用-jmx-端点" aria-hidden="true">#</a> 禁用 JMX 端点</h3><p>想禁用 JMX 端点，可以按如下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>management.endpoints.jmx.exposure.exclude=*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="将-jolokia-用于基于-http-的-jmx" tabindex="-1"><a class="header-anchor" href="#将-jolokia-用于基于-http-的-jmx" aria-hidden="true">#</a> 将 Jolokia 用于基于 HTTP 的 JMX</h3><p>Jolokia 是一个 JMX-HTTP 的桥接工具，它提供了另一种访问 JMX bean 的方法。要使用 Jolokia，需要先添加依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.jolokia<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jolokia-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
&lt;/dependency
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，您可以通过将 <code>jolokia</code> 或 <code>*</code> 添加到 <code>Management.Endpoints.web.exposure.include</code> 属性来暴露 Jolokia 端点。然后，您可以在管理 HTTP 服务器上使用 <code>/actuator/jolokia</code> 访问它。</p><h2 id="日志" tabindex="-1"><a class="header-anchor" href="#日志" aria-hidden="true">#</a> 日志</h2><p>Spring Boot Actuator 支持查看和配置应用日志级别。</p><p>日志级别的可选值如下：</p><ul><li><code>TRACE</code></li><li><code>DEBUG</code></li><li><code>INFO</code></li><li><code>WARN</code></li><li><code>ERROR</code></li><li><code>FATAL</code></li><li><code>OFF</code></li><li><code>null</code></li></ul><p><code>null</code> 表示没有显式配置。</p><h2 id="指标" tabindex="-1"><a class="header-anchor" href="#指标" aria-hidden="true">#</a> 指标</h2><h2 id="审计" tabindex="-1"><a class="header-anchor" href="#审计" aria-hidden="true">#</a> 审计</h2><p>Spring Boot Actuator 支持简单的审计功能。如果应用中启用了 Spring Security，Spring Boot Actuator 就会发布安全事件（如：“身份验证成功”、“失败”和“访问被拒绝”异常）。</p><p>可以通过在应用的配置中提供 <code>AuditEventRepository</code> 类型的 bean 来启用审计。为方便起见，Spring Boot 提供了一个 <code>InMemoryAuditEventRepository</code>。 <code>InMemoryAuditEventRepository</code> 的功能有限，建议仅将其用于开发环境。</p><p>如果要自定义安全事件，可以提供 <code>AbstractAuthenticationAuditListener</code> 和 <code>AbstractAuthorizationAuditListener</code> 实现。</p><p>此外，还可以将审计服务用于业务活动。为此，要么将 <code>AuditEventRepository</code> bean 注入组件并直接使用它，要么使用 Spring <code>ApplicationEventPublisher</code> 发布 <code>AuditApplicationEvent</code>（通过实现 <code>ApplicationEventPublisherAware</code>）。</p><h2 id="http-追踪" tabindex="-1"><a class="header-anchor" href="#http-追踪" aria-hidden="true">#</a> HTTP 追踪</h2><p>用户可以通过在应用中提供 <code>HttpTraceRepository</code> 类型的 bean 来启用 HTTP 跟踪。Spring Boot 提供了内置的 <code>InMemoryHttpTraceRepository</code>，它可以存储最近 100 次（默认）请求-响应的追踪数据。与其他 HTTP 追踪解决方案相比，<code>InMemoryHttpTraceRepository</code> 比较受限，建议仅用于开发环境。对于生产环境，建议使用 Zipkin 或 Spring Cloud Sleuth。</p><p>或者，可以自定义 <code>HttpTraceRepository</code>。</p><h2 id="处理监控" tabindex="-1"><a class="header-anchor" href="#处理监控" aria-hidden="true">#</a> 处理监控</h2><p>在 spring-boot 模块中，您可以找到两个类来创建对进程监控有用的文件：</p><ul><li><code>ApplicationPidFileWriter</code> 创建一个包含应用程序 PID 的文件（默认情况下，在应用程序目录中，文件名为 <code>application.pid</code>）。</li><li><code>WebServerPortFileWriter</code> 创建一个文件（或多个文件），其中包含正在运行的 Web 服务器的端口（默认情况下，在应用程序目录中，文件名为 <code>application.port</code>）。</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,31),f={href:"https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html#actuator",target:"_blank",rel:"noopener noreferrer"};function S(T,w){const a=p("ExternalLinkIcon");return l(),i("div",null,[d,e("p",null,[e("a",r,[u,t(a)]),n(" 模块提供了 Spring Boot 的所有生产就绪功能。启用这些功能的推荐方法是添加 "),g,n(" 依赖。")]),k,e("p",null,[n("CORS 支持默认是禁用的，只有在设置 "),v,n(" 属性后才会启用。以下配置允许来自 "),e("a",m,[n("example.com"),t(a)]),n(" 域的 GET 和 POST 调用：")]),h,e("p",null,[n("有关更多详细信息，请参阅 "),e("a",b,[x,t(a)]),n(" 类。")]),y,e("ul",null,[e("li",null,[e("a",f,[n("Spring Boot 官方文档之 Production-ready Features"),t(a)])])])])}const _=o(c,[["render",S],["__file","index.html.vue"]]);export{_ as default};
