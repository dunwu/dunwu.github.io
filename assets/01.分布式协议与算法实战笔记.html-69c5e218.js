import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as s,c as l,a as e,b as r,d as a,e as n}from"./app-1f12e18b.js";const d={},p=e("h1",{id:"《分布式协议与算法实战》笔记",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#《分布式协议与算法实战》笔记","aria-hidden":"true"},"#"),r(" 《分布式协议与算法实战》笔记")],-1),g=e("h2",{id:"拜占庭将军问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#拜占庭将军问题","aria-hidden":"true"},"#"),r(" 拜占庭将军问题")],-1),c={href:"https://zh.wikipedia.org/wiki/%E8%8E%B1%E6%96%AF%E5%88%A9%C2%B7%E5%85%B0%E6%B3%A2%E7%89%B9",target:"_blank",rel:"noopener noreferrer"},h={href:"https://zh.wikipedia.org/wiki/%E5%AF%B9%E7%AD%89%E7%BD%91%E7%BB%9C",target:"_blank",rel:"noopener noreferrer"},u={href:"https://zh.wikipedia.org/wiki/%E5%88%86%E5%B8%83%E5%BC%8F%E8%A8%88%E7%AE%97",target:"_blank",rel:"noopener noreferrer"},m=n('<h3 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述" aria-hidden="true">#</a> 问题描述</h3><p>一群拜占庭将军各领一支军队共同围困一座城市。</p><p>为了简化问题，军队的行动策略只有两种：<strong>进攻</strong>（Attack，后面简称 A）或 <strong>撤退</strong>（Retreat，后面简称 R）。如果这些军队不是统一进攻或撤退，就可能因兵力不足导致失败。因此，<strong>将军们通过投票来达成一致策略：同进或同退</strong>。</p><p>因为将军们分别在城市的不同方位，所以他们只能<strong>通过信使互相联系</strong>。在投票过程中，<strong>每位将军都将自己的投票信息（A 或 R）通知其他所有将军</strong>，这样一来每位将军根据自己的投票和其他所有将军送来的信息就可以分析出共同的投票结果而决定行动策略。</p><p>这个抽象模型的问题在于：<strong>将军中可能存在叛徒，他们不仅会发出误导性投票，还可能选择性地发送投票信息</strong>。</p><p>由于将军之间需要通过信使通讯，叛变将军可能通过伪造信件来以其他将军的身份发送假投票。而即使在保证所有将军忠诚的情况下，也不能排除信使被敌人截杀，甚至被敌人间谍替换等情况。因此很难通过保证人员可靠性及通讯可靠性来解决问题。</p><p>假使那些忠诚（或是没有出错）的将军仍然能通过多数决定来决定他们的战略，便称达到了拜占庭容错。在此，票都会有一个默认值，若消息（票）没有被收到，则使用此默认值来投票。</p><p>上述的故事可以映射到分布式系统中，<em>将军代表分布式系统中的节点；信使代表通信系统；叛徒代表故障或异常</em>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210704104211.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="问题分析" tabindex="-1"><a class="header-anchor" href="#问题分析" aria-hidden="true">#</a> 问题分析</h3><blockquote><p>兰伯特针对拜占庭将军问题，给出了两个解决方案：口头协议和书面协议。</p><p>本文介绍一下口头协议。</p></blockquote><p>在口头协议中，拜占庭将军问题被简化为<strong>将军 - 副官</strong>模型，其核心规则如下：</p><ul><li>忠诚的副官遵守同一命令。</li><li>若将军是忠诚的，所有忠诚的副官都执行他的命令。</li><li><strong>如果叛徒人数为 m，将军人数不能少于 3m + 1</strong> ，那么拜占庭将军问题就能解决了。——关于这个公式，可以不必深究，如果对推导过程感兴趣，可以参考论文。</li></ul><p><strong>示例一、叛徒人数为 1，将军人数为 3</strong></p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210704112012.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>这个示例中，将军人数不满足 3m + 1，无法保证忠诚的副官都执行将军的命令。</p><p><strong>示例二、叛徒人数为 1，将军人数为 4</strong></p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210704194815.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>这个示例中，将军人数满足 3m + 1，无论是副官中有叛徒，还是将军是叛徒，都能保证忠诚的副官执行将军的命令。</p><h2 id="cap-理论" tabindex="-1"><a class="header-anchor" href="#cap-理论" aria-hidden="true">#</a> CAP 理论</h2><p>CAP 是指：在一个分布式系统中， 一致性、可用性和分区容忍性，最多只能同时满足其中两项。</p><ul><li><strong>一致性（C：Consistency）</strong>：多个数据副本是否能保持一致</li><li><strong>可用性（A：Availability）</strong>：分布式系统在面对各种异常时可以提供正常服务的能力</li><li><strong>分区容忍性（P：Partition Tolerance）</strong>：分布式系统在遇到任何网络分区故障的时候，仍然需要能对外提供一致性和可用性的服务，除非是整个网络环境都发生了故障</li></ul><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20211102191636.png" style="width:400px;"><p>CAP 权衡</p><p>在分布式系统中，分区容忍性必不可少，因为需要总是假设网络是不可靠的；CAP 理论实际在是要在可用性和一致性之间做权衡。</p><ul><li><strong>CP</strong>：需要让所有节点下线成为不可用的状态，等待同步完成。</li><li><strong>AP</strong>：在同步过程中允许读取所有节点的数据，但是数据可能不一致。</li></ul><h2 id="acid-理论" tabindex="-1"><a class="header-anchor" href="#acid-理论" aria-hidden="true">#</a> ACID 理论</h2><p>ACID 特性：</p><ul><li><strong>原子性（Atomicity）</strong><ul><li>事务被视为不可分割的最小单元，事务中的所有操作要么全部提交成功，要么全部失败回滚。</li><li>回滚可以用日志来实现，日志记录着事务所执行的修改操作，在回滚时反向执行这些修改操作即可。</li></ul></li><li><strong>一致性（Consistency）</strong><ul><li>数据库在事务执行前后都保持一致性状态。</li><li>在一致性状态下，所有事务对一个数据的读取结果都是相同的。</li></ul></li><li><strong>隔离性（Isolation）</strong><ul><li>一个事务所做的修改在最终提交以前，对其它事务是不可见的。</li></ul></li><li><strong>持久性（Durability）</strong><ul><li>一旦事务提交，则其所做的修改将会永远保存到数据库中。即使系统发生崩溃，事务执行的结果也不能丢失。</li><li>可以通过数据库备份和恢复来实现，在系统发生奔溃时，使用备份的数据库进行数据恢复。</li></ul></li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/database/RDB/数据库ACID.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在分布式系统中实现 ACID 比单机复杂的多。</p><p>在分布式系统中实现 ACID，即实现分布式事务，具体的方案有如下几种：</p><ul><li>两阶段提交（2PC）</li><li>三阶段提交（3PC）</li><li>补偿事务（TCC）</li><li>本地消息表（异步确保）</li><li>MQ 事务消息</li><li>Sagas 事务模型</li></ul><h2 id="base-理论" tabindex="-1"><a class="header-anchor" href="#base-理论" aria-hidden="true">#</a> BASE 理论</h2><p>BASE 理论是对 CAP 中一致性和可用性权衡的结果。</p><p>BASE 是指：即使无法做到强一致性，但每个应用都可以根据自身业务特点，采用适当的方式来使系统达到最终一致性。</p><p>BASE 特性</p><ul><li><strong>基本可用（Basically Available）</strong>：指分布式系统在出现故障的时候，保证核心可用，允许损失部分可用性。</li><li><strong>软状态（Soft State）</strong>：指允许系统中的数据存在中间状态，并认为该中间状态不会影响系统整体可用性，即允许系统不同节点的数据副本之间进行同步的过程存在延时。</li><li><strong>最终一致性（Eventually Consistent）</strong>：最终一致性强调的是系统中所有的数据副本，在经过一段时间的同步后，最终能达到一致的状态。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/分布式理论-BASE.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="paxos-算法" tabindex="-1"><a class="header-anchor" href="#paxos-算法" aria-hidden="true">#</a> Paxos 算法</h2><p>Paxos 是 Leslie Lamport 于 1990 年提出的一种基于消息传递且具有高度容错特性的共识（consensus）算法。</p><p>Paxos 算法包含 2 个部分：</p><ul><li><strong>Basic Paxos 算法</strong>：描述的多节点之间如何就某个值达成共识。</li><li><strong>Multi Paxos 思想</strong>：描述的是执行多个 Basic Paxos 实例，就一系列值达成共识。</li></ul><p>Paxos 算法解决的问题正是分布式共识性问题，即一个分布式系统中的各个进程如何就某个值（决议）达成一致。</p><p>Paxos 算法运行在允许宕机故障的异步系统中，不要求可靠的消息传递，可容忍消息丢失、延迟、乱序以及重复。它利用大多数 (Majority) 机制保证了 2N+1 的容错能力，即 2N+1 个节点的系统最多允许 N 个节点同时出现故障。</p><h3 id="basic-paxos-算法" tabindex="-1"><a class="header-anchor" href="#basic-paxos-算法" aria-hidden="true">#</a> Basic Paxos 算法</h3><h4 id="角色" tabindex="-1"><a class="header-anchor" href="#角色" aria-hidden="true">#</a> 角色</h4><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210528150700.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li><strong>提议者（Proposer）</strong>：发出提案（Proposal），用于投票表决。Proposal 信息包括提案编号 (Proposal ID) 和提议的值 (Value)。在绝大多数场景中，集群中收到客户端请求的节点，才是提议者。这样做的好处是，对业务代码没有入侵性，也就是说，我们不需要在业务代码中实现算法逻辑。</li><li><strong>决策者（Acceptor）</strong>：对每个 Proposal 进行投票，若 Proposal 获得多数 Acceptor 的接受，则称该 Proposal 被批准。一般来说，集群中的所有节点都在扮演决策者的角色，参与共识协商，并接受和存储数据。</li><li><strong>学习者（Learner）</strong>：不参与决策，从 Proposers/Acceptors 学习、记录最新达成共识的提案（Value）。一般来说，学习者是数据备份节点，比如主从架构中的从节点，被动地接受数据，容灾备份。</li></ul><p>在多副本状态机中，每个副本都同时具有 Proposer、Acceptor、Learner 三种角色。</p><p>这三种角色，在本质上代表的是三种功能：</p><ul><li>提议者代表的是接入和协调功能，收到客户端请求后，发起二阶段提交，进行共识协商；</li><li>接受者代表投票协商和存储数据，对提议的值进行投票，并接受达成共识的值，存储保存；</li><li>学习者代表存储数据，不参与共识协商，只接受达成共识的值，存储保存。</li></ul><h4 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h4><p>Paxos 算法通过一个决议分为两个阶段（Learn 阶段之前决议已经形成）：</p><ol><li><strong>Prepare 阶段</strong>：Proposer 向 Acceptors 发出 Prepare 请求，Acceptors 针对收到的 Prepare 请求进行 Promise 承诺。</li><li><strong>Accept 阶段</strong>：Proposer 收到多数 Acceptors 承诺的 Promise 后，向 Acceptors 发出 Propose 请求，Acceptors 针对收到的 Propose 请求进行 Accept 处理。</li><li><strong>Learn 阶段</strong>：Proposer 在收到多数 Acceptors 的 Accept 之后，标志着本次 Accept 成功，决议形成，将形成的决议发送给所有 Learners。</li></ol><p>Paxos 算法流程中的每条消息描述如下：</p><ul><li><p><strong>Prepare</strong>: Proposer 生成全局唯一且递增的 Proposal ID (可使用时间戳加 Server ID)，向所有 Acceptors 发送 Prepare 请求，这里无需携带提案内容，只携带 Proposal ID 即可。</p></li><li><p><strong>Promise</strong>: Acceptors 收到 Prepare 请求后，做出“两个承诺，一个应答”。</p><ul><li><p>两个承诺：</p><ul><li>不再接受 Proposal ID 小于等于当前请求的 Prepare 请求。</li><li>不再接受 Proposal ID 小于当前请求的 Propose 请求。</li></ul></li><li><p>一个应答：</p><ul><li>不违背以前作出的承诺下，回复已经 Accept 过的提案中 Proposal ID 最大的那个提案的 Value 和 Proposal ID，没有则返回空值。</li></ul></li></ul></li><li><p><strong>Propose</strong>: Proposer 收到多数 Acceptors 的 Promise 应答后，从应答中选择 Proposal ID 最大的提案的 Value，作为本次要发起的提案。如果所有应答的提案 Value 均为空值，则可以自己随意决定提案 Value。然后携带当前 Proposal ID，向所有 Acceptors 发送 Propose 请求。</p></li><li><p><strong>Accept</strong>: Acceptor 收到 Propose 请求后，在不违背自己之前作出的承诺下，接受并持久化当前 Proposal ID 和提案 Value。</p></li><li><p><strong>Learn</strong>: Proposer 收到多数 Acceptors 的 Accept 后，决议形成，将形成的决议发送给所有 Learners。</p></li></ul><h3 id="multi-paxos-思想" tabindex="-1"><a class="header-anchor" href="#multi-paxos-思想" aria-hidden="true">#</a> Multi Paxos 思想</h3><h4 id="basic-paxos-的问题" tabindex="-1"><a class="header-anchor" href="#basic-paxos-的问题" aria-hidden="true">#</a> Basic Paxos 的问题</h4><p>Basic Paxos 有以下问题，导致它不能应用于实际：</p><ul><li><strong>Basic Paxos 算法只能对一个值形成决议</strong>。</li><li><strong>Basic Paxos 算法会消耗大量网络带宽</strong>。Basic Paxos 中，决议的形成至少需要两次网络通信，在高并发情况下可能需要更多的网络通信，极端情况下甚至可能形成活锁。如果想连续确定多个值，Basic Paxos 搞不定了。</li></ul><h4 id="multi-paxos-的改进" tabindex="-1"><a class="header-anchor" href="#multi-paxos-的改进" aria-hidden="true">#</a> Multi Paxos 的改进</h4><p>Multi Paxos 正是为解决以上问题而提出。Multi Paxos 基于 Basic Paxos 做了两点改进：</p><ul><li>针对每一个要确定的值，运行一次 Paxos 算法实例（Instance），形成决议。每一个 Paxos 实例使用唯一的 Instance ID 标识。</li><li>在所有 Proposer 中选举一个 Leader，由 Leader 唯一地提交 Proposal 给 Acceptor 进行表决。这样没有 Proposer 竞争，解决了活锁问题。在系统中仅有一个 Leader 进行 Value 提交的情况下，Prepare 阶段就可以跳过，从而将两阶段变为一阶段，提高效率。</li></ul><p>Multi Paxos 首先需要选举 Leader，Leader 的确定也是一次决议的形成，所以可执行一次 Basic Paxos 实例来选举出一个 Leader。选出 Leader 之后只能由 Leader 提交 Proposal，在 Leader 宕机之后服务临时不可用，需要重新选举 Leader 继续服务。在系统中仅有一个 Leader 进行 Proposal 提交的情况下，Prepare 阶段可以跳过。</p><p>Multi Paxos 通过改变 Prepare 阶段的作用范围至后面 Leader 提交的所有实例，从而使得 Leader 的连续提交只需要执行一次 Prepare 阶段，后续只需要执行 Accept 阶段，将两阶段变为一阶段，提高了效率。为了区分连续提交的多个实例，每个实例使用一个 Instance ID 标识，Instance ID 由 Leader 本地递增生成即可。</p><p>Multi Paxos 允许有多个自认为是 Leader 的节点并发提交 Proposal 而不影响其安全性，这样的场景即退化为 Basic Paxos。</p><p>Chubby 和 Boxwood 均使用 Multi Paxos。ZooKeeper 使用的 Zab 也是 Multi Paxos 的变形。</p><h2 id="raft-算法" tabindex="-1"><a class="header-anchor" href="#raft-算法" aria-hidden="true">#</a> Raft 算法</h2><h3 id="raft-基础" tabindex="-1"><a class="header-anchor" href="#raft-基础" aria-hidden="true">#</a> Raft 基础</h3><p>Raft 将一致性问题分解成了三个子问题：</p><ul><li><strong>选举 Leader</strong></li><li><strong>日志复制</strong></li><li><strong>安全性</strong></li></ul><h4 id="服务器角色" tabindex="-1"><a class="header-anchor" href="#服务器角色" aria-hidden="true">#</a> 服务器角色</h4><p>在 Raft 中，任何时刻，每个服务器都处于这三个角色之一 ：</p><ul><li><strong><code>Leader</code></strong> - 领导者，通常一个系统中是<strong>一主（Leader）多从（Follower）</strong>。Leader <strong>负责处理所有的客户端请求</strong>。</li><li><strong><code>Follower</code></strong> - 跟随者，<strong>不会发送任何请求</strong>，只是简单的 <strong>响应来自 Leader 或者 Candidate 的请求</strong>。</li><li><strong><code>Candidate</code></strong> - 参选者，选举新 Leader 时的临时角色。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200131215742.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><blockquote><p>💡 图示说明：</p><ul><li>Follower 只响应来自其他服务器的请求。在一定时限内，如果 Follower 接收不到消息，就会转变成 Candidate，并发起选举。</li><li>Candidate 向 Follower 发起投票请求，如果获得集群中半数以上的选票，就会转变为 Leader。</li><li>在一个 Term 内，Leader 始终保持不变，直到下线了。Leader 需要周期性向所有 Follower 发送心跳消息，以阻止 Follower 转变为 Candidate。</li></ul></blockquote><h4 id="任期" tabindex="-1"><a class="header-anchor" href="#任期" aria-hidden="true">#</a> 任期</h4><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200131220742.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Raft 把时间分割成任意长度的 <strong><em><code>任期（Term）</code></em></strong>，任期用连续的整数标记。每一段任期从一次<strong>选举</strong>开始。<strong>Raft 保证了在一个给定的任期内，最多只有一个领导者</strong>。</p><ul><li>如果选举成功，Leader 会管理整个集群直到任期结束。</li><li>如果选举失败，那么这个任期就会因为没有 Leader 而结束。</li></ul><p><strong>不同服务器节点观察到的任期转换状态可能不一样</strong>：</p><ul><li>服务器节点可能观察到多次的任期转换。</li><li>服务器节点也可能观察不到任何一次任期转换。</li></ul><p><strong>任期在 Raft 算法中充当逻辑时钟的作用，使得服务器节点可以查明一些过期的信息（比如过期的 Leader）。每个服务器节点都会存储一个当前任期号，这一编号在整个时期内单调的增长。当服务器之间通信的时候会交换当前任期号。</strong></p><ul><li>如果一个服务器的当前任期号比其他人小，那么他会更新自己的编号到较大的编号值。</li><li>如果一个 Candidate 或者 Leader 发现自己的任期号过期了，那么他会立即恢复成跟随者状态。</li><li>如果一个节点接收到一个包含过期的任期号的请求，那么他会直接拒绝这个请求。</li></ul><h4 id="rpc" tabindex="-1"><a class="header-anchor" href="#rpc" aria-hidden="true">#</a> RPC</h4><p>Raft 算法中服务器节点之间的通信使用 <strong><em><code>远程过程调用（RPC）</code></em></strong>。</p><p>基本的一致性算法只需要两种 RPC：</p><ul><li><strong><code>RequestVote RPC</code></strong> - 请求投票 RPC，由 Candidate 在选举期间发起。</li><li><strong><code>AppendEntries RPC</code></strong> - 附加条目 RPC，由 Leader 发起，用来复制日志和提供一种心跳机制。</li></ul><h3 id="选举-leader" tabindex="-1"><a class="header-anchor" href="#选举-leader" aria-hidden="true">#</a> 选举 Leader</h3><h4 id="选举规则" tabindex="-1"><a class="header-anchor" href="#选举规则" aria-hidden="true">#</a> 选举规则</h4><p><strong>Raft 使用一种心跳机制来触发 Leader 选举</strong>。</p><p><strong>Leader 需要周期性的向所有 Follower 发送心跳消息</strong>，以此维持自己的权威并阻止新 Leader 的产生。</p><p>每个 Follower 都设置了一个<strong>随机的竞选超时时间</strong>，一般为 <code>150ms ~ 300ms</code>，如果在竞选超时时间内没有收到 Leader 的心跳消息，就会认为当前 Term 没有可用的 Leader，并发起选举来选出新的 Leader。开始一次选举过程，Follower 先要增加自己的当前 Term 号，并<strong>转换为 Candidate</strong>。</p><p>Candidate 会并行的<strong>向集群中的所有服务器节点发送投票请求（<code>RequestVote RPC</code>）</strong>，它会保持当前状态直到以下三件事情之一发生：</p><ul><li><strong>自己成为 Leader</strong></li><li><strong>其他的服务器成为 Leader</strong></li><li><strong>没有任何服务器成为 Leader</strong></li></ul><h5 id="自己成为-leader" tabindex="-1"><a class="header-anchor" href="#自己成为-leader" aria-hidden="true">#</a> 自己成为 Leader</h5><ul><li>当一个 Candidate 从整个集群<strong>半数以上</strong>的服务器节点获得了针对同一个 Term 的选票，那么它就赢得了这次选举并成为 Leader。每个服务器最多会对一个 Term 投出一张选票，按照先来先服务（FIFO）的原则。<em>要求半数以上选票的规则确保了最多只会有一个 Candidate 赢得此次选举</em>。</li><li>一旦 Candidate 赢得选举，就立即成为 Leader。然后它会向其他的服务器发送心跳消息来建立自己的权威并且阻止新的领导人的产生。</li></ul><h5 id="其他的服务器成为-leader" tabindex="-1"><a class="header-anchor" href="#其他的服务器成为-leader" aria-hidden="true">#</a> 其他的服务器成为 Leader</h5><p>等待投票期间，Candidate 可能会从其他的服务器接收到声明它是 Leader 的 <code>AppendEntries RPC</code>。</p><ul><li>如果这个 Leader 的 Term 号（包含在此次的 RPC 中）不小于 Candidate 当前的 Term，那么 Candidate 会承认 Leader 合法并回到 Follower 状态。</li><li>如果此次 RPC 中的 Term 号比自己小，那么 Candidate 就会拒绝这个消息并继续保持 Candidate 状态。</li></ul><h5 id="没有任何服务器成为-leader" tabindex="-1"><a class="header-anchor" href="#没有任何服务器成为-leader" aria-hidden="true">#</a> 没有任何服务器成为 Leader</h5><p>如果有多个 Follower 同时成为 Candidate，那么选票可能会被瓜分以至于没有 Candidate 可以赢得半数以上的投票。当这种情况发生的时候，每一个 Candidate 都会竞选超时，然后通过增加当前 Term 号来开始一轮新的选举。然而，没有其他机制的话，选票可能会被无限的重复瓜分。</p><p>Raft 算法使用随机选举超时时间的方法来确保很少会发生选票瓜分的情况，就算发生也能很快的解决。为了阻止选票起初就被瓜分，竞选超时时间是一个<strong>随机的时间</strong>，在一个固定的区间（例如 150-300 毫秒）随机选择，这样可以把选举都分散开。</p><ul><li>以至于在大多数情况下，只有一个服务器会超时，然后它赢得选举，成为 Leader，并在其他服务器超时之前发送心跳包。</li><li>同样的机制也被用在选票瓜分的情况下：每一个 Candidate 在开始一次选举的时候会重置一个随机的选举超时时间，然后在超时时间内等待投票的结果；这样减少了在新的选举中另外的选票瓜分的可能性。</li></ul><hr><p>理解了上面的选举规则后，我们通过动图来加深认识。</p><h3 id="日志复制" tabindex="-1"><a class="header-anchor" href="#日志复制" aria-hidden="true">#</a> 日志复制</h3><h4 id="日志格式" tabindex="-1"><a class="header-anchor" href="#日志格式" aria-hidden="true">#</a> 日志格式</h4><p><strong>日志由含日志索引（log index）的日志条目（log entry）组成</strong>。每个日志条目包含它被创建时的 Term 号（下图中方框中的数字），和一个复制状态机需要执行的指令。如果一个日志条目被复制到半数以上的服务器上，就被认为可以提交（Commit）了。</p><ul><li>日志条目中的 Term 号被用来检查是否出现不一致的情况。</li><li>日志条目中的日志索引（一个整数值）用来表明它在日志中的位置。</li></ul><figure><img src="https://pic3.zhimg.com/80/v2-ee29a89e4eb63468e142bb6103dbe4de_hd.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Raft 日志同步保证如下两点：</p><ul><li>如果不同日志中的两个日志条目有着相同的日志索引和 Term，则<strong>它们所存储的命令是相同的</strong>。 <ul><li>这个特性基于这条原则：Leader 最多在一个 Term 内、在指定的一个日志索引上创建一条日志条目，同时日志条目在日志中的位置也从来不会改变。</li></ul></li><li>如果不同日志中的两个日志条目有着相同的日志索引和 Term，则<strong>它们之前的所有条目都是完全一样的</strong>。 <ul><li>这个特性由 <code>AppendEntries RPC</code> 的一个简单的一致性检查所保证。在发送 <code>AppendEntries RPC</code> 时，Leader 会把新日志条目之前的日志条目的日志索引和 Term 号一起发送。如果 Follower 在它的日志中找不到包含相同日志索引和 Term 号的日志条目，它就会拒绝接收新的日志条目。</li></ul></li></ul><h4 id="日志复制流程" tabindex="-1"><a class="header-anchor" href="#日志复制流程" aria-hidden="true">#</a> 日志复制流程</h4><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200201115848.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li>Leader 负责处理所有客户端的请求。</li><li>Leader 把请求作为日志条目加入到它的日志中，然后并行的向其他服务器发送 <code>AppendEntries RPC</code> 请求，要求 Follower 复制日志条目。</li><li>Follower 复制成功后，返回确认消息。</li><li>当这个日志条目被半数以上的服务器复制后，Leader 提交这个日志条目到它的复制状态机，并向客户端返回执行结果。</li></ol><blockquote><p>注意：如果 Follower 崩溃或者运行缓慢，再或者网络丢包，Leader 会不断的重复尝试发送 <code>AppendEntries RPC</code> 请求 （尽管已经回复了客户端），直到所有的跟随者都最终复制了所有的日志条目。</p></blockquote><h4 id="日志一致性" tabindex="-1"><a class="header-anchor" href="#日志一致性" aria-hidden="true">#</a> 日志一致性</h4><p>一般情况下，Leader 和 Followers 的日志保持一致，因此日志条目一致性检查通常不会失败。然而，Leader 崩溃可能会导致日志不一致：旧的 Leader 可能没有完全复制完日志中的所有条目。</p><h5 id="leader-和-follower-日志不一致的可能" tabindex="-1"><a class="header-anchor" href="#leader-和-follower-日志不一致的可能" aria-hidden="true">#</a> Leader 和 Follower 日志不一致的可能</h5><p>Leader 和 Follower 可能存在多种日志不一致的可能。</p><figure><img src="https://pic4.zhimg.com/80/v2-d36c587901391cae50788061f568d24f_hd.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><blockquote><p>💡 图示说明：</p><p>上图阐述了 Leader 和 Follower 可能存在多种日志不一致的可能，每一个方框表示一个日志条目，里面的数字表示任期号 。</p><p>当一个 Leader 成功当选时，Follower 可能出现以下情况（a-f）：</p><ul><li><strong>存在未更新日志条目</strong>，如（a、b）。</li><li><strong>存在未提交日志条目</strong>，如（c、d）。</li><li>或<strong>两种情况都存在</strong>，如（e、f）。</li></ul><p><em>例如，场景 f 可能会这样发生，某服务器在 Term2 的时候是 Leader，已附加了一些日志条目到自己的日志中，但在提交之前就崩溃了；很快这个机器就被重启了，在 Term3 重新被选为 Leader，并且又增加了一些日志条目到自己的日志中；在 Term 2 和 Term 3 的日志被提交之前，这个服务器又宕机了，并且在接下来的几个任期里一直处于宕机状态</em>。</p></blockquote><h5 id="leader-和-follower-日志一致的保证" tabindex="-1"><a class="header-anchor" href="#leader-和-follower-日志一致的保证" aria-hidden="true">#</a> Leader 和 Follower 日志一致的保证</h5><p>Leader 通过强制 Followers 复制它的日志来处理日志的不一致，<strong>Followers 上的不一致的日志会被 Leader 的日志覆盖</strong>。</p><ul><li>Leader 为了使 Followers 的日志同自己的一致，Leader 需要找到 Followers 同它的日志一致的地方，然后覆盖 Followers 在该位置之后的条目。</li><li>Leader 会从后往前试，每次日志条目失败后尝试前一个日志条目，直到成功找到每个 Follower 的日志一致位点，然后向后逐条覆盖 Followers 在该位置之后的条目。</li></ul><h3 id="安全性" tabindex="-1"><a class="header-anchor" href="#安全性" aria-hidden="true">#</a> 安全性</h3><p>前面描述了 Raft 算法是如何选举 Leader 和复制日志的。</p><p>Raft 还增加了一些限制来完善 Raft 算法，以保证安全性：保证了任意 Leader 对于给定的 Term，都拥有了之前 Term 的所有被提交的日志条目。</p><h4 id="选举限制" tabindex="-1"><a class="header-anchor" href="#选举限制" aria-hidden="true">#</a> 选举限制</h4><p>拥有最新的已提交的日志条目的 Follower 才有资格成为 Leader。</p><p>Raft 使用投票的方式来阻止一个 Candidate 赢得选举除非这个 Candidate 包含了所有已经提交的日志条目。 Candidate 为了赢得选举必须联系集群中的大部分节点，这意味着每一个已经提交的日志条目在这些服务器节点中肯定存在于至少一个节点上。如果 Candidate 的日志至少和大多数的服务器节点一样新（这个新的定义会在下面讨论），那么他一定持有了所有已经提交的日志条目。</p><p><code>RequestVote RPC</code> 实现了这样的限制：<strong>RequestVote RPC 中包含了 Candidate 的日志信息， Follower 会拒绝掉那些日志没有自己新的投票请求</strong>。</p><p>如何判断哪个日志条目比较新？</p><p>Raft 通过比较两份日志中最后一条日志条目的日志索引和 Term 来判断哪个日志比较新。</p><ul><li>先判断 Term，哪个数值大即代表哪个日志比较新。</li><li>如果 Term 相同，再比较 日志索引，哪个数值大即代表哪个日志比较新。</li></ul><h4 id="提交旧任期的日志条目" tabindex="-1"><a class="header-anchor" href="#提交旧任期的日志条目" aria-hidden="true">#</a> 提交旧任期的日志条目</h4><p>一个当前 Term 的日志条目被复制到了半数以上的服务器上，Leader 就认为它是可以被提交的。如果这个 Leader 在提交日志条目前就下线了，后续的 Leader 可能会覆盖掉这个日志条目。</p><figure><img src="https://pic4.zhimg.com/80/v2-12a5ebab63781f9ec49e14e331775537_hd.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><blockquote><p>💡 图示说明：</p><p>上图解释了为什么 Leader 无法对旧 Term 的日志条目进行提交。</p><ul><li>阶段 (a) ，S1 是 Leader，且 S1 写入日志条目为 (Term 2，日志索引 2），只有 S2 复制了这个日志条目。</li><li>阶段 (b)，S1 下线，S5 被选举为 Term3 的 Leader。S5 写入日志条目为 (Term 3，日志索引 2）。</li><li>阶段 (c)，S5 下线，S1 重新上线，并被选举为 Term4 的 Leader。此时，Term 2 的那条日志条目已经被复制到了集群中的大多数节点上，但是还没有被提交。</li><li>阶段 (d)，S1 再次下线，S5 重新上线，并被重新选举为 Term3 的 Leader。然后 S5 覆盖了日志索引 2 处的日志。</li><li>阶段 (e)，如果阶段 (d) 还未发生，即 S1 再次下线之前，S1 把自己主导的日志条目复制到了大多数节点上，那么在后续 Term 里面这些新日志条目就会被提交。这样在同一时刻就同时保证了，之前的所有旧日志条目就会被提交。</li></ul></blockquote><p><strong>Raft 永远不会通过计算副本数目的方式去提交一个之前 Term 内的日志条目</strong>。只有 Leader 当前 Term 里的日志条目通过计算副本数目可以被提交；一旦当前 Term 的日志条目以这种方式被提交，那么由于日志匹配特性，之前的日志条目也都会被间接的提交。</p><p>当 Leader 复制之前任期里的日志时，Raft 会为所有日志保留原始的 Term，这在提交规则上产生了额外的复杂性。在其他的一致性算法中，如果一个新的领导人要重新复制之前的任期里的日志时，它必须使用当前新的任期号。Raft 使用的方法更加容易辨别出日志，因为它可以随着时间和日志的变化对日志维护着同一个任期编号。另外，和其他的算法相比，Raft 中的新领导人只需要发送更少日志条目（其他算法中必须在他们被提交之前发送更多的冗余日志条目来为他们重新编号）。</p><h3 id="日志压缩" tabindex="-1"><a class="header-anchor" href="#日志压缩" aria-hidden="true">#</a> 日志压缩</h3><p>在实际的系统中，不能让日志无限膨胀，否则系统重启时需要花很长的时间进行恢复，从而影响可用性。Raft 采用对整个系统进行快照来解决，快照之前的日志都可以丢弃。</p><p>每个副本独立的对自己的系统状态生成快照，并且只能对已经提交的日志条目生成快照。</p><p>快照包含以下内容：</p><ul><li>日志元数据。最后一条已提交的日志条目的日志索引和 Term。这两个值在快照之后的第一条日志条目的 <code>AppendEntries RPC</code> 的完整性检查的时候会被用上。</li><li>系统当前状态。</li></ul><p>当 Leader 要发送某个日志条目，落后太多的 Follower 的日志条目会被丢弃，Leader 会将快照发给 Follower。或者新上线一台机器时，也会发送快照给它。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200201220628.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>生成快照的频率要适中</strong>，频率过高会消耗大量 I/O 带宽；频率过低，一旦需要执行恢复操作，会丢失大量数据，影响可用性。推荐当日志达到某个固定的大小时生成快照。</p><p>生成一次快照可能耗时过长，影响正常日志同步。可以通过使用 copy-on-write 技术避免快照过程影响正常日志同步。</p><blockquote><p>说明：本文仅阐述 Raft 算法的核心内容，不包括算法论证、评估等</p></blockquote><h2 id="一致性哈希算法" tabindex="-1"><a class="header-anchor" href="#一致性哈希算法" aria-hidden="true">#</a> 一致性哈希算法</h2><p>**<code>一致性哈希（Consistent Hash）</code>**算法的目标是：<strong>相同的请求尽可能落到同一个服务器上</strong>。</p><p><strong>一致性哈希</strong> 可以很好的解决 <strong>稳定性问题</strong>，可以将所有的 <strong>存储节点</strong> 排列在 <strong>首尾相接</strong> 的 <code>Hash</code> 环上，每个 <code>key</code> 在计算 <code>Hash</code> 后会 <strong>顺时针</strong> 找到 <strong>临接</strong> 的 <strong>存储节点</strong> 存放。而当有节点 <strong>加入</strong> 或 <strong>退出</strong> 时，仅影响该节点在 <code>Hash</code> 环上 <strong>顺时针相邻</strong> 的 <strong>后续节点</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/architecture/partition-consistent-hash.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li><strong>相同的请求</strong>是指：一般在使用一致性哈希时，需要指定一个 key 用于 hash 计算，可能是： <ul><li>用户 ID</li><li>请求方 IP</li><li>请求服务名称，参数列表构成的串</li></ul></li><li><strong>尽可能</strong>是指：服务器可能发生上下线，少数服务器的变化不应该影响大多数的请求。</li></ul><p>当某台候选服务器宕机时，原本发往该服务器的请求，会基于虚拟节点，平摊到其它候选服务器，不会引起剧烈变动。</p><ul><li><strong>优点</strong></li></ul><p><strong>加入</strong> 和 <strong>删除</strong> 节点只影响 <strong>哈希环</strong> 中 <strong>顺时针方向</strong> 的 <strong>相邻的节点</strong>，对其他节点无影响。</p><ul><li><strong>缺点</strong></li></ul><p><strong>加减节点</strong> 会造成 <strong>哈希环</strong> 中部分数据 <strong>无法命中</strong>。当使用 <strong>少量节点</strong> 时，<strong>节点变化</strong> 将大范围影响 <strong>哈希环</strong> 中 <strong>数据映射</strong>，不适合 <strong>少量数据节点</strong> 的分布式方案。<strong>普通</strong> 的 <strong>一致性哈希分区</strong> 在增减节点时需要 <strong>增加一倍</strong> 或 <strong>减去一半</strong> 节点才能保证 <strong>数据</strong> 和 <strong>负载的均衡</strong>。</p><blockquote><p><strong>注意</strong>：因为 <strong>一致性哈希分区</strong> 的这些缺点，一些分布式系统采用 <strong>虚拟槽</strong> 对 <strong>一致性哈希</strong> 进行改进，比如 <code>Dynamo</code> 系统。</p></blockquote><h2 id="gossip-协议" tabindex="-1"><a class="header-anchor" href="#gossip-协议" aria-hidden="true">#</a> Gossip 协议</h2><p>Gossip 协议是集群中节点相互通信的内部通信技术。 Gossip 是一种高效、轻量级、可靠的节点间广播协议，用于传播数据。它是去中心化的、“流行病”的、容错的和点对点通信协议。</p><p>Goosip 协议的信息传播和扩散通常需要由种子节点发起。整个传播过程可能需要一定的时间，由于不能保证某个时刻所有节点都收到消息，但是理论上最终所有节点都会收到消息，因此它是一个<strong>最终一致性</strong>协议。</p><h3 id="gossip-的执行过程" tabindex="-1"><a class="header-anchor" href="#gossip-的执行过程" aria-hidden="true">#</a> Gossip 的执行过程</h3><p>Gossip 协议的执行过程：Gossip 过程是由种子节点发起，当一个种子节点有状态需要更新到网络中的其他节点时，它会随机的选择周围几个节点散播消息，收到消息的节点也会重复该过程，直至最终网络中所有的节点都收到了消息。这个过程可能需要一定的时间，由于不能保证某个时刻所有节点都收到消息，但是理论上最终所有节点都会收到消息，因此它是一个最终一致性协议。</p><h3 id="gossip-类型" tabindex="-1"><a class="header-anchor" href="#gossip-类型" aria-hidden="true">#</a> Gossip 类型</h3><p>Gossip 有两种类型：</p><ul><li><strong>Anti-Entropy(反熵)</strong>：以固定的概率传播所有的数据。Anti-Entropy 是 SI model，节点只有两种状态，Suspective 和 Infective，叫做 simple epidemics。</li><li><strong>Rumor-Mongering(谣言传播)</strong>：仅传播新到达的数据。Rumor-Mongering 是 SIR model，节点有三种状态，Suspective，Infective 和 Removed，叫做 complex epidemics。</li></ul><p>熵是物理学上的一个概念，代表杂乱无章，而反熵就是在杂乱无章中寻求一致。本质上，<strong>反熵是一种通过异步修复实现最终一致性的方法</strong>。反熵指的是集群中的节点，每隔段时间就随机选择某个其他节点，然后通过互相交换自己的所有数据来消除两者之间的差异，实现数据的最终一致性。由于消息会不断反复的交换，因此消息数量是非常庞大的，无限制的（unbounded），这对一个系统来说是一个巨大的开销。所以，<strong>反熵不适合动态变化或节点数比较多的分布式环境</strong>。</p><p>谣言传播模型指的是当一个节点有了新数据后，这个节点变成活跃状态，并周期性地联系其他节点向其发送新数据，直到所有的节点都存储了该新数据。在谣言传播模型下，消息可以发送得更频繁，因为消息只包含最新 update，体积更小。而且，一个谣言消息在某个时间点之后会被标记为 removed，并且不再被传播，因此，谣言传播模型下，系统有一定的概率会不一致。而由于，谣言传播模型下某个时间点之后消息不再传播，因此消息是有限的，系统开销小。</p><p>一般来说，为了在通信代价和可靠性之间取得折中，需要将这两种方法结合使用。</p><p><strong>Gossip 中的通信模式</strong></p><p>在 Gossip 协议下，网络中两个节点之间有三种通信方式:</p><ul><li>Push: 节点 A 将数据 (key,value,version) 及对应的版本号推送给 B 节点，B 节点更新 A 中比自己新的数据</li><li>Pull：A 仅将数据 key, version 推送给 B，B 将本地比 A 新的数据（Key, value, version）推送给 A，A 更新本地</li><li>Push/Pull：与 Pull 类似，只是多了一步，A 再将本地比 B 新的数据推送给 B，B 则更新本地</li></ul><p>如果把两个节点数据同步一次定义为一个周期，则在一个周期内，Push 需通信 1 次，Pull 需 2 次，Push/Pull 则需 3 次。虽然消息数增加了，但从效果上来讲，Push/Pull 最好，理论上一个周期内可以使两个节点完全一致。直观上，Push/Pull 的收敛速度也是最快的。</p><h3 id="gossip-的优点" tabindex="-1"><a class="header-anchor" href="#gossip-的优点" aria-hidden="true">#</a> Gossip 的优点</h3><ul><li><strong>扩展性</strong>：网络可以允许节点的任意增加和减少，新增加的节点的状态最终会与其他节点一致。</li><li><strong>容错</strong>：网络中任何节点的宕机和重启都不会影响 Gossip 消息的传播，Gossip 协议具有天然的分布式系统容错特性。</li><li><strong>去中心化</strong>：Gossip 协议不要求任何中心节点，所有节点都可以是对等的，任何一个节点无需知道整个网络状况，只要网络是连通的，任意一个节点就可以把消息散播到全网。</li><li><strong>一致性收敛</strong>：Gossip 协议中的消息会以一传十、十传百一样的指数级速度在网络中快速传播，因此系统状态的不一致可以在很快的时间内收敛到一致。消息传播速度达到了 logN。</li><li><strong>简单</strong>：Gossip 协议的过程极其简单，实现起来几乎没有太多复杂性。</li></ul><h3 id="gossip-的缺陷" tabindex="-1"><a class="header-anchor" href="#gossip-的缺陷" aria-hidden="true">#</a> Gossip 的缺陷</h3><p>分布式网络中，没有一种完美的解决方案，Gossip 协议跟其他协议一样，也有一些不可避免的缺陷，主要是两个：</p><ul><li><strong>消息的延迟</strong>：由于 Gossip 协议中，节点只会随机向少数几个节点发送消息，消息最终是通过多个轮次的散播而到达全网的，因此使用 Gossip 协议会造成不可避免的消息延迟。不适合用在对实时性要求较高的场景下。</li><li><strong>消息冗余</strong>：Gossip 协议规定，节点会定期随机选择周围节点发送消息，而收到消息的节点也会重复该步骤，因此就不可避免的存在消息重复发送给同一节点的情况，造成了消息的冗余，同时也增加了收到消息的节点的处理压力。而且，由于是定期发送，因此，即使收到了消息的节点还会反复收到重复消息，加重了消息的冗余。</li></ul><h2 id="quorumnwr-算法" tabindex="-1"><a class="header-anchor" href="#quorumnwr-算法" aria-hidden="true">#</a> QuorumNWR 算法</h2><p>通过 Quorum NWR，你可以自定义一致性级别，通过临时调整写入或者查询的方式，当 <code>W + R &gt; N</code> 时，就可以实现强一致性了。</p><h3 id="quorum-nwr-的三要素" tabindex="-1"><a class="header-anchor" href="#quorum-nwr-的三要素" aria-hidden="true">#</a> Quorum NWR 的三要素</h3><ul><li><strong><code>N</code></strong>：表示副本数，又叫做复制因子（Replication Factor）。也就是说，N 表示集群中同一份数据有多少个副本。在实现 Quorum NWR 的时候，你需要实现自定义副本的功能。也就是说，用户可以自定义指定数据的副本数。</li><li><strong><code>W</code></strong>：又称写一致性级别（Write Consistency Level），表示成功完成 W 个副本更新，才完成写操作</li><li><strong><code>R</code></strong>：又称读一致性级别（Read Consistency Level），表示读取一个数据对象时需要读 R 个副本。你可以这么理解，读取指定数据时，要读 R 副本，然后返回 R 个副本中最新的那份数据。</li></ul><p>N、W、R 值的不同组合，会产生不同的一致性效果：</p><ul><li>当 <code>W + R &gt; N</code> 的时候，对于客户端来讲，整个系统能保证强一致性，一定能返回更新后的那份数据。</li><li>当 <code>W + R &lt; N</code> 的时候，对于客户端来讲，整个系统只能保证最终一致性，可能会返回旧数据。</li></ul><p>需要注意的是，副本数不能超过节点数：多副本的意义在于冗余备份，如果副本数超过节点数，就意味着在一个节点上会存在多个副本，那么冗余备份的意义就不大了。</p><h2 id="pbft-算法" tabindex="-1"><a class="header-anchor" href="#pbft-算法" aria-hidden="true">#</a> PBFT 算法</h2><p>略</p><h2 id="pow-算法" tabindex="-1"><a class="header-anchor" href="#pow-算法" aria-hidden="true">#</a> PoW 算法</h2><p>略</p><h2 id="zab-协议" tabindex="-1"><a class="header-anchor" href="#zab-协议" aria-hidden="true">#</a> ZAB 协议</h2><blockquote><p>ZooKeeper 并没有直接采用 Paxos 算法，而是采用了名为 ZAB 的一致性协议。<strong><em>ZAB 协议不是 Paxos 算法</em></strong>，只是比较类似，二者在操作上并不相同。</p><p>ZAB 协议是 Zookeeper 专门设计的一种<strong>支持崩溃恢复的原子广播协议</strong>。</p><p>ZAB 协议是 ZooKeeper 的数据一致性和高可用解决方案。</p></blockquote><p>ZAB 协议定义了两个可以<strong>无限循环</strong>的流程：</p><ul><li><strong><code>选举 Leader</code></strong> - 用于故障恢复，从而保证高可用。</li><li><strong><code>原子广播</code></strong> - 用于主从同步，从而保证数据一致性。</li></ul><h3 id="选举-leader-1" tabindex="-1"><a class="header-anchor" href="#选举-leader-1" aria-hidden="true">#</a> 选举 Leader</h3><blockquote><p><strong>ZooKeeper 的故障恢复</strong></p><p>ZooKeeper 集群采用一主（称为 Leader）多从（称为 Follower）模式，主从节点通过副本机制保证数据一致。</p><ul><li><strong>如果 Follower 节点挂了</strong> - ZooKeeper 集群中的每个节点都会单独在内存中维护自身的状态，并且各节点之间都保持着通讯，<strong>只要集群中有半数机器能够正常工作，那么整个集群就可以正常提供服务</strong>。</li><li><strong>如果 Leader 节点挂了</strong> - 如果 Leader 节点挂了，系统就不能正常工作了。此时，需要通过 ZAB 协议的选举 Leader 机制来进行故障恢复。</li></ul><p>ZAB 协议的选举 Leader 机制简单来说，就是：基于过半选举机制产生新的 Leader，之后其他机器将从新的 Leader 上同步状态，当有过半机器完成状态同步后，就退出选举 Leader 模式，进入原子广播模式。</p></blockquote><h4 id="术语" tabindex="-1"><a class="header-anchor" href="#术语" aria-hidden="true">#</a> 术语</h4><ul><li><strong>myid</strong> - 每个 Zookeeper 服务器，都需要在数据文件夹下创建一个名为 myid 的文件，该文件包含整个 Zookeeper 集群唯一的 ID（整数）。</li><li><strong>zxid</strong> - 类似于 RDBMS 中的事务 ID，用于标识一次更新操作的 Proposal ID。为了保证顺序性，该 zkid 必须单调递增。因此 Zookeeper 使用一个 64 位的数来表示，高 32 位是 Leader 的 epoch，从 1 开始，每次选出新的 Leader，epoch 加一。低 32 位为该 epoch 内的序号，每次 epoch 变化，都将低 32 位的序号重置。这样保证了 zkid 的全局递增性。</li></ul><h4 id="服务器状态" tabindex="-1"><a class="header-anchor" href="#服务器状态" aria-hidden="true">#</a> 服务器状态</h4><ul><li><strong><em>LOOKING</em></strong> - 不确定 Leader 状态。该状态下的服务器认为当前集群中没有 Leader，会发起 Leader 选举</li><li><strong><em>FOLLOWING</em></strong> - 跟随者状态。表明当前服务器角色是 Follower，并且它知道 Leader 是谁</li><li><strong><em>LEADING</em></strong> - 领导者状态。表明当前服务器角色是 Leader，它会维护与 Follower 间的心跳</li><li><strong><em>OBSERVING</em></strong> - 观察者状态。表明当前服务器角色是 Observer，与 Folower 唯一的不同在于不参与选举，也不参与集群写操作时的投票</li></ul><h4 id="选票数据结构" tabindex="-1"><a class="header-anchor" href="#选票数据结构" aria-hidden="true">#</a> 选票数据结构</h4><p>每个服务器在进行领导选举时，会发送如下关键信息</p><ul><li><strong><em>logicClock</em></strong> - 每个服务器会维护一个自增的整数，名为 logicClock，它表示这是该服务器发起的第多少轮投票</li><li><strong><em>state</em></strong> - 当前服务器的状态</li><li><strong><em>self_id</em></strong> - 当前服务器的 myid</li><li><strong><em>self_zxid</em></strong> - 当前服务器上所保存的数据的最大 zxid</li><li><strong><em>vote_id</em></strong> - 被推举的服务器的 myid</li><li><strong><em>vote_zxid</em></strong> - 被推举的服务器上所保存的数据的最大 zxid</li></ul><h4 id="投票流程" tabindex="-1"><a class="header-anchor" href="#投票流程" aria-hidden="true">#</a> 投票流程</h4><p>（1）<strong>自增选举轮次</strong> - Zookeeper 规定所有有效的投票都必须在同一轮次中。每个服务器在开始新一轮投票时，会先对自己维护的 logicClock 进行自增操作。</p><p>（2）<strong>初始化选票</strong> - 每个服务器在广播自己的选票前，会将自己的投票箱清空。该投票箱记录了所收到的选票。例：服务器 2 投票给服务器 3，服务器 3 投票给服务器 1，则服务器 1 的投票箱为(2, 3), (3, 1), (1, 1)。票箱中只会记录每一投票者的最后一票，如投票者更新自己的选票，则其它服务器收到该新选票后会在自己票箱中更新该服务器的选票。</p><p>（3）<strong>发送初始化选票</strong> - 每个服务器最开始都是通过广播把票投给自己。</p><p>（4）<strong>接收外部投票</strong> - 服务器会尝试从其它服务器获取投票，并记入自己的投票箱内。如果无法获取任何外部投票，则会确认自己是否与集群中其它服务器保持着有效连接。如果是，则再次发送自己的投票；如果否，则马上与之建立连接。</p><p>（5）<strong>判断选举轮次</strong> - 收到外部投票后，首先会根据投票信息中所包含的 logicClock 来进行不同处理</p><ul><li>外部投票的 logicClock 大于自己的 logicClock。说明该服务器的选举轮次落后于其它服务器的选举轮次，立即清空自己的投票箱并将自己的 logicClock 更新为收到的 logicClock，然后再对比自己之前的投票与收到的投票以确定是否需要变更自己的投票，最终再次将自己的投票广播出去。</li><li>外部投票的 logicClock 小于自己的 logicClock。当前服务器直接忽略该投票，继续处理下一个投票。</li><li>外部投票的 logickClock 与自己的相等。当时进行选票 PK。</li></ul><p>（6）<strong>选票 PK</strong> - 选票 PK 是基于<code>(self_id, self_zxid)</code> 与 <code>(vote_id, vote_zxid)</code> 的对比</p><ul><li>外部投票的 logicClock 大于自己的 logicClock，则将自己的 logicClock 及自己的选票的 logicClock 变更为收到的 logicClock</li><li>若 logicClock 一致，则对比二者的 vote_zxid，若外部投票的 vote_zxid 比较大，则将自己的票中的 vote_zxid 与 vote_myid 更新为收到的票中的 vote_zxid 与 vote_myid 并广播出去，另外将收到的票及自己更新后的票放入自己的票箱。如果票箱内已存在(self_myid, self_zxid)相同的选票，则直接覆盖</li><li>若二者 vote_zxid 一致，则比较二者的 vote_myid，若外部投票的 vote_myid 比较大，则将自己的票中的 vote_myid 更新为收到的票中的 vote_myid 并广播出去，另外将收到的票及自己更新后的票放入自己的票箱</li></ul><p>（7）<strong>统计选票</strong> - 如果已经确定有过半服务器认可了自己的投票（可能是更新后的投票），则终止投票。否则继续接收其它服务器的投票。</p><p>（8）<strong>更新服务器状态</strong> - 投票终止后，服务器开始更新自身状态。若过半的票投给了自己，则将自己的服务器状态更新为 LEADING，否则将自己的状态更新为 FOLLOWING</p><p>通过以上流程分析，我们不难看出：要使 Leader 获得多数 Server 的支持，则 <strong>ZooKeeper 集群节点数必须是奇数。且存活的节点数目不得少于 <code>N + 1</code></strong> 。</p><p>每个 Server 启动后都会重复以上流程。在恢复模式下，如果是刚从崩溃状态恢复的或者刚启动的 server 还会从磁盘快照中恢复数据和会话信息，zk 会记录事务日志并定期进行快照，方便在恢复时进行状态恢复。</p><h3 id="原子广播-atomic-broadcast" tabindex="-1"><a class="header-anchor" href="#原子广播-atomic-broadcast" aria-hidden="true">#</a> 原子广播（Atomic Broadcast）</h3><p><strong>ZooKeeper 通过副本机制来实现高可用</strong>。</p><p>那么，ZooKeeper 是如何实现副本机制的呢？答案是：ZAB 协议的原子广播。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/javaweb/distributed/rpc/zookeeper/zookeeper_3.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>ZAB 协议的原子广播要求：</p><p><strong><em>所有的写请求都会被转发给 Leader，Leader 会以原子广播的方式通知 Follow。当半数以上的 Follow 已经更新状态持久化后，Leader 才会提交这个更新，然后客户端才会收到一个更新成功的响应</em></strong>。这有些类似数据库中的两阶段提交协议。</p><p>在整个消息的广播过程中，Leader 服务器会每个事务请求生成对应的 Proposal，并为其分配一个全局唯一的递增的事务 ID(ZXID)，之后再对其进行广播。</p><h2 id="influxdb-企业版一致性实现剖析" tabindex="-1"><a class="header-anchor" href="#influxdb-企业版一致性实现剖析" aria-hidden="true">#</a> InfluxDB 企业版一致性实现剖析</h2><p>略</p><h2 id="hashicorp-raft" tabindex="-1"><a class="header-anchor" href="#hashicorp-raft" aria-hidden="true">#</a> Hashicorp Raft</h2><p>略</p><h2 id="基于-raft-的分布式-kv-系统开发实战" tabindex="-1"><a class="header-anchor" href="#基于-raft-的分布式-kv-系统开发实战" aria-hidden="true">#</a> 基于 Raft 的分布式 KV 系统开发实战</h2><p>略</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',235),f={href:"https://time.geekbang.org/column/intro/100046101",target:"_blank",rel:"noopener noreferrer"};function b(x,P){const o=t("ExternalLinkIcon");return s(),l("div",null,[p,g,e("blockquote",null,[e("p",null,[r("拜占庭将军问题是由"),e("a",c,[r("莱斯利·兰波特"),a(o)]),r("在其同名论文中提出的"),e("a",h,[r("分布式对等网络"),a(o)]),r("通信容错问题。其实是借拜占庭将军的例子，抛出了分布式共识性问题，并探讨和论证了解决的方法。")]),e("p",null,[r("在"),e("a",u,[r("分布式计算"),a(o)]),r("中，不同的节点通过通讯交换信息达成共识而按照同一套协作策略行动。但有时候，系统中的节点可能出错而发送错误的信息，用于传递信息的通讯网络也可能导致信息损坏，使得网络中不同的成员关于全体协作的策略得出不同结论，从而破坏系统一致性。拜占庭将军问题被认为是容错性问题中最难的问题类型之一。")])]),m,e("ul",null,[e("li",null,[e("a",f,[r("分布式协议与算法实战"),a(o)])])])])}const w=i(d,[["render",b],["__file","01.分布式协议与算法实战笔记.html.vue"]]);export{w as default};
