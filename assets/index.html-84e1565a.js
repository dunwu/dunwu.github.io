const e=JSON.parse('{"key":"v-020003ec","path":"/pages/f5f5ef/","title":"《Kafka 核心源码解读》笔记","lang":"zh-CN","frontmatter":{"title":"《Kafka 核心源码解读》笔记","date":"2022-07-03T14:53:05.000Z","category":["笔记","分布式","分布式通信"],"tag":["分布式","分布式通信","MQ","Kafka"],"permalink":"/pages/f5f5ef/","description":"《Kafka 核心源码解读》笔记 开篇词 从功能上讲，Kafka 源码分为四大模块。 服务器端源码：实现 Kafka 架构和各类优秀特性的基础。 Java 客户端源码：定义了与 Broker 端的交互机制，以及通用的 Broker 端组件支撑代码。 Connect 源码：用于实现 Kafka 与外部系统的高性能数据传输。 Streams 源码：用于实现实时的流处理功能。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/f5f5ef/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"《Kafka 核心源码解读》笔记"}],["meta",{"property":"og:description","content":"《Kafka 核心源码解读》笔记 开篇词 从功能上讲，Kafka 源码分为四大模块。 服务器端源码：实现 Kafka 架构和各类优秀特性的基础。 Java 客户端源码：定义了与 Broker 端的交互机制，以及通用的 Broker 端组件支撑代码。 Connect 源码：用于实现 Kafka 与外部系统的高性能数据传输。 Streams 源码：用于实现实时的流处理功能。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T13:36:40.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"分布式通信"}],["meta",{"property":"article:tag","content":"MQ"}],["meta",{"property":"article:tag","content":"Kafka"}],["meta",{"property":"article:published_time","content":"2022-07-03T14:53:05.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T13:36:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《Kafka 核心源码解读》笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-03T14:53:05.000Z\\",\\"dateModified\\":\\"2023-09-10T13:36:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"开篇词","slug":"开篇词","link":"#开篇词","children":[]},{"level":2,"title":"导读","slug":"导读","link":"#导读","children":[]},{"level":2,"title":"日志段","slug":"日志段","link":"#日志段","children":[{"level":3,"title":"Kafka 日志结构","slug":"kafka-日志结构","link":"#kafka-日志结构","children":[]},{"level":3,"title":"日志段源码解析","slug":"日志段源码解析","link":"#日志段源码解析","children":[]}]},{"level":2,"title":"日志","slug":"日志","link":"#日志","children":[{"level":3,"title":"Log 源码结构","slug":"log-源码结构","link":"#log-源码结构","children":[]},{"level":3,"title":"Log Class & Object","slug":"log-class-object","link":"#log-class-object","children":[]},{"level":3,"title":"LOG 类初始化逻辑","slug":"log-类初始化逻辑","link":"#log-类初始化逻辑","children":[]},{"level":3,"title":"Log 的常见操作","slug":"log-的常见操作","link":"#log-的常见操作","children":[]}]},{"level":2,"title":"索引","slug":"索引","link":"#索引","children":[{"level":3,"title":"索引类图及源文件组织架构","slug":"索引类图及源文件组织架构","link":"#索引类图及源文件组织架构","children":[]},{"level":3,"title":"AbstractIndex 代码结构","slug":"abstractindex-代码结构","link":"#abstractindex-代码结构","children":[]},{"level":3,"title":"位移索引","slug":"位移索引","link":"#位移索引","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694353000000,"updatedTime":1694353000000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":20.56,"words":6167},"filePathRelative":"99.笔记/15.分布式/21.分布式通信/13.Kafka核心源码解读笔记.md","localizedDate":"2022年7月3日","excerpt":"<h1> 《Kafka 核心源码解读》笔记</h1>\\n<h2> 开篇词</h2>\\n<figure><img src=\\"https://raw.githubusercontent.com/dunwu/images/dev/snap/20220703152740.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>从功能上讲，Kafka 源码分为四大模块。</p>\\n<ul>\\n<li>服务器端源码：实现 Kafka 架构和各类优秀特性的基础。</li>\\n<li>Java 客户端源码：定义了与 Broker 端的交互机制，以及通用的 Broker 端组件支撑代码。</li>\\n<li>Connect 源码：用于实现 Kafka 与外部系统的高性能数据传输。</li>\\n<li>Streams 源码：用于实现实时的流处理功能。</li>\\n</ul>","autoDesc":true}');export{e as data};
