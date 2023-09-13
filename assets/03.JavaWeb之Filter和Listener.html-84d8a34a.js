import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c,a as e,b as n,d as t,e as l}from"./app-ee97b13a.js";const d={},r=l(`<h1 id="javaweb-之-filter-和-listener" tabindex="-1"><a class="header-anchor" href="#javaweb-之-filter-和-listener" aria-hidden="true">#</a> JavaWeb 之 Filter 和 Listener</h1><p>引入了 Servlet 规范后，你不需要关心 Socket 网络通信、不需要关心 HTTP 协议，也不需要关心你的业务类是如何被实例化和调用的，因为这些都被 Servlet 规范标准化了，你只要关心怎么实现的你的业务逻辑。这对于程序员来说是件好事，但也有不方便的一面。所谓规范就是说大家都要遵守，就会千篇一律，但是如果这个规范不能满足你的业务的个性化需求，就有问题了，因此设计一个规范或者一个中间件，要充分考虑到可扩展性。Servlet 规范提供了两种扩展机制：<strong>Filter</strong>和<strong>Listener</strong>。</p><h2 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> Filter</h2><p><strong>Filter 是过滤器，这个接口允许你对请求和响应做一些统一的定制化处理</strong>。</p><p>Filter 提供了过滤链（Filter Chain）的概念，一个过滤链包括多个 Filter。客户端请求 request 在抵达 Servlet 之前会经过过滤链的所有 Filter，服务器响应 response 从 Servlet 抵达客户端浏览器之前也会经过过滤链的所有 FIlter。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/1559054413341.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="过滤器方法" tabindex="-1"><a class="header-anchor" href="#过滤器方法" aria-hidden="true">#</a> 过滤器方法</h3><p>Filter 接口有三个方法：</p><ul><li><code>init</code>：初始化 <code>Filter</code></li><li><code>destroy</code>：销毁 <code>Filter</code></li><li><code>doFilter</code>：将请求传给下个 <code>Filter</code> 或 <code>Servlet</code></li></ul><p><code>init</code> 和 <code>destroy</code> 方法只会被调用一次；<code>doFilter</code> 每次有客户端请求都会被调用一次。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Filter</span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/**
	 * web 程序启动时调用此方法, 用于初始化该 Filter
	 * <span class="token keyword">@param</span> <span class="token parameter">config</span>
	 *            可以从该参数中获取初始化参数以及ServletContext信息等
	 * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">ServletException</span></span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token class-name">FilterConfig</span> config<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 客户请求服务器时会经过
	 *
	 * <span class="token keyword">@param</span> <span class="token parameter">request</span>
	 *            客户请求
	 * <span class="token keyword">@param</span> <span class="token parameter">response</span>
	 *            服务器响应
	 * <span class="token keyword">@param</span> <span class="token parameter">chain</span>
	 *            过滤链, 通过 chain.doFilter(request, response) 将请求传给下个 Filter 或
	 *            Servlet
	 * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">ServletException</span></span>
	 * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">ServletResponse</span> response<span class="token punctuation">,</span>
			<span class="token class-name">FilterChain</span> chain<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * web 程序关闭时调用此方法, 用于销毁一些资源
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="过滤器配置" tabindex="-1"><a class="header-anchor" href="#过滤器配置" aria-hidden="true">#</a> 过滤器配置</h3><p><code>Filter</code> 需要配置在 <code>web.xml</code> 中才能生效。一个 <code>Filter</code> 需要配置 <code>&lt;filter&gt;</code> 与 <code>&lt;filter-mapping&gt;</code> 标签。</p><ul><li><code>&lt;filter&gt;</code> 配置 Filter 名称，实现类以及初始化参数。</li><li><code>&lt;filter-mapping&gt;</code> 配置什么规则下使用该 Filter。</li><li><code>&lt;filter&gt;</code> 的 filterName 与 <code>&lt;filter-mapping&gt;</code> 的 filterName 必须匹配。</li><li><code>&lt;url-pattern&gt;</code> 配置 URL 的规则，可以配置多个，可以使用通配符（<code>*</code>）。</li><li><code>&lt;dispatcher&gt;</code> 配置到达 Servlet 的方式，有 4 种取值：REQUEST、FORWARD、INCLUDE、ERROR。可以同时配置多个 <code>&lt;dispatcher&gt;</code>。如果没有配置任何 <code>&lt;dispatcher&gt;</code>，默认为 REQUEST。 <ul><li>REQUEST - 表示仅当直接请求 Servlet 时才生效。</li><li>FORWARD - 表示仅当某 Servlet 通过 FORWARD 到该 Servlet 时才生效。</li><li>INCLUDE - JSP 中可以通过 <code>&lt;jsp:include&gt;</code> 请求某 Servlet。仅在这种情况表有效。</li><li>ERROR - JSP 中可以通过 <code>&lt;%@ page errorPage=&quot;error.jsp&quot; %&gt;</code> 指定错误处理页面。仅在这种情况表有效。</li></ul></li></ul><h2 id="listener" tabindex="-1"><a class="header-anchor" href="#listener" aria-hidden="true">#</a> Listener</h2><p>监听器（<code>Listener</code>）用于监听 web 应用程序中的<code>ServletContext</code>, <code>HttpSession</code>和 <code>ServletRequest</code>等域对象的创建与销毁事件，以及监听这些域对象中的属性发生修改的事件。</p><p>使用 <code>Listener</code> 不需要关注该类事件时怎样触发或者怎么调用相应的 <code>Listener</code>，只要记住该类事件触发时一定会调用相应的 <code>Listener</code>，遵循 Servlet 规范的服务器会自动完成相应工作。</p><h3 id="监听器的分类" tabindex="-1"><a class="header-anchor" href="#监听器的分类" aria-hidden="true">#</a> 监听器的分类</h3><p>在 Servlet 规范中定义了多种类型的监听器，它们用于监听的事件源分别为<code>ServletContext</code>，<code>HttpSession</code>和<code>ServletRequest</code>这三个域对象<br> Servlet 规范针对这三个对象上的操作，又把多种类型的监听器划分为三种类型：</p><ol><li>监听域对象自身的创建和销毁的事件监听器。</li><li>监听域对象中的属性的增加和删除的事件监听器。</li><li>监听绑定到 HttpSession 域中的某个对象的状态的事件监听器。</li></ol><h3 id="监听对象的创建和销毁" tabindex="-1"><a class="header-anchor" href="#监听对象的创建和销毁" aria-hidden="true">#</a> 监听对象的创建和销毁</h3><h4 id="httpsessionlistener" tabindex="-1"><a class="header-anchor" href="#httpsessionlistener" aria-hidden="true">#</a> HttpSessionListener</h4><p><strong><code>HttpSessionListener</code> 接口用于监听 <code>HttpSession</code> 对象的创建和销毁。</strong></p><ul><li>创建一个 <code>Session</code> 时，激发 <code>sessionCreated (HttpSessionEvent se)</code> 方法</li><li>销毁一个 <code>Session</code> 时，激发 <code>sessionDestroyed (HttpSessionEvent se)</code> 方法。</li></ul><h4 id="servletcontextlistener" tabindex="-1"><a class="header-anchor" href="#servletcontextlistener" aria-hidden="true">#</a> ServletContextListener</h4><p><strong><code>ServletContextListener</code> 接口用于监听 <code>ServletContext</code> 对象的创建和销毁事件。</strong></p><p>实现了 <code>ServletContextListener</code> 接口的类都可以对 <code>ServletContext</code> 对象的创建和销毁进行监听。</p><ul><li>当 <code>ServletContext</code> 对象被创建时，激发 <code>contextInitialized (ServletContextEvent sce)</code> 方法。</li><li>当 <code>ServletContext</code> 对象被销毁时，激发 <code>contextDestroyed(ServletContextEvent sce)</code> 方法。</li></ul><p><code>ServletContext</code> 域对象创建和销毁时机：</p><ul><li>创建：服务器启动针对每一个 Web 应用创建 <code>ServletContext</code></li><li>销毁：服务器关闭前先关闭代表每一个 web 应用的 <code>ServletContext</code></li></ul><h4 id="servletrequestlistener" tabindex="-1"><a class="header-anchor" href="#servletrequestlistener" aria-hidden="true">#</a> ServletRequestListener</h4><p><strong><code>ServletRequestListener</code> 接口用于监听 <code>ServletRequest</code> 对象的创建和销毁。</strong></p><ul><li><code>Request</code> 对象被创建时，监听器的 <code>requestInitialized(ServletRequestEvent sre)</code> 方法将会被调用</li><li><code>Request</code> 对象被销毁时，监听器的 <code>requestDestroyed(ServletRequestEvent sre)</code> 方法将会被调用</li></ul><p><code>ServletRequest</code> 域对象创建和销毁时机：</p><ul><li>创建：用户每一次访问都会创建 request 对象</li><li>销毁：当前访问结束，request 对象就会销毁</li></ul><h3 id="监听对象的属性变化" tabindex="-1"><a class="header-anchor" href="#监听对象的属性变化" aria-hidden="true">#</a> 监听对象的属性变化</h3><p>域对象中属性的变更的事件监听器就是用来监听 <code>ServletContext</code>、<code>HttpSession</code>、<code>HttpServletRequest</code> 这三个对象中的属性变更信息事件的监听器。<br> 这三个监听器接口分别是 <code>ServletContextAttributeListener</code>、<code>HttpSessionAttributeListener</code> <code>和 ServletRequestAttributeListener</code>，这三个接口中都定义了三个方法来处理被监听对象中的属性的增加，删除和替换的事件，同一个事件在这三个接口中对应的方法名称完全相同，只是接受的参数类型不同。</p><h4 id="attributeadded-方法" tabindex="-1"><a class="header-anchor" href="#attributeadded-方法" aria-hidden="true">#</a> attributeAdded 方法</h4><p>当向被监听对象中增加一个属性时，web 容器就调用事件监听器的 <code>attributeAdded</code> 方法进行响应，这个方法接收一个事件类型的参数，监听器可以通过这个参数来获得正在增加属性的域对象和被保存到域中的属性对象<br> 各个域属性监听器中的完整语法定义为：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">attributeAdded</span><span class="token punctuation">(</span><span class="token class-name">ServletContextAttributeEvent</span> scae<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">attributeReplaced</span><span class="token punctuation">(</span><span class="token class-name">HttpSessionBindingEvent</span> hsbe<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">attributeRmoved</span><span class="token punctuation">(</span><span class="token class-name">ServletRequestAttributeEvent</span> srae<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="attributeremoved-方法" tabindex="-1"><a class="header-anchor" href="#attributeremoved-方法" aria-hidden="true">#</a> attributeRemoved 方法</h4><p>当删除被监听对象中的一个属性时，web 容器调用事件监听器的 <code>attributeRemoved</code> 方法进行响应<br> 各个域属性监听器中的完整语法定义为：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">attributeRemoved</span><span class="token punctuation">(</span><span class="token class-name">ServletContextAttributeEvent</span> scae<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">attributeRemoved</span><span class="token punctuation">(</span><span class="token class-name">HttpSessionBindingEvent</span> hsbe<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">attributeRemoved</span><span class="token punctuation">(</span><span class="token class-name">ServletRequestAttributeEvent</span> srae<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="attributereplaced-方法" tabindex="-1"><a class="header-anchor" href="#attributereplaced-方法" aria-hidden="true">#</a> attributeReplaced 方法</h4><p>当监听器的域对象中的某个属性被替换时，web 容器调用事件监听器的 <code>attributeReplaced</code> 方法进行响应<br> 各个域属性监听器中的完整语法定义为：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">attributeReplaced</span><span class="token punctuation">(</span><span class="token class-name">ServletContextAttributeEvent</span> scae<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">attributeReplaced</span><span class="token punctuation">(</span><span class="token class-name">HttpSessionBindingEvent</span> hsbe<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">attributeReplaced</span><span class="token punctuation">(</span><span class="token class-name">ServletRequestAttributeEvent</span> srae<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="监听-session-内的对象" tabindex="-1"><a class="header-anchor" href="#监听-session-内的对象" aria-hidden="true">#</a> 监听 Session 内的对象</h3><p>保存在 Session 域中的对象可以有多种状态：</p><ul><li>绑定（<code>session.setAttribute(&quot;bean&quot;,Object)</code>）到 <code>Session</code> 中；</li><li>从 <code>Session</code> 域中解除绑定（<code>session.removeAttribute(&quot;bean&quot;)</code>）；</li><li>随 <code>Session</code> 对象持久化到一个存储设备中；</li><li>随 <code>Session</code> 对象从一个存储设备中恢复。</li></ul><p>Servlet 规范中定义了两个特殊的监听器接口 <code>HttpSessionBindingListener</code> 和<code>HttpSessionActivationListener</code> 来帮助 JavaBean 对象了解自己在 Session 域中的这些状态。</p><p>实现这两个接口的类不需要 <code>web.xml</code> 文件中进行注册。</p><h4 id="httpsessionbindinglistener" tabindex="-1"><a class="header-anchor" href="#httpsessionbindinglistener" aria-hidden="true">#</a> HttpSessionBindingListener</h4><p><code>HttpSessionBindingListener</code> 接口的 JavaBean 对象可以感知自己被绑定或解绑定到 <code>Session</code> 中的事件。</p><ul><li>当对象被绑定到 <code>HttpSession</code> 对象中时，web 服务器调用该对象的 <code>valueBound(HttpSessionBindingEvent event)</code> 方法。</li><li>当对象从 <code>HttpSession</code> 对象中解除绑定时，web 服务器调用该对象的 <code>valueUnbound(HttpSessionBindingEvent event)</code> 方法。</li></ul><h4 id="httpsessionactivationlistener" tabindex="-1"><a class="header-anchor" href="#httpsessionactivationlistener" aria-hidden="true">#</a> HttpSessionActivationListener</h4><p>实现了 <code>HttpSessionActivationListener</code> 接口的 JavaBean 对象可以感知自己被活化(反序列化)和钝化(序列化)的事件。</p><ul><li>当绑定到 <code>HttpSession</code> 对象中的 JavaBean 对象将要随 <code>HttpSession</code> 对象被序列化之前，web 服务器调用该 JavaBean 对象的 <code>sessionWillPassivate(HttpSessionEvent event)</code> 方法。这样 JavaBean 对象就可以知道自己将要和 <code>HttpSession</code> 对象一起被序列化到硬盘中.</li><li>当绑定到 <code>HttpSession</code> 对象中的 JavaBean 对象将要随 <code>HttpSession</code> 对象被反序列化之后，web 服务器调用该 JavaBean 对象的 <code>sessionDidActive(HttpSessionEvent event)</code> 方法。这样 JavaBean 对象就可以知道自己将要和 <code>HttpSession</code> 对象一起被反序列化回到内存中</li></ul><h2 id="filter-和-listener" tabindex="-1"><a class="header-anchor" href="#filter-和-listener" aria-hidden="true">#</a> Filter 和 Listener</h2><p>Filter 和 Listener 的本质区别：</p><ul><li><strong>Filter 是干预过程的</strong>，它是过程的一部分，是基于过程行为的。</li><li><strong>Listener 是基于状态的</strong>，任何行为改变同一个状态，触发的事件是一致的。</li></ul><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2>`,61),p=e("code",null,"Filter",-1),u={href:"https://github.com/dunwu/javatech/tree/master/codes/javaee-tutorial/javaee-tutorial-filter",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"Listener",-1),h={href:"https://github.com/dunwu/javatech/tree/master/codes/javaee-tutorial/javaee-tutorial-listener",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),n(" 参考资料")],-1),k={href:"https://time.geekbang.org/column/intro/100027701",target:"_blank",rel:"noopener noreferrer"},m={href:"https://book.douban.com/subject/4189495/",target:"_blank",rel:"noopener noreferrer"};function S(g,f){const s=i("ExternalLinkIcon");return o(),c("div",null,[r,e("ul",null,[e("li",null,[p,n(" 的示例源码："),e("a",u,[n("源码"),t(s)])]),e("li",null,[v,n(" 的示例源码："),e("a",h,[n("源码"),t(s)])])]),b,e("ul",null,[e("li",null,[e("a",k,[n("深入拆解 Tomcat & Jetty"),t(s)])]),e("li",null,[e("a",m,[n("Java Web 整合开发王者归来"),t(s)])])])])}const R=a(d,[["render",S],["__file","03.JavaWeb之Filter和Listener.html.vue"]]);export{R as default};
