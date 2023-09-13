const e=JSON.parse('{"key":"v-1c369b18","path":"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/02.Redis%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html","title":"Redis 数据类型","lang":"zh-CN","frontmatter":{"title":"Redis 数据类型","icon":"logos:redis","cover":"https://raw.githubusercontent.com/dunwu/images/dev/snap/20230901071808.png","date":"2020-06-24T10:45:38.000Z","order":2,"category":["数据库","KV数据库","Redis"],"tag":["数据库","KV数据库","Redis","数据类型"],"description":"Redis 数据类型 关键词：String、Hash、List、Set、Zset、BitMap、HyperLogLog、Geo、Stream Redis 提供了多种数据类型，每种数据类型有丰富的命令支持。 Redis 支持的基本数据类型：STRING、HASH、LIST、SET、ZSET","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/02.Redis%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Redis 数据类型"}],["meta",{"property":"og:description","content":"Redis 数据类型 关键词：String、Hash、List、Set、Zset、BitMap、HyperLogLog、Geo、Stream Redis 提供了多种数据类型，每种数据类型有丰富的命令支持。 Redis 支持的基本数据类型：STRING、HASH、LIST、SET、ZSET"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/dunwu/images/dev/snap/20230901071808.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-12T23:57:20.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Redis 数据类型"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"KV数据库"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:tag","content":"数据类型"}],["meta",{"property":"article:published_time","content":"2020-06-24T10:45:38.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-12T23:57:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 数据类型\\",\\"image\\":[\\"https://raw.githubusercontent.com/dunwu/images/dev/snap/20230901071808.png\\"],\\"datePublished\\":\\"2020-06-24T10:45:38.000Z\\",\\"dateModified\\":\\"2023-09-12T23:57:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"String","slug":"string","link":"#string","children":[{"level":3,"title":"String 简介","slug":"string-简介","link":"#string-简介","children":[]},{"level":3,"title":"String 实现","slug":"string-实现","link":"#string-实现","children":[]},{"level":3,"title":"String 命令","slug":"string-命令","link":"#string-命令","children":[]},{"level":3,"title":"String 应用","slug":"string-应用","link":"#string-应用","children":[]},{"level":3,"title":"Hash 简介","slug":"hash-简介","link":"#hash-简介","children":[]},{"level":3,"title":"Hash 实现","slug":"hash-实现","link":"#hash-实现","children":[]},{"level":3,"title":"Hash 命令","slug":"hash-命令","link":"#hash-命令","children":[]},{"level":3,"title":"Hash 应用","slug":"hash-应用","link":"#hash-应用","children":[]}]},{"level":2,"title":"List","slug":"list","link":"#list","children":[{"level":3,"title":"List 简介","slug":"list-简介","link":"#list-简介","children":[]},{"level":3,"title":"List 实现","slug":"list-实现","link":"#list-实现","children":[]},{"level":3,"title":"List 命令","slug":"list-命令","link":"#list-命令","children":[]},{"level":3,"title":"List 应用","slug":"list-应用","link":"#list-应用","children":[]}]},{"level":2,"title":"Set","slug":"set","link":"#set","children":[{"level":3,"title":"Set 简介","slug":"set-简介","link":"#set-简介","children":[]},{"level":3,"title":"Set 实现","slug":"set-实现","link":"#set-实现","children":[]},{"level":3,"title":"Set 命令","slug":"set-命令","link":"#set-命令","children":[]},{"level":3,"title":"Set 应用","slug":"set-应用","link":"#set-应用","children":[]}]},{"level":2,"title":"Zset","slug":"zset","link":"#zset","children":[{"level":3,"title":"Zset 简介","slug":"zset-简介","link":"#zset-简介","children":[]},{"level":3,"title":"Zset 实现","slug":"zset-实现","link":"#zset-实现","children":[]},{"level":3,"title":"Zset 命令","slug":"zset-命令","link":"#zset-命令","children":[]},{"level":3,"title":"Zset 应用","slug":"zset-应用","link":"#zset-应用","children":[]}]},{"level":2,"title":"BitMap","slug":"bitmap","link":"#bitmap","children":[{"level":3,"title":"BitMap 简介","slug":"bitmap-简介","link":"#bitmap-简介","children":[]},{"level":3,"title":"BitMap 实现","slug":"bitmap-实现","link":"#bitmap-实现","children":[]},{"level":3,"title":"BitMap 命令","slug":"bitmap-命令","link":"#bitmap-命令","children":[]},{"level":3,"title":"BitMap 应用","slug":"bitmap-应用","link":"#bitmap-应用","children":[]}]},{"level":2,"title":"HyperLogLog","slug":"hyperloglog","link":"#hyperloglog","children":[{"level":3,"title":"HyperLogLog 简介","slug":"hyperloglog-简介","link":"#hyperloglog-简介","children":[]},{"level":3,"title":"HyperLogLog 实现","slug":"hyperloglog-实现","link":"#hyperloglog-实现","children":[]},{"level":3,"title":"HyperLogLog 命令","slug":"hyperloglog-命令","link":"#hyperloglog-命令","children":[]},{"level":3,"title":"HyperLogLog 应用","slug":"hyperloglog-应用","link":"#hyperloglog-应用","children":[]}]},{"level":2,"title":"GEO","slug":"geo","link":"#geo","children":[{"level":3,"title":"GEO 简介","slug":"geo-简介","link":"#geo-简介","children":[]},{"level":3,"title":"GEO 实现","slug":"geo-实现","link":"#geo-实现","children":[]},{"level":3,"title":"GEO 命令","slug":"geo-命令","link":"#geo-命令","children":[]},{"level":3,"title":"GEO 应用","slug":"geo-应用","link":"#geo-应用","children":[]}]},{"level":2,"title":"Stream","slug":"stream","link":"#stream","children":[{"level":3,"title":"Stream 简介","slug":"stream-简介","link":"#stream-简介","children":[]},{"level":3,"title":"Stream 命令","slug":"stream-命令","link":"#stream-命令","children":[]},{"level":3,"title":"Stream 应用","slug":"stream-应用","link":"#stream-应用","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1694563040000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":53.34,"words":16001},"filePathRelative":"12.数据库/05.KV数据库/01.Redis/02.Redis数据类型.md","localizedDate":"2020年6月24日","excerpt":"<h1> Redis 数据类型</h1>\\n<blockquote>\\n<p>关键词：<code>String</code>、<code>Hash</code>、<code>List</code>、<code>Set</code>、<code>Zset</code>、<code>BitMap</code>、<code>HyperLogLog</code>、<code>Geo</code>、<code>Stream</code></p>\\n</blockquote>\\n<p>Redis 提供了多种数据类型，每种数据类型有丰富的命令支持。</p>\\n<p>Redis 支持的基本数据类型：STRING、HASH、LIST、SET、ZSET</p>","autoDesc":true}');export{e as data};
