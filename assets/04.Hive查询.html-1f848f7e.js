import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as l,a as n,b as s,d as e,e as c}from"./app-c2b0a364.js";const i={},d=n("h1",{id:"hive-数据查询详解",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hive-数据查询详解","aria-hidden":"true"},"#"),s(" Hive 数据查询详解")],-1),r=n("h2",{id:"数据准备",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#数据准备","aria-hidden":"true"},"#"),s(" 数据准备")],-1),u=n("p",null,"为了演示查询操作，这里需要预先创建三张表，并加载测试数据。",-1),k={href:"https://github.com/heibaiying/BigData-Notes/tree/master/resources",target:"_blank",rel:"noopener noreferrer"},m=c(`<h3 id="员工表" tabindex="-1"><a class="header-anchor" href="#员工表" aria-hidden="true">#</a> 员工表</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token comment">-- 建表语句</span>
 <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> emp<span class="token punctuation">(</span>
     empno <span class="token keyword">INT</span><span class="token punctuation">,</span>     <span class="token comment">-- 员工表编号</span>
     ename STRING<span class="token punctuation">,</span>  <span class="token comment">-- 员工姓名</span>
     job STRING<span class="token punctuation">,</span>    <span class="token comment">-- 职位类型</span>
     mgr <span class="token keyword">INT</span><span class="token punctuation">,</span>
     hiredate <span class="token keyword">TIMESTAMP</span><span class="token punctuation">,</span>  <span class="token comment">--雇佣日期</span>
     sal <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">--工资</span>
     comm <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     deptno <span class="token keyword">INT</span><span class="token punctuation">)</span>   <span class="token comment">--部门编号</span>
    <span class="token keyword">ROW</span> FORMAT DELIMITED <span class="token keyword">FIELDS</span> <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">;</span>

  <span class="token comment">--加载数据</span>
<span class="token keyword">LOAD</span> <span class="token keyword">DATA</span> <span class="token keyword">LOCAL</span> INPATH <span class="token string">&quot;/usr/file/emp.txt&quot;</span> OVERWRITE <span class="token keyword">INTO</span> <span class="token keyword">TABLE</span> emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部门表" tabindex="-1"><a class="header-anchor" href="#部门表" aria-hidden="true">#</a> 部门表</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token comment">-- 建表语句</span>
 <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> dept<span class="token punctuation">(</span>
     deptno <span class="token keyword">INT</span><span class="token punctuation">,</span>   <span class="token comment">--部门编号</span>
     dname STRING<span class="token punctuation">,</span>  <span class="token comment">--部门名称</span>
     loc STRING    <span class="token comment">--部门所在的城市</span>
 <span class="token punctuation">)</span>
 <span class="token keyword">ROW</span> FORMAT DELIMITED <span class="token keyword">FIELDS</span> <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">;</span>

 <span class="token comment">--加载数据</span>
 <span class="token keyword">LOAD</span> <span class="token keyword">DATA</span> <span class="token keyword">LOCAL</span> INPATH <span class="token string">&quot;/usr/file/dept.txt&quot;</span> OVERWRITE <span class="token keyword">INTO</span> <span class="token keyword">TABLE</span> dept<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分区表" tabindex="-1"><a class="header-anchor" href="#分区表" aria-hidden="true">#</a> 分区表</h3><p>这里需要额外创建一张分区表，主要是为了演示分区查询：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> EXTERNAL <span class="token keyword">TABLE</span> emp_ptn<span class="token punctuation">(</span>
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


<span class="token comment">--加载数据</span>
<span class="token keyword">LOAD</span> <span class="token keyword">DATA</span> <span class="token keyword">LOCAL</span> INPATH <span class="token string">&quot;/usr/file/emp.txt&quot;</span> OVERWRITE <span class="token keyword">INTO</span> <span class="token keyword">TABLE</span> emp_ptn <span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>deptno<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">LOAD</span> <span class="token keyword">DATA</span> <span class="token keyword">LOCAL</span> INPATH <span class="token string">&quot;/usr/file/emp.txt&quot;</span> OVERWRITE <span class="token keyword">INTO</span> <span class="token keyword">TABLE</span> emp_ptn <span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>deptno<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">)</span>
<span class="token keyword">LOAD</span> <span class="token keyword">DATA</span> <span class="token keyword">LOCAL</span> INPATH <span class="token string">&quot;/usr/file/emp.txt&quot;</span> OVERWRITE <span class="token keyword">INTO</span> <span class="token keyword">TABLE</span> emp_ptn <span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>deptno<span class="token operator">=</span><span class="token number">40</span><span class="token punctuation">)</span>
<span class="token keyword">LOAD</span> <span class="token keyword">DATA</span> <span class="token keyword">LOCAL</span> INPATH <span class="token string">&quot;/usr/file/emp.txt&quot;</span> OVERWRITE <span class="token keyword">INTO</span> <span class="token keyword">TABLE</span> emp_ptn <span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>deptno<span class="token operator">=</span><span class="token number">50</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单表查询" tabindex="-1"><a class="header-anchor" href="#单表查询" aria-hidden="true">#</a> 单表查询</h2><h3 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> SELECT</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查询表中全部数据</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="where" tabindex="-1"><a class="header-anchor" href="#where" aria-hidden="true">#</a> WHERE</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查询 10 号部门中员工编号大于 7782 的员工信息</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> emp <span class="token keyword">WHERE</span> empno <span class="token operator">&gt;</span> <span class="token number">7782</span> <span class="token operator">AND</span> deptno <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="distinct" tabindex="-1"><a class="header-anchor" href="#distinct" aria-hidden="true">#</a> DISTINCT</h3><p>Hive 支持使用 DISTINCT 关键字去重。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查询所有工作类型</span>
<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> job <span class="token keyword">FROM</span> emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分区查询" tabindex="-1"><a class="header-anchor" href="#分区查询" aria-hidden="true">#</a> 分区查询</h3><p>分区查询 (Partition Based Queries)，可以指定某个分区或者分区范围。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查询分区表中部门编号在[20,40]之间的员工</span>
<span class="token keyword">SELECT</span> emp_ptn<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">FROM</span> emp_ptn
<span class="token keyword">WHERE</span> emp_ptn<span class="token punctuation">.</span>deptno <span class="token operator">&gt;=</span> <span class="token number">20</span> <span class="token operator">AND</span> emp_ptn<span class="token punctuation">.</span>deptno <span class="token operator">&lt;=</span> <span class="token number">40</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="limit" tabindex="-1"><a class="header-anchor" href="#limit" aria-hidden="true">#</a> LIMIT</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查询薪资最高的 5 名员工</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> emp <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> sal <span class="token keyword">DESC</span> <span class="token keyword">LIMIT</span> <span class="token number">5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="group-by" tabindex="-1"><a class="header-anchor" href="#group-by" aria-hidden="true">#</a> GROUP BY</h3><p>Hive 支持使用 GROUP BY 进行分组聚合操作。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">set</span> hive<span class="token punctuation">.</span>map<span class="token punctuation">.</span>aggr<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询各个部门薪酬综合</span>
<span class="token keyword">SELECT</span> deptno<span class="token punctuation">,</span><span class="token function">SUM</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token keyword">FROM</span> emp <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> deptno<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>hive.map.aggr</code> 控制程序如何进行聚合。默认值为 false。如果设置为 true，Hive 会在 map 阶段就执行一次聚合。这可以提高聚合效率，但需要消耗更多内存。</p><h3 id="order-and-sort" tabindex="-1"><a class="header-anchor" href="#order-and-sort" aria-hidden="true">#</a> ORDER AND SORT</h3><p>可以使用 ORDER BY 或者 Sort BY 对查询结果进行排序，排序字段可以是整型也可以是字符串：如果是整型，则按照大小排序；如果是字符串，则按照字典序排序。ORDER BY 和 SORT BY 的区别如下：</p><ul><li>使用 ORDER BY 时会有一个 Reducer 对全部查询结果进行排序，可以保证数据的全局有序性；</li><li>使用 SORT BY 时只会在每个 Reducer 中进行排序，这可以保证每个 Reducer 的输出数据是有序的，但不能保证全局有序。</li></ul><p>由于 ORDER BY 的时间可能很长，如果你设置了严格模式 (hive.mapred.mode = strict)，则其后面必须再跟一个 <code>limit</code> 子句。</p><blockquote><p>注 ：hive.mapred.mode 默认值是 nonstrict ，也就是非严格模式。</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查询员工工资，结果按照部门升序，按照工资降序排列</span>
<span class="token keyword">SELECT</span> empno<span class="token punctuation">,</span> deptno<span class="token punctuation">,</span> sal <span class="token keyword">FROM</span> emp <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> deptno <span class="token keyword">ASC</span><span class="token punctuation">,</span> sal <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="having" tabindex="-1"><a class="header-anchor" href="#having" aria-hidden="true">#</a> HAVING</h3><p>可以使用 HAVING 对分组数据进行过滤。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查询工资总和大于 9000 的所有部门</span>
<span class="token keyword">SELECT</span> deptno<span class="token punctuation">,</span><span class="token function">SUM</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token keyword">FROM</span> emp <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> deptno <span class="token keyword">HAVING</span> <span class="token function">SUM</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">9000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="distribute-by" tabindex="-1"><a class="header-anchor" href="#distribute-by" aria-hidden="true">#</a> DISTRIBUTE BY</h3><p>默认情况下，MapReduce 程序会对 Map 输出结果的 Key 值进行散列，并均匀分发到所有 Reducer 上。如果想要把具有相同 Key 值的数据分发到同一个 Reducer 进行处理，这就需要使用 DISTRIBUTE BY 字句。</p><p>需要注意的是，DISTRIBUTE BY 虽然能保证具有相同 Key 值的数据分发到同一个 Reducer，但是不能保证数据在 Reducer 上是有序的。情况如下：</p><p>把以下 5 个数据发送到两个 Reducer 上进行处理：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code>k1
k2
k4
k3
k1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Reducer1 得到如下乱序数据：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code>k1
k2
k1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Reducer2 得到数据如下：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code>k4
k3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想让 Reducer 上的数据时有序的，可以结合 <code>SORT BY</code> 使用 (示例如下)，或者使用下面我们将要介绍的 CLUSTER BY。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 将数据按照部门分发到对应的 Reducer 上处理</span>
<span class="token keyword">SELECT</span> empno<span class="token punctuation">,</span> deptno<span class="token punctuation">,</span> sal <span class="token keyword">FROM</span> emp DISTRIBUTE <span class="token keyword">BY</span> deptno SORT <span class="token keyword">BY</span> deptno <span class="token keyword">ASC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cluster-by" tabindex="-1"><a class="header-anchor" href="#cluster-by" aria-hidden="true">#</a> CLUSTER BY</h3><p>如果 <code>SORT BY</code> 和 <code>DISTRIBUTE BY</code> 指定的是相同字段，且 SORT BY 排序规则是 ASC，此时可以使用 <code>CLUSTER BY</code> 进行替换，同时 <code>CLUSTER BY</code> 可以保证数据在全局是有序的。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> empno<span class="token punctuation">,</span> deptno<span class="token punctuation">,</span> sal <span class="token keyword">FROM</span> emp CLUSTER  <span class="token keyword">BY</span> deptno <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="多表联结查询" tabindex="-1"><a class="header-anchor" href="#多表联结查询" aria-hidden="true">#</a> 多表联结查询</h2><p>Hive 支持内连接，外连接，左外连接，右外连接，笛卡尔连接，这和传统数据库中的概念是一致的，可以参见下图。</p><p>需要特别强调：JOIN 语句的关联条件必须用 ON 指定，不能用 WHERE 指定，否则就会先做笛卡尔积，再过滤，这会导致你得不到预期的结果 (下面的演示会有说明)。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200224195733.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="inner-join" tabindex="-1"><a class="header-anchor" href="#inner-join" aria-hidden="true">#</a> INNER JOIN</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查询员工编号为 7369 的员工的详细信息</span>
<span class="token keyword">SELECT</span> e<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>d<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">FROM</span>
emp e <span class="token keyword">JOIN</span> dept d
<span class="token keyword">ON</span> e<span class="token punctuation">.</span>deptno <span class="token operator">=</span> d<span class="token punctuation">.</span>deptno
<span class="token keyword">WHERE</span> empno<span class="token operator">=</span><span class="token number">7369</span><span class="token punctuation">;</span>

