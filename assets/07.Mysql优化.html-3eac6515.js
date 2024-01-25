const e=JSON.parse(`{"key":"v-3a6ddc19","path":"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/03.%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93/02.Mysql/07.Mysql%E4%BC%98%E5%8C%96.html","title":"Mysql 优化","lang":"zh-CN","frontmatter":{"icon":"logos:mysql","title":"Mysql 优化","date":"2020-06-03T20:16:48.000Z","order":7,"category":["数据库","关系型数据库","Mysql"],"tag":["数据库","关系型数据库","Mysql","优化"],"description":"Mysql 优化 慢查询 慢查询日志可以帮我们找到执行慢的 SQL。 可以通过以下命令查看慢查询日志是否开启： mysql&gt; show variables like '%slow_query_log'; +----------------+-------+ | Variable_name | Value | +----------------+-------+ | slow_query_log | ON | +----------------+-------+ 1 row in set (0.02 sec)","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/12.%E6%95%B0%E6%8D%AE%E5%BA%93/03.%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93/02.Mysql/07.Mysql%E4%BC%98%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Mysql 优化"}],["meta",{"property":"og:description","content":"Mysql 优化 慢查询 慢查询日志可以帮我们找到执行慢的 SQL。 可以通过以下命令查看慢查询日志是否开启： mysql&gt; show variables like '%slow_query_log'; +----------------+-------+ | Variable_name | Value | +----------------+-------+ | slow_query_log | ON | +----------------+-------+ 1 row in set (0.02 sec)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-12T14:31:48.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"关系型数据库"}],["meta",{"property":"article:tag","content":"Mysql"}],["meta",{"property":"article:tag","content":"优化"}],["meta",{"property":"article:published_time","content":"2020-06-03T20:16:48.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-12T14:31:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mysql 优化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-03T20:16:48.000Z\\",\\"dateModified\\":\\"2023-12-12T14:31:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"慢查询","slug":"慢查询","link":"#慢查询","children":[]},{"level":2,"title":"执行计划（EXPLAIN）","slug":"执行计划-explain","link":"#执行计划-explain","children":[]},{"level":2,"title":"optimizer trace","slug":"optimizer-trace","link":"#optimizer-trace","children":[]},{"level":2,"title":"SQL 优化","slug":"sql-优化","link":"#sql-优化","children":[{"level":3,"title":"SQL 优化基本思路","slug":"sql-优化基本思路","link":"#sql-优化基本思路","children":[]},{"level":3,"title":"优化分页","slug":"优化分页","link":"#优化分页","children":[]},{"level":3,"title":"优化 JOIN","slug":"优化-join","link":"#优化-join","children":[]},{"level":3,"title":"优化 UNION","slug":"优化-union","link":"#优化-union","children":[]},{"level":3,"title":"优化 COUNT() 查询","slug":"优化-count-查询","link":"#优化-count-查询","children":[]},{"level":3,"title":"优化查询方式","slug":"优化查询方式","link":"#优化查询方式","children":[]},{"level":3,"title":"索引优化","slug":"索引优化","link":"#索引优化","children":[]}]},{"level":2,"title":"数据结构优化","slug":"数据结构优化","link":"#数据结构优化","children":[{"level":3,"title":"数据类型优化","slug":"数据类型优化","link":"#数据类型优化","children":[]},{"level":3,"title":"表设计","slug":"表设计","link":"#表设计","children":[]},{"level":3,"title":"范式和反范式","slug":"范式和反范式","link":"#范式和反范式","children":[]},{"level":3,"title":"索引优化","slug":"索引优化-1","link":"#索引优化-1","children":[]}]},{"level":2,"title":"数据模型和业务","slug":"数据模型和业务","link":"#数据模型和业务","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1695567828000,"updatedTime":1702391508000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":4}]},"readingTime":{"minutes":16.1,"words":4829},"filePathRelative":"12.数据库/03.关系型数据库/02.Mysql/07.Mysql优化.md","localizedDate":"2020年6月3日","excerpt":"<h1> Mysql 优化</h1>\\n<h2> 慢查询</h2>\\n<p>慢查询日志可以帮我们找到执行慢的 SQL。</p>\\n<p>可以通过以下命令查看慢查询日志是否开启：</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code>mysql<span class=\\"token operator\\">&gt;</span> <span class=\\"token keyword\\">show</span> variables <span class=\\"token operator\\">like</span> <span class=\\"token string\\">'%slow_query_log'</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token operator\\">+</span><span class=\\"token comment\\">----------------+-------+</span>\\n<span class=\\"token operator\\">|</span> Variable_name  <span class=\\"token operator\\">|</span> <span class=\\"token keyword\\">Value</span> <span class=\\"token operator\\">|</span>\\n<span class=\\"token operator\\">+</span><span class=\\"token comment\\">----------------+-------+</span>\\n<span class=\\"token operator\\">|</span> slow_query_log <span class=\\"token operator\\">|</span> <span class=\\"token keyword\\">ON</span>    <span class=\\"token operator\\">|</span>\\n<span class=\\"token operator\\">+</span><span class=\\"token comment\\">----------------+-------+</span>\\n<span class=\\"token number\\">1</span> <span class=\\"token keyword\\">row</span> <span class=\\"token operator\\">in</span> <span class=\\"token keyword\\">set</span> <span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0.02</span> sec<span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
