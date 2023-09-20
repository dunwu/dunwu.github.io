import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as p,c as i,a as n,b as s,d as e,e as t}from"./app-9f0b185d.js";const l={},u=t('<h1 id="activemq-快速入门" tabindex="-1"><a class="header-anchor" href="#activemq-快速入门" aria-hidden="true">#</a> ActiveMQ 快速入门</h1><h2 id="jms-基本概念" tabindex="-1"><a class="header-anchor" href="#jms-基本概念" aria-hidden="true">#</a> JMS 基本概念</h2><p><code>JMS</code> 即 <strong>Java 消息服务（Java Message Service）API</strong>，是一个 Java 平台中关于面向消息中间件的 API。它用于在两个应用程序之间，或分布式系统中发送消息，进行异步通信。Java 消息服务是一个与具体平台无关的 API，绝大多数 MOM 提供商都对 JMS 提供支持。</p><h3 id="消息模型" tabindex="-1"><a class="header-anchor" href="#消息模型" aria-hidden="true">#</a> 消息模型</h3><p>JMS 有两种消息模型：</p><ul><li>Point-to-Point(P2P)</li><li>Publish/Subscribe(Pub/Sub)</li></ul><h4 id="p2p-的特点" tabindex="-1"><a class="header-anchor" href="#p2p-的特点" aria-hidden="true">#</a> P2P 的特点</h4><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/javalib/jms/jms-pointToPoint.gif" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在点对点的消息系统中，消息分发给一个单独的使用者。点对点消息往往与队列 <code>javax.jms.Queue</code> 相关联。</p><p>每个消息只有一个消费者（Consumer）(即一旦被消费，消息就不再在消息队列中)。</p><p>发送者和接收者之间在时间上没有依赖性，也就是说当发送者发送了消息之后，不管接收者有没有正在运行，它不会影响到消息被发送到队列。</p><p>接收者在成功接收消息之后需向队列应答成功。</p><p>如果你希望发送的每个消息都应该被成功处理的话，那么你需要 P2P 模式。</p><h4 id="pub-sub-的特点" tabindex="-1"><a class="header-anchor" href="#pub-sub-的特点" aria-hidden="true">#</a> Pub/Sub 的特点</h4><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/javalib/jms/jms-publishSubscribe.gif" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>发布/订阅消息系统支持一个事件驱动模型，消息生产者和消费者都参与消息的传递。生产者发布事件，而使用者订阅感兴趣的事件，并使用事件。该类型消息一般与特定的主题 <code>javax.jms.Topic</code> 关联。</p><p>每个消息可以有多个消费者。</p><p>发布者和订阅者之间有时间上的依赖性。针对某个主题（Topic）的订阅者，它必须创建一个订阅者之后，才能消费发布者的消息，而且为了消费消息，订阅者必须保持运行的状态。</p><p>为了缓和这样严格的时间相关性，JMS 允许订阅者创建一个可持久化的订阅。这样，即使订阅者没有被激活（运行），它也能接收到发布者的消息。</p><p>如果你希望发送的消息可以不被做任何处理、或者被一个消息者处理、或者可以被多个消费者处理的话，那么可以采用 Pub/Sub 模型。</p><h3 id="jms-编程模型" tabindex="-1"><a class="header-anchor" href="#jms-编程模型" aria-hidden="true">#</a> JMS 编程模型</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/javalib/jms/jms-publishSubscribe.gif" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="connectionfactory" tabindex="-1"><a class="header-anchor" href="#connectionfactory" aria-hidden="true">#</a> ConnectionFactory</h4><p>创建 <code>Connection</code> 对象的工厂，针对两种不同的 jms 消息模型，分别有 <code>QueueConnectionFactory</code> 和<code>TopicConnectionFactory</code> 两种。可以通过 JNDI 来查找 <code>ConnectionFactory</code> 对象。</p><h4 id="connection" tabindex="-1"><a class="header-anchor" href="#connection" aria-hidden="true">#</a> Connection</h4><p><code>Connection</code> 表示在客户端和 JMS 系统之间建立的链接（对 TCP/IP socket 的包装）。<code>Connection</code> 可以产生一个或多个<code>Session</code>。跟 <code>ConnectionFactory</code> 一样，<code>Connection</code> 也有两种类型：<code>QueueConnection</code> 和 <code>TopicConnection</code>。</p><h4 id="destination" tabindex="-1"><a class="header-anchor" href="#destination" aria-hidden="true">#</a> Destination</h4><p><code>Destination</code> 是一个包装了消息目标标识符的被管对象。消息目标是指消息发布和接收的地点，或者是队列 <code>Queue</code> ，或者是主题 <code>Topic</code> 。JMS 管理员创建这些对象，然后用户通过 JNDI 发现它们。和连接工厂一样，管理员可以创建两种类型的目标，点对点模型的 <code>Queue</code>，以及发布者/订阅者模型的 <code>Topic</code>。</p><h4 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> Session</h4><p><code>Session</code> 表示一个单线程的上下文，用于发送和接收消息。由于会话是单线程的，所以消息是连续的，就是说消息是按照发送的顺序一个一个接收的。会话的好处是它支持事务。如果用户选择了事务支持，会话上下文将保存一组消息，直到事务被提交才发送这些消息。在提交事务之前，用户可以使用回滚操作取消这些消息。一个会话允许用户创建消息，生产者来发送消息，消费者来接收消息。同样，<code>Session</code> 也分 <code>QueueSession</code> 和 <code>TopicSession</code>。</p><h4 id="messageconsumer" tabindex="-1"><a class="header-anchor" href="#messageconsumer" aria-hidden="true">#</a> MessageConsumer</h4><p><code>MessageConsumer</code> 由 <code>Session</code> 创建，并用于将消息发送到 <code>Destination</code>。消费者可以同步地（阻塞模式），或（非阻塞）接收 <code>Queue</code> 和 <code>Topic</code> 类型的消息。同样，消息生产者分两种类型：<code>QueueSender</code> 和<code>TopicPublisher</code>。</p><h4 id="messageproducer" tabindex="-1"><a class="header-anchor" href="#messageproducer" aria-hidden="true">#</a> MessageProducer</h4><p><code>MessageProducer</code> 由 <code>Session</code> 创建，用于接收被发送到 <code>Destination</code> 的消息。<code>MessageProducer</code> 有两种类型：<code>QueueReceiver</code> 和 <code>TopicSubscriber</code>。可分别通过 <code>session</code> 的 <code>createReceiver(Queue)</code> 或 <code>createSubscriber(Topic)</code> 来创建。当然，也可以 <code>session</code> 的 <code>creatDurableSubscriber</code> 方法来创建持久化的订阅者。</p><h4 id="message" tabindex="-1"><a class="header-anchor" href="#message" aria-hidden="true">#</a> Message</h4><p>是在消费者和生产者之间传送的对象，也就是说从一个应用程序传送到另一个应用程序。一个消息有三个主要部分：</p><ul><li>消息头（必须）：包含用于识别和为消息寻找路由的操作设置。</li><li>一组消息属性（可选）：包含额外的属性，支持其他提供者和用户的兼容。可以创建定制的字段和过滤器（消息选择器）。</li><li>一个消息体（可选）：允许用户创建五种类型的消息（文本消息，映射消息，字节消息，流消息和对象消息）。</li></ul><p>消息接口非常灵活，并提供了许多方式来定制消息的内容。</p><table><thead><tr><th>Common</th><th>Point-to-Point</th><th>Publish-Subscribe</th></tr></thead><tbody><tr><td>ConnectionFactory</td><td>QueueConnectionFactory</td><td>TopicConnectionFactory</td></tr><tr><td>Connection</td><td>QueueConnection</td><td>TopicConnection</td></tr><tr><td>Destination</td><td>Queue</td><td>Topic</td></tr><tr><td>Session</td><td>QueueSession</td><td>TopicSession</td></tr><tr><td>MessageProducer</td><td>QueueSender</td><td>TopicPublisher</td></tr><tr><td>MessageSender</td><td>QueueReceiver, QueueBrowser</td><td>TopicSubscriber</td></tr></tbody></table><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p><strong>安装条件</strong></p><p>JDK1.7 及以上版本</p><p>本地配置了 <strong>JAVA_HOME</strong> 环境变量。</p><p><strong>下载</strong></p><p>支持 Windows/Unix/Linux/Cygwin</p>',45),d={href:"http://activemq.apache.org/download.html",target:"_blank",rel:"noopener noreferrer"},r=t(`<p><strong>Windows 下运行</strong></p><p>（1）解压压缩包到本地；</p><p>（2）打开控制台，进入安装目录的 <code>bin</code> 目录下；</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd [activemq_install_dir]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（3）执行 <code>activemq start</code> 来启动 ActiveMQ</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bin\\activemq start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>测试安装是否成功</strong></p><p>（1）ActiveMQ 默认监听端口为 61616</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>netstat -an|find “61616”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),k={href:"http://127.0.0.1:8161/admin/",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>（3）输入用户名、密码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Login: admin
Passwort: admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）点击导航栏的 Queues 菜单</p><p>（5）添加一个队列（queue）</p><h2 id="项目中的应用" tabindex="-1"><a class="header-anchor" href="#项目中的应用" aria-hidden="true">#</a> 项目中的应用</h2><p><strong>引入依赖</strong></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.activemq<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>activemq-all<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.14.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Sender.java</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Sender</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">SEND_NUMBER</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ConnectionFactory ：连接工厂，JMS 用它创建连接</span>
        <span class="token class-name">ConnectionFactory</span> connectionFactory<span class="token punctuation">;</span>
        <span class="token comment">// Connection ：JMS 客户端到JMS Provider 的连接</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token comment">// Session： 一个发送或接收消息的线程</span>
        <span class="token class-name">Session</span> session<span class="token punctuation">;</span>
        <span class="token comment">// Destination ：消息的目的地;消息发送给谁.</span>
        <span class="token class-name">Destination</span> destination<span class="token punctuation">;</span>
        <span class="token comment">// MessageProducer：消息发送者</span>
        <span class="token class-name">MessageProducer</span> producer<span class="token punctuation">;</span>
        <span class="token comment">// TextMessage message;</span>
        <span class="token comment">// 构造ConnectionFactory实例对象，此处采用ActiveMq的实现jar</span>
        connectionFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveMQConnectionFactory</span><span class="token punctuation">(</span>
                <span class="token class-name">ActiveMQConnection</span><span class="token punctuation">.</span><span class="token constant">DEFAULT_USER</span><span class="token punctuation">,</span>
                <span class="token class-name">ActiveMQConnection</span><span class="token punctuation">.</span><span class="token constant">DEFAULT_PASSWORD</span><span class="token punctuation">,</span>
                <span class="token string">&quot;tcp://localhost:61616&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 构造从工厂得到连接对象</span>
            connection <span class="token operator">=</span> connectionFactory<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 启动</span>
            connection<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 获取操作连接</span>
            session <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createSession</span><span class="token punctuation">(</span><span class="token class-name">Boolean</span><span class="token punctuation">.</span><span class="token constant">TRUE</span><span class="token punctuation">,</span>
                    <span class="token class-name">Session</span><span class="token punctuation">.</span><span class="token constant">AUTO_ACKNOWLEDGE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 获取session注意参数值xingbo.xu-queue是一个服务器的queue，须在在ActiveMq的console配置</span>
            destination <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createQueue</span><span class="token punctuation">(</span><span class="token string">&quot;FirstQueue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 得到消息生成者【发送者】</span>
            producer <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createProducer</span><span class="token punctuation">(</span>destination<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 设置不持久化，此处学习，实际根据项目决定</span>
            producer<span class="token punctuation">.</span><span class="token function">setDeliveryMode</span><span class="token punctuation">(</span><span class="token class-name">DeliveryMode</span><span class="token punctuation">.</span><span class="token constant">NON_PERSISTENT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 构造消息，此处写死，项目就是参数，或者方法获取</span>
            <span class="token function">sendMessage</span><span class="token punctuation">(</span>session<span class="token punctuation">,</span> producer<span class="token punctuation">)</span><span class="token punctuation">;</span>
            session<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> connection<span class="token punctuation">)</span>
                    connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> ignore<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token class-name">Session</span> session<span class="token punctuation">,</span> <span class="token class-name">MessageProducer</span> producer<span class="token punctuation">)</span>
            <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token constant">SEND_NUMBER</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">TextMessage</span> message <span class="token operator">=</span> session
                    <span class="token punctuation">.</span><span class="token function">createTextMessage</span><span class="token punctuation">(</span><span class="token string">&quot;ActiveMq 发送的消息&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 发送消息到目的地方</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;发送消息：&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;ActiveMq 发送的消息&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            producer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Receiver.java</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Receiver</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ConnectionFactory ：连接工厂，JMS 用它创建连接</span>
        <span class="token class-name">ConnectionFactory</span> connectionFactory<span class="token punctuation">;</span>
        <span class="token comment">// Connection ：JMS 客户端到JMS Provider 的连接</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token comment">// Session： 一个发送或接收消息的线程</span>
        <span class="token class-name">Session</span> session<span class="token punctuation">;</span>
        <span class="token comment">// Destination ：消息的目的地;消息发送给谁.</span>
        <span class="token class-name">Destination</span> destination<span class="token punctuation">;</span>
        <span class="token comment">// 消费者，消息接收者</span>
        <span class="token class-name">MessageConsumer</span> consumer<span class="token punctuation">;</span>
        connectionFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveMQConnectionFactory</span><span class="token punctuation">(</span>
                <span class="token class-name">ActiveMQConnection</span><span class="token punctuation">.</span><span class="token constant">DEFAULT_USER</span><span class="token punctuation">,</span>
                <span class="token class-name">ActiveMQConnection</span><span class="token punctuation">.</span><span class="token constant">DEFAULT_PASSWORD</span><span class="token punctuation">,</span>
                <span class="token string">&quot;tcp://localhost:61616&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 构造从工厂得到连接对象</span>
            connection <span class="token operator">=</span> connectionFactory<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 启动</span>
            connection<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 获取操作连接</span>
            session <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createSession</span><span class="token punctuation">(</span><span class="token class-name">Boolean</span><span class="token punctuation">.</span><span class="token constant">FALSE</span><span class="token punctuation">,</span>
                    <span class="token class-name">Session</span><span class="token punctuation">.</span><span class="token constant">AUTO_ACKNOWLEDGE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 获取session注意参数值xingbo.xu-queue是一个服务器的queue，须在在ActiveMq的console配置</span>
            destination <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createQueue</span><span class="token punctuation">(</span><span class="token string">&quot;FirstQueue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            consumer <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createConsumer</span><span class="token punctuation">(</span>destination<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//设置接收者接收消息的时间，为了便于测试，这里谁定为100s</span>
                <span class="token class-name">TextMessage</span> message <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">TextMessage</span><span class="token punctuation">)</span> consumer<span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span><span class="token number">100000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;收到消息&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> connection<span class="token punctuation">)</span>
                    connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> ignore<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行</strong></p><p>先运行 Receiver.java 进行消息监听，再运行 Send.java 发送消息。</p><p><strong>输出</strong></p><p>Send 的输出内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>发送消息：Activemq 发送消息0
发送消息：Activemq 发送消息1
发送消息：Activemq 发送消息2
发送消息：Activemq 发送消息3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Receiver 的输出内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>收到消息ActiveMQ 发送消息0
收到消息ActiveMQ 发送消息1
收到消息ActiveMQ 发送消息2
收到消息ActiveMQ 发送消息3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资源" tabindex="-1"><a class="header-anchor" href="#资源" aria-hidden="true">#</a> 资源</h2>`,19),m={href:"http://activemq.apache.org/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://docs.oracle.com/cd/E19575-01/819-3669/6n5sg7cgq/index.html",target:"_blank",rel:"noopener noreferrer"};function g(h,f){const a=c("ExternalLinkIcon");return p(),i("div",null,[u,n("p",null,[n("a",d,[s("ActiveMQ 官方下载地址"),e(a)])]),r,n("p",null,[s("（2）访问 "),n("a",k,[s("http://127.0.0.1:8161/admin/"),e(a)])]),v,n("ul",null,[n("li",null,[n("a",m,[s("ActiveMQ 官网"),e(a)])]),n("li",null,[n("a",b,[s("oracle 官方的 jms 介绍"),e(a)])])])])}const S=o(l,[["render",g],["__file","01.ActiveMQ.html.vue"]]);export{S as default};
