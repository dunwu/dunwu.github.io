import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c,a as n,b as a,d as t,e as l}from"./app-2811837c.js";const i={},u=l(`<h1 id="hbase-java-api-其他高级特性" tabindex="-1"><a class="header-anchor" href="#hbase-java-api-其他高级特性" aria-hidden="true">#</a> HBase Java API 其他高级特性</h1><h2 id="计数器" tabindex="-1"><a class="header-anchor" href="#计数器" aria-hidden="true">#</a> 计数器</h2><p>HBase 提供了一种高级功能：计数器（counter）。<strong>HBase 计数器可以用于实时统计，无需延时较高的批量处理操作</strong>。HBase 有一种机制可以将列当作计数器：即读取并修改（其实就是一种 CAS 模式），其保证了在一次操作中的原子性。否则，用户需要对一行数据加锁，然后读取数据，再对当前数据做加法，最后写回 HBase 并释放行锁，这一系列操作会引起大量的资源竞争问题。</p><p>早期的 HBase 版本会在每次计数器更新操作调用一次 RPC 请求，新版本中可以在一次 RPC 请求中完成多个计数器的更新操作，但是多个计数器必须在同一行。</p><h3 id="计数器使用-shell-命令行" tabindex="-1"><a class="header-anchor" href="#计数器使用-shell-命令行" aria-hidden="true">#</a> 计数器使用 Shell 命令行</h3><p>计数器不需要初始化，创建一个新列时初始值为 0，第一次 <code>incr</code> 操作返回 1。</p><p>计数器使用 <code>incr</code> 命令，增量可以是正数也可以是负数，但是必须是长整数 Long：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>incr <span class="token string">&#39;&lt;table&gt;&#39;</span>,<span class="token string">&#39;&lt;row&gt;&#39;</span>,<span class="token string">&#39;&lt;column&gt;&#39;</span>,<span class="token punctuation">[</span><span class="token string">&#39;&lt;increment-value&gt;&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>计数器使用的例子：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">001</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token operator">&gt;</span> create <span class="token string">&#39;counters&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;daily&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;weekly&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;monthly&#39;</span>
<span class="token number">0</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token number">1.2260</span> seconds

hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">002</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token operator">&gt;</span> incr <span class="token string">&#39;counters&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;20190301&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;daily:hites&#39;</span><span class="token punctuation">,</span><span class="token number">1</span>
COUNTER VALUE <span class="token operator">=</span> <span class="token number">1</span>

hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">003</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token operator">&gt;</span> inc<span class="token string">r&#39;counters&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;20190301&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;daily:hites&#39;</span><span class="token punctuation">,</span><span class="token number">1</span>
COUNTER VALUE <span class="token operator">=</span> <span class="token number">2</span>

hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">004</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token operator">&gt;</span> get_counter <span class="token string">&#39;counters&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;20190301&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;daily:hites&#39;</span>
COUNTER VALUE <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，增加的参数必须是长整型 Long，如果按照错误的格式更新了计数器（如字符串格式），下次调用 <code>incr</code> 会得到错误的结果：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">005</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token operator">&gt;</span> put <span class="token string">&#39;counters&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;20190301&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;daily:clicks&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;1&#39;</span>
<span class="token number">0</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token number">1.3250</span> seconds

hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">006</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token operator">&gt;</span> inc<span class="token string">r&#39;counters&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;20190301&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;daily:clicks&#39;</span><span class="token punctuation">,</span><span class="token number">1</span>
COUNTER VALUE <span class="token operator">=</span> <span class="token number">3530822107858468865</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单计数器" tabindex="-1"><a class="header-anchor" href="#单计数器" aria-hidden="true">#</a> 单计数器</h3><p>操作一个计数器，类似 shell 命令 <code>incr</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">HTable</span> table  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HTable</span><span class="token punctuation">(</span>conf<span class="token punctuation">,</span> <span class="token string">&quot;counters&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">long</span> cnt1 <span class="token operator">=</span> table<span class="token punctuation">.</span><span class="token function">incrementColumnValue</span><span class="token punctuation">(</span><span class="token class-name">Bytes</span><span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">&quot;20190301&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Bytes</span><span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">&quot;daily&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Bytes</span><span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">&quot;hits&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">long</span> cnt2 <span class="token operator">=</span> table<span class="token punctuation">.</span><span class="token function">incrementColumnValue</span><span class="token punctuation">(</span><span class="token class-name">Bytes</span><span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">&quot;20190301&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Bytes</span><span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">&quot;daily&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Bytes</span><span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">&quot;hits&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">long</span> current <span class="token operator">=</span> table<span class="token punctuation">.</span><span class="token function">incrementColumnValue</span><span class="token punctuation">(</span><span class="token class-name">Bytes</span><span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">&quot;20190301&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Bytes</span><span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">&quot;daily&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Bytes</span><span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">&quot;hits&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多计数器" tabindex="-1"><a class="header-anchor" href="#多计数器" aria-hidden="true">#</a> 多计数器</h3><p>使用 <code>Table</code> 的 <code>increment()</code> 方法可以操作一行的多个计数器，需要构建 <code>Increment</code> 实例，并且指定行键：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>HTable table  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">HTable</span><span class="token punctuation">(</span>conf<span class="token punctuation">,</span> <span class="token string">&quot;counters&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Increment incr1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Increment</span><span class="token punctuation">(</span>Bytes<span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">&quot;20190301&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
incr1<span class="token punctuation">.</span><span class="token function">addColumn</span><span class="token punctuation">(</span>Bytes<span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">&quot;daily&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Bytes<span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">&quot;clicks&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
incr1<span class="token punctuation">.</span><span class="token function">addColumn</span><span class="token punctuation">(</span>Bytes<span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">&quot;daily&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Bytes<span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">&quot;hits&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
incr1<span class="token punctuation">.</span><span class="token function">addColumn</span><span class="token punctuation">(</span>Bytes<span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">&quot;weekly&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Bytes<span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">&quot;clicks&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
incr1<span class="token punctuation">.</span><span class="token function">addColumn</span><span class="token punctuation">(</span>Bytes<span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">&quot;weekly&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Bytes<span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">&quot;hits&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Result result <span class="token operator">=</span> table<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>incr1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span>Cell cell <span class="token operator">:</span> result<span class="token punctuation">.</span><span class="token function">rawCells</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Increment 类还有一种构造器：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token function">Increment</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> row<span class="token punctuation">,</span> <span class="token class-name">RowLock</span> rowLock<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>rowLock</code> 参数可选，可以设置用户自定义锁，可以限制其他写程序操作此行，但是不保证读的操作性。</p><h2 id="连接管理" tabindex="-1"><a class="header-anchor" href="#连接管理" aria-hidden="true">#</a> 连接管理</h2><h3 id="连接管理简介" tabindex="-1"><a class="header-anchor" href="#连接管理简介" aria-hidden="true">#</a> 连接管理简介</h3><p>在 HBase Java API 中，<code>Connection</code> 类代表了一个集群连接，封装了与多台服务器（Matser/Region Server）的底层连接以及与 zookeeper 的连接。<code>Connection</code> 通过 <code>ConnectionFactory</code> 类实例化，而连接的生命周期则由调用者管理，调用者必须显示调用 <code>close()</code> 来释放连接。<code>Connection</code> 是线程安全的。创建 <code>Connection</code> 实例的开销很高，因此一个进程只需要实例化一个 <code>Connection</code> 即可。</p><p><code>Table</code> 接口用于对指定的 HBase 表进行 CRUD 操作。一般，通过 <code>Connection</code> 获取 <code>Table</code> 实例，用完后，调用 <code>close()</code> 释放连接。</p><p><code>Admin</code> 接口主要用于创建、删除、查看、启用/禁用 HBase 表，以及一些其他管理操作。一般，通过 <code>Connection</code> 获取 <code>Admin</code> 实例，用完后，调用 <code>close()</code> 释放连接。</p><p><code>Table</code> 和 <code>Admin</code> 实例都是轻量级且并非线程安全的。建议每个线程只实例化一个 <code>Table</code> 或 <code>Admin</code> 实例。</p><h3 id="连接池" tabindex="-1"><a class="header-anchor" href="#连接池" aria-hidden="true">#</a> 连接池</h3><p>问题：HBase 为什么没有提供 <code>Connection</code> 的连接池来获取更好的性能？是否需要自定义 <code>Connection</code> 连接池？</p><p>答：不需要。官方对于 <code>Connection</code> 的使用说明中，明确指出：对于高并发多线程访问的应用程序，一个进程中只需要预先创建一个 <code>Connection</code>。</p><p>问题：HBase 老版本中 <code>HTablePool</code> 为什么废弃？是否需要自定义 Table 的连接池？</p><p>答：不需要。Table 和 Admin 的连接本质上是复用 Connection，实例化是一个较为轻量级的操作，因此，并不需要缓存或池化。实际上，HBase Java API 官方就是这么建议的。</p><p>下面是管理 HBase 连接的一个正确编程模型</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 所有进程共用一个 connection 对象</span>
connection <span class="token operator">=</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 每个线程使用单独的 table 对象</span>
<span class="token class-name">Table</span> table <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">getTable</span><span class="token punctuation">(</span><span class="token class-name">TableName</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;tableName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
   table<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Admin</span> admin <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">getAdmin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
   admin<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,35),k={href:"https://item.jd.com/11321037.html",target:"_blank",rel:"noopener noreferrer"},r={href:"https://github.com/larsgeorge/hbase-book",target:"_blank",rel:"noopener noreferrer"},d={href:"https://developer.aliyun.com/article/581702",target:"_blank",rel:"noopener noreferrer"};function m(v,b){const s=e("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",k,[a("《HBase 权威指南》"),t(s)])]),n("li",null,[n("a",r,[a("《HBase 权威指南》官方源码"),t(s)])]),n("li",null,[n("a",d,[a("连接 HBase 的正确姿势"),t(s)])])])])}const y=p(i,[["render",m],["__file","13.HBaseJavaApi其他高级特性.html.vue"]]);export{y as default};
