const e=JSON.parse('{"key":"v-cb65ff80","path":"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/13.Redis%E4%BA%8B%E4%BB%B6.html","title":"Redis 事件","lang":"zh-CN","frontmatter":{"icon":"logos:redis","title":"Redis 事件","date":"2023-09-11T22:22:32.000Z","order":13,"category":["数据库","KV数据库","Redis"],"tag":["数据库","KV数据库","Redis"],"description":"Redis 事件 Redis 服务器是一个事件驱动程序，服务器需要处理两类事件： 文件事件（file event） - Redis 服务器通过套接字（Socket）与客户端或者其它服务器进行通信，文件事件就是对套接字操作的抽象。服务器与客户端（或其他的服务器）的通信会产生文件事件，而服务器通过监听并处理这些事件来完成一系列网络通信操作。 时间事件（time event） - Redis 服务器有一些操作需要在给定的时间点执行，时间事件是对这类定时操作的抽象。 关键词：文件事件、时间事件","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/13.Redis%E4%BA%8B%E4%BB%B6.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Redis 事件"}],["meta",{"property":"og:description","content":"Redis 事件 Redis 服务器是一个事件驱动程序，服务器需要处理两类事件： 文件事件（file event） - Redis 服务器通过套接字（Socket）与客户端或者其它服务器进行通信，文件事件就是对套接字操作的抽象。服务器与客户端（或其他的服务器）的通信会产生文件事件，而服务器通过监听并处理这些事件来完成一系列网络通信操作。 时间事件（time event） - Redis 服务器有一些操作需要在给定的时间点执行，时间事件是对这类定时操作的抽象。 关键词：文件事件、时间事件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-20T00:08:32.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"KV数据库"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:published_time","content":"2023-09-11T22:22:32.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-20T00:08:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 事件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-11T22:22:32.000Z\\",\\"dateModified\\":\\"2023-09-20T00:08:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"文件事件","slug":"文件事件","link":"#文件事件","children":[]},{"level":2,"title":"时间事件","slug":"时间事件","link":"#时间事件","children":[]},{"level":2,"title":"事件的调度与执行","slug":"事件的调度与执行","link":"#事件的调度与执行","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694956295000,"updatedTime":1695168512000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":3}]},"readingTime":{"minutes":3.12,"words":935},"filePathRelative":"12.数据库/05.KV数据库/01.Redis/13.Redis事件.md","localizedDate":"2023年9月11日","excerpt":"<h1> Redis 事件</h1>\\n<blockquote>\\n<p>Redis 服务器是一个事件驱动程序，服务器需要处理两类事件：</p>\\n<ul>\\n<li><strong><code>文件事件（file event）</code></strong> - Redis 服务器通过套接字（Socket）与客户端或者其它服务器进行通信，文件事件就是对套接字操作的抽象。服务器与客户端（或其他的服务器）的通信会产生文件事件，而服务器通过监听并处理这些事件来完成一系列网络通信操作。</li>\\n<li><strong><code>时间事件（time event）</code></strong> - Redis 服务器有一些操作需要在给定的时间点执行，时间事件是对这类定时操作的抽象。</li>\\n</ul>\\n<p>关键词：<code>文件事件</code>、<code>时间事件</code></p>\\n</blockquote>","autoDesc":true}');export{e as data};
