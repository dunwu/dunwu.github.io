import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as p,c as r,a as s,b as n,d as e,e as t}from"./app-9db88853.js";const i={},c=t('<h1 id="hbase-快速入门" tabindex="-1"><a class="header-anchor" href="#hbase-快速入门" aria-hidden="true">#</a> HBase 快速入门</h1><h2 id="hbase-简介" tabindex="-1"><a class="header-anchor" href="#hbase-简介" aria-hidden="true">#</a> HBase 简介</h2><h3 id="为什么需要-hbase" tabindex="-1"><a class="header-anchor" href="#为什么需要-hbase" aria-hidden="true">#</a> 为什么需要 HBase</h3><p>在介绍 HBase 之前，我们不妨先了解一下为什么需要 HBase，或者说 HBase 是为了达到什么目的而产生。</p><p>在 HBase 诞生之前，Hadoop 可以通过 HDFS 来存储结构化、半结构甚至非结构化的数据，它是传统数据库的补充，是海量数据存储的最佳方法，它针对大文件的存储，批量访问和流式访问都做了优化，同时也通过多副本解决了容灾问题。</p><p>Hadoop 的缺陷在于：它只能执行批处理，并且只能以顺序方式访问数据。这意味着即使是最简单的工作，也必须搜索整个数据集，即：<strong>Hadoop 无法实现对数据的随机访问</strong>。实现数据的随机访问是传统的关系型数据库所擅长的，但它们却不能用于海量数据的存储。在这种情况下，必须有一种新的方案来<strong>同时解决海量数据存储和随机访问的问题</strong>，HBase 就是其中之一 (HBase，Cassandra，couchDB，Dynamo 和 MongoDB 都能存储海量数据并支持随机访问)。</p><blockquote><p>注：数据结构分类：</p><ul><li>结构化数据：即以关系型数据库表形式管理的数据；</li><li>半结构化数据：非关系模型的，有基本固定结构模式的数据，例如日志文件、XML 文档、JSON 文档、Email 等；</li><li>非结构化数据：没有固定模式的数据，如 WORD、PDF、PPT、EXL，各种格式的图片、视频等。</li></ul></blockquote><h3 id="什么是-hbase" tabindex="-1"><a class="header-anchor" href="#什么是-hbase" aria-hidden="true">#</a> 什么是 HBase</h3><p><strong>HBase 是一个构建在 HDFS（Hadoop 文件系统）之上的列式数据库</strong>。</p><p>HBase 是一种类似于 <code>Google’s Big Table</code> 的数据模型，它是 Hadoop 生态系统的一部分，它将数据存储在 HDFS 上，客户端可以通过 HBase 实现对 HDFS 上数据的随机访问。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200601170449.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>HBase 的<strong>核心特性</strong>如下：</p><ul><li><strong>分布式</strong><ul><li><strong>伸缩性</strong>：支持通过增减机器进行水平扩展，以提升整体容量和性能</li><li><strong>高可用</strong>：支持 RegionServers 之间的自动故障转移</li><li><strong>自动分区</strong>：Region 分散在集群中，当行数增长的时候，Region 也会自动的分区再均衡</li></ul></li><li><strong>超大数据集</strong>：HBase 被设计用来读写超大规模的数据集（数十亿行至数百亿行的表）</li><li><strong>支持结构化、半结构化和非结构化的数据</strong>：由于 HBase 基于 HDFS 构建，所以和 HDFS 一样，支持结构化、半结构化和非结构化的数据</li><li><strong>非关系型数据库</strong><ul><li><strong>不支持标准 SQL 语法</strong></li><li><strong>没有真正的索引</strong></li><li><strong>不支持复杂的事务</strong>：只支持行级事务，即单行数据的读写都是原子性的</li></ul></li></ul><p>HBase 的其他特性</p><ul><li>读写操作遵循强一致性</li><li>过滤器支持谓词下推</li><li>易于使用的 Java 客户端 API</li><li>它支持线性和模块化可扩展性。</li><li>HBase 表支持 Hadoop MapReduce 作业的便捷基类</li><li>很容易使用 Java API 进行客户端访问</li><li>为实时查询提供块缓存 BlockCache 和布隆过滤器</li><li>它通过服务器端过滤器提供查询谓词下推</li></ul><h3 id="什么时候使用-hbase" tabindex="-1"><a class="header-anchor" href="#什么时候使用-hbase" aria-hidden="true">#</a> 什么时候使用 HBase</h3><p>根据上一节对于 HBase 特性的介绍，我们可以梳理出 HBase 适用、不适用的场景：</p><p>HBase 不适用场景：</p><ul><li>需要索引</li><li>需要复杂的事务</li><li>数据量较小（比如：数据量不足几百万行）</li></ul><p>HBase 适用场景：</p><ul><li>能存储海量数据并支持随机访问（比如：数据量级达到十亿级至百亿级）</li><li>存储结构化、半结构化数据</li><li>硬件资源充足</li></ul><blockquote><p>一言以蔽之——HBase 适用的场景是：<strong>实时地随机访问超大数据集</strong>。</p></blockquote><p>HBase 的典型应用场景</p><ul><li>存储监控数据</li><li>存储用户/车辆 GPS 信息</li><li>存储用户行为数据</li><li>存储各种日志数据，如：访问日志、操作日志、推送日志等。</li><li>存储短信、邮件等消息类数据</li><li>存储网页数据</li></ul><h3 id="hbase-数据模型简介" tabindex="-1"><a class="header-anchor" href="#hbase-数据模型简介" aria-hidden="true">#</a> HBase 数据模型简介</h3><p>前面已经提及，HBase 是一个列式数据库，其数据模型和关系型数据库有所不同。其数据模型的关键术语如下：</p><ul><li>Table：HBase 表由多行组成。</li><li>Row：HBase 中的一行由一个行键和一个或多个列以及与之关联的值组成。 行在存储时按行键的字母顺序排序。 为此，行键的设计非常重要。 目标是以相关行彼此靠近的方式存储数据。 常见的行键模式是网站域。 如果您的行键是域，您应该将它们反向存储（org.apache.www、org.apache.mail、org.apache.jira）。 这样，所有 Apache 域在表中彼此靠近，而不是根据子域的第一个字母展开。</li><li>Column：HBase 中的列由列族和列限定符组成，它们由 :（冒号）字符分隔。</li><li>Column Family：通常出于性能原因，列族在物理上将一组列及其值放在一起。 每个列族都有一组存储属性，例如它的值是否应该缓存在内存中，它的数据是如何压缩的，它的行键是如何编码的，等等。 表中的每一行都有相同的列族，尽管给定的行可能不在给定的列族中存储任何内容。</li><li>列限定符：将列限定符添加到列族以提供给定数据片段的索引。 给定列族内容，列限定符可能是 content:html，另一个可能是 content:pdf。 尽管列族在表创建时是固定的，但列限定符是可变的，并且行之间可能有很大差异。</li><li>Cell：单元格是行、列族和列限定符的组合，包含一个值和一个时间戳，代表值的版本。</li><li>Timestamp：时间戳写在每个值旁边，是给定版本值的标识符。 默认情况下，时间戳表示写入数据时 RegionServer 上的时间，但您可以在将数据放入单元格时指定不同的时间戳值。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/bigdata/hbase/1551164224778.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="特性比较" tabindex="-1"><a class="header-anchor" href="#特性比较" aria-hidden="true">#</a> 特性比较</h3><h4 id="hbase-vs-rdbms" tabindex="-1"><a class="header-anchor" href="#hbase-vs-rdbms" aria-hidden="true">#</a> HBase vs. RDBMS</h4><table><thead><tr><th>RDBMS</th><th>HBase</th></tr></thead><tbody><tr><td>RDBMS 有它的模式，描述表的整体结构的约束</td><td>HBase 无模式，它不具有固定列模式的概念；仅定义列族</td></tr><tr><td>支持的文件系统有 FAT、NTFS 和 EXT</td><td>支持的文件系统只有 HDFS</td></tr><tr><td>使用提交日志来存储日志</td><td>使用预写日志 (WAL) 来存储日志</td></tr><tr><td>使用特定的协调系统来协调集群</td><td>使用 ZooKeeper 来协调集群</td></tr><tr><td>存储的都是中小规模的数据表</td><td>存储的是超大规模的数据表，并且适合存储宽表</td></tr><tr><td>通常支持复杂的事务</td><td>仅支持行级事务</td></tr><tr><td>适用于结构化数据</td><td>适用于半结构化、结构化数据</td></tr><tr><td>使用主键</td><td>使用 row key</td></tr></tbody></table><h4 id="hbase-vs-hdfs" tabindex="-1"><a class="header-anchor" href="#hbase-vs-hdfs" aria-hidden="true">#</a> HBase vs. HDFS</h4><table><thead><tr><th>HDFS</th><th>HBase</th></tr></thead><tbody><tr><td>HDFS 提供了一个用于分布式存储的文件系统。</td><td>HBase 提供面向表格列的数据存储。</td></tr><tr><td>HDFS 为大文件提供优化存储。</td><td>HBase 为表格数据提供了优化。</td></tr><tr><td>HDFS 使用块文件。</td><td>HBase 使用键值对数据。</td></tr><tr><td>HDFS 数据模型不灵活。</td><td>HBase 提供了一个灵活的数据模型。</td></tr><tr><td>HDFS 使用文件系统和处理框架。</td><td>HBase 使用带有内置 Hadoop MapReduce 支持的表格存储。</td></tr><tr><td>HDFS 主要针对一次写入多次读取进行了优化。</td><td>HBase 针对读/写许多进行了优化。</td></tr></tbody></table><h4 id="行式数据库-vs-列式数据库" tabindex="-1"><a class="header-anchor" href="#行式数据库-vs-列式数据库" aria-hidden="true">#</a> 行式数据库 vs. 列式数据库</h4><table><thead><tr><th>行式数据库</th><th>列式数据库</th></tr></thead><tbody><tr><td>对于添加/修改操作更高效</td><td>对于读取操作更高效</td></tr><tr><td>读取整行数据</td><td>仅读取必要的列数据</td></tr><tr><td>最适合在线事务处理系统（OLTP）</td><td>不适合在线事务处理系统（OLTP）</td></tr><tr><td>将行数据存储在连续的页内存中</td><td>将列数据存储在非连续的页内存中</td></tr></tbody></table><p>列式数据库的优点：</p><ul><li>支持数据压缩</li><li>支持快速数据检索</li><li>简化了管理和配置</li><li>有利于聚合查询（例如 COUNT、SUM、AVG、MIN 和 MAX）的高性能</li><li>分区效率很高，因为它提供了自动分片机制的功能，可以将较大的区域分配给较小的区域</li></ul><p>列式数据库的缺点：</p><ul><li>JOIN 查询和来自多个表的数据未优化</li><li>必须为频繁的删除和更新创建拆分，因此降低了存储效率</li><li>由于非关系数据库的特性，分区和索引的设计非常困难</li></ul><h2 id="hbase-安装" tabindex="-1"><a class="header-anchor" href="#hbase-安装" aria-hidden="true">#</a> HBase 安装</h2>',40),d={href:"https://hbase.apache.org/book.html#quickstart",target:"_blank",rel:"noopener noreferrer"},u={href:"https://hbase.apache.org/book.html#quickstart_pseudo",target:"_blank",rel:"noopener noreferrer"},h={href:"https://hbase.apache.org/book.html#quickstart_fully_distributed",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/big-data-europe/docker-hbase",target:"_blank",rel:"noopener noreferrer"},b=t(`<h2 id="hbase-hello-world-示例" tabindex="-1"><a class="header-anchor" href="#hbase-hello-world-示例" aria-hidden="true">#</a> HBase Hello World 示例</h2><ol><li><p>连接 HBase</p><p>在 HBase 安装目录的 <code>/bin</code> 目录下执行 <code>hbase shell</code> 命令进入 HBase 控制台。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ./bin/hbase shell
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:001:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>输入 <code>help</code> 可以查看 HBase Shell 命令。</p></li><li><p>创建表</p><p>可以使用 <code>create</code> 命令创建一张新表。必须要指定表名和 Column Family。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:001:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> create <span class="token string">&#39;test&#39;</span>, <span class="token string">&#39;cf&#39;</span>
<span class="token number">0</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token number">0.4170</span> seconds

<span class="token operator">=</span><span class="token operator">&gt;</span> Hbase::Table - <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>列出表信息</p><p>使用 <code>list</code> 命令来确认新建的表已存在。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:002:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> list <span class="token string">&#39;test&#39;</span>
TABLE
<span class="token builtin class-name">test</span>
<span class="token number">1</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token number">0.0180</span> seconds

<span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用 <code>describe</code> 命令可以查看表的细节信息，包括配置信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:003:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> describe <span class="token string">&#39;test&#39;</span>
Table <span class="token builtin class-name">test</span> is ENABLED
<span class="token builtin class-name">test</span>
COLUMN FAMILIES DESCRIPTION
<span class="token punctuation">{</span>NAME <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;cf&#39;</span>, VERSIONS <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;1&#39;</span>, EVICT_BLOCKS_ON_CLOSE <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;false&#39;</span>, NEW_VERSION_BEHAVIOR <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;false&#39;</span>, KEEP_DELETED_CELLS <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;FALSE&#39;</span>, CACHE_DATA_ON_WRITE <span class="token operator">=</span><span class="token operator">&gt;</span>
<span class="token string">&#39;false&#39;</span>, DATA_BLOCK_ENCODING <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;NONE&#39;</span>, TTL <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;FOREVER&#39;</span>, MIN_VERSIONS <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;0&#39;</span>, REPLICATION_SCOPE <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;0&#39;</span>, BLOOMFILTER <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;ROW&#39;</span>, CACHE_INDEX_ON_WRITE <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;f
alse&#39;</span>, IN_MEMORY <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;false&#39;</span>, CACHE_BLOOMS_ON_WRITE <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;false&#39;</span>, PREFETCH_BLOCKS_ON_OPEN <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;false&#39;</span>, COMPRESSION <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;NONE&#39;</span>, BLOCKCACHE <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;true&#39;</span>, BLOCKSIZE
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;65536&#39;</span><span class="token punctuation">}</span>
<span class="token number">1</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
Took <span class="token number">0.9998</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>向表中写数据</p><p>可以使用 <code>put</code> 命令向 HBase 表中写数据。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:003:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> put <span class="token string">&#39;test&#39;</span>, <span class="token string">&#39;row1&#39;</span>, <span class="token string">&#39;cf:a&#39;</span>, <span class="token string">&#39;value1&#39;</span>
<span class="token number">0</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token number">0.0850</span> seconds

hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:004:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> put <span class="token string">&#39;test&#39;</span>, <span class="token string">&#39;row2&#39;</span>, <span class="token string">&#39;cf:b&#39;</span>, <span class="token string">&#39;value2&#39;</span>
<span class="token number">0</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token number">0.0110</span> seconds

hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:005:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> put <span class="token string">&#39;test&#39;</span>, <span class="token string">&#39;row3&#39;</span>, <span class="token string">&#39;cf:c&#39;</span>, <span class="token string">&#39;value3&#39;</span>
<span class="token number">0</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token number">0.0100</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>一次性扫描表的所有数据</p><p>使用 <code>scan</code> 命令来扫描表数据。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:006:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> scan <span class="token string">&#39;test&#39;</span>
ROW                                      COLUMN+CELL
 row1                                    <span class="token assign-left variable">column</span><span class="token operator">=</span>cf:a, <span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token number">1421762485768</span>, <span class="token assign-left variable">value</span><span class="token operator">=</span>value1
 row2                                    <span class="token assign-left variable">column</span><span class="token operator">=</span>cf:b, <span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token number">1421762491785</span>, <span class="token assign-left variable">value</span><span class="token operator">=</span>value2
 row3                                    <span class="token assign-left variable">column</span><span class="token operator">=</span>cf:c, <span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token number">1421762496210</span>, <span class="token assign-left variable">value</span><span class="token operator">=</span>value3
<span class="token number">3</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token number">0.0230</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看一行数据</p><p>使用 <code>get</code> 命令可以查看一行表数据。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:007:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> get <span class="token string">&#39;test&#39;</span>, <span class="token string">&#39;row1&#39;</span>
COLUMN                                   CELL
 cf:a                                    <span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token number">1421762485768</span>, <span class="token assign-left variable">value</span><span class="token operator">=</span>value1
<span class="token number">1</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token number">0.0350</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>禁用表</p><p>如果想要删除表或修改表设置，必须先使用 <code>disable</code> 命令禁用表。如果想再次启用表，可以使用 <code>enable</code> 命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:008:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> disable <span class="token string">&#39;test&#39;</span>
<span class="token number">0</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token number">1.1820</span> seconds

hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:009:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> <span class="token builtin class-name">enable</span> <span class="token string">&#39;test&#39;</span>
<span class="token number">0</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token number">0.1770</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>删除表</p><p>使用 <code>drop</code> 命令可以删除表。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:011:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> drop <span class="token string">&#39;test&#39;</span>
<span class="token number">0</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token number">0.1370</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>退出 HBase Shell</p><p>使用 <code>quit</code> 命令，就能退出 HBase Shell 控制台。</p></li></ol><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,3),g=s("strong",null,"官方",-1),m={href:"http://hbase.apache.org/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://hbase.apache.org/book.html",target:"_blank",rel:"noopener noreferrer"},f={href:"http://abloz.com/hbase/book.html",target:"_blank",rel:"noopener noreferrer"},_=s("strong",null,"书籍",-1),H={href:"https://book.douban.com/subject/27600204/",target:"_blank",rel:"noopener noreferrer"},B=s("strong",null,"文章",-1),E={href:"https://static.googleusercontent.com/media/research.google.com/zh-CN//archive/bigtable-osdi06.pdf",target:"_blank",rel:"noopener noreferrer"},S={href:"https://mapr.com/blog/in-depth-look-hbase-architecture",target:"_blank",rel:"noopener noreferrer"},w=s("strong",null,"教程",-1),O={href:"https://github.com/heibaiying/BigData-Notes",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.cloudduggu.com/hbase/introduction/",target:"_blank",rel:"noopener noreferrer"};function D(C,L){const a=l("ExternalLinkIcon");return p(),r("div",null,[c,s("ul",null,[s("li",null,[s("a",d,[n("独立模式"),e(a)])]),s("li",null,[s("a",u,[n("伪分布式模式"),e(a)])]),s("li",null,[s("a",h,[n("全分布式模式"),e(a)])]),s("li",null,[s("a",k,[n("Docker 部署"),e(a)])])]),b,s("ul",null,[s("li",null,[g,s("ul",null,[s("li",null,[s("a",m,[n("HBase 官网"),e(a)])]),s("li",null,[s("a",v,[n("HBase 官方文档"),e(a)])]),s("li",null,[s("a",f,[n("HBase 官方文档中文版"),e(a)])])])]),s("li",null,[_,s("ul",null,[s("li",null,[s("a",H,[n("Hadoop 权威指南"),e(a)])])])]),s("li",null,[B,s("ul",null,[s("li",null,[s("a",E,[n("Bigtable: A Distributed Storage System for Structured Data"),e(a)])]),s("li",null,[s("a",S,[n("An In-Depth Look at the HBase Architecture"),e(a)])])])]),s("li",null,[w,s("ul",null,[s("li",null,[s("a",O,[n("https://github.com/heibaiying/BigData-Notes"),e(a)])]),s("li",null,[s("a",N,[n("https://www.cloudduggu.com/hbase/introduction/"),e(a)])])])])])])}const R=o(i,[["render",D],["__file","01.HBase快速入门.html.vue"]]);export{R as default};
