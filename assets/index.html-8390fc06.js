const e=JSON.parse('{"key":"v-2945f47b","path":"/pages/b2f10e/","title":"《HBase A NoSQL database》笔记","lang":"zh-CN","frontmatter":{"title":"《HBase A NoSQL database》笔记","date":"2023-09-05T19:52:01.000Z","category":["笔记","分布式","分布式存储"],"tag":["分布式","分布式存储","HBASE"],"permalink":"/pages/b2f10e/","description":"《HBase: A NoSQL database》笔记 简介 HBase 是一种 NoSQL 数据库，它是Java版本的 Google’s Big Table 实现，它原本是 Hadoop 的子项目，现在已独立出来，并成为 apache 的顶级项目。 HBase 的设计目标是用于存储大规模数据集。HBase 是列式数据库，与传统行式数据库相比，其非常适合用于存储稀疏性的数据。 HBase 是基于 HDFS 实现的。 HBase 和历史 HBase 关键特性： 水平扩展 分区容错性 支持并行处理 支持 HDFS 和 MapReduce 近实时查询 适用于存储大规模数据集 适用于存储稀疏型数据（宽表） 表的动态负载均衡 对于大规模的查询，支持块缓存和布隆过滤器","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/b2f10e/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"《HBase A NoSQL database》笔记"}],["meta",{"property":"og:description","content":"《HBase: A NoSQL database》笔记 简介 HBase 是一种 NoSQL 数据库，它是Java版本的 Google’s Big Table 实现，它原本是 Hadoop 的子项目，现在已独立出来，并成为 apache 的顶级项目。 HBase 的设计目标是用于存储大规模数据集。HBase 是列式数据库，与传统行式数据库相比，其非常适合用于存储稀疏性的数据。 HBase 是基于 HDFS 实现的。 HBase 和历史 HBase 关键特性： 水平扩展 分区容错性 支持并行处理 支持 HDFS 和 MapReduce 近实时查询 适用于存储大规模数据集 适用于存储稀疏型数据（宽表） 表的动态负载均衡 对于大规模的查询，支持块缓存和布隆过滤器"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T15:41:08.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"分布式存储"}],["meta",{"property":"article:tag","content":"HBASE"}],["meta",{"property":"article:published_time","content":"2023-09-05T19:52:01.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-08T15:41:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《HBase A NoSQL database》笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-05T19:52:01.000Z\\",\\"dateModified\\":\\"2023-09-08T15:41:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"HBase 和历史","slug":"hbase-和历史","link":"#hbase-和历史","children":[]},{"level":2,"title":"HBase 数据结构和架构","slug":"hbase-数据结构和架构","link":"#hbase-数据结构和架构","children":[]},{"level":2,"title":"HBase 和大数据","slug":"hbase-和大数据","link":"#hbase-和大数据","children":[]},{"level":2,"title":"HBase 的应用","slug":"hbase-的应用","link":"#hbase-的应用","children":[]},{"level":2,"title":"HBase 的挑战和限制","slug":"hbase-的挑战和限制","link":"#hbase-的挑战和限制","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694186720000,"updatedTime":1694187668000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":2.32,"words":696},"filePathRelative":"99.笔记/15.分布式/22.分布式存储/01.hbase-a-nosql-database.md","localizedDate":"2023年9月5日","excerpt":"<h1> 《HBase: A NoSQL database》笔记</h1>\\n<h2> 简介</h2>\\n<p>HBase 是一种 NoSQL 数据库，它是Java版本的 Google’s Big Table 实现，它原本是 Hadoop 的子项目，现在已独立出来，并成为 apache 的顶级项目。</p>\\n<p>HBase 的设计目标是用于存储大规模数据集。HBase 是列式数据库，与传统行式数据库相比，其非常适合用于存储稀疏性的数据。</p>\\n<p>HBase 是基于 HDFS 实现的。</p>\\n<h2> HBase 和历史</h2>\\n<p>HBase 关键特性：</p>\\n<ul>\\n<li>水平扩展</li>\\n<li>分区容错性</li>\\n<li>支持并行处理</li>\\n<li>支持 HDFS 和 MapReduce</li>\\n<li>近实时查询</li>\\n<li>适用于存储大规模数据集</li>\\n<li>适用于存储稀疏型数据（宽表）</li>\\n<li>表的动态负载均衡</li>\\n<li>对于大规模的查询，支持块缓存和布隆过滤器</li>\\n</ul>","autoDesc":true}');export{e as data};
