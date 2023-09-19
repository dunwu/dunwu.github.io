import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as i,c as l,a as e,b as s,d as t,e as r}from"./app-d8d56f9e.js";const a={},c=e("h1",{id:"redis-集群",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#redis-集群","aria-hidden":"true"},"#"),s(" Redis 集群")],-1),g={href:"https://redis.io/topics/cluster-tutorial",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,"Redis Cluster 既然被设计分布式系统，自然需要具备分布式系统的基本特性：伸缩性、高可用、一致性。",-1),u=e("ul",null,[e("li",null,[e("strong",null,"伸缩性"),s(" - Redis Cluster 通过划分虚拟 hash 槽来进行『分区』，以实现集群的伸缩性。")]),e("li",null,[e("strong",null,"高可用"),s(" - Redis Cluster 采用主从架构，支持『复制』和『自动故障转移』，以保证 Redis Cluster 的高可用。")]),e("li",null,[e("strong",null,"一致性"),s(" - 根据 CAP 理论，Consistency、Availability、Partition tolerance 三者不可兼得。而 Redis Cluster 的选择是 AP，即不保证『强一致性』，尽力达到『最终一致性』。")])],-1),p={href:"https://ramcloud.atlassian.net/wiki/download/attachments/6586375/raft.pdf",target:"_blank",rel:"noopener noreferrer"},_=r("<p>关键词：<code>高可用</code>、<code>监控</code>、<code>选主</code>、<code>故障转移</code>、<code>分区</code>、<code>Raft</code>、<code>Gossip</code></p>",1),b=e("h2",{id:"redis-cluster-分区",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#redis-cluster-分区","aria-hidden":"true"},"#"),s(" Redis Cluster 分区")],-1),f=e("h3",{id:"集群节点",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#集群节点","aria-hidden":"true"},"#"),s(" 集群节点")],-1),m={href:"https://redis.io/commands/cluster-meet/",target:"_blank",rel:"noopener noreferrer"},R=e("code",null,"CLUSTER MEET",-1),x=r('<p>向一个节点发送 <code>CLUSTER MEET</code> 命令，可以让当前节点与指定 IP、PORT 的节点进行三次握手，握手成功时，当前节点会将指定节点加入所在集群。</p><p><strong>集群节点保存键值对以及过期时间的方式与单机 Redis 服务完全相同</strong>。</p><p>Redis Cluster 节点分为主节点（master）和从节点（slave）：</p><ul><li>主节点用于处理槽。</li><li>从节点用于复制主节点， 并在主节点下线时， 代替主节点继续处理命令请求。</li></ul><h3 id="分配-hash-槽" tabindex="-1"><a class="header-anchor" href="#分配-hash-槽" aria-hidden="true">#</a> 分配 Hash 槽</h3><p>分布式存储需要解决的首要问题是把整个数据集按照**『分区规则』** 到<strong>多个节点</strong>，即每个节点负责整体数据的一个 <strong>子集</strong>。</p><p><strong>Redis Cluster 将整个数据库规划为 『16384』 个虚拟的哈希槽</strong>，数据库中的每个键都属于其中一个槽。<strong>每个节点都会记录哪些槽指派给了自己， 而哪些槽又被指派给了其他节点</strong>。</p><p><strong>如果数据库中有任何一个槽没有得到分配，那么集群处于『下线』状态</strong>。</p>',8),C={href:"https://redis.io/commands/cluster-addslots",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"CLUSTER ADDSLOTS",-1),v=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> CLUSTER ADDSLOTS <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>集群中的每个节点负责一部分哈希槽，比如集群中有３个节点，则：</p><ul><li>节点Ａ存储的哈希槽范围是：0 – 5500</li><li>节点Ｂ存储的哈希槽范围是：5501 – 11000</li><li>节点Ｃ存储的哈希槽范围是：11001 – 16384</li></ul><h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h3><p>当客户端向节点发送与数据库键有关的命令时，接受命令的节点会<strong>计算出命令要处理的数据库属于哪个槽</strong>，并<strong>检查这个槽是否指派给了自己</strong>：</p><ul><li>如果键所在的槽正好指派给了当前节点，那么当前节点直接执行命令。</li><li>如果键所在的槽没有指派给当前节点，那么节点会向客户端返回一个 <code>MOVED</code> 错误，指引客户端重定向至正确的节点。</li></ul><h4 id="计算键属于哪个槽" tabindex="-1"><a class="header-anchor" href="#计算键属于哪个槽" aria-hidden="true">#</a> 计算键属于哪个槽</h4><p>决定一个 key 应该分配到那个槽的算法是：<strong>计算该 key 的 CRC16 结果再模 16834</strong>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HASH_SLOT = CRC16(KEY) mod 16384
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当节点计算出 key 所属的槽为 i 之后，节点会根据以下条件判断槽是否由自己负责：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>clusterState.slots[i] == clusterState.myself
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="moved-错误" tabindex="-1"><a class="header-anchor" href="#moved-错误" aria-hidden="true">#</a> MOVED 错误</h4><p>节点在接到一个命令请求时，会先检查这个命令请求要处理的键所在的槽是否由自己负责， 如果不是的话， 节点将向客户端返回一个 <code>MOVED</code> 错误， <code>MOVED</code> 错误携带的信息可以指引客户端转向至正在负责相关槽的节点。</p><p><code>MOVED</code> 错误的格式为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>MOVED <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>ip<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>port<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>提示：<code>MOVED</code> 命令的作用有点类似 HTTP 协议中的重定向。</p></blockquote><h3 id="重新分区" tabindex="-1"><a class="header-anchor" href="#重新分区" aria-hidden="true">#</a> 重新分区</h3><p>对 Redis Cluster 的重新分片工作是由客户端（redis-trib）执行的， <strong>重新分片的关键是将属于某个槽的所有键值对从一个节点转移至另一个节点</strong>。</p><p>重新分区操作可以**『在线』**进行，在重新分区的过程中，集群不需要下线，并且源节点和目标节点都可以继续处理命令请求。</p><p>重新分区的实现原理如下图所示：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/database/redis/redis-cluster-trib.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="ask-错误" tabindex="-1"><a class="header-anchor" href="#ask-错误" aria-hidden="true">#</a> ASK 错误</h3><p>如果节点 A 正在迁移槽 <code>i</code> 至节点 B ， 那么当节点 A 没能在自己的数据库中找到命令指定的数据库键时， 节点 A 会向客户端返回一个 <code>ASK</code> 错误， 指引客户端到节点 B 继续查找指定的数据库键。</p><p><code>ASK</code> 错误与 <code>MOVED</code> 的区别在于：</p><ul><li><code>MOVED</code> 错误表示槽的负责权已经从一个节点转移到了另一个节点；</li><li>而 <code>ASK</code> 错误只是两个节点在迁移槽的过程中使用的一种临时措施。</li></ul><p>判断 ASK 错误的过程如下图所示：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/database/redis/redis-ask.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="redis-cluster-复制" tabindex="-1"><a class="header-anchor" href="#redis-cluster-复制" aria-hidden="true">#</a> Redis Cluster 复制</h2><p>Redis Cluster 中的节点分为主节点和从节点，其中主节点用于处理槽，而从节点则用于复制某个主节点，并在被复制的主节点下线时，代替下线主节点继续处理命令请求。</p><p>向一个节点发送命令 <code>CLUSTER REPLICATE &lt;node_id&gt;</code> 可以让接收命令的节点成为 node_id 所指定节点的从节点，并开始对主节点进行复制。</p><p>Redis Cluster 节点间的复制是『异步』的。</p><h2 id="redis-cluster-故障转移" tabindex="-1"><a class="header-anchor" href="#redis-cluster-故障转移" aria-hidden="true">#</a> Redis Cluster 故障转移</h2><h3 id="故障检测" tabindex="-1"><a class="header-anchor" href="#故障检测" aria-hidden="true">#</a> 故障检测</h3><p><strong>集群中每个节点都会定期向集群中的其他节点发送 <code>PING</code> 消息，以此来检测对方是否在线</strong>。</p><p>节点的状态信息可以分为：</p><ul><li>在线状态；</li><li>疑似下线状态（<code>PFAIL</code>） - 即在规定的时间内，没有应答 <code>PING</code> 消息</li><li>已下线状态（<code>FAIL</code>） - 半数以上负责处理槽的主节点都将某个主节点视为『疑似下线』，则这个主节点将被标记为『已下线』</li></ul><h3 id="故障转移" tabindex="-1"><a class="header-anchor" href="#故障转移" aria-hidden="true">#</a> 故障转移</h3><ol><li>下线主节点的所有从节点中，会有一个从节点被选中。</li><li>被选中的从节点会执行 <code>SLAVEOF no one</code> 命令，成为新的主节点。</li><li>新的主节点会撤销所有对已下线主节点的槽指派，并将这些槽全部指派给自己。</li><li>新的主节点向集群广播一条 <code>PONG</code> 消息，告知其他节点这个从节点已变成主节点。</li><li>新的主节点开始接收和自己负责处理的槽有关的命令请求，故障转移完成。</li></ol><h3 id="选主" tabindex="-1"><a class="header-anchor" href="#选主" aria-hidden="true">#</a> 选主</h3>`,39),y={href:"https://ramcloud.atlassian.net/wiki/download/attachments/6586375/raft.pdf",target:"_blank",rel:"noopener noreferrer"},S=r('<ol><li>从节点发现自己的主节点状态为 <code>FAIL</code>。</li><li>从节点将自己记录的纪元（<code>epoch</code>）加 1，并广播消息，要求所有收到消息且有投票权的主节点都为自己投票。——这里的纪元（<code>epoch</code>），相当于 Raft 协议中的选期（<code>term</code>）。因个人习惯，后面统一将纪元描述为选期。</li><li>如果某主节点具有投票权（它正在负责处理槽），并且这个主节点尚未投票，那么主节点就返回一条确认消息，表示支持该从节点成为新的主节点。</li><li>每个参与选举的从节点都会根据收到的确认消息，统计自己所得的选票。</li><li>假设集群中存在 N 个具有投票权的主节点，那么<strong>当某从节点得到『半数以上』（<code>N / 2 + 1</code>）的选票，则该从节点当选为新的主节点</strong>。</li><li>由于每个选期中，任意具有投票权的主节点『只能投一票』，所以获得『半数以上』选票的从节点只能有一个。</li><li>如果在一个选期中，没有从节点能获得『半数以上』投票，则本次选期作废，开始进入下一个选期，直到选出新的主节点为止。</li></ol><h2 id="redis-cluster-通信" tabindex="-1"><a class="header-anchor" href="#redis-cluster-通信" aria-hidden="true">#</a> Redis Cluster 通信</h2>',2),E=e("strong",null,"集群中的节点通过发送和接收消息来进行通信",-1),L={href:"http://publicatio.bibl.u-szeged.hu/1529/1/gossip11.pdf",target:"_blank",rel:"noopener noreferrer"},A=r('<p>Redis Cluster 采用 Gossip 协议基于两个主要目标：<strong>去中心化</strong>以及<strong>失败检测</strong>。</p><p>Redis Cluster 中，每个节点之间都会同步信息，但是每个节点的信息不保证实时的，即无法保证数据强一致性，但是保证**『数据最终一致性』**——当集群中发生节点增减、故障、主从关系变化、槽信息变更等事件时，通过不断的通信，在经过一段时间后，所有的节点都会同步集群全部节点的最新状态。</p><p>Redis Cluster 节点发送的消息主要有以下五种：</p><ul><li><code>MEET</code> - 请求接收方加入发送方所在的集群。</li><li><code>PING</code> - 集群中每个节点每隔一段时间（默认为一秒）从已知节点列表中随机选出五个节点，然后对这五个节点中最久没联系的节点发送 <code>PING</code> 消息，以此检测被选中的节点是否在线。</li><li><code>PONG</code> - 当接收方收到发送方发来的 <code>MEET</code> 消息或 <code>PING</code> 消息时，会返回一条 <code>PONG</code> 消息作为应答。</li><li><code>FAIL</code> - 当一个主节点 A 判断另一个主节点 B 已经进入 <code>FAIL</code> 状态时，节点 A 会向集群广播一条关于节点 B 的 <code>FAIL</code> 消息，所有收到这条消息的节点都会立即将节点 B 标记为已下线。</li><li><code>PUBLISH</code> - 当节点收到一个 <code>PUBLISH</code> 命令时，节点会执行这个命令，并向集群广播一条 <code>PUBLISH</code> 消息，所有接受到这条消息的节点都会执行相同的 <code>PUBLISH</code> 命令。</li></ul><h2 id="redis-cluster-应用" tabindex="-1"><a class="header-anchor" href="#redis-cluster-应用" aria-hidden="true">#</a> Redis Cluster 应用</h2><h3 id="集群功能限制" tabindex="-1"><a class="header-anchor" href="#集群功能限制" aria-hidden="true">#</a> 集群功能限制</h3><p>Redis Cluster 相对 <strong>单机</strong>，存在一些功能限制，需要 <strong>开发人员</strong> 提前了解，在使用时做好规避。</p><ul><li><code>key</code> <strong>批量操作</strong> 支持有限：类似 <code>mset</code>、<code>mget</code> 操作，目前只支持对具有相同 <code>slot</code> 值的 <code>key</code> 执行 <strong>批量操作</strong>。对于 <strong>映射为不同</strong> <code>slot</code> 值的 <code>key</code> 由于执行 <code>mget</code>、<code>mget</code> 等操作可能存在于多个节点上，因此不被支持。</li><li><code>key</code> <strong>事务操作</strong> 支持有限：只支持 <strong>多</strong> <code>key</code> 在 <strong>同一节点上</strong> 的 <strong>事务操作</strong>，当多个 <code>key</code> 分布在 <strong>不同</strong> 的节点上时 <strong>无法</strong> 使用事务功能。</li><li><code>key</code> 作为 <strong>数据分区</strong> 的最小粒度，不能将一个 <strong>大的键值</strong> 对象如 <code>hash</code>、<code>list</code> 等映射到 <strong>不同的节点</strong>。</li><li>不支持 <strong>多数据库空间</strong>：<strong>单机</strong> 下的 Redis 可以支持 <code>16</code> 个数据库（<code>db0 ~ db15</code>），<strong>集群模式</strong> 下只能使用 <strong>一个</strong> 数据库空间，即 <code>db0</code>。</li><li><strong>复制结构</strong> 只支持一层：<strong>从节点</strong> 只能复制 <strong>主节点</strong>，不支持 <strong>嵌套树状复制</strong> 结构。</li></ul><h3 id="集群规模限制" tabindex="-1"><a class="header-anchor" href="#集群规模限制" aria-hidden="true">#</a> 集群规模限制</h3><p>Redis Cluster 的优点是易于使用。分区、主从复制、弹性扩容这些功能都可以做到自动化，通过简单的部署就可以获得一个大容量、高可靠、高可用的 Redis 集群，并且对于应用来说，近乎于是透明的。</p><p>所以，<strong>Redis Cluster 非常适合构建中小规模 Redis 集群</strong>，这里的中小规模指的是，大概几个到几十个节点这样规模的 Redis 集群。</p><p>但是 Redis Cluster 不太适合构建超大规模集群，主要原因是，它采用了去中心化的设计。</p><p>Redis 的每个节点上，都保存了所有槽和节点的映射关系表，客户端可以访问任意一个节点，再通过重定向命令，找到数据所在的那个节点。那么，这个映射关系表是如何更新的呢？Redis Cluster 采用了一种去中心化的流言 (Gossip) 协议来传播集群配置的变化。</p><p>Gossip 协议的优点是去中心化；缺点是传播速度慢，并且是集群规模越大，传播的越慢。</p><h3 id="集群配置" tabindex="-1"><a class="header-anchor" href="#集群配置" aria-hidden="true">#</a> 集群配置</h3><p>我们后面会部署一个 Redis Cluster 作为例子，在那之前，先介绍一下集群在 redis.conf 中的参数。</p><ul><li><strong>cluster-enabled</strong> <code>&lt;yes/no&gt;</code> - 如果配置”yes”则开启集群功能，此 redis 实例作为集群的一个节点，否则，它是一个普通的单一的 redis 实例。</li><li><strong>cluster-config-file</strong> <code>&lt;filename&gt;</code> - 注意：虽然此配置的名字叫“集群配置文件”，但是此配置文件不能人工编辑，它是集群节点自动维护的文件，主要用于记录集群中有哪些节点、他们的状态以及一些持久化参数等，方便在重启时恢复这些状态。通常是在收到请求之后这个文件就会被更新。</li><li><strong>cluster-node-timeout</strong> <code>&lt;milliseconds&gt;</code> - 这是集群中的节点能够失联的最大时间，超过这个时间，该节点就会被认为故障。如果主节点超过这个时间还是不可达，则用它的从节点将启动故障迁移，升级成主节点。注意，任何一个节点在这个时间之内如果还是没有连上大部分的主节点，则此节点将停止接收任何请求。</li><li><strong>cluster-slave-validity-factor</strong> <code>&lt;factor&gt;</code> - 如果设置成０，则无论从节点与主节点失联多久，从节点都会尝试升级成主节点。如果设置成正数，则 cluster-node-timeout 乘以 cluster-slave-validity-factor 得到的时间，是从节点与主节点失联后，此从节点数据有效的最长时间，超过这个时间，从节点不会启动故障迁移。假设 cluster-node-timeout=5，cluster-slave-validity-factor=10，则如果从节点跟主节点失联超过 50 秒，此从节点不能成为主节点。注意，如果此参数配置为非 0，将可能出现由于某主节点失联却没有从节点能顶上的情况，从而导致集群不能正常工作，在这种情况下，只有等到原来的主节点重新回归到集群，集群才恢复运作。</li><li><strong>cluster-migration-barrier</strong> <code>&lt;count&gt;</code> - 主节点需要的最小从节点数，只有达到这个数，主节点失败时，它从节点才会进行迁移。更详细介绍可以看本教程后面关于副本迁移到部分。</li><li><strong>cluster-require-full-coverage</strong> <code>&lt;yes/no&gt;</code> - 在部分 key 所在的节点不可用时，如果此参数设置为”yes”(默认值), 则整个集群停止接受操作；如果此参数设置为”no”，则集群依然为可达节点上的 key 提供读操作。</li></ul><h2 id="其他-redis-集群方案" tabindex="-1"><a class="header-anchor" href="#其他-redis-集群方案" aria-hidden="true">#</a> 其他 Redis 集群方案</h2><p>Redis Cluster 不太适合用于大规模集群，所以，如果要构建超大 Redis 集群，需要选择替代方案。一般有三种方案类型：</p><ul><li>客户端分区方案</li><li>代理分区方案</li><li>查询路由方案</li></ul><h3 id="客户端分区方案" tabindex="-1"><a class="header-anchor" href="#客户端分区方案" aria-hidden="true">#</a> 客户端分区方案</h3><p><strong>客户端</strong> 就已经决定数据会被 <strong>存储</strong> 到哪个 Redis 节点或者从哪个 Redis 节点 <strong>读取数据</strong>。其主要思想是采用 <strong>哈希算法</strong> 将 Redis 数据的 <code>key</code> 进行散列，通过 <code>hash</code> 函数，特定的 <code>key</code>会 <strong>映射</strong> 到特定的 Redis 节点上。</p>',22),P=e("strong",null,"客户端分区方案",-1),w=e("strong",null,"多实例集群",-1),T={href:"https://github.com/redis/jedis",target:"_blank",rel:"noopener noreferrer"},I=e("strong",null,"Jedis",-1),O=e("strong",null,"结合缓存池",-1),G=r('<ul><li><strong>优点</strong>：不使用 <strong>第三方中间件</strong>，<strong>分区逻辑</strong> 可控，<strong>配置</strong> 简单，节点之间无关联，容易 <strong>线性扩展</strong>，灵活性强。</li><li><strong>缺点</strong>：<strong>客户端</strong> 无法 <strong>动态增删</strong> 服务节点，客户端需要自行维护 <strong>分发逻辑</strong>，客户端之间 <strong>无连接共享</strong>，会造成 <strong>连接浪费</strong>。</li></ul><h3 id="代理分区方案" tabindex="-1"><a class="header-anchor" href="#代理分区方案" aria-hidden="true">#</a> 代理分区方案</h3><p><strong>客户端</strong> 发送请求到一个 <strong>代理组件</strong>，<strong>代理</strong> 解析 <strong>客户端</strong> 的数据，并将请求转发至正确的节点，最后将结果回复给客户端。</p><ul><li><strong>优点</strong>：简化 <strong>客户端</strong> 的分布式逻辑，<strong>客户端</strong> 透明接入，切换成本低，代理的 <strong>转发</strong> 和 <strong>存储</strong> 分离。</li><li><strong>缺点</strong>：多了一层 <strong>代理层</strong>，加重了 <strong>架构部署复杂度</strong> 和 <strong>性能损耗</strong>。</li></ul>',4),M=e("strong",null,"代理分区",-1),N={href:"https://github.com/twitter/twemproxy",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/CodisLabs/codis",target:"_blank",rel:"noopener noreferrer"},D=e("strong",null,"Codis",-1),B=e("h4",{id:"twemproxy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#twemproxy","aria-hidden":"true"},"#"),s(" Twemproxy")],-1),K={href:"https://github.com/twitter/twemproxy",target:"_blank",rel:"noopener noreferrer"},U=e("code",null,"nutcraker",-1),F=e("strong",null,"中间代理服务器",-1),H={href:"https://github.com/twitter/twemproxy",target:"_blank",rel:"noopener noreferrer"},q=e("strong",null,"代理",-1),j=e("strong",null,"路由规则",-1),J={href:"https://github.com/twitter/twemproxy",target:"_blank",rel:"noopener noreferrer"},z=e("strong",null,"单点故障",-1),Y=e("strong",null,"高可用方案",-1),Z=r('<ul><li><strong>优点</strong>：应用范围广，稳定性较高，中间代理层 <strong>高可用</strong>。</li><li><strong>缺点</strong>：无法平滑地 <strong>水平扩容/缩容</strong>，无 <strong>可视化管理界面</strong>，运维不友好，出现故障，不能 <strong>自动转移</strong>。</li></ul><h4 id="codis" tabindex="-1"><a class="header-anchor" href="#codis" aria-hidden="true">#</a> Codis</h4>',2),Q={href:"https://github.com/CodisLabs/codis",target:"_blank",rel:"noopener noreferrer"},W=e("strong",null,"Codis",-1),X=e("strong",null,"分布式",-1),$=e("strong",null,"原生的",-1),ee={href:"https://github.com/CodisLabs/codis",target:"_blank",rel:"noopener noreferrer"},se=e("strong",null,"Codis",-1),oe=e("strong",null,"处理请求的转发",-1),te=e("strong",null,"数据迁移",-1),re={href:"https://github.com/CodisLabs/codis",target:"_blank",rel:"noopener noreferrer"},ne=e("strong",null,"Codis",-1),de=e("strong",null,"代理层",-1),ie=e("strong",null,"客户端",-1),le=r('<ul><li><strong>优点</strong>：实现了上层 Proxy 和底层 Redis 的 <strong>高可用</strong>，<strong>数据分区</strong> 和 <strong>自动平衡</strong>，提供 <strong>命令行接口</strong> 和 RESTful API，提供 <strong>监控</strong> 和 <strong>管理</strong> 界面，可以动态 <strong>添加</strong> 和 <strong>删除</strong> Redis 节点。</li><li><strong>缺点</strong>：<strong>部署架构</strong> 和 <strong>配置</strong> 复杂，不支持 <strong>跨机房</strong> 和 <strong>多租户</strong>，不支持 <strong>鉴权管理</strong>。</li></ul><h3 id="查询路由方案" tabindex="-1"><a class="header-anchor" href="#查询路由方案" aria-hidden="true">#</a> 查询路由方案</h3><p><strong>客户端随机地</strong> 请求任意一个 Redis 实例，然后由 Redis 将请求 <strong>转发</strong> 给 <strong>正确</strong> 的 Redis 节点。Redis Cluster 实现了一种 <strong>混合形式</strong> 的 <strong>查询路由</strong>，但并不是 <strong>直接</strong> 将请求从一个 Redis 节点 <strong>转发</strong> 到另一个 Redis 节点，而是在 <strong>客户端</strong> 的帮助下直接 <strong>重定向</strong>（ <code>redirected</code>）到正确的 Redis 节点。</p><ul><li><strong>优点</strong>：<strong>去中心化</strong>，数据按照 <strong>槽</strong> 存储分布在多个 Redis 实例上，可以平滑的进行节点 <strong>扩容/缩容</strong>，支持 <strong>高可用</strong> 和 <strong>自动故障转移</strong>，运维成本低。</li><li><strong>缺点</strong>：重度依赖 Redis-trib 工具，缺乏 <strong>监控管理</strong>，需要依赖 Smart Client (<strong>维护连接</strong>，<strong>缓存路由表</strong>，<code>MultiOp</code> 和 <code>Pipeline</code> 支持)。Failover 节点的 <strong>检测过慢</strong>，不如有 <strong>中心节点</strong> 的集群及时（如 ZooKeeper）。Gossip 消息采用广播方式，集群规模越大，开销越大。无法根据统计区分 <strong>冷热数据</strong>。</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',5),ae={href:"https://item.jd.com/11486101.html",target:"_blank",rel:"noopener noreferrer"},ce={href:"https://juejin.im/post/5b8fc5536fb9a05d2d01fb11",target:"_blank",rel:"noopener noreferrer"};function ge(he,ue){const o=d("ExternalLinkIcon");return i(),l("div",null,[c,e("blockquote",null,[e("p",null,[e("strong",null,[e("a",g,[s("Redis 集群（Redis Cluster）"),t(o)]),s(" 是 Redis 官方提供的『分布式数据库』方案")]),s("。")]),h,u,e("p",null,[s("Redis Cluster 应用了 "),e("a",p,[s("Raft 协议"),t(o)]),s(" 协议和 Gossip 协议。")]),_]),b,f,e("p",null,[s("Redis Cluster 由多个节点组成，节点刚启动时，彼此是相互独立的。"),e("strong",null,[s("节点通过握手（ "),e("a",m,[R,t(o)]),s(" 命令）来将其他节点添加到自己所处的集群中")]),s("。")]),x,e("p",null,[s("通过向节点发送 "),e("a",C,[k,t(o)]),s(" 命令，可以将一个或多个槽指派给节点负责。")]),v,e("blockquote",null,[e("p",null,[s("Redis Sentinel 和 Redis Cluster 的选主流程非常相似，二者都基于"),e("a",y,[s("Raft 协议"),t(o)]),s(" 实现。")])]),S,e("p",null,[E,s("。Redis Cluster 各实例之间的通信方式采用 "),e("a",L,[s("Gossip 协议"),t(o)]),s("来实现。")]),A,e("p",null,[P,s(" 的代表为 Redis Sharding，Redis Sharding 是 Redis Cluster 出来之前，业界普遍使用的 Redis "),w,s(" 方法。Java 的 Redis 客户端驱动库 "),e("a",T,[I,t(o)]),s("，支持 Redis Sharding 功能，即 ShardedJedis 以及 "),O,s(" 的 ShardedJedisPool。")]),G,e("p",null,[M,s(" 主流实现的有方案有 "),e("strong",null,[e("a",N,[s("Twemproxy"),t(o)])]),s(" 和 "),e("a",V,[D,t(o)]),s("。")]),B,e("p",null,[e("strong",null,[e("a",K,[s("Twemproxy"),t(o)])]),s(" 也叫 "),U,s("，是 Twitter 开源的一个 Redis 和 Memcache 的 "),F,s(" 程序。")]),e("p",null,[e("strong",null,[e("a",H,[s("Twemproxy"),t(o)])]),s(" 作为 "),q,s("，可接受来自多个程序的访问，按照 "),j,s("，转发给后台的各个 Redis 服务器，再原路返回。"),e("strong",null,[e("a",J,[s("Twemproxy"),t(o)])]),s(" 存在 "),z,s(" 问题，需要结合 Lvs 和 Keepalived 做 "),Y,s("。")]),Z,e("p",null,[e("a",Q,[W,t(o)]),s(" 是一个 "),X,s(" Redis 解决方案，对于上层应用来说，连接 Codis-Proxy 和直接连接 "),$,s(" Redis-Server 没有的区别。"),e("a",ee,[se,t(o)]),s(" 底层会 "),oe,s("，不停机的进行 "),te,s(" 等工作。"),e("a",re,[ne,t(o)]),s(" 采用了无状态的 "),de,s("，对于 "),ie,s(" 来说，一切都是透明的。")]),le,e("ul",null,[e("li",null,[e("a",ae,[s("《Redis 设计与实现》"),t(o)])]),e("li",null,[e("a",ce,[s("深入剖析 Redis 系列(三) - Redis 集群模式搭建与原理详解"),t(o)])])])])}const be=n(a,[["render",ge],["__file","23.Redis集群.html.vue"]]);export{be as default};
