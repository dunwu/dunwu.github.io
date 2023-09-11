const e=JSON.parse('{"key":"v-6802f519","path":"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/07.%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E6%95%B0%E6%8D%AE%E5%BA%93/01.Elasticsearch/09.Elasticsearch%E5%88%86%E6%9E%90%E5%99%A8.html","title":"Elasticsearch 分析器","lang":"zh-CN","frontmatter":{"title":"Elasticsearch 分析器","date":"2022-02-22T21:01:01.000Z","order":"09","category":["数据库","搜索引擎数据库","Elasticsearch"],"tag":["数据库","搜索引擎数据库","Elasticsearch","分词"],"description":"Elasticsearch 分析器 文本分析是把全文本转换为一系列单词（term/token）的过程，也叫分词。在 Elasticsearch 中，分词是通过 analyzer（分析器）来完成的，不管是索引还是搜索，都需要使用 analyzer（分析器）。分析器，分为内置分析器和自定义的分析器。 分析器可以进一步细分为字符过滤器（Character Filters）、分词器（Tokenizer）和词元过滤器（Token Filters）三部分。它的执行顺序如下：","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/12.%E6%95%B0%E6%8D%AE%E5%BA%93/07.%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E6%95%B0%E6%8D%AE%E5%BA%93/01.Elasticsearch/09.Elasticsearch%E5%88%86%E6%9E%90%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Elasticsearch 分析器"}],["meta",{"property":"og:description","content":"Elasticsearch 分析器 文本分析是把全文本转换为一系列单词（term/token）的过程，也叫分词。在 Elasticsearch 中，分词是通过 analyzer（分析器）来完成的，不管是索引还是搜索，都需要使用 analyzer（分析器）。分析器，分为内置分析器和自定义的分析器。 分析器可以进一步细分为字符过滤器（Character Filters）、分词器（Tokenizer）和词元过滤器（Token Filters）三部分。它的执行顺序如下："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T15:44:18.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"搜索引擎数据库"}],["meta",{"property":"article:tag","content":"Elasticsearch"}],["meta",{"property":"article:tag","content":"分词"}],["meta",{"property":"article:published_time","content":"2022-02-22T21:01:01.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T15:44:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Elasticsearch 分析器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-02-22T21:01:01.000Z\\",\\"dateModified\\":\\"2023-09-11T15:44:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"字符过滤器（Character Filters）","slug":"字符过滤器-character-filters","link":"#字符过滤器-character-filters","children":[{"level":3,"title":"HTML strip character filter","slug":"html-strip-character-filter","link":"#html-strip-character-filter","children":[]},{"level":3,"title":"Mapping character filter","slug":"mapping-character-filter","link":"#mapping-character-filter","children":[]},{"level":3,"title":"Pattern Replace character filter","slug":"pattern-replace-character-filter","link":"#pattern-replace-character-filter","children":[]}]},{"level":2,"title":"分词器（Tokenizer）","slug":"分词器-tokenizer","link":"#分词器-tokenizer","children":[{"level":3,"title":"elasticsearch-plugin 使用","slug":"elasticsearch-plugin-使用","link":"#elasticsearch-plugin-使用","children":[]},{"level":3,"title":"elasticsearch-analysis-ik 安装","slug":"elasticsearch-analysis-ik-安装","link":"#elasticsearch-analysis-ik-安装","children":[]},{"level":3,"title":"elasticsearch-analysis-ik 使用","slug":"elasticsearch-analysis-ik-使用","link":"#elasticsearch-analysis-ik-使用","children":[]}]},{"level":2,"title":"词元过滤器（Token Filters）","slug":"词元过滤器-token-filters","link":"#词元过滤器-token-filters","children":[{"level":3,"title":"同义词","slug":"同义词","link":"#同义词","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1694447058000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":8.27,"words":2482},"filePathRelative":"12.数据库/07.搜索引擎数据库/01.Elasticsearch/09.Elasticsearch分析器.md","localizedDate":"2022年2月22日","excerpt":"<h1> Elasticsearch 分析器</h1>\\n<p>文本分析是把全文本转换为一系列单词（term/token）的过程，也叫分词。在 Elasticsearch 中，分词是通过 analyzer（分析器）来完成的，不管是索引还是搜索，都需要使用 analyzer（分析器）。分析器，分为<strong>内置分析器</strong>和<strong>自定义的分析器</strong>。</p>\\n<p>分析器可以进一步细分为<strong>字符过滤器</strong>（<strong>Character Filters</strong>）、<strong>分词器</strong>（<strong>Tokenizer</strong>）和<strong>词元过滤器</strong>（<strong>Token Filters</strong>）三部分。它的执行顺序如下：</p>","autoDesc":true}');export{e as data};
