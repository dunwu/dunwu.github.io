import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c,a as n,b as s,d as e,e as l}from"./app-4f05975a.js";const i={},r=l(`<h1 id="设计模式之策略模式" tabindex="-1"><a class="header-anchor" href="#设计模式之策略模式" aria-hidden="true">#</a> 设计模式之策略模式</h1><h2 id="意图" tabindex="-1"><a class="header-anchor" href="#意图" aria-hidden="true">#</a> 意图</h2><p><strong>策略模式</strong>（Strategy） 是一种行为设计模式， 它能让你定义一系列算法， 并将每种算法分别放入独立的类中， 以使算法的对象能够相互替换。</p><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><ul><li>当你想使用对象中各种不同的算法变体， 并希望能在运行时切换算法时， 可使用策略模式。</li><li>当你有许多仅在执行某些行为时略有不同的相似类时， 可使用策略模式。</li><li>如果算法在上下文的逻辑中不是特别重要， 使用该模式能将类的业务逻辑与其算法实现细节隔离开来。</li><li>当类中使用了复杂条件运算符以在同一算法的不同变体中切换时， 可使用该模式。</li></ul><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2><h3 id="结构说明" tabindex="-1"><a class="header-anchor" href="#结构说明" aria-hidden="true">#</a> 结构说明</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210520173840.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li><strong>上下文</strong> （Context） 维护指向具体策略的引用， 且仅通过策略接口与该对象进行交流。</li><li><strong>策略</strong> （Strategy） 接口是所有具体策略的通用接口， 它声明了一个上下文用于执行策略的方法。</li><li><strong>具体策略</strong> （Concrete Strategies） 实现了上下文所用算法的各种不同变体。</li><li>当上下文需要运行算法时， 它会在其已连接的策略对象上调用执行方法。 上下文不清楚其所涉及的策略类型与算法的执行方式。</li><li><strong>客户端</strong> （Client） 会创建一个特定策略对象并将其传递给上下文。 上下文则会提供一个设置器以便客户端在运行时替换相关联的策略。</li></ol><h3 id="结构代码范式" tabindex="-1"><a class="header-anchor" href="#结构代码范式" aria-hidden="true">#</a> 结构代码范式</h3><p><strong>Strategy</strong> : 定义所有算法的公共接口(AlgorithmInterface)。Context 使用这个接口去调用 ConcreteStrategy 定义的具体算法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Strategy</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token class-name">AlgorithmInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ConcreteStrategy</strong> : 实现 Strategy 中的算法接口(AlgorithmInterface)。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ConcreteStrategyA</span> <span class="token keyword">extends</span> <span class="token class-name">Strategy</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">AlgorithmInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;算法A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ConcreteStrategyB</span> <span class="token keyword">extends</span> <span class="token class-name">Strategy</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">AlgorithmInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;算法B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ConcreteStrategyC</span> <span class="token keyword">extends</span> <span class="token class-name">Strategy</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">AlgorithmInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;算法C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Context</strong> : 用一个 ConcreteStrategy 来配置。维护一个对 Strategy 对象的引用。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Context</span> <span class="token punctuation">{</span>
    <span class="token class-name">Strategy</span> strategy<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Context</span><span class="token punctuation">(</span><span class="token class-name">Strategy</span> strategy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> strategy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">ContextInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token namespace">strategy<span class="token punctuation">.</span></span>AlgorithmInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StrategyPattern</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Context</span> context1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Context</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConcreteStrategyA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">context1<span class="token punctuation">.</span></span>ContextInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Context</span> context2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Context</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConcreteStrategyB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">context2<span class="token punctuation">.</span></span>ContextInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Context</span> context3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Context</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConcreteStrategyC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">context3<span class="token punctuation">.</span></span>ContextInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>算法A
算法B
算法C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码" aria-hidden="true">#</a> 伪代码</h2><p>在本例中， 上下文使用了多个<strong>策略</strong>来执行不同的计算操作。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 策略接口声明了某个算法各个不同版本间所共有的操作。上下文会使用该接口来</span>
<span class="token comment">// 调用有具体策略定义的算法。</span>
<span class="token keyword">interface</span> <span class="token class-name">Strategy</span> is
    method <span class="token function">execute</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>

<span class="token comment">// 具体策略会在遵循策略基础接口的情况下实现算法。该接口实现了它们在上下文</span>
<span class="token comment">// 中的互换性。</span>
<span class="token keyword">class</span> <span class="token class-name">ConcreteStrategyAdd</span> <span class="token keyword">implements</span> <span class="token class-name">Strategy</span> is
    method <span class="token function">execute</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> is
        <span class="token keyword">return</span> a <span class="token operator">+</span> b

<span class="token keyword">class</span> <span class="token class-name">ConcreteStrategySubtract</span> <span class="token keyword">implements</span> <span class="token class-name">Strategy</span> is
    method <span class="token function">execute</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> is
        <span class="token keyword">return</span> a <span class="token operator">-</span> b

<span class="token keyword">class</span> <span class="token class-name">ConcreteStrategyMultiply</span> <span class="token keyword">implements</span> <span class="token class-name">Strategy</span> is
    method <span class="token function">execute</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> is
        <span class="token keyword">return</span> a <span class="token operator">*</span> b

<span class="token comment">// 上下文定义了客户端关注的接口。</span>
<span class="token keyword">class</span> <span class="token class-name">Context</span> is
    <span class="token comment">// 上下文会维护指向某个策略对象的引用。上下文不知晓策略的具体类。上下</span>
    <span class="token comment">// 文必须通过策略接口来与所有策略进行交互。</span>
    <span class="token keyword">private</span> strategy<span class="token operator">:</span> <span class="token class-name">Strategy</span>

    <span class="token comment">// 上下文通常会通过构造函数来接收策略对象，同时还提供设置器以便在运行</span>
    <span class="token comment">// 时切换策略。</span>
    method <span class="token function">setStrategy</span><span class="token punctuation">(</span><span class="token class-name">Strategy</span> strategy<span class="token punctuation">)</span> is
        <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> strategy

    <span class="token comment">// 上下文会将一些工作委派给策略对象，而不是自行实现不同版本的算法。</span>
    method <span class="token function">executeStrategy</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> is
        <span class="token keyword">return</span> strategy<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>


<span class="token comment">// 客户端代码会选择具体策略并将其传递给上下文。客户端必须知晓策略之间的差</span>
<span class="token comment">// 异，才能做出正确的选择。</span>
<span class="token keyword">class</span> <span class="token class-name">ExampleApplication</span> is
    method <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is

        创建上下文对象。

        读取第一个数。
        读取最后一个数。
        从用户输入中读取期望进行的行为。

        <span class="token keyword">if</span> <span class="token punctuation">(</span>action <span class="token operator">==</span> addition<span class="token punctuation">)</span> then
            context<span class="token punctuation">.</span><span class="token function">setStrategy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConcreteStrategyAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>action <span class="token operator">==</span> subtraction<span class="token punctuation">)</span> then
            context<span class="token punctuation">.</span><span class="token function">setStrategy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConcreteStrategySubtract</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>action <span class="token operator">==</span> multiplication<span class="token punctuation">)</span> then
            context<span class="token punctuation">.</span><span class="token function">setStrategy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConcreteStrategyMultiply</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        result <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">executeStrategy</span><span class="token punctuation">(</span><span class="token class-name">First</span> number<span class="token punctuation">,</span> <span class="token class-name">Second</span> number<span class="token punctuation">)</span>

        打印结果。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><p><strong>使用示例：</strong> 策略模式在 Java 代码中很常见。 它经常在各种框架中使用， 能在不扩展类的情况下向用户提供改变其行为的方式。</p><p>Java 8 开始支持 lambda 方法， 它可作为一种替代策略模式的简单方式。</p><p>这里有一些核心 Java 程序库中策略模式的示例：</p>`,27),u={href:"http://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html#compare-T-T-",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"java.util.Comparator#compare()",-1),k=n("code",null,"Collections#sort()",-1),v={href:"http://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpServlet.html",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"javax.servlet.http.HttpServlet",-1),g=n("code",null,"service­()",-1),b=n("code",null,"Http­Servlet­Request",-1),h=n("code",null,"Http­Servlet­Response",-1),y=n("code",null,"do­XXX()",-1),_={href:"http://docs.oracle.com/javaee/7/api/javax/servlet/Filter.html#doFilter-javax.servlet.ServletRequest-javax.servlet.ServletResponse-javax.servlet.FilterChain-",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"javax.servlet.Filter#doFilter()",-1),x=n("p",null,[n("strong",null,"识别方法："),s(" 策略模式可以通过允许嵌套对象完成实际工作的方法以及允许将该对象替换为不同对象的设置器来识别。")],-1),w=n("h2",{id:"与其他模式的关系",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#与其他模式的关系","aria-hidden":"true"},"#"),s(" 与其他模式的关系")],-1),S={href:"https://refactoringguru.cn/design-patterns/bridge",target:"_blank",rel:"noopener noreferrer"},C={href:"https://refactoringguru.cn/design-patterns/state",target:"_blank",rel:"noopener noreferrer"},j={href:"https://refactoringguru.cn/design-patterns/strategy",target:"_blank",rel:"noopener noreferrer"},A={href:"https://refactoringguru.cn/design-patterns/adapter",target:"_blank",rel:"noopener noreferrer"},I={href:"https://refactoringguru.cn/design-patterns/composite",target:"_blank",rel:"noopener noreferrer"},q={href:"https://refactoringguru.cn/design-patterns/command",target:"_blank",rel:"noopener noreferrer"},B={href:"https://refactoringguru.cn/design-patterns/strategy",target:"_blank",rel:"noopener noreferrer"},F=n("ul",null,[n("li",null,[s("你可以使用"),n("em",null,"命令"),s("来将任何操作转换为对象。 操作的参数将成为对象的成员变量。 你可以通过转换来延迟操作的执行、 将操作放入队列、 保存历史命令或者向远程服务发送命令等。")]),n("li",null,[s("另一方面， "),n("em",null,"策略"),s("通常可用于描述完成某件事的不同方式， 让你能够在同一个上下文类中切换算法。")])],-1),H={href:"https://refactoringguru.cn/design-patterns/decorator",target:"_blank",rel:"noopener noreferrer"},E={href:"https://refactoringguru.cn/design-patterns/strategy",target:"_blank",rel:"noopener noreferrer"},N={href:"https://refactoringguru.cn/design-patterns/template-method",target:"_blank",rel:"noopener noreferrer"},R={href:"https://refactoringguru.cn/design-patterns/strategy",target:"_blank",rel:"noopener noreferrer"},V=n("em",null,"模板方法",-1),J=n("em",null,"策略",-1),O={href:"https://refactoringguru.cn/design-patterns/state",target:"_blank",rel:"noopener noreferrer"},T={href:"https://refactoringguru.cn/design-patterns/strategy",target:"_blank",rel:"noopener noreferrer"},X=n("em",null,"策略",-1),L=n("em",null,"状态",-1),M=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),z={href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://refactoringguru.cn/design-patterns/catalog",target:"_blank",rel:"noopener noreferrer"};function G(K,Q){const a=o("ExternalLinkIcon");return p(),c("div",null,[r,n("ul",null,[n("li",null,[s("对 "),n("a",u,[d,e(a)]),s(" 的调用来自 "),k,s(".")]),n("li",null,[n("a",v,[m,e(a)]),s("： "),g,s("方法， 还有所有接受 "),b,s("和 "),h,s("对象作为参数的 "),y,s("方法。")]),n("li",null,[n("a",_,[f,e(a)])])]),x,w,n("ul",null,[n("li",null,[n("a",S,[s("桥接模式"),e(a)]),s("、 "),n("a",C,[s("状态模式"),e(a)]),s("和"),n("a",j,[s("策略模式"),e(a)]),s(" （在某种程度上包括"),n("a",A,[s("适配器模式"),e(a)]),s("） 模式的接口非常相似。 实际上， 它们都基于"),n("a",I,[s("组合模式"),e(a)]),s("——即将工作委派给其他对象， 不过也各自解决了不同的问题。 模式并不只是以特定方式组织代码的配方， 你还可以使用它们来和其他开发者讨论模式所解决的问题。")]),n("li",null,[n("a",q,[s("命令模式"),e(a)]),s("和"),n("a",B,[s("策略"),e(a)]),s("看上去很像， 因为两者都能通过某些行为来参数化对象。 但是， 它们的意图有非常大的不同。 "),F]),n("li",null,[n("a",H,[s("装饰模式"),e(a)]),s("可让你更改对象的外表， "),n("a",E,[s("策略"),e(a)]),s("则让你能够改变其本质。")]),n("li",null,[n("a",N,[s("模板方法模式"),e(a)]),s("基于继承机制： 它允许你通过扩展子类中的部分内容来改变部分算法。 "),n("a",R,[s("策略"),e(a)]),s("基于组合机制： 你可以通过对相应行为提供不同的策略来改变对象的部分行为。 "),V,s("在类层次上运作， 因此它是静态的。 "),J,s("在对象层次上运作， 因此允许在运行时切换行为。")]),n("li",null,[n("a",O,[s("状态"),e(a)]),s("可被视为"),n("a",T,[s("策略"),e(a)]),s("的扩展。 两者都基于组合机制： 它们都通过将部分工作委派给 “帮手” 对象来改变其在不同情景下的行为。 "),X,s("使得这些对象相互之间完全独立， 它们不知道其他对象的存在。 但"),L,s("模式没有限制具体状态之间的依赖， 且允许它们自行改变在不同情景下的状态。")])]),M,n("ul",null,[n("li",null,[n("a",z,[s("《Head First 设计模式》"),e(a)])]),n("li",null,[n("a",P,[s("《大话设计模式》"),e(a)])]),n("li",null,[n("a",D,[s("设计模式教程"),e(a)])])])])}const Y=t(i,[["render",G],["__file","22.策略模式.html.vue"]]);export{Y as default};
