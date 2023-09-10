import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as i,a as n,b as a,d as e,e as t}from"./app-002cceec.js";const l={},u=n("h1",{id:"java-缓存中间件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#java-缓存中间件","aria-hidden":"true"},"#"),a(" Java 缓存中间件")],-1),r=n("blockquote",null,[n("p",null,"关键词：Spring Cache、J2Cache、JetCache")],-1),d=n("h2",{id:"一-、jsr-107",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一-、jsr-107","aria-hidden":"true"},"#"),a(" 一 、JSR 107")],-1),k={href:"https://www.jcp.org/en/jsr/detail?id=107",target:"_blank",rel:"noopener noreferrer"},v=t('<p>因此，在很多缓存框架、缓存库中，其 API 都参考了 JSR 107 规范。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200709174139.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Java Caching 定义了 5 个核心接口</p><ul><li><strong>CachingProvider</strong> - 定义了创建、配置、获取、管理和控制多个 <code>CacheManager</code>。一个应用可以在运行期访问多个 <code>CachingProvider</code>。</li><li><strong>CacheManager</strong> - 定义了创建、配置、获取、管理和控制多个唯一命名的 Cache，这些 Cache 存在于 CacheManager 的上下文中。一个 CacheManager 仅被一个 CachingProvider 所拥有。</li><li><strong>Cache</strong> - 是一个类似 Map 的数据结构并临时存储以 Key 为索引的值。一个 Cache 仅被一个 CacheManager 所拥有。</li><li><strong>Entry</strong> - 是一个存储在 Cache 中的 key-value 对。</li><li><strong>Expiry</strong> - 每一个存储在 Cache 中的条目有一个定义的有效期，即 Expiry Duration。一旦超过这个时间，条目为过期的状态。一旦过期，条目将不可访问、更新和删除。缓存有效期可以通过 ExpiryPolicy 设置。</li></ul><h2 id="二、spring-cache" tabindex="-1"><a class="header-anchor" href="#二、spring-cache" aria-hidden="true">#</a> 二、Spring Cache</h2>',5),h={href:"https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/integration.html#cache",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>Spring 作为 Java 开发最著名的框架，也提供了缓存功能的框架—— Spring Cache。</p><p>Spring 支持基于注释（annotation）的缓存（cache）技术，它本质上不是一个具体的缓存实现方案（例如：EHCache 或 OSCache），而是一个对缓存使用的抽象，通过在既有代码中添加少量它定义的各种 annotation，即能够达到缓存方法的返回对象的效果。</p><p>Spring Cache 的特点：</p><ul><li>通过缓存注解即可支持缓存功能</li><li>支持 Spring EL 表达式</li><li>支持 AspectJ</li><li>支持自定义 key 和缓存管理</li></ul><h3 id="开启缓存注解" tabindex="-1"><a class="header-anchor" href="#开启缓存注解" aria-hidden="true">#</a> 开启缓存注解</h3><p>Spring 为缓存功能提供了注解功能，但是你必须启动注解。</p><p>有两种方式：</p><p>（一）使用标记注解 <code>@EnableCaching</code></p><p>这种方式对于 Spring 或 Spring Boot 项目都适用。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableCaching</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（二）在 xml 中声明</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">cache:</span>annotation-driven</span> <span class="token attr-name">cache-manager</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cacheManager<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="spring-缓存注解-api" tabindex="-1"><a class="header-anchor" href="#spring-缓存注解-api" aria-hidden="true">#</a> spring 缓存注解 API</h3><p>Spring 对缓存的支持类似于对事务的支持。</p><p>首先使用注解标记方法，相当于定义了切点，然后使用 Aop 技术在这个方法的调用前、调用后获取方法的入参和返回值，进而实现了缓存的逻辑。</p><h4 id="cacheable" tabindex="-1"><a class="header-anchor" href="#cacheable" aria-hidden="true">#</a> @Cacheable</h4><p><strong><code>@Cacheable</code> 用于触发缓存</strong>。</p><p>表明所修饰的方法是可以缓存的：当第一次调用这个方法时，它的结果会被缓存下来，在缓存的有效时间内，以后访问这个方法都直接返回缓存结果，不再执行方法中的代码段。</p><p>这个注解可以用<code>condition</code>属性来设置条件，如果不满足条件，就不使用缓存能力，直接执行方法。</p><p>可以使用<code>key</code>属性来指定 key 的生成规则。</p><h4 id="cacheput" tabindex="-1"><a class="header-anchor" href="#cacheput" aria-hidden="true">#</a> @CachePut</h4><p><strong><code>@CachePut</code> 用于更新缓存</strong>。</p><p>与<code>@Cacheable</code>不同，<code>@CachePut</code>不仅会缓存方法的结果，还会执行方法的代码段。</p><p>它支持的属性和用法都与<code>@Cacheable</code>一致。</p><h4 id="cacheevict" tabindex="-1"><a class="header-anchor" href="#cacheevict" aria-hidden="true">#</a> @CacheEvict</h4><p><strong><code>@CacheEvict</code> 用于清除缓存</strong>。</p><p>与<code>@Cacheable</code>功能相反，<code>@CacheEvict</code>表明所修饰的方法是用来删除失效或无用的缓存数据。</p><p>下面是<code>@Cacheable</code>、<code>@CacheEvict</code>和<code>@CachePut</code>基本使用方法的一个集中展示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
    <span class="token comment">// @Cacheable可以设置多个缓存，形式如：@Cacheable({&quot;books&quot;, &quot;isbns&quot;})</span>
    <span class="token annotation punctuation">@Cacheable</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;users&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> key<span class="token operator">=</span><span class="token string">&quot;#user.id&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">findUser</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">findUserInDB</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Cacheable</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;users&quot;</span><span class="token punctuation">,</span> condition <span class="token operator">=</span> <span class="token string">&quot;#user.getId() &lt;= 2&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">findUserInLimit</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">findUserInDB</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@CachePut</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;users&quot;</span><span class="token punctuation">,</span> key <span class="token operator">=</span> <span class="token string">&quot;#user.getId()&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">updateUserInDB</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@CacheEvict</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;users&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">removeUser</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">removeUserInDB</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@CacheEvict</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;users&quot;</span><span class="token punctuation">,</span> allEntries <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">removeAllInDB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="caching" tabindex="-1"><a class="header-anchor" href="#caching" aria-hidden="true">#</a> @Caching</h4><p><strong><code>@Caching</code> 用于组合定义多种缓存功能</strong>。</p><p>如果需要使用同一个缓存注解（<code>@Cacheable</code>、<code>@CacheEvict</code>或<code>@CachePut</code>）多次修饰一个方法，就需要用到<code>@Caching</code>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Caching</span><span class="token punctuation">(</span>evict <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token annotation punctuation">@CacheEvict</span><span class="token punctuation">(</span><span class="token string">&quot;primary&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token annotation punctuation">@CacheEvict</span><span class="token punctuation">(</span>cacheNames<span class="token operator">=</span><span class="token string">&quot;secondary&quot;</span><span class="token punctuation">,</span> key<span class="token operator">=</span><span class="token string">&quot;#p0&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Book</span> <span class="token function">importBooks</span><span class="token punctuation">(</span><span class="token class-name">String</span> deposit<span class="token punctuation">,</span> <span class="token class-name">Date</span> date<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cacheconfig" tabindex="-1"><a class="header-anchor" href="#cacheconfig" aria-hidden="true">#</a> @CacheConfig</h4><p><strong><code>@CacheConfig</code> 用于定义公共缓存配置</strong>。</p><p>与前面的缓存注解不同，这是一个类级别的注解。</p><p>如果类的所有操作都是缓存操作，你可以使用<code>@CacheConfig</code>来指定类，省去一些配置。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@CacheConfig</span><span class="token punctuation">(</span><span class="token string">&quot;books&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookRepositoryImpl</span> <span class="token keyword">implements</span> <span class="token class-name">BookRepository</span> <span class="token punctuation">{</span>
 <span class="token annotation punctuation">@Cacheable</span>
 <span class="token keyword">public</span> <span class="token class-name">Book</span> <span class="token function">findBook</span><span class="token punctuation">(</span><span class="token class-name">ISBN</span> isbn<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、spring-boot-cache" tabindex="-1"><a class="header-anchor" href="#三、spring-boot-cache" aria-hidden="true">#</a> 三、Spring Boot Cache</h2>`,39),g={href:"https://docs.spring.io/spring-boot/docs/2.3.1.RELEASE/reference/html/spring-boot-features.html#boot-features-caching",target:"_blank",rel:"noopener noreferrer"},b=t(`<p>Spring Boot Cache 是在 Spring Cache 的基础上做了封装，使得使用更为便捷。</p><h3 id="spring-boot-cache-快速入门" tabindex="-1"><a class="header-anchor" href="#spring-boot-cache-快速入门" aria-hidden="true">#</a> Spring Boot Cache 快速入门</h3><p>（1）引入依赖</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-cache<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 按序引入需要的缓存库 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）缓存配置</p><p>例如，选用缓存为 redis，则需要配置 redis 相关的配置项（如：数据源、连接池等配置信息）</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 缓存类型，支持类型：GENERIC、JCACHE、EHCACHE、HAZELCAST、INFINISPAN、COUCHBASE、REDIS、CAFFEINE、SIMPLE</span>
<span class="token key attr-name">spring.cache.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">redis</span>
<span class="token comment"># 全局缓存时间</span>
<span class="token key attr-name">spring.cache.redis.time-to-live</span> <span class="token punctuation">=</span> <span class="token value attr-value">60s</span>

<span class="token comment"># Redis 配置</span>
<span class="token key attr-name">spring.redis.database</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
<span class="token key attr-name">spring.redis.host</span> <span class="token punctuation">=</span> <span class="token value attr-value">localhost</span>
<span class="token key attr-name">spring.redis.port</span> <span class="token punctuation">=</span> <span class="token value attr-value">6379</span>
<span class="token key attr-name">spring.redis.password</span> <span class="token value attr-value">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）使用 <code>@EnableCaching</code> 开启缓存</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@EnableCaching</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）缓存注解（<code>@Cacheable</code>、<code>@CachePut</code>、<code>@CacheEvit</code> 等）使用方式与 Spring Cache 完全一样</p><h2 id="四、jetcache" tabindex="-1"><a class="header-anchor" href="#四、jetcache" aria-hidden="true">#</a> 四、JetCache</h2>`,11),C=n("p",null,[a("JetCache 是一个基于 Java 的缓存系统封装，提供统一的 API 和注解来简化缓存的使用。 JetCache 提供了比 SpringCache 更加强大的注解，可以原生的支持 TTL、两级缓存、分布式自动刷新，还提供了"),n("code",null,"Cache"),a("接口用于手工缓存操作。 当前有四个实现，"),n("code",null,"RedisCache"),a("、"),n("code",null,"TairCache"),a("（此部分未在 github 开源）、"),n("code",null,"CaffeineCache"),a("(in memory)和一个简易的"),n("code",null,"LinkedHashMapCache"),a("(in memory)，要添加新的实现也是非常简单的。")],-1),f={href:"https://github.com/alibaba/jetcache",target:"_blank",rel:"noopener noreferrer"},y=n("h3",{id:"jetcache-快速入门",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jetcache-快速入门","aria-hidden":"true"},"#"),a(" jetcache 快速入门")],-1),_={href:"https://github.com/alibaba/jetcache/wiki/RedisWithLettuce_CN",target:"_blank",rel:"noopener noreferrer"},j=t(`<p>（1）引入 POM</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alicp.jetcache<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jetcache-starter-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.5.14<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）配置</p><p>配置一个 spring boot 风格的 application.yml 文件，把他放到资源目录中</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">jetcache</span><span class="token punctuation">:</span>
  <span class="token key atrule">statIntervalMinutes</span><span class="token punctuation">:</span> <span class="token number">15</span>
  <span class="token key atrule">areaInCacheName</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">local</span><span class="token punctuation">:</span>
    <span class="token key atrule">default</span><span class="token punctuation">:</span>
      <span class="token key atrule">type</span><span class="token punctuation">:</span> linkedhashmap
      <span class="token key atrule">keyConvertor</span><span class="token punctuation">:</span> fastjson
  <span class="token key atrule">remote</span><span class="token punctuation">:</span>
    <span class="token key atrule">default</span><span class="token punctuation">:</span>
      <span class="token key atrule">type</span><span class="token punctuation">:</span> redis
      <span class="token key atrule">keyConvertor</span><span class="token punctuation">:</span> fastjson
      <span class="token key atrule">valueEncoder</span><span class="token punctuation">:</span> java
      <span class="token key atrule">valueDecoder</span><span class="token punctuation">:</span> java
      <span class="token key atrule">poolConfig</span><span class="token punctuation">:</span>
        <span class="token key atrule">minIdle</span><span class="token punctuation">:</span> <span class="token number">5</span>
        <span class="token key atrule">maxIdle</span><span class="token punctuation">:</span> <span class="token number">20</span>
        <span class="token key atrule">maxTotal</span><span class="token punctuation">:</span> <span class="token number">50</span>
      <span class="token key atrule">host</span><span class="token punctuation">:</span> 127.0.0.1
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">6379</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）开启缓存</p><p>然后创建一个 App 类放在业务包的根下，EnableMethodCache，EnableCreateCacheAnnotation 这两个注解分别激活 Cached 和 CreateCache 注解，其他和标准的 Spring Boot 程序是一样的。这个类可以直接 main 方法运行。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>company<span class="token punctuation">.</span>mypackage</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alicp<span class="token punctuation">.</span>jetcache<span class="token punctuation">.</span>anno<span class="token punctuation">.</span>config<span class="token punctuation">.</span></span><span class="token class-name">EnableCreateCacheAnnotation</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alicp<span class="token punctuation">.</span>jetcache<span class="token punctuation">.</span>anno<span class="token punctuation">.</span>config<span class="token punctuation">.</span></span><span class="token class-name">EnableMethodCache</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableMethodCache</span><span class="token punctuation">(</span>basePackages <span class="token operator">=</span> <span class="token string">&quot;com.company.mypackage&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EnableCreateCacheAnnotation</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MySpringBootApp</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">MySpringBootApp</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）API 基本使用</p><p>创建缓存实例</p><p>通过 @CreateCache 注解创建一个缓存实例，默认超时时间是 100 秒</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@CreateCache</span><span class="token punctuation">(</span>expire <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">Cache</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">UserDO</span><span class="token punctuation">&gt;</span></span> userCache<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>用起来就像 map 一样</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">UserDO</span> user <span class="token operator">=</span> userCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">123L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
userCache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">123L</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
userCache<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">123L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个两级（内存+远程）的缓存，内存中的元素个数限制在 50 个。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@CreateCache</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;UserService.userCache&quot;</span><span class="token punctuation">,</span> expire <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> cacheType <span class="token operator">=</span> <span class="token class-name">CacheType</span><span class="token punctuation">.</span><span class="token constant">BOTH</span><span class="token punctuation">,</span> localLimit <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">Cache</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">UserDO</span><span class="token punctuation">&gt;</span></span> userCache<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>name 属性不是必须的，但是起个名字是个好习惯，展示统计数据的使用，会使用这个名字。如果同一个 area 两个 @CreateCache 的 name 配置一样，它们生成的 Cache 将指向同一个实例。</p><p>创建方法缓存</p><p>使用 @Cached 方法可以为一个方法添加上缓存。JetCache 通过 Spring AOP 生成代理，来支持缓存功能。注解可以加在接口方法上也可以加在类方法上，但需要保证是个 Spring bean。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Cached</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;UserService.getUserById&quot;</span><span class="token punctuation">,</span> expire <span class="token operator">=</span> <span class="token number">3600</span><span class="token punctuation">)</span>
    <span class="token class-name">User</span> <span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token keyword">long</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、j2cache" tabindex="-1"><a class="header-anchor" href="#五、j2cache" aria-hidden="true">#</a> 五、j2cache</h2><h2 id="六、总结" tabindex="-1"><a class="header-anchor" href="#六、总结" aria-hidden="true">#</a> 六、总结</h2><p>使用缓存框架，使得开发缓存功能非常便捷。</p><p>如果你的系统只需要使用一种缓存，那么推荐使用 Spring Boot Cache。Spring Boot Cache 在 Spring Cache 基础上做了封装，使用更简单、方便。</p><p>如果你的系统需要使用多级缓存，那么推荐使用 jetcache。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,26),x={href:"https://www.jcp.org/en/jsr/detail?id=107",target:"_blank",rel:"noopener noreferrer"},w={href:"https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/integration.html#cache",target:"_blank",rel:"noopener noreferrer"},S={href:"https://docs.spring.io/spring-boot/docs/2.3.1.RELEASE/reference/html/spring-boot-features.html#boot-features-caching",target:"_blank",rel:"noopener noreferrer"},E={href:"https://gitee.com/ld/J2Cache",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/alibaba/jetcache",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/alibaba/jetcache/wiki/Home_CN",target:"_blank",rel:"noopener noreferrer"};function B(A,U){const s=c("ExternalLinkIcon");return o(),i("div",null,[u,r,d,n("p",null,[n("a",k,[a("JSR107"),e(s)]),a(" 中制订了 Java 缓存的规范。")]),v,n("blockquote",null,[n("p",null,[a("详见："),n("a",h,[a("Spring Cache 官方文档"),e(s)])])]),m,n("blockquote",null,[n("p",null,[a("详见："),n("a",g,[a("Spring Boot Cache 特性官方文档"),e(s)])])]),b,n("blockquote",null,[C,n("p",null,[a("详见："),n("a",f,[a("jetcache Github"),e(s)])])]),y,n("p",null,[a("如果使用 Spring Boot，可以按如下的方式配置（这里使用了 jedis 客户端连接 redis，如果需要集群、读写分离、异步等特性支持请使用"),n("a",_,[a("lettuce"),e(s)]),a("客户端）。")]),j,n("ul",null,[n("li",null,[n("a",x,[a("JSR107"),e(s)])]),n("li",null,[n("a",w,[a("Spring Cache 官方文档"),e(s)])]),n("li",null,[n("a",S,[a("Spring Boot Cache 特性官方文档"),e(s)])]),n("li",null,[n("a",E,[a("J2Cache Gitee"),e(s)])]),n("li",null,[n("a",I,[a("jetcache Github"),e(s)])]),n("li",null,[n("a",q,[a("jetcache wiki"),e(s)])])])])}const L=p(l,[["render",B],["__file","index.html.vue"]]);export{L as default};
