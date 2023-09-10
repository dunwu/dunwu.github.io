const e=JSON.parse('{"key":"v-72f85386","path":"/pages/3cd48f/","title":"HDFS 入门","lang":"zh-CN","frontmatter":{"title":"HDFS 入门","date":"2020-02-24T21:14:47.000Z","category":["大数据","hadoop","hdfs"],"tag":["大数据","Hadoop","HDFS"],"permalink":"/pages/3cd48f/","description":"HDFS 入门 HDFS 是 Hadoop 分布式文件系统。 关键词：分布式、文件系统 HDFS 简介 HDFS 是 Hadoop Distributed File System 的缩写，即 Hadoop 的分布式文件系统。 HDFS 是一种用于存储具有流数据访问模式的超大文件的文件系统，它运行在廉价的机器集群上。 HDFS 的设计目标是管理数以千计的服务器、数以万计的磁盘，将这么大规模的服务器计算资源当作一个单一的存储系统进行管理，对应用程序提供数以 PB 计的存储容量，让应用程序像使用普通文件系统一样存储大规模的文件数据。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/3cd48f/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"HDFS 入门"}],["meta",{"property":"og:description","content":"HDFS 入门 HDFS 是 Hadoop 分布式文件系统。 关键词：分布式、文件系统 HDFS 简介 HDFS 是 Hadoop Distributed File System 的缩写，即 Hadoop 的分布式文件系统。 HDFS 是一种用于存储具有流数据访问模式的超大文件的文件系统，它运行在廉价的机器集群上。 HDFS 的设计目标是管理数以千计的服务器、数以万计的磁盘，将这么大规模的服务器计算资源当作一个单一的存储系统进行管理，对应用程序提供数以 PB 计的存储容量，让应用程序像使用普通文件系统一样存储大规模的文件数据。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T13:36:40.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"大数据"}],["meta",{"property":"article:tag","content":"Hadoop"}],["meta",{"property":"article:tag","content":"HDFS"}],["meta",{"property":"article:published_time","content":"2020-02-24T21:14:47.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T13:36:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HDFS 入门\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-02-24T21:14:47.000Z\\",\\"dateModified\\":\\"2023-09-10T13:36:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"HDFS 简介","slug":"hdfs-简介","link":"#hdfs-简介","children":[{"level":3,"title":"HDFS 的优点","slug":"hdfs-的优点","link":"#hdfs-的优点","children":[]},{"level":3,"title":"HDFS 的缺点","slug":"hdfs-的缺点","link":"#hdfs-的缺点","children":[]}]},{"level":2,"title":"HDFS 架构","slug":"hdfs-架构","link":"#hdfs-架构","children":[{"level":3,"title":"NameNode","slug":"namenode","link":"#namenode","children":[]},{"level":3,"title":"DataNode","slug":"datanode","link":"#datanode","children":[]},{"level":3,"title":"命名空间","slug":"命名空间","link":"#命名空间","children":[]},{"level":3,"title":"Block 数据块","slug":"block-数据块","link":"#block-数据块","children":[]},{"level":3,"title":"Client","slug":"client","link":"#client","children":[]}]},{"level":2,"title":"HDFS 数据流","slug":"hdfs-数据流","link":"#hdfs-数据流","children":[{"level":3,"title":"HDFS 读文件","slug":"hdfs-读文件","link":"#hdfs-读文件","children":[]},{"level":3,"title":"HDFS 写文件","slug":"hdfs-写文件","link":"#hdfs-写文件","children":[]}]},{"level":2,"title":"HDFS 数据复制","slug":"hdfs-数据复制","link":"#hdfs-数据复制","children":[]},{"level":2,"title":"HDFS 高可用","slug":"hdfs-高可用","link":"#hdfs-高可用","children":[{"level":3,"title":"NameNode 的 HA 机制","slug":"namenode-的-ha-机制","link":"#namenode-的-ha-机制","children":[]},{"level":3,"title":"元数据文件","slug":"元数据文件","link":"#元数据文件","children":[]},{"level":3,"title":"利用 QJM 实现元数据高可用","slug":"利用-qjm-实现元数据高可用","link":"#利用-qjm-实现元数据高可用","children":[]}]},{"level":2,"title":"附：图解 HDFS 存储原理","slug":"附-图解-hdfs-存储原理","link":"#附-图解-hdfs-存储原理","children":[{"level":3,"title":"HDFS 写数据原理","slug":"hdfs-写数据原理","link":"#hdfs-写数据原理","children":[]},{"level":3,"title":"HDFS 读数据原理","slug":"hdfs-读数据原理","link":"#hdfs-读数据原理","children":[]},{"level":3,"title":"HDFS 故障类型和其检测方法","slug":"hdfs-故障类型和其检测方法","link":"#hdfs-故障类型和其检测方法","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694353000000,"updatedTime":1694353000000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":10.38,"words":3113},"filePathRelative":"16.大数据/01.hadoop/01.hdfs/01.HDFS入门.md","localizedDate":"2020年2月24日","excerpt":"<h1> HDFS 入门</h1>\\n<blockquote>\\n<p><strong>HDFS 是 Hadoop 分布式文件系统。</strong></p>\\n<p>关键词：分布式、文件系统</p>\\n</blockquote>\\n<h2> HDFS 简介</h2>\\n<p><strong>HDFS</strong> 是 <strong>Hadoop Distributed File System</strong> 的缩写，即 Hadoop 的分布式文件系统。</p>\\n<p>HDFS 是一种用于存储具有流数据访问模式的超大文件的文件系统，它运行在廉价的机器集群上。</p>\\n<p>HDFS 的设计目标是管理数以千计的服务器、数以万计的磁盘，将这么大规模的服务器计算资源当作一个单一的存储系统进行管理，对应用程序提供数以 PB 计的存储容量，让应用程序像使用普通文件系统一样存储大规模的文件数据。</p>","autoDesc":true}');export{e as data};
