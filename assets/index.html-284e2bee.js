const e=JSON.parse('{"key":"v-04481ae6","path":"/pages/9a462f/","title":"系统高可用架构","lang":"zh-CN","frontmatter":{"title":"系统高可用架构","date":"2018-07-05T15:11:00.000Z","category":["设计","架构","综合"],"tag":["架构","高可用"],"permalink":"/pages/9a462f/","description":"系统高可用架构 高可用架构简介 系统可用性的度量 系统不可用也被称作系统故障，业界通常用多个 9 来衡量系统的可用性。如 QQ 的可用性为 4 个 9，即 99.99% 可用。 网站不可用时间 = 故障修复时间点 - 故障发现时间点 网站年度可用性指标 = (1 - 网站不可用时间/年度总时间) * 100%","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/9a462f/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"系统高可用架构"}],["meta",{"property":"og:description","content":"系统高可用架构 高可用架构简介 系统可用性的度量 系统不可用也被称作系统故障，业界通常用多个 9 来衡量系统的可用性。如 QQ 的可用性为 4 个 9，即 99.99% 可用。 网站不可用时间 = 故障修复时间点 - 故障发现时间点 网站年度可用性指标 = (1 - 网站不可用时间/年度总时间) * 100%"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T13:36:40.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"架构"}],["meta",{"property":"article:tag","content":"高可用"}],["meta",{"property":"article:published_time","content":"2018-07-05T15:11:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T13:36:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"系统高可用架构\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-07-05T15:11:00.000Z\\",\\"dateModified\\":\\"2023-09-10T13:36:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"高可用架构简介","slug":"高可用架构简介","link":"#高可用架构简介","children":[{"level":3,"title":"系统可用性的度量","slug":"系统可用性的度量","link":"#系统可用性的度量","children":[]},{"level":3,"title":"故障原因","slug":"故障原因","link":"#故障原因","children":[]},{"level":3,"title":"什么是高可用的系统架构","slug":"什么是高可用的系统架构","link":"#什么是高可用的系统架构","children":[]}]},{"level":2,"title":"高可用架构理论","slug":"高可用架构理论","link":"#高可用架构理论","children":[]},{"level":2,"title":"架构模式","slug":"架构模式","link":"#架构模式","children":[{"level":3,"title":"主备复制","slug":"主备复制","link":"#主备复制","children":[]},{"level":3,"title":"主从复制","slug":"主从复制","link":"#主从复制","children":[]},{"level":3,"title":"集群+分区","slug":"集群-分区","link":"#集群-分区","children":[]}]},{"level":2,"title":"高可用的应用","slug":"高可用的应用","link":"#高可用的应用","children":[{"level":3,"title":"负载均衡","slug":"负载均衡","link":"#负载均衡","children":[]},{"level":3,"title":"分布式 Session","slug":"分布式-session","link":"#分布式-session","children":[]}]},{"level":2,"title":"高可用的服务","slug":"高可用的服务","link":"#高可用的服务","children":[{"level":3,"title":"分级管理","slug":"分级管理","link":"#分级管理","children":[]},{"level":3,"title":"超时重试","slug":"超时重试","link":"#超时重试","children":[]},{"level":3,"title":"异步调用","slug":"异步调用","link":"#异步调用","children":[]},{"level":3,"title":"过载保护","slug":"过载保护","link":"#过载保护","children":[]},{"level":3,"title":"幂等性设计","slug":"幂等性设计","link":"#幂等性设计","children":[]}]},{"level":2,"title":"高可用的存储","slug":"高可用的存储","link":"#高可用的存储","children":[{"level":3,"title":"数据备份","slug":"数据备份","link":"#数据备份","children":[]},{"level":3,"title":"失效转移","slug":"失效转移","link":"#失效转移","children":[]}]},{"level":2,"title":"辅助手段","slug":"辅助手段","link":"#辅助手段","children":[{"level":3,"title":"异地多活","slug":"异地多活","link":"#异地多活","children":[]},{"level":3,"title":"发布流程","slug":"发布流程","link":"#发布流程","children":[]},{"level":3,"title":"系统监控","slug":"系统监控","link":"#系统监控","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694353000000,"updatedTime":1694353000000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":20.12,"words":6035},"filePathRelative":"03.设计/01.架构/00.综合/04.系统高可用架构.md","localizedDate":"2018年7月5日","excerpt":"<h1> 系统高可用架构</h1>\\n<h2> 高可用架构简介</h2>\\n<h3> 系统可用性的度量</h3>\\n<p>系统不可用也被称作系统故障，<strong>业界通常用多个 9 来衡量系统的可用性</strong>。如 QQ 的可用性为 4 个 9，即 99.99% 可用。</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>网站不可用时间 = 故障修复时间点 - 故障发现时间点\\n网站年度可用性指标 = (1 - 网站不可用时间/年度总时间) * 100%\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
