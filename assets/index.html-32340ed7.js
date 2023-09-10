import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c,a as n,b as s,e,f as t}from"./app-eab0d091.js";const l={},r=t('<h1 id="jmh-快速入门" tabindex="-1"><a class="header-anchor" href="#jmh-快速入门" aria-hidden="true">#</a> JMH 快速入门</h1><h2 id="基准测试简介" tabindex="-1"><a class="header-anchor" href="#基准测试简介" aria-hidden="true">#</a> 基准测试简介</h2><h3 id="什么是基准测试" tabindex="-1"><a class="header-anchor" href="#什么是基准测试" aria-hidden="true">#</a> 什么是基准测试</h3><p>基准测试是指通过设计科学的测试方法、测试工具和测试系统，实现对一类测试对象的某项性能指标进行定量的和可对比的测试。</p><p>现代软件常常都把高性能作为目标。那么，何为高性能，性能就是快，更快吗？显然，如果没有一个量化的标准，难以衡量性能的好坏。</p><p>不同的基准测试其具体内容和范围也存在很大的不同。如果是专业的性能工程师，更加熟悉的可能是类似 SPEC 提供的工业标准的系统级测试；而对于大多数 Java 开发者，更熟悉的则是范围相对较小、关注点更加细节的微基准测试（Micro-Benchmark）。何谓 Micro Benchmark 呢？ 简单地说就是在 method 层面上的 benchmark，精度可以精确到 <strong>微秒级</strong>。</p><h3 id="何时需要微基准测试" tabindex="-1"><a class="header-anchor" href="#何时需要微基准测试" aria-hidden="true">#</a> 何时需要微基准测试</h3><p>微基准测试大多是 API 级别的性能测试。</p><p>微基准测试的适用场景：</p><ul><li>如果开发公共类库、中间件，会被其他模块经常调用的 API。</li><li>对于性能，如响应延迟、吞吐量有严格要求的核心 API。</li></ul><h2 id="jmh-简介" tabindex="-1"><a class="header-anchor" href="#jmh-简介" aria-hidden="true">#</a> JMH 简介</h2>',11),u={href:"http://openjdk.java.net/projects/code-tools/jmh/",target:"_blank",rel:"noopener noreferrer"},d=t('<h3 id="为什么需要-jmh" tabindex="-1"><a class="header-anchor" href="#为什么需要-jmh" aria-hidden="true">#</a> 为什么需要 JMH</h3><h4 id="死码消除" tabindex="-1"><a class="header-anchor" href="#死码消除" aria-hidden="true">#</a> 死码消除</h4><p>所谓死码，是指注释的代码，不可达的代码块，可达但不被使用的代码等等 。</p><h4 id="常量折叠与常量传播" tabindex="-1"><a class="header-anchor" href="#常量折叠与常量传播" aria-hidden="true">#</a> 常量折叠与常量传播</h4>',4),m={href:"https://zh.wikipedia.org/wiki/%E5%B8%B8%E6%95%B8%E6%8A%98%E7%96%8A#%E5%B8%B8%E6%95%B8%E5%82%B3%E6%92%AD",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"2",-1),v=t(`<h3 id="jmh-的注意点" tabindex="-1"><a class="header-anchor" href="#jmh-的注意点" aria-hidden="true">#</a> JMH 的注意点</h3><ul><li>测试前需要预热。</li><li>防止无用代码进入测试方法中。</li><li>并发测试。</li><li>测试结果呈现。</li></ul><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3><ol><li>当你已经找出了热点函数，而需要对热点函数进行进一步的优化时，就可以使用 JMH 对优化的效果进行定量的分析。</li><li>想定量地知道某个函数需要执行多长时间，以及执行时间和输入 n 的相关性</li><li>一个函数有两种不同实现（例如 JSON 序列化/反序列化有 Jackson 和 Gson 实现），不知道哪种实现性能更好</li></ol><h3 id="jmh-概念" tabindex="-1"><a class="header-anchor" href="#jmh-概念" aria-hidden="true">#</a> JMH 概念</h3><ul><li><code>Iteration</code> - iteration 是 JMH 进行测试的最小单位，包含一组 invocations。</li><li><code>Invocation</code> - 一次 benchmark 方法调用。</li><li><code>Operation</code> - benchmark 方法中，被测量操作的执行。如果被测试的操作在 benchmark 方法中循环执行，可以使用<code>@OperationsPerInvocation</code>表明循环次数，使测试结果为单次 operation 的性能。</li><li><code>Warmup</code> - 在实际进行 benchmark 前先进行预热。因为某个函数被调用多次之后，JIT 会对其进行编译，通过预热可以使测量结果更加接近真实情况。</li></ul><h2 id="jmh-快速入门-1" tabindex="-1"><a class="header-anchor" href="#jmh-快速入门-1" aria-hidden="true">#</a> JMH 快速入门</h2><h3 id="添加-maven-依赖" tabindex="-1"><a class="header-anchor" href="#添加-maven-依赖" aria-hidden="true">#</a> 添加 maven 依赖</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openjdk.jmh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jmh-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${jmh.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openjdk.jmh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jmh-generator-annprocess<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${jmh.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试代码" tabindex="-1"><a class="header-anchor" href="#测试代码" aria-hidden="true">#</a> 测试代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openjdk<span class="token punctuation">.</span>jmh<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openjdk<span class="token punctuation">.</span>jmh<span class="token punctuation">.</span>runner<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@BenchmarkMode</span><span class="token punctuation">(</span><span class="token class-name">Mode<span class="token punctuation">.</span>Throughput</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Warmup</span><span class="token punctuation">(</span>iterations <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Measurement</span><span class="token punctuation">(</span>iterations <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> time <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> timeUnit <span class="token operator">=</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Threads</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Fork</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@OutputTimeUnit</span><span class="token punctuation">(</span><span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MILLISECONDS</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StringBuilderBenchmark</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Benchmark</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testStringAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> a <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            a <span class="token operator">+=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// System.out.println(a);</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Benchmark</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testStringBuilderAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// System.out.println(sb.toString());</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">RunnerException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Options</span> options <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OptionsBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">include</span><span class="token punctuation">(</span><span class="token class-name">StringBuilderBenchmark</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getSimpleName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">output</span><span class="token punctuation">(</span><span class="token string">&quot;d:/Benchmark.log&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Runner</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行-jmh" tabindex="-1"><a class="header-anchor" href="#执行-jmh" aria-hidden="true">#</a> 执行 JMH</h3><h4 id="命令行" tabindex="-1"><a class="header-anchor" href="#命令行" aria-hidden="true">#</a> 命令行</h4><p>（1）初始化 <strong>benchmarking</strong> 工程</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ mvn archetype:generate <span class="token punctuation">\\</span>
          <span class="token parameter variable">-DinteractiveMode</span><span class="token operator">=</span>false <span class="token punctuation">\\</span>
          <span class="token parameter variable">-DarchetypeGroupId</span><span class="token operator">=</span>org.openjdk.jmh <span class="token punctuation">\\</span>
          <span class="token parameter variable">-DarchetypeArtifactId</span><span class="token operator">=</span>jmh-java-benchmark-archetype <span class="token punctuation">\\</span>
          <span class="token parameter variable">-DgroupId</span><span class="token operator">=</span>org.sample <span class="token punctuation">\\</span>
          <span class="token parameter variable">-DartifactId</span><span class="token operator">=</span>test <span class="token punctuation">\\</span>
          <span class="token parameter variable">-Dversion</span><span class="token operator">=</span><span class="token number">1.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）构建 benchmark</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> test/
mvn clean <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）运行 benchmark</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> target/benchmarks.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="执行-main-方法" tabindex="-1"><a class="header-anchor" href="#执行-main-方法" aria-hidden="true">#</a> 执行 main 方法</h4><p>执行 main 方法，耐心等待测试结果，最终会生成一个测试报告，内容大致如下；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># JMH version: 1.22</span>
<span class="token comment"># VM version: JDK 1.8.0_181, Java HotSpot(TM) 64-Bit Server VM, 25.181-b13</span>
<span class="token comment"># VM invoker: C:\\Program Files\\Java\\jdk1.8.0_181\\jre\\bin\\java.exe</span>
<span class="token comment"># VM options: -javaagent:D:\\Program Files\\JetBrains\\IntelliJ IDEA 2019.2.3\\lib\\idea_rt.jar=58635:D:\\Program Files\\JetBrains\\IntelliJ IDEA 2019.2.3\\bin -Dfile.encoding=UTF-8</span>
<span class="token comment"># Warmup: 3 iterations, 10 s each</span>
<span class="token comment"># Measurement: 10 iterations, 5 s each</span>
<span class="token comment"># Timeout: 10 min per iteration</span>
<span class="token comment"># Threads: 8 threads, will synchronize iterations</span>
<span class="token comment"># Benchmark mode: Throughput, ops/time</span>
<span class="token comment"># Benchmark: io.github.dunwu.javatech.jmh.StringBuilderBenchmark.testStringAdd</span>

<span class="token comment"># Run progress: 0.00% complete, ETA 00:05:20</span>
<span class="token comment"># Fork: 1 of 2</span>
<span class="token comment"># Warmup Iteration   1: 21803.050 ops/ms</span>
<span class="token comment"># Warmup Iteration   2: 22501.860 ops/ms</span>
<span class="token comment"># Warmup Iteration   3: 20953.944 ops/ms</span>
Iteration   <span class="token number">1</span>: <span class="token number">21627.645</span> ops/ms
Iteration   <span class="token number">2</span>: <span class="token number">21215.269</span> ops/ms
Iteration   <span class="token number">3</span>: <span class="token number">20863.282</span> ops/ms
Iteration   <span class="token number">4</span>: <span class="token number">21617.715</span> ops/ms
Iteration   <span class="token number">5</span>: <span class="token number">21695.645</span> ops/ms
Iteration   <span class="token number">6</span>: <span class="token number">21886.784</span> ops/ms
Iteration   <span class="token number">7</span>: <span class="token number">21986.899</span> ops/ms
Iteration   <span class="token number">8</span>: <span class="token number">22389.540</span> ops/ms
Iteration   <span class="token number">9</span>: <span class="token number">22507.313</span> ops/ms
Iteration  <span class="token number">10</span>: <span class="token number">22124.133</span> ops/ms

<span class="token comment"># Run progress: 25.00% complete, ETA 00:04:02</span>
<span class="token comment"># Fork: 2 of 2</span>
<span class="token comment"># Warmup Iteration   1: 22262.108 ops/ms</span>
<span class="token comment"># Warmup Iteration   2: 21567.804 ops/ms</span>
<span class="token comment"># Warmup Iteration   3: 21787.002 ops/ms</span>
Iteration   <span class="token number">1</span>: <span class="token number">21598.970</span> ops/ms
Iteration   <span class="token number">2</span>: <span class="token number">22486.133</span> ops/ms
Iteration   <span class="token number">3</span>: <span class="token number">22157.834</span> ops/ms
Iteration   <span class="token number">4</span>: <span class="token number">22321.827</span> ops/ms
Iteration   <span class="token number">5</span>: <span class="token number">22477.063</span> ops/ms
Iteration   <span class="token number">6</span>: <span class="token number">22154.760</span> ops/ms
Iteration   <span class="token number">7</span>: <span class="token number">21561.095</span> ops/ms
Iteration   <span class="token number">8</span>: <span class="token number">22194.863</span> ops/ms
Iteration   <span class="token number">9</span>: <span class="token number">22493.844</span> ops/ms
Iteration  <span class="token number">10</span>: <span class="token number">22568.078</span> ops/ms


Result <span class="token string">&quot;io.github.dunwu.javatech.jmh.StringBuilderBenchmark.testStringAdd&quot;</span><span class="token builtin class-name">:</span>
  <span class="token number">21996.435</span> ±<span class="token punctuation">(</span><span class="token number">99.9</span>%<span class="token punctuation">)</span> <span class="token number">412.955</span> ops/ms <span class="token punctuation">[</span>Average<span class="token punctuation">]</span>
  <span class="token punctuation">(</span>min, avg, max<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">20863.282</span>, <span class="token number">21996.435</span>, <span class="token number">22568.078</span><span class="token punctuation">)</span>, stdev <span class="token operator">=</span> <span class="token number">475.560</span>
  CI <span class="token punctuation">(</span><span class="token number">99.9</span>%<span class="token punctuation">)</span>: <span class="token punctuation">[</span><span class="token number">21583.480</span>, <span class="token number">22409.390</span><span class="token punctuation">]</span> <span class="token punctuation">(</span>assumes normal distribution<span class="token punctuation">)</span>


<span class="token comment"># JMH version: 1.22</span>
<span class="token comment"># VM version: JDK 1.8.0_181, Java HotSpot(TM) 64-Bit Server VM, 25.181-b13</span>
<span class="token comment"># VM invoker: C:\\Program Files\\Java\\jdk1.8.0_181\\jre\\bin\\java.exe</span>
<span class="token comment"># VM options: -javaagent:D:\\Program Files\\JetBrains\\IntelliJ IDEA 2019.2.3\\lib\\idea_rt.jar=58635:D:\\Program Files\\JetBrains\\IntelliJ IDEA 2019.2.3\\bin -Dfile.encoding=UTF-8</span>
<span class="token comment"># Warmup: 3 iterations, 10 s each</span>
<span class="token comment"># Measurement: 10 iterations, 5 s each</span>
<span class="token comment"># Timeout: 10 min per iteration</span>
<span class="token comment"># Threads: 8 threads, will synchronize iterations</span>
<span class="token comment"># Benchmark mode: Throughput, ops/time</span>
<span class="token comment"># Benchmark: io.github.dunwu.javatech.jmh.StringBuilderBenchmark.testStringBuilderAdd</span>

<span class="token comment"># Run progress: 50.00% complete, ETA 00:02:41</span>
<span class="token comment"># Fork: 1 of 2</span>
<span class="token comment"># Warmup Iteration   1: 241500.886 ops/ms</span>
<span class="token comment"># Warmup Iteration   2: 134206.032 ops/ms</span>
<span class="token comment"># Warmup Iteration   3: 86907.846 ops/ms</span>
Iteration   <span class="token number">1</span>: <span class="token number">86143.339</span> ops/ms
Iteration   <span class="token number">2</span>: <span class="token number">74725.356</span> ops/ms
Iteration   <span class="token number">3</span>: <span class="token number">72316.121</span> ops/ms
Iteration   <span class="token number">4</span>: <span class="token number">77319.716</span> ops/ms
Iteration   <span class="token number">5</span>: <span class="token number">83469.256</span> ops/ms
Iteration   <span class="token number">6</span>: <span class="token number">87712.360</span> ops/ms
Iteration   <span class="token number">7</span>: <span class="token number">79421.899</span> ops/ms
Iteration   <span class="token number">8</span>: <span class="token number">80867.839</span> ops/ms
Iteration   <span class="token number">9</span>: <span class="token number">82619.163</span> ops/ms
Iteration  <span class="token number">10</span>: <span class="token number">87026.928</span> ops/ms

<span class="token comment"># Run progress: 75.00% complete, ETA 00:01:20</span>
<span class="token comment"># Fork: 2 of 2</span>
<span class="token comment"># Warmup Iteration   1: 228342.337 ops/ms</span>
<span class="token comment"># Warmup Iteration   2: 124737.248 ops/ms</span>
<span class="token comment"># Warmup Iteration   3: 82598.851 ops/ms</span>
Iteration   <span class="token number">1</span>: <span class="token number">86877.318</span> ops/ms
Iteration   <span class="token number">2</span>: <span class="token number">89388.624</span> ops/ms
Iteration   <span class="token number">3</span>: <span class="token number">88523.558</span> ops/ms
Iteration   <span class="token number">4</span>: <span class="token number">87547.332</span> ops/ms
Iteration   <span class="token number">5</span>: <span class="token number">88376.087</span> ops/ms
Iteration   <span class="token number">6</span>: <span class="token number">88848.837</span> ops/ms
Iteration   <span class="token number">7</span>: <span class="token number">85998.124</span> ops/ms
Iteration   <span class="token number">8</span>: <span class="token number">86796.998</span> ops/ms
Iteration   <span class="token number">9</span>: <span class="token number">87994.726</span> ops/ms
Iteration  <span class="token number">10</span>: <span class="token number">87784.453</span> ops/ms


Result <span class="token string">&quot;io.github.dunwu.javatech.jmh.StringBuilderBenchmark.testStringBuilderAdd&quot;</span><span class="token builtin class-name">:</span>
  <span class="token number">84487.902</span> ±<span class="token punctuation">(</span><span class="token number">99.9</span>%<span class="token punctuation">)</span> <span class="token number">4355.525</span> ops/ms <span class="token punctuation">[</span>Average<span class="token punctuation">]</span>
  <span class="token punctuation">(</span>min, avg, max<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">72316.121</span>, <span class="token number">84487.902</span>, <span class="token number">89388.624</span><span class="token punctuation">)</span>, stdev <span class="token operator">=</span> <span class="token number">5015.829</span>
  CI <span class="token punctuation">(</span><span class="token number">99.9</span>%<span class="token punctuation">)</span>: <span class="token punctuation">[</span><span class="token number">80132.377</span>, <span class="token number">88843.427</span><span class="token punctuation">]</span> <span class="token punctuation">(</span>assumes normal distribution<span class="token punctuation">)</span>


<span class="token comment"># Run complete. Total time: 00:05:23</span>

REMEMBER: The numbers below are just data. To gain reusable insights, you need to follow up on
why the numbers are the way they are. Use profilers <span class="token punctuation">(</span>see -prof, -lprof<span class="token punctuation">)</span>, design factorial
experiments, perform baseline and negative tests that provide experimental control, <span class="token function">make</span> sure
the benchmarking environment is safe on JVM/OS/HW level, ask <span class="token keyword">for</span> reviews from the domain experts.
Do not assume the numbers tell you what you want them to tell.

Benchmark                                     Mode  Cnt      Score      Error   Units
StringBuilderBenchmark.testStringAdd         thrpt   <span class="token number">20</span>  <span class="token number">21996.435</span> ±  <span class="token number">412.955</span>  ops/ms
StringBuilderBenchmark.testStringBuilderAdd  thrpt   <span class="token number">20</span>  <span class="token number">84487.902</span> ± <span class="token number">4355.525</span>  ops/ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jmh-api" tabindex="-1"><a class="header-anchor" href="#jmh-api" aria-hidden="true">#</a> JMH API</h2><p>下面来了解一下 jmh 常用 API</p><h3 id="benchmarkmode" tabindex="-1"><a class="header-anchor" href="#benchmarkmode" aria-hidden="true">#</a> @BenchmarkMode</h3><p>基准测试类型。这里选择的是 <code>Throughput</code> 也就是吞吐量。根据源码点进去，每种类型后面都有对应的解释，比较好理解，吞吐量会得到单位时间内可以进行的操作数。</p><ul><li><code>Throughput</code> - 整体吞吐量，例如“1 秒内可以执行多少次调用”。</li><li><code>AverageTime</code> - 调用的平均时间，例如“每次调用平均耗时 xxx 毫秒”。</li><li><code>SampleTime</code> - 随机取样，最后输出取样结果的分布，例如“99%的调用在 xxx 毫秒以内，99.99%的调用在 xxx 毫秒以内”</li><li><code>SingleShotTime</code> - 以上模式都是默认一次 iteration 是 1s，唯有 SingleShotTime 是只运行一次。往往同时把 warmup 次数设为 0，用于测试冷启动时的性能。</li><li><code>All</code> - 所有模式</li></ul><h3 id="warmup" tabindex="-1"><a class="header-anchor" href="#warmup" aria-hidden="true">#</a> @Warmup</h3><p>上面我们提到了，进行基准测试前需要进行预热。一般我们前几次进行程序测试的时候都会比较慢， 所以要让程序进行几轮预热，保证测试的准确性。其中的参数 iterations 也就非常好理解了，就是预热轮数。</p><p>为什么需要预热？因为 JVM 的 JIT 机制的存在，如果某个函数被调用多次之后，JVM 会尝试将其编译成为机器码从而提高执行速度。所以为了让 benchmark 的结果更加接近真实情况就需要进行预热。</p><h3 id="measurement" tabindex="-1"><a class="header-anchor" href="#measurement" aria-hidden="true">#</a> @Measurement</h3><p>度量，其实就是一些基本的测试参数。</p><ul><li><code>iterations</code> - 进行测试的轮次</li><li><code>time</code> - 每轮进行的时长</li><li><code>timeUnit</code> - 时长单位</li></ul><p>都是一些基本的参数，可以根据具体情况调整。一般比较重的东西可以进行大量的测试，放到服务器上运行。</p><h3 id="threads" tabindex="-1"><a class="header-anchor" href="#threads" aria-hidden="true">#</a> @Threads</h3><p>每个进程中的测试线程，这个非常好理解，根据具体情况选择，一般为 cpu 乘以 2。</p><h3 id="fork" tabindex="-1"><a class="header-anchor" href="#fork" aria-hidden="true">#</a> @Fork</h3><p>进行 fork 的次数。如果 fork 数是 2 的话，则 JMH 会 fork 出两个进程来进行测试。</p><h3 id="outputtimeunit" tabindex="-1"><a class="header-anchor" href="#outputtimeunit" aria-hidden="true">#</a> @OutputTimeUnit</h3><p>这个比较简单了，基准测试结果的时间类型。一般选择秒、毫秒、微秒。</p><h3 id="benchmark" tabindex="-1"><a class="header-anchor" href="#benchmark" aria-hidden="true">#</a> @Benchmark</h3><p>方法级注解，表示该方法是需要进行 benchmark 的对象，用法和 JUnit 的 @Test 类似。</p><h3 id="param" tabindex="-1"><a class="header-anchor" href="#param" aria-hidden="true">#</a> @Param</h3><p>属性级注解，@Param 可以用来指定某项参数的多种情况。特别适合用来测试一个函数在不同的参数输入的情况下的性能。</p><h3 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> @Setup</h3><p>方法级注解，这个注解的作用就是我们需要在测试之前进行一些准备工作，比如对一些数据的初始化之类的。</p><h3 id="teardown" tabindex="-1"><a class="header-anchor" href="#teardown" aria-hidden="true">#</a> @TearDown</h3><p>方法级注解，这个注解的作用就是我们需要在测试之后进行一些结束工作，比如关闭线程池，数据库连接等的，主要用于资源的回收等。</p><h3 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> @State</h3><p>当使用 @Setup 参数的时候，必须在类上加这个参数，不然会提示无法运行。</p><p>State 用于声明某个类是一个“状态”，然后接受一个 Scope 参数用来表示该状态的共享范围。 因为很多 benchmark 会需要一些表示状态的类，JMH 允许你把这些类以依赖注入的方式注入到 benchmark 函数里。Scope 主要分为三种。</p><ul><li><code>Thread</code> - 该状态为每个线程独享。</li><li><code>Group</code> - 该状态为同一个组里面所有线程共享。</li><li><code>Benchmark</code> - 该状态在所有线程间共享。</li></ul>`,52),b={href:"http://hg.openjdk.java.net/code-tools/jmh/file/cb9aa824b55a/jmh-samples/src/main/java/org/openjdk/jmh/samples/JMHSample_03_States.java",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),g={href:"http://hg.openjdk.java.net/code-tools/jmh/file/tip/jmh-samples/src/main/java/org/openjdk/jmh/samples/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.xncoding.com/2018/01/07/java/jmh.html",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.cnkirito.moe/java-jmh/",target:"_blank",rel:"noopener noreferrer"};function j(x,B){const a=o("ExternalLinkIcon");return i(),c("div",null,[r,n("p",null,[n("a",u,[s("JMH(即 Java Microbenchmark Harness)"),e(a)]),s("，是目前主流的微基准测试框架。JMH 是由 Hotspot JVM 团队专家开发的，除了支持完整的基准测试过程，包括预热、运行、统计和报告等，还支持 Java 和其他 JVM 语言。更重要的是，它针对 Hotspot JVM 提供了各种特性，以保证基准测试的正确性，整体准确性大大优于其他框架，并且，JMH 还提供了用近乎白盒的方式进行 Profiling 等工作的能力。")]),d,n("p",null,[n("a",m,[s("常量折叠"),e(a)]),s(" (Constant folding) 是一个在编译时期简化常数的一个过程，常数在表示式中仅仅代表一个简单的数值，就像是整数 "),k,s("，若是一个变数从未被修改也可作为常数，或者直接将一个变数被明确地被标注为常数，例如下面的描述：")]),v,n("p",null,[s("关于 State 的用法，官方的 code sample 里有比较好的"),n("a",b,[s("例子"),e(a)]),s("。")]),h,n("ul",null,[n("li",null,[n("a",g,[s("jmh 官方示例"),e(a)])]),n("li",null,[n("a",f,[s("Java 微基准测试框架 JMH"),e(a)])]),n("li",null,[n("a",I,[s("JAVA 拾遗 — JMH 与 8 个测试陷阱"),e(a)])])])])}const S=p(l,[["render",j],["__file","index.html.vue"]]);export{S as default};
