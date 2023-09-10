const e=JSON.parse('{"key":"v-9880d4de","path":"/pages/49d5ae/","title":"代码坏味道之代码臃肿","lang":"zh-CN","frontmatter":{"title":"代码坏味道之代码臃肿","date":"2018-10-13T22:48:00.000Z","category":["设计","重构"],"tag":["设计","重构","代码的坏味道"],"permalink":"/pages/49d5ae/","description":"翻译自：https://sourcemaking.com/refactoring/smells/bloaters 代码臃肿(Bloated)这组坏味道意味着：代码中的类、函数、字段没有经过合理的组织，只是简单的堆砌起来。这一类型的问题通常在代码的初期并不明显，但是随着代码规模的增长而逐渐积累（特别是当没有人努力去根除它们时）。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/49d5ae/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"代码坏味道之代码臃肿"}],["meta",{"property":"og:description","content":"翻译自：https://sourcemaking.com/refactoring/smells/bloaters 代码臃肿(Bloated)这组坏味道意味着：代码中的类、函数、字段没有经过合理的组织，只是简单的堆砌起来。这一类型的问题通常在代码的初期并不明显，但是随着代码规模的增长而逐渐积累（特别是当没有人努力去根除它们时）。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T15:41:08.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"设计"}],["meta",{"property":"article:tag","content":"重构"}],["meta",{"property":"article:tag","content":"代码的坏味道"}],["meta",{"property":"article:published_time","content":"2018-10-13T22:48:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-08T15:41:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代码坏味道之代码臃肿\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-10-13T22:48:00.000Z\\",\\"dateModified\\":\\"2023-09-08T15:41:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"基本类型偏执","slug":"基本类型偏执","link":"#基本类型偏执","children":[{"level":3,"title":"问题原因","slug":"问题原因","link":"#问题原因","children":[]},{"level":3,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]},{"level":3,"title":"收益","slug":"收益","link":"#收益","children":[]},{"level":3,"title":"重构方法说明","slug":"重构方法说明","link":"#重构方法说明","children":[]}]},{"level":2,"title":"数据泥团","slug":"数据泥团","link":"#数据泥团","children":[{"level":3,"title":"问题原因","slug":"问题原因-1","link":"#问题原因-1","children":[]},{"level":3,"title":"解决方法","slug":"解决方法-1","link":"#解决方法-1","children":[]},{"level":3,"title":"收益","slug":"收益-1","link":"#收益-1","children":[]},{"level":3,"title":"何时忽略","slug":"何时忽略","link":"#何时忽略","children":[]},{"level":3,"title":"重构方法说明","slug":"重构方法说明-1","link":"#重构方法说明-1","children":[]}]},{"level":2,"title":"过大的类","slug":"过大的类","link":"#过大的类","children":[{"level":3,"title":"问题原因","slug":"问题原因-2","link":"#问题原因-2","children":[]},{"level":3,"title":"解决方法","slug":"解决方法-2","link":"#解决方法-2","children":[]},{"level":3,"title":"收益","slug":"收益-2","link":"#收益-2","children":[]},{"level":3,"title":"重构方法说明","slug":"重构方法说明-2","link":"#重构方法说明-2","children":[]}]},{"level":2,"title":"过长函数","slug":"过长函数","link":"#过长函数","children":[{"level":3,"title":"问题的原因","slug":"问题的原因","link":"#问题的原因","children":[]},{"level":3,"title":"解决函数","slug":"解决函数","link":"#解决函数","children":[]},{"level":3,"title":"收益","slug":"收益-3","link":"#收益-3","children":[]},{"level":3,"title":"性能","slug":"性能","link":"#性能","children":[]},{"level":3,"title":"重构方法说明","slug":"重构方法说明-3","link":"#重构方法说明-3","children":[]}]},{"level":2,"title":"过长参数列","slug":"过长参数列","link":"#过长参数列","children":[{"level":3,"title":"问题原因","slug":"问题原因-3","link":"#问题原因-3","children":[]},{"level":3,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]},{"level":3,"title":"收益","slug":"收益-4","link":"#收益-4","children":[]},{"level":3,"title":"何时忽略","slug":"何时忽略-1","link":"#何时忽略-1","children":[]},{"level":3,"title":"重构方法说明","slug":"重构方法说明-4","link":"#重构方法说明-4","children":[]}]},{"level":2,"title":"扩展阅读","slug":"扩展阅读","link":"#扩展阅读","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694186720000,"updatedTime":1694187668000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":15.96,"words":4788},"filePathRelative":"03.设计/03.重构/02.代码坏味道之代码臃肿.md","localizedDate":"2018年10月13日","excerpt":"<blockquote>\\n<p>翻译自：<a href=\\"https://sourcemaking.com/refactoring/smells/bloaters\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://sourcemaking.com/refactoring/smells/bloaters</a></p>\\n<p><strong>代码臃肿(Bloated)这组坏味道意味着：代码中的类、函数、字段没有经过合理的组织，只是简单的堆砌起来。这一类型的问题通常在代码的初期并不明显，但是随着代码规模的增长而逐渐积累（特别是当没有人努力去根除它们时）。</strong></p>\\n</blockquote>","autoDesc":true}');export{e as data};
