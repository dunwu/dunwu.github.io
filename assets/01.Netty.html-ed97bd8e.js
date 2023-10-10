import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,a as n,b as a,d as t,e as l}from"./app-29bcd084.js";const i={},u=l(`<h1 id="netty-快速入门" tabindex="-1"><a class="header-anchor" href="#netty-快速入门" aria-hidden="true">#</a> Netty 快速入门</h1><h2 id="netty-简介" tabindex="-1"><a class="header-anchor" href="#netty-简介" aria-hidden="true">#</a> Netty 简介</h2><blockquote><p><strong>Netty 是一款基于 NIO（Nonblocking I/O，非阻塞 IO）开发的网络通信框架</strong>。</p></blockquote><h3 id="netty-的特性" tabindex="-1"><a class="header-anchor" href="#netty-的特性" aria-hidden="true">#</a> Netty 的特性</h3><ul><li><strong>高并发</strong>：Netty 是一款<strong>基于 NIO</strong>（Nonblocking IO，非阻塞 IO）开发的网络通信框架，对比于 BIO（Blocking I/O，阻塞 IO），他的并发性能得到了很大提高。</li><li><strong>传输快</strong>：Netty 的传输依赖于<strong>内存零拷贝</strong>特性，尽量减少不必要的内存拷贝，实现了更高效率的传输。</li><li><strong>封装好</strong>：Netty <strong>封装了 NIO 操作</strong>的很多细节，提供了易于使用调用接口。</li></ul><h2 id="核心组件" tabindex="-1"><a class="header-anchor" href="#核心组件" aria-hidden="true">#</a> 核心组件</h2><ul><li><code>Channel</code>：Netty 网络操作抽象类，它除了包括基本的 I/O 操作，如 bind、connect、read、write 等。</li><li><code>EventLoop</code>：主要是配合 Channel 处理 I/O 操作，用来处理连接的生命周期中所发生的事情。</li><li><code>ChannelFuture</code>：Netty 框架中所有的 I/O 操作都为异步的，因此我们需要 ChannelFuture 的 addListener()注册一个 ChannelFutureListener 监听事件，当操作执行成功或者失败时，监听就会自动触发返回结果。</li><li><code>ChannelHandler</code>：充当了所有处理入站和出站数据的逻辑容器。ChannelHandler 主要用来处理各种事件，这里的事件很广泛，比如可以是连接、数据接收、异常、数据转换等。</li><li><code>ChannelPipeline</code>：为 ChannelHandler 链提供了容器，当 channel 创建时，就会被自动分配到它专属的 ChannelPipeline，这个关联是永久性的。</li></ul><p>Netty 有两种发送消息的方式：</p><ul><li>直接写入 Channel 中，消息从 ChannelPipeline 当中尾部开始移动；</li><li>写入和 ChannelHandler 绑定的 ChannelHandlerContext 中，消息从 ChannelPipeline 中的下一个 ChannelHandler 中移动。</li></ul><h2 id="高性能" tabindex="-1"><a class="header-anchor" href="#高性能" aria-hidden="true">#</a> 高性能</h2><p>Netty 高性能表现在哪些方面：</p><ul><li><strong>NIO 线程模型</strong>：同步非阻塞，用最少的资源做更多的事。</li><li><strong>内存零拷贝</strong>：尽量减少不必要的内存拷贝，实现了更高效率的传输。</li><li><strong>内存池设计</strong>：申请的内存可以重用，主要指直接内存。内部实现是用一颗二叉查找树管理内存分配情况。</li><li><strong>串形化处理读写</strong>：避免使用锁带来的性能开销。</li><li><strong>高性能序列化协议</strong>：支持 protobuf 等高性能序列化协议。</li></ul><h2 id="零拷贝" tabindex="-1"><a class="header-anchor" href="#零拷贝" aria-hidden="true">#</a> 零拷贝</h2><h3 id="传统意义的拷贝" tabindex="-1"><a class="header-anchor" href="#传统意义的拷贝" aria-hidden="true">#</a> 传统意义的拷贝</h3><p>是在发送数据的时候，传统的实现方式是：</p><p><code>File.read(bytes)</code></p><p><code>Socket.send(bytes)</code></p><p>这种方式需要四次数据拷贝和四次上下文切换：</p><ol><li><p>数据从磁盘读取到内核的 read buffer</p></li><li><p>数据从内核缓冲区拷贝到用户缓冲区</p></li><li><p>数据从用户缓冲区拷贝到内核的 socket buffer</p></li><li><p>数据从内核的 socket buffer 拷贝到网卡接口（硬件）的缓冲区</p></li></ol><h3 id="零拷贝的概念" tabindex="-1"><a class="header-anchor" href="#零拷贝的概念" aria-hidden="true">#</a> 零拷贝的概念</h3><p>明显上面的第二步和第三步是非必要的，通过 java 的 FileChannel.transferTo 方法，可以避免上面两次多余的拷贝（当然这需要底层操作系统支持）</p><ul><li>调用 transferTo，数据从文件由 DMA 引擎拷贝到内核 read buffer</li><li>接着 DMA 从内核 read buffer 将数据拷贝到网卡接口 buffer</li></ul><p>上面的两次操作都不需要 CPU 参与，所以就达到了零拷贝。</p><h3 id="netty-中的零拷贝" tabindex="-1"><a class="header-anchor" href="#netty-中的零拷贝" aria-hidden="true">#</a> Netty 中的零拷贝</h3><p>主要体现在三个方面：</p><p><strong>bytebuffer</strong></p><p>Netty 发送和接收消息主要使用 bytebuffer，bytebuffer 使用对外内存（DirectMemory）直接进行 Socket 读写。</p><p>原因：如果使用传统的堆内存进行 Socket 读写，JVM 会将堆内存 buffer 拷贝一份到直接内存中然后再写入 socket，多了一次缓冲区的内存拷贝。DirectMemory 中可以直接通过 DMA 发送到网卡接口</p><p><strong>Composite Buffers</strong></p><p>传统的 ByteBuffer，如果需要将两个 ByteBuffer 中的数据组合到一起，我们需要首先创建一个 size=size1+size2 大小的新的数组，然后将两个数组中的数据拷贝到新的数组中。但是使用 Netty 提供的组合 ByteBuf，就可以避免这样的操作，因为 CompositeByteBuf 并没有真正将多个 Buffer 组合起来，而是保存了它们的引用，从而避免了数据的拷贝，实现了零拷贝。</p><p><strong>对于 FileChannel.transferTo 的使用</strong></p><p>Netty 中使用了 FileChannel 的 transferTo 方法，该方法依赖于操作系统实现零拷贝。</p><h2 id="netty-流程" tabindex="-1"><a class="header-anchor" href="#netty-流程" aria-hidden="true">#</a> Netty 流程</h2><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><blockquote><p>Netty 是一个广泛使用的 Java 网络编程框架。很多著名软件都使用了它，如：Dubbo、Cassandra、Elasticsearch、Vert.x 等。</p></blockquote><p>有了 Netty，你可以实现自己的 HTTP 服务器，FTP 服务器，UDP 服务器，RPC 服务器，WebSocket 服务器，Redis 的 Proxy 服务器，MySQL 的 Proxy 服务器等等。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NettyOioServer</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">server</span><span class="token punctuation">(</span><span class="token keyword">int</span> port<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">ByteBuf</span> buf <span class="token operator">=</span> <span class="token class-name">Unpooled</span><span class="token punctuation">.</span><span class="token function">unreleasableBuffer</span><span class="token punctuation">(</span>
                <span class="token class-name">Unpooled</span><span class="token punctuation">.</span><span class="token function">copiedBuffer</span><span class="token punctuation">(</span><span class="token string">&quot;Hi!\\r\\n&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Charset</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">EventLoopGroup</span> group <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OioEventLoopGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">ServerBootstrap</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServerBootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//1</span>

            b<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span>group<span class="token punctuation">)</span>                                    <span class="token comment">//2</span>
             <span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token class-name">OioServerSocketChannel</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
             <span class="token punctuation">.</span><span class="token function">localAddress</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InetSocketAddress</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span><span class="token punctuation">)</span>
             <span class="token punctuation">.</span><span class="token function">childHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ChannelInitializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SocketChannel</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//3</span>
                 <span class="token annotation punctuation">@Override</span>
                 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">initChannel</span><span class="token punctuation">(</span><span class="token class-name">SocketChannel</span> ch<span class="token punctuation">)</span>
                     <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
                     ch<span class="token punctuation">.</span><span class="token function">pipeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ChannelInboundHandlerAdapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>            <span class="token comment">//4</span>
                         <span class="token annotation punctuation">@Override</span>
                         <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">channelActive</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
                             ctx<span class="token punctuation">.</span><span class="token function">writeAndFlush</span><span class="token punctuation">(</span>buf<span class="token punctuation">.</span><span class="token function">duplicate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token class-name">ChannelFutureListener</span><span class="token punctuation">.</span><span class="token constant">CLOSE</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//5</span>
                         <span class="token punctuation">}</span>
                     <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                 <span class="token punctuation">}</span>
             <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">ChannelFuture</span> f <span class="token operator">=</span> b<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//6</span>
            f<span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">closeFuture</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            group<span class="token punctuation">.</span><span class="token function">shutdownGracefully</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//7</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,38),r=n("strong",null,"官方",-1),k={href:"https://netty.io/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/netty/netty",target:"_blank",rel:"noopener noreferrer"},h=n("strong",null,"文章",-1),f={href:"https://www.jianshu.com/p/b9f3f6a16911",target:"_blank",rel:"noopener noreferrer"},b={href:"https://juejin.im/post/5bdaf8ea6fb9a0227b02275a",target:"_blank",rel:"noopener noreferrer"},v={href:"https://juejin.im/post/5c81b08f5188257a323f4cef",target:"_blank",rel:"noopener noreferrer"};function m(y,g){const s=p("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[r,n("ul",null,[n("li",null,[n("a",k,[a("Netty 官网"),t(s)])]),n("li",null,[n("a",d,[a("Netty Github"),t(s)])])])]),n("li",null,[h,n("ul",null,[n("li",null,[n("a",f,[a("Netty 入门教程——认识 Netty"),t(s)])]),n("li",null,[n("a",b,[a("彻底理解 Netty，这一篇文章就够了"),t(s)])]),n("li",null,[n("a",v,[a("Java 200+ 面试题补充 ② Netty 模块"),t(s)])])])])])])}const _=e(i,[["render",m],["__file","01.Netty.html.vue"]]);export{_ as default};
