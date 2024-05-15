import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,a as n,d as e,b as s,e as l}from"./app-d70a109d.js";const i={},u=l(`<h1 id="设计模式之享元模式" tabindex="-1"><a class="header-anchor" href="#设计模式之享元模式" aria-hidden="true">#</a> 设计模式之享元模式</h1><h2 id="意图" tabindex="-1"><a class="header-anchor" href="#意图" aria-hidden="true">#</a> 意图</h2><p><strong>享元模式</strong> (Flyweight) 是一种结构型设计模式，它摒弃了在每个对象中保存所有数据的方式， 通过共享多个对象所共有的相同状态， 让你能在有限的内存容量中载入更多对象。</p><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><ul><li>仅在程序必须支持大量对象且没有足够的内存容量时使用享元模式。</li></ul><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210430182947.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="结构说明" tabindex="-1"><a class="header-anchor" href="#结构说明" aria-hidden="true">#</a> 结构说明</h3><ol><li>享元模式只是一种优化。 在应用该模式之前， 你要确定程序中存在与大量类似对象同时占用内存相关的内存消耗问题， 并且确保该问题无法使用其他更好的方式来解决。</li><li><strong>享元</strong> （Flyweight） 类包含原始对象中部分能在多个对象中共享的状态。 同一享元对象可在许多不同情景中使用。 享元中存储的状态被称为 “内在状态”。 传递给享元方法的状态被称为 “外在状态”。</li><li><strong>情景</strong> （Context） 类包含原始对象中各不相同的外在状态。 情景与享元对象组合在一起就能表示原始对象的全部状态。</li><li>通常情况下， 原始对象的行为会保留在享元类中。 因此调用享元方法必须提供部分外在状态作为参数。 但你也可将行为移动到情景类中， 然后将连入的享元作为单纯的数据对象。</li><li><strong>客户端</strong> （Client） 负责计算或存储享元的外在状态。 在客户端看来， 享元是一种可在运行时进行配置的模板对象， 具体的配置方式为向其方法中传入一些情景数据参数。</li><li><strong>享元工厂</strong> （Flyweight Factory） 会对已有享元的缓存池进行管理。 有了工厂后， 客户端就无需直接创建享元， 它们只需调用工厂并向其传递目标享元的一些内在状态即可。 工厂会根据参数在之前已创建的享元中进行查找， 如果找到满足条件的享元就将其返回； 如果没有找到就根据参数新建享元。</li></ol><h3 id="结构代码范式" tabindex="-1"><a class="header-anchor" href="#结构代码范式" aria-hidden="true">#</a> 结构代码范式</h3><p><strong>Flyweight</strong> : 它是所有具体享元类的超类或接口，通过这个接口，Flyweight 可以接受并作用于外部状态。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Flyweight</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token keyword">int</span> extrinsicstates<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ConcreteFlyweight</strong> : 是继承 Flyweight 超类或实现 Flyweight 接口，并为内部状态增加存储空间。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ConcreteFlyweight</span> <span class="token keyword">extends</span> <span class="token class-name">Flyweight</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token keyword">int</span> extrinsicstates<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;共享的Flyweight : &quot;</span> <span class="token operator">+</span> extrinsicstates<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>UnsharedConcreteFlyweight</strong> : 指那些不需要共享的 Flyweight 子类，因为 Flyweight 接口共享成为可能，但它并不强制共享。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">UnsharedConcreteFlyweight</span> <span class="token keyword">extends</span> <span class="token class-name">Flyweight</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token keyword">int</span> extrinsicstates<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;不共享的Flyweight : &quot;</span> <span class="token operator">+</span> extrinsicstates<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>FlywightFactory</strong> :是一个享元工厂，用来创建并管理 Flyweight 对象。它主要是用来确保合理地共享 Flyweight ，当用户请求一个 Flyweight 时， FlyweightFactory 对象提供一个已创建的实例或创建一个（如果对象不存在的话）。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">FlywightFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Hashtable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Flyweight</span><span class="token punctuation">&gt;</span></span> flyweights <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hashtable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Flyweight</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">FlywightFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        flyweights<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;X&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteFlyweight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        flyweights<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;Y&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteFlyweight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        flyweights<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;Z&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteFlyweight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Flyweight</span> <span class="token function">getFlyweight</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Flyweight</span><span class="token punctuation">)</span>flyweights<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FlyweightPattern</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> extrinsicstates <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token class-name">FlywightFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FlywightFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Flyweight</span> fx <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">getFlyweight</span><span class="token punctuation">(</span><span class="token string">&quot;X&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        fx<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span>extrinsicstates<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Flyweight</span> fy <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">getFlyweight</span><span class="token punctuation">(</span><span class="token string">&quot;Y&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        fy<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token operator">++</span>extrinsicstates<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Flyweight</span> fz <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">getFlyweight</span><span class="token punctuation">(</span><span class="token string">&quot;Z&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        fz<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token operator">++</span>extrinsicstates<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Flyweight</span> uf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UnsharedConcreteFlyweight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        uf<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token operator">++</span>extrinsicstates<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>共享的Flyweight : 1
共享的Flyweight : 2
共享的Flyweight : 3
不共享的Flyweight : 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码" aria-hidden="true">#</a> 伪代码</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210430183339.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在本例中， <strong>享元</strong>模式能有效减少在画布上渲染数百万个树状对象时所需的内存。</p><p>该模式从主要的 <code>树</code>Tree 类中抽取内在状态， 并将其移动到享元类 <code>树种类</code>Tree­Type 之中。</p><p>最初程序需要在多个对象中存储相同数据， 而现在仅需在几个享元对象中保存数据， 然后在作为情景的 <code>树</code>对象中连入享元即可。 客户端代码使用享元工厂创建树对象并封装搜索指定对象的复杂行为， 并能在需要时复用对象。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 享元类包含一个树的部分状态。这些成员变量保存的数值对于特定树而言是唯一</span>
<span class="token comment">// 的。例如，你在这里找不到树的坐标。但这里有很多树木之间所共有的纹理和颜</span>
<span class="token comment">// 色。由于这些数据的体积通常非常大，所以如果让每棵树都其进行保存的话将耗</span>
<span class="token comment">// 费大量内存。因此，我们可将纹理、颜色和其他重复数据导出到一个单独的对象</span>
<span class="token comment">// 中，然后让众多的单个树对象去引用它。</span>
<span class="token keyword">class</span> <span class="token class-name">TreeType</span> is
    field name
    field color
    field texture
    constructor <span class="token class-name">TreeType</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> color<span class="token punctuation">,</span> texture<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
    method <span class="token function">draw</span><span class="token punctuation">(</span>canvas<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> is
        <span class="token comment">// 1. 创建特定类型、颜色和纹理的位图。</span>
        <span class="token comment">// 2. 在画布坐标 (X,Y) 处绘制位图。</span>

<span class="token comment">// 享元工厂决定是否复用已有享元或者创建一个新的对象。</span>
<span class="token keyword">class</span> <span class="token class-name">TreeFactory</span> is
    <span class="token keyword">static</span> field treeTypes<span class="token operator">:</span> collection of tree types
    <span class="token keyword">static</span> method <span class="token function">getTreeType</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> color<span class="token punctuation">,</span> texture<span class="token punctuation">)</span> is
        type <span class="token operator">=</span> treeTypes<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> color<span class="token punctuation">,</span> texture<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            type <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeType</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> color<span class="token punctuation">,</span> texture<span class="token punctuation">)</span>
            treeTypes<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
        <span class="token keyword">return</span> type

<span class="token comment">// 情景对象包含树状态的外在部分。程序中可以创建数十亿个此类对象，因为它们</span>
<span class="token comment">// 体积很小：仅有两个整型坐标和一个引用成员变量。</span>
<span class="token keyword">class</span> <span class="token class-name">Tree</span> is
    field x<span class="token punctuation">,</span>y
    field type<span class="token operator">:</span> <span class="token class-name">TreeType</span>
    constructor <span class="token class-name">Tree</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
    method <span class="token function">draw</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span> is
        type<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>canvas<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>y<span class="token punctuation">)</span>

<span class="token comment">// 树（Tree）和森林（Forest）类是享元的客户端。如果不打算继续对树类进行开</span>
<span class="token comment">// 发，你可以将它们合并。</span>
<span class="token keyword">class</span> <span class="token class-name">Forest</span> is
    field trees<span class="token operator">:</span> collection of <span class="token class-name">Trees</span>

    method <span class="token function">plantTree</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> name<span class="token punctuation">,</span> color<span class="token punctuation">,</span> texture<span class="token punctuation">)</span> is
        type <span class="token operator">=</span> <span class="token class-name">TreeFactory</span><span class="token punctuation">.</span><span class="token function">getTreeType</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> color<span class="token punctuation">,</span> texture<span class="token punctuation">)</span>
        tree <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tree</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> type<span class="token punctuation">)</span>
        trees<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>tree<span class="token punctuation">)</span>

    method <span class="token function">draw</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span> is
        foreach <span class="token punctuation">(</span>tree in trees<span class="token punctuation">)</span> <span class="token keyword">do</span>
            tree<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><p><strong>使用示例：</strong> 享元模式只有一个目的： 将内存消耗最小化。 如果你的程序没有遇到内存容量不足的问题， 则可以暂时忽略该模式。</p><p>享元模式在核心 Java 程序库中的示例：</p>`,31),r={href:"http://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html#valueOf-int-",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"java.lang.Integer#valueOf(int)",-1),k={href:"http://docs.oracle.com/javase/8/docs/api/java/lang/Boolean.html#valueOf-boolean-",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"Boolean",-1),m={href:"http://docs.oracle.com/javase/8/docs/api/java/lang/Byte.html#valueOf-byte-",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"Byte",-1),g={href:"http://docs.oracle.com/javase/8/docs/api/java/lang/Character.html#valueOf-char-",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"Character",-1),y={href:"http://docs.oracle.com/javase/8/docs/api/java/lang/Short.html#valueOf-short-",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"Short",-1),w={href:"http://docs.oracle.com/javase/8/docs/api/java/lang/Long.html#valueOf-long-",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"Long",-1),F={href:"https://docs.oracle.com/javase/8/docs/api/java/math/BigDecimal.html#valueOf-long-int-",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"Big­Decimal",-1),j=n("p",null,[n("strong",null,"识别方法"),s("： 享元可以通过构建方法来识别， 它会返回缓存对象而不是创建新的对象。")],-1),T=n("h2",{id:"与其他模式的关系",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#与其他模式的关系","aria-hidden":"true"},"#"),s(" 与其他模式的关系")],-1),q={href:"https://refactoringguru.cn/design-patterns/flyweight",target:"_blank",rel:"noopener noreferrer"},C={href:"https://refactoringguru.cn/design-patterns/composite",target:"_blank",rel:"noopener noreferrer"},O={href:"https://refactoringguru.cn/design-patterns/flyweight",target:"_blank",rel:"noopener noreferrer"},B={href:"https://refactoringguru.cn/design-patterns/facade",target:"_blank",rel:"noopener noreferrer"},S={href:"https://refactoringguru.cn/design-patterns/flyweight",target:"_blank",rel:"noopener noreferrer"},z={href:"https://refactoringguru.cn/design-patterns/singleton",target:"_blank",rel:"noopener noreferrer"},I=n("ol",null,[n("li",null,[s("只会有一个单例实体， 但是"),n("em",null,"享元"),s("类可以有多个实体， 各实体的内在状态也可以不同。")]),n("li",null,[n("em",null,"单例"),s("对象可以是可变的。 享元对象是不可变的。")])],-1),L=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),N={href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://refactoringguru.cn/design-patterns/catalog",target:"_blank",rel:"noopener noreferrer"};function H(U,X){const a=p("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[d,e(a)]),s(" （以及 "),n("a",k,[v,e(a)]),s("、 "),n("a",m,[h,e(a)]),s("、 "),n("a",g,[b,e(a)]),s("、 "),n("a",y,[f,e(a)]),s("、 "),n("a",w,[_,e(a)]),s(" 和 "),n("a",F,[x,e(a)]),s("）")])]),j,T,n("ul",null,[n("li",null,[s("你可以使用"),n("a",q,[s("享元模式"),e(a)]),s("实现"),n("a",C,[s("组合模式"),e(a)]),s("树的共享叶节点以节省内存。")]),n("li",null,[n("a",O,[s("享元"),e(a)]),s("展示了如何生成大量的小型对象， "),n("a",B,[s("外观模式"),e(a)]),s("则展示了如何用一个对象来代表整个子系统。")]),n("li",null,[s("如果你能将对象的所有共享状态简化为一个享元对象， 那么"),n("a",S,[s("享元"),e(a)]),s("就和"),n("a",z,[s("单例模式"),e(a)]),s("类似了。 但这两个模式有两个根本性的不同。 "),I])]),L,n("ul",null,[n("li",null,[n("a",N,[s("《Head First 设计模式》"),e(a)])]),n("li",null,[n("a",V,[s("《大话设计模式》"),e(a)])]),n("li",null,[n("a",E,[s("设计模式教程"),e(a)])])])])}const Z=t(i,[["render",H],["__file","index.html.vue"]]);export{Z as default};
