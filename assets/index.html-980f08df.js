const e=JSON.parse('{"key":"v-9cf6e8d6","path":"/pages/cca414/","title":"Spring 事件","lang":"zh-CN","frontmatter":{"title":"Spring 事件","date":"2022-12-22T20:31:02.000Z","category":["Java","框架","Spring","Spring核心"],"tag":["Java","框架","Spring"],"permalink":"/pages/cca414/","description":"Spring 事件 Java 事件/监听器编程模型 设计模式 - 观察者模式扩展 可观者对象（消息发送者） - java.util.Observable 观察者 - java.util.Observer 标准化接口 事件对象 - java.util.EventObject 事件监听器 - java.util.EventListener 面向接口的事件/监听器设计模式 事件/监听器场景举例","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/cca414/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Spring 事件"}],["meta",{"property":"og:description","content":"Spring 事件 Java 事件/监听器编程模型 设计模式 - 观察者模式扩展 可观者对象（消息发送者） - java.util.Observable 观察者 - java.util.Observer 标准化接口 事件对象 - java.util.EventObject 事件监听器 - java.util.EventListener 面向接口的事件/监听器设计模式 事件/监听器场景举例"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T10:35:58.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"框架"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:published_time","content":"2022-12-22T20:31:02.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T10:35:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring 事件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-22T20:31:02.000Z\\",\\"dateModified\\":\\"2023-09-10T10:35:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Java 事件/监听器编程模型","slug":"java-事件-监听器编程模型","link":"#java-事件-监听器编程模型","children":[]},{"level":2,"title":"面向接口的事件/监听器设计模式","slug":"面向接口的事件-监听器设计模式","link":"#面向接口的事件-监听器设计模式","children":[]},{"level":2,"title":"面向注解的事件/监听器设计模式","slug":"面向注解的事件-监听器设计模式","link":"#面向注解的事件-监听器设计模式","children":[]},{"level":2,"title":"Spring 标准事件 - ApplicationEvent","slug":"spring-标准事件-applicationevent","link":"#spring-标准事件-applicationevent","children":[]},{"level":2,"title":"基于接口的 Spring 事件监听器","slug":"基于接口的-spring-事件监听器","link":"#基于接口的-spring-事件监听器","children":[]},{"level":2,"title":"基于注解的 Spring 事件监听器","slug":"基于注解的-spring-事件监听器","link":"#基于注解的-spring-事件监听器","children":[]},{"level":2,"title":"注册 Spring ApplicationListener","slug":"注册-spring-applicationlistener","link":"#注册-spring-applicationlistener","children":[]},{"level":2,"title":"Spring 事件发布器","slug":"spring-事件发布器","link":"#spring-事件发布器","children":[]},{"level":2,"title":"Spring 层次性上下文事件传播","slug":"spring-层次性上下文事件传播","link":"#spring-层次性上下文事件传播","children":[]},{"level":2,"title":"Spring 内建事件","slug":"spring-内建事件","link":"#spring-内建事件","children":[]},{"level":2,"title":"Spring 4.2 Payload 事件","slug":"spring-4-2-payload-事件","link":"#spring-4-2-payload-事件","children":[]},{"level":2,"title":"自定义 Spring 事件","slug":"自定义-spring-事件","link":"#自定义-spring-事件","children":[]},{"level":2,"title":"依赖注入 ApplicationEventPublisher","slug":"依赖注入-applicationeventpublisher","link":"#依赖注入-applicationeventpublisher","children":[]},{"level":2,"title":"依赖查找 ApplicationEventMulticaster","slug":"依赖查找-applicationeventmulticaster","link":"#依赖查找-applicationeventmulticaster","children":[]},{"level":2,"title":"ApplicationEventPublisher 底层实现","slug":"applicationeventpublisher-底层实现","link":"#applicationeventpublisher-底层实现","children":[]},{"level":2,"title":"同步和异步 Spring 事件广播","slug":"同步和异步-spring-事件广播","link":"#同步和异步-spring-事件广播","children":[]},{"level":2,"title":"Spring 4.1 事件异常处理","slug":"spring-4-1-事件异常处理","link":"#spring-4-1-事件异常处理","children":[]},{"level":2,"title":"Spring 事件/监听器实现原理","slug":"spring-事件-监听器实现原理","link":"#spring-事件-监听器实现原理","children":[]},{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694342158000,"updatedTime":1694342158000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":3.97,"words":1192},"filePathRelative":"01.Java/13.框架/01.Spring/01.Spring核心/25.Spring事件.md","localizedDate":"2022年12月22日","excerpt":"<h1> Spring 事件</h1>\\n<h2> Java 事件/监听器编程模型</h2>\\n<p>设计模式 - 观察者模式扩展</p>\\n<ul>\\n<li>可观者对象（消息发送者） - java.util.Observable</li>\\n<li>观察者 - java.util.Observer</li>\\n</ul>\\n<p>标准化接口</p>\\n<ul>\\n<li>事件对象 - java.util.EventObject</li>\\n<li>事件监听器 - java.util.EventListener</li>\\n</ul>\\n<h2> 面向接口的事件/监听器设计模式</h2>\\n<p>事件/监听器场景举例</p>","autoDesc":true}');export{e as data};
