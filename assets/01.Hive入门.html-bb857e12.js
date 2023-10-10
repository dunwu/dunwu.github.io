import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o,c as i,a as e,b as a,d as n,e as s}from"./app-9db88853.js";const l={},p=s('<h1 id="hive-入门" tabindex="-1"><a class="header-anchor" href="#hive-入门" aria-hidden="true">#</a> Hive 入门</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Hive 是一个构建在 Hadoop 之上的数据仓库，它可以将结构化的数据文件映射成表，并提供类 SQL 查询功能，用于查询的 SQL 语句会被转化为 MapReduce 作业，然后提交到 Hadoop 上运行。</p><p><strong>特点</strong>：</p><ol><li>简单、容易上手 (提供了类似 sql 的查询语言 hql)，使得精通 sql 但是不了解 Java 编程的人也能很好地进行大数据分析；</li><li>灵活性高，可以自定义用户函数 (UDF) 和存储格式；</li><li>为超大的数据集设计的计算和存储能力，集群扩展容易;</li><li>统一的元数据管理，可与 presto／impala／sparksql 等共享数据；</li><li>执行延迟高，不适合做数据的实时处理，但适合做海量数据的离线处理。</li></ol><h2 id="hive-的体系架构" tabindex="-1"><a class="header-anchor" href="#hive-的体系架构" aria-hidden="true">#</a> Hive 的体系架构</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200224193019.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="command-line-shell-thrift-jdbc" tabindex="-1"><a class="header-anchor" href="#command-line-shell-thrift-jdbc" aria-hidden="true">#</a> command-line shell &amp; thrift/jdbc</h3><p>可以用 command-line shell 和 thrift／jdbc 两种方式来操作数据：</p><ul><li><strong>command-line shell</strong>：通过 hive 命令行的的方式来操作数据；</li><li><strong>thrift／jdbc</strong>：通过 thrift 协议按照标准的 JDBC 的方式操作数据。</li></ul><h3 id="metastore" tabindex="-1"><a class="header-anchor" href="#metastore" aria-hidden="true">#</a> Metastore</h3><p>在 Hive 中，表名、表结构、字段名、字段类型、表的分隔符等统一被称为元数据。所有的元数据默认存储在 Hive 内置的 derby 数据库中，但由于 derby 只能有一个实例，也就是说不能有多个命令行客户端同时访问，所以在实际生产环境中，通常使用 MySQL 代替 derby。</p><p>Hive 进行的是统一的元数据管理，就是说你在 Hive 上创建了一张表，然后在 presto／impala／sparksql 中都是可以直接使用的，它们会从 Metastore 中获取统一的元数据信息，同样的你在 presto／impala／sparksql 中创建一张表，在 Hive 中也可以直接使用。</p><h3 id="hql-的执行流程" tabindex="-1"><a class="header-anchor" href="#hql-的执行流程" aria-hidden="true">#</a> HQL 的执行流程</h3><p>Hive 在执行一条 HQL 的时候，会经过以下步骤：</p><ol><li>语法解析：Antlr 定义 SQL 的语法规则，完成 SQL 词法，语法解析，将 SQL 转化为抽象 语法树 AST Tree；</li><li>语义解析：遍历 AST Tree，抽象出查询的基本组成单元 QueryBlock；</li><li>生成逻辑执行计划：遍历 QueryBlock，翻译为执行操作树 OperatorTree；</li><li>优化逻辑执行计划：逻辑层优化器进行 OperatorTree 变换，合并不必要的 ReduceSinkOperator，减少 shuffle 数据量；</li><li>生成物理执行计划：遍历 OperatorTree，翻译为 MapReduce 任务；</li><li>优化物理执行计划：物理层优化器进行 MapReduce 任务的变换，生成最终的执行计划。</li></ol>',16),c={href:"https://tech.meituan.com/2014/02/12/hive-sql-to-mapreduce.html",target:"_blank",rel:"noopener noreferrer"},h=s(`<h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><h3 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a> 基本数据类型</h3><p>Hive 表中的列支持以下基本数据类型：</p><table><thead><tr><th>大类</th><th>类型</th></tr></thead><tbody><tr><td><strong>Integers（整型）</strong></td><td>TINYINT—1 字节的有符号整数 <br>SMALLINT—2 字节的有符号整数<br> INT—4 字节的有符号整数<br> BIGINT—8 字节的有符号整数</td></tr><tr><td><strong>Boolean（布尔型）</strong></td><td>BOOLEAN—TRUE/FALSE</td></tr><tr><td><strong>Floating point numbers（浮点型）</strong></td><td>FLOAT— 单精度浮点型 <br>DOUBLE—双精度浮点型</td></tr><tr><td><strong>Fixed point numbers（定点数）</strong></td><td>DECIMAL—用户自定义精度定点数，比如 DECIMAL(7,2)</td></tr><tr><td><strong>String types（字符串）</strong></td><td>STRING—指定字符集的字符序列<br> VARCHAR—具有最大长度限制的字符序列 <br>CHAR—固定长度的字符序列</td></tr><tr><td><strong>Date and time types（日期时间类型）</strong></td><td>TIMESTAMP — 时间戳 <br>TIMESTAMP WITH LOCAL TIME ZONE — 时间戳，纳秒精度<br> DATE—日期类型</td></tr><tr><td><strong>Binary types（二进制类型）</strong></td><td>BINARY—字节序列</td></tr></tbody></table><blockquote><p>TIMESTAMP 和 TIMESTAMP WITH LOCAL TIME ZONE 的区别如下：</p><ul><li><strong>TIMESTAMP WITH LOCAL TIME ZONE</strong>：用户提交时间给数据库时，会被转换成数据库所在的时区来保存。查询时则按照查询客户端的不同，转换为查询客户端所在时区的时间。</li><li><strong>TIMESTAMP</strong> ：提交什么时间就保存什么时间，查询时也不做任何转换。</li></ul></blockquote><h3 id="隐式转换" tabindex="-1"><a class="header-anchor" href="#隐式转换" aria-hidden="true">#</a> 隐式转换</h3><p>Hive 中基本数据类型遵循以下的层次结构，按照这个层次结构，子类型到祖先类型允许隐式转换。例如 INT 类型的数据允许隐式转换为 BIGINT 类型。额外注意的是：按照类型层次结构允许将 STRING 类型隐式转换为 DOUBLE 类型。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200224193613.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="复杂类型" tabindex="-1"><a class="header-anchor" href="#复杂类型" aria-hidden="true">#</a> 复杂类型</h3><table><thead><tr><th>类型</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td><strong>STRUCT</strong></td><td>类似于对象，是字段的集合，字段的类型可以不同，可以使用 <code>名称.字段名</code> 方式进行访问</td><td>STRUCT (&#39;xiaoming&#39;, 12 , &#39;2018-12-12&#39;)</td></tr><tr><td><strong>MAP</strong></td><td>键值对的集合，可以使用 <code>名称[key]</code> 的方式访问对应的值</td><td>map(&#39;a&#39;, 1, &#39;b&#39;, 2)</td></tr><tr><td><strong>ARRAY</strong></td><td>数组是一组具有相同类型和名称的变量的集合，可以使用 <code>名称[index]</code> 访问对应的值</td><td>ARRAY(&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;)</td></tr></tbody></table><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><p>如下给出一个基本数据类型和复杂数据类型的使用示例：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> students<span class="token punctuation">(</span>
  name      STRING<span class="token punctuation">,</span>   <span class="token comment">-- 姓名</span>
  age       <span class="token keyword">INT</span><span class="token punctuation">,</span>      <span class="token comment">-- 年龄</span>
  subject   ARRAY<span class="token operator">&lt;</span>STRING<span class="token operator">&gt;</span><span class="token punctuation">,</span>   <span class="token comment">--学科</span>
  score     MAP<span class="token operator">&lt;</span>STRING<span class="token punctuation">,</span><span class="token keyword">FLOAT</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>  <span class="token comment">--各个学科考试成绩</span>
  address   STRUCT<span class="token operator">&lt;</span>houseNumber:<span class="token keyword">int</span><span class="token punctuation">,</span> street:STRING<span class="token punctuation">,</span> city:STRING<span class="token punctuation">,</span> province：STRING<span class="token operator">&gt;</span>  <span class="token comment">--家庭居住地址</span>
<span class="token punctuation">)</span> <span class="token keyword">ROW</span> FORMAT DELIMITED <span class="token keyword">FIELDS</span> <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内容格式" tabindex="-1"><a class="header-anchor" href="#内容格式" aria-hidden="true">#</a> 内容格式</h2><p>当数据存储在文本文件中，必须按照一定格式区别行和列，如使用逗号作为分隔符的 CSV 文件 (Comma-Separated Values) 或者使用制表符作为分隔值的 TSV 文件 (Tab-Separated Values)。但此时也存在一个缺点，就是正常的文件内容中也可能出现逗号或者制表符。</p><p>所以 Hive 默认使用了几个平时很少出现的字符，这些字符一般不会作为内容出现在文件中。Hive 默认的行和列分隔符如下表所示。</p><table><thead><tr><th>分隔符</th><th>描述</th></tr></thead><tbody><tr><td><strong>\\n</strong></td><td>对于文本文件来说，每行是一条记录，所以可以使用换行符来分割记录</td></tr><tr><td><strong>^A (Ctrl+A)</strong></td><td>分割字段 (列)，在 CREATE TABLE 语句中也可以使用八进制编码 <code>\\001</code> 来表示</td></tr><tr><td><strong>^B</strong></td><td>用于分割 ARRAY 或者 STRUCT 中的元素，或者用于 MAP 中键值对之间的分割，<br>在 CREATE TABLE 语句中也可以使用八进制编码 <code>\\002</code> 表示</td></tr><tr><td><strong>^C</strong></td><td>用于 MAP 中键和值之间的分割，在 CREATE TABLE 语句中也可以使用八进制编码 <code>\\003</code> 表示</td></tr></tbody></table><p>使用示例如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> page_view<span class="token punctuation">(</span>viewTime <span class="token keyword">INT</span><span class="token punctuation">,</span> userid <span class="token keyword">BIGINT</span><span class="token punctuation">)</span>
 <span class="token keyword">ROW</span> FORMAT DELIMITED
   <span class="token keyword">FIELDS</span> <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&#39;\\001&#39;</span>
   COLLECTION ITEMS <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&#39;\\002&#39;</span>
   MAP <span class="token keyword">KEYS</span> <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&#39;\\003&#39;</span>
 STORED <span class="token keyword">AS</span> SEQUENCEFILE<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="存储格式" tabindex="-1"><a class="header-anchor" href="#存储格式" aria-hidden="true">#</a> 存储格式</h2><h3 id="支持的存储格式" tabindex="-1"><a class="header-anchor" href="#支持的存储格式" aria-hidden="true">#</a> 支持的存储格式</h3><p>Hive 会在 HDFS 为每个数据库上创建一个目录，数据库中的表是该目录的子目录，表中的数据会以文件的形式存储在对应的表目录下。Hive 支持以下几种文件存储格式：</p><table><thead><tr><th>格式</th><th>说明</th></tr></thead><tbody><tr><td><strong>TextFile</strong></td><td>存储为纯文本文件。 这是 Hive 默认的文件存储格式。这种存储方式数据不做压缩，磁盘开销大，数据解析开销大。</td></tr><tr><td><strong>SequenceFile</strong></td><td>SequenceFile 是 Hadoop API 提供的一种二进制文件，它将数据以&lt;key,value&gt;的形式序列化到文件中。这种二进制文件内部使用 Hadoop 的标准的 Writable 接口实现序列化和反序列化。它与 Hadoop API 中的 MapFile 是互相兼容的。Hive 中的 SequenceFile 继承自 Hadoop API 的 SequenceFile，不过它的 key 为空，使用 value 存放实际的值，这样是为了避免 MR 在运行 map 阶段进行额外的排序操作。</td></tr><tr><td><strong>RCFile</strong></td><td>RCFile 文件格式是 FaceBook 开源的一种 Hive 的文件存储格式，首先将表分为几个行组，对每个行组内的数据按列存储，每一列的数据都是分开存储。</td></tr><tr><td><strong>ORC Files</strong></td><td>ORC 是在一定程度上扩展了 RCFile，是对 RCFile 的优化。</td></tr><tr><td><strong>Avro Files</strong></td><td>Avro 是一个数据序列化系统，设计用于支持大批量数据交换的应用。它的主要特点有：支持二进制序列化方式，可以便捷，快速地处理大量数据；动态语言友好，Avro 提供的机制使动态语言可以方便地处理 Avro 数据。</td></tr><tr><td><strong>Parquet</strong></td><td>Parquet 是基于 Dremel 的数据模型和算法实现的，面向分析型业务的列式存储格式。它通过按列进行高效压缩和特殊的编码技术，从而在降低存储空间的同时提高了 IO 效率。</td></tr></tbody></table><blockquote><p>以上压缩格式中 ORC 和 Parquet 的综合性能突出，使用较为广泛，推荐使用这两种格式。</p></blockquote><h3 id="指定存储格式" tabindex="-1"><a class="header-anchor" href="#指定存储格式" aria-hidden="true">#</a> 指定存储格式</h3><p>通常在创建表的时候使用 <code>STORED AS</code> 参数指定：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> page_view<span class="token punctuation">(</span>viewTime <span class="token keyword">INT</span><span class="token punctuation">,</span> userid <span class="token keyword">BIGINT</span><span class="token punctuation">)</span>
 <span class="token keyword">ROW</span> FORMAT DELIMITED
   <span class="token keyword">FIELDS</span> <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&#39;\\001&#39;</span>
   COLLECTION ITEMS <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&#39;\\002&#39;</span>
   MAP <span class="token keyword">KEYS</span> <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&#39;\\003&#39;</span>
 STORED <span class="token keyword">AS</span> SEQUENCEFILE<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>各个存储文件类型指定方式如下：</p><ul><li>STORED AS TEXTFILE</li><li>STORED AS SEQUENCEFILE</li><li>STORED AS ORC</li><li>STORED AS PARQUET</li><li>STORED AS AVRO</li><li>STORED AS RCFILE</li></ul><h2 id="内部表和外部表" tabindex="-1"><a class="header-anchor" href="#内部表和外部表" aria-hidden="true">#</a> 内部表和外部表</h2><p>内部表又叫做管理表 (Managed/Internal Table)，创建表时不做任何指定，默认创建的就是内部表。想要创建外部表 (External Table)，则需要使用 External 进行修饰。 内部表和外部表主要区别如下：</p><table><thead><tr><th></th><th>内部表</th><th>外部表</th></tr></thead><tbody><tr><td>数据存储位置</td><td>内部表数据存储的位置由 hive.metastore.warehouse.dir 参数指定，默认情况下表的数据存储在 HDFS 的 <code>/user/hive/warehouse/数据库名.db/表名/</code> 目录下</td><td>外部表数据的存储位置创建表时由 <code>Location</code> 参数指定；</td></tr><tr><td>导入数据</td><td>在导入数据到内部表，内部表将数据移动到自己的数据仓库目录下，数据的生命周期由 Hive 来进行管理</td><td>外部表不会将数据移动到自己的数据仓库目录下，只是在元数据中存储了数据的位置</td></tr><tr><td>删除表</td><td>删除元数据（metadata）和文件</td><td>只删除元数据（metadata）</td></tr></tbody></table><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,33),u={href:"https://cwiki.apache.org/confluence/display/Hive/GettingStarted",target:"_blank",rel:"noopener noreferrer"},k={href:"https://tech.meituan.com/2014/02/12/hive-sql-to-mapreduce.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL",target:"_blank",rel:"noopener noreferrer"},T={href:"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+Types",target:"_blank",rel:"noopener noreferrer"},b={href:"https://cwiki.apache.org/confluence/display/Hive/Managed+vs.+External+Tables",target:"_blank",rel:"noopener noreferrer"};function v(m,E){const t=d("ExternalLinkIcon");return o(),i("div",null,[p,e("blockquote",null,[e("p",null,[a("关于 Hive SQL 的详细执行流程可以参考美团技术团队的文章："),e("a",c,[a("Hive SQL 的编译过程"),n(t)])])]),h,e("ul",null,[e("li",null,[e("a",u,[a("Hive Getting Started"),n(t)])]),e("li",null,[e("a",k,[a("Hive SQL 的编译过程"),n(t)])]),e("li",null,[e("a",g,[a("LanguageManual DDL"),n(t)])]),e("li",null,[e("a",T,[a("LanguageManual Types"),n(t)])]),e("li",null,[e("a",b,[a("Managed vs. External Tables"),n(t)])])])])}const I=r(l,[["render",v],["__file","01.Hive入门.html.vue"]]);export{I as default};
