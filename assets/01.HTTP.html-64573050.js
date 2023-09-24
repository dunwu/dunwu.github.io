import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as d,c as a,a as e,b as t,d as r,e as n}from"./app-9cc2d019.js";const l={},h=e("h1",{id:"超文本传输协议-http",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#超文本传输协议-http","aria-hidden":"true"},"#"),t(" 超文本传输协议 HTTP")],-1),c={href:"https://en.wikipedia.org/wiki/Application_Layer",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"http-简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#http-简介","aria-hidden":"true"},"#"),t(" HTTP 简介")],-1),T=e("h3",{id:"http-是什么",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#http-是什么","aria-hidden":"true"},"#"),t(" HTTP 是什么")],-1),g={href:"https://en.wikipedia.org/wiki/Application_Layer",target:"_blank",rel:"noopener noreferrer"},u={href:"https://en.wikipedia.org/wiki/Client%E2%80%93server_model",target:"_blank",rel:"noopener noreferrer"},_={href:"http://en.wikipedia.org/wiki/Stateless_protocol",target:"_blank",rel:"noopener noreferrer"},b={href:"https://zh.wikipedia.org/wiki/%E4%BC%A0%E8%BE%93%E5%B1%82",target:"_blank",rel:"noopener noreferrer"},H=n('<p>HTTP 是由 <strong>IETF</strong>(Internet Engineering Task Force，互联网工程工作小组) 和 <strong>W3C</strong>(World Wide Web Consortium，万维网协会) 共同合作制订的，它们发布了一系列的<strong>RFC</strong>(Request For Comments)，其中最著名的是 RFC 2616，它定义了<strong>HTTP /1.1</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200119131949.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="http-协议特点" tabindex="-1"><a class="header-anchor" href="#http-协议特点" aria-hidden="true">#</a> HTTP 协议特点</h3><ul><li><strong>无连接的</strong> - 无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。</li><li><strong>无状态的</strong> - HTTP 协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。</li><li><strong>媒体独立的</strong> - 这意味着，只要客户端和服务器知道如何处理的数据内容，任何类型的数据都可以通过 HTTP 发送。客户端以及服务器指定使用适合的 MIME-type 内容类型。</li><li><strong>C/S 模型的</strong> - 基于 Client/Server 模型工作。</li></ul><h3 id="http-版本特性" tabindex="-1"><a class="header-anchor" href="#http-版本特性" aria-hidden="true">#</a> HTTP 版本特性</h3><h4 id="http-1-1" tabindex="-1"><a class="header-anchor" href="#http-1-1" aria-hidden="true">#</a> HTTP 1.1</h4><p>HTTP1.0 和 HTTP 1.1 主要区别如下：</p><ul><li><strong>缓存处理</strong>，在 HTTP1.0 中主要使用 header 里的 If-Modified-Since,Expires 来做为缓存判断的标准，HTTP1.1 则引入了更多的缓存控制策略例如 Entity tag，If-Unmodified-Since, If-Match, If-None-Match 等更多可供选择的缓存头来控制缓存策略。</li><li><strong>带宽优化及网络连接的使用</strong></li><li><strong>错误通知的管理</strong> - HTTP1.1 中新增了 24 个错误状态响应码。</li><li><strong>Host 头处理</strong><ul><li>HTTP1.0 中认为每台服务器都绑定一个唯一的 IP 地址，因此，请求消息中的 URL 并没有传递主机名（hostname）。</li><li>随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机，并且它们共享一个 IP 地址。HTTP1.1 的请求消息和响应消息都应支持 Host 头域，且请求消息中如果没有 Host 头域会报告一个错误（400 Bad Request）。</li></ul></li><li><strong>长连接</strong>，HTTP 1.1 支持长连接（PersistentConnection）和请求的流水线（Pipelining）处理，在一个 TCP 连接上可以传送多个 HTTP 请求和响应，减少了建立和关闭连接的消耗和延迟，在 HTTP1.1 中默认开启 Connection： keep-alive，一定程度上弥补了 HTTP1.0 每次请求都要创建连接的缺点。</li></ul><h4 id="http-2-0" tabindex="-1"><a class="header-anchor" href="#http-2-0" aria-hidden="true">#</a> HTTP 2.0</h4><p>HTTP/2 在 HTTP/1.1 有几处基本的不同:</p><ul><li>HTTP/2 是二进制协议而不是文本协议。不再可读，也不可无障碍的手动创建，改善的优化技术现在可被实施。</li><li>这是一个复用协议。并行的请求能在同一个链接中处理，移除了 HTTP/1.x 中顺序和阻塞的约束。</li><li>压缩了 headers。因为 headers 在一系列请求中常常是相似的，其移除了重复和传输重复数据的成本。</li><li>其允许服务器在客户端缓存中填充数据，通过一个叫服务器推送的机制来提前请求。</li></ul><h2 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理" aria-hidden="true">#</a> 工作原理</h2><p>HTTP 工作于 <strong>Client/Server</strong> 模型上。</p><p>客户端和服务器之间的通信采用 <strong>request/response</strong> 机制。</p><p>客户端是终端（可以是浏览器、爬虫程序等），服务器是网站的 Web 服务器。</p><p>一次 HTTP 操作称为一个事务，其工作过程大致可分为四步：</p><ol><li><strong>建立连接</strong> - 首先，客户端和服务器需要建立一个到服务器指定端口（默认端口号为 <strong>80</strong>）的 TCP 连接（注：虽然 HTTP 采用 TCP 连接是最流行的方式，但是 RFC 并没有指定一定要采用这种网络传输方式。）。</li><li><strong>发送请求信息</strong> - 客户端向服务器发送请求。请求方式的格式为，统一资源标识符、协议版本号，后边是 MIME 信息包括请求修饰符</li><li><strong>发送响应信息</strong> - 服务器监听指定接口是否收到请求，一旦发现请求，处理后，返回响应结果给客户端。其格式为一个状态行包括信息的协议版本号、一个成功或错误的代码，后边是 MIME 信息包括服务器信息、实体信息和可能的内容。</li><li><strong>关闭连接</strong> - 客户端根据响应，显示结果给用户，最后关闭连接。</li></ol><h3 id="http-优化" tabindex="-1"><a class="header-anchor" href="#http-优化" aria-hidden="true">#</a> HTTP 优化</h3><p>影响一个 HTTP 网络请求的因素主要有两个：<strong>带宽和延迟。</strong></p><ul><li><p>**带宽：**如果说我们还停留在拨号上网的阶段，带宽可能会成为一个比较严重影响请求的问题，但是现在网络基础建设已经使得带宽得到极大的提升，我们不再会担心由带宽而影响网速，那么就只剩下延迟了。</p></li><li><p><strong>延迟：</strong></p></li><li><ul><li>浏览器阻塞（HOL blocking）：浏览器会因为一些原因阻塞请求。浏览器对于同一个域名，同时只能有 4 个连接（这个根据浏览器内核不同可能会有所差异），超过浏览器最大连接数限制，后续请求就会被阻塞。</li><li>DNS 查询（DNS Lookup）：浏览器需要知道目标服务器的 IP 才能建立连接。将域名解析为 IP 的这个系统就是 DNS。这个通常可以利用 DNS 缓存结果来达到减少这个时间的目的。</li><li>建立连接（Initial connection）：HTTP 是基于 TCP 协议的，浏览器最快也要在第三次握手时才能捎带 HTTP 请求报文，达到真正的建立连接，但是这些连接无法复用会导致每次请求都经历三次握手和慢启动。三次握手在高延迟的场景下影响较明显，慢启动则对文件类大请求影响较大。</li></ul></li></ul><h2 id="http-报文" tabindex="-1"><a class="header-anchor" href="#http-报文" aria-hidden="true">#</a> HTTP 报文</h2><p>HTTP 是基于客户端/服务端（C/S）的架构模型，通过一个可靠的链接来交换信息，是一个无状态的请求/响应协议。</p><p>一个 HTTP&quot;客户端&quot;是一个应用程序（Web 浏览器或其他任何客户端），通过连接到服务器达到向服务器发送一个或多个 HTTP 的请求的目的。</p><p>一个 HTTP&quot;服务器&quot;同样也是一个应用程序（通常是一个 Web 服务，如 Apache Web 服务器或 IIS 服务器等），通过接收客户端的请求并向客户端发送 HTTP 响应数据。</p><p>HTTP 使用统一资源标识符（Uniform Resource Identifiers, URI）来传输数据和建立连接。</p><p>一旦建立连接后，数据消息就通过类似 Internet 邮件所使用的格式[RFC5322]和多用途 Internet 邮件扩展（MIME）[RFC2045]来传送。</p><p><img src="https://images2015.cnblogs.com/blog/318837/201601/318837-20160108221141668-2097587842.png" alt="img" loading="lazy"><br> 以下是使用 wireshark 抓取的一个实际访问百度首页的 HTTP GET 报文：</p><p><img src="http://images2015.cnblogs.com/blog/318837/201601/318837-20160108221137996-786139964.png" alt="img" loading="lazy"><br> 可以清楚的看到它的层级结构如下图，经过了层层的包装。</p><figure><img src="https://images2015.cnblogs.com/blog/318837/201601/318837-20160108221140731-222242798.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="http-请求报文" tabindex="-1"><a class="header-anchor" href="#http-请求报文" aria-hidden="true">#</a> HTTP 请求报文</h3><p>客户端发送一个 HTTP 请求到服务器的请求消息包括以下格式：请求行（request line）、请求头部（header）、空行和请求数据四个部分组成，下图给出了请求报文的一般格式。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200119132129.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>HTTP 请求报文由以下元素组成：</p>',33),P={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",target:"_blank",rel:"noopener noreferrer"},f={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"GET",-1),S={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"POST",-1),C={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"OPTIONS",-1),x={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/HEAD",target:"_blank",rel:"noopener noreferrer"},E=e("code",null,"HEAD",-1),I={href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms",target:"_blank",rel:"noopener noreferrer"},z={href:"https://developer.mozilla.org/en-US/docs/Glossary/protocol",target:"_blank",rel:"noopener noreferrer"},L=e("code",null,"http://",-1),R={href:"https://developer.mozilla.org/en-US/docs/Glossary/domain",target:"_blank",rel:"noopener noreferrer"},A=e("code",null,"developer.mozilla.org",-1),y={href:"https://developer.mozilla.org/en-US/docs/Glossary/port",target:"_blank",rel:"noopener noreferrer"},q=e("li",null,"HTTP 协议版本号。",-1),M={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers",target:"_blank",rel:"noopener noreferrer"},U=e("li",null,"对于一些像 POST 这样的方法，报文的 body 就包含了发送的资源，这与响应报文的 body 类似。",-1),N=n('<p>根据 HTTP 标准，HTTP 请求可以使用多种请求方法。</p><p><strong>HTTP1.0</strong> 定义了三种请求方法： <strong>GET</strong>, <strong>POST</strong> 和 <strong>HEAD</strong>方法。</p><p><strong>HTTP1.1</strong> 新增了五种请求方法：<strong>OPTIONS</strong>, <strong>PUT</strong>, <strong>DELETE</strong>, <strong>TRACE</strong> 和 <strong>CONNECT</strong>方法。</p><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>GET</td><td>请求指定的页面信息，并返回实体主体。</td></tr><tr><td>HEAD</td><td>类似于 get 请求，只不过返回的响应中没有具体的内容，用于获取报头</td></tr><tr><td>POST</td><td>向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST 请求可能会导致新的资源的建立和/或已有资源的修改。</td></tr><tr><td>PUT</td><td>从客户端向服务器传送的数据取代指定的文档的内容。</td></tr><tr><td>DELETE</td><td>请求服务器删除指定的页面。</td></tr><tr><td>CONNECT</td><td>HTTP/1.1 协议中预留给能够将连接改为管道方式的代理服务器。</td></tr><tr><td>OPTIONS</td><td>允许客户端查看服务器的性能。</td></tr><tr><td>TRACE</td><td>回显服务器收到的请求，主要用于测试或诊断。</td></tr></tbody></table><p><strong>HTTP</strong> <strong>请求消息头</strong></p><table><thead><tr><th><strong>请求消息头</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>Accept</td><td>浏览器支持的格式</td></tr><tr><td>Accept-Encoding</td><td>支持的编码格式，如（UTF-8，GBK）</td></tr><tr><td>Accept-Language</td><td>支持的语言类型</td></tr><tr><td>User-Agent</td><td>浏览器信息</td></tr><tr><td>Cookie</td><td>记录的是用户当前的状态</td></tr><tr><td>Referer</td><td>指从哪个页面单击链接进入的页面</td></tr><tr><td>HOST</td><td>目的地址对应的主机名</td></tr><tr><td>Connection</td><td>连接类型。如 Keep-Alive 表示长连接，不会断开</td></tr><tr><td>Content-Length</td><td>内容长度</td></tr><tr><td>Content-Type</td><td>内容类型</td></tr></tbody></table><h3 id="http-响应报文" tabindex="-1"><a class="header-anchor" href="#http-响应报文" aria-hidden="true">#</a> HTTP 响应报文</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200119132311.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>HTTP 响应报文包含了下面的元素：</p>',9),w=e("li",null,"HTTP 协议版本号。",-1),W={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",target:"_blank",rel:"noopener noreferrer"},O=e("li",null,"一个状态信息，这个信息是非权威的状态码描述信息，可以由服务端自行设定。",-1),D={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers",target:"_blank",rel:"noopener noreferrer"},G=e("li",null,"可选项，比起请求报文，响应报文中更常见地包含获取的资源 body。",-1),F=n('<h4 id="响应消息头" tabindex="-1"><a class="header-anchor" href="#响应消息头" aria-hidden="true">#</a> 响应消息头</h4><table><thead><tr><th><strong>响应消息头</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>Allow</td><td>服务器支持哪些请求方法（如 GET、POST 等）。</td></tr><tr><td>Content-Encoding</td><td>文档的编码（Encode）方法。只有在解码之后才可以得到 Content-Type 头指定的内容类型。利用 gzip 压缩文档能够显著地减少 HTML 文档的下载时间。Java 的 GZIPOutputStream 可以很方便地进行 gzip 压缩，但只有 Unix 上的 Netscape 和 Windows 上的 IE 4、IE 5 才支持它。因此，Servlet 应该通过查看 Accept-Encoding 头（即 request.getHeader(&quot;Accept-Encoding&quot;)）检查浏览器是否支持 gzip，为支持 gzip 的浏览器返回经 gzip 压缩的 HTML 页面，为其他浏览器返回普通页面。</td></tr><tr><td>Content-Length</td><td>表示内容长度。只有当浏览器使用持久 HTTP 连接时才需要这个数据。如果你想要利用持久连接的优势，可以把输出文档写入 ByteArrayOutputStram，完成后查看其大小，然后把该值放入 Content-Length 头，最后通过<code>byteArrayStream.writeTo(response.getOutputStream()</code> 发送内容。</td></tr><tr><td>Content-Type</td><td>表示后面的文档属于什么 MIME 类型。Servlet 默认为 <code>text/plain</code>，但通常需要显式地指定为 text/html。由于经常要设置 Content-Type，因此 HttpServletResponse 提供了一个专用的方法 setContentType。</td></tr><tr><td>Date</td><td>当前的 GMT 时间。你可以用 setDateHeader 来设置这个头以避免转换时间格式的麻烦。</td></tr><tr><td>Expires</td><td>应该在什么时候认为文档已经过期，从而不再缓存它？</td></tr><tr><td>Last-Modified</td><td>文档的最后改动时间。客户可以通过 If-Modified-Since 请求头提供一个日期，该请求将被视为一个条件 GET，只有改动时间迟于指定时间的文档才会返回，否则返回一个 304（Not Modified）状态。Last-Modified 也可用 setDateHeader 方法来设置。</td></tr><tr><td>Location</td><td>表示客户应当到哪里去提取文档。Location 通常不是直接设置的，而是通过 HttpServletResponse 的 sendRedirect 方法，该方法同时设置状态代码为 302。</td></tr><tr><td>Refresh</td><td>表示浏览器应该在多少时间之后刷新文档，以秒计。除了刷新当前文档之外，你还可以通过 <code>response.setHeader(&quot;Refresh&quot;, &quot;5;URL=http://host/path&quot;)</code>让浏览器读取指定的页面。 注意这种功能通常是通过设置 HTML 页面 HEAD 区的 <code>&lt;META HTTP-EQUIV=&quot;Refresh&quot; CONTENT=&quot;5;URL=http://host/path&quot;&gt;</code>实现，这是因为，自动刷新或重定向对于那些不能使用 CGI 或 Servlet 的 HTML 编写者十分重要。但是，对于 Servlet 来说，直接设置 Refresh 头更加方便。 注意 Refresh 的意义是&quot;N 秒之后刷新本页面或访问指定页面&quot;，而不是&quot;每隔 N 秒刷新本页面或访问指定页面&quot;。因此，连续刷新要求每次都发送一个 Refresh 头，而发送 204 状态代码则可以阻止浏览器继续刷新，不管是使用 Refresh 头还是 <code>&lt;META HTTP-EQUIV=&quot;Refresh&quot; ...&gt;</code>。 注意 Refresh 头不属于 HTTP 1.1 正式规范的一部分，而是一个扩展，但 Netscape 和 IE 都支持它。</td></tr><tr><td>Server</td><td>服务器名字。Servlet 一般不设置这个值，而是由 Web 服务器自己设置。</td></tr><tr><td>Set-Cookie</td><td>设置和页面关联的 Cookie。Servlet 不应使用<code>response.setHeader(&quot;Set-Cookie&quot;, ...)</code>，而是应使用 HttpServletResponse 提供的专用方法 addCookie。参见下文有关 Cookie 设置的讨论。</td></tr><tr><td>WWW-Authenticate</td><td>客户应该在 Authorization 头中提供什么类型的授权信息？在包含 401（Unauthorized）状态行的应答中这个头是必需的。例如，<code>response.setHeader(&quot;WWW-Authenticate&quot;, &quot;BASIC realm=＼&quot;executives＼&quot;&quot;)</code>。 注意 Servlet 一般不进行这方面的处理，而是让 Web 服务器的专门机制来控制受密码保护页面的访问（例如.htaccess）。</td></tr></tbody></table><h4 id="http-响应状态码" tabindex="-1"><a class="header-anchor" href="#http-响应状态码" aria-hidden="true">#</a> HTTP 响应状态码</h4><p>当浏览者访问一个网页时，浏览者的浏览器会向网页所在服务器发出请求。当浏览器接收并显示网页前，此网页所在的服务器会返回一个包含 HTTP 状态码的信息头（server header）用以响应浏览器的请求。</p><p>HTTP 状态码的英文为 <strong><code>HTTP Status Code</code></strong>。</p><p>下面是常见的 HTTP 状态码：</p><ul><li><strong>200</strong> - 请求成功</li><li><strong>301</strong> - 资源（网页等）被永久转移到其它 URL</li><li><strong>404</strong> - 请求的资源（网页等）不存在</li><li><strong>500</strong> - 内部服务器错误</li></ul><p>HTTP 状态码分类</p><p>HTTP 状态码由三个十进制数字组成，第一个十进制数字定义了状态码的类型，后两个数字没有分类的作用。HTTP 状态码共分为 5 种类型：</p><table><thead><tr><th><strong>分类</strong></th><th><strong>分类描述</strong></th></tr></thead><tbody><tr><td>1xx</td><td><strong>信息响应</strong>。服务器收到请求，需要请求者继续执行操作</td></tr><tr><td>2xx</td><td><strong>成功响应</strong>。操作被成功接收并处理</td></tr><tr><td>3xx</td><td><strong>重定向</strong>。需要进一步的操作以完成请求</td></tr><tr><td>4xx</td><td><strong>客户端错误</strong>。请求包含语法错误或无法完成请求</td></tr><tr><td>5xx</td><td><strong>服务器错误</strong>。服务器在处理请求的过程中发生了错误</td></tr></tbody></table>',10),B=e("p",null,"🔔 更详细的 HTTP 状态码可以参考：",-1),J={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status",target:"_blank",rel:"noopener noreferrer"},V={href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes",target:"_blank",rel:"noopener noreferrer"},K=n('<h2 id="https" tabindex="-1"><a class="header-anchor" href="#https" aria-hidden="true">#</a> HTTPS</h2><p>HTTP 是明文传输，HTTPS 通过 SSL\\TLS 进行了加密</p><p>HTTP 的端口号是 80，HTTPS 是 443</p><p>HTTPS 需要到 CA 申请证书，一般免费证书很少，需要交费</p><p>HTTPS 的连接很简单，是无状态的；HTTPS 协议是由 SSL+HTTP 协议构建的可进行加密传输、身份认证的网络协议，比 HTTP 协议安全。</p><h2 id="cookie-和-session" tabindex="-1"><a class="header-anchor" href="#cookie-和-session" aria-hidden="true">#</a> Cookie 和 Session</h2><blockquote><p>由于 Http 是一种无状态的协议，服务器单从网络连接上无从知道客户身份。</p><p>会话跟踪是 Web 程序中常用的技术，用来跟踪用户的整个会话。常用会话跟踪技术是 Cookie 与 Session。</p></blockquote><h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h3>',8),j={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#HTTP_is_stateless_but_not_sessionless",target:"_blank",rel:"noopener noreferrer"},Q=n(`<p>Cookie 主要用于以下三个方面：</p><ul><li>会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）</li><li>个性化设置（如用户自定义设置、主题等）</li><li>浏览器行为跟踪（如跟踪分析用户行为等）</li></ul><h4 id="cookie-工作步骤" tabindex="-1"><a class="header-anchor" href="#cookie-工作步骤" aria-hidden="true">#</a> Cookie 工作步骤</h4><ol><li>客户端请求服务器，如果服务器需要记录该用户的状态，就是用 response 向客户端浏览器颁发一个 Cookie。</li><li>客户端浏览器会把 Cookie 保存下来。</li><li>当浏览器再请求该网站时，浏览器把该请求的网址连同 Cookie 一同提交给服务器。服务器检查该 Cookie，以此来辨认用户状态。</li></ol><p><strong><em>注：Cookie 功能需要浏览器的支持，如果浏览器不支持 Cookie 或者 Cookie 禁用了，Cookie 功能就会失效。</em></strong></p><p>Java 中把 Cookie 封装成了 <code>javax.servlet.http.Cookie</code> 类。</p><h4 id="cookie-和-http-报文" tabindex="-1"><a class="header-anchor" href="#cookie-和-http-报文" aria-hidden="true">#</a> Cookie 和 Http 报文</h4><p><code>Cookies</code> 通常设置在 HTTP 头信息中（虽然 JavaScript 也可以直接在浏览器上设置一个 Cookie）。</p><p>设置 Cookie 的 Servlet 会发送如下的头信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HTTP/1.1 200 OK
Date: Fri, 04 Feb 2000 21:03:38 GMT
Server: Apache/1.3.9 (UNIX) PHP/4.0b3
Set-Cookie: name=xyz; expires=Friday, 04-Feb-07 22:03:38 GMT;
                 path=/; domain=w3cschool.cc
Connection: close
Content-Type: text/html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正如您所看到的，<code>Set-Cookie</code> 头包含了一个名称值对、一个 GMT 日期、一个路径和一个域。名称和值会被 URL 编码。<code>expires</code> 字段是一个指令，告诉浏览器在给定的时间和日期之后&quot;忘记&quot;该 Cookie。</p><p>如果浏览器被配置为存储 Cookies，它将会保留此信息直到到期日期。如果用户的浏览器指向任何匹配该 Cookie 的路径和域的页面，它会重新发送 Cookie 到服务器。浏览器的头信息可能如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET / HTTP/1.0
Connection: Keep-Alive
User-Agent: Mozilla/4.6 (X11; I; Linux 2.2.6-15apmac ppc)
Host: zink.demon.co.uk:1126
Accept: image/gif, */*
Accept-Encoding: gzip
Accept-Language: en
Accept-Charset: iso-8859-1,*,utf-8
Cookie: name=xyz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> Session</h3><p>不同于 <strong>Cookie 保存在客户端浏览器中</strong>，<strong>Session 保存在服务器上</strong>。</p><p>由于 Cookie 以明文的方式存储在本地，而 Cookie 中往往带有用户信息，这样就造成了非常大的安全隐患。</p><p>Session 的出现解决了这个问题，<strong>Session 可以理解为服务器端开辟的存储空间，里面保存了用户的状态</strong>，用户信息以 Session 的形式存储在服务端。当用户请求到来时，服务端可以把用户的请求和用户的 Session 对应起来。那么 Session 是怎么和请求对应起来的呢？答案是通过 Cookie，浏览器在 Cookie 中填充了一个 Session ID 之类的字段用来标识请求。</p><h4 id="session-工作流程" tabindex="-1"><a class="header-anchor" href="#session-工作流程" aria-hidden="true">#</a> Session 工作流程</h4><p>Session 工作流程是这样的：</p><p>服务器在创建 Session 的同时，会为该 Session 生成唯一的 Session ID，当浏览器再次发送请求的时候，会将这个 Session ID 带上，服务器接受到请求之后就会依据 Session ID 找到相应的 Session，找到 Session 后，就可以在 Session 中获取或者添加内容了。而这些内容只会保存在服务器中，发到客户端的只有 Session ID，这样相对安全，也节省了网络流量，因为不需要在 Cookie 中存储大量用户信息。该 Cookie 为服务器自动生成的，它的 <code>maxAge</code> 属性一般为-1，表示仅当前浏览器内有效，并且各浏览器窗口间不共享，关闭浏览器就会失效。</p><h4 id="session-创建与存储" tabindex="-1"><a class="header-anchor" href="#session-创建与存储" aria-hidden="true">#</a> Session 创建与存储</h4><p>那么 Session 在何时何地创建呢？当然还是在服务器端程序运行的过程中创建的，不同语言实现的应用程序有不同的创建 Session 的方法。Tomcat 的 Session 管理器提供了多种持久化方案来存储 Session，通常会采用高性能的存储方式，比如 Redis，并且通过集群部署的方式，防止单点故障，从而提升高可用。同时，Session 有过期时间，因此 Tomcat 会开启后台线程定期的轮询，如果 Session 过期了就将 Session 失效。</p><h3 id="cookie-vs-session" tabindex="-1"><a class="header-anchor" href="#cookie-vs-session" aria-hidden="true">#</a> Cookie vs. Session</h3><p>Cookie vs. Session 对比如下：</p><ul><li><strong>存储位置</strong><ul><li>Cookie 存储在浏览器。 <ul><li>不占用服务器资源。</li><li>一些客户端的程序可能会窥探、复制或修改 Cookie 内容，安全风险更大。</li></ul></li><li>Session 存储在服务器。 <ul><li>每个用户都会产生一个 Session，如果并发访问的用户非常多，会产生很多的 Session，消耗大量的内存。</li><li>对客户端是透明的，不存在敏感信息泄露的危险。</li></ul></li></ul></li><li><strong>存取方式</strong><ul><li>Cookie 只能保存 <code>ASCII</code> 字符串，如果需要存取 <code>Unicode</code> 字符或二进制数据，需要进行<code>UTF-8</code>、<code>GBK</code>或<code>BASE64</code>等方式的编码。</li><li>Session 可以存取任何类型的数据，甚至是任何 Java 类。可以将 Session 看成是一个 Java 容器类。</li></ul></li><li><strong>有效期</strong><ul><li>使用 Cookie 可以保证长时间登录有效，只要设置 Cookie 的 <code>maxAge</code> 属性为一个很大的数字。</li><li>而 Session 虽然理论上也可以通过设置很大的数值来保持长时间登录有效，但是，由于 Session 依赖于名为 <code>JESSIONID</code> 的 Cookie，而 Cookie <code>JESSIONID</code>的 <code>maxAge</code> 默认为-1，只要关闭了浏览器该 Session 就会失效，因此，Session 不能实现信息永久有效的效果。使用 URL 地址重写也不能实现。</li></ul></li><li><strong>浏览器的支持</strong><ul><li>浏览器如果禁用 Cookie，则 Cookie 不能使用。</li><li>浏览器如果禁用 Cookie，需要使用 Session 以及 URL 地址重写。需要注意的是：所有的用到 Session 程序的 URL 都要使用<code>response.encodeURL(StringURL)</code> 或<code>response.encodeRediretURL(String URL)</code>进行 URL 地址重写，否则导致 Session 会话跟踪失效。</li></ul></li><li><strong>跨域名</strong><ul><li>Cookie 支持跨域名。</li><li>Session 不支持跨域名。</li></ul></li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,26),X={href:"https://book.douban.com/subject/25863515/",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://time.geekbang.org/column/intro/100027701",target:"_blank",rel:"noopener noreferrer"},$={href:"https://juejin.im/entry/5981c5df518825359a2b9476",target:"_blank",rel:"noopener noreferrer"},ee={href:"http://blog.csdn.net/gueter/article/details/1524447",target:"_blank",rel:"noopener noreferrer"},te={href:"http://www.runoob.com/http/http-intro.html",target:"_blank",rel:"noopener noreferrer"},oe={href:"https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol",target:"_blank",rel:"noopener noreferrer"},re={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"};function ne(ie,se){const o=s("ExternalLinkIcon");return d(),a("div",null,[h,e("blockquote",null,[e("p",null,[t("**超文本传输协议（HTTP）**是一个用于传输超媒体文档（例如 HTML）的"),e("a",c,[t("应用层"),r(o)]),t("协议。")])]),p,T,e("p",null,[t("**超文本传输协议（HTTP）**是一个用于传输超媒体文档（例如 HTML）的"),e("a",g,[t("应用层"),r(o)]),t("协议。HTTP 是 浏览器与服务器之间的数据传送协议。HTTP 遵循经典的"),e("a",u,[t("客户端-服务端模型"),r(o)]),t("，客户端打开一个连接以发出请求，然后等待它收到服务器端响应。HTTP 是"),e("a",_,[t("无状态协议"),r(o)]),t("，这意味着服务器不会在两个请求之间保留任何数据（状态）。该协议虽然通常基于 TCP/IP 层，但可以在任何可靠的"),e("a",b,[t("传输层"),r(o)]),t("上使用；也就是说，不像 UDP，它是一个不会静默丢失消息的协议。")]),H,e("ul",null,[e("li",null,[t("一个 HTTP 的"),e("a",P,[t("method"),r(o)]),t("，经常是由一个动词像"),e("a",f,[k,r(o)]),t(", "),e("a",S,[m,r(o)]),t(" 或者一个名词像"),e("a",C,[v,r(o)]),t("，"),e("a",x,[E,r(o)]),t("来定义客户端的动作行为。通常客户端的操作都是获取资源（GET 方法）或者发送"),e("a",I,[t("HTML form"),r(o)]),t("表单值（POST 方法），虽然在一些情况下也会有其他操作。")]),e("li",null,[t("要获取的资源的路径，通常是上下文中就很明显的元素资源的 URL，它没有"),e("a",z,[t("protocol"),r(o)]),t(" （"),L,t("），"),e("a",R,[t("domain"),r(o)]),t("（"),A,t("），或是 TCP 的"),e("a",y,[t("port"),r(o)]),t("（HTTP 一般在 80 端口）。")]),q,e("li",null,[t("为服务端表达其他信息的可选头部"),e("a",M,[t("headers"),r(o)]),t("。")]),U]),N,e("ul",null,[w,e("li",null,[t("一个状态码（"),e("a",W,[t("status code"),r(o)]),t("），来告知对应请求执行成功或失败，以及失败的原因。")]),O,e("li",null,[t("HTTP "),e("a",D,[t("headers"),r(o)]),t("，与请求头部类似。")]),G]),F,e("blockquote",null,[B,e("ul",null,[e("li",null,[e("a",J,[t("MDN HTTP 响应代码"),r(o)])]),e("li",null,[e("a",V,[t("Wiki List of HTTP status codes"),r(o)])])])]),K,e("p",null,[t("HTTP Cookie（也叫 Web Cookie 或浏览器 Cookie）是服务器发送到用户浏览器，并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器，如保持用户的登录状态。Cookie 使基于"),e("a",j,[t("无状态"),r(o)]),t("的 HTTP 协议记录稳定的状态信息成为了可能。")]),Q,e("ul",null,[e("li",null,[e("a",X,[t("《图解 HTTP》"),r(o)])]),e("li",null,[e("a",Z,[t("MDN HTTP 教程"),r(o)])]),e("li",null,[e("a",Y,[t("深入拆解 Tomcat & Jetty"),r(o)])]),e("li",null,[e("a",$,[t("HTTP1.0、HTTP1.1 和 HTTP2.0 的区别"),r(o)])]),e("li",null,[e("a",ee,[t("http://blog.csdn.net/gueter/article/details/1524447"),r(o)])]),e("li",null,[e("a",te,[t("http://www.runoob.com/http/http-intro.html"),r(o)])]),e("li",null,[e("a",oe,[t("https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol"),r(o)])]),e("li",null,[e("a",re,[t("https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS"),r(o)])])])])}const le=i(l,[["render",ne],["__file","01.HTTP.html.vue"]]);export{le as default};
