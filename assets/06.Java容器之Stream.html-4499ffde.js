import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r,o,c,a as e,b as d,d as n,e as i}from"./app-fcc32256.js";const s={},m=i('<h1 id="java-容器之-stream" tabindex="-1"><a class="header-anchor" href="#java-容器之-stream" aria-hidden="true">#</a> Java 容器之 Stream</h1><h2 id="stream-简介" tabindex="-1"><a class="header-anchor" href="#stream-简介" aria-hidden="true">#</a> Stream 简介</h2><p>在 Java8 中，<code>Collection</code> 新增了两个流方法，分别是 <code>stream()</code> 和 <code>parallelStream()</code>。</p><p><code>Stream</code> 相当于高级版的 <code>Iterator</code>，他可以通过 Lambda 表达式对集合进行各种非常便利、高效的聚合操作（Aggregate Operation），或者大批量数据操作 (Bulk Data Operation)。</p><h2 id="stream-操作分类" tabindex="-1"><a class="header-anchor" href="#stream-操作分类" aria-hidden="true">#</a> Stream 操作分类</h2><p>官方将 Stream 中的操作分为两大类：中间操作（Intermediate operations）和终结操作（Terminal operations）。</p><p>中间操作又可以分为无状态（Stateless）与有状态（Stateful）操作，前者是指元素的处理不受之前元素的影响，后者是指该操作只有拿到所有元素之后才能继续下去。</p><p>终结操作又可以分为短路（Short-circuiting）与非短路（Unshort-circuiting）操作，前者是指遇到某些符合条件的元素就可以得到最终结果，后者是指必须处理完所有元素才能得到最终结果。</p><h2 id="stream-源码实现" tabindex="-1"><a class="header-anchor" href="#stream-源码实现" aria-hidden="true">#</a> Stream 源码实现</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20201205174140.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><code>BaseStream</code> 和 <code>Stream</code> 是最顶层的接口类。<code>BaseStream</code> 主要定义了流的基本接口方法，例如，spliterator、isParallel 等；<code>Stream</code> 则定义了一些流的常用操作方法，例如，map、filter 等。</p><p><code>Sink</code> 接口是定义每个 <code>Stream</code> 操作之间关系的协议，他包含 <code>begin()</code>、<code>end()</code>、<code>cancellationRequested()</code>、<code>accpt()</code> 四个方法。<code>ReferencePipeline</code> 最终会将整个 <code>Stream</code> 流操作组装成一个调用链，而这条调用链上的各个 <code>Stream</code> 操作的上下关系就是通过 <code>Sink</code> 接口协议来定义实现的。</p><p><code>ReferencePipeline</code> 是一个结构类，他通过定义内部类组装了各种操作流。他定义了 <code>Head</code>、<code>StatelessOp</code>、<code>StatefulOp</code> 三个内部类，实现了 <code>BaseStream</code> 与 <code>Stream</code> 的接口方法。Head 类主要用来定义数据源操作，在初次调用 names.stream() 方法时，会加载 Head 对象，此时为加载数据源操作；接着加载的是中间操作，分别为无状态中间操作 StatelessOp 对象和有状态操作 StatefulOp 对象，此时的 Stage 并没有执行，而是通过 AbstractPipeline 生成了一个中间操作 Stage 链表；当我们调用终结操作时，会生成一个最终的 Stage，通过这个 Stage 触发之前的中间操作，从最后一个 Stage 开始，递归产生一个 Sink 链。</p><h2 id="stream-并行处理" tabindex="-1"><a class="header-anchor" href="#stream-并行处理" aria-hidden="true">#</a> Stream 并行处理</h2><p>Stream 处理数据的方式有两种，串行处理和并行处理。</p><h2 id="_4-参考资料" tabindex="-1"><a class="header-anchor" href="#_4-参考资料" aria-hidden="true">#</a> 4. 参考资料</h2>',16),l={href:"https://item.jd.com/10058164.html",target:"_blank",rel:"noopener noreferrer"};function h(p,S){const a=r("ExternalLinkIcon");return o(),c("div",null,[m,e("ul",null,[e("li",null,[e("a",l,[d("Java 编程思想（第 4 版）"),n(a)])])])])}const _=t(s,[["render",h],["__file","06.Java容器之Stream.html.vue"]]);export{_ as default};
