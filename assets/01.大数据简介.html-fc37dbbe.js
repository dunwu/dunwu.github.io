import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c as n,a as e,b as a,d as t,e as d}from"./app-1f12e18b.js";const h={},s=d('<h1 id="大数据简介" tabindex="-1"><a class="header-anchor" href="#大数据简介" aria-hidden="true">#</a> 大数据简介</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><h3 id="什么是大数据" tabindex="-1"><a class="header-anchor" href="#什么是大数据" aria-hidden="true">#</a> 什么是大数据</h3><p>大数据是指超出传统数据库工具收集、存储、管理和分析能力的数据集。与此同时，及时采集、存储、聚合、管理数据，以及对数据深度分析的新技术和新能力，正在快速增长，就像预测计算芯片增长速度的摩尔定律一样。</p><ul><li><strong>Volume</strong> - 数据规模巨大</li><li><strong>Velocity</strong> - 生成和处理速度极快</li><li><strong>Variety</strong> - 数据规模巨大</li><li><strong>Value</strong> - 生成和处理速度极快</li></ul><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3><p>基于大数据的数据仓库</p><p>基于大数据的实时流处理</p><h3 id="hadoop-编年史" tabindex="-1"><a class="header-anchor" href="#hadoop-编年史" aria-hidden="true">#</a> Hadoop 编年史</h3><table><thead><tr><th style="text-align:left;">时间</th><th style="text-align:left;">事件</th></tr></thead><tbody><tr><td style="text-align:left;">2003.01</td><td style="text-align:left;">Google 发表了 Google File System 论文</td></tr><tr><td style="text-align:left;">2004.01</td><td style="text-align:left;">Google 发表了 MapReduce 论文</td></tr><tr><td style="text-align:left;">2006.02</td><td style="text-align:left;">Apache Hadoop 项目正式启动，并支持 MapReduce 和 HDFS 独立发展</td></tr><tr><td style="text-align:left;">2006.11</td><td style="text-align:left;">Google 发表了 Bigtable 论文</td></tr><tr><td style="text-align:left;">2008.01</td><td style="text-align:left;">Hadoop 成为 Apache 顶级项目</td></tr><tr><td style="text-align:left;">2009.03</td><td style="text-align:left;">Cloudera 推出世界上首个 Hadoop 发行版——CDH，并完全开放源码</td></tr><tr><td style="text-align:left;">2012.03</td><td style="text-align:left;">HDFS NameNode HA 加入 Hadoop 主版本</td></tr><tr><td style="text-align:left;">2014.02</td><td style="text-align:left;">Spark 代替 MapReduce 成为 Hadoop 的缺省计算引擎，并成为 Apache 顶级项目</td></tr></tbody></table><h2 id="技术体系" tabindex="-1"><a class="header-anchor" href="#技术体系" aria-hidden="true">#</a> 技术体系</h2><h3 id="hdfs" tabindex="-1"><a class="header-anchor" href="#hdfs" aria-hidden="true">#</a> HDFS</h3><p><strong>概念</strong></p><ul><li>Hadoop 分布式文件系统（Hadoop Distributed File System）</li><li>在开源大数据技术体系中，地位无可替代</li></ul><p><strong>特点</strong></p><ul><li>高容错：数据多副本，副本丢失后自动恢复</li><li>高可用：NameNode HA，安全模式</li><li>高扩展：10K 节点规模</li><li>简单一致性模型：一次写入多次读取，支持追加，不允许修改</li><li>流式数据访问：批量读而非随机读，关注吞吐量而非时间</li><li>大规模数据集：典型文件大小 GB~TB 级，百万以上文件数量， PB 以上数据规模</li><li>构建成本低且安全可靠：运行在大量的廉价商用机器上，硬件错误是常态，提供容错机制</li></ul><h3 id="mapreduce" tabindex="-1"><a class="header-anchor" href="#mapreduce" aria-hidden="true">#</a> MapReduce</h3><p><strong>概念</strong></p><ul><li>面向批处理的分布式计算框架</li><li>编程模型：将 MapReduce 程序分为 Map、Reduce 两个阶段</li></ul><p><strong>核心思想</strong></p><ul><li>分而治之，分布式计算</li><li>移动计算，而非移动数据</li></ul><p><strong>特点</strong></p><ul><li>高容错：任务失败，自动调度到其他节点重新执行</li><li>高扩展：计算能力随着节点数增加，近似线性递增</li><li>适用于海量数据的离线批处理</li><li>降低了分布式编程的门槛</li></ul><h3 id="spark" tabindex="-1"><a class="header-anchor" href="#spark" aria-hidden="true">#</a> Spark</h3><p>高性能分布式通用计算引擎</p><ul><li>Spark Core - 基础计算框架（批处理、交互式分析）</li><li>Spark SQL - SQL 引擎（海量结构化数据的高性能查询）</li><li>Spark Streaming - 实时流处理（微批）</li><li>Spark MLlib - 机器学习</li><li>Spark GraphX - 图计算</li></ul><p>采用 Scala 语言开发</p><p><strong>特点</strong></p><ul><li>计算高效 - 内存计算、Cache 缓存机制、DAG 引擎、多线程池模型</li><li>通用易用 - 适用于批处理、交互式计算、流处理、机器学习、图计算等多种场景</li><li>运行模式多样 - Local、Standalone、YARN/Mesos</li></ul><h3 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn" aria-hidden="true">#</a> YARN</h3><p><strong>概念</strong></p><ul><li>Yet Another Resource Negotiator，另一种资源管理器</li><li>为了解决 Hadoop 1.x 中 MapReduce 的先天缺陷</li><li>分布式通用资源管理系统</li><li>负责集群资源的统一管理</li><li>从 Hadoop 2.x 开始，YARN 成为 Hadoop 的核心组件</li></ul><p><strong>特点</strong></p><ul><li>专注于资源管理和作业调度</li><li>通用 - 适用各种计算框架，如 - MapReduce、Spark</li><li>高可用 - ResourceManager 高可用、HDFS 高可用</li><li>高扩展</li></ul><h3 id="hive" tabindex="-1"><a class="header-anchor" href="#hive" aria-hidden="true">#</a> Hive</h3><p><strong>概念</strong></p><ul><li>Hadoop 数据仓库 - 企业决策支持</li><li>SQL 引擎 - 对海量结构化数据进行高性能的 SQL 查询</li><li>采用 HDFS 或 HBase 为数据存储</li><li>采用 MapReduce 或 Spark 为计算框架</li></ul><p><strong>特点</strong></p><ul><li>提供类 SQL 查询语言</li><li>支持命令行或 JDBC/ODBC</li><li>提供灵活的扩展性</li><li>提供复杂数据类型、扩展函数、脚本等</li></ul><h3 id="hbase" tabindex="-1"><a class="header-anchor" href="#hbase" aria-hidden="true">#</a> HBase</h3><p><strong>概念</strong></p><ul><li>Hadoop Database</li><li>Google BigTable 的开源实现</li><li>分布式 NoSQL 数据库</li><li>列式存储 - 主要用于半结构化、非结构化数据</li><li>采用 HDFS 为文件存储系统</li></ul><p><strong>特点</strong></p><ul><li>高性能 - 支持高并发写入和查询</li><li>高可用 - HDFS 高可用、Region 高可用</li><li>高扩展 - 数据自动切分和分布，可动态扩容，无需停机</li><li>海量存储 - 单表可容纳数十亿行，上百万列</li></ul><h3 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch" aria-hidden="true">#</a> ElasticSearch</h3><ul><li>开源的分布式全文检索引擎</li><li>基于 Lucene 实现全文数据的快速存储、搜索和分析</li><li>处理大规模数据 - PB 级以上</li><li>具有较强的扩展性，集群规模可达上百台</li><li>首选的分布式搜索引擎</li></ul><h2 id="术语" tabindex="-1"><a class="header-anchor" href="#术语" aria-hidden="true">#</a> 术语</h2><p><strong>数据仓库（Data Warehouse）</strong> - 数据仓库，是为企业所有级别的决策制定过程，提供所有类型数据支持的战略集合。它是单个数据存储，出于分析性报告和决策支持目的而创建。 为需要业务智能的企业，提供指导业务流程改进、监视时间、成本、质量以及控制。</p><h2 id="资源" tabindex="-1"><a class="header-anchor" href="#资源" aria-hidden="true">#</a> 资源</h2>',49),p={href:"https://github.com/onurakpolat/awesome-bigdata",target:"_blank",rel:"noopener noreferrer"},c={href:"http://hadoop.apache.org/",target:"_blank",rel:"noopener noreferrer"},u={href:"http://hbase.apache.org/",target:"_blank",rel:"noopener noreferrer"},g={href:"http://hive.apache.org/",target:"_blank",rel:"noopener noreferrer"},f={href:"http://impala.apache.org/",target:"_blank",rel:"noopener noreferrer"},_={href:"http://flume.apache.org/",target:"_blank",rel:"noopener noreferrer"},x={href:"http://kafka.apache.org/",target:"_blank",rel:"noopener noreferrer"},b={href:"http://spark.apache.org/",target:"_blank",rel:"noopener noreferrer"},S={href:"http://sqoop.apache.org/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.elastic.co/guide/index.html",target:"_blank",rel:"noopener noreferrer"};function H(m,y){const l=i("ExternalLinkIcon");return o(),n("div",null,[s,e("ul",null,[e("li",null,[e("a",p,[a("awesome-bigdata"),t(l)])]),e("li",null,[e("a",c,[a("Hadoop"),t(l)])]),e("li",null,[e("a",u,[a("HBase"),t(l)])]),e("li",null,[e("a",g,[a("Hive"),t(l)])]),e("li",null,[e("a",f,[a("Impala"),t(l)])]),e("li",null,[e("a",_,[a("Flume"),t(l)])]),e("li",null,[e("a",x,[a("Kafka"),t(l)])]),e("li",null,[e("a",b,[a("Spark"),t(l)])]),e("li",null,[e("a",S,[a("Sqoop"),t(l)])]),e("li",null,[e("a",k,[a("ElasticSearch"),t(l)])])])])}const D=r(h,[["render",H],["__file","01.大数据简介.html.vue"]]);export{D as default};
