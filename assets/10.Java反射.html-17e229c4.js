const e=JSON.parse('{"key":"v-1fa59b62","path":"/01.Java/01.JavaSE/01.%E5%9F%BA%E7%A1%80%E7%89%B9%E6%80%A7/10.Java%E5%8F%8D%E5%B0%84.html","title":"深入理解 Java 反射和动态代理","lang":"zh-CN","frontmatter":{"title":"深入理解 Java 反射和动态代理","date":"2020-06-04T13:51:01.000Z","order":10,"category":["Java","JavaSE","基础特性"],"tag":["Java","JavaSE","反射","动态代理"],"description":"深入理解 Java 反射和动态代理 反射简介 img 什么是反射 反射(Reflection)是 Java 程序开发语言的特征之一，它允许运行中的 Java 程序获取自身的信息，并且可以操作类或对象的内部属性。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/01.Java/01.JavaSE/01.%E5%9F%BA%E7%A1%80%E7%89%B9%E6%80%A7/10.Java%E5%8F%8D%E5%B0%84.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"深入理解 Java 反射和动态代理"}],["meta",{"property":"og:description","content":"深入理解 Java 反射和动态代理 反射简介 img 什么是反射 反射(Reflection)是 Java 程序开发语言的特征之一，它允许运行中的 Java 程序获取自身的信息，并且可以操作类或对象的内部属性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T14:54:54.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JavaSE"}],["meta",{"property":"article:tag","content":"反射"}],["meta",{"property":"article:tag","content":"动态代理"}],["meta",{"property":"article:published_time","content":"2020-06-04T13:51:01.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-21T14:54:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"深入理解 Java 反射和动态代理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-04T13:51:01.000Z\\",\\"dateModified\\":\\"2023-09-21T14:54:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"反射简介","slug":"反射简介","link":"#反射简介","children":[{"level":3,"title":"什么是反射","slug":"什么是反射","link":"#什么是反射","children":[]},{"level":3,"title":"反射的应用场景","slug":"反射的应用场景","link":"#反射的应用场景","children":[]},{"level":3,"title":"反射的缺点","slug":"反射的缺点","link":"#反射的缺点","children":[]}]},{"level":2,"title":"反射机制","slug":"反射机制","link":"#反射机制","children":[{"level":3,"title":"类加载过程","slug":"类加载过程","link":"#类加载过程","children":[]},{"level":3,"title":"Class 对象","slug":"class-对象","link":"#class-对象","children":[]},{"level":3,"title":"方法的反射调用","slug":"方法的反射调用","link":"#方法的反射调用","children":[]},{"level":3,"title":"反射调用的开销","slug":"反射调用的开销","link":"#反射调用的开销","children":[]}]},{"level":2,"title":"使用反射","slug":"使用反射","link":"#使用反射","children":[{"level":3,"title":"java.lang.reflect 包","slug":"java-lang-reflect-包","link":"#java-lang-reflect-包","children":[]},{"level":3,"title":"获取 Class 对象","slug":"获取-class-对象","link":"#获取-class-对象","children":[]},{"level":3,"title":"判断是否为某个类的实例","slug":"判断是否为某个类的实例","link":"#判断是否为某个类的实例","children":[]},{"level":3,"title":"创建实例","slug":"创建实例","link":"#创建实例","children":[]},{"level":3,"title":"创建数组实例","slug":"创建数组实例","link":"#创建数组实例","children":[]},{"level":3,"title":"Field","slug":"field","link":"#field","children":[]},{"level":3,"title":"Method","slug":"method","link":"#method","children":[]},{"level":3,"title":"Constructor","slug":"constructor","link":"#constructor","children":[]},{"level":3,"title":"绕开访问限制","slug":"绕开访问限制","link":"#绕开访问限制","children":[]}]},{"level":2,"title":"动态代理","slug":"动态代理","link":"#动态代理","children":[{"level":3,"title":"静态代理","slug":"静态代理","link":"#静态代理","children":[]},{"level":3,"title":"JDK 动态代理","slug":"jdk-动态代理","link":"#jdk-动态代理","children":[]},{"level":3,"title":"CGLIB 动态代理","slug":"cglib-动态代理","link":"#cglib-动态代理","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1695308094000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":23.18,"words":6953},"filePathRelative":"01.Java/01.JavaSE/01.基础特性/10.Java反射.md","localizedDate":"2020年6月4日","excerpt":"<h1> 深入理解 Java 反射和动态代理</h1>\\n<h2> 反射简介</h2>\\n<figure><img src=\\"https://raw.githubusercontent.com/dunwu/images/master/cs/java/javacore/xmind/Java反射.svg\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>img</figcaption></figure>\\n<h3> 什么是反射</h3>\\n<p>反射(Reflection)是 Java 程序开发语言的特征之一，它允许运行中的 Java 程序获取自身的信息，并且可以操作类或对象的内部属性。</p>","autoDesc":true}');export{e as data};
