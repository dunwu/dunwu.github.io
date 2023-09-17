import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as a,c as s,a as i,b as r,d as e,e as o}from"./app-4f05975a.js";const h={},d=o('<h1 id="系统架构概述" tabindex="-1"><a class="header-anchor" href="#系统架构概述" aria-hidden="true">#</a> 系统架构概述</h1><h2 id="大型系统架构演化" tabindex="-1"><a class="header-anchor" href="#大型系统架构演化" aria-hidden="true">#</a> 大型系统架构演化</h2><p>一个大型系统的架构是一个渐进的演化过程。罗马不是一天建成的，同理，微信、淘宝等大型系统绝不是一蹴而就的。随着业务的不断发展，用户体量的增加，系统的复杂度势必不断攀升，最终迫使系统架构进化，以应对挑战。</p><p>了解大型系统架构的演化过程，有利于我们了解架构进化的发展规律和业界一些成熟的应对方案。帮助我们在实际工作中，如何去思考架构，如何去凝练解决方案。</p><p>大型系统架构演化比较具有代表性的就是大型网站的演化过程。这里介绍一下大型网站演化的一般规律。</p><h3 id="单机架构" tabindex="-1"><a class="header-anchor" href="#单机架构" aria-hidden="true">#</a> 单机架构</h3><ul><li><strong>问题</strong>：网站运营初期，访问用户少，一台服务器绰绰有余。</li><li><strong>特征</strong>：<strong>应用程序、数据库、文件等所有的资源都在一台服务器上。</strong></li><li><strong>描述</strong>：通常服务器操作系统使用 linux，应用程序使用 PHP 开发，然后部署在 Apache 上，数据库使用 Mysql，通俗称为 LAMP。汇集各种免费开源软件以及一台廉价服务器就可以开始系统的发展之路了。</li></ul><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20211102174033.png" style="width:500px;"><h3 id="应用服务和数据服务分离" tabindex="-1"><a class="header-anchor" href="#应用服务和数据服务分离" aria-hidden="true">#</a> 应用服务和数据服务分离</h3><ul><li><strong>问题</strong>：越来越多的用户访问导致性能越来越差，越来越多的数据导致存储空间不足，一台服务器已不足以支撑。</li><li><strong>特征</strong>：<strong>应用服务器、数据库服务器、文件服务器分别独立部署。</strong></li><li><strong>描述</strong>：三台服务器对性能要求各不相同： <ul><li>应用服务器要处理大量业务逻辑，因此需要更快更强大的 CPU；</li><li>数据库服务器需要快速磁盘检索和数据缓存，因此需要更快的硬盘和更大的内存；</li><li>文件服务器需要存储大量文件，因此需要更大容量的硬盘。</li></ul></li></ul><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20211102174220.png" style="width:500px;"><h3 id="使用缓存改善性能" tabindex="-1"><a class="header-anchor" href="#使用缓存改善性能" aria-hidden="true">#</a> 使用缓存改善性能</h3><ul><li><strong>问题</strong>：随着用户逐渐增多，数据库压力太大导致访问延迟。</li><li><strong>特征</strong>：由于网站访问和财富分配一样遵循二八定律：<em>80% 的业务访问集中在 20% 的数据上</em>。<strong>将数据库中访问较集中的少部分数据缓存在内存中，可以减少数据库的访问次数，降低数据库的访问压力。</strong></li><li><strong>描述</strong>：缓存分为两种：应用服务器上的本地缓存和分布式缓存服务器上的远程缓存。 <ul><li>本地缓存访问速度更快，但缓存数据量有限，同时存在与应用程序争用内存的情况。</li><li>分布式缓存可以采用集群方式，理论上可以做到不受内存容量限制的缓存服务。</li></ul></li></ul><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20211102174506.png" style="width:500px;"><h3 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h3><ul><li><strong>问题</strong>：使用缓存后，数据库访问压力得到有效缓解。但是单一应用服务器能够处理的请求连接有限，在访问高峰期，成为瓶颈。</li><li><strong>特征</strong>：<strong>多台服务器通过负载均衡同时向外部提供服务，解决单一服务器处理能力和存储空间不足的问题。</strong></li><li><strong>描述</strong>：使用集群是系统解决高并发、海量数据问题的常用手段。通过向集群中追加资源，提升系统的并发处理能力，使得服务器的负载压力不再成为整个系统的瓶颈。</li></ul><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20211102174630.png" style="width:800px;"><h3 id="数据库读写分离" tabindex="-1"><a class="header-anchor" href="#数据库读写分离" aria-hidden="true">#</a> 数据库读写分离</h3><ul><li><strong>问题</strong>：网站使用缓存后，使绝大部分数据读操作访问都可以不通过数据库就能完成，但是仍有一部分读操作和全部的写操作需要访问数据库，在网站的用户达到一定规模后，数据库因为负载压力过高而成为网站的瓶颈。</li><li><strong>特征</strong>：目前大部分的主流数据库都提供主从热备功能，通过配置两台数据库主从关系，可以将一台数据库服务器的数据更新同步到一台服务器上。<strong>网站利用数据库的主从热备功能，实现数据库读写分离，从而改善数据库负载压力。</strong></li><li><strong>描述</strong>：应用服务器在写操作的时候，访问主数据库，主数据库通过主从复制机制将数据更新同步到从数据库。这样当应用服务器在读操作的时候，访问从数据库获得数据。为了便于应用程序访问读写分离后的数据库，通常在应用服务器端使用专门的数据访问模块，使数据库读写分离的对应用透明。</li></ul><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20211102174744.png" style="width:800px;"><h3 id="多级缓存" tabindex="-1"><a class="header-anchor" href="#多级缓存" aria-hidden="true">#</a> 多级缓存</h3><ul><li><strong>问题</strong>：中国网络环境复杂，不同地区的用户访问网站时，速度差别也极大。</li><li><strong>特征</strong>：<strong>采用 CDN 和反向代理加快系统的静态资源访问速度。</strong></li><li><strong>描述</strong>：CDN 和反向代理的基本原理都是缓存，区别在于： <ul><li>CDN 部署在网络提供商的机房，使用户在请求网站服务时，可以从距离自己最近的网络提供商机房获取数据；</li><li>而反向代理则部署在网站的中心机房，当用户请求到达中心机房后，首先访问的服务器时反向代理服务器，如果反向代理服务器中缓存着用户请求的资源，就将其直接返回给用户。</li></ul></li></ul><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20211102174848.png" style="width:800px;"><h3 id="业务拆分" tabindex="-1"><a class="header-anchor" href="#业务拆分" aria-hidden="true">#</a> 业务拆分</h3><ul><li><strong>问题</strong>：大型网站的业务场景日益复杂，分为多个产品线。</li><li><strong>特征</strong>：采用分而治之的手段将整个网站业务分成不同的产品线。<strong>系统上按照业务进行拆分改造，应用服务器按照业务区分进行分别部署。</strong></li><li><strong>描述</strong>：应用之间可以通过超链接建立关系，也可以通过消息队列进行数据分发，当然更多的还是通过访问同一个数据存储系统来构成一个关联的完整系统。 <ul><li><strong>纵向拆分</strong>：<strong>将一个大应用拆分为多个小应用</strong>，如果新业务较为独立，那么就直接将其设计部署为一个独立的 Web 应用系统。纵向拆分相对较为简单，通过梳理业务，将较少相关的业务剥离即可。</li><li><strong>横向拆分</strong>：<strong>将复用的业务拆分出来，独立部署为分布式服务</strong>，新增业务只需要调用这些分布式服务横向拆分需要识别可复用的业务，设计服务接口，规范服务依赖关系。</li></ul></li></ul><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20211102175001.png" style="width:800px;"><h3 id="分库分表" tabindex="-1"><a class="header-anchor" href="#分库分表" aria-hidden="true">#</a> 分库分表</h3><ul><li><strong>问题</strong>：随着大型网站业务持续增长，数据库经过读写分离，从一台服务器拆分为两台服务器，依然不能满足需求。</li><li><strong>特征</strong>：<strong>数据库采用分布式数据库。</strong></li><li><strong>描述</strong>：分布式数据库是数据库拆分的最后方法，只有在单表数据规模非常庞大的时候才使用。不到不得已时，更常用的数据库拆分手段是业务分库，将不同的业务数据库部署在不同的物理服务器上。</li></ul><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20211102175326.png" style="width:800px;"><h3 id="分布式组件" tabindex="-1"><a class="header-anchor" href="#分布式组件" aria-hidden="true">#</a> 分布式组件</h3><ul><li><strong>问题</strong>：随着网站业务越来越复杂，对数据存储和检索的需求也越来越复杂。</li><li><strong>特征</strong>：<strong>系统引入 NoSQL 数据库及搜索引擎。</strong></li><li><strong>描述</strong>：NoSQL 数据库及搜索引擎对可伸缩的分布式特性具有更好的支持。应用服务器通过统一数据访问模块访问各种数据，减轻应用程序管理诸多数据源的麻烦。</li></ul><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20211102175125.png" style="width:800px;"><h3 id="微服务" tabindex="-1"><a class="header-anchor" href="#微服务" aria-hidden="true">#</a> 微服务</h3><ul><li><strong>问题</strong>：随着业务越拆越小，存储系统越来越庞大，应用系统整体复杂程度呈指数级上升，部署维护越来越困难。由于所有应用要和所有数据库系统连接，最终导致数据库连接资源不足，拒绝服务。</li><li><strong>特征</strong>：<strong>公共业务提取出来，独立部署。由这些可复用的业务连接数据库，通过分布式服务提供共用业务服务。</strong></li><li>描述：大型网站的架构演化到这里，基本上大多数的技术问题都得以解决，诸如跨数据中心的实时数据同步和具体网站业务相关的问题也都可以组合改进现有技术架构来解决。</li></ul><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20211102175430.png" style="width:1024px;"><h2 id="架构设计的考量" tabindex="-1"><a class="header-anchor" href="#架构设计的考量" aria-hidden="true">#</a> 架构设计的考量</h2><blockquote><p><strong>每一个模式描述了一个不但重复发生的问题及该问题解决方案的核心。这样，就可以不断复用该方案而减少重复工作</strong>。</p></blockquote><h3 id="什么是架构" tabindex="-1"><a class="header-anchor" href="#什么是架构" aria-hidden="true">#</a> 什么是架构</h3><p>架构是一个非常抽象的概念，每个人由于技术的深度、思维的视角等差异，对于架构的理解，各不相同。</p><p>这里摘抄网上某段比较精髓的定义：</p><ul><li><strong>架构是软件系统的顶层设计</strong>。</li><li><strong>框架是面向编程或配置的半成品</strong>。</li><li><strong>组件是从技术维度上的复用</strong>。</li><li><strong>模块是从业务维度上职责的划分</strong>。</li><li><strong>系统是相互协同可运行的实体</strong>。</li></ul><h3 id="架构设计的目标" tabindex="-1"><a class="header-anchor" href="#架构设计的目标" aria-hidden="true">#</a> 架构设计的目标</h3><p><strong>架构设计的主要目的是为了解决软件系统复杂度带来的问题</strong>。</p><p>架构设计应该<strong>按需设计</strong>。任何网站都是随着业务逐步发展，不断演化而成，不要指望一劳永逸。</p><p>关于架构设计的目的，常见的<strong>误区</strong>有：</p><ul><li>因为架构很重要，所以要做架构设计</li><li>为了高性能、高可用、可扩展，所以要做架构设计</li><li>大厂都是这么做的，所以我们也这么做</li><li>这种新技术很牛逼，我们也一定要引入</li></ul><p>架构的原则：</p><ul><li>架构设计应该<strong>按需设计</strong>。任何网站都是随着业务逐步发展，不断演化而成，不要指望一劳永逸。</li><li><strong>驱动技术发展的主要力量是业务发展</strong>。</li><li><strong>不要盲目跟风</strong>大公司的解决方案。</li><li><strong>不要盲目追求流行技术</strong>，而脱离了业务发展的实际情况。</li><li><strong>不要把所有问题都丢给技术</strong>。现实中，有很多案例告诉我们，很多问题不一定需要通过技术来解决。归根结底，技术始终都是业务的辅助，业务问题究竟是通过技术来解决还是直接通过业务来解决，需要根据实际情况去分析判断。这就需要对业务领域有比较深入的理解和思考。</li></ul><h3 id="架构设计的原则" tabindex="-1"><a class="header-anchor" href="#架构设计的原则" aria-hidden="true">#</a> 架构设计的原则</h3><blockquote><p>合适优于先进&gt;演化优于一步到位&gt;简单优于复杂</p></blockquote><h4 id="合适原则" tabindex="-1"><a class="header-anchor" href="#合适原则" aria-hidden="true">#</a> 合适原则</h4><p>没那么多人，却想干那么多活，是失败的第一个主要原因。</p><p>没有那么多积累，却想一步登天，是失败的第二个主要原因。</p><p>没有那么卓越的业务场景，却幻想灵光一闪成为天才，是失败的第三个主要原因。</p><h4 id="简单原则" tabindex="-1"><a class="header-anchor" href="#简单原则" aria-hidden="true">#</a> 简单原则</h4><p>再高大上的解决方案如果不能落地，也是白扯。</p><p>所以，应对需求</p><h4 id="演化原则" tabindex="-1"><a class="header-anchor" href="#演化原则" aria-hidden="true">#</a> 演化原则</h4><p>演化优于一步到位。</p><p>不要妄图设计一个一步到位，永久不变的架构。</p><h4 id="墨菲定律" tabindex="-1"><a class="header-anchor" href="#墨菲定律" aria-hidden="true">#</a> 墨菲定律</h4><ul><li>任何事都没有表面看起来那么简单；</li><li>所有的事都会比你预计的时间长；</li><li>会出错的事总会出错；</li><li>如果你担心某种情况发生，那么它就更有可能发生。</li></ul><h4 id="康威定律" tabindex="-1"><a class="header-anchor" href="#康威定律" aria-hidden="true">#</a> 康威定律</h4><p>系统设计(产品结构)等同组织形式，每个设计系统的组织，其产生的设计等同于组织之间的沟通结构（简单点说就是，系统的设计受限于设计系统的组织的人员架构形式。</p><h4 id="二八定律" tabindex="-1"><a class="header-anchor" href="#二八定律" aria-hidden="true">#</a> 二八定律</h4><h3 id="高性能" tabindex="-1"><a class="header-anchor" href="#高性能" aria-hidden="true">#</a> 高性能</h3><blockquote><p>性能是软件系统的重要衡量标准。很多扩展性、伸缩性、可用性的问题，是为了解决性能问题而引入的。</p></blockquote><h4 id="性能指标" tabindex="-1"><a class="header-anchor" href="#性能指标" aria-hidden="true">#</a> 性能指标</h4><p>响应延时、并发处理能力、内存、CPU、IO 开销等都可以视为系统的性能指标。</p><p>分析用户体量、日访问量的峰值，估算出为了平稳应对峰值访问流量所需的并发量、吞吐量。如果是应用型系统，性能够用就好，没必要一味追求高性能。比如：用户体量可能还不过万，一天总访问量可能也就一两千 PV，峰值也就几百 QPS，这样的系统如果要考虑每秒几万的 QPS，显然有些多虑了。</p><h4 id="性能提升手段" tabindex="-1"><a class="header-anchor" href="#性能提升手段" aria-hidden="true">#</a> 性能提升手段</h4><p>常见的性能提升手段有：</p><ul><li>前端 <ul><li>浏览器缓存</li><li>静态资源压缩</li><li>合理布局页面</li><li>减少 cookie 传输</li><li>CDN</li></ul></li><li>应用服务 <ul><li>负载均衡和反向代理</li><li>本地缓存</li><li>分布式缓存</li><li>异步消息队列</li><li>集群</li><li>代码层面：使用多线程、改善内存管理</li></ul></li><li>数据库 <ul><li>索引</li><li>数据库缓存</li><li>SQL 优化</li></ul></li></ul><blockquote><p>注意：<strong>缓存是改善软件性能的第一手段</strong>。缓存除了可以加快数据访问速度以外，还可以减轻后端应用和数据存储的负载压力。所以，如果要提升系统性能，应该第一时间想到缓存。</p><p>使用缓存有两个前提：</p><ul><li>数据访问热点不均匀，频繁访问的数据应该放在缓存中。</li><li>数据在某个时间段有效，不会很快过期，否则缓存数据会因已经失效而产生脏读。</li></ul></blockquote><h3 id="高可用" tabindex="-1"><a class="header-anchor" href="#高可用" aria-hidden="true">#</a> 高可用</h3><blockquote><p>系统无中断地执行其功能的能力，代表系统的可用性程度，是进行系统设计时的准则之一。</p></blockquote><p><strong>高性能增加机器目的在于“扩展”处理性能；高可用增加机器目的在于“冗余”处理单元</strong>。</p><p>单点系统，是无法保证高可用的。系统自身故障、断电、硬件故障、网络等等，都可能导致服务不可用。高可用方案五花八门，本质上都是通过“<strong>冗余</strong>”来实现高可用。</p><h4 id="无状态应用的高可用" tabindex="-1"><a class="header-anchor" href="#无状态应用的高可用" aria-hidden="true">#</a> 无状态应用的高可用</h4><p>无状态应用一般具有幂等性，即**无论在哪台机器上进行计算，同样的算法和输入数据，产出的结果都是一样的。**所以，计算在任意节点服务器上执行，结果都一样。</p><p>无状态应用的高可用：</p><ul><li>需要增加一个任务分配器，选择合适的任务分配器也是一件复杂的事情，需要综合考虑性能、成本、可维护性、可用性等各方面因素。</li><li>任务分配器和真正的业务服务器之间有连接和交互，需要选择合适的连接方式，并且对连接进行管理。例如，连接建立、连接检测、连接中断后如何处理等。</li><li>任务分配器需要增加分配算法。例如，常见的双机算法有主备、主主，主备方案又可以细分为冷备、温备、热备。</li></ul><h4 id="有状态应用的高可用" tabindex="-1"><a class="header-anchor" href="#有状态应用的高可用" aria-hidden="true">#</a> 有状态应用的高可用</h4><p>有状态应用，是指需要存储数据的系统，比如各种分布式存储。和无状态应用相比，有一个本质上的区别：<strong>各节点需要通过同步保持数据一致</strong>。分布式领域里面有一个著名的 CAP 定理，从理论上论证了存储高可用的复杂度。也就是说，存储高可用不可能同时满足“一致性、可用性、分区容错性”，最多满足其中两个，这就要求我们在做架构设计时结合业务进行取舍。</p><h4 id="高可用手段" tabindex="-1"><a class="header-anchor" href="#高可用手段" aria-hidden="true">#</a> 高可用手段</h4><p>高可用的常用手段：</p><ul><li><strong>负载均衡</strong> - 通过负载均衡设备建立集群共同对外提供服务。</li><li><strong>备份</strong> - 数据存储在多台服务器，互相备份。即使访问和负载很小的服务也必须部署至少两台服务器，构成一个集群，目的就是通过冗余实现服务的高可用。 <ul><li><strong>冷备份</strong> - 数据应该定期备份；</li><li><strong>热备份</strong> - 为了保证在线业务高可用，还需要对数据库进行主从分离，实时同步 。</li><li><strong>灾备</strong> - 为了抵御地震、海啸等不可抗因素导致的网站完全瘫痪，某些大型网站会对整个数据中心进行备份，全球范围内部署 <strong>灾备数据中心</strong>。网站程序和数据定期同步到多个灾备数据中心。</li></ul></li><li><strong>自动化</strong> - 自动化是指，大型系统有必要通过预发布验证、自动化测试、自动化发布、灰度发布等手段，减少将故障引入线上环境的可能。常见自动化手段有： <ul><li>发布过程自动化 <ul><li>自动化代码管理</li><li>自动化测试</li><li>自动化安全监测</li><li>自动化部署</li></ul></li><li>运维自动化 <ul><li>自动化监控</li><li>自动化报警</li><li>自动化失效转移</li><li>自动化失效恢复</li><li>自动化降级</li><li>自动化分配资源</li></ul></li></ul></li></ul><h3 id="扩展性" tabindex="-1"><a class="header-anchor" href="#扩展性" aria-hidden="true">#</a> 扩展性</h3><blockquote><p><strong>可扩展性指系统为了应对将来需求变化而提供的一种扩展能力</strong>，当有新的需求出现时，系统不需要或者仅需要少量修改就可以支持，无须整个系统重构或者重建。</p><p>衡量扩展性的标准就是增加新的业务产品时，是否可以实现对现有产品透明无影响，不需要任何改动或很少改动，既有功能就可以上线新产品。</p><p>软件发展的一个重要目标和驱动力是降低软件耦合性。事物之间直接关系越少，彼此影响就越小，也就更容易独立发展，即扩展性好。</p></blockquote><p>主要手段有：</p><ul><li><p><strong>分层</strong> - 分层是扩展性设计的最基本手段。通过分层，可以将一个的软件系统切分为不同的部分，便于分工合作开发和维护；各层间具有一定的独立性。</p><ul><li>分层架构的约束：<strong>禁止跨层次的调用及逆向调用</strong>。</li><li>即使系统规模很小，也应该考虑采用分层的架构，这样便于以后扩展。</li></ul></li><li><p><strong>分割</strong> - 将不同的功能和服务分割开来，包装成高内聚、低耦合的模块单元。这有助于软件的开发和维护，便于不同模块的分布式部署，提高系统的并发处理能力和功能扩展能力。</p></li><li><p><strong>异步</strong> - 业务间的消息传递不是同步调用，而是将一个业务操作拆分成多阶段，每个阶段间通过共享数据的方式异步执行进行协作。</p><ul><li><strong>在单一服务器内部可通过多线程共享内存队列的方式实现异步</strong>，处在业务操作前面的线程将操作输出到队列，后面的线程从队列中读取数据进行处理；</li><li>在分布式系统中，<strong>多个服务器集群通过分布式消息队列实现异步</strong>。</li></ul></li><li><p><strong>分布式</strong> - 将业务和可复用服务分离，通过分布式服务框架调用。分布式是指多台服务器部署相同应用构成一个集群，通过负载均衡设备共同对外提供服务。着意味着服务可以用更多的机器工作，即扩展 CPU、内存、IO 等资源，从而提高系统整体的吞吐量和并发处理能力。</p><ul><li>常用的分布式方案： <ul><li>分布式应用和服务</li><li>分布式静态资源</li><li>分布式数据和存储</li><li>分布式计算</li></ul></li><li>分布式也引入了一些问题： <ul><li>服务调用必须通过网络，网络延迟会影响性能。</li><li>服务器越多，宕机概率也越大，导致可用性降低。</li><li>数据一致性非常困难，分布式事务也难以保证。</li><li>网站依赖错综复杂，开发管理维护困难。</li></ul></li></ul></li></ul><h3 id="伸缩性" tabindex="-1"><a class="header-anchor" href="#伸缩性" aria-hidden="true">#</a> 伸缩性</h3><blockquote><p>衡量伸缩的标准就是是否可以用多台服务器构建集群，是否容易向集群中增删服务器节点。增删服务器节点后是否可以提供和之前无差别的服务。集群中可容纳的总服务器数是否有限制。</p></blockquote><p>伸缩性是指<strong>通过增/减服务器节点数，来灵活的提高/降低系统处理能力</strong>。</p><p>主要手段有:</p><ul><li><strong>应用服务器集群</strong> - 只要服务器上保存数据，则所有服务器都是对等的，通过负载均衡设备向集群中不断加入服务器即可</li><li><strong>缓存服务器集群</strong> - 加入新的服务器可能会导致缓存路由失效，进而导致集群中的大部分缓存数据都无法访问。虽然缓存数据可以通过数据库重新加载，但是如果应用严重依赖缓存，可能会导致网站崩溃。需要改进缓存路由算法保证缓存数据的可访问性。</li><li><strong>关系型数据库集群</strong> - 关系型数据库虽然支持数据复制，主从热备等机制，但是很难做到大规模集群的可伸缩性，因此关系型数据库的集群伸缩性方案必须在数据库之外实现，通过路由分区等手段将部署有多个数据库的服务器组成一个集群。</li><li><strong>Nosql 数据库集群</strong> - 由于先天就是为了应对海量数据而产生，因此对伸缩性的支持通常都非常好。</li></ul><h3 id="安全性" tabindex="-1"><a class="header-anchor" href="#安全性" aria-hidden="true">#</a> 安全性</h3><p>安全是指系统应该对恶意攻击有一定的抵抗能力，保护重要数据不被窃取。</p><ul><li><strong>密码</strong> 和 <strong>手机校验码</strong> 进行身份认证</li><li>登录、交易等重要操作需要对网络通信进行 <strong>加密</strong>，存储的敏感数据如用户信息等也进行加密处理</li><li>防止机器人程序攻击网站，使用 <strong>验证码</strong> 进行识别</li><li>对常见用于 <strong>攻击</strong> 网站的 XSS 攻击、SQL 注入、进行编码转换等相应处理</li><li>对垃圾信息、敏感信息进行 <strong>过滤</strong></li><li>对交易转账等重要操作根据交易模式和交易信息进行 <strong>风险控制</strong></li></ul><h2 id="常见架构模型" tabindex="-1"><a class="header-anchor" href="#常见架构模型" aria-hidden="true">#</a> 常见架构模型</h2><h3 id="分层架构" tabindex="-1"><a class="header-anchor" href="#分层架构" aria-hidden="true">#</a> 分层架构</h3><p>分层架构（layered architecture）是最常见的软件架构，也是事实上的标准架构。</p><p>这种架构将软件分成若干个水平层，每一层都有清晰的角色和分工，不需要知道其他层的细节。层与层之间通过接口通信。</p><p>四层的结构最常见。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/architecture/layered-architecture.png" width="500"></div><ul><li>表现层（presentation）：用户界面，负责视觉和用户互动</li><li>业务层（business）：实现业务逻辑</li><li>持久层（persistence）：提供数据，SQL 语句就放在这一层</li><li>数据库（database） ：保存数据</li></ul><p>优点</p><ul><li>结构简单，容易理解和开发</li><li>不同技能的程序员可以分工，负责不同的层，天然适合大多数软件公司的组织架构</li><li>每一层都可以独立测试，其他层的接口通过模拟解决</li></ul><p>缺点</p><ul><li>一旦环境变化，需要代码调整或增加功能时，通常比较麻烦和费时</li><li>部署比较麻烦，即使只修改一个小地方，往往需要整个软件重新部署，不容易做持续发布</li><li>软件升级时，可能需要整个服务暂停</li><li>扩展性差。用户请求大量增加时，必须依次扩展每一层，由于每一层内部是耦合的，扩展会很困难</li></ul><h3 id="事件驱动架构" tabindex="-1"><a class="header-anchor" href="#事件驱动架构" aria-hidden="true">#</a> 事件驱动架构</h3><p>事件（event）是状态发生变化时，软件发出的通知。</p><p>事件驱动架构（event-driven architecture）就是通过事件进行通信的软件架构。它分成四个部分。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/architecture/event-driven-architecture.png" width="500"></div><ul><li>事件队列（event queue）：接收事件的入口</li><li>分发器（event mediator）：将不同的事件分发到不同的业务逻辑单元</li><li>事件通道（event channel）：分发器与处理器之间的联系渠道</li><li>事件处理器（event processor）：实现业务逻辑，处理完成后会发出事件，触发下一步操作</li></ul><p>对于简单的项目，事件队列、分发器和事件通道，可以合为一体，整个软件就分成事件代理和事件处理器两部分。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/architecture/simple-event-driven-architecture.png" width="500"></div><p>优点</p><ul><li>分布式的异步架构，事件处理器之间高度解耦，软件的扩展性好</li><li>适用性广，各种类型的项目都可以用</li><li>性能较好，因为事件的异步本质，软件不易产生堵塞</li><li>事件处理器可以独立地加载和卸载，容易部署</li></ul><p>缺点</p><ul><li>涉及异步编程（要考虑远程通信、失去响应等情况），开发相对复杂</li><li>难以支持原子性操作，因为事件通过会涉及多个处理器，很难回滚</li><li>分布式和异步特性导致这个架构较难测试</li></ul><h3 id="微核架构" tabindex="-1"><a class="header-anchor" href="#微核架构" aria-hidden="true">#</a> 微核架构</h3><p>微核架构（microkernel architecture）又称为&quot;插件架构&quot;（plug-in architecture），指的是软件的内核相对较小，主要功能和业务逻辑都通过插件实现。</p><p>内核（core）通常只包含系统运行的最小功能。插件则是互相独立的，插件之间的通信，应该减少到最低，避免出现互相依赖的问题。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/architecture/plug-in-architecture.png" width="500"></div><p>优点</p><ul><li>良好的功能延伸性（extensibility），需要什么功能，开发一个插件即可</li><li>功能之间是隔离的，插件可以独立的加载和卸载，使得它比较容易部署，</li><li>可定制性高，适应不同的开发需要</li><li>可以渐进式地开发，逐步增加功能</li></ul><p>缺点</p><ul><li>扩展性（scalability）差，内核通常是一个独立单元，不容易做成分布式</li><li>开发难度相对较高，因为涉及到插件与内核的通信，以及内部的插件登记机制</li></ul><h3 id="微服务架构" tabindex="-1"><a class="header-anchor" href="#微服务架构" aria-hidden="true">#</a> 微服务架构</h3><p>微服务架构（microservices architecture）是服务导向架构（service-oriented architecture，缩写 SOA）的升级。</p><p>每一个服务就是一个独立的部署单元（separately deployed unit）。这些单元都是分布式的，互相解耦，通过远程通信协议（比如 REST、SOAP）联系。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/architecture/microservices-architecture.png" width="500"></div><p>微服务架构分成三种实现模式。</p><ul><li>RESTful API 模式：服务通过 API 提供，云服务就属于这一类</li><li>RESTful 应用模式：服务通过传统的网络协议或者应用协议提供，背后通常是一个多功能的应用程序，常见于企业内部</li><li>集中消息模式：采用消息代理（message broker），可以实现消息队列、负载均衡、统一日志和异常处理，缺点是会出现单点失败，消息代理可能要做成集群</li></ul><p>优点</p><ul><li>扩展性好，各个服务之间低耦合</li><li>容易部署，软件从单一可部署单元，被拆成了多个服务，每个服务都是可部署单元</li><li>容易开发，每个组件都可以进行持续集成式的开发，可以做到实时部署，不间断地升级</li><li>易于测试，可以单独测试每一个服务</li></ul><p>缺点</p><ul><li>由于强调互相独立和低耦合，服务可能会拆分得很细。这导致系统依赖大量的微服务，变得很凌乱和笨重，性能也会不佳。</li><li>一旦服务之间需要通信（即一个服务要用到另一个服务），整个架构就会变得复杂。典型的例子就是一些通用的 Utility 类，一种解决方案是把它们拷贝到每一个服务中去，用冗余换取架构的简单性。</li><li>分布式的本质使得这种架构很难实现原子性操作，交易回滚会比较困难。</li></ul><h3 id="云架构" tabindex="-1"><a class="header-anchor" href="#云架构" aria-hidden="true">#</a> 云架构</h3><p>云结构（cloud architecture）主要解决扩展性和并发的问题，是最容易扩展的架构。</p><p>它的高扩展性，主要原因是没使用中央数据库，而是把数据都复制到内存中，变成可复制的内存数据单元。然后，业务处理能力封装成一个个处理单元（prcessing unit）。访问量增加，就新建处理单元；访问量减少，就关闭处理单元。由于没有中央数据库，所以扩展性的最大瓶颈消失了。由于每个处理单元的数据都在内存里，最好要进行数据持久化。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/architecture/cloud-architecture.png" width="500"></div><p>这个模式主要分成两部分：处理单元（processing unit）和虚拟中间件（virtualized middleware）。</p><ul><li>处理单元：实现业务逻辑</li><li>虚拟中间件：负责通信、保持 sessions、数据复制、分布式处理、处理单元的部署。</li></ul><p>虚拟中间件又包含四个组件。</p><blockquote><ul><li><strong>消息中间件</strong>（Messaging Grid）：管理用户请求和 session，当一个请求进来以后，决定分配给哪一个处理单元。</li><li><strong>数据中间件</strong>（Data Grid）：将数据复制到每一个处理单元，即数据同步。保证某个处理单元都得到同样的数据。</li><li><strong>处理中间件</strong>（Processing Grid）：可选，如果一个请求涉及不同类型的处理单元，该中间件负责协调处理单元</li><li><strong>部署中间件</strong>（Deployment Manager）：负责处理单元的启动和关闭，监控负载和响应时间，当负载增加，就新启动处理单元，负载减少，就关闭处理单元。</li></ul></blockquote><p>优点</p><ul><li>高负载，高扩展性</li><li>动态部署</li></ul><p>缺点</p><ul><li>实现复杂，成本较高</li><li>主要适合网站类应用，不合适大量数据吞吐的大型数据库应用</li><li>较难测试</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',152),g={href:"https://item.jd.com/11322972.html",target:"_blank",rel:"noopener noreferrer"},u=i("li",null,"《从 0 开始学架构》",-1),c={href:"http://www.ruanyifeng.com/blog/2016/09/software-architecture.html",target:"_blank",rel:"noopener noreferrer"};function p(b,m){const l=n("ExternalLinkIcon");return a(),s("div",null,[d,i("ul",null,[i("li",null,[i("a",g,[r("《大型网站技术架构：核心原理与案例分析》"),e(l)])]),u,i("li",null,[i("a",c,[r("软件架构入门- 阮一峰的网络日志"),e(l)])])])])}const w=t(h,[["render",p],["__file","02.系统架构概述.html.vue"]]);export{w as default};
