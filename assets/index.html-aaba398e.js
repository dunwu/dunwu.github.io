const e=JSON.parse('{"key":"v-985a03f2","path":"/pages/94f791/","title":"hive-ops","lang":"zh-CN","frontmatter":{"title":"hive-ops","date":"2020-02-24T21:14:47.000Z","category":["大数据","hive"],"tag":["大数据","Hive","运维"],"permalink":"/pages/94f791/","description":"Hive 运维 Hive 安装 下载并解压 下载所需版本的 Hive，这里我下载版本为 cdh5.15.2。下载地址：http://archive.cloudera.com/cdh5/cdh/5/ # 下载后进行解压 tar -zxvf hive-1.1.0-cdh5.15.2.tar.gz","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/94f791/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"hive-ops"}],["meta",{"property":"og:description","content":"Hive 运维 Hive 安装 下载并解压 下载所需版本的 Hive，这里我下载版本为 cdh5.15.2。下载地址：http://archive.cloudera.com/cdh5/cdh/5/ # 下载后进行解压 tar -zxvf hive-1.1.0-cdh5.15.2.tar.gz"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T15:41:08.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"大数据"}],["meta",{"property":"article:tag","content":"Hive"}],["meta",{"property":"article:tag","content":"运维"}],["meta",{"property":"article:published_time","content":"2020-02-24T21:14:47.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-08T15:41:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"hive-ops\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-02-24T21:14:47.000Z\\",\\"dateModified\\":\\"2023-09-08T15:41:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Hive 安装","slug":"hive-安装","link":"#hive-安装","children":[{"level":3,"title":"下载并解压","slug":"下载并解压","link":"#下载并解压","children":[]},{"level":3,"title":"配置环境变量","slug":"配置环境变量","link":"#配置环境变量","children":[]},{"level":3,"title":"修改配置","slug":"修改配置","link":"#修改配置","children":[]},{"level":3,"title":"拷贝数据库驱动","slug":"拷贝数据库驱动","link":"#拷贝数据库驱动","children":[]},{"level":3,"title":"初始化元数据库","slug":"初始化元数据库","link":"#初始化元数据库","children":[]},{"level":3,"title":"启动","slug":"启动","link":"#启动","children":[]}]},{"level":2,"title":"HiveServer2/beeline","slug":"hiveserver2-beeline","link":"#hiveserver2-beeline","children":[{"level":3,"title":"修改 Hadoop 配置","slug":"修改-hadoop-配置","link":"#修改-hadoop-配置","children":[]},{"level":3,"title":"启动 hiveserver2","slug":"启动-hiveserver2","link":"#启动-hiveserver2","children":[]},{"level":3,"title":"使用 beeline","slug":"使用-beeline","link":"#使用-beeline","children":[]},{"level":3,"title":"Beeline 选项","slug":"beeline-选项","link":"#beeline-选项","children":[]},{"level":3,"title":"常用参数","slug":"常用参数","link":"#常用参数","children":[]}]},{"level":2,"title":"Hive 命令","slug":"hive-命令","link":"#hive-命令","children":[{"level":3,"title":"Help","slug":"help","link":"#help","children":[]},{"level":3,"title":"交互式命令行","slug":"交互式命令行","link":"#交互式命令行","children":[]},{"level":3,"title":"执行 SQL 命令","slug":"执行-sql-命令","link":"#执行-sql-命令","children":[]},{"level":3,"title":"执行 SQL 脚本","slug":"执行-sql-脚本","link":"#执行-sql-脚本","children":[]},{"level":3,"title":"配置 Hive 变量","slug":"配置-hive-变量","link":"#配置-hive-变量","children":[]},{"level":3,"title":"配置文件启动","slug":"配置文件启动","link":"#配置文件启动","children":[]},{"level":3,"title":"用户自定义变量","slug":"用户自定义变量","link":"#用户自定义变量","children":[]}]},{"level":2,"title":"Hive 配置","slug":"hive-配置","link":"#hive-配置","children":[{"level":3,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]},{"level":3,"title":"hiveconf","slug":"hiveconf","link":"#hiveconf","children":[]},{"level":3,"title":"set","slug":"set","link":"#set","children":[]},{"level":3,"title":"配置优先级","slug":"配置优先级","link":"#配置优先级","children":[]},{"level":3,"title":"配置参数","slug":"配置参数","link":"#配置参数","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694186720000,"updatedTime":1694187668000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":8.23,"words":2468},"filePathRelative":"16.大数据/02.hive/07.Hive运维.md","localizedDate":"2020年2月24日","excerpt":"<h1> Hive 运维</h1>\\n<h2> Hive 安装</h2>\\n<h3> 下载并解压</h3>\\n<p>下载所需版本的 Hive，这里我下载版本为 <code>cdh5.15.2</code>。下载地址：<a href=\\"http://archive.cloudera.com/cdh5/cdh/5/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">http://archive.cloudera.com/cdh5/cdh/5/</a></p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code># 下载后进行解压\\n tar -zxvf hive-1.1.0-cdh5.15.2.tar.gz\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
