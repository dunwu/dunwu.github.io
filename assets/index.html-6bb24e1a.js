import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c,a as n,e,b as s,f as l}from"./app-eab0d091.js";const i={},r=l(`<h1 id="设计模式之外观模式" tabindex="-1"><a class="header-anchor" href="#设计模式之外观模式" aria-hidden="true">#</a> 设计模式之外观模式</h1><h2 id="意图" tabindex="-1"><a class="header-anchor" href="#意图" aria-hidden="true">#</a> 意图</h2><p><strong>外观模式</strong> (Facade) 是一种结构型设计模式， 为子系统中的<strong>一组接口</strong>提供一个一致的界面，此模式定义了<strong>一个高层接口</strong>，这个接口使得这一子系统更加容易使用。</p><ul><li>外观模式为复杂子系统提供了一个简单接口，并不为子系统添加新的功能和行为。</li><li>外观模式实现了子系统与客户之间的松耦合关系。</li><li>外观模式没有封装子系统的类，只是提供了简单的接口。 如果应用需要，它并不限制客户使用子系统类。因此可以再系统易用性与通用性之间选择。</li><li>外观模式注重的是简化接口，它更多的时候是从架构的层次去看整个系统，而并非单个类的层次。</li></ul><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><ul><li>如果你需要一个指向复杂子系统的直接接口， 且该接口的功能有限， 则可以使用外观模式。</li><li>如果需要将子系统组织为多层结构， 可以使用外观。</li></ul><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210430174751.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="结构说明" tabindex="-1"><a class="header-anchor" href="#结构说明" aria-hidden="true">#</a> 结构说明</h3><ol><li><p><strong>外观</strong> （Facade） 提供了一种访问特定子系统功能的便捷方式， 其了解如何重定向客户端请求， 知晓如何操作一切活动部件。</p></li><li><p>创建<strong>附加外观</strong> （Additional Facade） 类可以避免多种不相关的功能污染单一外观， 使其变成又一个复杂结构。 客户端和其他外观都可使用附加外观。</p></li><li><p><strong>复杂子系统</strong> （Complex Subsystem） 由数十个不同对象构成。 如果要用这些对象完成有意义的工作， 你必须深入了解子系统的实现细节， 比如按照正确顺序初始化对象和为其提供正确格式的数据。</p><p>子系统类不会意识到外观的存在， 它们在系统内运作并且相互之间可直接进行交互。</p></li><li><p><strong>客户端</strong> （Client） 使用外观代替对子系统对象的直接调用。</p></li></ol><h3 id="结构代码范式" tabindex="-1"><a class="header-anchor" href="#结构代码范式" aria-hidden="true">#</a> 结构代码范式</h3><p><strong>Facade</strong> : 了解每个子系统类的功能，负责分发客户端的请求给各个子系统去处理。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Class1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">op1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;方法1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Class2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">op2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;方法2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Class3</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">op3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;方法3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Subsystem Classes</strong> : 实现子系统功能。在不感知 Facade 的情况下，处理 Facade 对象分配的工作，</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Facade</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Class1</span> one <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Class1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Class2</span> two <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Class2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Class3</span> three <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Class3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">op1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Facade op1()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        one<span class="token punctuation">.</span><span class="token function">op1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">op2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Facade op2()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        two<span class="token punctuation">.</span><span class="token function">op2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">op3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Facade op3()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        three<span class="token punctuation">.</span><span class="token function">op3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Facade Method()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        three<span class="token punctuation">.</span><span class="token function">op3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        two<span class="token punctuation">.</span><span class="token function">op2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        one<span class="token punctuation">.</span><span class="token function">op1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【客户端】</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FacadePattern</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Facade</span> facade <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Facade</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">facade<span class="token punctuation">.</span></span>Method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        facade<span class="token punctuation">.</span><span class="token function">op1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【输出】</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Facade Method()
方法3
方法2
方法1
Facade op1()
方法1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码" aria-hidden="true">#</a> 伪代码</h2><p>在本例中， <strong>外观</strong>模式简化了客户端与复杂视频转换框架之间的交互。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210430175224.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>你可以创建一个封装所需功能并隐藏其他代码的外观类， 从而无需使全部代码直接与数十个框架类进行交互。 该结构还能将未来框架升级或更换所造成的影响最小化， 因为你只需修改程序中外观方法的实现即可。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 这里有复杂第三方视频转换框架中的一些类。我们不知晓其中的代码，因此无法</span>
<span class="token comment">// 对其进行简化。</span>

<span class="token keyword">class</span> <span class="token class-name">VideoFile</span>
<span class="token comment">// ...</span>

<span class="token keyword">class</span> <span class="token class-name">OggCompressionCodec</span>
<span class="token comment">// ...</span>

<span class="token keyword">class</span> <span class="token class-name">MPEG4CompressionCodec</span>
<span class="token comment">// ...</span>

<span class="token keyword">class</span> <span class="token class-name">CodecFactory</span>
<span class="token comment">// ...</span>

<span class="token keyword">class</span> <span class="token class-name">BitrateReader</span>
<span class="token comment">// ...</span>

<span class="token keyword">class</span> <span class="token class-name">AudioMixer</span>
<span class="token comment">// ...</span>


<span class="token comment">// 为了将框架的复杂性隐藏在一个简单接口背后，我们创建了一个外观类。它是在</span>
<span class="token comment">// 功能性和简洁性之间做出的权衡。</span>
<span class="token keyword">class</span> <span class="token class-name">VideoConverter</span> is
    method <span class="token function">convert</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> format<span class="token punctuation">)</span><span class="token operator">:</span><span class="token class-name">File</span> is
        file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VideoFile</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
        sourceCodec <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CodecFactory</span><span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>format <span class="token operator">==</span> <span class="token string">&quot;mp4&quot;</span><span class="token punctuation">)</span>
            destinationCodec <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MPEG4CompressionCodec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span>
            destinationCodec <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OggCompressionCodec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        buffer <span class="token operator">=</span> <span class="token class-name">BitrateReader</span><span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> sourceCodec<span class="token punctuation">)</span>
        result <span class="token operator">=</span> <span class="token class-name">BitrateReader</span><span class="token punctuation">.</span><span class="token function">convert</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> destinationCodec<span class="token punctuation">)</span>
        result <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AudioMixer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fix</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment">// 应用程序的类并不依赖于复杂框架中成千上万的类。同样，如果你决定更换框架，</span>
<span class="token comment">// 那只需重写外观类即可。</span>
<span class="token keyword">class</span> <span class="token class-name">Application</span> is
    method <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        convertor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VideoConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        mp4 <span class="token operator">=</span> convertor<span class="token punctuation">.</span><span class="token function">convert</span><span class="token punctuation">(</span><span class="token string">&quot;funny-cats-video.ogg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;mp4&quot;</span><span class="token punctuation">)</span>
        mp4<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><p><strong>使用示例：</strong> 使用 Java 开发的程序中经常会使用外观模式。 它在与复杂程序库和 API 协作时特别有用。</p><p>下面是一些核心 Java 程序库中的外观示例：</p>`,27),u={href:"http://docs.oracle.com/javaee/7/api/javax/faces/context/FacesContext.html",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"javax.faces.context.FacesContext",-1),k={href:"http://docs.oracle.com/javaee/7/api/javax/faces/lifecycle/Lifecycle.html",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"Life­Cycle",-1),m={href:"http://docs.oracle.com/javaee/7/api/javax/faces/application/ViewHandler.html",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"View­Handler",-1),b={href:"http://docs.oracle.com/javaee/7/api/javax/faces/application/NavigationHandler.html",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"Navigation­Handler",-1),g={href:"http://docs.oracle.com/javaee/7/api/javax/faces/context/ExternalContext.html",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"javax.faces.context.ExternalContext",-1),w={href:"http://docs.oracle.com/javaee/7/api/javax/servlet/ServletContext.html",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"Servlet­Context",-1),x={href:"http://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpSession.html",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"Http­Session",-1),j={href:"http://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpServletRequest.html",target:"_blank",rel:"noopener noreferrer"},F=n("code",null,"Http­Servlet­Request",-1),q={href:"http://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpServletResponse.html",target:"_blank",rel:"noopener noreferrer"},S=n("code",null,"Http­Servlet­Response",-1),H=n("p",null,[n("strong",null,"识别方法"),s("： 外观可以通过使用简单接口， 但将绝大部分工作委派给其他类的类来识别。 通常情况下， 外观管理着其所使用的对象的完整生命周期。")],-1),V=n("h2",{id:"与其他模式的关系",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#与其他模式的关系","aria-hidden":"true"},"#"),s(" 与其他模式的关系")],-1),M={href:"https://refactoringguru.cn/design-patterns/facade",target:"_blank",rel:"noopener noreferrer"},E={href:"https://refactoringguru.cn/design-patterns/adapter",target:"_blank",rel:"noopener noreferrer"},R=n("em",null,"适配器",-1),B=n("em",null,"外观",-1),N={href:"https://refactoringguru.cn/design-patterns/abstract-factory",target:"_blank",rel:"noopener noreferrer"},A={href:"https://refactoringguru.cn/design-patterns/facade",target:"_blank",rel:"noopener noreferrer"},L={href:"https://refactoringguru.cn/design-patterns/flyweight",target:"_blank",rel:"noopener noreferrer"},P={href:"https://refactoringguru.cn/design-patterns/facade",target:"_blank",rel:"noopener noreferrer"},I={href:"https://refactoringguru.cn/design-patterns/facade",target:"_blank",rel:"noopener noreferrer"},z={href:"https://refactoringguru.cn/design-patterns/mediator",target:"_blank",rel:"noopener noreferrer"},G=n("ul",null,[n("li",null,[n("em",null,"外观"),s("为子系统中的所有对象定义了一个简单接口， 但是它不提供任何新功能。 子系统本身不会意识到外观的存在。 子系统中的对象可以直接进行交流。")]),n("li",null,[n("em",null,"中介者"),s("将系统中组件的沟通行为中心化。 各组件只知道中介者对象， 无法直接相互交流。")])],-1),J={href:"https://refactoringguru.cn/design-patterns/facade",target:"_blank",rel:"noopener noreferrer"},O={href:"https://refactoringguru.cn/design-patterns/singleton",target:"_blank",rel:"noopener noreferrer"},T={href:"https://refactoringguru.cn/design-patterns/facade",target:"_blank",rel:"noopener noreferrer"},D={href:"https://refactoringguru.cn/design-patterns/proxy",target:"_blank",rel:"noopener noreferrer"},K=n("em",null,"代理",-1),Q=n("em",null,"外观",-1),U=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),W={href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"},X={href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://refactoringguru.cn/design-patterns/catalog",target:"_blank",rel:"noopener noreferrer"};function Z($,nn){const a=o("ExternalLinkIcon");return p(),c("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[d,e(a)]),s(" 在底层使用了 "),n("a",k,[v,e(a)]),s("、 "),n("a",m,[h,e(a)]),s(" 和 "),n("a",b,[f,e(a)]),s(" 这几个类， 但绝大多数客户端不知道。")]),n("li",null,[n("a",g,[_,e(a)]),s(" 在内部使用了 "),n("a",w,[y,e(a)]),s("、 "),n("a",x,[C,e(a)]),s("、 "),n("a",j,[F,e(a)]),s("、 "),n("a",q,[S,e(a)]),s(" 和其他一些类。")])]),H,V,n("ul",null,[n("li",null,[n("a",M,[s("外观模式"),e(a)]),s("为现有对象定义了一个新接口， "),n("a",E,[s("适配器模式"),e(a)]),s("则会试图运用已有的接口。 "),R,s("通常只封装一个对象， "),B,s("通常会作用于整个对象子系统上。")]),n("li",null,[s("当只需对客户端代码隐藏子系统创建对象的方式时， 你可以使用"),n("a",N,[s("抽象工厂模式"),e(a)]),s("来代替"),n("a",A,[s("外观"),e(a)]),s("。")]),n("li",null,[n("a",L,[s("享元模式"),e(a)]),s("展示了如何生成大量的小型对象， "),n("a",P,[s("外观"),e(a)]),s("则展示了如何用一个对象来代表整个子系统。")]),n("li",null,[n("a",I,[s("外观"),e(a)]),s("和"),n("a",z,[s("中介者模式"),e(a)]),s("的职责类似： 它们都尝试在大量紧密耦合的类中组织起合作。 "),G]),n("li",null,[n("a",J,[s("外观"),e(a)]),s("类通常可以转换为"),n("a",O,[s("单例模式"),e(a)]),s("类， 因为在大部分情况下一个外观对象就足够了。")]),n("li",null,[n("a",T,[s("外观"),e(a)]),s("与"),n("a",D,[s("代理模式"),e(a)]),s("的相似之处在于它们都缓存了一个复杂实体并自行对其进行初始化。 "),K,s("与其服务对象遵循同一接口， 使得自己和服务对象可以互换， 在这一点上它与"),Q,s("不同。")])]),U,n("ul",null,[n("li",null,[n("a",W,[s("《Head First 设计模式》"),e(a)])]),n("li",null,[n("a",X,[s("《大话设计模式》"),e(a)])]),n("li",null,[n("a",Y,[s("设计模式教程"),e(a)])])])])}const en=t(i,[["render",Z],["__file","index.html.vue"]]);export{en as default};
