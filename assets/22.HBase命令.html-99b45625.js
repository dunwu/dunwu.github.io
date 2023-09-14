import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as o,a as s,b as a,d as r,e}from"./app-e12ad880.js";const c={},d=e(`<h1 id="hbase-命令" tabindex="-1"><a class="header-anchor" href="#hbase-命令" aria-hidden="true">#</a> HBase 命令</h1><blockquote><p>进入 HBase Shell 控制台：<code>./bin/hbase shell</code></p><p>如果有 kerberos 认证，需要事先使用相应的 keytab 进行一下认证（使用 kinit 命令），认证成功之后再使用 hbase shell 进入可以使用 whoami 命令可查看当前用户.</p></blockquote><h2 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令" aria-hidden="true">#</a> 基本命令</h2><ul><li>获取帮助信息：<code>help</code></li><li>获取命令的详细帮助信息：<code>help &#39;status&#39;</code></li><li>查看服务器状态：<code>status</code></li><li>查看版本信息：<code>version</code></li><li>查看当前登录用户：<code>whoami</code></li></ul><h2 id="ddl" tabindex="-1"><a class="header-anchor" href="#ddl" aria-hidden="true">#</a> DDL</h2><h3 id="创建表" tabindex="-1"><a class="header-anchor" href="#创建表" aria-hidden="true">#</a> 创建表</h3><p>【语法】<code>create &#39;表名称&#39;,&#39;列族名称 1&#39;,&#39;列族名称 2&#39;,&#39;列名称 N&#39;</code></p><p>【示例】</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建一张名为 test 的表，columnFamliy1、columnFamliy2 是 table1 表的列族。</span>
create <span class="token string">&#39;test&#39;</span>,<span class="token string">&#39;columnFamliy1&#39;</span>,<span class="token string">&#39;columnFamliy2&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启用、禁用表" tabindex="-1"><a class="header-anchor" href="#启用、禁用表" aria-hidden="true">#</a> 启用、禁用表</h3><ul><li>启用表：<code>enable &#39;test&#39;</code></li><li>禁用表：<code>disable &#39;test&#39;</code></li><li>检查表是否被启用：<code>is_enabled &#39;test&#39;</code></li><li>检查表是否被禁用：<code>is_disabled &#39;test&#39;</code></li></ul><h3 id="删除表" tabindex="-1"><a class="header-anchor" href="#删除表" aria-hidden="true">#</a> 删除表</h3><p>注意：删除表前需要先禁用表</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>disable <span class="token string">&#39;test&#39;</span>
drop <span class="token string">&#39;test&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改表" tabindex="-1"><a class="header-anchor" href="#修改表" aria-hidden="true">#</a> 修改表</h3><h4 id="添加列族" tabindex="-1"><a class="header-anchor" href="#添加列族" aria-hidden="true">#</a> 添加列族</h4><p><strong>命令格式</strong>： alter &#39;表名&#39;, &#39;列族名&#39;</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>alter <span class="token string">&#39;test&#39;</span>, <span class="token string">&#39;teacherInfo&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除列族" tabindex="-1"><a class="header-anchor" href="#删除列族" aria-hidden="true">#</a> 删除列族</h4>`,19),p=s("p",{NAME:""},[s("strong",null,"命令格式"),a("：alter '表名',")],-1),u=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>alter <span class="token string">&#39;test&#39;</span>, <span class="token punctuation">{</span>NAME <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;teacherInfo&#39;</span>, METHOD <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;delete&#39;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="更改列族存储版本的限制" tabindex="-1"><a class="header-anchor" href="#更改列族存储版本的限制" aria-hidden="true">#</a> 更改列族存储版本的限制</h4><p>默认情况下，列族只存储一个版本的数据，如果需要存储多个版本的数据，则需要修改列族的属性。修改后可通过 <code>desc</code> 命令查看。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>alter <span class="token string">&#39;test&#39;</span>,<span class="token punctuation">{</span>NAME<span class="token operator">=</span><span class="token operator">&gt;</span><span class="token string">&#39;columnFamliy1&#39;</span>,VERSIONS<span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">3</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看表" tabindex="-1"><a class="header-anchor" href="#查看表" aria-hidden="true">#</a> 查看表</h3><ul><li>查看所有表：<code>list</code></li><li>查看表的详细信息：<code>describe &#39;test&#39;</code></li><li>检查表是否存在：<code>exists &#39;test&#39;</code></li></ul><h2 id="增删改" tabindex="-1"><a class="header-anchor" href="#增删改" aria-hidden="true">#</a> 增删改</h2><h3 id="插入数据" tabindex="-1"><a class="header-anchor" href="#插入数据" aria-hidden="true">#</a> 插入数据</h3><p><strong>命令格式</strong>：<code>put &#39;表名&#39;, &#39;行键&#39;,&#39;列族:列&#39;,&#39;值&#39;</code></p><p><strong>注意：如果新增数据的行键值、列族名、列名与原有数据完全相同，则相当于更新操作</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>put <span class="token string">&#39;test&#39;</span>, <span class="token string">&#39;rowkey1&#39;</span>, <span class="token string">&#39;columnFamliy1:a&#39;</span>, <span class="token string">&#39;valueA&#39;</span>
put <span class="token string">&#39;test&#39;</span>, <span class="token string">&#39;rowkey1&#39;</span>, <span class="token string">&#39;columnFamliy1:b&#39;</span>, <span class="token string">&#39;valueB&#39;</span>
put <span class="token string">&#39;test&#39;</span>, <span class="token string">&#39;rowkey1&#39;</span>, <span class="token string">&#39;columnFamliy1:c&#39;</span>, <span class="token string">&#39;valueC&#39;</span>

