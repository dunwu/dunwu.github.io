import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as o,a as n,b as s,d as e,e as l}from"./app-1f12e18b.js";const i={},u=l(`<h1 id="hbase-java-api-管理功能" tabindex="-1"><a class="header-anchor" href="#hbase-java-api-管理功能" aria-hidden="true">#</a> HBase Java API 管理功能</h1><h2 id="初始化-admin-实例" tabindex="-1"><a class="header-anchor" href="#初始化-admin-实例" aria-hidden="true">#</a> 初始化 Admin 实例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Configuration</span> conf <span class="token operator">=</span> <span class="token class-name">HBaseConfiguration</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span>conf<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Admin</span> admin <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">getAdmin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="管理命名空间" tabindex="-1"><a class="header-anchor" href="#管理命名空间" aria-hidden="true">#</a> 管理命名空间</h2><h3 id="查看命名空间" tabindex="-1"><a class="header-anchor" href="#查看命名空间" aria-hidden="true">#</a> 查看命名空间</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">TableName</span><span class="token punctuation">[</span><span class="token punctuation">]</span> tableNames <span class="token operator">=</span> admin<span class="token punctuation">.</span><span class="token function">listTableNamesByNamespace</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">TableName</span> tableName <span class="token operator">:</span> tableNames<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>tableName<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建命名空间" tabindex="-1"><a class="header-anchor" href="#创建命名空间" aria-hidden="true">#</a> 创建命名空间</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">NamespaceDescriptor</span> namespace <span class="token operator">=</span> <span class="token class-name">NamespaceDescriptor</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
admin<span class="token punctuation">.</span><span class="token function">createNamespace</span><span class="token punctuation">(</span>namespace<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改命名空间" tabindex="-1"><a class="header-anchor" href="#修改命名空间" aria-hidden="true">#</a> 修改命名空间</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">NamespaceDescriptor</span> namespace <span class="token operator">=</span> <span class="token class-name">NamespaceDescriptor</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span>
                                                   <span class="token punctuation">.</span><span class="token function">addConfiguration</span><span class="token punctuation">(</span><span class="token string">&quot;Description&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Test Namespace&quot;</span><span class="token punctuation">)</span>
                                                   <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
admin<span class="token punctuation">.</span><span class="token function">modifyNamespace</span><span class="token punctuation">(</span>namespace<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除命名空间" tabindex="-1"><a class="header-anchor" href="#删除命名空间" aria-hidden="true">#</a> 删除命名空间</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>admin<span class="token punctuation">.</span><span class="token function">deleteNamespace</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="管理表" tabindex="-1"><a class="header-anchor" href="#管理表" aria-hidden="true">#</a> 管理表</h2><h3 id="创建表" tabindex="-1"><a class="header-anchor" href="#创建表" aria-hidden="true">#</a> 创建表</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">TableName</span> tableName <span class="token operator">=</span> <span class="token class-name">TableName</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;test:test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">HTableDescriptor</span> tableDescriptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HTableDescriptor</span><span class="token punctuation">(</span>tableName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">HColumnDescriptor</span> columnDescriptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HColumnDescriptor</span><span class="token punctuation">(</span><span class="token class-name">Bytes</span><span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">&quot;cf&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
tableDescriptor<span class="token punctuation">.</span><span class="token function">addFamily</span><span class="token punctuation">(</span>columnDescriptor<span class="token punctuation">)</span><span class="token punctuation">;</span>
admin<span class="token punctuation">.</span><span class="token function">createTable</span><span class="token punctuation">(</span>tableDescriptor<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除表" tabindex="-1"><a class="header-anchor" href="#删除表" aria-hidden="true">#</a> 删除表</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>admin<span class="token punctuation">.</span><span class="token function">deleteTable</span><span class="token punctuation">(</span><span class="token class-name">TableName</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;test:test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改表" tabindex="-1"><a class="header-anchor" href="#修改表" aria-hidden="true">#</a> 修改表</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 原始表</span>
<span class="token class-name">TableName</span> tableName <span class="token operator">=</span> <span class="token class-name">TableName</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;test:test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">HColumnDescriptor</span> columnDescriptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HColumnDescriptor</span><span class="token punctuation">(</span><span class="token string">&quot;cf1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">HTableDescriptor</span> tableDescriptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HTableDescriptor</span><span class="token punctuation">(</span>tableName<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">addFamily</span><span class="token punctuation">(</span>columnDescriptor<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token string">&quot;Description&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Original Table&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
admin<span class="token punctuation">.</span><span class="token function">createTable</span><span class="token punctuation">(</span>tableDescriptor<span class="token punctuation">,</span> <span class="token class-name">Bytes</span><span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Bytes</span><span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token number">10000L</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 修改表</span>
<span class="token class-name">HTableDescriptor</span> newTableDescriptor <span class="token operator">=</span> admin<span class="token punctuation">.</span><span class="token function">getTableDescriptor</span><span class="token punctuation">(</span>tableName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">HColumnDescriptor</span> newColumnDescriptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HColumnDescriptor</span><span class="token punctuation">(</span><span class="token string">&quot;cf2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
newTableDescriptor<span class="token punctuation">.</span><span class="token function">addFamily</span><span class="token punctuation">(</span>newColumnDescriptor<span class="token punctuation">)</span>
                  <span class="token punctuation">.</span><span class="token function">setMaxFileSize</span><span class="token punctuation">(</span><span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024L</span><span class="token punctuation">)</span>
                  <span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token string">&quot;Description&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Modified Table&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 修改表必须先禁用再想修改</span>
admin<span class="token punctuation">.</span><span class="token function">disableTable</span><span class="token punctuation">(</span>tableName<span class="token punctuation">)</span><span class="token punctuation">;</span>
admin<span class="token punctuation">.</span><span class="token function">modifyTable</span><span class="token punctuation">(</span>tableName<span class="token punctuation">,</span> newTableDescriptor<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="禁用表" tabindex="-1"><a class="header-anchor" href="#禁用表" aria-hidden="true">#</a> 禁用表</h3><p>需要注意：HBase 表在删除前，必须先禁用。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>admin<span class="token punctuation">.</span><span class="token function">disableTable</span><span class="token punctuation">(</span><span class="token class-name">TableName</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;test:test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启用表" tabindex="-1"><a class="header-anchor" href="#启用表" aria-hidden="true">#</a> 启用表</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>admin.enableTable(TableName.valueOf(&quot;test:test&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看表是否有效" tabindex="-1"><a class="header-anchor" href="#查看表是否有效" aria-hidden="true">#</a> 查看表是否有效</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">boolean</span> isOk <span class="token operator">=</span> admin<span class="token punctuation">.</span><span class="token function">isTableAvailable</span><span class="token punctuation">(</span>tableName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Table available: &quot;</span> <span class="token operator">+</span> isOk<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,27),r={href:"https://item.jd.com/11321037.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/larsgeorge/hbase-book",target:"_blank",rel:"noopener noreferrer"},k={href:"https://developer.aliyun.com/article/581702",target:"_blank",rel:"noopener noreferrer"};function m(v,b){const a=p("ExternalLinkIcon");return c(),o("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[s("《HBase 权威指南》"),e(a)])]),n("li",null,[n("a",d,[s("《HBase 权威指南》官方源码"),e(a)])]),n("li",null,[n("a",k,[s("连接 HBase 的正确姿势"),e(a)])])])])}const g=t(i,[["render",m],["__file","14.HBaseJavaApi管理功能.html.vue"]]);export{g as default};
