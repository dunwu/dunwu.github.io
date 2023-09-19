import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as o,a as n,d as t,b as s,e as l}from"./app-d8d56f9e.js";const i={},u=l(`<h1 id="设计模式之状态模式" tabindex="-1"><a class="header-anchor" href="#设计模式之状态模式" aria-hidden="true">#</a> 设计模式之状态模式</h1><h2 id="意图" tabindex="-1"><a class="header-anchor" href="#意图" aria-hidden="true">#</a> 意图</h2><p><strong>状态模式</strong>（State） 是一种行为设计模式， 让你能在一个对象的内部状态变化时改变其行为， 使其看上去就像改变了自身所属的类一样。</p><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><ul><li>如果对象需要根据自身当前状态进行不同行为， 同时状态的数量非常多且与状态相关的代码会频繁变更的话， 可使用状态模式。</li><li>如果某个类需要根据成员变量的当前值改变自身行为， 从而需要使用大量的条件语句时， 可使用该模式。</li><li>当相似状态和基于条件的状态机转换中存在许多重复代码时， 可使用状态模式。</li></ul><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2><h3 id="结构说明" tabindex="-1"><a class="header-anchor" href="#结构说明" aria-hidden="true">#</a> 结构说明</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210520175610.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li><strong>上下文</strong> （Context） 保存了对于一个具体状态对象的引用， 并会将所有与该状态相关的工作委派给它。 上下文通过状态接口与状态对象交互， 且会提供一个设置器用于传递新的状态对象。</li><li><strong>状态</strong> （State） 接口会声明特定于状态的方法。 这些方法应能被其他所有具体状态所理解， 因为你不希望某些状态所拥有的方法永远不会被调用。</li><li><strong>具体状态</strong> （Concrete States） 会自行实现特定于状态的方法。 为了避免多个状态中包含相似代码， 你可以提供一个封装有部分通用行为的中间抽象类。 <ul><li>状态对象可存储对于上下文对象的反向引用。 状态可以通过该引用从上下文处获取所需信息， 并且能触发状态转移。</li></ul></li><li>上下文和具体状态都可以设置上下文的下个状态， 并可通过替换连接到上下文的状态对象来完成实际的状态转换。</li></ol><h3 id="结构代码范式" tabindex="-1"><a class="header-anchor" href="#结构代码范式" aria-hidden="true">#</a> 结构代码范式</h3><p><strong>State</strong> : 定义一个接口以封装与 Context 的一个特定状态相关的行为。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token class-name">Handle</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ConcreteState</strong> : 每一个子类实现一个与 Context 的一个状态相关的行为。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ConcreteStateA</span> <span class="token keyword">extends</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Handle</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token namespace">context<span class="token punctuation">.</span></span>SetState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConcreteStateB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ConcreteStateB</span> <span class="token keyword">extends</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Handle</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token namespace">context<span class="token punctuation">.</span></span>SetState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConcreteStateA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Context</strong> : 维护一个 ConcreteState 子类的实例，这个实例定义当前的状态。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Context</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">State</span> state<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Context</span><span class="token punctuation">(</span><span class="token class-name">State</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">SetState</span><span class="token punctuation">(</span><span class="token class-name">State</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前状态：&quot;</span> <span class="token operator">+</span> state<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">State</span> <span class="token class-name">GetState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token namespace">state<span class="token punctuation">.</span></span>Handle</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StatePattern</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Context</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Context</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConcreteStateA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">c<span class="token punctuation">.</span></span>Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">c<span class="token punctuation">.</span></span>Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>当前状态：ConcreteStateB
当前状态：ConcreteStateA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码" aria-hidden="true">#</a> 伪代码</h2><p>在本例中， <strong>状态</strong>模式将根据当前回放状态， 让媒体播放器中的相同控件完成不同的行为。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210520175904.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>播放器的主要对象总是会连接到一个负责播放器绝大部分工作的状态对象中。 部分操作会更换播放器当前的状态对象， 以此改变播放器对于用户互动所作出的反应。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 音频播放器（Audio­Player）类即为上下文。它还会维护指向状态类实例的引用，</span>
<span class="token comment">// 该状态类则用于表示音频播放器当前的状态。</span>
<span class="token keyword">class</span> <span class="token class-name">AudioPlayer</span> is
    field state<span class="token operator">:</span> <span class="token class-name">State</span>
    field <span class="token constant">UI</span><span class="token punctuation">,</span> volume<span class="token punctuation">,</span> playlist<span class="token punctuation">,</span> currentSong

    constructor <span class="token class-name">AudioPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReadyState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>

        <span class="token comment">// 上下文会将处理用户输入的工作委派给状态对象。由于每个状态都以不</span>
        <span class="token comment">// 同的方式处理输入，其结果自然将依赖于当前所处的状态。</span>
        <span class="token constant">UI</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token constant">UI</span><span class="token punctuation">.</span>lockButton<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>clickLock<span class="token punctuation">)</span>
        <span class="token constant">UI</span><span class="token punctuation">.</span>playButton<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>clickPlay<span class="token punctuation">)</span>
        <span class="token constant">UI</span><span class="token punctuation">.</span>nextButton<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>clickNext<span class="token punctuation">)</span>
        <span class="token constant">UI</span><span class="token punctuation">.</span>prevButton<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>clickPrevious<span class="token punctuation">)</span>

    <span class="token comment">// 其他对象必须能切换音频播放器当前所处的状态。</span>
    method <span class="token function">changeState</span><span class="token punctuation">(</span>state<span class="token operator">:</span> <span class="token class-name">State</span><span class="token punctuation">)</span> is
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state

    <span class="token comment">// UI 方法会将执行工作委派给当前状态。</span>
    method <span class="token function">clickLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        state<span class="token punctuation">.</span><span class="token function">clickLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    method <span class="token function">clickPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        state<span class="token punctuation">.</span><span class="token function">clickPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    method <span class="token function">clickNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        state<span class="token punctuation">.</span><span class="token function">clickNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    method <span class="token function">clickPrevious</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        state<span class="token punctuation">.</span><span class="token function">clickPrevious</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 状态可调用上下文的一些服务方法。</span>
    method <span class="token function">startPlayback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token comment">// ...</span>
    method <span class="token function">stopPlayback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token comment">// ...</span>
    method <span class="token function">nextSong</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token comment">// ...</span>
    method <span class="token function">previousSong</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token comment">// ...</span>
    method <span class="token function">fastForward</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span> is
        <span class="token comment">// ...</span>
    method <span class="token function">rewind</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span> is
        <span class="token comment">// ...</span>


<span class="token comment">// 所有具体状态类都必须实现状态基类声明的方法，并提供反向引用指向与状态相</span>
<span class="token comment">// 关的上下文对象。状态可使用反向引用将上下文转换为另一个状态。</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">State</span> is
    <span class="token keyword">protected</span> field player<span class="token operator">:</span> <span class="token class-name">AudioPlayer</span>

    <span class="token comment">// 上下文将自身传递给状态构造函数。这可帮助状态在需要时获取一些有用的</span>
    <span class="token comment">// 上下文数据。</span>
    constructor <span class="token class-name">State</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span> is
        <span class="token keyword">this</span><span class="token punctuation">.</span>player <span class="token operator">=</span> player

    <span class="token keyword">abstract</span> method <span class="token function">clickLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">abstract</span> method <span class="token function">clickPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">abstract</span> method <span class="token function">clickNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">abstract</span> method <span class="token function">clickPrevious</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment">// 具体状态会实现与上下文状态相关的多种行为。</span>
<span class="token keyword">class</span> <span class="token class-name">LockedState</span> <span class="token keyword">extends</span> <span class="token class-name">State</span> is

    <span class="token comment">// 当你解锁一个锁定的播放器时，它可能处于两种状态之一。</span>
    method <span class="token function">clickLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token keyword">if</span> <span class="token punctuation">(</span>player<span class="token punctuation">.</span>playing<span class="token punctuation">)</span>
            player<span class="token punctuation">.</span><span class="token function">changeState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PlayingState</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span>
            player<span class="token punctuation">.</span><span class="token function">changeState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ReadyState</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">)</span>

    method <span class="token function">clickPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token comment">// 已锁定，什么也不做。</span>

    method <span class="token function">clickNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token comment">// 已锁定，什么也不做。</span>

    method <span class="token function">clickPrevious</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token comment">// 已锁定，什么也不做。</span>


<span class="token comment">// 它们还可在上下文中触发状态转换。</span>
<span class="token keyword">class</span> <span class="token class-name">ReadyState</span> <span class="token keyword">extends</span> <span class="token class-name">State</span> is
    method <span class="token function">clickLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        player<span class="token punctuation">.</span><span class="token function">changeState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LockedState</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">)</span>

    method <span class="token function">clickPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        player<span class="token punctuation">.</span><span class="token function">startPlayback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        player<span class="token punctuation">.</span><span class="token function">changeState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PlayingState</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">)</span>

    method <span class="token function">clickNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        player<span class="token punctuation">.</span><span class="token function">nextSong</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    method <span class="token function">clickPrevious</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        player<span class="token punctuation">.</span><span class="token function">previousSong</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">PlayingState</span> <span class="token keyword">extends</span> <span class="token class-name">State</span> is
    method <span class="token function">clickLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        player<span class="token punctuation">.</span><span class="token function">changeState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LockedState</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">)</span>

    method <span class="token function">clickPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        player<span class="token punctuation">.</span><span class="token function">stopPlayback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        player<span class="token punctuation">.</span><span class="token function">changeState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ReadyState</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">)</span>

    method <span class="token function">clickNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>doubleclick<span class="token punctuation">)</span>
            player<span class="token punctuation">.</span><span class="token function">nextSong</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span>
            player<span class="token punctuation">.</span><span class="token function">fastForward</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

    method <span class="token function">clickPrevious</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>doubleclick<span class="token punctuation">)</span>
            player<span class="token punctuation">.</span><span class="token function">previous</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span>
            player<span class="token punctuation">.</span><span class="token function">rewind</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><p><strong>使用示例：</strong> 在 Java 语言中， 状态模式通常被用于将基于 <code>switch</code>语句的大型状态机转换为对象。</p><p>这里是核心 Java 程序库中一些状态模式的示例：</p>`,28),d={href:"http://docs.oracle.com/javaee/7/api/javax/faces/lifecycle/Lifecycle.html#execute-javax.faces.context.FacesContext-",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"javax.faces.lifecycle.LifeCycle#execute()",-1),r={href:"http://docs.oracle.com/javaee/7/api/javax/faces/webapp/FacesServlet.html",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"Faces­Servlet",-1),m=n("p",null,[n("strong",null,"识别方法："),s(" 状态模式可通过受外部控制且能根据对象状态改变行为的方法来识别。")],-1),b=n("h2",{id:"与其他模式的关系",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#与其他模式的关系","aria-hidden":"true"},"#"),s(" 与其他模式的关系")],-1),h={href:"https://refactoringguru.cn/design-patterns/bridge",target:"_blank",rel:"noopener noreferrer"},y={href:"https://refactoringguru.cn/design-patterns/state",target:"_blank",rel:"noopener noreferrer"},f={href:"https://refactoringguru.cn/design-patterns/strategy",target:"_blank",rel:"noopener noreferrer"},g={href:"https://refactoringguru.cn/design-patterns/adapter",target:"_blank",rel:"noopener noreferrer"},w={href:"https://refactoringguru.cn/design-patterns/composite",target:"_blank",rel:"noopener noreferrer"},_={href:"https://refactoringguru.cn/design-patterns/state",target:"_blank",rel:"noopener noreferrer"},x={href:"https://refactoringguru.cn/design-patterns/strategy",target:"_blank",rel:"noopener noreferrer"},S=n("em",null,"策略",-1),C=n("em",null,"状态",-1),P=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),j={href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://refactoringguru.cn/design-patterns/catalog",target:"_blank",rel:"noopener noreferrer"};function B(I,A){const a=p("ExternalLinkIcon");return c(),o("div",null,[u,n("ul",null,[n("li",null,[n("a",d,[k,t(a)]),s(" （由"),n("a",r,[v,t(a)]),s("控制： 行为依赖于当前 JSF 生命周期的阶段 （状态））")])]),m,b,n("ul",null,[n("li",null,[n("a",h,[s("桥接模式"),t(a)]),s("、 "),n("a",y,[s("状态模式"),t(a)]),s("和"),n("a",f,[s("策略模式"),t(a)]),s(" （在某种程度上包括"),n("a",g,[s("适配器模式"),t(a)]),s("） 模式的接口非常相似。 实际上， 它们都基于"),n("a",w,[s("组合模式"),t(a)]),s("——即将工作委派给其他对象， 不过也各自解决了不同的问题。 模式并不只是以特定方式组织代码的配方， 你还可以使用它们来和其他开发者讨论模式所解决的问题。")]),n("li",null,[n("a",_,[s("状态"),t(a)]),s("可被视为"),n("a",x,[s("策略"),t(a)]),s("的扩展。 两者都基于组合机制： 它们都通过将部分工作委派给 “帮手” 对象来改变其在不同情景下的行为。 "),S,s("使得这些对象相互之间完全独立， 它们不知道其他对象的存在。 但"),C,s("模式没有限制具体状态之间的依赖， 且允许它们自行改变在不同情景下的状态。")])]),P,n("ul",null,[n("li",null,[n("a",j,[s("《Head First 设计模式》"),t(a)])]),n("li",null,[n("a",L,[s("《大话设计模式》"),t(a)])]),n("li",null,[n("a",N,[s("设计模式教程"),t(a)])])])])}const R=e(i,[["render",B],["__file","24.状态模式.html.vue"]]);export{R as default};
