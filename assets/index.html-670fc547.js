const e=JSON.parse('{"key":"v-04b9fc0c","path":"/pages/f89f66/","title":"Elasticsearch 聚合","lang":"zh-CN","frontmatter":{"title":"Elasticsearch 聚合","date":"2022-01-19T22:49:16.000Z","order":"08","permalink":"/pages/f89f66/","category":["数据库","搜索引擎数据库","Elasticsearch"],"tag":["数据库","搜索引擎数据库","Elasticsearch","聚合"],"description":"Elasticsearch 聚合 Elasticsearch 是一个分布式的全文搜索引擎，索引和搜索是 Elasticsearch 的基本功能。事实上，Elasticsearch 的聚合（Aggregations）功能也十分强大，允许在数据上做复杂的分析统计。Elasticsearch 提供的聚合分析功能主要有指标聚合(metrics aggregations)、桶聚合(bucket aggregations)、管道聚合(pipeline aggregations) 和 矩阵聚合(matrix aggregations) 四大类，管道聚合和矩阵聚合官方说明是在试验阶段，后期会完全更改或者移除，这里不再对管道聚合和矩阵聚合进行讲解。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/f89f66/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Elasticsearch 聚合"}],["meta",{"property":"og:description","content":"Elasticsearch 聚合 Elasticsearch 是一个分布式的全文搜索引擎，索引和搜索是 Elasticsearch 的基本功能。事实上，Elasticsearch 的聚合（Aggregations）功能也十分强大，允许在数据上做复杂的分析统计。Elasticsearch 提供的聚合分析功能主要有指标聚合(metrics aggregations)、桶聚合(bucket aggregations)、管道聚合(pipeline aggregations) 和 矩阵聚合(matrix aggregations) 四大类，管道聚合和矩阵聚合官方说明是在试验阶段，后期会完全更改或者移除，这里不再对管道聚合和矩阵聚合进行讲解。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T22:46:25.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"搜索引擎数据库"}],["meta",{"property":"article:tag","content":"Elasticsearch"}],["meta",{"property":"article:tag","content":"聚合"}],["meta",{"property":"article:published_time","content":"2022-01-19T22:49:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T22:46:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Elasticsearch 聚合\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-19T22:49:16.000Z\\",\\"dateModified\\":\\"2024-05-15T22:46:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"聚合的具体结构","slug":"聚合的具体结构","link":"#聚合的具体结构","children":[]},{"level":2,"title":"指标聚合","slug":"指标聚合","link":"#指标聚合","children":[{"level":3,"title":"Max Aggregation","slug":"max-aggregation","link":"#max-aggregation","children":[]},{"level":3,"title":"Min Aggregation","slug":"min-aggregation","link":"#min-aggregation","children":[]},{"level":3,"title":"Avg Aggregation","slug":"avg-aggregation","link":"#avg-aggregation","children":[]},{"level":3,"title":"Sum Aggregation","slug":"sum-aggregation","link":"#sum-aggregation","children":[]},{"level":3,"title":"Value Count Aggregation","slug":"value-count-aggregation","link":"#value-count-aggregation","children":[]},{"level":3,"title":"Cardinality Aggregation","slug":"cardinality-aggregation","link":"#cardinality-aggregation","children":[]},{"level":3,"title":"Stats Aggregation","slug":"stats-aggregation","link":"#stats-aggregation","children":[]},{"level":3,"title":"Extended Stats Aggregation","slug":"extended-stats-aggregation","link":"#extended-stats-aggregation","children":[]},{"level":3,"title":"Percentiles Aggregation","slug":"percentiles-aggregation","link":"#percentiles-aggregation","children":[]},{"level":3,"title":"Percentiles Ranks Aggregation","slug":"percentiles-ranks-aggregation","link":"#percentiles-ranks-aggregation","children":[]}]},{"level":2,"title":"桶聚合","slug":"桶聚合","link":"#桶聚合","children":[{"level":3,"title":"Terms Aggregation","slug":"terms-aggregation","link":"#terms-aggregation","children":[]},{"level":3,"title":"Filter Aggregation","slug":"filter-aggregation","link":"#filter-aggregation","children":[]},{"level":3,"title":"Filters Aggregation","slug":"filters-aggregation","link":"#filters-aggregation","children":[]},{"level":3,"title":"Range Aggregation","slug":"range-aggregation","link":"#range-aggregation","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1715813185000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":10.77,"words":3232},"filePathRelative":"12.数据库/07.搜索引擎数据库/01.Elasticsearch/08.Elasticsearch聚合.md","localizedDate":"2022年1月19日","excerpt":"<h1> Elasticsearch 聚合</h1>\\n<p>Elasticsearch 是一个分布式的全文搜索引擎，索引和搜索是 Elasticsearch 的基本功能。事实上，Elasticsearch 的聚合（Aggregations）功能也十分强大，允许在数据上做复杂的分析统计。Elasticsearch 提供的聚合分析功能主要有<strong>指标聚合(metrics aggregations)</strong>、<strong>桶聚合(bucket aggregations)</strong>、<strong>管道聚合(pipeline aggregations)</strong> 和 <strong>矩阵聚合(matrix aggregations)</strong> 四大类，管道聚合和矩阵聚合官方说明是在试验阶段，后期会完全更改或者移除，这里不再对管道聚合和矩阵聚合进行讲解。</p>","autoDesc":true}');export{e as data};
