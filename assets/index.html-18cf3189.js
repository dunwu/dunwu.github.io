import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as n,c as d,a as e,b as r,d as o,e as h}from"./app-d70a109d.js";const s={},c=e("h1",{id:"《dubbo-源码解读与实战》笔记",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#《dubbo-源码解读与实战》笔记","aria-hidden":"true"},"#"),r(" 《Dubbo 源码解读与实战》笔记")],-1),l=e("h2",{id:"开篇词-深入掌握-dubbo-原理与实现-提升你的职场竞争力",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#开篇词-深入掌握-dubbo-原理与实现-提升你的职场竞争力","aria-hidden":"true"},"#"),r(" 开篇词 深入掌握 Dubbo 原理与实现，提升你的职场竞争力")],-1),u={href:"http://dubbo.apache.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"},b=h(`<ul><li>面向接口的远程方法调用；</li><li>可靠、智能的容错和负载均衡；</li><li>服务自动注册和发现能力。</li></ul><p><strong>Dubbo 是一个分布式服务框架，致力于提供高性能、透明化的 RPC 远程服务调用方案以及服务治理方案，以帮助我们解决微服务架构落地时的问题。</strong></p><h2 id="dubbo-源码环境搭建-千里之行-始于足下" tabindex="-1"><a class="header-anchor" href="#dubbo-源码环境搭建-千里之行-始于足下" aria-hidden="true">#</a> Dubbo 源码环境搭建：千里之行，始于足下</h2><h3 id="dubbo-核心组件" tabindex="-1"><a class="header-anchor" href="#dubbo-核心组件" aria-hidden="true">#</a> Dubbo 核心组件</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/javaweb/distributed/rpc/dubbo/dubbo基本架构.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Registry - <strong>注册中心</strong>。负责服务地址的注册与查找，服务的 Provider 和 Consumer 只在启动时与注册中心交互。注册中心通过长连接感知 Provider 的存在，在 Provider 出现宕机的时候，注册中心会立即推送相关事件通知 Consumer。</p><p>Provider - <strong>服务提供者</strong>。在它启动的时候，会向 Registry 进行注册操作，将自己服务的地址和相关配置信息封装成 URL 添加到 ZooKeeper 中。</p><p>Consumer - <strong>服务消费者</strong>。在它启动的时候，会向 Registry 进行订阅操作。订阅操作会从 ZooKeeper 中获取 Provider 注册的 URL，并在 ZooKeeper 中添加相应的监听器。获取到 Provider URL 之后，Consumer 会根据负载均衡算法从多个 Provider 中选择一个 Provider 并与其建立连接，最后发起对 Provider 的 RPC 调用。 如果 Provider URL 发生变更，Consumer 将会通过之前订阅过程中在注册中心添加的监听器，获取到最新的 Provider URL 信息，进行相应的调整，比如断开与宕机 Provider 的连接，并与新的 Provider 建立连接。Consumer 与 Provider 建立的是长连接，且 Consumer 会缓存 Provider 信息，所以一旦连接建立，即使注册中心宕机，也不会影响已运行的 Provider 和 Consumer。</p><p>Monitor - <strong>监控中心</strong>。用于统计服务的调用次数和调用时间。Provider 和 Consumer 在运行过程中，会在内存中统计调用次数和调用时间，定时每分钟发送一次统计数据到监控中心。监控中心在上面的架构图中并不是必要角色，监控中心宕机不会影响 Provider、Consumer 以及 Registry 的功能，只会丢失监控数据而已。</p><p>Container - 服务运行容器。</p><h3 id="dubbo-核心模块" tabindex="-1"><a class="header-anchor" href="#dubbo-核心模块" aria-hidden="true">#</a> Dubbo 核心模块</h3><ul><li><strong>dubbo-common 模块：</strong> Dubbo 的一个公共模块，其中有很多工具类以及公共逻辑，如 Dubbo SPI 实现、时间轮实现、动态编译器等。</li><li><strong>dubbo-remoting 模块：</strong> Dubbo 的远程通信模块，其中的子模块依赖各种开源组件实现远程通信。在 dubbo-remoting-api 子模块中定义该模块的抽象概念，在其他子模块中依赖其他开源组件进行实现，例如，dubbo-remoting-netty4 子模块依赖 Netty 4 实现远程通信，dubbo-remoting-zookeeper 通过 Apache Curator 实现与 ZooKeeper 集群的交互。</li><li><strong>dubbo-rpc 模块：</strong> Dubbo 中对远程调用协议进行抽象的模块，其中抽象了各种协议，依赖于 dubbo-remoting 模块的远程调用功能。dubbo-rpc-api 子模块是核心抽象，其他子模块是针对具体协议的实现，例如，dubbo-rpc-dubbo 子模块是对 Dubbo 协议的实现，依赖了 dubbo-remoting-netty4 等 dubbo-remoting 子模块。 dubbo-rpc 模块的实现中只包含一对一的调用，不关心集群的相关内容。</li><li><strong>dubbo-cluster 模块：</strong> Dubbo 中负责管理集群的模块，提供了负载均衡、容错、路由等一系列集群相关的功能，最终的目的是将多个 Provider 伪装为一个 Provider，这样 Consumer 就可以像调用一个 Provider 那样调用 Provider 集群了。</li><li><strong>dubbo-registry 模块：</strong> Dubbo 中负责与多种开源注册中心进行交互的模块，提供注册中心的能力。其中， dubbo-registry-api 子模块是顶层抽象，其他子模块是针对具体开源注册中心组件的具体实现，例如，dubbo-registry-zookeeper 子模块是 Dubbo 接入 ZooKeeper 的具体实现。</li><li><strong>dubbo-monitor 模块：</strong> Dubbo 的监控模块，主要用于统计服务调用次数、调用时间以及实现调用链跟踪的服务。</li><li><strong>dubbo-config 模块：</strong> Dubbo 对外暴露的配置都是由该模块进行解析的。例如，dubbo-config-api 子模块负责处理 API 方式使用时的相关配置，dubbo-config-spring 子模块负责处理与 Spring 集成使用时的相关配置方式。有了 dubbo-config 模块，用户只需要了解 Dubbo 配置的规则即可，无须了解 Dubbo 内部的细节。</li><li><strong>dubbo-metadata 模块：</strong> Dubbo 的元数据模块。dubbo-metadata 模块的实现套路也是有一个 api 子模块进行抽象，然后其他子模块进行具体实现。</li><li><strong>dubbo-configcenter 模块：</strong> Dubbo 的动态配置模块，主要负责外部化配置以及服务治理规则的存储与通知，提供了多个子模块用来接入多种开源的服务发现组件。</li></ul><h2 id="dubbo-的配置总线-抓住-url-就理解了半个-dubbo" tabindex="-1"><a class="header-anchor" href="#dubbo-的配置总线-抓住-url-就理解了半个-dubbo" aria-hidden="true">#</a> Dubbo 的配置总线：抓住 URL，就理解了半个 Dubbo</h2><p>Dubbo 中任意的一个实现都可以抽象为一个 URL，Dubbo 使用 URL 来统一描述了所有对象和配置信息，并贯穿在整个 Dubbo 框架之中。Dubbo URL 格式如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>protocol://username:password@host:port/path?key=value&amp;key=value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>protocol</strong>：URL 的协议。我们常见的就是 HTTP 协议和 HTTPS 协议，当然，还有其他协议，如 FTP 协议、SMTP 协议等。</li><li><strong>username/password</strong>：用户名/密码。 HTTP Basic Authentication 中多会使用在 URL 的协议之后直接携带用户名和密码的方式。</li><li><strong>host/port</strong>：主机/端口。在实践中一般会使用域名，而不是使用具体的 host 和 port。</li><li><strong>path</strong>：请求的路径。</li><li><strong>parameters</strong>：参数键值对。一般在 GET 请求中会将参数放到 URL 中，POST 请求会将参数放到请求体中。</li></ul><p>Dubbo 中和 URL 相关的核心类：</p><ul><li><strong>URL</strong> - 定义了 URL 的结构；</li><li><strong>URLBuilder，</strong> 辅助构造 URL；</li><li><strong>URLStrParser，</strong> 将字符串解析成 URL 对象。</li></ul><h3 id="dubbo-中的-url-示例" tabindex="-1"><a class="header-anchor" href="#dubbo-中的-url-示例" aria-hidden="true">#</a> Dubbo 中的 URL 示例</h3><p>URL 在 SPI 中的应用：RegistryFactory.getRegistry() 方法。</p><p>URL 在服务暴露中的应用：ZookeeperRegistry.doRegister() 方法。</p><p>URL 在服务订阅中的应用：Registry.doSubscribe() 方法</p><h2 id="dubbo-spi-精析-接口实现两极反转-上" tabindex="-1"><a class="header-anchor" href="#dubbo-spi-精析-接口实现两极反转-上" aria-hidden="true">#</a> Dubbo SPI 精析，接口实现两极反转（上）</h2><p>Dubbo 通过 SPI 机制来实现微内核架构，以达到 OCP 原则（即“对扩展开放，对修改封闭”的原则）。</p><p>JDK SPI 要点：</p><ul><li>在 Classpath 下的 META-INF/services/ 目录里创建一个以服务接口命名的文件</li><li>此文件记录了该 jar 包提供的服务接口的具体实现类</li></ul><p>JDK SPI 源码分析</p><p>ServiceLoader.load() 方法，首先会尝试获取当前使用的 ClassLoader；查找失败后使用 SystemClassLoader；然后调用 reload() 方法。</p><p>在 reload() 方法中，首先会清理 providers 缓存（LinkedHashMap 类型的集合），该缓存用来记录 ServiceLoader 创建的实现对象，其中 Key 为实现类的完整类名，Value 为实现类的对象。之后创建 LazyIterator 迭代器，用于读取 SPI 配置文件并实例化实现类对象。</p><h2 id="dubbo-spi-精析-接口实现两极反转-下" tabindex="-1"><a class="header-anchor" href="#dubbo-spi-精析-接口实现两极反转-下" aria-hidden="true">#</a> Dubbo SPI 精析，接口实现两极反转（下）</h2><p>Dubbo 按照 SPI 配置文件的用途，将其分成了三类目录。</p><ul><li>META-INF/services/ 目录：该目录下的 SPI 配置文件用来兼容 JDK SPI 。</li><li>META-INF/dubbo/ 目录：该目录用于存放用户自定义 SPI 配置文件。</li><li>META-INF/dubbo/internal/ 目录：该目录用于存放 Dubbo 内部使用的 SPI 配置文件。</li></ul><p>Dubbo 将 SPI 配置文件改成了 <strong>KV 格式</strong>，例如：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">dubbo</span><span class="token punctuation">=</span><span class="token value attr-value">org.apache.dubbo.rpc.protocol.dubbo.DubboProtocol</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="spi-核心实现" tabindex="-1"><a class="header-anchor" href="#spi-核心实现" aria-hidden="true">#</a> SPI 核心实现</h3><p>@SPI 注解</p><p>Dubbo SPI 的核心逻辑几乎都封装在 ExtensionLoader 之中。</p><p>ExtensionLoader 中三个核心的静态字段。</p><ul><li><strong>strategies（LoadingStrategy[]类型）:</strong> LoadingStrategy 接口有三个实现（通过 JDK SPI 方式加载的），分别对应前面介绍的三个 Dubbo SPI 配置文件所在的目录</li><li><strong>EXTENSION_LOADERS（ConcurrentMap&lt;Class, ExtensionLoader&gt;类型）</strong> ：Dubbo 中一个扩展接口对应一个 ExtensionLoader 实例，该集合缓存了全部 ExtensionLoader 实例，其中的 Key 为扩展接口，Value 为加载其扩展实现的 ExtensionLoader 实例。</li><li><strong>EXTENSION_INSTANCES（ConcurrentMap&lt;Class&lt;?&gt;, Object&gt;类型）</strong>：该集合缓存了扩展实现类与其实例对象的映射关系。在前文示例中，Key 为 Class，Value 为 DubboProtocol 对象。</li></ul><h2 id="海量定时任务-一个时间轮搞定" tabindex="-1"><a class="header-anchor" href="#海量定时任务-一个时间轮搞定" aria-hidden="true">#</a> 海量定时任务，一个时间轮搞定</h2><p><strong>时间轮是一种高效的、批量管理定时任务的调度模型</strong>。时间轮一般会实现成一个环形结构，类似一个时钟，分为很多槽，一个槽代表一个时间间隔，每个槽使用双向链表存储定时任务；指针周期性地跳动，跳动到一个槽位，就执行该槽位的定时任务。</p><p>需要注意的是，单层时间轮的容量和精度都是有限的，对于精度要求特别高、时间跨度特别大或是海量定时任务需要调度的场景，通常会使用<strong>多级时间轮</strong>以及<strong>持久化存储与时间轮结合</strong>的方案。</p><p>核心接口和类：</p><ul><li>TimerTask 接口</li><li>Timer 接口</li><li>Timeout 接口</li><li>HashedWheelTimeout 类</li><li>HashedWheelBucket 类</li><li>HashedWheelTimer 类</li></ul><h2 id="zookeeper-与-curator-求你别用-zkclient-了-上" tabindex="-1"><a class="header-anchor" href="#zookeeper-与-curator-求你别用-zkclient-了-上" aria-hidden="true">#</a> ZooKeeper 与 Curator，求你别用 ZkClient 了（上）</h2><p>Dubbo 目前支持 Consul、etcd、Nacos、ZooKeeper、Redis 等多种开源组件作为注册中心，并且在 Dubbo 源码也有相应的接入模块。</p><p><strong>ZooKeeper 是一个针对分布式系统的、可靠的、可扩展的协调服务</strong>，它通常作为统一命名服务、统一配置管理、注册中心（分布式集群管理）、分布式锁服务、Leader 选举服务等角色出现。</p><p>ZooKeeper 集群中的角色</p><ul><li><strong>Client 节点</strong>：从业务角度来看，这是分布式应用中的一个节点，通过 ZkClient 或是其他 ZooKeeper 客户端与 ZooKeeper 集群中的一个 Server 实例维持长连接，并定时发送心跳。从 ZooKeeper 集群的角度来看，它是 ZooKeeper 集群的一个客户端，可以主动查询或操作 ZooKeeper 集群中的数据，也可以在某些 ZooKeeper 节点（ZNode）上添加监听。当被监听的 ZNode 节点发生变化时，例如，该 ZNode 节点被删除、新增子节点或是其中数据被修改等，ZooKeeper 集群都会立即通过长连接通知 Client。</li><li><strong>Leader 节点</strong>：ZooKeeper 集群的主节点，负责整个 ZooKeeper 集群的写操作，保证集群内事务处理的顺序性。同时，还要负责整个集群中所有 Follower 节点与 Observer 节点的数据同步。</li><li><strong>Follower 节点</strong>：ZooKeeper 集群中的从节点，可以接收 Client 读请求并向 Client 返回结果，并不处理写请求，而是转发到 Leader 节点完成写入操作。另外，Follower 节点还会参与 Leader 节点的选举。</li><li><strong>Observer 节点</strong>：ZooKeeper 集群中特殊的从节点，不会参与 Leader 节点的选举，其他功能与 Follower 节点相同。引入 Observer 角色的目的是增加 ZooKeeper 集群读操作的吞吐量，如果单纯依靠增加 Follower 节点来提高 ZooKeeper 的读吞吐量，那么有一个很严重的副作用，就是 ZooKeeper 集群的写能力会大大降低，因为 ZooKeeper 写数据时需要 Leader 将写操作同步给半数以上的 Follower 节点。引入 Observer 节点使得 ZooKeeper 集群在写能力不降低的情况下，大大提升了读操作的吞吐量。</li></ul><p>ZNode 节点类型有如下四种：</p><ul><li><strong>持久节点。</strong> 持久节点创建后，会一直存在，不会因创建该节点的 Client 会话失效而删除。</li><li><strong>持久顺序节点。</strong> 持久顺序节点的基本特性与持久节点一致，创建节点的过程中，ZooKeeper 会在其名字后自动追加一个单调增长的数字后缀，作为新的节点名。</li><li><strong>临时节点。</strong> 创建临时节点的 ZooKeeper Client 会话失效之后，其创建的临时节点会被 ZooKeeper 集群自动删除。与持久节点的另一点区别是，临时节点下面不能再创建子节点。</li><li><strong>临时顺序节点。</strong> 基本特性与临时节点一致，创建节点的过程中，ZooKeeper 会在其名字后自动追加一个单调增长的数字后缀，作为新的节点名。</li></ul><h2 id="zookeeper-与-curator-求你别用-zkclient-了-下" tabindex="-1"><a class="header-anchor" href="#zookeeper-与-curator-求你别用-zkclient-了-下" aria-hidden="true">#</a> ZooKeeper 与 Curator，求你别用 ZkClient 了（下）</h2><h2 id="代理模式与常见实现" tabindex="-1"><a class="header-anchor" href="#代理模式与常见实现" aria-hidden="true">#</a> 代理模式与常见实现</h2><p>代理模式</p><h3 id="jdk-动态代理" tabindex="-1"><a class="header-anchor" href="#jdk-动态代理" aria-hidden="true">#</a> JDK 动态代理</h3><p>JDK 动态代理的核心是 InvocationHandler 接口。</p><h3 id="cglib" tabindex="-1"><a class="header-anchor" href="#cglib" aria-hidden="true">#</a> CGLIB</h3><p>CGLib（Code Generation Library）是一个基于 ASM 的字节码生成库。它允许我们在运行时对字节码进行修改和动态生成。CGLib 采用字节码技术实现动态代理功能，其底层原理是通过字节码技术为目标类生成一个子类，并在该子类中采用方法拦截的方式拦截所有父类方法的调用，从而实现代理的功能。</p><p>因为 CGLib 使用生成子类的方式实现动态代理，所以无法代理 final 关键字修饰的方法（因为 final 方法是不能够被重写的）。这样的话，<strong>CGLib 与 JDK 动态代理之间可以相互补充：在目标类实现接口时，使用 JDK 动态代理创建代理对象；当目标类没有实现接口时，使用 CGLib 实现动态代理的功能</strong>。在 Spring、MyBatis 等多种开源框架中，都可以看到 JDK 动态代理与 CGLib 结合使用的场景。</p><p>CGLib 的实现有两个重要的成员组成。</p><ul><li><strong>Enhancer</strong>：指定要代理的目标对象以及实际处理代理逻辑的对象，最终通过调用 create() 方法得到代理对象，对这个对象所有的非 final 方法的调用都会转发给 MethodInterceptor 进行处理。</li><li><strong>MethodInterceptor</strong>：动态代理对象的方法调用都会转发到 intercept 方法进行增强。</li></ul><h3 id="javassist" tabindex="-1"><a class="header-anchor" href="#javassist" aria-hidden="true">#</a> Javassist</h3><p><strong>Javassist 是一个开源的生成 Java 字节码的类库</strong>，其主要优点在于简单、快速，直接使用 Javassist 提供的 Java API 就能动态修改类的结构，或是动态生成类。</p><h2 id="netty-入门-用它做网络编程都说好-上" tabindex="-1"><a class="header-anchor" href="#netty-入门-用它做网络编程都说好-上" aria-hidden="true">#</a> Netty 入门，用它做网络编程都说好（上）</h2><h3 id="netty-i-o-模型设计" tabindex="-1"><a class="header-anchor" href="#netty-i-o-模型设计" aria-hidden="true">#</a> Netty I/O 模型设计</h3><h4 id="传统阻塞-i-o-模型" tabindex="-1"><a class="header-anchor" href="#传统阻塞-i-o-模型" aria-hidden="true">#</a> 传统阻塞 I/O 模型</h4><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230626221005.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230626221044.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="i-o-多路复用模型" tabindex="-1"><a class="header-anchor" href="#i-o-多路复用模型" aria-hidden="true">#</a> I/O 多路复用模型</h4><p>针对传统的阻塞 I/O 模型的缺点，I/O 复用的模型在性能方面有不小的提升。I/O 复用模型中的多个连接会共用一个 Selector 对象，由 Selector 感知连接的读写事件，而此时的线程数并不需要和连接数一致，只需要很少的线程定期从 Selector 上查询连接的读写状态即可，无须大量线程阻塞等待连接。当某个连接有新的数据可以处理时，操作系统会通知线程，线程从阻塞状态返回，开始进行读写操作以及后续的业务逻辑处理。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230626221405.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Netty 就是采用了上述 I/O 复用的模型。由于多路复用器 Selector 的存在，可以同时并发处理成百上千个网络连接，大大增加了服务器的处理能力。另外，Selector 并不会阻塞线程，也就是说当一个连接不可读或不可写的时候，线程可以去处理其他可读或可写的连接，这就充分提升了 I/O 线程的运行效率，避免由于频繁 I/O 阻塞导致的线程切换。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230626221543.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="netty-线程模型设计" tabindex="-1"><a class="header-anchor" href="#netty-线程模型设计" aria-hidden="true">#</a> Netty 线程模型设计</h3><p><strong>Netty 采用了 Reactor 线程模型的设计。</strong> Reactor 模式，也被称为 Dispatcher 模式，<strong>核心原理是 Selector 负责监听 I/O 事件，在监听到 I/O 事件之后，分发（Dispatch）给相关线程进行处理</strong>。</p><h4 id="单-reactor-单线程" tabindex="-1"><a class="header-anchor" href="#单-reactor-单线程" aria-hidden="true">#</a> 单 Reactor 单线程</h4><p>Reactor 对象监听客户端请求事件，收到事件后通过 Dispatch 进行分发。如果是连接建立的事件，则由 Acceptor 通过 Accept 处理连接请求，然后创建一个 Handler 对象处理连接建立之后的业务请求。如果不是连接建立的事件，而是数据的读写事件，则 Reactor 会将事件分发对应的 Handler 来处理，由这里唯一的线程调用 Handler 对象来完成读取数据、业务处理、发送响应的完整流程。当然，该过程中也可能会出现连接不可读或不可写等情况，该单线程会去执行其他 Handler 的逻辑，而不是阻塞等待。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230626221855.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>单 Reactor 单线程的优点就是：线程模型简单，没有引入多线程，自然也就没有多线程并发和竞争的问题。</p><p>但其缺点也非常明显，那就是<strong>性能瓶颈问题</strong>，一个线程只能跑在一个 CPU 上，能处理的连接数是有限的，无法完全发挥多核 CPU 的优势。一旦某个业务逻辑耗时较长，这唯一的线程就会卡在上面，无法处理其他连接的请求，程序进入假死的状态，可用性也就降低了。正是由于这种限制，一般只会在<strong>客户端</strong>使用这种线程模型。</p><h4 id="单-reactor-多线程" tabindex="-1"><a class="header-anchor" href="#单-reactor-多线程" aria-hidden="true">#</a> 单 Reactor 多线程</h4><p>在单 Reactor 多线程的架构中，Reactor 监控到客户端请求之后，如果连接建立的请求，则由 Acceptor 通过 accept 处理，然后创建一个 Handler 对象处理连接建立之后的业务请求。如果不是连接建立请求，则 Reactor 会将事件分发给调用连接对应的 Handler 来处理。到此为止，该流程与单 Reactor 单线程的模型基本一致，<strong>唯一的区别就是执行 Handler 逻辑的线程隶属于一个线程池</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230626222342.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>很明显，单 Reactor 多线程的模型可以充分利用多核 CPU 的处理能力，提高整个系统的吞吐量，但引入多线程模型就要考虑线程并发、数据共享、线程调度等问题。在这个模型中，只有一个线程来处理 Reactor 监听到的所有 I/O 事件，其中就包括连接建立事件以及读写事件，当连接数不断增大的时候，这个唯一的 Reactor 线程也会遇到瓶颈。</p><h4 id="主从-reactor-多线程" tabindex="-1"><a class="header-anchor" href="#主从-reactor-多线程" aria-hidden="true">#</a> 主从 Reactor 多线程</h4><p>为了解决单 Reactor 多线程模型中的问题，我们可以引入多个 Reactor。其中，Reactor 主线程负责通过 Acceptor 对象处理 MainReactor 监听到的连接建立事件，当 Acceptor 完成网络连接的建立之后，MainReactor 会将建立好的连接分配给 SubReactor 进行后续监听。</p><p>当一个连接被分配到一个 SubReactor 之上时，会由 SubReactor 负责监听该连接上的读写事件。当有新的读事件（OP_READ）发生时，Reactor 子线程就会调用对应的 Handler 读取数据，然后分发给 Worker 线程池中的线程进行处理并返回结果。待处理结束之后，Handler 会根据处理结果调用 send 将响应返回给客户端，当然此时连接要有可写事件（OP_WRITE）才能发送数据。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230626222425.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>主从 Reactor 多线程的设计模式解决了单一 Reactor 的瓶颈。<strong>主从 Reactor 职责明确，主 Reactor 只负责监听连接建立事件，SubReactor 只负责监听读写事件</strong>。整个主从 Reactor 多线程架构充分利用了多核 CPU 的优势，可以支持扩展，而且与具体的业务逻辑充分解耦，复用性高。但不足的地方是，在交互上略显复杂，需要一定的编程门槛。</p><h4 id="netty-线程模型" tabindex="-1"><a class="header-anchor" href="#netty-线程模型" aria-hidden="true">#</a> Netty 线程模型</h4><p>Netty 同时支持上述几种线程模式</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230626222709.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h4><p><strong>Netty 抽象出两组线程池：BossGroup 专门用于接收客户端的连接，WorkerGroup 专门用于网络的读写</strong>。BossGroup 和 WorkerGroup 类型都是 NioEventLoopGroup，相当于一个事件循环组，其中包含多个事件循环 ，每一个事件循环是 NioEventLoop。</p><p>NioEventLoop 表示一个不断循环的、执行处理任务的线程，每个 NioEventLoop 都有一个 Selector 对象与之对应，用于监听绑定在其上的连接，这些连接上的事件由 Selector 对应的这条线程处理。每个 NioEventLoopGroup 可以含有多个 NioEventLoop，也就是多个线程。</p><p>每个 Boss NioEventLoop 会监听 Selector 上连接建立的 accept 事件，然后处理 accept 事件与客户端建立网络连接，生成相应的 NioSocketChannel 对象，一个 NioSocketChannel 就表示一条网络连接。之后会将 NioSocketChannel 注册到某个 Worker NioEventLoop 上的 Selector 中。</p><p>每个 Worker NioEventLoop 会监听对应 Selector 上的 read/write 事件，当监听到 read/write 事件的时候，会通过 Pipeline 进行处理。一个 Pipeline 与一个 Channel 绑定，在 Pipeline 上可以添加多个 ChannelHandler，每个 ChannelHandler 中都可以包含一定的逻辑，例如编解码等。Pipeline 在处理请求的时候，会按照我们指定的顺序调用 ChannelHandler。</p><h2 id="netty-入门-用它做网络编程都说好-下" tabindex="-1"><a class="header-anchor" href="#netty-入门-用它做网络编程都说好-下" aria-hidden="true">#</a> Netty 入门，用它做网络编程都说好（下）</h2><h3 id="channel" tabindex="-1"><a class="header-anchor" href="#channel" aria-hidden="true">#</a> Channel</h3><p>Channel 是 Netty 对网络连接的抽象，核心功能是执行网络 I/O 操作。不同协议、不同阻塞类型的连接对应不同的 Channel 类型。</p><p>常用的 NIO Channel 类型。</p><ul><li><strong>NioSocketChannel</strong>：对应异步的 TCP Socket 连接。</li><li><strong>NioServerSocketChannel</strong>：对应异步的服务器端 TCP Socket 连接。</li><li><strong>NioDatagramChannel</strong>：对应异步的 UDP 连接。</li></ul><h3 id="channelfuture" tabindex="-1"><a class="header-anchor" href="#channelfuture" aria-hidden="true">#</a> ChannelFuture</h3><h3 id="selector" tabindex="-1"><a class="header-anchor" href="#selector" aria-hidden="true">#</a> Selector</h3><p><strong>Selector 是对多路复用器的抽象</strong>，也是 Java NIO 的核心基础组件之一。Netty 就是基于 Selector 对象实现 I/O 多路复用的，在 Selector 内部，会通过系统调用不断地查询这些注册在其上的 Channel 是否有已就绪的 I/O 事件，例如，可读事件（OP_READ）、可写事件（OP_WRITE）或是网络连接事件（OP_ACCEPT）等，而无须使用用户线程进行轮询。这样，我们就可以用一个线程监听多个 Channel 上发生的事件。</p><p>EventLoop</p><p>EventLoopGroup</p><h2 id="简易版-rpc-框架实现-上" tabindex="-1"><a class="header-anchor" href="#简易版-rpc-框架实现-上" aria-hidden="true">#</a> 简易版 RPC 框架实现（上）</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230626223647.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="简易版-rpc-框架实现-下" tabindex="-1"><a class="header-anchor" href="#简易版-rpc-框架实现-下" aria-hidden="true">#</a> 简易版 RPC 框架实现（下）</h2><h2 id="本地缓存-降低-zookeeper-压力的一个常用手段" tabindex="-1"><a class="header-anchor" href="#本地缓存-降低-zookeeper-压力的一个常用手段" aria-hidden="true">#</a> 本地缓存：降低 ZooKeeper 压力的一个常用手段</h2><h2 id="重试机制是网络操作的基本保证" tabindex="-1"><a class="header-anchor" href="#重试机制是网络操作的基本保证" aria-hidden="true">#</a> 重试机制是网络操作的基本保证</h2><h2 id="zookeeper-注册中心实现-官方推荐注册中心实践" tabindex="-1"><a class="header-anchor" href="#zookeeper-注册中心实现-官方推荐注册中心实践" aria-hidden="true">#</a> ZooKeeper 注册中心实现，官方推荐注册中心实践</h2><h2 id="dubbo-serialize-层-多种序列化算法-总有一款适合你" tabindex="-1"><a class="header-anchor" href="#dubbo-serialize-层-多种序列化算法-总有一款适合你" aria-hidden="true">#</a> Dubbo Serialize 层：多种序列化算法，总有一款适合你</h2><h2 id="dubbo-remoting-层核心接口分析-这居然是一套兼容所有-nio-框架的设计" tabindex="-1"><a class="header-anchor" href="#dubbo-remoting-层核心接口分析-这居然是一套兼容所有-nio-框架的设计" aria-hidden="true">#</a> Dubbo Remoting 层核心接口分析：这居然是一套兼容所有 NIO 框架的设计？</h2><h2 id="buffer-缓冲区-我们不生产数据-我们只是数据的搬运工" tabindex="-1"><a class="header-anchor" href="#buffer-缓冲区-我们不生产数据-我们只是数据的搬运工" aria-hidden="true">#</a> Buffer 缓冲区：我们不生产数据，我们只是数据的搬运工</h2><h2 id="transporter-层核心实现-编解码与线程模型一文打尽-上" tabindex="-1"><a class="header-anchor" href="#transporter-层核心实现-编解码与线程模型一文打尽-上" aria-hidden="true">#</a> Transporter 层核心实现：编解码与线程模型一文打尽（上）</h2><h2 id="transporter-层核心实现-编解码与线程模型一文打尽-下" tabindex="-1"><a class="header-anchor" href="#transporter-层核心实现-编解码与线程模型一文打尽-下" aria-hidden="true">#</a> Transporter 层核心实现：编解码与线程模型一文打尽（下）</h2><h2 id="exchange-层剖析-彻底搞懂-request-response-模型-上" tabindex="-1"><a class="header-anchor" href="#exchange-层剖析-彻底搞懂-request-response-模型-上" aria-hidden="true">#</a> Exchange 层剖析：彻底搞懂 Request-Response 模型（上）</h2><h2 id="exchange-层剖析-彻底搞懂-request-response-模型-下" tabindex="-1"><a class="header-anchor" href="#exchange-层剖析-彻底搞懂-request-response-模型-下" aria-hidden="true">#</a> Exchange 层剖析：彻底搞懂 Request-Response 模型（下）</h2><h2 id="核心接口介绍-rpc-层骨架梳理" tabindex="-1"><a class="header-anchor" href="#核心接口介绍-rpc-层骨架梳理" aria-hidden="true">#</a> 核心接口介绍，RPC 层骨架梳理</h2><h2 id="从-protocol-起手-看服务暴露和服务引用的全流程-上" tabindex="-1"><a class="header-anchor" href="#从-protocol-起手-看服务暴露和服务引用的全流程-上" aria-hidden="true">#</a> 从 Protocol 起手，看服务暴露和服务引用的全流程（上）</h2><h2 id="从-protocol-起手-看服务暴露和服务引用的全流程-下" tabindex="-1"><a class="header-anchor" href="#从-protocol-起手-看服务暴露和服务引用的全流程-下" aria-hidden="true">#</a> 从 Protocol 起手，看服务暴露和服务引用的全流程（下）</h2><h2 id="加餐-直击-dubbo-心脏-带你一起探秘-invoker-上" tabindex="-1"><a class="header-anchor" href="#加餐-直击-dubbo-心脏-带你一起探秘-invoker-上" aria-hidden="true">#</a> 加餐：直击 Dubbo “心脏”，带你一起探秘 Invoker（上）</h2><h2 id="加餐-直击-dubbo-心脏-带你一起探秘-invoker-下" tabindex="-1"><a class="header-anchor" href="#加餐-直击-dubbo-心脏-带你一起探秘-invoker-下" aria-hidden="true">#</a> 加餐：直击 Dubbo “心脏”，带你一起探秘 Invoker（下）</h2><h2 id="复杂问题简单化-代理帮你隐藏了多少底层细节" tabindex="-1"><a class="header-anchor" href="#复杂问题简单化-代理帮你隐藏了多少底层细节" aria-hidden="true">#</a> 复杂问题简单化，代理帮你隐藏了多少底层细节？</h2><h2 id="加餐-http-协议-json-rpc-dubbo-跨语言就是如此简单" tabindex="-1"><a class="header-anchor" href="#加餐-http-协议-json-rpc-dubbo-跨语言就是如此简单" aria-hidden="true">#</a> 加餐：HTTP 协议 + JSON-RPC，Dubbo 跨语言就是如此简单</h2><h2 id="filter-接口-扩展-dubbo-框架的常用手段指北" tabindex="-1"><a class="header-anchor" href="#filter-接口-扩展-dubbo-框架的常用手段指北" aria-hidden="true">#</a> Filter 接口，扩展 Dubbo 框架的常用手段指北</h2><h2 id="加餐-深潜-directory-实现-探秘服务目录玄机" tabindex="-1"><a class="header-anchor" href="#加餐-深潜-directory-实现-探秘服务目录玄机" aria-hidden="true">#</a> 加餐：深潜 Directory 实现，探秘服务目录玄机</h2><h2 id="路由机制-请求到底怎么走-它说了算-上" tabindex="-1"><a class="header-anchor" href="#路由机制-请求到底怎么走-它说了算-上" aria-hidden="true">#</a> 路由机制：请求到底怎么走，它说了算（上）</h2><h2 id="路由机制-请求到底怎么走-它说了算-下" tabindex="-1"><a class="header-anchor" href="#路由机制-请求到底怎么走-它说了算-下" aria-hidden="true">#</a> 路由机制：请求到底怎么走，它说了算（下）</h2><h2 id="加餐-初探-dubbo-动态配置的那些事儿" tabindex="-1"><a class="header-anchor" href="#加餐-初探-dubbo-动态配置的那些事儿" aria-hidden="true">#</a> 加餐：初探 Dubbo 动态配置的那些事儿</h2><h2 id="负载均衡-公平公正物尽其用的负载均衡策略-这里都有-上" tabindex="-1"><a class="header-anchor" href="#负载均衡-公平公正物尽其用的负载均衡策略-这里都有-上" aria-hidden="true">#</a> 负载均衡：公平公正物尽其用的负载均衡策略，这里都有（上）</h2><h2 id="负载均衡-公平公正物尽其用的负载均衡策略-这里都有-下" tabindex="-1"><a class="header-anchor" href="#负载均衡-公平公正物尽其用的负载均衡策略-这里都有-下" aria-hidden="true">#</a> 负载均衡：公平公正物尽其用的负载均衡策略，这里都有（下）</h2><h2 id="集群容错-一个好汉三个帮-上" tabindex="-1"><a class="header-anchor" href="#集群容错-一个好汉三个帮-上" aria-hidden="true">#</a> 集群容错：一个好汉三个帮（上）</h2><h2 id="集群容错-一个好汉三个帮-下" tabindex="-1"><a class="header-anchor" href="#集群容错-一个好汉三个帮-下" aria-hidden="true">#</a> 集群容错：一个好汉三个帮（下）</h2><h2 id="加餐-多个返回值不用怕-merger-合并器来帮忙" tabindex="-1"><a class="header-anchor" href="#加餐-多个返回值不用怕-merger-合并器来帮忙" aria-hidden="true">#</a> 加餐：多个返回值不用怕，Merger 合并器来帮忙</h2><h2 id="加餐-模拟远程调用-mock-机制帮你搞定" tabindex="-1"><a class="header-anchor" href="#加餐-模拟远程调用-mock-机制帮你搞定" aria-hidden="true">#</a> 加餐：模拟远程调用，Mock 机制帮你搞定</h2><h2 id="加餐-一键通关服务发布全流程" tabindex="-1"><a class="header-anchor" href="#加餐-一键通关服务发布全流程" aria-hidden="true">#</a> 加餐：一键通关服务发布全流程</h2><h2 id="加餐-服务引用流程全解析" tabindex="-1"><a class="header-anchor" href="#加餐-服务引用流程全解析" aria-hidden="true">#</a> 加餐：服务引用流程全解析</h2><h2 id="服务自省设计方案-新版本新方案" tabindex="-1"><a class="header-anchor" href="#服务自省设计方案-新版本新方案" aria-hidden="true">#</a> 服务自省设计方案：新版本新方案</h2><h2 id="元数据方案深度剖析-如何避免注册中心数据量膨胀" tabindex="-1"><a class="header-anchor" href="#元数据方案深度剖析-如何避免注册中心数据量膨胀" aria-hidden="true">#</a> 元数据方案深度剖析，如何避免注册中心数据量膨胀？</h2><h2 id="加餐-深入服务自省方案中的服务发布订阅-上" tabindex="-1"><a class="header-anchor" href="#加餐-深入服务自省方案中的服务发布订阅-上" aria-hidden="true">#</a> 加餐：深入服务自省方案中的服务发布订阅（上）</h2><h2 id="加餐-深入服务自省方案中的服务发布订阅-下" tabindex="-1"><a class="header-anchor" href="#加餐-深入服务自省方案中的服务发布订阅-下" aria-hidden="true">#</a> 加餐：深入服务自省方案中的服务发布订阅（下）</h2><h2 id="配置中心设计与实现-集中化配置-and-本地化配置-我都要-上" tabindex="-1"><a class="header-anchor" href="#配置中心设计与实现-集中化配置-and-本地化配置-我都要-上" aria-hidden="true">#</a> 配置中心设计与实现：集中化配置 and 本地化配置，我都要（上）</h2><h2 id="配置中心设计与实现-集中化配置-and-本地化配置-我都要-下" tabindex="-1"><a class="header-anchor" href="#配置中心设计与实现-集中化配置-and-本地化配置-我都要-下" aria-hidden="true">#</a> 配置中心设计与实现：集中化配置 and 本地化配置，我都要（下）</h2><h2 id="结束语-认真学习-缩小差距" tabindex="-1"><a class="header-anchor" href="#结束语-认真学习-缩小差距" aria-hidden="true">#</a> 结束语 认真学习，缩小差距</h2><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,148),p={href:"https://kaiwu.lagou.com/course/courseInfo.htm?courseId=393",target:"_blank",rel:"noopener noreferrer"};function g(f,x){const a=t("ExternalLinkIcon");return n(),d("div",null,[c,l,e("p",null,[e("a",u,[r("Apache Dubbo"),o(a)]),r("是一款高性能、轻量级的开源 Java RPC 框架，它提供了三大核心能力：")]),b,e("ul",null,[e("li",null,[e("a",p,[r("《Dubbo 源码解读与实战》"),o(a)])])])])}const P=i(s,[["render",g],["__file","index.html.vue"]]);export{P as default};
