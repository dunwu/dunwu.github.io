import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as l,c as o,a as i,b as a,d as t,e as s}from"./app-05b4da95.js";const c={},d=s('<h1 id="传输控制协议-tcp" tabindex="-1"><a class="header-anchor" href="#传输控制协议-tcp" aria-hidden="true">#</a> 传输控制协议 TCP</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><h3 id="什么是-tcp" tabindex="-1"><a class="header-anchor" href="#什么是-tcp" aria-hidden="true">#</a> 什么是 TCP</h3><p><strong>TCP（Transmission Control Protocol），即传输控制协议，它是一种<code>面向连接的</code>、<code>可靠的</code>、<code>基于字节流的</code>传输层通信协议</strong>。TCP 由 RFC 793 定义。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/1559263786555.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="tcp-的特性" tabindex="-1"><a class="header-anchor" href="#tcp-的特性" aria-hidden="true">#</a> TCP 的特性</h3><ul><li><code>面向连接的</code> - 面向连接是指 TCP 需要通过三次握手、四次挥手原则建立和断开双向连接。</li><li><code>可靠的</code> - 可靠是指 TCP 传输的数据包保证以原始顺序到达目的地，且数据包不被损坏。为了实现这点，TCP 通过以下技术来保证： <ul><li>数据包的序列号和校验码</li><li>确认包和自动重传 <ul><li>如果发送者没有收到正确的响应，它将重新发送数据包。如果多次超时，连接就会断开。</li><li>TCP 实行流量控制和拥塞控制。这些确保措施会导致延迟，而且通常导致传输效率比 UDP 低。</li></ul></li></ul></li><li><code>基于字节流的</code><ul><li>虽然应用程序和 TCP 的交互是一次一个数据块（大小不等），但 TCP 把应用程序看成是一连串的无结构的字节流。TCP 有一个缓冲，当应用程序传送的数据块太长，TCP 就可以把它划分短一些再传送。如果应用程序一次只发送一个字节，TCP 也可以等待积累有足够多的字节后再构成报文段发送出去。</li><li>在 TCP 建立连接前两次握手的 SYN 报文中选项字段的 MSS 值，通信双方商定通信的最大报文长度。如果应用层交付下来的数据过大，就会对数据分段，然后发送；否则通过滑动窗口来控制通信双发的数据。</li></ul></li></ul><h3 id="tcp-的适用场景" tabindex="-1"><a class="header-anchor" href="#tcp-的适用场景" aria-hidden="true">#</a> TCP 的适用场景</h3><p>基于以上特性，为了确保高吞吐量，Web 服务器可以保持大量的 TCP 连接，从而导致高内存使用。但要注意的是，在 Web 服务器线程间拥有大量开放连接可能开销巨大，消耗资源过多，这时可以考虑在适用情况下切换到 UDP。</p><p>TCP 对于需要高可靠性但时间紧迫的应用程序很有用。比如包括 Web 服务器，数据库信息，SMTP，FTP 和 SSH。</p><p>以下情况使用 TCP 代替 UDP：</p><ul><li>你需要数据完好无损。</li><li>你想对网络吞吐量自动进行最佳评估。</li></ul><h3 id="tcp-报文" tabindex="-1"><a class="header-anchor" href="#tcp-报文" aria-hidden="true">#</a> TCP 报文</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/1559264511812.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>报文字段不一一阐述，重点关注以下几点：</p><ul><li>TCP 的包是没有 IP 地址的，那是 IP 层上的事。但是有源端口和目标端口。</li><li>一个 TCP 连接需要四个元组来表示是同一个连接（src_ip, src_port, dst_ip, dst_port）准确说是五元组，还有一个是协议。但因为这里只是说 TCP 协议，所以，这里我只说四元组。</li><li>注意上图中的四个非常重要的东西： <ul><li><strong>Sequence Number</strong>是包的序号，<strong>用来解决网络包乱序（reordering）问题。</strong></li><li><strong>Acknowledgement Number</strong>就是 ACK——用于确认收到，<strong>用来解决不丢包的问题</strong>。</li><li><strong>Window 又叫 Advertised-Window</strong>，也就是著名的滑动窗口（Sliding Window），<strong>用于解决流控的</strong>。</li><li><strong>TCP Flag</strong>，也就是包的类型，<strong>主要是用于操控 TCP 的状态机的</strong>。</li></ul></li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/1559264593860.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="tcp-通信流程" tabindex="-1"><a class="header-anchor" href="#tcp-通信流程" aria-hidden="true">#</a> TCP 通信流程</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/1559264679371.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>TCP 完整的通信分为三块：</p><ol><li>三次握手建立连接</li><li>数据传输</li><li>四次挥手端口连接</li></ol><h3 id="三次握手" tabindex="-1"><a class="header-anchor" href="#三次握手" aria-hidden="true">#</a> 三次握手</h3><p>（1）三次握手有什么用？</p><ul><li>三次握手负责建立 TCP 双向连接。</li></ul><p>（2）什么是三次握手？</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/transport/三次握手.gif" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如上图所示，三次握手流程如下：</p><ol><li>第一次握手 - 客户端向服务端发送带有 SYN 标志的数据包。</li><li>第二次握手 - 服务端向客户端发送带有 SYN/ACK 标志的数据包。</li><li>第三次握手 - 客户端向服务端发送带有带有 ACK 标志的数据包。</li></ol><p>至此，TCP 三次握手完成，客户端与服务端已建立双向连接。</p><blockquote><p>💡 说明：SYN 为 synchronize 的缩写，ACK 为 acknowledgment 的缩写。</p></blockquote><p>（3）为什么需要三次握手？</p><p>为了便于说明，假设客户端为 A, 服务端为 B。</p><ol><li>第一次握手，A 向 B 发同步消息。B 收到消息后，B 认为：A 发消息没问题；B 收消息没问题。</li><li>第二次握手，B 向 A 发同步消息和确认消息。A 收到消息后，A 认为：A 发消息、收消息都没问题；B 发消息、收消息都没问题。<strong>但是，此时 B 不确定自己发消息是否没问题</strong>，所以就需要第三次握手。</li><li>第三次握手，A 向 B 发确认消息。B 收到消息后。B 认为：B 发消息没问题。</li></ol><h3 id="四次挥手" tabindex="-1"><a class="header-anchor" href="#四次挥手" aria-hidden="true">#</a> 四次挥手</h3><p>（1）四次挥手有什么用？</p><ul><li>四次挥手负责断开 TCP 连接。</li></ul><p>（2）什么是四次挥手？</p><p>如上图所示，四次挥手流程如下：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/transport/四次挥手.gif" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li>第一次挥手 - 客户端向服务端发送一个 FIN 包，用来关闭客户端到服务端的数据传送。</li><li>第二次挥手 - 服务端收到这个 FIN 包，向客户端发送一个 ACK 包，确认序号为收到的序号加 1。和 SYN 一样，一个 FIN 将占用一个序号。</li><li>第三次挥手 - 服务端关闭与客户端的连接，向客户端发送一个 FIN 包。</li><li>第四次挥手 - 客户端向服务端发送 ACK 包，并将确认序号设置为收到序号加 1。</li></ol><p>（3）为什么建立连接是三次握手，关闭连接确是四次挥手呢？</p><ul><li>建立连接的时候， 服务器在 LISTEN 状态下，收到建立连接请求的 SYN 报文后，把 ACK 和 SYN 放在一个报文里发送给客户端。</li><li>而关闭连接时，服务器收到对方的 FIN 报文时，仅仅表示对方不再发送数据了但是还能接收数据，而自己也未必全部数据都发送给对方了，所以己方可以立即关闭，也可以发送一些数据给对方后，再发送 FIN 报文给对方来表示同意现在关闭连接，因此，己方 ACK 和 FIN 一般都会分开发送，从而导致多了一次。</li></ul><h2 id="滑动窗口" tabindex="-1"><a class="header-anchor" href="#滑动窗口" aria-hidden="true">#</a> 滑动窗口</h2><p>什么是滑动窗口？</p><p><strong>滑动窗口是 TCP 的一种控制网络流量的技术。</strong></p><p><strong>TCP 必需要解决的可靠传输以及包乱序（reordering）的问题</strong>，所以，TCP 必需要知道网络实际的数据处理带宽或是数据处理速度，这样才不会引起网络拥塞，导致丢包。</p><p>TCP 头里有一个字段叫 Window，又叫 Advertised-Window，这个字段是接收端告诉发送端自己还有多少缓冲区可以接收数据。<strong>于是发送端就可以根据这个接收端的处理能力来发送数据，而不会导致接收端处理不过来</strong>。</p><p>滑动窗口原理是什么？</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/1559265819762.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li>已发送已确认 - 数据流中最早的字节已经发送并得到确认。这些数据是站在发送端的角度来看的。上图中的 31 个字节已经发送并确认。</li><li>已发送但尚未确认 - 已发送但尚未得到确认的字节。发送方在确认之前，不认为这些数据已经被处理。上图中的 32 ~ 45 字节为第 2 类。</li><li>未发送而接收方已 Ready - 设备尚未将数据发出 ，但接收方根据最近一次关于发送方一次要发送多少字节确认自己有足够空间。发送方会立即尝试发送。上图中的 46 ~ 51 字节为第 3 类。</li><li>未发送而接收方 Not Ready - 由于接收方 not ready，还不允许将这部分数据发出。上图中的 52 以后的字节为第 4 类。</li></ol><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/1559265927658.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>这张图片相对于上一张图片，滑动窗口偏移了 5 个字节，意味着有 5 个已发送的字节得到了确认。</p><h2 id="tcp-重传机制" tabindex="-1"><a class="header-anchor" href="#tcp-重传机制" aria-hidden="true">#</a> TCP 重传机制</h2><p>TCP 要保证所有的数据包都可以到达，所以，必需要有重传机制。</p><p>TCP 重传机制主要有两种：</p><ul><li>超时重传机制</li><li>快速重传机制</li></ul><h3 id="超时重传机制" tabindex="-1"><a class="header-anchor" href="#超时重传机制" aria-hidden="true">#</a> 超时重传机制</h3><p>超时重传机制是指：发送数据包在一定的时间周期内没有收到相应的 ACK，等待一定的时间，超时之后就认为这个数据包丢失，就会重新发送。这个等待时间被称为 RTO(Retransmission TimeOut)，即重传超时时间。</p><p>没有确认的数据包不会从窗口中移走，定时器在重传时间到期内，每个片段的位置不变。</p><p>这种机制的重点是 RTO 的设置：</p><ul><li>RTO 设长了，重发就慢，丢了老半天才重发，没有效率，性能差；</li><li>RTO 设短了，会导致可能并没有丢就重发。于是重发的就快，会增加网络拥塞，导致更多的超时，更多的超时导致更多的重发</li></ul><h3 id="快速重传机制" tabindex="-1"><a class="header-anchor" href="#快速重传机制" aria-hidden="true">#</a> 快速重传机制</h3><p>快速重传机制，实现了另外的一种丢包评定标准，即如果连续收到 3 次重复 ACK，发送方就认为这个 seq 的包丢失了，立刻进行重传。</p><p>当接收方收到乱序片段时，需要重复发送 ACK。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',65),p={href:"https://coolshell.cn/articles/11564.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://coolshell.cn/articles/11609.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://juejin.im/post/5a7835a46fb9a063606eb801",target:"_blank",rel:"noopener noreferrer"},u={href:"https://blog.csdn.net/qzcsu/article/details/72861891",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/sinat_36629696/article/details/80740678",target:"_blank",rel:"noopener noreferrer"};function f(C,T){const e=n("ExternalLinkIcon");return l(),o("div",null,[d,i("ul",null,[i("li",null,[i("a",p,[a("TCP 的那些事儿（上）"),t(e)])]),i("li",null,[i("a",g,[a("TCP 的那些事儿（下）"),t(e)])]),i("li",null,[i("a",h,[a("图解 TCP 三次握手与四次分手"),t(e)])]),i("li",null,[i("a",u,[a("TCP 的三次握手与四次挥手（详解+动图）"),t(e)])]),i("li",null,[i("a",m,[a("TCP 详解"),t(e)])])])])}const _=r(c,[["render",f],["__file","03.TCP.html.vue"]]);export{_ as default};
