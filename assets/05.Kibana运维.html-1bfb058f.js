import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as s,c as o,a as e,b as a,d,e as n}from"./app-64c8372a.js";const c={},r=n('<h1 id="kibana-运维" tabindex="-1"><a class="header-anchor" href="#kibana-运维" aria-hidden="true">#</a> Kibana 运维</h1><blockquote><p>通过 Kibana，您可以对自己的 Elasticsearch 进行可视化，还可以在 Elastic Stack 中进行导航，这样您便可以进行各种操作了，从跟踪查询负载，到理解请求如何流经您的整个应用，都能轻松完成。</p></blockquote><h2 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1. 安装</h2><h3 id="_1-1-环境要求" tabindex="-1"><a class="header-anchor" href="#_1-1-环境要求" aria-hidden="true">#</a> 1.1. 环境要求</h3><blockquote><p>版本：Elastic Stack 7.4</p></blockquote><h3 id="_1-2-安装步骤" tabindex="-1"><a class="header-anchor" href="#_1-2-安装步骤" aria-hidden="true">#</a> 1.2. 安装步骤</h3><p>安装步骤如下：</p>',7),u={href:"https://www.elastic.co/downloads/kibana",target:"_blank",rel:"noopener noreferrer"},h=e("li",null,[a("修改 "),e("code",null,"config/kibana.yml"),a(" 配置文件，设置 "),e("code",null,"elasticsearch.url"),a(" 指向 Elasticsearch 实例。")],-1),p=e("li",null,[a("运行 "),e("code",null,"bin/kibana"),a(" （Windows 上运行 "),e("code",null,"bin\\kibana.bat"),a("）")],-1),g={href:"http://localhost:5601",target:"_blank",rel:"noopener noreferrer"},b=n('<h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用" aria-hidden="true">#</a> 2. 使用</h2><h3 id="_2-1-检索" tabindex="-1"><a class="header-anchor" href="#_2-1-检索" aria-hidden="true">#</a> 2.1. 检索</h3><p>单击侧面导航栏中的 <code>检索（Discover）</code> ，可以显示 <code>Kibana</code> 的数据查询功能功能。</p><figure><img src="https://www.elastic.co/guide/en/kibana/current/images/tutorial-discover.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在搜索栏中，您可以输入 Elasticsearch 查询条件来搜索您的数据。您可以在 <code>Discover</code> 页面中浏览结果并在 <code>Visualize</code> 页面中创建已保存搜索条件的可视化。</p><p>当前索引模式显示在查询栏下方。索引模式确定提交查询时搜索哪些索引。要搜索一组不同的索引，请从下拉菜单中选择不同的模式。要添加索引模式（index pattern），请转至 <code>Management/Kibana/Index Patterns</code> 并单击 <code>Add New</code>。</p><p>您可以使用字段名称和您感兴趣的值构建搜索。对于数字字段，可以使用比较运算符，如大于（&gt;），小于（&lt;）或等于（=）。您可以将元素与逻辑运算符 <code>AND</code>，<code>OR</code> 和 <code>NOT</code> 链接，全部使用大写。</p><p>默认情况下，每个匹配文档都显示所有字段。要选择要显示的文档字段，请将鼠标悬停在“可用字段”列表上，然后单击要包含的每个字段旁边的添加按钮。例如，如果只添加 account_number，则显示将更改为包含五个帐号的简单列表：</p><figure><img src="https://www.elastic.co/guide/en/kibana/6.1/images/tutorial-discover-3.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',9),v={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax",target:"_blank",rel:"noopener noreferrer"},m=n(`<p>这里说明一些最基本的查询语义。</p><p>查询字符串会被解析为一系列的术语和运算符。一个术语可以是一个单词（如：quick、brown）或用双引号包围的短语（如&quot;quick brown&quot;）。</p><p>查询操作允许您自定义搜索 - 下面介绍了可用的选项。</p><h4 id="_2-1-1-字段名称" tabindex="-1"><a class="header-anchor" href="#_2-1-1-字段名称" aria-hidden="true">#</a> 2.1.1. 字段名称</h4><p>正如查询字符串查询中所述，将在搜索条件中搜索 default_field，但可以在查询语法中指定其他字段：</p><p>例如：</p><ul><li>查询 <code>status</code> 字段中包含 <code>active</code> 关键字</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>status:active
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>title</code> 字段包含 <code>quick</code> 或 <code>brown</code> 关键字。如果您省略 <code>OR</code> 运算符，则将使用默认运算符</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>title:(quick OR brown)
title:(quick brown)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>author 字段查找精确的短语 &quot;john smith&quot;，即精确查找。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>author:&quot;John Smith&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>任意字段 <code>book.title</code>，<code>book.content</code> 或 <code>book.date</code> 都包含 <code>quick</code> 或 <code>brown</code>（注意我们需要如何使用 <code>\\*</code> 表示通配符）</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>book.\\*:(quick brown)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>title 字段包含任意非 null 值</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>_exists_:title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-1-2-通配符" tabindex="-1"><a class="header-anchor" href="#_2-1-2-通配符" aria-hidden="true">#</a> 2.1.2. 通配符</h4><p>ELK 提供了 ? 和 * 两个通配符。</p><ul><li><code>?</code> 表示任意单个字符；</li><li><code>*</code> 表示任意零个或多个字符。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>qu?ck bro*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,20),x=e("strong",null,"注意：通配符查询会使用大量的内存并且执行性能较为糟糕，所以请慎用。",-1),_=e("strong",null,"提示",-1),f={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-exists-query.html",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"field：*",-1),k=e("code",null,"{“field”：“”}",-1),q=e("code",null,"“field”：null}",-1),z=e("strong",null,"提示",-1),y=e("code",null,"*ing",-1),O=e("code",null,"allow_leading_wildcard",-1),N=e("code",null,"false",-1),D=n(`<h4 id="_2-1-3-正则表达式" tabindex="-1"><a class="header-anchor" href="#_2-1-3-正则表达式" aria-hidden="true">#</a> 2.1.3. 正则表达式</h4><p>可以通过 <code>/</code> 将正则表达式包裹在查询字符串中进行查询</p><p>例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>name:/joh?n(ath[oa]n)/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),T={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-regexp-query.html#regexp-syntax",target:"_blank",rel:"noopener noreferrer"},E=n(`<h4 id="_2-1-4-模糊查询" tabindex="-1"><a class="header-anchor" href="#_2-1-4-模糊查询" aria-hidden="true">#</a> 2.1.4. 模糊查询</h4><p>我们可以使用 <code>~</code> 运算符来进行模糊查询。</p><p>例：</p><p>假设我们实际想查询</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>quick brown forks
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是，由于拼写错误，我们的查询关键字变成如下情况，依然可以查到想要的结果。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>quikc\\~ brwn\\~ foks\\~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这种模糊查询使用 Damerau-Levenshtein 距离来查找所有匹配最多两个更改的项。所谓的更改是指单个字符的插入，删除或替换，或者两个相邻字符的换位。</p><p>默认编辑距离为 <code>2</code>，但编辑距离为 <code>1</code> 应足以捕捉所有人类拼写错误的 80％。它可以被指定为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>quikc\\~1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-1-5-近似检索" tabindex="-1"><a class="header-anchor" href="#_2-1-5-近似检索" aria-hidden="true">#</a> 2.1.5. 近似检索</h4><p>尽管短语查询（例如，<code>john smith</code>）期望所有的词条都是完全相同的顺序，但是近似查询允许指定的单词进一步分开或以不同的顺序排列。与模糊查询可以为单词中的字符指定最大编辑距离一样，近似搜索也允许我们指定短语中单词的最大编辑距离：</p><p>例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;fox quick&quot;\\~5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>字段中的文本越接近查询字符串中指定的原始顺序，该文档就越被认为是相关的。当与上面的示例查询相比时，短语 <code>&quot;quick fox&quot;</code> 将被认为比 <code>&quot;quick brown fox&quot;</code> 更近似查询条件。</p><h4 id="_2-1-6-范围" tabindex="-1"><a class="header-anchor" href="#_2-1-6-范围" aria-hidden="true">#</a> 2.1.6. 范围</h4><p>可以为日期，数字或字符串字段指定范围。闭区间范围用方括号 <code>[min TO max]</code> 和开区间范围用花括号 <code>{min TO max}</code> 来指定。</p><p>我们不妨来看一些示例。</p><ul><li>2012 年的所有日子</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>date:[2012-01-01 TO 2012-12-31]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>数字 1 到 5</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>count:[1 TO 5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在 <code>alpha</code> 和 <code>omega</code> 之间的标签，不包括 <code>alpha</code> 和 <code>omega</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tags:{alpha TO omega}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>10 以上的数字</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>count:[10 TO *]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>2012 年以前的所有日期</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>date:{* TO 2012-01-01}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此外，开区间和闭区间也可以组合使用</p><ul><li>数组 1 到 5，但不包括 5</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>count:[1 TO 5}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一边无界的范围也可以使用以下语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>age:&gt;10
age:&gt;=10
age:&lt;10
age:&lt;=10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，你也可以使用 AND 运算符来得到连个查询结果的交集</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>age:(&gt;=10 AND &lt;20)
age:(+&gt;=10 +&lt;20)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-7-boosting" tabindex="-1"><a class="header-anchor" href="#_2-1-7-boosting" aria-hidden="true">#</a> 2.1.7. Boosting</h4><p>使用操作符 <code>^</code> 使一个术语比另一个术语更相关。例如，如果我们想查找所有有关狐狸的文档，但我们对狐狸特别感兴趣：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>quick^2 fox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认提升值是 1，但可以是任何正浮点数。 0 到 1 之间的提升减少了相关性。</p><p>增强也可以应用于短语或组：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;john smith&quot;^2   (foo bar)^4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-1-8-布尔操作" tabindex="-1"><a class="header-anchor" href="#_2-1-8-布尔操作" aria-hidden="true">#</a> 2.1.8. 布尔操作</h4><p>默认情况下，只要一个词匹配，所有词都是可选的。搜索 <code>foo bar baz</code> 将查找包含 <code>foo</code> 或 <code>bar</code> 或 <code>baz</code> 中的一个或多个的任何文档。我们已经讨论了上面的<code>default_operator</code>，它允许你强制要求所有的项，但也有布尔运算符可以在查询字符串本身中使用，以提供更多的控制。</p><p>首选的操作符是 <code>+</code>（此术语必须存在）和 <code>-</code> （此术语不得存在）。所有其他条款是可选的。例如，这个查询：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>quick brown +fox -news
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这条查询意味着：</p><ul><li>fox 必须存在</li><li>news 必须不存在</li><li>quick 和 brown 是可有可无的</li></ul><p>熟悉的运算符 <code>AND</code>，<code>OR</code> 和 <code>NOT</code>（也写成 <code>&amp;&amp;</code>，<code>||</code> 和 <code>!</code>）也被支持。然而，这些操作符有一定的优先级：<code>NOT</code> 优先于 <code>AND</code>，<code>AND</code> 优先于 <code>OR</code>。虽然 <code>+</code> 和 <code>-</code> 仅影响运算符右侧的术语，但 <code>AND</code> 和 <code>OR</code> 会影响左侧和右侧的术语。</p><h4 id="_2-1-9-分组" tabindex="-1"><a class="header-anchor" href="#_2-1-9-分组" aria-hidden="true">#</a> 2.1.9. 分组</h4><p>多个术语或子句可以用圆括号组合在一起，形成子查询</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(quick OR brown) AND fox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以使用组来定位特定的字段，或者增强子查询的结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>status:(active OR pending) title:(full text search)^2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-1-10-保留字" tabindex="-1"><a class="header-anchor" href="#_2-1-10-保留字" aria-hidden="true">#</a> 2.1.10. 保留字</h4><p>如果你需要使用任何在你的查询本身中作为操作符的字符（而不是作为操作符），那么你应该用一个反斜杠来转义它们。例如，要搜索（1 + 1）= 2，您需要将查询写为 <code>\\(1\\+1\\)\\=2</code></p><p>保留字符是：<code>+ - = &amp;&amp; || &gt; &lt; ! ( ) { } [ ] ^ &quot; ~ * ? : \\ /</code></p><p>无法正确地转义这些特殊字符可能会导致语法错误，从而阻止您的查询运行。</p><h4 id="_2-1-11-空查询" tabindex="-1"><a class="header-anchor" href="#_2-1-11-空查询" aria-hidden="true">#</a> 2.1.11. 空查询</h4><p>如果查询字符串为空或仅包含空格，则查询将生成一个空的结果集。</p><h3 id="_2-2-可视化" tabindex="-1"><a class="header-anchor" href="#_2-2-可视化" aria-hidden="true">#</a> 2.2. 可视化</h3><p>要想使用可视化的方式展示您的数据，请单击侧面导航栏中的 <code>可视化（Visualize）</code>。</p><p>Visualize 工具使您能够以多种方式（如饼图、柱状图、曲线图、分布图等）查看数据。要开始使用，请点击蓝色的 <code>Create a visualization</code> 或 <code>+</code> 按钮。</p>`,62),K=e("img",{src:"https://www.elastic.co/guide/en/kibana/6.1/images/tutorial-visualize-landing.png",alt:"https://www.elastic.co/guide/en/kibana/6.1/images/tutorial-visualize-landing.png",tabindex:"0",loading:"lazy"},null,-1),A={href:"https://www.elastic.co/guide/en/kibana/6.1/images/tutorial-visualize-landing.png",target:"_blank",rel:"noopener noreferrer"},V=e("p",null,"有许多可视化类型可供选择。",-1),R=e("img",{src:"https://www.elastic.co/guide/en/kibana/6.1/images/tutorial-visualize-wizard-step-1.png",alt:"https://www.elastic.co/guide/en/kibana/6.1/images/tutorial-visualize-wizard-step-1.png",tabindex:"0",loading:"lazy"},null,-1),S={href:"https://www.elastic.co/guide/en/kibana/6.1/images/tutorial-visualize-wizard-step-1.png",target:"_blank",rel:"noopener noreferrer"},j=e("p",null,"下面，我们来看创建几个图标示例：",-1),B=e("h4",{id:"_2-2-1-pie",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-2-1-pie","aria-hidden":"true"},"#"),a(" 2.2.1. Pie")],-1),L=e("p",null,"您可以从保存的搜索中构建可视化文件，也可以输入新的搜索条件。要输入新的搜索条件，首先需要选择一个索引模式来指定要搜索的索引。",-1),I=e("p",null,"默认搜索匹配所有文档。最初，一个“切片”包含整个饼图：",-1),C=e("img",{src:"https://www.elastic.co/guide/en/kibana/6.1/images/tutorial-visualize-pie-1.png",alt:"https://www.elastic.co/guide/en/kibana/6.1/images/tutorial-visualize-pie-1.png",tabindex:"0",loading:"lazy"},null,-1),P={href:"https://www.elastic.co/guide/en/kibana/6.1/images/tutorial-visualize-pie-1.png",target:"_blank",rel:"noopener noreferrer"},W=n(`<p>要指定在图表中展示哪些数据，请使用 Elasticsearch 存储桶聚合。分组汇总只是将与您的搜索条件相匹配的文档分类到不同的分类中，也称为分组。</p><p>为每个范围定义一个存储桶：</p><ol><li>单击 <code>Split Slices</code>。</li><li>在 <code>Aggregation</code> 列表中选择 <code>Terms</code>。<em>注意：这里的 Terms 是 Elk 采集数据时定义好的字段或标签</em>。</li><li>在 <code>Field</code> 列表中选择 <code>level.keyword</code>。</li><li>点击 <img src="https://www.elastic.co/guide/en/kibana/6.1/images/apply-changes-button.png" alt="images/apply-changes-button.png" loading="lazy"> 按钮来更新图表。</li></ol><figure><img src="https://upload-images.jianshu.io/upload_images/3101171-7fb2042dc6d59520.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>完成后，如果想要保存这个图表，可以点击页面最上方一栏中的 <code>Save</code> 按钮。</p><h4 id="_2-2-2-vertical-bar" tabindex="-1"><a class="header-anchor" href="#_2-2-2-vertical-bar" aria-hidden="true">#</a> 2.2.2. Vertical Bar</h4><p>我们在展示一下如何创建柱状图。</p><ol><li>点击蓝色的 <code>Create a visualization</code> 或 <code>+</code> 按钮。选择 <code>Vertical Bar</code></li><li>选择索引模式。由于您尚未定义任何 bucket ，因此您会看到一个大栏，显示与默认通配符查询匹配的文档总数。</li><li>指定 Y 轴所代表的字段</li><li>指定 X 轴所代表的字段</li><li>点击 <img src="https://www.elastic.co/guide/en/kibana/6.1/images/apply-changes-button.png" alt="images/apply-changes-button.png" loading="lazy"> 按钮来更新图表。</li></ol><figure><img src="https://upload-images.jianshu.io/upload_images/3101171-5aa7627284c19a56.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>完成后，如果想要保存这个图表，可以点击页面最上方一栏中的 <code>Save</code> 按钮。</p><h3 id="_2-3-报表" tabindex="-1"><a class="header-anchor" href="#_2-3-报表" aria-hidden="true">#</a> 2.3. 报表</h3><p><code>报表（Dashboard）</code> 可以整合和共享 <code>Visualize</code> 集合。</p><ol><li>点击侧面导航栏中的 Dashboard。</li><li>点击添加显示保存的可视化列表。</li><li>点击之前保存的 <code>Visualize</code>，然后点击列表底部的小向上箭头关闭可视化列表。</li><li>将鼠标悬停在可视化对象上会显示允许您编辑，移动，删除和调整可视化对象大小的容器控件。</li></ol><h2 id="_3-faq" tabindex="-1"><a class="header-anchor" href="#_3-faq" aria-hidden="true">#</a> 3. FAQ</h2><h3 id="_3-1-kibana-no-default-index-pattern-warning" tabindex="-1"><a class="header-anchor" href="#_3-1-kibana-no-default-index-pattern-warning" aria-hidden="true">#</a> 3.1. Kibana No Default Index Pattern Warning</h3><p>**问题：**安装 ELK 后，访问 kibana 页面时，提示以下错误信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Warning No default index pattern. You must select or create one to continue.
...
Unable to fetch mapping. Do you have indices matching the pattern?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这就说明 logstash 没有把日志写入到 elasticsearch。</p><p><strong>解决方法：</strong></p><p>检查 logstash 与 elasticsearch 之间的通讯是否有问题，一般问题就出在这。</p><h2 id="_4-参考资料" tabindex="-1"><a class="header-anchor" href="#_4-参考资料" aria-hidden="true">#</a> 4. 参考资料</h2>`,21),F={href:"https://www.elastic.co/cn/products/kibana",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://github.com/elastic/kibana",target:"_blank",rel:"noopener noreferrer"},G={href:"https://www.elastic.co/guide/en/kibana/current/index.html",target:"_blank",rel:"noopener noreferrer"};function J(M,Q){const i=l("ExternalLinkIcon");return s(),o("div",null,[r,e("ol",null,[e("li",null,[a("在 "),e("a",u,[a("kibana 官方下载地址"),d(i)]),a("下载所需版本包并解压到本地。")]),h,p,e("li",null,[a("在浏览器上访问 "),e("a",g,[a("http://localhost:5601"),d(i)])])]),b,e("p",null,[a("kibana 的搜索栏遵循 "),e("a",v,[a("query-string-syntax"),d(i)]),a(" 文档中所说明的查询语义。")]),m,e("blockquote",null,[e("p",null,[x,a(" > "),_,a("：纯通配符 * 被写入 "),e("a",f,[a("exsits"),d(i)]),a(" 查询，从而提高了查询效率。因此，通配符 "),w,a(" 将匹配包含空值的文档，如："),k,a("，但是如果字段丢失或显示将值置为 null 则不匹配，如："),q,a(" > "),z,a("：在一个单词的开头（例如："),y,a("）使用通配符这种方式的查询量特别大，因为索引中的所有术语都需要检查，以防万一匹配。通过将 "),O,a(" 设置为 "),N,a("，可以禁用。")])]),D,e("p",null,[a("支持的正则表达式语义可以参考："),e("a",T,[a("Regular expression syntax"),d(i)])]),E,e("figure",null,[K,e("figcaption",null,[e("a",A,[a("https://www.elastic.co/guide/en/kibana/6.1/images/tutorial-visualize-landing.png"),d(i)])])]),V,e("figure",null,[R,e("figcaption",null,[e("a",S,[a("https://www.elastic.co/guide/en/kibana/6.1/images/tutorial-visualize-wizard-step-1.png"),d(i)])])]),j,B,L,I,e("figure",null,[C,e("figcaption",null,[e("a",P,[a("https://www.elastic.co/guide/en/kibana/6.1/images/tutorial-visualize-pie-1.png"),d(i)])])]),W,e("ul",null,[e("li",null,[e("a",F,[a("Kibana 官网"),d(i)])]),e("li",null,[e("a",Y,[a("Kibana Github"),d(i)])]),e("li",null,[e("a",G,[a("Kibana 官方文档"),d(i)])])])])}const H=t(c,[["render",J],["__file","05.Kibana运维.html.vue"]]);export{H as default};
