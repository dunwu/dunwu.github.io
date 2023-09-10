const e=JSON.parse('{"key":"v-0e8a64d8","path":"/pages/a69528/","title":"HBase Schema 设计","lang":"zh-CN","frontmatter":{"title":"HBase Schema 设计","date":"2023-03-15T20:28:32.000Z","category":["数据库","列式数据库","HBase"],"tag":["大数据","HBase"],"permalink":"/pages/a69528/","description":"HBase Schema 设计 HBase Schema 设计要素 这个表应该有多少 Column Family Column Family 使用什么数据 每个 Column Family 有有多少列 列名是什么，尽管列名不必在建表时定义，但读写数据是要知道的 单元应该存放什么数据 每个单元存储多少时间版本 行健(rowKey)结构是什么，应该包含什么信息 Row Key 设计 Row Key 的作用","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/a69528/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"HBase Schema 设计"}],["meta",{"property":"og:description","content":"HBase Schema 设计 HBase Schema 设计要素 这个表应该有多少 Column Family Column Family 使用什么数据 每个 Column Family 有有多少列 列名是什么，尽管列名不必在建表时定义，但读写数据是要知道的 单元应该存放什么数据 每个单元存储多少时间版本 行健(rowKey)结构是什么，应该包含什么信息 Row Key 设计 Row Key 的作用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T15:41:08.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"大数据"}],["meta",{"property":"article:tag","content":"HBase"}],["meta",{"property":"article:published_time","content":"2023-03-15T20:28:32.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-08T15:41:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HBase Schema 设计\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-15T20:28:32.000Z\\",\\"dateModified\\":\\"2023-09-08T15:41:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"HBase Schema 设计要素","slug":"hbase-schema-设计要素","link":"#hbase-schema-设计要素","children":[]},{"level":2,"title":"Row Key 设计","slug":"row-key-设计","link":"#row-key-设计","children":[{"level":3,"title":"Row Key 的作用","slug":"row-key-的作用","link":"#row-key-的作用","children":[]},{"level":3,"title":"Row Key 的设计原则","slug":"row-key-的设计原则","link":"#row-key-的设计原则","children":[]},{"level":3,"title":"热点问题","slug":"热点问题","link":"#热点问题","children":[]}]},{"level":2,"title":"HBase Schema 设计规则","slug":"hbase-schema-设计规则","link":"#hbase-schema-设计规则","children":[{"level":3,"title":"Column Family 设计","slug":"column-family-设计","link":"#column-family-设计","children":[]},{"level":3,"title":"Row 设计","slug":"row-设计","link":"#row-设计","children":[]},{"level":3,"title":"Version 设计","slug":"version-设计","link":"#version-设计","children":[]},{"level":3,"title":"TTL 设计","slug":"ttl-设计","link":"#ttl-设计","children":[]},{"level":3,"title":"Column Family 属性配置","slug":"column-family-属性配置","link":"#column-family-属性配置","children":[]}]},{"level":2,"title":"Schema 设计案例","slug":"schema-设计案例","link":"#schema-设计案例","children":[{"level":3,"title":"案例：日志数据和时序数据","slug":"案例-日志数据和时序数据","link":"#案例-日志数据和时序数据","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694186720000,"updatedTime":1694187668000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":8.84,"words":2653},"filePathRelative":"12.数据库/06.列式数据库/01.HBase/03.HBaseSchema设计.md","localizedDate":"2023年3月15日","excerpt":"<h1> HBase Schema 设计</h1>\\n<h2> HBase Schema 设计要素</h2>\\n<ul>\\n<li>这个表应该有多少 Column Family</li>\\n<li>Column Family 使用什么数据</li>\\n<li>每个 Column Family 有有多少列</li>\\n<li>列名是什么，尽管列名不必在建表时定义，但读写数据是要知道的</li>\\n<li>单元应该存放什么数据</li>\\n<li>每个单元存储多少时间版本</li>\\n<li>行健(rowKey)结构是什么，应该包含什么信息</li>\\n</ul>\\n<h2> Row Key 设计</h2>\\n<h3> Row Key 的作用</h3>","autoDesc":true}');export{e as data};
