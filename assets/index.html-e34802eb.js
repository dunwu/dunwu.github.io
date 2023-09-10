const t=JSON.parse('{"key":"v-6e3a52d6","path":"/pages/3f25aa/","title":"Cinchcast 的架构","lang":"zh-CN","frontmatter":{"title":"Cinchcast 的架构","date":"2021-11-08T08:15:33.000Z","category":["设计","架构","解决方案"],"tag":["架构","解决方案"],"permalink":"/pages/3f25aa/","description":"Cinchcast 的架构 Cinchcast 提供的解决方案允许公司创建、共享、衡量和货币化音频内容，以接触和吸引对其业务最重要的人。我们的技术将会议桥接器与实时音频流相结合，以简化在线活动并增强参与者的参与度。 Cinchcast 技术还用于为全球最大的音频社交网络 Blogtalkradio 提供动力。今天，我们的平台每天制作和分发超过 1,500 小时的原创内容。在本文中，我们描述了我们为扩展平台以支持这种规模的数据而做出的工程决策。 统计数据 浏览量每月超过 5000 万 创建了 50000 小时的音频内容 1500 万个流媒体 175,000,000 次广告展示 峰值每秒 40000 并发请求 MSSQL、Redis、ElasticSearch 集群中存储的数据达到每天数 TB， 10 人工程师团队 生产环境大概有 100 左右的硬件节点","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/3f25aa/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Cinchcast 的架构"}],["meta",{"property":"og:description","content":"Cinchcast 的架构 Cinchcast 提供的解决方案允许公司创建、共享、衡量和货币化音频内容，以接触和吸引对其业务最重要的人。我们的技术将会议桥接器与实时音频流相结合，以简化在线活动并增强参与者的参与度。 Cinchcast 技术还用于为全球最大的音频社交网络 Blogtalkradio 提供动力。今天，我们的平台每天制作和分发超过 1,500 小时的原创内容。在本文中，我们描述了我们为扩展平台以支持这种规模的数据而做出的工程决策。 统计数据 浏览量每月超过 5000 万 创建了 50000 小时的音频内容 1500 万个流媒体 175,000,000 次广告展示 峰值每秒 40000 并发请求 MSSQL、Redis、ElasticSearch 集群中存储的数据达到每天数 TB， 10 人工程师团队 生产环境大概有 100 左右的硬件节点"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T10:35:58.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"架构"}],["meta",{"property":"article:tag","content":"解决方案"}],["meta",{"property":"article:published_time","content":"2021-11-08T08:15:33.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T10:35:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Cinchcast 的架构\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-08T08:15:33.000Z\\",\\"dateModified\\":\\"2023-09-10T10:35:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"统计数据","slug":"统计数据","link":"#统计数据","children":[]},{"level":2,"title":"数据中心","slug":"数据中心","link":"#数据中心","children":[]},{"level":2,"title":"硬件","slug":"硬件","link":"#硬件","children":[]},{"level":2,"title":"开发工具","slug":"开发工具","link":"#开发工具","children":[]},{"level":2,"title":"软件和使用的技术","slug":"软件和使用的技术","link":"#软件和使用的技术","children":[]},{"level":2,"title":"监测","slug":"监测","link":"#监测","children":[]},{"level":2,"title":"我们的原则","slug":"我们的原则","link":"#我们的原则","children":[]},{"level":2,"title":"架构","slug":"架构","link":"#架构","children":[]},{"level":2,"title":"经验教训","slug":"经验教训","link":"#经验教训","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694342158000,"updatedTime":1694342158000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":4.16,"words":1248},"filePathRelative":"03.设计/01.架构/99.解决方案/Cinchcast的架构.md","localizedDate":"2021年11月8日","excerpt":"<h1> Cinchcast 的架构</h1>\\n<p>Cinchcast 提供的解决方案允许公司创建、共享、衡量和货币化音频内容，以接触和吸引对其业务最重要的人。我们的技术将会议桥接器与实时音频流相结合，以简化在线活动并增强参与者的参与度。 Cinchcast 技术还用于为全球最大的音频社交网络 Blogtalkradio 提供动力。今天，我们的平台每天制作和分发超过 1,500 小时的原创内容。在本文中，我们描述了我们为扩展平台以支持这种规模的数据而做出的工程决策。</p>\\n<h2> 统计数据</h2>\\n<ul>\\n<li>浏览量每月超过 5000 万</li>\\n<li>创建了 50000 小时的音频内容</li>\\n<li>1500 万个流媒体</li>\\n<li>175,000,000 次广告展示</li>\\n<li>峰值每秒 40000 并发请求</li>\\n<li>MSSQL、Redis、ElasticSearch 集群中存储的数据达到每天数 TB，</li>\\n<li>10 人工程师团队</li>\\n<li>生产环境大概有 100 左右的硬件节点</li>\\n</ul>","autoDesc":true}');export{t as data};
