const e=JSON.parse('{"key":"v-bc169c30","path":"/99.%E7%AC%94%E8%AE%B0/15.%E5%88%86%E5%B8%83%E5%BC%8F/00.%E5%88%86%E5%B8%83%E5%BC%8F%E7%BB%BC%E5%90%88/01.%E6%95%B0%E6%8D%AE%E5%AF%86%E9%9B%86%E5%9E%8B%E5%BA%94%E7%94%A8%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1%E7%AC%94%E8%AE%B0%E4%B8%80.html","title":"《数据密集型应用系统设计》笔记一之分布式数据系统","lang":"zh-CN","frontmatter":{"title":"《数据密集型应用系统设计》笔记一之分布式数据系统","date":"2021-08-26T23:32:00.000Z","order":1,"category":["笔记","分布式","分布式综合"],"tag":["数据库","原理"],"description":"《数据密集型应用系统设计》笔记一之分布式数据系统 出于以下目的，我们需要在多台机器上分布数据： 扩展性：当数据量或者读写负载巨大，严重超出了单台机器的处理上限，需要将负载分散到多台机器上。 容错与高可用性：当单台机器（或者多台，以及网络甚至整个数据中心）出现故障，还希望应用系统可以继续工作，这时需要采用多台机器提供冗余。这样某些组件失效之后，冗余组件可以迅速接管。 延迟考虑：如果客户遍布世界各地，通常需要考虑在全球范围内部署服务，以方便用户就近访问最近数据中心所提供的服务，从而避免数据请求跨越了半个地球才能到达目标。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/99.%E7%AC%94%E8%AE%B0/15.%E5%88%86%E5%B8%83%E5%BC%8F/00.%E5%88%86%E5%B8%83%E5%BC%8F%E7%BB%BC%E5%90%88/01.%E6%95%B0%E6%8D%AE%E5%AF%86%E9%9B%86%E5%9E%8B%E5%BA%94%E7%94%A8%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1%E7%AC%94%E8%AE%B0%E4%B8%80.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"《数据密集型应用系统设计》笔记一之分布式数据系统"}],["meta",{"property":"og:description","content":"《数据密集型应用系统设计》笔记一之分布式数据系统 出于以下目的，我们需要在多台机器上分布数据： 扩展性：当数据量或者读写负载巨大，严重超出了单台机器的处理上限，需要将负载分散到多台机器上。 容错与高可用性：当单台机器（或者多台，以及网络甚至整个数据中心）出现故障，还希望应用系统可以继续工作，这时需要采用多台机器提供冗余。这样某些组件失效之后，冗余组件可以迅速接管。 延迟考虑：如果客户遍布世界各地，通常需要考虑在全球范围内部署服务，以方便用户就近访问最近数据中心所提供的服务，从而避免数据请求跨越了半个地球才能到达目标。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T14:54:54.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"原理"}],["meta",{"property":"article:published_time","content":"2021-08-26T23:32:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-21T14:54:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《数据密集型应用系统设计》笔记一之分布式数据系统\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-08-26T23:32:00.000Z\\",\\"dateModified\\":\\"2023-09-21T14:54:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"单主节点数据复制","slug":"单主节点数据复制","link":"#单主节点数据复制","children":[{"level":3,"title":"主节点与从节点","slug":"主节点与从节点","link":"#主节点与从节点","children":[]},{"level":3,"title":"同步复制与异步复制","slug":"同步复制与异步复制","link":"#同步复制与异步复制","children":[]},{"level":3,"title":"配置新的从节点","slug":"配置新的从节点","link":"#配置新的从节点","children":[]},{"level":3,"title":"处理节点失效","slug":"处理节点失效","link":"#处理节点失效","children":[]},{"level":3,"title":"复制日志的实现","slug":"复制日志的实现","link":"#复制日志的实现","children":[]},{"level":3,"title":"复制滞后问题","slug":"复制滞后问题","link":"#复制滞后问题","children":[]}]},{"level":2,"title":"多主节点复制","slug":"多主节点复制","link":"#多主节点复制","children":[{"level":3,"title":"适用场景","slug":"适用场景","link":"#适用场景","children":[]},{"level":3,"title":"处理写冲突","slug":"处理写冲突","link":"#处理写冲突","children":[]}]},{"level":2,"title":"无主节点复制","slug":"无主节点复制","link":"#无主节点复制","children":[]},{"level":2,"title":"数据分区","slug":"数据分区","link":"#数据分区","children":[{"level":3,"title":"数据分区与数据复制","slug":"数据分区与数据复制","link":"#数据分区与数据复制","children":[]},{"level":3,"title":"键－值数据的分区","slug":"键-值数据的分区","link":"#键-值数据的分区","children":[]},{"level":3,"title":"分区与二级索引","slug":"分区与二级索引","link":"#分区与二级索引","children":[]},{"level":3,"title":"分区再均衡","slug":"分区再均衡","link":"#分区再均衡","children":[]},{"level":3,"title":"请求路由","slug":"请求路由","link":"#请求路由","children":[]}]},{"level":2,"title":"事务","slug":"事务","link":"#事务","children":[{"level":3,"title":"深入理解事务","slug":"深入理解事务","link":"#深入理解事务","children":[]},{"level":3,"title":"若隔离级别","slug":"若隔离级别","link":"#若隔离级别","children":[]},{"level":3,"title":"串行化","slug":"串行化","link":"#串行化","children":[]}]},{"level":2,"title":"分布式系统的挑战","slug":"分布式系统的挑战","link":"#分布式系统的挑战","children":[]},{"level":2,"title":"一致性和共识","slug":"一致性和共识","link":"#一致性和共识","children":[{"level":3,"title":"一致性保证","slug":"一致性保证","link":"#一致性保证","children":[]},{"level":3,"title":"可线性化","slug":"可线性化","link":"#可线性化","children":[]},{"level":3,"title":"顺序保证","slug":"顺序保证","link":"#顺序保证","children":[]},{"level":3,"title":"分布式事务与共识","slug":"分布式事务与共识","link":"#分布式事务与共识","children":[]}]}],"git":{"createdTime":1694447058000,"updatedTime":1695308094000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":44.87,"words":13462},"filePathRelative":"99.笔记/15.分布式/00.分布式综合/01.数据密集型应用系统设计笔记一.md","localizedDate":"2021年8月26日","excerpt":"<h1> 《数据密集型应用系统设计》笔记一之分布式数据系统</h1>\\n<p>出于以下目的，我们需要在多台机器上分布数据：</p>\\n<ul>\\n<li>扩展性：当数据量或者读写负载巨大，严重超出了单台机器的处理上限，需要将负载分散到多台机器上。</li>\\n<li>容错与高可用性：当单台机器（或者多台，以及网络甚至整个数据中心）出现故障，还希望应用系统可以继续工作，这时需要采用多台机器提供冗余。这样某些组件失效之后，冗余组件可以迅速接管。</li>\\n<li>延迟考虑：如果客户遍布世界各地，通常需要考虑在全球范围内部署服务，以方便用户就近访问最近数据中心所提供的服务，从而避免数据请求跨越了半个地球才能到达目标。</li>\\n</ul>","autoDesc":true}');export{e as data};
