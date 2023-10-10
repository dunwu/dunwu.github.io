import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as i,a as n,b as s,d as e,e as t}from"./app-207caadd.js";const c={},r=t('<h1 id="javaweb-之-servlet-指南" tabindex="-1"><a class="header-anchor" href="#javaweb-之-servlet-指南" aria-hidden="true">#</a> JavaWeb 之 Servlet 指南</h1><h2 id="javaweb-简介" tabindex="-1"><a class="header-anchor" href="#javaweb-简介" aria-hidden="true">#</a> JavaWeb 简介</h2><h3 id="web-应用程序" tabindex="-1"><a class="header-anchor" href="#web-应用程序" aria-hidden="true">#</a> Web 应用程序</h3><p>Web，在英语中 web 即表示网页的意思，它用于表示 Internet 主机上供外界访问的资源。</p><p>Web 应用程序是一种可以通过 Web 访问的应用程序，程序的最大好处是用户很容易访问应用程序，用户只需要有浏览器即可，不需要再安装其他软件。</p><p>Internet 上供外界访问的 Web 资源分为：</p><ul><li>静态 web 资源：指 web 页面中供人们浏览的数据始终是不变。常见静态资源文件：html、css、各种图片类型（jpg、png）</li><li>动态 web 资源：指 web 页面中供人们浏览的数据是由程序产生的，不同时间点访问 web 页面看到的内容各不相同。常见动态资源技术：JSP/Servlet、ASP、PHP</li></ul><h3 id="常见-web-服务器" tabindex="-1"><a class="header-anchor" href="#常见-web-服务器" aria-hidden="true">#</a> 常见 Web 服务器</h3>',8),d={href:"http://tomcat.apache.org/",target:"_blank",rel:"noopener noreferrer"},u={href:"http://www.eclipse.org/jetty/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://caucho.com/",target:"_blank",rel:"noopener noreferrer"},k={href:"http://httpd.apache.org/",target:"_blank",rel:"noopener noreferrer"},h={href:"http://nginx.org/en/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.ibm.com/cloud/websphere-application-platform",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.oracle.com/middleware/technologies/weblogic.html",target:"_blank",rel:"noopener noreferrer"},g=n("li",null,"JBoss",-1),S=t(`<h2 id="servlet-简介" tabindex="-1"><a class="header-anchor" href="#servlet-简介" aria-hidden="true">#</a> Servlet 简介</h2><h3 id="什么是-servlet" tabindex="-1"><a class="header-anchor" href="#什么是-servlet" aria-hidden="true">#</a> 什么是 Servlet</h3><p>Servlet（Server Applet），即小服务程序或服务连接器。Servlet 是 Java 编写的服务器端程序，具有独立于平台和协议的特性，主要功能在于交互式地浏览和生成数据，生成动态 Web 内容。</p><ul><li>狭义的 Servlet 是指 Java 实现的一个接口。</li><li>广义的 Servlet 是指任何实现了这个 Servlet 接口的类。</li></ul><p>Servlet 运行于支持 Java 的应用服务器中。从原理上讲，Servlet 可以响应任何类型的请求，但绝大多数情况下 Servlet 只用来扩展基于 HTTP 协议的 Web 服务器。</p><h3 id="servlet-和-cgi-的区别" tabindex="-1"><a class="header-anchor" href="#servlet-和-cgi-的区别" aria-hidden="true">#</a> Servlet 和 CGI 的区别</h3><p>Servlet 技术出现之前，Web 主要使用 CGI 技术。它们的区别如下：</p><ul><li>Servlet 是基于 Java 编写的，处于服务器进程中，他能够通过多线程方式运行 service() 方法，一个实例可以服务于多个请求，而且一般不会销毁；</li><li>CGI(Common Gateway Interface)，即通用网关接口。它会为每个请求产生新的进程，服务完成后销毁，所以效率上低于 Servlet。</li></ul><h3 id="servlet-版本以及主要特性" tabindex="-1"><a class="header-anchor" href="#servlet-版本以及主要特性" aria-hidden="true">#</a> Servlet 版本以及主要特性</h3><table><thead><tr><th>版本</th><th>日期</th><th>JAVA EE/JDK 版本</th><th>特性</th></tr></thead><tbody><tr><td>Servlet 4.0</td><td>2017 年 10 月</td><td>JavaEE 8</td><td>HTTP2</td></tr><tr><td>Servlet 3.1</td><td>2013 年 5 月</td><td>JavaEE 7</td><td>非阻塞 I/O，HTTP 协议升级机制</td></tr><tr><td>Servlet 3.0</td><td>2009 年 12 月</td><td>JavaEE 6, JavaSE 6</td><td>可插拔性，易于开发，异步 Servlet，安全性，文件上传</td></tr><tr><td>Servlet 2.5</td><td>2005 年 10 月</td><td>JavaEE 5, JavaSE 5</td><td>依赖 JavaSE 5，支持注解</td></tr><tr><td>Servlet 2.4</td><td>2003 年 11 月</td><td>J2EE 1.4, J2SE 1.3</td><td>web.xml 使用 XML Schema</td></tr><tr><td>Servlet 2.3</td><td>2001 年 8 月</td><td>J2EE 1.3, J2SE 1.2</td><td>Filter</td></tr><tr><td>Servlet 2.2</td><td>1999 年 8 月</td><td>J2EE 1.2, J2SE 1.2</td><td>成为 J2EE 标准</td></tr><tr><td>Servlet 2.1</td><td>1998 年 11 月</td><td>未指定</td><td>First official specification, added RequestDispatcher, ServletContext</td></tr><tr><td>Servlet 2.0</td><td></td><td>JDK 1.1</td><td>Part of Java Servlet Development Kit 2.0</td></tr><tr><td>Servlet 1.0</td><td>1997 年 6 月</td><td></td><td></td></tr></tbody></table><h3 id="servlet-任务" tabindex="-1"><a class="header-anchor" href="#servlet-任务" aria-hidden="true">#</a> Servlet 任务</h3><p>Servlet 执行以下主要任务：</p><ul><li>读取客户端（浏览器）发送的显式的数据。这包括网页上的 HTML 表单，或者也可以是来自 applet 或自定义的 HTTP 客户端程序的表单。</li><li>读取客户端（浏览器）发送的隐式的 HTTP 请求数据。这包括 cookies、媒体类型和浏览器能理解的压缩格式等等。</li><li>处理数据并生成结果。这个过程可能需要访问数据库，执行 RMI 或 CORBA 调用，调用 Web 服务，或者直接计算得出对应的响应。</li><li>发送显式的数据（即文档）到客户端（浏览器）。该文档的格式可以是多种多样的，包括文本文件（HTML 或 XML）、二进制文件（GIF 图像）、Excel 等。</li><li>发送隐式的 HTTP 响应到客户端（浏览器）。这包括告诉浏览器或其他客户端被返回的文档类型（例如 HTML），设置 cookies 和缓存参数，以及其他类似的任务。</li></ul><h3 id="servlet-生命周期" tabindex="-1"><a class="header-anchor" href="#servlet-生命周期" aria-hidden="true">#</a> Servlet 生命周期</h3><figure><img src="http://www.runoob.com/wp-content/uploads/2014/07/Servlet-LifeCycle.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Servlet 生命周期如下：</p><ol><li><strong>加载</strong> - 第一个到达服务器的 HTTP 请求被委派到 Servlet 容器。容器通过类加载器使用 Servlet 类对应的文件加载 servlet；</li><li><strong>初始化</strong> - Servlet 通过调用 <strong>init ()</strong> 方法进行初始化。</li><li><strong>服务</strong> - Servlet 调用 <strong>service()</strong> 方法来处理客户端的请求。</li><li><strong>销毁</strong> - Servlet 通过调用 <strong>destroy()</strong> 方法终止（结束）。</li><li><strong>卸载</strong> - Servlet 是由 JVM 的垃圾回收器进行垃圾回收的。</li></ol><h2 id="servlet-api" tabindex="-1"><a class="header-anchor" href="#servlet-api" aria-hidden="true">#</a> Servlet API</h2><h3 id="servlet-包" tabindex="-1"><a class="header-anchor" href="#servlet-包" aria-hidden="true">#</a> Servlet 包</h3><p>Java Servlet 是运行在带有支持 Java Servlet 规范的解释器的 web 服务器上的 Java 类。</p><p>Servlet 可以使用 <strong>javax.servlet</strong> 和 <strong>javax.servlet.http</strong> 包创建，它是 Java 企业版的标准组成部分，Java 企业版是支持大型开发项目的 Java 类库的扩展版本。</p><p>Java Servlet 就像任何其他的 Java 类一样已经被创建和编译。在您安装 Servlet 包并把它们添加到您的计算机上的 Classpath 类路径中之后，您就可以通过 JDK 的 Java 编译器或任何其他编译器来编译 Servlet。</p><h3 id="servlet-接口" tabindex="-1"><a class="header-anchor" href="#servlet-接口" aria-hidden="true">#</a> Servlet 接口</h3><p>Servlet 接口定义了下面五个方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Servlet</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token class-name">ServletConfig</span> var1<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">;</span>

    <span class="token class-name">ServletConfig</span> <span class="token function">getServletConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> var1<span class="token punctuation">,</span> <span class="token class-name">ServletResponse</span> var2<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span> <span class="token function">getServletInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="init-方法" tabindex="-1"><a class="header-anchor" href="#init-方法" aria-hidden="true">#</a> init() 方法</h4><p>init 方法被设计成只调用一次。它在第一次创建 Servlet 时被调用，在后续每次用户请求时不再调用。因此，它是用于一次性初始化，就像 Applet 的 init 方法一样。</p><p>Servlet 创建于用户第一次调用对应于该 Servlet 的 URL 时，但是您也可以指定 Servlet 在服务器第一次启动时被加载。</p><p>当用户调用一个 Servlet 时，就会创建一个 Servlet 实例，每一个用户请求都会产生一个新的线程，适当的时候移交给 doGet 或 doPost 方法。init() 方法简单地创建或加载一些数据，这些数据将被用于 Servlet 的整个生命周期。</p><p>init 方法的定义如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span>
  <span class="token comment">// 初始化代码...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="service-方法" tabindex="-1"><a class="header-anchor" href="#service-方法" aria-hidden="true">#</a> service() 方法</h4><p><strong><code>service()</code> 方法是执行实际任务的核心方法</strong>。Servlet 容器（即 Web 服务器）调用 <code>service()</code> 方法来处理来自客户端（浏览器）的请求，并把格式化的响应写回给客户端。</p><p><code>service()</code> 方法有两个参数：<code>ServletRequest</code> 和 <code>ServletResponse</code>。<code>ServletRequest</code> 用来封装请求信息，<code>ServletResponse</code> 用来封装响应信息，因此<strong>本质上这两个类是对通信协议的封装。</strong></p><p>每次服务器接收到一个 Servlet 请求时，服务器会产生一个新的线程并调用服务。<code>service()</code> 方法检查 HTTP 请求类型（GET、POST、PUT、DELETE 等），并在适当的时候调用 <code>doGet</code>、<code>doPost</code>、<code>doPut</code>，<code>doDelete</code> 等方法。</p><p>下面是该方法的特征：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> request<span class="token punctuation">,</span>
                    <span class="token class-name">ServletResponse</span> response<span class="token punctuation">)</span>
      <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>service() 方法由容器调用，service 方法在适当的时候调用 doGet、doPost、doPut、doDelete 等方法。所以，您不用对 service() 方法做任何动作，您只需要根据来自客户端的请求类型来重写 doGet() 或 doPost() 即可。</p><p>doGet() 和 doPost() 方法是每次服务请求中最常用的方法。下面是这两种方法的特征。</p><h4 id="doget-方法" tabindex="-1"><a class="header-anchor" href="#doget-方法" aria-hidden="true">#</a> doGet() 方法</h4><p>GET 请求来自于一个 URL 的正常请求，或者来自于一个未指定 METHOD 的 HTML 表单，它由 doGet() 方法处理。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span>
                  <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span>
    <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">// Servlet 代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="dopost-方法" tabindex="-1"><a class="header-anchor" href="#dopost-方法" aria-hidden="true">#</a> doPost() 方法</h4><p>POST 请求来自于一个特别指定了 METHOD 为 POST 的 HTML 表单，它由 doPost() 方法处理。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span>
                   <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span>
    <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">// Servlet 代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="destroy-方法" tabindex="-1"><a class="header-anchor" href="#destroy-方法" aria-hidden="true">#</a> destroy() 方法</h4><p>destroy() 方法只会被调用一次，在 Servlet 生命周期结束时被调用。destroy() 方法可以让您的 Servlet 关闭数据库连接、停止后台线程、把 Cookie 列表或点击计数器写入到磁盘，并执行其他类似的清理活动。</p><p>在调用 destroy() 方法之后，servlet 对象被标记为垃圾回收。destroy 方法定义如下所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 终止化代码...</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="servlet-和-http-状态码" tabindex="-1"><a class="header-anchor" href="#servlet-和-http-状态码" aria-hidden="true">#</a> Servlet 和 HTTP 状态码</h2><p>title: JavaEE Servlet HTTP 状态码<br> date: 2017-11-08<br> categories:</p><ul><li>javaee<br> tags:</li><li>javaee</li><li>servlet</li><li>http</li></ul><h3 id="http-状态码" tabindex="-1"><a class="header-anchor" href="#http-状态码" aria-hidden="true">#</a> HTTP 状态码</h3><p>HTTP 请求和 HTTP 响应消息的格式是类似的，结构如下：</p><ul><li>初始状态行 + 回车换行符（回车+换行）</li><li>零个或多个标题行+回车换行符</li><li>一个空白行，即回车换行符</li><li>一个可选的消息主体，比如文件、查询数据或查询输出</li></ul><p>例如，服务器的响应头如下所示：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">OK</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">text/html</span></span>
