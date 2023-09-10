import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as d,c,a as e,d as r,w as s,b as a,e as l}from"./app-afc5da4f.js";const h={},p=l('<h1 id="kafka-可靠传输" tabindex="-1"><a class="header-anchor" href="#kafka-可靠传输" aria-hidden="true">#</a> Kafka 可靠传输</h1><h2 id="消息不丢失" tabindex="-1"><a class="header-anchor" href="#消息不丢失" aria-hidden="true">#</a> 消息不丢失</h2><p>如何保证消息的可靠性传输，或者说，如何保证消息不丢失？这对于任何 MQ 都是核心问题。</p><p>一条消息从生产到消费，可以划分三个阶段：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210422042613.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li><strong>生产阶段</strong>：Producer 创建消息，并通过网络发送给 Broker。</li><li><strong>存储阶段</strong>：Broker 收到消息并存储，如果是集群，还要同步副本给其他 Broker。</li><li><strong>消费阶段</strong>：Consumer 向 Broker 请求消息，Broker 通过网络传输给 Consumer。</li></ul><p>这三个阶段都可能丢失数据，所以要保证消息丢失，就需要任意一环都保证可靠。</p><h3 id="存储阶段" tabindex="-1"><a class="header-anchor" href="#存储阶段" aria-hidden="true">#</a> 存储阶段</h3><p>存储阶段指的是 Kafka Server，也就是 Broker 如何保证消息不丢失。</p><p>一句话概括，<strong>Kafka 只对“已提交”的消息（committed message）做有限度的持久化保证</strong>。</p><p>上面的话可以解读为：</p><ul><li><strong>已提交</strong>：<strong>只有当消息被写入分区的若干同步副本时，才被认为是已提交的</strong>。为什么是若干个 Broker 呢？这取决于你对“已提交”的定义。你可以选择只要 Leader 成功保存该消息就算是已提交，也可以是令所有 Broker 都成功保存该消息才算是已提交。</li><li><strong>持久化</strong>：Kafka 的数据存储在磁盘上，所以只要写入成功，天然就是持久化的。</li><li><strong>只要还有一个副本是存活的，那么已提交的消息就不会丢失</strong>。</li><li><strong>消费者只能读取已提交的消息</strong>。</li></ul><h4 id="副本机制" tabindex="-1"><a class="header-anchor" href="#副本机制" aria-hidden="true">#</a> 副本机制</h4><p><strong>Kafka 的副本机制是 kafka 可靠性保证的核心</strong>。</p><p>Kafka 的主题被分为多个分区，分区是基本的数据块。每个分区可以有多个副本，有一个是 Leader（主副本），其他是 Follower（从副本）。所有数据都直接发送给 Leader，或者直接从 Leader 读取事件。Follower 只需要与 Leader 保持同步，并及时复制最新的数据。当 Leader 宕机时，从 Follower 中选举一个成为新的 Leader。</p><p>Broker 有 3 个配置参数会影响 Kafka 消息存储的可靠性。</p><h4 id="副本数" tabindex="-1"><a class="header-anchor" href="#副本数" aria-hidden="true">#</a> 副本数</h4><p><strong><code>replication.factor</code> 的作用是设置每个分区的副本数</strong>。<code>replication.factor</code> 是主题级别配置； <code>default.replication.factor</code> 是 broker 级别配置。</p><p>副本数越多，数据可靠性越高；但由于副本数增多，也会增加同步副本的开销，可能会降低集群的可用性。一般，建议设为 3，这也是 Kafka 的默认值。</p><h4 id="不完全的选主" tabindex="-1"><a class="header-anchor" href="#不完全的选主" aria-hidden="true">#</a> 不完全的选主</h4><p><code>unclean.leader.election.enable</code> 用于控制是否支持不同步的副本参与选举 Leader。<code>unclean.leader.election.enable</code> 是 broker 级别（实际上是集群范围内）配置，默认值为 true。</p><ul><li>如果设为 true，代表着<strong>允许不同步的副本成为主副本</strong>（即不完全的选举），那么将<strong>面临丢失消息的风险</strong>；</li><li>如果设为 false，就要<strong>等待原先的主副本重新上线</strong>，从而降低了可用性。</li></ul><h4 id="最少同步副本" tabindex="-1"><a class="header-anchor" href="#最少同步副本" aria-hidden="true">#</a> 最少同步副本</h4><p><strong><code>min.insync.replicas</code> 控制的是消息至少要被写入到多少个副本才算是“已提交”</strong>。<code>min.insync.replicas</code> 是主题级别和 broker 级别配置。</p><p>尽管可以为一个主题配置 3 个副本，但还是可能会出现只有一个同步副本的情况。如果这个同步副本变为不可用，则必须在可用性和数据一致性之间做出选择。Kafka 中，消息只有被写入到所有的同步副本之后才被认为是已提交的。但如果只有一个同步副本，那么在这个副本不可用时，则数据就会丢失。</p><p>如果要确保已经提交的数据被已写入不止一个副本，就需要把最小同步副本的设置为大一点的值。</p><blockquote><p>注意：要确保 <code>replication.factor</code> &gt; <code>min.insync.replicas</code>。如果两者相等，那么只要有一个副本挂机，整个分区就无法正常工作了。我们不仅要改善消息的持久性，防止数据丢失，还要在不降低可用性的基础上完成。推荐设置成 <code>replication.factor = min.insync.replicas + 1</code>。</p></blockquote><h3 id="生产阶段" tabindex="-1"><a class="header-anchor" href="#生产阶段" aria-hidden="true">#</a> 生产阶段</h3><p>在生产消息阶段，消息队列一般通过请求确认机制，来保证消息的可靠传递，Kafka 也不例外。</p>',29),u=l('<p>同步方式能保证消息不丢失，但性能太差；异步方式发送消息，通常会立即返回，但消息可能丢失。</p><p>解决生产者丢失消息的方案：</p><p>生产者使用异步回调方式 <code>producer.send(msg, callback)</code> 发送消息。callback（回调）能准确地告诉你消息是否真的提交成功了。一旦出现消息提交失败的情况，你就可以有针对性地进行处理。</p><ul><li>如果是因为那些瞬时错误，那么仅仅让 Producer 重试就可以了；</li><li>如果是消息不合格造成的，那么可以调整消息格式后再次发送。</li></ul><p>然后，需要基于以下几点来保证 Kafka 生产者的可靠性：</p><h4 id="ack" tabindex="-1"><a class="header-anchor" href="#ack" aria-hidden="true">#</a> ACK</h4><p>生产者可选的确认模式有三种：<code>acks=0</code>、<code>acks=1</code>、<code>acks=all</code>。</p><ul><li><p><code>acks=0</code>、<code>acks=1</code> 都有丢失数据的风险。</p></li><li><p><code>acks=all</code> 意味着会等待所有同步副本都收到消息。再结合 <code>min.insync.replicas</code> ，就可以决定在得到确认响应前，至少有多少副本能够收到消息。</p></li></ul><p>这是最保险的做法，但也会降低吞吐量。</p><h4 id="重试" tabindex="-1"><a class="header-anchor" href="#重试" aria-hidden="true">#</a> 重试</h4><p>如果 broker 返回的错误可以通过<strong>重试</strong>来解决，生产者会自动处理这些错误。</p><ul><li><strong>可重试错误</strong>，如：<code>LEADER_NOT_AVAILABLE</code>，主副本不可用，可能过一段时间，集群就会选举出新的主副本，重试可以解决问题。</li><li><strong>不可重试错误</strong>，如：<code>INVALID_CONFIG</code>，即使重试，也无法改变配置选项，重试没有意义。</li></ul><p>需要注意的是：有时可能因为网络问题导致没有收到确认，但实际上消息已经写入成功。生产者会认为出现临时故障，重试发送消息，这样就会出现重复记录。所以，尽可能在业务上保证幂等性。</p><p>设置 <code>retries</code> 为一个较大的值。这里的 <code>retries</code> 同样是 Producer 的参数，对应前面提到的 Producer 自动重试。当出现网络的瞬时抖动时，消息发送可能会失败，此时配置了 retries &gt; 0 的 Producer 能够自动重试消息发送，避免消息丢失。</p><h4 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h4><p>开发者需要自行处理的错误：</p><ul><li>不可重试的 broker 错误，如消息大小错误、认证错误等；</li><li>消息发送前发生的错误，如序列化错误；</li><li>生产者达到重试次数上限或消息占用的内存达到上限时发生的错误。</li></ul><h3 id="消费阶段" tabindex="-1"><a class="header-anchor" href="#消费阶段" aria-hidden="true">#</a> 消费阶段</h3><p>前文已经提到，<strong>消费者只能读取已提交的消息</strong>。这就保证了消费者接收到消息时已经具备了数据一致性。</p><p>消费者唯一要做的是确保哪些消息是已经读取过的，哪些是没有读取过的（通过提交偏移量给 Broker 来确认）。如果消费者提交了偏移量却未能处理完消息，那么就有可能造成消息丢失，这也是消费者丢失消息的主要原因。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200727140159.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="消费者的可靠性配置" tabindex="-1"><a class="header-anchor" href="#消费者的可靠性配置" aria-hidden="true">#</a> 消费者的可靠性配置</h4><ul><li><code>group.id</code> - 如果希望消费者可以看到主题的所有消息，那么需要为它们设置唯一的 <code>group.id</code>。</li><li><code>auto.offset.reset</code> - 有两个选项： <ul><li><code>earliest</code> - 消费者会从分区的开始位置读取数据</li><li><code>latest</code> - 消费者会从分区末尾位置读取数据</li></ul></li><li><code>enable.auto.commit</code> - 消费者自动提交偏移量。如果设为 true，处理流程更简单，但无法保证重复处理消息。</li><li><code>auto.commit.interval.ms</code> - 自动提交的频率，默认为每 5 秒提交一次。</li></ul><h4 id="显示提交偏移量" tabindex="-1"><a class="header-anchor" href="#显示提交偏移量" aria-hidden="true">#</a> 显示提交偏移量</h4><blockquote><p>如果 <code>enable.auto.commit</code> 设为 true，即自动提交，就无需考虑提交偏移量的问题。</p></blockquote><p>如果选择显示提交偏移量，需要考虑以下问题：</p><ul><li>必须在处理完消息后再发送确认（提交偏移量），不要收到消息立即确认。</li><li>提交频率是性能和重复消息数之间的权衡</li><li>分区再均衡</li><li>消费可能需要重试机制</li><li>超时处理</li><li>消费者可能需要维护消费状态，如：处理完消息后，记录在数据库中。</li><li>幂等性设计 <ul><li>写数据库：根据主键判断记录是否存在</li><li>写 Redis：set 操作天然具有幂等性</li><li>复杂的逻辑处理，则可以在消息中加入全局 ID</li></ul></li></ul><h2 id="重复消息" tabindex="-1"><a class="header-anchor" href="#重复消息" aria-hidden="true">#</a> 重复消息</h2><p>在 MQTT 协议中，给出了三种传递消息时能够提供的服务质量标准，这三种服务质量从低到高依次是：</p><ul><li><strong>At most once</strong>：至多一次。消息在传递时，最多会被送达一次。换一个说法就是，没什么消息可靠性保证，允许丢消息。一般都是一些对消息可靠性要求不太高的监控场景使用，比如每分钟上报一次机房温度数据，可以接受数据少量丢失。</li><li><strong>At least once</strong>: 至少一次。消息在传递时，至少会被送达一次。也就是说，不允许丢消息，但是允许有少量重复消息出现。</li><li><strong>Exactly once</strong>：恰好一次。消息在传递时，只会被送达一次，不允许丢失也不允许重复，这个是最高的等级。</li></ul><p>绝大部分消息队列提供的服务质量都是 At least once，包括 RocketMQ、RabbitMQ 和 Kafka 都是这样。也就是说，消息队列很难保证消息不重复。</p><p>一般解决重复消息的办法是，在消费端，<strong>保证消费消息的操作具备幂等性</strong>。</p><p>常用的实现幂等操作的方法：</p><h3 id="利用数据库的唯一约束实现幂等" tabindex="-1"><a class="header-anchor" href="#利用数据库的唯一约束实现幂等" aria-hidden="true">#</a> 利用数据库的唯一约束实现幂等</h3><p>关系型数据库可以使用 <code>INSERT IF NOT EXIST</code> 语句防止重复；Redis 可以使用 <code>SETNX</code> 命令来防止重复；其他数据库只要支持类似语义，也是一个道理。</p><h3 id="为更新的数据设置前置条件" tabindex="-1"><a class="header-anchor" href="#为更新的数据设置前置条件" aria-hidden="true">#</a> 为更新的数据设置前置条件</h3><p>如果满足条件就更新数据，否则拒绝更新数据，在更新数据的时候，同时变更前置条件中需要判断的数据。这样，重复执行这个操作时，由于第一次更新数据的时候已经变更了前置条件中需要判断的数据，不满足前置条件，则不会重复执行更新数据操作。</p><p>但是，如果我们要更新的数据不是数值，或者我们要做一个比较复杂的更新操作怎么办？用什么作为前置判断条件呢？更加通用的方法是，给数据增加一个版本号属性，每次更数据前，比较当前数据的版本号是否和消息中的版本号一致，如果不一致就拒绝更新数据，更新数据的同时将版本号 +1，一样可以实现幂等更新。</p><h3 id="记录并检查操作" tabindex="-1"><a class="header-anchor" href="#记录并检查操作" aria-hidden="true">#</a> 记录并检查操作</h3><p>还有一种通用性最强，适用范围最广的实现幂等性方法：记录并检查操作，也称为“Token 机制或者 GUID（全局唯一 ID）机制”，实现的思路特别简单：在执行数据更新操作之前，先检查一下是否执行过这个更新操作。</p><p>具体的实现方法是，在发送消息时，给每条消息指定一个全局唯一的 ID，消费时，先根据这个 ID 检查这条消息是否有被消费过，如果没有消费过，才更新数据，然后将消费状态置为已消费。</p><p>需要注意的是，“检查消费状态，然后更新数据并且设置消费状态”中，三个操作必须作为一组操作保证原子性，才能真正实现幂等，否则就会出现 Bug。这一组操作可以通过分布式事务或分布式锁来保证其原子性。</p><h2 id="消息的有序性" tabindex="-1"><a class="header-anchor" href="#消息的有序性" aria-hidden="true">#</a> 消息的有序性</h2><p>某些场景下，可能会要求按序发送消息。</p><h3 id="方案一、单-partition" tabindex="-1"><a class="header-anchor" href="#方案一、单-partition" aria-hidden="true">#</a> 方案一、单 Partition</h3><p>Kafka 每一个 Partition 只能隶属于消费者群组中的一个 Consumer，换句话说，每个 Partition 只能被一个 Consumer 消费。所以，如果 Topic 是单 Partition，自然是有序的。</p><p>方案分析</p><p>优点：简单粗暴。开发者什么也不用做。</p><p>缺点：<strong>Kafka 基于 Partition 实现其高并发</strong>能力，如果使用单 Partition，会严重限制 Kafka 的吞吐量。</p><p>结论：作为分布式消息引擎，限制并发能力，显然等同于自废武功，所以，这个方案几乎是不可接受的。</p><h3 id="方案二、同一个-key-的消息发送给指定-partition" tabindex="-1"><a class="header-anchor" href="#方案二、同一个-key-的消息发送给指定-partition" aria-hidden="true">#</a> 方案二、同一个 key 的消息发送给指定 Partition</h3><p>（1）生产者端显示指定 key 发往一个指定的 Partition，就可以保证同一个 key 在这个 Partition 中是有序的。</p><p>（2）接下来，消费者端为每个 key 设定一个缓存队列，然后让一个独立线程负责消费指定 key 的队列，这就保证了消费消息也是有序的。</p><h2 id="消息积压" tabindex="-1"><a class="header-anchor" href="#消息积压" aria-hidden="true">#</a> 消息积压</h2><p>先修复消费者，然后停掉当前所有消费者。</p><p>新建 Topic，扩大分区，以提高并发处理能力。</p><p>创建临时消费者程序，并部署在多节点上，扩大消费处理能力。</p><p>最后处理完积压消息后，恢复原先部署架构。</p><h2 id="验证系统可靠性" tabindex="-1"><a class="header-anchor" href="#验证系统可靠性" aria-hidden="true">#</a> 验证系统可靠性</h2><p>建议从 3 个层面验证系统的可靠性：</p><ul><li><strong>配置验证</strong></li><li><strong>应用验证</strong><ul><li>客户端和服务器断开连接</li><li>选举</li><li>依次重启 broker</li><li>依次重启生产者</li><li>依次重启消费者</li></ul></li><li><strong>监控可靠性</strong><ul><li>对于生产者来说，最重要的两个指标是消息的 <code>error-rate</code> 和 <code>retry-rate</code>。如果这两个指标上升，说明系统出了问题。</li><li>对于消费者来说，最重要的指标是 <code>consumer-lag</code>，该指标表明了消费者的处理速度与最近提交到分区里的偏移量之间还有多少差距。</li></ul></li></ul><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><p>生产者</p><ol><li>不要使用 <code>producer.send(msg)</code>，而要使用 <code>producer.send(msg, callback)</code>。记住，一定要使用带有回调通知的 <code>send</code> 方法。</li><li>设置 <code>acks = all</code>。<code>acks</code> 是 Producer 的一个参数，代表了你对“已提交”消息的定义。如果设置成 all，则表明所有副本 Broker 都要接收到消息，该消息才算是“已提交”。这是最高等级的“已提交”定义。</li><li>设置 <code>retries</code> 为一个较大的值。这里的 retries 同样是 Producer 的参数，对应前面提到的 Producer 自动重试。当出现网络的瞬时抖动时，消息发送可能会失败，此时配置了 <code>retries &gt; 0</code> 的 Producer 能够自动重试消息发送，避免消息丢失。</li></ol><p>服务器（Kafka Broker）</p><ol><li>设置 <code>unclean.leader.election.enable = false。</code>这是 Broker 端的参数，它控制的是哪些 Broker 有资格竞选分区的 Leader。如果一个 Broker 落后原先的 Leader 太多，那么它一旦成为新的 Leader，必然会造成消息的丢失。故一般都要将该参数设置成 false，即不允许这种情况的发生。</li><li>设置 <code>replication.factor</code> &gt;= 3。这也是 Broker 端的参数。其实这里想表述的是，最好将消息多保存几份，毕竟目前防止消息丢失的主要机制就是冗余。</li><li>设置 <code>min.insync.replicas</code> &gt; 1。这依然是 Broker 端参数，控制的是消息至少要被写入到多少个副本才算是“已提交”。设置成大于 1 可以提升消息持久性。在实际环境中千万不要使用默认值 1。</li><li>确保 <code>replication.factor</code> &gt; <code>min.insync.replicas</code>。如果两者相等，那么只要有一个副本挂机，整个分区就无法正常工作了。我们不仅要改善消息的持久性，防止数据丢失，还要在不降低可用性的基础上完成。推荐设置成 <code>replication.factor = min.insync.replicas + 1</code>。</li></ol><p>消费者</p><ol><li>确保消息消费完成再提交。Consumer 端有个参数 <code>enable.auto.commit</code>，最好把它设置成 false，并采用手动提交位移的方式。就像前面说的，这对于单 Consumer 多线程处理的场景而言是至关重要的。</li></ol><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',69),g=e("strong",null,"官方",-1),f={href:"http://kafka.apache.org/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/apache/kafka",target:"_blank",rel:"noopener noreferrer"},b={href:"https://kafka.apache.org/documentation/",target:"_blank",rel:"noopener noreferrer"},m=e("strong",null,"书籍",-1),_={href:"https://item.jd.com/12270295.html",target:"_blank",rel:"noopener noreferrer"},x=e("strong",null,"教程",-1),B={href:"https://time.geekbang.org/column/intro/100032301",target:"_blank",rel:"noopener noreferrer"},K={href:"https://github.com/apachecn/kafka-doc-zh",target:"_blank",rel:"noopener noreferrer"},E={href:"https://time.geekbang.org/column/intro/100029201",target:"_blank",rel:"noopener noreferrer"};function y(L,P){const n=i("RouterLink"),o=i("ExternalLinkIcon");return d(),c("div",null,[p,e("p",null,[r(n,{to:"/15.%E5%88%86%E5%B8%83%E5%BC%8F/21.%E5%88%86%E5%B8%83%E5%BC%8F%E9%80%9A%E4%BF%A1/02.MQ/01.Kafka/02.Kafka%E7%94%9F%E4%BA%A7%E8%80%85.html"},{default:s(()=>[a("Kafka 生产者")]),_:1}),a(" 中提到了，Kafka 有三种发送方式：同步、异步、异步回调。")]),u,e("ul",null,[e("li",null,[g,e("ul",null,[e("li",null,[e("a",f,[a("Kafka 官网"),r(o)])]),e("li",null,[e("a",k,[a("Kafka Github"),r(o)])]),e("li",null,[e("a",b,[a("Kafka 官方文档"),r(o)])])])]),e("li",null,[m,e("ul",null,[e("li",null,[e("a",_,[a("《Kafka 权威指南》"),r(o)])])])]),e("li",null,[x,e("ul",null,[e("li",null,[e("a",B,[a("消息队列高手课"),r(o)])]),e("li",null,[e("a",K,[a("Kafka 中文文档"),r(o)])]),e("li",null,[e("a",E,[a("Kafka 核心技术与实战"),r(o)])])])])])])}const C=t(h,[["render",y],["__file","index.html.vue"]]);export{C as default};
