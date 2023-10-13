import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,c as l,a as e,b as o,d as n,e as h}from"./app-dc48b2dc.js";const t={},d=h('<h1 id="《hbase-a-nosql-database》笔记" tabindex="-1"><a class="header-anchor" href="#《hbase-a-nosql-database》笔记" aria-hidden="true">#</a> 《HBase: A NoSQL database》笔记</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>HBase 是一种 NoSQL 数据库，它是Java版本的 Google’s Big Table 实现，它原本是 Hadoop 的子项目，现在已独立出来，并成为 apache 的顶级项目。</p><p>HBase 的设计目标是用于存储大规模数据集。HBase 是列式数据库，与传统行式数据库相比，其非常适合用于存储稀疏性的数据。</p><p>HBase 是基于 HDFS 实现的。</p><h2 id="hbase-和历史" tabindex="-1"><a class="header-anchor" href="#hbase-和历史" aria-hidden="true">#</a> HBase 和历史</h2><p>HBase 关键特性：</p><ul><li>水平扩展</li><li>分区容错性</li><li>支持并行处理</li><li>支持 HDFS 和 MapReduce</li><li>近实时查询</li><li>适用于存储大规模数据集</li><li>适用于存储稀疏型数据（宽表）</li><li>表的动态负载均衡</li><li>对于大规模的查询，支持块缓存和布隆过滤器</li></ul><p>HBase 发展历史</p><p>2007 - Mike Cafarella 发布 BigTable 的开源实现——HBase</p><p>2008 ~ 2010 - HBase 成为 Apache 顶级项目。</p><h2 id="hbase-数据结构和架构" tabindex="-1"><a class="header-anchor" href="#hbase-数据结构和架构" aria-hidden="true">#</a> HBase 数据结构和架构</h2><p>HBase 表可以用于 MapReduce 任务的输入、输出对象。</p><p>HBase 由行、列族、列、时间戳组成。</p><p>HBase 表会被分成多个分区，每个分区会定义起始key、结束key。它们被存于 HDFS 文件中。</p><p>HBase 的架构通常为一个 master server，多个 region server，以及 ZooKeeper 集群。</p><ul><li><strong>master server</strong><ul><li>在 ZooKeeper 的帮助下，为分区分配 region server，控制 region server 的负载均衡。</li><li>负责 schema 的变更</li><li>管理和监控 Hadoop 集群</li></ul></li><li><strong>region server</strong><ul><li>region server 负责处理来自客户端的 CRUD 操作</li><li>region server 包括内存存储和 HFile</li><li>region server 运行在 HDFS 的数据节点上</li><li>region server 有四个核心组件：Block cache（读缓存）、MemStore（写缓存）、WAL、HFile（存储行数据，键值对结构）</li></ul></li><li>Zookeeper <ul><li>当 region server 宕机并重新工作时，HBase 会使用 ZooKeeper 作为协调工具，对其进行恢复</li><li>Zookeeper 是客户端和 master server 的中心，它维护着 master server 和 region server 注册的元数据信息。例如：有多少有效的 region server；任意 region server 持有哪些 data node</li><li>ZooKeeper 可以用于追踪服务器错误</li></ul></li></ul><h2 id="hbase-和大数据" tabindex="-1"><a class="header-anchor" href="#hbase-和大数据" aria-hidden="true">#</a> HBase 和大数据</h2><p>HBase 相比于其他 NoSQL，最显著的优势在于，它属于 Hadoop 生态体系中的重要一环，被广泛用于大数据领域。但是，近些年，有 MongoDB、Cassandra 等一些数据库挑战着其地位。</p><h2 id="hbase-的应用" tabindex="-1"><a class="header-anchor" href="#hbase-的应用" aria-hidden="true">#</a> HBase 的应用</h2><p>Facebook 的消息平台使用 HBase 存储数据，每月产生约 13.5 亿条信息。</p><p>HBase 还被用于存储各种海量操作数据。</p><h2 id="hbase-的挑战和限制" tabindex="-1"><a class="header-anchor" href="#hbase-的挑战和限制" aria-hidden="true">#</a> HBase 的挑战和限制</h2><p>HBase 采用主从架构，一旦 master server 不可用，需要很长时间才能恢复。</p><p>HBase 不支持二级索引。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',26),p={href:"https://www.researchgate.net/publication/317399857_HBase_A_NoSQL_Database",target:"_blank",rel:"noopener noreferrer"};function c(b,H){const a=s("ExternalLinkIcon");return i(),l("div",null,[d,e("ul",null,[e("li",null,[e("a",p,[o("HBase: A NoSQL Database"),n(a)])])])])}const _=r(t,[["render",c],["__file","01.hbase-a-nosql-database.html.vue"]]);export{_ as default};
