import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as p,a,b as n,d as e,e as t}from"./app-9f0b185d.js";const r={},c=t(`<h1 id="《sql-必知必会》笔记" tabindex="-1"><a class="header-anchor" href="#《sql-必知必会》笔记" aria-hidden="true">#</a> 《SQL 必知必会》笔记</h1><h2 id="sql-语法基础" tabindex="-1"><a class="header-anchor" href="#sql-语法基础" aria-hidden="true">#</a> SQL 语法基础</h2><h3 id="sql-语言划分" tabindex="-1"><a class="header-anchor" href="#sql-语言划分" aria-hidden="true">#</a> SQL 语言划分</h3><p>SQL 语言按照功能划分成以下的 4 个部分：</p><ul><li><strong>DDL</strong>，英文叫做 Data Definition Language，也就是数据定义语言，它用来定义我们的数据库对象，包括数据库、数据表和列。通过使用 DDL，我们可以创建，删除和修改数据库和表结构。</li><li><strong>DML</strong>，英文叫做 Data Manipulation Language，数据操作语言，我们用它操作和数据库相关的记录，比如增加、删除、修改数据表中的记录。</li><li><strong>DCL</strong>，英文叫做 Data Control Language，数据控制语言，我们用它来定义访问权限和安全级别。</li><li><strong>DQL</strong>，英文叫做 Data Query Language，数据查询语言，我们用它查询想要的记录，它是 SQL 语言的重中之重。在实际的业务中，我们绝大多数情况下都是在和查询打交道，因此学会编写正确且高效的查询语句，是学习的重点。</li></ul><h3 id="db、dbs-和-dbms-的区别" tabindex="-1"><a class="header-anchor" href="#db、dbs-和-dbms-的区别" aria-hidden="true">#</a> DB、DBS 和 DBMS 的区别</h3><p>DB、DBS 和 DBMS 的区别：</p><ul><li>DBMS 的英文全称是 DataBase Management System，数据库管理系统，实际上它可以对多个数据库进行管理，所以你可以理解为 DBMS = 多个数据库（DB） + 管理程序。</li><li>DB 的英文是 DataBase，也就是数据库。数据库是存储数据的集合，你可以把它理解为多个数据表。</li><li>DBS 的英文是 DataBase System，数据库系统。它是更大的概念，包括了数据库、数据库管理系统以及数据库管理人员 DBA。</li></ul><p>NoSql 不同时期的释义</p><ul><li>1970：NoSQL = We have no SQL</li><li>1980：NoSQL = Know SQL</li><li>2000：NoSQL = No SQL!</li><li>2005：NoSQL = Not only SQL</li><li>2013：NoSQL = No, SQL!</li></ul><h3 id="oracle-中的-sql-是如何执行的" tabindex="-1"><a class="header-anchor" href="#oracle-中的-sql-是如何执行的" aria-hidden="true">#</a> Oracle 中的 SQL 是如何执行的</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220716105947.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li><strong>语法检查</strong>：检查 SQL 拼写是否正确，如果不正确，Oracle 会报语法错误。</li><li><strong>语义检查</strong>：检查 SQL 中的访问对象是否存在。比如我们在写 SELECT 语句的时候，列名写错了，系统就会提示错误。语法检查和语义检查的作用是保证 SQL 语句没有错误。</li><li><strong>权限检查</strong>：看用户是否具备访问该数据的权限。</li><li><strong>共享池检查</strong>：共享池（Shared Pool）是一块内存池，最主要的作用是缓存 SQL 语句和该语句的执行计划。Oracle 通过检查共享池是否存在 SQL 语句的执行计划，来判断进行软解析，还是硬解析。那软解析和硬解析又该怎么理解呢？ <ul><li>在共享池中，Oracle 首先对 SQL 语句进行 Hash 运算，然后根据 Hash 值在库缓存（Library Cache）中查找，如果存在 SQL 语句的执行计划，就直接拿来执行，直接进入“执行器”的环节，这就是<strong>软解析</strong>。</li><li>如果没有找到 SQL 语句和执行计划，Oracle 就需要创建解析树进行解析，生成执行计划，进入“优化器”这个步骤，这就是<strong>硬解析</strong>。</li></ul></li><li><strong>优化器</strong>：优化器中就是要进行硬解析，也就是决定怎么做，比如创建解析树，生成执行计划。</li><li><strong>执行器</strong>：当有了解析树和执行计划之后，就知道了 SQL 该怎么被执行，这样就可以在执行器中执行语句了。</li></ol><p>共享池是 Oracle 中的术语，包括了库缓存，数据字典缓冲区等。它主要缓存 SQL 语句和执行计划。</p><p>而数据字典缓冲区存储的是 Oracle 中的对象定义，比如表、视图、索引等对象。当对 SQL 语句进行解析的时候，如果需要相关的数据，会从数据字典缓冲区中提取。</p><h3 id="mysql-中的-sql-是如何执行的" tabindex="-1"><a class="header-anchor" href="#mysql-中的-sql-是如何执行的" aria-hidden="true">#</a> MySQL 中的 SQL 是如何执行的</h3><p>MySQL 是典型的 C/S 架构，即 Client/Server 架构，服务器端程序使用的 mysqld。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220716110905.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Mysql 可分为三层：</p><ol><li><strong>连接层</strong>：客户端和服务器端建立连接，客户端发送 SQL 至服务器端；</li><li><strong>SQL 层</strong>：对 SQL 语句进行查询处理；</li><li><strong>存储引擎层</strong>：与数据库文件打交道，负责数据的存储和读取。</li></ol><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220716111103.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>SQL 层的结构</p><ol><li><strong>查询缓存</strong>：Server 如果在查询缓存中发现了这条 SQL 语句，就会直接将结果返回给客户端；如果没有，就进入到解析器阶段。需要说明的是，因为查询缓存往往效率不高，所以在 MySQL8.0 之后就抛弃了这个功能。</li><li><strong>解析器</strong>：在解析器中对 SQL 语句进行语法分析、语义分析。</li><li><strong>优化器</strong>：在优化器中会确定 SQL 语句的执行路径，比如是根据全表检索，还是根据索引来检索等。</li><li><strong>执行器</strong>：在执行之前需要判断该用户是否具备权限，如果具备权限就执行 SQL 查询并返回结果。在 MySQL8.0 以下的版本，如果设置了查询缓存，这时会将查询结果进行缓存。</li></ol><p>与 Oracle 不同的是，MySQL 的存储引擎采用了插件的形式，每个存储引擎都面向一种特定的数据库应用环境。同时开源的 MySQL 还允许开发人员设置自己的存储引擎，下面是一些常见的存储引擎：</p><ol><li>InnoDB 存储引擎：它是 MySQL 5.5 版本之后默认的存储引擎，最大的特点是支持事务、行级锁定、外键约束等。</li><li>MyISAM 存储引擎：在 MySQL 5.5 版本之前是默认的存储引擎，不支持事务，也不支持外键，最大的特点是速度快，占用资源少。</li><li>Memory 存储引擎：使用系统内存作为存储介质，以便得到更快的响应速度。不过如果 mysqld 进程崩溃，则会导致所有的数据丢失，因此我们只有当数据是临时的情况下才使用 Memory 存储引擎。</li><li>NDB 存储引擎：也叫做 NDB Cluster 存储引擎，主要用于 MySQL Cluster 分布式集群环境，类似于 Oracle 的 RAC 集群。</li><li>Archive 存储引擎：它有很好的压缩机制，用于文件归档，在请求写入时会进行压缩，所以也经常用来做仓库。</li></ol><h3 id="检索数据" tabindex="-1"><a class="header-anchor" href="#检索数据" aria-hidden="true">#</a> 检索数据</h3><p>SELECT 的作用是从一个表或多个表中检索出想要的数据行。</p><blockquote><ul><li><code>SELECT</code> 语句用于从数据库中查询数据。</li><li><code>DISTINCT</code> 用于返回唯一不同的值。它作用于所有列，也就是说所有列的值都相同才算相同。</li><li><code>LIMIT</code> 限制返回的行数。可以有两个参数，第一个参数为起始行，从 0 开始；第二个参数为返回的总行数。 <ul><li><code>ASC</code> ：升序（默认）</li><li><code>DESC</code> ：降序</li></ul></li></ul></blockquote><p>查询单列</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> name <span class="token keyword">FROM</span> world<span class="token punctuation">.</span>country<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询多列</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> name<span class="token punctuation">,</span> continent<span class="token punctuation">,</span> region <span class="token keyword">FROM</span> world<span class="token punctuation">.</span>country<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询所有列</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> world<span class="token punctuation">.</span>country<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询不同的值</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">distinct</span><span class="token punctuation">(</span>continent<span class="token punctuation">)</span> <span class="token keyword">FROM</span> world<span class="token punctuation">.</span>country<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>限制查询结果</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 返回前 5 行</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> world<span class="token punctuation">.</span>country <span class="token keyword">LIMIT</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> world<span class="token punctuation">.</span>country <span class="token keyword">LIMIT</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token comment">-- 返回第 3 ~ 5 行</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> world<span class="token punctuation">.</span>country <span class="token keyword">LIMIT</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sql-性能优化" tabindex="-1"><a class="header-anchor" href="#sql-性能优化" aria-hidden="true">#</a> SQL 性能优化</h2><h3 id="性能优化维度" tabindex="-1"><a class="header-anchor" href="#性能优化维度" aria-hidden="true">#</a> 性能优化维度</h3><p>我个人理解的性能优化维度与文章有所不同：</p><ul><li>选择适合的数据库</li><li>配置优化</li><li>硬件优化</li><li>优化表设计</li><li>优化查询</li><li>使用缓存</li><li>读写分离+分库分表</li></ul><h3 id="范式设计" tabindex="-1"><a class="header-anchor" href="#范式设计" aria-hidden="true">#</a> 范式设计</h3><p>范式定义：</p><ul><li><strong>1NF</strong>：指的是数据库表中的任何属性都是原子性的，不可再分。</li><li><strong>2NF</strong>：指的数据表里的非主属性都要和这个数据表的候选键有完全依赖关系。</li><li><strong>3NF</strong>：在满足 2NF 的同时，对任何非主属性都不传递依赖于候选键。</li><li><strong>BCNF</strong>：在 3NF 的基础上消除了主属性对候选键的部分依赖或者传递依赖关系。</li></ul><p><strong>范式化的目标是尽力减少冗余列，节省空间</strong>。</p><p><strong>反范式化的目标是适当增加冗余列，以避免关联查询</strong>。<br> 范式化优点</p><ul><li>更节省空间</li><li>更新操作更快</li><li>更少需要 <code>DISTINCT</code> 或 <code>GROUP BY</code> 语句</li></ul><p>范式化缺点</p><ul><li>增加了关联查询，而关联查询代价很高</li></ul><h3 id="索引的适用场景" tabindex="-1"><a class="header-anchor" href="#索引的适用场景" aria-hidden="true">#</a> 索引的适用场景</h3><p>我认为，文章对于索引的适用场景讲解的不好。应该先讲清楚索引的优点和缺点，再结合其特性，来阐述适用场景。</p><h4 id="索引的优缺点" tabindex="-1"><a class="header-anchor" href="#索引的优缺点" aria-hidden="true">#</a> 索引的优缺点</h4><p><strong>索引的优点</strong></p><ul><li>大大减少了服务器需要扫描的数据量</li><li>可以帮助服务器避免排序和临时表</li><li>可以将随机 I/O 变为顺序 I/O</li></ul><p><strong>索引的缺点</strong></p><ul><li>创建和维护索引要耗费时间，这会随着数据量的增加而增加。</li><li>占用额外物理空间</li><li>写操作时很可能需要更新索引，导致数据库的写操作性能降低</li></ul><h4 id="索引的适用场景-1" tabindex="-1"><a class="header-anchor" href="#索引的适用场景-1" aria-hidden="true">#</a> 索引的适用场景</h4><p><strong>适用场景</strong></p><ul><li>频繁读操作（SELECT）</li><li>表的数据量比较大</li><li>列名经常出现在 WHERE 或连接（JOIN）条件中</li></ul><p><strong>不适用场景</strong></p><ul><li>频繁写操作（INSERT/UPDATE/DELETE）</li><li>列名不经常出现在 WHERE 或连接（JOIN）条件中</li><li>索引会经常无法命中，没有意义</li><li>非常小的表（比如不到 1000 行）：简单的全表扫描更高效</li><li>特大型的表：索引的代价很高昂，可以用分区或 Nosql</li></ul><h3 id="索引使用什么数据结构" tabindex="-1"><a class="header-anchor" href="#索引使用什么数据结构" aria-hidden="true">#</a> 索引使用什么数据结构</h3><p>索引常见的数据结构</p><p>（1）哈希</p><p>只能用于等值查询。</p><p>Mysql 中，只有 Memory 存储引擎显示支持哈希索引。</p><p>哈希结构的缺点</p><ul><li>哈希索引数据不是按照索引值顺序存储的——无法用于排序</li><li>哈希索引使用索引列的全部内容来进行哈希计算的——不支持联合索引的最左侧原则（即联合索引的部分索引）</li><li>只支持等值比较查询 <ul><li>不支持范围查询</li><li>不支持模糊查询</li></ul></li><li>可能出现哈希冲突 <ul><li>出现哈希冲突时，必须遍历链表中所有的行指针，逐行比较，直到找到符合条件的行</li><li>如果哈希冲突多的话，维护索引的代价会很高</li></ul></li></ul><p>（2）B 树</p><p>非叶子节点包含索引和数据。</p><p>（3）空间数据索引（R 树）</p><p>（4）全文索引</p><h3 id="从数据页的角度理解-b-树查询" tabindex="-1"><a class="header-anchor" href="#从数据页的角度理解-b-树查询" aria-hidden="true">#</a> 从数据页的角度理解 B+树查询</h3><p><strong>在数据库中，不论读一行，还是读多行，都是将这些行所在的页进行加载。也就是说，数据库管理存储空间的基本单位是页（Page）。</strong></p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220720055715.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>一个表空间包括了一个或多个段，一个段包括了一个或多个区，一个区包括了多个页，而一个页中可以有多行记录：</p><p>区（Extent）是比页大一级的存储结构，在 InnoDB 存储引擎中，一个区会分配 64 个连续的页。因为 InnoDB 中的页大小默认是 16KB，所以一个区的大小是 64*16KB=1MB。</p><p>段（Segment）由一个或多个区组成，区在文件系统是一个连续分配的空间（在 InnoDB 中是连续的 64 个页），不过在段中不要求区与区之间是相邻的。段是数据库中的分配单位，不同类型的数据库对象以不同的段形式存在。当我们创建数据表、索引的时候，就会相应创建对应的段，比如创建一张表时会创建一个表段，创建一个索引时会创建一个索引段。</p><p>表空间（Tablespace）是一个逻辑容器，表空间存储的对象是段，在一个表空间中可以有一个或多个段，但是一个段只能属于一个表空间。数据库由一个或多个表空间组成，表空间从管理上可以划分为系统表空间、用户表空间、撤销表空间、临时表空间等。</p><h3 id="从磁盘-i-o-的角度理解-sql-查询的成本" tabindex="-1"><a class="header-anchor" href="#从磁盘-i-o-的角度理解-sql-查询的成本" aria-hidden="true">#</a> 从磁盘 I/O 的角度理解 SQL 查询的成本</h3><ol><li>位置决定效率。如果页就在数据库缓冲池中，那么效率是最高的，否则还需要从内存或者磁盘中进行读取，当然针对单个页的读取来说，如果页存在于内存中，会比在磁盘中读取效率高很多。</li><li>批量决定效率。如果我们从磁盘中对单一页进行随机读，那么效率是很低的（差不多 10ms），而采用顺序读取的方式，批量对页进行读取，平均一页的读取效率就会提升很多，甚至要快于单个页面在内存中的随机读取。</li></ol><h3 id="锁" tabindex="-1"><a class="header-anchor" href="#锁" aria-hidden="true">#</a> 锁</h3><ul><li><strong>行锁</strong>就是按照行的粒度对数据进行锁定。锁定力度小，发生锁冲突概率低，可以实现的并发度高，但是对于锁的开销比较大，加锁会比较慢，容易出现死锁情况。</li><li><strong>页锁</strong>就是在页的粒度上进行锁定，锁定的数据资源比行锁要多，因为一个页中可以有多个行记录。当我们使用页锁的时候，会出现数据浪费的现象，但这样的浪费最多也就是一个页上的数据行。页锁的开销介于表锁和行锁之间，会出现死锁。锁定粒度介于表锁和行锁之间，并发度一般。</li><li><strong>表锁</strong>就是对数据表进行锁定，锁定粒度很大，同时发生锁冲突的概率也会较高，数据访问的并发度低。不过好处在于对锁的使用开销小，加锁会很快。</li></ul><p>不同的数据库和存储引擎支持的锁粒度不同：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220720062633.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220720063540.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="数据库工作流" tabindex="-1"><a class="header-anchor" href="#数据库工作流" aria-hidden="true">#</a> 数据库工作流</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220720093559.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="如何使用性能分析工具定位-sql-执行慢的原因" tabindex="-1"><a class="header-anchor" href="#如何使用性能分析工具定位-sql-执行慢的原因" aria-hidden="true">#</a> 如何使用性能分析工具定位 SQL 执行慢的原因？</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220720093823.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="主从同步" tabindex="-1"><a class="header-anchor" href="#主从同步" aria-hidden="true">#</a> 主从同步</h3><p>Mysql 支持两种复制：基于行的复制和基于语句的复制。</p><p>这两种方式都是在主库上记录二进制日志，然后在从库重放日志的方式来实现异步的数据复制。这意味着：复制过程存在时延，这段时间内，主从数据可能不一致。</p><p>主要涉及三个线程：binlog 线程、I/O 线程和 SQL 线程。</p><ul><li><strong>binlog 线程</strong> ：负责将主服务器上的数据更改写入二进制文件（binlog）中。</li><li><strong>I/O 线程</strong> ：负责从主服务器上读取二进制日志文件，并写入从服务器的中继日志中。</li><li><strong>SQL 线程</strong> ：负责读取中继日志并重放其中的 SQL 语句。</li></ul><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/database/mysql/master-slave.png"></div><p>如何解决主从同步时的数据一致性问题？</p><p><strong>异步复制</strong></p><p>异步模式就是客户端提交 COMMIT 之后不需要等从库返回任何结果，而是直接将结果返回给客户端，这样做的好处是不会影响主库写的效率，但可能会存在主库宕机，而 Binlog 还没有同步到从库的情况，也就是此时的主库和从库数据不一致。这时候从从库中选择一个作为新主，那么新主则可能缺少原来主服务器中已提交的事务。所以，这种复制模式下的数据一致性是最弱的。</p><p><strong>半异步复制</strong></p><p>原理是在客户端提交 COMMIT 之后不直接将结果返回给客户端，而是等待至少有一个从库接收到了 Binlog，并且写入到中继日志中，再返回给客户端。这样做的好处就是提高了数据的一致性，当然相比于异步复制来说，至少多增加了一个网络连接的延迟，降低了主库写的效率。——其实是一种两阶段提交的思想。</p><p><strong>组复制</strong></p><p>这种复制技术是基于 Paxos 的状态机复制。</p><p>将多个节点共同组成一个复制组，在执行读写（RW）事务的时候，需要通过一致性协议层（Consensus 层）的同意，也就是读写事务想要进行提交，必须要经过组里“大多数人”（对应 Node 节点）的同意，大多数指的是同意的节点数量需要大于（N/2+1），这样才可以进行提交，而不是原发起方一个说了算。而针对只读（RO）事务则不需要经过组内同意，直接 COMMIT 即可。</p><p>在一个复制组内有多个节点组成，它们各自维护了自己的数据副本，并且在一致性协议层实现了原子消息和全局有序消息，从而保证组内数据的一致性。</p><h3 id="sql-注入" tabindex="-1"><a class="header-anchor" href="#sql-注入" aria-hidden="true">#</a> SQL 注入</h3><h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><p><strong><code>SQL 注入攻击（SQL injection）</code></strong>，是发生于应用程序之数据层的安全漏洞。简而言之，是在输入的字符串之中注入 SQL 指令，在设计不良的程序当中忽略了检查，那么这些注入进去的指令就会被数据库服务器误认为是正常的 SQL 指令而运行，因此遭到破坏或是入侵。</p><p>攻击示例：</p><p>考虑以下简单的登录表单：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/login<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>POST<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Username: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Password: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>登陆<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们的处理里面的 SQL 可能是这样的：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>username:<span class="token operator">=</span>r<span class="token punctuation">.</span>Form<span class="token punctuation">.</span>Get<span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span>
password:<span class="token operator">=</span>r<span class="token punctuation">.</span>Form<span class="token punctuation">.</span>Get<span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">sql</span>:<span class="token operator">=</span><span class="token string">&quot;SELECT * FROM user WHERE username=&#39;&quot;</span><span class="token operator">+</span>username<span class="token operator">+</span><span class="token string">&quot;&#39; AND password=&#39;&quot;</span><span class="token operator">+</span>password<span class="token operator">+</span><span class="token string">&quot;&#39;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果用户的输入的用户名如下，密码任意</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>myuser<span class="token string">&#39; or &#39;</span>foo<span class="token string">&#39; = &#39;</span>foo&#39; <span class="token comment">--</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那么我们的 SQL 变成了如下所示：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">user</span> <span class="token keyword">WHERE</span> username<span class="token operator">=</span><span class="token string">&#39;myuser&#39;</span> <span class="token operator">or</span> <span class="token string">&#39;foo&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span> <span class="token comment">--&#39;&#39; AND password=&#39;xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 SQL 里面 <code>--</code> 是注释标记，所以查询语句会在此中断。这就让攻击者在不知道任何合法用户名和密码的情况下成功登录了。</p><p>对于 MSSQL 还有更加危险的一种 SQL 注入，就是控制系统，下面这个可怕的例子将演示如何在某些版本的 MSSQL 数据库上执行系统命令。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">sql</span>:<span class="token operator">=</span><span class="token string">&quot;SELECT * FROM products WHERE name LIKE &#39;%&quot;</span><span class="token operator">+</span>prod<span class="token operator">+</span><span class="token string">&quot;%&#39;&quot;</span>
Db<span class="token punctuation">.</span><span class="token keyword">Exec</span><span class="token punctuation">(</span><span class="token keyword">sql</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果攻击提交 <code>a%&#39; exec master..xp_cmdshell &#39;net user test testpass /ADD&#39; --</code> 作为变量 prod 的值，那么 sql 将会变成</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">sql</span>:<span class="token operator">=</span><span class="token string">&quot;SELECT * FROM products WHERE name LIKE &#39;%a%&#39; exec master..xp_cmdshell &#39;net user test testpass /ADD&#39;--%&#39;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>MSSQL 服务器会执行这条 SQL 语句，包括它后面那个用于向系统添加新用户的命令。如果这个程序是以 sa 运行而 MSSQLSERVER 服务又有足够的权限的话，攻击者就可以获得一个系统帐号来访问主机了。</p><p>虽然以上的例子是针对某一特定的数据库系统的，但是这并不代表不能对其它数据库系统实施类似的攻击。针对这种安全漏洞，只要使用不同方法，各种数据库都有可能遭殃。</p><h4 id="攻击手段和目的" tabindex="-1"><a class="header-anchor" href="#攻击手段和目的" aria-hidden="true">#</a> 攻击手段和目的</h4><ul><li>数据表中的数据外泄，例如个人机密数据，账户数据，密码等。</li><li>数据结构被黑客探知，得以做进一步攻击（例如 <code>SELECT * FROM sys.tables</code>）。</li><li>数据库服务器被攻击，系统管理员账户被窜改（例如 <code>ALTER LOGIN sa WITH PASSWORD=&#39;xxxxxx&#39;</code>）。</li><li>获取系统较高权限后，有可能得以在网页加入恶意链接、恶意代码以及 XSS 等。</li><li>经由数据库服务器提供的操作系统支持，让黑客得以修改或控制操作系统（例如 xp_cmdshell &quot;net stop iisadmin&quot;可停止服务器的 IIS 服务）。</li><li>破坏硬盘数据，瘫痪全系统（例如 xp_cmdshell &quot;FORMAT C:&quot;）。</li></ul><h4 id="应对手段" tabindex="-1"><a class="header-anchor" href="#应对手段" aria-hidden="true">#</a> 应对手段</h4><ul><li><strong>使用参数化查询</strong> - 建议使用数据库提供的参数化查询接口，参数化的语句使用参数而不是将用户输入变量嵌入到 SQL 语句中，即不要直接拼接 SQL 语句。例如使用 database/sql 里面的查询函数 <code>Prepare</code> 和 <code>Query</code> ，或者 <code>Exec(query string, args ...interface{})</code>。</li><li><strong>单引号转换</strong> - 在组合 SQL 字符串时，先针对所传入的参数进行字符替换（将单引号字符替换为连续 2 个单引号字符）。</li></ul>`,129),u=a("p",null,"👉 参考阅读：",-1),d={href:"https://zh.wikipedia.org/wiki/SQL%E8%B3%87%E6%96%99%E9%9A%B1%E7%A2%BC%E6%94%BB%E6%93%8A",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/astaxie/build-web-application-with-golang/blob/master/zh/09.4.md",target:"_blank",rel:"noopener noreferrer"},h={href:"http://blog.jobbole.com/83092/",target:"_blank",rel:"noopener noreferrer"},k=t('<h2 id="认识-dbms" tabindex="-1"><a class="header-anchor" href="#认识-dbms" aria-hidden="true">#</a> 认识 DBMS</h2><p>内容对我意义不大，略</p><h2 id="sql-项目实战" tabindex="-1"><a class="header-anchor" href="#sql-项目实战" aria-hidden="true">#</a> SQL 项目实战</h2><h3 id="数据清洗" tabindex="-1"><a class="header-anchor" href="#数据清洗" aria-hidden="true">#</a> 数据清洗</h3><p>SQL 可以帮我们进行数据处理，总的来说可以分成 OLTP 和 OLAP 两种方式。</p><ul><li><strong>OLTP</strong>：称之为联机事务处理。对数据进行增删改查，SQL 查询优化，事务处理等就属于 OLTP 的范畴。它对实时性要求高，需要将用户的数据有效地存储到数据库中，同时有时候针对互联网应用的需求，我们还需要设置数据库的主从架构保证数据库的高并发和高可用性。</li><li><strong>OLAP</strong>：称之为联机分析处理。它是对已经存储在数据库中的数据进行分析，帮我们得出报表，指导业务。它对数据的实时性要求不高，但数据量往往很大，存储在数据库（数据仓库）中的数据可能还存在数据质量的问题，比如数据重复、数据中有缺失值，或者单位不统一等，因此在进行数据分析之前，首要任务就是对收集的数据进行清洗，从而保证数据质量。</li></ul><h3 id="数据集成" tabindex="-1"><a class="header-anchor" href="#数据集成" aria-hidden="true">#</a> 数据集成</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220720142031.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>ETL 是英文 Extract、Transform 和 Load 的缩写，也就是将数据从不同的数据源进行抽取，然后通过交互转换，最终加载到目的地的过程。</p><ul><li>在 Extract 数据抽取这个过程中，需要做大量的工作，我们需要了解企业分散在不同地方的数据源都采用了哪种 DBMS，还需要了解这些数据源存放的数据结构等，是结构化数据，还是非结构化数据。在抽取中，我们也可以采用全量抽取和增量抽取两种方式。相比于全量抽取，增量抽取使用得更为广泛，它可以帮我们动态捕捉数据源的数据变化，并进行同步更新。</li><li>在 Transform 数据转换的过程中，我们可以使用一些数据转换的组件，比如说数据字段的映射、数据清洗、数据验证和数据过滤等，这些模块可以像是在流水线上进行作业一样，帮我们完成各种数据转换的需求，从而将不同质量，不同规范的数据进行统一。</li><li>在 Load 数据加载的过程中，我们可以将转换之后的数据加载到目的地，如果目标是 RDBMS，我们可以直接通过 SQL 进行加载，或者使用批量加载的方式进行加载。</li></ul><h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>',11),m={href:"https://time.geekbang.org/column/intro/192",target:"_blank",rel:"noopener noreferrer"};function b(S,L){const s=o("ExternalLinkIcon");return i(),p("div",null,[c,a("blockquote",null,[u,a("ul",null,[a("li",null,[a("a",d,[n("Wiki 词条 - SQL 注入攻击"),e(s)])]),a("li",null,[a("a",g,[n("避免 SQL 注入"),e(s)])]),a("li",null,[a("a",h,[n("实例讲解 SQL 注入攻击"),e(s)])])])]),k,a("ul",null,[a("li",null,[a("a",m,[n("极客时间 - SQL 必知必会"),e(s)])])])])}const f=l(r,[["render",b],["__file","02.SQL必知必会.html.vue"]]);export{f as default};
