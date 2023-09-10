const e=JSON.parse('{"key":"v-7c2d47aa","path":"/pages/8448de/","title":"ShardingSphere Jdbc","lang":"zh-CN","frontmatter":{"title":"ShardingSphere Jdbc","date":"2020-12-28T00:01:28.000Z","category":["数据库","数据库中间件","Shardingsphere"],"tag":["数据库","中间件","分库分表"],"permalink":"/pages/8448de/","description":"ShardingSphere Jdbc 简介 shardingsphere-jdbc 定位为轻量级 Java 框架，在 Java 的 JDBC 层提供的额外服务。 它使用客户端直连数据库，以 jar 包形式提供服务，无需额外部署和依赖，可理解为增强版的 JDBC 驱动，完全兼容 JDBC 和各种 ORM 框架。 适用于任何基于 JDBC 的 ORM 框架，如：JPA, Hibernate, Mybatis, Spring JDBC Template 或直接使用 JDBC。 支持任何第三方的数据库连接池，如：DBCP, C3P0, BoneCP, Druid, HikariCP 等。 支持任意实现 JDBC 规范的数据库，目前支持 MySQL，Oracle，SQLServer，PostgreSQL 以及任何遵循 SQL92 标准的数据库。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/8448de/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"ShardingSphere Jdbc"}],["meta",{"property":"og:description","content":"ShardingSphere Jdbc 简介 shardingsphere-jdbc 定位为轻量级 Java 框架，在 Java 的 JDBC 层提供的额外服务。 它使用客户端直连数据库，以 jar 包形式提供服务，无需额外部署和依赖，可理解为增强版的 JDBC 驱动，完全兼容 JDBC 和各种 ORM 框架。 适用于任何基于 JDBC 的 ORM 框架，如：JPA, Hibernate, Mybatis, Spring JDBC Template 或直接使用 JDBC。 支持任何第三方的数据库连接池，如：DBCP, C3P0, BoneCP, Druid, HikariCP 等。 支持任意实现 JDBC 规范的数据库，目前支持 MySQL，Oracle，SQLServer，PostgreSQL 以及任何遵循 SQL92 标准的数据库。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T10:35:58.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:tag","content":"分库分表"}],["meta",{"property":"article:published_time","content":"2020-12-28T00:01:28.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T10:35:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ShardingSphere Jdbc\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-28T00:01:28.000Z\\",\\"dateModified\\":\\"2023-09-10T10:35:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"快速入门","slug":"快速入门","link":"#快速入门","children":[{"level":3,"title":"引入 maven 依赖","slug":"引入-maven-依赖","link":"#引入-maven-依赖","children":[]},{"level":3,"title":"规则配置","slug":"规则配置","link":"#规则配置","children":[]},{"level":3,"title":"创建数据源","slug":"创建数据源","link":"#创建数据源","children":[]}]},{"level":2,"title":"概念和功能","slug":"概念和功能","link":"#概念和功能","children":[{"level":3,"title":"垂直分片","slug":"垂直分片","link":"#垂直分片","children":[]},{"level":3,"title":"水平分片","slug":"水平分片","link":"#水平分片","children":[]},{"level":3,"title":"数据分片带来的问题","slug":"数据分片带来的问题","link":"#数据分片带来的问题","children":[]}]},{"level":2,"title":"ShardingSphere 内核剖析","slug":"shardingsphere-内核剖析","link":"#shardingsphere-内核剖析","children":[{"level":3,"title":"解析引擎","slug":"解析引擎","link":"#解析引擎","children":[]},{"level":3,"title":"路由引擎","slug":"路由引擎","link":"#路由引擎","children":[]},{"level":3,"title":"改写引擎","slug":"改写引擎","link":"#改写引擎","children":[]},{"level":3,"title":"执行引擎","slug":"执行引擎","link":"#执行引擎","children":[]},{"level":3,"title":"归并引擎","slug":"归并引擎","link":"#归并引擎","children":[]}]}],"git":{"createdTime":1694342158000,"updatedTime":1694342158000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":9.03,"words":2708},"filePathRelative":"12.数据库/02.数据库中间件/01.Shardingsphere/02.ShardingSphereJdbc.md","localizedDate":"2020年12月28日","excerpt":"<h1> ShardingSphere Jdbc</h1>\\n<h2> 简介</h2>\\n<p>shardingsphere-jdbc 定位为轻量级 Java 框架，在 Java 的 JDBC 层提供的额外服务。 它使用客户端直连数据库，以 jar 包形式提供服务，无需额外部署和依赖，可理解为增强版的 JDBC 驱动，完全兼容 JDBC 和各种 ORM 框架。</p>\\n<ul>\\n<li>适用于任何基于 JDBC 的 ORM 框架，如：JPA, Hibernate, Mybatis, Spring JDBC Template 或直接使用 JDBC。</li>\\n<li>支持任何第三方的数据库连接池，如：DBCP, C3P0, BoneCP, Druid, HikariCP 等。</li>\\n<li>支持任意实现 JDBC 规范的数据库，目前支持 MySQL，Oracle，SQLServer，PostgreSQL 以及任何遵循 SQL92 标准的数据库。</li>\\n</ul>","autoDesc":true}');export{e as data};
