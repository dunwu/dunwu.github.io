const e=JSON.parse('{"key":"v-45df481e","path":"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/23.Redis%E9%9B%86%E7%BE%A4.html","title":"Redis 集群","lang":"zh-CN","frontmatter":{"icon":"logos:redis","title":"Redis 集群","cover":"https://raw.githubusercontent.com/dunwu/images/dev/snap/20230914072642.png","date":"2020-06-24T10:45:38.000Z","order":23,"category":["数据库","KV数据库","Redis"],"tag":["数据库","KV数据库","Redis","集群","分区","故障转移"],"description":"Redis 集群 Redis 集群（Redis Cluster） 是 Redis 官方提供的分布式数据库方案。 既然是分布式，自然具备分布式系统的基本特性：可扩展、高可用、一致性。 Redis 集群通过划分 hash 槽来分区，进行数据分享。 Redis 集群采用主从模型，提供复制和故障转移功能，来保证 Redis 集群的高可用。 根据 CAP 理论，Consistency、Availability、Partition tolerance 三者不可兼得，而 Redis 集群的选择是 AP。Redis 集群节点间采用异步通信方式，不保证强一致性，尽力达到最终一致性。 关键词：分区、重分区、寻址、故障转移","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/23.Redis%E9%9B%86%E7%BE%A4.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Redis 集群"}],["meta",{"property":"og:description","content":"Redis 集群 Redis 集群（Redis Cluster） 是 Redis 官方提供的分布式数据库方案。 既然是分布式，自然具备分布式系统的基本特性：可扩展、高可用、一致性。 Redis 集群通过划分 hash 槽来分区，进行数据分享。 Redis 集群采用主从模型，提供复制和故障转移功能，来保证 Redis 集群的高可用。 根据 CAP 理论，Consistency、Availability、Partition tolerance 三者不可兼得，而 Redis 集群的选择是 AP。Redis 集群节点间采用异步通信方式，不保证强一致性，尽力达到最终一致性。 关键词：分区、重分区、寻址、故障转移"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/dunwu/images/dev/snap/20230914072642.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-17T13:11:35.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Redis 集群"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"KV数据库"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:tag","content":"集群"}],["meta",{"property":"article:tag","content":"分区"}],["meta",{"property":"article:tag","content":"故障转移"}],["meta",{"property":"article:published_time","content":"2020-06-24T10:45:38.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-17T13:11:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 集群\\",\\"image\\":[\\"https://raw.githubusercontent.com/dunwu/images/dev/snap/20230914072642.png\\"],\\"datePublished\\":\\"2020-06-24T10:45:38.000Z\\",\\"dateModified\\":\\"2023-09-17T13:11:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Redis Cluster 分区","slug":"redis-cluster-分区","link":"#redis-cluster-分区","children":[{"level":3,"title":"集群节点","slug":"集群节点","link":"#集群节点","children":[]},{"level":3,"title":"分配 Hash 槽","slug":"分配-hash-槽","link":"#分配-hash-槽","children":[]},{"level":3,"title":"寻址","slug":"寻址","link":"#寻址","children":[]},{"level":3,"title":"重新分区","slug":"重新分区","link":"#重新分区","children":[]},{"level":3,"title":"ASK 错误","slug":"ask-错误","link":"#ask-错误","children":[]}]},{"level":2,"title":"Redis Cluster 故障转移","slug":"redis-cluster-故障转移","link":"#redis-cluster-故障转移","children":[{"level":3,"title":"复制","slug":"复制","link":"#复制","children":[]},{"level":3,"title":"故障检测","slug":"故障检测","link":"#故障检测","children":[]},{"level":3,"title":"故障转移","slug":"故障转移","link":"#故障转移","children":[]},{"level":3,"title":"选举新的主节点","slug":"选举新的主节点","link":"#选举新的主节点","children":[]}]},{"level":2,"title":"Redis Cluster 通信","slug":"redis-cluster-通信","link":"#redis-cluster-通信","children":[]},{"level":2,"title":"Redis Cluster 应用","slug":"redis-cluster-应用","link":"#redis-cluster-应用","children":[{"level":3,"title":"集群功能限制","slug":"集群功能限制","link":"#集群功能限制","children":[]},{"level":3,"title":"集群规模限制","slug":"集群规模限制","link":"#集群规模限制","children":[]},{"level":3,"title":"集群配置","slug":"集群配置","link":"#集群配置","children":[]}]},{"level":2,"title":"其他 Redis 集群方案","slug":"其他-redis-集群方案","link":"#其他-redis-集群方案","children":[{"level":3,"title":"客户端分区方案","slug":"客户端分区方案","link":"#客户端分区方案","children":[]},{"level":3,"title":"代理分区方案","slug":"代理分区方案","link":"#代理分区方案","children":[]},{"level":3,"title":"查询路由方案","slug":"查询路由方案","link":"#查询路由方案","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694956295000,"updatedTime":1694956295000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":13.87,"words":4162},"filePathRelative":"12.数据库/05.KV数据库/01.Redis/23.Redis集群.md","localizedDate":"2020年6月24日","excerpt":"<h1> Redis 集群</h1>\\n<blockquote>\\n<p><strong><a href=\\"https://redis.io/topics/cluster-tutorial\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Redis 集群（Redis Cluster）</a> 是 Redis 官方提供的分布式数据库方案</strong>。</p>\\n<p>既然是分布式，自然具备分布式系统的基本特性：可扩展、高可用、一致性。</p>\\n<ul>\\n<li>Redis 集群通过划分 hash 槽来分区，进行数据分享。</li>\\n<li>Redis 集群采用主从模型，提供复制和故障转移功能，来保证 Redis 集群的高可用。</li>\\n<li>根据 CAP 理论，Consistency、Availability、Partition tolerance 三者不可兼得，而 Redis 集群的选择是 AP。Redis 集群节点间采用异步通信方式，不保证强一致性，尽力达到最终一致性。</li>\\n</ul>\\n<p>关键词：<code>分区</code>、<code>重分区</code>、<code>寻址</code>、<code>故障转移</code></p>\\n</blockquote>","autoDesc":true}');export{e as data};
