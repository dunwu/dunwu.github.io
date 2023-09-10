const e=JSON.parse('{"key":"v-d502e57c","path":"/pages/d55184/","title":"Mybatis原理","lang":"zh-CN","frontmatter":{"title":"Mybatis原理","date":"2022-02-17T22:34:30.000Z","category":["Java","框架","ORM"],"tag":["Java","框架","ORM","Mybatis"],"permalink":"/pages/d55184/","description":"Mybatis 原理 Mybatis 的前身就是 iBatis ，是一款优秀的持久层框架，它支持自定义 SQL、存储过程以及高级映射。本文以一个 Mybatis 完整示例为切入点，结合 Mybatis 底层源码分析，图文并茂的讲解 Mybatis 的核心工作机制。 Mybatis 完整示例 这里，我将以一个入门级的示例来演示 Mybatis 是如何工作的。 注：本文后面章节中的原理、源码部分也将基于这个示例来进行讲解。 完整示例源码地址","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/d55184/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Mybatis原理"}],["meta",{"property":"og:description","content":"Mybatis 原理 Mybatis 的前身就是 iBatis ，是一款优秀的持久层框架，它支持自定义 SQL、存储过程以及高级映射。本文以一个 Mybatis 完整示例为切入点，结合 Mybatis 底层源码分析，图文并茂的讲解 Mybatis 的核心工作机制。 Mybatis 完整示例 这里，我将以一个入门级的示例来演示 Mybatis 是如何工作的。 注：本文后面章节中的原理、源码部分也将基于这个示例来进行讲解。 完整示例源码地址"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T13:36:40.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"框架"}],["meta",{"property":"article:tag","content":"ORM"}],["meta",{"property":"article:tag","content":"Mybatis"}],["meta",{"property":"article:published_time","content":"2022-02-17T22:34:30.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T13:36:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mybatis原理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-02-17T22:34:30.000Z\\",\\"dateModified\\":\\"2023-09-10T13:36:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Mybatis 完整示例","slug":"mybatis-完整示例","link":"#mybatis-完整示例","children":[{"level":3,"title":"数据库准备","slug":"数据库准备","link":"#数据库准备","children":[]},{"level":3,"title":"添加 Mybatis","slug":"添加-mybatis","link":"#添加-mybatis","children":[]},{"level":3,"title":"Mybatis 配置","slug":"mybatis-配置","link":"#mybatis-配置","children":[]},{"level":3,"title":"Mapper","slug":"mapper","link":"#mapper","children":[]},{"level":3,"title":"测试程序","slug":"测试程序","link":"#测试程序","children":[]}]},{"level":2,"title":"Mybatis 生命周期","slug":"mybatis-生命周期","link":"#mybatis-生命周期","children":[{"level":3,"title":"SqlSessionFactoryBuilder","slug":"sqlsessionfactorybuilder","link":"#sqlsessionfactorybuilder","children":[]},{"level":3,"title":"SqlSessionFactory","slug":"sqlsessionfactory","link":"#sqlsessionfactory","children":[]},{"level":3,"title":"SqlSession","slug":"sqlsession","link":"#sqlsession","children":[]},{"level":3,"title":"映射器","slug":"映射器","link":"#映射器","children":[]}]},{"level":2,"title":"Mybatis 的架构","slug":"mybatis-的架构","link":"#mybatis-的架构","children":[{"level":3,"title":"配置层","slug":"配置层","link":"#配置层","children":[]},{"level":3,"title":"接口层","slug":"接口层","link":"#接口层","children":[]},{"level":3,"title":"数据处理层","slug":"数据处理层","link":"#数据处理层","children":[]},{"level":3,"title":"框架支撑层","slug":"框架支撑层","link":"#框架支撑层","children":[]}]},{"level":2,"title":"SqlSession 内部工作机制","slug":"sqlsession-内部工作机制","link":"#sqlsession-内部工作机制","children":[{"level":3,"title":"SqlSession 子组件","slug":"sqlsession-子组件","link":"#sqlsession-子组件","children":[]},{"level":3,"title":"SqlSession 和 Mapper","slug":"sqlsession-和-mapper","link":"#sqlsession-和-mapper","children":[]},{"level":3,"title":"SqlSession 和 Executor","slug":"sqlsession-和-executor","link":"#sqlsession-和-executor","children":[]},{"level":3,"title":"Executor 工作流程","slug":"executor-工作流程","link":"#executor-工作流程","children":[]},{"level":3,"title":"StatementHandler 工作流程","slug":"statementhandler-工作流程","link":"#statementhandler-工作流程","children":[]},{"level":3,"title":"ParameterHandler 工作流程","slug":"parameterhandler-工作流程","link":"#parameterhandler-工作流程","children":[]},{"level":3,"title":"ResultSetHandler 工作流程","slug":"resultsethandler-工作流程","link":"#resultsethandler-工作流程","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694353000000,"updatedTime":1694353000000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":21.86,"words":6558},"filePathRelative":"01.Java/13.框架/11.ORM/02.Mybatis原理.md","localizedDate":"2022年2月17日","excerpt":"<h1> Mybatis 原理</h1>\\n<blockquote>\\n<p>Mybatis 的前身就是 iBatis ，是一款优秀的持久层框架，它支持自定义 SQL、存储过程以及高级映射。本文以一个 Mybatis 完整示例为切入点，结合 Mybatis 底层源码分析，图文并茂的讲解 Mybatis 的核心工作机制。</p>\\n</blockquote>\\n<h2> Mybatis 完整示例</h2>\\n<blockquote>\\n<p>这里，我将以一个入门级的示例来演示 Mybatis 是如何工作的。</p>\\n<p>注：本文后面章节中的原理、源码部分也将基于这个示例来进行讲解。</p>\\n<p><a href=\\"https://github.com/dunwu/spring-tutorial/blob/master/codes/data/spring-data-mybatis/src/main/java/io/github/dunwu/spring/orm/MybatisDemo.java\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">完整示例源码地址</a></p>\\n</blockquote>","autoDesc":true}');export{e as data};
