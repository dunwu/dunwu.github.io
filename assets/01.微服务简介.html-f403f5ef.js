import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as a,c as s,a as i,b as l,d as e,e as n}from"./app-103fb7a1.js";const d={},h=n('<h1 id="微服务简介" tabindex="-1"><a class="header-anchor" href="#微服务简介" aria-hidden="true">#</a> 微服务简介</h1><blockquote><p>本文关键词：<code>定义</code>、<code>演进</code>、<code>利弊</code>、<code>如何拆分</code>、<code>容量规划</code>、<code>核心组件</code></p></blockquote><h2 id="什么是微服务" tabindex="-1"><a class="header-anchor" href="#什么是微服务" aria-hidden="true">#</a> 什么是微服务</h2>',3),c=i("p",null,[i("strong",null,"微服务定义")],-1),g=i("p",null,"微服务是由单一应用程序构成的小服务，拥有自己的进程与轻量化处理，服务依业务功能设计，以全自动的方式部署，与其他服务使用 HTTP API 通讯。同时，服务会使用最小规模的集中管理 （例如 Docker）技术，服务可以用不同的编程语言与数据库等。",-1),u={href:"https://www.martinfowler.com/articles/microservices.html",target:"_blank",rel:"noopener noreferrer"},p=n('<p>个人理解，<strong>微服务是一种架构模式</strong>，它提倡将一个单一应用拆分为一些<strong>可独立运行</strong>、<strong>可协同工作</strong>的<strong>小的服务</strong>。在微服务架构中，每个小服务都拥有独立的进程和轻量级通信。这些服务是围绕业务能力构建的，并且可以通过全自动化部署机制独立部署。这些服务会使用最小规模的集中式管理能力(例如 Docker) ，可以用不同的编程语言编写并使用不同的数据存储技术。</p><p>从以上定义，我们可以提炼出微服务的关键特性：</p><ul><li><strong>可独立运行</strong> - 微服务是一个个可以独立开发、独立部署、独立运行的系统或进程。</li><li><strong>可协同工作</strong> - 微服务之间不是完全隔离的，彼此需要协同工作，通常是采用 RPC 方式。</li><li><strong>分而治之</strong> - 微服务本质上是一种分治思想，即把一个复杂业务拆分为多个子业务。这使得每个子业务更加高内聚、低耦合，从而能聚焦自身的功能。</li></ul><h2 id="微服务的演进" tabindex="-1"><a class="header-anchor" href="#微服务的演进" aria-hidden="true">#</a> 微服务的演进</h2><p>互联网应用架构大致的演进方向为：单体架构 -&gt; 服务化架构 -&gt; 微服务架构。在演化过程中，架构越来越复杂，一个应用被拆分的服务也越来越细。</p><p>互联网早期的技术栈通常为 LAMP（Linux + Apache + MySQL + PHP）或 MVC（Spring + iBatis/Hibernate + Tomcat）。这两种架构都是典型的单体应用架构。其优点是技术栈简单，因此学习上手快，部署也容易。</p><p>随着业务越来越复杂，开发团队规模不断扩张，单体应用架构就难以适应开发迭代节奏，主要有以下问题：</p><ul><li><strong>构建、部署效率低</strong>：代码越多，依赖资源越多，则构建、部署的耗费时间自然会越长。即使每次修改一个很小的功能点，也不得不全量构建、全部部署，耗时耗力。</li><li><strong>团队协作成本高</strong>：单体应用的代码往往在一个工程中，而一个工程中的开发人员越多，显然沟通成本越高。</li><li><strong>可用性差</strong>：因为所有的功能开发最后都部署到同一个 WAR 包里，运行在同一个 Tomcat 进程之中，一旦某一功能涉及的代码或者资源有问题，那就会影响整个 WAR 包中部署的功能。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220627091754.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>服务化：本地方法调用 转为 远程方法调用（RPC）</p><p>微服务和服务化的差异：</p><ul><li>服务拆分粒度更细</li><li>服务独立部署、维护</li><li>服务治理要求高</li></ul><p>微服务架构有以下 4 个特点：</p><ul><li><strong>服务拆分粒度更细</strong>：根据业务拆分。</li><li><strong>独立部署</strong>：每个服务在物理上相互隔离。独立部署的好处在于：如果没有拆分服务，那么任何修改都必须重新部署才能更新；而拆分为多个服务后，只有被修改的服务需要重部署。</li><li><strong>独立维护</strong>：根据组织架构拆分，分团队维护。</li><li><strong>服务治理</strong>：服务数量变多，需要有统一的服务治理平台。</li></ul><p>简单来说，微服务就是将庞杂臃肿的单体应用拆分成细粒度的服务，独立部署，并交给各个中小团队来负责开发、测试、上线和运维整个生命周期。</p><ul><li>通过服务组件化</li><li>独立的进程</li><li>独立部署</li><li>轻量级通信</li><li>基于业务能力</li><li>无集中式管理</li></ul><h2 id="微服务的利弊" tabindex="-1"><a class="header-anchor" href="#微服务的利弊" aria-hidden="true">#</a> 微服务的利弊</h2><p>《人月神话》中有一个软件工程界的著名理论——“没有银弹”，即世间没有能包治百病的良药，也没有能解决所有问题的架构。微服务架构的利和弊都非常突出，在实际业务场景中是否采用，如何采用，需要具体去分析、权衡。</p><p>微服务的利弊如下：</p><ul><li><strong>优点</strong><ul><li>易于扩展</li><li>部署简单</li><li>技术异构性</li></ul></li><li><strong>缺点</strong><ul><li>分布式复杂度</li><li>最终一致性</li><li>测试复杂度</li><li>运维复杂度</li></ul></li></ul><h2 id="康威定律" tabindex="-1"><a class="header-anchor" href="#康威定律" aria-hidden="true">#</a> 康威定律</h2><ul><li>第一定律：组织沟通方式会通过系统设计表达出来</li><li>第二定律：时间再多一件事情也不可能做的完美，但总有时间做完一件事情</li><li>第三定律：线型系统和线型组织架构间有潜在的异质同态特性</li><li>第四定律：大的系统组织总是比小系统更倾向于分解</li></ul><h2 id="如何拆分微服务" tabindex="-1"><a class="header-anchor" href="#如何拆分微服务" aria-hidden="true">#</a> 如何拆分微服务</h2><p>应用微服务化架构前，要思考几个问题：什么时候进行服务化拆分？如何拆分服务？</p><p>一般来说，当应用复杂度、开发团队膨胀到难以维护时，就该考虑服务化拆分了。从经验上来看，一般开发人员超 10 人，就可以考虑服务化拆分了。</p><h3 id="拆分微服务的思考维度" tabindex="-1"><a class="header-anchor" href="#拆分微服务的思考维度" aria-hidden="true">#</a> 拆分微服务的思考维度</h3><p>拆分服务的思考维度：</p><ul><li><strong>业务维度</strong>：业务和数据关系密切的应该拆分为一个微服务，而功能相对比较独立的业务适合单独拆分为一个微服务。</li><li><strong>功能维度</strong>：公共功能聚合为一个服务。标准是是否被多个其他服务调用，且依赖的资源独立不与其他业务耦合。</li><li><strong>组织架构</strong>：根据实际组织架构，天然分为不同的团队，每个团队独立维护若干微服务。</li></ul><p>但并不是说功能拆分的越细越好，过度的拆分反而会让服务数量膨胀变得难以管理，因此找到符合自己业务现状和团队人员技术水平的拆分粒度才是可取的。</p><h3 id="拆分微服务的原则" tabindex="-1"><a class="header-anchor" href="#拆分微服务的原则" aria-hidden="true">#</a> 拆分微服务的原则</h3><ul><li>单一职责 - 高内聚，低耦合</li><li>先粗后细，逐渐细化</li><li>渐进式迭代</li><li>考虑扩展性</li></ul><h3 id="拆分微服务的前置条件" tabindex="-1"><a class="header-anchor" href="#拆分微服务的前置条件" aria-hidden="true">#</a> 拆分微服务的前置条件</h3><p>微服务主要依赖几个基本组件：</p><ul><li><strong>服务如何定义</strong>？ <ul><li>对于单体应用来说，不同功能模块之前相互交互时，通常是以类库的方式来提供各个模块的功能。</li><li>对于微服务来说，每个服务都运行在各自的进程之中，无论采用哪种通讯协议，是 HTTP 还是 RPC，服务之间的调用都<strong>通过接口来约定</strong>如何交互。约定内容包括接口名、接口参数以及接口返回值。</li></ul></li><li><strong>服务如何发布和订阅</strong>？ <ul><li>单体应用由于部署在同一个 WAR 包里，接口之间的调用属于进程内的调用。</li><li>对于微服务来说，服务提供者需要向注册中心发布自己提供的服务（暴露接口信息以及接口地址）；服务消费者向注册中心订阅哪些服务可用。</li></ul></li><li><strong>服务如何监控</strong>？通常对于一个服务，我们最关心的是 QPS（调用量）、AvgTime（平均耗时）以及 P999（99.9% 的请求性能在多少毫秒以内）这些指标。这时候你就需要一种通用的监控方案，能够覆盖业务埋点、数据收集、数据处理，最后到数据展示的全链路功能。</li><li><strong>服务如何治理</strong>？可以想象，拆分为微服务架构后，服务的数量变多了，依赖关系也变复杂了。比如一个服务的性能有问题时，依赖的服务都势必会受到影响。可以设定一个调用性能阈值，如果一段时间内一直超过这个值，那么依赖服务的调用可以直接返回，这就是熔断，也是服务治理最常用的手段之一。</li><li><strong>故障如何定位</strong>？在单体应用拆分为微服务之后，一次用户调用可能依赖多个服务，每个服务又部署在不同的节点上，如果用户调用出现问题，你需要有一种解决方案能够将一次用户请求进行标记，并在多个依赖的服务系统中继续传递，以便串联所有路径，从而进行故障定位。</li></ul><p>应用微服务架构，必须要先解决以上问题。</p><h2 id="服务容量规划" tabindex="-1"><a class="header-anchor" href="#服务容量规划" aria-hidden="true">#</a> 服务容量规划</h2><p>容量规划系统的作用是<strong>根据各个微服务部署集群的最大容量和线上实际运行的负荷，来决定各个微服务是否需要弹性扩缩容，以及需要扩缩容多少台机器</strong>。</p><h3 id="微服务容量规划的挑战" tabindex="-1"><a class="header-anchor" href="#微服务容量规划的挑战" aria-hidden="true">#</a> 微服务容量规划的挑战</h3><p>微服务容量规划的复杂度主要来自以下方面：</p><ul><li>服务数量众多</li><li>服务的接口表现差异巨大</li><li>服务部署的集群规模大小不同</li><li>服务之间还存在依赖关系</li></ul><h3 id="如何评估容量" tabindex="-1"><a class="header-anchor" href="#如何评估容量" aria-hidden="true">#</a> 如何评估容量</h3><p>容量评估需要关注的维度：</p><ul><li><strong>选择合适的压测指标</strong> - 主要有两类 <ul><li><strong>系统类指标</strong> - CPU 使用率、内存占有量、I/O 使用率、网卡带宽等</li><li><strong>服务类指标</strong> - 接口响应的平均耗时、P999 耗时、错误率等</li></ul></li><li><strong>压测获取单机的最大容量</strong><ul><li><strong>单机压测</strong> - 可以采用以下流量回放手段来模拟线上流量： <ul><li>日志回放</li><li>TCP-Copy</li></ul></li><li><strong>集群压测</strong> - 一般做法是通过不断把线上集群的节点摘除，以减少机器数的方式，来增加线上节点单机的流量，从而达到压测的目的。</li></ul></li><li><strong>实时获取集群的运行负荷</strong> - 集群的运行负荷也需要通过采用区间加权的方式来计算，但是因为集群的规模可能很大，超过上千台机器，显然通过计算每台单机运行的负荷再加在一起的方式效率不高。一种参考方式是：统计每台单机在不同耗时区间内的请求数，推送到集中处理的地方进行聚合，将同一个集群内的单机位于不同耗时区间内的请求进行汇总，就得到整个集群的请求在不同耗时区间内的分布了，再利用区间加权的方式就可以计算整个集群的运行负荷。</li></ul><h3 id="如何伸缩容量" tabindex="-1"><a class="header-anchor" href="#如何伸缩容量" aria-hidden="true">#</a> 如何伸缩容量</h3><p>伸缩容量的一种参考方式是<strong>使用水位线来决策扩容或是缩容</strong>。<strong>水位线</strong>就是集群的最大容量除以集群的实际运行负荷，可以实时监控集群的水位线。</p><p>通常，可以为集群监控设置两条水位线：一条是安全线，一条是致命线。当集群的水位线位于致命线以下时，就需要立即<strong>扩容</strong>；在扩容一定数量的机器后，水位线回到安全线以上并保持一段时间后，就可以进行<strong>缩容</strong>了。</p><ul><li><strong>扩容</strong> - 扩容有两种方式：按数量、按比例（更常见做法）。</li><li><strong>缩容</strong> - 为了避免抖动，缩容不应该一次性完成，而应该按比例逐步完成。过程中，应该多次采集水位线，满足一定比例才继续缩容。</li></ul><h2 id="微服务的核心组件" tabindex="-1"><a class="header-anchor" href="#微服务的核心组件" aria-hidden="true">#</a> 微服务的核心组件</h2><p>微服务架构下，服务调用主要依赖下面几个核心组件：</p><ul><li>服务定义</li><li>注册中心</li><li>服务调用</li><li>服务监控</li><li>服务治理</li></ul><h3 id="服务定义" tabindex="-1"><a class="header-anchor" href="#服务定义" aria-hidden="true">#</a> 服务定义</h3><p>服务调用首先要解决的问题就是服务如何对外描述。比如，你对外提供了一个服务，那么这个服务的服务名叫什么？调用这个服务需要提供哪些信息？调用这个服务返回的结果是什么格式的？该如何解析？这些就是服务定义要解决的问题。</p><p>常用的服务定义方式包括 REST API、XML 配置以及 IDL 文件三种。</p>',53),f=i("strong",null,"REST API",-1),_={href:"http://swagger.io",target:"_blank",rel:"noopener noreferrer"},b=i("li",null,[i("strong",null,"XML"),l(" - XML 配置方式多用作 RPC 协议的服务定义，通过 "),i("code",null,"*.xml"),l(" 配置文件来定义接口名、参数以及返回值类型等。")],-1),m=i("li",null,[i("strong",null,"IDL"),l(" - IDL 文件方式通常用作 Thrift 和 gRPC 这类跨语言服务调用框架中，比如 gRPC 就是通过 Protobuf 文件来定义服务的接口名、参数以及返回值的数据结构。")],-1),x=n('<h3 id="注册中心" tabindex="-1"><a class="header-anchor" href="#注册中心" aria-hidden="true">#</a> 注册中心</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220415171843.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>有了服务的接口描述，下一步要解决的问题就是服务的发布和订阅，就是说你提供了一个服务，如何让外部想调用你的服务的人知道。这个时候就需要一个类似注册中心的角色，服务提供者将自己提供的服务以及地址登记到注册中心，服务消费者则从注册中心查询所需要调用的服务的地址，然后发起请求。</p><p>一般来讲，注册中心的工作流程是：</p><ul><li>服务提供者在启动时，根据服务发布文件中配置的发布信息向注册中心注册自己的服务。</li><li>服务消费者在启动时，根据消费者配置文件中配置的服务信息向注册中心订阅自己所需要的服务。</li><li>注册中心返回服务提供者地址列表给服务消费者。</li><li>当服务提供者发生变化，比如有节点新增或者销毁，注册中心将变更通知给服务消费者。</li></ul><h3 id="服务调用" tabindex="-1"><a class="header-anchor" href="#服务调用" aria-hidden="true">#</a> 服务调用</h3><p>服务消费者发起调用需解决以下问题：</p><ul><li><strong>服务通信</strong>采用什么协议？就是说服务提供者和服务消费者之间以什么样的协议进行网络通信，是采用四层 TCP、UDP 协议，还是采用七层 HTTP 协议，还是采用其他协议？</li><li><strong>数据传输</strong>采用什么方式？就是说服务提供者和服务消费者之间的数据传输采用哪种方式，是同步还是异步，是在单连接上传输，还是多路复用。</li><li><strong>序列化</strong>采用什么方式？通常数据传输都会对数据进行序列化、压缩，来减少网络传输的数据量，从而减少带宽消耗和网络传输时间，比如常见的 JSON 序列化、Java 对象序列化以及 Protobuf 序列化等。</li></ul><h3 id="服务监控" tabindex="-1"><a class="header-anchor" href="#服务监控" aria-hidden="true">#</a> 服务监控</h3><p>一旦服务消费者与服务提供者之间能够正常发起服务调用，你就需要对调用情况进行监控，以了解服务是否正常。通常来讲，服务监控主要包括三个流程。</p><ul><li><strong>数据收集</strong>。就是要把每一次服务调用的请求耗时以及成功与否收集起来，并上传到集中的数据处理中心。</li><li><strong>数据处理</strong>。有了每次调用的请求耗时以及成功与否等信息，就可以计算每秒服务请求量、平均耗时以及成功率等指标。</li><li><strong>数据展示</strong>。数据收集起来，经过处理之后，还需要以友好的方式对外展示，才能发挥价值。通常都是将数据展示在 Dashboard 面板上，并且每隔 10s 等间隔自动刷新，用作业务监控和报警等。</li></ul><p>除了需要对服务调用情况进行监控之外，你还需要记录服务调用经过的每一层链路，以便进行问题追踪和故障定位。</p><p>服务链路追踪的工作原理大致如下：</p><ul><li>服务消费者发起调用前，会在本地按照一定的规则生成一个 <code>requestid</code>，发起调用时，将 <code>requestid</code> 当作请求参数的一部分，传递给服务提供者。</li><li>服务提供者接收到请求后，记录下这次请求的 <code>requestid</code>，然后处理请求。如果服务提供者继续请求其他服务，会在本地再生成一个自己的 <code>requestid</code>，然后把这两个 <code>requestid</code> 都当作请求参数继续往下传递。</li></ul><p>以此类推，通过这种层层往下传递的方式，一次请求，无论最后依赖多少次服务调用、经过多少服务节点，都可以通过最开始生成的 <code>requestid</code> 串联所有节点，从而达到服务追踪的目的。</p><h3 id="服务治理" tabindex="-1"><a class="header-anchor" href="#服务治理" aria-hidden="true">#</a> 服务治理</h3><p>服务监控能够发现问题，服务追踪能够定位问题所在，而解决问题就得靠服务治理了。服务治理就是通过一系列的手段来保证在各种意外情况下，服务调用仍然能够正常进行。</p><p>在生产环境中，你应该经常会遇到下面几种状况。</p><ul><li>单机故障。通常遇到单机故障，都是靠运维发现并重启服务或者从线上摘除故障节点。然而集群的规模越大，越是容易遇到单机故障，在机器规模超过一百台以上时，靠传统的人肉运维显然难以应对。而服务治理可以通过一定的策略，自动摘除故障节点，不需要人为干预，就能保证单机故障不会影响业务。</li><li>单 IDC 故障。你应该经常听说某某 App，因为施工挖断光缆导致大批量用户无法使用的严重故障。而服务治理可以通过自动切换故障 IDC 的流量到其他正常 IDC，可以避免因为单 IDC 故障引起的大批量业务受影响。</li><li>依赖服务不可用。比如你的服务依赖依赖了另一个服务，当另一个服务出现问题时，会拖慢甚至拖垮你的服务。而服务治理可以通过熔断，在依赖服务异常的情况下，一段时期内停止发起调用而直接返回。这样一方面保证了服务消费者能够不被拖垮，另一方面也给服务提供者减少压力，使其能够尽快恢复。</li></ul><p>上面是三种最常见的需要引入服务治理的场景，当然还有一些其他服务治理的手段比如自动扩缩容，可以用来解决服务的容量问题。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',21),P={href:"https://time.geekbang.org/column/intro/100014401",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.martinfowler.com/articles/microservices.html",target:"_blank",rel:"noopener noreferrer"};function T(C,k){const r=o("ExternalLinkIcon");return a(),s("div",null,[h,i("blockquote",null,[c,g,i("p",null,[l("——Martin Fowler 和 James Lewis 对应微服务（ "),i("a",u,[l("Microservices"),e(r)]),l("）的定义")])]),p,i("ul",null,[i("li",null,[f,l(" - REST API 方式通常用于 HTTP 协议的服务定义，并且常用 Wiki 或者"),i("a",_,[l("Swagger"),e(r)]),l("来进行管理。")]),b,m]),x,i("ul",null,[i("li",null,[i("a",P,[l("从 0 开始学微服务"),e(r)])]),i("li",null,[i("a",w,[l("Microservices"),e(r)]),l(" - Martin Fowler 与 James Lewis 对微服务的定义")])])])}const R=t(d,[["render",T],["__file","01.微服务简介.html.vue"]]);export{R as default};
