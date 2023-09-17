const e=JSON.parse('{"key":"v-4065d7ea","path":"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/03.%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93/02.Mysql/04.Mysql%E9%94%81.html","title":"Mysql 锁","lang":"zh-CN","frontmatter":{"icon":"logos:mysql","title":"Mysql 锁","date":"2020-09-07T07:54:19.000Z","order":4,"category":["数据库","关系型数据库","Mysql"],"tag":["数据库","关系型数据库","Mysql","锁"],"description":"Mysql 锁 img 悲观锁和乐观锁 确保在多个事务同时存取数据库中同一数据时不破坏事务的隔离性和统一性以及数据库的统一性，乐观锁和悲观锁是并发控制主要采用的技术手段。 悲观锁 - 假定会发生并发冲突，屏蔽一切可能违反数据完整性的操作 在查询完数据的时候就把事务锁起来，直到提交事务（COMMIT） 实现方式：使用数据库中的锁机制。 乐观锁 - 假设不会发生并发冲突，只在提交操作时检查是否违反数据完整性。 在修改数据的时候把事务锁起来，通过 version 的方式来进行锁定 实现方式：使用 version 版本或者时间戳。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/12.%E6%95%B0%E6%8D%AE%E5%BA%93/03.%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93/02.Mysql/04.Mysql%E9%94%81.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Mysql 锁"}],["meta",{"property":"og:description","content":"Mysql 锁 img 悲观锁和乐观锁 确保在多个事务同时存取数据库中同一数据时不破坏事务的隔离性和统一性以及数据库的统一性，乐观锁和悲观锁是并发控制主要采用的技术手段。 悲观锁 - 假定会发生并发冲突，屏蔽一切可能违反数据完整性的操作 在查询完数据的时候就把事务锁起来，直到提交事务（COMMIT） 实现方式：使用数据库中的锁机制。 乐观锁 - 假设不会发生并发冲突，只在提交操作时检查是否违反数据完整性。 在修改数据的时候把事务锁起来，通过 version 的方式来进行锁定 实现方式：使用 version 版本或者时间戳。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-17T13:11:35.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"关系型数据库"}],["meta",{"property":"article:tag","content":"Mysql"}],["meta",{"property":"article:tag","content":"锁"}],["meta",{"property":"article:published_time","content":"2020-09-07T07:54:19.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-17T13:11:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mysql 锁\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-09-07T07:54:19.000Z\\",\\"dateModified\\":\\"2023-09-17T13:11:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"悲观锁和乐观锁","slug":"悲观锁和乐观锁","link":"#悲观锁和乐观锁","children":[]},{"level":2,"title":"表级锁和行级锁","slug":"表级锁和行级锁","link":"#表级锁和行级锁","children":[]},{"level":2,"title":"读写锁","slug":"读写锁","link":"#读写锁","children":[]},{"level":2,"title":"意向锁","slug":"意向锁","link":"#意向锁","children":[]},{"level":2,"title":"MVCC","slug":"mvcc","link":"#mvcc","children":[{"level":3,"title":"MVCC 思想","slug":"mvcc-思想","link":"#mvcc-思想","children":[]},{"level":3,"title":"版本号","slug":"版本号","link":"#版本号","children":[]},{"level":3,"title":"Undo 日志","slug":"undo-日志","link":"#undo-日志","children":[]},{"level":3,"title":"ReadView","slug":"readview","link":"#readview","children":[]},{"level":3,"title":"快照读与当前读","slug":"快照读与当前读","link":"#快照读与当前读","children":[]}]},{"level":2,"title":"行锁","slug":"行锁","link":"#行锁","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1694956295000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":11.38,"words":3413},"filePathRelative":"12.数据库/03.关系型数据库/02.Mysql/04.Mysql锁.md","localizedDate":"2020年9月7日","excerpt":"<h1> Mysql 锁</h1>\\n<figure><img src=\\"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200716064947.png\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>img</figcaption></figure>\\n<h2> 悲观锁和乐观锁</h2>\\n<p>确保在多个事务同时存取数据库中同一数据时不破坏事务的隔离性和统一性以及数据库的统一性，<strong>乐观锁和悲观锁是并发控制主要采用的技术手段。</strong></p>\\n<ul>\\n<li><strong><code>悲观锁</code></strong> - 假定会发生并发冲突，屏蔽一切可能违反数据完整性的操作\\n<ul>\\n<li>在查询完数据的时候就把事务锁起来，直到提交事务（<code>COMMIT</code>）</li>\\n<li>实现方式：<strong>使用数据库中的锁机制</strong>。</li>\\n</ul>\\n</li>\\n<li><strong><code>乐观锁</code></strong> - 假设不会发生并发冲突，只在提交操作时检查是否违反数据完整性。\\n<ul>\\n<li>在修改数据的时候把事务锁起来，通过 version 的方式来进行锁定</li>\\n<li>实现方式：<strong>使用 version 版本或者时间戳</strong>。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
