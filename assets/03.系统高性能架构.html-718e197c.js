import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c as s,b as r,a as e,d as i,e as t}from"./app-1f12e18b.js";const d={},h=t(`<h1 id="系统高性能架构" tabindex="-1"><a class="header-anchor" href="#系统高性能架构" aria-hidden="true">#</a> 系统高性能架构</h1><h2 id="性能简介" tabindex="-1"><a class="header-anchor" href="#性能简介" aria-hidden="true">#</a> 性能简介</h2><p>要设计高性能的系统架构，应该有以下的思维步骤：</p><p>首先，要明确影响性能的因素有哪些？性能的指标有哪些？——做到有的放矢。</p><p>其次，要了解如何测试性能指标？性能优化，必须要有前后的效果对比，才能证明性能确实有改善。</p><p>接下来，学习针对不同场景下，不同性指标的优化策略以及具体实施方案。——见招拆招。</p><h3 id="计算机资源" tabindex="-1"><a class="header-anchor" href="#计算机资源" aria-hidden="true">#</a> 计算机资源</h3><p>了解性能指标前，需要先知道哪些计算机资源会影响性能。一般来说，影响性能的计算机资源包括：</p><ul><li><strong>CPU</strong></li><li><strong>内存</strong></li><li><strong>磁盘 I/O</strong></li><li><strong>网络 I/O</strong></li><li><strong>数据库</strong></li><li><strong>锁竞争</strong></li></ul><h3 id="性能指标" tabindex="-1"><a class="header-anchor" href="#性能指标" aria-hidden="true">#</a> 性能指标</h3><p>性能测试的主要指标有：</p><ul><li><strong>响应时间</strong></li><li><strong>并发数</strong></li><li><strong>吞吐量</strong><ul><li>QPS</li><li>TPS</li></ul></li><li><strong>资源分配使用率</strong></li></ul><h4 id="响应时间" tabindex="-1"><a class="header-anchor" href="#响应时间" aria-hidden="true">#</a> 响应时间</h4><p>响应时间(RT)是指从客户端发一个请求开始计时，到客户端接收到从服务器端返回的响应结果结束所经历的时间，响应时间由请求发送时间、网络传输时间和服务器处理时间三部分组成。</p><p><strong>响应时间越短，性能越好</strong>，一般一个接口的响应时间是在毫秒级。</p><p>响应时间可以进一步细分：</p><ul><li>客户端响应时间</li><li>网络响应时间</li><li>服务端响应时间</li><li>数据库响应时间</li></ul><h4 id="并发数" tabindex="-1"><a class="header-anchor" href="#并发数" aria-hidden="true">#</a> 并发数</h4><p><strong>并发数是指系统能同时处理的请求、事务数</strong>。</p><p>系统自身的 CPU 处理能力、内存、以及系统自身的线程复用、锁竞争等都会影响并发数。</p><h4 id="吞吐量" tabindex="-1"><a class="header-anchor" href="#吞吐量" aria-hidden="true">#</a> 吞吐量</h4><p>吞吐量计算公式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>吞吐量 = 并发数 / 平均响应时间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>吞吐量越大，性能越好</strong>。</p><p>一般，系统呈现给外部的最常见的吞吐量指标，就是：</p><ul><li><strong><code>QPS(每秒查询数)</code></strong> - 即系统每秒可以处理的读请求。</li><li><strong><code>TPS(每秒事务数)</code></strong> - 即系统每秒可以处理的写请求。</li></ul><p>而在系统内部，存在以下吞吐量：</p><ul><li>磁盘吞吐量 - 体现了磁盘随机读写的性能。</li><li>网络吞吐量 - 除了受限于网络带宽，CPU 的处理能力、网卡、防火墙、外部接口以及 I/O、系统 IO 算法都会影响到网络吞吐量。</li></ul><h4 id="资源分配使用率" tabindex="-1"><a class="header-anchor" href="#资源分配使用率" aria-hidden="true">#</a> 资源分配使用率</h4><p>通常由 CPU 占用率、内存使用率、磁盘 I/O、网络 I/O 、对象与线程数来表示资源使用率。这些指标也是系统监控的重要参数。</p><h3 id="性能测试" tabindex="-1"><a class="header-anchor" href="#性能测试" aria-hidden="true">#</a> 性能测试</h3><p>性能测试手段：</p><ul><li>性能测试</li><li>负载测试</li><li>压力测试</li><li>稳定性测试</li></ul><p>对于 Java 应用而言，最简单的，可以使用 Jmeter 进行性能测试。</p><p>性能测试报告示例：</p><div align="center"><img src="https://upload-images.jianshu.io/upload_images/3101171-3d533a36f42608a1.png"></div>`,36),p=t('<p>性能测试时，需要注意一些问题：</p><ul><li><strong>热身问题</strong> - 系统刚开始运行时，自身可能加载缓存，JVM 可能会优化热点代码等，这些行为都可能使得前后有较大的性能差异。所以，性能测试时，应该先跳过一段热身时间，等趋于稳定后，再开始性能测试。</li><li><strong>测试结果不稳定</strong> - 性能测试中，有很多不稳定的因素，如环境、网络等，几乎不可能每次都是一样的结果。所以应该多次测试，求平均值。</li><li><strong>多 JVM 情况下的影响</strong> - 应尽量避免一台机器部署多个 JVM 的情况。因为任意一个 JVM 都拥有整个系统的资源使用权，所以在性能测试时，可能会彼此干扰。</li></ul><h3 id="性能优化策略" tabindex="-1"><a class="header-anchor" href="#性能优化策略" aria-hidden="true">#</a> 性能优化策略</h3><ol><li><strong>性能分析</strong> - 如果请求响应慢，存在性能问题。需要对请求经历的各个环节逐一分析，排查可能出现性能瓶颈的地方，定位问题。检查监控数据，分析影响性能的主要因素：内存、磁盘、网络、CPU，可能是代码或架构设计不合理，又或者是系统资源确实不足。</li><li><strong>性能优化</strong> - 性能优化根据网站分层架构，大致可分为前端性能优化、应用服务性能优化、存储服务性能优化。</li></ol><h2 id="应用服务性能优化" tabindex="-1"><a class="header-anchor" href="#应用服务性能优化" aria-hidden="true">#</a> 应用服务性能优化</h2><h3 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> 缓存</h3><p>网站性能优化第一定律：<strong>第一优先考虑使用缓存提升性能</strong>。</p><p>缓存是用于存储数据的硬件或软件的组成部分，以使得后续更快访问相应的数据。缓存中的数据可能是提前计算好的结果、数据的副本等。</p><ul><li>单点应用可以使用进程内缓存（如：ConcurrentHashMap、Caffeine）；</li><li>分布式应用可以使用分布式缓存（如：Redis、Memcached），或进程缓存+分布式缓存的多级缓存方案。</li></ul>',9),c={href:"https://dunwu.github.io/design/distributed/%E5%88%86%E5%B8%83%E5%BC%8F%E7%BC%93%E5%AD%98.html",target:"_blank",rel:"noopener noreferrer"},u=t('<h3 id="并发模型" tabindex="-1"><a class="header-anchor" href="#并发模型" aria-hidden="true">#</a> 并发模型</h3><p>高并发需要根据两个条件划分：连接数量，请求数量。</p><ul><li>海量连接（成千上万）海量请求：例如抢购，双十一等</li><li>常量连接（几十上百）海量请求：例如中间件</li><li>海量连接常量请求：例如门户网站</li><li>常量连接常量请求：例如内部运营系统，管理系统</li></ul><p>单服务器高性能的关键之一就是<strong>服务器采取的并发模型</strong></p><ul><li>服务器如何管理连接。</li><li>服务器如何处理请求。</li></ul><p>以上两个设计点最终都和操作系统的 I/O 模型及进程模型相关。</p><ul><li>I/O 模型：阻塞、非阻塞、同步、异步。</li><li>进程模型：单进程、多进程、多线程。</li></ul><h4 id="ppc" tabindex="-1"><a class="header-anchor" href="#ppc" aria-hidden="true">#</a> PPC</h4><p>PPC 是 Process Per Connection 的缩写，其含义是指每次有新的连接就新建一个进程去专门处理这个连接的请求，这是传统的 UNIX 网络服务器所采用的模型。基本的流程图是：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200608103701.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>父进程接受连接（图中 accept）。</li><li>父进程“fork”子进程（图中 fork）。</li><li>子进程处理连接的读写请求（图中子进程 read、业务处理、write）。</li><li>子进程关闭连接（图中子进程中的 close）。</li></ul><p>这种模式的缺点：</p><ul><li>fork 代价高</li><li>父子进程通信复杂</li><li>支持的并发连接数量有限</li></ul><h4 id="prefork" tabindex="-1"><a class="header-anchor" href="#prefork" aria-hidden="true">#</a> prefork</h4><p>PPC 模式中，当连接进来时才 fork 新进程来处理连接请求，由于 fork 进程代价高，用户访问时可能感觉比较慢，prefork 模式的出现就是为了解决这个问题。</p><p>顾名思义，prefork 就是提前创建进程（pre-fork）。系统在启动的时候就预先创建好进程，然后才开始接受用户的请求，当有新的连接进来的时候，就可以省去 fork 进程的操作，让用户访问更快、体验更好。prefork 的基本示意图是：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200608104151.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>prefork 的实现关键就是多个子进程都 accept 同一个 socket，当有新的连接进入时，操作系统保证只有一个进程能最后 accept 成功。但这里也存在一个小小的问题：“惊群”现象，就是指虽然只有一个子进程能 accept 成功，但所有阻塞在 accept 上的子进程都会被唤醒，这样就导致了不必要的进程调度和上下文切换了。幸运的是，操作系统可以解决这个问题，例如 Linux 2.6 版本后内核已经解决了 accept 惊群问题。</p><p>prefork 模式和 PPC 一样，还是存在父子进程通信复杂、支持的并发连接数量有限的问题，因此目前实际应用也不多。Apache 服务器提供了 MPM prefork 模式，推荐在需要可靠性或者与旧软件兼容的站点时采用这种模式，默认情况下最大支持 256 个并发连接。</p><h4 id="tpc" tabindex="-1"><a class="header-anchor" href="#tpc" aria-hidden="true">#</a> TPC</h4><p>TPC 是 Thread Per Connection 的缩写，其含义是指每次有新的连接就新建一个线程去专门处理这个连接的请求。与进程相比，线程更轻量级，创建线程的消耗比进程要少得多；同时多线程是共享进程内存空间的，线程通信相比进程通信更简单。因此，TPC 实际上是解决或者弱化了 PPC fork 代价高的问题和父子进程通信复杂的问题。</p><p>TPC 的基本流程是：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200608104311.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>父进程接受连接（图中 accept）。</li><li>父进程创建子线程（图中 pthread）。</li><li>子线程处理连接的读写请求（图中子线程 read、业务处理、write）。</li><li>子线程关闭连接（图中子线程中的 close）。</li></ul><p>注意，和 PPC 相比，主进程不用“close”连接了。原因是在于子线程是共享主进程的进程空间的，连接的文件描述符并没有被复制，因此只需要一次 close 即可。</p><p>TPC 虽然解决了 fork 代价高和进程通信复杂的问题，但是也引入了新的问题，具体表现在：</p><ul><li>创建线程虽然比创建进程代价低，但并不是没有代价，高并发时（例如每秒上万连接）还是有性能问题。</li><li>无须进程间通信，但是线程间的互斥和共享又引入了复杂度，可能一不小心就导致了死锁问题。</li><li>多线程会出现互相影响的情况，某个线程出现异常时，可能导致整个进程退出（例如内存越界）。</li></ul><p>除了引入了新的问题，TPC 还是存在 CPU 线程调度和切换代价的问题。因此，TPC 方案本质上和 PPC 方案基本类似，在并发几百连接的场景下，反而更多地是采用 PPC 的方案，因为 PPC 方案不会有死锁的风险，也不会多进程互相影响，稳定性更高。</p><h4 id="prethread" tabindex="-1"><a class="header-anchor" href="#prethread" aria-hidden="true">#</a> prethread</h4><p>TPC 模式中，当连接进来时才创建新的线程来处理连接请求，虽然创建线程比创建进程要更加轻量级，但还是有一定的代价，而 prethread 模式就是为了解决这个问题。</p><p>和 prefork 类似，prethread 模式会预先创建线程，然后才开始接受用户的请求，当有新的连接进来的时候，就可以省去创建线程的操作，让用户感觉更快、体验更好。</p><p>由于多线程之间数据共享和通信比较方便，因此实际上 prethread 的实现方式相比 prefork 要灵活一些，常见的实现方式有下面几种：</p><ul><li>主进程 accept，然后将连接交给某个线程处理。</li><li>子线程都尝试去 accept，最终只有一个线程 accept 成功，方案的基本示意图如下：</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200608104922.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Apache 服务器的 MPM worker 模式本质上就是一种 prethread 方案，但稍微做了改进。Apache 服务器会首先创建多个进程，每个进程里面再创建多个线程，这样做主要是为了考虑稳定性，即：即使某个子进程里面的某个线程异常导致整个子进程退出，还会有其他子进程继续提供服务，不会导致整个服务器全部挂掉。</p><p>prethread 理论上可以比 prefork 支持更多的并发连接，Apache 服务器 MPM worker 模式默认支持 16 × 25 = 400 个并发处理线程。</p><h4 id="reactor" tabindex="-1"><a class="header-anchor" href="#reactor" aria-hidden="true">#</a> Reactor</h4><p>I/O 多路复用技术归纳起来有两个关键实现点：</p><ul><li>当多条连接共用一个阻塞对象后，进程只需要在一个阻塞对象上等待，而无须再轮询所有连接，常见的实现方式有 <code>select</code>、<code>epoll</code>、<code>kqueue</code> 等。</li><li>当某条连接有新的数据可以处理时，操作系统会通知进程，进程从阻塞状态返回，开始进行业务处理。</li></ul><p>I/O 多路复用结合线程池，完美地解决了 PPC 和 TPC 的问题</p><p>Reactor 模式的核心组成部分包括 Reactor 和处理资源池（进程池或线程池），其中 Reactor 负责监听和分配事件，处理资源池负责处理事件。初看 Reactor 的实现是比较简单的，但实际上结合不同的业务场景，Reactor 模式的具体实现方案灵活多变，主要体现在：</p><ul><li>Reactor 的数量可以变化：可以是一个 Reactor，也可以是多个 Reactor。</li><li>资源池的数量可以变化：以进程为例，可以是单个进程，也可以是多个进程（线程类似）。</li></ul><p>最终 Reactor 模式有这三种典型的实现方案：</p><ul><li>单 Reactor 单进程 / 线程。</li><li>单 Reactor 多线程。</li><li>多 Reactor 多进程 / 线程。</li></ul><h3 id="异步操作" tabindex="-1"><a class="header-anchor" href="#异步操作" aria-hidden="true">#</a> 异步操作</h3><p>异步处理不仅可以减少系统服务间的耦合度，提高扩展性，事实上，它还可以提高系统的性能。异步处理可以有效减少响应等待时间，从而提高响应速度。</p><p>异步处理一般是通过分布式消息队列的方式。</p><p>异步处理可以解决以下问题：</p><ul><li>异步响应</li><li>应用解耦</li><li>流量削锋</li><li>日志处理</li><li>消息通讯</li></ul><h3 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h3><p>在高并发场景下，使用负载均衡技术为一个应用构建一个由多台服务器组成的服务器集群，将并发访问请求分发到多台服务器上处理，避免单一服务器因负载压力过大而响应缓慢，使用户请求具有更好的响应延迟特性。</p><p><strong>高性能集群的复杂性主要体现在需要增加一个任务分配器，以及为任务选择一个合适的任务分配算法</strong>。</p>',52),g={href:"https://dunwu.github.io/waterdrop/pages/98a1c1/",target:"_blank",rel:"noopener noreferrer"},f=t(`<h3 id="代码优化" tabindex="-1"><a class="header-anchor" href="#代码优化" aria-hidden="true">#</a> 代码优化</h3><h4 id="多线程" tabindex="-1"><a class="header-anchor" href="#多线程" aria-hidden="true">#</a> 多线程</h4><p>从资源利用的角度看，使用多线程的原因主要有两个：IO 阻塞和多 CPU。</p><p>线程数并非越多越好，那么启动多少线程合适呢？</p><p>有个参考公式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>启动线程数 = (任务执行时间 / (任务执行时间 - IO 等待时间)) * CPU 内核数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最佳启动线程数和 CPU 内核数成正比，和 IO 阻塞时间成反比。</p><ul><li>如果任务都是 CPU 计算型任务，那么线程数最多不要超过 CPU 内核数，因为启动再多线程，CPU 也来不及调度；</li><li>相反，如果是任务需要等待磁盘操作，网络响应，那么多启动线程有助于任务并发，提高系统吞吐量。</li></ul><h5 id="线程安全问题" tabindex="-1"><a class="header-anchor" href="#线程安全问题" aria-hidden="true">#</a> 线程安全问题</h5><p>线程安全问题时指多个线程并发访问某个资源，导致数据混乱。</p><p>解决手段有：</p><ul><li><strong>将对象设计为无状态对象</strong> - 典型应用：Servlet 就是无状态对象，可以被服务器多线程并发调用处理用户请求。</li><li><strong>使用局部对象</strong></li><li><strong>并发访问资源时使用锁</strong> - 但是引入锁会产生性能开销，应尽量使用轻量级的锁。</li></ul><h4 id="资源复用" tabindex="-1"><a class="header-anchor" href="#资源复用" aria-hidden="true">#</a> 资源复用</h4><p>应该尽量减少那些开销很大的系统资源的创建和销毁，如数据库连接、网络通信连接、线程、复杂对象等。从编程角度，资源复用主要有两种模式：单例模式和对象池。</p><h4 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h4><p>根据具体场景，选择合适的数据结构。</p><h4 id="垃圾回收" tabindex="-1"><a class="header-anchor" href="#垃圾回收" aria-hidden="true">#</a> 垃圾回收</h4><p>如果 Web 应用运行在 JVM 等具有垃圾回收功能的环境中，那么垃圾回收可能会对系统的性能特性产生巨大影响。立即垃圾回收机制有助于程序优化和参数调优，以及编写内存安全的代码。</p><h2 id="存储性能优化" tabindex="-1"><a class="header-anchor" href="#存储性能优化" aria-hidden="true">#</a> 存储性能优化</h2><h3 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h3><h4 id="数据库读写分离" tabindex="-1"><a class="header-anchor" href="#数据库读写分离" aria-hidden="true">#</a> 数据库读写分离</h4><p><strong>读写分离的基本原理是将数据库读写操作分散到不同的节点上</strong></p>`,22),b={href:"https://dunwu.github.io/waterdrop/pages/3faf18/",target:"_blank",rel:"noopener noreferrer"},m=e("h4",{id:"数据库分库分表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#数据库分库分表","aria-hidden":"true"},"#"),r(" 数据库分库分表")],-1),x=e("p",null,[e("strong",null,"数据分片指按照某个维度将存放在单一数据库中的数据分散地存放至多个数据库或表中以达到提升性能瓶颈以及可用性的效果"),r("。")],-1),_={href:"https://dunwu.github.io/waterdrop/pages/e1046e/",target:"_blank",rel:"noopener noreferrer"},P=t('<h4 id="nosql" tabindex="-1"><a class="header-anchor" href="#nosql" aria-hidden="true">#</a> Nosql</h4><p>关系型数据库的优势在于：存储结构化数据，有利于进行各种复杂查询。</p><p>但是，它也存在一些缺点：</p><ul><li>关系数据库存储的是行记录，无法存储数据结构</li><li>关系数据库的 schema 扩展很不方便</li><li>关系数据库在大数据场景下 I/O 较高</li><li>关系数据库的全文搜索功能比较弱</li></ul><p>为了解决上述问题，分别诞生了解决不同问题的 Nosql 数据库。</p><p>常见的 NoSQL 数据库可以分为四类：</p><ul><li><strong>K-V 数据库</strong>：KV 存储非常适合存储<strong>不涉及过多数据关系业务关系的数据</strong>，同时能有效减少读写磁盘的次数，比 SQL 数据库存储拥有更好的读写性能，能够<strong>解决关系型数据库无法存储数据结构的问题</strong>。以 Redis 为代表。</li><li><strong>列式数据库</strong>：<strong>适合于批量数据处理和即时查询，解决关系数据库大数据场景下的 I/O 问题</strong>。以 HBase 为代表。</li><li><strong>文档数据库</strong>：文档数据库（也称为文档型数据库）是<strong>旨在将半结构化数据存储为文档的一种数据库，它可以解决关系型数据库表结构 schema 扩展不方便的问题</strong>。文档数据库<strong>通常以 JSON 或 XML 格式存储数据</strong>。以 MongoDB 为代表。</li><li><strong>全文搜索引擎</strong>：<strong>解决关系型数据库全文搜索功能较弱的问题</strong>。以 Elasticsearch 为代表。</li></ul>',7),C={href:"https://github.com/dunwu/db-tutorial/blob/master/docs/nosql/nosql-selection.md",target:"_blank",rel:"noopener noreferrer"},k=t('<h3 id="文件存储" tabindex="-1"><a class="header-anchor" href="#文件存储" aria-hidden="true">#</a> 文件存储</h3><h4 id="机械键盘和固态硬盘" tabindex="-1"><a class="header-anchor" href="#机械键盘和固态硬盘" aria-hidden="true">#</a> 机械键盘和固态硬盘</h4><p>考虑使用固态硬盘替代机械键盘，因为它的读写速度更快。</p><h4 id="b-数和-lsm-树" tabindex="-1"><a class="header-anchor" href="#b-数和-lsm-树" aria-hidden="true">#</a> B+数和 LSM 树</h4><p>传统关系数据库的数据库索引一般都使用两级索引的 <strong>B+ 树</strong> 结构，树的层次最多三层。因此可能需要 5 次磁盘访问才能更新一条记录（三次磁盘访问获得数据索引及行 ID，然后再进行一次数据文件读操作及一次数据文件写操作）。</p><p>由于磁盘访问是随机的，传统机械键盘在数据随机访问时性能较差，每次数据访问都需要多次访问磁盘影响数据访问性能。</p><p>许多 Nosql 数据库中的索引采用 <strong>LSM 树</strong> 作为主要数据结构。LSM 树可视为一个 N 阶合并树。数据写操作都在内存中进行。在 <strong>LSM 树上进行一次数据更新不需要磁盘访问，速度远快于 B+ 树</strong>。</p><h4 id="raid-和-hdfs" tabindex="-1"><a class="header-anchor" href="#raid-和-hdfs" aria-hidden="true">#</a> RAID 和 HDFS</h4><p>RAID 是 Redundant Array of Independent Disks 的缩写，中文简称为独立冗余磁盘阵列。</p><p>RAID 是一种把多块独立的硬盘（物理硬盘）按不同的方式组合起来形成一个硬盘组（逻辑硬盘），从而提供比单个硬盘更高的存储性能和提供数据备份技术。</p><p>HDFS(分布式文件系统) 更被大型网站所青睐。它可以配合 <code>MapReduce</code> 并发计算任务框架进行大数据处理，可以在整个集群上并发访问所有磁盘，无需 RAID 支持。</p><p>HDFS 对数据存储空间的管理以数据块（Block）为单位，默认为 64 MB。所以，HDFS 更适合存储较大的文件。</p><h2 id="前端性能优化" tabindex="-1"><a class="header-anchor" href="#前端性能优化" aria-hidden="true">#</a> 前端性能优化</h2><h3 id="浏览器访问优化" tabindex="-1"><a class="header-anchor" href="#浏览器访问优化" aria-hidden="true">#</a> 浏览器访问优化</h3><ol><li><strong>减少 HTTP 请求</strong> - HTTP 请求需要建立通信链路，进行数据传输，开销高昂，所以减少 HTTP 请求数可以有效提高访问性能。减少 HTTP 的主要手段是合并 Css、JavaScript、图片。</li><li><strong>使用浏览器缓存</strong> - 因为静态资源文件更新频率低，可以缓存浏览器中以提高性能。设置 HTTP 头中的 <code>Cache-Control</code> 和 <code>Expires</code> 属性，可设定浏览器缓存。</li><li><strong>启用压缩</strong> - 在服务器端压缩静态资源文件，在浏览器端解压缩，可以有效减少传输的数据量。由于文本文件压缩率可达 80% 以上，所以可以对静态资源，如 Html、Css、JavaScrip 进行压缩。</li><li><strong>CSS 放在页面最上面，JavaScript 放在页面最下面</strong> - 浏览器会在下载完全部的 Css 后才对整个页面进行渲染，所以最好的做法是将 Css 放在页面最上面，让浏览器尽快下载 Css；JavaScript 则相反，浏览器加载 JavaScript 后立即执行，可能会阻塞整个页面，造成页面显示缓慢，因此 JavaScript 最好放在页面最下面。</li><li><strong>减少 Cookie 传输</strong> - Cookie 包含在 HTTP 每次的请求和响应中，太大的 Cookie 会严重影响数据传输。</li></ol><h3 id="cdn" tabindex="-1"><a class="header-anchor" href="#cdn" aria-hidden="true">#</a> CDN</h3><p>CDN 一般缓存的是静态资源。</p><p>CDN 的本质仍然是一个缓存，而且将数据缓存在离用户最近的地方，使用户已最快速度获取数据，即所谓网络访问第一跳。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/cdn.png" width="640"></div><h3 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h3><p>传统代理服务器位于浏览器一侧，代理浏览器将 HTTP 请求发送到互联网上，而反向代理服务器位于网站机房一侧，代理网站服务器接收 HTTP 请求。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/reverse-proxy.jpg" width="640"></div><p>反向代理服务器可以配置缓存功能加速 Web 请求，当用户第一次访问静态内容时，静态内容就会被缓存在反向代理服务器上。</p><p>反向代理还可以实现负载均衡，通过负载均衡构建的集群可以提高系统总体处理能力。</p><p>因为所有请求都必须先经过反向代理服务器，所以可以屏蔽一些攻击 IP，达到保护网站安全的作用。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',26),v={href:"https://item.jd.com/11322972.html",target:"_blank",rel:"noopener noreferrer"},T={href:"https://time.geekbang.org/column/intro/100028001",target:"_blank",rel:"noopener noreferrer"};function w(I,S){const a=l("ExternalLinkIcon");return o(),s("div",null,[h,r(" #### 性能测试的问题 "),p,e("blockquote",null,[e("p",null,[r("缓存解决方案请参考："),e("a",c,[r("缓存基本原理"),i(a)])])]),u,e("blockquote",null,[e("p",null,[r("缓存解决方案请参考："),e("a",g,[r("负载均衡"),i(a)])])]),f,e("blockquote",null,[e("p",null,[r("详细解决方案参考："),e("a",b,[r("读写分离"),i(a)])])]),m,x,e("blockquote",null,[e("p",null,[r("详细解决方案参考："),e("a",_,[r("分库分表"),i(a)])])]),P,e("blockquote",null,[e("p",null,[r("详情参考："),e("a",C,[r("Nosql 技术选型"),i(a)])])]),k,e("ul",null,[e("li",null,[e("a",v,[r("《大型网站技术架构：核心原理与案例分析》"),i(a)])]),e("li",null,[e("a",T,[r("Java 性能调优实战"),i(a)])])])])}const O=n(d,[["render",w],["__file","03.系统高性能架构.html.vue"]]);export{O as default};
