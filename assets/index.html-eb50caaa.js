const e=JSON.parse('{"key":"v-b76419a2","path":"/pages/40ac64/","title":"分布式锁基本原理","lang":"zh-CN","frontmatter":{"title":"分布式锁基本原理","date":"2019-06-04T23:42:00.000Z","category":["分布式","分布式协同","分布式协同综合"],"tag":["分布式","数据调度","锁"],"permalink":"/pages/40ac64/","description":"分布式锁基本原理 在并发场景下，为了保证并发安全，我们常常要通过互斥（加锁）手段来保证数据同步安全。 JDK 虽然提供了大量锁工具，但是只能作用于单一 Java 进程，无法应用于分布式系统。为了解决这个问题，需要使用分布式锁。 分布式锁的解决方案大致有以下几种： 基于数据库实现 基于缓存（redis，memcached 等）实现 基于 Zookeeper 实现 ✅ 注：推荐基于 ZooKeeper 实现分布式锁，具体原因看完本文即可明了。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/40ac64/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"分布式锁基本原理"}],["meta",{"property":"og:description","content":"分布式锁基本原理 在并发场景下，为了保证并发安全，我们常常要通过互斥（加锁）手段来保证数据同步安全。 JDK 虽然提供了大量锁工具，但是只能作用于单一 Java 进程，无法应用于分布式系统。为了解决这个问题，需要使用分布式锁。 分布式锁的解决方案大致有以下几种： 基于数据库实现 基于缓存（redis，memcached 等）实现 基于 Zookeeper 实现 ✅ 注：推荐基于 ZooKeeper 实现分布式锁，具体原因看完本文即可明了。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T13:36:40.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"数据调度"}],["meta",{"property":"article:tag","content":"锁"}],["meta",{"property":"article:published_time","content":"2019-06-04T23:42:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T13:36:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式锁基本原理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-04T23:42:00.000Z\\",\\"dateModified\\":\\"2023-09-10T13:36:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"分布式锁思路","slug":"分布式锁思路","link":"#分布式锁思路","children":[]},{"level":2,"title":"数据库分布式锁","slug":"数据库分布式锁","link":"#数据库分布式锁","children":[{"level":3,"title":"数据库分布式锁原理","slug":"数据库分布式锁原理","link":"#数据库分布式锁原理","children":[]},{"level":3,"title":"数据库分布式锁问题","slug":"数据库分布式锁问题","link":"#数据库分布式锁问题","children":[]},{"level":3,"title":"数据库分布式锁小结","slug":"数据库分布式锁小结","link":"#数据库分布式锁小结","children":[]}]},{"level":2,"title":"Redis 分布式锁","slug":"redis-分布式锁","link":"#redis-分布式锁","children":[{"level":3,"title":"Redis 分布式锁原理","slug":"redis-分布式锁原理","link":"#redis-分布式锁原理","children":[]},{"level":3,"title":"Redis 分布式锁实现","slug":"redis-分布式锁实现","link":"#redis-分布式锁实现","children":[]},{"level":3,"title":"数据库分布式锁小结","slug":"数据库分布式锁小结-1","link":"#数据库分布式锁小结-1","children":[]},{"level":3,"title":"RedLock 算法","slug":"redlock-算法","link":"#redlock-算法","children":[]}]},{"level":2,"title":"ZooKeeper 分布式锁","slug":"zookeeper-分布式锁","link":"#zookeeper-分布式锁","children":[{"level":3,"title":"ZooKeeper 分布式锁原理","slug":"zookeeper-分布式锁原理","link":"#zookeeper-分布式锁原理","children":[]},{"level":3,"title":"ZooKeeper 分布式锁实现","slug":"zookeeper-分布式锁实现","link":"#zookeeper-分布式锁实现","children":[]},{"level":3,"title":"ZooKeeper 分布式锁小结","slug":"zookeeper-分布式锁小结","link":"#zookeeper-分布式锁小结","children":[]}]},{"level":2,"title":"分布式锁方案对比","slug":"分布式锁方案对比","link":"#分布式锁方案对比","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694353000000,"updatedTime":1694353000000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":12.79,"words":3838},"filePathRelative":"15.分布式/11.分布式协同/01.分布式协同综合/06.分布式锁.md","localizedDate":"2019年6月4日","excerpt":"<h1> 分布式锁基本原理</h1>\\n<blockquote>\\n<p>在并发场景下，为了保证并发安全，我们常常要通过互斥（加锁）手段来保证数据同步安全。</p>\\n<p>JDK 虽然提供了大量锁工具，但是只能作用于单一 Java 进程，无法应用于分布式系统。为了解决这个问题，需要使用分布式锁。</p>\\n<p>分布式锁的解决方案大致有以下几种：</p>\\n<ul>\\n<li>基于数据库实现</li>\\n<li>基于缓存（redis，memcached 等）实现</li>\\n<li>基于 Zookeeper 实现 ✅</li>\\n</ul>\\n<p>注：推荐基于 ZooKeeper 实现分布式锁，具体原因看完本文即可明了。</p>\\n</blockquote>","autoDesc":true}');export{e as data};
