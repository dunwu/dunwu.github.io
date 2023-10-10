import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c as d,a as n,b as e,d as i,e as s}from"./app-29bcd084.js";const p={},o=s('<h1 id="zipkin-快速入门" tabindex="-1"><a class="header-anchor" href="#zipkin-快速入门" aria-hidden="true">#</a> Zipkin 快速入门</h1><p><strong>Zipkin 是一个基于 Java 开发的、开源的、分布式实时数据跟踪系统（Distributed Tracking System）</strong>。它采集有助于解决服务架构中延迟问题的实时数据。</p><p>Zipkin 主要功能是聚集来自各个异构系统的实时监控数据。分布式跟踪系统还有其他比较成熟的实现，例如：Naver 的 Pinpoint、Apache 的 HTrace、阿里的鹰眼 Tracing、京东的 Hydra、新浪的 Watchman，美团点评的 CAT，skywalking 等。</p><p>Zipkin 基于 Google Dapper 的论文设计而来，由 Twitter 公司开发贡献。</p><h2 id="一、zipkin-简介" tabindex="-1"><a class="header-anchor" href="#一、zipkin-简介" aria-hidden="true">#</a> 一、Zipkin 简介</h2><h3 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h3><p>如果日志文件中有跟踪 ID，则可以直接跳至该跟踪 ID。 否则，您可以基于属性进行查询，例如服务，操作名称，标签和持续时间。 将为您总结一些有趣的数据，例如在服务中花费的时间百分比以及操作是否失败。</p><p>Zipkin UI 还提供了一个依赖关系图，该关系图显示了每个应用程序中跟踪了多少个请求。这对于识别聚合行为（包括错误路径或对不赞成使用的服务的调用）很有帮助。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200211161706.png" alt="Zipkin UI" tabindex="0" loading="lazy"><figcaption>Zipkin UI</figcaption></figure><h3 id="多平台" tabindex="-1"><a class="header-anchor" href="#多平台" aria-hidden="true">#</a> 多平台</h3><p>Zipkin 官方支持 C#、Go、Java、JavaScript、Ruby、Scala、PHP 语言。</p>',11),c={href:"https://zipkin.io/pages/tracers_instrumentation.html",target:"_blank",rel:"noopener noreferrer"},u=s('<h3 id="数据" tabindex="-1"><a class="header-anchor" href="#数据" aria-hidden="true">#</a> 数据</h3><p>Zipkin 服务器捆绑了用于采集和存储数据的扩展。</p><p>默认情况下，数据可以通过 <code>Http</code>，<code>Kafka</code> 、<code>RabbitMQ</code> 或 RPC 传输。</p><p>并存储在内存中或 <code>MySQL</code>、<code>Cassandra</code> 或 <code>Elasticsearch</code> 中。</p>',4),v={href:"https://zipkin.io/zipkin-api/#/default/post_spans",target:"_blank",rel:"noopener noreferrer"},h=s(`<figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200211162055.png" alt="Zipkin Swagger API" tabindex="0" loading="lazy"><figcaption>Zipkin Swagger API</figcaption></figure><h2 id="二、zipkin-安装" tabindex="-1"><a class="header-anchor" href="#二、zipkin-安装" aria-hidden="true">#</a> 二、Zipkin 安装</h2><h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h3><p>Docker 启动方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">9411</span>:9411 openzipkin/zipkin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><blockquote><p>注意：必须运行在 JDK8+ 环境</p></blockquote><p>Java 启动方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://zipkin.io/quickstart.sh <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span>
<span class="token function">java</span> <span class="token parameter variable">-jar</span> zipkin.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译方式" tabindex="-1"><a class="header-anchor" href="#编译方式" aria-hidden="true">#</a> 编译方式</h3><p>适用于需要订制化的场景。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># get the latest source</span>
<span class="token function">git</span> clone https://github.com/openzipkin/zipkin
<span class="token builtin class-name">cd</span> zipkin
<span class="token comment"># Build the server and also make its dependencies</span>
./mvnw <span class="token parameter variable">-DskipTests</span> --also-make <span class="token parameter variable">-pl</span> zipkin-server clean <span class="token function">install</span>
<span class="token comment"># Run the server</span>
<span class="token function">java</span> <span class="token parameter variable">-jar</span> ./zipkin-server/target/zipkin-server-*exec.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、zipkin-架构" tabindex="-1"><a class="header-anchor" href="#三、zipkin-架构" aria-hidden="true">#</a> 三、Zipkin 架构</h2><p>ZipKin 可以分为两部分，</p><ul><li>一部分是 Zipkin server，用来作为数据的采集存储、数据分析与展示；</li><li>另一部分是 Zipkin client 是 Zipkin 基于不同的语言及框架封装的一些列客户端工具，这些工具完成了追踪数据的生成与上报功能。</li></ul><p>架构如下：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200211155836.png" alt="Zipkin 架构" tabindex="0" loading="lazy"><figcaption>Zipkin 架构</figcaption></figure><h3 id="zipkin-server" tabindex="-1"><a class="header-anchor" href="#zipkin-server" aria-hidden="true">#</a> Zipkin Server</h3><p>Zipkin Server 主要包括四个模块：</p><ul><li><strong>Collector</strong> - 负责采集客户端传输的数据。</li><li><strong>Storage</strong> - 负责存储采集的数据。当前支持 Memory，MySQL，Cassandra，ElasticSearch 等，默认存储在内存中。</li><li><strong>API（Query）</strong> - 负责查询 Storage 中存储的数据。提供简单的 JSON API 获取数据，主要提供给 web UI 使用。</li><li><strong>UI</strong> - 提供简单的 web 界面。</li></ul><p>Instrumented Client 和 Instrumented Server，是指分布式架构中使用了 Trace 工具的两个应用，Client 会调用 Server 提供的服务，两者都会向 Zipkin 上报 Trace 相关信息。在 Client 和 Server 通过 Transport 上报 Trace 信息后，由 Zipkin 的 Collector 模块接收，并由 Storage 模块将数据存储在对应的存储介质中，然后 Zipkin 提供 API 供 UI 界面查询 Trace 跟踪信息。Non-Instrumented Server，指的是未使用 Trace 工具的 Server，显然它不会上报 Trace 信息。</p><h3 id="zipkin-client" tabindex="-1"><a class="header-anchor" href="#zipkin-client" aria-hidden="true">#</a> Zipkin Client</h3><ul><li><strong>Tracer</strong> - <code>Tracer</code> 存在于你的应用中，它负责采集关于已发生操作的实时元数据。它们通常会检测库，因此对于用户是透明的。例如，已检测的 Web 服务器记录它何时接收到请求，以及何时发送响应。收集的跟踪数据称为跨度（Span）。</li><li><strong>Instrumentation</strong> - Instrumentation 保证了生产环境的安全性和很少的开销。因此，它们仅在内部传播 ID，以告知接收方正在进行追踪。完成的 Span 将通过外部通信告知 Zipkin，类似于应用程序异步报告指标的方式。例如，当跟踪某个操作并且需要发出 http 请求时，会添加一些 header 来传播 ID。header 不用于发送详细信息，例如操作名称。</li><li><strong>Reporter</strong> - 能够将数据发送到 Zipkin 的检测应用程序中的组件，被称为 Reporter。Reporter 有多种传输方式，可以将跟踪数据发送到 Zipkin 采集器，后者将跟踪数据持久化保存到存储中。稍后，API 会查询存储以向 UI 提供渲染数据。</li></ul><p>以下是 Zipkin 的一个示例工作流：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>┌─────────────┐ ┌───────────────────────┐  ┌─────────────┐  ┌──────────────────┐
│ User Code   │ │ Trace Instrumentation │  │ Http Client │  │ Zipkin Collector │
└─────────────┘ └───────────────────────┘  └─────────────┘  └──────────────────┘
       │                 │                         │                 │
           ┌─────────┐
       │ ──┤GET /foo ├─▶ │ ────┐                   │                 │
           └─────────┘         │ record tags
       │                 │ ◀───┘                   │                 │
                           ────┐
       │                 │     │ <span class="token function">add</span> trace headers │                 │
                           ◀───┘
       │                 │ ────┐                   │                 │
                               │ record timestamp
       │                 │ ◀───┘                   │                 │
                             ┌─────────────────┐
       │                 │ ──┤GET /foo         ├─▶ │                 │
                             │X-B3-TraceId: aa │     ────┐
       │                 │   │X-B3-SpanId: 6b  │   │     │           │
                             └─────────────────┘         │ invoke
       │                 │                         │     │ request   │
                                                         │
       │                 │                         │     │           │
                                 ┌────────┐          ◀───┘
       │                 │ ◀─────┤200 OK  ├─────── │                 │
                           ────┐ └────────┘
       │                 │     │ record duration   │                 │
            ┌────────┐     ◀───┘
       │ ◀──┤200 OK  ├── │                         │                 │
            └────────┘       ┌────────────────────────────────┐
       │                 │ ──┤ asynchronously report span     ├────▶ │
                             │                                │
                             │<span class="token punctuation">{</span>                               │
                             │  <span class="token string">&quot;traceId&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;aa&quot;</span>,              │
                             │  <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;6b&quot;</span>,                   │
                             │  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;get&quot;</span>,                │
                             │  <span class="token string">&quot;timestamp&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1483945573944000</span>,│
                             │  <span class="token string">&quot;duration&quot;</span><span class="token builtin class-name">:</span> <span class="token number">386000</span>,           │
                             │  <span class="token string">&quot;annotations&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>              │
                             │--snip--                        │
                             └────────────────────────────────┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Instrumented client 和 server 是分别使用了 ZipKin Client 的服务，Zipkin Client 会根据配置将追踪数据发送到 Zipkin Server 中进行数据存储、分析和展示。</p><h2 id="四、zipkin-客户端" tabindex="-1"><a class="header-anchor" href="#四、zipkin-客户端" aria-hidden="true">#</a> 四、Zipkin 客户端</h2>`,27),k={href:"https://github.com/openzipkin/brave",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"一般不会手动编写 Trace 相关的代码，Brave 提供可一些开箱即用的库，帮助我们追踪一些特定的请求。比如：dubbo、grpc、servlet、mysql、httpClient、kafka、springMVC 等。",-1),b=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),e(" 参考资料")],-1),g={href:"https://zipkin.io/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/openzipkin/zipkin",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/openzipkin/brave",target:"_blank",rel:"noopener noreferrer"};function Z(z,I){const a=t("ExternalLinkIcon");return l(),d("div",null,[o,n("p",null,[e("除此以外，社区还贡献了多种其他语言的支持，详情可以参考官方文档："),n("a",c,[e("Tracers and Instrumentation"),i(a)])]),u,n("p",null,[e("数据以 json 形式存储，可以参考："),n("a",v,[e("Zipkin 官方的 Swagger API"),i(a)])]),h,n("p",null,[n("a",k,[e("Brave"),i(a)]),e(" 是 Java 版的 zipkin 客户端。")]),m,b,n("ul",null,[n("li",null,[n("a",g,[e("Zipkin 官网"),i(a)])]),n("li",null,[n("a",f,[e("Zipkin Github"),i(a)])]),n("li",null,[n("a",_,[e("brave"),i(a)])])])])}const q=r(p,[["render",Z],["__file","03.Zipkin.html.vue"]]);export{q as default};
