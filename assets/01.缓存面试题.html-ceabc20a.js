const e=JSON.parse('{"key":"v-69245fe9","path":"/01.Java/14.%E4%B8%AD%E9%97%B4%E4%BB%B6/02.%E7%BC%93%E5%AD%98/01.%E7%BC%93%E5%AD%98%E9%9D%A2%E8%AF%95%E9%A2%98.html","title":"缓存夺命连环问","lang":"zh-CN","frontmatter":{"title":"缓存夺命连环问","date":"2022-02-17T22:34:30.000Z","order":1,"category":["Java","中间件","缓存"],"tag":["Java","中间件","缓存","面试"],"description":"缓存夺命连环问 为什么要用缓存？ 用缓存，主要有两个用途：高性能、高并发。 高性能 假设这么个场景，你有个操作，一个请求过来，吭哧吭哧你各种乱七八糟操作 mysql，半天查出来一个结果，耗时 600ms。但是这个结果可能接下来几个小时都不会变了，或者变了也可以不用立即反馈给用户。那么此时咋办？ 缓存啊，折腾 600ms 查出来的结果，扔缓存里，一个 key 对应一个 value，下次再有人查，别走 mysql 折腾 600ms 了，直接从缓存里，通过一个 key 查出来一个 value，2ms 搞定。性能提升 300 倍。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/01.Java/14.%E4%B8%AD%E9%97%B4%E4%BB%B6/02.%E7%BC%93%E5%AD%98/01.%E7%BC%93%E5%AD%98%E9%9D%A2%E8%AF%95%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"缓存夺命连环问"}],["meta",{"property":"og:description","content":"缓存夺命连环问 为什么要用缓存？ 用缓存，主要有两个用途：高性能、高并发。 高性能 假设这么个场景，你有个操作，一个请求过来，吭哧吭哧你各种乱七八糟操作 mysql，半天查出来一个结果，耗时 600ms。但是这个结果可能接下来几个小时都不会变了，或者变了也可以不用立即反馈给用户。那么此时咋办？ 缓存啊，折腾 600ms 查出来的结果，扔缓存里，一个 key 对应一个 value，下次再有人查，别走 mysql 折腾 600ms 了，直接从缓存里，通过一个 key 查出来一个 value，2ms 搞定。性能提升 300 倍。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T15:44:18.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:tag","content":"缓存"}],["meta",{"property":"article:tag","content":"面试"}],["meta",{"property":"article:published_time","content":"2022-02-17T22:34:30.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T15:44:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"缓存夺命连环问\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-02-17T22:34:30.000Z\\",\\"dateModified\\":\\"2023-09-11T15:44:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"为什么要用缓存？","slug":"为什么要用缓存","link":"#为什么要用缓存","children":[{"level":3,"title":"高性能","slug":"高性能","link":"#高性能","children":[]},{"level":3,"title":"高并发","slug":"高并发","link":"#高并发","children":[]}]},{"level":2,"title":"用了缓存之后会有什么不良后果？","slug":"用了缓存之后会有什么不良后果","link":"#用了缓存之后会有什么不良后果","children":[]},{"level":2,"title":"redis 和 memcached 有啥区别？","slug":"redis-和-memcached-有啥区别","link":"#redis-和-memcached-有啥区别","children":[]},{"level":2,"title":"为啥 redis 单线程模型也能效率这么高？","slug":"为啥-redis-单线程模型也能效率这么高","link":"#为啥-redis-单线程模型也能效率这么高","children":[{"level":3,"title":"redis 的线程模型","slug":"redis-的线程模型","link":"#redis-的线程模型","children":[]},{"level":3,"title":"为啥 redis 单线程模型也能效率这么高?","slug":"为啥-redis-单线程模型也能效率这么高-1","link":"#为啥-redis-单线程模型也能效率这么高-1","children":[]}]},{"level":2,"title":"Redis 有哪些数据类型","slug":"redis-有哪些数据类型","link":"#redis-有哪些数据类型","children":[{"level":3,"title":"string","slug":"string","link":"#string","children":[]},{"level":3,"title":"hash","slug":"hash","link":"#hash","children":[]},{"level":3,"title":"list","slug":"list","link":"#list","children":[]},{"level":3,"title":"set","slug":"set","link":"#set","children":[]},{"level":3,"title":"sorted set","slug":"sorted-set","link":"#sorted-set","children":[]}]},{"level":2,"title":"如何保证 redis 的高并发和高可用？redis 的主从复制原理能介绍一下么？redis 的哨兵原理能介绍一下么？","slug":"如何保证-redis-的高并发和高可用-redis-的主从复制原理能介绍一下么-redis-的哨兵原理能介绍一下么","link":"#如何保证-redis-的高并发和高可用-redis-的主从复制原理能介绍一下么-redis-的哨兵原理能介绍一下么","children":[]},{"level":2,"title":"redis 的过期策略都有哪些？内存淘汰机制都有哪些？手写一下 LRU 代码实现？","slug":"redis-的过期策略都有哪些-内存淘汰机制都有哪些-手写一下-lru-代码实现","link":"#redis-的过期策略都有哪些-内存淘汰机制都有哪些-手写一下-lru-代码实现","children":[{"level":3,"title":"redis 过期策略","slug":"redis-过期策略","link":"#redis-过期策略","children":[]},{"level":3,"title":"内存淘汰机制","slug":"内存淘汰机制","link":"#内存淘汰机制","children":[]},{"level":3,"title":"手写一个 LRU 算法","slug":"手写一个-lru-算法","link":"#手写一个-lru-算法","children":[]}]},{"level":2,"title":"redis 集群模式的工作原理能说一下么？在集群模式下，redis 的 key 是如何寻址的？分布式寻址都有哪些算法？了解一致性 hash 算法吗？","slug":"redis-集群模式的工作原理能说一下么-在集群模式下-redis-的-key-是如何寻址的-分布式寻址都有哪些算法-了解一致性-hash-算法吗","link":"#redis-集群模式的工作原理能说一下么-在集群模式下-redis-的-key-是如何寻址的-分布式寻址都有哪些算法-了解一致性-hash-算法吗","children":[{"level":3,"title":"面试题剖析","slug":"面试题剖析","link":"#面试题剖析","children":[]},{"level":3,"title":"redis cluster 介绍","slug":"redis-cluster-介绍","link":"#redis-cluster-介绍","children":[]},{"level":3,"title":"节点间的内部通信机制","slug":"节点间的内部通信机制","link":"#节点间的内部通信机制","children":[]},{"level":3,"title":"分布式寻址算法","slug":"分布式寻址算法","link":"#分布式寻址算法","children":[]},{"level":3,"title":"redis cluster 的高可用与主备切换原理","slug":"redis-cluster-的高可用与主备切换原理","link":"#redis-cluster-的高可用与主备切换原理","children":[]}]},{"level":2,"title":"如何保证缓存与数据库的双写一致性？","slug":"如何保证缓存与数据库的双写一致性","link":"#如何保证缓存与数据库的双写一致性","children":[{"level":3,"title":"Cache Aside Pattern","slug":"cache-aside-pattern","link":"#cache-aside-pattern","children":[]},{"level":3,"title":"最初级的缓存不一致问题及解决方案","slug":"最初级的缓存不一致问题及解决方案","link":"#最初级的缓存不一致问题及解决方案","children":[]},{"level":3,"title":"比较复杂的数据不一致问题分析","slug":"比较复杂的数据不一致问题分析","link":"#比较复杂的数据不一致问题分析","children":[]}]},{"level":2,"title":"了解什么是 redis 的雪崩、穿透和击穿？redis 崩溃之后会怎么样？系统该如何应对这种情况？如何处理 redis 的穿透？","slug":"了解什么是-redis-的雪崩、穿透和击穿-redis-崩溃之后会怎么样-系统该如何应对这种情况-如何处理-redis-的穿透","link":"#了解什么是-redis-的雪崩、穿透和击穿-redis-崩溃之后会怎么样-系统该如何应对这种情况-如何处理-redis-的穿透","children":[{"level":3,"title":"缓存雪崩","slug":"缓存雪崩","link":"#缓存雪崩","children":[]},{"level":3,"title":"缓存穿透","slug":"缓存穿透","link":"#缓存穿透","children":[]},{"level":3,"title":"缓存击穿","slug":"缓存击穿","link":"#缓存击穿","children":[]}]},{"level":2,"title":"redis 的并发竞争问题是什么？如何解决这个问题？了解 redis 事务的 CAS 方案吗？","slug":"redis-的并发竞争问题是什么-如何解决这个问题-了解-redis-事务的-cas-方案吗","link":"#redis-的并发竞争问题是什么-如何解决这个问题-了解-redis-事务的-cas-方案吗","children":[]},{"level":2,"title":"生产环境中的 redis 是怎么部署的？","slug":"生产环境中的-redis-是怎么部署的","link":"#生产环境中的-redis-是怎么部署的","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1694447058000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":35.91,"words":10772},"filePathRelative":"01.Java/14.中间件/02.缓存/01.缓存面试题.md","localizedDate":"2022年2月17日","excerpt":"<h1> 缓存夺命连环问</h1>\\n<h2> 为什么要用缓存？</h2>\\n<p>用缓存，主要有两个用途：<strong>高性能</strong>、<strong>高并发</strong>。</p>\\n<h3> 高性能</h3>\\n<p>假设这么个场景，你有个操作，一个请求过来，吭哧吭哧你各种乱七八糟操作 mysql，半天查出来一个结果，耗时 600ms。但是这个结果可能接下来几个小时都不会变了，或者变了也可以不用立即反馈给用户。那么此时咋办？</p>\\n<p>缓存啊，折腾 600ms 查出来的结果，扔缓存里，一个 key 对应一个 value，下次再有人查，别走 mysql 折腾 600ms 了，直接从缓存里，通过一个 key 查出来一个 value，2ms 搞定。性能提升 300 倍。</p>","autoDesc":true}');export{e as data};
