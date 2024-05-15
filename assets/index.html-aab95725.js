const e=JSON.parse('{"key":"v-63d98e95","path":"/pages/c72587/","title":"短地址服务","lang":"zh-CN","frontmatter":{"title":"短地址服务","date":"2021-11-08T08:15:33.000Z","permalink":"/pages/c72587/","category":["设计","架构","解决方案"],"tag":["架构","解决方案"],"description":"设计 Pastebin.com (或者 Bit.ly) 本文搬运自 设计 Pastebin.com (或者 Bit.ly)","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/c72587/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"短地址服务"}],["meta",{"property":"og:description","content":"设计 Pastebin.com (或者 Bit.ly) 本文搬运自 设计 Pastebin.com (或者 Bit.ly)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T22:46:25.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"架构"}],["meta",{"property":"article:tag","content":"解决方案"}],["meta",{"property":"article:published_time","content":"2021-11-08T08:15:33.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T22:46:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"短地址服务\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-08T08:15:33.000Z\\",\\"dateModified\\":\\"2024-05-15T22:46:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"步骤一、需求分析","slug":"步骤一、需求分析","link":"#步骤一、需求分析","children":[{"level":3,"title":"用例","slug":"用例","link":"#用例","children":[]},{"level":3,"title":"约束和假设","slug":"约束和假设","link":"#约束和假设","children":[]}]},{"level":2,"title":"步骤二、顶层设计","slug":"步骤二、顶层设计","link":"#步骤二、顶层设计","children":[]},{"level":2,"title":"步骤三、核心组件设计","slug":"步骤三、核心组件设计","link":"#步骤三、核心组件设计","children":[{"level":3,"title":"用例：用户输入一段文本，然后得到一个随机生成的链接","slug":"用例-用户输入一段文本-然后得到一个随机生成的链接","link":"#用例-用户输入一段文本-然后得到一个随机生成的链接","children":[]},{"level":3,"title":"用例：用户输入一个 paste 的 url 后可以看到它存储的内容","slug":"用例-用户输入一个-paste-的-url-后可以看到它存储的内容","link":"#用例-用户输入一个-paste-的-url-后可以看到它存储的内容","children":[]},{"level":3,"title":"用例： 服务跟踪分析页面","slug":"用例-服务跟踪分析页面","link":"#用例-服务跟踪分析页面","children":[]},{"level":3,"title":"用例： 服务删除过期的 pastes","slug":"用例-服务删除过期的-pastes","link":"#用例-服务删除过期的-pastes","children":[]}]},{"level":2,"title":"步骤四、扩展设计","slug":"步骤四、扩展设计","link":"#步骤四、扩展设计","children":[]},{"level":2,"title":"额外的话题","slug":"额外的话题","link":"#额外的话题","children":[{"level":3,"title":"NoSQL","slug":"nosql","link":"#nosql","children":[]},{"level":3,"title":"缓存","slug":"缓存","link":"#缓存","children":[]},{"level":3,"title":"异步和微服务","slug":"异步和微服务","link":"#异步和微服务","children":[]},{"level":3,"title":"通信","slug":"通信","link":"#通信","children":[]},{"level":3,"title":"安全","slug":"安全","link":"#安全","children":[]},{"level":3,"title":"延迟数字","slug":"延迟数字","link":"#延迟数字","children":[]},{"level":3,"title":"持续进行","slug":"持续进行","link":"#持续进行","children":[]}]}],"git":{"createdTime":1694447058000,"updatedTime":1715813185000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":10.73,"words":3218},"filePathRelative":"03.设计/01.架构/99.解决方案/短地址服务.md","localizedDate":"2021年11月8日","excerpt":"<h1> 设计 <a href=\\"http://Pastebin.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Pastebin.com</a> (或者 <a href=\\"http://Bit.ly\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Bit.ly</a>)</h1>\\n<blockquote>\\n<p>本文搬运自 <a href=\\"https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README-zh-Hans.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">设计 Pastebin.com (或者 Bit.ly)</a></p>\\n</blockquote>","autoDesc":true}');export{e as data};
