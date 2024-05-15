import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as s,c as l,a as e,b as r,d as n,e as a}from"./app-d70a109d.js";const h={},p=a('<h1 id="微服务之服务调用" tabindex="-1"><a class="header-anchor" href="#微服务之服务调用" aria-hidden="true">#</a> 微服务之服务调用</h1><h2 id="rpc-简介" tabindex="-1"><a class="header-anchor" href="#rpc-简介" aria-hidden="true">#</a> RPC 简介</h2><p>通过注册中心，服务消费者和服务提供者就可以感知彼此。但是，要实现交互还必须解决通信问题。</p><p>在单体应用中，一次服务调用发生在同一台机器上的同一个进程内部，因此也被称为本地方法调用。在微服务应用中，由于服务提供者和服务消费者运行在不同物理机器上的不同进程内，因此也被称为<strong>远程方法调用</strong>，简称 <strong>RPC（Remote Procedure Call）</strong>。</p><p>RPC 是微服务架构的基石，它提供了一种应用间通信的方式。RPC 的主要作用是：</p><ul><li><strong>屏蔽远程调用跟本地调用的差异</strong>，让用户像调用本地一样去调用远程方法。</li><li><strong>隐藏底层网络通信的复杂性</strong>，让用户更聚焦于业务逻辑。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220619101023.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="rpc-核心原理" tabindex="-1"><a class="header-anchor" href="#rpc-核心原理" aria-hidden="true">#</a> RPC 核心原理</h2><p>RPC 是如何像本地方法调用一样，完成一次请求处理的呢？我们不妨推导一二。首先，服务消费者和服务提供者通常位于网络上两个不同地址，要想交换信息，必须先建立网络连接；建立网络连接后，如果要想识别彼此的信息，必须遵循相同的通信协议；服务提供者和服务消费者，需要采用某种方式数据传输；为了减少传输数据量，还要对数据进行压缩，即序列化。</p><p>它的通信流程中需要注意以下环节：</p><ul><li><strong>传输方式</strong>：RPC 是一个远程调用，因此必然需要通过网络传输数据，且 RPC 常用于业务系统之间的数据交互，需要保证其可靠性，所以 RPC 一般默认采用 TCP 来传输。</li><li><strong>序列化</strong>：在网络中传输的数据只能是二进制数据，而 RPC 请求时，发送的都是对象。因此，请求方需要将请求参数转为二进制数据，即<strong>序列化</strong>。RPC 响应方接受到请求，要将二进制数据转换为请求参数，需要<strong>反序列化</strong>。</li><li><strong>通信协议</strong>：请求方和响应方要互相识别彼此的信息，需要约定好彼此数据的格式，即协议。大多数的协议至少分成两部分，分别是数据头和消息体。数据头一般用于身份识别，包括协议标识、数据大小、请求类型、序列化类型等信息；消息体主要是请求的业务参数信息和扩展属性等。</li><li><strong>动态代理</strong>：为了屏蔽底层通信细节，使用户聚焦自身业务，因此 RPC 框架一般引入了动态代理，通过依赖注入等技术，拦截方法调用，完成远程调用的通信逻辑。</li></ul><p>下图诠释了以上环节是如何串联起来的：</p><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220625094814.png" style="zoom:67%;"><h2 id="通信协议" tabindex="-1"><a class="header-anchor" href="#通信协议" aria-hidden="true">#</a> 通信协议</h2><h3 id="通信协议的作用" tabindex="-1"><a class="header-anchor" href="#通信协议的作用" aria-hidden="true">#</a> 通信协议的作用</h3><p>只有二进制才能在网络中传输，所以 RPC 请求在发送到网络中之前，需要把方法调用的请求参数转成二进制；转成二进制后，写入本地 Socket 中，然后被网卡发送到网络设备中。</p><p>在传输过程中，RPC 并不会把请求参数的所有二进制数据整体一下子发送到对端机器上，中间可能会拆分成好几个数据包，也可能会合并其他请求的数据包（合并的前提是同一个 TCP 连接上的数据），至于怎么拆分合并，这其中的细节会涉及到系统参数配置和 TCP 窗口大小。对于服务提供方应用来说，他会从 TCP 通道里面收到很多的二进制数据，那这时候怎么识别出哪些二进制是第一个请求的呢？</p><p>这就好比让你读一篇没有标点符号的文章，你要怎么识别出每一句话到哪里结束呢？很简单啊，我们加上标点，完成断句就好了。为了避免语义不一致的事情发生，我们就需要在发送请求的时候设定一个边界，然后在收到请求的时候按照这个设定的边界进行数据分割。这个边界语义的表达，就是我们所说的协议。</p><p><strong>通信协议</strong>要解决的是：客户端和服务端如何建立连接、管理连接以及服务端如何处理请求的问题。</p><h3 id="常见网络协议" tabindex="-1"><a class="header-anchor" href="#常见网络协议" aria-hidden="true">#</a> 常见网络协议</h3><p>HTTP 通信是基于应用层 HTTP 协议的，而 HTTP 协议又是基于传输层 TCP 协议的。一次 HTTP 通信过程就是发起一次 HTTP 调用，而一次 HTTP 调用就会建立一个 TCP 连接，经历<strong>三次握手</strong>的过程来建立连接。完成请求后，再经历一次<strong>四次挥手</strong>的过程来断开连接。</p><p>TCP 通信的过程分为四个步骤：<strong>服务器监听</strong>、<strong>客户端请求</strong>、<strong>连接确认</strong>、<strong>数据传输</strong>。当客户端和服务端建立网络连接后，就可以发起请求了。但网络不一定总是可靠的，经常会遇到网络闪断、连接超时、服务端宕机等各种异常，通常的处理手段有两种：<strong>链路存活检测</strong>和<strong>断连重试</strong>。</p><p>通过两种通信方式的对比，不难看出：HTTP 通信由于每次都要建立 TCP 连接，而建立连接又较为耗时，所以 <strong>HTTP 通信性能是不如 TCP 通信的</strong>。</p><h3 id="为何需要设计-rpc-协议" tabindex="-1"><a class="header-anchor" href="#为何需要设计-rpc-协议" aria-hidden="true">#</a> 为何需要设计 RPC 协议</h3><p>既然有了现成的 HTTP 协议，还有必要设计 RPC 协议吗？</p><p>有必要。因为 HTTP 这些通信标准协议，数据包中的实际请求数据相对于数据包本身要小很多，有很多无用的内容；并且 HTTP 属于无状态协议，无法将请求和响应关联，每次请求要重新建立连接。这对于高性能的 RPC 来说，HTTP 协议难以满足需求，所以有必要设计一个<strong>紧凑的私有协议</strong>。</p><h3 id="如何设计-rpc-协议" tabindex="-1"><a class="header-anchor" href="#如何设计-rpc-协议" aria-hidden="true">#</a> 如何设计 RPC 协议</h3><p>首先，必须先明确消息的边界，即确定消息的长度。因此，至少要分为：消息长度+消息内容两部分。</p><p>接下来，我们会发现，在使用过程中，仅消息长度，不足以明确通信中的很多细节：如序列化方式是怎样的？是否消息压缩？压缩格式是怎样的？如果协议发生变化，需要明确协议版本等等。</p><p>综上，一个 RPC 协议大概会由下图中的这些参数组成：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220619102052.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="可扩展的协议" tabindex="-1"><a class="header-anchor" href="#可扩展的协议" aria-hidden="true">#</a> 可扩展的协议</h3><p>前面所述的协议属于定长协议头，那也就是说往后就不能再往协议头里加新参数了，如果加参<br> 数就会导致线上兼容问题。</p><p>为了保证能平滑地升级改造前后的协议，我们有必要设计一种支持可扩展的协议。其关键在于让协议头支持可扩展，扩展后协议头的长度就不能定长了。那要实现读取不定长的协议头里面的内容，在这之前肯定需要一个固定的地方读取长度，所以我们需要一个固定的写入协议头的长度。整体协议就变成了三部分内容：固定部分、协议头内容、协议体内容。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220619102833.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="序列化" tabindex="-1"><a class="header-anchor" href="#序列化" aria-hidden="true">#</a> 序列化</h2>',36),g={href:"https://dunwu.github.io/waterdrop/pages/2b2f0f/",target:"_blank",rel:"noopener noreferrer"},d=a('<p>由于，网络传输的数据必须是二进制数据，而调用方请求的出参、入参都是对象。因此，必须将对象转换可传输的二进制，并且要求转换算法是可逆的。</p><ul><li><strong>序列化（serialize）</strong>：序列化是将对象转换为二进制数据。</li><li><strong>反序列化（deserialize）</strong>：反序列化是将二进制数据转换为对象。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220619110947.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>序列化就是将对象转换成二进制数据的过程，而反序列就是反过来将二进制转换为对象的过程。</p><h3 id="序列化技术" tabindex="-1"><a class="header-anchor" href="#序列化技术" aria-hidden="true">#</a> 序列化技术</h3><p>Java 领域，常见的序列化技术如下</p>',6),c=e("li",null,"JDK 序列化：JDK 内置的二进制序列化方式",-1),u={href:"https://github.com/apache/thrift",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/protocolbuffers/protobuf",target:"_blank",rel:"noopener noreferrer"},b={href:"http://hessian.caucho.com/doc/hessian-overview.xtp",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/FasterXML/jackson",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/google/gson",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/alibaba/fastjson",target:"_blank",rel:"noopener noreferrer"},C=a('<h3 id="序列化技术选型" tabindex="-1"><a class="header-anchor" href="#序列化技术选型" aria-hidden="true">#</a> 序列化技术选型</h3><p>市面上有如此多的序列化技术，那么我们在应用时如何选择呢?</p><p>序列化技术选型，需要考量的维度，根据重要性从高到低，依次有：</p><ul><li><strong>安全性</strong>：是否存在漏洞。如果存在漏洞，就有被攻击的可能性。</li><li><strong>兼容性</strong>：版本升级后的兼容性是否很好，是否支持更多的对象类型，是否是跨平台、跨语言的。服务调用的稳定性与可靠性，要比服务的性能更加重要。</li><li><strong>性能</strong><ul><li><strong>时间开销</strong>：序列化、反序列化的耗时性能自然越小越好。</li><li><strong>空间开销</strong>：序列化后的数据越小越好，这样网络传输效率就高。</li></ul></li><li><strong>易用性</strong>：类库是否轻量化，API 是否简单易懂。</li></ul><p>鉴于以上的考量，序列化技术的选型建议如下：</p>',5),x=e("li",null,"JDK 序列化：性能较差，且有很多使用限制，不建议使用。",-1),I={href:"https://github.com/apache/thrift",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/protocolbuffers/protobuf",target:"_blank",rel:"noopener noreferrer"},T=e("strong",null,"对性能敏感，对开发体验要求不高",-1),k={href:"http://hessian.caucho.com/doc/hessian-overview.xtp",target:"_blank",rel:"noopener noreferrer"},R=e("strong",null,"对开发体验敏感，性能有要求",-1),w={href:"https://github.com/FasterXML/jackson",target:"_blank",rel:"noopener noreferrer"},N={href:"https://github.com/google/gson",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/alibaba/fastjson",target:"_blank",rel:"noopener noreferrer"},H=e("strong",null,"良好的可读性",-1),y=a('<h3 id="序列化问题" tabindex="-1"><a class="header-anchor" href="#序列化问题" aria-hidden="true">#</a> 序列化问题</h3><p>由于 RPC 每次通信，都要经过序列化、反序列化的过程，所以序列化方式，会直接影响 RPC 通信的性能。除了选择合适的序列化技术，如何合理使用序列化也非常重要。</p><p>RPC 序列化常见的使用不当的情况如下：</p><ul><li><p><strong>对象过于复杂、庞大</strong> - 对象过于复杂、庞大，会降低序列化、反序列化的效率，并增加传输开销，从而导致响应时延增大。</p><ul><li>过于复杂：存在多层的嵌套，比如 A 对象关联 B 对象，B 对象又聚合 C 对象，C 对象又关联聚合很多其他对象</li><li>过于庞大：比如一个大 List 或者大 Map</li></ul></li><li><p><strong>对象有复杂的继承关系</strong> - 对象关系越复杂，就越浪费性能，同时又很容易出现序列化上的问题。大多数序列化框架在进行序列化时，如果发现类有继承关系，会不停地寻找父类，遍历属性。</p></li><li><p><strong>使用序列化框架不支持的类作为入参类</strong> - 比如 Hessian 框架，他天然是不支持 LinkHashMap、LinkedHashSet 等，而且大多数情况下最好不要使用第三方集合类，如 Guava 中的集合类，很多开源的序列化框架都是优先支持编程语言原生的对象。因此如果入参是集合类，应尽量选用原生的、最为常用的集合类，如 HashMap、ArrayList。</p></li></ul><h3 id="序列化要点" tabindex="-1"><a class="header-anchor" href="#序列化要点" aria-hidden="true">#</a> 序列化要点</h3><p>前面已经列举了常见的序列化问题，既然明确了问题，就要针对性预防。RPC 序列化时要注意以下几点：</p><ol><li>对象要尽量简单，没有太多的依赖关系，属性不要太多，尽量高内聚；</li><li>入参对象与返回值对象体积不要太大，更不要传太大的集合；</li><li>尽量使用简单的、常用的、开发语言原生的对象，尤其是集合类；</li><li>对象不要有复杂的继承关系，最好不要有父子类的情况。</li></ol><h2 id="网络传输" tabindex="-1"><a class="header-anchor" href="#网络传输" aria-hidden="true">#</a> 网络传输</h2><p>一次 RPC 调用，本质就是服务消费者与服务提供者间的一次网络信息交换的过程。可见，通信时 RPC 实现的核心。</p><p>常见的网络 IO 模型有：同步阻塞（BIO）、同步非阻塞（NIO）、异步非阻塞（AIO）。</p><h3 id="同步阻塞方式-bio" tabindex="-1"><a class="header-anchor" href="#同步阻塞方式-bio" aria-hidden="true">#</a> 同步阻塞方式（BIO）</h3><p>同步阻塞方式的工作流程大致为：客户端每发一次请求，服务端就生成一个线程去处理。当客户端同时发起的请求很多时，服务端需要创建很多的线程去处理每一个请求，如果达到了系统最大的线程数瓶颈，新来的请求就没法处理了。</p><p>BIO 适用于连接数比较小的业务场景，这样的话不至于系统中没有可用线程去处理请求。这种方式写的程序也比较简单直观，易于理解。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200630212345.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="同步非阻塞方式-nio" tabindex="-1"><a class="header-anchor" href="#同步非阻塞方式-nio" aria-hidden="true">#</a> 同步非阻塞方式 (NIO)</h3><p><strong>同步非阻塞方式 (NIO)</strong> 的工作流程大致为：客户端每发一次请求，服务端并不是每次都创建一个新线程来处理，而是通过 I/O 多路复用技术进行处理。就是把多个 I/O 的阻塞复用到同一个 select 的阻塞上，从而使系统在单线程的情况下可以同时处理多个客户端请求。这种方式的优势是开销小，不用为每个请求创建一个线程，可以节省系统开销。</p><h4 id="io-多路复用" tabindex="-1"><a class="header-anchor" href="#io-多路复用" aria-hidden="true">#</a> IO 多路复用</h4><p>IO 多路复用（Reactor 模式）在高并发场景下使用最为广泛，很多知名软件都应用了这一技术，如：Netty、Redis、Nginx 等。什么是 IO 多路复用？字面上的理解，多路就是指多个通道，也就是多个网络连接的 IO，而复用就是指多个通道复用在一个复用器上。IO 多路复用分为 select，poll 和 epoll。</p><h4 id="零拷贝" tabindex="-1"><a class="header-anchor" href="#零拷贝" aria-hidden="true">#</a> 零拷贝</h4><p>系统内核处理 IO 操作分为两个阶段——等待数据和拷贝数据。等待数据，就是系统内核在等待网卡接收到数据后，把数据写到内核中；而拷贝数据，就是系统内核在获取到数据后，将数据拷贝到用户进程的空间中。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200717154300" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>应用进程的每一次写操作，都会把数据写到用户空间的缓冲区中，再由 CPU 将数据拷贝到系统内核的缓冲区中，之后再由 DMA 将这份数据拷贝到网卡中，最后由网卡发送出去。这里我们可以看到，一次写操作数据要拷贝两次才能通过网卡发送出去，而用户进程的读操作则是将整个流程反过来，数据同样会拷贝两次才能让应用程序读取到数据。</p><p>应用进程的一次完整的读写操作，都需要在用户空间与内核空间中来回拷贝，并且每一次拷贝，都需要 CPU 进行一次上下文切换（由用户进程切换到系统内核，或由系统内核切换到用户进程），这样很浪费 CPU 和性能。</p><p>所谓的零拷贝，就是取消用户空间与内核空间之间的数据拷贝操作，应用进程每一次的读写操作，可以通过一种方式，直接将数据写入内核或从内核中读取数据，再通过 DMA 将内核中的数据拷贝到网卡，或将网卡中的数据 copy 到内核。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200717154716.jfif" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Netty 的零拷贝偏向于用户空间中对数据操作的优化，这对处理 TCP 传输中的拆包粘包问题有着重要的意义，对应用程序处理请求数据与返回数据也有重要的意义。</p><p>Netty 框架中很多内部的 ChannelHandler 实现类，都是通过 CompositeByteBuf、slice、wrap 操作来处理 TCP 传输中的拆包与粘包问题的。</p><p>Netty 的 ByteBuffer 可以采用 Direct Buffers，使用堆外直接内存进行 Socketd 的读写<br> 操作，最终的效果与我刚才讲解的虚拟内存所实现的效果是一样的。</p><p>Netty 还提供 FileRegion 中包装 NIO 的 FileChannel.transferTo() 方法实现了零拷<br> 贝，这与 Linux 中的 sendfile 方式在原理上也是一样的。</p><h4 id="nio-vs-bio" tabindex="-1"><a class="header-anchor" href="#nio-vs-bio" aria-hidden="true">#</a> NIO vs BIO</h4><p>NIO 适用于连接数比较多并且请求消耗比较轻的业务场景，比如聊天服务器。这种方式相比 BIO，相对来说编程比较复杂。</p><p>BIO 与 NIO 最重要的区别是数据打包和传输的方式：<strong>BIO 以流的方式处理数据，而 NIO 以块的方式处理数据</strong>。</p><ul><li><strong>面向流的 BIO 一次处理一个字节数据</strong>：一个输入流产生一个字节数据，一个输出流消费一个字节数据。为流式数据创建过滤器非常容易，链接几个过滤器，以便每个过滤器只负责复杂处理机制的一部分。不利的一面是，面向流的 I/O 通常相当慢。</li><li><strong>面向块的 NIO 一次处理一个数据块</strong>，按块处理数据比按流处理数据要快得多。但是面向块的 NIO 缺少一些面向流的 BIO 所具有的优雅性和简单性。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200630212248.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="异步非阻塞方式-aio" tabindex="-1"><a class="header-anchor" href="#异步非阻塞方式-aio" aria-hidden="true">#</a> 异步非阻塞方式 (AIO)</h3><p><strong>异步非阻塞方式 (AIO)</strong> 的大致工作流程为：客户端只需要发起一个 I/O 操作然后立即返回，等 I/O 操作真正完成以后，客户端会得到 I/O 操作完成的通知，此时客户端只需要对数据进行处理就好了，不需要进行实际的 I/O 读写操作，因为真正的 I/O 读取或者写入操作已经由内核完成了。这种方式的优势是客户端无需等待，不存在阻塞等待问题。</p><p>AIO 适用于连接数比较多而且请求消耗比较重的业务场景，比如涉及 I/O 操作的相册服务器。这种方式相比另外两种，编程难度最大，程序也不易于理解。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',38),v={href:"https://time.geekbang.org/column/intro/100014401",target:"_blank",rel:"noopener noreferrer"},z={href:"https://time.geekbang.org/column/intro/100046201",target:"_blank",rel:"noopener noreferrer"};function A(J,L){const t=o("ExternalLinkIcon");return s(),l("div",null,[p,e("blockquote",null,[e("p",null,[r("有兴趣深入了解 JDK 序列化方式，可以参考："),e("a",g,[r("Java 序列化"),n(t)])])]),d,e("ul",null,[c,e("li",null,[r("其他二进制序列化 "),e("ul",null,[e("li",null,[e("a",u,[r("Thrift"),n(t)])]),e("li",null,[e("a",f,[r("Protobuf"),n(t)])]),e("li",null,[e("a",b,[r("Hessian"),n(t)])])])]),e("li",null,[r("JSON 序列化 "),e("ul",null,[e("li",null,[e("a",_,[r("Jackson"),n(t)])]),e("li",null,[e("a",m,[r("Gson"),n(t)])]),e("li",null,[e("a",P,[r("Fastjson"),n(t)])])])])]),C,e("ul",null,[x,e("li",null,[e("a",I,[r("Thrift"),n(t)]),r("、"),e("a",O,[r("Protobuf"),n(t)]),r("：适用于"),T,r("。")]),e("li",null,[e("a",k,[r("Hessian"),n(t)]),r("：适用于"),R,r("。")]),e("li",null,[e("a",w,[r("Jackson"),n(t)]),r("、"),e("a",N,[r("Gson"),n(t)]),r("、"),e("a",B,[r("Fastjson"),n(t)]),r("：适用于对序列化后的数据要求有"),H,r("（转为 json 、xml 形式）。")])]),y,e("ul",null,[e("li",null,[e("a",v,[r("从 0 开始学微服务"),n(t)])]),e("li",null,[e("a",z,[r("RPC 实战与核心原理"),n(t)])])])])}const M=i(h,[["render",A],["__file","index.html.vue"]]);export{M as default};