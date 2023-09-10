const e=JSON.parse('{"key":"v-a662acc8","path":"/pages/90aeb6/","title":"HDFS 运维","lang":"zh-CN","frontmatter":{"title":"HDFS 运维","date":"2020-02-24T21:14:47.000Z","category":["大数据","hadoop","hdfs"],"tag":["大数据","Hadoop","HDFS"],"permalink":"/pages/90aeb6/","description":"HDFS 运维 HDFS 命令 显示当前目录结构 # 显示当前目录结构 hdfs dfs -ls &lt;path&gt; # 递归显示当前目录结构 hdfs dfs -ls -R &lt;path&gt; # 显示根目录下内容 hdfs dfs -ls /","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/90aeb6/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"HDFS 运维"}],["meta",{"property":"og:description","content":"HDFS 运维 HDFS 命令 显示当前目录结构 # 显示当前目录结构 hdfs dfs -ls &lt;path&gt; # 递归显示当前目录结构 hdfs dfs -ls -R &lt;path&gt; # 显示根目录下内容 hdfs dfs -ls /"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T13:36:40.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"大数据"}],["meta",{"property":"article:tag","content":"Hadoop"}],["meta",{"property":"article:tag","content":"HDFS"}],["meta",{"property":"article:published_time","content":"2020-02-24T21:14:47.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T13:36:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HDFS 运维\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-02-24T21:14:47.000Z\\",\\"dateModified\\":\\"2023-09-10T13:36:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"HDFS 命令","slug":"hdfs-命令","link":"#hdfs-命令","children":[{"level":3,"title":"显示当前目录结构","slug":"显示当前目录结构","link":"#显示当前目录结构","children":[]},{"level":3,"title":"创建目录","slug":"创建目录","link":"#创建目录","children":[]},{"level":3,"title":"删除操作","slug":"删除操作","link":"#删除操作","children":[]},{"level":3,"title":"导入文件到 HDFS","slug":"导入文件到-hdfs","link":"#导入文件到-hdfs","children":[]},{"level":3,"title":"从 HDFS 导出文件","slug":"从-hdfs-导出文件","link":"#从-hdfs-导出文件","children":[]},{"level":3,"title":"查看文件内容","slug":"查看文件内容","link":"#查看文件内容","children":[]},{"level":3,"title":"显示文件的最后一千字节","slug":"显示文件的最后一千字节","link":"#显示文件的最后一千字节","children":[]},{"level":3,"title":"拷贝文件","slug":"拷贝文件","link":"#拷贝文件","children":[]},{"level":3,"title":"移动文件","slug":"移动文件","link":"#移动文件","children":[]},{"level":3,"title":"统计当前目录下各文件大小","slug":"统计当前目录下各文件大小","link":"#统计当前目录下各文件大小","children":[]},{"level":3,"title":"合并下载多个文件","slug":"合并下载多个文件","link":"#合并下载多个文件","children":[]},{"level":3,"title":"统计文件系统的可用空间信息","slug":"统计文件系统的可用空间信息","link":"#统计文件系统的可用空间信息","children":[]},{"level":3,"title":"更改文件复制因子","slug":"更改文件复制因子","link":"#更改文件复制因子","children":[]},{"level":3,"title":"权限控制","slug":"权限控制","link":"#权限控制","children":[]},{"level":3,"title":"文件检测","slug":"文件检测","link":"#文件检测","children":[]}]},{"level":2,"title":"HDFS 安全模式","slug":"hdfs-安全模式","link":"#hdfs-安全模式","children":[{"level":3,"title":"什么是安全模式？","slug":"什么是安全模式","link":"#什么是安全模式","children":[]},{"level":3,"title":"何时正常离开安全模式","slug":"何时正常离开安全模式","link":"#何时正常离开安全模式","children":[]},{"level":3,"title":"触发安全模式的原因","slug":"触发安全模式的原因","link":"#触发安全模式的原因","children":[]},{"level":3,"title":"故障排查","slug":"故障排查","link":"#故障排查","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694353000000,"updatedTime":1694353000000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":3.39,"words":1016},"filePathRelative":"16.大数据/01.hadoop/01.hdfs/02.HDFS运维.md","localizedDate":"2020年2月24日","excerpt":"<h1> HDFS 运维</h1>\\n<h2> HDFS 命令</h2>\\n<h3> 显示当前目录结构</h3>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># 显示当前目录结构</span>\\nhdfs dfs <span class=\\"token parameter variable\\">-ls</span> <span class=\\"token operator\\">&lt;</span>path<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token comment\\"># 递归显示当前目录结构</span>\\nhdfs dfs <span class=\\"token parameter variable\\">-ls</span> <span class=\\"token parameter variable\\">-R</span> <span class=\\"token operator\\">&lt;</span>path<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token comment\\"># 显示根目录下内容</span>\\nhdfs dfs <span class=\\"token parameter variable\\">-ls</span> /\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
