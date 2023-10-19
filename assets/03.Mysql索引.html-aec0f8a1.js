import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c,a as n,b as a,d as e,e as i}from"./app-a0e98cac.js";const l={},r=i(`<h1 id="mysql-索引" tabindex="-1"><a class="header-anchor" href="#mysql-索引" aria-hidden="true">#</a> Mysql 索引</h1><blockquote><p>索引是提高 MySQL 查询性能的一个重要途径，但过多的索引可能会导致过高的磁盘使用率以及过高的内存占用，从而影响应用程序的整体性能。应当尽量避免事后才想起添加索引，因为事后可能需要监控大量的 SQL 才能定位到问题所在，而且添加索引的时间肯定是远大于初始添加索引所需要的时间，可见索引的添加也是非常有技术含量的。</p><p>接下来将向你展示一系列创建高性能索引的策略，以及每条策略其背后的工作原理。但在此之前，先了解与索引相关的一些算法和数据结构，将有助于更好的理解后文的内容。</p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202310162333557.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="索引简介" tabindex="-1"><a class="header-anchor" href="#索引简介" aria-hidden="true">#</a> 索引简介</h2><p><strong>索引是数据库为了提高查找效率的一种数据结构</strong>。</p><p>索引对于良好的性能非常关键，在数据量小且负载较低时，不恰当的索引对于性能的影响可能还不明显；但随着数据量逐渐增大，性能则会急剧下降。因此，索引优化应该是查询性能优化的最有效手段。</p><h3 id="索引的优缺点" tabindex="-1"><a class="header-anchor" href="#索引的优缺点" aria-hidden="true">#</a> 索引的优缺点</h3><p>B 树是最常见的索引，按照顺序存储数据，所以 Mysql 可以用来做 <code>ORDER BY</code> 和 <code>GROUP BY</code> 操作。因为数据是有序的，所以 B 树也就会将相关的列值都存储在一起。最后，因为索引中存储了实际的列值，所以某些查询只使用索引就能够完成全部查询。</p><p>✔️️️️ 索引的优点：</p><ul><li><strong>索引大大减少了服务器需要扫描的数据量</strong>，从而加快检索速度。</li><li><strong>索引可以帮助服务器避免排序和临时表</strong>。</li><li><strong>索引可以将随机 I/O 变为顺序 I/O</strong>。</li><li>支持行级锁的数据库，如 InnoDB 会在访问行的时候加锁。<strong>使用索引可以减少访问的行数，从而减少锁的竞争，提高并发</strong>。</li><li>唯一索引可以确保每一行数据的唯一性，通过使用索引，可以在查询的过程中使用优化隐藏器，提高系统的性能。</li></ul><p>❌ 索引的缺点：</p><ul><li><strong>创建和维护索引要耗费时间</strong>，这会随着数据量的增加而增加。</li><li><strong>索引需要占用额外的物理空间</strong>，除了数据表占数据空间之外，每一个索引还要占一定的物理空间，如果要建立组合索引那么需要的空间就会更大。</li><li><strong>写操作（<code>INSERT</code>/<code>UPDATE</code>/<code>DELETE</code>）时很可能需要更新索引，导致数据库的写操作性能降低</strong>。</li></ul><h3 id="何时使用索引" tabindex="-1"><a class="header-anchor" href="#何时使用索引" aria-hidden="true">#</a> 何时使用索引</h3><p>✔️️️️ 什么情况<strong>适用</strong>索引？</p><ul><li><strong>字段的数值有唯一性的限制</strong>，如用户名。</li><li><strong>频繁作为 <code>WHERE</code> 条件或 <code>JOIN</code> 条件的字段，尤其在数据表大的情况下</strong></li><li><strong>频繁用于 <code>GROUP BY</code> 或 <code>ORDER BY</code> 的字段</strong>。将该字段作为索引，查询时就无需再排序了，因为 B+ 树</li><li><strong>DISTINCT 字段需要创建索引</strong>。</li></ul><p>❌ 什么情况<strong>不适用</strong>索引？</p><ul><li><strong>频繁写操作</strong>（ <code>INSERT</code>/<code>UPDATE</code>/<code>DELETE</code> ），也就意味着需要更新索引。</li><li><strong>很少作为 <code>WHERE</code> 条件或 <code>JOIN</code> 条件的字段</strong>，也就意味着索引会经常无法命中，没有意义，还增加空间开销。</li><li><strong>非常小的表</strong>，对于非常小的表，大部分情况下简单的全表扫描更高效。</li><li><strong>特大型的表</strong>，建立和使用索引的代价将随之增长。可以考虑使用分区技术或 Nosql。</li></ul><h2 id="索引的数据结构" tabindex="-1"><a class="header-anchor" href="#索引的数据结构" aria-hidden="true">#</a> 索引的数据结构</h2><p>在 Mysql 中，<strong>索引是在存储引擎层而不是服务器层实现的</strong>。所以，并没有统一的索引标准；不同存储引擎的索引的数据结构也不相同。下面是 Mysql 常用存储引擎对一些主要索引数据结构的支持</p><table><thead><tr><th>索引数据结构/存储引擎</th><th>InnoDB 引擎</th><th>MyISAM 引擎</th><th>Memory 引擎</th></tr></thead><tbody><tr><td><strong>B+Tree 索引</strong></td><td>✔️️️️️</td><td>✔️️️️️</td><td>✔️️️️️</td></tr><tr><td><strong>Hash 索引</strong></td><td>❌</td><td>❌</td><td>✔️️️️️</td></tr><tr><td><strong>Full Text 索引</strong></td><td>✔️️️️️</td><td>✔️️️️️</td><td>❌</td></tr></tbody></table><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3><p>数组是用连续的内存空间来存储数据，并且支持随机访问。</p><p>有序数组可以使用二分查找法，其时间复杂度为 <code>O(log n)</code>，无论是等值查询还是范围查询，都非常高效。</p><p>但数组有两个重要限制：</p><ul><li>数组的空间大小固定，如果要扩容只能采用复制数组的方式。</li><li>插入、删除时间复杂度为 <code>O(n)</code>。</li></ul><p>这意味着，如果使用数组作为索引，如果要保证数组有序，其更新操作代价高昂。</p><h3 id="哈希索引" tabindex="-1"><a class="header-anchor" href="#哈希索引" aria-hidden="true">#</a> 哈希索引</h3><p>哈希表是一种以键 - 值（key-value）对形式存储数据的结构，我们只要输入待查找的值即 key，就可以找到其对应的值即 Value。</p><p><strong>哈希表</strong> 使用 <strong>哈希函数</strong> 组织数据，以支持快速插入和搜索的数据结构。哈希表的本质是一个数组，其思路是：使用 Hash 函数将 Key 转换为数组下标，利用数组的随机访问特性，使得我们能在 <code>O(1)</code> 的时间代价内完成检索。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220320201844.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>有两种不同类型的哈希表：<strong>哈希集合</strong> 和 <strong>哈希映射</strong>。</p><ul><li><strong>哈希集合</strong> 是集合数据结构的实现之一，用于存储非重复值。</li><li><strong>哈希映射</strong> 是映射 数据结构的实现之一，用于存储键值对。</li></ul><p>哈希索引基于哈希表实现，<strong>只适用于等值查询</strong>。对于每一行数据，哈希索引都会将所有的索引列计算一个哈希码（<code>hashcode</code>），哈希码是一个较小的值。哈希索引将所有的哈希码存储在索引中，同时在哈希表中保存指向每个数据行的指针。</p><p>在 Mysql 中，只有 Memory 存储引擎显示支持哈希索引。</p><p>✔️️️️️ 哈希索引的<strong>优点</strong>：</p><ul><li>因为索引数据结构紧凑，所以<strong>查询速度非常快</strong>。</li></ul><p>❌ 哈希索引的<strong>缺点</strong>：</p><ul><li><strong>只支持等值比较查询</strong> - 包括 <code>=</code>、<code>IN()</code>、<code>&lt;=&gt;</code>。 <ul><li><strong>不支持范围查询</strong>，如 <code>WHERE price &gt; 100</code>。</li><li><strong>不支持模糊查询</strong>，如 <code>%</code> 开头。</li></ul></li><li><strong>无法用于排序</strong> - 因为 Hash 索引指向的数据是无序的，因此无法起到排序优化的作用。</li><li><strong>不支持联合索引的最左侧原则</strong> - 对于联合索引来说，Hash 索引在计算 Hash 值的时候是将索引键合并后再一起计算 Hash 值，所以不会针对每个索引单独计算 Hash 值。因此如果用到联合索引的一个或者几个索引时，联合索引无法被利用。例如：在数据列 (A,B) 上建立哈希索引，如果查询只有数据列 A，无法使用该索引。</li><li><strong>不能用索引中的值来避免读取行</strong> - 因为哈希索引只包含哈希值和行指针，不存储字段，所以不能使用索引中的值来避免读取行。不过，访问内存中的行的速度很快，所以大部分情况下这一点对性能影响不大。</li><li>哈希索引有<strong>可能出现哈希冲突</strong><ul><li>出现哈希冲突时，必须遍历链表中所有的行指针，逐行比较，直到找到符合条件的行。</li><li>如果哈希冲突多的话，维护索引的代价会很高。</li></ul></li></ul><blockquote><p>提示：因为种种限制，所以哈希索引只适用于特定的场合。而一旦使用哈希索引，则它带来的性能提升会非常显著。</p></blockquote><h3 id="b-树索引" tabindex="-1"><a class="header-anchor" href="#b-树索引" aria-hidden="true">#</a> B 树索引</h3><p>B 树是最常见的索引，按照顺序存储数据，所以 Mysql 可以用来做 <code>ORDER BY</code> 和 <code>GROUP BY</code> 操作。因为数据是有序的，所以 B 树也就会将相关的列值都存储在一起。最后，因为索引中存储了实际的列值，所以某些查询只使用索引就能够完成全部查询。</p><p>通常我们所说的索引是指 B-Tree 索引，它是目前关系型数据库中查找数据最为常用和有效的索引，大多数存储引擎都支持这种索引。使用 B-Tree 这个术语，是因为 MySQL 在<code>CREATE TABLE</code>或其它语句中使用了这个关键字，但实际上不同的存储引擎可能使用不同的数据结构，比如 InnoDB 就是使用的 B+Tree。</p><p>B+Tree 中的 B 是指<code>balance</code>，意为平衡。需要注意的是，B+树索引并不能找到一个给定键值的具体行，它找到的只是被查找数据行所在的页，接着数据库会把页读入到内存，再在内存中进行查找，最后得到要查找的数据。</p><h4 id="二叉搜索树" tabindex="-1"><a class="header-anchor" href="#二叉搜索树" aria-hidden="true">#</a> 二叉搜索树</h4><p>二叉搜索树的特点是：每个节点的左儿子小于父节点，父节点又小于右儿子。其查询时间复杂度是 $$O(log(N))$$。</p><p>当然为了维持 $$O(log(N))$$ 的查询复杂度，你就需要保持这棵树是平衡二叉树。为了做这个保证，更新的时间复杂度也是 $$O(log(N))$$。</p><p>随着数据库中数据的增加，索引本身大小随之增加，不可能全部存储在内存中，因此索引往往以索引文件的形式存储的磁盘上。这样的话，索引查找过程中就要产生磁盘 I/O 消耗，相对于内存存取，I/O 存取的消耗要高几个数量级。可以想象一下一棵几百万节点的二叉树的深度是多少？如果将这么大深度的一颗二叉树放磁盘上，每读取一个节点，需要一次磁盘的 I/O 读取，整个查找的耗时显然是不能够接受的。那么如何减少查找过程中的 I/O 存取次数？</p><p>一种行之有效的解决方法是减少树的深度，将<strong>二叉树变为 N 叉树</strong>（多路搜索树），而 <strong>B+ 树就是一种多路搜索树</strong>。</p><h4 id="b-树" tabindex="-1"><a class="header-anchor" href="#b-树" aria-hidden="true">#</a> B+ 树</h4><p>B+ 树索引适用于<strong>全键值查找</strong>、<strong>键值范围查找</strong>和<strong>键前缀查找</strong>，其中键前缀查找只适用于最左前缀查找。</p><p>理解 B+Tree 时，只需要理解其最重要的两个特征即可：</p><ul><li>第一，所有的关键字（可以理解为数据）都存储在叶子节点，非叶子节点并不存储真正的数据，所有记录节点都是按键值大小顺序存放在同一层叶子节点上。</li><li>其次，所有的叶子节点由指针连接。如下图为简化了的 B+Tree。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200304235424.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="聚簇索引和非聚簇索引" tabindex="-1"><a class="header-anchor" href="#聚簇索引和非聚簇索引" aria-hidden="true">#</a> 聚簇索引和非聚簇索引</h4><p>根据叶子节点的内容，索引类型分为主键索引和非主键索引。</p><ul><li>主键索引又被称为**『聚簇索引（clustered index）』，其叶子节点存的是整行数据**。 <ul><li>聚簇表示数据行和相邻的键值紧凑地存储在一起，因为数据紧凑，所以访问快。</li><li>因为无法同时把数据行存放在两个不同的地方，所以<strong>一个表只能有一个聚簇索引</strong>。</li><li>InnoDB 的聚簇索引实际是在同一个结构中保存了 B 树的索引和数据行。</li></ul></li><li>非主键索引又被称为**『二级索引（secondary index）』，其叶子节点存的是主键的值**。数据存储在一个位置，索引存储在另一个位置，索引中包含指向数据存储位置的指针。可以有多个，小于 249 个。</li></ul><p><strong>聚簇索引和非聚簇索引的查询有什么区别</strong></p><ul><li>如果语句是 <code>select * from T where ID=500</code>，即聚簇索引查询方式，则只需要搜索主键（ID）索引树；</li><li>如果语句是 <code>select * from T where k=5</code>，即非聚簇索引查询方式，则需要先搜索 k 索引树，得到 ID 的值为 500，再到 ID 索引树搜索一次。这个过程称为<strong>回表</strong>。</li></ul><p>也就是说，<strong>基于非聚簇索引的查询需要多扫描一棵索引树</strong>。因此，我们在应用中应该尽量使用主键查询。</p><p><strong>显然，主键长度越小，非聚簇索引的叶子节点就越小，非聚簇索引占用的空间也就越小。</strong></p><p>在创建表时，InnoDB 存储引擎会根据不同的场景选择不同的列作为索引：</p><ul><li>如果有主键，默认会使用主键作为聚簇索引的索引键（key）；</li><li>如果没有主键，就选择第一个不包含 NULL 值的唯一列作为聚簇索引的索引键（key）；</li><li>在上面两个都没有的情况下，InnoDB 将自动生成一个隐式自增 id 列作为聚簇索引的索引键（key）；</li></ul><p>自增主键是指自增列上定义的主键，在建表语句中一般是这么定义的： <code>NOT NULL PRIMARY KEY AUTO_INCREMENT</code>。从性能和存储空间方面考量，自增主键往往是更合理的选择。有没有什么场景适合用业务字段直接做主键的呢？还是有的。比如，有些业务的场景需求是这样的：</p><ul><li>只有一个索引；</li><li>该索引必须是唯一索引。</li></ul><p>由于没有其他索引，所以也就不用考虑其他索引的叶子节点大小的问题。</p><p>这时候我们就要优先考虑上一段提到的“尽量使用主键查询”原则，直接将这个索引设置为主键，可以避免每次查询需要搜索两棵树。</p><h3 id="全文索引" tabindex="-1"><a class="header-anchor" href="#全文索引" aria-hidden="true">#</a> 全文索引</h3><p>MyISAM 存储引擎支持全文索引，用于查找文本中的关键词，而不是直接比较是否相等。查找条件使用 MATCH AGAINST，而不是普通的 WHERE。</p><p>全文索引一般使用倒排索引实现，它记录着关键词到其所在文档的映射。</p><p>InnoDB 存储引擎在 MySQL 5.6.4 版本中也开始支持全文索引。</p><h3 id="空间数据索引" tabindex="-1"><a class="header-anchor" href="#空间数据索引" aria-hidden="true">#</a> 空间数据索引</h3><p>MyISAM 存储引擎支持空间数据索引（R-Tree），可以用于地理数据存储。空间数据索引会从所有维度来索引数据，可以有效地使用任意维度来进行组合查询。</p><p>必须使用 GIS 相关的函数来维护数据。</p><h2 id="索引的类型" tabindex="-1"><a class="header-anchor" href="#索引的类型" aria-hidden="true">#</a> 索引的类型</h2><p>主流的关系型数据库一般都支持以下索引类型：</p><h3 id="主键索引-primary" tabindex="-1"><a class="header-anchor" href="#主键索引-primary" aria-hidden="true">#</a> 主键索引（<code>PRIMARY</code>）</h3><p>主键索引：一种特殊的唯一索引，不允许有空值。一个表只能有一个主键（在 InnoDB 中本质上即聚簇索引），一般是在建表的时候同时创建主键索引。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>table<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
    <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="唯一索引-unique" tabindex="-1"><a class="header-anchor" href="#唯一索引-unique" aria-hidden="true">#</a> 唯一索引（<code>UNIQUE</code>）</h3><p>唯一索引：<strong>索引列的值必须唯一，但允许有空值</strong>。如果是组合索引，则列值的组合必须唯一。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>table<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">UNIQUE</span> indexName <span class="token punctuation">(</span>title<span class="token punctuation">(</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="普通索引-index" tabindex="-1"><a class="header-anchor" href="#普通索引-index" aria-hidden="true">#</a> 普通索引（<code>INDEX</code>）</h3><p>普通索引：最基本的索引，没有任何限制。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>table<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">INDEX</span> index_name <span class="token punctuation">(</span>title<span class="token punctuation">(</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全文索引-fulltext" tabindex="-1"><a class="header-anchor" href="#全文索引-fulltext" aria-hidden="true">#</a> 全文索引（<code>FULLTEXT</code>）</h3><p>全文索引：主要用来查找文本中的关键字，而不是直接与索引中的值相比较。</p><p>全文索引跟其它索引大不相同，它更像是一个搜索引擎，而不是简单的 WHERE 语句的参数匹配。全文索引配合 <code>match against</code> 操作使用，而不是一般的 WHERE 语句加 LIKE。它可以在 <code>CREATE TABLE</code>，<code>ALTER TABLE</code> ，<code>CREATE INDEX</code> 使用，不过目前只有 <code>char</code>、<code>varchar</code>，<code>text</code> 列上可以创建全文索引。值得一提的是，在数据量较大时候，现将数据放入一个没有全局索引的表中，然后再用 <code>CREATE INDEX</code> 创建全文索引，要比先为一张表建立全文索引然后再将数据写入的速度快很多。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>table<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
    <span class="token identifier"><span class="token punctuation">\`</span>content<span class="token punctuation">\`</span></span> <span class="token keyword">text</span> <span class="token keyword">CHARACTER</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    FULLTEXT <span class="token punctuation">(</span>content<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="联合索引" tabindex="-1"><a class="header-anchor" href="#联合索引" aria-hidden="true">#</a> 联合索引</h3><p>组合索引：多个字段上创建的索引，只有在查询条件中使用了创建索引时的第一个字段，索引才会被使用。使用组合索引时遵循最左前缀集合。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>table<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">INDEX</span> index_name <span class="token punctuation">(</span>title<span class="token punctuation">(</span>length<span class="token punctuation">)</span><span class="token punctuation">,</span> title<span class="token punctuation">(</span>length<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="索引优化策略" tabindex="-1"><a class="header-anchor" href="#索引优化策略" aria-hidden="true">#</a> 索引优化策略</h2><h3 id="索引基本原则" tabindex="-1"><a class="header-anchor" href="#索引基本原则" aria-hidden="true">#</a> 索引基本原则</h3><ul><li><strong>索引不是越多越好，不要为所有列都创建索引</strong>。要考虑到索引的维护代价、空间占用和查询时回表的代价。索引一定是按需创建的，并且要尽可能确保足够轻量。一旦创建了多字段的联合索引，我们要考虑尽可能利用索引本身完成数据查询，减少回表的成本。</li><li>要<strong>尽量避免冗余和重复索引</strong>。</li><li>要<strong>考虑删除未使用的索引</strong>。</li><li><strong>尽量的扩展索引，不要新建索引</strong>。</li></ul><h3 id="覆盖索引" tabindex="-1"><a class="header-anchor" href="#覆盖索引" aria-hidden="true">#</a> 覆盖索引</h3><p><strong>覆盖索引是指：索引上的信息足够满足查询请求，不需要回表查询数据</strong>。</p><p>【示例】范围查询</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> T <span class="token punctuation">(</span>
ID <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
k <span class="token keyword">int</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span><span class="token punctuation">,</span>
s <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
<span class="token keyword">index</span> k<span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">engine</span><span class="token operator">=</span><span class="token keyword">InnoDB</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> T <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;aa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&#39;bb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">&#39;cc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token string">&#39;ee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">600</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token string">&#39;ff&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">700</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token string">&#39;gg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> T <span class="token keyword">where</span> k <span class="token operator">between</span> <span class="token number">3</span> <span class="token operator">and</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要执行几次树的搜索操作，会扫描多少行？</p><ol><li>在 k 索引树上找到 k=3 的记录，取得 ID = 300；</li><li>再到 ID 索引树查到 ID=300 对应的 R3；</li><li>在 k 索引树取下一个值 k=5，取得 ID=500；</li><li>再回到 ID 索引树查到 ID=500 对应的 R4；</li><li>在 k 索引树取下一个值 k=6，不满足条件，循环结束。</li></ol><p>在这个过程中，<strong>回到聚簇索引树搜索的过程，称为『回表』</strong>。可以看到，这个查询过程读了 k 索引树的 3 条记录（步骤 1、3 和 5），回表了两次（步骤 2 和 4）。</p><p>如果执行的语句是 <code>select ID from T where k between 3 and 5</code>，这时只需要查 ID 的值，而 ID 的值已经在 k 索引树上了，因此可以直接提供查询结果，不需要回表。索引包含所有需要查询的字段的值，称为覆盖索引。</p><p><strong>由于覆盖索引可以减少树的搜索次数，显著提升查询性能，所以使用覆盖索引是一个常用的性能优化手段</strong>。</p><h3 id="最左前缀匹配原则" tabindex="-1"><a class="header-anchor" href="#最左前缀匹配原则" aria-hidden="true">#</a> 最左前缀匹配原则</h3><p>不只是索引的全部定义，只要满足最左前缀，就可以利用索引来加速检索。<strong>这里的最左前缀，可以是联合索引的最左 N 个字段，也可以是字符串索引的最左 M 个字符</strong>。</p><p>如果是联合索引，那么 key 也由多个列组成，同时，索引只能用于查找 key 是否<strong>存在（相等）</strong>，遇到范围查询 (<code>&gt;</code>、<code>&lt;</code>、<code>BETWEEN</code>、<code>LIKE</code>) 就<strong>不能进一步匹配</strong>了，后续退化为线性查找。因此，<strong>列的排列顺序决定了可命中索引的列数</strong>。</p><p><strong>应该将选择性高的列或基数大的列优先排在多列索引最前列</strong>。但有时，也需要考虑 <code>WHERE</code> 子句中的排序、分组和范围条件等因素，这些因素也会对查询性能造成较大影响。</p><p><strong>『索引的选择性』是指不重复的索引值和记录总数的比值</strong>，最大值为 1，此时每个记录都有唯一的索引与其对应。索引的选择性越高，查询效率越高。如果存在多条命中前缀索引的情况，就需要依次扫描，直到最终找到正确记录。</p><p>例如下面显示的结果中 customer_id 的选择性比 staff_id 更高，因此最好把 customer_id 列放在多列索引的前面。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token keyword">DISTINCT</span> staff_id<span class="token punctuation">)</span><span class="token operator">/</span><span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> staff_id_selectivity<span class="token punctuation">,</span>
<span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token keyword">DISTINCT</span> customer_id<span class="token punctuation">)</span><span class="token operator">/</span><span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> customer_id_selectivity<span class="token punctuation">,</span>
<span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span> payment<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-batch line-numbers-mode" data-ext="batch"><pre class="language-batch"><code>   <span class="token command"><span class="token keyword">staff_id_selectivity</span>: <span class="token number">0</span>.<span class="token number">0001</span></span>
<span class="token command"><span class="token keyword">customer_id_selectivity</span>: <span class="token number">0</span>.<span class="token number">0373</span></span>
               <span class="token command"><span class="token keyword">COUNT</span>(*</span><span class="token punctuation">)</span>: 16049
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前缀索引" tabindex="-1"><a class="header-anchor" href="#前缀索引" aria-hidden="true">#</a> 前缀索引</h3><p>有时候需要索引很长的字符列，这使得存储索引占用大量空间，且导致查询变慢。这种情况下，可以使用前缀索引。</p><p><strong>『前缀索引』是指索引开始的部分字符</strong>。对于 <code>BLOB</code>/<code>TEXT</code>/<code>VARCHAR</code> 这种文本类型的列，必须使用前缀索引，因为数据库往往不允许索引这些列的完整长度。</p><p>✔️️️️ 前缀索引的<strong>优点</strong>是：</p><ul><li>可以<strong>大大节约索引空间</strong>，从而<strong>提高索引效率</strong>。</li></ul><p>❌ 前缀索引的<strong>缺点</strong>是：</p><ul><li><strong>会降低索引的区分度</strong>。</li><li>此外，<strong><code>order by</code> 无法使用前缀索引，无法把前缀索引用作覆盖索引</strong>。</li></ul><p><strong>使用前缀索引，定义好长度，就可以做到既节省空间，又不用额外增加太多的查询成本。</strong></p><p>那么，如何确定前缀索引合适的长度呢？</p><p>可以使用下面这个语句，算出这个列上有多少个不同的值：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">distinct</span> email<span class="token punctuation">)</span> <span class="token keyword">as</span> L <span class="token keyword">from</span> SUser<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，依次选取不同长度的前缀来看这个值，比如我们要看一下 4~7 个字节的前缀索引，可以用这个语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span>
  <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">distinct</span> <span class="token keyword">left</span><span class="token punctuation">(</span>email<span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>）<span class="token keyword">as</span> L4<span class="token punctuation">,</span>
  <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">distinct</span> <span class="token keyword">left</span><span class="token punctuation">(</span>email<span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>）<span class="token keyword">as</span> L5<span class="token punctuation">,</span>
  <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">distinct</span> <span class="token keyword">left</span><span class="token punctuation">(</span>email<span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span>）<span class="token keyword">as</span> L6<span class="token punctuation">,</span>
  <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">distinct</span> <span class="token keyword">left</span><span class="token punctuation">(</span>email<span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">)</span>）<span class="token keyword">as</span> L7<span class="token punctuation">,</span>
<span class="token keyword">from</span> SUser<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，<strong>使用前缀索引很可能会损失区分度</strong>，所以你需要预先设定一个可以接受的损失比例，比如 5%。然后，在返回的 L4~L7 中，找出不小于 L * 95% 的值，假设这里 L6、L7 都满足，你就可以选择前缀长度为 6。</p><h3 id="使用索引来排序" tabindex="-1"><a class="header-anchor" href="#使用索引来排序" aria-hidden="true">#</a> 使用索引来排序</h3><p>Mysql 有两种方式可以生成排序结果：通过排序操作；或者按索引顺序扫描。</p><p><strong>索引最好既满足排序，又用于查找行</strong>。这样，就可以通过命中覆盖索引直接将结果查出来，也就不再需要排序了。</p><p>这样整个查询语句的执行流程就变成了：</p><ol><li>从索引 (city,name,age) 找到第一个满足 city=&#39;杭州’条件的记录，取出其中的 city、name 和 age 这三个字段的值，作为结果集的一部分直接返回；</li><li>从索引 (city,name,age) 取下一个记录，同样取出这三个字段的值，作为结果集的一部分直接返回；</li><li>重复执行步骤 2，直到查到第 1000 条记录，或者是不满足 city=&#39;杭州’条件时循环结束。</li></ol><h3 id="和-in-可以乱序" tabindex="-1"><a class="header-anchor" href="#和-in-可以乱序" aria-hidden="true">#</a> = 和 in 可以乱序</h3><p><strong>不需要考虑 <code>=</code>、<code>IN</code> 等的顺序</strong>，Mysql 会自动优化这些条件的顺序，以匹配尽可能多的索引列。</p><p>【示例】如有索引 (a, b, c, d)，查询条件 <code>c &gt; 3 and b = 2 and a = 1 and d &lt; 4</code> 与 <code>a = 1 and c &gt; 3 and b = 2 and d &lt; 4</code> 等顺序都是可以的，MySQL 会自动优化为 a = 1 and b = 2 and c &gt; 3 and d &lt; 4，依次命中 a、b、c、d。</p><h2 id="索引失效的场景" tabindex="-1"><a class="header-anchor" href="#索引失效的场景" aria-hidden="true">#</a> 索引失效的场景</h2><p>创建了索引，并非一定有效。比如不满足前缀索引、最左前缀匹配原则、查询条件涉及函数计算等情况都无法使用索引。此外，即使 SQL 本身符合索引的使用条件，MySQL 也会通过评估各种查询方式的代价，来决定是否走索引，以及走哪个索引。</p><h3 id="对索引使用左模糊匹配" tabindex="-1"><a class="header-anchor" href="#对索引使用左模糊匹配" aria-hidden="true">#</a> 对索引使用左模糊匹配</h3><p>使用左或者左右模糊匹配的时候，也就是 <code>like %xx</code> 或者 <code>like %xx%</code> 这两种方式都会造成索引失效。这是因为：<strong>B+ 树索引是按照「索引值」有序存储的，只能根据前缀进行比较。</strong></p><h3 id="对索引使用函数或表达式" tabindex="-1"><a class="header-anchor" href="#对索引使用函数或表达式" aria-hidden="true">#</a> 对索引使用函数或表达式</h3><p><strong>查询语句中，如果对索引字段使用「函数」或「表达式」，会导致索引失效</strong>。</p><p>因为索引树存储的是索引字段的原始值，因此无法索引经过函数计算或表达式计算后的值。</p><p>❌ 错误示例：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> actor_id <span class="token keyword">FROM</span> actor <span class="token keyword">WHERE</span> actor_id <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">WHERE</span> TO_DAYS<span class="token punctuation">(</span><span class="token keyword">current_date</span><span class="token punctuation">)</span> <span class="token operator">-</span> TO_DAYS<span class="token punctuation">(</span>date_col<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对索引隐式类型转换" tabindex="-1"><a class="header-anchor" href="#对索引隐式类型转换" aria-hidden="true">#</a> 对索引隐式类型转换</h3><p>查询语句中，如果对索引字段进行隐式类型转换，会导致索引失效。由于隐式类型转换是通过 <code>CAST</code> 函数实现的，等同于对索引列使用了函数，所以会导致索引失效。</p><h3 id="联合索引不遵循最左匹配原则" tabindex="-1"><a class="header-anchor" href="#联合索引不遵循最左匹配原则" aria-hidden="true">#</a> 联合索引不遵循最左匹配原则</h3><p>联合索引如果不遵循最左匹配原则，就会导致索引失效。原因是，在联合索引的情况下，数据是按照索引第一列排序，第一列数据相同时才会按照第二列排序。</p><h3 id="索引列判空" tabindex="-1"><a class="header-anchor" href="#索引列判空" aria-hidden="true">#</a> 索引列判空</h3><p><strong>索引列与 <code>NULL</code> 或者 <code>NOT NULL</code> 进行判断的时候也会失效</strong>。这是因为索引并不存储空值，所以最好在设计数据表的时候就将字段设置为 <code>NOT NULL</code> 约束，比如你可以将 INT 类型的字段，默认值设置为 0。将字符类型的默认值设置为空字符串 (’’)。</p><h3 id="where-子句中的-or-前后条件存在非索引列" tabindex="-1"><a class="header-anchor" href="#where-子句中的-or-前后条件存在非索引列" aria-hidden="true">#</a> WHERE 子句中的 OR 前后条件存在非索引列</h3><p>在 WHERE 子句中，如果在 OR 前的条件列是索引列，而在 OR 后的条件列不是索引列，那么索引会失效。</p><p>比如下面的 SQL 语句，comment_id 是主键，而 comment_text 没有进行索引，因为 OR 的含义就是两个只要满足一个即可，因此只有一个条件列进行了索引是没有意义的，只要有条件列没有进行索引，就会进行全表扫描，因此索引的条件列也会失效：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>EXPLAIN SELECT comment_id, user_id, comment_text FROM product_comment WHERE comment_id = 900001 OR comment_text = &#39;462eed7ac6e791292a79&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+-------------+-----------------+------------+------+---------------+------+---------+------+--------+----------+-------------+
| id | select_type | table           | partitions | type | possible_keys | key  | key_len | ref  | rows   | filtered | Extra       |
+----+-------------+-----------------+------------+------+---------------+------+---------+------+--------+----------+-------------+
|  1 | SIMPLE      | product_comment | NULL       | ALL  | PRIMARY       | NULL | NULL    | NULL | 996663 |    10.00 | Using where |
+----+-------------+-----------------+------------+------+---------------+------+---------+------+--------+----------+-------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们把 comment_text 创建了索引会是怎样的呢？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+-------------+-----------------+------------+-------------+----------------------+----------------------+---------+------+------+----------+------------------------------------------------+
| id | select_type | table           | partitions | type        | possible_keys        | key                  | key_len | ref  | rows | filtered | Extra                                          |
+----+-------------+-----------------+------------+-------------+----------------------+----------------------+---------+------+------+----------+------------------------------------------------+
|  1 | SIMPLE      | product_comment | NULL       | index_merge | PRIMARY,comment_text | PRIMARY,comment_text | 4,767   | NULL |    2 |   100.00 | Using union(PRIMARY,comment_text); Using where |
+----+-------------+-----------------+------------+-------------+----------------------+----------------------+---------+------+------+----------+------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你能看到这里使用到了 index merge，简单来说 index merge 就是对 comment_id 和 comment_text 分别进行了扫描，然后将这两个结果集进行了合并。这样做的好处就是避免了全表扫描。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,158),d={href:"https://book.douban.com/subject/23008813/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://time.geekbang.org/column/intro/139",target:"_blank",rel:"noopener noreferrer"},k={href:"https://juejin.im/post/5b55b842f265da0f9e589e79",target:"_blank",rel:"noopener noreferrer"},g={href:"http://blog.codinglabs.org/articles/theory-of-mysql-index.html",target:"_blank",rel:"noopener noreferrer"};function h(m,b){const s=o("ExternalLinkIcon");return p(),c("div",null,[r,n("ul",null,[n("li",null,[n("a",d,[a("《高性能 MySQL》"),e(s)])]),n("li",null,[n("a",u,[a("MySQL 实战 45 讲"),e(s)])]),n("li",null,[n("a",k,[a("数据库两大神器【索引和锁】"),e(s)])]),n("li",null,[n("a",g,[a("MySQL 索引背后的数据结构及算法原理"),e(s)])])])])}const f=t(l,[["render",h],["__file","03.Mysql索引.html.vue"]]);export{f as default};
