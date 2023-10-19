import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as s,a as e,b as t,d as i,e as r}from"./app-a0e98cac.js";const d={},h=r(`<h1 id="缓存基本原理" tabindex="-1"><a class="header-anchor" href="#缓存基本原理" aria-hidden="true">#</a> 缓存基本原理</h1><blockquote><p>缓存是一种利用空间换时间的设计，其目标就是<strong>更快</strong>、<strong>更近</strong>。</p></blockquote><h2 id="缓存简介" tabindex="-1"><a class="header-anchor" href="#缓存简介" aria-hidden="true">#</a> 缓存简介</h2><h3 id="为什么需要缓存" tabindex="-1"><a class="header-anchor" href="#为什么需要缓存" aria-hidden="true">#</a> 为什么需要缓存</h3><p>众所周知，当今是一个互联网时代，而互联网应用几乎遍及我们日常生活的方方面面。一般而言，一个互联网应用的请求/响应流程会有以下几个主要流程：</p><ul><li>客户端发起请求，请求经过网络 I/O，分发到服务层。</li><li>服务层可能有多级服务，请求需要被多个服务层层处理。</li><li>不同服务根据请求进行计算时，可能依赖于不同数据库的数据，需要通过网络 I/O 读写数据库。</li></ul><p>显然，这一套流程下来，可能需要消耗大量的计算机资源，并且响应时间也可能很久。如果并发请求量很大的话，可能会进一步加剧这种问题。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220224173150.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>为了解决以上问题，最直接的方式就是引入缓存。缓存可以作用于请求/响应流程的任意环节，并有效减少后续环节的执行次数，从而大大提升性能。</p><p>实际上，缓存作为性能优化的第一手段，被广泛应用于计算机的硬件、软件领域。</p><h3 id="什么是缓存" tabindex="-1"><a class="header-anchor" href="#什么是缓存" aria-hidden="true">#</a> 什么是缓存</h3><p><strong>缓存就是数据交换的缓冲区，用于将频繁访问的数据暂存</strong>。<strong>缓存的本质是一个内存 Hash</strong>。</p><p>缓存的本质是一种利用空间换时间的设计：牺牲一定的数据实时性，使得访问<strong>更快</strong>、<strong>更近</strong>：</p><ul><li>将数据存储到读取速度<strong>更快</strong>的存储（设备）；</li><li>将数据存储到<strong>离应用最近</strong>的位置；</li><li>将数据存储到<strong>离用户最近</strong>的位置。</li></ul><p>缓存是用于存储数据的硬件或软件的组成部分，以使得后续更快访问相应的数据。缓存中的数据可能是提前计算好的结果、数据的副本等。典型的应用场景：有 cpu cache, 磁盘 cache 等。本文中提及到缓存主要是指互联网应用中所使用的缓存组件。</p><p><strong>缓存命中率</strong>是缓存的重要度量指标，命中率越高越好。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>缓存命中率 = 从缓存中读取次数 / 总读取次数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="何时需要缓存" tabindex="-1"><a class="header-anchor" href="#何时需要缓存" aria-hidden="true">#</a> 何时需要缓存</h3><p>引入缓存，会增加系统的复杂度，并牺牲一定的数据实时性。所以，引入缓存前，需要先权衡是否值得，考量点如下：</p><ul><li><strong>CPU 开销</strong> - 如果应用某个计算需要消耗大量 CPU，可以考虑缓存其计算结果。典型场景：复杂的、频繁调用的正则计算；分布式计算中间状态等。</li><li><strong>IO 开销</strong> - 如果数据库连接池比较繁忙，可以考虑缓存其查询结果。</li></ul><p>在数据层引入缓存，有以下几个好处：</p><ul><li>提升数据读取速度。</li><li>提升系统扩展能力，通过扩展缓存，提升系统承载能力。</li><li>降低存储成本，Cache+DB 的方式可以承担原有需要多台 DB 才能承担的请求量，节省机器成本。</li></ul><h3 id="缓存的基本原理" tabindex="-1"><a class="header-anchor" href="#缓存的基本原理" aria-hidden="true">#</a> 缓存的基本原理</h3><p>根据业务场景，通常缓存有以下几种使用方式：</p><ul><li>懒汉式(读时触发)：先查询 DB 里的数据, 然后把相关的数据写入 Cache。</li><li>饥饿式(写时触发)：写入 DB 后, 然后把相关的数据也写入 Cache。</li><li>定期刷新：适合周期性的跑数据的任务，或者列表型的数据，而且不要求绝对实时性。</li></ul><h3 id="缓存淘汰策略" tabindex="-1"><a class="header-anchor" href="#缓存淘汰策略" aria-hidden="true">#</a> 缓存淘汰策略</h3><p>缓存淘汰的类型：</p><ul><li><strong>基于空间</strong> - 设置缓存空间大小。</li><li><strong>基于容量</strong> - 设置缓存存储记录数。</li><li><strong>基于时间</strong><ul><li>TTL（Time To Live，即存活期）缓存数据从创建到过期的时间。</li><li>TTI（Time To Idle，即空闲期）缓存数据多久没被访问的时间。</li></ul></li></ul><p>缓存淘汰算法：</p><ul><li><strong>FIFO (first in first out)</strong> - <strong>先进先出</strong>。在这种淘汰算法中，先进入缓存的会先被淘汰。这种可谓是最简单的了，但是会导致我们命中率很低。试想一下我们如果有个访问频率很高的数据是所有数据第一个访问的，而那些不是很高的是后面再访问的，那这样就会把我们的首个数据但是他的访问频率很高给挤出。</li><li><strong>LRU (least recently used)</strong> - <strong>最近最少使用算法</strong>。这种算法避免了 <strong>FIFO</strong> 命中率不高的问题：每次访问数据都会将其放在我们的队尾，如果需要淘汰数据，就只需要淘汰队首即可。但是这个算法依然有缺点：假设，缓存只保留 1 分钟以内的热点数据。如果有个数据在 1 个小时的前 59 分钟访问了 1 万次（可见这是个热点数据），最后一分钟没有任何访问；但是，其他的数据有被访问，就会导致这个热点数据被淘汰。</li><li><strong>LFU (less frequently used)</strong> - <strong>最近最少频率使用</strong>。在这种算法中又对上面进行了优化，利用额外的空间记录每个数据的使用频率，然后选出频率最低进行淘汰。这样就避免了 LRU 不能处理时间段的问题。</li></ul><p>这三种缓存淘汰算法，实现复杂度一个比一个高，同样的命中率也是一个比一个好。而我们一般来说选择的方案居中即可，即实现成本不是太高，而命中率也还行的 <strong>LRU</strong>。</p><h2 id="缓存的分类" tabindex="-1"><a class="header-anchor" href="#缓存的分类" aria-hidden="true">#</a> 缓存的分类</h2><p>缓存从部署角度，可以分为客户端缓存和服务端缓存。</p><p><strong>客户端缓存</strong></p><ul><li><strong>Http 缓存</strong>：HTTP/1.1 中的 <code>Cache-Control</code>、HTTP/1 中的 <code>Expires</code></li><li><strong>浏览器缓存</strong>：HTML5 提供的 SessionStorage 和 LocalStorage、Cookie</li><li><strong>APP 缓存</strong><ul><li>Android</li><li>IOS</li></ul></li></ul><p><strong>服务端缓存</strong></p><ul><li><strong>CDN 缓存</strong> - 存放 HTML、CSS、JS 等静态资源。</li><li><strong>反向代理缓存</strong> - 动静分离，只缓存用户请求的静态资源。</li><li><strong>数据库缓存</strong> - 数据库（如 Mysql）自身一般也有缓存，但因为命中率和更新频率问题，不推荐使用。</li><li><strong>进程内缓存</strong> - 缓存应用字典等常用数据。</li><li><strong>分布式缓存</strong> - 缓存数据库中的热点数据。</li></ul><blockquote><p>其中，CDN 缓存、反向代理缓存、数据库缓存一般由专职人员维护（运维、DBA）。</p><p>后端开发一般聚焦于进程内缓存、分布式缓存。</p></blockquote><h3 id="http-缓存" tabindex="-1"><a class="header-anchor" href="#http-缓存" aria-hidden="true">#</a> HTTP 缓存</h3><ol><li><p>浏览器发送请求前，根据请求头的 <code>expires</code> (HTTP/1) 和 <code>cache-control</code> (HTTP/1.1) 判断是否命中（包括是否过期）强缓存策略，</p><ol><li>如果命中，直接从缓存获取资源，并不会发送请求。</li><li>如果没有命中，则进入下一步。</li></ol></li><li><p>没有命中强缓存规则，浏览器会发送请求，根据请求头的 <code>last-modified</code> 和 <code>etag</code> 判断是否命中协商缓存，如果命中，直接从缓存获取资源。如果没有命中，则进入下一步。</p></li><li><p>如果前两步都没有命中，则直接从服务端获取资源。</p></li></ol><h3 id="cdn-缓存" tabindex="-1"><a class="header-anchor" href="#cdn-缓存" aria-hidden="true">#</a> CDN 缓存</h3><blockquote><p><strong>CDN 将数据缓存到离用户物理距离最近的服务器，使得用户可以就近获取请求内容。CDN 一般缓存静态资源文件（页面，脚本，图片，视频，文件等）</strong>。</p><p>国内网络异常复杂，跨运营商的网络访问会很慢。为了解决跨运营商或各地用户访问问题，可以在重要的城市，部署 CDN 应用。使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。</p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/1559138689425.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="cdn-原理" tabindex="-1"><a class="header-anchor" href="#cdn-原理" aria-hidden="true">#</a> CDN 原理</h4><p>CDN 的基本原理是广泛采用各种缓存服务器，将这些缓存服务器分布到用户访问相对集中的地区或网络中，在用户访问网站时，利用全局负载技术将用户的访问指向距离最近的工作正常的缓存服务器上，由缓存服务器直接响应用户请求。</p><p>（1）未部署 CDN 应用前的网络路径：</p><ul><li>请求：本机网络（局域网）=&gt; 运营商网络 =&gt; 应用服务器机房</li><li>响应：应用服务器机房 =&gt; 运营商网络 =&gt; 本机网络（局域网）</li></ul><p>在不考虑复杂网络的情况下，从请求到响应需要经过 3 个节点，6 个步骤完成一次用户访问操作。</p><p>（2）部署 CDN 应用后网络路径：</p><ul><li>请求：本机网络（局域网） =&gt; 运营商网络</li><li>响应：运营商网络 =&gt; 本机网络（局域网）</li></ul><p>在不考虑复杂网络的情况下，从请求到响应需要经过 2 个节点，2 个步骤完成一次用户访问操作。</p><p>与不部署 CDN 服务相比，减少了 1 个节点，4 个步骤的访问。极大的提高了系统的响应速度。</p><h4 id="cdn-特点" tabindex="-1"><a class="header-anchor" href="#cdn-特点" aria-hidden="true">#</a> CDN 特点</h4><p><strong>优点</strong></p><ul><li><strong>本地 Cache 加速</strong> - 提升访问速度，尤其含有大量图片和静态页面站点；</li><li><strong>实现跨运营商的网络加速</strong> - 消除了不同运营商之间互联的瓶颈造成的影响，实现了跨运营商的网络加速，保证不同网络中的用户都能得到良好的访问质量；</li><li><strong>远程加速</strong> - 远程访问用户根据 DNS 负载均衡技术智能自动选择 Cache 服务器，选择最快的 Cache 服务器，加快远程访问的速度；</li><li><strong>带宽优化</strong> - 自动生成服务器的远程 Mirror（镜像）cache 服务器，远程用户访问时从 cache 服务器上读取数据，减少远程访问的带宽、分担网络流量、减轻原站点 WEB 服务器负载等功能。</li><li><strong>集群抗攻击</strong> - 广泛分布的 CDN 节点加上节点之间的智能冗余机制，可以有效地预防黑客入侵以及降低各种 D.D.o.S 攻击对网站的影响，同时保证较好的服务质量。</li></ul><p><strong>缺点</strong></p><ul><li><strong>不适宜缓存动态资源</strong><ul><li>解决方案：主要缓存静态资源，动态资源建立多级缓存或准实时同步；</li></ul></li><li><strong>存在数据的一致性问题</strong><ul><li>解决方案（主要是在性能和数据一致性二者间寻找一个平衡）</li><li>设置缓存失效时间（1 个小时，过期后同步数据）。</li><li>针对资源设置版本号。</li></ul></li></ul><h3 id="反向代理缓存" tabindex="-1"><a class="header-anchor" href="#反向代理缓存" aria-hidden="true">#</a> 反向代理缓存</h3><blockquote><p><strong>反向代理（Reverse Proxy）方式是指以代理服务器来接受 internet 上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给 internet 上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。</strong></p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/web/nginx/reverse-proxy.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="反向代理缓存原理" tabindex="-1"><a class="header-anchor" href="#反向代理缓存原理" aria-hidden="true">#</a> 反向代理缓存原理</h4><p>反向代理位于应用服务器同一网络，处理所有对 WEB 服务器的请求。</p><p>反向代理缓存的原理：</p><ul><li>如果用户请求的页面在代理服务器上有缓存的话，代理服务器直接将缓存内容发送给用户。</li><li>如果没有缓存则先向 WEB 服务器发出请求，取回数据，本地缓存后再发送给用户。</li></ul><p>这种方式通过降低向 WEB 服务器的请求数，从而降低了 WEB 服务器的负载。</p><p><strong>反向代理缓存一般针对的是静态资源，而将动态资源请求转发到应用服务器处理</strong>。常用的缓存应用服务器有 Varnish，Ngnix，Squid。</p><h4 id="反向代理缓存比较" tabindex="-1"><a class="header-anchor" href="#反向代理缓存比较" aria-hidden="true">#</a> 反向代理缓存比较</h4><p>常用的代理缓存有 Varnish，Squid，Ngnix，简单比较如下：</p><ul><li>Varnish 和 Squid 是专业的 cache 服务，Ngnix 需要第三方模块支持；</li><li>Varnish 采用内存型缓存，避免了频繁在内存、磁盘中交换文件，性能比 Squid 高；</li><li>Varnish 由于是内存 cache，所以对小文件如 css、js、小图片的支持很棒，后端的持久化缓存可以采用的是 Squid 或 ATS；</li><li>Squid 功能全而大，适合于各种静态的文件缓存，一般会在前端挂一个 HAProxy 或 Ngnix 做负载均衡跑多个实例；</li><li>Nginx 采用第三方模块 ncache 做的缓冲，性能基本达到 Varnish，一般作为反向代理使用，可以实现简单的缓存。</li></ul><h2 id="进程内缓存" tabindex="-1"><a class="header-anchor" href="#进程内缓存" aria-hidden="true">#</a> 进程内缓存</h2><blockquote><p>进程内缓存是指应用内部的缓存，标准的分布式系统，一般有多级缓存构成。本地缓存是离应用最近的缓存，一般可以将数据缓存到硬盘或内存。</p></blockquote><ul><li><code>硬盘缓存</code> - 将数据缓存到硬盘中，读取时从硬盘读取。原理是直接读取本机文件，减少了网络传输消耗，比通过网络读取数据库速度更快。可以应用在对速度要求不是很高，但需要大量缓存存储的场景。</li><li><code>内存缓存</code> - 直接将数据存储到本机内存中，通过程序直接维护缓存对象，是访问速度最快的方式。</li></ul><p>常见的本地缓存实现方案：HashMap、Guava Cache、Caffeine、Ehcache。</p><h3 id="concurrenthashmap" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap" aria-hidden="true">#</a> ConcurrentHashMap</h3><p>最简单的进程内缓存可以通过 JDK 自带的 <code>HashMap</code> 或 <code>ConcurrentHashMap</code> 实现。</p><p>适用场景：<strong>不需要淘汰的缓存数据</strong>。</p><p>缺点：无法进行缓存淘汰，内存会无限制的增长。</p><h3 id="lruhashmap" tabindex="-1"><a class="header-anchor" href="#lruhashmap" aria-hidden="true">#</a> LRUHashMap</h3><p>可以通过<strong>继承 <code>LinkedHashMap</code> 来实现一个简单的 <code>LRUHashMap</code></strong>。重写 <code>removeEldestEntry</code> 方法，即可完成一个简单的最近最少使用算法。</p><p>缺点：</p><ul><li>锁竞争严重，性能比较低。</li><li>不支持过期时间</li><li>不支持自动刷新</li></ul><h3 id="guava-cache" tabindex="-1"><a class="header-anchor" href="#guava-cache" aria-hidden="true">#</a> Guava Cache</h3><p>解决了 <code>LRUHashMap</code> 中的几个缺点。</p><p>Guava Cache 采用了类似 <code>ConcurrentHashMap</code> 的思想，分段加锁，减少锁竞争。</p><p>Guava Cache 对于过期的 Entry 并没有马上过期(也就是并没有后台线程一直在扫)，而是通过进行读写操作的时候进行过期处理，这样做的好处是避免后台线程扫描的时候进行全局加锁。</p><p>直接通过查询，判断其是否满足刷新条件，进行刷新。</p><h3 id="caffeine" tabindex="-1"><a class="header-anchor" href="#caffeine" aria-hidden="true">#</a> Caffeine</h3><p>Caffeine 实现了 W-TinyLFU(<strong>LFU</strong> + <strong>LRU</strong> 算法的变种)，其<strong>命中率和读写吞吐量大大优于 Guava Cache</strong>。</p>`,88),c={href:"https://juejin.im/post/5b7593496fb9a009b62904fa#comment",target:"_blank",rel:"noopener noreferrer"},g=r('<h3 id="ehcache" tabindex="-1"><a class="header-anchor" href="#ehcache" aria-hidden="true">#</a> Ehcache</h3><p>EhCache 是一个纯 Java 的进程内缓存框架，具有快速、精干等特点，是 Hibernate 中默认的 CacheProvider。</p><p>优点</p><ul><li>快速、简单</li><li>支持多种缓存策略：LRU、LFU、FIFO 淘汰算法</li><li>缓存数据有两级：内存和磁盘，因此无需担心容量问题</li><li>缓存数据会在虚拟机重启的过程中写入磁盘</li><li>可以通过 RMI、可插入 API 等方式进行分布式缓存</li><li>具有缓存和缓存管理器的侦听接口</li><li>支持多缓存管理器实例，以及一个实例的多个缓存区域</li><li>提供 Hibernate 的缓存实现</li></ul><p>缺点</p><ul><li><strong>使用磁盘 Cache 的时候非常占用磁盘空间</strong></li><li><strong>不保证数据的安全</strong></li><li>虽然支持分布式缓存，但效率不高（通过组播方式，在不同节点之间同步数据）。</li></ul><h3 id="进程内缓存对比" tabindex="-1"><a class="header-anchor" href="#进程内缓存对比" aria-hidden="true">#</a> 进程内缓存对比</h3><p>常用进程内缓存技术对比：</p><table><thead><tr><th>比较项</th><th>ConcurrentHashMap</th><th>LRUMap</th><th>Ehcache</th><th>Guava Cache</th><th>Caffeine</th></tr></thead><tbody><tr><td>读写性能</td><td>很好，分段锁</td><td>一般，全局加锁</td><td>好</td><td>好，需要做淘汰操作</td><td>很好</td></tr><tr><td>淘汰算法</td><td>无</td><td>LRU，一般</td><td>支持多种淘汰算法,LRU,LFU,FIFO</td><td>LRU，一般</td><td>W-TinyLFU, 很好</td></tr><tr><td>功能丰富程度</td><td>功能比较简单</td><td>功能比较单一</td><td>功能很丰富</td><td>功能很丰富，支持刷新和虚引用等</td><td>功能和 Guava Cache 类似</td></tr><tr><td>工具大小</td><td>jdk 自带类，很小</td><td>基于 LinkedHashMap，较小</td><td>很大，最新版本 1.4MB</td><td>是 Guava 工具类中的一个小部分，较小</td><td>一般，最新版本 644KB</td></tr><tr><td>是否持久化</td><td>否</td><td>否</td><td>是</td><td>否</td><td>否</td></tr><tr><td>是否支持集群</td><td>否</td><td>否</td><td>是</td><td>否</td><td>否</td></tr></tbody></table><ul><li><strong><code>ConcurrentHashMap</code></strong> - 比较适合缓存比较固定不变的元素，且缓存的数量较小的。虽然从上面表格中比起来有点逊色，但是其由于是 JDK 自带的类，在各种框架中依然有大量的使用，比如我们可以用来缓存我们反射的 Method，Field 等等；也可以缓存一些链接，防止其重复建立。在 Caffeine 中也是使用的 <code>ConcurrentHashMap</code> 来存储元素。</li><li><strong><code>LRUMap</code></strong> - 如果不想引入第三方包，又想使用淘汰算法淘汰数据，可以使用这个。</li><li><strong><code>Ehcache</code></strong> - 由于其 jar 包很大，较重量级。对于需要持久化和集群的一些功能的，可以选择 Ehcache。需要注意的是，虽然 Ehcache 也支持分布式缓存，但是由于其节点间通信方式为 rmi，表现不如 Redis，所以一般不建议用它来作为分布式缓存。</li><li><strong><code>Guava Cache</code></strong> - Guava 这个 jar 包在很多 Java 应用程序中都有大量的引入，所以很多时候其实是直接用就好了，并且其本身是轻量级的而且功能较为丰富，在不了解 Caffeine 的情况下可以选择 Guava Cache。</li><li><strong><code>Caffeine</code></strong> - 其在命中率，读写性能上都比 Guava Cache 好很多，并且其 API 和 Guava cache 基本一致，甚至会多一点。在真实环境中使用 Caffeine，取得过不错的效果。</li></ul><p>总结一下：<strong>如果不需要淘汰算法则选择 <code>ConcurrentHashMap</code>，如果需要淘汰算法和一些丰富的 API，推荐选择 <code>Caffeine</code></strong>。</p><h2 id="分布式缓存" tabindex="-1"><a class="header-anchor" href="#分布式缓存" aria-hidden="true">#</a> 分布式缓存</h2><blockquote><p><strong>分布式缓存解决了进程内缓存最大的问题：如果应用是分布式系统，节点之间无法共享彼此的进程内缓存</strong>。</p><p>分布式缓存的应用场景：</p><ul><li>缓存经过复杂计算得到的数据</li><li>缓存系统中频繁访问的热点数据，减轻数据库压力</li></ul></blockquote><p>不同分布式缓存的实现原理往往有比较大的差异。本文主要针对 Memcached 和 Redis 进行说明。</p><h3 id="memcached" tabindex="-1"><a class="header-anchor" href="#memcached" aria-hidden="true">#</a> Memcached</h3>',15),p={href:"https://memcached.org/",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,"简单的说就是：将数据缓存到内存中，然后从内存中读取，从而大大提高读取速度。",-1),f=r('<h4 id="memcached-特性" tabindex="-1"><a class="header-anchor" href="#memcached-特性" aria-hidden="true">#</a> Memcached 特性</h4><ul><li><strong>使用物理内存作为缓存区，可独立运行在服务器上</strong>。每个进程最大 2G，如果想缓存更多的数据，可以开辟更多的 Memcached 进程（不同端口）或者使用分布式 Memcached 进行缓存，将数据缓存到不同的物理机或者虚拟机上。</li><li><strong>使用 key-value 的方式来存储数据</strong>。这是一种单索引的结构化数据组织形式，可使数据项查询时间复杂度为 O(1)。</li><li><strong>协议简单，基于文本行的协议</strong>。直接通过 telnet 在 Memcached 服务器上可进行存取数据操作，简单，方便多种缓存参考此协议；</li><li><strong>基于 libevent 高性能通信</strong>。Libevent 是一套利用 C 开发的程序库，它将 BSD 系统的 kqueue,Linux 系统的 epoll 等事件处理功能封装成一个接口，与传统的 select 相比，提高了性能。</li><li><strong>分布式能力取决于 Memcached 客户端，服务器之间互不通信</strong>。各个 Memcached 服务器之间互不通信，各自独立存取数据，不共享任何信息。服务器并不具有分布式功能，分布式部署取决于 Memcached 客户端。</li><li><strong>采用 LRU 缓存淘汰策略</strong>。在 Memcached 内存储数据项时，可以指定它在缓存的失效时间，默认为永久。当 Memcached 服务器用完分配的内时，失效的数据被首先替换，然后也是最近未使用的数据。在 LRU 中，Memcached 使用的是一种 Lazy Expiration 策略，自己不会监控存入的 key/vlue 对是否过期，而是在获取 key 值时查看记录的时间戳，检查 key/value 对空间是否过期，这样可减轻服务器的负载。</li><li><strong>内置了一套高效的内存管理算法</strong>。这套内存管理效率很高，而且不会造成内存碎片，但是它最大的缺点就是会导致空间浪费。当内存满后，通过 LRU 算法自动删除不使用的缓存。</li><li><strong>不支持持久化</strong>。Memcached 没有考虑数据的容灾问题，重启服务，所有数据会丢失。</li></ul><h4 id="memcached-工作原理" tabindex="-1"><a class="header-anchor" href="#memcached-工作原理" aria-hidden="true">#</a> Memcached 工作原理</h4><p>（1）内存管理</p><p>Memcached 利用 <strong>slab allocation</strong> 机制来分配和管理内存，它按照预先规定的大小，将分配的内存分割成特定长度的内存块，再把尺寸相同的内存块分成组，数据在存放时，根据键值 大小去匹配 slab 大小，找就近的 slab 存放，所以存在空间浪费现象。</p><p>这套内存管理效率很高，而且不会造成内存碎片，但是它最大的缺点就是会导致空间浪费。</p><p>（2）缓存淘汰策略</p><p>Memcached 的缓存淘汰策略是 <strong>LRU</strong> + 到期失效策略。</p><p>当你在 Memcached 内存储数据项时，你有可能会指定它在缓存的失效时间，默认为永久。当 Memcached 服务器用完分配的内时，失效的数据被首先替换，然后是最近未使用的数据。</p><p>在 LRU 中，Memcached 使用的是一种 Lazy Expiration 策略：<strong>Memcached 不会监控存入的 key/vlue 对是否过期</strong>，而是在获取 key 值时查看记录的时间戳，<strong>检查 key/value 对空间是否过期</strong>，这样可减轻服务器的负载。</p><p>（3）分区</p><p>Memcached 服务器之间彼此不通信，它的分布式能力是依赖客户端来实现。</p><p>具体来说，就是在客户端实现一种算法，根据 key 来计算出数据应该向哪个服务器节点读/写。</p><p>而这种选取集群节点的算法常见的有三种：</p><ul><li><strong>哈希取余算法</strong> - 使用公式：<code>hash（key）% N</code> 计算出 <strong>哈希值</strong> 来决定数据映射到哪一个节点。</li><li><strong>一致性哈希算法</strong> - 可以很好的解决 <strong>稳定性问题</strong>，可以将所有的 <strong>存储节点</strong> 排列在 <strong>首尾相接</strong> 的 <code>Hash</code> 环上，每个 <code>key</code> 在计算 <code>Hash</code> 后会 <strong>顺时针</strong> 找到 <strong>临接</strong> 的 <strong>存储节点</strong> 存放。而当有节点 <strong>加入</strong> 或 <strong>退出</strong> 时，仅影响该节点在 <code>Hash</code> 环上 <strong>顺时针相邻</strong> 的 <strong>后续节点</strong>。</li><li><strong>虚拟 Hash 槽算法</strong> - 使用 <strong>分散度良好</strong> 的 <strong>哈希函数</strong> 把所有数据 <strong>映射</strong> 到一个 <strong>固定范围</strong> 的 <strong>整数集合</strong> 中，整数定义为 <strong>槽</strong>（<code>slot</code>），这个范围一般 <strong>远远大于</strong> 节点数。<strong>槽</strong> 是集群内 <strong>数据管理</strong> 和 <strong>迁移</strong> 的 <strong>基本单位</strong>。采用 <strong>大范围槽</strong> 的主要目的是为了方便 <strong>数据拆分</strong> 和 <strong>集群扩展</strong>。每个节点会负责 <strong>一定数量的槽</strong>。</li></ul><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h3><blockquote><p>Redis 是一个开源（BSD 许可）的，基于内存的，多数据结构存储系统。可以用作数据库、缓存和消息中间件。</p><p>Redis 还可以使用客户端分片来扩展写性能。内置了 复制（replication），LUA 脚本（Lua scripting），LRU 驱动事件（LRU eviction），事务（transactions） 和不同级别的 磁盘持久化（persistence）， 并通过 Redis 哨兵（Sentinel）和自动分区（Cluster）提供高可用性（high availability）。</p></blockquote><h4 id="redis-特性" tabindex="-1"><a class="header-anchor" href="#redis-特性" aria-hidden="true">#</a> Redis 特性</h4><ul><li><p>支持多种数据类型 - string、hash、list、set、sorted set。</p></li><li><p>支持多种数据淘汰策略</p><ul><li><strong>volatile-lru</strong> - 从已设置过期时间的数据集中挑选最近最少使用的数据淘汰</li><li><strong>volatile-ttl</strong> - 从已设置过期时间的数据集中挑选将要过期的数据淘汰</li><li><strong>volatile-random</strong> - 从已设置过期时间的数据集中任意选择数据淘汰</li><li><strong>allkeys-lru</strong> - 从所有数据集中挑选最近最少使用的数据淘汰</li><li><strong>allkeys-random</strong> - 从所有数据集中任意选择数据进行淘汰</li><li><strong>noeviction</strong> - 禁止驱逐数据</li></ul></li><li><p>提供两种持久化方式 - RDB 和 AOF</p></li><li><p>通过 Redis cluster 提供集群模式。</p></li></ul><h4 id="redis-原理" tabindex="-1"><a class="header-anchor" href="#redis-原理" aria-hidden="true">#</a> Redis 原理</h4><ul><li>缓存淘汰 <ul><li>Redis 有两种数据淘汰实现 <ul><li>消极方式 - 访问 Redis key 时，如果发现它已经失效，则删除它</li><li>积极方式 - 周期性从设置了失效时间的 key 中，根据淘汰策略，选择一部分失效的 key 进行删除。</li></ul></li></ul></li><li>分区 <ul><li>Redis Cluster 集群包含 16384 个虚拟 Hash 槽，它通过一个高效的算法来计算 key 属于哪个 Hash 槽。</li><li>Redis Cluster 支持请求分发 - 节点在接到一个命令请求时，会先检测这个命令请求要处理的键所在的槽是否由自己负责，如果不是的话，节点将向客户端返回一个 MOVED 错误，MOVED 错误携带的信息可以指引客户端将请求重定向至正在负责相关槽的节点。</li></ul></li><li>主从复制 <ul><li>Redis 2.8 后支持异步复制。它有两种模式： <ul><li><code>完整重同步（full resychronization）</code> - 用于初次复制。执行步骤与 <code>SYNC</code> 命令基本一致。</li><li><code>部分重同步（partial resychronization）</code> - 用于断线后重复制。如果条件允许，主服务器可以将主从服务器连接断开期间执行的写命令发送给从服务器，从服务器只需接收并执行这些写命令，即可将主从服务器的数据库状态保持一致。</li></ul></li><li>集群中每个节点都会定期向集群中的其他节点发送 PING 消息，以此来检测对方是否在线。</li><li>如果一个主节点被认为下线，则在其从节点中，根据 Raft 算法，选举出一个节点，升级为主节点。</li></ul></li><li>数据一致性 <ul><li>Redis 不保证强一致性，因为这会使得集群性能大大降低。</li><li>Redis 是通过异步复制来实现最终一致性。</li></ul></li></ul><h3 id="分布式缓存对比" tabindex="-1"><a class="header-anchor" href="#分布式缓存对比" aria-hidden="true">#</a> 分布式缓存对比</h3><p>不同的分布式缓存功能特性和实现原理方面有很大的差异，因此他们所适应的场景也有所不同。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200709224247.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>这里选取三个比较出名的分布式缓存（MemCache，Redis，Tair）来作为比较：</p><table><thead><tr><th>比较项</th><th>MemCache</th><th>Redis</th><th>Tair</th></tr></thead><tbody><tr><td>数据结构</td><td>只支持简单的 Key-Value 结构</td><td>String,Hash, List, Set, Sorted Set</td><td>String,HashMap, List，Set</td></tr><tr><td>持久化</td><td>不支持</td><td>支持</td><td>支持</td></tr><tr><td>容量大小</td><td>数据纯内存，数据存储不宜过多</td><td>数据全内存，资源成本考量不宜超过 100GB</td><td>可以配置全内存或内存+磁盘引擎，数据容量可无限扩充</td></tr><tr><td>读写性能</td><td>很高</td><td>很高(RT0.5ms 左右)</td><td>String 类型比较高(RT1ms 左右)，复杂类型比较慢(RT5ms 左右)</td></tr><tr><td>过期策略</td><td>过期后，不删除缓存</td><td>有六种策略来处理过期数据</td><td>支持</td></tr></tbody></table><ul><li><code>MemCache</code> - 只适合基于内存的缓存框架；且不支持数据持久化和容灾。</li><li><code>Redis</code> - 支持丰富的数据结构，读写性能很高，但是数据全内存，必须要考虑资源成本，支持持久化。</li><li><code>Tair</code> - 支持丰富的数据结构，读写性能较高，部分类型比较慢，理论上容量可以无限扩充。</li></ul><p>总结：如果服务对延迟比较敏感，Map/Set 数据也比较多的话，比较适合 Redis。如果服务需要放入缓存量的数据很大，对延迟又不是特别敏感的话，那就可以选择 Memcached。</p><h2 id="多级缓存" tabindex="-1"><a class="header-anchor" href="#多级缓存" aria-hidden="true">#</a> 多级缓存</h2><h3 id="整体缓存框架" tabindex="-1"><a class="header-anchor" href="#整体缓存框架" aria-hidden="true">#</a> 整体缓存框架</h3><p>通常，一个大型软件系统的缓存采用多级缓存方案：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/javaweb/technology/cache/缓存整体架构.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>请求过程：</p><ol><li>浏览器向客户端发起请求，如果 CDN 有缓存则直接返回；</li><li>如果 CDN 无缓存，则访问反向代理服务器；</li><li>如果反向代理服务器有缓存则直接返回；</li><li>如果反向代理服务器无缓存或动态请求，则访问应用服务器；</li><li>应用服务器访问进程内缓存；如果有缓存，则返回代理服务器，并缓存数据；（动态请求不缓存）</li><li>如果进程内缓存无数据，则读取分布式缓存；并返回应用服务器；应用服务器将数据缓存到本地缓存（部分）；</li><li>如果分布式缓存无数据，则应用程序读取数据库数据，并放入分布式缓存；</li></ol><h3 id="使用进程内缓存" tabindex="-1"><a class="header-anchor" href="#使用进程内缓存" aria-hidden="true">#</a> 使用进程内缓存</h3><p><strong>如果应用服务是单点应用，那么进程内缓存当然是缓存的首选方案</strong>。</p><p>对于进程内缓存，其本来受限于内存的大小的限制，以及进程缓存更新后其他缓存无法得知，所以一般来说进程缓存适用于:</p><ul><li>数据量不是很大且更新频率较低的数据。</li><li>如果更新频繁的数据，也想使用进程内缓存，那么可以将其过期时间设置为较短的时间，或者设置较短的自动刷新时间。</li></ul><p>这种方案存在以下问题：</p><ul><li>如果应用服务是分布式系统，应用节点之间无法共享缓存，存在数据不一致问题。</li><li>由于进程内缓存受限于内存大小的限制，所以缓存不能无限扩展。</li></ul><h3 id="使用分布式缓存" tabindex="-1"><a class="header-anchor" href="#使用分布式缓存" aria-hidden="true">#</a> 使用分布式缓存</h3><p>如果应用服务是分布式系统，那么最简单的缓存方案就是直接使用分布式缓存。</p><p>其应用场景如图所示：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200611141419.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Redis 用来存储热点数据，如果缓存不命中，则去查询数据库，并更新缓存。</p><p>这种方案存在以下问题：</p><ol><li>缓存服务如果挂了，这时应用只能访问数据库，容易造成缓存雪崩。</li><li>访问分布式缓存服务会有一定的 I/O 以及序列化反序列化的开销，虽然性能很高，但是其终究没有在内存中查询快。</li></ol><h3 id="使用多级缓存" tabindex="-1"><a class="header-anchor" href="#使用多级缓存" aria-hidden="true">#</a> 使用多级缓存</h3><p>单纯使用进程内缓存和分布式缓存都存在各自的不足。如果需要更高的性能以及更好的可用性，我们可以将缓存设计为多级结构。将最热的数据使用进程内缓存存储在内存中，进一步提升访问速度。</p><p>这个设计思路在计算机系统中也存在，比如 CPU 使用 L1、L2、L3 多级缓存，用来减少对内存的直接访问，从而加快访问速度。</p><p>一般来说，多级缓存架构使用二级缓存已可以满足大部分业务需求，过多的分级会增加系统的复杂度以及维护的成本。因此，多级缓存不是分级越多越好，需要根据实际情况进行权衡。</p><p>一个典型的二级缓存架构，可以使用进程内缓存（如： Caffeine/Google Guava/Ehcache/HashMap）作为一级缓存；使用分布式缓存（如：Redis/Memcached）作为二级缓存。</p><h4 id="多级缓存查询" tabindex="-1"><a class="header-anchor" href="#多级缓存查询" aria-hidden="true">#</a> 多级缓存查询</h4><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/javaweb/technology/cache/多级缓存2.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>多级缓存查询流程如下：</p><ol><li>首先，查询 L1 缓存，如果缓存命中，直接返回结果；如果没有命中，执行下一步。</li><li>接下来，查询 L2 缓存，如果缓存命中，直接返回结果并回填 L1 缓存；如果没有命中，执行下一步。</li><li>最后，查询数据库，返回结果并依次回填 L2 缓存、L1 缓存。</li></ol><h4 id="多级缓存更新" tabindex="-1"><a class="header-anchor" href="#多级缓存更新" aria-hidden="true">#</a> 多级缓存更新</h4><p>对于 L1 缓存，如果有数据更新，只能删除并更新所在机器上的缓存，其他机器只能通过超时机制来刷新缓存。超时设定可以有两种策略:</p><ul><li>设置成写入后多少时间后过期</li><li>设置成写入后多少时间刷新</li></ul><p>对于 L2 缓存，如果有数据更新，其他机器立马可见。但是，也必须要设置超时时间，其时间应该比 L1 缓存的有效时间长。</p><p>为了解决进程内缓存不一致的问题，设计可以进一步优化:</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/javaweb/technology/cache/多级缓存3.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>通过消息队列的发布、订阅机制，可以通知其他应用节点对进程内缓存进行更新。使用这种方案，即使消息队列服务挂了或不可靠，由于先执行了数据库更新，但进程内缓存过期，刷新缓存时，也能保证数据的最终一致性。</p><h2 id="缓存问题" tabindex="-1"><a class="header-anchor" href="#缓存问题" aria-hidden="true">#</a> 缓存问题</h2><h3 id="缓存雪崩" tabindex="-1"><a class="header-anchor" href="#缓存雪崩" aria-hidden="true">#</a> 缓存雪崩</h3><p><strong>缓存雪崩是指缓存不可用或者大量缓存由于超时时间相同在同一时间段失效，大量请求直接访问数据库，数据库压力过大导致系统雪崩</strong>。</p><p>举例来说，对于系统 A，假设每天高峰期每秒 5000 个请求，本来缓存在高峰期可以扛住每秒 4000 个请求，但是缓存机器意外发生了全盘宕机。缓存挂了，此时 1 秒 5000 个请求全部落数据库，数据库必然扛不住，它会报一下警，然后就挂了。此时，如果没有采用什么特别的方案来处理这个故障，DBA 很着急，重启数据库，但是数据库立马又被新的流量给打死了。</p><p>解决缓存雪崩的主要手段如下：</p><ul><li><strong>增加缓存系统可用性</strong>（事前）。例如：部署 Redis Cluster（主从+哨兵），以实现 Redis 的高可用，避免全盘崩溃。</li><li><strong>采用多级缓存方案</strong>（事中）。例如：本地缓存（<strong>Ehcache</strong>/<strong>Caffine</strong>/<strong>Guava Cache</strong>） + 分布式缓存（<strong>Redis</strong>/ <strong>Memcached</strong>）。</li><li><strong>限流、降级、熔断方案</strong>（事中），避免被流量打死。如：使用 <strong>Hystrix</strong> 进行熔断、降级。</li><li>缓存如果支持<strong>持久化</strong>，可以在恢复工作后恢复数据（事后）。如：<strong>Redis</strong> 支持持久化，一旦重启，自动从磁盘上加载数据，快速恢复缓存数据。</li></ul><p>上面的解决方案简单来说，就是多级缓存方案。系统收到一个查询请求，先查本地缓存，再查分布式缓存，最后查数据库，只要命中，立即返回。</p><p>解决缓存雪崩的辅助手段如下：</p><ul><li><strong>监控缓存，弹性扩容</strong>。</li><li><strong>缓存的过期时间可以取个随机值</strong>。这么做是为避免缓存同时失效，使得数据库 IO 骤升。比如：以前是设置 10 分钟的超时时间，那每个 Key 都可以随机 8-13 分钟过期，尽量让不同 Key 的过期时间不同。</li></ul><h3 id="缓存穿透" tabindex="-1"><a class="header-anchor" href="#缓存穿透" aria-hidden="true">#</a> 缓存穿透</h3><blockquote><p><strong>缓存穿透是指：查询的数据在数据库中不存在，那么缓存中自然也不存在。所以，应用在缓存中查不到，则会去查询数据库。当这样的请求多了后，数据库的压力就会增大。</strong></p></blockquote><p>解决缓存穿透，一般有两种方法：</p><p>（一）缓存空值</p><p><strong>对于返回为 NULL 的依然缓存，对于抛出异常的返回不进行缓存</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/javaweb/technology/cache/缓存穿透1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>采用这种手段的会增加我们缓存的维护成本，需要在插入缓存的时候删除这个空缓存，当然我们可以通过设置较短的超时时间来解决这个问题。</p><p>（二）过滤不可能存在的数据</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/javaweb/technology/cache/缓存穿透2.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>制定一些规则过滤一些不可能存在的数据</strong>。可以使用布隆过滤器（针对二进制操作的数据结构，所以性能高），比如你的订单 ID 明显是在一个范围 1-1000，如果不是 1-1000 之内的数据那其实可以直接给过滤掉。</p><blockquote><p>针对于一些恶意攻击，攻击带过来的大量 key 是不存在的，那么我们采用第一种方案就会缓存大量不存在 key 的数据。</p><p>此时我们采用第一种方案就不合适了，我们完全可以先对使用第二种方案进行过滤掉这些 key。</p><p>针对这种 key 异常多、请求重复率比较低的数据，我们就没有必要进行缓存，使用第二种方案直接过滤掉。</p><p>而对于空数据的 key 有限的，重复率比较高的，我们则可以采用第一种方式进行缓存。</p></blockquote><h3 id="缓存击穿" tabindex="-1"><a class="header-anchor" href="#缓存击穿" aria-hidden="true">#</a> 缓存击穿</h3><p>缓存击穿是指，<strong>热点数据失效瞬间，大量请求直接访问数据库</strong>。例如，某些 key 是热点数据，访问非常频繁。如果某个 key 失效的瞬间，大量的请求过来，缓存未命中，然后去数据库访问，此时数据库访问量会急剧增加。</p><p>为了避免这个问题，我们可以采取下面的两个手段:</p><ul><li><strong>分布式锁</strong> - 锁住热点数据的 key，避免大量线程同时访问同一个 key。</li><li><strong>定时异步刷新</strong> - 可以对部分数据采取失效前自动刷新的策略，而不是到期自动淘汰。淘汰其实也是为了数据的时效性，所以采用自动刷新也可以。</li></ul><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>上面逐一介绍了缓存使用中常见的问题。这里，从发生时间段的角度整体归纳一下缓存问题解决方案。</p><ul><li>事前：Redis 高可用方案（<strong>Redis Cluster</strong> + <strong>主从</strong> + <strong>哨兵</strong>），避免缓存全面崩溃。</li><li>事中：（一）采用多级缓存方案，本地缓存（<strong>Ehcache</strong>/<strong>Caffine</strong>/<strong>Guava Cache</strong>） + 分布式缓存（<strong>Redis</strong>/ <strong>Memcached</strong>）。（二）限流 + 熔断 + 降级（<strong>Hystrix</strong>），避免极端情况下，数据库被打死。</li><li>事后：<strong>Redis</strong> 持久化（<strong>RDB</strong>+<strong>AOF</strong>），一旦重启，自动从磁盘上加载数据，快速恢复缓存数据。</li></ul><blockquote><p>分布式缓存 Memcached ，由于数据类型不如 Redis 丰富，并且不支持持久化、容灾。所以，一般会选择 Redis 做分布式缓存。</p></blockquote><h2 id="缓存策略" tabindex="-1"><a class="header-anchor" href="#缓存策略" aria-hidden="true">#</a> 缓存策略</h2><h3 id="缓存预热" tabindex="-1"><a class="header-anchor" href="#缓存预热" aria-hidden="true">#</a> 缓存预热</h3><p>缓存预热是指系统启动后，直接查询热点数据并缓存。这样就可以避免用户请求的时候，先查询数据库，然后再更新缓存的问题。</p><p>解决方案：</p><ul><li><strong>手动刷新缓存</strong>：直接写个缓存刷新页面，上线时手工操作下。</li><li><strong>应用启动时刷新缓存</strong>：数据量不大，可以在项目启动的时候自动进行加载。</li><li><strong>定时异步刷新缓存</strong></li></ul><h3 id="如何缓存" tabindex="-1"><a class="header-anchor" href="#如何缓存" aria-hidden="true">#</a> 如何缓存</h3><h4 id="不过期缓存" tabindex="-1"><a class="header-anchor" href="#不过期缓存" aria-hidden="true">#</a> 不过期缓存</h4><p>缓存更新模式：</p><ol><li>开启事务</li><li>写 SQL</li><li>提交事务</li><li>写缓存</li></ol><p><strong>不要把写缓存操作放在事务中，尤其是写分布式缓存</strong>。因为网络抖动可能导致写缓存响应时间很慢，引起数据库事务阻塞。如果对缓存数据一致性要求不是那么高，数据量也不是很大，可以考虑定期全量同步缓存。</p><p>这种模式存在这样的情况：存在事务成功，但缓存写失败的可能。但这种情况相对于上面的问题，影响较小。</p><h4 id="过期缓存" tabindex="-1"><a class="header-anchor" href="#过期缓存" aria-hidden="true">#</a> 过期缓存</h4><p>采用<strong>懒加载</strong>。对于热点数据，可以设置较短的缓存时间，并定期异步加载。</p><h3 id="缓存更新" tabindex="-1"><a class="header-anchor" href="#缓存更新" aria-hidden="true">#</a> 缓存更新</h3><p>一般来说，系统如果不是严格要求缓存和数据库保持一致性的话，尽量不要将<strong>读请求和写请求串行化</strong>。串行化可以保证一定不会出现数据不一致的情况，但是它会导致系统的吞吐量大幅度下降。</p><p>缓存更新的策略有几种模式：</p><ul><li>Cache Aside</li><li>Read/Write Through</li></ul><p>需要注意的是：以上几种缓存更新策略，都无法保证数据强一致。如果一定要保证强一致性，可以通过两阶段提交（2PC）或 Paxos 协议来实现。但是 2PC 太慢，而 Paxos 太复杂，所以如果不是非常重要的数据，不建议使用强一致性方案。</p><h4 id="cache-aside" tabindex="-1"><a class="header-anchor" href="#cache-aside" aria-hidden="true">#</a> Cache Aside</h4><p>Cache Aside 应该是最常见的缓存更新策略了。</p><p>Cache Aside 的思路是：<strong>先更新数据库，再删除缓存</strong>。具体来说：</p><ul><li><p><strong>失效</strong>：尝试读缓存，如果不命中，则读数据库，然后更新缓存。</p></li><li><p><strong>命中</strong>：尝试读缓存，命中则直接返回数据。</p></li><li><p><strong>更新</strong>：先更新数据库，再删除缓存。</p></li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220413101039.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="为什么不能先更新数据库-再更新缓存" tabindex="-1"><a class="header-anchor" href="#为什么不能先更新数据库-再更新缓存" aria-hidden="true">#</a> 为什么不能先更新数据库，再更新缓存？</h5><p><strong>多个并发的写操作可能导致脏数据</strong>：当有多个并发的写请求时，无法保证更新数据库的顺序和更新缓存的顺序一致，从而导致数据库和缓存数据不一致的问题。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220413113825.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>说明：如上图的场景中，两个写线程由于执行顺序，导致数据库中 val = 2，而缓存中 val = 1，数据不一致。</p></blockquote><h5 id="为什么不能先删缓存-再更新数据库" tabindex="-1"><a class="header-anchor" href="#为什么不能先删缓存-再更新数据库" aria-hidden="true">#</a> 为什么不能先删缓存，再更新数据库？</h5><p><strong>存在并发读请求和写请求时，可能导致脏数据</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220413113940.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>说明：如上图的场景中，读线程和写线程并行执行，导致数据库中 val = 2，而缓存中 val = 1，数据不一致。</p></blockquote><h5 id="先更新数据库-再删除缓存就没问题了吗" tabindex="-1"><a class="header-anchor" href="#先更新数据库-再删除缓存就没问题了吗" aria-hidden="true">#</a> 先更新数据库，再删除缓存就没问题了吗</h5><p><strong>存在并发读请求和写请求时，可能导致脏数据</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220413115140.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>上图中问题发生的概率非常低：因为通常数据库更新操作比内存操作耗时多出几个数量级，最后一步回写缓存速度非常快，通常会在更新数据库之前完成。所以 Cache Aside 模式选择先更新数据库，再删除缓存，而不是先删缓存，再更新数据库。</p><p>不过，如果真的出现了这种场景，为了避免缓存中一直保留着脏数据，可以为缓存设置过期时间，过期后缓存自动失效。通常，业务系统中允许少量数据短时间出现不一致的情况。</p></blockquote><h4 id="read-write-through" tabindex="-1"><a class="header-anchor" href="#read-write-through" aria-hidden="true">#</a> Read/Write Through</h4><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220413101029.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Read Through 的思路是：<strong>查询时更新缓存</strong>。当缓存失效时，缓存服务自己进行加载。</p><p>Write Through 的思路是：当数据更新时，缓存服务负责更新缓存。</p><p>Through vs. Cache Aside</p><p>Read Through vs. Cache Aside</p><ul><li>Cache Aside 模式中，应用需要维护两个数据源头：一个是缓存，一个是数据库。</li><li>Read-Through 模式中，应用无需管理缓存和数据库，只需要将数据库的同步委托给缓存服务即可。</li></ul><h4 id="write-behind" tabindex="-1"><a class="header-anchor" href="#write-behind" aria-hidden="true">#</a> Write behind</h4><p>Write Behind 又叫 Write Back。Write Behind 的思路是：应用更新数据时，只更新缓存， 缓存服务每隔一段时间将缓存数据批量更新到数据库中，即延迟写入。这个设计的好处就是让提高 I/O 效率，因为异步，Write Behind 还可以合并对同一个数据的多次操作，所以性能的提高是相当可观的。</p>',135),m={href:"https://www.cnblogs.com/rjzheng/p/9041659.html",target:"_blank",rel:"noopener noreferrer"},b=r('<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>最后，通过一张思维导图来总结一下本文所述的知识点，帮助大家对缓存有一个系统性的认识。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200710163555.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',4),x={href:"https://item.jd.com/11322972.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://link.juejin.im/?target=https%3A%2F%2Fjuejin.im%2Fpost%2F5b7593496fb9a009b62904fa",target:"_blank",rel:"noopener noreferrer"},k={href:"https://link.juejin.im/?target=https%3A%2F%2Fjuejin.im%2Fpost%2F5b849878e51d4538c77a974a",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.jianshu.com/p/73ce0ef820f9",target:"_blank",rel:"noopener noreferrer"},_={href:"https://tech.meituan.com/2017/03/17/cache-about.html",target:"_blank",rel:"noopener noreferrer"},R={href:"https://www.cnblogs.com/rjzheng/p/9041659.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://zhuanlan.zhihu.com/p/102293437",target:"_blank",rel:"noopener noreferrer"},M={href:"https://segmentfault.com/a/1190000021716418",target:"_blank",rel:"noopener noreferrer"},L={href:"https://zhuanlan.zhihu.com/p/60950750",target:"_blank",rel:"noopener noreferrer"};function w(T,H){const a=o("ExternalLinkIcon");return l(),s("div",null,[h,e("p",null,[t("其实现原理较复杂，可以参考"),e("a",c,[t("你应该知道的缓存进化史"),i(a)]),t("。")]),g,e("blockquote",null,[e("p",null,[e("a",p,[t("Memcached"),i(a)]),t(" 是一个高性能，分布式内存对象缓存系统，通过在内存里维护一个统一的巨大的 hash 表，它能够用来存储各种格式的数据，包括图像、视频、文件以及数据库检索的结果等。")]),u]),f,e("blockquote",null,[e("p",null,[t("更详细的分析可以参考："),e("a",m,[t("分布式之数据库和缓存双写一致性方案解析 "),i(a)])])]),b,e("ul",null,[e("li",null,[e("a",x,[t("《大型网站技术架构：核心原理与案例分析》"),i(a)])]),e("li",null,[e("a",C,[t("你应该知道的缓存进化史"),i(a)])]),e("li",null,[e("a",k,[t("如何优雅的设计和使用缓存？"),i(a)])]),e("li",null,[e("a",y,[t("理解分布式系统中的缓存架构(上)"),i(a)])]),e("li",null,[e("a",_,[t("缓存那些事"),i(a)])]),e("li",null,[e("a",R,[t("分布式之数据库和缓存双写一致性方案解析 "),i(a)])]),e("li",null,[e("a",v,[t("Cache 的基本原理"),i(a)])]),e("li",null,[e("a",M,[t("5 分钟看懂系列：HTTP 缓存机制详解"),i(a)])]),e("li",null,[e("a",L,[t("浏览器缓存看这一篇就够了"),i(a)])])])])}const U=n(d,[["render",w],["__file","01.数据缓存.html.vue"]]);export{U as default};
