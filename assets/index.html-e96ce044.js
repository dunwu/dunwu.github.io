const e=JSON.parse('{"key":"v-286a34f6","path":"/pages/0e1012/","title":"Nosql技术选型","lang":"zh-CN","frontmatter":{"title":"Nosql技术选型","date":"2020-02-09T02:18:58.000Z","category":["数据库","数据库综合"],"tag":["数据库","综合","Nosql"],"permalink":"/pages/0e1012/","description":"Nosql 技术选型 img 一、Nosql 简介 传统的关系型数据库存在以下缺点： 大数据场景下 I/O 较高 - 因为数据是按行存储，即使只针对其中某一列进行运算，关系型数据库也会将整行数据从存储设备中读入内存，导致 I/O 较高。 存储的是行记录，无法存储数据结构。 表结构 schema 扩展不方便 - 如要需要修改表结构，需要执行执行 DDL(data definition language)，语句修改，修改期间会导致锁表，部分服务不可用。 全文搜索功能较弱 - 关系型数据库下只能够进行子字符串的匹配查询，当表的数据逐渐变大的时候，LIKE 查询的匹配会非常慢，即使在有索引的情况下。况且关系型数据库也不应该对文本字段进行索引。 存储和处理复杂关系型数据功能较弱 - 许多应用程序需要了解和导航高度连接数据之间的关系，才能启用社交应用程序、推荐引擎、欺诈检测、知识图谱、生命科学和 IT/网络等用例。然而传统的关系数据库并不善于处理数据点之间的关系。它们的表格数据模型和严格的模式使它们很难添加新的或不同种类的关联信息。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/0e1012/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Nosql技术选型"}],["meta",{"property":"og:description","content":"Nosql 技术选型 img 一、Nosql 简介 传统的关系型数据库存在以下缺点： 大数据场景下 I/O 较高 - 因为数据是按行存储，即使只针对其中某一列进行运算，关系型数据库也会将整行数据从存储设备中读入内存，导致 I/O 较高。 存储的是行记录，无法存储数据结构。 表结构 schema 扩展不方便 - 如要需要修改表结构，需要执行执行 DDL(data definition language)，语句修改，修改期间会导致锁表，部分服务不可用。 全文搜索功能较弱 - 关系型数据库下只能够进行子字符串的匹配查询，当表的数据逐渐变大的时候，LIKE 查询的匹配会非常慢，即使在有索引的情况下。况且关系型数据库也不应该对文本字段进行索引。 存储和处理复杂关系型数据功能较弱 - 许多应用程序需要了解和导航高度连接数据之间的关系，才能启用社交应用程序、推荐引擎、欺诈检测、知识图谱、生命科学和 IT/网络等用例。然而传统的关系数据库并不善于处理数据点之间的关系。它们的表格数据模型和严格的模式使它们很难添加新的或不同种类的关联信息。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T15:41:08.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"综合"}],["meta",{"property":"article:tag","content":"Nosql"}],["meta",{"property":"article:published_time","content":"2020-02-09T02:18:58.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-08T15:41:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nosql技术选型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-02-09T02:18:58.000Z\\",\\"dateModified\\":\\"2023-09-08T15:41:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"一、Nosql 简介","slug":"一、nosql-简介","link":"#一、nosql-简介","children":[]},{"level":2,"title":"二、列式数据库","slug":"二、列式数据库","link":"#二、列式数据库","children":[{"level":3,"title":"列式数据库原理","slug":"列式数据库原理","link":"#列式数据库原理","children":[]},{"level":3,"title":"列式数据库产品","slug":"列式数据库产品","link":"#列式数据库产品","children":[]},{"level":3,"title":"列式数据库特性","slug":"列式数据库特性","link":"#列式数据库特性","children":[]},{"level":3,"title":"列式数据库使用场景","slug":"列式数据库使用场景","link":"#列式数据库使用场景","children":[]}]},{"level":2,"title":"三、K-V 数据库","slug":"三、k-v-数据库","link":"#三、k-v-数据库","children":[{"level":3,"title":"K-V 数据库产品","slug":"k-v-数据库产品","link":"#k-v-数据库产品","children":[]},{"level":3,"title":"K-V 数据库特性","slug":"k-v-数据库特性","link":"#k-v-数据库特性","children":[]},{"level":3,"title":"K-V 数据库使用场景","slug":"k-v-数据库使用场景","link":"#k-v-数据库使用场景","children":[]}]},{"level":2,"title":"四、文档数据库","slug":"四、文档数据库","link":"#四、文档数据库","children":[{"level":3,"title":"文档数据库产品","slug":"文档数据库产品","link":"#文档数据库产品","children":[]},{"level":3,"title":"文档数据库特性","slug":"文档数据库特性","link":"#文档数据库特性","children":[]},{"level":3,"title":"文档数据库使用场景","slug":"文档数据库使用场景","link":"#文档数据库使用场景","children":[]}]},{"level":2,"title":"五、全文搜索引擎","slug":"五、全文搜索引擎","link":"#五、全文搜索引擎","children":[{"level":3,"title":"搜索引擎原理","slug":"搜索引擎原理","link":"#搜索引擎原理","children":[]},{"level":3,"title":"搜索引擎产品","slug":"搜索引擎产品","link":"#搜索引擎产品","children":[]},{"level":3,"title":"搜索引擎特性","slug":"搜索引擎特性","link":"#搜索引擎特性","children":[]},{"level":3,"title":"搜索引擎场景","slug":"搜索引擎场景","link":"#搜索引擎场景","children":[]}]},{"level":2,"title":"六、图数据库","slug":"六、图数据库","link":"#六、图数据库","children":[{"level":3,"title":"图数据库产品","slug":"图数据库产品","link":"#图数据库产品","children":[]},{"level":3,"title":"图数据库特性","slug":"图数据库特性","link":"#图数据库特性","children":[]},{"level":3,"title":"图数据库场景","slug":"图数据库场景","link":"#图数据库场景","children":[]}]},{"level":2,"title":"七、总结","slug":"七、总结","link":"#七、总结","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694186720000,"updatedTime":1694187668000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":19.85,"words":5956},"filePathRelative":"12.数据库/01.数据库综合/01.Nosql技术选型.md","localizedDate":"2020年2月9日","excerpt":"<h1> Nosql 技术选型</h1>\\n<figure><img src=\\"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200209020702.png\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>img</figcaption></figure>\\n<h2> 一、Nosql 简介</h2>\\n<p>传统的关系型数据库存在以下缺点：</p>\\n<ul>\\n<li><strong>大数据场景下 I/O 较高</strong> - 因为数据是按行存储，即使只针对其中某一列进行运算，关系型数据库也会将整行数据从存储设备中读入内存，导致 I/O 较高。</li>\\n<li>存储的是行记录，<strong>无法存储数据结构</strong>。</li>\\n<li><strong>表结构 schema 扩展不方便</strong> - 如要需要修改表结构，需要执行执行 DDL(data definition language)，语句修改，修改期间会导致锁表，部分服务不可用。</li>\\n<li><strong>全文搜索功能较弱</strong> - 关系型数据库下只能够进行子字符串的匹配查询，当表的数据逐渐变大的时候，<code>LIKE</code> 查询的匹配会非常慢，即使在有索引的情况下。况且关系型数据库也不应该对文本字段进行索引。</li>\\n<li><strong>存储和处理复杂关系型数据功能较弱</strong> - 许多应用程序需要了解和导航高度连接数据之间的关系，才能启用社交应用程序、推荐引擎、欺诈检测、知识图谱、生命科学和 IT/网络等用例。然而传统的关系数据库并不善于处理数据点之间的关系。它们的表格数据模型和严格的模式使它们很难添加新的或不同种类的关联信息。</li>\\n</ul>","autoDesc":true}');export{e as data};
