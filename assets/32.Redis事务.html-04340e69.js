const e=JSON.parse('{"key":"v-6e9239ef","path":"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/32.Redis%E4%BA%8B%E5%8A%A1.html","title":"Redis 事务","lang":"zh-CN","frontmatter":{"icon":"logos:redis","title":"Redis 事务","date":"2020-01-30T21:48:57.000Z","order":32,"category":["数据库","KV数据库","Redis"],"tag":["数据库","KV数据库","Redis","事务","ACID"],"description":"Redis 事务 Redis 提供的不是严格的事务，Redis 只保证串行执行命令，并且能保证全部执行，但是执行命令失败时并不会回滚，而是会继续执行下去。 MULTI 、 EXEC 、 DISCARD 和 WATCH 是 Redis 事务相关的命令。 事务可以一次执行多个命令， 并且有以下两个重要的保证： 事务是一个单独的隔离操作：事务中的所有命令都会序列化、按顺序地执行。事务在执行的过程中，不会被其他客户端发送来的命令请求所打断。 事务是一个原子操作：事务中的命令要么全部被执行，要么全部都不执行。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/32.Redis%E4%BA%8B%E5%8A%A1.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Redis 事务"}],["meta",{"property":"og:description","content":"Redis 事务 Redis 提供的不是严格的事务，Redis 只保证串行执行命令，并且能保证全部执行，但是执行命令失败时并不会回滚，而是会继续执行下去。 MULTI 、 EXEC 、 DISCARD 和 WATCH 是 Redis 事务相关的命令。 事务可以一次执行多个命令， 并且有以下两个重要的保证： 事务是一个单独的隔离操作：事务中的所有命令都会序列化、按顺序地执行。事务在执行的过程中，不会被其他客户端发送来的命令请求所打断。 事务是一个原子操作：事务中的命令要么全部被执行，要么全部都不执行。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-17T13:11:35.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"KV数据库"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:tag","content":"事务"}],["meta",{"property":"article:tag","content":"ACID"}],["meta",{"property":"article:published_time","content":"2020-01-30T21:48:57.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-17T13:11:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 事务\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-30T21:48:57.000Z\\",\\"dateModified\\":\\"2023-09-17T13:11:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"MULTI","slug":"multi","link":"#multi","children":[]},{"level":2,"title":"EXEC","slug":"exec","link":"#exec","children":[]},{"level":2,"title":"DISCARD","slug":"discard","link":"#discard","children":[]},{"level":2,"title":"WATCH","slug":"watch","link":"#watch","children":[{"level":3,"title":"取消 WATCH 的场景","slug":"取消-watch-的场景","link":"#取消-watch-的场景","children":[]},{"level":3,"title":"使用 WATCH 创建原子操作","slug":"使用-watch-创建原子操作","link":"#使用-watch-创建原子操作","children":[]}]},{"level":2,"title":"Rollback","slug":"rollback","link":"#rollback","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694956295000,"updatedTime":1694956295000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":4.01,"words":1203},"filePathRelative":"12.数据库/05.KV数据库/01.Redis/32.Redis事务.md","localizedDate":"2020年1月30日","excerpt":"<h1> Redis 事务</h1>\\n<blockquote>\\n<p><strong>Redis 提供的不是严格的事务，Redis 只保证串行执行命令，并且能保证全部执行，但是执行命令失败时并不会回滚，而是会继续执行下去</strong>。</p>\\n</blockquote>\\n<p><code>MULTI</code> 、 <code>EXEC</code> 、 <code>DISCARD</code> 和 <code>WATCH</code> 是 Redis 事务相关的命令。</p>\\n<p>事务可以一次执行多个命令， 并且有以下两个重要的保证：</p>\\n<ul>\\n<li>事务是一个单独的隔离操作：事务中的所有命令都会序列化、按顺序地执行。事务在执行的过程中，不会被其他客户端发送来的命令请求所打断。</li>\\n<li>事务是一个原子操作：事务中的命令要么全部被执行，要么全部都不执行。</li>\\n</ul>","autoDesc":true}');export{e as data};
