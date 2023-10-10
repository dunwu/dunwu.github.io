import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r,o,c as s,a as t,b as a,d as i,e as g}from"./app-207caadd.js";const l={},p=g('<h1 id="分布式一致性" tabindex="-1"><a class="header-anchor" href="#分布式一致性" aria-hidden="true">#</a> 分布式一致性</h1><h2 id="acid-理论" tabindex="-1"><a class="header-anchor" href="#acid-理论" aria-hidden="true">#</a> ACID 理论</h2><p>ACID 是数据库事务正确执行的四个基本要素。</p><ul><li><strong>原子性（Atomicity）</strong><ul><li>事务被视为不可分割的最小单元，事务中的所有操作要么全部提交成功，要么全部失败回滚。</li><li>回滚可以用日志来实现，日志记录着事务所执行的修改操作，在回滚时反向执行这些修改操作即可。</li></ul></li><li><strong>一致性（Consistency）</strong><ul><li>数据库在事务执行前后都保持一致性状态。</li><li>在一致性状态下，所有事务对一个数据的读取结果都是相同的。</li></ul></li><li><strong>隔离性（Isolation）</strong><ul><li>一个事务所做的修改在最终提交以前，对其它事务是不可见的。</li></ul></li><li><strong>持久性（Durability）</strong><ul><li>一旦事务提交，则其所做的修改将会永远保存到数据库中。即使系统发生崩溃，事务执行的结果也不能丢失。</li><li>可以通过数据库备份和恢复来实现，在系统发生奔溃时，使用备份的数据库进行数据恢复。</li></ul></li></ul><p><strong>一个支持事务（Transaction）中的数据库系统，必需要具有这四种特性，否则在事务过程（Transaction processing）当中无法保证数据的正确性，交易过程极可能达不到交易。</strong></p><ul><li>只有满足一致性，事务的执行结果才是正确的。</li><li>在无并发的情况下，事务串行执行，隔离性一定能够满足。此时只要能满足原子性，就一定能满足一致性。</li><li>在并发的情况下，多个事务并行执行，事务不仅要满足原子性，还需要满足隔离性，才能满足一致性。</li><li>事务满足持久化是为了能应对系统崩溃的情况。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/database/RDB/数据库ACID.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="本地事务和分布式事务" tabindex="-1"><a class="header-anchor" href="#本地事务和分布式事务" aria-hidden="true">#</a> 本地事务和分布式事务</h2><p>学习分布式之前，先了解一下本地事务的概念。</p><p>事务简单来说：<strong>一个会话中所进行所有的操作，要么同时成功，要么同时失败</strong>。</p><p>事务指的是满足 ACID 特性的一组操作，可以通过 <code>Commit</code> 提交一个事务，也可以使用 <code>Rollback</code> 进行回滚。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/database/RDB/数据库事务.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>分布式事务指的是事务操作跨越多个节点，并且要求满足事务的 ACID 特性</strong>。</p><p>分布式事务相比于单机事务，实现复杂度要高很多，主要是因为其存在以下<strong>难点</strong>：</p><ul><li><strong>事务的原子性</strong>：事务操作跨不同节点，当多个节点某一节点操作失败时，需要保证多节点操作的**都做或都不做（All or Nothing）**的原子性。</li><li><strong>事务的一致性</strong>：当发生网络传输故障或者节点故障，节点间数据复制通道中断，在进行事务操作时需要保证数据一致性，保证事务的任何操作都不会使得数据违反数据库定义的约束、触发器等规则。</li><li><strong>事务的隔离性</strong>：事务隔离性的本质就是如何正确多个并发事务的处理的读写冲突和写写冲突，因为在分布式事务控制中，可能会出现提交不同步的现象，这个时候就有可能出现“部分已经提交”的事务。此时并发应用访问数据如果没有加以控制，有可能出现“脏读”问题。</li></ul><p>在分布式领域，要实现强一致性，代价非常高昂。因此，有人基于 CAP 理论以及 BASE 理论，有人就提出了<strong>柔性事务</strong>的概念。柔性事务是指：在不影响系统整体可用性的情况下(Basically Available 基本可用)，允许系统存在数据不一致的中间状态(Soft State 软状态)，在经过数据同步的延时之后，最终数据能够达到一致。<strong>并不是完全放弃了 ACID，而是通过放宽一致性要求，借助本地事务来实现最终分布式事务一致性的同时也保证系统的吞吐</strong>。</p><h2 id="cap-理论" tabindex="-1"><a class="header-anchor" href="#cap-理论" aria-hidden="true">#</a> CAP 理论</h2><blockquote><p>CAP 定理是加州大学计算机科学家埃里克·布鲁尔提出来的猜想，后来被证明成为分布式计算领域公认的定理。</p></blockquote><p><strong>CAP 定理</strong>，指的是：<strong>在一个分布式系统中， 最多只能同时满足其中两项</strong>。</p><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20211102191636.png" style="width:400px;"><p>CAP 就是取 Consistency、Availability、Partition Tolerance 的首字母而命名。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20211102180526.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>一致性（<strong>C</strong>onsistency）：在任何给定时间，网络中的所有节点都具有完全相同（最近）的值。</li><li>可用性（<strong>A</strong>vailability）：对网络的每个请求都会收到响应，但不能保证返回的数据是最新的。</li><li>分区容错性（<strong>P</strong>artition Tolerance）：即使任意数量的节点出现故障，网络仍会继续运行。</li></ul><h3 id="一致性" tabindex="-1"><a class="header-anchor" href="#一致性" aria-hidden="true">#</a> 一致性</h3><p>一致性（Consistency）指的是<strong>多个数据副本是否能保持一致</strong>的特性。</p><p>在一致性的条件下，分布式系统在执行写操作成功后，如果所有用户都能够读取到最新的值，该系统就被认为具有强一致性。</p><p>数据一致性又可以分为以下几点：</p><ul><li><strong>强一致性</strong> - 数据更新操作结果和操作响应总是一致的，即操作响应通知更新失败，那么数据一定没有被更新，而不是处于不确定状态。</li><li><strong>最终一致性</strong> - 即物理存储的数据可能是不一致的，终端用户访问到的数据可能也是不一致的，但系统经过一段时间的自我修复和修正，数据最终会达到一致。</li></ul><p>举例来说，某条记录是 v0，用户向 G1 发起一个写操作，将其改为 v1。</p><figure><img src="https://www.wangbase.com/blogimg/asset/201807/bg2018071602.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>接下来，用户的读操作就会得到 v1。这就叫一致性。</p><figure><img src="https://www.wangbase.com/blogimg/asset/201807/bg2018071603.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>问题是，用户有可能向 G2 发起读操作，由于 G2 的值没有发生变化，因此返回的是 v0。G1 和 G2 读操作的结果不一致，这就不满足一致性了。</p><figure><img src="https://www.wangbase.com/blogimg/asset/201807/bg2018071604.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>为了让 G2 也能变为 v1，就要在 G1 写操作的时候，让 G1 向 G2 发送一条消息，要求 G2 也改成 v1。</p><figure><img src="https://www.wangbase.com/blogimg/asset/201807/bg2018071605.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>这样的话，用户向 G2 发起读操作，也能得到 v1。</p><figure><img src="https://www.wangbase.com/blogimg/asset/201807/bg2018071606.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="可用性" tabindex="-1"><a class="header-anchor" href="#可用性" aria-hidden="true">#</a> 可用性</h3><p>可用性指<strong>分布式系统在面对各种异常时可以提供正常服务的能力</strong>，可以用系统可用时间占总时间的比值来衡量，4 个 9 的可用性表示系统 <code>99.99%</code> 的时间是可用的。</p><p>在可用性条件下，系统提供的服务一直处于可用的状态，对于用户的每一个操作请求总是能够在有限的时间内返回结果。</p><h3 id="分区容错性" tabindex="-1"><a class="header-anchor" href="#分区容错性" aria-hidden="true">#</a> 分区容错性</h3><p>分区容错性（Partition Tolerance）指 <strong>分布式系统在遇到任何网络分区故障的时候，仍然需要能对外提供一致性和可用性的服务，除非是整个网络环境都发生了故障</strong>。</p><p>在一个分布式系统里面，节点组成的网络本来应该是连通的。然而可能因为一些故障，使得有些节点之间不连通了，整个网络就分成了几块区域。数据就散布在了这些不连通的区域中，这就叫分区。</p><p>假设，某个数据项只在一个节点中保存，那么分区出现后，和这个节点不连通的部分就访问不到这个数据了。这时分区就是无法容忍的。</p><p>提高分区容错性的办法就是一个数据项复制到多个节点上，那么出现分区之后，这一数据项就可能分布到各个区里。容错性就提高了。</p><p>然而，要把数据复制到多个节点，就会带来一致性的问题，就是多个节点上面的数据可能是不一致的。要保证一致，每次写操作就都要等待全部节点写成功，而这等待又会带来可用性的问题。</p><p>总的来说就是，数据存在的节点越多，分区容错性越高，但要复制更新的数据就越多，一致性就越难保证。为了保证一致性，更新所有节点数据所需要的时间就越长，可用性就会降低。</p><p>大多数分布式系统都分布在多个子网络，每个子网络就叫做一个区（Partition）。分区容错的意思是，区间通信可能失败。比如，一台服务器放在中国，另一台服务器放在美国，这就是两个区，它们之间可能无法通信。</p><figure><img src="https://www.wangbase.com/blogimg/asset/201807/bg2018071601.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>上图中，G1 和 G2 是两台跨区的服务器。G1 向 G2 发送一条消息，G2 可能无法收到。系统设计的时候，必须考虑到这种情况。</p><p><strong>一般来说，分区容错无法避免</strong>，因此可以认为 CAP 的 P 总是成立。CAP 定理告诉我们，剩下的 C 和 A 无法同时做到。</p><h3 id="ap-or-cp" tabindex="-1"><a class="header-anchor" href="#ap-or-cp" aria-hidden="true">#</a> AP or CP</h3><p>在分布式系统中，分区容错性必不可少，因为需要总是假设网络是不可靠的。因此，<strong>CAP 理论实际在是要在可用性和一致性之间做权衡</strong>。</p><p>由于分布式数据存储（如区块链）的性质，分区容错性是一个既定的事实；网络中总会有失败/无法访问的节点（尤其是因为互联网的不稳定特性）。 CAP 定理指出，当存在 P（分区）时，必须在 C（一致性）或 A（可用性）之间进行选择。</p><p>（1）AP 模式</p><blockquote><p><strong>AP</strong> <strong>模式</strong>：对网络的每个请求都会收到响应，即使网络由于网络分区故障而无法保证它是最新的。</p></blockquote><p>选择 <strong>AP</strong> <strong>模式</strong>，实现了服务的高可用。用户访问系统的时候，都能得到响应数据，不会出现响应错误；但是，当出现分区故障时，相同的读操作，访问不同的节点，得到响应数据可能不一样。</p><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20211102191819.png" style="width:500px;"><p>（2）CP 模式</p><blockquote><p><strong>CP</strong> <strong>模式</strong>：如果由于网络分区（故障节点）而无法保证特定信息是最新的，则系统将返回错误或超时。</p></blockquote><p>选择 <strong>CP</strong> <strong>模式</strong>，这样能够提供一部分的可用性。采用 CP 模型的分布式系统，一旦因为消息丢失、延迟过高发生了网络分区，就影响用户的体验和业务的可用性。因为为了防止数据不一致，集群将拒绝新数据的写入。</p><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20211102191820.png" style="width:500px;"><h2 id="base-理论" tabindex="-1"><a class="header-anchor" href="#base-理论" aria-hidden="true">#</a> BASE 理论</h2><h3 id="什么是-base-定理" tabindex="-1"><a class="header-anchor" href="#什么是-base-定理" aria-hidden="true">#</a> 什么是 BASE 定理</h3><blockquote><p><strong>BASE 定理是对 CAP 中一致性和可用性权衡的结果</strong>。</p></blockquote><p>BASE 是 <strong><code>基本可用（Basically Available）</code></strong>、<strong><code>软状态（Soft State）</code></strong> 和 <strong><code>最终一致性（Eventually Consistent）</code></strong> 三个短语的缩写。</p><p>BASE 理论的核心思想是：即使无法做到强一致性，但每个应用都可以根据自身业务特点，采用适当的方式来使系统达到最终一致性。</p><ul><li>**基本可用（Basically Available）**分布式系统在出现故障的时候，<strong>保证核心可用，允许损失部分可用性</strong>。例如，电商在做促销时，为了保证购物系统的稳定性，部分消费者可能会被引导到一个降级的页面。</li><li><strong>软状态（Soft State）<strong>指允许系统中的数据存在中间状态，并认为该中间状态不会影响系统整体可用性，即</strong>允许系统不同节点的数据副本之间进行同步的过程存在延时</strong>。</li><li><strong>最终一致性（Eventually Consistent）<strong>强调的是</strong>系统中所有的数据副本，在经过一段时间的同步后，最终能达到一致的状态</strong>。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/分布式理论-BASE.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="base-vs-acid" tabindex="-1"><a class="header-anchor" href="#base-vs-acid" aria-hidden="true">#</a> BASE vs. ACID</h3><p>BASE 的理论的<strong>核心思想</strong>是：即使无法做到强一致性，但每个应用都可以根据自身业务特点，采用适当的方式来使系统达到最终一致性。</p><p>ACID 要求强一致性，通常运用在传统的数据库系统上。而 BASE 要求最终一致性，通过<strong>牺牲强一致性来达到可用性</strong>，通常运用在大型分布式系统中。</p><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20211102192406.png" style="width:640px;"><p>在实际的分布式场景中，不同业务单元和组件对一致性的要求是不同的，因此 ACID 和 BASE 往往会结合在一起使用。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',76),c={href:"https://cryptographics.info/cryptographics/blockchain/cap-theorem/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.semanticscholar.org/paper/CAP-twelve-years-later%3A-How-the-%22rules%22-have-Brewer/c9c73f5a1668b8bf12aae2efb6ac5a5a2c34002a",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.ruanyifeng.com/blog/2018/07/cap.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://juejin.im/post/5d720e86f265da03cc08de74",target:"_blank",rel:"noopener noreferrer"},m={href:"https://queue.acm.org/detail.cfm?id=1394128",target:"_blank",rel:"noopener noreferrer"};function b(f,w){const e=r("ExternalLinkIcon");return o(),s("div",null,[p,t("ul",null,[t("li",null,[t("a",c,[a("CAP Theorem"),i(e)])]),t("li",null,[t("a",d,[a('CAP twelve years later: How the "rules" have changed'),i(e)])]),t("li",null,[t("a",h,[a("CAP 定理的含义"),i(e)]),a(" - by 阮一峰")]),t("li",null,[t("a",u,[a("神一样的 CAP 理论被应用在何方"),i(e)])]),t("li",null,[t("a",m,[a("BASE: An Acid Alternative"),i(e)])])])])}const _=n(l,[["render",b],["__file","02.分布式一致性.html.vue"]]);export{_ as default};
