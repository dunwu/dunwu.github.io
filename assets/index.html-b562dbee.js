const e=JSON.parse('{"key":"v-cada6784","path":"/pages/d848b7/","title":"Flink简介","lang":"zh-CN","frontmatter":{"title":"Flink简介","date":"2022-02-17T22:28:55.000Z","category":["大数据","flink"],"tag":["大数据","Flink"],"permalink":"/pages/d848b7/","description":"Flink 简介 关键概念：源源不断的流式数据处理、事件时间、有状态流处理和状态快照 流处理 任何类型的数据都可以形成一种事件流。信用卡交易、传感器测量、机器日志、网站或移动应用程序上的用户交互记录，所有这些数据都形成一种流。 数据可以被作为 无界 或者 有界 流来处理。 无界流 有定义流的开始，但没有定义流的结束。它们会无休止地产生数据。无界流的数据必须持续处理，即数据被摄取后需要立刻处理。我们不能等到所有数据都到达再处理，因为输入是无限的，在任何时候输入都不会完成。处理无界数据通常要求以特定顺序摄取事件，例如事件发生的顺序，以便能够推断结果的完整性。 有界流 有定义流的开始，也有定义流的结束。有界流可以在摄取所有数据后再进行计算。有界流所有数据可以被排序，所以并不需要有序摄取。有界流处理通常被称为批处理。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/d848b7/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Flink简介"}],["meta",{"property":"og:description","content":"Flink 简介 关键概念：源源不断的流式数据处理、事件时间、有状态流处理和状态快照 流处理 任何类型的数据都可以形成一种事件流。信用卡交易、传感器测量、机器日志、网站或移动应用程序上的用户交互记录，所有这些数据都形成一种流。 数据可以被作为 无界 或者 有界 流来处理。 无界流 有定义流的开始，但没有定义流的结束。它们会无休止地产生数据。无界流的数据必须持续处理，即数据被摄取后需要立刻处理。我们不能等到所有数据都到达再处理，因为输入是无限的，在任何时候输入都不会完成。处理无界数据通常要求以特定顺序摄取事件，例如事件发生的顺序，以便能够推断结果的完整性。 有界流 有定义流的开始，也有定义流的结束。有界流可以在摄取所有数据后再进行计算。有界流所有数据可以被排序，所以并不需要有序摄取。有界流处理通常被称为批处理。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T15:41:08.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"大数据"}],["meta",{"property":"article:tag","content":"Flink"}],["meta",{"property":"article:published_time","content":"2022-02-17T22:28:55.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-08T15:41:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Flink简介\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-02-17T22:28:55.000Z\\",\\"dateModified\\":\\"2023-09-08T15:41:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"流处理","slug":"流处理","link":"#流处理","children":[{"level":3,"title":"并行 Dataflows","slug":"并行-dataflows","link":"#并行-dataflows","children":[]},{"level":3,"title":"自定义时间流处理","slug":"自定义时间流处理","link":"#自定义时间流处理","children":[]},{"level":3,"title":"有状态流处理","slug":"有状态流处理","link":"#有状态流处理","children":[]},{"level":3,"title":"通过状态快照实现的容错","slug":"通过状态快照实现的容错","link":"#通过状态快照实现的容错","children":[]}]},{"level":2,"title":"状态","slug":"状态","link":"#状态","children":[]},{"level":2,"title":"时间","slug":"时间","link":"#时间","children":[{"level":3,"title":"时间语义","slug":"时间语义","link":"#时间语义","children":[]},{"level":3,"title":"Event Time","slug":"event-time","link":"#event-time","children":[]},{"level":3,"title":"Watermark","slug":"watermark","link":"#watermark","children":[]},{"level":3,"title":"延迟 VS 正确性","slug":"延迟-vs-正确性","link":"#延迟-vs-正确性","children":[]},{"level":3,"title":"延迟","slug":"延迟","link":"#延迟","children":[]},{"level":3,"title":"使用 Watermarks","slug":"使用-watermarks","link":"#使用-watermarks","children":[]}]},{"level":2,"title":"窗口","slug":"窗口","link":"#窗口","children":[{"level":3,"title":"窗口分配器","slug":"窗口分配器","link":"#窗口分配器","children":[]},{"level":3,"title":"窗口应用函数","slug":"窗口应用函数","link":"#窗口应用函数","children":[]},{"level":3,"title":"晚到的事件","slug":"晚到的事件","link":"#晚到的事件","children":[]},{"level":3,"title":"深入了解窗口操作","slug":"深入了解窗口操作","link":"#深入了解窗口操作","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694186720000,"updatedTime":1694187668000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":21.63,"words":6488},"filePathRelative":"16.大数据/13.flink/02.Flink简介.md","localizedDate":"2022年2月17日","excerpt":"<h1> Flink 简介</h1>\\n<blockquote>\\n<p>关键概念：源源不断的流式数据处理、事件时间、有状态流处理和状态快照</p>\\n</blockquote>\\n<h2> 流处理</h2>\\n<p>任何类型的数据都可以形成一种事件流。信用卡交易、传感器测量、机器日志、网站或移动应用程序上的用户交互记录，所有这些数据都形成一种流。</p>\\n<p>数据可以被作为 <em>无界</em> 或者 <em>有界</em> 流来处理。</p>\\n<ol>\\n<li><strong>无界流</strong> 有定义流的开始，但没有定义流的结束。它们会无休止地产生数据。无界流的数据必须持续处理，即数据被摄取后需要立刻处理。我们不能等到所有数据都到达再处理，因为输入是无限的，在任何时候输入都不会完成。处理无界数据通常要求以特定顺序摄取事件，例如事件发生的顺序，以便能够推断结果的完整性。</li>\\n<li><strong>有界流</strong> 有定义流的开始，也有定义流的结束。有界流可以在摄取所有数据后再进行计算。有界流所有数据可以被排序，所以并不需要有序摄取。有界流处理通常被称为批处理。</li>\\n</ol>","autoDesc":true}');export{e as data};
