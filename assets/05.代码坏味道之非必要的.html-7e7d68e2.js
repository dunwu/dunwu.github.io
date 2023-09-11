const e=JSON.parse('{"key":"v-d9639c7a","path":"/03.%E8%AE%BE%E8%AE%A1/03.%E9%87%8D%E6%9E%84/05.%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E9%9D%9E%E5%BF%85%E8%A6%81%E7%9A%84.html","title":"代码坏味道之非必要的","lang":"zh-CN","frontmatter":{"title":"代码坏味道之非必要的","date":"2018-10-13T22:48:00.000Z","order":5,"category":["设计","重构"],"tag":["设计","重构","代码的坏味道"],"description":"翻译自：https://sourcemaking.com/refactoring/smells/dispensables 非必要的(Dispensables)这组坏味道意味着：这样的代码可有可无，它的存在反而影响整体代码的整洁和可读性。 冗余类","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/03.%E8%AE%BE%E8%AE%A1/03.%E9%87%8D%E6%9E%84/05.%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E9%9D%9E%E5%BF%85%E8%A6%81%E7%9A%84.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"代码坏味道之非必要的"}],["meta",{"property":"og:description","content":"翻译自：https://sourcemaking.com/refactoring/smells/dispensables 非必要的(Dispensables)这组坏味道意味着：这样的代码可有可无，它的存在反而影响整体代码的整洁和可读性。 冗余类"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T15:44:18.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"设计"}],["meta",{"property":"article:tag","content":"重构"}],["meta",{"property":"article:tag","content":"代码的坏味道"}],["meta",{"property":"article:published_time","content":"2018-10-13T22:48:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T15:44:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代码坏味道之非必要的\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-10-13T22:48:00.000Z\\",\\"dateModified\\":\\"2023-09-11T15:44:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"冗余类","slug":"冗余类","link":"#冗余类","children":[{"level":3,"title":"问题原因","slug":"问题原因","link":"#问题原因","children":[]},{"level":3,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]},{"level":3,"title":"收益","slug":"收益","link":"#收益","children":[]},{"level":3,"title":"何时忽略","slug":"何时忽略","link":"#何时忽略","children":[]},{"level":3,"title":"重构方法说明","slug":"重构方法说明","link":"#重构方法说明","children":[]}]},{"level":2,"title":"夸夸其谈未来性","slug":"夸夸其谈未来性","link":"#夸夸其谈未来性","children":[{"level":3,"title":"问题原因","slug":"问题原因-1","link":"#问题原因-1","children":[]},{"level":3,"title":"解决方法","slug":"解决方法-1","link":"#解决方法-1","children":[]},{"level":3,"title":"收益","slug":"收益-1","link":"#收益-1","children":[]},{"level":3,"title":"何时忽略","slug":"何时忽略-1","link":"#何时忽略-1","children":[]},{"level":3,"title":"重构方法说明","slug":"重构方法说明-1","link":"#重构方法说明-1","children":[]}]},{"level":2,"title":"纯稚的数据类","slug":"纯稚的数据类","link":"#纯稚的数据类","children":[{"level":3,"title":"问题原因","slug":"问题原因-2","link":"#问题原因-2","children":[]},{"level":3,"title":"解决方法","slug":"解决方法-2","link":"#解决方法-2","children":[]},{"level":3,"title":"收益","slug":"收益-2","link":"#收益-2","children":[]},{"level":3,"title":"重构方法说明","slug":"重构方法说明-2","link":"#重构方法说明-2","children":[]}]},{"level":2,"title":"过多的注释","slug":"过多的注释","link":"#过多的注释","children":[{"level":3,"title":"问题原因","slug":"问题原因-3","link":"#问题原因-3","children":[]},{"level":3,"title":"解决方法","slug":"解决方法-3","link":"#解决方法-3","children":[]},{"level":3,"title":"收益","slug":"收益-3","link":"#收益-3","children":[]},{"level":3,"title":"何时忽略","slug":"何时忽略-2","link":"#何时忽略-2","children":[]},{"level":3,"title":"重构方法说明","slug":"重构方法说明-3","link":"#重构方法说明-3","children":[]}]},{"level":2,"title":"重复代码","slug":"重复代码","link":"#重复代码","children":[{"level":3,"title":"问题原因","slug":"问题原因-4","link":"#问题原因-4","children":[]},{"level":3,"title":"解决方法","slug":"解决方法-4","link":"#解决方法-4","children":[]},{"level":3,"title":"收益","slug":"收益-4","link":"#收益-4","children":[]},{"level":3,"title":"重构方法说明","slug":"重构方法说明-4","link":"#重构方法说明-4","children":[]}]},{"level":2,"title":"扩展阅读","slug":"扩展阅读","link":"#扩展阅读","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1694447058000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":13.98,"words":4193},"filePathRelative":"03.设计/03.重构/05.代码坏味道之非必要的.md","localizedDate":"2018年10月13日","excerpt":"<blockquote>\\n<p>翻译自：<a href=\\"https://sourcemaking.com/refactoring/smells/dispensables\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://sourcemaking.com/refactoring/smells/dispensables</a></p>\\n<p><strong>非必要的(Dispensables)这组坏味道意味着：这样的代码可有可无，它的存在反而影响整体代码的整洁和可读性。</strong></p>\\n</blockquote>\\n<h2> 冗余类</h2>","autoDesc":true}');export{e as data};
