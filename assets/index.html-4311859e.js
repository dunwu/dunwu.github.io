const e=JSON.parse('{"key":"v-1b6b5f40","path":"/pages/ecc011/","title":"深入理解 Java 注解","lang":"zh-CN","frontmatter":{"title":"深入理解 Java 注解","date":"2019-05-06T15:02:02.000Z","category":["Java","JavaSE","基础特性"],"tag":["Java","JavaSE","注解"],"permalink":"/pages/ecc011/","description":"深入理解 Java 注解 本文内容基于 JDK8。注解是 JDK5 引入的，后续 JDK 版本扩展了一些内容，本文中没有明确指明版本的注解都是 JDK5 就已经支持的注解。 简介 注解的形式 Java 中，注解是以 @ 字符开始的修饰符。如下： @Override void mySuperMethod() { ... }","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/ecc011/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"深入理解 Java 注解"}],["meta",{"property":"og:description","content":"深入理解 Java 注解 本文内容基于 JDK8。注解是 JDK5 引入的，后续 JDK 版本扩展了一些内容，本文中没有明确指明版本的注解都是 JDK5 就已经支持的注解。 简介 注解的形式 Java 中，注解是以 @ 字符开始的修饰符。如下： @Override void mySuperMethod() { ... }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T13:36:40.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JavaSE"}],["meta",{"property":"article:tag","content":"注解"}],["meta",{"property":"article:published_time","content":"2019-05-06T15:02:02.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T13:36:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"深入理解 Java 注解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-05-06T15:02:02.000Z\\",\\"dateModified\\":\\"2023-09-10T13:36:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[{"level":3,"title":"注解的形式","slug":"注解的形式","link":"#注解的形式","children":[]},{"level":3,"title":"什么是注解","slug":"什么是注解","link":"#什么是注解","children":[]},{"level":3,"title":"注解的作用","slug":"注解的作用","link":"#注解的作用","children":[]},{"level":3,"title":"注解的代价","slug":"注解的代价","link":"#注解的代价","children":[]},{"level":3,"title":"注解的应用范围","slug":"注解的应用范围","link":"#注解的应用范围","children":[]}]},{"level":2,"title":"内置注解","slug":"内置注解","link":"#内置注解","children":[{"level":3,"title":"@Override","slug":"override","link":"#override","children":[]},{"level":3,"title":"@Deprecated","slug":"deprecated","link":"#deprecated","children":[]},{"level":3,"title":"@SuppressWarnnings","slug":"suppresswarnnings","link":"#suppresswarnnings","children":[]},{"level":3,"title":"@SafeVarargs","slug":"safevarargs","link":"#safevarargs","children":[]},{"level":3,"title":"@FunctionalInterface","slug":"functionalinterface","link":"#functionalinterface","children":[]}]},{"level":2,"title":"元注解","slug":"元注解","link":"#元注解","children":[{"level":3,"title":"@Retention","slug":"retention","link":"#retention","children":[]},{"level":3,"title":"@Documented","slug":"documented","link":"#documented","children":[]},{"level":3,"title":"@Target","slug":"target","link":"#target","children":[]},{"level":3,"title":"@Inherited","slug":"inherited","link":"#inherited","children":[]},{"level":3,"title":"@Repeatable","slug":"repeatable","link":"#repeatable","children":[]}]},{"level":2,"title":"自定义注解","slug":"自定义注解","link":"#自定义注解","children":[{"level":3,"title":"注解的定义","slug":"注解的定义","link":"#注解的定义","children":[]},{"level":3,"title":"注解属性","slug":"注解属性","link":"#注解属性","children":[]},{"level":3,"title":"注解处理器","slug":"注解处理器","link":"#注解处理器","children":[]},{"level":3,"title":"使用注解","slug":"使用注解","link":"#使用注解","children":[]}]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694353000000,"updatedTime":1694353000000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":18.43,"words":5528},"filePathRelative":"01.Java/01.JavaSE/01.基础特性/11.Java注解.md","localizedDate":"2019年5月6日","excerpt":"<h1> 深入理解 Java 注解</h1>\\n<blockquote>\\n<p>本文内容基于 JDK8。注解是 JDK5 引入的，后续 JDK 版本扩展了一些内容，本文中没有明确指明版本的注解都是 JDK5 就已经支持的注解。</p>\\n</blockquote>\\n<h2> 简介</h2>\\n<h3> 注解的形式</h3>\\n<p>Java 中，注解是以 <code>@</code> 字符开始的修饰符。如下：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token annotation punctuation\\">@Override</span>\\n<span class=\\"token keyword\\">void</span> <span class=\\"token function\\">mySuperMethod</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span> <span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
