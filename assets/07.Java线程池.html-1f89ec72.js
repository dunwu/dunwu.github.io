const e=JSON.parse('{"key":"v-1e13ee5a","path":"/01.Java/01.JavaSE/05.%E5%B9%B6%E5%8F%91/07.Java%E7%BA%BF%E7%A8%8B%E6%B1%A0.html","title":"Java线程池","lang":"zh-CN","frontmatter":{"title":"Java线程池","date":"2019-12-24T23:52:25.000Z","order":7,"category":["Java","JavaSE","并发"],"tag":["Java","JavaSE","并发","线程池"],"description":"Java 线程池 简介 什么是线程池 线程池是一种多线程处理形式，处理过程中将任务添加到队列，然后在创建线程后自动启动这些任务。 为什么要用线程池 如果并发请求数量很多，但每个线程执行的时间很短，就会出现频繁的创建和销毁线程。如此一来，会大大降低系统的效率，可能频繁创建和销毁线程的时间、资源开销要大于实际工作的所需。 正是由于这个问题，所以有必要引入线程池。使用 线程池的好处 有以下几点： 降低资源消耗 - 通过重复利用已创建的线程降低线程创建和销毁造成的消耗。 提高响应速度 - 当任务到达时，任务可以不需要等到线程创建就能立即执行。 提高线程的可管理性 - 线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一的分配，调优和监控。但是要做到合理的利用线程池，必须对其原理了如指掌。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/01.Java/01.JavaSE/05.%E5%B9%B6%E5%8F%91/07.Java%E7%BA%BF%E7%A8%8B%E6%B1%A0.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Java线程池"}],["meta",{"property":"og:description","content":"Java 线程池 简介 什么是线程池 线程池是一种多线程处理形式，处理过程中将任务添加到队列，然后在创建线程后自动启动这些任务。 为什么要用线程池 如果并发请求数量很多，但每个线程执行的时间很短，就会出现频繁的创建和销毁线程。如此一来，会大大降低系统的效率，可能频繁创建和销毁线程的时间、资源开销要大于实际工作的所需。 正是由于这个问题，所以有必要引入线程池。使用 线程池的好处 有以下几点： 降低资源消耗 - 通过重复利用已创建的线程降低线程创建和销毁造成的消耗。 提高响应速度 - 当任务到达时，任务可以不需要等到线程创建就能立即执行。 提高线程的可管理性 - 线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一的分配，调优和监控。但是要做到合理的利用线程池，必须对其原理了如指掌。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T14:54:54.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JavaSE"}],["meta",{"property":"article:tag","content":"并发"}],["meta",{"property":"article:tag","content":"线程池"}],["meta",{"property":"article:published_time","content":"2019-12-24T23:52:25.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-21T14:54:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java线程池\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-12-24T23:52:25.000Z\\",\\"dateModified\\":\\"2023-09-21T14:54:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[{"level":3,"title":"什么是线程池","slug":"什么是线程池","link":"#什么是线程池","children":[]},{"level":3,"title":"为什么要用线程池","slug":"为什么要用线程池","link":"#为什么要用线程池","children":[]}]},{"level":2,"title":"Executor 框架","slug":"executor-框架","link":"#executor-框架","children":[{"level":3,"title":"核心 API 概述","slug":"核心-api-概述","link":"#核心-api-概述","children":[]},{"level":3,"title":"Executor","slug":"executor","link":"#executor","children":[]},{"level":3,"title":"ExecutorService","slug":"executorservice","link":"#executorservice","children":[]},{"level":3,"title":"ScheduledExecutorService","slug":"scheduledexecutorservice","link":"#scheduledexecutorservice","children":[]}]},{"level":2,"title":"ThreadPoolExecutor","slug":"threadpoolexecutor","link":"#threadpoolexecutor","children":[{"level":3,"title":"重要字段","slug":"重要字段","link":"#重要字段","children":[]},{"level":3,"title":"构造方法","slug":"构造方法","link":"#构造方法","children":[]},{"level":3,"title":"execute 方法","slug":"execute-方法","link":"#execute-方法","children":[]},{"level":3,"title":"其他重要方法","slug":"其他重要方法","link":"#其他重要方法","children":[]},{"level":3,"title":"使用示例","slug":"使用示例","link":"#使用示例","children":[]}]},{"level":2,"title":"Executors","slug":"executors","link":"#executors","children":[{"level":3,"title":"newSingleThreadExecutor","slug":"newsinglethreadexecutor","link":"#newsinglethreadexecutor","children":[]},{"level":3,"title":"newFixedThreadPool","slug":"newfixedthreadpool","link":"#newfixedthreadpool","children":[]},{"level":3,"title":"newCachedThreadPool","slug":"newcachedthreadpool","link":"#newcachedthreadpool","children":[]},{"level":3,"title":"newScheduleThreadPool","slug":"newschedulethreadpool","link":"#newschedulethreadpool","children":[]},{"level":3,"title":"newWorkStealingPool","slug":"newworkstealingpool","link":"#newworkstealingpool","children":[]}]},{"level":2,"title":"线程池最佳实践","slug":"线程池最佳实践","link":"#线程池最佳实践","children":[{"level":3,"title":"计算线程数量","slug":"计算线程数量","link":"#计算线程数量","children":[]},{"level":3,"title":"建议使用有界阻塞队列","slug":"建议使用有界阻塞队列","link":"#建议使用有界阻塞队列","children":[]},{"level":3,"title":"重要任务应该自定义拒绝策略","slug":"重要任务应该自定义拒绝策略","link":"#重要任务应该自定义拒绝策略","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1695308094000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":16.31,"words":4893},"filePathRelative":"01.Java/01.JavaSE/05.并发/07.Java线程池.md","localizedDate":"2019年12月24日","excerpt":"<h1> Java 线程池</h1>\\n<h2> 简介</h2>\\n<h3> 什么是线程池</h3>\\n<p>线程池是一种多线程处理形式，处理过程中将任务添加到队列，然后在创建线程后自动启动这些任务。</p>\\n<h3> 为什么要用线程池</h3>\\n<p>如果并发请求数量很多，但每个线程执行的时间很短，就会出现频繁的创建和销毁线程。如此一来，会大大降低系统的效率，可能频繁创建和销毁线程的时间、资源开销要大于实际工作的所需。</p>\\n<p>正是由于这个问题，所以有必要引入线程池。使用 <strong>线程池的好处</strong> 有以下几点：</p>\\n<ul>\\n<li><strong>降低资源消耗</strong> - 通过重复利用已创建的线程降低线程创建和销毁造成的消耗。</li>\\n<li><strong>提高响应速度</strong> - 当任务到达时，任务可以不需要等到线程创建就能立即执行。</li>\\n<li><strong>提高线程的可管理性</strong> - 线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一的分配，调优和监控。但是要做到合理的利用线程池，必须对其原理了如指掌。</li>\\n</ul>","autoDesc":true}');export{e as data};
