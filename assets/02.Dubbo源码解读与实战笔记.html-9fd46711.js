const e=JSON.parse('{"key":"v-380d59be","path":"/99.%E7%AC%94%E8%AE%B0/15.%E5%88%86%E5%B8%83%E5%BC%8F/21.%E5%88%86%E5%B8%83%E5%BC%8F%E9%80%9A%E4%BF%A1/02.Dubbo%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB%E4%B8%8E%E5%AE%9E%E6%88%98%E7%AC%94%E8%AE%B0.html","title":"《Dubbo 源码解读与实战》笔记","lang":"zh-CN","frontmatter":{"title":"《Dubbo 源码解读与实战》笔记","date":"2023-06-25T19:24:38.000Z","order":2,"category":["笔记","分布式","分布式通信"],"tag":["分布式","分布式通信","RPC","Dubbo"],"description":"《Dubbo 源码解读与实战》笔记 开篇词 深入掌握 Dubbo 原理与实现，提升你的职场竞争力 Apache Dubbo是一款高性能、轻量级的开源 Java RPC 框架，它提供了三大核心能力： 面向接口的远程方法调用； 可靠、智能的容错和负载均衡； 服务自动注册和发现能力。 Dubbo 是一个分布式服务框架，致力于提供高性能、透明化的 RPC 远程服务调用方案以及服务治理方案，以帮助我们解决微服务架构落地时的问题。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/99.%E7%AC%94%E8%AE%B0/15.%E5%88%86%E5%B8%83%E5%BC%8F/21.%E5%88%86%E5%B8%83%E5%BC%8F%E9%80%9A%E4%BF%A1/02.Dubbo%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB%E4%B8%8E%E5%AE%9E%E6%88%98%E7%AC%94%E8%AE%B0.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"《Dubbo 源码解读与实战》笔记"}],["meta",{"property":"og:description","content":"《Dubbo 源码解读与实战》笔记 开篇词 深入掌握 Dubbo 原理与实现，提升你的职场竞争力 Apache Dubbo是一款高性能、轻量级的开源 Java RPC 框架，它提供了三大核心能力： 面向接口的远程方法调用； 可靠、智能的容错和负载均衡； 服务自动注册和发现能力。 Dubbo 是一个分布式服务框架，致力于提供高性能、透明化的 RPC 远程服务调用方案以及服务治理方案，以帮助我们解决微服务架构落地时的问题。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T15:44:18.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"分布式通信"}],["meta",{"property":"article:tag","content":"RPC"}],["meta",{"property":"article:tag","content":"Dubbo"}],["meta",{"property":"article:published_time","content":"2023-06-25T19:24:38.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T15:44:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《Dubbo 源码解读与实战》笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-25T19:24:38.000Z\\",\\"dateModified\\":\\"2023-09-11T15:44:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"开篇词 深入掌握 Dubbo 原理与实现，提升你的职场竞争力","slug":"开篇词-深入掌握-dubbo-原理与实现-提升你的职场竞争力","link":"#开篇词-深入掌握-dubbo-原理与实现-提升你的职场竞争力","children":[]},{"level":2,"title":"Dubbo 源码环境搭建：千里之行，始于足下","slug":"dubbo-源码环境搭建-千里之行-始于足下","link":"#dubbo-源码环境搭建-千里之行-始于足下","children":[{"level":3,"title":"Dubbo 核心组件","slug":"dubbo-核心组件","link":"#dubbo-核心组件","children":[]},{"level":3,"title":"Dubbo 核心模块","slug":"dubbo-核心模块","link":"#dubbo-核心模块","children":[]}]},{"level":2,"title":"Dubbo 的配置总线：抓住 URL，就理解了半个 Dubbo","slug":"dubbo-的配置总线-抓住-url-就理解了半个-dubbo","link":"#dubbo-的配置总线-抓住-url-就理解了半个-dubbo","children":[{"level":3,"title":"Dubbo 中的 URL 示例","slug":"dubbo-中的-url-示例","link":"#dubbo-中的-url-示例","children":[]}]},{"level":2,"title":"Dubbo SPI 精析，接口实现两极反转（上）","slug":"dubbo-spi-精析-接口实现两极反转-上","link":"#dubbo-spi-精析-接口实现两极反转-上","children":[]},{"level":2,"title":"Dubbo SPI 精析，接口实现两极反转（下）","slug":"dubbo-spi-精析-接口实现两极反转-下","link":"#dubbo-spi-精析-接口实现两极反转-下","children":[{"level":3,"title":"SPI 核心实现","slug":"spi-核心实现","link":"#spi-核心实现","children":[]}]},{"level":2,"title":"海量定时任务，一个时间轮搞定","slug":"海量定时任务-一个时间轮搞定","link":"#海量定时任务-一个时间轮搞定","children":[]},{"level":2,"title":"ZooKeeper 与 Curator，求你别用 ZkClient 了（上）","slug":"zookeeper-与-curator-求你别用-zkclient-了-上","link":"#zookeeper-与-curator-求你别用-zkclient-了-上","children":[]},{"level":2,"title":"ZooKeeper 与 Curator，求你别用 ZkClient 了（下）","slug":"zookeeper-与-curator-求你别用-zkclient-了-下","link":"#zookeeper-与-curator-求你别用-zkclient-了-下","children":[]},{"level":2,"title":"代理模式与常见实现","slug":"代理模式与常见实现","link":"#代理模式与常见实现","children":[{"level":3,"title":"JDK 动态代理","slug":"jdk-动态代理","link":"#jdk-动态代理","children":[]},{"level":3,"title":"CGLIB","slug":"cglib","link":"#cglib","children":[]},{"level":3,"title":"Javassist","slug":"javassist","link":"#javassist","children":[]}]},{"level":2,"title":"Netty 入门，用它做网络编程都说好（上）","slug":"netty-入门-用它做网络编程都说好-上","link":"#netty-入门-用它做网络编程都说好-上","children":[{"level":3,"title":"Netty I/O 模型设计","slug":"netty-i-o-模型设计","link":"#netty-i-o-模型设计","children":[]},{"level":3,"title":"Netty 线程模型设计","slug":"netty-线程模型设计","link":"#netty-线程模型设计","children":[]}]},{"level":2,"title":"Netty 入门，用它做网络编程都说好（下）","slug":"netty-入门-用它做网络编程都说好-下","link":"#netty-入门-用它做网络编程都说好-下","children":[{"level":3,"title":"Channel","slug":"channel","link":"#channel","children":[]},{"level":3,"title":"ChannelFuture","slug":"channelfuture","link":"#channelfuture","children":[]},{"level":3,"title":"Selector","slug":"selector","link":"#selector","children":[]}]},{"level":2,"title":"简易版 RPC 框架实现（上）","slug":"简易版-rpc-框架实现-上","link":"#简易版-rpc-框架实现-上","children":[]},{"level":2,"title":"简易版 RPC 框架实现（下）","slug":"简易版-rpc-框架实现-下","link":"#简易版-rpc-框架实现-下","children":[]},{"level":2,"title":"本地缓存：降低 ZooKeeper 压力的一个常用手段","slug":"本地缓存-降低-zookeeper-压力的一个常用手段","link":"#本地缓存-降低-zookeeper-压力的一个常用手段","children":[]},{"level":2,"title":"重试机制是网络操作的基本保证","slug":"重试机制是网络操作的基本保证","link":"#重试机制是网络操作的基本保证","children":[]},{"level":2,"title":"ZooKeeper 注册中心实现，官方推荐注册中心实践","slug":"zookeeper-注册中心实现-官方推荐注册中心实践","link":"#zookeeper-注册中心实现-官方推荐注册中心实践","children":[]},{"level":2,"title":"Dubbo Serialize 层：多种序列化算法，总有一款适合你","slug":"dubbo-serialize-层-多种序列化算法-总有一款适合你","link":"#dubbo-serialize-层-多种序列化算法-总有一款适合你","children":[]},{"level":2,"title":"Dubbo Remoting 层核心接口分析：这居然是一套兼容所有 NIO 框架的设计？","slug":"dubbo-remoting-层核心接口分析-这居然是一套兼容所有-nio-框架的设计","link":"#dubbo-remoting-层核心接口分析-这居然是一套兼容所有-nio-框架的设计","children":[]},{"level":2,"title":"Buffer 缓冲区：我们不生产数据，我们只是数据的搬运工","slug":"buffer-缓冲区-我们不生产数据-我们只是数据的搬运工","link":"#buffer-缓冲区-我们不生产数据-我们只是数据的搬运工","children":[]},{"level":2,"title":"Transporter 层核心实现：编解码与线程模型一文打尽（上）","slug":"transporter-层核心实现-编解码与线程模型一文打尽-上","link":"#transporter-层核心实现-编解码与线程模型一文打尽-上","children":[]},{"level":2,"title":"Transporter 层核心实现：编解码与线程模型一文打尽（下）","slug":"transporter-层核心实现-编解码与线程模型一文打尽-下","link":"#transporter-层核心实现-编解码与线程模型一文打尽-下","children":[]},{"level":2,"title":"Exchange 层剖析：彻底搞懂 Request-Response 模型（上）","slug":"exchange-层剖析-彻底搞懂-request-response-模型-上","link":"#exchange-层剖析-彻底搞懂-request-response-模型-上","children":[]},{"level":2,"title":"Exchange 层剖析：彻底搞懂 Request-Response 模型（下）","slug":"exchange-层剖析-彻底搞懂-request-response-模型-下","link":"#exchange-层剖析-彻底搞懂-request-response-模型-下","children":[]},{"level":2,"title":"核心接口介绍，RPC 层骨架梳理","slug":"核心接口介绍-rpc-层骨架梳理","link":"#核心接口介绍-rpc-层骨架梳理","children":[]},{"level":2,"title":"从 Protocol 起手，看服务暴露和服务引用的全流程（上）","slug":"从-protocol-起手-看服务暴露和服务引用的全流程-上","link":"#从-protocol-起手-看服务暴露和服务引用的全流程-上","children":[]},{"level":2,"title":"从 Protocol 起手，看服务暴露和服务引用的全流程（下）","slug":"从-protocol-起手-看服务暴露和服务引用的全流程-下","link":"#从-protocol-起手-看服务暴露和服务引用的全流程-下","children":[]},{"level":2,"title":"加餐：直击 Dubbo “心脏”，带你一起探秘 Invoker（上）","slug":"加餐-直击-dubbo-心脏-带你一起探秘-invoker-上","link":"#加餐-直击-dubbo-心脏-带你一起探秘-invoker-上","children":[]},{"level":2,"title":"加餐：直击 Dubbo “心脏”，带你一起探秘 Invoker（下）","slug":"加餐-直击-dubbo-心脏-带你一起探秘-invoker-下","link":"#加餐-直击-dubbo-心脏-带你一起探秘-invoker-下","children":[]},{"level":2,"title":"复杂问题简单化，代理帮你隐藏了多少底层细节？","slug":"复杂问题简单化-代理帮你隐藏了多少底层细节","link":"#复杂问题简单化-代理帮你隐藏了多少底层细节","children":[]},{"level":2,"title":"加餐：HTTP 协议 + JSON-RPC，Dubbo 跨语言就是如此简单","slug":"加餐-http-协议-json-rpc-dubbo-跨语言就是如此简单","link":"#加餐-http-协议-json-rpc-dubbo-跨语言就是如此简单","children":[]},{"level":2,"title":"Filter 接口，扩展 Dubbo 框架的常用手段指北","slug":"filter-接口-扩展-dubbo-框架的常用手段指北","link":"#filter-接口-扩展-dubbo-框架的常用手段指北","children":[]},{"level":2,"title":"加餐：深潜 Directory 实现，探秘服务目录玄机","slug":"加餐-深潜-directory-实现-探秘服务目录玄机","link":"#加餐-深潜-directory-实现-探秘服务目录玄机","children":[]},{"level":2,"title":"路由机制：请求到底怎么走，它说了算（上）","slug":"路由机制-请求到底怎么走-它说了算-上","link":"#路由机制-请求到底怎么走-它说了算-上","children":[]},{"level":2,"title":"路由机制：请求到底怎么走，它说了算（下）","slug":"路由机制-请求到底怎么走-它说了算-下","link":"#路由机制-请求到底怎么走-它说了算-下","children":[]},{"level":2,"title":"加餐：初探 Dubbo 动态配置的那些事儿","slug":"加餐-初探-dubbo-动态配置的那些事儿","link":"#加餐-初探-dubbo-动态配置的那些事儿","children":[]},{"level":2,"title":"负载均衡：公平公正物尽其用的负载均衡策略，这里都有（上）","slug":"负载均衡-公平公正物尽其用的负载均衡策略-这里都有-上","link":"#负载均衡-公平公正物尽其用的负载均衡策略-这里都有-上","children":[]},{"level":2,"title":"负载均衡：公平公正物尽其用的负载均衡策略，这里都有（下）","slug":"负载均衡-公平公正物尽其用的负载均衡策略-这里都有-下","link":"#负载均衡-公平公正物尽其用的负载均衡策略-这里都有-下","children":[]},{"level":2,"title":"集群容错：一个好汉三个帮（上）","slug":"集群容错-一个好汉三个帮-上","link":"#集群容错-一个好汉三个帮-上","children":[]},{"level":2,"title":"集群容错：一个好汉三个帮（下）","slug":"集群容错-一个好汉三个帮-下","link":"#集群容错-一个好汉三个帮-下","children":[]},{"level":2,"title":"加餐：多个返回值不用怕，Merger 合并器来帮忙","slug":"加餐-多个返回值不用怕-merger-合并器来帮忙","link":"#加餐-多个返回值不用怕-merger-合并器来帮忙","children":[]},{"level":2,"title":"加餐：模拟远程调用，Mock 机制帮你搞定","slug":"加餐-模拟远程调用-mock-机制帮你搞定","link":"#加餐-模拟远程调用-mock-机制帮你搞定","children":[]},{"level":2,"title":"加餐：一键通关服务发布全流程","slug":"加餐-一键通关服务发布全流程","link":"#加餐-一键通关服务发布全流程","children":[]},{"level":2,"title":"加餐：服务引用流程全解析","slug":"加餐-服务引用流程全解析","link":"#加餐-服务引用流程全解析","children":[]},{"level":2,"title":"服务自省设计方案：新版本新方案","slug":"服务自省设计方案-新版本新方案","link":"#服务自省设计方案-新版本新方案","children":[]},{"level":2,"title":"元数据方案深度剖析，如何避免注册中心数据量膨胀？","slug":"元数据方案深度剖析-如何避免注册中心数据量膨胀","link":"#元数据方案深度剖析-如何避免注册中心数据量膨胀","children":[]},{"level":2,"title":"加餐：深入服务自省方案中的服务发布订阅（上）","slug":"加餐-深入服务自省方案中的服务发布订阅-上","link":"#加餐-深入服务自省方案中的服务发布订阅-上","children":[]},{"level":2,"title":"加餐：深入服务自省方案中的服务发布订阅（下）","slug":"加餐-深入服务自省方案中的服务发布订阅-下","link":"#加餐-深入服务自省方案中的服务发布订阅-下","children":[]},{"level":2,"title":"配置中心设计与实现：集中化配置 and 本地化配置，我都要（上）","slug":"配置中心设计与实现-集中化配置-and-本地化配置-我都要-上","link":"#配置中心设计与实现-集中化配置-and-本地化配置-我都要-上","children":[]},{"level":2,"title":"配置中心设计与实现：集中化配置 and 本地化配置，我都要（下）","slug":"配置中心设计与实现-集中化配置-and-本地化配置-我都要-下","link":"#配置中心设计与实现-集中化配置-and-本地化配置-我都要-下","children":[]},{"level":2,"title":"结束语 认真学习，缩小差距","slug":"结束语-认真学习-缩小差距","link":"#结束语-认真学习-缩小差距","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1694447058000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":20.61,"words":6183},"filePathRelative":"99.笔记/15.分布式/21.分布式通信/02.Dubbo源码解读与实战笔记.md","localizedDate":"2023年6月25日","excerpt":"<h1> 《Dubbo 源码解读与实战》笔记</h1>\\n<h2> 开篇词 深入掌握 Dubbo 原理与实现，提升你的职场竞争力</h2>\\n<p><a href=\\"http://dubbo.apache.org/zh-cn/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Apache Dubbo</a>是一款高性能、轻量级的开源 Java RPC 框架，它提供了三大核心能力：</p>\\n<ul>\\n<li>面向接口的远程方法调用；</li>\\n<li>可靠、智能的容错和负载均衡；</li>\\n<li>服务自动注册和发现能力。</li>\\n</ul>\\n<p><strong>Dubbo 是一个分布式服务框架，致力于提供高性能、透明化的 RPC 远程服务调用方案以及服务治理方案，以帮助我们解决微服务架构落地时的问题。</strong></p>","autoDesc":true}');export{e as data};
