const e=JSON.parse('{"key":"v-43e65d9f","path":"/pages/ab9f64/","title":"RPC 基础篇","lang":"zh-CN","frontmatter":{"title":"RPC 基础篇","date":"2020-06-10T16:00:00.000Z","category":["分布式","分布式通信","RPC","RPC综合"],"tag":["分布式","分布式应用","微服务","RPC"],"permalink":"/pages/ab9f64/","description":"RPC 基础篇 RPC 简介 什么是 RPC RPC 的全称是 Remote Procedure Call，即远程过程调用。 RPC 的主要作用是： 屏蔽远程调用跟本地调用的差异，让用户像调用本地一样去调用远程方法。 隐藏底层网络通信的复杂性，让用户更聚焦于业务逻辑。 RPC 的架构定位 RPC 是微服务架构的基石，它提供了一种应用间通信的方式。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/ab9f64/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"RPC 基础篇"}],["meta",{"property":"og:description","content":"RPC 基础篇 RPC 简介 什么是 RPC RPC 的全称是 Remote Procedure Call，即远程过程调用。 RPC 的主要作用是： 屏蔽远程调用跟本地调用的差异，让用户像调用本地一样去调用远程方法。 隐藏底层网络通信的复杂性，让用户更聚焦于业务逻辑。 RPC 的架构定位 RPC 是微服务架构的基石，它提供了一种应用间通信的方式。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T10:35:58.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"分布式应用"}],["meta",{"property":"article:tag","content":"微服务"}],["meta",{"property":"article:tag","content":"RPC"}],["meta",{"property":"article:published_time","content":"2020-06-10T16:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T10:35:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RPC 基础篇\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-10T16:00:00.000Z\\",\\"dateModified\\":\\"2023-09-10T10:35:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"RPC 简介","slug":"rpc-简介","link":"#rpc-简介","children":[{"level":3,"title":"什么是 RPC","slug":"什么是-rpc","link":"#什么是-rpc","children":[]},{"level":3,"title":"RPC 的架构定位","slug":"rpc-的架构定位","link":"#rpc-的架构定位","children":[]}]},{"level":2,"title":"RPC 核心原理","slug":"rpc-核心原理","link":"#rpc-核心原理","children":[]},{"level":2,"title":"RPC 协议","slug":"rpc-协议","link":"#rpc-协议","children":[{"level":3,"title":"协议的作用","slug":"协议的作用","link":"#协议的作用","children":[]},{"level":3,"title":"为何需要设计 RPC 协议","slug":"为何需要设计-rpc-协议","link":"#为何需要设计-rpc-协议","children":[]},{"level":3,"title":"如何？","slug":"如何","link":"#如何","children":[]},{"level":3,"title":"可扩展的协议","slug":"可扩展的协议","link":"#可扩展的协议","children":[]}]},{"level":2,"title":"RPC 序列化","slug":"rpc-序列化","link":"#rpc-序列化","children":[{"level":3,"title":"序列化技术","slug":"序列化技术","link":"#序列化技术","children":[]},{"level":3,"title":"序列化技术选型","slug":"序列化技术选型","link":"#序列化技术选型","children":[]},{"level":3,"title":"序列化问题","slug":"序列化问题","link":"#序列化问题","children":[]},{"level":3,"title":"序列化要点","slug":"序列化要点","link":"#序列化要点","children":[]}]},{"level":2,"title":"RPC 通信","slug":"rpc-通信","link":"#rpc-通信","children":[{"level":3,"title":"IO 多路复用","slug":"io-多路复用","link":"#io-多路复用","children":[]},{"level":3,"title":"零拷贝","slug":"零拷贝","link":"#零拷贝","children":[]}]},{"level":2,"title":"RPC 动态代理","slug":"rpc-动态代理","link":"#rpc-动态代理","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694342158000,"updatedTime":1694342158000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":11.55,"words":3465},"filePathRelative":"15.分布式/21.分布式通信/01.RPC/00.RPC综合/01.RPC基础.md","localizedDate":"2020年6月10日","excerpt":"<h1> RPC 基础篇</h1>\\n<h2> RPC 简介</h2>\\n<h3> 什么是 RPC</h3>\\n<p>RPC 的全称是 <strong>Remote Procedure Call</strong>，即<strong>远程过程调用</strong>。</p>\\n<p>RPC 的主要作用是：</p>\\n<ul>\\n<li><strong>屏蔽远程调用跟本地调用的差异</strong>，让用户像调用本地一样去调用远程方法。</li>\\n<li><strong>隐藏底层网络通信的复杂性</strong>，让用户更聚焦于业务逻辑。</li>\\n</ul>\\n<h3> RPC 的架构定位</h3>\\n<p>RPC 是微服务架构的基石，它提供了一种应用间通信的方式。<img src=\\"https://raw.githubusercontent.com/dunwu/images/dev/snap/20220619101023.png\\" alt=\\"\\" loading=\\"lazy\\"></p>","autoDesc":true}');export{e as data};
