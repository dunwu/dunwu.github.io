const e=JSON.parse('{"key":"v-6cd8b2c1","path":"/pages/30456b/","title":"Redis 脚本","lang":"zh-CN","frontmatter":{"icon":"logos:redis","title":"Redis 脚本","date":"2020-01-30T21:48:57.000Z","order":34,"permalink":"/pages/30456b/","category":["数据库","KV数据库","Redis"],"tag":["数据库","KV数据库","Redis","Lua"],"description":"Redis 脚本 Redis 脚本使用 Lua 解释器来执行脚本。 Redis 2.6 版本通过内嵌支持 Lua 环境。 关键词：Lua 为什么使用 Lua Lua 是一种轻量小巧的脚本语言，用标准 C 语言编写并以源代码形式开放， 其设计目的是为了嵌入应用程序中，从而为应用程序提供灵活的扩展和定制功能。 在 Redis 中，执行单一命令是原子性操作，所以不会出现并发问题。但有的业务场景下，需要执行多个命令，同时确保不出现并发问题，这就需要用到 Lua 脚本了。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/30456b/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Redis 脚本"}],["meta",{"property":"og:description","content":"Redis 脚本 Redis 脚本使用 Lua 解释器来执行脚本。 Redis 2.6 版本通过内嵌支持 Lua 环境。 关键词：Lua 为什么使用 Lua Lua 是一种轻量小巧的脚本语言，用标准 C 语言编写并以源代码形式开放， 其设计目的是为了嵌入应用程序中，从而为应用程序提供灵活的扩展和定制功能。 在 Redis 中，执行单一命令是原子性操作，所以不会出现并发问题。但有的业务场景下，需要执行多个命令，同时确保不出现并发问题，这就需要用到 Lua 脚本了。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T22:46:25.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"KV数据库"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:tag","content":"Lua"}],["meta",{"property":"article:published_time","content":"2020-01-30T21:48:57.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T22:46:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 脚本\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-30T21:48:57.000Z\\",\\"dateModified\\":\\"2024-05-15T22:46:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"为什么使用 Lua","slug":"为什么使用-lua","link":"#为什么使用-lua","children":[]},{"level":2,"title":"Redis 脚本命令","slug":"redis-脚本命令","link":"#redis-脚本命令","children":[]},{"level":2,"title":"Redis 执行 Lua 的工作流程","slug":"redis-执行-lua-的工作流程","link":"#redis-执行-lua-的工作流程","children":[]},{"level":2,"title":"Redis 执行 Lua 的要点","slug":"redis-执行-lua-的要点","link":"#redis-执行-lua-的要点","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694956295000,"updatedTime":1715813185000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":4.1,"words":1230},"filePathRelative":"12.数据库/05.KV数据库/01.Redis/34.Redis脚本.md","localizedDate":"2020年1月30日","excerpt":"<h1> Redis 脚本</h1>\\n<blockquote>\\n<p>Redis 脚本使用 Lua 解释器来执行脚本。 Redis 2.6 版本通过内嵌支持 Lua 环境。</p>\\n<p>关键词：<code>Lua</code></p>\\n</blockquote>\\n<h2> 为什么使用 Lua</h2>\\n<p>Lua 是一种轻量小巧的脚本语言，用标准 C 语言编写并以源代码形式开放， 其设计目的是为了嵌入应用程序中，从而为应用程序提供灵活的扩展和定制功能。</p>\\n<p>在 Redis 中，执行单一命令是原子性操作，所以不会出现并发问题。但有的业务场景下，需要执行多个命令，同时确保不出现并发问题，这就需要用到 Lua 脚本了。</p>","autoDesc":true}');export{e as data};