put <span class="token string">&#39;test&#39;</span>, <span class="token string">&#39;rowkey2&#39;</span>, <span class="token string">&#39;columnFamliy1:a&#39;</span>, <span class="token string">&#39;valueA&#39;</span>
put <span class="token string">&#39;test&#39;</span>, <span class="token string">&#39;rowkey2&#39;</span>, <span class="token string">&#39;columnFamliy1:b&#39;</span>, <span class="token string">&#39;valueB&#39;</span>
put <span class="token string">&#39;test&#39;</span>, <span class="token string">&#39;rowkey2&#39;</span>, <span class="token string">&#39;columnFamliy1:c&#39;</span>, <span class="token string">&#39;valueC&#39;</span>

put <span class="token string">&#39;test&#39;</span>, <span class="token string">&#39;rowkey3&#39;</span>, <span class="token string">&#39;columnFamliy1:a&#39;</span>, <span class="token string">&#39;valueA&#39;</span>
put <span class="token string">&#39;test&#39;</span>, <span class="token string">&#39;rowkey3&#39;</span>, <span class="token string">&#39;columnFamliy1:b&#39;</span>, <span class="token string">&#39;valueB&#39;</span>
put <span class="token string">&#39;test&#39;</span>, <span class="token string">&#39;rowkey3&#39;</span>, <span class="token string">&#39;columnFamliy1:c&#39;</span>, <span class="token string">&#39;valueC&#39;</span>

