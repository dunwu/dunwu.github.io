const l=JSON.parse('{"key":"v-1ab44b85","path":"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/03.%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93/02.Mysql/99.Mysql%E9%9D%A2%E8%AF%95.html","title":"Mysql 面试","lang":"zh-CN","frontmatter":{"icon":"logos:mysql","title":"Mysql 面试","date":"2020-09-12T10:43:53.000Z","order":99,"category":["数据库","关系型数据库","Mysql"],"tag":["数据库","关系型数据库","Mysql","面试"],"description":"Mysql 面试 架构 一条 SQL 查询语句是如何执行的？ 连接器：连接器负责跟客户端建立连接、获取权限、维持和管理连接。 查询缓存：命中缓存，则直接返回结果。弊大于利，因为失效非常频繁——任何更新都会清空查询缓存。 分析器 词法分析：解析 SQL 关键字 语法分析：生成一颗对应的语法解析树 优化器 根据语法树生成多种执行计划 索引选择：根据策略选择最优方式 执行器 校验读写权限 根据执行计划，调用存储引擎的 API 来执行查询 存储引擎：存储数据，提供读写接口","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/12.%E6%95%B0%E6%8D%AE%E5%BA%93/03.%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93/02.Mysql/99.Mysql%E9%9D%A2%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Mysql 面试"}],["meta",{"property":"og:description","content":"Mysql 面试 架构 一条 SQL 查询语句是如何执行的？ 连接器：连接器负责跟客户端建立连接、获取权限、维持和管理连接。 查询缓存：命中缓存，则直接返回结果。弊大于利，因为失效非常频繁——任何更新都会清空查询缓存。 分析器 词法分析：解析 SQL 关键字 语法分析：生成一颗对应的语法解析树 优化器 根据语法树生成多种执行计划 索引选择：根据策略选择最优方式 执行器 校验读写权限 根据执行计划，调用存储引擎的 API 来执行查询 存储引擎：存储数据，提供读写接口"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-24T23:25:09.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"关系型数据库"}],["meta",{"property":"article:tag","content":"Mysql"}],["meta",{"property":"article:tag","content":"面试"}],["meta",{"property":"article:published_time","content":"2020-09-12T10:43:53.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-24T23:25:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mysql 面试\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-09-12T10:43:53.000Z\\",\\"dateModified\\":\\"2023-10-24T23:25:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"架构","slug":"架构","link":"#架构","children":[{"level":3,"title":"一条 SQL 查询语句是如何执行的？","slug":"一条-sql-查询语句是如何执行的","link":"#一条-sql-查询语句是如何执行的","children":[]},{"level":3,"title":"一条 SQL 更新语句是如何执行的？","slug":"一条-sql-更新语句是如何执行的","link":"#一条-sql-更新语句是如何执行的","children":[]},{"level":3,"title":"为什么表数据删掉一半，表文件大小不变","slug":"为什么表数据删掉一半-表文件大小不变","link":"#为什么表数据删掉一半-表文件大小不变","children":[]},{"level":3,"title":"为什么我的 MySQL 会“抖”一下？","slug":"为什么我的-mysql-会-抖-一下","link":"#为什么我的-mysql-会-抖-一下","children":[]},{"level":3,"title":"SELECT 语句内部的执行步骤是怎样的？","slug":"select-语句内部的执行步骤是怎样的","link":"#select-语句内部的执行步骤是怎样的","children":[]},{"level":3,"title":"ORDER BY 是对分的组排序还是对分组中的记录排序呢？","slug":"order-by-是对分的组排序还是对分组中的记录排序呢","link":"#order-by-是对分的组排序还是对分组中的记录排序呢","children":[]},{"level":3,"title":"order by 是怎么工作的？","slug":"order-by-是怎么工作的","link":"#order-by-是怎么工作的","children":[]}]},{"level":2,"title":"存储引擎","slug":"存储引擎","link":"#存储引擎","children":[{"level":3,"title":"Mysql 有哪些常见存储引擎？","slug":"mysql-有哪些常见存储引擎","link":"#mysql-有哪些常见存储引擎","children":[]},{"level":3,"title":"都说 InnoDB 好，那还要不要使用 Memory 引擎","slug":"都说-innodb-好-那还要不要使用-memory-引擎","link":"#都说-innodb-好-那还要不要使用-memory-引擎","children":[]},{"level":3,"title":"InnoDB 和 MyISAM 有哪些差异？","slug":"innodb-和-myisam-有哪些差异","link":"#innodb-和-myisam-有哪些差异","children":[]}]},{"level":2,"title":"索引","slug":"索引","link":"#索引","children":[{"level":3,"title":"什么是索引？为什么要使用索引？","slug":"什么是索引-为什么要使用索引","link":"#什么是索引-为什么要使用索引","children":[]},{"level":3,"title":"索引的优点和缺点是什么？","slug":"索引的优点和缺点是什么","link":"#索引的优点和缺点是什么","children":[]},{"level":3,"title":"何时适用索引？何时不适用索引？","slug":"何时适用索引-何时不适用索引","link":"#何时适用索引-何时不适用索引","children":[]},{"level":3,"title":"索引有哪些常见数据结构？","slug":"索引有哪些常见数据结构","link":"#索引有哪些常见数据结构","children":[]},{"level":3,"title":"什么是聚簇索引？什么是非聚簇索引？","slug":"什么是聚簇索引-什么是非聚簇索引","link":"#什么是聚簇索引-什么是非聚簇索引","children":[]},{"level":3,"title":"聚簇索引和非聚簇索引的查询有什么区别","slug":"聚簇索引和非聚簇索引的查询有什么区别","link":"#聚簇索引和非聚簇索引的查询有什么区别","children":[]},{"level":3,"title":"为什么 InnoDB 选择 B+ 树作为索引的数据结构","slug":"为什么-innodb-选择-b-树作为索引的数据结构","link":"#为什么-innodb-选择-b-树作为索引的数据结构","children":[]},{"level":3,"title":"索引有哪些优化策略？","slug":"索引有哪些优化策略","link":"#索引有哪些优化策略","children":[]},{"level":3,"title":"哪些情况下，索引会失效？","slug":"哪些情况下-索引会失效","link":"#哪些情况下-索引会失效","children":[]},{"level":3,"title":"普通索引和唯一索引，应该怎么选择？","slug":"普通索引和唯一索引-应该怎么选择","link":"#普通索引和唯一索引-应该怎么选择","children":[]},{"level":3,"title":"为什么 MySQL 单表不要超过 2000W 行","slug":"为什么-mysql-单表不要超过-2000w-行","link":"#为什么-mysql-单表不要超过-2000w-行","children":[]}]},{"level":2,"title":"事务","slug":"事务","link":"#事务","children":[{"level":3,"title":"事务隔离级别","slug":"事务隔离级别","link":"#事务隔离级别","children":[]},{"level":3,"title":"事务到底是隔离的还是不隔离的","slug":"事务到底是隔离的还是不隔离的","link":"#事务到底是隔离的还是不隔离的","children":[]},{"level":3,"title":"幻读是什么，幻读有什么问题？","slug":"幻读是什么-幻读有什么问题","link":"#幻读是什么-幻读有什么问题","children":[]}]},{"level":2,"title":"锁","slug":"锁","link":"#锁","children":[{"level":3,"title":"Mysql 中有哪些锁？","slug":"mysql-中有哪些锁","link":"#mysql-中有哪些锁","children":[]},{"level":3,"title":"什么情况下会发生死锁？","slug":"什么情况下会发生死锁","link":"#什么情况下会发生死锁","children":[]},{"level":3,"title":"如何避免死锁？","slug":"如何避免死锁","link":"#如何避免死锁","children":[]},{"level":3,"title":"如何解决死锁？","slug":"如何解决死锁","link":"#如何解决死锁","children":[]}]},{"level":2,"title":"HA","slug":"ha","link":"#ha","children":[]},{"level":2,"title":"优化","slug":"优化","link":"#优化","children":[{"level":3,"title":"哪种 count 性能最好？","slug":"哪种-count-性能最好","link":"#哪种-count-性能最好","children":[]},{"level":3,"title":"什么时候使用 EXISTS，什么时候使用 IN？","slug":"什么时候使用-exists-什么时候使用-in","link":"#什么时候使用-exists-什么时候使用-in","children":[]},{"level":3,"title":"为什么这些 SQL 语句逻辑相同，性能却差异巨大？","slug":"为什么这些-sql-语句逻辑相同-性能却差异巨大","link":"#为什么这些-sql-语句逻辑相同-性能却差异巨大","children":[]},{"level":3,"title":"为什么我只查一行的语句，也执行这么慢？","slug":"为什么我只查一行的语句-也执行这么慢","link":"#为什么我只查一行的语句-也执行这么慢","children":[]},{"level":3,"title":"MySQL 有哪些“饮鸩止渴”提高性能的方法？","slug":"mysql-有哪些-饮鸩止渴-提高性能的方法","link":"#mysql-有哪些-饮鸩止渴-提高性能的方法","children":[]},{"level":3,"title":"慢查询性能问题","slug":"慢查询性能问题","link":"#慢查询性能问题","children":[]},{"level":3,"title":"QPS 突增问题","slug":"qps-突增问题","link":"#qps-突增问题","children":[]},{"level":3,"title":"join 语句如何优化","slug":"join-语句如何优化","link":"#join-语句如何优化","children":[]},{"level":3,"title":"我查了这么多数据会不会把数据库内存打爆","slug":"我查了这么多数据会不会把数据库内存打爆","link":"#我查了这么多数据会不会把数据库内存打爆","children":[]}]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[{"level":3,"title":"为什么临时表可以重名","slug":"为什么临时表可以重名","link":"#为什么临时表可以重名","children":[]},{"level":3,"title":"自增主键为什么不是连续的","slug":"自增主键为什么不是连续的","link":"#自增主键为什么不是连续的","children":[]},{"level":3,"title":"自增 ID 不够用了怎么办？","slug":"自增-id-不够用了怎么办","link":"#自增-id-不够用了怎么办","children":[]},{"level":3,"title":"grant 之后为什么要跟着 flush privilege","slug":"grant-之后为什么要跟着-flush-privilege","link":"#grant-之后为什么要跟着-flush-privilege","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1695308094000,"updatedTime":1698189909000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":8}]},"readingTime":{"minutes":45.09,"words":13528},"filePathRelative":"12.数据库/03.关系型数据库/02.Mysql/99.Mysql面试.md","localizedDate":"2020年9月12日","excerpt":"<h1> Mysql 面试</h1>\\n<h2> 架构</h2>\\n<h3> 一条 SQL 查询语句是如何执行的？</h3>\\n<figure><img src=\\"https://raw.githubusercontent.com/dunwu/images/master/snap/202310080719676.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<ol>\\n<li><strong>连接器</strong>：连接器负责跟客户端建立连接、获取权限、维持和管理连接。</li>\\n<li><strong>查询缓存</strong>：命中缓存，则直接返回结果。弊大于利，因为失效非常频繁——任何更新都会清空查询缓存。</li>\\n<li><strong>分析器</strong>\\n<ul>\\n<li><strong>词法分析</strong>：解析 SQL 关键字</li>\\n<li><strong>语法分析</strong>：生成一颗对应的语法解析树</li>\\n</ul>\\n</li>\\n<li><strong>优化器</strong>\\n<ul>\\n<li>根据语法树<strong>生成多种执行计划</strong></li>\\n<li><strong>索引选择</strong>：根据策略选择最优方式</li>\\n</ul>\\n</li>\\n<li><strong>执行器</strong>\\n<ul>\\n<li>校验读写权限</li>\\n<li>根据执行计划，调用存储引擎的 API 来执行查询</li>\\n</ul>\\n</li>\\n<li><strong>存储引擎</strong>：存储数据，提供读写接口</li>\\n</ol>","autoDesc":true}');export{l as data};
