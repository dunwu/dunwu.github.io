import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as s,c as d,a,b as i,d as r,e as n}from"./app-dc48b2dc.js";const o={},p=n('<h1 id="《从-0-开始学大数据》笔记" tabindex="-1"><a class="header-anchor" href="#《从-0-开始学大数据》笔记" aria-hidden="true">#</a> 《从 0 开始学大数据》笔记</h1><h2 id="预习模块" tabindex="-1"><a class="header-anchor" href="#预习模块" aria-hidden="true">#</a> 预习模块</h2><h3 id="_01-丨预习-01-丨大数据技术发展史-大数据的前世今生" tabindex="-1"><a class="header-anchor" href="#_01-丨预习-01-丨大数据技术发展史-大数据的前世今生" aria-hidden="true">#</a> 01 丨预习 01 丨大数据技术发展史：大数据的前世今生</h3><p>大数据技术，起源于 Google 在 2004 年前后发表的三篇论文：</p>',4),h={href:"https://static.googleusercontent.com/media/research.google.com/zh-CN//archive/gfs-sosp2003.pdf",target:"_blank",rel:"noopener noreferrer"},c={href:"https://static.googleusercontent.com/media/research.google.com/zh-CN//archive/bigtable-osdi06.pdf",target:"_blank",rel:"noopener noreferrer"},u={href:"https://static.googleusercontent.com/media/research.google.com/zh-CN//archive/mapreduce-osdi04.pdf",target:"_blank",rel:"noopener noreferrer"},g=n(`<p>Doug Cutting 根据 Google 论文开发了 Hadoop。</p><p>大数据处理的主要应用场景包括数据分析、数据挖掘与机器学习。</p><p>数据分析主要使用 Hive、Spark SQL 等 SQL 引擎完成；</p><p>数据挖掘与机器学习则有专门的机器学习框架 TensorFlow、Mahout 以及 MLlib 等，内置了主要的机器学习和数据挖掘算法。</p><p>大数据要存入分布式文件系统（HDFS），要有序调度 MapReduce 和 Spark 作业执行，并能把执行结果写入到各个应用系统的数据库中，还需要有一个大数据平台整合所有这些大数据组件和企业应用系统。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230223134708.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_02-丨预习-02-丨大数据应用发展史-从搜索引擎到人工智能" tabindex="-1"><a class="header-anchor" href="#_02-丨预习-02-丨大数据应用发展史-从搜索引擎到人工智能" aria-hidden="true">#</a> 02 丨预习 02 丨大数据应用发展史：从搜索引擎到人工智能</h3><p>大数据的应用领域：</p><ul><li><strong>搜索引擎</strong>：GFS 和 MapReduce 开启了超大规模的分布式存储和分布式计算应用。</li><li><strong>数据仓库</strong>：Hive 实现了用更低廉的价格获得比以往多得多的数据存储与计算能力。</li><li><strong>数据挖掘</strong>：基于海量数据进行关联分析。应用有：关联推荐、用户画像、关系图谱</li><li><strong>机器学习</strong>：有了大数据，可以把全部的历史数据都收集起来，统计其规律，进而预测正在发生的事情。</li></ul><h3 id="_03-丨预习-03-丨大数据应用领域-数据驱动一切" tabindex="-1"><a class="header-anchor" href="#_03-丨预习-03-丨大数据应用领域-数据驱动一切" aria-hidden="true">#</a> 03 丨预习 03 丨大数据应用领域：数据驱动一切</h3><p>大数据的行业应用：</p><ul><li>医疗健康领域 <ul><li>医学影像智能识别</li><li>病历大数据智能诊疗</li></ul></li><li>教育领域 <ul><li>AI 外语老师</li><li>智能解题</li></ul></li><li>社交媒体领域：舆情监控与分析</li><li>金融领域：大数据风控</li><li>新零售领域：全链路管理</li><li>交通领域 <ul><li>实时采集监控数据</li><li>判断道路拥堵状态</li><li>无人驾驶技术</li></ul></li></ul><h2 id="模块一、hadoop-大数据原理与架构" tabindex="-1"><a class="header-anchor" href="#模块一、hadoop-大数据原理与架构" aria-hidden="true">#</a> 模块一、Hadoop 大数据原理与架构</h2><h3 id="_04-移动计算比移动数据更划算" tabindex="-1"><a class="header-anchor" href="#_04-移动计算比移动数据更划算" aria-hidden="true">#</a> 04 | 移动计算比移动数据更划算</h3><p>传统计算模型：输入 -&gt; 计算 -&gt; 输出，面对海量数据（TB 级甚至 PB 级），无法应对。</p><p>移动计算将程序分发到数据所在的地方进行计算，也就是所谓的移动计算比移动数据更划算。</p><p>移动计算步骤：</p><ol><li>将待处理的大规模数据存储在服务器集群的所有服务器上，主要使用 HDFS 分布式文件存储系统，将文件分成很多块（Block），以块为单位存储在集群的服务器上。</li><li>大数据引擎根据集群里不同服务器的计算能力，在每台服务器上启动若干分布式任务执行进程，这些进程会等待给它们分配执行任务。</li><li>使用大数据计算框架支持的编程模型进行编程，比如 Hadoop 的 MapReduce 编程模型，或者 Spark 的 RDD 编程模型。应用程序编写好以后，将其打包，MapReduce 和 Spark 都是在 JVM 环境中运行，所以打包出来的是一个 Java 的 JAR 包。</li><li>用 Hadoop 或者 Spark 的启动命令执行这个应用程序的 JAR 包，首先执行引擎会解析程序要处理的数据输入路径，根据输入数据量的大小，将数据分成若干片（Split），每一个数据片都分配给一个任务执行进程去处理。</li><li>任务执行进程收到分配的任务后，检查自己是否有任务对应的程序包，如果没有就去下载程序包，下载以后通过反射的方式加载程序。走到这里，最重要的一步，也就是移动计算就完成了。</li><li>加载程序后，任务执行进程根据分配的数据片的文件地址和数据在文件内的偏移量读取数据，并把数据输入给应用程序相应的方法</li></ol><h3 id="_05-从-raid-看垂直伸缩到水平伸缩的演化" tabindex="-1"><a class="header-anchor" href="#_05-从-raid-看垂直伸缩到水平伸缩的演化" aria-hidden="true">#</a> 05 | 从 RAID 看垂直伸缩到水平伸缩的演化</h3><p>海量数据存储核心问题</p><ul><li>数据存储容量的问题。既然大数据要解决的是数以 PB 计的数据计算问题，而一般的服务器磁盘容量通常 1 ～ 2TB，那么如何存储这么大规模的数据呢？</li><li>数据读写速度的问题。一般磁盘的连续读写速度为几十 MB，以这样的速度，几十 PB 的数据恐怕要读写到天荒地老。</li><li>数据可靠性的问题。磁盘大约是计算机设备中最易损坏的硬件了，通常情况一块磁盘使用寿命大概是一年，如果磁盘损坏了，数据怎么办？</li></ul><p>解决方式是 RAID 技术：</p><ul><li>数据存储容量的问题。RAID 使用了 N 块磁盘构成一个存储阵列，如果使用 RAID 5，数据就可以存储在 N-1 块磁盘上，这样将存储空间扩大了 N-1 倍。</li><li>数据读写速度的问题。RAID 根据可以使用的磁盘数量，将待写入的数据分成多片，并发同时向多块磁盘进行写入，显然写入的速度可以得到明显提高；同理，读取速度也可以得到明显提高。不过，需要注意的是，由于传统机械磁盘的访问延迟主要来自于寻址时间，数据真正进行读写的时间可能只占据整个数据访问时间的一小部分，所以数据分片后对 N 块磁盘进行并发读写操作并不能将访问速度提高 N 倍。</li><li>数据可靠性的问题。使用 RAID 10、RAID 5 或者 RAID 6 方案的时候，由于数据有冗余存储，或者存储校验信息，所以当某块磁盘损坏的时候，可以通过其他磁盘上的数据和校验数据将丢失磁盘上的数据还原。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230224131454.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>实现更强的计算能力和更大规模的数据存储有两种思路</p><ul><li>垂直伸缩（scaling up），即硬件升级</li><li>水平伸缩（scaling out），即分布式系统</li></ul><p>注：RAID 技术就是采用了垂直伸缩的方式。</p><h3 id="_06-新技术层出不穷-hdfs-依然是存储的王者" tabindex="-1"><a class="header-anchor" href="#_06-新技术层出不穷-hdfs-依然是存储的王者" aria-hidden="true">#</a> 06 | 新技术层出不穷，HDFS 依然是存储的王者</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/bigdata/hdfs/hdfs-architecture.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>HDFS 有两个关键组件：DataNode 和 NameNode：</p><ul><li>DataNode 负责文件数据的存储和读写操作，HDFS 将文件数据分割成若干数据块（Block），每个 DataNode 存储一部分数据块，这样文件就分布存储在整个 HDFS 服务器集群中。应用程序客户端（Client）可以并行对这些数据块进行访问，从而使得 HDFS 可以在服务器集群规模上实现数据并行访问，极大地提高了访问速度。</li><li>NameNode 负责整个分布式文件系统的元数据（MetaData）管理，也就是文件路径名、数据块的 ID 以及存储位置等信息，相当于操作系统中文件分配表（FAT）的角色。</li></ul><p>为保证高可用，HDFS 会，会将一个数据块复制为多份（默认为 3 份），并将多份相同的数据块存储在不同的服务器上，甚至不同的机架上。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200224203958.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>HDFS 故障容错：</p><ul><li><strong>数据存储故障容错</strong><ul><li>对于 DataNode 上的数据块进行计算并存储校验和（CheckSum）</li><li>读取数据的时候，重新计算读取出来的数据的校验和，校验和不正确，则抛出异常</li><li>发现异常后，从其他 DataNode 读取备份</li></ul></li><li><strong>磁盘故障容错</strong><ul><li>如果 DataNode 监测到本机磁盘损坏，将该磁盘的所有数据块 ID 报告给 NameNode</li><li>NameNode 检查这些数据块在哪些 DataNode 上有备份，复制一份到其他 DataNode 上</li></ul></li><li><strong>DataNode 故障容错</strong><ul><li>DataNode 会通过心跳和 NameNode 保持通信</li><li>如果 DataNode 超时未发送心跳，NameNode 视其为宕机</li><li>NameNode 查找这个 DataNode 存储的所有数据块，复制一份到其他 DataNode 上</li></ul></li><li><strong>NameNode 故障容错</strong><ul><li>基于 ZooKeeper 实现主从备份</li><li>争夺 znode 锁</li></ul></li></ul><h3 id="_07-为什么说-mapreduce-既是编程模型又是计算框架" tabindex="-1"><a class="header-anchor" href="#_07-为什么说-mapreduce-既是编程模型又是计算框架" aria-hidden="true">#</a> 07 | 为什么说 MapReduce 既是编程模型又是计算框架？</h3><p><strong>MapReduce 既是编程模型，又是计算框架</strong>。</p><p>MapReduce 编程模型只包含 Map 和 Reduce 两个过程，map 的主要输入是一对 <code>&lt;Key, Value&gt;</code> 值，经过 map 计算后输出一对 <code>&lt;Key, Value&gt;</code> 值；然后将相同 Key 合并，形成 <code>&lt;Key, Value 集合&gt;</code>；再将这个 <code>&lt;Key, Value 集合&gt;</code> 输入 reduce，经过计算输出零个或多个 <code>&lt;Key, Value&gt;</code> 对。</p><h3 id="_08-mapreduce-如何让数据完成一次旅行" tabindex="-1"><a class="header-anchor" href="#_08-mapreduce-如何让数据完成一次旅行" aria-hidden="true">#</a> 08 | MapReduce 如何让数据完成一次旅行？</h3><h4 id="mapreduce-作业启动和运行机制" tabindex="-1"><a class="header-anchor" href="#mapreduce-作业启动和运行机制" aria-hidden="true">#</a> MapReduce 作业启动和运行机制</h4><p>大数据应用进程。这类进程是启动 MapReduce 程序的主入口，主要是指定 Map 和 Reduce 类、输入输出文件路径等，并提交作业给 Hadoop 集群，也就是下面提到的 JobTracker 进程。这是由用户启动的 MapReduce 程序进程，比如我们上期提到的 WordCount 程序。</p><p>JobTracker 进程。这类进程根据要处理的输入数据量，命令下面提到的 TaskTracker 进程启动相应数量的 Map 和 Reduce 进程任务，并管理整个作业生命周期的任务调度和监控。这是 Hadoop 集群的常驻进程，需要注意的是，JobTracker 进程在整个 Hadoop 集群全局唯一。</p><p>TaskTracker 进程。这个进程负责启动和管理 Map 进程以及 Reduce 进程。因为需要每个数据块都有对应的 map 函数，TaskTracker 进程通常和 HDFS 的 DataNode 进程启动在同一个服务器。也就是说，Hadoop 集群中绝大多数服务器同时运行 DataNode 进程和 TaskTracker 进程。</p><h4 id="mapreduce-数据合并与连接机制" tabindex="-1"><a class="header-anchor" href="#mapreduce-数据合并与连接机制" aria-hidden="true">#</a> MapReduce 数据合并与连接机制</h4><p>在 map 输出与 reduce 输入之间，MapReduce 计算框架处理数据合并与连接操作，这个操作有个专门的词汇叫 shuffle。分布式计算需要将不同服务器上的相关数据合并到一起进行下一步计算，这就是 shuffle。</p><h3 id="_09-为什么我们管-yarn-叫作资源调度框架" tabindex="-1"><a class="header-anchor" href="#_09-为什么我们管-yarn-叫作资源调度框架" aria-hidden="true">#</a> 09 | 为什么我们管 Yarn 叫作资源调度框架？</h3><p>服务器集群资源调度管理和 MapReduce 执行过程耦合在一起，如果想在当前集群中运行其他计算任务，比如 Spark 或者 Storm，就无法统一使用集群中的资源了。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230227195344.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Yarn 包括两个部分：</p><p>ResourceManager 进程负责整个集群的资源调度管理，通常部署在独立的服务器上；</p><p>NodeManager 进程负责具体服务器上的资源和任务管理，在集群的每一台计算服务器上都会启动，基本上跟 HDFS 的 DataNode 进程一起出现。</p><p>Yarn 的工作流程</p><ol><li>我们向 Yarn 提交应用程序，包括 MapReduce ApplicationMaster、我们的 MapReduce 程序，以及 MapReduce Application 启动命令。</li><li>ResourceManager 进程和 NodeManager 进程通信，根据集群资源，为用户程序分配第一个容器，并将 MapReduce ApplicationMaster 分发到这个容器上面，并在容器里面启动 MapReduce ApplicationMaster。</li><li>MapReduce ApplicationMaster 启动后立即向 ResourceManager 进程注册，并为自己的应用程序申请容器资源。</li><li>MapReduce ApplicationMaster 申请到需要的容器后，立即和相应的 NodeManager 进程通信，将用户 MapReduce 程序分发到 NodeManager 进程所在服务器，并在容器中运行，运行的就是 Map 或者 Reduce 任务。</li><li>Map 或者 Reduce 任务在运行期和 MapReduce ApplicationMaster 通信，汇报自己的运行状态，如果运行结束，MapReduce ApplicationMaster 向 ResourceManager 进程注销并释放所有的容器资源。</li></ol><h3 id="_10-模块答疑-我们能从-hadoop-学到什么" tabindex="-1"><a class="header-anchor" href="#_10-模块答疑-我们能从-hadoop-学到什么" aria-hidden="true">#</a> 10 | 模块答疑：我们能从 Hadoop 学到什么？</h3><p>Hadoop 几个主要产品的架构设计，就会发现它们都有相似性，都是一主多从的架构方案。</p><ul><li>HDFS，一个 NameNode，多个 DataNode；</li><li>MapReduce，一个 JobTracker，多个 TaskTracker；</li><li>Yarn，一个 ResourceManager，多个 NodeManager。</li></ul><p>事实上，很多大数据产品都是这样的架构方案：</p><p>Storm，一个 Nimbus，多个 Supervisor；</p><p>Spark，一个 Master，多个 Slave。</p><p>大数据因为要对数据和计算任务进行统一管理，所以和互联网在线应用不同，需要一个全局管理者。一言以蔽之：<strong>集中管理，分布存储与计算</strong></p><h2 id="模块二、大数据生态体系主要产品原理与架构" tabindex="-1"><a class="header-anchor" href="#模块二、大数据生态体系主要产品原理与架构" aria-hidden="true">#</a> 模块二、大数据生态体系主要产品原理与架构</h2><h3 id="_11-hive-是如何让-mapreduce-实现-sql-操作的" tabindex="-1"><a class="header-anchor" href="#_11-hive-是如何让-mapreduce-实现-sql-操作的" aria-hidden="true">#</a> 11 | Hive 是如何让 MapReduce 实现 SQL 操作的？</h3><p>Hive 能够直接处理我们输入的 SQL 语句（Hive 的 SQL 语法和数据库标准 SQL 略有不同），调用 MapReduce 计算框架完成数据分析操作。</p><p>我们通过 Hive 的 Client（Hive 的命令行工具，JDBC 等）向 Hive 提交 SQL 命令。如果是创建数据表的 DDL（数据定义语言），Hive 就会通过执行引擎 Driver 将数据表的信息记录在 Metastore 元数据组件中，这个组件通常用一个关系数据库实现，记录表名、字段名、字段类型、关联 HDFS 文件路径等这些数据库的 Meta 信息（元信息）。</p><p>如果我们提交的是查询分析数据的 DQL（数据查询语句），Driver 就会将该语句提交给自己的编译器 Compiler 进行语法分析、语法解析、语法优化等一系列操作，最后生成一个 MapReduce 执行计划。然后根据执行计划生成一个 MapReduce 的作业，提交给 Hadoop MapReduce 计算框架处理。</p><h3 id="_12-我们并没有觉得-mapreduce-速度慢-直到-spark-出现" tabindex="-1"><a class="header-anchor" href="#_12-我们并没有觉得-mapreduce-速度慢-直到-spark-出现" aria-hidden="true">#</a> 12 | 我们并没有觉得 MapReduce 速度慢，直到 Spark 出现</h3><p>RDD 是 Spark 的核心概念，是弹性数据集（Resilient Distributed Datasets）的缩写。RDD 既是 Spark 面向开发者的编程模型，又是 Spark 自身架构的核心元素。</p><p>Spark 上编写 WordCount 程序，主要代码只需要三行</p><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">val</span> textFile <span class="token operator">=</span> sc<span class="token punctuation">.</span>textFile<span class="token punctuation">(</span><span class="token string">&quot;hdfs://...&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">val</span> counts <span class="token operator">=</span> textFile<span class="token punctuation">.</span>flatMap<span class="token punctuation">(</span>line <span class="token keyword">=&gt;</span> line<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span>map<span class="token punctuation">(</span>word <span class="token keyword">=&gt;</span> <span class="token punctuation">(</span>word<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span>reduceByKey<span class="token punctuation">(</span>_ <span class="token operator">+</span> _<span class="token punctuation">)</span>
counts<span class="token punctuation">.</span>saveAsTextFile<span class="token punctuation">(</span><span class="token string">&quot;hdfs://...&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MapReduce 针对输入数据，将计算过程分为两个阶段，一个 Map 阶段，一个 Reduce 阶段，可以理解成是面向过程的大数据计算。</p><p>而 Spark 则直接针对数据进行编程，将大规模数据集合抽象成一个 RDD 对象，然后在这个 RDD 上进行各种计算处理，得到一个新的 RDD，继续计算处理，直到得到最后的结果数据。所以 Spark 可以理解成是面向对象的大数据计算。</p><p>RDD 上定义的函数分两种，一种是转换（transformation）函数，这种函数的返回值还是 RDD；另一种是执行（action）函数，这种函数不再返回 RDD。</p><p>RDD 定义了很多转换操作函数，比如有计算 map(func)、过滤 filter(func)、合并数据集 union(otherDataset)、根据 Key 聚合 reduceByKey(func, [numPartitions])、连接数据集 join(otherDataset, [numPartitions])、分组 groupByKey([numPartitions]) 等十几个函数。</p><h3 id="_13-同样的本质-为何-spark-可以更高效" tabindex="-1"><a class="header-anchor" href="#_13-同样的本质-为何-spark-可以更高效" aria-hidden="true">#</a> 13 | 同样的本质，为何 Spark 可以更高效？</h3><p>Spark 有三个主要特性：RDD 的编程模型更简单，DAG 切分的多阶段计算过程更快速，使用内存存储中间计算结果更高效。这三个特性使得 Spark 相对 Hadoop MapReduce 可以有更快的执行速度，以及更简单的编程实现。</p><h3 id="_14-bigtable-的开源实现-hbase" tabindex="-1"><a class="header-anchor" href="#_14-bigtable-的开源实现-hbase" aria-hidden="true">#</a> 14 | BigTable 的开源实现：HBase</h3><h4 id="hbase-可伸缩架构" tabindex="-1"><a class="header-anchor" href="#hbase-可伸缩架构" aria-hidden="true">#</a> HBase 可伸缩架构</h4><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230303145832.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>HBase 的伸缩性主要依赖其可分裂的 HRegion 及可伸缩的分布式文件系统 HDFS 实现。</p><p>HRegion 是 HBase 负责数据存储的主要进程，应用程序对数据的读写操作都是通过和 HRegion 通信完成。上面是 HBase 架构图，我们可以看到在 HBase 中，数据以 HRegion 为单位进行管理，也就是说应用程序如果想要访问一个数据，必须先找到 HRegion，然后将数据读写操作提交给 HRegion，由 HRegion 完成存储层面的数据操作。</p><p>HRegionServer 是物理服务器，每个 HRegionServer 上可以启动多个 HRegion 实例。当一个 HRegion 中写入的数据太多，达到配置的阈值时，一个 HRegion 会分裂成两个 HRegion，并将 HRegion 在整个集群中进行迁移，以使 HRegionServer 的负载均衡。</p><p>每个 HRegion 中存储一段 Key 值区间 [key1, key2) 的数据，所有 HRegion 的信息，包括存储的 Key 值区间、所在 HRegionServer 地址、访问端口号等，都记录在 HMaster 服务器上。为了保证 HMaster 的高可用，HBase 会启动多个 HMaster，并通过 ZooKeeper 选举出一个主服务器。</p><p>应用程序通过 ZooKeeper 获得主 HMaster 的地址，输入 Key 值获得这个 Key 所在的 HRegionServer 地址，然后请求 HRegionServer 上的 HRegion，获得所需要的数据。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230303150211.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>HRegion 会把数据存储在若干个 HFile 格式的文件中，这些文件使用 HDFS 分布式文件系统存储，在整个集群内分布并高可用。当一个 HRegion 中数据量太多时，这个 HRegion 连同 HFile 会分裂成两个 HRegion，并根据集群中服务器负载进行迁移。如果集群中有新加入的服务器，也就是说有了新的 HRegionServer，由于其负载较低，也会把 HRegion 迁移过去并记录到 HMaster，从而实现 HBase 的线性伸缩。</p><h4 id="hbase-可扩展数据模型" tabindex="-1"><a class="header-anchor" href="#hbase-可扩展数据模型" aria-hidden="true">#</a> HBase 可扩展数据模型</h4><p>支持列族结构的 NoSQL 数据库，在创建表的时候，只需要指定列族的名字，无需指定字段（Column）。那什么时候指定字段呢？可以在数据写入时再指定。通过这种方式， 数据表可以包含数百万的字段，这样就可以随意扩展应用程序的数据结构了。并且这种数据库在查询时也很方便，可以通过指定任意字段名称和值进行查询。</p><p>HBase 这种列族的数据结构设计，实际上是把字段的名称和字段的值，以 Key-Value 的方式一起存储在 HBase 中。实际写入的时候，可以随意指定字段名称，即使有几百万个字段也能轻松应对。</p><h4 id="hbase-的高性能存储" tabindex="-1"><a class="header-anchor" href="#hbase-的高性能存储" aria-hidden="true">#</a> HBase 的高性能存储</h4><p>HBase 使用了一种叫作 LSM 树（Log 结构合并树）的数据结构进行数据存储。数据写入的时候以 Log 方式连续写入，然后异步对磁盘上的多个 LSM 树进行合并。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230303154832.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>LSM 树可以看作是一个 N 阶合并树。数据写操作（包括插入、修改、删除）都在内存中进行，并且都会创建一个新记录（修改会记录新的数据值，而删除会记录一个删除标志）。这些数据在内存中仍然还是一棵排序树，当数据量超过设定的内存阈值后，会将这棵排序树和磁盘上最新的排序树合并。当这棵排序树的数据量也超过设定阈值后，会和磁盘上下一级的排序树合并。合并过程中，会用最新更新的数据覆盖旧的数据（或者记录为不同版本）。</p><h3 id="_15-流式计算的代表-storm、flink、spark-streaming" tabindex="-1"><a class="header-anchor" href="#_15-流式计算的代表-storm、flink、spark-streaming" aria-hidden="true">#</a> 15 | 流式计算的代表：Storm、Flink、Spark Streaming</h3><h3 id="_16-zookeeper-是如何保证数据一致性的" tabindex="-1"><a class="header-anchor" href="#_16-zookeeper-是如何保证数据一致性的" aria-hidden="true">#</a> 16 | ZooKeeper 是如何保证数据一致性的？</h3><p>分布式系统中的“脑裂”是指一个系统中的节点被分隔成两个或多个独立的部分，这些部分无法互相通信，导致系统出现不一致性和数据丢失的问题。通常情况下，“脑裂”是由于网络故障、硬件故障或者软件故障等因素导致的。</p><p>包括 HDFS 在内的很多大数据技术都选择了使用 ZooKeeper 来解决多台服务器的状态一致性问题。</p><p>ZooKeeper 使用了一种叫 ZAB 算法来解决一致性问题。ZAB 可视为 Paxos 算法的一种简化方案。</p><h3 id="_17-丨模块答疑-这么多技术-到底都能用在什么场景里" tabindex="-1"><a class="header-anchor" href="#_17-丨模块答疑-这么多技术-到底都能用在什么场景里" aria-hidden="true">#</a> 17 丨模块答疑：这么多技术，到底都能用在什么场景里？</h3><p>大数据技术在实际部署的时候，通常会部署在同一个集群中，也就是说，在由很多台服务器组成的服务器集群中，某台服务器可能运行着 HDFS 的 DataNode 进程，负责 HDFS 的数据存储；同时也运行着 Yarn 的 NodeManager，负责计算资源的调度管理；而 MapReduce、Spark、Storm、Flink 这些批处理或者流处理大数据计算引擎则通过 Yarn 的调度，运行在 NodeManager 的容器（container）里面。至于 Hive、Spark SQL 这些运行在 MapReduce 或者 Spark 基础上的大数据仓库引擎，在经过自身的执行引擎将 SQL 语句解析成 MapReduce 或者 Spark 的执行计划以后，一样提交给 Yarn 去调度执行。</p><h2 id="模块三、大数据开发实践" tabindex="-1"><a class="header-anchor" href="#模块三、大数据开发实践" aria-hidden="true">#</a> 模块三、大数据开发实践</h2><h3 id="_18-如何自己开发一个大数据-sql-引擎" tabindex="-1"><a class="header-anchor" href="#_18-如何自己开发一个大数据-sql-引擎" aria-hidden="true">#</a> 18 | 如何自己开发一个大数据 SQL 引擎？</h3><h3 id="_19-spark-的性能优化案例分析-上" tabindex="-1"><a class="header-anchor" href="#_19-spark-的性能优化案例分析-上" aria-hidden="true">#</a> 19 | Spark 的性能优化案例分析（上）</h3><p>性能指标：</p><ul><li>响应时间：完成一次任务（请求）花费的时间。</li><li>并发数：同时处理的任务数（请求数）。</li><li>吞吐量：单位时间完成的任务数（请求数、事务数、查询数……）。</li><li>性能计数器：System Load，线程数，进程数，CPU、内存、磁盘、网络使用率等。</li></ul><p>Spark 性能优化可以分解为下面几步。</p><ol><li>性能测试，观察 Spark 性能特性和资源（CPU、Memory、Disk、Net）利用情况。</li><li>分析、寻找资源瓶颈。</li><li>分析系统架构、代码，发现资源利用关键所在，思考优化策略。</li><li>代码、架构、基础设施调优，优化、平衡资源利用。</li><li>性能测试，观察系统性能特性，是否达到优化目的，以及寻找下一个瓶颈点。</li></ol><h3 id="_20-spark-的性能优化案例分析-下" tabindex="-1"><a class="header-anchor" href="#_20-spark-的性能优化案例分析-下" aria-hidden="true">#</a> 20 | Spark 的性能优化案例分析（下）</h3><h3 id="_21-从阿里内部产品看海量数据处理系统的设计-上-doris-的立项" tabindex="-1"><a class="header-anchor" href="#_21-从阿里内部产品看海量数据处理系统的设计-上-doris-的立项" aria-hidden="true">#</a> 21 | 从阿里内部产品看海量数据处理系统的设计（上）：Doris 的立项</h3><h3 id="_22-从阿里内部产品看海量数据处理系统的设计-下-架构与创新" tabindex="-1"><a class="header-anchor" href="#_22-从阿里内部产品看海量数据处理系统的设计-下-架构与创新" aria-hidden="true">#</a> 22 | 从阿里内部产品看海量数据处理系统的设计（下）：架构与创新</h3><h3 id="_23-大数据基准测试可以带来什么好处" tabindex="-1"><a class="header-anchor" href="#_23-大数据基准测试可以带来什么好处" aria-hidden="true">#</a> 23 | 大数据基准测试可以带来什么好处？</h3><p>大数据基准测试工具：</p>`,111),f={href:"https://github.com/Intel-bigdata/HiBench",target:"_blank",rel:"noopener noreferrer"},m=n('<h3 id="_24-丨从大数据性能测试工具-dew-看如何快速开发大数据系统" tabindex="-1"><a class="header-anchor" href="#_24-丨从大数据性能测试工具-dew-看如何快速开发大数据系统" aria-hidden="true">#</a> 24 丨从大数据性能测试工具 Dew 看如何快速开发大数据系统</h3><h3 id="_25-模块答疑-我能从大厂的大数据开发实践中学到什么" tabindex="-1"><a class="header-anchor" href="#_25-模块答疑-我能从大厂的大数据开发实践中学到什么" aria-hidden="true">#</a> 25 | 模块答疑：我能从大厂的大数据开发实践中学到什么？</h3><p>学习层次</p><ol><li>练习</li><li>应用</li><li>开发</li></ol><h2 id="模块四、大数据平台与系统集成" tabindex="-1"><a class="header-anchor" href="#模块四、大数据平台与系统集成" aria-hidden="true">#</a> 模块四、大数据平台与系统集成</h2><h3 id="_26-互联网产品-大数据产品-大数据平台" tabindex="-1"><a class="header-anchor" href="#_26-互联网产品-大数据产品-大数据平台" aria-hidden="true">#</a> 26 | 互联网产品 + 大数据产品 = 大数据平台</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230313105947.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>数据采集：数据库同步通常用 Sqoop，日志同步可以选择 Flume，打点采集的数据经过格式化转换后通过 Kafka 等消息队列进行传递</li><li>数据处理：离线计算：MapReduce、Hive、Spark；实时计算：Storm、Spark Streaming、Flink</li><li>数据展示：Lambda 架构</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230313111021.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_27-大数据从哪里来" tabindex="-1"><a class="header-anchor" href="#_27-大数据从哪里来" aria-hidden="true">#</a> 27 | 大数据从哪里来？</h3><p>大数据平台的数据来源主要有数据库、日志、前端程序埋点、爬虫系统。</p><ul><li>数据库导入 <ul><li>Sqoop：Sqoop 是一个数据库批量导入导出工具，可以将关系数据库的数据批量导入到 Hadoop，也可以将 Hadoop 的数据导出到关系数据库。</li><li>Canal：Canal 是阿里巴巴开源的一个 MySQL binlog 获取工具，binlog 是 MySQL 的事务日志，可用于 MySQL 数据库主从复制，Canal 将自己伪装成 MySQL 从库，从 MySQL 获取 binlog。</li></ul></li><li>日志文件导入 <ul><li>Flume：Flume 是大数据日志收集常用的工具。</li></ul></li><li>前端程序埋点 <ul><li>手动埋点</li><li>自动埋点</li></ul></li><li>爬虫</li></ul><h3 id="_28-知名大厂如何搭建大数据平台" tabindex="-1"><a class="header-anchor" href="#_28-知名大厂如何搭建大数据平台" aria-hidden="true">#</a> 28 | 知名大厂如何搭建大数据平台？</h3><p>淘宝大数据平台</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230313113641.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>美团大数据平台</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230313113700.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>滴滴大数据平台</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230313113720.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_29-盘点可供中小企业参考的商业大数据平台" tabindex="-1"><a class="header-anchor" href="#_29-盘点可供中小企业参考的商业大数据平台" aria-hidden="true">#</a> 29 | 盘点可供中小企业参考的商业大数据平台</h3><h4 id="大数据解决方案提供商" tabindex="-1"><a class="header-anchor" href="#大数据解决方案提供商" aria-hidden="true">#</a> 大数据解决方案提供商</h4><p>CDH、TDH</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230313114058.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>CDH 是一个大数据集成平台，将主流大数据产品都集成到这个平台中，企业可以使用 CDH 一站式部署整个大数据技术栈。从架构分层角度，CDH 可以分为 4 层：系统集成，大数据存储，统一服务，过程、分析与计算。</p><ol><li>系统集成：数据库导入导出用 Sqoop，日志导入导出用 Flume，其他实时数据导入导出用 Kafka。</li><li>大数据存储：文件系统用 HDFS，结构化数据用 Kudu，NoSQL 存储用 HBase，其他还有对象存储。</li><li>统一服务：资源管理用 Yarn，安全管理用 Sentry 和 RecordService 细粒度地管理不同用户数据的访问权限。</li><li>过程、分析与计算：批处理计算用 MapReduce、Spark、Hive、Pig，流计算用 SparkStreaming，快速 SQL 分析用 Impala，搜索服务用 Solr。</li></ol><h4 id="大数据云计算服务商" tabindex="-1"><a class="header-anchor" href="#大数据云计算服务商" aria-hidden="true">#</a> 大数据云计算服务商</h4><p>阿里云、亚马逊</p><h4 id="大数据-saas-服务商" tabindex="-1"><a class="header-anchor" href="#大数据-saas-服务商" aria-hidden="true">#</a> 大数据 SaaS 服务商</h4><p>友盟、神策、百度统计</p><h4 id="大数据开放平台" tabindex="-1"><a class="header-anchor" href="#大数据开放平台" aria-hidden="true">#</a> 大数据开放平台</h4><h3 id="_30-当大数据遇上物联网" tabindex="-1"><a class="header-anchor" href="#_30-当大数据遇上物联网" aria-hidden="true">#</a> 30 | 当大数据遇上物联网</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230313144317.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>智能网关通过消息队列将数据上传到物联网大数据平台，Storm 等流式计算引擎从消息队列获取数据，对数据的处理分三个方面。数据进行清理转换后写入到大数据存储系统。调用规则和机器学习模型，对上传数据进行计算，如果触发了某种执行规则，就将控制信息通过设备管理服务器下发给智能网关，并进一步控制终端智能设备。</li><li>Spark 等离线计算引擎定时对写入存储系统的数据进行批量计算处理，进行全量统计分析和机器学习，并更新机器学习模型。</li><li>应用程序也可以通过设备管理服务器直接发送控制指令给智能网关，控制终端智能设备。</li></ol><h3 id="_31-模块答疑-为什么大数据平台至关重要" tabindex="-1"><a class="header-anchor" href="#_31-模块答疑-为什么大数据平台至关重要" aria-hidden="true">#</a> 31 | 模块答疑：为什么大数据平台至关重要？</h3><h2 id="模块五、大数据分析与运营" tabindex="-1"><a class="header-anchor" href="#模块五、大数据分析与运营" aria-hidden="true">#</a> 模块五、大数据分析与运营</h2><h3 id="_32-互联网运营数据指标与可视化监控" tabindex="-1"><a class="header-anchor" href="#_32-互联网运营数据指标与可视化监控" aria-hidden="true">#</a> 32 | 互联网运营数据指标与可视化监控</h3><p>运营常用数据指标</p><ul><li>新增用户数</li><li>用户留存率</li><li>活跃用户数</li><li>PV（Page View）</li><li>GMV（Gross Merchandise Volume），即成交总金额</li><li>转化率 = 付费用户数 / 总用户数</li></ul><h3 id="_33-丨一个电商网站订单下降的数据分析案例" tabindex="-1"><a class="header-anchor" href="#_33-丨一个电商网站订单下降的数据分析案例" aria-hidden="true">#</a> 33 丨一个电商网站订单下降的数据分析案例</h3><h3 id="_34-丨-a-b-测试与灰度发布必知必会" tabindex="-1"><a class="header-anchor" href="#_34-丨-a-b-测试与灰度发布必知必会" aria-hidden="true">#</a> 34 丨 A-B 测试与灰度发布必知必会</h3><h4 id="a-b-测试的过程" tabindex="-1"><a class="header-anchor" href="#a-b-测试的过程" aria-hidden="true">#</a> A/B 测试的过程</h4><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230313151335.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="a-b-测试的系统架构" tabindex="-1"><a class="header-anchor" href="#a-b-测试的系统架构" aria-hidden="true">#</a> A/B 测试的系统架构</h4><p>A/B 测试系统最重要的是能够根据用户 ID（或者设备 ID）将实验配置参数分发给应用程序，应用程序根据配置参数决定给用户展示的界面和执行的业务逻辑</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230313151508.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="灰度发布" tabindex="-1"><a class="header-anchor" href="#灰度发布" aria-hidden="true">#</a> 灰度发布</h4><h3 id="_35-丨如何利用大数据成为-增长黑客" tabindex="-1"><a class="header-anchor" href="#_35-丨如何利用大数据成为-增长黑客" aria-hidden="true">#</a> 35 丨如何利用大数据成为“增长黑客”？</h3><p>AARRR 用户增长模型：它描述了用户增长的 5 个关键环节，分别是：获取用户（Acquisition）、提高活跃度（Activation）、提高留存率（Retention）、获取收入（Revenue）和自传播（Refer）。</p><ul><li>获取用户：通过各种推广手段，使产品触达用户并吸引用户，让用户访问我们的产品。</li><li>提高活跃度：用户访问我们的产品后，如果发现没意思、体验差，就很难再次打开，产品的价值也就无法实现。因此需要结合产品内容、运营活动各种手段吸引用户，提升产品的活跃度。</li><li>提高留存率：留住一个老用户的成本远低于获取一个新用户，而真正为产品带来营收利润的通常是老用户，因此需要提高留存率。提高留存率的常用手段有：针对老用户推出各种优惠和活动；建立会员等级体系，注册时间越长等级越高；对于一段时间没有访问的疑似流失用户进行消息短信推送以实现用户挽回等。</li><li>获取收入：做企业不是做慈善，开发、运营互联网产品的最终目的还是为了赚钱，即获取收入。互联网产品收入主要有用户付费和广告收入，有些互联网产品看起来是用户付费，但其实主要营收是广告收入，比如淘宝。</li><li>自传播：让用户利用利用自己的社交网络进行产品推广就是自传播，几乎所有的互联网产品都有“分享到”这样一个功能按钮，促进用户社交传播。有些产品还会利用“帮我砍价”“帮我抢票”等产品功能推动用户进行分享，实现产品的裂变式传播、病毒式营销。</li></ul><p>增长用户的手段主要有：</p><p>利用用户画像定位用户群体</p><ul><li>通过用户分析挽回用户</li><li>A/B 测试决定产品功能</li><li>大数据反欺诈、反羊毛</li><li>用户生命周期管理</li></ul><h3 id="_36-丨模块答疑-为什么说数据驱动运营" tabindex="-1"><a class="header-anchor" href="#_36-丨模块答疑-为什么说数据驱动运营" aria-hidden="true">#</a> 36 丨模块答疑：为什么说数据驱动运营？</h3><p>略</p><h2 id="模块六、大数据算法" tabindex="-1"><a class="header-anchor" href="#模块六、大数据算法" aria-hidden="true">#</a> 模块六、大数据算法</h2><h3 id="_37-丨如何对数据进行分类和预测" tabindex="-1"><a class="header-anchor" href="#_37-丨如何对数据进行分类和预测" aria-hidden="true">#</a> 37 丨如何对数据进行分类和预测？</h3><p>KNN 算法：KNN 算法，即 K 近邻（K Nearest Neighbour）算法，是一种基本的分类算法。其主要原理是：对于一个需要分类的数据，将其和一组已经分类标注好的样本集合进行比较，得到距离最近的 K 个样本，K 个样本最多归属的类别，就是这个需要分类数据的类别。</p><p>数据的距离：</p><ul><li>欧氏距离：计算空间距离</li><li>余弦相似度：计算向量的夹角。更关注数据的相似性</li></ul><p>文本的特征值：</p><ul><li>TF-IDF 算法：TF 与 IDF 的乘积就是 TF-IDF。 <ul><li>TF 是词频（Term Frequency），表示某个单词在文档中出现的频率，一个单词在一个文档中出现的越频繁，TF 值越高。</li><li>IDF 是逆文档频率（Inverse Document Frequency），表示这个单词在所有文档中的稀缺程度，越少文档出现这个词，IDF 值越高。</li></ul></li></ul><p>贝叶斯分类：贝叶斯公式是一种基于条件概率的分类算法，如果我们已经知道 A 和 B 的发生概率，并且知道了 B 发生情况下 A 发生的概率，可以用贝叶斯公式计算 A 发生的情况下 B 发生的概率。</p><h3 id="_38-丨如何发掘数据之间的关系" tabindex="-1"><a class="header-anchor" href="#_38-丨如何发掘数据之间的关系" aria-hidden="true">#</a> 38 丨如何发掘数据之间的关系？</h3><p>搜索排序：Google PageRank 算法</p><p>关联分析：</p><ul><li>Apriori 算法：Apriori 算法极大地降低了需要计算的商品组合数目，这个算法的原理是，如果一个商品组合不满足最小支持度，那么所有包含这个商品组合的其他商品组合也不满足最小支持度。所以从最小商品组合，也就是一件商品开始计算最小支持度，逐渐迭代，进而筛选出所有满足最小支持度的频繁模式。其步骤如下： <ol><li>设置最小支持度阈值。</li><li>寻找满足最小支持度的单件商品，也就是单件商品出现在所有订单中的概率不低于最小支持度。</li><li>从第 2 步找到的所有满足最小支持度的单件商品中，进行两两组合，寻找满足最小支持度的两件商品组合，也就是两件商品出现在同一个订单中概率不低于最小支持度。</li><li>从第 3 步找到的所有满足最小支持度的两件商品，以及第 2 步找到的满足最小支持度的单件商品进行组合，寻找满足最小支持度的三件商品组合。</li><li>以此类推，找到所有满足最小支持度的商品组合。</li></ol></li></ul><p>聚类：聚类就是对一批数据进行自动归类。</p><p>K-means 算法</p><h3 id="_39-丨如何预测用户的喜好" tabindex="-1"><a class="header-anchor" href="#_39-丨如何预测用户的喜好" aria-hidden="true">#</a> 39 丨如何预测用户的喜好？</h3><p>基于人口统计的推荐：基于人口统计的推荐是相对比较简单的一种推荐算法，根据用户的基本信息进行分类，然后将商品推荐给同类用户。</p><p>基于产品属性的推荐：基于用户的属性进行分类，然后根据同类用户的行为进行推荐。而基于商品属性的推荐则是将商品的属性进行分类，然后根据用户的历史行为进行推荐。</p><p>基于用户的协同过滤推荐：基于用户的协同过滤推荐是根据用户的喜好进行用户分类，常用的就是 KNN 算法，寻找和当前用户喜好最相近的 K 个用户，然后根据这些用户的喜好为当前用户进行推荐。</p><p>基于商品的协同过滤推荐：根据用户的喜好对商品进行分类，如果两个商品，喜欢它们的用户具有较高的重叠性，就认为它们的距离相近，划分为同类商品，然后进行推荐</p><h3 id="_40-丨机器学习的数学原理是什么" tabindex="-1"><a class="header-anchor" href="#_40-丨机器学习的数学原理是什么" aria-hidden="true">#</a> 40 丨机器学习的数学原理是什么？</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230313161656.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>样本：样本就是通常我们常说的“训练数据”，包括输入和结果两部分。</p><p>模型：模型就是映射样本输入与样本结果的函数，可能是一个条件概率分布，也可能是一个决策函数。</p><p>算法：算法就是要从模型的假设空间中寻找一个最优的函数，使得样本空间的输入 X 经过该函数的映射得到的 f(X)，和真实的 Y 值之间的距离最小。这个最优的函数通常没办法直接计算得到，即没有解析解，需要用数值计算的方法不断迭代求解。因此如何寻找到 f 函数的全局最优解，以及使寻找过程尽量高效，就构成了机器学习的算法。</p><h3 id="_41-丨从感知机到神经网络算法" tabindex="-1"><a class="header-anchor" href="#_41-丨从感知机到神经网络算法" aria-hidden="true">#</a> 41 丨从感知机到神经网络算法</h3><h3 id="_42-丨模块答疑-软件工程师如何进入人工智能领域" tabindex="-1"><a class="header-anchor" href="#_42-丨模块答疑-软件工程师如何进入人工智能领域" aria-hidden="true">#</a> 42 丨模块答疑：软件工程师如何进入人工智能领域？</h3><p>斯坦福大学的机器学习公开课</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',82),b={href:"https://time.geekbang.org/column/intro/100020201",target:"_blank",rel:"noopener noreferrer"};function _(k,R){const e=l("ExternalLinkIcon");return s(),d("div",null,[p,a("ul",null,[a("li",null,[a("a",h,[i("The Google File System"),r(e)])]),a("li",null,[a("a",c,[i("Bigtable: A Distributed Storage System for Structured Data"),r(e)])]),a("li",null,[a("a",u,[i("MapReduce: Simplified Data Processing on Large Clusters"),r(e)])])]),g,a("p",null,[a("a",f,[i("HiBench"),r(e)])]),m,a("ul",null,[a("li",null,[a("a",b,[i("从 0 开始学大数据"),r(e)])])])])}const H=t(o,[["render",_],["__file","01.从0开始学大数据笔记.html.vue"]]);export{H as default};
