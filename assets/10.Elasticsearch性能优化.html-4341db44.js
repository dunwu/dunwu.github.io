const e=JSON.parse('{"key":"v-8d2065f6","path":"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/07.%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E6%95%B0%E6%8D%AE%E5%BA%93/01.Elasticsearch/10.Elasticsearch%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.html","title":"Elasticsearch 性能优化","lang":"zh-CN","frontmatter":{"title":"Elasticsearch 性能优化","date":"2022-01-21T19:54:43.000Z","order":10,"category":["数据库","搜索引擎数据库","Elasticsearch"],"tag":["数据库","搜索引擎数据库","Elasticsearch","性能"],"description":"Elasticsearch 性能优化 Elasticsearch 是当前流行的企业级搜索引擎，设计用于云计算中，能够达到实时搜索，稳定，可靠，快速，安装使用方便。作为一个开箱即用的产品，在生产环境上线之后，我们其实不一定能确保其的性能和稳定性。如何根据实际情况提高服务的性能，其实有很多技巧。这章我们分享从实战经验中总结出来的 elasticsearch 性能优化，主要从硬件配置优化、索引优化设置、查询方面优化、数据结构优化、集群架构优化等方面讲解。 硬件配置优化 升级硬件设备配置一直都是提高服务能力最快速有效的手段，在系统层面能够影响应用性能的一般包括三个因素：CPU、内存和 IO，可以从这三方面进行 ES 的性能优化工作。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/12.%E6%95%B0%E6%8D%AE%E5%BA%93/07.%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E6%95%B0%E6%8D%AE%E5%BA%93/01.Elasticsearch/10.Elasticsearch%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Elasticsearch 性能优化"}],["meta",{"property":"og:description","content":"Elasticsearch 性能优化 Elasticsearch 是当前流行的企业级搜索引擎，设计用于云计算中，能够达到实时搜索，稳定，可靠，快速，安装使用方便。作为一个开箱即用的产品，在生产环境上线之后，我们其实不一定能确保其的性能和稳定性。如何根据实际情况提高服务的性能，其实有很多技巧。这章我们分享从实战经验中总结出来的 elasticsearch 性能优化，主要从硬件配置优化、索引优化设置、查询方面优化、数据结构优化、集群架构优化等方面讲解。 硬件配置优化 升级硬件设备配置一直都是提高服务能力最快速有效的手段，在系统层面能够影响应用性能的一般包括三个因素：CPU、内存和 IO，可以从这三方面进行 ES 的性能优化工作。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T15:44:18.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"搜索引擎数据库"}],["meta",{"property":"article:tag","content":"Elasticsearch"}],["meta",{"property":"article:tag","content":"性能"}],["meta",{"property":"article:published_time","content":"2022-01-21T19:54:43.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T15:44:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Elasticsearch 性能优化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-21T19:54:43.000Z\\",\\"dateModified\\":\\"2023-09-11T15:44:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"硬件配置优化","slug":"硬件配置优化","link":"#硬件配置优化","children":[{"level":3,"title":"CPU 配置","slug":"cpu-配置","link":"#cpu-配置","children":[]},{"level":3,"title":"内存配置","slug":"内存配置","link":"#内存配置","children":[]},{"level":3,"title":"磁盘","slug":"磁盘","link":"#磁盘","children":[]}]},{"level":2,"title":"索引优化设置","slug":"索引优化设置","link":"#索引优化设置","children":[{"level":3,"title":"批量提交","slug":"批量提交","link":"#批量提交","children":[]},{"level":3,"title":"增加 Refresh 时间间隔","slug":"增加-refresh-时间间隔","link":"#增加-refresh-时间间隔","children":[]},{"level":3,"title":"修改 index_buffer_size 的设置","slug":"修改-index-buffer-size-的设置","link":"#修改-index-buffer-size-的设置","children":[]},{"level":3,"title":"修改 translog 相关的设置","slug":"修改-translog-相关的设置","link":"#修改-translog-相关的设置","children":[]},{"level":3,"title":"注意 _id 字段的使用","slug":"注意-id-字段的使用","link":"#注意-id-字段的使用","children":[]},{"level":3,"title":"注意 _all 字段及 _source 字段的使用","slug":"注意-all-字段及-source-字段的使用","link":"#注意-all-字段及-source-字段的使用","children":[]},{"level":3,"title":"合理的配置使用 index 属性","slug":"合理的配置使用-index-属性","link":"#合理的配置使用-index-属性","children":[]},{"level":3,"title":"减少副本数量","slug":"减少副本数量","link":"#减少副本数量","children":[]}]},{"level":2,"title":"查询方面优化","slug":"查询方面优化","link":"#查询方面优化","children":[{"level":3,"title":"路由优化","slug":"路由优化","link":"#路由优化","children":[]},{"level":3,"title":"Filter VS Query","slug":"filter-vs-query","link":"#filter-vs-query","children":[]},{"level":3,"title":"深度翻页","slug":"深度翻页","link":"#深度翻页","children":[]},{"level":3,"title":"脚本（script）合理使用","slug":"脚本-script-合理使用","link":"#脚本-script-合理使用","children":[]}]},{"level":2,"title":"数据结构优化","slug":"数据结构优化","link":"#数据结构优化","children":[{"level":3,"title":"尽量减少不需要的字段","slug":"尽量减少不需要的字段","link":"#尽量减少不需要的字段","children":[]},{"level":3,"title":"Nested Object vs Parent/Child","slug":"nested-object-vs-parent-child","link":"#nested-object-vs-parent-child","children":[]},{"level":3,"title":"选择静态映射，非必需时，禁止动态映射","slug":"选择静态映射-非必需时-禁止动态映射","link":"#选择静态映射-非必需时-禁止动态映射","children":[]}]},{"level":2,"title":"集群架构设计","slug":"集群架构设计","link":"#集群架构设计","children":[{"level":3,"title":"主节点、数据节点和协调节点分离","slug":"主节点、数据节点和协调节点分离","link":"#主节点、数据节点和协调节点分离","children":[]},{"level":3,"title":"关闭 data 节点服务器中的 http 功能","slug":"关闭-data-节点服务器中的-http-功能","link":"#关闭-data-节点服务器中的-http-功能","children":[]},{"level":3,"title":"一台服务器上最好只部署一个 node","slug":"一台服务器上最好只部署一个-node","link":"#一台服务器上最好只部署一个-node","children":[]},{"level":3,"title":"集群分片设置","slug":"集群分片设置","link":"#集群分片设置","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1694447058000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":20.96,"words":6289},"filePathRelative":"12.数据库/07.搜索引擎数据库/01.Elasticsearch/10.Elasticsearch性能优化.md","localizedDate":"2022年1月21日","excerpt":"<h1> Elasticsearch 性能优化</h1>\\n<p>Elasticsearch 是当前流行的企业级搜索引擎，设计用于云计算中，能够达到实时搜索，稳定，可靠，快速，安装使用方便。作为一个开箱即用的产品，在生产环境上线之后，我们其实不一定能确保其的性能和稳定性。如何根据实际情况提高服务的性能，其实有很多技巧。这章我们分享从实战经验中总结出来的 elasticsearch 性能优化，主要从硬件配置优化、索引优化设置、查询方面优化、数据结构优化、集群架构优化等方面讲解。</p>\\n<h2> 硬件配置优化</h2>\\n<p>升级硬件设备配置一直都是提高服务能力最快速有效的手段，在系统层面能够影响应用性能的一般包括三个因素：CPU、内存和 IO，可以从这三方面进行 ES 的性能优化工作。</p>","autoDesc":true}');export{e as data};
