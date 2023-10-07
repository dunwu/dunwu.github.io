import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c,a as n,b as s,d as e,e as t}from"./app-05b4da95.js";const p={},r=t(`<h1 id="mysql-事务" tabindex="-1"><a class="header-anchor" href="#mysql-事务" aria-hidden="true">#</a> Mysql 事务</h1><blockquote><p>不是所有的 Mysql 存储引擎都实现了事务处理。支持事务的存储引擎有：<code>InnoDB</code> 和 <code>NDB Cluster</code>。不支持事务的存储引擎，代表有：<code>MyISAM</code>。</p><p>用户可以根据业务是否需要事务处理（事务处理可以保证数据安全，但会增加系统开销），选择合适的存储引擎。</p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220721072721.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="事务简介" tabindex="-1"><a class="header-anchor" href="#事务简介" aria-hidden="true">#</a> 事务简介</h2><blockquote><p>事务简单来说：<strong>一个 Session 中所进行所有的操作，要么同时成功，要么同时失败</strong>。进一步说，事务指的是满足 ACID 特性的一组操作，可以通过 <code>Commit</code> 提交一个事务，也可以使用 <code>Rollback</code> 进行回滚。</p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/database/RDB/数据库事务.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>事务就是一组原子性的 SQL 语句</strong>。具体来说，事务指的是满足 ACID 特性的一组操作。</p><p><strong>事务内的 SQL 语句，要么全执行成功，要么全执行失败</strong>。</p><p><strong>通过加锁的方式，可以实现不同的事务隔离机制</strong>。</p><p>想象一下，如果没有事务，在并发环境下，就可能出现丢失修改的问题。</p><p>T<sub>1</sub> 和 T<sub>2</sub> 两个线程都对一个数据进行修改，T<sub>1</sub> 先修改，T<sub>2</sub> 随后修改，T<sub>2</sub> 的修改覆盖了 T<sub>1</sub> 的修改。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/database/RDB/数据库并发一致性-丢失修改.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="事务用法" tabindex="-1"><a class="header-anchor" href="#事务用法" aria-hidden="true">#</a> 事务用法</h2><h3 id="事务处理指令" tabindex="-1"><a class="header-anchor" href="#事务处理指令" aria-hidden="true">#</a> 事务处理指令</h3><p>Mysql 中，使用 <code>START TRANSACTION</code> 语句开始一个事务；使用 <code>COMMIT</code> 语句提交所有的修改；使用 <code>ROLLBACK</code> 语句撤销所有的修改。不能回退 <code>SELECT</code> 语句，回退 <code>SELECT</code> 语句也没意义；也不能回退 <code>CREATE</code> 和 <code>DROP</code> 语句。</p><ul><li><code>START TRANSACTION</code> - 指令用于标记事务的起始点。</li><li><code>SAVEPOINT</code> - 指令用于创建保留点。</li><li><code>ROLLBACK TO</code> - 指令用于回滚到指定的保留点；如果没有设置保留点，则回退到 <code>START TRANSACTION</code> 语句处。</li><li><code>COMMIT</code> - 提交事务。</li></ul><p>事务处理示例：</p><p>（1）创建一张示例表</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 撤销表 user</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">user</span><span class="token punctuation">;</span>

<span class="token comment">-- 创建表 user</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">user</span> <span class="token punctuation">(</span>
  id <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">unsigned</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;Id&#39;</span><span class="token punctuation">,</span>
  username <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;default&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;用户名&#39;</span><span class="token punctuation">,</span>
  password <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;default&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;密码&#39;</span><span class="token punctuation">,</span>
  email <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;default&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;邮箱&#39;</span>
<span class="token punctuation">)</span> <span class="token keyword">COMMENT</span><span class="token operator">=</span><span class="token string">&#39;用户表&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）执行事务操作</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 开始事务</span>
<span class="token keyword">START</span> <span class="token keyword">TRANSACTION</span><span class="token punctuation">;</span>

<span class="token comment">-- 插入操作 A</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">\`</span>user<span class="token punctuation">\`</span></span>
<span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;root1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;root1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;xxxx@163.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 创建保留点 updateA</span>
<span class="token keyword">SAVEPOINT</span> updateA<span class="token punctuation">;</span>

<span class="token comment">-- 插入操作 B</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">\`</span>user<span class="token punctuation">\`</span></span>
<span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;root2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;root2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;xxxx@163.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 回滚到保留点 updateA</span>
<span class="token keyword">ROLLBACK</span> <span class="token keyword">TO</span> updateA<span class="token punctuation">;</span>

<span class="token comment">-- 提交事务，只有操作 A 生效</span>
<span class="token keyword">COMMIT</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）执行结果</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">user</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1	root1	root1	xxxx@163.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="autocommit" tabindex="-1"><a class="header-anchor" href="#autocommit" aria-hidden="true">#</a> AUTOCOMMIT</h3><p><strong>MySQL 默认采用隐式提交策略（<code>autocommit</code>）</strong>。每执行一条语句就把这条语句当成一个事务然后进行提交。当出现 <code>START TRANSACTION</code> 语句时，会关闭隐式提交；当 <code>COMMIT</code> 或 <code>ROLLBACK</code> 语句执行后，事务会自动关闭，重新恢复隐式提交。</p><p>通过 <code>set autocommit=0</code> 可以取消自动提交，直到 <code>set autocommit=1</code> 才会提交；<code>autocommit</code> 标记是针对每个连接而不是针对服务器的。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查看 AUTOCOMMIT</span>
<span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;AUTOCOMMIT&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 关闭 AUTOCOMMIT</span>
<span class="token keyword">SET</span> autocommit <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">-- 开启 AUTOCOMMIT</span>
<span class="token keyword">SET</span> autocommit <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="acid" tabindex="-1"><a class="header-anchor" href="#acid" aria-hidden="true">#</a> ACID</h2><p>ACID 是数据库事务正确执行的四个基本要素。</p><ul><li><strong>原子性（Atomicity）</strong><ul><li>事务被视为不可分割的最小单元，事务中的所有操作要么全部提交成功，要么全部失败回滚。</li><li>回滚可以用日志来实现，日志记录着事务所执行的修改操作，在回滚时反向执行这些修改操作即可。</li></ul></li><li><strong>一致性（Consistency）</strong><ul><li>数据库在事务执行前后都保持一致性状态。</li><li>在一致性状态下，所有事务对一个数据的读取结果都是相同的。</li></ul></li><li><strong>隔离性（Isolation）</strong><ul><li>一个事务所做的修改在最终提交以前，对其它事务是不可见的。</li></ul></li><li><strong>持久性（Durability）</strong><ul><li>一旦事务提交，则其所做的修改将会永远保存到数据库中。即使系统发生崩溃，事务执行的结果也不能丢失。</li><li>可以通过数据库备份和恢复来实现，在系统发生奔溃时，使用备份的数据库进行数据恢复。</li></ul></li></ul><p><strong>一个支持事务（Transaction）中的数据库系统，必需要具有这四种特性，否则在事务过程（Transaction processing）当中无法保证数据的正确性，交易过程极可能达不到交易。</strong></p><ul><li>只有满足一致性，事务的执行结果才是正确的。</li><li>在无并发的情况下，事务串行执行，隔离性一定能够满足。此时只要能满足原子性，就一定能满足一致性。</li><li>在并发的情况下，多个事务并行执行，事务不仅要满足原子性，还需要满足隔离性，才能满足一致性。</li><li>事务满足持久化是为了能应对系统崩溃的情况。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/database/RDB/数据库ACID.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><blockquote><p>MySQL 默认采用自动提交模式（<code>AUTO COMMIT</code>）。也就是说，如果不显式使用 <code>START TRANSACTION</code> 语句来开始一个事务，那么每个查询操作都会被当做一个事务并自动提交。</p></blockquote><h2 id="事务隔离级别" tabindex="-1"><a class="header-anchor" href="#事务隔离级别" aria-hidden="true">#</a> 事务隔离级别</h2><h3 id="事务隔离简介" tabindex="-1"><a class="header-anchor" href="#事务隔离简介" aria-hidden="true">#</a> 事务隔离简介</h3><p>在并发环境下，事务的隔离性很难保证，因此会出现很多并发一致性问题：</p><ul><li><strong>丢失修改</strong></li><li><strong>脏读</strong></li><li><strong>不可重复读</strong></li><li><strong>幻读</strong></li></ul><p>在 SQL 标准中，定义了四种事务隔离级别（级别由低到高）：</p><ul><li><strong>读未提交</strong></li><li><strong>读提交</strong></li><li><strong>可重复读</strong></li><li><strong>串行化</strong></li></ul><p>Mysql 中查看和设置事务隔离级别：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查看事务隔离级别</span>
<span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;transaction_isolation&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 设置事务隔离级别为 READ UNCOMMITTED</span>
<span class="token keyword">SET</span> <span class="token keyword">SESSION</span> <span class="token keyword">TRANSACTION</span> <span class="token keyword">ISOLATION</span> <span class="token keyword">LEVEL</span> <span class="token keyword">READ</span> <span class="token keyword">UNCOMMITTED</span><span class="token punctuation">;</span>

<span class="token comment">-- 设置事务隔离级别为 READ COMMITTED</span>
<span class="token keyword">SET</span> <span class="token keyword">SESSION</span> <span class="token keyword">TRANSACTION</span> <span class="token keyword">ISOLATION</span> <span class="token keyword">LEVEL</span> <span class="token keyword">READ</span> <span class="token keyword">COMMITTED</span><span class="token punctuation">;</span>

<span class="token comment">-- 设置事务隔离级别为 REPEATABLE READ</span>
<span class="token keyword">SET</span> <span class="token keyword">SESSION</span> <span class="token keyword">TRANSACTION</span> <span class="token keyword">ISOLATION</span> <span class="token keyword">LEVEL</span> <span class="token keyword">REPEATABLE</span> <span class="token keyword">READ</span><span class="token punctuation">;</span>

<span class="token comment">-- 设置事务隔离级别为 SERIALIZABLE</span>
<span class="token keyword">SET</span> <span class="token keyword">SESSION</span> <span class="token keyword">TRANSACTION</span> <span class="token keyword">ISOLATION</span> <span class="token keyword">LEVEL</span> <span class="token keyword">SERIALIZABLE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="读未提交" tabindex="-1"><a class="header-anchor" href="#读未提交" aria-hidden="true">#</a> 读未提交</h3><p><strong><code>读未提交（read uncommitted）</code> 是指：事务中的修改，即使没有提交，对其它事务也是可见的</strong>。</p><p>读未提交的问题：事务可以读取未提交的数据，也被称为 <strong>脏读（Dirty Read）</strong>。</p><p>T<sub>1</sub> 修改一个数据，T<sub>2</sub> 随后读取这个数据。如果 T<sub>1</sub> 撤销了这次修改，那么 T<sub>2</sub> 读取的数据是脏数据。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/database/RDB/数据库并发一致性-脏数据.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="读提交" tabindex="-1"><a class="header-anchor" href="#读提交" aria-hidden="true">#</a> 读提交</h3><p><strong><code>读提交（read committed）</code> 是指：事务提交后，其他事务才能看到它的修改</strong>。换句话说，一个事务所做的修改在提交之前对其它事务是不可见的。读提交解决了脏读的问题。</p><p>读提交是大多数数据库的默认事务隔离级别。</p><p>读提交有时也叫不可重复读，它的问题是：执行两次相同的查询，得到的结果可能不一致。</p><p>T<sub>2</sub> 读取一个数据，T<sub>1</sub> 对该数据做了修改。如果 T<sub>2</sub> 再次读取这个数据，此时读取的结果和第一次读取的结果不同。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/database/RDB/数据库并发一致性-不可重复读.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="可重复读" tabindex="-1"><a class="header-anchor" href="#可重复读" aria-hidden="true">#</a> 可重复读</h3><p><strong><code>可重复读（REPEATABLE READ）</code> 是指：保证在同一个事务中多次读取同样数据的结果是一样的</strong>。可重复读解决了不可重复读问题。</p><p>可重复读是 Mysql 的默认事务隔离级别。</p><p>可重复读的问题：事务 T1 读取某个范围内的记录时，事务 T2 在该范围内插入了新的记录，T1 再次读取这个范围的数据，此时读取的结果和和第一次读取的结果不同，即为 <strong>幻读（Phantom Read）</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/database/RDB/数据库并发一致性-幻读.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="串行化" tabindex="-1"><a class="header-anchor" href="#串行化" aria-hidden="true">#</a> 串行化</h3><p><strong><code>串行化（SERIALIXABLE）</code> 是指：强制事务串行执行，对于同一行记录，加读写锁，一旦出现锁冲突，必须等前面的事务释放锁</strong>。</p><p>强制事务串行执行，则避免了所有的并发问题。串行化策略会在读取的每一行数据上都加锁，这可能导致大量的超时和锁竞争。这对于高并发应用基本上是不可接受的，所以一般不会采用这个级别。</p><h3 id="隔离级别小结" tabindex="-1"><a class="header-anchor" href="#隔离级别小结" aria-hidden="true">#</a> 隔离级别小结</h3><ul><li><strong><code>读未提交（READ UNCOMMITTED）</code></strong> - 事务中的修改，即使没有提交，对其它事务也是可见的。</li><li><strong><code>读提交（READ COMMITTED）</code></strong> - 一个事务只能读取已经提交的事务所做的修改。换句话说，一个事务所做的修改在提交之前对其它事务是不可见的。</li><li><strong><code>重复读（REPEATABLE READ）</code></strong> - 保证在同一个事务中多次读取同样数据的结果是一样的。</li><li><strong><code>串行化（SERIALIXABLE）</code></strong> - 对于同一行记录，加读写锁，一旦出现锁冲突，必须等前面的事务释放锁。</li></ul><p>数据库隔离级别解决的问题：</p><table><thead><tr><th style="text-align:center;">隔离级别</th><th style="text-align:center;">丢失修改</th><th style="text-align:center;">脏读</th><th style="text-align:center;">不可重复读</th><th style="text-align:center;">幻读</th></tr></thead><tbody><tr><td style="text-align:center;">读未提交</td><td style="text-align:center;">✔️</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;">读提交</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;">可重复读</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;">可串行化</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td></tr></tbody></table><h2 id="死锁" tabindex="-1"><a class="header-anchor" href="#死锁" aria-hidden="true">#</a> 死锁</h2><p><strong>死锁是指两个或多个事务竞争同一资源，并请求锁定对方占用的资源，从而导致恶性循环的现象</strong>。</p><p>产生死锁的场景：</p><ul><li><p>当多个事务试图以不同的顺序锁定资源时，就可能会产生死锁。</p></li><li><p>多个事务同时锁定同一个资源时，也会产生死锁。</p></li></ul><h3 id="死锁的原因" tabindex="-1"><a class="header-anchor" href="#死锁的原因" aria-hidden="true">#</a> 死锁的原因</h3><p>行锁的具体实现算法有三种：record lock、gap lock 以及 next-key lock。record lock 是专门对索引项加锁；gap lock 是对索引项之间的间隙加锁；next-key lock 则是前面两种的组合，对索引项以其之间的间隙加锁。</p><p>只在可重复读或以上隔离级别下的特定操作才会取得 gap lock 或 next-key lock，在 Select、Update 和 Delete 时，除了基于唯一索引的查询之外，其它索引查询时都会获取 gap lock 或 next-key lock，即锁住其扫描的范围。主键索引也属于唯一索引，所以主键索引是不会使用 gap lock 或 next-key lock。</p><p>在 MySQL 中，gap lock 默认是开启的，即 innodb_locks_unsafe_for_binlog 参数值是 disable 的，且 MySQL 中默认的是 RR 事务隔离级别。</p><p>当我们执行以下查询 SQL 时，由于 order_no 列为非唯一索引，此时又是 RR 事务隔离级别，所以 SELECT 的加锁类型为 gap lock，这里的 gap 范围是 (4,+∞）。</p><blockquote><p>SELECT id FROM <code>demo</code>.<code>order_record</code> where <code>order_no</code> = 4 for update;</p></blockquote><p>执行查询 SQL 语句获取的 gap lock 并不会导致阻塞，而当我们执行以下插入 SQL 时，会在插入间隙上再次获取插入意向锁。插入意向锁其实也是一种 gap 锁，它与 gap lock 是冲突的，所以当其它事务持有该间隙的 gap lock 时，需要等待其它事务释放 gap lock 之后，才能获取到插入意向锁。</p><p>以上事务 A 和事务 B 都持有间隙 (4,+∞）的 gap 锁，而接下来的插入操作为了获取到插入意向锁，都在等待对方事务的 gap 锁释放，于是就造成了循环等待，导致死锁。</p><blockquote><p>INSERT INTO <code>demo</code>.<code>order_record</code>(<code>order_no</code>, <code>status</code>, <code>create_date</code>) VALUES (5, 1, ‘2019-07-13 10:57:03’);</p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200630153139.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>另一个死锁场景</strong></p><p>InnoDB 存储引擎的主键索引为聚簇索引，其它索引为辅助索引。如果使用辅助索引来更新数据库，就需要使用聚簇索引来更新数据库字段。如果两个更新事务使用了不同的辅助索引，或一个使用了辅助索引，一个使用了聚簇索引，就都有可能导致锁资源的循环等待。由于本身两个事务是互斥，也就构成了以上死锁的四个必要条件了。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200630154606.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>出现死锁的步骤：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200630154619.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>综上可知，在更新操作时，我们应该尽量使用主键来更新表字段，这样可以有效避免一些不必要的死锁发生。</p><h3 id="避免死锁" tabindex="-1"><a class="header-anchor" href="#避免死锁" aria-hidden="true">#</a> 避免死锁</h3><p>预防死锁的注意事项：</p><ul><li>在编程中尽量按照固定的顺序来处理数据库记录，假设有两个更新操作，分别更新两条相同的记录，但更新顺序不一样，有可能导致死锁；</li><li>在允许幻读和不可重复读的情况下，尽量使用 RC 事务隔离级别，可以避免 gap lock 导致的死锁问题；</li><li>更新表时，<strong>尽量使用主键更新</strong>；</li><li>避免长事务，<strong>尽量将长事务拆解</strong>，可以降低与其它事务发生冲突的概率；</li><li><strong>设置合理的锁等待超时参数</strong>，我们可以通过 <code>innodb_lock_wait_timeout</code> 设置合理的等待超时阈值，特别是在一些高并发的业务中，我们可以尽量将该值设置得小一些，避免大量事务等待，占用系统资源，造成严重的性能开销。</li></ul><p>另外，我们还可以将 order_no 列设置为唯一索引列。虽然不能防止幻读，但我们可以利用它的唯一性来保证订单记录不重复创建，这种方式唯一的缺点就是当遇到重复创建订单时会抛出异常。</p><p>我们还可以使用其它的方式来代替数据库实现幂等性校验。例如，使用 Redis 以及 ZooKeeper 来实现，运行效率比数据库更佳。</p><h3 id="解决死锁" tabindex="-1"><a class="header-anchor" href="#解决死锁" aria-hidden="true">#</a> 解决死锁</h3><p>当出现死锁以后，有两种策略：</p><ul><li>一种策略是，直接进入等待，直到超时。这个超时时间可以通过参数 <code>innodb_lock_wait_timeout</code> 来设置。</li><li>另一种策略是，发起死锁检测，发现死锁后，主动回滚死锁链条中的某一个事务，让其他事务得以继续执行。将参数 <code>innodb_deadlock_detect</code> 设置为 on，表示开启这个逻辑。</li></ul><p>在 InnoDB 中，innodb_lock_wait_timeout 的默认值是 50s，意味着如果采用第一个策略，当出现死锁以后，第一个被锁住的线程要过 50s 才会超时退出，然后其他线程才有可能继续执行。对于在线服务来说，这个等待时间往往是无法接受的。</p><p>但是，我们又不可能直接把这个时间设置成一个很小的值，比如 1s。这样当出现死锁的时候，确实很快就可以解开，但如果不是死锁，而是简单的锁等待呢？所以，超时时间设置太短的话，会出现很多误伤。</p><p>所以，正常情况下我们还是要采用第二种策略，即：主动死锁检测，而且 <code>innodb_deadlock_detect</code> 的默认值本身就是 on。为了解决死锁问题，不同数据库实现了各自的死锁检测和超时机制。InnoDB 的处理策略是：<strong>将持有最少行级排它锁的事务进行回滚</strong>。</p><p>主动死锁检测在发生死锁的时候，是能够快速发现并进行处理的，但是它也是有额外负担的。你可以想象一下这个过程：每当一个事务被锁的时候，就要看看它所依赖的线程有没有被别人锁住，如此循环，最后判断是否出现了循环等待，也就是死锁。</p><h2 id="分布式事务" tabindex="-1"><a class="header-anchor" href="#分布式事务" aria-hidden="true">#</a> 分布式事务</h2><p>在单一数据节点中，事务仅限于对单一数据库资源的访问控制，称之为 <strong>本地事务</strong>。几乎所有的成熟的关系型数据库都提供了对本地事务的原生支持。</p><p><strong>分布式事务指的是事务操作跨越多个节点，并且要求满足事务的 ACID 特性。</strong></p><p>分布式事务的常见方案如下：</p><ul><li><strong>两阶段提交（2PC）</strong> - 将事务的提交过程分为两个阶段来进行处理：准备阶段和提交阶段。参与者将操作成败通知协调者，再由协调者根据所有参与者的反馈情报决定各参与者是否要提交操作还是中止操作。</li><li><strong>三阶段提交（3PC）</strong> - 与二阶段提交不同的是，引入超时机制。同时在协调者和参与者中都引入超时机制。将二阶段的准备阶段拆分为 2 个阶段，插入了一个 preCommit 阶段，使得原先在二阶段提交中，参与者在准备之后，由于协调者发生崩溃或错误，而导致参与者处于无法知晓是否提交或者中止的“不确定状态”所产生的可能相当长的延时的问题得以解决。</li><li><strong>补偿事务（TCC）</strong><ul><li><strong>Try</strong> - 操作作为一阶段，负责资源的检查和预留。</li><li><strong>Confirm</strong> - 操作作为二阶段提交操作，执行真正的业务。</li><li><strong>Cancel</strong> - 是预留资源的取消。</li></ul></li><li><strong>本地消息表</strong> - 在事务主动发起方额外新建事务消息表，事务发起方处理业务和记录事务消息在本地事务中完成，轮询事务消息表的数据发送事务消息，事务被动方基于消息中间件消费事务消息表中的事务。</li><li><strong>MQ 事务</strong> - 基于 MQ 的分布式事务方案其实是对本地消息表的封装。</li><li><strong>SAGA</strong> - Saga 事务核心思想是将长事务拆分为多个本地短事务，由 Saga 事务协调器协调，如果正常结束那就正常完成，如果某个步骤失败，则根据相反顺序一次调用补偿操作。</li></ul><p>分布式事务方案分析：</p><ul><li>2PC/3PC 依赖于数据库，能够很好的提供强一致性和强事务性，但相对来说延迟比较高，比较适合传统的单体应用，在同一个方法中存在跨库操作的情况，不适合高并发和高性能要求的场景。</li><li>TCC 适用于执行时间确定且较短，实时性要求高，对数据一致性要求高，比如互联网金融企业最核心的三个服务：交易、支付、账务。</li><li>本地消息表/MQ 事务 都适用于事务中参与方支持操作幂等，对一致性要求不高，业务上能容忍数据不一致到一个人工检查周期，事务涉及的参与方、参与环节较少，业务上有对账/校验系统兜底。</li><li>Saga 事务 由于 Saga 事务不能保证隔离性，需要在业务层控制并发，适合于业务场景事务并发操作同一资源较少的情况。 Saga 相比缺少预提交动作，导致补偿动作的实现比较麻烦，例如业务是发送短信，补偿动作则得再发送一次短信说明撤销，用户体验比较差。Saga 事务较适用于补偿动作容易处理的场景。</li></ul>`,106),d={href:"https://dunwu.github.io/waterdrop/pages/e1881c/",target:"_blank",rel:"noopener noreferrer"},u=t(`<h2 id="事务最佳实践" tabindex="-1"><a class="header-anchor" href="#事务最佳实践" aria-hidden="true">#</a> 事务最佳实践</h2><p>高并发场景下的事务到底该如何调优？</p><h3 id="尽量使用低级别事务隔离" tabindex="-1"><a class="header-anchor" href="#尽量使用低级别事务隔离" aria-hidden="true">#</a> 尽量使用低级别事务隔离</h3><p>结合业务场景，尽量使用低级别事务隔离</p><h3 id="避免行锁升级表锁" tabindex="-1"><a class="header-anchor" href="#避免行锁升级表锁" aria-hidden="true">#</a> 避免行锁升级表锁</h3><p>在 InnoDB 中，行锁是通过索引实现的，如果不通过索引条件检索数据，行锁将会升级到表锁。我们知道，表锁是会严重影响到整张表的操作性能的，所以应该尽力避免。</p><h3 id="缩小事务范围" tabindex="-1"><a class="header-anchor" href="#缩小事务范围" aria-hidden="true">#</a> 缩小事务范围</h3><p>有时候，数据库并发访问量太大，会出现以下异常：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MySQLQueryInterruptedException: Query execution was interrupted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>高并发时对一条记录进行更新的情况下，由于更新记录所在的事务还可能存在其他操作，导致一个事务比较长，当有大量请求进入时，就可能导致一些请求同时进入到事务中。</p><p>又因为锁的竞争是不公平的，当多个事务同时对一条记录进行更新时，极端情况下，一个更新操作进去排队系统后，可能会一直拿不到锁，最后因超时被系统打断踢出。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200630112600.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如上图中的操作，虽然都是在一个事务中，但锁的申请在不同时间，只有当其他操作都执行完，才会释放所有锁。因为扣除库存是更新操作，属于行锁，这将会影响到其他操作该数据的事务，所以我们应该尽量避免长时间地持有该锁，尽快释放该锁。又因为先新建订单和先扣除库存都不会影响业务，所以我们可以将扣除库存操作放到最后，也就是使用执行顺序 1，以此尽量减小锁的持有时间。</p><p><strong>在 InnoDB 事务中，行锁是在需要的时候才加上的，但并不是不需要了就立刻释放，而是要等到事务结束时才释放。这个就是两阶段锁协议。</strong></p><p>知道了这个设定，对我们使用事务有什么帮助呢？那就是，如果你的事务中需要锁多个行，要把最可能造成锁冲突、最可能影响并发度的锁尽量往后放。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,16),g={href:"https://book.douban.com/subject/23008813/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://time.geekbang.org/column/intro/139",target:"_blank",rel:"noopener noreferrer"};function m(h,b){const a=i("ExternalLinkIcon");return l(),c("div",null,[r,n("blockquote",null,[n("p",null,[s("分布式事务详细说明、分析请参考："),n("a",d,[s("分布式事务基本原理"),e(a)])])]),u,n("ul",null,[n("li",null,[n("a",g,[s("《高性能 MySQL》"),e(a)])]),n("li",null,[n("a",k,[s("MySQL 实战 45 讲"),e(a)])])])])}const T=o(p,[["render",m],["__file","03.Mysql事务.html.vue"]]);export{T as default};
