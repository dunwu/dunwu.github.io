const e=JSON.parse('{"key":"v-7926a549","path":"/pages/379cd8/","title":"Redis 复制","lang":"zh-CN","frontmatter":{"title":"Redis 复制","date":"2020-06-24T10:45:38.000Z","category":["数据库","KV数据库","Redis"],"tag":["数据库","KV数据库","Redis","复制"],"permalink":"/pages/379cd8/","description":"Redis 复制 在 Redis 中，可以通过执行 SLAVEOF 命令或设置 slaveof 选项，让一个服务器去复制（replicate）另一个服务器，其中，后者叫主服务器（master），前者叫从服务器（slave）。 Redis 2.8 以前的复制不能高效处理断线后重复制的情况，而 Redis 2.8 新添的部分重同步可以解决这个问题。 关键词：SLAVEOF、SYNC、PSYNC、命令传播、心跳","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/379cd8/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Redis 复制"}],["meta",{"property":"og:description","content":"Redis 复制 在 Redis 中，可以通过执行 SLAVEOF 命令或设置 slaveof 选项，让一个服务器去复制（replicate）另一个服务器，其中，后者叫主服务器（master），前者叫从服务器（slave）。 Redis 2.8 以前的复制不能高效处理断线后重复制的情况，而 Redis 2.8 新添的部分重同步可以解决这个问题。 关键词：SLAVEOF、SYNC、PSYNC、命令传播、心跳"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T15:41:08.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"KV数据库"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:tag","content":"复制"}],["meta",{"property":"article:published_time","content":"2020-06-24T10:45:38.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-08T15:41:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 复制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-24T10:45:38.000Z\\",\\"dateModified\\":\\"2023-09-08T15:41:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"复制简介","slug":"复制简介","link":"#复制简介","children":[]},{"level":2,"title":"旧版复制","slug":"旧版复制","link":"#旧版复制","children":[{"level":3,"title":"同步","slug":"同步","link":"#同步","children":[]},{"level":3,"title":"命令传播","slug":"命令传播","link":"#命令传播","children":[]},{"level":3,"title":"旧版复制的缺陷","slug":"旧版复制的缺陷","link":"#旧版复制的缺陷","children":[]}]},{"level":2,"title":"新版复制","slug":"新版复制","link":"#新版复制","children":[{"level":3,"title":"部分重同步","slug":"部分重同步","link":"#部分重同步","children":[]},{"level":3,"title":"PSYNC 命令","slug":"psync-命令","link":"#psync-命令","children":[]}]},{"level":2,"title":"心跳检测","slug":"心跳检测","link":"#心跳检测","children":[{"level":3,"title":"检测主从连接状态","slug":"检测主从连接状态","link":"#检测主从连接状态","children":[]},{"level":3,"title":"辅助实现 min-slaves 选项","slug":"辅助实现-min-slaves-选项","link":"#辅助实现-min-slaves-选项","children":[]},{"level":3,"title":"检测命令丢失","slug":"检测命令丢失","link":"#检测命令丢失","children":[]}]},{"level":2,"title":"复制的流程","slug":"复制的流程","link":"#复制的流程","children":[{"level":3,"title":"步骤 1. 设置主从服务器","slug":"步骤-1-设置主从服务器","link":"#步骤-1-设置主从服务器","children":[]},{"level":3,"title":"步骤 2. 主从服务器建立 TCP 连接。","slug":"步骤-2-主从服务器建立-tcp-连接。","link":"#步骤-2-主从服务器建立-tcp-连接。","children":[]},{"level":3,"title":"步骤 3. 发送 PING 检查通信状态。","slug":"步骤-3-发送-ping-检查通信状态。","link":"#步骤-3-发送-ping-检查通信状态。","children":[]},{"level":3,"title":"步骤 4. 身份验证。","slug":"步骤-4-身份验证。","link":"#步骤-4-身份验证。","children":[]},{"level":3,"title":"步骤 5. 发送端口信息。","slug":"步骤-5-发送端口信息。","link":"#步骤-5-发送端口信息。","children":[]},{"level":3,"title":"步骤 6. 同步。","slug":"步骤-6-同步。","link":"#步骤-6-同步。","children":[]},{"level":3,"title":"步骤 7. 命令传播。","slug":"步骤-7-命令传播。","link":"#步骤-7-命令传播。","children":[]}]},{"level":2,"title":"复制的配置项","slug":"复制的配置项","link":"#复制的配置项","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694186720000,"updatedTime":1694187668000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":12.37,"words":3710},"filePathRelative":"12.数据库/05.KV数据库/01.Redis/11.Redis复制.md","localizedDate":"2020年6月24日","excerpt":"<h1> Redis 复制</h1>\\n<blockquote>\\n<p>在 Redis 中，<strong>可以通过执行 <code>SLAVEOF</code> 命令或设置 <code>slaveof</code> 选项，让一个服务器去复制（replicate）另一个服务器</strong>，其中，后者叫主服务器（master），前者叫从服务器（slave）。</p>\\n<p>Redis 2.8 以前的复制不能高效处理断线后重复制的情况，而 Redis 2.8 新添的部分重同步可以解决这个问题。</p>\\n<p>关键词：<code>SLAVEOF</code>、<code>SYNC</code>、<code>PSYNC</code>、<code>命令传播</code>、<code>心跳</code></p>\\n</blockquote>","autoDesc":true}');export{e as data};
