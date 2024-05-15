const e=JSON.parse('{"key":"v-12a0945e","path":"/pages/198618/","title":"Maven 实战问题和最佳实践","lang":"zh-CN","frontmatter":{"title":"Maven 实战问题和最佳实践","date":"2018-11-28T09:29:22.000Z","order":4,"permalink":"/pages/198618/","category":["Java","软件","构建","Maven"],"tag":["Java","构建","Maven"],"description":"Maven 实战问题和最佳实践 Maven 常见问题 dependencies 和 dependencyManagement，plugins 和 pluginManagement 有什么区别 dependencyManagement 是表示依赖 jar 包的声明，即你在项目中的 dependencyManagement 下声明了依赖，maven 不会加载该依赖，dependencyManagement 声明可以被继承。 dependencyManagement 的一个使用案例是当有父子项目的时候，父项目中可以利用 dependencyManagement 声明子项目中需要用到的依赖 jar 包，之后，当某个或者某几个子项目需要加载该插件的时候，就可以在子项目中 dependencies 节点只配置 groupId 和 artifactId 就可以完成插件的引用。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/198618/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Maven 实战问题和最佳实践"}],["meta",{"property":"og:description","content":"Maven 实战问题和最佳实践 Maven 常见问题 dependencies 和 dependencyManagement，plugins 和 pluginManagement 有什么区别 dependencyManagement 是表示依赖 jar 包的声明，即你在项目中的 dependencyManagement 下声明了依赖，maven 不会加载该依赖，dependencyManagement 声明可以被继承。 dependencyManagement 的一个使用案例是当有父子项目的时候，父项目中可以利用 dependencyManagement 声明子项目中需要用到的依赖 jar 包，之后，当某个或者某几个子项目需要加载该插件的时候，就可以在子项目中 dependencies 节点只配置 groupId 和 artifactId 就可以完成插件的引用。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T22:46:25.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"构建"}],["meta",{"property":"article:tag","content":"Maven"}],["meta",{"property":"article:published_time","content":"2018-11-28T09:29:22.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T22:46:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Maven 实战问题和最佳实践\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-11-28T09:29:22.000Z\\",\\"dateModified\\":\\"2024-05-15T22:46:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Maven 常见问题","slug":"maven-常见问题","link":"#maven-常见问题","children":[{"level":3,"title":"dependencies 和 dependencyManagement，plugins 和 pluginManagement 有什么区别","slug":"dependencies-和-dependencymanagement-plugins-和-pluginmanagement-有什么区别","link":"#dependencies-和-dependencymanagement-plugins-和-pluginmanagement-有什么区别","children":[]},{"level":3,"title":"IDEA 修改 JDK 版本后编译报错","slug":"idea-修改-jdk-版本后编译报错","link":"#idea-修改-jdk-版本后编译报错","children":[]},{"level":3,"title":"重复引入依赖","slug":"重复引入依赖","link":"#重复引入依赖","children":[]},{"level":3,"title":"如何打包一个可以直接运行的 Spring Boot jar 包","slug":"如何打包一个可以直接运行的-spring-boot-jar-包","link":"#如何打包一个可以直接运行的-spring-boot-jar-包","children":[]},{"level":3,"title":"去哪儿找 maven dependency","slug":"去哪儿找-maven-dependency","link":"#去哪儿找-maven-dependency","children":[]},{"level":3,"title":"如何指定编码","slug":"如何指定编码","link":"#如何指定编码","children":[]},{"level":3,"title":"如何指定 JDK 版本","slug":"如何指定-jdk-版本","link":"#如何指定-jdk-版本","children":[]},{"level":3,"title":"如何避免将 dependency 打包到构件中","slug":"如何避免将-dependency-打包到构件中","link":"#如何避免将-dependency-打包到构件中","children":[]},{"level":3,"title":"如何跳过单元测试","slug":"如何跳过单元测试","link":"#如何跳过单元测试","children":[]},{"level":3,"title":"如何引入本地 jar","slug":"如何引入本地-jar","link":"#如何引入本地-jar","children":[]},{"level":3,"title":"如何排除依赖","slug":"如何排除依赖","link":"#如何排除依赖","children":[]}]},{"level":2,"title":"Maven 最佳实践","slug":"maven-最佳实践","link":"#maven-最佳实践","children":[{"level":3,"title":"通过 bom 统一管理版本","slug":"通过-bom-统一管理版本","link":"#通过-bom-统一管理版本","children":[]}]}],"git":{"createdTime":1694447058000,"updatedTime":1715813185000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":4}]},"readingTime":{"minutes":4.32,"words":1297},"filePathRelative":"01.Java/11.软件/01.构建/01.Maven/04.Maven实战问题和最佳实践.md","localizedDate":"2018年11月28日","excerpt":"<h1> Maven 实战问题和最佳实践</h1>\\n<h2> Maven 常见问题</h2>\\n<h3> dependencies 和 dependencyManagement，plugins 和 pluginManagement 有什么区别</h3>\\n<p>dependencyManagement 是表示依赖 jar 包的声明，即你在项目中的 dependencyManagement 下声明了依赖，maven 不会加载该依赖，dependencyManagement 声明可以被继承。</p>\\n<p>dependencyManagement 的一个使用案例是当有父子项目的时候，父项目中可以利用 dependencyManagement 声明子项目中需要用到的依赖 jar 包，之后，当某个或者某几个子项目需要加载该插件的时候，就可以在子项目中 dependencies 节点只配置 groupId 和 artifactId 就可以完成插件的引用。</p>","autoDesc":true}');export{e as data};