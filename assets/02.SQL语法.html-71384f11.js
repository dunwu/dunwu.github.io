const e=JSON.parse('{"key":"v-013cce27","path":"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/03.%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93/01.%E7%BB%BC%E5%90%88/02.SQL%E8%AF%AD%E6%B3%95.html","title":"SQL 语法速成","lang":"zh-CN","frontmatter":{"title":"SQL 语法速成","cover":"https://raw.githubusercontent.com/dunwu/images/master/snap/202310011053288.png","date":"2018-06-15T16:07:17.000Z","order":2,"category":["数据库","关系型数据库","综合"],"tag":["数据库","关系型数据库","SQL"],"description":"SQL 语法速成 本文针对关系型数据库的基本语法。限于篇幅，本文侧重说明用法，不会展开讲解特性、原理。 本文语法主要针对 Mysql，但大部分的语法对其他关系型数据库也适用。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/12.%E6%95%B0%E6%8D%AE%E5%BA%93/03.%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93/01.%E7%BB%BC%E5%90%88/02.SQL%E8%AF%AD%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"SQL 语法速成"}],["meta",{"property":"og:description","content":"SQL 语法速成 本文针对关系型数据库的基本语法。限于篇幅，本文侧重说明用法，不会展开讲解特性、原理。 本文语法主要针对 Mysql，但大部分的语法对其他关系型数据库也适用。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/dunwu/images/master/snap/202310011053288.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-24T23:25:09.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"SQL 语法速成"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"关系型数据库"}],["meta",{"property":"article:tag","content":"SQL"}],["meta",{"property":"article:published_time","content":"2018-06-15T16:07:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-24T23:25:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SQL 语法速成\\",\\"image\\":[\\"https://raw.githubusercontent.com/dunwu/images/master/snap/202310011053288.png\\"],\\"datePublished\\":\\"2018-06-15T16:07:17.000Z\\",\\"dateModified\\":\\"2023-10-24T23:25:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"SQL 简介","slug":"sql-简介","link":"#sql-简介","children":[{"level":3,"title":"数据库术语","slug":"数据库术语","link":"#数据库术语","children":[]},{"level":3,"title":"SQL 语法","slug":"sql-语法","link":"#sql-语法","children":[]}]},{"level":2,"title":"数据定义（CREATE、ALTER、DROP）","slug":"数据定义-create、alter、drop","link":"#数据定义-create、alter、drop","children":[{"level":3,"title":"数据库（DATABASE）","slug":"数据库-database","link":"#数据库-database","children":[]},{"level":3,"title":"数据表（TABLE）","slug":"数据表-table","link":"#数据表-table","children":[]},{"level":3,"title":"视图（VIEW）","slug":"视图-view","link":"#视图-view","children":[]},{"level":3,"title":"索引（INDEX）","slug":"索引-index","link":"#索引-index","children":[]},{"level":3,"title":"约束","slug":"约束","link":"#约束","children":[]}]},{"level":2,"title":"增删改查（CRUD）","slug":"增删改查-crud","link":"#增删改查-crud","children":[{"level":3,"title":"插入数据","slug":"插入数据","link":"#插入数据","children":[]},{"level":3,"title":"更新数据","slug":"更新数据","link":"#更新数据","children":[]},{"level":3,"title":"删除数据","slug":"删除数据","link":"#删除数据","children":[]},{"level":3,"title":"查询数据","slug":"查询数据","link":"#查询数据","children":[]}]},{"level":2,"title":"过滤数据（WHERE）","slug":"过滤数据-where","link":"#过滤数据-where","children":[{"level":3,"title":"WHERE 子句","slug":"where-子句","link":"#where-子句","children":[]},{"level":3,"title":"比较操作符","slug":"比较操作符","link":"#比较操作符","children":[]},{"level":3,"title":"范围操作符","slug":"范围操作符","link":"#范围操作符","children":[]},{"level":3,"title":"逻辑操作符","slug":"逻辑操作符","link":"#逻辑操作符","children":[]},{"level":3,"title":"通配符","slug":"通配符","link":"#通配符","children":[]}]},{"level":2,"title":"排序和分组","slug":"排序和分组","link":"#排序和分组","children":[{"level":3,"title":"ORDER BY","slug":"order-by","link":"#order-by","children":[]},{"level":3,"title":"GROUP BY","slug":"group-by","link":"#group-by","children":[]},{"level":3,"title":"HAVING","slug":"having","link":"#having","children":[]}]},{"level":2,"title":"连接和组合","slug":"连接和组合","link":"#连接和组合","children":[{"level":3,"title":"连接（JOIN）","slug":"连接-join","link":"#连接-join","children":[]},{"level":3,"title":"组合（UNION）","slug":"组合-union","link":"#组合-union","children":[]},{"level":3,"title":"JOIN vs UNION","slug":"join-vs-union","link":"#join-vs-union","children":[]}]},{"level":2,"title":"函数","slug":"函数","link":"#函数","children":[{"level":3,"title":"字符串函数","slug":"字符串函数","link":"#字符串函数","children":[]},{"level":3,"title":"时间函数","slug":"时间函数","link":"#时间函数","children":[]},{"level":3,"title":"数学函数","slug":"数学函数","link":"#数学函数","children":[]},{"level":3,"title":"聚合函数","slug":"聚合函数","link":"#聚合函数","children":[]},{"level":3,"title":"转换函数","slug":"转换函数","link":"#转换函数","children":[]}]},{"level":2,"title":"事务","slug":"事务","link":"#事务","children":[{"level":3,"title":"ACID","slug":"acid","link":"#acid","children":[]},{"level":3,"title":"事务隔离级别","slug":"事务隔离级别","link":"#事务隔离级别","children":[]}]},{"level":2,"title":"权限控制","slug":"权限控制","link":"#权限控制","children":[{"level":3,"title":"创建账户","slug":"创建账户","link":"#创建账户","children":[]},{"level":3,"title":"修改账户名","slug":"修改账户名","link":"#修改账户名","children":[]},{"level":3,"title":"删除账户","slug":"删除账户","link":"#删除账户","children":[]},{"level":3,"title":"查看权限","slug":"查看权限","link":"#查看权限","children":[]},{"level":3,"title":"授予权限","slug":"授予权限","link":"#授予权限","children":[]},{"level":3,"title":"删除权限","slug":"删除权限","link":"#删除权限","children":[]},{"level":3,"title":"更改密码","slug":"更改密码","link":"#更改密码","children":[]}]},{"level":2,"title":"存储过程","slug":"存储过程","link":"#存储过程","children":[{"level":3,"title":"使用存储过程","slug":"使用存储过程","link":"#使用存储过程","children":[]},{"level":3,"title":"存储过程的利弊","slug":"存储过程的利弊","link":"#存储过程的利弊","children":[]},{"level":3,"title":"触发器","slug":"触发器","link":"#触发器","children":[]}]},{"level":2,"title":"游标","slug":"游标","link":"#游标","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1698189909000,"updatedTime":1698189909000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":23.94,"words":7182},"filePathRelative":"12.数据库/03.关系型数据库/01.综合/02.SQL语法.md","localizedDate":"2018年6月15日","excerpt":"<h1> SQL 语法速成</h1>\\n<blockquote>\\n<p>本文针对关系型数据库的基本语法。限于篇幅，本文侧重说明用法，不会展开讲解特性、原理。</p>\\n<p>本文语法主要针对 Mysql，但大部分的语法对其他关系型数据库也适用。</p>\\n</blockquote>\\n<figure><img src=\\"https://raw.githubusercontent.com/dunwu/images/master/snap/202310011053288.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{e as data};
