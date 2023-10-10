import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as d,c as n,a,b as h,d as t,e as s}from"./app-207caadd.js";const p={},o=s('<h1 id="领域驱动设计简介" tabindex="-1"><a class="header-anchor" href="#领域驱动设计简介" aria-hidden="true">#</a> 领域驱动设计简介</h1><h2 id="ddd-简介" tabindex="-1"><a class="header-anchor" href="#ddd-简介" aria-hidden="true">#</a> DDD 简介</h2><h3 id="软件架构模式的演进" tabindex="-1"><a class="header-anchor" href="#软件架构模式的演进" aria-hidden="true">#</a> 软件架构模式的演进</h3><p>**第一阶段是单机架构：**采用面向过程的设计方法，系统包括客户端 UI 层和数据库两层，采用 C/S 架构模式，整个系统围绕数据库驱动设计和开发，并且总是从设计数据库和字段开始。</p><p>**第二阶段是集中式架构：**采用面向对象的设计方法，系统包括业务接入层、业务逻辑层和数据库层，采用经典的三层架构，也有部分应用采用传统的 SOA 架构。这种架构容易使系统变得臃肿，可扩展性和弹性伸缩性差。</p><p>**第三阶段是分布式微服务架构：**随着微服务架构理念的提出，集中式架构正向分布式微服务架构演进。微服务架构可以很好地实现应用之间的解耦，解决单体应用扩展性和弹性伸缩能力不足的问题。</p><p>在单机和集中式架构时代，系统分析、设计和开发往往是独立、分阶段割裂进行的。</p><h3 id="什么是-ddd" tabindex="-1"><a class="header-anchor" href="#什么是-ddd" aria-hidden="true">#</a> 什么是 DDD</h3><p>DDD 是一种处理高度复杂领域的<strong>设计思想</strong>，它试图分离技术实现的复杂性，并<strong>围绕业务概念构建领域模型来控制业务的复杂性</strong>，以解决软件难以理解，难以演进的问题。DDD 不是架构，而是一种架构设计方法论，它通过边界划分将复杂业务领域简单化，帮我们设计出清晰的领域和应用边界，可以很容易地实现架构演进。DDD 分为两个思维层面：</p><ul><li>战略设计主要从业务视角出发，建立业务领域模型，划分领域边界，建立通用语言的上下文边界，上下文边界可以作为微服务设计的参考边界。</li><li>战术设计则从技术视角出发，侧重于领域模型的技术实现，完成软件开发和落地，包括：聚合根、实体、值对象、领域服务、应用服务和资源库等代码逻辑的设计和实现。</li></ul><h3 id="ddd-与微服务的关系" tabindex="-1"><a class="header-anchor" href="#ddd-与微服务的关系" aria-hidden="true">#</a> DDD 与微服务的关系</h3><p><strong>DDD 是一种架构设计方法，微服务是一种架构风格</strong>。两者都是为了拆解业务复杂度：合理划分领域边界，持续调整现有架构，优化现有代码，以保持架构和代码的生命力，也就是我们常说的演进式架构。</p><p>DDD 主要关注：<strong>从业务领域视角划分领域边界</strong>，构建通用语言进行高效沟通，通过业务抽象，建立领域模型，维持业务和代码的逻辑一致性。</p><p>微服务主要关注：<strong>运行时的进程间通信、容错和故障隔离</strong>，实现去中心化数据管理和去中心化服务治理，关注微服务的独立开发、测试、构建和部署。</p><h2 id="ddd-核心概念" tabindex="-1"><a class="header-anchor" href="#ddd-核心概念" aria-hidden="true">#</a> DDD 核心概念</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200719231154.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="域" tabindex="-1"><a class="header-anchor" href="#域" aria-hidden="true">#</a> 域</h3><ul><li><strong>领域</strong>：领域具体指一种特定的<strong>范围</strong>。领域是用来限定业务边界的，那么就会有大小之分，领域越大，业务范围就越大，反之则相反。</li><li><strong>子域</strong>：领域可以进一步划分为子领域。我们把划分出来的多个子领域称为子域，每个子域对应一个更小的问题域或更小的业务范围。</li><li><strong>核心域</strong>：决定产品和公司核心竞争力的子域是核心域。</li><li><strong>通用域</strong>：同时被多个子域使用的通用功能子域是通用域。</li><li><strong>支撑域</strong>：还有一种功能子域是必需的，但既非核心域也非通用域，它就是支撑域。</li></ul><blockquote><p><strong>领域的核心思想就是将问题域逐级细分，来降低业务理解和系统实现的复杂度</strong>。通过领域细分，逐步缩小微服务需要解决的问题域，构建合适的领域模型，而领域模型映射成系统就是微服务了。</p><p>核心域、支撑域和通用域的主要目标是：通过领域划分，区分不同子域在公司内的不同功能属性和重要性，从而公司可对不同子域采取不同的资源投入和建设策略，其关注度也会不一样。</p></blockquote><h3 id="通用语言和上下文边界" tabindex="-1"><a class="header-anchor" href="#通用语言和上下文边界" aria-hidden="true">#</a> 通用语言和上下文边界</h3><p><strong>通用语言</strong>：通过团队交流达成共识性的，能够简单、清晰、准确描述业务涵义和规则的语言。</p><p><strong>上下文边界</strong>：限界就是领域的边界，而上下文则是语义环境。通过领域的上下文边界，我们就可以在统一的领域边界内用统一的语言进行交流。综合一下，上下文边界的定义就是：用来封装通用语言和领域对象，提供上下文环境，保证在领域之内的一些术语、业务相关对象等（通用语言）有一个确切的含义，没有二义性。这个边界定义了模型的适用范围，使团队所有成员能够明确地知道什么应该在模型中实现，什么不应该在模型中实现。</p><h3 id="实体和值对象" tabindex="-1"><a class="header-anchor" href="#实体和值对象" aria-hidden="true">#</a> 实体和值对象</h3><p>实体是多个属性、操作或行为的载体。在事件风暴中，我们可以根据命令、操作或者事件，找出产生这些行为的业务实体对象，进而按照一定的业务规则将依存度高和业务关联紧密的多个实体对象和值对象进行聚类，形成聚合。你可以这么理解，实体和值对象是组成领域模型的基础单元。</p><p>本质上，实体是看得到、摸得着的实实在在的业务对象，实体具有业务属性、业务行为和业务逻辑。而值对象只是若干个属性的集合，只有数据初始化操作和有限的不涉及修改数据的行为，基本不包含业务逻辑。值对象的属性集虽然在物理上独立出来了，但在逻辑上它仍然是实体属性的一部分，用于描述实体的特征。</p><h3 id="聚合和聚合跟" tabindex="-1"><a class="header-anchor" href="#聚合和聚合跟" aria-hidden="true">#</a> 聚合和聚合跟</h3><p>领域模型内的实体和值对象就好比个体，而能让实体和值对象协同工作的组织就是聚合，它用来确保这些领域对象在实现共同的业务逻辑时，能保证数据的一致性。</p><p>聚合就是由业务和逻辑紧密关联的实体和值对象组合而成的，聚合是数据修改和持久化的基本单元，每一个聚合对应一个仓储，实现数据的持久化。聚合有一个聚合根和上下文边界，这个边界根据业务单一职责和高内聚原则，定义了聚合内部应该包含哪些实体和值对象，而聚合之间的边界是松耦合的。</p><p>聚合根的主要目的是为了避免由于复杂数据模型缺少统一的业务规则控制，而导致聚合、实体之间数据不一致性的问题。如果把聚合比作组织，那聚合根就是这个组织的负责人。聚合根也称为根实体，它不仅是实体，还是聚合的管理者。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200719152031.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="聚合设计步骤" tabindex="-1"><a class="header-anchor" href="#聚合设计步骤" aria-hidden="true">#</a> 聚合设计步骤</h4><ul><li>第 1 步：采用事件风暴，根据业务行为，梳理出所有的实体和值对象。</li><li>第 2 步：从众多实体中选出适合作为对象管理者的根实体，也就是聚合根。判断一个实体<br> 是否是聚合根，你可以结合以下场景分析：是否有独立的生命周期？是否有全局唯一 ID？<br> 是否可以创建或修改其它对象？是否有专门的模块来管这个实体。</li><li>第 3 步：根据业务单一职责和高内聚原则，找出与聚合根关联的所有紧密依赖的实体和值<br> 对象。</li><li>第 4 步：在聚合内根据聚合根、实体和值对象的依赖关系，画出对象的引用和依赖模型。</li><li>第 5 步：多个聚合根据业务语义和上下文一起划分到同一个限界上下文内。</li></ul><h4 id="聚合设计原则" tabindex="-1"><a class="header-anchor" href="#聚合设计原则" aria-hidden="true">#</a> 聚合设计原则</h4><ul><li>在一致性边界内建模真正的不变条件。</li><li>设计小聚合。</li><li>通过唯一标识引用其它聚合。</li><li>在边界之外使用最终一致性。</li><li>通过应用层实现跨聚合的服务调用。</li></ul><h2 id="架构模型" tabindex="-1"><a class="header-anchor" href="#架构模型" aria-hidden="true">#</a> 架构模型</h2><h3 id="ddd-架构" tabindex="-1"><a class="header-anchor" href="#ddd-架构" aria-hidden="true">#</a> DDD 架构</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200719223353.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>三层架构向 DDD 分层架构演进，主要发生在业务逻辑层和数据访问层。</p><p>DDD 分层架构包含用户接口层、应用层、领域层和基础层。通过这些层次划分，我们可以明确微服务各层的职能，划定各领域对象的边界，确定各领域对象的协作方式。</p><h3 id="整洁架构" tabindex="-1"><a class="header-anchor" href="#整洁架构" aria-hidden="true">#</a> 整洁架构</h3><p>在整洁架构里，同心圆代表应用软件的不同部分，从里到外依次是领域模型、领域服务、应用服务和最外围的容易变化的内容，比如用户界面和基础设施。</p><p>整洁架构最主要的原则是依赖原则，它定义了各层的依赖关系，越往里依赖越低，代码级别越高，越是核心能力。外圆代码依赖只能指向内圆，内圆不需要知道外圆的任何情况。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200719223906.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="六边形架构" tabindex="-1"><a class="header-anchor" href="#六边形架构" aria-hidden="true">#</a> 六边形架构</h3><p>六边形架构的核心理念是：应用是通过端口与外部进行交互的。我想这也是微服务架构下 API 网关盛行的主要原因吧。</p><p>也就是说，在下图的六边形架构中，红圈内的核心业务逻辑（应用程序和领域模型）与外部资源（包括 APP、Web 应用以及数据库资源等）完全隔离，仅通过适配器进行交互。它解决了业务逻辑与用户界面的代码交错问题，很好地实现了前后端分离。六边形架构各层的依赖关系与整洁架构一样，都是由外向内依赖。</p><p>六边形架构将系统分为内六边形和外六边形两层，这两层的职能划分如下：</p><p>红圈内的六边形实现应用的核心业务逻辑；</p><p>外六边形完成外部应用、驱动和基础资源等的交互和访问，对前端应用以 API 主动适配的方式提供服务，对基础资源以依赖倒置被动适配的方式实现资源访问。</p><h3 id="三种架构对比" tabindex="-1"><a class="header-anchor" href="#三种架构对比" aria-hidden="true">#</a> 三种架构对比</h3><p>这三种架构模型的设计思想正是微服务架构高内聚低耦合原则的完美体现。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200719224313.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="架构模型和中台、微服务的联系" tabindex="-1"><a class="header-anchor" href="#架构模型和中台、微服务的联系" aria-hidden="true">#</a> 架构模型和中台、微服务的联系</h4><p>中台本质上是领域的子域，它可能是核心域，也可能是通用域或支撑域。通常大家认为阿里的中台对应 DDD 的通用域，将通用的公共能力沉淀为中台，对外提供通用共享服务。</p><p>DDD、中台、微服务这三者之间似乎没什么关联，实际上它们的关系是非常紧密的，组合在一起可以作为<br> 一个理论体系用于你的中台和微服务设计。</p><h4 id="中台建设要聚焦领域模型" tabindex="-1"><a class="header-anchor" href="#中台建设要聚焦领域模型" aria-hidden="true">#</a> 中台建设要聚焦领域模型</h4><p>中台需要站在全企业的高度考虑能力的共享和复用。</p><p>中台设计时，我们需要建立中台内所有限界上下文的领域模型，DDD 建模过程中会考虑架构演进和功能的重新组合。领域模型建立的过程会对业务和应用进行清晰的逻辑和物理边界（微服务）划分。领域模型的结果会影响到后续的系统模型、架构模型和代码模型，最终影响到微服务的拆分和项目落地。</p><h4 id="微服务要有合理的架构分层" tabindex="-1"><a class="header-anchor" href="#微服务要有合理的架构分层" aria-hidden="true">#</a> 微服务要有合理的架构分层</h4><p>微服务设计要有分层的设计思想，让各层各司其职，建立松耦合的层间关系。</p><p>不要把与领域无关的逻辑放在领域层实现，保证领域层的纯洁和领域逻辑的稳定，避免污染领域模型。也不要把领域模型的业务逻辑放在应用层，这样会导致应用层过于庞大，最终领域模型会失焦。</p><h4 id="应用和资源的解耦与适配" tabindex="-1"><a class="header-anchor" href="#应用和资源的解耦与适配" aria-hidden="true">#</a> 应用和资源的解耦与适配</h4><p>传统以数据为中心的设计模式，应用会对数据库、缓存、文件系统等基础资源产生严重依赖。</p><p>正是由于它们之间的这种强依赖的关系，我们一旦更换基础资源就会对应用产生很大的影响，因此需要为应用和资源解耦。</p><h2 id="中台战略" tabindex="-1"><a class="header-anchor" href="#中台战略" aria-hidden="true">#</a> 中台战略</h2><h3 id="平台不是中台" tabindex="-1"><a class="header-anchor" href="#平台不是中台" aria-hidden="true">#</a> 平台不是中台</h3><p>中台源于平台，但它的战略高度要比平台高很多。</p><p><strong>平台只是将部分通用的公共能力独立为共享平台</strong>。虽然可以通过 API 或者数据对外提供公共共享服务，解决系统重复建设的问题，但这类平台并没有和企业内的其它平台或应用，实现页面、业务流程和数据从前端到后端的全面融合，并且<strong>没有将核心业务服务链路作为一个整体方案考虑，各平台仍然是分离且独立的</strong>。</p><p>简单的理解就是把传统的前后台体系中的后台进行了细分。阿里巴巴提出了<strong>大中台小前台</strong>的战略。就是强化业务和技术中台，把前端的应用变得更小更灵活。当中台越强大，能力就越强，越能更好的快速响应前台的业务需求。打个比喻，就是土壤越肥沃，越适合生长不同的生物，打造好的生态系统。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200716194609.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="什么是中台" tabindex="-1"><a class="header-anchor" href="#什么是中台" aria-hidden="true">#</a> 什么是中台</h3><p>中台是一个基础的理念和架构，我们要把所有的基础服务用中台的思路建设，进行联通，共同支持上端的业务。业务中台更多的是支持在线业务，数据中台提供了基础数据处理能力和很多的数据产品给所有业务方去用。业务中台、数据中台、算法中台等等一起提供对上层业务的支撑。</p><p>中台的关键词：<strong>共享、联通、融合和创新</strong>。联通是前台以及中台之间的联通，融合是前台流程和数据的融合，并以共享的方式支持前端一线业务的发展和创新。其中最关键的是快速响应能力和企业级的无缝联通和融合能力，尤其是对于跨业经营的超大型企业来说至关重要。</p><h3 id="数字化转型中台" tabindex="-1"><a class="header-anchor" href="#数字化转型中台" aria-hidden="true">#</a> 数字化转型中台</h3><h3 id="前中后台协同" tabindex="-1"><a class="header-anchor" href="#前中后台协同" aria-hidden="true">#</a> 前中后台协同</h3><h4 id="前台" tabindex="-1"><a class="header-anchor" href="#前台" aria-hidden="true">#</a> 前台</h4><p>在前台设计中我们可以借鉴微前端的设计思想，在企业内不仅实现前端解耦和复用，还可以根据核心链路和业务流程，通过对微前端页面的动态组合和流程编排，实现前台业务的融合。</p><p>前端页面可以很自然地融合到不同的终端和渠道应用核心业务链路中，实现前端页面、流程和功能复用。</p><h4 id="中台" tabindex="-1"><a class="header-anchor" href="#中台" aria-hidden="true">#</a> 中台</h4><p>业务中台的建设可采用领域驱动设计方法，通过领域建模，将可复用的公共能力从各个单体剥离，沉淀并组合，采用微服务架构模式，建设成为可共享的通用能力中台。</p><p>同样的，我们可以将核心能力用微服务架构模式，建设成为可面向不同渠道和场景的可复用的核心能力中台。 业务中台向前台、第三方和其它中台提供 API 服务，实现通用能力和核心能力的复用。</p><p>数据中台的主要目标是打通数据孤岛，实现业务融合和创新，包括三大主要职能：</p><ul><li>一是完成企业全域数据的采集与存储，实现各不同业务类别中台数据的汇总和集中管理。</li><li>二是按照标准的数据规范或数据模型，将数据按照不同主题域或场景进行加工和处理，形成面向不同主题和场景的数据应用，比如客户视图、代理人视图、渠道视图、机构视图等不同数据体系。</li><li>三是建立业务需求驱动的数据体系，基于各个维度的数据，深度萃取数据价值，支持业务和商业模式的创新。</li></ul><p>相应的，数据中台的建设就可分为三步走：</p><ul><li>第一步实现各中台业务数据的汇集，解决数据孤岛和初级数据共享问题。</li><li>第二步实现企业级实时或非实时全维度数据的深度融合、加工和共享。</li><li>第三步萃取数据价值，支持业务创新，加速从数据转换为业务价值的过程。</li></ul><h4 id="后台" tabindex="-1"><a class="header-anchor" href="#后台" aria-hidden="true">#</a> 后台</h4><p>前台主要面向客户以及终端销售者，实现营销推广以及交易转化；中台主要面向运营人员，完成运营支撑；后台主要面向后台管理人员，实现流程审核、内部管理以及后勤支撑，比如采购、人力、财务和 OA 等系统。</p><h3 id="ddd、中台和微服务的协作" tabindex="-1"><a class="header-anchor" href="#ddd、中台和微服务的协作" aria-hidden="true">#</a> DDD、中台和微服务的协作</h3><p>传统企业可以将需要共享的公共能力进行领域建模，建设可共享的通用中台。除此之外，传统企业还会将核心能力进行领域建模，建设面向不同渠道的可复用的核心中台。</p><h3 id="如何构建中台" tabindex="-1"><a class="header-anchor" href="#如何构建中台" aria-hidden="true">#</a> 如何构建中台</h3><h4 id="自顶向下策略" tabindex="-1"><a class="header-anchor" href="#自顶向下策略" aria-hidden="true">#</a> 自顶向下策略</h4><p>自顶向下的策略适用于全新的应用系统建设，或旧系统推倒重建的情况。这种策略是先做顶层设计，从最高领域逐级分解为中台，分别建立领域模型，根据业务属性分为通用中台或核心中台。领域建模过程主要基于业务现状，暂时不考虑系统现状。</p><h4 id="自顶向下策略-1" tabindex="-1"><a class="header-anchor" href="#自顶向下策略-1" aria-hidden="true">#</a> 自顶向下策略</h4><p>自底向上策略适用于遗留系统业务模型的演进式重构。这种策略是基于业务和系统现状完成领域建模。首先分别完成系统所在业务域的领域建模；然后对齐业务域，找出具有同类或相似业务功能的领域模型，对比分析领域模型的差异，重组领域对象，重构领域模型。这个过程会沉淀公共和复用的业务能力，会将分散的业务模型整合。</p><h4 id="构建步骤" tabindex="-1"><a class="header-anchor" href="#构建步骤" aria-hidden="true">#</a> 构建步骤</h4><p>第一步：锁定系统所在业务域，构建领域模型。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200720063540.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>第二步：对齐业务域，构建中台业务模型。</p><p>第三步：中台归类，根据领域模型设计微服务。</p><h2 id="边界" tabindex="-1"><a class="header-anchor" href="#边界" aria-hidden="true">#</a> 边界</h2><p>逻辑边界：微服务内聚合之间的边界是逻辑边界。它是一个虚拟的边界，强调业务的内聚，可根据需要变成物理边界，也就是说聚合也可以独立为微服务。</p><p>物理边界：微服务之间的边界是物理边界。它强调微服务部署和运行的隔离，关注微服务的服务调用、容错和运行等。</p><p>代码边界：不同层或者聚合之间代码目录的边界是代码边界。它强调的是代码之间的隔离，方便架构演进时代码的重组。</p><p>通过以上边界，我们可以让业务能力高内聚、代码松耦合，且清晰的边界，可以快速实现微服务代码的拆分和组合，轻松实现微服务架构演进。但有一点一定要格外注意，边界清晰的微服务，不是大单体向小单体的演进。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',105),l={href:"https://time.geekbang.org/column/intro/100037301",target:"_blank",rel:"noopener noreferrer"};function c(g,u){const e=r("ExternalLinkIcon");return d(),n("div",null,[o,a("ul",null,[a("li",null,[a("a",l,[h("DDD 实战课"),t(e)])])])])}const m=i(p,[["render",c],["__file","01.领域驱动设计简介.html.vue"]]);export{m as default};
