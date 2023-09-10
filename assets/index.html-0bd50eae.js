const e=JSON.parse('{"key":"v-6c949afc","path":"/pages/e3eb31/","title":"《消息队列高手课》笔记","lang":"zh-CN","frontmatter":{"title":"《消息队列高手课》笔记","date":"2022-05-11T20:59:25.000Z","category":["笔记","分布式","分布式通信"],"tag":["分布式","分布式通信","MQ"],"permalink":"/pages/e3eb31/","description":"《消息队列高手课》笔记 为什么需要消息队列？ 消息队列的应用 异步处理 快速响应 减少等待，提升性能 流量控制 服务解耦 该如何选择消息队列？ 是否开源：这决定了能否商用，所以最为重要。 社区活跃度越高越好：高社区活跃度，一般保证了低 Bug 率，因为大部分 Bug，已经有人遇到并解决了。 技术生态适配性：客户端对各种编程语言的支持。比如：如果使用 MQ 的都是 Java 应用，那么 ActiveMQ、RabbitMQ、RocketMQ、Kafka 都可以。如果需要支持其他语言，那么 RMQ 比较合适，因为它支持的编程语言比较丰富。如果 MQ 是应用于大数据或流式计算，那么 Kafka 几乎是标配。如果是应用于在线业务系统，那么 Kafka 就不合适了，可以考虑 RabbitMQ、 RocketMQ 很合适。 高可用：应用于线上的准入标准。 高性能：具备足够好的性能，能满足绝大多数场景的性能要求。 业务场景的适应性：不同业务场景，会有不同的诉求，此时要根据不同 MQ 的特性针对性选择。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/e3eb31/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"《消息队列高手课》笔记"}],["meta",{"property":"og:description","content":"《消息队列高手课》笔记 为什么需要消息队列？ 消息队列的应用 异步处理 快速响应 减少等待，提升性能 流量控制 服务解耦 该如何选择消息队列？ 是否开源：这决定了能否商用，所以最为重要。 社区活跃度越高越好：高社区活跃度，一般保证了低 Bug 率，因为大部分 Bug，已经有人遇到并解决了。 技术生态适配性：客户端对各种编程语言的支持。比如：如果使用 MQ 的都是 Java 应用，那么 ActiveMQ、RabbitMQ、RocketMQ、Kafka 都可以。如果需要支持其他语言，那么 RMQ 比较合适，因为它支持的编程语言比较丰富。如果 MQ 是应用于大数据或流式计算，那么 Kafka 几乎是标配。如果是应用于在线业务系统，那么 Kafka 就不合适了，可以考虑 RabbitMQ、 RocketMQ 很合适。 高可用：应用于线上的准入标准。 高性能：具备足够好的性能，能满足绝大多数场景的性能要求。 业务场景的适应性：不同业务场景，会有不同的诉求，此时要根据不同 MQ 的特性针对性选择。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T15:41:08.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"分布式通信"}],["meta",{"property":"article:tag","content":"MQ"}],["meta",{"property":"article:published_time","content":"2022-05-11T20:59:25.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-08T15:41:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《消息队列高手课》笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-11T20:59:25.000Z\\",\\"dateModified\\":\\"2023-09-08T15:41:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"为什么需要消息队列？","slug":"为什么需要消息队列","link":"#为什么需要消息队列","children":[]},{"level":2,"title":"该如何选择消息队列？","slug":"该如何选择消息队列","link":"#该如何选择消息队列","children":[{"level":3,"title":"主流 MQ","slug":"主流-mq","link":"#主流-mq","children":[]}]},{"level":2,"title":"消息模型：主题和队列有什么区别？","slug":"消息模型-主题和队列有什么区别","link":"#消息模型-主题和队列有什么区别","children":[{"level":3,"title":"队列模型","slug":"队列模型","link":"#队列模型","children":[]},{"level":3,"title":"发布 - 订阅模型（Publish-Subscribe Pattern）","slug":"发布-订阅模型-publish-subscribe-pattern","link":"#发布-订阅模型-publish-subscribe-pattern","children":[]},{"level":3,"title":"RabbitMQ 的消息模型","slug":"rabbitmq-的消息模型","link":"#rabbitmq-的消息模型","children":[]},{"level":3,"title":"RocketMQ 的消息模型","slug":"rocketmq-的消息模型","link":"#rocketmq-的消息模型","children":[]}]},{"level":2,"title":"如何利用事务消息实现分布式事务？","slug":"如何利用事务消息实现分布式事务","link":"#如何利用事务消息实现分布式事务","children":[{"level":3,"title":"RocketMQ 事务消息流程","slug":"rocketmq-事务消息流程","link":"#rocketmq-事务消息流程","children":[]},{"level":3,"title":"MQ 事务方案总结","slug":"mq-事务方案总结","link":"#mq-事务方案总结","children":[]}]},{"level":2,"title":"如何确保消息不会丢失?","slug":"如何确保消息不会丢失","link":"#如何确保消息不会丢失","children":[]},{"level":2,"title":"如何处理消费过程中的重复消息？","slug":"如何处理消费过程中的重复消息","link":"#如何处理消费过程中的重复消息","children":[]},{"level":2,"title":"消息积压了该如何处理？","slug":"消息积压了该如何处理","link":"#消息积压了该如何处理","children":[{"level":3,"title":"发送端性能优化","slug":"发送端性能优化","link":"#发送端性能优化","children":[]},{"level":3,"title":"消费端性能优化","slug":"消费端性能优化","link":"#消费端性能优化","children":[]},{"level":3,"title":"消息积压的处理","slug":"消息积压的处理","link":"#消息积压的处理","children":[]}]},{"level":2,"title":"学习开源代码该如何入手？","slug":"学习开源代码该如何入手","link":"#学习开源代码该如何入手","children":[]},{"level":2,"title":"如何使用异步设计提升系统性能？","slug":"如何使用异步设计提升系统性能","link":"#如何使用异步设计提升系统性能","children":[]},{"level":2,"title":"如何实现高性能的异步网络传输？","slug":"如何实现高性能的异步网络传输","link":"#如何实现高性能的异步网络传输","children":[]},{"level":2,"title":"序列化与反序列化：如何通过网络传输结构化的数据？","slug":"序列化与反序列化-如何通过网络传输结构化的数据","link":"#序列化与反序列化-如何通过网络传输结构化的数据","children":[]},{"level":2,"title":"传输协议：应用程序之间对话的语言","slug":"传输协议-应用程序之间对话的语言","link":"#传输协议-应用程序之间对话的语言","children":[]},{"level":2,"title":"内存管理：如何避免内存溢出和频繁的垃圾回收？","slug":"内存管理-如何避免内存溢出和频繁的垃圾回收","link":"#内存管理-如何避免内存溢出和频繁的垃圾回收","children":[]},{"level":2,"title":"Kafka 如何实现高性能 IO？","slug":"kafka-如何实现高性能-io","link":"#kafka-如何实现高性能-io","children":[]},{"level":2,"title":"缓存策略：如何使用缓存来减少磁盘 IO？","slug":"缓存策略-如何使用缓存来减少磁盘-io","link":"#缓存策略-如何使用缓存来减少磁盘-io","children":[]},{"level":2,"title":"如何正确使用锁保护共享数据，协调异步线程？","slug":"如何正确使用锁保护共享数据-协调异步线程","link":"#如何正确使用锁保护共享数据-协调异步线程","children":[]},{"level":2,"title":"如何用硬件同步原语（CAS）替代锁？","slug":"如何用硬件同步原语-cas-替代锁","link":"#如何用硬件同步原语-cas-替代锁","children":[]},{"level":2,"title":"数据压缩：时间换空间的游戏","slug":"数据压缩-时间换空间的游戏","link":"#数据压缩-时间换空间的游戏","children":[]},{"level":2,"title":"RocketMQ Producer 源码分析：消息生产的实现过程","slug":"rocketmq-producer-源码分析-消息生产的实现过程","link":"#rocketmq-producer-源码分析-消息生产的实现过程","children":[]},{"level":2,"title":"Kafka Consumer 源码分析：消息消费的实现过程","slug":"kafka-consumer-源码分析-消息消费的实现过程","link":"#kafka-consumer-源码分析-消息消费的实现过程","children":[]},{"level":2,"title":"Kafka 和 RocketMQ 的消息复制实现的差异点在哪？","slug":"kafka-和-rocketmq-的消息复制实现的差异点在哪","link":"#kafka-和-rocketmq-的消息复制实现的差异点在哪","children":[{"level":3,"title":"RocketMQ 如何实现复制","slug":"rocketmq-如何实现复制","link":"#rocketmq-如何实现复制","children":[]},{"level":3,"title":"Kafka 是如何实现复制的","slug":"kafka-是如何实现复制的","link":"#kafka-是如何实现复制的","children":[]},{"level":3,"title":"RocketMQ 客户端如何在集群中找到正确的节点？","slug":"rocketmq-客户端如何在集群中找到正确的节点","link":"#rocketmq-客户端如何在集群中找到正确的节点","children":[]},{"level":3,"title":"NameServer 的总体结构","slug":"nameserver-的总体结构","link":"#nameserver-的总体结构","children":[]}]},{"level":2,"title":"Kafka 的协调服务 ZooKeeper：实现分布式系统的“瑞士军刀”","slug":"kafka-的协调服务-zookeeper-实现分布式系统的-瑞士军刀","link":"#kafka-的协调服务-zookeeper-实现分布式系统的-瑞士军刀","children":[]},{"level":2,"title":"RocketMQ 与 Kafka 中如何实现事务？","slug":"rocketmq-与-kafka-中如何实现事务","link":"#rocketmq-与-kafka-中如何实现事务","children":[]},{"level":2,"title":"MQTT 协议：如何支持海量的在线 IoT 设备?","slug":"mqtt-协议-如何支持海量的在线-iot-设备","link":"#mqtt-协议-如何支持海量的在线-iot-设备","children":[]},{"level":2,"title":"Pulsar 的存储计算分离设计：全新的消息队列设计思路","slug":"pulsar-的存储计算分离设计-全新的消息队列设计思路","link":"#pulsar-的存储计算分离设计-全新的消息队列设计思路","children":[]},{"level":2,"title":"流计算与消息（一）：通过 Flink 理解流计算的原理","slug":"流计算与消息-一-通过-flink-理解流计算的原理","link":"#流计算与消息-一-通过-flink-理解流计算的原理","children":[]},{"level":2,"title":"流计算与消息（二）：在流计算中使用 Kafka 链接计算任务","slug":"流计算与消息-二-在流计算中使用-kafka-链接计算任务","link":"#流计算与消息-二-在流计算中使用-kafka-链接计算任务","children":[]},{"level":2,"title":"主流消息队列都是如何存储消息的？","slug":"主流消息队列都是如何存储消息的","link":"#主流消息队列都是如何存储消息的","children":[{"level":3,"title":"Kafka 存储消息结构","slug":"kafka-存储消息结构","link":"#kafka-存储消息结构","children":[]},{"level":3,"title":"RocketMQ 存储消息结构","slug":"rocketmq-存储消息结构","link":"#rocketmq-存储消息结构","children":[]},{"level":3,"title":"Kafka 和 RocketMQ 的存储结构比较","slug":"kafka-和-rocketmq-的存储结构比较","link":"#kafka-和-rocketmq-的存储结构比较","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694186720000,"updatedTime":1694187668000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":39.09,"words":11727},"filePathRelative":"99.笔记/15.分布式/21.分布式通信/11.消息队列高手课笔记.md","localizedDate":"2022年5月11日","excerpt":"<h1> 《消息队列高手课》笔记</h1>\\n<h2> 为什么需要消息队列？</h2>\\n<p>消息队列的应用</p>\\n<ul>\\n<li>异步处理\\n<ul>\\n<li>快速响应</li>\\n<li>减少等待，提升性能</li>\\n</ul>\\n</li>\\n<li>流量控制</li>\\n<li>服务解耦</li>\\n</ul>\\n<h2> 该如何选择消息队列？</h2>\\n<ul>\\n<li><strong>是否开源</strong>：这决定了能否商用，所以最为重要。</li>\\n<li><strong>社区活跃度越高越好</strong>：高社区活跃度，一般保证了低 Bug 率，因为大部分 Bug，已经有人遇到并解决了。</li>\\n<li><strong>技术生态适配性</strong>：客户端对各种编程语言的支持。比如：如果使用 MQ 的都是 Java 应用，那么 ActiveMQ、RabbitMQ、RocketMQ、Kafka 都可以。如果需要支持其他语言，那么 RMQ 比较合适，因为它支持的编程语言比较丰富。如果 MQ 是应用于大数据或流式计算，那么 Kafka 几乎是标配。如果是应用于在线业务系统，那么 Kafka 就不合适了，可以考虑 RabbitMQ、 RocketMQ 很合适。</li>\\n<li><strong>高可用</strong>：应用于线上的准入标准。</li>\\n<li><strong>高性能</strong>：具备足够好的性能，能满足绝大多数场景的性能要求。</li>\\n<li><strong>业务场景的适应性</strong>：不同业务场景，会有不同的诉求，此时要根据不同 MQ 的特性针对性选择。</li>\\n</ul>","autoDesc":true}');export{e as data};
