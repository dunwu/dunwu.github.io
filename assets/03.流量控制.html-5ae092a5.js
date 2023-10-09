import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,a as n,b as s,d as t,e as l}from"./app-1f12e18b.js";const i={},u=l(`<h1 id="流量控制" tabindex="-1"><a class="header-anchor" href="#流量控制" aria-hidden="true">#</a> 流量控制</h1><blockquote><p>在高并发场景下，为了应对瞬时海量请求的压力，保障系统的平稳运行，必须预估系统的流量阈值，通过限流规则阻断处理不过来的请求。</p></blockquote><h2 id="限流简介" tabindex="-1"><a class="header-anchor" href="#限流简介" aria-hidden="true">#</a> 限流简介</h2><p>限流可以认为是服务降级的一种。限流就是<strong>限制系统的输入和输出流量已达到保护系统的目的</strong>。一般来说系统的吞吐量是可以被测算的，为了保证系统的稳定运行，一旦达到的需要限制的阈值，就需要限制流量并采取一些措施以完成限制流量的目的。比如：延迟处理，拒绝处理，或者部分拒绝处理等等。</p><p>限流规则包含三个部分：时间粒度，接口粒度，最大限流值。限流规则设置是否合理直接影响到限流是否合理有效。</p><h2 id="限流算法" tabindex="-1"><a class="header-anchor" href="#限流算法" aria-hidden="true">#</a> 限流算法</h2><h3 id="计数器法" tabindex="-1"><a class="header-anchor" href="#计数器法" aria-hidden="true">#</a> 计数器法</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210625174706.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>计数器法的<strong>原理</strong>是：设置一个计数器，用于统计指定时间段内的请求数量，并在指定时间段之后重置计数器。在这个过程中，如果请求量超过限定的阈值，则拒绝请求。</p><p>这种算法的缺陷是：这种算法是针对一个时间段进行统计，如果请求分布不均匀，极端情况下，<strong>所有请求都在某一刻收到，还是可能压垮系统</strong>。例如，假设我们限流规则为每秒钟不超过 100 次接口请求，第一个 1s 时间窗口内，100 次接口请求都集中在最后的 10ms 内，在第二个 1s 的时间窗口内，100 次接口请求都集中在最开始的 10ms 内，虽然两个时间窗口内流量都符合限流要求，但是在这两个时间窗口临界的 20ms 内会集中有 200 次接口请求，如果不做限流，集中在这 20ms 内的 200 次请求就有可能压垮系统。</p><p>【示例】使用 <code>AtomicInteger</code> 实现计数器法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 最大访问数量
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> limit <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 访问时间差
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">long</span> timeout <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 请求时间
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> time<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 当前计数器
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">AtomicInteger</span> reqCount <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">limit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> now <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>now <span class="token operator">&lt;</span> time <span class="token operator">+</span> timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 单位时间内</span>
            reqCount<span class="token punctuation">.</span><span class="token function">addAndGet</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> reqCount<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> limit<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 超出单位时间</span>
            time <span class="token operator">=</span> now<span class="token punctuation">;</span>
            reqCount <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【示例】基于 Redis Lua 计数限流算法的实现</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 实现原理</span>
<span class="token comment">-- 每次请求都将当前时间，精确到秒作为 key 放入 Redis 中，超时时间设置为 2s， Redis 将该 key 的值进行自增</span>
<span class="token comment">-- 当达到阈值时返回错误，表示请求被限流</span>
<span class="token comment">-- 写入 Redis 的操作用 Lua 脚本来完成，利用 Redis 的单线程机制可以保证每个 Redis 请求的原子性</span>

<span class="token comment">-- 资源唯一标志位</span>
<span class="token keyword">local</span> key <span class="token operator">=</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token comment">-- 限流大小</span>
<span class="token keyword">local</span> limit <span class="token operator">=</span> <span class="token function">tonumber</span><span class="token punctuation">(</span>ARGV<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">-- 获取当前流量大小</span>
<span class="token keyword">local</span> currentLimit <span class="token operator">=</span> <span class="token function">tonumber</span><span class="token punctuation">(</span>redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> currentLimit <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&gt;</span> limit <span class="token keyword">then</span>
    <span class="token comment">-- 达到限流大小 返回</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">else</span>
    <span class="token comment">-- 没有达到阈值 value + 1</span>
    redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;INCRBY&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token comment">-- 设置过期时间</span>
    redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;EXPIRE&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> currentLimit <span class="token operator">+</span> <span class="token number">1</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="滑动窗口法" tabindex="-1"><a class="header-anchor" href="#滑动窗口法" aria-hidden="true">#</a> 滑动窗口法</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210625180432.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>滑动窗口法的<strong>原理</strong>：</p><p>滑动窗口法是计数器算法的一种改进，<strong>增加一个时间粒度的度量单位，将原来的一个时间窗口划分成多个时间窗口，并且不断向右滑动该窗口</strong>。流量经过滑动时间窗口算法整形之后，可以保证任意时间窗口内，都不会超过最大允许的限流值，从流量曲线上来看会更加平滑，可以部分解决上面提到的临界突发流量问题。</p><p>对比固定时间窗口限流算法，滑动时间窗口限流算法的时间窗口是持续滑动的，并且除了需要一个计数器来记录时间窗口内接口请求次数之外，还需要记录在时间窗口内每个接口请求到达的时间点，对内存的占用会比较多。 在临界位置的突发请求都会被算到时间窗口内，因此可以解决计数器算法的临界问题，</p><p>比如在上文的例子中，通过滑动窗口算法整型后，第一个 1s 的时间窗口的 100 次请求都会通过，第二个时间窗口最开始的 10ms 内的 100 个请求都会被限流熔断。</p><p>滑动窗口法的<strong>缺陷</strong>：基于时间窗口的限流算法，<strong>只能在选定的时间粒度上限流，对选定时间粒度内的更加细粒度的访问频率不做限制</strong>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Iterator</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Random</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">ConcurrentLinkedQueue</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>stream<span class="token punctuation">.</span></span><span class="token class-name">IntStream</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TimeWindow</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">ConcurrentLinkedQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentLinkedQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 间隔秒数
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> seconds<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 最大限流
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> max<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">TimeWindow</span><span class="token punctuation">(</span><span class="token keyword">int</span> max<span class="token punctuation">,</span> <span class="token keyword">int</span> seconds<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>seconds <span class="token operator">=</span> seconds<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">=</span> max<span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * 永续线程执行清理queue 任务
         */</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 等待 间隔秒数-1 执行清理操作</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">(</span>seconds <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token function">clean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>

        <span class="token keyword">final</span> <span class="token class-name">TimeWindow</span> timeWindow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TimeWindow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 测试3个线程</span>
        <span class="token class-name">IntStream</span><span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>

                <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    timeWindow<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取令牌，并且添加时间
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>


        <span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>


            <span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token function">sizeOfValid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>size <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;超限&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>queue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">sizeOfValid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;超限&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;queue中有 &quot;</span> <span class="token operator">+</span> queue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; 最大数量 &quot;</span> <span class="token operator">+</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;queue中有 &quot;</span> <span class="token operator">+</span> queue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; 最大数量 &quot;</span> <span class="token operator">+</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">sizeOfValid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> it <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Long</span> ms <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> seconds <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">long</span> t <span class="token operator">=</span> it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>t <span class="token operator">&gt;</span> ms<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 在当前的统计时间范围内</span>
                count<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * 清理过期的时间
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">clean</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Long</span> c <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> seconds <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">;</span>

        <span class="token class-name">Long</span> tl <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>tl <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> tl <span class="token operator">&lt;</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;清理数据&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="漏桶法" tabindex="-1"><a class="header-anchor" href="#漏桶法" aria-hidden="true">#</a> 漏桶法</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210625164126.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>漏桶算法内部有一个容器，当请求进来时，相当于水倒入漏斗，然后从下端小口慢慢匀速的流出。不管上面流量多大，下面流出的速度始终保持不变。</p><p>漏桶算法的本质是，<strong>不管理请求量有多大，处理请求的速度始终是固定的</strong>。这种模式类似生活中的漏斗，上宽下窄。请求进来的速度是未知的，可能突然进来很多请求，没来得及处理的请求就先放在漏斗里。漏斗本身也有容量上限，如果桶满了，那么新进来的请求就丢弃。</p><p>漏桶算法的<strong>优点</strong>是：这种策略的好处是，做到了流量整形，即无论流量多大，即便是突发的大流量，输出依旧是一个稳定的流量。</p><p>漏桶算法的<strong>缺点</strong>是：无法应对短时间的突刺流量。</p><p><strong>漏桶策略适用于间隔性突发流量且流量不用即时处理的场景</strong>。</p><p>【示例】漏桶法实现</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LeakBucket</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 时间
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> time<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 总量
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Double</span> total<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 水流出去的速度
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Double</span> rate<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 当前总量
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Double</span> nowSize<span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">limit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> now <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        nowSize <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>nowSize <span class="token operator">-</span> <span class="token punctuation">(</span>now <span class="token operator">-</span> time<span class="token punctuation">)</span> <span class="token operator">*</span> rate<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        time <span class="token operator">=</span> now<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>nowSize <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> total<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            nowSize<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="令牌桶法" tabindex="-1"><a class="header-anchor" href="#令牌桶法" aria-hidden="true">#</a> 令牌桶法</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210625161944.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>令牌桶算法的<strong>原理</strong>：</p><ol><li>接口限制 T 秒内最大访问次数为 N，则每隔 T/N 秒会放一个 token 到桶中</li><li>桶内最多存放 M 个 token，如果 token 到达时令牌桶已经满了，那么这个 token 就会被丢弃</li><li>接口请求会先从令牌桶中取 token，拿到 token 则处理接口请求，拿不到 token 则进行限流处理</li></ol><p>因为令牌桶存放了很多令牌，那么大量的突发请求会被执行，但是它不会出现临界问题，在令牌用完之后，令牌是以一个恒定的速率添加到令牌桶中的，因此不能再次发送大量突发请求。</p><p>规定固定容量的桶，token 以固定速度往桶内填充，当桶满时 token 不会被继续放入，每过来一个请求把 token 从桶中移除,如果桶中没有 token 不能请求。</p><p><strong>令牌桶算法适用于有突发特性的流量，且流量需要即时处理的场景</strong>。</p><p>【示例】Java 实现令牌桶算法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TokenBucket</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 时间
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> time<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 总量
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Double</span> total<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * token 放入速度
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Double</span> rate<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 当前总量
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Double</span> nowSize<span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">limit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> now <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        nowSize <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>total<span class="token punctuation">,</span> nowSize <span class="token operator">+</span> <span class="token punctuation">(</span>now <span class="token operator">-</span> time<span class="token punctuation">)</span> <span class="token operator">*</span> rate<span class="token punctuation">)</span><span class="token punctuation">;</span>
        time <span class="token operator">=</span> now<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nowSize <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 桶里没有token</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 存在token</span>
            nowSize <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【示例】基于 Redis Lua 令牌桶限流算法实现</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 令牌桶限流</span>

<span class="token comment">-- 令牌的唯一标识</span>
<span class="token keyword">local</span> bucketKey <span class="token operator">=</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token comment">-- 上次请求的时间</span>
<span class="token keyword">local</span> last_mill_request_key <span class="token operator">=</span> KEYS<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token comment">-- 令牌桶的容量</span>
<span class="token keyword">local</span> limit <span class="token operator">=</span> <span class="token function">tonumber</span><span class="token punctuation">(</span>ARGV<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">-- 请求令牌的数量</span>
<span class="token keyword">local</span> permits <span class="token operator">=</span> <span class="token function">tonumber</span><span class="token punctuation">(</span>ARGV<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">-- 令牌流入的速率</span>
<span class="token keyword">local</span> rate <span class="token operator">=</span> <span class="token function">tonumber</span><span class="token punctuation">(</span>ARGV<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">-- 当前时间</span>
<span class="token keyword">local</span> curr_mill_time <span class="token operator">=</span> <span class="token function">tonumber</span><span class="token punctuation">(</span>ARGV<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">-- 添加令牌</span>

<span class="token comment">-- 获取当前令牌的数量</span>
<span class="token keyword">local</span> current_limit <span class="token operator">=</span> <span class="token function">tonumber</span><span class="token punctuation">(</span>redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> bucketKey<span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span>
<span class="token comment">-- 获取上次请求的时间</span>
<span class="token keyword">local</span> last_mill_request_time <span class="token operator">=</span> <span class="token function">tonumber</span><span class="token punctuation">(</span>redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> last_mill_request_key<span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span>
<span class="token comment">-- 计算向桶里添加令牌的数量</span>
<span class="token keyword">if</span> last_mill_request_time <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">then</span>
	<span class="token comment">-- 令牌桶初始化</span>
	<span class="token comment">-- 更新上次请求时间</span>
	redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;HSET&quot;</span><span class="token punctuation">,</span> last_mill_request_key<span class="token punctuation">,</span> curr_mill_time<span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token number">0</span>
<span class="token keyword">else</span>
	<span class="token keyword">local</span> add_token_num <span class="token operator">=</span> math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>curr_mill_time <span class="token operator">-</span> last_mill_request_time<span class="token punctuation">)</span> <span class="token operator">*</span> rate<span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token comment">-- 更新令牌的数量</span>
<span class="token keyword">if</span> current_limit <span class="token operator">+</span> add_token_num <span class="token operator">&gt;</span> limit <span class="token keyword">then</span>
    current_limit <span class="token operator">=</span> limit
<span class="token keyword">else</span>
	current_limit <span class="token operator">=</span> current_limit <span class="token operator">+</span> add_token_num
<span class="token keyword">end</span>
	redis<span class="token punctuation">.</span><span class="token function">pcall</span><span class="token punctuation">(</span><span class="token string">&quot;HSET&quot;</span><span class="token punctuation">,</span>bucketKey<span class="token punctuation">,</span> current_limit<span class="token punctuation">)</span>
<span class="token comment">-- 设置过期时间</span>
redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;EXPIRE&quot;</span><span class="token punctuation">,</span> bucketKey<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment">-- 限流判断</span>

<span class="token keyword">if</span> current_limit <span class="token operator">-</span> permits <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token keyword">then</span>
    <span class="token comment">-- 达到限流大小</span>
    <span class="token keyword">return</span> <span class="token number">0</span>
<span class="token keyword">else</span>
    <span class="token comment">-- 没有达到限流大小</span>
	current_limit <span class="token operator">=</span> current_limit <span class="token operator">-</span> permits
	redis<span class="token punctuation">.</span><span class="token function">pcall</span><span class="token punctuation">(</span><span class="token string">&quot;HSET&quot;</span><span class="token punctuation">,</span> bucketKey<span class="token punctuation">,</span> current_limit<span class="token punctuation">)</span>
    <span class="token comment">-- 设置过期时间</span>
    redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;EXPIRE&quot;</span><span class="token punctuation">,</span> bucketKey<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token comment">-- 更新上次请求的时间</span>
	redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;HSET&quot;</span><span class="token punctuation">,</span> last_mill_request_key<span class="token punctuation">,</span> curr_mill_time<span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="限流工具" tabindex="-1"><a class="header-anchor" href="#限流工具" aria-hidden="true">#</a> 限流工具</h2><p>前面介绍了限流算法的基本原理和一些简单的实现。但在生产环境，我们一般应该使用更成熟的限流工具。</p>`,44),k=n("code",null,"RateLimiter",-1),r={href:"https://blog.csdn.net/forezp/article/details/100060686",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/Netflix/Hystrix",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/alibaba/Sentinel",target:"_blank",rel:"noopener noreferrer"},v=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),b={href:"https://item.jd.com/11322972.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.jianshu.com/p/76cc8ba5ca91",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/doocs/advanced-java/blob/master/docs/high-concurrency/huifer-how-to-limit-current.md",target:"_blank",rel:"noopener noreferrer"},g={href:"https://gongfukangee.github.io/2019/04/04/Limit/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.csdn.net/forezp/article/details/100060686",target:"_blank",rel:"noopener noreferrer"};function h(_,q){const a=p("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[s("Guava 的 "),k,s("：RateLimiter 基于漏桶算法，但它参考了令牌桶算法。具体用法可以参考："),n("a",r,[s("RateLimiter 基于漏桶算法，但它参考了令牌桶算法"),t(a)])]),n("li",null,[n("a",d,[s("Hystrix"),t(a)]),s("：经典的限流、熔断工具，很值得借鉴学习。注：官方已停止发布版本。")]),n("li",null,[n("a",m,[s("Sentinel"),t(a)]),s("：阿里的限流、熔断工具。")])]),v,n("ul",null,[n("li",null,[n("a",b,[s("《大型网站技术架构：核心原理与案例分析》"),t(a)])]),n("li",null,[n("a",w,[s("谈谈限流算法的几种实现"),t(a)])]),n("li",null,[n("a",y,[s("如何限流？在工作中是怎么做的？说一下具体的实现？"),t(a)])]),n("li",null,[n("a",g,[s("浅析限流算法"),t(a)])]),n("li",null,[n("a",f,[s("RateLimiter 基于漏桶算法，但它参考了令牌桶算法"),t(a)])])])])}const T=e(i,[["render",h],["__file","03.流量控制.html.vue"]]);export{T as default};
