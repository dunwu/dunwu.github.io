import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as s,d as t,e}from"./app-fcc32256.js";const i={},u=n("h1",{id:"java-网络编程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#java-网络编程","aria-hidden":"true"},"#"),s(" Java 网络编程")],-1),d=e("<p><strong><em>关键词：<code>Socket</code>、<code>ServerSocket</code>、<code>DatagramPacket</code>、<code>DatagramSocket</code></em></strong></p><p>网络编程是指编写运行在多个设备（计算机）的程序，这些设备都通过网络连接起来。</p><p><code>java.net</code> 包中提供了低层次的网络通信细节。你可以直接使用这些类和接口，来专注于解决问题，而不用关注通信细节。</p>",3),r={href:"http://java.net",target:"_blank",rel:"noopener noreferrer"},k=n("ul",null,[n("li",null,[n("strong",null,"TCP"),s(" - TCP 是传输控制协议的缩写，它保障了两个应用程序之间的可靠通信。通常用于互联网协议，被称 TCP/ IP。")]),n("li",null,[n("strong",null,"UDP"),s(" - UDP 是用户数据报协议的缩写，一个无连接的协议。提供了应用程序之间要发送的数据的数据包。")])],-1),m=e(`<h2 id="socket-和-serversocket" tabindex="-1"><a class="header-anchor" href="#socket-和-serversocket" aria-hidden="true">#</a> Socket 和 ServerSocket</h2><p>套接字（Socket）使用 TCP 提供了两台计算机之间的通信机制。 客户端程序创建一个套接字，并尝试连接服务器的套接字。</p><p><strong>Java 通过 Socket 和 ServerSocket 实现对 TCP 的支持</strong>。Java 中的 Socket 通信可以简单理解为：<strong><code>java.net.Socket</code> 代表客户端，<code>java.net.ServerSocket</code> 代表服务端</strong>，二者可以建立连接，然后通信。</p><p>以下为 Socket 通信中建立建立的基本流程：</p><ul><li>服务器实例化一个 <code>ServerSocket</code> 对象，表示服务器绑定一个端口。</li><li>服务器调用 <code>ServerSocket</code> 的 <code>accept()</code> 方法，该方法将一直等待，直到客户端连接到服务器的绑定端口（即监听端口）。</li><li>服务器监听端口时，客户端实例化一个 <code>Socket</code> 对象，指定服务器名称和端口号来请求连接。</li><li><code>Socket</code> 类的构造函数试图将客户端连接到指定的服务器和端口号。如果通信被建立，则在客户端创建一个 Socket 对象能够与服务器进行通信。</li><li>在服务器端，<code>accept()</code> 方法返回服务器上一个新的 <code>Socket</code> 引用，该引用连接到客户端的 <code>Socket</code> 。</li></ul><p>连接建立后，可以通过使用 IO 流进行通信。每一个 <code>Socket</code> 都有一个输出流和一个输入流。客户端的输出流连接到服务器端的输入流，而客户端的输入流连接到服务器端的输出流。</p><p>TCP 是一个双向的通信协议，因此数据可以通过两个数据流在同一时间发送，以下是一些类提供的一套完整的有用的方法来实现 sockets。</p><h3 id="serversocket" tabindex="-1"><a class="header-anchor" href="#serversocket" aria-hidden="true">#</a> ServerSocket</h3><p>服务器程序通过使用 <code>java.net.ServerSocket</code> 类以获取一个端口，并且监听客户端请求连接此端口的请求。</p><h4 id="serversocket-构造方法" tabindex="-1"><a class="header-anchor" href="#serversocket-构造方法" aria-hidden="true">#</a> ServerSocket 构造方法</h4><p><code>ServerSocket</code> 有多个构造方法：</p><table><thead><tr><th><strong>方法</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>ServerSocket()</code></td><td>创建非绑定服务器套接字。</td></tr><tr><td><code>ServerSocket(int port)</code></td><td>创建绑定到特定端口的服务器套接字。</td></tr><tr><td><code>ServerSocket(int port, int backlog)</code></td><td>利用指定的 <code>backlog</code> 创建服务器套接字并将其绑定到指定的本地端口号。</td></tr><tr><td><code>ServerSocket(int port, int backlog, InetAddress address)</code></td><td>使用指定的端口、监听 <code>backlog</code> 和要绑定到的本地 IP 地址创建服务器。</td></tr></tbody></table><h4 id="serversocket-常用方法" tabindex="-1"><a class="header-anchor" href="#serversocket-常用方法" aria-hidden="true">#</a> ServerSocket 常用方法</h4><p>创建非绑定服务器套接字。 如果 <code>ServerSocket</code> 构造方法没有抛出异常，就意味着你的应用程序已经成功绑定到指定的端口，并且侦听客户端请求。</p><p>这里有一些 <code>ServerSocket</code> 类的常用方法：</p><table><thead><tr><th><strong>方法</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>int getLocalPort()</code></td><td>返回此套接字在其上侦听的端口。</td></tr><tr><td><code>Socket accept()</code></td><td>监听并接受到此套接字的连接。</td></tr><tr><td><code>void setSoTimeout(int timeout)</code></td><td>通过指定超时值启用/禁用 <code>SO_TIMEOUT</code>，以毫秒为单位。</td></tr><tr><td><code>void bind(SocketAddress host, int backlog)</code></td><td>将 <code>ServerSocket</code> 绑定到特定地址（IP 地址和端口号）。</td></tr></tbody></table><h3 id="socket" tabindex="-1"><a class="header-anchor" href="#socket" aria-hidden="true">#</a> Socket</h3><p><code>java.net.Socket</code> 类代表客户端和服务器都用来互相沟通的套接字。客户端要获取一个 <code>Socket</code> 对象通过实例化 ，而 服务器获得一个 <code>Socket</code> 对象则通过 <code>accept()</code> 方法 a 的返回值。</p><h4 id="socket-构造方法" tabindex="-1"><a class="header-anchor" href="#socket-构造方法" aria-hidden="true">#</a> Socket 构造方法</h4><p><code>Socket</code> 类有 5 个构造方法：</p><table><thead><tr><th><strong>方法</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>Socket()</code></td><td>通过系统默认类型的 <code>SocketImpl</code> 创建未连接套接字</td></tr><tr><td><code>Socket(String host, int port)</code></td><td>创建一个流套接字并将其连接到指定主机上的指定端口号。</td></tr><tr><td><code>Socket(InetAddress host, int port)</code></td><td>创建一个流套接字并将其连接到指定 IP 地址的指定端口号。</td></tr><tr><td><code>Socket(String host, int port, InetAddress localAddress, int localPort)</code></td><td>创建一个套接字并将其连接到指定远程主机上的指定远程端口。</td></tr><tr><td><code>Socket(InetAddress host, int port, InetAddress localAddress, int localPort)</code></td><td>创建一个套接字并将其连接到指定远程地址上的指定远程端口。</td></tr></tbody></table><p>当 Socket 构造方法返回，并没有简单的实例化了一个 Socket 对象，它实际上会尝试连接到指定的服务器和端口。</p><h4 id="socket-常用方法" tabindex="-1"><a class="header-anchor" href="#socket-常用方法" aria-hidden="true">#</a> Socket 常用方法</h4><p>下面列出了一些感兴趣的方法，注意客户端和服务器端都有一个 Socket 对象，所以无论客户端还是服务端都能够调用这些方法。</p><table><thead><tr><th><strong>方法</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>void connect(SocketAddress host, int timeout)</code></td><td>将此套接字连接到服务器，并指定一个超时值。</td></tr><tr><td><code>InetAddress getInetAddress()</code></td><td>返回套接字连接的地址。</td></tr><tr><td><code>int getPort()</code></td><td>返回此套接字连接到的远程端口。</td></tr><tr><td><code>int getLocalPort()</code></td><td>返回此套接字绑定到的本地端口。</td></tr><tr><td><code>SocketAddress getRemoteSocketAddress()</code></td><td>返回此套接字连接的端点的地址，如果未连接则返回 null。</td></tr><tr><td><code>InputStream getInputStream()</code></td><td>返回此套接字的输入流。</td></tr><tr><td><code>OutputStream getOutputStream()</code></td><td>返回此套接字的输出流。</td></tr><tr><td><code>void close()</code></td><td>关闭此套接字。</td></tr></tbody></table><h3 id="socket-通信示例" tabindex="-1"><a class="header-anchor" href="#socket-通信示例" aria-hidden="true">#</a> Socket 通信示例</h3><p>服务端示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloServer</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// Socket 服务端</span>
        <span class="token comment">// 服务器在8888端口上监听</span>
        <span class="token class-name">ServerSocket</span> server <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServerSocket</span><span class="token punctuation">(</span><span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;服务器运行中，等待客户端连接。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 得到连接，程序进入到阻塞状态</span>
        <span class="token class-name">Socket</span> client <span class="token operator">=</span> server<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 打印流输出最方便</span>
        <span class="token class-name">PrintStream</span> out <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PrintStream</span><span class="token punctuation">(</span>client<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 向客户端输出信息</span>
        out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        client<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        server<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;服务器已向客户端发送消息，退出。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloClient</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// Socket 客户端</span>
        <span class="token class-name">Socket</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Socket</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">InputStreamReader</span> inputStreamReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>client<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 一次性接收完成</span>
        <span class="token class-name">BufferedReader</span> buf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span>inputStreamReader<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> buf<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        buf<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        client<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;客户端接收到服务器消息：&quot;</span> <span class="token operator">+</span> str <span class="token operator">+</span> <span class="token string">&quot;，退出&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="datagramsocket-和-datagrampacket" tabindex="-1"><a class="header-anchor" href="#datagramsocket-和-datagrampacket" aria-hidden="true">#</a> DatagramSocket 和 DatagramPacket</h2><p>Java 通过 <code>DatagramSocket</code> 和 <code>DatagramPacket</code> 实现对 UDP 协议的支持。</p><ul><li><code>DatagramPacket</code>：数据包类</li><li><code>DatagramSocket</code>：通信类</li></ul><p>UDP 服务端示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UDPServer</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span> <span class="token comment">// 所有异常抛出</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">&quot;hello World!!!&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">DatagramSocket</span> ds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramSocket</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 服务端在3000端口上等待服务器发送信息</span>
        <span class="token class-name">DatagramPacket</span> dp <span class="token operator">=</span>
            <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">9000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 所有的信息使用buf保存</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;发送信息。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ds<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>dp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 发送信息出去</span>
        ds<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UDP 客户端示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UDPClient</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span> <span class="token comment">// 所有异常抛出</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 开辟空间，以接收数据</span>
        <span class="token class-name">DatagramSocket</span> ds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramSocket</span><span class="token punctuation">(</span><span class="token number">9000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 客户端在9000端口上等待服务器发送信息</span>
        <span class="token class-name">DatagramPacket</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 所有的信息使用buf保存</span>
        ds<span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span>dp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 接收数据</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>dp<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dp<span class="token punctuation">.</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;from &quot;</span> <span class="token operator">+</span> dp<span class="token punctuation">.</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getHostAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;：&quot;</span>
            <span class="token operator">+</span> dp<span class="token punctuation">.</span><span class="token function">getPort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出内容</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="inetaddress" tabindex="-1"><a class="header-anchor" href="#inetaddress" aria-hidden="true">#</a> InetAddress</h2><p><code>InetAddress</code> 类表示互联网协议(IP)地址。</p><p>没有公有的构造函数，只能通过静态方法来创建实例。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span><span class="token class-name">String</span> host<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getByAddress</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> address<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> URL</h2><p>可以直接从 URL 中读取字节流数据。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

    <span class="token class-name">URL</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&quot;http://www.baidu.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/* 字节流 */</span>
    <span class="token class-name">InputStream</span> is <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">openStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/* 字符流 */</span>
    <span class="token class-name">InputStreamReader</span> isr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>is<span class="token punctuation">,</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/* 提供缓存功能 */</span>
    <span class="token class-name">BufferedReader</span> br <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span>isr<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span> line<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>line <span class="token operator">=</span> br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    br<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,45),v={href:"https://www.runoob.com/java/java-networking.html",target:"_blank",rel:"noopener noreferrer"};function b(h,S){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("blockquote",null,[d,n("p",null,[n("a",r,[s("java.net"),t(a)]),s(" 包中提供了两种常见的网络协议的支持：")]),k]),m,n("ul",null,[n("li",null,[n("a",v,[s("Java 网络编程"),t(a)])])])])}const w=p(i,[["render",b],["__file","04.Java网络编程.html.vue"]]);export{w as default};
