import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as i,c as o,a as n,b as a,d as e,e as c}from"./app-ee97b13a.js";const l={},d=c(`<h1 id="hive-视图和索引" tabindex="-1"><a class="header-anchor" href="#hive-视图和索引" aria-hidden="true">#</a> Hive 视图和索引</h1><h2 id="视图" tabindex="-1"><a class="header-anchor" href="#视图" aria-hidden="true">#</a> 视图</h2><h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3><p>Hive 中的视图和 RDBMS 中视图的概念一致，都是一组数据的逻辑表示，本质上就是一条 SELECT 语句的结果集。视图是纯粹的逻辑对象，没有关联的存储 (Hive 3.0.0 引入的物化视图除外)，当查询引用视图时，Hive 可以将视图的定义与查询结合起来，例如将查询中的过滤器推送到视图中。</p><h3 id="创建视图" tabindex="-1"><a class="header-anchor" href="#创建视图" aria-hidden="true">#</a> 创建视图</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> <span class="token punctuation">[</span><span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>db_name<span class="token punctuation">.</span><span class="token punctuation">]</span>view_name   <span class="token comment">-- 视图名称</span>
  <span class="token punctuation">[</span><span class="token punctuation">(</span>column_name <span class="token punctuation">[</span><span class="token keyword">COMMENT</span> column_comment<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token punctuation">]</span>    <span class="token comment">--列名</span>
  <span class="token punctuation">[</span><span class="token keyword">COMMENT</span> view_comment<span class="token punctuation">]</span>  <span class="token comment">--视图注释</span>
  <span class="token punctuation">[</span>TBLPROPERTIES <span class="token punctuation">(</span>property_name <span class="token operator">=</span> property_value<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">]</span>  <span class="token comment">--额外信息</span>
  <span class="token keyword">AS</span> <span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Hive 中可以使用 <code>CREATE VIEW</code> 创建视图，如果已存在具有相同名称的表或视图，则会抛出异常，建议使用 <code>IF NOT EXISTS</code> 预做判断。在使用视图时候需要注意以下事项：</p><ul><li><p>视图是只读的，不能用作 <code>LOAD</code> / <code>INSERT</code> / <code>ALTER</code> 的目标；</p></li><li><p>在创建视图时候视图就已经固定，对基表的后续更改（如添加列）将不会反映在视图；</p></li><li><p>删除基表并不会删除视图，需要手动删除视图；</p></li><li><p>视图可能包含 <code>ORDER BY</code> 和 <code>LIMIT</code> 子句。如果引用视图的查询语句也包含这类子句，其执行优先级低于视图对应字句。例如，视图 <code>custom_view</code> 指定 LIMIT 5，查询语句为 <code>select * from custom_view LIMIT 10</code>，此时结果最多返回 5 行。</p></li><li><p>创建视图时，如果未提供列名，则将从 SELECT 语句中自动派生列名；</p></li><li><p>创建视图时，如果 SELECT 语句中包含其他表达式，例如 x + y，则列名称将以_C0，_C1 等形式生成；</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span>  <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> custom_view <span class="token keyword">AS</span> <span class="token keyword">SELECT</span> empno<span class="token punctuation">,</span> empno<span class="token operator">+</span>deptno <span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">+</span><span class="token number">2</span> <span class="token keyword">FROM</span> emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><figure><img src="https://github.com/heibaiying/BigData-Notes/raw/master/pictures/hive-1-2-view.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="查看视图" tabindex="-1"><a class="header-anchor" href="#查看视图" aria-hidden="true">#</a> 查看视图</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查看所有视图： 没有单独查看视图列表的语句，只能使用 show tables</span>
<span class="token keyword">show</span> <span class="token keyword">tables</span><span class="token punctuation">;</span>
<span class="token comment">-- 查看某个视图</span>
<span class="token keyword">desc</span> view_name<span class="token punctuation">;</span>
<span class="token comment">-- 查看某个视图详细信息</span>
<span class="token keyword">desc</span> formatted view_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除视图" tabindex="-1"><a class="header-anchor" href="#删除视图" aria-hidden="true">#</a> 删除视图</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DROP VIEW [IF EXISTS] [db_name.]view_name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除视图时，如果被删除的视图被其他视图所引用，这时候程序不会发出警告，但是引用该视图其他视图已经失效，需要进行重建或者删除。</p><h3 id="修改视图" tabindex="-1"><a class="header-anchor" href="#修改视图" aria-hidden="true">#</a> 修改视图</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER VIEW [db_name.]view_name AS select_statement;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>被更改的视图必须存在，且视图不能具有分区，如果视图具有分区，则修改失败。</p><h3 id="修改视图属性" tabindex="-1"><a class="header-anchor" href="#修改视图属性" aria-hidden="true">#</a> 修改视图属性</h3><p>语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER VIEW [db_name.]view_name SET TBLPROPERTIES table_properties;

table_properties:
  : (property_name = property_value, property_name = property_value, ...)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER VIEW custom_view SET TBLPROPERTIES (&#39;create&#39;=&#39;heibaiying&#39;,&#39;date&#39;=&#39;2019-05-05&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://github.com/heibaiying/BigData-Notes/raw/master/pictures/hive-view-properties.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h2><h3 id="简介-1" tabindex="-1"><a class="header-anchor" href="#简介-1" aria-hidden="true">#</a> 简介</h3><p>Hive 在 0.7.0 引入了索引的功能，索引的设计目标是提高表某些列的查询速度。如果没有索引，带有谓词的查询（如&#39;WHERE table1.column = 10&#39;）会加载整个表或分区并处理所有行。但是如果 column 存在索引，则只需要加载和处理文件的一部分。</p><h3 id="索引原理" tabindex="-1"><a class="header-anchor" href="#索引原理" aria-hidden="true">#</a> 索引原理</h3><p>在指定列上建立索引，会产生一张索引表（表结构如下），里面的字段包括：索引列的值、该值对应的 HDFS 文件路径、该值在文件中的偏移量。在查询涉及到索引字段时，首先到索引表查找索引列值对应的 HDFS 文件路径及偏移量，这样就避免了全表扫描。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+--------------+----------------+----------+--+
|   col_name   |   data_type    | comment     |
+--------------+----------------+----------+--+
| empno        | int            |  建立索引的列  |
| _bucketname  | string         |  HDFS 文件路径  |
| _offsets     | array&lt;bigint&gt;  |  偏移量       |
+--------------+----------------+----------+--+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建索引" tabindex="-1"><a class="header-anchor" href="#创建索引" aria-hidden="true">#</a> 创建索引</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">INDEX</span> index_name     <span class="token comment">--索引名称</span>
  <span class="token keyword">ON</span> <span class="token keyword">TABLE</span> base_table_name <span class="token punctuation">(</span>col_name<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>  <span class="token comment">--建立索引的列</span>
  <span class="token keyword">AS</span> index_type    <span class="token comment">--索引类型</span>
  <span class="token punctuation">[</span><span class="token keyword">WITH</span> DEFERRED REBUILD<span class="token punctuation">]</span>    <span class="token comment">--重建索引</span>
  <span class="token punctuation">[</span>IDXPROPERTIES <span class="token punctuation">(</span>property_name<span class="token operator">=</span>property_value<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">]</span>  <span class="token comment">--索引额外属性</span>
  <span class="token punctuation">[</span><span class="token operator">IN</span> <span class="token keyword">TABLE</span> index_table_name<span class="token punctuation">]</span>    <span class="token comment">--索引表的名字</span>
  <span class="token punctuation">[</span>
     <span class="token punctuation">[</span> <span class="token keyword">ROW</span> FORMAT <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span> STORED <span class="token keyword">AS</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
     <span class="token operator">|</span> STORED <span class="token keyword">BY</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  <span class="token punctuation">]</span>   <span class="token comment">--索引表行分隔符 、 存储格式</span>
  <span class="token punctuation">[</span>LOCATION hdfs_path<span class="token punctuation">]</span>  <span class="token comment">--索引表存储位置</span>
  <span class="token punctuation">[</span>TBLPROPERTIES <span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">]</span>   <span class="token comment">--索引表表属性</span>
  <span class="token punctuation">[</span><span class="token keyword">COMMENT</span> <span class="token string">&quot;index comment&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">--索引注释</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看索引" tabindex="-1"><a class="header-anchor" href="#查看索引" aria-hidden="true">#</a> 查看索引</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--显示表上所有列的索引</span>
<span class="token keyword">SHOW</span> FORMATTED <span class="token keyword">INDEX</span> <span class="token keyword">ON</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除索引" tabindex="-1"><a class="header-anchor" href="#删除索引" aria-hidden="true">#</a> 删除索引</h3><p>删除索引会删除对应的索引表。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> <span class="token punctuation">[</span><span class="token keyword">IF</span> <span class="token keyword">EXISTS</span><span class="token punctuation">]</span> index_name <span class="token keyword">ON</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果存在索引的表被删除了，其对应的索引和索引表都会被删除。如果被索引表的某个分区被删除了，那么分区对应的分区索引也会被删除。</p><h3 id="重建索引" tabindex="-1"><a class="header-anchor" href="#重建索引" aria-hidden="true">#</a> 重建索引</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">INDEX</span> index_name <span class="token keyword">ON</span> table_name <span class="token punctuation">[</span><span class="token keyword">PARTITION</span> partition_spec<span class="token punctuation">]</span> REBUILD<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重建索引。如果指定了 PARTITION，则仅重建该分区的索引。</p><h2 id="索引案例" tabindex="-1"><a class="header-anchor" href="#索引案例" aria-hidden="true">#</a> 索引案例</h2><h3 id="创建索引-1" tabindex="-1"><a class="header-anchor" href="#创建索引-1" aria-hidden="true">#</a> 创建索引</h3><p>在 emp 表上针对 <code>empno</code> 字段创建名为 <code>emp_index</code>,索引数据存储在 <code>emp_index_table</code> 索引表中</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">index</span> emp_index <span class="token keyword">on</span> <span class="token keyword">table</span> emp<span class="token punctuation">(</span>empno<span class="token punctuation">)</span> <span class="token keyword">as</span>
<span class="token string">&#39;org.apache.hadoop.hive.ql.index.compact.CompactIndexHandler&#39;</span>
<span class="token keyword">with</span> deferred rebuild
<span class="token operator">in</span> <span class="token keyword">table</span> emp_index_table <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时索引表中是没有数据的，需要重建索引才会有索引的数据。</p><h3 id="重建索引-1" tabindex="-1"><a class="header-anchor" href="#重建索引-1" aria-hidden="true">#</a> 重建索引</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">index</span> emp_index <span class="token keyword">on</span> emp rebuild<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Hive 会启动 MapReduce 作业去建立索引，建立好后查看索引表数据如下。三个表字段分别代表：索引列的值、该值对应的 HDFS 文件路径、该值在文件中的偏移量。</p><figure><img src="https://github.com/heibaiying/BigData-Notes/raw/master/pictures/hive-index-table.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="自动使用索引" tabindex="-1"><a class="header-anchor" href="#自动使用索引" aria-hidden="true">#</a> 自动使用索引</h3><p>默认情况下，虽然建立了索引，但是 Hive 在查询时候是不会自动去使用索引的，需要开启相关配置。开启配置后，涉及到索引列的查询就会使用索引功能去优化查询。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> hive<span class="token punctuation">.</span>input<span class="token punctuation">.</span>format<span class="token operator">=</span>org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>hadoop<span class="token punctuation">.</span>hive<span class="token punctuation">.</span>ql<span class="token punctuation">.</span>io<span class="token punctuation">.</span>HiveInputFormat<span class="token punctuation">;</span>
<span class="token keyword">SET</span> hive<span class="token punctuation">.</span><span class="token keyword">optimize</span><span class="token punctuation">.</span><span class="token keyword">index</span><span class="token punctuation">.</span>filter<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">SET</span> hive<span class="token punctuation">.</span><span class="token keyword">optimize</span><span class="token punctuation">.</span><span class="token keyword">index</span><span class="token punctuation">.</span>filter<span class="token punctuation">.</span>compact<span class="token punctuation">.</span>minsize<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看索引-1" tabindex="-1"><a class="header-anchor" href="#查看索引-1" aria-hidden="true">#</a> 查看索引</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> <span class="token keyword">INDEX</span> <span class="token keyword">ON</span> emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://github.com/heibaiying/BigData-Notes/raw/master/pictures/hive-index-show.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="索引的缺陷" tabindex="-1"><a class="header-anchor" href="#索引的缺陷" aria-hidden="true">#</a> 索引的缺陷</h2><p>索引表最主要的一个缺陷在于：索引表无法自动 rebuild，这也就意味着如果表中有数据新增或删除，则必须手动 rebuild，重新执行 MapReduce 作业，生成索引表数据。</p>`,57),r={href:"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+Indexing",target:"_blank",rel:"noopener noreferrer"},u=n("ul",null,[n("li",null,"具有自动重写的物化视图 (Materialized View) 可以产生与索引相似的效果（Hive 2.3.0 增加了对物化视图的支持，在 3.0 之后正式引入）。"),n("li",null,"使用列式存储文件格式（Parquet，ORC）进行存储时，这些格式支持选择性扫描，可以跳过不需要的文件或块。")],-1),k={href:"http://lxw1234.com/archives/2016/04/632.htm",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),a(" 参考资料")],-1),v={href:"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-Create/Drop/AlterView",target:"_blank",rel:"noopener noreferrer"},h={href:"https://cwiki.apache.org/confluence/display/Hive/Materialized+views",target:"_blank",rel:"noopener noreferrer"},b={href:"http://lxw1234.com/archives/2015/05/207.htm",target:"_blank",rel:"noopener noreferrer"},g={href:"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+Indexing",target:"_blank",rel:"noopener noreferrer"};function _(w,x){const s=p("ExternalLinkIcon");return i(),o("div",null,[d,n("p",null,[a("同时按照"),n("a",r,[a("官方文档"),e(s)]),a(" 的说明，Hive 会从 3.0 开始移除索引功能，主要基于以下两个原因：")]),u,n("blockquote",null,[n("p",null,[a("ORC 内置的索引功能可以参阅这篇文章："),n("a",k,[a("Hive 性能优化之 ORC 索引–Row Group Index vs Bloom Filter Index"),e(s)])])]),m,n("ul",null,[n("li",null,[n("a",v,[a("Create/Drop/Alter View"),e(s)])]),n("li",null,[n("a",h,[a("Materialized views"),e(s)])]),n("li",null,[n("a",b,[a("Hive 索引"),e(s)])]),n("li",null,[n("a",g,[a("Overview of Hive Indexes"),e(s)])])])])}const f=t(l,[["render",_],["__file","03.Hive视图和索引.html.vue"]]);export{f as default};
