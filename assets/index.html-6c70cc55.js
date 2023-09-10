const e=JSON.parse('{"key":"v-4655a3bb","path":"/pages/72a4bd/","title":"《数据密集型应用系统设计》笔记二之数据系统基础","lang":"zh-CN","frontmatter":{"title":"《数据密集型应用系统设计》笔记二之数据系统基础","date":"2021-08-26T23:32:00.000Z","category":["笔记","分布式","分布式综合"],"tag":["数据库","原理"],"permalink":"/pages/72a4bd/","description":"《数据密集型应用系统设计》笔记二之数据系统基础 第 1 章 可靠、可扩展与可维护的应用系统 认识数据系统 很多应用系统都包含以下数据处理系统： 数据库：用以存储数据，这样之后应用可以再次面问。 高速缓存： 缓存那些复杂或操作代价昂贵的结果，以加快下一次访问。 索引： 用户可以按关键字搜索数据井支持各种过掳。 流式处理：持续发送消息至另一个进程，处理采用异步方式。 批处理： 定期处理大量的累积数据。 设计数据系统或数据服务时，需要考虑很多因素，其中最重要的三个问题：","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/72a4bd/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"《数据密集型应用系统设计》笔记二之数据系统基础"}],["meta",{"property":"og:description","content":"《数据密集型应用系统设计》笔记二之数据系统基础 第 1 章 可靠、可扩展与可维护的应用系统 认识数据系统 很多应用系统都包含以下数据处理系统： 数据库：用以存储数据，这样之后应用可以再次面问。 高速缓存： 缓存那些复杂或操作代价昂贵的结果，以加快下一次访问。 索引： 用户可以按关键字搜索数据井支持各种过掳。 流式处理：持续发送消息至另一个进程，处理采用异步方式。 批处理： 定期处理大量的累积数据。 设计数据系统或数据服务时，需要考虑很多因素，其中最重要的三个问题："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T13:36:40.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"原理"}],["meta",{"property":"article:published_time","content":"2021-08-26T23:32:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T13:36:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《数据密集型应用系统设计》笔记二之数据系统基础\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-08-26T23:32:00.000Z\\",\\"dateModified\\":\\"2023-09-10T13:36:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"第 1 章 可靠、可扩展与可维护的应用系统","slug":"第-1-章-可靠、可扩展与可维护的应用系统","link":"#第-1-章-可靠、可扩展与可维护的应用系统","children":[{"level":3,"title":"认识数据系统","slug":"认识数据系统","link":"#认识数据系统","children":[]},{"level":3,"title":"可靠性","slug":"可靠性","link":"#可靠性","children":[]},{"level":3,"title":"可扩展性","slug":"可扩展性","link":"#可扩展性","children":[]},{"level":3,"title":"可维护性","slug":"可维护性","link":"#可维护性","children":[]}]},{"level":2,"title":"第 2 章 数据模型与查询语言","slug":"第-2-章-数据模型与查询语言","link":"#第-2-章-数据模型与查询语言","children":[]},{"level":2,"title":"第 3 章 数据存储与检索","slug":"第-3-章-数据存储与检索","link":"#第-3-章-数据存储与检索","children":[{"level":3,"title":"数据库核心：数据结构","slug":"数据库核心-数据结构","link":"#数据库核心-数据结构","children":[]},{"level":3,"title":"事务处理与分析处理","slug":"事务处理与分析处理","link":"#事务处理与分析处理","children":[]},{"level":3,"title":"列式存储","slug":"列式存储","link":"#列式存储","children":[]}]},{"level":2,"title":"第 4 章 数据编码与演化","slug":"第-4-章-数据编码与演化","link":"#第-4-章-数据编码与演化","children":[]}],"git":{"createdTime":1694353000000,"updatedTime":1694353000000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":3.72,"words":1116},"filePathRelative":"99.笔记/15.分布式/00.分布式综合/02.数据密集型应用系统设计笔记二.md","localizedDate":"2021年8月26日","excerpt":"<h1> 《数据密集型应用系统设计》笔记二之数据系统基础</h1>\\n<h2> 第 1 章 可靠、可扩展与可维护的应用系统</h2>\\n<h3> 认识数据系统</h3>\\n<p>很多应用系统都包含以下数据处理系统：</p>\\n<ul>\\n<li>数据库：用以存储数据，这样之后应用可以再次面问。</li>\\n<li>高速缓存： 缓存那些复杂或操作代价昂贵的结果，以加快下一次访问。</li>\\n<li>索引： 用户可以按关键字搜索数据井支持各种过掳。</li>\\n<li>流式处理：持续发送消息至另一个进程，处理采用异步方式。</li>\\n<li>批处理： 定期处理大量的累积数据。</li>\\n</ul>\\n<p>设计数据系统或数据服务时，需要考虑很多因素，其中最重要的三个问题：</p>","autoDesc":true}');export{e as data};
