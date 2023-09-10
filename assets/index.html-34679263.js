const e=JSON.parse('{"key":"v-8b446324","path":"/pages/98a1c1/","title":"深入浅出负载均衡","lang":"zh-CN","frontmatter":{"title":"深入浅出负载均衡","date":"2018-07-05T15:50:00.000Z","category":["分布式","分布式调度"],"tag":["分布式","流量调度","负载均衡"],"permalink":"/pages/98a1c1/","description":"深入浅出负载均衡 img 负载均衡简介 大型网站面临的挑战 大型网站都要面对庞大的用户量，高并发，海量数据等挑战。 为了提升系统整体的性能，可以采用垂直扩展和水平扩展两种方式。 垂直扩展：在网站发展早期，可以从单机的角度通过增加硬件处理能力，比如 CPU 处理能力，内存容量，磁盘等方面，实现服务器处理能力的提升。但是，单机是有性能瓶颈的，一旦触及瓶颈，再想提升，付出的成本和代价会极高。这显然不能满足大型分布式系统（网站）所有应对的大流量，高并发，海量数据等挑战。 水平扩展：通过集群来分担大型网站的流量。集群中的应用服务器（节点）通常被设计成无状态，用户可以请求任何一个节点，这些节点共同分担访问压力。水平扩展有两个要点： 应用集群：将同一应用部署到多台机器上，组成处理集群，接收负载均衡设备分发的请求，进行处理，并返回相应数据。 负载均衡：将用户访问请求，通过某种算法，分发到集群中的节点。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/98a1c1/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"深入浅出负载均衡"}],["meta",{"property":"og:description","content":"深入浅出负载均衡 img 负载均衡简介 大型网站面临的挑战 大型网站都要面对庞大的用户量，高并发，海量数据等挑战。 为了提升系统整体的性能，可以采用垂直扩展和水平扩展两种方式。 垂直扩展：在网站发展早期，可以从单机的角度通过增加硬件处理能力，比如 CPU 处理能力，内存容量，磁盘等方面，实现服务器处理能力的提升。但是，单机是有性能瓶颈的，一旦触及瓶颈，再想提升，付出的成本和代价会极高。这显然不能满足大型分布式系统（网站）所有应对的大流量，高并发，海量数据等挑战。 水平扩展：通过集群来分担大型网站的流量。集群中的应用服务器（节点）通常被设计成无状态，用户可以请求任何一个节点，这些节点共同分担访问压力。水平扩展有两个要点： 应用集群：将同一应用部署到多台机器上，组成处理集群，接收负载均衡设备分发的请求，进行处理，并返回相应数据。 负载均衡：将用户访问请求，通过某种算法，分发到集群中的节点。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T10:35:58.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"流量调度"}],["meta",{"property":"article:tag","content":"负载均衡"}],["meta",{"property":"article:published_time","content":"2018-07-05T15:50:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T10:35:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"深入浅出负载均衡\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-07-05T15:50:00.000Z\\",\\"dateModified\\":\\"2023-09-10T10:35:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"负载均衡简介","slug":"负载均衡简介","link":"#负载均衡简介","children":[{"level":3,"title":"大型网站面临的挑战","slug":"大型网站面临的挑战","link":"#大型网站面临的挑战","children":[]},{"level":3,"title":"什么是负载均衡","slug":"什么是负载均衡","link":"#什么是负载均衡","children":[]}]},{"level":2,"title":"负载均衡的分类","slug":"负载均衡的分类","link":"#负载均衡的分类","children":[{"level":3,"title":"载体维度分类","slug":"载体维度分类","link":"#载体维度分类","children":[]},{"level":3,"title":"网络通信分类","slug":"网络通信分类","link":"#网络通信分类","children":[]}]},{"level":2,"title":"负载均衡算法","slug":"负载均衡算法","link":"#负载均衡算法","children":[{"level":3,"title":"随机","slug":"随机","link":"#随机","children":[]},{"level":3,"title":"轮询","slug":"轮询","link":"#轮询","children":[]},{"level":3,"title":"最小活跃数","slug":"最小活跃数","link":"#最小活跃数","children":[]},{"level":3,"title":"哈希","slug":"哈希","link":"#哈希","children":[]},{"level":3,"title":"一致性哈希","slug":"一致性哈希","link":"#一致性哈希","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694342158000,"updatedTime":1694342158000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":25.49,"words":7647},"filePathRelative":"15.分布式/12.分布式调度/02.负载均衡.md","localizedDate":"2018年7月5日","excerpt":"<h1> 深入浅出负载均衡</h1>\\n<figure><img src=\\"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200528155252.png\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>img</figcaption></figure>\\n<h2> 负载均衡简介</h2>\\n<h3> 大型网站面临的挑战</h3>\\n<p>大型网站都要面对庞大的用户量，高并发，海量数据等挑战。</p>\\n<p>为了提升系统整体的性能，可以采用垂直扩展和水平扩展两种方式。</p>\\n<ul>\\n<li><strong>垂直扩展</strong>：在网站发展早期，可以从单机的角度通过<strong>增加硬件处理能力</strong>，比如 CPU 处理能力，内存容量，磁盘等方面，实现服务器处理能力的提升。但是，单机是有性能瓶颈的，一旦触及瓶颈，再想提升，付出的成本和代价会极高。这显然不能满足大型分布式系统（网站）所有应对的大流量，高并发，海量数据等挑战。</li>\\n<li><strong>水平扩展</strong>：通过集群来分担大型网站的流量。集群中的应用服务器（节点）通常被设计成无状态，用户可以请求任何一个节点，这些节点共同分担访问压力。水平扩展有两个要点：\\n<ul>\\n<li><strong>应用集群</strong>：将同一应用部署到多台机器上，组成处理集群，接收负载均衡设备分发的请求，进行处理，并返回相应数据。</li>\\n<li><strong>负载均衡</strong>：将用户访问请求，通过某种算法，分发到集群中的节点。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
