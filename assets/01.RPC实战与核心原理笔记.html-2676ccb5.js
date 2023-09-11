const l=JSON.parse('{"key":"v-0c8b160a","path":"/99.%E7%AC%94%E8%AE%B0/15.%E5%88%86%E5%B8%83%E5%BC%8F/21.%E5%88%86%E5%B8%83%E5%BC%8F%E9%80%9A%E4%BF%A1/01.RPC%E5%AE%9E%E6%88%98%E4%B8%8E%E6%A0%B8%E5%BF%83%E5%8E%9F%E7%90%86%E7%AC%94%E8%AE%B0.html","title":"《RPC 实战与核心原理》笔记","lang":"zh-CN","frontmatter":{"title":"《RPC 实战与核心原理》笔记","date":"2022-06-19T09:48:17.000Z","order":1,"category":["笔记","分布式","分布式通信"],"tag":["分布式","分布式通信","RPC"],"description":"《RPC 实战与核心原理》笔记 别老想着怎么用好 RPC 框架，你得多花时间琢磨原理 为什么要学习 RPC RPC 不仅是微服务的架构基础，实际上，只要涉及网络通信，就可能用到 RPC。 例 1：大型分布式应用系统可能会依赖消息队列、分布式缓存、分布式数据库以及统一配置中心等，应用程序与依赖的这些中间件之间都可以通过 RPC 进行通信。比如 etcd，它作为一个统一的配置服务，客户端就是通过 gRPC 框架与服务端进行通信的。 例 2：我们经常会谈到的容器编排引擎 Kubernetes，它本身就是分布式的，Kubernetes 的 kube-apiserver 与整个分布式集群中的每个组件间的通讯，都是通过 gRPC 框架进行的。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/99.%E7%AC%94%E8%AE%B0/15.%E5%88%86%E5%B8%83%E5%BC%8F/21.%E5%88%86%E5%B8%83%E5%BC%8F%E9%80%9A%E4%BF%A1/01.RPC%E5%AE%9E%E6%88%98%E4%B8%8E%E6%A0%B8%E5%BF%83%E5%8E%9F%E7%90%86%E7%AC%94%E8%AE%B0.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"《RPC 实战与核心原理》笔记"}],["meta",{"property":"og:description","content":"《RPC 实战与核心原理》笔记 别老想着怎么用好 RPC 框架，你得多花时间琢磨原理 为什么要学习 RPC RPC 不仅是微服务的架构基础，实际上，只要涉及网络通信，就可能用到 RPC。 例 1：大型分布式应用系统可能会依赖消息队列、分布式缓存、分布式数据库以及统一配置中心等，应用程序与依赖的这些中间件之间都可以通过 RPC 进行通信。比如 etcd，它作为一个统一的配置服务，客户端就是通过 gRPC 框架与服务端进行通信的。 例 2：我们经常会谈到的容器编排引擎 Kubernetes，它本身就是分布式的，Kubernetes 的 kube-apiserver 与整个分布式集群中的每个组件间的通讯，都是通过 gRPC 框架进行的。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T15:44:18.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"分布式通信"}],["meta",{"property":"article:tag","content":"RPC"}],["meta",{"property":"article:published_time","content":"2022-06-19T09:48:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T15:44:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《RPC 实战与核心原理》笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-19T09:48:17.000Z\\",\\"dateModified\\":\\"2023-09-11T15:44:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"别老想着怎么用好 RPC 框架，你得多花时间琢磨原理","slug":"别老想着怎么用好-rpc-框架-你得多花时间琢磨原理","link":"#别老想着怎么用好-rpc-框架-你得多花时间琢磨原理","children":[]},{"level":2,"title":"核心原理：能否画张图解释下 RPC 的通信流程？","slug":"核心原理-能否画张图解释下-rpc-的通信流程","link":"#核心原理-能否画张图解释下-rpc-的通信流程","children":[{"level":3,"title":"什么是 RPC？","slug":"什么是-rpc","link":"#什么是-rpc","children":[]},{"level":3,"title":"RPC 通信流程","slug":"rpc-通信流程","link":"#rpc-通信流程","children":[]},{"level":3,"title":"RPC 在架构中的位置","slug":"rpc-在架构中的位置","link":"#rpc-在架构中的位置","children":[]}]},{"level":2,"title":"协议：怎么设计可扩展且向后兼容的协议？","slug":"协议-怎么设计可扩展且向后兼容的协议","link":"#协议-怎么设计可扩展且向后兼容的协议","children":[{"level":3,"title":"协议的作用","slug":"协议的作用","link":"#协议的作用","children":[]},{"level":3,"title":"为何需要设计 RPC 协议","slug":"为何需要设计-rpc-协议","link":"#为何需要设计-rpc-协议","children":[]},{"level":3,"title":"如何设计 RPC 协议？","slug":"如何设计-rpc-协议","link":"#如何设计-rpc-协议","children":[]},{"level":3,"title":"可扩展的协议","slug":"可扩展的协议","link":"#可扩展的协议","children":[]}]},{"level":2,"title":"序列化：对象怎么在网络中传输？","slug":"序列化-对象怎么在网络中传输","link":"#序列化-对象怎么在网络中传输","children":[{"level":3,"title":"为什么需要序列化","slug":"为什么需要序列化","link":"#为什么需要序列化","children":[]},{"level":3,"title":"RPC 协议选型","slug":"rpc-协议选型","link":"#rpc-协议选型","children":[]},{"level":3,"title":"使用 RPC 需要注意哪些问题","slug":"使用-rpc-需要注意哪些问题","link":"#使用-rpc-需要注意哪些问题","children":[]}]},{"level":2,"title":"网络通信：RPC 框架在网络通信上更倾向于哪种网络 IO 模型？","slug":"网络通信-rpc-框架在网络通信上更倾向于哪种网络-io-模型","link":"#网络通信-rpc-框架在网络通信上更倾向于哪种网络-io-模型","children":[{"level":3,"title":"常见的网络 IO 模型","slug":"常见的网络-io-模型","link":"#常见的网络-io-模型","children":[]},{"level":3,"title":"零拷贝","slug":"零拷贝","link":"#零拷贝","children":[]}]},{"level":2,"title":"动态代理：面向接口编程，屏蔽 RPC 处理流程","slug":"动态代理-面向接口编程-屏蔽-rpc-处理流程","link":"#动态代理-面向接口编程-屏蔽-rpc-处理流程","children":[]},{"level":2,"title":"RPC 实战：剖析 gRPC 源码，动手实现一个完整的 RPC","slug":"rpc-实战-剖析-grpc-源码-动手实现一个完整的-rpc","link":"#rpc-实战-剖析-grpc-源码-动手实现一个完整的-rpc","children":[]},{"level":2,"title":"架构设计：设计一个灵活的 RPC 框架","slug":"架构设计-设计一个灵活的-rpc-框架","link":"#架构设计-设计一个灵活的-rpc-框架","children":[{"level":3,"title":"RPC 架构","slug":"rpc-架构","link":"#rpc-架构","children":[]},{"level":3,"title":"RPC 可扩展架构","slug":"rpc-可扩展架构","link":"#rpc-可扩展架构","children":[]}]},{"level":2,"title":"服务发现：到底是要 CP 还是 AP？","slug":"服务发现-到底是要-cp-还是-ap","link":"#服务发现-到底是要-cp-还是-ap","children":[{"level":3,"title":"基于 ZooKeeper 的服务发现","slug":"基于-zookeeper-的服务发现","link":"#基于-zookeeper-的服务发现","children":[]},{"level":3,"title":"基于消息总线的最终一致性的注册中心","slug":"基于消息总线的最终一致性的注册中心","link":"#基于消息总线的最终一致性的注册中心","children":[]}]},{"level":2,"title":"健康检测：这个节点都挂了，为啥还要疯狂发请求？","slug":"健康检测-这个节点都挂了-为啥还要疯狂发请求","link":"#健康检测-这个节点都挂了-为啥还要疯狂发请求","children":[]},{"level":2,"title":"路由策略：怎么让请求按照设定的规则发到不同的节点上？","slug":"路由策略-怎么让请求按照设定的规则发到不同的节点上","link":"#路由策略-怎么让请求按照设定的规则发到不同的节点上","children":[{"level":3,"title":"为什么需要路由策略","slug":"为什么需要路由策略","link":"#为什么需要路由策略","children":[]},{"level":3,"title":"路由规则","slug":"路由规则","link":"#路由规则","children":[]}]},{"level":2,"title":"负载均衡：节点负载差距这么大，为什么收到的流量还一样？","slug":"负载均衡-节点负载差距这么大-为什么收到的流量还一样","link":"#负载均衡-节点负载差距这么大-为什么收到的流量还一样","children":[{"level":3,"title":"负载均衡算法","slug":"负载均衡算法","link":"#负载均衡算法","children":[]},{"level":3,"title":"RPC 框架中的负载均衡","slug":"rpc-框架中的负载均衡","link":"#rpc-框架中的负载均衡","children":[]},{"level":3,"title":"如何设计自适应的负载均衡","slug":"如何设计自适应的负载均衡","link":"#如何设计自适应的负载均衡","children":[]}]},{"level":2,"title":"异常重试：在约定时间内安全可靠地重试","slug":"异常重试-在约定时间内安全可靠地重试","link":"#异常重试-在约定时间内安全可靠地重试","children":[{"level":3,"title":"异常重试","slug":"异常重试","link":"#异常重试","children":[]},{"level":3,"title":"重试超时时间","slug":"重试超时时间","link":"#重试超时时间","children":[]},{"level":3,"title":"业务异常","slug":"业务异常","link":"#业务异常","children":[]}]},{"level":2,"title":"优雅关闭：如何避免服务停机带来的业务损失？","slug":"优雅关闭-如何避免服务停机带来的业务损失","link":"#优雅关闭-如何避免服务停机带来的业务损失","children":[]},{"level":2,"title":"优雅启动：如何避免流量打到没有启动完成的节点？","slug":"优雅启动-如何避免流量打到没有启动完成的节点","link":"#优雅启动-如何避免流量打到没有启动完成的节点","children":[{"level":3,"title":"启动预热","slug":"启动预热","link":"#启动预热","children":[]},{"level":3,"title":"延迟暴露","slug":"延迟暴露","link":"#延迟暴露","children":[]}]},{"level":2,"title":"熔断限流：业务如何实现自我保护","slug":"熔断限流-业务如何实现自我保护","link":"#熔断限流-业务如何实现自我保护","children":[{"level":3,"title":"限流","slug":"限流","link":"#限流","children":[]},{"level":3,"title":"熔断","slug":"熔断","link":"#熔断","children":[]}]},{"level":2,"title":"业务分组：如何隔离流量？","slug":"业务分组-如何隔离流量","link":"#业务分组-如何隔离流量","children":[{"level":3,"title":"动态分组","slug":"动态分组","link":"#动态分组","children":[]}]},{"level":2,"title":"异步 RPC：压榨单机吞吐量","slug":"异步-rpc-压榨单机吞吐量","link":"#异步-rpc-压榨单机吞吐量","children":[]},{"level":2,"title":"安全体系：如何建立可靠的安全体系？","slug":"安全体系-如何建立可靠的安全体系","link":"#安全体系-如何建立可靠的安全体系","children":[]},{"level":2,"title":"分布式环境下如何快速定位问题？","slug":"分布式环境下如何快速定位问题","link":"#分布式环境下如何快速定位问题","children":[]},{"level":2,"title":"详解时钟轮在 RPC 中的应用","slug":"详解时钟轮在-rpc-中的应用","link":"#详解时钟轮在-rpc-中的应用","children":[{"level":3,"title":"一般定时任务方案的缺点","slug":"一般定时任务方案的缺点","link":"#一般定时任务方案的缺点","children":[]},{"level":3,"title":"时钟轮方案","slug":"时钟轮方案","link":"#时钟轮方案","children":[]}]},{"level":2,"title":"流量回放：保障业务技术升级的神器","slug":"流量回放-保障业务技术升级的神器","link":"#流量回放-保障业务技术升级的神器","children":[]},{"level":2,"title":"动态分组：超高效实现秒级扩缩容","slug":"动态分组-超高效实现秒级扩缩容","link":"#动态分组-超高效实现秒级扩缩容","children":[]},{"level":2,"title":"如何在没有接口的情况下进行 RPC 调用？","slug":"如何在没有接口的情况下进行-rpc-调用","link":"#如何在没有接口的情况下进行-rpc-调用","children":[{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]},{"level":3,"title":"如何泛化调用","slug":"如何泛化调用","link":"#如何泛化调用","children":[]}]},{"level":2,"title":"如何在线上环境里兼容多种 RPC 协议？","slug":"如何在线上环境里兼容多种-rpc-协议","link":"#如何在线上环境里兼容多种-rpc-协议","children":[{"level":3,"title":"如何优雅处理多协议","slug":"如何优雅处理多协议","link":"#如何优雅处理多协议","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1694447058000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":43.17,"words":12952},"filePathRelative":"99.笔记/15.分布式/21.分布式通信/01.RPC实战与核心原理笔记.md","localizedDate":"2022年6月19日","excerpt":"<h1> 《RPC 实战与核心原理》笔记</h1>\\n<h2> 别老想着怎么用好 RPC 框架，你得多花时间琢磨原理</h2>\\n<p>为什么要学习 RPC</p>\\n<p>RPC 不仅是微服务的架构基础，实际上，只要涉及网络通信，就可能用到 RPC。</p>\\n<ul>\\n<li>\\n<p>例 1：大型分布式应用系统可能会依赖消息队列、分布式缓存、分布式数据库以及统一配置中心等，应用程序与依赖的这些中间件之间都可以通过 RPC 进行通信。比如 etcd，它作为一个统一的配置服务，客户端就是通过 gRPC 框架与服务端进行通信的。</p>\\n</li>\\n<li>\\n<p>例 2：我们经常会谈到的容器编排引擎 Kubernetes，它本身就是分布式的，Kubernetes 的 kube-apiserver 与整个分布式集群中的每个组件间的通讯，都是通过 gRPC 框架进行的。</p>\\n</li>\\n</ul>","autoDesc":true}');export{l as data};