<span class="token header"><span class="token header-name keyword">Header2</span><span class="token punctuation">:</span> <span class="token header-value">...</span></span>
<span class="token text-html">...
HeaderN: ...
  (Blank Line)
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">...</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>状态行包括 HTTP 版本（在本例中为 HTTP/1.1）、一个状态码（在本例中为 200）和一个对应于状态码的短消息（在本例中为 OK）。</p><p>以下是可能从 Web 服务器返回的 HTTP 状态码和相关的信息列表：</p><ul><li><code>1**</code>：信息性状态码</li><li><code>2**</code>：成功状态码 <ul><li>200：请求正常成功</li><li>204：指示请求成功但没有返回新信息</li><li>206：指示服务器已完成对资源的部分 GET 请求</li></ul></li><li><code>3**</code>：重定向状态码 <ul><li>301：永久性重定向</li><li>302：临时性重定向</li><li>304：服务器端允许请求访问资源，但未满足条件</li></ul></li><li><code>4**</code>：客户端错误状态码 <ul><li>400：请求报文中存在语法错误</li><li>401：发送的请求需要有通过 HTTP 认证的认证信息</li><li>403：对请求资源的访问被服务器拒绝了</li><li>404：服务器上无法找到请求的资源</li></ul></li><li><code>5**</code>：服务器错误状态码 <ul><li>500：服务器端在执行请求时发生了错误</li><li>503：服务器暂时处于超负载或正在进行停机维护，现在无法处理请求</li></ul></li></ul><h3 id="设置-http-状态码的方法" tabindex="-1"><a class="header-anchor" href="#设置-http-状态码的方法" aria-hidden="true">#</a> 设置 HTTP 状态码的方法</h3><p>下面的方法可用于在 Servlet 程序中设置 HTTP 状态码。这些方法通过 <code>HttpServletResponse</code> 对象可用。</p><table><thead><tr><th>序号</th><th>方法 &amp; 描述</th></tr></thead><tbody><tr><td>1</td><td>**public void setStatus ( int statusCode )**该方法设置一个任意的状态码。setStatus 方法接受一个 int（状态码）作为参数。如果您的反应包含了一个特殊的状态码和文档，请确保在使用 <em>PrintWriter</em> 实际返回任何内容之前调用 setStatus。</td></tr><tr><td>2</td><td>**public void sendRedirect(String url)**该方法生成一个 302 响应，连同一个带有新文档 URL 的 <em>Location</em> 头。</td></tr><tr><td>3</td><td>**public void sendError(int code, String message)**该方法发送一个状态码（通常为 404），连同一个在 HTML 文档内部自动格式化并发送到客户端的短消息。</td></tr></tbody></table><h3 id="http-状态码实例" tabindex="-1"><a class="header-anchor" href="#http-状态码实例" aria-hidden="true">#</a> HTTP 状态码实例</h3><p>下面的例子把 407 错误代码发送到客户端浏览器，浏览器会显示 &quot;Need authentication!!!&quot; 消息。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 导入必需的 java 库</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token comment">// 扩展 HttpServlet 类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> showError <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>

  <span class="token comment">// 处理 GET 方法请求的方法</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span>
                    <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span>
            <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span>
  <span class="token punctuation">{</span>
      <span class="token comment">// 设置错误代码和原因</span>
      response<span class="token punctuation">.</span><span class="token function">sendError</span><span class="token punctuation">(</span><span class="token number">407</span><span class="token punctuation">,</span> <span class="token string">&quot;Need authentication!!!&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 处理 POST 方法请求的方法</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span>
                     <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span>
      <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
     <span class="token function">doGet</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，调用上面的 Servlet 将显示以下结果：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>HTTP Status 407 - Need authentication!!!
type Status report
message Need authentication!!!
description The client must first authenticate itself with the proxy (Need authentication!!!).
Apache Tomcat/5.5.29
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,69),f={href:"https://time.geekbang.org/column/intro/100027701",target:"_blank",rel:"noopener noreferrer"},w={href:"https://book.douban.com/subject/4189495/",target:"_blank",rel:"noopener noreferrer"};function T(x,y){const a=p("ExternalLinkIcon");return o(),i("div",null,[r,n("ul",null,[n("li",null,[n("a",d,[s("Tomcat"),e(a)])]),n("li",null,[n("a",u,[s("Jetty"),e(a)])]),n("li",null,[n("a",v,[s("Resin"),e(a)])]),n("li",null,[n("a",k,[s("Apache"),e(a)])]),n("li",null,[n("a",h,[s("Nginx"),e(a)])]),n("li",null,[n("a",m,[s("WebSphere"),e(a)])]),n("li",null,[n("a",b,[s("WebLogic"),e(a)])]),g]),S,n("ul",null,[n("li",null,[n("a",f,[s("深入拆解 Tomcat & Jetty"),e(a)])]),n("li",null,[n("a",w,[s("Java Web 整合开发王者归来"),e(a)])])])])}const P=l(c,[["render",T],["__file","01.JavaWeb之Servlet指南.html.vue"]]);export{P as default};
