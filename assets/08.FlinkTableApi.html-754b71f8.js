import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c,a as n,b as a,d as e,e as t}from"./app-207caadd.js";const i={},u=n("h1",{id:"flink-table-api-sql",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#flink-table-api-sql","aria-hidden":"true"},"#"),a(" Flink Table API & SQL")],-1),r={href:"https://calcite.apache.org/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/libs/cep/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/libs/gelly/overview/",target:"_blank",rel:"noopener noreferrer"},v=t(`<h2 id="jar-依赖" tabindex="-1"><a class="header-anchor" href="#jar-依赖" aria-hidden="true">#</a> jar 依赖</h2><p>必要依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.flink<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>flink-table-api-java-bridge_2.11<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.14.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除此之外，如果你想在 IDE 本地运行你的程序，你需要添加下面的模块，具体用哪个取决于你使用哪个 Planner：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.flink<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>flink-table-planner_2.11<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.14.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.flink<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>flink-streaming-scala_2.11<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.14.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),g={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/dev/table/sourcessinks/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/dev/table/functions/udfs/",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.flink<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>flink-table-common<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.14.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="概念与通用-api" tabindex="-1"><a class="header-anchor" href="#概念与通用-api" aria-hidden="true">#</a> 概念与通用 API</h2><p>Table API 和 SQL 集成在同一套 API 中。 这套 API 的核心概念是<code>Table</code>，用作查询的输入和输出。</p><h3 id="table-api-和-sql-程序的结构" tabindex="-1"><a class="header-anchor" href="#table-api-和-sql-程序的结构" aria-hidden="true">#</a> Table API 和 SQL 程序的结构</h3><p>所有用于批处理和流处理的 Table API 和 SQL 程序都遵循相同的模式。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>flink<span class="token punctuation">.</span>table<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>flink<span class="token punctuation">.</span>connector<span class="token punctuation">.</span>datagen<span class="token punctuation">.</span>table<span class="token punctuation">.</span></span><span class="token class-name">DataGenOptions</span></span><span class="token punctuation">;</span>

<span class="token comment">// Create a TableEnvironment for batch or streaming execution.</span>
<span class="token comment">// See the &quot;Create a TableEnvironment&quot; section for details.</span>
<span class="token class-name">TableEnvironment</span> tableEnv <span class="token operator">=</span> <span class="token class-name">TableEnvironment</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token comment">/*…*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Create a source table</span>
tableEnv<span class="token punctuation">.</span><span class="token function">createTemporaryTable</span><span class="token punctuation">(</span><span class="token string">&quot;SourceTable&quot;</span><span class="token punctuation">,</span> <span class="token class-name">TableDescriptor</span><span class="token punctuation">.</span><span class="token function">forConnector</span><span class="token punctuation">(</span><span class="token string">&quot;datagen&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">schema</span><span class="token punctuation">(</span><span class="token class-name">Schema</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string">&quot;f0&quot;</span><span class="token punctuation">,</span> <span class="token class-name">DataTypes</span><span class="token punctuation">.</span><span class="token function">STRING</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token class-name">DataGenOptions</span><span class="token punctuation">.</span><span class="token constant">ROWS_PER_SECOND</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// Create a sink table (using SQL DDL)</span>
tableEnv<span class="token punctuation">.</span><span class="token function">executeSql</span><span class="token punctuation">(</span><span class="token string">&quot;CREATE TEMPORARY TABLE SinkTable WITH (&#39;connector&#39; = &#39;blackhole&#39;) LIKE SourceTable&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Create a Table object from a Table API query</span>
<span class="token class-name">Table</span> table2 <span class="token operator">=</span> tableEnv<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;SourceTable&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Create a Table object from a SQL query</span>
<span class="token class-name">Table</span> table3 <span class="token operator">=</span> tableEnv<span class="token punctuation">.</span><span class="token function">sqlQuery</span><span class="token punctuation">(</span><span class="token string">&quot;SELECT * FROM SourceTable&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Emit a Table API result Table to a TableSink, same for SQL result</span>
<span class="token class-name">TableResult</span> tableResult <span class="token operator">=</span> table2<span class="token punctuation">.</span><span class="token function">executeInsert</span><span class="token punctuation">(</span><span class="token string">&quot;SinkTable&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建-tableenvironment" tabindex="-1"><a class="header-anchor" href="#创建-tableenvironment" aria-hidden="true">#</a> 创建 <code>TableEnvironment</code></h3><p><code>TableEnvironment</code> 是 Table API 和 SQL 的核心概念。它负责:</p><ul><li>在内部的 catalog 中注册 <code>Table</code></li><li>注册外部的 catalog</li><li>加载可插拔模块</li><li>执行 SQL 查询</li><li>注册自定义函数 （scalar、table 或 aggregation）</li><li><code>DataStream</code> 和 <code>Table</code> 之间的转换(面向 <code>StreamTableEnvironment</code> )</li></ul><h3 id="在-catalog-中创建表" tabindex="-1"><a class="header-anchor" href="#在-catalog-中创建表" aria-hidden="true">#</a> 在 Catalog 中创建表</h3><p><code>TableEnvironment</code> 维护着一个由标识符（identifier）创建的表 catalog 的映射。标识符由三个部分组成：catalog 名称、数据库名称以及对象名称。</p><p><code>Table</code> 可以是虚拟的（视图 <code>VIEWS</code>）也可以是常规的（表 <code>TABLES</code>）。视图 <code>VIEWS</code>可以从已经存在的<code>Table</code>中创建，一般是 Table API 或者 SQL 的查询结果。 表<code>TABLES</code>描述的是外部数据，例如文件、数据库表或者消息队列。</p><h3 id="查询表" tabindex="-1"><a class="header-anchor" href="#查询表" aria-hidden="true">#</a> 查询表</h3><p>Table API 示例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// get a TableEnvironment</span>
<span class="token class-name">TableEnvironment</span> tableEnv <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span> <span class="token comment">// see &quot;Create a TableEnvironment&quot; section</span>

<span class="token comment">// register Orders table</span>

<span class="token comment">// scan registered Orders table</span>
<span class="token class-name">Table</span> orders <span class="token operator">=</span> tableEnv<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Orders&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// compute revenue for all customers from France</span>
<span class="token class-name">Table</span> revenue <span class="token operator">=</span> orders
  <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>$<span class="token punctuation">(</span><span class="token string">&quot;cCountry&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEqual</span><span class="token punctuation">(</span><span class="token string">&quot;FRANCE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">groupBy</span><span class="token punctuation">(</span>$<span class="token punctuation">(</span><span class="token string">&quot;cID&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> $<span class="token punctuation">(</span><span class="token string">&quot;cName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span>$<span class="token punctuation">(</span><span class="token string">&quot;cID&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> $<span class="token punctuation">(</span><span class="token string">&quot;cName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> $<span class="token punctuation">(</span><span class="token string">&quot;revenue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&quot;revSum&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// emit or convert Table</span>
<span class="token comment">// execute query</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL 示例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// get a TableEnvironment</span>
<span class="token class-name">TableEnvironment</span> tableEnv <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span> <span class="token comment">// see &quot;Create a TableEnvironment&quot; section</span>

<span class="token comment">// register Orders table</span>

<span class="token comment">// compute revenue for all customers from France</span>
<span class="token class-name">Table</span> revenue <span class="token operator">=</span> tableEnv<span class="token punctuation">.</span><span class="token function">sqlQuery</span><span class="token punctuation">(</span>
    <span class="token string">&quot;SELECT cID, cName, SUM(revenue) AS revSum &quot;</span> <span class="token operator">+</span>
    <span class="token string">&quot;FROM Orders &quot;</span> <span class="token operator">+</span>
    <span class="token string">&quot;WHERE cCountry = &#39;FRANCE&#39; &quot;</span> <span class="token operator">+</span>
    <span class="token string">&quot;GROUP BY cID, cName&quot;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// emit or convert Table</span>
<span class="token comment">// execute query</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输出表" tabindex="-1"><a class="header-anchor" href="#输出表" aria-hidden="true">#</a> 输出表</h3><p><code>Table</code> 通过写入 <code>TableSink</code> 输出。<code>TableSink</code> 是一个通用接口，用于支持多种文件格式（如 CSV、Apache Parquet、Apache Avro）、存储系统（如 JDBC、Apache HBase、Apache Cassandra、Elasticsearch）或消息队列系统（如 Apache Kafka、RabbitMQ）。</p><p>批处理 <code>Table</code> 只能写入 <code>BatchTableSink</code>，而流处理 <code>Table</code> 需要指定写入 <code>AppendStreamTableSink</code>，<code>RetractStreamTableSink</code> 或者 <code>UpsertStreamTableSink</code>。</p><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><p>通用类型与（嵌套的）复合类型 （如：POJO、tuples、rows、Scala case 类) 都可以作为行的字段。</p>`,22),h={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/dev/table/functions/systemfunctions/#value-access-functions",target:"_blank",rel:"noopener noreferrer"},f={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/dev/table/functions/udfs/",target:"_blank",rel:"noopener noreferrer"},_=n("h2",{id:"sql",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sql","aria-hidden":"true"},"#"),a(" SQL")],-1),T=n("p",null,"Flink 支持以下语句：",-1),q={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/dev/table/sql/queries/overview/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/dev/table/sql/create/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/dev/table/sql/drop/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/dev/table/sql/alter/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/dev/table/sql/insert/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/dev/table/sql/queries/hints/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/dev/table/sql/describe/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/dev/table/sql/explain/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/dev/table/sql/use/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/dev/table/sql/show/",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/dev/table/sql/load/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/dev/table/sql/unload/",target:"_blank",rel:"noopener noreferrer"},N=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),a(" 参考资料")],-1),O={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/dev/table/common/",target:"_blank",rel:"noopener noreferrer"};function R(z,B){const s=o("ExternalLinkIcon");return l(),c("div",null,[u,n("p",null,[a("Apache Flink 有两种关系型 API 来做流批统一处理：Table API 和 SQL。Table API 是用于 Scala 和 Java 语言的查询 API，它可以用一种非常直观的方式来组合使用选取、过滤、join 等关系型算子。Flink SQL 是基于 "),n("a",r,[a("Apache Calcite"),e(s)]),a(" 来实现的标准 SQL。无论输入是连续的（流式）还是有界的（批处理），在两个接口中指定的查询都具有相同的语义，并指定相同的结果。")]),n("p",null,[a("Table API 和 SQL 两种 API 是紧密集成的，以及 DataStream API。你可以在这些 API 之间，以及一些基于这些 API 的库之间轻松的切换。比如，你可以先用 "),n("a",d,[a("CEP"),e(s)]),a(" 从 DataStream 中做模式匹配，然后用 Table API 来分析匹配的结果；或者你可以用 SQL 来扫描、过滤、聚合一个批式的表，然后再跑一个 "),n("a",k,[a("Gelly 图算法"),e(s)]),a(" 来处理已经预处理好的数据。")]),v,n("p",null,[a("如果你想实现"),n("a",g,[a("自定义格式或连接器"),e(s)]),a(" 用于（反）序列化行或一组"),n("a",b,[a("用户定义的函数"),e(s)]),a("，下面的依赖就足够了，编译出来的 jar 文件可以直接给 SQL Client 使用：")]),m,n("p",null,[a("复合类型的字段任意的嵌套可被 "),n("a",h,[a("值访问函数"),e(s)]),a(" 访问。")]),n("p",null,[a("通用类型将会被视为一个黑箱，且可以被 "),n("a",f,[a("用户自定义函数"),e(s)]),a(" 传递或引用。")]),_,T,n("ul",null,[n("li",null,[n("a",q,[a("SELECT (Queries)"),e(s)])]),n("li",null,[n("a",S,[a("CREATE TABLE, DATABASE, VIEW, FUNCTION"),e(s)])]),n("li",null,[n("a",E,[a("DROP TABLE, DATABASE, VIEW, FUNCTION"),e(s)])]),n("li",null,[n("a",I,[a("ALTER TABLE, DATABASE, FUNCTION"),e(s)])]),n("li",null,[n("a",A,[a("INSERT"),e(s)])]),n("li",null,[n("a",x,[a("SQL HINTS"),e(s)])]),n("li",null,[n("a",L,[a("DESCRIBE"),e(s)])]),n("li",null,[n("a",P,[a("EXPLAIN"),e(s)])]),n("li",null,[n("a",C,[a("USE"),e(s)])]),n("li",null,[n("a",y,[a("SHOW"),e(s)])]),n("li",null,[n("a",Q,[a("LOAD"),e(s)])]),n("li",null,[n("a",D,[a("UNLOAD"),e(s)])])]),N,n("ul",null,[n("li",null,[n("a",O,[a("Flink 官方文档之 Flink Table API & SQL"),e(s)])])])])}const V=p(i,[["render",R],["__file","08.FlinkTableApi.html.vue"]]);export{V as default};
