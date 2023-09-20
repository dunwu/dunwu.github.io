import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as t,c as l,a as e,b as r,d as o,e as p}from"./app-9f0b185d.js";const n={},c=p('<h1 id="深入剖析共识性算法-paxos" tabindex="-1"><a class="header-anchor" href="#深入剖析共识性算法-paxos" aria-hidden="true">#</a> 深入剖析共识性算法 Paxos</h1><blockquote><p>Paxos 是一种基于消息传递且具有容错性的共识性（consensus）算法。</p><p>Paxos 算法解决的问题正是分布式一致性问题。在一个节点数为 2N+1 的分布式集群中，只要半数以上的节点（N + 1）还正常工作，整个系统仍可以正常工作。</p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200202221611.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="paxos-背景" tabindex="-1"><a class="header-anchor" href="#paxos-背景" aria-hidden="true">#</a> Paxos 背景</h2><p>Paxos 是 Leslie Lamport 于 1990 年提出的一种基于消息传递且具有高度容错特性的<strong>共识（consensus）算法</strong>。</p><p>为描述 Paxos 算法，Lamport 虚拟了一个叫做 Paxos 的希腊城邦，这个岛按照议会民主制的政治模式制订法律，但是没有人愿意将自己的全部时间和精力放在这种事情上。所以无论是议员，议长或者传递纸条的服务员都不能承诺别人需要时一定会出现，也无法承诺批准决议或者传递消息的时间。</p><p>Paxos 算法包含 2 个部分：</p><ul><li><strong>Basic Paxos 算法</strong>：描述的多节点之间如何就某个值达成共识。</li><li><strong>Multi Paxos 思想</strong>：描述的是执行多个 Basic Paxos 实例，就一系列值达成共识。</li></ul><p>Paxos 算法解决的问题正是分布式共识性问题，即一个分布式系统中的各个进程如何就某个值（决议）达成一致。</p><p>Paxos 算法运行在允许宕机故障的异步系统中，不要求可靠的消息传递，可容忍消息丢失、延迟、乱序以及重复。它利用大多数 (Majority) 机制保证了 2N+1 的容错能力，即 2N+1 个节点的系统最多允许 N 个节点同时出现故障。</p><h2 id="basic-paxos-算法" tabindex="-1"><a class="header-anchor" href="#basic-paxos-算法" aria-hidden="true">#</a> Basic Paxos 算法</h2><h3 id="角色" tabindex="-1"><a class="header-anchor" href="#角色" aria-hidden="true">#</a> 角色</h3><p>Paxos 将分布式系统中的节点分 Proposer、Acceptor、Learner 三种角色。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210528150700.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li><strong>提议者（Proposer）</strong>：发出提案（Proposal），用于投票表决。Proposal 信息包括提案编号 (Proposal ID) 和提议的值 (Value)。在绝大多数场景中，集群中收到客户端请求的节点，才是提议者。这样做的好处是，对业务代码没有入侵性，也就是说，我们不需要在业务代码中实现算法逻辑。</li><li><strong>接受者（Acceptor）</strong>：对每个 Proposal 进行投票，若 Proposal 获得多数 Acceptor 的接受，则称该 Proposal 被批准。一般来说，集群中的所有节点都在扮演接受者的角色，参与共识协商，并接受和存储数据。</li><li><strong>学习者（Learner）</strong>：不参与接受，从 Proposers/Acceptors 学习、记录最新达成共识的提案（Value）。一般来说，学习者是数据备份节点，比如主从架构中的从节点，被动地接受数据，容灾备份。</li></ul><p>在多副本状态机中，每个副本都同时具有 Proposer、Acceptor、Learner 三种角色。</p><p>这三种角色，在本质上代表的是三种功能：</p><ul><li>提议者代表的是接入和协调功能，收到客户端请求后，发起二阶段提交，进行共识协商；</li><li>接受者代表投票协商和存储数据，对提议的值进行投票，并接受达成共识的值，存储保存；</li><li>学习者代表存储数据，不参与共识协商，只接受达成共识的值，存储保存。</li></ul><h3 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h3><p>Paxos 算法有 3 个阶段，其中，前 2 个阶段负责协商并达成共识：</p><ol><li><strong>准备（Prepare）阶段</strong>：Proposer 向 Acceptors 发出 Prepare 请求，Acceptors 针对收到的 Prepare 请求进行 Promise 承诺。</li><li><strong>接受（Accept）阶段</strong>：Proposer 收到多数 Acceptors 承诺的 Promise 后，向 Acceptors 发出 Propose 请求，Acceptors 针对收到的 Propose 请求进行 Accept 处理。</li><li><strong>学习（Learn）阶段</strong>：Proposer 在收到多数 Acceptors 的 Accept 之后，标志着本次 Accept 成功，决议形成，将形成的决议发送给所有 Learners。</li></ol><p>看到这里，了解过分布式事务的读者，想必会觉得眼熟：这不就是两阶段提交嘛！没错，这里采用的正式两阶段提交的思想。两阶段提交是达成共识的常用方式。</p><p>Paxos 算法流程中的每条消息描述如下：</p><ul><li><p><strong>Prepare</strong>: Proposer 生成全局唯一且递增的 Proposal ID (可使用时间戳加 Server ID)，向所有 Acceptors 发送 Prepare 请求，这里无需携带提案内容，只携带 Proposal ID 即可。</p></li><li><p><strong>Promise</strong>: Acceptors 收到 Prepare 请求后，做出“两个承诺，一个应答”。</p><ul><li><p>两个承诺：</p><ul><li>不再接受 Proposal ID 小于等于当前请求的 Prepare 请求。</li><li>不再接受 Proposal ID 小于当前请求的 Propose 请求。</li></ul></li><li><p>一个应答：</p><ul><li>不违背以前作出的承诺下，回复已经 Accept 过的提案中 Proposal ID 最大的那个提案的 Value 和 Proposal ID，没有则返回空值。</li></ul></li></ul></li><li><p><strong>Propose</strong>: Proposer 收到多数 Acceptors 的 Promise 应答后，从应答中选择 Proposal ID 最大的提案的 Value，作为本次要发起的提案。如果所有应答的提案 Value 均为空值，则可以自己随意决定提案 Value。然后携带当前 Proposal ID，向所有 Acceptors 发送 Propose 请求。</p></li><li><p><strong>Accept</strong>: Acceptor 收到 Propose 请求后，在不违背自己之前作出的承诺下，接受并持久化当前 Proposal ID 和提案 Value。</p></li><li><p><strong>Learn</strong>: Proposer 收到多数 Acceptors 的 Accept 后，决议形成，将形成的决议发送给所有 Learners。</p></li></ul><h3 id="prepare-阶段" tabindex="-1"><a class="header-anchor" href="#prepare-阶段" aria-hidden="true">#</a> Prepare 阶段</h3><p>在准备请求中是不需要指定提议的值的，只需要携带提案编号就可以了。</p><p>下图的示例中，首先客户端 1、2 作为提议者，分别向所有接受者发送包含提案编号的准备请求：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220628231557.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>接着，当节点 A、B 收到提案编号为 1 的准备请求，节点 C 收到提案编号为 5 的准备请求后，将进行这样的处理：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220628231908.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>由于之前没有通过任何提案，所以节点 A、B 将返回一个 “尚无提案” 的响应。也就是说节点 A 和 B 在告诉提议者，我之前没有通过任何提案呢，并承诺以后不再响应提案编号小于等于 1 的准备请求，不会通过编号小于 1 的提案。</li><li>节点 C 也是如此，它将返回一个 “尚无提案”的响应，并承诺以后不再响应提案编号小于等于 5 的准备请求，不会通过编号小于 5 的提案。</li></ul><p>另外，当节点 A、B 收到提案编号为 5 的准备请求，和节点 C 收到提案编号为 1 的准备请求的时候，将进行这样的处理过程：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220628232029.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>当节点 A、B 收到提案编号为 5 的准备请求的时候，因为提案编号 5 大于它们之前响应的准备请求的提案编号 1，而且两个节点都没有通过任何提案，所以它将返回一个 “尚无提案”的响应，并承诺以后不再响应提案编号小于等于 5 的准备请求，不会通过编号小于 5 的提案。</p></li><li><p>当节点 C 收到提案编号为 1 的准备请求的时候，由于提案编号 1 小于它之前响应的准备请求的提案编号 5，所以丢弃该准备请求，不做响应。</p></li></ul><h3 id="accept-阶段" tabindex="-1"><a class="header-anchor" href="#accept-阶段" aria-hidden="true">#</a> Accept 阶段</h3><p>首先客户端 1、2 在收到大多数节点的准备响应之后，会分别发送接受请求：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220628232309.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>当客户端 1 收到大多数的接受者（节点 A、B）的准备响应后，根据响应中提案编号最大的提案的值，设置接受请求中的值。因为该值在来自节点 A、B 的准备响应中都为空（也就是图 5 中的“尚无提案”），所以就把自己的提议值 3 作为提案的值，发送接受请求[1, 3]。</p></li><li><p>当客户端 2 收到大多数的接受者的准备响应后（节点 A、B 和节点 C），根据响应中提案编号最大的提案的值，来设置接受请求中的值。因为该值在来自节点 A、B、C 的准备响应中都为空（也就是图 5 和图 6 中的“尚无提案”），所以就把自己的提议值 7 作为提案的值，发送接受请求[5, 7]。</p></li></ul><p>当三个节点收到 2 个客户端的接受请求时，会进行这样的处理：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220628232515.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>当节点 A、B、C 收到接受请求[1, 3]的时候，由于提案的提案编号 1 小于三个节点承诺能通过的提案的最小提案编号 5，所以提案[1, 3]将被拒绝。</li><li>当节点 A、B、C 收到接受请求[5, 7]的时候，由于提案的提案编号 5 不小于三个节点承诺能通过的提案的最小提案编号 5，所以就通过提案[5, 7]，也就是接受了值 7，三个节点就 X 值为 7 达成了共识。</li></ul><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>Basic Paxos 是通过二阶段提交的方式来达成共识的。</p><p>除了共识，Basic Paxos 还实现了容错，在少于一半的节点出现故障时，集群也能工作。它不像分布式事务算法那样，必须要所有节点都同意后才提交操作，因为“所有节点都同意”这个原则，在出现节点故障的时候会导致整个集群不可用。也就是说，“大多数节点都同意”的原则，赋予了 Basic Paxos 容错的能力，让它能够容忍少于一半的节点的故障。</p><p>本质上而言，提案编号的大小代表着优先级，你可以这么理解，根据提案编号的大小，接受者保证三个承诺，具体来说：</p><ul><li>如果准备请求的提案编号，小于等于接受者已经响应的准备请求的提案编号，那么接受者将承诺不响应这个准备请求；</li><li>如果接受请求中的提案的提案编号，小于接受者已经响应的准备请求的提案编号，那么接受者将承诺不通过这个提案；</li><li>如果接受者之前有通过提案，那么接受者将承诺，会在准备请求的响应中，包含已经通过的最大编号的提案信息。</li></ul><h2 id="multi-paxos-思想" tabindex="-1"><a class="header-anchor" href="#multi-paxos-思想" aria-hidden="true">#</a> Multi Paxos 思想</h2><p>兰伯特提到的 Multi-Paxos 是一种思想，不是算法。而 Multi-Paxos 算法是一个统称，它是指基于 Multi-Paxos 思想，通过多个 Basic Paxos 实例实现一系列值的共识的算法（比如 Chubby 的 Multi-Paxos 实现、Raft 算法等）。</p><h3 id="basic-paxos-的问题" tabindex="-1"><a class="header-anchor" href="#basic-paxos-的问题" aria-hidden="true">#</a> Basic Paxos 的问题</h3><p>Basic Paxos 有以下问题，导致它不能应用于实际：</p><ul><li><strong>Basic Paxos 算法只能对一个值形成决议</strong>。</li><li><strong>Basic Paxos 算法会消耗大量网络带宽</strong>。Basic Paxos 中，决议的形成至少需要两次网络通信，在高并发情况下可能需要更多的网络通信，极端情况下甚至可能形成活锁。如果想连续确定多个值，Basic Paxos 搞不定了。</li></ul><h3 id="multi-paxos-的改进" tabindex="-1"><a class="header-anchor" href="#multi-paxos-的改进" aria-hidden="true">#</a> Multi Paxos 的改进</h3><p>Multi Paxos 正是为解决以上问题而提出。Multi Paxos 基于 Basic Paxos 做了两点改进：</p><ul><li><strong>针对每一个要确定的值，运行一次 Paxos 算法实例（Instance），形成决议</strong>。每一个 Paxos 实例使用唯一的 Instance ID 标识。</li><li><strong>在所有 Proposer 中选举一个 Leader，由 Leader 唯一地提交 Proposal 给 Acceptor 进行表决</strong>。这样没有 Proposer 竞争，解决了活锁问题。在系统中仅有一个 Leader 进行 Value 提交的情况下，Prepare 阶段就可以跳过，从而将两阶段变为一阶段，提高效率。</li></ul><p>Multi Paxos 首先需要选举 Leader，Leader 的确定也是一次决议的形成，所以可执行一次 Basic Paxos 实例来选举出一个 Leader。选出 Leader 之后只能由 Leader 提交 Proposal，在 Leader 宕机之后服务临时不可用，需要重新选举 Leader 继续服务。在系统中仅有一个 Leader 进行 Proposal 提交的情况下，Prepare 阶段可以跳过。</p><p>Multi Paxos 通过改变 Prepare 阶段的作用范围至后面 Leader 提交的所有实例，从而使得 Leader 的连续提交只需要执行一次 Prepare 阶段，后续只需要执行 Accept 阶段，将两阶段变为一阶段，提高了效率。为了区分连续提交的多个实例，每个实例使用一个 Instance ID 标识，Instance ID 由 Leader 本地递增生成即可。</p><p>Multi Paxos 允许有多个自认为是 Leader 的节点并发提交 Proposal 而不影响其安全性，这样的场景即退化为 Basic Paxos。</p><p>Chubby 和 Boxwood 均使用 Multi Paxos。ZooKeeper 使用的 Zab 也是 Multi Paxos 的变形。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',59),u={href:"https://research.microsoft.com/en-us/um/people/lamport/pubs/lamport-paxos.pdf",target:"_blank",rel:"noopener noreferrer"},d={href:"https://lamport.azurewebsites.net/pubs/paxos-simple.pdf",target:"_blank",rel:"noopener noreferrer"},h={href:"https://zhuanlan.zhihu.com/p/31780743",target:"_blank",rel:"noopener noreferrer"},g={href:"https://zh.wikipedia.org/w/index.php?title=Paxos%E7%AE%97%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},P={href:"https://www.bilibili.com/video/BV1TW411M7Fx?from=search&seid=11524608198747599965",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.bilibili.com/video/av36556594",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.youtube.com/watch?v=d7nAGI_NZPk",target:"_blank",rel:"noopener noreferrer"},m={href:"https://time.geekbang.org/column/intro/100046101",target:"_blank",rel:"noopener noreferrer"};function b(_,A){const a=i("ExternalLinkIcon");return t(),l("div",null,[c,e("ul",null,[e("li",null,[e("a",u,[r("Part-time Parliament 论文"),o(a)])]),e("li",null,[e("a",d,[r("Paxos Made Simple 论文"),o(a)])]),e("li",null,[e("a",h,[r("Paxos 算法详解"),o(a)])]),e("li",null,[e("a",g,[r("Wiki - Paxos 算法"),o(a)])]),e("li",null,[e("a",P,[r("一致性算法（Paxos、Raft、Zab）"),o(a)])]),e("li",null,[e("a",x,[r("Raft 作者讲解 Paxos 视频"),o(a)])]),e("li",null,[e("a",f,[r("Paxos 算法讲解视频"),o(a)])]),e("li",null,[e("a",m,[r("分布式协议与算法实战"),o(a)])])])])}const L=s(n,[["render",b],["__file","11.Paxos算法.html.vue"]]);export{L as default};
