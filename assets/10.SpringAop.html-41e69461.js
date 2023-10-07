import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as t,c as i,a as n,b as o,d as c,e as p}from"./app-05b4da95.js";const l={},d=p(`<h1 id="spring-aop" tabindex="-1"><a class="header-anchor" href="#spring-aop" aria-hidden="true">#</a> Spring AOP</h1><h2 id="aop-概念" tabindex="-1"><a class="header-anchor" href="#aop-概念" aria-hidden="true">#</a> AOP 概念</h2><h3 id="什么是-aop" tabindex="-1"><a class="header-anchor" href="#什么是-aop" aria-hidden="true">#</a> 什么是 AOP</h3><p>AOP(Aspect-Oriented Programming，即 <strong>面向切面编程</strong>)与 OOP( Object-Oriented Programming，面向对象编程) 相辅相成，提供了与 OOP 不同的抽象软件结构的视角。</p><p>在 OOP 中，我们以类(class)作为我们的基本单元，而 AOP 中的基本单元是 <strong>Aspect(切面)</strong></p><h3 id="术语" tabindex="-1"><a class="header-anchor" href="#术语" aria-hidden="true">#</a> 术语</h3><h4 id="aspect-切面" tabindex="-1"><a class="header-anchor" href="#aspect-切面" aria-hidden="true">#</a> Aspect(切面)</h4><p><code>aspect</code> 由 <code>pointcount</code> 和 <code>advice</code> 组成, 它既包含了横切逻辑的定义, 也包括了连接点的定义. Spring AOP 就是负责实施切面的框架, 它将切面所定义的横切逻辑织入到切面所指定的连接点中.<br> AOP 的工作重心在于如何将增强织入目标对象的连接点上, 这里包含两个工作:</p><ol><li>如何通过 pointcut 和 advice 定位到特定的 joinpoint 上</li><li>如何在 advice 中编写切面代码.</li></ol><p><strong>可以简单地认为, 使用 @Aspect 注解的类就是切面.</strong></p><h4 id="advice-增强" tabindex="-1"><a class="header-anchor" href="#advice-增强" aria-hidden="true">#</a> advice(增强)</h4><p>由 aspect 添加到特定的 join point(即满足 point cut 规则的 join point) 的一段代码.<br> 许多 AOP 框架, 包括 Spring AOP, 会将 advice 模拟为一个拦截器(interceptor), 并且在 join point 上维护多个 advice, 进行层层拦截.<br> 例如 HTTP 鉴权的实现, 我们可以为每个使用 RequestMapping 标注的方法织入 advice, 当 HTTP 请求到来时, 首先进入到 advice 代码中, 在这里我们可以分析这个 HTTP 请求是否有相应的权限, 如果有, 则执行 Controller, 如果没有, 则抛出异常. 这里的 advice 就扮演着鉴权拦截器的角色了.</p><h4 id="连接点-join-point" tabindex="-1"><a class="header-anchor" href="#连接点-join-point" aria-hidden="true">#</a> 连接点(join point)</h4><blockquote><p>a point during the execution of a program, such as the execution of a method or the handling of an exception. In Spring AOP, a join point always represents a method execution.</p></blockquote><p>程序运行中的一些时间点, 例如一个方法的执行, 或者是一个异常的处理.<br><code>在 Spring AOP 中, join point 总是方法的执行点, 即只有方法连接点.</code></p><h4 id="切点-point-cut" tabindex="-1"><a class="header-anchor" href="#切点-point-cut" aria-hidden="true">#</a> 切点(point cut)</h4><p>匹配 join point 的谓词(a predicate that matches join points).<br> Advice 是和特定的 point cut 关联的, 并且在 point cut 相匹配的 join point 中执行.<br><code>在 Spring 中, 所有的方法都可以认为是 joinpoint, 但是我们并不希望在所有的方法上都添加 Advice, 而 pointcut 的作用就是提供一组规则(使用 AspectJ pointcut expression language 来描述) 来匹配joinpoint, 给满足规则的 joinpoint 添加 Advice.</code></p><h4 id="关于-join-point-和-point-cut-的区别" tabindex="-1"><a class="header-anchor" href="#关于-join-point-和-point-cut-的区别" aria-hidden="true">#</a> 关于 join point 和 point cut 的区别</h4><p>在 Spring AOP 中, 所有的方法执行都是 join point. 而 point cut 是一个描述信息, 它修饰的是 join point, 通过 point cut, 我们就可以确定哪些 join point 可以被织入 Advice. 因此 join point 和 point cut 本质上就是两个不同纬度上的东西.<br><code>advice 是在 join point 上执行的, 而 point cut 规定了哪些 join point 可以执行哪些 advice</code></p><h4 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> introduction</h4><p>为一个类型添加额外的方法或字段. Spring AOP 允许我们为 <code>目标对象</code> 引入新的接口(和对应的实现). 例如我们可以使用 introduction 来为一个 bean 实现 IsModified 接口, 并以此来简化 caching 的实现.</p><h4 id="目标对象-target" tabindex="-1"><a class="header-anchor" href="#目标对象-target" aria-hidden="true">#</a> 目标对象(Target)</h4><p>织入 advice 的目标对象. 目标对象也被称为 <code>advised object</code>.<br><code>因为 Spring AOP 使用运行时代理的方式来实现 aspect, 因此 adviced object 总是一个代理对象(proxied object)</code><br><code>注意, adviced object 指的不是原来的类, 而是织入 advice 后所产生的代理类.</code></p><h4 id="aop-proxy" tabindex="-1"><a class="header-anchor" href="#aop-proxy" aria-hidden="true">#</a> AOP proxy</h4><p>一个类被 AOP 织入 advice, 就会产生一个结果类, 它是融合了原类和增强逻辑的代理类.<br> 在 Spring AOP 中, 一个 AOP 代理是一个 JDK 动态代理对象或 CGLIB 代理对象.</p><h4 id="织入-weaving" tabindex="-1"><a class="header-anchor" href="#织入-weaving" aria-hidden="true">#</a> 织入(Weaving)</h4><p>将 aspect 和其他对象连接起来, 并创建 adviced object 的过程.<br> 根据不同的实现技术, AOP 织入有三种方式:</p><ul><li>编译器织入, 这要求有特殊的 Java 编译器.</li><li>类装载期织入, 这需要有特殊的类装载器.</li><li>动态代理织入, 在运行期为目标类添加增强(Advice)生成子类的方式.<br> Spring 采用动态代理织入, 而 AspectJ 采用编译器织入和类装载期织入.</li></ul><h3 id="advice-的类型" tabindex="-1"><a class="header-anchor" href="#advice-的类型" aria-hidden="true">#</a> advice 的类型</h3><ul><li>before advice, 在 join point 前被执行的 advice. 虽然 before advice 是在 join point 前被执行, 但是它并不能够阻止 join point 的执行, 除非发生了异常(即我们在 before advice 代码中, 不能人为地决定是否继续执行 join point 中的代码)</li><li>after return advice, 在一个 join point 正常返回后执行的 advice</li><li>after throwing advice, 当一个 join point 抛出异常后执行的 advice</li><li>after(final) advice, 无论一个 join point 是正常退出还是发生了异常, 都会被执行的 advice.</li><li>around advice, 在 join point 前和 joint point 退出后都执行的 advice. 这个是最常用的 advice.</li></ul><h3 id="关于-aop-proxy" tabindex="-1"><a class="header-anchor" href="#关于-aop-proxy" aria-hidden="true">#</a> 关于 AOP Proxy</h3><p>Spring AOP 默认使用标准的 JDK 动态代理(dynamic proxy)技术来实现 AOP 代理, 通过它, 我们可以为任意的接口实现代理.<br><code>如果需要为一个类实现代理, 那么可以使用 CGLIB 代理.</code> 当一个业务逻辑对象没有实现接口时, 那么 Spring AOP 就默认使用 CGLIB 来作为 AOP 代理了. 即如果我们需要为一个方法织入 advice, 但是这个方法不是一个接口所提供的方法, 则此时 Spring AOP 会使用 CGLIB 来实现动态代理. 鉴于此, Spring AOP 建议基于接口编程, 对接口进行 AOP 而不是类.</p><h3 id="彻底理解-aspect-join-point-point-cut-advice" tabindex="-1"><a class="header-anchor" href="#彻底理解-aspect-join-point-point-cut-advice" aria-hidden="true">#</a> 彻底理解 aspect, join point, point cut, advice</h3><p>看完了上面的理论部分知识, 我相信还是会有不少朋友感觉到 AOP 的概念还是很模糊, 对 AOP 中的各种概念理解的还不是很透彻. 其实这很正常, 因为 AOP 中的概念是在是太多了, 我当时也是花了老大劲才梳理清楚的.<br> 下面我以一个简单的例子来比喻一下 AOP 中 aspect, jointpoint, pointcut 与 advice 之间的关系.</p><p>让我们来假设一下, 从前有一个叫爪哇的小县城, 在一个月黑风高的晚上, 这个县城中发生了命案. 作案的凶手十分狡猾, 现场没有留下什么有价值的线索. 不过万幸的是, 刚从隔壁回来的老王恰好在这时候无意中发现了凶手行凶的过程, 但是由于天色已晚, 加上凶手蒙着面, 老王并没有看清凶手的面目, 只知道凶手是个男性, 身高约七尺五寸. 爪哇县的县令根据老王的描述, 对守门的士兵下命令说: 凡是发现有身高七尺五寸的男性, 都要抓过来审问. 士兵当然不敢违背县令的命令, 只好把进出城的所有符合条件的人都抓了起来.</p><p>来让我们看一下上面的一个小故事和 AOP 到底有什么对应关系.<br> 首先我们知道, 在 Spring AOP 中 join point 指代的是所有方法的执行点, 而 point cut 是一个描述信息, 它修饰的是 join point, 通过 point cut, 我们就可以确定哪些 join point 可以被织入 Advice. 对应到我们在上面举的例子, 我们可以做一个简单的类比, join point 就相当于 <strong>爪哇的小县城里的百姓</strong>, point cut 就相当于 <strong>老王所做的指控, 即凶手是个男性, 身高约七尺五寸</strong>, 而 advice 则是施加在符合老王所描述的嫌疑人的动作: <strong>抓过来审问</strong>.<br> 为什么可以这样类比呢?</p><ul><li>join point --&gt; 爪哇的小县城里的百姓: 因为根据定义, join point 是所有可能被织入 advice 的候选的点, 在 Spring AOP 中, 则可以认为所有方法执行点都是 join point. 而在我们上面的例子中, 命案发生在小县城中, 按理说在此县城中的所有人都有可能是嫌疑人.</li><li>point cut --&gt; 男性, 身高约七尺五寸: 我们知道, 所有的方法(joint point) 都可以织入 advice, 但是我们并不希望在所有方法上都织入 advice, 而 pointcut 的作用就是提供一组规则来匹配 joinpoint, 给满足规则的 joinpoint 添加 advice. 同理, 对于县令来说, 他再昏庸, 也知道不能把县城中的所有百姓都抓起来审问, 而是根据<code>凶手是个男性, 身高约七尺五寸</code>, 把符合条件的人抓起来. 在这里<code>凶手是个男性, 身高约七尺五寸</code> 就是一个修饰谓语, 它限定了凶手的范围, 满足此修饰规则的百姓都是嫌疑人, 都需要抓起来审问.</li><li>advice --&gt; 抓过来审问, advice 是一个动作, 即一段 Java 代码, 这段 Java 代码是作用于 point cut 所限定的那些 join point 上的. 同理, 对比到我们的例子中, <code>抓过来审问</code> 这个动作就是对作用于那些满足 <code>男性, 身高约七尺五寸</code> 的<code>爪哇的小县城里的百姓</code>.</li><li>aspect: aspect 是 point cut 与 advice 的组合, 因此在这里我们就可以类比: <strong>&quot;根据老王的线索, 凡是发现有身高七尺五寸的男性, 都要抓过来审问&quot;</strong> 这一整个动作可以被认为是一个 aspect.</li></ul><p>或则我们也可以从语法的角度来简单类比一下. 我们在学英语时, 经常会接触什么 <code>定语</code>, <code>被动句</code> 之类的概念, 那么可以做一个不严谨的类比, 即 <code>joinpoint</code> 可以认为是一个 <code>宾语</code>, 而 <code>pointcut</code> 则可以类比为修饰 <code>joinpoint</code> 的定语, 那么整个 <code>aspect</code> 就可以描述为: <code>满足 pointcut 规则的 joinpoint 会被添加相应的 advice 操作.</code></p><h2 id="aspectj-支持" tabindex="-1"><a class="header-anchor" href="#aspectj-支持" aria-hidden="true">#</a> @AspectJ 支持</h2><p><strong><code>@AspectJ</code></strong> 是一种使用 Java 注解来实现 AOP 的编码风格。</p><p>@AspectJ 风格的 AOP 是 AspectJ Project 在 AspectJ 5 中引入的, 并且 Spring 也支持 @AspectJ 的 AOP 风格.</p><h3 id="使能-aspectj-支持" tabindex="-1"><a class="header-anchor" href="#使能-aspectj-支持" aria-hidden="true">#</a> 使能 @AspectJ 支持</h3><p>@AspectJ 可以以 XML 的方式或以注解的方式来使能, 并且不论以哪种方式使能@ASpectJ, 我们都必须保证 aspectjweaver.jar 在 classpath 中.</p><h4 id="使用-java-configuration-方式使能-aspectj" tabindex="-1"><a class="header-anchor" href="#使用-java-configuration-方式使能-aspectj" aria-hidden="true">#</a> 使用 Java Configuration 方式使能@AspectJ</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableAspectJAutoProxy</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用-xml-方式使能-aspectj" tabindex="-1"><a class="header-anchor" href="#使用-xml-方式使能-aspectj" aria-hidden="true">#</a> 使用 XML 方式使能@AspectJ</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;aop:aspectj-autoproxy/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="定义-aspect-切面" tabindex="-1"><a class="header-anchor" href="#定义-aspect-切面" aria-hidden="true">#</a> 定义 aspect(切面)</h3><p>当使用注解 <strong>@Aspect</strong> 标注一个 Bean 后, 那么 Spring 框架会自动收集这些 Bean, 并添加到 Spring AOP 中, 例如:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Aspect</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyTest</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>注意, 仅仅使用@Aspect 注解, 并不能将一个 Java 对象转换为 Bean, 因此我们还需要使用类似 @Component 之类的注解.</code><br><code>注意, 如果一个 类被@Aspect 标注, 则这个类就不能是其他 aspect 的 **advised object** 了, 因为使用 @Aspect 后, 这个类就会被排除在 auto-proxying 机制之外.</code></p><h3 id="声明-pointcut" tabindex="-1"><a class="header-anchor" href="#声明-pointcut" aria-hidden="true">#</a> 声明 pointcut</h3><p>一个 pointcut 的声明由两部分组成:</p><ul><li>一个方法签名, 包括方法名和相关参数</li><li>一个 pointcut 表达式, 用来指定哪些方法执行是我们感兴趣的(即因此可以织入 advice).</li></ul><p>在@AspectJ 风格的 AOP 中, 我们使用一个方法来描述 pointcut, 即:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Pointcut</span><span class="token punctuation">(</span><span class="token string">&quot;execution(* com.xys.service.UserService.*(..))&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 切点表达式</span>
<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">dataAccessOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 切点前面</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>这个方法必须无返回值.</code><br><code>这个方法本身就是 pointcut signature, pointcut 表达式使用@Pointcut 注解指定.</code><br> 上面我们简单地定义了一个 pointcut, 这个 pointcut 所描述的是: 匹配所有在包 <strong>com.xys.service.UserService</strong> 下的所有方法的执行.</p><h4 id="切点标志符-designator" tabindex="-1"><a class="header-anchor" href="#切点标志符-designator" aria-hidden="true">#</a> 切点标志符(designator)</h4><p>AspectJ5 的切点表达式由标志符(designator)和操作参数组成. 如 &quot;execution(* greetTo(..))&quot; 的切点表达式, **execution** 就是 标志符, 而圆括号里的 *****greetTo(..) 就是操作参数</p><h5 id="execution" tabindex="-1"><a class="header-anchor" href="#execution" aria-hidden="true">#</a> execution</h5><p>匹配 join point 的执行, 例如 &quot;execution(* hello(..))&quot; 表示匹配所有目标类中的 hello() 方法. 这个是最基本的 pointcut 标志符.</p><h5 id="within" tabindex="-1"><a class="header-anchor" href="#within" aria-hidden="true">#</a> within</h5><p>匹配特定包下的所有 join point, 例如 <code>within(com.xys.*)</code> 表示 com.xys 包中的所有连接点, 即包中的所有类的所有方法. 而<code>within(com.xys.service.*Service)</code> 表示在 com.xys.service 包中所有以 Service 结尾的类的所有的连接点.</p><h5 id="this-与-target" tabindex="-1"><a class="header-anchor" href="#this-与-target" aria-hidden="true">#</a> this 与 target</h5><p>this 的作用是匹配一个 bean, 这个 bean(Spring AOP proxy) 是一个给定类型的实例(instance of). 而 target 匹配的是一个目标对象(target object, 即需要织入 advice 的原始的类), 此对象是一个给定类型的实例(instance of).</p><h5 id="bean" tabindex="-1"><a class="header-anchor" href="#bean" aria-hidden="true">#</a> bean</h5><p>匹配 bean 名字为指定值的 bean 下的所有方法, 例如:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bean(*Service) // 匹配名字后缀为 Service 的 bean 下的所有方法
bean(myService) // 匹配名字为 myService 的 bean 下的所有方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="args" tabindex="-1"><a class="header-anchor" href="#args" aria-hidden="true">#</a> args</h5><p>匹配参数满足要求的的方法.<br> 例如:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Pointcut</span><span class="token punctuation">(</span><span class="token string">&quot;within(com.xys.demo2.*)&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pointcut2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Before</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;pointcut2()  &amp;&amp;  args(name)&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;---page: {}---&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NormalService</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;---NormalService: someMethod invoked---&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;---NormalService: test invoked---&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;服务一切正常&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 NormalService.test 执行时, 则 advice <code>doSomething</code> 就会执行, test 方法的参数 name 就会传递到 <code>doSomething</code> 中.</p><p>常用例子:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 匹配只有一个参数 name 的方法</span>
<span class="token annotation punctuation">@Before</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;aspectMethod()  &amp;&amp;  args(name)&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// 匹配第一个参数为 name 的方法</span>
<span class="token annotation punctuation">@Before</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;aspectMethod()  &amp;&amp;  args(name, ..)&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// 匹配第二个参数为 name 的方法</span>
<span class="token class-name">Before</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;aspectMethod()  &amp;&amp;  args(*, name, ..)&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="annotation" tabindex="-1"><a class="header-anchor" href="#annotation" aria-hidden="true">#</a> @annotation</h5><p>匹配由指定注解所标注的方法, 例如:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Pointcut</span><span class="token punctuation">(</span><span class="token string">&quot;@annotation(com.xys.demo1.AuthChecker)&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pointcut</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>则匹配由注解 <code>AuthChecker</code> 所标注的方法.</p><h4 id="常见的切点表达式" tabindex="-1"><a class="header-anchor" href="#常见的切点表达式" aria-hidden="true">#</a> 常见的切点表达式</h4><h5 id="匹配方法签名" tabindex="-1"><a class="header-anchor" href="#匹配方法签名" aria-hidden="true">#</a> 匹配方法签名</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 匹配指定包中的所有的方法
execution(* com.xys.service.*(..))

// 匹配当前包中的指定类的所有方法
execution(* UserService.*(..))

// 匹配指定包中的所有 public 方法
execution(public * com.xys.service.*(..))

// 匹配指定包中的所有 public 方法, 并且返回值是 int 类型的方法
execution(public int com.xys.service.*(..))

// 匹配指定包中的所有 public 方法, 并且第一个参数是 String, 返回值是 int 类型的方法
execution(public int com.xys.service.*(String name, ..))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="匹配类型签名" tabindex="-1"><a class="header-anchor" href="#匹配类型签名" aria-hidden="true">#</a> 匹配类型签名</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 匹配指定包中的所有的方法, 但不包括子包
within(com.xys.service.*)

// 匹配指定包中的所有的方法, 包括子包
within(com.xys.service..*)

// 匹配当前包中的指定类中的方法
within(UserService)


// 匹配一个接口的所有实现类中的实现的方法
within(UserDao+)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="匹配-bean-名字" tabindex="-1"><a class="header-anchor" href="#匹配-bean-名字" aria-hidden="true">#</a> 匹配 Bean 名字</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 匹配以指定名字结尾的 Bean 中的所有方法
bean(*Service)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="切点表达式组合" tabindex="-1"><a class="header-anchor" href="#切点表达式组合" aria-hidden="true">#</a> 切点表达式组合</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 匹配以 Service 或 ServiceImpl 结尾的 bean
bean(*Service || *ServiceImpl)

// 匹配名字以 Service 结尾, 并且在包 com.xys.service 中的 bean
bean(*Service) &amp;&amp; within(com.xys.service.*)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="声明-advice" tabindex="-1"><a class="header-anchor" href="#声明-advice" aria-hidden="true">#</a> 声明 advice</h3><p>advice 是和一个 pointcut 表达式关联在一起的, 并且会在匹配的 join point 的方法执行的前/后/周围 运行. <code>pointcut 表达式可以是简单的一个 pointcut 名字的引用, 或者是完整的 pointcut 表达式</code>.<br> 下面我们以几个简单的 advice 为例子, 来看一下一个 advice 是如何声明的.</p><h4 id="before-advice" tabindex="-1"><a class="header-anchor" href="#before-advice" aria-hidden="true">#</a> Before advice</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> xiongyongshun
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@created</span> 16/9/9 13:13
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Aspect</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BeforeAspectTest</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义一个 Pointcut, 使用 切点表达式函数 来描述对哪些 Join point 使用 advise.</span>
    <span class="token annotation punctuation">@Pointcut</span><span class="token punctuation">(</span><span class="token string">&quot;execution(* com.xys.service.UserService.*(..))&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">dataAccessOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Aspect</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AdviseDefine</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义 advise</span>
    <span class="token annotation punctuation">@Before</span><span class="token punctuation">(</span><span class="token string">&quot;com.xys.aspect.PointcutDefine.dataAccessOperation()&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doBeforeAccessCheck</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;*****Before advise, method: &quot;</span> <span class="token operator">+</span> joinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toShortString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; *****&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里, <strong>@Before</strong> 引用了一个 pointcut, 即 &quot;com.xys.aspect.PointcutDefine.dataAccessOperation()&quot; 是一个 pointcut 的名字.<br> 如果我们在 advice 在内置 pointcut, 则可以:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Aspect</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AdviseDefine</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将 pointcut 和 advice 同时定义</span>
    <span class="token annotation punctuation">@Before</span><span class="token punctuation">(</span><span class="token string">&quot;within(com.xys.service..*)&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doAccessCheck</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;*****doAccessCheck, Before advise, method: &quot;</span> <span class="token operator">+</span> joinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toShortString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; *****&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="around-advice" tabindex="-1"><a class="header-anchor" href="#around-advice" aria-hidden="true">#</a> around advice</h4><p>around advice 比较特别, 它可以在一个方法的之前之前和之后添加不同的操作, 并且甚至可以决定何时, 如何, 是否调用匹配到的方法.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Aspect</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AdviseDefine</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义 advise</span>
    <span class="token annotation punctuation">@Around</span><span class="token punctuation">(</span><span class="token string">&quot;com.xys.aspect.PointcutDefine.dataAccessOperation()&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">doAroundAccessCheck</span><span class="token punctuation">(</span><span class="token class-name">ProceedingJoinPoint</span> pjp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token class-name">StopWatch</span> stopWatch <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StopWatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stopWatch<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 开始</span>
        <span class="token class-name">Object</span> retVal <span class="token operator">=</span> pjp<span class="token punctuation">.</span><span class="token function">proceed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stopWatch<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结束</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;invoke method: &quot;</span> <span class="token operator">+</span> pjp<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;, elapsed time: &quot;</span> <span class="token operator">+</span> stopWatch<span class="token punctuation">.</span><span class="token function">getTotalTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> retVal<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>around advice 和前面的 before advice 差不多, 只是我们把注解 <strong>@Before</strong> 改为了 <strong>@Around</strong> 了.</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,100),u={href:"https://item.jd.com/11899370.html",target:"_blank",rel:"noopener noreferrer"};function r(v,k){const a=e("ExternalLinkIcon");return t(),i("div",null,[d,n("ul",null,[n("li",null,[n("a",u,[o("《 Spring 实战（第 4 版）》"),c(a)])])])])}const b=s(l,[["render",r],["__file","10.SpringAop.html.vue"]]);export{b as default};
