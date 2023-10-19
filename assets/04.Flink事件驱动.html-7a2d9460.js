import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as s,d as e,e as t}from"./app-a0e98cac.js";const i={},u=t('<h1 id="flink-事件驱动" tabindex="-1"><a class="header-anchor" href="#flink-事件驱动" aria-hidden="true">#</a> Flink 事件驱动</h1><h2 id="处理函数-process-functions" tabindex="-1"><a class="header-anchor" href="#处理函数-process-functions" aria-hidden="true">#</a> 处理函数（Process Functions）</h2><h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3><p><code>ProcessFunction</code> 将事件处理与 Timer，State 结合在一起，使其成为流处理应用的强大构建模块。 这是使用 Flink 创建事件驱动应用程序的基础。它和 <code>RichFlatMapFunction</code> 十分相似， 但是增加了 Timer。</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3>',5),d={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/learn-flink/streaming_analytics/",target:"_blank",rel:"noopener noreferrer"},r={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/learn-flink/streaming_analytics/#hands-on",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"TumblingEventTimeWindow",-1),m=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 计算每个司机每小时的小费总和</span>
<span class="token class-name">DataStream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Tuple3</span><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">Float</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> hourlyTips <span class="token operator">=</span> fares
        <span class="token punctuation">.</span><span class="token function">keyBy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">TaxiFare</span> fare<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> fare<span class="token punctuation">.</span>driverId<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">window</span><span class="token punctuation">(</span><span class="token class-name">TumblingEventTimeWindows</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token class-name">Time</span><span class="token punctuation">.</span><span class="token function">hours</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AddTips</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>KeyedProcessFunction</code> 去实现相同的操作更加直接且更有学习意义。 让我们开始用以下代码替换上面的代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 计算每个司机每小时的小费总和</span>
<span class="token class-name">DataStream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Tuple3</span><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">Float</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> hourlyTips <span class="token operator">=</span> fares
        <span class="token punctuation">.</span><span class="token function">keyBy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">TaxiFare</span> fare<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> fare<span class="token punctuation">.</span>driverId<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PseudoWindow</span><span class="token punctuation">(</span><span class="token class-name">Time</span><span class="token punctuation">.</span><span class="token function">hours</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个代码片段中，一个名为 <code>PseudoWindow</code> 的 <code>KeyedProcessFunction</code> 被应用于 KeyedStream， 其结果是一个 <code>DataStream&lt;Tuple3&lt;Long, Long, Float&gt;&gt;</code> （与使用 Flink 内置时间窗口的实现生成的流相同）。</p><p><code>PseudoWindow</code> 的总体轮廓示意如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 在时长跨度为一小时的窗口中计算每个司机的小费总和。</span>
<span class="token comment">// 司机ID作为 key。</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">PseudoWindow</span> <span class="token keyword">extends</span>
        <span class="token class-name">KeyedProcessFunction</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">TaxiFare</span><span class="token punctuation">,</span> <span class="token class-name">Tuple3</span><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">Float</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">long</span> durationMsec<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">PseudoWindow</span><span class="token punctuation">(</span><span class="token class-name">Time</span> duration<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>durationMsec <span class="token operator">=</span> duration<span class="token punctuation">.</span><span class="token function">toMilliseconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token comment">// 在初始化期间调用一次。</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token class-name">Configuration</span> conf<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">.</span> <span class="token punctuation">.</span> <span class="token punctuation">.</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token comment">// 每个票价事件（TaxiFare-Event）输入（到达）时调用，以处理输入的票价事件。</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">processElement</span><span class="token punctuation">(</span>
            <span class="token class-name">TaxiFare</span> fare<span class="token punctuation">,</span>
            <span class="token class-name">Context</span> ctx<span class="token punctuation">,</span>
            <span class="token class-name">Collector</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Tuple3</span><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">Float</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> out<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>

        <span class="token punctuation">.</span> <span class="token punctuation">.</span> <span class="token punctuation">.</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token comment">// 当当前水印（watermark）表明窗口现在需要完成的时候调用。</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onTimer</span><span class="token punctuation">(</span><span class="token keyword">long</span> timestamp<span class="token punctuation">,</span>
            <span class="token class-name">OnTimerContext</span> context<span class="token punctuation">,</span>
            <span class="token class-name">Collector</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Tuple3</span><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">Float</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> out<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>

        <span class="token punctuation">.</span> <span class="token punctuation">.</span> <span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意事项：</p><ul><li>有几种类型的 ProcessFunctions – 不仅包括 <code>KeyedProcessFunction</code>，还包括 <code>CoProcessFunctions</code>、<code>BroadcastProcessFunctions</code> 等.</li><li><code>KeyedProcessFunction</code> 是一种 <code>RichFunction</code>。作为 <code>RichFunction</code>，它可以访问使用 Managed Keyed State 所需的 <code>open</code> 和 <code>getRuntimeContext</code> 方法。</li><li>有两个回调方法须要实现： <code>processElement</code> 和 <code>onTimer</code>。每个输入事件都会调用 <code>processElement</code> 方法； 当计时器触发时调用 <code>onTimer</code>。它们可以是基于事件时间（event time）的 timer，也可以是基于处理时间（processing time）的 timer。 除此之外，<code>processElement</code> 和 <code>onTimer</code> 都提供了一个上下文对象，该对象可用于与 <code>TimerService</code> 交互。 这两个回调还传递了一个可用于发出结果的 <code>Collector</code>。</li></ul><h4 id="open-方法" tabindex="-1"><a class="header-anchor" href="#open-方法" aria-hidden="true">#</a> <code>open()</code> 方法</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 每个窗口都持有托管的 Keyed state 的入口，并且根据窗口的结束时间执行 keyed 策略。</span>
<span class="token comment">// 每个司机都有一个单独的MapState对象。</span>
<span class="token keyword">private</span> <span class="token keyword">transient</span> <span class="token class-name">MapState</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">Float</span><span class="token punctuation">&gt;</span></span> sumOfTips<span class="token punctuation">;</span>

<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token class-name">Configuration</span> conf<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token class-name">MapStateDescriptor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">Float</span><span class="token punctuation">&gt;</span></span> sumDesc <span class="token operator">=</span>
            <span class="token keyword">new</span> <span class="token class-name">MapStateDescriptor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;sumOfTips&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">Float</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sumOfTips <span class="token operator">=</span> <span class="token function">getRuntimeContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMapState</span><span class="token punctuation">(</span>sumDesc<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于票价事件（fare-event）可能会乱序到达，有时需要在计算输出前一个小时结果前，处理下一个小时的事件。 这样能够保证“乱序造成的延迟数据”得到正确处理（放到前一个小时中）。 实际上，如果 Watermark 延迟比窗口长度长得多，则可能有多个窗口同时打开，而不仅仅是两个。 此实现通过使用 <code>MapState</code> 来支持处理这一点，该 <code>MapState</code> 将每个窗口的结束时间戳映射到该窗口的小费总和。</p><h4 id="processelement-方法" tabindex="-1"><a class="header-anchor" href="#processelement-方法" aria-hidden="true">#</a> <code>processElement()</code> 方法</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">processElement</span><span class="token punctuation">(</span>
        <span class="token class-name">TaxiFare</span> fare<span class="token punctuation">,</span>
        <span class="token class-name">Context</span> ctx<span class="token punctuation">,</span>
        <span class="token class-name">Collector</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Tuple3</span><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">Float</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> out<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>

    <span class="token keyword">long</span> eventTime <span class="token operator">=</span> fare<span class="token punctuation">.</span><span class="token function">getEventTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">TimerService</span> timerService <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">timerService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>eventTime <span class="token operator">&lt;=</span> timerService<span class="token punctuation">.</span><span class="token function">currentWatermark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 事件延迟；其对应的窗口已经触发。</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 将 eventTime 向上取值并将结果赋值到包含当前事件的窗口的末尾时间点。</span>
        <span class="token keyword">long</span> endOfWindow <span class="token operator">=</span> <span class="token punctuation">(</span>eventTime <span class="token operator">-</span> <span class="token punctuation">(</span>eventTime <span class="token operator">%</span> durationMsec<span class="token punctuation">)</span> <span class="token operator">+</span> durationMsec <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 在窗口完成时将启用回调</span>
        timerService<span class="token punctuation">.</span><span class="token function">registerEventTimeTimer</span><span class="token punctuation">(</span>endOfWindow<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 将此票价的小费添加到该窗口的总计中。</span>
        <span class="token class-name">Float</span> sum <span class="token operator">=</span> sumOfTips<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>endOfWindow<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sum <span class="token operator">=</span> <span class="token number">0.0F</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        sum <span class="token operator">+=</span> fare<span class="token punctuation">.</span>tip<span class="token punctuation">;</span>
        sumOfTips<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>endOfWindow<span class="token punctuation">,</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要考虑的事项：</p>`,14),v={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/learn-flink/event_driven/#side-outputs",target:"_blank",rel:"noopener noreferrer"},b=n("li",null,[s("本例使用一个 "),n("code",null,"MapState"),s("，其中 keys 是时间戳（timestamp），并为同一时间戳设置一个 Timer。 这是一种常见的模式；它使得在 Timer 触发时查找相关信息变得简单高效。")],-1),h=t(`<h4 id="ontimer-方法" tabindex="-1"><a class="header-anchor" href="#ontimer-方法" aria-hidden="true">#</a> <code>onTimer()</code> 方法</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onTimer</span><span class="token punctuation">(</span>
        <span class="token keyword">long</span> timestamp<span class="token punctuation">,</span>
        <span class="token class-name">OnTimerContext</span> context<span class="token punctuation">,</span>
        <span class="token class-name">Collector</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Tuple3</span><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">Float</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> out<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>

    <span class="token keyword">long</span> driverId <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getCurrentKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 查找刚结束的一小时结果。</span>
    <span class="token class-name">Float</span> sumOfTips <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sumOfTips<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>timestamp<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Tuple3</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">Float</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> <span class="token class-name">Tuple3</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>driverId<span class="token punctuation">,</span> timestamp<span class="token punctuation">,</span> sumOfTips<span class="token punctuation">)</span><span class="token punctuation">;</span>
    out<span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sumOfTips<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>timestamp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ul><li>传递给 <code>onTimer</code> 的 <code>OnTimerContext context</code> 可用于确定当前 key。</li><li>我们的 pseudo-windows 在当前 Watermark 到达每小时结束时触发，此时调用 <code>onTimer</code>。 这个 <code>onTimer</code> 方法从 <code>sumOfTips</code> 中删除相关的条目，这样做的效果是不可能容纳延迟的事件。 这相当于在使用 Flink 的时间窗口时将 allowedLateness 设置为零。</li></ul><h3 id="性能考虑" tabindex="-1"><a class="header-anchor" href="#性能考虑" aria-hidden="true">#</a> 性能考虑</h3><p>Flink 提供了为 RocksDB 优化的 <code>MapState</code> 和 <code>ListState</code> 类型。 相对于 <code>ValueState</code>，更建议使用 <code>MapState</code> 和 <code>ListState</code>，因为使用 RocksDBStateBackend 的情况下， <code>MapState</code> 和 <code>ListState</code> 比 <code>ValueState</code> 性能更好。 RocksDBStateBackend 可以附加到 <code>ListState</code>，而无需进行（反）序列化， 对于 <code>MapState</code>，每个 key/value 都是一个单独的 RocksDB 对象，因此可以有效地访问和更新 <code>MapState</code>。</p><h2 id="旁路输出-side-outputs" tabindex="-1"><a class="header-anchor" href="#旁路输出-side-outputs" aria-hidden="true">#</a> 旁路输出（Side Outputs）</h2><h3 id="简介-1" tabindex="-1"><a class="header-anchor" href="#简介-1" aria-hidden="true">#</a> 简介</h3><p>有几个很好的理由希望从 Flink 算子获得多个输出流，如下报告条目：</p><ul><li>异常情况（exceptions）</li><li>格式错误的事件（malformed events）</li><li>延迟的事件（late events）</li><li>operator 告警（operational alerts），如与外部服务的连接超时</li></ul><p>旁路输出（Side outputs）是一种方便的方法。除了错误报告之外，旁路输出也是实现流的 n 路分割的好方法。</p><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h3><p>现在你可以对上一节中忽略的延迟事件执行某些操作。</p><p>Side output channel 与 <code>OutputTag&lt;T&gt;</code> 相关联。这些标记拥有自己的名称，并与对应 DataStream 类型一致。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">OutputTag</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TaxiFare</span><span class="token punctuation">&gt;</span></span> lateFares <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OutputTag</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TaxiFare</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;lateFares&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面显示的是一个静态 <code>OutputTag&lt;TaxiFare&gt;</code> ，当在 <code>PseudoWindow</code> 的 <code>processElement</code> 方法中发出延迟事件时，可以引用它：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>eventTime <span class="token operator">&lt;=</span> timerService<span class="token punctuation">.</span><span class="token function">currentWatermark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 事件延迟，其对应的窗口已经触发。</span>
    ctx<span class="token punctuation">.</span><span class="token function">output</span><span class="token punctuation">(</span>lateFares<span class="token punctuation">,</span> fare<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span> <span class="token punctuation">.</span> <span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以及当在作业的 <code>main</code> 中从该旁路输出访问流时：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 计算每个司机每小时的小费总和</span>
<span class="token class-name">SingleOutputStreamOperator</span> hourlyTips <span class="token operator">=</span> fares
        <span class="token punctuation">.</span><span class="token function">keyBy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">TaxiFare</span> fare<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> fare<span class="token punctuation">.</span>driverId<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PseudoWindow</span><span class="token punctuation">(</span><span class="token class-name">Time</span><span class="token punctuation">.</span><span class="token function">hours</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

hourlyTips<span class="token punctuation">.</span><span class="token function">getSideOutput</span><span class="token punctuation">(</span>lateFares<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者，可以使用两个同名的 OutputTag 来引用同一个旁路输出，但如果这样做，它们必须具有相同的类型。</p><h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语" aria-hidden="true">#</a> 结语</h2><p>在本例中，你已经了解了如何使用 <code>ProcessFunction</code> 重新实现一个简单的时间窗口。 当然，如果 Flink 内置的窗口 API 能够满足你的开发需求，那么一定要优先使用它。 但如果你发现自己在考虑用 Flink 的窗口做些错综复杂的事情，不要害怕自己动手。</p><p>此外，<code>ProcessFunctions</code> 对于计算分析之外的许多其他用例也很有用。 下面的实践练习提供了一个完全不同的例子。</p>`,23),g=n("code",null,"ProcessFunctions",-1),f={href:"https://github.com/apache/flink-training/blob/release-1.14//rides-and-fares",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,"RichCoFlatMapFunction",-1),w=n("code",null,"rideId",-1),y=n("code",null,"rideId",-1),x=n("code",null,"KeyedCoProcessFunction",-1),F=n("code",null,"RichCoFlatMapFunction",-1),_=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),S={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/",target:"_blank",rel:"noopener noreferrer"};function O(L,j){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[s("如果你已经体验了 "),n("a",d,[s("流式分析训练"),e(a)]),s(" 的"),n("a",r,[s("动手实践"),e(a)]),s("， 你应该记得，它是采用 "),k,s(" 来计算每个小时内每个司机的小费总和， 像下面的示例这样：")]),m,n("ul",null,[n("li",null,[s("延迟的事件怎么处理？watermark 后面的事件（即延迟的）正在被删除。 如果你想做一些比这更高级的操作，可以考虑使用旁路输出（Side outputs），这将在"),n("a",v,[s("下一节"),e(a)]),s("中解释。")]),b]),h,n("p",null,[g,s(" 的另一个常见用例是清理过时 State。如果你回想一下 "),n("a",f,[s("Rides and Fares Exercise "),e(a)]),s("， 其中使用 "),T,s(" 来计算简单 Join，那么示例方案假设 TaxiRides 和 TaxiFares 两个事件是严格匹配为一个有效 数据对（必须同时出现）并且每一组这样的有效数据对都和一个唯一的 "),w,s(" 严格对应。如果数据对中的某个 TaxiRides 事件（TaxiFares 事件） 丢失，则同一 "),y,s(" 对应的另一个出现的 TaxiFares 事件（TaxiRides 事件）对应的 State 则永远不会被清理掉。 所以这里可以使用 "),x,s(" 的实现代替它（"),F,s("），并且可以使用计时器来检测和清除任何过时 的 State。")]),_,n("ul",null,[n("li",null,[n("a",S,[s("Flink 官方文档"),e(a)])])])])}const C=p(i,[["render",O],["__file","04.Flink事件驱动.html.vue"]]);export{C as default};
