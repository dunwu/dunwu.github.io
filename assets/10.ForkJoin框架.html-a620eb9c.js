import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as i,a as n,b as a,d as s,e as c}from"./app-9db88853.js";const r={},p=c(`<h1 id="java-fork-join-框架" tabindex="-1"><a class="header-anchor" href="#java-fork-join-框架" aria-hidden="true">#</a> Java Fork Join 框架</h1><p><strong>对于简单的并行任务，你可以通过“线程池 +Future”的方案来解决；如果任务之间有聚合关系，无论是 AND 聚合还是 OR 聚合，都可以通过 CompletableFuture 来解决；而批量的并行任务，则可以通过 CompletionService 来解决。</strong></p><h2 id="completablefuture" tabindex="-1"><a class="header-anchor" href="#completablefuture" aria-hidden="true">#</a> CompletableFuture</h2><h3 id="runasync-和-supplyasync-方法" tabindex="-1"><a class="header-anchor" href="#runasync-和-supplyasync-方法" aria-hidden="true">#</a> runAsync 和 supplyAsync 方法</h3><p>CompletableFuture 提供了四个静态方法来创建一个异步操作。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Void</span><span class="token punctuation">&gt;</span></span> <span class="token function">runAsync</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> runnable<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Void</span><span class="token punctuation">&gt;</span></span> <span class="token function">runAsync</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> runnable<span class="token punctuation">,</span> <span class="token class-name">Executor</span> executor<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">U</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">U</span><span class="token punctuation">&gt;</span></span> <span class="token function">supplyAsync</span><span class="token punctuation">(</span><span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">U</span><span class="token punctuation">&gt;</span></span> supplier<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">U</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">U</span><span class="token punctuation">&gt;</span></span> <span class="token function">supplyAsync</span><span class="token punctuation">(</span><span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">U</span><span class="token punctuation">&gt;</span></span> supplier<span class="token punctuation">,</span> <span class="token class-name">Executor</span> executor<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没有指定 Executor 的方法会使用 ForkJoinPool.commonPool() 作为它的线程池执行异步代码。如果指定线程池，则使用指定的线程池运行。以下所有的方法都类同。</p><ul><li>runAsync 方法不支持返回值。</li><li>supplyAsync 可以支持返回值。</li></ul><h2 id="completionstage" tabindex="-1"><a class="header-anchor" href="#completionstage" aria-hidden="true">#</a> CompletionStage</h2><p>CompletionStage 接口可以清晰地描述任务之间的时序关系，如<strong>串行关系、并行关系、汇聚关系</strong>等。</p><h3 id="串行关系" tabindex="-1"><a class="header-anchor" href="#串行关系" aria-hidden="true">#</a> 串行关系</h3><p>CompletionStage 接口里面描述串行关系，主要是 thenApply、thenAccept、thenRun 和 thenCompose 这四个系列的接口。</p><p>thenApply 系列函数里参数 fn 的类型是接口 <code>Function&lt;T, R&gt;</code>，这个接口里与 CompletionStage 相关的方法是 <code>R apply(T t)</code>，这个方法既能接收参数也支持返回值，所以 thenApply 系列方法返回的是<code>CompletionStage</code>。</p><p>而 thenAccept 系列方法里参数 consumer 的类型是接口 <code>Consumer&lt;T&gt;</code>，这个接口里与 CompletionStage 相关的方法是 <code>void accept(T t)</code>，这个方法虽然支持参数，但却不支持回值，所以 thenAccept 系列方法返回的是<code>CompletionStage&lt;Void&gt;</code>。</p><p>thenRun 系列方法里 action 的参数是 Runnable，所以 action 既不能接收参数也不支持返回值，所以 thenRun 系列方法返回的也是<code>CompletionStage&lt;Void&gt;</code>。</p><p>这些方法里面 Async 代表的是异步执行 fn、consumer 或者 action。其中，需要你注意的是 thenCompose 系列方法，这个系列的方法会新创建出一个子流程，最终结果和 thenApply 系列是相同的。</p><h3 id="描述-and-汇聚关系" tabindex="-1"><a class="header-anchor" href="#描述-and-汇聚关系" aria-hidden="true">#</a> 描述 AND 汇聚关系</h3><p>CompletionStage 接口里面描述 AND 汇聚关系，主要是 thenCombine、thenAcceptBoth 和 runAfterBoth 系列的接口，这些接口的区别也是源自 fn、consumer、action 这三个核心参数不同。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CompletionStage&lt;R&gt; thenCombine(other, fn);
CompletionStage&lt;R&gt; thenCombineAsync(other, fn);
CompletionStage&lt;Void&gt; thenAcceptBoth(other, consumer);
CompletionStage&lt;Void&gt; thenAcceptBothAsync(other, consumer);
CompletionStage&lt;Void&gt; runAfterBoth(other, action);
CompletionStage&lt;Void&gt; runAfterBothAsync(other, action);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="描述-or-汇聚关系" tabindex="-1"><a class="header-anchor" href="#描述-or-汇聚关系" aria-hidden="true">#</a> 描述 OR 汇聚关系</h3><p>CompletionStage 接口里面描述 OR 汇聚关系，主要是 applyToEither、acceptEither 和 runAfterEither 系列的接口，这些接口的区别也是源自 fn、consumer、action 这三个核心参数不同。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CompletionStage applyToEither(other, fn);
CompletionStage applyToEitherAsync(other, fn);
CompletionStage acceptEither(other, consumer);
CompletionStage acceptEitherAsync(other, consumer);
CompletionStage runAfterEither(other, action);
CompletionStage runAfterEitherAsync(other, action);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的示例代码展示了如何使用 applyToEither() 方法来描述一个 OR 汇聚关系。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CompletableFuture&lt;String&gt; f1 =
  CompletableFuture.supplyAsync(()-&gt;{
    int t = getRandom(5, 10);
    sleep(t, TimeUnit.SECONDS);
    return String.valueOf(t);
});

CompletableFuture&lt;String&gt; f2 =
  CompletableFuture.supplyAsync(()-&gt;{
    int t = getRandom(5, 10);
    sleep(t, TimeUnit.SECONDS);
    return String.valueOf(t);
});

CompletableFuture&lt;String&gt; f3 =
  f1.applyToEither(f2,s -&gt; s);

System.out.println(f3.join());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h3><p>虽然上面我们提到的 fn、consumer、action 它们的核心方法都<strong>不允许抛出可检查异常，但是却无法限制它们抛出运行时异常</strong>，例如下面的代码，执行 <code>7/0</code> 就会出现除零错误这个运行时异常。非异步编程里面，我们可以使用 try{}catch{} 来捕获并处理异常，那在异步编程里面，异常该如何处理呢？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CompletableFuture&lt;Integer&gt;
  f0 = CompletableFuture.
    .supplyAsync(()-&gt;(7/0))
    .thenApply(r-&gt;r*10);
System.out.println(f0.join());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CompletionStage 接口给我们提供的方案非常简单，比 try{}catch{}还要简单，下面是相关的方法，使用这些方法进行异常处理和串行操作是一样的，都支持链式编程方式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CompletionStage exceptionally(fn);
CompletionStage&lt;R&gt; whenComplete(consumer);
CompletionStage&lt;R&gt; whenCompleteAsync(consumer);
CompletionStage&lt;R&gt; handle(fn);
CompletionStage&lt;R&gt; handleAsync(fn);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的示例代码展示了如何使用 exceptionally() 方法来处理异常，exceptionally() 的使用非常类似于 try{}catch{}中的 catch{}，但是由于支持链式编程方式，所以相对更简单。既然有 try{}catch{}，那就一定还有 try{}finally{}，whenComplete() 和 handle() 系列方法就类似于 try{}finally{}中的 finally{}，无论是否发生异常都会执行 whenComplete() 中的回调函数 consumer 和 handle() 中的回调函数 fn。whenComplete() 和 handle() 的区别在于 whenComplete() 不支持返回结果，而 handle() 是支持返回结果的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CompletableFuture&lt;Integer&gt;
  f0 = CompletableFuture
    .supplyAsync(()-&gt;7/0))
    .thenApply(r-&gt;r*10)
    .exceptionally(e-&gt;0);
System.out.println(f0.join());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fork-join" tabindex="-1"><a class="header-anchor" href="#fork-join" aria-hidden="true">#</a> Fork/Join</h2><p>Fork/Join 是一个并行计算的框架，主要就是用来支持分治任务模型的，这个计算框架里的<strong>Fork 对应的是分治任务模型里的任务分解，Join 对应的是结果合并</strong>。Fork/Join 计算框架主要包含两部分，一部分是<strong>分治任务的线程池 ForkJoinPool</strong>，另一部分是<strong>分治任务 ForkJoinTask</strong>。这两部分的关系类似于 ThreadPoolExecutor 和 Runnable 的关系，都可以理解为提交任务到线程池，只不过分治任务有自己独特类型 ForkJoinTask。</p><p>ForkJoinTask 是一个抽象类，它的方法有很多，最核心的是 fork() 方法和 join() 方法，其中 fork() 方法会异步地执行一个子任务，而 join() 方法则会阻塞当前线程来等待子任务的执行结果。ForkJoinTask 有两个子类——RecursiveAction 和 RecursiveTask，通过名字你就应该能知道，它们都是用递归的方式来处理分治任务的。这两个子类都定义了抽象方法 compute()，不过区别是 RecursiveAction 定义的 compute() 没有返回值，而 RecursiveTask 定义的 compute() 方法是有返回值的。这两个子类也是抽象类，在使用的时候，需要你定义子类去扩展。</p><h3 id="forkjoinpool-工作原理" tabindex="-1"><a class="header-anchor" href="#forkjoinpool-工作原理" aria-hidden="true">#</a> ForkJoinPool 工作原理</h3><p>Fork/Join 并行计算的核心组件是 ForkJoinPool，所以下面我们就来简单介绍一下 ForkJoinPool 的工作原理。</p><p>通过专栏前面文章的学习，你应该已经知道 ThreadPoolExecutor 本质上是一个生产者 - 消费者模式的实现，内部有一个任务队列，这个任务队列是生产者和消费者通信的媒介；ThreadPoolExecutor 可以有多个工作线程，但是这些工作线程都共享一个任务队列。</p><p>ForkJoinPool 本质上也是一个生产者 - 消费者的实现，但是更加智能，你可以参考下面的 ForkJoinPool 工作原理图来理解其原理。ThreadPoolExecutor 内部只有一个任务队列，而 ForkJoinPool 内部有多个任务队列，当我们通过 ForkJoinPool 的 invoke() 或者 submit() 方法提交任务时，ForkJoinPool 根据一定的路由规则把任务提交到一个任务队列中，如果任务在执行过程中会创建出子任务，那么子任务会提交到工作线程对应的任务队列中。</p><p>如果工作线程对应的任务队列空了，是不是就没活儿干了呢？不是的，ForkJoinPool 支持一种叫做“<strong>任务窃取</strong>”的机制，如果工作线程空闲了，那它可以“窃取”其他工作任务队列里的任务，例如下图中，线程 T2 对应的任务队列已经空了，它可以“窃取”线程 T1 对应的任务队列的任务。如此一来，所有的工作线程都不会闲下来了。</p><p>ForkJoinPool 中的任务队列采用的是双端队列，工作线程正常获取任务和“窃取任务”分别是从任务队列不同的端消费，这样能避免很多不必要的数据竞争。我们这里介绍的仅仅是简化后的原理，ForkJoinPool 的实现远比我们这里介绍的复杂，如果你感兴趣，建议去看它的源码。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200703141326.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,42),u={href:"https://book.douban.com/subject/10484692/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://book.douban.com/subject/26591326/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://time.geekbang.org/column/intro/100023901",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.jianshu.com/p/6bac52527ca4",target:"_blank",rel:"noopener noreferrer"};function v(g,b){const e=o("ExternalLinkIcon");return l(),i("div",null,[p,n("ul",null,[n("li",null,[n("a",u,[a("《Java 并发编程实战》"),s(e)])]),n("li",null,[n("a",d,[a("《Java 并发编程的艺术》"),s(e)])]),n("li",null,[n("a",m,[a("《Java 并发编程实战》"),s(e)])]),n("li",null,[n("a",h,[a("CompletableFuture 使用详解"),s(e)])])])])}const y=t(r,[["render",v],["__file","10.ForkJoin框架.html.vue"]]);export{y as default};
