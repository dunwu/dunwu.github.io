import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as s,d as e,e as t}from"./app-1f12e18b.js";const i={},u=t('<h1 id="设计模式之访问者模式" tabindex="-1"><a class="header-anchor" href="#设计模式之访问者模式" aria-hidden="true">#</a> 设计模式之访问者模式</h1><h2 id="意图" tabindex="-1"><a class="header-anchor" href="#意图" aria-hidden="true">#</a> 意图</h2><p><strong>访问者模式</strong>（Visitor） 是一种行为设计模式， 它能将算法与其所作用的对象隔离开来。</p><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><ul><li>如果你需要对一个复杂对象结构 （例如对象树） 中的所有元素执行某些操作， 可使用访问者模式。</li><li>可使用访问者模式来清理辅助行为的业务逻辑。</li><li>当某个行为仅在类层次结构中的一些类中有意义， 而在其他类中没有意义时， 可使用该模式。</li></ul><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2><h3 id="结构说明" tabindex="-1"><a class="header-anchor" href="#结构说明" aria-hidden="true">#</a> 结构说明</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210524103007.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',8),r=n("li",null,[n("strong",null,"访问者"),s(" （Visitor） 接口声明了一系列以对象结构的具体元素为参数的访问者方法。 如果编程语言支持重载， 这些方法的名称可以是相同的， 但是其参数一定是不同的。")],-1),d=n("li",null,[n("strong",null,"具体访问者"),s(" （Concrete Visitor） 会为不同的具体元素类实现相同行为的几个不同版本。")],-1),k=n("li",null,[n("strong",null,"元素"),s(" （Element） 接口声明了一个方法来 “接收” 访问者。 该方法必须有一个参数被声明为访问者接口类型。")],-1),m=n("li",null,[n("strong",null,"具体元素"),s(" （Concrete Element） 必须实现接收方法。 该方法的目的是根据当前元素类将其调用重定向到相应访问者的方法。 请注意， 即使元素基类实现了该方法， 所有子类都必须对其进行重写并调用访问者对象中的合适方法。")],-1),v=n("strong",null,"客户端",-1),b={href:"https://refactoringguru.cn/design-patterns/composite",target:"_blank",rel:"noopener noreferrer"},h=t(`<h3 id="结构代码范式" tabindex="-1"><a class="header-anchor" href="#结构代码范式" aria-hidden="true">#</a> 结构代码范式</h3><p><strong>Visitor</strong> : 为该对象结构中 ConcreteElement 的每一个类声明一个 Visit 操作。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Visitor</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token class-name">VisitConcreteElementA</span><span class="token punctuation">(</span><span class="token class-name">ConcreteElementA</span> elementA<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token class-name">VisitConcreteElementB</span><span class="token punctuation">(</span><span class="token class-name">ConcreteElementB</span> elementB<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ConcreteVisitor</strong> : 实现每个由 Visitor 声明的操作。每个操作实现算法的一部分，而该算法片段乃是对应于结构中对象的类。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ConcreteVisitor1</span> <span class="token keyword">extends</span> <span class="token class-name">Visitor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">VisitConcreteElementA</span><span class="token punctuation">(</span><span class="token class-name">ConcreteElementA</span> elementA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; 访问 &quot;</span> <span class="token operator">+</span> elementA<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">VisitConcreteElementB</span><span class="token punctuation">(</span><span class="token class-name">ConcreteElementB</span> elementB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; 访问 &quot;</span> <span class="token operator">+</span> elementB<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ConcreteVisitor2</span> <span class="token keyword">extends</span> <span class="token class-name">Visitor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">VisitConcreteElementA</span><span class="token punctuation">(</span><span class="token class-name">ConcreteElementA</span> elementA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; 访问 &quot;</span> <span class="token operator">+</span> elementA<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">VisitConcreteElementB</span><span class="token punctuation">(</span><span class="token class-name">ConcreteElementB</span> elementB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; 访问 &quot;</span> <span class="token operator">+</span> elementB<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Element</strong> : 定义一个 Accpet 操作，它以一个访问者为参数。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Element</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token class-name">Accept</span><span class="token punctuation">(</span><span class="token class-name">Visitor</span> visitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ConcreteElement</strong> : 实现 Element 声明的 Accept 操作。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ConcreteElementA</span> <span class="token keyword">extends</span> <span class="token class-name">Element</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Accept</span><span class="token punctuation">(</span><span class="token class-name">Visitor</span> visitor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token namespace">visitor<span class="token punctuation">.</span></span>VisitConcreteElementA</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ConcreteElementB</span> <span class="token keyword">extends</span> <span class="token class-name">Element</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Accept</span><span class="token punctuation">(</span><span class="token class-name">Visitor</span> visitor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token namespace">visitor<span class="token punctuation">.</span></span>VisitConcreteElementB</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ObjectStructure</strong> : 可以枚举它的元素，可以提供一个高层的接口以允许访问者访问它的元素。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ObjectStructure</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Element</span><span class="token punctuation">&gt;</span></span> elements <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Element</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Attach</span><span class="token punctuation">(</span><span class="token class-name">Element</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        elements<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Detach</span><span class="token punctuation">(</span><span class="token class-name">Element</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        elements<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Accept</span><span class="token punctuation">(</span><span class="token class-name">Visitor</span> visitor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Element</span> elem <span class="token operator">:</span> elements<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name"><span class="token namespace">elem<span class="token punctuation">.</span></span>Accept</span><span class="token punctuation">(</span>visitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VisitorPattern</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ObjectStructure</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectStructure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">o<span class="token punctuation">.</span></span>Attach</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConcreteElementA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">o<span class="token punctuation">.</span></span>Attach</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConcreteElementB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">ConcreteVisitor1</span> v1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteVisitor1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ConcreteVisitor2</span> v2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteVisitor2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name"><span class="token namespace">o<span class="token punctuation">.</span></span>Accept</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">o<span class="token punctuation">.</span></span>Accept</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ConcreteVisitor1 访问 ConcreteElementA
ConcreteVisitor1 访问 ConcreteElementB
ConcreteVisitor2 访问 ConcreteElementA
ConcreteVisitor2 访问 ConcreteElementB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码" aria-hidden="true">#</a> 伪代码</h2><p>在本例中， <strong>访问者</strong>模式为几何图像层次结构添加了对于 XML 文件导出功能的支持。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210520174801.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 元素接口声明了一个\`accept（接收）\`方法，它会将访问者基础接口作为一个参</span>
<span class="token comment">// 数。</span>
<span class="token keyword">interface</span> <span class="token class-name">Shape</span> is
    method <span class="token function">move</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
    method <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    method <span class="token function">accept</span><span class="token punctuation">(</span>v<span class="token operator">:</span> <span class="token class-name">Visitor</span><span class="token punctuation">)</span>

<span class="token comment">// 每个具体元素类都必须以特定方式实现\`accept\`方法，使其能调用相应元素类的</span>
<span class="token comment">// 访问者方法。</span>
<span class="token keyword">class</span> <span class="token class-name">Dot</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> is
    <span class="token comment">// ...</span>

    <span class="token comment">// 注意我们正在调用的\`visitDot（访问点）\`方法与当前类的名称相匹配。</span>
    <span class="token comment">// 这样我们能让访问者知晓与其交互的元素类。</span>
    method <span class="token function">accept</span><span class="token punctuation">(</span>v<span class="token operator">:</span> <span class="token class-name">Visitor</span><span class="token punctuation">)</span> is
        v<span class="token punctuation">.</span><span class="token function">visitDot</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> is
    <span class="token comment">// ...</span>
    method <span class="token function">accept</span><span class="token punctuation">(</span>v<span class="token operator">:</span> <span class="token class-name">Visitor</span><span class="token punctuation">)</span> is
        v<span class="token punctuation">.</span><span class="token function">visitCircle</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> is
    <span class="token comment">// ...</span>
    method <span class="token function">accept</span><span class="token punctuation">(</span>v<span class="token operator">:</span> <span class="token class-name">Visitor</span><span class="token punctuation">)</span> is
        v<span class="token punctuation">.</span><span class="token function">visitRectangle</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">CompoundShape</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> is
    <span class="token comment">// ...</span>
    method <span class="token function">accept</span><span class="token punctuation">(</span>v<span class="token operator">:</span> <span class="token class-name">Visitor</span><span class="token punctuation">)</span> is
        v<span class="token punctuation">.</span><span class="token function">visitCompoundShape</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>


<span class="token comment">// 访问者接口声明了一组与元素类对应的访问方法。访问方法的签名能让访问者准</span>
<span class="token comment">// 确辨别出与其交互的元素所属的类。</span>
<span class="token keyword">interface</span> <span class="token class-name">Visitor</span> is
    method <span class="token function">visitDot</span><span class="token punctuation">(</span>d<span class="token operator">:</span> <span class="token class-name">Dot</span><span class="token punctuation">)</span>
    method <span class="token function">visitCircle</span><span class="token punctuation">(</span>c<span class="token operator">:</span> <span class="token class-name">Circle</span><span class="token punctuation">)</span>
    method <span class="token function">visitRectangle</span><span class="token punctuation">(</span>r<span class="token operator">:</span> <span class="token class-name">Rectangle</span><span class="token punctuation">)</span>
    method <span class="token function">visitCompoundShape</span><span class="token punctuation">(</span>cs<span class="token operator">:</span> <span class="token class-name">CompoundShape</span><span class="token punctuation">)</span>

<span class="token comment">// 具体访问者实现了同一算法的多个版本，而且该算法能与所有具体类进行交互。</span>
<span class="token comment">//</span>
<span class="token comment">// 访问者模式在复杂对象结构（例如组合树）上使用时能发挥最大作用。在这种情</span>
<span class="token comment">// 况下，它可以存储算法的一些中间状态，并同时在结构中的不同对象上执行访问</span>
<span class="token comment">// 者方法。这可能会非常有帮助。</span>
<span class="token keyword">class</span> <span class="token class-name">XMLExportVisitor</span> <span class="token keyword">implements</span> <span class="token class-name">Visitor</span> is
    method <span class="token function">visitDot</span><span class="token punctuation">(</span>d<span class="token operator">:</span> <span class="token class-name">Dot</span><span class="token punctuation">)</span> is
        <span class="token comment">// 导出点（dot）的 ID 和中心坐标。</span>

    method <span class="token function">visitCircle</span><span class="token punctuation">(</span>c<span class="token operator">:</span> <span class="token class-name">Circle</span><span class="token punctuation">)</span> is
        <span class="token comment">// 导出圆（circle）的 ID 、中心坐标和半径。</span>

    method <span class="token function">visitRectangle</span><span class="token punctuation">(</span>r<span class="token operator">:</span> <span class="token class-name">Rectangle</span><span class="token punctuation">)</span> is
        <span class="token comment">// 导出长方形（rectangle）的 ID 、左上角坐标、宽和长。</span>

    method <span class="token function">visitCompoundShape</span><span class="token punctuation">(</span>cs<span class="token operator">:</span> <span class="token class-name">CompoundShape</span><span class="token punctuation">)</span> is
        <span class="token comment">// 导出图形（shape）的 ID 和其子项目的 ID 列表。</span>


<span class="token comment">// 客户端代码可在不知晓具体类的情况下在一组元素上运行访问者操作。“接收”操</span>
<span class="token comment">// 作会将调用定位到访问者对象的相应操作上。</span>
<span class="token keyword">class</span> <span class="token class-name">Application</span> is
    field allShapes<span class="token operator">:</span> array of <span class="token class-name">Shapes</span>

    method <span class="token function">export</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        exportVisitor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLExportVisitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        foreach <span class="token punctuation">(</span>shape in allShapes<span class="token punctuation">)</span> <span class="token keyword">do</span>
            shape<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>exportVisitor<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><p><strong>使用示例：</strong> 访问者不是常用的设计模式， 因为它不仅复杂， 应用范围也比较狭窄。</p><p>这里是 Java 程序库代码中该模式的一些示例：</p>`,22),g={href:"http://docs.oracle.com/javase/8/docs/api/javax/lang/model/element/AnnotationValue.html",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"javax.lang.model.element.AnnotationValue",-1),_={href:"http://docs.oracle.com/javase/8/docs/api/javax/lang/model/element/AnnotationValueVisitor.html",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"Annotation­Value­Visitor",-1),w={href:"http://docs.oracle.com/javase/8/docs/api/javax/lang/model/element/Element.html",target:"_blank",rel:"noopener noreferrer"},V=n("code",null,"javax.lang.model.element.Element",-1),C={href:"http://docs.oracle.com/javase/8/docs/api/javax/lang/model/element/ElementVisitor.html",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"Element­Visitor",-1),j={href:"http://docs.oracle.com/javase/8/docs/api/javax/lang/model/type/TypeMirror.html",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"javax.lang.model.type.TypeMirror",-1),A={href:"http://docs.oracle.com/javase/8/docs/api/javax/lang/model/type/TypeVisitor.html",target:"_blank",rel:"noopener noreferrer"},S=n("code",null,"Type­Visitor",-1),B={href:"http://docs.oracle.com/javase/8/docs/api/java/nio/file/FileVisitor.html",target:"_blank",rel:"noopener noreferrer"},D=n("code",null,"java.nio.file.FileVisitor",-1),N={href:"http://docs.oracle.com/javase/8/docs/api/java/nio/file/SimpleFileVisitor.html",target:"_blank",rel:"noopener noreferrer"},O=n("code",null,"Simple­File­Visitor",-1),q={href:"http://docs.oracle.com/javaee/7/api/javax/faces/component/visit/VisitContext.html",target:"_blank",rel:"noopener noreferrer"},I=n("code",null,"javax.faces.component.visit.VisitContext",-1),L={href:"http://docs.oracle.com/javaee/7/api/javax/faces/component/visit/VisitCallback.html",target:"_blank",rel:"noopener noreferrer"},R=n("code",null,"Visit­Callback",-1),F=n("h2",{id:"与其他模式的关系",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#与其他模式的关系","aria-hidden":"true"},"#"),s(" 与其他模式的关系")],-1),M={href:"https://refactoringguru.cn/design-patterns/visitor",target:"_blank",rel:"noopener noreferrer"},T={href:"https://refactoringguru.cn/design-patterns/command",target:"_blank",rel:"noopener noreferrer"},X={href:"https://refactoringguru.cn/design-patterns/visitor",target:"_blank",rel:"noopener noreferrer"},z={href:"https://refactoringguru.cn/design-patterns/composite",target:"_blank",rel:"noopener noreferrer"},H={href:"https://refactoringguru.cn/design-patterns/visitor",target:"_blank",rel:"noopener noreferrer"},J={href:"https://refactoringguru.cn/design-patterns/iterator",target:"_blank",rel:"noopener noreferrer"},P=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),G={href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"},K={href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://refactoringguru.cn/design-patterns/catalog",target:"_blank",rel:"noopener noreferrer"};function U(W,Y){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("ol",null,[r,d,k,m,n("li",null,[v,s(" （Client） 通常会作为集合或其他复杂对象 （例如一个"),n("a",b,[s("组合"),e(a)]),s("树） 的代表。 客户端通常不知晓所有的具体元素类， 因为它们会通过抽象接口与集合中的对象进行交互。")])]),h,n("ul",null,[n("li",null,[n("a",g,[f,e(a)]),s(" 和 "),n("a",_,[y,e(a)])]),n("li",null,[n("a",w,[V,e(a)]),s(" 和 "),n("a",C,[x,e(a)])]),n("li",null,[n("a",j,[E,e(a)]),s(" 和 "),n("a",A,[S,e(a)])]),n("li",null,[n("a",B,[D,e(a)]),s(" 和 "),n("a",N,[O,e(a)])]),n("li",null,[n("a",q,[I,e(a)]),s(" 和 "),n("a",L,[R,e(a)])])]),F,n("ul",null,[n("li",null,[s("你可以将"),n("a",M,[s("访问者模式"),e(a)]),s("视为"),n("a",T,[s("命令模式"),e(a)]),s("的加强版本， 其对象可对不同类的多种对象执行操作。")]),n("li",null,[s("你可以使用"),n("a",X,[s("访问者"),e(a)]),s("对整个"),n("a",z,[s("组合模式"),e(a)]),s("树执行操作。")]),n("li",null,[s("可以同时使用"),n("a",H,[s("访问者"),e(a)]),s("和"),n("a",J,[s("迭代器模式"),e(a)]),s("来遍历复杂数据结构， 并对其中的元素执行所需操作， 即使这些元素所属的类完全不同。")])]),P,n("ul",null,[n("li",null,[n("a",G,[s("《Head First 设计模式》"),e(a)])]),n("li",null,[n("a",K,[s("《大话设计模式》"),e(a)])]),n("li",null,[n("a",Q,[s("设计模式教程"),e(a)])])])])}const nn=p(i,[["render",U],["__file","23.访问者模式.html.vue"]]);export{nn as default};
