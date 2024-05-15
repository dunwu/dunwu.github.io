const l=JSON.parse('{"key":"v-d4bdc870","path":"/pages/7b0caf/","title":"Mysql 面试","lang":"zh-CN","frontmatter":{"icon":"logos:mysql","title":"Mysql 面试","date":"2020-09-12T10:43:53.000Z","order":99,"permalink":"/pages/7b0caf/","category":["数据库","关系型数据库","Mysql"],"tag":["数据库","关系型数据库","Mysql","面试"],"description":"Mysql 面试 基础 EXISTS 和 IN 有什么区别？ EXISTS - 先对外表进行循环查询，再将查询结果放入 EXISTS 的子查询中进行条件比较，确定外层查询数据是否保留； IN - 先查询内表，将内表的查询结果作为条件，提供给外表查询语句进行比较； 索引是个前提，其实选择与否还是要看表的大小。你可以将选择的标准理解为小表驱动大表。在这种方式下效率是最高的。 比如下面这样：","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/7b0caf/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Mysql 面试"}],["meta",{"property":"og:description","content":"Mysql 面试 基础 EXISTS 和 IN 有什么区别？ EXISTS - 先对外表进行循环查询，再将查询结果放入 EXISTS 的子查询中进行条件比较，确定外层查询数据是否保留； IN - 先查询内表，将内表的查询结果作为条件，提供给外表查询语句进行比较； 索引是个前提，其实选择与否还是要看表的大小。你可以将选择的标准理解为小表驱动大表。在这种方式下效率是最高的。 比如下面这样："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T22:46:25.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"关系型数据库"}],["meta",{"property":"article:tag","content":"Mysql"}],["meta",{"property":"article:tag","content":"面试"}],["meta",{"property":"article:published_time","content":"2020-09-12T10:43:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T22:46:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mysql 面试\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-09-12T10:43:53.000Z\\",\\"dateModified\\":\\"2024-05-15T22:46:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"基础","slug":"基础","link":"#基础","children":[{"level":3,"title":"EXISTS 和 IN 有什么区别？","slug":"exists-和-in-有什么区别","link":"#exists-和-in-有什么区别","children":[]},{"level":3,"title":"UNION 和 UNION ALL 有什么区别？","slug":"union-和-union-all-有什么区别","link":"#union-和-union-all-有什么区别","children":[]},{"level":3,"title":"JOIN 有哪些类型？","slug":"join-有哪些类型","link":"#join-有哪些类型","children":[]},{"level":3,"title":"CHAR 和 VARCHAR 的区别是什么？","slug":"char-和-varchar-的区别是什么","link":"#char-和-varchar-的区别是什么","children":[]},{"level":3,"title":"金钱相关的数据用什么类型存储？","slug":"金钱相关的数据用什么类型存储","link":"#金钱相关的数据用什么类型存储","children":[]},{"level":3,"title":"如何存储 emoji 😃？","slug":"如何存储-emoji-😃","link":"#如何存储-emoji-😃","children":[]},{"level":3,"title":"什么是范式？什么是反范式？","slug":"什么是范式-什么是反范式","link":"#什么是范式-什么是反范式","children":[]}]},{"level":2,"title":"架构","slug":"架构","link":"#架构","children":[{"level":3,"title":"一条 SQL 查询语句是如何执行的？","slug":"一条-sql-查询语句是如何执行的","link":"#一条-sql-查询语句是如何执行的","children":[]},{"level":3,"title":"一条 SQL 更新语句是如何执行的？","slug":"一条-sql-更新语句是如何执行的","link":"#一条-sql-更新语句是如何执行的","children":[]},{"level":3,"title":"一条 SQL 查询语句的执行顺序是怎样的？","slug":"一条-sql-查询语句的执行顺序是怎样的","link":"#一条-sql-查询语句的执行顺序是怎样的","children":[]}]},{"level":2,"title":"存储引擎","slug":"存储引擎","link":"#存储引擎","children":[{"level":3,"title":"Mysql 有哪些常见存储引擎？","slug":"mysql-有哪些常见存储引擎","link":"#mysql-有哪些常见存储引擎","children":[]},{"level":3,"title":"InnoDB 和 MyISAM 有哪些差异？","slug":"innodb-和-myisam-有哪些差异","link":"#innodb-和-myisam-有哪些差异","children":[]},{"level":3,"title":"如何选择存储引擎？","slug":"如何选择存储引擎","link":"#如何选择存储引擎","children":[]}]},{"level":2,"title":"日志","slug":"日志","link":"#日志","children":[{"level":3,"title":"MySQL 有哪些类型的日志？","slug":"mysql-有哪些类型的日志","link":"#mysql-有哪些类型的日志","children":[]},{"level":3,"title":"bin log 和 redo log 有什么区别？","slug":"bin-log-和-redo-log-有什么区别","link":"#bin-log-和-redo-log-有什么区别","children":[]},{"level":3,"title":"redo log 如何刷盘？","slug":"redo-log-如何刷盘","link":"#redo-log-如何刷盘","children":[]},{"level":3,"title":"日志为什么要两阶段提交？","slug":"日志为什么要两阶段提交","link":"#日志为什么要两阶段提交","children":[]}]},{"level":2,"title":"索引","slug":"索引","link":"#索引","children":[{"level":3,"title":"什么是索引？为什么要使用索引？","slug":"什么是索引-为什么要使用索引","link":"#什么是索引-为什么要使用索引","children":[]},{"level":3,"title":"索引的优点和缺点是什么？","slug":"索引的优点和缺点是什么","link":"#索引的优点和缺点是什么","children":[]},{"level":3,"title":"何时适用索引？何时不适用索引？","slug":"何时适用索引-何时不适用索引","link":"#何时适用索引-何时不适用索引","children":[]},{"level":3,"title":"索引如何分类？","slug":"索引如何分类","link":"#索引如何分类","children":[]},{"level":3,"title":"索引有哪些常见数据结构？","slug":"索引有哪些常见数据结构","link":"#索引有哪些常见数据结构","children":[]},{"level":3,"title":"为什么 InnoDB 索引采用 B+ 树？","slug":"为什么-innodb-索引采用-b-树","link":"#为什么-innodb-索引采用-b-树","children":[]},{"level":3,"title":"聚簇索引和非聚簇索引有什么区别？","slug":"聚簇索引和非聚簇索引有什么区别","link":"#聚簇索引和非聚簇索引有什么区别","children":[]},{"level":3,"title":"索引有哪些优化策略？","slug":"索引有哪些优化策略","link":"#索引有哪些优化策略","children":[]},{"level":3,"title":"哪些情况下，索引会失效？","slug":"哪些情况下-索引会失效","link":"#哪些情况下-索引会失效","children":[]},{"level":3,"title":"普通索引和唯一索引，应该怎么选择？","slug":"普通索引和唯一索引-应该怎么选择","link":"#普通索引和唯一索引-应该怎么选择","children":[]}]},{"level":2,"title":"事务","slug":"事务","link":"#事务","children":[{"level":3,"title":"什么是事务，什么是 ACID？","slug":"什么是事务-什么是-acid","link":"#什么是事务-什么是-acid","children":[]},{"level":3,"title":"事务存在哪些并发一致性问题？","slug":"事务存在哪些并发一致性问题","link":"#事务存在哪些并发一致性问题","children":[]},{"level":3,"title":"有哪些事务隔离级别，分别解决了什么问题？","slug":"有哪些事务隔离级别-分别解决了什么问题","link":"#有哪些事务隔离级别-分别解决了什么问题","children":[]},{"level":3,"title":"各事务隔离级别是如何实现的？","slug":"各事务隔离级别是如何实现的","link":"#各事务隔离级别是如何实现的","children":[]},{"level":3,"title":"什么是 MVCC？","slug":"什么是-mvcc","link":"#什么是-mvcc","children":[]},{"level":3,"title":"MVCC 的实现原理是什么？","slug":"mvcc-的实现原理是什么","link":"#mvcc-的实现原理是什么","children":[]},{"level":3,"title":"MVCC 实现了哪些隔离级别，如何实现的？","slug":"mvcc-实现了哪些隔离级别-如何实现的","link":"#mvcc-实现了哪些隔离级别-如何实现的","children":[]}]},{"level":2,"title":"锁","slug":"锁","link":"#锁","children":[{"level":3,"title":"Mysql 中有哪些锁？","slug":"mysql-中有哪些锁","link":"#mysql-中有哪些锁","children":[]},{"level":3,"title":"死锁是如何产生的？","slug":"死锁是如何产生的","link":"#死锁是如何产生的","children":[]},{"level":3,"title":"如何避免死锁？","slug":"如何避免死锁","link":"#如何避免死锁","children":[]},{"level":3,"title":"如何解决死锁？","slug":"如何解决死锁","link":"#如何解决死锁","children":[]}]},{"level":2,"title":"优化","slug":"优化","link":"#优化","children":[{"level":3,"title":"如何发现慢 SQL？","slug":"如何发现慢-sql","link":"#如何发现慢-sql","children":[]},{"level":3,"title":"什么是执行计划？","slug":"什么是执行计划","link":"#什么是执行计划","children":[]},{"level":3,"title":"如何分析执行计划？","slug":"如何分析执行计划","link":"#如何分析执行计划","children":[]},{"level":3,"title":"如何优化 SQL","slug":"如何优化-sql","link":"#如何优化-sql","children":[]},{"level":3,"title":"哪种 COUNT 性能最好？","slug":"哪种-count-性能最好","link":"#哪种-count-性能最好","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1695308094000,"updatedTime":1715813185000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":11}]},"readingTime":{"minutes":53.27,"words":15982},"filePathRelative":"12.数据库/03.关系型数据库/02.Mysql/99.Mysql面试.md","localizedDate":"2020年9月12日","excerpt":"<h1> Mysql 面试</h1>\\n<h2> 基础</h2>\\n<h3> EXISTS 和 IN 有什么区别？</h3>\\n<ul>\\n<li><code>EXISTS</code> - 先对外表进行循环查询，再将查询结果放入 <code>EXISTS</code> 的子查询中进行条件比较，确定外层查询数据是否保留；</li>\\n<li><code>IN</code> - 先查询内表，将内表的查询结果作为条件，提供给外表查询语句进行比较；</li>\\n</ul>\\n<p>索引是个前提，其实选择与否还是要看表的大小。你可以将选择的标准理解为小表驱动大表。在这种方式下效率是最高的。</p>\\n<p>比如下面这样：</p>","autoDesc":true}');export{l as data};
