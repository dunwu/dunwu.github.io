import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as d,c as r,a as e,b as l,d as i,w as t,e as a}from"./app-6ca995c0.js";const p={},s=a('<h1 id="计算机网络面试总结" tabindex="-1"><a class="header-anchor" href="#计算机网络面试总结" aria-hidden="true">#</a> 计算机网络面试总结</h1><blockquote><p>如果你不是从事于通信领域，面试时问及计算机网络的知识，一般也就限定在：HTTP（含 HTTPS、Cookie、Session）、TCP、UDP、Socket 这些</p></blockquote><h2 id="综合" tabindex="-1"><a class="header-anchor" href="#综合" aria-hidden="true">#</a> 综合</h2><h3 id="计算机网络如何分层" tabindex="-1"><a class="header-anchor" href="#计算机网络如何分层" aria-hidden="true">#</a> 计算机网络如何分层？</h3><blockquote><p>❓ 问题：计算机网络如何分层？各层的作用是什么？各层的主要协议、设备分别是什么？</p><p>这是学习计算机网络知识宏观层面必须要了解的核心点。知道了这些，对于网络的体系结构就基本上了解了。</p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/overview/network-layers.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>计算机网络分层一般有三种划分体系：OSI 分层；五层协议分层；TCP/IP 协议分层。</p><ul><li>OSI 的七层体系结构概念清楚，理论完整，但是比较复杂且不实用，所以并不流行。</li><li>五层协议分层是一种折中方案，在现实中更为流行。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/overview/网络分层架构图.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>物理层</strong></p>',10),u=e("p",null,"物理层（Physical Layer）只接收和发送一串比特(bit)流，不考虑信息的意义和信息结构。",-1),h=e("ul",null,[e("li",null,"关键词：调制、解调、数字信号、模拟信号、通信媒介、信道复用"),e("li",null,"数据单元：比特流。"),e("li",null,"典型设备：光纤、同轴电缆、双绞线、中继器和集线器。")],-1),B=e("p",null,[e("strong",null,"数据链路层")],-1),g=e("p",null,"网络层针对的还是主机之间的数据传输服务，而主机之间可以有很多链路，数据链路层（Data Link Layer）就是为同一链路的主机提供数据传输服务。数据链路层把网络层传下来的分组封装成帧。",-1),E=a("<ul><li>关键词：点对点信道、广播信道、<code>PPP</code>、<code>CSMA/CD</code>、局域网、以太网、<code>MAC</code>、适配器、集线器、网桥、交换机</li><li>主要协议：<code>PPP</code>、<code>CSMA/CD</code> 等。</li><li>数据单元：帧（frame）。</li><li>典型设备：二层交换机、网桥、网卡。</li></ul><p><strong>网络层</strong></p>",2),C=e("p",null,"网络层（network layer）为分组交换网上的不同主机提供通信服务。在发送数据时，网络层把运输层产生的报文段或用户数据报封装成分组或包进行传送。",-1),P=a("<ul><li>关键词：<code>IP</code>、<code>ICMP</code>、<code>ARP</code>、路由</li><li>主要协议：<code>IP</code>。</li><li>数据单元：IP 数据报（packet）。</li><li>典型设备：网关、路由器。</li></ul><p><strong>传输层</strong></p>",2),T=e("p",null,"传输层（transport layer）为两台主机中进程间的通信提供通用的数据传输服务。",-1),m=a("<ul><li>关键词：<code>UDP</code>、<code>TCP</code>、滑动窗口、拥塞控制、三次握手</li><li>主要协议：<code>TCP</code>、<code>UDP</code>。</li><li>数据单元：报文段（segment）或用户数据报。</li></ul><p><sub>~**会话层**~</sub></p><blockquote><p>~~会话层（Session Layer）不参与具体的传输，它提供包括访问验证和会话管理在内的建立和维护应用之间通信的机制。~~</p></blockquote><p><sub>~**表示层**~</sub></p><blockquote><p>~~表示层（Presentation Layer）是为在应用过程之间传送的信息提供表示方法的服务，它关心的只是发出信息的语法与语义。表示层要完成某些特定的功能，主要有不同数据编码格式的转换，提供数据压缩、解压缩服务，对数据进行加密、解密。~~</p></blockquote><p><strong>应用层</strong></p>",6),_=e("p",null,"应用层（application layer）通过应用进程间的交互来完成特定网络应用。应用层协议定义的是应用进程间通信和交互的规则。",-1),b=a('<ul><li>关键词：<code>HTTP</code>、<code>DNS</code>、<code>FTP</code>、<code>TELNET</code>、<code>DHCP</code></li><li>主要协议：<code>HTTP</code>、<code>DNS</code>、<code>SMTP</code>、<code>Telnet</code>、<code>FTP</code>、<code>SNMP</code> 等。</li><li>数据单元：报文（message）。</li></ul><h2 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h2>',2),f=a('<h2 id="dns" tabindex="-1"><a class="header-anchor" href="#dns" aria-hidden="true">#</a> DNS</h2><blockquote><p>扩展阅读：<a href="../02.%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE/02.DNS">域名系统协议 DNS</a></p></blockquote><h2 id="tcp-udp" tabindex="-1"><a class="header-anchor" href="#tcp-udp" aria-hidden="true">#</a> TCP/UDP</h2>',3),k=a('<h3 id="什么是-tcp" tabindex="-1"><a class="header-anchor" href="#什么是-tcp" aria-hidden="true">#</a> 什么是 TCP？</h3><p><strong>TCP（Transmission Control Protocol），即传输控制协议，它是一种<code>面向连接的</code>、<code>可靠的</code>、<code>基于字节流的</code>传输层通信协议</strong>。</p><h3 id="tcp-的特性是什么" tabindex="-1"><a class="header-anchor" href="#tcp-的特性是什么" aria-hidden="true">#</a> TCP 的特性是什么？</h3><ul><li><code>面向连接的</code> - 面向连接是指 TCP 需要通过三次握手、四次挥手原则建立和断开双向连接。</li><li><code>可靠的</code> - 可靠是指 TCP 传输的数据包保证以原始顺序到达目的地，且数据包不被损坏。为了实现这点，TCP 通过以下技术来保证： <ul><li>数据包的序列号和校验码</li><li>确认包和自动重传 <ul><li>如果发送者没有收到正确的响应，它将重新发送数据包。如果多次超时，连接就会断开。</li><li>TCP 实行流量控制和拥塞控制。这些确保措施会导致延迟，而且通常导致传输效率比 UDP 低。</li></ul></li></ul></li><li><code>基于字节流的</code><ul><li>虽然应用程序和 TCP 的交互是一次一个数据块（大小不等），但 TCP 把应用程序看成是一连串的无结构的字节流。TCP 有一个缓冲，当应用程序传送的数据块太长，TCP 就可以把它划分短一些再传送。如果应用程序一次只发送一个字节，TCP 也可以等待积累有足够多的字节后再构成报文段发送出去。</li><li>在 TCP 建立连接前两次握手的 SYN 报文中选项字段的 MSS 值，通信双方商定通信的最大报文长度。如果应用层交付下来的数据过大，就会对数据分段，然后发送；否则通过滑动窗口来控制通信双发的数据。</li></ul></li></ul><h3 id="tcp-三次握手" tabindex="-1"><a class="header-anchor" href="#tcp-三次握手" aria-hidden="true">#</a> TCP 三次握手</h3><blockquote><p>❓ 问题：三次握手有什么用？什么是三次握手？为什么需要三次握手？</p></blockquote><p>（1）三次握手有什么用？</p><ul><li>三次握手负责建立 TCP 双向连接。</li></ul><p>（2）什么是三次握手？</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/transport/三次握手.gif" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如上图所示，三次握手流程如下：</p><ol><li>第一次握手 - 客户端向服务端发送带有 SYN 标志的数据包。</li><li>第二次握手 - 服务端向客户端发送带有 SYN/ACK 标志的数据包。</li><li>第三次握手 - 客户端向服务端发送带有带有 ACK 标志的数据包。</li></ol><p>至此，TCP 三次握手完成，客户端与服务端已建立双向连接。</p><blockquote><p>💡 说明：SYN 为 synchronize 的缩写，ACK 为 acknowledgment 的缩写。</p></blockquote><p>（3）为什么需要三次握手？</p><p>为了便于说明，假设客户端为 A, 服务端为 B。</p><ol><li>第一次握手，A 向 B 发同步消息。B 收到消息后，B 认为：A 发消息没问题；B 收消息没问题。</li><li>第二次握手，B 向 A 发同步消息和确认消息。A 收到消息后，A 认为：A 发消息、收消息都没问题；B 发消息、收消息都没问题。<strong>但是，此时 B 不确定自己发消息是否没问题</strong>，所以就需要第三次握手。</li><li>第三次握手，A 向 B 发确认消息。B 收到消息后。B 认为：B 发消息没问题。</li></ol><h3 id="tcp-四次挥手" tabindex="-1"><a class="header-anchor" href="#tcp-四次挥手" aria-hidden="true">#</a> TCP 四次挥手</h3><blockquote><p>❓ 问题：四次挥手有什么用？什么是四次挥手？为什么建立连接是三次握手，关闭连接确是四次挥手呢？</p></blockquote><p>（1）四次挥手有什么用？</p><ul><li>四次挥手负责断开 TCP 连接。</li></ul><p>（2）什么是四次挥手？</p><p>如上图所示，四次挥手流程如下：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/transport/四次挥手.gif" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li>第一次挥手 - 客户端向服务端发送一个 FIN 包，用来关闭客户端到服务端的数据传送。</li><li>第二次挥手 - 服务端收到这个 FIN 包，向客户端发送一个 ACK 包，确认序号为收到的序号加 1。和 SYN 一样，一个 FIN 将占用一个序号。</li><li>第三次挥手 - 服务端关闭与客户端的连接，向客户端发送一个 FIN 包。</li><li>第四次挥手 - 客户端向服务端发送 ACK 包，并将确认序号设置为收到序号加 1。</li></ol><p>（3）为什么建立连接是三次握手，关闭连接确是四次挥手呢？</p><ul><li>建立连接的时候， 服务器在 LISTEN 状态下，收到建立连接请求的 SYN 报文后，把 ACK 和 SYN 放在一个报文里发送给客户端。</li><li>而关闭连接时，服务器收到对方的 FIN 报文时，仅仅表示对方不再发送数据了但是还能接收数据，而自己也未必全部数据都发送给对方了，所以己方可以立即关闭，也可以发送一些数据给对方后，再发送 FIN 报文给对方来表示同意现在关闭连接，因此，己方 ACK 和 FIN 一般都会分开发送，从而导致多了一次。</li></ul><h3 id="tcp-滑动窗口" tabindex="-1"><a class="header-anchor" href="#tcp-滑动窗口" aria-hidden="true">#</a> TCP 滑动窗口</h3><blockquote><p>❓ 问题：什么是滑动窗口？滑动窗口原理是什么？</p></blockquote><p>什么是滑动窗口？</p><p><strong>滑动窗口是 TCP 的一种控制网络流量的技术。</strong></p><p><strong>TCP 必需要解决的可靠传输以及包乱序（reordering）的问题</strong>，所以，TCP 必需要知道网络实际的数据处理带宽或是数据处理速度，这样才不会引起网络拥塞，导致丢包。</p><p>TCP 头里有一个字段叫 Window，又叫 Advertised-Window，这个字段是接收端告诉发送端自己还有多少缓冲区可以接收数据。<strong>于是发送端就可以根据这个接收端的处理能力来发送数据，而不会导致接收端处理不过来</strong>。</p><p>滑动窗口原理是什么？</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/1559265819762.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li>已发送已确认 - 数据流中最早的字节已经发送并得到确认。这些数据是站在发送端的角度来看的。上图中的 31 个字节已经发送并确认。</li><li>已发送但尚未确认 - 已发送但尚未得到确认的字节。发送方在确认之前，不认为这些数据已经被处理。上图中的 32 ~ 45 字节为第 2 类。</li><li>未发送而接收方已 Ready - 设备尚未将数据发出 ，但接收方根据最近一次关于发送方一次要发送多少字节确认自己有足够空间。发送方会立即尝试发送。上图中的 46 ~ 51 字节为第 3 类。</li><li>未发送而接收方 Not Ready - 由于接收方 not ready，还不允许将这部分数据发出。上图中的 52 以后的字节为第 4 类。</li></ol><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/1559265927658.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>这张图片相对于上一张图片，滑动窗口偏移了 5 个字节，意味着有 5 个已发送的字节得到了确认。</p><h3 id="tcp-重传机制" tabindex="-1"><a class="header-anchor" href="#tcp-重传机制" aria-hidden="true">#</a> TCP 重传机制</h3><blockquote><p>❓ 问题：为什么需要重传机制？TCP 有哪些重传机制，原理是什么？</p></blockquote><p>TCP 要保证所有的数据包都可以到达，所以，必需要有重传机制。</p><p>TCP 重传机制主要有两种：</p><ul><li>超时重传机制</li><li>快速重传机制</li></ul><p>（1）超时重传机制</p><p>超时重传机制是指：发送数据包在一定的时间周期内没有收到相应的 ACK，等待一定的时间，超时之后就认为这个数据包丢失，就会重新发送。这个等待时间被称为 RTO(Retransmission TimeOut)，即重传超时时间。</p><p>没有确认的数据包不会从窗口中移走，定时器在重传时间到期内，每个片段的位置不变。</p><p>这种机制的重点是 RTO 的设置：</p><ul><li>RTO 设长了，重发就慢，丢了老半天才重发，没有效率，性能差；</li><li>RTO 设短了，会导致可能并没有丢就重发。于是重发的就快，会增加网络拥塞，导致更多的超时，更多的超时导致更多的重发</li></ul><p>（2）快速重传机制</p><p>快速重传机制，实现了另外的一种丢包评定标准，即如果连续收到 3 次重复 ACK，发送方就认为这个 seq 的包丢失了，立刻进行重传。</p><p>当接收方收到乱序片段时，需要重复发送 ACK。</p>',51);function D(A,q){const o=n("RouterLink");return d(),r("div",null,[s,e("blockquote",null,[u,e("p",null,[l("扩展阅读："),i(o,{to:"/13.%E7%BD%91%E7%BB%9C/01.%E7%BD%91%E7%BB%9C%E7%BB%BC%E5%90%88/11.%E7%89%A9%E7%90%86%E5%B1%82.html"},{default:t(()=>[l("计算机网络之物理层")]),_:1})])]),h,B,e("blockquote",null,[g,e("p",null,[l("扩展阅读："),i(o,{to:"/13.%E7%BD%91%E7%BB%9C/01.%E7%BD%91%E7%BB%9C%E7%BB%BC%E5%90%88/12.%E6%95%B0%E6%8D%AE%E9%93%BE%E8%B7%AF%E5%B1%82.html"},{default:t(()=>[l("计算机网络之数据链路层")]),_:1})])]),E,e("blockquote",null,[C,e("p",null,[l("扩展阅读："),i(o,{to:"/13.%E7%BD%91%E7%BB%9C/01.%E7%BD%91%E7%BB%9C%E7%BB%BC%E5%90%88/13.%E7%BD%91%E7%BB%9C%E5%B1%82.html"},{default:t(()=>[l("计算机网络之网络层")]),_:1})])]),P,e("blockquote",null,[T,e("p",null,[l("扩展阅读："),i(o,{to:"/13.%E7%BD%91%E7%BB%9C/01.%E7%BD%91%E7%BB%9C%E7%BB%BC%E5%90%88/14.%E4%BC%A0%E8%BE%93%E5%B1%82.html"},{default:t(()=>[l("计算机网络之传输层")]),_:1})])]),m,e("blockquote",null,[_,e("p",null,[l("扩展阅读："),i(o,{to:"/13.%E7%BD%91%E7%BB%9C/01.%E7%BD%91%E7%BB%9C%E7%BB%BC%E5%90%88/15.%E5%BA%94%E7%94%A8%E5%B1%82.html"},{default:t(()=>[l("计算机网络之应用层")]),_:1})])]),b,e("blockquote",null,[e("p",null,[l("扩展阅读："),i(o,{to:"/13.%E7%BD%91%E7%BB%9C/02.%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE/01.HTTP.html"},{default:t(()=>[l("超文本传输协议 HTTP")]),_:1})])]),f,e("blockquote",null,[e("p",null,[l("扩展阅读："),i(o,{to:"/13.%E7%BD%91%E7%BB%9C/02.%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE/03.TCP.html"},{default:t(()=>[l("传输控制协议 TCP")]),_:1}),l("，"),i(o,{to:"/13.%E7%BD%91%E7%BB%9C/02.%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE/04.UDP.html"},{default:t(()=>[l("用户数据报协议 UDP")]),_:1})])]),k])}const w=c(p,[["render",D],["__file","01.计算机网络面试.html.vue"]]);export{w as default};
