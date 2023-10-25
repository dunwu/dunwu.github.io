const t=JSON.parse('{"key":"v-1e815f50","path":"/15.%E5%88%86%E5%B8%83%E5%BC%8F/01.%E5%88%86%E5%B8%83%E5%BC%8F%E7%90%86%E8%AE%BA/02.%E5%88%86%E5%B8%83%E5%BC%8F%E4%B8%80%E8%87%B4%E6%80%A7.html","title":"分布式一致性","lang":"zh-CN","frontmatter":{"title":"分布式一致性","date":"2021-11-08T08:15:33.000Z","order":2,"category":["分布式","分布式理论"],"tag":["分布式","理论","一致性","ACID","CAP","BASE"],"description":"分布式一致性 ACID 理论 ACID 是数据库事务正确执行的四个基本要素。 原子性（Atomicity） 事务被视为不可分割的最小单元，事务中的所有操作要么全部提交成功，要么全部失败回滚。 回滚可以用日志来实现，日志记录着事务所执行的修改操作，在回滚时反向执行这些修改操作即可。 一致性（Consistency） 数据库在事务执行前后都保持一致性状态。 在一致性状态下，所有事务对一个数据的读取结果都是相同的。 隔离性（Isolation） 一个事务所做的修改在最终提交以前，对其它事务是不可见的。 持久性（Durability） 一旦事务提交，则其所做的修改将会永远保存到数据库中。即使系统发生崩溃，事务执行的结果也不能丢失。 可以通过数据库备份和恢复来实现，在系统发生奔溃时，使用备份的数据库进行数据恢复。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/15.%E5%88%86%E5%B8%83%E5%BC%8F/01.%E5%88%86%E5%B8%83%E5%BC%8F%E7%90%86%E8%AE%BA/02.%E5%88%86%E5%B8%83%E5%BC%8F%E4%B8%80%E8%87%B4%E6%80%A7.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"分布式一致性"}],["meta",{"property":"og:description","content":"分布式一致性 ACID 理论 ACID 是数据库事务正确执行的四个基本要素。 原子性（Atomicity） 事务被视为不可分割的最小单元，事务中的所有操作要么全部提交成功，要么全部失败回滚。 回滚可以用日志来实现，日志记录着事务所执行的修改操作，在回滚时反向执行这些修改操作即可。 一致性（Consistency） 数据库在事务执行前后都保持一致性状态。 在一致性状态下，所有事务对一个数据的读取结果都是相同的。 隔离性（Isolation） 一个事务所做的修改在最终提交以前，对其它事务是不可见的。 持久性（Durability） 一旦事务提交，则其所做的修改将会永远保存到数据库中。即使系统发生崩溃，事务执行的结果也不能丢失。 可以通过数据库备份和恢复来实现，在系统发生奔溃时，使用备份的数据库进行数据恢复。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-24T23:25:09.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"理论"}],["meta",{"property":"article:tag","content":"一致性"}],["meta",{"property":"article:tag","content":"ACID"}],["meta",{"property":"article:tag","content":"CAP"}],["meta",{"property":"article:tag","content":"BASE"}],["meta",{"property":"article:published_time","content":"2021-11-08T08:15:33.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-24T23:25:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式一致性\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-08T08:15:33.000Z\\",\\"dateModified\\":\\"2023-10-24T23:25:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"ACID 理论","slug":"acid-理论","link":"#acid-理论","children":[]},{"level":2,"title":"本地事务和分布式事务","slug":"本地事务和分布式事务","link":"#本地事务和分布式事务","children":[]},{"level":2,"title":"CAP 理论","slug":"cap-理论","link":"#cap-理论","children":[{"level":3,"title":"一致性","slug":"一致性","link":"#一致性","children":[]},{"level":3,"title":"可用性","slug":"可用性","link":"#可用性","children":[]},{"level":3,"title":"分区容错性","slug":"分区容错性","link":"#分区容错性","children":[]},{"level":3,"title":"AP or CP","slug":"ap-or-cp","link":"#ap-or-cp","children":[]}]},{"level":2,"title":"BASE 理论","slug":"base-理论","link":"#base-理论","children":[{"level":3,"title":"什么是 BASE 定理","slug":"什么是-base-定理","link":"#什么是-base-定理","children":[]},{"level":3,"title":"BASE vs. ACID","slug":"base-vs-acid","link":"#base-vs-acid","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1698189909000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":3}]},"readingTime":{"minutes":10.91,"words":3272},"filePathRelative":"15.分布式/01.分布式理论/02.分布式一致性.md","localizedDate":"2021年11月8日","excerpt":"<h1> 分布式一致性</h1>\\n<h2> ACID 理论</h2>\\n<p>ACID 是数据库事务正确执行的四个基本要素。</p>\\n<ul>\\n<li><strong>原子性（Atomicity）</strong>\\n<ul>\\n<li>事务被视为不可分割的最小单元，事务中的所有操作要么全部提交成功，要么全部失败回滚。</li>\\n<li>回滚可以用日志来实现，日志记录着事务所执行的修改操作，在回滚时反向执行这些修改操作即可。</li>\\n</ul>\\n</li>\\n<li><strong>一致性（Consistency）</strong>\\n<ul>\\n<li>数据库在事务执行前后都保持一致性状态。</li>\\n<li>在一致性状态下，所有事务对一个数据的读取结果都是相同的。</li>\\n</ul>\\n</li>\\n<li><strong>隔离性（Isolation）</strong>\\n<ul>\\n<li>一个事务所做的修改在最终提交以前，对其它事务是不可见的。</li>\\n</ul>\\n</li>\\n<li><strong>持久性（Durability）</strong>\\n<ul>\\n<li>一旦事务提交，则其所做的修改将会永远保存到数据库中。即使系统发生崩溃，事务执行的结果也不能丢失。</li>\\n<li>可以通过数据库备份和恢复来实现，在系统发生奔溃时，使用备份的数据库进行数据恢复。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{t as data};
