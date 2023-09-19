import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as s,c as d,a as e,b as a,d as i,e as r}from"./app-d8d56f9e.js";const c={},l=r('<h1 id="消息队列面试夺命连环问" tabindex="-1"><a class="header-anchor" href="#消息队列面试夺命连环问" aria-hidden="true">#</a> 消息队列面试夺命连环问</h1><h2 id="为什么使用消息队列" tabindex="-1"><a class="header-anchor" href="#为什么使用消息队列" aria-hidden="true">#</a> 为什么使用消息队列？</h2><h3 id="解耦" tabindex="-1"><a class="header-anchor" href="#解耦" aria-hidden="true">#</a> 解耦</h3><p>看这么个场景。A 系统发送数据到 BCD 三个系统，通过接口调用发送。如果 E 系统也要这个数据呢？那如果 C 系统现在不需要了呢？A 系统负责人几乎崩溃......</p><figure><img src="https://github.com/doocs/advanced-java/blob/master/images/mq-1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在这个场景中，A 系统跟其它各种乱七八糟的系统严重耦合，A 系统产生一条比较关键的数据，很多系统都需要 A 系统将这个数据发送过来。A 系统要时时刻刻考虑 BCDE 四个系统如果挂了该咋办？要不要重发，要不要把消息存起来？头发都白了啊！</p><p>如果使用 MQ，A 系统产生一条数据，发送到 MQ 里面去，哪个系统需要数据自己去 MQ 里面消费。如果新系统需要数据，直接从 MQ 里消费即可；如果某个系统不需要这条数据了，就取消对 MQ 消息的消费即可。这样下来，A 系统压根儿不需要去考虑要给谁发送数据，不需要维护这个代码，也不需要考虑人家是否调用成功、失败超时等情况。</p><figure><img src="https://github.com/doocs/advanced-java/blob/master/images/mq-2.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>总结</strong>：通过一个 MQ，Pub/Sub 发布订阅消息这么一个模型，A 系统就跟其它系统彻底解耦了。</p><p><strong>面试技巧</strong>：你需要去考虑一下你负责的系统中是否有类似的场景，就是一个系统或者一个模块，调用了多个系统或者模块，互相之间的调用很复杂，维护起来很麻烦。但是其实这个调用是不需要直接同步调用接口的，如果用 MQ 给它异步化解耦，也是可以的，你就需要去考虑在你的项目里，是不是可以运用这个 MQ 去进行系统的解耦。在简历中体现出来这块东西，用 MQ 作解耦。</p><h3 id="异步" tabindex="-1"><a class="header-anchor" href="#异步" aria-hidden="true">#</a> 异步</h3><p>再来看一个场景，A 系统接收一个请求，需要在自己本地写库，还需要在 BCD 三个系统写库，自己本地写库要 3ms，BCD 三个系统分别写库要 300ms、450ms、200ms。最终请求总延时是 3 + 300 + 450 + 200 = 953ms，接近 1s，用户感觉搞个什么东西，慢死了慢死了。用户通过浏览器发起请求，等待个 1s，这几乎是不可接受的。</p><figure><img src="https://github.com/doocs/advanced-java/blob/master/images/mq-3.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>一般互联网类的企业，对于用户直接的操作，一般要求是每个请求都必须在 200 ms 以内完成，对用户几乎是无感知的。</p><p>如果<strong>使用 MQ</strong>，那么 A 系统连续发送 3 条消息到 MQ 队列中，假如耗时 5ms，A 系统从接受一个请求到返回响应给用户，总时长是 3 + 5 = 8ms，对于用户而言，其实感觉上就是点个按钮，8ms 以后就直接返回了，爽！网站做得真好，真快！</p><figure><img src="https://github.com/doocs/advanced-java/blob/master/images/mq-4.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="削峰" tabindex="-1"><a class="header-anchor" href="#削峰" aria-hidden="true">#</a> 削峰</h3><p>每天 0:00 到 12:00，A 系统风平浪静，每秒并发请求数量就 50 个。结果每次一到 12:00 ~ 13:00 ，每秒并发请求数量突然会暴增到 5k+ 条。但是系统是直接基于 MySQL 的，大量的请求涌入 MySQL，每秒钟对 MySQL 执行约 5k 条 SQL。</p><p>一般的 MySQL，扛到每秒 2k 个请求就差不多了，如果每秒请求到 5k 的话，可能就直接把 MySQL 给打死了，导致系统崩溃，用户也就没法再使用系统了。</p><p>但是高峰期一过，到了下午的时候，就成了低峰期，可能也就 1w 的用户同时在网站上操作，每秒中的请求数量可能也就 50 个请求，对整个系统几乎没有任何的压力。</p><figure><img src="https://github.com/doocs/advanced-java/blob/master/images/mq-5.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如果使用 MQ，每秒 5k 个请求写入 MQ，A 系统每秒钟最多处理 2k 个请求，因为 MySQL 每秒钟最多处理 2k 个。A 系统从 MQ 中慢慢拉取请求，每秒钟就拉取 2k 个请求，不要超过自己每秒能处理的最大请求数量就 ok，这样下来，哪怕是高峰期的时候，A 系统也绝对不会挂掉。而 MQ 每秒钟 5k 个请求进来，就 2k 个请求出去，结果就导致在中午高峰期（1 个小时），可能有几十万甚至几百万的请求积压在 MQ 中。</p><figure><img src="https://github.com/doocs/advanced-java/blob/master/images/mq-6.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>这个短暂的高峰期积压是 ok 的，因为高峰期过了之后，每秒钟就 50 个请求进 MQ，但是 A 系统依然会按照每秒 2k 个请求的速度在处理。所以说，只要高峰期一过，A 系统就会快速将积压的消息给解决掉。</p><h2 id="消息队列有什么优缺点" tabindex="-1"><a class="header-anchor" href="#消息队列有什么优缺点" aria-hidden="true">#</a> 消息队列有什么优缺点</h2><p>优点上面已经说了，就是<strong>在特殊场景下有其对应的好处</strong>，<strong>解耦</strong>、<strong>异步</strong>、<strong>削峰</strong>。</p><p>缺点有以下几个：</p>',27),p=e("br",null,null,-1),g={href:"https://github.com/doocs/advanced-java/blob/master/docs/high-concurrency/how-to-ensure-high-availability-of-message-queues.md",target:"_blank",rel:"noopener noreferrer"},b=e("br",null,null,-1),h={href:"https://github.com/doocs/advanced-java/blob/master/docs/high-concurrency/how-to-ensure-that-messages-are-not-repeatedly-consumed.md",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/doocs/advanced-java/blob/master/docs/high-concurrency/how-to-ensure-the-reliable-transmission-of-messages.md",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,[a("一致性问题"),e("br"),a(" A 系统处理完了直接返回成功了，人都以为你这个请求就成功了；但是问题是，要是 BCD 三个系统那里，BD 两个系统写库成功了，结果 C 系统写库失败了，咋整？你这数据就不一致了。")],-1),f=r('<p>所以消息队列实际是一种非常复杂的架构，你引入它有很多好处，但是也得针对它带来的坏处做各种额外的技术方案和架构来规避掉，做好之后，你会发现，妈呀，系统复杂度提升了一个数量级，也许是复杂了 10 倍。但是关键时刻，用，还是得用的。</p><h2 id="kafka、activemq、rabbitmq、rocketmq-有什么优缺点" tabindex="-1"><a class="header-anchor" href="#kafka、activemq、rabbitmq、rocketmq-有什么优缺点" aria-hidden="true">#</a> Kafka、ActiveMQ、RabbitMQ、RocketMQ 有什么优缺点？</h2><table><thead><tr><th>特性</th><th>ActiveMQ</th><th>RabbitMQ</th><th>RocketMQ</th><th>Kafka</th></tr></thead><tbody><tr><td>单机吞吐量</td><td>万级，比 RocketMQ、Kafka 低一个数量级</td><td>同 ActiveMQ</td><td>10 万级，支撑高吞吐</td><td>10 万级，高吞吐，一般配合大数据类的系统来进行实时数据计算、日志采集等场景</td></tr><tr><td>topic 数量对吞吐量的影响</td><td></td><td></td><td>topic 可以达到几百/几千的级别，吞吐量会有较小幅度的下降，这是 RocketMQ 的一大优势，在同等机器下，可以支撑大量的 topic</td><td>topic 从几十到几百个时候，吞吐量会大幅度下降，在同等机器下，Kafka 尽量保证 topic 数量不要过多，如果要支撑大规模的 topic，需要增加更多的机器资源</td></tr><tr><td>时效性</td><td>ms 级</td><td>微秒级，这是 RabbitMQ 的一大特点，延迟最低</td><td>ms 级</td><td>延迟在 ms 级以内</td></tr><tr><td>可用性</td><td>高，基于主从架构实现高可用</td><td>同 ActiveMQ</td><td>非常高，分布式架构</td><td>非常高，分布式，一个数据多个副本，少数机器宕机，不会丢失数据，不会导致不可用</td></tr><tr><td>消息可靠性</td><td>有较低的概率丢失数据</td><td>基本不丢</td><td>经过参数优化配置，可以做到 0 丢失</td><td>同 RocketMQ</td></tr><tr><td>功能支持</td><td>MQ 领域的功能极其完备</td><td>基于 erlang 开发，并发能力很强，性能极好，延时很低</td><td>MQ 功能较为完善，还是分布式的，扩展性好</td><td>功能较为简单，主要支持简单的 MQ 功能，在大数据领域的实时计算以及日志采集被大规模使用</td></tr></tbody></table><p>综上，各种对比之后，有如下建议：</p>',4),k=e("li",null,"一般的业务系统要引入 MQ，最早大家都用 ActiveMQ，但是现在确实大家用的不多了，没经过大规模吞吐量场景的验证，社区也不是很活跃，所以大家还是算了吧，我个人不推荐用这个了；",-1),M=e("li",null,"后来大家开始用 RabbitMQ，但是确实 erlang 语言阻止了大量的 Java 工程师去深入研究和掌控它，对公司而言，几乎处于不可控的状态，但是确实人家是开源的，比较稳定的支持，活跃度也高；",-1),Q={href:"https://github.com/apache/rocketmq",target:"_blank",rel:"noopener noreferrer"},q=e("li",null,[a("所以"),e("strong",null,"中小型公司"),a("，技术实力较为一般，技术挑战不是特别高，用 RabbitMQ 是不错的选择；"),e("strong",null,"大型公司"),a("，基础架构研发实力较强，用 RocketMQ 是很好的选择。")],-1),v=e("li",null,[a("如果是"),e("strong",null,"大数据领域"),a("的实时计算、日志采集等场景，用 Kafka 是业内标准的，绝对没问题，社区活跃度很高，绝对不会黄，何况几乎是全世界这个领域的事实性规范。")],-1),R=r(`<h2 id="如何保证消息队列的高可用" tabindex="-1"><a class="header-anchor" href="#如何保证消息队列的高可用" aria-hidden="true">#</a> 如何保证消息队列的高可用？</h2><h3 id="rabbitmq-的高可用性" tabindex="-1"><a class="header-anchor" href="#rabbitmq-的高可用性" aria-hidden="true">#</a> RabbitMQ 的高可用性</h3><p>RabbitMQ 是比较有代表性的，因为是<strong>基于主从</strong>（非分布式）做高可用性的，我们就以 RabbitMQ 为例子讲解第一种 MQ 的高可用性怎么实现。</p><p>RabbitMQ 有三种模式：单机模式、普通集群模式、镜像集群模式。</p><h4 id="单机模式" tabindex="-1"><a class="header-anchor" href="#单机模式" aria-hidden="true">#</a> 单机模式</h4><p>单机模式，就是 Demo 级别的，一般就是你本地启动了玩玩儿的 😄，没人生产用单机模式。</p><h4 id="普通集群模式-无高可用性" tabindex="-1"><a class="header-anchor" href="#普通集群模式-无高可用性" aria-hidden="true">#</a> 普通集群模式（无高可用性）</h4><p>普通集群模式，意思就是在多台机器上启动多个 RabbitMQ 实例，每个机器启动一个。你<strong>创建的 queue，只会放在一个 RabbitMQ 实例上</strong>，但是每个实例都同步 queue 的元数据（元数据可以认为是 queue 的一些配置信息，通过元数据，可以找到 queue 所在实例）。你消费的时候，实际上如果连接到了另外一个实例，那么那个实例会从 queue 所在实例上拉取数据过来。</p><figure><img src="https://github.com/doocs/advanced-java/blob/master/images/mq-7.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>这种方式确实很麻烦，也不怎么好，<strong>没做到所谓的分布式</strong>，就是个普通集群。因为这导致你要么消费者每次随机连接一个实例然后拉取数据，要么固定连接那个 queue 所在实例消费数据，前者有<strong>数据拉取的开销</strong>，后者导致<strong>单实例性能瓶颈</strong>。</p><p>而且如果那个放 queue 的实例宕机了，会导致接下来其他实例就无法从那个实例拉取，如果你<strong>开启了消息持久化</strong>，让 RabbitMQ 落地存储消息的话，<strong>消息不一定会丢</strong>，得等这个实例恢复了，然后才可以继续从这个 queue 拉取数据。</p><p>所以这个事儿就比较尴尬了，这就<strong>没有什么所谓的高可用性</strong>，<strong>这方案主要是提高吞吐量的</strong>，就是说让集群中多个节点来服务某个 queue 的读写操作。</p><h4 id="镜像集群模式-高可用性" tabindex="-1"><a class="header-anchor" href="#镜像集群模式-高可用性" aria-hidden="true">#</a> 镜像集群模式（高可用性）</h4><p>这种模式，才是所谓的 RabbitMQ 的高可用模式。跟普通集群模式不一样的是，在镜像集群模式下，你创建的 queue，无论元数据还是 queue 里的消息都会<strong>存在于多个实例上</strong>，就是说，每个 RabbitMQ 节点都有这个 queue 的一个<strong>完整镜像</strong>，包含 queue 的全部数据的意思。然后每次你写消息到 queue 的时候，都会自动把<strong>消息同步</strong>到多个实例的 queue 上。</p><figure><img src="https://github.com/doocs/advanced-java/blob/master/images/mq-8.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>那么<strong>如何开启这个镜像集群模式</strong>呢？其实很简单，RabbitMQ 有很好的管理控制台，就是在后台新增一个策略，这个策略是<strong>镜像集群模式的策略</strong>，指定的时候是可以要求数据同步到所有节点的，也可以要求同步到指定数量的节点，再次创建 queue 的时候，应用这个策略，就会自动将数据同步到其他的节点上去了。</p><p>这样的话，好处在于，你任何一个机器宕机了，没事儿，其它机器（节点）还包含了这个 queue 的完整数据，别的 consumer 都可以到其它节点上去消费数据。坏处在于，第一，这个性能开销也太大了吧，消息需要同步到所有机器上，导致网络带宽压力和消耗很重！第二，这么玩儿，不是分布式的，就<strong>没有扩展性可言</strong>了，如果某个 queue 负载很重，你加机器，新增的机器也包含了这个 queue 的所有数据，并<strong>没有办法线性扩展</strong>你的 queue。你想，如果这个 queue 的数据量很大，大到这个机器上的容量无法容纳了，此时该怎么办呢？</p><h3 id="kafka-的高可用性" tabindex="-1"><a class="header-anchor" href="#kafka-的高可用性" aria-hidden="true">#</a> Kafka 的高可用性</h3><p>Kafka 一个最基本的架构认识：由多个 broker 组成，每个 broker 是一个节点；你创建一个 topic，这个 topic 可以划分为多个 partition，每个 partition 可以存在于不同的 broker 上，每个 partition 就放一部分数据。</p><p>这就是<strong>天然的分布式消息队列</strong>，就是说一个 topic 的数据，是<strong>分散放在多个机器上的，每个机器就放一部分数据</strong>。</p><p>实际上 RabbmitMQ 之类的，并不是分布式消息队列，它就是传统的消息队列，只不过提供了一些集群、HA(High Availability, 高可用性) 的机制而已，因为无论怎么玩儿，RabbitMQ 一个 queue 的数据都是放在一个节点里的，镜像集群下，也是每个节点都放这个 queue 的完整数据。</p><p>Kafka 0.8 以前，是没有 HA 机制的，就是任何一个 broker 宕机了，那个 broker 上的 partition 就废了，没法写也没法读，没有什么高可用性可言。</p><p>比如说，我们假设创建了一个 topic，指定其 partition 数量是 3 个，分别在三台机器上。但是，如果第二台机器宕机了，会导致这个 topic 的 1/3 的数据就丢了，因此这个是做不到高可用的。</p><figure><img src="https://github.com/doocs/advanced-java/blob/master/images/kafka-before.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Kafka 0.8 以后，提供了 HA 机制，就是 replica（复制品） 副本机制。每个 partition 的数据都会同步到其它机器上，形成自己的多个 replica 副本。所有 replica 会选举一个 leader 出来，那么生产和消费都跟这个 leader 打交道，然后其他 replica 就是 follower。写的时候，leader 会负责把数据同步到所有 follower 上去，读的时候就直接读 leader 上的数据即可。只能读写 leader？很简单，<strong>要是你可以随意读写每个 follower，那么就要 care 数据一致性的问题</strong>，系统复杂度太高，很容易出问题。Kafka 会均匀地将一个 partition 的所有 replica 分布在不同的机器上，这样才可以提高容错性。</p><figure><img src="https://github.com/doocs/advanced-java/blob/master/images/kafka-after.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>这么搞，就有所谓的<strong>高可用性</strong>了，因为如果某个 broker 宕机了，没事儿，那个 broker 上面的 partition 在其他机器上都有副本的。如果这个宕机的 broker 上面有某个 partition 的 leader，那么此时会从 follower 中<strong>重新选举</strong>一个新的 leader 出来，大家继续读写那个新的 leader 即可。这就有所谓的高可用性了。</p><p><strong>写数据</strong>的时候，生产者就写 leader，然后 leader 将数据落地写本地磁盘，接着其他 follower 自己主动从 leader 来 pull 数据。一旦所有 follower 同步好数据了，就会发送 ack 给 leader，leader 收到所有 follower 的 ack 之后，就会返回写成功的消息给生产者。（当然，这只是其中一种模式，还可以适当调整这个行为）</p><p><strong>消费</strong>的时候，只会从 leader 去读，但是只有当一个消息已经被所有 follower 都同步成功返回 ack 的时候，这个消息才会被消费者读到。</p><p>看到这里，相信你大致明白了 Kafka 是如何保证高可用机制的了，对吧？不至于一无所知，现场还能给面试官画画图。要是遇上面试官确实是 Kafka 高手，深挖了问，那你只能说不好意思，太深入的你没研究过。</p><h2 id="如何保证消息不被重复消费-如何保证消息消费的幂等性" tabindex="-1"><a class="header-anchor" href="#如何保证消息不被重复消费-如何保证消息消费的幂等性" aria-hidden="true">#</a> 如何保证消息不被重复消费？（如何保证消息消费的幂等性）</h2><p>首先，比如 RabbitMQ、RocketMQ、Kafka，都有可能会出现消息重复消费的问题，正常。因为这问题通常不是 MQ 自己保证的，是由我们开发来保证的。挑一个 Kafka 来举个例子，说说怎么重复消费吧。</p><p>Kafka 实际上有个 offset 的概念，就是每个消息写进去，都有一个 offset，代表消息的序号，然后 consumer 消费了数据之后，<strong>每隔一段时间</strong>（定时定期），会把自己消费过的消息的 offset 提交一下，表示“我已经消费过了，下次我要是重启啥的，你就让我继续从上次消费到的 offset 来继续消费吧”。</p><p>但是凡事总有意外，比如我们之前生产经常遇到的，就是你有时候重启系统，看你怎么重启了，如果碰到点着急的，直接 kill 进程了，再重启。这会导致 consumer 有些消息处理了，但是没来得及提交 offset，尴尬了。重启之后，少数消息会再次消费一次。</p><p>举个栗子。</p><p>有这么个场景。数据 1/2/3 依次进入 kafka，kafka 会给这三条数据每条分配一个 offset，代表这条数据的序号，我们就假设分配的 offset 依次是 152/153/154。消费者从 kafka 去消费的时候，也是按照这个顺序去消费。假如当消费者消费了 <code>offset=153</code> 的这条数据，刚准备去提交 offset 到 zookeeper，此时消费者进程被重启了。那么此时消费过的数据 1/2 的 offset 并没有提交，kafka 也就不知道你已经消费了 <code>offset=153</code> 这条数据。那么重启之后，消费者会找 kafka 说，嘿，哥儿们，你给我接着把上次我消费到的那个地方后面的数据继续给我传递过来。由于之前的 offset 没有提交成功，那么数据 1/2 会再次传过来，如果此时消费者没有去重的话，那么就会导致重复消费。</p><figure><img src="https://github.com/doocs/advanced-java/blob/master/images/mq-10.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如果消费者干的事儿是拿一条数据就往数据库里写一条，会导致说，你可能就把数据 1/2 在数据库里插入了 2 次，那么数据就错啦。</p><p>其实重复消费不可怕，可怕的是你没考虑到重复消费之后，<strong>怎么保证幂等性</strong>。</p><p>举个例子吧。假设你有个系统，消费一条消息就往数据库里插入一条数据，要是你一个消息重复两次，你不就插入了两条，这数据不就错了？但是你要是消费到第二次的时候，自己判断一下是否已经消费过了，若是就直接扔了，这样不就保留了一条数据，从而保证了数据的正确性。</p><p>一条数据重复出现两次，数据库里就只有一条数据，这就保证了系统的幂等性。</p><p>幂等性，通俗点说，就一个数据，或者一个请求，给你重复来多次，你得确保对应的数据是不会改变的，<strong>不能出错</strong>。</p><p>所以第二个问题来了，怎么保证消息队列消费的幂等性？</p><p>其实还是得结合业务来思考，我这里给几个思路：</p><ul><li>比如你拿个数据要写库，你先根据主键查一下，如果这数据都有了，你就别插入了，update 一下好吧。</li><li>比如你是写 Redis，那没问题了，反正每次都是 set，天然幂等性。</li><li>比如你不是上面两个场景，那做的稍微复杂一点，你需要让生产者发送每条数据的时候，里面加一个全局唯一的 id，类似订单 id 之类的东西，然后你这里消费到了之后，先根据这个 id 去比如 Redis 里查一下，之前消费过吗？如果没有消费过，你就处理，然后这个 id 写 Redis。如果消费过了，那你就别处理了，保证别重复处理相同的消息即可。</li><li>比如基于数据库的唯一键来保证重复数据不会重复插入多条。因为有唯一键约束了，重复数据插入只会报错，不会导致数据库中出现脏数据。</li></ul><figure><img src="https://github.com/doocs/advanced-java/blob/master/images/mq-11.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>当然，如何保证 MQ 的消费是幂等性的，需要结合具体的业务来看。</p><h2 id="如何保证消息的可靠性传输-如何处理消息丢失的问题" tabindex="-1"><a class="header-anchor" href="#如何保证消息的可靠性传输-如何处理消息丢失的问题" aria-hidden="true">#</a> 如何保证消息的可靠性传输？（如何处理消息丢失的问题）</h2><p>数据的丢失问题，可能出现在生产者、MQ、消费者中，咱们从 RabbitMQ 和 Kafka 分别来分析一下吧。</p><h3 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a> RabbitMQ</h3><figure><img src="https://github.com/doocs/advanced-java/blob/master/images/rabbitmq-message-lose.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="生产者弄丢了数据" tabindex="-1"><a class="header-anchor" href="#生产者弄丢了数据" aria-hidden="true">#</a> 生产者弄丢了数据</h4><p>生产者将数据发送到 RabbitMQ 的时候，可能数据就在半路给搞丢了，因为网络问题啥的，都有可能。</p><p>此时可以选择用 RabbitMQ 提供的事务功能，就是生产者<strong>发送数据之前</strong>开启 RabbitMQ 事务<code>channel.txSelect</code>，然后发送消息，如果消息没有成功被 RabbitMQ 接收到，那么生产者会收到异常报错，此时就可以回滚事务<code>channel.txRollback</code>，然后重试发送消息；如果收到了消息，那么可以提交事务<code>channel.txCommit</code>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 开启事务</span>
channel<span class="token punctuation">.</span>txSelect
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里发送消息</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    channel<span class="token punctuation">.</span>txRollback

    <span class="token comment">// 这里再次重发这条消息</span>
<span class="token punctuation">}</span>

