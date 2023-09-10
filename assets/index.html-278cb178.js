import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as s,c as n,a as e,b as l,d as i,e as o}from"./app-afc5da4f.js";const d={},g=o(`<h1 id="javaweb-面经" tabindex="-1"><a class="header-anchor" href="#javaweb-面经" aria-hidden="true">#</a> JavaWeb 面经</h1><h2 id="servlet" tabindex="-1"><a class="header-anchor" href="#servlet" aria-hidden="true">#</a> Servlet</h2><h3 id="什么是-servlet" tabindex="-1"><a class="header-anchor" href="#什么是-servlet" aria-hidden="true">#</a> 什么是 Servlet</h3><p>Servlet（Server Applet），即小服务程序或服务连接器。Servlet 是 Java 编写的服务器端程序，具有独立于平台和协议的特性，主要功能在于交互式地浏览和生成数据，生成动态 Web 内容。</p><ul><li>狭义的 Servlet 是指 Java 实现的一个接口。</li><li>广义的 Servlet 是指任何实现了这个 Servlet 接口的类。</li></ul><p>Servlet 运行于支持 Java 的应用服务器中。从原理上讲，Servlet 可以响应任何类型的请求，但绝大多数情况下 Servlet 只用来扩展基于 HTTP 协议的 Web 服务器。</p><h3 id="servlet-和-cgi-的区别" tabindex="-1"><a class="header-anchor" href="#servlet-和-cgi-的区别" aria-hidden="true">#</a> Servlet 和 CGI 的区别</h3><p>Servlet 技术出现之前，Web 主要使用 CGI 技术。它们的区别如下：</p><ul><li>Servlet 是基于 Java 编写的，处于服务器进程中，他能够通过多线程方式运行 service() 方法，一个实例可以服务于多个请求，而且一般不会销毁；</li><li>CGI(Common Gateway Interface)，即通用网关接口。它会为每个请求产生新的进程，服务完成后销毁，所以效率上低于 Servlet。</li></ul><h3 id="servlet-版本以及主要特性" tabindex="-1"><a class="header-anchor" href="#servlet-版本以及主要特性" aria-hidden="true">#</a> Servlet 版本以及主要特性</h3><table><thead><tr><th>版本</th><th>日期</th><th>JAVA EE/JDK 版本</th><th>特性</th></tr></thead><tbody><tr><td>Servlet 4.0</td><td>2017 年 10 月</td><td>JavaEE 8</td><td>HTTP2</td></tr><tr><td>Servlet 3.1</td><td>2013 年 5 月</td><td>JavaEE 7</td><td>非阻塞 I/O，HTTP 协议升级机制</td></tr><tr><td>Servlet 3.0</td><td>2009 年 12 月</td><td>JavaEE 6, JavaSE 6</td><td>可插拔性，易于开发，异步 Servlet，安全性，文件上传</td></tr><tr><td>Servlet 2.5</td><td>2005 年 10 月</td><td>JavaEE 5, JavaSE 5</td><td>依赖 JavaSE 5，支持注解</td></tr><tr><td>Servlet 2.4</td><td>2003 年 11 月</td><td>J2EE 1.4, J2SE 1.3</td><td>web.xml 使用 XML Schema</td></tr><tr><td>Servlet 2.3</td><td>2001 年 8 月</td><td>J2EE 1.3, J2SE 1.2</td><td>Filter</td></tr><tr><td>Servlet 2.2</td><td>1999 年 8 月</td><td>J2EE 1.2, J2SE 1.2</td><td>成为 J2EE 标准</td></tr><tr><td>Servlet 2.1</td><td>1998 年 11 月</td><td>未指定</td><td>First official specification, added RequestDispatcher, ServletContext</td></tr><tr><td>Servlet 2.0</td><td></td><td>JDK 1.1</td><td>Part of Java Servlet Development Kit 2.0</td></tr><tr><td>Servlet 1.0</td><td>1997 年 6 月</td><td></td><td></td></tr></tbody></table><h3 id="servlet-和-jsp-的区别" tabindex="-1"><a class="header-anchor" href="#servlet-和-jsp-的区别" aria-hidden="true">#</a> Servlet 和 JSP 的区别</h3><ol><li>Servlet 是一个运行在服务器上的 Java 类,依靠服务器支持向浏览器传输数据。</li><li><strong>JSP 本质上就是 Servlet</strong>，每次运行的时候 JSP 都会被编译成 .java 文件，然后再被编译成 .class 文件。</li><li>有了 JSP，Servlet 不再负责动态生成页面，转而去负责控制程序逻辑的作用，控制 JSP 与 JavaBean 之间的流转。</li><li>JSP 侧重于视图,而 Servlet 侧重于控制逻辑,在 MVC 架构模式中,JSP 适合充当视图 View,Servlet 适合充当控制器 Controller。</li></ol><h3 id="简述-servlet-生命周期" tabindex="-1"><a class="header-anchor" href="#简述-servlet-生命周期" aria-hidden="true">#</a> 简述 Servlet 生命周期</h3><figure><img src="http://www.runoob.com/wp-content/uploads/2014/07/Servlet-LifeCycle.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Servlet 生命周期如下：</p><ol><li><strong>加载</strong> - 第一个到达服务器的 HTTP 请求被委派到 Servlet 容器。容器通过类加载器使用 Servlet 类对应的文件加载 servlet；</li><li><strong>初始化</strong> - Servlet 通过调用 <strong>init ()</strong> 方法进行初始化。</li><li><strong>服务</strong> - Servlet 调用 <strong>service()</strong> 方法来处理客户端的请求。</li><li><strong>销毁</strong> - Servlet 通过调用 <strong>destroy()</strong> 方法终止（结束）。</li><li><strong>卸载</strong> - Servlet 是由 JVM 的垃圾回收器进行垃圾回收的。</li></ol><h3 id="如何现实-servlet-的单线程模式" tabindex="-1"><a class="header-anchor" href="#如何现实-servlet-的单线程模式" aria-hidden="true">#</a> 如何现实 servlet 的单线程模式</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">%</span>@ page isThreadSafe<span class="token operator">=</span><span class="token string">&quot;false&quot;</span> <span class="token operator">%</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="servlet-中如何获取用户提交的查询参数或者表单数据" tabindex="-1"><a class="header-anchor" href="#servlet-中如何获取用户提交的查询参数或者表单数据" aria-hidden="true">#</a> Servlet 中如何获取用户提交的查询参数或者表单数据</h3><ul><li>HttpServletRequest 的 getParameter() 方法。</li><li>HttpServletRequest 的 getParameterValues() 方法。</li><li>HttpServletRequest 的 getParameterMap() 方法。</li></ul><h3 id="request-的主要方法" tabindex="-1"><a class="header-anchor" href="#request-的主要方法" aria-hidden="true">#</a> request 的主要方法</h3><ul><li>setAttribute(String name,Object)：设置名字为 name 的 request 的参数值</li><li>getAttribute(String name)：返回由 name 指定的属性值</li><li>getAttributeNames()：返回 request 对象所有属性的名字集合，结果是一个枚举的实例</li><li>getCookies()：返回客户端的所有 Cookie 对象，结果是一个 Cookie 数组</li><li>getCharacterEncoding()：返回请求中的字符编码方式</li><li>getContentLength()：返回请求的 Body 的长度</li><li>getHeader(String name)：获得 HTTP 协议定义的文件头信息</li><li>getHeaders(String name)：返回指定名字的 request Header 的所有值，结果是一个枚举的实例</li><li>getHeaderNames()：返回所以 request Header 的名字，结果是一个枚举的实例</li><li>getInputStream()：返回请求的输入流，用于获得请求中的数据 getMethod()：获得客户端向服务器端传送数据的方法</li><li>getParameter(String name)：获得客户端传送给服务器端的有 name 指定的参数值</li><li>getParameterNames()：获得客户端传送给服务器端的所有参数的名字，结果是一个枚举的实例</li><li>getParameterValues(String name)：获得有 name 指定的参数的所有值</li><li>getProtocol()：获取客户端向服务器端传送数据所依据的协议名称</li><li>getQueryString()：获得查询字符串</li><li>getRequestURI()：获取发出请求字符串的客户端地址</li><li>getRemoteAddr()：获取客户端的 IP 地址</li><li>getRemoteHost()：获取客户端的名字</li><li>getSession([Boolean create])：返回和请求相关</li><li>Session getServerName()：获取服务器的名字</li><li>getServletPath()：获取客户端所请求的脚本文件的路径</li><li>getServerPort()：获取服务器的端口号</li><li>removeAttribute(String name)：删除请求中的一个属性</li></ul><h2 id="jsp" tabindex="-1"><a class="header-anchor" href="#jsp" aria-hidden="true">#</a> JSP</h2><h3 id="jsp-的内置对象" tabindex="-1"><a class="header-anchor" href="#jsp-的内置对象" aria-hidden="true">#</a> JSP 的内置对象</h3><ol><li><strong>request</strong>：包含<strong>客户端请求的信息</strong>；</li><li><strong>response</strong>：包含<strong>服务器传回客户端的响应信息</strong>；</li><li><strong>session</strong>：主要用来<strong>区分每个用户信息和会话状态</strong>；</li><li><strong>pageContext</strong>：管理<strong>页面属性</strong>；</li><li><strong>application</strong>：服务器启动时创建，服务器关闭时停止，<strong>保存所有应用系统中的共有数据</strong>，一个共享的内置对象（即一个容器中的多个用户共享一个 application 对象）；</li><li><strong>out</strong>：向客户端<strong>输出数据</strong>；</li><li><strong>config</strong>：代码片段配置对象，用于<strong>初始化 Servlet 的配置参数</strong>；</li><li><strong>page</strong>：指<strong>网页本身</strong>；</li><li><strong>exception</strong>：处理 JSP 文件执行时发生的错误和异常，只要在<strong>错误页面</strong>里才能使用。</li></ol><h3 id="jsp-的作用域" tabindex="-1"><a class="header-anchor" href="#jsp-的作用域" aria-hidden="true">#</a> JSP 的作用域</h3><ol><li><strong>page</strong>：一个页面；</li><li><strong>request</strong>：一次请求；</li><li><strong>session</strong>：一次会话；</li><li><strong>application</strong>：服务器从启动到停止。</li></ol><h3 id="jsp-中-7-个动作指令和作用" tabindex="-1"><a class="header-anchor" href="#jsp-中-7-个动作指令和作用" aria-hidden="true">#</a> JSP 中 7 个动作指令和作用</h3><ol><li><strong>jsp:forward</strong> - 执行页面转向，把请求转发到下一个页面；</li><li><strong>jsp:param</strong> - 用于传递参数，必须与其他支持参数的标签一起使用；</li><li><strong>jsp:include</strong> - 用于<strong>动态引入一个 JSP 页面</strong>；</li><li><strong>jsp:plugin</strong> - 用于<strong>下载 JavaBean 或 Applet 到客户端执行</strong>；</li><li><strong>jsp:useBean</strong> - 寻求或者实例化一个 JavaBean；</li><li><strong>jsp:setProperty</strong> - 设置 JavaBean 的属性值；</li><li><strong>jsp:getProperty</strong> - 获取 JavaBean 的属性值。</li></ol><h3 id="jsp-中动态-include-和静态-include-有什么区别" tabindex="-1"><a class="header-anchor" href="#jsp-中动态-include-和静态-include-有什么区别" aria-hidden="true">#</a> JSP 中动态 INCLUDE 和静态 INCLUDE 有什么区别</h3><ul><li><strong>静态 INCLUDE</strong>：用 include 伪码实现，<strong>不会检查所含文件的变化</strong>，适用于包含<strong>静态页面&lt;%@ include file=&quot;页面名称.html&quot; %&gt;</strong>。<strong>先合并再编译</strong>。</li><li><strong>动态 INCLUDE</strong>：用 jsp:include 动作实现 <strong>&lt;jsp:include page=&quot;页面名称 .jsp&quot; flush=&quot;true&quot;&gt;</strong> 它总是<strong>会检查文件中的变化</strong>，适用于包含<strong>动态页面</strong>，并且可以<strong>带参数</strong>。<strong>先编译再合并</strong>。</li></ul><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><h3 id="请求转发-forward-和重定向-redirect-的区别" tabindex="-1"><a class="header-anchor" href="#请求转发-forward-和重定向-redirect-的区别" aria-hidden="true">#</a> 请求转发(forward)和重定向(redirect)的区别</h3><ul><li>效率上 <ul><li>转发（forward） &gt; 重定向（redirect）</li></ul></li><li>显示上 <ul><li>重定向（redirect）：显示新的 URL</li><li>转发（forward）：地址栏不变</li></ul></li><li>数据上 <ul><li>转发（forward）：可以共享 request 里面的数据</li><li>重定向（redirect）：不能</li></ul></li><li>请求次数 <ul><li>重定向（redirect）是两次</li><li>转发（forward）是一次</li></ul></li></ul><h3 id="get-请求和-post-请求的区别" tabindex="-1"><a class="header-anchor" href="#get-请求和-post-请求的区别" aria-hidden="true">#</a> get 请求和 post 请求的区别</h3><figure><img src="https://upload-images.jianshu.io/upload_images/7779232-5be5ae990207f9d2.png?imageMogr2/auto-orient/strip|imageView2/2/w/814/format/webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>GET： <ul><li>从服务器上获取数据，一般不能使用在写操作接口</li><li>由 URL 所限制，GET 方式传输的数据大小有所限制，传送的数据量不超过 2KB</li><li>请求的数据会附加在 URL 之后，以？分隔 URL 和传输数据，多个参数用&amp;连接</li><li>安全性差</li></ul></li><li>POST: <ul><li>向服务器提交数据,一般处理写业务</li><li>POST 方式传送的数据量比较大，一般被默认为没有限制</li><li>安全性高</li><li>请的求的数据内容放置在 HTML HEADER 中</li></ul></li></ul><h3 id="用户在浏览器中输入-url-之后-发什么了什么-写出请求和响应的流程" tabindex="-1"><a class="header-anchor" href="#用户在浏览器中输入-url-之后-发什么了什么-写出请求和响应的流程" aria-hidden="true">#</a> 用户在浏览器中输入 URL 之后，发什么了什么？写出请求和响应的流程</h3><ol><li>域名解析</li><li>TCP 三次握手</li><li>浏览器向服务器发送 http 请求</li><li>浏览器发送请求头信息</li><li>服务器处理请求</li><li>服务器做出应答</li><li>服务器发送应答头信息</li><li>服务器发送数据</li><li>TCP 连接关闭</li></ol><h3 id="什么是-web-service" tabindex="-1"><a class="header-anchor" href="#什么是-web-service" aria-hidden="true">#</a> 什么是 Web Service?</h3><ol><li>WebService 就是一个应用程序，它向外界暴露出一个能够通过 Web 进行调用的 API。</li><li>它是基于 HTTP 协议传输数据，这使得运行在不同机上的不同应用程序，无须借助附加的、专门的第三方 软件或硬件，就可以相互交换数据或集成。</li></ol><h3 id="会话跟踪技术有哪些" tabindex="-1"><a class="header-anchor" href="#会话跟踪技术有哪些" aria-hidden="true">#</a> 会话跟踪技术有哪些?</h3><p>由于 HTTP 协议本身是无状态的，服务器为了区分不同的用户，就需要对用户会话进行跟踪，简单的说就是为用户进行登记，为用户分配唯一的 ID，下一次用户在请求中包含此 ID，服务器根据此判断到底是哪一个用户。</p><ul><li>URL 重写：在 URL 中添加会话信息作为请求的参数，或者将唯一的会话 ID 添加到 URL 结尾，以表示一个会话。设置表单隐藏域：将和会话跟踪相关的字段添加到隐藏域中，这些信息不会在浏览器显示，但是提交表单时会提交给服务器。</li><li>cookie：cookie 有两种： <ul><li>一种是基于窗口的，浏览器关闭后，cookie 就没有了；</li><li>另一种是将信息存储在一个临时文件中，并设置其有效路径和最大存活时间。当用户通过浏览器和服务器建立一次会话后，会话 ID 就会随相应信息储存在基于窗口的 cookie 中，那就意味着只要浏览器没有关闭，会话没有超时，下一次请求时这个会话 ID 又会提交给服务器，让服务器识别用户身份。</li><li>在使用 cookie 时要注意几点： <ul><li>首先不要在 cookie 中存放敏 感信息；</li><li>其次 cookie 存储的数据量有限（4k），不能将过多的内容存储 cookie 中；</li><li>再者浏览器通常只允许一个站点最多存放 20 个 cookie。</li><li>当然，和用户会话相关的其他信息（除了会话 ID）也可以存在 cookie 方便进行会话 跟踪;</li></ul></li></ul></li><li>HttpSession：在所有会话跟踪技术中，HttpSession 对象是最强大也是功能最多的。当一个用户第一次访问某个网站时会自动创建 HttpSession，每个用户可以访问他自己的 HttpSession。可以通过 HttpServletRequest 对象的 getSession 方法获得 HttpSession，通过 HttpSession 的 setAttribute 方法可以将一个值放在 HttpSession 中，通过调用 HttpSession 对象的 getAttribute 方法，同时传入属性名就可以获取保存在 HttpSession 中的对象。 <ul><li>与上面三种方式不同的是，HttpSession 放在服务器的内存中，因此不要将过大的对象放在里面，即使目前的 Servlet 容器可以在内存将满时将 HttpSession 中的对象移到其他存储设备中，但是这样势必影响性能。</li><li>添加到 HttpSession 中 的值可以是任意 Java 对象，这个对象最好实现了 Serializable 接口，这样 Servlet 容器在必要的时候可以将其序列 化到文件中，否则在序列化时就会出现异常。</li></ul></li></ul><h3 id="响应结果状态码有哪些-并给出中文含义" tabindex="-1"><a class="header-anchor" href="#响应结果状态码有哪些-并给出中文含义" aria-hidden="true">#</a> 响应结果状态码有哪些，并给出中文含义？</h3><ul><li><code>1**</code>：信息性状态码</li><li><code>2**</code>：成功状态码 <ul><li>200：请求正常成功</li><li>204：指示请求成功但没有返回新信息</li><li>206：指示服务器已完成对资源的部分 GET 请求</li></ul></li><li><code>3**</code>：重定向状态码 <ul><li>301：永久性重定向</li><li>302：临时性重定向</li><li>304：服务器端允许请求访问资源，但未满足条件</li></ul></li><li><code>4**</code>：客户端错误状态码 <ul><li>400：请求报文中存在语法错误</li><li>401：发送的请求需要有通过 HTTP 认证的认证信息</li><li>403：对请求资源的访问被服务器拒绝了</li><li>404：服务器上无法找到请求的资源</li></ul></li><li><code>5**</code>：服务器错误状态码 <ul><li>500：服务器端在执行请求时发生了错误</li><li>503：服务器暂时处于超负载或正在进行停机维护，现在无法处理请求</li></ul></li></ul><h3 id="xml-文档定义有几种形式-它们之间有何本质区别-解析-xml-文档有哪几种方式" tabindex="-1"><a class="header-anchor" href="#xml-文档定义有几种形式-它们之间有何本质区别-解析-xml-文档有哪几种方式" aria-hidden="true">#</a> XML 文档定义有几种形式？它们之间有何本质区别？解析 XML 文档有哪几种方式？</h3><p>（1）XML 文档有两种约束方式：</p><ol><li>DTD 约束</li><li>Schema 约束</li></ol><p>（2）XML 文档区别：<br> 1 DTD 不符合 XML 的语法结构，schema 符合 XML 的语法结构；<br> 2 DTD 的约束扩展性比较差，XML 文档只能引入一个 DTD 的文件。schema 可以引入多个文件；<br> 3 DTD 不支持名称空间（理解包结构），schema 支持名称空间；<br> 4 DTD 支持数据比较少，schema 支持更多的数据类型；</p><p>（3）解析方式主要有三种：</p><ul><li>DOM 解析： <ul><li>（a）加载整个 xml 的文档到内存中，形成树状结构，生成对象；</li><li>（b）容易产生内存溢出；</li><li>（c）可以做增删改</li></ul></li><li>SAX 解析 <ul><li>（a）边读边解析；</li><li>（b）不可以做增删改</li></ul></li><li>DOM4J 解析（hibernate 底层采用) <ul><li>（a）可让 SAX 解析也产生树状结构。</li><li>（b）主要 api 开发步骤： <ul><li>1）SAXReader.read(xxx.xml)代表解析 xml 的文档，返回对象是 Document；</li><li>2）Document.getRootElement(),返回的是文档的根节点，是 Element 对象；</li><li>3）Element: <ul><li>.element(...)-- 获得指定名称第一个子元素。可以不指定名称;</li><li>.elements(...)-- 获得指定名称的所有子元素。可以不指定名称;</li><li>.getText()-- 获得当前元素的文本内容；</li><li>.elementText(...)-- 获得指定名称子元素的文本值</li><li>.addElement()-- 添加子节点</li><li>.setText()-- 设置子标签内容</li></ul></li><li>4）XMLWriter.write(&quot;..&quot;)-- 写出</li><li>5）XMLWriter.close()-- 关闭输出流</li></ul></li></ul></li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,54),h={href:"https://blog.csdn.net/YM_IlY/article/details/81266959",target:"_blank",rel:"noopener noreferrer"},c={href:"https://www.jianshu.com/p/f073dde56262",target:"_blank",rel:"noopener noreferrer"};function u(p,v){const t=a("ExternalLinkIcon");return s(),n("div",null,[g,e("ul",null,[e("li",null,[e("a",h,[l("https://blog.csdn.net/YM_IlY/article/details/81266959"),i(t)])]),e("li",null,[e("a",c,[l("https://www.jianshu.com/p/f073dde56262"),i(t)])])])])}const b=r(d,[["render",u],["__file","index.html.vue"]]);export{b as default};
