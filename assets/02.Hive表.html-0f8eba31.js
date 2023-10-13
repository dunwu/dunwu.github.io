import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c,a as n,b as a,d as e,e as t}from"./app-dc48b2dc.js";const l={},d=t(`<h1 id="hive-分区表和分桶表" tabindex="-1"><a class="header-anchor" href="#hive-分区表和分桶表" aria-hidden="true">#</a> Hive 分区表和分桶表</h1><h2 id="分区表" tabindex="-1"><a class="header-anchor" href="#分区表" aria-hidden="true">#</a> 分区表</h2><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><p>Hive 中的表对应为 HDFS 上的指定目录，在查询数据时候，默认会对全表进行扫描，这样时间和性能的消耗都非常大。</p><p><strong>分区为 HDFS 上表目录的子目录</strong>，数据按照分区存储在子目录中。如果查询的 <code>where</code> 子句中包含分区条件，则直接从该分区去查找，而不是扫描整个表目录，合理的分区设计可以极大提高查询速度和性能。</p><blockquote><p>这里说明一下分区表并非 Hive 独有的概念，实际上这个概念非常常见。比如在我们常用的 Oracle 数据库中，当表中的数据量不断增大，查询数据的速度就会下降，这时也可以对表进行分区。表进行分区后，逻辑上表仍然是一张完整的表，只是将表中的数据存放到多个表空间（物理文件上），这样查询数据时，就不必要每次都扫描整张表，从而提升查询性能。</p></blockquote><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h3><p>通常，在管理大规模数据集的时候都需要进行分区，比如将日志文件按天进行分区，从而保证数据细粒度的划分，使得查询性能得到提升。</p><h3 id="创建分区表" tabindex="-1"><a class="header-anchor" href="#创建分区表" aria-hidden="true">#</a> 创建分区表</h3><p>在 Hive 中可以使用 <code>PARTITIONED BY</code> 子句创建分区表。表可以包含一个或多个分区列，程序会为分区列中的每个不同值组合创建单独的数据目录。下面的我们创建一张雇员表作为测试：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token keyword">CREATE</span> EXTERNAL <span class="token keyword">TABLE</span> emp_partition<span class="token punctuation">(</span>
    empno <span class="token keyword">INT</span><span class="token punctuation">,</span>
    ename STRING<span class="token punctuation">,</span>
    job STRING<span class="token punctuation">,</span>
    mgr <span class="token keyword">INT</span><span class="token punctuation">,</span>
    hiredate <span class="token keyword">TIMESTAMP</span><span class="token punctuation">,</span>
    sal <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    comm <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    PARTITIONED <span class="token keyword">BY</span> <span class="token punctuation">(</span>deptno <span class="token keyword">INT</span><span class="token punctuation">)</span>   <span class="token comment">-- 按照部门编号进行分区</span>
    <span class="token keyword">ROW</span> FORMAT DELIMITED <span class="token keyword">FIELDS</span> <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&quot;\\t&quot;</span>
    LOCATION <span class="token string">&#39;/hive/emp_partition&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="加载数据到分区表" tabindex="-1"><a class="header-anchor" href="#加载数据到分区表" aria-hidden="true">#</a> 加载数据到分区表</h3><p>加载数据到分区表时候必须要指定数据所处的分区：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 加载部门编号为20的数据到表中</span>
LOAD DATA LOCAL INPATH <span class="token string">&quot;/usr/file/emp20.txt&quot;</span> OVERWRITE INTO TABLE emp_partition PARTITION <span class="token punctuation">(</span>deptno<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token comment"># 加载部门编号为30的数据到表中</span>
LOAD DATA LOCAL INPATH <span class="token string">&quot;/usr/file/emp30.txt&quot;</span> OVERWRITE INTO TABLE emp_partition PARTITION <span class="token punctuation">(</span>deptno<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看分区目录" tabindex="-1"><a class="header-anchor" href="#查看分区目录" aria-hidden="true">#</a> 查看分区目录</h3><p>这时候我们直接查看表目录，可以看到表目录下存在两个子目录，分别是 <code>deptno=20</code> 和 <code>deptno=30</code>,这就是分区目录，分区目录下才是我们加载的数据文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># hadoop fs -ls  hdfs://hadoop001:8020/hive/emp_partition/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这时候当你的查询语句的 <code>where</code> 包含 <code>deptno=20</code>，则就去对应的分区目录下进行查找，而不用扫描全表。</p><figure><img src="https://github.com/heibaiying/BigData-Notes/raw/master/pictures/hive-hadoop-partitation.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="分桶表" tabindex="-1"><a class="header-anchor" href="#分桶表" aria-hidden="true">#</a> 分桶表</h2><h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3><p>分区提供了一个隔离数据和优化查询的可行方案，但是并非所有的数据集都可以形成合理的分区，分区的数量也不是越多越好，过多的分区条件可能会导致很多分区上没有数据。同时 Hive 会限制动态分区可以创建的最大分区数，用来避免过多分区文件对文件系统产生负担。鉴于以上原因，Hive 还提供了一种更加细粒度的数据拆分方案：分桶表 (bucket Table)。</p><p>分桶表会将指定列的值进行哈希散列，并对 bucket（桶数量）取余，然后存储到对应的 bucket（桶）中。</p><h3 id="理解分桶表" tabindex="-1"><a class="header-anchor" href="#理解分桶表" aria-hidden="true">#</a> 理解分桶表</h3><p>单从概念上理解分桶表可能会比较晦涩，其实和分区一样，分桶这个概念同样不是 Hive 独有的，对于 Java 开发人员而言，这可能是一个每天都会用到的概念，因为 Hive 中的分桶概念和 Java 数据结构中的 HashMap 的分桶概念是一致的。</p><p>当调用 HashMap 的 put() 方法存储数据时，程序会先对 key 值调用 hashCode() 方法计算出 hashcode，然后对数组长度取模计算出 index，最后将数据存储在数组 index 位置的链表上，链表达到一定阈值后会转换为红黑树 (JDK1.8+)。下图为 HashMap 的数据结构图：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200224194352.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,27),r={href:"http://www.itcuties.com/java/hashmap-hashtable/",target:"_blank",rel:"noopener noreferrer"},u=t(`<h3 id="创建分桶表" tabindex="-1"><a class="header-anchor" href="#创建分桶表" aria-hidden="true">#</a> 创建分桶表</h3><p>在 Hive 中，我们可以通过 <code>CLUSTERED BY</code> 指定分桶列，并通过 <code>SORTED BY</code> 指定桶中数据的排序参考列。下面为分桶表建表语句示例：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>  <span class="token keyword">CREATE</span> EXTERNAL <span class="token keyword">TABLE</span> emp_bucket<span class="token punctuation">(</span>
    empno <span class="token keyword">INT</span><span class="token punctuation">,</span>
    ename STRING<span class="token punctuation">,</span>
    job STRING<span class="token punctuation">,</span>
    mgr <span class="token keyword">INT</span><span class="token punctuation">,</span>
    hiredate <span class="token keyword">TIMESTAMP</span><span class="token punctuation">,</span>
    sal <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    comm <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    deptno <span class="token keyword">INT</span><span class="token punctuation">)</span>
    <span class="token keyword">CLUSTERED</span> <span class="token keyword">BY</span><span class="token punctuation">(</span>empno<span class="token punctuation">)</span> SORTED <span class="token keyword">BY</span><span class="token punctuation">(</span>empno <span class="token keyword">ASC</span><span class="token punctuation">)</span> <span class="token keyword">INTO</span> <span class="token number">4</span> BUCKETS  <span class="token comment">--按照员工编号散列到四个 bucket 中</span>
    <span class="token keyword">ROW</span> FORMAT DELIMITED <span class="token keyword">FIELDS</span> <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&quot;\\t&quot;</span>
    LOCATION <span class="token string">&#39;/hive/emp_bucket&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="加载数据到分桶表" tabindex="-1"><a class="header-anchor" href="#加载数据到分桶表" aria-hidden="true">#</a> 加载数据到分桶表</h3><p>这里直接使用 <code>Load</code> 语句向分桶表加载数据，数据时可以加载成功的，但是数据并不会分桶。</p><p>这是由于分桶的实质是对指定字段做了 hash 散列然后存放到对应文件中，这意味着向分桶表中插入数据是必然要通过 MapReduce，且 Reducer 的数量必须等于分桶的数量。由于以上原因，分桶表的数据通常只能使用 CTAS(CREATE TABLE AS SELECT) 方式插入，因为 CTAS 操作会触发 MapReduce。加载数据步骤如下：</p><h4 id="设置强制分桶" tabindex="-1"><a class="header-anchor" href="#设置强制分桶" aria-hidden="true">#</a> 设置强制分桶</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">set</span> hive<span class="token punctuation">.</span>enforce<span class="token punctuation">.</span>bucketing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">--Hive 2.x 不需要这一步</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 Hive 0.x and 1.x 版本，必须使用设置 <code>hive.enforce.bucketing = true</code>，表示强制分桶，允许程序根据表结构自动选择正确数量的 Reducer 和 cluster by column 来进行分桶。</p><h4 id="ctas-导入数据" tabindex="-1"><a class="header-anchor" href="#ctas-导入数据" aria-hidden="true">#</a> CTAS 导入数据</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token keyword">TABLE</span> emp_bucket <span class="token keyword">SELECT</span> <span class="token operator">*</span>  <span class="token keyword">FROM</span> emp<span class="token punctuation">;</span>  <span class="token comment">--这里的 emp 表就是一张普通的雇员表</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以从执行日志看到 CTAS 触发 MapReduce 操作，且 Reducer 数量和建表时候指定 bucket 数量一致：</p><figure><img src="https://github.com/heibaiying/BigData-Notes/raw/master/pictures/hive-hadoop-mapreducer.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="查看分桶文件" tabindex="-1"><a class="header-anchor" href="#查看分桶文件" aria-hidden="true">#</a> 查看分桶文件</h3><p>bucket(桶) 本质上就是表目录下的具体文件：</p><figure><img src="https://github.com/heibaiying/BigData-Notes/raw/master/pictures/hive-hadoop-bucket.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="分区表和分桶表结合使用" tabindex="-1"><a class="header-anchor" href="#分区表和分桶表结合使用" aria-hidden="true">#</a> 分区表和分桶表结合使用</h2><p>分区表和分桶表的本质都是将数据按照不同粒度进行拆分，从而使得在查询时候不必扫描全表，只需要扫描对应的分区或分桶，从而提升查询效率。两者可以结合起来使用，从而保证表数据在不同粒度上都能得到合理的拆分。下面是 Hive 官方给出的示例：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> page_view_bucketed<span class="token punctuation">(</span>
	viewTime <span class="token keyword">INT</span><span class="token punctuation">,</span>
    userid <span class="token keyword">BIGINT</span><span class="token punctuation">,</span>
    page_url STRING<span class="token punctuation">,</span>
    referrer_url STRING<span class="token punctuation">,</span>
    ip STRING <span class="token punctuation">)</span>
 PARTITIONED <span class="token keyword">BY</span><span class="token punctuation">(</span>dt STRING<span class="token punctuation">)</span>
 <span class="token keyword">CLUSTERED</span> <span class="token keyword">BY</span><span class="token punctuation">(</span>userid<span class="token punctuation">)</span> SORTED <span class="token keyword">BY</span><span class="token punctuation">(</span>viewTime<span class="token punctuation">)</span> <span class="token keyword">INTO</span> <span class="token number">32</span> BUCKETS
 <span class="token keyword">ROW</span> FORMAT DELIMITED
   <span class="token keyword">FIELDS</span> <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&#39;\\001&#39;</span>
   COLLECTION ITEMS <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&#39;\\002&#39;</span>
   MAP <span class="token keyword">KEYS</span> <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&#39;\\003&#39;</span>
 STORED <span class="token keyword">AS</span> SEQUENCEFILE<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时导入数据时需要指定分区：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>INSERT OVERWRITE page_view_bucketed
PARTITION <span class="token punctuation">(</span>dt<span class="token operator">=</span><span class="token string">&#39;2009-02-25&#39;</span><span class="token punctuation">)</span>
SELECT * FROM page_view WHERE <span class="token assign-left variable">dt</span><span class="token operator">=</span><span class="token string">&#39;2009-02-25&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,22),k={href:"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL+BucketedTables",target:"_blank",rel:"noopener noreferrer"};function h(v,m){const s=i("ExternalLinkIcon");return o(),c("div",null,[d,n("p",null,[a("图片引用自："),n("a",r,[a("HashMap vs. Hashtable"),e(s)])]),u,n("ul",null,[n("li",null,[n("a",k,[a("LanguageManual DDL BucketedTables"),e(s)])])])])}const T=p(l,[["render",h],["__file","02.Hive表.html.vue"]]);export{T as default};
