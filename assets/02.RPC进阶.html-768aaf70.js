const e=JSON.parse('{"key":"v-7a8d316d","path":"/15.%E5%88%86%E5%B8%83%E5%BC%8F/21.%E5%88%86%E5%B8%83%E5%BC%8F%E9%80%9A%E4%BF%A1/01.RPC/00.RPC%E7%BB%BC%E5%90%88/02.RPC%E8%BF%9B%E9%98%B6.html","title":"RPC 进阶篇","lang":"zh-CN","frontmatter":{"title":"RPC 进阶篇","date":"2022-06-19T22:04:59.000Z","order":2,"category":["分布式","分布式通信","RPC","RPC综合"],"tag":["分布式","分布式应用","微服务","RPC"],"description":"RPC 进阶篇 RPC 架构模型 了解前面的知识点（序列化、动态代理、通信），其实已经可以实现一个点对点的 RPC 架构了。 采用微内核架构的 RPC 架构模型： img 在 RPC 框架里面，怎么支持插件化架构的呢？我们可以将每个功能点抽象成一个接 口，将这个接口作为插件的契约，然后把这个功能的接口与功能的实现分离，并提供接口的默认实现。在 Java 里面，JDK 有自带的 SPI（Service Provider Interface）服务发现机 制，它可以动态地为某个接口寻找服务实现。使用 SPI 机制需要在 Classpath 下的 META-INF/services 目录里创建一个以服务接口命名的文件，这个文件里的内容就是这个接口的具体实现类。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/15.%E5%88%86%E5%B8%83%E5%BC%8F/21.%E5%88%86%E5%B8%83%E5%BC%8F%E9%80%9A%E4%BF%A1/01.RPC/00.RPC%E7%BB%BC%E5%90%88/02.RPC%E8%BF%9B%E9%98%B6.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"RPC 进阶篇"}],["meta",{"property":"og:description","content":"RPC 进阶篇 RPC 架构模型 了解前面的知识点（序列化、动态代理、通信），其实已经可以实现一个点对点的 RPC 架构了。 采用微内核架构的 RPC 架构模型： img 在 RPC 框架里面，怎么支持插件化架构的呢？我们可以将每个功能点抽象成一个接 口，将这个接口作为插件的契约，然后把这个功能的接口与功能的实现分离，并提供接口的默认实现。在 Java 里面，JDK 有自带的 SPI（Service Provider Interface）服务发现机 制，它可以动态地为某个接口寻找服务实现。使用 SPI 机制需要在 Classpath 下的 META-INF/services 目录里创建一个以服务接口命名的文件，这个文件里的内容就是这个接口的具体实现类。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T14:54:54.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"分布式应用"}],["meta",{"property":"article:tag","content":"微服务"}],["meta",{"property":"article:tag","content":"RPC"}],["meta",{"property":"article:published_time","content":"2022-06-19T22:04:59.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-21T14:54:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RPC 进阶篇\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-19T22:04:59.000Z\\",\\"dateModified\\":\\"2023-09-21T14:54:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"RPC 架构模型","slug":"rpc-架构模型","link":"#rpc-架构模型","children":[]},{"level":2,"title":"服务注册和发现","slug":"服务注册和发现","link":"#服务注册和发现","children":[{"level":3,"title":"基于 ZooKeeper 的服务发现","slug":"基于-zookeeper-的服务发现","link":"#基于-zookeeper-的服务发现","children":[]},{"level":3,"title":"基于消息总线的最终一致性的注册中心","slug":"基于消息总线的最终一致性的注册中心","link":"#基于消息总线的最终一致性的注册中心","children":[]}]},{"level":2,"title":"健康检查","slug":"健康检查","link":"#健康检查","children":[]},{"level":2,"title":"路由和负载均衡","slug":"路由和负载均衡","link":"#路由和负载均衡","children":[{"level":3,"title":"超时重试","slug":"超时重试","link":"#超时重试","children":[]},{"level":3,"title":"限流、降级、熔断","slug":"限流、降级、熔断","link":"#限流、降级、熔断","children":[]},{"level":3,"title":"优雅启动关闭","slug":"优雅启动关闭","link":"#优雅启动关闭","children":[]}]},{"level":2,"title":"容错处理","slug":"容错处理","link":"#容错处理","children":[{"level":3,"title":"异常重试","slug":"异常重试","link":"#异常重试","children":[]},{"level":3,"title":"重试超时时间","slug":"重试超时时间","link":"#重试超时时间","children":[]},{"level":3,"title":"业务异常","slug":"业务异常","link":"#业务异常","children":[]}]},{"level":2,"title":"优雅上线下线","slug":"优雅上线下线","link":"#优雅上线下线","children":[{"level":3,"title":"优雅下线","slug":"优雅下线","link":"#优雅下线","children":[]},{"level":3,"title":"优雅上线","slug":"优雅上线","link":"#优雅上线","children":[]}]},{"level":2,"title":"限流熔断","slug":"限流熔断","link":"#限流熔断","children":[]},{"level":2,"title":"业务分组","slug":"业务分组","link":"#业务分组","children":[{"level":3,"title":"动态分组","slug":"动态分组","link":"#动态分组","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1695308094000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":3}]},"readingTime":{"minutes":13.95,"words":4185},"filePathRelative":"15.分布式/21.分布式通信/01.RPC/00.RPC综合/02.RPC进阶.md","localizedDate":"2022年6月19日","excerpt":"<h1> RPC 进阶篇</h1>\\n<h2> RPC 架构模型</h2>\\n<p>了解前面的知识点（序列化、动态代理、通信），其实已经可以实现一个点对点的 RPC 架构了。</p>\\n<p>采用微内核架构的 RPC 架构模型：</p>\\n<figure><img src=\\"https://raw.githubusercontent.com/dunwu/images/master/snap/20200610164920.png\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>img</figcaption></figure>\\n<p>在 RPC 框架里面，怎么支持插件化架构的呢？我们可以将每个功能点抽象成一个接<br>\\n口，将这个接口作为插件的契约，然后把这个功能的接口与功能的实现分离，并提供接口的默认实现。在 Java 里面，JDK 有自带的 SPI（Service Provider Interface）服务发现机<br>\\n制，它可以动态地为某个接口寻找服务实现。使用 SPI 机制需要在 Classpath 下的 <code>META-INF/services</code> 目录里创建一个以服务接口命名的文件，这个文件里的内容就是这个接口的具体实现类。</p>","autoDesc":true}');export{e as data};
