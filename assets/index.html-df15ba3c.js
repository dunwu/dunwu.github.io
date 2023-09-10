const e=JSON.parse('{"key":"v-d8f58058","path":"/pages/d404be/","title":"RocketMQ 快速入门","lang":"zh-CN","frontmatter":{"title":"RocketMQ 快速入门","date":"2022-02-17T22:34:30.000Z","category":["分布式","分布式通信","MQ","RocketMQ"],"tag":["Java","中间件","MQ","RocketMQ"],"permalink":"/pages/d404be/","description":"RocketMQ 快速入门 Apache RocketMQ 是一个分布式 MQ 和流处理平台，具有低延迟、高性能和可靠性、万亿级容量和灵活的可扩展性。 RocketMQ 由阿里巴巴孵化，被捐赠给 Apache，成为 Apache 的顶级项目。 RocketMQ 概念 img","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/d404be/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"RocketMQ 快速入门"}],["meta",{"property":"og:description","content":"RocketMQ 快速入门 Apache RocketMQ 是一个分布式 MQ 和流处理平台，具有低延迟、高性能和可靠性、万亿级容量和灵活的可扩展性。 RocketMQ 由阿里巴巴孵化，被捐赠给 Apache，成为 Apache 的顶级项目。 RocketMQ 概念 img"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T10:35:58.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:tag","content":"MQ"}],["meta",{"property":"article:tag","content":"RocketMQ"}],["meta",{"property":"article:published_time","content":"2022-02-17T22:34:30.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T10:35:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RocketMQ 快速入门\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-02-17T22:34:30.000Z\\",\\"dateModified\\":\\"2023-09-10T10:35:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"RocketMQ 概念","slug":"rocketmq-概念","link":"#rocketmq-概念","children":[{"level":3,"title":"消息模型（Message Model）","slug":"消息模型-message-model","link":"#消息模型-message-model","children":[]},{"level":3,"title":"消息（Message）","slug":"消息-message","link":"#消息-message","children":[]},{"level":3,"title":"标签（Tag）","slug":"标签-tag","link":"#标签-tag","children":[]},{"level":3,"title":"主题（Topic）","slug":"主题-topic","link":"#主题-topic","children":[]},{"level":3,"title":"代理服务器（Broker Server）","slug":"代理服务器-broker-server","link":"#代理服务器-broker-server","children":[]},{"level":3,"title":"名称服务（Name Server）","slug":"名称服务-name-server","link":"#名称服务-name-server","children":[]},{"level":3,"title":"消息生产者（Producer）","slug":"消息生产者-producer","link":"#消息生产者-producer","children":[]},{"level":3,"title":"生产者组（Producer Group）","slug":"生产者组-producer-group","link":"#生产者组-producer-group","children":[]},{"level":3,"title":"消息消费者（Consumer）","slug":"消息消费者-consumer","link":"#消息消费者-consumer","children":[]},{"level":3,"title":"消费者组（Consumer Group）","slug":"消费者组-consumer-group","link":"#消费者组-consumer-group","children":[]},{"level":3,"title":"拉取式消费（Pull Consumer）","slug":"拉取式消费-pull-consumer","link":"#拉取式消费-pull-consumer","children":[]},{"level":3,"title":"推动式消费（Push Consumer）","slug":"推动式消费-push-consumer","link":"#推动式消费-push-consumer","children":[]},{"level":3,"title":"集群消费（Clustering）","slug":"集群消费-clustering","link":"#集群消费-clustering","children":[]},{"level":3,"title":"广播消费（Broadcasting）","slug":"广播消费-broadcasting","link":"#广播消费-broadcasting","children":[]},{"level":3,"title":"普通顺序消息（Normal Ordered Message）","slug":"普通顺序消息-normal-ordered-message","link":"#普通顺序消息-normal-ordered-message","children":[]},{"level":3,"title":"严格顺序消息（Strictly Ordered Message）","slug":"严格顺序消息-strictly-ordered-message","link":"#严格顺序消息-strictly-ordered-message","children":[]}]},{"level":2,"title":"RocketMQ 特性","slug":"rocketmq-特性","link":"#rocketmq-特性","children":[{"level":3,"title":"订阅与发布","slug":"订阅与发布","link":"#订阅与发布","children":[]},{"level":3,"title":"消息顺序","slug":"消息顺序","link":"#消息顺序","children":[]},{"level":3,"title":"消息过滤","slug":"消息过滤","link":"#消息过滤","children":[]},{"level":3,"title":"消息可靠性","slug":"消息可靠性","link":"#消息可靠性","children":[]},{"level":3,"title":"至少一次","slug":"至少一次","link":"#至少一次","children":[]},{"level":3,"title":"回溯消费","slug":"回溯消费","link":"#回溯消费","children":[]},{"level":3,"title":"事务消息","slug":"事务消息","link":"#事务消息","children":[]},{"level":3,"title":"定时消息","slug":"定时消息","link":"#定时消息","children":[]},{"level":3,"title":"消息重试","slug":"消息重试","link":"#消息重试","children":[]},{"level":3,"title":"消息重投","slug":"消息重投","link":"#消息重投","children":[]},{"level":3,"title":"量控制","slug":"量控制","link":"#量控制","children":[]},{"level":3,"title":"死信队列","slug":"死信队列","link":"#死信队列","children":[]}]},{"level":2,"title":"RocketMQ 组件","slug":"rocketmq-组件","link":"#rocketmq-组件","children":[{"level":3,"title":"NameServer（命名服务器）","slug":"nameserver-命名服务器","link":"#nameserver-命名服务器","children":[]},{"level":3,"title":"Broker（代理）","slug":"broker-代理","link":"#broker-代理","children":[]},{"level":3,"title":"Producer（生产者）","slug":"producer-生产者","link":"#producer-生产者","children":[]},{"level":3,"title":"Consumer（消费者）","slug":"consumer-消费者","link":"#consumer-消费者","children":[]}]},{"level":2,"title":"RocketMQ 安装","slug":"rocketmq-安装","link":"#rocketmq-安装","children":[{"level":3,"title":"环境要求","slug":"环境要求","link":"#环境要求","children":[]},{"level":3,"title":"下载解压","slug":"下载解压","link":"#下载解压","children":[]},{"level":3,"title":"启动 Name Server","slug":"启动-name-server","link":"#启动-name-server","children":[]},{"level":3,"title":"启动 Broker","slug":"启动-broker","link":"#启动-broker","children":[]},{"level":3,"title":"收发消息","slug":"收发消息","link":"#收发消息","children":[]},{"level":3,"title":"关闭服务器","slug":"关闭服务器","link":"#关闭服务器","children":[]}]},{"level":2,"title":"RocketMQ 入门级示例","slug":"rocketmq-入门级示例","link":"#rocketmq-入门级示例","children":[{"level":3,"title":"Producer","slug":"producer","link":"#producer","children":[]},{"level":3,"title":"Consumer","slug":"consumer","link":"#consumer","children":[]}]},{"level":2,"title":"RocketMQ 官方示例","slug":"rocketmq-官方示例","link":"#rocketmq-官方示例","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694342158000,"updatedTime":1694342158000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":19.49,"words":5846},"filePathRelative":"15.分布式/21.分布式通信/02.MQ/02.RocketMQ/01.RocketMQ快速入门.md","localizedDate":"2022年2月17日","excerpt":"<h1> RocketMQ 快速入门</h1>\\n<p>Apache RocketMQ 是一个分布式 MQ 和流处理平台，具有低延迟、高性能和可靠性、万亿级容量和灵活的可扩展性。</p>\\n<p>RocketMQ 由阿里巴巴孵化，被捐赠给 Apache，成为 Apache 的顶级项目。</p>\\n<h2> RocketMQ 概念</h2>\\n<figure><img src=\\"https://raw.githubusercontent.com/dunwu/images/dev/cs/java/javaweb/distributed/mq/rocketmq/rmq-model.png\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>img</figcaption></figure>","autoDesc":true}');export{e as data};
