import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as s,c as o,a as e,b as t,d as n,e as l}from"./app-afc5da4f.js";const d={},h=l(`<h1 id="系统高可用架构" tabindex="-1"><a class="header-anchor" href="#系统高可用架构" aria-hidden="true">#</a> 系统高可用架构</h1><h2 id="高可用架构简介" tabindex="-1"><a class="header-anchor" href="#高可用架构简介" aria-hidden="true">#</a> 高可用架构简介</h2><h3 id="系统可用性的度量" tabindex="-1"><a class="header-anchor" href="#系统可用性的度量" aria-hidden="true">#</a> 系统可用性的度量</h3><p>系统不可用也被称作系统故障，<strong>业界通常用多个 9 来衡量系统的可用性</strong>。如 QQ 的可用性为 4 个 9，即 99.99% 可用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>网站不可用时间 = 故障修复时间点 - 故障发现时间点
网站年度可用性指标 = (1 - 网站不可用时间/年度总时间) * 100%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可用性计量表：</p><table><thead><tr><th style="text-align:center;">可用性级别</th><th style="text-align:center;">系统可用性%</th><th style="text-align:center;">宕机时间/年</th><th style="text-align:center;">宕机时间/月</th><th style="text-align:center;">宕机时间/周</th><th style="text-align:center;">宕机时间/天</th></tr></thead><tbody><tr><td style="text-align:center;">不可用</td><td style="text-align:center;">90%</td><td style="text-align:center;">36.5 天</td><td style="text-align:center;">73 小时</td><td style="text-align:center;">16.8 小时</td><td style="text-align:center;">144 分钟</td></tr><tr><td style="text-align:center;">基本可用</td><td style="text-align:center;">99%</td><td style="text-align:center;">87.6 小时</td><td style="text-align:center;">7.3 小时</td><td style="text-align:center;">1.68 小时</td><td style="text-align:center;">14.4 分钟</td></tr><tr><td style="text-align:center;">较高可用</td><td style="text-align:center;">99.9%</td><td style="text-align:center;">8.76 小时</td><td style="text-align:center;">43.8 分钟</td><td style="text-align:center;">10.1 分钟</td><td style="text-align:center;">1.44 分钟</td></tr><tr><td style="text-align:center;">高可用</td><td style="text-align:center;">99.99%</td><td style="text-align:center;">52.56 分钟</td><td style="text-align:center;">4.38 分钟</td><td style="text-align:center;">1.01 秒</td><td style="text-align:center;">8.64 秒</td></tr><tr><td style="text-align:center;">极高可用</td><td style="text-align:center;">99.999%</td><td style="text-align:center;">5.26 分钟</td><td style="text-align:center;">26.28 秒</td><td style="text-align:center;">6.06 秒</td><td style="text-align:center;">0.86 秒</td></tr></tbody></table><h3 id="故障原因" tabindex="-1"><a class="header-anchor" href="#故障原因" aria-hidden="true">#</a> 故障原因</h3><p>系统宕机原因主要有以下：</p><p><strong>无计划的</strong></p><ul><li>系统级故障，包括主机、操作系统、中间件、数据库、网络、电源以及外围设备。</li><li>数据和中介的故障，包括人员误操作、硬盘故障、数据乱了。</li><li>还有自然灾害、人为破坏，以及供电问题等。</li></ul><p><strong>有计划的</strong></p><ul><li>日常任务：备份，容量规划，用户和安全管理，后台批处理应用。</li><li>运维相关：数据库维护、应用维护、中间件维护、操作系统维护、网络维护。</li><li>升级相关：数据库、应用、中间件、操作系统、网络，包括硬件升级。</li></ul><p>我们再给它们归个类。</p><ol><li><strong>网络问题</strong>。网络链接出现问题，网络带宽出现拥塞……</li><li><strong>性能问题</strong>。数据库慢 SQL、Java Full GC、硬盘 IO 过大、CPU 飙高、内存不足……</li><li><strong>安全问题</strong>。被网络攻击，如 DDoS 等。</li><li><strong>运维问题</strong>。系统总是在被更新和修改，架构也在不断地被调整，监控问题……</li><li><strong>管理问题</strong>。没有梳理出关键服务以及服务的依赖关系，运行信息没有和控制系统同步……</li><li><strong>硬件问题</strong>。硬盘损坏、网卡出问题、交换机出问题、机房掉电、挖掘机问题……</li></ol><h3 id="什么是高可用的系统架构" tabindex="-1"><a class="header-anchor" href="#什么是高可用的系统架构" aria-hidden="true">#</a> 什么是高可用的系统架构</h3><p>通常，企业级应用系统为提高系统可用性，会采用较昂贵的软硬件设备，当然这样的设备也比较稳定。</p><p>互联网公司或一些初创型公司基于成本考虑，更多采用 PC 级软硬件设备，节约成本所付出的代价就是设备较为不稳定。服务器一年中出现几次宕机，高强度读写磁盘导致磁盘损坏等事件实属正常。</p><p>综上，硬件出现故障应视为必然的，而<strong>高可用的系统架构设计目标就是要保证当出现硬件故障时，服务依然可用，数据依然能够保存并被访问</strong>。<strong>实现高可用的系统架构的主要手段是数据和服务的冗余备份及失效转移</strong>，一旦某些服务器宕机，就将服务切换到其他可用的服务器上；如果磁盘损坏，则从备份的磁盘读取数据。</p><p><strong>大型系统的分层架构及物理服务器的分布式部署使得位于不同层次的服务器具有不同的可用性特点。关闭服务或服务器宕机时产生的影响也不相同，高可用的解决方案也差异甚大</strong>。大致可以分为：</p><ul><li>高可用的应用 - 主要手段是：负载均衡</li><li>高可用的服务 - 主要手段是：分级管理、超时重试、异步调用、限流、降解、断路、幂等性设计</li><li>高可用的数据 - 主要手段是：数据备份和失效转移</li></ul><h2 id="高可用架构理论" tabindex="-1"><a class="header-anchor" href="#高可用架构理论" aria-hidden="true">#</a> 高可用架构理论</h2><p>学习高可用架构，首先需要了解分布式基础理论：CAP 和 BASE。</p>`,23),g={href:"https://dunwu.github.io/blog/pages/0276bb/",target:"_blank",rel:"noopener noreferrer"},c={href:"https://dunwu.github.io/blog/pages/4907dc/",target:"_blank",rel:"noopener noreferrer"},p=l("<p>CAP 定理又称为 CAP 原则，指的是：<strong>在一个分布式系统中， <code>一致性（C：Consistency）</code>、<code>可用性（A：Availability）</code> 和 <code>分区容忍性（P：Partition Tolerance）</code>，最多只能同时满足其中两项</strong>。</p><p>BASE 是 <strong><code>基本可用（Basically Available）</code></strong>、<strong><code>软状态（Soft State）</code></strong> 和 <strong><code>最终一致性（Eventually Consistent）</code></strong> 三个短语的缩写。BASE 理论是对 CAP 中一致性和可用性权衡的结果，它的理论的核心思想是：即使无法做到强一致性，但每个应用都可以根据自身业务特点，采用适当的方式来使系统达到最终一致性。</p>",2),u={href:"https://dunwu.github.io/blog/pages/dac0e2/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://dunwu.github.io/blog/pages/0276bb/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://dunwu.github.io/blog/pages/4907dc/",target:"_blank",rel:"noopener noreferrer"},f=l('<h2 id="架构模式" tabindex="-1"><a class="header-anchor" href="#架构模式" aria-hidden="true">#</a> 架构模式</h2><h3 id="主备复制" tabindex="-1"><a class="header-anchor" href="#主备复制" aria-hidden="true">#</a> 主备复制</h3><p>主备复制是最常见也是最简单的一种存储高可用方案，几乎所有的存储系统都提供了主备复制的功能，例如 MySQL、Redis、MongoDB 等。</p><p>主备复制要点：</p><ul><li>存在<strong>一主多备</strong>。</li><li>主机负责读&amp;写，并定期复制数据给备机。</li><li>一旦主机宕机，可以通过人工手段，将其中一个备节点作为主节点。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200614173351.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>优点</strong></p><ul><li>主备复制架构中，客户端可以不感知备机的存在。即使灾难恢复后，原来的备机被人工修改为主机后，对于客户端来说，只是认为主机的地址换了而已，无须知道是原来的备机升级为主机。</li><li>主备复制架构中，主机和备机之间，只需要进行数据复制即可，无须进行状态判断和主备切换这类复杂的操作。</li></ul><p><strong>缺点</strong></p><ul><li>主备复制架构中，故障后需要人工干预，无法自动恢复。</li></ul><p><strong>适用场景</strong></p><p>综合主备复制架构的优缺点，内部的后台管理系统使用主备复制架构的情况会比较多，例如学生管理系统、员工管理系统、假期管理系统等，因为这类系统的数据变更频率低，即使在某些场景下丢失数据，也可以通过人工的方式补全。</p><h3 id="主从复制" tabindex="-1"><a class="header-anchor" href="#主从复制" aria-hidden="true">#</a> 主从复制</h3><p>主从复制和主备复制只有一字之差，区别在于：<strong>主从复制模式中，从机要承担读操作</strong>。</p><p>主从复制要点：</p><ul><li>存在<strong>一主多从</strong>。</li><li>主机负责读&amp;写，并定期复制数据给从机。</li><li>从机只负责读。</li><li>一旦主机宕机，可以通过人工手段，将其中一个从节点作为主节点。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200614173527.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>优点</strong></p><ul><li>主从复制架构中，主机故障时，读操作相关的业务可以继续运行。</li><li>主从复制架构中，从机提供读操作，发挥了硬件的性能。</li></ul><p><strong>缺点</strong></p><ul><li>主从复制架构中，客户端需要感知主从关系，并将不同的操作发给不同的机器进行处理，复杂度比主备复制要高。</li><li>主从复制架构中，从机提供读业务，如果主从复制延迟比较大，业务会因为数据不一致出现问题。</li><li>主从复制架构中，故障时需要人工干预。</li></ul><p><strong>适用场景</strong></p><p>综合主从复制的优缺点，一般情况下，写少读多的业务使用主从复制的存储架构比较多。例如，论坛、BBS、新闻网站这类业务，此类业务的读操作数量是写操作数量的 10 倍甚至 100 倍以上。</p><h3 id="集群-分区" tabindex="-1"><a class="header-anchor" href="#集群-分区" aria-hidden="true">#</a> 集群+分区</h3><p>在主备复制和主从复制模式中，都由一个共性问题：</p><p>每个机器上存储的都是全量数据。但是，单机的数据存储量总是有上限的，当数据量上升为 TB 级甚至 PB 级数据，单机终究有无法支撑的时候。这时，就需要对数据进行分片（sharding）。</p><p>分片后的节点可以视为一个独立的子集，针对子集，任然需要保证高可用。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200614184921.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="高可用的应用" tabindex="-1"><a class="header-anchor" href="#高可用的应用" aria-hidden="true">#</a> 高可用的应用</h2><p>应用层主要处理网站应用的业务逻辑，一个显著的特点是应用的 <strong>无状态</strong> 性。</p><p>所谓的 <strong>无状态</strong> 的应用是指应用服务器不保存业务的上下文信息，而仅根据每次请求提交的数据进行相应的业务逻辑处理，多个服务实例之间完全对等，请求提交到任意服务器，处理结果都是完全一样的。</p><p>由于无状态应用，各实例之间不用考虑数据一致性问题，所以其高可用方案相对简单。主要手段是：</p><ul><li>负载均衡</li><li>分布式 Session</li></ul><h3 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h3><p>负载均衡，顾名思义，主要使用在业务量和数据量较高的情况下，当单台服务器不足以承担所有的负载压力时，通过负载均衡手段，将流量和数据分摊到一个集群组成的多台服务器上，以提高整体的负载处理能力。</p><p><strong>无状态应用的失效转移可以利用负载均衡来实现</strong>。</p><p>无状态的应用实现高可用架构十分简单，由于服务器不保存请求状态，那么所有服务器完全对等，在任意节点执行同样的请求，结果总是一致的。这种情况下，最简单的高可用方案就是使用负载均衡。</p>',37),_={href:"https://dunwu.github.io/blog/pages/98a1c1/",target:"_blank",rel:"noopener noreferrer"},y=e("h3",{id:"分布式-session",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分布式-session","aria-hidden":"true"},"#"),t(" 分布式 Session")],-1),m=e("p",null,"应用服务器的高可用架构设计主要基于服务无状态这一特性。事实上，业务总是有状态的，如购物车记录用户的购买信息；用户的登录状态；最新发布的消息等等。",-1),k=e("p",null,"在分布式场景下，一个用户的 Session 如果只存储在一个服务器上，那么当负载均衡器把用户的下一个请求转发到另一个服务器上，该服务器没有用户的 Session，就可能导致用户需要重新进行登录等操作。",-1),v=e("p",null,"为了解决分布式 Session 问题，常见的解决方案有：",-1),S=e("ul",null,[e("li",null,"粘性 session"),e("li",null,"应用服务器间的 session 复制共享"),e("li",null,"基于缓存的 session 共享 ✅")],-1),P={href:"https://dunwu.github.io/blog/pages/95e45f/",target:"_blank",rel:"noopener noreferrer"},w=l('<h2 id="高可用的服务" tabindex="-1"><a class="header-anchor" href="#高可用的服务" aria-hidden="true">#</a> 高可用的服务</h2><p><strong>可复用的服务</strong>为业务产品提供基础公共服务，大型系统中这些服务通常都独立分布式部署，被具体应用远程调用。可复用的服务和应用一样，一般也是无状态的服务，因此，<strong>同样可以使用负载均衡的失效转移策略来实现高可用</strong>。</p><p>除此以外，还有以下手段来保证服务的高可用：</p><ul><li>分级管理</li><li>超时重试</li><li>异步调用</li><li>过载保护 <ul><li>限流</li><li>降级</li><li>断路</li></ul></li><li>幂等性设计</li></ul><h3 id="分级管理" tabindex="-1"><a class="header-anchor" href="#分级管理" aria-hidden="true">#</a> 分级管理</h3><p>将服务根据业务重要性进行分级管理，核心应用和服务优先使用更好的硬件，在运维响应速度上也格外迅速。</p><p>在服务部署上进行必要的隔离，避免故障的连锁反应。低优先级的服务通过启动不同的线程或部署在不同的虚拟机上进行隔离，而高优先级的服务则需要部署在不同的物理机上，核心服务和数据甚至要部署在不同地域的数据中心。</p><h3 id="超时重试" tabindex="-1"><a class="header-anchor" href="#超时重试" aria-hidden="true">#</a> 超时重试</h3><p>由于服务器宕机、线程死锁等原因，可能导致应用程序对服务端的调用失去响应。所以有必要引入<strong>超时机制</strong>，一旦调用超时，服务化框架抛出异常，应用程序根据服务调度策略，选择重试或请求转移到其他机器上。</p><h3 id="异步调用" tabindex="-1"><a class="header-anchor" href="#异步调用" aria-hidden="true">#</a> 异步调用</h3><p>对于需要即时响应的业务，应用在调用服务时可以通过消息队列等异步方式完成，避免一个服务失败导致整个应用请求失败的情况。当然不是所有服务调用都可以异步调用，对于获取用户信息这类调用，采用异步方式会延长响应时间，得不偿失；此外，对于那些必须确认服务调用才能继续下一步操作的应用也不适宜食用异步调用。</p><h3 id="过载保护" tabindex="-1"><a class="header-anchor" href="#过载保护" aria-hidden="true">#</a> 过载保护</h3><p>过载保护的手段，一般有：限流、降级、熔断。</p><h4 id="限流" tabindex="-1"><a class="header-anchor" href="#限流" aria-hidden="true">#</a> 限流</h4><p>降级是从系统功能优先级的角度考虑如何应对故障，而限流则是从用户访问压力的角度来考虑如何应对故障。限流指只允许系统能够承受的访问量进来，超出系统访问能力的请求将被丢弃。</p><p>常见的限流方式可以分为两类：基于请求限流和基于资源限流。</p><h5 id="基于请求限流" tabindex="-1"><a class="header-anchor" href="#基于请求限流" aria-hidden="true">#</a> 基于请求限流</h5><p>基于请求限流指从外部访问的请求角度考虑限流，常见的方式有：限制总量、限制时间量。</p><p>限制总量的方式是限制<strong>某个指标的累积上限</strong>，常见的是限制当前系统服务的用户总量，例如某个直播间限制总用户数上限为 100 万，超过 100 万后新的用户无法进入；某个抢购活动商品数量只有 100 个，限制参与抢购的用户上限为 1 万个，1 万以后的用户直接拒绝。限制时间量指限制<strong>一段时间内某个指标的上限</strong>，例如，1 分钟内只允许 10000 个用户访问，每秒请求峰值最高为 10 万。</p><p>无论是限制总量还是限制时间量，共同的特点都是实现简单，但在实践中面临的主要问题是比较难以找到合适的阈值。</p><h5 id="基于资源限流" tabindex="-1"><a class="header-anchor" href="#基于资源限流" aria-hidden="true">#</a> 基于资源限流</h5><p>基于请求限流是从系统外部考虑的，而基于资源限流是从系统内部考虑的，即：找到系统内部影响性能的关键资源，对其使用上限进行限制。常见的内部资源有：连接数、文件句柄、线程数、请求队列等。</p><p>基于资源限流相比基于请求限流能够更加有效地反映当前系统的压力，但实践中设计也面临两个主要的难点：如何确定关键资源，如何确定关键资源的阈值。</p><h4 id="降级" tabindex="-1"><a class="header-anchor" href="#降级" aria-hidden="true">#</a> 降级</h4><p>降级指系统将某些业务或者接口的功能降低，可以是只提供部分功能，也可以是完全停掉所有功能。</p><p>在服务访问的高峰期，服务可能因为大量并发调用而性能下降，严重时可能会导致宕机。为了保证核心功能的正常运行，需要对服务进行降级。降级有两种手段：</p><p><strong>拒绝服务</strong> - 拒绝低优先级应用的调用，减少服务调用并发数，确保核心应用正常使用。或者随机拒绝部分调用，节约资源，避免要死大家一起死的惨剧。</p><p><strong>关闭服务</strong> - 关闭部分不重要的服务，或者服务内部关闭部分不重要的功能，以节约资源。</p><h4 id="熔断" tabindex="-1"><a class="header-anchor" href="#熔断" aria-hidden="true">#</a> 熔断</h4><p>熔断和降级是两个比较容易混淆的概念，因为单纯从名字上看好像都有禁止某个功能的意思，但其实内在含义是不同的，原因在于降级的目的是应对系统自身的故障，而熔断的目的是应对依赖的外部系统故障的情况。</p><p>熔断机制实现的关键是需要有一个统一的 API 调用层，由 API 调用层来进行采样或者统计，如果接口调用散落在代码各处就没法进行统一处理了。</p><h3 id="幂等性设计" tabindex="-1"><a class="header-anchor" href="#幂等性设计" aria-hidden="true">#</a> 幂等性设计</h3><p>服务调用失败后，调用方会将请求转发到其他服务器上，但是这个失败可能是虚假的失败。比如服务已经处理成功，但因为网络故障导致调用方没有收到应答，或等待超时。这种情况下，重新发起请求，可能会导致重复操作，如：向数据库写入两条记录。如果这个操作是比较敏感的交易操作，就会产生严重后果。</p><p>服务重复调用时无法避免的，但是只要能从业务实现上保证，重复调用和一次调用的处理结果一致，则业务就没有问题，这就是幂等性设计。</p><p>有些服务的业务天然具有幂等性，比如将用户性别设为男性，不管执行多少次，结果是一致的。但有些复杂的业务，要想保证幂等性，就需要根据全局性的 ID 去进行有效性验证，验证通过才能继续执行。</p><h2 id="高可用的存储" tabindex="-1"><a class="header-anchor" href="#高可用的存储" aria-hidden="true">#</a> 高可用的存储</h2><p>对于绝大部分软件系统而言，数据都是最宝贵的虚拟资产，一旦丢失，可以说是毁灭性的打击。</p><p>保证存储高可用的<strong>主要手段</strong>是：<strong>数据备份</strong>和<strong>失效转移</strong>。</p><p>存储高可用架构的<strong>复杂性</strong>主要体现在：<strong>如何应对副本同步延迟和中断导致的数据一致性问题</strong>。</p><blockquote><p>提示：再开始学习这部分内容前，建议先学习 <strong>二、高可用架构理论</strong></p></blockquote><h3 id="数据备份" tabindex="-1"><a class="header-anchor" href="#数据备份" aria-hidden="true">#</a> 数据备份</h3><p>数据备份是保证数据有多个副本，任意副本的丢失都不会导致数据的永久丢失。</p><ul><li><strong>冷备份</strong> - 定期将数据复制到某种存储介质。</li><li><strong>热备份</strong><ul><li><strong>异步热备方式</strong> - 异步热备方式是指多份数据副本的写入操作异步完成，应用程序收到数据服务系统的写操作成功响应时，只写成功了一份，存储系统将会异步地写其他副本。</li><li><strong>同步热备方式</strong> - 同步热备方式是指多份数据副本的写入操作同步完成，即应用程序收到数据服务系统的写成功响应时，多份数据都已经写操作成功。但是当应用程序收到数据写操作失败的响应式，可能有部分副本或者全部副本都已经写入成功了（因为网络或者系统故障，无法返回操作成功的响应）。</li></ul></li></ul><h3 id="失效转移" tabindex="-1"><a class="header-anchor" href="#失效转移" aria-hidden="true">#</a> 失效转移</h3><p>失效转移是保证任意一个副本不可访问时，可以快速切换访问其他副本，保证系统整体可用。</p><h4 id="失效确认" tabindex="-1"><a class="header-anchor" href="#失效确认" aria-hidden="true">#</a> 失效确认</h4><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/architecture/check-fail.png" width="500"></div><p>判断服务器宕机的手段有两种：<strong>心跳检测</strong>和<strong>访问失败报告</strong>。</p><p>对于应用程序的访问失败报告，控制中心还需要再一次发送心跳检测进行确认，以免错误判断服务器宕机。因为一旦进行数据访问的失效转移，意味着数据存储多份副本不一致，需要进行后续一系列的复杂动作。</p><h4 id="访问转移" tabindex="-1"><a class="header-anchor" href="#访问转移" aria-hidden="true">#</a> 访问转移</h4><p>确认某台数据服务器宕机后，就需要将数据读写访问重新路由到其他服务器上。对于完全对等存储的服务器，当其中一台宕机后，应用程序根据配置直接切换到对等服务器上。如果存储不对等，就需要重新计算路由，选择存储服务器。</p><h4 id="数据恢复" tabindex="-1"><a class="header-anchor" href="#数据恢复" aria-hidden="true">#</a> 数据恢复</h4><p>因为某台服务器宕机，所以数据存储的副本数目会减少，必须将副本的数目恢复到系统设定的值，否则，再有服务器宕机时，就可能出现无法访问转移，数据永久丢失的情况。因此系统需要从健康的服务器复制数据，将数据副本数目恢复到设定值。</p><h2 id="辅助手段" tabindex="-1"><a class="header-anchor" href="#辅助手段" aria-hidden="true">#</a> 辅助手段</h2><h3 id="异地多活" tabindex="-1"><a class="header-anchor" href="#异地多活" aria-hidden="true">#</a> 异地多活</h3><p>异地多活架构的关键点就是异地、多活，其中异地就是指地理位置上不同的地方，类似于“不要把鸡蛋都放在同一篮子里”；多活就是指不同地理位置上的系统都能够提供业务服务，这里的“活”是活动、活跃的意思。</p><p>异地多活架构可以分为同城异区、跨城异地、跨国异地。</p><p>异地多活架构的代价：</p><ul><li>系统复杂度会发生质的变化，需要设计复杂的异地多活架构。</li><li>成本会上升，毕竟要多在一个或者多个机房搭建独立的一套业务系统。</li></ul><p>异地多活的设计原则：</p><ul><li>保证核心业务的异地多活</li><li>保证核心数据最终一致性</li><li>采用多种手段同步数据</li><li>只保证绝大部分用户的异地多活</li></ul><p>异地多活设计步骤：</p><ul><li>业务分级 - 常见的分级标准有： <ul><li>流量大的业务</li><li>核心业务</li><li>盈利业务</li></ul></li><li>数据分类 - 常见的数据分析维度有： <ul><li>数据量</li><li>唯一性</li><li>实时性</li><li>可丢实性</li><li>可恢复性</li></ul></li><li>数据同步 - 常见的数据同步方案 <ul><li>存储系统同步</li><li>消息队列同步</li><li>重复生成</li></ul></li><li>异常处理 - 常见异常处理措施： <ul><li>多通道同步</li><li>同步和访问结合</li><li>日志记录</li><li>用户补偿</li></ul></li></ul><h3 id="发布流程" tabindex="-1"><a class="header-anchor" href="#发布流程" aria-hidden="true">#</a> 发布流程</h3><p>高可用的软件质量保证的手段：</p><ul><li>自动化测试</li><li>预发布验证</li><li>代码控制</li><li>自动化发布</li><li>灰度发布</li></ul><h3 id="系统监控" tabindex="-1"><a class="header-anchor" href="#系统监控" aria-hidden="true">#</a> 系统监控</h3><blockquote><p>不允许没有监控的系统上线。</p></blockquote>',68),A=e("strong",null,"监控数据采集",-1),B=e("li",null,[e("strong",null,"用户行为日志收集"),e("ul",null,[e("li",null,"服务端日志收集 - Apache、Nginx 等几乎所有 Web 服务器都具备日志记录功能，只要开启日志记录即可。如果是服务器比较多，需要集中采集日志，通常会使用 Elastic 来进行收集。"),e("li",null,"客户端日志收集 - 利用页面嵌入专门的 JavaScript 脚本可以收集用户真实的操作行为。"),e("li",null,"日志分析 - 可以利用 ElasticSearch 做语义分析及搜索；利用实时计算框架 Storm、Flink 等开发日志统计与分析工具。")])],-1),C=e("strong",null,"服务器性能监控",-1),E={href:"https://github.com/apache/skywalking",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/naver/pinpoint",target:"_blank",rel:"noopener noreferrer"},q=e("li",null,[e("strong",null,"运行数据报告"),t(" - 应该监控一些与具体业务场景相关的技术和业务指标，如：缓存命中率、平均响应时延、TPS、QPS 等。")],-1),N=l("<li><strong>监控管理</strong><ul><li><strong>系统报警</strong> - 设置阈值。当达到阈值，及时触发告警（短信、邮件、通信工具均可），通过及时判断状况，防患于未然。</li><li><strong>失效转移</strong> - 监控系统可以在发现故障的情况下主动通知应用进行失效转移。</li><li><strong>自动优雅降级</strong><ul><li>优雅降级是为了应付突然爆发的访问高峰，主动关闭部分功能，释放部分资源，以保证核心功能的优先访问。</li><li>系统在监控管理基础之上实现自动优雅降级，是柔性架构的理想状态。</li></ul></li></ul></li>",1),Q=e("h2",{id:"参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),t(" 参考资料")],-1),R={href:"https://item.jd.com/11322972.html",target:"_blank",rel:"noopener noreferrer"},D={href:"https://item.jd.com/12153914.html",target:"_blank",rel:"noopener noreferrer"},L={href:"https://time.geekbang.org/column/intro/48",target:"_blank",rel:"noopener noreferrer"};function T(V,z){const i=a("ExternalLinkIcon");return s(),o("div",null,[h,e("p",null,[t("然后，很多著名的分布式系统，都利用选举机制，来保证主节点宕机时的故障恢复。如果要深入理解选举机制，有必要了解："),e("a",g,[t("Paxos 算法"),n(i)]),t(" 和 "),e("a",c,[t("Raft 算法"),n(i)]),t("。Paxos 和 Raft 是为了实现分布式系统中高可用架构而提出的共识性算法，已经成为业界标准。")]),p,e("blockquote",null,[e("p",null,[t("CAP 和 BASE 理论的详细说明请参考："),e("a",u,[t("分布式一致性"),n(i)])]),e("p",null,[t("Paxos 和 Raft 的详细说明请参考："),e("a",b,[t("Paxos 算法"),n(i)]),t(" 和 "),e("a",x,[t("Raft 算法"),n(i)])])]),f,e("blockquote",null,[e("p",null,[t("负载均衡原理可以参考："),e("a",_,[t("负载均衡基本原理"),n(i)])])]),y,m,k,v,S,e("blockquote",null,[e("p",null,[t("分布式会话原理可以参考："),e("a",P,[t("分布式会话基本原理"),n(i)])])]),w,e("ul",null,[e("li",null,[A,e("ul",null,[B,e("li",null,[C,t(" - 收集服务器性能指标，如系统负载、内存占用、CPU 占用、磁盘 IO、网络 IO 等。常用的监控工具有："),e("a",E,[t("Apache SkyWalking"),n(i)]),t(" 、"),e("a",I,[t("Pinpoint"),n(i)]),t(" 等。")]),q])]),N]),Q,e("ul",null,[e("li",null,[e("a",R,[t("《大型网站技术架构：核心原理与案例分析》"),n(i)])]),e("li",null,[e("a",D,[t("《亿级流量网站架构核心技术：跟开涛学搭建高可用高并发系统》"),n(i)])]),e("li",null,[e("a",L,[t("左耳听风"),n(i)])])])])}const F=r(d,[["render",T],["__file","index.html.vue"]]);export{F as default};
