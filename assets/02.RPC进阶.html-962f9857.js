import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as d,c as o,a as e,b as a,d as r,e as n}from"./app-207caadd.js";const h={},s=n(`<h1 id="rpc-进阶篇" tabindex="-1"><a class="header-anchor" href="#rpc-进阶篇" aria-hidden="true">#</a> RPC 进阶篇</h1><h2 id="rpc-架构模型" tabindex="-1"><a class="header-anchor" href="#rpc-架构模型" aria-hidden="true">#</a> RPC 架构模型</h2><p>了解前面的知识点（序列化、动态代理、通信），其实已经可以实现一个点对点的 RPC 架构了。</p><p>采用微内核架构的 RPC 架构模型：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200610164920.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在 RPC 框架里面，怎么支持插件化架构的呢？我们可以将每个功能点抽象成一个接<br> 口，将这个接口作为插件的契约，然后把这个功能的接口与功能的实现分离，并提供接口的默认实现。在 Java 里面，JDK 有自带的 SPI（Service Provider Interface）服务发现机<br> 制，它可以动态地为某个接口寻找服务实现。使用 SPI 机制需要在 Classpath 下的 <code>META-INF/services</code> 目录里创建一个以服务接口命名的文件，这个文件里的内容就是这个接口的具体实现类。</p><p>但在实际项目中，我们其实很少使用到 JDK 自带的 SPI 机制，首先它不能按需加载，<br><code>ServiceLoader</code> 加载某个接口实现类的时候，会遍历全部获取，也就是接口的实现类得全部载入并实例化一遍，会造成不必要的浪费。另外就是扩展如果依赖其它的扩展，那就做不到自动注入和装配，这就很难和其他框架集成，比如扩展里面依赖了一个 Spring Bean，原生的 Java SPI 就不支持。</p><h2 id="服务注册和发现" tabindex="-1"><a class="header-anchor" href="#服务注册和发现" aria-hidden="true">#</a> 服务注册和发现</h2><p>RPC 框架必须要有服务注册和发现机制，这样，集群中的节点才能知道通信方的请求地址。</p><ul><li><strong>服务注册</strong>：在服务提供方启动的时候，将对外暴露的接口注册到注册中心之中，注册中心将这个服务节点的 IP 和接口保存下来。</li><li><strong>服务订阅</strong>：在服务调用方启动的时候，去注册中心查找并订阅服务提供方的 IP，然后缓存到本地，并用于后续的远程调用。</li></ul><h3 id="基于-zookeeper-的服务发现" tabindex="-1"><a class="header-anchor" href="#基于-zookeeper-的服务发现" aria-hidden="true">#</a> 基于 ZooKeeper 的服务发现</h3><p>使用 ZooKeeper 作为服务注册中心，是 Java 分布式系统的经典方案。</p><p>搭建一个 ZooKeeper 集群作为注册中心集群，服务注册的时候只需要服务节点向 ZooKeeper 节点写入注册信息即可，利用 ZooKeeper 的 Watcher 机制完成服务订阅与服务下发功能</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200610180056.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>通常我们可以使用 ZooKeeper、etcd 或者分布式缓存（如 Hazelcast）来解决事件通知问题，但当集群达到一定规模之后，依赖的 ZooKeeper 集群、etcd 集群可能就不稳定了，无法满足我们的需求。</p><p>在超大规模的服务集群下，注册中心所面临的挑战就是超大批量服务节点同时上下线，注册中心集群接受到大量服务变更请求，集群间各节点间需要同步大量服务节点数据，最终导致如下问题：</p><ul><li>注册中心负载过高；</li><li>各节点数据不一致；</li><li>服务下发不及时或下发错误的服务节点列表。</li></ul><p>RPC 框架依赖的注册中心的服务数据的一致性其实并不需要满足 CP，只要满足 AP 即可。</p><h3 id="基于消息总线的最终一致性的注册中心" tabindex="-1"><a class="header-anchor" href="#基于消息总线的最终一致性的注册中心" aria-hidden="true">#</a> 基于消息总线的最终一致性的注册中心</h3><p>ZooKeeper 的一大特点就是强一致性，ZooKeeper 集群的每个节点的数据每次发生更新操作，都会通知其它 ZooKeeper 节点同时执行更新。它要求保证每个节点的数据能够实时的完全一致，这也就直接导致了 ZooKeeper 集群性能上的下降。</p><p>而 RPC 框架的服务发现，在服务节点刚上线时，服务调用方是可以容忍在一段时间之后<br> （比如几秒钟之后）发现这个新上线的节点的。毕竟服务节点刚上线之后的几秒内，甚至更长的一段时间内没有接收到请求流量，对整个服务集群是没有什么影响的，所以我们可以牺牲掉 CP（强制一致性），而选择 AP（最终一致），来换取整个注册中心集群的性能和稳定性。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200717162006.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="健康检查" tabindex="-1"><a class="header-anchor" href="#健康检查" aria-hidden="true">#</a> 健康检查</h2><p><strong>使用频率适中的心跳去检测目标机器的健康状态</strong>。</p><ul><li>健康状态：建立连接成功，并且心跳探活也一直成功；</li><li>亚健康状态：建立连接成功，但是心跳请求连续失败；</li><li>死亡状态：建立连接失败。</li></ul><p>可以<strong>使用可用率来作为健康状态的量化标准</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>可用率 = 一个时间窗口内接口调用成功次数 / 总调用次数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当可用率低于某个比例，就认为这个节点存在问题，把它挪到亚健康列表，这样既考虑了高低频的调用接口，也兼顾了接口响应时间不同的问题。</p><h2 id="路由和负载均衡" tabindex="-1"><a class="header-anchor" href="#路由和负载均衡" aria-hidden="true">#</a> 路由和负载均衡</h2><p>对于服务调用方来说，一个接口会有多个服务提供方同时提供服务，所以我们的 RPC 在每次发起请求的时候，都需要从多个服务提供方节点里面选择一个用于发请求的节点。这被称为路由策略。</p><ul><li>IP 路由：最简单的当然是 IP 路由，因为服务上线后，会暴露服务到注册中心，将自身 IP、端口等元信息告知注册中心。这样消费方就可以在向注册中心请求服务地址时，感知其存在。</li><li>参数路由：但有时，会有一些复杂的场景，如：灰度发布、定点调用，我们并不希望上线的服务被所有消费者感知，为了更加细粒度的控制，可以使用参数路由。通过参数控制通信的路由策略。</li></ul><p>除了特殊场景的路由策略以外，对于机器中多个服务方，如何选择调用哪个服务节点，可以应用负载均衡策略。RPC 负载均衡策略一般包括随机、轮询、一致性 Hash、最近最少连接等。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200717163401.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,33),c={href:"https://dunwu.github.io/waterdrop/pages/98a1c1/",target:"_blank",rel:"noopener noreferrer"},g=n('<h3 id="超时重试" tabindex="-1"><a class="header-anchor" href="#超时重试" aria-hidden="true">#</a> 超时重试</h3><p>超时重试机制是指：当调用端发起的请求失败或超时未收到响应时，RPC 框架自身可以进行重试，再重新发送请求，用户可以自行设置是否开启重试以及重试的次数。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200610193748.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="限流、降级、熔断" tabindex="-1"><a class="header-anchor" href="#限流、降级、熔断" aria-hidden="true">#</a> 限流、降级、熔断</h3><p>限流方案：Redis + lua、Sentinel</p><p>熔断方案：Hystrix</p><h3 id="优雅启动关闭" tabindex="-1"><a class="header-anchor" href="#优雅启动关闭" aria-hidden="true">#</a> 优雅启动关闭</h3><p>如何避免服务停机带来的业务损失：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200610193806.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如何避免流量打到没有启动完成的节点：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200610193829.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="容错处理" tabindex="-1"><a class="header-anchor" href="#容错处理" aria-hidden="true">#</a> 容错处理</h2><h3 id="异常重试" tabindex="-1"><a class="header-anchor" href="#异常重试" aria-hidden="true">#</a> 异常重试</h3><p>就是当调用端发起的请求失败时，RPC 框架自身可以进行重试，再重新发送请求，用户可以自行设置是否开启重试以及重试的次数。</p><p>当然，不是所有的异常都要触发重试，只有符合重试条件的异常才能触发重试，比如网络超时异常、网络连接异常等等（这个需要 RPC 去判定）。</p><blockquote><p>注意：有时网络可能发生抖动，导致请求超时，这时如果 RPC 触发超时重试，会触发业务逻辑重复执行，如果接口没有幂等性设计，就可能引发问题。如：重发写表。</p></blockquote><h3 id="重试超时时间" tabindex="-1"><a class="header-anchor" href="#重试超时时间" aria-hidden="true">#</a> 重试超时时间</h3><p>连续的异常重试可能会出现一种不可靠的情况，那就是连续的异常重试并且每次处理的请求时间比较长，最终会导致请求处理的时间过长，超出用户设置的超时时间。</p><p>解决这个问题最直接的方式就是，在每次重试后都重置一下请求的超时时间。</p><p>当调用端发起 RPC 请求时，如果发送请求发生异常并触发了异常重试，我们可以先判定下这个请求是否已经超时，如果已经超时了就直接返回超时异常，否则就先重置下这个请求的超时时间，之后再发起重试。</p><p>在所有发起重试、负载均衡选择节点的时候，去掉重试之前出现过问题的那个节点，以保证重试的成功率。</p><h3 id="业务异常" tabindex="-1"><a class="header-anchor" href="#业务异常" aria-hidden="true">#</a> 业务异常</h3><p>RPC 框架是不会知道哪些业务异常能够去进行异常重试的，我们可以加个重试异常的白名<br> 单，用户可以将允许重试的异常加入到这个白名单中。当调用端发起调用，并且配置了异常重试策略，捕获到异常之后，我们就可以采用这样的异常处理策略。如果这个异常是 RPC 框架允许重试的异常，或者这个异常类型存在于可重试异常的白名单中，我们就允许对这个请求进行重试。</p><hr><p>综上，一个可靠的 RPC 容错处理机制如下：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200717163921.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="优雅上线下线" tabindex="-1"><a class="header-anchor" href="#优雅上线下线" aria-hidden="true">#</a> 优雅上线下线</h2><p>如何避免服务停机带来的业务损失？</p><h3 id="优雅下线" tabindex="-1"><a class="header-anchor" href="#优雅下线" aria-hidden="true">#</a> 优雅下线</h3><p>当服务提供方正在关闭，如果这之后还收到了新的业务请求，服务提供方直接返回一个特定的异常给调用方（比如 ShutdownException）。这个异常就是告诉调用方“我已经收到这个请求了，但是我正在关闭，并没有处理这个请求”，然后调用方收到这个异常响应后，RPC 框架把这个节点从健康列表挪出，并把请求自动重试到其他节点，因为这个请求是没有被服务提供方处理过，所以可以安全地重试到其他节点，这样就可以实现对业务无损。</p><p>在 Java 语言里面，对应的是 Runtime.addShutdownHook 方法，可以注册关闭的钩子。在 RPC 启动的时候，我们提前注册关闭钩子，并在里面添加了两个处理程序，一个负责开启关闭标识，一个负责安全关闭服务对象，服务对象在关闭的时候会通知调用方下线节点。同时需要在我们调用链里面加上挡板处理器，当新的请求来的时候，会判断关闭标识，如果正在关闭，则抛出特定异常。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220630194749.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="优雅上线" tabindex="-1"><a class="header-anchor" href="#优雅上线" aria-hidden="true">#</a> 优雅上线</h3><h4 id="启动预热" tabindex="-1"><a class="header-anchor" href="#启动预热" aria-hidden="true">#</a> 启动预热</h4><p>启动预热，就是让刚启动的服务提供方应用不承担全部的流量，而是让它被调用的次数随着时间的移动慢慢增加，最终让流量缓和地增加到跟已经运行一段时间后的水平一样。</p><p>首先，在真实环境中机器都会默认开启 NTP 时间同步功能，来保证所有机器时间的一致性。</p><p>调用方通过服务发现，除了可以拿到 IP 列表，还可以拿到对应的启动时间。我们需要把这个时间作用在负载均衡上。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220630194822.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>通过这个小逻辑的改动，我们就可以保证当服务提供方运行时长小于预热时间时，对服务提供方进行降权，减少被负载均衡选择的概率，避免让应用在启动之初就处于高负载状态，从而实现服务提供方在启动后有一个预热的过程。</p><h4 id="延迟暴露" tabindex="-1"><a class="header-anchor" href="#延迟暴露" aria-hidden="true">#</a> 延迟暴露</h4><p>服务提供方应用在没有启动完成的时候，调用方的请求就过来了，而调用方请求过来的原因是，服务提供方应用在启动过程中把解析到的 RPC 服务注册到了注册中心，这就导致在后续加载没有完成的情况下服务提供方的地址就被服务调用方感知到了。</p><p>为了解决这个问题，需要在应用启动加载、解析 Bean 的时候，如果遇到了 RPC 服务的 Bean，只先把这个<br> Bean 注册到 Spring-BeanFactory 里面去，而并不把这个 Bean 对应的接口注册到注册中心，只有等应用启动完成后，才把接口注册到注册中心用于服务发现，从而实现让服务调用方延迟获取到服务提供方地址。</p><p>具体如何实现呢？</p><p>我们可以在服务提供方应用启动后，接口注册到注册中心前，预留一个 Hook 过程，让用户可以实现可扩展的<br> Hook 逻辑。用户可以在 Hook 里面模拟调用逻辑，从而使 JVM 指令能够预热起来，并且用户也可以在 Hook 里面事先预加载一些资源，只有等所有的资源都加载完成后，最后才把接口注册到注册中心。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220630194919.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="限流熔断" tabindex="-1"><a class="header-anchor" href="#限流熔断" aria-hidden="true">#</a> 限流熔断</h2><p>限流算法有很多，比如最简单的计数器，还有可以做到平滑限流的滑动窗口、漏斗算法以及令牌桶算法等等。其中令牌桶算法最为常用。</p><p>服务端主要是通过限流来进行自我保护，我们在实现限流时要考虑到应用和 IP 级别，方便我们在服务治理的时候，对部分访问量特别大的应用进行合理的限流。</p><p>服务端的限流阈值配置都是作用于单机的，而在有些场景下，例如对整个服务设置限流阈值，服务进行扩容时，<br> 限流的配置并不方便，我们可以在注册中心或配置中心下发限流阈值配置的时候，将总服务节点数也下发给服务节点，让 RPC 框架自己去计算限流阈值。</p><p>我们还可以让 RPC 框架的限流模块依赖一个专门的限流服务，对服务设置限流阈值进行精准地控制，但是这种方式依赖了限流服务，相比单机的限流方式，在性能和耗时上有劣势。</p><p>调用端可以通过熔断机制进行自我保护，防止调用下游服务出现异常，或者耗时过长影响调<br> 用端的业务逻辑，RPC 框架可以在动态代理的逻辑中去整合熔断器，实现 RPC 框架的熔断<br> 功能。</p><h2 id="业务分组" tabindex="-1"><a class="header-anchor" href="#业务分组" aria-hidden="true">#</a> 业务分组</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200718204407.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在 RPC 里面我们可以通过分组的方式人为地给不同的调用方划分出不同的小集群，从而实现调用方流量隔离的效果，保障我们的核心业务不受非核心业务的干扰。但我们在考虑问题的时候，不能顾此失彼，不能因为新加一个的功能而影响到原有系统的稳定性。</p><p>其实我们不仅可以通过分组把服务提供方划分成不同规模的小集群，我们还可以利用分组完成一个接口多种实现的功能。正常情况下，为了方便我们自己管理服务，我一般都会建议每个接口完成的功能尽量保证唯一。但在有些特殊场景下，两个接口也会完全一样，只是具体实现上有那么一点不同，那么我们就可以在服务提供方应用里面同时暴露两个相同接口，但只是接口分组不一样罢了。</p><h3 id="动态分组" tabindex="-1"><a class="header-anchor" href="#动态分组" aria-hidden="true">#</a> 动态分组</h3><p>分组可以帮助服务提供方实现调用方的隔离。但是因为调用方流量并不是一成不变的，而且还可能会因为突发事件导致某个分组的流量溢出，而在整个大集群还有富余能力的时候，又因为分组隔离不能为出问题的集群提供帮助。</p><p>为了解决这种突发流量的问题，我们提供了一种更高效的方案，可以实现分组的快速伸缩。事实上我们还可以利用动态分组解决分组后给每个分组预留机器冗余的问题，我们没有必要把所有冗余的机器都分配到分组里面，我们可以把这些预留的机器做成一个共享的池子，从而减少整体预留的实例数量。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',59),l={href:"https://time.geekbang.org/column/intro/100046201",target:"_blank",rel:"noopener noreferrer"};function u(m,f){const i=p("ExternalLinkIcon");return d(),o("div",null,[s,e("blockquote",null,[e("p",null,[a("负载均衡详情可以参考："),e("a",c,[a("负载均衡基本原理"),r(i)])])]),g,e("ul",null,[e("li",null,[e("a",l,[a("RPC 实战与核心原理"),r(i)])])])])}const P=t(h,[["render",u],["__file","02.RPC进阶.html.vue"]]);export{P as default};
