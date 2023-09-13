import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as s,c as d,a as e,b as a,d as r,e as n}from"./app-ee97b13a.js";const h={},o=n('<h1 id="《后端存储实战课》笔记" tabindex="-1"><a class="header-anchor" href="#《后端存储实战课》笔记" aria-hidden="true">#</a> 《后端存储实战课》笔记</h1><h2 id="课前加餐丨电商系统是如何设计的" tabindex="-1"><a class="header-anchor" href="#课前加餐丨电商系统是如何设计的" aria-hidden="true">#</a> 课前加餐丨电商系统是如何设计的？</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220407152237.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="创建和更新订单时-如何保证数据准确无误" tabindex="-1"><a class="header-anchor" href="#创建和更新订单时-如何保证数据准确无误" aria-hidden="true">#</a> 创建和更新订单时，如何保证数据准确无误？</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220407162459.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="流量大、数据多的商品详情页系统该如何设计" tabindex="-1"><a class="header-anchor" href="#流量大、数据多的商品详情页系统该如何设计" aria-hidden="true">#</a> 流量大、数据多的商品详情页系统该如何设计？</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220407164745.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="复杂而又重要的购物车系统-应该如何设计" tabindex="-1"><a class="header-anchor" href="#复杂而又重要的购物车系统-应该如何设计" aria-hidden="true">#</a> 复杂而又重要的购物车系统，应该如何设计？</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220408142059.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="事务-账户余额总是对不上账-怎么办" tabindex="-1"><a class="header-anchor" href="#事务-账户余额总是对不上账-怎么办" aria-hidden="true">#</a> 事务：账户余额总是对不上账，怎么办？</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220408152524.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="分布式事务-如何保证多个系统间的数据是一致的" tabindex="-1"><a class="header-anchor" href="#分布式事务-如何保证多个系统间的数据是一致的" aria-hidden="true">#</a> 分布式事务：如何保证多个系统间的数据是一致的？</h2><p>分布式事务常见解决方案：</p><ul><li>2PC</li><li>3PC</li><li>TCC</li><li>Saga</li><li>本地消息表</li></ul>',14),c={href:"https://dunwu.github.io/design/distributed/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1.html",target:"_blank",rel:"noopener noreferrer"},u=n('<h2 id="如何用-elasticsearch-构建商品搜索系统" tabindex="-1"><a class="header-anchor" href="#如何用-elasticsearch-构建商品搜索系统" aria-hidden="true">#</a> 如何用 Elasticsearch 构建商品搜索系统？</h2><p>搜索领域的核心问题是进行全文匹配。一般的关系型数据库，如 Mysql 的索引（InnoDB 为 B 树索引）不适用于全文检索，导致查询时只能全表扫描，性能很差。</p><p>搜索引擎（典型代表：Elasticsearch）通过倒排索引技术，很好的支持了全文检索。但是，倒排索引的写入和更新性能相较于 B 树索引较差，因此不适用于更新频繁的数据。</p><h2 id="mysql-ha-如何将-删库跑路-的损失降到最低" tabindex="-1"><a class="header-anchor" href="#mysql-ha-如何将-删库跑路-的损失降到最低" aria-hidden="true">#</a> MySQL HA：如何将“删库跑路”的损失降到最低？</h2><p>Mysql 复制（略）</p><h2 id="一个几乎每个系统必踩的坑儿-访问数据库超时" tabindex="-1"><a class="header-anchor" href="#一个几乎每个系统必踩的坑儿-访问数据库超时" aria-hidden="true">#</a> 一个几乎每个系统必踩的坑儿：访问数据库超时</h2><p>数据库超时分析经验：</p><ul><li>根据故障时段在系统忙时，推断出故障是跟支持用户访问的功能有关。</li><li>根据系统能在流量峰值过后自动恢复这一现象，排除后台服务被大量请求打死的可能性。</li><li>根据 CPU 利用率的变化曲线，如果满足一定的周期性波动，可推断出大概率和定时任务有关。这些定时任务负责刷新数据缓存。如果确实是因为刷新缓存定时任务导致的，需要针对性优化。</li><li>如果 Mysql CPU 过高，大概率是慢 SQL 导致的，优先排查慢 SQL 日志，找出查询特别慢的表。看看该表是不是需要加缓存。</li></ul><p>避免访问数据库超时的注意点：</p><ul><li>开发时，考虑 SQL 相关表的数据规模，查询性能，是否匹配索引等等，避免出现慢 SQL</li><li>设计上，考虑减少查询次数，如使用缓存</li><li>系统支持自动杀慢 SQL</li><li>支持熔断、降级，减少故障影响范围</li></ul><h2 id="怎么能避免写出慢-sql" tabindex="-1"><a class="header-anchor" href="#怎么能避免写出慢-sql" aria-hidden="true">#</a> 怎么能避免写出慢 SQL？</h2><p>数据表不宜过大，一般不要超过千万条数据。</p><p>根据实际情况，尽量设计好索引，以提高查询、排序效率。</p><p>如果出现慢 SQL，需要改造索引时，可以通过执行计划进行分析。</p>',14),p={href:"https://dunwu.github.io/db-tutorial/sql/mysql/mysql-optimization.html",target:"_blank",rel:"noopener noreferrer"},g=e("h2",{id:"走进黑盒-sql-是如何在数据库中执行的",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#走进黑盒-sql-是如何在数据库中执行的","aria-hidden":"true"},"#"),a(" 走进黑盒：SQL 是如何在数据库中执行的？")],-1),f={href:"https://github.com/dunwu/db-tutorial/blob/master/docs/sql/mysql/mysql-workflow.md",target:"_blank",rel:"noopener noreferrer"},b=n('<h2 id="mysql-如何应对高并发-一-使用缓存保护-mysql" tabindex="-1"><a class="header-anchor" href="#mysql-如何应对高并发-一-使用缓存保护-mysql" aria-hidden="true">#</a> MySQL 如何应对高并发（一）：使用缓存保护 MySQL</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220413101029.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220413101039.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="mysql-如何应对高并发-二-读写分离" tabindex="-1"><a class="header-anchor" href="#mysql-如何应对高并发-二-读写分离" aria-hidden="true">#</a> MySQL 如何应对高并发（二）：读写分离</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220413160150.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/database/mysql/master-slave-proxy.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="mysql-主从数据库同步是如何实现的" tabindex="-1"><a class="header-anchor" href="#mysql-主从数据库同步是如何实现的" aria-hidden="true">#</a> MySQL 主从数据库同步是如何实现的？</h2><p>基于 binlog 进行数据同步</p><h2 id="订单数据越来越多-数据库越来越慢该怎么办" tabindex="-1"><a class="header-anchor" href="#订单数据越来越多-数据库越来越慢该怎么办" aria-hidden="true">#</a> 订单数据越来越多，数据库越来越慢该怎么办？</h2><p>针对大表，为了优化其查询性能，可以将历史数据归档。一般可以考虑归档到列式数据库，如：Hive</p><h2 id="mysql-存储海量数据的最后一招-分库分表" tabindex="-1"><a class="header-anchor" href="#mysql-存储海量数据的最后一招-分库分表" aria-hidden="true">#</a> MySQL 存储海量数据的最后一招：分库分表</h2><p>分库分表</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220413174922.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="用-redis-构建缓存集群的最佳实践有哪些" tabindex="-1"><a class="header-anchor" href="#用-redis-构建缓存集群的最佳实践有哪些" aria-hidden="true">#</a> 用 Redis 构建缓存集群的最佳实践有哪些</h2><p>Redis 3.0 后，官方提供 Redis Cluster 来解决数据量大、高可用和高并发问题。</p>',15),m={href:"https://dunwu.github.io/blog/%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/07.Redis%E9%9B%86%E7%BE%A4/",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"大厂都是怎么做-mysql-to-redis-同步的",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#大厂都是怎么做-mysql-to-redis-同步的","aria-hidden":"true"},"#"),a(" 大厂都是怎么做 MySQL to Redis 同步的?")],-1),x=e("p",null,"缓存穿透：把全量数据都放在 Redis 集群，服务通过接受 MQ 消息，去触发更新缓存数据。",-1),y={href:"https://github.com/alibaba/canal",target:"_blank",rel:"noopener noreferrer"},q=n('<h2 id="分布式存储-你知道对象存储是如何保存图片文件的吗" tabindex="-1"><a class="header-anchor" href="#分布式存储-你知道对象存储是如何保存图片文件的吗" aria-hidden="true">#</a> 分布式存储：你知道对象存储是如何保存图片文件的吗？</h2><p>保存图片、音频、视频这种相对较大的文件，一般使用对象存储。如：HDFS 等。</p><p>元数据管理：ZooKeeper、etcd、Nacos</p><p>对象如何拆分和保存：将大文件分块（block），提升 IO 效率并方便维护。</p><h2 id="跨系统实时同步数据-分布式事务是唯一的解决方案吗" tabindex="-1"><a class="header-anchor" href="#跨系统实时同步数据-分布式事务是唯一的解决方案吗" aria-hidden="true">#</a> 跨系统实时同步数据，分布式事务是唯一的解决方案吗？</h2><p>跨系统实时同步数据：</p><ul><li>早期方案：使用 ETL 定时同步数据，在 T+1 时刻去同步上一周期的数据，然后进行计算和分析。</li><li>使用 Binlog 和 MQ 构建实时数据同步系统</li></ul><p>如何保证数据同步的实时性</p><ul><li>为了能够支撑众多下游数据库实时同步的需求，可以通过 MQ 解耦上下游，Binlog 先发送到 MQ 中，下游各业务方可以消费 MQ 中的消息再写入各自的数据库。</li><li>如果下游处理能力不能满足要求，可以增加 MQ 中的分区数量实现并发同步，但需要结合同步的业务数据特点，把具有因果关系的数据哈希到相同分区上，才能避免因为并发乱序而出现数据同步错误的问题。</li></ul><h2 id="如何在不停机的情况下-安全地更换数据库" tabindex="-1"><a class="header-anchor" href="#如何在不停机的情况下-安全地更换数据库" aria-hidden="true">#</a> 如何在不停机的情况下，安全地更换数据库？</h2><ul><li><strong>停机迁移/扩容</strong><ul><li>优点：简单粗暴；没有数据一致性问题</li><li>缺点：需要停机</li></ul></li><li><strong>双写迁移</strong><ul><li>优点：不需要停机</li><li>缺点：方案较复杂</li></ul></li><li><strong>主从升级</strong><ul><li>优点：不需要停机；无需数据迁移</li><li>缺点：需要冗余的从库</li></ul></li></ul><h2 id="类似-点击流-这样的海量数据应该如何存储" tabindex="-1"><a class="header-anchor" href="#类似-点击流-这样的海量数据应该如何存储" aria-hidden="true">#</a> 类似“点击流”这样的海量数据应该如何存储？</h2><p>使用 Kafka 暂存海量原始数据，然后再使用大数据计算框架（Spark、Flink）进行计算。</p><p>其他方案：</p><p>分布式流数据存储，如：Pravega、Pulsar 的存储引擎 BookKeeper</p><p>时序数据库，如：InfluxDB、OpenTSDB 等。</p><h2 id="面对海量数据-如何才能查得更快" tabindex="-1"><a class="header-anchor" href="#面对海量数据-如何才能查得更快" aria-hidden="true">#</a> 面对海量数据，如何才能查得更快</h2><p>实时计算：Flink、Storm</p><p>批处理计算：Map-Reduce、Spark</p><p>海量数据存储：</p><ul><li>列式数据库（在正确使用的前提下，10GB 量级的数据查询基本上可以做到秒级返回）：HBase、Cassandra</li><li>搜索引擎（对于 TB 量级以下的数据，如果可以接受相对比较贵的硬件成本）：Elasticsearch</li></ul><h2 id="mysql-经常遇到的高可用、分片问题-newsql-是如何解决的" tabindex="-1"><a class="header-anchor" href="#mysql-经常遇到的高可用、分片问题-newsql-是如何解决的" aria-hidden="true">#</a> MySQL 经常遇到的高可用、分片问题，NewSQL 是如何解决的？</h2><p>安利 CockroachDB、RocksDB、OceanBase</p><h2 id="rocksdb-不丢数据的高性能-kv-存储、" tabindex="-1"><a class="header-anchor" href="#rocksdb-不丢数据的高性能-kv-存储、" aria-hidden="true">#</a> RocksDB：不丢数据的高性能 KV 存储、</h2><p>越来越多的新生代数据库，都选择 RocksDB 作为它们的存储引擎。</p><p>Redis 是一个内存数据库，所以它很快。</p><p>RocksDB 是一个持久化的 KV 存储，它需要保证每条数据都要安全地写到磁盘上。磁盘的读写性能和内<br> 存读写性能差着一两个数量级，读写磁盘的 RocksDB，能和读写内存的 Redis 做到相近的性能，这就是 RocksDB 的价值所在了。</p><p>RocksDB 性能好，是由于使用了 LSM 树结构。</p><p>LSM-Tree 的全称是：The Log-Structured Merge-Tree，是一种非常复杂的复合数据结构，它包含了 WAL（Write Ahead Log）、跳表（SkipList）和一个分层的有序表（SSTable，Sorted String Table）。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',30),k={href:"https://time.geekbang.org/column/intro/100046801",target:"_blank",rel:"noopener noreferrer"};function B(S,w){const i=l("ExternalLinkIcon");return s(),d("div",null,[o,e("blockquote",null,[e("p",null,[a("个人以前总结："),e("a",c,[a("分布式事务"),r(i)])])]),u,e("blockquote",null,[e("p",null,[a("个人过往总结："),e("a",p,[a("Mysql 性能优化"),r(i)])])]),g,e("blockquote",null,[e("p",null,[a("个人过往总结："),e("a",f,[a("Mysql 工作流"),r(i)])])]),b,e("blockquote",null,[e("p",null,[a("相关文章："),e("a",m,[a("Redis 集群"),r(i)])])]),_,x,e("p",null,[a("使用 Binlog 实时更新 Redis 缓存，如 "),e("a",y,[a("Canal"),r(i)])]),q,e("ul",null,[e("li",null,[e("a",k,[a("后端存储实战课"),r(i)]),a(" - 极客教程【入门】：讲解存储在电商领域的种种应用和一些基本特性")])])])}const M=t(h,[["render",B],["__file","01.后端存储实战课笔记.html.vue"]]);export{M as default};
