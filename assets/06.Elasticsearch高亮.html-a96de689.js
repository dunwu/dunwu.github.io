const t=JSON.parse('{"key":"v-2c428c08","path":"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/07.%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E6%95%B0%E6%8D%AE%E5%BA%93/01.Elasticsearch/06.Elasticsearch%E9%AB%98%E4%BA%AE.html","title":"Elasticsearch 高亮搜索及显示","lang":"zh-CN","frontmatter":{"title":"Elasticsearch 高亮搜索及显示","date":"2022-02-22T21:01:01.000Z","order":6,"category":["数据库","搜索引擎数据库","Elasticsearch"],"tag":["数据库","搜索引擎数据库","Elasticsearch","高亮"],"description":"Elasticsearch 高亮搜索及显示 Elasticsearch 的高亮（highlight）可以让您从搜索结果中的一个或多个字段中获取突出显示的摘要，以便向用户显示查询匹配的位置。当您请求突出显示（即高亮）时，响应结果的 highlight 字段中包括高亮的字段和高亮的片段。Elasticsearch 默认会用 &lt;em&gt;&lt;/em&gt; 标签标记关键字。 高亮参数 ES 提供了如下高亮参数： 参数 说明 boundary_chars 包含每个边界字符的字符串。默认为,! ?\\\\ \\\\ n。 boundary_max_scan 扫描边界字符的距离。默认为 20。 boundary_scanner 指定如何分割突出显示的片段，支持 chars、sentence、word 三种方式。 boundary_scanner_locale 用来设置搜索和确定单词边界的本地化设置，此参数使用语言标记的形式（“en-US”, “fr-FR”, “ja-JP”） encoder 表示代码段应该是 HTML 编码的:默认(无编码)还是 HTML (HTML-转义代码段文本，然后插入高亮标记) fields 指定检索高亮显示的字段。可以使用通配符来指定字段。例如，可以指定 comment**来获取以 comment*开头的所有文本和关键字字段的高亮显示。 force_source 根据源高亮显示。默认值为 false。 fragmenter 指定文本应如何在突出显示片段中拆分:支持参数 simple 或者 span。 fragment_offset 控制要开始突出显示的空白。仅在使用 fvh highlighter 时有效。 fragment_size 字符中突出显示的片段的大小。默认为 100。 highlight_query 突出显示搜索查询之外的其他查询的匹配项。这在使用重打分查询时特别有用，因为默认情况下高亮显示不会考虑这些问题。 matched_fields 组合多个匹配结果以突出显示单个字段，对于使用不同方式分析同一字符串的多字段。所有的 matched_fields 必须将 term_vector 设置为 with_positions_offsets，但是只有将匹配项组合到的字段才会被加载，因此只有将 store 设置为 yes 才能使该字段受益。只适用于 fvh highlighter。 no_match_size 如果没有要突出显示的匹配片段，则希望从字段开头返回的文本量。默认为 0(不返回任何内容)。 number_of_fragments 返回的片段的最大数量。如果片段的数量设置为 0，则不会返回任何片段。相反，突出显示并返回整个字段内容。当需要突出显示短文本(如标题或地址)，但不需要分段时，使用此配置非常方便。如果 number_of_fragments 为 0，则忽略 fragment_size。默认为 5。 order 设置为 score 时，按分数对突出显示的片段进行排序。默认情况下，片段将按照它们在字段中出现的顺序输出(order:none)。将此选项设置为 score 将首先输出最相关的片段。每个高亮应用自己的逻辑来计算相关性得分。 phrase_limit 控制文档中所考虑的匹配短语的数量。防止 fvh highlighter 分析太多的短语和消耗太多的内存。提高限制会增加查询时间并消耗更多内存。默认为 256。 pre_tags 与 post_tags 一起使用，定义用于突出显示文本的 HTML 标记。默认情况下，突出显示的文本被包装在和标记中。指定为字符串数组。 post_tags 与 pre_tags 一起使用，定义用于突出显示文本的 HTML 标记。默认情况下，突出显示的文本被包装在和标记中。指定为字符串数组。 require_field_match 默认情况下，只突出显示包含查询匹配的字段。将 require_field_match 设置为 false 以突出显示所有字段。默认值为 true。 tags_schema 设置为使用内置标记模式的样式。 type 使用的高亮模式，可选项为**unified、plain或fvh**。默认为 unified。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/12.%E6%95%B0%E6%8D%AE%E5%BA%93/07.%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E6%95%B0%E6%8D%AE%E5%BA%93/01.Elasticsearch/06.Elasticsearch%E9%AB%98%E4%BA%AE.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Elasticsearch 高亮搜索及显示"}],["meta",{"property":"og:description","content":"Elasticsearch 高亮搜索及显示 Elasticsearch 的高亮（highlight）可以让您从搜索结果中的一个或多个字段中获取突出显示的摘要，以便向用户显示查询匹配的位置。当您请求突出显示（即高亮）时，响应结果的 highlight 字段中包括高亮的字段和高亮的片段。Elasticsearch 默认会用 &lt;em&gt;&lt;/em&gt; 标签标记关键字。 高亮参数 ES 提供了如下高亮参数： 参数 说明 boundary_chars 包含每个边界字符的字符串。默认为,! ?\\\\ \\\\ n。 boundary_max_scan 扫描边界字符的距离。默认为 20。 boundary_scanner 指定如何分割突出显示的片段，支持 chars、sentence、word 三种方式。 boundary_scanner_locale 用来设置搜索和确定单词边界的本地化设置，此参数使用语言标记的形式（“en-US”, “fr-FR”, “ja-JP”） encoder 表示代码段应该是 HTML 编码的:默认(无编码)还是 HTML (HTML-转义代码段文本，然后插入高亮标记) fields 指定检索高亮显示的字段。可以使用通配符来指定字段。例如，可以指定 comment**来获取以 comment*开头的所有文本和关键字字段的高亮显示。 force_source 根据源高亮显示。默认值为 false。 fragmenter 指定文本应如何在突出显示片段中拆分:支持参数 simple 或者 span。 fragment_offset 控制要开始突出显示的空白。仅在使用 fvh highlighter 时有效。 fragment_size 字符中突出显示的片段的大小。默认为 100。 highlight_query 突出显示搜索查询之外的其他查询的匹配项。这在使用重打分查询时特别有用，因为默认情况下高亮显示不会考虑这些问题。 matched_fields 组合多个匹配结果以突出显示单个字段，对于使用不同方式分析同一字符串的多字段。所有的 matched_fields 必须将 term_vector 设置为 with_positions_offsets，但是只有将匹配项组合到的字段才会被加载，因此只有将 store 设置为 yes 才能使该字段受益。只适用于 fvh highlighter。 no_match_size 如果没有要突出显示的匹配片段，则希望从字段开头返回的文本量。默认为 0(不返回任何内容)。 number_of_fragments 返回的片段的最大数量。如果片段的数量设置为 0，则不会返回任何片段。相反，突出显示并返回整个字段内容。当需要突出显示短文本(如标题或地址)，但不需要分段时，使用此配置非常方便。如果 number_of_fragments 为 0，则忽略 fragment_size。默认为 5。 order 设置为 score 时，按分数对突出显示的片段进行排序。默认情况下，片段将按照它们在字段中出现的顺序输出(order:none)。将此选项设置为 score 将首先输出最相关的片段。每个高亮应用自己的逻辑来计算相关性得分。 phrase_limit 控制文档中所考虑的匹配短语的数量。防止 fvh highlighter 分析太多的短语和消耗太多的内存。提高限制会增加查询时间并消耗更多内存。默认为 256。 pre_tags 与 post_tags 一起使用，定义用于突出显示文本的 HTML 标记。默认情况下，突出显示的文本被包装在和标记中。指定为字符串数组。 post_tags 与 pre_tags 一起使用，定义用于突出显示文本的 HTML 标记。默认情况下，突出显示的文本被包装在和标记中。指定为字符串数组。 require_field_match 默认情况下，只突出显示包含查询匹配的字段。将 require_field_match 设置为 false 以突出显示所有字段。默认值为 true。 tags_schema 设置为使用内置标记模式的样式。 type 使用的高亮模式，可选项为**unified、plain或fvh**。默认为 unified。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T15:44:18.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"搜索引擎数据库"}],["meta",{"property":"article:tag","content":"Elasticsearch"}],["meta",{"property":"article:tag","content":"高亮"}],["meta",{"property":"article:published_time","content":"2022-02-22T21:01:01.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T15:44:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Elasticsearch 高亮搜索及显示\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-02-22T21:01:01.000Z\\",\\"dateModified\\":\\"2023-09-11T15:44:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"高亮参数","slug":"高亮参数","link":"#高亮参数","children":[]},{"level":2,"title":"自定义高亮片段","slug":"自定义高亮片段","link":"#自定义高亮片段","children":[]},{"level":2,"title":"多字段高亮","slug":"多字段高亮","link":"#多字段高亮","children":[]},{"level":2,"title":"高亮性能分析","slug":"高亮性能分析","link":"#高亮性能分析","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1694447058000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":5.07,"words":1522},"filePathRelative":"12.数据库/07.搜索引擎数据库/01.Elasticsearch/06.Elasticsearch高亮.md","localizedDate":"2022年2月22日","excerpt":"<h1> Elasticsearch 高亮搜索及显示</h1>\\n<p>Elasticsearch 的高亮（highlight）可以让您从搜索结果中的一个或多个字段中获取突出显示的摘要，以便向用户显示查询匹配的位置。当您请求突出显示（即高亮）时，响应结果的 highlight 字段中包括高亮的字段和高亮的片段。Elasticsearch 默认会用 <code>&lt;em&gt;&lt;/em&gt;</code> 标签标记关键字。</p>\\n<h2> 高亮参数</h2>\\n<p>ES 提供了如下高亮参数：</p>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:left\\">参数</th>\\n<th style=\\"text-align:left\\">说明</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:left\\"><code>boundary_chars</code></td>\\n<td style=\\"text-align:left\\">包含每个边界字符的字符串。默认为,! ?\\\\ \\\\ n。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>boundary_max_scan</code></td>\\n<td style=\\"text-align:left\\">扫描边界字符的距离。默认为 20。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>boundary_scanner</code></td>\\n<td style=\\"text-align:left\\">指定如何分割突出显示的片段，支持 chars、sentence、word 三种方式。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>boundary_scanner_locale</code></td>\\n<td style=\\"text-align:left\\">用来设置搜索和确定单词边界的本地化设置，此参数使用语言标记的形式（“en-US”, “fr-FR”, “ja-JP”）</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>encoder</code></td>\\n<td style=\\"text-align:left\\">表示代码段应该是 HTML 编码的:默认(无编码)还是 HTML (HTML-转义代码段文本，然后插入高亮标记)</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>fields</code></td>\\n<td style=\\"text-align:left\\">指定检索高亮显示的字段。可以使用通配符来指定字段。例如，可以指定 comment**来获取以 comment*开头的所有文本和关键字字段的高亮显示。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>force_source</code></td>\\n<td style=\\"text-align:left\\">根据源高亮显示。默认值为 false。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>fragmenter</code></td>\\n<td style=\\"text-align:left\\">指定文本应如何在突出显示片段中拆分:支持参数 simple 或者 span。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>fragment_offset</code></td>\\n<td style=\\"text-align:left\\">控制要开始突出显示的空白。仅在使用 fvh highlighter 时有效。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>fragment_size</code></td>\\n<td style=\\"text-align:left\\">字符中突出显示的片段的大小。默认为 100。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>highlight_query</code></td>\\n<td style=\\"text-align:left\\">突出显示搜索查询之外的其他查询的匹配项。这在使用重打分查询时特别有用，因为默认情况下高亮显示不会考虑这些问题。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>matched_fields</code></td>\\n<td style=\\"text-align:left\\">组合多个匹配结果以突出显示单个字段，对于使用不同方式分析同一字符串的多字段。所有的 matched_fields 必须将 term_vector 设置为 with_positions_offsets，但是只有将匹配项组合到的字段才会被加载，因此只有将 store 设置为 yes 才能使该字段受益。只适用于 fvh highlighter。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>no_match_size</code></td>\\n<td style=\\"text-align:left\\">如果没有要突出显示的匹配片段，则希望从字段开头返回的文本量。默认为 0(不返回任何内容)。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>number_of_fragments</code></td>\\n<td style=\\"text-align:left\\">返回的片段的最大数量。如果片段的数量设置为 0，则不会返回任何片段。相反，突出显示并返回整个字段内容。当需要突出显示短文本(如标题或地址)，但不需要分段时，使用此配置非常方便。如果 number_of_fragments 为 0，则忽略 fragment_size。默认为 5。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>order</code></td>\\n<td style=\\"text-align:left\\">设置为 score 时，按分数对突出显示的片段进行排序。默认情况下，片段将按照它们在字段中出现的顺序输出(order:none)。将此选项设置为 score 将首先输出最相关的片段。每个高亮应用自己的逻辑来计算相关性得分。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>phrase_limit</code></td>\\n<td style=\\"text-align:left\\">控制文档中所考虑的匹配短语的数量。防止 fvh highlighter 分析太多的短语和消耗太多的内存。提高限制会增加查询时间并消耗更多内存。默认为 256。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>pre_tags</code></td>\\n<td style=\\"text-align:left\\">与 post_tags 一起使用，定义用于突出显示文本的 HTML 标记。默认情况下，突出显示的文本被包装在和标记中。指定为字符串数组。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>post_tags</code></td>\\n<td style=\\"text-align:left\\">与 pre_tags 一起使用，定义用于突出显示文本的 HTML 标记。默认情况下，突出显示的文本被包装在和标记中。指定为字符串数组。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>require_field_match</code></td>\\n<td style=\\"text-align:left\\">默认情况下，只突出显示包含查询匹配的字段。将 require_field_match 设置为 false 以突出显示所有字段。默认值为 true。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>tags_schema</code></td>\\n<td style=\\"text-align:left\\">设置为使用内置标记模式的样式。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>type</code></td>\\n<td style=\\"text-align:left\\">使用的高亮模式，可选项为**<em><code>unified</code></em><strong>、</strong><em><code>plain</code></em><strong>或</strong><em><code>fvh</code></em>**。默认为 <em><code>unified</code></em>。</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{t as data};
