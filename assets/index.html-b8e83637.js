const e=JSON.parse('{"key":"v-11b7b1c8","path":"/pages/62f8d9/","title":"HBase 架构","lang":"zh-CN","frontmatter":{"title":"HBase 架构","date":"2020-07-24T06:52:07.000Z","category":["数据库","列式数据库","HBase"],"tag":["大数据","HBase"],"permalink":"/pages/62f8d9/","description":"HBase 架构 HBase 是一个在 HDFS 上开发的面向列的分布式数据库。 HBase 存储架构 在 HBase 中，表被分割成多个更小的块然后分散的存储在不同的服务器上，这些小块叫做 Regions，存放 Regions 的地方叫做 RegionServer。Master 进程负责处理不同的 RegionServer 之间的 Region 的分发。 概览","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/62f8d9/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"HBase 架构"}],["meta",{"property":"og:description","content":"HBase 架构 HBase 是一个在 HDFS 上开发的面向列的分布式数据库。 HBase 存储架构 在 HBase 中，表被分割成多个更小的块然后分散的存储在不同的服务器上，这些小块叫做 Regions，存放 Regions 的地方叫做 RegionServer。Master 进程负责处理不同的 RegionServer 之间的 Region 的分发。 概览"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T10:35:58.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"大数据"}],["meta",{"property":"article:tag","content":"HBase"}],["meta",{"property":"article:published_time","content":"2020-07-24T06:52:07.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T10:35:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HBase 架构\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-07-24T06:52:07.000Z\\",\\"dateModified\\":\\"2023-09-10T10:35:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"HBase 存储架构","slug":"hbase-存储架构","link":"#hbase-存储架构","children":[{"level":3,"title":"概览","slug":"概览","link":"#概览","children":[]},{"level":3,"title":"Region","slug":"region","link":"#region","children":[]},{"level":3,"title":"Region Server","slug":"region-server","link":"#region-server","children":[]}]},{"level":2,"title":"HBase 系统架构","slug":"hbase-系统架构","link":"#hbase-系统架构","children":[{"level":3,"title":"Master Server","slug":"master-server","link":"#master-server","children":[]},{"level":3,"title":"Region Server","slug":"region-server-1","link":"#region-server-1","children":[]},{"level":3,"title":"ZooKeeper","slug":"zookeeper","link":"#zookeeper","children":[]}]},{"level":2,"title":"HBase 读写流程","slug":"hbase-读写流程","link":"#hbase-读写流程","children":[{"level":3,"title":"写入数据的流程","slug":"写入数据的流程","link":"#写入数据的流程","children":[]},{"level":3,"title":"读取数据的流程","slug":"读取数据的流程","link":"#读取数据的流程","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694342158000,"updatedTime":1694342158000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":7.25,"words":2174},"filePathRelative":"12.数据库/06.列式数据库/01.HBase/04.HBase架构.md","localizedDate":"2020年7月24日","excerpt":"<h1> HBase 架构</h1>\\n<blockquote>\\n<p><strong><em>HBase 是一个在 HDFS 上开发的面向列的分布式数据库。</em></strong></p>\\n</blockquote>\\n<h2> HBase 存储架构</h2>\\n<blockquote>\\n<p>在 HBase 中，表被分割成多个更小的块然后分散的存储在不同的服务器上，这些小块叫做 Regions，存放 Regions 的地方叫做 RegionServer。Master 进程负责处理不同的 RegionServer 之间的 Region 的分发。</p>\\n</blockquote>\\n<h3> 概览</h3>","autoDesc":true}');export{e as data};
