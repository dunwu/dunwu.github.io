const l=JSON.parse('{"key":"v-5a2d48af","path":"/99.%E7%AC%94%E8%AE%B0/12.%E6%95%B0%E6%8D%AE%E5%BA%93/03.MySQL%E5%AE%9E%E6%88%9845%E8%AE%B2.html","title":"《MySQL 实战 45 讲》笔记","lang":"zh-CN","frontmatter":{"title":"《MySQL 实战 45 讲》笔记","date":"2022-07-20T19:20:08.000Z","order":3,"category":["笔记","数据库"],"tag":["数据库","Mysql"],"description":"《MySQL 实战 45 讲》笔记 基础架构：一条 SQL 查询语句是如何执行的？ 连接器：连接器负责跟客户端建立连接、获取权限、维持和管理连接。 查询缓存：命中缓存，则直接返回结果。弊大于利，因为失效非常频繁——任何更新都会清空查询缓存。 分析器 词法分析：解析 SQL 关键字 语法分析：生成一颗对应的语法解析树 优化器 根据语法树生成多种执行计划 索引选择：根据策略选择最优方式 执行器 校验读写权限 根据执行计划，调用存储引擎的 API 来执行查询 存储引擎：存储数据，提供读写接口","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/99.%E7%AC%94%E8%AE%B0/12.%E6%95%B0%E6%8D%AE%E5%BA%93/03.MySQL%E5%AE%9E%E6%88%9845%E8%AE%B2.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"《MySQL 实战 45 讲》笔记"}],["meta",{"property":"og:description","content":"《MySQL 实战 45 讲》笔记 基础架构：一条 SQL 查询语句是如何执行的？ 连接器：连接器负责跟客户端建立连接、获取权限、维持和管理连接。 查询缓存：命中缓存，则直接返回结果。弊大于利，因为失效非常频繁——任何更新都会清空查询缓存。 分析器 词法分析：解析 SQL 关键字 语法分析：生成一颗对应的语法解析树 优化器 根据语法树生成多种执行计划 索引选择：根据策略选择最优方式 执行器 校验读写权限 根据执行计划，调用存储引擎的 API 来执行查询 存储引擎：存储数据，提供读写接口"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-24T23:58:37.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"Mysql"}],["meta",{"property":"article:published_time","content":"2022-07-20T19:20:08.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-24T23:58:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《MySQL 实战 45 讲》笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-20T19:20:08.000Z\\",\\"dateModified\\":\\"2024-01-24T23:58:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"基础架构：一条 SQL 查询语句是如何执行的？","slug":"基础架构-一条-sql-查询语句是如何执行的","link":"#基础架构-一条-sql-查询语句是如何执行的","children":[]},{"level":2,"title":"日志系统：一条 SQL 更新语句是如何执行的？","slug":"日志系统-一条-sql-更新语句是如何执行的","link":"#日志系统-一条-sql-更新语句是如何执行的","children":[{"level":3,"title":"redo log","slug":"redo-log","link":"#redo-log","children":[]},{"level":3,"title":"binlog","slug":"binlog","link":"#binlog","children":[]},{"level":3,"title":"两阶段提交","slug":"两阶段提交","link":"#两阶段提交","children":[]}]},{"level":2,"title":"事务隔离：为什么你改了我还看不见？","slug":"事务隔离-为什么你改了我还看不见","link":"#事务隔离-为什么你改了我还看不见","children":[]},{"level":2,"title":"深入浅出索引","slug":"深入浅出索引","link":"#深入浅出索引","children":[{"level":3,"title":"索引数据结构","slug":"索引数据结构","link":"#索引数据结构","children":[]},{"level":3,"title":"索引策略","slug":"索引策略","link":"#索引策略","children":[]}]},{"level":2,"title":"全局锁和表锁 ：给表加个字段怎么有这么多阻碍？","slug":"全局锁和表锁-给表加个字段怎么有这么多阻碍","link":"#全局锁和表锁-给表加个字段怎么有这么多阻碍","children":[]},{"level":2,"title":"行锁功过：怎么减少行锁对性能的影响？","slug":"行锁功过-怎么减少行锁对性能的影响","link":"#行锁功过-怎么减少行锁对性能的影响","children":[{"level":3,"title":"死锁和死锁检测","slug":"死锁和死锁检测","link":"#死锁和死锁检测","children":[]}]},{"level":2,"title":"事务到底是隔离的还是不隔离的","slug":"事务到底是隔离的还是不隔离的","link":"#事务到底是隔离的还是不隔离的","children":[{"level":3,"title":"“快照”在 MVCC 里是怎么工作的？","slug":"快照-在-mvcc-里是怎么工作的","link":"#快照-在-mvcc-里是怎么工作的","children":[]},{"level":3,"title":"更新逻辑","slug":"更新逻辑","link":"#更新逻辑","children":[]}]},{"level":2,"title":"普通索引和唯一索引，应该怎么选择？","slug":"普通索引和唯一索引-应该怎么选择","link":"#普通索引和唯一索引-应该怎么选择","children":[{"level":3,"title":"change buffer 的使用场景","slug":"change-buffer-的使用场景","link":"#change-buffer-的使用场景","children":[]},{"level":3,"title":"索引选择和实践","slug":"索引选择和实践","link":"#索引选择和实践","children":[]},{"level":3,"title":"change buffer 和 redo log","slug":"change-buffer-和-redo-log","link":"#change-buffer-和-redo-log","children":[]}]},{"level":2,"title":"MySQL 为什么有时候会选错索引","slug":"mysql-为什么有时候会选错索引","link":"#mysql-为什么有时候会选错索引","children":[]},{"level":2,"title":"怎么给字符串字段加索引？","slug":"怎么给字符串字段加索引","link":"#怎么给字符串字段加索引","children":[]},{"level":2,"title":"为什么我的 MySQL 会“抖”一下？","slug":"为什么我的-mysql-会-抖-一下","link":"#为什么我的-mysql-会-抖-一下","children":[]},{"level":2,"title":"为什么表数据删掉一半，表文件大小不变？","slug":"为什么表数据删掉一半-表文件大小不变","link":"#为什么表数据删掉一半-表文件大小不变","children":[{"level":3,"title":"重建表","slug":"重建表","link":"#重建表","children":[]}]},{"level":2,"title":"count(*)这么慢，我该怎么办？","slug":"count-这么慢-我该怎么办","link":"#count-这么慢-我该怎么办","children":[{"level":3,"title":"保存计数","slug":"保存计数","link":"#保存计数","children":[]},{"level":3,"title":"不同的 count 用法","slug":"不同的-count-用法","link":"#不同的-count-用法","children":[]}]},{"level":2,"title":"order by 是怎么工作的？","slug":"order-by-是怎么工作的","link":"#order-by-是怎么工作的","children":[{"level":3,"title":"全字段排序","slug":"全字段排序","link":"#全字段排序","children":[]},{"level":3,"title":"rowid 排序","slug":"rowid-排序","link":"#rowid-排序","children":[]},{"level":3,"title":"全字段排序 VS rowid 排序","slug":"全字段排序-vs-rowid-排序","link":"#全字段排序-vs-rowid-排序","children":[]}]},{"level":2,"title":"为什么这些 SQL 语句逻辑相同，性能却差异巨大？","slug":"为什么这些-sql-语句逻辑相同-性能却差异巨大","link":"#为什么这些-sql-语句逻辑相同-性能却差异巨大","children":[{"level":3,"title":"函数操作会破坏索引有序性","slug":"函数操作会破坏索引有序性","link":"#函数操作会破坏索引有序性","children":[]},{"level":3,"title":"隐式转换","slug":"隐式转换","link":"#隐式转换","children":[]},{"level":3,"title":"隐式字符编码转换","slug":"隐式字符编码转换","link":"#隐式字符编码转换","children":[]}]},{"level":2,"title":"为什么我只查一行的语句，也执行这么慢？","slug":"为什么我只查一行的语句-也执行这么慢","link":"#为什么我只查一行的语句-也执行这么慢","children":[{"level":3,"title":"查询长时间不返回","slug":"查询长时间不返回","link":"#查询长时间不返回","children":[]}]},{"level":2,"title":"幻读是什么，幻读有什么问题？","slug":"幻读是什么-幻读有什么问题","link":"#幻读是什么-幻读有什么问题","children":[{"level":3,"title":"幻读是什么","slug":"幻读是什么","link":"#幻读是什么","children":[]},{"level":3,"title":"幻读有什么问题","slug":"幻读有什么问题","link":"#幻读有什么问题","children":[]},{"level":3,"title":"如何解决幻读","slug":"如何解决幻读","link":"#如何解决幻读","children":[]}]},{"level":2,"title":"为什么我只改一行的语句，锁这么多？","slug":"为什么我只改一行的语句-锁这么多","link":"#为什么我只改一行的语句-锁这么多","children":[]},{"level":2,"title":"MySQL 有哪些“饮鸩止渴”提高性能的方法？","slug":"mysql-有哪些-饮鸩止渴-提高性能的方法","link":"#mysql-有哪些-饮鸩止渴-提高性能的方法","children":[{"level":3,"title":"慢查询性能问题","slug":"慢查询性能问题","link":"#慢查询性能问题","children":[]},{"level":3,"title":"QPS 突增问题","slug":"qps-突增问题","link":"#qps-突增问题","children":[]}]},{"level":2,"title":"Mysql 是怎么保证数据不丢的","slug":"mysql-是怎么保证数据不丢的","link":"#mysql-是怎么保证数据不丢的","children":[{"level":3,"title":"binlog 的写入机制","slug":"binlog-的写入机制","link":"#binlog-的写入机制","children":[]},{"level":3,"title":"redo log 的写入机制","slug":"redo-log-的写入机制","link":"#redo-log-的写入机制","children":[]},{"level":3,"title":"如果 MySQL 出现了 IO 性能瓶颈，可以通过哪些方法来提升性能","slug":"如果-mysql-出现了-io-性能瓶颈-可以通过哪些方法来提升性能","link":"#如果-mysql-出现了-io-性能瓶颈-可以通过哪些方法来提升性能","children":[]}]},{"level":2,"title":"Mysql 是怎么保证主备一致的","slug":"mysql-是怎么保证主备一致的","link":"#mysql-是怎么保证主备一致的","children":[{"level":3,"title":"MySQL 主备的基本原理","slug":"mysql-主备的基本原理","link":"#mysql-主备的基本原理","children":[]},{"level":3,"title":"binlog 三种格式对比","slug":"binlog-三种格式对比","link":"#binlog-三种格式对比","children":[]},{"level":3,"title":"循环复制问题","slug":"循环复制问题","link":"#循环复制问题","children":[]}]},{"level":2,"title":"Mysql 是怎么保证高可用的","slug":"mysql-是怎么保证高可用的","link":"#mysql-是怎么保证高可用的","children":[{"level":3,"title":"主备延迟","slug":"主备延迟","link":"#主备延迟","children":[]},{"level":3,"title":"主备延迟的来源","slug":"主备延迟的来源","link":"#主备延迟的来源","children":[]},{"level":3,"title":"可靠性优先策略","slug":"可靠性优先策略","link":"#可靠性优先策略","children":[]},{"level":3,"title":"可用性优先策略","slug":"可用性优先策略","link":"#可用性优先策略","children":[]}]},{"level":2,"title":"备库为什么会延迟好几个小时","slug":"备库为什么会延迟好几个小时","link":"#备库为什么会延迟好几个小时","children":[{"level":3,"title":"按表分发策略","slug":"按表分发策略","link":"#按表分发策略","children":[]},{"level":3,"title":"按行分发策略","slug":"按行分发策略","link":"#按行分发策略","children":[]},{"level":3,"title":"MySQL 5.6 版本的并行复制策略","slug":"mysql-5-6-版本的并行复制策略","link":"#mysql-5-6-版本的并行复制策略","children":[]},{"level":3,"title":"MariaDB 的并行复制策略","slug":"mariadb-的并行复制策略","link":"#mariadb-的并行复制策略","children":[]},{"level":3,"title":"MySQL 5.7 的并行复制策略","slug":"mysql-5-7-的并行复制策略","link":"#mysql-5-7-的并行复制策略","children":[]}]},{"level":2,"title":"主库出问题了，从库怎么办？","slug":"主库出问题了-从库怎么办","link":"#主库出问题了-从库怎么办","children":[{"level":3,"title":"基于位点的主备切换","slug":"基于位点的主备切换","link":"#基于位点的主备切换","children":[]},{"level":3,"title":"GTID","slug":"gtid","link":"#gtid","children":[]}]},{"level":2,"title":"读写分离有哪些坑","slug":"读写分离有哪些坑","link":"#读写分离有哪些坑","children":[{"level":3,"title":"强制走主库方案","slug":"强制走主库方案","link":"#强制走主库方案","children":[]},{"level":3,"title":"Sleep 方案","slug":"sleep-方案","link":"#sleep-方案","children":[]},{"level":3,"title":"判断主备无延迟方案","slug":"判断主备无延迟方案","link":"#判断主备无延迟方案","children":[]},{"level":3,"title":"配合 semi-sync","slug":"配合-semi-sync","link":"#配合-semi-sync","children":[]},{"level":3,"title":"等主库位点方案","slug":"等主库位点方案","link":"#等主库位点方案","children":[]},{"level":3,"title":"GTID 方案","slug":"gtid-方案","link":"#gtid-方案","children":[]}]},{"level":2,"title":"如何判断一个数据库是不是出问题了","slug":"如何判断一个数据库是不是出问题了","link":"#如何判断一个数据库是不是出问题了","children":[{"level":3,"title":"select 1 判断","slug":"select-1-判断","link":"#select-1-判断","children":[]},{"level":3,"title":"查表判断","slug":"查表判断","link":"#查表判断","children":[]},{"level":3,"title":"更新判断","slug":"更新判断","link":"#更新判断","children":[]},{"level":3,"title":"内部统计","slug":"内部统计","link":"#内部统计","children":[]}]},{"level":2,"title":"答疑文章（二）：用动态的观点看加锁","slug":"答疑文章-二-用动态的观点看加锁","link":"#答疑文章-二-用动态的观点看加锁","children":[]},{"level":2,"title":"误删数据后除了跑路还能怎么办？","slug":"误删数据后除了跑路还能怎么办","link":"#误删数据后除了跑路还能怎么办","children":[{"level":3,"title":"误删行","slug":"误删行","link":"#误删行","children":[]},{"level":3,"title":"误删库 / 表","slug":"误删库-表","link":"#误删库-表","children":[]},{"level":3,"title":"rm 删除数据","slug":"rm-删除数据","link":"#rm-删除数据","children":[]}]},{"level":2,"title":"为什么还有 kill 不掉的语句","slug":"为什么还有-kill-不掉的语句","link":"#为什么还有-kill-不掉的语句","children":[{"level":3,"title":"收到 kill 以后，线程做什么？","slug":"收到-kill-以后-线程做什么","link":"#收到-kill-以后-线程做什么","children":[]},{"level":3,"title":"关于客户端的误解","slug":"关于客户端的误解","link":"#关于客户端的误解","children":[]}]},{"level":2,"title":"我查了这么多数据会不会把数据库内存打爆","slug":"我查了这么多数据会不会把数据库内存打爆","link":"#我查了这么多数据会不会把数据库内存打爆","children":[{"level":3,"title":"全表扫描对 server 层的影响","slug":"全表扫描对-server-层的影响","link":"#全表扫描对-server-层的影响","children":[]},{"level":3,"title":"全表扫描对 InnoDB 的影响","slug":"全表扫描对-innodb-的影响","link":"#全表扫描对-innodb-的影响","children":[]}]},{"level":2,"title":"到底可不可以使用 join","slug":"到底可不可以使用-join","link":"#到底可不可以使用-join","children":[]},{"level":2,"title":"join 语句如何优化","slug":"join-语句如何优化","link":"#join-语句如何优化","children":[{"level":3,"title":"MRR","slug":"mrr","link":"#mrr","children":[]}]},{"level":2,"title":"为什么临时表可以重名","slug":"为什么临时表可以重名","link":"#为什么临时表可以重名","children":[{"level":3,"title":"临时表的应用","slug":"临时表的应用","link":"#临时表的应用","children":[]}]},{"level":2,"title":"什么时候会使用内部临时表","slug":"什么时候会使用内部临时表","link":"#什么时候会使用内部临时表","children":[]},{"level":2,"title":"都说 InnoDB 好，那还要不要使用 Memory 引擎","slug":"都说-innodb-好-那还要不要使用-memory-引擎","link":"#都说-innodb-好-那还要不要使用-memory-引擎","children":[]},{"level":2,"title":"自增主键为什么不是连续的","slug":"自增主键为什么不是连续的","link":"#自增主键为什么不是连续的","children":[]},{"level":2,"title":"insert 语句的锁为什么这么多","slug":"insert-语句的锁为什么这么多","link":"#insert-语句的锁为什么这么多","children":[]},{"level":2,"title":"怎么最快地复制一张表","slug":"怎么最快地复制一张表","link":"#怎么最快地复制一张表","children":[{"level":3,"title":"mysqldump 方法","slug":"mysqldump-方法","link":"#mysqldump-方法","children":[]},{"level":3,"title":"导出 CSV 文件","slug":"导出-csv-文件","link":"#导出-csv-文件","children":[]},{"level":3,"title":"物理拷贝方法","slug":"物理拷贝方法","link":"#物理拷贝方法","children":[]}]},{"level":2,"title":"grant 之后为什么要跟着 flush privilege","slug":"grant-之后为什么要跟着-flush-privilege","link":"#grant-之后为什么要跟着-flush-privilege","children":[]},{"level":2,"title":"要不要使用分区表","slug":"要不要使用分区表","link":"#要不要使用分区表","children":[]},{"level":2,"title":"自增 ID 用完了怎么办","slug":"自增-id-用完了怎么办","link":"#自增-id-用完了怎么办","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1706140717000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":3}]},"readingTime":{"minutes":72.68,"words":21803},"filePathRelative":"99.笔记/12.数据库/03.MySQL实战45讲.md","localizedDate":"2022年7月20日","excerpt":"<h1> 《MySQL 实战 45 讲》笔记</h1>\\n<h2> 基础架构：一条 SQL 查询语句是如何执行的？</h2>\\n<figure><img src=\\"https://raw.githubusercontent.com/dunwu/images/master/snap/20220720195101.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<ol>\\n<li><strong>连接器</strong>：连接器负责跟客户端建立连接、获取权限、维持和管理连接。</li>\\n<li><strong>查询缓存</strong>：命中缓存，则直接返回结果。弊大于利，因为失效非常频繁——任何更新都会清空查询缓存。</li>\\n<li><strong>分析器</strong>\\n<ul>\\n<li><strong>词法分析</strong>：解析 SQL 关键字</li>\\n<li><strong>语法分析</strong>：生成一颗对应的语法解析树</li>\\n</ul>\\n</li>\\n<li><strong>优化器</strong>\\n<ul>\\n<li>根据语法树<strong>生成多种执行计划</strong></li>\\n<li><strong>索引选择</strong>：根据策略选择最优方式</li>\\n</ul>\\n</li>\\n<li><strong>执行器</strong>\\n<ul>\\n<li>校验读写权限</li>\\n<li>根据执行计划，调用存储引擎的 API 来执行查询</li>\\n</ul>\\n</li>\\n<li><strong>存储引擎</strong>：存储数据，提供读写接口</li>\\n</ol>","autoDesc":true}');export{l as data};
