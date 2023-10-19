import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as r,a as n,b as s,d as e,e as t}from"./app-a0e98cac.js";const d={},c=t(`<h1 id="mysql-事务" tabindex="-1"><a class="header-anchor" href="#mysql-事务" aria-hidden="true">#</a> Mysql 事务</h1><blockquote><p>不是所有的 Mysql 存储引擎都实现了事务处理。支持事务的存储引擎有：<code>InnoDB</code> 和 <code>NDB Cluster</code>。不支持事务的存储引擎，代表有：<code>MyISAM</code>。</p><p>用户可以根据业务是否需要事务处理（事务处理可以保证数据安全，但会增加系统开销），选择合适的存储引擎。</p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202310162340413.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="事务简介" tabindex="-1"><a class="header-anchor" href="#事务简介" aria-hidden="true">#</a> 事务简介</h2><h3 id="事务概念" tabindex="-1"><a class="header-anchor" href="#事务概念" aria-hidden="true">#</a> 事务概念</h3><p><strong>事务指的是满足 ACID 特性的一组操作</strong>。事务内的 SQL 语句，要么全执行成功，要么全执行失败。可以通过 <code>Commit</code> 提交一个事务，也可以使用 <code>Rollback</code> 进行回滚。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202310092226555.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="acid" tabindex="-1"><a class="header-anchor" href="#acid" aria-hidden="true">#</a> ACID</h3><p>ACID 是数据库事务正确执行的四个基本要素。</p><ul><li><strong>原子性（Atomicity）</strong><ul><li>事务被视为不可分割的最小单元，事务中的所有操作要么全部提交成功，要么全部失败回滚。</li><li>回滚可以用日志来实现，日志记录着事务所执行的修改操作，在回滚时反向执行这些修改操作即可。</li></ul></li><li><strong>一致性（Consistency）</strong><ul><li>数据库在事务执行前后都保持一致性状态。</li><li>在一致性状态下，所有事务对一个数据的读取结果都是相同的。</li></ul></li><li><strong>隔离性（Isolation）</strong><ul><li>一个事务所做的修改在最终提交以前，对其它事务是不可见的。</li></ul></li><li><strong>持久性（Durability）</strong><ul><li>一旦事务提交，则其所做的修改将会永远保存到数据库中。即使系统发生崩溃，事务执行的结果也不能丢失。</li><li>可以通过数据库备份和恢复来实现，在系统发生奔溃时，使用备份的数据库进行数据恢复。</li></ul></li></ul><p>一个支持事务（Transaction）中的数据库系统，必需要具有这四种特性，否则在事务过程（Transaction processing）当中无法保证数据的正确性。</p><ul><li>只有满足一致性，事务的执行结果才是正确的。</li><li>在无并发的情况下，事务串行执行，隔离性一定能够满足。此时只要能满足原子性，就一定能满足一致性。</li><li>在并发的情况下，多个事务并行执行，事务不仅要满足原子性，还需要满足隔离性，才能满足一致性。</li><li>事务满足持久化是为了能应对系统崩溃的情况。</li></ul><h3 id="事务操作" tabindex="-1"><a class="header-anchor" href="#事务操作" aria-hidden="true">#</a> 事务操作</h3><p>事务相关的语句如下：</p><ul><li><code>BEGIN</code> / <code>START TRANSACTION</code> - <strong>用于标记事务的起始点</strong>。</li><li><code>START TRANSACTION WITH CONSISTENT SNAPSHOT</code> - <strong>用于标记事务的起始点</strong>。</li><li><code>SAVEPOINT</code> - <strong>用于创建保存点</strong>。方便后续针对保存点进行回滚。一个事务中可以存在多个保存点。</li><li><code>RELEASE SAVEPOINT</code> - 删除某个保存点。</li><li><code>ROLLBACK TO</code> - <strong>用于回滚到指定的保存点</strong>。如果没有设置保存点，则回退到 <code>START TRANSACTION</code> 语句处。</li><li><code>COMMIT</code> - <strong>提交事务</strong>。</li><li><code>SET TRANSACTION</code> - 设置事务的隔离级别。</li></ul><blockquote><p>注意：</p><p>两种开启事务的命令，启动时机是不同的：</p><ul><li>执行了 <code>BEGIN</code> / <code>START TRANSACTION</code> 命令后，并不代表事务立刻启动，而是当执行了增删查操作时，才真正启动事务。</li><li>执行了 <code>START TRANSACTION WITH CONSISTENT SNAPSHOT</code> 命令，会立刻启动事务。</li></ul></blockquote><p>事务处理示例：</p><p>（1）创建一张示例表</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 撤销表 user</span>
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

<span class="token comment">-- 创建保存点 updateA</span>
<span class="token keyword">SAVEPOINT</span> updateA<span class="token punctuation">;</span>

<span class="token comment">-- 插入操作 B</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">\`</span>user<span class="token punctuation">\`</span></span>
<span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;root2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;root2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;xxxx@163.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 回滚到保存点 updateA</span>
<span class="token keyword">ROLLBACK</span> <span class="token keyword">TO</span> updateA<span class="token punctuation">;</span>

<span class="token comment">-- 提交事务，只有操作 A 生效</span>
<span class="token keyword">COMMIT</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）执行结果</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">user</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">user</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">----+----------+----------+--------------+</span>
<span class="token operator">|</span> id <span class="token operator">|</span> username <span class="token operator">|</span> password <span class="token operator">|</span> email        <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+----------+----------+--------------+</span>
<span class="token operator">|</span>  <span class="token number">1</span> <span class="token operator">|</span> root1    <span class="token operator">|</span> root1    <span class="token operator">|</span> xxxx<span class="token variable">@163.com</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+----------+----------+--------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.02</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="autocommit" tabindex="-1"><a class="header-anchor" href="#autocommit" aria-hidden="true">#</a> AUTOCOMMIT</h3><p><strong>MySQL 默认采用隐式提交策略（<code>autocommit</code>）</strong>。每执行一条语句就把这条语句当成一个事务然后进行提交。当出现 <code>START TRANSACTION</code> 语句时，会关闭隐式提交；当 <code>COMMIT</code> 或 <code>ROLLBACK</code> 语句执行后，事务会自动关闭，重新恢复隐式提交。</p><p>通过 <code>set autocommit=0</code> 可以取消自动提交，直到 <code>set autocommit=1</code> 才会提交；<code>autocommit</code> 标记是针对每个连接而不是针对服务器的。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查看 AUTOCOMMIT</span>
<span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;AUTOCOMMIT&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 关闭 AUTOCOMMIT</span>
<span class="token keyword">SET</span> autocommit <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">-- 开启 AUTOCOMMIT</span>
<span class="token keyword">SET</span> autocommit <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="并发修改问题并发修改问题" tabindex="-1"><a class="header-anchor" href="#并发修改问题并发修改问题" aria-hidden="true">#</a> 并发修改问题并发修改问题</h2><p>在并发环境下，事务的隔离性很难保证，因此会出现很多并发一致性问题。</p><h3 id="丢失修改" tabindex="-1"><a class="header-anchor" href="#丢失修改" aria-hidden="true">#</a> 丢失修改</h3><p><strong>『丢失修改』是指一个事务的更新操作被另外一个事务的更新操作替换</strong>。</p><p>如下图所示，T<sub>1</sub> 和 T<sub>2</sub> 两个事务对同一个数据进行修改，T<sub>1</sub> 先修改，T<sub>2</sub> 随后修改，T<sub>2</sub> 的修改覆盖了 T<sub>1</sub> 的修改。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202310092226657.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="脏读" tabindex="-1"><a class="header-anchor" href="#脏读" aria-hidden="true">#</a> 脏读</h3><p><strong>『脏读（dirty read）』是指当前事务可以读取其他事务未提交的数据</strong>。</p><p>如下图所示，T<sub>1</sub> 修改一个数据，T<sub>2</sub> 随后读取这个数据。如果 T<sub>1</sub> 撤销了这次修改，那么 T<sub>2</sub> 读取的数据是脏数据。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202310092226116.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="不可重复读" tabindex="-1"><a class="header-anchor" href="#不可重复读" aria-hidden="true">#</a> 不可重复读</h3><p><strong>『不可重复读（non-repeatable read）』是指一个事务内多次读取同一数据，过程中，该数据被其他事务所修改，导致当前事务多次读取的数据可能不一致</strong>。</p><p>如下图所示，T<sub>2</sub> 读取一个数据，T<sub>1</sub> 对该数据做了修改。如果 T<sub>2</sub> 再次读取这个数据，此时读取的结果和第一次读取的结果不同。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202310092227863.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="幻读" tabindex="-1"><a class="header-anchor" href="#幻读" aria-hidden="true">#</a> 幻读</h3><p><strong>『幻读（phantom read）』是指一个事务内多次读取同一范围的数据，过程中，其他事务在该数据范围新增了数据，导致当前事务未发现新增数据</strong>。</p><p>事务 T<sub>1</sub> 读取某个范围内的记录时，事务 T<sub>2</sub> 在该范围内插入了新的记录，T<sub>1</sub> 再次读取这个范围的数据，此时读取的结果和和第一次读取的结果不同。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202310092227171.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="事务隔离级别" tabindex="-1"><a class="header-anchor" href="#事务隔离级别" aria-hidden="true">#</a> 事务隔离级别</h2><h3 id="事务隔离级别简介" tabindex="-1"><a class="header-anchor" href="#事务隔离级别简介" aria-hidden="true">#</a> 事务隔离级别简介</h3><p>为了解决以上提到的<a href="#%E5%B9%B6%E5%8F%91%E4%BF%AE%E6%94%B9%E9%97%AE%E9%A2%98">『并发修改问题』</a>，SQL 标准提出了四种『事务隔离级别』来应对这些问题。事务隔离级别等级越高，越能保证数据的一致性和完整性，但是执行效率也越低。因此，设置数据库的事务隔离级别时需要做一下权衡。</p><p>事务隔离级别从低到高分别是：</p><ul><li><strong>『读未提交（read uncommitted）』</strong> - 是指，<strong>事务中的修改，即使没有提交，对其它事务也是可见的</strong>。</li><li>**『读已提交（read committed）』 ** - 是指，<strong>事务提交后，其他事务才能看到它的修改</strong>。换句话说，一个事务所做的修改在提交之前对其它事务是不可见的。 <ul><li><strong>读已提交解决了脏读的问题</strong>。</li><li>读已提交是大多数数据库的默认事务隔离级别，如 Oracle。</li></ul></li><li><strong>『可重复读（repeatable read）』</strong> - 是指：<strong>保证在同一个事务中多次读取同样数据的结果是一样的</strong>。 <ul><li><strong>可重复读解决了不可重复读问题</strong>。</li><li><strong>可重复读是 InnoDB 存储引擎的默认事务隔离级别</strong>。</li></ul></li><li><strong>串行化（serializable ）</strong> - 是指，<strong>强制事务串行执行</strong>，对于同一行记录，加读写锁，一旦出现锁冲突，必须等前面的事务释放锁。 <ul><li><strong>串行化解决了幻读问题</strong>。由于强制事务串行执行，自然避免了所有的并发问题。</li><li><strong>串行化策略会在读取的每一行数据上都加锁</strong>，这可能导致大量的超时和锁竞争。这对于高并发应用基本上是不可接受的，所以一般不会采用这个级别。</li></ul></li></ul><p>事务隔离级别对并发修改问题的解决情况：</p><table><thead><tr><th style="text-align:center;">隔离级别</th><th style="text-align:center;">丢失修改</th><th style="text-align:center;">脏读</th><th style="text-align:center;">不可重复读</th><th style="text-align:center;">幻读</th></tr></thead><tbody><tr><td style="text-align:center;">读未提交</td><td style="text-align:center;">✔️️️</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;">读提交</td><td style="text-align:center;">✔️️️</td><td style="text-align:center;">✔️️️</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;">可重复读</td><td style="text-align:center;">✔️️️</td><td style="text-align:center;">✔️️️</td><td style="text-align:center;">✔️️️</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;">可串行化</td><td style="text-align:center;">✔️️️</td><td style="text-align:center;">✔️️️</td><td style="text-align:center;">✔️️️</td><td style="text-align:center;">✔️️️</td></tr></tbody></table><h3 id="查看和设置事务隔离级别" tabindex="-1"><a class="header-anchor" href="#查看和设置事务隔离级别" aria-hidden="true">#</a> 查看和设置事务隔离级别</h3><p>可以通过 <code>SHOW VARIABLES LIKE &#39;transaction_isolation&#39;</code> 语句查看事务隔离级别。</p><p>【示例】查看事务隔离示例</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;transaction_isolation&#39;</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-----------------------+-----------------+</span>
<span class="token operator">|</span> Variable_name         <span class="token operator">|</span> <span class="token keyword">Value</span>           <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------------+-----------------+</span>
<span class="token operator">|</span> transaction_isolation <span class="token operator">|</span> <span class="token keyword">REPEATABLE</span><span class="token operator">-</span><span class="token keyword">READ</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------------+-----------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.03</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MySQL 提供了 <code>SET TRANSACTION</code> 语句，该语句可以改变单个会话或全局的事务隔离级别。语法格式如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token punctuation">[</span><span class="token keyword">SESSION</span> <span class="token operator">|</span> <span class="token keyword">GLOBAL</span><span class="token punctuation">]</span> <span class="token keyword">TRANSACTION</span> <span class="token keyword">ISOLATION</span> <span class="token keyword">LEVEL</span> {<span class="token keyword">READ</span> <span class="token keyword">UNCOMMITTED</span> <span class="token operator">|</span> <span class="token keyword">READ</span> <span class="token keyword">COMMITTED</span> <span class="token operator">|</span> <span class="token keyword">REPEATABLE</span> <span class="token keyword">READ</span> <span class="token operator">|</span> <span class="token keyword">SERIALIZABLE</span>}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，<code>SESSION</code> 和 <code>GLOBAL</code> 关键字用来指定修改的事务隔离级别的范围：</p><ul><li><code>SESSION</code> - 表示修改的事务隔离级别，将应用于当前会话内的所有事务。</li><li><code>GLOBAL</code> - 表示修改的事务隔离级别，将应用于所有会话内的所有事务（即全局修改），且当前已经存在的会话不受影响；</li><li>如果省略 <code>SESSION</code> 和 <code>GLOBAL</code>，表示修改的事务隔离级别，将应用于当前会话内的下一个还未开始的事务。</li></ul><p>【示例】设置事务隔离示例</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 设置事务隔离级别为 READ UNCOMMITTED</span>
<span class="token keyword">SET</span> <span class="token keyword">SESSION</span> <span class="token keyword">TRANSACTION</span> <span class="token keyword">ISOLATION</span> <span class="token keyword">LEVEL</span> <span class="token keyword">READ</span> <span class="token keyword">UNCOMMITTED</span><span class="token punctuation">;</span>

<span class="token comment">-- 设置事务隔离级别为 READ COMMITTED</span>
<span class="token keyword">SET</span> <span class="token keyword">SESSION</span> <span class="token keyword">TRANSACTION</span> <span class="token keyword">ISOLATION</span> <span class="token keyword">LEVEL</span> <span class="token keyword">READ</span> <span class="token keyword">COMMITTED</span><span class="token punctuation">;</span>

<span class="token comment">-- 设置事务隔离级别为 REPEATABLE READ</span>
<span class="token keyword">SET</span> <span class="token keyword">SESSION</span> <span class="token keyword">TRANSACTION</span> <span class="token keyword">ISOLATION</span> <span class="token keyword">LEVEL</span> <span class="token keyword">REPEATABLE</span> <span class="token keyword">READ</span><span class="token punctuation">;</span>

<span class="token comment">-- 设置事务隔离级别为 SERIALIZABLE</span>
<span class="token keyword">SET</span> <span class="token keyword">SESSION</span> <span class="token keyword">TRANSACTION</span> <span class="token keyword">ISOLATION</span> <span class="token keyword">LEVEL</span> <span class="token keyword">SERIALIZABLE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事务隔离级别实现方式" tabindex="-1"><a class="header-anchor" href="#事务隔离级别实现方式" aria-hidden="true">#</a> 事务隔离级别实现方式</h3><p>四种隔离级别具体是如何实现的呢？</p><ul><li>对于「读未提交」隔离级别的事务来说，因为可以读到未提交事务修改的数据，所以直接读取最新的数据就好了；</li><li>对于「串行化」隔离级别的事务来说，通过加读写锁的方式来避免并行访问；</li><li>对于「读提交」和「可重复读」隔离级别的事务来说，它们都是通过 ReadView 来实现的，区别仅在于创建 ReadView 的时机不同。ReadView 可以理解为一个数据快照。 <ul><li>「读提交」隔离级别是在「每个语句执行前」都会重新生成一个 ReadView</li><li>「可重复读」隔离级别是在「启动事务时」生成一个 ReadView，然后整个事务期间都在用这个 ReadView。</li></ul></li></ul><h2 id="mvcc" tabindex="-1"><a class="header-anchor" href="#mvcc" aria-hidden="true">#</a> MVCC</h2><p>MVCC 是 Multi Version Concurrency Control 的缩写，即多版本并发控制。</p><p>MVCC 可视为行级锁的一个变种——它在很多情况下都避免了加锁操作，因此开销更低。不仅是 Mysql，包括 Oracle、PostgreSQL 等其他数据库都实现了各自的 MVCC，实现机制没有统一标准。</p><p><strong>MVCC 是 InnoDB 存储引擎实现事务隔离级别的一种具体方式</strong>。其主要用于实现提交读和可重复读这两种隔离级别。而未提交读隔离级别总是读取最新的数据行，要求很低，无需使用 MVCC。可串行化隔离级别需要对所有读取的行都加锁，单纯使用 MVCC 无法实现。</p><h3 id="mvcc-实现原理" tabindex="-1"><a class="header-anchor" href="#mvcc-实现原理" aria-hidden="true">#</a> MVCC 实现原理</h3><p>加锁能解决多个事务同时执行时出现的并发一致性问题。在实际场景中读操作往往多于写操作，因此又引入了读写锁来避免不必要的加锁操作，例如读和读没有互斥关系。读写锁中读和写操作仍然是互斥的。</p><p>MVCC 的基本思想是：</p><ul><li><strong>保存数据在某个时间点的快照，写操作（<code>DELETE</code>、<code>INSERT</code>、<code>UPDATE</code>）更新最新的版本快照；而读操作去读旧版本快照，没有互斥关系</strong>。这一点和 CopyOnWrite 类似。</li><li>脏读和不可重复读最根本的原因是事务读取到其它事务未提交的修改。在事务进行读取操作时，为了解决脏读和不可重复读问题，<strong>MVCC 规定只能读取已经提交的快照</strong>。当然一个事务可以读取自身未提交的快照，这不算是脏读。</li></ul><h3 id="readview" tabindex="-1"><a class="header-anchor" href="#readview" aria-hidden="true">#</a> ReadView</h3><h4 id="readview-简介" tabindex="-1"><a class="header-anchor" href="#readview-简介" aria-hidden="true">#</a> ReadView 简介</h4><p>ReadView 有四个重要的字段：</p><ul><li><code>m_ids</code> - 指的是在创建 ReadView 时，当前数据库中「活跃事务」的<strong>事务 id 列表</strong>，注意是一个列表，<strong>“活跃事务”指的就是，启动了但还没提交的事务</strong>。</li><li><code>min_trx_id</code> - 指的是在创建 ReadView 时，当前数据库中「活跃事务」中事务 <strong>id 最小的事务</strong>，也就是 m_ids 的最小值。</li><li><code>max_trx_id</code> - 这个并不是 m_ids 的最大值，而是<strong>创建 ReadView 时当前数据库中应该给下一个事务的 id 值</strong>，也就是全局事务中最大的事务 id 值 + 1；</li><li><code>creator_trx_id</code> - 指的是<strong>创建该 ReadView 的事务的事务 id</strong>。</li></ul><p>在创建 ReadView 后，我们可以将记录中的 trx_id 划分为三种情况：</p><ul><li>已提交事务</li><li>已启动但未提交的事务</li><li>未启动的事务</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202310092230178.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="readview-如何判断版本链中哪个版本可见" tabindex="-1"><a class="header-anchor" href="#readview-如何判断版本链中哪个版本可见" aria-hidden="true">#</a> ReadView 如何判断版本链中哪个版本可见</h4><p>一个事务去访问记录的时候，除了自己的更新记录总是可见之外，还有这几种情况：</p><ul><li><code>trx_id == creator_trx_id</code> - 表示 <code>trx_id</code> 版本记录由 ReadView 所代表的当前事务产生，当然可以访问。</li><li><code>trx_id &lt; min_trx_id</code> - 表示 <code>trx_id</code> 版本记录是在创建 ReadView 之前已提交的事务生成的，当前事务可以访问。</li><li><code>trx_id &gt;= max_trx_id</code> - 表示 <code>trx_id</code> 版本记录是在创建 ReadView 之后才启动的事务生成的，当前事务不可以访问。</li><li><code>min_trx_id &lt;= trx_id &lt; max_trx_id</code> - 需要判断 <code>trx_id</code> 是否在 <code>m_ids</code> 列表中 <ul><li>如果 <code>trx_id</code> 在 <code>m_ids</code> 列表中，表示生成 <code>trx_id</code> 版本记录的事务依然活跃（未提交事务），当前事务不可以访问。</li><li>如果 <code>trx_id</code> 不在 <code>m_ids</code> 列表中，表示生成 <code>trx_id</code> 版本记录的事务已提交，当前事务可以访问。</li></ul></li></ul><p>这种通过「版本链」来控制并发事务访问同一个记录时的行为就叫 MVCC（多版本并发控制）。</p><h3 id="undo-日志" tabindex="-1"><a class="header-anchor" href="#undo-日志" aria-hidden="true">#</a> Undo 日志</h3><p>对于使用 InnoDB 存储引擎的数据库表，它的聚簇索引记录中都包含下面两个隐藏列：</p><ul><li><code>trx_id</code>，当一个事务对某条聚簇索引记录进行改动时，就会<strong>把该事务的事务 id 记录在 trx_id 隐藏列里</strong>；</li><li><code>roll_pointer</code>，每次对某条聚簇索引记录进行改动时，都会把旧版本的记录写入到 Undo 日志中，然后<strong>这个隐藏列是个指针，指向每一个旧版本记录</strong>，于是就可以通过它找到修改前的记录。</li></ul><p>MVCC 的多版本指的是多个版本的快照，快照存储在 Undo 日志中。该日志通过回滚指针 <code>roll_pointer</code> 把一个数据行的所有快照链接起来，构成一个<strong>版本链</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202310092231914.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="mvcc-实现可重复读" tabindex="-1"><a class="header-anchor" href="#mvcc-实现可重复读" aria-hidden="true">#</a> MVCC 实现可重复读</h3><p><strong>可重复读隔离级别只有在启动事务时才会创建 ReadView，然后整个事务期间都使用这个 ReadView</strong>。</p><p>举个例子，假设有两个事务依次执行以下操作：</p><ul><li>初始，表中 id = 1 的 value 列值为 0。</li><li>事务 2 读取数据，value 为 0；</li><li>事务 1 将 value 设为 100；</li><li>事务 2 读取数据，value 为 0；</li><li>事务 1 提交事务；</li><li>事务 2 读取数据，value 依旧为 0；</li></ul><p>以上操作，如下图所示。T2 事务在事务过程中，是否可以看到 T1 事务的修改，可以根据 [ReadView 如何判断版本链中哪个版本可见](#ReadView 如何判断版本链中哪个版本可见) 规则判断。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202310092310983.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>从图中不难看出：</p><ul><li>对于 <code>trx_id = 100</code> 的版本记录，比对 T2 事务 ReadView ，<code>trx_id &lt; min_trx_id</code>，因此在 T2 事务中的任意时刻都可见；</li><li>对于 <code>trx_id = 101</code> 的版本记录，比对 T2 事务 ReadView ，可以看出 <code>min_trx_id &lt;= trx_id &lt; max_trx_id</code> ，且 <code>trx_id</code> 在 <code>m_ids</code> 中，因此 T2 事务中不可见。</li></ul><p>综上所述，在 T2 事务中，自始至终只能看到 <code>trx_id = 100</code> 的版本记录。</p><h3 id="mvcc-实现读已提交" tabindex="-1"><a class="header-anchor" href="#mvcc-实现读已提交" aria-hidden="true">#</a> MVCC 实现读已提交</h3><p><strong>读已提交隔离级别每次读取数据时都会创建一个 ReadView</strong>。</p><p>举个例子，假设有两个事务依次执行以下操作：</p><ul><li>初始，表中 id = 1 的 value 列值为 100。</li><li>事务 2 读取数据（创建 ReadView），value 为 0；</li><li>事务 1 将 value 设为 100；</li><li>事务 2 读取数据（创建 ReadView），value 为 0；</li><li>事务 1 提交事务；</li><li>事务 2 读取数据（创建 ReadView），value 为 100；</li></ul><p>以上操作，如下图所示，T2 事务在事务过程中，是否可以看到其他事务的修改，可以根据 [ReadView 如何判断版本链中哪个版本可见](#ReadView 如何判断版本链中哪个版本可见) 规则判断。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202310092320423.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>从图中不难看出：</p><ul><li>对于 <code>trx_id = 100</code> 的版本记录，比对 T2 事务 ReadView ，<code>trx_id &lt; min_trx_id</code>，因此在 T2 事务中的任意时刻都可见；</li><li>对于 <code>trx_id = 101</code> 的版本记录，比对 T2 事务 ReadView ，可以看出第二次查询时（T1 更新未提交），<code>min_trx_id &lt;= trx_id &lt; max_trx_id</code> ，且 <code>trx_id</code> 在 <code>m_ids</code> 中，因此 T2 事务中不可见；而第三次查询时（T1 更新已提交），<code>trx_id &lt; min_trx_id</code>，因此在 T2 事务中可见；</li></ul><p>综上所述，在 T2 事务中，当 T1 事务提交前，可读取到的是<code>trx_id = 100</code> 的版本记录；当 T1 事务提交后，可读取到的是<code>trx_id = 101</code> 的版本记录。</p><h3 id="快照读和当前读" tabindex="-1"><a class="header-anchor" href="#快照读和当前读" aria-hidden="true">#</a> 快照读和当前读</h3><p>**『快照读』**读取的是快照数据。不加锁的普通 <code>SELECT</code> 都属于快照读，例如：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> t<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>扩展：</p><ul><li><p>读已提交隔离级别每次 SELECT 都生成一个快照读。</p></li><li><p>可重复读隔离级别开启事务后第一个 SELECT 语句才是快照读的地方，而不是一开启事务就快照读。</p></li></ul></blockquote><p>**『当前读』**读取的是最新的提交数据。</p><p>InnoDB 给每一个事务生成一个唯一事务 ID 的方法称为生成快照，因此这种场景称为<strong>快照读</strong>。</p><p>当前读的场景有下面几种：</p><ul><li><code>INSERT</code> - 插入操作</li><li><code>UPDATE</code> - 更新操作</li><li><code>DELETE</code> - 删除操作</li><li><code>SELECT ... LOCK IN SHARE MODE</code> - 加共享锁</li><li><code>SELECT ... FOR UPDATE</code> - 加独享锁</li></ul><h3 id="mvcc-next-key-lock-解决幻读" tabindex="-1"><a class="header-anchor" href="#mvcc-next-key-lock-解决幻读" aria-hidden="true">#</a> MVCC + Next-Key Lock 解决幻读</h3>`,118),p={href:"https://xiaolincoding.com/mysql/transaction/phantom.html",target:"_blank",rel:"noopener noreferrer"},u=t('<ul><li>针对<strong>快照读</strong>（普通 <code>SELECT</code> 语句），是<strong>通过 MVCC 方式解决了幻读</strong>，因为可重复读隔离级别下，事务执行过程中看到的数据，一直跟这个事务启动时看到的数据是一致的，即使中途有其他事务插入了一条数据，是查询不出来这条数据的，所以就很好了避免幻读问题。</li><li>针对<strong>当前读</strong>（<code>SELECT ... FOR UPDATE</code> 等语句），是<strong>通过 Next-Key Lock（记录锁+间隙锁）方式解决了幻读</strong>，因为当执行 <code>SELECT ... FOR UPDATE</code> 语句的时候，会加上 Next-Key Lock，如果有其他事务在 Next-Key Lock 锁范围内插入了一条记录，那么这个插入语句就会被阻塞，无法成功插入，所以就很好了避免幻读问题。</li></ul><p>对于「读提交」和「可重复读」隔离级别的事务来说，它们是通过 ReadView 来实现的，它们的区别在于创建 ReadView 的时机不同：</p><ul><li>「读提交」隔离级别是在每个 <code>SELECT</code> 都会生成一个新的 ReadView，也意味着，事务期间的多次读取同一条数据，前后两次读的数据可能会出现不一致，因为可能这期间另外一个事务修改了该记录，并提交了事务。</li><li>「可重复读」隔离级别是启动事务时生成一个 ReadView，然后整个事务期间都在用这个 ReadView，这样就保证了在事务期间读到的数据都是事务启动前的记录。</li></ul><p>这两个隔离级别实现是通过「事务的 ReadView 里的字段」和「记录中的两个隐藏列」的比对，来控制并发事务访问同一个记录时的行为，这就叫 MVCC（多版本并发控制）。</p><p>在可重复读隔离级别中，普通的 <code>SELECT</code> 语句就是基于 MVCC 实现的快照读，也就是不会加锁的。而 <code>SELECT ... FOR UPDATE</code> 语句就不是快照读了，而是当前读了，也就是每次读都是拿到最新版本的数据，但是它会对读到的记录加上 Next-Key Lock 锁。</p><h2 id="分布式事务" tabindex="-1"><a class="header-anchor" href="#分布式事务" aria-hidden="true">#</a> 分布式事务</h2><p>在单一数据节点中，事务仅限于对单一数据库资源的访问控制，称之为 <strong>本地事务</strong>。几乎所有的成熟的关系型数据库都提供了对本地事务的原生支持。</p><p><strong>分布式事务指的是事务操作跨越多个节点，并且要求满足事务的 ACID 特性。</strong></p><p>分布式事务的常见方案如下：</p><ul><li><strong>两阶段提交（2PC）</strong> - 将事务的提交过程分为两个阶段来进行处理：准备阶段和提交阶段。参与者将操作成败通知协调者，再由协调者根据所有参与者的反馈情报决定各参与者是否要提交操作还是中止操作。</li><li><strong>三阶段提交（3PC）</strong> - 与二阶段提交不同的是，引入超时机制。同时在协调者和参与者中都引入超时机制。将二阶段的准备阶段拆分为 2 个阶段，插入了一个 preCommit 阶段，使得原先在二阶段提交中，参与者在准备之后，由于协调者发生崩溃或错误，而导致参与者处于无法知晓是否提交或者中止的“不确定状态”所产生的可能相当长的延时的问题得以解决。</li><li><strong>补偿事务（TCC）</strong><ul><li><strong>Try</strong> - 操作作为一阶段，负责资源的检查和预留。</li><li><strong>Confirm</strong> - 操作作为二阶段提交操作，执行真正的业务。</li><li><strong>Cancel</strong> - 是预留资源的取消。</li></ul></li><li><strong>本地消息表</strong> - 在事务主动发起方额外新建事务消息表，事务发起方处理业务和记录事务消息在本地事务中完成，轮询事务消息表的数据发送事务消息，事务被动方基于消息中间件消费事务消息表中的事务。</li><li><strong>MQ 事务</strong> - 基于 MQ 的分布式事务方案其实是对本地消息表的封装。</li><li><strong>SAGA</strong> - Saga 事务核心思想是将长事务拆分为多个本地短事务，由 Saga 事务协调器协调，如果正常结束那就正常完成，如果某个步骤失败，则根据相反顺序一次调用补偿操作。</li></ul><p>分布式事务方案分析：</p><ul><li>2PC/3PC 依赖于数据库，能够很好的提供强一致性和强事务性，但相对来说延迟比较高，比较适合传统的单体应用，在同一个方法中存在跨库操作的情况，不适合高并发和高性能要求的场景。</li><li>TCC 适用于执行时间确定且较短，实时性要求高，对数据一致性要求高，比如互联网金融企业最核心的三个服务：交易、支付、账务。</li><li>本地消息表/MQ 事务 都适用于事务中参与方支持操作幂等，对一致性要求不高，业务上能容忍数据不一致到一个人工检查周期，事务涉及的参与方、参与环节较少，业务上有对账/校验系统兜底。</li><li>Saga 事务 由于 Saga 事务不能保证隔离性，需要在业务层控制并发，适合于业务场景事务并发操作同一资源较少的情况。 Saga 相比缺少预提交动作，导致补偿动作的实现比较麻烦，例如业务是发送短信，补偿动作则得再发送一次短信说明撤销，用户体验比较差。Saga 事务较适用于补偿动作容易处理的场景。</li></ul>',12),k={href:"https://dunwu.github.io/waterdrop/pages/e1881c/",target:"_blank",rel:"noopener noreferrer"},g=t(`<h2 id="事务最佳实践" tabindex="-1"><a class="header-anchor" href="#事务最佳实践" aria-hidden="true">#</a> 事务最佳实践</h2><p>高并发场景下的事务到底该如何调优？</p><h3 id="尽量使用低级别事务隔离" tabindex="-1"><a class="header-anchor" href="#尽量使用低级别事务隔离" aria-hidden="true">#</a> 尽量使用低级别事务隔离</h3><p>结合业务场景，尽量使用低级别事务隔离</p><h3 id="避免行锁升级表锁" tabindex="-1"><a class="header-anchor" href="#避免行锁升级表锁" aria-hidden="true">#</a> 避免行锁升级表锁</h3><p>在 InnoDB 中，行锁是通过索引实现的，如果不通过索引条件检索数据，行锁将会升级到表锁。我们知道，表锁是会严重影响到整张表的操作性能的，所以应该尽力避免。</p><h3 id="缩小事务范围" tabindex="-1"><a class="header-anchor" href="#缩小事务范围" aria-hidden="true">#</a> 缩小事务范围</h3><p>有时候，数据库并发访问量太大，会出现以下异常：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MySQLQueryInterruptedException: Query execution was interrupted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>高并发时对一条记录进行更新的情况下，由于更新记录所在的事务还可能存在其他操作，导致一个事务比较长，当有大量请求进入时，就可能导致一些请求同时进入到事务中。</p><p>又因为锁的竞争是不公平的，当多个事务同时对一条记录进行更新时，极端情况下，一个更新操作进去排队系统后，可能会一直拿不到锁，最后因超时被系统打断踢出。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200630112600.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如上图中的操作，虽然都是在一个事务中，但锁的申请在不同时间，只有当其他操作都执行完，才会释放所有锁。因为扣除库存是更新操作，属于行锁，这将会影响到其他操作该数据的事务，所以我们应该尽量避免长时间地持有该锁，尽快释放该锁。又因为先新建订单和先扣除库存都不会影响业务，所以我们可以将扣除库存操作放到最后，也就是使用执行顺序 1，以此尽量减小锁的持有时间。</p><p><strong>在 InnoDB 事务中，行锁是在需要的时候才加上的，但并不是不需要了就立刻释放，而是要等到事务结束时才释放。这个就是两阶段锁协议。</strong></p><p>知道了这个设定，对我们使用事务有什么帮助呢？那就是，如果你的事务中需要锁多个行，要把最可能造成锁冲突、最可能影响并发度的锁尽量往后放。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,16),m={href:"https://book.douban.com/subject/23008813/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://time.geekbang.org/column/intro/139",target:"_blank",rel:"noopener noreferrer"};function b(v,T){const a=i("ExternalLinkIcon");return l(),r("div",null,[c,n("p",null,[s("对于幻读现象，不建议将隔离级别升级为串行化，因为这会导致数据库并发时性能很差。MySQL InnoDB 引擎的默认隔离级别虽然是「可重复读」，但是它很大程度上避免幻读现象（并不是完全解决了，详见这篇"),n("a",p,[s("文章 (opens new window)"),e(a)]),s("），解决的方案有两种：")]),u,n("blockquote",null,[n("p",null,[s("分布式事务详细说明、分析请参考："),n("a",k,[s("分布式事务基本原理"),e(a)])])]),g,n("ul",null,[n("li",null,[n("a",m,[s("《高性能 MySQL》"),e(a)])]),n("li",null,[n("a",h,[s("MySQL 实战 45 讲"),e(a)])])])])}const x=o(d,[["render",b],["__file","04.Mysql事务.html.vue"]]);export{x as default};