<span class="token comment">--如果是三表或者更多表连接，语法如下</span>
<span class="token keyword">SELECT</span> a<span class="token punctuation">.</span>val<span class="token punctuation">,</span> b<span class="token punctuation">.</span>val<span class="token punctuation">,</span> c<span class="token punctuation">.</span>val <span class="token keyword">FROM</span> a <span class="token keyword">JOIN</span> b <span class="token keyword">ON</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token keyword">key</span> <span class="token operator">=</span> b<span class="token punctuation">.</span>key1<span class="token punctuation">)</span> <span class="token keyword">JOIN</span> c <span class="token keyword">ON</span> <span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token keyword">key</span> <span class="token operator">=</span> b<span class="token punctuation">.</span>key1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="left-outer-join" tabindex="-1"><a class="header-anchor" href="#left-outer-join" aria-hidden="true">#</a> LEFT OUTER JOIN</h3><p>LEFT OUTER JOIN 和 LEFT JOIN 是等价的。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 左连接</span>
<span class="token keyword">SELECT</span> e<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>d<span class="token punctuation">.</span><span class="token operator">*</span>
<span class="token keyword">FROM</span> emp e <span class="token keyword">LEFT</span> <span class="token keyword">OUTER</span>  <span class="token keyword">JOIN</span>  dept d
<span class="token keyword">ON</span> e<span class="token punctuation">.</span>deptno <span class="token operator">=</span> d<span class="token punctuation">.</span>deptno<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="right-outer-join" tabindex="-1"><a class="header-anchor" href="#right-outer-join" aria-hidden="true">#</a> RIGHT OUTER JOIN</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--右连接</span>
<span class="token keyword">SELECT</span> e<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>d<span class="token punctuation">.</span><span class="token operator">*</span>
<span class="token keyword">FROM</span> emp e <span class="token keyword">RIGHT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span>  dept d
<span class="token keyword">ON</span> e<span class="token punctuation">.</span>deptno <span class="token operator">=</span> d<span class="token punctuation">.</span>deptno<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行右连接后，由于 40 号部门下没有任何员工，所以此时员工信息为 NULL。这个查询可以很好的复述上面提到的——JOIN 语句的关联条件必须用 ON 指定，不能用 WHERE 指定。你可以把 ON 改成 WHERE，你会发现无论如何都查不出 40 号部门这条数据，因为笛卡尔运算不会有 (NULL, 40) 这种情况。</p><figure><img src="https://github.com/heibaiying/BigData-Notes/raw/master/pictures/hive-right-join.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="full-outer-join" tabindex="-1"><a class="header-anchor" href="#full-outer-join" aria-hidden="true">#</a> FULL OUTER JOIN</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> e<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>d<span class="token punctuation">.</span><span class="token operator">*</span>
<span class="token keyword">FROM</span> emp e <span class="token keyword">FULL</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span>  dept d
<span class="token keyword">ON</span> e<span class="token punctuation">.</span>deptno <span class="token operator">=</span> d<span class="token punctuation">.</span>deptno<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="left-semi-join" tabindex="-1"><a class="header-anchor" href="#left-semi-join" aria-hidden="true">#</a> LEFT SEMI JOIN</h3><p>LEFT SEMI JOIN （左半连接）是 IN/EXISTS 子查询的一种更高效的实现。</p><ul><li>JOIN 子句中右边的表只能在 ON 子句中设置过滤条件;</li><li>查询结果只包含左边表的数据，所以只能 SELECT 左表中的列。</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查询在纽约办公的所有员工信息</span>
<span class="token keyword">SELECT</span> emp<span class="token punctuation">.</span><span class="token operator">*</span>
<span class="token keyword">FROM</span> emp <span class="token keyword">LEFT</span> SEMI <span class="token keyword">JOIN</span> dept
<span class="token keyword">ON</span> emp<span class="token punctuation">.</span>deptno <span class="token operator">=</span> dept<span class="token punctuation">.</span>deptno <span class="token operator">AND</span> dept<span class="token punctuation">.</span>loc<span class="token operator">=</span><span class="token string">&quot;NEW YORK&quot;</span><span class="token punctuation">;</span>

