const e=JSON.parse('{"key":"v-782803cc","path":"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/01.Redis%E9%9D%A2%E8%AF%95.html","title":"Redis 面试","lang":"zh-CN","frontmatter":{"title":"Redis 面试","icon":"logos:redis","date":"2020-07-13T17:03:42.000Z","order":1,"category":["数据库","KV数据库","Redis"],"tag":["数据库","KV数据库","Redis","面试"],"description":"Redis 面试 Redis 简介 什么是 Redis 【问题】 什么是 Redis？ Redis 有什么特性？ Redis 有什么功能？ 【解答】 Redis 是一种内存数据库，对数据的读写操作都是在内存中完成。因此其读写速度非常快，常用于缓存，消息队列、分布式锁等场景。 高性能 – Redis 的数据读写都是在内存中完成，因此性能极高。 高并发 - Redis 的读速度约为 10w+ QPS，写的速度约为 8w+ TPS，将近是 Mysql 的 10 倍。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/01.Redis%E9%9D%A2%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Redis 面试"}],["meta",{"property":"og:description","content":"Redis 面试 Redis 简介 什么是 Redis 【问题】 什么是 Redis？ Redis 有什么特性？ Redis 有什么功能？ 【解答】 Redis 是一种内存数据库，对数据的读写操作都是在内存中完成。因此其读写速度非常快，常用于缓存，消息队列、分布式锁等场景。 高性能 – Redis 的数据读写都是在内存中完成，因此性能极高。 高并发 - Redis 的读速度约为 10w+ QPS，写的速度约为 8w+ TPS，将近是 Mysql 的 10 倍。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-12T23:57:20.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"KV数据库"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:tag","content":"面试"}],["meta",{"property":"article:published_time","content":"2020-07-13T17:03:42.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-12T23:57:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 面试\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-07-13T17:03:42.000Z\\",\\"dateModified\\":\\"2023-09-12T23:57:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Redis 简介","slug":"redis-简介","link":"#redis-简介","children":[{"level":3,"title":"什么是 Redis","slug":"什么是-redis","link":"#什么是-redis","children":[]},{"level":3,"title":"Redis 有哪些应用场景","slug":"redis-有哪些应用场景","link":"#redis-有哪些应用场景","children":[]},{"level":3,"title":"Redis vs. Memcached","slug":"redis-vs-memcached","link":"#redis-vs-memcached","children":[]},{"level":3,"title":"Redis 为什么快","slug":"redis-为什么快","link":"#redis-为什么快","children":[]}]},{"level":2,"title":"Redis 数据类型","slug":"redis-数据类型","link":"#redis-数据类型","children":[{"level":3,"title":"Redis 支持哪些数据类型","slug":"redis-支持哪些数据类型","link":"#redis-支持哪些数据类型","children":[]},{"level":3,"title":"Redis 基本数据类型的底层实现","slug":"redis-基本数据类型的底层实现","link":"#redis-基本数据类型的底层实现","children":[]}]},{"level":2,"title":"Redis 过期删除和内存淘汰","slug":"redis-过期删除和内存淘汰","link":"#redis-过期删除和内存淘汰","children":[{"level":3,"title":"Redis 过期删除策略","slug":"redis-过期删除策略","link":"#redis-过期删除策略","children":[]},{"level":3,"title":"持久化时，对过期键会如何处理","slug":"持久化时-对过期键会如何处理","link":"#持久化时-对过期键会如何处理","children":[]},{"level":3,"title":"主从复制时，对过期键会如何处理","slug":"主从复制时-对过期键会如何处理","link":"#主从复制时-对过期键会如何处理","children":[]},{"level":3,"title":"Redis 内存淘汰策略","slug":"redis-内存淘汰策略","link":"#redis-内存淘汰策略","children":[]}]},{"level":2,"title":"Redis 持久化","slug":"redis-持久化","link":"#redis-持久化","children":[{"level":3,"title":"Redis 如何保证数据不丢失","slug":"redis-如何保证数据不丢失","link":"#redis-如何保证数据不丢失","children":[]},{"level":3,"title":"AOF 的实现原理","slug":"aof-的实现原理","link":"#aof-的实现原理","children":[]},{"level":3,"title":"AOF 的回写策略有几种","slug":"aof-的回写策略有几种","link":"#aof-的回写策略有几种","children":[]},{"level":3,"title":"AOF 重写机制","slug":"aof-重写机制","link":"#aof-重写机制","children":[]},{"level":3,"title":"RDB 的实现原理","slug":"rdb-的实现原理","link":"#rdb-的实现原理","children":[]},{"level":3,"title":"为什么会有混合持久化？","slug":"为什么会有混合持久化","link":"#为什么会有混合持久化","children":[]}]},{"level":2,"title":"Redis 高可用","slug":"redis-高可用","link":"#redis-高可用","children":[{"level":3,"title":"Redis 主从复制","slug":"redis-主从复制","link":"#redis-主从复制","children":[]},{"level":3,"title":"Redis 哨兵","slug":"redis-哨兵","link":"#redis-哨兵","children":[]},{"level":3,"title":"Redis 集群","slug":"redis-集群","link":"#redis-集群","children":[]}]},{"level":2,"title":"Redis 脑裂","slug":"redis-脑裂","link":"#redis-脑裂","children":[{"level":3,"title":"什么是脑裂","slug":"什么是脑裂","link":"#什么是脑裂","children":[]},{"level":3,"title":"Redis 中的脑裂问题是如何产生的","slug":"redis-中的脑裂问题是如何产生的","link":"#redis-中的脑裂问题是如何产生的","children":[]},{"level":3,"title":"如何解决Redis 中的脑裂问题","slug":"如何解决redis-中的脑裂问题","link":"#如何解决redis-中的脑裂问题","children":[]}]},{"level":2,"title":"Redis 线程模型","slug":"redis-线程模型","link":"#redis-线程模型","children":[{"level":3,"title":"Redis 是单线程吗？","slug":"redis-是单线程吗","link":"#redis-是单线程吗","children":[]},{"level":3,"title":"Redis 单线程模式是怎样的？","slug":"redis-单线程模式是怎样的","link":"#redis-单线程模式是怎样的","children":[]},{"level":3,"title":"Redis 采用单线程为什么还这么快？","slug":"redis-采用单线程为什么还这么快","link":"#redis-采用单线程为什么还这么快","children":[]},{"level":3,"title":"Redis 6.0 之前为什么使用单线程？","slug":"redis-6-0-之前为什么使用单线程","link":"#redis-6-0-之前为什么使用单线程","children":[]},{"level":3,"title":"Redis 6.0 之后为什么引入了多线程？","slug":"redis-6-0-之后为什么引入了多线程","link":"#redis-6-0-之后为什么引入了多线程","children":[]}]},{"level":2,"title":"Redis 事务","slug":"redis-事务","link":"#redis-事务","children":[]},{"level":2,"title":"Redis 管道","slug":"redis-管道","link":"#redis-管道","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1694563040000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":36.73,"words":11020},"filePathRelative":"12.数据库/05.KV数据库/01.Redis/01.Redis面试.md","localizedDate":"2020年7月13日","excerpt":"<h1> Redis 面试</h1>\\n<h2> Redis 简介</h2>\\n<h3> 什么是 Redis</h3>\\n<p>【问题】</p>\\n<ul>\\n<li>什么是 Redis？</li>\\n<li>Redis 有什么特性？</li>\\n<li>Redis 有什么功能？</li>\\n</ul>\\n<p>【解答】</p>\\n<p><strong>Redis 是一种内存数据库</strong>，对数据的读写操作都是在内存中完成。因此其<strong>读写速度非常快</strong>，常用于<strong>缓存，消息队列、分布式锁等场景</strong>。</p>\\n<ul>\\n<li><strong>高性能</strong> – Redis 的数据读写都是在内存中完成，因此性能极高。</li>\\n<li><strong>高并发</strong> - Redis 的读速度约为 10w+ QPS，写的速度约为 8w+ TPS，将近是 Mysql 的 10 倍。</li>\\n</ul>","autoDesc":true}');export{e as data};
