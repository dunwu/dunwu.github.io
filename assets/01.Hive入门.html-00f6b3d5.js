const e=JSON.parse('{"key":"v-3ea43cea","path":"/16.%E5%A4%A7%E6%95%B0%E6%8D%AE/02.hive/01.Hive%E5%85%A5%E9%97%A8.html","title":"Hive 入门","lang":"zh-CN","frontmatter":{"title":"Hive 入门","date":"2020-02-24T21:14:47.000Z","order":1,"category":["大数据","hive"],"tag":["大数据","Hive"],"description":"Hive 入门 简介 Hive 是一个构建在 Hadoop 之上的数据仓库，它可以将结构化的数据文件映射成表，并提供类 SQL 查询功能，用于查询的 SQL 语句会被转化为 MapReduce 作业，然后提交到 Hadoop 上运行。 特点： 简单、容易上手 (提供了类似 sql 的查询语言 hql)，使得精通 sql 但是不了解 Java 编程的人也能很好地进行大数据分析； 灵活性高，可以自定义用户函数 (UDF) 和存储格式； 为超大的数据集设计的计算和存储能力，集群扩展容易; 统一的元数据管理，可与 presto／impala／sparksql 等共享数据； 执行延迟高，不适合做数据的实时处理，但适合做海量数据的离线处理。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/16.%E5%A4%A7%E6%95%B0%E6%8D%AE/02.hive/01.Hive%E5%85%A5%E9%97%A8.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Hive 入门"}],["meta",{"property":"og:description","content":"Hive 入门 简介 Hive 是一个构建在 Hadoop 之上的数据仓库，它可以将结构化的数据文件映射成表，并提供类 SQL 查询功能，用于查询的 SQL 语句会被转化为 MapReduce 作业，然后提交到 Hadoop 上运行。 特点： 简单、容易上手 (提供了类似 sql 的查询语言 hql)，使得精通 sql 但是不了解 Java 编程的人也能很好地进行大数据分析； 灵活性高，可以自定义用户函数 (UDF) 和存储格式； 为超大的数据集设计的计算和存储能力，集群扩展容易; 统一的元数据管理，可与 presto／impala／sparksql 等共享数据； 执行延迟高，不适合做数据的实时处理，但适合做海量数据的离线处理。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T15:44:18.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"大数据"}],["meta",{"property":"article:tag","content":"Hive"}],["meta",{"property":"article:published_time","content":"2020-02-24T21:14:47.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T15:44:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Hive 入门\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-02-24T21:14:47.000Z\\",\\"dateModified\\":\\"2023-09-11T15:44:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"Hive 的体系架构","slug":"hive-的体系架构","link":"#hive-的体系架构","children":[{"level":3,"title":"command-line shell & thrift/jdbc","slug":"command-line-shell-thrift-jdbc","link":"#command-line-shell-thrift-jdbc","children":[]},{"level":3,"title":"Metastore","slug":"metastore","link":"#metastore","children":[]},{"level":3,"title":"HQL 的执行流程","slug":"hql-的执行流程","link":"#hql-的执行流程","children":[]}]},{"level":2,"title":"数据类型","slug":"数据类型","link":"#数据类型","children":[{"level":3,"title":"基本数据类型","slug":"基本数据类型","link":"#基本数据类型","children":[]},{"level":3,"title":"隐式转换","slug":"隐式转换","link":"#隐式转换","children":[]},{"level":3,"title":"复杂类型","slug":"复杂类型","link":"#复杂类型","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]},{"level":2,"title":"内容格式","slug":"内容格式","link":"#内容格式","children":[]},{"level":2,"title":"存储格式","slug":"存储格式","link":"#存储格式","children":[{"level":3,"title":"支持的存储格式","slug":"支持的存储格式","link":"#支持的存储格式","children":[]},{"level":3,"title":"指定存储格式","slug":"指定存储格式","link":"#指定存储格式","children":[]}]},{"level":2,"title":"内部表和外部表","slug":"内部表和外部表","link":"#内部表和外部表","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1694447058000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":8.35,"words":2505},"filePathRelative":"16.大数据/02.hive/01.Hive入门.md","localizedDate":"2020年2月24日","excerpt":"<h1> Hive 入门</h1>\\n<h2> 简介</h2>\\n<p>Hive 是一个构建在 Hadoop 之上的数据仓库，它可以将结构化的数据文件映射成表，并提供类 SQL 查询功能，用于查询的 SQL 语句会被转化为 MapReduce 作业，然后提交到 Hadoop 上运行。</p>\\n<p><strong>特点</strong>：</p>\\n<ol>\\n<li>简单、容易上手 (提供了类似 sql 的查询语言 hql)，使得精通 sql 但是不了解 Java 编程的人也能很好地进行大数据分析；</li>\\n<li>灵活性高，可以自定义用户函数 (UDF) 和存储格式；</li>\\n<li>为超大的数据集设计的计算和存储能力，集群扩展容易;</li>\\n<li>统一的元数据管理，可与 presto／impala／sparksql 等共享数据；</li>\\n<li>执行延迟高，不适合做数据的实时处理，但适合做海量数据的离线处理。</li>\\n</ol>","autoDesc":true}');export{e as data};
