import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as s,d as e,e as t}from"./app-1f12e18b.js";const i={},u=t(`<h1 id="hive-常用-dml-操作" tabindex="-1"><a class="header-anchor" href="#hive-常用-dml-操作" aria-hidden="true">#</a> Hive 常用 DML 操作</h1><h2 id="加载文件数据到表" tabindex="-1"><a class="header-anchor" href="#加载文件数据到表" aria-hidden="true">#</a> 加载文件数据到表</h2><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>LOAD DATA <span class="token punctuation">[</span>LOCAL<span class="token punctuation">]</span> INPATH <span class="token string">&#39;filepath&#39;</span> <span class="token punctuation">[</span>OVERWRITE<span class="token punctuation">]</span>
INTO TABLE tablename <span class="token punctuation">[</span>PARTITION <span class="token punctuation">(</span>partcol1<span class="token operator">=</span>val1, <span class="token assign-left variable">partcol2</span><span class="token operator">=</span>val2 <span class="token punctuation">..</span>.<span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>LOCAL</code> 关键字代表从本地文件系统加载文件，省略则代表从 HDFS 上加载文件：</li><li>从本地文件系统加载文件时， <code>filepath</code> 可以是绝对路径也可以是相对路径 (建议使用绝对路径)；</li><li>从 HDFS 加载文件时候，<code>filepath</code> 为文件完整的 URL 地址：如 <code>hdfs://namenode:port/user/hive/project/ data1</code></li><li><code>filepath</code> 可以是文件路径 (在这种情况下 Hive 会将文件移动到表中)，也可以目录路径 (在这种情况下，Hive 会将该目录中的所有文件移动到表中)；</li><li>如果使用 <code>OVERWRITE</code> 关键字，则将删除目标表（或分区）的内容，使用新的数据填充；不使用此关键字，则数据以追加的方式加入；</li><li>加载的目标可以是表或分区。如果是分区表，则必须指定加载数据的分区；</li><li>加载文件的格式必须与建表时使用 <code>STORED AS</code> 指定的存储格式相同。</li></ul>`,5),d=n("p",null,"使用建议：",-1),r=n("strong",null,"不论是本地路径还是 URL 都建议使用完整的",-1),k={href:"http://fs.default.name",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,[n("strong",null,"加载对象是分区表时建议显示指定分区"),s("。在 Hive 3.0 之后，内部将加载 (LOAD) 重写为 INSERT AS SELECT，此时如果不指定分区，INSERT AS SELECT 将假设最后一组列是分区列，如果该列不是表定义的分区，它将抛出错误。为避免错误，还是建议显示指定分区。")],-1),m=t(`<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><p>新建分区表：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>  <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> emp_ptn<span class="token punctuation">(</span>
    empno <span class="token keyword">INT</span><span class="token punctuation">,</span>
    ename STRING<span class="token punctuation">,</span>
    job STRING<span class="token punctuation">,</span>
    mgr <span class="token keyword">INT</span><span class="token punctuation">,</span>
    hiredate <span class="token keyword">TIMESTAMP</span><span class="token punctuation">,</span>
    sal <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    comm <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    PARTITIONED <span class="token keyword">BY</span> <span class="token punctuation">(</span>deptno <span class="token keyword">INT</span><span class="token punctuation">)</span>   <span class="token comment">-- 按照部门编号进行分区</span>
    <span class="token keyword">ROW</span> FORMAT DELIMITED <span class="token keyword">FIELDS</span> <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从 HDFS 上加载数据到分区表：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">LOAD</span> <span class="token keyword">DATA</span>  INPATH <span class="token string">&quot;hdfs://hadoop001:8020/mydir/emp.txt&quot;</span> OVERWRITE <span class="token keyword">INTO</span> <span class="token keyword">TABLE</span> emp_ptn <span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>deptno<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>emp.txt 文件可在本仓库的 resources 目录中下载</p></blockquote><p>加载后表中数据如下,分区列 deptno 全部赋值成 20：</p><h2 id="查询结果插入到表" tabindex="-1"><a class="header-anchor" href="#查询结果插入到表" aria-hidden="true">#</a> 查询结果插入到表</h2><h3 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> OVERWRITE <span class="token keyword">TABLE</span> tablename1 <span class="token punctuation">[</span><span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>partcol1<span class="token operator">=</span>val1<span class="token punctuation">,</span> partcol2<span class="token operator">=</span>val2 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
select_statement1 <span class="token keyword">FROM</span> from_statement<span class="token punctuation">;</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token keyword">TABLE</span> tablename1 <span class="token punctuation">[</span><span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>partcol1<span class="token operator">=</span>val1<span class="token punctuation">,</span> partcol2<span class="token operator">=</span>val2 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
select_statement1 <span class="token keyword">FROM</span> from_statement<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Hive 0.13.0 开始，建表时可以通过使用 TBLPROPERTIES（“immutable”=“true”）来创建不可变表 (immutable table) ，如果不可以变表中存在数据，则 INSERT INTO 失败。（注：INSERT OVERWRITE 的语句不受 <code>immutable</code> 属性的影响）;</p></li><li><p>可以对表或分区执行插入操作。如果表已分区，则必须通过指定所有分区列的值来指定表的特定分区；</p></li><li><p>从 Hive 1.1.0 开始，TABLE 关键字是可选的；</p></li><li><p>从 Hive 1.2.0 开始 ，可以采用 <code>INSERT INTO tablename(z，x，c1)</code> 指明插入列；</p></li><li><p>可以将 SELECT 语句的查询结果插入多个表（或分区），称为多表插入。语法如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">FROM</span> from_statement
<span class="token keyword">INSERT</span> OVERWRITE <span class="token keyword">TABLE</span> tablename1
<span class="token punctuation">[</span><span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>partcol1<span class="token operator">=</span>val1<span class="token punctuation">,</span> partcol2<span class="token operator">=</span>val2 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span><span class="token punctuation">]</span><span class="token punctuation">]</span> select_statement1
<span class="token punctuation">[</span><span class="token keyword">INSERT</span> OVERWRITE <span class="token keyword">TABLE</span> tablename2 <span class="token punctuation">[</span><span class="token keyword">PARTITION</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">[</span><span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span><span class="token punctuation">]</span><span class="token punctuation">]</span> select_statement2<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token keyword">TABLE</span> tablename2 <span class="token punctuation">[</span><span class="token keyword">PARTITION</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span> select_statement2<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="动态插入分区" tabindex="-1"><a class="header-anchor" href="#动态插入分区" aria-hidden="true">#</a> 动态插入分区</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> OVERWRITE <span class="token keyword">TABLE</span> tablename <span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>partcol1<span class="token punctuation">[</span><span class="token operator">=</span>val1<span class="token punctuation">]</span><span class="token punctuation">,</span> partcol2<span class="token punctuation">[</span><span class="token operator">=</span>val2<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
select_statement <span class="token keyword">FROM</span> from_statement<span class="token punctuation">;</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token keyword">TABLE</span> tablename <span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>partcol1<span class="token punctuation">[</span><span class="token operator">=</span>val1<span class="token punctuation">]</span><span class="token punctuation">,</span> partcol2<span class="token punctuation">[</span><span class="token operator">=</span>val2<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
select_statement <span class="token keyword">FROM</span> from_statement<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在向分区表插入数据时候，分区列名是必须的，但是列值是可选的。如果给出了分区列值，我们将其称为静态分区，否则它是动态分区。动态分区列必须在 <code>SELECT</code> 语句的列中最后指定，并且与它们在 PARTITION() 子句中出现的顺序相同。</p><p>注意：Hive 0.9.0 之前的版本动态分区插入是默认禁用的，而 0.9.0 之后的版本则默认启用。以下是动态分区的相关配置：</p><table><thead><tr><th>配置</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>hive.exec.dynamic.partition</code></td><td><code>true</code></td><td>需要设置为 true 才能启用动态分区插入</td></tr><tr><td><code>hive.exec.dynamic.partition.mode</code></td><td><code>strict</code></td><td>在严格模式 (strict) 下，用户必须至少指定一个静态分区，以防用户意外覆盖所有分区，在非严格模式下，允许所有分区都是动态的</td></tr><tr><td><code>hive.exec.max.dynamic.partitions.pernode</code></td><td>100</td><td>允许在每个 mapper/reducer 节点中创建的最大动态分区数</td></tr><tr><td><code>hive.exec.max.dynamic.partitions</code></td><td>1000</td><td>允许总共创建的最大动态分区数</td></tr><tr><td><code>hive.exec.max.created.files</code></td><td>100000</td><td>作业中所有 mapper/reducer 创建的 HDFS 文件的最大数量</td></tr><tr><td><code>hive.error.on.empty.partition</code></td><td><code>false</code></td><td>如果动态分区插入生成空结果，是否抛出异常</td></tr></tbody></table><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h3><p>（1）新建 emp 表，作为查询对象表</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> emp<span class="token punctuation">(</span>
    empno <span class="token keyword">INT</span><span class="token punctuation">,</span>
    ename STRING<span class="token punctuation">,</span>
    job STRING<span class="token punctuation">,</span>
    mgr <span class="token keyword">INT</span><span class="token punctuation">,</span>
    hiredate <span class="token keyword">TIMESTAMP</span><span class="token punctuation">,</span>
    sal <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    comm <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    deptno <span class="token keyword">INT</span><span class="token punctuation">)</span>
    <span class="token keyword">ROW</span> FORMAT DELIMITED <span class="token keyword">FIELDS</span> <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">;</span>

 <span class="token comment">-- 加载数据到 emp 表中 这里直接从本地加载</span>
<span class="token keyword">load</span> <span class="token keyword">data</span> <span class="token keyword">local</span> inpath <span class="token string">&quot;/usr/file/emp.txt&quot;</span> <span class="token keyword">into</span> <span class="token keyword">table</span> emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成后 <code>emp</code> 表中数据如下：</p><p>（2）为清晰演示，先清空 <code>emp_ptn</code> 表中加载的数据：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">TRUNCATE</span> <span class="token keyword">TABLE</span> emp_ptn<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（3）静态分区演示：从 <code>emp</code> 表中查询部门编号为 20 的员工数据，并插入 <code>emp_ptn</code> 表中，语句如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> OVERWRITE <span class="token keyword">TABLE</span> emp_ptn <span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>deptno<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">SELECT</span> empno<span class="token punctuation">,</span>ename<span class="token punctuation">,</span>job<span class="token punctuation">,</span>mgr<span class="token punctuation">,</span>hiredate<span class="token punctuation">,</span>sal<span class="token punctuation">,</span>comm <span class="token keyword">FROM</span> emp <span class="token keyword">WHERE</span> deptno<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>完成后 <code>emp_ptn</code> 表中数据如下：</p><p>（4）接着演示动态分区：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 由于我们只有一个分区，且还是动态分区，所以需要关闭严格默认。因为在严格模式下，用户必须至少指定一个静态分区</span>
<span class="token keyword">set</span> hive<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">.</span>dynamic<span class="token punctuation">.</span><span class="token keyword">partition</span><span class="token punctuation">.</span><span class="token keyword">mode</span><span class="token operator">=</span>nonstrict<span class="token punctuation">;</span>

<span class="token comment">-- 动态分区   此时查询语句的最后一列为动态分区列，即 deptno</span>
<span class="token keyword">INSERT</span> OVERWRITE <span class="token keyword">TABLE</span> emp_ptn <span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>deptno<span class="token punctuation">)</span>
<span class="token keyword">SELECT</span> empno<span class="token punctuation">,</span>ename<span class="token punctuation">,</span>job<span class="token punctuation">,</span>mgr<span class="token punctuation">,</span>hiredate<span class="token punctuation">,</span>sal<span class="token punctuation">,</span>comm<span class="token punctuation">,</span>deptno <span class="token keyword">FROM</span> emp <span class="token keyword">WHERE</span> deptno<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成后 <code>emp_ptn</code> 表中数据如下：</p><h2 id="使用-sql-语句插入值" tabindex="-1"><a class="header-anchor" href="#使用-sql-语句插入值" aria-hidden="true">#</a> 使用 SQL 语句插入值</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token keyword">TABLE</span> tablename <span class="token punctuation">[</span><span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>partcol1<span class="token punctuation">[</span><span class="token operator">=</span>val1<span class="token punctuation">]</span><span class="token punctuation">,</span> partcol2<span class="token punctuation">[</span><span class="token operator">=</span>val2<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">VALUES</span> <span class="token punctuation">(</span> <span class="token keyword">value</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token keyword">value</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用时必须为表中的每个列都提供值。不支持只向部分列插入值（可以为缺省值的列提供空值来消除这个弊端）；</li><li>如果目标表表支持 ACID 及其事务管理器，则插入后自动提交；</li><li>不支持支持复杂类型 (array, map, struct, union) 的插入。</li></ul><h2 id="更新和删除数据" tabindex="-1"><a class="header-anchor" href="#更新和删除数据" aria-hidden="true">#</a> 更新和删除数据</h2><h3 id="语法-2" tabindex="-1"><a class="header-anchor" href="#语法-2" aria-hidden="true">#</a> 语法</h3><p>更新和删除的语法比较简单，和关系型数据库一致。需要注意的是这两个操作都只能在支持 ACID 的表，也就是事务表上才能执行。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 更新</span>
<span class="token keyword">UPDATE</span> tablename <span class="token keyword">SET</span> <span class="token keyword">column</span> <span class="token operator">=</span> <span class="token keyword">value</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token keyword">column</span> <span class="token operator">=</span> <span class="token keyword">value</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">WHERE</span> expression<span class="token punctuation">]</span>

<span class="token comment">--删除</span>
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> tablename <span class="token punctuation">[</span><span class="token keyword">WHERE</span> expression<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例</h3><p><strong>1. 修改配置</strong></p><p>首先需要更改 <code>hive-site.xml</code>，添加如下配置，开启事务支持，配置完成后需要重启 Hive 服务。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hive.support.concurrency<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hive.enforce.bucketing<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hive.exec.dynamic.partition.mode<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>nonstrict<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hive.txn.manager<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>org.apache.hadoop.hive.ql.lockmgr.DbTxnManager<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hive.compactor.initiator.on<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hive.in.test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. 创建测试表</strong></p>`,40),g=n("code",null,"transactional = true",-1),b={href:"https://cwiki.apache.org/confluence/display/Hive/Hive+Transactions",target:"_blank",rel:"noopener noreferrer"},h=t(`<ul><li>必须是 buckets Table;</li><li>仅支持 ORC 文件格式；</li><li>不支持 LOAD DATA ...语句。</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> emp_ts<span class="token punctuation">(</span>
  empno <span class="token keyword">int</span><span class="token punctuation">,</span>
  ename String
<span class="token punctuation">)</span>
<span class="token keyword">CLUSTERED</span> <span class="token keyword">BY</span> <span class="token punctuation">(</span>empno<span class="token punctuation">)</span> <span class="token keyword">INTO</span> <span class="token number">2</span> BUCKETS STORED <span class="token keyword">AS</span> ORC
TBLPROPERTIES <span class="token punctuation">(</span><span class="token string">&quot;transactional&quot;</span><span class="token operator">=</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. 插入测试数据</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token keyword">TABLE</span> emp_ts  <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&quot;ming&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&quot;hong&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>插入数据依靠的是 MapReduce 作业，执行成功后数据如下：</p><p><strong>4. 测试更新和删除</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--更新数据</span>
<span class="token keyword">UPDATE</span> emp_ts <span class="token keyword">SET</span> ename <span class="token operator">=</span> <span class="token string">&quot;lan&quot;</span>  <span class="token keyword">WHERE</span>  empno<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">--删除数据</span>
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> emp_ts <span class="token keyword">WHERE</span> empno<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新和删除数据依靠的也是 MapReduce 作业，执行成功后数据如下：</p><h2 id="查询结果写出到文件系统" tabindex="-1"><a class="header-anchor" href="#查询结果写出到文件系统" aria-hidden="true">#</a> 查询结果写出到文件系统</h2><h3 id="语法-3" tabindex="-1"><a class="header-anchor" href="#语法-3" aria-hidden="true">#</a> 语法</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> OVERWRITE <span class="token punctuation">[</span><span class="token keyword">LOCAL</span><span class="token punctuation">]</span> DIRECTORY directory1
  <span class="token punctuation">[</span><span class="token keyword">ROW</span> FORMAT row_format<span class="token punctuation">]</span> <span class="token punctuation">[</span>STORED <span class="token keyword">AS</span> file_format<span class="token punctuation">]</span>
  <span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">FROM</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>OVERWRITE 关键字表示输出文件存在时，先删除后再重新写入；</p></li><li><p>和 Load 语句一样，建议无论是本地路径还是 URL 地址都使用完整的；</p></li><li><p>写入文件系统的数据被序列化为文本，其中列默认由^A 分隔，行由换行符分隔。如果列不是基本类型，则将其序列化为 JSON 格式。其中行分隔符不允许自定义，但列分隔符可以自定义，如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 定义列分隔符为&#39;\\t&#39;</span>
<span class="token keyword">insert</span> overwrite <span class="token keyword">local</span> directory <span class="token string">&#39;./test-04&#39;</span>
<span class="token keyword">row</span> format delimited
<span class="token keyword">FIELDS</span> <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&#39;\\t&#39;</span>
COLLECTION ITEMS <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&#39;,&#39;</span>
MAP <span class="token keyword">KEYS</span> <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&#39;:&#39;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> src<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例</h3><p>这里我们将上面创建的 <code>emp_ptn</code> 表导出到本地文件系统，语句如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> OVERWRITE <span class="token keyword">LOCAL</span> DIRECTORY <span class="token string">&#39;/usr/file/ouput&#39;</span>
<span class="token keyword">ROW</span> FORMAT DELIMITED
<span class="token keyword">FIELDS</span> <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&#39;\\t&#39;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> emp_ptn<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导出结果如下：</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,17),y={href:"https://cwiki.apache.org/confluence/display/Hive/Hive+Transactions",target:"_blank",rel:"noopener noreferrer"},T={href:"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DML",target:"_blank",rel:"noopener noreferrer"};function E(w,I){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("blockquote",null,[d,n("p",null,[r,s("。虽然可以使用不完整的 URL 地址，此时 Hive 将使用 hadoop 中的 "),n("a",k,[s("fs.default.name"),e(a)]),s(" 配置来推断地址，但是为避免不必要的错误，建议使用完整的本地路径或 URL 地址；")]),v]),m,n("p",null,[s("创建用于测试的事务表，建表时候指定属性 "),g,s(" 则代表该表是事务表。需要注意的是，按照"),n("a",b,[s("官方文档"),e(a)]),s(" 的说明，目前 Hive 中的事务表有以下限制：")]),h,n("ul",null,[n("li",null,[n("a",y,[s("Hive Transactions"),e(a)])]),n("li",null,[n("a",T,[s("Hive Data Manipulation Language"),e(a)])])])])}const O=p(i,[["render",E],["__file","06.HiveDML.html.vue"]]);export{O as default};
