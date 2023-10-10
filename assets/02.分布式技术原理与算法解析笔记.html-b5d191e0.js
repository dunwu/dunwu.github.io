import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as h,o as d,c as l,a as e,b as r,d as i,e as t}from"./app-207caadd.js";const s={},o=t('<h1 id="《分布式技术原理与算法解析》笔记" tabindex="-1"><a class="header-anchor" href="#《分布式技术原理与算法解析》笔记" aria-hidden="true">#</a> 《分布式技术原理与算法解析》笔记</h1><h2 id="开篇词丨四纵四横-带你透彻理解分布式技术" tabindex="-1"><a class="header-anchor" href="#开篇词丨四纵四横-带你透彻理解分布式技术" aria-hidden="true">#</a> 开篇词丨四纵四横，带你透彻理解分布式技术</h2><h2 id="分布式缘何而起-从单兵-到游击队-到集团军" tabindex="-1"><a class="header-anchor" href="#分布式缘何而起-从单兵-到游击队-到集团军" aria-hidden="true">#</a> 分布式缘何而起：从单兵，到游击队，到集团军</h2><h2 id="分布式系统的指标-啥是分布式的三围" tabindex="-1"><a class="header-anchor" href="#分布式系统的指标-啥是分布式的三围" aria-hidden="true">#</a> 分布式系统的指标：啥是分布式的三围</h2><h2 id="分布式互斥-有你没我-有我没你" tabindex="-1"><a class="header-anchor" href="#分布式互斥-有你没我-有我没你" aria-hidden="true">#</a> 分布式互斥：有你没我，有我没你</h2><h2 id="分布式选举-国不可一日无君" tabindex="-1"><a class="header-anchor" href="#分布式选举-国不可一日无君" aria-hidden="true">#</a> 分布式选举：国不可一日无君</h2><h2 id="分布式共识-存异求同" tabindex="-1"><a class="header-anchor" href="#分布式共识-存异求同" aria-hidden="true">#</a> 分布式共识：存异求同</h2><h2 id="分布式事务-allornothing" tabindex="-1"><a class="header-anchor" href="#分布式事务-allornothing" aria-hidden="true">#</a> 分布式事务：Allornothing</h2><h2 id="分布式锁-关键重地-非请勿入" tabindex="-1"><a class="header-anchor" href="#分布式锁-关键重地-非请勿入" aria-hidden="true">#</a> 分布式锁：关键重地，非请勿入</h2><h2 id="答疑篇-分布式技术是如何引爆人工智能的" tabindex="-1"><a class="header-anchor" href="#答疑篇-分布式技术是如何引爆人工智能的" aria-hidden="true">#</a> 答疑篇：分布式技术是如何引爆人工智能的？</h2><h2 id="分布式体系结构之集中式结构-一人在上-万人在下" tabindex="-1"><a class="header-anchor" href="#分布式体系结构之集中式结构-一人在上-万人在下" aria-hidden="true">#</a> 分布式体系结构之集中式结构：一人在上，万人在下</h2><h2 id="分布式体系结构之非集中式结构-众生平等" tabindex="-1"><a class="header-anchor" href="#分布式体系结构之非集中式结构-众生平等" aria-hidden="true">#</a> 分布式体系结构之非集中式结构：众生平等</h2><h2 id="分布式调度架构之单体调度-物质文明、精神文明一手抓" tabindex="-1"><a class="header-anchor" href="#分布式调度架构之单体调度-物质文明、精神文明一手抓" aria-hidden="true">#</a> 分布式调度架构之单体调度：物质文明、精神文明一手抓</h2><p>定义：单体调度是指，一个集群中只有一个节点运行调度进程，该节点对集群中的其他节点具有访问权限，可以搜集其他节点的资源信息、节点状态等进行统一管理，同时根据用户下发的任务对资源的需求，在调度器中进行任务与资源匹配，然后根据匹配结果将任务指派给其他节点。</p><p>架构：单体调度器也叫作集中式调度器，指的是使用中心化的方式去管理资源和调度任务。</p><p>特点：<strong>单体调度器拥有全局资源视图和全局任务，可以很容易地实现对任务的约束并实施全局性的调度策略</strong>。</p><p>单体调度代表：K8S、Borg 等。</p><h2 id="分布式调度架构之两层调度-物质文明、精神文明两手抓" tabindex="-1"><a class="header-anchor" href="#分布式调度架构之两层调度-物质文明、精神文明两手抓" aria-hidden="true">#</a> 分布式调度架构之两层调度：物质文明、精神文明两手抓</h2><p>定义：在两层调度器中，资源的使用状态同时由中央调度器和第二层调度器管理，但中央调度器一般只负责宏观的、大规模的资源分配，业务压力比较小；第二层调度器负责任务与资源的匹配，因此第二层调度可以有多个，以支持不同的任务类型。</p><p>特点：解决了单体调度架构中，中央服务器的单点瓶颈问题；相较于单体调度而言，提升了调度效率；支持多种类型的任务。</p><p>两层调度代表：YARN、Mesos 等。</p><h2 id="分布式调度架构之共享状态调度-物质文明、精神文明多手协商抓" tabindex="-1"><a class="header-anchor" href="#分布式调度架构之共享状态调度-物质文明、精神文明多手协商抓" aria-hidden="true">#</a> 分布式调度架构之共享状态调度：物质文明、精神文明多手协商抓</h2><p>定义：共享状态调度架构沿袭了单体架构的模式，通过将单体调度器分解为多个调度器，每个调度器都有全局的资源状态信息，从而实现最优的任务调度。</p><h2 id="分布式通信之远程调用-我是你的千里眼" tabindex="-1"><a class="header-anchor" href="#分布式通信之远程调用-我是你的千里眼" aria-hidden="true">#</a> 分布式通信之远程调用：我是你的千里眼</h2><p>本地过程调用（Local Procedure Call, LPC），是指运行在同一台机器上的进程之间的互相通信。</p><p>远程过程调用（Remote Procedure Call, RPC），是指不同机器中运行的进程之间的相互通信，某一机器上运行的进程在不知道底层通信细节的情况下，就像访问本地服务一样，去调用远程机器上的服务。</p><h2 id="分布式通信之发布订阅-送货上门" tabindex="-1"><a class="header-anchor" href="#分布式通信之发布订阅-送货上门" aria-hidden="true">#</a> 分布式通信之发布订阅：送货上门</h2><h2 id="分布式通信之消息队列-货物自取" tabindex="-1"><a class="header-anchor" href="#分布式通信之消息队列-货物自取" aria-hidden="true">#</a> 分布式通信之消息队列：货物自取</h2><h2 id="cap-理论-这顶帽子我不想要" tabindex="-1"><a class="header-anchor" href="#cap-理论-这顶帽子我不想要" aria-hidden="true">#</a> CAP 理论：这顶帽子我不想要</h2><p>CAP 是指：在一个分布式系统中， 一致性、可用性和分区容错性，最多只能同时满足其中两项。</p><ul><li><strong>一致性（C：Consistency）</strong> - 多个数据副本是否能保持一致</li><li><strong>可用性（A：Availability）</strong>- 分布式系统在面对各种异常时可以提供正常服务的能力</li><li><strong>分区容错性（P：Partition Tolerance）</strong> - 分布式系统在遇到任何网络分区故障的时候，仍然需要能对外提供一致性和可用性的服务，除非是整个网络环境都发生了故障</li></ul><p>在分布式系统中，分区容错性必不可少，因为需要总是假设网络是不可靠的；CAP 理论实际在是要在可用性和一致性之间做权衡。</p><ul><li>CP - 需要让所有节点下线成为不可用的状态，等待同步完成。</li><li>AP - 在同步过程中允许读取所有节点的数据，但是数据可能不一致。</li></ul><h2 id="分布式数据存储系统之三要素-顾客、导购与货架" tabindex="-1"><a class="header-anchor" href="#分布式数据存储系统之三要素-顾客、导购与货架" aria-hidden="true">#</a> 分布式数据存储系统之三要素：顾客、导购与货架</h2><p>数据的生产和消费</p><p>数据特征：结构化数据、半结构化数据、非结构化数据</p><p>分区和复制</p><h2 id="数据分布方式之哈希与一致性哈希-掐指一算-与-掐指两算-的事" tabindex="-1"><a class="header-anchor" href="#数据分布方式之哈希与一致性哈希-掐指一算-与-掐指两算-的事" aria-hidden="true">#</a> 数据分布方式之哈希与一致性哈希：“掐指一算”与“掐指两算”的事</h2><p>分布式数据存储选型的考量维度：</p><p>数据均匀：数据存储、访问尽量均衡</p><p>数据稳定：当数据存储集群扩容或缩容时，数据分布规则应尽量稳定，不要出现大范围的数据迁移。</p><p>节点异构性：应考虑集群中不同节点硬件配置的差异，将数据承载根据配置尽量均衡</p><h2 id="分布式数据复制技术-分身有术" tabindex="-1"><a class="header-anchor" href="#分布式数据复制技术-分身有术" aria-hidden="true">#</a> 分布式数据复制技术：分身有术</h2><p>数据复制是指，如何让主备数据库保持数据一致的技术。</p><p>复制技术分类</p><ul><li>同步 - 注重一致性（CP 模型）。数据更新时，主节点必须要同步所有从节点，才提交更新。</li><li>异步 - 注重可用性（AP 模型）。数据更新时，主节点处理完后，直接提交更新；从节点异步进行数据的同步。</li><li>半同步 - 采用折中处理。数据更新时，主节点同步部分从节点（通常为一个节点或一半节点）成功后，才提交更新。</li></ul><p>很多分布式存储支持通过配置，切换复制策略，以满足不同场景的需要。</p><h2 id="分布式数据之缓存技术-身手钥钱-随身带" tabindex="-1"><a class="header-anchor" href="#分布式数据之缓存技术-身手钥钱-随身带" aria-hidden="true">#</a> 分布式数据之缓存技术：“身手钥钱”随身带</h2><h2 id="分布式高可靠之负载均衡-不患寡-而患不均" tabindex="-1"><a class="header-anchor" href="#分布式高可靠之负载均衡-不患寡-而患不均" aria-hidden="true">#</a> 分布式高可靠之负载均衡：不患寡，而患不均</h2><p>负载均衡（Load Balancing）是指将请求或流量均衡地分配到多个服务器或节点上，以实现资源的最优化利用和高效的响应速度。</p><p>负载均衡常见策略</p><ul><li>随机负载均衡 <ul><li>策略 - 将请求随机分发到候选服务器</li><li>特点 - 调用量越大，负载越均衡</li><li>适合场景 - 适合服务器硬件相同的场景</li></ul></li><li>轮询负载均衡 <ul><li>策略 - 将请求依次分发到候选服务器</li><li>特点 - 请求完全均匀分发</li><li>场景 - 适合服务器硬件相同的场景</li></ul></li><li>最小活跃数负载均衡 <ul><li>策略 - 将请求分发到连接数/请求数最少的候选服务器</li><li>特点 - 根据候选服务器当前的请求连接数，动态分配</li><li>适合场景 - 适用于对系统负载较为敏感或请求连接时长相差较大的场景</li></ul></li><li>哈希负载均衡 <ul><li>策略 - 根据一个 key （可以是唯一 ID、IP 等），通过哈希计算得到一个数值，用该数值在候选服务器列表的进行取模运算，得到的结果便是选中的服务器</li><li>特点 - 保证特定用户总是请求到相同的服务器，若服务器宕机，会话会丢失</li><li>适合场景 - 可以保证同一 IP 的客户端的请求会转发到同一台服务器上，用来实现会话粘滞（Sticky Session）</li></ul></li><li>一致性哈希负载均衡 <ul><li>策略 - 相同的请求尽可能落到同一个服务器上。尽可能是指：服务器可能发生上下线，少数服务器的变化不应该影响大多数的请求。当某台候选服务器宕机时，原本发往该服务器的请求，会基于虚拟节点，平摊到其它候选服务器，不会引起剧烈变动。</li><li>优点 - 加入和删除节点只影响哈希环中顺时针方向的相邻的节点，对其他节点无影响。</li><li>缺点 - 加减节点会造成哈希环中部分数据无法命中。当使用少量节点时，节点变化将大范围影响哈希环中数据映射，不适合少量数据节点的分布式方案。普通的一致性哈希分区在增减节点时需要增加一倍或减去一半节点才能保证数据和负载的均衡。</li><li>适合场景 - 一致性哈希可以很好的解决稳定性问题，可以将所有的存储节点排列在首尾相接的 Hash 环上，每个 key 在计算 Hash 后会顺时针找到临接的存储节点存放。而当有节点加入或退出时，仅影响该节点在 Hash 环上顺时针相邻的后续节点。</li></ul></li></ul><h2 id="分布式高可靠之流量控制-大禹治水-在疏不在堵" tabindex="-1"><a class="header-anchor" href="#分布式高可靠之流量控制-大禹治水-在疏不在堵" aria-hidden="true">#</a> 分布式高可靠之流量控制：大禹治水，在疏不在堵</h2><h2 id="分布式高可用之故障隔离-当断不断-反受其乱" tabindex="-1"><a class="header-anchor" href="#分布式高可用之故障隔离-当断不断-反受其乱" aria-hidden="true">#</a> 分布式高可用之故障隔离：当断不断，反受其乱</h2><h2 id="分布式高可用之故障恢复-知错能改-善莫大焉" tabindex="-1"><a class="header-anchor" href="#分布式高可用之故障恢复-知错能改-善莫大焉" aria-hidden="true">#</a> 分布式高可用之故障恢复：知错能改，善莫大焉</h2><h2 id="答疑篇-如何判断并解决网络分区问题" tabindex="-1"><a class="header-anchor" href="#答疑篇-如何判断并解决网络分区问题" aria-hidden="true">#</a> 答疑篇：如何判断并解决网络分区问题？</h2><h2 id="知识串联-以购买火车票的流程串联分布式核心技术" tabindex="-1"><a class="header-anchor" href="#知识串联-以购买火车票的流程串联分布式核心技术" aria-hidden="true">#</a> 知识串联：以购买火车票的流程串联分布式核心技术</h2><h2 id="搭建一个分布式实验环境-纸上得来终觉浅-绝知此事要躬行" tabindex="-1"><a class="header-anchor" href="#搭建一个分布式实验环境-纸上得来终觉浅-绝知此事要躬行" aria-hidden="true">#</a> 搭建一个分布式实验环境：纸上得来终觉浅，绝知此事要躬行</h2><h2 id="特别放送丨那些你不能错过的分布式系统论文" tabindex="-1"><a class="header-anchor" href="#特别放送丨那些你不能错过的分布式系统论文" aria-hidden="true">#</a> 特别放送丨那些你不能错过的分布式系统论文</h2><h3 id="分布式理论基础" tabindex="-1"><a class="header-anchor" href="#分布式理论基础" aria-hidden="true">#</a> 分布式理论基础</h3>',60),p={href:"https://lamport.azurewebsites.net/pubs/time-clocks.pdf",target:"_blank",rel:"noopener noreferrer"},c={href:"https://lamport.azurewebsites.net/pubs/byz.pdf",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.comp.nus.edu.sg/~gilbert/pubs/BrewersConjecture-SigAct.pdf",target:"_blank",rel:"noopener noreferrer"},b=t('<p>CAP Twelve Years Later: How the “Rules” Have Changed</p><p>BASE: An Acid Alternative</p><p>A Simple Totally Ordered Broadcast Protocol</p><p>Virtual Time and Global States of Distributed Systems</p><h3 id="分布式一致性算法" tabindex="-1"><a class="header-anchor" href="#分布式一致性算法" aria-hidden="true">#</a> 分布式一致性算法</h3><p>Paxos Made Simple</p><p>Paxos Made Practical</p><p>Paxos Made Live: An Engineering Perspective</p><p>Raft: In Search of an Understandable Consensus Algorithm</p><p>ZooKeeper: Wait-Free Coordination for Internet-Scale Systems</p><p>Using Paxos to Build a Scalable, Consistent, and Highly Available Datastore<br> Impossibility of Distributed Consensus With One Faulty Process</p><p>A Brief History of Consensus, 2PC and Transaction Commit</p><p>Consensus in the Presence of Partial Synchrony</p><h3 id="分布式数据结构" tabindex="-1"><a class="header-anchor" href="#分布式数据结构" aria-hidden="true">#</a> 分布式数据结构</h3><p>Chord: A Scalable Peer-to-Peer Lookup Service for Internet Applications</p><p>Pastry: Scalable, Distributed Object Location, and Routing for Large-Scale Peerto-Peer Systems</p><p>Kademlia: A Peer-to-Peer Information System Based on the XOR Metric</p><p>A Scalable Content-Addressable Network</p><p>Ceph: A Scalable, High-Performance Distributed File System</p><p>The Log-Structured-Merge-Tree</p><p>HBase: A NoSQL Database</p><p>Tango: Distributed Data Structure over a Shared Log</p><h3 id="分布式系统实战" tabindex="-1"><a class="header-anchor" href="#分布式系统实战" aria-hidden="true">#</a> 分布式系统实战</h3><p>The Google File System</p><p>BigTable: A Distributed Storage System for Structured Data</p><p>The Chubby Lock Service for Loosely-Coupled Distributed Systems</p><p>Finding a Needle in Haystack: Facebook’s Photo Storage</p><p>Windows Azure Storage: A Highly Available Cloud Storage Service with Strong Consistency</p><p>Resilient Distributed Datasets: A Fault-Tolerant Abstraction for In-Memory Cluster Computing</p><p>Scaling Distributed Machine Learning with the Parameter Server</p><p>Dremel: Interactive Analysis of Web-Scale Datasets</p><p>Pregel: A System for Large-Scale Graph Processing</p><p>Spanner: Google’s Globally-Distributed Database</p><p>Dynamo: Amazon’s Highly Available Key-value Store</p><p>S4: Distributed Stream Computing Platform</p><p>Storm @Twitter</p><p>Large-scale Cluster Management at Google with Borg</p><p>F1 - The Fault-Tolerant Distributed RDBMS Supporting Google’s Ad Business</p><p>Cassandra: A Decentralized Structured Storage System</p><p>MegaStore: Providing Scalable, Highly Available Storage for Interactive Services</p><p>Dapper, a Large-Scale Distributed Systems Tracing Infrastructure</p><p>Kafka: A distributed Messaging System for Log Processing</p><p>Amazon Aurora: Design Considerations for High Throughput Cloud-Native Relational Databases</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',44),f={href:"https://time.geekbang.org/column/intro/100046101",target:"_blank",rel:"noopener noreferrer"};function g(S,m){const a=h("ExternalLinkIcon");return d(),l("div",null,[o,e("p",null,[e("a",p,[r("Time, Clocks, and the Ordering of Events in a Distributed System"),i(a)])]),e("p",null,[e("a",c,[r("The Byzantine Generals Problem"),i(a)])]),e("p",null,[e("a",u,[r("Brewer’s Conjecture and the Feasibility of Consistent, Available, Partition-Tolerant Web Services"),i(a)])]),b,e("ul",null,[e("li",null,[e("a",f,[r("分布式协议与算法实战"),i(a)])])])])}const A=n(s,[["render",g],["__file","02.分布式技术原理与算法解析笔记.html.vue"]]);export{A as default};
