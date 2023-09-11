const e=JSON.parse('{"key":"v-e99608b8","path":"/16.%E5%A4%A7%E6%95%B0%E6%8D%AE/01.hadoop/03.mapreduce.html","title":"MapReduce","lang":"zh-CN","frontmatter":{"title":"MapReduce","date":"2020-06-22T00:22:25.000Z","order":3,"category":["大数据","hadoop"],"tag":["大数据","Hadoop","MapReduce"],"description":"MapReduce MapReduce 简介 Hadoop MapReduce 是一个分布式计算框架，用于编写批处理应用程序。编写好的程序可以提交到 Hadoop 集群上用于并行处理大规模的数据集。 MapReduce 的设计思路是： 分而治之，并行计算 移动计算，而非移动数据 MapReduce 作业通过将输入的数据集拆分为独立的块，这些块由 map 以并行的方式处理，框架对 map 的输出进行排序，然后输入到 reduce 中。MapReduce 框架专门用于 &lt;key，value&gt; 键值对处理，它将作业的输入视为一组 &lt;key，value&gt; 对，并生成一组 &lt;key，value&gt; 对作为输出。输出和输出的 key 和 value 都必须实现Writable 接口。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/16.%E5%A4%A7%E6%95%B0%E6%8D%AE/01.hadoop/03.mapreduce.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"MapReduce"}],["meta",{"property":"og:description","content":"MapReduce MapReduce 简介 Hadoop MapReduce 是一个分布式计算框架，用于编写批处理应用程序。编写好的程序可以提交到 Hadoop 集群上用于并行处理大规模的数据集。 MapReduce 的设计思路是： 分而治之，并行计算 移动计算，而非移动数据 MapReduce 作业通过将输入的数据集拆分为独立的块，这些块由 map 以并行的方式处理，框架对 map 的输出进行排序，然后输入到 reduce 中。MapReduce 框架专门用于 &lt;key，value&gt; 键值对处理，它将作业的输入视为一组 &lt;key，value&gt; 对，并生成一组 &lt;key，value&gt; 对作为输出。输出和输出的 key 和 value 都必须实现Writable 接口。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T15:44:18.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"大数据"}],["meta",{"property":"article:tag","content":"Hadoop"}],["meta",{"property":"article:tag","content":"MapReduce"}],["meta",{"property":"article:published_time","content":"2020-06-22T00:22:25.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T15:44:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MapReduce\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-22T00:22:25.000Z\\",\\"dateModified\\":\\"2023-09-11T15:44:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"MapReduce 简介","slug":"mapreduce-简介","link":"#mapreduce-简介","children":[{"level":3,"title":"特点","slug":"特点","link":"#特点","children":[]},{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]}]},{"level":2,"title":"MapReduce 编程模型","slug":"mapreduce-编程模型","link":"#mapreduce-编程模型","children":[]},{"level":2,"title":"combiner & partitioner","slug":"combiner-partitioner","link":"#combiner-partitioner","children":[{"level":3,"title":"InputFormat & RecordReaders","slug":"inputformat-recordreaders","link":"#inputformat-recordreaders","children":[]},{"level":3,"title":"Combiner","slug":"combiner","link":"#combiner","children":[]}]},{"level":2,"title":"MapReduce 词频统计案例","slug":"mapreduce-词频统计案例","link":"#mapreduce-词频统计案例","children":[{"level":3,"title":"项目简介","slug":"项目简介","link":"#项目简介","children":[]},{"level":3,"title":"项目依赖","slug":"项目依赖","link":"#项目依赖","children":[]},{"level":3,"title":"WordCountMapper","slug":"wordcountmapper","link":"#wordcountmapper","children":[]},{"level":3,"title":"WordCountReducer","slug":"wordcountreducer","link":"#wordcountreducer","children":[]},{"level":3,"title":"WordCountApp","slug":"wordcountapp","link":"#wordcountapp","children":[]},{"level":3,"title":"提交到服务器运行","slug":"提交到服务器运行","link":"#提交到服务器运行","children":[]}]},{"level":2,"title":"词频统计案例进阶之 Combiner","slug":"词频统计案例进阶之-combiner","link":"#词频统计案例进阶之-combiner","children":[{"level":3,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[]},{"level":3,"title":"执行结果","slug":"执行结果","link":"#执行结果","children":[]}]},{"level":2,"title":"词频统计案例进阶之 Partitioner","slug":"词频统计案例进阶之-partitioner","link":"#词频统计案例进阶之-partitioner","children":[{"level":3,"title":"默认的 Partitioner","slug":"默认的-partitioner","link":"#默认的-partitioner","children":[]},{"level":3,"title":"自定义 Partitioner","slug":"自定义-partitioner","link":"#自定义-partitioner","children":[]},{"level":3,"title":"执行结果","slug":"执行结果-1","link":"#执行结果-1","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1694447058000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":9.07,"words":2720},"filePathRelative":"16.大数据/01.hadoop/03.mapreduce.md","localizedDate":"2020年6月22日","excerpt":"<h1> MapReduce</h1>\\n<h2> MapReduce 简介</h2>\\n<blockquote>\\n<p>Hadoop MapReduce 是一个分布式计算框架，用于编写批处理应用程序。编写好的程序可以提交到 Hadoop 集群上用于并行处理大规模的数据集。</p>\\n</blockquote>\\n<p>MapReduce 的设计思路是：</p>\\n<ul>\\n<li>分而治之，并行计算</li>\\n<li>移动计算，而非移动数据</li>\\n</ul>\\n<p>MapReduce 作业通过将输入的数据集拆分为独立的块，这些块由 <code>map</code> 以并行的方式处理，框架对 <code>map</code> 的输出进行排序，然后输入到 <code>reduce</code> 中。MapReduce 框架专门用于 <code>&lt;key，value&gt;</code> 键值对处理，它将作业的输入视为一组 <code>&lt;key，value&gt;</code> 对，并生成一组 <code>&lt;key，value&gt;</code> 对作为输出。输出和输出的 <code>key</code> 和 <code>value</code> 都必须实现<a href=\\"http://hadoop.apache.org/docs/stable/api/org/apache/hadoop/io/Writable.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Writable</a> 接口。</p>","autoDesc":true}');export{e as data};
