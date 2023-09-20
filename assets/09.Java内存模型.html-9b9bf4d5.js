const e=JSON.parse('{"key":"v-51797d71","path":"/01.Java/01.JavaSE/05.%E5%B9%B6%E5%8F%91/09.Java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B.html","title":"Java内存模型","lang":"zh-CN","frontmatter":{"title":"Java内存模型","date":"2020-12-25T18:43:11.000Z","order":"09","category":["Java","JavaSE","并发"],"tag":["Java","JavaSE","并发"],"description":"Java 内存模型 关键词：JMM、volatile、synchronized、final、Happens-Before、内存屏障 摘要：Java 内存模型（Java Memory Model），简称 JMM。Java 内存模型的目标是为了解决由可见性和有序性导致的并发安全问题。Java 内存模型通过 屏蔽各种硬件和操作系统的内存访问差异，以实现让 Java 程序在各种平台下都能达到一致的内存访问效果。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/01.Java/01.JavaSE/05.%E5%B9%B6%E5%8F%91/09.Java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Java内存模型"}],["meta",{"property":"og:description","content":"Java 内存模型 关键词：JMM、volatile、synchronized、final、Happens-Before、内存屏障 摘要：Java 内存模型（Java Memory Model），简称 JMM。Java 内存模型的目标是为了解决由可见性和有序性导致的并发安全问题。Java 内存模型通过 屏蔽各种硬件和操作系统的内存访问差异，以实现让 Java 程序在各种平台下都能达到一致的内存访问效果。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-20T00:01:45.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JavaSE"}],["meta",{"property":"article:tag","content":"并发"}],["meta",{"property":"article:published_time","content":"2020-12-25T18:43:11.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-20T00:01:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java内存模型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-25T18:43:11.000Z\\",\\"dateModified\\":\\"2023-09-20T00:01:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"物理内存模型","slug":"物理内存模型","link":"#物理内存模型","children":[{"level":3,"title":"硬件处理效率","slug":"硬件处理效率","link":"#硬件处理效率","children":[]},{"level":3,"title":"缓存一致性","slug":"缓存一致性","link":"#缓存一致性","children":[]},{"level":3,"title":"代码乱序执行优化","slug":"代码乱序执行优化","link":"#代码乱序执行优化","children":[]}]},{"level":2,"title":"Java 内存模型","slug":"java-内存模型-1","link":"#java-内存模型-1","children":[{"level":3,"title":"主内存和工作内存","slug":"主内存和工作内存","link":"#主内存和工作内存","children":[]},{"level":3,"title":"JMM 内存操作的问题","slug":"jmm-内存操作的问题","link":"#jmm-内存操作的问题","children":[]},{"level":3,"title":"内存间交互操作","slug":"内存间交互操作","link":"#内存间交互操作","children":[]},{"level":3,"title":"并发安全特性","slug":"并发安全特性","link":"#并发安全特性","children":[]}]},{"level":2,"title":"Happens-Before","slug":"happens-before","link":"#happens-before","children":[]},{"level":2,"title":"内存屏障","slug":"内存屏障","link":"#内存屏障","children":[]},{"level":2,"title":"volatile","slug":"volatile","link":"#volatile","children":[]},{"level":2,"title":"synchronized","slug":"synchronized","link":"#synchronized","children":[{"level":3,"title":"long 和 double 变量的特殊规则","slug":"long-和-double-变量的特殊规则","link":"#long-和-double-变量的特殊规则","children":[]},{"level":3,"title":"final 型量的特殊规则","slug":"final-型量的特殊规则","link":"#final-型量的特殊规则","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1695168105000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":21.42,"words":6426},"filePathRelative":"01.Java/01.JavaSE/05.并发/09.Java内存模型.md","localizedDate":"2020年12月25日","excerpt":"<h1> Java 内存模型</h1>\\n<blockquote>\\n<p><strong>关键词</strong>：<code>JMM</code>、<code>volatile</code>、<code>synchronized</code>、<code>final</code>、<code>Happens-Before</code>、<code>内存屏障</code></p>\\n<p><strong>摘要</strong>：Java 内存模型（Java Memory Model），简称 <strong>JMM</strong>。Java 内存模型的目标是为了解决由可见性和有序性导致的并发安全问题。Java 内存模型通过 <strong>屏蔽各种硬件和操作系统的内存访问差异，以实现让 Java 程序在各种平台下都能达到一致的内存访问效果</strong>。</p>\\n</blockquote>","autoDesc":true}');export{e as data};
