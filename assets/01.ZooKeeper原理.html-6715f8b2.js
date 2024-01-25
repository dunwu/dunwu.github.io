const e=JSON.parse('{"key":"v-57b327ed","path":"/15.%E5%88%86%E5%B8%83%E5%BC%8F/11.%E5%88%86%E5%B8%83%E5%BC%8F%E5%8D%8F%E5%90%8C/02.ZooKeeper/01.ZooKeeper%E5%8E%9F%E7%90%86.html","title":"ZooKeeper原理","lang":"zh-CN","frontmatter":{"title":"ZooKeeper原理","date":"2020-06-02T22:28:54.000Z","order":1,"category":["分布式","分布式协同","ZooKeeper"],"tag":["分布式","分布式协同"],"description":"ZooKeeper 原理 ZooKeeper 是 Apache 的顶级项目。ZooKeeper 为分布式应用提供了高效且可靠的分布式协调服务，提供了诸如统一命名服务、配置管理和分布式锁等分布式的基础服务。在解决分布式数据一致性方面，ZooKeeper 并没有直接采用 Paxos 算法，而是采用了名为 ZAB 的一致性协议。 ZooKeeper 主要用来解决分布式集群中应用系统的一致性问题，它能提供基于类似于文件系统的目录节点树方式的数据存储。但是 ZooKeeper 并不是用来专门存储数据的，它的作用主要是用来维护和监控存储数据的状态变化。通过监控这些数据状态的变化，从而可以达到基于数据的集群管理。 很多大名鼎鼎的框架都基于 ZooKeeper 来实现分布式高可用，如：Dubbo、Kafka 等。 ZooKeeper 官方支持 Java 和 C 的 Client API。ZooKeeper 社区为大多数语言（.NET，python 等）提供非官方 API。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/15.%E5%88%86%E5%B8%83%E5%BC%8F/11.%E5%88%86%E5%B8%83%E5%BC%8F%E5%8D%8F%E5%90%8C/02.ZooKeeper/01.ZooKeeper%E5%8E%9F%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"ZooKeeper原理"}],["meta",{"property":"og:description","content":"ZooKeeper 原理 ZooKeeper 是 Apache 的顶级项目。ZooKeeper 为分布式应用提供了高效且可靠的分布式协调服务，提供了诸如统一命名服务、配置管理和分布式锁等分布式的基础服务。在解决分布式数据一致性方面，ZooKeeper 并没有直接采用 Paxos 算法，而是采用了名为 ZAB 的一致性协议。 ZooKeeper 主要用来解决分布式集群中应用系统的一致性问题，它能提供基于类似于文件系统的目录节点树方式的数据存储。但是 ZooKeeper 并不是用来专门存储数据的，它的作用主要是用来维护和监控存储数据的状态变化。通过监控这些数据状态的变化，从而可以达到基于数据的集群管理。 很多大名鼎鼎的框架都基于 ZooKeeper 来实现分布式高可用，如：Dubbo、Kafka 等。 ZooKeeper 官方支持 Java 和 C 的 Client API。ZooKeeper 社区为大多数语言（.NET，python 等）提供非官方 API。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-24T23:58:37.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"分布式协同"}],["meta",{"property":"article:published_time","content":"2020-06-02T22:28:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-24T23:58:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ZooKeeper原理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-02T22:28:54.000Z\\",\\"dateModified\\":\\"2024-01-24T23:58:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"ZooKeeper 简介","slug":"zookeeper-简介","link":"#zookeeper-简介","children":[{"level":3,"title":"ZooKeeper 是什么","slug":"zookeeper-是什么","link":"#zookeeper-是什么","children":[]},{"level":3,"title":"ZooKeeper 的应用场景","slug":"zookeeper-的应用场景","link":"#zookeeper-的应用场景","children":[]},{"level":3,"title":"ZooKeeper 的特性","slug":"zookeeper-的特性","link":"#zookeeper-的特性","children":[]},{"level":3,"title":"ZooKeeper 的设计目标","slug":"zookeeper-的设计目标","link":"#zookeeper-的设计目标","children":[]}]},{"level":2,"title":"ZooKeeper 核心概念","slug":"zookeeper-核心概念","link":"#zookeeper-核心概念","children":[{"level":3,"title":"服务","slug":"服务","link":"#服务","children":[]},{"level":3,"title":"数据模型","slug":"数据模型","link":"#数据模型","children":[]},{"level":3,"title":"节点信息","slug":"节点信息","link":"#节点信息","children":[]},{"level":3,"title":"集群角色","slug":"集群角色","link":"#集群角色","children":[]},{"level":3,"title":"ACL","slug":"acl","link":"#acl","children":[]}]},{"level":2,"title":"ZooKeeper 工作原理","slug":"zookeeper-工作原理","link":"#zookeeper-工作原理","children":[{"level":3,"title":"读操作","slug":"读操作","link":"#读操作","children":[]},{"level":3,"title":"写操作","slug":"写操作","link":"#写操作","children":[]},{"level":3,"title":"事务","slug":"事务","link":"#事务","children":[]},{"level":3,"title":"观察","slug":"观察","link":"#观察","children":[]},{"level":3,"title":"会话","slug":"会话","link":"#会话","children":[]}]},{"level":2,"title":"ZAB 协议","slug":"zab-协议","link":"#zab-协议","children":[{"level":3,"title":"选举 Leader","slug":"选举-leader","link":"#选举-leader","children":[]},{"level":3,"title":"原子广播（Atomic Broadcast）","slug":"原子广播-atomic-broadcast","link":"#原子广播-atomic-broadcast","children":[]}]},{"level":2,"title":"ZooKeeper 应用","slug":"zookeeper-应用","link":"#zookeeper-应用","children":[{"level":3,"title":"命名服务","slug":"命名服务","link":"#命名服务","children":[]},{"level":3,"title":"配置管理","slug":"配置管理","link":"#配置管理","children":[]},{"level":3,"title":"分布式锁","slug":"分布式锁","link":"#分布式锁","children":[]},{"level":3,"title":"集群管理","slug":"集群管理","link":"#集群管理","children":[]},{"level":3,"title":"选举 Leader 节点","slug":"选举-leader-节点","link":"#选举-leader-节点","children":[]},{"level":3,"title":"队列管理","slug":"队列管理","link":"#队列管理","children":[]}]},{"level":2,"title":"ZooKeeper 的缺点","slug":"zookeeper-的缺点","link":"#zookeeper-的缺点","children":[{"level":3,"title":"ZooKeeper 不是为高可用性设计的","slug":"zookeeper-不是为高可用性设计的","link":"#zookeeper-不是为高可用性设计的","children":[]},{"level":3,"title":"ZooKeeper 的选举过程速度很慢","slug":"zookeeper-的选举过程速度很慢","link":"#zookeeper-的选举过程速度很慢","children":[]},{"level":3,"title":"ZooKeeper 的性能是有限的","slug":"zookeeper-的性能是有限的","link":"#zookeeper-的性能是有限的","children":[]},{"level":3,"title":"ZooKeeper 无法进行有效的权限控制","slug":"zookeeper-无法进行有效的权限控制","link":"#zookeeper-无法进行有效的权限控制","children":[]},{"level":3,"title":"即使有了 ZooKeeper 也很难避免业务系统的数据不一致","slug":"即使有了-zookeeper-也很难避免业务系统的数据不一致","link":"#即使有了-zookeeper-也很难避免业务系统的数据不一致","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1706140717000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":3}]},"readingTime":{"minutes":28.09,"words":8427},"filePathRelative":"15.分布式/11.分布式协同/02.ZooKeeper/01.ZooKeeper原理.md","localizedDate":"2020年6月2日","excerpt":"<h1> ZooKeeper 原理</h1>\\n<blockquote>\\n<p>ZooKeeper 是 Apache 的顶级项目。<strong>ZooKeeper 为分布式应用提供了高效且可靠的分布式协调服务，提供了诸如统一命名服务、配置管理和分布式锁等分布式的基础服务。在解决分布式数据一致性方面，ZooKeeper 并没有直接采用 Paxos 算法，而是采用了名为 ZAB 的一致性协议</strong>。</p>\\n<p>ZooKeeper 主要用来解决分布式集群中应用系统的一致性问题，它能提供基于类似于文件系统的目录节点树方式的数据存储。但是 ZooKeeper 并不是用来专门存储数据的，它的作用主要是用来<strong>维护和监控存储数据的状态变化。通过监控这些数据状态的变化，从而可以达到基于数据的集群管理</strong>。</p>\\n<p>很多大名鼎鼎的框架都基于 ZooKeeper 来实现分布式高可用，如：Dubbo、Kafka 等。</p>\\n<p>ZooKeeper 官方支持 Java 和 C 的 Client API。ZooKeeper 社区为大多数语言（.NET，python 等）提供非官方 API。</p>\\n</blockquote>","autoDesc":true}');export{e as data};
