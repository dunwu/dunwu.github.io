import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as d,a as n,b as e,d as s,e as o}from"./app-d70a109d.js";const l={},p=o(`<h1 id="mysql-存储引擎" tabindex="-1"><a class="header-anchor" href="#mysql-存储引擎" aria-hidden="true">#</a> Mysql 存储引擎</h1><p>在文件系统中，Mysql 将每个数据库（也可以成为 schema）保存为数据目录下的一个子目录。创建表示，Mysql 会在数据库子目录下创建一个和表同名的 <code>.frm</code> 文件保存表的定义。因为 Mysql 使用文件系统的目录和文件来保存数据库和表的定义，大小写敏感性和具体平台密切相关。Windows 中大小写不敏感；类 Unix 中大小写敏感。<strong>不同的存储引擎保存数据和索引的方式是不同的，但表的定义则是在 Mysql 服务层统一处理的。</strong></p><p>MySQL 的存储引擎采用了插件的形式，每个存储引擎都面向一种特定的数据库应用环境。同时开源的 MySQL 还允许开发人员设置自己的存储引擎，下面是一些常见的存储引擎：</p><ul><li>InnoDB 存储引擎：它是 MySQL 5.5 版本之后默认的存储引擎，最大的特点是支持事务、行级锁定、外键约束等。</li><li>MyISAM 存储引擎：在 MySQL 5.5 版本之前是默认的存储引擎，不支持事务，也不支持外键，最大的特点是速度快，占用资源少。</li><li>Memory 存储引擎：使用系统内存作为存储介质，以便得到更快的响应速度。不过如果 mysqld 进程崩溃，则会导致所有的数据丢失，因此我们只有当数据是临时的情况下才使用 Memory 存储引擎。</li><li>NDB 存储引擎：也叫做 NDB Cluster 存储引擎，主要用于 MySQL Cluster 分布式集群环境，类似于 Oracle 的 RAC 集群。</li><li>Archive 存储引擎：它有很好的压缩机制，用于文件归档，在请求写入时会进行压缩，所以也经常用来做仓库。</li></ul><h2 id="存储引擎相关操作" tabindex="-1"><a class="header-anchor" href="#存储引擎相关操作" aria-hidden="true">#</a> 存储引擎相关操作</h2><h3 id="查看存储引擎命令" tabindex="-1"><a class="header-anchor" href="#查看存储引擎命令" aria-hidden="true">#</a> 查看存储引擎命令</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 查看支持的存储引擎</span>
<span class="token keyword">SHOW</span> ENGINES<span class="token punctuation">;</span>

<span class="token comment"># 查看默认的存储引擎</span>
<span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;storage_engine&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># 查看某表所使用的存储引擎</span>
<span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>table_name<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>

<span class="token comment"># 查看某数据库中的某表所使用的存储引擎</span>
<span class="token keyword">SHOW</span> <span class="token keyword">TABLE</span> <span class="token keyword">STATUS</span> <span class="token operator">LIKE</span> <span class="token string">&#39;table_name&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">SHOW</span> <span class="token keyword">TABLE</span> <span class="token keyword">STATUS</span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">\`</span>database_name<span class="token punctuation">\`</span></span> <span class="token keyword">WHERE</span> <span class="token identifier"><span class="token punctuation">\`</span>name<span class="token punctuation">\`</span></span> <span class="token operator">=</span> <span class="token string">&quot;table_name&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置存储引擎命令" tabindex="-1"><a class="header-anchor" href="#设置存储引擎命令" aria-hidden="true">#</a> 设置存储引擎命令</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 建表时指定存储引擎，如果不显示指定，默认是 INNODB</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> t1 <span class="token punctuation">(</span>i <span class="token keyword">INT</span><span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">INNODB</span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> t2 <span class="token punctuation">(</span>i <span class="token keyword">INT</span><span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> CSV<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> t3 <span class="token punctuation">(</span>i <span class="token keyword">INT</span><span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> MEMORY<span class="token punctuation">;</span>

<span class="token comment"># 修改存储引擎</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> t <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span><span class="token punctuation">;</span>

<span class="token comment"># 修改默认存储引擎，也可以在配置文件 my.cnf 中修改默认引擎</span>
<span class="token keyword">SET</span> default_storage_engine<span class="token operator">=</span>NDBCLUSTER<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，每当 <code>CREATE TABLE</code> 或 <code>ALTER TABLE</code> 不能使用默认存储引擎时，都会生成一个警告。为了防止在所需的引擎不可用时出现令人困惑的意外行为，可以启用 <code>NO_ENGINE_SUBSTITUTION SQL</code> 模式。如果所需的引擎不可用，则此设置将产生错误而不是警告，并且不会创建或更改表</p><h2 id="mysql-存储引擎简介" tabindex="-1"><a class="header-anchor" href="#mysql-存储引擎简介" aria-hidden="true">#</a> Mysql 存储引擎简介</h2><h3 id="mysql-内置的存储引擎" tabindex="-1"><a class="header-anchor" href="#mysql-内置的存储引擎" aria-hidden="true">#</a> Mysql 内置的存储引擎</h3><ul><li><strong>InnoDB</strong> - InnoDB 是 MySQL 5.5 版本以后的默认存储引擎。并且提供了行级锁和外键的约束。性能不错且支持自动崩溃恢复。</li><li><strong>MyISAM</strong> - MyISAM 是 MySQL 5.5 版本以后的默认存储引擎。特性丰富但不支持事务，也不支持行级锁和外键，也没有崩溃恢复功能。</li><li><strong>CSV</strong> - 可以将 CSV 文件作为 Mysql 的表来处理，但这种表不支持索引。</li><li><strong>Memory</strong> - 数据存储在内存，以便得到更快的响应速度。不过如果 mysqld 进程崩溃，则会导致所有的数据丢失。</li><li><strong>NDB</strong> - 也叫做 NDB Cluster 存储引擎，主要用于 MySQL Cluster 分布式集群环境，类似于 Oracle 的 RAC 集群。</li><li><strong>Archieve</strong> - Archieve 存储引擎非常适合用于归档数据。 <ul><li>Archieve 存储引擎只支持 <code>INSERT</code> 和 <code>SELECT</code> 操作。</li><li>Archieve 存储引擎采用 zlib 算法压缩数据，压缩比可达到 1: 10。</li></ul></li></ul><h3 id="如何选择合适的存储引擎" tabindex="-1"><a class="header-anchor" href="#如何选择合适的存储引擎" aria-hidden="true">#</a> 如何选择合适的存储引擎</h3><p>大多数情况下，InnoDB 都是正确的选择，除非需要用到 InnoDB 不具备的特性。</p><p>如果应用需要选择 InnoDB 以外的存储引擎，可以考虑以下因素：</p><ul><li>事务：如果业务场景是 OLTP，则 InnoDB 是首选存储引擎。如果不需要支持事务，且主要是 SELECT 和 INSERT 操作，MyISAM 是不错的选择。所以，如果 Mysql 部署方式为主备模式，并进行读写分离。那么可以这么做：主节点只支持写操作，默认引擎为 InnoDB；备节点只支持读操作，默认引擎为 MyISAM。</li><li>并发：MyISAM 只支持表级锁，而 InnoDB 还支持行级锁。所以，InnoDB 并发性能更高。</li><li>外键：InnoDB 支持外键。</li><li>备份：InnoDB 支持在线热备份。</li><li>崩溃恢复：MyISAM 崩溃后发生损坏的概率比 InnoDB 高很多，而且恢复的速度也更慢。</li><li>其它特性：MyISAM 支持压缩表和空间数据索引。</li></ul><h2 id="innodb-简介" tabindex="-1"><a class="header-anchor" href="#innodb-简介" aria-hidden="true">#</a> InnoDB 简介</h2><p>InnoDB 是 MySQL 5.5 版本以后的默认存储引擎。只有在需要 InnoDB 不支持的特性时，才考虑使用其它存储引擎。</p><p>InnoDB 也使用 B+Tree 作为索引结构，但具体实现方式却与 MyISAM 截然不同。MyISAM 索引文件和数据文件是分离的，索引文件仅保存数据记录的地址。而<strong>在 InnoDB 中，表数据文件本身就是按 B+Tree 组织的一个索引结构</strong>，这棵树的叶节点 data 域保存了完整的数据记录。这个<strong>索引的 key 是数据表的主键</strong>，因此<strong>InnoDB 表数据文件本身就是主索引</strong>。</p><p>InnoDB 采用 MVCC 来支持高并发，并且实现了四个标准的隔离级别。其默认级别是可重复读（REPEATABLE READ），并且通过间隙锁（next-key locking）防止幻读。</p><p>InnoDB 是基于聚簇索引建立的，与其他存储引擎有很大不同。在索引中保存了数据，从而避免直接读取磁盘，因此对查询性能有很大的提升。</p><p>内部做了很多优化，包括从磁盘读取数据时采用的可预测性读、能够加快读操作并且自动创建的自适应哈希索引、能够加速插入操作的插入缓冲区等。</p><p>支持真正的在线热备份。其它存储引擎不支持在线热备份，要获取一致性视图需要停止对所有表的写入，而在读写混合场景中，停止写入可能也意味着停止读取。</p><p>InnoDB 物理文件结构为：</p><ul><li><p><code>.frm</code> 文件：与表相关的元数据信息都存放在 frm 文件，包括表结构的定义信息等。</p></li><li><p><code>.ibd</code> 文件或 <code>.ibdata</code> 文件： 这两种文件都是存放 InnoDB 数据的文件，之所以有两种文件形式存放 InnoDB 的数据，是因为 InnoDB 的数据存储方式能够通过配置来决定是使用<strong>共享表空间</strong>存放存储数据，还是用<strong>独享表空间</strong>存放存储数据。</p><p>独享表空间存储方式使用<code>.ibd</code>文件，并且每个表一个<code>.ibd</code>文件 共享表空间存储方式使用<code>.ibdata</code>文件，所有表共同使用一个<code>.ibdata</code>文件（或多个，可自己配置）</p></li></ul><h2 id="innodb-存储架构" tabindex="-1"><a class="header-anchor" href="#innodb-存储架构" aria-hidden="true">#</a> InnoDB 存储架构</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202311070640589.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>InnoDB 存储架构分为内存结构和磁盘结构。</p><p>InnoDB 内存结构的核心组件有：</p><ul><li>Buffer Pool</li><li>Change Buffer</li><li>Adaptive Hash Index</li><li>Log Buffer</li></ul><p>InnoDB 磁盘结构的核心组件有：</p><ul><li>Tablespace</li><li>Doublewrite Buffer</li><li>redo log</li><li>undo log</li></ul><h2 id="innodb-表空间" tabindex="-1"><a class="header-anchor" href="#innodb-表空间" aria-hidden="true">#</a> InnoDB 表空间</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202311070708733.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="行-row" tabindex="-1"><a class="header-anchor" href="#行-row" aria-hidden="true">#</a> 行（row）</h3><p>数据库表中的记录都是按行（row）进行存放的，每行记录根据不同的行格式，有不同的存储结构。</p><p>后面我们详细介绍 InnoDB 存储引擎的行格式，也是本文重点介绍的内容。</p><h3 id="页-page" tabindex="-1"><a class="header-anchor" href="#页-page" aria-hidden="true">#</a> 页（page）</h3><p>记录是按照行来存储的，但是数据库的读取并不以「行」为单位，否则一次读取（也就是一次 I/O 操作）只能处理一行数据，效率会非常低。</p><p>因此，<strong>InnoDB 的数据是按「页」为单位来读写的</strong>，也就是说，当需要读一条记录的时候，并不是将这个行记录从磁盘读出来，而是以页为单位，将其整体读入内存。</p><p><strong>默认每个页的大小为 16KB</strong>，也就是最多能保证 16KB 的连续存储空间。</p><p>页是 InnoDB 存储引擎磁盘管理的最小单元，意味着数据库每次读写都是以 16KB 为单位的，一次最少从磁盘中读取 16K 的内容到内存中，一次最少把内存中的 16K 内容刷新到磁盘中。</p>`,43),c={href:"https://xiaolincoding.com/mysql/index/page.html",target:"_blank",rel:"noopener noreferrer"},u=o('<p>总之知道表中的记录存储在「数据页」里面就行。</p><h3 id="区-extent" tabindex="-1"><a class="header-anchor" href="#区-extent" aria-hidden="true">#</a> 区（extent）</h3><p>我们知道 InnoDB 存储引擎是用 B+ 树来组织数据的。</p><p>B+ 树中每一层都是通过双向链表连接起来的，如果是以页为单位来分配存储空间，那么链表中相邻的两个页之间的物理位置并不是连续的，可能离得非常远，那么磁盘查询时就会有大量的随机 I/O，随机 I/O 是非常慢的。</p><p>解决这个问题也很简单，就是让链表中相邻的页的物理位置也相邻，这样就可以使用顺序 I/O 了，那么在范围查询（扫描叶子节点）的时候性能就会很高。</p><p>那具体怎么解决呢？</p><p><strong>在表中数据量大的时候，为某个索引分配空间的时候就不再按照页为单位分配了，而是按照区（extent）为单位分配。每个区的大小为 1MB，对于 16KB 的页来说，连续的 64 个页会被划为一个区，这样就使得链表中相邻的页的物理位置也相邻，就能使用顺序 I/O 了</strong>。</p><h3 id="段-segment" tabindex="-1"><a class="header-anchor" href="#段-segment" aria-hidden="true">#</a> 段（segment）</h3><p>表空间是由各个段（segment）组成的，段是由多个区（extent）组成的。段一般分为数据段、索引段和回滚段等。</p><ul><li>索引段：存放 B + 树的非叶子节点的区的集合；</li><li>数据段：存放 B + 树的叶子节点的区的集合；</li><li>回滚段：存放的是回滚数据的区的集合。</li></ul><p>好了，终于说完表空间的结构了。接下来，就具体讲一下 InnoDB 的行格式了。</p><p>之所以要绕一大圈才讲行记录的格式，主要是想让大家知道行记录是存储在哪个文件，以及行记录在这个表空间文件中的哪个区域，有一个从上往下切入的视角，这样理解起来不会觉得很抽象。</p><h2 id="innodb-内存结构" tabindex="-1"><a class="header-anchor" href="#innodb-内存结构" aria-hidden="true">#</a> InnoDB 内存结构</h2><h3 id="buffer-pool" tabindex="-1"><a class="header-anchor" href="#buffer-pool" aria-hidden="true">#</a> Buffer Pool</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202311070641009.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Buffer Pool 用于加速数据的访问和修改，通过将热点数据缓存在内存的方法，最大限度地减少磁盘 IO，加速热点数据的读和写。</p><p>Buffer Pool 中数据<strong>以页为存储单位</strong>，其实现数据结构是<strong>以页为单位的单链表</strong>。</p><p>由于内存的空间限制，Buffer Pool 仅能容纳最热点的数据。Buffer Pool 使用最近最少使用算法（Least Recent Used，LRU）算法淘汰非热点数据页。</p><p>依据时间局部性原理与空间局部性原理，Buffer Pool 在存储当前活动数据页的时候，会以预读 Read-ahead 的方式缓存目标数据页临近的数据页。</p><p>预读机制带来预读失败的问题，InnoDB <strong>采用分代机制解决预读失败问题</strong>：将 Buffer Pool 分为 New SubList 和 Old SubList 两部分，将最新读取的数据页置于 Old SubList 头部，Old SubList 中的数据再次被访问到才会置于 New SubList 头部；预读失败的冷数据将更快地从 Old SubList 中淘汰，而不会影响到 New SubList 中原有的热数据。</p><p>预读失败问题可以引申到缓冲池污染问题，InnoDB <strong>采用时间窗口（Time Window）机制解决缓冲池污染问题</strong>：对于 Old SubList 中的数据页，必须在 Old SubList 中停留到达指定时间之后再次被访问到，才能转移到 New SubList 中，默认窗口大小是 1s。</p><p>对于 Buffer Pool 中数据的查询，InnoDB 直接读取返回；对于 Buffer Pool 中数据的修改，InnoDB 直接在 Buffer Pool 中修改，并将修改写入 redo Log 中，当数据页被 LRU 算法淘汰时写入磁盘，若持久化前系统崩溃，则在重启后使用 redo Log 进行恢复。</p><h3 id="change-buffer" tabindex="-1"><a class="header-anchor" href="#change-buffer" aria-hidden="true">#</a> Change Buffer</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202311070641668.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Change Buffer 用于加速非热点数据中二级索引的写入操作。由于二级索引数据的不连续性，导致修改二级索引时需要进行频繁的磁盘 IO 消耗大量性能，Change Buffer 缓冲对二级索引的修改操作，同时将写操作录入 redo log 中，在缓冲到一定量或系统较空闲时进行 <code>ibuf merge</code> 操作将修改写入磁盘中。Change Buffer 在系统表空间中有相应的持久化区域。</p><p>Change Buffer 大小默认占 Buffer Pool 的 25%，在引擎启动时便初始化完成。其物理结构为一棵名为 <code>ibuf</code> 的 B Tree。Change Buffer 的使用条件为：</p><ul><li>InnoDB 开启 <code>innodb_change_buffering</code>，且该表当前没有 <code>flush</code> 操作。</li><li>仅对二级索引树的叶子节点进行修改，且该索引页不在 Buffer Pool 中。</li><li>对于 Unique 二级索引，仅删除操作可以缓冲。</li></ul><p>其 <code>ibuf merge</code> 时机为：</p><ul><li>用户使用该二级索引进行查询时。</li><li>缓存插入操作时，预估到 page 空间不足可能导致索引页分裂时。</li><li>本次缓存操作将导致 ibuf btree 页分裂，且分类后 Change Buffer 大小将超出限制时。</li><li>master 线程发起 <code>merge</code> 命令时。</li><li>用户对该表进行 <code>flush</code> 操作时。</li></ul><h3 id="adaptive-hash-index" tabindex="-1"><a class="header-anchor" href="#adaptive-hash-index" aria-hidden="true">#</a> Adaptive Hash Index</h3><p>自适应哈希索引（Adaptive Hash Index）用于实现对于热数据页的一次查询。使用聚簇索引进行数据页定位的时候需要根据索引树的高度从根节点走到叶子节点，通常需要 3 到 4 次查询才能定位数据。InnoDB 根据对索引使用情况的分析和索引字段的分析，通过自调优 Self-tuning 的方式为索引页建立或者删除哈希索引。</p><p>AHI 所作用的目标是频繁查询的数据页和索引页，而由于数据页是聚簇索引的一部分，因此 AHI 是建立在索引之上的索引，<strong>对于二级索引，若命中 AHI，则将直接从 AHI 获取二级索引页的记录指针，再根据主键沿着聚簇索引查找数据；若聚簇索引查询同样命中 AHI，则直接返回目标数据页的记录指针，此时就可以根据记录指针直接定位数据页</strong>。</p><p>AHI 的大小为 Buffer Pool 的 1/64，再 MySql 5.7 之后支持分区，以减少对于全局 AHI 锁的竞争，默认分区数为 8。</p><h3 id="log-buffer" tabindex="-1"><a class="header-anchor" href="#log-buffer" aria-hidden="true">#</a> Log Buffer</h3><p>Log Buffer 是用于缓冲待写入磁盘日志文件的数据。InnoDB 的所有修改操作都会被写入 redo log、undo log 等日志文件，如果每次都直接写入磁盘，会引发大量 IO。Log Buffer 正是针对此进行了优化：先将修改操作缓冲于此内存区域，然后定期批量 刷新到磁盘。</p>',35),h={href:"https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_log_buffer_size",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"innodb_log_buffer_size",-1),g=o('<h2 id="myisam" tabindex="-1"><a class="header-anchor" href="#myisam" aria-hidden="true">#</a> MyISAM</h2><p>MyISAM 是 MySQL 5.5 版本以前的默认存储引擎。</p><p>MyISAM 设计简单，数据以紧密格式存储。对于只读数据，或者表比较小、可以容忍修复操作，则依然可以使用 MyISAM。</p><p>MyISAM 引擎使用 B+Tree 作为索引结构，<strong>叶节点的 data 域存放的是数据记录的地址</strong>。</p><p>MyISAM 提供了大量的特性，包括：全文索引、压缩表、空间函数等。但是，MyISAM 不支持事务和行级锁。并且 MyISAM 不支持崩溃后的安全恢复。</p><p>MyISAM 物理文件结构为：</p><ul><li><code>.frm</code>文件：与表相关的元数据信息都存放在 frm 文件，包括表结构的定义信息等。</li><li><code>.MYD</code> (<code>MYData</code>) 文件：MyISAM 存储引擎专用，用于存储 MyISAM 表的数据。</li><li><code>.MYI</code> (<code>MYIndex</code>)文件：MyISAM 存储引擎专用，用于存储 MyISAM 表的索引相关信息。</li></ul><h2 id="innodb-vs-myisam" tabindex="-1"><a class="header-anchor" href="#innodb-vs-myisam" aria-hidden="true">#</a> InnoDB vs. MyISAM</h2><p>InnoDB 和 MyISAM 的对比：</p><table><thead><tr><th>对比项</th><th>MyISAM</th><th>InnoDB</th></tr></thead><tbody><tr><td>主外键</td><td>不支持</td><td>支持</td></tr><tr><td>事务</td><td>不支持</td><td>支持</td></tr><tr><td>锁</td><td>支持表级锁</td><td>支持表级锁、行级锁</td></tr><tr><td>索引</td><td>采用非聚簇索引</td><td>主键采用聚簇索引，以提高 IO 效率</td></tr><tr><td>表空间</td><td>小</td><td>大</td></tr><tr><td>关注点</td><td>性能</td><td>事务</td></tr><tr><td>计数器</td><td>维护了计数器，<code>SELECT COUNT(*)</code> 效率为 <code>O(1)</code></td><td>没有维护计数器，需要全表扫描</td></tr></tbody></table><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',11),b={href:"https://book.douban.com/subject/23008813/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://time.geekbang.org/column/intro/139",target:"_blank",rel:"noopener noreferrer"};function k(I,B){const a=i("ExternalLinkIcon");return r(),d("div",null,[p,n("p",null,[e("页的类型有很多，常见的有数据页、undo 日志页、溢出页等等。数据表中的行记录是用「数据页」来管理的，数据页的结构这里我就不讲细说了，之前文章有说过，感兴趣的可以去看这篇文章："),n("a",c,[e("换一个角度看 B+ 树(opens new window)"),s(a)])]),u,n("p",null,[e("日志缓冲区大小可以由配置 "),n("a",h,[f,s(a)]),e(" 控制，默认大小为 16MB。")]),g,n("ul",null,[n("li",null,[n("a",b,[e("《高性能 MySQL》"),s(a)])]),n("li",null,[n("a",m,[e("MySQL 实战 45 讲"),s(a)])])])])}const S=t(l,[["render",k],["__file","index.html.vue"]]);export{S as default};
