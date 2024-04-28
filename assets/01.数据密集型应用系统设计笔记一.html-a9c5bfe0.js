import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,e as r}from"./app-2ca3a8cf.js";const h={},d=r('<h1 id="《数据密集型应用系统设计》笔记一之分布式数据系统" tabindex="-1"><a class="header-anchor" href="#《数据密集型应用系统设计》笔记一之分布式数据系统" aria-hidden="true">#</a> 《数据密集型应用系统设计》笔记一之分布式数据系统</h1><p>出于以下目的，我们需要在多台机器上分布数据：</p><ul><li>扩展性：当数据量或者读写负载巨大，严重超出了单台机器的处理上限，需要将负载分散到多台机器上。</li><li>容错与高可用性：当单台机器（或者多台，以及网络甚至整个数据中心）出现故障，还希望应用系统可以继续工作，这时需要采用多台机器提供冗余。这样某些组件失效之后，冗余组件可以迅速接管。</li><li>延迟考虑：如果客户遍布世界各地，通常需要考虑在全球范围内部署服务，以方便用户就近访问最近数据中心所提供的服务，从而避免数据请求跨越了半个地球才能到达目标。</li></ul><p>将数据分布在多节点时有两种常见的方式：</p><ul><li><strong>复制</strong>：在多个节点上保存相同数据的副本，每个副本具体的存储位置可能不尽相同。复制方住可以提供冗余</li><li><strong>分区</strong>：将一个大块头的数据库拆分成多个较小的子集即分区，不同的分区分配给不同的节点（也称为分片）。我们在第 6 章主要介绍分区技术。</li></ul><h2 id="单主节点数据复制" tabindex="-1"><a class="header-anchor" href="#单主节点数据复制" aria-hidden="true">#</a> 单主节点数据复制</h2><p>复制主要指通过网络在多台机器上保存相同数据的副本。</p><p>数据复制的作用：</p><ul><li>使数据在地理位置上更接近用户，从而<strong>降低访问延迟</strong>。</li><li>当部分组件出现位障，系统依然可以继续工作，从而<strong>提高可用性</strong>。</li><li>扩展至多台机器以同时提供数据访问服务，从而<strong>提高读吞吐量</strong>。</li></ul><p>复制方式：</p><ul><li>主从复制</li><li>多主节点复制</li><li>无主节点复制</li></ul><p>复制需要考虑的问题：</p><ul><li>同步还是异步</li><li>如何处理失败的副本</li><li>如何保证数据一致</li></ul><h3 id="主节点与从节点" tabindex="-1"><a class="header-anchor" href="#主节点与从节点" aria-hidden="true">#</a> 主节点与从节点</h3><p>每个保存数据库完整数据集的节点称之为副本。有了多副本，必然会面临一个问题：如何确保所有副本之间的数据是一致的？</p><p>主从复制的工作原理如下：</p><ol><li>指定某一个副本为主副本（或称为主节点） 。当客户写数据库时，必须将写请求首先发送给主副本，主副本首先将新数据写入本地存储。</li><li>其他副本则全部称为从副本（或称为从节点）。主副本把新数据写入本地存储后，然后将数据更改作为复制的日志或更改流发送给所有从副本。每个从副本获得更改日志之后将其应用到本地，且严格保持与主副本相同的写入顺序。</li><li>客户端从数据库中读数据时，可以在主副本或者从副本上执行查询。再次强调，只有主副本才可以接受写请求：从客户端的角度来看，从副本都是只读的。</li></ol><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220302202101.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>典型应用：</p><ul><li>数据库：MySql、MongoDB 等</li><li>消息队列：Kafka、RabbitMQ 等</li></ul><h3 id="同步复制与异步复制" tabindex="-1"><a class="header-anchor" href="#同步复制与异步复制" aria-hidden="true">#</a> 同步复制与异步复制</h3><p>基本流程是，客户将更新请求发送给主节点，主节点接收到请求，接下来将数据更新转发给从节点。最后，由<br> 主节点来通知客户更新完成。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220302202158.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>通常情况下， 复制速度会非常快，例如多数数据库系统可以在一秒之内完成所有从节点的更新。但是，系统其<br> 实并没有保证一定会在多段时间内完成复制。有些情况下，从节点可能落后主节点几分钟甚至更长时间，例如，由于从节点刚从故障中恢复，或者系统已经接近最大设计上限，或者节点之间的网络出现问题。</p><ul><li><strong>同步复制的优点</strong>： 一旦向用户确认，从节点可以明确保证完成了与主节点的更新同步，数据已经处于最新版本。万一主节点发生故障，总是可以在从节点继续访问最新数据。</li><li><strong>同步复制的缺点</strong>：如果同步的从节点无法完成确认（例如由于从节点发生崩愤，或者网络故障，或任何其他原因）， 写入就不能视为成功。主节点会阻塞其后所有的写操作，直到同步副本确认完成。</li></ul><p>因此，把所有从节点都配置为同步复制有些不切实际。因为这样的话，任何一个同步节点的中断都会导致整个系统更新停滞不前。</p><p>实际应用中，很多数据库推荐的模式是：只要有一个从节点或半数以上的从节点同步成功，就视为同步，直接返回结果；剩下的节点都通过异步方式同步。</p><ul><li><strong>异步复制的优点</strong>：不管从节点上数据多么滞后，主节点总是可以继续响应写请求，系统的吞吐性能更好。</li><li><strong>异步复制的缺点</strong>：如果主节点发生失败且不可恢复，则所有尚未复制到从节点的写请求都会丢失。</li></ul><p>主从复制还经常会被配置为全异步模式。此时如果主节点发生失败且不可恢复，则所有尚未复制到从节点的写请求都会丢失。这意味着即使向客户端确认了写操作， 却无法保证数据的持久化。</p><h3 id="配置新的从节点" tabindex="-1"><a class="header-anchor" href="#配置新的从节点" aria-hidden="true">#</a> 配置新的从节点</h3><p>配置新的从节点的主要操作步骤：</p><ol><li>在某个时间点对主节点的数据副本产生一个一致性快照，这样避免长时间锁定整个数据库。目前大多数数据库都支持此功能，快照也是系统备份所必需的。而在某些情况下，可能需要第三方工具， 如 MySQL 的 innobackupex。</li><li>将此快照拷贝到新的从节点。</li><li>从节点连接到主节点并请求快照点之后所发生的数据更改日志。因为在第一步创建快照时，快照与系统复制日志的某个确定位置相关联，这个位置信息在不同的系统有不同的称呼，如 PostgreSQL 将其称为“ log sequence number” （日志序列号），而 MySQL 将其称为“ binlog coordinates ” 。</li><li>获得日志之后，从节点来应用这些快照点之后所有数据变更，这个过程称之为追赶。接下来，它可以继续处理主节点上新的数据变化。井重复步骤 1 ～步骤 4 。</li></ol><p>建立新的从副本具体操作步骤可能因数据库系统而异。</p><h3 id="处理节点失效" tabindex="-1"><a class="header-anchor" href="#处理节点失效" aria-hidden="true">#</a> 处理节点失效</h3><p>如何通过主从复制技术来实现系统高可用呢？</p><h4 id="从节点失效-追赶式恢复" tabindex="-1"><a class="header-anchor" href="#从节点失效-追赶式恢复" aria-hidden="true">#</a> 从节点失效： 追赶式恢复</h4><p>从节点的本地磁盘上都保存了副本收到的数据变更日志。如果从节点发生崩溃，然后顺利重启，或者主从节点之间的网络发生暂时中断（闪断），则恢复比较容易，根据副本的复制日志，从节点可以知道在发生故障之前所处理的最后一笔事务，然后连接到主节点，并请求自那笔事务之后中断期间内所有的数据变更。在收到这些数据变更日志之后，将其应用到本地来追赶主节点。之后就和正常情况一样持续接收来自主节点数据流的变化。</p><h4 id="主节点失效-节点切换" tabindex="-1"><a class="header-anchor" href="#主节点失效-节点切换" aria-hidden="true">#</a> 主节点失效：节点切换</h4><p>选择某个从节点将其提升为主节点；客户端也需要更新，这样之后的写请求会发送给新的主节点，然后其他从节点要接受来自新的主节点上的变更数据，这一过程称之为切换。</p><p>步骤通常如下：</p><ol><li><strong>确认主节点失效</strong>。有很多种出错可能性，所以大多数系统都采用了基于超时的机制：节点间频繁地互相发生发送心跳悄息，如果发现某一个节点在一段比较长时间内（例如 30s ）没有响应，即认为该节点发生失效。</li><li><strong>选举新的主节点</strong>。可以通过选举的方式（超过多数的节点达成共识）来选举新的主节点，或者由之前选定的某控制节点来指定新的主节点。候选节点最好与原主节点的数据差异最小，这样可以最小化数据丢失的风险。让所有节点同意新的主节点是个典型的共识问题。</li><li><strong>重新配置系统使新主节点生效</strong>。客户端现在需要将写请求发送给新的主节点。如果原主节点之后重新上线，可能仍然自认为是主节点，而没有意识到其他节点已经达成共识迫使其下台。这时系统要确保原主节点降级为从节点，并认可新的主节点。</li></ol><p>上述切换过程依然充满了很多变数：</p><ul><li>如果使用了异步复制，且失效之前，新的主节点并未收到原主节点的所有数据；在选举之后，原主节点很快又重新上线并加入到集群，接下来的写操作会发生什么？新的主节点很可能会收到冲突的写请求，这是因为原主节点未意识的角色变化，还会尝试同步其他从节点，但其中的一个现在已经接管成为现任主节点。常见的解决方案是，原主节点上未完成复制的写请求就此丢弃，但这可能会违背数据更新持久化的承诺。</li><li>如果在数据库之外有其他系统依赖于数据库的内容并在一起协同使用，丢弃数据的方案就特别危险。例如，在 GitHub 的一个事故中，某个数据并非完全同步的 MySQL 从节点被提升为主副本，数据库使用了自增计数器将主键分配给新创建的行，但是因为新的主节点计数器落后于原主节点（ 即二者并非完全同步），它重新使用了已被原主节点分配出去的某些主键，而恰好这些主键已被外部 Redis 所引用，结果出现 MySQL 和 Redis 之间的不一致，最后导致了某些私有数据被错误地泄露给了其他用户。</li><li>在某些故障情况下，可能会发生两个节点同时－都自认为是主节点。这种情况被称为<strong>脑裂</strong>，它非常危险：两个主节点都可能接受写请求，并且没有很好解决冲突的办法，最后数据可能会丢失或者破坏。作为一种安全应急方案，有些系统会采取措施来强制关闭其中一个节点。然而，如果设计或者实现考虑不周，可能会出现两个节点都被关闭的情况。</li><li>如何设置合适的超时来检测主节点失效呢？ 主节点失效后，超时时间设置得越长也意味着总体恢复时间就越长。但如果超时设置太短，可能会导致很多不必要的切换。例如，突发的负载峰值会导致节点的响应时间变长甚至超肘，或者由于网络故障导致延迟增加。如果系统此时已经处于高负载压力或网络已经出现严重拥塞，不必要的切换操作只会使总体情况变得更糟。</li></ul><h3 id="复制日志的实现" tabindex="-1"><a class="header-anchor" href="#复制日志的实现" aria-hidden="true">#</a> 复制日志的实现</h3><h4 id="基于语句的复制" tabindex="-1"><a class="header-anchor" href="#基于语句的复制" aria-hidden="true">#</a> 基于语句的复制</h4><p>最简单的情况，主节点记录所执行的每个写请求（操作语句）井将该操作语句作为日志发送给从节点。对于关系数据库，这意味着每个 INSERT 、UPDATE 或 DELETE 语句都会转发给从节点，并且每个从节点都会分析井执行这些 SQU 吾句，如同它们是来自客户端那样。</p><p>听起来很合理也不复杂，但这种复制方式有一些不适用的场景：</p><ul><li>任何调用非确定性函数的语句，如 <code>NOW()</code> 获取当前时间，或 <code>RAND()</code> 获取一个随机数等，可能会在不同的副本上产生不同的值。</li><li>如果语句中使用了自增列，或者依赖于数据库的现有数据（例如， <code>UPDATE ... WHERE &lt;某些条件&gt;</code>），则所有副本必须按照完全相同的顺序执行，否则可能会带来不同的结果。进而，如果有多个同时并发执行的事务时， 会有很大的限制。</li><li>有副作用的语句（例如，触发器、存储过程、用户定义的函数等），可能会在每个副本上产生不同的副作用。</li></ul><p>有可能采取一些特殊措施来解决这些问题，例如，主节点可以在记录操作语句时将非确定性函数替换为执行之后的确定的结果，这样所有节点直接使用相同的结果值。但是，这里面存在太多边界条件需要考虑，因此目前通常首选的是其他复制实现方案。</p><p>MySQL 5.1 版本之前采用基于操作语句的复制。现在由于逻辑紧凑，依然在用，但是默认情况下，如果语句中存在一些不确定性操作，则 MySQL 会切换到基于行的复制（稍后讨论）。VoltDB 使用基于语句的复制，它通过事务级别的确定性来保证复制的安全。</p><h4 id="基于预写日志-wal-传输" tabindex="-1"><a class="header-anchor" href="#基于预写日志-wal-传输" aria-hidden="true">#</a> 基于预写日志（WAL）传输</h4><p>通常每个写操作都是以追加写的方式写入到日志中：</p><ul><li>对于日志结构存储引擎，日志是主要的存储方式。日志段在后台压缩井支持垃圾回收。</li><li>对于采用覆写磁盘的 BTree 结构，每次修改会预先写入日志，如系统发生崩溃，通过索引更新的方式迅速恢复到此前一致状态。</li></ul><p>不管哪种情况，所有对数据库写入的字节序列都被记入日志。因此可以使用完全相同的日志在另一个节点上构建副本：除了将日志写入磁盘之外， 主节点还可以通过网络将其发送给从节点。</p><p>PostgreSQL 、Oracle 以及其他系统等支持这种复制方式。其主要缺点是日志描述的数据结果非常底层： 一个 WAL 包含了哪些磁盘块的哪些字节发生改变，诸如此类的细节。这使得复制方案和存储引擎紧密搞合。如果数据库的存储格式从一个版本改为另一个版本，那么系统通常无能支持主从节点上运行不同版本的软件。</p><h4 id="基于行的逻辑日志复制" tabindex="-1"><a class="header-anchor" href="#基于行的逻辑日志复制" aria-hidden="true">#</a> 基于行的逻辑日志复制</h4><p>关系数据库的逻辑日志通常是指一系列记录来描述数据表行级别的写请求：</p><ul><li>对于行插入，日志包含所有相关列的新值。</li><li>对于行删除，日志里有足够的信息来唯一标识已删除的行，通常是靠主键，但如果表上没有定义主键，就需要记录所有列的旧值。</li><li>对于行更新，日志包含足够的信息来唯一标识更新的行，以及所有列的新值（或至少包含所有已更新列的新值）。</li></ul><p>如果一条事务涉及多行的修改，则会产生多个这样的日志记录，并在后面跟着一条记录，指出该事务已经提交。MySQL 的二进制日志 binlog （当配置为基于行的复制时）使用该方式。</p><p>由于逻辑日志与存储引擎逻辑解耦，因此可以更容易地保持向后兼容，从而使主从节点能够运行不同版本的软件甚至是不同的存储引擎。</p><p>对于外部应用程序来说，逻辑日志格式也更容易解析。</p><h4 id="基于触发器的复制" tabindex="-1"><a class="header-anchor" href="#基于触发器的复制" aria-hidden="true">#</a> 基于触发器的复制</h4><p>在某些情况下，我们可能需要更高的灵活性。例如，只想复制数据的一部分，或者想从一种数据库复制到另一种数据库，或者需要订制、管理冲突解决逻辑（ 参阅本章后面的“处理写冲突”），则需要将复制控制交给应用程序层。</p><p>有一些工具，可以通过读取数据库日志让应用程序获取数据变更。另一种方法则是借助许多关系数据库都支持的功能：触发器和存储过程。</p><p>触发器支持注册自己的应用层代码，使得当数据库系统发生数据更改（写事务）时自动执行上述自定义代码。通过触发器技术，可以将数据更改记录到一个单独的表中，然后外部处理逻辑访问该表，实施必要的自定义应用层逻辑，例如将数据更改复制到另一个系统。Oracle 的 Databus 和 Postgres 的 Bucardo 就是这种技术的典型代表。基于触发器的复制通常比其他复制方式开销更高， 也比数据库内置复制更容易出错，或者暴露一些限制。然而，其高度灵活性仍有用武之地。</p><h3 id="复制滞后问题" tabindex="-1"><a class="header-anchor" href="#复制滞后问题" aria-hidden="true">#</a> 复制滞后问题</h3><p>主从复制要求所有写请求都经由主节点，而任何副本只能接受只读查询。对于读操作密集的负载（如 Web ），这是一个不错的选择：创建多个从副本，将读请求分发给这些从副本，从而减轻主节点负载井允许读取请求就近满足。</p><p>在这种扩展体系下，只需添加更多的从副本，就可以提高读请求的服务吞吐量。但是，这种方法实际上只能用于异步复制，如果试图同步复制所有的从副本，则单个节点故障或网络中断将使整个系统无法写入。而且节点越多，发生故障的概率越高，所以完全同步的配置现实中反而非常不可靠。</p><p>不幸的是，如果一个应用正好从一个异步的从节点读取数据，而该副本落后于主节点，则应用可能会读到过期的信息。这会导致数据库中出现明显的不一致：由于并非所有的写入都反映在从副本上，如果同时对主节点和从节点发起相同的查询，可能会得到不同的结果。经过一段时间之后，从节点最终会赶上并与主节点数据保持一致。这种效应也被称为最终一致性。</p><h4 id="读自己的写" tabindex="-1"><a class="header-anchor" href="#读自己的写" aria-hidden="true">#</a> 读自己的写</h4><p>许多应用让用户提交一些数据，接下来查看他们自己所提交的内容。例如客户数据库中的记录，亦或者是讨论主题的评论等。提交新数据须发送到主节点，但是当用户读取数据时，数据可能来自从节点。这对于读密集和偶尔写入的负载是个非常合适的方案。</p><p>然而对于异步复制存在这样一个问题，如图 5-3 所示，用户在写人不久即查看数据，则新数据可能尚未到达从节点。对用户来讲， 看起来似乎是刚刚提交的数据丢失了，显然用户不会高兴。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220302204836.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>对于这种情况，我们需要强一致性。如何实现呢？有以下方案：</p><ul><li>如果用户访问可能会被修改的内容，从主节点读取； 否则，在从节点读取。这背后就要求有一些方法在实际执行查询之前，就已经知道内容是否可能会被修改。例如，社交网络上的用户首页信息通常只能由所有者编辑，而其他人无法编辑。因此，这就形成一个简单的规则： 总是从主节点读取用户自己的首页配置文件，而在从节点读取其他用户的配置文件。</li><li>如果应用的大部分内容都可能被所有用户修改，那么上述方法将不太有效，它会导致大部分内容都必须经由主节点，这就丧失了读操作的扩展性。此时需要其他方案来判断是否从主节点读取。例如，跟踪最近更新的时间，如果更新后一分钟之内，则总是在主节点读取；井监控从节点的复制滞后程度，避免从那些滞后时间超过一分钟的从节点读取。</li><li>客户端还可以记住最近更新时的时间戳，井附带在读请求中，据此信息，系统可以确保对该用户提供读服务时都应该至少包含了该时间戳的更新。如果不够新，要么交由另一个副本来处理，要么等待直到副本接收到了最近的更新。时间戳可以是逻辑时间戳（例如用来指示写入顺序的日志序列号）或实际系统时钟（在这<br> 种情况下，时钟同步又称为一个关键点， 请参阅第 8 章“不可靠的时钟”）。</li><li>如果副本分布在多数据中心（例如考虑与用户的地理接近，以及高可用性），情况会更复杂些。必须先把请求路由到主节点所在的数据中心（该数据中心可能离用户很远）。</li></ul><p>如果同一用户可能会从多个设备访问数据，情况会更加复杂。</p><ul><li>记住用户上次更新时间戳的方法实现起来会比较困难，因为在一台设备上运行的代码完全无法知道在其他设备上发生了什么。此时，元数据必须做到全局共享。</li><li>如果副本分布在多数据中心，无法保证来自不同设备的连接经过路由之后都到达同一个数据中心。例如，用户的台式计算机使用了家庭宽带连接，而移动设备则使用蜂窝数据网络，不同设备的网络连接线路可能完全不同。如果方案要求必须从主节点读取，则首先需要想办毡确保将来自不同设备的请求路由到同一个数据中心。</li></ul><h4 id="单调读" tabindex="-1"><a class="header-anchor" href="#单调读" aria-hidden="true">#</a> 单调读</h4><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220303093658.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>用户看到了最新内窑之后又读到了过期的内容，好像时间被回拨， 此时需要单调读一致性。</p><p>单调读一致性可以确保不会发生这种异常。这是一个比强一致性弱，但比最终一致性强的保证。当读取数据时，单调读保证，如果某个用户依次进行多次读取，则他绝不会看到回攘现象，即在读取较新值之后又发生读旧值的情况。</p><p>实现单调读的一种方式是，确保每个用户总是从固定的同一副本执行读取（而不同的用户可以从不同的副本读取）。</p><h4 id="前缀一致读" tabindex="-1"><a class="header-anchor" href="#前缀一致读" aria-hidden="true">#</a> 前缀一致读</h4><p>前缀一致读：对于一系列按照某个顺序发生的写请求，那么读取这些内容时也会按照当时写入的顺序。</p><p>如果数据库总是以相同的顺序写入，则读取总是看到一致的序列，不会发生这种反常。然而，在许多分布式数据库中，不同的分区独立运行，因此不存在全局写入顺序。这就导致当用户从数据库中读数据时，可能会看到数据库的某部分旧值和另一部分新值。</p><h2 id="多主节点复制" tabindex="-1"><a class="header-anchor" href="#多主节点复制" aria-hidden="true">#</a> 多主节点复制</h2><p>主从复制存在一个明显的缺点：系统只有一个主节点，而所有写人都必须经由主节点。主从复制方案就会影响所有的写入操作。</p><h3 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h3><p>在一个数据中心内部使用多主节点基本没有太大意义，其复杂性已经超过所能带来的好处。</p><p>以下场景这种配置则是合理的：</p><ul><li>多数据中心</li><li>离线客户端操作</li><li>协作编辑</li></ul><h4 id="多数据中心" tabindex="-1"><a class="header-anchor" href="#多数据中心" aria-hidden="true">#</a> 多数据中心</h4><p>部署单主节点的主从复制方案与多主复制方案之间的差异</p><ul><li><strong>性能</strong>：对于主从复制，每个写请求都必须经由广域网传送至主节点所在的数据中心。这会大大增加写入延迟，井基本偏离了采用多数据中心的初衷（即就近访问）。而在多主节点模型中，每个写操作都可以在本地数据中心快速响应，然后采用异步复制方式将变化同步到其他数据中心。因此，对上层应用有效屏蔽了数据中心之间的网络延迟，使得终端用户所体验到的性能更好。</li><li><strong>容忍数据中心失效</strong>：对于主从复制，如果主节点所在的数据中心发生故障，必须切换至另一个数据中心，将其中的一个从节点被提升为主节点。在多主节点模型中，每个数据中心则可以独立于其他数据中心继续运行，发生故障的数据中心在恢复之后更新到最新状态。</li><li><strong>容忍网络问题</strong>：数据中心之间的通信通常经由广域网，它往往不如数据中心内的本地网络可靠。对于主从复制模型，由于写请求是同步操作，对数据中心之间的网络性能和稳定性等更加依赖。多主节点模型则通常采用异步复制，可以更好地容忍此类问题，例如临时网络闪断不会妨碍写请求最终成功。</li></ul><h3 id="处理写冲突" tabindex="-1"><a class="header-anchor" href="#处理写冲突" aria-hidden="true">#</a> 处理写冲突</h3><p>多主复制的最大问题是可能发生写冲突。</p><h4 id="同步与异步冲突检测" tabindex="-1"><a class="header-anchor" href="#同步与异步冲突检测" aria-hidden="true">#</a> 同步与异步冲突检测</h4><p>理论上， 也可以做到同步冲突检测，即等待写请求完成对所有副本的同步，然后再通知用户写入成功。但是，这样做将会失去多主节点的主要优势：允许每个主节点独立接受写请求。如果确实想要同步方式冲突检测，或许应该考虑采用单主节点的主从复制模型。</p><h4 id="避免冲突" tabindex="-1"><a class="header-anchor" href="#避免冲突" aria-hidden="true">#</a> 避免冲突</h4><p>处理冲突最理想的策略是避免发生冲突，即如果应用层可以保证对特定记录的写请求总是通过同一个主节点，这样就不会发生写冲突。现实中，由于不少多主节点复制模型所实现的冲突解决方案存在瑕疵，因此，避免冲突反而成为大家普遍推荐的首选方案。</p><p>但是，有时可能需要改变事先指定的主节点，例如由于该数据中心发生故障，不得不将流量重新路由到其他数据中心，或者是因为用户已经漫游到另一个位置，因而更靠近新数据中心。此时，冲突避免方式不再有效，必须有措施来处理同时写入冲突的可能性。</p><h4 id="收敛于一致状态" tabindex="-1"><a class="header-anchor" href="#收敛于一致状态" aria-hidden="true">#</a> 收敛于一致状态</h4><p>对干主从复制模型，数据更新符合顺序性原则，即如果同一个字段有多个更新，则最后一个写操作将决定该字段的最终值。</p><p>对于多主节点复制模型，由于不存在这样的写入顺序，所以最终值也会变得不确定。</p><p>实现收敛的冲突解决有以下可能的方式：</p><ul><li>给每个写入分配唯一的 ID ，例如， 一个时间戳， 二个足够长的随机数， 一个 UUID 或者一个基于键－值的 Jl 合希，挑选最高 ID 的写入作为胜利者，并将其他写入丢弃。如果基于时间戳，这种技术被称为最后写入者获胜。虽然这种方陆很流行，但是很容易造成数据丢失。</li><li>为每个副本分配一个唯一的 ID ，井制定规则，例如序号高的副本写入始终优先于序号低的副本。这种方法也可能会导致数据丢失。</li><li>以某种方式将这些值合并在一起。例如，按字母顺序排序，然后拼接在一起</li><li>利用预定义好的格式来记录和保留冲突相关的所有信息，然后依靠应用层的逻辑，事后解决冲突（可能会提示用户） 。</li></ul><h4 id="自定义冲突解决逻辑" tabindex="-1"><a class="header-anchor" href="#自定义冲突解决逻辑" aria-hidden="true">#</a> 自定义冲突解决逻辑</h4><p>解决冲突最合适的方式可能还是依靠应用层，所以大多数多主节点复制模型都有工具来让用户编写应用代码来解决冲突。可以在写入时或在读取时执行这些代码逻辑：</p><ul><li>在写入时执行：只要数据库系统在复制变更日志时检测到冲突，就会调用应用层的冲突处理程序。</li><li>在读取时执行：当检测到冲突时，所有冲突写入值都会暂时保存下来。下一次读取数据时，会将数据的多个版本读返回给应用层。应用层可能会提示用户或自动解决冲突， 井将最后的结果返回到数据库。</li></ul><h2 id="无主节点复制" tabindex="-1"><a class="header-anchor" href="#无主节点复制" aria-hidden="true">#</a> 无主节点复制</h2><p>客户端将写请求发送到多个节点上，读取时从多个节点上并行读取，以此检测和纠正某些过期数据。</p><h2 id="数据分区" tabindex="-1"><a class="header-anchor" href="#数据分区" aria-hidden="true">#</a> 数据分区</h2><blockquote><p>在不同系统中，分区有着不同的称呼，例如它对应于 MongoDB, Elasticsearch 和 SolrCloud 中的 shard, HBase 的 region, Bigtable 中的<br> tablet, Cassandra 和 Riak 中的 vnode ，以及 Couch base 中的 vBucket。总体而言，分区是最普遍的术语。</p></blockquote><p>采用数据分区的主要目的是提高可扩展性。不同的分区可以放在不同的节点上，这样一个大数据集可以分散在更多的磁盘上，查询负载也随之分布到更多的处理器上。</p><p>对单个分区进行查询时，每个节点对自己所在分区可以独立执行查询操作，因此添加更多的节点可以提高查询吞吐量。超大而复杂的查询尽管比较困难，但也可能做到跨节点的并行处理。</p><h3 id="数据分区与数据复制" tabindex="-1"><a class="header-anchor" href="#数据分区与数据复制" aria-hidden="true">#</a> 数据分区与数据复制</h3><p>分区通常与复制结合使用，即每个分区在多个节点都存有副本。这意味着某条记录属于特定的分区，而同样的内容会保存在不同的节点上以提高系统的容错性。</p><p>一个节点上可能存储了多个分区。每个分区都有自己的主副本，例如被分配给某节点，而从副本则分配在其他一些节点。一个节点可能即是某些分区的主副本，同时又是其他分区的从副本。</p><h3 id="键-值数据的分区" tabindex="-1"><a class="header-anchor" href="#键-值数据的分区" aria-hidden="true">#</a> 键－值数据的分区</h3><p>分区的主要目标是将数据和查询负载均匀分布在所有节点上。如果节点平均分担负载，那么理论上 10 个节点应该能够处理 10 倍的数据量和 10 倍于单个节点的读写吞吐量（忽略复制） 。</p><p>而如果分区不均匀，则会出现某些分区节点比其他分区承担更多的数据量或查询负载，称之为倾斜。倾斜会导致分区效率严重下降，在极端情况下，所有的负载可能会集中在一个分区节点上，这就意味着 10 个节点 9 个空闲，系统的瓶颈在最繁忙的那个节点上。这种负载严重不成比例的分区即成为系统热点。</p><h4 id="基于关键字区间分区" tabindex="-1"><a class="header-anchor" href="#基于关键字区间分区" aria-hidden="true">#</a> 基于关键字区间分区</h4><p>一种分区方式是为每个分区分配一段连续的关键字或者关键宇区间范围（以最小值和最大值来指示）。</p><p>关键字的区间段不一定非要均匀分布，这主要是因为数据本身可能就不均匀。</p><p>每个分区内可以按照关键字排序保存（参阅第 3 章的“ SSTables 和 LSM Trees ”）。这样可以轻松支持区间查询，即将关键字作为一个拼接起来的索引项从而一次查询得到多个相关记录。</p><p>然而，基于关键字的区间分区的缺点是某些访问模式会导致热点。如果关键字是时间戳，则分区对应于一个时间范围，所有的写入操作都集中在同一个分区（即当天的分区），这会导致该分区在写入时负载过高，而其他分区始终处于空闲状态。为了避免上述问题，需要使用时间戳以外的其他内容作为关键字的第一项。</p><h4 id="基于关键字晗希值分区" tabindex="-1"><a class="header-anchor" href="#基于关键字晗希值分区" aria-hidden="true">#</a> 基于关键字晗希值分区</h4><p>一且找到合适的关键宇 H 合希函数，就可以为每个分区分配一个哈希范围（而不是直接作用于关键宇范围），关键字根据其哈希值的范围划分到不同的分区中。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220303105925.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>这种方总可以很好地将关键字均匀地分配到多个分区中。分区边界可以是均匀间隔，也可以是伪随机选择（ 在这种情况下，该技术有时被称为一致性哈希） 。</p><p>然而，通过关键宇 II 合希进行分区，我们丧失了良好的区间查询特性。即使关键字相邻，但经过哈希之后会分散在不同的分区中，区间查询就失去了原有的有序相邻的特性。</p><h4 id="负载倾斜与热点" tabindex="-1"><a class="header-anchor" href="#负载倾斜与热点" aria-hidden="true">#</a> 负载倾斜与热点</h4><p>基于哈希的分区方能可以减轻热点，但无住做到完全避免。一个极端情况是，所有的读／写操作都是针对同一个关键字，则最终所有请求都将被路由到同一个分区。</p><p>一个简单的技术就是在关键字的开头或结尾处添加一个随机数。只需一个两位数的十进制随机数就可以将关键字的写操作分布到 100 个不同的关键字上，从而分配到不同的分区上。但是，随之而来的问题是，之后的任何读取都需要些额外的工作，必须从所有 100 个关键字中读取数据然后进行合井。因此通常只对少量的热点关键字附加随机数才有意义。</p><h3 id="分区与二级索引" tabindex="-1"><a class="header-anchor" href="#分区与二级索引" aria-hidden="true">#</a> 分区与二级索引</h3><p>二级索引通常不能唯一标识一条记录，而是用来加速特定值的查询。</p><p>二级索引带来的主要挑战是它们不能规整的地映射到分区中。有两种主要的方法来支持对二级索引进行分区：基于文档的分区和基于词条的分区。</p><h4 id="基于文档分区的二级索引" tabindex="-1"><a class="header-anchor" href="#基于文档分区的二级索引" aria-hidden="true">#</a> 基于文档分区的二级索引</h4><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220303111528.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在这种索引方法中，每个分区完全独立，各自维护自己的二级索引，且只负责自己分区内的文档而不关心其他分区中数据。每当需要写数据库时，包括添加，删除或更新文档等，只需要处理包含目标文档 ID 的那一个分区。因此文档分区索引也被称为本地索引，而不是全局索引。</p><p>这种查询分区数据库的方陆有时也称为分散／聚集，显然这种二级索引的查询代价高昂。即使采用了并行查询，也容易导致读延迟显著放大。尽管如此，它还是广泛用于实践： MongoDB 、Riak、Cassandra、Elasticsearch 、SolrCloud 和 VoltDB 都支持基于文档分区二级索引。</p><h4 id="基于词条的二级索引分区" tabindex="-1"><a class="header-anchor" href="#基于词条的二级索引分区" aria-hidden="true">#</a> 基于词条的二级索引分区</h4><p>可以对所有的数据构建全局索引，而不是每个分区维护自己的本地索引。</p><p>为避免成为瓶颈，不能将全局索引存储在一个节点上，否则就破坏了设计分区均衡的目标。所以，全局索引也必须进行分区，且可以与数据关键字采用不同的分区策略。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220303112708.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>可以直接通过关键词来全局划分索引，或者对其取哈希值。直接分区的好处是可以支持高效的区间查询；而采用哈希的方式则可以更均句的划分分区。</p><p>这种全局的词条分区相比于文档分区索引的主要优点是，它的读取更为高效，即它不需要采用 scatter/gather 对所有的分区都执行一遍查询。</p><p>然而全局索引的不利之处在于， 写入速度较慢且非常复杂，主要因为单个文档的更新时，里面可能会涉及多个二级索引，而二级索引的分区又可能完全不同甚至在不同的节点上，由此势必引人显著的写放大。</p><p>理想情况下，索引应该时刻保持最新，即写入的数据要立即反映在最新的索引上。但是，对于词条分区来讲，这需要一个跨多个相关分区的分布式事务支持，写入速度会受到极大的影响，所以现有的数据库都不支持同步更新二级索引。</p><h3 id="分区再均衡" tabindex="-1"><a class="header-anchor" href="#分区再均衡" aria-hidden="true">#</a> 分区再均衡</h3><p>随着时间的推移，数据库可能总会出现某些变化：</p><ul><li>查询压力增加，因此需要更多的 C PU 来处理负载。</li><li>数据规模增加，因此需要更多的磁盘和内存来存储数据。</li><li>节点可能出现故障，因此需要其他机器来接管失效的节点。</li></ul><p>所有这些变化都要求数据和请求可以从一个节点转移到另一个节点。这样一个迁移负载的过程称为再平衡（或者动态平衡）。无论对于哪种分区方案， 分区再平衡通常至少要满足：</p><ul><li>平衡之后，负载、数据存储、读写请求等应该在集群范围更均匀地分布。</li><li>再平衡执行过程中，数据库应该可以继续正常提供读写服务。</li><li>避免不必要的负载迁移，以加快动态再平衡，井尽量减少网络和磁盘 I/O 影响。</li></ul><h4 id="动态再平衡的策略" tabindex="-1"><a class="header-anchor" href="#动态再平衡的策略" aria-hidden="true">#</a> 动态再平衡的策略</h4><h5 id="为什么不用取模" tabindex="-1"><a class="header-anchor" href="#为什么不用取模" aria-hidden="true">#</a> 为什么不用取模？</h5><p>最好将哈希值划分为不同的区间范围，然后将每个区间分配给一个分区。</p><p>为什么不直接使用 mod，对节点数取模方怯的问题是，如果节点数 N 发生了变化，会导致很多关键字需要从现有的节点迁移到另一个节点。</p><h5 id="固定数量的分区" tabindex="-1"><a class="header-anchor" href="#固定数量的分区" aria-hidden="true">#</a> 固定数量的分区</h5><p>创建远超实际节点数的分区数，然后为每个节点分配多个分区。</p><p>接下来， 如果集群中添加了一个新节点，该新节点可以从每个现有的节点上匀走几个分区，直到分区再次达到全局平衡。</p><h5 id="动态分区" tabindex="-1"><a class="header-anchor" href="#动态分区" aria-hidden="true">#</a> 动态分区</h5><p>对于采用关键宇区间分区的数据库，如果边界设置有问题，最终可能会出现所有数据都挤在一个分区而其他分区基本为空，那么设定固定边界、固定数量的分区将非常不便：而手动去重新配置分区边界又非常繁琐。</p><p>因此， 一些数据库如 HBas e 和 RethinkDB 等采用了动态创建分区。当分区的数据增长超过一个可配的参数阔值（ HBase 上默认值是 lOGB ），它就拆分为两个分区，每个承担一半的数据量［26］。相反，如果大量数据被删除，并且分区缩小到某个阑值以下，则将其与相邻分区进行合井。</p><p>每个分区总是分配给一个节点，而每个节点可以承载多个分区，这点与固定数量的分区一样。当一个大的分区发生分裂之后，可以将其中的一半转移到其他某节点以平衡负载。</p><p>但是，需要注意的是，对于一个空的数据库， 因为没有任何先验知识可以帮助确定分区的边界，所以会从一个分区开始。可能数据集很小，但直到达到第一个分裂点之前，所有的写入操作都必须由单个节点来处理， 而其他节点则处于空闲状态。</p><h5 id="按节点比例分区" tabindex="-1"><a class="header-anchor" href="#按节点比例分区" aria-hidden="true">#</a> 按节点比例分区</h5><p>采用动态分区策略，拆分和合并操作使每个分区的大小维持在设定的最小值和最大值之间，因此分区的数量与数据集的大小成正比关系。另一方面，对于固定数量的分区方式，其每个分区的大小也与数据集的大小成正比。两种情况，分区的数量都与节点数无关。</p><p>Cassandra 和 Ketama 则采用了第三种方式，使分区数与集群节点数成正比关系。换句话说，每个节点具有固定数量的分区。此时， 当节点数不变时，每个分区的大小与数据集大小保持正比的增长关系； 当节点数增加时，分区则会调整变得更小。较大的数据量通常需要大量的节点来存储，因此这种方陆也使每个分区大小保持稳定。当一个</p><p>新节点加入集群时，它随机选择固定数量的现有分区进行分裂，然后拿走这些分区的一半数据量，将另一半数据留在原节点。随机选择分区边界的前提要求采用基于哈希分区（可以从哈希函数产生的数字范围里设置边界）</p><h4 id="自动与手动再平衡操作" tabindex="-1"><a class="header-anchor" href="#自动与手动再平衡操作" aria-hidden="true">#</a> 自动与手动再平衡操作</h4><p>全自动式再平衡会更加方便，它在正常维护之外所增加的操作很少。但是，也有可能出现结果难以预测的情况。再平衡总体讲是个比较昂贵的操作，它需要重新路由请求井将大量数据从一个节点迁移到另一个节点。万一执行过程中间出现异常，会使网络或节点的负载过重，井影响其他请求的性能。</p><p>将自动平衡与自动故障检测相结合也可能存在一些风险。例如，假设某个节点负载过重，对请求的响应暂时受到影响，而其他节点可能会得到结论：该节点已经失效；接下来激活自动平衡来转移其负载。客观上这会加重该节点、其他节点以及网络的负荷，可能会使总体情况变得更槽，甚至导致级联式的失效扩散。</p><h3 id="请求路由" tabindex="-1"><a class="header-anchor" href="#请求路由" aria-hidden="true">#</a> 请求路由</h3><p>处理策略</p><ol><li>允许客户端链接任意的节点（例如，采用循环式的负载均衡器）。如果某节点恰好拥有所请求的分区，贝 lj 直接处理该请求：否则，将请求转发到下一个合适的节点，接收答复，并将答复返回给客户端。</li><li>将所有客户端的请求都发送到一个路由层，由后者负责将请求转发到对应的分区节点上。路由层本身不处理任何请求，它仅充一个分区感知的负载均衡器。</li><li>客户端感知分区和节点分配关系。此时，客户端可以直接连接到目标节点，而不需要任何中介。</li></ol><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220304120137.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>许多分布式数据系统依靠独立的协调服务（如 ZooKeeper ）跟踪集群范围内的元数据。每个节点都向 ZooKeeper 中注册自己， ZooKeeper 维护了分区到节点的最终映射关系。其他参与者（如路由层或分区感知的客户端）可以向 ZooKeeper 订阅此信息。一旦分区发生了改变，或者添加、删除节点， ZooKeeper 就会主动通知路由层，这样使路由信息保持最新状态。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220304163629.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h2><p>事务中的所有读写是一个执行的整体，整事务要么成功（提交）、要么失败（中止或回滚）。如果失败，应用程序可以安全地重试。</p><h3 id="深入理解事务" tabindex="-1"><a class="header-anchor" href="#深入理解事务" aria-hidden="true">#</a> 深入理解事务</h3><p>ACID：原子性（ Atomicity ）， 一致性（ Consistency ），隔离性（ Isolation ）与持久性（ Durability ）</p><h3 id="若隔离级别" tabindex="-1"><a class="header-anchor" href="#若隔离级别" aria-hidden="true">#</a> 若隔离级别</h3><h3 id="串行化" tabindex="-1"><a class="header-anchor" href="#串行化" aria-hidden="true">#</a> 串行化</h3><h2 id="分布式系统的挑战" tabindex="-1"><a class="header-anchor" href="#分布式系统的挑战" aria-hidden="true">#</a> 分布式系统的挑战</h2><p><strong>所有可能出错的事情一定会出错</strong>。</p><p>分布式系统中可能发生各种问题：</p><ul><li><strong>不可靠的网络</strong>：当通过网络发送数据包时，数据包可能会丢失或者延迟；同样，回复也可能会丢失或延迟。所以如果没有收到回复，并不能确定消息是否发送成功。</li><li><strong>不可靠的时钟</strong>：节点的时钟可能会与其他节点存在明显的不同步（尽管尽最大努力设置了 NTP 服务器），时钟还可能会突然向前跳跃或者倒退， 依靠精确的时钟存在一些风险，没有特别简单的办法来精确测量时钟的偏差范围。</li><li>进程可能在执行过程中的任意时候遭遇长度未知的暂停（ 一个重要的原因是垃圾回收），结果它被其他节点宣告为失效，尽管后来又恢复执行，却对中间的暂停毫无所知。</li></ul><p>部分失效可能是分布式系统的关键特征。对于分布式环境，应该具备必要的容错能力。这样即使某些部件发生失效，系统整体还可以继续运行。</p><p>为了容忍错误，第一步是检测错误。多数系统没有检测节点是否发生故障的准确机制，因此分布式算法更多依靠超时来确定远程节点是否仍然可用。但是，超时无法区分网络和节点故障，且可变的网络延迟有时会导致节点被误判<br> 为宕机。此外，节点可能处于一种降级状态： 例如，由于驱动程序错误，千兆网络接口可能突然降到 l kb/s 的吞吐量 。这样一个处于“残废”的节点比彻底挂掉的故障节点更难处理。</p><p>检测到错误之后，让系统容忍失效也不容易。在典型的分布式环境下，没有全局变量， 没有共享内存，没有约定的尝试或其他跨节点的共享状态。节点甚至不太清楚现在的准确时间， 更不用说其他更高级的了。信息从一个节点流动到另一个节点只能是通过不可靠的网络来发送。单个节点无住安全的做出任何决策，而是需要多个节点之<br> 间的共识协议，井争取达到法定票数（通常为半数以上）。</p><h2 id="一致性和共识" tabindex="-1"><a class="header-anchor" href="#一致性和共识" aria-hidden="true">#</a> 一致性和共识</h2><p>分布式系统最重要的抽象之一就是共识： 所有的节点就某一项提议达成一致。</p><h3 id="一致性保证" tabindex="-1"><a class="header-anchor" href="#一致性保证" aria-hidden="true">#</a> 一致性保证</h3><p>分布式一致性则主要是针对延迟和故障等问题来协调副本之间的状态。</p><h3 id="可线性化" tabindex="-1"><a class="header-anchor" href="#可线性化" aria-hidden="true">#</a> 可线性化</h3><p>在最终一致性数据库中，同时查陶两个不同的副本可能会得到两个不同的答案。</p><p>线性化（一种流行的一致性模型） ： 其目标是使多副本对外看起来好像是单一副本，然后所有操作以原子方<br> 式运行，就像一个单线程程序操作变量一样。</p><p>在有些场景下，线性化对于保证系统正确工作至关重要。</p><p><strong>加锁与主节点选举</strong>：主从复制的系统需要确保有且只有一个主节点，否则会产生脑裂。选举新的主节点常见的方住是使用锁：即每个启动的节点都试图获得锁，其中只有一个可以成功即成为主节点 。不管锁具体如何实现，它必须满足可线性化：所有节点都必须同意哪个节点持有锁，否则就会出现问题。</p><p><strong>约束与唯一性保证</strong>：常见如关系型数据库中主键的约束，则需要线性化保证。其他如外键或属性约束，则并不要求一定线性化 。</p><p><strong>跨通道的时间依赖</strong>：</p><h4 id="实现线性化系统" tabindex="-1"><a class="header-anchor" href="#实现线性化系统" aria-hidden="true">#</a> 实现线性化系统</h4><p>线性化本质上意味着“表现得好像只有一个数据副本，且其上的所有操作都是原子的，所以最简单的方案自然是只用一个数据副本。</p><ul><li>主从复制（部分支持可线性化）：只有主节点承担数据写入，从节点则在各自节点上维护数据的备份副本。如果从主节点或者同步更新的从节点上读取，则可以满足线性化</li><li>共识算挂（可线性化）：共识协议通常内置一些措施来防止裂脑和过期的副本。</li><li>多主复制（不可线性化）：具有多主节点复制的系统通常无怯线性化的，主要由于它们同时在多个节点上执行并发写入，并将数据异步复制到其他节点。因此它们可能会产生冲突的写入。</li><li>无主复制（可能不可线性化）</li></ul><h4 id="线性化的代价" tabindex="-1"><a class="header-anchor" href="#线性化的代价" aria-hidden="true">#</a> 线性化的代价</h4><p>多主复制非常适合多数据中心。</p><p>如果两个数据中心之间发生网络中断，会发生什么情况？</p><p>基于多主复制的数据库，每个数据中心内都可以继续正常运行： 由于从一个数据中心到另一个数据中心的复制是异步，期间发生的写操作都暂存在本地队列，等网络恢复之后再继续同步。</p><p>与之对比，如果是主从复制，则主节点肯定位于其中的某一个数据中心。所有写请求和线性化读取都必须发送给主节点，因此，对于那些连接到非主节点所在数据中心的客户端，读写请求都必须通过数据中心之间的网络，同步发送到主节点所在的数据中。</p><p>对于这样的主从复制系统，数据中心之间的网络一旦中断，连接到从数据中心的客户端无怯再联系上主节点，也就无法完成任何数据库写入和线性化读取。从节点可以提供读服务，但内容可能是过期的（非线性化保证）。</p><h4 id="cap-理论" tabindex="-1"><a class="header-anchor" href="#cap-理论" aria-hidden="true">#</a> CAP 理论</h4><h3 id="顺序保证" tabindex="-1"><a class="header-anchor" href="#顺序保证" aria-hidden="true">#</a> 顺序保证</h3><p>因果关系对事件进行了某种排序（根据事件发生的原因－结果依赖关系）。线性化是将所有操作都放在唯一的、全局有序时间线上，而因果性则不同，它为我们提供了一个弱一致性模型： 允许存在某些井发事件，所以版本历史<br> 是一个包含多个分支与合井的时间线。因果一致性避免了线性化昂贵的协调开销，且对网络延迟的敏感性要低很多。</p><h3 id="分布式事务与共识" tabindex="-1"><a class="header-anchor" href="#分布式事务与共识" aria-hidden="true">#</a> 分布式事务与共识</h3><p>共识意味着就某一项提议，所有节点做出一致的决定，而且决定不可撤销。</p><p>如果系统只存在一个节点， 或者愿意把所有决策功能者都委托给某一个节点，那么事情就变得很简单。这和主从复制数据库的情形是一样的，即由主节点负责所有的决策事直，正因如此，这样的数据库可以提供线性化操作、H 住一性约束、完全有序的复制日志等。</p><p>然而，如果唯一的主节点发生故障，或者出现网络中断而导致主节点不可达，这样的系统就会陷入停顿状态。有以下三种基本思路来处理这种情况：</p><ul><li>系统服务停止，等待主节点恢复</li><li>人为介入选择新主节点，并重新配置系统使之生效</li><li>采用算 i 法来自动选择新的主节点。这需要一个共识算法</li></ul>',220),l=[d];function n(p,t){return i(),e("div",null,l)}const c=a(h,[["render",n],["__file","01.数据密集型应用系统设计笔记一.html.vue"]]);export{c as default};
