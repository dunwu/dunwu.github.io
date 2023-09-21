import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as n,c as r,a as i,b as g,d as s,e as p}from"./app-2f2b7333.js";const l={},u=p('<h1 id="《架构实战案例解析》笔记" tabindex="-1"><a class="header-anchor" href="#《架构实战案例解析》笔记" aria-hidden="true">#</a> 《架构实战案例解析》笔记</h1><h2 id="架构的本质-如何打造一个有序的系统" tabindex="-1"><a class="header-anchor" href="#架构的本质-如何打造一个有序的系统" aria-hidden="true">#</a> 架构的本质：如何打造一个有序的系统？</h2><p>架构的本质：<strong>通过合理的内部编排，保证系统高度有序，能够不断扩展，满足业务和技术的变化</strong>。</p><ul><li><p>首先，架构的出发点是业务和技术在不断复杂化，引起系统混乱，需要通过架构来保证有序。</p></li><li><p>其次，架构实现从无序到有序，是通过合理的内部编排实现的，基本的手段，就是“分”与“合”，先把系统打散，然后将它们重新组合，形成更合理的关系。</p><ul><li>“分”就是把系统拆分为各个子系统、模块、组件</li><li>“合”就是基于业务流程和技术手段，把各个组件有机整合在一起</li></ul></li></ul><p><strong>架构的分类</strong></p><ul><li>业务架构</li><li>应用架构</li><li>技术架构</li></ul><p><strong>什么是好架构？</strong></p><ul><li>一个好的架构设计既要满足业务的可扩展、可复用；</li><li>也要满足系统的高可用、高性能和可伸缩，并尽量采用低成本的方式落地。</li></ul><p><strong>架构师的自我修养</strong></p><ul><li>优秀的程序员</li><li>沟通交流（感性）</li><li>权衡取舍（理性）</li><li>多领域知识（技术的广度）</li><li>技术前瞻性（技术的深度）</li><li>看透问题本质（思维的深度）</li><li>抽象思维（思维的高度）</li></ul><h2 id="业务架构-作为开发-你真的了解业务吗" tabindex="-1"><a class="header-anchor" href="#业务架构-作为开发-你真的了解业务吗" aria-hidden="true">#</a> 业务架构：作为开发，你真的了解业务吗？</h2><p>从架构角度看，业务架构是源头，然后才是技术架构。</p><p><strong>业务架构师和产品经理有什么区别？</strong></p><ul><li><strong>产品经理定义了系统的外观</strong><ul><li>告诉用户，系统长什么样子</li><li>告诉开发，要实现什么功能</li></ul></li><li><strong>架构师将业务抽象为结构化的模块体系</strong><ul><li>把业务流程拆分，按照业务域的维度来划分系统模块。</li><li>并定义这些模块之间的关系，最终形成一个高度结构化的模块体系。</li></ul></li></ul><h3 id="架构目标之业务的可扩展" tabindex="-1"><a class="header-anchor" href="#架构目标之业务的可扩展" aria-hidden="true">#</a> 架构目标之业务的可扩展</h3><p><strong>业务的主题是变化和创新，系统的主题是稳定和可靠</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220630230555.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="架构目标之业务的可复用" tabindex="-1"><a class="header-anchor" href="#架构目标之业务的可复用" aria-hidden="true">#</a> 架构目标之业务的可复用</h3><p>业务架构设计如何实现业务的可复用呢</p><p>首先，<strong>模块的职责定位要非常清晰</strong>。对于模块来说，在定位范围内的职责要全部涵盖到，而不在这个范围的职责全部不要。</p><p>其次，<strong>模块的数据模型和接口设计要保证通用</strong>。架构师需要归纳业务场景，通过抽象提炼，形成通用化的设计，以此来满足多个类似场景的需求。</p><p>最后，<strong>实现模块的高复用，还需要做好业务的层次划分</strong>。我们知道，越是底层的业务，它就相对更固定。举个例子，同样是订单业务域，对于底层订单的增删改查功能，不同类型的订单都是一样的，但对于上层的订单生命周期管理，外卖订单和堂食订单可能就不一样。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220630231612.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="可扩展架构-如何打造一个善变的柔性系统" tabindex="-1"><a class="header-anchor" href="#可扩展架构-如何打造一个善变的柔性系统" aria-hidden="true">#</a> 可扩展架构：如何打造一个善变的柔性系统？</h2><p>系统的构成：模块 + 关系</p><p>模块是系统的基本组成部分，它泛指子系统、应用、服务或功能模块。关系指模块之间的依赖关系。</p><p>模块的要求：</p><ul><li>定位明确，概念完整</li><li>自成体系，粒度适中</li></ul><p>依赖关系的要求：</p><ul><li>最好是单向的</li><li>最好是层次化结构</li></ul><p>模块的业务逻辑尽量围绕自身内部数据进行处理，对外部依赖越小，模块的封装性越好，稳定性也越强，不会随着外部模块的调整而调整。</p><p>业务架构扩展性的本质是：通过构建合理的模块体系，有效地控制系统复杂度，最小化业务变化引起的系统调整。</p><p>那如何打造一个合理的模块体系呢？具体的架构手段就是按照业务对系统进行拆分和整合：<br> 通过拆分，实现模块划分；通过整合，优化模块依赖关系。</p><p>通过模块通用化，模块的数量减少了，模块的定位更清晰，概念更完整，职责更聚焦。在实<br> 践中，当不同业务线对某个功能需求比较类似时，我们经常会使用这个手段。</p><p>通过拆分，实现模块划分；通过整合，优化模块依赖关系。</p><p>一般做业务架构时，我们先考虑垂直拆分，从大方向上，把不同业务给区分清楚，然后再针对具体业务，按照业务处理流程进行水平拆分</p><p>业务平台化是模块依赖关系层次化的一个特例，只是它偏向于基础能力，在实践中，当业务<br> 线很多，业务规则很复杂时，我们经常把底层业务能力抽取出来，进行平台化处理。</p><h2 id="可扩展架构案例-一-电商平台架构是如何演变的" tabindex="-1"><a class="header-anchor" href="#可扩展架构案例-一-电商平台架构是如何演变的" aria-hidden="true">#</a> 可扩展架构案例（一）：电商平台架构是如何演变的？</h2><p>电商平台架构发展的大致过程：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220701065653.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="单体架构" tabindex="-1"><a class="header-anchor" href="#单体架构" aria-hidden="true">#</a> 单体架构</h3><p>在单体架构中，只有一个应用，所有代码跑在一个进程，所有的表放在一个 DB 里。</p><p>单体应用内部一般采用分层结构，从上到下，一般分为表示层、业务层、数据访问层、DB 层。表示层负责用户体验，业务层负责业务逻辑，数据访问层负责 DB 的数据存取。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220701065747.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="分布式架构" tabindex="-1"><a class="header-anchor" href="#分布式架构" aria-hidden="true">#</a> 分布式架构</h3><p>分布式架构，简单来说就是系统由多个独立的应用组成，它们互相协作，成为一个整体。</p><p>分布式架构包括了多个应用，每个应用分别负责不同的业务线，当一个应用需要另一个应用的功能时，会通过 API 接口进行调用。在分布式架构中，API 接口属于应用的一部分，它和表示层共享底层的业务逻辑。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220701070033.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>分布式架构适用于业务相关性低、耦合少的业务系统。</p><h3 id="soa-架构" tabindex="-1"><a class="header-anchor" href="#soa-架构" aria-hidden="true">#</a> SOA 架构</h3><p>SOA 架构（Service Oriented Architecture）是一种面向服务的架构，它的发展经历了两个阶段：传统的 SOA 架构，它解决的是企业内部大量异构系统集成的问题；新的 SOA 架构，它解决的是系统重复建设的问题。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220701070410.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在 SOA 架构中，每个服务都对应一个现有的系统，所有这些服务都部署在一个中心化的平台上，我们称之为企业服务总线 ESB（Enterprise Service Bus），ESB 负责管理所有调用过程的技术复杂性，包括服务的注册和路由、各种通信协议的支持等等。</p><h3 id="微服务架构" tabindex="-1"><a class="header-anchor" href="#微服务架构" aria-hidden="true">#</a> 微服务架构</h3><p>微服务强调围绕业务，进行清晰的业务和数据边界划分，并通过良好定义的接口输出业务能力，这和 SOA 架构里的服务有点类似。但两者不同的地方在于，微服务是去中心化的，不需要 SOA 架构中 ESB 的集中管理方式。</p><p>一方面，微服务强调所谓的哑管道，即客户端可以通过 HTTP 等简单的技术手段，访问微服务，避免重的通信协议和数据编码支持。另一方面，微服务强调智能终端，所有的业务逻辑包含在微服务内部，不需要额外的中间层提供业务规则处理。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220701070749.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="可扩展架构案例-二-app-服务端架构是如何升级的" tabindex="-1"><a class="header-anchor" href="#可扩展架构案例-二-app-服务端架构是如何升级的" aria-hidden="true">#</a> 可扩展架构案例（二）：App 服务端架构是如何升级的？</h2><h3 id="v1-0-架构" tabindex="-1"><a class="header-anchor" href="#v1-0-架构" aria-hidden="true">#</a> V1.0 架构</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220701071239.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>问题：</p><ul><li>移动服务端对 Jar 包的紧密依赖</li><li>移动团队的职责过分复杂</li><li>团队并行开发困难</li></ul><h3 id="v2-0-架构" tabindex="-1"><a class="header-anchor" href="#v2-0-架构" aria-hidden="true">#</a> V2.0 架构</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220701071257.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>问题：</p><ul><li>移动端和 PC 端互相干扰</li><li>重复造轮子</li><li>稳定性较差</li></ul><h3 id="v3-0-架构" tabindex="-1"><a class="header-anchor" href="#v3-0-架构" aria-hidden="true">#</a> V3.0 架构</h3><p>首先，我们对每个业务线的服务端进行拆分，让 App 接口和 PC 端接口各自在物理上独立，但它们共享核心的业务逻辑。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220701071719.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="移动网关的内部实现" tabindex="-1"><a class="header-anchor" href="#移动网关的内部实现" aria-hidden="true">#</a> 移动网关的内部实现</h4><ul><li><strong>通用层</strong><ul><li>首先是通用层，它负责所有系统级功能的处理，比如通讯协议适配、安全、监控、日志等等，这些功能统一由网关的通用层进行预处理，避免了各个业务线的重复开发。</li><li>在具体实现时，每个通用功能的处理逻辑都会封装成一个拦截器，这些拦截器遵循统一的接口定义，并且拦截器都是可配置的。当有外部请求过来，网关会依次调用这些拦截器，完成各个系统级功能的处理。</li></ul></li><li><strong>接口路由层</strong><ul><li>移动端请求经过通用层的预处理之后，将会进一步分发给后端的业务适配器进行处理。</li><li>在配置文件里，对接口请求的 URL 和业务适配器进行映射，接口路由层的分发逻辑就是根据请求中的 URL，在配置文件里找到对应的适配器，然后把请求交给适配器进行后续的处理。</li></ul></li><li><strong>服务适配层</strong><ul><li>适配器首先用来解决内外部接口的适配，除此之外，适配器还可以根据需要，对多个内部服<br> 务做业务聚合，这样可以对 App 前端提供粗粒度的接口服务，减少远程网络的调用次数。</li></ul></li></ul><h2 id="可扩展架构案例-三-你真的需要一个中台吗" tabindex="-1"><a class="header-anchor" href="#可扩展架构案例-三-你真的需要一个中台吗" aria-hidden="true">#</a> 可扩展架构案例（三）：你真的需要一个中台吗？</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220701072503.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>前台：面向 C 端的应用。前台对外</p><p>后台：企业内部系统。后台对内</p><p>中台：通过实现基础业务的平台化，实现了企业级业务能力的快速复用</p><h3 id="中台的适用性" tabindex="-1"><a class="header-anchor" href="#中台的适用性" aria-hidden="true">#</a> 中台的适用性</h3><p>第一种是独立地建设新业务线，这样，各个业务线并列，系统整体上是一个“川”字型的结构</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220701152539.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>第二种做法是，把各业务线中相同的核心逻辑抽取出来，通过抽象设计，实现通用化，共同服务于所有业务线的需求，系统结构整体上是一个“山”字型。这样，我们就能一处建设，多处复用，一处修改，多处变化，从而实现最大程度的复用。</p><p>何时从“川”字型转为“山”字形呢？</p><ul><li>一方面，这和公司业务线的数量有关，业务线越多，意味着重复建设的成本会更大，当我们开始上第 3 条业务线时，就应该要考虑转到“山”字形了。</li><li>另一方面，也和各个业务线的相似度有关，相似度越高，意味着业务线之间有更多类似的逻辑，更适合“山”字形。</li></ul><p>中台实现了通用基础业务的平台化。从变化速度来看，企业基础的业务是相对固定的，而具体上层业务场景是相对多变的；从数量来看，基础业务数量是有限的，而具体业务场景是无限的。因此，有了完善的中台，我们就可以通过有限而比较固定的基础业务，来满足无限而快速变化的上层业务场景了。</p><p>从业务角度来看，中台收敛了业务场景，统一了业务规则；从系统角度看，中台相当于操作系统，对外提供标准接口，屏蔽了底层系统的复杂性；从数据角度看，中台收敛了数据，比如使用同一套订单数据模型，让所有渠道的订单使用相同的订单模型，所有订单数据落到同一个订单库。</p><p>中台通过实现基础业务的平台化，实现了企业级业务能力的快速复用。</p><p>松散的微服务 -&gt; 共享服务体系 -&gt; 中台</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220701153820.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>传统企业中台架构设计</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220701153933.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>中台代表了企业核心的业务能力，它自成体系，能够为 C 端的互联网场景提供通用的能力，并通过各种插件和后台打通。</p><p>对于互联网企业来说，有大量微服务做基础，往中台转是改良，目的是更好地衔接前台和后台，实现业务的快速创新；<br> 对于传统企业来说，内部有大量的遗留系统，落地中台是革命，目的是盘活老系统，全面实现企业的数字化转型。</p><h2 id="可复用架构-如何实现高层次的复用" tabindex="-1"><a class="header-anchor" href="#可复用架构-如何实现高层次的复用" aria-hidden="true">#</a> 可复用架构：如何实现高层次的复用？</h2><p>从复用的程度来看，从高到低，我们可以依次划分为产品复用 &gt; 业务流程复用 &gt; 业务实体复用 &gt; 组件复用 &gt; 代码复用。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220701154211.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>技术复用：代码级复用和技术组件复用都属于工具层面，它们的好处是在很多地方都可以用，但和业务场景隔得有点远，不直接对应业务功能，因此复用的价值相对比较低。</p><p>业务复用</p><ul><li>业务实体复用针对细分的业务领域</li><li>业务流程的复用针对的是业务场景</li><li>最高层次的复用是对整个系统的复用</li></ul><h2 id="可复用架构案例-一-如何设计一个基础服务" tabindex="-1"><a class="header-anchor" href="#可复用架构案例-一-如何设计一个基础服务" aria-hidden="true">#</a> 可复用架构案例（一）：如何设计一个基础服务？</h2><p>对于落地一个共享服务来说，服务边界的划分和功能的抽象设计是核心。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220701160043.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220701160116.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="可复用架构案例-二-如何对现有系统做微服务改造" tabindex="-1"><a class="header-anchor" href="#可复用架构案例-二-如何对现有系统做微服务改造" aria-hidden="true">#</a> 可复用架构案例（二）：如何对现有系统做微服务改造？</h2><p>圈表：圈表就是用来确定库存微服务具体包含哪些表，也就是确定服务的数据模型。</p><p>收集 SQL：收集所有业务系统访问这些表的 SQL 语句，包括它的业务场景说明、访问频率等等。库存微服务后续就针对这些 SQL 进行封装，提供相应的接口给业务系统使用。</p><p>拆分 SQL：有些 SQL 不仅仅访问圈定的这几张库存表，还会和产品库中的其他表进行关联。</p><h2 id="可复用架构案例-三-中台是如何炼成的" tabindex="-1"><a class="header-anchor" href="#可复用架构案例-三-中台是如何炼成的" aria-hidden="true">#</a> 可复用架构案例（三）：中台是如何炼成的？</h2><ol><li>业务上有什么重大变化，导致当前系统的弊端已经很明显，不能适应业务发展了呢？</li><li>架构改造时，如何在业务、系统、资源三者之间做好平衡，对系统进行分步式的改造呢？</li></ol><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220702222041.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220702222341.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220702222438.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="技术架构-作为开发-你真的了解系统吗" tabindex="-1"><a class="header-anchor" href="#技术架构-作为开发-你真的了解系统吗" aria-hidden="true">#</a> 技术架构：作为开发，你真的了解系统吗？</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220703085109.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>技术架构的职责，首先是负责系统所有组件的技术选型，然后确保这些组件可以正常运行。</p><p><strong>业务架构解决的是系统功能性问题</strong>。</p><p><strong>技术架构解决的是系统非功能性问题</strong>。</p><p>技术架构目标</p><ul><li>高可用</li><li>高性能</li><li>伸缩性</li><li>安全性</li></ul><h2 id="高可用架构-如何让你的系统不掉链子" tabindex="-1"><a class="header-anchor" href="#高可用架构-如何让你的系统不掉链子" aria-hidden="true">#</a> 高可用架构：如何让你的系统不掉链子？</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220703092202.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>故障分类</p><ul><li><strong>资源不可用</strong>，包括网络和服务器出故障，网络出故障表明节点连接不上，服务器出故障表明该节点本身不能正常工作。</li><li><strong>资源不足</strong>，常规的流量进来，节点能正常工作，但在高并发的情况下，节点无法正常工作，对外表现为响应超时。</li><li><strong>节点的功能有问题</strong>，这个主要体现在我们开发的代码上，比如它的内部业务逻辑有问题，或者是接口不兼容导致客户端调用出了问题；另外有些不够成熟的中间件，有时也会有功能性问题。</li></ul><p>高可用策略和架构原则</p><p>事前，尽量避免问题的发生；始终，要考虑转移故障，降低故障影响，快速恢复系统；事后，要对故障进行复盘，考虑技术、流程上的完善措施。</p><h2 id="高可用架构案例-一-如何实现-o2o-平台日订单-500-万" tabindex="-1"><a class="header-anchor" href="#高可用架构案例-一-如何实现-o2o-平台日订单-500-万" aria-hidden="true">#</a> 高可用架构案例（一）：如何实现 O2O 平台日订单 500 万？</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220703092811.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220703092957.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="高可用架构案例-二-如何第一时间知道系统哪里有问题" tabindex="-1"><a class="header-anchor" href="#高可用架构案例-二-如何第一时间知道系统哪里有问题" aria-hidden="true">#</a> 高可用架构案例（二）：如何第一时间知道系统哪里有问题？</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220703093328.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220703093652.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="高可用架构案例-三-如何打造一体化的监控系统" tabindex="-1"><a class="header-anchor" href="#高可用架构案例-三-如何打造一体化的监控系统" aria-hidden="true">#</a> 高可用架构案例（三）：如何打造一体化的监控系统？</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220703103558.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="高性能和可伸缩架构-业务增长-能不能加台机器就搞定" tabindex="-1"><a class="header-anchor" href="#高性能和可伸缩架构-业务增长-能不能加台机器就搞定" aria-hidden="true">#</a> 高性能和可伸缩架构：业务增长，能不能加台机器就搞定？</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220703103855.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>加快单个请求处理 <ul><li>优化处理路径上每个节点的处理速度</li><li>并行处理单个请求</li></ul></li><li>同时处理多个请求：负载均衡</li><li>请求处理异步化：MQ</li></ul><p>性能提升思路：</p><ul><li>可水平拆分和无状态</li><li>短事务和柔性事务</li><li>缓存</li><li>并行计算</li><li>异步处理</li><li>容器化</li></ul><h2 id="高性能架构案例-如何设计一个秒杀系统" tabindex="-1"><a class="header-anchor" href="#高性能架构案例-如何设计一个秒杀系统" aria-hidden="true">#</a> 高性能架构案例：如何设计一个秒杀系统？</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220703105340.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="可伸缩架构案例-数据太多-如何无限扩展你的数据库" tabindex="-1"><a class="header-anchor" href="#可伸缩架构案例-数据太多-如何无限扩展你的数据库" aria-hidden="true">#</a> 可伸缩架构案例：数据太多，如何无限扩展你的数据库？</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220703110828.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220703110925.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220703111011.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220703135733.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="案例-电商平台技术架构是如何演变的" tabindex="-1"><a class="header-anchor" href="#案例-电商平台技术架构是如何演变的" aria-hidden="true">#</a> 案例：电商平台技术架构是如何演变的？</h2><p>单体架构</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220703135849.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>SOA 架构</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220703135906.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>微服务架构</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220703135939.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>垂直拆分（分库）</p><p>水平拆分</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220703140033.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>多机房部署</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220703140123.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>服务调用本地化</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220703140249.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>依赖分级管理</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220703140310.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>多机房独立部署</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220703140404.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="从务实的角度-给你架构设计的重点知识和学习路径" tabindex="-1"><a class="header-anchor" href="#从务实的角度-给你架构设计的重点知识和学习路径" aria-hidden="true">#</a> 从务实的角度，给你架构设计的重点知识和学习路径</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220703141209.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220703141328.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',165),o={href:"https://time.geekbang.org/column/intro/100046301",target:"_blank",rel:"noopener noreferrer"};function c(d,h){const a=e("ExternalLinkIcon");return n(),r("div",null,[u,i("p",null,[i("a",o,[g("架构实战案例解析"),s(a)])])])}const b=t(l,[["render",c],["__file","02.架构实战案例解析笔记.html.vue"]]);export{b as default};