put <span class="token string">&#39;test&#39;</span>, <span class="token string">&#39;rowkey1&#39;</span>, <span class="token string">&#39;columnFamliy2:a&#39;</span>, <span class="token string">&#39;valueA&#39;</span>
put <span class="token string">&#39;test&#39;</span>, <span class="token string">&#39;rowkey1&#39;</span>, <span class="token string">&#39;columnFamliy2:b&#39;</span>, <span class="token string">&#39;valueB&#39;</span>
put <span class="token string">&#39;test&#39;</span>, <span class="token string">&#39;rowkey1&#39;</span>, <span class="token string">&#39;columnFamliy2:c&#39;</span>, <span class="token string">&#39;valueC&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取指定行、列族、列" tabindex="-1"><a class="header-anchor" href="#获取指定行、列族、列" aria-hidden="true">#</a> 获取指定行、列族、列</h3><ul><li>获取指定行中所有列的数据信息：<code>get &#39;test&#39;,&#39;rowkey2&#39;</code></li><li>获取指定行中指定列族下所有列的数据信息：<code>get &#39;test&#39;,&#39;rowkey2&#39;,&#39;columnFamliy1&#39;</code></li><li>获取指定行中指定列的数据信息：<code>get &#39;test&#39;,&#39;rowkey2&#39;,&#39;columnFamliy1:a&#39;</code></li></ul><h3 id="删除指定行、列" tabindex="-1"><a class="header-anchor" href="#删除指定行、列" aria-hidden="true">#</a> 删除指定行、列</h3><ul><li>删除指定行：<code>delete &#39;test&#39;,&#39;rowkey2&#39;</code></li><li>删除指定行中指定列的数据：<code>delete &#39;test&#39;,&#39;rowkey2&#39;,&#39;columnFamliy1:a&#39;</code></li></ul><h2 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h2><p>hbase 中访问数据有两种基本的方式：</p><ul><li>按指定 rowkey 获取数据：<code>get</code> 方法；</li><li>按指定条件获取数据：<code>scan</code> 方法。</li></ul><p><code>scan</code> 可以设置 begin 和 end 参数来访问一个范围内所有的数据。get 本质上就是 begin 和 end 相等的一种特殊的 scan。</p><h3 id="get-查询" tabindex="-1"><a class="header-anchor" href="#get-查询" aria-hidden="true">#</a> get 查询</h3><ul><li>获取指定行中所有列的数据信息：<code>get &#39;test&#39;,&#39;rowkey2&#39;</code></li><li>获取指定行中指定列族下所有列的数据信息：<code>get &#39;test&#39;,&#39;rowkey2&#39;,&#39;columnFamliy1&#39;</code></li><li>获取指定行中指定列的数据信息：<code>get &#39;test&#39;,&#39;rowkey2&#39;,&#39;columnFamliy1:a&#39;</code></li></ul><h3 id="scan-查询" tabindex="-1"><a class="header-anchor" href="#scan-查询" aria-hidden="true">#</a> scan 查询</h3><h4 id="查询整表数据" tabindex="-1"><a class="header-anchor" href="#查询整表数据" aria-hidden="true">#</a> 查询整表数据</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>scan <span class="token string">&#39;test&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查询指定列簇的数据" tabindex="-1"><a class="header-anchor" href="#查询指定列簇的数据" aria-hidden="true">#</a> 查询指定列簇的数据</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>scan <span class="token string">&#39;test&#39;</span>, <span class="token punctuation">{</span>COLUMN<span class="token operator">=</span><span class="token operator">&gt;</span><span class="token string">&#39;columnFamliy1&#39;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="条件查询" tabindex="-1"><a class="header-anchor" href="#条件查询" aria-hidden="true">#</a> 条件查询</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查询指定列的数据</span>
scan <span class="token string">&#39;test&#39;</span>, <span class="token punctuation">{</span><span class="token environment constant">COLUMNS</span><span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;columnFamliy1:a&#39;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>除了列 <code>（COLUMNS）</code> 修饰词外，HBase 还支持 <code>Limit</code>（限制查询结果行数），<code>STARTROW</code>（<code>ROWKEY</code> 起始行，会先根据这个 <code>key</code> 定位到 <code>region</code>，再向后扫描）、<code>STOPROW</code>(结束行)、<code>TIMERANGE</code>（限定时间戳范围）、<code>VERSIONS</code>（版本数）、和 <code>FILTER</code>（按条件过滤行）等。</p><p>如下代表从 <code>rowkey2</code> 这个 <code>rowkey</code> 开始，查找下两个行的最新 3 个版本的 name 列的数据：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>scan <span class="token string">&#39;test&#39;</span>, <span class="token punctuation">{</span><span class="token environment constant">COLUMNS</span><span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;columnFamliy1:a&#39;</span>,STARTROW <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;rowkey2&#39;</span>,STOPROW <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;rowkey3&#39;</span>,LIMIT<span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">2</span>, <span class="token assign-left variable">VERSIONS</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">3</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="条件过滤" tabindex="-1"><a class="header-anchor" href="#条件过滤" aria-hidden="true">#</a> 条件过滤</h4><p>Filter 可以设定一系列条件来进行过滤。如我们要查询值等于 24 的所有数据：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>scan <span class="token string">&#39;test&#39;</span>, <span class="token assign-left variable">FILTER</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token string">&quot;ValueFilter(=,&#39;binary:24&#39;)&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>值包含 valueA 的所有数据：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>scan <span class="token string">&#39;test&#39;</span>, <span class="token assign-left variable">FILTER</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token string">&quot;ValueFilter(=,&#39;substring:valueA&#39;)&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>列名中的前缀为 b 的：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>scan <span class="token string">&#39;test&#39;</span>, <span class="token assign-left variable">FILTER</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token string">&quot;ColumnPrefixFilter(&#39;b&#39;)&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>FILTER 中支持多个过滤条件通过括号、AND 和 OR 进行组合：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列名中的前缀为 b 且列值中包含1998的数据</span>
scan <span class="token string">&#39;test&#39;</span>, <span class="token assign-left variable">FILTER</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token string">&quot;ColumnPrefixFilter(&#39;b&#39;) AND ValueFilter ValueFilter(=,&#39;substring:A&#39;)&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>PrefixFilter</code> 用于对 Rowkey 的前缀进行判断：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>scan <span class="token string">&#39;test&#39;</span>, <span class="token assign-left variable">FILTER</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token string">&quot;PrefixFilter(&#39;wr&#39;)&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,43),h={href:"https://github.com/heibaiying/BigData-Notes/blob/master/notes/Hbase_Shell.md",target:"_blank",rel:"noopener noreferrer"};function g(k,b){const n=i("ExternalLinkIcon");return l(),o("div",null,[d,p,u,s("ul",null,[s("li",null,[s("a",h,[a("Hbase 常用 Shell 命令"),r(n)])])])])}const y=t(c,[["render",g],["__file","22.HBase命令.html.vue"]]);export{y as default};
