const e=JSON.parse('{"key":"v-4e0c4341","path":"/pages/fc8f54/","title":"Kafka 集群","lang":"zh-CN","frontmatter":{"title":"Kafka 集群","date":"2021-04-29T08:17:17.000Z","category":["分布式","分布式通信","MQ","Kafka"],"tag":["MQ","Kafka"],"permalink":"/pages/fc8f54/","description":"Kafka 集群 Kafka 是一个分布式的、可水平扩展的、基于发布/订阅模式的、支持容错的消息系统。 Kafka 和 ZooKeeper Kafka 使用 Zookeeper 来维护集群成员的信息。每个 Broker 都有一个唯一标识符，这个标识符可以在配置文件里指定，也可以自动生成。在 Broker 启动的时候，它通过创建临时节点把自己的 ID 注册到 Zookeeper。Kafka 组件订阅 Zookeeper 的 /broker/ids 路径，当有 Broker 加入集群或退出集群时，这些组件就可以获得通知。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/fc8f54/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Kafka 集群"}],["meta",{"property":"og:description","content":"Kafka 集群 Kafka 是一个分布式的、可水平扩展的、基于发布/订阅模式的、支持容错的消息系统。 Kafka 和 ZooKeeper Kafka 使用 Zookeeper 来维护集群成员的信息。每个 Broker 都有一个唯一标识符，这个标识符可以在配置文件里指定，也可以自动生成。在 Broker 启动的时候，它通过创建临时节点把自己的 ID 注册到 Zookeeper。Kafka 组件订阅 Zookeeper 的 /broker/ids 路径，当有 Broker 加入集群或退出集群时，这些组件就可以获得通知。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T13:36:40.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"MQ"}],["meta",{"property":"article:tag","content":"Kafka"}],["meta",{"property":"article:published_time","content":"2021-04-29T08:17:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T13:36:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Kafka 集群\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-04-29T08:17:17.000Z\\",\\"dateModified\\":\\"2023-09-10T13:36:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Kafka 和 ZooKeeper","slug":"kafka-和-zookeeper","link":"#kafka-和-zookeeper","children":[]},{"level":2,"title":"控制器","slug":"控制器","link":"#控制器","children":[{"level":3,"title":"如何选举控制器","slug":"如何选举控制器","link":"#如何选举控制器","children":[]},{"level":3,"title":"控制器的作用","slug":"控制器的作用","link":"#控制器的作用","children":[]}]},{"level":2,"title":"副本机制","slug":"副本机制","link":"#副本机制","children":[{"level":3,"title":"Kafka 副本角色","slug":"kafka-副本角色","link":"#kafka-副本角色","children":[]},{"level":3,"title":"ISR","slug":"isr","link":"#isr","children":[]}]},{"level":2,"title":"选举 Leader","slug":"选举-leader-1","link":"#选举-leader-1","children":[{"level":3,"title":"Unclean 领导者选举","slug":"unclean-领导者选举","link":"#unclean-领导者选举","children":[]}]},{"level":2,"title":"处理请求","slug":"处理请求","link":"#处理请求","children":[{"level":3,"title":"元数据请求","slug":"元数据请求","link":"#元数据请求","children":[]},{"level":3,"title":"生产请求","slug":"生产请求","link":"#生产请求","children":[]},{"level":3,"title":"消费请求","slug":"消费请求","link":"#消费请求","children":[]},{"level":3,"title":"其他请求","slug":"其他请求","link":"#其他请求","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[{"level":3,"title":"副本机制","slug":"副本机制-1","link":"#副本机制-1","children":[]},{"level":3,"title":"选举机制","slug":"选举机制","link":"#选举机制","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694353000000,"updatedTime":1694353000000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":16.1,"words":4831},"filePathRelative":"15.分布式/21.分布式通信/02.MQ/01.Kafka/04.Kafka集群.md","localizedDate":"2021年4月29日","excerpt":"<h1> Kafka 集群</h1>\\n<blockquote>\\n<p>Kafka 是一个分布式的、可水平扩展的、基于发布/订阅模式的、支持容错的消息系统。</p>\\n</blockquote>\\n<h2> Kafka 和 ZooKeeper</h2>\\n<p><strong>Kafka 使用 Zookeeper 来维护集群成员的信息</strong>。每个 Broker 都有一个唯一标识符，这个标识符可以在配置文件里指定，也可以自动生成。在 Broker 启动的时候，它通过创建<strong>临时节点</strong>把自己的 ID 注册到 Zookeeper。Kafka 组件订阅 Zookeeper 的 <code>/broker/ids</code> 路径，当有 Broker 加入集群或退出集群时，这些组件就可以获得通知。</p>","autoDesc":true}');export{e as data};
