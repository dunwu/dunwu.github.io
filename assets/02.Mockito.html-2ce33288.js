const e=JSON.parse('{"key":"v-19cfc5c6","path":"/01.Java/12.%E5%B7%A5%E5%85%B7/04.%E6%B5%8B%E8%AF%95/02.Mockito.html","title":"Mockito 快速入门","lang":"zh-CN","frontmatter":{"title":"Mockito 快速入门","date":"2022-02-17T22:34:30.000Z","order":2,"category":["Java","工具","测试"],"tag":["Java","测试","Mockito"],"description":"Mockito 快速入门 Mockito 是一个针对 Java 的 mock 框架。 预备知识 如果需要往下学习，你需要先理解 Junit 框架中的单元测试。 如果你不熟悉 JUnit，请看 Junit 教程 使用 mock 对象来进行测试","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/01.Java/12.%E5%B7%A5%E5%85%B7/04.%E6%B5%8B%E8%AF%95/02.Mockito.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Mockito 快速入门"}],["meta",{"property":"og:description","content":"Mockito 快速入门 Mockito 是一个针对 Java 的 mock 框架。 预备知识 如果需要往下学习，你需要先理解 Junit 框架中的单元测试。 如果你不熟悉 JUnit，请看 Junit 教程 使用 mock 对象来进行测试"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T15:44:18.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"测试"}],["meta",{"property":"article:tag","content":"Mockito"}],["meta",{"property":"article:published_time","content":"2022-02-17T22:34:30.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T15:44:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mockito 快速入门\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-02-17T22:34:30.000Z\\",\\"dateModified\\":\\"2023-09-11T15:44:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"预备知识","slug":"预备知识","link":"#预备知识","children":[]},{"level":2,"title":"使用 mock 对象来进行测试","slug":"使用-mock-对象来进行测试","link":"#使用-mock-对象来进行测试","children":[{"level":3,"title":"单元测试的目标和挑战","slug":"单元测试的目标和挑战","link":"#单元测试的目标和挑战","children":[]},{"level":3,"title":"测试类的分类","slug":"测试类的分类","link":"#测试类的分类","children":[]},{"level":3,"title":"Mock 对象的产生","slug":"mock-对象的产生","link":"#mock-对象的产生","children":[]},{"level":3,"title":"使用 Mockito 生成 Mock 对象","slug":"使用-mockito-生成-mock-对象","link":"#使用-mockito-生成-mock-对象","children":[]}]},{"level":2,"title":"为自己的项目添加 Mockito 依赖","slug":"为自己的项目添加-mockito-依赖","link":"#为自己的项目添加-mockito-依赖","children":[{"level":3,"title":"在 Gradle 添加 Mockito 依赖","slug":"在-gradle-添加-mockito-依赖","link":"#在-gradle-添加-mockito-依赖","children":[]},{"level":3,"title":"在 Maven 添加 Mockito 依赖","slug":"在-maven-添加-mockito-依赖","link":"#在-maven-添加-mockito-依赖","children":[]},{"level":3,"title":"在 Eclipse IDE 使用 Mockito","slug":"在-eclipse-ide-使用-mockito","link":"#在-eclipse-ide-使用-mockito","children":[]},{"level":3,"title":"以 OSGi 或者 Eclipse 插件形式添加 Mockito 依赖","slug":"以-osgi-或者-eclipse-插件形式添加-mockito-依赖","link":"#以-osgi-或者-eclipse-插件形式添加-mockito-依赖","children":[]}]},{"level":2,"title":"使用 Mockito API","slug":"使用-mockito-api","link":"#使用-mockito-api","children":[{"level":3,"title":"静态引用","slug":"静态引用","link":"#静态引用","children":[]},{"level":3,"title":"使用 Mockito 创建和配置 mock 对象","slug":"使用-mockito-创建和配置-mock-对象","link":"#使用-mockito-创建和配置-mock-对象","children":[]},{"level":3,"title":"配置 mock","slug":"配置-mock","link":"#配置-mock","children":[]},{"level":3,"title":"验证 mock 对象方法是否被调用","slug":"验证-mock-对象方法是否被调用","link":"#验证-mock-对象方法是否被调用","children":[]},{"level":3,"title":"使用 Spy 封装 java 对象","slug":"使用-spy-封装-java-对象","link":"#使用-spy-封装-java-对象","children":[]},{"level":3,"title":"使用 @InjectMocks 在 Mockito 中进行依赖注入","slug":"使用-injectmocks-在-mockito-中进行依赖注入","link":"#使用-injectmocks-在-mockito-中进行依赖注入","children":[]},{"level":3,"title":"捕捉参数","slug":"捕捉参数","link":"#捕捉参数","children":[]},{"level":3,"title":"Mockito 的限制","slug":"mockito-的限制","link":"#mockito-的限制","children":[]}]},{"level":2,"title":"在 Android 中使用 Mockito","slug":"在-android-中使用-mockito","link":"#在-android-中使用-mockito","children":[]},{"level":2,"title":"实例：使用 Mockito 写一个 Instrumented Unit Test","slug":"实例-使用-mockito-写一个-instrumented-unit-test","link":"#实例-使用-mockito-写一个-instrumented-unit-test","children":[{"level":3,"title":"创建一个测试的 Android 应用","slug":"创建一个测试的-android-应用","link":"#创建一个测试的-android-应用","children":[]},{"level":3,"title":"在 app/build.gradle 文件中添加 Mockito 依赖","slug":"在-app-build-gradle-文件中添加-mockito-依赖","link":"#在-app-build-gradle-文件中添加-mockito-依赖","children":[]},{"level":3,"title":"创建测试","slug":"创建测试","link":"#创建测试","children":[]}]},{"level":2,"title":"实例：使用 Mockito 创建一个 mock 对象","slug":"实例-使用-mockito-创建一个-mock-对象","link":"#实例-使用-mockito-创建一个-mock-对象","children":[{"level":3,"title":"目标","slug":"目标","link":"#目标","children":[]},{"level":3,"title":"创建一个 Twitter API 的例子","slug":"创建一个-twitter-api-的例子","link":"#创建一个-twitter-api-的例子","children":[]},{"level":3,"title":"模拟 ITweet 的实例","slug":"模拟-itweet-的实例","link":"#模拟-itweet-的实例","children":[]},{"level":3,"title":"验证方法调用","slug":"验证方法调用","link":"#验证方法调用","children":[]},{"level":3,"title":"验证","slug":"验证","link":"#验证","children":[]}]},{"level":2,"title":"模拟静态方法","slug":"模拟静态方法","link":"#模拟静态方法","children":[{"level":3,"title":"使用 Powermock 来模拟静态方法","slug":"使用-powermock-来模拟静态方法","link":"#使用-powermock-来模拟静态方法","children":[]},{"level":3,"title":"用封装的方法代替 Powermock","slug":"用封装的方法代替-powermock","link":"#用封装的方法代替-powermock","children":[]}]},{"level":2,"title":"引用和引申","slug":"引用和引申","link":"#引用和引申","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1694447058000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":11.56,"words":3469},"filePathRelative":"01.Java/12.工具/04.测试/02.Mockito.md","localizedDate":"2022年2月17日","excerpt":"<h1> Mockito 快速入门</h1>\\n<blockquote>\\n<p>Mockito 是一个针对 Java 的 mock 框架。</p>\\n</blockquote>\\n<h2> 预备知识</h2>\\n<p>如果需要往下学习，你需要先理解 Junit 框架中的单元测试。</p>\\n<p>如果你不熟悉 JUnit，请看 <a href=\\"http://www.vogella.com/tutorials/JUnit/article.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Junit 教程</a></p>\\n<h2> 使用 mock 对象来进行测试</h2>","autoDesc":true}');export{e as data};
