import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as p,c as l,a,b as n,d as e,e as t}from"./app-fcc32256.js";const i={},d=t('<h1 id="spring-依赖注入" tabindex="-1"><a class="header-anchor" href="#spring-依赖注入" aria-hidden="true">#</a> Spring 依赖注入</h1><p>DI，是 Dependency Injection 的缩写，即依赖注入。依赖注入是 IoC 的最常见形式。依赖注入是手动或自动绑定的方式，无需依赖特定的容器或 API。</p><p>依赖注入 (Dependency Injection，简称 DI) 是一个过程，其中对象仅通过构造函数参数、工厂方法的参数或对象实例在构造或从工厂方法返回。然后容器在创建 bean 时注入这些依赖项。这个过程基本上是 bean 本身的逆过程（因此得名，控制反转），它通过使用类的直接构造或服务定位器模式自行控制其依赖项的实例化或位置。</p><p>使用 DI，代码更干净，当对象具有依赖关系时，解耦更有效。对象不查找其依赖项，也不知道依赖项的位置或类别。结果，您的类变得更容易测试，特别是当依赖关系在接口或抽象基类上时，它们允许在单元测试中使用存根或模拟实现。</p><p><strong>容器全权负责组件的装配，它会把符合依赖关系的对象通过 JavaBean 属性或者构造函数传递给需要的对象</strong>。</p><p>DI 是组件之间依赖关系由容器在运行期决定，形象的说，即由容器动态的将某个依赖关系注入到组件之中。依赖注入的目的并非为软件系统带来更多功能，而是为了提升组件重用的频率，并为系统搭建一个灵活、可扩展的平台。通过依赖注入机制，我们只需要通过简单的配置，而无需任何代码就可指定目标需要的资源，完成自身的业务逻辑，而不需要关心具体的资源来自何处，由谁实现。</p><p>理解 DI 的关键是：“谁依赖谁，为什么需要依赖，谁注入谁，注入了什么”，那我们来深入分析一下：</p><ul><li>**谁依赖于谁：**当然是应用程序依赖于 IoC 容器；</li><li>**为什么需要依赖：**应用程序需要 IoC 容器来提供对象需要的外部资源；</li><li>**谁注入谁：**很明显是 IoC 容器注入应用程序某个对象，应用程序依赖的对象；</li><li><strong>注入了什么</strong>：就是注入某个对象所需要的外部资源（包括对象、资源、常量数据）。</li></ul><h2 id="ioc-依赖注入-api" tabindex="-1"><a class="header-anchor" href="#ioc-依赖注入-api" aria-hidden="true">#</a> IoC 依赖注入 API</h2><ul><li>根据 Bean 名称注入</li><li>根据 Bean 类型注入</li><li>注入容器内建 Bean 对象</li><li>注入非 Bean 对象</li><li>注入类型 <ul><li>实时注入</li><li>延迟注入</li></ul></li></ul><h2 id="依赖注入模式" tabindex="-1"><a class="header-anchor" href="#依赖注入模式" aria-hidden="true">#</a> 依赖注入模式</h2><p>依赖注入模式可以分为手动注入模式和自动注入模式。</p><h3 id="手动注入模式" tabindex="-1"><a class="header-anchor" href="#手动注入模式" aria-hidden="true">#</a> 手动注入模式</h3><p>手动注入模式：配置或者编程的方式，提前安排注入规则</p><ul><li>XML 资源配置元信息</li><li>Java 注解配置元信息</li><li>API 配置元信息</li></ul><h3 id="自动注入模式" tabindex="-1"><a class="header-anchor" href="#自动注入模式" aria-hidden="true">#</a> 自动注入模式</h3><p>自动注入模式即自动装配。自动装配（Autowiring）是指 Spring 容器可以自动装配 Bean 之间的关系。Spring 可以通过检查 <code>ApplicationContext</code> 的内容，自动解析合作者（其他 Bean）。</p><ul><li>自动装配可以显著减少属性或构造函数参数的配置。</li><li>随着对象的发展，自动装配可以更新配置。</li></ul><blockquote><p>注：由于自动装配存在一些限制和不足，官方不推荐使用。</p></blockquote><h4 id="自动装配策略" tabindex="-1"><a class="header-anchor" href="#自动装配策略" aria-hidden="true">#</a> 自动装配策略</h4><p>当使用基于 XML 的配置元数据时，可以使用 <code>&lt;bean/&gt;</code> 元素的 <code>autowire</code> 属性为 Bean 指定自动装配模式。自动装配模式有以下类型：</p><table><thead><tr><th>模式</th><th>说明</th></tr></thead><tbody><tr><td><code>no</code></td><td>默认值，未激活 Autowiring，需要手动指定依赖注入对象。</td></tr><tr><td><code>byName</code></td><td>根据被注入属性的名称作为 Bean 名称进行依赖查找，并将对象设置到该属性。</td></tr><tr><td><code>byType</code></td><td>根据被注入属性的类型作为依赖类型进行查找，并将对象设置到该属性。</td></tr><tr><td><code>constructor</code></td><td>特殊 byType 类型，用于构造器参数。</td></tr></tbody></table><p><code>org.springframework.beans.factory.config.AutowireCapableBeanFactory</code> 是 <code>BeanFactory</code> 的子接口，它是 Spring 中用于实现自动装配的容器。</p><h4 id="autowired-注入过程" tabindex="-1"><a class="header-anchor" href="#autowired-注入过程" aria-hidden="true">#</a> @Autowired 注入过程</h4><ul><li>元信息解析</li><li>依赖查找</li><li>依赖注入（字段、方法）</li></ul><h4 id="自动装配的限制和不足" tabindex="-1"><a class="header-anchor" href="#自动装配的限制和不足" aria-hidden="true">#</a> 自动装配的限制和不足</h4><p>自动装配有以下限制和不足：</p><ul><li>属性和构造函数参数设置中的显式依赖项会覆盖自动装配。您不能自动装配简单属性，例如基础数据类型、字符串和类（以及此类简单属性的数组）。</li><li>自动装配不如显式装配精准。Spring 会尽量避免猜测可能存在歧义的结果。</li><li>Spring 容器生成文档的工具可能无法解析自动装配信息。</li><li>如果同一类型存在多个 Bean 时，自动装配时会存在歧义。容器内的多个 Bean 定义可能与要自动装配的 Setter 方法或构造函数参数指定的类型匹配。对于数组、集合或 Map 实例，这不一定是问题。但是，对于期望单值的依赖项，如果没有唯一的 Bean 定义可用，则会引发异常。</li></ul>',28),u={href:"https://docs.spring.io/spring/docs/5.2.2.RELEASE/spring-frameworkreference/core.html#beans-autowired-exceptions",target:"_blank",rel:"noopener noreferrer"},r=t(`<h2 id="依赖注入方式" tabindex="-1"><a class="header-anchor" href="#依赖注入方式" aria-hidden="true">#</a> 依赖注入方式</h2><p>依赖注入有如下方式：</p><table><thead><tr><th>依赖注入方式</th><th>配置元数据举例</th></tr></thead><tbody><tr><td>Setter 方法注入</td><td><code>&lt;proeprty name=&quot;user&quot; ref=&quot;userBean&quot;/&gt;</code></td></tr><tr><td>构造器注入</td><td><code>&lt;constructor-arg name=&quot;user&quot; ref=&quot;userBean&quot; /&gt;</code></td></tr><tr><td>字段注入</td><td><code>@Autowired User user;</code></td></tr><tr><td>方法注入</td><td><code>@Autowired public void user(User user) { ... }</code></td></tr><tr><td>接口回调注入</td><td><code>class MyBean implements BeanFactoryAware { ... }</code></td></tr></tbody></table><h3 id="构造器注入" tabindex="-1"><a class="header-anchor" href="#构造器注入" aria-hidden="true">#</a> 构造器注入</h3><ul><li>手动模式 <ul><li>xml 配置元信息</li><li>注解配置元信息</li><li>Java 配置元信息</li></ul></li><li>自动模式 <ul><li>constructor</li></ul></li></ul><p>构造器注入是通过容器调用具有多个参数的构造函数来完成的，每个参数代表一个依赖项。调用带有特定参数的静态工厂方法来构造 bean 几乎是等价的，并且本次讨论对构造函数和静态工厂方法的参数进行了类似的处理。</p><p>下面是一个构造器注入示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SimpleMovieLister</span> <span class="token punctuation">{</span>

    <span class="token comment">// the SimpleMovieLister has a dependency on a MovieFinder</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">MovieFinder</span> movieFinder<span class="token punctuation">;</span>

    <span class="token comment">// a constructor so that the Spring container can inject a MovieFinder</span>
    <span class="token keyword">public</span> <span class="token class-name">SimpleMovieLister</span><span class="token punctuation">(</span><span class="token class-name">MovieFinder</span> movieFinder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>movieFinder <span class="token operator">=</span> movieFinder<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// business logic that actually uses the injected MovieFinder is omitted...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构造函数参数解析匹配通过使用参数的类型进行。如果 bean 定义的构造函数参数中不存在潜在的歧义，则在 bean 定义中定义构造函数参数的顺序是在实例化 bean 时将这些参数提供给适当构造函数的顺序。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package x.y;

public class ThingOne {

    public ThingOne(ThingTwo thingTwo, ThingThree thingThree) {
        // ...
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设 ThingTwo 和 ThingThree 类没有继承关系，则不存在潜在的歧义。因此，以下配置工作正常，您无需在 <code>&lt;constructor-arg/&gt;</code> 元素中显式指定构造函数参数索引或类型。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>beanOne<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>x.y.ThingOne<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>constructor-arg</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>beanTwo<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>constructor-arg</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>beanThree<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>beanTwo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>x.y.ThingTwo<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>beanThree<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>x.y.ThingThree<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当引用另一个 bean 时，类型是已知的，并且可以发生匹配（就像前面的示例一样）。当使用简单类型时，例如 <code>&lt;value&gt;true&lt;/value&gt;</code> ，Spring 无法确定 value 的类型，因此无法在没有帮助的情况下按类型匹配。考虑以下类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">examples</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExampleBean</span> <span class="token punctuation">{</span>

    <span class="token comment">// Number of years to calculate the Ultimate Answer</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> years<span class="token punctuation">;</span>

    <span class="token comment">// The Answer to Life, the Universe, and Everything</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> ultimateAnswer<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ExampleBean</span><span class="token punctuation">(</span><span class="token keyword">int</span> years<span class="token punctuation">,</span> <span class="token class-name">String</span> ultimateAnswer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>years <span class="token operator">=</span> years<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ultimateAnswer <span class="token operator">=</span> ultimateAnswer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构造函数参数类型匹配</p><p>在上述场景中，如果您使用 type 属性显式指定构造函数参数的类型，则容器可以使用简单类型的类型匹配，如以下示例所示：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>exampleBean<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>examples.ExampleBean<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>constructor-arg</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>int<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>7500000<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>constructor-arg</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>java.lang.String<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>42<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构造函数参数索引匹配</p><p>可以使用 <code>index</code> 属性显式指定构造函数参数的索引，如以下示例所示</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>exampleBean<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>examples.ExampleBean<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>constructor-arg</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>7500000<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>constructor-arg</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>42<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构造函数参数名称匹配</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>exampleBean<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>examples.ExampleBean<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>constructor-arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>years<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>7500000<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>constructor-arg</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ultimateAnswer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>42<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用 <code>@ConstructorProperties</code> 显式命名构造函数参数。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">examples</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExampleBean</span> <span class="token punctuation">{</span>

    <span class="token comment">// Fields omitted</span>

    <span class="token annotation punctuation">@ConstructorProperties</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;years&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ultimateAnswer&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ExampleBean</span><span class="token punctuation">(</span><span class="token keyword">int</span> years<span class="token punctuation">,</span> <span class="token class-name">String</span> ultimateAnswer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>years <span class="token operator">=</span> years<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ultimateAnswer <span class="token operator">=</span> ultimateAnswer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setter-方法注入" tabindex="-1"><a class="header-anchor" href="#setter-方法注入" aria-hidden="true">#</a> Setter 方法注入</h3><ul><li>手动模式 <ul><li>xml 配置元信息</li><li>注解配置元信息</li><li>Java 配置元信息</li></ul></li><li>自动模式 <ul><li>byName</li><li>byType</li></ul></li></ul><p>Setter 方法注入是通过容器在调用无参数构造函数或无参数静态工厂方法来实例化 bean 后调用 bean 上的 setter 方法来完成的。</p><p>以下示例显示了一个只能通过使用纯 setter 注入进行依赖注入的类。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SimpleMovieLister</span> <span class="token punctuation">{</span>

    <span class="token comment">// the SimpleMovieLister has a dependency on the MovieFinder</span>
    <span class="token keyword">private</span> <span class="token class-name">MovieFinder</span> movieFinder<span class="token punctuation">;</span>

    <span class="token comment">// a setter method so that the Spring container can inject a MovieFinder</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMovieFinder</span><span class="token punctuation">(</span><span class="token class-name">MovieFinder</span> movieFinder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>movieFinder <span class="token operator">=</span> movieFinder<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// business logic that actually uses the injected MovieFinder is omitted...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Spring 中，可以混合使用构造器注入和 setter 方法注入。建议将构造器注入用于强制依赖项；并将 setter 方法注入或配置方法用于可选依赖项。需要注意的是，在 setter 方法上使用 <code>@Required</code> 注解可用于使属性成为必需的依赖项；然而，更建议使用构造器注入来完成这项工作。</p><h3 id="字段注入" tabindex="-1"><a class="header-anchor" href="#字段注入" aria-hidden="true">#</a> 字段注入</h3><p>手动模式（Java 注解配置元信息）</p><ul><li><code>@Autowired</code></li><li><code>@Resource</code></li><li><code>@Inject</code>（可选）</li></ul><h3 id="方法注入" tabindex="-1"><a class="header-anchor" href="#方法注入" aria-hidden="true">#</a> 方法注入</h3><p>手动模式（Java 注解配置元信息）</p><ul><li><code>@Autowired</code></li><li><code>@Resource</code></li><li><code>@Inject</code>（可选）</li><li><code>@Bean</code></li></ul><h3 id="接口回调注入" tabindex="-1"><a class="header-anchor" href="#接口回调注入" aria-hidden="true">#</a> 接口回调注入</h3><p>Aware 系列接口回调</p><table><thead><tr><th>內建接口</th><th>说明</th></tr></thead><tbody><tr><td><code>BeanFactoryAware</code></td><td>获取 IoC 容器- <code>BeanFactory</code></td></tr><tr><td><code>ApplicationContextAware</code></td><td>获取 Spring 应用上下文- <code>ApplicationContext</code> 对象</td></tr><tr><td><code>EnvironmentAware</code></td><td>获取 <code>Environment</code> 对象</td></tr><tr><td><code>ResourceLoaderAware</code></td><td>获取资源加载器对象- <code>ResourceLoader</code></td></tr><tr><td><code>BeanClassLoaderAware</code></td><td>获取加载当前 Bean Class 的 <code>ClassLoader</code></td></tr><tr><td><code>BeanNameAware</code></td><td>获取当前 Bean 的名称</td></tr><tr><td><code>MessageSourceAware</code></td><td>获取 <code>MessageSource</code> 对象，用于 Spring 国际化</td></tr><tr><td><code>ApplicationEventPublisherAware</code></td><td>获取 <code>ApplicationEventPublishAware</code> 对象，用于 Spring 事件</td></tr><tr><td><code>EmbeddedValueResolverAware</code></td><td>获取 <code>StringValueResolver</code> 对象，用于占位符处理</td></tr></tbody></table><h3 id="依赖注入选型" tabindex="-1"><a class="header-anchor" href="#依赖注入选型" aria-hidden="true">#</a> 依赖注入选型</h3><ul><li>低依赖：构造器注入</li><li>多依赖：Setter 方法注入</li><li>便利性：字段注入</li><li>声明类：方法注入</li></ul><h2 id="限定注入和延迟注入" tabindex="-1"><a class="header-anchor" href="#限定注入和延迟注入" aria-hidden="true">#</a> 限定注入和延迟注入</h2><h3 id="限定注入" tabindex="-1"><a class="header-anchor" href="#限定注入" aria-hidden="true">#</a> 限定注入</h3><ul><li>使用 <code>@Qualifier</code> 注解限定 <ul><li>通过 Bean 名称限定</li><li>通过分组限定</li></ul></li><li>通过 <code>@Qualifier</code> 注解扩展限定 <ul><li>自定义注解：如 Spring Cloud 的 <code>@LoadBalanced</code></li></ul></li></ul><h3 id="延迟注入" tabindex="-1"><a class="header-anchor" href="#延迟注入" aria-hidden="true">#</a> 延迟注入</h3><ul><li>使用 <code>ObjectFactory</code></li><li>使用 <code>ObjectProvider</code>（推荐）</li></ul><h2 id="依赖注入数据类型" tabindex="-1"><a class="header-anchor" href="#依赖注入数据类型" aria-hidden="true">#</a> 依赖注入数据类型</h2><h3 id="基础类型" tabindex="-1"><a class="header-anchor" href="#基础类型" aria-hidden="true">#</a> 基础类型</h3><ul><li>基础数据类型：<code>boolean</code>、<code>byte</code>、<code>char</code>、<code>short</code>、<code>int</code>、<code>float</code>、<code>long</code>、<code>double</code></li><li>标量类型：<code>Number</code>、<code>Character</code>、<code>Boolean</code>、<code>Enum</code>、<code>Locale</code>、<code>Charset</code>、<code>Currency</code>、<code>Properties</code>、<code>UUID</code></li><li>常规类型：<code>Object</code>、<code>String</code>、<code>TimeZone</code>、<code>Calendar</code>、<code>Optional</code> 等</li><li>Spring 类型：<code>Resource</code>、<code>InputSource</code>、<code>Formatter</code> 等。</li></ul><h3 id="集合类型" tabindex="-1"><a class="header-anchor" href="#集合类型" aria-hidden="true">#</a> 集合类型</h3><p>数组类型：基础数据类型、标量类型、常规类型、String 类型的数组</p><p>集合类型：</p><ul><li><code>Collection</code>：<code>List</code>、<code>Set</code></li><li><code>Map</code>：<code>Properties</code></li></ul><h2 id="依赖处理过程" tabindex="-1"><a class="header-anchor" href="#依赖处理过程" aria-hidden="true">#</a> 依赖处理过程</h2><p>入口：<code>DefaultListableBeanFactory#resolveDependency</code></p><p>依赖描述符：<code>DependencyDescriptor</code></p><p>自定义绑定候选对象处理器：<code>AutowireCandidateResolver</code></p><p><code>@Autowired</code>、<code>@Value</code>、<code>@javax.inject.Inject</code> 处理器：<code>AutowiredAnnotationBeanPostProcessor</code></p><p>通用注解处理器：<code>CommonAnnotationBeanPostProcessor</code></p><ul><li>注入注解 <ul><li><code>javax.xml.ws.WebServiceRef</code></li><li><code>javax.ejb.EJB</code></li><li><code>javax.annotation.Resources</code></li></ul></li><li>生命周期注解 <ul><li><code>javax.annotation.PostConstruct</code></li><li><code>javax.annotation.PreDestroy</code></li></ul></li></ul><p>自定义依赖注入注解：</p><ul><li>生命周期处理 <ul><li><code>InstantiationAwareBeanPostProcessor</code></li><li><code>MergedBeanDefinitionPostProcessor</code></li></ul></li><li>元数据 <ul><li><code>InjectionMetadata</code></li><li><code>InjectionMetadata.InjectedElement</code></li></ul></li></ul><h2 id="依赖查找-vs-依赖注入" tabindex="-1"><a class="header-anchor" href="#依赖查找-vs-依赖注入" aria-hidden="true">#</a> 依赖查找 VS. 依赖注入</h2><table><thead><tr><th>类型</th><th>依赖处理</th><th>实现复杂度</th><th>代码侵入性</th><th>API 依赖性</th><th>可读性</th></tr></thead><tbody><tr><td>依赖查找</td><td>主动</td><td>相对繁琐</td><td>侵入业务逻辑</td><td>依赖容器 API</td><td>良好</td></tr><tr><td>依赖注入</td><td>被动</td><td>相对便利</td><td>低侵入性</td><td>不依赖容器 API</td><td>一般</td></tr></tbody></table><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,65),k={href:"https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans",target:"_blank",rel:"noopener noreferrer"},v={href:"https://time.geekbang.org/course/intro/265",target:"_blank",rel:"noopener noreferrer"};function m(h,b){const s=c("ExternalLinkIcon");return p(),l("div",null,[d,a("blockquote",null,[a("p",null,[n("自动装配的限制和不足，详情可以参考官方文档："),a("a",u,[n("Limitations and Disadvantages of Autowiring 小节"),e(s)])])]),r,a("ul",null,[a("li",null,[a("a",k,[n("Spring 官方文档之 Core Technologies"),e(s)])]),a("li",null,[a("a",v,[n("《小马哥讲 Spring 核心编程思想》"),e(s)])])])])}const x=o(i,[["render",m],["__file","04.Spring依赖注入.html.vue"]]);export{x as default};
