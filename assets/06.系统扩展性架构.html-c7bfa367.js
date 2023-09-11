import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,c as n,a as i,b as t,d as h,e as s}from"./app-64c8372a.js";const o={},d=s('<h1 id="系统扩展性架构" tabindex="-1"><a class="header-anchor" href="#系统扩展性架构" aria-hidden="true">#</a> 系统扩展性架构</h1><blockquote><p>扩展性和伸缩性是不同的概念：</p><ul><li><strong>扩展性（Extensibility）</strong> - 指对现有系统影响最小的情况下，系统功能可持续扩展或提升的能力。表现在系统基础设施稳定不需要经常变更，应用之间较少依赖和耦合，对需求变更可以敏捷响应。它是系统架构设计层面的开闭原则（对扩展开放、对修改关闭），架构设计考虑未来功能扩展，当系统增加新功能时，不需要对现有系统的结构和代码进行修改。</li><li><strong>伸缩性（Scalability）</strong> - 指系统能够通过增加减少自身资源规模的方式增减自己计算处理事务的能力。如果这种增减是成比例的，就被称作线性伸缩性。在网站架构中 ，通常指利用集群的方式增加服务器数量、提高系统的整体事务吞吐能力。</li></ul></blockquote><h2 id="可扩展的基本思想" tabindex="-1"><a class="header-anchor" href="#可扩展的基本思想" aria-hidden="true">#</a> 可扩展的基本思想</h2><ul><li>面向流程拆分：将整个业务流程拆分为几个阶段，每个阶段作为一部分。</li><li>面向服务拆分：将系统提供的服务拆分，每个服务作为一部分。</li><li>面向功能拆分：将系统提供的功能拆分，每个功能作为一部分。</li></ul><h2 id="可扩展方式" tabindex="-1"><a class="header-anchor" href="#可扩展方式" aria-hidden="true">#</a> 可扩展方式</h2><p>典型的可扩展系统架构有：</p><ul><li>面向流程拆分：分层架构。</li><li>面向服务拆分：SOA、微服务。</li><li>面向功能拆分：微内核架构。</li></ul><h3 id="分层架构" tabindex="-1"><a class="header-anchor" href="#分层架构" aria-hidden="true">#</a> 分层架构</h3><p>分层架构的核心点时：<strong>需要保证各层之间的差异足够清晰，边界足够明显，让人看到架构图后就能看懂整个架构</strong></p><p>分层架构是很常见的架构模式，它也叫 N 层架构，通常情况下，N 至少是 2 层。例如，C/S 架构、B/S 架构。常见的是 3 层架构（例如，MVC、MVP 架构）、4 层架构，5 层架构的比较少见，一般是比较复杂的系统才会达到或者超过 5 层，比如操作系统内核架构。</p><p>典型分层架构：</p><ul><li>C/S 架构、B/S 架构</li><li>MVC 架构、MVP 架构</li><li>逻辑分层架构</li></ul><h3 id="soa" tabindex="-1"><a class="header-anchor" href="#soa" aria-hidden="true">#</a> SOA</h3><p>SOA 的全称是 Service Oriented Architecture，即“面向服务的架构”。</p><p>SOA 提出了 3 个关键概念。</p><ul><li><strong>服务</strong> - 所有业务功能都是一项服务，服务就意味着要对外提供开放的能力，当其他系统需要使用这项功能时，无须定制化开发。</li><li><strong>ESB</strong> - ESB 的全称是 Enterprise Service Bus，即 “企业服务总线”。ESB 将企业中各个不同的服务连接在一起。因为各个独立的服务是异构的，如果没有统一的标准，则各个异构系统对外提供的接口是各式各样的。SOA 使用 ESB 来屏蔽异构系统对外提供各种不同的接口方式，以此来达到服务间高效的互联互通。</li><li><strong>松耦合</strong> - 松耦合的目的是减少各个服务间的依赖和互相影响。因为采用 SOA 架构后，各个服务是相互独立运行的，甚至都不清楚某个服务到底有多少对其他服务的依赖。如果做不到松耦合，某个服务一升级，依赖它的其他服务全部故障，这样肯定是无法满足业务需求的。</li></ul><h3 id="微服务" tabindex="-1"><a class="header-anchor" href="#微服务" aria-hidden="true">#</a> 微服务</h3><p>微服务是去掉 ESB 后的 SOA。</p><p>微服务的问题：</p><ul><li><strong>服务划分过细，服务间关系复杂</strong> - 服务划分过细，单个服务的复杂度确实下降了，但整个系统的复杂度却上升了，因为微服务将系统内的复杂度转移为系统间的复杂度了。</li><li>服务数量太多，团队效率急剧下降</li><li>调用链太长，性能下降</li><li>调用链太长，问题定位困难</li><li>没有自动化支撑，无法快速交付</li><li>没有服务治理，微服务数量多了后管理混乱</li></ul><p>微服务拆分：</p><ul><li><strong>基于业务逻辑拆分</strong></li><li><strong>基于可扩展拆分</strong> - 将已经成熟和改动不大的服务拆分为<strong>稳定服务</strong>，将经常变化和迭代的服务拆分为<strong>变动服务</strong>。</li><li><strong>基于可靠性拆分</strong> - 将系统中的业务模块按照优先级排序，将可靠性要求高的核心服务和可靠性要求低的非核心服务拆分开来，然后重点保证核心服务的高可用。</li></ul><p>基础设施：</p><ul><li>服务发现、服务路由、服务容错：这是最基本的微服务基础设施。</li><li>接口框架、API 网关：主要是为了提升开发效率，接口框架是提升内部服务的开发效率，API 网关是为了提升与外部服务对接的效率。</li><li>自动化部署、自动化测试、配置中心：主要是为了提升测试和运维效率。</li><li>服务监控、服务跟踪、服务安全：主要是为了进一步提升运维效率。</li></ul><h3 id="微内核" tabindex="-1"><a class="header-anchor" href="#微内核" aria-hidden="true">#</a> 微内核</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220429183229.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>微内核的核心系统设计的关键技术有：插件管理、插件连接和插件通信。</p><p>插件管理</p><p>核心系统需要知道当前有哪些插件可用，如何加载这些插件，什么时候加载插件。常见的实现方法是插件注册表机制。核心系统提供插件注册表（可以是配置文件，也可以是代码，还可以是数据库），插件注册表含有每个插件模块的信息，包括它的名字、位置、加载时机（启动就加载，还是按需加载）等。</p><p>插件连接</p><p>插件连接指插件如何连接到核心系统。通常来说，核心系统必须制定插件和核心系统的连接规范，然后插件按照规范实现，核心系统按照规范加载即可。</p><p>常见的连接机制有 OSGi（Eclipse 使用）、消息模式、依赖注入（Spring 使用），甚至使用分布式的协议都是可以的，比如 RPC 或者 HTTP Web 的方式。</p><p>插件通信</p><p>插件通信指插件间的通信。虽然设计的时候插件间是完全解耦的，但实际业务运行过程中，必然会出现某个业务流程需要多个插件协作，这就要求两个插件间进行通信。由于插件之间没有直接联系，通信必须通过核心系统，因此核心系统需要提供插件通信机制。这种情况和计算机类似，计算机的 CPU、硬盘、内存、网卡是独立设计的配件，但计算机运行过程中，CPU 和内存、内存和硬盘肯定是有通信的，计算机通过主板上的总线提供了这些组件之间的通信功能。微内核的核心系统也必须提供类似的通信机制，各个插件之间才能进行正常的通信。</p><h2 id="易扩展的系统架构" tabindex="-1"><a class="header-anchor" href="#易扩展的系统架构" aria-hidden="true">#</a> 易扩展的系统架构</h2><blockquote><p><strong>低耦合的系统更容易扩展、复用</strong>。</p></blockquote><p><strong>可扩展架构的核心思想是模块化，并在此基础上，降低模块间的耦合性，提高模块的复用性</strong>。</p><p>分层和分割不仅可以进行架构伸缩，也是模块化设计的重要手段，利用分层和分割的方式将软件分割为若干个低耦合的独立的组件模块，这些组件模块以消息传递及依赖调用的方式聚合成一个完整的系统。</p><p>在大型网站中，这些模块通过分布式部署的方式，独立的模块部署在独立的服务器上，从物理上分离模块间的耦合关系，进一步降低耦合性提高复用性。</p><h2 id="利用分布式消息队列降低系统耦合性" tabindex="-1"><a class="header-anchor" href="#利用分布式消息队列降低系统耦合性" aria-hidden="true">#</a> 利用分布式消息队列降低系统耦合性</h2><h3 id="事件驱动架构" tabindex="-1"><a class="header-anchor" href="#事件驱动架构" aria-hidden="true">#</a> 事件驱动架构</h3><p><strong>事件驱动架构通过在低耦合的模块间传输事件消息，以保持模块的松散耦合，并借助事件消息的通信完成模块间合作</strong>。典型的事件驱动架构就是操作系统中常见的生产者消费者模式。在大型网站中，最常见的实现手段就是分布式消息队列。</p><h3 id="分布式消息队列" tabindex="-1"><a class="header-anchor" href="#分布式消息队列" aria-hidden="true">#</a> 分布式消息队列</h3><p>消息生产者应用程序通过远程访问接口将消息推送给消息队列服务器，消息队列服务器将消息写入本地内存队列后立即返回成功响应给消息生产者。消息队列服务器根据消息订阅列表查找订阅该消息的消息消费者应用程序，将消息队列中的消息按照先进先出（FIFO）的原则将消息通过远程通信接口发送给消息消费者程序。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/architecture/分布式消息队列架构原理.png"></div><p>在伸缩性方面，由于消息队列服务器上的数据可以看作是即时处理的，因此类似于无状态的服务器，伸缩性设计比较简单。将新服务器加入分布式消息队列集群中，通知生产者服务器更改消息队列服务器列表即可。</p><p>在可用性方面，为了避免消费者进程处理缓慢，分布式消息队列服务器内存空间不足造成的问题，如果内存队列已满，会将消息写入磁盘，消息推送模块在将内存队列消息处理完成以后，将磁盘内容加载到内存队列继续处理。</p><h2 id="利用分布式服务打造可复用的业务平台" tabindex="-1"><a class="header-anchor" href="#利用分布式服务打造可复用的业务平台" aria-hidden="true">#</a> 利用分布式服务打造可复用的业务平台</h2><p>巨无霸系统的问题：</p><ul><li>构建、部署困难</li><li>代码分支管理困难</li><li>数据库连接耗尽</li><li>扩展业务困难</li></ul><p>而解决巨无霸系统问题的方案就是拆分：</p><ul><li>通过纵向拆分将业务拆分多个应用或模块；</li><li>通过横向拆分将可复用业务作为独立应用。</li></ul><p>然后，需要通过一个分布式服务管理框架将这些应用或服务组织管理起来：通过接口分解系统耦合性，不同子系统通过相同的接口描述进行服务调用。常见的分布式服务管理框架如：Spring Cloud、Dubbo 等。</p><p>大型网站分布式服务的需求与特点：</p><ul><li>负载均衡</li><li>失效转移</li><li>高效的远程通信</li><li>整合异构系统</li><li>对应用最少侵入</li><li>版本管理</li><li>实时监控</li></ul><h2 id="可扩展的数据结构" tabindex="-1"><a class="header-anchor" href="#可扩展的数据结构" aria-hidden="true">#</a> 可扩展的数据结构</h2><p>传统的关系型数据库为了保证关系运算的正确性，在设计数据库表结构的时候，就需要指定表的 schema ——字段名称，数据类型等，并要遵循特定的设计范式。这些规范带来一个问题：难以面对需求变更带来的挑战，所以有人通过预先设计一些冗余字段来应对。</p><p>许多 NoSql 数据库使用 ColumnFamily 设计来设计可扩展的数据结构。</p><h2 id="开放平台" tabindex="-1"><a class="header-anchor" href="#开放平台" aria-hidden="true">#</a> 开放平台</h2><p>很多大公司会利用开放平台提供大量开放性 API 使得企业和个人可以方便的接入业务。通过开放平台，可以构建生态圈，提升品牌价值以及竞争力。</p><p>开放平台不是一朝一夕完成的，这需要大量 OPEN API 的沉淀。系统架构在设计之初，应该有意识的将未来可能被复用的接口好好设计，以便于需要开放 OPEN API 时，可以便捷的暴露服务接口。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',62),p={href:"https://item.jd.com/11322972.html",target:"_blank",rel:"noopener noreferrer"};function c(u,g){const e=l("ExternalLinkIcon");return r(),n("div",null,[d,i("ul",null,[i("li",null,[i("a",p,[t("《大型网站技术架构：核心原理与案例分析》"),h(e)])])])])}const _=a(o,[["render",c],["__file","06.系统扩展性架构.html.vue"]]);export{_ as default};
