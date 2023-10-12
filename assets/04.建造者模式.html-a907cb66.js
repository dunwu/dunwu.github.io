import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as s,d as e,e as t}from"./app-2793f0f0.js";const i={},u=t('<h1 id="设计模式之建造者模式" tabindex="-1"><a class="header-anchor" href="#设计模式之建造者模式" aria-hidden="true">#</a> 设计模式之建造者模式</h1><h2 id="意图" tabindex="-1"><a class="header-anchor" href="#意图" aria-hidden="true">#</a> 意图</h2><p><strong>建造者模式</strong>（Builder）是一种创建型设计模式， 使你能够分步骤创建复杂对象。 该模式允许你使用相同的创建代码生成不同类型和形式的对象。</p><p>使用建造者模式，用户就只需要指定需要建造的类型，具体的建造过程和细节并不需要知道。</p><p>建造者模式允许修改一个产品的内部表示。</p><p>它将构造和表示两块代码隔离开来。</p><p>它很好的控制了构建过程。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200724105836.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>建造者模式流程说明：</p><ol><li>客户端创建 Director 对象并配置它所需要的 Builder 对象。</li><li>Director 负责通知 builder 何时建造 product 的部件。</li><li>Builder 处理 director 的请求并添加 product 的部件。</li><li>客户端从 builder 处获得 product。</li></ol><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2>',11),r=n("li",null,"使用建造者模式可避免 “重叠构造函数 （telescopic constructor）” 的出现。",-1),d=n("li",null,"当你希望使用代码创建不同形式的产品时， 可使用建造者模式。",-1),k={href:"https://refactoringguru.cn/design-patterns/composite",target:"_blank",rel:"noopener noreferrer"},v=t(`<h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210506090518.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li><strong>建造者</strong> （Builder） 接口声明在所有类型建造者中通用的产品构造步骤。</li><li><strong>具体建造者</strong> （Concrete Builders） 提供构造过程的不同实现。 具体建造者也可以构造不遵循通用接口的产品。</li><li><strong>产品</strong> （Products） 是最终生成的对象。 由不同建造者构造的产品无需属于同一类层次结构或接口。</li><li><strong>主管</strong> （Director） 类定义调用构造步骤的顺序， 这样你就可以创建和复用特定的产品配置。</li><li><strong>客户端</strong> （Client） 必须将某个建造者对象与主管类关联。 一般情况下， 你只需通过主管类构造函数的参数进行一次性关联即可。 此后主管类就能使用建造者对象完成后续所有的构造任务。 但在客户端将建造者对象传递给主管类制造方法时还有另一种方式。 在这种情况下， 你在使用主管类生产产品时每次都可以使用不同的建造者。</li></ol><p>【Product】产品类，由多个部件构成。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> parts <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">AddPart</span><span class="token punctuation">(</span><span class="token class-name">String</span> part<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parts<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>part<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;============== 产品创建 ==============&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> part <span class="token operator">:</span> parts<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>part<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【Builder】</p><p>抽象建造者，确定产品由 ABC 三个部件构成，并声明一个得到产品建造后结果的方法 getResult。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">Builder</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildPartA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildPartB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildPartC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Product</span> <span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【ConcreteBuilder】</p><p>实现 Builder 接口中的具体方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ConcreteBuilder</span> <span class="token keyword">implements</span> <span class="token class-name">Builder</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Product</span> product <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Product</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildPartA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token namespace">product<span class="token punctuation">.</span></span>AddPart</span><span class="token punctuation">(</span><span class="token string">&quot;部件A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildPartB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token namespace">product<span class="token punctuation">.</span></span>AddPart</span><span class="token punctuation">(</span><span class="token string">&quot;部件B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildPartC</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token namespace">product<span class="token punctuation">.</span></span>AddPart</span><span class="token punctuation">(</span><span class="token string">&quot;部件C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Product</span> <span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> product<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【Director】</p><p>指挥者类，指挥建造 Product 的过程（控制构建各部分组件的顺序）。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Director</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">construct</span><span class="token punctuation">(</span><span class="token class-name">Builder</span> builder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">buildPartC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">buildPartA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">buildPartB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【客户端】</p><p>用户并不需要知道具体的建造过程，只需指定建造 Product 具体类型。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BuilderPattern</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Director</span> director <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Director</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Builder</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        director<span class="token punctuation">.</span><span class="token function">construct</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Product</span> product <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        product<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【输出】</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>============== 产品创建 ==============
部件C
部件A
部件B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码" aria-hidden="true">#</a> 伪代码</h2><p>下面关于<strong>建造者</strong>模式的例子演示了你可以如何复用相同的对象构造代码来生成不同类型的产品——例如汽车 （Car）——及其相应的使用手册 （Manual）。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210506090759.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 只有当产品较为复杂且需要详细配置时，使用建造者模式才有意义。下面的两个</span>
<span class="token comment">// 产品尽管没有同样的接口，但却相互关联。</span>
<span class="token keyword">class</span> <span class="token class-name">Car</span> is
    <span class="token comment">// 一辆汽车可能配备有 GPS 设备、行车电脑和几个座位。不同型号的汽车（</span>
    <span class="token comment">// 运动型轿车、SUV 和敞篷车）可能会安装或启用不同的功能。</span>

<span class="token keyword">class</span> <span class="token class-name">Manual</span> is
    <span class="token comment">// 用户使用手册应该根据汽车配置进行编制，并介绍汽车的所有功能。</span>


<span class="token comment">// 建造者接口声明了创建产品对象不同部件的方法。</span>
<span class="token keyword">interface</span> <span class="token class-name">Builder</span> is
    method <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    method <span class="token function">setSeats</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
    method <span class="token function">setEngine</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
    method <span class="token function">setTripComputer</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
    method <span class="token function">setGPS</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>

<span class="token comment">// 具体建造者类将遵循建造者接口并提供生成步骤的具体实现。你的程序中可能会</span>
<span class="token comment">// 有多个以不同方式实现的建造者变体。</span>
<span class="token keyword">class</span> <span class="token class-name">CarBuilder</span> <span class="token keyword">implements</span> <span class="token class-name">Builder</span> is
    <span class="token keyword">private</span> field car<span class="token operator">:</span><span class="token class-name">Car</span>

    <span class="token comment">// 一个新的建造者实例必须包含一个在后续组装过程中使用的空产品对象。</span>
    constructor <span class="token class-name">CarBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// reset（重置）方法可清除正在生成的对象。</span>
    method <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token keyword">this</span><span class="token punctuation">.</span>car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 所有生成步骤都会与同一个产品实例进行交互。</span>
    method <span class="token function">setSeats</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> is
        <span class="token comment">// 设置汽车座位的数量。</span>

    method <span class="token function">setEngine</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> is
        <span class="token comment">// 安装指定的引擎。</span>

    method <span class="token function">setTripComputer</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> is
        <span class="token comment">// 安装行车电脑。</span>

    method <span class="token function">setGPS</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> is
        <span class="token comment">// 安装全球定位系统。</span>

    <span class="token comment">// 具体建造者需要自行提供获取结果的方法。这是因为不同类型的建造者可能</span>
    <span class="token comment">// 会创建不遵循相同接口的、完全不同的产品。所以也就无法在建造者接口中</span>
    <span class="token comment">// 声明这些方法（至少在静态类型的编程语言中是这样的）。</span>
    <span class="token comment">//</span>
    <span class="token comment">// 通常在建造者实例将结果返回给客户端后，它们应该做好生成另一个产品的</span>
    <span class="token comment">// 准备。因此建造者实例通常会在 \`getProduct（获取产品）\`方法主体末尾</span>
    <span class="token comment">// 调用重置方法。但是该行为并不是必需的，你也可让建造者等待客户端明确</span>
    <span class="token comment">// 调用重置方法后再去处理之前的结果。</span>
    method <span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token class-name">Car</span> is
        product <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>car
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> product

<span class="token comment">// 建造者与其他创建型模式的不同之处在于：它让你能创建不遵循相同接口的产品。</span>
<span class="token keyword">class</span> <span class="token class-name">CarManualBuilder</span> <span class="token keyword">implements</span> <span class="token class-name">Builder</span> is
    <span class="token keyword">private</span> field manual<span class="token operator">:</span><span class="token class-name">Manual</span>

    constructor <span class="token class-name">CarManualBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    method <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token keyword">this</span><span class="token punctuation">.</span>manual <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Manual</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    method <span class="token function">setSeats</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> is
        <span class="token comment">// 添加关于汽车座椅功能的文档。</span>

    method <span class="token function">setEngine</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> is
        <span class="token comment">// 添加关于引擎的介绍。</span>

    method <span class="token function">setTripComputer</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> is
        <span class="token comment">// 添加关于行车电脑的介绍。</span>

    method <span class="token function">setGPS</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> is
        <span class="token comment">// 添加关于 GPS 的介绍。</span>

    method <span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token class-name">Manual</span> is
        <span class="token comment">// 返回使用手册并重置建造者。</span>


<span class="token comment">// 主管只负责按照特定顺序执行生成步骤。其在根据特定步骤或配置来生成产品时</span>
<span class="token comment">// 会很有帮助。由于客户端可以直接控制建造者，所以严格意义上来说，主管类并</span>
<span class="token comment">// 不是必需的。</span>
<span class="token keyword">class</span> <span class="token class-name">Director</span> is
    <span class="token keyword">private</span> field builder<span class="token operator">:</span><span class="token class-name">Builder</span>

    <span class="token comment">// 主管可同由客户端代码传递给自身的任何建造者实例进行交互。客户端可通</span>
    <span class="token comment">// 过这种方式改变最新组装完毕的产品的最终类型。</span>
    method <span class="token function">setBuilder</span><span class="token punctuation">(</span>builder<span class="token operator">:</span><span class="token class-name">Builder</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>builder <span class="token operator">=</span> builder

    <span class="token comment">// 主管可使用同样的生成步骤创建多个产品变体。</span>
    method <span class="token function">constructSportsCar</span><span class="token punctuation">(</span>builder<span class="token operator">:</span> <span class="token class-name">Builder</span><span class="token punctuation">)</span> is
        builder<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        builder<span class="token punctuation">.</span><span class="token function">setSeats</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
        builder<span class="token punctuation">.</span><span class="token function">setEngine</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SportEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        builder<span class="token punctuation">.</span><span class="token function">setTripComputer</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
        builder<span class="token punctuation">.</span><span class="token function">setGPS</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>

    method <span class="token function">constructSUV</span><span class="token punctuation">(</span>builder<span class="token operator">:</span> <span class="token class-name">Builder</span><span class="token punctuation">)</span> is
        <span class="token comment">// ...</span>


<span class="token comment">// 客户端代码会创建建造者对象并将其传递给主管，然后执行构造过程。最终结果</span>
<span class="token comment">// 将需要从建造者对象中获取。</span>
<span class="token keyword">class</span> <span class="token class-name">Application</span> is

    method <span class="token function">makeCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        director <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Director</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token class-name">CarBuilder</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CarBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        director<span class="token punctuation">.</span><span class="token function">constructSportsCar</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span>
        <span class="token class-name">Car</span> car <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token class-name">CarManualBuilder</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CarManualBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        director<span class="token punctuation">.</span><span class="token function">constructSportsCar</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span>

        <span class="token comment">// 最终产品通常需要从建造者对象中获取，因为主管不知晓具体建造者和</span>
        <span class="token comment">// 产品的存在，也不会对其产生依赖。</span>
        <span class="token class-name">Manual</span> manual <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><p><strong>使用示例：</strong> 建造者模式是 Java 世界中的一个著名模式。 当你需要创建一个可能有许多配置选项的对象时， 该模式会特别有用。</p><p>建造者在 Java 核心程序库中得到了广泛的应用：</p>`,26),m={href:"http://docs.oracle.com/javase/8/docs/api/java/lang/StringBuilder.html#append-boolean-",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"java.lang.StringBuilder#append()",-1),h=n("code",null,"非同步",-1),g={href:"http://docs.oracle.com/javase/8/docs/api/java/lang/StringBuffer.html#append-boolean-",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"java.lang.StringBuffer#append()",-1),_=n("code",null,"同步",-1),w={href:"http://docs.oracle.com/javase/8/docs/api/java/nio/ByteBuffer.html#put-byte-",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"java.nio.ByteBuffer#put()",-1),B={href:"http://docs.oracle.com/javase/8/docs/api/java/nio/CharBuffer.html#put-char-",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"Char­Buffer",-1),C={href:"http://docs.oracle.com/javase/8/docs/api/java/nio/ShortBuffer.html#put-short-",target:"_blank",rel:"noopener noreferrer"},P=n("code",null,"Short­Buffer",-1),S={href:"http://docs.oracle.com/javase/8/docs/api/java/nio/IntBuffer.html#put-int-",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"Int­Buffer",-1),A={href:"http://docs.oracle.com/javase/8/docs/api/java/nio/LongBuffer.html#put-long-",target:"_blank",rel:"noopener noreferrer"},D=n("code",null,"Long­Buffer",-1),M={href:"http://docs.oracle.com/javase/8/docs/api/java/nio/FloatBuffer.html#put-float-",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"Float­Buffer",-1),E={href:"http://docs.oracle.com/javase/8/docs/api/java/nio/DoubleBuffer.html#put-double-",target:"_blank",rel:"noopener noreferrer"},V=n("code",null,"Double­Buffer",-1),G={href:"http://docs.oracle.com/javase/8/docs/api/java/lang/Appendable.html",target:"_blank",rel:"noopener noreferrer"},L=n("code",null,"java.lang.Appendable",-1),T=n("p",null,[n("strong",null,"识别方法"),s("： 建造者模式可以通过类来识别， 它拥有一个构建方法和多个配置结果对象的方法。 建造者方法通常支持方法链 （例如 "),n("code",null,"someBuilder->setValueA(1)->setValueB(2)->create()"),s(" ）")],-1),I=n("h2",{id:"与其他模式的关系",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#与其他模式的关系","aria-hidden":"true"},"#"),s(" 与其他模式的关系")],-1),N={href:"https://refactoringguru.cn/design-patterns/factory-method",target:"_blank",rel:"noopener noreferrer"},O={href:"https://refactoringguru.cn/design-patterns/abstract-factory",target:"_blank",rel:"noopener noreferrer"},R={href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"},z={href:"https://refactoringguru.cn/design-patterns/builder",target:"_blank",rel:"noopener noreferrer"},F={href:"https://refactoringguru.cn/design-patterns/builder",target:"_blank",rel:"noopener noreferrer"},J={href:"https://refactoringguru.cn/design-patterns/abstract-factory",target:"_blank",rel:"noopener noreferrer"},U=n("em",null,"抽象工厂",-1),H=n("em",null,"建造者",-1),K={href:"https://refactoringguru.cn/design-patterns/composite",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://refactoringguru.cn/design-patterns/builder",target:"_blank",rel:"noopener noreferrer"},W={href:"https://refactoringguru.cn/design-patterns/builder",target:"_blank",rel:"noopener noreferrer"},X={href:"https://refactoringguru.cn/design-patterns/bridge",target:"_blank",rel:"noopener noreferrer"},Y=n("em",null,"主管",-1),Z=n("em",null,"建造者",-1),$=n("em",null,"实现",-1),nn={href:"https://refactoringguru.cn/design-patterns/abstract-factory",target:"_blank",rel:"noopener noreferrer"},sn={href:"https://refactoringguru.cn/design-patterns/builder",target:"_blank",rel:"noopener noreferrer"},an={href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"},en={href:"https://refactoringguru.cn/design-patterns/singleton",target:"_blank",rel:"noopener noreferrer"},tn=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),pn={href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"},on={href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"},cn={href:"https://refactoringguru.cn/design-patterns/catalog",target:"_blank",rel:"noopener noreferrer"};function ln(un,rn){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("ul",null,[r,d,n("li",null,[s("使用建造者构造"),n("a",k,[s("组合"),e(a)]),s("树或其他复杂对象。")])]),v,n("ul",null,[n("li",null,[n("a",m,[b,e(a)]),s(" （ "),h,s(" ）")]),n("li",null,[n("a",g,[f,e(a)]),s(" （ "),_,s(" ）")]),n("li",null,[n("a",w,[y,e(a)]),s(" （还有 "),n("a",B,[j,e(a)]),s("、 "),n("a",C,[P,e(a)]),s("、 "),n("a",S,[x,e(a)]),s("、 "),n("a",A,[D,e(a)]),s("、 "),n("a",M,[q,e(a)]),s(" 和 "),n("a",E,[V,e(a)]),s("）")]),n("li",null,[n("a",G,[L,e(a)]),s("的所有实现")])]),T,I,n("ul",null,[n("li",null,[s("在许多设计工作的初期都会使用"),n("a",N,[s("工厂方法模式"),e(a)]),s(" （较为简单， 而且可以更方便地通过子类进行定制）， 随后演化为使用"),n("a",O,[s("抽象工厂模式"),e(a)]),s("、 "),n("a",R,[s("原型模式"),e(a)]),s("或"),n("a",z,[s("建造者模式"),e(a)]),s(" （更灵活但更加复杂）。")]),n("li",null,[n("a",F,[s("建造者"),e(a)]),s("重点关注如何分步生成复杂对象。 "),n("a",J,[s("抽象工厂"),e(a)]),s("专门用于生产一系列相关对象。 "),U,s("会马上返回产品， "),H,s("则允许你在获取产品前执行一些额外构造步骤。")]),n("li",null,[s("你可以在创建复杂"),n("a",K,[s("组合模式"),e(a)]),s("树时使用"),n("a",Q,[s("建造者"),e(a)]),s("， 因为这可使其构造步骤以递归的方式运行。")]),n("li",null,[s("你可以结合使用"),n("a",W,[s("建造者"),e(a)]),s("和"),n("a",X,[s("桥接模式"),e(a)]),s("： "),Y,s("类负责抽象工作， 各种不同的"),Z,s("负责"),$,s("工作。")]),n("li",null,[n("a",nn,[s("抽象工厂"),e(a)]),s("、 "),n("a",sn,[s("建造者"),e(a)]),s("和"),n("a",an,[s("原型"),e(a)]),s("都可以用"),n("a",en,[s("单例模式"),e(a)]),s("来实现。")])]),tn,n("ul",null,[n("li",null,[n("a",pn,[s("《Head First 设计模式》"),e(a)])]),n("li",null,[n("a",on,[s("《大话设计模式》"),e(a)])]),n("li",null,[n("a",cn,[s("设计模式教程"),e(a)])])])])}const vn=p(i,[["render",ln],["__file","04.建造者模式.html.vue"]]);export{vn as default};
