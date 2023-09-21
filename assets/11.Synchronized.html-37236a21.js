const e=JSON.parse('{"key":"v-61c06677","path":"/01.Java/01.JavaSE/05.%E5%B9%B6%E5%8F%91/11.Synchronized.html","title":"Synchronized","lang":"zh-CN","frontmatter":{"title":"Synchronized","date":"2020-12-25T18:43:11.000Z","order":11,"category":["Java","JavaSE","并发"],"tag":["Java","JavaSE","并发"],"description":"Synchronized synchronized 的简介 synchronized 是 Java 中的关键字，是 利用锁的机制来实现互斥同步的。 synchronized 可以保证在同一个时刻，只有一个线程可以执行某个方法或者某个代码块。 如果不需要 Lock 、ReadWriteLock 所提供的高级同步特性，应该优先考虑使用 synchronized ，理由如下：","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/01.Java/01.JavaSE/05.%E5%B9%B6%E5%8F%91/11.Synchronized.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Synchronized"}],["meta",{"property":"og:description","content":"Synchronized synchronized 的简介 synchronized 是 Java 中的关键字，是 利用锁的机制来实现互斥同步的。 synchronized 可以保证在同一个时刻，只有一个线程可以执行某个方法或者某个代码块。 如果不需要 Lock 、ReadWriteLock 所提供的高级同步特性，应该优先考虑使用 synchronized ，理由如下："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T14:54:54.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JavaSE"}],["meta",{"property":"article:tag","content":"并发"}],["meta",{"property":"article:published_time","content":"2020-12-25T18:43:11.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-21T14:54:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Synchronized\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-25T18:43:11.000Z\\",\\"dateModified\\":\\"2023-09-21T14:54:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"synchronized 的简介","slug":"synchronized-的简介","link":"#synchronized-的简介","children":[]},{"level":2,"title":"synchronized 的应用","slug":"synchronized-的应用","link":"#synchronized-的应用","children":[{"level":3,"title":"同步实例方法","slug":"同步实例方法","link":"#同步实例方法","children":[]},{"level":3,"title":"同步静态方法","slug":"同步静态方法","link":"#同步静态方法","children":[]},{"level":3,"title":"同步代码块","slug":"同步代码块","link":"#同步代码块","children":[]}]},{"level":2,"title":"synchronized 的原理","slug":"synchronized-的原理","link":"#synchronized-的原理","children":[{"level":3,"title":"同步代码块","slug":"同步代码块-1","link":"#同步代码块-1","children":[]},{"level":3,"title":"同步方法","slug":"同步方法","link":"#同步方法","children":[]},{"level":3,"title":"Monitor","slug":"monitor","link":"#monitor","children":[]}]},{"level":2,"title":"synchronized 的优化","slug":"synchronized-的优化","link":"#synchronized-的优化","children":[{"level":3,"title":"Java 对象头","slug":"java-对象头","link":"#java-对象头","children":[]},{"level":3,"title":"偏向锁","slug":"偏向锁","link":"#偏向锁","children":[]},{"level":3,"title":"轻量级锁","slug":"轻量级锁","link":"#轻量级锁","children":[]},{"level":3,"title":"锁消除 / 锁粗化","slug":"锁消除-锁粗化","link":"#锁消除-锁粗化","children":[]},{"level":3,"title":"自旋锁","slug":"自旋锁","link":"#自旋锁","children":[]}]},{"level":2,"title":"synchronized 的误区","slug":"synchronized-的误区","link":"#synchronized-的误区","children":[{"level":3,"title":"synchronized 使用范围不当导致的错误","slug":"synchronized-使用范围不当导致的错误","link":"#synchronized-使用范围不当导致的错误","children":[]},{"level":3,"title":"synchronized 保护对象不对导致的错误","slug":"synchronized-保护对象不对导致的错误","link":"#synchronized-保护对象不对导致的错误","children":[]},{"level":3,"title":"锁粒度导致的问题","slug":"锁粒度导致的问题","link":"#锁粒度导致的问题","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1695308094000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":16.39,"words":4918},"filePathRelative":"01.Java/01.JavaSE/05.并发/11.Synchronized.md","localizedDate":"2020年12月25日","excerpt":"<h1> Synchronized</h1>\\n<h2> synchronized 的简介</h2>\\n<p><code>synchronized</code> 是 Java 中的关键字，是 <strong>利用锁的机制来实现互斥同步的</strong>。</p>\\n<p><strong><code>synchronized</code> 可以保证在同一个时刻，只有一个线程可以执行某个方法或者某个代码块</strong>。</p>\\n<p>如果不需要 <code>Lock</code> 、<code>ReadWriteLock</code> 所提供的高级同步特性，应该优先考虑使用 <code>synchronized</code> ，理由如下：</p>","autoDesc":true}');export{e as data};
