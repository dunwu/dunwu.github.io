import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c,a as s,b as n,d as e,e as o}from"./app-afc5da4f.js";const r={},i=o('<h1 id="mysql-性能优化" tabindex="-1"><a class="header-anchor" href="#mysql-性能优化" aria-hidden="true">#</a> Mysql 性能优化</h1><h2 id="数据结构优化" tabindex="-1"><a class="header-anchor" href="#数据结构优化" aria-hidden="true">#</a> 数据结构优化</h2><p>良好的逻辑设计和物理设计是高性能的基石。</p><h3 id="数据类型优化" tabindex="-1"><a class="header-anchor" href="#数据类型优化" aria-hidden="true">#</a> 数据类型优化</h3><h4 id="数据类型优化基本原则" tabindex="-1"><a class="header-anchor" href="#数据类型优化基本原则" aria-hidden="true">#</a> 数据类型优化基本原则</h4><ul><li><strong>更小的通常更好</strong> - 越小的数据类型通常会更快，占用更少的磁盘、内存，处理时需要的 CPU 周期也更少。 <ul><li>例如：整型比字符类型操作代价低，因而会使用整型来存储 IP 地址，使用 <code>DATETIME</code> 来存储时间，而不是使用字符串。</li></ul></li><li><strong>简单就好</strong> - 如整型比字符型操作代价低。 <ul><li>例如：很多软件会用整型来存储 IP 地址。</li><li>例如：<strong><code>UNSIGNED</code> 表示不允许负值，大致可以使正数的上限提高一倍</strong>。</li></ul></li><li><strong>尽量避免 NULL</strong> - 可为 NULL 的列会使得索引、索引统计和值比较都更复杂。</li></ul><h4 id="类型的选择" tabindex="-1"><a class="header-anchor" href="#类型的选择" aria-hidden="true">#</a> 类型的选择</h4><ul><li><p>整数类型通常是标识列最好的选择，因为它们很快并且可以使用 <code>AUTO_INCREMENT</code>。</p></li><li><p><code>ENUM</code> 和 <code>SET</code> 类型通常是一个糟糕的选择，应尽量避免。</p></li><li><p>应该尽量避免用字符串类型作为标识列，因为它们很消耗空间，并且通常比数字类型慢。对于 <code>MD5</code>、<code>SHA</code>、<code>UUID</code> 这类随机字符串，由于比较随机，所以可能分布在很大的空间内，导致 <code>INSERT</code> 以及一些 <code>SELECT</code> 语句变得很慢。</p><ul><li>如果存储 UUID ，应该移除 <code>-</code> 符号；更好的做法是，用 <code>UNHEX()</code> 函数转换 UUID 值为 16 字节的数字，并存储在一个 <code>BINARY(16)</code> 的列中，检索时，可以通过 <code>HEX()</code> 函数来格式化为 16 进制格式。</li></ul></li></ul><h3 id="表设计" tabindex="-1"><a class="header-anchor" href="#表设计" aria-hidden="true">#</a> 表设计</h3><p>应该避免的设计问题：</p><ul><li><strong>太多的列</strong> - 设计者为了图方便，将大量冗余列加入表中，实际查询中，表中很多列是用不到的。这种宽表模式设计，会造成不小的性能代价，尤其是 <code>ALTER TABLE</code> 非常耗时。</li><li><strong>太多的关联</strong> - 所谓的实体 - 属性 - 值（EAV）设计模式是一个常见的糟糕设计模式。Mysql 限制了每个关联操作最多只能有 61 张表，但 EAV 模式需要许多自关联。</li><li><strong>枚举</strong> - 尽量不要用枚举，因为添加和删除字符串（枚举选项）必须使用 <code>ALTER TABLE</code>。</li><li>尽量避免 <code>NULL</code></li></ul><h3 id="范式和反范式" tabindex="-1"><a class="header-anchor" href="#范式和反范式" aria-hidden="true">#</a> 范式和反范式</h3><p><strong>范式化目标是尽量减少冗余，而反范式化则相反</strong>。</p><p>范式化的优点：</p><ul><li>比反范式更节省空间</li><li>更新操作比反范式快</li><li>更少需要 <code>DISTINCT</code> 或 <code>GROUP BY</code> 语句</li></ul><p>范式化的缺点：</p><ul><li>通常需要关联查询。而关联查询代价较高，如果是分表的关联查询，代价更是高昂。</li></ul><p>在真实世界中，很少会极端地使用范式化或反范式化。实际上，应该权衡范式和反范式的利弊，混合使用。</p><h3 id="索引优化" tabindex="-1"><a class="header-anchor" href="#索引优化" aria-hidden="true">#</a> 索引优化</h3>',19),d=s("p",null,"索引优化应该是查询性能优化的最有效手段。",-1),u={href:"https://github.com/dunwu/db-tutorial/blob/master/docs/sql/mysql/mysql-index.md",target:"_blank",rel:"noopener noreferrer"},k=o(`<h4 id="何时使用索引" tabindex="-1"><a class="header-anchor" href="#何时使用索引" aria-hidden="true">#</a> 何时使用索引</h4><ul><li>对于非常小的表，大部分情况下简单的全表扫描更高效。</li><li>对于中、大型表，索引非常有效。</li><li>对于特大型表，建立和使用索引的代价将随之增长。可以考虑使用分区技术。</li><li>如果表的数量特别多，可以建立一个元数据信息表，用来查询需要用到的某些特性。</li></ul><h4 id="索引优化策略" tabindex="-1"><a class="header-anchor" href="#索引优化策略" aria-hidden="true">#</a> 索引优化策略</h4><ul><li><strong>索引基本原则</strong><ul><li>索引不是越多越好，不要为所有列都创建索引。</li><li>要尽量避免冗余和重复索引。</li><li>要考虑删除未使用的索引。</li><li>尽量的扩展索引，不要新建索引。</li><li>频繁作为 <code>WHERE</code> 过滤条件的列应该考虑添加索引。</li></ul></li><li><strong>独立的列</strong> - “独立的列” 是指索引列不能是表达式的一部分，也不能是函数的参数。</li><li><strong>前缀索引</strong> - 索引很长的字符列，可以索引开始的部分字符，这样可以大大节约索引空间。</li><li><strong>最左匹配原则</strong> - 将选择性高的列或基数大的列优先排在多列索引最前列。</li><li><strong>使用索引来排序</strong> - 索引最好既满足排序，又用于查找行。这样，就可以使用索引来对结果排序。</li><li><code>=</code>、<code>IN</code> 可以乱序 - 不需要考虑 <code>=</code>、<code>IN</code> 等的顺序</li><li><strong>覆盖索引</strong></li><li><strong>自增字段作主键</strong></li></ul><h2 id="sql-优化" tabindex="-1"><a class="header-anchor" href="#sql-优化" aria-hidden="true">#</a> SQL 优化</h2><p>使用 <code>EXPLAIN</code> 命令查看当前 SQL 是否使用了索引，优化后，再通过执行计划（<code>EXPLAIN</code>）来查看优化效果。</p><p>SQL 优化基本思路：</p><ul><li><p><strong>只返回必要的列</strong> - 最好不要使用 <code>SELECT *</code> 语句。</p></li><li><p><strong>只返回必要的行</strong> - 使用 <code>WHERE</code> 子查询语句进行过滤查询，有时候也需要使用 <code>LIMIT</code> 语句来限制返回的数据。</p></li><li><p><strong>缓存重复查询的数据</strong> - 应该考虑在客户端使用缓存，尽量不要使用 Mysql 服务器缓存（存在较多问题和限制）。</p></li><li><p><strong>使用索引来覆盖查询</strong></p></li></ul><h3 id="优化-count-查询" tabindex="-1"><a class="header-anchor" href="#优化-count-查询" aria-hidden="true">#</a> 优化 <code>COUNT()</code> 查询</h3><p><code>COUNT()</code> 有两种作用：</p><ul><li>统计某个列值的数量。统计列值时，要求列值是非 <code>NULL</code> 的，它不会统计 <code>NULL</code>。</li><li>统计行数。</li></ul><p><strong>统计列值时，要求列值是非空的，它不会统计 NULL</strong>。如果确认括号中的表达式不可能为空时，实际上就是在统计行数。最简单的就是当使用 <code>COUNT(*)</code> 时，并不是我们所想象的那样扩展成所有的列，实际上，它会忽略所有的列而直接统计行数。</p><p>我们最常见的误解也就在这儿，在括号内指定了一列却希望统计结果是行数，而且还常常误以为前者的性能会更好。但实际并非这样，如果要统计行数，直接使用 <code>COUNT(*)</code>，意义清晰，且性能更好。</p><p>（1）简单优化</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> world<span class="token punctuation">.</span>city <span class="token keyword">WHERE</span> id <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> world<span class="token punctuation">.</span>city<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span> world<span class="token punctuation">.</span>city <span class="token keyword">WHERE</span> id <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）使用近似值</p><p>有时候某些业务场景并不需要完全精确的统计值，可以用近似值来代替，<code>EXPLAIN</code> 出来的行数就是一个不错的近似值，而且执行 <code>EXPLAIN</code> 并不需要真正地去执行查询，所以成本非常低。通常来说，执行 <code>COUNT()</code> 都需要扫描大量的行才能获取到精确的数据，因此很难优化，MySQL 层面还能做得也就只有覆盖索引了。如果不还能解决问题，只有从架构层面解决了，比如添加汇总表，或者使用 Redis 这样的外部缓存系统。</p><h3 id="优化关联查询" tabindex="-1"><a class="header-anchor" href="#优化关联查询" aria-hidden="true">#</a> 优化关联查询</h3><p>在大数据场景下，表与表之间通过一个冗余字段来关联，要比直接使用 <code>JOIN</code> 有更好的性能。</p><p>如果确实需要使用关联查询的情况下，需要特别注意的是：</p><ul><li><strong>确保 <code>ON</code> 和 <code>USING</code> 字句中的列上有索引</strong>。在创建索引的时候就要考虑到关联的顺序。当表 A 和表 B 用某列 column 关联的时候，如果优化器关联的顺序是 A、B，那么就不需要在 A 表的对应列上创建索引。没有用到的索引会带来额外的负担，一般来说，除非有其他理由，只需要在关联顺序中的第二张表的相应列上创建索引（具体原因下文分析）。</li><li><strong>确保任何的 <code>GROUP BY</code> 和 <code>ORDER BY</code> 中的表达式只涉及到一个表中的列</strong>，这样 MySQL 才有可能使用索引来优化。</li></ul><p>要理解优化关联查询的第一个技巧，就需要理解 MySQL 是如何执行关联查询的。当前 MySQL 关联执行的策略非常简单，它对任何的关联都执行<strong>嵌套循环关联</strong>操作，即先在一个表中循环取出单条数据，然后在嵌套循环到下一个表中寻找匹配的行，依次下去，直到找到所有表中匹配的行为为止。然后根据各个表匹配的行，返回查询中需要的各个列。</p><p>太抽象了？以上面的示例来说明，比如有这样的一个查询：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>SELECT A.xx<span class="token punctuation">,</span>B.yy
FROM A INNER JOIN B <span class="token function">USING</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
WHERE A.xx IN <span class="token punctuation">(</span>5<span class="token punctuation">,</span>6<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设 MySQL 按照查询中的关联顺序 A、B 来进行关联操作，那么可以用下面的伪代码表示 MySQL 如何完成这个查询：</p><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code>outer_iterator <span class="token operator">=</span> <span class="token constant">SELECT</span> <span class="token constant">A</span><span class="token punctuation">.</span>xx<span class="token punctuation">,</span><span class="token constant">A</span><span class="token punctuation">.</span>c <span class="token constant">FROM</span> <span class="token constant">A</span> <span class="token constant">WHERE</span> <span class="token constant">A</span><span class="token punctuation">.</span>xx <span class="token constant">IN</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
outer_row <span class="token operator">=</span> outer_iterator<span class="token punctuation">.</span><span class="token keyword">next</span><span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>outer_row<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    inner_iterator <span class="token operator">=</span> <span class="token constant">SELECT</span> <span class="token constant">B</span><span class="token punctuation">.</span>yy <span class="token constant">FROM</span> <span class="token constant">B</span> <span class="token constant">WHERE</span> <span class="token constant">B</span><span class="token punctuation">.</span>c <span class="token operator">=</span> outer_row<span class="token punctuation">.</span>c<span class="token punctuation">;</span>
    inner_row <span class="token operator">=</span> inner_iterator<span class="token punctuation">.</span><span class="token keyword">next</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>inner_row<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        output<span class="token punctuation">[</span>inner_row<span class="token punctuation">.</span>yy<span class="token punctuation">,</span>outer_row<span class="token punctuation">.</span>xx<span class="token punctuation">]</span><span class="token punctuation">;</span>
        inner_row <span class="token operator">=</span> inner_iterator<span class="token punctuation">.</span><span class="token keyword">next</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    outer_row <span class="token operator">=</span> outer_iterator<span class="token punctuation">.</span><span class="token keyword">next</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，最外层的查询是根据<code>A.xx</code>列来查询的，<code>A.c</code>上如果有索引的话，整个关联查询也不会使用。再看内层的查询，很明显<code>B.c</code>上如果有索引的话，能够加速查询，因此只需要在关联顺序中的第二张表的相应列上创建索引即可。</p><h3 id="优化-group-by-和-distinct" tabindex="-1"><a class="header-anchor" href="#优化-group-by-和-distinct" aria-hidden="true">#</a> 优化 <code>GROUP BY</code> 和 <code>DISTINCT</code></h3><p>Mysql 优化器会在内部处理的时候相互转化这两类查询。它们都<strong>可以使用索引来优化，这也是最有效的优化方法</strong>。</p><h3 id="优化-limit" tabindex="-1"><a class="header-anchor" href="#优化-limit" aria-hidden="true">#</a> 优化 <code>LIMIT</code></h3><p>当需要分页操作时，通常会使用 <code>LIMIT</code> 加上偏移量的办法实现，同时加上合适的 <code>ORDER BY</code> 字句。<strong>如果有对应的索引，通常效率会不错，否则，MySQL 需要做大量的文件排序操作</strong>。</p><p>一个常见的问题是当偏移量非常大的时候，比如：<code>LIMIT 10000 20</code>这样的查询，MySQL 需要查询 10020 条记录然后只返回 20 条记录，前面的 10000 条都将被抛弃，这样的代价非常高。</p><p>优化这种查询一个最简单的办法就是尽可能的使用覆盖索引扫描，而不是查询所有的列。然后根据需要做一次关联查询再返回所有的列。对于偏移量很大时，这样做的效率会提升非常大。考虑下面的查询：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> film_id<span class="token punctuation">,</span>description <span class="token keyword">FROM</span> film <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> title <span class="token keyword">LIMIT</span> <span class="token number">50</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果这张表非常大，那么这个查询最好改成下面的样子：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> film<span class="token punctuation">.</span>film_id<span class="token punctuation">,</span>film<span class="token punctuation">.</span>description
<span class="token keyword">FROM</span> film <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> <span class="token punctuation">(</span>
    <span class="token keyword">SELECT</span> film_id <span class="token keyword">FROM</span> film <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> title <span class="token keyword">LIMIT</span> <span class="token number">50</span><span class="token punctuation">,</span><span class="token number">5</span>
<span class="token punctuation">)</span> <span class="token keyword">AS</span> tmp <span class="token keyword">USING</span><span class="token punctuation">(</span>film_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的延迟关联将大大提升查询效率，让 MySQL 扫描尽可能少的页面，获取需要访问的记录后在根据关联列回原表查询所需要的列。</p><p>有时候如果可以使用书签记录上次取数据的位置，那么下次就可以直接从该书签记录的位置开始扫描，这样就可以避免使用<code>OFFSET</code>，比如下面的查询：</p><div class="language-objectivec line-numbers-mode" data-ext="objectivec"><pre class="language-objectivec"><code>SELECT id FROM t LIMIT <span class="token number">10000</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">;</span>
改为：
SELECT id FROM t WHERE id <span class="token operator">&gt;</span> <span class="token number">10000</span> LIMIT <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他优化的办法还包括使用预先计算的汇总表，或者关联到一个冗余表，冗余表中只包含主键列和需要做排序的列。</p><h3 id="优化-union" tabindex="-1"><a class="header-anchor" href="#优化-union" aria-hidden="true">#</a> 优化 UNION</h3><p>MySQL 总是通过创建并填充临时表的方式来执行 <code>UNION</code> 查询。因此很多优化策略在<code>UNION</code>查询中都没有办法很好的时候。经常需要手动将<code>WHERE</code>、<code>LIMIT</code>、<code>ORDER BY</code>等字句“下推”到各个子查询中，以便优化器可以充分利用这些条件先优化。</p><p>除非确实需要服务器去重，否则就一定要使用<code>UNION ALL</code>，如果没有<code>ALL</code>关键字，MySQL 会给临时表加上<code>DISTINCT</code>选项，这会导致整个临时表的数据做唯一性检查，这样做的代价非常高。当然即使使用 ALL 关键字，MySQL 总是将结果放入临时表，然后再读出，再返回给客户端。虽然很多时候没有这个必要，比如有时候可以直接把每个子查询的结果返回给客户端。</p><h3 id="优化查询方式" tabindex="-1"><a class="header-anchor" href="#优化查询方式" aria-hidden="true">#</a> 优化查询方式</h3><h4 id="切分大查询" tabindex="-1"><a class="header-anchor" href="#切分大查询" aria-hidden="true">#</a> 切分大查询</h4><p>一个大查询如果一次性执行的话，可能一次锁住很多数据、占满整个事务日志、耗尽系统资源、阻塞很多小的但重要的查询。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>DELEFT <span class="token keyword">FROM</span> messages <span class="token keyword">WHERE</span> <span class="token keyword">create</span> <span class="token operator">&lt;</span> DATE_SUB<span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">INTERVAL</span> <span class="token number">3</span> <span class="token keyword">MONTH</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>rows_affected <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">do</span> {
    rows_affected <span class="token operator">=</span> do_query<span class="token punctuation">(</span>
    <span class="token string">&quot;DELETE FROM messages WHERE create  &lt; DATE_SUB(NOW(), INTERVAL 3 MONTH) LIMIT 10000&quot;</span><span class="token punctuation">)</span>
} <span class="token keyword">while</span> rows_affected <span class="token operator">&gt;</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分解大连接查询" tabindex="-1"><a class="header-anchor" href="#分解大连接查询" aria-hidden="true">#</a> 分解大连接查询</h4><p>将一个大连接查询（JOIN）分解成对每一个表进行一次单表查询，然后将结果在应用程序中进行关联，这样做的好处有：</p><ul><li>让缓存更高效。对于连接查询，如果其中一个表发生变化，那么整个查询缓存就无法使用。而分解后的多个查询，即使其中一个表发生变化，对其它表的查询缓存依然可以使用。</li><li>分解成多个单表查询，这些单表查询的缓存结果更可能被其它查询使用到，从而减少冗余记录的查询。</li><li>减少锁竞争；</li><li>在应用层进行连接，可以更容易对数据库进行拆分，从而更容易做到高性能和可扩展。</li><li>查询本身效率也可能会有所提升。例如下面的例子中，使用 IN() 代替连接查询，可以让 MySQL 按照 ID 顺序进行查询，这可能比随机的连接要更高效。</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> tag
<span class="token keyword">JOIN</span> tag_post <span class="token keyword">ON</span> tag_post<span class="token punctuation">.</span>tag_id<span class="token operator">=</span>tag<span class="token punctuation">.</span>id
<span class="token keyword">JOIN</span> post <span class="token keyword">ON</span> tag_post<span class="token punctuation">.</span>post_id<span class="token operator">=</span>post<span class="token punctuation">.</span>id
<span class="token keyword">WHERE</span> tag<span class="token punctuation">.</span>tag<span class="token operator">=</span><span class="token string">&#39;mysql&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> tag <span class="token keyword">WHERE</span> tag<span class="token operator">=</span><span class="token string">&#39;mysql&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> tag_post <span class="token keyword">WHERE</span> tag_id<span class="token operator">=</span><span class="token number">1234</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> post <span class="token keyword">WHERE</span> post<span class="token punctuation">.</span>id <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span><span class="token number">456</span><span class="token punctuation">,</span><span class="token number">567</span><span class="token punctuation">,</span><span class="token number">9098</span><span class="token punctuation">,</span><span class="token number">8904</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="执行计划-explain" tabindex="-1"><a class="header-anchor" href="#执行计划-explain" aria-hidden="true">#</a> 执行计划（<code>EXPLAIN</code>）</h2><p>如何判断当前 SQL 是否使用了索引？如何检验修改后的 SQL 确实有优化效果？</p><p>在 SQL 中，可以通过执行计划（<code>EXPLAIN</code>）分析 <code>SELECT</code> 查询效率。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">explain</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_info <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token number">2</span>\\G
<span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token number">1.</span> <span class="token keyword">row</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
           id: <span class="token number">1</span>
  select_type: <span class="token keyword">SIMPLE</span>
        <span class="token keyword">table</span>: user_info
   partitions: <span class="token boolean">NULL</span>
         <span class="token keyword">type</span>: const
possible_keys: <span class="token keyword">PRIMARY</span>
          <span class="token keyword">key</span>: <span class="token keyword">PRIMARY</span>
      key_len: <span class="token number">8</span>
          ref: const
         <span class="token keyword">rows</span>: <span class="token number">1</span>
     filtered: <span class="token number">100.00</span>
        Extra: <span class="token boolean">NULL</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span><span class="token punctuation">,</span> <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>EXPLAIN</code> 参数说明：</p><ul><li><code>id</code>: SELECT 查询的标识符. 每个 SELECT 都会自动分配一个唯一的标识符.</li><li><code>select_type</code> ⭐ ：SELECT 查询的类型. <ul><li><code>SIMPLE</code>：表示此查询不包含 UNION 查询或子查询</li><li><code>PRIMARY</code>：表示此查询是最外层的查询</li><li><code>UNION</code>：表示此查询是 UNION 的第二或随后的查询</li><li><code>DEPENDENT UNION</code>：UNION 中的第二个或后面的查询语句, 取决于外面的查询</li><li><code>UNION RESULT</code>：UNION 的结果</li><li><code>SUBQUERY</code>：子查询中的第一个 SELECT</li><li><code>DEPENDENT SUBQUERY</code>: 子查询中的第一个 SELECT, 取决于外面的查询. 即子查询依赖于外层查询的结果.</li></ul></li><li><code>table</code>: 查询的是哪个表，如果给表起别名了，则显示别名。</li><li><code>partitions</code>：匹配的分区</li><li><code>type</code> ⭐：表示从表中查询到行所执行的方式，查询方式是 SQL 优化中一个很重要的指标，结果值从好到差依次是：system &gt; const &gt; eq_ref &gt; ref &gt; range &gt; index &gt; ALL。 <ul><li><code>system</code>/<code>const</code>：表中只有一行数据匹配，此时根据索引查询一次就能找到对应的数据。如果是 B + 树索引，我们知道此时索引构造成了多个层级的树，当查询的索引在树的底层时，查询效率就越低。const 表示此时索引在第一层，只需访问一层便能得到数据。</li><li><code>eq_ref</code>：使用唯一索引扫描，常见于多表连接中使用主键和唯一索引作为关联条件。</li><li><code>ref</code>：非唯一索引扫描，还可见于唯一索引最左原则匹配扫描。</li><li><code>range</code>：索引范围扫描，比如，&lt;，&gt;，between 等操作。</li><li><code>index</code>：索引全表扫描，此时遍历整个索引树。</li><li><code>ALL</code>：表示全表扫描，需要遍历全表来找到对应的行。</li></ul></li><li><code>possible_keys</code>：此次查询中可能选用的索引。</li><li><code>key</code> ⭐：此次查询中实际使用的索引。</li><li><code>ref</code>：哪个字段或常数与 key 一起被使用。</li><li><code>rows</code> ⭐：显示此查询一共扫描了多少行，这个是一个估计值。</li><li><code>filtered</code>：表示此查询条件所过滤的数据的百分比。</li><li><code>extra</code>：额外的信息。</li></ul>`,59),m={href:"https://segmentfault.com/a/1190000008131735",target:"_blank",rel:"noopener noreferrer"},h=o(`<h2 id="optimizer-trace" tabindex="-1"><a class="header-anchor" href="#optimizer-trace" aria-hidden="true">#</a> optimizer trace</h2><p>在 MySQL 5.6 及之后的版本中，我们可以使用 optimizer trace 功能查看优化器生成执行计划的整个过程。有了这个功能，我们不仅可以了解优化器的选择过程，更可以了解每一个执行环节的成本，然后依靠这些信息进一步优化查询。</p><p>如下代码所示，打开 optimizer_trace 后，再执行 SQL 就可以查询 information_schema.OPTIMIZER_TRACE 表查看执行计划了，最后可以关闭 optimizer_trace 功能：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> optimizer_trace<span class="token operator">=</span><span class="token string">&quot;enabled=on&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> person <span class="token keyword">WHERE</span> NAME <span class="token operator">&gt;</span><span class="token string">&#39;name84059&#39;</span> <span class="token operator">AND</span> create_time<span class="token operator">&gt;</span>&#39;<span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">24</span> <span class="token number">05</span>:<span class="token number">00</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> information_schema<span class="token punctuation">.</span>OPTIMIZER_TRACE<span class="token punctuation">;</span>
<span class="token keyword">SET</span> optimizer_trace<span class="token operator">=</span><span class="token string">&quot;enabled=off&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据模型和业务" tabindex="-1"><a class="header-anchor" href="#数据模型和业务" aria-hidden="true">#</a> 数据模型和业务</h2><ul><li>表字段比较复杂、易变动、结构难以统一的情况下，可以考虑使用 Nosql 来代替关系数据库表存储，如 ElasticSearch、MongoDB。</li><li>在高并发情况下的查询操作，可以使用缓存（如 Redis）代替数据库操作，提高并发性能。</li><li>数据量增长较快的表，需要考虑水平分表或分库，避免单表操作的性能瓶颈。</li><li>除此之外，我们应该通过一些优化，尽量避免比较复杂的 JOIN 查询操作，例如冗余一些字段，减少 JOIN 查询；创建一些中间表，减少 JOIN 查询。</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,7),b={href:"https://book.douban.com/subject/23008813/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://time.geekbang.org/column/intro/100028001",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.jianshu.com/p/d7665192aaaf",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.jfox.info/20-tiao-mysql-xing-nen-you-hua-de-zui-jia-jing-yan.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://segmentfault.com/a/1190000008131735",target:"_blank",rel:"noopener noreferrer"};function L(w,N){const a=p("ExternalLinkIcon");return l(),c("div",null,[i,s("blockquote",null,[d,s("p",null,[n("如果想详细了解索引特性请参考："),s("a",u,[n("Mysql 索引"),e(a)])])]),k,s("blockquote",null,[s("p",null,[n("更多内容请参考："),s("a",m,[n("MySQL 性能优化神器 Explain 使用分析"),e(a)])])]),h,s("ul",null,[s("li",null,[s("a",b,[n("《高性能 MySQL》"),e(a)])]),s("li",null,[s("a",v,[n("《Java 性能调优实战》"),e(a)])]),s("li",null,[s("a",g,[n("我必须得告诉大家的 MySQL 优化原理"),e(a)])]),s("li",null,[s("a",E,[n("20+ 条 MySQL 性能优化的最佳经验"),e(a)])]),s("li",null,[s("a",y,[n("MySQL 性能优化神器 Explain 使用分析"),e(a)])])])])}const f=t(r,[["render",L],["__file","index.html.vue"]]);export{f as default};
