import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as s,a as t,b as n,d as a,e as d}from"./app-2793f0f0.js";const i={},g=d(`<h1 id="mongodb-索引" tabindex="-1"><a class="header-anchor" href="#mongodb-索引" aria-hidden="true">#</a> MongoDB 索引</h1><h2 id="mongodb-索引简介" tabindex="-1"><a class="header-anchor" href="#mongodb-索引简介" aria-hidden="true">#</a> MongoDB 索引简介</h2><h3 id="索引的作用" tabindex="-1"><a class="header-anchor" href="#索引的作用" aria-hidden="true">#</a> 索引的作用</h3><p><strong>MongoDB 在 collection 数据级别上定义索引</strong>。</p><p>索引通常能够极大的提高查询的效率。如果<strong>没有索引</strong>，MongoDB 在读取数据时<strong>必须扫描 collection 中的每个 document</strong> 并选取那些符合查询条件的记录。</p><p>这种扫描全集合的查询是非常低效的，特别是在处理大量的数据时。查询可能要花费几十秒甚至几分钟，这种性能开销是不可接受的。</p><p>索引是特殊的数据结构，索引存储在一个易于遍历读取的数据集合中，索引是对数据库表中一列或多列的值进行排序的一种结构。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200921210621.svg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="createindex-方法" tabindex="-1"><a class="header-anchor" href="#createindex-方法" aria-hidden="true">#</a> createIndex() 方法</h3><p><strong>MongoDB 使用 <code>createIndex()</code> 方法来创建索引</strong>。</p><p><code>createIndex()</code> 语法如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>db<span class="token punctuation">.</span>collection<span class="token punctuation">.</span><span class="token function">createIndex</span><span class="token punctuation">(</span> <span class="token operator">&lt;</span>key and index type specification<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>options<span class="token operator">&gt;</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>createIndex()</code> 可选参数列表如下：</p><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">background</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">建索引过程会阻塞其它数据库操作，background 可指定以后台方式创建索引，即增加 &quot;background&quot; 可选参数。 &quot;background&quot; 默认值为<strong>false</strong>。</td></tr><tr><td style="text-align:left;">unique</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">建立的索引是否唯一。指定为 true 创建唯一索引。默认值为<strong>false</strong>.</td></tr><tr><td style="text-align:left;">name</td><td style="text-align:left;">string</td><td style="text-align:left;">索引的名称。如果未指定，MongoDB 的通过连接索引的字段名和排序顺序生成一个索引名称。</td></tr><tr><td style="text-align:left;">dropDups</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">**3.0+版本已废弃。**在建立唯一索引时是否删除重复记录,指定 true 创建唯一索引。默认值为 <strong>false</strong>.</td></tr><tr><td style="text-align:left;">sparse</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">对文档中不存在的字段数据不启用索引；这个参数需要特别注意，如果设置为 true 的话，在索引字段中不会查询出不包含对应字段的文档.。默认值为 <strong>false</strong>.</td></tr><tr><td style="text-align:left;">expireAfterSeconds</td><td style="text-align:left;">integer</td><td style="text-align:left;">指定一个以秒为单位的数值，完成 TTL 设定，设定集合的生存时间。</td></tr><tr><td style="text-align:left;">v</td><td style="text-align:left;">index version</td><td style="text-align:left;">索引的版本号。默认的索引版本取决于 mongod 创建索引时运行的版本。</td></tr><tr><td style="text-align:left;">weights</td><td style="text-align:left;">document</td><td style="text-align:left;">索引权重值，数值在 1 到 99,999 之间，表示该索引相对于其他索引字段的得分权重。</td></tr><tr><td style="text-align:left;">default_language</td><td style="text-align:left;">string</td><td style="text-align:left;">对于文本索引，该参数决定了停用词及词干和词器的规则的列表。 默认为英语</td></tr><tr><td style="text-align:left;">language_override</td><td style="text-align:left;">string</td><td style="text-align:left;">对于文本索引，该参数指定了包含在文档中的字段名，语言覆盖默认的 language，默认值为 language.</td></tr></tbody></table><p>【示例】使用 name 作为索引，并且按照降序排序</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collection.createIndex( { name: -1 } )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,17),c=t("strong",null,"官方",-1),p={href:"https://www.mongodb.com/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/mongodb/mongo",target:"_blank",rel:"noopener noreferrer"},f={href:"https://university.mongodb.com/",target:"_blank",rel:"noopener noreferrer"},h=t("strong",null,"教程",-1),x={href:"https://www.runoob.com/mongodb/mongodb-tutorial.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://time.geekbang.org/course/intro/100040001",target:"_blank",rel:"noopener noreferrer"};function b(_,y){const e=o("ExternalLinkIcon");return r(),s("div",null,[g,t("ul",null,[t("li",null,[c,t("ul",null,[t("li",null,[t("a",p,[n("MongoDB 官网"),a(e)])]),t("li",null,[t("a",u,[n("MongoDB Github"),a(e)])]),t("li",null,[t("a",f,[n("MongoDB 官方免费教程"),a(e)])])])]),t("li",null,[h,t("ul",null,[t("li",null,[t("a",x,[n("MongoDB 教程"),a(e)])]),t("li",null,[t("a",m,[n("MongoDB 高手课"),a(e)])])])])])])}const B=l(i,[["render",b],["__file","07.MongoDB索引.html.vue"]]);export{B as default};
