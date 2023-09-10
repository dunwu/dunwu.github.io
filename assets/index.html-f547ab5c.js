const e=JSON.parse('{"key":"v-f4d2ff30","path":"/pages/88c7d3/","title":"MongoDB 建模示例","lang":"zh-CN","frontmatter":{"title":"MongoDB 建模示例","date":"2020-09-12T10:43:53.000Z","category":["数据库","文档数据库","MongoDB"],"tag":["数据库","文档数据库","MongoDB","建模"],"permalink":"/pages/88c7d3/","description":"MongoDB 建模示例 关系型模型 嵌入式文档一对一关系模型 嵌入式文档一对一关系模型 - 嵌入式文档模式 // patron document { _id: \\"joe\\", name: \\"Joe Bookreader\\" } // address document { patron_id: \\"joe\\", // reference to patron document street: \\"123 Fake Street\\", city: \\"Faketon\\", state: \\"MA\\", zip: \\"12345\\" }","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/88c7d3/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"MongoDB 建模示例"}],["meta",{"property":"og:description","content":"MongoDB 建模示例 关系型模型 嵌入式文档一对一关系模型 嵌入式文档一对一关系模型 - 嵌入式文档模式 // patron document { _id: \\"joe\\", name: \\"Joe Bookreader\\" } // address document { patron_id: \\"joe\\", // reference to patron document street: \\"123 Fake Street\\", city: \\"Faketon\\", state: \\"MA\\", zip: \\"12345\\" }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T13:36:40.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"文档数据库"}],["meta",{"property":"article:tag","content":"MongoDB"}],["meta",{"property":"article:tag","content":"建模"}],["meta",{"property":"article:published_time","content":"2020-09-12T10:43:53.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T13:36:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MongoDB 建模示例\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-09-12T10:43:53.000Z\\",\\"dateModified\\":\\"2023-09-10T13:36:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"关系型模型","slug":"关系型模型","link":"#关系型模型","children":[{"level":3,"title":"嵌入式文档一对一关系模型","slug":"嵌入式文档一对一关系模型","link":"#嵌入式文档一对一关系模型","children":[]},{"level":3,"title":"嵌入式文档一对多关系模型","slug":"嵌入式文档一对多关系模型","link":"#嵌入式文档一对多关系模型","children":[]},{"level":3,"title":"引用式文档一对多关系模型","slug":"引用式文档一对多关系模型","link":"#引用式文档一对多关系模型","children":[]}]},{"level":2,"title":"树形结构模型","slug":"树形结构模型","link":"#树形结构模型","children":[{"level":3,"title":"具有父节点的树形结构模型","slug":"具有父节点的树形结构模型","link":"#具有父节点的树形结构模型","children":[]},{"level":3,"title":"具有子节点的树形结构模型","slug":"具有子节点的树形结构模型","link":"#具有子节点的树形结构模型","children":[]},{"level":3,"title":"具有祖先的树形结构模型","slug":"具有祖先的树形结构模型","link":"#具有祖先的树形结构模型","children":[]},{"level":3,"title":"具有实体化路径的树形结构模型","slug":"具有实体化路径的树形结构模型","link":"#具有实体化路径的树形结构模型","children":[]},{"level":3,"title":"具有嵌套集的树形结构模型","slug":"具有嵌套集的树形结构模型","link":"#具有嵌套集的树形结构模型","children":[]}]},{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":3,"title":"大文档，很多列，很多索引","slug":"大文档-很多列-很多索引","link":"#大文档-很多列-很多索引","children":[]},{"level":3,"title":"管理文档不同版本","slug":"管理文档不同版本","link":"#管理文档不同版本","children":[]},{"level":3,"title":"统计网页点击量","slug":"统计网页点击量","link":"#统计网页点击量","children":[]},{"level":3,"title":"精确统计","slug":"精确统计","link":"#精确统计","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694353000000,"updatedTime":1694353000000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":7.06,"words":2118},"filePathRelative":"12.数据库/04.文档数据库/01.MongoDB/06.MongoDB建模示例.md","localizedDate":"2020年9月12日","excerpt":"<h1> MongoDB 建模示例</h1>\\n<h2> 关系型模型</h2>\\n<h3> 嵌入式文档一对一关系模型</h3>\\n<h4> 嵌入式文档一对一关系模型 - 嵌入式文档模式</h4>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code><span class=\\"token comment\\">// patron document</span>\\n<span class=\\"token punctuation\\">{</span>\\n   _id<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"joe\\"</span><span class=\\"token punctuation\\">,</span>\\n   name<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"Joe Bookreader\\"</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// address document</span>\\n<span class=\\"token punctuation\\">{</span>\\n   patron_id<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"joe\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// reference to patron document</span>\\n   street<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"123 Fake Street\\"</span><span class=\\"token punctuation\\">,</span>\\n   city<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"Faketon\\"</span><span class=\\"token punctuation\\">,</span>\\n   state<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"MA\\"</span><span class=\\"token punctuation\\">,</span>\\n   zip<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"12345\\"</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
