import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,a as n,b as s,e,f as i}from"./app-eab0d091.js";const l={},u=i(`<h1 id="设计模式之迭代器模式" tabindex="-1"><a class="header-anchor" href="#设计模式之迭代器模式" aria-hidden="true">#</a> 设计模式之迭代器模式</h1><h2 id="意图" tabindex="-1"><a class="header-anchor" href="#意图" aria-hidden="true">#</a> 意图</h2><p><strong>迭代器模式</strong>（Iterator） 是一种行为设计模式， 让你能在不暴露集合底层表现形式 （列表、 栈和树等） 的情况下遍历集合中所有的元素。</p><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><ul><li>当集合背后为复杂的数据结构， 且你希望对客户端隐藏其复杂性时 （出于使用便利性或安全性的考虑）， 可以使用迭代器模式。</li><li>使用该模式可以减少程序中重复的遍历代码。</li><li>如果你希望代码能够遍历不同的甚至是无法预知的数据结构， 可以使用迭代器模式。</li></ul><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210519153411.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="结构说明" tabindex="-1"><a class="header-anchor" href="#结构说明" aria-hidden="true">#</a> 结构说明</h3><ol><li><strong>迭代器</strong> （Iterator） 接口声明了遍历集合所需的操作： 获取下一个元素、 获取当前位置和重新开始迭代等。</li><li><strong>具体迭代器</strong> （Concrete Iterators） 实现遍历集合的一种特定算法。 迭代器对象必须跟踪自身遍历的进度。 这使得多个迭代器可以相互独立地遍历同一集合。</li><li><strong>集合</strong> （Collection） 接口声明一个或多个方法来获取与集合兼容的迭代器。 请注意， 返回方法的类型必须被声明为迭代器接口， 因此具体集合可以返回各种不同种类的迭代器。</li><li><strong>具体集合</strong> （Concrete Collections） 会在客户端请求迭代器时返回一个特定的具体迭代器类实体。 你可能会琢磨， 剩下的集合代码在什么地方呢？ 不用担心， 它也会在同一个类中。 只是这些细节对于实际模式来说并不重要， 所以我们将其省略了而已。</li><li><strong>客户端</strong> （Client） 通过集合和迭代器的接口与两者进行交互。 这样一来客户端无需与具体类进行耦合， 允许同一客户端代码使用各种不同的集合和迭代器。 <ul><li>客户端通常不会自行创建迭代器， 而是会从集合中获取。 但在特定情况下， 客户端可以直接创建一个迭代器 （例如当客户端需要自定义特殊迭代器时）。</li></ul></li></ol><h3 id="结构代码范式" tabindex="-1"><a class="header-anchor" href="#结构代码范式" aria-hidden="true">#</a> 结构代码范式</h3><p><strong>Iterator</strong> : 定义访问元素的接口。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">Iterator</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isDone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">currentItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ConcreteIterator</strong> : 实现 Iterator 接口。记录当前访问的元素在集合中的位置信息。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ConcreteIterator</span> <span class="token keyword">implements</span> <span class="token class-name">Iterator</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> current <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">ConcreteAggregate</span> aggregate<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ConcreteIterator</span><span class="token punctuation">(</span><span class="token class-name">ConcreteAggregate</span> aggregate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>aggregate <span class="token operator">=</span> aggregate<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> aggregate<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        current<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">&lt;</span> aggregate<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> aggregate<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isDone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>current <span class="token operator">&gt;=</span> aggregate<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">currentItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> aggregate<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Aggregate</strong> : 定义创建 Iterator 对象的接口。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">Aggregate</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Iterator</span> <span class="token class-name">CreateIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ConcreteAggregate</strong> : 实现 Iterator 接口，返回一个合适的 ConcreteIterator 实例。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ConcreteAggregate</span> <span class="token keyword">implements</span> <span class="token class-name">Aggregate</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Iterator</span> <span class="token class-name">CreateIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteIterator</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> items<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> items<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token class-name">Object</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        items<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Object</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        items<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IteratorPattern</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ConcreteAggregate</span> aggregate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteAggregate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        aggregate<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        aggregate<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        aggregate<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;王五&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        aggregate<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;赵六&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Iterator</span> iter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteIterator</span><span class="token punctuation">(</span>aggregate<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> item <span class="token operator">=</span> iter<span class="token punctuation">.</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;第一个人是：&quot;</span> <span class="token operator">+</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;所有人的名单是：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>iter<span class="token punctuation">.</span><span class="token function">isDone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>iter<span class="token punctuation">.</span><span class="token function">currentItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            iter<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>第一个人是：张三
所有人的名单是：
张三
李四
王五
赵六
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码" aria-hidden="true">#</a> 伪代码</h2><p>在本例中， <strong>迭代器</strong>模式用于遍历一个封装了访问微信好友关系功能的特殊集合。 该集合提供使用不同方式遍历档案资料的多个迭代器。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210519153656.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>“好友 （friends）” 迭代器可用于遍历指定档案的好友。 “同事 （colleagues）” 迭代器也提供同样的功能， 但仅包括与目标用户在同一家公司工作的好友。 这两个迭代器都实现了同一个通用接口， 客户端能在不了解认证和发送 REST 请求等实现细节的情况下获取档案。</p><p>客户端仅通过接口与集合和迭代器交互， 也就不会同具体类耦合。 如果你决定将应用连接到全新的社交网络， 只需提供新的集合和迭代器类即可， 无需修改现有代码。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 集合接口必须声明一个用于生成迭代器的工厂方法。如果程序中有不同类型的迭</span>
<span class="token comment">// 代器，你也可以声明多个方法。</span>
<span class="token keyword">interface</span> <span class="token class-name">SocialNetwork</span> is
    method <span class="token function">createFriendsIterator</span><span class="token punctuation">(</span>profileId<span class="token punctuation">)</span><span class="token operator">:</span><span class="token class-name">ProfileIterator</span>
    method <span class="token function">createCoworkersIterator</span><span class="token punctuation">(</span>profileId<span class="token punctuation">)</span><span class="token operator">:</span><span class="token class-name">ProfileIterator</span>


<span class="token comment">// 每个具体集合都与其返回的一组具体迭代器相耦合。但客户并不是这样的，因为</span>
<span class="token comment">// 这些方法的签名将会返回迭代器接口。</span>
<span class="token keyword">class</span> <span class="token class-name">WeChat</span> <span class="token keyword">implements</span> <span class="token class-name">SocialNetwork</span> is
    <span class="token comment">// ...大量的集合代码应该放在这里...</span>

    <span class="token comment">// 迭代器创建代码。</span>
    method <span class="token function">createFriendsIterator</span><span class="token punctuation">(</span>profileId<span class="token punctuation">)</span> is
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WeChatIterator</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> profileId<span class="token punctuation">,</span> <span class="token string">&quot;friends&quot;</span><span class="token punctuation">)</span>
    method <span class="token function">createCoworkersIterator</span><span class="token punctuation">(</span>profileId<span class="token punctuation">)</span> is
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WeChatIterator</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> profileId<span class="token punctuation">,</span> <span class="token string">&quot;coworkers&quot;</span><span class="token punctuation">)</span>


<span class="token comment">// 所有迭代器的通用接口。</span>
<span class="token keyword">interface</span> <span class="token class-name">ProfileIterator</span> is
    method <span class="token function">getNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token class-name">Profile</span>
    method <span class="token function">hasMore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>bool


<span class="token comment">// 具体迭代器类。</span>
<span class="token keyword">class</span> <span class="token class-name">WeChatIterator</span> <span class="token keyword">implements</span> <span class="token class-name">ProfileIterator</span> is
    <span class="token comment">// 迭代器需要一个指向其遍历集合的引用。</span>
    <span class="token keyword">private</span> field weChat<span class="token operator">:</span> <span class="token class-name">WeChat</span>
    <span class="token keyword">private</span> field profileId<span class="token punctuation">,</span> type<span class="token operator">:</span> string

    <span class="token comment">// 迭代器对象会独立于其他迭代器来对集合进行遍历。因此它必须保存迭代器</span>
    <span class="token comment">// 的状态。</span>
    <span class="token keyword">private</span> field currentPosition
    <span class="token keyword">private</span> field cache<span class="token operator">:</span> array of <span class="token class-name">Profile</span>

    constructor <span class="token class-name">WeChatIterator</span><span class="token punctuation">(</span>weChat<span class="token punctuation">,</span> profileId<span class="token punctuation">,</span> type<span class="token punctuation">)</span> is
        <span class="token keyword">this</span><span class="token punctuation">.</span>weChat <span class="token operator">=</span> weChat
        <span class="token keyword">this</span><span class="token punctuation">.</span>profileId <span class="token operator">=</span> profileId
        <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> type

    <span class="token keyword">private</span> method <span class="token function">lazyInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cache <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            cache <span class="token operator">=</span> weChat<span class="token punctuation">.</span><span class="token function">socialGraphRequest</span><span class="token punctuation">(</span>profileId<span class="token punctuation">,</span> type<span class="token punctuation">)</span>

    <span class="token comment">// 每个具体迭代器类都会自行实现通用迭代器接口。</span>
    method <span class="token function">getNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasMore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            currentPosition<span class="token operator">++</span>
            <span class="token keyword">return</span> cache<span class="token punctuation">[</span>currentPosition<span class="token punctuation">]</span>

    method <span class="token function">hasMore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token function">lazyInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> currentPosition <span class="token operator">&lt;</span> cache<span class="token punctuation">.</span>length


<span class="token comment">// 这里还有一个有用的绝招：你可将迭代器传递给客户端类，无需让其拥有访问整</span>
<span class="token comment">// 个集合的权限。这样一来，你就无需将集合暴露给客户端了。</span>
<span class="token comment">//</span>
<span class="token comment">// 还有另一个好处：你可在运行时将不同的迭代器传递给客户端，从而改变客户端</span>
<span class="token comment">// 与集合互动的方式。这一方法可行的原因是客户端代码并没有和具体迭代器类相</span>
<span class="token comment">// 耦合。</span>
<span class="token keyword">class</span> <span class="token class-name">SocialSpammer</span> is
    method <span class="token function">send</span><span class="token punctuation">(</span>iterator<span class="token operator">:</span> <span class="token class-name">ProfileIterator</span><span class="token punctuation">,</span> message<span class="token operator">:</span> string<span class="token punctuation">)</span> is
        <span class="token keyword">while</span> <span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">hasMore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            profile <span class="token operator">=</span> iterator<span class="token punctuation">.</span><span class="token function">getNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">sendEmail</span><span class="token punctuation">(</span>profile<span class="token punctuation">.</span><span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span>


<span class="token comment">// 应用程序（Application）类可对集合和迭代器进行配置，然后将其传递给客户</span>
<span class="token comment">// 端代码。</span>
<span class="token keyword">class</span> <span class="token class-name">Application</span> is
    field network<span class="token operator">:</span> <span class="token class-name">SocialNetwork</span>
    field spammer<span class="token operator">:</span> <span class="token class-name">SocialSpammer</span>

    method <span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token keyword">if</span> working <span class="token keyword">with</span> <span class="token class-name">WeChat</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>network <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeChat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> working <span class="token keyword">with</span> <span class="token class-name">LinkedIn</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>network <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>spammer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SocialSpammer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    method <span class="token function">sendSpamToFriends</span><span class="token punctuation">(</span>profile<span class="token punctuation">)</span> is
        iterator <span class="token operator">=</span> network<span class="token punctuation">.</span><span class="token function">createFriendsIterator</span><span class="token punctuation">(</span>profile<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        spammer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>iterator<span class="token punctuation">,</span> <span class="token string">&quot;非常重要的消息&quot;</span><span class="token punctuation">)</span>

    method <span class="token function">sendSpamToCoworkers</span><span class="token punctuation">(</span>profile<span class="token punctuation">)</span> is
        iterator <span class="token operator">=</span> network<span class="token punctuation">.</span><span class="token function">createCoworkersIterator</span><span class="token punctuation">(</span>profile<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        spammer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>iterator<span class="token punctuation">,</span> <span class="token string">&quot;非常重要的消息&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="与其他模式的关系" tabindex="-1"><a class="header-anchor" href="#与其他模式的关系" aria-hidden="true">#</a> 与其他模式的关系</h2>`,29),r={href:"https://refactoringguru.cn/design-patterns/iterator",target:"_blank",rel:"noopener noreferrer"},k={href:"https://refactoringguru.cn/design-patterns/composite",target:"_blank",rel:"noopener noreferrer"},d={href:"https://refactoringguru.cn/design-patterns/factory-method",target:"_blank",rel:"noopener noreferrer"},v={href:"https://refactoringguru.cn/design-patterns/iterator",target:"_blank",rel:"noopener noreferrer"},m={href:"https://refactoringguru.cn/design-patterns/memento",target:"_blank",rel:"noopener noreferrer"},b={href:"https://refactoringguru.cn/design-patterns/iterator",target:"_blank",rel:"noopener noreferrer"},g={href:"https://refactoringguru.cn/design-patterns/visitor",target:"_blank",rel:"noopener noreferrer"},h={href:"https://refactoringguru.cn/design-patterns/iterator",target:"_blank",rel:"noopener noreferrer"},f=n("h2",{id:"案例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#案例","aria-hidden":"true"},"#"),s(" 案例")],-1),w=n("p",null,[n("strong",null,"使用示例："),s(" 该模式在 Java 代码中很常见。 许多框架和程序库都会使用它来提供遍历其集合的标准方式。")],-1),y=n("p",null,"下面是该模式在核心 Java 程序库中的一些示例：",-1),_={href:"http://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html",target:"_blank",rel:"noopener noreferrer"},I=n("code",null,"java.util.Iterator",-1),j={href:"http://docs.oracle.com/javase/8/docs/api/java/util/Scanner.html",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"java.util.Scanner",-1),C={href:"http://docs.oracle.com/javase/8/docs/api/java/util/Enumeration.html",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"java.util.Enumeration",-1),S=n("p",null,[n("strong",null,"识别方法："),s(" 迭代器可以通过导航方法 （例如 "),n("code",null,"next"),s("和 "),n("code",null,"previous"),s("等） 来轻松识别。 使用迭代器的客户端代码可能没有其所遍历的集合的直接访问权限。")],-1),O=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),A={href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://refactoringguru.cn/design-patterns/catalog",target:"_blank",rel:"noopener noreferrer"};function z(E,W){const a=p("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[s("你可以使用"),n("a",r,[s("迭代器模式"),e(a)]),s("来遍历"),n("a",k,[s("组合模式"),e(a)]),s("树。")]),n("li",null,[s("你可以同时使用"),n("a",d,[s("工厂方法模式"),e(a)]),s("和"),n("a",v,[s("迭代器"),e(a)]),s("来让子类集合返回不同类型的迭代器， 并使得迭代器与集合相匹配。")]),n("li",null,[s("你可以同时使用"),n("a",m,[s("备忘录模式"),e(a)]),s("和"),n("a",b,[s("迭代器"),e(a)]),s("来获取当前迭代器的状态， 并且在需要的时候进行回滚。")]),n("li",null,[s("可以同时使用"),n("a",g,[s("访问者模式"),e(a)]),s("和"),n("a",h,[s("迭代器"),e(a)]),s("来遍历复杂数据结构， 并对其中的元素执行所需操作， 即使这些元素所属的类完全不同。")])]),f,w,y,n("ul",null,[n("li",null,[n("a",_,[I,e(a)]),s("的所有实现 （还有 "),n("a",j,[x,e(a)]),s("）。")]),n("li",null,[n("a",C,[q,e(a)]),s("的所有实现")])]),S,O,n("ul",null,[n("li",null,[n("a",A,[s("《Head First 设计模式》"),e(a)])]),n("li",null,[n("a",P,[s("《大话设计模式》"),e(a)])]),n("li",null,[n("a",N,[s("设计模式教程"),e(a)])])])])}const M=t(l,[["render",z],["__file","index.html.vue"]]);export{M as default};
