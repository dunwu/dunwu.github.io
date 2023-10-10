import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as i,c,a as s,b as n,d as t,e}from"./app-29bcd084.js";const l={},u=e(`<h1 id="分布式会话基本原理" tabindex="-1"><a class="header-anchor" href="#分布式会话基本原理" aria-hidden="true">#</a> 分布式会话基本原理</h1><blockquote><p>由于 Http 是一种无状态的协议，服务器单单从网络连接上无从知道客户身份。</p><p>会话跟踪是 Web 程序中常用的技术，用来跟踪用户的整个会话。常用会话跟踪技术是 Cookie 与 Session。</p></blockquote><h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h2><p>由于 Http 是一种无状态的协议，服务器单从网络连接上无从知道客户身份。</p><p>所以服务器与浏览器为了进行会话跟踪（知道是谁在访问我），就必须主动的去维护一个状态，这个状态用于告知服务端前后两个请求是否来自同一浏览器。而这个状态需要通过 cookie 或者 session 去实现。</p><h3 id="什么是-cookie" tabindex="-1"><a class="header-anchor" href="#什么是-cookie" aria-hidden="true">#</a> 什么是 Cookie</h3><p>Cookie 实际上是存储在用户浏览器上的文本信息，并保留了各种跟踪的信息。</p><p>一个简单的 cookie 设置如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">Set-Cookie</span><span class="token punctuation">:</span> <span class="token header-value">&lt;cookie-name&gt;=&lt;cookie-value&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/2.0</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">OK</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">text/html</span></span>
<span class="token header"><span class="token header-name keyword">Set-Cookie</span><span class="token punctuation">:</span> <span class="token header-value">yummy_cookie=choco</span></span>
<span class="token header"><span class="token header-name keyword">Set-Cookie</span><span class="token punctuation">:</span> <span class="token header-value">tasty_cookie=strawberry</span></span>
<span class="token text-html">
[page content]
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cookie-的工作步骤" tabindex="-1"><a class="header-anchor" href="#cookie-的工作步骤" aria-hidden="true">#</a> Cookie 的工作步骤</h3><ol><li>浏览器请求服务器，如果服务器需要记录该用户的状态，就是用 response 向浏览器颁发一个 Cookie。</li><li>浏览器会把 Cookie 保存下来。</li><li>当浏览器再请求该网站时，浏览器把该请求的网址连同 Cookie 一同提交给服务器。服务器检查该 Cookie，以此来辨认用户状态。</li></ol><h3 id="cookie-的作用" tabindex="-1"><a class="header-anchor" href="#cookie-的作用" aria-hidden="true">#</a> Cookie 的作用</h3><p>Cookie 主要用于以下三个方面：</p><ul><li>会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）</li><li>个性化设置（如用户自定义设置、主题等）</li><li>浏览器行为跟踪（如跟踪分析用户行为等）</li></ul><p><strong><em>注：Cookie 功能需要浏览器的支持，如果浏览器不支持 Cookie 或者 Cookie 禁用了，Cookie 功能就会失效。</em></strong></p><h3 id="cookie-的重要属性" tabindex="-1"><a class="header-anchor" href="#cookie-的重要属性" aria-hidden="true">#</a> Cookie 的重要属性</h3><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td><strong>name=value</strong></td><td>键值对，设置 Cookie 的名称及相对应的值，都必须是<strong>字符串类型</strong> - 如果值为 Unicode 字符，需要为字符编码。 - 如果值为二进制数据，则需要使用 BASE64 编码。</td></tr><tr><td><strong>domain</strong></td><td>指定 cookie 所属域名，默认是当前域名</td></tr><tr><td><strong>path</strong></td><td><strong>指定 cookie 在哪个路径（路由）下生效，默认是 &#39;/&#39;</strong>。 如果设置为 <code>/abc</code>，则只有 <code>/abc</code> 下的路由可以访问到该 cookie，如：<code>/abc/read</code>。</td></tr><tr><td><strong>maxAge</strong></td><td>cookie 失效的时间，单位秒。如果为整数，则该 cookie 在 maxAge 秒后失效。如果为负数，该 cookie 为临时 cookie ，关闭浏览器即失效，浏览器也不会以任何形式保存该 cookie 。如果为 0，表示删除该 cookie 。默认为 -1。 - <strong>比 expires 好用</strong>。</td></tr><tr><td><strong>expires</strong></td><td>过期时间，在设置的某个时间点后该 cookie 就会失效。 一般浏览器的 cookie 都是默认储存的，当关闭浏览器结束这个会话的时候，这个 cookie 也就会被删除</td></tr><tr><td><strong>secure</strong></td><td>该 cookie 是否仅被使用安全协议传输。安全协议有 HTTPS，SSL 等，在网络上传输数据之前先将数据加密。默认为 false。 当 secure 值为 true 时，cookie 在 HTTP 中是无效，在 HTTPS 中才有效。</td></tr><tr><td><strong>httpOnly</strong></td><td><strong>如果给某个 cookie 设置了 httpOnly 属性，则无法通过 JS 脚本 读取到该 cookie 的信息，但还是能通过 Application 中手动修改 cookie，所以只是在一定程度上可以防止 XSS 攻击，不是绝对的安全</strong></td></tr></tbody></table><h2 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> Session</h2><h3 id="什么是-session" tabindex="-1"><a class="header-anchor" href="#什么是-session" aria-hidden="true">#</a> 什么是 Session</h3><p>Session 代表着服务器和客户端一次会话的过程。Session 对象存储特定用户会话所需的属性及配置信息。这样，当用户在应用程序的 Web 页之间跳转时，存储在 Session 对象中的变量将不会丢失，而是在整个用户会话中一直存在下去。当客户端关闭会话，或者 Session 超时失效时会话结束。</p><ul><li><strong>session 是另一种记录服务器和客户端会话状态的机制</strong></li><li><strong>session 是基于 cookie 实现的，session 存储在服务器端，sessionId 会被存储到客户端的 cookie 中</strong></li></ul><figure><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/12/29/16f523a04d0b3cf5~tplv-t2oaga2asx-watermark.awebp" alt="session.png" tabindex="0" loading="lazy"><figcaption>session.png</figcaption></figure><h3 id="session-的工作步骤" tabindex="-1"><a class="header-anchor" href="#session-的工作步骤" aria-hidden="true">#</a> Session 的工作步骤</h3><ol><li>用户第一次请求服务器的时候，服务器根据用户提交的相关信息，创建对应的 Session。</li><li>请求返回时将此 Session 的唯一标识信息 SessionID 返回给浏览器。</li><li>浏览器接收到服务器返回的 SessionID 信息后，会将此信息存入到 Cookie 中，同时 Cookie 记录此 SessionID 属于哪个域名。</li><li>当用户第二次访问服务器的时候，请求会自动判断此域名下是否存在 Cookie 信息，如果存在自动将 Cookie 信息也发送给服务端，服务端会从 Cookie 中获取 SessionID，再根据 SessionID 查找对应的 Session 信息，如果没有找到说明用户没有登录或者登录失效，如果找到 Session 证明用户已经登录可执行后面操作。</li></ol><p>根据以上流程可知，<strong>SessionID 是连接 Cookie 和 Session 的一道桥梁</strong>，大部分系统也是根据此原理来验证用户登录状态。</p><h2 id="cookie-和-session-的区别" tabindex="-1"><a class="header-anchor" href="#cookie-和-session-的区别" aria-hidden="true">#</a> Cookie 和 Session 的区别</h2><p>Cookie 和 Session 的主要区别可以参考以下表格：</p><table><thead><tr><th></th><th>Cookie</th><th>Session</th></tr></thead><tbody><tr><td><strong>作用范围</strong></td><td>保存在客户端（浏览器）</td><td>保存在服务器端</td></tr><tr><td><strong>隐私策略</strong></td><td>存储在客户端，比较容易遭到非法获取</td><td>存储在服务端，安全性相对 Cookie 要好一些</td></tr><tr><td><strong>存储方式</strong></td><td>只能保存 ASCII</td><td>可以保存任意数据类型。<br>一般情况下我们可以在 Session 中保持一些常用变量信息，比如说 UserId 等。</td></tr><tr><td><strong>存储大小</strong></td><td>不能超过 4K</td><td>存储大小远高于 Cookie</td></tr><tr><td><strong>生命周期</strong></td><td>可设置为永久保存<br>比如我们经常使用的默认登录（记住我）功能</td><td>一般失效时间较短<br>客户端关闭或者 Session 超时都会失效。</td></tr></tbody></table><h2 id="如果禁用-cookie-怎么办" tabindex="-1"><a class="header-anchor" href="#如果禁用-cookie-怎么办" aria-hidden="true">#</a> 如果禁用 Cookie 怎么办</h2><p>既然服务端是根据 Cookie 中的信息判断用户是否登录，那么如果浏览器中禁止了 Cookie，如何保障整个机制的正常运转。</p><p>第一种方案，每次请求中都携带一个 SessionID 的参数，也可以 Post 的方式提交，也可以在请求的地址后面拼接 <code>xxx?SessionID=123456...</code>。</p><p>第二种方案，Token 机制。Token 机制多用于 App 客户端和服务器交互的模式，也可以用于 Web 端做用户状态管理。</p><p>Token 的意思是“令牌”，是服务端生成的一串字符串，作为客户端进行请求的一个标识。Token 机制和 Cookie 和 Session 的使用机制比较类似。</p><p>当用户第一次登录后，服务器根据提交的用户信息生成一个 Token，响应时将 Token 返回给客户端，以后客户端只需带上这个 Token 前来请求数据即可，无需再次登录验证。</p><h2 id="分布式-session" tabindex="-1"><a class="header-anchor" href="#分布式-session" aria-hidden="true">#</a> 分布式 Session</h2><p>在分布式场景下，一个用户的 Session 如果只存储在一个服务器上，那么当负载均衡器把用户的下一个请求转发到另一个服务器上，该服务器没有用户的 Session，就可能导致用户需要重新进行登录等操作。</p><p>分布式 Session 的几种实现策略：</p><ol><li>粘性 session</li><li>应用服务器间的 session 复制共享</li><li>基于缓存的 session 共享 ✅</li></ol><blockquote><p>推荐：基于缓存的 session 共享</p></blockquote><h3 id="粘性-session" tabindex="-1"><a class="header-anchor" href="#粘性-session" aria-hidden="true">#</a> 粘性 Session</h3><blockquote><p>粘性 Session（Sticky Sessions）<strong>需要配置负载均衡器，使得一个用户的所有请求都路由到一个服务器节点上</strong>，这样就可以把用户的 Session 存放在该服务器节点中。</p><p>缺点：<strong>当服务器节点宕机时，将丢失该服务器节点上的所有 Session</strong>。</p></blockquote><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/MultiNode-StickySessions.jpg"></div><h3 id="session-复制共享" tabindex="-1"><a class="header-anchor" href="#session-复制共享" aria-hidden="true">#</a> Session 复制共享</h3><blockquote><p>Session 复制共享（Session Replication）<strong>在服务器节点之间进行 Session 同步操作</strong>，这样的话用户可以访问任何一个服务器节点。</p><p>缺点：<strong>占用过多内存</strong>；<strong>同步过程占用网络带宽以及服务器处理器时间</strong>。</p></blockquote><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/MultiNode-SessionReplication.jpg"></div><h3 id="基于缓存的-session-共享" tabindex="-1"><a class="header-anchor" href="#基于缓存的-session-共享" aria-hidden="true">#</a> 基于缓存的 session 共享</h3><blockquote><p><strong>使用一个单独的存储服务器存储 Session 数据</strong>，可以存在 MySQL 数据库上，也可以存在 Redis 或者 Memcached 这种内存型数据库。</p><p>缺点：需要去实现存取 Session 的代码。</p></blockquote><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/MultiNode-SpringSession.jpg"></div><h2 id="具体实现" tabindex="-1"><a class="header-anchor" href="#具体实现" aria-hidden="true">#</a> 具体实现</h2><h3 id="jwt-token" tabindex="-1"><a class="header-anchor" href="#jwt-token" aria-hidden="true">#</a> JWT Token</h3><p>使用 JWT Token 储存用户身份，然后再从数据库或者 cache 中获取其他的信息。这样无论请求分配到哪个服务器都无所谓。</p><h3 id="tomcat-redis" tabindex="-1"><a class="header-anchor" href="#tomcat-redis" aria-hidden="true">#</a> tomcat + redis</h3><p>这个其实还挺方便的，就是使用 session 的代码，跟以前一样，还是基于 tomcat 原生的 session 支持即可，然后就是用一个叫做 <code>Tomcat RedisSessionManager</code> 的东西，让所有我们部署的 tomcat 都将 session 数据存储到 redis 即可。</p><p>在 tomcat 的配置文件中配置：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Valve</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.orangefunction.tomcat.redissessions.RedisSessionHandlerValve<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Manager</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.orangefunction.tomcat.redissessions.RedisSessionManager<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name">host</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{redis.host}<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name">port</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{redis.port}<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name">database</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{redis.dbnum}<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name">maxInactiveInterval</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>60<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后指定 redis 的 host 和 port 就 ok 了。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Valve</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.orangefunction.tomcat.redissessions.RedisSessionHandlerValve<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Manager</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.orangefunction.tomcat.redissessions.RedisSessionManager<span class="token punctuation">&quot;</span></span>
	 <span class="token attr-name">sentinelMaster</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mymaster<span class="token punctuation">&quot;</span></span>
	 <span class="token attr-name">sentinels</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;sentinel1-ip&gt;:26379,&lt;sentinel2-ip&gt;:26379,&lt;sentinel3-ip&gt;:26379<span class="token punctuation">&quot;</span></span>
	 <span class="token attr-name">maxInactiveInterval</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>60<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以用上面这种方式基于 redis 哨兵支持的 redis 高可用集群来保存 session 数据，都是 ok 的。</p><h3 id="spring-session-redis" tabindex="-1"><a class="header-anchor" href="#spring-session-redis" aria-hidden="true">#</a> spring session + redis</h3><p>上面那种 tomcat + redis 的方式好用，但是会<strong>严重依赖于 web 容器</strong>，不好将代码移植到其他 web 容器上去，尤其是你要是换了技术栈咋整？比如换成了 spring cloud 或者是 spring boot 之类的呢？</p>`,61),r={href:"https://github.com/spring-projects/spring-session",target:"_blank",rel:"noopener noreferrer"},k=e(`<p>在 pom.xml 中配置：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.session<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-session-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2.1.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>redis.clients<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jedis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.8.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 spring 配置文件中配置：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>redisHttpSessionConfiguration<span class="token punctuation">&quot;</span></span>
     <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.springframework.session.data.redis.config.annotation.web.http.RedisHttpSessionConfiguration<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>maxInactiveIntervalInSeconds<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>600<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jedisPoolConfig<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>redis.clients.jedis.JedisPoolConfig<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>maxTotal<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>maxIdle<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jedisConnectionFactory<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.springframework.data.redis.connection.jedis.JedisConnectionFactory<span class="token punctuation">&quot;</span></span> <span class="token attr-name">destroy-method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>destroy<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hostName<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${redis_hostname}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>port<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${redis_port}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${redis_pwd}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>timeout<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3000<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>usePool<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>poolConfig<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jedisPoolConfig<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 web.xml 中配置：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">&gt;</span></span>springSessionRepositoryFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-class</span><span class="token punctuation">&gt;</span></span>org.springframework.web.filter.DelegatingFilterProxy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-class</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-mapping</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">&gt;</span></span>springSessionRepositoryFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">&gt;</span></span>/*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-mapping</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/test&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/putIntoSession&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">putIntoSession</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">String</span> username<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        request<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;leo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/getFromSession&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getFromSession</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">Model</span> model<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码就是 ok 的，给 spring session 配置基于 redis 来存储 session 数据，然后配置了一个 spring session 的过滤器，这样的话，session 相关操作都会交给 spring session 来管了。接着在代码中，就用原生的 session 操作，就是直接基于 spring sesion 从 redis 中获取数据了。</p><p>实现分布式的会话有很多种方式，我说的只不过是比较常见的几种方式，tomcat + redis 早期比较常用，但是会重耦合到 tomcat 中；近些年，通过 spring session 来实现。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,11),d={href:"https://github.com/L316476844/distributed-session",target:"_blank",rel:"noopener noreferrer"},g={href:"https://juejin.im/post/5cd9037ee51d456e5c5babca",target:"_blank",rel:"noopener noreferrer"},m={href:"https://juejin.im/post/5aede266f265da0ba266e0ef",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.youtube.com/watch?v=I01XMRo2ESg",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.youtube.com/watch?v=QWw7Wd2gUJk",target:"_blank",rel:"noopener noreferrer"},b={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies",target:"_blank",rel:"noopener noreferrer"};function q(S,f){const a=p("ExternalLinkIcon");return i(),c("div",null,[u,s("p",null,[n("所以现在比较好的还是基于 Java 一站式解决方案，也就是 spring。人家 spring 基本上承包了大部分我们需要使用的框架，spirng cloud 做微服务，spring boot 做脚手架，所以用 "),s("a",r,[n("sping session"),t(a)]),n(" 是一个很好的选择。")]),k,s("ul",null,[s("li",null,[s("a",d,[n("集群/分布式环境 Session 的几种策略"),t(a)])]),s("li",null,[s("a",g,[n("你真的了解 Cookie 和 Session 吗"),t(a)])]),s("li",null,[s("a",m,[n("聊一聊 session 和 cookie"),t(a)])]),s("li",null,[s("a",v,[n("YouTube 视频 - What is a cookie?"),t(a)])]),s("li",null,[s("a",h,[n("YouTube 视频 - How cookies can track you (Simply Explained)"),t(a)])]),s("li",null,[s("a",b,[n("MDN HTTP cookies"),t(a)])])])])}const C=o(l,[["render",q],["__file","10.分布式会话.html.vue"]]);export{C as default};
