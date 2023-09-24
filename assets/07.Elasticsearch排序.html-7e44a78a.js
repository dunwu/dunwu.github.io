import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as p,c as i,a as s,b as n,d as e,e as t}from"./app-9cc2d019.js";const l={},r=t('<h1 id="elasticsearch-排序" tabindex="-1"><a class="header-anchor" href="#elasticsearch-排序" aria-hidden="true">#</a> Elasticsearch 排序</h1><p>在 Elasticsearch 中，默认排序是<strong>按照相关性的评分（_score）<strong>进行降序排序，也可以按照</strong>字段的值排序</strong>、<strong>多级排序</strong>、<strong>多值字段排序、基于 geo（地理位置）排序以及自定义脚本排序</strong>，除此之外，对于相关性的评分也可以用 rescore 二次、三次打分，它可以限定重新打分的窗口大小（window size），并针对作用范围内的文档修改其得分，从而达到精细化控制结果相关性的目的。</p><h2 id="默认相关性排序" tabindex="-1"><a class="header-anchor" href="#默认相关性排序" aria-hidden="true">#</a> 默认相关性排序</h2><p>在 Elasticsearch 中，默认情况下，文档是按照相关性得分倒序排列的，其对应的相关性得分字段用 <code>_score</code> 来表示，它是浮点数类型，<code>_score</code> 评分越高，相关性越高。评分模型的选择可以通过 <code>similarity</code> 参数在映射中指定。</p>',4),u={href:"https://www.knowledgedict.com/tutorial/elasticsearch-similarity.html",target:"_blank",rel:"noopener noreferrer"},d=t(`<h3 id="tf-idf-模型" tabindex="-1"><a class="header-anchor" href="#tf-idf-模型" aria-hidden="true">#</a> TF-IDF 模型</h3><p>Elasticsearch 在 5.4 版本以前，text 类型的字段，默认采用基于 tf-idf 的向量空间模型。</p><p>在开始计算得分之时，Elasticsearch 使用了被搜索词条的频率以及它有多常见来影响得分。一个简短的解释是，<strong>一个词条出现在某个文档中的次数越多，它就越相关；但是，如果该词条出现在不同的文档的次数越多，它就越不相关</strong>。这一点被称为 TF-IDF，TF 是<strong>词频</strong>（term frequency），IDF 是<strong>逆文档频率</strong>（inverse document frequency）。</p><p>考虑给一篇文档打分的首要方式，是统计一个词条在文本中出现的次数。举个例子，如果在用户的区域搜索关于 Elasticsearch 的 get-together，用户希望频繁提及 Elasticsearch 的分组被优先展示出来。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;We will discuss Elasticsearch at the next Big Data group.&quot;
&quot;Tuesday the Elasticsearch team will gather to answer questions about Elasticsearch.&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第一个句子提到 Elasticsearch 一次，而第二个句子提到 Elasticsearch 两次，所以包含第二句话的文档应该比包含第一句话的文档拥有更高的得分。如果我们要按照数量来讨论，第一句话的词频（TF）是 1，而第二句话的词频将是 2。</p><p>逆文档频率比文档词频稍微复杂一点。这个听上去很酷炫的描述意味着，如果一个分词（通常是单词，但不一定是）在索引的不同文档中出现越多的次数，那么它就越不重要。使用如下例子更容易解释这一点。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;We use Elasticsearch to power the search for our website.&quot;
&quot;The developers like Elasticsearch so far.&quot;
&quot;The scoring of documents is calculated by the scoring formula.&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上述例子，需要理解以下几点：</p><ul><li>词条 “Elasticsearch” 的文档频率是 2（因为它出现在两篇文档中）。文档频率的逆源自得分乘以 1/DF，这里 DF 是该词条的文档频率。这就意味着，由于词条拥有更高的文档频率，它的权重就会降低。</li><li>词条 “the” 的文档频率是 3，因为它出现在所有的三篇文档中。请注意，尽管 “the” 在最后一篇文档中出现了两次，它的文档频率还是 3。这是因为，逆文档频率只检查一个词条是否出现在某文档中，而不检查它出现多少次。那个应该是词频所关心的事情。</li></ul><p>逆文档频率是一个重要的因素，用于平衡词条的词频。举个例子，考虑有一个用户搜索词条 “the score”，单词 the 几乎出现在每个普通的英语文本中，如果它不被均衡一下，单词 the 的频率要完全淹没单词 score 的频率。逆文档频率 IDF 均衡了 the 这种常见词的相关性影响，所以实际的相关性得分将会对查询的词条有一个更准确的描述。</p><p>一旦词频 TF 和逆文档频率 IDF 计算完成，就可以使用 TF-IDF 公式来计算文档的得分。</p><h3 id="bm25-模型" tabindex="-1"><a class="header-anchor" href="#bm25-模型" aria-hidden="true">#</a> BM25 模型</h3><p>Elasticsearch 在 5.4 版本之后，针对 text 类型的字段，默认采用的是 BM25 评分模型，而不是基于 tf-idf 的向量空间模型，评分模型的选择可以通过 <code>similarity</code> 参数在映射中指定。</p><h2 id="字段的值排序" tabindex="-1"><a class="header-anchor" href="#字段的值排序" aria-hidden="true">#</a> 字段的值排序</h2><p>在 Elasticsearch 中按照字段的值排序，可以利用 <code>sort</code> 参数实现。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET books/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;sort&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;order&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;desc&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">132</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">749244</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;books&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;book&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8456479&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">8456479</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1580.00</span><span class="token punctuation">,</span>
          ...
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token number">1580.00</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      ...
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从如上返回结果，可以看出，<code>max_score</code> 和 <code>_score</code> 字段都返回 <code>null</code>，返回字段多出 <code>sort</code> 字段，包含排序字段的分值。计算 _<code>score</code> 的花销巨大，如果不根据相关性排序，记录 _<code>score</code> 是没有意义的。如果无论如何都要计算 _<code>score</code>，可以将 <code>track_scores</code> 参数设置为 <code>true</code>。</p><h2 id="多字段排序" tabindex="-1"><a class="header-anchor" href="#多字段排序" aria-hidden="true">#</a> 多字段排序</h2><p>如果我们想要结合使用 price、date 和 _score 进行查询，并且匹配的结果首先按照价格排序，然后按照日期排序，最后按照相关性排序，具体示例如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET books/_search
<span class="token punctuation">{</span>
	<span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
		<span class="token string">&quot;bool&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
			<span class="token string">&quot;must&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
				<span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;content&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;java&quot;</span> <span class="token punctuation">}</span>
			<span class="token punctuation">}</span>,
			<span class="token string">&quot;filter&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
				<span class="token string">&quot;term&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;user_id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">4868438</span> <span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>,
	<span class="token string">&quot;sort&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
			<span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
				<span class="token string">&quot;order&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;desc&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>, <span class="token punctuation">{</span>
			<span class="token string">&quot;date&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
				<span class="token string">&quot;order&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;desc&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>, <span class="token punctuation">{</span>
			<span class="token string">&quot;_score&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
				<span class="token string">&quot;order&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;desc&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>排序条件的顺序是很重要的。结果首先按第一个条件排序，仅当结果集的第一个 <code>sort</code> 值完全相同时才会按照第二个条件进行排序，以此类推。</p><p>多级排序并不一定包含 <code>_score</code>。你可以根据一些不同的字段进行排序，如地理距离或是脚本计算的特定值。</p><h2 id="多值字段的排序" tabindex="-1"><a class="header-anchor" href="#多值字段的排序" aria-hidden="true">#</a> 多值字段的排序</h2><p>一种情形是字段有多个值的排序，需要记住这些值并没有固有的顺序；一个多值的字段仅仅是多个值的包装，这时应该选择哪个进行排序呢？</p><p>对于数字或日期，你可以将多值字段减为单值，这可以通过使用 <code>min</code>、<code>max</code>、<code>avg</code> 或是 <code>sum</code> 排序模式。例如你可以按照每个 date 字段中的最早日期进行排序，通过以下方法：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;dates&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;asc&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span>  <span class="token string">&quot;min&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="地理位置上的距离排序" tabindex="-1"><a class="header-anchor" href="#地理位置上的距离排序" aria-hidden="true">#</a> 地理位置上的距离排序</h2><p>es 的地理位置排序使用 <strong><code>_geo_distance</code></strong> 来进行距离排序，如下示例：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;sort&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;_geo_distance&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;es_location_field&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">116.407526</span><span class="token punctuation">,</span> <span class="token number">39.904030</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;order&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;asc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;unit&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;km&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mode&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;min&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;distance_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;plane&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;query&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    ......
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>_geo_distance</em> 的选项具体如下：</p><ul><li>如上的 <em>es_location_field</em> 指的是 es 存储经纬度数据的字段名。</li><li><strong><em><code>order</code></em></strong>：指定按距离升序或降序，分别对应 <strong><em><code>asc</code></em></strong> 和 <strong><em><code>desc</code></em></strong>。</li><li><strong><em><code>unit</code></em></strong>：计算距离值的单位，默认是 <strong><em><code>m</code></em></strong>，表示米（meters），其它可选项有 <strong><em><code>mi</code></em></strong>、<strong><em><code>cm</code></em></strong>、<strong><em><code>mm</code></em></strong>、<strong><em><code>NM</code></em></strong>、<strong><em><code>km</code></em></strong>、<strong><em><code>ft</code></em></strong>、<strong><em><code>yd</code></em></strong> 和 <strong><em><code>in</code></em></strong>。</li><li><strong><em><code>mode</code></em></strong>：针对数组数据（多个值）时，指定的取值模式，可选值有 <strong><em><code>min</code></em></strong>、<strong><em><code>max</code></em></strong>、<strong><em><code>sum</code></em></strong>、<strong><em><code>avg</code></em></strong> 和 <strong><em><code>median</code></em></strong>，当排序采用升序时，默认为 <em>min</em>；排序采用降序时，默认为 <em>max</em>。</li><li><strong><em><code>distance_type</code></em></strong>：用来设置如何计算距离，它的可选项有 <strong><em><code>sloppy_arc</code></em></strong>、<strong><em><code>arc</code></em></strong> 和 <strong><em><code>plane</code></em></strong>，默认为 <em>sloppy_arc</em>，<em>arc</em> 它相对更精确些，但速度会明显下降，<em>plane</em> 则是计算快，但是长距离计算相对不准确。</li><li><strong><em><code>ignore_unmapped</code></em></strong>：未映射字段时，是否忽略处理，可选项有 <strong><em><code>true</code></em></strong> 和 <strong><em><code>false</code></em></strong>；默认为 <em>false</em>，表示如果未映射字段，查询将引发异常；若设置 <em>true</em>，将忽略未映射的字段，并且不匹配此查询的任何文档。</li><li><strong><em><code>validation_method</code></em></strong>：指定检验经纬度数据的方式，可选项有 <strong><em><code>IGNORE_MALFORMED</code></em></strong>、<strong><em><code>COERCE</code></em></strong> 和 <strong><em><code>STRICT</code></em></strong>；<em>IGNORE_MALFORMED</em> 表示可接受纬度或经度无效的地理点，即忽略数据；<em>COERCE</em> 表示另外尝试并推断正确的地理坐标；<em>STRICT</em> 为默认值，表示遇到不正确的地理坐标直接抛出异常。</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,35),m={href:"https://www.knowledgedict.com/tutorial/elasticsearch-intro.html",target:"_blank",rel:"noopener noreferrer"};function k(v,b){const a=c("ExternalLinkIcon");return p(),i("div",null,[r,s("p",null,[n("相似度算法可以按字段指定，只需在映射中为不同字段选定即可，如果要修改已有字段的相似度算法，只能通过为数据重新建立索引来达到目的。关于更多 es 相似度算法可以参考 "),s("a",u,[n("深入理解 es 相似度算法（相关性得分计算）"),e(a)]),n("。")]),d,s("ul",null,[s("li",null,[s("a",m,[n("Elasticsearch 教程"),e(a)])])])])}const h=o(l,[["render",k],["__file","07.Elasticsearch排序.html.vue"]]);export{h as default};
