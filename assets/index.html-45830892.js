const e=JSON.parse('{"key":"v-2a0d8744","path":"/pages/b4661f/","title":"《微服务架构核心 20 讲》笔记","lang":"zh-CN","frontmatter":{"title":"《微服务架构核心 20 讲》笔记","date":"2022-06-26T18:09:46.000Z","order":11,"permalink":"/pages/b4661f/","category":["笔记","设计"],"tag":["设计","架构","微服务"],"description":"《微服务架构核心 20 讲》笔记 什么是微服务架构 微服务是一种架构模式。 微服务的六个特点： 一组小的服务 独立的进程 独立部署 轻量级通信 基于业务能力 无集中式管理——这里指的是可以用不同的技术栈，不同的存储 微服务定义：基于有界上下文的、松散耦合的、面向服务的架构。 架构师如何权衡微服务的利弊 架构之道在于权衡利弊。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/b4661f/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"《微服务架构核心 20 讲》笔记"}],["meta",{"property":"og:description","content":"《微服务架构核心 20 讲》笔记 什么是微服务架构 微服务是一种架构模式。 微服务的六个特点： 一组小的服务 独立的进程 独立部署 轻量级通信 基于业务能力 无集中式管理——这里指的是可以用不同的技术栈，不同的存储 微服务定义：基于有界上下文的、松散耦合的、面向服务的架构。 架构师如何权衡微服务的利弊 架构之道在于权衡利弊。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T22:46:25.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"设计"}],["meta",{"property":"article:tag","content":"架构"}],["meta",{"property":"article:tag","content":"微服务"}],["meta",{"property":"article:published_time","content":"2022-06-26T18:09:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T22:46:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《微服务架构核心 20 讲》笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-26T18:09:46.000Z\\",\\"dateModified\\":\\"2024-05-15T22:46:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"什么是微服务架构","slug":"什么是微服务架构","link":"#什么是微服务架构","children":[]},{"level":2,"title":"架构师如何权衡微服务的利弊","slug":"架构师如何权衡微服务的利弊","link":"#架构师如何权衡微服务的利弊","children":[]},{"level":2,"title":"康威法则和微服务给架构师怎样的启示","slug":"康威法则和微服务给架构师怎样的启示","link":"#康威法则和微服务给架构师怎样的启示","children":[]},{"level":2,"title":"企业应该在什么时候开始考虑引入微服务","slug":"企业应该在什么时候开始考虑引入微服务","link":"#企业应该在什么时候开始考虑引入微服务","children":[]},{"level":2,"title":"什么样组织架构更适合微服务","slug":"什么样组织架构更适合微服务","link":"#什么样组织架构更适合微服务","children":[]},{"level":2,"title":"如何理解阿里巴巴提出的微服务","slug":"如何理解阿里巴巴提出的微服务","link":"#如何理解阿里巴巴提出的微服务","children":[]},{"level":2,"title":"如何给出一个清晰简洁的服务分层方式","slug":"如何给出一个清晰简洁的服务分层方式","link":"#如何给出一个清晰简洁的服务分层方式","children":[]},{"level":2,"title":"微服务总体技术架构体系是怎么设计的","slug":"微服务总体技术架构体系是怎么设计的","link":"#微服务总体技术架构体系是怎么设计的","children":[]},{"level":2,"title":"微服务最经典的三种服务发现机制","slug":"微服务最经典的三种服务发现机制","link":"#微服务最经典的三种服务发现机制","children":[]},{"level":2,"title":"微服务 API 服务网关（一）原理","slug":"微服务-api-服务网关-一-原理","link":"#微服务-api-服务网关-一-原理","children":[]},{"level":2,"title":"服务 API 服务网关（二）开源网关 Zuul","slug":"服务-api-服务网关-二-开源网关-zuul","link":"#服务-api-服务网关-二-开源网关-zuul","children":[]},{"level":2,"title":"跟 Netflix 学习微服务路由发现体系","slug":"跟-netflix-学习微服务路由发现体系","link":"#跟-netflix-学习微服务路由发现体系","children":[]},{"level":2,"title":"集中式配置中心的作用和原理是什么","slug":"集中式配置中心的作用和原理是什么","link":"#集中式配置中心的作用和原理是什么","children":[]},{"level":2,"title":"微服务通讯方式 RPC vs REST","slug":"微服务通讯方式-rpc-vs-rest","link":"#微服务通讯方式-rpc-vs-rest","children":[]},{"level":2,"title":"微服务框架需要考虑哪些治理环节","slug":"微服务框架需要考虑哪些治理环节","link":"#微服务框架需要考虑哪些治理环节","children":[]},{"level":2,"title":"微服务监控系统分层和监控架构","slug":"微服务监控系统分层和监控架构","link":"#微服务监控系统分层和监控架构","children":[]},{"level":2,"title":"微服务的调用链监控该如何选型","slug":"微服务的调用链监控该如何选型","link":"#微服务的调用链监控该如何选型","children":[]},{"level":2,"title":"微服务的容错限流是如何工作的","slug":"微服务的容错限流是如何工作的","link":"#微服务的容错限流是如何工作的","children":[]},{"level":2,"title":"Docker 容器部署技术 & 持续交付流水线","slug":"docker-容器部署技术-持续交付流水线","link":"#docker-容器部署技术-持续交付流水线","children":[]},{"level":2,"title":"容器集群调度和基于容器的发布体系","slug":"容器集群调度和基于容器的发布体系","link":"#容器集群调度和基于容器的发布体系","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1715813185000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":4}]},"readingTime":{"minutes":7.57,"words":2271},"filePathRelative":"99.笔记/03.设计/11.微服务架构核心20讲笔记.md","localizedDate":"2022年6月26日","excerpt":"<h1> 《微服务架构核心 20 讲》笔记</h1>\\n<h2> 什么是微服务架构</h2>\\n<p>微服务是一种架构模式。</p>\\n<p>微服务的六个特点：</p>\\n<ul>\\n<li>一组小的服务</li>\\n<li>独立的进程</li>\\n<li>独立部署</li>\\n<li>轻量级通信</li>\\n<li>基于业务能力</li>\\n<li>无集中式管理——这里指的是可以用不同的技术栈，不同的存储</li>\\n</ul>\\n<p><strong>微服务定义</strong>：基于有界上下文的、松散耦合的、面向服务的架构。</p>\\n<h2> 架构师如何权衡微服务的利弊</h2>\\n<p>架构之道在于权衡利弊。</p>","autoDesc":true}');export{e as data};
