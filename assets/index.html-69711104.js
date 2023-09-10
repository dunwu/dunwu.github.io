const e=JSON.parse('{"key":"v-52e917da","path":"/pages/050cdd/","title":"Spring Security 快速入门","lang":"zh-CN","frontmatter":{"title":"Spring Security 快速入门","date":"2022-02-17T22:34:30.000Z","category":["Java","框架","安全"],"tag":["Java","框架","安全","SpringSecurity"],"permalink":"/pages/050cdd/","description":"Spring Security 快速入门 快速开始 参考：Securing a Web Application 核心 API 设计原理 Spring Security 对于 Servlet 的支持基于过滤链（FilterChain）实现。 Spring 提供了一个名为 DelegatingFilterProxy 的 Filter 实现，该实现允许在 Servlet 容器的生命周期和 Spring 的 ApplicationContext 之间进行桥接。 Servlet 容器允许使用其自己的标准注册 Filters，但它不了解 Spring 定义的 Bean。 DelegatingFilterProxy 可以通过标准的 Servlet 容器机制进行注册，但是可以将所有工作委托给实现 Filter 的 Spring Bean。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/050cdd/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Spring Security 快速入门"}],["meta",{"property":"og:description","content":"Spring Security 快速入门 快速开始 参考：Securing a Web Application 核心 API 设计原理 Spring Security 对于 Servlet 的支持基于过滤链（FilterChain）实现。 Spring 提供了一个名为 DelegatingFilterProxy 的 Filter 实现，该实现允许在 Servlet 容器的生命周期和 Spring 的 ApplicationContext 之间进行桥接。 Servlet 容器允许使用其自己的标准注册 Filters，但它不了解 Spring 定义的 Bean。 DelegatingFilterProxy 可以通过标准的 Servlet 容器机制进行注册，但是可以将所有工作委托给实现 Filter 的 Spring Bean。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T15:41:08.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"框架"}],["meta",{"property":"article:tag","content":"安全"}],["meta",{"property":"article:tag","content":"SpringSecurity"}],["meta",{"property":"article:published_time","content":"2022-02-17T22:34:30.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-08T15:41:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring Security 快速入门\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-02-17T22:34:30.000Z\\",\\"dateModified\\":\\"2023-09-08T15:41:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"快速开始","slug":"快速开始","link":"#快速开始","children":[]},{"level":2,"title":"核心 API","slug":"核心-api","link":"#核心-api","children":[]},{"level":2,"title":"设计原理","slug":"设计原理","link":"#设计原理","children":[]},{"level":2,"title":"认证","slug":"认证","link":"#认证","children":[{"level":3,"title":"数据模型","slug":"数据模型","link":"#数据模型","children":[]},{"level":3,"title":"认证基本流程","slug":"认证基本流程","link":"#认证基本流程","children":[]},{"level":3,"title":"用户名/密码认证","slug":"用户名-密码认证","link":"#用户名-密码认证","children":[]},{"level":3,"title":"Remember-Me","slug":"remember-me","link":"#remember-me","children":[]}]},{"level":2,"title":"Spring Boot 集成","slug":"spring-boot-集成","link":"#spring-boot-集成","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694186720000,"updatedTime":1694187668000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":4.37,"words":1310},"filePathRelative":"01.Java/13.框架/12.安全/02.SpringSecurity.md","localizedDate":"2022年2月17日","excerpt":"<h1> Spring Security 快速入门</h1>\\n<h2> 快速开始</h2>\\n<p>参考：<a href=\\"https://spring.io/guides/gs/securing-web/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Securing a Web Application</a></p>\\n<h2> 核心 API</h2>\\n<h2> 设计原理</h2>\\n<p>Spring Security 对于 Servlet 的支持基于过滤链（<code>FilterChain</code>）实现。</p>\\n<p>Spring 提供了一个名为 <code>DelegatingFilterProxy</code> 的 <code>Filter</code> 实现，该实现允许在 Servlet 容器的生命周期和 Spring 的 <code>ApplicationContext</code> 之间进行桥接。 Servlet 容器允许使用其自己的标准注册 Filters，但它不了解 Spring 定义的 Bean。 <code>DelegatingFilterProxy</code> 可以通过标准的 Servlet 容器机制进行注册，但是可以将所有工作委托给实现 Filter 的 Spring Bean。</p>","autoDesc":true}');export{e as data};
