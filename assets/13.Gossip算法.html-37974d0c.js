import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as n,c as a,a as s,b as i,d as e,e as l}from"./app-9f0b185d.js";const p={},g=l('<h1 id="分布式算法-gossip" tabindex="-1"><a class="header-anchor" href="#分布式算法-gossip" aria-hidden="true">#</a> 分布式算法 Gossip</h1><p>Gossip 也叫 Epidemic Protocol （流行病协议），这个协议基于<strong>最终一致性</strong>以及<strong>去中心化</strong>设计思想。主要用于<strong>分布式节点之间进行信息交换和数据同步</strong>，这种场景的一个最大特点就是组成的网络的节点都是对等节点，是非结构化网络（去中心化）。</p><p>Gossip 协议最早是在 1987 年发表在 ACM 上的论文 《Epidemic Algorithms for Replicated Database Maintenance》中被提出，其理论基础来源于流行病学的数学模型，这种场景的一个最大特点就是组成的网络的节点都是去中心化的对等节点，在信息同步过程中不能保证某个时刻所有节点都收到消息，但是理论上最终所有节点都会收到消息，实现最终一致性协议。</p><p>Gossip 协议是集群中节点相互通信的内部通信技术。 Gossip 是一种高效、轻量级、可靠的节点间广播协议，用于传播数据。它是去中心化的、“流行病”的、容错的和点对点通信协议。</p><h2 id="gossip-的应用" tabindex="-1"><a class="header-anchor" href="#gossip-的应用" aria-hidden="true">#</a> Gossip 的应用</h2><p>在 CASSANDRA 中，节点间使用 Gossip 协议交换信息，因此所有节点都可以快速了解集群中的所有其他节点。</p><p>Consul 使用名为 SERF 的 Gossip 协议有两个作用：</p><ul><li>发现新节点和宕机的节点</li><li>可靠且快速的事件广播，用于选举 Leader 等</li></ul><h2 id="gossip-的执行过程" tabindex="-1"><a class="header-anchor" href="#gossip-的执行过程" aria-hidden="true">#</a> Gossip 的执行过程</h2><p>Gossip 协议在概念上非常简单，代码也非常简单。它们背后的基本思想是：一个节点想要与网络中的其他节点共享一些信息。然后周期性地从节点集中随机选择一个节点并交换信息。接收信息的节点做同样的事情。信息定期发送到 N 个目标，N 称为扇出（<code>Fanout</code>）。</p><ul><li><strong>循环</strong>：传播信息的回合数</li><li><strong>扇出</strong>：一个节点在每个循环中闲聊的节点数。当一个节点想要广播一条消息时，它从系统中随机选择 t 个节点并将消息发送给它们。</li></ul><p><strong>Gossip 协议的执行过程</strong>：</p><p>Gossip 过程是由种子节点发起，当一个种子节点有状态需要更新到网络中的其他节点时，它会随机的选择周围几个节点散播消息，收到消息的节点也会重复该过程，直至最终网络中所有的节点都收到了消息。这个过程可能需要一定的时间，由于不能保证某个时刻所有节点都收到消息，但是理论上最终所有节点都会收到消息，因此它是一个最终一致性协议。</p><p><strong>为了表述清楚，我们先做一些前提设定</strong></p><ul><li><strong>种子节点</strong>周期性的散播消息，把周期限定为 1 秒</li><li>被感染节点随机选择 N 个邻接节点（fan-out）散播消息，这里把 fan-out 设置为 3，每次最多往 3 个节点散播。</li><li>节点只接收消息不反馈结果。</li><li>每次散播消息都选择<strong>尚未发送过的节点</strong>进行散播</li><li>收到消息的节点不再往发送节点散播，比如 A -&gt; B，那么 B 进行散播的时候，不再发给 A。</li></ul><p>注意：Gossip 过程是异步的，也就是说发消息的节点不会关注对方是否收到，即不等待响应；不管对方有没有收到，它都会每隔 1 秒向周围节点发消息。<strong>异步是它的优点，而消息冗余则是它的缺点</strong>。</p><p>Goosip 协议的信息传播和扩散通常需要由种子节点发起。整个传播过程可能需要一定的时间，由于不能保证某个时刻所有节点都收到消息，但是理论上最终所有节点都会收到消息，因此它是一个<strong>最终一致性</strong>协议。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210708234308.gif" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="gossip-类型" tabindex="-1"><a class="header-anchor" href="#gossip-类型" aria-hidden="true">#</a> Gossip 类型</h2><p>Gossip 有两种类型：</p><ul><li><strong>Anti-Entropy(反熵)</strong>：以固定的概率传播所有的数据。Anti-Entropy 是 SI model，节点只有两种状态，Suspective 和 Infective，叫做 simple epidemics。</li><li><strong>Rumor-Mongering(谣言传播)</strong>：仅传播新到达的数据。Rumor-Mongering 是 SIR model，节点有三种状态，Suspective，Infective 和 Removed，叫做 complex epidemics。</li></ul><p>熵是物理学上的一个概念，代表杂乱无章，而反熵就是在杂乱无章中寻求一致。本质上，<strong>反熵是一种通过异步修复实现最终一致性的方法</strong>。反熵指的是集群中的节点，每隔段时间就随机选择某个其他节点，然后通过互相交换自己的所有数据来消除两者之间的差异，实现数据的最终一致性。由于消息会不断反复的交换，因此消息数量是非常庞大的，无限制的（unbounded），这对一个系统来说是一个巨大的开销。所以，<strong>反熵不适合动态变化或节点数比较多的分布式环境</strong>。</p><p>谣言传播模型指的是当一个节点有了新数据后，这个节点变成活跃状态，并周期性地联系其他节点向其发送新数据，直到所有的节点都存储了该新数据。在谣言传播模型下，消息可以发送得更频繁，因为消息只包含最新 update，体积更小。而且，一个谣言消息在某个时间点之后会被标记为 removed，并且不再被传播，因此，谣言传播模型下，系统有一定的概率会不一致。而由于，谣言传播模型下某个时间点之后消息不再传播，因此消息是有限的，系统开销小。</p><p>一般来说，为了在通信代价和可靠性之间取得折中，需要将这两种方法结合使用。</p><p><strong>Gossip 中的通信模式</strong></p><p>在 Gossip 协议下，网络中两个节点之间有三种通信方式:</p><ul><li>Push: 节点 A 将数据 (key,value,version) 及对应的版本号推送给 B 节点，B 节点更新 A 中比自己新的数据</li><li>Pull：A 仅将数据 key, version 推送给 B，B 将本地比 A 新的数据（Key, value, version）推送给 A，A 更新本地</li><li>Push/Pull：与 Pull 类似，只是多了一步，A 再将本地比 B 新的数据推送给 B，B 则更新本地</li></ul><p>如果把两个节点数据同步一次定义为一个周期，则在一个周期内，Push 需通信 1 次，Pull 需 2 次，Push/Pull 则需 3 次。虽然消息数增加了，但从效果上来讲，Push/Pull 最好，理论上一个周期内可以使两个节点完全一致。直观上，Push/Pull 的收敛速度也是最快的。</p><h2 id="gossip-的特点" tabindex="-1"><a class="header-anchor" href="#gossip-的特点" aria-hidden="true">#</a> Gossip 的特点</h2><h3 id="gossip-的优点" tabindex="-1"><a class="header-anchor" href="#gossip-的优点" aria-hidden="true">#</a> Gossip 的优点</h3><ul><li><strong>扩展性</strong>：网络可以允许节点的任意增加和减少，新增加的节点的状态最终会与其他节点一致。</li><li><strong>容错</strong>：网络中任何节点的宕机和重启都不会影响 Gossip 消息的传播，Gossip 协议具有天然的分布式系统容错特性。</li><li><strong>去中心化</strong>：Gossip 协议不要求任何中心节点，所有节点都可以是对等的，任何一个节点无需知道整个网络状况，只要网络是连通的，任意一个节点就可以把消息散播到全网。</li><li><strong>一致性收敛</strong>：Gossip 协议中的消息会以一传十、十传百一样的指数级速度在网络中快速传播，因此系统状态的不一致可以在很快的时间内收敛到一致。消息传播速度达到了 logN。</li><li><strong>简单</strong>：Gossip 协议的过程极其简单，实现起来几乎没有太多复杂性。</li></ul><h3 id="gossip-的缺陷" tabindex="-1"><a class="header-anchor" href="#gossip-的缺陷" aria-hidden="true">#</a> Gossip 的缺陷</h3><p>分布式网络中，没有一种完美的解决方案，Gossip 协议跟其他协议一样，也有一些不可避免的缺陷，主要是两个：</p><ul><li><strong>消息的延迟</strong>：由于 Gossip 协议中，节点只会随机向少数几个节点发送消息，消息最终是通过多个轮次的散播而到达全网的，因此使用 Gossip 协议会造成不可避免的消息延迟。不适合用在对实时性要求较高的场景下。</li><li><strong>消息冗余</strong>：Gossip 协议规定，节点会定期随机选择周围节点发送消息，而收到消息的节点也会重复该步骤，因此就不可避免的存在消息重复发送给同一节点的情况，造成了消息的冗余，同时也增加了收到消息的节点的处理压力。而且，由于是定期发送，因此，即使收到了消息的节点还会反复收到重复消息，加重了消息的冗余。</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',35),d={href:"http://bitsavers.trailing-edge.com/pdf/xerox/parc/techReports/CSL-89-1_Epidemic_Algorithms_for_Replicated_Database_Maintenance.pdf",target:"_blank",rel:"noopener noreferrer"},h={href:"https://zhuanlan.zhihu.com/p/41228196",target:"_blank",rel:"noopener noreferrer"},c={href:"https://managementfromscratch.wordpress.com/2016/04/01/introduction-to-gossip/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://flopezluis.github.io/gossip-simulator/",target:"_blank",rel:"noopener noreferrer"};function f(m,_){const o=t("ExternalLinkIcon");return n(),a("div",null,[g,s("ul",null,[s("li",null,[s("a",d,[i("Epidemic Algorithms for Replicated Database Maintenance"),e(o)])]),s("li",null,[s("a",h,[i("P2P 网络核心技术：Gossip 协议"),e(o)])]),s("li",null,[s("a",c,[i("INTRODUCTION TO GOSSIP"),e(o)])]),s("li",null,[s("a",u,[i("Goosip 协议仿真动画"),e(o)])])])])}const x=r(p,[["render",f],["__file","13.Gossip算法.html.vue"]]);export{x as default};
