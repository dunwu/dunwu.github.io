const e=JSON.parse('{"key":"v-538dd258","path":"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/03.%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93/02.Mysql/03.Mysql%E7%B4%A2%E5%BC%95.html","title":"Mysql 索引","lang":"zh-CN","frontmatter":{"icon":"logos:mysql","title":"Mysql 索引","date":"2020-07-16T11:14:07.000Z","order":3,"category":["数据库","关系型数据库","Mysql"],"tag":["数据库","关系型数据库","Mysql","索引"],"description":"Mysql 索引 索引是提高 MySQL 查询性能的一个重要途径，但过多的索引可能会导致过高的磁盘使用率以及过高的内存占用，从而影响应用程序的整体性能。应当尽量避免事后才想起添加索引，因为事后可能需要监控大量的 SQL 才能定位到问题所在，而且添加索引的时间肯定是远大于初始添加索引所需要的时间，可见索引的添加也是非常有技术含量的。 接下来将向你展示一系列创建高性能索引的策略，以及每条策略其背后的工作原理。但在此之前，先了解与索引相关的一些算法和数据结构，将有助于更好的理解后文的内容。 img","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/12.%E6%95%B0%E6%8D%AE%E5%BA%93/03.%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93/02.Mysql/03.Mysql%E7%B4%A2%E5%BC%95.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Mysql 索引"}],["meta",{"property":"og:description","content":"Mysql 索引 索引是提高 MySQL 查询性能的一个重要途径，但过多的索引可能会导致过高的磁盘使用率以及过高的内存占用，从而影响应用程序的整体性能。应当尽量避免事后才想起添加索引，因为事后可能需要监控大量的 SQL 才能定位到问题所在，而且添加索引的时间肯定是远大于初始添加索引所需要的时间，可见索引的添加也是非常有技术含量的。 接下来将向你展示一系列创建高性能索引的策略，以及每条策略其背后的工作原理。但在此之前，先了解与索引相关的一些算法和数据结构，将有助于更好的理解后文的内容。 img"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-10T15:34:42.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"关系型数据库"}],["meta",{"property":"article:tag","content":"Mysql"}],["meta",{"property":"article:tag","content":"索引"}],["meta",{"property":"article:published_time","content":"2020-07-16T11:14:07.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-10T15:34:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mysql 索引\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-07-16T11:14:07.000Z\\",\\"dateModified\\":\\"2023-10-10T15:34:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"索引简介","slug":"索引简介","link":"#索引简介","children":[{"level":3,"title":"索引的优缺点","slug":"索引的优缺点","link":"#索引的优缺点","children":[]},{"level":3,"title":"何时使用索引","slug":"何时使用索引","link":"#何时使用索引","children":[]}]},{"level":2,"title":"索引的数据结构","slug":"索引的数据结构","link":"#索引的数据结构","children":[{"level":3,"title":"数组","slug":"数组","link":"#数组","children":[]},{"level":3,"title":"哈希索引","slug":"哈希索引","link":"#哈希索引","children":[]},{"level":3,"title":"B 树索引","slug":"b-树索引","link":"#b-树索引","children":[]},{"level":3,"title":"全文索引","slug":"全文索引","link":"#全文索引","children":[]},{"level":3,"title":"空间数据索引","slug":"空间数据索引","link":"#空间数据索引","children":[]}]},{"level":2,"title":"索引的类型","slug":"索引的类型","link":"#索引的类型","children":[{"level":3,"title":"主键索引（PRIMARY）","slug":"主键索引-primary","link":"#主键索引-primary","children":[]},{"level":3,"title":"唯一索引（UNIQUE）","slug":"唯一索引-unique","link":"#唯一索引-unique","children":[]},{"level":3,"title":"普通索引（INDEX）","slug":"普通索引-index","link":"#普通索引-index","children":[]},{"level":3,"title":"全文索引（FULLTEXT）","slug":"全文索引-fulltext","link":"#全文索引-fulltext","children":[]},{"level":3,"title":"联合索引","slug":"联合索引","link":"#联合索引","children":[]}]},{"level":2,"title":"索引优化策略","slug":"索引优化策略","link":"#索引优化策略","children":[{"level":3,"title":"索引基本原则","slug":"索引基本原则","link":"#索引基本原则","children":[]},{"level":3,"title":"覆盖索引","slug":"覆盖索引","link":"#覆盖索引","children":[]},{"level":3,"title":"最左前缀匹配原则","slug":"最左前缀匹配原则","link":"#最左前缀匹配原则","children":[]},{"level":3,"title":"前缀索引","slug":"前缀索引","link":"#前缀索引","children":[]},{"level":3,"title":"使用索引来排序","slug":"使用索引来排序","link":"#使用索引来排序","children":[]},{"level":3,"title":"= 和 in 可以乱序","slug":"和-in-可以乱序","link":"#和-in-可以乱序","children":[]}]},{"level":2,"title":"索引失效的场景","slug":"索引失效的场景","link":"#索引失效的场景","children":[{"level":3,"title":"对索引使用左或者左右模糊匹配","slug":"对索引使用左或者左右模糊匹配","link":"#对索引使用左或者左右模糊匹配","children":[]},{"level":3,"title":"对索引使用函数或表达式","slug":"对索引使用函数或表达式","link":"#对索引使用函数或表达式","children":[]},{"level":3,"title":"对索引隐式类型转换","slug":"对索引隐式类型转换","link":"#对索引隐式类型转换","children":[]},{"level":3,"title":"联合索引不遵循最左匹配原则","slug":"联合索引不遵循最左匹配原则","link":"#联合索引不遵循最左匹配原则","children":[]},{"level":3,"title":"WHERE 子句中的 OR","slug":"where-子句中的-or","link":"#where-子句中的-or","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1696952082000,"updatedTime":1696952082000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":20.73,"words":6219},"filePathRelative":"12.数据库/03.关系型数据库/02.Mysql/03.Mysql索引.md","localizedDate":"2020年7月16日","excerpt":"<h1> Mysql 索引</h1>\\n<blockquote>\\n<p>索引是提高 MySQL 查询性能的一个重要途径，但过多的索引可能会导致过高的磁盘使用率以及过高的内存占用，从而影响应用程序的整体性能。应当尽量避免事后才想起添加索引，因为事后可能需要监控大量的 SQL 才能定位到问题所在，而且添加索引的时间肯定是远大于初始添加索引所需要的时间，可见索引的添加也是非常有技术含量的。</p>\\n<p>接下来将向你展示一系列创建高性能索引的策略，以及每条策略其背后的工作原理。但在此之前，先了解与索引相关的一些算法和数据结构，将有助于更好的理解后文的内容。</p>\\n</blockquote>\\n<figure><img src=\\"https://raw.githubusercontent.com/dunwu/images/master/snap/20200715172009.png\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>img</figcaption></figure>","autoDesc":true}');export{e as data};
