import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c as s,a as i,b as e,d as a,e as n}from"./app-ee97b13a.js";const g={},d=n(`<h1 id="nosql-技术选型" tabindex="-1"><a class="header-anchor" href="#nosql-技术选型" aria-hidden="true">#</a> Nosql 技术选型</h1><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200209020702.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="一、nosql-简介" tabindex="-1"><a class="header-anchor" href="#一、nosql-简介" aria-hidden="true">#</a> 一、Nosql 简介</h2><p>传统的关系型数据库存在以下缺点：</p><ul><li><strong>大数据场景下 I/O 较高</strong> - 因为数据是按行存储，即使只针对其中某一列进行运算，关系型数据库也会将整行数据从存储设备中读入内存，导致 I/O 较高。</li><li>存储的是行记录，<strong>无法存储数据结构</strong>。</li><li><strong>表结构 schema 扩展不方便</strong> - 如要需要修改表结构，需要执行执行 DDL(data definition language)，语句修改，修改期间会导致锁表，部分服务不可用。</li><li><strong>全文搜索功能较弱</strong> - 关系型数据库下只能够进行子字符串的匹配查询，当表的数据逐渐变大的时候，<code>LIKE</code> 查询的匹配会非常慢，即使在有索引的情况下。况且关系型数据库也不应该对文本字段进行索引。</li><li><strong>存储和处理复杂关系型数据功能较弱</strong> - 许多应用程序需要了解和导航高度连接数据之间的关系，才能启用社交应用程序、推荐引擎、欺诈检测、知识图谱、生命科学和 IT/网络等用例。然而传统的关系数据库并不善于处理数据点之间的关系。它们的表格数据模型和严格的模式使它们很难添加新的或不同种类的关联信息。</li></ul><p>随着大数据时代的到来，越来越多的网站、应用系统需要支撑海量数据存储，高并发请求、高可用、高可扩展性等特性要求。传统的关系型数据库在应付这些调整已经显得力不从心，暴露了许多能以克服的问题。由此，各种各样的 NoSQL（Not Only SQL）数据库作为传统关系型数据的一个有力补充得到迅猛发展。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200209005228.png" alt="nosql-history" tabindex="0" loading="lazy"><figcaption>nosql-history</figcaption></figure><p><strong>NoSQL，泛指非关系型的数据库</strong>，可以理解为 SQL 的一个有力补充。</p><p>在 NoSQL 许多方面性能大大优于非关系型数据库的同时，往往也伴随一些特性的缺失，比较常见的，是事务库事务功能的缺失。 数据库事务正确执行的四个基本要素：ACID 如下：</p><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">名称</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">A</td><td style="text-align:center;">Atomicity (原子性)</td><td style="text-align:center;">一个事务中的所有操作，要么全部完成，要么全部不完成，不会在中间某个环节结束。 事务在执行过程中发生错误，会被回滚到事务开始前的状态，就像这个事务从来没有执行过一样。</td></tr><tr><td style="text-align:center;">C</td><td style="text-align:center;">Consistency 一致性</td><td style="text-align:center;">在事务开始之前和事务结束以后，数据的数据的一致性约束没有被破坏。</td></tr><tr><td style="text-align:center;">I</td><td style="text-align:center;">Isolation 隔离性</td><td style="text-align:center;">数据库允许多个并发事务同时对数据进行读写和修改的能力。隔离性可以防止多个事务并发执行时由于交叉执行而导致数据的不一致。</td></tr><tr><td style="text-align:center;">D</td><td style="text-align:center;">Durability 持久性</td><td style="text-align:center;">事务处理结束后，对数据的修改就是永久的，即便系统故障也不会丢失。</td></tr></tbody></table><p>下面介绍 5 大类 NoSQL 数据针对传统关系型数据库的缺点提供的解决方案：</p><h2 id="二、列式数据库" tabindex="-1"><a class="header-anchor" href="#二、列式数据库" aria-hidden="true">#</a> 二、列式数据库</h2><p>列式数据库是以列相关存储架构进行数据存储的数据库，主要<strong>适合于批量数据处理和即时查询</strong>。</p><p>相对应的是行式数据库，数据以行相关的存储体系架构进行空间分配，主要适合于小批量的数据处理，常用于联机事务型数据处理。</p><p>基于列式数据库的列列存储特性，可以<strong>解决某些特定场景下关系型数据库 I/O 较高的问题</strong>。</p><h3 id="列式数据库原理" tabindex="-1"><a class="header-anchor" href="#列式数据库原理" aria-hidden="true">#</a> 列式数据库原理</h3><p>传统关系型数据库是按照行来存储数据库，称为“行式数据库”，而列式数据库是按照列来存储数据。</p><p>将表放入存储系统中有两种方法，而我们绝大部分是采用行存储的。 行存储法是将各行放入连续的物理位置，这很像传统的记录和文件系统。 列存储法是将数据按照列存储到数据库中，与行存储类似，下图是两种存储方法的图形化解释：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200209005316.png" alt="按行存储和按列存储模式" tabindex="0" loading="lazy"><figcaption>按行存储和按列存储模式</figcaption></figure><h3 id="列式数据库产品" tabindex="-1"><a class="header-anchor" href="#列式数据库产品" aria-hidden="true">#</a> 列式数据库产品</h3><ul><li><p>HBase</p><figure><img src="https://user-gold-cdn.xitu.io/2018/8/10/165234a1e88bddc0?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="HBase" tabindex="0" loading="lazy"><figcaption>HBase</figcaption></figure><p>HBase 是一个开源的非关系型分布式数据库（NoSQL），它参考了谷歌的 BigTable 建模，实现的编程语言为 Java。它是 Apache 软件基金会的 Hadoop 项目的一部分，运行于 HDFS 文件系统之上，为 Hadoop 提供类似于 BigTable 规模的服务。因此，它可以容错地存储海量稀疏的数据。</p></li><li><p>BigTable</p><figure><img src="https://user-gold-cdn.xitu.io/2018/8/10/165234a1e9147edf?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>BigTable 是一种压缩的、高性能的、高可扩展性的，基于 Google 文件系统（Google File System，GFS）的数据存储系统，用于存储大规模结构化数据，适用于云端计算。</p></li></ul><h3 id="列式数据库特性" tabindex="-1"><a class="header-anchor" href="#列式数据库特性" aria-hidden="true">#</a> 列式数据库特性</h3><p>优点如下：</p><ul><li><strong>高效的储存空间利用率</strong></li></ul><p>列式数据库由于其针对不同列的数据特征而发明的不同算法，使其<strong>往往有比行式数据库高的多的压缩率</strong>，普通的行式数据库一般压缩率在 3：1 到 5：1 左右，而列式数据库的压缩率一般在 8：1 到 30：1 左右。 比较常见的，通过字典表压缩数据： 下面中才是那张表本来的样子。经过字典表进行数据压缩后，表中的字符串才都变成数字了。正因为每个字符串在字典表里只出现一次了，所以达到了压缩的目的(有点像规范化和非规范化 Normalize 和 Denomalize)</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200209005406.png" alt="通过字典表压缩数据" tabindex="0" loading="lazy"><figcaption>通过字典表压缩数据</figcaption></figure><ul><li><strong>查询效率高</strong></li></ul><p>读取多条数据的同一列效率高，因为这些列都是存储在一起的，一次磁盘操作可以数据的指定列全部读取到内存中。 下图通过一条查询的执行过程说明列式存储(以及数据压缩)的优点</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200209005611.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>执行步骤如下：
i. 去字典表里找到字符串对应数字(只进行一次字符串比较)。
ii. 用数字去列表里匹配，匹配上的位置设为1。
iii. 把不同列的匹配结果进行位运算得到符合所有条件的记录下标。
iv. 使用这个下标组装出最终的结果集。
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>适合做聚合操作</strong></li><li><strong>适合大量的数据而不是小数据</strong></li></ul><p>缺点如下：</p><ul><li>不适合扫描小量数据</li><li>不适合随机的更新</li><li>不适合做含有删除和更新的实时操作</li><li>单行的数据是 ACID 的，多行的事务时，不支持事务的正常回滚，支持 I(Isolation)隔离性(事务串行提交)，D(Durability)持久性，不能保证 A(Atomicity)原子性， C(Consistency)一致性</li></ul><h3 id="列式数据库使用场景" tabindex="-1"><a class="header-anchor" href="#列式数据库使用场景" aria-hidden="true">#</a> 列式数据库使用场景</h3><p>以 HBase 为例说明：</p><ul><li><strong>大数据量</strong> （100s TB 级数据） 且有快速随机访问的需求。增长量无法预估的应用，需要进行优雅的数据扩展的 HBase 支持在线扩展，即使在一段时间内数据量呈井喷式增长，也可以通过 HBase 横向扩展来满足功能。</li><li><strong>写密集型</strong>应用，每天写入量巨大，而相对读数量较小的应用 比如 IM 的历史消息，游戏的日志等等</li><li><strong>不需要复杂查询条件</strong>来查询数据的应用 HBase 只支持基于 rowkey 的查询，对于 HBase 来说，单条记录或者小范围的查询是可以接受的，大范围的查询由于分布式的原因，可能在性能上有点影响，HBase 不适用于有 join，多级索引，表关系复杂的数据模型。</li><li><strong>对性能和可靠性要求非常高</strong>的应用，由于 HBase 本身没有单点故障，可用性非常高。</li><li><strong>存储结构化和半结构化的数据</strong>。</li></ul><h2 id="三、k-v-数据库" tabindex="-1"><a class="header-anchor" href="#三、k-v-数据库" aria-hidden="true">#</a> 三、K-V 数据库</h2><p><strong>K-V 数据库指的是使用键值(key-value)存储的数据库，其数据按照键值对的形式进行组织、索引和存储</strong>。</p><p>KV 存储非常适合存储<strong>不涉及过多数据关系业务关系的数据</strong>，同时能有效减少读写磁盘的次数，比 SQL 数据库存储拥有更好的读写性能，能够<strong>解决关系型数据库无法存储数据结构的问题</strong>。</p><h3 id="k-v-数据库产品" tabindex="-1"><a class="header-anchor" href="#k-v-数据库产品" aria-hidden="true">#</a> K-V 数据库产品</h3>`,40),p=i("p",null,"Redis",-1),c=i("figure",null,[i("img",{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200209010410.png",alt:"img",tabindex:"0",loading:"lazy"}),i("figcaption",null,"img")],-1),u={href:"http://DB-Engines.com",target:"_blank",rel:"noopener noreferrer"},h=i("li",null,[i("p",null,"Cassandra"),i("figure",null,[i("img",{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200209010451.png",alt:"img",tabindex:"0",loading:"lazy"}),i("figcaption",null,"img")]),i("p",null,"Apache Cassandra（社区内一般简称为 C*）是一套开源分布式 NoSQL 数据库系统。它最初由 Facebook 开发，用于储存收件箱等简单格式数据，集 Google BigTable 的数据模型与 Amazon Dynamo 的完全分布式架构于一身。Facebook 于 2008 将 Cassandra 开源，此后，由于 Cassandra 良好的可扩展性和性能，被 Apple, Comcast,Instagram, Spotify, eBay, Rackspace, Netflix 等知名网站所采用，成为了一种流行的分布式结构化数据存储方案。")],-1),m=i("li",null,[i("p",null,"LevelDB"),i("figure",null,[i("img",{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200209011140.png",alt:"img",tabindex:"0",loading:"lazy"}),i("figcaption",null,"img")]),i("p",null,"LevelDB 是一个由 Google 公司所研发的键／值对（Key/Value Pair）嵌入式数据库管理系统编程库， 以开源的 BSD 许可证发布。")],-1),f=n('<h3 id="k-v-数据库特性" tabindex="-1"><a class="header-anchor" href="#k-v-数据库特性" aria-hidden="true">#</a> K-V 数据库特性</h3><p>以 Redis 为例：</p><p>优点如下：</p><ul><li><strong>性能极高</strong> - Redis 能支持超过 10W 的 TPS。</li><li><strong>丰富的数据类型</strong> - Redis 支持包括 String，Hash，List，Set，Sorted Set，Bitmap 和 hyperloglog。</li><li><strong>丰富的特性</strong> - Redis 还支持 publish/subscribe、通知、key 过期等等特性。</li></ul><p>缺点如下： 针对 ACID，Redis 事务不能支持原子性和持久性(A 和 D)，只支持隔离性和一致性(I 和 C) 特别说明一下，这里所说的无法保证原子性，是针对 Redis 的事务操作，因为事务是不支持回滚（roll back），而因为 Redis 的单线程模型，<strong>Redis 的普通操作是原子性的</strong>。</p><p>大部分业务不需要严格遵循 ACID 原则，例如游戏实时排行榜，粉丝关注等场景，即使部分数据持久化失败，其实业务影响也非常小。因此在设计方案时，需要根据业务特征和要求来做选择</p><h3 id="k-v-数据库使用场景" tabindex="-1"><a class="header-anchor" href="#k-v-数据库使用场景" aria-hidden="true">#</a> K-V 数据库使用场景</h3><ul><li><p><strong>适用场景</strong> - 储存用户信息(比如会话)、配置文件、参数、购物车等等。这些信息一般都和 ID（键）挂钩。</p></li><li><p><strong>不适用场景</strong></p><ul><li>需要通过值来查询，而不是键来查询。Key-Value 数据库中根本没有通过值查询的途径。</li><li>需要储存数据之间的关系。在 Key-Value 数据库中不能通过两个或以上的键来关联数据</li><li>需要事务的支持。在 Key-Value 数据库中故障产生时不可以进行回滚。</li></ul></li></ul><h2 id="四、文档数据库" tabindex="-1"><a class="header-anchor" href="#四、文档数据库" aria-hidden="true">#</a> 四、文档数据库</h2><p>文档数据库（也称为文档型数据库）是<strong>旨在将半结构化数据存储为文档的一种数据库，它可以解决关系型数据库表结构 schema 扩展不方便的问题</strong>。文档数据库<strong>通常以 JSON 或 XML 格式存储数据</strong>。</p><p>由于文档数据库的 no-schema 特性，可以存储和读取任意数据。由于使用的数据格式是 JSON 或者 XML，无需在使用前定义字段，读取一个 JSON 中不存在的字段也不会导致 SQL 那样的语法错误。</p><h3 id="文档数据库产品" tabindex="-1"><a class="header-anchor" href="#文档数据库产品" aria-hidden="true">#</a> 文档数据库产品</h3><ul><li><p>MongoDB</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200209012320.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>MongoDB</strong>是一种面向文档的数据库管理系统，由 C++ 撰写而成，以此来解决应用程序开发社区中的大量现实问题。2007 年 10 月，MongoDB 由 10gen 团队所发展。2009 年 2 月首度推出。</p></li><li><p>CouchDB</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200209012418.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Apache CouchDB 是一个开源数据库，专注于易用性和成为&quot;<strong>完全拥抱 web 的数据库</strong>&quot;。它是一个使用 JSON 作为存储格式，JavaScript 作为查询语言，MapReduce 和 HTTP 作为 API 的 NoSQL 数据库。其中一个显著的功能就是多主复制。CouchDB 的第一个版本发布在 2005 年，在 2008 年成为了 Apache 的项目。</p></li></ul><h3 id="文档数据库特性" tabindex="-1"><a class="header-anchor" href="#文档数据库特性" aria-hidden="true">#</a> 文档数据库特性</h3><p>以 MongoDB 为例进行说明</p><p>优点如下：</p><ul><li><strong>容易存储复杂数据结构</strong> - JSON 是一种强大的描述语言，能够描述复杂的数据结构。</li><li><strong>容易变更数据结构</strong> - 无需像关系型数据库一样先执行 DDL 语句修改表结构，程序代码直接读写即可。</li><li><strong>容易兼容历史数据</strong> - 对于历史数据，即使没有新增的字段，也不会导致错误，只会返回空值，此时代码兼容处理即可。</li></ul><p>缺点如下：</p><ul><li><strong>部分支持事务</strong><ul><li>Atomicity(原子性) 仅支持单行/文档级原子性，不支持多行、多文档、多语句原子性。</li><li>Isolation(隔离性) 隔离级别仅支持已提交读（Read committed）级别，可能导致不可重复读，幻读的问题。</li></ul></li><li><strong>不支持复杂查询</strong> - 例如 join 查询，如果需要 join 查询，需要多次操作数据库。</li></ul><p>MongonDB 还是支持多文档事务的 Consistency(一致性)和 Durability(持久性)</p><p>虽然官方宣布 MongoDB 将在 4.0 版本中正式推出多文档 ACID 事务支持，最后落地情况还有待见证。</p><h3 id="文档数据库使用场景" tabindex="-1"><a class="header-anchor" href="#文档数据库使用场景" aria-hidden="true">#</a> 文档数据库使用场景</h3><p><strong>适用场景</strong>：</p><ul><li><strong>大数据量，且未来数据增长很快</strong></li><li><strong>表结构不明确，且字段在不断增加</strong>，例如内容管理系统，信息管理系统</li></ul><p><strong>不适用场景</strong>：</p><ul><li><strong>支持事务</strong> - 在不同的文档上需要添加事务。Document-Oriented 数据库并不支持文档间的事务</li><li><strong>支持复杂查询</strong> - 多个文档直接需要复杂查询，例如 join</li></ul><h2 id="五、全文搜索引擎" tabindex="-1"><a class="header-anchor" href="#五、全文搜索引擎" aria-hidden="true">#</a> 五、全文搜索引擎</h2><p>传统关系型数据库主要通过索引来达到快速查询的目的，在全文搜索的业务下，索引也无能为力，主要体现在：</p><ul><li>全文搜索的条件可以随意排列组合，如果通过索引来满足，则索引的数量非常多</li><li>全文搜索的模糊匹配方式，索引无法满足，只能用 <code>LIKE</code> 查询，而 <code>LIKE</code> 查询是整表扫描，效率非常低</li></ul><p>而全文搜索引擎的出现，正是<strong>解决关系型数据库全文搜索功能较弱的问题</strong>。</p><h3 id="搜索引擎原理" tabindex="-1"><a class="header-anchor" href="#搜索引擎原理" aria-hidden="true">#</a> 搜索引擎原理</h3><p>全文搜索引擎的技术原理称为 <strong><code>倒排索引（inverted index）</code></strong>，是一种索引方法，其基本原理是建立单词到文档的索引。与之相对是，是“正排索引”，其基本原理是建立文档到单词的索引。</p><p>现在有如下文档集合：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200209014530.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>正排索引得到索引如下：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200209014723.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>可见，正排索引适用于根据文档名称查询文档内容</p><p>简单的倒排索引如下：</p><figure><img src="https://user-gold-cdn.xitu.io/2018/8/10/165234a2750634bc?imageslim" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>带有单词频率信息的倒排索引如下：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200209014842.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>可见，倒排索引适用于根据关键词来查询文档内容</p><h3 id="搜索引擎产品" tabindex="-1"><a class="header-anchor" href="#搜索引擎产品" aria-hidden="true">#</a> 搜索引擎产品</h3><ul><li><p>Elasticsearch</p><figure><img src="https://user-gold-cdn.xitu.io/2018/8/10/165234a27ea53fae?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Elasticsearch 是一个基于 Lucene 的搜索引擎。它提供了一个分布式，多租户 -能够全文搜索与发动机 HTTP Web 界面和无架构 JSON 文件。Elasticsearch 是用 Java 开发的，并根据 Apache License 的条款作为开源发布。根据 DB-Engines 排名，Elasticsearch 是最受欢迎的企业搜索引擎，后面是基于 Lucene 的 Apache Solr。</p></li><li><p>Solr</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200209014947.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Solr 是 Apache Lucene 项目的开源企业搜索平台。其主要功能包括全文检索、命中标示、分面搜索、动态聚类、数据库集成，以及富文本（如 Word、PDF）的处理。Solr 是高度可扩展的，并提供了分布式搜索和索引复制</p></li></ul><h3 id="搜索引擎特性" tabindex="-1"><a class="header-anchor" href="#搜索引擎特性" aria-hidden="true">#</a> 搜索引擎特性</h3><p>以 Elasticsearch 为例： 优点如下：</p><ul><li><strong>查询效率高</strong> - 对海量数据进行近实时的处理</li><li><strong>可扩展性</strong> - 基于集群环境可以方便横向扩展，可以承载 PB 级数据</li><li><strong>高可用</strong> - Elasticsearch 集群弹性-他们将发现新的或失败的节点，重组和重新平衡数据，确保数据是安全的和可访问的</li></ul><p>缺点如下：</p><ul><li><strong>部分支持事务</strong> - 单一文档的数据是 ACID 的，包含多个文档的事务时不支持事务的正常回滚，支持 I(Isolation)隔离性（基于乐观锁机制的），D(Durability)持久性，<strong>不支持 A(Atomicity)原子性，C(Consistency)一致性</strong></li><li>对类似数据库中通过外键的复杂的多表关联操作支持较弱。</li><li><strong>读写有一定延时</strong>，写入的数据，最快 1s 中能被检索到</li><li><strong>更新性能较低</strong>，底层实现是先删数据，再插入新数据</li><li><strong>内存占用大</strong>，因为 Lucene 将索引部分加载到内存中</li></ul><h3 id="搜索引擎场景" tabindex="-1"><a class="header-anchor" href="#搜索引擎场景" aria-hidden="true">#</a> 搜索引擎场景</h3><p>适用场景如下：</p><ul><li><strong>搜索引擎和数据分析引擎</strong> - 全文检索，结构化检索，数据分析</li><li><strong>对海量数据进行近实时的处理</strong> - 可以将海量数据分散到多台服务器上去存储和检索</li></ul><p>不适用场景如下：</p><ul><li><strong>数据需要频繁更新</strong></li><li><strong>需要复杂关联查询</strong></li></ul><h2 id="六、图数据库" tabindex="-1"><a class="header-anchor" href="#六、图数据库" aria-hidden="true">#</a> 六、图数据库</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200209015751.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>图形数据库应用图论存储实体之间的关系信息</strong>。最常见例子就是社会网络中人与人之间的关系。关系型数据库用于存储“关系型”数据的效果并不好，其查询复杂、缓慢、超出预期，而图形数据库的独特设计恰恰弥补了这个缺陷，解决关系型数据库存储和处理复杂关系型数据功能较弱的问题。</p><h3 id="图数据库产品" tabindex="-1"><a class="header-anchor" href="#图数据库产品" aria-hidden="true">#</a> 图数据库产品</h3><ul><li><p>Neo4j</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200209015817.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Neo4j 是由 Neo4j，Inc。开发的图形数据库管理系统。由其开发人员描述为具有原生图存储和处理的符合 ACID 的事务数据库，根据 DB-Engines 排名， Neo4j 是最流行的图形数据库。</p></li><li><p>ArangoDB</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200209015858.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>ArangoDB 是由 triAGENS GmbH 开发的原生多模型数据库系统。数据库系统支持三个重要的数据模型（键/值，文档，图形），其中包含一个数据库核心和统一查询语言 AQL（ArangoDB 查询语言）。查询语言是声明性的，允许在单个查询中组合不同的数据访问模式。ArangoDB 是一个 NoSQL 数据库系统，但 AQL 在很多方面与 SQL 类似。</p></li><li><p>Titan</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200209015923.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Titan 是一个可扩展的图形数据库，针对存储和查询包含分布在多机群集中的数百亿个顶点和边缘的图形进行了优化。Titan 是一个事务性数据库，可以支持数千个并发用户实时执行复杂的图形遍历。</p></li></ul><h3 id="图数据库特性" tabindex="-1"><a class="header-anchor" href="#图数据库特性" aria-hidden="true">#</a> 图数据库特性</h3><p>以 Neo4j 为例：</p><p>Neo4j 使用数据结构中图（graph）的概念来进行建模。 Neo4j 中两个最基本的概念是节点和边。节点表示实体，边则表示实体之间的关系。节点和边都可以有自己的属性。不同实体通过各种不同的关系关联起来，形成复杂的对象图。</p><p>针对关系数据，2 种 2 数据库的存储结构不同：</p><figure><img src="https://user-gold-cdn.xitu.io/2018/8/10/165234a2b2cebaf8?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="2种存储结构" tabindex="0" loading="lazy"><figcaption>2种存储结构</figcaption></figure><p>Neo4j 中，存储节点时使用了”index-free adjacency”，即每个节点都有指向其邻居节点的指针，可以让我们在 O(1)的时间内找到邻居节点。另外，按照官方的说法，在 Neo4j 中边是最重要的,是”first-class entities”，所以单独存储，这有利于在图遍历的时候提高速度，也可以很方便地以任何方向进行遍历</p><figure><img src="https://user-gold-cdn.xitu.io/2018/8/10/165234a2b3a0f7b7?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如下优点：</p><ul><li><strong>高性能</strong> - 图的遍历是图数据结构所具有的独特算法，即从一个节点开始，根据其连接的关系，可以快速和方便地找出它的邻近节点。这种查找数据的方法并不受数据量的大小所影响，因为邻近查询始终查找的是有限的局部数据，不会对整个数据库进行搜索</li><li><strong>设计的灵活性</strong> - 数据结构的自然伸展特性及其非结构化的数据格式，让图数据库设计可以具有很大的伸缩性和灵活性。因为随着需求的变化而增加的节点、关系及其属性并不会影响到原来数据的正常使用</li><li><strong>开发的敏捷性</strong> - 直观明了的数据模型，从需求的讨论开始，到程序开发和实现，以及最终保存在数据库中的样子，它的模样似乎没有什么变化，甚至可以说本来就是一模一样的</li><li><strong>完全支持 ACID</strong> - 不像别的 NoSQL 数据库 Neo4j 还具有完全事务管理特性，完全支持 ACID 事务管理</li></ul><p>缺点如下：</p><ul><li>存在支持节点，关系和属性的数量的限制。</li><li>不支持拆分。</li></ul><h3 id="图数据库场景" tabindex="-1"><a class="header-anchor" href="#图数据库场景" aria-hidden="true">#</a> 图数据库场景</h3><p>适用场景如下：</p><ul><li>关系性强的数据中，如社交网络</li><li>推荐引擎。如果我们将数据以图的形式表现，那么将会非常有益于推荐的制定</li></ul><p>不适用场景如下：</p><ul><li>记录大量基于事件的数据（例如日志条目或传感器数据）</li><li>对大规模分布式数据进行处理</li><li>保存在关系型数据库中的结构化数据</li><li>二进制数据存储</li></ul><h2 id="七、总结" tabindex="-1"><a class="header-anchor" href="#七、总结" aria-hidden="true">#</a> 七、总结</h2><p>关系型数据库和 NoSQL 数据库的选型，往往需要考虑几个指标：</p><ul><li>数据量</li><li>并发量</li><li>实时性</li><li>一致性要求</li><li>读写分布和类型</li><li>安全性</li><li>运维成本</li></ul><p>常见软件系统数据库选型参考如下：</p><ul><li><strong>中后台管理型系统</strong> - 如运营系统，数据量少，并发量小，首选关系型数据库。</li><li><strong>大流量系统</strong> - 如电商单品页，后台考虑选关系型数据库，前台考虑选内存型数据库。</li><li><strong>日志型系统</strong> - 原始数据考虑选列式数据库，日志搜索考虑选搜索引擎。</li><li><strong>搜索型系统</strong> - 例如站内搜索，非通用搜索，如商品搜索，后台考虑选关系型数据库，前台考虑选搜索引擎。</li><li><strong>事务型系统</strong> - 如库存，交易，记账，考虑选关系型数据库+K-V 数据库（作为缓存）+分布式事务。</li><li><strong>离线计算</strong> - 如大量数据分析，考虑选列式数据库或关系型数据。</li><li><strong>实时计算</strong> - 如实时监控，可以考虑选内存型数据库或者列式数据库。</li></ul><p>设计实践中，要基于需求、业务驱动架构，无论选用 RDB/NoSQL/DRDB,<strong>一定是以需求为导向，最终数据存储方案必然是各种权衡的综合性设计</strong></p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',82),b={href:"https://juejin.im/post/5b6d62ddf265da0f491bd200",target:"_blank",rel:"noopener noreferrer"};function x(y,v){const t=l("ExternalLinkIcon");return o(),s("div",null,[d,i("ul",null,[i("li",null,[p,c,i("p",null,[e("Redis 是一个使用 ANSI C 编写的开源、支持网络、基于内存、可选持久性的键值对存储数据库。从 2015 年 6 月开始，Redis 的开发由 Redis Labs 赞助，而 2013 年 5 月至 2015 年 6 月期间，其开发由 Pivotal 赞助。在 2013 年 5 月之前，其开发由 VMware 赞助。根据月度排行网站 "),i("a",u,[e("DB-Engines.com"),a(t)]),e(" 的数据显示，Redis 是最流行的键值对存储数据库。")])]),h,m]),f,i("ul",null,[i("li",null,[i("a",b,[e("NoSQL 还是 SQL ？这一篇讲清楚"),a(t)])])])])}const B=r(g,[["render",x],["__file","01.Nosql技术选型.html.vue"]]);export{B as default};
