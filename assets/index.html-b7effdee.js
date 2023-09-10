const e=JSON.parse('{"key":"v-3c5b7302","path":"/pages/55d693/","title":"深入理解 Java 基本数据类型","lang":"zh-CN","frontmatter":{"title":"深入理解 Java 基本数据类型","date":"2019-05-06T15:02:02.000Z","category":["Java","JavaSE","基础特性"],"tag":["Java","JavaSE","数据类型"],"permalink":"/pages/55d693/","description":"深入理解 Java 基本数据类型 img 数据类型分类 Java 中的数据类型有两类： 值类型（又叫内置数据类型，基本数据类型） 引用类型（除值类型以外，都是引用类型，包括 String、数组）","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/55d693/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"深入理解 Java 基本数据类型"}],["meta",{"property":"og:description","content":"深入理解 Java 基本数据类型 img 数据类型分类 Java 中的数据类型有两类： 值类型（又叫内置数据类型，基本数据类型） 引用类型（除值类型以外，都是引用类型，包括 String、数组）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T13:36:40.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JavaSE"}],["meta",{"property":"article:tag","content":"数据类型"}],["meta",{"property":"article:published_time","content":"2019-05-06T15:02:02.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T13:36:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"深入理解 Java 基本数据类型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-05-06T15:02:02.000Z\\",\\"dateModified\\":\\"2023-09-10T13:36:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"数据类型分类","slug":"数据类型分类","link":"#数据类型分类","children":[{"level":3,"title":"值类型","slug":"值类型","link":"#值类型","children":[]},{"level":3,"title":"值类型和引用类型的区别","slug":"值类型和引用类型的区别","link":"#值类型和引用类型的区别","children":[]}]},{"level":2,"title":"数据转换","slug":"数据转换","link":"#数据转换","children":[{"level":3,"title":"自动转换","slug":"自动转换","link":"#自动转换","children":[]},{"level":3,"title":"强制转换","slug":"强制转换","link":"#强制转换","children":[]}]},{"level":2,"title":"装箱和拆箱","slug":"装箱和拆箱","link":"#装箱和拆箱","children":[{"level":3,"title":"包装类、装箱、拆箱","slug":"包装类、装箱、拆箱","link":"#包装类、装箱、拆箱","children":[]},{"level":3,"title":"自动装箱、自动拆箱","slug":"自动装箱、自动拆箱","link":"#自动装箱、自动拆箱","children":[]},{"level":3,"title":"装箱、拆箱的应用和注意点","slug":"装箱、拆箱的应用和注意点","link":"#装箱、拆箱的应用和注意点","children":[]}]},{"level":2,"title":"判等问题","slug":"判等问题","link":"#判等问题","children":[{"level":3,"title":"包装类的判等","slug":"包装类的判等","link":"#包装类的判等","children":[]},{"level":3,"title":"String 的判等","slug":"string-的判等","link":"#string-的判等","children":[]},{"level":3,"title":"实现 equals","slug":"实现-equals","link":"#实现-equals","children":[]},{"level":3,"title":"hashCode 和 equals 要配对实现","slug":"hashcode-和-equals-要配对实现","link":"#hashcode-和-equals-要配对实现","children":[]},{"level":3,"title":"compareTo 和 equals 的逻辑一致性","slug":"compareto-和-equals-的逻辑一致性","link":"#compareto-和-equals-的逻辑一致性","children":[]},{"level":3,"title":"小心 Lombok 生成代码的“坑”","slug":"小心-lombok-生成代码的-坑","link":"#小心-lombok-生成代码的-坑","children":[]}]},{"level":2,"title":"数值计算","slug":"数值计算","link":"#数值计算","children":[{"level":3,"title":"浮点数计算问题","slug":"浮点数计算问题","link":"#浮点数计算问题","children":[]},{"level":3,"title":"浮点数精度和格式化","slug":"浮点数精度和格式化","link":"#浮点数精度和格式化","children":[]},{"level":3,"title":"BigDecimal 判等问题","slug":"bigdecimal-判等问题","link":"#bigdecimal-判等问题","children":[]},{"level":3,"title":"数值溢出","slug":"数值溢出","link":"#数值溢出","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694353000000,"updatedTime":1694353000000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":18.43,"words":5529},"filePathRelative":"01.Java/01.JavaSE/01.基础特性/02.Java基本数据类型.md","localizedDate":"2019年5月6日","excerpt":"<h1> 深入理解 Java 基本数据类型</h1>\\n<figure><img src=\\"https://raw.githubusercontent.com/dunwu/images/dev/snap/20220408172602.png\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>img</figcaption></figure>\\n<h2> 数据类型分类</h2>\\n<p>Java 中的数据类型有两类：</p>\\n<ul>\\n<li>值类型（又叫内置数据类型，基本数据类型）</li>\\n<li>引用类型（除值类型以外，都是引用类型，包括 <code>String</code>、数组）</li>\\n</ul>","autoDesc":true}');export{e as data};
