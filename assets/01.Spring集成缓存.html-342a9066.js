import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as l,a as n,b as a,d as t,e}from"./app-1f12e18b.js";const u={},i=e(`<h1 id="spring-集成缓存中间件" tabindex="-1"><a class="header-anchor" href="#spring-集成缓存中间件" aria-hidden="true">#</a> Spring 集成缓存中间件</h1><blockquote><p>Spring 中提供了缓存功能的抽象，允许你在底层灵活的替换缓存实现，而对上层暴露相同的缓存接口。</p></blockquote><h2 id="缓存接口" tabindex="-1"><a class="header-anchor" href="#缓存接口" aria-hidden="true">#</a> 缓存接口</h2><p>Spring 的缓存 API 以注解方式提供。</p><h3 id="开启注解" tabindex="-1"><a class="header-anchor" href="#开启注解" aria-hidden="true">#</a> 开启注解</h3><p>Spring 为缓存功能提供了注解功能，但是你必须启动注解。<br> 你有两个选择：<br> (1) 在 xml 中声明<br> 像上一节 spring-ehcache.xml 中的做法一样，使用<code>&lt;cache:annotation-driven/&gt;</code></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">cache:</span>annotation-driven</span> <span class="token attr-name">cache-manager</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cacheManager<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(2) 使用标记注解<br> 你也可以通过对一个类进行注解修饰的方式在这个类中使用缓存注解。<br> 范例如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableCaching</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="缓存注解使用" tabindex="-1"><a class="header-anchor" href="#缓存注解使用" aria-hidden="true">#</a> 缓存注解使用</h3><p>Spring 对缓存的支持类似于对事务的支持。<br> 首先使用注解标记方法，相当于定义了切点，然后使用 Aop 技术在这个方法的调用前、调用后获取方法的入参和返回值，进而实现了缓存的逻辑。<br> 下面三个注解都是方法级别：</p><h4 id="cacheable" tabindex="-1"><a class="header-anchor" href="#cacheable" aria-hidden="true">#</a> @Cacheable</h4><p>表明所修饰的方法是可以缓存的：当第一次调用这个方法时，它的结果会被缓存下来，在缓存的有效时间内，以后访问这个方法都直接返回缓存结果，不再执行方法中的代码段。<br> 这个注解可以用<code>condition</code>属性来设置条件，如果不满足条件，就不使用缓存能力，直接执行方法。<br> 可以使用<code>key</code>属性来指定 key 的生成规则。</p><h4 id="cacheput" tabindex="-1"><a class="header-anchor" href="#cacheput" aria-hidden="true">#</a> @CachePut</h4><p>与<code>@Cacheable</code>不同，<code>@CachePut</code>不仅会缓存方法的结果，还会执行方法的代码段。<br> 它支持的属性和用法都与<code>@Cacheable</code>一致。</p><h4 id="cacheevict" tabindex="-1"><a class="header-anchor" href="#cacheevict" aria-hidden="true">#</a> @CacheEvict</h4><p>与<code>@Cacheable</code>功能相反，<code>@CacheEvict</code>表明所修饰的方法是用来删除失效或无用的缓存数据。<br> 下面是<code>@Cacheable</code>、<code>@CacheEvict</code>和<code>@CachePut</code>基本使用方法的一个集中展示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="caching" tabindex="-1"><a class="header-anchor" href="#caching" aria-hidden="true">#</a> @Caching</h4><p>如果需要使用同一个缓存注解（<code>@Cacheable</code>、<code>@CacheEvict</code>或<code>@CachePut</code>）多次修饰一个方法，就需要用到<code>@Caching</code>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Caching</span><span class="token punctuation">(</span>evict <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token annotation punctuation">@CacheEvict</span><span class="token punctuation">(</span><span class="token string">&quot;primary&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token annotation punctuation">@CacheEvict</span><span class="token punctuation">(</span>cacheNames<span class="token operator">=</span><span class="token string">&quot;secondary&quot;</span><span class="token punctuation">,</span> key<span class="token operator">=</span><span class="token string">&quot;#p0&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Book</span> <span class="token function">importBooks</span><span class="token punctuation">(</span><span class="token class-name">String</span> deposit<span class="token punctuation">,</span> <span class="token class-name">Date</span> date<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cacheconfig" tabindex="-1"><a class="header-anchor" href="#cacheconfig" aria-hidden="true">#</a> @CacheConfig</h4><p>与前面的缓存注解不同，这是一个类级别的注解。<br> 如果类的所有操作都是缓存操作，你可以使用<code>@CacheConfig</code>来指定类，省去一些配置。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@CacheConfig</span><span class="token punctuation">(</span><span class="token string">&quot;books&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookRepositoryImpl</span> <span class="token keyword">implements</span> <span class="token class-name">BookRepository</span> <span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Cacheable</span>
	<span class="token keyword">public</span> <span class="token class-name">Book</span> <span class="token function">findBook</span><span class="token punctuation">(</span><span class="token class-name">ISBN</span> isbn<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="缓存存储" tabindex="-1"><a class="header-anchor" href="#缓存存储" aria-hidden="true">#</a> 缓存存储</h2><p>Spring 允许通过配置方式接入多种不同的缓存存储。用户可以根据实际需要选择。</p>`,26),r={href:"https://dunwu.github.io/javatech/#/technology/cache/cache-theory?id=%e5%85%a8%e9%9d%a2%e7%90%86%e8%a7%a3%e7%bc%93%e5%ad%98%e5%8e%9f%e7%90%86",target:"_blank",rel:"noopener noreferrer"},k=e(`<h3 id="使用-concurrenthashmap-作为缓存" tabindex="-1"><a class="header-anchor" href="#使用-concurrenthashmap-作为缓存" aria-hidden="true">#</a> 使用 ConcurrentHashMap 作为缓存</h3><p>参考配置：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/context<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>cache</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/cache<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/p<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
         http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd
         http://www.springframework.org/schema/cache http://www.springframework.org/schema/cache/spring-cache.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">&gt;</span></span>使用 ConcurrentHashMap 作为 Spring 缓存<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!--配置参考：https://docs.spring.io/spring/docs/current/spring-framework-reference/integration.html#cache-store-configuration--&gt;</span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>component-scan</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>io.github.dunwu.spring.cache<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>simpleCacheManager<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.springframework.cache.support.SimpleCacheManager<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>caches<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>set</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.springframework.cache.concurrent.ConcurrentMapCacheFactoryBean<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">p:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.springframework.cache.concurrent.ConcurrentMapCacheFactoryBean<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">p:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>users<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>set</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">cache:</span>annotation-driven</span> <span class="token attr-name">cache-manager</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>simpleCacheManager<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-ehcache-作为缓存" tabindex="-1"><a class="header-anchor" href="#使用-ehcache-作为缓存" aria-hidden="true">#</a> 使用 Ehcache 作为缓存</h3><p>参考配置：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/context<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>cache</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/cache<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
         http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd
         http://www.springframework.org/schema/cache http://www.springframework.org/schema/cache/spring-cache.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">&gt;</span></span>使用 EhCache 作为 Spring 缓存<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!--配置参考：https://docs.spring.io/spring/docs/current/spring-framework-reference/integration.html#cache-store-configuration--&gt;</span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>component-scan</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>io.github.dunwu.spring.cache<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ehcache<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.springframework.cache.ehcache.EhCacheManagerFactoryBean<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>configLocation<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>classpath:ehcache/ehcache.xml<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ehcacheCacheManager<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.springframework.cache.ehcache.EhCacheCacheManager<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cacheManager<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ehcache<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">cache:</span>annotation-driven</span> <span class="token attr-name">cache-manager</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ehcacheCacheManager<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ehcache.xml 中的配置内容完全符合 Ehcache 的官方配置标准。</p><h3 id="使用-caffeine-作为缓存" tabindex="-1"><a class="header-anchor" href="#使用-caffeine-作为缓存" aria-hidden="true">#</a> 使用 Caffeine 作为缓存</h3><p>参考配置：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/context<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>cache</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/cache<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
         http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd
         http://www.springframework.org/schema/cache http://www.springframework.org/schema/cache/spring-cache.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">&gt;</span></span>使用 Caffeine 作为 Spring 缓存<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!--配置参考：https://docs.spring.io/spring/docs/current/spring-framework-reference/integration.html#cache-store-configuration--&gt;</span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>component-scan</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>io.github.dunwu.spring.cache<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>caffeineCacheManager<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.springframework.cache.caffeine.CaffeineCacheManager<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">cache:</span>annotation-driven</span> <span class="token attr-name">cache-manager</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>caffeineCacheManager<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2>`,11),d={href:"https://github.com/dunwu/spring-tutorial/tree/master/spring-tutorial/spring-tutorial-integration/spring-tutorial-integration-cache",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),a(" 参考资料")],-1),v={href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/integration.html#cache",target:"_blank",rel:"noopener noreferrer"},g={href:"http://www.ibm.com/developerworks/cn/opensource/os-cn-spring-cache/",target:"_blank",rel:"noopener noreferrer"};function h(b,q){const s=c("ExternalLinkIcon");return o(),l("div",null,[i,n("p",null,[a("不同的缓存存储，具有不同的性能和特性，如果想了解具体原理，可以参考："),n("a",r,[a("全面理解缓存原理"),t(s)]),a("。这里不再赘述。")]),k,n("p",null,[a("我的示例代码地址："),n("a",d,[a("spring-tutorial-integration-cache"),t(s)])]),m,n("ul",null,[n("li",null,[n("a",v,[a("Spring 官方文档之缓存抽象"),t(s)])]),n("li",null,[n("a",g,[a("注释驱动的 Spring cache 缓存介绍"),t(s)])])])])}const x=p(u,[["render",h],["__file","01.Spring集成缓存.html.vue"]]);export{x as default};
