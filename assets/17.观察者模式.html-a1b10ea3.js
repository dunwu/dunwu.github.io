import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as s,d as e,e as t}from"./app-e12ad880.js";const i={},u=t(`<h1 id="设计模式之观察者模式" tabindex="-1"><a class="header-anchor" href="#设计模式之观察者模式" aria-hidden="true">#</a> 设计模式之观察者模式</h1><h2 id="意图" tabindex="-1"><a class="header-anchor" href="#意图" aria-hidden="true">#</a> 意图</h2><p><strong>观察者模式</strong>（Observer）是一种行为设计模式， 允许你定义一种订阅机制， 可在对象事件发生时通知多个 “观察” 该对象的其他对象。</p><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><ul><li>当一个对象状态的改变需要改变其他对象， 或实际对象是事先未知的或动态变化的时， 可使用观察者模式。</li><li>当应用中的一些对象必须观察其他对象时， 可使用该模式。 但仅能在有限时间内或特定情况下使用。</li></ul><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210519174232.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="结构说明" tabindex="-1"><a class="header-anchor" href="#结构说明" aria-hidden="true">#</a> 结构说明</h3><ol><li><strong>发布者</strong> （Publisher） 会向其他对象发送值得关注的事件。 事件会在发布者自身状态改变或执行特定行为后发生。 发布者中包含一个允许新订阅者加入和当前订阅者离开列表的订阅构架。</li><li>当新事件发生时， 发送者会遍历订阅列表并调用每个订阅者对象的通知方法。 该方法是在订阅者接口中声明的。</li><li><strong>订阅者</strong> （Subscriber） 接口声明了通知接口。 在绝大多数情况下， 该接口仅包含一个 <code>update</code>更新方法。 该方法可以拥有多个参数， 使发布者能在更新时传递事件的详细信息。</li><li><strong>具体订阅者</strong> （Concrete Subscribers） 可以执行一些操作来回应发布者的通知。 所有具体订阅者类都实现了同样的接口， 因此发布者不需要与具体类相耦合。</li><li>订阅者通常需要一些上下文信息来正确地处理更新。 因此， 发布者通常会将一些上下文数据作为通知方法的参数进行传递。 发布者也可将自身作为参数进行传递， 使订阅者直接获取所需的数据。</li><li><strong>客户端</strong> （Client） 会分别创建发布者和订阅者对象， 然后为订阅者注册发布者更新。</li></ol><h3 id="结构代码范式" tabindex="-1"><a class="header-anchor" href="#结构代码范式" aria-hidden="true">#</a> 结构代码范式</h3><p><strong>Subject</strong> : 主题类，保存所有订阅此主题的观察者，观察者的 <strong>数量是任意的</strong>。定义 <strong>添加观察者</strong> <strong>(Attach)</strong> 和 <strong>删除观察者 (Detach)</strong> 的接口。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Subject</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token class-name">String</span> state<span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Observer</span><span class="token punctuation">&gt;</span></span> observers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Observer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">String</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">setState</span><span class="token punctuation">(</span><span class="token class-name">String</span> state<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token class-name">Notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Subject</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Attach</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> observer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        observers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Detach</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> observer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        observers<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Observer</strong> : 观察者类，定义<strong>更新接口 (Update)</strong>，当收到 Subject 的通知时，Observer 需要同步更新信息。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token class-name">Subject</span> subject<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Subject</span> subject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>subject <span class="token operator">=</span> subject<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token class-name">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ConcreteSubject</strong> : 具体主题类，存储对于这个主题感兴趣的所有观察者。当内部状态发生变化时，应<strong>通知所有登记的观察者(Notify)</strong>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ConcreteSubject</span> <span class="token keyword">extends</span> <span class="token class-name">Subject</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ConcreteSubject</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setState</span><span class="token punctuation">(</span><span class="token class-name">String</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;======= &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;主题发布新消息 =======&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Observer</span> observer <span class="token operator">:</span> observers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name"><span class="token namespace">observer<span class="token punctuation">.</span></span>Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ConcreteObserver</strong> : 具体观察者类，实现 Observer 的<strong>更新接口 (Update)</strong>，以便和 Subject 同步状态信息。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ConcreteObserver</span> <span class="token keyword">extends</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> state<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">ConcreteObserver</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Subject</span> subject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> subject<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state <span class="token operator">=</span> subject<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;收到当前状态：&quot;</span> <span class="token operator">+</span> state<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ObserverPattern</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ConcreteSubject</span> subject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteSubject</span><span class="token punctuation">(</span><span class="token string">&quot;天气&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ConcreteObserver</span> observer1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteObserver</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> subject<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ConcreteObserver</span> observer2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteObserver</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span> subject<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ConcreteObserver</span> observer3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteObserver</span><span class="token punctuation">(</span><span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span> subject<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name"><span class="token namespace">subject<span class="token punctuation">.</span></span>Attach</span><span class="token punctuation">(</span>observer1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">subject<span class="token punctuation">.</span></span>Attach</span><span class="token punctuation">(</span>observer2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">subject<span class="token punctuation">.</span></span>Attach</span><span class="token punctuation">(</span>observer3<span class="token punctuation">)</span><span class="token punctuation">;</span>
        subject<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token string">&quot;今天下雨&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">subject<span class="token punctuation">.</span></span>Notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name"><span class="token namespace">subject<span class="token punctuation">.</span></span>Detach</span><span class="token punctuation">(</span>observer2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        subject<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token string">&quot;明天天晴&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">subject<span class="token punctuation">.</span></span>Notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>======= 天气主题发布新消息 =======
张三收到当前状态：今天下雨
李四收到当前状态：今天下雨
王五收到当前状态：今天下雨
======= 天气主题发布新消息 =======
张三收到当前状态：明天天晴
王五收到当前状态：明天天晴
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码" aria-hidden="true">#</a> 伪代码</h2><p>在本例中， <strong>观察者</strong>模式允许文本编辑器对象将自身的状态改变通知给其他服务对象。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210519175224.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>订阅者列表是动态生成的： 对象可在运行时根据程序需要开始或停止监听通知。</p><p>在本实现中， 编辑器类自身并不维护订阅列表。 它将工作委派给专门从事此工作的一个特殊帮手对象。 你还可将该对象升级为中心化的事件分发器， 允许任何对象成为发布者。</p><p>只要发布者通过同样的接口与所有订阅者进行交互， 那么在程序中新增订阅者时就无需修改已有发布者类的代码。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 发布者基类包含订阅管理代码和通知方法。</span>
<span class="token keyword">class</span> <span class="token class-name">EventManager</span> is
    <span class="token keyword">private</span> field listeners<span class="token operator">:</span> hash map of event types and listeners

    method <span class="token function">subscribe</span><span class="token punctuation">(</span>eventType<span class="token punctuation">,</span> listener<span class="token punctuation">)</span> is
        listeners<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>eventType<span class="token punctuation">,</span> listener<span class="token punctuation">)</span>

    method <span class="token function">unsubscribe</span><span class="token punctuation">(</span>eventType<span class="token punctuation">,</span> listener<span class="token punctuation">)</span> is
        listeners<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>eventType<span class="token punctuation">,</span> listener<span class="token punctuation">)</span>

    method <span class="token function">notify</span><span class="token punctuation">(</span>eventType<span class="token punctuation">,</span> data<span class="token punctuation">)</span> is
        foreach <span class="token punctuation">(</span>listener in listeners<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>eventType<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">do</span>
            listener<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

<span class="token comment">// 具体发布者包含一些订阅者感兴趣的实际业务逻辑。我们可以从发布者基类中扩</span>
<span class="token comment">// 展出该类，但在实际情况下并不总能做到，因为具体发布者可能已经是子类了。</span>
<span class="token comment">// 在这种情况下，你可用组合来修补订阅逻辑，就像我们在这里做的一样。</span>
<span class="token keyword">class</span> <span class="token class-name">Editor</span> is
    <span class="token keyword">public</span> field events<span class="token operator">:</span> <span class="token class-name">EventManager</span>
    <span class="token keyword">private</span> field file<span class="token operator">:</span> <span class="token class-name">File</span>

    constructor <span class="token class-name">Editor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        events <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 业务逻辑的方法可将变化通知给订阅者。</span>
    method <span class="token function">openFile</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> is
        <span class="token keyword">this</span><span class="token punctuation">.</span>file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
        events<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token string">&quot;open&quot;</span><span class="token punctuation">,</span> file<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

    method <span class="token function">saveFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        file<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        events<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token string">&quot;save&quot;</span><span class="token punctuation">,</span> file<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

    <span class="token comment">// ...</span>


<span class="token comment">// 这里是订阅者接口。如果你的编程语言支持函数类型，则可用一组函数来代替整</span>
<span class="token comment">// 个订阅者的层次结构。</span>
<span class="token keyword">interface</span> <span class="token class-name">EventListener</span> is
    method <span class="token function">update</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>

<span class="token comment">// 具体订阅者会对其注册的发布者所发出的更新消息做出响应。</span>
<span class="token keyword">class</span> <span class="token class-name">LoggingListener</span> <span class="token keyword">implements</span> <span class="token class-name">EventListener</span> is
    <span class="token keyword">private</span> field log<span class="token operator">:</span> <span class="token class-name">File</span>
    <span class="token keyword">private</span> field message

    constructor <span class="token class-name">LoggingListener</span><span class="token punctuation">(</span>log_filename<span class="token punctuation">,</span> message<span class="token punctuation">)</span> is
        <span class="token keyword">this</span><span class="token punctuation">.</span>log <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>log_filename<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message

    method <span class="token function">update</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span> is
        log<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token char">&#39;%s&#39;</span><span class="token punctuation">,</span>filename<span class="token punctuation">,</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">EmailAlertsListener</span> <span class="token keyword">implements</span> <span class="token class-name">EventListener</span> is
    <span class="token keyword">private</span> field email<span class="token operator">:</span> string

    constructor <span class="token class-name">EmailAlertsListener</span><span class="token punctuation">(</span>email<span class="token punctuation">,</span> message<span class="token punctuation">)</span> is
        <span class="token keyword">this</span><span class="token punctuation">.</span>email <span class="token operator">=</span> email
        <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message

    method <span class="token function">update</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span> is
        system<span class="token punctuation">.</span><span class="token function">email</span><span class="token punctuation">(</span>email<span class="token punctuation">,</span> <span class="token function">replace</span><span class="token punctuation">(</span><span class="token char">&#39;%s&#39;</span><span class="token punctuation">,</span>filename<span class="token punctuation">,</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment">// 应用程序可在运行时配置发布者和订阅者。</span>
<span class="token keyword">class</span> <span class="token class-name">Application</span> is
    method <span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        editor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Editor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        logger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LoggingListener</span><span class="token punctuation">(</span>
            <span class="token string">&quot;/path/to/log.txt&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;有人打开了文件：%s&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        editor<span class="token punctuation">.</span>events<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&quot;open&quot;</span><span class="token punctuation">,</span> logger<span class="token punctuation">)</span>

        emailAlerts <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EmailAlertsListener</span><span class="token punctuation">(</span>
            <span class="token string">&quot;admin@example.com&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;有人更改了文件：%s&quot;</span><span class="token punctuation">)</span>
        editor<span class="token punctuation">.</span>events<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&quot;save&quot;</span><span class="token punctuation">,</span> emailAlerts<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="与其他模式的关系" tabindex="-1"><a class="header-anchor" href="#与其他模式的关系" aria-hidden="true">#</a> 与其他模式的关系</h2>`,30),r={href:"https://refactoringguru.cn/design-patterns/chain-of-responsibility",target:"_blank",rel:"noopener noreferrer"},d={href:"https://refactoringguru.cn/design-patterns/command",target:"_blank",rel:"noopener noreferrer"},k={href:"https://refactoringguru.cn/design-patterns/mediator",target:"_blank",rel:"noopener noreferrer"},v={href:"https://refactoringguru.cn/design-patterns/observer",target:"_blank",rel:"noopener noreferrer"},m=n("ul",null,[n("li",null,[n("em",null,"责任链"),s("按照顺序将请求动态传递给一系列的潜在接收者， 直至其中一名接收者对请求进行处理。")]),n("li",null,[n("em",null,"命令"),s("在发送者和请求者之间建立单向连接。")]),n("li",null,[n("em",null,"中介者"),s("清除了发送者和请求者之间的直接连接， 强制它们通过一个中介对象进行间接沟通。")]),n("li",null,[n("em",null,"观察者"),s("允许接收者动态地订阅或取消接收请求。")])],-1),b={href:"https://refactoringguru.cn/design-patterns/mediator",target:"_blank",rel:"noopener noreferrer"},g={href:"https://refactoringguru.cn/design-patterns/observer",target:"_blank",rel:"noopener noreferrer"},h=t("<ul><li><em>中介者</em>的主要目标是消除一系列系统组件之间的相互依赖。 这些组件将依赖于同一个中介者对象。 <em>观察者</em>的目标是在对象之间建立动态的单向连接， 使得部分对象可作为其他对象的附属发挥作用。</li><li>有一种流行的中介者模式实现方式依赖于<em>观察者</em>。 中介者对象担当发布者的角色， 其他组件则作为订阅者， 可以订阅中介者的事件或取消订阅。 当<em>中介者</em>以这种方式实现时， 它可能看上去与<em>观察者</em>非常相似。</li><li>当你感到疑惑时， 记住可以采用其他方式来实现中介者。 例如， 你可永久性地将所有组件链接到同一个中介者对象。 这种实现方式和<em>观察者</em>并不相同， 但这仍是一种中介者模式。</li><li>假设有一个程序， 其所有的组件都变成了发布者， 它们之间可以相互建立动态连接。 这样程序中就没有中心化的中介者对象， 而只有一些分布式的观察者。</li></ul>",1),f=n("h2",{id:"案例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#案例","aria-hidden":"true"},"#"),s(" 案例")],-1),y=n("p",null,[n("strong",null,"使用示例："),s(" 观察者模式在 Java 代码中很常见， 特别是在 GUI 组件中。 它提供了在不与其他对象所属类耦合的情况下对其事件做出反应的方式。")],-1),w=n("p",null,"这里是核心 Java 程序库中该模式的一些示例：",-1),_={href:"http://docs.oracle.com/javase/8/docs/api/java/util/Observer.html",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"java.util.Observer",-1),S={href:"http://docs.oracle.com/javase/8/docs/api/java/util/Observable.html",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"java.util.Observable",-1),q={href:"http://docs.oracle.com/javase/8/docs/api/java/util/EventListener.html",target:"_blank",rel:"noopener noreferrer"},O=n("code",null,"java.util.EventListener",-1),L={href:"http://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpSessionBindingListener.html",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"javax.servlet.http.HttpSessionBindingListener",-1),E={href:"http://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpSessionAttributeListener.html",target:"_blank",rel:"noopener noreferrer"},A=n("code",null,"javax.servlet.http.HttpSessionAttributeListener",-1),N={href:"http://docs.oracle.com/javaee/7/api/javax/faces/event/PhaseListener.html",target:"_blank",rel:"noopener noreferrer"},F=n("code",null,"javax.faces.event.PhaseListener",-1),T=n("p",null,[n("strong",null,"识别方法："),s(" 该模式可以通过将对象存储在列表中的订阅方法， 和对于面向该列表中对象的更新方法的调用来识别。")],-1),U=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),B={href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"},H={href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://refactoringguru.cn/design-patterns/catalog",target:"_blank",rel:"noopener noreferrer"};function V(D,I){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[s("责任链模式"),e(a)]),s("、 "),n("a",d,[s("命令模式"),e(a)]),s("、 "),n("a",k,[s("中介者模式"),e(a)]),s("和"),n("a",v,[s("观察者模式"),e(a)]),s("用于处理请求发送者和接收者之间的不同连接方式： "),m]),n("li",null,[n("a",b,[s("中介者"),e(a)]),s("和"),n("a",g,[s("观察者"),e(a)]),s("之间的区别往往很难记住。 在大部分情况下， 你可以使用其中一种模式， 而有时可以同时使用。 让我们来看看如何做到这一点。 "),h])]),f,y,w,n("ul",null,[n("li",null,[n("a",_,[j,e(a)]),s("/"),n("a",S,[x,e(a)]),s(" （极少在真实世界中使用）")]),n("li",null,[n("a",q,[O,e(a)]),s("的所有实现 （几乎广泛存在于 Swing 组件中）")]),n("li",null,[n("a",L,[C,e(a)])]),n("li",null,[n("a",E,[A,e(a)])]),n("li",null,[n("a",N,[F,e(a)])])]),T,U,n("ul",null,[n("li",null,[n("a",B,[s("《Head First 设计模式》"),e(a)])]),n("li",null,[n("a",H,[s("《大话设计模式》"),e(a)])]),n("li",null,[n("a",P,[s("设计模式教程"),e(a)])])])])}const J=p(i,[["render",V],["__file","17.观察者模式.html.vue"]]);export{J as default};
