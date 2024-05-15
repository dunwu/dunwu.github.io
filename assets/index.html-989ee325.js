import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as t,e as a}from"./app-d70a109d.js";const e={},i=a(`<h1 id="elasticsearch-高亮搜索及显示" tabindex="-1"><a class="header-anchor" href="#elasticsearch-高亮搜索及显示" aria-hidden="true">#</a> Elasticsearch 高亮搜索及显示</h1><p>Elasticsearch 的高亮（highlight）可以让您从搜索结果中的一个或多个字段中获取突出显示的摘要，以便向用户显示查询匹配的位置。当您请求突出显示（即高亮）时，响应结果的 highlight 字段中包括高亮的字段和高亮的片段。Elasticsearch 默认会用 <code>&lt;em&gt;&lt;/em&gt;</code> 标签标记关键字。</p><h2 id="高亮参数" tabindex="-1"><a class="header-anchor" href="#高亮参数" aria-hidden="true">#</a> 高亮参数</h2><p>ES 提供了如下高亮参数：</p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>boundary_chars</code></td><td style="text-align:left;">包含每个边界字符的字符串。默认为,! ?\\ \\ n。</td></tr><tr><td style="text-align:left;"><code>boundary_max_scan</code></td><td style="text-align:left;">扫描边界字符的距离。默认为 20。</td></tr><tr><td style="text-align:left;"><code>boundary_scanner</code></td><td style="text-align:left;">指定如何分割突出显示的片段，支持 chars、sentence、word 三种方式。</td></tr><tr><td style="text-align:left;"><code>boundary_scanner_locale</code></td><td style="text-align:left;">用来设置搜索和确定单词边界的本地化设置，此参数使用语言标记的形式（“en-US”, “fr-FR”, “ja-JP”）</td></tr><tr><td style="text-align:left;"><code>encoder</code></td><td style="text-align:left;">表示代码段应该是 HTML 编码的:默认(无编码)还是 HTML (HTML-转义代码段文本，然后插入高亮标记)</td></tr><tr><td style="text-align:left;"><code>fields</code></td><td style="text-align:left;">指定检索高亮显示的字段。可以使用通配符来指定字段。例如，可以指定 comment**来获取以 comment*开头的所有文本和关键字字段的高亮显示。</td></tr><tr><td style="text-align:left;"><code>force_source</code></td><td style="text-align:left;">根据源高亮显示。默认值为 false。</td></tr><tr><td style="text-align:left;"><code>fragmenter</code></td><td style="text-align:left;">指定文本应如何在突出显示片段中拆分:支持参数 simple 或者 span。</td></tr><tr><td style="text-align:left;"><code>fragment_offset</code></td><td style="text-align:left;">控制要开始突出显示的空白。仅在使用 fvh highlighter 时有效。</td></tr><tr><td style="text-align:left;"><code>fragment_size</code></td><td style="text-align:left;">字符中突出显示的片段的大小。默认为 100。</td></tr><tr><td style="text-align:left;"><code>highlight_query</code></td><td style="text-align:left;">突出显示搜索查询之外的其他查询的匹配项。这在使用重打分查询时特别有用，因为默认情况下高亮显示不会考虑这些问题。</td></tr><tr><td style="text-align:left;"><code>matched_fields</code></td><td style="text-align:left;">组合多个匹配结果以突出显示单个字段，对于使用不同方式分析同一字符串的多字段。所有的 matched_fields 必须将 term_vector 设置为 with_positions_offsets，但是只有将匹配项组合到的字段才会被加载，因此只有将 store 设置为 yes 才能使该字段受益。只适用于 fvh highlighter。</td></tr><tr><td style="text-align:left;"><code>no_match_size</code></td><td style="text-align:left;">如果没有要突出显示的匹配片段，则希望从字段开头返回的文本量。默认为 0(不返回任何内容)。</td></tr><tr><td style="text-align:left;"><code>number_of_fragments</code></td><td style="text-align:left;">返回的片段的最大数量。如果片段的数量设置为 0，则不会返回任何片段。相反，突出显示并返回整个字段内容。当需要突出显示短文本(如标题或地址)，但不需要分段时，使用此配置非常方便。如果 number_of_fragments 为 0，则忽略 fragment_size。默认为 5。</td></tr><tr><td style="text-align:left;"><code>order</code></td><td style="text-align:left;">设置为 score 时，按分数对突出显示的片段进行排序。默认情况下，片段将按照它们在字段中出现的顺序输出(order:none)。将此选项设置为 score 将首先输出最相关的片段。每个高亮应用自己的逻辑来计算相关性得分。</td></tr><tr><td style="text-align:left;"><code>phrase_limit</code></td><td style="text-align:left;">控制文档中所考虑的匹配短语的数量。防止 fvh highlighter 分析太多的短语和消耗太多的内存。提高限制会增加查询时间并消耗更多内存。默认为 256。</td></tr><tr><td style="text-align:left;"><code>pre_tags</code></td><td style="text-align:left;">与 post_tags 一起使用，定义用于突出显示文本的 HTML 标记。默认情况下，突出显示的文本被包装在和标记中。指定为字符串数组。</td></tr><tr><td style="text-align:left;"><code>post_tags</code></td><td style="text-align:left;">与 pre_tags 一起使用，定义用于突出显示文本的 HTML 标记。默认情况下，突出显示的文本被包装在和标记中。指定为字符串数组。</td></tr><tr><td style="text-align:left;"><code>require_field_match</code></td><td style="text-align:left;">默认情况下，只突出显示包含查询匹配的字段。将 require_field_match 设置为 false 以突出显示所有字段。默认值为 true。</td></tr><tr><td style="text-align:left;"><code>tags_schema</code></td><td style="text-align:left;">设置为使用内置标记模式的样式。</td></tr><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;">使用的高亮模式，可选项为**<em><code>unified</code></em><strong>、</strong><em><code>plain</code></em><strong>或</strong><em><code>fvh</code></em>**。默认为 <em><code>unified</code></em>。</td></tr></tbody></table><h2 id="自定义高亮片段" tabindex="-1"><a class="header-anchor" href="#自定义高亮片段" aria-hidden="true">#</a> 自定义高亮片段</h2><p>如果我们想使用自定义标签，在高亮属性中给需要高亮的字段加上 <code>pre_tags</code> 和 <code>post_tags</code> 即可。例如，搜索 title 字段中包含关键词 javascript 的书籍并使用自定义 HTML 标签高亮关键词，查询语句如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /books/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;javascript&quot;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;highlight&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;fields&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;pre_tags&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&lt;strong&gt;&quot;</span><span class="token punctuation">]</span>,
        <span class="token string">&quot;post_tags&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&lt;/strong&gt;&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多字段高亮" tabindex="-1"><a class="header-anchor" href="#多字段高亮" aria-hidden="true">#</a> 多字段高亮</h2><p>关于搜索高亮，还需要掌握如何设置多字段搜索高亮。比如，搜索 title 字段的时候，我们期望 description 字段中的关键字也可以高亮，这时候就需要把 <code>require_field_match</code> 属性的取值设置为 <code>fasle</code>。<code>require_field_match</code> 的默认值为 <code>true</code>，只会高亮匹配的字段。多字段高亮的查询语句如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /books/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;javascript&quot;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;highlight&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;require_field_match&quot;</span><span class="token builtin class-name">:</span> false,
    <span class="token string">&quot;fields&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
      <span class="token string">&quot;description&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高亮性能分析" tabindex="-1"><a class="header-anchor" href="#高亮性能分析" aria-hidden="true">#</a> 高亮性能分析</h2><p>Elasticsearch 提供了三种高亮器，分别是<strong>默认的 highlighter 高亮器</strong>、<strong>postings-highlighter 高亮器</strong>和 <strong>fast-vector-highlighter 高亮器</strong>。</p><p>默认的 <strong>highlighter</strong> 是最基本的高亮器。highlighter 高亮器实现高亮功能需要对 <code>_source</code> 中保存的原始文档进行二次分析，其速度在三种高亮器里最慢，优点是不需要额外的存储空间。</p><p><strong>postings-highlighter</strong> 高亮器实现高亮功能不需要二次分析，但是需要在字段的映射中设置 <code>index_options</code> 参数的取值为 <code>offsets</code>，即保存关键词的偏移量，速度快于默认的 highlighter 高亮器。例如，配置 comment 字段使用 postings-highlighter 高亮器，映射如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT /example
<span class="token punctuation">{</span>
  <span class="token string">&quot;mappings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;doc&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;properties&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;comment&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;text&quot;</span>,
          <span class="token string">&quot;index_options&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;offsets&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>fast-vector-highlighter</strong> 高亮器实现高亮功能速度最快，但是需要在字段的映射中设置 <code>term_vector</code> 参数的取值为 <code>with_positions_offsets</code>，即保存关键词的位置和偏移信息，占用的存储空间最大，是典型的空间换时间的做法。例如，配置 comment 字段使用 fast-vector-highlighter 高亮器，映射如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT /example
<span class="token punctuation">{</span>
  <span class="token string">&quot;mappings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;doc&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;properties&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;comment&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;text&quot;</span>,
          <span class="token string">&quot;term_vector&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;with_positions_offsets&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),l=[i];function o(c,d){return n(),t("div",null,l)}const u=s(e,[["render",o],["__file","index.html.vue"]]);export{u as default};
