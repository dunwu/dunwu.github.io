import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as p,a as s,d as e,b as n,e as r}from"./app-2793f0f0.js";const l={},i=r(`<h1 id="设计模式之原型模式" tabindex="-1"><a class="header-anchor" href="#设计模式之原型模式" aria-hidden="true">#</a> 设计模式之原型模式</h1><h2 id="意图" tabindex="-1"><a class="header-anchor" href="#意图" aria-hidden="true">#</a> 意图</h2><p><strong>原型模式</strong>（Prototype）是一种创建型设计模式， 使你能够复制已有对象， 而又无需使代码依赖它们所属的类。</p><p>原型模式主要用于对象的复制，它的核心是就是类图中的原型类 Prototype。Prototype 类需要具备以下两个条件：</p><ul><li>实现 Cloneable 接口。在 java 语言有一个 Cloneable 接口，它的作用只有一个，就是在运行时通知虚拟机可以安全地在实现了此接口的类上使用 clone 方法。在 java 虚拟机中，只有实现了这个接口的类才可以被拷贝，否则在运行时会抛出 CloneNotSupportedException 异常。</li><li>重写 Object 类中的 clone 方法。Java 中，所有类的父类都是 Object 类，Object 类中有一个 clone 方法，作用是返回对象的一个拷贝，但是其作用域 protected 类型的，一般的类无法调用，因此，Prototype 类需要将 clone 方法的作用域修改为 public 类型。</li></ul><h3 id="浅拷贝与深拷贝" tabindex="-1"><a class="header-anchor" href="#浅拷贝与深拷贝" aria-hidden="true">#</a> 浅拷贝与深拷贝</h3><p>浅拷贝是指当对象的字段值被复制时，字段引用的对象不会被复制。</p><p>例如：如果一个对象有一个指向字符串的字段，并且我们对该对象做了一个浅拷贝，那麽两个对象将引用同一个字符串。</p><p>深拷贝是指当一个类拥有资源，当这个类的对象发生复制过程的时候，资源重新分配，这个过程就是深拷贝。</p><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><ul><li>如果你需要复制一些对象， 同时又希望代码独立于这些对象所属的具体类， 可以使用原型模式。</li><li>如果子类的区别仅在于其对象的初始化方式， 那么你可以使用该模式来减少子类的数量。 别人创建这些子类的目的可能是为了创建特定类型的对象。</li></ul><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210506094301.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li><strong>原型</strong> （Prototype） 接口将对克隆方法进行声明。 在绝大多数情况下， 其中只会有一个名为 <code>clone</code>克隆的方法。</li><li><strong>具体原型</strong> （Concrete Prototype） 类将实现克隆方法。 除了将原始对象的数据复制到克隆体中之外， 该方法有时还需处理克隆过程中的极端情况， 例如克隆关联对象和梳理递归依赖等等。</li><li><strong>客户端</strong> （Client） 可以复制实现了原型接口的任何对象。</li></ol><h2 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码" aria-hidden="true">#</a> 伪代码</h2><p>在本例中， <strong>原型</strong>模式能让你生成完全相同的几何对象副本， 同时无需代码与对象所属类耦合。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210506095002.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>所有形状类都遵循同一个提供克隆方法的接口。 在复制自身成员变量值到结果对象前， 子类可调用其父类的克隆方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 基础原型。</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Shape</span> is
    field <span class="token class-name">X</span><span class="token operator">:</span> <span class="token keyword">int</span>
    field <span class="token class-name">Y</span><span class="token operator">:</span> <span class="token keyword">int</span>
    field color<span class="token operator">:</span> string

    <span class="token comment">// 常规构造函数。</span>
    constructor <span class="token class-name">Shape</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token comment">// ...</span>

    <span class="token comment">// 原型构造函数。使用已有对象的数值来初始化一个新对象。</span>
    constructor <span class="token class-name">Shape</span><span class="token punctuation">(</span>source<span class="token operator">:</span> <span class="token class-name">Shape</span><span class="token punctuation">)</span> is
        <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token class-name"><span class="token namespace">this<span class="token punctuation">.</span></span>X</span> <span class="token operator">=</span> <span class="token class-name"><span class="token namespace">source<span class="token punctuation">.</span></span>X</span>
        <span class="token class-name"><span class="token namespace">this<span class="token punctuation">.</span></span>Y</span> <span class="token operator">=</span> <span class="token class-name"><span class="token namespace">source<span class="token punctuation">.</span></span>Y</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> source<span class="token punctuation">.</span>color

    <span class="token comment">// clone（克隆）操作会返回一个形状子类。</span>
    <span class="token keyword">abstract</span> method <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token class-name">Shape</span>


<span class="token comment">// 具体原型。克隆方法会创建一个新对象并将其传递给构造函数。直到构造函数运</span>
<span class="token comment">// 行完成前，它都拥有指向新克隆对象的引用。因此，任何人都无法访问未完全生</span>
<span class="token comment">// 成的克隆对象。这可以保持克隆结果的一致。</span>
<span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> is
    field width<span class="token operator">:</span> <span class="token keyword">int</span>
    field height<span class="token operator">:</span> <span class="token keyword">int</span>

    constructor <span class="token class-name">Rectangle</span><span class="token punctuation">(</span>source<span class="token operator">:</span> <span class="token class-name">Rectangle</span><span class="token punctuation">)</span> is
        <span class="token comment">// 需要调用父构造函数来复制父类中定义的私有成员变量。</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> source<span class="token punctuation">.</span>width
        <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> source<span class="token punctuation">.</span>height

    method <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token class-name">Shape</span> is
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> is
    field radius<span class="token operator">:</span> <span class="token keyword">int</span>

    constructor <span class="token class-name">Circle</span><span class="token punctuation">(</span>source<span class="token operator">:</span> <span class="token class-name">Circle</span><span class="token punctuation">)</span> is
        <span class="token keyword">super</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">=</span> source<span class="token punctuation">.</span>radius

    method <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token class-name">Shape</span> is
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>


<span class="token comment">// 客户端代码中的某个位置。</span>
<span class="token keyword">class</span> <span class="token class-name">Application</span> is
    field shapes<span class="token operator">:</span> array of <span class="token class-name">Shape</span>

    constructor <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token class-name">Circle</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token class-name"><span class="token namespace">circle<span class="token punctuation">.</span></span>X</span> <span class="token operator">=</span> <span class="token number">10</span>
        <span class="token class-name"><span class="token namespace">circle<span class="token punctuation">.</span></span>Y</span> <span class="token operator">=</span> <span class="token number">10</span>
        circle<span class="token punctuation">.</span>radius <span class="token operator">=</span> <span class="token number">20</span>
        shapes<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span>

        <span class="token class-name">Circle</span> anotherCircle <span class="token operator">=</span> circle<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        shapes<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>anotherCircle<span class="token punctuation">)</span>
        <span class="token comment">// 变量 \`anotherCircle（另一个圆）\`与 \`circle（圆）\`对象的内</span>
        <span class="token comment">// 容完全一样。</span>

        <span class="token class-name">Rectangle</span> rectangle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        rectangle<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">10</span>
        rectangle<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">20</span>
        shapes<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>rectangle<span class="token punctuation">)</span>

    method <span class="token function">businessLogic</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token comment">// 原型是很强大的东西，因为它能在不知晓对象类型的情况下生成一个与</span>
        <span class="token comment">// 其完全相同的复制品。</span>
        <span class="token class-name">Array</span> shapesCopy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span> of <span class="token class-name">Shapes</span><span class="token punctuation">.</span>

        <span class="token comment">// 例如，我们不知晓形状数组中元素的具体类型，只知道它们都是形状。</span>
        <span class="token comment">// 但在多态机制的帮助下，当我们在某个形状上调用 \`clone（克隆）\`</span>
        <span class="token comment">// 方法时，程序会检查其所属的类并调用其中所定义的克隆方法。这样，</span>
        <span class="token comment">// 我们将获得一个正确的复制品，而不是一组简单的形状对象。</span>
        foreach <span class="token punctuation">(</span>s in shapes<span class="token punctuation">)</span> <span class="token keyword">do</span>
            shapesCopy<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token comment">// \`shapesCopy（形状副本）\`数组中包含 \`shape（形状）\`数组所有</span>
        <span class="token comment">// 子元素的复制品。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><p><strong>使用示例：</strong> Java 的 <code>Cloneable</code> （可克隆） 接口就是立即可用的原型模式。</p><p>任何类都可通过实现该接口来实现可被克隆的性质。</p>`,22),d={href:"http://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--",target:"_blank",rel:"noopener noreferrer"},u=s("code",null,"java.lang.Object#clone()",-1),k={href:"http://docs.oracle.com/javase/8/docs/api/java/lang/Cloneable.html",target:"_blank",rel:"noopener noreferrer"},m=s("code",null,"java.lang.Cloneable",-1),h=s("p",null,[s("strong",null,"识别方法"),n("： 原型可以简单地通过 "),s("code",null,"clone"),n("或 "),s("code",null,"copy"),n("等方法来识别。")],-1),v=s("h2",{id:"与其他模式的关系",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#与其他模式的关系","aria-hidden":"true"},"#"),n(" 与其他模式的关系")],-1),b={href:"https://refactoringguru.cn/design-patterns/factory-method",target:"_blank",rel:"noopener noreferrer"},g={href:"https://refactoringguru.cn/design-patterns/abstract-factory",target:"_blank",rel:"noopener noreferrer"},f={href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"},_={href:"https://refactoringguru.cn/design-patterns/builder",target:"_blank",rel:"noopener noreferrer"},y={href:"https://refactoringguru.cn/design-patterns/abstract-factory",target:"_blank",rel:"noopener noreferrer"},w={href:"https://refactoringguru.cn/design-patterns/factory-method",target:"_blank",rel:"noopener noreferrer"},C={href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"},x={href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"},j={href:"https://refactoringguru.cn/design-patterns/command",target:"_blank",rel:"noopener noreferrer"},S={href:"https://refactoringguru.cn/design-patterns/composite",target:"_blank",rel:"noopener noreferrer"},P={href:"https://refactoringguru.cn/design-patterns/decorator",target:"_blank",rel:"noopener noreferrer"},R={href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"},N={href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"},O=s("em",null,"原型",-1),A={href:"https://refactoringguru.cn/design-patterns/factory-method",target:"_blank",rel:"noopener noreferrer"},E={href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"},V={href:"https://refactoringguru.cn/design-patterns/memento",target:"_blank",rel:"noopener noreferrer"},X={href:"https://refactoringguru.cn/design-patterns/abstract-factory",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://refactoringguru.cn/design-patterns/builder",target:"_blank",rel:"noopener noreferrer"},B={href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"},L={href:"https://refactoringguru.cn/design-patterns/singleton",target:"_blank",rel:"noopener noreferrer"},z=s("h2",{id:"参考资料",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),n(" 参考资料")],-1),I={href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"},J={href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"},F={href:"https://refactoringguru.cn/design-patterns/catalog",target:"_blank",rel:"noopener noreferrer"};function H(T,q){const a=o("ExternalLinkIcon");return c(),p("div",null,[i,s("ul",null,[s("li",null,[s("a",d,[u,e(a)]),n(" （类必须实现 "),s("a",k,[m,e(a)]),n(" 接口）")])]),h,v,s("ul",null,[s("li",null,[n("在许多设计工作的初期都会使用"),s("a",b,[n("工厂方法模式"),e(a)]),n(" （较为简单， 而且可以更方便地通过子类进行定制）， 随后演化为使用"),s("a",g,[n("抽象工厂模式"),e(a)]),n("、 "),s("a",f,[n("原型模式"),e(a)]),n("或"),s("a",_,[n("生成器模式"),e(a)]),n(" （更灵活但更加复杂）。")]),s("li",null,[s("a",y,[n("抽象工厂模式"),e(a)]),n("通常基于一组"),s("a",w,[n("工厂方法"),e(a)]),n("， 但你也可以使用"),s("a",C,[n("原型模式"),e(a)]),n("来生成这些类的方法。")]),s("li",null,[s("a",x,[n("原型"),e(a)]),n("可用于保存"),s("a",j,[n("命令模式"),e(a)]),n("的历史记录。")]),s("li",null,[n("大量使用"),s("a",S,[n("组合模式"),e(a)]),n("和"),s("a",P,[n("装饰模式"),e(a)]),n("的设计通常可从对于"),s("a",R,[n("原型"),e(a)]),n("的使用中获益。 你可以通过该模式来复制复杂结构， 而非从零开始重新构造。")]),s("li",null,[s("a",N,[n("原型"),e(a)]),n("并不基于继承， 因此没有继承的缺点。 另一方面， "),O,n("需要对被复制对象进行复杂的初始化。 "),s("a",A,[n("工厂方法"),e(a)]),n("基于继承， 但是它不需要初始化步骤。")]),s("li",null,[n("有时候"),s("a",E,[n("原型"),e(a)]),n("可以作为"),s("a",V,[n("备忘录模式"),e(a)]),n("的一个简化版本， 其条件是你需要在历史记录中存储的对象的状态比较简单， 不需要链接其他外部资源， 或者链接可以方便地重建。")]),s("li",null,[s("a",X,[n("抽象工厂"),e(a)]),n("、 "),s("a",Y,[n("生成器"),e(a)]),n("和"),s("a",B,[n("原型"),e(a)]),n("都可以用"),s("a",L,[n("单例模式"),e(a)]),n("来实现。")])]),z,s("ul",null,[s("li",null,[s("a",I,[n("《Head First 设计模式》"),e(a)])]),s("li",null,[s("a",J,[n("《大话设计模式》"),e(a)])]),s("li",null,[s("a",F,[n("设计模式教程"),e(a)])])])])}const K=t(l,[["render",H],["__file","05.原型模式.html.vue"]]);export{K as default};
