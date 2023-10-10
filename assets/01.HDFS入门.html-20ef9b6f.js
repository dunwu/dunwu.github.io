import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as d,c as s,a,b as e,d as t,e as o}from"./app-207caadd.js";const l={},h=o('<h1 id="hdfs-入门" tabindex="-1"><a class="header-anchor" href="#hdfs-入门" aria-hidden="true">#</a> HDFS 入门</h1><blockquote><p><strong>HDFS 是 Hadoop 分布式文件系统。</strong></p><p>关键词：分布式、文件系统</p></blockquote><h2 id="hdfs-简介" tabindex="-1"><a class="header-anchor" href="#hdfs-简介" aria-hidden="true">#</a> HDFS 简介</h2><p><strong>HDFS</strong> 是 <strong>Hadoop Distributed File System</strong> 的缩写，即 Hadoop 的分布式文件系统。</p><p>HDFS 是一种用于存储具有流数据访问模式的超大文件的文件系统，它运行在廉价的机器集群上。</p><p>HDFS 的设计目标是管理数以千计的服务器、数以万计的磁盘，将这么大规模的服务器计算资源当作一个单一的存储系统进行管理，对应用程序提供数以 PB 计的存储容量，让应用程序像使用普通文件系统一样存储大规模的文件数据。</p><p>HDFS 是在一个大规模分布式服务器集群上，对数据分片后进行并行读写及冗余存储。因为 HDFS 可以部署在一个比较大的服务器集群上，集群中所有服务器的磁盘都可供 HDFS 使用，所以整个 HDFS 的存储空间可以达到 PB 级容量。</p><h3 id="hdfs-的优点" tabindex="-1"><a class="header-anchor" href="#hdfs-的优点" aria-hidden="true">#</a> HDFS 的优点</h3><ul><li><strong>高容错</strong> - 数据冗余多副本，副本丢失后自动恢复</li><li><strong>高可用</strong> - NameNode HA、安全模式</li><li><strong>高扩展</strong> - 能够处理 10K 节点的规模；处理数据达到 GB、TB、甚至 PB 级别的数据；能够处理百万规模以上的文件数量，数量相当之大。</li><li><strong>批处理</strong> - 流式数据访问；数据位置暴露给计算框架</li><li><strong>构建在廉价商用机器上</strong> - 提供了容错和恢复机制</li></ul><h3 id="hdfs-的缺点" tabindex="-1"><a class="header-anchor" href="#hdfs-的缺点" aria-hidden="true">#</a> HDFS 的缺点</h3><ul><li><strong>不适合低延迟数据访问</strong> - 适合高吞吐率的场景，就是在某一时间内写入大量的数据。但是它在低延时的情况下是不行的，比如毫秒级以内读取数据，它是很难做到的。</li><li><strong>不适合大量小文件存储</strong><ul><li>存储大量小文件(这里的小文件是指小于 HDFS 系统的 Block 大小的文件（默认 64M）)的话，它会占用 NameNode 大量的内存来存储文件、目录和块信息。这样是不可取的，因为 NameNode 的内存总是有限的。</li><li>磁盘寻道时间超过读取时间</li></ul></li><li><strong>不支持并发写入</strong> - 一个文件同时只能有一个写入者</li><li><strong>不支持文件随机修改</strong> - 仅支持追加写入</li></ul><h2 id="hdfs-架构" tabindex="-1"><a class="header-anchor" href="#hdfs-架构" aria-hidden="true">#</a> HDFS 架构</h2><p><strong>HDFS 采用主从架构</strong>，由单个 NameNode(NN) 和多个 DataNode(DN) 组成。</p><p>集群中的 Datanode 一般是一个节点一个，负责管理它所在节点上的存储。HDFS 暴露了文件系统的名字空间，用户能够以文件的形式在上面存储数据。从内部看，一个文件其实被分成一个或多个数据块，这些块存储在一组 Datanode 上。Namenode 执行文件系统的名字空间操作，比如打开、关闭、重命名文件或目录。它也负责确定数据块到具体 Datanode 节点的映射。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/bigdata/hdfs/hdfs-architecture.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="namenode" tabindex="-1"><a class="header-anchor" href="#namenode" aria-hidden="true">#</a> NameNode</h3><p><strong>NameNode 负责管理文件系统的命名空间以及客户端对文件的访问</strong>。NameNode 的职责：</p><ul><li>管理命名空间</li><li>管理元数据：文件的位置、所有者、权限、数据块等</li><li>管理 Block 副本策略：默认 3 个副本</li><li>处理客户端读写请求，为 DataNode 分配任务</li></ul><h3 id="datanode" tabindex="-1"><a class="header-anchor" href="#datanode" aria-hidden="true">#</a> DataNode</h3><p><strong>DataNode 负责文件数据的存储和读写操作，HDFS 将文件数据分割成若干数据块（Block），每个 DataNode 存储一部分数据块，这样文件就分布存储在整个 HDFS 服务器集群中</strong>。</p><ul><li>存储 Block 和数据校验和</li><li>执行客户端发送的读写操作</li><li>通过心跳机制定期（默认 3 秒）向 NameNode 汇报运行状态和 Block 列表信息</li><li>集群启动时，DataNode 向 NameNode 提供 Block 列表信息</li></ul><h3 id="命名空间" tabindex="-1"><a class="header-anchor" href="#命名空间" aria-hidden="true">#</a> 命名空间</h3><p>HDFS 的 <code>文件系统命名空间</code> 的层次结构与大多数文件系统类似 (如 Linux)， 支持目录和文件的创建、移动、删除和重命名等操作，支持配置用户和访问权限，但不支持硬链接和软连接。<code>NameNode</code> 负责维护文件系统名称空间，记录对名称空间或其属性的任何更改。</p><h3 id="block-数据块" tabindex="-1"><a class="header-anchor" href="#block-数据块" aria-hidden="true">#</a> Block 数据块</h3><ul><li>HDFS 最小存储单元</li><li>文件写入 HDFS 会被切分成若干个 Block</li><li>Block 大小固定，默认为 128MB，可自定义</li><li>若一个 Block 的大小小于设定值，不会占用整个块空间</li><li>默认情况下每个 Block 有 3 个副本</li></ul><h3 id="client" tabindex="-1"><a class="header-anchor" href="#client" aria-hidden="true">#</a> Client</h3><ul><li>将文件切分为 Block 数据块</li><li>与 NameNode 交互，获取文件元数据</li><li>与 DataNode 交互，读取或写入数据</li><li>管理 HDFS</li></ul><h2 id="hdfs-数据流" tabindex="-1"><a class="header-anchor" href="#hdfs-数据流" aria-hidden="true">#</a> HDFS 数据流</h2><h3 id="hdfs-读文件" tabindex="-1"><a class="header-anchor" href="#hdfs-读文件" aria-hidden="true">#</a> HDFS 读文件</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/bigdata/hdfs/hdfs-read.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li>客户端调用 FileSyste 对象的 open() 方法在分布式文件系统中<strong>打开要读取的文件</strong>。</li><li>分布式文件系统通过使用 RPC（远程过程调用）来调用 namenode，<strong>确定文件起始块的位置</strong>。</li><li>分布式文件系统的 DistributedFileSystem 类返回一个支持文件定位的输入流 FSDataInputStream 对象，FSDataInputStream 对象接着封装 DFSInputStream 对象（<strong>存储着文件起始几个块的 datanode 地址</strong>），客户端对这个输入流调用 read()方法。</li><li>DFSInputStream 连接距离最近的 datanode，通过反复调用 read 方法，<strong>将数据从 datanode 传输到客户端</strong>。</li><li>到达块的末端时，DFSInputStream 关闭与该 datanode 的连接，<strong>寻找下一个块的最佳 datanode</strong>。</li><li>客户端完成读取，对 FSDataInputStream 调用 close()方法<strong>关闭连接</strong>。</li></ol><h3 id="hdfs-写文件" tabindex="-1"><a class="header-anchor" href="#hdfs-写文件" aria-hidden="true">#</a> HDFS 写文件</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/bigdata/hdfs/hdfs-write.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li>客户端通过对 DistributedFileSystem 对象调用 create() 函数来<strong>新建文件</strong>。</li><li>分布式文件系统对 namenod 创建一个 RPC 调用，在文件系统的<strong>命名空间中新建一个文件</strong>。</li><li>Namenode 对新建文件进行检查无误后，分布式文件系统返回给客户端一个 FSDataOutputStream 对象，FSDataOutputStream 对象封装一个 DFSoutPutstream 对象，负责处理 namenode 和 datanode 之间的通信，<strong>客户端开始写入数据</strong>。</li><li>FSDataOutputStream 将<strong>数据分成一个一个的数据包，写入内部队列“数据队列”</strong>，DataStreamer 负责将数据包依次流式传输到由一组 namenode 构成的管线中。</li><li>DFSOutputStream 维护着确认队列来等待 datanode 收到确认回执，<strong>收到管道中所有 datanode 确认后，数据包从确认队列删</strong>除。</li><li><strong>客户端完成数据的写入</strong>，对数据流调用 close() 方法。</li><li>namenode <strong>确认完成</strong>。</li></ol><h2 id="hdfs-数据复制" tabindex="-1"><a class="header-anchor" href="#hdfs-数据复制" aria-hidden="true">#</a> HDFS 数据复制</h2><p>由于 Hadoop 被设计运行在廉价的机器上，这意味着硬件是不可靠的，为了保证容错性，HDFS 提供了数据复制机制。HDFS 将每一个文件存储为一系列<strong>块</strong>，每个块由多个副本来保证容错，块的大小和复制因子可以自行配置（默认情况下，块大小是 128M，默认复制因子是 3）。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200224203958.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>Namenode 全权管理数据块的复制</strong>，它周期性地从集群中的每个 Datanode 接收心跳信号和块状态报告(Blockreport)。接收到心跳信号意味着该 Datanode 节点工作正常。块状态报告包含了一个该 Datanode 上所有数据块的列表。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/bigdata/hdfs/hdfs-replica.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>大型的 HDFS 实例在通常分布在多个机架的多台服务器上，不同机架上的两台服务器之间通过交换机进行通讯。在大多数情况下，同一机架中的服务器间的网络带宽大于不同机架中的服务器之间的带宽。因此 HDFS 采用机架感知副本放置策略，对于常见情况，当复制因子为 3 时，HDFS 的放置策略是：</p><ul><li>副本 1：放在 Client 所在节点 <ul><li>对于远程 Client，系统会随机选择节点</li></ul></li><li>副本 2：放在不同的机架节点上</li><li>副本 3：放在与第二个副本同一机架的不同节点上</li><li>副本 N：随机选择</li><li>节点选择：同等条件下优先选择空闲节点</li></ul><p>为了最大限度地减少带宽消耗和读取延迟，HDFS 在执行读取请求时，优先读取距离读取器最近的副本。如果在与读取器节点相同的机架上存在副本，则优先选择该副本。如果 HDFS 群集跨越多个数据中心，则优先选择本地数据中心上的副本。</p><h2 id="hdfs-高可用" tabindex="-1"><a class="header-anchor" href="#hdfs-高可用" aria-hidden="true">#</a> HDFS 高可用</h2><p>数据存储故障容错</p><p>磁盘介质在存储过程中受环境或者老化影响，其存储的数据可能会出现错乱。HDFS 的应对措施是，对于存储在 DataNode 上的数据块，计算并存储校验和（CheckSum）。在读取数据的时候，重新计算读取出来的数据的校验和，如果校验不正确就抛出异常，应用程序捕获异常后就到其他 DataNode 上读取备份数据。</p><p>磁盘故障容错</p><p>如果 DataNode 监测到本机的某块磁盘损坏，就将该块磁盘上存储的所有 BlockID 报告给 NameNode，NameNode 检查这些数据块还在哪些 DataNode 上有备份，通知相应的 DataNode 服务器将对应的数据块复制到其他服务器上，以保证数据块的备份数满足要求。</p><p>DataNode 故障容错</p><p>DataNode 会通过心跳和 NameNode 保持通信，如果 DataNode 超时未发送心跳，NameNode 就会认为这个 DataNode 已经宕机失效，立即查找这个 DataNode 上存储的数据块有哪些，以及这些数据块还存储在哪些服务器上，随后通知这些服务器再复制一份数据块到其他服务器上，保证 HDFS 存储的数据块备份数符合用户设置的数目，即使再出现服务器宕机，也不会丢失数据。</p><p>NameNode 故障容错</p><p>NameNode 是整个 HDFS 的核心，记录着 HDFS 文件分配表信息，所有的文件路径和数据块存储信息都保存在 NameNode，如果 NameNode 故障，整个 HDFS 系统集群都无法使用；如果 NameNode 上记录的数据丢失，整个集群所有 DataNode 存储的数据也就没用了。</p><h3 id="namenode-的-ha-机制" tabindex="-1"><a class="header-anchor" href="#namenode-的-ha-机制" aria-hidden="true">#</a> NameNode 的 HA 机制</h3><p>NameNode 通过 Active NameNode 和 Standby NameNode 实现主备。</p><ul><li><strong>Active NameNode</strong> - 是正在工作的 NameNode；</li><li><strong>Standby NameNode</strong> - 是备份的 NameNode。</li></ul><p>Active NameNode 宕机后，Standby NameNode 快速升级为新的 Active NameNode。</p><p>Standby NameNode 周期性同步 edits 编辑日志，定期合并 fsimage 与 edits 到本地磁盘。</p><p>Hadoop 3.0 允许配置多个 Standby NameNode。</p><h3 id="元数据文件" tabindex="-1"><a class="header-anchor" href="#元数据文件" aria-hidden="true">#</a> 元数据文件</h3><ul><li><strong>edits（编辑日志文件）</strong> - 保存了自最新检查点（Checkpoint）之后的所有文件更新操作。</li><li><strong>fsimage（元数据检查点镜像文件）</strong> - 保存了文件系统中所有的目录和文件信息，如：某个目录下有哪些子目录和文件，以及文件名、文件副本数、文件由哪些 Block 组成等。</li></ul><p>Active NameNode 内存中有一份最新的元数据（= fsimage + edits）。</p><p>Standby NameNode 在检查点定期将内存中的元数据保存到 fsimage 文件中。</p><h3 id="利用-qjm-实现元数据高可用" tabindex="-1"><a class="header-anchor" href="#利用-qjm-实现元数据高可用" aria-hidden="true">#</a> 利用 QJM 实现元数据高可用</h3><blockquote><p>基于 Paxos 算法</p></blockquote><p>QJM 机制（Quorum Journal Manager）</p><p>只要保证 Quorum（法定人数）数量的操作成功，就认为这是一次最终成功的操作</p><p>QJM 共享存储系统</p><ul><li>部署奇数（2N+1）个 JournalNode</li><li>JournalNode 负责存储 edits 编辑日志</li><li>写 edits 的时候，只要超过半数（N+1）的 JournalNode 返回成功，就代表本次写入成功</li><li>最多可容忍 N 个 JournalNode 宕机</li></ul><p>利用 ZooKeeper 实现 Active 节点选举。</p><h2 id="附-图解-hdfs-存储原理" tabindex="-1"><a class="header-anchor" href="#附-图解-hdfs-存储原理" aria-hidden="true">#</a> 附：图解 HDFS 存储原理</h2>',69),g={href:"https://blog.csdn.net/hudiefenmu/article/details/37655491",target:"_blank",rel:"noopener noreferrer"},c=o('<h3 id="hdfs-写数据原理" tabindex="-1"><a class="header-anchor" href="#hdfs-写数据原理" aria-hidden="true">#</a> HDFS 写数据原理</h3><figure><img src="https://github.com/heibaiying/BigData-Notes/raw/master/pictures/hdfs-write-1.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="https://github.com/heibaiying/BigData-Notes/raw/master/pictures/hdfs-write-2.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="https://github.com/heibaiying/BigData-Notes/raw/master/pictures/hdfs-write-3.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="hdfs-读数据原理" tabindex="-1"><a class="header-anchor" href="#hdfs-读数据原理" aria-hidden="true">#</a> HDFS 读数据原理</h3><figure><img src="https://github.com/heibaiying/BigData-Notes/raw/master/pictures/hdfs-read-1.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="hdfs-故障类型和其检测方法" tabindex="-1"><a class="header-anchor" href="#hdfs-故障类型和其检测方法" aria-hidden="true">#</a> HDFS 故障类型和其检测方法</h3><figure><img src="https://github.com/heibaiying/BigData-Notes/raw/master/pictures/hdfs-tolerance-1.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="https://github.com/heibaiying/BigData-Notes/raw/master/pictures/hdfs-tolerance-2.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>第二部分：读写故障的处理</strong></p><figure><img src="https://github.com/heibaiying/BigData-Notes/raw/master/pictures/hdfs-tolerance-3.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>第三部分：DataNode 故障处理</strong></p><figure><img src="https://github.com/heibaiying/BigData-Notes/raw/master/pictures/hdfs-tolerance-4.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>副本布局策略</strong>：</p><figure><img src="https://github.com/heibaiying/BigData-Notes/raw/master/pictures/hdfs-tolerance-5.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',16),p={href:"http://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.cnblogs.com/caiyisen/p/7395843.html",target:"_blank",rel:"noopener noreferrer"},m={href:"http://shop.oreilly.com/product/0636920033448.do",target:"_blank",rel:"noopener noreferrer"},f={href:"http://hadoop.apache.org/docs/r1.0.4/cn/hdfs_design.html",target:"_blank",rel:"noopener noreferrer"},N={href:"https://blog.csdn.net/hudiefenmu/article/details/37655491",target:"_blank",rel:"noopener noreferrer"};function D(b,S){const i=n("ExternalLinkIcon");return d(),s("div",null,[h,a("blockquote",null,[a("p",null,[e("说明：以下图片引用自博客："),a("a",g,[e("翻译经典 HDFS 原理讲解漫画"),t(i)])])]),c,a("ul",null,[a("li",null,[a("a",p,[e("HDFS 官方文档"),t(i)])]),a("li",null,[a("a",u,[e("HDFS 知识点总结"),t(i)])]),a("li",null,[a("a",m,[e("《Hadoop: The Definitive Guide, Fourth Edition》"),t(i)]),e(" by Tom White")]),a("li",null,[a("a",f,[e("http://hadoop.apache.org/docs/r1.0.4/cn/hdfs_design.html"),t(i)])]),a("li",null,[a("a",N,[e("翻译经典 HDFS 原理讲解漫画"),t(i)])])])])}const x=r(l,[["render",D],["__file","01.HDFS入门.html.vue"]]);export{x as default};
