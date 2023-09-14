import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as d,c as s,a as e,b as a,d as r,e as t}from"./app-e12ad880.js";const o={},h=t('<h1 id="微服务基本原理" tabindex="-1"><a class="header-anchor" href="#微服务基本原理" aria-hidden="true">#</a> 微服务基本原理</h1><h2 id="微服务技术架构" tabindex="-1"><a class="header-anchor" href="#微服务技术架构" aria-hidden="true">#</a> 微服务技术架构</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200716195006.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>第一层：接入层</strong></p><p>外部设备访问的统一接入层。</p><p><strong>第二层：聚合服务层</strong></p><p>对下层的基础服务做一些聚合，剪裁的工作，适配上层不同设备的数据输出。</p><p><strong>第三层：基础服务层</strong></p><p>比较细粒度的微服务层，提供基础的核心服务，公共服务。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200716195117.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="服务通信" tabindex="-1"><a class="header-anchor" href="#服务通信" aria-hidden="true">#</a> 服务通信</h2><p>通过注册中心，服务消费者和服务提供者就可以感知彼此，但是，要实现交互还必须解决通信问题：</p>',12),u=e("li",null,[e("strong",null,"通信协议"),a("。即服务提供者和服务消费者之间以什么样的 "),e("strong",null,"协议"),a(" 进行网络通信，说白了，是要解决客户端和服务端如何建立连接、管理连接以及服务端如何处理请求的问题。是采用四层 TCP、UDP 协议，还是采用七层 HTTP 协议，还是采用其他协议？例如：Dubbo 基于 TCP 通信；而 Spring Cloud 基于 HTTP REST 通信。TCP 通信方式，传输效率更高；但是 HTTP 方式天然可以提供对外服务。")],-1),p=e("li",null,[e("strong",null,"传输方式"),a("。即服务提供者和服务消费者之间的数据传输采用哪种方式。是同步还是异步？是在单连接上传输，还是多路复用。")],-1),c=e("strong",null,"序列化和反序列化",-1),g={href:"https://github.com/apache/thrift",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/protocolbuffers/protobuf",target:"_blank",rel:"noopener noreferrer"},m={href:"http://hessian.caucho.com/doc/hessian-overview.xtp",target:"_blank",rel:"noopener noreferrer"},f=e("h3",{id:"序列化方式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#序列化方式","aria-hidden":"true"},"#"),a(" 序列化方式")],-1),v=e("p",null,"序列化方式的选型，一般基于以下考虑：",-1),x=e("ul",null,[e("li",null,"支持数据结构类型的丰富度"),e("li",null,"跨语言支持"),e("li",null,"性能")],-1),P={href:"https://dunwu.github.io/blog/pages/2b2f0f/",target:"_blank",rel:"noopener noreferrer"},_=t('<h3 id="通信协议" tabindex="-1"><a class="header-anchor" href="#通信协议" aria-hidden="true">#</a> 通信协议</h3><p>微服务框架对比：</p><table><thead><tr><th></th><th>RPC</th><th>REST</th></tr></thead><tbody><tr><td>耦合性</td><td>强耦合</td><td>松散耦合</td></tr><tr><td>协议</td><td>Tcp</td><td>Http、Http2</td></tr><tr><td>序列化</td><td>二进制（Thrift、Protobuf、Hessian、Avro、JDK 等）</td><td>Xml、Json</td></tr><tr><td>性能</td><td>高</td><td>低</td></tr><tr><td>客户端</td><td>对编程语言有限制</td><td>跨语言支持更好（支持 Http 即可）</td></tr><tr><td>代表技术</td><td>Dubbo、Motan、Tars、gRpc、Thrift</td><td>Spring Cloud</td></tr></tbody></table><h2 id="服务监控" tabindex="-1"><a class="header-anchor" href="#服务监控" aria-hidden="true">#</a> 服务监控</h2><p>当服务消费者与服务提供者之间建立了通信，作为管理者需要通过监控手段来观察服务是否正常，调用是否成功。服务监控是很复杂的，在微服务架构下，一次用户调用会因为服务化拆分后，变成多个不同服务之间的相互调用，这也就需要对拆分后的每个服务都监控起来。</p><h3 id="监控对象" tabindex="-1"><a class="header-anchor" href="#监控对象" aria-hidden="true">#</a> 监控对象</h3><p>服务监控一定是通过观察数据来量化分析，所以首先要明确需要监控什么。</p><p>一般来说，服务监控数据有以下分类：</p><ul><li><strong>业务监控</strong>：核心指标、登录、登出、下单、支付等。</li><li><strong>应用监控</strong>：访问接口、访问服务、SQL、内存使用率、响应时间、TPS、QPS 等。</li><li><strong>系统监控</strong>：CPU、内存、网络、磁盘等。</li><li><strong>基础监控</strong>：网络流量、丢包数、错包数、连接数等。</li><li><strong>客户端监控</strong>：性能、返回码、地域、运营商、版本、系统等。</li></ul><h3 id="系统监控原理" tabindex="-1"><a class="header-anchor" href="#系统监控原理" aria-hidden="true">#</a> 系统监控原理</h3><p>一旦明确了要监控的对象，接下就是考虑如何监控。</p><p><strong>监控系统主要包括四个环节：数据采集、数据传输、数据处理和数据展示</strong></p><h4 id="数据采集" tabindex="-1"><a class="header-anchor" href="#数据采集" aria-hidden="true">#</a> 数据采集</h4><p>通常有两种数据收集方式：</p><ul><li><strong>服务主动上报</strong>：这种处理方式通过在业务代码或者服务框架里加入数据收集代码逻辑，在每一次服务调用完成后，主动上报服务的调用信息。这种方式在链路跟踪中较为常见，主流的技术方案有：Zipkin。</li><li><strong>代理收集</strong>：这种处理方式通过服务调用后把调用的详细信息记录到本地日志文件中，然后再通过代理去解析本地日志文件，然后再上报服务的调用信息。主流的技术方案有：ELK、Flume。</li></ul><h4 id="数据传输" tabindex="-1"><a class="header-anchor" href="#数据传输" aria-hidden="true">#</a> 数据传输</h4><p>数据传输最常用的方式有两种：</p><ul><li><strong>UDP 传输</strong>：这种处理方式是数据处理单元提供服务器的请求地址，数据采集后通过 UDP 协议与服务器建立连接，然后把数据发送过去。</li><li><strong>Kafka 传输</strong>：这种处理方式是数据采集后发送到指定的 Topic，然后数据处理单元再订阅对应的 Topic，就可以从 Kafka 消息队列中读取到对应的数据。由于 Kafka 有非常高的吞吐能力，所以很适合作为大数据量的缓冲池。</li></ul><h4 id="数据处理" tabindex="-1"><a class="header-anchor" href="#数据处理" aria-hidden="true">#</a> 数据处理</h4><p>数据处理是对收集来的原始数据进行聚合并存储。数据聚合通常有两个维度：</p><ul><li><strong>接口维度聚合</strong>：这个维度是把实时收到的数据按照接口名维度实时聚合在一起，这样就可以得到每个接口的每秒请求量、平均耗时、成功率等信息。</li><li><strong>机器维度聚合</strong>：这个维度是把实时收到的数据按照调用的节点维度聚合在一起，这样就可以从单机维度去查看每个接口的实时请求量、平均耗时等信息。</li></ul><p>聚合后的数据需要持久化到数据库中存储，所选用的数据库一般分为两种：</p><ul><li><strong>全文检索数据库</strong>：比如 Elasticsearch，以倒排索引的数据结构存储，需要查询的时候，根据索引来查询。</li><li><strong>时序数据库</strong>：比如 OpenTSDB，以时序序列数据的方式存储，查询的时候按照时序如 1min、5min 等维度来查询。</li></ul><h4 id="数据展示" tabindex="-1"><a class="header-anchor" href="#数据展示" aria-hidden="true">#</a> 数据展示</h4><p>数据展示是把处理后的数据以 Dashboard 的方式展示给用户。数据展示有多种方式，比如曲线图、饼状图、格子图展示等。</p><h3 id="监控技术" tabindex="-1"><a class="header-anchor" href="#监控技术" aria-hidden="true">#</a> 监控技术</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200716204432.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>ELK 的技术栈比较成熟，应用范围也比较广，除了可用作监控系统外，还可以用作日志查询和分析。</li><li>Graphite 是基于时间序列数据库存储的监控系统，并且提供了功能强大的各种聚合函数比如 sum、average、top5 等可用于监控分析，而且对外提供了 API 也可以接入其他图形化监控系统如 Grafana。</li><li>TICK 的核心在于其时间序列数据库 InfluxDB 的存储功能强大，且支持类似 SQL 语言的复杂数据处理操作。</li><li>Prometheus 的独特之处在于它采用了拉数据的方式，对业务影响较小，同时也采用了时间序列数据库存储，而且支持独有的 PromQL 查询语言，功能强大而且简洁。</li></ul><h2 id="服务治理" tabindex="-1"><a class="header-anchor" href="#服务治理" aria-hidden="true">#</a> 服务治理</h2><p>微服务治理平台就是<strong>与服务打交道的统一入口</strong>，无论是开发人员还是运维人员，都能通过这个平台对服务进行各种操作，比如开发人员可以通过这个平台对服务进行降级操作，运维人员可以通过这个平台对服务进行上下线操作，而不需要关心这个操作背后的具体实现。</p><p>微服务治理平台关键之处就在于它能够封装对微服务架构内的各个基础设施组件的调用，从而对外提供统一的服务操作 API，而且还提供了可视化的界面，以方便开发人员和运维人员操作。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200716203729.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>服务治理的常用手段有：</p><ul><li>节点管理 <ul><li>注册中心主动摘除机制</li><li>服务消费者摘除机制</li></ul></li><li>负载均衡 <ul><li>轮询</li><li>随机</li><li>最近最少连接</li><li>一致性 Hash</li></ul></li><li>服务路由 <ul><li>业务存在灰度发布的需求</li><li>多机房就近访问的需求</li></ul></li><li>服务容错 <ul><li>FailOver：失败自动切换</li><li>FailBack：失败通知</li><li>FailCache：失败缓存</li><li>FailFast：快速失败</li></ul></li></ul><h2 id="api-网关" tabindex="-1"><a class="header-anchor" href="#api-网关" aria-hidden="true">#</a> API 网关</h2><p>API 网关是一个服务器，是系统的唯一入口。从面向对象设计的角度看，它与外观模式类似。API 网关封装了系统内部架构，为每个客户端提供一个定制的 API。它可能还具有其它职责，如身份验证、监控、负载均衡、缓存、请求分片与管理、静态响应处理。<br> API 网关方式的核心要点是，所有的客户端和消费端都通过统一的网关接入微服务，在网关层处理所有的非业务功能。通常，网关也是提供 REST/HTTP 的访问 API。服务端通过 API-GW 注册和管理服务。</p><h3 id="zuul" tabindex="-1"><a class="header-anchor" href="#zuul" aria-hidden="true">#</a> Zuul</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200716201640.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在 zuul 中， 整个请求的过程是这样的，首先将请求给 zuulservlet 处理，zuulservlet 中有一个 zuulRunner 对象，该对象中初始化了 RequestContext：作为存储整个请求的一些数据，并被所有的 zuulfilter 共享。zuulRunner 中还有 FilterProcessor，FilterProcessor 作为执行所有的 zuulfilter 的管理器。FilterProcessor 从 filterloader 中获取 zuulfilter，而 zuulfilter 是被 filterFileManager 所加载，并支持 groovy 热加载，采用了轮询的方式热加载。有了这些 filter 之后，zuulservelet 首先执行的 Pre 类型的过滤器，再执行 route 类型的过滤器，最后执行的是 post 类型的过滤器，如果在执行这些过滤器有错误的时候则会执行 error 类型的过滤器。执行完这些过滤器，最终将请求的结果返回给客户端。</p><h2 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h2>',40),C={href:"https://dunwu.github.io/blog/pages/98a1c1/",target:"_blank",rel:"noopener noreferrer"},R=t(`<h2 id="服务路由" tabindex="-1"><a class="header-anchor" href="#服务路由" aria-hidden="true">#</a> 服务路由</h2><p><strong>服务路由就是服务消费者在发起服务调用时，必须根据特定的规则来选择服务节点，从而满足某些特定的需求</strong>。</p><h3 id="服务路由的应用场景" tabindex="-1"><a class="header-anchor" href="#服务路由的应用场景" aria-hidden="true">#</a> 服务路由的应用场景</h3><ul><li><strong>分组调用</strong>。一般来讲，为了保证服务的高可用性，实现异地多活的需求，一个服务往往不止部署在一个数据中心，而且出于节省成本等考虑，有些业务可能不仅在私有机房部署，还会采用公有云部署，甚至采用多家公有云部署。服务节点也会按照不同的数据中心分成不同的分组，这时对于服务消费者来说，选择哪一个分组调用，就必须有相应的路由规则。</li><li><strong>灰度发布</strong>。在服务上线发布的过程中，一般需要先在一小部分规模的服务节点上先发布服务，然后验证功能是否正常。如果正常的话就继续扩大发布范围；如果不正常的话，就需要排查问题，解决问题后继续发布。这个过程就叫作灰度发布，也叫金丝雀部署。</li><li><strong>流量切换</strong>。在业务线上运行过程中，经常会遇到一些不可抗力因素导致业务故障，比如某个机房的光缆被挖断，或者发生着火等事故导致整个机房的服务都不可用。这个时候就需要按照某个指令，能够把原来调用这个机房服务的流量切换到其他正常的机房。</li><li><strong>读写分离</strong>。对于大多数互联网业务来说都是读多写少，所以在进行服务部署的时候，可以把读写分开部署，所有写接口可以部署在一起，而读接口部署在另外的节点上。</li></ul><h3 id="服务路由的规则" tabindex="-1"><a class="header-anchor" href="#服务路由的规则" aria-hidden="true">#</a> 服务路由的规则</h3><p>服务路由主要有两种规则：一种是条件路由，一种是脚本路由。</p><h4 id="条件路由" tabindex="-1"><a class="header-anchor" href="#条件路由" aria-hidden="true">#</a> 条件路由</h4><p>条件路由是基于条件表达式的路由规则。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>condition://0.0.0.0/dubbo.test.interfaces.TestService?category=routers&amp;dynamic=true&amp;priority=2&amp;enabled=true&amp;rule=&quot; + URL.encode(&quot; host = 10.20.153.10=&gt; host = 10.20.153.11&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里面 <code>condition://</code> 代表了这是一段用条件表达式编写的路由规则，具体的规则是</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>host = 10.20.153.10 =&gt; host = 10.20.153.11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>分隔符“=&gt;”前面是服务消费者的匹配条件，后面是服务提供者的过滤条件。当服务消费者节点满足匹配条件时，就对该服务消费者执行后面的过滤规则。那么上面这段表达式表达的意义就是 IP 为“10.20.153.10”的服务消费者都调用 IP 为“10.20.153.11”的服务提供者节点。</p><p>如果服务消费者的匹配条件为空，就表示对所有的服务消费者应用，就像下面的表达式一样。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>=&gt; host ！= 10.20.153.11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果服务提供者的过滤条件为空，就表示禁止服务消费者访问，就像下面的表达式一样。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>host = 10.20.153.10=&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面我举一些 Dubbo 框架中的条件路由，来给你讲解下条件路由的具体应用场景。</p><ul><li>排除某个服务节点</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>=&gt; host != 172.22.3.91
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一旦这条路由规则被应用到线上，所有的服务消费者都不会访问 IP 为 172.22.3.91 的服务节点，这种路由规则一般应用在线上流量排除预发布机以及摘除某个故障节点的场景。</p><ul><li>白名单和黑名单功能</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>host != 10.20.153.10,10.20.153.11 =&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这条路由规则意思是除了 IP 为 10.20.153.10 和 10.20.153.11 的服务消费者可以发起服务调用以外，其他服务消费者都不可以，主要用于白名单访问逻辑，比如某个后台服务只允许特定的几台机器才可以访问，这样的话可以机器控制访问权限。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>host = 10.20.153.10,10.20.153.11 =&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同理，这条路由规则意思是除了 IP 为 10.20.153.10 和 10.20.153.11 的服务消费者不能发起服务调用以外，其他服务消费者都可以，也就是实现了黑名单功能，比如线上经常会遇到某些调用方不管是出于有意还是无意的不合理调用，影响了服务的稳定性，这时候可以通过黑名单功能暂时予以封杀。</p><ul><li>机房隔离</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>host = 172.22.3.* =&gt; host = 172.22.3.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这条路由规则意思是 IP 网段为 172.22.3.* 的服务消费者，才可以访问同网段的服务节点，这种规则一般应用于服务部署在多个 IDC，理论上同一个 IDC 内的调用性能要比跨 IDC 调用性能要好，应用这个规则是为了实现同 IDC 就近访问。</p><ul><li>读写分离</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>method = find*,list*,get*,is* =&gt; host =172.22.3.94,172.22.3.95
method != find*,list*,get*,is* =&gt; host = 172.22.3.97,172.22.3.98
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这条路由规则意思是 find*、get*、is* 等读方法调用 IP 为 172.22.3.94 和 172.22.3.95 的节点，除此以外的写方法调用 IP 为 172.22.3.97 和 172.22.3.98 的节点。对于大部分互联网业务来说，往往读请求要远远大于写请求，而写请求的重要性往往要远远高于读请求，所以需要把读写请求进行分离，以避免读请求异常影响到写请求，这时候就可以应用这种规则。</p><h4 id="脚本路由" tabindex="-1"><a class="header-anchor" href="#脚本路由" aria-hidden="true">#</a> 脚本路由</h4><p>脚本路由是基于脚本语言的路由规则，常用的脚本语言比如 JavaScript、Groovy、JRuby 等。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;script://0.0.0.0/com.foo.BarService?category=routers&amp;dynamic=false&amp;rule=&quot; + URL.encode(&quot;（function route(invokers) { ... } (invokers)）&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里面“script://”就代表了这是一段脚本语言编写的路由规则，具体规则定义在脚本语言的 route 方法实现里，比如下面这段用 JavaScript 编写的 route() 方法表达的意思是，只有 IP 为 10.20.153.10 的服务消费者可以发起服务调用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function route(invokers){
  var result = new java.util.ArrayList(invokers.size());
  for(i =0; i &lt; invokers.size(); i ++){
    if(&quot;10.20.153.10&quot;.equals(invokers.get(i).getUrl().getHost())){
       result.add(invokers.get(i));
    }
  }
  return result;
 } (invokers)）;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="服务路由的获取方式" tabindex="-1"><a class="header-anchor" href="#服务路由的获取方式" aria-hidden="true">#</a> 服务路由的获取方式</h3><p>服务路由的获取方式主要有三种：</p><ul><li>本地配置</li></ul><p>顾名思义就是路由规则存储在服务消费者本地上。服务消费者发起调用时，从本地固定位置读取路由规则，然后按照路由规则选取一个服务节点发起调用。</p><ul><li>配置中心管理</li></ul><p>这种方式下，所有的服务消费者都从配置中心获取路由规则，由配置中心来统一管理。</p><ul><li>动态下发</li></ul><p>这种方式下，一般是运维人员或者开发人员，通过服务治理平台修改路由规则，服务治理平台调用配置中心接口，把修改后的路由规则持久化到配置中心。因为服务消费者订阅了路由规则的变更，于是就会从配置中心获取最新的路由规则，按照最新的路由规则来执行。</p><h3 id="内部服务调用" tabindex="-1"><a class="header-anchor" href="#内部服务调用" aria-hidden="true">#</a> 内部服务调用</h3><p>基础服务之间的调用：结合服务注册中心以及专属的具有负载均衡功能的客户端，如 Eureka+（restTemplate+Ribbon）或者 Eureka+Feign<br> 聚合服务调用：结合服务注册中心以及专属的具有负载均衡功能的客户端，如 Eureka+（restTemplate+Ribbon）或者 Eureka+Feign</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200716202409.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="外部服务调用" tabindex="-1"><a class="header-anchor" href="#外部服务调用" aria-hidden="true">#</a> 外部服务调用</h3><p>基于 Netflix 的 zuul，做了简单了解，SpringCloud 与 zuul 集成的方式。这里先对核心流程做个简单了解，后续会有深入的应用、分析。</p><p>Spring Cloud 很好的集成了 zuul，并且可以通过注解的形式来进行请求的反向路由以及 API 网关功能<br> Spring Cloud 集成 zuul，对与 url 映射的处理方式与 SpringMVC 对 url 的请求方式类似，都是通过 RequestMapping 来进行请求绑定的。核心类：ZuulHandlerMapping<br> zuul 的核心是 ZuulServlet，一个请求核心流程：HttpServletRequest –&gt;ZuulHandlerMapping –&gt;ZuulController –&gt; ZuulServlet –&gt; ZuulFilter –&gt; HttpServletResponse</p><h2 id="配置中心" tabindex="-1"><a class="header-anchor" href="#配置中心" aria-hidden="true">#</a> 配置中心</h2><p>配置中心的思路就是把服务的各种配置，如代码里配置的各种参数、服务降级的开关甚至依赖的资源等都在一个地方统一进行管理。服务启动时，可以自动从配置中心中拉取所需的配置，并且如果有配置变更的情况，同样可以自动从配置中心拉取最新的配置信息，服务无须重新发布。</p><p>配置中心一般包含下面几个功能：</p><ul><li>配置注册功能</li><li>配置反注册功能</li><li>配置查看功能</li><li>配置变更订阅功能</li></ul><h3 id="apollo" tabindex="-1"><a class="header-anchor" href="#apollo" aria-hidden="true">#</a> Apollo</h3>`,55),S={href:"http://xn--0tr.Net",target:"_blank",rel:"noopener noreferrer"},I=t('<figure><img src="https://mmbiz.qpic.cn/mmbiz_png/ELH62gpbFmGdnIjxDT7AOQyZgl2KQnz68zZFSDpHfa80ppne7gbP4ROOLJSuZT7E2uEdf1OTR9zthLNFkIZSLQ/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="spring-cloud-git" tabindex="-1"><a class="header-anchor" href="#spring-cloud-git" aria-hidden="true">#</a> Spring Cloud Git</h3><p>Spring Cloud 中使用的配置中心组件，只支持 Java 语言，配置存储在 git 中，变更配置也需要通过 git 操作，如果配置中心有配置变更，需要手动刷新。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200716202911.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="链路追踪" tabindex="-1"><a class="header-anchor" href="#链路追踪" aria-hidden="true">#</a> 链路追踪</h2><h3 id="链路追踪的作用" tabindex="-1"><a class="header-anchor" href="#链路追踪的作用" aria-hidden="true">#</a> 链路追踪的作用</h3><ul><li>优化系统瓶颈</li><li>优化链路调用</li><li>生成网络拓扑</li><li>透明传输数据</li></ul><h3 id="链路追踪的原理" tabindex="-1"><a class="header-anchor" href="#链路追踪的原理" aria-hidden="true">#</a> 链路追踪的原理</h3><p>理解链路追踪必须先了解以下概念：</p><ul><li><strong>traceId</strong>，用于标识某一次具体的请求 ID。当用户的请求进入系统后，会在 RPC 调用网络的第一层生成一个全局唯一的 traceId，并且会随着每一层的 RPC 调用，不断往后传递，这样的话通过 traceId 就可以把一次用户请求在系统中调用的路径串联起来。</li><li><strong>spanId</strong>，用于标识一次 RPC 调用在分布式请求中的位置。当用户的请求进入系统后，处在 RPC 调用网络的第一层 A 时 spanId 初始值是 0，进入下一层 RPC 调用 B 的时候 spanId 是 0.1，继续进入下一层 RPC 调用 C 时 spanId 是 0.1.1，而与 B 处在同一层的 RPC 调用 E 的 spanId 是 0.2，这样的话通过 spanId 就可以定位某一次 RPC 请求在系统调用中所处的位置，以及它的上下游依赖分别是谁。</li><li><strong>annotation</strong>，用于业务自定义埋点数据，可以是业务感兴趣的想上传到后端的数据，比如一次请求的用户 UID。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200716204658.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="链路追踪的实现" tabindex="-1"><a class="header-anchor" href="#链路追踪的实现" aria-hidden="true">#</a> 链路追踪的实现</h3><p>一个服务追踪系统一般可以分为三层：</p><ul><li><strong>数据采集</strong>层，负责数据埋点并上报。</li><li><strong>数据处理</strong>层，负责数据的存储与计算。</li><li><strong>数据展示</strong>层，负责数据的图形化展示。</li></ul><h4 id="数据采集层" tabindex="-1"><a class="header-anchor" href="#数据采集层" aria-hidden="true">#</a> 数据采集层</h4><p>一次 RPC 请求可以分为四个阶段。</p><ul><li>CS（Client Send）阶段 : 客户端发起请求，并生成调用的上下文。</li><li>SR（Server Recieve）阶段 : 服务端接收请求，并生成上下文。</li><li>SS（Server Send）阶段 : 服务端返回请求，这个阶段会将服务端上下文数据上报，下面这张图可以说明上报的数据有：traceId=123456，spanId=0.1，appKey=B，method=B.method，start=103，duration=38。</li><li>CR（Client Recieve）阶段 : 客户端接收返回结果，这个阶段会将客户端上下文数据上报，上报的数据有：traceid=123456，spanId=0.1，appKey=A，method=B.method，start=103，duration=38。</li></ul><h4 id="数据处理层" tabindex="-1"><a class="header-anchor" href="#数据处理层" aria-hidden="true">#</a> 数据处理层</h4><p>数据处理层的作用就是把数据采集层上报的数据按需计算，然后落地存储供查询使用。</p><ul><li>实时数据处理</li></ul><p>针对实时数据处理，一般采用 Storm 或者 Spark Streaming 来对链路数据进行实时聚合加工，存储一般使用 OLTP 数据仓库，比如 HBase，使用 traceId 作为 RowKey，能天然地把一整条调用链聚合在一起，提高查询效率。</p><ul><li>离线数据处理</li></ul><p>针对离线数据处理，一般通过运行 MapReduce 或者 Spark 批处理程序来对链路数据进行离线计算，存储一般使用 Hive。</p><h4 id="数据展示层" tabindex="-1"><a class="header-anchor" href="#数据展示层" aria-hidden="true">#</a> 数据展示层</h4><p>数据展示层的作用就是将处理后的链路信息以图形化的方式展示给用户。</p><p>实际项目中主要用到两种图形展示，一种是调用链路图，一种是调用拓扑图。</p><h3 id="链路追踪方案对比" tabindex="-1"><a class="header-anchor" href="#链路追踪方案对比" aria-hidden="true">#</a> 链路追踪方案对比</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200716205052.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="限流熔断" tabindex="-1"><a class="header-anchor" href="#限流熔断" aria-hidden="true">#</a> 限流熔断</h2><p>一般而言，集群故障的产生原因不外乎有两种：</p><p>一种是代码 bug 所导致，比如说某一段 Java 代码不断地分配大对象，但没有及时回收导致 JVM OOM 退出；</p><p>另一种是突发的流量冲击，超出了系统的最大承载能力，比如“双 11”这种购物活动，电商系统会在零点一瞬间涌入大量流量，超出系统的最大承载能力，一下子就把整个系统给压垮了。</p><p>应付集群故障的思路，主要有两种：<strong>限流</strong>和<strong>降级</strong>。</p><h3 id="限流" tabindex="-1"><a class="header-anchor" href="#限流" aria-hidden="true">#</a> 限流</h3><p>限流就是限制流量。通常情况下，系统能够承载的流量根据集群规模的大小是固定的，可以称之为系统的最大容量。当真实流量超过了系统的最大容量后，就会导致系统响应变慢，服务调用出现大量超时，反映给用户的感觉就是卡顿、无响应。所以，应该根据系统的最大容量，给系统设置一个阈值，超过这个阈值的请求会被自动抛弃，这样的话可以最大限度地保证系统提供的服务正常。</p><p>除此之外，通常一个微服务系统会同时提供多个服务，每个服务在同一时刻的请求量也是不同的，很可能出现的一种情况就是，系统中某个服务的请求量突增，占用了系统中大部分资源，导致其他服务没有资源可用。因此，还要针对系统中每个服务的请求量也设置一个阈值，超过这个阈值的请求也要被自动抛弃，这样的话不至于因为一个服务影响了其他所有服务。</p><p>在实际项目中，可以用两个指标来衡量服务的请求量，一个是 QPS 即每秒请求量，一个是工作线程数。不过 QPS 因为不同服务的响应快慢不同，所以系统能够承载的 QPS 相差很大，因此一般选择工作线程数来作为限流的指标，给系统设置一个总的最大工作线程数以及单个服务的最大工作线程数，这样的话无论是系统的总请求量过大导致整体工作线程数量达到最大工作线程数，还是某个服务的请求量超过单个服务的最大工作线程数，都会被限流，以起到保护整个系统的作用。</p><h3 id="降级" tabindex="-1"><a class="header-anchor" href="#降级" aria-hidden="true">#</a> 降级</h3><p>什么是降级呢？在我看来，降级就是通过停止系统中的某些功能，来保证系统整体的可用性。降级可以说是一种被动防御的措施，为什么这么说呢？因为它一般是系统已经出现故障后所采取的一种止损措施。</p><p>那么降级一般是如何实现的呢？根据我的实践来看， 一种可行的方案是通过开关来实现。</p><p>具体来讲，就是在系统运行的内存中开辟一块区域，专门用于存储开关的状态，也就是开启还是关闭。并且需要监听某个端口，通过这个端口可以向系统下发命令，来改变内存中开关的状态。当开关开启时，业务的某一段逻辑就不再执行，而正常情况下，开关是关闭的状态。</p><p>开关一般用在两种地方，一种是新增的业务逻辑，因为新增的业务逻辑相对来说不成熟，往往具备一定的风险，所以需要加开关来控制新业务逻辑是否执行；另一种是依赖的服务或资源，因为依赖的服务或者资源不总是可靠的，所以最好是有开关能够控制是否对依赖服务或资源发起调用，来保证即使依赖出现问题，也能通过降级来避免影响。</p><p>在实际业务应用的时候，降级要按照对业务的影响程度进行分级，一般分为三级：一级降级是对业务影响最小的降级，在故障的情况下，首先执行一级降级，所以一级降级也可以设置成自动降级，不需要人为干预；二级降级是对业务有一定影响的降级，在故障的情况下，如果一级降级起不到多大作用的时候，可以人为采取措施，执行二级降级；三级降级是对业务有较大影响的降级，这种降级要么是对商业收入有重大影响，要么是对用户体验有重大影响，所以操作起来要非常谨慎，不在最后时刻一般不予采用。</p><h2 id="devops" tabindex="-1"><a class="header-anchor" href="#devops" aria-hidden="true">#</a> DEVOPS</h2><h3 id="容器和容器平台" tabindex="-1"><a class="header-anchor" href="#容器和容器平台" aria-hidden="true">#</a> 容器和容器平台</h3><p>Mesos、Marathon、Kubernetes</p><h2 id="rpc-选型" tabindex="-1"><a class="header-anchor" href="#rpc-选型" aria-hidden="true">#</a> RPC 选型</h2><h3 id="限定语言-rpc" tabindex="-1"><a class="header-anchor" href="#限定语言-rpc" aria-hidden="true">#</a> 限定语言 RPC</h3><p>跟语言平台绑定的开源 RPC 框架主要有下面几种。</p><ul><li>Dubbo：国内最早开源的 RPC 框架，由阿里巴巴公司开发并于 2011 年末对外开源，仅支持 Java 语言。</li><li>Motan：微博内部使用的 RPC 框架，于 2016 年对外开源，仅支持 Java 语言。</li><li>Tars：腾讯内部使用的 RPC 框架，于 2017 年对外开源，仅支持 C++ 语言。</li><li>Spring Cloud：国外 Pivotal 公司 2014 年对外开源的 RPC 框架，仅支持 Java 语言，最近几年生态发展得比较好，是比较火的 RPC 框架。</li></ul><p>所以很明显，如果你的业务场景仅仅局限于一种语言的话，可以选择跟语言绑定的 RPC 框架中的一种；如果涉及多个语言平台之间的相互调用，就应该选择跨语言平台的 RPC 框架。</p><p>仔细分析，可以看出 Spring Cloud 不仅提供了基本的 RPC 框架功能，还提供了服务注册组件、配置中心组件、负载均衡组件、断路器组件、分布式消息追踪组件等一系列组件，也难怪被技术圈的人称之为“Spring Cloud 全家桶”。如果你不想自己实现以上这些功能，那么 Spring Cloud 基本可以满足你的全部需求。而 Dubbo、Motan 基本上只提供了最基础的 RPC 框架的功能，其他微服务组件都需要自己去实现。不过由于 Spring Cloud 的 RPC 通信采用了 HTTP 协议，相比 Dubbo 和 Motan 所采用的私有协议来说，在高并发的通信场景下，性能相对要差一些，所以对性能有苛刻要求的情况下，可以考虑 Dubbo 和 Motan。</p><h3 id="跨语言-rpc" tabindex="-1"><a class="header-anchor" href="#跨语言-rpc" aria-hidden="true">#</a> 跨语言 RPC</h3><p>而跨语言平台的开源 RPC 框架主要有以下几种。</p><ul><li>gRPC：Google 于 2015 年对外开源的跨语言 RPC 框架，支持常用的 C++、Java、Python、Go、Ruby、PHP、Android Java、Objective-C 等多种语言。</li><li>Thrift：最初是由 Facebook 开发的内部系统跨语言的 RPC 框架，2007 年贡献给了 Apache 基金，成为 Apache 开源项目之一，支持常用的 C++、Java、PHP、Python、Ruby、Erlang 等多种语言。</li></ul><p>从成熟度上来讲，Thrift 因为诞生的时间要早于 gRPC，所以使用的范围要高于 gRPC，在 HBase、Hadoop、Scribe、Cassandra 等许多开源组件中都得到了广泛地应用。而且 Thrift 支持多达 25 种语言，这要比 gRPC 支持的语言更多，所以如果遇到 gRPC 不支持的语言场景下，选择 Thrift 更合适。</p><p>但 gRPC 作为后起之秀，因为采用了 HTTP/2 作为通信协议、ProtoBuf 作为数据序列化格式，在移动端设备的应用以及对传输带宽比较敏感的场景下具有很大的优势，而且开发文档丰富，根据 ProtoBuf 文件生成的代码要比 Thrift 更简洁一些，从使用难易程度上更占优势，所以如果使用的语言平台 gRPC 支持的话，建议还是采用 gRPC 比较好。</p><h2 id="service-mesh" tabindex="-1"><a class="header-anchor" href="#service-mesh" aria-hidden="true">#</a> Service Mesh</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200721154106.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="service-mesh-的实现原理" tabindex="-1"><a class="header-anchor" href="#service-mesh-的实现原理" aria-hidden="true">#</a> Service Mesh 的实现原理</h3><p>Service Mesh 实现的关键就在于两点：</p><p>一个是上面提到的轻量级的网络代理也叫 SideCar，它的作用就是转发服务之间的调用；</p><p>一个是基于 SideCar 的服务治理也被叫作 Control Plane，它的作用是向 SideCar 发送各种指令，以完成各种服务治理功能。下面我就来详细讲解这两点是如何实现的。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',64),T={href:"https://time.geekbang.org/column/intro/100014401",target:"_blank",rel:"noopener noreferrer"},k={href:"https://time.geekbang.org/column/intro/100046201",target:"_blank",rel:"noopener noreferrer"},z={href:"https://time.geekbang.org/course/intro/100003901",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.cnblogs.com/savorboard/p/api-gateway.html",target:"_blank",rel:"noopener noreferrer"};function y(H,D){const i=l("ExternalLinkIcon");return d(),s("div",null,[h,e("ul",null,[u,p,e("li",null,[c,a("。它主要解决客户端和服务端采用哪种数据编解码的问题。常见的序列化方式包括：XML、JSON；二进制类如："),e("a",g,[a("thrift"),r(i)]),a("、"),e("a",b,[a("protobuf"),r(i)]),a("、"),e("a",m,[a("hessian"),r(i)]),a("、JDK。")])]),f,v,x,e("blockquote",null,[e("p",null,[a("👉 参考："),e("a",P,[a("Java 序列化"),r(i)])])]),_,e("blockquote",null,[e("p",null,[a("参考："),e("a",C,[a("负载均衡基本原理"),r(i)])])]),R,e("p",null,[a("携程开源的分布式配置中心，支持 Java "),e("a",S,[a("和.Net"),r(i)]),a(" 语言，客户端和配置中心通过 HTTP 长连接实现实时推送，并且有统一的管理界面来实现配置管理。")]),I,e("ul",null,[e("li",null,[e("a",T,[a("从 0 开始学微服务"),r(i)])]),e("li",null,[e("a",k,[a("RPC 实战与核心原理"),r(i)])]),e("li",null,[e("a",z,[a("微服务架构核心 20 讲"),r(i)])]),e("li",null,[e("a",w,[a("谈谈微服务中的 API 网关（API Gateway）"),r(i)])])])])}const J=n(o,[["render",y],["__file","10.微服务基本原理.html.vue"]]);export{J as default};
