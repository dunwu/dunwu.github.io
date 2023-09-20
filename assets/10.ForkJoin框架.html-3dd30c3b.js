const n=JSON.parse('{"key":"v-545ed024","path":"/01.Java/01.JavaSE/05.%E5%B9%B6%E5%8F%91/10.ForkJoin%E6%A1%86%E6%9E%B6.html","title":"ForkJoin框架","lang":"zh-CN","frontmatter":{"title":"ForkJoin框架","date":"2020-07-14T15:27:46.000Z","order":10,"category":["Java","JavaSE","并发"],"tag":["Java","JavaSE","并发"],"description":"Java Fork Join 框架 对于简单的并行任务，你可以通过“线程池 +Future”的方案来解决；如果任务之间有聚合关系，无论是 AND 聚合还是 OR 聚合，都可以通过 CompletableFuture 来解决；而批量的并行任务，则可以通过 CompletionService 来解决。 CompletableFuture runAsync 和 supplyAsync 方法 CompletableFuture 提供了四个静态方法来创建一个异步操作。 public static CompletableFuture&lt;Void&gt; runAsync(Runnable runnable) public static CompletableFuture&lt;Void&gt; runAsync(Runnable runnable, Executor executor) public static &lt;U&gt; CompletableFuture&lt;U&gt; supplyAsync(Supplier&lt;U&gt; supplier) public static &lt;U&gt; CompletableFuture&lt;U&gt; supplyAsync(Supplier&lt;U&gt; supplier, Executor executor)","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/01.Java/01.JavaSE/05.%E5%B9%B6%E5%8F%91/10.ForkJoin%E6%A1%86%E6%9E%B6.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"ForkJoin框架"}],["meta",{"property":"og:description","content":"Java Fork Join 框架 对于简单的并行任务，你可以通过“线程池 +Future”的方案来解决；如果任务之间有聚合关系，无论是 AND 聚合还是 OR 聚合，都可以通过 CompletableFuture 来解决；而批量的并行任务，则可以通过 CompletionService 来解决。 CompletableFuture runAsync 和 supplyAsync 方法 CompletableFuture 提供了四个静态方法来创建一个异步操作。 public static CompletableFuture&lt;Void&gt; runAsync(Runnable runnable) public static CompletableFuture&lt;Void&gt; runAsync(Runnable runnable, Executor executor) public static &lt;U&gt; CompletableFuture&lt;U&gt; supplyAsync(Supplier&lt;U&gt; supplier) public static &lt;U&gt; CompletableFuture&lt;U&gt; supplyAsync(Supplier&lt;U&gt; supplier, Executor executor)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-20T00:08:32.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JavaSE"}],["meta",{"property":"article:tag","content":"并发"}],["meta",{"property":"article:published_time","content":"2020-07-14T15:27:46.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-20T00:08:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ForkJoin框架\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-07-14T15:27:46.000Z\\",\\"dateModified\\":\\"2023-09-20T00:08:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"CompletableFuture","slug":"completablefuture","link":"#completablefuture","children":[{"level":3,"title":"runAsync 和 supplyAsync 方法","slug":"runasync-和-supplyasync-方法","link":"#runasync-和-supplyasync-方法","children":[]}]},{"level":2,"title":"CompletionStage","slug":"completionstage","link":"#completionstage","children":[{"level":3,"title":"串行关系","slug":"串行关系","link":"#串行关系","children":[]},{"level":3,"title":"描述 AND 汇聚关系","slug":"描述-and-汇聚关系","link":"#描述-and-汇聚关系","children":[]},{"level":3,"title":"描述 OR 汇聚关系","slug":"描述-or-汇聚关系","link":"#描述-or-汇聚关系","children":[]},{"level":3,"title":"异常处理","slug":"异常处理","link":"#异常处理","children":[]}]},{"level":2,"title":"Fork/Join","slug":"fork-join","link":"#fork-join","children":[{"level":3,"title":"ForkJoinPool 工作原理","slug":"forkjoinpool-工作原理","link":"#forkjoinpool-工作原理","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1695168512000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":6.58,"words":1973},"filePathRelative":"01.Java/01.JavaSE/05.并发/10.ForkJoin框架.md","localizedDate":"2020年7月14日","excerpt":"<h1> Java Fork Join 框架</h1>\\n<p><strong>对于简单的并行任务，你可以通过“线程池 +Future”的方案来解决；如果任务之间有聚合关系，无论是 AND 聚合还是 OR 聚合，都可以通过 CompletableFuture 来解决；而批量的并行任务，则可以通过 CompletionService 来解决。</strong></p>\\n<h2> CompletableFuture</h2>\\n<h3> runAsync 和 supplyAsync 方法</h3>\\n<p>CompletableFuture 提供了四个静态方法来创建一个异步操作。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token class-name\\">CompletableFuture</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Void</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token function\\">runAsync</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Runnable</span> runnable<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token class-name\\">CompletableFuture</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Void</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token function\\">runAsync</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Runnable</span> runnable<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">Executor</span> executor<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">U</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token class-name\\">CompletableFuture</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">U</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token function\\">supplyAsync</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Supplier</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">U</span><span class=\\"token punctuation\\">&gt;</span></span> supplier<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">U</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token class-name\\">CompletableFuture</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">U</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token function\\">supplyAsync</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Supplier</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">U</span><span class=\\"token punctuation\\">&gt;</span></span> supplier<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">Executor</span> executor<span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
