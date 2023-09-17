import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as p,c,a as n,b as s,d as e,e as t}from"./app-4f05975a.js";const i={},u=t(`<h1 id="设计模式之中介者模式" tabindex="-1"><a class="header-anchor" href="#设计模式之中介者模式" aria-hidden="true">#</a> 设计模式之中介者模式</h1><h2 id="意图" tabindex="-1"><a class="header-anchor" href="#意图" aria-hidden="true">#</a> 意图</h2><p><strong>中介者模式</strong>（Mediator） 是一种行为设计模式， 能让你减少对象之间混乱无序的依赖关系。 该模式会限制对象之间的直接交互， 迫使它们通过一个中介者对象进行合作。</p><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><ul><li>当一些对象和其他对象紧密耦合以致难以对其进行修改时， 可使用中介者模式。</li><li>当组件因过于依赖其他组件而无法在不同应用中复用时， 可使用中介者模式。</li><li>如果为了能在不同情景下复用一些基本行为， 导致你需要被迫创建大量组件子类时， 可使用中介者模式。</li></ul><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210520171152.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="结构说明" tabindex="-1"><a class="header-anchor" href="#结构说明" aria-hidden="true">#</a> 结构说明</h3><ol><li><strong>组件</strong> （Component） 是各种包含业务逻辑的类。 每个组件都有一个指向中介者的引用， 该引用被声明为中介者接口类型。 组件不知道中介者实际所属的类， 因此你可通过将其连接到不同的中介者以使其能在其他程序中复用。</li><li><strong>中介者</strong> （Mediator） 接口声明了与组件交流的方法， 但通常仅包括一个通知方法。 组件可将任意上下文 （包括自己的对象） 作为该方法的参数， 只有这样接收组件和发送者类之间才不会耦合。</li><li><strong>具体中介者</strong> （Concrete Mediator） 封装了多种组件间的关系。 具体中介者通常会保存所有组件的引用并对其进行管理， 甚至有时会对其生命周期进行管理。</li><li>组件并不知道其他组件的情况。 如果组件内发生了重要事件， 它只能通知中介者。 中介者收到通知后能轻易地确定发送者， 这或许已足以判断接下来需要触发的组件了。 <ul><li>对于组件来说， 中介者看上去完全就是一个黑箱。 发送者不知道最终会由谁来处理自己的请求， 接收者也不知道最初是谁发出了请求。</li></ul></li></ol><h3 id="结构代码范式" tabindex="-1"><a class="header-anchor" href="#结构代码范式" aria-hidden="true">#</a> 结构代码范式</h3><p><strong>Mediator</strong> : 为 Colleague 对象定义一个交流接口。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Mediator</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token class-name">Send</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token class-name">Colleague</span> colleague<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ConcreteMediator</strong> : 实现 Mediator 中的交流接口。 这个类中需要了解并维护所有的 colleague 对象。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ConcreteMediator</span> <span class="token keyword">extends</span> <span class="token class-name">Mediator</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">ConcreteColleague1</span> colleague1<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">ConcreteColleague2</span> colleague2<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setColleague1</span><span class="token punctuation">(</span><span class="token class-name">ConcreteColleague1</span> colleague1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>colleague1 <span class="token operator">=</span> colleague1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setColleague2</span><span class="token punctuation">(</span><span class="token class-name">ConcreteColleague2</span> colleague2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>colleague2 <span class="token operator">=</span> colleague2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Send</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token class-name">Colleague</span> colleague<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>colleague <span class="token operator">==</span> colleague1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name"><span class="token namespace">colleague2<span class="token punctuation">.</span></span>Notify</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>colleague <span class="token operator">==</span> colleague2<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name"><span class="token namespace">colleague1<span class="token punctuation">.</span></span>Notify</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Error!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Colleague 组</strong> : 每个 Colleague 对象应该知道它的 Mediator 对象，但不知道其他同事对象。它只能联系 Mediator 对象。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Colleague</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">Mediator</span> mediator<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Colleague</span><span class="token punctuation">(</span><span class="token class-name">Mediator</span> mediator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>mediator <span class="token operator">=</span> mediator<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Send</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token namespace">mediator<span class="token punctuation">.</span></span>Send</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token class-name">Notify</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ConcreteColleague1</span> <span class="token keyword">extends</span> <span class="token class-name">Colleague</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ConcreteColleague1</span><span class="token punctuation">(</span><span class="token class-name">Mediator</span> mediator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>mediator<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Notify</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;同事1得到信息：&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ConcreteColleague2</span> <span class="token keyword">extends</span> <span class="token class-name">Colleague</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ConcreteColleague2</span><span class="token punctuation">(</span><span class="token class-name">Mediator</span> mediator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>mediator<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Notify</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;同事2得到信息：&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MediatorPattern</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ConcreteMediator</span> mediator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteMediator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ConcreteColleague1</span> colleague1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteColleague1</span><span class="token punctuation">(</span>mediator<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ConcreteColleague2</span> colleague2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteColleague2</span><span class="token punctuation">(</span>mediator<span class="token punctuation">)</span><span class="token punctuation">;</span>

        mediator<span class="token punctuation">.</span><span class="token function">setColleague1</span><span class="token punctuation">(</span>colleague1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        mediator<span class="token punctuation">.</span><span class="token function">setColleague2</span><span class="token punctuation">(</span>colleague2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name"><span class="token namespace">colleague1<span class="token punctuation">.</span></span>Send</span><span class="token punctuation">(</span><span class="token string">&quot;How are you?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">colleague2<span class="token punctuation">.</span></span>Send</span><span class="token punctuation">(</span><span class="token string">&quot;Fine, thank you. And you?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">colleague1<span class="token punctuation">.</span></span>Send</span><span class="token punctuation">(</span><span class="token string">&quot;I&#39;m fine. Thankes.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>同事2得到信息：How are you?
同事1得到信息：Fine, thank you. And you?
同事2得到信息：I&#39;m fine. Thankes.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码" aria-hidden="true">#</a> 伪代码</h2><p>在本例中， <strong>中介者</strong>模式可帮助你减少各种 UI 类 （按钮、 复选框和文本标签） 之间的相互依赖关系。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210520171433.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>用户触发的元素不会直接与其他元素交流， 即使看上去它们应该这样做。 相反， 元素只需让中介者知晓事件即可， 并能在发出通知时同时传递任何上下文信息。</p><p>本例中的中介者是整个认证对话框。 对话框知道具体元素应如何进行合作并促进它们的间接交流。 当接收到事件通知后， 对话框会确定负责处理事件的元素并据此重定向请求。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 中介者接口声明了一个能让组件将各种事件通知给中介者的方法。中介者可对这</span>
<span class="token comment">// 些事件做出响应并将执行工作传递给其他组件。</span>
<span class="token keyword">interface</span> <span class="token class-name">Mediator</span> is
    method <span class="token function">notify</span><span class="token punctuation">(</span>sender<span class="token operator">:</span> <span class="token class-name">Component</span><span class="token punctuation">,</span> event<span class="token operator">:</span> string<span class="token punctuation">)</span>


<span class="token comment">// 具体中介者类可解开各组件之间相互交叉的连接关系并将其转移到中介者中。</span>
<span class="token keyword">class</span> <span class="token class-name">AuthenticationDialog</span> <span class="token keyword">implements</span> <span class="token class-name">Mediator</span> is
    <span class="token keyword">private</span> field title<span class="token operator">:</span> string
    <span class="token keyword">private</span> field loginOrRegisterChkBx<span class="token operator">:</span> <span class="token class-name">Checkbox</span>
    <span class="token keyword">private</span> field loginUsername<span class="token punctuation">,</span> loginPassword<span class="token operator">:</span> <span class="token class-name">Textbox</span>
    <span class="token keyword">private</span> field registrationUsername<span class="token punctuation">,</span> registrationPassword<span class="token punctuation">,</span>
                  registrationEmail<span class="token operator">:</span> <span class="token class-name">Textbox</span>
    <span class="token keyword">private</span> field okBtn<span class="token punctuation">,</span> cancelBtn<span class="token operator">:</span> <span class="token class-name">Button</span>

    constructor <span class="token class-name">AuthenticationDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token comment">// 创建所有组件对象并将当前中介者传递给其构造函数以建立连接。</span>

    <span class="token comment">// 当组件中有事件发生时，它会通知中介者。中介者接收到通知后可自行处理，</span>
    <span class="token comment">// 也可将请求传递给另一个组件。</span>
    method <span class="token function">notify</span><span class="token punctuation">(</span>sender<span class="token punctuation">,</span> event<span class="token punctuation">)</span> is
        <span class="token keyword">if</span> <span class="token punctuation">(</span>sender <span class="token operator">==</span> loginOrRegisterChkBx and event <span class="token operator">==</span> <span class="token string">&quot;check&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>loginOrRegisterChkBx<span class="token punctuation">.</span>checked<span class="token punctuation">)</span>
                title <span class="token operator">=</span> <span class="token string">&quot;登录&quot;</span>
                <span class="token comment">// 1. 显示登录表单组件。</span>
                <span class="token comment">// 2. 隐藏注册表单组件。</span>
            <span class="token keyword">else</span>
                title <span class="token operator">=</span> <span class="token string">&quot;注册&quot;</span>
                <span class="token comment">// 1. 显示注册表单组件。</span>
                <span class="token comment">// 2. 隐藏登录表单组件。</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>sender <span class="token operator">==</span> okBtn <span class="token operator">&amp;&amp;</span> event <span class="token operator">==</span> <span class="token string">&quot;click&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>loginOrRegister<span class="token punctuation">.</span>checked<span class="token punctuation">)</span>
                <span class="token comment">// 尝试找到使用登录信息的用户。</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>found<span class="token punctuation">)</span>
                    <span class="token comment">// 在登录字段上方显示错误信息。</span>
            <span class="token keyword">else</span>
                <span class="token comment">// 1. 使用注册字段中的数据创建用户账号。</span>
                <span class="token comment">// 2. 完成用户登录工作。 …</span>


<span class="token comment">// 组件会使用中介者接口与中介者进行交互。因此只需将它们与不同的中介者连接</span>
<span class="token comment">// 起来，你就能在其他情境中使用这些组件了。</span>
<span class="token keyword">class</span> <span class="token class-name">Component</span> is
    field dialog<span class="token operator">:</span> <span class="token class-name">Mediator</span>

    constructor <span class="token class-name">Component</span><span class="token punctuation">(</span>dialog<span class="token punctuation">)</span> is
        <span class="token keyword">this</span><span class="token punctuation">.</span>dialog <span class="token operator">=</span> dialog

    method <span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        dialog<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&quot;click&quot;</span><span class="token punctuation">)</span>

    method <span class="token function">keypress</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        dialog<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&quot;keypress&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 具体组件之间无法进行交流。它们只有一个交流渠道，那就是向中介者发送通知。</span>
<span class="token keyword">class</span> <span class="token class-name">Button</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> is
    <span class="token comment">// ...</span>

<span class="token keyword">class</span> <span class="token class-name">Textbox</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> is
    <span class="token comment">// ...</span>

<span class="token keyword">class</span> <span class="token class-name">Checkbox</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> is
    method <span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        dialog<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&quot;check&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="与其他模式的关系" tabindex="-1"><a class="header-anchor" href="#与其他模式的关系" aria-hidden="true">#</a> 与其他模式的关系</h2>`,27),r={href:"https://refactoringguru.cn/design-patterns/chain-of-responsibility",target:"_blank",rel:"noopener noreferrer"},d={href:"https://refactoringguru.cn/design-patterns/command",target:"_blank",rel:"noopener noreferrer"},k={href:"https://refactoringguru.cn/design-patterns/mediator",target:"_blank",rel:"noopener noreferrer"},m={href:"https://refactoringguru.cn/design-patterns/observer",target:"_blank",rel:"noopener noreferrer"},v=n("ul",null,[n("li",null,[n("em",null,"责任链"),s("按照顺序将请求动态传递给一系列的潜在接收者， 直至其中一名接收者对请求进行处理。")]),n("li",null,[n("em",null,"命令"),s("在发送者和请求者之间建立单向连接。")]),n("li",null,[n("em",null,"中介者"),s("清除了发送者和请求者之间的直接连接， 强制它们通过一个中介对象进行间接沟通。")]),n("li",null,[n("em",null,"观察者"),s("允许接收者动态地订阅或取消接收请求。")])],-1),b={href:"https://refactoringguru.cn/design-patterns/facade",target:"_blank",rel:"noopener noreferrer"},g={href:"https://refactoringguru.cn/design-patterns/mediator",target:"_blank",rel:"noopener noreferrer"},h=n("ul",null,[n("li",null,[n("em",null,"外观"),s("为子系统中的所有对象定义了一个简单接口， 但是它不提供任何新功能。 子系统本身不会意识到外观的存在。 子系统中的对象可以直接进行交流。")]),n("li",null,[n("em",null,"中介者"),s("将系统中组件的沟通行为中心化。 各组件只知道中介者对象， 无法直接相互交流。")])],-1),f={href:"https://refactoringguru.cn/design-patterns/mediator",target:"_blank",rel:"noopener noreferrer"},_={href:"https://refactoringguru.cn/design-patterns/observer",target:"_blank",rel:"noopener noreferrer"},y=t("<ul><li><em>中介者</em>的主要目标是消除一系列系统组件之间的相互依赖。 这些组件将依赖于同一个中介者对象。 <em>观察者</em>的目标是在对象之间建立动态的单向连接， 使得部分对象可作为其他对象的附属发挥作用。</li><li>有一种流行的中介者模式实现方式依赖于<em>观察者</em>。 中介者对象担当发布者的角色， 其他组件则作为订阅者， 可以订阅中介者的事件或取消订阅。 当<em>中介者</em>以这种方式实现时， 它可能看上去与<em>观察者</em>非常相似。</li><li>当你感到疑惑时， 记住可以采用其他方式来实现中介者。 例如， 你可永久性地将所有组件链接到同一个中介者对象。 这种实现方式和<em>观察者</em>并不相同， 但这仍是一种中介者模式。</li><li>假设有一个程序， 其所有的组件都变成了发布者， 它们之间可以相互建立动态连接。 这样程序中就没有中心化的中介者对象， 而只有一些分布式的观察者。</li></ul>",1),w=n("h2",{id:"案例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#案例","aria-hidden":"true"},"#"),s(" 案例")],-1),C=n("p",null,[n("strong",null,"使用示例："),s(" 中介者模式在 Java 代码中最常用于帮助程序 GUI 组件之间的通信。 在 MVC 模式中， 控制器是中介者的同义词。")],-1),x=n("p",null,"下面是核心 Java 程序库中该模式的一些示例：",-1),j={href:"http://docs.oracle.com/javase/8/docs/api/java/util/Timer.html",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"java.util.Timer",-1),M=n("code",null,"schedule­XXX()",-1),S={href:"http://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Executor.html#execute-java.lang.Runnable-",target:"_blank",rel:"noopener noreferrer"},B=n("code",null,"java.util.concurrent.Executor#execute()",-1),E={href:"http://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ExecutorService.html",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"java.util.concurrent.ExecutorService",-1),O=n("code",null,"invoke­XXX()",-1),X=n("code",null,"submit­()",-1),T={href:"http://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ScheduledExecutorService.html",target:"_blank",rel:"noopener noreferrer"},I=n("code",null,"java.util.concurrent.ScheduledExecutorService",-1),R=n("code",null,"schedule­XXX()",-1),V={href:"http://docs.oracle.com/javase/8/docs/api/java/lang/reflect/Method.html#invoke-java.lang.Object-java.lang.Object...-",target:"_blank",rel:"noopener noreferrer"},A=n("code",null,"java.lang.reflect.Method#invoke()",-1),U=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),F={href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"},H={href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://refactoringguru.cn/design-patterns/catalog",target:"_blank",rel:"noopener noreferrer"};function z(D,J){const a=l("ExternalLinkIcon");return p(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[s("责任链模式"),e(a)]),s("、 "),n("a",d,[s("命令模式"),e(a)]),s("、 "),n("a",k,[s("中介者模式"),e(a)]),s("和"),n("a",m,[s("观察者模式"),e(a)]),s("用于处理请求发送者和接收者之间的不同连接方式： "),v]),n("li",null,[n("a",b,[s("外观模式"),e(a)]),s("和"),n("a",g,[s("中介者"),e(a)]),s("的职责类似： 它们都尝试在大量紧密耦合的类中组织起合作。 "),h]),n("li",null,[n("a",f,[s("中介者"),e(a)]),s("和"),n("a",_,[s("观察者"),e(a)]),s("之间的区别往往很难记住。 在大部分情况下， 你可以使用其中一种模式， 而有时可以同时使用。 让我们来看看如何做到这一点。 "),y])]),w,C,x,n("ul",null,[n("li",null,[n("a",j,[q,e(a)]),s(" （所有 "),M,s("方法）")]),n("li",null,[n("a",S,[B,e(a)])]),n("li",null,[n("a",E,[N,e(a)]),s(" （ "),O,s("和 "),X,s("方法）")]),n("li",null,[n("a",T,[I,e(a)]),s(" （所有 "),R,s("方法）")]),n("li",null,[n("a",V,[A,e(a)])])]),U,n("ul",null,[n("li",null,[n("a",F,[s("《Head First 设计模式》"),e(a)])]),n("li",null,[n("a",H,[s("《大话设计模式》"),e(a)])]),n("li",null,[n("a",P,[s("设计模式教程"),e(a)])])])])}const K=o(i,[["render",z],["__file","19.中介者模式.html.vue"]]);export{K as default};
