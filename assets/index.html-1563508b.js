const e=JSON.parse('{"key":"v-9d6a81e6","path":"/pages/496a7e/","title":"源码级深度理解 Java SPI","lang":"zh-CN","frontmatter":{"title":"源码级深度理解 Java SPI","date":"2022-04-26T19:11:59.000Z","category":["Java","JavaSE","高级特性"],"tag":["Java","JavaSE","SPI","Dubbo","Spring Boot","common-logging","JDBC"],"permalink":"/pages/496a7e/","description":"源码级深度理解 Java SPI SPI 简介 SPI 全称 Service Provider Interface，是 Java 提供的，旨在由第三方实现或扩展的 API，它是一种用于动态加载服务的机制。Java 中 SPI 机制主要思想是将装配的控制权移到程序之外，在模块化设计中这个机制尤其重要，其核心思想就是 解耦。 Java SPI 有四个要素： SPI 接口：为服务提供者实现类约定的的接口或抽象类。 SPI 实现类：实际提供服务的实现类。 SPI 配置：Java SPI 机制约定的配置文件，提供查找服务实现类的逻辑。配置文件必须置于 META-INF/services 目录中，并且，文件名应与服务提供者接口的完全限定名保持一致。文件中的每一行都有一个实现服务类的详细信息，同样是服务提供者类的完全限定名称。 ServiceLoader：Java SPI 的核心类，用于加载 SPI 实现类。 ServiceLoader 中有各种实用方法来获取特定实现、迭代它们或重新加载服务。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/496a7e/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"源码级深度理解 Java SPI"}],["meta",{"property":"og:description","content":"源码级深度理解 Java SPI SPI 简介 SPI 全称 Service Provider Interface，是 Java 提供的，旨在由第三方实现或扩展的 API，它是一种用于动态加载服务的机制。Java 中 SPI 机制主要思想是将装配的控制权移到程序之外，在模块化设计中这个机制尤其重要，其核心思想就是 解耦。 Java SPI 有四个要素： SPI 接口：为服务提供者实现类约定的的接口或抽象类。 SPI 实现类：实际提供服务的实现类。 SPI 配置：Java SPI 机制约定的配置文件，提供查找服务实现类的逻辑。配置文件必须置于 META-INF/services 目录中，并且，文件名应与服务提供者接口的完全限定名保持一致。文件中的每一行都有一个实现服务类的详细信息，同样是服务提供者类的完全限定名称。 ServiceLoader：Java SPI 的核心类，用于加载 SPI 实现类。 ServiceLoader 中有各种实用方法来获取特定实现、迭代它们或重新加载服务。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T10:35:58.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JavaSE"}],["meta",{"property":"article:tag","content":"SPI"}],["meta",{"property":"article:tag","content":"Dubbo"}],["meta",{"property":"article:tag","content":"Spring Boot"}],["meta",{"property":"article:tag","content":"common-logging"}],["meta",{"property":"article:tag","content":"JDBC"}],["meta",{"property":"article:published_time","content":"2022-04-26T19:11:59.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T10:35:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"源码级深度理解 Java SPI\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-26T19:11:59.000Z\\",\\"dateModified\\":\\"2023-09-10T10:35:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"SPI 简介","slug":"spi-简介","link":"#spi-简介","children":[]},{"level":2,"title":"SPI 示例","slug":"spi-示例","link":"#spi-示例","children":[{"level":3,"title":"SPI 接口","slug":"spi-接口","link":"#spi-接口","children":[]},{"level":3,"title":"SPI 实现类","slug":"spi-实现类","link":"#spi-实现类","children":[]},{"level":3,"title":"SPI 配置","slug":"spi-配置","link":"#spi-配置","children":[]},{"level":3,"title":"ServiceLoader","slug":"serviceloader","link":"#serviceloader","children":[]}]},{"level":2,"title":"SPI 原理","slug":"spi-原理","link":"#spi-原理","children":[{"level":3,"title":"ServiceLoader 的成员变量","slug":"serviceloader-的成员变量","link":"#serviceloader-的成员变量","children":[]},{"level":3,"title":"ServiceLoader 的工作流程","slug":"serviceloader-的工作流程","link":"#serviceloader-的工作流程","children":[]},{"level":3,"title":"SPI 和类加载器","slug":"spi-和类加载器","link":"#spi-和类加载器","children":[]},{"level":3,"title":"Java SPI 的不足","slug":"java-spi-的不足","link":"#java-spi-的不足","children":[]}]},{"level":2,"title":"SPI 应用场景","slug":"spi-应用场景","link":"#spi-应用场景","children":[{"level":3,"title":"SPI 应用案例之 JDBC DriverManager","slug":"spi-应用案例之-jdbc-drivermanager","link":"#spi-应用案例之-jdbc-drivermanager","children":[]},{"level":3,"title":"SPI 应用案例之 Common-Logging","slug":"spi-应用案例之-common-logging","link":"#spi-应用案例之-common-logging","children":[]},{"level":3,"title":"SPI 应用案例之 Spring Boot","slug":"spi-应用案例之-spring-boot","link":"#spi-应用案例之-spring-boot","children":[]}]},{"level":2,"title":"SPI 应用案例之 Dubbo","slug":"spi-应用案例之-dubbo","link":"#spi-应用案例之-dubbo","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694342158000,"updatedTime":1694342158000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":25.29,"words":7588},"filePathRelative":"01.Java/01.JavaSE/02.高级特性/05.JavaSPI.md","localizedDate":"2022年4月26日","excerpt":"<h1> 源码级深度理解 Java SPI</h1>\\n<h2> SPI 简介</h2>\\n<p>SPI 全称 Service Provider Interface，是 Java 提供的，旨在由第三方实现或扩展的 API，它是一种用于动态加载服务的机制。Java 中 SPI 机制主要思想是将装配的控制权移到程序之外，在模块化设计中这个机制尤其重要，其核心思想就是 <strong>解耦</strong>。</p>\\n<p>Java SPI 有四个要素：</p>\\n<ul>\\n<li><strong>SPI 接口</strong>：为服务提供者实现类约定的的接口或抽象类。</li>\\n<li><strong>SPI 实现类</strong>：实际提供服务的实现类。</li>\\n<li><strong>SPI 配置</strong>：Java SPI 机制约定的配置文件，提供查找服务实现类的逻辑。配置文件必须置于 <code>META-INF/services</code> 目录中，并且，文件名应与服务提供者接口的完全限定名保持一致。文件中的每一行都有一个实现服务类的详细信息，同样是服务提供者类的完全限定名称。</li>\\n<li><strong><code>ServiceLoader</code></strong>：Java SPI 的核心类，用于加载 SPI 实现类。 <code>ServiceLoader</code> 中有各种实用方法来获取特定实现、迭代它们或重新加载服务。</li>\\n</ul>","autoDesc":true}');export{e as data};
