import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as i,c as s,a as o,b as r,d as t,e as d}from"./app-2811837c.js";const c={},g=d('<h1 id="消息队列基本原理" tabindex="-1"><a class="header-anchor" href="#消息队列基本原理" aria-hidden="true">#</a> 消息队列基本原理</h1><blockquote><p>消息队列（Message Queue，简称 MQ）技术是<strong>应用间交换信息</strong>的一种技术。</p><p>消息队列主要解决异步处理、应用间耦合，流量削锋等问题，实现高性能，高可用，可伸缩和最终一致性架构。是大型分布式系统不可缺少的中间件。</p><p>目前主流的 MQ 有：Kafka、RabbitMQ、RocketMQ、ActiveMQ，而部分数据库如 Redis、MySQL 以及 phxsql 也可实现消息队列的功能。</p><p>注意：<em>为了简便，下文中除了文章标题，一律使用 MQ 简称</em>。</p></blockquote><h2 id="mq-的简介" tabindex="-1"><a class="header-anchor" href="#mq-的简介" aria-hidden="true">#</a> MQ 的简介</h2><h3 id="什么是-mq" tabindex="-1"><a class="header-anchor" href="#什么是-mq" aria-hidden="true">#</a> 什么是 MQ</h3><p>消息队列（Message Queue，简称 MQ）技术是应用间交换信息的一种技术。</p><p>消息队列主要解决应用耦合，异步消息，流量削锋等问题，实现高性能，高可用，可伸缩和最终一致性架构。是大型分布式系统不可缺少的中间件。</p><p>MQ 是消费-生产者模型的一个典型的代表，一端往消息队列中不断写入消息，而另一端则可以读取队列中的消息。消息发布者只管把消息发布到 MQ 中而不用管谁来取，消息使用者只管从 MQ 中取消息而不管是谁发布的。这样发布者和使用者都不用知道对方的存在。</p><p>MQ 的数据可驻留在内存或磁盘上，直到它们被应用程序读取。通过 MQ，应用程序可独立地执行，它们不需要知道彼此的位置，不需要等待接收程序接收此消息。在分布式计算环境中，为了集成分布式应用，开发者需要对异构网络环境下的分布式应用提供有效的通信手段。为了管理需要共享的信息，对应用提供公共的信息交换机制是重要的。</p><p>目前主流的 MQ 有：Kafka、RabbitMQ、RocketMQ、ActiveMQ。</p><h3 id="mq-通信模型" tabindex="-1"><a class="header-anchor" href="#mq-通信模型" aria-hidden="true">#</a> MQ 通信模型</h3><p>MQ 通信模型大致有以下类型：</p><ul><li><strong>点对点</strong> - 点对点方式是最为传统和常见的通讯方式，它支持一对一、一对多、多对多、多对一等多种配置方式，支持树状、网状等多种拓扑结构。</li><li><strong>多点广播</strong> - MQ 适用于不同类型的应用。其中重要的，也是正在发展中的是&quot;多点广播&quot;应用，即能够将消息发送到多个目标站点 (Destination List)。可以使用一条 MQ 指令将单一消息发送到多个目标站点，并确保为每一站点可靠地提供信息。MQ 不仅提供了多点广播的功能，而且还拥有智能消息分发功能，在将一条消息发送到同一系统上的多个用户时，MQ 将消息的一个复制版本和该系统上接收者的名单发送到目标 MQ 系统。目标 MQ 系统在本地复制这些消息，并将它们发送到名单上的队列，从而尽可能减少网络的传输量。</li><li><strong>发布/订阅 (Publish/Subscribe)</strong> - 发布/订阅模式使消息的分发可以突破目的队列地理位置的限制，使消息按照特定的主题甚至内容进行分发，用户或应用程序可以根据主题或内容接收到所需要的消息。发布/订阅模式使得发送者和接收者之间的耦合关系变得更为松散，发送者不必关心接收者的目的地址，而接收者也不必关心消息的发送地址，而只是根据消息的主题进行消息的收发。</li><li><strong>集群 (Cluster)</strong> - 为了简化点对点通讯模式中的系统配置，MQ 提供 Cluster(集群) 的解决方案。集群类似于一个域 (Domain)，集群内部的队列管理器之间通讯时，不需要两两之间建立消息通道，而是采用集群 (Cluster) 通道与其它成员通讯，从而大大简化了系统配置。此外，集群中的队列管理器之间能够自动进行负载均衡，当某一队列管理器出现故障时，其它队列管理器可以接管它的工作，从而大大提高系统的高可靠性。</li></ul><h2 id="mq-的应用" tabindex="-1"><a class="header-anchor" href="#mq-的应用" aria-hidden="true">#</a> MQ 的应用</h2><h3 id="异步处理" tabindex="-1"><a class="header-anchor" href="#异步处理" aria-hidden="true">#</a> 异步处理</h3><blockquote><p>MQ 可以将系统间的处理流程异步化，减少等待响应的时间，从而提高整体并发吞吐量。</p><p>一般，MQ 异步处理应用于非核心流程，例如：短信/邮件通知、数据推送、上报数据到监控中心/日志中心等。</p></blockquote><p>假设这样一个场景，用户向系统 A 发起请求，系统 A 处理计算只需要 10 ms，然后通知系统 BCD 写库，系统 BCD 写库耗时分别为：100ms、200ms、300ms。最终总耗时为： 10+100ms+200ms+300ms=610ms。此外，加上请求和响应的网络传输时间，从用户角度看，可能要等待将近 1s 才能得到结果。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/theory/mq/mq_3.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如果使用 MQ，系统 A 接到请求后，耗时 10ms 处理计算，然后向系统 BCD 连续发送消息，假设耗时 5ms。那么 这一过程的总耗时为 3ms + 5ms = 8ms，这相比于 610 ms，大大缩短了响应时间。至于系统 BCD 的写库操作，只要自行消费 MQ 后处理即可，用户无需关注。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/theory/mq/mq_4.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="系统解耦" tabindex="-1"><a class="header-anchor" href="#系统解耦" aria-hidden="true">#</a> 系统解耦</h3><blockquote><p>通过 MQ，可以消除系统间的强耦合。它的好处在于：</p><ul><li>消息的消费者系统可以随意增加，无需修改生产者系统的代码。</li><li>生产者系统、消费者系统彼此不会影响对方的流程。 <ul><li>如果生产者系统宕机，消费者系统收不到消息，就不会有下一步的动作。</li><li>如果消费者系统宕机，生产者系统让然可以正常发送消息，不影响流程。</li></ul></li></ul></blockquote><p>不同系统如果要建立通信，传统的做法是：调用接口。</p><p>如果需要和新的系统建立通信或删除已建立的通信，都需要修改代码，这种方案显然耦合度很高。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/theory/mq/mq_1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如果使用 MQ，系统间的通信只需要通过发布/订阅（Pub/Sub）模型即可，彼此没有直接联系，也就不需要相互感知，从而达到 <strong>解耦</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/theory/mq/mq_2.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="流量削峰" tabindex="-1"><a class="header-anchor" href="#流量削峰" aria-hidden="true">#</a> 流量削峰</h3><blockquote><p>当 <strong>上下游系统</strong> 处理能力存在差距的时候，利用 MQ 做一个 “<strong>漏斗</strong>” 模型，进行 <strong>流控</strong>。把 MQ 当成可靠的 <strong>消息暂存地</strong>，进行一定程度的 <strong>消息堆积</strong>；在下游有能力处理的时候，再发送消息。</p><p>MQ 的流量削峰常用于高并发场景（例如：秒杀、团抢等业务场景），它是缓解瞬时暴增流量的核心手段之一。</p><p>如果没有 MQ，两个系统之间通过 <strong>协商</strong>、<strong>滑动窗口</strong>、<strong>限流</strong>/<strong>降级</strong>/<strong>熔断</strong> 等复杂的方案也能实现 <strong>流控</strong>。但 <strong>系统复杂性</strong> 指数级增长，势必在上游或者下游做存储，并且要处理 <strong>定时</strong>、<strong>拥塞</strong> 等一系列问题。而且每当有 <strong>处理能力有差距</strong> 的时候，都需要 <strong>单独</strong> 开发一套逻辑来维护这套逻辑。</p></blockquote><p>假设某个系统读写数据库的稳定性能为每秒处理 1000 条数据。平常情况下，远远达不到这么大的处理量。假设，因为因为做活动，系统的瞬时请求量剧增，达到每秒 10000 个并发请求，数据库根本承受不了，可能直接就把数据库给整崩溃了，这样系统服务就不可用了。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/theory/mq/mq_5.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如果使用 MQ，每秒写入 10000 条请求，但是系统 A 每秒只从 MQ 中消费 1000 条请求，然后写入数据库。这样，就不会超过数据库的承受能力，而是把请求积压在 MQ 中。只要高峰期一过，系统 A 就会很快把积压的消息给处理掉。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/theory/mq/mq_6.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="传输缓冲" tabindex="-1"><a class="header-anchor" href="#传输缓冲" aria-hidden="true">#</a> 传输缓冲</h3><p>（1）MQ 常被用于做海量数据的传输缓冲。</p><p>例如，Kafka 常被用于做为各种日志数据、采集数据的数据中转。然后，Kafka 将数据转发给 Logstash、Elasticsearch 中，然后基于 Elasticsearch 来做日志中心，提供检索、聚合、分析日志的能力。开发者可以通过 Kibana 集成 Elasticsearch 数据进行可视化展示，或自行进行定制化开发。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200930164342.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>（2）MQ 也可以被用于流式处理。</p><p>例如，Kafka 几乎已经是流计算的数据采集端的标准组件。而流计算通过实时数据处理能力，提供了更为快捷的聚合计算能力，被大量应用于链路监控、实时监控、实时数仓、实时大屏、风控、推荐等应用领域。</p><h3 id="最终一致性" tabindex="-1"><a class="header-anchor" href="#最终一致性" aria-hidden="true">#</a> 最终一致性</h3><p><strong>最终一致性</strong> 不是 <strong>消息队列</strong> 的必备特性，但确实可以依靠 <strong>消息队列</strong> 来做 <strong>最终一致性</strong> 的事情。</p><ul><li><strong>先写消息再操作</strong>，确保操作完成后再修改消息状态。<strong>定时任务补偿机制</strong> 实现消息 <strong>可靠发送接收</strong>、业务操作的可靠执行，要注意 <strong>消息重复</strong> 与 <strong>幂等设计</strong>。</li><li>所有不保证 <code>100%</code> <strong>不丢消息</strong> 的消息队列，理论上无法实现 <strong>最终一致性</strong>。</li></ul><blockquote><p>像 <code>Kafka</code> 一类的设计，在设计层面上就有 <strong>丢消息</strong> 的可能（比如 <strong>定时刷盘</strong>，如果掉电就会丢消息）。哪怕只丢千分之一的消息，业务也必须用其他的手段来保证结果正确。</p></blockquote><h3 id="系统间通信" tabindex="-1"><a class="header-anchor" href="#系统间通信" aria-hidden="true">#</a> 系统间通信</h3><p>消息队列一般都内置了 <strong>高效的通信机制</strong>，因此也可以用于单纯的 <strong>消息通讯</strong>，比如实现 <strong>点对点消息队列</strong> 或者 <strong>聊天室</strong> 等。</p><p><strong>生产者/消费者</strong> 模式，只需要关心消息是否 <strong>送达队列</strong>，至于谁希望订阅和需要消费，是 <strong>下游</strong> 的事情，无疑极大地减少了开发和联调的工作量。</p><h2 id="mq-的问题" tabindex="-1"><a class="header-anchor" href="#mq-的问题" aria-hidden="true">#</a> MQ 的问题</h2><p>任何技术都会有利有弊，MQ 给整体系统架构带来很多好处，但也会付出一定的代价。</p><p>MQ 主要引入了以下问题：</p><ul><li><strong>系统可用性降低</strong>：引入了 MQ 后，通信需要基于 MQ 完成，如果 MQ 宕机，则服务不可用。因此，MQ 要保证是高可用的，详情参考：<a href="#MQ-%E7%9A%84%E9%AB%98%E5%8F%AF%E7%94%A8">MQ 的高可用</a></li><li><strong>系统复杂度提高</strong>：使用 MQ，需要关注一些新的问题： <ul><li>如何保证消息没有 <strong>重复消费</strong>？</li><li>如何处理 <strong>消息丢失</strong> 的问题？</li><li>如何保证传递 <strong>消息的顺序性</strong>？</li><li>如何处理大量 <strong>消息积压</strong> 的问题？</li></ul></li><li><strong>一致性问题</strong>：假设系统 A 处理完直接返回成功的结果给用户，用户认为请求成功。但如果此时，系统 BCD 中只要有任意一个写库失败，那么数据就不一致了。这种情况如何处理？</li></ul><p>下面，我们针对以上问题来一一分析。</p><h3 id="重复消费" tabindex="-1"><a class="header-anchor" href="#重复消费" aria-hidden="true">#</a> 重复消费</h3><p><strong>如何保证消息不被重复消费</strong> 和 <strong>如何保证消息消费的幂等性</strong> 是同一个问题。</p><p>必须先明确产生重复消费的原因，才能对症下药。</p><h4 id="重复消费问题原因" tabindex="-1"><a class="header-anchor" href="#重复消费问题原因" aria-hidden="true">#</a> 重复消费问题原因</h4><p>重复消费问题通常不是 MQ 来处理，而是由开发来处理的。</p><p>以 Kafka 举例，Kafka 每个 Partition 都是一个有序的、不可变的记录序列，不断追加到结构化的提交日志中。Partition 中为每条记录分配一个连续的 id 号，称为偏移量（Offset），用于唯一标识 Partition 内的记录。</p><p>Kafka 的客户端和 Broker 都会保存 Offset。客户端消费消息后，每隔一段时间，就把已消费的 Offset 提交给 Kafka Broker，表示已消费。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210427194009.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在这个过程中，如果客户端应用消费消息后，因为宕机、重启等情况而没有提交已消费的 Offset 。当系统恢复后，会继续消费消息，由于 Offset 未提交，就会出现重复消费的问题。</p><h4 id="重复消费解决方案" tabindex="-1"><a class="header-anchor" href="#重复消费解决方案" aria-hidden="true">#</a> 重复消费解决方案</h4><p>应对重复消费问题，需要在业务层面，通过 <strong>幂等性设计</strong> 来解决。</p><p>MQ 重复消费不可怕，可怕的是没有应对机制，可以借鉴的思路有：</p><ul><li>如果是写关系型数据库，可以先根据主键查询，判断数据是否已存在，存在则更新，不存在则插入；</li><li>如果是写 Redis，由于 set 操作天然具有幂等性，所以什么都不用做；</li><li>如果是根据消息做较复杂的逻辑处理，可以在消息中加入全局唯一 ID，例如：订单 ID 等。在客户端存储中（Mysql、Redis 等）保存已消费消息的 ID。一旦接受到新消息，先判断消息中的 ID 是否在已消费消息 ID 表中存在，存在则不再处理，不存在则处理。</li></ul><p>在实际开发中，可以参考上面的例子，结合现实场景，设计合理的幂等性方案。</p><h3 id="消息丢失" tabindex="-1"><a class="header-anchor" href="#消息丢失" aria-hidden="true">#</a> 消息丢失</h3><p><strong>如何处理消息丢失的问题</strong> 和 <strong>如何保证消息不被重复消费</strong> 是同一个问题。关注点有：</p><ul><li>MQ Server 丢失数据</li><li>消费方丢失数据</li><li>生产方丢失数据</li></ul><h4 id="消费方丢失数据" tabindex="-1"><a class="header-anchor" href="#消费方丢失数据" aria-hidden="true">#</a> 消费方丢失数据</h4><p>唯一可能导致消费方丢失数据的情况是：消费方设置了<strong>自动提交 Offset</strong>。一旦设置了自动提交 Offset，接受到消息后就会自动提交 Offset 给 Kafka ，Kafka 就认为消息已被消费。如果此时，消费方尚未来得及处理消息就挂了，那么消息就丢了。</p><p>解决方法就是：消费方关闭自动提交 Offset，处理完消息后<strong>手动提交 Offset</strong>。但这种情况下可能会出现重复消费的情形，需要自行保证幂等性。</p><h4 id="kafka-server-丢失数据" tabindex="-1"><a class="header-anchor" href="#kafka-server-丢失数据" aria-hidden="true">#</a> Kafka Server 丢失数据</h4><p>当 Kafka 某个 Broker 宕机，需要重新选举 Partition 的 Leader。若此时其他的 Follower 尚未同步 Leader 的数据，那么新选某个 Follower 为 Leader 后，就丢失了部分数据。</p><p>为此，一般要求至少设置 4 个参数：</p><ul><li>给 Topic 设置 <code>replication.factor</code> 参数 - 这个值必须大于 1，要求每个 Partition 必须有至少 2 个副本。</li><li>在 Kafka 服务端设置 <code>min.insync.replicas</code> 参数 - 这个值必须大于 1，这是要求一个 Leader 需要和至少一个 Follower 保持通信，这样才能确保 Leader 挂了还有替补。</li><li>在 Producer 端设置 <code>acks=all</code> - 这意味着：要求每条数据，必须是<strong>写入所有 replica 之后，才能认为写入成功了</strong>。</li><li>在 Producer 端设置 <code>retries=MAX</code>（很大很大很大的一个值，无限次重试的意思） - 这意味着<strong>要求一旦写入失败，就无限重试</strong>，卡在这里了。</li></ul><h4 id="生产方丢失数据" tabindex="-1"><a class="header-anchor" href="#生产方丢失数据" aria-hidden="true">#</a> 生产方丢失数据</h4><p>如果按照上述的思路设置了 <code>acks=all</code>，生产方一定不会丢数据。</p><p>要求是，你的 Leader 接收到消息，所有的 Follower 都同步到了消息之后，才认为本生产消息成功了。如果未满足这个条件，生产者会自动不断的重试，重试无限次。</p><h3 id="消息的顺序性" tabindex="-1"><a class="header-anchor" href="#消息的顺序性" aria-hidden="true">#</a> 消息的顺序性</h3><p>要保证 MQ 的顺序性，势必要付出一定的代价，所以实施方案前，要先明确业务场景是不是有必要保证消息的顺序性。只有那些明确对消息处理顺序有要求的业务场景才值得去保证消息顺序性。</p><p>方案一</p><p>一个 Topic，一个 Partition，一个 Consumer，内部单线程消费，单线程吞吐量太低，一般不会用这个。</p><p>方案二</p><ul><li>写入数据到 Partition 时指定一个全局唯一的 ID，例如订单 ID。发送方保证相同 ID 的消息有序的发送到同一个 Partition。</li><li>基于上一点，消费方从 Kafka Partition 中消费消息时，此刻一定是顺序的。但如果消费方式以并发方式消费消息，顺序就可能会被打乱。为此，还有做到以下几点： <ul><li>消费方维护 N 个缓存队列，具有相同 ID 的数据都写入同一个队列中；</li><li>创建 N 个线程，每个线程只负责从指定的一个队列中取数据。</li></ul></li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210427194215.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="消息积压" tabindex="-1"><a class="header-anchor" href="#消息积压" aria-hidden="true">#</a> 消息积压</h3><p>假设一个 MQ 消费者可以一秒处理 1000 条消息，三个 MQ 消费者可以一秒处理 3000 条消息，那么一分钟的处理量是 18 万条。如果 MQ 中积压了几百万到上千万的数据，即使消费者恢复了，也需要大概很长的时间才能恢复过来。</p><p>对于产线环境来说，漫长的等待是不可接受的，所以面临这种窘境时，只能临时紧急扩容以应对了，具体操作步骤和思路如下：</p><ul><li>先修复 Consumer 的问题，确保其恢复消费速度，然后将现有 Consumer 都停掉。</li><li>新建一个 Topic，Partition 是原来的 10 倍，临时建立好原先 10 倍的 Queue 数量。</li><li>然后写一个临时的分发数据的 Consumer 程序，这个程序部署上去消费积压的数据，<strong>消费之后不做耗时的处理</strong>，直接均匀轮询写入临时建立好的 10 倍数量的 Queue。</li><li>接着临时征用 10 倍的机器来部署 Consumer ，每一批 Consumer 消费一个临时 Queue 的数据。这种做法相当于是临时将 Queue 资源和 Consumer 资源扩大 10 倍，以正常的 10 倍速度来消费数据。</li><li>等快速消费完积压数据之后，<strong>得恢复原先部署的架构</strong>，<strong>重新</strong>用原先的 consumer 机器来消费消息。</li></ul><h2 id="mq-的高可用" tabindex="-1"><a class="header-anchor" href="#mq-的高可用" aria-hidden="true">#</a> MQ 的高可用</h2><p>不同 MQ 实现高可用的原理各不相同。因为 Kafka 比较具有代表性，所以这里以 Kafka 为例。</p><h3 id="kafka-的高可用" tabindex="-1"><a class="header-anchor" href="#kafka-的高可用" aria-hidden="true">#</a> Kafka 的高可用</h3><h4 id="kafka-的核心概念" tabindex="-1"><a class="header-anchor" href="#kafka-的核心概念" aria-hidden="true">#</a> Kafka 的核心概念</h4><p>了解 Kafka，必须先了解 Kafka 的核心概念：</p><ul><li><p><strong>Broker</strong> - Kafka 集群包含一个或多个节点，这种节点被称为 Broker。</p></li><li><p><strong>Topic</strong> - 每条发布到 Kafka 集群的消息都有一个类别，这个类别被称为 Topic。（不同 Topic 的消息是物理隔离的；同一个 Topic 的消息保存在一个或多个 Broker 上，但用户只需指定消息的 Topic 即可生产或消费数据而不必关心数据存于何处）。对于每一个 Topic， Kafka 集群都会维持一个分区日志。</p></li><li><p><strong>Partition</strong> - 了提高 Kafka 的吞吐率，每个 Topic 包含一个或多个 Partition，每个 Partition 在物理上对应一个文件夹，该文件夹下存储这个 Partition 的所有消息和索引文件。</p><ul><li>Kafka 日志的分区（Partition）分布在 Kafka 集群的节点上。每个节点在处理数据和请求时，共享这些分区。每一个分区都会在已配置的节点上进行备份，确保容错性。</li></ul></li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/javaweb/distributed/mq/kafka/kafka-cluster-roles.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="kafka-的副本机制" tabindex="-1"><a class="header-anchor" href="#kafka-的副本机制" aria-hidden="true">#</a> Kafka 的副本机制</h4><p>Kafka 是如何实现高可用的呢？</p><p>Kafka 在 0.8 以前的版本中，如果一个 Broker 宕机了，其上面的 Partition 都不能用了，这自然不是高可用的。</p><p>为了实现高可用，Kafka 引入了复制功能。</p><p>简单来说，就是副本机制（ Replicate ）。</p><p><strong>每个 Partition 都有一个 Leader，零个或多个 Follower</strong>。Leader 和 Follower 都是 Broker，每个 Broker 都会成为某些分区的 Leader 和某些分区的 Follower，因此集群的负载是平衡的。</p><ul><li><strong>Leader 处理一切对 Partition （分区）的读写请求</strong>；</li><li><strong>而 Follower 只需被动的同步 Leader 上的数据</strong>。</li></ul><p><strong>同一个 Topic 的不同 Partition 会分布在多个 Broker 上，而且一个 Partition 还会在其他的 Broker 上面进行备份</strong>，Producer 在发布消息到某个 Partition 时，先找到该 Partition 的 Leader，然后向这个 Leader 推送消息；每个 Follower 都从 Leader 拉取消息，拉取消息成功之后，向 Leader 发送一个 ACK 确认。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/javaweb/distributed/mq/kafka/kafka-replication.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><blockquote><p>FAQ</p><p>问：为什么让 Leader 处理一切对对 Partition （分区）的读写请求？</p><p>答：因为如果允许所有 Broker 都可以处理读写请求，就可能产生数据一致性问题。</p></blockquote><h4 id="kafka-选举-leader" tabindex="-1"><a class="header-anchor" href="#kafka-选举-leader" aria-hidden="true">#</a> Kafka 选举 Leader</h4><p>由上文可知，Partition 在多个 Broker 上存在副本。</p><p>如果某个 Follower 宕机，啥事儿没有，正常工作。</p><p>如果 Leader 宕机了，会从 Follower 中<strong>重新选举</strong>一个新的 Leader。</p><h2 id="主流-mq" tabindex="-1"><a class="header-anchor" href="#主流-mq" aria-hidden="true">#</a> 主流 MQ</h2><h3 id="activemq" tabindex="-1"><a class="header-anchor" href="#activemq" aria-hidden="true">#</a> ActiveMQ</h3><p><code>ActiveMQ</code> 是由 <code>Apache</code> 出品，<code>ActiveMQ</code> 是一个完全支持<code>JMS1.1</code> 和 <code>J2EE 1.4</code> 规范的 <code>JMS Provider</code> 实现。它非常快速，支持 <strong>多种语言的客户端</strong> 和 <strong>协议</strong>，而且可以非常容易的嵌入到企业的应用环境中，并有许多高级功能。</p><figure><img src="https://user-gold-cdn.xitu.io/2018/7/8/16479c8ea7cdc2c0?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="a-主要特性" tabindex="-1"><a class="header-anchor" href="#a-主要特性" aria-hidden="true">#</a> (a) 主要特性</h4><ol><li><strong>服从 JMS 规范</strong>：<code>JMS</code> 规范提供了良好的标准和保证，包括：<strong>同步</strong> 或 <strong>异步</strong> 的消息分发，一次和仅一次的消息分发，<strong>消息接收</strong> 和 <strong>订阅</strong> 等等。遵从 <code>JMS</code> 规范的好处在于，不论使用什么 <code>JMS</code> 实现提供者，这些基础特性都是可用的；</li><li><strong>连接灵活性</strong>：<code>ActiveMQ</code> 提供了广泛的 <strong>连接协议</strong>，支持的协议有：<code>HTTP/S</code>，<code>IP</code> <strong>多播</strong>，<code>SSL</code>，<code>TCP</code>，<code>UDP</code> 等等。对众多协议的支持让 <code>ActiveMQ</code> 拥有了很好的灵活性；</li><li><strong>支持的协议种类多</strong>：<code>OpenWire</code>、<code>STOMP</code>、<code>REST</code>、<code>XMPP</code>、<code>AMQP</code>；</li><li><strong>持久化插件和安全插件</strong>：<code>ActiveMQ</code> 提供了 <strong>多种持久化</strong> 选择。而且，<code>ActiveMQ</code> 的安全性也可以完全依据用户需求进行 <strong>自定义鉴权</strong> 和 <strong>授权</strong>；</li><li><strong>支持的客户端语言种类多</strong>：除了 <code>Java</code> 之外，还有：<code>C/C++</code>，<code>.NET</code>，<code>Perl</code>，<code>PHP</code>，<code>Python</code>，<code>Ruby</code>；</li><li><strong>代理集群</strong>：多个 <code>ActiveMQ</code> <strong>代理</strong> 可以组成一个 <strong>集群</strong> 来提供服务；</li><li><strong>异常简单的管理</strong>：<code>ActiveMQ</code> 是以开发者思维被设计的。所以，它并不需要专门的管理员，因为它提供了简单又使用的管理特性。有很多中方法可以 <strong>监控</strong> <code>ActiveMQ</code> 不同层面的数据，包括使用在 <code>JConsole</code> 或者在 <code>ActiveMQ</code> 的 <code>Web Console</code> 中使用 <code>JMX</code>。通过处理 <code>JMX</code> 的告警消息，通过使用 <strong>命令行脚本</strong>，甚至可以通过监控各种类型的 <strong>日志</strong>。</li></ol><h4 id="b-部署环境" tabindex="-1"><a class="header-anchor" href="#b-部署环境" aria-hidden="true">#</a> (b) 部署环境</h4><p><code>ActiveMQ</code> 可以运行在 <code>Java</code> 语言所支持的平台之上。使用 <code>ActiveMQ</code> 需要：</p><ul><li><code>Java JDK</code></li><li><code>ActiveMQ</code> 安装包</li></ul><h4 id="c-优点" tabindex="-1"><a class="header-anchor" href="#c-优点" aria-hidden="true">#</a> (c) 优点</h4><ol><li><strong>跨平台</strong> (<code>JAVA</code> 编写与平台无关，<code>ActiveMQ</code> 几乎可以运行在任何的 <code>JVM</code> 上)；</li><li>可以用 <code>JDBC</code>：可以将 <strong>数据持久化</strong> 到数据库。虽然使用 <code>JDBC</code> 会降低 <code>ActiveMQ</code> 的性能，但是数据库一直都是开发人员最熟悉的存储介质；</li><li>支持 <code>JMS</code> 规范：支持 <code>JMS</code> 规范提供的 <strong>统一接口</strong>;</li><li>支持 <strong>自动重连</strong> 和 <strong>错误重试机制</strong>；</li><li>有安全机制：支持基于 <code>shiro</code>，<code>jaas</code> 等多种 <strong>安全配置机制</strong>，可以对 <code>Queue/Topic</code> 进行 <strong>认证和授权</strong>；</li><li>监控完善：拥有完善的 <strong>监控</strong>，包括 <code>Web Console</code>，<code>JMX</code>，<code>Shell</code> 命令行，<code>Jolokia</code> 的 <code>RESTful API</code>；</li><li>界面友善：提供的 <code>Web Console</code> 可以满足大部分情况，还有很多 <strong>第三方的组件</strong> 可以使用，比如 <code>hawtio</code>；</li></ol><h4 id="d-缺点" tabindex="-1"><a class="header-anchor" href="#d-缺点" aria-hidden="true">#</a> (d) 缺点</h4><ol><li>社区活跃度不及 <code>RabbitMQ</code> 高；</li><li>根据其他用户反馈，会出莫名其妙的问题，会 <strong>丢失消息</strong>；</li><li>目前重心放到 <code>activemq 6.0</code> 产品 <code>Apollo</code>，对 <code>5.x</code> 的维护较少；</li><li>不适合用于 <strong>上千个队列</strong> 的应用场景；</li></ol><h3 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a> RabbitMQ</h3><p><code>RabbitMQ</code> 于 <code>2007</code> 年发布，是一个在 <code>AMQP</code> (<strong>高级消息队列协议</strong>)基础上完成的，可复用的企业消息系统，是当前最主流的消息中间件之一。</p><figure><img src="https://user-gold-cdn.xitu.io/2018/7/8/16479c8ece3b5d7a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="a-主要特性-1" tabindex="-1"><a class="header-anchor" href="#a-主要特性-1" aria-hidden="true">#</a> (a) 主要特性</h4><ol><li><strong>可靠性</strong>：提供了多种技术可以让你在 <strong>性能</strong> 和 <strong>可靠性</strong> 之间进行 <strong>权衡</strong>。这些技术包括 <strong>持久性机制</strong>、<strong>投递确认</strong>、<strong>发布者证实</strong> 和 <strong>高可用性机制</strong>；</li><li><strong>灵活的路由</strong>：消息在到达队列前是通过 <strong>交换机</strong> 进行 <strong>路由</strong> 的。<code>RabbitMQ</code> 为典型的路由逻辑提供了 <strong>多种内置交换机</strong> 类型。如果你有更复杂的路由需求，可以将这些交换机组合起来使用，你甚至可以实现自己的交换机类型，并且当做 <code>RabbitMQ</code> 的 <strong>插件</strong> 来使用；</li><li><strong>消息集群</strong>：在相同局域网中的多个 <code>RabbitMQ</code> 服务器可以 <strong>聚合</strong> 在一起，作为一个独立的逻辑代理来使用；</li><li><strong>队列高可用</strong>：队列可以在集群中的机器上 <strong>进行镜像</strong>，以确保在硬件问题下还保证 <strong>消息安全</strong>；</li><li><strong>支持多种协议</strong>：支持 <strong>多种消息队列协议</strong>；</li><li><strong>支持多种语言</strong>：用 <code>Erlang</code> 语言编写，支持只要是你能想到的 <strong>所有编程语言</strong>；</li><li><strong>管理界面</strong>： <code>RabbitMQ</code> 有一个易用的 <strong>用户界面</strong>，使得用户可以 <strong>监控</strong> 和 <strong>管理</strong> 消息 <code>Broker</code> 的许多方面；</li><li><strong>跟踪机制</strong>：如果 <strong>消息异常</strong>，<code>RabbitMQ</code> 提供消息跟踪机制，使用者可以找出发生了什么；</li><li><strong>插件机制</strong>：提供了许多 <strong>插件</strong>，来从多方面进行扩展，也可以编写自己的插件。</li></ol><h4 id="b-部署环境-1" tabindex="-1"><a class="header-anchor" href="#b-部署环境-1" aria-hidden="true">#</a> (b) 部署环境</h4><p><code>RabbitMQ</code> 可以运行在 <code>Erlang</code> 语言所支持的平台之上，包括 <code>Solaris</code>，<code>BSD</code>，<code>Linux</code>，<code>MacOSX</code>，<code>TRU64</code>，<code>Windows</code> 等。使用 <code>RabbitMQ</code> 需要：</p><ul><li><code>ErLang</code> 语言包</li><li><code>RabbitMQ</code> 安装包</li></ul><h4 id="c-优点-1" tabindex="-1"><a class="header-anchor" href="#c-优点-1" aria-hidden="true">#</a> (c) 优点</h4><ol><li>由于 <code>Erlang</code> 语言的特性，消息队列性能较好，支持 <strong>高并发</strong>；</li><li>健壮、稳定、易用、<strong>跨平台</strong>、支持 <strong>多种语言</strong>、文档齐全；</li><li>有消息 <strong>确认机制</strong> 和 <strong>持久化机制</strong>，可靠性高；</li><li>高度可定制的 <strong>路由</strong>；</li><li><strong>管理界面</strong> 较丰富，在互联网公司也有较大规模的应用，社区活跃度高。</li></ol><h4 id="d-缺点-1" tabindex="-1"><a class="header-anchor" href="#d-缺点-1" aria-hidden="true">#</a> (d) 缺点</h4><ol><li>尽管结合 <code>Erlang</code> 语言本身的并发优势，性能较好，但是不利于做 <strong>二次开发和维护</strong>；</li><li>实现了 <strong>代理架构</strong>，意味着消息在发送到客户端之前可以在 <strong>中央节点</strong> 上排队。此特性使得 <code>RabbitMQ</code> 易于使用和部署，但是使得其 <strong>运行速度较慢</strong>，因为中央节点 <strong>增加了延迟</strong>，<strong>消息封装后</strong> 也比较大；</li><li>需要学习 <strong>比较复杂</strong> 的 <strong>接口和协议</strong>，学习和维护成本较高。</li></ol><h3 id="rocketmq" tabindex="-1"><a class="header-anchor" href="#rocketmq" aria-hidden="true">#</a> RocketMQ</h3><p><code>RocketMQ</code> 出自 <strong>阿里</strong> 的开源产品，用 <code>Java</code> 语言实现，在设计时参考了 <code>Kafka</code>，并做出了自己的一些改进，<strong>消息可靠性上</strong> 比 <code>Kafka</code> 更好。<code>RocketMQ</code> 在阿里内部 \b 被广泛应用在 <strong>订单</strong>，<strong>交易</strong>，<strong>充值</strong>，<strong>流计算</strong>，<strong>消息推送</strong>，<strong>日志流式处理</strong>，<code>binglog</code> <strong>分发</strong> 等场景。</p><h4 id="a-主要特性-2" tabindex="-1"><a class="header-anchor" href="#a-主要特性-2" aria-hidden="true">#</a> (a) 主要特性</h4><ol><li>基于 <strong>队列模型</strong>：具有 <strong>高性能</strong>、<strong>高可靠</strong>、<strong>高实时</strong>、<strong>分布式</strong> 等特点；</li><li><code>Producer</code>、<code>Consumer</code>、<strong>队列</strong> 都支持 <strong>分布式</strong>；</li><li><code>Producer</code> 向一些队列轮流发送消息，<strong>队列集合</strong> 称为 <code>Topic</code>。<code>Consumer</code> 如果做 <strong>广播消费</strong>，则一个 <code>Consumer</code> 实例消费这个 <code>Topic</code> 对应的 <strong>所有队列</strong>；如果做 <strong>集群消费</strong>，则 <strong>多个</strong> <code>Consumer</code> 实例 <strong>平均消费</strong> 这个 <code>Topic</code> 对应的队列集合；</li><li>能够保证 <strong>严格的消息顺序</strong>；</li><li>提供丰富的 <strong>消息拉取模式</strong>；</li><li>高效的订阅者 <strong>水平扩展</strong>能力；</li><li><strong>实时</strong> 的 <strong>消息订阅机制</strong>；</li><li>亿级 <strong>消息堆积</strong> 能力；</li><li>较少的外部依赖。</li></ol><h4 id="b-部署环境-2" tabindex="-1"><a class="header-anchor" href="#b-部署环境-2" aria-hidden="true">#</a> (b) 部署环境</h4><p><code>RocketMQ</code> 可以运行在 <code>Java</code> 语言所支持的平台之上。使用 <code>RocketMQ</code> 需要：</p><ul><li><code>Java JDK</code></li><li>安装 <code>git</code>、<code>Maven</code></li><li><code>RocketMQ</code> 安装包</li></ul><h4 id="c-优点-2" tabindex="-1"><a class="header-anchor" href="#c-优点-2" aria-hidden="true">#</a> (c) 优点</h4><ol><li><strong>单机</strong> 支持 <code>1</code> 万以上 <strong>持久化队列</strong>；</li><li><code>RocketMQ</code> 的所有消息都是 <strong>持久化的</strong>，先写入系统 <code>PAGECACHE</code>，然后 <strong>刷盘</strong>，可以保证 <strong>内存</strong> 与 <strong>磁盘</strong> 都有一份数据，而 <strong>访问</strong> 时，直接 <strong>从内存读取</strong>。</li><li>模型简单，接口易用（<code>JMS</code> 的接口很多场合并不太实用）；</li><li><strong>性能非常好</strong>，可以允许 <strong>大量堆积消息</strong> 在 <code>Broker</code> 中；</li><li>支持 <strong>多种消费模式</strong>，包括 <strong>集群消费</strong>、<strong>广播消费</strong>等；</li><li>各个环节 <strong>分布式扩展设计</strong>，支持 <strong>主从</strong> 和 <strong>高可用</strong>；</li><li>开发度较活跃，版本更新很快。</li></ol><h4 id="d-缺点-2" tabindex="-1"><a class="header-anchor" href="#d-缺点-2" aria-hidden="true">#</a> (d) 缺点</h4><ol><li>支持的 <strong>客户端语言</strong> 不多，目前是 <code>Java</code> 及 <code>C++</code>，其中 <code>C++</code> 还不成熟；</li><li><code>RocketMQ</code> 社区关注度及成熟度也不及前两者；</li><li>没有 <code>Web</code> 管理界面，提供了一个 <code>CLI</code> (命令行界面) 管理工具带来 <strong>查询</strong>、<strong>管理</strong> 和 <strong>诊断各种问题</strong>；</li><li>没有在 <code>MQ</code> 核心里实现 <code>JMS</code> 等接口；</li></ol><h3 id="kafka" tabindex="-1"><a class="header-anchor" href="#kafka" aria-hidden="true">#</a> Kafka</h3><p><code>Apache Kafka</code> 是一个 <strong>分布式消息发布订阅</strong> 系统。它最初由 <code>LinkedIn</code> 公司基于独特的设计实现为一个 <strong>分布式的日志提交系统</strong> (<code>a distributed commit log</code>)，之后成为 <code>Apache</code> 项目的一部分。<code>Kafka</code> <strong>性能高效</strong>、<strong>可扩展良好</strong> 并且 <strong>可持久化</strong>。它的 <strong>分区特性</strong>，<strong>可复制</strong> 和 <strong>可容错</strong> 都是其不错的特性。</p><h4 id="a-主要特性-3" tabindex="-1"><a class="header-anchor" href="#a-主要特性-3" aria-hidden="true">#</a> (a) 主要特性</h4><ol><li><strong>快速持久化</strong>：可以在 <code>O(1)</code> 的系统开销下进行 <strong>消息持久化</strong>；</li><li><strong>高吞吐</strong>：在一台普通的服务器上既可以达到 <code>10W/s</code> 的 <strong>吞吐速率</strong>；</li><li><strong>完全的分布式系统</strong>：<code>Broker</code>、<code>Producer</code> 和 <code>Consumer</code> 都原生自动支持 <strong>分布式</strong>，自动实现 <strong>负载均衡</strong>；</li><li>支持 <strong>同步</strong> 和 <strong>异步</strong> 复制两种 <strong>高可用机制</strong>；</li><li>支持 <strong>数据批量发送</strong> 和 <strong>拉取</strong>；</li><li><strong>零拷贝技术(zero-copy)</strong>：减少 <code>IO</code> 操作步骤，提高 <strong>系统吞吐量</strong>；</li><li><strong>数据迁移</strong>、<strong>扩容</strong> 对用户透明；</li><li><strong>无需停机</strong> 即可扩展机器；</li><li><strong>其他特性</strong>：丰富的 <strong>消息拉取模型</strong>、高效 <strong>订阅者水平扩展</strong>、实时的 <strong>消息订阅</strong>、亿级的 <strong>消息堆积能力</strong>、定期删除机制；</li></ol><h4 id="b-部署环境-3" tabindex="-1"><a class="header-anchor" href="#b-部署环境-3" aria-hidden="true">#</a> (b) 部署环境</h4><p>使用 <code>Kafka</code> 需要：</p><ul><li><code>Java JDK</code></li><li><code>Kafka</code> 安装包</li></ul><h4 id="c-优点-3" tabindex="-1"><a class="header-anchor" href="#c-优点-3" aria-hidden="true">#</a> (c) 优点</h4><ol><li><strong>客户端语言丰富</strong>：支持 <code>Java</code>、<code>.Net</code>、<code>PHP</code>、<code>Ruby</code>、<code>Python</code>、<code>Go</code> 等多种语言；</li><li><strong>高性能</strong>：单机写入 <code>TPS</code> 约在 <code>100</code> 万条/秒，消息大小 <code>10</code> 个字节；</li><li>提供 <strong>完全分布式架构</strong>，并有 <code>replica</code> 机制，拥有较高的 <strong>可用性</strong> 和 <strong>可靠性</strong>，理论上支持 <strong>消息无限堆积</strong>；</li><li>支持批量操作；</li><li><strong>消费者</strong> 采用 <code>Pull</code> 方式获取消息。<strong>消息有序</strong>，<strong>通过控制</strong> 能够保证所有消息被消费且仅被消费 <strong>一次</strong>；</li><li>有优秀的第三方 <code>Kafka Web</code> 管理界面 <code>Kafka-Manager</code>；</li><li>在 <strong>日志领域</strong> 比较成熟，被多家公司和多个开源项目使用。</li></ol><h4 id="d-缺点-3" tabindex="-1"><a class="header-anchor" href="#d-缺点-3" aria-hidden="true">#</a> (d) 缺点</h4><ol><li><code>Kafka</code> 单机超过 <code>64</code> 个 <strong>队列/分区</strong> 时，<code>Load</code> 时会发生明显的飙高现象。<strong>队列</strong> 越多，<strong>负载</strong> 越高，发送消息 <strong>响应时间变长</strong>；</li><li>使用 <strong>短轮询方式</strong>，<strong>实时性</strong> 取决于 <strong>轮询间隔时间</strong>；</li><li>消费失败 <strong>不支持重试</strong>；</li><li>支持 <strong>消息顺序</strong>，但是 <strong>一台代理宕机</strong> 后，就会产生 <strong>消息乱序</strong>；</li><li>社区更新较慢。</li></ol><h3 id="mq-的技术选型" tabindex="-1"><a class="header-anchor" href="#mq-的技术选型" aria-hidden="true">#</a> MQ 的技术选型</h3><p>MQ 的技术选型一般要考虑以下几点：</p><ul><li><strong>是否开源</strong>：这决定了能否商用，所以最为重要。</li><li><strong>社区活跃度越高越好</strong>：高社区活跃度，一般保证了低 Bug 率，因为大部分 Bug，已经有人遇到并解决了。</li><li><strong>技术生态适配性</strong>：客户端对各种编程语言的支持。比如：如果使用 MQ 的都是 Java 应用，那么 ActiveMQ、RabbitMQ、RocketMQ、Kafka 都可以。如果需要支持其他语言，那么 RMQ 比较合适，因为它支持的编程语言比较丰富。如果 MQ 是应用于大数据或流式计算，那么 Kafka 几乎是标配。如果是应用于在线业务系统，那么 Kafka 就不合适了，可以考虑 RabbitMQ、 RocketMQ 很合适。</li><li><strong>高可用性</strong>：应用于线上的准入标准。</li><li><strong>性能</strong>：具备足够好的性能，能满足绝大多数场景的性能要求。</li></ul><table><thead><tr><th>特性</th><th>ActiveMQ</th><th>RabbitMQ</th><th>RocketMQ</th><th>Kafka</th></tr></thead><tbody><tr><td>单机吞吐量</td><td>万级，比 RocketMQ、Kafka 低一个数量级</td><td>同 ActiveMQ</td><td>10 万级，支撑高吞吐</td><td>10 万级，高吞吐，一般配合大数据类的系统来进行流式计算、日志采集等场景</td></tr><tr><td>topic 数量对吞吐量的影响</td><td></td><td></td><td>topic 可以达到几百/几千的级别，吞吐量会有较小幅度的下降，这是 RocketMQ 的一大优势，在同等机器下，可以支撑大量的 topic</td><td>topic 从几十到几百个时候，吞吐量会大幅度下降，在同等机器下，Kafka 尽量保证 topic 数量不要过多，如果要支撑大规模的 topic，需要增加更多的机器资源</td></tr><tr><td>时效性</td><td>ms 级</td><td>微秒级，这是 RabbitMQ 的一大特点，延迟最低</td><td>ms 级</td><td>延迟在 ms 级以内</td></tr><tr><td>可用性</td><td>高，基于主从架构实现高可用</td><td>同 ActiveMQ</td><td>非常高，分布式架构</td><td>非常高，分布式，一个数据多个副本，少数机器宕机，不会丢失数据，不会导致不可用</td></tr><tr><td>消息可靠性</td><td>有较低的概率丢失数据</td><td>基本不丢</td><td>经过参数优化配置，可以做到 0 丢失</td><td>同 RocketMQ</td></tr><tr><td>功能支持</td><td>MQ 领域的功能极其完备</td><td>基于 erlang 开发，并发能力很强，性能极好，延时很低</td><td>MQ 功能较为完善，还是分布式的，扩展性好</td><td>功能较为简单，主要支持简单的 MQ 功能，在大数据领域的实时计算以及日志采集被大规模使用</td></tr></tbody></table><p>综上，各种对比之后，有如下建议：</p><ul><li>业务系统场景，建议使用 RocketMQ、RabbitMQ。如果所有应用都是 Java，优选 RocketMQ，因为 RocketMQ 本身就是 Java 开发的，所以最适配。如果业务中有多种编程语言的应用，建议选择 RabbitMQ。</li><li>大数据和流式计算领域，或是作为日志缓冲，强烈建议选择 Kafka，业界标准，久经考验。</li></ul><h2 id="jms" tabindex="-1"><a class="header-anchor" href="#jms" aria-hidden="true">#</a> JMS</h2><p>提到 MQ，就顺便提一下 JMS 。</p><p><strong>JMS（JAVA Message Service，java 消息服务）API 是一个消息服务的标准/规范，允许应用程序组件基于 JavaEE 平台创建、发送、接收和读取消息</strong>。它使分布式通信耦合度更低，消息服务更加可靠以及异步性。</p><p>在 EJB 架构中，有消息 bean 可以无缝的与 JMS 消息服务集成。在 J2EE 架构模式中，有消息服务者模式，用于实现消息与应用直接的解耦。</p><h3 id="消息模型" tabindex="-1"><a class="header-anchor" href="#消息模型" aria-hidden="true">#</a> 消息模型</h3><p>在 JMS 标准中，有两种消息模型：</p><ul><li>P2P(Point to Point)</li><li>Pub/Sub(Publish/Subscribe)</li></ul><h4 id="p2p-模式" tabindex="-1"><a class="header-anchor" href="#p2p-模式" aria-hidden="true">#</a> P2P 模式</h4><div align="center"><img src="http://upload-images.jianshu.io/upload_images/3101171-2adc66e2367cd2c2.png"></div><p>P2P 模式包含三个角色：MQ（Queue），发送者(Sender)，接收者(Receiver)。每个消息都被发送到一个特定的队列，接收者从队列中获取消息。队列保留着消息，直到他们被消费或超时。</p><p>P2P 的特点</p><ul><li>每个消息只有一个消费者（Consumer）(即一旦被消费，消息就不再在 MQ 中)</li><li>发送者和接收者之间在时间上没有依赖性，也就是说当发送者发送了消息之后，不管接收者有没有正在运行，它不会影响到消息被发送到队列</li><li>接收者在成功接收消息之后需向队列应答成功</li></ul><p>如果希望发送的每个消息都会被成功处理的话，那么需要 P2P 模式。</p><h4 id="pub-sub-模式" tabindex="-1"><a class="header-anchor" href="#pub-sub-模式" aria-hidden="true">#</a> Pub/sub 模式</h4><div align="center"><img src="http://upload-images.jianshu.io/upload_images/3101171-12afe9581da889ea.png"></div><p>包含三个角色主题（Topic），发布者（Publisher），订阅者（Subscriber） 。多个发布者将消息发送到 Topic,系统将这些消息传递给多个订阅者。</p><p>Pub/Sub 的特点</p><ul><li>每个消息可以有多个消费者</li><li>发布者和订阅者之间有时间上的依赖性。针对某个主题（Topic）的订阅者，它必须创建一个订阅者之后，才能消费发布者的消息。</li><li>为了消费消息，订阅者必须保持运行的状态。</li></ul><p>为了缓和这样严格的时间相关性，JMS 允许订阅者创建一个可持久化的订阅。这样，即使订阅者没有被激活（运行），它也能接收到发布者的消息。</p><p>如果希望发送的消息可以不被做任何处理、或者只被一个消息者处理、或者可以被多个消费者处理的话，那么可以采用 Pub/Sub 模型。</p><h3 id="消息消费" tabindex="-1"><a class="header-anchor" href="#消息消费" aria-hidden="true">#</a> 消息消费</h3><p>在 JMS 中，消息的产生和消费都是异步的。对于消费来说，JMS 的消息者可以通过两种方式来消费消息。</p><ul><li><strong>同步</strong> - 订阅者或接收者通过 <code>receive</code> 方法来接收消息，<code>receive</code> 方法在接收到消息之前（或超时之前）将一直阻塞；</li><li><strong>异步</strong> - 订阅者或接收者可以注册为一个消息监听器。当消息到达之后，系统自动调用监听器的 <code>onMessage</code> 方法。</li></ul><p><code>JNDI</code> - Java 命名和目录接口,是一种标准的 Java 命名系统接口。可以在网络上查找和访问服务。通过指定一个资源名称，该名称对应于数据库或命名服务中的一个记录，同时返回资源连接建立所必须的信息。</p><p>JNDI 在 JMS 中起到查找和访问发送目标或消息来源的作用。</p><h3 id="jms-编程模型" tabindex="-1"><a class="header-anchor" href="#jms-编程模型" aria-hidden="true">#</a> JMS 编程模型</h3><h4 id="connectionfactory" tabindex="-1"><a class="header-anchor" href="#connectionfactory" aria-hidden="true">#</a> ConnectionFactory</h4><p>创建 Connection 对象的工厂，针对两种不同的 jms 消息模型，分别有 QueueConnectionFactory 和 TopicConnectionFactory 两种。可以通过 JNDI 来查找 ConnectionFactory 对象。</p><h4 id="destination" tabindex="-1"><a class="header-anchor" href="#destination" aria-hidden="true">#</a> Destination</h4><p>Destination 的意思是消息生产者的消息发送目标或者说消息消费者的消息来源。对于消息生产者来说，它的 Destination 是某个队列（Queue）或某个主题（Topic）;对于消息消费者来说，它的 Destination 也是某个队列或主题（即消息来源）。</p><p>所以，Destination 实际上就是两种类型的对象：Queue、Topic。可以通过 JNDI 来查找 Destination。</p><h4 id="connection" tabindex="-1"><a class="header-anchor" href="#connection" aria-hidden="true">#</a> Connection</h4><p>Connection 表示在客户端和 JMS 系统之间建立的链接（对 TCP/IP socket 的包装）。Connection 可以产生一个或多个 Session。跟 ConnectionFactory 一样，Connection 也有两种类型：QueueConnection 和 TopicConnection。</p><h4 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> Session</h4><p>Session 是操作消息的接口。可以通过 session 创建生产者、消费者、消息等。Session 提供了事务的功能。当需要使用 session 发送/接收多个消息时，可以将这些发送/接收动作放到一个事务中。同样，也分 QueueSession 和 TopicSession。</p><h4 id="消息的生产者" tabindex="-1"><a class="header-anchor" href="#消息的生产者" aria-hidden="true">#</a> 消息的生产者</h4><p>消息生产者由 Session 创建，并用于将消息发送到 Destination。同样，消息生产者分两种类型：QueueSender 和 TopicPublisher。可以调用消息生产者的方法（send 或 publish 方法）发送消息。</p><h4 id="消息消费者" tabindex="-1"><a class="header-anchor" href="#消息消费者" aria-hidden="true">#</a> 消息消费者</h4><p>消息消费者由 Session 创建，用于接收被发送到 Destination 的消息。两种类型：QueueReceiver 和 TopicSubscriber。可分别通过 session 的 createReceiver(Queue)或 createSubscriber(Topic)来创建。当然，也可以 session 的 creatDurableSubscriber 方法来创建持久化的订阅者。</p><h4 id="messagelistener" tabindex="-1"><a class="header-anchor" href="#messagelistener" aria-hidden="true">#</a> MessageListener</h4><p>消息监听器。如果注册了消息监听器，一旦消息到达，将自动调用监听器的 onMessage 方法。EJB 中的 MDB（Message-Driven Bean）就是一种 MessageListener。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',204),l={href:"https://www.cnblogs.com/itfly8/p/5155983.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.cnblogs.com/itfly8/p/5156155.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.jianshu.com/p/453c6e7ff81c",target:"_blank",rel:"noopener noreferrer"},u={href:"https://juejin.im/entry/5a0abfb5f265da43062a4a91",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/doocs/advanced-java/blob/master/docs/high-concurrency/mq-interview.md",target:"_blank",rel:"noopener noreferrer"},b={href:"https://juejin.im/post/6844903635046924296",target:"_blank",rel:"noopener noreferrer"};function m(M,Q){const e=a("ExternalLinkIcon");return i(),s("div",null,[g,o("ul",null,[o("li",null,[o("a",l,[r("大型网站架构系列：分布式 MQ（一）"),t(e)])]),o("li",null,[o("a",h,[r("大型网站架构系列：MQ（二）"),t(e)])]),o("li",null,[o("a",p,[r("分布式开放 MQ(RocketMQ)的原理与实践"),t(e)])]),o("li",null,[o("a",u,[r("阿里 RocketMQ 优势对比"),t(e)])]),o("li",null,[o("a",f,[r("advanced-java 之 MQ"),t(e)])]),o("li",null,[o("a",b,[r("浅谈消息队列及常见的消息中间件"),t(e)])])])])}const P=n(c,[["render",m],["__file","02.消息队列基本原理.html.vue"]]);export{P as default};
