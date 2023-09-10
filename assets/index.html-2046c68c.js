const e=JSON.parse('{"key":"v-931050e2","path":"/pages/979887/","title":"深入理解 Java 枚举","lang":"zh-CN","frontmatter":{"title":"深入理解 Java 枚举","date":"2019-05-06T15:02:02.000Z","category":["Java","JavaSE","基础特性"],"tag":["Java","JavaSE","枚举"],"permalink":"/pages/979887/","description":"深入理解 Java 枚举 简介 enum 的全称为 enumeration， 是 JDK5 中引入的特性。 在 Java 中，被 enum 关键字修饰的类型就是枚举类型。形式如下： enum ColorEn { RED, GREEN, BLUE }","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/979887/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"深入理解 Java 枚举"}],["meta",{"property":"og:description","content":"深入理解 Java 枚举 简介 enum 的全称为 enumeration， 是 JDK5 中引入的特性。 在 Java 中，被 enum 关键字修饰的类型就是枚举类型。形式如下： enum ColorEn { RED, GREEN, BLUE }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T10:35:58.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JavaSE"}],["meta",{"property":"article:tag","content":"枚举"}],["meta",{"property":"article:published_time","content":"2019-05-06T15:02:02.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T10:35:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"深入理解 Java 枚举\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-05-06T15:02:02.000Z\\",\\"dateModified\\":\\"2023-09-10T10:35:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"枚举的本质","slug":"枚举的本质","link":"#枚举的本质","children":[]},{"level":2,"title":"枚举的方法","slug":"枚举的方法","link":"#枚举的方法","children":[]},{"level":2,"title":"枚举的特性","slug":"枚举的特性","link":"#枚举的特性","children":[{"level":3,"title":"基本特性","slug":"基本特性","link":"#基本特性","children":[]},{"level":3,"title":"枚举可以添加方法","slug":"枚举可以添加方法","link":"#枚举可以添加方法","children":[]},{"level":3,"title":"枚举可以实现接口","slug":"枚举可以实现接口","link":"#枚举可以实现接口","children":[]},{"level":3,"title":"枚举不可以继承","slug":"枚举不可以继承","link":"#枚举不可以继承","children":[]}]},{"level":2,"title":"枚举的应用","slug":"枚举的应用","link":"#枚举的应用","children":[{"level":3,"title":"组织常量","slug":"组织常量","link":"#组织常量","children":[]},{"level":3,"title":"switch 状态机","slug":"switch-状态机","link":"#switch-状态机","children":[]},{"level":3,"title":"错误码","slug":"错误码","link":"#错误码","children":[]},{"level":3,"title":"组织枚举","slug":"组织枚举","link":"#组织枚举","children":[]},{"level":3,"title":"策略枚举","slug":"策略枚举","link":"#策略枚举","children":[]},{"level":3,"title":"枚举实现单例模式","slug":"枚举实现单例模式","link":"#枚举实现单例模式","children":[]}]},{"level":2,"title":"枚举工具类","slug":"枚举工具类","link":"#枚举工具类","children":[{"level":3,"title":"EnumSet","slug":"enumset","link":"#enumset","children":[]},{"level":3,"title":"EnumMap","slug":"enummap","link":"#enummap","children":[]}]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694342158000,"updatedTime":1694342158000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":10.53,"words":3158},"filePathRelative":"01.Java/01.JavaSE/01.基础特性/06.Java枚举.md","localizedDate":"2019年5月6日","excerpt":"<h1> 深入理解 Java 枚举</h1>\\n<h2> 简介</h2>\\n<p><code>enum</code> 的全称为 enumeration， 是 JDK5 中引入的特性。</p>\\n<p>在 Java 中，被 <code>enum</code> 关键字修饰的类型就是枚举类型。形式如下：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">enum</span> <span class=\\"token class-name\\">ColorEn</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token constant\\">RED</span><span class=\\"token punctuation\\">,</span> <span class=\\"token constant\\">GREEN</span><span class=\\"token punctuation\\">,</span> <span class=\\"token constant\\">BLUE</span> <span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
