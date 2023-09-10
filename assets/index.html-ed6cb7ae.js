const e=JSON.parse('{"key":"v-585d59a9","path":"/pages/1b41b6/","title":"ZooKeeper","lang":"zh-CN","frontmatter":{"title":"ZooKeeper","date":"2020-09-09T17:53:08.000Z","category":["分布式","分布式协同","ZooKeeper"],"tag":["分布式","分布式协同"],"permalink":"/pages/1b41b6/","hidden":true,"index":false,"description":"ZooKeeper ZooKeeper 是 Apache 的顶级项目。ZooKeeper 为分布式应用提供了高效且可靠的分布式协调服务，提供了诸如统一命名服务、配置管理和分布式锁等分布式的基础服务。在解决分布式数据一致性方面，ZooKeeper 并没有直接采用 Paxos 算法，而是采用了名为 ZAB 的一致性协议。 ZooKeeper 主要用来解决分布式集群中应用系统的一致性问题，它能提供基于类似于文件系统的目录节点树方式的数据存储。但是 ZooKeeper 并不是用来专门存储数据的，它的作用主要是用来维护和监控存储数据的状态变化。通过监控这些数据状态的变化，从而可以达到基于数据的集群管理。 很多大名鼎鼎的框架都基于 ZooKeeper 来实现分布式高可用，如：Dubbo、Kafka 等。 ZooKeeper 官方支持 Java 和 C 的 Client API。ZooKeeper 社区为大多数语言（.NET，python 等）提供非官方 API。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/1b41b6/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"ZooKeeper"}],["meta",{"property":"og:description","content":"ZooKeeper ZooKeeper 是 Apache 的顶级项目。ZooKeeper 为分布式应用提供了高效且可靠的分布式协调服务，提供了诸如统一命名服务、配置管理和分布式锁等分布式的基础服务。在解决分布式数据一致性方面，ZooKeeper 并没有直接采用 Paxos 算法，而是采用了名为 ZAB 的一致性协议。 ZooKeeper 主要用来解决分布式集群中应用系统的一致性问题，它能提供基于类似于文件系统的目录节点树方式的数据存储。但是 ZooKeeper 并不是用来专门存储数据的，它的作用主要是用来维护和监控存储数据的状态变化。通过监控这些数据状态的变化，从而可以达到基于数据的集群管理。 很多大名鼎鼎的框架都基于 ZooKeeper 来实现分布式高可用，如：Dubbo、Kafka 等。 ZooKeeper 官方支持 Java 和 C 的 Client API。ZooKeeper 社区为大多数语言（.NET，python 等）提供非官方 API。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T10:35:58.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"分布式协同"}],["meta",{"property":"article:published_time","content":"2020-09-09T17:53:08.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T10:35:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ZooKeeper\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-09-09T17:53:08.000Z\\",\\"dateModified\\":\\"2023-09-10T10:35:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"📖 内容","slug":"📖-内容","link":"#📖-内容","children":[{"level":3,"title":"ZooKeeper 原理","slug":"zookeeper-原理","link":"#zookeeper-原理","children":[]},{"level":3,"title":"ZooKeeper 命令","slug":"zookeeper-命令","link":"#zookeeper-命令","children":[]},{"level":3,"title":"ZooKeeper 运维","slug":"zookeeper-运维","link":"#zookeeper-运维","children":[]},{"level":3,"title":"ZooKeeper Java Api","slug":"zookeeper-java-api","link":"#zookeeper-java-api","children":[]},{"level":3,"title":"ZooKeeper Acl","slug":"zookeeper-acl","link":"#zookeeper-acl","children":[]}]},{"level":2,"title":"📚 资料","slug":"📚-资料","link":"#📚-资料","children":[]},{"level":2,"title":"🚪 传送","slug":"🚪-传送","link":"#🚪-传送","children":[]}],"git":{"createdTime":1694342158000,"updatedTime":1694342158000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":1.71,"words":513},"filePathRelative":"15.分布式/11.分布式协同/02.ZooKeeper/README.md","localizedDate":"2020年9月9日","excerpt":"<h1> ZooKeeper</h1>\\n<blockquote>\\n<p>ZooKeeper 是 Apache 的顶级项目。<strong>ZooKeeper 为分布式应用提供了高效且可靠的分布式协调服务，提供了诸如统一命名服务、配置管理和分布式锁等分布式的基础服务。在解决分布式数据一致性方面，ZooKeeper 并没有直接采用 Paxos 算法，而是采用了名为 ZAB 的一致性协议</strong>。</p>\\n<p>ZooKeeper 主要用来解决分布式集群中应用系统的一致性问题，它能提供基于类似于文件系统的目录节点树方式的数据存储。但是 ZooKeeper 并不是用来专门存储数据的，它的作用主要是用来<strong>维护和监控存储数据的状态变化。通过监控这些数据状态的变化，从而可以达到基于数据的集群管理</strong>。</p>\\n<p>很多大名鼎鼎的框架都基于 ZooKeeper 来实现分布式高可用，如：Dubbo、Kafka 等。</p>\\n<p>ZooKeeper 官方支持 Java 和 C 的 Client API。ZooKeeper 社区为大多数语言（.NET，python 等）提供非官方 API。</p>\\n</blockquote>","autoDesc":true}');export{e as data};
