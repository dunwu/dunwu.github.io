const e=JSON.parse('{"key":"v-4656e290","path":"/01.Java/13.%E6%A1%86%E6%9E%B6/01.Spring/01.Spring%E6%A0%B8%E5%BF%83/02.SpringIoC.html","title":"Spring IoC","lang":"zh-CN","frontmatter":{"title":"Spring IoC","date":"2020-08-30T16:06:10.000Z","order":2,"category":["Java","框架","Spring","Spring核心"],"tag":["Java","框架","Spring","IOC"],"description":"Spring IoC IoC 简介 IoC 是什么 IoC 即控制反转（Inversion of Control，缩写为 IoC）。IoC 又称为依赖倒置原则（设计模式六大原则之一），它的要点在于：程序要依赖于抽象接口，不要依赖于具体实现。它的作用就是用于降低代码间的耦合度。 IoC 的实现方式有两种： 依赖注入（Dependency Injection，简称 DI）：不通过 new() 的方式在类内部创建依赖类对象，而是将依赖的类对象在外部创建好之后，通过构造函数、函数参数等方式传递（或注入）给类使用。 依赖查找（Dependency Lookup）：容器中的受控对象通过容器的 API 来查找自己所依赖的资源和协作对象。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/01.Java/13.%E6%A1%86%E6%9E%B6/01.Spring/01.Spring%E6%A0%B8%E5%BF%83/02.SpringIoC.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Spring IoC"}],["meta",{"property":"og:description","content":"Spring IoC IoC 简介 IoC 是什么 IoC 即控制反转（Inversion of Control，缩写为 IoC）。IoC 又称为依赖倒置原则（设计模式六大原则之一），它的要点在于：程序要依赖于抽象接口，不要依赖于具体实现。它的作用就是用于降低代码间的耦合度。 IoC 的实现方式有两种： 依赖注入（Dependency Injection，简称 DI）：不通过 new() 的方式在类内部创建依赖类对象，而是将依赖的类对象在外部创建好之后，通过构造函数、函数参数等方式传递（或注入）给类使用。 依赖查找（Dependency Lookup）：容器中的受控对象通过容器的 API 来查找自己所依赖的资源和协作对象。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-24T23:58:37.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"框架"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:tag","content":"IOC"}],["meta",{"property":"article:published_time","content":"2020-08-30T16:06:10.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-24T23:58:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring IoC\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-08-30T16:06:10.000Z\\",\\"dateModified\\":\\"2024-01-24T23:58:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"IoC 简介","slug":"ioc-简介","link":"#ioc-简介","children":[{"level":3,"title":"IoC 是什么","slug":"ioc-是什么","link":"#ioc-是什么","children":[]},{"level":3,"title":"IoC 能做什么","slug":"ioc-能做什么","link":"#ioc-能做什么","children":[]},{"level":3,"title":"IoC 和 DI","slug":"ioc-和-di","link":"#ioc-和-di","children":[]},{"level":3,"title":"IoC 容器","slug":"ioc-容器","link":"#ioc-容器","children":[]},{"level":3,"title":"Bean","slug":"bean","link":"#bean","children":[]},{"level":3,"title":"Spring IoC","slug":"spring-ioc-1","link":"#spring-ioc-1","children":[]}]},{"level":2,"title":"IoC 容器","slug":"ioc-容器-1","link":"#ioc-容器-1","children":[{"level":3,"title":"配置元数据","slug":"配置元数据","link":"#配置元数据","children":[]},{"level":3,"title":"实例化容器","slug":"实例化容器","link":"#实例化容器","children":[]},{"level":3,"title":"使用容器","slug":"使用容器","link":"#使用容器","children":[]}]},{"level":2,"title":"IoC 依赖来源","slug":"ioc-依赖来源","link":"#ioc-依赖来源","children":[]},{"level":2,"title":"IoC 配置元数据","slug":"ioc-配置元数据","link":"#ioc-配置元数据","children":[{"level":3,"title":"Xml 配置","slug":"xml-配置","link":"#xml-配置","children":[]},{"level":3,"title":"注解配置","slug":"注解配置","link":"#注解配置","children":[]},{"level":3,"title":"Java 配置","slug":"java-配置","link":"#java-配置","children":[]}]},{"level":2,"title":"依赖解决过程","slug":"依赖解决过程","link":"#依赖解决过程","children":[]},{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[{"level":3,"title":"singleton 的 Bean 如何注入 prototype 的 Bean","slug":"singleton-的-bean-如何注入-prototype-的-bean","link":"#singleton-的-bean-如何注入-prototype-的-bean","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1706140717000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":3}]},"readingTime":{"minutes":23.88,"words":7163},"filePathRelative":"01.Java/13.框架/01.Spring/01.Spring核心/02.SpringIoC.md","localizedDate":"2020年8月30日","excerpt":"<h1> Spring IoC</h1>\\n<h2> IoC 简介</h2>\\n<h3> IoC 是什么</h3>\\n<p><strong>IoC</strong> 即<strong>控制反转</strong>（Inversion of Control，缩写为 IoC）。IoC 又称为<strong>依赖倒置原则</strong>（设计模式六大原则之一），它的要点在于：<strong>程序要依赖于抽象接口，不要依赖于具体实现</strong>。它的作用就是<strong>用于降低代码间的耦合度</strong>。</p>\\n<p>IoC 的实现方式有两种：</p>\\n<ul>\\n<li><strong>依赖注入</strong>（Dependency Injection，简称 DI）：不通过 <code>new()</code> 的方式在类内部创建依赖类对象，而是将依赖的类对象在外部创建好之后，通过构造函数、函数参数等方式传递（或注入）给类使用。</li>\\n<li><strong>依赖查找</strong>（Dependency Lookup）：容器中的受控对象通过容器的 API 来查找自己所依赖的资源和协作对象。</li>\\n</ul>","autoDesc":true}');export{e as data};
