import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as c,c as d,a as e,b as n,d as a,e as t}from"./app-4f05975a.js";const r={},i=t(`<h1 id="mysql-锁" tabindex="-1"><a class="header-anchor" href="#mysql-锁" aria-hidden="true">#</a> Mysql 锁</h1><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200716064947.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="悲观锁和乐观锁" tabindex="-1"><a class="header-anchor" href="#悲观锁和乐观锁" aria-hidden="true">#</a> 悲观锁和乐观锁</h2><p>确保在多个事务同时存取数据库中同一数据时不破坏事务的隔离性和统一性以及数据库的统一性，<strong>乐观锁和悲观锁是并发控制主要采用的技术手段。</strong></p><ul><li><strong><code>悲观锁</code></strong> - 假定会发生并发冲突，屏蔽一切可能违反数据完整性的操作 <ul><li>在查询完数据的时候就把事务锁起来，直到提交事务（<code>COMMIT</code>）</li><li>实现方式：<strong>使用数据库中的锁机制</strong>。</li></ul></li><li><strong><code>乐观锁</code></strong> - 假设不会发生并发冲突，只在提交操作时检查是否违反数据完整性。 <ul><li>在修改数据的时候把事务锁起来，通过 version 的方式来进行锁定</li><li>实现方式：<strong>使用 version 版本或者时间戳</strong>。</li></ul></li></ul><p>【示例】乐观锁示例</p><p>商品 goods 表中有一个字段 status，status 为 1 代表商品未被下单，status 为 2 代表商品已经被下单，那么我们对某个商品下单时必须确保该商品 status 为 1。假设商品的 id 为 1。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token punctuation">(</span><span class="token keyword">status</span><span class="token punctuation">,</span><span class="token keyword">status</span><span class="token punctuation">,</span>version<span class="token punctuation">)</span> <span class="token keyword">from</span> t_goods <span class="token keyword">where</span> id<span class="token operator">=</span><span class="token comment">#{id}</span>

<span class="token keyword">update</span> t_goods
<span class="token keyword">set</span> <span class="token keyword">status</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>version<span class="token operator">=</span>version<span class="token operator">+</span><span class="token number">1</span>
<span class="token keyword">where</span> id<span class="token operator">=</span><span class="token comment">#{id} and version=#{version};</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p={href:"https://www.cnblogs.com/laoyeye/p/8097684.html",target:"_blank",rel:"noopener noreferrer"},u=t(`<h2 id="表级锁和行级锁" tabindex="-1"><a class="header-anchor" href="#表级锁和行级锁" aria-hidden="true">#</a> 表级锁和行级锁</h2><p>从数据库的锁粒度来看，MySQL 中提供了两种封锁粒度：行级锁和表级锁。</p><ul><li><strong>表级锁（table lock）</strong> - 锁定整张表。用户对表进行写操作前，需要先获得写锁，这会阻塞其他用户对该表的所有读写操作。只有没有写锁时，其他用户才能获得读锁，读锁之间不会相互阻塞。</li><li><strong>行级锁（row lock）</strong> - 锁定指定的行记录。这样其它进程还是可以对同一个表中的其它记录进行操作。</li></ul><p>应该尽量只锁定需要修改的那部分数据，而不是所有的资源。<strong>锁定的数据量越少，锁竞争的发生频率就越小，系统的并发程度就越高</strong>。但是加锁需要消耗资源，锁的各种操作（包括获取锁、释放锁、以及检查锁状态）都会增加系统开销。因此<strong>锁粒度越小，系统开销就越大</strong>。</p><p>在选择锁粒度时，需要在锁开销和并发程度之间做一个权衡。</p><p>在 <code>InnoDB</code> 中，<strong>行锁是通过给索引上的索引项加锁来实现的</strong>。<strong>如果没有索引，<code>InnoDB</code> 将会通过隐藏的聚簇索引来对记录加锁</strong>。</p><h2 id="读写锁" tabindex="-1"><a class="header-anchor" href="#读写锁" aria-hidden="true">#</a> 读写锁</h2><ul><li>独享锁（Exclusive），简写为 X 锁，又称写锁。使用方式：<code>SELECT ... FOR UPDATE;</code></li><li>共享锁（Shared），简写为 S 锁，又称读锁。使用方式：<code>SELECT ... LOCK IN SHARE MODE;</code></li></ul><p>写锁和读锁的关系，简言之：<strong>独享锁存在，其他事务就不能做任何操作</strong>。</p><p><strong><code>InnoDB</code> 下的行锁、间隙锁、next-key 锁统统属于独享锁</strong>。</p><h2 id="意向锁" tabindex="-1"><a class="header-anchor" href="#意向锁" aria-hidden="true">#</a> 意向锁</h2><p><strong>当存在表级锁和行级锁的情况下，必须先申请意向锁（表级锁，但不是真的加锁），再获取行级锁</strong>。使用意向锁（Intention Locks）可以更容易地支持多粒度封锁。</p><p><strong>意向锁是 <code>InnoDB</code> 自动加的，不需要用户干预</strong>。</p><p>在存在行级锁和表级锁的情况下，事务 T 想要对表 A 加 X 锁，就需要先检测是否有其它事务对表 A 或者表 A 中的任意一行加了锁，那么就需要对表 A 的每一行都检测一次，这是非常耗时的。</p><p>意向锁规定：</p><ul><li>IX/IS 是表锁；</li><li>X/S 是行锁。</li><li>一个事务在获得某个数据行的 S 锁之前，必须先获得表的 IS 锁或者更强的锁；</li><li>一个事务在获得某个数据行的 X 锁之前，必须先获得表的 IX 锁。</li></ul><p>通过引入意向锁，事务 T 想要对表 A 加 X 锁，只需要先检测是否有其它事务对表 A 加了 X/IX/S/IS 锁，如果加了就表示有其它事务正在使用这个表或者表中某一行的锁，因此事务 T 加 X 锁失败。</p><p>各种锁的兼容关系如下：</p><table><thead><tr><th style="text-align:center;">-</th><th style="text-align:center;">X</th><th style="text-align:center;">IX</th><th style="text-align:center;">S</th><th style="text-align:center;">IS</th></tr></thead><tbody><tr><td style="text-align:center;">X</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;">IX</td><td style="text-align:center;">❌</td><td style="text-align:center;">✔️</td><td style="text-align:center;">❌</td><td style="text-align:center;">✔️</td></tr><tr><td style="text-align:center;">S</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td></tr><tr><td style="text-align:center;">IS</td><td style="text-align:center;">❌</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td></tr></tbody></table><p>解释如下：</p><ul><li>任意 IS/IX 锁之间都是兼容的，因为它们只表示想要对表加锁，而不是真正加锁；</li><li>这里兼容关系针对的是表级锁，而表级的 IX 锁和行级的 X 锁兼容，两个事务可以对两个数据行加 X 锁。（事务 T1 想要对数据行 R1 加 X 锁，事务 T2 想要对同一个表的数据行 R2 加 X 锁，两个事务都需要对该表加 IX 锁，但是 IX 锁是兼容的，并且 IX 锁与行级的 X 锁也是兼容的，因此两个事务都能加锁成功，对同一个表中的两个数据行做修改。）</li></ul><h2 id="mvcc" tabindex="-1"><a class="header-anchor" href="#mvcc" aria-hidden="true">#</a> MVCC</h2><p><strong>多版本并发控制（Multi-Version Concurrency Control, MVCC）可以视为行级锁的一个变种。它在很多情况下都避免了加锁操作，因此开销更低</strong>。不仅是 Mysql，包括 Oracle、PostgreSQL 等其他数据库都实现了各自的 MVCC，实现机制没有统一标准。</p><p>MVCC 是 <code>InnoDB</code> 存储引擎实现隔离级别的一种具体方式，<strong>用于实现提交读和可重复读这两种隔离级别</strong>。而未提交读隔离级别总是读取最新的数据行，要求很低，无需使用 MVCC。可串行化隔离级别需要对所有读取的行都加锁，单纯使用 MVCC 无法实现。</p><h3 id="mvcc-思想" tabindex="-1"><a class="header-anchor" href="#mvcc-思想" aria-hidden="true">#</a> MVCC 思想</h3><p>加锁能解决多个事务同时执行时出现的并发一致性问题。在实际场景中读操作往往多于写操作，因此又引入了读写锁来避免不必要的加锁操作，例如读和读没有互斥关系。读写锁中读和写操作仍然是互斥的。</p><p>MVCC 的思想是：</p><ul><li><strong>保存数据在某个时间点的快照，写操作（DELETE、INSERT、UPDATE）更新最新的版本快照；而读操作去读旧版本快照，没有互斥关系</strong>。这一点和 <code>CopyOnWrite</code> 类似。</li><li>脏读和不可重复读最根本的原因是<strong>事务读取到其它事务未提交的修改</strong>。在事务进行读取操作时，为了解决脏读和不可重复读问题，<strong>MVCC 规定只能读取已经提交的快照</strong>。当然一个事务可以读取自身未提交的快照，这不算是脏读。</li></ul><h3 id="版本号" tabindex="-1"><a class="header-anchor" href="#版本号" aria-hidden="true">#</a> 版本号</h3><p>InnoDB 的 MVCC 实现是：在每行记录后面保存两个隐藏列，一个列保存行的创建时间，另一个列保存行的过期时间（这里的时间是指系统版本号）。每开始一个新事务，系统版本号会自动递增，事务开始时刻的系统版本号会作为事务的版本号，用来和查询到的每行记录的版本号进行比较。</p><ul><li>系统版本号 <code>SYS_ID</code>：是一个递增的数字，每开始一个新的事务，系统版本号就会自动递增。</li><li>事务版本号 <code>TRX_ID</code> ：事务开始时的系统版本号。</li></ul><h3 id="undo-日志" tabindex="-1"><a class="header-anchor" href="#undo-日志" aria-hidden="true">#</a> Undo 日志</h3><p>MVCC 的多版本指的是多个版本的快照，快照存储在 Undo 日志中，该日志通过回滚指针 <code>ROLL_PTR</code> 把一个数据行的所有快照连接起来。</p><p>例如在 MySQL 创建一个表 t，包含主键 id 和一个字段 x。我们先插入一个数据行，然后对该数据行执行两次更新操作。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> t<span class="token punctuation">(</span>id<span class="token punctuation">,</span> x<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">UPDATE</span> t <span class="token keyword">SET</span> x<span class="token operator">=</span><span class="token string">&quot;b&quot;</span> <span class="token keyword">WHERE</span> id<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">UPDATE</span> t <span class="token keyword">SET</span> x<span class="token operator">=</span><span class="token string">&quot;c&quot;</span> <span class="token keyword">WHERE</span> id<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为没有使用 <code>START TRANSACTION</code> 将上面的操作当成一个事务来执行，根据 MySQL 的 <code>AUTOCOMMIT</code> 机制，每个操作都会被当成一个事务来执行，所以上面的操作总共涉及到三个事务。快照中除了记录事务版本号 TRX_ID 和操作之外，还记录了一个 bit 的 DEL 字段，用于标记是否被删除。</p><p><code>INSERT</code>、<code>UPDATE</code>、<code>DELETE</code> 操作会创建一个日志，并将事务版本号 <code>TRX_ID</code> 写入。<code>DELETE</code> 可以看成是一个特殊的 <code>UPDATE</code>，还会额外将 DEL 字段设置为 1。</p><h3 id="readview" tabindex="-1"><a class="header-anchor" href="#readview" aria-hidden="true">#</a> ReadView</h3><p>MVCC 维护了一个一致性读视图 <code>consistent read view</code> ，主要包含了当前系统<strong>未提交的事务列表</strong> <code>TRX_IDs {TRX_ID_1, TRX_ID_2, ...}</code>，还有该列表的最小值 <code>TRX_ID_MIN</code> 和 <code>TRX_ID_MAX</code>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200715135809.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>这样，对于当前事务的启动瞬间来说，一个数据版本的 row trx_id，有以下几种可能：</p><ol><li>如果落在绿色部分，表示这个版本是已提交的事务或者是当前事务自己生成的，这个数据是可见的；</li><li>如果落在红色部分，表示这个版本是由将来启动的事务生成的，是肯定不可见的；</li><li>如果落在黄色部分，那就包括两种情况<br> a. 若 row trx_id 在数组中，表示这个版本是由还没提交的事务生成的，不可见；<br> b. 若 row trx_id 不在数组中，表示这个版本是已经提交了的事务生成的，可见。</li></ol><p>在进行 <code>SELECT</code> 操作时，根据数据行快照的 <code>TRX_ID</code> 与 <code>TRX_ID_MIN</code> 和 <code>TRX_ID_MAX</code> 之间的关系，从而判断数据行快照是否可以使用：</p><ul><li><code>TRX_ID</code> &lt; <code>TRX_ID_MIN</code>，表示该数据行快照时在当前所有未提交事务之前进行更改的，因此可以使用。</li><li><code>TRX_ID</code> &gt; <code>TRX_ID_MAX</code>，表示该数据行快照是在事务启动之后被更改的，因此不可使用。</li><li><code>TRX_ID_MIN</code> &lt;= <code>TRX_ID</code> &lt;= <code>TRX_ID_MAX</code>，需要根据隔离级别再进行判断： <ul><li>提交读：如果 <code>TRX_ID</code> 在 <code>TRX_IDs</code> 列表中，表示该数据行快照对应的事务还未提交，则该快照不可使用。否则表示已经提交，可以使用。</li><li>可重复读：都不可以使用。因为如果可以使用的话，那么其它事务也可以读到这个数据行快照并进行修改，那么当前事务再去读这个数据行得到的值就会发生改变，也就是出现了不可重复读问题。</li></ul></li></ul><p>在数据行快照不可使用的情况下，需要沿着 Undo Log 的回滚指针 ROLL_PTR 找到下一个快照，再进行上面的判断。</p><h3 id="快照读与当前读" tabindex="-1"><a class="header-anchor" href="#快照读与当前读" aria-hidden="true">#</a> 快照读与当前读</h3><p>快照读</p><p>MVCC 的 SELECT 操作是快照中的数据，不需要进行加锁操作。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">table</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当前读</p><p>MVCC 其它会对数据库进行修改的操作（INSERT、UPDATE、DELETE）需要进行加锁操作，从而读取最新的数据。可以看到 MVCC 并不是完全不用加锁，而只是避免了 SELECT 的加锁操作。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span><span class="token punctuation">;</span>
<span class="token keyword">UPDATE</span><span class="token punctuation">;</span>
<span class="token keyword">DELETE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在进行 SELECT 操作时，可以强制指定进行加锁操作。以下第一个语句需要加 S 锁，第二个需要加 X 锁。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">table</span> <span class="token keyword">WHERE</span> ? <span class="token keyword">lock</span> <span class="token operator">in</span> <span class="token keyword">share</span> <span class="token keyword">mode</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">table</span> <span class="token keyword">WHERE</span> ? <span class="token keyword">for</span> <span class="token keyword">update</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行锁" tabindex="-1"><a class="header-anchor" href="#行锁" aria-hidden="true">#</a> 行锁</h2><p>行锁的具体实现算法有三种：record lock、gap lock 以及 next-key lock。</p><ul><li><code>Record Lock</code> - <strong>行锁对索引项加锁，若没有索引则使用表锁</strong>。</li><li><code>Gap Lock</code> - <strong>对索引项之间的间隙加锁</strong>。锁定索引之间的间隙，但是不包含索引本身。例如当一个事务执行以下语句，其它事务就不能在 t.c 中插入 15：<code>SELECT c FROM t WHERE c BETWEEN 10 and 20 FOR UPDATE;</code>。在 MySQL 中，gap lock 默认是开启的，即 <code>innodb_locks_unsafe_for_binlog</code> 参数值是 disable 的，且 MySQL 中默认的是 RR 事务隔离级别。</li><li><code>Next-key lock</code> -它是 <code>Record Lock</code> 和 <code>Gap Lock</code> 的结合，不仅锁定一个记录上的索引，也锁定索引之间的间隙。它锁定一个前开后闭区间。</li></ul><p>只在可重复读或以上隔离级别下的特定操作才会取得 gap lock 或 next-key lock。在 <code>Select</code>、<code>Update</code> 和 <code>Delete</code> 时，除了基于唯一索引的查询之外，其它索引查询时都会获取 gap lock 或 next-key lock，即锁住其扫描的范围。主键索引也属于唯一索引，所以主键索引是不会使用 gap lock 或 next-key lock。</p><p>MVCC 不能解决幻读问题，<strong>Next-Key 锁就是为了解决幻读问题</strong>。在可重复读（<code>REPEATABLE READ</code>）隔离级别下，使用 <strong>MVCC + Next-Key 锁</strong> 可以解决幻读问题。</p><p>索引分为主键索引和非主键索引两种，如果一条 SQL 语句操作了主键索引，MySQL 就会锁定这条主键索引；如果一条语句操作了非主键索引，MySQL 会先锁定该非主键索引，再锁定相关的主键索引。在 <code>UPDATE</code>、<code>DELETE</code> 操作时，MySQL 不仅锁定 <code>WHERE</code> 条件扫描过的所有索引记录，而且会锁定相邻的键值，即所谓的 <code>next-key lock</code>。</p><p>当两个事务同时执行，一个锁住了主键索引，在等待其他相关索引。另一个锁定了非主键索引，在等待主键索引。这样就会发生死锁。发生死锁后，<code>InnoDB</code> 一般都可以检测到，并使一个事务释放锁回退，另一个获取锁完成事务。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,62),k={href:"https://book.douban.com/subject/23008813/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://time.geekbang.org/column/intro/100028001",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/CyC2018/Interview-Notebook/blob/master/notes/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%B3%BB%E7%BB%9F%E5%8E%9F%E7%90%86.md",target:"_blank",rel:"noopener noreferrer"},y={href:"https://juejin.im/post/5b55b842f265da0f9e589e79",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.cnblogs.com/laoyeye/p/8097684.html",target:"_blank",rel:"noopener noreferrer"};function b(_,m){const s=l("ExternalLinkIcon");return c(),d("div",null,[i,e("blockquote",null,[e("p",null,[n("更详细的乐观锁说可以参考："),e("a",p,[n("使用 mysql 乐观锁解决并发问题"),a(s)])])]),u,e("ul",null,[e("li",null,[e("a",k,[n("《高性能 MySQL》"),a(s)])]),e("li",null,[e("a",g,[n("《Java 性能调优实战》"),a(s)])]),e("li",null,[e("a",h,[n("数据库系统原理"),a(s)])]),e("li",null,[e("a",y,[n("数据库两大神器【索引和锁】"),a(s)])]),e("li",null,[e("a",E,[n("使用 mysql 乐观锁解决并发问题"),a(s)])])])])}const x=o(r,[["render",b],["__file","04.Mysql锁.html.vue"]]);export{x as default};
