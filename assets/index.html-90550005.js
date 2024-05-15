const e=JSON.parse('{"key":"v-48f294d1","path":"/pages/752c6a/","title":"Spring 4 升级踩雷指南","lang":"zh-CN","frontmatter":{"title":"Spring 4 升级踩雷指南","date":"2017-12-15T15:10:32.000Z","order":1,"permalink":"/pages/752c6a/","category":["Java","框架","Spring","Spring其他"],"tag":["Java","框架","Spring"],"description":"Spring 4 升级踩雷指南 前言 最近，一直在为公司老项目做核心库升级工作。本来只是想升级一下 JDK8 ，却因为兼容性问题而不得不升级一些其他的库，而其他库本身依赖的一些库可能也要同步升级。这是一系列连锁问题，你很难一一识别，往往只有在编译时、运行时才能发现问题。 总之，这是个费劲的活啊。 本文小结一下升级 Spring4 的连锁问题。 为什么升级 spring4 升级 Spring4 的原因是：Spring 4 以前的版本不兼容 JDK8。当你的项目同时使用 Spring3 和 JDK8，如果代码中有使用 JDK8 字节码或 Lambada 表达式，那么会出问题。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/752c6a/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Spring 4 升级踩雷指南"}],["meta",{"property":"og:description","content":"Spring 4 升级踩雷指南 前言 最近，一直在为公司老项目做核心库升级工作。本来只是想升级一下 JDK8 ，却因为兼容性问题而不得不升级一些其他的库，而其他库本身依赖的一些库可能也要同步升级。这是一系列连锁问题，你很难一一识别，往往只有在编译时、运行时才能发现问题。 总之，这是个费劲的活啊。 本文小结一下升级 Spring4 的连锁问题。 为什么升级 spring4 升级 Spring4 的原因是：Spring 4 以前的版本不兼容 JDK8。当你的项目同时使用 Spring3 和 JDK8，如果代码中有使用 JDK8 字节码或 Lambada 表达式，那么会出问题。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T22:46:25.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"框架"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:published_time","content":"2017-12-15T15:10:32.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T22:46:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring 4 升级踩雷指南\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-12-15T15:10:32.000Z\\",\\"dateModified\\":\\"2024-05-15T22:46:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"为什么升级 spring4","slug":"为什么升级-spring4","link":"#为什么升级-spring4","children":[]},{"level":2,"title":"spring 4 重要新特性","slug":"spring-4-重要新特性","link":"#spring-4-重要新特性","children":[]},{"level":2,"title":"升级 spring 4 步骤","slug":"升级-spring-4-步骤","link":"#升级-spring-4-步骤","children":[{"level":3,"title":"修改 spring 版本","slug":"修改-spring-版本","link":"#修改-spring-版本","children":[]},{"level":3,"title":"修改 spring xml 文件的 xsd","slug":"修改-spring-xml-文件的-xsd","link":"#修改-spring-xml-文件的-xsd","children":[]},{"level":3,"title":"修改 spring xml 文件","slug":"修改-spring-xml-文件","link":"#修改-spring-xml-文件","children":[]},{"level":3,"title":"加入 spring support","slug":"加入-spring-support","link":"#加入-spring-support","children":[]},{"level":3,"title":"更换 spring-mvc jackson","slug":"更换-spring-mvc-jackson","link":"#更换-spring-mvc-jackson","children":[]},{"level":3,"title":"解决 ibatis 兼容问题","slug":"解决-ibatis-兼容问题","link":"#解决-ibatis-兼容问题","children":[]},{"level":3,"title":"升级 Dubbo","slug":"升级-dubbo","link":"#升级-dubbo","children":[]},{"level":3,"title":"升级 Jedis","slug":"升级-jedis","link":"#升级-jedis","children":[]}]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1715813185000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":3}]},"readingTime":{"minutes":7.37,"words":2210},"filePathRelative":"01.Java/13.框架/01.Spring/99.Spring其他/01.Spring4升级.md","localizedDate":"2017年12月15日","excerpt":"<h1> Spring 4 升级踩雷指南</h1>\\n<h2> 前言</h2>\\n<p>最近，一直在为公司老项目做核心库升级工作。本来只是想升级一下 JDK8 ，却因为兼容性问题而不得不升级一些其他的库，而其他库本身依赖的一些库可能也要同步升级。这是一系列连锁问题，你很难一一识别，往往只有在编译时、运行时才能发现问题。</p>\\n<p>总之，这是个费劲的活啊。</p>\\n<p>本文小结一下升级 Spring4 的连锁问题。</p>\\n<h2> 为什么升级 spring4</h2>\\n<p>升级 Spring4 的原因是：Spring 4 以前的版本不兼容 JDK8。当你的项目同时使用 Spring3 和 JDK8，如果代码中有使用 JDK8 字节码或 Lambada 表达式，那么会出问题。</p>","autoDesc":true}');export{e as data};