<span class="token comment">// 提交事务</span>
channel<span class="token punctuation">.</span>txCommit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是问题是，RabbitMQ 事务机制（同步）一搞，基本上<strong>吞吐量会下来，因为太耗性能</strong>。</p><p>所以一般来说，如果你要确保说写 RabbitMQ 的消息别丢，可以开启 <code>confirm</code> 模式，在生产者那里设置开启 <code>confirm</code>模式之后，你每次写的消息都会分配一个唯一的 id，然后如果写入了 RabbitMQ 中，RabbitMQ 会给你回传一个 <code>ack</code> 消息，告诉你说这个消息 ok 了。如果 RabbitMQ 没能处理这个消息，会回调你的一个 <code>nack</code> 接口，告诉你这个消息接收失败，你可以重试。而且你可以结合这个机制自己在内存里维护每个消息 id 的状态，如果超过一定时间还没接收到这个消息的回调，那么你可以重发。</p><p>事务机制和 <code>confirm</code> 机制最大的不同在于，<strong>事务机制是同步的</strong>，你提交一个事务之后会<strong>阻塞</strong>在那儿，但是 <code>confirm</code> 机制是<strong>异步</strong>的，你发送个消息之后就可以发送下一个消息，然后那个消息 RabbitMQ 接收了之后会异步回调你的一个接口通知你这个消息接收到了。</p><p>所以一般在生产者这块<strong>避免数据丢失</strong>，都是用 <code>confirm</code> 机制的。</p><h4 id="rabbitmq-弄丢了数据" tabindex="-1"><a class="header-anchor" href="#rabbitmq-弄丢了数据" aria-hidden="true">#</a> RabbitMQ 弄丢了数据</h4><p>就是 RabbitMQ 自己弄丢了数据，这个你必须<strong>开启 RabbitMQ 的持久化</strong>，就是消息写入之后会持久化到磁盘，哪怕是 RabbitMQ 自己挂了，<strong>恢复之后会自动读取之前存储的数据</strong>，一般数据不会丢。除非极其罕见的是，RabbitMQ 还没持久化，自己就挂了，<strong>可能导致少量数据丢失</strong>，但是这个概率较小。</p><p>设置持久化有<strong>两个步骤</strong>：</p><ul><li>创建 queue 的时候将其设置为持久化<br> 这样就可以保证 RabbitMQ 持久化 queue 的元数据，但是它是不会持久化 queue 里的数据的。</li><li>第二个是发送消息的时候将消息的 <code>deliveryMode</code> 设置为 2<br> 就是将消息设置为持久化的，此时 RabbitMQ 就会将消息持久化到磁盘上去。</li></ul><p>必须要同时设置这两个持久化才行，RabbitMQ 哪怕是挂了，再次重启，也会从磁盘上重启恢复 queue，恢复这个 queue 里的数据。</p><p>注意，哪怕是你给 RabbitMQ 开启了持久化机制，也有一种可能，就是这个消息写到了 RabbitMQ 中，但是还没来得及持久化到磁盘上，结果不巧，此时 RabbitMQ 挂了，就会导致内存里的一点点数据丢失。</p><p>所以，持久化可以跟生产者那边的 <code>confirm</code> 机制配合起来，只有消息被持久化到磁盘之后，才会通知生产者 <code>ack</code> 了，所以哪怕是在持久化到磁盘之前，RabbitMQ 挂了，数据丢了，生产者收不到 <code>ack</code>，你也是可以自己重发的。</p><h4 id="消费端弄丢了数据" tabindex="-1"><a class="header-anchor" href="#消费端弄丢了数据" aria-hidden="true">#</a> 消费端弄丢了数据</h4><p>RabbitMQ 如果丢失了数据，主要是因为你消费的时候，<strong>刚消费到，还没处理，结果进程挂了</strong>，比如重启了，那么就尴尬了，RabbitMQ 认为你都消费了，这数据就丢了。</p><p>这个时候得用 RabbitMQ 提供的 <code>ack</code> 机制，简单来说，就是你必须关闭 RabbitMQ 的自动 <code>ack</code>，可以通过一个 api 来调用就行，然后每次你自己代码里确保处理完的时候，再在程序里 <code>ack</code> 一把。这样的话，如果你还没处理完，不就没有 <code>ack</code> 了？那 RabbitMQ 就认为你还没处理完，这个时候 RabbitMQ 会把这个消费分配给别的 consumer 去处理，消息是不会丢的。</p><figure><img src="https://github.com/doocs/advanced-java/blob/master/images/rabbitmq-message-lose-solution.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="kafka" tabindex="-1"><a class="header-anchor" href="#kafka" aria-hidden="true">#</a> Kafka</h3><h4 id="消费端弄丢了数据-1" tabindex="-1"><a class="header-anchor" href="#消费端弄丢了数据-1" aria-hidden="true">#</a> 消费端弄丢了数据</h4><p>唯一可能导致消费者弄丢数据的情况，就是说，你消费到了这个消息，然后消费者那边<strong>自动提交了 offset</strong>，让 Kafka 以为你已经消费好了这个消息，但其实你才刚准备处理这个消息，你还没处理，你自己就挂了，此时这条消息就丢咯。</p><p>这不是跟 RabbitMQ 差不多吗，大家都知道 Kafka 会自动提交 offset，那么只要<strong>关闭自动提交</strong> offset，在处理完之后自己手动提交 offset，就可以保证数据不会丢。但是此时确实还是<strong>可能会有重复消费</strong>，比如你刚处理完，还没提交 offset，结果自己挂了，此时肯定会重复消费一次，自己保证幂等性就好了。</p><p>生产环境碰到的一个问题，就是说我们的 Kafka 消费者消费到了数据之后是写到一个内存的 queue 里先缓冲一下，结果有的时候，你刚把消息写入内存 queue，然后消费者会自动提交 offset。然后此时我们重启了系统，就会导致内存 queue 里还没来得及处理的数据就丢失了。</p><h4 id="kafka-弄丢了数据" tabindex="-1"><a class="header-anchor" href="#kafka-弄丢了数据" aria-hidden="true">#</a> Kafka 弄丢了数据</h4><p>这块比较常见的一个场景，就是 Kafka 某个 broker 宕机，然后重新选举 partition 的 leader。大家想想，要是此时其他的 follower 刚好还有些数据没有同步，结果此时 leader 挂了，然后选举某个 follower 成 leader 之后，不就少了一些数据？这就丢了一些数据啊。</p><p>生产环境也遇到过，我们也是，之前 Kafka 的 leader 机器宕机了，将 follower 切换为 leader 之后，就会发现说这个数据就丢了。</p><p>所以此时一般是要求起码设置如下 4 个参数：</p><ul><li>给 topic 设置 <code>replication.factor</code> 参数：这个值必须大于 1，要求每个 partition 必须有至少 2 个副本。</li><li>在 Kafka 服务端设置 <code>min.insync.replicas</code> 参数：这个值必须大于 1，这个是要求一个 leader 至少感知到有至少一个 follower 还跟自己保持联系，没掉队，这样才能确保 leader 挂了还有一个 follower 吧。</li><li>在 producer 端设置 <code>acks=all</code>：这个是要求每条数据，必须是<strong>写入所有 replica 之后，才能认为是写成功了</strong>。</li><li>在 producer 端设置 <code>retries=MAX</code>（很大很大很大的一个值，无限次重试的意思）：这个是<strong>要求一旦写入失败，就无限重试</strong>，卡在这里了。</li></ul><p>我们生产环境就是按照上述要求配置的，这样配置之后，至少在 Kafka broker 端就可以保证在 leader 所在 broker 发生故障，进行 leader 切换时，数据不会丢失。</p><h4 id="生产者会不会弄丢数据" tabindex="-1"><a class="header-anchor" href="#生产者会不会弄丢数据" aria-hidden="true">#</a> 生产者会不会弄丢数据？</h4><p>如果按照上述的思路设置了 <code>acks=all</code>，一定不会丢，要求是，你的 leader 接收到消息，所有的 follower 都同步到了消息之后，才认为本次写成功了。如果没满足这个条件，生产者会自动不断的重试，重试无限次。</p><h2 id="如何保证消息的顺序性" tabindex="-1"><a class="header-anchor" href="#如何保证消息的顺序性" aria-hidden="true">#</a> 如何保证消息的顺序性？</h2><p>我举个例子，我们以前做过一个 mysql <code>binlog</code> 同步的系统，压力还是非常大的，日同步数据要达到上亿，就是说数据从一个 mysql 库原封不动地同步到另一个 mysql 库里面去（mysql -&gt; mysql）。常见的一点在于说比如大数据 team，就需要同步一个 mysql 库过来，对公司的业务系统的数据做各种复杂的操作。</p><p>你在 mysql 里增删改一条数据，对应出来了增删改 3 条 <code>binlog</code> 日志，接着这三条 <code>binlog</code> 发送到 MQ 里面，再消费出来依次执行，起码得保证人家是按照顺序来的吧？不然本来是：增加、修改、删除；你楞是换了顺序给执行成删除、修改、增加，不全错了么。</p><p>本来这个数据同步过来，应该最后这个数据被删除了；结果你搞错了这个顺序，最后这个数据保留下来了，数据同步就出错了。</p><p>先看看顺序会错乱的俩场景：</p><ul><li><strong>RabbitMQ</strong>：一个 queue，多个 consumer。比如，生产者向 RabbitMQ 里发送了三条数据，顺序依次是 data1/data2/data3，压入的是 RabbitMQ 的一个内存队列。有三个消费者分别从 MQ 中消费这三条数据中的一条，结果消费者 2 先执行完操作，把 data2 存入数据库，然后是 data1/data3。这不明显乱了。</li></ul><figure><img src="https://github.com/doocs/advanced-java/blob/master/images/rabbitmq-order-01.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li><strong>Kafka</strong>：比如说我们建了一个 topic，有三个 partition。生产者在写的时候，其实可以指定一个 key，比如说我们指定了某个订单 id 作为 key，那么这个订单相关的数据，一定会被分发到同一个 partition 中去，而且这个 partition 中的数据一定是有顺序的。<br> 消费者从 partition 中取出来数据的时候，也一定是有顺序的。到这里，顺序还是 ok 的，没有错乱。接着，我们在消费者里可能会搞<strong>多个线程来并发处理消息</strong>。因为如果消费者是单线程消费处理，而处理比较耗时的话，比如处理一条消息耗时几十 ms，那么 1 秒钟只能处理几十条消息，这吞吐量太低了。而多个线程并发跑的话，顺序可能就乱掉了。</li></ul><figure><img src="https://github.com/doocs/advanced-java/blob/master/images/kafka-order-01.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h3><h4 id="rabbitmq-1" tabindex="-1"><a class="header-anchor" href="#rabbitmq-1" aria-hidden="true">#</a> RabbitMQ</h4><figure><img src="https://github.com/doocs/advanced-java/blob/master/images/rabbitmq-order-02.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="kafka-1" tabindex="-1"><a class="header-anchor" href="#kafka-1" aria-hidden="true">#</a> Kafka</h4><ul><li>一个 topic，一个 partition，一个 consumer，内部单线程消费，单线程吞吐量太低，一般不会用这个。</li><li>写 N 个内存 queue，具有相同 key 的数据都到同一个内存 queue；然后对于 N 个线程，每个线程分别消费一个内存 queue 即可，这样就能保证顺序性。</li></ul><figure><img src="https://github.com/doocs/advanced-java/blob/master/images/kafka-order-02.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="如何解决消息队列的延时以及过期失效问题-消息队列满了以后该怎么处理-有几百万消息持续积压几小时-说说怎么解决" tabindex="-1"><a class="header-anchor" href="#如何解决消息队列的延时以及过期失效问题-消息队列满了以后该怎么处理-有几百万消息持续积压几小时-说说怎么解决" aria-hidden="true">#</a> 如何解决消息队列的延时以及过期失效问题？消息队列满了以后该怎么处理？有几百万消息持续积压几小时，说说怎么解决？</h2><p>你看这问法，其实本质针对的场景，都是说，可能你的消费端出了问题，不消费了；或者消费的速度极其慢。接着就坑爹了，可能你的消息队列集群的磁盘都快写满了，都没人消费，这个时候怎么办？或者是这整个就积压了几个小时，你这个时候怎么办？或者是你积压的时间太长了，导致比如 RabbitMQ 设置了消息过期时间后就没了怎么办？</p><p>所以就这事儿，其实线上挺常见的，一般不出，一出就是大 case。一般常见于，举个例子，消费端每次消费之后要写 mysql，结果 mysql 挂了，消费端 hang 那儿了，不动了；或者是消费端出了个什么岔子，导致消费速度极其慢。</p><h3 id="面试题剖析" tabindex="-1"><a class="header-anchor" href="#面试题剖析" aria-hidden="true">#</a> 面试题剖析</h3><p>关于这个事儿，我们一个一个来梳理吧，先假设一个场景，我们现在消费端出故障了，然后大量消息在 mq 里积压，现在出事故了，慌了。</p><h3 id="大量消息在-mq-里积压了几个小时了还没解决" tabindex="-1"><a class="header-anchor" href="#大量消息在-mq-里积压了几个小时了还没解决" aria-hidden="true">#</a> 大量消息在 mq 里积压了几个小时了还没解决</h3><p>几千万条数据在 MQ 里积压了七八个小时，从下午 4 点多，积压到了晚上 11 点多。这个是我们真实遇到过的一个场景，确实是线上故障了，这个时候要不然就是修复 consumer 的问题，让它恢复消费速度，然后傻傻的等待几个小时消费完毕。这个肯定不能在面试的时候说吧。</p><p>一个消费者一秒是 1000 条，一秒 3 个消费者是 3000 条，一分钟就是 18 万条。所以如果你积压了几百万到上千万的数据，即使消费者恢复了，也需要大概 1 小时的时间才能恢复过来。</p><p>一般这个时候，只能临时紧急扩容了，具体操作步骤和思路如下：</p><ul><li>先修复 consumer 的问题，确保其恢复消费速度，然后将现有 consumer 都停掉。</li><li>新建一个 topic，partition 是原来的 10 倍，临时建立好原先 10 倍的 queue 数量。</li><li>然后写一个临时的分发数据的 consumer 程序，这个程序部署上去消费积压的数据，<strong>消费之后不做耗时的处理</strong>，直接均匀轮询写入临时建立好的 10 倍数量的 queue。</li><li>接着临时征用 10 倍的机器来部署 consumer，每一批 consumer 消费一个临时 queue 的数据。这种做法相当于是临时将 queue 资源和 consumer 资源扩大 10 倍，以正常的 10 倍速度来消费数据。</li><li>等快速消费完积压数据之后，<strong>得恢复原先部署的架构</strong>，<strong>重新</strong>用原先的 consumer 机器来消费消息。</li></ul><h3 id="mq-中的消息过期失效了" tabindex="-1"><a class="header-anchor" href="#mq-中的消息过期失效了" aria-hidden="true">#</a> mq 中的消息过期失效了</h3><p>假设你用的是 RabbitMQ，RabbtiMQ 是可以设置过期时间的，也就是 TTL。如果消息在 queue 中积压超过一定的时间就会被 RabbitMQ 给清理掉，这个数据就没了。那这就是第二个坑了。这就不是说数据会大量积压在 mq 里，而是<strong>大量的数据会直接搞丢</strong>。</p><p>这个情况下，就不是说要增加 consumer 消费积压的消息，因为实际上没啥积压，而是丢了大量的消息。我们可以采取一个方案，就是<strong>批量重导</strong>，这个我们之前线上也有类似的场景干过。就是大量积压的时候，我们当时就直接丢弃数据了，然后等过了高峰期以后，比如大家一起喝咖啡熬夜到晚上 12 点以后，用户都睡觉了。这个时候我们就开始写程序，将丢失的那批数据，写个临时程序，一点一点的查出来，然后重新灌入 mq 里面去，把白天丢的数据给他补回来。也只能是这样了。</p><p>假设 1 万个订单积压在 mq 里面，没有处理，其中 1000 个订单都丢了，你只能手动写程序把那 1000 个订单给查出来，手动发到 mq 里去再补一次。</p><h3 id="mq-都快写满了" tabindex="-1"><a class="header-anchor" href="#mq-都快写满了" aria-hidden="true">#</a> mq 都快写满了</h3><p>如果消息积压在 mq 里，你很长时间都没有处理掉，此时导致 mq 都快写满了，咋办？这个还有别的办法吗？没有，谁让你第一个方案执行的太慢了，你临时写程序，接入数据来消费，<strong>消费一个丢弃一个，都不要了</strong>，快速消费掉所有的消息。然后走第二个方案，到了晚上再补数据吧。</p><h2 id="如果让你写一个消息队列-该如何进行架构设计啊-说一下你的思路。" tabindex="-1"><a class="header-anchor" href="#如果让你写一个消息队列-该如何进行架构设计啊-说一下你的思路。" aria-hidden="true">#</a> 如果让你写一个消息队列，该如何进行架构设计啊？说一下你的思路。</h2><h3 id="面试官心理分析" tabindex="-1"><a class="header-anchor" href="#面试官心理分析" aria-hidden="true">#</a> 面试官心理分析</h3><p>其实聊到这个问题，一般面试官要考察两块：</p><ul><li>你有没有对某一个消息队列做过较为深入的原理的了解，或者从整体了解把握住一个消息队列的架构原理。</li><li>看看你的设计能力，给你一个常见的系统，就是消息队列系统，看看你能不能从全局把握一下整体架构设计，给出一些关键点出来。</li></ul><p>说实话，问类似问题的时候，大部分人基本都会蒙，因为平时从来没有思考过类似的问题，大多数人就是平时埋头用，从来不去思考背后的一些东西。类似的问题，比如，如果让你来设计一个 Spring 框架你会怎么做？如果让你来设计一个 Dubbo 框架你会怎么做？如果让你来设计一个 MyBatis 框架你会怎么做？</p><h3 id="面试题剖析-1" tabindex="-1"><a class="header-anchor" href="#面试题剖析-1" aria-hidden="true">#</a> 面试题剖析</h3><p>其实回答这类问题，说白了，不求你看过那技术的源码，起码你要大概知道那个技术的基本原理、核心组成部分、基本架构构成，然后参照一些开源的技术把一个系统设计出来的思路说一下就好。</p><p>比如说这个消息队列系统，我们从以下几个角度来考虑一下：</p><ul><li>首先这个 mq 得支持可伸缩性吧，就是需要的时候快速扩容，就可以增加吞吐量和容量，那怎么搞？设计个分布式的系统呗，参照一下 kafka 的设计理念，broker -&gt; topic -&gt; partition，每个 partition 放一个机器，就存一部分数据。如果现在资源不够了，简单啊，给 topic 增加 partition，然后做数据迁移，增加机器，不就可以存放更多数据，提供更高的吞吐量了？</li><li>其次你得考虑一下这个 mq 的数据要不要落地磁盘吧？那肯定要了，落磁盘才能保证别进程挂了数据就丢了。那落磁盘的时候怎么落啊？顺序写，这样就没有磁盘随机读写的寻址开销，磁盘顺序读写的性能是很高的，这就是 kafka 的思路。</li><li>其次你考虑一下你的 mq 的可用性啊？这个事儿，具体参考之前可用性那个环节讲解的 kafka 的高可用保障机制。多副本 -&gt; leader &amp; follower -&gt; broker 挂了重新选举 leader 即可对外服务。</li><li>能不能支持数据 0 丢失啊？可以的，参考我们之前说的那个 kafka 数据零丢失方案。</li></ul><p>mq 肯定是很复杂的，面试官问你这个问题，其实是个开放题，他就是看看你有没有从架构角度整体构思和设计的思维以及能力。确实这个问题可以刷掉一大批人，因为大部分人平时不思考这些东西。</p>`,124);function x(_,y){const t=n("ExternalLinkIcon");return s(),d("div",null,[l,e("ul",null,[e("li",null,[a("系统可用性降低"),p,a(" 系统引入的外部依赖越多，越容易挂掉。本来你就是 A 系统调用 BCD 三个系统的接口就好了，人 ABCD 四个系统好好的，没啥问题，你偏加个 MQ 进来，万一 MQ 挂了咋整，MQ 一挂，整套系统崩溃的，你不就完了？如何保证消息队列的高可用，可以"),e("a",g,[a("点击这里查看"),i(t)]),a("。")]),e("li",null,[a("系统复杂度提高"),b,a(" 硬生生加个 MQ 进来，你怎么"),e("a",h,[a("保证消息没有重复消费"),i(t)]),a("？怎么"),e("a",u,[a("处理消息丢失的情况"),i(t)]),a("？怎么保证消息传递的顺序性？头大头大，问题一大堆，痛苦不已。")]),m]),f,e("ul",null,[k,M,e("li",null,[a("不过现在确实越来越多的公司会去用 RocketMQ，确实很不错，毕竟是阿里出品，但社区可能有突然黄掉的风险（目前 RocketMQ 已捐给 "),e("a",Q,[a("Apache"),i(t)]),a("，但 GitHub 上的活跃度其实不算高）对自己公司技术实力有绝对自信的，推荐用 RocketMQ，否则回去老老实实用 RabbitMQ 吧，人家有活跃的开源社区，绝对不会黄。")]),q,v]),R])}const j=o(c,[["render",x],["__file","01.消息队列面试.html.vue"]]);export{j as default};
