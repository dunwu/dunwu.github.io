const e=JSON.parse('{"key":"v-78dcff75","path":"/pages/8262aa/","title":"MySQL 工作流","lang":"zh-CN","frontmatter":{"title":"MySQL 工作流","date":"2020-07-16T11:14:07.000Z","category":["数据库","关系型数据库","Mysql"],"tag":["数据库","关系型数据库","Mysql"],"permalink":"/pages/8262aa/","description":"MySQL 工作流 基础架构 大体来说，MySQL 可以分为 Server 层和存储引擎层两部分。 Server 层包括连接器、查询缓存、分析器、优化器、执行器等，涵盖 MySQL 的大多数核心服务功能，以及所有的内置函数（如日期、时间、数学和加密函数等），所有跨存储引擎的功能都在这一层实现，比如存储过程、触发器、视图等。 存储引擎层负责数据的存储和提取。其架构模式是插件式的，支持 InnoDB、MyISAM、Memory 等多个存储引擎。现在最常用的存储引擎是 InnoDB，它从 MySQL 5.5.5 版本开始成为了默认存储引擎。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/8262aa/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"MySQL 工作流"}],["meta",{"property":"og:description","content":"MySQL 工作流 基础架构 大体来说，MySQL 可以分为 Server 层和存储引擎层两部分。 Server 层包括连接器、查询缓存、分析器、优化器、执行器等，涵盖 MySQL 的大多数核心服务功能，以及所有的内置函数（如日期、时间、数学和加密函数等），所有跨存储引擎的功能都在这一层实现，比如存储过程、触发器、视图等。 存储引擎层负责数据的存储和提取。其架构模式是插件式的，支持 InnoDB、MyISAM、Memory 等多个存储引擎。现在最常用的存储引擎是 InnoDB，它从 MySQL 5.5.5 版本开始成为了默认存储引擎。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T13:36:40.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"关系型数据库"}],["meta",{"property":"article:tag","content":"Mysql"}],["meta",{"property":"article:published_time","content":"2020-07-16T11:14:07.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T13:36:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL 工作流\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-07-16T11:14:07.000Z\\",\\"dateModified\\":\\"2023-09-10T13:36:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"基础架构","slug":"基础架构","link":"#基础架构","children":[]},{"level":2,"title":"查询过程","slug":"查询过程","link":"#查询过程","children":[{"level":3,"title":"（一）连接器","slug":"一-连接器","link":"#一-连接器","children":[]},{"level":3,"title":"（二）查询缓存","slug":"二-查询缓存","link":"#二-查询缓存","children":[]},{"level":3,"title":"（三）语法分析","slug":"三-语法分析","link":"#三-语法分析","children":[]},{"level":3,"title":"（四）查询优化","slug":"四-查询优化","link":"#四-查询优化","children":[]},{"level":3,"title":"（五）查询执行引擎","slug":"五-查询执行引擎","link":"#五-查询执行引擎","children":[]},{"level":3,"title":"（六）返回结果","slug":"六-返回结果","link":"#六-返回结果","children":[]}]},{"level":2,"title":"更新过程","slug":"更新过程","link":"#更新过程","children":[{"level":3,"title":"redo log","slug":"redo-log","link":"#redo-log","children":[]},{"level":3,"title":"bin log","slug":"bin-log","link":"#bin-log","children":[]},{"level":3,"title":"redo log vs. bin log","slug":"redo-log-vs-bin-log","link":"#redo-log-vs-bin-log","children":[]},{"level":3,"title":"两阶段提交","slug":"两阶段提交","link":"#两阶段提交","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694353000000,"updatedTime":1694353000000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":15.93,"words":4779},"filePathRelative":"12.数据库/03.关系型数据库/02.Mysql/02.MySQL工作流.md","localizedDate":"2020年7月16日","excerpt":"<h1> MySQL 工作流</h1>\\n<h2> 基础架构</h2>\\n<p>大体来说，MySQL 可以分为 Server 层和存储引擎层两部分。</p>\\n<p><strong>Server 层包括连接器、查询缓存、分析器、优化器、执行器等</strong>，涵盖 MySQL 的大多数核心服务功能，以及所有的内置函数（如日期、时间、数学和加密函数等），所有跨存储引擎的功能都在这一层实现，比如存储过程、触发器、视图等。</p>\\n<p><strong>存储引擎层负责数据的存储和提取</strong>。其架构模式是插件式的，支持 InnoDB、MyISAM、Memory 等多个存储引擎。现在最常用的存储引擎是 InnoDB，它从 MySQL 5.5.5 版本开始成为了默认存储引擎。</p>","autoDesc":true}');export{e as data};
