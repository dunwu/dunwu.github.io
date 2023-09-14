import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as d,c,a,b as e,d as n,w as r,e as p}from"./app-e12ad880.js";const i={},h=a("h1",{id:"mysql-应用指南",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#mysql-应用指南","aria-hidden":"true"},"#"),e(" Mysql 应用指南")],-1),u=a("h2",{id:"sql-执行过程",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#sql-执行过程","aria-hidden":"true"},"#"),e(" SQL 执行过程")],-1),E=a("p",null,"学习 Mysql，最好是先从宏观上了解 Mysql 工作原理。",-1),k=p(`<h2 id="存储引擎" tabindex="-1"><a class="header-anchor" href="#存储引擎" aria-hidden="true">#</a> 存储引擎</h2><p>在文件系统中，Mysql 将每个数据库（也可以成为 schema）保存为数据目录下的一个子目录。创建表示，Mysql 会在数据库子目录下创建一个和表同名的 <code>.frm</code> 文件保存表的定义。因为 Mysql 使用文件系统的目录和文件来保存数据库和表的定义，大小写敏感性和具体平台密切相关。Windows 中大小写不敏感；类 Unix 中大小写敏感。<strong>不同的存储引擎保存数据和索引的方式是不同的，但表的定义则是在 Mysql 服务层统一处理的。</strong></p><h3 id="选择存储引擎" tabindex="-1"><a class="header-anchor" href="#选择存储引擎" aria-hidden="true">#</a> 选择存储引擎</h3><h4 id="mysql-内置的存储引擎" tabindex="-1"><a class="header-anchor" href="#mysql-内置的存储引擎" aria-hidden="true">#</a> Mysql 内置的存储引擎</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> SHOW ENGINES<span class="token punctuation">;</span>
+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+
<span class="token operator">|</span> Engine             <span class="token operator">|</span> Support <span class="token operator">|</span> Comment                                                        <span class="token operator">|</span> Transactions <span class="token operator">|</span> XA   <span class="token operator">|</span> Savepoints <span class="token operator">|</span>
+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+
<span class="token operator">|</span> FEDERATED          <span class="token operator">|</span> NO      <span class="token operator">|</span> Federated MySQL storage engine                                 <span class="token operator">|</span> NULL         <span class="token operator">|</span> NULL <span class="token operator">|</span> NULL       <span class="token operator">|</span>
<span class="token operator">|</span> MEMORY             <span class="token operator">|</span> YES     <span class="token operator">|</span> Hash based, stored <span class="token keyword">in</span> memory, useful <span class="token keyword">for</span> temporary tables      <span class="token operator">|</span> NO           <span class="token operator">|</span> NO   <span class="token operator">|</span> NO         <span class="token operator">|</span>
<span class="token operator">|</span> InnoDB             <span class="token operator">|</span> DEFAULT <span class="token operator">|</span> Supports transactions, row-level locking, and foreign keys     <span class="token operator">|</span> YES          <span class="token operator">|</span> YES  <span class="token operator">|</span> YES        <span class="token operator">|</span>
<span class="token operator">|</span> PERFORMANCE_SCHEMA <span class="token operator">|</span> YES     <span class="token operator">|</span> Performance Schema                                             <span class="token operator">|</span> NO           <span class="token operator">|</span> NO   <span class="token operator">|</span> NO         <span class="token operator">|</span>
<span class="token operator">|</span> MyISAM             <span class="token operator">|</span> YES     <span class="token operator">|</span> MyISAM storage engine                                          <span class="token operator">|</span> NO           <span class="token operator">|</span> NO   <span class="token operator">|</span> NO         <span class="token operator">|</span>
<span class="token operator">|</span> MRG_MYISAM         <span class="token operator">|</span> YES     <span class="token operator">|</span> Collection of identical MyISAM tables                          <span class="token operator">|</span> NO           <span class="token operator">|</span> NO   <span class="token operator">|</span> NO         <span class="token operator">|</span>
<span class="token operator">|</span> BLACKHOLE          <span class="token operator">|</span> YES     <span class="token operator">|</span> /dev/null storage engine <span class="token punctuation">(</span>anything you <span class="token function">write</span> to it disappears<span class="token punctuation">)</span> <span class="token operator">|</span> NO           <span class="token operator">|</span> NO   <span class="token operator">|</span> NO         <span class="token operator">|</span>
<span class="token operator">|</span> CSV                <span class="token operator">|</span> YES     <span class="token operator">|</span> CSV storage engine                                             <span class="token operator">|</span> NO           <span class="token operator">|</span> NO   <span class="token operator">|</span> NO         <span class="token operator">|</span>
<span class="token operator">|</span> ARCHIVE            <span class="token operator">|</span> YES     <span class="token operator">|</span> Archive storage engine                                         <span class="token operator">|</span> NO           <span class="token operator">|</span> NO   <span class="token operator">|</span> NO         <span class="token operator">|</span>
+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+
<span class="token number">9</span> rows <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>InnoDB</strong> - Mysql 的默认事务型存储引擎，并且提供了行级锁和外键的约束。性能不错且支持自动崩溃恢复。</li><li><strong>MyISAM</strong> - Mysql 5.1 版本前的默认存储引擎。特性丰富但不支持事务，也不支持行级锁和外键，也没有崩溃恢复功能。</li><li><strong>CSV</strong> - 可以将 CSV 文件作为 Mysql 的表来处理，但这种表不支持索引。</li><li><strong>Memory</strong> - 适合快速访问数据，且数据不会被修改，重启丢失也没有关系。</li><li><strong>NDB</strong> - 用于 Mysql 集群场景。</li></ul><h4 id="如何选择合适的存储引擎" tabindex="-1"><a class="header-anchor" href="#如何选择合适的存储引擎" aria-hidden="true">#</a> 如何选择合适的存储引擎</h4><p>大多数情况下，InnoDB 都是正确的选择，除非需要用到 InnoDB 不具备的特性。</p><p>如果应用需要选择 InnoDB 以外的存储引擎，可以考虑以下因素：</p><ul><li>事务：如果需要支持事务，InnoDB 是首选。如果不需要支持事务，且主要是 SELECT 和 INSERT 操作，MyISAM 是不错的选择。所以，如果 Mysql 部署方式为主备模式，并进行读写分离。那么可以这么做：主节点只支持写操作，默认引擎为 InnoDB；备节点只支持读操作，默认引擎为 MyISAM。</li><li>并发：MyISAM 只支持表级锁，而 InnoDB 还支持行级锁。所以，InnoDB 并发性能更高。</li><li>外键：InnoDB 支持外键。</li><li>备份：InnoDB 支持在线热备份。</li><li>崩溃恢复：MyISAM 崩溃后发生损坏的概率比 InnoDB 高很多，而且恢复的速度也更慢。</li><li>其它特性：MyISAM 支持压缩表和空间数据索引。</li></ul><h4 id="转换表的存储引擎" tabindex="-1"><a class="header-anchor" href="#转换表的存储引擎" aria-hidden="true">#</a> 转换表的存储引擎</h4><p>下面的语句可以将 mytable 表的引擎修改为 InnoDB</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> mytable <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="myisam" tabindex="-1"><a class="header-anchor" href="#myisam" aria-hidden="true">#</a> MyISAM</h3><p>MyISAM 设计简单，数据以紧密格式存储。对于只读数据，或者表比较小、可以容忍修复操作，则依然可以使用 MyISAM。</p><p>MyISAM 引擎使用 B+Tree 作为索引结构，<strong>叶节点的 data 域存放的是数据记录的地址</strong>。</p><p>MyISAM 提供了大量的特性，包括：全文索引、压缩表、空间函数等。但是，MyISAM 不支持事务和行级锁。并且 MyISAM 不支持崩溃后的安全恢复。</p><h3 id="innodb" tabindex="-1"><a class="header-anchor" href="#innodb" aria-hidden="true">#</a> InnoDB</h3><p>InnoDB 是 MySQL 默认的事务型存储引擎，只有在需要 InnoDB 不支持的特性时，才考虑使用其它存储引擎。</p><p>然 InnoDB 也使用 B+Tree 作为索引结构，但具体实现方式却与 MyISAM 截然不同。MyISAM 索引文件和数据文件是分离的，索引文件仅保存数据记录的地址。而<strong>在 InnoDB 中，表数据文件本身就是按 B+Tree 组织的一个索引结构</strong>，这棵树的叶节点 data 域保存了完整的数据记录。这个<strong>索引的 key 是数据表的主键</strong>，因此<strong>InnoDB 表数据文件本身就是主索引</strong>。</p><p>InnoDB 采用 MVCC 来支持高并发，并且实现了四个标准的隔离级别。其默认级别是可重复读（REPEATABLE READ），并且通过间隙锁（next-key locking）防止幻读。</p><p>InnoDB 是基于聚簇索引建立的，与其他存储引擎有很大不同。在索引中保存了数据，从而避免直接读取磁盘，因此对查询性能有很大的提升。</p><p>内部做了很多优化，包括从磁盘读取数据时采用的可预测性读、能够加快读操作并且自动创建的自适应哈希索引、能够加速插入操作的插入缓冲区等。</p><p>支持真正的在线热备份。其它存储引擎不支持在线热备份，要获取一致性视图需要停止对所有表的写入，而在读写混合场景中，停止写入可能也意味着停止读取。</p><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><h3 id="整型" tabindex="-1"><a class="header-anchor" href="#整型" aria-hidden="true">#</a> 整型</h3><p><code>TINYINT</code>, <code>SMALLINT</code>, <code>MEDIUMINT</code>, <code>INT</code>, <code>BIGINT</code> 分别使用 <code>8</code>, <code>16</code>, <code>24</code>, <code>32</code>, <code>64</code> 位存储空间，一般情况下越小的列越好。</p><p><strong><code>UNSIGNED</code> 表示不允许负值，大致可以使正数的上限提高一倍</strong>。</p><p><code>INT(11)</code> 中的数字只是规定了交互工具显示字符的个数，对于存储和计算来说是没有意义的。</p><h3 id="浮点型" tabindex="-1"><a class="header-anchor" href="#浮点型" aria-hidden="true">#</a> 浮点型</h3><p><code>FLOAT</code> 和 <code>DOUBLE</code> 为浮点类型。</p><p><code>DECIMAL</code> 类型主要用于精确计算，代价较高，应该尽量只在对小数进行精确计算时才使用 <code>DECIMAL</code> ——例如存储财务数据。数据量比较大的时候，可以使用 <code>BIGINT</code> 代替 <code>DECIMAL</code>。</p><p><code>FLOAT</code>、<code>DOUBLE</code> 和 <code>DECIMAL</code> 都可以指定列宽，例如 <code>DECIMAL(18, 9)</code> 表示总共 18 位，取 9 位存储小数部分，剩下 9 位存储整数部分。</p><h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h3><p>主要有 <code>CHAR</code> 和 <code>VARCHAR</code> 两种类型，一种是定长的，一种是变长的。</p><p><strong><code>VARCHAR</code> 这种变长类型能够节省空间，因为只需要存储必要的内容。但是在执行 UPDATE 时可能会使行变得比原来长</strong>。当超出一个页所能容纳的大小时，就要执行额外的操作。MyISAM 会将行拆成不同的片段存储，而 InnoDB 则需要分裂页来使行放进页内。</p><p><code>VARCHAR</code> 会保留字符串末尾的空格，而 <code>CHAR</code> 会删除。</p><h3 id="时间和日期" tabindex="-1"><a class="header-anchor" href="#时间和日期" aria-hidden="true">#</a> 时间和日期</h3><p>MySQL 提供了两种相似的日期时间类型：<code>DATATIME</code> 和 <code>TIMESTAMP</code>。</p><h4 id="datatime" tabindex="-1"><a class="header-anchor" href="#datatime" aria-hidden="true">#</a> DATATIME</h4><p>能够保存从 1001 年到 9999 年的日期和时间，精度为秒，使用 8 字节的存储空间。</p><p>它与时区无关。</p><p>默认情况下，MySQL 以一种可排序的、无歧义的格式显示 DATATIME 值，例如“2008-01-16 22:37:08”，这是 ANSI 标准定义的日期和时间表示方法。</p><h4 id="timestamp" tabindex="-1"><a class="header-anchor" href="#timestamp" aria-hidden="true">#</a> TIMESTAMP</h4><p>和 UNIX 时间戳相同，保存从 1970 年 1 月 1 日午夜（格林威治时间）以来的秒数，使用 4 个字节，只能表示从 1970 年 到 2038 年。</p><p>它和时区有关，也就是说一个时间戳在不同的时区所代表的具体时间是不同的。</p><p>MySQL 提供了 FROM_UNIXTIME() 函数把 UNIX 时间戳转换为日期，并提供了 UNIX_TIMESTAMP() 函数把日期转换为 UNIX 时间戳。</p><p>默认情况下，如果插入时没有指定 TIMESTAMP 列的值，会将这个值设置为当前时间。</p><p>应该尽量使用 TIMESTAMP，因为它比 DATETIME 空间效率更高。</p><h3 id="blob-和-text" tabindex="-1"><a class="header-anchor" href="#blob-和-text" aria-hidden="true">#</a> BLOB 和 TEXT</h3><p><code>BLOB</code> 和 <code>TEXT</code> 都是为了存储大的数据而设计，前者存储二进制数据，后者存储字符串数据。</p><p>不能对 <code>BLOB</code> 和 <code>TEXT</code> 类型的全部内容进行排序、索引。</p><h3 id="枚举类型" tabindex="-1"><a class="header-anchor" href="#枚举类型" aria-hidden="true">#</a> 枚举类型</h3><p>大多数情况下没有使用枚举类型的必要，其中一个缺点是：枚举的字符串列表是固定的，添加和删除字符串（枚举选项）必须使用<code>ALTER TABLE</code>（如果只只是在列表末尾追加元素，不需要重建表）。</p><h3 id="类型的选择" tabindex="-1"><a class="header-anchor" href="#类型的选择" aria-hidden="true">#</a> 类型的选择</h3><ul><li><p>整数类型通常是标识列最好的选择，因为它们很快并且可以使用 <code>AUTO_INCREMENT</code>。</p></li><li><p><code>ENUM</code> 和 <code>SET</code> 类型通常是一个糟糕的选择，应尽量避免。</p></li><li><p>应该尽量避免用字符串类型作为标识列，因为它们很消耗空间，并且通常比数字类型慢。对于 <code>MD5</code>、<code>SHA</code>、<code>UUID</code> 这类随机字符串，由于比较随机，所以可能分布在很大的空间内，导致 <code>INSERT</code> 以及一些 <code>SELECT</code> 语句变得很慢。</p><ul><li>如果存储 UUID ，应该移除 <code>-</code> 符号；更好的做法是，用 <code>UNHEX()</code> 函数转换 UUID 值为 16 字节的数字，并存储在一个 <code>BINARY(16)</code> 的列中，检索时，可以通过 <code>HEX()</code> 函数来格式化为 16 进制格式。</li></ul></li></ul><h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h2>`,57),M=a("h2",{id:"锁",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#锁","aria-hidden":"true"},"#"),e(" 锁")],-1),B=a("h2",{id:"事务",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#事务","aria-hidden":"true"},"#"),e(" 事务")],-1),A=a("h2",{id:"性能优化",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#性能优化","aria-hidden":"true"},"#"),e(" 性能优化")],-1),I=p('<h2 id="复制" tabindex="-1"><a class="header-anchor" href="#复制" aria-hidden="true">#</a> 复制</h2><h3 id="主从复制" tabindex="-1"><a class="header-anchor" href="#主从复制" aria-hidden="true">#</a> 主从复制</h3><p>Mysql 支持两种复制：基于行的复制和基于语句的复制。</p><p>这两种方式都是在主库上记录二进制日志，然后在从库重放日志的方式来实现异步的数据复制。这意味着：复制过程存在时延，这段时间内，主从数据可能不一致。</p><p>主要涉及三个线程：binlog 线程、I/O 线程和 SQL 线程。</p><ul><li><strong>binlog 线程</strong> ：负责将主服务器上的数据更改写入二进制文件（binlog）中。</li><li><strong>I/O 线程</strong> ：负责从主服务器上读取二进制日志文件，并写入从服务器的中继日志中。</li><li><strong>SQL 线程</strong> ：负责读取中继日志并重放其中的 SQL 语句。</li></ul><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/database/mysql/master-slave.png"></div><h3 id="读写分离" tabindex="-1"><a class="header-anchor" href="#读写分离" aria-hidden="true">#</a> 读写分离</h3><p>主服务器用来处理写操作以及实时性要求比较高的读操作，而从服务器用来处理读操作。</p><p>读写分离常用代理方式来实现，代理服务器接收应用层传来的读写请求，然后决定转发到哪个服务器。</p><p>MySQL 读写分离能提高性能的原因在于：</p><ul><li>主从服务器负责各自的读和写，极大程度缓解了锁的争用；</li><li>从服务器可以配置 MyISAM 引擎，提升查询性能以及节约系统开销；</li><li>增加冗余，提高可用性。</li></ul><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/database/mysql/master-slave-proxy.png"></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',14),b={href:"https://book.douban.com/subject/23008813/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.jfox.info/20-tiao-mysql-xing-nen-you-hua-de-zui-jia-jing-yan.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://stackoverflow.com/questions/788829/how-to-create-unique-row-id-in-sharded-databases",target:"_blank",rel:"noopener noreferrer"},g={href:"http://geekswithblogs.net/shaunxu/archive/2012/01/07/sql-azure-federation-ndash-introduction.aspx",target:"_blank",rel:"noopener noreferrer"},S=a("h2",{id:"传送门",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#传送门","aria-hidden":"true"},"#"),e(" 传送门")],-1),_={href:"https://dunwu.github.io/",target:"_blank",rel:"noopener noreferrer"};function f(D,N){const s=t("RouterLink"),o=t("ExternalLinkIcon");return d(),c("div",null,[h,u,E,a("blockquote",null,[a("p",null,[e("参考："),n(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/03.%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93/02.Mysql/02.MySQL%E5%B7%A5%E4%BD%9C%E6%B5%81.html"},{default:r(()=>[e("Mysql 工作流")]),_:1})])]),k,a("blockquote",null,[a("p",null,[e("详见："),n(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/03.%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93/02.Mysql/05.Mysql%E7%B4%A2%E5%BC%95.html"},{default:r(()=>[e("Mysql 索引")]),_:1})])]),M,a("blockquote",null,[a("p",null,[e("详见："),n(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/03.%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93/02.Mysql/04.Mysql%E9%94%81.html"},{default:r(()=>[e("Mysql 锁")]),_:1})])]),B,a("blockquote",null,[a("p",null,[e("详见："),n(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/03.%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93/02.Mysql/03.Mysql%E4%BA%8B%E5%8A%A1.html"},{default:r(()=>[e("Mysql 事务")]),_:1})])]),A,a("blockquote",null,[a("p",null,[e("详见："),n(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/03.%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93/02.Mysql/06.Mysql%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.html"},{default:r(()=>[e("Mysql 性能优化")]),_:1})])]),I,a("ul",null,[a("li",null,[a("a",b,[e("《高性能 MySQL》"),n(o)])]),a("li",null,[a("a",y,[e("20+ 条 MySQL 性能优化的最佳经验"),n(o)])]),a("li",null,[a("a",m,[e("How to create unique row ID in sharded databases?"),n(o)])]),a("li",null,[a("a",g,[e("SQL Azure Federation – Introduction"),n(o)])])]),S,a("p",null,[e("◾ 💧 "),a("a",_,[e("钝悟的 IT 知识图谱"),n(o)]),e(" ◾")])])}const q=l(i,[["render",f],["__file","01.Mysql应用指南.html.vue"]]);export{q as default};
