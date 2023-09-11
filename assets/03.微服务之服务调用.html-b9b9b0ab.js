const e=JSON.parse('{"key":"v-b50e5c32","path":"/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/01.%E5%BE%AE%E6%9C%8D%E5%8A%A1/03.%E5%BE%AE%E6%9C%8D%E5%8A%A1%E4%B9%8B%E6%9C%8D%E5%8A%A1%E8%B0%83%E7%94%A8.html","title":"微服务之服务调用","lang":"zh-CN","frontmatter":{"title":"微服务之服务调用","date":"2023-05-15T19:08:50.000Z","order":3,"category":["设计","架构","微服务"],"tag":["设计","架构","微服务","分布式","RPC"],"description":"微服务之服务调用 RPC 简介 通过注册中心，服务消费者和服务提供者就可以感知彼此。但是，要实现交互还必须解决通信问题。 在单体应用中，一次服务调用发生在同一台机器上的同一个进程内部，因此也被称为本地方法调用。在微服务应用中，由于服务提供者和服务消费者运行在不同物理机器上的不同进程内，因此也被称为远程方法调用，简称 RPC（Remote Procedure Call）。 RPC 是微服务架构的基石，它提供了一种应用间通信的方式。RPC 的主要作用是：","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/03.%E8%AE%BE%E8%AE%A1/01.%E6%9E%B6%E6%9E%84/01.%E5%BE%AE%E6%9C%8D%E5%8A%A1/03.%E5%BE%AE%E6%9C%8D%E5%8A%A1%E4%B9%8B%E6%9C%8D%E5%8A%A1%E8%B0%83%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"微服务之服务调用"}],["meta",{"property":"og:description","content":"微服务之服务调用 RPC 简介 通过注册中心，服务消费者和服务提供者就可以感知彼此。但是，要实现交互还必须解决通信问题。 在单体应用中，一次服务调用发生在同一台机器上的同一个进程内部，因此也被称为本地方法调用。在微服务应用中，由于服务提供者和服务消费者运行在不同物理机器上的不同进程内，因此也被称为远程方法调用，简称 RPC（Remote Procedure Call）。 RPC 是微服务架构的基石，它提供了一种应用间通信的方式。RPC 的主要作用是："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T15:44:18.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"设计"}],["meta",{"property":"article:tag","content":"架构"}],["meta",{"property":"article:tag","content":"微服务"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"RPC"}],["meta",{"property":"article:published_time","content":"2023-05-15T19:08:50.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T15:44:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"微服务之服务调用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-15T19:08:50.000Z\\",\\"dateModified\\":\\"2023-09-11T15:44:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"RPC 简介","slug":"rpc-简介","link":"#rpc-简介","children":[]},{"level":2,"title":"RPC 核心原理","slug":"rpc-核心原理","link":"#rpc-核心原理","children":[]},{"level":2,"title":"通信协议","slug":"通信协议","link":"#通信协议","children":[{"level":3,"title":"通信协议的作用","slug":"通信协议的作用","link":"#通信协议的作用","children":[]},{"level":3,"title":"常见网络协议","slug":"常见网络协议","link":"#常见网络协议","children":[]},{"level":3,"title":"为何需要设计 RPC 协议","slug":"为何需要设计-rpc-协议","link":"#为何需要设计-rpc-协议","children":[]},{"level":3,"title":"如何设计 RPC 协议","slug":"如何设计-rpc-协议","link":"#如何设计-rpc-协议","children":[]},{"level":3,"title":"可扩展的协议","slug":"可扩展的协议","link":"#可扩展的协议","children":[]}]},{"level":2,"title":"序列化","slug":"序列化","link":"#序列化","children":[{"level":3,"title":"序列化技术","slug":"序列化技术","link":"#序列化技术","children":[]},{"level":3,"title":"序列化技术选型","slug":"序列化技术选型","link":"#序列化技术选型","children":[]},{"level":3,"title":"序列化问题","slug":"序列化问题","link":"#序列化问题","children":[]},{"level":3,"title":"序列化要点","slug":"序列化要点","link":"#序列化要点","children":[]}]},{"level":2,"title":"网络传输","slug":"网络传输","link":"#网络传输","children":[{"level":3,"title":"同步阻塞方式（BIO）","slug":"同步阻塞方式-bio","link":"#同步阻塞方式-bio","children":[]},{"level":3,"title":"同步非阻塞方式 (NIO)","slug":"同步非阻塞方式-nio","link":"#同步非阻塞方式-nio","children":[]},{"level":3,"title":"异步非阻塞方式 (AIO)","slug":"异步非阻塞方式-aio","link":"#异步非阻塞方式-aio","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1694447058000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":15.34,"words":4603},"filePathRelative":"03.设计/01.架构/01.微服务/03.微服务之服务调用.md","localizedDate":"2023年5月15日","excerpt":"<h1> 微服务之服务调用</h1>\\n<h2> RPC 简介</h2>\\n<p>通过注册中心，服务消费者和服务提供者就可以感知彼此。但是，要实现交互还必须解决通信问题。</p>\\n<p>在单体应用中，一次服务调用发生在同一台机器上的同一个进程内部，因此也被称为本地方法调用。在微服务应用中，由于服务提供者和服务消费者运行在不同物理机器上的不同进程内，因此也被称为<strong>远程方法调用</strong>，简称 <strong>RPC（Remote Procedure Call）</strong>。</p>\\n<p>RPC 是微服务架构的基石，它提供了一种应用间通信的方式。RPC 的主要作用是：</p>","autoDesc":true}');export{e as data};
