import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as r,c as l,a as e,b as d,d as i,e as s}from"./app-c2b0a364.js";const o={},c=s(`<h1 id="mysql-存储引擎" tabindex="-1"><a class="header-anchor" href="#mysql-存储引擎" aria-hidden="true">#</a> Mysql 存储引擎</h1><p>在文件系统中，Mysql 将每个数据库（也可以成为 schema）保存为数据目录下的一个子目录。创建表示，Mysql 会在数据库子目录下创建一个和表同名的 <code>.frm</code> 文件保存表的定义。因为 Mysql 使用文件系统的目录和文件来保存数据库和表的定义，大小写敏感性和具体平台密切相关。Windows 中大小写不敏感；类 Unix 中大小写敏感。<strong>不同的存储引擎保存数据和索引的方式是不同的，但表的定义则是在 Mysql 服务层统一处理的。</strong></p><p>MySQL 的存储引擎采用了插件的形式，每个存储引擎都面向一种特定的数据库应用环境。同时开源的 MySQL 还允许开发人员设置自己的存储引擎，下面是一些常见的存储引擎：</p><ul><li>InnoDB 存储引擎：它是 MySQL 5.5 版本之后默认的存储引擎，最大的特点是支持事务、行级锁定、外键约束等。</li><li>MyISAM 存储引擎：在 MySQL 5.5 版本之前是默认的存储引擎，不支持事务，也不支持外键，最大的特点是速度快，占用资源少。</li><li>Memory 存储引擎：使用系统内存作为存储介质，以便得到更快的响应速度。不过如果 mysqld 进程崩溃，则会导致所有的数据丢失，因此我们只有当数据是临时的情况下才使用 Memory 存储引擎。</li><li>NDB 存储引擎：也叫做 NDB Cluster 存储引擎，主要用于 MySQL Cluster 分布式集群环境，类似于 Oracle 的 RAC 集群。</li><li>Archive 存储引擎：它有很好的压缩机制，用于文件归档，在请求写入时会进行压缩，所以也经常用来做仓库。</li></ul><h2 id="存储引擎相关操作" tabindex="-1"><a class="header-anchor" href="#存储引擎相关操作" aria-hidden="true">#</a> 存储引擎相关操作</h2><h3 id="查看存储引擎命令" tabindex="-1"><a class="header-anchor" href="#查看存储引擎命令" aria-hidden="true">#</a> 查看存储引擎命令</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 查看支持的存储引擎
SHOW ENGINES;

# 查看默认的存储引擎
SHOW VARIABLES LIKE &#39;storage_engine&#39;;

# 查看某表所使用的存储引擎
SHOW CREATE TABLE \`table_name\`;

# 查看某数据库中的某表所使用的存储引擎
SHOW TABLE STATUS LIKE &#39;table_name&#39;;
SHOW TABLE STATUS FROM \`database_name\` WHERE \`name\` = &quot;table_name&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置存储引擎命令" tabindex="-1"><a class="header-anchor" href="#设置存储引擎命令" aria-hidden="true">#</a> 设置存储引擎命令</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 建表时指定存储引擎，如果不显示指定，默认是 INNODB
CREATE TABLE t1 (i INT) ENGINE = INNODB;
CREATE TABLE t2 (i INT) ENGINE = CSV;
CREATE TABLE t3 (i INT) ENGINE = MEMORY;

# 修改存储引擎
ALTER TABLE t ENGINE = InnoDB;

# 修改默认存储引擎，也可以在配置文件 my.cnf 中修改默认引擎
SET default_storage_engine=NDBCLUSTER;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，每当 <code>CREATE TABLE</code> 或 <code>ALTER TABLE</code> 不能使用默认存储引擎时，都会生成一个警告。为了防止在所需的引擎不可用时出现令人困惑的意外行为，可以启用 <code>NO_ENGINE_SUBSTITUTION SQL</code> 模式。如果所需的引擎不可用，则此设置将产生错误而不是警告，并且不会创建或更改表</p><h2 id="mysql-存储引擎简介" tabindex="-1"><a class="header-anchor" href="#mysql-存储引擎简介" aria-hidden="true">#</a> Mysql 存储引擎简介</h2><h3 id="mysql-内置的存储引擎" tabindex="-1"><a class="header-anchor" href="#mysql-内置的存储引擎" aria-hidden="true">#</a> Mysql 内置的存储引擎</h3><ul><li><strong>InnoDB</strong> - Mysql 的默认事务型存储引擎，并且提供了行级锁和外键的约束。性能不错且支持自动崩溃恢复。</li><li><strong>MyISAM</strong> - Mysql 5.1 版本前的默认存储引擎。特性丰富但不支持事务，也不支持行级锁和外键，也没有崩溃恢复功能。</li><li><strong>CSV</strong> - 可以将 CSV 文件作为 Mysql 的表来处理，但这种表不支持索引。</li><li><strong>Memory</strong> - 适合快速访问数据，且数据不会被修改，重启丢失也没有关系。</li><li><strong>NDB</strong> - 用于 Mysql 集群场景。</li></ul><h3 id="如何选择合适的存储引擎" tabindex="-1"><a class="header-anchor" href="#如何选择合适的存储引擎" aria-hidden="true">#</a> 如何选择合适的存储引擎</h3><p>大多数情况下，InnoDB 都是正确的选择，除非需要用到 InnoDB 不具备的特性。</p><p>如果应用需要选择 InnoDB 以外的存储引擎，可以考虑以下因素：</p><ul><li>事务：如果需要支持事务，InnoDB 是首选。如果不需要支持事务，且主要是 SELECT 和 INSERT 操作，MyISAM 是不错的选择。所以，如果 Mysql 部署方式为主备模式，并进行读写分离。那么可以这么做：主节点只支持写操作，默认引擎为 InnoDB；备节点只支持读操作，默认引擎为 MyISAM。</li><li>并发：MyISAM 只支持表级锁，而 InnoDB 还支持行级锁。所以，InnoDB 并发性能更高。</li><li>外键：InnoDB 支持外键。</li><li>备份：InnoDB 支持在线热备份。</li><li>崩溃恢复：MyISAM 崩溃后发生损坏的概率比 InnoDB 高很多，而且恢复的速度也更慢。</li><li>其它特性：MyISAM 支持压缩表和空间数据索引。</li></ul><h2 id="myisam" tabindex="-1"><a class="header-anchor" href="#myisam" aria-hidden="true">#</a> MyISAM</h2><p>MyISAM 设计简单，数据以紧密格式存储。对于只读数据，或者表比较小、可以容忍修复操作，则依然可以使用 MyISAM。</p><p>MyISAM 引擎使用 B+Tree 作为索引结构，<strong>叶节点的 data 域存放的是数据记录的地址</strong>。</p><p>MyISAM 提供了大量的特性，包括：全文索引、压缩表、空间函数等。但是，MyISAM 不支持事务和行级锁。并且 MyISAM 不支持崩溃后的安全恢复。</p><p>MyISAM 物理文件结构为：</p><ul><li><code>.frm</code>文件：与表相关的元数据信息都存放在frm文件，包括表结构的定义信息等。</li><li><code>.MYD</code> (<code>MYData</code>) 文件：MyISAM 存储引擎专用，用于存储MyISAM 表的数据。</li><li><code>.MYI</code> (<code>MYIndex</code>)文件：MyISAM 存储引擎专用，用于存储MyISAM 表的索引相关信息。</li></ul><h2 id="innodb" tabindex="-1"><a class="header-anchor" href="#innodb" aria-hidden="true">#</a> InnoDB</h2><p>InnoDB 是 MySQL 默认的事务型存储引擎，只有在需要 InnoDB 不支持的特性时，才考虑使用其它存储引擎。</p><p>然 InnoDB 也使用 B+Tree 作为索引结构，但具体实现方式却与 MyISAM 截然不同。MyISAM 索引文件和数据文件是分离的，索引文件仅保存数据记录的地址。而<strong>在 InnoDB 中，表数据文件本身就是按 B+Tree 组织的一个索引结构</strong>，这棵树的叶节点 data 域保存了完整的数据记录。这个<strong>索引的 key 是数据表的主键</strong>，因此<strong>InnoDB 表数据文件本身就是主索引</strong>。</p><p>InnoDB 采用 MVCC 来支持高并发，并且实现了四个标准的隔离级别。其默认级别是可重复读（REPEATABLE READ），并且通过间隙锁（next-key locking）防止幻读。</p><p>InnoDB 是基于聚簇索引建立的，与其他存储引擎有很大不同。在索引中保存了数据，从而避免直接读取磁盘，因此对查询性能有很大的提升。</p><p>内部做了很多优化，包括从磁盘读取数据时采用的可预测性读、能够加快读操作并且自动创建的自适应哈希索引、能够加速插入操作的插入缓冲区等。</p><p>支持真正的在线热备份。其它存储引擎不支持在线热备份，要获取一致性视图需要停止对所有表的写入，而在读写混合场景中，停止写入可能也意味着停止读取。</p><p>InnoDB 物理文件结构为：</p><ul><li><p><code>.frm</code> 文件：与表相关的元数据信息都存放在frm文件，包括表结构的定义信息等。</p></li><li><p><code>.ibd</code> 文件或 <code>.ibdata</code> 文件： 这两种文件都是存放 InnoDB 数据的文件，之所以有两种文件形式存放 InnoDB 的数据，是因为 InnoDB 的数据存储方式能够通过配置来决定是使用<strong>共享表空间</strong>存放存储数据，还是用<strong>独享表空间</strong>存放存储数据。</p><p>独享表空间存储方式使用<code>.ibd</code>文件，并且每个表一个<code>.ibd</code>文件 共享表空间存储方式使用<code>.ibdata</code>文件，所有表共同使用一个<code>.ibdata</code>文件（或多个，可自己配置）</p></li></ul><h2 id="innodb-vs-myisam" tabindex="-1"><a class="header-anchor" href="#innodb-vs-myisam" aria-hidden="true">#</a> InnoDB vs. MyISAM</h2><p>InnoDB 和 MyISAM 的对比：</p><table><thead><tr><th>对比项</th><th>MyISAM</th><th>InnoDB</th></tr></thead><tbody><tr><td>主外键</td><td>不支持</td><td>支持</td></tr><tr><td>事务</td><td>不支持</td><td>支持</td></tr><tr><td>锁</td><td>支持表级锁</td><td>支持表级锁、行级锁</td></tr><tr><td>索引</td><td>采用非聚簇索引</td><td>主键采用聚簇索引，以提高 IO 效率</td></tr><tr><td>表空间</td><td>小</td><td>大</td></tr><tr><td>关注点</td><td>性能</td><td>事务</td></tr><tr><td>计数器</td><td>维护了计数器，<code>SELECT COUNT(*)</code> 效率为 <code>O(1)</code></td><td>没有维护计数器，需要全表扫描</td></tr></tbody></table><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,36),h={href:"https://book.douban.com/subject/23008813/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://time.geekbang.org/column/intro/139",target:"_blank",rel:"noopener noreferrer"};function m(I,y){const n=t("ExternalLinkIcon");return r(),l("div",null,[c,e("ul",null,[e("li",null,[e("a",h,[d("《高性能 MySQL》"),i(n)])]),e("li",null,[e("a",M,[d("MySQL 实战 45 讲"),i(n)])])])])}const v=a(o,[["render",m],["__file","02.Mysql存储引擎.html.vue"]]);export{v as default};
