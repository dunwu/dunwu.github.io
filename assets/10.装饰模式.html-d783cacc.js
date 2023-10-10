import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as l,a as n,d as e,b as s,e as t}from"./app-9db88853.js";const i={},r=t(`<h1 id="设计模式之装饰模式" tabindex="-1"><a class="header-anchor" href="#设计模式之装饰模式" aria-hidden="true">#</a> 设计模式之装饰模式</h1><h2 id="意图" tabindex="-1"><a class="header-anchor" href="#意图" aria-hidden="true">#</a> 意图</h2><p><strong>装饰模式</strong> (Decorator) 是一种结构型设计模式，<strong>动态</strong>地给一个对象<strong>添加</strong>一些<strong>额外的职责</strong>。就增加功能来说，Decorator 模式相比生成子类更为灵活。</p><ul><li>装饰对象和真实对象有相同的接口。这样客户端对象就能以和真实对象相同的方式和装饰对象交互。</li><li>装饰对象包含一个真实对象的引用（reference）。</li><li>装饰对象接受所有来自客户端的请求。它把这些请求转发给真实的对象。</li><li>装饰对象可以在转发这些请求以前或以后增加一些附加功能。这样就确保了在运行时，不用修改给定对象的结构就可以在外部增加附加的功能。在面向对象的设计中，通常是通过继承来实现对给定类的功能扩展。</li></ul><h2 id="适合场景" tabindex="-1"><a class="header-anchor" href="#适合场景" aria-hidden="true">#</a> 适合场景</h2><ul><li>如果你希望在无需修改代码的情况下即可使用对象， 且希望在运行时为对象新增额外的行为， 可以使用装饰模式。</li><li>如果用继承来扩展对象行为的方案难以实现或者根本不可行， 你可以使用该模式。</li></ul><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210430172133.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="结构说明" tabindex="-1"><a class="header-anchor" href="#结构说明" aria-hidden="true">#</a> 结构说明</h3><ol><li><strong>部件</strong> （Component） 声明封装器和被封装对象的公用接口。</li><li><strong>具体部件</strong> （Concrete Component） 类是被封装对象所属的类。 它定义了基础行为， 但装饰类可以改变这些行为。</li><li><strong>基础装饰</strong> （Base Decorator） 类拥有一个指向被封装对象的引用成员变量。 该变量的类型应当被声明为通用部件接口， 这样它就可以引用具体的部件和装饰。 装饰基类会将所有操作委派给被封装的对象。</li><li><strong>具体装饰类</strong> （Concrete Decorators） 定义了可动态添加到部件的额外行为。 具体装饰类会重写装饰基类的方法， 并在调用父类方法之前或之后进行额外的行为。</li><li><strong>客户端</strong> （Client） 可以使用多层装饰来封装部件， 只要它能使用通用接口与所有对象互动即可。</li></ol><h3 id="结构代码范式" tabindex="-1"><a class="header-anchor" href="#结构代码范式" aria-hidden="true">#</a> 结构代码范式</h3><p><strong>Component</strong> : 定义一个对象接口，可以给这些对象动态地添加职责。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ConcreteComponent</strong> : 实现 <strong>Component</strong> 定义的接口。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ConcreteComponent</span> <span class="token keyword">implements</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;初始行为&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Decorator</strong> : 装饰抽象类，继承了 Component， 从外类来扩展 Component 类的功能，但对于 Component 来说，是无需知道 Decorator 的存在的。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Decorator</span> <span class="token keyword">implements</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token comment">// 持有一个 Component 对象，和 Component 形成聚合关系</span>
    <span class="token keyword">protected</span> <span class="token class-name">Component</span> component<span class="token punctuation">;</span>

    <span class="token comment">// 传入要进一步修饰的对象</span>
    <span class="token keyword">public</span> <span class="token class-name">Decorator</span><span class="token punctuation">(</span><span class="token class-name">Component</span> component<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>component <span class="token operator">=</span> component<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token comment">// 调用要修饰对象的原方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        component<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ConcreteDecorator</strong> : 具体的装饰对象，起到给 Component 添加职责的功能。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ConcreteDecoratorA</span> <span class="token keyword">extends</span> <span class="token class-name">Decorator</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> addedState <span class="token operator">=</span> <span class="token string">&quot;新属性1&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ConcreteDecoratorA</span><span class="token punctuation">(</span><span class="token class-name">Component</span> component<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;添加属性: &quot;</span> <span class="token operator">+</span> addedState<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ConcreteDecoratorB</span> <span class="token keyword">extends</span> <span class="token class-name">Decorator</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ConcreteDecoratorB</span><span class="token punctuation">(</span><span class="token class-name">Component</span> component<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">AddedBehavior</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">AddedBehavior</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;添加行为&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【客户端】</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DecoratorPattern</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Component</span> component <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        component<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;======================================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Decorator</span> decoratorA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteDecoratorA</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span><span class="token punctuation">;</span>
        decoratorA<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;======================================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Decorator</span> decoratorB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteDecoratorB</span><span class="token punctuation">(</span>decoratorA<span class="token punctuation">)</span><span class="token punctuation">;</span>
        decoratorB<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【输出】</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>初始行为
======================================
初始行为
添加属性: 新属性1
======================================
初始行为
添加属性: 新属性1
添加行为
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码" aria-hidden="true">#</a> 伪代码</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210430172723.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在本例中， 装饰模式能够对敏感数据进行压缩和加密， 从而将数据从使用数据的代码中独立出来。</p><p>程序使用一对装饰来封装数据源对象。 这两个封装器都改变了从磁盘读写数据的方式：</p><ul><li>当数据即将被<strong>写入磁盘</strong>前， 装饰对数据进行加密和压缩。 在原始类对改变毫无察觉的情况下， 将加密后的受保护数据写入文件。</li><li>当数据刚<strong>从磁盘读出</strong>后， 同样通过装饰对数据进行解压和解密。 装饰和数据源类实现同一接口， 从而能在客户端代码中相互替换。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 装饰可以改变组件接口所定义的操作。</span>
<span class="token keyword">interface</span> <span class="token class-name">DataSource</span> is
    method <span class="token function">writeData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    method <span class="token function">readData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>data

<span class="token comment">// 具体组件提供操作的默认实现。这些类在程序中可能会有几个变体。</span>
<span class="token keyword">class</span> <span class="token class-name">FileDataSource</span> <span class="token keyword">implements</span> <span class="token class-name">DataSource</span> is
    constructor <span class="token class-name">FileDataSource</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>

    method <span class="token function">writeData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> is
        <span class="token comment">// 将数据写入文件。</span>

    method <span class="token function">readData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>data is
        <span class="token comment">// 从文件读取数据。</span>

<span class="token comment">// 装饰基类和其他组件遵循相同的接口。该类的主要任务是定义所有具体装饰的封</span>
<span class="token comment">// 装接口。封装的默认实现代码中可能会包含一个保存被封装组件的成员变量，并</span>
<span class="token comment">// 且负责对其进行初始化。</span>
<span class="token keyword">class</span> <span class="token class-name">DataSourceDecorator</span> <span class="token keyword">implements</span> <span class="token class-name">DataSource</span> is
    <span class="token keyword">protected</span> field wrappee<span class="token operator">:</span> <span class="token class-name">DataSource</span>

    constructor <span class="token class-name">DataSourceDecorator</span><span class="token punctuation">(</span>source<span class="token operator">:</span> <span class="token class-name">DataSource</span><span class="token punctuation">)</span> is
        wrappee <span class="token operator">=</span> source

    <span class="token comment">// 装饰基类会直接将所有工作分派给被封装组件。具体装饰中则可以新增一些</span>
    <span class="token comment">// 额外的行为。</span>
    method <span class="token function">writeData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> is
        wrappee<span class="token punctuation">.</span><span class="token function">writeData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

    <span class="token comment">// 具体装饰可调用其父类的操作实现，而不是直接调用被封装对象。这种方式</span>
    <span class="token comment">// 可简化装饰类的扩展工作。</span>
    method <span class="token function">readData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>data is
        <span class="token keyword">return</span> wrappee<span class="token punctuation">.</span><span class="token function">readData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 具体装饰必须在被封装对象上调用方法，不过也可以自行在结果中添加一些内容。</span>
<span class="token comment">// 装饰必须在调用封装对象之前或之后执行额外的行为。</span>
<span class="token keyword">class</span> <span class="token class-name">EncryptionDecorator</span> <span class="token keyword">extends</span> <span class="token class-name">DataSourceDecorator</span> is
    method <span class="token function">writeData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> is
        <span class="token comment">// 1. 对传递数据进行加密。</span>
        <span class="token comment">// 2. 将加密后数据传递给被封装对象 writeData（写入数据）方法。</span>

    method <span class="token function">readData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>data is
        <span class="token comment">// 1. 通过被封装对象的 readData（读取数据）方法获取数据。</span>
        <span class="token comment">// 2. 如果数据被加密就尝试解密。</span>
        <span class="token comment">// 3. 返回结果。</span>

<span class="token comment">// 你可以将对象封装在多层装饰中。</span>
<span class="token keyword">class</span> <span class="token class-name">CompressionDecorator</span> <span class="token keyword">extends</span> <span class="token class-name">DataSourceDecorator</span> is
    method <span class="token function">writeData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> is
        <span class="token comment">// 1. 压缩传递数据。</span>
        <span class="token comment">// 2. 将压缩后数据传递给被封装对象 writeData（写入数据）方法。</span>

    method <span class="token function">readData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>data is
        <span class="token comment">// 1. 通过被封装对象的 readData（读取数据）方法获取数据。</span>
        <span class="token comment">// 2. 如果数据被压缩就尝试解压。</span>
        <span class="token comment">// 3. 返回结果。</span>


<span class="token comment">// 选项 1：装饰组件的简单示例</span>
<span class="token keyword">class</span> <span class="token class-name">Application</span> is
    method <span class="token function">dumbUsageExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileDataSource</span><span class="token punctuation">(</span><span class="token string">&quot;somefile.dat&quot;</span><span class="token punctuation">)</span>
        source<span class="token punctuation">.</span><span class="token function">writeData</span><span class="token punctuation">(</span>salaryRecords<span class="token punctuation">)</span>
        <span class="token comment">// 已将明码数据写入目标文件。</span>

        source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CompressionDecorator</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span>
        source<span class="token punctuation">.</span><span class="token function">writeData</span><span class="token punctuation">(</span>salaryRecords<span class="token punctuation">)</span>
        <span class="token comment">// 已将压缩数据写入目标文件。</span>

        source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EncryptionDecorator</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span>
        <span class="token comment">// 源变量中现在包含：</span>
        <span class="token comment">// Encryption &gt; Compression &gt; FileDataSource</span>
        source<span class="token punctuation">.</span><span class="token function">writeData</span><span class="token punctuation">(</span>salaryRecords<span class="token punctuation">)</span>
        <span class="token comment">// 已将压缩且加密的数据写入目标文件。</span>


<span class="token comment">// 选项 2：客户端使用外部数据源。SalaryManager（工资管理器）对象并不关心</span>
<span class="token comment">// 数据如何存储。它们会与提前配置好的数据源进行交互，数据源则是通过程序配</span>
<span class="token comment">// 置器获取的。</span>
<span class="token keyword">class</span> <span class="token class-name">SalaryManager</span> is
    field source<span class="token operator">:</span> <span class="token class-name">DataSource</span>

    constructor <span class="token class-name">SalaryManager</span><span class="token punctuation">(</span>source<span class="token operator">:</span> <span class="token class-name">DataSource</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>

    method <span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token keyword">return</span> source<span class="token punctuation">.</span><span class="token function">readData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    method <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        source<span class="token punctuation">.</span><span class="token function">writeData</span><span class="token punctuation">(</span>salaryRecords<span class="token punctuation">)</span>
    <span class="token comment">// ...其他有用的方法...</span>


<span class="token comment">// 程序可在运行时根据配置或环境组装不同的装饰堆桟。</span>
<span class="token keyword">class</span> <span class="token class-name">ApplicationConfigurator</span> is
    method <span class="token function">configurationExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileDataSource</span><span class="token punctuation">(</span><span class="token string">&quot;salary.dat&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>enabledEncryption<span class="token punctuation">)</span>
            source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EncryptionDecorator</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>enabledCompression<span class="token punctuation">)</span>
            source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CompressionDecorator</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span>

        logger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SalaryManager</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span>
        salary <span class="token operator">=</span> logger<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><p><strong>使用示例：</strong> 装饰模式在 Java 代码中可谓是标准配置， 尤其是在与流式加载相关的代码中。</p><p>Java 核心程序库中有一些关于装饰的示例：</p>`,32),u={href:"http://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"java.io.InputStream",-1),k={href:"http://docs.oracle.com/javase/8/docs/api/java/io/OutputStream.html",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"Output­Stream",-1),v={href:"http://docs.oracle.com/javase/8/docs/api/java/io/Reader.html",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"Reader",-1),h={href:"http://docs.oracle.com/javase/8/docs/api/java/io/Writer.html",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"Writer",-1),f={href:"http://docs.oracle.com/javase/8/docs/api/java/util/Collections.html",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"java.util.Collections",-1),w={href:"http://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#checkedCollection-java.util.Collection-java.lang.Class-",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"checked­XXX()",-1),D={href:"http://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#synchronizedCollection-java.util.Collection-",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"synchronized­XXX()",-1),j={href:"http://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#unmodifiableCollection-java.util.Collection-",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"unmodifiable­XXX()",-1),S={href:"http://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpServletRequestWrapper.html",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"javax.servlet.http.HttpServletRequestWrapper",-1),B={href:"http://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpServletResponseWrapper.html",target:"_blank",rel:"noopener noreferrer"},A=n("code",null,"Http­Servlet­Response­Wrapper",-1),E=n("p",null,[n("strong",null,"识别方法"),s("： 装饰可通过以当前类或对象为参数的创建方法或构造函数来识别。")],-1),R=n("h2",{id:"与其他模式的关系",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#与其他模式的关系","aria-hidden":"true"},"#"),s(" 与其他模式的关系")],-1),X={href:"https://refactoringguru.cn/design-patterns/adapter",target:"_blank",rel:"noopener noreferrer"},F={href:"https://refactoringguru.cn/design-patterns/decorator",target:"_blank",rel:"noopener noreferrer"},W=n("em",null,"装饰",-1),H=n("em",null,"适配器",-1),z={href:"https://refactoringguru.cn/design-patterns/adapter",target:"_blank",rel:"noopener noreferrer"},I={href:"https://refactoringguru.cn/design-patterns/proxy",target:"_blank",rel:"noopener noreferrer"},M={href:"https://refactoringguru.cn/design-patterns/decorator",target:"_blank",rel:"noopener noreferrer"},N={href:"https://refactoringguru.cn/design-patterns/chain-of-responsibility",target:"_blank",rel:"noopener noreferrer"},O={href:"https://refactoringguru.cn/design-patterns/decorator",target:"_blank",rel:"noopener noreferrer"},V={href:"https://refactoringguru.cn/design-patterns/chain-of-responsibility",target:"_blank",rel:"noopener noreferrer"},J=n("em",null,"装饰",-1),L={href:"https://refactoringguru.cn/design-patterns/composite",target:"_blank",rel:"noopener noreferrer"},P={href:"https://refactoringguru.cn/design-patterns/decorator",target:"_blank",rel:"noopener noreferrer"},T=t("<ul><li><em>装饰</em>类似于<em>组合</em>， 但其只有一个子组件。 此外还有一个明显不同： <em>装饰</em>为被封装对象添加了额外的职责， <em>组合</em>仅对其子节点的结果进行了 “求和”。</li><li>但是， 模式也可以相互合作： 你可以使用<em>装饰</em>来扩展<em>组合</em>树中特定对象的行为。</li></ul>",1),U={href:"https://refactoringguru.cn/design-patterns/composite",target:"_blank",rel:"noopener noreferrer"},G={href:"https://refactoringguru.cn/design-patterns/decorator",target:"_blank",rel:"noopener noreferrer"},K={href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://refactoringguru.cn/design-patterns/decorator",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://refactoringguru.cn/design-patterns/strategy",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://refactoringguru.cn/design-patterns/decorator",target:"_blank",rel:"noopener noreferrer"},$={href:"https://refactoringguru.cn/design-patterns/proxy",target:"_blank",rel:"noopener noreferrer"},nn=n("em",null,"代理",-1),sn=n("em",null,"装饰",-1),an=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),en={href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"},on={href:"https://refactoringguru.cn/design-patterns/catalog",target:"_blank",rel:"noopener noreferrer"};function pn(cn,ln){const a=p("ExternalLinkIcon");return c(),l("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[d,e(a)]),s("、 "),n("a",k,[m,e(a)]),s("、 "),n("a",v,[b,e(a)]),s(" 和 "),n("a",h,[g,e(a)]),s(" 的所有代码都有以自身类型的对象作为参数的构造函数。")]),n("li",null,[n("a",f,[_,e(a)]),s("； "),n("a",w,[y,e(a)]),s("、 "),n("a",D,[C,e(a)]),s(" 和 "),n("a",j,[x,e(a)]),s(" 方法。")]),n("li",null,[n("a",S,[q,e(a)]),s(" 和 "),n("a",B,[A,e(a)])])]),E,R,n("ul",null,[n("li",null,[n("a",X,[s("适配器模式"),e(a)]),s("可以对已有对象的接口进行修改， "),n("a",F,[s("装饰模式"),e(a)]),s("则能在不改变对象接口的前提下强化对象功能。 此外， "),W,s("还支持递归组合， "),H,s("则无法实现。")]),n("li",null,[n("a",z,[s("适配器"),e(a)]),s("能为被封装对象提供不同的接口， "),n("a",I,[s("代理模式"),e(a)]),s("能为对象提供相同的接口， "),n("a",M,[s("装饰"),e(a)]),s("则能为对象提供加强的接口。")]),n("li",null,[n("a",N,[s("责任链模式"),e(a)]),s("和"),n("a",O,[s("装饰模式"),e(a)]),s("的类结构非常相似。 两者都依赖递归组合将需要执行的操作传递给一系列对象。 但是， 两者有几点重要的不同之处。 "),n("ul",null,[n("li",null,[n("a",V,[s("责任链"),e(a)]),s("的管理者可以相互独立地执行一切操作， 还可以随时停止传递请求。 另一方面， 各种"),J,s("可以在遵循基本接口的情况下扩展对象的行为。 此外， 装饰无法中断请求的传递。")])])]),n("li",null,[n("a",L,[s("组合模式"),e(a)]),s("和"),n("a",P,[s("装饰"),e(a)]),s("的结构图很相似， 因为两者都依赖递归组合来组织无限数量的对象。 "),T]),n("li",null,[s("大量使用"),n("a",U,[s("组合"),e(a)]),s("和"),n("a",G,[s("装饰"),e(a)]),s("的设计通常可从对于"),n("a",K,[s("原型模式"),e(a)]),s("的使用中获益。 你可以通过该模式来复制复杂结构， 而非从零开始重新构造。")]),n("li",null,[n("a",Q,[s("装饰"),e(a)]),s("可让你更改对象的外表， "),n("a",Y,[s("策略模式"),e(a)]),s("则让你能够改变其本质。")]),n("li",null,[n("a",Z,[s("装饰"),e(a)]),s("和"),n("a",$,[s("代理"),e(a)]),s("有着相似的结构， 但是其意图却非常不同。 这两个模式的构建都基于组合原则， 也就是说一个对象应该将部分工作委派给另一个对象。 两者之间的不同之处在于"),nn,s("通常自行管理其服务对象的生命周期， 而"),sn,s("的生成则总是由客户端进行控制。")])]),an,n("ul",null,[n("li",null,[n("a",en,[s("《Head First 设计模式》"),e(a)])]),n("li",null,[n("a",tn,[s("《大话设计模式》"),e(a)])]),n("li",null,[n("a",on,[s("设计模式教程"),e(a)])])])])}const dn=o(i,[["render",pn],["__file","10.装饰模式.html.vue"]]);export{dn as default};
