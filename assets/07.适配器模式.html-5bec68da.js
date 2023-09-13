import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as l,a as n,d as e,b as s,e as c}from"./app-ee97b13a.js";const i={},r=c(`<h1 id="设计模式之适配器模式" tabindex="-1"><a class="header-anchor" href="#设计模式之适配器模式" aria-hidden="true">#</a> 设计模式之适配器模式</h1><h2 id="意图" tabindex="-1"><a class="header-anchor" href="#意图" aria-hidden="true">#</a> 意图</h2><p><strong>适配器模式</strong> (Adapter)是一种结构型设计模式， 它能使不兼容的对象能够相互合作。</p><p>适配器模式通过封装对象将复杂的转换过程隐藏于幕后。 被封装的对象甚至察觉不到适配器的存在。</p><p>适配器不仅可以转换不同格式的数据， 其还有助于采用不同接口的对象之间的合作。 它的运作方式如下：</p><ul><li>适配器实现与其中一个现有对象兼容的接口。</li><li>现有对象可以使用该接口安全地调用适配器方法。</li><li>适配器方法被调用后将以另一个对象兼容的格式和顺序将请求传递给该对象。</li></ul><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><ul><li>当你希望使用某个类， 但是其接口与其他代码不兼容时， 可以使用适配器类。</li><li>如果您需要复用这样一些类， 他们处于同一个继承体系， 并且他们又有了额外的一些共同的方法， 但是这些共同的方法不是所有在这一继承体系中的子类所具有的共性。</li></ul><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2><p>适配器实现了其中一个对象的接口， 并对另一个对象进行封装。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210430141928.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="结构说明" tabindex="-1"><a class="header-anchor" href="#结构说明" aria-hidden="true">#</a> 结构说明</h3><ol><li><strong>客户端</strong> （Client） 是包含当前程序业务逻辑的类。</li><li><strong>客户端接口</strong> （Client Interface） 描述了其他类与客户端代码合作时必须遵循的协议。</li><li><strong>服务</strong> （Service） 中有一些功能类 （通常来自第三方或遗留系统）。 客户端与其接口不兼容， 因此无法直接调用其功能。</li><li><strong>适配器</strong> （Adapter） 是一个可以同时与客户端和服务交互的类： 它在实现客户端接口的同时封装了服务对象。 适配器接受客户端通过适配器接口发起的调用， 并将其转换为适用于被封装服务对象的调用。</li><li>客户端代码只需通过接口与适配器交互即可， 无需与具体的适配器类耦合。 因此， 你可以向程序中添加新类型的适配器而无需修改已有代码。 这在服务类的接口被更改或替换时很有用： 你无需修改客户端代码就可以创建新的适配器类。</li></ol><h3 id="结构代码范式" tabindex="-1"><a class="header-anchor" href="#结构代码范式" aria-hidden="true">#</a> 结构代码范式</h3><p>【Target】</p><p>定义用户实际<strong>需要的接口</strong>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Target</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token class-name">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【Adaptee】</p><p>定义一个需要<strong>适配的接口</strong>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Adaptee</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">SpecificRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;特殊请求&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【Adapter】</p><p>通过在内部<strong>包装一个</strong> <strong>Adaptee 对象</strong>，把源接口转换成目标接口。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Adapter</span> <span class="token keyword">extends</span> <span class="token class-name">Target</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Adaptee</span> adaptee <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Adaptee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token namespace">adaptee<span class="token punctuation">.</span></span>SpecificRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【客户端】</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class AdapterPattern {
    public static void main(String[] args) {
        Target target = new Adapter();
        target.Request();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【输出】</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>特殊请求
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码" aria-hidden="true">#</a> 伪代码</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210430165258.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>适配器假扮成一个圆钉 （Round­Peg）， 其半径等于方钉 （Square­Peg） 横截面对角线的一半 （即能够容纳方钉的最小外接圆的半径）。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 假设你有两个接口相互兼容的类：圆孔（Round­Hole）和圆钉（Round­Peg）。</span>
<span class="token keyword">class</span> <span class="token class-name">RoundHole</span> is
    constructor <span class="token class-name">RoundHole</span><span class="token punctuation">(</span>radius<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>

    method <span class="token function">getRadius</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token comment">// 返回孔的半径。</span>

    method <span class="token function">fits</span><span class="token punctuation">(</span>peg<span class="token operator">:</span> <span class="token class-name">RoundPeg</span><span class="token punctuation">)</span> is
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRadius</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> peg<span class="token punctuation">.</span><span class="token function">getRadius</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">RoundPeg</span> is
    constructor <span class="token class-name">RoundPeg</span><span class="token punctuation">(</span>radius<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>

    method <span class="token function">getRadius</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token comment">// 返回钉子的半径。</span>


<span class="token comment">// 但还有一个不兼容的类：方钉（Square­Peg）。</span>
<span class="token keyword">class</span> <span class="token class-name">SquarePeg</span> is
    constructor <span class="token class-name">SquarePeg</span><span class="token punctuation">(</span>width<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>

    method <span class="token function">getWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token comment">// 返回方钉的宽度。</span>


<span class="token comment">// 适配器类让你能够将方钉放入圆孔中。它会对 RoundPeg 类进行扩展，以接收适</span>
<span class="token comment">// 配器对象作为圆钉。</span>
<span class="token keyword">class</span> <span class="token class-name">SquarePegAdapter</span> <span class="token keyword">extends</span> <span class="token class-name">RoundPeg</span> is
    <span class="token comment">// 在实际情况中，适配器中会包含一个 SquarePeg 类的实例。</span>
    <span class="token keyword">private</span> field peg<span class="token operator">:</span> <span class="token class-name">SquarePeg</span>

    constructor <span class="token class-name">SquarePegAdapter</span><span class="token punctuation">(</span>peg<span class="token operator">:</span> <span class="token class-name">SquarePeg</span><span class="token punctuation">)</span> is
        <span class="token keyword">this</span><span class="token punctuation">.</span>peg <span class="token operator">=</span> peg

    method <span class="token function">getRadius</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token comment">// 适配器会假扮为一个圆钉，</span>
        <span class="token comment">// 其半径刚好能与适配器实际封装的方钉搭配起来。</span>
        <span class="token keyword">return</span> peg<span class="token punctuation">.</span><span class="token function">getWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>


<span class="token comment">// 客户端代码中的某个位置。</span>
hole <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RoundHole</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
rpeg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RoundPeg</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
hole<span class="token punctuation">.</span><span class="token function">fits</span><span class="token punctuation">(</span>rpeg<span class="token punctuation">)</span> <span class="token comment">// true</span>

small_sqpeg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SquarePeg</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
large_sqpeg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SquarePeg</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
hole<span class="token punctuation">.</span><span class="token function">fits</span><span class="token punctuation">(</span>small_sqpeg<span class="token punctuation">)</span> <span class="token comment">// 此处无法编译（类型不一致）。</span>

small_sqpeg_adapter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SquarePegAdapter</span><span class="token punctuation">(</span>small_sqpeg<span class="token punctuation">)</span>
large_sqpeg_adapter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SquarePegAdapter</span><span class="token punctuation">(</span>large_sqpeg<span class="token punctuation">)</span>
hole<span class="token punctuation">.</span><span class="token function">fits</span><span class="token punctuation">(</span>small_sqpeg_adapter<span class="token punctuation">)</span> <span class="token comment">// true</span>
hole<span class="token punctuation">.</span><span class="token function">fits</span><span class="token punctuation">(</span>large_sqpeg_adapter<span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><p>适配器模式在 Java 代码中很常见。</p><p>Java 核心程序库中有一些标准的适配器：</p>`,34),u={href:"https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html#asList-T...-",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"java.util.Arrays#asList()",-1),k={href:"https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#list-java.util.Enumeration-",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"java.util.Collections#list()",-1),v={href:"https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#enumeration-java.util.Collection-",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"java.util.Collections#enumeration()",-1),h={href:"https://docs.oracle.com/javase/8/docs/api/java/io/InputStreamReader.html#InputStreamReader-java.io.InputStream-",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"java.io.InputStreamReader(InputStream)",-1),_=n("code",null,"Reader",-1),f={href:"https://docs.oracle.com/javase/8/docs/api/java/io/OutputStreamWriter.html#OutputStreamWriter-java.io.OutputStream-",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"java.io.OutputStreamWriter(OutputStream)",-1),y=n("code",null,"Writer",-1),x={href:"https://docs.oracle.com/javase/8/docs/api/javax/xml/bind/annotation/adapters/XmlAdapter.html#marshal-BoundType-",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"javax.xml.bind.annotation.adapters.XmlAdapter#marshal()",-1),q=n("code",null,"#unmarshal()",-1),S=n("p",null,[n("strong",null,"识别方法"),s("： 适配器可以通过以不同抽象或接口类型实例为参数的构造函数来识别。 当适配器的任何方法被调用时， 它会将参数转换为合适的格式， 然后将调用定向到其封装对象中的一个或多个方法。")],-1),R=n("h2",{id:"与其他模式的关系",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#与其他模式的关系","aria-hidden":"true"},"#"),s(" 与其他模式的关系")],-1),P={href:"https://refactoringguru.cn/design-patterns/bridge",target:"_blank",rel:"noopener noreferrer"},A={href:"https://refactoringguru.cn/design-patterns/adapter",target:"_blank",rel:"noopener noreferrer"},C={href:"https://refactoringguru.cn/design-patterns/adapter",target:"_blank",rel:"noopener noreferrer"},I={href:"https://refactoringguru.cn/design-patterns/decorator",target:"_blank",rel:"noopener noreferrer"},T=n("em",null,"装饰",-1),O=n("em",null,"适配器",-1),W={href:"https://refactoringguru.cn/design-patterns/adapter",target:"_blank",rel:"noopener noreferrer"},H={href:"https://refactoringguru.cn/design-patterns/proxy",target:"_blank",rel:"noopener noreferrer"},B={href:"https://refactoringguru.cn/design-patterns/decorator",target:"_blank",rel:"noopener noreferrer"},E={href:"https://refactoringguru.cn/design-patterns/facade",target:"_blank",rel:"noopener noreferrer"},L={href:"https://refactoringguru.cn/design-patterns/adapter",target:"_blank",rel:"noopener noreferrer"},N=n("em",null,"适配器",-1),V=n("em",null,"外观",-1),z={href:"https://refactoringguru.cn/design-patterns/bridge",target:"_blank",rel:"noopener noreferrer"},J={href:"https://refactoringguru.cn/design-patterns/state",target:"_blank",rel:"noopener noreferrer"},X={href:"https://refactoringguru.cn/design-patterns/strategy",target:"_blank",rel:"noopener noreferrer"},F={href:"https://refactoringguru.cn/design-patterns/adapter",target:"_blank",rel:"noopener noreferrer"},M={href:"https://refactoringguru.cn/design-patterns/composite",target:"_blank",rel:"noopener noreferrer"},D=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),G={href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"},K={href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://refactoringguru.cn/design-patterns/catalog",target:"_blank",rel:"noopener noreferrer"};function U(Y,Z){const a=o("ExternalLinkIcon");return p(),l("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[d,e(a)])]),n("li",null,[n("a",k,[m,e(a)])]),n("li",null,[n("a",v,[g,e(a)])]),n("li",null,[n("a",h,[b,e(a)]),s(" （返回 "),_,s("对象）")]),n("li",null,[n("a",f,[w,e(a)]),s(" （返回 "),y,s("对象）")]),n("li",null,[n("a",x,[j,e(a)]),s(" 和 "),q])]),S,R,n("ul",null,[n("li",null,[n("a",P,[s("桥接模式"),e(a)]),s("通常会于开发前期进行设计， 使你能够将程序的各个部分独立开来以便开发。 另一方面， "),n("a",A,[s("适配器模式"),e(a)]),s("通常在已有程序中使用， 让相互不兼容的类能很好地合作。")]),n("li",null,[n("a",C,[s("适配器"),e(a)]),s("可以对已有对象的接口进行修改， "),n("a",I,[s("装饰模式"),e(a)]),s("则能在不改变对象接口的前提下强化对象功能。 此外， "),T,s("还支持递归组合， "),O,s("则无法实现。")]),n("li",null,[n("a",W,[s("适配器"),e(a)]),s("能为被封装对象提供不同的接口， "),n("a",H,[s("代理模式"),e(a)]),s("能为对象提供相同的接口， "),n("a",B,[s("装饰"),e(a)]),s("则能为对象提供加强的接口。")]),n("li",null,[n("a",E,[s("外观模式"),e(a)]),s("为现有对象定义了一个新接口， "),n("a",L,[s("适配器"),e(a)]),s("则会试图运用已有的接口。 "),N,s("通常只封装一个对象， "),V,s("通常会作用于整个对象子系统上。")]),n("li",null,[n("a",z,[s("桥接"),e(a)]),s("、 "),n("a",J,[s("状态模式"),e(a)]),s("和"),n("a",X,[s("策略模式"),e(a)]),s(" （在某种程度上包括"),n("a",F,[s("适配器"),e(a)]),s("） 模式的接口非常相似。 实际上， 它们都基于"),n("a",M,[s("组合模式"),e(a)]),s("——即将工作委派给其他对象， 不过也各自解决了不同的问题。 模式并不只是以特定方式组织代码的配方， 你还可以使用它们来和其他开发者讨论模式所解决的问题。")])]),D,n("ul",null,[n("li",null,[n("a",G,[s("《Head First 设计模式》"),e(a)])]),n("li",null,[n("a",K,[s("《大话设计模式》"),e(a)])]),n("li",null,[n("a",Q,[s("设计模式教程"),e(a)])])])])}const sn=t(i,[["render",U],["__file","07.适配器模式.html.vue"]]);export{sn as default};
