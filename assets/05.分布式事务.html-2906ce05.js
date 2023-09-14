import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as n,a as i,b as e,d as r,e as c}from"./app-e12ad880.js";const g={},s=c('<h1 id="分布式事务基本原理" tabindex="-1"><a class="header-anchor" href="#分布式事务基本原理" aria-hidden="true">#</a> 分布式事务基本原理</h1><blockquote><p><strong>分布式事务指的是事务操作跨越多个节点，并且要求满足事务的 ACID 特性。</strong></p></blockquote><h2 id="分布式事务简介" tabindex="-1"><a class="header-anchor" href="#分布式事务简介" aria-hidden="true">#</a> 分布式事务简介</h2><h3 id="acid" tabindex="-1"><a class="header-anchor" href="#acid" aria-hidden="true">#</a> ACID</h3><p>ACID 是数据库事务正确执行的四个基本要素。</p><ul><li><strong>原子性（Atomicity）</strong><ul><li>事务被视为不可分割的最小单元，事务中的所有操作要么全部提交成功，要么全部失败回滚。</li><li>回滚可以用日志来实现，日志记录着事务所执行的修改操作，在回滚时反向执行这些修改操作即可。</li></ul></li><li><strong>一致性（Consistency）</strong><ul><li>数据库在事务执行前后都保持一致性状态。</li><li>在一致性状态下，所有事务对一个数据的读取结果都是相同的。</li></ul></li><li><strong>隔离性（Isolation）</strong><ul><li>一个事务所做的修改在最终提交以前，对其它事务是不可见的。</li></ul></li><li><strong>持久性（Durability）</strong><ul><li>一旦事务提交，则其所做的修改将会永远保存到数据库中。即使系统发生崩溃，事务执行的结果也不能丢失。</li><li>可以通过数据库备份和恢复来实现，在系统发生奔溃时，使用备份的数据库进行数据恢复。</li></ul></li></ul><p><strong>一个支持事务（Transaction）中的数据库系统，必需要具有这四种特性，否则在事务过程（Transaction processing）当中无法保证数据的正确性，交易过程极可能达不到交易。</strong></p><ul><li>只有满足一致性，事务的执行结果才是正确的。</li><li>在无并发的情况下，事务串行执行，隔离性一定能够满足。此时只要能满足原子性，就一定能满足一致性。</li><li>在并发的情况下，多个事务并行执行，事务不仅要满足原子性，还需要满足隔离性，才能满足一致性。</li><li>事务满足持久化是为了能应对系统崩溃的情况。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/database/RDB/数据库ACID.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="本地事务和分布式事务" tabindex="-1"><a class="header-anchor" href="#本地事务和分布式事务" aria-hidden="true">#</a> 本地事务和分布式事务</h3><p>学习分布式之前，先了解一下本地事务的概念。</p><p>事务简单来说：<strong>一个会话中所进行所有的操作，要么同时成功，要么同时失败</strong>。</p><p>事务指的是满足 ACID 特性的一组操作，可以通过 <code>Commit</code> 提交一个事务，也可以使用 <code>Rollback</code> 进行回滚。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/database/RDB/数据库事务.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>分布式事务指的是事务操作跨越多个节点，并且要求满足事务的 ACID 特性。</strong></p><p>随着互联网快速发展，微服务，SOA 等服务架构模式正在被大规模的使用，现在分布式系统一般由多个独立的子系统组成，多个子系统通过网络通信互相协作配合完成各个功能。</p><p>有很多用例会跨多个子系统才能完成，比较典型的是电子商务网站的下单支付流程，至少会涉及交易系统和支付系统，而且这个过程中会涉及到事务的概念，即保证交易系统和支付系统的数据一致性，此处我们称这种<strong>跨系统的事务为分布式事务</strong>，具体一点而言，分布式事务是指事务的参与者、支持事务的服务器、资源服务器以及事务管理器分别位于不同的分布式系统的不同节点之上。</p><p>举个互联网常用的交易业务为例：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220512194132.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>上图中包含了库存和订单两个独立的微服务，每个微服务维护了自己的数据库。在交易系统的业务逻辑中，一个商品在下单之前需要先调用库存服务，进行扣除库存，再调用订单服务，创建订单记录。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220512194149.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>可以看到，如果多个数据库之间的数据更新没有保证事务，将会导致出现子系统数据不一致，业务出现问题。</p><p>分布式事务的难点：</p><ul><li><strong>事务的原子性</strong>：事务操作跨不同节点，当多个节点某一节点操作失败时，需要保证多节点操作的**都做或都不做（All or Nothing）**的原子性。</li><li><strong>事务的一致性</strong>：当发生网络传输故障或者节点故障，节点间数据复制通道中断，在进行事务操作时需要保证数据一致性，保证事务的任何操作都不会使得数据违反数据库定义的约束、触发器等规则。</li><li><strong>事务的隔离性</strong>：事务隔离性的本质就是如何正确多个并发事务的处理的读写冲突和写写冲突，因为在分布式事务控制中，可能会出现提交不同步的现象，这个时候就有可能出现“部分已经提交”的事务。此时并发应用访问数据如果没有加以控制，有可能出现“脏读”问题。</li></ul><h3 id="cap-和-base" tabindex="-1"><a class="header-anchor" href="#cap-和-base" aria-hidden="true">#</a> CAP 和 BASE</h3><p>CAP 定理又称为 CAP 原则，指的是：<strong>在一个分布式系统中， <code>一致性（C：Consistency）</code>、<code>可用性（A：Availability）</code> 和 <code>分区容忍性（P：Partition Tolerance）</code>，最多只能同时满足其中两项</strong>。</p><p>BASE 是 <strong><code>基本可用（Basically Available）</code></strong>、<strong><code>软状态（Soft State）</code></strong> 和 <strong><code>最终一致性（Eventually Consistent）</code></strong> 三个短语的缩写。BASE 理论是对 CAP 中一致性和可用性权衡的结果，它的理论的核心思想是：即使无法做到强一致性，但每个应用都可以根据自身业务特点，采用适当的方式来使系统达到最终一致性。</p><h3 id="柔性事务" tabindex="-1"><a class="header-anchor" href="#柔性事务" aria-hidden="true">#</a> 柔性事务</h3><p>在电商等互联网场景下，传统的事务在数据库性能和处理能力上都暴露出了瓶颈。在分布式领域基于 CAP 理论以及 BASE 理论，有人就提出了<strong>柔性事务</strong>的概念。</p><p>柔性事务是指：在不影响系统整体可用性的情况下(Basically Available 基本可用)，允许系统存在数据不一致的中间状态(Soft State 软状态)，在经过数据同步的延时之后，最终数据能够达到一致。<strong>并不是完全放弃了 ACID，而是通过放宽一致性要求，借助本地事务来实现最终分布式事务一致性的同时也保证系统的吞吐</strong>。</p><p>下面介绍的是实现柔性事务的一些常见特性，这些特性在具体的方案中不一定都要满足，因为不同的方案要求不一样。</p><ul><li><strong>可见性（对外可查询）</strong>：在分布式事务执行过程中，如果某一个步骤执行出错，就需要明确的知道其他几个操作的处理情况，这就需要其他的服务都能够提供查询接口，保证可以通过查询来判断操作的处理情况。为了保证操作的可查询，需要对于每一个服务的每一次调用都有一个全局唯一的标识，可以是业务单据号（如订单号）、也可以是系统分配的操作流水号（如支付记录流水号）。除此之外，操作的时间信息也要有完整的记录。</li><li><strong>操作幂等性</strong>：幂等性，其实是一个数学概念。幂等函数，或幂等方法，是指可以使用相同参数重复执行，并能获得相同结果的函数。幂等操作的特点是其任意多次执行所产生的影响均与一次执行的影响相同。也就是说，同一个方法，使用同样的参数，调用多次产生的业务结果与调用一次产生的业务结果相同。之所以需要操作幂等性，是因为为了保证数据的最终一致性，很多事务协议都会有很多重试的操作，如果一个方法不保证幂等，那么将无法被重试。幂等操作的实现方式有多种，如在系统中缓存所有的请求与处理结果、检测到重复操作后，直接返回上一次的处理结果等。</li></ul><h2 id="两阶段提交-2pc" tabindex="-1"><a class="header-anchor" href="#两阶段提交-2pc" aria-hidden="true">#</a> 两阶段提交（2PC）</h2><h3 id="方案简介" tabindex="-1"><a class="header-anchor" href="#方案简介" aria-hidden="true">#</a> 方案简介</h3><p>二阶段提交协议（Two-phase Commit，即 2PC）是常用的分布式事务解决方案，即<strong>将事务的提交过程分为两个阶段来进行处理：准备阶段和提交阶段</strong>。事务的发起者称协调者，事务的执行者称参与者。</p><p>在分布式系统里，每个节点都可以知晓自己操作的成功或者失败，却无法知道其他节点操作的成功或失败。当一个事务跨多个节点时，为了保持事务的原子性与一致性，而引入一个协调者来统一掌控所有参与者的操作结果，并指示它们是否要把操作结果进行真正的提交或者回滚（rollback）。</p><p>二阶段提交的思路可以概括为：<strong>参与者将操作成败通知协调者，再由协调者根据所有参与者的反馈情报决定各参与者是否要提交操作还是中止操作</strong>。</p><p>核心思想就是对每一个事务都采用先尝试后提交的处理方式，处理后所有的读操作都要能获得最新的数据，因此也可以将二阶段提交看作是一个强一致性算法。</p><h3 id="处理流程" tabindex="-1"><a class="header-anchor" href="#处理流程" aria-hidden="true">#</a> 处理流程</h3><p>简单一点理解，可以把协调者节点比喻为带头大哥，参与者理解比喻为跟班小弟，带头大哥统一协调跟班小弟的任务执行。</p><h4 id="阶段-1-准备阶段" tabindex="-1"><a class="header-anchor" href="#阶段-1-准备阶段" aria-hidden="true">#</a> 阶段 1：准备阶段</h4><ol><li>协调者向所有参与者发送事务内容，询问是否可以提交事务，并等待所有参与者答复。</li><li>各参与者执行事务操作，将 undo 和 redo 信息记入事务日志中（但不提交事务）。</li><li>如参与者执行成功，给协调者反馈 yes，即可以提交；如执行失败，给协调者反馈 no，即不可提交。</li></ol><h4 id="阶段-2-提交阶段" tabindex="-1"><a class="header-anchor" href="#阶段-2-提交阶段" aria-hidden="true">#</a> 阶段 2：提交阶段</h4><p>如果协调者收到了参与者的失败消息或者超时，直接给每个参与者发送回滚(rollback)消息；否则，发送提交(commit)消息；参与者根据协调者的指令执行提交或者回滚操作，释放所有事务处理过程中使用的锁资源。(注意:必须在最后阶段释放锁资源) 接下来分两种情况分别讨论提交阶段的过程。</p><p><strong>情况 1，当所有参与者均反馈 yes，提交事务</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200205153529.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><blockquote><ol><li>协调者向所有参与者发出正式提交事务的请求（即 commit 请求）。</li><li>参与者执行 commit 请求，并释放整个事务期间占用的资源。</li><li>各参与者向协调者反馈 ack(应答)完成的消息。</li><li>协调者收到所有参与者反馈的 ack 消息后，即完成事务提交。</li></ol></blockquote><p><strong>情况 2，当任何阶段 1 一个参与者反馈 no，中断事务</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200205154145.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><blockquote><ol><li>协调者向所有参与者发出回滚请求（即 rollback 请求）。</li><li>参与者使用阶段 1 中的 undo 信息执行回滚操作，并释放整个事务期间占用的资源。</li><li>各参与者向协调者反馈 ack 完成的消息。</li><li>协调者收到所有参与者反馈的 ack 消息后，即完成事务中断。</li></ol></blockquote><h3 id="方案总结" tabindex="-1"><a class="header-anchor" href="#方案总结" aria-hidden="true">#</a> 方案总结</h3><p>2PC 方案实现起来简单，实际项目中使用比较少，主要因为以下问题：</p><ul><li><strong>性能问题</strong> - 所有参与者在事务提交阶段处于同步阻塞状态，占用系统资源，容易导致性能瓶颈。</li><li><strong>可靠性问题</strong> - 如果协调者存在单点故障问题，如果协调者出现故障，参与者将一直处于锁定状态。</li><li><strong>数据一致性问题</strong> - 在阶段 2 中，如果发生局部网络问题，一部分事务参与者收到了提交消息，另一部分事务参与者没收到提交消息，那么就导致了节点之间数据的不一致。</li></ul><h2 id="三阶段提交-3pc" tabindex="-1"><a class="header-anchor" href="#三阶段提交-3pc" aria-hidden="true">#</a> 三阶段提交（3PC）</h2><h3 id="方案简介-1" tabindex="-1"><a class="header-anchor" href="#方案简介-1" aria-hidden="true">#</a> 方案简介</h3><p>三阶段提交协议（Three-phase Commit，3PC），是二阶段提交协议的改进版本，与二阶段提交不同的是，引入超时机制。同时在协调者和参与者中都引入超时机制。</p><p>三阶段提交将二阶段的准备阶段拆分为 2 个阶段，插入了一个 preCommit 阶段，使得原先在二阶段提交中，参与者在准备之后，由于协调者发生崩溃或错误，而导致参与者处于无法知晓是否提交或者中止的“不确定状态”所产生的可能相当长的延时的问题得以解决。</p><h3 id="处理流程-1" tabindex="-1"><a class="header-anchor" href="#处理流程-1" aria-hidden="true">#</a> 处理流程</h3><h4 id="阶段-1-cancommit" tabindex="-1"><a class="header-anchor" href="#阶段-1-cancommit" aria-hidden="true">#</a> 阶段 1：canCommit</h4><p>协调者向参与者发送 commit 请求，参与者如果可以提交就返回 yes 响应(参与者不执行事务操作)，否则返回 no 响应：</p><ol><li>协调者向所有参与者发出包含事务内容的 canCommit 请求，询问是否可以提交事务，并等待所有参与者答复。</li><li>参与者收到 canCommit 请求后，如果认为可以执行事务操作，则反馈 yes 并进入预备状态，否则反馈 no。</li></ol><h4 id="阶段-2-precommit" tabindex="-1"><a class="header-anchor" href="#阶段-2-precommit" aria-hidden="true">#</a> 阶段 2：preCommit</h4><p>协调者根据阶段 1 canCommit 参与者的反应情况来决定是否可以基于事务的 preCommit 操作。根据响应情况，有以下两种可能。</p><p><strong>情况 1：阶段 1 所有参与者均反馈 yes，参与者预执行事务</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200205180242.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><blockquote><ol><li>协调者向所有参与者发出 preCommit 请求，进入准备阶段。</li><li>参与者收到 preCommit 请求后，执行事务操作，将 undo 和 redo 信息记入事务日志中（但不提交事务）。</li><li>各参与者向协调者反馈 ack 响应或 no 响应，并等待最终指令。</li></ol></blockquote><p><strong>情况 2：阶段 1 任何一个参与者反馈 no，或者等待超时后协调者尚无法收到所有参与者的反馈，即中断事务</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200205205117.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><blockquote><ol><li>协调者向所有参与者发出 abort 请求。</li><li>无论收到协调者发出的 abort 请求，或者在等待协调者请求过程中出现超时，参与者均会中断事务。</li></ol></blockquote><h4 id="阶段-3-docommit" tabindex="-1"><a class="header-anchor" href="#阶段-3-docommit" aria-hidden="true">#</a> 阶段 3：doCommit</h4><p>该阶段进行真正的事务提交，也可以分为以下两种情况：</p><p><strong>情况 1：阶段 2 所有参与者均反馈 ack 响应，执行真正的事务提交</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200205180425.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><blockquote><ol><li>如果协调者处于工作状态，则向所有参与者发出 do Commit 请求。</li><li>参与者收到 do Commit 请求后，会正式执行事务提交，并释放整个事务期间占用的资源。</li><li>各参与者向协调者反馈 ack 完成的消息。</li><li>协调者收到所有参与者反馈的 ack 消息后，即完成事务提交。</li></ol></blockquote><p><strong>情况 2：任何一个参与者反馈 no，或者等待超时后协调者尚无法收到所有参与者的反馈，即中断事务</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200205180515.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><blockquote><ol><li>如果协调者处于工作状态，向所有参与者发出 abort 请求。</li><li>参与者使用阶段 1 中的 undo 信息执行回滚操作，并释放整个事务期间占用的资源。</li><li>各参与者向协调者反馈 ack 完成的消息。</li><li>协调者收到所有参与者反馈的 ack 消息后，即完成事务中断。</li></ol></blockquote><p>注意：进入阶段 3 后，无论协调者出现问题，或者协调者与参与者网络出现问题，都会导致参与者无法接收到协调者发出的 do Commit 请求或 abort 请求。此时，参与者都会在等待超时之后，继续执行事务提交。</p><h3 id="方案总结-1" tabindex="-1"><a class="header-anchor" href="#方案总结-1" aria-hidden="true">#</a> 方案总结</h3><p>优点：</p><ul><li>相比二阶段提交，三阶段降低了阻塞范围，在等待超时后协调者或参与者会中断事务。避免了协调者单点问题，阶段 3 中协调者出现问题时，参与者会继续提交事务。</li></ul><p>缺点：</p><ul><li>数据不一致问题依然存在，当在参与者收到 preCommit 请求后等待 do commite 指令时，此时如果协调者请求中断事务，而协调者无法与参与者正常通信，会导致参与者继续提交事务，造成数据不一致。</li></ul><h2 id="补偿事务-tcc" tabindex="-1"><a class="header-anchor" href="#补偿事务-tcc" aria-hidden="true">#</a> 补偿事务（TCC）</h2><h3 id="方案简介-2" tabindex="-1"><a class="header-anchor" href="#方案简介-2" aria-hidden="true">#</a> 方案简介</h3><p>TCC（Try-Confirm-Cancel）的概念，最早是由 Pat Helland 于 2007 年发表的一篇名为《Life beyond Distributed Transactions:an Apostate’s Opinion》的论文提出。</p><p>TCC 是服务化的二阶段编程模型，其 Try、Confirm、Cancel 3 个方法均由业务编码实现；</p><ul><li><strong>Try</strong> - 操作作为一阶段，负责资源的检查和预留。</li><li><strong>Confirm</strong> - 操作作为二阶段提交操作，执行真正的业务。</li><li><strong>Cancel</strong> - 是预留资源的取消。</li></ul><p>TCC 事务的 Try、Confirm、Cancel 可以理解为 SQL 事务中的 Lock、Commit、Rollback。</p><h3 id="处理流程-2" tabindex="-1"><a class="header-anchor" href="#处理流程-2" aria-hidden="true">#</a> 处理流程</h3><p>为了方便理解，下面以电商下单为例进行方案解析，这里把整个过程简单分为扣减库存，订单创建 2 个步骤，库存服务和订单服务分别在不同的服务器节点上。</p><h4 id="try-阶段" tabindex="-1"><a class="header-anchor" href="#try-阶段" aria-hidden="true">#</a> Try 阶段</h4><p>从执行阶段来看，与传统事务机制中业务逻辑相同。但从业务角度来看，却不一样。TCC 机制中的 Try 仅是一个初步操作，它和后续的确认一起才能真正构成一个完整的业务逻辑，这个阶段主要完成：</p><ul><li>完成所有业务检查( 一致性 )</li><li>预留必须业务资源( 准隔离性 )</li><li>Try 尝试执行业务 TCC 事务机制以初步操作（Try）为中心的，确认操作（Confirm）和取消操作（Cancel）都是围绕初步操作（Try）而展开。因此，Try 阶段中的操作，其保障性是最好的，即使失败，仍然有取消操作（Cancel）可以将其执行结果撤销。</li></ul><p>假设商品库存为 100，购买数量为 2，这里检查和更新库存的同时，冻结用户购买数量的库存，同时创建订单，订单状态为待确认。</p><h4 id="confirm-cancel-阶段" tabindex="-1"><a class="header-anchor" href="#confirm-cancel-阶段" aria-hidden="true">#</a> Confirm / Cancel 阶段</h4><p>根据 Try 阶段服务是否全部正常执行，继续执行确认操作（Confirm）或取消操作（Cancel）。 Confirm 和 Cancel 操作满足幂等性，如果 Confirm 或 Cancel 操作执行失败，将会不断重试直到执行完成。</p><p><strong>Confirm：当 Try 阶段服务全部正常执行， 执行确认业务逻辑操作</strong></p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200205205200.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>这里使用的资源一定是 Try 阶段预留的业务资源。在 TCC 事务机制中认为，如果在 Try 阶段能正常的预留资源，那 Confirm 一定能完整正确的提交。Confirm 阶段也可以看成是对 Try 阶段的一个补充，Try+Confirm 一起组成了一个完整的业务逻辑。</p><p><strong>Cancel：当 Try 阶段存在服务执行失败， 进入 Cancel 阶段</strong></p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200205205221.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Cancel 取消执行，释放 Try 阶段预留的业务资源，上面的例子中，Cancel 操作会把冻结的库存释放，并更新订单状态为取消。</p><h3 id="方案总结-2" tabindex="-1"><a class="header-anchor" href="#方案总结-2" aria-hidden="true">#</a> 方案总结</h3><p>TCC 事务机制相对于传统事务机制（X/Open XA），TCC 事务机制相比于上面介绍的 XA 事务机制，有以下优点:</p><ul><li><strong>性能提升</strong> - 具体业务来实现控制资源锁的粒度变小，不会锁定整个资源。</li><li><strong>数据最终一致性</strong> - 基于 Confirm 和 Cancel 的幂等性，保证事务最终完成确认或者取消，保证数据的一致性。</li><li><strong>可靠性</strong> - 解决了 XA 协议的协调者单点故障问题，由主业务方发起并控制整个业务活动，业务活动管理器也变成多点，引入集群。</li></ul><p>缺点： TCC 的 Try、Confirm 和 Cancel 操作功能要按具体业务来实现，业务耦合度较高，提高了开发成本。</p><h2 id="本地消息表" tabindex="-1"><a class="header-anchor" href="#本地消息表" aria-hidden="true">#</a> 本地消息表</h2><h3 id="方案简介-3" tabindex="-1"><a class="header-anchor" href="#方案简介-3" aria-hidden="true">#</a> 方案简介</h3><p>本地消息表的方案最初是由 ebay 提出，核心思路是将分布式事务拆分成本地事务进行处理。</p><p>方案通过在事务主动发起方额外新建事务消息表，事务发起方处理业务和记录事务消息在本地事务中完成，轮询事务消息表的数据发送事务消息，事务被动方基于消息中间件消费事务消息表中的事务。</p><p>这样设计可以避免”<strong>业务处理成功 + 事务消息发送失败</strong>&quot;，或&quot;<strong>业务处理失败 + 事务消息发送成功</strong>&quot;的棘手情况出现，保证 2 个系统事务的数据一致性。</p><h3 id="处理流程-3" tabindex="-1"><a class="header-anchor" href="#处理流程-3" aria-hidden="true">#</a> 处理流程</h3><p>下面把分布式事务最先开始处理的事务方成为事务主动方，在事务主动方之后处理的业务内的其他事务成为事务被动方。</p><p>为了方便理解，下面继续以电商下单为例进行方案解析，这里把整个过程简单分为扣减库存，订单创建 2 个步骤，库存服务和订单服务分别在不同的服务器节点上，其中库存服务是事务主动方，订单服务是事务被动方。</p><p>事务的主动方需要额外新建事务消息表，用于记录分布式事务的消息的发生、处理状态。</p><p>整个业务处理流程如下：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220512194208.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><blockquote><ol><li><strong>步骤 1 事务主动方处理本地事务。</strong> 事务主动发在本地事务中处理业务更新操作和写消息表操作。 上面例子中库存服务阶段再本地事务中完成扣减库存和写消息表(图中 1、2)。</li><li><strong>步骤 2 事务主动方通过 MQ 通知事务被动方处理事务</strong>。 消息中间件可以基于 Kafka、RocketMQ 消息队列，事务主动方法主动写消息到消息队列，事务消费方消费并处理消息队列中的消息。 上面例子中，库存服务把事务待处理消息写到消息中间件，订单服务消费消息中间件的消息，完成新增订单（图中 3 - 5）。</li><li><strong>步骤 3 事务被动方通过 MQ 反会处理结果。</strong> 上面例子中，订单服务把事务已处理消息写到消息中间件，库存服务消费中间件的消息，并将事务消息的状态更新为已完成(图中 6 - 8)</li></ol></blockquote><p>为了数据的一致性，当处理错误需要重试，事务发送方和事务接收方相关业务处理需要支持幂等。具体保存一致性的容错处理如下：</p><blockquote><ul><li>当步骤 1 处理出错，事务回滚，相当于什么都没发生。</li><li>当步骤 2、步骤 3 处理出错，由于未处理的事务消息还是保存在事务发送方，事务发送方可以定时轮询为超时消息数据，再次发送的消息中间件进行处理。事务被动方消费事务消息重试处理。</li><li>如果是业务上的失败，事务被动方可以发消息给事务主动方进行回滚。</li><li>如果多个事务被动方已经消费消息，事务主动方需要回滚事务时需要通知事务被动方回滚。</li></ul></blockquote><h3 id="方案总结-3" tabindex="-1"><a class="header-anchor" href="#方案总结-3" aria-hidden="true">#</a> 方案总结</h3><p>方案的优点如下：</p><ul><li>从应用设计开发的角度实现了消息数据的可靠性，消息数据的可靠性不依赖于消息中间件，弱化了对 MQ 中间件特性的依赖。</li><li>方案轻量，容易实现。</li></ul><p>缺点如下：</p><ul><li>与具体的业务场景绑定，耦合性强，不可复用。</li><li>消息数据与业务数据同库，占用业务系统资源。</li><li>业务系统在使用关系型数据库的情况下，消息服务性能会受到关系型数据库并发性能的局限。</li></ul><h2 id="mq-事务" tabindex="-1"><a class="header-anchor" href="#mq-事务" aria-hidden="true">#</a> MQ 事务</h2><p>事务消息需要消息队列提供相应的功能才能实现，Kafka 和 RocketMQ 都提供了事务相关功能。</p><ul><li><strong>Kafka</strong> 的解决方案是：直接抛出异常，让用户自行处理。用户可以在业务代码中反复重试提交，直到提交成功，或者删除之前修改的数据记录进行事务补偿。</li><li><strong>RocketMQ</strong> 的解决方案是：通过事务反查机制来解决事务消息提交失败的问题。如果 Producer 在提交或者回滚事务消息时发生网络异常，RocketMQ 的 Broker 没有收到提交或者回滚的请求，Broker 会定期去 Producer 上反查这个事务对应的本地事务的状态，然后根据反查结果决定提交或者回滚这个事务。为了支撑这个事务反查机制，业务代码需要实现一个反查本地事务状态的接口，告知 RocketMQ 本地事务是成功还是失败。</li></ul><h3 id="rocketmq-事务消息流程" tabindex="-1"><a class="header-anchor" href="#rocketmq-事务消息流程" aria-hidden="true">#</a> RocketMQ 事务消息流程</h3><p>基于 MQ 的分布式事务方案其实是对本地消息表的封装，将本地消息表基于 MQ 内部，其他方面的协议基本与本地消息表一致。下面主要基于 RocketMQ 4.3 之后的版本介绍 MQ 的分布式事务方案。</p><p>在本地消息表方案中，保证事务主动方发写业务表数据和写消息表数据的一致性是基于数据库事务，RocketMQ 的事务消息相对于普通 MQ，相对于提供了 2PC 的提交接口，方案如下：</p><p><strong>正常情况——事务主动方发消息</strong> 这种情况下，事务主动方服务正常，没有发生故障，发消息流程如下：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220512194221.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li>发送方向 MQ 服务端(MQ Server)发送 half 消息。</li><li>MQ Server 将消息持久化成功之后，向发送方 ACK 确认消息已经发送成功。</li><li>发送方开始执行本地事务逻辑。</li><li>发送方根据本地事务执行结果向 MQ Server 提交二次确认（commit 或是 rollback）。</li><li>MQ Server 收到 commit 状态则将半消息标记为可投递，订阅方最终将收到该消息；MQ Server 收到 rollback 状态则删除半消息，订阅方将不会接受该消息。</li></ol><p><strong>异常情况——事务主动方消息恢复</strong> 在断网或者应用重启等异常情况下，图中 4 提交的二次确认超时未到达 MQ Server，此时处理逻辑如下：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220512194230.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol start="5"><li>MQ Server 对该消息发起消息回查。</li><li>发送方收到消息回查后，需要检查对应消息的本地事务执行的最终结果。</li><li>发送方根据检查得到的本地事务的最终状态再次提交二次确认</li><li>MQ Server 基于 commit / rollback 对消息进行投递或者删除</li></ol><blockquote><p><strong>思考</strong>：为什么不等待写业务表成功后再向消息队列发送提交消息呢？</p><p>因为可能存在这样情况：写业务表成功了，但是还没来得及发消息，节点就宕机了。</p></blockquote><h3 id="mq-事务方案总结" tabindex="-1"><a class="header-anchor" href="#mq-事务方案总结" aria-hidden="true">#</a> MQ 事务方案总结</h3><p>相比本地消息表方案，MQ 事务方案优点是：</p><ul><li>消息数据独立存储 ，降低业务系统与消息系统之间的耦合。</li><li>吞吐量优于使用本地消息表方案。</li></ul><p>缺点是：</p><ul><li>一次消息发送需要两次网络请求(half 消息 + commit/rollback 消息)</li><li>业务处理服务需要实现消息状态回查接口</li></ul><h2 id="saga" tabindex="-1"><a class="header-anchor" href="#saga" aria-hidden="true">#</a> SAGA</h2><h3 id="方案简介-4" tabindex="-1"><a class="header-anchor" href="#方案简介-4" aria-hidden="true">#</a> 方案简介</h3><p>Saga 事务源于 1987 年普林斯顿大学的 Hecto 和 Kenneth 发表的如何处理 long lived transaction（长活事务）论文，Saga 事务核心思想是将长事务拆分为多个本地短事务，由 Saga 事务协调器协调，如果正常结束那就正常完成，如果某个步骤失败，则根据相反顺序一次调用补偿操作。</p><h3 id="处理流程-4" tabindex="-1"><a class="header-anchor" href="#处理流程-4" aria-hidden="true">#</a> 处理流程</h3><p><strong>Saga 事务基本协议如下</strong>：</p><ul><li>每个 Saga 事务由一系列幂等的有序子事务(sub-transaction) Ti 组成。</li><li>每个 Ti 都有对应的幂等补偿动作 Ci，补偿动作用于撤销 Ti 造成的结果。</li></ul><p>可以看到，和 TCC 相比，Saga 没有“预留”动作，它的 Ti 就是直接提交到库。</p><p>下面以下单流程为例，整个操作包括：创建订单、扣减库存、支付、增加积分 Saga 的执行顺序有两种：</p><figure><img src="https://user-gold-cdn.xitu.io/2018/12/10/1679817d8ce9b4b7?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="Saga事务执行顺序" tabindex="0" loading="lazy"><figcaption>Saga事务执行顺序</figcaption></figure><ul><li>事务正常执行完成 T1, T2, T3, ..., Tn，例如：扣减库存(T1)，创建订单(T2)，支付(T3)，依次有序完成整个事务。</li><li>事务回滚 T1, T2, ..., Tj, Cj,..., C2, C1，其中 0 &lt; j &lt; n，例如：扣减库存(T1)，创建订单(T2)，支付(T3，支付失败)，支付回滚(C3)，订单回滚(C2)，恢复库存(C1)。</li></ul><h4 id="恢复策略" tabindex="-1"><a class="header-anchor" href="#恢复策略" aria-hidden="true">#</a> 恢复策略</h4><p>Saga 定义了两种恢复策略：</p><ul><li>向前恢复(forward recovery)</li></ul><figure><img src="https://user-gold-cdn.xitu.io/2018/12/10/1679817da631d59c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="Saga事务向前恢复" tabindex="0" loading="lazy"><figcaption>Saga事务向前恢复</figcaption></figure><p>对应于上面第一种执行顺序，适用于必须要成功的场景，发生失败进行重试，执行顺序是类似于这样的：T1, T2, ..., Tj(失败), Tj(重试),..., Tn，其中 j 是发生错误的子事务(sub-transaction)。该情况下不需要 Ci。</p><ul><li>向后恢复(backward recovery)</li></ul><figure><img src="https://user-gold-cdn.xitu.io/2018/12/10/1679817da706b3c2?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="Saga事务向后恢复" tabindex="0" loading="lazy"><figcaption>Saga事务向后恢复</figcaption></figure><p>对应于上面提到的第二种执行顺序，其中 j 是发生错误的子事务(sub-transaction)，这种做法的效果是撤销掉之前所有成功的子事务，使得整个 Saga 的执行结果撤销。</p><p>Saga 事务常见的有两种不同的实现方式：命令协调和事件编排。</p><h4 id="命令协调" tabindex="-1"><a class="header-anchor" href="#命令协调" aria-hidden="true">#</a> 命令协调</h4><ul><li><strong>命令协调(Order Orchestrator)：中央协调器负责集中处理事件的决策和业务逻辑排序。</strong></li></ul><p>中央协调器（Orchestrator，简称 OSO）以命令/回复的方式与每项服务进行通信，全权负责告诉每个参与者该做什么以及什么时候该做什么。</p><figure><img src="https://user-gold-cdn.xitu.io/2018/12/10/1679817daa1798dd?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="命令协调模式" tabindex="0" loading="lazy"><figcaption>命令协调模式</figcaption></figure><p>以电商订单的例子为例：</p><blockquote><ol><li>事务发起方的主业务逻辑请求 OSO 服务开启订单事务。</li><li>OSO 向库存服务请求扣减库存，库存服务回复处理结果。</li><li>OSO 向订单服务请求创建订单，订单服务回复创建结果。</li><li>OSO 向支付服务请求支付，支付服务回复处理结果。</li><li>主业务逻辑接收并处理 OSO 事务处理结果回复。</li></ol></blockquote><p>中央协调器必须事先知道执行整个订单事务所需的流程(例如通过读取配置)。如果有任何失败，它还负责通过向每个参与者发送命令来撤销之前的操作来协调分布式的回滚。基于中央协调器协调一切时，回滚要容易得多，因为协调器默认是执行正向流程，回滚时只要执行反向流程即可。</p><h4 id="事件编排" tabindex="-1"><a class="header-anchor" href="#事件编排" aria-hidden="true">#</a> 事件编排</h4><ul><li><strong>事件编排 (Event Choreography0：没有中央协调器（没有单点风险）时，每个服务产生并观察其他服务的事件，并决定是否应采取行动</strong>。</li></ul><p>在事件编排方法中，第一个服务执行一个事务，然后发布一个事件。该事件被一个或多个服务进行监听，这些服务再执行本地事务并发布（或不发布）新的事件。</p><p>当最后一个服务执行本地事务并且不发布任何事件时，意味着分布式事务结束，或者它发布的事件没有被任何 Saga 参与者听到都意味着事务结束。</p><p>以电商订单的例子为例：</p><figure><img src="https://user-gold-cdn.xitu.io/2018/12/10/1679817dba9b2b61?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="事件编排模式" tabindex="0" loading="lazy"><figcaption>事件编排模式</figcaption></figure><blockquote><ol><li>事务发起方的主业务逻辑发布开始订单事件</li><li>库存服务监听开始订单事件，扣减库存，并发布库存已扣减事件</li><li>订单服务监听库存已扣减事件，创建订单，并发布订单已创建事件</li><li>支付服务监听订单已创建事件，进行支付，并发布订单已支付事件</li><li>主业务逻辑监听订单已支付事件并处理。</li></ol></blockquote><p>事件/编排是实现 Saga 模式的自然方式，它很简单，容易理解，不需要太多的代码来构建。如果事务涉及 2 至 4 个步骤，则可能是非常合适的。</p><h3 id="方案总结-4" tabindex="-1"><a class="header-anchor" href="#方案总结-4" aria-hidden="true">#</a> 方案总结</h3><p><strong>命令协调设计的优点和缺点：</strong></p><p>优点如下：</p><ul><li>服务之间关系简单，避免服务之间的循环依赖关系，因为 Saga 协调器会调用 Saga 参与者，但参与者不会调用协调器</li><li>程序开发简单，只需要执行命令/回复(其实回复消息也是一种事件消息)，降低参与者的复杂性。</li><li>易维护扩展，在添加新步骤时，事务复杂性保持线性，回滚更容易管理，更容易实施和测试</li></ul><p>缺点如下：</p><ul><li>中央协调器容易处理逻辑容易过于复杂，导致难以维护。</li><li>存在协调器单点故障风险。</li></ul><p><strong>事件/编排设计的优点和缺点</strong></p><p>优点如下：</p><ul><li>避免中央协调器单点故障风险。</li><li>当涉及的步骤较少服务开发简单，容易实现。</li></ul><p>缺点如下：</p><ul><li>服务之间存在循环依赖的风险。</li><li>当涉及的步骤较多，服务间关系混乱，难以追踪调测。</li></ul><p>值得补充的是，由于 Saga 模型中没有 Prepare 阶段，因此事务间不能保证隔离性，当多个 Saga 事务操作同一资源时，就会产生更新丢失、脏数据读取等问题，这时需要在业务层控制并发，例如：在应用层面加锁，或者应用层面预先冻结资源。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h3 id="各方案使用场景" tabindex="-1"><a class="header-anchor" href="#各方案使用场景" aria-hidden="true">#</a> 各方案使用场景</h3><p>介绍完分布式事务相关理论和常见解决方案后，最终的目的在实际项目中运用，因此，总结一下各个方案的常见的使用场景。</p><figure><img src="https://user-gold-cdn.xitu.io/2018/12/10/1679817dc68ae74d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="方案比较" tabindex="0" loading="lazy"><figcaption>方案比较</figcaption></figure><ul><li>2PC/3PC 依赖于数据库，能够很好的提供强一致性和强事务性，但相对来说延迟比较高，比较适合传统的单体应用，在同一个方法中存在跨库操作的情况，不适合高并发和高性能要求的场景。</li><li>TCC 适用于执行时间确定且较短，实时性要求高，对数据一致性要求高，比如互联网金融企业最核心的三个服务：交易、支付、账务。</li><li>本地消息表/MQ 事务 都适用于事务中参与方支持操作幂等，对一致性要求不高，业务上能容忍数据不一致到一个人工检查周期，事务涉及的参与方、参与环节较少，业务上有对账/校验系统兜底。</li><li>Saga 事务 由于 Saga 事务不能保证隔离性，需要在业务层控制并发，适合于业务场景事务并发操作同一资源较少的情况。 Saga 相比缺少预提交动作，导致补偿动作的实现比较麻烦，例如业务是发送短信，补偿动作则得再发送一次短信说明撤销，用户体验比较差。Saga 事务较适用于补偿动作容易处理的场景。</li></ul><h3 id="分布式事务方案设计" tabindex="-1"><a class="header-anchor" href="#分布式事务方案设计" aria-hidden="true">#</a> 分布式事务方案设计</h3><p>本文介绍的偏向于原理，业界已经有不少开源的或者收费的解决方案，篇幅所限，就不再展开介绍。</p><p>实际运用理论时进行架构设计时，许多人容易犯“手里有了锤子，看什么都觉得像钉子”的错误，设计方案时考虑的问题场景过多，各种重试，各种补偿机制引入系统，导致设计出来的系统过于复杂，落地遥遥无期。</p><blockquote><p>世界上解决一个计算机问题最简单的方法：“恰好”不需要解决它！—— 阿里中间件技术专家沈询</p></blockquote><p>有些问题，看起来很重要，但实际上我们可以通过<strong>合理的设计</strong>或者将<strong>问题分解</strong>来规避。设计分布式事务系统也不是需要考虑所有异常情况，不必过度设计各种回滚，补偿机制。如果硬要把时间花在解决问题本身，实际上不仅效率低下，而且也是一种浪费。</p><p>如果系统要实现回滚流程的话，有可能系统复杂度将大大提升，且很容易出现 Bug，估计出现 Bug 的概率会比需要事务回滚的概率大很多。在设计系统时，我们需要衡量是否值得花这么大的代价来解决这样一个出现概率非常小的问题，可以考虑当出现这个概率很小的问题，能否采用<strong>人工解决</strong>的方式，这也是大家在解决疑难问题时需要多多思考的地方。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',202),d={href:"https://www.cnblogs.com/savorboard/p/distributed-system-transaction-consistency.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://juejin.im/post/5c0e5bf8e51d45063322fe50",target:"_blank",rel:"noopener noreferrer"};function h(u,m){const a=o("ExternalLinkIcon");return l(),n("div",null,[s,i("ul",null,[i("li",null,[i("a",d,[e("聊聊分布式事务，再说说解决方案"),r(a)])]),i("li",null,[i("a",p,[e("理解分布式事务"),r(a)])])])])}const C=t(g,[["render",h],["__file","05.分布式事务.html.vue"]]);export{C as default};
