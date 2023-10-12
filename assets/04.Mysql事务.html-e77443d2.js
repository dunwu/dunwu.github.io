const e=JSON.parse('{"key":"v-7335c2d8","path":"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/03.%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93/02.Mysql/04.Mysql%E4%BA%8B%E5%8A%A1.html","title":"Mysql 事务","lang":"zh-CN","frontmatter":{"icon":"logos:mysql","title":"Mysql 事务","date":"2020-06-03T19:32:09.000Z","order":4,"category":["数据库","关系型数据库","Mysql"],"tag":["数据库","关系型数据库","Mysql","事务"],"description":"Mysql 事务 不是所有的 Mysql 存储引擎都实现了事务处理。支持事务的存储引擎有：InnoDB 和 NDB Cluster。不支持事务的存储引擎，代表有：MyISAM。 用户可以根据业务是否需要事务处理（事务处理可以保证数据安全，但会增加系统开销），选择合适的存储引擎。 事务简介 事务概念 事务指的是满足 ACID 特性的一组操作。事务内的 SQL 语句，要么全执行成功，要么全执行失败。可以通过 Commit 提交一个事务，也可以使用 Rollback 进行回滚。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/12.%E6%95%B0%E6%8D%AE%E5%BA%93/03.%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93/02.Mysql/04.Mysql%E4%BA%8B%E5%8A%A1.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Mysql 事务"}],["meta",{"property":"og:description","content":"Mysql 事务 不是所有的 Mysql 存储引擎都实现了事务处理。支持事务的存储引擎有：InnoDB 和 NDB Cluster。不支持事务的存储引擎，代表有：MyISAM。 用户可以根据业务是否需要事务处理（事务处理可以保证数据安全，但会增加系统开销），选择合适的存储引擎。 事务简介 事务概念 事务指的是满足 ACID 特性的一组操作。事务内的 SQL 语句，要么全执行成功，要么全执行失败。可以通过 Commit 提交一个事务，也可以使用 Rollback 进行回滚。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-11T23:46:42.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"关系型数据库"}],["meta",{"property":"article:tag","content":"Mysql"}],["meta",{"property":"article:tag","content":"事务"}],["meta",{"property":"article:published_time","content":"2020-06-03T19:32:09.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-11T23:46:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mysql 事务\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-03T19:32:09.000Z\\",\\"dateModified\\":\\"2023-10-11T23:46:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"事务简介","slug":"事务简介","link":"#事务简介","children":[{"level":3,"title":"事务概念","slug":"事务概念","link":"#事务概念","children":[]},{"level":3,"title":"ACID","slug":"acid","link":"#acid","children":[]},{"level":3,"title":"事务操作","slug":"事务操作","link":"#事务操作","children":[]},{"level":3,"title":"AUTOCOMMIT","slug":"autocommit","link":"#autocommit","children":[]}]},{"level":2,"title":"并发修改问题并发修改问题","slug":"并发修改问题并发修改问题","link":"#并发修改问题并发修改问题","children":[{"level":3,"title":"丢失修改","slug":"丢失修改","link":"#丢失修改","children":[]},{"level":3,"title":"脏读","slug":"脏读","link":"#脏读","children":[]},{"level":3,"title":"不可重复读","slug":"不可重复读","link":"#不可重复读","children":[]},{"level":3,"title":"幻读","slug":"幻读","link":"#幻读","children":[]}]},{"level":2,"title":"事务隔离级别","slug":"事务隔离级别","link":"#事务隔离级别","children":[{"level":3,"title":"事务隔离级别简介","slug":"事务隔离级别简介","link":"#事务隔离级别简介","children":[]},{"level":3,"title":"查看和设置事务隔离级别","slug":"查看和设置事务隔离级别","link":"#查看和设置事务隔离级别","children":[]},{"level":3,"title":"事务隔离级别实现方式","slug":"事务隔离级别实现方式","link":"#事务隔离级别实现方式","children":[]}]},{"level":2,"title":"MVCC","slug":"mvcc","link":"#mvcc","children":[{"level":3,"title":"MVCC 实现原理","slug":"mvcc-实现原理","link":"#mvcc-实现原理","children":[]},{"level":3,"title":"ReadView","slug":"readview","link":"#readview","children":[]},{"level":3,"title":"版本链","slug":"版本链","link":"#版本链","children":[]},{"level":3,"title":"MVCC 实现可重复读","slug":"mvcc-实现可重复读","link":"#mvcc-实现可重复读","children":[]},{"level":3,"title":"MVCC 实现读已提交","slug":"mvcc-实现读已提交","link":"#mvcc-实现读已提交","children":[]},{"level":3,"title":"快照读和当前读","slug":"快照读和当前读","link":"#快照读和当前读","children":[]},{"level":3,"title":"MVCC + next-key lock 解决幻读","slug":"mvcc-next-key-lock-解决幻读","link":"#mvcc-next-key-lock-解决幻读","children":[]}]},{"level":2,"title":"分布式事务","slug":"分布式事务","link":"#分布式事务","children":[]},{"level":2,"title":"事务最佳实践","slug":"事务最佳实践","link":"#事务最佳实践","children":[{"level":3,"title":"尽量使用低级别事务隔离","slug":"尽量使用低级别事务隔离","link":"#尽量使用低级别事务隔离","children":[]},{"level":3,"title":"避免行锁升级表锁","slug":"避免行锁升级表锁","link":"#避免行锁升级表锁","children":[]},{"level":3,"title":"缩小事务范围","slug":"缩小事务范围","link":"#缩小事务范围","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1695308094000,"updatedTime":1697068002000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":4}]},"readingTime":{"minutes":22.16,"words":6647},"filePathRelative":"12.数据库/03.关系型数据库/02.Mysql/04.Mysql事务.md","localizedDate":"2020年6月3日","excerpt":"<h1> Mysql 事务</h1>\\n<blockquote>\\n<p>不是所有的 Mysql 存储引擎都实现了事务处理。支持事务的存储引擎有：<code>InnoDB</code> 和 <code>NDB Cluster</code>。不支持事务的存储引擎，代表有：<code>MyISAM</code>。</p>\\n<p>用户可以根据业务是否需要事务处理（事务处理可以保证数据安全，但会增加系统开销），选择合适的存储引擎。</p>\\n</blockquote>\\n<h2> 事务简介</h2>\\n<h3> 事务概念</h3>\\n<p><strong>事务指的是满足 ACID 特性的一组操作</strong>。事务内的 SQL 语句，要么全执行成功，要么全执行失败。可以通过 <code>Commit</code> 提交一个事务，也可以使用 <code>Rollback</code> 进行回滚。</p>","autoDesc":true}');export{e as data};
