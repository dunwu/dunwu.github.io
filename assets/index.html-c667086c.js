const e=JSON.parse('{"key":"v-1adfef45","path":"/pages/692bd7/","title":"Flink 事件驱动","lang":"zh-CN","frontmatter":{"title":"Flink 事件驱动","date":"2022-02-17T22:28:55.000Z","category":["大数据","flink"],"tag":["大数据","Flink"],"permalink":"/pages/692bd7/","description":"Flink 事件驱动 处理函数（Process Functions） 简介 ProcessFunction 将事件处理与 Timer，State 结合在一起，使其成为流处理应用的强大构建模块。 这是使用 Flink 创建事件驱动应用程序的基础。它和 RichFlatMapFunction 十分相似， 但是增加了 Timer。 示例 如果你已经体验了 流式分析训练 的动手实践， 你应该记得，它是采用 TumblingEventTimeWindow 来计算每个小时内每个司机的小费总和， 像下面的示例这样：","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/692bd7/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Flink 事件驱动"}],["meta",{"property":"og:description","content":"Flink 事件驱动 处理函数（Process Functions） 简介 ProcessFunction 将事件处理与 Timer，State 结合在一起，使其成为流处理应用的强大构建模块。 这是使用 Flink 创建事件驱动应用程序的基础。它和 RichFlatMapFunction 十分相似， 但是增加了 Timer。 示例 如果你已经体验了 流式分析训练 的动手实践， 你应该记得，它是采用 TumblingEventTimeWindow 来计算每个小时内每个司机的小费总和， 像下面的示例这样："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T10:35:58.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"大数据"}],["meta",{"property":"article:tag","content":"Flink"}],["meta",{"property":"article:published_time","content":"2022-02-17T22:28:55.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T10:35:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Flink 事件驱动\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-02-17T22:28:55.000Z\\",\\"dateModified\\":\\"2023-09-10T10:35:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"处理函数（Process Functions）","slug":"处理函数-process-functions","link":"#处理函数-process-functions","children":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"性能考虑","slug":"性能考虑","link":"#性能考虑","children":[]}]},{"level":2,"title":"旁路输出（Side Outputs）","slug":"旁路输出-side-outputs","link":"#旁路输出-side-outputs","children":[{"level":3,"title":"简介","slug":"简介-1","link":"#简介-1","children":[]},{"level":3,"title":"示例","slug":"示例-1","link":"#示例-1","children":[]}]},{"level":2,"title":"结语","slug":"结语","link":"#结语","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694342158000,"updatedTime":1694342158000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":6.78,"words":2035},"filePathRelative":"16.大数据/13.flink/04.Flink事件驱动.md","localizedDate":"2022年2月17日","excerpt":"<h1> Flink 事件驱动</h1>\\n<h2> 处理函数（Process Functions）</h2>\\n<h3> 简介</h3>\\n<p><code>ProcessFunction</code> 将事件处理与 Timer，State 结合在一起，使其成为流处理应用的强大构建模块。 这是使用 Flink 创建事件驱动应用程序的基础。它和 <code>RichFlatMapFunction</code> 十分相似， 但是增加了 Timer。</p>\\n<h3> 示例</h3>\\n<p>如果你已经体验了 <a href=\\"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/learn-flink/streaming_analytics/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">流式分析训练</a> 的<a href=\\"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/learn-flink/streaming_analytics/#hands-on\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">动手实践</a>， 你应该记得，它是采用 <code>TumblingEventTimeWindow</code> 来计算每个小时内每个司机的小费总和， 像下面的示例这样：</p>","autoDesc":true}');export{e as data};
