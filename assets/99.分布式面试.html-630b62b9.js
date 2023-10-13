import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o,c as n,a as e,b as i,d as r,w as h,e as a}from"./app-dc48b2dc.js";const c={},u=a('<h1 id="分布式面试总结" tabindex="-1"><a class="header-anchor" href="#分布式面试总结" aria-hidden="true">#</a> 分布式面试总结</h1><h2 id="分布式缓存" tabindex="-1"><a class="header-anchor" href="#分布式缓存" aria-hidden="true">#</a> 分布式缓存</h2><h3 id="redis-有什么数据类型-分别用于什么场景" tabindex="-1"><a class="header-anchor" href="#redis-有什么数据类型-分别用于什么场景" aria-hidden="true">#</a> Redis 有什么数据类型？分别用于什么场景</h3><table><thead><tr><th>数据类型</th><th>可以存储的值</th><th>操作</th></tr></thead><tbody><tr><td>STRING</td><td>字符串、整数或者浮点数</td><td>对整个字符串或者字符串的其中一部分执行操作<br> 对整数和浮点数执行自增或者自减操作</td></tr><tr><td>LIST</td><td>列表</td><td>从两端压入或者弹出元素<br> 读取单个或者多个元素<br> 进行修剪，只保留一个范围内的元素</td></tr><tr><td>SET</td><td>无序集合</td><td>添加、获取、移除单个元素<br> 检查一个元素是否存在于集合中<br> 计算交集、并集、差集<br> 从集合里面随机获取元素</td></tr><tr><td>HASH</td><td>包含键值对的无序散列表</td><td>添加、获取、移除单个键值对<br> 获取所有键值对<br> 检查某个键是否存在</td></tr><tr><td>ZSET</td><td>有序集合</td><td>添加、获取、删除元素<br> 根据分值范围或者成员来获取元素<br> 计算一个键的排名</td></tr></tbody></table>',4),p={href:"https://redislabs.com/ebook/part-1-getting-started/chapter-1-getting-to-know-redis/1-2-what-redis-data-structures-look-like/",target:"_blank",rel:"noopener noreferrer"},b=a('<h3 id="redis-的主从复制是如何实现的" tabindex="-1"><a class="header-anchor" href="#redis-的主从复制是如何实现的" aria-hidden="true">#</a> Redis 的主从复制是如何实现的</h3><ol><li>从服务器连接主服务器，发送 SYNC 命令；</li><li>主服务器接收到 SYNC 命名后，开始执行 BGSAVE 命令生成 RDB 文件并使用缓冲区记录此后执行的所有写命令；</li><li>主服务器 BGSAVE 执行完后，向所有从服务器发送快照文件，并在发送期间继续记录被执行的写命令；</li><li>从服务器收到快照文件后丢弃所有旧数据，载入收到的快照；</li><li>主服务器快照发送完毕后开始向从服务器发送缓冲区中的写命令；</li><li>从服务器完成对快照的载入，开始接收命令请求，并执行来自主服务器缓冲区的写命令；</li></ol><h3 id="redis-的-key-是如何寻址的" tabindex="-1"><a class="header-anchor" href="#redis-的-key-是如何寻址的" aria-hidden="true">#</a> Redis 的 key 是如何寻址的</h3><h4 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h4><p>（1）redis 中的每一个数据库，都由一个 redisDb 的结构存储。其中：</p>',5),f={href:"http://redisDb.id",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,"redisDb.dict 存储着该库所有的键值对数据。",-1),_=e("li",null,"redisDb.expires 保存着每一个键的过期时间。",-1),g={href:"http://redisDb.id",target:"_blank",rel:"noopener noreferrer"},v=a(`<p>（3）redis 的字典使用哈希表作为其底层实现。dict 类型使用的两个指向哈希表的指针，其中 0 号哈希表（ht[0]）主要用于存储数据库的所有键值，而 1 号哈希表主要用于程序对 0 号哈希表进行 rehash 时使用，rehash 一般是在添加新值时会触发，这里不做过多的赘述。所以 redis 中查找一个 key，其实就是对进行该 dict 结构中的 ht[0] 进行查找操作。</p><p>（4）既然是哈希，那么我们知道就会有哈希碰撞，那么当多个键哈希之后为同一个值怎么办呢？redis 采取链表的方式来存储多个哈希碰撞的键。也就是说，当根据 key 的哈希值找到该列表后，如果列表的长度大于 1，那么我们需要遍历该链表来找到我们所查找的 key。当然，一般情况下链表长度都为是 1，所以时间复杂度可看作 o(1)。</p><h4 id="寻址-key-的步骤" tabindex="-1"><a class="header-anchor" href="#寻址-key-的步骤" aria-hidden="true">#</a> 寻址 key 的步骤</h4><ol><li>当拿到一个 key 后，redis 先判断当前库的 0 号哈希表是否为空，即：if (dict-&gt;ht[0].size == 0)。如果为 true 直接返回 NULL。</li><li>判断该 0 号哈希表是否需要 rehash，因为如果在进行 rehash，那么两个表中者有可能存储该 key。如果正在进行 rehash，将调用一次<code>_dictRehashStep</code> 方法，<code>_dictRehashStep</code> 用于对数据库字典、以及哈希键的字典进行被动 rehash，这里不作赘述。</li><li>计算哈希表，根据当前字典与 key 进行哈希值的计算。</li><li>根据哈希值与当前字典计算哈希表的索引值。</li><li>根据索引值在哈希表中取出链表，遍历该链表找到 key 的位置。一般情况，该链表长度为 1。</li><li>当 ht[0] 查找完了之后，再进行了次 rehash 判断，如果未在 rehashing，则直接结束，否则对 ht[1]重复 345 步骤。</li></ol><h3 id="redis-的集群模式是如何实现的" tabindex="-1"><a class="header-anchor" href="#redis-的集群模式是如何实现的" aria-hidden="true">#</a> Redis 的集群模式是如何实现的？</h3><p>Redis Cluster 是 Redis 的分布式解决方案，在 Redis 3.0 版本正式推出的。</p><p>Redis Cluster 去中心化，每个节点保存数据和整个集群状态，每个节点都和其他所有节点连接。</p><h4 id="redis-cluster-节点分配" tabindex="-1"><a class="header-anchor" href="#redis-cluster-节点分配" aria-hidden="true">#</a> Redis Cluster 节点分配</h4><p>Redis Cluster 特点：</p><ol><li>所有的 redis 节点彼此互联(PING-PONG 机制)，内部使用二进制协议优化传输速度和带宽。</li><li>节点的 fail 是通过集群中超过半数的节点检测失效时才生效。</li><li>客户端与 redis 节点直连,不需要中间 proxy 层。客户端不需要连接集群所有节点，连接集群中任何一个可用节点即可。</li><li>redis-cluster 把所有的物理节点映射到[0-16383] 哈希槽 (hash slot)上（不一定是平均分配）,cluster 负责维护 node&lt;-&gt;slot&lt;-&gt;value。</li><li>Redis 集群预分好 16384 个桶，当需要在 Redis 集群中放置一个 key-value 时，根据 CRC16(key) mod 16384 的值，决定将一个 key 放到哪个桶中。</li></ol><h4 id="redis-cluster-主从模式" tabindex="-1"><a class="header-anchor" href="#redis-cluster-主从模式" aria-hidden="true">#</a> Redis Cluster 主从模式</h4><p>Redis Cluster 为了保证数据的高可用性，加入了主从模式。</p><p>一个主节点对应一个或多个从节点，主节点提供数据存取，从节点则是从主节点拉取数据备份。当这个主节点挂掉后，就会有这个从节点选取一个来充当主节点，从而保证集群不会挂掉。所以，在集群建立的时候，一定要为每个主节点都添加了从节点。</p><h4 id="redis-sentinel" tabindex="-1"><a class="header-anchor" href="#redis-sentinel" aria-hidden="true">#</a> Redis Sentinel</h4><p>Redis Sentinel 用于管理多个 Redis 服务器，它有三个功能：</p><ul><li><strong>监控（Monitoring）</strong> - Sentinel 会不断地检查你的主服务器和从服务器是否运作正常。</li><li><strong>提醒（Notification）</strong> - 当被监控的某个 Redis 服务器出现问题时， Sentinel 可以通过 API 向管理员或者其他应用程序发送通知。</li><li><strong>自动故障迁移（Automatic failover）</strong> - 当一个主服务器不能正常工作时， Sentinel 会开始一次自动故障迁移操作， 它会将失效主服务器的其中一个从服务器升级为新的主服务器， 并让失效主服务器的其他从服务器改为复制新的主服务器； 当客户端试图连接失效的主服务器时， 集群也会向客户端返回新主服务器的地址， 使得集群可以使用新主服务器代替失效服务器。</li></ul><p>Redis 集群中应该有奇数个节点，所以至少有三个节点。</p><p>哨兵监控集群中的主服务器出现故障时，需要根据 quorum 选举出一个哨兵来执行故障转移。选举需要 majority，即大多数哨兵是运行的（2 个哨兵的 majority=2，3 个哨兵的 majority=2，5 个哨兵的 majority=3，4 个哨兵的 majority=2）。</p><p>假设集群仅仅部署 2 个节点</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+         +----+
| M1 |---------| R1 |
| S1 |         | S2 |
+----+         +----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 M1 和 S1 所在服务器宕机，则哨兵只有 1 个，无法满足 majority 来进行选举，就不能执行故障转移。</p><h3 id="redis-如何实现分布式锁-zookeeper-如何实现分布式锁-比较二者优劣" tabindex="-1"><a class="header-anchor" href="#redis-如何实现分布式锁-zookeeper-如何实现分布式锁-比较二者优劣" aria-hidden="true">#</a> Redis 如何实现分布式锁？ZooKeeper 如何实现分布式锁？比较二者优劣？</h3><p>分布式锁的三种实现：</p><ul><li>基于数据库实现分布式锁；</li><li>基于缓存（Redis 等）实现分布式锁；</li><li>基于 Zookeeper 实现分布式锁；</li></ul><h4 id="数据库实现" tabindex="-1"><a class="header-anchor" href="#数据库实现" aria-hidden="true">#</a> 数据库实现</h4><h4 id="redis-实现" tabindex="-1"><a class="header-anchor" href="#redis-实现" aria-hidden="true">#</a> Redis 实现</h4><ol><li>获取锁的时候，使用 setnx 加锁，并使用 expire 命令为锁添加一个超时时间，超过该时间则自动释放锁，锁的 value 值为一个随机生成的 UUID，通过此在释放锁的时候进行判断。</li><li>获取锁的时候还设置一个获取的超时时间，若超过这个时间则放弃获取锁。</li><li>释放锁的时候，通过 UUID 判断是不是该锁，若是该锁，则执行 delete 进行锁释放。</li></ol><h4 id="zookeeper-实现" tabindex="-1"><a class="header-anchor" href="#zookeeper-实现" aria-hidden="true">#</a> ZooKeeper 实现</h4><ol><li>创建一个目录 mylock；</li><li>线程 A 想获取锁就在 mylock 目录下创建临时顺序节点；</li><li>获取 mylock 目录下所有的子节点，然后获取比自己小的兄弟节点，如果不存在，则说明当前线程顺序号最小，获得锁；</li><li>线程 B 获取所有节点，判断自己不是最小节点，设置监听比自己次小的节点；</li><li>线程 A 处理完，删除自己的节点，线程 B 监听到变更事件，判断自己是不是最小的节点，如果是则获得锁。</li></ol><h4 id="实现对比" tabindex="-1"><a class="header-anchor" href="#实现对比" aria-hidden="true">#</a> 实现对比</h4><p>ZooKeeper 具备高可用、可重入、阻塞锁特性，可解决失效死锁问题。<br> 但 ZooKeeper 因为需要频繁的创建和删除节点，性能上不如 Redis 方式。</p><h3 id="redis-的持久化方式-有什么优缺点-持久化实现原理" tabindex="-1"><a class="header-anchor" href="#redis-的持久化方式-有什么优缺点-持久化实现原理" aria-hidden="true">#</a> Redis 的持久化方式？有什么优缺点？持久化实现原理？</h3><h4 id="rdb-快照-snapshot" tabindex="-1"><a class="header-anchor" href="#rdb-快照-snapshot" aria-hidden="true">#</a> RDB 快照（snapshot）</h4><p>将存在于某一时刻的所有数据都写入到硬盘中。</p><h5 id="快照的原理" tabindex="-1"><a class="header-anchor" href="#快照的原理" aria-hidden="true">#</a> 快照的原理</h5><p>在默认情况下，Redis 将数据库快照保存在名字为 dump.rdb 的二进制文件中。你可以对 Redis 进行设置， 让它在“N 秒内数据集至少有 M 个改动”这一条件被满足时， 自动保存一次数据集。你也可以通过调用 SAVE 或者 BGSAVE，手动让 Redis 进行数据集保存操作。这种持久化方式被称为快照。</p><p>当 Redis 需要保存 dump.rdb 文件时， 服务器执行以下操作:</p><ul><li>Redis 创建一个子进程。</li><li>子进程将数据集写入到一个临时快照文件中。</li><li>当子进程完成对新快照文件的写入时，Redis 用新快照文件替换原来的快照文件，并删除旧的快照文件。</li></ul><p>这种工作方式使得 Redis 可以从写时复制（copy-on-write）机制中获益。</p><h5 id="快照的优点" tabindex="-1"><a class="header-anchor" href="#快照的优点" aria-hidden="true">#</a> 快照的优点</h5><ul><li>它保存了某个时间点的数据集，非常适用于数据集的备份。</li><li>很方便传送到另一个远端数据中心或者亚马逊的 S3（可能加密），非常适用于灾难恢复。</li><li>快照在保存 RDB 文件时父进程唯一需要做的就是 fork 出一个子进程，接下来的工作全部由子进程来做，父进程不需要再做其他 IO 操作，所以快照持久化方式可以最大化 redis 的性能。</li><li>与 AOF 相比，在恢复大的数据集的时候，DB 方式会更快一些。</li></ul><h5 id="快照的缺点" tabindex="-1"><a class="header-anchor" href="#快照的缺点" aria-hidden="true">#</a> 快照的缺点</h5><ul><li>如果你希望在 redis 意外停止工作（例如电源中断）的情况下丢失的数据最少的话，那么快照不适合你。</li><li>快照需要经常 fork 子进程来保存数据集到硬盘上。当数据集比较大的时候，fork 的过程是非常耗时的，可能会导致 Redis 在一些毫秒级内不能响应客户端的请求。</li></ul><h4 id="aof" tabindex="-1"><a class="header-anchor" href="#aof" aria-hidden="true">#</a> AOF</h4><p>AOF 持久化方式记录每次对服务器执行的写操作。当服务器重启的时候会重新执行这些命令来恢复原始的数据。</p><h4 id="aof-的原理" tabindex="-1"><a class="header-anchor" href="#aof-的原理" aria-hidden="true">#</a> AOF 的原理</h4><ul><li>Redis 创建一个子进程。</li><li>子进程开始将新 AOF 文件的内容写入到临时文件。</li><li>对于所有新执行的写入命令，父进程一边将它们累积到一个内存缓存中，一边将这些改动追加到现有 AOF 文件的末尾，这样样即使在重写的中途发生停机，现有的 AOF 文件也还是安全的。</li><li>当子进程完成重写工作时，它给父进程发送一个信号，父进程在接收到信号之后，将内存缓存中的所有数据追加到新 AOF 文件的末尾。</li><li>搞定！现在 Redis 原子地用新文件替换旧文件，之后所有命令都会直接追加到新 AOF 文件的末尾。</li></ul><h4 id="aof-的优点" tabindex="-1"><a class="header-anchor" href="#aof-的优点" aria-hidden="true">#</a> AOF 的优点</h4><ul><li>使用默认的每秒 fsync 策略，Redis 的性能依然很好(fsync 是由后台线程进行处理的,主线程会尽力处理客户端请求)，一旦出现故障，使用 AOF ，你最多丢失 1 秒的数据。</li><li>AOF 文件是一个只进行追加的日志文件，所以不需要写入 seek，即使由于某些原因(磁盘空间已满，写的过程中宕机等等)未执行完整的写入命令，你也也可使用 redis-check-aof 工具修复这些问题。</li><li>Redis 可以在 AOF 文件体积变得过大时，自动地在后台对 AOF 进行重写：重写后的新 AOF 文件包含了恢复当前数据集所需的最小命令集合。整个重写操作是绝对安全的。</li><li>AOF 文件有序地保存了对数据库执行的所有写入操作，这些写入操作以 Redis 协议的格式保存。因此 AOF 文件的内容非常容易被人读懂，对文件进行分析（parse）也很轻松。</li></ul><h4 id="aof-的缺点" tabindex="-1"><a class="header-anchor" href="#aof-的缺点" aria-hidden="true">#</a> AOF 的缺点</h4><ul><li>对于相同的数据集来说，AOF 文件的体积通常要大于 RDB 文件的体积。</li><li>根据所使用的 fsync 策略，AOF 的速度可能会慢于快照。在一般情况下，每秒 fsync 的性能依然非常高，而关闭 fsync 可以让 AOF 的速度和快照一样快，即使在高负荷之下也是如此。不过在处理巨大的写入载入时，快照可以提供更有保证的最大延迟时间（latency）。</li></ul><h3 id="redis-过期策略有哪些" tabindex="-1"><a class="header-anchor" href="#redis-过期策略有哪些" aria-hidden="true">#</a> Redis 过期策略有哪些？</h3><ul><li><strong>noeviction</strong> - 当内存使用达到阈值的时候，所有引起申请内存的命令会报错。</li><li><strong>allkeys-lru</strong> - 在主键空间中，优先移除最近未使用的 key。</li><li><strong>allkeys-random</strong> - 在主键空间中，随机移除某个 key。</li><li><strong>volatile-lru</strong> - 在设置了过期时间的键空间中，优先移除最近未使用的 key。</li><li><strong>volatile-random</strong> - 在设置了过期时间的键空间中，随机移除某个 key。</li><li><strong>volatile-ttl</strong> - 在设置了过期时间的键空间中，具有更早过期时间的 key 优先移除。</li></ul><h3 id="redis-和-memcached-有什么区别" tabindex="-1"><a class="header-anchor" href="#redis-和-memcached-有什么区别" aria-hidden="true">#</a> Redis 和 Memcached 有什么区别？</h3><p>两者都是非关系型内存键值数据库。有以下主要不同：</p><p><strong>数据类型</strong></p><ul><li>Memcached 仅支持字符串类型；</li><li>而 Redis 支持五种不同种类的数据类型，使得它可以更灵活地解决问题。</li></ul><p><strong>数据持久化</strong></p><ul><li>Memcached 不支持持久化；</li><li>Redis 支持两种持久化策略：RDB 快照和 AOF 日志。</li></ul><p><strong>分布式</strong></p><ul><li>Memcached 不支持分布式，只能通过在客户端使用像一致性哈希这样的分布式算法来实现分布式存储，这种方式在存储和查询时都需要先在客户端计算一次数据所在的节点。</li><li>Redis Cluster 实现了分布式的支持。</li></ul><p><strong>内存管理机制</strong></p><ul><li>Memcached 将内存分割成特定长度的块来存储数据，以完全解决内存碎片的问题，但是这种方式会使得内存的利用率不高，例如块的大小为 128 bytes，只存储 100 bytes 的数据，那么剩下的 28 bytes 就浪费掉了。</li><li>在 Redis 中，并不是所有数据都一直存储在内存中，可以将一些很久没用的 value 交换到磁盘。而 Memcached 的数据则会一直在内存中。</li></ul><h3 id="为什么单线程的-redis-性能反而优于多线程的-memcached" tabindex="-1"><a class="header-anchor" href="#为什么单线程的-redis-性能反而优于多线程的-memcached" aria-hidden="true">#</a> 为什么单线程的 Redis 性能反而优于多线程的 Memcached？</h3><p>Redis 快速的原因：</p><ol><li>绝大部分请求是纯粹的内存操作（非常快速）</li><li>采用单线程,避免了不必要的上下文切换和竞争条件</li><li>非阻塞 IO</li></ol><p>内部实现采用 epoll，采用了 epoll+自己实现的简单的事件框架。epoll 中的读、写、关闭、连接都转化成了事件，然后利用 epoll 的多路复用特性，绝不在 io 上浪费一点时间。</p><h2 id="分布式消息队列-mq" tabindex="-1"><a class="header-anchor" href="#分布式消息队列-mq" aria-hidden="true">#</a> 分布式消息队列（MQ）</h2><h3 id="为什么使用-mq" tabindex="-1"><a class="header-anchor" href="#为什么使用-mq" aria-hidden="true">#</a> 为什么使用 MQ？</h3><ul><li>异步处理 - 相比于传统的串行、并行方式，提高了系统吞吐量。</li><li>应用解耦 - 系统间通过消息通信，不用关心其他系统的处理。</li><li>流量削锋 - 可以通过消息队列长度控制请求量；可以缓解短时间内的高并发请求。</li><li>日志处理 - 解决大量日志传输。</li><li>消息通讯 - 消息队列一般都内置了高效的通信机制，因此也可以用在纯的消息通讯。比如实现点对点消息队列，或者聊天室等。</li></ul><h3 id="如何保证-mq-的高可用" tabindex="-1"><a class="header-anchor" href="#如何保证-mq-的高可用" aria-hidden="true">#</a> 如何保证 MQ 的高可用？</h3><h4 id="数据复制" tabindex="-1"><a class="header-anchor" href="#数据复制" aria-hidden="true">#</a> 数据复制</h4><ol><li>将所有 Broker 和待分配的 Partition 排序</li><li>将第 i 个 Partition 分配到第（i mod n）个 Broker 上</li><li>将第 i 个 Partition 的第 j 个 Replica 分配到第（(i + j) mode n）个 Broker 上</li></ol><h4 id="选举主服务器" tabindex="-1"><a class="header-anchor" href="#选举主服务器" aria-hidden="true">#</a> 选举主服务器</h4><h3 id="mq-有哪些常见问题-如何解决这些问题" tabindex="-1"><a class="header-anchor" href="#mq-有哪些常见问题-如何解决这些问题" aria-hidden="true">#</a> MQ 有哪些常见问题？如何解决这些问题？</h3><p>MQ 的常见问题有：</p><ol><li>消息的顺序问题</li><li>消息的重复问题</li></ol><h4 id="消息的顺序问题" tabindex="-1"><a class="header-anchor" href="#消息的顺序问题" aria-hidden="true">#</a> 消息的顺序问题</h4><p>消息有序指的是可以按照消息的发送顺序来消费。</p><p>假如生产者产生了 2 条消息：M1、M2，假定 M1 发送到 S1，M2 发送到 S2，如果要保证 M1 先于 M2 被消费，怎么做？</p><div align="center"><img src="http://upload-images.jianshu.io/upload_images/3101171-23145c8b554a0f2f.jpg"></div>`,81),k=e("p",null,"（1）保证生产者 - MQServer - 消费者是一对一对一的关系",-1),x=e("div",{align:"center"},[e("img",{src:"http://upload-images.jianshu.io/upload_images/3101171-034106d7e04c062d.jpg"})],-1),R=a('<ul><li>并行度就会成为消息系统的瓶颈（吞吐量不够）</li><li>更多的异常处理，比如：只要消费端出现问题，就会导致整个处理流程阻塞，我们不得不花费更多的精力来解决阻塞的问题。</li></ul><p>（2）通过合理的设计或者将问题分解来规避。</p><ul><li>不关注乱序的应用实际大量存在</li><li>队列无序并不意味着消息无序</li></ul><p>所以从业务层面来保证消息的顺序而不仅仅是依赖于消息系统，是一种更合理的方式。</p><h4 id="消息的重复问题" tabindex="-1"><a class="header-anchor" href="#消息的重复问题" aria-hidden="true">#</a> 消息的重复问题</h4><p>造成消息重复的根本原因是：网络不可达。</p><p>所以解决这个问题的办法就是绕过这个问题。那么问题就变成了：如果消费端收到两条一样的消息，应该怎样处理？</p><p>消费端处理消息的业务逻辑保持幂等性。只要保持幂等性，不管来多少条重复消息，最后处理的结果都一样。<br> 保证每条消息都有唯一编号且保证消息处理成功与去重表的日志同时出现。利用一张日志表来记录已经处理成功的消息的 ID，如果新到的消息 ID 已经在日志表中，那么就不再处理这条消息。</p><h3 id="kafka-activemq-rabbitmq-rocketmq-各有什么优缺点" tabindex="-1"><a class="header-anchor" href="#kafka-activemq-rabbitmq-rocketmq-各有什么优缺点" aria-hidden="true">#</a> Kafka, ActiveMQ, RabbitMQ, RocketMQ 各有什么优缺点？</h3><div align="center"><img src="http://upload-images.jianshu.io/upload_images/3101171-c26f4a3048c38af4.jpg"></div>',10),y=a('<h3 id="dubbo-的实现过程" tabindex="-1"><a class="header-anchor" href="#dubbo-的实现过程" aria-hidden="true">#</a> Dubbo 的实现过程？</h3><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/javaweb/distributed/rpc/dubbo/dubbo基本架构.png" width="500"></div><p>节点角色：</p><table><thead><tr><th>节点</th><th>角色说明</th></tr></thead><tbody><tr><td>Provider</td><td>暴露服务的服务提供方</td></tr><tr><td>Consumer</td><td>调用远程服务的服务消费方</td></tr><tr><td>Registry</td><td>服务注册与发现的注册中心</td></tr><tr><td>Monitor</td><td>统计服务的调用次数和调用时间的监控中心</td></tr><tr><td>Container</td><td>服务运行容器</td></tr></tbody></table><p>调用关系：</p><ol><li>务容器负责启动，加载，运行服务提供者。</li><li>服务提供者在启动时，向注册中心注册自己提供的服务。</li><li>服务消费者在启动时，向注册中心订阅自己所需的服务。</li><li>注册中心返回服务提供者地址列表给消费者，如果有变更，注册中心将基于长连接推送变更数据给消费者。</li><li>服务消费者，从提供者地址列表中，基于软负载均衡算法，选一台提供者进行调用，如果调用失败，再选另一台调用。</li><li>服务消费者和提供者，在内存中累计调用次数和调用时间，定时每分钟发送一次统计数据到监控中心。</li></ol><h3 id="dubbo-负载均衡策略有哪些" tabindex="-1"><a class="header-anchor" href="#dubbo-负载均衡策略有哪些" aria-hidden="true">#</a> Dubbo 负载均衡策略有哪些？</h3><h5 id="random" tabindex="-1"><a class="header-anchor" href="#random" aria-hidden="true">#</a> Random</h5><ul><li>随机，按权重设置随机概率。</li><li>在一个截面上碰撞的概率高，但调用量越大分布越均匀，而且按概率使用权重后也比较均匀，有利于动态调整提供者权重。</li></ul><h5 id="roundrobin" tabindex="-1"><a class="header-anchor" href="#roundrobin" aria-hidden="true">#</a> RoundRobin</h5><ul><li>轮循，按公约后的权重设置轮循比率。</li><li>存在慢的提供者累积请求的问题，比如：第二台机器很慢，但没挂，当请求调到第二台时就卡在那，久而久之，所有请求都卡在调到第二台上。</li></ul><h5 id="leastactive" tabindex="-1"><a class="header-anchor" href="#leastactive" aria-hidden="true">#</a> LeastActive</h5><ul><li>最少活跃调用数，相同活跃数的随机，活跃数指调用前后计数差。</li><li>使慢的提供者收到更少请求，因为越慢的提供者的调用前后计数差会越大。</li></ul><h5 id="consistenthash" tabindex="-1"><a class="header-anchor" href="#consistenthash" aria-hidden="true">#</a> ConsistentHash</h5>',14),A=e("li",null,"一致性 Hash，相同参数的请求总是发到同一提供者。",-1),C=e("li",null,"当某一台提供者挂时，原本发往该提供者的请求，基于虚拟节点，平摊到其它提供者，不会引起剧烈变动。",-1),F={href:"http://en.wikipedia.org/wiki/Consistent_hashing",target:"_blank",rel:"noopener noreferrer"},O=e("li",null,[i("缺省只对第一个参数 Hash，如果要修改，请配置 "),e("code",null,'<dubbo:parameter key="hash.arguments" value="0,1" />')],-1),B=e("li",null,[i("缺省用 160 份虚拟节点，如果要修改，请配置 "),e("code",null,'<dubbo:parameter key="hash.nodes" value="320" />')],-1),S=e("h3",{id:"dubbo-集群容错策略",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dubbo-集群容错策略","aria-hidden":"true"},"#"),i(" Dubbo 集群容错策略 ？")],-1),j=e("div",{align:"center"},[e("img",{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/java/javaweb/distributed/rpc/dubbo/dubbo集群容错.jpg"})],-1),D=e("h3",{id:"动态代理策略",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#动态代理策略","aria-hidden":"true"},"#"),i(" 动态代理策略？")],-1),P=e("p",null,"Dubbo 作为 RPC 框架，首先要完成的就是跨系统，跨网络的服务调用。消费方与提供方遵循统一的接口定义，消费方调用接口时，Dubbo 将其转换成统一格式的数据结构，通过网络传输，提供方根据规则找到接口实现，通过反射完成调用。也就是说，消费方获取的是对远程服务的一个代理(Proxy)，而提供方因为要支持不同的接口实现，需要一个包装层(Wrapper)。调用的过程大概是这样：",-1),E=e("div",{align:"center"},[e("img",{src:"https://oscimg.oschina.net/oscnet/bef19cd5a31b5ae13aff35a8cb4898faaf0.jpg"})],-1),I=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@SPI(&quot;javassist&quot;)
public interface ProxyFactory {

    @Adaptive({Constants.PROXY_KEY})
    &lt;T&gt; T getProxy(Invoker&lt;T&gt; invoker) throws RpcException;

    @Adaptive({Constants.PROXY_KEY})
    &lt;T&gt; Invoker&lt;T&gt; getInvoker(T proxy, Class&lt;T&gt; type, URL url) throws RpcException;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ProxyFactory 有两种实现方式，一种是基于 JDK 的代理实现，一种是基于 javassist 的实现。ProxyFactory 接口上定义了@SPI(&quot;javassist&quot;)，默认为 javassist 的实现。</p><h3 id="dubbo-支持哪些序列化协议-hessian-hessian-的数据结构" tabindex="-1"><a class="header-anchor" href="#dubbo-支持哪些序列化协议-hessian-hessian-的数据结构" aria-hidden="true">#</a> Dubbo 支持哪些序列化协议？Hessian？Hessian 的数据结构？</h3><ol><li>dubbo 序列化，阿里尚不成熟的 java 序列化实现。</li><li>hessian2 序列化：hessian 是一种跨语言的高效二进制的序列化方式，但这里实际不是原生的 hessian2 序列化，而是阿里修改过的 hessian lite，它是 dubbo RPC 默认启用的序列化方式。</li><li>json 序列化：目前有两种实现，一种是采用的阿里的 fastjson 库，另一种是采用 dubbo 中自已实现的简单 json 库，一般情况下，json 这种文本序列化性能不如二进制序列化。</li><li>java 序列化：主要是采用 JDK 自带的 java 序列化实现，性能很不理想。</li><li>Kryo 和 FST：Kryo 和 FST 的性能依然普遍优于 hessian 和 dubbo 序列化。</li></ol><p>Hessian 序列化与 Java 默认的序列化区别？</p><p>Hessian 是一个轻量级的 remoting on http 工具，采用的是 Binary RPC 协议，所以它很适合于发送二进制数据，同时又具有防火墙穿透能力。</p><ol><li>Hessian 支持跨语言串行</li><li>比 java 序列化具有更好的性能和易用性</li><li>支持的语言比较多</li></ol><h3 id="protoco-buffer-是什么" tabindex="-1"><a class="header-anchor" href="#protoco-buffer-是什么" aria-hidden="true">#</a> Protoco Buffer 是什么？</h3><p>Protocol Buffer 是 Google 出品的一种轻量 &amp; 高效的结构化数据存储格式，性能比 Json、XML 真的强！太！多！</p><p>Protocol Buffer 的序列化 &amp; 反序列化简单 &amp; 速度快的原因是：</p><ol><li>编码 / 解码 方式简单（只需要简单的数学运算 = 位移等等）</li><li>采用 Protocol Buffer 自身的框架代码 和 编译器 共同完成</li></ol><p>Protocol Buffer 的数据压缩效果好（即序列化后的数据量体积小）的原因是：</p><ol><li>采用了独特的编码方式，如 Varint、Zigzag 编码方式等等</li><li>采用 T - L - V 的数据存储方式：减少了分隔符的使用 &amp; 数据存储得紧凑</li></ol><h3 id="注册中心挂了可以继续通信吗" tabindex="-1"><a class="header-anchor" href="#注册中心挂了可以继续通信吗" aria-hidden="true">#</a> 注册中心挂了可以继续通信吗？</h3><p>可以。Dubbo 消费者在应用启动时会从注册中心拉取已注册的生产者的地址接口，并缓存在本地。每次调用时，按照本地存储的地址进行调用。</p><h3 id="zookeeper-原理是什么-zookeeper-有什么用" tabindex="-1"><a class="header-anchor" href="#zookeeper-原理是什么-zookeeper-有什么用" aria-hidden="true">#</a> ZooKeeper 原理是什么？ZooKeeper 有什么用？</h3><p>ZooKeeper 是一个分布式应用协调系统，已经用到了许多分布式项目中，用来完成统一命名服务、状态同步服务、集群管理、分布式应用配置项的管理等工作。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/javaweb/distributed/rpc/zookeeper/zookeeper-service.png"></div><ol><li>每个 Server 在内存中存储了一份数据；</li><li>Zookeeper 启动时，将从实例中选举一个 leader（Paxos 协议）；</li><li>Leader 负责处理数据更新等操作（Zab 协议）；</li><li>一个更新操作成功，当且仅当大多数 Server 在内存中成功修改数据。</li></ol><h3 id="netty-有什么用-nio-bio-aio-有什么用-有什么区别" tabindex="-1"><a class="header-anchor" href="#netty-有什么用-nio-bio-aio-有什么用-有什么区别" aria-hidden="true">#</a> Netty 有什么用？NIO/BIO/AIO 有什么用？有什么区别？</h3><p>Netty 是一个“网络通讯框架”。</p><p>Netty 进行事件处理的流程。<code>Channel</code>是连接的通道，是 ChannelEvent 的产生者，而<code>ChannelPipeline</code>可以理解为 ChannelHandler 的集合。</p><div align="center"><img src="https://camo.githubusercontent.com/5f7331d15c79fba29474c5be6e9e86db465637c3/687474703a2f2f7374617469632e6f736368696e612e6e65742f75706c6f6164732f73706163652f323031332f303932312f3137343033325f313872625f3139303539312e706e67"></div>`,23),M=e("p",null,"IO 的方式通常分为几种：",-1),w=e("ul",null,[e("li",null,"同步阻塞的 BIO"),e("li",null,"同步非阻塞的 NIO"),e("li",null,"异步非阻塞的 AIO")],-1),q=e("p",null,"在使用同步 I/O 的网络应用中，如果要同时处理多个客户端请求，或是在客户端要同时和多个服务器进行通讯，就必须使用多线程来处理。",-1),K=e("p",null,"NIO 基于 Reactor，当 socket 有流可读或可写入 socket 时，操作系统会相应的通知引用程序进行处理，应用再将流读取到缓冲区或写入操作系统。也就是说，这个时候，已经不是一个连接就要对应一个处理线程了，而是有效的请求，对应一个线程，当连接没有数据时，是没有工作线程来处理的。",-1),N=e("p",null,"与 NIO 不同，当进行读写操作时，只须直接调用 API 的 read 或 write 方法即可。这两种方法均为异步的，对于读操作而言，当有流可读取时，操作系统会将可读的流传入 read 方法的缓冲区，并通知应用程序；对于写操作而言，当操作系统将 write 方法传递的流写入完毕时，操作系统主动通知应用程序。 即可以理解为，read/write 方法都是异步的，完成后会主动调用回调函数。",-1),T={href:"https://blog.csdn.net/skiof007/article/details/52873421",target:"_blank",rel:"noopener noreferrer"},Z=e("h3",{id:"为什么要进行系统拆分-拆分不用-dubbo-可以吗",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#为什么要进行系统拆分-拆分不用-dubbo-可以吗","aria-hidden":"true"},"#"),i(" 为什么要进行系统拆分？拆分不用 Dubbo 可以吗？")],-1),z=e("p",null,"系统拆分从资源角度分为：应用拆分和数据库拆分。",-1),L=e("p",null,"从采用的先后顺序可分为：水平扩展、垂直拆分、业务拆分、水平拆分。",-1),H=e("div",{align:"center"},[e("img",{src:"http://misc.linkedkeeper.com/misc/img/blog/201804/linkedkeeper0_9c2ed2ed-6156-40f7-ad08-20af067047ca.jpg"})],-1),V=e("p",null,"当垂直应用越来越多，应用之间交互不可避免，将核心业务抽取出来，作为独立的服务，逐渐形成稳定的服务中心，使前端应用能更快速的响应多变的市场需求。此时，用于提高业务复用及整合的分布式服务框架(RPC)是关键。",-1),Q=e("p",null,"当服务越来越多，容量的评估，小服务资源的浪费等问题逐渐显现，此时需增加一个调度中心基于访问压力实时管理集群容量，提高集群利用率。此时，用于提高机器利用率的资源调度和治理中心(SOA)是关键。",-1),G=e("h3",{id:"dubbo-和-thrift-有什么区别",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dubbo-和-thrift-有什么区别","aria-hidden":"true"},"#"),i(" Dubbo 和 Thrift 有什么区别？")],-1),U=e("ul",null,[e("li",null,"Thrift 是跨语言的 RPC 框架。"),e("li",null,"Dubbo 支持服务治理，而 Thrift 不支持。")],-1),Y=e("h2",{id:"分布式锁基本原理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分布式锁基本原理","aria-hidden":"true"},"#"),i(" 分布式锁基本原理")],-1),J=e("p",null,"分布式锁有几种实现方式？实现的要点是什么？",-1),W=e("p",null,"分布式锁各方案有什么利弊？如何选择方案？为什么？",-1),X=e("p",null,"Redis 分布式锁如何保证可重入性？",-1),$=a("<p>【答题思路】</p><p>实现方式一般有：</p><ul><li>基于数据库实现： <ul><li>建一张表（t_dlock），关键字段有：<code>id</code>、<code>method_name</code>、<code>time</code>。</li><li>向表中插入记录成功，即为获取锁成功。需要注意的是，获取锁一般是通过自旋方式，并设置尝试次数，超过最大尝试次数，才判定获取锁失败。</li><li>删除记录，即为释放锁。</li><li>因为数据库没有淘汰机制，为了避免获取锁永不释放，应用需要自身实现定期检查，删除过期记录（根据 time 判断）。</li></ul></li><li>基于 Redis 实现 <ul><li>生成一个分布式 ID 作为 key，通过 <code>setnx</code> 写入</li><li>写入成功，即为获取锁成功。需要注意的是，获取锁一般是通过自旋方式，并设置尝试次数，超过最大尝试次数，才判定获取锁失败。</li><li>删除 key，即为获取锁失败。</li><li>Redis 自身有内存淘汰策略，所以只要设置 expire，就可以让 key 自动过期。</li></ul></li><li>基于 ZooKeeper 实现 <ul><li>创建一个节点，所有节点都 Watch 此节点。</li><li>任意节点的任意线程只要向这个节点创建临时子节点成功，即为获取锁成功。</li><li>由于创建临时子节点是原子性的，不存在竞态，不需要自旋尝试，性能很好。</li><li>因为 ZooKeeper 只要和节点断开会话，就会自动删除临时节点。即为删除锁。所以无需过期机制。</li></ul></li></ul><p>从实现方式可以看出，三种方案的对比：</p><ul><li>Mysql 方案性能最差，并且影响 Mysql 吞吐量。而且还要程序保证容错处理。不建议采用这种方案。</li><li>Redis 方案需要不断自旋尝试获取锁，应用会消耗一些性能开销。而且为了保证分布式锁的可重入性，需要设置对于所有节点、所有线程都唯一的分布式 ID，生成 ID 也需要一定的 CPU 开销。</li><li>ZooKeeper 方案实现最简单，最稳定。是推荐的方案。但是它也有一个问题：ZooKeeper 的主从架构，所有写都由 Master 节点负责，所以 ZooKeeper 自身有一定的性能瓶颈。</li></ul>",5);function ee(ie,ae){const l=d("ExternalLinkIcon"),t=d("RouterLink");return o(),n("div",null,[u,e("blockquote",null,[e("p",null,[e("a",p,[i("What Redis data structures look like"),r(l)])])]),b,e("ul",null,[e("li",null,[e("a",f,[i("redisDb.id"),r(l)]),i(" 存储着 redis 数据库以整数表示的号码。")]),m,_]),e("p",null,[i("（2）当 redis 服务器初始化时，会预先分配 16 个数据库（该数量可以通过配置文件配置），所有数据库保存到结构 redisServer 的一个成员 redisServer.db 数组中。当我们选择数据库 select number 时，程序直接通过 redisServer.db[number] 来切换数据库。有时候当程序需要知道自己是在哪个数据库时，直接读取 "),e("a",g,[i("redisDb.id"),r(l)]),i(" 即可。")]),v,i(" 解决方案： "),k,x,i(" 缺陷： "),R,i(" ## 分布式服务（RPC） "),y,e("ul",null,[A,C,e("li",null,[i("算法参见："),e("a",F,[i("http://en.wikipedia.org/wiki/Consistent_hashing"),r(l)])]),O,B]),S,j,i(' - **Failover** - 失败自动切换，当出现失败，重试其它服务器。通常用于读操作，但重试会带来更长延迟。可通过 retries="2" 来设置重试次数(不含第一次)。 - **Failfast** - 快速失败，只发起一次调用，失败立即报错。通常用于非幂等性的写操作，比如新增记录。 - **Failsafe** - 失败安全，出现异常时，直接忽略。通常用于写入审计日志等操作。 - **Failback** - 失败自动恢复，后台记录失败请求，定时重发。通常用于消息通知操作。 - **Forking** - 并行调用多个服务器，只要一个成功即返回。通常用于实时性要求较高的读操作，但需要浪费更多服务资源。可通过 forks="2" 来设置最大并行数。 - **Broadcast** - 播调用所有提供者，逐个调用，任意一台报错则报错。通常用于通知所有提供者更新缓存或日志等本地资源信息。 '),D,P,E,i(" 消费方的 Proxy 和提供方的 Wrapper 得以让 Dubbo 构建出复杂、统一的体系。而这种动态代理与包装也是通过基于 SPI 的插件方式实现的，它的接口就是**ProxyFactory**。 "),I,i(" > 参考：https://github.com/code4craft/netty-learning/blob/master/posts/ch1-overview.md "),M,w,q,K,N,e("blockquote",null,[e("p",null,[i("参考："),e("a",T,[i("https://blog.csdn.net/skiof007/article/details/52873421"),r(l)])])]),Z,z,L,H,i(" 是否使用服务依据实际业务场景来决定。 "),V,Q,G,U,Y,e("blockquote",null,[J,W,X,e("p",null,[i("详细内容请参考："),r(t,{to:"/15.%E5%88%86%E5%B8%83%E5%BC%8F/11.%E5%88%86%E5%B8%83%E5%BC%8F%E5%8D%8F%E5%90%8C/01.%E5%88%86%E5%B8%83%E5%BC%8F%E5%8D%8F%E5%90%8C%E7%BB%BC%E5%90%88/06.%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81.html"},{default:h(()=>[i("分布式锁")]),_:1})])]),$])}const de=s(c,[["render",ee],["__file","99.分布式面试.html.vue"]]);export{de as default};
