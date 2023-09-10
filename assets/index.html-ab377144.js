const e=JSON.parse('{"key":"v-61d4eb4c","path":"/pages/1fd240/","title":"消息队列基本原理","lang":"zh-CN","frontmatter":{"title":"消息队列基本原理","date":"2019-07-05T15:11:00.000Z","category":["分布式","分布式通信","MQ","MQ综合"],"tag":["Java","中间件","MQ"],"permalink":"/pages/1fd240/","description":"消息队列基本原理 消息队列（Message Queue，简称 MQ）技术是应用间交换信息的一种技术。 消息队列主要解决异步处理、应用间耦合，流量削锋等问题，实现高性能，高可用，可伸缩和最终一致性架构。是大型分布式系统不可缺少的中间件。 目前主流的 MQ 有：Kafka、RabbitMQ、RocketMQ、ActiveMQ，而部分数据库如 Redis、MySQL 以及 phxsql 也可实现消息队列的功能。 注意：为了简便，下文中除了文章标题，一律使用 MQ 简称。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/1fd240/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"消息队列基本原理"}],["meta",{"property":"og:description","content":"消息队列基本原理 消息队列（Message Queue，简称 MQ）技术是应用间交换信息的一种技术。 消息队列主要解决异步处理、应用间耦合，流量削锋等问题，实现高性能，高可用，可伸缩和最终一致性架构。是大型分布式系统不可缺少的中间件。 目前主流的 MQ 有：Kafka、RabbitMQ、RocketMQ、ActiveMQ，而部分数据库如 Redis、MySQL 以及 phxsql 也可实现消息队列的功能。 注意：为了简便，下文中除了文章标题，一律使用 MQ 简称。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T08:34:53.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:tag","content":"MQ"}],["meta",{"property":"article:published_time","content":"2019-07-05T15:11:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T08:34:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"消息队列基本原理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-07-05T15:11:00.000Z\\",\\"dateModified\\":\\"2023-09-10T08:34:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"MQ 的简介","slug":"mq-的简介","link":"#mq-的简介","children":[{"level":3,"title":"什么是 MQ","slug":"什么是-mq","link":"#什么是-mq","children":[]},{"level":3,"title":"MQ 通信模型","slug":"mq-通信模型","link":"#mq-通信模型","children":[]}]},{"level":2,"title":"MQ 的应用","slug":"mq-的应用","link":"#mq-的应用","children":[{"level":3,"title":"异步处理","slug":"异步处理","link":"#异步处理","children":[]},{"level":3,"title":"系统解耦","slug":"系统解耦","link":"#系统解耦","children":[]},{"level":3,"title":"流量削峰","slug":"流量削峰","link":"#流量削峰","children":[]},{"level":3,"title":"传输缓冲","slug":"传输缓冲","link":"#传输缓冲","children":[]},{"level":3,"title":"最终一致性","slug":"最终一致性","link":"#最终一致性","children":[]},{"level":3,"title":"系统间通信","slug":"系统间通信","link":"#系统间通信","children":[]}]},{"level":2,"title":"MQ 的问题","slug":"mq-的问题","link":"#mq-的问题","children":[{"level":3,"title":"重复消费","slug":"重复消费","link":"#重复消费","children":[]},{"level":3,"title":"消息丢失","slug":"消息丢失","link":"#消息丢失","children":[]},{"level":3,"title":"消息的顺序性","slug":"消息的顺序性","link":"#消息的顺序性","children":[]},{"level":3,"title":"消息积压","slug":"消息积压","link":"#消息积压","children":[]}]},{"level":2,"title":"MQ 的高可用","slug":"mq-的高可用","link":"#mq-的高可用","children":[{"level":3,"title":"Kafka 的高可用","slug":"kafka-的高可用","link":"#kafka-的高可用","children":[]}]},{"level":2,"title":"主流 MQ","slug":"主流-mq","link":"#主流-mq","children":[{"level":3,"title":"ActiveMQ","slug":"activemq","link":"#activemq","children":[]},{"level":3,"title":"RabbitMQ","slug":"rabbitmq","link":"#rabbitmq","children":[]},{"level":3,"title":"RocketMQ","slug":"rocketmq","link":"#rocketmq","children":[]},{"level":3,"title":"Kafka","slug":"kafka","link":"#kafka","children":[]},{"level":3,"title":"MQ 的技术选型","slug":"mq-的技术选型","link":"#mq-的技术选型","children":[]}]},{"level":2,"title":"JMS","slug":"jms","link":"#jms","children":[{"level":3,"title":"消息模型","slug":"消息模型","link":"#消息模型","children":[]},{"level":3,"title":"消息消费","slug":"消息消费","link":"#消息消费","children":[]},{"level":3,"title":"JMS 编程模型","slug":"jms-编程模型","link":"#jms-编程模型","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694186720000,"updatedTime":1694334893000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":3}]},"readingTime":{"minutes":33.15,"words":9944},"filePathRelative":"15.分布式/21.分布式通信/02.MQ/00.MQ综合/02.消息队列基本原理.md","localizedDate":"2019年7月5日","excerpt":"<h1> 消息队列基本原理</h1>\\n<blockquote>\\n<p>消息队列（Message Queue，简称 MQ）技术是<strong>应用间交换信息</strong>的一种技术。</p>\\n<p>消息队列主要解决异步处理、应用间耦合，流量削锋等问题，实现高性能，高可用，可伸缩和最终一致性架构。是大型分布式系统不可缺少的中间件。</p>\\n<p>目前主流的 MQ 有：Kafka、RabbitMQ、RocketMQ、ActiveMQ，而部分数据库如 Redis、MySQL 以及 phxsql 也可实现消息队列的功能。</p>\\n<p>注意：<em>为了简便，下文中除了文章标题，一律使用 MQ 简称</em>。</p>\\n</blockquote>","autoDesc":true}');export{e as data};
