const e=JSON.parse('{"key":"v-46dea494","path":"/pages/ad1cce/","title":"JDK8 入门指南","lang":"zh-CN","frontmatter":{"title":"JDK8 入门指南","date":"2019-05-06T15:02:02.000Z","category":["Java","JavaSE","高级特性"],"tag":["Java","JavaSE","JDK8"],"permalink":"/pages/ad1cce/","description":"JDK8 入门指南 JDK8 升级常见问题章节是我个人的经验整理。其他内容基本翻译自 java8-tutorial 📦 本文以及示例源码已归档在 javacore 关键词：Stream、lambda、Optional、@FunctionalInterface","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/ad1cce/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"JDK8 入门指南"}],["meta",{"property":"og:description","content":"JDK8 入门指南 JDK8 升级常见问题章节是我个人的经验整理。其他内容基本翻译自 java8-tutorial 📦 本文以及示例源码已归档在 javacore 关键词：Stream、lambda、Optional、@FunctionalInterface"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T13:36:40.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JavaSE"}],["meta",{"property":"article:tag","content":"JDK8"}],["meta",{"property":"article:published_time","content":"2019-05-06T15:02:02.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T13:36:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JDK8 入门指南\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-05-06T15:02:02.000Z\\",\\"dateModified\\":\\"2023-09-10T13:36:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Default Methods for Interfaces(接口的默认方法)","slug":"default-methods-for-interfaces-接口的默认方法","link":"#default-methods-for-interfaces-接口的默认方法","children":[]},{"level":2,"title":"Lambda expressions(Lambda 表达式)","slug":"lambda-expressions-lambda-表达式","link":"#lambda-expressions-lambda-表达式","children":[]},{"level":2,"title":"Functional Interfaces(函数接口)","slug":"functional-interfaces-函数接口","link":"#functional-interfaces-函数接口","children":[]},{"level":2,"title":"Method and Constructor References(方法和构造器引用)","slug":"method-and-constructor-references-方法和构造器引用","link":"#method-and-constructor-references-方法和构造器引用","children":[]},{"level":2,"title":"Lambda Scopes(Lambda 作用域)","slug":"lambda-scopes-lambda-作用域","link":"#lambda-scopes-lambda-作用域","children":[{"level":3,"title":"Accessing local variables(访问本地变量)","slug":"accessing-local-variables-访问本地变量","link":"#accessing-local-variables-访问本地变量","children":[]},{"level":3,"title":"Accessing fields and static variables(访问成员变量和静态变量)","slug":"accessing-fields-and-static-variables-访问成员变量和静态变量","link":"#accessing-fields-and-static-variables-访问成员变量和静态变量","children":[]},{"level":3,"title":"Accessing Default Interface Methods（访问默认的接口方法）","slug":"accessing-default-interface-methods-访问默认的接口方法","link":"#accessing-default-interface-methods-访问默认的接口方法","children":[]}]},{"level":2,"title":"Built-in Functional Interfaces(内置函数接口)","slug":"built-in-functional-interfaces-内置函数接口","link":"#built-in-functional-interfaces-内置函数接口","children":[{"level":3,"title":"Predicates","slug":"predicates","link":"#predicates","children":[]},{"level":3,"title":"Functions","slug":"functions","link":"#functions","children":[]},{"level":3,"title":"Suppliers","slug":"suppliers","link":"#suppliers","children":[]},{"level":3,"title":"Consumers","slug":"consumers","link":"#consumers","children":[]},{"level":3,"title":"Comparators","slug":"comparators","link":"#comparators","children":[]}]},{"level":2,"title":"Optionals","slug":"optionals","link":"#optionals","children":[]},{"level":2,"title":"Streams","slug":"streams","link":"#streams","children":[{"level":3,"title":"Filter","slug":"filter","link":"#filter","children":[]},{"level":3,"title":"Sorted","slug":"sorted","link":"#sorted","children":[]},{"level":3,"title":"Map","slug":"map","link":"#map","children":[]},{"level":3,"title":"Match","slug":"match","link":"#match","children":[]},{"level":3,"title":"Reduce","slug":"reduce","link":"#reduce","children":[]}]},{"level":2,"title":"Parallel Streams","slug":"parallel-streams","link":"#parallel-streams","children":[{"level":3,"title":"Sequential Sort","slug":"sequential-sort","link":"#sequential-sort","children":[]},{"level":3,"title":"Parallel Sort","slug":"parallel-sort","link":"#parallel-sort","children":[]}]},{"level":2,"title":"Maps","slug":"maps","link":"#maps","children":[]},{"level":2,"title":"Date API","slug":"date-api","link":"#date-api","children":[{"level":3,"title":"Clock","slug":"clock","link":"#clock","children":[]},{"level":3,"title":"Timezones","slug":"timezones","link":"#timezones","children":[]},{"level":3,"title":"LocalTime","slug":"localtime","link":"#localtime","children":[]},{"level":3,"title":"LocalDate","slug":"localdate","link":"#localdate","children":[]},{"level":3,"title":"LocalDateTime","slug":"localdatetime","link":"#localdatetime","children":[]}]},{"level":2,"title":"Annotations","slug":"annotations","link":"#annotations","children":[{"level":3,"title":"Variant 1: 使用容器注解 (老套路)","slug":"variant-1-使用容器注解-老套路","link":"#variant-1-使用容器注解-老套路","children":[]},{"level":3,"title":"Variant 2: 使用 repeatable 注解 (新套路)","slug":"variant-2-使用-repeatable-注解-新套路","link":"#variant-2-使用-repeatable-注解-新套路","children":[]}]},{"level":2,"title":"JDK8 升级常见问题","slug":"jdk8-升级常见问题","link":"#jdk8-升级常见问题","children":[{"level":3,"title":"Intellij 中的 JDK 环境设置","slug":"intellij-中的-jdk-环境设置","link":"#intellij-中的-jdk-环境设置","children":[]},{"level":3,"title":"Linux 环境修改","slug":"linux-环境修改","link":"#linux-环境修改","children":[]},{"level":3,"title":"sun.* 包缺失问题","slug":"sun-包缺失问题","link":"#sun-包缺失问题","children":[]},{"level":3,"title":"默认安全策略修改","slug":"默认安全策略修改","link":"#默认安全策略修改","children":[]},{"level":3,"title":"JVM 参数调整","slug":"jvm-参数调整","link":"#jvm-参数调整","children":[]},{"level":3,"title":"字节码问题","slug":"字节码问题","link":"#字节码问题","children":[]},{"level":3,"title":"Java 连接 redis 启动报错 Error redis clients jedis HostAndPort cant resolve localhost address","slug":"java-连接-redis-启动报错-error-redis-clients-jedis-hostandport-cant-resolve-localhost-address","link":"#java-连接-redis-启动报错-error-redis-clients-jedis-hostandport-cant-resolve-localhost-address","children":[]},{"level":3,"title":"Resin 容器指定 JDK 1.8","slug":"resin-容器指定-jdk-1-8","link":"#resin-容器指定-jdk-1-8","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694353000000,"updatedTime":1694353000000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":18.73,"words":5619},"filePathRelative":"01.Java/01.JavaSE/02.高级特性/04.JDK8.md","localizedDate":"2019年5月6日","excerpt":"<h1> JDK8 入门指南</h1>\\n<blockquote>\\n<p>JDK8 升级常见问题章节是我个人的经验整理。其他内容基本翻译自 <a href=\\"https://github.com/winterbe/java8-tutorial\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">java8-tutorial</a></p>\\n<p><strong>📦 本文以及示例源码已归档在 <a href=\\"https://github.com/dunwu/javacore/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">javacore</a></strong></p>\\n<p>关键词：<code>Stream</code>、<code>lambda</code>、<code>Optional</code>、<code>@FunctionalInterface</code></p>\\n</blockquote>","autoDesc":true}');export{e as data};
