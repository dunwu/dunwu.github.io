const e=JSON.parse('{"key":"v-39a1bad7","path":"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/12.Redis%E6%8C%81%E4%B9%85%E5%8C%96.html","title":"Redis 持久化","lang":"zh-CN","frontmatter":{"icon":"logos:redis","title":"Redis 持久化","cover":"https://raw.githubusercontent.com/dunwu/images/master/snap/202309150716562.png","date":"2020-06-24T10:45:38.000Z","order":12,"category":["数据库","KV数据库","Redis"],"tag":["数据库","KV数据库","Redis","持久化","CoW"],"description":"Redis 持久化 Redis 是内存型数据库，为了保证数据在宕机后不会丢失，需要将内存中的数据持久化到硬盘上。 Redis 支持两种持久化方式：RDB 和 AOF。这两种持久化方式既可以同时使用，也可以单独使用。 关键词：RDB、AOF、SAVE、BGSAVE、appendfsync RDB 快照","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/12.Redis%E6%8C%81%E4%B9%85%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Redis 持久化"}],["meta",{"property":"og:description","content":"Redis 持久化 Redis 是内存型数据库，为了保证数据在宕机后不会丢失，需要将内存中的数据持久化到硬盘上。 Redis 支持两种持久化方式：RDB 和 AOF。这两种持久化方式既可以同时使用，也可以单独使用。 关键词：RDB、AOF、SAVE、BGSAVE、appendfsync RDB 快照"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/dunwu/images/master/snap/202309150716562.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-25T23:24:52.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Redis 持久化"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"KV数据库"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:tag","content":"持久化"}],["meta",{"property":"article:tag","content":"CoW"}],["meta",{"property":"article:published_time","content":"2020-06-24T10:45:38.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-25T23:24:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 持久化\\",\\"image\\":[\\"https://raw.githubusercontent.com/dunwu/images/master/snap/202309150716562.png\\"],\\"datePublished\\":\\"2020-06-24T10:45:38.000Z\\",\\"dateModified\\":\\"2023-10-25T23:24:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"RDB 快照","slug":"rdb-快照","link":"#rdb-快照","children":[{"level":3,"title":"RDB 简介","slug":"rdb-简介","link":"#rdb-简介","children":[]},{"level":3,"title":"RDB 的优点和缺点","slug":"rdb-的优点和缺点","link":"#rdb-的优点和缺点","children":[]},{"level":3,"title":"RDB 的创建","slug":"rdb-的创建","link":"#rdb-的创建","children":[]},{"level":3,"title":"RDB 的载入","slug":"rdb-的载入","link":"#rdb-的载入","children":[]},{"level":3,"title":"自动间隔保存","slug":"自动间隔保存","link":"#自动间隔保存","children":[]},{"level":3,"title":"RDB 的文件结构","slug":"rdb-的文件结构","link":"#rdb-的文件结构","children":[]},{"level":3,"title":"RDB 的配置","slug":"rdb-的配置","link":"#rdb-的配置","children":[]}]},{"level":2,"title":"AOF 日志","slug":"aof-日志","link":"#aof-日志","children":[{"level":3,"title":"AOF 简介","slug":"aof-简介","link":"#aof-简介","children":[]},{"level":3,"title":"AOF 的优点和缺点","slug":"aof-的优点和缺点","link":"#aof-的优点和缺点","children":[]},{"level":3,"title":"AOF 的创建","slug":"aof-的创建","link":"#aof-的创建","children":[]},{"level":3,"title":"AOF 的载入","slug":"aof-的载入","link":"#aof-的载入","children":[]},{"level":3,"title":"AOF 的重写","slug":"aof-的重写","link":"#aof-的重写","children":[]},{"level":3,"title":"AOF 后台重写","slug":"aof-后台重写","link":"#aof-后台重写","children":[]},{"level":3,"title":"AOF 的配置","slug":"aof-的配置","link":"#aof-的配置","children":[]}]},{"level":2,"title":"RDB 和 AOF","slug":"rdb-和-aof","link":"#rdb-和-aof","children":[{"level":3,"title":"如何选择持久化","slug":"如何选择持久化","link":"#如何选择持久化","children":[]},{"level":3,"title":"RDB 切换为 AOF","slug":"rdb-切换为-aof","link":"#rdb-切换为-aof","children":[]},{"level":3,"title":"AOF 和 RDB 的相互作用","slug":"aof-和-rdb-的相互作用","link":"#aof-和-rdb-的相互作用","children":[]},{"level":3,"title":"混合持久化","slug":"混合持久化","link":"#混合持久化","children":[]}]},{"level":2,"title":"Redis 备份","slug":"redis-备份","link":"#redis-备份","children":[{"level":3,"title":"备份过程","slug":"备份过程","link":"#备份过程","children":[]},{"level":3,"title":"容灾备份","slug":"容灾备份","link":"#容灾备份","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694956295000,"updatedTime":1698276292000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":5}]},"readingTime":{"minutes":17.23,"words":5169},"filePathRelative":"12.数据库/05.KV数据库/01.Redis/12.Redis持久化.md","localizedDate":"2020年6月24日","excerpt":"<h1> Redis 持久化</h1>\\n<blockquote>\\n<p>Redis 是内存型数据库，为了保证数据在宕机后不会丢失，需要将内存中的数据持久化到硬盘上。</p>\\n<p>Redis 支持两种持久化方式：RDB 和 AOF。这两种持久化方式既可以同时使用，也可以单独使用。</p>\\n<p>关键词：<code>RDB</code>、<code>AOF</code>、<code>SAVE</code>、<code>BGSAVE</code>、<code>appendfsync</code></p>\\n</blockquote>\\n<h2> RDB 快照</h2>\\n<figure><img src=\\"https://raw.githubusercontent.com/dunwu/images/master/snap/202309150718907.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{e as data};
