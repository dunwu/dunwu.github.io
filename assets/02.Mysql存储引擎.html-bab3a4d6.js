import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as p,c as t,a as s,b as n,d as e,e as l}from"./app-4c6ca41d.js";const c={},i=l(`<h1 id="mysql-存储引擎" tabindex="-1"><a class="header-anchor" href="#mysql-存储引擎" aria-hidden="true">#</a> Mysql 存储引擎</h1><p>在文件系统中，Mysql 将每个数据库（也可以成为 schema）保存为数据目录下的一个子目录。创建表示，Mysql 会在数据库子目录下创建一个和表同名的 <code>.frm</code> 文件保存表的定义。因为 Mysql 使用文件系统的目录和文件来保存数据库和表的定义，大小写敏感性和具体平台密切相关。Windows 中大小写不敏感；类 Unix 中大小写敏感。<strong>不同的存储引擎保存数据和索引的方式是不同的，但表的定义则是在 Mysql 服务层统一处理的。</strong></p><h2 id="选择存储引擎" tabindex="-1"><a class="header-anchor" href="#选择存储引擎" aria-hidden="true">#</a> 选择存储引擎</h2><h3 id="mysql-内置的存储引擎" tabindex="-1"><a class="header-anchor" href="#mysql-内置的存储引擎" aria-hidden="true">#</a> Mysql 内置的存储引擎</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> SHOW ENGINES<span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>InnoDB</strong> - Mysql 的默认事务型存储引擎，并且提供了行级锁和外键的约束。性能不错且支持自动崩溃恢复。</li><li><strong>MyISAM</strong> - Mysql 5.1 版本前的默认存储引擎。特性丰富但不支持事务，也不支持行级锁和外键，也没有崩溃恢复功能。</li><li><strong>CSV</strong> - 可以将 CSV 文件作为 Mysql 的表来处理，但这种表不支持索引。</li><li><strong>Memory</strong> - 适合快速访问数据，且数据不会被修改，重启丢失也没有关系。</li><li><strong>NDB</strong> - 用于 Mysql 集群场景。</li></ul><h3 id="如何选择合适的存储引擎" tabindex="-1"><a class="header-anchor" href="#如何选择合适的存储引擎" aria-hidden="true">#</a> 如何选择合适的存储引擎</h3><p>大多数情况下，InnoDB 都是正确的选择，除非需要用到 InnoDB 不具备的特性。</p><p>如果应用需要选择 InnoDB 以外的存储引擎，可以考虑以下因素：</p><ul><li>事务：如果需要支持事务，InnoDB 是首选。如果不需要支持事务，且主要是 SELECT 和 INSERT 操作，MyISAM 是不错的选择。所以，如果 Mysql 部署方式为主备模式，并进行读写分离。那么可以这么做：主节点只支持写操作，默认引擎为 InnoDB；备节点只支持读操作，默认引擎为 MyISAM。</li><li>并发：MyISAM 只支持表级锁，而 InnoDB 还支持行级锁。所以，InnoDB 并发性能更高。</li><li>外键：InnoDB 支持外键。</li><li>备份：InnoDB 支持在线热备份。</li><li>崩溃恢复：MyISAM 崩溃后发生损坏的概率比 InnoDB 高很多，而且恢复的速度也更慢。</li><li>其它特性：MyISAM 支持压缩表和空间数据索引。</li></ul><h3 id="转换表的存储引擎" tabindex="-1"><a class="header-anchor" href="#转换表的存储引擎" aria-hidden="true">#</a> 转换表的存储引擎</h3><p>下面的语句可以将 mytable 表的引擎修改为 InnoDB</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> mytable <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="myisam" tabindex="-1"><a class="header-anchor" href="#myisam" aria-hidden="true">#</a> MyISAM</h2><p>MyISAM 设计简单，数据以紧密格式存储。对于只读数据，或者表比较小、可以容忍修复操作，则依然可以使用 MyISAM。</p><p>MyISAM 引擎使用 B+Tree 作为索引结构，<strong>叶节点的 data 域存放的是数据记录的地址</strong>。</p><p>MyISAM 提供了大量的特性，包括：全文索引、压缩表、空间函数等。但是，MyISAM 不支持事务和行级锁。并且 MyISAM 不支持崩溃后的安全恢复。</p><h2 id="innodb" tabindex="-1"><a class="header-anchor" href="#innodb" aria-hidden="true">#</a> InnoDB</h2><p>InnoDB 是 MySQL 默认的事务型存储引擎，只有在需要 InnoDB 不支持的特性时，才考虑使用其它存储引擎。</p><p>然 InnoDB 也使用 B+Tree 作为索引结构，但具体实现方式却与 MyISAM 截然不同。MyISAM 索引文件和数据文件是分离的，索引文件仅保存数据记录的地址。而<strong>在 InnoDB 中，表数据文件本身就是按 B+Tree 组织的一个索引结构</strong>，这棵树的叶节点 data 域保存了完整的数据记录。这个<strong>索引的 key 是数据表的主键</strong>，因此<strong>InnoDB 表数据文件本身就是主索引</strong>。</p><p>InnoDB 采用 MVCC 来支持高并发，并且实现了四个标准的隔离级别。其默认级别是可重复读（REPEATABLE READ），并且通过间隙锁（next-key locking）防止幻读。</p><p>InnoDB 是基于聚簇索引建立的，与其他存储引擎有很大不同。在索引中保存了数据，从而避免直接读取磁盘，因此对查询性能有很大的提升。</p><p>内部做了很多优化，包括从磁盘读取数据时采用的可预测性读、能够加快读操作并且自动创建的自适应哈希索引、能够加速插入操作的插入缓冲区等。</p><p>支持真正的在线热备份。其它存储引擎不支持在线热备份，要获取一致性视图需要停止对所有表的写入，而在读写混合场景中，停止写入可能也意味着停止读取。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,25),d={href:"https://book.douban.com/subject/23008813/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://time.geekbang.org/column/intro/139",target:"_blank",rel:"noopener noreferrer"};function u(h,M){const a=r("ExternalLinkIcon");return p(),t("div",null,[i,s("ul",null,[s("li",null,[s("a",d,[n("《高性能 MySQL》"),e(a)])]),s("li",null,[s("a",k,[n("MySQL 实战 45 讲"),e(a)])])])])}const g=o(c,[["render",u],["__file","02.Mysql存储引擎.html.vue"]]);export{g as default};
