import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as p,c as l,a as n,d as e,b as s,e as t}from"./app-e12ad880.js";const r={},i=t(`<h1 id="spring-资源管理" tabindex="-1"><a class="header-anchor" href="#spring-资源管理" aria-hidden="true">#</a> Spring 资源管理</h1><blockquote><p>Version 6.0.3</p></blockquote><h2 id="resource-接口" tabindex="-1"><a class="header-anchor" href="#resource-接口" aria-hidden="true">#</a> Resource 接口</h2><p>相对标准 URL 访问机制，Spring 的 <code>org.springframework.core.io.Resource</code> 接口抽象了对底层资源的访问接口，提供了一套更好的访问方式。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Resource</span> <span class="token keyword">extends</span> <span class="token class-name">InputStreamSource</span> <span class="token punctuation">{</span>

    <span class="token keyword">boolean</span> <span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">boolean</span> <span class="token function">isReadable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">boolean</span> <span class="token function">isOpen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">boolean</span> <span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">URL</span> <span class="token function">getURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">;</span>

    <span class="token class-name">URI</span> <span class="token function">getURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">;</span>

    <span class="token class-name">File</span> <span class="token function">getFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">;</span>

    <span class="token class-name">ReadableByteChannel</span> <span class="token function">readableChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">;</span>

    <span class="token keyword">long</span> <span class="token function">contentLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">;</span>

    <span class="token keyword">long</span> <span class="token function">lastModified</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">;</span>

    <span class="token class-name">Resource</span> <span class="token function">createRelative</span><span class="token punctuation">(</span><span class="token class-name">String</span> relativePath<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span> <span class="token function">getFilename</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span> <span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正如 <code>Resource</code> 接口的定义所示，它扩展了 <code>InputStreamSource</code> 接口。<code>Resource</code> 最核心的方法如下：</p><ul><li><code>getInputStream()</code> - 定位并且打开当前资源，返回当前资源的 <code>InputStream</code>。每次调用都会返回一个新的 <code>InputStream</code>。调用者需要负责关闭流。</li><li><code>exists()</code> - 判断当前资源是否真的存在。</li><li><code>isOpen()</code> - 判断当前资源是否是一个已打开的 <code>InputStream</code>。如果为 true，则 <code>InputStream</code> 不能被多次读取，必须只读取一次然后关闭以避免资源泄漏。对所有常用资源实现返回 false，<code>InputStreamResource</code> 除外。</li><li><code>getDescription()</code> - 返回当前资源的描述，当处理资源出错时，资源的描述会用于错误信息的输出。一般来说，资源的描述是一个完全限定的文件名称，或者是当前资源的真实 URL。</li></ul><p>常见 Spring 资源接口：</p><table><thead><tr><th>类型</th><th>接口</th></tr></thead><tbody><tr><td>输入流</td><td><code>org.springframework.core.io.InputStreamSource</code></td></tr><tr><td>只读资源</td><td><code>org.springframework.core.io.Resource</code></td></tr><tr><td>可写资源</td><td><code>org.springframework.core.io.WritableResource</code></td></tr><tr><td>编码资源</td><td><code>org.springframework.core.io.support.EncodedResource</code></td></tr><tr><td>上下文资源</td><td><code>org.springframework.core.io.ContextResource</code></td></tr></tbody></table><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20221223155859.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="内置的-resource-实现" tabindex="-1"><a class="header-anchor" href="#内置的-resource-实现" aria-hidden="true">#</a> 内置的 Resource 实现</h2><p>Spring 包括几个内置的 Resource 实现：</p>`,12),u=n("thead",null,[n("tr",null,[n("th",null,"资源来源"),n("th",null,"前缀"),n("th",null,"说明")])],-1),d={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#resources-implementations-urlresource",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"UrlResource",-1),m=n("td",null,[n("code",null,"file:"),s("、"),n("code",null,"https:"),s("、"),n("code",null,"ftp:"),s(" 等")],-1),v=n("td",null,[n("code",null,"UrlResource"),s(" 封装了一个 "),n("code",null,"java.net.URL"),s(" 对象，"),n("strong",null,"用于访问可通过 URL 访问的任何对象"),s("，例如文件、HTTPS 目标、FTP 目标等。所有 URL 都可以通过标准化的字符串形式表示，因此可以使用适当的标准化前缀来指示一种 URL 类型与另一种 URL 类型的区别。 这包括："),n("code",null,"file"),s("：用于访问文件系统路径；"),n("code",null,"https"),s("：用于通过 HTTPS 协议访问资源；"),n("code",null,"ftp"),s("：用于通过 FTP 访问资源等等。")],-1),h={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#resources-implementations-classpathresource",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"ClassPathResource",-1),b=n("td",null,[n("code",null,"classpath:")],-1),R=n("td",null,[n("code",null,"ClassPathResource"),s(),n("strong",null,"从类路径上加载资源"),s("。它使用线程上下文加载器、给定的类加载器或指定的 class 类型中的任意一个来加载资源。")],-1),f={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#resources-implementations-filesystemresource",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"FileSystemResource",-1),y=n("td",null,[n("code",null,"file:")],-1),_=n("td",null,[n("code",null,"FileSystemResource"),s(),n("strong",null,[s("是 "),n("code",null,"java.io.File"),s(" 的资源实现")]),s("。它还支持 "),n("code",null,"java.nio.file.Path"),s(" ，应用 Spring 的标准对字符串路径进行转换。"),n("code",null,"FileSystemResource"),s(" 支持解析为文件和 URL。")],-1),w={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#resources-implementations-pathresource",target:"_blank",rel:"noopener noreferrer"},S=n("code",null,"PathResource",-1),L=n("td",null,"无",-1),q=n("td",null,[n("code",null,"PathResource"),s(" 是 "),n("code",null,"java.nio.file.Path"),s(" 的资源实现。")],-1),C={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#resources-implementations-servletcontextresource",target:"_blank",rel:"noopener noreferrer"},P=n("code",null,"ServletContextResource",-1),A=n("td",null,"无",-1),j=n("td",null,[n("code",null,"ServletContextResource"),s(),n("strong",null,[s("是 "),n("code",null,"ServletContext"),s(" 的资源实现")]),s("。它表示相应 Web 应用程序根目录中的相对路径。")],-1),I={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#resources-implementations-inputstreamresource",target:"_blank",rel:"noopener noreferrer"},U=n("code",null,"InputStreamResource",-1),T=n("td",null,"无",-1),M=n("td",null,[n("code",null,"InputStreamResource"),s(),n("strong",null,[s("是指定 "),n("code",null,"InputStream"),s(" 的资源实现")]),s("。注意：如果该 "),n("code",null,"InputStream"),s(" 已被打开，则不可以多次读取该流。")],-1),E={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#resources-implementations-bytearrayresource",target:"_blank",rel:"noopener noreferrer"},B=n("code",null,"ByteArrayResource",-1),F=n("td",null,"无",-1),O=n("td",null,[n("code",null,"ByteArrayResource"),s(" 是指定的二进制数组的资源实现。它会为给定的字节数组创建一个 "),n("code",null,"ByteArrayInputStream"),s("。")],-1),V=t(`<h2 id="resourceloader-接口" tabindex="-1"><a class="header-anchor" href="#resourceloader-接口" aria-hidden="true">#</a> ResourceLoader 接口</h2><p><code>ResourceLoader</code> 接口用于加载 <code>Resource</code> 对象。其定义如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ResourceLoader</span> <span class="token punctuation">{</span>

    <span class="token class-name">Resource</span> <span class="token function">getResource</span><span class="token punctuation">(</span><span class="token class-name">String</span> location<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">ClassLoader</span> <span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Spring 中主要的 ResourceLoader 实现：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20221223164745.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Spring 中，所有的 <code>ApplicationContext</code> 都实现了 <code>ResourceLoader</code> 接口。因此，所有 <code>ApplicationContext</code> 都可以通过 <code>getResource()</code> 方法获取 <code>Resource</code> 实例。</p><p>【示例】</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 如果没有指定资源前缀，Spring 会尝试返回合适的资源</span>
<span class="token class-name">Resource</span> template <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token string">&quot;some/resource/path/myTemplate.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 如果指定 classpath: 前缀，Spring 会强制使用 ClassPathResource</span>
<span class="token class-name">Resource</span> template <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:some/resource/path/myTemplate.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 如果指定 file:、http 等 URL 前缀，Spring 会强制使用 UrlResource</span>
<span class="token class-name">Resource</span> template <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token string">&quot;file:///some/resource/path/myTemplate.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Resource</span> template <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token string">&quot;http://myhost.com/resource/path/myTemplate.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下表列举了 Spring 根据各种位置路径加载资源的策略：</p><table><thead><tr><th>前缀</th><th>样例</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td><code>classpath:</code></td><td><code>classpath:com/myapp/config.xml</code></td><td style="text-align:left;">从类路径加载</td></tr><tr><td><code>file:</code></td><td><code>file:///data/config.xml</code></td><td style="text-align:left;">以 URL 形式从文件系统加载</td></tr><tr><td><code>http:</code></td><td><code>http://myserver/logo.png</code></td><td style="text-align:left;">以 URL 形式加载</td></tr><tr><td>无</td><td><code>/data/config.xml</code></td><td style="text-align:left;">由底层的 ApplicationContext 实现决定</td></tr></tbody></table><h2 id="resourcepatternresolver-接口" tabindex="-1"><a class="header-anchor" href="#resourcepatternresolver-接口" aria-hidden="true">#</a> ResourcePatternResolver 接口</h2><p><code>ResourcePatternResolver</code> 接口是 <code>ResourceLoader</code> 接口的扩展，它的作用是定义策略，根据位置模式解析 <code>Resource</code> 对象。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ResourcePatternResolver</span> <span class="token keyword">extends</span> <span class="token class-name">ResourceLoader</span> <span class="token punctuation">{</span>

    <span class="token class-name">String</span> <span class="token constant">CLASSPATH_ALL_URL_PREFIX</span> <span class="token operator">=</span> <span class="token string">&quot;classpath*:&quot;</span><span class="token punctuation">;</span>

    <span class="token class-name">Resource</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getResources</span><span class="token punctuation">(</span><span class="token class-name">String</span> locationPattern<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>PathMatchingResourcePatternResolver</code> 是一个独立的实现，可以在 <code>ApplicationContext</code> 之外使用，也可以被 <code>ResourceArrayPropertyEditor</code> 用于填充 <code>Resource[]</code> bean 属性。<code>PathMatchingResourcePatternResolver</code> 能够将指定的资源位置路径解析为一个或多个匹配的 <code>Resource</code> 对象。</p><blockquote><p>注意：任何标准 <code>ApplicationContext</code> 中的默认 <code>ResourceLoader</code> 实际上是 <code>PathMatchingResourcePatternResolver</code> 的一个实例，它实现了 <code>ResourcePatternResolver</code> 接口。</p></blockquote><h2 id="resourceloaderaware-接口" tabindex="-1"><a class="header-anchor" href="#resourceloaderaware-接口" aria-hidden="true">#</a> ResourceLoaderAware 接口</h2><p><code>ResourceLoaderAware</code> 接口是一个特殊的回调接口，用来标记提供 <code>ResourceLoader</code> 引用的对象。<code>ResourceLoaderAware</code> 接口定义如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ResourceLoaderAware</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">setResourceLoader</span><span class="token punctuation">(</span><span class="token class-name">ResourceLoader</span> resourceLoader<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当一个类实现 <code>ResourceLoaderAware</code> 并部署到应用程序上下文中（作为 Spring 管理的 bean）时，它会被应用程序上下文识别为 <code>ResourceLoaderAware</code>，然后，应用程序上下文会调用 <code>setResourceLoader(ResourceLoader)</code>，将自身作为参数提供（请记住，Spring 中的所有应用程序上下文都实现 <code>ResourceLoader</code> 接口）。</p><p>由于 <code>ApplicationContext</code> 是一个 <code>ResourceLoader</code>，该 bean 还可以实现 <code>ApplicationContextAware</code> 接口并直接使用提供的应用程序上下文来加载资源。 但是，一般来说，如果您只需要这些，最好使用专门的 <code>ResourceLoader</code> 接口。 该代码将仅耦合到资源加载接口（可以被视为实用程序接口），而不耦合到整个 Spring <code>ApplicationContext</code> 接口。</p><p>在应用程序中，还可以使用 <code>ResourceLoader</code> 的自动装配作为实现 <code>ResourceLoaderAware</code> 接口的替代方法。传统的构造函数和 <code>byType</code> 自动装配模式能够分别为构造函数参数或 setter 方法参数提供 <code>ResourceLoader</code>。 为了获得更大的灵活性（包括自动装配字段和多参数方法的能力），请考虑使用基于注解的自动装配功能。 在这种情况下，<code>ResourceLoader</code> 会自动连接到需要 <code>ResourceLoader</code> 类型的字段、构造函数参数或方法参数中，只要相关字段、构造函数或方法带有 <code>@Autowired</code> 注解即可。</p><h2 id="资源依赖" tabindex="-1"><a class="header-anchor" href="#资源依赖" aria-hidden="true">#</a> 资源依赖</h2><p>如果 bean 本身要通过某种动态过程来确定和提供资源路径，那么 bean 可以使用 <code>ResourceLoader</code> 或 <code>ResourcePatternResolver</code> 接口来加载资源。 例如，考虑加载某种模板，其中所需的特定资源取决于用户的角色。 如果资源是静态的，完全消除 <code>ResourceLoader</code> 接口（或 <code>ResourcePatternResolver</code> 接口）的使用，让 bean 公开它需要的 <code>Resource</code> 属性，并期望将它们注入其中是有意义的。</p><p>使注入这些属性变得简单的原因是所有应用程序上下文都注册并使用一个特殊的 JavaBeans <code>PropertyEditor</code>，它可以将 <code>String</code> 路径转换为 <code>Resource</code> 对象。 例如，下面的 MyBean 类有一个 <code>Resource</code> 类型的模板属性。</p><p>【示例】</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myBean<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example.MyBean<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>template<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>some/resource/path/myTemplate.txt<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，配置中引用的模板资源路径没有前缀，因为应用程序上下文本身将用作 <code>ResourceLoader</code>，资源本身将根据需要通过 <code>ClassPathResource</code>，<code>FileSystemResource</code> 或 ServletContextResource 加载，具体取决于上下文的确切类型。</p><p>如果需要强制使用特定的资源类型，则可以使用前缀。 以下两个示例显示如何强制使用 <code>ClassPathResource</code> 和 <code>UrlResource</code>（后者用于访问文件系统文件）。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>template<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>classpath:some/resource/path/myTemplate.txt<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>template<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file:///some/resource/path/myTemplate.txt<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过 <code>@Value</code> 注解加载资源文件 <code>myTemplate.txt</code>，示例如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyBean</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Resource</span> template<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">MyBean</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${template.path}&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Resource</span> template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>template <span class="token operator">=</span> template<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Spring 的 <code>PropertyEditor</code> 会根据资源文件的路径字符串，加载 <code>Resource</code> 对象，并将其注入到 MyBean 的构造方法。</p><p>如果想要加载多个资源文件，可以使用 <code>classpath*:</code> 前缀，例如：<code>classpath*:/config/templates/*.txt</code>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyBean</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Resource</span><span class="token punctuation">[</span><span class="token punctuation">]</span> templates<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">MyBean</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${templates.path}&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Resource</span><span class="token punctuation">[</span><span class="token punctuation">]</span> templates<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>templates <span class="token operator">=</span> templates<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用上下文和资源路径" tabindex="-1"><a class="header-anchor" href="#应用上下文和资源路径" aria-hidden="true">#</a> 应用上下文和资源路径</h2><h3 id="构造应用上下文" tabindex="-1"><a class="header-anchor" href="#构造应用上下文" aria-hidden="true">#</a> 构造应用上下文</h3><p>应用上下文构造函数（针对特定的应用上下文类型）通常将字符串或字符串数组作为资源的位置路径，例如构成上下文定义的 XML 文件。</p><p>【示例】</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ApplicationContext</span> ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">&quot;conf/appContext.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ApplicationContext</span> ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileSystemXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">&quot;conf/appContext.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ApplicationContext</span> ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileSystemXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:conf/appContext.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ApplicationContext</span> ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span>
                <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token string">&quot;services.xml&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;daos.xml&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token class-name">MessengerService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用通配符构造应用上下文" tabindex="-1"><a class="header-anchor" href="#使用通配符构造应用上下文" aria-hidden="true">#</a> 使用通配符构造应用上下文</h3><p>ApplicationContext 构造器的中的资源路径可以是单一的路径（即一对一地映射到目标资源）；也可以是通配符形式——可包含 classpath*：也可以是前缀或 ant 风格的正则表达式（使用 spring 的 PathMatcher 来匹配）。</p><p>示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ApplicationContext</span> ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">&quot;classpath*:conf/appContext.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 <code>classpath*</code> 表示类路径下所有匹配文件名称的资源都会被获取(本质上就是调用了 ClassLoader.getResources(…) 方法），接着将获取到的资源组装成最终的应用上下文。</p><p>在位置路径的其余部分，<code>classpath*:</code> 前缀可以与 PathMatcher 结合使用，如：<code>classpath*:META-INF/*-beans.xml</code>。</p><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>Spring 配置资源中有哪些常见类型？</p><ul><li>XML 资源</li><li>Properties 资源</li><li>YAML 资源</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,49),X={href:"https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans",target:"_blank",rel:"noopener noreferrer"},N={href:"https://time.geekbang.org/course/intro/265",target:"_blank",rel:"noopener noreferrer"};function H(z,D){const a=c("ExternalLinkIcon");return p(),l("div",null,[i,n("table",null,[u,n("tbody",null,[n("tr",null,[n("td",null,[n("a",d,[k,e(a)])]),m,v]),n("tr",null,[n("td",null,[n("a",h,[g,e(a)])]),b,R]),n("tr",null,[n("td",null,[n("a",f,[x,e(a)])]),y,_]),n("tr",null,[n("td",null,[n("a",w,[S,e(a)])]),L,q]),n("tr",null,[n("td",null,[n("a",C,[P,e(a)])]),A,j]),n("tr",null,[n("td",null,[n("a",I,[U,e(a)])]),T,M]),n("tr",null,[n("td",null,[n("a",E,[B,e(a)])]),F,O])])]),V,n("ul",null,[n("li",null,[n("a",X,[s("Spring 官方文档之 Core Technologies"),e(a)])]),n("li",null,[n("a",N,[s("《小马哥讲 Spring 核心编程思想》"),e(a)])])])])}const J=o(r,[["render",H],["__file","20.Spring资源管理.html.vue"]]);export{J as default};
