import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as s,c as o,a,b as e,d as n,e as r}from"./app-2f2b7333.js";const l={},d=r(`<h1 id="《rpc-实战与核心原理》笔记" tabindex="-1"><a class="header-anchor" href="#《rpc-实战与核心原理》笔记" aria-hidden="true">#</a> 《RPC 实战与核心原理》笔记</h1><h2 id="别老想着怎么用好-rpc-框架-你得多花时间琢磨原理" tabindex="-1"><a class="header-anchor" href="#别老想着怎么用好-rpc-框架-你得多花时间琢磨原理" aria-hidden="true">#</a> 别老想着怎么用好 RPC 框架，你得多花时间琢磨原理</h2><p>为什么要学习 RPC</p><p>RPC 不仅是微服务的架构基础，实际上，只要涉及网络通信，就可能用到 RPC。</p><ul><li><p>例 1：大型分布式应用系统可能会依赖消息队列、分布式缓存、分布式数据库以及统一配置中心等，应用程序与依赖的这些中间件之间都可以通过 RPC 进行通信。比如 etcd，它作为一个统一的配置服务，客户端就是通过 gRPC 框架与服务端进行通信的。</p></li><li><p>例 2：我们经常会谈到的容器编排引擎 Kubernetes，它本身就是分布式的，Kubernetes 的 kube-apiserver 与整个分布式集群中的每个组件间的通讯，都是通过 gRPC 框架进行的。</p></li></ul><p><strong>RPC 是解决分布式系统通信问题的一大利器</strong>。</p><h2 id="核心原理-能否画张图解释下-rpc-的通信流程" tabindex="-1"><a class="header-anchor" href="#核心原理-能否画张图解释下-rpc-的通信流程" aria-hidden="true">#</a> 核心原理：能否画张图解释下 RPC 的通信流程？</h2><h3 id="什么是-rpc" tabindex="-1"><a class="header-anchor" href="#什么是-rpc" aria-hidden="true">#</a> 什么是 RPC？</h3><p>RPC 的全称是 Remote Procedure Call，即<strong>远程过程调用</strong>。</p><p>RPC 的作用体现在两个方面：</p><ul><li>屏蔽远程调用跟本地调用的差异，让用户像调用本地一样去调用远程方法。</li><li>隐藏底层网络通信的复杂性，让用户更专注于业务逻辑。</li></ul><h3 id="rpc-通信流程" tabindex="-1"><a class="header-anchor" href="#rpc-通信流程" aria-hidden="true">#</a> RPC 通信流程</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220619100051.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>RPC 是一个远程调用，因此必然需要通过网络传输数据，且 RPC 常用于业务系统之间的数据交互，需要保证其可靠性，所以 RPC 一般默认采用 <strong>TCP 协议</strong>来传输。</p><p>网络传输数据是二进制数据，因此请求方需要将请求参数转为二进制数据，即<strong>序列化</strong>。</p><p>响应方接受到请求，要将二进制数据转换为请求参数，需要<strong>反序列化</strong>。</p><p>请求方和响应方识别彼此的信息，需要约定好彼此数据的格式，即<strong>协议</strong>。<strong>大多数的协议会分成两部分，分别是数据头和消息体</strong>。数据头一般用于身份识别，包括协议标识、数据大小、请求类型、序列化类型等信息；消息体主要是请求的业务参数信息和扩展属性等。</p><p>为了屏蔽底层通信细节，使用户聚焦自身业务，因此 RPC 框架一般引入了动态代理，通过依赖注入等技术，拦截方法调用，完成远程调用的通信逻辑。</p><h3 id="rpc-在架构中的位置" tabindex="-1"><a class="header-anchor" href="#rpc-在架构中的位置" aria-hidden="true">#</a> RPC 在架构中的位置</h3><p>RPC 框架能够帮助我们解决系统拆分后的通信问题，并且能让我们像调用本地一样去调用<br> 远程方法。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220619101023.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="协议-怎么设计可扩展且向后兼容的协议" tabindex="-1"><a class="header-anchor" href="#协议-怎么设计可扩展且向后兼容的协议" aria-hidden="true">#</a> 协议：怎么设计可扩展且向后兼容的协议？</h2><h3 id="协议的作用" tabindex="-1"><a class="header-anchor" href="#协议的作用" aria-hidden="true">#</a> 协议的作用</h3><p>在传输过程中，RPC 并不会把请求参数的所有二进制数据整体一下子发送到对端机器上，中间可能会拆分成好几个数据包，也可能会合并其他请求的数据包（合并的前提是同一个 TCP 连接上的数据），至于怎么拆分合并，这其中的细节会涉及到系统参数配置和 TCP 窗口大小。对于服务提供方应用来说，他会从 TCP 通道里面收到很多的二进制数据，那这时候怎么识别出哪些二进制是第一个请求的呢？</p><p>个人理解：为了避免语义不一致的事情发生，需要为数据报文设定边界，请求方和接收方都按照设定的边界去读写数据。这类似于文章使用标点符号去断句。</p><h3 id="为何需要设计-rpc-协议" tabindex="-1"><a class="header-anchor" href="#为何需要设计-rpc-协议" aria-hidden="true">#</a> 为何需要设计 RPC 协议</h3><p>RPC 协议对性能要求高，而公有网络协议往往数据报文较大，内容不够紧凑。</p><h3 id="如何设计-rpc-协议" tabindex="-1"><a class="header-anchor" href="#如何设计-rpc-协议" aria-hidden="true">#</a> 如何设计 RPC 协议？</h3><p>首先，必须先明确消息的边界，即确定消息的长度。因此，至少要分为：消息长度+消息内容两部分。</p><p>接下来，我们会发现，在使用过程中，仅消息长度，不足以明确通信中的很多细节：如序列化方式是怎样的？是否消息压缩？压缩格式是怎样的？如果协议发生变化，需要明确协议版本等等。</p><p>综上，一个 RPC 协议大概会由下图中的这些参数组成：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220619102052.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="可扩展的协议" tabindex="-1"><a class="header-anchor" href="#可扩展的协议" aria-hidden="true">#</a> 可扩展的协议</h3><p>前面所述的协议属于定长协议头，那也就是说往后就不能再往协议头里加新参数了，如果加参<br> 数就会导致线上兼容问题。</p><p>为了保证能平滑地升级改造前后的协议，我们有必要设计一种支持可扩展的协议。其关键在于让协议头支持可扩展，扩展后协议头的长度就不能定长了。那要实现读取不定长的协议头里面的内容，在这之前肯定需要一个固定的地方读取长度，所以我们需要一个固定的写入协议头的长度。整体协议就变成了三部分内容：固定部分、协议头内容、协议体内容。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220619102833.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="序列化-对象怎么在网络中传输" tabindex="-1"><a class="header-anchor" href="#序列化-对象怎么在网络中传输" aria-hidden="true">#</a> 序列化：对象怎么在网络中传输？</h2><h3 id="为什么需要序列化" tabindex="-1"><a class="header-anchor" href="#为什么需要序列化" aria-hidden="true">#</a> 为什么需要序列化</h3><p>调用方和被调用方的数据原本是对象，无法在网络中传输，必须转换为二进制数据。因此，需要一种方式来实现此过程：将对象转为二进制数据，即<strong>序列化</strong>；同时，需要根据二进制数据逆向转化为对象，即<strong>反序列化</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220619101617.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>从 RPC 的实现角度来看，序列化的作用如下图所示：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220619104420.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>常用序列化方式</p><ul><li>JDK 序列化：<code>ObjectInputStream</code> 和 <code>ObjectOutputStream</code></li><li>JSON</li><li>二进制 <ul><li>Hessian</li><li>Protobuf</li><li>Thirft</li></ul></li></ul><h3 id="rpc-协议选型" tabindex="-1"><a class="header-anchor" href="#rpc-协议选型" aria-hidden="true">#</a> RPC 协议选型</h3><p><strong>优先级依次从高到低：安全性、通用性、兼容性、性能、效率、空间开销</strong>。</p><p>在序列化的选择上，与序列化协议的效率、性能、序列化协议后的体积相比，其通用性和兼容性的优先级会更高，因为他是会直接关系到服务调用的稳定性和可用率的，对于服务的性能来说，服务的可靠性显然更加重要。我们更加看重这种序列化协议在版本升级后的兼容性是否很好，是否支持更多的对象类型，是否是跨平台、跨语言的，是否有很多人已经用过并且踩过了很多的坑，其次我们才会去考虑性能、效率和空间开销。</p><h3 id="使用-rpc-需要注意哪些问题" tabindex="-1"><a class="header-anchor" href="#使用-rpc-需要注意哪些问题" aria-hidden="true">#</a> 使用 RPC 需要注意哪些问题</h3><ul><li><strong>对象构造得过于复杂</strong> - 对象要尽量简单，没有太多的依赖关系，属性不要太多，尽量高内聚；</li><li><strong>对象过于复杂、庞大</strong> - 入参对象与返回值对象体积不要太大，更不要传太大的集合；</li><li><strong>使用序列化框架不支持的类作为入参类</strong> - 尽量使用简单的、常用的、开发语言原生的对象，尤其是集合类；</li><li><strong>对象有复杂的继承关系</strong> - 对象不要有复杂的继承关系，最好不要有父子类的情况。</li></ul><h2 id="网络通信-rpc-框架在网络通信上更倾向于哪种网络-io-模型" tabindex="-1"><a class="header-anchor" href="#网络通信-rpc-框架在网络通信上更倾向于哪种网络-io-模型" aria-hidden="true">#</a> 网络通信：RPC 框架在网络通信上更倾向于哪种网络 IO 模型？</h2><h3 id="常见的网络-io-模型" tabindex="-1"><a class="header-anchor" href="#常见的网络-io-模型" aria-hidden="true">#</a> 常见的网络 IO 模型</h3><p>常见的网络 IO 模型分为四种：同步阻塞 IO（BIO）、同步非阻塞 IO（NIO）、IO 多路复用和异步非阻塞 IO（AIO）。在这四种 IO 模型中，只有 AIO 为异步 IO，其他都是同步 IO。</p><p>IO 多路复用（Reactor 模式）在高并发场景下使用最为广泛，很多知名软件都应用了这一技术，如：Netty、Redis、Nginx 等。</p><p>IO 多路复用分为 select，poll 和 epoll。</p><p>什么是 IO 多路复用？字面上的理解，多路就是指多个通道，也就是多个网络连接的 IO，而复用就是指多个通道复用在一个复用器上。</p><h3 id="零拷贝" tabindex="-1"><a class="header-anchor" href="#零拷贝" aria-hidden="true">#</a> 零拷贝</h3><p>系统内核处理 IO 操作分为两个阶段——等待数据和拷贝数据。等待数据，就是系统内核在等待网卡接收到数据后，把数据写到内核中；而拷贝数据，就是系统内核在获取到数据后，将数据拷贝到用户进程的空间中。</p><p>网络 IO 读写流程</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220619174154.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>应用进程的每一次写操作，都会把数据写到用户空间的缓冲区中，再由 CPU 将数据拷贝到系统内核的缓冲区中，之后再由 DMA 将这份数据拷贝到网卡中，最后由网卡发送出去。这里我们可以看到，一次写操作数据要拷贝两次才能通过网卡发送出去，而用户进程的读操作则是将整个流程反过来，数据同样会拷贝两次才能让应用程序读取到数据。</p><p>应用进程的一次完整的读写操作，都需要在用户空间与内核空间中来回拷贝，并且每一次拷贝，都需要 CPU 进行一次上下文切换（由用户进程切换到系统内核，或由系统内核切换到用户进程），这样很浪费 CPU 和性能。</p><p>所谓的零拷贝，就是取消用户空间与内核空间之间的数据拷贝操作，应用进程每一次的读写操作，可以通过一种方式，直接将数据写入内核或从内核中读取数据，再通过 DMA 将内核中的数据拷贝到网卡，或将网卡中的数据 copy 到内核。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220619174335.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Netty 的零拷贝偏向于用户空间中对数据操作的优化，这对处理 TCP 传输中的拆包粘包问题有着重要的意义，对应用程序处理请求数据与返回数据也有重要的意义。</p><p>Netty 框架中很多内部的 ChannelHandler 实现类，都是通过 CompositeByteBuf、slice、wrap 操作来处理 TCP 传输中的拆包与粘包问题的。</p><p>Netty 的 ByteBuffer 可以采用 Direct Buffers，使用堆外直接内存进行 Socketd 的读写<br> 操作，最终的效果与我刚才讲解的虚拟内存所实现的效果是一样的。</p><p>Netty 还提供 FileRegion 中包装 NIO 的 FileChannel.transferTo() 方法实现了零拷<br> 贝，这与 Linux 中的 sendfile 方式在原理上也是一样的。</p><h2 id="动态代理-面向接口编程-屏蔽-rpc-处理流程" tabindex="-1"><a class="header-anchor" href="#动态代理-面向接口编程-屏蔽-rpc-处理流程" aria-hidden="true">#</a> 动态代理：面向接口编程，屏蔽 RPC 处理流程</h2><p>动态代理可以帮用户屏蔽远程调用的细节，实现像调用本地一样地调用远程的体验。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220619204255.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>JDK 支持的动态代理方式是通过实现 InvocationHandler 接口。这种方式有一定的局限性——它要求被代理的类只能是接口。原因是因为生成的代理类会继承 Proxy 类，但 Java 是不支持多重继承的。此外，它还有性能问题。它生成后的代理类是使用反射来完成方法调用的，而这种方式相对直接用编码调用来说，性能会降低。</p><p>除 JDK 以外，还有其他第三方框架可以实现动态代理，如像 Javassist、Byte Buddy。</p><p>Javassist 的是通过控制底层字节码来实现动态代理，不需要反射完成调用，所以性能肯定比 JDK 的动态代理方式性能要好。</p><p>Byte Buddy 则属于后起之秀，在很多优秀的项目中，像 Spring、Jackson 都用到了 Byte Buddy 来完成底层代理。相比 Javassist，Byte Buddy 提供了更容易操作的 API，编写的代码可读性更高。更重要的是，生成的代理类执行速度比 Javassist 更快。</p><h2 id="rpc-实战-剖析-grpc-源码-动手实现一个完整的-rpc" tabindex="-1"><a class="header-anchor" href="#rpc-实战-剖析-grpc-源码-动手实现一个完整的-rpc" aria-hidden="true">#</a> RPC 实战：剖析 gRPC 源码，动手实现一个完整的 RPC</h2><p>略</p><h2 id="架构设计-设计一个灵活的-rpc-框架" tabindex="-1"><a class="header-anchor" href="#架构设计-设计一个灵活的-rpc-框架" aria-hidden="true">#</a> 架构设计：设计一个灵活的 RPC 框架</h2><h3 id="rpc-架构" tabindex="-1"><a class="header-anchor" href="#rpc-架构" aria-hidden="true">#</a> RPC 架构</h3><p><strong>其实 RPC 就是把拦截到的方法参数，转成可以在网络中传输的二进制，并保证在服务提供方能正确地还原出语义，最终实现像调用本地一样地调用远程的目的</strong>。</p><p>RPC 本质上就是一个远程调用，必然需要通过网络来传输数据，为了屏蔽网络传输的复杂性，需要封装一个单独的<strong>数据传输模块</strong>用来收发二进制数据。</p><p>用户请求的时候是基于方法调用，方法出入参数都是对象数据，对象是肯定没法直接在网络中传输的，我们需要提前把它转成可传输的二进制，这就是我们说的序列化过程。但只是把方法调用参数的二进制数据传输到服务提供方是不够的，我们需要在方法调用参数的二进制数据后面增加“断句”符号来分隔出不同的请求，在两个“断句”符号中间放的内容就是我们请求的二进制数据，这个过程我们叫做协议封装。可以把这两个处理过程放在同一个模块，统称为<strong>协议模块</strong>。除此之外，我们还可以在协议模块中加入压缩功能，这是因为压缩过程也是对传输的二进制数据进行操作。</p><p>RPC 还需要为调用方找到所有的服务提供方，并需要在 RPC 里面维护好接口跟服务提供者地址的关系，这样调用方在发起请求的时候才能快速地找到对应的接收地址，这个过程即为“服务发现”。</p><p>但服务发现只是解决了接口和服务提供方地址映射关系的查找问题。但是，对于 RPC 来说，每次发送请求的时候都是需要用 TCP 连接的，相对服务提供方 IP 地址，TCP 连接状态是瞬息万变的，所以我们的 RPC 框架里面要有连接管理器去维护 TCP 连接的状态。</p><p>有了集群之后，提供方可能就需要管理好这些服务了，那我们的 RPC 就需要内置一些服务治理的功能，比如服务提供方权重的设置、调用授权等一些常规治理手段。而服务调用方需要额外做哪些事情呢？每次调用前，我们都需要根据服务提供方设置的规则，从集群中选择可用的连接用于发送请求。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220620112739.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="rpc-可扩展架构" tabindex="-1"><a class="header-anchor" href="#rpc-可扩展架构" aria-hidden="true">#</a> RPC 可扩展架构</h3><p>在 RPC 框架中，如何支持插件化架构呢？</p><p>可以使用 SPI 技术来实现。注意：由于 JDK SPI 性能不高，并且不支持自动注入，所以，一般会选择其他的 SPI 实现。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220620113147.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>有了 SPI 支持插件式加载后，RPC 框架就变成了一个微内核架构。</p><h2 id="服务发现-到底是要-cp-还是-ap" tabindex="-1"><a class="header-anchor" href="#服务发现-到底是要-cp-还是-ap" aria-hidden="true">#</a> 服务发现：到底是要 CP 还是 AP？</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220620144009.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>RPC 框架必须要有服务注册和发现机制，这样，集群中的节点才能知道通信方的请求地址。</p><ul><li><strong>服务注册</strong>：在服务提供方启动的时候，将对外暴露的接口注册到注册中心之中，注册中心将这个服务节点的 IP 和接口保存下来。</li><li><strong>服务订阅</strong>：在服务调用方启动的时候，去注册中心查找并订阅服务提供方的 IP，然后缓存到本地，并用于后续的远程调用。</li></ul><h3 id="基于-zookeeper-的服务发现" tabindex="-1"><a class="header-anchor" href="#基于-zookeeper-的服务发现" aria-hidden="true">#</a> 基于 ZooKeeper 的服务发现</h3><p>使用 ZooKeeper 作为服务注册中心，是 Java 分布式系统的经典方案。</p><p>搭建一个 ZooKeeper 集群作为注册中心集群，服务注册的时候只需要服务节点向 ZooKeeper 节点写入注册信息即可，利用 ZooKeeper 的 Watcher 机制完成服务订阅与服务下发功能</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200610180056.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>通常我们可以使用 ZooKeeper、etcd 或者分布式缓存（如 Hazelcast）来解决事件通知问题，但当集群达到一定规模之后，依赖的 ZooKeeper 集群、etcd 集群可能就不稳定了，无法满足我们的需求。</p><p>在超大规模的服务集群下，注册中心所面临的挑战就是超大批量服务节点同时上下线，注册中心集群接受到大量服务变更请求，集群间各节点间需要同步大量服务节点数据，最终导致如下问题：</p><ul><li>注册中心负载过高；</li><li>各节点数据不一致；</li><li>服务下发不及时或下发错误的服务节点列表。</li></ul><p>RPC 框架依赖的注册中心的服务数据的一致性其实并不需要满足 CP，只要满足 AP 即可。</p><h3 id="基于消息总线的最终一致性的注册中心" tabindex="-1"><a class="header-anchor" href="#基于消息总线的最终一致性的注册中心" aria-hidden="true">#</a> 基于消息总线的最终一致性的注册中心</h3><p>ZooKeeper 的一大特点就是强一致性，ZooKeeper 集群的每个节点的数据每次发生更新操作，都会通知其它 ZooKeeper 节点同时执行更新。它要求保证每个节点的数据能够实时的完全一致，这也就直接导致了 ZooKeeper 集群性能上的下降。</p><p>而 RPC 框架的服务发现，在服务节点刚上线时，服务调用方是可以容忍在一段时间之后（比如几秒钟之后）发现这个新上线的节点的。毕竟服务节点刚上线之后的几秒内，甚至更长的一段时间内没有接收到请求流量，对整个服务集群是没有什么影响的，所以我们可以牺牲掉 CP（强制一致性），而选择 AP（最终一致），来换取整个注册中心集群的性能和稳定性。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200717162006.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="健康检测-这个节点都挂了-为啥还要疯狂发请求" tabindex="-1"><a class="header-anchor" href="#健康检测-这个节点都挂了-为啥还要疯狂发请求" aria-hidden="true">#</a> 健康检测：这个节点都挂了，为啥还要疯狂发请求？</h2><p>健康检测，它能帮助我们从连接列表里面过滤掉一些存在问题的节点，避免在发请求的时候选择出有问题的节点而影响业务。</p><p>服务方状态一般有三种情况：</p><ol><li><strong>健康状态</strong> - 建立连接成功，并且心跳探活也一直成功；</li><li><strong>亚健康状态</strong> - 建立连接成功，但是心跳请求连续失败；</li><li><strong>死亡状态</strong> - 建立连接失败。</li></ol><p>设计健康检测方案的时候，不能简单地从 TCP 连接是否健康、心跳是否正常等简单维度考虑，因为健康检测的目的就是要保证“业务无损”，因此，可以加入业务请求可用率因素，这样能最大化地提升 RPC 接口可用率。</p><p>正常情况下，我们大概 30S 会发一次心跳请求，这个间隔一般不会太短，如果太短会给服务节点造成很大的压力。但是如果太长的话，又不能及时摘除有问题的节点。</p><h2 id="路由策略-怎么让请求按照设定的规则发到不同的节点上" tabindex="-1"><a class="header-anchor" href="#路由策略-怎么让请求按照设定的规则发到不同的节点上" aria-hidden="true">#</a> 路由策略：怎么让请求按照设定的规则发到不同的节点上？</h2><p>服务路由是指通过一定的规则从集群中选择合适的节点。</p><h3 id="为什么需要路由策略" tabindex="-1"><a class="header-anchor" href="#为什么需要路由策略" aria-hidden="true">#</a> 为什么需要路由策略</h3><p>服务路由通常用于以下场景，目的在于实现流量隔离：</p><ul><li><p>分组调用</p></li><li><p>蓝绿发布</p></li><li><p>灰度发布</p></li><li><p>流量切换</p></li><li><p>线下测试联调</p></li><li><p>读写分离</p></li></ul><h3 id="路由规则" tabindex="-1"><a class="header-anchor" href="#路由规则" aria-hidden="true">#</a> 路由规则</h3><ul><li>条件路由：基于条件表达式的路由规则</li><li>脚本路由：基于脚本语言的路由规则</li><li>标签路由：将服务分组的路由规则</li></ul><h2 id="负载均衡-节点负载差距这么大-为什么收到的流量还一样" tabindex="-1"><a class="header-anchor" href="#负载均衡-节点负载差距这么大-为什么收到的流量还一样" aria-hidden="true">#</a> 负载均衡：节点负载差距这么大，为什么收到的流量还一样？</h2><h3 id="负载均衡算法" tabindex="-1"><a class="header-anchor" href="#负载均衡算法" aria-hidden="true">#</a> 负载均衡算法</h3><ul><li>随机算法 <ul><li>加权随机算法</li></ul></li><li>轮询算法 <ul><li>加权轮询算法</li></ul></li><li>最小活跃数算法 <ul><li>加权最小活跃数算法</li></ul></li><li>哈希算法</li><li>一致性哈希算法</li></ul><h3 id="rpc-框架中的负载均衡" tabindex="-1"><a class="header-anchor" href="#rpc-框架中的负载均衡" aria-hidden="true">#</a> RPC 框架中的负载均衡</h3><p>RPC 负载均衡所采用的策略与传统的 Web 服务负载均衡所采用策略的不同之处：</p><ol><li>搭建负载均衡设备或 TCP/IP 四层代理，需要额外成本；</li><li>请求流量都经过负载均衡设备，多经过一次网络传输，会额外浪费一些性能；</li><li>负载均衡添加节点和摘除节点，一般都要手动添加，当大批量扩容和下线时，会有大量的人工操作，“服务发现”在操作上是个问题；</li><li>我们在服务治理的时候，针对不同接口服务、服务的不同分组，我们的负载均衡策略是需要可配的，如果大家都经过这一个负载均衡设备，就不容易根据不同的场景来配置不同的负载均衡策略了。</li></ol><p>RPC 的负载均衡完全由 RPC 框架自身实现，RPC 的服务调用者会与“注册中心”下发的所有服务节点建立长连接，在每次发起 RPC 调用时，服务调用者都会通过配置的负载均衡插件，自主选择一个服务节点，发起 RPC 调用请求。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220622175324.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="如何设计自适应的负载均衡" tabindex="-1"><a class="header-anchor" href="#如何设计自适应的负载均衡" aria-hidden="true">#</a> 如何设计自适应的负载均衡</h3><p>那服务调用者节点又该如何判定一个服务节点的处理能力呢？</p><p>可以采用一种打分制的策略，服务调用者收集与之建立长连接的每个服务节点的指标数据，如服务节点的负载指标、CPU 核数、内存大小、请求处理的耗时指标（如请求平均耗时、TP99、TP999）、服务节点的状态指标（如正常、亚健康）。通过这些指标，计算出一个分数，比如总分 10 分，如果 CPU 负载达到 70%，就减它 3 分，当然了，减 3 分只是个类比，需要减多少分是需要一个计算策略的。</p><p>然后，根据不同指标的重要程度设置权重，然后累加，计算公式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>健康值 = 指标值1 * 权重1 + 指标值2 * 权重2 + ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220622180243.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>服务调用者给每个服务节点都打完分之后，会发送请求，那这时候我们又该如何根据分数去控制给每个服务节点发送多少流量呢？</p><p>关键步骤</p><ol><li>添加服务指标收集器，并将其作为插件，默认有运行时状态指标收集器、请求耗时指标收集器。</li><li>运行时状态指标收集器收集服务节点 CPU 核数、CPU 负载以及内存等指标，在服务调用者与服务提供者的心跳数据中获取。</li><li>请求耗时指标收集器收集请求耗时数据，如平均耗时、TP99、TP999 等。</li><li>可以配置开启哪些指标收集器，并设置这些参考指标的指标权重，再根据指标数据和指标权重来综合打分。</li><li>通过服务节点的综合打分与节点的权重，最终计算出节点的最终权重，之后服务调用者会根据随机权重的策略，来选择服务节点。</li></ol><h2 id="异常重试-在约定时间内安全可靠地重试" tabindex="-1"><a class="header-anchor" href="#异常重试-在约定时间内安全可靠地重试" aria-hidden="true">#</a> 异常重试：在约定时间内安全可靠地重试</h2><h3 id="异常重试" tabindex="-1"><a class="header-anchor" href="#异常重试" aria-hidden="true">#</a> 异常重试</h3><p>就是当调用端发起的请求失败时，RPC 框架自身可以进行重试，再重新发送请求，用户可以自行设置是否开启重试以及重试的次数。</p><p>当然，不是所有的异常都要触发重试，只有符合重试条件的异常才能触发重试，比如网络超时异常、网络连接异常等等（这个需要 RPC 去判定）。</p><blockquote><p>注意：有时网络可能发生抖动，导致请求超时，这时如果 RPC 触发超时重试，会触发业务逻辑重复执行，如果接口没有幂等性设计，就可能引发问题。如：重发写表。</p></blockquote><h3 id="重试超时时间" tabindex="-1"><a class="header-anchor" href="#重试超时时间" aria-hidden="true">#</a> 重试超时时间</h3><p>连续的异常重试可能会出现一种不可靠的情况，那就是连续的异常重试并且每次处理的请求时间比较长，最终会导致请求处理的时间过长，超出用户设置的超时时间。</p><p>解决这个问题最直接的方式就是，在每次重试后都重置一下请求的超时时间。</p><p>当调用端发起 RPC 请求时，如果发送请求发生异常并触发了异常重试，我们可以先判定下这个请求是否已经超时，如果已经超时了就直接返回超时异常，否则就先重置下这个请求的超时时间，之后再发起重试。</p><p>在所有发起重试、负载均衡选择节点的时候，去掉重试之前出现过问题的那个节点，以保证重试的成功率。</p><h3 id="业务异常" tabindex="-1"><a class="header-anchor" href="#业务异常" aria-hidden="true">#</a> 业务异常</h3><p>RPC 框架是不会知道哪些业务异常能够去进行异常重试的，我们可以加个重试异常的白名单，用户可以将允许重试的异常加入到这个白名单中。当调用端发起调用，并且配置了异常重试策略，捕获到异常之后，我们就可以采用这样的异常处理策略。如果这个异常是 RPC 框架允许重试的异常，或者这个异常类型存在于可重试异常的白名单中，我们就允许对这个请求进行重试。</p><hr><p>综上，一个可靠的 RPC 容错处理机制如下：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200717163921.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="优雅关闭-如何避免服务停机带来的业务损失" tabindex="-1"><a class="header-anchor" href="#优雅关闭-如何避免服务停机带来的业务损失" aria-hidden="true">#</a> 优雅关闭：如何避免服务停机带来的业务损失？</h2><blockquote><p>优雅关闭：如何避免服务停机带来的业务损失？</p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220623102847.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在服务重启的时候，对于调用方来说，可能会存在以下几种情况：</p><ul><li><strong>调用方发请求前，目标服务已经下线</strong>。对于调用方来说，跟目标节点的连接会断开，这时候调用方可以立马感知到，并且在其健康列表里面会把这个节点挪掉，自然也就不会被负载均衡选中。</li><li><strong>调用方发请求的时候，目标服务正在关闭</strong>。但调用方并不知道它正在关闭，而且两者之间的连接也没断开，所以这个节点还会存在健康列表里面，因此该节点就有一定概率会被负载均衡选中。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220623110010.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当服务提供方正在关闭，如果这之后还收到了新的业务请求，服务提供方直接返回一个特定的异常给调用方（比如 ShutdownException）。这个异常就是告诉调用方“我已经收到这个请求了，但是我正在关闭，并没有处理这个请求”，然后调用方收到这个异常响应后，RPC 框架把这个节点从健康列表挪出，并把请求自动重试到其他节点，因为这个请求是没有被服务提供方处理过，所以可以安全地重试到其他节点，这样就可以实现对业务无损。</p><p>但如果只是靠等待被动调用，就会让这个关闭过程整体有点漫长。因为有的调用方那个时刻没有业务请求，就不能及时地通知调用方了，所以我们可以加上主动通知流程，这样既可以保证实时性，也可以避免通知失败的情况。</p><p>如何捕获到关闭事件呢？在 Java 语言里面，对应的是 Runtime.addShutdownHook 方法，可以注册关闭的钩子。在 RPC 启动的时候，我们提前注册关闭钩子，并在里面添加了两个处理程序，一个负责开启关闭标识，一个负责安全关闭服务对象，服务对象在关闭的时候会通知调用方下线节点。同时需要在我们调用链里面加上挡板处理器，当新的请求来的时候，会判断关闭标识，如果正在关闭，则抛出特定异常。</p><h2 id="优雅启动-如何避免流量打到没有启动完成的节点" tabindex="-1"><a class="header-anchor" href="#优雅启动-如何避免流量打到没有启动完成的节点" aria-hidden="true">#</a> 优雅启动：如何避免流量打到没有启动完成的节点？</h2><blockquote><p>优雅启动：如何避免流量打到没有启动完成的节点？</p></blockquote><p>运行了一段时间后的应用，执行速度会比刚启动的应用更快。这是因为在 Java 里面，在运行过程中，JVM 虚拟机会把高频的代码编译成机器码，被加载过的类也会被缓存到 JVM 缓存中，再次使用的时候不会触发临时加载，这样就使得“热点”代码的执行不用每次都通过解释，从而提升执行速度。</p><p>但是这些“临时数据”，都在应用重启后就消失了。如果让刚启动的应用就承担像停机前一样的流量，这会使应用在启动之初就处于高负载状态，从而导致调用方过来的请求可能出现大面积超时，进而对线上业务产生损害行为。</p><h3 id="启动预热" tabindex="-1"><a class="header-anchor" href="#启动预热" aria-hidden="true">#</a> 启动预热</h3><p>启动预热，就是让刚启动的服务提供方应用不承担全部的流量，而是让它被调用的次数随着时间的移动慢慢增加，最终让流量缓和地增加到跟已经运行一段时间后的水平一样。</p><p>首先，对于调用方来说，我们要知道服务提供方启动的时间。有两种方法：</p><ul><li>一种是服务提供方在启动的时候，把自己启动的时间告诉注册中心；</li><li>另外一种就是注册中心收到的服务提供方的请求注册时间。</li></ul><p>怎么确保所有机器的日期时间是一样的？在真实环境中机器都会默认开启 NTP 时间同步功能，来保证所有机器时间的一致性。</p><p>最终的结果就是，调用方通过服务发现，除了可以拿到 IP 列表，还可以拿到对应的启动时间。我们需要把这个时间作用在负载均衡上。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220623114858.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>通过这个小逻辑的改动，我们就可以保证当服务提供方运行时长小于预热时间时，对服务提供方进行降权，减少被负载均衡选择的概率，避免让应用在启动之初就处于高负载状态，从而实现服务提供方在启动后有一个预热的过程。</p><h3 id="延迟暴露" tabindex="-1"><a class="header-anchor" href="#延迟暴露" aria-hidden="true">#</a> 延迟暴露</h3><p>服务提供方应用在没有启动完成的时候，调用方的请求就过来了，而调用方请求过来的原因是，服务提供方应用在启动过程中把解析到的 RPC 服务注册到了注册中心，这就导致在后续加载没有完成的情况下服务提供方的地址就被服务调用方感知到了。</p><p>为了解决这个问题，需要在应用启动加载、解析 Bean 的时候，如果遇到了 RPC 服务的 Bean，只先把这个<br> Bean 注册到 Spring-BeanFactory 里面去，而并不把这个 Bean 对应的接口注册到注册中心，只有等应用启动完成后，才把接口注册到注册中心用于服务发现，从而实现让服务调用方延迟获取到服务提供方地址。</p><p>具体如何实现呢？</p><p>我们可以在服务提供方应用启动后，接口注册到注册中心前，预留一个 Hook 过程，让用户可以实现可扩展的<br> Hook 逻辑。用户可以在 Hook 里面模拟调用逻辑，从而使 JVM 指令能够预热起来，并且用户也可以在 Hook 里面事先预加载一些资源，只有等所有的资源都加载完成后，最后才把接口注册到注册中心。</p><h2 id="熔断限流-业务如何实现自我保护" tabindex="-1"><a class="header-anchor" href="#熔断限流-业务如何实现自我保护" aria-hidden="true">#</a> 熔断限流：业务如何实现自我保护</h2><h3 id="限流" tabindex="-1"><a class="header-anchor" href="#限流" aria-hidden="true">#</a> 限流</h3><h4 id="限流算法" tabindex="-1"><a class="header-anchor" href="#限流算法" aria-hidden="true">#</a> 限流算法</h4><ul><li>计数器</li><li>滑动窗口</li><li>漏桶</li><li>令牌桶</li></ul><h4 id="限流要点" tabindex="-1"><a class="header-anchor" href="#限流要点" aria-hidden="true">#</a> 限流要点</h4><p>服务端主要是通过限流来进行自我保护，我们在实现限流时要考虑到应用和 IP 级别，方便我们在服务治理的时候，对部分访问量特别大的应用进行合理的限流。</p><ul><li>服务端的限流阈值配置都是作用于单机的，而在有些场景下，例如对整个服务设置限流阈值，服务进行扩容时，<br> 限流的配置并不方便。</li><li>我们可以在注册中心或配置中心下发限流阈值配置的时候，将总服务节点数也下发给服务节点，让 RPC 框架自己去计算限流阈值；</li><li>我们还可以让 RPC 框架的限流模块依赖一个专门的限流服务，对服务设置限流阈值进行精准地控制，但是这种方式依赖了限流服务，相比单机的限流方式，在性能和耗时上有劣势。</li></ul><p>服务提供方主要通过限流来进行自我保护，我们在实现限流时要考虑到应用和 IP 级别，方便我们在服务治理的时，对部分访问量特别大的应用进行合理的限流。</p><p>服务端的限流阈值配置都是作用于单机的，而在有些场景下，例如对整个服务设置限流阈值，服务进行扩容时，<br> 限流的配置并不方便。我们可以在注册中心或配置中心下发限流阈值配置的时候，将总服务节点数也下发给服务节点，让 RPC 框架自己去计算限流阈值。</p><p>我们还可以让 RPC 框架的限流模块依赖一个专门的限流服务，对服务设置限流阈值进行精准地控制，但是这种方式依赖了限流服务，相比单机的限流方式，在性能和耗时上有劣势。</p><h3 id="熔断" tabindex="-1"><a class="header-anchor" href="#熔断" aria-hidden="true">#</a> 熔断</h3><p>调用端可以通过熔断机制进行自我保护，防止调用下游服务出现异常，或者耗时过长影响调用端的业务逻辑，RPC 框架可以在动态代理的逻辑中去整合熔断器，实现 RPC 框架的熔断功能。</p><p>熔断器的工作机制主要是关闭、打开和半打开这三个状态之间的切换。在正常情况下，熔断器是关闭的；当调用端调用下游服务出现异常时，熔断器会收集异常指标信息进行计算，当达到熔断条件时熔断器打开，这时调用端再发起请求是会直接被熔断器拦截，并快速地执行失败逻辑；当熔断器打开一段时间后，会转为半打开状态，这时熔断器允许调用端发送一个请求给服务端，如果这次请求能够正常地得到服务端的响应，则将状态置为关闭状态，否则<br> 设置为打开。</p><h2 id="业务分组-如何隔离流量" tabindex="-1"><a class="header-anchor" href="#业务分组-如何隔离流量" aria-hidden="true">#</a> 业务分组：如何隔离流量？</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200718204407.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在 RPC 里面我们可以通过分组的方式人为地给不同的调用方划分出不同的小集群，从而实现调用方流量隔离的效果，保障我们的核心业务不受非核心业务的干扰。但我们在考虑问题的时候，不能顾此失彼，不能因为新加一个的功能而影响到原有系统的稳定性。</p><p>其实我们不仅可以通过分组把服务提供方划分成不同规模的小集群，我们还可以利用分组完成一个接口多种实现的功能。正常情况下，为了方便我们自己管理服务，我一般都会建议每个接口完成的功能尽量保证唯一。但在有些特殊场景下，两个接口也会完全一样，只是具体实现上有那么一点不同，那么我们就可以在服务提供方应用里面同时暴露两个相同接口，但只是接口分组不一样罢了。</p><h3 id="动态分组" tabindex="-1"><a class="header-anchor" href="#动态分组" aria-hidden="true">#</a> 动态分组</h3><p>分组可以帮助服务提供方实现调用方的隔离。但是因为调用方流量并不是一成不变的，而且还可能会因为突发事件导致某个分组的流量溢出，而在整个大集群还有富余能力的时候，又因为分组隔离不能为出问题的集群提供帮助。</p><p>为了解决这种突发流量的问题，我们提供了一种更高效的方案，可以实现分组的快速伸缩。事实上我们还可以利用动态分组解决分组后给每个分组预留机器冗余的问题，我们没有必要把所有冗余的机器都分配到分组里面，我们可以把这些预留的机器做成一个共享的池子，从而减少整体预留的实例数量。</p><h2 id="异步-rpc-压榨单机吞吐量" tabindex="-1"><a class="header-anchor" href="#异步-rpc-压榨单机吞吐量" aria-hidden="true">#</a> 异步 RPC：压榨单机吞吐量</h2><blockquote><p>异步 RPC：压榨单机吞吐量</p></blockquote><p>影响到 RPC 调用的吞吐量的主要原因就是服务端的业务逻辑比较耗时，并且 CPU 大部分时间都在等待而没有去计算，导致 CPU 利用率不够，而提升单机吞吐量的最好办法就是使用异步 RPC。</p><p>RPC 框架的异步策略主要是调用端异步与服务端异步。调用端的异步就是通过 Future 方式实现异步，调用端发起一次异步请求并且从请求上下文中拿到一个 Future，之后通过 Future 的 get 方法获取结果，如果业务逻辑中同时调用多个其它的服务，则可以通过 Future 的方式减少业务逻辑的耗时，提升吞吐量。服务端异步则需要一种回调方式，让业务逻辑可以异步处理，之后调用 RPC 框架提供的回调接口，将最终结果异步通知给调用端。</p><p>另外，我们可以通过对 CompletableFuture 的支持，实现 RPC 调用在调用端与服务端之间的完全异步，同时提升两端的单机吞吐量。</p><p>此外，RPC 框架也可以有其它的异步策略，比如集成 RxJava，再比如 gRPC 的 StreamObserver 入参对象，但 CompletableFuture 是 Java8 原生提供的，无代码入侵性，并且在使用上更加方便。</p><h2 id="安全体系-如何建立可靠的安全体系" tabindex="-1"><a class="header-anchor" href="#安全体系-如何建立可靠的安全体系" aria-hidden="true">#</a> 安全体系：如何建立可靠的安全体系？</h2><p>RPC 是解决应用间互相通信的框架，而应用之间的远程调用过程一般不会暴露在公网，换句话讲就是说 RPC 一般用于解决内部应用之间的通信，而这个“内部”是指应用都部署在同一个大局域网内。相对于公网环境，局域网的隔离性更好，也就相对更安全，所以在 RPC 里面我们很少考虑像数据包篡改、请求伪造等恶意行为。</p><p>对于 RPC 来说，需要关心的安全问题不会有公网应用那么复杂，我们只要保证让服务调用方能拿到真实的服务提供方 IP 地址集合，且服务提供方可以管控调用自己的应用就够了（比如颁发数字签名）。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220623194151.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="分布式环境下如何快速定位问题" tabindex="-1"><a class="header-anchor" href="#分布式环境下如何快速定位问题" aria-hidden="true">#</a> 分布式环境下如何快速定位问题？</h2><blockquote><p>问题定位：链路追踪</p></blockquote><p><strong>链路追踪要点</strong></p><ul><li>traceId：用于表示一次完整的请求</li><li>spanId：用于标识一次 RPC 调用在分布式请求中的位置</li><li>annonation：业务自定义埋点数据</li></ul><p><strong>链路追踪理论</strong></p>`,212),h={href:"http://bigbully.github.io/Dapper-translation/",target:"_blank",rel:"noopener noreferrer"},c=a("p",null,[a("strong",null,"链路追踪代表产品")],-1),u={href:"https://zipkin.io/",target:"_blank",rel:"noopener noreferrer"},g=a("strong",null,"Zipkin",-1),f={href:"https://github.com/spring-cloud/spring-cloud-sleuth",target:"_blank",rel:"noopener noreferrer"},P={href:"https://pinpoint-apm.gitbook.io/pinpoint/",target:"_blank",rel:"noopener noreferrer"},b=a("strong",null,"Pinpoint",-1),C={href:"https://skywalking.apache.org/",target:"_blank",rel:"noopener noreferrer"},m=a("strong",null,"SkyWalking",-1),R={href:"https://github.com/dianping/cat",target:"_blank",rel:"noopener noreferrer"},x=a("strong",null,"CAT",-1),k=r(`<h2 id="详解时钟轮在-rpc-中的应用" tabindex="-1"><a class="header-anchor" href="#详解时钟轮在-rpc-中的应用" aria-hidden="true">#</a> 详解时钟轮在 RPC 中的应用</h2><p>无论是同步调用还是异步调用，调用端内部实行的都是异步，而调用端在向服务端发送消息之前会创建一个 Future，并存储这个消息标识与这个 Future 的映射，当服务端收到消息并且处理完毕后向调用端发送响应消息，调用端在接收到消息后会根据消息的唯一标识找到这个 Future，并将结果注入给这个 Future。</p><h3 id="一般定时任务方案的缺点" tabindex="-1"><a class="header-anchor" href="#一般定时任务方案的缺点" aria-hidden="true">#</a> 一般定时任务方案的缺点</h3><ol><li>方案一：每创建一个 Future 都启动一个线程，之后 sleep，到达超时时间就触发请求超时的处理逻辑。</li></ol><ul><li>缺点：需要创建大量线程。例如：高并发场景下，单机可能每秒要发送数万次请求，请求超时时间设置的是 5 秒，那我们要创建多少个线程用来执行超时任务呢？超过 10 万个线程！</li></ul><ol start="2"><li>方案二：用一个线程来处理所有的定时任务，不断轮询定时任务。假设一个线程每隔 100 毫秒会扫描一遍所有的处理 Future 超时的任务，当发现一个 Future 超时了，我们就执行这个任务，对这个 Future 执行超时逻辑。</li></ol><ul><li>缺点：很浪费 CPU。高并发场景下，如果调用端刚好在 1 秒内发送了 1 万次请求，这 1 万次请求要在 5 秒后才会超时，那么那个扫描的线程在这个 5 秒内就会不停地对这 1 万个任务进行扫描遍历，要额外扫描 40 多次（每 100 毫秒扫描一次，5 秒内要扫描近 50 次），很浪费 CPU。</li></ul><h3 id="时钟轮方案" tabindex="-1"><a class="header-anchor" href="#时钟轮方案" aria-hidden="true">#</a> 时钟轮方案</h3><p>在时钟轮机制中，有时间槽和时钟轮的概念，时间槽就相当于时钟的刻度，而时钟轮就相当于秒针与分针等跳动的一个周期，我们会将每个任务放到对应的时间槽位上。</p><p>时钟轮的运行机制和生活中的时钟也是一样的，每隔固定的单位时间，就会从一个时间槽位跳到下一个时间槽位，这就相当于我们的秒针跳动了一次；时钟轮可以分为多层，下一层时钟轮中每个槽位的单位时间是当前时间轮整个周期的时间，这就相当于 1 分钟等于 60 秒钟；当时钟轮将一个周期的所有槽位都跳动完之后，就会从下一层时钟轮中取出一个槽位的任务，重新分布到当前的时钟轮中，当前时钟轮则从第 0 槽位从新开始跳动，这就相当于<br> 下一分钟的第 1 秒。</p><p><strong>时钟轮在 RPC 中的应用</strong></p><ul><li><strong>调用端请求超时处理</strong>：每发一次请求，都创建一个处理请求超时的定时任务放到时钟轮里，在高并发、高访问量的情况下，时钟轮每次只轮询一个时间槽位中的任务，这样会节省大量的 CPU。</li><li><strong>调用端与服务端启动超时也可以应用到时钟轮</strong>：以调用端为例，假设我们想要让应用可以快速地部署，例如 1 分钟内启动，如果超过 1 分钟则启动失败。我们可以在调用端启动时创建一个处理启动超时的定时任务，放到时钟轮里。</li><li><strong>定时心跳</strong>：RPC 框架调用端定时向服务端发送心跳，来维护连接状态，我们可以将心跳的逻辑封装为一个心跳任务，放到时钟轮里。</li></ul><h2 id="流量回放-保障业务技术升级的神器" tabindex="-1"><a class="header-anchor" href="#流量回放-保障业务技术升级的神器" aria-hidden="true">#</a> 流量回放：保障业务技术升级的神器</h2><p>实际情况就是我们不仅要保障已有业务的稳定，还需要快速去完成各种新业务的需求，这期间我们的应用代码就会经常发生变化，而发生变化后就可能会引入新的不稳定因素，而且这个过程会一直持续不断发生。</p><p>为了保障应用升级后，我们的业务行为还能保持和升级前一样，我们在大多数情况下都是依靠已有的 TestCase 去验证，但这种方式在一定程度上并不是完全可靠的。最可靠的方式就是引入线上 Case 去验证改造后的应用，把线上的真实流量在改造后的应用里面进行回放，这样不仅节省整个上线时间，还能弥补手动维护 Case 存在的缺陷。</p><p>应用引入了 RPC 后，所有的请求流量都会被 RPC 接管，所以我们可以很自然地在 RPC 里面支持流量回放功能。虽然这个功能本身并不是 RPC 的核心功能，但对于使用 RPC 的人来说，他们有了这个功能之后，就可以更放心地升级自己的应用了。</p><h2 id="动态分组-超高效实现秒级扩缩容" tabindex="-1"><a class="header-anchor" href="#动态分组-超高效实现秒级扩缩容" aria-hidden="true">#</a> 动态分组：超高效实现秒级扩缩容</h2><p>分组后带来的收益，它可以帮助服务提供方实现调用方的隔离。但是因为调用方流量并不是一成不变的，而且还可能会因为突发事件导致某个分组的流量溢出，而在整个大集群还有富余能力的时候，又因为分组隔离不能为出问题的集群提供帮助。</p><p>为了解决这种突发流量的问题，我们提供了一种更高效的方案，可以实现分组的快速扩缩容。事实上我们还可以利用动态分组解决分组后给每个分组预留机器冗余的问题，我们没有必要把所有冗余的机器都分配到分组里面，我们可以把这些预留的机器做成一个共享的池子，从而减少整体预留的实例数量。</p><h2 id="如何在没有接口的情况下进行-rpc-调用" tabindex="-1"><a class="header-anchor" href="#如何在没有接口的情况下进行-rpc-调用" aria-hidden="true">#</a> 如何在没有接口的情况下进行 RPC 调用？</h2><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3><p>（1）<strong>测试平台</strong>：各个业务方在测试平台中通过输入接口、分组名、方法名以及参数值，在线测试自己发布的 RPC 服务。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220624110324.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（2）<strong>轻量级的服务网关</strong>：可以让各个业务方用 HTTP 的方式，通过服务网关调用其它服务。服务网关要作为所有 RPC 服务的调用端，是不能依赖所有服务提供方的接口 API 的，也需要调用端在没有服务提供方提供接口的情况下，仍然可以正常地发起 RPC 调用。</p><h3 id="如何泛化调用" tabindex="-1"><a class="header-anchor" href="#如何泛化调用" aria-hidden="true">#</a> 如何泛化调用</h3><p>所谓的 RPC 调用，本质上就是调用端向服务端发送一条请求消息，服务端接收并处理，之后向调用端发送一条响应消息，调用端处理完响应消息之后，一次 RPC 调用就完成了。只要调用端将服务端需要知道的信息，如接口名、业务分组名、方法名以及参数信息等封装成请求消息发送给服务端，服务端就能够解析并处理这条请求消息，这样问题就解决了。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220624110611.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>泛化调用接口示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">GenericService</span> <span class="token punctuation">{</span>
	<span class="token class-name">Object</span> $<span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">String</span> methodName<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> paramTypes<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> $<span class="token function">asyncInvoke</span><span class="token punctuation">(</span><span class="token class-name">String</span> methodName<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> paramTypes
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何在线上环境里兼容多种-rpc-协议" tabindex="-1"><a class="header-anchor" href="#如何在线上环境里兼容多种-rpc-协议" aria-hidden="true">#</a> 如何在线上环境里兼容多种 RPC 协议？</h2><p>业界有很多 RPC 框架，如：Dubbo、Hessian、gRPC 等，它们随着技术发展逐渐涌现出来。不同时期、不同项目为了解决自身的通信问题，可能会选择不同的 RPC 框架。</p><p>对于一个公司来说，不同的 RPC 框架，会使得维护成本变高。所以，如果想缩减维护成本，自然会想到统一 RPC 框架。</p><p>但这面临的重要问题是：如果直接切换 RPC 框架，会导致新旧 RPC 框架的服务无法通信，从而造成业务损失。为此，一个折中的方案就是：先不移除原有的 RPC 框架，但同时接入新的 RPC 框架，让两种 RPC 同时提供服务，然后等所有的应用都接入完新的 RPC 以后，再让所有的应用逐步接入到新的 RPC 上。</p><p>在保持原有 RPC 使用方式不变的情况下，同时引入新的 RPC 框架的思路，是可以让所有的应用最终都能升级到我们想要升级的 RPC 上，但对于开发人员来说，这样切换成本还是有点儿高，整个过程最少需要两次上线才能彻底地把应用里面的旧 RPC 都切换成新 RPC。还有一种方案：要让新的 RPC 能同时支持多种 RPC 调用，当一个调用方切换到新的 RPC 之后，调用方和服务提供方之间就可以用新的协议完成调用；当调用方还是用老的 RPC 进行调用的话，调用方和服务提供方之间就继续沿用老的协议完成调用。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220624112147.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="如何优雅处理多协议" tabindex="-1"><a class="header-anchor" href="#如何优雅处理多协议" aria-hidden="true">#</a> 如何优雅处理多协议</h3><p>每种协议约定的数据包格式是不一样的，而且每种协议开头都有一个协议编码，我们一般叫做 magic number。</p><p>当 RPC 收到了数据包后，我们可以先解析出 magic number 来。获取到 magic number 后，我们就很容易地找到对应协议的数据格式，然后用对应协议的数据格式去解析收到的二进制数据包。</p><p>协议解析过程就是把一连串的二进制数据变成一个 RPC 内部对象，但这个对象一般是跟协议相关的，所以为了能让 RPC 内部处理起来更加方便，我们一般都会把这个协议相关的对象转成一个跟协议无关的 RPC 对象。这是因为在 RPC 流程中，当服务提供方收到反序列化后的请求的时候，我们需要根据当前请求的参数找到对应接口的实现类去完成真正的方法调用。如果这个请求参数是跟协议相关的话，那后续 RPC 的整个处理逻辑就会变得很复杂。</p><p>当完成了真正的方法调用以后，RPC 返回的也是一个跟协议无关的通用对象，所以在真正往调用方写回数据的时候，我们同样需要完成一个对象转换的逻辑，只不过这时候是把通用对象转成协议相关的对象。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220624112208.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,42),_={href:"https://time.geekbang.org/column/intro/100046201",target:"_blank",rel:"noopener noreferrer"};function w(y,I){const i=p("ExternalLinkIcon");return s(),o("div",null,[d,a("ul",null,[a("li",null,[a("a",h,[e("Dapper, a Large-Scale Distributed Systems Tracing Infrastructure"),n(i)])])]),c,a("ul",null,[a("li",null,[a("a",u,[g,n(i)]),e("：Zipkin 是 Twitter 开源的调用链分析工具，目前基于 "),a("strong",null,[a("a",f,[e("spring-cloud-sleuth"),n(i)])]),e(" 得到了广泛的使用，特点是轻量，使用、部署简单。")]),a("li",null,[a("a",P,[b,n(i)]),e("：是韩国人开源的基于字节码注入的调用链分析，以及应用监控分析工具。特点是支持多种插件，UI 功能强大，接入端无代码侵入。")]),a("li",null,[a("a",C,[m,n(i)]),e("：是本土开源的基于字节码注入的调用链分析，以及应用监控分析工具。特点是支持多种插件，UI 功能较强，接入端无代码侵入。目前已加入 Apache 孵化器。")]),a("li",null,[a("a",R,[x,n(i)]),e("：CAT 是美团点评开源的基于编码和配置的调用链分析，应用监控分析，日志采集，监控报警等一系列的监控平台工具。")])]),k,a("ul",null,[a("li",null,[a("a",_,[e("RPC 实战与核心原理"),n(i)])])])])}const O=t(l,[["render",w],["__file","01.RPC实战与核心原理笔记.html.vue"]]);export{O as default};
