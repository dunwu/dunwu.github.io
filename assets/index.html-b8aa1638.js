import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as t,c as s,a,b as o,e as i,f as p}from"./app-eab0d091.js";const l={},c=p(`<h1 id="《消息队列高手课》笔记" tabindex="-1"><a class="header-anchor" href="#《消息队列高手课》笔记" aria-hidden="true">#</a> 《消息队列高手课》笔记</h1><h2 id="为什么需要消息队列" tabindex="-1"><a class="header-anchor" href="#为什么需要消息队列" aria-hidden="true">#</a> 为什么需要消息队列？</h2><p>消息队列的应用</p><ul><li>异步处理 <ul><li>快速响应</li><li>减少等待，提升性能</li></ul></li><li>流量控制</li><li>服务解耦</li></ul><h2 id="该如何选择消息队列" tabindex="-1"><a class="header-anchor" href="#该如何选择消息队列" aria-hidden="true">#</a> 该如何选择消息队列？</h2><ul><li><strong>是否开源</strong>：这决定了能否商用，所以最为重要。</li><li><strong>社区活跃度越高越好</strong>：高社区活跃度，一般保证了低 Bug 率，因为大部分 Bug，已经有人遇到并解决了。</li><li><strong>技术生态适配性</strong>：客户端对各种编程语言的支持。比如：如果使用 MQ 的都是 Java 应用，那么 ActiveMQ、RabbitMQ、RocketMQ、Kafka 都可以。如果需要支持其他语言，那么 RMQ 比较合适，因为它支持的编程语言比较丰富。如果 MQ 是应用于大数据或流式计算，那么 Kafka 几乎是标配。如果是应用于在线业务系统，那么 Kafka 就不合适了，可以考虑 RabbitMQ、 RocketMQ 很合适。</li><li><strong>高可用</strong>：应用于线上的准入标准。</li><li><strong>高性能</strong>：具备足够好的性能，能满足绝大多数场景的性能要求。</li><li><strong>业务场景的适应性</strong>：不同业务场景，会有不同的诉求，此时要根据不同 MQ 的特性针对性选择。</li></ul><h3 id="主流-mq" tabindex="-1"><a class="header-anchor" href="#主流-mq" aria-hidden="true">#</a> 主流 MQ</h3><table><thead><tr><th>特性</th><th>ActiveMQ</th><th>RabbitMQ</th><th>RocketMQ</th><th>Kafka</th></tr></thead><tbody><tr><td>单机吞吐量</td><td>万级</td><td>万级</td><td>十万级</td><td>十万级，略高于 RocketMQ</td></tr><tr><td>topic 数量对吞吐量的影响</td><td></td><td></td><td>topic 可以达到几百、几千的级别，吞吐量会有较小幅度的下降，这是 RocketMQ 的一大优势，在同等机器下，可以支撑大量的 topic</td><td>topic 从几十到几百个时候，吞吐量会大幅度下降，在同等机器下，Kafka 尽量保证 topic 数量不要过多，如果要支撑大规模的 topic，需要增加更多的机器资源</td></tr><tr><td>时效性</td><td>毫秒级</td><td>微秒级</td><td>毫秒级</td><td>毫秒级以内</td></tr><tr><td>可用性</td><td>高：基于主从架构实现高可用</td><td>同 ActiveMQ</td><td>非常高：分布式架构</td><td>非常高：分布式架构。每个数据都有多个副本，少数机器宕机，不会丢失数据，不会导致不可用</td></tr><tr><td>消息可靠性</td><td>有较低的概率丢失数据</td><td>基本不丢</td><td>经过参数优化配置，可以做到不丢失</td><td>同 RocketMQ</td></tr><tr><td>应用场景</td><td>MQ 领域的功能极其完备</td><td>基于 erlang 开发，并发能力很强，性能极好，延时很低</td><td>适合在线业务</td><td>大数据、实时计算以及日志采集领域，应用最为广泛</td></tr><tr><td>流行度</td><td>不活跃</td><td>社区非常活跃</td><td>阿里出品，有非常活跃的中文社区</td><td>社区非常活跃</td></tr><tr><td>支持编程语言</td><td></td><td>非常多</td><td>Java</td><td>Scala、Java</td></tr><tr><td>学习成本</td><td></td><td>采用 ErLang 开发，比较小众，不利于扩展和二次开发</td><td>采用 Java 开发，且贡献者多为中国人，容易读懂源码</td><td>使用 Scala 和 Java 开发，容易读懂源码</td></tr></tbody></table><p>RabbitMQ</p><p>突出亮点</p><ol><li>支持的编程语言最多</li><li>支持非常灵活的路由配置</li></ol><p>明显短板</p><ol><li>对消息堆积的支持并不好</li><li>性能差强人意</li></ol><h2 id="消息模型-主题和队列有什么区别" tabindex="-1"><a class="header-anchor" href="#消息模型-主题和队列有什么区别" aria-hidden="true">#</a> 消息模型：主题和队列有什么区别？</h2><h3 id="队列模型" tabindex="-1"><a class="header-anchor" href="#队列模型" aria-hidden="true">#</a> 队列模型</h3><p>最初的消息队列，就是一个严格意义上的队列。在计算机领域，“队列（Queue）”是一种数据结构，有完整而严格的定义。</p><p>**早期的消息队列，就是按照“队列”的数据结构来设计的。**生产者（Producer）发消息就是入队操作，消费者（Consumer）收消息就是出队也就是删除操作，服务端存放消息的容器自然就称为“队列”。</p><p>如果有多个生产者往同一个队列里面发送消息，这个队列中可以消费到的消息，就是这些生产者生产的所有消息的合集。消息的顺序就是这些生产者发送消息的自然顺序。如果有多个消费者接收同一个队列的消息，这些消费者之间实际上是竞争的关系，每个消费者只能收到队列中的一部分消息，也就是说任何一条消息只能被其中的一个消费者收到。</p><p>如果需要将一份消息数据分发给多个消费者，要求每个消费者都能收到全量的消息。此时，单个队列就满足不了需求，一个可行的解决方式是，为每个消费者创建一个单独的队列，让生产者发送多份。显然这是个比较蠢的做法，同样的一份消息数据被复制到多个队列中会浪费资源，更重要的是，生产者必须知道有多少个消费者。为每个消费者单独发送一份消息，这实际上违背了消息队列“解耦”这个设计初衷。</p><h3 id="发布-订阅模型-publish-subscribe-pattern" tabindex="-1"><a class="header-anchor" href="#发布-订阅模型-publish-subscribe-pattern" aria-hidden="true">#</a> 发布 - 订阅模型（Publish-Subscribe Pattern）</h3><p>在发布 - 订阅模型中，消息的发送方称为发布者（Publisher），消息的接收方称为订阅者（Subscriber），服务端存放消息的容器称为主题（Topic）。发布者将消息发送到主题中，订阅者在接收消息之前需要先“订阅主题”。“订阅”在这里既是一个动作，同时还可以认为是主题在消费时的一个逻辑副本，每份订阅中，订阅者都可以接收到主题的所有消息。</p><p>队列模型和发布 - 订阅模型最大的区别就是：<strong>一份消息数据能不能被消费多次的问题</strong>。</p><h3 id="rabbitmq-的消息模型" tabindex="-1"><a class="header-anchor" href="#rabbitmq-的消息模型" aria-hidden="true">#</a> RabbitMQ 的消息模型</h3><p>RabbitMQ，它是少数依然坚持使用队列模型的产品之一。那它是怎么解决多个消费者的问题呢？</p><p>在 RabbitMQ 中，Exchange 位于生产者和队列之间，生产者并不关心将消息发送给哪个队列，而是将消息发送给 Exchange，由 Exchange 上配置的策略来决定将消息投递到哪些队列中。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220511211021.jfif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>同一份消息如果需要被多个消费者来消费，需要配置 Exchange 将消息发送到多个队列，每个队列中都存放一份完整的消息数据，可以为一个消费者提供消费服务。这也可以变相地实现新发布 - 订阅模型中，“一份消息数据可以被多个订阅者来多次消费”这样的功能。</p><h3 id="rocketmq-的消息模型" tabindex="-1"><a class="header-anchor" href="#rocketmq-的消息模型" aria-hidden="true">#</a> RocketMQ 的消息模型</h3><p>RocketMQ 使用的消息模型是标准的发布 - 订阅模型</p><p>但是，在 RocketMQ 也有队列（Queue）这个概念，并且队列在 RocketMQ 中是一个非常重要的概念</p><p>几乎所有的消息队列产品都使用一种非常朴素的“请求 - 确认”机制，确保消息不会在传递过程中由于网络或服务器故障丢失。具体的做法也非常简单。在生产端，生产者先将消息发送给服务端，也就是 Broker，服务端在收到消息并将消息写入主题或者队列中后，会给生产者发送确认的响应。</p><p>如果生产者没有收到服务端的确认或者收到失败的响应，则会重新发送消息；在消费端，消费者在收到消息并完成自己的消费业务逻辑（比如，将数据保存到数据库中）后，也会给服务端发送消费成功的确认，服务端只有收到消费确认后，才认为一条消息被成功消费，否则它会给消费者重新发送这条消息，直到收到对应的消费成功确认。</p><p>这个确认机制很好地保证了消息传递过程中的可靠性，但是，引入这个机制在消费端带来了一个不小的问题。什么问题呢？为了确保消息的有序性，在某一条消息被成功消费之前，下一条消息是不能被消费的，否则就会出现消息空洞，违背了有序性这个原则。</p><p>也就是说，每个主题在任意时刻，至多只能有一个消费者实例在进行消费，那就没法通过水平扩展消费者的数量来提升消费端总体的消费性能。为了解决这个问题，RocketMQ 在主题下面增加了队列的概念。</p><p>**每个主题包含多个队列，通过多个队列来实现多实例并行生产和消费。**需要注意的是，RocketMQ 只在队列上保证消息的有序性，主题层面是无法保证消息的严格顺序的。</p><p>RocketMQ 中，订阅者的概念是通过消费组（Consumer Group）来体现的。每个消费组都消费主题中一份完整的消息，不同消费组之间消费进度彼此不受影响，也就是说，一条消息被 Consumer Group1 消费过，也会再给 Consumer Group2 消费。</p><p>消费组中包含多个消费者，同一个组内的消费者是竞争消费的关系，每个消费者负责消费组内的一部分消息。如果一条消息被消费者 Consumer1 消费了，那同组的其他消费者就不会再收到这条消息。</p><p>在 Topic 的消费过程中，由于消息需要被不同的组进行多次消费，所以消费完的消息并不会立即被删除，这就需要 RocketMQ 为每个消费组在每个队列上维护一个消费位置（Consumer Offset），这个位置之前的消息都被消费过，之后的消息都没有被消费过，每成功消费一条消息，消费位置就加一。这个消费位置是非常重要的概念，我们在使用消息队列的时候，丢消息的原因大多是由于消费位置处理不当导致的。</p><h2 id="如何利用事务消息实现分布式事务" tabindex="-1"><a class="header-anchor" href="#如何利用事务消息实现分布式事务" aria-hidden="true">#</a> 如何利用事务消息实现分布式事务？</h2><p>事务消息需要消息队列提供相应的功能才能实现，Kafka 和 RocketMQ 都提供了事务相关功能。</p><ul><li><strong>Kafka</strong> 的解决方案是：直接抛出异常，让用户自行处理。用户可以在业务代码中反复重试提交，直到提交成功，或者删除之前修改的数据记录进行事务补偿。</li><li><strong>RocketMQ</strong> 的解决方案是：通过事务反查机制来解决事务消息提交失败的问题。如果 Producer 在提交或者回滚事务消息时发生网络异常，RocketMQ 的 Broker 没有收到提交或者回滚的请求，Broker 会定期去 Producer 上反查这个事务对应的本地事务的状态，然后根据反查结果决定提交或者回滚这个事务。为了支撑这个事务反查机制，业务代码需要实现一个反查本地事务状态的接口，告知 RocketMQ 本地事务是成功还是失败。</li></ul><h3 id="rocketmq-事务消息流程" tabindex="-1"><a class="header-anchor" href="#rocketmq-事务消息流程" aria-hidden="true">#</a> RocketMQ 事务消息流程</h3><p>基于 MQ 的分布式事务方案其实是对本地消息表的封装，将本地消息表基于 MQ 内部，其他方面的协议基本与本地消息表一致。下面主要基于 RocketMQ 4.3 之后的版本介绍 MQ 的分布式事务方案。</p><p>在本地消息表方案中，保证事务主动方发写业务表数据和写消息表数据的一致性是基于数据库事务，RocketMQ 的事务消息相对于普通 MQ，相对于提供了 2PC 的提交接口，方案如下：</p><p><strong>正常情况——事务主动方发消息</strong> 这种情况下，事务主动方服务正常，没有发生故障，发消息流程如下：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220512194221.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li>发送方向 MQ 服务端(MQ Server)发送 half 消息。</li><li>MQ Server 将消息持久化成功之后，向发送方 ACK 确认消息已经发送成功。</li><li>发送方开始执行本地事务逻辑。</li><li>发送方根据本地事务执行结果向 MQ Server 提交二次确认（commit 或是 rollback）。</li><li>MQ Server 收到 commit 状态则将半消息标记为可投递，订阅方最终将收到该消息；MQ Server 收到 rollback 状态则删除半消息，订阅方将不会接受该消息。</li></ol><p><strong>异常情况——事务主动方消息恢复</strong> 在断网或者应用重启等异常情况下，图中 4 提交的二次确认超时未到达 MQ Server，此时处理逻辑如下：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220512194230.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol start="5"><li>MQ Server 对该消息发起消息回查。</li><li>发送方收到消息回查后，需要检查对应消息的本地事务执行的最终结果。</li><li>发送方根据检查得到的本地事务的最终状态再次提交二次确认</li><li>MQ Server 基于 commit / rollback 对消息进行投递或者删除</li></ol><blockquote><p><strong>思考</strong>：为什么不等待写业务表成功后再向消息队列发送提交消息呢？</p><p>因为可能存在这样情况：写业务表成功了，但是还没来得及发消息，节点就宕机了。</p></blockquote><h3 id="mq-事务方案总结" tabindex="-1"><a class="header-anchor" href="#mq-事务方案总结" aria-hidden="true">#</a> MQ 事务方案总结</h3><p>相比本地消息表方案，MQ 事务方案优点是：</p><ul><li>消息数据独立存储 ，降低业务系统与消息系统之间的耦合。</li><li>吞吐量优于使用本地消息表方案。</li></ul><p>缺点是：</p><ul><li>一次消息发送需要两次网络请求(half 消息 + commit/rollback 消息)</li><li>业务处理服务需要实现消息状态回查接口</li></ul><h2 id="如何确保消息不会丢失" tabindex="-1"><a class="header-anchor" href="#如何确保消息不会丢失" aria-hidden="true">#</a> 如何确保消息不会丢失?</h2><ul><li>在生产阶段，你需要捕获消息发送的错误，并重发消息。</li><li>在存储阶段，你可以通过配置刷盘和复制相关的参数，让消息写入到多个副本的磁盘上，来确保消息不会因为某个 Broker 宕机或者磁盘损坏而丢失。</li><li>在消费阶段，你需要在处理完全部消费业务逻辑之后，再发送消费确认。</li></ul><h2 id="如何处理消费过程中的重复消息" tabindex="-1"><a class="header-anchor" href="#如何处理消费过程中的重复消息" aria-hidden="true">#</a> 如何处理消费过程中的重复消息？</h2><p>在 MQTT 协议中，给出了三种传递消息时能够提供的服务质量标准，这三种服务质量从低到高依次是：</p><ul><li><strong>At most once</strong>: 至多一次。消息在传递时，最多会被送达一次。换一个说法就是，<strong>没什么消息可靠性保证，允许丢消息</strong>。一般都是一些对消息可靠性要求不太高的监控场景使用，比如每分钟上报一次机房温度数据，可以接受数据少量丢失。</li><li><strong>At least once</strong>: 至少一次。消息在传递时，至少会被送达一次。也就是说，<strong>不允许丢消息，但是允许有少量重复消息</strong>出现。</li><li><strong>Exactly once</strong>：恰好一次。消息在传递时，只会被送达一次，<strong>不允许丢失也不允许重复</strong>，这个是最高的等级。</li></ul><p>现在常用的绝大部分消息队列提供的服务质量都是 At least once，包括 RocketMQ、RabbitMQ 和 Kafka 都是这样。也就是说，消息队列很难保证消息不重复。</p><p>一般解决重复消息的办法是，在消费端，让我们消费消息的操作具备幂等性。一个幂等操作的特点是，<strong>其任意多次执行所产生的影响均与一次执行的影响相同。</strong></p><p>如果我们系统消费消息的业务逻辑具备幂等性，那就不用担心消息重复的问题了，因为同一条消息，消费一次和消费多次对系统的影响是完全一样的。也就可以认为，消费多次等于消费一次。</p><p>从对系统的影响结果来说：<strong>At least once + 幂等消费 = Exactly once。</strong></p><p>常用的设计幂等操作的方法：</p><ol><li><strong>利用数据库的唯一约束实现幂等</strong></li><li><strong>为更新的数据设置前置条件</strong>：设置一个前置条件，如果满足条件就更新数据，否则拒绝更新数据，在更新数据的时候，同时变更前置条件中需要判断的数据。</li><li><strong>记录并检查操作</strong>：在发送消息时，给每条消息指定一个全局唯一的 ID，消费时，先根据这个 ID 检查这条消息是否有被消费过，如果没有消费过，才更新数据，然后将消费状态置为已消费。——此处涉及分布式 ID 知识点，可以使用类似 GUID、雪花算法 等方式来实现</li></ol><h2 id="消息积压了该如何处理" tabindex="-1"><a class="header-anchor" href="#消息积压了该如何处理" aria-hidden="true">#</a> 消息积压了该如何处理？</h2><p>在使用消息队列的系统中，对于性能的优化，主要体现在生产者和消费者这一收一发两部分的业务逻辑中。对于消息队列本身的性能，不需要太关注。</p><p>主要原因是，对于绝大多数使用消息队列的业务来说，消息队列本身的处理能力要远大于业务系统的处理能力。主流消息队列的单个节点，消息收发的性能可以达到每秒钟处理几万至几十万条消息的水平，还可以通过水平扩展 Broker 的实例数成倍地提升处理能力。</p><p>而一般的业务系统需要处理的业务逻辑远比消息队列要复杂，单个节点每秒钟可以处理几百到几千次请求，已经可以算是性能非常好的了。所以，对于消息队列的性能优化，我们更关注的是，<strong>在消息的收发两端，我们的业务代码怎么和消息队列配合，达到一个最佳的性能。</strong></p><h3 id="发送端性能优化" tabindex="-1"><a class="header-anchor" href="#发送端性能优化" aria-hidden="true">#</a> 发送端性能优化</h3><p><strong>发送消息的性能上不去，你需要优先检查一下，是不是发消息之前的业务逻辑耗时太多导致的</strong>。对于发送消息的业务逻辑，只需要注意设置合适的并发和批量大小，就可以达到很好的发送性能。</p><h3 id="消费端性能优化" tabindex="-1"><a class="header-anchor" href="#消费端性能优化" aria-hidden="true">#</a> 消费端性能优化</h3><p>如果消费的速度跟不上生产消息的速度，就会造成消息积压。即供大于求。</p><p><strong>一定要保证消费端的消费性能要高于生产端的发送性能，这样的系统才能健康的持续运行。</strong></p><p>消费端的性能优化除了优化消费业务逻辑以外，也可以通过水平扩容，增加消费端的并发数来提升总体的消费性能。特别需要注意的一点是，**在扩容 Consumer 的实例数量的同时，必须同步扩容主题中的分区（也叫队列）数量，确保 Consumer 的实例数和分区数量是相等的。**如果 Consumer 的实例数量超过分区数量，这样的扩容实际上是没有效果的。</p><h3 id="消息积压的处理" tabindex="-1"><a class="header-anchor" href="#消息积压的处理" aria-hidden="true">#</a> 消息积压的处理</h3><p>需要先分析消息积压的原因：是发送变快了，还是消费变慢了。大部分消息队列都内置了监控的功能，只要通过监控数据，很容易确定是哪种原因。</p><p>如果是因为促销或抢购等原因，导致消息陡增，短时间内不太可能优化消费端的代码来提升消费性能，唯一的方法是通过扩容消费端的实例数来提升总体的消费能力。</p><p>如果短时间内没有足够的服务器资源进行扩容，没办法的办法是，将系统降级，通过关闭一些不重要的业务，减少发送方发送的数据量，最低限度让系统还能正常运转，服务一些重要业务。</p><p>如果监控到消费变慢了，你需要检查你的消费实例，分析一下是什么原因导致消费变慢。优先检查一下日志是否有大量的消费错误，如果没有错误的话，可以通过打印堆栈信息，看一下你的消费线程是不是卡在什么地方不动了，比如触发了死锁或者卡在等待某些资源上了。</p><h2 id="学习开源代码该如何入手" tabindex="-1"><a class="header-anchor" href="#学习开源代码该如何入手" aria-hidden="true">#</a> 学习开源代码该如何入手？</h2><p>（1）先看官方文档，了解关键点：</p><ul><li>这个项目是什么</li><li>这个项目有什么用</li><li>这个项目如何使用</li><li>这个项目适用于什么场景</li><li>这个项目有哪些优点、缺点</li><li>。。。</li></ul><p>（2）由点及面的阅读源码</p><p>不要泛泛而读，容易迷失。</p><p>最好带着目的性，带着问题去阅读源码，最好是带着问题的答案去读源码</p><h2 id="如何使用异步设计提升系统性能" tabindex="-1"><a class="header-anchor" href="#如何使用异步设计提升系统性能" aria-hidden="true">#</a> 如何使用异步设计提升系统性能？</h2><p>异步编程，可以减少或者避免线程等待，从而提高处理速度。但是，其增加了程序复杂度，应酌情使用。</p><h2 id="如何实现高性能的异步网络传输" tabindex="-1"><a class="header-anchor" href="#如何实现高性能的异步网络传输" aria-hidden="true">#</a> 如何实现高性能的异步网络传输？</h2><p>系统一般可以分为 IO 密集型应用和计算密集型应用。</p><p>大多数业务系统都属于 IO 密集型应用。最常用的 IO 资源有磁盘 IO 和带宽 IO。由于 IO 相较于内存计算，耗时较高，所以往往成为性能优化的关键。</p><p>提升 IO 效率的关键在于减少 IO 等待时间，在大量连接请求的时候，如果单线程，显然阻塞时间较长，所以，一般应采用并发 IO 模型。但是，线程数过多时，线程本身造成的 CPU 上下文切换，竞态造成的冲突都会造成额外的开销，导致 CPU 负载升高，从而降低系统整体性能。所以，理想的 IO 模型应该是一个能够复用少量线程的并发 IO 模型。这个模型的当前答案就是 NIO，其最具代表性的框架就是 Netty。其核心原理就是通过多路复用，来提升 IO 效率。</p><h2 id="序列化与反序列化-如何通过网络传输结构化的数据" tabindex="-1"><a class="header-anchor" href="#序列化与反序列化-如何通过网络传输结构化的数据" aria-hidden="true">#</a> 序列化与反序列化：如何通过网络传输结构化的数据？</h2><p>略</p><h2 id="传输协议-应用程序之间对话的语言" tabindex="-1"><a class="header-anchor" href="#传输协议-应用程序之间对话的语言" aria-hidden="true">#</a> 传输协议：应用程序之间对话的语言</h2><p>传输协议的目的，在于定义一种信息规则，使得收发双方能够互相交流。传输协议并没有什么必须遵循的规范，能满足需要即可。复杂的协议可以如网络协议报文一样，定义为 TLV 结构。</p><h2 id="内存管理-如何避免内存溢出和频繁的垃圾回收" tabindex="-1"><a class="header-anchor" href="#内存管理-如何避免内存溢出和频繁的垃圾回收" aria-hidden="true">#</a> 内存管理：如何避免内存溢出和频繁的垃圾回收？</h2><p>略</p><h2 id="kafka-如何实现高性能-io" tabindex="-1"><a class="header-anchor" href="#kafka-如何实现高性能-io" aria-hidden="true">#</a> Kafka 如何实现高性能 IO？</h2><p><strong>使用批量消息提升服务端处理能力</strong></p><p><strong>使用顺序读写提升磁盘 IO 性能</strong></p><p><strong>利用 PageCache 加速消息读写</strong></p><ul><li>PageCache 就是操作系统在内存中给磁盘上的文件建立的缓存。调用系统的 API 读写文件的时候，不会直接去读写磁盘上的文件，应用程序实际操作的都是 PageCache，也就是文件在内存中缓存的副本。</li><li>应用程序在写入文件的时候，操作系统会先把数据写入到内存中的 PageCache，然后再一批一批地写到磁盘上。读取文件的时候，也是从 PageCache 中来读取数据，这时候会出现两种可能情况。一种是 PageCache 中有数据，那就直接读取，这样就节省了从磁盘上读取数据的时间；另一种情况是，PageCache 中没有数据，这时候操作系统会引发一个缺页中断，应用程序的读取线程会被阻塞，操作系统把数据从文件中复制到 PageCache 中，然后应用程序再从 PageCache 中继续把数据读出来，这时会真正读一次磁盘上的文件，这个读的过程就会比较慢。</li><li>用户的应用程序在使用完某块 PageCache 后，操作系统并不会立刻就清除这个 PageCache，而是尽可能地利用空闲的物理内存保存这些 PageCache，除非系统内存不够用，操作系统才会清理掉一部分 PageCache。清理的策略一般是 LRU 或它的变种算法，这个算法我们不展开讲，它保留 PageCache 的逻辑是：优先保留最近一段时间最常使用的那些 PageCache。</li><li>Kafka 在读写消息文件的时候，充分利用了 PageCache 的特性。一般来说，消息刚刚写入到服务端就会被消费，按照 LRU 的“优先清除最近最少使用的页”这种策略，读取的时候，对于这种刚刚写入的 PageCache，命中的几率会非常高。也就是说，大部分情况下，消费读消息都会命中 PageCache，带来的好处有两个：一个是读取的速度会非常快，另外一个是，给写入消息让出磁盘的 IO 资源，间接也提升了写入的性能。</li></ul><p><strong>零拷贝技术</strong></p><p>在服务端，处理消费的大致逻辑是这样的：</p><ul><li>首先，从文件中找到消息数据，读到内存中；</li><li>然后，把消息通过网络发给客户端。</li></ul><p>这个过程中，数据实际上做了 2 次或者 3 次复制：</p><ol><li>从文件复制数据到 PageCache 中，如果命中 PageCache，这一步可以省掉；</li><li>从 PageCache 复制到应用程序的内存空间中，也就是我们可以操作的对象所在的内存；</li><li>从应用程序的内存空间复制到 Socket 的缓冲区，这个过程就是我们调用网络应用框架的 API 发送数据的过程。</li></ol><p>Kafka 使用零拷贝技术可以把这个复制次数减少一次，上面的 2、3 步骤两次复制合并成一次复制。直接从 PageCache 中把数据复制到 Socket 缓冲区中，这样不仅减少一次数据复制，更重要的是，由于不用把数据复制到用户内存空间，DMA 控制器可以直接完成数据复制，不需要 CPU 参与，速度更快。</p><h2 id="缓存策略-如何使用缓存来减少磁盘-io" tabindex="-1"><a class="header-anchor" href="#缓存策略-如何使用缓存来减少磁盘-io" aria-hidden="true">#</a> 缓存策略：如何使用缓存来减少磁盘 IO？</h2><p>略</p><h2 id="如何正确使用锁保护共享数据-协调异步线程" tabindex="-1"><a class="header-anchor" href="#如何正确使用锁保护共享数据-协调异步线程" aria-hidden="true">#</a> 如何正确使用锁保护共享数据，协调异步线程？</h2><p>略</p><h2 id="如何用硬件同步原语-cas-替代锁" tabindex="-1"><a class="header-anchor" href="#如何用硬件同步原语-cas-替代锁" aria-hidden="true">#</a> 如何用硬件同步原语（CAS）替代锁？</h2><p>略</p><h2 id="数据压缩-时间换空间的游戏" tabindex="-1"><a class="header-anchor" href="#数据压缩-时间换空间的游戏" aria-hidden="true">#</a> 数据压缩：时间换空间的游戏</h2><p><strong>数据压缩不仅能节省存储空间，还可以用于提升网络传输性能。</strong></p><p>压缩和解压的操作都是计算密集型的操作，非常耗费 CPU 资源。如果你的应用处理业务逻辑就需要耗费大量的 CPU 资源，就不太适合再进行压缩和解压。数据压缩，它本质上是用 CPU 资源换取存储资源，或者说是用压缩解压的时间来换取存储的空间，这个买卖是不是划算，需要根据实际情况先衡量一下。</p><p>目前常用的压缩算法包括：ZIP，GZIP，SNAPPY，LZ4 等等。在选择压缩算法的时候，需要综合考虑压缩时间和压缩率两个因素，被压缩数据的内容也是影响压缩时间和压缩率的重要因素，必要的时候可以先用业务数据做一个压缩测试，这样有助于选择最合适的压缩算法。一般来说，压缩率越高的算法，压缩耗时也越高。如果是对性能要求高的系统，可以选择压缩速度快的算法，比如 LZ4；如果需要更高的压缩比，可以考虑 GZIP 或者压缩率更高的 XZ 等算法。</p><p>另外一个影响压缩率的重要因素是压缩分段的大小，你需要根据业务情况选择一个合适的分段策略，在保证不错的压缩率的前提下，尽量减少解压浪费。</p><p>Kafka 在生产者上，对每批消息进行压缩，批消息在服务端不解压，消费者在收到消息之后再进行解压。简单地说，Kafka 的压缩和解压都是在客户端完成的。</p><h2 id="rocketmq-producer-源码分析-消息生产的实现过程" tabindex="-1"><a class="header-anchor" href="#rocketmq-producer-源码分析-消息生产的实现过程" aria-hidden="true">#</a> RocketMQ Producer 源码分析：消息生产的实现过程</h2><p>Producer 中包含的几个核心的服务都是有状态的，在 Producer 启动时，在 MQClientInstance 这个类中来统一来启动。在发送消息的流程中，RocketMQ 分了三种发送方式：单向、同步和异步，这三种发送方式对应的发送流程基本是相同的，同步和异步发送是由已经封装好的 MQClientAPIImpl 类来分别实现的。</p><p>对于我们在分析代码中提到的几个重要的业务逻辑实现类，你最好能记住这几个类和它的功能，包括 ：DefaultMQProducerImpl 封装了大部分 Producer 的业务逻辑，MQClientInstance 封装了客户端一些通用的业务逻辑，MQClientAPIImpl 封装了客户端与服务端的 RPC，NettyRemotingClient 实现了底层网络通信。</p><h2 id="kafka-consumer-源码分析-消息消费的实现过程" tabindex="-1"><a class="header-anchor" href="#kafka-consumer-源码分析-消息消费的实现过程" aria-hidden="true">#</a> Kafka Consumer 源码分析：消息消费的实现过程</h2><p>Kafka 消费模型的几个要点：</p><ul><li>Kafka 的每个 Consumer（消费者）实例属于一个 ConsumerGroup（消费组）；</li><li>在消费时，ConsumerGroup 中的每个 Consumer 独占一个或多个 Partition（分区）；</li><li>对于每个 ConsumerGroup，在任意时刻，每个 Partition 至多有 1 个 Consumer 在消费；</li><li>每个 ConsumerGroup 都有一个 Coordinator(协调者）负责分配 Consumer 和 Partition 的对应关系，当 Partition 或是 Consumer 发生变更是，会触发 reblance（重新分配）过程，重新分配 Consumer 与 Partition 的对应关系；</li><li>Consumer 维护与 Coordinator 之间的心跳，这样 Coordinator 就能感知到 Consumer 的状态，在 Consumer 故障的时候及时触发 rebalance。</li></ul><p>发送请求时，构建 Request 对象，暂存入发送队列，但不立即发送，而是等待合适的时机批量发送。并且，用回调或者 RequestFeuture 方式，预先定义好如何处理响应的逻辑。在收到 Broker 返回的响应之后，也不会立即处理，而是暂存在队列中，择机处理。那这个择机策略就比较复杂了，有可能是需要读取响应的时候，也有可能是缓冲区满了或是时间到了，都有可能触发一次真正的网络请求，也就是在 poll() 方法中发送所有待发送 Request 并处理所有 Response。</p><h2 id="kafka-和-rocketmq-的消息复制实现的差异点在哪" tabindex="-1"><a class="header-anchor" href="#kafka-和-rocketmq-的消息复制实现的差异点在哪" aria-hidden="true">#</a> Kafka 和 RocketMQ 的消息复制实现的差异点在哪？</h2><p>如果要确保数据一致性，必须采用“主 - 从”的复制方式。</p><p>在“主 - 从”模式下，数据先写入到主节点上，从节点只从主节点上复制数据，如果出现主从数据不一致的情况，必须以主节点上的数据为准。</p><h3 id="rocketmq-如何实现复制" tabindex="-1"><a class="header-anchor" href="#rocketmq-如何实现复制" aria-hidden="true">#</a> RocketMQ 如何实现复制</h3><p>RocketMQ 提供新、老两种复制方式：传统的主从模式和新的基于 Dledger 的复制方式。传统的主从模式性能更好，但灵活性和可用性稍差，而基于 Dledger 的复制方式，在 Broker 故障的时候可以自动选举出新节点，可用性更好，性能稍差，并且资源利用率更低一些。</p><p>RocketMQ 引入 Dledger，通过 Dledger 来完成复制。Dledger 在写入消息的时候，要求至少消息复制到半数以上的节点之后，才给客户端返回写入成功，并且它是支持通过选举来动态切换主节点的。</p><h3 id="kafka-是如何实现复制的" tabindex="-1"><a class="header-anchor" href="#kafka-是如何实现复制的" aria-hidden="true">#</a> Kafka 是如何实现复制的</h3><p>Kafka 中，复制的基本单位是分区。每个分区的几个副本之间，构成一个小的复制集群，Broker 只是这些分区副本的容器，所以 Kafka 的 Broker 是不分主从的。</p><p>分区的多个副本中也是采用一主多从的方式。Kafka 在写入消息的时候，采用的也是异步复制的方式。消息在写入到主节点之后，并不会马上返回写入成功，而是等待足够多的节点都复制成功后再返回。Kafka 为这个“足够多”创造了一个专有名词：ISR（In Sync Replicas)，翻译过来就是“保持数据同步的副本”。ISR 的数量是可配的，但需要注意的是，这个 ISR 中是包含主节点的。</p><p>Kafka 使用 ZooKeeper 来监控每个分区的多个节点，如果发现某个分区的主节点宕机了，Kafka 会利用 ZooKeeper 来选出一个新的主节点，这样解决了可用性的问题。选举的时候，会从所有 ISR 节点中来选新的主节点，这样可以保证数据一致性。</p><h3 id="rocketmq-客户端如何在集群中找到正确的节点" tabindex="-1"><a class="header-anchor" href="#rocketmq-客户端如何在集群中找到正确的节点" aria-hidden="true">#</a> RocketMQ 客户端如何在集群中找到正确的节点？</h3><p>NameServer 在集群中起到的一个核心作用就是，为客户端提供路由信息，帮助客户端找到对应的 Broker。每个 NameServer 节点上都保存了集群所有 Broker 的路由信息，可以独立提供服务。Broker 会与所有 NameServer 节点建立长连接，定期上报 Broker 的路由信息。客户端会选择连接某一个 NameServer 节点，定期获取订阅主题的路由信息，用于 Broker 寻址。</p><p>不仅仅是 RocketMQ，任何一个弹性分布式集群，都需要一个类似于 NameServer 服务，来帮助访问集群的客户端寻找集群中的节点，这个服务一般称为 NamingService。</p><p>在 RocketMQ 中，NameServer 是一个独立的进程，为 Broker、生产者和消费者提供服务。NameServer 最主要的功能就是，为客户端提供寻址服务，协助客户端找到主题对应的 Broker 地址。此外，NameServer 还负责监控每个 Broker 的存活状态。</p><p>NameServer 支持只部署一个节点，也支持部署多个节点组成一个集群，这样可以避免单点故障。在集群模式下，NameServer 各节点之间是不需要任何通信的，也不会通过任何方式互相感知，每个节点都可以独立提供全部服务。</p><h3 id="nameserver-的总体结构" tabindex="-1"><a class="header-anchor" href="#nameserver-的总体结构" aria-hidden="true">#</a> NameServer 的总体结构</h3><ul><li><strong>NamesrvStartup</strong>：程序入口。</li><li><strong>NamesrvController</strong>：NameServer 的总控制器，负责所有服务的生命周期管理。</li><li><strong>RouteInfoManager</strong>：NameServer 最核心的实现类，负责保存和管理集群路由信息。</li><li><strong>BrokerHousekeepingService</strong>：监控 Broker 连接状态的代理类。</li><li><strong>DefaultRequestProcessor</strong>：负责处理客户端和 Broker 发送过来的 RPC 请求的处理器。</li><li><strong>ClusterTestRequestProcessor</strong>：用于测试的请求处理器。</li></ul><p>NameServer 的所有核心功能都是在 RouteInfoManager 这个类中实现的。RouteInfoManager 这个类中保存了所有的路由信息，这些路由信息都是保存在内存中，并且没有持久化的。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BrokerData</span> <span class="token keyword">implements</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">BrokerData</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token comment">/* topic */</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">QueueData</span><span class="token punctuation">&gt;</span></span><span class="token operator">&gt;</span> topicQueueTable<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token comment">/* brokerName */</span><span class="token punctuation">,</span> <span class="token class-name">BrokerData</span><span class="token operator">&gt;</span> brokerAddrTable<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token comment">/* clusterName */</span><span class="token punctuation">,</span> <span class="token class-name">Set</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token comment">/* brokerName */</span><span class="token operator">&gt;&gt;</span> clusterAddrTable<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token comment">/* brokerAddr */</span><span class="token punctuation">,</span> <span class="token class-name">BrokerLiveInfo</span><span class="token operator">&gt;</span> brokerLiveTable<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token comment">/* brokerAddr */</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token comment">/* Filter Server */</span><span class="token operator">&gt;</span> filterServerTable<span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kafka-的协调服务-zookeeper-实现分布式系统的-瑞士军刀" tabindex="-1"><a class="header-anchor" href="#kafka-的协调服务-zookeeper-实现分布式系统的-瑞士军刀" aria-hidden="true">#</a> Kafka 的协调服务 ZooKeeper：实现分布式系统的“瑞士军刀”</h2><p>ZooKeeper 是一个分布式的协调服务，它的核心服务是一个高可用、高可靠的一致性存储，在此基础上，提供了包括读写元数据、节点监控、选举、节点间通信和分布式锁等很多功能，<strong>这些功能可以极大方便我们快速开发一个分布式的集群系统。</strong></p><p>ZooKeeper 的使用注意点：</p><ol><li>不要往 ZooKeeper 里面写入大量数据，它不是一个真正意义上的存储系统，只适合存放少量的数据。依据服务器配置的不同，ZooKeeper 在写入超过几百 MB 数据之后，性能和稳定性都会严重下降。</li><li>不要让业务集群的可用性依赖于 ZooKeeper 的可用性，什么意思呢？你的系统可以使用 Zookeeper，但你要留一手，要考虑如果 Zookeeper 集群宕机了，你的业务集群最好还能提供服务。因为 ZooKeeper 的选举过程是比较慢的，而它对网络的抖动又比较敏感，一旦触发选举，这段时间内的 ZooKeeper 是不能提供任何服务的。</li></ol><p>Kafka 主要使用 ZooKeeper 来保存它的元数据、监控 Broker 和分区的存活状态，并利用 ZooKeeper 来进行选举。</p><p>Kafka 在 ZooKeeper 中保存的元数据，主要就是 Broker 的列表和主题分区信息两棵树。这份元数据同时也被缓存到每一个 Broker 中。客户端并不直接和 ZooKeeper 来通信，而是在需要的时候，通过 RPC 请求去 Broker 上拉取它关心的主题的元数据，然后保存到客户端的元数据缓存中，以便支撑客户端生产和消费</p><h2 id="rocketmq-与-kafka-中如何实现事务" tabindex="-1"><a class="header-anchor" href="#rocketmq-与-kafka-中如何实现事务" aria-hidden="true">#</a> RocketMQ 与 Kafka 中如何实现事务？</h2><p>Kafka 和 RocketMQ 都是基于两阶段提交来实现的事务，都利用了特殊的主题中的队列和分区来记录事务日志。</p><p>不同之处在于对处于事务中的消息的处理方式，RocketMQ 是把这些消息暂存在一个特殊的队列中，待事务提交后再移动到业务队列中；而 Kafka 直接把消息放到对应的业务分区中，配合客户端过滤来暂时屏蔽进行中的事务消息。</p><p>RocketMQ 和 Kafka 的事务，它们的适用场景是不一样的，RocketMQ 的事务适用于解决本地事务和发消息的数据一致性问题，而 Kafka 的事务则是用于实现它的 Exactly Once 机制，应用于实时计算的场景中。</p><h2 id="mqtt-协议-如何支持海量的在线-iot-设备" tabindex="-1"><a class="header-anchor" href="#mqtt-协议-如何支持海量的在线-iot-设备" aria-hidden="true">#</a> MQTT 协议：如何支持海量的在线 IoT 设备?</h2><p>MQTT 是专门为物联网设备设计的一套标准的通信协议。这套协议在消息模型和功能上与普通的消息队列协议是差不多的，最大的区别在于应用场景不同。在物联网应用场景中，IoT 设备性能差，网络连接不稳定。服务端面临的挑战主要是，需要支撑海量的客户端和主题。</p><p>已有的开源的 MQTT 产品，对于协议的支持都不错，在客户端数量小于十万级别的情况下，可以选择。对于海量客户端的场景，服务端必须使用集群来支撑，可以选择收费的云服务和企业版产品。也可以选择自行来构建 MQTT 集群。</p><p>自行构建集群，最关键的技术点就是，通过前置的 Proxy 集群来解决海量连接、会话管理和海量主题这三个问题。前置 Proxy 负责在 Broker 和客户端之间转发消息，通过这种方式，将海量客户端连接收敛为少量的 Proxy 与 Broker 之间的连接，解决了海量客户端连接数的问题。维护会话的实现原理，和 Tomcat 维护 HTTP 会话是一样的。对于海量主题，可以在后端部署多组 Broker 小集群，每个小集群分担一部分主题这样的方式来解决。</p><h2 id="pulsar-的存储计算分离设计-全新的消息队列设计思路" tabindex="-1"><a class="header-anchor" href="#pulsar-的存储计算分离设计-全新的消息队列设计思路" aria-hidden="true">#</a> Pulsar 的存储计算分离设计：全新的消息队列设计思路</h2><p>Pulsar 和其他消息队列最大的区别是，它采用了存储计算分离的设计。存储消息的职责从 Broker 中分离出来，交给专门的 BookKeeper 存储集群。这样 Broker 就变成了无状态的节点，在集群调度和故障恢复方面更加简单灵活。</p><p>存储计算分离是一种设计思想，它将系统的存储职责和计算职责分离开，存储节点只负责数据存储，而计算节点只负责计算，计算节点是无状态的。无状态的计算节点，具有易于开发、调度灵活的优点，故障转移和恢复也更加简单快速。这种设计的缺点是，系统总体的复杂度更高，性能也更差。不过对于大部分分布式的业务系统来说，由于它不需要自己开发存储系统，采用存储计算分离的设计，既可以充分利用这种设计的优点，整个系统也不会因此变得过于复杂，综合评估优缺点，利大于弊，更加划算。</p><h2 id="流计算与消息-一-通过-flink-理解流计算的原理" tabindex="-1"><a class="header-anchor" href="#流计算与消息-一-通过-flink-理解流计算的原理" aria-hidden="true">#</a> 流计算与消息（一）：通过 Flink 理解流计算的原理</h2><p>Flink 分析计算任务之后生成 JobGraph，JobGraph 是一个有向无环图，数据流过这个图中的节点，在每个节点进行计算和变换，最终流出有向无环图就完成了计算。JobGraph 中的每个节点是一个 Task，Task 是可以并行执行的，每个线程就是一个 SubTask。SubTask 被 JobManager 分配给某个 TaskManager，在 TaskManager 进程中的一个线程中执行。</p><h2 id="流计算与消息-二-在流计算中使用-kafka-链接计算任务" tabindex="-1"><a class="header-anchor" href="#流计算与消息-二-在流计算中使用-kafka-链接计算任务" aria-hidden="true">#</a> 流计算与消息（二）：在流计算中使用 Kafka 链接计算任务</h2><p>端到端 Exactly Once 语义，可以保证在分布式系统中，每条数据不多不少只被处理一次。在流计算中，因为数据重复会导致计算结果错误，所以 Exactly Once 在流计算场景中尤其重要。Kafka 和 Flink 都提供了保证 Exactly Once 的特性，配合使用可以实现端到端的 Exactly Once 语义。</p><p>在 Flink 中，如果节点出现故障，可以自动重启计算任务，重新分配计算节点来保证系统的可用性。配合 CheckPoint 机制，可以保证重启后任务的状态恢复到最后一次 CheckPoint，然后从 CheckPoint 中记录的恢复位置继续读取数据进行计算。Flink 通过一个巧妙的 Barrier 使 CheckPoint 中恢复位置和各节点状态完全对应。</p><p>Kafka 的 Exactly Once 语义是通过它的事务和生产幂等两个特性来共同实现的。在配合 Flink 的时候，每个 Flink 的 CheckPoint 对应一个 Kafka 事务，只要保证 CheckPoint 和 Kafka 事务同步提交就可以实现端到端的 Exactly Once，Flink 通过“二阶段提交”这个分布式事务的经典算法来保证 CheckPoint 和 Kafka 事务状态的一致性。</p><h2 id="主流消息队列都是如何存储消息的" tabindex="-1"><a class="header-anchor" href="#主流消息队列都是如何存储消息的" aria-hidden="true">#</a> 主流消息队列都是如何存储消息的？</h2><p>在所有的存储系统中，消息队列的存储可能是最简单的。每个主题包含若干个分区，每个分区其实就是一个 WAL（Write Ahead Log），写入的时候只能尾部追加，不允许修改。读取的时候，根据一个索引序号进行查询，然后连续顺序往下读。</p><h3 id="kafka-存储消息结构" tabindex="-1"><a class="header-anchor" href="#kafka-存储消息结构" aria-hidden="true">#</a> Kafka 存储消息结构</h3><p>Kafka 的存储以 Partition 为单位，每个 Partition 包含一组消息文件（Segment file）和一组索引文件（Index），并且消息文件和索引文件一一对应，具有相同的文件名（但文件扩展名不一样），文件名就是这个文件中第一条消息的索引序号。</p><p>每个索引中保存索引序号（也就是这条消息是这个分区中的第几条消息）和对应的消息在消息文件中的绝对位置。在索引的设计上，Kafka 采用的是稀疏索引，为了节省存储空间，它不会为每一条消息都创建索引，而是每隔几条消息创建一条索引。</p><p>写入消息的时候非常简单，就是在消息文件尾部连续追加写入，一个文件写满了再写下一个文件。查找消息时，首先根据文件名找到所在的索引文件，然后用二分法遍历索引文件内的索引，在里面找到离目标消息最近的索引，再去消息文件中，找到这条最近的索引指向的消息位置，从这个位置开始顺序遍历消息文件，找到目标消息。</p><p>可以看到，寻址过程还是需要一定时间的。一旦找到消息位置后，就可以批量顺序读取，不必每条消息都要进行一次寻址。</p><h3 id="rocketmq-存储消息结构" tabindex="-1"><a class="header-anchor" href="#rocketmq-存储消息结构" aria-hidden="true">#</a> RocketMQ 存储消息结构</h3><p>RocketMQ 的存储以 Broker 为单位。它的存储也是分为消息文件和索引文件，但是在 RocketMQ 中，每个 Broker 只有一组消息文件，它把在这个 Broker 上的所有主题的消息都存在这一组消息文件中。索引文件和 Kafka 一样，是按照主题和队列分别建立的，每个队列对应一组索引文件，这组索引文件在 RocketMQ 中称为 ConsumerQueue。RocketMQ 中的索引是定长稠密索引，它为每一条消息都建立索引，每个索引的长度（注意不是消息长度）是固定的 20 个字节。</p><p>写入消息的时候，Broker 上所有主题、所有队列的消息按照自然顺序追加写入到同一个消息文件中，一个文件写满了再写下一个文件。查找消息的时候，可以直接根据队列的消息序号，计算出索引的全局位置（索引序号 x 索引固定长度 20），然后直接读取这条索引，再根据索引中记录的消息的全局位置，找到消息。可以看到，这里两次寻址都是绝对位置寻址，比 Kafka 的查找是要快的。</p><h3 id="kafka-和-rocketmq-的存储结构比较" tabindex="-1"><a class="header-anchor" href="#kafka-和-rocketmq-的存储结构比较" aria-hidden="true">#</a> Kafka 和 RocketMQ 的存储结构比较</h3><p>对比这两种存储结构，你可以看到它们有很多共通的地方，都是采用消息文件 + 索引文件的存储方式，索引文件的名字都是第一条消息的索引序号，索引中记录了消息的位置等等。</p><p>在消息文件的存储粒度上，Kafka 以分区为单位，粒度更细，优点是更加灵活，很容易进行数据迁移和扩容。RocketMQ 以 Broker 为单位，较粗的粒度牺牲了灵活性，带来的好处是，在写入的时候，同时写入的文件更少，有更好的批量（不同主题和分区的数据可以组成一批一起写入），更多的顺序写入，尤其是在 Broker 上有很多主题和分区的情况下，有更好的写入性能。</p><p>大多数场景下，这两种存储设计的差异其实并不明显，都可以满足需求。但是在某些极限场景下，依然会体现出它们设计的差异。比如，在一个 Broker 上有上千个活动主题的情况下，RocketMQ 的写入性能就会体现出优势。再比如，如果我们的消息都是几个、十几个字节的小消息，但是消息的数量很多，这时候 Kafka 的稀疏索引设计就能节省非常多的存储空间。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,187),d={href:"https://time.geekbang.org/column/intro/100032301",target:"_blank",rel:"noopener noreferrer"};function h(k,u){const e=n("ExternalLinkIcon");return t(),s("div",null,[c,a("ul",null,[a("li",null,[a("a",d,[o("消息队列高手课"),i(e)])])])])}const f=r(l,[["render",h],["__file","index.html.vue"]]);export{f as default};
