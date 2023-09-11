const l=JSON.parse('{"key":"v-7f91bf4d","path":"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/03.%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93/01.%E7%BB%BC%E5%90%88/01.%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93%E9%9D%A2%E8%AF%95.html","title":"关系型数据库面试","lang":"zh-CN","frontmatter":{"title":"关系型数据库面试","date":"2020-01-15T23:21:02.000Z","order":1,"category":["数据库","关系型数据库","综合"],"tag":["数据库","关系型数据库","面试"],"description":"关系型数据库面试 索引和约束 什么是索引 索引是对数据库表中一或多个列的值进行排序的结构，是帮助数据库高效查询数据的数据结构。 索引的优缺点 ✔ 索引的优点： 索引大大减少了服务器需要扫描的数据量，从而加快检索速度。 支持行级锁的数据库，如 InnoDB 会在访问行的时候加锁。使用索引可以减少访问的行数，从而减少锁的竞争，提高并发。 索引可以帮助服务器避免排序和临时表。 索引可以将随机 I/O 变为顺序 I/O。 唯一索引可以确保每一行数据的唯一性，通过使用索引，可以在查询的过程中使用优化隐藏器，提高系统的性能。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/12.%E6%95%B0%E6%8D%AE%E5%BA%93/03.%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93/01.%E7%BB%BC%E5%90%88/01.%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93%E9%9D%A2%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"关系型数据库面试"}],["meta",{"property":"og:description","content":"关系型数据库面试 索引和约束 什么是索引 索引是对数据库表中一或多个列的值进行排序的结构，是帮助数据库高效查询数据的数据结构。 索引的优缺点 ✔ 索引的优点： 索引大大减少了服务器需要扫描的数据量，从而加快检索速度。 支持行级锁的数据库，如 InnoDB 会在访问行的时候加锁。使用索引可以减少访问的行数，从而减少锁的竞争，提高并发。 索引可以帮助服务器避免排序和临时表。 索引可以将随机 I/O 变为顺序 I/O。 唯一索引可以确保每一行数据的唯一性，通过使用索引，可以在查询的过程中使用优化隐藏器，提高系统的性能。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T15:44:18.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"关系型数据库"}],["meta",{"property":"article:tag","content":"面试"}],["meta",{"property":"article:published_time","content":"2020-01-15T23:21:02.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T15:44:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"关系型数据库面试\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-15T23:21:02.000Z\\",\\"dateModified\\":\\"2023-09-11T15:44:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"索引和约束","slug":"索引和约束","link":"#索引和约束","children":[{"level":3,"title":"什么是索引","slug":"什么是索引","link":"#什么是索引","children":[]},{"level":3,"title":"索引的优缺点","slug":"索引的优缺点","link":"#索引的优缺点","children":[]},{"level":3,"title":"何时使用索引","slug":"何时使用索引","link":"#何时使用索引","children":[]},{"level":3,"title":"索引的类型","slug":"索引的类型","link":"#索引的类型","children":[]},{"level":3,"title":"索引的数据结构","slug":"索引的数据结构","link":"#索引的数据结构","children":[]},{"level":3,"title":"索引策略","slug":"索引策略","link":"#索引策略","children":[]},{"level":3,"title":"约束","slug":"约束","link":"#约束","children":[]}]},{"level":2,"title":"并发控制","slug":"并发控制","link":"#并发控制","children":[{"level":3,"title":"乐观锁和悲观锁","slug":"乐观锁和悲观锁","link":"#乐观锁和悲观锁","children":[]},{"level":3,"title":"行级锁和表级锁","slug":"行级锁和表级锁","link":"#行级锁和表级锁","children":[]},{"level":3,"title":"读写锁","slug":"读写锁","link":"#读写锁","children":[]},{"level":3,"title":"意向锁","slug":"意向锁","link":"#意向锁","children":[]},{"level":3,"title":"MVCC","slug":"mvcc","link":"#mvcc","children":[]},{"level":3,"title":"Next-key 锁","slug":"next-key-锁","link":"#next-key-锁","children":[]}]},{"level":2,"title":"事务","slug":"事务","link":"#事务","children":[{"level":3,"title":"ACID","slug":"acid","link":"#acid","children":[]},{"level":3,"title":"并发一致性问题","slug":"并发一致性问题","link":"#并发一致性问题","children":[]},{"level":3,"title":"事务隔离","slug":"事务隔离","link":"#事务隔离","children":[]},{"level":3,"title":"分布式事务","slug":"分布式事务","link":"#分布式事务","children":[]}]},{"level":2,"title":"分库分表","slug":"分库分表","link":"#分库分表","children":[{"level":3,"title":"什么是分库分表","slug":"什么是分库分表","link":"#什么是分库分表","children":[]},{"level":3,"title":"分库分表中间件","slug":"分库分表中间件","link":"#分库分表中间件","children":[]},{"level":3,"title":"分库分表的问题","slug":"分库分表的问题","link":"#分库分表的问题","children":[]}]},{"level":2,"title":"集群","slug":"集群","link":"#集群","children":[{"level":3,"title":"复制机制","slug":"复制机制","link":"#复制机制","children":[]},{"level":3,"title":"读写分离","slug":"读写分离","link":"#读写分离","children":[]}]},{"level":2,"title":"数据库优化","slug":"数据库优化","link":"#数据库优化","children":[{"level":3,"title":"SQL 优化","slug":"sql-优化","link":"#sql-优化","children":[]},{"level":3,"title":"结构优化","slug":"结构优化","link":"#结构优化","children":[]},{"level":3,"title":"配置优化","slug":"配置优化","link":"#配置优化","children":[]},{"level":3,"title":"硬件优化","slug":"硬件优化","link":"#硬件优化","children":[]}]},{"level":2,"title":"数据库理论","slug":"数据库理论","link":"#数据库理论","children":[{"level":3,"title":"函数依赖","slug":"函数依赖","link":"#函数依赖","children":[]},{"level":3,"title":"异常","slug":"异常","link":"#异常","children":[]},{"level":3,"title":"范式","slug":"范式","link":"#范式","children":[]}]},{"level":2,"title":"存储引擎","slug":"存储引擎","link":"#存储引擎","children":[{"level":3,"title":"InnoDB vs. MyISAM","slug":"innodb-vs-myisam","link":"#innodb-vs-myisam","children":[]}]},{"level":2,"title":"数据库比较","slug":"数据库比较","link":"#数据库比较","children":[{"level":3,"title":"常见数据库比较","slug":"常见数据库比较","link":"#常见数据库比较","children":[]},{"level":3,"title":"Oracle vs. Mysql","slug":"oracle-vs-mysql","link":"#oracle-vs-mysql","children":[]},{"level":3,"title":"数据类型比较","slug":"数据类型比较","link":"#数据类型比较","children":[]}]},{"level":2,"title":"SQL FAQ","slug":"sql-faq","link":"#sql-faq","children":[{"level":3,"title":"SELECT COUNT(*)、SELECT COUNT(1) 和 SELECT COUNT(具体字段) 性能有差别吗？","slug":"select-count-、select-count-1-和-select-count-具体字段-性能有差别吗","link":"#select-count-、select-count-1-和-select-count-具体字段-性能有差别吗","children":[]},{"level":3,"title":"ORDER BY 是对分的组排序还是对分组中的记录排序呢？","slug":"order-by-是对分的组排序还是对分组中的记录排序呢","link":"#order-by-是对分的组排序还是对分组中的记录排序呢","children":[]},{"level":3,"title":"SELECT 语句内部的执行步骤","slug":"select-语句内部的执行步骤","link":"#select-语句内部的执行步骤","children":[]},{"level":3,"title":"解哪种情况下应该使用 EXISTS，哪种情况应该用 IN","slug":"解哪种情况下应该使用-exists-哪种情况应该用-in","link":"#解哪种情况下应该使用-exists-哪种情况应该用-in","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1694447058000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":49.56,"words":14867},"filePathRelative":"12.数据库/03.关系型数据库/01.综合/01.关系型数据库面试.md","localizedDate":"2020年1月15日","excerpt":"<h1> 关系型数据库面试</h1>\\n<h2> 索引和约束</h2>\\n<h3> 什么是索引</h3>\\n<p>索引是对数据库表中一或多个列的值进行排序的结构，是帮助数据库高效查询数据的数据结构。</p>\\n<h3> 索引的优缺点</h3>\\n<p>✔ 索引的优点：</p>\\n<ul>\\n<li>索引大大减少了服务器需要扫描的数据量，从而加快检索速度。</li>\\n<li>支持行级锁的数据库，如 InnoDB 会在访问行的时候加锁。使用索引可以减少访问的行数，从而减少锁的竞争，提高并发。</li>\\n<li>索引可以帮助服务器避免排序和临时表。</li>\\n<li>索引可以将随机 I/O 变为顺序 I/O。</li>\\n<li>唯一索引可以确保每一行数据的唯一性，通过使用索引，可以在查询的过程中使用优化隐藏器，提高系统的性能。</li>\\n</ul>","autoDesc":true}');export{l as data};
