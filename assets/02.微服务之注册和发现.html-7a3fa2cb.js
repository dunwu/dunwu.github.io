const e=JSON.parse('{"key":"v-7cbde340","path":"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/01.%E5%BE%AE%E6%9C%8D%E5%8A%A1/02.%E5%BE%AE%E6%9C%8D%E5%8A%A1%E4%B9%8B%E6%B3%A8%E5%86%8C%E5%92%8C%E5%8F%91%E7%8E%B0.html","title":"微服务之注册和发现","lang":"zh-CN","frontmatter":{"title":"微服务之注册和发现","date":"2023-05-15T19:08:50.000Z","order":2,"category":["设计","架构","微服务"],"tag":["设计","架构","微服务","分布式","注册中心"],"description":"微服务之注册和发现 服务注册和发现的基本原理 服务定义是服务提供者和服务消费者之间的约定，但是在微服务架构中，如何达成这个约定呢？这就依赖于服务注册和发现机制。 注册和发现的角色 在微服务架构下，服务注册和发现机制中主要有三种角色： 服务提供者（RPC Server / Provider） 服务消费者（RPC Client / Consumer） 服务注册中心（Registry）","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/01.%E5%BE%AE%E6%9C%8D%E5%8A%A1/02.%E5%BE%AE%E6%9C%8D%E5%8A%A1%E4%B9%8B%E6%B3%A8%E5%86%8C%E5%92%8C%E5%8F%91%E7%8E%B0.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"微服务之注册和发现"}],["meta",{"property":"og:description","content":"微服务之注册和发现 服务注册和发现的基本原理 服务定义是服务提供者和服务消费者之间的约定，但是在微服务架构中，如何达成这个约定呢？这就依赖于服务注册和发现机制。 注册和发现的角色 在微服务架构下，服务注册和发现机制中主要有三种角色： 服务提供者（RPC Server / Provider） 服务消费者（RPC Client / Consumer） 服务注册中心（Registry）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T15:44:18.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"设计"}],["meta",{"property":"article:tag","content":"架构"}],["meta",{"property":"article:tag","content":"微服务"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"注册中心"}],["meta",{"property":"article:published_time","content":"2023-05-15T19:08:50.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T15:44:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"微服务之注册和发现\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-15T19:08:50.000Z\\",\\"dateModified\\":\\"2023-09-11T15:44:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"服务注册和发现的基本原理","slug":"服务注册和发现的基本原理","link":"#服务注册和发现的基本原理","children":[{"level":3,"title":"注册和发现的角色","slug":"注册和发现的角色","link":"#注册和发现的角色","children":[]},{"level":3,"title":"应用内注册与发现","slug":"应用内注册与发现","link":"#应用内注册与发现","children":[]},{"level":3,"title":"应用外注册与发现","slug":"应用外注册与发现","link":"#应用外注册与发现","children":[]}]},{"level":2,"title":"注册中心的基本功能","slug":"注册中心的基本功能","link":"#注册中心的基本功能","children":[{"level":3,"title":"元数据定义","slug":"元数据定义","link":"#元数据定义","children":[]},{"level":3,"title":"元数据存储","slug":"元数据存储","link":"#元数据存储","children":[]},{"level":3,"title":"注册中心 API","slug":"注册中心-api","link":"#注册中心-api","children":[]},{"level":3,"title":"服务健康检测","slug":"服务健康检测","link":"#服务健康检测","children":[]},{"level":3,"title":"服务状态变更通知","slug":"服务状态变更通知","link":"#服务状态变更通知","children":[]},{"level":3,"title":"集群部署","slug":"集群部署","link":"#集群部署","children":[]}]},{"level":2,"title":"注册中心的扩展功能","slug":"注册中心的扩展功能","link":"#注册中心的扩展功能","children":[{"level":3,"title":"多注册中心","slug":"多注册中心","link":"#多注册中心","children":[]},{"level":3,"title":"并行订阅服务","slug":"并行订阅服务","link":"#并行订阅服务","children":[]},{"level":3,"title":"批量注销服务","slug":"批量注销服务","link":"#批量注销服务","children":[]},{"level":3,"title":"服务变更信息增量更新","slug":"服务变更信息增量更新","link":"#服务变更信息增量更新","children":[]},{"level":3,"title":"心跳开关保护机制","slug":"心跳开关保护机制","link":"#心跳开关保护机制","children":[]},{"level":3,"title":"服务节点摘除保护机制","slug":"服务节点摘除保护机制","link":"#服务节点摘除保护机制","children":[]},{"level":3,"title":"白名单机制","slug":"白名单机制","link":"#白名单机制","children":[]},{"level":3,"title":"静态注册中心","slug":"静态注册中心","link":"#静态注册中心","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1694447058000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":21.35,"words":6406},"filePathRelative":"03.设计/01.架构/01.微服务/02.微服务之注册和发现.md","localizedDate":"2023年5月15日","excerpt":"<h1> 微服务之注册和发现</h1>\\n<h2> 服务注册和发现的基本原理</h2>\\n<p>服务定义是服务提供者和服务消费者之间的约定，但是在微服务架构中，如何达成这个约定呢？这就依赖于服务注册和发现机制。</p>\\n<h3> 注册和发现的角色</h3>\\n<p>在微服务架构下，服务注册和发现机制中主要有三种角色：</p>\\n<ul>\\n<li><strong>服务提供者</strong>（RPC Server / Provider）</li>\\n<li><strong>服务消费者</strong>（RPC Client / Consumer）</li>\\n<li><strong>服务注册中心</strong>（Registry）</li>\\n</ul>","autoDesc":true}');export{e as data};
