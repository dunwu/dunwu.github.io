import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as s,c as l,a as e,b as r,d as i,e as a}from"./app-fcc32256.js";const g={},c=a('<h1 id="hbase-架构" tabindex="-1"><a class="header-anchor" href="#hbase-架构" aria-hidden="true">#</a> HBase 架构</h1><blockquote><p><strong><em>HBase 是一个在 HDFS 上开发的面向列的分布式数据库。</em></strong></p></blockquote><h2 id="hbase-存储架构" tabindex="-1"><a class="header-anchor" href="#hbase-存储架构" aria-hidden="true">#</a> HBase 存储架构</h2><blockquote><p>在 HBase 中，表被分割成多个更小的块然后分散的存储在不同的服务器上，这些小块叫做 Regions，存放 Regions 的地方叫做 RegionServer。Master 进程负责处理不同的 RegionServer 之间的 Region 的分发。</p></blockquote><h3 id="概览" tabindex="-1"><a class="header-anchor" href="#概览" aria-hidden="true">#</a> 概览</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200612151239.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>HBase 主要处理两种文件：预写日志（WAL）和实际数据文件 HFile。一个基本的流程是客户端首先联系 ZooKeeper 集群查找行键。上述过程是通过 ZooKeeper 获取欧含有 <code>-ROOT-</code> 的 region 服务器来完成的。通过含有 <code>-ROOT-</code> 的 region 服务器可以查询到含有 <code>.META.</code> 表中对应的 region 服务器名，其中包含请求的行键信息。这两种内容都会被缓存下来，并且只查询一次。最终，通过查询 .META. 服务器来获取客户端查询的行键数据所在 region 的服务器名。</p><h3 id="region" tabindex="-1"><a class="header-anchor" href="#region" aria-hidden="true">#</a> Region</h3><p>HBase Table 中的所有行按照 <code>Row Key</code> 的字典序排列。HBase Table 根据 Row Key 的范围分片，每个分片叫做 <code>Region</code>。一个 <code>Region</code> 包含了在 start key 和 end key 之间的所有行。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/bigdata/hbase/1551165887616.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>HBase 支持自动分区</strong>：每个表初始只有一个 <code>Region</code>，随着数据不断增加，<code>Region</code> 会不断增大，当增大到一个阀值的时候，<code>Region</code> 就会分裂为两个新的 <code>Region</code>。当 Table 中的行不断增多，就会有越来越多的 <code>Region</code>。</p><p><code>Region</code> 是 HBase 中<strong>分布式存储和负载均衡的最小单元</strong>。这意味着不同的 <code>Region</code> 可以分布在不同的 <code>Region Server</code> 上。但一个 <code>Region</code> 是不会拆分到多个 Server 上的。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200601181219.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="region-server" tabindex="-1"><a class="header-anchor" href="#region-server" aria-hidden="true">#</a> Region Server</h3><p><code>Region</code> 只不过是表被拆分，并分布在 Region Server。</p><p><code>Region Server</code> 运行在 HDFS 的 DataNode 上。它具有以下组件：</p><ul><li><strong>WAL(Write Ahead Log，预写日志)</strong>：用于存储尚未进持久化存储的数据记录，以便在发生故障时进行恢复。如果写 WAL 失败了，那么修改数据的完整操作就是失败的。 <ul><li>通常情况，每个 RegionServer 只有一个 WAL 实例。在 2.0 之前，WAL 的实现叫做 HLog</li><li>WAL 位于 <code>/hbase/WALs/</code> 目录下</li><li>如果每个 RegionServer 只有一个 WAL，由于 HDFS 必须是连续的，导致必须写 WAL 连续的，然后出现性能问题。MultiWAL 可以让 RegionServer 同时写多个 WAL 并行的，通过 HDFS 底层的多管道，最终提升总的吞吐量，但是不会提升单个 Region 的吞吐量。</li></ul></li><li><strong>BlockCache</strong>：<strong>读缓存</strong>。它将频繁读取的数据存储在内存中，如果存储不足，它将按照 <code>最近最少使用原则</code> 清除多余的数据。</li><li><strong>MemStore</strong>：<strong>写缓存</strong>。它存储尚未写入磁盘的新数据，并会在数据写入磁盘之前对其进行排序。每个 Region 上的每个列族都有一个 MemStore。</li><li><strong>HFile</strong>：<strong>将行数据按照 Key/Values 的形式存储在文件系统上</strong>。HFile 是 HBase 在 HDFS 中存储数据的格式，它包含多层的索引，这样在 HBase 检索数据的时候就不用完全的加载整个文件。HFile 存储的根目录默认为为 <code>/hbase</code>。索引的大小(keys 的大小，数据量的大小)影响 block 的大小，在大数据集的情况下，block 的大小设置为每个 RegionServer 1GB 也是常见的。 <ul><li>起初，HFile 中并没有任何 Block，数据还存在于 MemStore 中。</li><li>Flush 发生时，创建 HFile Writer，第一个空的 Data Block 出现，初始化后的 Data Block 中为 Header 部分预留了空间，Header 部分用来存放一个 Data Block 的元数据信息。</li><li>而后，位于 MemStore 中的 KeyValues 被一个个 append 到位于内存中的第一个 Data Block 中：</li></ul></li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/bigdata/hbase/1551166602999.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Region Server 存取一个子表时，会创建一个 Region 对象，然后对表的每个列族创建一个 <code>Store</code> 实例，每个 <code>Store</code> 会有 0 个或多个 <code>StoreFile</code> 与之对应，每个 <code>StoreFile</code> 则对应一个 <code>HFile</code>，HFile 就是实际存储在 HDFS 上的文件。</p><h2 id="hbase-系统架构" tabindex="-1"><a class="header-anchor" href="#hbase-系统架构" aria-hidden="true">#</a> HBase 系统架构</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/bigdata/hbase/1551164744748.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>和 HDFS、YARN 一样，<strong>HBase 也遵循 master / slave 架构</strong>：</p><ul><li>HBase 有一个 master 节点。<strong>master 节点负责协调管理 region server 节点</strong>。 <ul><li>master 负责将 region 分配给 region server 节点；</li><li>master 负责恢复 region server 节点的故障。</li></ul></li><li>HBase 有多个 region server 节点。<strong>region server 节点负责零个或多个 region 的管理并响应客户端的读写请求。region server 节点还负责 region 的划分并通知 master 节点有了新的子 region</strong>。</li><li>HBase 依赖 ZooKeeper 来实现故障恢复。</li></ul><h3 id="master-server" tabindex="-1"><a class="header-anchor" href="#master-server" aria-hidden="true">#</a> Master Server</h3><p><strong>Master Server 负责协调 Region Server</strong>。具体职责如下：</p><ul><li>为 Region Server 分配 Region ；</li><li>负责 Region Server 的负载均衡 ；</li><li>发现失效的 Region Server 并重新分配其上的 Region；</li><li>GFS 上的垃圾文件回收；</li><li>处理 Schema 的更新请求。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/bigdata/hbase/1551166513572.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="region-server-1" tabindex="-1"><a class="header-anchor" href="#region-server-1" aria-hidden="true">#</a> Region Server</h3><ul><li>Region Server 负责维护 Master Server 分配给它的 Region，并处理发送到 Region 上的 IO 请求；</li><li>当 Region 过大，Region Server 负责自动分区，并通知 Master Server 记录更新。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200612151602.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="zookeeper" tabindex="-1"><a class="header-anchor" href="#zookeeper" aria-hidden="true">#</a> ZooKeeper</h3><p><strong>HBase 依赖 ZooKeeper 作为分布式协调服务来维护集群中的服务器状态</strong>。Zookeeper 维护哪些服务器是活动的和可用的，并提供服务器故障通知。集群至少应该有 3 个节点。</p><p>ZooKeeper 的作用：</p><ul><li>保证任何时候，集群中只有一个 Master；</li><li>存储所有 Region 的寻址入口；</li><li>实时监控 Region Server 的状态，将 Region Server 的上线和下线信息实时通知给 Master；</li><li>存储 HBase 的 Schema，包括有哪些 Table，每个 Table 有哪些 Column Family 等信息。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/bigdata/hbase/1551166447147.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>以上，最重要的一点是 ZooKeeper 如何保证 HBase 集群中只有一个 Master Server 的呢？</p><ul><li>所有 Master Server 会竞争 Zookeeper 的 znode 锁（一个临时节点），只有一个 Master Server 能够创建成功，此时该 Master 就是主 Master。</li><li>主 Master 会定期向 Zookeeper 发送心跳。从 Master 则通过 Watcher 机制对主 Master 所在节点进行监听。</li><li>如果，主 Master 未能及时发送心跳，则其持有的 ZooKeeper 会话会过期，相应的 znode 锁（一个临时节点）会被自动删除。这会触发定义在该节点上的 Watcher 事件，所有从 Master 会得到通知，并再次开始竞争 znode 锁，直到完成主 Master 的选举。</li></ul><p>HBase 内部保留名为 hbase:meta 的特殊目录表（catalog table）。它维护着当前集群上所有 region 的列表、状态和位置。hbase:meta 表中的项使用 region 作为键。region 名由所属的表名、region 的起始行、region的创建时间以及基于整体计算得出的 MD5 组成。</p><h2 id="hbase-读写流程" tabindex="-1"><a class="header-anchor" href="#hbase-读写流程" aria-hidden="true">#</a> HBase 读写流程</h2><h3 id="写入数据的流程" tabindex="-1"><a class="header-anchor" href="#写入数据的流程" aria-hidden="true">#</a> 写入数据的流程</h3><ol><li>Client 向 Region Server 提交写请求；</li><li>Region Server 找到目标 Region；</li><li>Region 检查数据是否与 Schema 一致；</li><li>如果客户端没有指定版本，则获取当前系统时间作为数据版本；</li><li>将更新写入 WAL Log；</li><li>将更新写入 Memstore；</li><li>判断 Memstore 存储是否已满，如果存储已满则需要 flush 为 Store Hfile 文件。</li></ol>',41),d={href:"http://hbasefly.com/2016/03/23/hbase_writer/",target:"_blank",rel:"noopener noreferrer"},h=a('<h3 id="读取数据的流程" tabindex="-1"><a class="header-anchor" href="#读取数据的流程" aria-hidden="true">#</a> 读取数据的流程</h3><p>以下是客户端首次读写 HBase 上数据的流程：</p><ol><li>客户端从 Zookeeper 获取 <code>META</code> 表所在的 Region Server；</li><li>客户端访问 <code>META</code> 表所在的 Region Server，从 <code>META</code> 表中查询到访问行键所在的 Region Server，之后客户端将缓存这些信息以及 <code>META</code> 表的位置；</li><li>客户端从行键所在的 Region Server 上获取数据。</li></ol><p>如果再次读取，客户端将从缓存中获取行键所在的 Region Server。这样客户端就不需要再次查询 <code>META</code> 表，除非 Region 移动导致缓存失效，这样的话，则将会重新查询并更新缓存。</p><p>注：<code>META</code> 表是 HBase 中一张特殊的表，它保存了所有 Region 的位置信息，META 表自己的位置信息则存储在 ZooKeeper 上。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200601182655.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',6),p=e("p",null,"更为详细读取数据流程参考：",-1),u={href:"http://hbasefly.com/2016/12/21/hbase-getorscan/",target:"_blank",rel:"noopener noreferrer"},b={href:"http://hbasefly.com/2017/06/11/hbase-scan-2/",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),r(" 参考资料")],-1),f=e("strong",null,"官方",-1),_={href:"http://hbase.apache.org/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://hbase.apache.org/book.html",target:"_blank",rel:"noopener noreferrer"},R={href:"http://abloz.com/hbase/book.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://hbase.apache.org/apidocs/index.html",target:"_blank",rel:"noopener noreferrer"},H=e("strong",null,"教程",-1),B={href:"https://github.com/heibaiying/BigData-Notes",target:"_blank",rel:"noopener noreferrer"},k=e("strong",null,"文章",-1),M={href:"https://static.googleusercontent.com/media/research.google.com/zh-CN//archive/bigtable-osdi06.pdf",target:"_blank",rel:"noopener noreferrer"},x={href:"https://mapr.com/blog/in-depth-look-hbase-architecture/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://juejin.im/post/5c666cc4f265da2da53eb714",target:"_blank",rel:"noopener noreferrer"},w={href:"https://bighadoop.wordpress.com/tag/hbase/",target:"_blank",rel:"noopener noreferrer"};function y(F,D){const o=t("ExternalLinkIcon");return s(),l("div",null,[c,e("blockquote",null,[e("p",null,[r("更为详细写入流程可以参考："),e("a",d,[r("HBase － 数据写入流程解析"),i(o)])])]),h,e("blockquote",null,[p,e("p",null,[e("a",u,[r("HBase 原理－数据读取流程解析"),i(o)])]),e("p",null,[e("a",b,[r("HBase 原理－迟到的‘数据读取流程部分细节"),i(o)])])]),m,e("ul",null,[e("li",null,[f,e("ul",null,[e("li",null,[e("a",_,[r("HBase 官网"),i(o)])]),e("li",null,[e("a",v,[r("HBase 官方文档"),i(o)])]),e("li",null,[e("a",R,[r("HBase 官方文档中文版"),i(o)])]),e("li",null,[e("a",S,[r("HBase API"),i(o)])])])]),e("li",null,[H,e("ul",null,[e("li",null,[e("a",B,[r("BigData-Notes"),i(o)])])])]),e("li",null,[k,e("ul",null,[e("li",null,[e("a",M,[r("Bigtable: A Distributed Storage System for Structured Data"),i(o)])]),e("li",null,[e("a",x,[r("An In-Depth Look at the HBase Architecture"),i(o)])]),e("li",null,[e("a",A,[r("入门 HBase，看这一篇就够了"),i(o)])]),e("li",null,[e("a",w,[r("https://bighadoop.wordpress.com/tag/hbase/"),i(o)])])])])])])}const z=n(g,[["render",y],["__file","04.HBase架构.html.vue"]]);export{z as default};
