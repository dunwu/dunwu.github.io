const e=JSON.parse('{"key":"v-97fc803c","path":"/pages/cf19fd/","title":"Spring 之 JDBC","lang":"zh-CN","frontmatter":{"title":"Spring 之 JDBC","date":"2019-02-18T14:33:55.000Z","category":["Java","框架","Spring","Spring数据"],"tag":["Java","框架","Spring","SpringBoot","JDBC","JdbcTemplate"],"permalink":"/pages/cf19fd/","description":"Spring 之 JDBC JDBC 是 Java 语言中用来规范客户端程序如何访问数据库的应用程序接口，提供了增、删、改、查数据库的方法。 JDBC 入门示例 JDBC 的工作步骤大致如下： 创建实体类。 声明数据库读写接口的 DAO 接口。定义 DAO 的好处在于对于数据层上层的业务，调用 DAO 时仅关注对外暴露的读写方法，而不考虑底层的具体持久化方式。这样，便于替换持久化方式。 创建一个 DAO 接口的实现类，使用 Spring 的 JDBC 模板去实现接口。 最后，定义一个 DAO 接口的实现类的 JavaBean，并将数据源注入进去。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/cf19fd/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Spring 之 JDBC"}],["meta",{"property":"og:description","content":"Spring 之 JDBC JDBC 是 Java 语言中用来规范客户端程序如何访问数据库的应用程序接口，提供了增、删、改、查数据库的方法。 JDBC 入门示例 JDBC 的工作步骤大致如下： 创建实体类。 声明数据库读写接口的 DAO 接口。定义 DAO 的好处在于对于数据层上层的业务，调用 DAO 时仅关注对外暴露的读写方法，而不考虑底层的具体持久化方式。这样，便于替换持久化方式。 创建一个 DAO 接口的实现类，使用 Spring 的 JDBC 模板去实现接口。 最后，定义一个 DAO 接口的实现类的 JavaBean，并将数据源注入进去。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T15:41:08.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"框架"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:tag","content":"SpringBoot"}],["meta",{"property":"article:tag","content":"JDBC"}],["meta",{"property":"article:tag","content":"JdbcTemplate"}],["meta",{"property":"article:published_time","content":"2019-02-18T14:33:55.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-08T15:41:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring 之 JDBC\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-02-18T14:33:55.000Z\\",\\"dateModified\\":\\"2023-09-08T15:41:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"JDBC 入门示例","slug":"jdbc-入门示例","link":"#jdbc-入门示例","children":[{"level":3,"title":"定义实体","slug":"定义实体","link":"#定义实体","children":[]},{"level":3,"title":"定义 DAO 接口","slug":"定义-dao-接口","link":"#定义-dao-接口","children":[]},{"level":3,"title":"定义 DAO 实现类","slug":"定义-dao-实现类","link":"#定义-dao-实现类","children":[]},{"level":3,"title":"测试类","slug":"测试类","link":"#测试类","children":[]}]},{"level":2,"title":"Spring Boot JDBC","slug":"spring-boot-jdbc","link":"#spring-boot-jdbc","children":[{"level":3,"title":"引入 Spring Boot 依赖","slug":"引入-spring-boot-依赖","link":"#引入-spring-boot-依赖","children":[]},{"level":3,"title":"配置数据源","slug":"配置数据源","link":"#配置数据源","children":[]},{"level":3,"title":"测试","slug":"测试","link":"#测试","children":[]}]},{"level":2,"title":"Spring JDBC","slug":"spring-jdbc","link":"#spring-jdbc","children":[{"level":3,"title":"引入 Spring 依赖","slug":"引入-spring-依赖","link":"#引入-spring-依赖","children":[]},{"level":3,"title":"基于 JDBC 驱动的数据源配置","slug":"基于-jdbc-驱动的数据源配置","link":"#基于-jdbc-驱动的数据源配置","children":[]},{"level":3,"title":"测试","slug":"测试-1","link":"#测试-1","children":[]}]},{"level":2,"title":"JdbcTemplate API","slug":"jdbctemplate-api","link":"#jdbctemplate-api","children":[{"level":3,"title":"execute 方法","slug":"execute-方法","link":"#execute-方法","children":[]},{"level":3,"title":"update 方法","slug":"update-方法","link":"#update-方法","children":[]},{"level":3,"title":"query 方法","slug":"query-方法","link":"#query-方法","children":[]}]},{"level":2,"title":"SpringBoot JDBC 配置","slug":"springboot-jdbc-配置","link":"#springboot-jdbc-配置","children":[{"level":3,"title":"JdbcTemplateAutoConfiguration 类","slug":"jdbctemplateautoconfiguration-类","link":"#jdbctemplateautoconfiguration-类","children":[]},{"level":3,"title":"JdbcTemplateConfiguration 类","slug":"jdbctemplateconfiguration-类","link":"#jdbctemplateconfiguration-类","children":[]},{"level":3,"title":"NamedParameterJdbcTemplateConfiguration 类","slug":"namedparameterjdbctemplateconfiguration-类","link":"#namedparameterjdbctemplateconfiguration-类","children":[]}]},{"level":2,"title":"spring-data-jdbc","slug":"spring-data-jdbc","link":"#spring-data-jdbc","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694186720000,"updatedTime":1694187668000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":9.7,"words":2910},"filePathRelative":"01.Java/13.框架/01.Spring/02.Spring数据/02.Spring之JDBC.md","localizedDate":"2019年2月18日","excerpt":"<h1> Spring 之 JDBC</h1>\\n<p>JDBC 是 Java 语言中用来规范客户端程序如何访问数据库的应用程序接口，提供了增、删、改、查数据库的方法。</p>\\n<h2> JDBC 入门示例</h2>\\n<p>JDBC 的工作步骤大致如下：</p>\\n<ol>\\n<li>创建实体类。</li>\\n<li>声明数据库读写接口的 DAO 接口。定义 DAO 的好处在于对于数据层上层的业务，调用 DAO 时仅关注对外暴露的读写方法，而不考虑底层的具体持久化方式。这样，便于替换持久化方式。</li>\\n<li>创建一个 DAO 接口的实现类，使用 Spring 的 JDBC 模板去实现接口。</li>\\n<li>最后，定义一个 DAO 接口的实现类的 JavaBean，并将数据源注入进去。</li>\\n</ol>","autoDesc":true}');export{e as data};
