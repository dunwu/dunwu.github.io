const e=JSON.parse('{"key":"v-a8054fc0","path":"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/07.%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E6%95%B0%E6%8D%AE%E5%BA%93/01.Elasticsearch/02.Elasticsearch%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8.html","title":"Elasticsearch 快速入门","lang":"zh-CN","frontmatter":{"title":"Elasticsearch 快速入门","date":"2020-06-16T07:10:44.000Z","order":2,"category":["数据库","搜索引擎数据库","Elasticsearch"],"tag":["数据库","搜索引擎数据库","Elasticsearch"],"description":"Elasticsearch 快速入门 Elasticsearch 是一个分布式、RESTful 风格的搜索和数据分析引擎，能够解决不断涌现出的各种用例。 作为 Elastic Stack 的核心，它集中存储您的数据，帮助您发现意料之中以及意料之外的情况。 Elasticsearch 基于搜索库 Lucene 开发。ElasticSearch 隐藏了 Lucene 的复杂性，提供了简单易用的 REST API / Java API 接口（另外还有其他语言的 API 接口）。 以下简称 ES。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/12.%E6%95%B0%E6%8D%AE%E5%BA%93/07.%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E6%95%B0%E6%8D%AE%E5%BA%93/01.Elasticsearch/02.Elasticsearch%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Elasticsearch 快速入门"}],["meta",{"property":"og:description","content":"Elasticsearch 快速入门 Elasticsearch 是一个分布式、RESTful 风格的搜索和数据分析引擎，能够解决不断涌现出的各种用例。 作为 Elastic Stack 的核心，它集中存储您的数据，帮助您发现意料之中以及意料之外的情况。 Elasticsearch 基于搜索库 Lucene 开发。ElasticSearch 隐藏了 Lucene 的复杂性，提供了简单易用的 REST API / Java API 接口（另外还有其他语言的 API 接口）。 以下简称 ES。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T15:44:18.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"搜索引擎数据库"}],["meta",{"property":"article:tag","content":"Elasticsearch"}],["meta",{"property":"article:published_time","content":"2020-06-16T07:10:44.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T15:44:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Elasticsearch 快速入门\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-16T07:10:44.000Z\\",\\"dateModified\\":\\"2023-09-11T15:44:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Elasticsearch 简介","slug":"elasticsearch-简介","link":"#elasticsearch-简介","children":[{"level":3,"title":"什么是 Elasticsearch","slug":"什么是-elasticsearch","link":"#什么是-elasticsearch","children":[]},{"level":3,"title":"核心概念","slug":"核心概念","link":"#核心概念","children":[]}]},{"level":2,"title":"ElasticSearch 基本原理","slug":"elasticsearch-基本原理","link":"#elasticsearch-基本原理","children":[{"level":3,"title":"ES 写数据过程","slug":"es-写数据过程","link":"#es-写数据过程","children":[]},{"level":3,"title":"ES 读数据过程","slug":"es-读数据过程","link":"#es-读数据过程","children":[]},{"level":3,"title":"es 搜索数据过程","slug":"es-搜索数据过程","link":"#es-搜索数据过程","children":[]},{"level":3,"title":"写数据底层原理","slug":"写数据底层原理","link":"#写数据底层原理","children":[]},{"level":3,"title":"删除/更新数据底层原理","slug":"删除-更新数据底层原理","link":"#删除-更新数据底层原理","children":[]},{"level":3,"title":"底层 lucene","slug":"底层-lucene","link":"#底层-lucene","children":[]},{"level":3,"title":"倒排索引","slug":"倒排索引","link":"#倒排索引","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1694447058000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":12.72,"words":3815},"filePathRelative":"12.数据库/07.搜索引擎数据库/01.Elasticsearch/02.Elasticsearch快速入门.md","localizedDate":"2020年6月16日","excerpt":"<h1> Elasticsearch 快速入门</h1>\\n<blockquote>\\n<p><strong><a href=\\"https://github.com/elastic/elasticsearch\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Elasticsearch</a> 是一个分布式、RESTful 风格的搜索和数据分析引擎</strong>，能够解决不断涌现出的各种用例。 作为 Elastic Stack 的核心，它集中存储您的数据，帮助您发现意料之中以及意料之外的情况。</p>\\n<p><a href=\\"https://github.com/elastic/elasticsearch\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Elasticsearch</a> 基于搜索库 <a href=\\"https://github.com/apache/lucene-solr\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Lucene</a> 开发。ElasticSearch 隐藏了 Lucene 的复杂性，提供了简单易用的 REST API / Java API 接口（另外还有其他语言的 API 接口）。</p>\\n<p><em>以下简称 ES</em>。</p>\\n</blockquote>","autoDesc":true}');export{e as data};
