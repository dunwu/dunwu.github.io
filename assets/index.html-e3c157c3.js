import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as s,c as i,a as e,b as r,e as a,f as p}from"./app-eab0d091.js";const l={},d=p(`<h1 id="zookeeper-原理" tabindex="-1"><a class="header-anchor" href="#zookeeper-原理" aria-hidden="true">#</a> ZooKeeper 原理</h1><blockquote><p>ZooKeeper 是 Apache 的顶级项目。<strong>ZooKeeper 为分布式应用提供了高效且可靠的分布式协调服务，提供了诸如统一命名服务、配置管理和分布式锁等分布式的基础服务。在解决分布式数据一致性方面，ZooKeeper 并没有直接采用 Paxos 算法，而是采用了名为 ZAB 的一致性协议</strong>。</p><p>ZooKeeper 主要用来解决分布式集群中应用系统的一致性问题，它能提供基于类似于文件系统的目录节点树方式的数据存储。但是 ZooKeeper 并不是用来专门存储数据的，它的作用主要是用来<strong>维护和监控存储数据的状态变化。通过监控这些数据状态的变化，从而可以达到基于数据的集群管理</strong>。</p><p>很多大名鼎鼎的框架都基于 ZooKeeper 来实现分布式高可用，如：Dubbo、Kafka 等。</p><p>ZooKeeper 官方支持 Java 和 C 的 Client API。ZooKeeper 社区为大多数语言（.NET，python 等）提供非官方 API。</p></blockquote><h2 id="zookeeper-简介" tabindex="-1"><a class="header-anchor" href="#zookeeper-简介" aria-hidden="true">#</a> ZooKeeper 简介</h2><h3 id="zookeeper-是什么" tabindex="-1"><a class="header-anchor" href="#zookeeper-是什么" aria-hidden="true">#</a> ZooKeeper 是什么</h3><p>ZooKeeper 是 Apache 的顶级项目。<strong>ZooKeeper 为分布式应用提供了高效且可靠的分布式协调服务，提供了诸如统一命名服务、配置管理和分布式锁等分布式的基础服务。在解决分布式数据一致性方面，ZooKeeper 并没有直接采用 Paxos 算法，而是采用了名为 ZAB 的一致性协议</strong>。</p><p>ZooKeeper 主要用来解决分布式集群中应用系统的一致性问题，它能提供基于类似于文件系统的目录节点树方式的数据存储。但是 ZooKeeper 并不是用来专门存储数据的，它的作用主要是用来<strong>维护和监控存储数据的状态变化。通过监控这些数据状态的变化，从而可以达到基于数据的集群管理</strong>。</p><p>很多大名鼎鼎的框架都基于 ZooKeeper 来实现分布式高可用，如：Dubbo、Kafka 等。</p><h3 id="zookeeper-的应用场景" tabindex="-1"><a class="header-anchor" href="#zookeeper-的应用场景" aria-hidden="true">#</a> ZooKeeper 的应用场景</h3><ul><li>配置管理 <ul><li>集群节点可以通过中心源获取启动配置</li><li>更简单的部署</li></ul></li><li>分布式集群管理 <ul><li>节点加入/离开</li><li>节点的实时状态</li></ul></li><li>命名服务，如：DNS</li><li>分布式同步：如锁、栅栏、队列</li><li>分布式系统的选主</li><li>中心化和高可靠的数据注册</li></ul><h3 id="zookeeper-的特性" tabindex="-1"><a class="header-anchor" href="#zookeeper-的特性" aria-hidden="true">#</a> ZooKeeper 的特性</h3><p>ZooKeeper 具有以下特性：</p><ul><li><strong>顺序一致性</strong>：所有客户端看到的服务端数据模型都是一致的；从一个客户端发起的事务请求，最终都会严格按照其发起顺序被应用到 ZooKeeper 中。具体的实现可见：<a href="#%E5%8E%9F%E5%AD%90%E5%B9%BF%E6%92%AD">原子广播</a></li><li><strong>原子性</strong> - 所有事务请求的处理结果在整个集群中所有机器上的应用情况是一致的，即整个集群要么都成功应用了某个事务，要么都没有应用。 实现方式可见：<a href="#%E4%BA%8B%E5%8A%A1">事务</a></li><li><strong>单一视图</strong> - 无论客户端连接的是哪个 Zookeeper 服务器，其看到的服务端数据模型都是一致的。</li><li><strong>高性能</strong> - ZooKeeper 将<strong>数据全量存储在内存中</strong>，所以其性能很高。需要注意的是：由于 <strong>ZooKeeper 的所有更新和删除都是基于事务的</strong>，因此 ZooKeeper 在读多写少的应用场景中有性能表现较好，<strong>如果写操作频繁，性能会大大下滑</strong>。</li><li><strong>高可用</strong> - ZooKeeper 的高可用是基于副本机制实现的，此外 ZooKeeper 支持故障恢复，可见：<a href="#%E9%80%89%E4%B8%BE-Leader">选举 Leader</a></li></ul><h3 id="zookeeper-的设计目标" tabindex="-1"><a class="header-anchor" href="#zookeeper-的设计目标" aria-hidden="true">#</a> ZooKeeper 的设计目标</h3><ul><li>简单的数据模型：ZooKeeper 的数据模型是一个树形结构的文件系统，树中的节点被称为 <strong><code>znode</code></strong>。</li><li>可以构建集群：ZooKeeper 支持集群模式，可以通过伸缩性，来控制集群的吞吐量。需要注意的是：由于 ZooKeeper 采用一主多从架构，所以其写性能是有上限的，比较适合于读多写少的场景。</li><li>顺序访问：对于来自客户端的每个更新请求，Zookeeper 都会分配一个全局唯一的递增 ID，这个 ID 反映了所有事务请求的先后顺序。</li><li>高性能、高可用：ZooKeeper 将数据存全量储在内存中以保持高性能，并通过服务集群来实现高可用，由于 Zookeeper 的所有更新和删除都是基于事务的，所以其在读多写少的应用场景中有着很高的性能表现。</li></ul><h2 id="zookeeper-核心概念" tabindex="-1"><a class="header-anchor" href="#zookeeper-核心概念" aria-hidden="true">#</a> ZooKeeper 核心概念</h2><h3 id="服务" tabindex="-1"><a class="header-anchor" href="#服务" aria-hidden="true">#</a> 服务</h3><p>Zookeeper 服务是一个基于主从复制的高可用集群，集群中每个节点都存储了一份数据副本（内存中）。</p><p>客户端只会连接一个 ZooKeeper 服务器节点，并维持 TCP 连接。</p><h3 id="数据模型" tabindex="-1"><a class="header-anchor" href="#数据模型" aria-hidden="true">#</a> 数据模型</h3><p><strong>ZooKeeper 的数据模型是一个树形结构的文件系统</strong>。</p><p>树中的节点被称为 <strong><code>znode</code></strong>，其中根节点为 <code>/</code>，每个节点上都会保存自己的数据和节点信息。znode 可以用于存储数据，并且有一个与之相关联的 ACL（详情可见 <a href="#ACL">ACL</a>）。ZooKeeper 的设计目标是实现协调服务，而不是真的作为一个文件存储，因此 znode 存储数据的<strong>大小被限制在 1MB 以内</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/java/javaweb/distributed/rpc/zookeeper/zookeeper_1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>ZooKeeper 的数据访问具有原子性</strong>。其读写操作都是要么全部成功，要么全部失败。</p><p>znode 通过路径被引用。<strong>znode 节点路径必须是绝对路径</strong>。</p><p>znode 有两种类型：</p><ul><li><strong>临时的（ <code>EPHEMERAL</code> ）</strong> - 户端会话结束时，ZooKeeper 就会删除临时的 znode。不允许有子节点。</li><li><strong>持久的（<code>PERSISTENT</code> ）</strong> - 除非客户端主动执行删除操作，否则 ZooKeeper 不会删除持久的 znode。</li></ul><h3 id="节点信息" tabindex="-1"><a class="header-anchor" href="#节点信息" aria-hidden="true">#</a> 节点信息</h3><p>znode 上有一个<strong>顺序标志（ <code>SEQUENTIAL</code> ）</strong>。如果在创建 znode 时，设置了<strong>顺序标志（ <code>SEQUENTIAL</code> ）</strong>，那么 ZooKeeper 会使用计数器为 znode 添加一个单调递增的数值，即 <code>zxid</code>。ZooKeeper 正是利用 zxid 实现了严格的顺序访问控制能力。</p><p>每个 znode 节点在存储数据的同时，都会维护一个叫做 <code>Stat</code> 的数据结构，里面存储了关于该节点的全部状态信息。如下：</p><table><thead><tr><th><strong>状态属性</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>czxid</td><td>数据节点创建时的事务 ID</td></tr><tr><td>ctime</td><td>数据节点创建时的时间</td></tr><tr><td>mzxid</td><td>数据节点最后一次更新时的事务 ID</td></tr><tr><td><code>mtime</code></td><td>数据节点最后一次更新时的时间</td></tr><tr><td>pzxid</td><td>数据节点的子节点最后一次被修改时的事务 ID</td></tr><tr><td>cversion</td><td>子节点的更改次数</td></tr><tr><td>version</td><td>节点数据的更改次数</td></tr><tr><td>aversion</td><td>节点的 ACL 的更改次数</td></tr><tr><td>ephemeralOwner</td><td>如果节点是临时节点，则表示创建该节点的会话的 SessionID；如果节点是持久节点，则该属性值为 0</td></tr><tr><td>dataLength</td><td>数据内容的长度</td></tr><tr><td>numChildren</td><td>数据节点当前的子节点个数</td></tr></tbody></table><h3 id="集群角色" tabindex="-1"><a class="header-anchor" href="#集群角色" aria-hidden="true">#</a> 集群角色</h3><p>Zookeeper 集群是一个基于主从复制的高可用集群，集群中每个节点都存储了一份数据副本（内存中）。此外，每个服务器节点承担如下三种角色中的一种：</p><ul><li><strong>Leader</strong> - 它负责 <strong>发起并维护与各 Follwer 及 Observer 间的心跳。所有的写操作必须要通过 Leader 完成再由 Leader 将写操作广播给其它服务器</strong>。一个 Zookeeper 集群同一时间只会有一个实际工作的 Leader。</li><li><strong>Follower</strong> - 它会<strong>响应 Leader 的心跳。Follower 可直接处理并返回客户端的读请求，同时会将写请求转发给 Leader 处理，并且负责在 Leader 处理写请求时对请求进行投票</strong>。一个 Zookeeper 集群可能同时存在多个 Follower。</li><li><strong>Observer</strong> - 角色与 Follower 类似，但是无投票权。</li></ul><p>客户端可以从任意 ZooKeeper 服务器节点读取数据，但只能通过 Leader 服务写数据并需要半数以上 Follower 的 ACK，才算写入成功。记住这个重要的知识点，下文会详细讲述。</p><h3 id="acl" tabindex="-1"><a class="header-anchor" href="#acl" aria-hidden="true">#</a> ACL</h3><p><strong>ZooKeeper 采用 ACL（Access Control Lists）策略来进行权限控制</strong>。</p><p>每个 znode 创建时都会带有一个 ACL 列表，用于决定谁可以对它执行何种操作。</p><p>ACL 依赖于 ZooKeeper 的客户端认证机制。ZooKeeper 提供了以下几种认证方式：</p><ul><li><strong>digest</strong> - 用户名和密码 来识别客户端</li><li><strong>sasl</strong> - 通过 kerberos 来识别客户端</li><li><strong>ip</strong> - 通过 IP 来识别客户端</li></ul><p>ZooKeeper 定义了如下五种权限：</p><ul><li><strong>CREATE</strong> - 允许创建子节点；</li><li><strong>READ</strong> - 允许从节点获取数据并列出其子节点；</li><li><strong>WRITE</strong> - 允许为节点设置数据；</li><li><strong>DELETE</strong> - 允许删除子节点；</li><li><strong>ADMIN</strong> - 允许为节点设置权限。</li></ul><h2 id="zookeeper-工作原理" tabindex="-1"><a class="header-anchor" href="#zookeeper-工作原理" aria-hidden="true">#</a> ZooKeeper 工作原理</h2><h3 id="读操作" tabindex="-1"><a class="header-anchor" href="#读操作" aria-hidden="true">#</a> 读操作</h3><p><strong>Leader/Follower/Observer 都可直接处理读请求，从本地内存中读取数据并返回给客户端即可</strong>。</p><p>由于处理读请求不需要服务器之间的交互，<strong>Follower/Observer 越多，整体系统的读请求吞吐量越大</strong>，也即读性能越好。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/java/javaweb/distributed/rpc/zookeeper/zookeeper_3.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="写操作" tabindex="-1"><a class="header-anchor" href="#写操作" aria-hidden="true">#</a> 写操作</h3><p>所有的写请求实际上都要交给 Leader 处理。Leader 将写请求以事务形式发给所有 Follower 并等待 ACK，一旦收到半数以上 Follower 的 ACK，即认为写操作成功。</p><h4 id="写-leader" tabindex="-1"><a class="header-anchor" href="#写-leader" aria-hidden="true">#</a> 写 Leader</h4><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/java/javaweb/distributed/rpc/zookeeper/zookeeper_4.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>由上图可见，通过 Leader 进行写操作，主要分为五步：</p><ol><li>客户端向 Leader 发起写请求</li><li>Leader 将写请求以事务 Proposal 的形式发给所有 Follower 并等待 ACK</li><li>Follower 收到 Leader 的事务 Proposal 后返回 ACK</li><li>Leader 得到过半数的 ACK（Leader 对自己默认有一个 ACK）后向所有的 Follower 和 Observer 发送 Commmit</li><li>Leader 将处理结果返回给客户端</li></ol><blockquote><p>注意</p><ul><li>Leader 不需要得到 Observer 的 ACK，即 Observer 无投票权。</li><li>Leader 不需要得到所有 Follower 的 ACK，只要收到过半的 ACK 即可，同时 Leader 本身对自己有一个 ACK。上图中有 4 个 Follower，只需其中两个返回 ACK 即可，因为 $$(2+1) / (4+1) &gt; 1/2$$ 。</li><li>Observer 虽然无投票权，但仍须同步 Leader 的数据从而在处理读请求时可以返回尽可能新的数据。</li></ul></blockquote><h4 id="写-follower-observer" tabindex="-1"><a class="header-anchor" href="#写-follower-observer" aria-hidden="true">#</a> 写 Follower/Observer</h4><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/java/javaweb/distributed/rpc/zookeeper/zookeeper_5.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>Follower/Observer 均可接受写请求，但不能直接处理，而需要将写请求转发给 Leader 处理。</li><li>除了多了一步请求转发，其它流程与直接写 Leader 无任何区别。</li></ul><h3 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h3><p>对于来自客户端的每个更新请求，ZooKeeper 具备严格的顺序访问控制能力。</p><p><strong>为了保证事务的顺序一致性，ZooKeeper 采用了递增的事务 id 号（zxid）来标识事务</strong>。</p><p><strong>Leader 服务会为每一个 Follower 服务器分配一个单独的队列，然后将事务 Proposal 依次放入队列中，并根据 FIFO(先进先出) 的策略进行消息发送</strong>。Follower 服务在接收到 Proposal 后，会将其以事务日志的形式写入本地磁盘中，并在写入成功后反馈给 Leader 一个 Ack 响应。<strong>当 Leader 接收到超过半数 Follower 的 Ack 响应后，就会广播一个 Commit 消息给所有的 Follower 以通知其进行事务提交</strong>，之后 Leader 自身也会完成对事务的提交。而每一个 Follower 则在接收到 Commit 消息后，完成事务的提交。</p><p>所有的提议（<strong><code>proposal</code></strong>）都在被提出的时候加上了 zxid。zxid 是一个 64 位的数字，它的高 32 位是 <strong><code>epoch</code></strong> 用来标识 Leader 关系是否改变，每次一个 Leader 被选出来，它都会有一个新的 epoch，标识当前属于那个 leader 的统治时期。低 32 位用于递增计数。</p><p>详细过程如下：</p><ol><li>Leader 等待 Server 连接；</li><li>Follower 连接 Leader，将最大的 zxid 发送给 Leader；</li><li>Leader 根据 Follower 的 zxid 确定同步点；</li><li>完成同步后通知 follower 已经成为 uptodate 状态；</li><li>Follower 收到 uptodate 消息后，又可以重新接受 client 的请求进行服务了。</li></ol><h3 id="观察" tabindex="-1"><a class="header-anchor" href="#观察" aria-hidden="true">#</a> 观察</h3><p><strong>ZooKeeper 允许客户端监听它关心的 znode，当 znode 状态发生变化（数据变化、子节点增减变化）时，ZooKeeper 服务会通知客户端</strong>。</p><p>客户端和服务端保持连接一般有两种形式：</p><ul><li><strong>客户端向服务端不断轮询</strong></li><li><strong>服务端向客户端推送状态</strong></li></ul><p>Zookeeper 的选择是服务端主动推送状态，也就是观察机制（ <code>Watch</code> ）。</p><p>ZooKeeper 的观察机制允许用户在指定节点上针对感兴趣的事件注册监听，当事件发生时，监听器会被触发，并将事件信息推送到客户端。</p><ul><li>监听器实时触发</li><li>监听器总是有序的</li><li>创建新的 znode 数据前，客户端就能收到监听事件。</li></ul><p>客户端使用 <code>getData</code> 等接口获取 znode 状态时传入了一个用于处理节点变更的回调，那么服务端就会主动向客户端推送节点的变更：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> path<span class="token punctuation">,</span> <span class="token class-name">Watcher</span> watcher<span class="token punctuation">,</span> <span class="token class-name">Stat</span> stat<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从这个方法中传入的 <code>Watcher</code> 对象实现了相应的 <code>process</code> 方法，每次对应节点出现了状态的改变，<code>WatchManager</code> 都会通过以下的方式调用传入 <code>Watcher</code> 的方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Watcher</span><span class="token punctuation">&gt;</span></span> <span class="token function">triggerWatch</span><span class="token punctuation">(</span><span class="token class-name">String</span> path<span class="token punctuation">,</span> <span class="token class-name">EventType</span> type<span class="token punctuation">,</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Watcher</span><span class="token punctuation">&gt;</span></span> supress<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">WatchedEvent</span> e <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WatchedEvent</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token class-name">KeeperState<span class="token punctuation">.</span>SyncConnected</span><span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Watcher</span><span class="token punctuation">&gt;</span></span> watchers<span class="token punctuation">;</span>
    <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        watchers <span class="token operator">=</span> watchTable<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Watcher</span> w <span class="token operator">:</span> watchers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        w<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> watchers<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Zookeeper 中的所有数据其实都是由一个名为 <code>DataTree</code> 的数据结构管理的，所有的读写数据的请求最终都会改变这颗树的内容，在发出读请求时可能会传入 <code>Watcher</code> 注册一个回调函数，而写请求就可能会触发相应的回调，由 <code>WatchManager</code> 通知客户端数据的变化。</p><p>通知机制的实现其实还是比较简单的，通过读请求设置 <code>Watcher</code> 监听事件，写请求在触发事件时就能将通知发送给指定的客户端。</p><h3 id="会话" tabindex="-1"><a class="header-anchor" href="#会话" aria-hidden="true">#</a> 会话</h3><p><strong>ZooKeeper 客户端通过 TCP 长连接连接到 ZooKeeper 服务集群</strong>。<strong>会话 (Session) 从第一次连接开始就已经建立，之后通过心跳检测机制来保持有效的会话状态</strong>。通过这个连接，客户端可以发送请求并接收响应，同时也可以接收到 Watch 事件的通知。</p><p>每个 ZooKeeper 客户端配置中都配置了 ZooKeeper 服务器集群列表。启动时，客户端会遍历列表去尝试建立连接。如果失败，它会尝试连接下一个服务器，依次类推。</p><p>一旦一台客户端与一台服务器建立连接，这台服务器会为这个客户端创建一个新的会话。<strong>每个会话都会有一个超时时间，若服务器在超时时间内没有收到任何请求，则相应会话被视为过期</strong>。一旦会话过期，就无法再重新打开，且任何与该会话相关的临时 znode 都会被删除。</p><p>通常来说，会话应该长期存在，而这需要由客户端来保证。客户端可以通过心跳方式（ping）来保持会话不过期。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200602182239.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>ZooKeeper 的会话具有四个属性：</p><ul><li><code>sessionID</code> - 会话 ID，唯一标识一个会话，每次客户端创建新的会话时，Zookeeper 都会为其分配一个全局唯一的 sessionID。</li><li><code>TimeOut</code> - 会话超时时间，客户端在构造 Zookeeper 实例时，会配置 sessionTimeout 参数用于指定会话的超时时间，Zookeeper 客户端向服务端发送这个超时时间后，服务端会根据自己的超时时间限制最终确定会话的超时时间。</li><li><code>TickTime</code> - 下次会话超时时间点，为了便于 Zookeeper 对会话实行”分桶策略”管理，同时为了高效低耗地实现会话的超时检查与清理，Zookeeper 会为每个会话标记一个下次会话超时时间点，其值大致等于当前时间加上 TimeOut。</li><li><code>isClosing</code> - 标记一个会话是否已经被关闭，当服务端检测到会话已经超时失效时，会将该会话的 isClosing 标记为”已关闭”，这样就能确保不再处理来自该会话的心情求了。</li></ul><p>Zookeeper 的会话管理主要是通过 <code>SessionTracker</code> 来负责，其采用了<strong>分桶策略</strong>（将类似的会话放在同一区块中进行管理）进行管理，以便 Zookeeper 对会话进行不同区块的隔离处理以及同一区块的统一处理。</p><h2 id="zab-协议" tabindex="-1"><a class="header-anchor" href="#zab-协议" aria-hidden="true">#</a> ZAB 协议</h2><blockquote><p>ZooKeeper 并没有直接采用 Paxos 算法，而是采用了名为 ZAB 的一致性协议。<strong><em>ZAB 协议不是 Paxos 算法</em></strong>，只是比较类似，二者在操作上并不相同。Multi-Paxos 实现的是一系列值的共识，不关心最终达成共识的值是什么，不关心各值的顺序。而 ZooKeeper 需要确保操作的顺序性。</p><p>ZAB 协议是 Zookeeper 专门设计的一种<strong>支持崩溃恢复的原子广播协议</strong>。</p><p>ZAB 协议是 ZooKeeper 的数据一致性和高可用解决方案。</p></blockquote><p>ZAB 协议定义了两个可以<strong>无限循环</strong>的流程：</p><ul><li><strong><code>选举 Leader</code></strong> - 用于故障恢复，从而保证高可用。</li><li><strong><code>原子广播</code></strong> - 用于主从同步，从而保证数据一致性。</li></ul><h3 id="选举-leader" tabindex="-1"><a class="header-anchor" href="#选举-leader" aria-hidden="true">#</a> 选举 Leader</h3><blockquote><p><strong>ZooKeeper 的故障恢复</strong></p><p>ZooKeeper 集群采用一主（称为 Leader）多从（称为 Follower）模式，主从节点通过副本机制保证数据一致。</p><ul><li><strong>如果 Follower 节点挂了</strong> - ZooKeeper 集群中的每个节点都会单独在内存中维护自身的状态，并且各节点之间都保持着通讯，<strong>只要集群中有半数机器能够正常工作，那么整个集群就可以正常提供服务</strong>。</li><li><strong>如果 Leader 节点挂了</strong> - 如果 Leader 节点挂了，系统就不能正常工作了。此时，需要通过 ZAB 协议的选举 Leader 机制来进行故障恢复。</li></ul><p>ZAB 协议的选举 Leader 机制简单来说，就是：基于过半选举机制产生新的 Leader，之后其他机器将从新的 Leader 上同步状态，当有过半机器完成状态同步后，就退出选举 Leader 模式，进入原子广播模式。</p></blockquote><h4 id="术语" tabindex="-1"><a class="header-anchor" href="#术语" aria-hidden="true">#</a> 术语</h4><ul><li><strong>myid</strong> - 每个 Zookeeper 服务器，都需要在数据文件夹下创建一个名为 myid 的文件，该文件包含整个 Zookeeper 集群唯一的 ID（整数）。</li><li><strong>zxid</strong> - 类似于 RDBMS 中的事务 ID，用于标识一次更新操作的 Proposal ID。为了保证顺序性，该 zxid 必须单调递增。因此 Zookeeper 使用一个 64 位的数来表示，高 32 位是 Leader 的 epoch，从 1 开始，每次选出新的 Leader，epoch 加一。低 32 位为该 epoch 内的序号，每次 epoch 变化，都将低 32 位的序号重置。这样保证了 zxid 的全局递增性。</li></ul><h4 id="服务器状态" tabindex="-1"><a class="header-anchor" href="#服务器状态" aria-hidden="true">#</a> 服务器状态</h4><ul><li><strong><em>LOOKING</em></strong> - 不确定 Leader 状态。该状态下的服务器认为当前集群中没有 Leader，会发起 Leader 选举</li><li><strong><em>FOLLOWING</em></strong> - 跟随者状态。表明当前服务器角色是 Follower，并且它知道 Leader 是谁</li><li><strong><em>LEADING</em></strong> - 领导者状态。表明当前服务器角色是 Leader，它会维护与 Follower 间的心跳</li><li><strong><em>OBSERVING</em></strong> - 观察者状态。表明当前服务器角色是 Observer，与 Folower 唯一的不同在于不参与选举，也不参与集群写操作时的投票</li></ul><h4 id="选票数据结构" tabindex="-1"><a class="header-anchor" href="#选票数据结构" aria-hidden="true">#</a> 选票数据结构</h4><p>每个服务器在进行领导选举时，会发送如下关键信息</p><ul><li><strong><em>logicClock</em></strong> - 每个服务器会维护一个自增的整数，名为 logicClock，它表示这是该服务器发起的第多少轮投票</li><li><strong><em>state</em></strong> - 当前服务器的状态</li><li><strong><em>self_id</em></strong> - 当前服务器的 myid</li><li><strong><em>self_zxid</em></strong> - 当前服务器上所保存的数据的最大 zxid</li><li><strong><em>vote_id</em></strong> - 被推举的服务器的 myid</li><li><strong><em>vote_zxid</em></strong> - 被推举的服务器上所保存的数据的最大 zxid</li></ul><h4 id="投票流程" tabindex="-1"><a class="header-anchor" href="#投票流程" aria-hidden="true">#</a> 投票流程</h4><p>（1）<strong>自增选举轮次</strong> - Zookeeper 规定所有有效的投票都必须在同一轮次中。每个服务器在开始新一轮投票时，会先对自己维护的 logicClock 进行自增操作。</p><p>（2）<strong>初始化选票</strong> - 每个服务器在广播自己的选票前，会将自己的投票箱清空。该投票箱记录了所收到的选票。例：服务器 2 投票给服务器 3，服务器 3 投票给服务器 1，则服务器 1 的投票箱为(2, 3), (3, 1), (1, 1)。票箱中只会记录每一投票者的最后一票，如投票者更新自己的选票，则其它服务器收到该新选票后会在自己票箱中更新该服务器的选票。</p><p>（3）<strong>发送初始化选票</strong> - 每个服务器最开始都是通过广播把票投给自己。</p><p>（4）<strong>接收外部投票</strong> - 服务器会尝试从其它服务器获取投票，并记入自己的投票箱内。如果无法获取任何外部投票，则会确认自己是否与集群中其它服务器保持着有效连接。如果是，则再次发送自己的投票；如果否，则马上与之建立连接。</p><p>（5）<strong>判断选举轮次</strong> - 收到外部投票后，首先会根据投票信息中所包含的 logicClock 来进行不同处理</p><ul><li>外部投票的 logicClock 大于自己的 logicClock。说明该服务器的选举轮次落后于其它服务器的选举轮次，立即清空自己的投票箱并将自己的 logicClock 更新为收到的 logicClock，然后再对比自己之前的投票与收到的投票以确定是否需要变更自己的投票，最终再次将自己的投票广播出去。</li><li>外部投票的 logicClock 小于自己的 logicClock。当前服务器直接忽略该投票，继续处理下一个投票。</li><li>外部投票的 logickClock 与自己的相等。当时进行选票 PK。</li></ul><p>（6）<strong>选票 PK</strong> - 选票 PK 是基于<code>(self_id, self_zxid)</code> 与 <code>(vote_id, vote_zxid)</code> 的对比</p><ul><li>外部投票的 logicClock 大于自己的 logicClock，则将自己的 logicClock 及自己的选票的 logicClock 变更为收到的 logicClock</li><li>若 logicClock 一致，则对比二者的 vote_zxid，若外部投票的 vote_zxid 比较大，则将自己的票中的 vote_zxid 与 vote_myid 更新为收到的票中的 vote_zxid 与 vote_myid 并广播出去，另外将收到的票及自己更新后的票放入自己的票箱。如果票箱内已存在(self_myid, self_zxid)相同的选票，则直接覆盖</li><li>若二者 vote_zxid 一致，则比较二者的 vote_myid，若外部投票的 vote_myid 比较大，则将自己的票中的 vote_myid 更新为收到的票中的 vote_myid 并广播出去，另外将收到的票及自己更新后的票放入自己的票箱</li></ul><p>（7）<strong>统计选票</strong> - 如果已经确定有过半服务器认可了自己的投票（可能是更新后的投票），则终止投票。否则继续接收其它服务器的投票。</p><p>（8）<strong>更新服务器状态</strong> - 投票终止后，服务器开始更新自身状态。若过半的票投给了自己，则将自己的服务器状态更新为 LEADING，否则将自己的状态更新为 FOLLOWING</p><p>通过以上流程分析，我们不难看出：要使 Leader 获得多数 Server 的支持，则 <strong>ZooKeeper 集群节点数必须是奇数。且存活的节点数目不得少于 <code>N + 1</code></strong> 。</p><p>每个 Server 启动后都会重复以上流程。在恢复模式下，如果是刚从崩溃状态恢复的或者刚启动的 server 还会从磁盘快照中恢复数据和会话信息，zk 会记录事务日志并定期进行快照，方便在恢复时进行状态恢复。</p><h3 id="原子广播-atomic-broadcast" tabindex="-1"><a class="header-anchor" href="#原子广播-atomic-broadcast" aria-hidden="true">#</a> 原子广播（Atomic Broadcast）</h3><p><strong>ZooKeeper 通过副本机制来实现高可用</strong>。</p><p>那么，ZooKeeper 是如何实现副本机制的呢？答案是：ZAB 协议的原子广播。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/java/javaweb/distributed/rpc/zookeeper/zookeeper_3.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>ZAB 协议的原子广播要求：</p><p><strong><em>所有的写请求都会被转发给 Leader，Leader 会以原子广播的方式通知 Follow。当半数以上的 Follow 已经更新状态持久化后，Leader 才会提交这个更新，然后客户端才会收到一个更新成功的响应</em></strong>。这有些类似数据库中的两阶段提交协议。</p><p>在整个消息的广播过程中，Leader 服务器会每个事务请求生成对应的 Proposal，并为其分配一个全局唯一的递增的事务 ID(ZXID)，之后再对其进行广播。</p><blockquote><p>ZAB 是通过“一切以领导者为准”的强领导者模型和严格按照顺序提交日志，来实现操作的顺序性的，这一点和 Raft 是一样的。</p></blockquote><h2 id="zookeeper-应用" tabindex="-1"><a class="header-anchor" href="#zookeeper-应用" aria-hidden="true">#</a> ZooKeeper 应用</h2><blockquote><p><strong>ZooKeeper 可以用于发布/订阅、负载均衡、命令服务、分布式协调/通知、集群管理、Master 选举、分布式锁和分布式队列等功能</strong> 。</p></blockquote><h3 id="命名服务" tabindex="-1"><a class="header-anchor" href="#命名服务" aria-hidden="true">#</a> 命名服务</h3><p>在分布式系统中，通常需要一个全局唯一的名字，如生成全局唯一的订单号等，ZooKeeper 可以通过顺序节点的特性来生成全局唯一 ID，从而可以对分布式系统提供命名服务。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200602182548.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="配置管理" tabindex="-1"><a class="header-anchor" href="#配置管理" aria-hidden="true">#</a> 配置管理</h3><p>利用 ZooKeeper 的观察机制，可以将其作为一个高可用的配置存储器，允许分布式应用的参与者检索和更新配置文件。</p><h3 id="分布式锁" tabindex="-1"><a class="header-anchor" href="#分布式锁" aria-hidden="true">#</a> 分布式锁</h3><p>可以通过 ZooKeeper 的临时节点和 Watcher 机制来实现分布式排它锁。</p><p>举例来说，有一个分布式系统，有三个节点 A、B、C，试图通过 ZooKeeper 获取分布式锁。</p><p>（1）访问 <code>/lock</code> （这个目录路径由程序自己决定），创建 <strong>带序列号的临时节点（EPHEMERAL）</strong> 。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200602191358.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>（2）每个节点尝试获取锁时，拿到 <code>/locks</code>节点下的所有子节点（<code>id_0000</code>,<code>id_0001</code>,<code>id_0002</code>），<strong>判断自己创建的节点是不是序列号最小的</strong></p><ul><li>如果序列号是最小的，则成功获取到锁。 <ul><li>释放锁：执行完操作后，把创建的节点给删掉。</li></ul></li><li>如果不是，则监听比自己要小 1 的节点变化。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200602192619.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>（3）释放锁，即删除自己创建的节点。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200602192341.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>图中，NodeA 删除自己创建的节点 <code>id_0000</code>，NodeB 监听到变化，发现自己的节点已经是最小节点，即可获取到锁。</p><h3 id="集群管理" tabindex="-1"><a class="header-anchor" href="#集群管理" aria-hidden="true">#</a> 集群管理</h3><p>ZooKeeper 还能解决大多数分布式系统中的问题：</p><ul><li>如可以通过创建临时节点来建立心跳检测机制。如果分布式系统的某个服务节点宕机了，则其持有的会话会超时，此时该临时节点会被删除，相应的监听事件就会被触发。</li><li>分布式系统的每个服务节点还可以将自己的节点状态写入临时节点，从而完成状态报告或节点工作进度汇报。</li><li>通过数据的订阅和发布功能，ZooKeeper 还能对分布式系统进行模块的解耦和任务的调度。</li><li>通过监听机制，还能对分布式系统的服务节点进行动态上下线，从而实现服务的动态扩容。</li></ul><h3 id="选举-leader-节点" tabindex="-1"><a class="header-anchor" href="#选举-leader-节点" aria-hidden="true">#</a> 选举 Leader 节点</h3><p>分布式系统一个重要的模式就是主从模式 (Master/Salves)，ZooKeeper 可以用于该模式下的 Matser 选举。可以让所有服务节点去竞争性地创建同一个 ZNode，由于 ZooKeeper 不能有路径相同的 ZNode，必然只有一个服务节点能够创建成功，这样该服务节点就可以成为 Master 节点。</p><h3 id="队列管理" tabindex="-1"><a class="header-anchor" href="#队列管理" aria-hidden="true">#</a> 队列管理</h3><p>ZooKeeper 可以处理两种类型的队列：</p><ol><li>当一个队列的成员都聚齐时，这个队列才可用，否则一直等待所有成员到达，这种是同步队列。</li><li>队列按照 FIFO 方式进行入队和出队操作，例如实现生产者和消费者模型。</li></ol><p>同步队列用 ZooKeeper 实现的实现思路如下：</p><p>创建一个父目录 <code>/synchronizing</code>，每个成员都监控标志（Set Watch）位目录 <code>/synchronizing/start</code> 是否存在，然后每个成员都加入这个队列，加入队列的方式就是创建 <code>/synchronizing/member_i</code> 的临时目录节点，然后每个成员获取 <code>/synchronizing</code> 目录的所有目录节点，也就是 <code>member_i</code>。判断 i 的值是否已经是成员的个数，如果小于成员个数等待 <code>/synchronizing/start</code> 的出现，如果已经相等就创建 <code>/synchronizing/start</code>。</p><h2 id="zookeeper-的缺点" tabindex="-1"><a class="header-anchor" href="#zookeeper-的缺点" aria-hidden="true">#</a> ZooKeeper 的缺点</h2><p>ZooKeeper 的监听是一次性的。</p><h3 id="zookeeper-不是为高可用性设计的" tabindex="-1"><a class="header-anchor" href="#zookeeper-不是为高可用性设计的" aria-hidden="true">#</a> ZooKeeper 不是为高可用性设计的</h3><p>生产环境中常常需要通过多机房部署来容灾。出于成本考虑，一般多机房都是同时提供服务的，即一个机房撑不住所有流量。<strong>ZooKeeper 集群只能有一个 Leader</strong>，一旦机房之间连接出现故障，那么只有 Leader 所在的机房可以正常工作，其他机房只能停摆。于是所有流量集中到 Leader 所在的机房，由于处理不过来而导致崩溃。</p><p>即使是在同一个机房里面，由于网段的不同，在调整机房交换机的时候偶尔也会发生网段隔离的情况。实际上机房每个月基本上都会发生短暂的网络隔离之类的子网段调整。在那个时刻 ZooKeeper 将处于不可用状态。如果业务系统重度依赖 ZooKeeper（比如用 Dubbo 作为 RPC，且使用 ZooKeeper 作为注册中心），则系统的可用性将非常脆弱。</p><p>由于 ZooKeeper 对于网络隔离的极度敏感，导致 ZooKeeper 对于网络的任何风吹草动都会做出激烈反应。这使得 ZooKeeper 的<strong>不可用</strong>时间比较多。我们不能让 ZooKeeper 的<strong>不可用</strong>，变成系统的<strong>不可用</strong>。</p><h3 id="zookeeper-的选举过程速度很慢" tabindex="-1"><a class="header-anchor" href="#zookeeper-的选举过程速度很慢" aria-hidden="true">#</a> ZooKeeper 的选举过程速度很慢</h3><p>互联网环境中，网络不稳定几乎是必然的，而 ZooKeeper 网络隔离非常敏感。一旦出现网络隔离，zookeeper 就要发起选举流程。</p><p>ZooKeeper 的选举流程通常耗时 30 到 120 秒，期间 ZooKeeper 由于没有 Leader，都是不可用的。</p><p>对于网络里面偶尔出现的，比如半秒一秒的网络隔离，ZooKeeper 会由于选举过程，而把不可用时间放大几十倍。</p><h3 id="zookeeper-的性能是有限的" tabindex="-1"><a class="header-anchor" href="#zookeeper-的性能是有限的" aria-hidden="true">#</a> ZooKeeper 的性能是有限的</h3><p>典型的 ZooKeeper 的 TPS 大概是一万多，无法支撑每天动辄几十亿次的调用。因此，每次请求都去 ZooKeeper 获取业务系统信息是不可能的。</p><p>为此，ZooKeeper 的 client 必须自己缓存业务系统的信息。这就导致 ZooKeeper 提供的<strong>强一致性</strong>实际上是做不到的。如果我们需要强一致性，还需要其他机制来进行保障：比如用自动化脚本把业务系统的 old master 给 kill 掉，但是这可能会引发很多其他问题。</p><h3 id="zookeeper-无法进行有效的权限控制" tabindex="-1"><a class="header-anchor" href="#zookeeper-无法进行有效的权限控制" aria-hidden="true">#</a> ZooKeeper 无法进行有效的权限控制</h3><p>ZooKeeper 的权限控制非常弱。在大型的复杂系统里面，使用 ZooKeeper 必须自己再额外的开发一套权限控制系统，通过那套权限控制系统再访问 ZooKeeper。</p><p>额外的权限控制系统不但增加了系统复杂性和维护成本，而且降低了系统的总体性能。</p><h3 id="即使有了-zookeeper-也很难避免业务系统的数据不一致" tabindex="-1"><a class="header-anchor" href="#即使有了-zookeeper-也很难避免业务系统的数据不一致" aria-hidden="true">#</a> 即使有了 ZooKeeper 也很难避免业务系统的数据不一致</h3><p>由于 ZooKeeper 的性能限制，我们无法让每次系统内部调用都走 ZooKeeper，因此总有某些时刻，业务系统会存在两份数据（业务系统 client 那边缓存的业务系统信息是定时从 ZooKeeper 更新的，因此会有更新不同步的问题）。</p><p>如果要保持数据的强一致性，唯一的方法是“先 kill 掉当前 Leader，再在 ZooKeeper 上更新 Leader 信息”。是否要 kill 掉当前 Leader 这个问题上，程序是无法完全自动决定的（因为网络隔离的时候 ZooKeeper 已经不可用了，自动脚本没有全局信息，不管怎么做都可能是错的，什么都不做也可能是错的。当网络故障的时候，只有运维人员才有全局信息，程序是无法得知其他机房的情况的）。因此系统无法自动的保障数据一致性，必须要人工介入。而人工介入的典型时间是半个小时以上，我们不能让系统这么长时间不可用。因此我们必须在某个方向上进行妥协，最常见的妥协方式是放弃<strong>强一致性</strong>，而接受<strong>最终一致性</strong>。</p><p>如果我们需要人工介入才能保证<em>可靠的强一致性</em>，那么 ZooKeeper 的价值就大打折扣。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,168),c=e("strong",null,"官方",-1),h={href:"http://zookeeper.apache.org/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://cwiki.apache.org/confluence/display/ZOOKEEPER",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/apache/zookeeper",target:"_blank",rel:"noopener noreferrer"},k=e("strong",null,"书籍",-1),m={href:"https://item.jd.com/12109713.html",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://item.jd.com/11622772.html",target:"_blank",rel:"noopener noreferrer"},b=e("strong",null,"文章",-1),f={href:"https://www.ibm.com/developerworks/cn/opensource/os-cn-zookeeper/index.html",target:"_blank",rel:"noopener noreferrer"},K={href:"https://www.cnblogs.com/felixzh/p/5869212.html",target:"_blank",rel:"noopener noreferrer"},z={href:"https://github.com/heibaiying/BigData-Notes/blob/master/notes/ZooKeeper%E7%AE%80%E4%BB%8B%E5%8F%8A%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5.md",target:"_blank",rel:"noopener noreferrer"},v={href:"https://draveness.me/zookeeper-chubby",target:"_blank",rel:"noopener noreferrer"},w={href:"http://www.jasongj.com/zookeeper/fastleaderelection/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper",target:"_blank",rel:"noopener noreferrer"},L={href:"https://blog.csdn.net/wwwsq/article/details/7644445",target:"_blank",rel:"noopener noreferrer"};function _(A,C){const o=t("ExternalLinkIcon");return s(),i("div",null,[d,e("ul",null,[e("li",null,[c,e("ul",null,[e("li",null,[e("a",h,[r("ZooKeeper 官网"),a(o)])]),e("li",null,[e("a",g,[r("ZooKeeper 官方文档"),a(o)])]),e("li",null,[e("a",u,[r("ZooKeeper Github"),a(o)])])])]),e("li",null,[k,e("ul",null,[e("li",null,[e("a",m,[r("《Hadoop 权威指南（第四版）》"),a(o)])]),e("li",null,[e("a",Z,[r("《从 Paxos 到 Zookeeper 分布式一致性原理与实践》"),a(o)])])])]),e("li",null,[b,e("ul",null,[e("li",null,[e("a",f,[r("分布式服务框架 ZooKeeper -- 管理分布式环境中的数据"),a(o)])]),e("li",null,[e("a",K,[r("ZooKeeper 的功能以及工作原理"),a(o)])]),e("li",null,[e("a",z,[r("ZooKeeper 简介及核心概念"),a(o)])]),e("li",null,[e("a",v,[r("详解分布式协调服务 ZooKeeper"),a(o)])]),e("li",null,[e("a",w,[r("深入浅出 Zookeeper（一） Zookeeper 架构及 FastLeaderElection 机制"),a(o)])]),e("li",null,[e("a",x,[r("Introduction to Apache ZooKeeper"),a(o)])]),e("li",null,[e("a",L,[r("Zookeeper 的优缺点"),a(o)])])])])])])}const F=n(l,[["render",_],["__file","index.html.vue"]]);export{F as default};
