const e=JSON.parse('{"key":"v-2e81d248","path":"/pages/59f078/","title":"Java 进程内缓存","lang":"zh-CN","frontmatter":{"title":"Java 进程内缓存","date":"2022-02-17T22:34:30.000Z","category":["Java","中间件","缓存"],"tag":["Java","中间件","缓存"],"permalink":"/pages/59f078/","description":"Java 进程内缓存 关键词：ConcurrentHashMap、LRUHashMap、Guava Cache、Caffeine、Ehcache 一、ConcurrentHashMap 最简单的进程内缓存可以通过 JDK 自带的 HashMap 或 ConcurrentHashMap 实现。 适用场景：不需要淘汰的缓存数据。 缺点：无法进行缓存淘汰，内存会无限制的增长。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/59f078/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Java 进程内缓存"}],["meta",{"property":"og:description","content":"Java 进程内缓存 关键词：ConcurrentHashMap、LRUHashMap、Guava Cache、Caffeine、Ehcache 一、ConcurrentHashMap 最简单的进程内缓存可以通过 JDK 自带的 HashMap 或 ConcurrentHashMap 实现。 适用场景：不需要淘汰的缓存数据。 缺点：无法进行缓存淘汰，内存会无限制的增长。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T10:35:58.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:tag","content":"缓存"}],["meta",{"property":"article:published_time","content":"2022-02-17T22:34:30.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T10:35:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 进程内缓存\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-02-17T22:34:30.000Z\\",\\"dateModified\\":\\"2023-09-10T10:35:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"一、ConcurrentHashMap","slug":"一、concurrenthashmap","link":"#一、concurrenthashmap","children":[]},{"level":2,"title":"二、LRUHashMap","slug":"二、lruhashmap","link":"#二、lruhashmap","children":[]},{"level":2,"title":"三、Guava Cache","slug":"三、guava-cache","link":"#三、guava-cache","children":[{"level":3,"title":"Guava Cache 缓存回收","slug":"guava-cache-缓存回收","link":"#guava-cache-缓存回收","children":[]},{"level":3,"title":"基于容量回收","slug":"基于容量回收","link":"#基于容量回收","children":[]},{"level":3,"title":"基于定时回收","slug":"基于定时回收","link":"#基于定时回收","children":[]},{"level":3,"title":"基于引用回收","slug":"基于引用回收","link":"#基于引用回收","children":[]},{"level":3,"title":"Guava Cache 核心 API","slug":"guava-cache-核心-api","link":"#guava-cache-核心-api","children":[]}]},{"level":2,"title":"四、Caffeine","slug":"四、caffeine","link":"#四、caffeine","children":[]},{"level":2,"title":"五、Ehcache","slug":"五、ehcache","link":"#五、ehcache","children":[]},{"level":2,"title":"六、进程内缓存对比","slug":"六、进程内缓存对比","link":"#六、进程内缓存对比","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694342158000,"updatedTime":1694342158000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":6.11,"words":1832},"filePathRelative":"01.Java/14.中间件/02.缓存/05.Java进程内缓存.md","localizedDate":"2022年2月17日","excerpt":"<h1> Java 进程内缓存</h1>\\n<blockquote>\\n<p>关键词：ConcurrentHashMap、LRUHashMap、Guava Cache、Caffeine、Ehcache</p>\\n</blockquote>\\n<h2> 一、ConcurrentHashMap</h2>\\n<p>最简单的进程内缓存可以通过 JDK 自带的 <code>HashMap</code> 或 <code>ConcurrentHashMap</code> 实现。</p>\\n<p>适用场景：<strong>不需要淘汰的缓存数据</strong>。</p>\\n<p>缺点：无法进行缓存淘汰，内存会无限制的增长。</p>","autoDesc":true}');export{e as data};
