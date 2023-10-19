import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a,b as e,d as s,e as p}from"./app-a0e98cac.js";const i={},r=p(`<h1 id="tomcat-优化" tabindex="-1"><a class="header-anchor" href="#tomcat-优化" aria-hidden="true">#</a> Tomcat 优化</h1><h2 id="tomcat-启动优化" tabindex="-1"><a class="header-anchor" href="#tomcat-启动优化" aria-hidden="true">#</a> Tomcat 启动优化</h2><p>如果 Tomcat 启动比较慢，可以考虑一些优化点</p><h3 id="清理-tomcat" tabindex="-1"><a class="header-anchor" href="#清理-tomcat" aria-hidden="true">#</a> 清理 Tomcat</h3><ul><li><strong>清理不必要的 Web 应用</strong>：首先我们要做的是删除掉 webapps 文件夹下不需要的工程，一般是 host-manager、example、doc 等这些默认的工程，可能还有以前添加的但现在用不着的工程，最好把这些全都删除掉。</li><li><strong>清理 XML 配置文件</strong>：Tomcat 在启动时会解析所有的 XML 配置文件，解析 XML 较为耗时，所以应该尽量保持配置文件的简洁。</li><li><strong>清理 JAR 文件</strong>：JVM 的类加载器在加载类时，需要查找每一个 JAR 文件，去找到所需要的类。如果删除了不需要的 JAR 文件，查找的速度就会快一些。这里请注意：<strong>Web 应用中的 lib 目录下不应该出现 Servlet API 或者 Tomcat 自身的 JAR</strong>，这些 JAR 由 Tomcat 负责提供。</li><li><strong>清理其他文件</strong>：及时清理日志，删除 logs 文件夹下不需要的日志文件。同样还有 work 文件夹下的 catalina 文件夹，它其实是 Tomcat 把 JSP 转换为 Class 文件的工作目录。有时候我们也许会遇到修改了代码，重启了 Tomcat，但是仍没效果，这时候便可以删除掉这个文件夹，Tomcat 下次启动的时候会重新生成。</li></ul><h3 id="禁止-tomcat-tld-扫描" tabindex="-1"><a class="header-anchor" href="#禁止-tomcat-tld-扫描" aria-hidden="true">#</a> 禁止 Tomcat TLD 扫描</h3><p>Tomcat 为了支持 JSP，在应用启动的时候会扫描 JAR 包里面的 TLD 文件，加载里面定义的标签库。所以在 Tomcat 的启动日志里，你可能会碰到这种提示：</p><blockquote><p>At least one JAR was scanned for TLDs yet contained no TLDs. Enable debug logging for this logger for a complete list of JARs that were scanned but no TLDs were found in them. Skipping unneeded JARs during scanning can improve startup time and JSP compilation time.</p></blockquote><p>Tomcat 的意思是，我扫描了你 Web 应用下的 JAR 包，发现 JAR 包里没有 TLD 文件。我建议配置一下 Tomcat 不要去扫描这些 JAR 包，这样可以提高 Tomcat 的启动速度，并节省 JSP 编译时间。</p><p>如何配置不去扫描这些 JAR 包呢，这里分两种情况：</p><ul><li><p>如果你的项目没有使用 JSP 作为 Web 页面模板，而是使用 Velocity 之类的模板引擎，你完全可以把 TLD 扫描禁止掉。方法是，找到 Tomcat 的<code>conf/</code>目录下的<code>context.xml</code>文件，在这个文件里 Context 标签下，加上<strong>JarScanner</strong>和<strong>JarScanFilter</strong>子标签，像下面这样。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Context</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>JarScanner</span> <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>JarScanFilter</span> <span class="token attr-name">defaultTldScan</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">defaultpluggabilityScan</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>JarScanner</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Context</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果你的项目使用了 JSP 作为 Web 页面模块，意味着 TLD 扫描无法避免，但是我们可以通过配置来告诉 Tomcat，只扫描那些包含 TLD 文件的 JAR 包。方法是，找到 Tomcat 的<code>conf/</code>目录下的<code>catalina.properties</code>文件，在这个文件里的 jarsToSkip 配置项中，加上你的 JAR 包。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tomcat.util.scan.StandardJarScanFilter.jarsToSkip=xxx.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="关闭-websocket-支持" tabindex="-1"><a class="header-anchor" href="#关闭-websocket-支持" aria-hidden="true">#</a> 关闭 WebSocket 支持</h3><p>Tomcat 会扫描 WebSocket 注解的 API 实现，比如 <code>@ServerEndpoint</code> 注解的类。如果不需要使用 WebSockets 就可以关闭它。具体方法是，找到 Tomcat 的 <code>conf/</code> 目录下的 <code>context.xml</code> 文件，给 <code>Context</code> 标签加一个 <strong><code>containerSciFilter</code></strong> 的属性：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Context</span> <span class="token attr-name">containerSciFilter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.apache.tomcat.websocket.server.WsSci<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Context</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更进一步，如果你不需要 WebSockets 这个功能，你可以把 Tomcat <code>lib</code> 目录下的 <code>websocket-api.jar</code> 和 <code>tomcat-websocket.jar</code> 这两个 JAR 文件删除掉，进一步提高性能。</p><h3 id="关闭-jsp-支持" tabindex="-1"><a class="header-anchor" href="#关闭-jsp-支持" aria-hidden="true">#</a> 关闭 JSP 支持</h3><p>如果不需要使用 JSP，可以关闭 JSP 功能：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Context</span> <span class="token attr-name">containerSciFilter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.apache.jasper.servlet.JasperInitializer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Context</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要同时关闭 WebSocket 和 Jsp，可以这样配置：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Context</span> <span class="token attr-name">containerSciFilter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.apache.tomcat.websocket.server.WsSci | org.apache.jasper.servlet.JasperInitializer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Context</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="禁止扫描-servlet-注解" tabindex="-1"><a class="header-anchor" href="#禁止扫描-servlet-注解" aria-hidden="true">#</a> 禁止扫描 Servlet 注解</h3><p>Servlet 3.0 引入了注解 Servlet，Tomcat 为了支持这个特性，会在 Web 应用启动时扫描你的类文件，因此如果你没有使用 Servlet 注解这个功能，可以告诉 Tomcat 不要去扫描 Servlet 注解。具体配置方法是，在你的 Web 应用的<code>web.xml</code>文件中，设置<code>&lt;web-app&gt;</code>元素的属性<code>metadata-complete=&quot;true&quot;</code>，像下面这样。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>web-app</span> <span class="token attr-name">metadata-complete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>web-app</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>metadata-complete</code> 的意思是，<code>web.xml</code> 里配置的 Servlet 是完整的，不需要再去库类中找 Servlet 的定义。</p><h3 id="配置-web-fragment-扫描" tabindex="-1"><a class="header-anchor" href="#配置-web-fragment-扫描" aria-hidden="true">#</a> 配置 Web-Fragment 扫描</h3><p>Servlet 3.0 还引入了“Web 模块部署描述符片段”的 <code>web-fragment.xml</code>，这是一个部署描述文件，可以完成 <code>web.xml</code> 的配置功能。而这个 <code>web-fragment.xml</code> 文件必须存放在 JAR 文件的 <code>META-INF</code> 目录下，而 JAR 包通常放在 <code>WEB-INF/lib</code> 目录下，因此 Tomcat 需要对 JAR 文件进行扫描才能支持这个功能。</p><p>可以通过配置 <code>web.xml</code> 里面的 <code>&lt;absolute-ordering&gt;</code> 元素直接指定了哪些 JAR 包需要扫描 <code>web fragment</code>，如果 <code>&lt;absolute-ordering/&gt;</code> 元素是空的， 则表示不需要扫描，像下面这样。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>web-app</span> <span class="token attr-name">metadata-complete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>absolute-ordering</span> <span class="token punctuation">/&gt;</span></span>
...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>web-app</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="随机数熵源优化" tabindex="-1"><a class="header-anchor" href="#随机数熵源优化" aria-hidden="true">#</a> 随机数熵源优化</h3><p>Tomcat 7 以上的版本依赖 Java 的 SecureRandom 类来生成随机数，比如 Session ID。而 JVM 默认使用阻塞式熵源（<code>/dev/random</code>）， 在某些情况下就会导致 Tomcat 启动变慢。当阻塞时间较长时， 你会看到这样一条警告日志：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;DATE&gt; org.apache.catalina.util.SessionIdGenerator createSecureRandom
INFO: Creation of SecureRandom instance for session ID generation using [SHA1PRNG] took [8152] milliseconds.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>解决方案是通过设置，让 JVM 使用非阻塞式的熵源。</p><p>我们可以设置 JVM 的参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-Djava.security.egd=file:/dev/./urandom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者是设置 <code>java.security</code> 文件，位于 <code>$JAVA_HOME/jre/lib/security</code> 目录之下： <code>securerandom.source=file:/dev/./urandom</code></p><p>这里请你注意，<code>/dev/./urandom</code> 中间有个 <code>./</code> 的原因是 Oracle JRE 中的 Bug，Java 8 里面的 SecureRandom 类已经修正这个 Bug。 阻塞式的熵源（<code>/dev/random</code>）安全性较高， 非阻塞式的熵源（<code>/dev/./urandom</code>）安全性会低一些，因为如果你对随机数的要求比较高， 可以考虑使用硬件方式生成熵源。</p><h3 id="并行启动多个-web-应用" tabindex="-1"><a class="header-anchor" href="#并行启动多个-web-应用" aria-hidden="true">#</a> 并行启动多个 Web 应用</h3><p>Tomcat 启动的时候，默认情况下 Web 应用都是一个一个启动的，等所有 Web 应用全部启动完成，Tomcat 才算启动完毕。如果在一个 Tomcat 下有多个 Web 应用，为了优化启动速度，你可以配置多个应用程序并行启动，可以通过修改 <code>server.xml</code> 中 Host 元素的 <code>startStopThreads</code> 属性来完成。<code>startStopThreads</code> 的值表示你想用多少个线程来启动你的 Web 应用，如果设成 0 表示你要并行启动 Web 应用，像下面这样的配置。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Engine</span> <span class="token attr-name">startStopThreads</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Host</span> <span class="token attr-name">startStopThreads</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Host</span><span class="token punctuation">&gt;</span></span>
    ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Engine</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，Engine 元素里也配置了这个参数，这意味着如果你的 Tomcat 配置了多个 Host（虚拟主机），Tomcat 会以并行的方式启动多个 Host。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,41),d=a("strong",null,"官方",-1),u={href:"http://tomcat.apache.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"http://wiki.apache.org/tomcat/FrontPage",target:"_blank",rel:"noopener noreferrer"},g={href:"http://tomee.apache.org/",target:"_blank",rel:"noopener noreferrer"},k=a("strong",null,"教程",-1),v={href:"https://time.geekbang.org/column/intro/100027701",target:"_blank",rel:"noopener noreferrer"};function b(h,x){const n=o("ExternalLinkIcon");return c(),l("div",null,[r,a("ul",null,[a("li",null,[d,a("ul",null,[a("li",null,[a("a",u,[e("Tomcat 官方网站"),s(n)])]),a("li",null,[a("a",m,[e("Tomcat Wiki"),s(n)])]),a("li",null,[a("a",g,[e("Tomee 官方网站"),s(n)])])])]),a("li",null,[k,a("ul",null,[a("li",null,[a("a",v,[e("深入拆解 Tomcat & Jetty"),s(n)])])])])])])}const J=t(i,[["render",b],["__file","04.Tomcat优化.html.vue"]]);export{J as default};
