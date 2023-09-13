import{_ as h}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as d,c as t,a as i,b as l,d as a,e as r}from"./app-ee97b13a.js";const s={},o=r('<h1 id="《从-0-开始学微服务》笔记" tabindex="-1"><a class="header-anchor" href="#《从-0-开始学微服务》笔记" aria-hidden="true">#</a> 《从 0 开始学微服务》笔记</h1><h2 id="到底什么是微服务" tabindex="-1"><a class="header-anchor" href="#到底什么是微服务" aria-hidden="true">#</a> 到底什么是微服务？</h2><blockquote><p>微服务定义</p><p>微服务是由单一应用程序构成的小服务，拥有自己的进程与轻量化处理，服务依业务功能设计，以全自动的方式部署，与其他服务使用 HTTP API 通讯。同时，服务会使用最小规模的集中管理 （例如 Docker）技术，服务可以用不同的编程语言与数据库等。</p><p>——Martin Fowler 和 James Lewis</p></blockquote><p>单体应用的问题</p><ul><li>部署效率低</li><li>团队协作开发成本高</li><li>单点故障问题</li><li>线上发布变慢</li></ul><p>服务化：本地方法调用 转为 远程方法调用（RPC）</p><p>微服务和服务化的差异：</p><ul><li>服务拆分粒度更细</li><li>服务独立部署、维护</li><li>服务治理要求高</li></ul><h2 id="从单体应用走向服务化" tabindex="-1"><a class="header-anchor" href="#从单体应用走向服务化" aria-hidden="true">#</a> 从单体应用走向服务化</h2><h3 id="什么时候进行服务化拆分" tabindex="-1"><a class="header-anchor" href="#什么时候进行服务化拆分" aria-hidden="true">#</a> 什么时候进行服务化拆分？</h3><p>经验：开发人员超过 10 人（沟通成本变高），就可以考虑服务化拆分</p><h3 id="服务化拆分的两种姿势" tabindex="-1"><a class="header-anchor" href="#服务化拆分的两种姿势" aria-hidden="true">#</a> 服务化拆分的两种姿势</h3><p><strong>纵向拆分</strong>，从业务维度进行拆分。标准是按照业务的关联程度来决定，关联比较密切的业务适合拆分为一个微服务，而功能相对比较独立的业务适合单独拆分为一个微服务。</p><p><strong>横向拆分</strong>，从公共且独立功能维度拆分。标准是按照是否有公共的被多个其他服务调用，且依赖的资源独立不与其他业务耦合。</p><h3 id="服务化拆分的前置条件" tabindex="-1"><a class="header-anchor" href="#服务化拆分的前置条件" aria-hidden="true">#</a> 服务化拆分的前置条件</h3><ul><li><strong>服务如何定义</strong>。通过接口来约定。</li><li><strong>服务如何发布和订阅</strong>。通过服务注册和发现。</li><li><strong>服务如何监控</strong>。<strong>故障如何定位</strong>。服务化需要链路监控。</li><li><strong>服务如何治理</strong>。超时和重试、流量控制。</li></ul><h2 id="初探微服务架构" tabindex="-1"><a class="header-anchor" href="#初探微服务架构" aria-hidden="true">#</a> 初探微服务架构</h2><p>微服务通过注册中心，实现发布订阅模式。</p><p>服务调用主要依赖几个基本组件：</p><ul><li>服务描述：常用的服务描述方式包括 RESTful API、XML 配置以及 IDL 文件三种。 <ul><li>RESTful API 代表：Swagger</li><li>XML 代表：Dubbo</li><li>IDL 代表：Thrift、gRPC</li></ul></li><li>注册中心 <ul><li>服务提供者在启动时，根据服务发布文件中配置的发布信息向注册中心注册自己的服务。</li><li>服务消费者在启动时，根据消费者配置文件中配置的服务信息向注册中心订阅自己所需要的服务。</li><li>注册中心返回服务提供者地址列表给服务消费者。</li><li>当服务提供者发生变化，比如有节点新增或者销毁，注册中心将变更通知给服务消费者。</li></ul></li><li>服务框架 <ul><li>通信协议：选择 TCP、UDP、HTTP，还是其他？</li><li>数据传输方式：同步、异步、多路复用？</li><li>序列化方式：JDK 序列化、Json、二进制（Protobuf、Thrift）？</li></ul></li><li>服务监控 <ul><li>数据采集</li><li>数据处理</li><li>数据展示</li></ul></li><li>服务追踪</li><li>工作原理：通过 requestId、spanId 分别表示一次请求、请求中的某一环节</li><li>服务治理： <ul><li>超时、重试</li><li>负载均衡</li><li>故障转移</li><li>流量控制</li></ul></li></ul><h2 id="如何发布和引用服务" tabindex="-1"><a class="header-anchor" href="#如何发布和引用服务" aria-hidden="true">#</a> 如何发布和引用服务？</h2><p><strong>RESTful API</strong>：主要被<strong>用作 HTTP 或者 HTTPS 协议的接口定义</strong>。代表：Eureka</p><p><strong>XML 配置</strong>：代表：Dubbo。工作步骤：</p><ul><li>服务提供者定义接口，并实现接口。</li><li>服务提供者进程启动时，通过加载 server.xml 配置文件将接口暴露出去。</li><li>服务消费者进程启动时，通过加载 client.xml 配置文件来引入要调用的接口。</li></ul><p>IDL 文件：IDL 就是接口描述语言（interface description language）的缩写。主要<strong>用作跨语言平台的服务之间的调用</strong>。有两种最常用的 IDL：Thrift、gRPC。</p><h2 id="如何注册和发现服务" tabindex="-1"><a class="header-anchor" href="#如何注册和发现服务" aria-hidden="true">#</a> 如何注册和发现服务？</h2><p>微服务架构下，主要有三种角色：</p><ul><li>服务提供者（RPC Server）</li><li>服务消费者（RPC Client）</li><li>服务注册中心（Registry）</li></ul><h3 id="注册中心实现方式" tabindex="-1"><a class="header-anchor" href="#注册中心实现方式" aria-hidden="true">#</a> 注册中心实现方式</h3><p>注册中心必须提供以下最基本的 API，例如：</p><ul><li><p>服务注册接口</p></li><li><p>服务注销接口</p></li><li><p>心跳汇报接口</p></li><li><p>服务订阅接口：服务消费者通过调用服务订阅接口完成服务订阅，获取可用的服务提供者节点列表。</p></li><li><p>服务变更查询接口</p></li><li><p>服务查询接口</p></li><li><p>服务修改接口</p></li></ul><h3 id="集群部署" tabindex="-1"><a class="header-anchor" href="#集群部署" aria-hidden="true">#</a> 集群部署</h3><p>注册中心一般都是采用集群部署来保证高可用性，并通过分布式一致性协议来确保集群中不同节点之间的数据保持一致。</p><p>以 ZooKeeper 的工作原理为例：</p><ul><li>每个 Server 在内存中存储了一份数据，Client 的读请求可以请求任意一个 Server。</li><li>ZooKeeper 启动时，将从实例中选举一个 leader（Paxos 协议）。</li><li>Leader 负责处理数据更新等操作（ZAB 协议）。</li><li>一个更新操作成功，当且仅当大多数 Server 在内存中成功修改 。</li></ul><h3 id="目录存储" tabindex="-1"><a class="header-anchor" href="#目录存储" aria-hidden="true">#</a> 目录存储</h3><p>注册中心存储服务信息一般采用层次化的目录结构：</p><ul><li>每个目录在 ZooKeeper 中叫作 znode，并且其有一个唯一的路径标识。</li><li>znode 可以包含数据和子 znode。</li><li>znode 中的数据可以有多个版本，比如某一个 znode 下存有多个数据版本，那么查询这个路径下的数据需带上版本信息。</li></ul><h3 id="服务健康状态检测" tabindex="-1"><a class="header-anchor" href="#服务健康状态检测" aria-hidden="true">#</a> 服务健康状态检测</h3><p>ZooKeeper 客户端和服务端维持的是一个长连接。连接成功后，会生成一个全局唯一的 Session ID，客户端定期发送心跳消息，服务端收到后重置会话超时时间。如果超时，则认为连接结束。</p><p>如果一个服务将 ZooKeeper 作为服务注册中心，一旦连接超时，ZooKeeper 会认为这个服务节点已经不可用，就会将其信息删除。</p><h3 id="服务状态变更通知" tabindex="-1"><a class="header-anchor" href="#服务状态变更通知" aria-hidden="true">#</a> 服务状态变更通知</h3><p>ZooKeeper 支持 Watch 机制。服务消费者可以监听服务提供者的节点信息。一旦服务提供者的节点信息哟变化，就可以获取到变更状态。</p><h3 id="白名单机制" tabindex="-1"><a class="header-anchor" href="#白名单机制" aria-hidden="true">#</a> 白名单机制</h3><p>通常注册中心会有多套环境，区分开发、测试、线上等环境。如果弄错了，会出现意想不到的后果，为此需要引入白名单保护机制。只有添加到注册中心白名单内的 RPC Server，才能够调用注册中心的注册接口，这样的话可以避免测试环境中的节点意外跑到线上环境中去。</p><h2 id="如何实现-rpc-远程服务调用" tabindex="-1"><a class="header-anchor" href="#如何实现-rpc-远程服务调用" aria-hidden="true">#</a> 如何实现 RPC 远程服务调用？</h2><p>客户端和服务端如何建立网络连接？</p><ul><li><strong>HTTP 通信</strong>：三次握手建立连接；四次挥手断开连接</li><li><strong>Socket 通信</strong><ul><li>服务器监听</li><li>客户端请求</li><li>连接确认</li><li>数据传输</li></ul></li></ul><p>服务端如何处理请求？</p><ul><li>BIO</li><li>NIO</li><li>AIO</li></ul><p>数据传输采用什么协议？</p><ul><li>Http</li><li>Dubbo</li></ul><p>数据该如何序列化和反序列化？</p><ul><li>JDK</li><li>JSON</li><li>二进制（PB、Thrift 等）</li></ul><h2 id="如何监控微服务调用" tabindex="-1"><a class="header-anchor" href="#如何监控微服务调用" aria-hidden="true">#</a> 如何监控微服务调用？</h2><p>监控对象</p><ul><li>客户端监控</li><li>接口监控</li><li>资源监控</li><li>基础监控</li></ul><p>监控指标</p><ul><li>请求量</li><li>响应时间</li><li>错误率</li></ul><p>监控维度</p><ul><li>全局维度</li><li>机房维度</li><li>单机维度</li><li>时间维度</li><li>重要性维度</li></ul><p>监控关键点</p><ul><li>数据采集 <ul><li>主动上报</li><li>代理收集</li></ul></li><li>数据传输 <ul><li>UDP</li><li>Kafka</li></ul></li><li>数据处理 <ul><li>全文检索：如 Elasticsearch</li><li>时序数据库：如 InfluxDB、OpenTSDB</li><li>流计算：如 Spark、Storm、Flink</li></ul></li><li>数据展示</li></ul><h2 id="如何追踪微服务调用" tabindex="-1"><a class="header-anchor" href="#如何追踪微服务调用" aria-hidden="true">#</a> 如何追踪微服务调用？</h2><h3 id="服务追踪的作用" tabindex="-1"><a class="header-anchor" href="#服务追踪的作用" aria-hidden="true">#</a> 服务追踪的作用</h3><ul><li>定位整个系统的瓶颈点</li><li>优化链路调用</li><li>生成网络拓扑</li><li>透明传输数据</li></ul><h3 id="服务追踪系统原理" tabindex="-1"><a class="header-anchor" href="#服务追踪系统原理" aria-hidden="true">#</a> 服务追踪系统原理</h3>',67),u={href:"http://bigbully.github.io/Dapper-translation/",target:"_blank",rel:"noopener noreferrer"},p=i("code",null,"Dapper, a Large-Scale Distributed Systems Tracing Infrastructure",-1),c=r('<ul><li><strong>traceId</strong>，用于标识某一次具体的请求 ID。当用户的请求进入系统后，会在 RPC 调用网络的第一层生成一个全局唯一的 traceId，并且会随着每一层的 RPC 调用，不断往后传递，这样的话通过 traceId 就可以把一次用户请求在系统中调用的路径串联起来。</li><li><strong>spanId</strong>，用于标识一次 RPC 调用在分布式请求中的位置。当用户的请求进入系统后，处在 RPC 调用网络的第一层 A 时 spanId 初始值是 0，进入下一层 RPC 调用 B 的时候 spanId 是 0.1，继续进入下一层 RPC 调用 C 时 spanId 是 0.1.1，而与 B 处在同一层的 RPC 调用 E 的 spanId 是 0.2，这样的话通过 spanId 就可以定位某一次 RPC 请求在系统调用中所处的位置，以及它的上下游依赖分别是谁。</li><li><strong>annotation</strong>，用于业务自定义埋点数据，可以是业务感兴趣的想上传到后端的数据，比如一次请求的用户 UID。</li></ul><h3 id="服务追踪系统实现" tabindex="-1"><a class="header-anchor" href="#服务追踪系统实现" aria-hidden="true">#</a> 服务追踪系统实现</h3><p>服务追踪系统可以分为三层。</p><ul><li>数据采集层，负责数据埋点并上报。</li><li>数据处理层，负责数据的存储与计算。</li><li>数据展示层，负责数据的图形化展示。</li></ul><h2 id="微服务治理的手段有哪些" tabindex="-1"><a class="header-anchor" href="#微服务治理的手段有哪些" aria-hidden="true">#</a> 微服务治理的手段有哪些？</h2><p>服务调用失败原因：</p><ul><li>服务提供者自身问题，如宕机、进程退出等；</li><li>网络问题</li></ul><h3 id="节点管理" tabindex="-1"><a class="header-anchor" href="#节点管理" aria-hidden="true">#</a> 节点管理</h3><ul><li><strong>注册中心主动摘除机制</strong>：服务提供者定时发送心跳，如果超时，注册中心把节点从服务列表中删除</li><li><strong>服务消费者摘除机制</strong>：如果服务消费者调用服务提供者节点失败，就将这个节点从内存中保存的可用服务提供者节点列表中移除。</li></ul><h3 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h3><ul><li>随机算法</li><li>轮询算法</li><li>最少活跃调用算法</li><li>一致性 Hash 算法</li></ul><h3 id="服务路由" tabindex="-1"><a class="header-anchor" href="#服务路由" aria-hidden="true">#</a> 服务路由</h3><p>为什么要制定路由规则呢？</p><ul><li>业务存在灰度发布的需求</li><li>多机房就近访问的需求</li></ul><p>如何配置路由规则</p><ul><li>静态配置：修改服务消费者本地配置，上线后生效</li><li>动态配置：修改注册中心的配置，服务消费者在下一个同步周期之后，就会动态更新</li></ul><h3 id="服务容错" tabindex="-1"><a class="header-anchor" href="#服务容错" aria-hidden="true">#</a> 服务容错</h3><ul><li>FailOver：失败自动切换。</li><li>FailBack：失败通知。</li><li>FailCache：失败缓存。</li><li>FailFast：快速失败。</li></ul><p>一般情况下对于幂等的调用，可以选择 FailOver 或者 FailCache，非幂等的调用可以选择 FailBack 或者 FailFast。</p><h2 id="dubbo-框架里的微服务组件" tabindex="-1"><a class="header-anchor" href="#dubbo-框架里的微服务组件" aria-hidden="true">#</a> Dubbo 框架里的微服务组件</h2><h2 id="服务发布和引用的实践" tabindex="-1"><a class="header-anchor" href="#服务发布和引用的实践" aria-hidden="true">#</a> 服务发布和引用的实践</h2><p>XML 配置方式的服务发布和引用流程</p><ul><li>服务提供者定义接口</li><li>服务提供者发布接口</li><li>服务消费者引用接口</li></ul><p>服务发布和引用的那些坑</p><h2 id="如何将注册中心落地" tabindex="-1"><a class="header-anchor" href="#如何将注册中心落地" aria-hidden="true">#</a> 如何将注册中心落地？</h2><p>注册中心如何存储服务信息</p><p>服务一般会分成多个不同的分组</p><ul><li>核心与非核心，从业务的核心程度来分。</li><li>机房，从机房的维度来分。</li><li>线上环境与测试环境，从业务场景维度来区分。</li></ul><p>所以注册中心存储的服务信息一般包含三部分内容：<strong>分组</strong>、<strong>服务名</strong>以及<strong>节点信息</strong>，节点信息又包括节点地址和节点其他信息。</p><h3 id="注册中心工作流程" tabindex="-1"><a class="header-anchor" href="#注册中心工作流程" aria-hidden="true">#</a> 注册中心工作流程</h3><ul><li>服务提供者注册流程。</li><li>服务提供者反注册流程。</li><li>服务消费者查询流程。</li><li>服务消费者订阅变更流程。</li></ul><h3 id="如何注册节点" tabindex="-1"><a class="header-anchor" href="#如何注册节点" aria-hidden="true">#</a> 如何注册节点</h3><ul><li>首先查看要注册的节点是否在白名单内？如果不在就抛出异常，在的话继续下一步。</li><li>其次要查看注册的 Cluster（服务的接口名）是否存在？如果不存在就抛出异常，存在的话继续下一步。</li><li>然后要检查 Service（服务的分组）是否存在？如果不存在则抛出异常，存在的话继续下一步。</li><li>最后将节点信息添加到对应的 Service 和 Cluster 下面的存储中。</li></ul><h3 id="如何反注册" tabindex="-1"><a class="header-anchor" href="#如何反注册" aria-hidden="true">#</a> 如何反注册</h3><ul><li>查看 Service（服务的分组）是否存在，不存在就抛出异常，存在就继续下一步。</li><li>查看 Cluster（服务的接口名）是否存在，不存在就抛出异常，存在就继续下一步。</li><li>删除存储中 Service 和 Cluster 下对应的节点信息。</li><li>更新 Cluster 的 sign 值。</li></ul><h3 id="如何查询节点信息" tabindex="-1"><a class="header-anchor" href="#如何查询节点信息" aria-hidden="true">#</a> 如何查询节点信息</h3><p>首先从 localcache（本机内存）中查找，如果没有就继续下一步。</p><p>接着从 snapshot（本地快照）中查找，如果没有就继续下一步。</p><h3 id="如何订阅服务变更" tabindex="-1"><a class="header-anchor" href="#如何订阅服务变更" aria-hidden="true">#</a> 如何订阅服务变更</h3><ul><li>服务消费者从注册中心获取了服务的信息后，就订阅了服务的变化，会在本地保留 Cluster 的 sign 值。</li><li>服务消费者每隔一段时间，调用 getSign() 函数，从注册中心获取服务端该 Cluster 的 sign 值，并与本地保留的 sign 值做对比，如果不一致，就从服务端拉取新的节点信息，并更新 localcache 和 snapshot。</li></ul><h3 id="注册与发现的几个问题" tabindex="-1"><a class="header-anchor" href="#注册与发现的几个问题" aria-hidden="true">#</a> 注册与发现的几个问题</h3><ul><li><p>多注册中心</p></li><li><p>并行订阅服务</p></li><li><p>批量反注册服务</p></li><li><p>服务变更信息增量更新</p></li></ul><h2 id="开源服务注册中心如何选型" tabindex="-1"><a class="header-anchor" href="#开源服务注册中心如何选型" aria-hidden="true">#</a> 开源服务注册中心如何选型？</h2><ul><li><strong>应用内注册与发现</strong>：注册中心提供服务端和客户端的 SDK，业务应用通过引入注册中心提供的 SDK，通过 SDK 与注册中心交互，来实现服务的注册和发现。典型代表：Eureka</li><li><strong>应用外注册与发现</strong>：业务应用本身不需要通过 SDK 与注册中心打交道，而是通过其他方式与注册中心交互，间接完成服务注册与发现。典型代表：Consul</li></ul><p>二者对比：</p><ul><li>用内的解决方案一般适用于服务提供者和服务消费者同属于一个技术体系；</li><li>应用外的解决方案一般适合服务提供者和服务消费者采用了不同技术体系的业务场景</li></ul><p>注册中心选型要考虑的两个问题</p><ul><li>高可用性</li><li>数据一致性 <ul><li>CP 型：牺牲可用性来保证数据强一致性。代表：ZooKeeper、Etcd、Consul</li><li>AP 型：代表：Eureka、Nacos</li></ul></li></ul><p>而对于注册中心来说，最主要的功能是服务的注册和发现，在网络出现问题的时候，可用性的需求要远远高于数据一致性。即使因为数据不一致，注册中心内引入了不可用的服务节点，也可以通过其他措施来避免，比如客户端的快速失败机制等，只要实现最终一致性，对于注册中心来说就足够了。因此，选择 AP 型注册中心，一般更加合适。</p><h2 id="开源-rpc-框架如何选型" tabindex="-1"><a class="header-anchor" href="#开源-rpc-框架如何选型" aria-hidden="true">#</a> 开源 RPC 框架如何选型？</h2><p>限定语言 RPC</p><ul><li>Dubbo：仅支持 Java</li><li>Motan：仅支持 Java</li><li>Tars：仅支持 C++</li><li>Spring Cloud：仅支持 Java</li></ul><p>跨语言 RPC</p><ul><li>gRPC：支持 C++、Java、Python、Go、Ruby、PHP、Android Java、Objective-C 等多种语言</li><li>Thrift：支持 C++、Java、PHP、Python、Ruby、Erlang 等多种语言</li></ul><h2 id="如何搭建一个可靠的监控系统" tabindex="-1"><a class="header-anchor" href="#如何搭建一个可靠的监控系统" aria-hidden="true">#</a> 如何搭建一个可靠的监控系统？</h2>',55),g={href:"https://www.elastic.co/cn/",target:"_blank",rel:"noopener noreferrer"},f={href:"http://graphite.readthedocs.io/en/latest/index.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.influxdata.com/time-series-platform/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://prometheus.io/",target:"_blank",rel:"noopener noreferrer"},_=r('<h2 id="如何搭建一套适合你的服务追踪系统" tabindex="-1"><a class="header-anchor" href="#如何搭建一套适合你的服务追踪系统" aria-hidden="true">#</a> 如何搭建一套适合你的服务追踪系统？</h2><p>代表：Zipkin、PinPoint</p><h2 id="如何识别服务节点是否存活" tabindex="-1"><a class="header-anchor" href="#如何识别服务节点是否存活" aria-hidden="true">#</a> 如何识别服务节点是否存活？</h2><h3 id="心跳开关保护机制" tabindex="-1"><a class="header-anchor" href="#心跳开关保护机制" aria-hidden="true">#</a> 心跳开关保护机制</h3><p>问题：服务消费者同时并发访问注册中心获取最新服务信息导致注册中心带宽被打满</p><p>方案：需要一种保护机制，即使在网络频繁抖动的时候，服务消费者也不至于同时去请求注册中心获取最新的服务节点信息。</p><h3 id="服务节点摘除保护机制" tabindex="-1"><a class="header-anchor" href="#服务节点摘除保护机制" aria-hidden="true">#</a> 服务节点摘除保护机制</h3><p>问题：服务提供者节点被大量摘除导致服务消费者没有足够的节点可以调用</p><p>方案：需要根据实际业务的情况，设定一个阈值比例，即使遇到刚才说的这种情况，注册中心也不能摘除超过这个阈值比例的节点。</p><p>静态注册中心</p><h2 id="如何使用负载均衡算法" tabindex="-1"><a class="header-anchor" href="#如何使用负载均衡算法" aria-hidden="true">#</a> 如何使用负载均衡算法？</h2><h3 id="负载均衡算法" tabindex="-1"><a class="header-anchor" href="#负载均衡算法" aria-hidden="true">#</a> 负载均衡算法</h3><ul><li><p><strong>随机算法</strong></p></li><li><p><strong>轮询算法</strong></p></li><li><p><strong>加权轮询算法</strong></p></li><li><p><strong>最少活跃连接算法</strong></p></li><li><p><strong>一致性 hash 算法</strong></p></li></ul><h2 id="如何使用服务路由" tabindex="-1"><a class="header-anchor" href="#如何使用服务路由" aria-hidden="true">#</a> 如何使用服务路由？</h2><p><strong>服务路由就是服务消费者在发起服务调用时，必须根据特定的规则来选择服务节点，从而满足某些特定的需求</strong>。</p><p>服务路由的应用场景</p><ul><li><strong>分组调用</strong></li><li><strong>灰度发布</strong></li><li><strong>流量切换</strong></li><li><strong>读写分离</strong></li></ul><p>服务路由的规则</p><ul><li>条件路由 <ul><li>排除某个服务节点</li><li>白名单和黑名单功能</li><li>机房隔离</li><li>读写分离</li></ul></li><li>脚本路由</li></ul><p>服务路由的获取方式</p><ul><li>本地配置</li><li>配置中心管理</li><li>动态下发</li></ul><h2 id="服务端出现故障时该如何应对" tabindex="-1"><a class="header-anchor" href="#服务端出现故障时该如何应对" aria-hidden="true">#</a> 服务端出现故障时该如何应对？</h2><p>微服务故障种类</p><ul><li>集群故障。解决：流量控制 <ul><li>限流</li><li>降级</li></ul></li><li>单 IDC 故障。解决：多 IDC 部署、流量切换 <ul><li>多 IDC 部署 <ul><li>同城多活</li><li>异地多活</li></ul></li><li>流量切换 <ul><li>DNS 解析流量切换</li><li>RPC 流量切换</li></ul></li></ul></li><li>单机故障</li></ul><h2 id="服务调用失败时有哪些处理手段" tabindex="-1"><a class="header-anchor" href="#服务调用失败时有哪些处理手段" aria-hidden="true">#</a> 服务调用失败时有哪些处理手段？</h2><p>超时</p><p>重试</p><p>流量控制</p><h2 id="如何管理服务配置" tabindex="-1"><a class="header-anchor" href="#如何管理服务配置" aria-hidden="true">#</a> 如何管理服务配置？</h2><p>配置类型：</p><ul><li>本地配置</li><li>配置中心</li></ul><p>配置中心代表：</p>',32),C={href:"https://github.com/spring-cloud/spring-cloud-config",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/ctripcorp/apollo",target:"_blank",rel:"noopener noreferrer"},S=r('<h2 id="如何搭建微服务治理平台" tabindex="-1"><a class="header-anchor" href="#如何搭建微服务治理平台" aria-hidden="true">#</a> 如何搭建微服务治理平台？</h2><p>服务管理</p><ul><li>服务上下线</li><li>节点添加 / 删除</li><li>服务查询</li><li>服务节点查询。这个操作会调用注册中心的节点查询接口，来查询某个服务下一共有多少个节点。</li></ul><p>服务治理</p><ul><li>限流</li><li>降级</li><li>切流量</li></ul><p>服务监控</p><p>问题定位</p><p>日志查询</p><p>服务运维</p><ul><li>发布部署</li><li>弹性伸缩</li></ul><h2 id="微服务架构该如何落地" tabindex="-1"><a class="header-anchor" href="#微服务架构该如何落地" aria-hidden="true">#</a> 微服务架构该如何落地？</h2><p>（略）</p><h2 id="微服务为什么要容器化" tabindex="-1"><a class="header-anchor" href="#微服务为什么要容器化" aria-hidden="true">#</a> 微服务为什么要容器化？</h2><p>微服务引入的问题</p><p>设计复杂</p><p>测试复杂</p><p>运维困难</p><h2 id="微服务容器化运维-镜像仓库和资源调度" tabindex="-1"><a class="header-anchor" href="#微服务容器化运维-镜像仓库和资源调度" aria-hidden="true">#</a> 微服务容器化运维：镜像仓库和资源调度</h2><p>容器运维平台的组成部分</p><ul><li>镜像仓库</li><li>资源调度</li><li>容器调度</li><li>服务编排</li></ul><h2 id="微服务容器化运维-容器调度和服务编排" tabindex="-1"><a class="header-anchor" href="#微服务容器化运维-容器调度和服务编排" aria-hidden="true">#</a> 微服务容器化运维：容器调度和服务编排</h2>',21),I={href:"https://docs.docker.com/engine/swarm/",target:"_blank",rel:"noopener noreferrer"},m={href:"http://mesos.apache.org/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://kubernetes.io/",target:"_blank",rel:"noopener noreferrer"},D=i("p",null,"容器调度要解决的问题",-1),k=i("li",null,[i("strong",null,"主机过滤"),i("ul",null,[i("li",null,"存活过滤"),i("li",null,"硬件过滤")])],-1),T=i("li",null,[i("strong",null,"调度策略")],-1),R=i("li",null,[i("strong",null,"服务编排")],-1),M=i("strong",null,"服务依赖",-1),K={href:"https://github.com/docker/compose",target:"_blank",rel:"noopener noreferrer"},L=i("li",null,[i("strong",null,"服务发现"),i("ul",null,[i("li",null,"基于 Nginx 的服务发现"),i("li",null,"基于注册中心的服务发现"),i("li",null,"弹性伸缩")])],-1),y=r('<h2 id="微服务容器化运维-微博容器运维平台-dcp" tabindex="-1"><a class="header-anchor" href="#微服务容器化运维-微博容器运维平台-dcp" aria-hidden="true">#</a> 微服务容器化运维：微博容器运维平台 DCP</h2><h2 id="微服务如何实现-devops" tabindex="-1"><a class="header-anchor" href="#微服务如何实现-devops" aria-hidden="true">#</a> 微服务如何实现 DevOps？</h2><ul><li><strong>CI（Continuous Integration）</strong>，持续集成。开发完成代码开发后，能自动地进行代码检查、单元测试、打包部署到测试环境，进行集成测试，跑自动化测试用例。 <ul><li>代码检查</li><li>单元测试</li><li>集成测试</li></ul></li><li><strong>CD（Continuous Deploy）</strong>，持续部署。代码测试通过后，能自动部署到类生产环境中进行集成测试，测试通过后再进行小流量的灰度验证，验证通过后代码就达到线上发布的要求了，就可以把代码自动部署到线上。</li></ul><h2 id="如何做好微服务容量规划" tabindex="-1"><a class="header-anchor" href="#如何做好微服务容量规划" aria-hidden="true">#</a> 如何做好微服务容量规划？</h2><p>微服务容量规划的问题</p><ul><li>服务数量众多</li><li>服务的接口表现差异巨大</li><li>服务部署的集群规模大小不同</li><li>服务之间还存在依赖关系</li></ul><p>容量规划系统的作用是<strong>根据各个微服务部署集群的最大容量和线上实际运行的负荷，来决定各个微服务是否需要弹性扩缩容，以及需要扩缩容多少台机器</strong>。</p><p>容量规划系统实施的关键在于两点：</p><ul><li>容量评估 <ul><li>选择合适的压测指标 <ul><li>系统类指标：CPU、内存、I/O、带宽等</li><li>服务类指标：响应时间、P999 耗时、错误率等</li></ul></li><li>压测获取单机的最大容量 <ul><li>单机压测 <ul><li>通过日志回放等手段，模拟线上流量来对单机进行压测；</li><li>通过 TCP-Copy 的方式，把线上机器的流量拷贝过来对单机进行压测。</li></ul></li><li>集群压测</li></ul></li><li>实时和获取集群的运行负荷</li></ul></li><li>调度决策 <ul><li>可以使用<strong>水位线</strong>来进行调度决策：当集群的水位线位于致命线以下时，就需要立即扩容，在扩容一定数量的机器后，水位线回到安全线以上并保持一段时间后，就可以进行缩容了。</li><li>扩容 <ul><li>按数量</li><li>按比例</li></ul></li><li>缩容</li><li>逐步缩容</li><li>为了避免因扩容、缩容导致的水位线抖动，可以多次采集水位线数据，超过 60% 数据满足库哦哦让条件，才真正触发扩容。</li></ul></li></ul><h2 id="微服务多机房部署实践" tabindex="-1"><a class="header-anchor" href="#微服务多机房部署实践" aria-hidden="true">#</a> 微服务多机房部署实践</h2><p>多机房负载均衡：利用七层负载均衡和四层负载均衡，将流量根据用户就近访问的原则切分流量。</p><h2 id="多机房数据同步" tabindex="-1"><a class="header-anchor" href="#多机房数据同步" aria-hidden="true">#</a> 多机房数据同步</h2><h4 id="主从机房架构" tabindex="-1"><a class="header-anchor" href="#主从机房架构" aria-hidden="true">#</a> 主从机房架构</h4><ul><li>由主机房的处理机来更新本机房的缓存和数据库</li><li>其他机房的缓存也通过主机房的处理机来更新</li><li>从机房的数据库则通过 MySQL 的 binlog 同步主机房的数据。</li></ul><h4 id="独立机房架构" tabindex="-1"><a class="header-anchor" href="#独立机房架构" aria-hidden="true">#</a> 独立机房架构</h4><ul><li>每个机房的处理机接收到写请求后更新各自机房的缓存</li><li>只有主机房会更新数据库</li><li>从机房的数据库则通过 MySQL 的 binlog 同步主机房的数据。</li></ul><p>WMB 消息同步组件的功能就是把一个机房的写请求发给另外一个机房</p><ul><li>reship，负责把本机房的写请求分发一份给别的机房。</li><li>collector，负责从别的机房读取写请求，然后再把请求转发给本机房的处理机。</li></ul><p>实现 WMB 的消息同步功能有两种方案：</p><ul><li>MQ：两个机房的 MQ 通过维护状态机来读写请求</li><li>RPC</li></ul><h4 id="多机房数据一致性" tabindex="-1"><a class="header-anchor" href="#多机房数据一致性" aria-hidden="true">#</a> 多机房数据一致性</h4><h2 id="微服务混合云部署实践" tabindex="-1"><a class="header-anchor" href="#微服务混合云部署实践" aria-hidden="true">#</a> 微服务混合云部署实践</h2><h3 id="跨云服务的负载均衡" tabindex="-1"><a class="header-anchor" href="#跨云服务的负载均衡" aria-hidden="true">#</a> 跨云服务的负载均衡</h3><p>当服务上云后还需要考虑把一定比例的用户请求路由到云上部署的服务</p><h3 id="跨云服务的数据同步" tabindex="-1"><a class="header-anchor" href="#跨云服务的数据同步" aria-hidden="true">#</a> 跨云服务的数据同步</h3><p>私有云与公有云之间的网络隔离</p><p>一般来讲，出于安全的需要，企业内部机房同公有云机房之间的网络是隔离的，为了实现互通，需要架设专门的 VPN 网络或者专线。</p><p>数据库能否上云</p><p>数据库能否上云的关键取决于数据的隐私性。</p><h3 id="跨云服务的容器运维" tabindex="-1"><a class="header-anchor" href="#跨云服务的容器运维" aria-hidden="true">#</a> 跨云服务的容器运维</h3><p>跨云的主机管理：跨云主机管理的关键点在于，如何对内部私有云的机器和公有云的 ECS 进行管理，</p><p>跨云服务发现</p><p>跨云弹性扩容</p><p>跨云服务编排</p><h2 id="下一代微服务架构-service-mesh" tabindex="-1"><a class="header-anchor" href="#下一代微服务架构-service-mesh" aria-hidden="true">#</a> 下一代微服务架构 Service Mesh</h2><p>为什么需要 Service Mesh</p><ul><li><p>跨语言服务调用的需要</p></li><li><p>云原生应用服务治理的需要</p></li></ul><h2 id="service-mesh-的实现原理" tabindex="-1"><a class="header-anchor" href="#service-mesh-的实现原理" aria-hidden="true">#</a> Service Mesh 的实现原理</h2><p>Service Mesh 实现的关键点：</p><ul><li>轻量级网络代理 SideCar，它的作用就是转发服务之间的调用；</li><li>基于 SideCar 的服务治理也被叫作 Control Plane，它的作用是向 SideCar 发送各种指令，以完成各种服务治理功能。</li><li>服务发现</li><li>负载均衡</li><li>请求路由</li><li>故障处理</li><li>安全认证</li><li>监控上报</li><li>日志记录</li><li>配额控制</li></ul><h2 id="istio-service-mesh-的代表产品" tabindex="-1"><a class="header-anchor" href="#istio-service-mesh-的代表产品" aria-hidden="true">#</a> Istio：Service Mesh 的代表产品</h2><h3 id="istio-整体架构" tabindex="-1"><a class="header-anchor" href="#istio-整体架构" aria-hidden="true">#</a> Istio 整体架构</h3><p>Istio 的架构可以说由两部分组成，分别是 Proxy 和 Control Plane。</p><ul><li>Proxy，就是前面提到的 SideCar，与应用程序部署在同一个主机上，应用程序之间的调用都通过 Proxy 来转发，目前支持 HTTP/1.1、HTTP/2、gRPC 以及 TCP 请求。</li><li>Control Plane，与 Proxy 通信，来实现各种服务治理功能，包括三个基本组件：Pilot、Mixer 以及 Citadel。</li></ul>',44);function E(B,A){const e=n("ExternalLinkIcon");return d(),t("div",null,[o,i("p",null,[l("经典论文："),i("a",u,[p,a(e)])]),c,i("p",null,[l("日志解决方案："),i("a",g,[l("ELK"),a(e)])]),i("p",null,[l("时序数据库解决方案："),i("a",f,[l("Graphite"),a(e)]),l("、"),i("a",b,[l("TICK"),a(e)]),l("和"),i("a",x,[l("Prometheus"),a(e)])]),_,i("ul",null,[i("li",null,[i("a",C,[l("Spring Cloud Config"),a(e)])]),i("li",null,[i("a",P,[l("Apollo"),a(e)])])]),S,i("p",null,[l("容器调度系统代表："),i("a",I,[l("Swarm"),a(e)]),l("、"),i("a",m,[l("Mesos"),a(e)]),l("，"),i("a",v,[l("Kubernetes"),a(e)])]),D,i("ul",null,[k,T,R,i("li",null,[M,l("：代表方案："),i("a",K,[l("Docker Compose"),a(e)])]),L]),y])}const H=h(s,[["render",E],["__file","10.从0开始学微服务.html.vue"]]);export{H as default};
