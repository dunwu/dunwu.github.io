import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as e,c as o,a as n,b as p,d as i,e as c}from"./app-e12ad880.js";const l={},u=c(`<h1 id="springboot-基本原理" tabindex="-1"><a class="header-anchor" href="#springboot-基本原理" aria-hidden="true">#</a> SpringBoot 基本原理</h1><p>SpringBoot 为我们做的自动配置，确实方便快捷，但一直搞不明白它的内部启动原理，这次就来一步步解开 SpringBoot 的神秘面纱，让它不再神秘。</p><figure><img src="https:////upload-images.jianshu.io/upload_images/6430208-ebcb376f96103703.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><hr><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Application</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面代码可以看出，**Annotation 定义（@SpringBootApplication）和类定义（SpringApplication.run）**最为耀眼，所以要揭开 SpringBoot 的神秘面纱，我们要从这两位开始就可以了。</p><h2 id="springbootapplication-背后的秘密" tabindex="-1"><a class="header-anchor" href="#springbootapplication-背后的秘密" aria-hidden="true">#</a> SpringBootApplication 背后的秘密</h2><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token annotation builtin">@Target</span><span class="token punctuation">(</span>ElementType<span class="token punctuation">.</span>TYPE<span class="token punctuation">)</span>            <span class="token comment">// 注解的适用范围，其中TYPE用于描述类、接口（包括包注解类型）或enum声明</span>
<span class="token annotation builtin">@Retention</span><span class="token punctuation">(</span>RetentionPolicy<span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>  <span class="token comment">// 注解的生命周期，保留到class文件中（三个生命周期）</span>
<span class="token annotation builtin">@Documented</span>                          <span class="token comment">// 表明这个注解应该被javadoc记录</span>
<span class="token annotation builtin">@Inherited</span>                           <span class="token comment">// 子类可以继承该注解</span>
<span class="token annotation builtin">@SpringBootConfiguration</span>             <span class="token comment">// 继承了Configuration，表示当前是注解类</span>
<span class="token annotation builtin">@EnableAutoConfiguration</span>             <span class="token comment">// 开启springboot的注解功能，springboot的四大神器之一，其借助@import的帮助</span>
<span class="token annotation builtin">@ComponentScan</span><span class="token punctuation">(</span>excludeFilters <span class="token operator">=</span> <span class="token punctuation">{</span>    <span class="token comment">// 扫描路径设置（具体使用待确认）</span>
        <span class="token annotation builtin">@Filter</span><span class="token punctuation">(</span>type <span class="token operator">=</span> FilterType<span class="token punctuation">.</span>CUSTOM<span class="token punctuation">,</span> classes <span class="token operator">=</span> TypeExcludeFilter<span class="token punctuation">.</span>class<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token annotation builtin">@Filter</span><span class="token punctuation">(</span>type <span class="token operator">=</span> FilterType<span class="token punctuation">.</span>CUSTOM<span class="token punctuation">,</span> classes <span class="token operator">=</span> AutoConfigurationExcludeFilter<span class="token punctuation">.</span>class<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> @<span class="token keyword">interface</span> SpringBootApplication <span class="token punctuation">{</span>
<span class="token operator">..</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然定义使用了多个 Annotation 进行了原信息标注，但实际上重要的只有三个 Annotation：</p><p><strong>@Configuration</strong>（@SpringBootConfiguration 点开查看发现里面还是应用了@Configuration）<br><strong>@EnableAutoConfiguration<br> @ComponentScan</strong><br> 所以，如果我们使用如下的 SpringBoot 启动类，整个 SpringBoot 应用依然可以与之前的启动类功能对等：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableAutoConfiguration</span>
<span class="token annotation punctuation">@ComponentScan</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Application</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每次写这 3 个比较累，所以写一个@SpringBootApplication 方便点。接下来分别介绍这 3 个 Annotation。</p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> @Configuration</h2><p>这里的@Configuration 对我们来说不陌生，<strong>它就是 JavaConfig 形式的 Spring Ioc 容器的配置类使用的那个@Configuration</strong>，SpringBoot 社区推荐使用基于 JavaConfig 的配置形式，所以，这里的启动类标注了@Configuration 之后，本身其实也是一个 IoC 容器的配置类。<br> 举几个简单例子回顾下，XML 跟 config 配置方式的区别：</p><p>表达形式层面<br> 基于 XML 配置的方式是这样：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.0.xsd<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">default-lazy-init</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--bean定义--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而基于 JavaConfig 的配置方式是这样：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MockConfiguration</span><span class="token punctuation">{</span>
    <span class="token comment">//bean定义</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>任何一个标注了@Configuration 的 Java 类定义都是一个 JavaConfig 配置类。</strong></p><p>注册 bean 定义层面<br> 基于 XML 的配置形式是这样：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token operator">&lt;</span><span class="token class-name">bean</span> id<span class="token operator">=</span><span class="token string">&quot;mockService&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;..MockServiceImpl&quot;</span><span class="token operator">&gt;</span>
    <span class="token range operator">..</span><span class="token punctuation">.</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>bean<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而基于 JavaConfig 的配置形式是这样的：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MockConfiguration</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MockService</span> <span class="token function">mockService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MockServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>任何一个标注了@Bean 的方法，其返回值将作为一个 bean 定义注册到 Spring 的 IoC 容器，方法名将默认成该 bean 定义的 id。</strong></p><p>表达依赖注入关系层面<br> 为了表达 bean 与 bean 之间的依赖关系，在 XML 形式中一般是这样：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mockService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>..MockServiceImpl<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    &lt;propery name =&quot;dependencyService&quot; ref=&quot;dependencyService&quot; /&gt;
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dependencyService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>DependencyServiceImpl<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而基于 JavaConfig 的配置形式是这样的：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MockConfiguration</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MockService</span> <span class="token function">mockService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MockServiceImpl</span><span class="token punctuation">(</span><span class="token function">dependencyService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">DependencyService</span> <span class="token function">dependencyService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DependencyServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如果一个 bean 的定义依赖其他 bean,则直接调用对应的 JavaConfig 类中依赖 bean 的创建方法就可以了。</strong></p><h2 id="componentscan" tabindex="-1"><a class="header-anchor" href="#componentscan" aria-hidden="true">#</a> @ComponentScan</h2><p><strong>@ComponentScan 这个注解在 Spring 中很重要，它对应 XML 配置中的元素，@ComponentScan 的功能其实就是自动扫描并加载符合条件的组件（比如@Component 和@Repository 等）或者 bean 定义，最终将这些 bean 定义加载到 IoC 容器中。</strong></p><p>我们可以通过 basePackages 等属性来细粒度的定制@ComponentScan 自动扫描的范围，如果不指定，则默认 Spring 框架实现会从声明@ComponentScan 所在类的 package 进行扫描。</p><blockquote><p>注：所以 SpringBoot 的启动类最好是放在 root package 下，因为默认不指定 basePackages。</p></blockquote><h2 id="enableautoconfiguration" tabindex="-1"><a class="header-anchor" href="#enableautoconfiguration" aria-hidden="true">#</a> @EnableAutoConfiguration</h2><p>个人感觉**@EnableAutoConfiguration 这个 Annotation 最为重要**，所以放在最后来解读，大家是否还记得 Spring 框架提供的各种名字为@Enable 开头的 Annotation 定义？比如@EnableScheduling、@EnableCaching、@EnableMBeanExport 等，@EnableAutoConfiguration 的理念和做事方式其实一脉相承，简单概括一下就是，借助@Import 的支持，收集和注册特定场景相关的 bean 定义。</p><p><strong>@EnableScheduling</strong>是通过@Import 将 Spring 调度框架相关的 bean 定义都加载到 IoC 容器。<br><strong>@EnableMBeanExport</strong>是通过@Import 将 JMX 相关的 bean 定义加载到 IoC 容器。<br> 而**@EnableAutoConfiguration**也是借助@Import 的帮助，将所有符合自动配置条件的 bean 定义加载到 IoC 容器，仅此而已！</p><p>@EnableAutoConfiguration 作为一个复合 Annotation,其自身定义关键信息如下：</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token annotation builtin">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;deprecation&quot;</span></span><span class="token punctuation">)</span>
<span class="token annotation builtin">@Target</span><span class="token punctuation">(</span>ElementType<span class="token punctuation">.</span>TYPE<span class="token punctuation">)</span>
<span class="token annotation builtin">@Retention</span><span class="token punctuation">(</span>RetentionPolicy<span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token annotation builtin">@Documented</span>
<span class="token annotation builtin">@Inherited</span>
<span class="token annotation builtin">@AutoConfigurationPackage</span>
<span class="token annotation builtin">@Import</span><span class="token punctuation">(</span>EnableAutoConfigurationImportSelector<span class="token punctuation">.</span>class<span class="token punctuation">)</span>
<span class="token keyword">public</span> @<span class="token keyword">interface</span> EnableAutoConfiguration <span class="token punctuation">{</span>
    <span class="token operator">..</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两个比较重要的注解：</p><p><strong>@AutoConfigurationPackage：自动配置包</strong></p><p><strong>@Import: 导入自动配置的组件</strong></p><h4 id="autoconfigurationpackage-注解" tabindex="-1"><a class="header-anchor" href="#autoconfigurationpackage-注解" aria-hidden="true">#</a> AutoConfigurationPackage 注解：</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Registrar</span> <span class="token keyword">implements</span> <span class="token class-name">ImportBeanDefinitionRegistrar</span><span class="token punctuation">,</span> <span class="token class-name">DeterminableImports</span> <span class="token punctuation">{</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">registerBeanDefinitions</span><span class="token punctuation">(</span><span class="token class-name">AnnotationMetadata</span> metadata<span class="token punctuation">,</span>
                <span class="token class-name">BeanDefinitionRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">register</span><span class="token punctuation">(</span>registry<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">PackageImport</span><span class="token punctuation">(</span>metadata<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPackageName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它其实是注册了一个 Bean 的定义。</p><p>new PackageImport(metadata).getPackageName()，它其实返回了当前主程序类的 同级以及子级 的包组件。</p><figure><img src="https:////upload-images.jianshu.io/upload_images/6430208-439283a70a24c7a0.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/281/format/webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>以上图为例，DemoApplication 是和 demo 包同级，但是 demo2 这个类是 DemoApplication 的父级，和 example 包同级</p><p>也就是说，DemoApplication 启动加载的 Bean 中，并不会加载 demo2，这也就是为什么，我们要把 DemoApplication 放在项目的最高级中。</p><h4 id="import-autoconfigurationimportselector-class-注解" tabindex="-1"><a class="header-anchor" href="#import-autoconfigurationimportselector-class-注解" aria-hidden="true">#</a> Import(AutoConfigurationImportSelector.class)注解：</h4><figure><img src="https:////upload-images.jianshu.io/upload_images/6430208-1c448a69c41dc35c.png?imageMogr2/auto-orient/strip|imageView2/2/w/877/format/webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>可以从图中看出 AutoConfigurationImportSelector 继承了 DeferredImportSelector 继承了 ImportSelector</p><p>ImportSelector 有一个方法为：selectImports。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token metadata function">@Override</span>
    public <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">selectImports</span><span class="token punctuation">(</span><span class="token class-name">AnnotationMetadata</span> annotationMetadata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isEnabled</span><span class="token punctuation">(</span>annotationMetadata<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> NO_IMPORTS<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">AutoConfigurationMetadata</span> autoConfigurationMetadata <span class="token operator">=</span> <span class="token class-name">AutoConfigurationMetadataLoader</span>
                <span class="token punctuation">.</span><span class="token function">loadMetadata</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>beanClassLoader<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">AnnotationAttributes</span> attributes <span class="token operator">=</span> <span class="token function">getAttributes</span><span class="token punctuation">(</span>annotationMetadata<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> configurations <span class="token operator">=</span> <span class="token function">getCandidateConfigurations</span><span class="token punctuation">(</span>annotationMetadata<span class="token punctuation">,</span>
                attributes<span class="token punctuation">)</span><span class="token punctuation">;</span>
        configurations <span class="token operator">=</span> <span class="token function">removeDuplicates</span><span class="token punctuation">(</span>configurations<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> exclusions <span class="token operator">=</span> <span class="token function">getExclusions</span><span class="token punctuation">(</span>annotationMetadata<span class="token punctuation">,</span> attributes<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">checkExcludedClasses</span><span class="token punctuation">(</span>configurations<span class="token punctuation">,</span> exclusions<span class="token punctuation">)</span><span class="token punctuation">;</span>
        configurations<span class="token punctuation">.</span><span class="token function">removeAll</span><span class="token punctuation">(</span>exclusions<span class="token punctuation">)</span><span class="token punctuation">;</span>
        configurations <span class="token operator">=</span> <span class="token function">filter</span><span class="token punctuation">(</span>configurations<span class="token punctuation">,</span> autoConfigurationMetadata<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">fireAutoConfigurationImportEvents</span><span class="token punctuation">(</span>configurations<span class="token punctuation">,</span> exclusions<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">toStringArray</span><span class="token punctuation">(</span>configurations<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到第九行，它其实是去加载 public static final String FACTORIES_RESOURCE_LOCATION = &quot;META-INF/spring.factories&quot;;外部文件。这个外部文件，有很多自动配置的类。如下：</p><figure><img src="https:////upload-images.jianshu.io/upload_images/6430208-250f3320c15e5c99.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>image</p><p>其中，最关键的要属**@Import(EnableAutoConfigurationImportSelector.class)<strong>，借助</strong>EnableAutoConfigurationImportSelector**，<strong>@EnableAutoConfiguration</strong>可以帮助 SpringBoot 应用将所有符合条件的**@Configuration**配置都加载到当前 SpringBoot 创建并使用的 IoC 容器。就像一只“八爪鱼”一样。</p><figure><img src="https:////upload-images.jianshu.io/upload_images/6430208-6f3a835755ee7710.png?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="自动配置幕后英雄-springfactoriesloader-详解" tabindex="-1"><a class="header-anchor" href="#自动配置幕后英雄-springfactoriesloader-详解" aria-hidden="true">#</a> 自动配置幕后英雄：SpringFactoriesLoader 详解</h3><p>借助于 Spring 框架原有的一个工具类：SpringFactoriesLoader 的支持，@EnableAutoConfiguration 可以智能的自动配置功效才得以大功告成！</p><p>SpringFactoriesLoader 属于 Spring 框架私有的一种扩展方案，其主要功能就是从指定的配置文件 META-INF/spring.factories 加载配置。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>public abstract class SpringFactoriesLoader {
    //...
    public static <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>T</span><span class="token punctuation">&gt;</span></span> List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>T</span><span class="token punctuation">&gt;</span></span> loadFactories(Class<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>T</span><span class="token punctuation">&gt;</span></span> factoryClass, ClassLoader classLoader) {
        ...
    }


    public static List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>String</span><span class="token punctuation">&gt;</span></span> loadFactoryNames(Class<span class="token php language-php"><span class="token delimiter important">&lt;?</span><span class="token operator">&gt;</span> factoryClass<span class="token punctuation">,</span> ClassLoader classLoader<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token operator">.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配合**@EnableAutoConfiguration<strong>使用的话，它更多是提供一种配置查找的功能支持，即根据@EnableAutoConfiguration 的完整类名 org.springframework.boot.autoconfigure.EnableAutoConfiguration 作为查找的 Key,获取对应的一组</strong>@Configuration**类</p><figure><img src="https:////upload-images.jianshu.io/upload_images/6430208-fcdfcb56828a015a?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>上图就是从 SpringBoot 的 autoconfigure 依赖包中的 META-INF/spring.factories 配置文件中摘录的一段内容，可以很好地说明问题。</p><p>所以，@EnableAutoConfiguration 自动配置的魔法骑士就变成了：<strong>从 classpath 中搜寻所有的 META-INF/spring.factories 配置文件，并将其中 org.springframework.boot.autoconfigure.EnableutoConfiguration 对应的配置项通过反射（Java Refletion）实例化为对应的标注了@Configuration 的 JavaConfig 形式的 IoC 容器配置类，然后汇总为一个并加载到 IoC 容器。</strong></p><figure><img src="https:////upload-images.jianshu.io/upload_images/6430208-10850d62d44c95ce.png?imageMogr2/auto-orient/strip|imageView2/2/w/822/format/webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,68),r={href:"https://www.jianshu.com/p/943650ab7dfd",target:"_blank",rel:"noopener noreferrer"};function d(k,g){const a=t("ExternalLinkIcon");return e(),o("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[p("一文搞懂 springboot 启动原理"),i(a)])])])])}const b=s(l,[["render",d],["__file","22.SpringBoot基本原理.html.vue"]]);export{b as default};
