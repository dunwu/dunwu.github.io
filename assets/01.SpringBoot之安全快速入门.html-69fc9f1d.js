const t=JSON.parse('{"key":"v-2006f532","path":"/01.Java/13.%E6%A1%86%E6%9E%B6/01.Spring/10.Spring%E5%AE%89%E5%85%A8/01.SpringBoot%E4%B9%8B%E5%AE%89%E5%85%A8%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8.html","title":"SpringBoot 之安全快速入门","lang":"zh-CN","frontmatter":{"title":"SpringBoot 之安全快速入门","date":"2021-05-13T18:21:56.000Z","order":1,"category":["Java","框架","Spring","Spring安全"],"tag":["Java","框架","Spring","SpringBoot","安全"],"description":"SpringBoot 之安全快速入门 QuickStart （1）添加依赖 \\t\\t&lt;dependency&gt; \\t\\t\\t&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt; \\t\\t\\t&lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt; \\t\\t&lt;/dependency&gt; \\t\\t&lt;dependency&gt; \\t\\t\\t&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt; \\t\\t\\t&lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt; \\t\\t&lt;/dependency&gt;","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/01.Java/13.%E6%A1%86%E6%9E%B6/01.Spring/10.Spring%E5%AE%89%E5%85%A8/01.SpringBoot%E4%B9%8B%E5%AE%89%E5%85%A8%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"SpringBoot 之安全快速入门"}],["meta",{"property":"og:description","content":"SpringBoot 之安全快速入门 QuickStart （1）添加依赖 \\t\\t&lt;dependency&gt; \\t\\t\\t&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt; \\t\\t\\t&lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt; \\t\\t&lt;/dependency&gt; \\t\\t&lt;dependency&gt; \\t\\t\\t&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt; \\t\\t\\t&lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt; \\t\\t&lt;/dependency&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T14:54:54.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"框架"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:tag","content":"SpringBoot"}],["meta",{"property":"article:tag","content":"安全"}],["meta",{"property":"article:published_time","content":"2021-05-13T18:21:56.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-21T14:54:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot 之安全快速入门\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-05-13T18:21:56.000Z\\",\\"dateModified\\":\\"2023-09-21T14:54:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"QuickStart","slug":"quickstart","link":"#quickstart","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1695308094000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":0.45,"words":136},"filePathRelative":"01.Java/13.框架/01.Spring/10.Spring安全/01.SpringBoot之安全快速入门.md","localizedDate":"2021年5月13日","excerpt":"<h1> SpringBoot 之安全快速入门</h1>\\n<h2> QuickStart</h2>\\n<p>（1）添加依赖</p>\\n<div class=\\"language-xml line-numbers-mode\\" data-ext=\\"xml\\"><pre class=\\"language-xml\\"><code>\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>org.springframework.boot<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>spring-boot-starter-web<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>org.springframework.boot<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>spring-boot-starter-security<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
