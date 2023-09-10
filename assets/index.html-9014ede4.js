const e=JSON.parse('{"key":"v-0e9c588e","path":"/pages/4c1dd4/","title":"Java 正则从入门到精通","lang":"zh-CN","frontmatter":{"title":"Java 正则从入门到精通","date":"2020-12-25T18:43:11.000Z","category":["Java","JavaSE","高级特性"],"tag":["Java","JavaSE","正则"],"permalink":"/pages/4c1dd4/","description":"Java 正则从入门到精通 关键词：Pattern、Matcher、捕获与非捕获、反向引用、零宽断言、贪婪与懒惰、元字符、DFA、NFA 正则简介 正则表达式是什么 正则表达式（Regular Expression）是一个用正则符号写出的公式，程序对这个公式进行语法分析，建立一个语法分析树，再根据这个分析树结合正则表达式的引擎生成执行程序（这个执行程序我们把它称作状态机，也叫状态自动机），用于字符匹配。 如何学习正则 正则表达式是一个强大的文本匹配工具，但是它的规则很复杂，理解起来较为困难，容易让人望而生畏。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/4c1dd4/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Java 正则从入门到精通"}],["meta",{"property":"og:description","content":"Java 正则从入门到精通 关键词：Pattern、Matcher、捕获与非捕获、反向引用、零宽断言、贪婪与懒惰、元字符、DFA、NFA 正则简介 正则表达式是什么 正则表达式（Regular Expression）是一个用正则符号写出的公式，程序对这个公式进行语法分析，建立一个语法分析树，再根据这个分析树结合正则表达式的引擎生成执行程序（这个执行程序我们把它称作状态机，也叫状态自动机），用于字符匹配。 如何学习正则 正则表达式是一个强大的文本匹配工具，但是它的规则很复杂，理解起来较为困难，容易让人望而生畏。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T10:35:58.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JavaSE"}],["meta",{"property":"article:tag","content":"正则"}],["meta",{"property":"article:published_time","content":"2020-12-25T18:43:11.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T10:35:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 正则从入门到精通\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-25T18:43:11.000Z\\",\\"dateModified\\":\\"2023-09-10T10:35:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"正则简介","slug":"正则简介","link":"#正则简介","children":[{"level":3,"title":"正则表达式是什么","slug":"正则表达式是什么","link":"#正则表达式是什么","children":[]},{"level":3,"title":"如何学习正则","slug":"如何学习正则","link":"#如何学习正则","children":[]}]},{"level":2,"title":"正则工具类","slug":"正则工具类","link":"#正则工具类","children":[{"level":3,"title":"Pattern 类","slug":"pattern-类","link":"#pattern-类","children":[]},{"level":3,"title":"Matcher 类","slug":"matcher-类","link":"#matcher-类","children":[]}]},{"level":2,"title":"元字符","slug":"元字符","link":"#元字符","children":[{"level":3,"title":"基本元字符","slug":"基本元字符","link":"#基本元字符","children":[]},{"level":3,"title":"等价字符","slug":"等价字符","link":"#等价字符","children":[]}]},{"level":2,"title":"分组构造","slug":"分组构造","link":"#分组构造","children":[{"level":3,"title":"捕获与非捕获","slug":"捕获与非捕获","link":"#捕获与非捕获","children":[]},{"level":3,"title":"反向引用","slug":"反向引用","link":"#反向引用","children":[]},{"level":3,"title":"非捕获组","slug":"非捕获组","link":"#非捕获组","children":[]},{"level":3,"title":"零宽断言","slug":"零宽断言","link":"#零宽断言","children":[]}]},{"level":2,"title":"贪婪与懒惰","slug":"贪婪与懒惰","link":"#贪婪与懒惰","children":[]},{"level":2,"title":"正则附录","slug":"正则附录","link":"#正则附录","children":[{"level":3,"title":"匹配正则字符串的方法","slug":"匹配正则字符串的方法","link":"#匹配正则字符串的方法","children":[]},{"level":3,"title":"速查元字符字典","slug":"速查元字符字典","link":"#速查元字符字典","children":[]}]},{"level":2,"title":"正则实战","slug":"正则实战","link":"#正则实战","children":[{"level":3,"title":"最实用的正则","slug":"最实用的正则","link":"#最实用的正则","children":[]},{"level":3,"title":"特定字符","slug":"特定字符","link":"#特定字符","children":[]},{"level":3,"title":"特定数字","slug":"特定数字","link":"#特定数字","children":[]}]},{"level":2,"title":"正则表达式的性能","slug":"正则表达式的性能","link":"#正则表达式的性能","children":[{"level":3,"title":"NFA 自动机的回溯","slug":"nfa-自动机的回溯","link":"#nfa-自动机的回溯","children":[]},{"level":3,"title":"如何避免回溯","slug":"如何避免回溯","link":"#如何避免回溯","children":[]},{"level":3,"title":"正则表达式的优化","slug":"正则表达式的优化","link":"#正则表达式的优化","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694342158000,"updatedTime":1694342158000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":40.36,"words":12108},"filePathRelative":"01.Java/01.JavaSE/02.高级特性/01.Java正则.md","localizedDate":"2020年12月25日","excerpt":"<h1> Java 正则从入门到精通</h1>\\n<blockquote>\\n<p>关键词：Pattern、Matcher、捕获与非捕获、反向引用、零宽断言、贪婪与懒惰、元字符、DFA、NFA</p>\\n</blockquote>\\n<h2> 正则简介</h2>\\n<h3> 正则表达式是什么</h3>\\n<p>正则表达式（Regular Expression）是一个用正则符号写出的公式，程序对这个公式进行语法分析，建立一个语法分析树，再根据这个分析树结合正则表达式的引擎生成执行程序（这个执行程序我们把它称作状态机，也叫状态自动机），用于字符匹配。</p>\\n<h3> 如何学习正则</h3>\\n<p>正则表达式是一个强大的文本匹配工具，但是它的规则很复杂，理解起来较为困难，容易让人望而生畏。</p>","autoDesc":true}');export{e as data};
