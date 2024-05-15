const e=JSON.parse(`{"key":"v-42364f3b","path":"/pages/263c40/","title":"HBase 命令","lang":"zh-CN","frontmatter":{"title":"HBase 命令","date":"2020-06-02T22:28:18.000Z","order":22,"permalink":"/pages/263c40/","category":["数据库","列式数据库","HBase"],"tag":["大数据","HBase"],"description":"HBase 命令 进入 HBase Shell 控制台：./bin/hbase shell 如果有 kerberos 认证，需要事先使用相应的 keytab 进行一下认证（使用 kinit 命令），认证成功之后再使用 hbase shell 进入可以使用 whoami 命令可查看当前用户. 基本命令 获取帮助信息：help 获取命令的详细帮助信息：help 'status' 查看服务器状态：status 查看版本信息：version 查看当前登录用户：whoami","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/263c40/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"HBase 命令"}],["meta",{"property":"og:description","content":"HBase 命令 进入 HBase Shell 控制台：./bin/hbase shell 如果有 kerberos 认证，需要事先使用相应的 keytab 进行一下认证（使用 kinit 命令），认证成功之后再使用 hbase shell 进入可以使用 whoami 命令可查看当前用户. 基本命令 获取帮助信息：help 获取命令的详细帮助信息：help 'status' 查看服务器状态：status 查看版本信息：version 查看当前登录用户：whoami"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T22:46:25.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"大数据"}],["meta",{"property":"article:tag","content":"HBase"}],["meta",{"property":"article:published_time","content":"2020-06-02T22:28:18.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T22:46:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HBase 命令\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-02T22:28:18.000Z\\",\\"dateModified\\":\\"2024-05-15T22:46:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"基本命令","slug":"基本命令","link":"#基本命令","children":[]},{"level":2,"title":"DDL","slug":"ddl","link":"#ddl","children":[{"level":3,"title":"创建表","slug":"创建表","link":"#创建表","children":[]},{"level":3,"title":"启用、禁用表","slug":"启用、禁用表","link":"#启用、禁用表","children":[]},{"level":3,"title":"删除表","slug":"删除表","link":"#删除表","children":[]},{"level":3,"title":"修改表","slug":"修改表","link":"#修改表","children":[]},{"level":3,"title":"查看表","slug":"查看表","link":"#查看表","children":[]}]},{"level":2,"title":"增删改","slug":"增删改","link":"#增删改","children":[{"level":3,"title":"插入数据","slug":"插入数据","link":"#插入数据","children":[]},{"level":3,"title":"获取指定行、列族、列","slug":"获取指定行、列族、列","link":"#获取指定行、列族、列","children":[]},{"level":3,"title":"删除指定行、列","slug":"删除指定行、列","link":"#删除指定行、列","children":[]}]},{"level":2,"title":"查询","slug":"查询","link":"#查询","children":[{"level":3,"title":"get 查询","slug":"get-查询","link":"#get-查询","children":[]},{"level":3,"title":"scan 查询","slug":"scan-查询","link":"#scan-查询","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1715813185000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":3.55,"words":1065},"filePathRelative":"12.数据库/06.列式数据库/01.HBase/22.HBase命令.md","localizedDate":"2020年6月2日","excerpt":"<h1> HBase 命令</h1>\\n<blockquote>\\n<p>进入 HBase Shell 控制台：<code>./bin/hbase shell</code></p>\\n<p>如果有 kerberos 认证，需要事先使用相应的 keytab 进行一下认证（使用 kinit 命令），认证成功之后再使用 hbase shell 进入可以使用 whoami 命令可查看当前用户.</p>\\n</blockquote>\\n<h2> 基本命令</h2>\\n<ul>\\n<li>获取帮助信息：<code>help</code></li>\\n<li>获取命令的详细帮助信息：<code>help 'status'</code></li>\\n<li>查看服务器状态：<code>status</code></li>\\n<li>查看版本信息：<code>version</code></li>\\n<li>查看当前登录用户：<code>whoami</code></li>\\n</ul>","autoDesc":true}`);export{e as data};