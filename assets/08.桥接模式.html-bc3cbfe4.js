import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,a as s,b as n,d as e,e as i}from"./app-a0e98cac.js";const l={},r=i(`<h1 id="设计模式之桥接模式" tabindex="-1"><a class="header-anchor" href="#设计模式之桥接模式" aria-hidden="true">#</a> 设计模式之桥接模式</h1><h2 id="意图" tabindex="-1"><a class="header-anchor" href="#意图" aria-hidden="true">#</a> 意图</h2><p><strong>桥接模式</strong> (Bridge) 是一种结构型设计模式， 可将<strong>抽象</strong>部分与<strong>实现</strong>部分<strong>分离</strong>，使它们都可以独立的变化。</p><p>如果一个系统需要在构件的抽象化角色和具体化角色之间增加更多的灵活性，避免在两个层次之间建立静态的联系。抽象化角色和具体化角色都应该可以被子类扩展。在这种情况下，桥接模式可以灵活地组合不同的抽象化角色和具体化角色，并独立化地扩展。</p><p>设计要求实现化角色的任何改变不应当影响客户端，或者说实现化角色的改变对客户端是完全透明的。</p><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><ul><li>如果你想要拆分或重组一个具有多重功能的庞杂类（例如能与多个数据库服务器进行交互的类），可以使用桥接模式。</li><li>如果你希望在几个独立维度上扩展一个类， 可使用该模式。</li><li>如果你需要在运行时切换不同实现方法， 可使用桥接模式。</li></ul><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210430154630.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="结构说明" tabindex="-1"><a class="header-anchor" href="#结构说明" aria-hidden="true">#</a> 结构说明</h3><ol><li><strong>抽象部分</strong> （Abstraction） 提供高层控制逻辑， 依赖于完成底层实际工作的实现对象。</li><li><strong>实现部分</strong> （Implementation） 为所有具体实现声明通用接口。 抽象部分仅能通过在这里声明的方法与实现对象交互。 <ul><li>抽象部分可以列出和实现部分一样的方法， 但是抽象部分通常声明一些复杂行为， 这些行为依赖于多种由实现部分声明的原语操作。</li></ul></li><li><strong>具体实现</strong> （Concrete Implementations） 中包括特定于平台的代码。</li><li><strong>精确抽象</strong> （Refined Abstraction） 提供控制逻辑的变体。 与其父类一样， 它们通过通用实现接口与不同的实现进行交互。</li><li>通常情况下， <strong>客户端</strong> （Client） 仅关心如何与抽象部分合作。 但是， 客户端需要将抽象对象与一个实现对象连接起来。</li></ol><h3 id="结构代码范式" tabindex="-1"><a class="header-anchor" href="#结构代码范式" aria-hidden="true">#</a> 结构代码范式</h3><p>【Implementor】定义<strong>实现接口</strong>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">Implementor</span> <span class="token punctuation">{</span>
    <span class="token comment">// 实现抽象部分需要的某些具体功能</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operationImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【Abstraction】定义<strong>抽象接口</strong>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Abstraction</span> <span class="token punctuation">{</span>
    <span class="token comment">// 持有一个 Implementor 对象，形成聚合关系</span>
    <span class="token keyword">protected</span> <span class="token class-name">Implementor</span> implementor<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Abstraction</span><span class="token punctuation">(</span><span class="token class-name">Implementor</span> implementor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>implementor <span class="token operator">=</span> implementor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 可能需要转调实现部分的具体实现</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        implementor<span class="token punctuation">.</span><span class="token function">operationImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【ConcreteImplementor】实现 <strong>Implementor</strong> 中定义的接口。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ConcreteImplementorA</span> <span class="token keyword">implements</span> <span class="token class-name">Implementor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operationImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 真正的实现</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;具体实现A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ConcreteImplementorB</span> <span class="token keyword">implements</span> <span class="token class-name">Implementor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operationImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 真正的实现</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;具体实现B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【RefinedAbstraction】扩展 <strong>Abstraction</strong> 类。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">RefinedAbstraction</span> <span class="token keyword">extends</span> <span class="token class-name">Abstraction</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">RefinedAbstraction</span><span class="token punctuation">(</span><span class="token class-name">Implementor</span> implementor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>implementor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">otherOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 实现一定的功能，可能会使用具体实现部分的实现方法,</span>
        <span class="token comment">// 但是本方法更大的可能是使用 Abstraction 中定义的方法，</span>
        <span class="token comment">// 通过组合使用 Abstraction 中定义的方法来完成更多的功能。</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【客户端】</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BridgePattern</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Implementor</span> implementor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteImplementorA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">RefinedAbstraction</span> abstraction <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RefinedAbstraction</span><span class="token punctuation">(</span>implementor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        abstraction<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        abstraction<span class="token punctuation">.</span><span class="token function">otherOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【输出】</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>具体实现A
其他操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码" aria-hidden="true">#</a> 伪代码</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210430170020.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>遥控器基类声明了一个指向设备对象的引用成员变量。 所有遥控器通过通用设备接口与设备进行交互， 使得同一个遥控器可以支持不同类型的设备。</p><p>你可以开发独立于设备类的遥控器类， 只需新建一个遥控器子类即可。 例如， 基础遥控器可能只有两个按钮， 但你可在其基础上扩展新功能， 比如额外的一节电池或一块触摸屏。</p><p>客户端代码通过遥控器构造函数将特定种类的遥控器与设备对象连接起来。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// “抽象部分”定义了两个类层次结构中“控制”部分的接口。它管理着一个指向“实</span>
<span class="token comment">// 现部分”层次结构中对象的引用，并会将所有真实工作委派给该对象。</span>
<span class="token keyword">class</span> <span class="token class-name">RemoteControl</span> is
    <span class="token keyword">protected</span> field device<span class="token operator">:</span> <span class="token class-name">Device</span>
    constructor <span class="token class-name">RemoteControl</span><span class="token punctuation">(</span>device<span class="token operator">:</span> <span class="token class-name">Device</span><span class="token punctuation">)</span> is
        <span class="token keyword">this</span><span class="token punctuation">.</span>device <span class="token operator">=</span> device
    method <span class="token function">togglePower</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token keyword">if</span> <span class="token punctuation">(</span>device<span class="token punctuation">.</span><span class="token function">isEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> then
            device<span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span>
            device<span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    method <span class="token function">volumeDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        device<span class="token punctuation">.</span><span class="token function">setVolume</span><span class="token punctuation">(</span>device<span class="token punctuation">.</span><span class="token function">getVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">)</span>
    method <span class="token function">volumeUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        device<span class="token punctuation">.</span><span class="token function">setVolume</span><span class="token punctuation">(</span>device<span class="token punctuation">.</span><span class="token function">getVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">)</span>
    method <span class="token function">channelDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        device<span class="token punctuation">.</span><span class="token function">setChannel</span><span class="token punctuation">(</span>device<span class="token punctuation">.</span><span class="token function">getChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    method <span class="token function">channelUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        device<span class="token punctuation">.</span><span class="token function">setChannel</span><span class="token punctuation">(</span>device<span class="token punctuation">.</span><span class="token function">getChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>


<span class="token comment">// 你可以独立于设备类的方式从抽象层中扩展类。</span>
<span class="token keyword">class</span> <span class="token class-name">AdvancedRemoteControl</span> <span class="token keyword">extends</span> <span class="token class-name">RemoteControl</span> is
    method <span class="token function">mute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        device<span class="token punctuation">.</span><span class="token function">setVolume</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>


<span class="token comment">// “实现部分”接口声明了在所有具体实现类中通用的方法。它不需要与抽象接口相</span>
<span class="token comment">// 匹配。实际上，这两个接口可以完全不一样。通常实现接口只提供原语操作，而</span>
<span class="token comment">// 抽象接口则会基于这些操作定义较高层次的操作。</span>
<span class="token keyword">interface</span> <span class="token class-name">Device</span> is
    method <span class="token function">isEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    method <span class="token function">enable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    method <span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    method <span class="token function">getVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    method <span class="token function">setVolume</span><span class="token punctuation">(</span>percent<span class="token punctuation">)</span>
    method <span class="token function">getChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    method <span class="token function">setChannel</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span>


<span class="token comment">// 所有设备都遵循相同的接口。</span>
<span class="token keyword">class</span> <span class="token class-name">Tv</span> <span class="token keyword">implements</span> <span class="token class-name">Device</span> is
    <span class="token comment">// ...</span>

<span class="token keyword">class</span> <span class="token class-name">Radio</span> <span class="token keyword">implements</span> <span class="token class-name">Device</span> is
    <span class="token comment">// ...</span>


<span class="token comment">// 客户端代码中的某个位置。</span>
tv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tv</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
remote <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RemoteControl</span><span class="token punctuation">(</span>tv<span class="token punctuation">)</span>
remote<span class="token punctuation">.</span><span class="token function">togglePower</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

radio <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Radio</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
remote <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AdvancedRemoteControl</span><span class="token punctuation">(</span>radio<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><p><strong>使用示例：</strong> 桥接模式在处理跨平台应用、 支持多种类型的数据库服务器或与多个特定种类 （例如云平台和社交网络等） 的 API 供应商协作时会特别有用。</p><p><strong>识别方法</strong>： 桥接可以通过一些控制实体及其所依赖的多个不同平台之间的明确区别来进行识别。</p><p>Java 中桥接模式应用最经典的代表无疑是日志组件 slf4j 的桥接 jar 包。</p><p>假如，你正在开发应用程序所调用的组件当中已经使用了 common-logging，这时你需要 jcl-over-slf4j.jar 把日志信息输出重定向到 slf4j-api，slf4j-api 再去调用 slf4j 实际依赖的日志组件。这个过程称为桥接。下图是官方的 slf4j 桥接策略图：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/javalib/log/slf4j-bind-strategy.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="与其他模式的关系" tabindex="-1"><a class="header-anchor" href="#与其他模式的关系" aria-hidden="true">#</a> 与其他模式的关系</h2>`,37),u={href:"https://refactoringguru.cn/design-patterns/bridge",target:"_blank",rel:"noopener noreferrer"},d={href:"https://refactoringguru.cn/design-patterns/adapter",target:"_blank",rel:"noopener noreferrer"},k={href:"https://refactoringguru.cn/design-patterns/bridge",target:"_blank",rel:"noopener noreferrer"},m={href:"https://refactoringguru.cn/design-patterns/state",target:"_blank",rel:"noopener noreferrer"},v={href:"https://refactoringguru.cn/design-patterns/strategy",target:"_blank",rel:"noopener noreferrer"},b={href:"https://refactoringguru.cn/design-patterns/adapter",target:"_blank",rel:"noopener noreferrer"},g={href:"https://refactoringguru.cn/design-patterns/composite",target:"_blank",rel:"noopener noreferrer"},h={href:"https://refactoringguru.cn/design-patterns/abstract-factory",target:"_blank",rel:"noopener noreferrer"},f={href:"https://refactoringguru.cn/design-patterns/bridge",target:"_blank",rel:"noopener noreferrer"},_=s("em",null,"桥接",-1),w=s("em",null,"抽象工厂",-1),y={href:"https://refactoringguru.cn/design-patterns/builder",target:"_blank",rel:"noopener noreferrer"},j={href:"https://refactoringguru.cn/design-patterns/bridge",target:"_blank",rel:"noopener noreferrer"},x=s("em",null,"主管",-1),I=s("em",null,"生成器",-1),A=s("em",null,"实现",-1),C=s("h2",{id:"参考资料",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),n(" 参考资料")],-1),R={href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://refactoringguru.cn/design-patterns/catalog",target:"_blank",rel:"noopener noreferrer"};function D(E,q){const a=p("ExternalLinkIcon");return o(),c("div",null,[r,s("ul",null,[s("li",null,[s("a",u,[n("桥接模式"),e(a)]),n("通常会于开发前期进行设计， 使你能够将程序的各个部分独立开来以便开发。 另一方面， "),s("a",d,[n("适配器模式"),e(a)]),n("通常在已有程序中使用， 让相互不兼容的类能很好地合作。")]),s("li",null,[s("a",k,[n("桥接"),e(a)]),n("、 "),s("a",m,[n("状态模式"),e(a)]),n("和"),s("a",v,[n("策略模式"),e(a)]),n(" （在某种程度上包括"),s("a",b,[n("适配器"),e(a)]),n("） 模式的接口非常相似。 实际上， 它们都基于"),s("a",g,[n("组合模式"),e(a)]),n("——即将工作委派给其他对象， 不过也各自解决了不同的问题。 模式并不只是以特定方式组织代码的配方， 你还可以使用它们来和其他开发者讨论模式所解决的问题。")]),s("li",null,[n("你可以将"),s("a",h,[n("抽象工厂模式"),e(a)]),n("和"),s("a",f,[n("桥接"),e(a)]),n("搭配使用。 如果由"),_,n("定义的抽象只能与特定实现合作， 这一模式搭配就非常有用。 在这种情况下， "),w,n("可以对这些关系进行封装， 并且对客户端代码隐藏其复杂性。")]),s("li",null,[n("你可以结合使用"),s("a",y,[n("生成器模式"),e(a)]),n("和"),s("a",j,[n("桥接模式"),e(a)]),n("： "),x,n("类负责抽象工作， 各种不同的"),I,n("负责"),A,n("工作。")])]),C,s("ul",null,[s("li",null,[s("a",R,[n("《Head First 设计模式》"),e(a)])]),s("li",null,[s("a",V,[n("《大话设计模式》"),e(a)])]),s("li",null,[s("a",B,[n("设计模式教程"),e(a)])])])])}const P=t(l,[["render",D],["__file","08.桥接模式.html.vue"]]);export{P as default};
