const e=JSON.parse('{"key":"v-4124e40f","path":"/15.%E5%88%86%E5%B8%83%E5%BC%8F/21.%E5%88%86%E5%B8%83%E5%BC%8F%E9%80%9A%E4%BF%A1/01.RPC/00.RPC%E7%BB%BC%E5%90%88/11.%E6%9C%8D%E5%8A%A1%E6%B3%A8%E5%86%8C%E5%92%8C%E5%8F%91%E7%8E%B0.html","title":"服务注册和发现","lang":"zh-CN","frontmatter":{"title":"服务注册和发现","date":"2022-04-18T19:34:47.000Z","order":11,"category":["分布式","分布式通信","RPC","RPC综合"],"tag":["分布式","服务治理","服务注册","服务发现","CAP"],"description":"服务注册和发现 服务元数据 构建微服务的首要问题是：服务提供者和服务消费者通信时，如何达成共识。具体来说，就是这个服务的接口名是什么？调用这个服务需要传递哪些参数？接口的返回值是什么类型？以及一些其他接口描述信息。 服务的元数据信息通常有以下信息： 服务节点信息，如 IP、端口等。 接口定义，如接口名、请求参数、响应参数等。 请求失败的重试次数 序列化方式 压缩方式 通信协议 等等","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/15.%E5%88%86%E5%B8%83%E5%BC%8F/21.%E5%88%86%E5%B8%83%E5%BC%8F%E9%80%9A%E4%BF%A1/01.RPC/00.RPC%E7%BB%BC%E5%90%88/11.%E6%9C%8D%E5%8A%A1%E6%B3%A8%E5%86%8C%E5%92%8C%E5%8F%91%E7%8E%B0.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"服务注册和发现"}],["meta",{"property":"og:description","content":"服务注册和发现 服务元数据 构建微服务的首要问题是：服务提供者和服务消费者通信时，如何达成共识。具体来说，就是这个服务的接口名是什么？调用这个服务需要传递哪些参数？接口的返回值是什么类型？以及一些其他接口描述信息。 服务的元数据信息通常有以下信息： 服务节点信息，如 IP、端口等。 接口定义，如接口名、请求参数、响应参数等。 请求失败的重试次数 序列化方式 压缩方式 通信协议 等等"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-24T23:58:37.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"服务治理"}],["meta",{"property":"article:tag","content":"服务注册"}],["meta",{"property":"article:tag","content":"服务发现"}],["meta",{"property":"article:tag","content":"CAP"}],["meta",{"property":"article:published_time","content":"2022-04-18T19:34:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-24T23:58:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"服务注册和发现\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-18T19:34:47.000Z\\",\\"dateModified\\":\\"2024-01-24T23:58:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"服务元数据","slug":"服务元数据","link":"#服务元数据","children":[{"level":3,"title":"REST API","slug":"rest-api","link":"#rest-api","children":[]},{"level":3,"title":"XML 文件","slug":"xml-文件","link":"#xml-文件","children":[]},{"level":3,"title":"IDL 文件","slug":"idl-文件","link":"#idl-文件","children":[]}]},{"level":2,"title":"服务注册和发现基本原理","slug":"服务注册和发现基本原理","link":"#服务注册和发现基本原理","children":[{"level":3,"title":"应用内注册与发现","slug":"应用内注册与发现","link":"#应用内注册与发现","children":[]},{"level":3,"title":"应用外注册与发现","slug":"应用外注册与发现","link":"#应用外注册与发现","children":[]}]},{"level":2,"title":"注册中心基本功能","slug":"注册中心基本功能","link":"#注册中心基本功能","children":[{"level":3,"title":"注册中心 API","slug":"注册中心-api","link":"#注册中心-api","children":[]},{"level":3,"title":"集群部署","slug":"集群部署","link":"#集群部署","children":[]},{"level":3,"title":"元数据存储","slug":"元数据存储","link":"#元数据存储","children":[]},{"level":3,"title":"白名单机制","slug":"白名单机制","link":"#白名单机制","children":[]}]},{"level":2,"title":"服务健康检测","slug":"服务健康检测","link":"#服务健康检测","children":[{"level":3,"title":"服务状态变更通知","slug":"服务状态变更通知","link":"#服务状态变更通知","children":[]},{"level":3,"title":"心跳开关保护机制","slug":"心跳开关保护机制","link":"#心跳开关保护机制","children":[]},{"level":3,"title":"服务节点摘除保护机制","slug":"服务节点摘除保护机制","link":"#服务节点摘除保护机制","children":[]},{"level":3,"title":"静态注册中心","slug":"静态注册中心","link":"#静态注册中心","children":[]}]},{"level":2,"title":"注册中心选型","slug":"注册中心选型","link":"#注册中心选型","children":[{"level":3,"title":"高可用性","slug":"高可用性","link":"#高可用性","children":[]},{"level":3,"title":"数据一致性","slug":"数据一致性","link":"#数据一致性","children":[]}]},{"level":2,"title":"服务发现的问题","slug":"服务发现的问题","link":"#服务发现的问题","children":[{"level":3,"title":"多注册中心","slug":"多注册中心","link":"#多注册中心","children":[]},{"level":3,"title":"并行订阅服务","slug":"并行订阅服务","link":"#并行订阅服务","children":[]},{"level":3,"title":"批量注销服务","slug":"批量注销服务","link":"#批量注销服务","children":[]},{"level":3,"title":"服务变更信息的增量更新","slug":"服务变更信息的增量更新","link":"#服务变更信息的增量更新","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1706140717000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":3}]},"readingTime":{"minutes":21.24,"words":6373},"filePathRelative":"15.分布式/21.分布式通信/01.RPC/00.RPC综合/11.服务注册和发现.md","localizedDate":"2022年4月18日","excerpt":"<h1> 服务注册和发现</h1>\\n<h2> 服务元数据</h2>\\n<p>构建微服务的首要问题是：服务提供者和服务消费者通信时，如何达成共识。具体来说，就是这个服务的接口名是什么？调用这个服务需要传递哪些参数？接口的返回值是什么类型？以及一些其他接口描述信息。</p>\\n<p>服务的元数据信息通常有以下信息：</p>\\n<ul>\\n<li>服务节点信息，如 IP、端口等。</li>\\n<li>接口定义，如接口名、请求参数、响应参数等。</li>\\n<li>请求失败的重试次数</li>\\n<li>序列化方式</li>\\n<li>压缩方式</li>\\n<li>通信协议</li>\\n<li>等等</li>\\n</ul>","autoDesc":true}');export{e as data};
