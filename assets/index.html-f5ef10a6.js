const e=JSON.parse('{"key":"v-41fea710","path":"/pages/aa7497/","title":"微服务基本原理","lang":"zh-CN","frontmatter":{"title":"微服务基本原理","date":"2020-07-21T15:35:00.000Z","order":10,"permalink":"/pages/aa7497/","category":["设计","架构","微服务"],"tag":["设计","架构","微服务","分布式"],"description":"微服务基本原理 微服务技术架构 img 第一层：接入层 外部设备访问的统一接入层。 第二层：聚合服务层 对下层的基础服务做一些聚合，剪裁的工作，适配上层不同设备的数据输出。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/aa7497/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"微服务基本原理"}],["meta",{"property":"og:description","content":"微服务基本原理 微服务技术架构 img 第一层：接入层 外部设备访问的统一接入层。 第二层：聚合服务层 对下层的基础服务做一些聚合，剪裁的工作，适配上层不同设备的数据输出。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T22:46:25.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"设计"}],["meta",{"property":"article:tag","content":"架构"}],["meta",{"property":"article:tag","content":"微服务"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:published_time","content":"2020-07-21T15:35:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T22:46:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"微服务基本原理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-07-21T15:35:00.000Z\\",\\"dateModified\\":\\"2024-05-15T22:46:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"微服务技术架构","slug":"微服务技术架构","link":"#微服务技术架构","children":[]},{"level":2,"title":"服务通信","slug":"服务通信","link":"#服务通信","children":[{"level":3,"title":"序列化方式","slug":"序列化方式","link":"#序列化方式","children":[]},{"level":3,"title":"通信协议","slug":"通信协议","link":"#通信协议","children":[]}]},{"level":2,"title":"服务监控","slug":"服务监控","link":"#服务监控","children":[{"level":3,"title":"监控对象","slug":"监控对象","link":"#监控对象","children":[]},{"level":3,"title":"系统监控原理","slug":"系统监控原理","link":"#系统监控原理","children":[]},{"level":3,"title":"监控技术","slug":"监控技术","link":"#监控技术","children":[]}]},{"level":2,"title":"服务治理","slug":"服务治理","link":"#服务治理","children":[]},{"level":2,"title":"API 网关","slug":"api-网关","link":"#api-网关","children":[{"level":3,"title":"Zuul","slug":"zuul","link":"#zuul","children":[]}]},{"level":2,"title":"负载均衡","slug":"负载均衡","link":"#负载均衡","children":[]},{"level":2,"title":"服务路由","slug":"服务路由","link":"#服务路由","children":[{"level":3,"title":"服务路由的应用场景","slug":"服务路由的应用场景","link":"#服务路由的应用场景","children":[]},{"level":3,"title":"服务路由的规则","slug":"服务路由的规则","link":"#服务路由的规则","children":[]},{"level":3,"title":"服务路由的获取方式","slug":"服务路由的获取方式","link":"#服务路由的获取方式","children":[]},{"level":3,"title":"内部服务调用","slug":"内部服务调用","link":"#内部服务调用","children":[]},{"level":3,"title":"外部服务调用","slug":"外部服务调用","link":"#外部服务调用","children":[]}]},{"level":2,"title":"配置中心","slug":"配置中心","link":"#配置中心","children":[{"level":3,"title":"Apollo","slug":"apollo","link":"#apollo","children":[]},{"level":3,"title":"Spring Cloud Git","slug":"spring-cloud-git","link":"#spring-cloud-git","children":[]}]},{"level":2,"title":"链路追踪","slug":"链路追踪","link":"#链路追踪","children":[{"level":3,"title":"链路追踪的作用","slug":"链路追踪的作用","link":"#链路追踪的作用","children":[]},{"level":3,"title":"链路追踪的原理","slug":"链路追踪的原理","link":"#链路追踪的原理","children":[]},{"level":3,"title":"链路追踪的实现","slug":"链路追踪的实现","link":"#链路追踪的实现","children":[]},{"level":3,"title":"链路追踪方案对比","slug":"链路追踪方案对比","link":"#链路追踪方案对比","children":[]}]},{"level":2,"title":"限流熔断","slug":"限流熔断","link":"#限流熔断","children":[{"level":3,"title":"限流","slug":"限流","link":"#限流","children":[]},{"level":3,"title":"降级","slug":"降级","link":"#降级","children":[]}]},{"level":2,"title":"DEVOPS","slug":"devops","link":"#devops","children":[{"level":3,"title":"容器和容器平台","slug":"容器和容器平台","link":"#容器和容器平台","children":[]}]},{"level":2,"title":"RPC 选型","slug":"rpc-选型","link":"#rpc-选型","children":[{"level":3,"title":"限定语言 RPC","slug":"限定语言-rpc","link":"#限定语言-rpc","children":[]},{"level":3,"title":"跨语言 RPC","slug":"跨语言-rpc","link":"#跨语言-rpc","children":[]}]},{"level":2,"title":"Service Mesh","slug":"service-mesh","link":"#service-mesh","children":[{"level":3,"title":"Service Mesh 的实现原理","slug":"service-mesh-的实现原理","link":"#service-mesh-的实现原理","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1715813185000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":5}]},"readingTime":{"minutes":25.67,"words":7700},"filePathRelative":"03.设计/01.架构/01.微服务/10.微服务基本原理.md","localizedDate":"2020年7月21日","excerpt":"<h1> 微服务基本原理</h1>\\n<h2> 微服务技术架构</h2>\\n<figure><img src=\\"https://raw.githubusercontent.com/dunwu/images/master/snap/20200716195006.png\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>img</figcaption></figure>\\n<p><strong>第一层：接入层</strong></p>\\n<p>外部设备访问的统一接入层。</p>\\n<p><strong>第二层：聚合服务层</strong></p>\\n<p>对下层的基础服务做一些聚合，剪裁的工作，适配上层不同设备的数据输出。</p>","autoDesc":true}');export{e as data};