<span class="token comment">--上面的语句就等价于</span>
<span class="token keyword">SELECT</span> emp<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">FROM</span> emp
<span class="token keyword">WHERE</span> emp<span class="token punctuation">.</span>deptno <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> deptno <span class="token keyword">FROM</span> dept <span class="token keyword">WHERE</span> loc<span class="token operator">=</span><span class="token string">&quot;NEW YORK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> JOIN</h3><p>笛卡尔积连接，这个连接日常的开发中可能很少遇到，且性能消耗比较大，基于这个原因，如果在严格模式下 (hive.mapred.mode = strict)，Hive 会阻止用户执行此操作。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> emp <span class="token keyword">JOIN</span> dept<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="join-优化" tabindex="-1"><a class="header-anchor" href="#join-优化" aria-hidden="true">#</a> JOIN 优化</h2><h3 id="streamtable" tabindex="-1"><a class="header-anchor" href="#streamtable" aria-hidden="true">#</a> STREAMTABLE</h3><p>在多表进行联结的时候，如果每个 ON 字句都使用到共同的列（如下面的 <code>b.key</code>），此时 Hive 会进行优化，将多表 JOIN 在同一个 map / reduce 作业上进行。同时假定查询的最后一个表（如下面的 c 表）是最大的一个表，在对每行记录进行 JOIN 操作时，它将尝试将其他的表缓存起来，然后扫描最后那个表进行计算。因此用户需要保证查询的表的大小从左到右是依次增加的。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token identifier"><span class="token punctuation">\`</span>SELECT a.val, b.val, c.val FROM a JOIN b ON (a.key = b.key) JOIN c ON (c.key = b.key)<span class="token punctuation">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，用户并非需要总是把最大的表放在查询语句的最后面，Hive 提供了 <code>/*+ STREAMTABLE() */</code> 标志，用于标识最大的表，示例如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token comment">/*+ STREAMTABLE(d) */</span>  e<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>d<span class="token punctuation">.</span><span class="token operator">*</span>
<span class="token keyword">FROM</span> emp e <span class="token keyword">JOIN</span> dept d
<span class="token keyword">ON</span> e<span class="token punctuation">.</span>deptno <span class="token operator">=</span> d<span class="token punctuation">.</span>deptno
<span class="token keyword">WHERE</span> job<span class="token operator">=</span><span class="token string">&#39;CLERK&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mapjoin" tabindex="-1"><a class="header-anchor" href="#mapjoin" aria-hidden="true">#</a> MAPJOIN</h3><p>如果所有表中只有一张表是小表，那么 Hive 把这张小表加载到内存中。这时候程序会在 map 阶段直接拿另外一个表的数据和内存中表数据做匹配，由于在 map 就进行了 JOIN 操作，从而可以省略 reduce 过程，这样效率可以提升很多。Hive 中提供了 <code>/*+ MAPJOIN() */</code> 来标记小表，示例如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token comment">/*+ MAPJOIN(d) */</span> e<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>d<span class="token punctuation">.</span><span class="token operator">*</span>
<span class="token keyword">FROM</span> emp e <span class="token keyword">JOIN</span> dept d
<span class="token keyword">ON</span> e<span class="token punctuation">.</span>deptno <span class="token operator">=</span> d<span class="token punctuation">.</span>deptno
<span class="token keyword">WHERE</span> job<span class="token operator">=</span><span class="token string">&#39;CLERK&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="select-的其他用途" tabindex="-1"><a class="header-anchor" href="#select-的其他用途" aria-hidden="true">#</a> SELECT 的其他用途</h2><p>查看当前数据库：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> current_database<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="本地模式" tabindex="-1"><a class="header-anchor" href="#本地模式" aria-hidden="true">#</a> 本地模式</h2><p>在上面演示的语句中，大多数都会触发 MapReduce, 少部分不会触发，比如 <code>select * from emp limit 5</code> 就不会触发 MR，此时 Hive 只是简单的读取数据文件中的内容，然后格式化后进行输出。在需要执行 MapReduce 的查询中，你会发现执行时间可能会很长，这时候你可以选择开启本地模式。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--本地模式默认关闭，需要手动开启此功能</span>
<span class="token keyword">SET</span> hive<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">.</span><span class="token keyword">mode</span><span class="token punctuation">.</span><span class="token keyword">local</span><span class="token punctuation">.</span>auto<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>启用后，Hive 将分析查询中每个 map-reduce 作业的大小，如果满足以下条件，则可以在本地运行它：</p><ul><li>作业的总输入大小低于：hive.exec.mode.local.auto.inputbytes.max（默认为 128MB）；</li><li>map-tasks 的总数小于：hive.exec.mode.local.auto.tasks.max（默认为 4）；</li><li>所需的 reduce 任务总数为 1 或 0。</li></ul><p>因为我们测试的数据集很小，所以你再次去执行上面涉及 MR 操作的查询，你会发现速度会有显著的提升。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,88),v={href:"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+Select",target:"_blank",rel:"noopener noreferrer"},b={href:"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+Joins",target:"_blank",rel:"noopener noreferrer"},h={href:"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+GroupBy",target:"_blank",rel:"noopener noreferrer"},y={href:"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+SortBy",target:"_blank",rel:"noopener noreferrer"};function g(E,w){const a=t("ExternalLinkIcon");return o(),l("div",null,[d,r,u,n("blockquote",null,[n("p",null,[s("数据文件 emp.txt 和 dept.txt 可以从本仓库的"),n("a",k,[s("resources"),e(a)]),s(" 目录下载。")])]),m,n("ul",null,[n("li",null,[n("a",v,[s("LanguageManual Select"),e(a)])]),n("li",null,[n("a",b,[s("LanguageManual Joins"),e(a)])]),n("li",null,[n("a",h,[s("LanguageManual GroupBy"),e(a)])]),n("li",null,[n("a",y,[s("LanguageManual SortBy"),e(a)])])])])}const O=p(i,[["render",g],["__file","04.Hive查询.html.vue"]]);export{O as default};
