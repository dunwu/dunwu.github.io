const e=JSON.parse('{"key":"v-ad4cbcb6","path":"/pages/43a8e5/","title":"JVM GUI 工具","lang":"zh-CN","frontmatter":{"title":"JVM GUI 工具","date":"2020-07-30T17:56:33.000Z","order":12,"permalink":"/pages/43a8e5/","category":["Java","JavaSE","JVM"],"tag":["Java","JavaSE","JVM","GUI"],"description":"JVM GUI 工具 Java 程序员免不了故障排查工作，所以经常需要使用一些 JVM 工具。 本文系统性的介绍一下常用的 JVM GUI 工具。 jconsole jconsole 是 JDK 自带的 GUI 工具。jconsole(Java Monitoring and Management Console) 是一种基于 JMX 的可视化监视与管理工具。 jconsole 的管理功能是针对 JMX MBean 进行管理，由于 MBean 可以使用代码、中间件服务器的管理控制台或所有符合 JMX 规范的软件进行访问。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/43a8e5/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"JVM GUI 工具"}],["meta",{"property":"og:description","content":"JVM GUI 工具 Java 程序员免不了故障排查工作，所以经常需要使用一些 JVM 工具。 本文系统性的介绍一下常用的 JVM GUI 工具。 jconsole jconsole 是 JDK 自带的 GUI 工具。jconsole(Java Monitoring and Management Console) 是一种基于 JMX 的可视化监视与管理工具。 jconsole 的管理功能是针对 JMX MBean 进行管理，由于 MBean 可以使用代码、中间件服务器的管理控制台或所有符合 JMX 规范的软件进行访问。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T22:46:25.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JavaSE"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:tag","content":"GUI"}],["meta",{"property":"article:published_time","content":"2020-07-30T17:56:33.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T22:46:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM GUI 工具\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-07-30T17:56:33.000Z\\",\\"dateModified\\":\\"2024-05-15T22:46:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"jconsole","slug":"jconsole","link":"#jconsole","children":[{"level":3,"title":"开启 JMX","slug":"开启-jmx","link":"#开启-jmx","children":[]},{"level":3,"title":"连接 jconsole","slug":"连接-jconsole","link":"#连接-jconsole","children":[]},{"level":3,"title":"jconsole 界面","slug":"jconsole-界面","link":"#jconsole-界面","children":[]}]},{"level":2,"title":"jvisualvm","slug":"jvisualvm","link":"#jvisualvm","children":[{"level":3,"title":"jvisualvm 概述页面","slug":"jvisualvm-概述页面","link":"#jvisualvm-概述页面","children":[]},{"level":3,"title":"jvisualvm 监控页面","slug":"jvisualvm-监控页面","link":"#jvisualvm-监控页面","children":[]},{"level":3,"title":"jvisualvm 线程页面","slug":"jvisualvm-线程页面","link":"#jvisualvm-线程页面","children":[]},{"level":3,"title":"jvisualvm 抽样器页面","slug":"jvisualvm-抽样器页面","link":"#jvisualvm-抽样器页面","children":[]}]},{"level":2,"title":"MAT","slug":"mat","link":"#mat","children":[{"level":3,"title":"MAT 配置","slug":"mat-配置","link":"#mat-配置","children":[]},{"level":3,"title":"MAT 分析","slug":"mat-分析","link":"#mat-分析","children":[]}]},{"level":2,"title":"JProfile","slug":"jprofile","link":"#jprofile","children":[]},{"level":2,"title":"Arthas","slug":"arthas","link":"#arthas","children":[{"level":3,"title":"Arthas 基础命令","slug":"arthas-基础命令","link":"#arthas-基础命令","children":[]},{"level":3,"title":"Arthas jvm 相关命令","slug":"arthas-jvm-相关命令","link":"#arthas-jvm-相关命令","children":[]},{"level":3,"title":"Arthas class/classloader 相关命令","slug":"arthas-class-classloader-相关命令","link":"#arthas-class-classloader-相关命令","children":[]},{"level":3,"title":"Arthas monitor/watch/trace 相关命令","slug":"arthas-monitor-watch-trace-相关命令","link":"#arthas-monitor-watch-trace-相关命令","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1715813185000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":4}]},"readingTime":{"minutes":7.13,"words":2140},"filePathRelative":"01.Java/01.JavaSE/06.JVM/12.JVM_GUI工具.md","localizedDate":"2020年7月30日","excerpt":"<h1> JVM GUI 工具</h1>\\n<blockquote>\\n<p>Java 程序员免不了故障排查工作，所以经常需要使用一些 JVM 工具。</p>\\n<p>本文系统性的介绍一下常用的 JVM GUI 工具。</p>\\n</blockquote>\\n<h2> jconsole</h2>\\n<blockquote>\\n<p>jconsole 是 JDK 自带的 GUI 工具。<strong>jconsole(Java Monitoring and Management Console) 是一种基于 JMX 的可视化监视与管理工具</strong>。</p>\\n<p>jconsole 的管理功能是针对 JMX MBean 进行管理，由于 MBean 可以使用代码、中间件服务器的管理控制台或所有符合 JMX 规范的软件进行访问。</p>\\n</blockquote>","autoDesc":true}');export{e as data};
