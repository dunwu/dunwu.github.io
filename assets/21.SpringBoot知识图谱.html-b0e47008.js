import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as t,c as o,a as n,b as e,d as a,e as d}from"./app-dc48b2dc.js";const l={},c=d(`<h1 id="springboot-知识图谱" tabindex="-1"><a class="header-anchor" href="#springboot-知识图谱" aria-hidden="true">#</a> SpringBoot 知识图谱</h1><blockquote><ol><li>预警：本文非常长，建议先 mark 后看，也许是最后一次写这么长的文章</li><li>说明：前面有 4 个小节关于 Spring 的基础知识，分别是：IOC 容器、JavaConfig、事件监听、SpringFactoriesLoader 详解，它们占据了本文的大部分内容，虽然它们之间可能没有太多的联系，但这些知识对于理解 Spring Boot 的核心原理至关重要，如果你对 Spring 框架烂熟于心，完全可以跳过这 4 个小节。正是因为这个系列的文章是由这些看似不相关的知识点组成，因此取名知识清单。</li></ol></blockquote><p>在过去两三年的 Spring 生态圈，最让人兴奋的莫过于 Spring Boot 框架。或许从命名上就能看出这个框架的设计初衷：快速的启动 Spring 应用。因而 Spring Boot 应用本质上就是一个基于 Spring 框架的应用，它是 Spring 对“约定优先于配置”理念的最佳实践产物，它能够帮助开发者更快速高效地构建基于 Spring 生态圈的应用。</p><p>那 Spring Boot 有何魔法？<strong>自动配置</strong>、<strong>起步依赖</strong>、<strong>Actuator</strong>、<strong>命令行界面(CLI)</strong> 是 Spring Boot 最重要的 4 大核心特性，其中 CLI 是 Spring Boot 的可选特性，虽然它功能强大，但也引入了一套不太常规的开发模型，因而这个系列的文章仅关注其它 3 种特性。如文章标题，本文是这个系列的第一部分，将为你打开 Spring Boot 的大门，重点为你剖析其启动流程以及自动配置实现原理。要掌握这部分核心内容，理解一些 Spring 框架的基础知识，将会让你事半功倍。</p><h2 id="一、抛砖引玉-探索-spring-ioc-容器" tabindex="-1"><a class="header-anchor" href="#一、抛砖引玉-探索-spring-ioc-容器" aria-hidden="true">#</a> 一、抛砖引玉：探索 Spring IoC 容器</h2><p>如果有看过<code>SpringApplication.run()</code>方法的源码，Spring Boot 冗长无比的启动流程一定会让你抓狂，透过现象看本质，SpringApplication 只是将一个典型的 Spring 应用的启动流程进行了扩展，因此，透彻理解 Spring 容器是打开 Spring Boot 大门的一把钥匙。</p><h3 id="_1-1、spring-ioc-容器" tabindex="-1"><a class="header-anchor" href="#_1-1、spring-ioc-容器" aria-hidden="true">#</a> 1.1、Spring IoC 容器</h3><p>可以把 Spring IoC 容器比作一间餐馆，当你来到餐馆，通常会直接招呼服务员：点菜！至于菜的原料是什么？如何用原料把菜做出来？可能你根本就不关心。IoC 容器也是一样，你只需要告诉它需要某个 bean，它就把对应的实例（instance）扔给你，至于这个 bean 是否依赖其他组件，怎样完成它的初始化，根本就不需要你关心。</p><p>作为餐馆，想要做出菜肴，得知道菜的原料和菜谱，同样地，IoC 容器想要管理各个业务对象以及它们之间的依赖关系，需要通过某种途径来记录和管理这些信息。<code>BeanDefinition</code>对象就承担了这个责任：容器中的每一个 bean 都会有一个对应的 BeanDefinition 实例，该实例负责保存 bean 对象的所有必要信息，包括 bean 对象的 class 类型、是否是抽象类、构造方法和参数、其它属性等等。当客户端向容器请求相应对象时，容器就会通过这些信息为客户端返回一个完整可用的 bean 实例。</p><p>原材料已经准备好（把 BeanDefinition 看着原料），开始做菜吧，等等，你还需要一份菜谱，<code>BeanDefinitionRegistry</code>和<code>BeanFactory</code>就是这份菜谱，BeanDefinitionRegistry 抽象出 bean 的注册逻辑，而 BeanFactory 则抽象出了 bean 的管理逻辑，而各个 BeanFactory 的实现类就具体承担了 bean 的注册以及管理工作。它们之间的关系就如下图：</p><p><img src="https://user-gold-cdn.xitu.io/2018/9/9/165bd49d06649b0b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="img" loading="lazy"> <em>BeanFactory、BeanDefinitionRegistry 关系图（来自：Spring 揭秘）</em></p><p><code>DefaultListableBeanFactory</code>作为一个比较通用的 BeanFactory 实现，它同时也实现了 BeanDefinitionRegistry 接口，因此它就承担了 Bean 的注册管理工作。从图中也可以看出，BeanFactory 接口中主要包含 getBean、containBean、getType、getAliases 等管理 bean 的方法，而 BeanDefinitionRegistry 接口则包含 registerBeanDefinition、removeBeanDefinition、getBeanDefinition 等注册管理 BeanDefinition 的方法。</p><p>下面通过一段简单的代码来模拟 BeanFactory 底层是如何工作的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 默认容器实现
DefaultListableBeanFactory beanRegistry = new DefaultListableBeanFactory();
// 根据业务对象构造相应的BeanDefinition
AbstractBeanDefinition definition = new RootBeanDefinition(Business.class,true);
// 将bean定义注册到容器中
beanRegistry.registerBeanDefinition(&quot;beanName&quot;,definition);
// 如果有多个bean，还可以指定各个bean之间的依赖关系
// ........

// 然后可以从容器中获取这个bean的实例
// 注意：这里的beanRegistry其实实现了BeanFactory接口，所以可以强转，
// 单纯的BeanDefinitionRegistry是无法强制转换到BeanFactory类型的
BeanFactory container = (BeanFactory)beanRegistry;
Business business = (Business)container.getBean(&quot;beanName&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码仅为了说明 BeanFactory 底层的大致工作流程，实际情况会更加复杂，比如 bean 之间的依赖关系可能定义在外部配置文件(XML/Properties)中、也可能是注解方式。Spring IoC 容器的整个工作流程大致可以分为两个阶段：</p><p>①、容器启动阶段</p><p>容器启动时，会通过某种途径加载<code>Configuration MetaData</code>。除了代码方式比较直接外，在大部分情况下，容器需要依赖某些工具类，比如：<code>BeanDefinitionReader</code>，BeanDefinitionReader 会对加载的<code>Configuration MetaData</code>进行解析和分析，并将分析后的信息组装为相应的 BeanDefinition，最后把这些保存了 bean 定义的 BeanDefinition，注册到相应的 BeanDefinitionRegistry，这样容器的启动工作就完成了。这个阶段主要完成一些准备性工作，更侧重于 bean 对象管理信息的收集，当然一些验证性或者辅助性的工作也在这一阶段完成。</p><p>来看一个简单的例子吧，过往，所有的 bean 都定义在 XML 配置文件中，下面的代码将模拟 BeanFactory 如何从配置文件中加载 bean 的定义以及依赖关系：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 通常为BeanDefinitionRegistry的实现类，这里以DeFaultListabeBeanFactory为例
BeanDefinitionRegistry beanRegistry = new DefaultListableBeanFactory();
// XmlBeanDefinitionReader实现了BeanDefinitionReader接口，用于解析XML文件
XmlBeanDefinitionReader beanDefinitionReader = new XmlBeanDefinitionReaderImpl(beanRegistry);
// 加载配置文件
beanDefinitionReader.loadBeanDefinitions(&quot;classpath:spring-bean.xml&quot;);

// 从容器中获取bean实例
BeanFactory container = (BeanFactory)beanRegistry;
Business business = (Business)container.getBean(&quot;beanName&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>②、Bean 的实例化阶段</p><p>经过第一阶段，所有 bean 定义都通过 BeanDefinition 的方式注册到 BeanDefinitionRegistry 中，当某个请求通过容器的 getBean 方法请求某个对象，或者因为依赖关系容器需要隐式的调用 getBean 时，就会触发第二阶段的活动：容器会首先检查所请求的对象之前是否已经实例化完成。如果没有，则会根据注册的 BeanDefinition 所提供的信息实例化被请求对象，并为其注入依赖。当该对象装配完毕后，容器会立即将其返回给请求方法使用。</p><p>BeanFactory 只是 Spring IoC 容器的一种实现，如果没有特殊指定，它采用采用延迟初始化策略：只有当访问容器中的某个对象时，才对该对象进行初始化和依赖注入操作。而在实际场景下，我们更多的使用另外一种类型的容器：<code>ApplicationContext</code>，它构建在 BeanFactory 之上，属于更高级的容器，除了具有 BeanFactory 的所有能力之外，还提供对事件监听机制以及国际化的支持等。它管理的 bean，在容器启动时全部完成初始化和依赖注入操作。</p><h3 id="_1-2、spring-容器扩展机制" tabindex="-1"><a class="header-anchor" href="#_1-2、spring-容器扩展机制" aria-hidden="true">#</a> 1.2、Spring 容器扩展机制</h3><p>IoC 容器负责管理容器中所有 bean 的生命周期，而在 bean 生命周期的不同阶段，Spring 提供了不同的扩展点来改变 bean 的命运。在容器的启动阶段，<code>BeanFactoryPostProcessor</code>允许我们在容器实例化相应对象之前，对注册到容器的 BeanDefinition 所保存的信息做一些额外的操作，比如修改 bean 定义的某些属性或者增加其他信息等。</p><p>如果要自定义扩展类，通常需要实现<code>org.springframework.beans.factory.config.BeanFactoryPostProcessor</code>接口，与此同时，因为容器中可能有多个 BeanFactoryPostProcessor，可能还需要实现<code>org.springframework.core.Ordered</code>接口，以保证 BeanFactoryPostProcessor 按照顺序执行。Spring 提供了为数不多的 BeanFactoryPostProcessor 实现，我们以<code>PropertyPlaceholderConfigurer</code>来说明其大致的工作流程。</p><p>在 Spring 项目的 XML 配置文件中，经常可以看到许多配置项的值使用占位符，而将占位符所代表的值单独配置到独立的 properties 文件，这样可以将散落在不同 XML 文件中的配置集中管理，而且也方便运维根据不同的环境进行配置不同的值。这个非常实用的功能就是由 PropertyPlaceholderConfigurer 负责实现的。</p><p>根据前文，当 BeanFactory 在第一阶段加载完所有配置信息时，BeanFactory 中保存的对象的属性还是以占位符方式存在的，比如<code>\${jdbc.mysql.url}</code>。当 PropertyPlaceholderConfigurer 作为 BeanFactoryPostProcessor 被应用时，它会使用 properties 配置文件中的值来替换相应的 BeanDefinition 中占位符所表示的属性值。当需要实例化 bean 时，bean 定义中的属性值就已经被替换成我们配置的值。当然其实现比上面描述的要复杂一些，这里仅说明其大致工作原理，更详细的实现可以参考其源码。</p><p>与之相似的，还有<code>BeanPostProcessor</code>，其存在于对象实例化阶段。跟 BeanFactoryPostProcessor 类似，它会处理容器内所有符合条件并且已经实例化后的对象。简单的对比，BeanFactoryPostProcessor 处理 bean 的定义，而 BeanPostProcessor 则处理 bean 完成实例化后的对象。BeanPostProcessor 定义了两个接口：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface BeanPostProcessor {
    // 前置处理
    Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException;
    // 后置处理
    Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了理解这两个方法执行的时机，简单的了解下 bean 的整个生命周期：</p><p><code>postProcessBeforeInitialization()</code>方法与<code>postProcessAfterInitialization()</code>分别对应图中前置处理和后置处理两个步骤将执行的方法。这两个方法中都传入了 bean 对象实例的引用，为扩展容器的对象实例化过程提供了很大便利，在这儿几乎可以对传入的实例执行任何操作。注解、AOP 等功能的实现均大量使用了<code>BeanPostProcessor</code>，比如有一个自定义注解，你完全可以实现 BeanPostProcessor 的接口，在其中判断 bean 对象的脑袋上是否有该注解，如果有，你可以对这个 bean 实例执行任何操作，想想是不是非常的简单？</p><p>再来看一个更常见的例子，在 Spring 中经常能够看到各种各样的 Aware 接口，其作用就是在对象实例化完成以后将 Aware 接口定义中规定的依赖注入到当前实例中。比如最常见的<code>ApplicationContextAware</code>接口，实现了这个接口的类都可以获取到一个 ApplicationContext 对象。当容器中每个对象的实例化过程走到 BeanPostProcessor 前置处理这一步时，容器会检测到之前注册到容器的 ApplicationContextAwareProcessor，然后就会调用其 postProcessBeforeInitialization()方法，检查并设置 Aware 相关依赖。看看代码吧，是不是很简单：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 代码来自：org.springframework.context.support.ApplicationContextAwareProcessor
// 其postProcessBeforeInitialization方法调用了invokeAwareInterfaces方法
private void invokeAwareInterfaces(Object bean) {
    if (bean instanceof EnvironmentAware) {
        ((EnvironmentAware) bean).setEnvironment(this.applicationContext.getEnvironment());
    }
    if (bean instanceof ApplicationContextAware) {
        ((ApplicationContextAware) bean).setApplicationContext(this.applicationContext);
    }
    // ......
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后总结一下，本小节内容和你一起回顾了 Spring 容器的部分核心内容，限于篇幅不能写更多，但理解这部分内容，足以让您轻松理解 Spring Boot 的启动原理，如果在后续的学习过程中遇到一些晦涩难懂的知识，再回过头来看看 Spring 的核心知识，也许有意想不到的效果。也许 Spring Boot 的中文资料很少，但 Spring 的中文资料和书籍有太多太多，总有东西能给你启发。</p><h2 id="二、夯实基础-javaconfig-与常见-annotation" tabindex="-1"><a class="header-anchor" href="#二、夯实基础-javaconfig-与常见-annotation" aria-hidden="true">#</a> 二、夯实基础：JavaConfig 与常见 Annotation</h2><h3 id="_2-1、javaconfig" tabindex="-1"><a class="header-anchor" href="#_2-1、javaconfig" aria-hidden="true">#</a> 2.1、JavaConfig</h3><p>我们知道<code>bean</code>是 Spring IOC 中非常核心的概念，Spring 容器负责 bean 的生命周期的管理。在最初，Spring 使用 XML 配置文件的方式来描述 bean 的定义以及相互间的依赖关系，但随着 Spring 的发展，越来越多的人对这种方式表示不满，因为 Spring 项目的所有业务类均以 bean 的形式配置在 XML 文件中，造成了大量的 XML 文件，使项目变得复杂且难以管理。</p><p>后来，基于纯 Java Annotation 依赖注入框架<code>Guice</code>出世，其性能明显优于采用 XML 方式的 Spring，甚至有部分人认为，<code>Guice</code>可以完全取代 Spring（<code>Guice</code>仅是一个轻量级 IOC 框架，取代 Spring 还差的挺远）。正是这样的危机感，促使 Spring 及社区推出并持续完善了<code>JavaConfig</code>子项目，它基于 Java 代码和 Annotation 注解来描述 bean 之间的依赖绑定关系。比如，下面是使用 XML 配置方式来描述 bean 的定义：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;bean id=&quot;bookService&quot; class=&quot;cn.moondev.service.BookServiceImpl&quot;&gt;&lt;/bean&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>而基于 JavaConfig 的配置形式是这样的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Configuration
public class MoonBookConfiguration {

    // 任何标志了@Bean的方法，其返回值将作为一个bean注册到Spring的IOC容器中
    // 方法名默认成为该bean定义的id
    @Bean
    public BookService bookService() {
        return new BookServiceImpl();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果两个 bean 之间有依赖关系的话，在 XML 配置中应该是这样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;bean id=&quot;bookService&quot; class=&quot;cn.moondev.service.BookServiceImpl&quot;&gt;
    &lt;property name=&quot;dependencyService&quot; ref=&quot;dependencyService&quot;/&gt;
&lt;/bean&gt;

&lt;bean id=&quot;otherService&quot; class=&quot;cn.moondev.service.OtherServiceImpl&quot;&gt;
    &lt;property name=&quot;dependencyService&quot; ref=&quot;dependencyService&quot;/&gt;
&lt;/bean&gt;

&lt;bean id=&quot;dependencyService&quot; class=&quot;DependencyServiceImpl&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而在 JavaConfig 中则是这样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Configuration
public class MoonBookConfiguration {

    // 如果一个bean依赖另一个bean，则直接调用对应JavaConfig类中依赖bean的创建方法即可
    // 这里直接调用dependencyService()
    @Bean
    public BookService bookService() {
        return new BookServiceImpl(dependencyService());
    }

    @Bean
    public OtherService otherService() {
        return new OtherServiceImpl(dependencyService());
    }

    @Bean
    public DependencyService dependencyService() {
        return new DependencyServiceImpl();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可能注意到这个示例中，有两个 bean 都依赖于 dependencyService，也就是说当初始化 bookService 时会调用<code>dependencyService()</code>，在初始化 otherService 时也会调用<code>dependencyService()</code>，那么问题来了？这时候 IOC 容器中是有一个 dependencyService 实例还是两个？这个问题留着大家思考吧，这里不再赘述。</p><h3 id="_2-2、-componentscan" tabindex="-1"><a class="header-anchor" href="#_2-2、-componentscan" aria-hidden="true">#</a> 2.2、@ComponentScan</h3><p><code>@ComponentScan</code>注解对应 XML 配置形式中的\`\`元素，表示启用组件扫描，Spring 会自动扫描所有通过注解配置的 bean，然后将其注册到 IOC 容器中。我们可以通过<code>basePackages</code>等属性来指定<code>@ComponentScan</code>自动扫描的范围，如果不指定，默认从声明<code>@ComponentScan</code>所在类的<code>package</code>进行扫描。正因为如此，SpringBoot 的启动类都默认在<code>src/main/java</code>下。</p><h3 id="_2-3、-import" tabindex="-1"><a class="header-anchor" href="#_2-3、-import" aria-hidden="true">#</a> 2.3、@Import</h3><p><code>@Import</code>注解用于导入配置类，举个简单的例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Configuration
public class MoonBookConfiguration {
    @Bean
    public BookService bookService() {
        return new BookServiceImpl();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在有另外一个配置类，比如：<code>MoonUserConfiguration</code>，这个配置类中有一个 bean 依赖于<code>MoonBookConfiguration</code>中的 bookService，如何将这两个 bean 组合在一起？借助<code>@Import</code>即可：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Configuration
// 可以同时导入多个配置类，比如：@Import({A.class,B.class})
@Import(MoonBookConfiguration.class)
public class MoonUserConfiguration {
    @Bean
    public UserService userService(BookService bookService) {
        return new BookServiceImpl(bookService);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，在 4.2 之前，<code>@Import</code>注解只支持导入配置类，但是在 4.2 之后，它支持导入普通类，并将这个类作为一个 bean 的定义注册到 IOC 容器中。</p><h3 id="_2-4、-conditional" tabindex="-1"><a class="header-anchor" href="#_2-4、-conditional" aria-hidden="true">#</a> 2.4、@Conditional</h3><p><code>@Conditional</code>注解表示在满足某种条件后才初始化一个 bean 或者启用某些配置。它一般用在由<code>@Component</code>、<code>@Service</code>、<code>@Configuration</code>等注解标识的类上面，或者由<code>@Bean</code>标记的方法上。如果一个<code>@Configuration</code>类标记了<code>@Conditional</code>，则该类中所有标识了<code>@Bean</code>的方法和<code>@Import</code>注解导入的相关类将遵从这些条件。</p><p>在 Spring 里可以很方便的编写你自己的条件类，所要做的就是实现<code>Condition</code>接口，并覆盖它的<code>matches()</code>方法。举个例子，下面的简单条件类表示只有在<code>Classpath</code>里存在<code>JdbcTemplate</code>类时才生效：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class JdbcTemplateCondition implements Condition {

    @Override
    public boolean matches(ConditionContext conditionContext, AnnotatedTypeMetadata annotatedTypeMetadata) {
        try {
        conditionContext.getClassLoader().loadClass(&quot;org.springframework.jdbc.core.JdbcTemplate&quot;);
            return true;
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return false;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当你用 Java 来声明 bean 的时候，可以使用这个自定义条件类：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Conditional(JdbcTemplateCondition.class)
@Service
public MyService service() {
    ......
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子中只有当<code>JdbcTemplateCondition</code>类的条件成立时才会创建 MyService 这个 bean。也就是说 MyService 这 bean 的创建条件是<code>classpath</code>里面包含<code>JdbcTemplate</code>，否则这个 bean 的声明就会被忽略掉。</p><p><code>Spring Boot</code>定义了很多有趣的条件，并把他们运用到了配置类上，这些配置类构成了<code>Spring Boot</code>的自动配置的基础。<code>Spring Boot</code>运用条件化配置的方法是：定义多个特殊的条件化注解，并将它们用到配置类上。下面列出了<code>Spring Boot</code>提供的部分条件化注解：</p><table><thead><tr><th>条件化注解</th><th>配置生效条件</th></tr></thead><tbody><tr><td>@ConditionalOnBean</td><td>配置了某个特定 bean</td></tr><tr><td>@ConditionalOnMissingBean</td><td>没有配置特定的 bean</td></tr><tr><td>@ConditionalOnClass</td><td>Classpath 里有指定的类</td></tr><tr><td>@ConditionalOnMissingClass</td><td>Classpath 里没有指定的类</td></tr><tr><td>@ConditionalOnExpression</td><td>给定的 Spring Expression Language 表达式计算结果为 true</td></tr><tr><td>@ConditionalOnJava</td><td>Java 的版本匹配特定指或者一个范围值</td></tr><tr><td>@ConditionalOnProperty</td><td>指定的配置属性要有一个明确的值</td></tr><tr><td>@ConditionalOnResource</td><td>Classpath 里有指定的资源</td></tr><tr><td>@ConditionalOnWebApplication</td><td>这是一个 Web 应用程序</td></tr><tr><td>@ConditionalOnNotWebApplication</td><td>这不是一个 Web 应用程序</td></tr></tbody></table><h3 id="_2-5、-configurationproperties-与-enableconfigurationproperties" tabindex="-1"><a class="header-anchor" href="#_2-5、-configurationproperties-与-enableconfigurationproperties" aria-hidden="true">#</a> 2.5、@ConfigurationProperties 与@EnableConfigurationProperties</h3><p>当某些属性的值需要配置的时候，我们一般会在<code>application.properties</code>文件中新建配置项，然后在 bean 中使用<code>@Value</code>注解来获取配置的值，比如下面配置数据源的代码。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// jdbc config
jdbc.mysql.url=jdbc:mysql://localhost:3306/sampledb
jdbc.mysql.username=root
jdbc.mysql.password=123456
......

// 配置数据源
@Configuration
public class HikariDataSourceConfiguration {

    @Value(&quot;jdbc.mysql.url&quot;)
    public String url;
    @Value(&quot;jdbc.mysql.username&quot;)
    public String user;
    @Value(&quot;jdbc.mysql.password&quot;)
    public String password;

    @Bean
    public HikariDataSource dataSource() {
        HikariConfig hikariConfig = new HikariConfig();
        hikariConfig.setJdbcUrl(url);
        hikariConfig.setUsername(user);
        hikariConfig.setPassword(password);
        // 省略部分代码
        return new HikariDataSource(hikariConfig);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>@Value</code>注解注入的属性通常都比较简单，如果同一个配置在多个地方使用，也存在不方便维护的问题（考虑下，如果有几十个地方在使用某个配置，而现在你想改下名字，你改怎么做？）。对于更为复杂的配置，Spring Boot 提供了更优雅的实现方式，那就是<code>@ConfigurationProperties</code>注解。我们可以通过下面的方式来改写上面的代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Component
//  还可以通过@PropertySource(&quot;classpath:jdbc.properties&quot;)来指定配置文件
@ConfigurationProperties(&quot;jdbc.mysql&quot;)
// 前缀=jdbc.mysql，会在配置文件中寻找jdbc.mysql.*的配置项
pulic class JdbcConfig {
    public String url;
    public String username;
    public String password;
}

@Configuration
public class HikariDataSourceConfiguration {

    @AutoWired
    public JdbcConfig config;

    @Bean
    public HikariDataSource dataSource() {
        HikariConfig hikariConfig = new HikariConfig();
        hikariConfig.setJdbcUrl(config.url);
        hikariConfig.setUsername(config.username);
        hikariConfig.setPassword(config.password);
        // 省略部分代码
        return new HikariDataSource(hikariConfig);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@ConfigurationProperties</code>对于更为复杂的配置，处理起来也是得心应手，比如有如下配置文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#App
app.menus[0].title=Home
app.menus[0].name=Home
app.menus[0].path=/
app.menus[1].title=Login
app.menus[1].name=Login
app.menus[1].path=/login

app.compiler.timeout=5
app.compiler.output-folder=/temp/

app.error=/error/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以定义如下配置类来接收这些属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Component
@ConfigurationProperties(&quot;app&quot;)
public class AppProperties {

    public String error;
    public List&lt;Menu&gt; menus = new ArrayList&lt;&gt;();
    public Compiler compiler = new Compiler();

    public static class Menu {
        public String name;
        public String path;
        public String title;
    }

    public static class Compiler {
        public String timeout;
        public String outputFolder;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@EnableConfigurationProperties</code>注解表示对<code>@ConfigurationProperties</code>的内嵌支持，默认会将对应 Properties Class 作为 bean 注入的 IOC 容器中，即在相应的 Properties 类上不用加<code>@Component</code>注解。</p><h2 id="三、削铁如泥-springfactoriesloader-详解" tabindex="-1"><a class="header-anchor" href="#三、削铁如泥-springfactoriesloader-详解" aria-hidden="true">#</a> 三、削铁如泥：SpringFactoriesLoader 详解</h2><p>JVM 提供了 3 种类加载器：<code>BootstrapClassLoader</code>、<code>ExtClassLoader</code>、<code>AppClassLoader</code>分别加载 Java 核心类库、扩展类库以及应用的类路径(<code>CLASSPATH</code>)下的类库。JVM 通过双亲委派模型进行类的加载，我们也可以通过继承<code>java.lang.classloader</code>实现自己的类加载器。</p><p>何为双亲委派模型？当一个类加载器收到类加载任务时，会先交给自己的父加载器去完成，因此最终加载任务都会传递到最顶层的 BootstrapClassLoader，只有当父加载器无法完成加载任务时，才会尝试自己来加载。</p><p>采用双亲委派模型的一个好处是保证使用不同类加载器最终得到的都是同一个对象，这样就可以保证 Java 核心库的类型安全，比如，加载位于 rt.jar 包中的<code>java.lang.Object</code>类，不管是哪个加载器加载这个类，最终都是委托给顶层的 BootstrapClassLoader 来加载的，这样就可以保证任何的类加载器最终得到的都是同样一个 Object 对象。查看 ClassLoader 的源码，对双亲委派模型会有更直观的认识：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>protected Class&lt;?&gt; loadClass(String name, boolean resolve) {
    synchronized (getClassLoadingLock(name)) {
    // 首先，检查该类是否已经被加载，如果从JVM缓存中找到该类，则直接返回
    Class&lt;?&gt; c = findLoadedClass(name);
    if (c == null) {
        try {
            // 遵循双亲委派的模型，首先会通过递归从父加载器开始找，
            // 直到父类加载器是BootstrapClassLoader为止
            if (parent != null) {
                c = parent.loadClass(name, false);
            } else {
                c = findBootstrapClassOrNull(name);
            }
        } catch (ClassNotFoundException e) {}
        if (c == null) {
            // 如果还找不到，尝试通过findClass方法去寻找
            // findClass是留给开发者自己实现的，也就是说
            // 自定义类加载器时，重写此方法即可
           c = findClass(name);
        }
    }
    if (resolve) {
        resolveClass(c);
    }
    return c;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但双亲委派模型并不能解决所有的类加载器问题，比如，Java 提供了很多服务提供者接口(<code>Service Provider Interface</code>，SPI)，允许第三方为这些接口提供实现。常见的 SPI 有 JDBC、JNDI、JAXP 等，这些 SPI 的接口由核心类库提供，却由第三方实现，这样就存在一个问题：SPI 的接口是 Java 核心库的一部分，是由 BootstrapClassLoader 加载的；SPI 实现的 Java 类一般是由 AppClassLoader 来加载的。BootstrapClassLoader 是无法找到 SPI 的实现类的，因为它只加载 Java 的核心库。它也不能代理给 AppClassLoader，因为它是最顶层的类加载器。也就是说，双亲委派模型并不能解决这个问题。</p><p>线程上下文类加载器(<code>ContextClassLoader</code>)正好解决了这个问题。从名称上看，可能会误解为它是一种新的类加载器，实际上，它仅仅是 Thread 类的一个变量而已，可以通过<code>setContextClassLoader(ClassLoader cl)</code>和<code>getContextClassLoader()</code>来设置和获取该对象。如果不做任何的设置，Java 应用的线程的上下文类加载器默认就是 AppClassLoader。在核心类库使用 SPI 接口时，传递的类加载器使用线程上下文类加载器，就可以成功的加载到 SPI 实现的类。线程上下文类加载器在很多 SPI 的实现中都会用到。但在 JDBC 中，你可能会看到一种更直接的实现方式，比如，JDBC 驱动管理<code>java.sql.Driver</code>中的<code>loadInitialDrivers()</code>方法中，你可以直接看到 JDK 是如何加载驱动的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for (String aDriver : driversList) {
    try {
        // 直接使用AppClassLoader
        Class.forName(aDriver, true, ClassLoader.getSystemClassLoader());
    } catch (Exception ex) {
        println(&quot;DriverManager.Initialize: load failed: &quot; + ex);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实讲解线程上下文类加载器，最主要是让大家在看到<code>Thread.currentThread().getClassLoader()</code>和<code>Thread.currentThread().getContextClassLoader()</code>时不会一脸懵逼，这两者除了在许多底层框架中取得的 ClassLoader 可能会有所不同外，其他大多数业务场景下都是一样的，大家只要知道它是为了解决什么问题而存在的即可。</p><p>类加载器除了加载 class 外，还有一个非常重要功能，就是加载资源，它可以从 jar 包中读取任何资源文件，比如，<code>ClassLoader.getResources(String name)</code>方法就是用于读取 jar 包中的资源文件，其代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public Enumeration&lt;URL&gt; getResources(String name) throws IOException {
    Enumeration&lt;URL&gt;[] tmp = (Enumeration&lt;URL&gt;[]) new Enumeration&lt;?&gt;[2];
    if (parent != null) {
        tmp[0] = parent.getResources(name);
    } else {
        tmp[0] = getBootstrapResources(name);
    }
    tmp[1] = findResources(name);
    return new CompoundEnumeration&lt;&gt;(tmp);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是不是觉得有点眼熟，不错，它的逻辑其实跟类加载的逻辑是一样的，首先判断父类加载器是否为空，不为空则委托父类加载器执行资源查找任务，直到 BootstrapClassLoader，最后才轮到自己查找。而不同的类加载器负责扫描不同路径下的 jar 包，就如同加载 class 一样，最后会扫描所有的 jar 包，找到符合条件的资源文件。</p><p>类加载器的<code>findResources(name)</code>方法会遍历其负责加载的所有 jar 包，找到 jar 包中名称为 name 的资源文件，这里的资源可以是任何文件，甚至是.class 文件，比如下面的示例，用于查找 Array.class 文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 寻找Array.class文件
public static void main(String[] args) throws Exception{
    // Array.class的完整路径
    String name = &quot;java/sql/Array.class&quot;;
    Enumeration&lt;URL&gt; urls = Thread.currentThread().getContextClassLoader().getResources(name);
    while (urls.hasMoreElements()) {
        URL url = urls.nextElement();
        System.out.println(url.toString());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行后可以得到如下结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$JAVA_HOME/jre/lib/rt.jar!/java/sql/Array.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根据资源文件的 URL，可以构造相应的文件来读取资源内容。</p><p>看到这里，你可能会感到挺奇怪的，你不是要详解<code>SpringFactoriesLoader</code>吗？上来讲了一堆 ClassLoader 是几个意思？看下它的源码你就知道了：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public static final String FACTORIES_RESOURCE_LOCATION = &quot;META-INF/spring.factories&quot;;
// spring.factories文件的格式为：key=value1,value2,value3
// 从所有的jar包中找到META-INF/spring.factories文件
// 然后从文件中解析出key=factoryClass类名称的所有value值
public static List&lt;String&gt; loadFactoryNames(Class&lt;?&gt; factoryClass, ClassLoader classLoader) {
    String factoryClassName = factoryClass.getName();
    // 取得资源文件的URL
    Enumeration&lt;URL&gt; urls = (classLoader != null ? classLoader.getResources(FACTORIES_RESOURCE_LOCATION) : ClassLoader.getSystemResources(FACTORIES_RESOURCE_LOCATION));
    List&lt;String&gt; result = new ArrayList&lt;String&gt;();
    // 遍历所有的URL
    while (urls.hasMoreElements()) {
        URL url = urls.nextElement();
        // 根据资源文件URL解析properties文件
        Properties properties = PropertiesLoaderUtils.loadProperties(new UrlResource(url));
        String factoryClassNames = properties.getProperty(factoryClassName);
        // 组装数据，并返回
        result.addAll(Arrays.asList(StringUtils.commaDelimitedListToStringArray(factoryClassNames)));
    }
    return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有了前面关于 ClassLoader 的知识，再来理解这段代码，是不是感觉豁然开朗：从<code>CLASSPATH</code>下的每个 Jar 包中搜寻所有<code>META-INF/spring.factories</code>配置文件，然后将解析 properties 文件，找到指定名称的配置后返回。需要注意的是，其实这里不仅仅是会去 ClassPath 路径下查找，会扫描所有路径下的 Jar 包，只不过这个文件只会在 Classpath 下的 jar 包中。来简单看下<code>spring.factories</code>文件的内容吧：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 来自 org.springframework.boot.autoconfigure下的META-INF/spring.factories
// EnableAutoConfiguration后文会讲到，它用于开启Spring Boot自动配置功能
org.springframework.boot.autoconfigure.EnableAutoConfiguration=\\
org.springframework.boot.autoconfigure.admin.SpringApplicationAdminJmxAutoConfiguration,\\
org.springframework.boot.autoconfigure.aop.AopAutoConfiguration,\\
org.springframework.boot.autoconfigure.amqp.RabbitAutoConfiguration\\
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行<code>loadFactoryNames(EnableAutoConfiguration.class, classLoader)</code>后，得到对应的一组<code>@Configuration</code>类，<br> 我们就可以通过反射实例化这些类然后注入到 IOC 容器中，最后容器里就有了一系列标注了<code>@Configuration</code>的 JavaConfig 形式的配置类。</p><p>这就是<code>SpringFactoriesLoader</code>，它本质上属于 Spring 框架私有的一种扩展方案，类似于 SPI，Spring Boot 在 Spring 基础上的很多核心功能都是基于此，希望大家可以理解。</p><h2 id="四、另一件武器-spring-容器的事件监听机制" tabindex="-1"><a class="header-anchor" href="#四、另一件武器-spring-容器的事件监听机制" aria-hidden="true">#</a> 四、另一件武器：Spring 容器的事件监听机制</h2><p>过去，事件监听机制多用于图形界面编程，比如：<strong>点击</strong>按钮、在文本框<strong>输入</strong>内容等操作被称为事件，而当事件触发时，应用程序作出一定的响应则表示应用监听了这个事件，而在服务器端，事件的监听机制更多的用于异步通知以及监控和异常处理。Java 提供了实现事件监听机制的两个基础类：自定义事件类型扩展自<code>java.util.EventObject</code>、事件的监听器扩展自<code>java.util.EventListener</code>。来看一个简单的实例：简单的监控一个方法的耗时。</p><p>首先定义事件类型，通常的做法是扩展 EventObject，随着事件的发生，相应的状态通常都封装在此类中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class MethodMonitorEvent extends EventObject {
    // 时间戳，用于记录方法开始执行的时间
    public long timestamp;

    public MethodMonitorEvent(Object source) {
        super(source);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事件发布之后，相应的监听器即可对该类型的事件进行处理，我们可以在方法开始执行之前发布一个 begin 事件，在方法执行结束之后发布一个 end 事件，相应地，事件监听器需要提供方法对这两种情况下接收到的事件进行处理：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1、定义事件监听接口
public interface MethodMonitorEventListener extends EventListener {
    // 处理方法执行之前发布的事件
    public void onMethodBegin(MethodMonitorEvent event);
    // 处理方法结束时发布的事件
    public void onMethodEnd(MethodMonitorEvent event);
}
// 2、事件监听接口的实现：如何处理
public class AbstractMethodMonitorEventListener implements MethodMonitorEventListener {

    @Override
    public void onMethodBegin(MethodMonitorEvent event) {
        // 记录方法开始执行时的时间
        event.timestamp = System.currentTimeMillis();
    }

    @Override
    public void onMethodEnd(MethodMonitorEvent event) {
        // 计算方法耗时
        long duration = System.currentTimeMillis() - event.timestamp;
        System.out.println(&quot;耗时：&quot; + duration);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事件监听器接口针对不同的事件发布实际提供相应的处理方法定义，最重要的是，其方法只接收 MethodMonitorEvent 参数，说明这个监听器类只负责监听器对应的事件并进行处理。有了事件和监听器，剩下的就是发布事件，然后让相应的监听器监听并处理。通常情况，我们会有一个事件发布者，它本身作为事件源，在合适的时机，将相应的事件发布给对应的事件监听器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class MethodMonitorEventPublisher {

    private List&lt;MethodMonitorEventListener&gt; listeners = new ArrayList&lt;MethodMonitorEventListener&gt;();

    public void methodMonitor() {
        MethodMonitorEvent eventObject = new MethodMonitorEvent(this);
        publishEvent(&quot;begin&quot;,eventObject);
        // 模拟方法执行：休眠5秒钟
        TimeUnit.SECONDS.sleep(5);
        publishEvent(&quot;end&quot;,eventObject);

    }

    private void publishEvent(String status,MethodMonitorEvent event) {
        // 避免在事件处理期间，监听器被移除，这里为了安全做一个复制操作
        List&lt;MethodMonitorEventListener&gt; copyListeners = ➥ new ArrayList&lt;MethodMonitorEventListener&gt;(listeners);
        for (MethodMonitorEventListener listener : copyListeners) {
            if (&quot;begin&quot;.equals(status)) {
                listener.onMethodBegin(event);
            } else {
                listener.onMethodEnd(event);
            }
        }
    }

    public static void main(String[] args) {
        MethodMonitorEventPublisher publisher = new MethodMonitorEventPublisher();
        publisher.addEventListener(new AbstractMethodMonitorEventListener());
        publisher.methodMonitor();
    }
    // 省略实现
    public void addEventListener(MethodMonitorEventListener listener) {}
    public void removeEventListener(MethodMonitorEventListener listener) {}
    public void removeAllListeners() {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于事件发布者（事件源）通常需要关注两点：</p><ol><li>在合适的时机发布事件。此例中的 methodMonitor()方法是事件发布的源头，其在方法执行之前和结束之后两个时间点发布 MethodMonitorEvent 事件，每个时间点发布的事件都会传给相应的监听器进行处理。在具体实现时需要注意的是，事件发布是顺序执行，为了不影响处理性能，事件监听器的处理逻辑应尽量简单。</li><li>事件监听器的管理。publisher 类中提供了事件监听器的注册与移除方法，这样客户端可以根据实际情况决定是否需要注册新的监听器或者移除某个监听器。如果这里没有提供 remove 方法，那么注册的监听器示例将一直被 MethodMonitorEventPublisher 引用，即使已经废弃不用了，也依然在发布者的监听器列表中，这会导致隐性的内存泄漏。</li></ol><h4 id="spring-容器内的事件监听机制" tabindex="-1"><a class="header-anchor" href="#spring-容器内的事件监听机制" aria-hidden="true">#</a> Spring 容器内的事件监听机制</h4><p>Spring 的 ApplicationContext 容器内部中的所有事件类型均继承自<code>org.springframework.context.ApplicationEvent</code>，容器中的所有监听器都实现<code>org.springframework.context.ApplicationListener</code>接口，并且以 bean 的形式注册在容器中。一旦在容器内发布 ApplicationEvent 及其子类型的事件，注册到容器的 ApplicationListener 就会对这些事件进行处理。</p><p>你应该已经猜到是怎么回事了。</p><p>ApplicationEvent 继承自 EventObject，Spring 提供了一些默认的实现，比如：<code>ContextClosedEvent</code>表示容器在即将关闭时发布的事件类型，<code>ContextRefreshedEvent</code>表示容器在初始化或者刷新的时候发布的事件类型......</p><p>容器内部使用 ApplicationListener 作为事件监听器接口定义，它继承自 EventListener。ApplicationContext 容器在启动时，会自动识别并加载 EventListener 类型的 bean，一旦容器内有事件发布，将通知这些注册到容器的 EventListener。</p><p>ApplicationContext 接口继承了 ApplicationEventPublisher 接口，该接口提供了<code>void publishEvent(ApplicationEvent event)</code>方法定义，不难看出，ApplicationContext 容器担当的就是事件发布者的角色。如果有兴趣可以查看<code>AbstractApplicationContext.publishEvent(ApplicationEvent event)</code>方法的源码：ApplicationContext 将事件的发布以及监听器的管理工作委托给<code>ApplicationEventMulticaster</code>接口的实现类。在容器启动时，会检查容器内是否存在名为 applicationEventMulticaster 的 ApplicationEventMulticaster 对象实例。如果有就使用其提供的实现，没有就默认初始化一个 SimpleApplicationEventMulticaster 作为实现。</p><p>最后，如果我们业务需要在容器内部发布事件，只需要为其注入 ApplicationEventPublisher 依赖即可：实现 ApplicationEventPublisherAware 接口或者 ApplicationContextAware 接口(Aware 接口相关内容请回顾上文)。</p><h2 id="五、出神入化-揭秘自动配置原理" tabindex="-1"><a class="header-anchor" href="#五、出神入化-揭秘自动配置原理" aria-hidden="true">#</a> 五、出神入化：揭秘自动配置原理</h2><p>典型的 Spring Boot 应用的启动类一般均位于<code>src/main/java</code>根路径下，比如<code>MoonApplication</code>类：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@SpringBootApplication
public class MoonApplication {

    public static void main(String[] args) {
        SpringApplication.run(MoonApplication.class, args);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中<code>@SpringBootApplication</code>开启组件扫描和自动配置，而<code>SpringApplication.run</code>则负责启动引导应用程序。<code>@SpringBootApplication</code>是一个复合<code>Annotation</code>，它将三个有用的注解组合在一起：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan(excludeFilters = {
        @Filter(type = FilterType.CUSTOM, classes = TypeExcludeFilter.class),
        @Filter(type = FilterType.CUSTOM, classes = AutoConfigurationExcludeFilter.class) })
public @interface SpringBootApplication {
    // ......
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@SpringBootConfiguration</code>就是<code>@Configuration</code>，它是 Spring 框架的注解，标明该类是一个<code>JavaConfig</code>配置类。而<code>@ComponentScan</code>启用组件扫描，前文已经详细讲解过，这里着重关注<code>@EnableAutoConfiguration</code>。</p><p><code>@EnableAutoConfiguration</code>注解表示开启 Spring Boot 自动配置功能，Spring Boot 会根据应用的依赖、自定义的 bean、classpath 下有没有某个类 等等因素来猜测你需要的 bean，然后注册到 IOC 容器中。那<code>@EnableAutoConfiguration</code>是如何推算出你的需求？首先看下它的定义：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@AutoConfigurationPackage
@Import(EnableAutoConfigurationImportSelector.class)
public @interface EnableAutoConfiguration {
    // ......
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你的关注点应该在<code>@Import(EnableAutoConfigurationImportSelector.class)</code>上了，前文说过，<code>@Import</code>注解用于导入类，并将这个类作为一个 bean 的定义注册到容器中，这里它将把<code>EnableAutoConfigurationImportSelector</code>作为 bean 注入到容器中，而这个类会将所有符合条件的@Configuration 配置都加载到容器中，看看它的代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public String[] selectImports(AnnotationMetadata annotationMetadata) {
    // 省略了大部分代码，保留一句核心代码
    // 注意：SpringBoot最近版本中，这句代码被封装在一个单独的方法中
    // SpringFactoriesLoader相关知识请参考前文
    List&lt;String&gt; factories = new ArrayList&lt;String&gt;(new LinkedHashSet&lt;String&gt;(
        SpringFactoriesLoader.loadFactoryNames(EnableAutoConfiguration.class, this.beanClassLoader)));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个类会扫描所有的 jar 包，将所有符合条件的@Configuration 配置类注入的容器中，何为符合条件，看看<code>META-INF/spring.factories</code>的文件内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 来自 org.springframework.boot.autoconfigure下的META-INF/spring.factories
// 配置的key = EnableAutoConfiguration，与代码中一致
org.springframework.boot.autoconfigure.EnableAutoConfiguration=\\
org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration,\\
org.springframework.boot.autoconfigure.aop.AopAutoConfiguration,\\
org.springframework.boot.autoconfigure.amqp.RabbitAutoConfiguration\\
.....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以<code>DataSourceAutoConfiguration</code>为例，看看 Spring Boot 是如何自动配置的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Configuration
@ConditionalOnClass({ DataSource.class, EmbeddedDatabaseType.class })
@EnableConfigurationProperties(DataSourceProperties.class)
@Import({ Registrar.class, DataSourcePoolMetadataProvidersConfiguration.class })
public class DataSourceAutoConfiguration {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分别说一说：</p><ul><li><code>@ConditionalOnClass({ DataSource.class, EmbeddedDatabaseType.class })</code>：当 Classpath 中存在 DataSource 或者 EmbeddedDatabaseType 类时才启用这个配置，否则这个配置将被忽略。</li><li><code>@EnableConfigurationProperties(DataSourceProperties.class)</code>：将 DataSource 的默认配置类注入到 IOC 容器中，DataSourceproperties 定义为：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 提供对datasource配置信息的支持，所有的配置前缀为：spring.datasource
@ConfigurationProperties(prefix = &quot;spring.datasource&quot;)
public class DataSourceProperties  {
    private ClassLoader classLoader;
    private Environment environment;
    private String name = &quot;testdb&quot;;
    ......
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>@Import({ Registrar.class, DataSourcePoolMetadataProvidersConfiguration.class })</code>：导入其他额外的配置，就以<code>DataSourcePoolMetadataProvidersConfiguration</code>为例吧。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Configuration
public class DataSourcePoolMetadataProvidersConfiguration {

    @Configuration
    @ConditionalOnClass(org.apache.tomcat.jdbc.pool.DataSource.class)
    static class TomcatDataSourcePoolMetadataProviderConfiguration {
        @Bean
        public DataSourcePoolMetadataProvider tomcatPoolDataSourceMetadataProvider() {
            .....
        }
    }
  ......
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DataSourcePoolMetadataProvidersConfiguration 是数据库连接池提供者的一个配置类，即 Classpath 中存在<code>org.apache.tomcat.jdbc.pool.DataSource.class</code>，则使用 tomcat-jdbc 连接池，如果 Classpath 中存在<code>HikariDataSource.class</code>则使用 Hikari 连接池。</p><p>这里仅描述了 DataSourceAutoConfiguration 的冰山一角，但足以说明 Spring Boot 如何利用条件话配置来实现自动配置的。回顾一下，<code>@EnableAutoConfiguration</code>中导入了 EnableAutoConfigurationImportSelector 类，而这个类的<code>selectImports()</code>通过 SpringFactoriesLoader 得到了大量的配置类，而每一个配置类则根据条件化配置来做出决策，以实现自动配置。</p><p>整个流程很清晰，但漏了一个大问题：<code>EnableAutoConfigurationImportSelector.selectImports()</code>是何时执行的？其实这个方法会在容器启动过程中执行：<code>AbstractApplicationContext.refresh()</code>，更多的细节在下一小节中说明。</p><h2 id="六、启动引导-spring-boot-应用启动的秘密" tabindex="-1"><a class="header-anchor" href="#六、启动引导-spring-boot-应用启动的秘密" aria-hidden="true">#</a> 六、启动引导：Spring Boot 应用启动的秘密</h2><h3 id="_6-1-springapplication-初始化" tabindex="-1"><a class="header-anchor" href="#_6-1-springapplication-初始化" aria-hidden="true">#</a> 6.1 SpringApplication 初始化</h3><p>SpringBoot 整个启动流程分为两个步骤：初始化一个 SpringApplication 对象、执行该对象的 run 方法。看下 SpringApplication 的初始化流程，SpringApplication 的构造方法中调用 initialize(Object[] sources)方法，其代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>private void initialize(Object[] sources) {
     if (sources != null &amp;&amp; sources.length &gt; 0) {
         this.sources.addAll(Arrays.asList(sources));
     }
     // 判断是否是Web项目
     this.webEnvironment = deduceWebEnvironment();
     setInitializers((Collection) getSpringFactoriesInstances(ApplicationContextInitializer.class));
     setListeners((Collection) getSpringFactoriesInstances(ApplicationListener.class));
     // 找到入口类
     this.mainApplicationClass = deduceMainApplicationClass();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化流程中最重要的就是通过 SpringFactoriesLoader 找到<code>spring.factories</code>文件中配置的<code>ApplicationContextInitializer</code>和<code>ApplicationListener</code>两个接口的实现类名称，以便后期构造相应的实例。<code>ApplicationContextInitializer</code>的主要目的是在<code>ConfigurableApplicationContext</code>做 refresh 之前，对 ConfigurableApplicationContext 实例做进一步的设置或处理。ConfigurableApplicationContext 继承自 ApplicationContext，其主要提供了对 ApplicationContext 进行设置的能力。</p><p>实现一个 ApplicationContextInitializer 非常简单，因为它只有一个方法，但大多数情况下我们没有必要自定义一个 ApplicationContextInitializer，即便是 Spring Boot 框架，它默认也只是注册了两个实现，毕竟 Spring 的容器已经非常成熟和稳定，你没有必要来改变它。</p><p>而<code>ApplicationListener</code>的目的就没什么好说的了，它是 Spring 框架对 Java 事件监听机制的一种框架实现，具体内容在前文 Spring 事件监听机制这个小节有详细讲解。这里主要说说，如果你想为 Spring Boot 应用添加监听器，该如何实现？</p><p>Spring Boot 提供两种方式来添加自定义监听器：</p><ul><li>通过<code>SpringApplication.addListeners(ApplicationListener... listeners)</code>或者<code>SpringApplication.setListeners(Collection&gt; listeners)</code>两个方法来添加一个或者多个自定义监听器</li><li>既然 SpringApplication 的初始化流程中已经从<code>spring.factories</code>中获取到<code>ApplicationListener</code>的实现类，那么我们直接在自己的 jar 包的<code>META-INF/spring.factories</code>文件中新增配置即可：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>org.springframework.context.ApplicationListener=\\
cn.moondev.listeners.xxxxListener\\
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>关于 SpringApplication 的初始化，我们就说这么多。</p><h3 id="_6-2-spring-boot-启动流程" tabindex="-1"><a class="header-anchor" href="#_6-2-spring-boot-启动流程" aria-hidden="true">#</a> 6.2 Spring Boot 启动流程</h3><p>Spring Boot 应用的整个启动流程都封装在 SpringApplication.run 方法中，其整个流程真的是太长太长了，但本质上就是在 Spring 容器启动的基础上做了大量的扩展，按照这个思路来看看源码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public ConfigurableApplicationContext run(String... args) {
        StopWatch stopWatch = new StopWatch();
        stopWatch.start();
        ConfigurableApplicationContext context = null;
        FailureAnalyzers analyzers = null;
        configureHeadlessProperty();
        // ①
        SpringApplicationRunListeners listeners = getRunListeners(args);
        listeners.starting();
        try {
            // ②
            ApplicationArguments applicationArguments = new DefaultApplicationArguments(args);
            ConfigurableEnvironment environment = prepareEnvironment(listeners,applicationArguments);
            // ③
            Banner printedBanner = printBanner(environment);
            // ④
            context = createApplicationContext();
            // ⑤
            analyzers = new FailureAnalyzers(context);
            // ⑥
            prepareContext(context, environment, listeners, applicationArguments,printedBanner);
            // ⑦
            refreshContext(context);
            // ⑧
            afterRefresh(context, applicationArguments);
            // ⑨
            listeners.finished(context, null);
            stopWatch.stop();
            return context;
        }
        catch (Throwable ex) {
            handleRunFailure(context, listeners, analyzers, ex);
            throw new IllegalStateException(ex);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>① 通过 SpringFactoriesLoader 查找并加载所有的<code>SpringApplicationRunListeners</code>，通过调用 starting()方法通知所有的 SpringApplicationRunListeners：应用开始启动了。SpringApplicationRunListeners 其本质上就是一个事件发布者，它在 SpringBoot 应用启动的不同时间点发布不同应用事件类型(ApplicationEvent)，如果有哪些事件监听者(ApplicationListener)对这些事件感兴趣，则可以接收并且处理。还记得初始化流程中，SpringApplication 加载了一系列 ApplicationListener 吗？这个启动流程中没有发现有发布事件的代码，其实都已经在 SpringApplicationRunListeners 这儿实现了。</p><p>简单的分析一下其实现流程，首先看下 SpringApplicationRunListener 的源码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface SpringApplicationRunListener {

    // 运行run方法时立即调用此方法，可以用户非常早期的初始化工作
    void starting();

    // Environment准备好后，并且ApplicationContext创建之前调用
    void environmentPrepared(ConfigurableEnvironment environment);

    // ApplicationContext创建好后立即调用
    void contextPrepared(ConfigurableApplicationContext context);

    // ApplicationContext加载完成，在refresh之前调用
    void contextLoaded(ConfigurableApplicationContext context);

    // 当run方法结束之前调用
    void finished(ConfigurableApplicationContext context, Throwable exception);

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SpringApplicationRunListener 只有一个实现类：<code>EventPublishingRunListener</code>。① 处的代码只会获取到一个 EventPublishingRunListener 的实例，我们来看看 starting()方法的内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public void starting() {
    // 发布一个ApplicationStartedEvent
    this.initialMulticaster.multicastEvent(new ApplicationStartedEvent(this.application, this.args));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>顺着这个逻辑，你可以在 ② 处的<code>prepareEnvironment()</code>方法的源码中找到<code>listeners.environmentPrepared(environment);</code>即 SpringApplicationRunListener 接口的第二个方法，那不出你所料，<code>environmentPrepared()</code>又发布了另外一个事件<code>ApplicationEnvironmentPreparedEvent</code>。接下来会发生什么，就不用我多说了吧。</p><p>② 创建并配置当前应用将要使用的<code>Environment</code>，Environment 用于描述应用程序当前的运行环境，其抽象了两个方面的内容：配置文件(profile)和属性(properties)，开发经验丰富的同学对这两个东西一定不会陌生：不同的环境(eg：生产环境、预发布环境)可以使用不同的配置文件，而属性则可以从配置文件、环境变量、命令行参数等来源获取。因此，当 Environment 准备好后，在整个应用的任何时候，都可以从 Environment 中获取资源。</p><p>总结起来，② 处的两句代码，主要完成以下几件事：</p><ul><li>判断 Environment 是否存在，不存在就创建（如果是 web 项目就创建<code>StandardServletEnvironment</code>，否则创建<code>StandardEnvironment</code>）</li><li>配置 Environment：配置 profile 以及 properties</li><li>调用 SpringApplicationRunListener 的<code>environmentPrepared()</code>方法，通知事件监听者：应用的 Environment 已经准备好</li></ul><p>③、SpringBoot 应用在启动时会输出这样的东西：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  .   ____          _            __ _ _
 /\\\\ / ___&#39;_ __ _ _(_)_ __  __ _ \\ \\ \\ \\
( ( )\\___ | &#39;_ | &#39;_| | &#39;_ \\/ _\` | \\ \\ \\ \\
 \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  &#39;  |____| .__|_| |_|_| |_\\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v1.5.6.RELEASE)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想把这个东西改成自己的涂鸦，你可以研究以下 Banner 的实现，这个任务就留给你们吧。</p><p>④、根据是否是 web 项目，来创建不同的 ApplicationContext 容器。</p><p>⑤、创建一系列<code>FailureAnalyzer</code>，创建流程依然是通过 SpringFactoriesLoader 获取到所有实现 FailureAnalyzer 接口的 class，然后在创建对应的实例。FailureAnalyzer 用于分析故障并提供相关诊断信息。</p><p>⑥、初始化 ApplicationContext，主要完成以下工作：</p><ul><li>将准备好的 Environment 设置给 ApplicationContext</li><li>遍历调用所有的 ApplicationContextInitializer 的<code>initialize()</code>方法来对已经创建好的 ApplicationContext 进行进一步的处理</li><li>调用 SpringApplicationRunListener 的<code>contextPrepared()</code>方法，通知所有的监听者：ApplicationContext 已经准备完毕</li><li>将所有的 bean 加载到容器中</li><li>调用 SpringApplicationRunListener 的<code>contextLoaded()</code>方法，通知所有的监听者：ApplicationContext 已经装载完毕</li></ul><p>⑦、调用 ApplicationContext 的<code>refresh()</code>方法，完成 IoC 容器可用的最后一道工序。从名字上理解为刷新容器，那何为刷新？就是插手容器的启动，联系一下第一小节的内容。那如何刷新呢？且看下面代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 摘自refresh()方法中一句代码
invokeBeanFactoryPostProcessors(beanFactory);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>看看这个方法的实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>protected void invokeBeanFactoryPostProcessors(ConfigurableListableBeanFactory beanFactory) {
    PostProcessorRegistrationDelegate.invokeBeanFactoryPostProcessors(beanFactory, getBeanFactoryPostProcessors());
    ......
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取到所有的<code>BeanFactoryPostProcessor</code>来对容器做一些额外的操作。BeanFactoryPostProcessor 允许我们在容器实例化相应对象之前，对注册到容器的 BeanDefinition 所保存的信息做一些额外的操作。这里的 getBeanFactoryPostProcessors()方法可以获取到 3 个 Processor：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ConfigurationWarningsApplicationContextInitializer$ConfigurationWarningsPostProcessor
SharedMetadataReaderFactoryContextInitializer$CachingMetadataReaderFactoryPostProcessor
ConfigFileApplicationListener$PropertySourceOrderingPostProcessor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不是有那么多 BeanFactoryPostProcessor 的实现类，为什么这儿只有这 3 个？因为在初始化流程获取到的各种 ApplicationContextInitializer 和 ApplicationListener 中，只有上文 3 个做了类似于如下操作：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public void initialize(ConfigurableApplicationContext context) {
    context.addBeanFactoryPostProcessor(new ConfigurationWarningsPostProcessor(getChecks()));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后你就可以进入到<code>PostProcessorRegistrationDelegate.invokeBeanFactoryPostProcessors()</code>方法了，这个方法除了会遍历上面的 3 个 BeanFactoryPostProcessor 处理外，还会获取类型为<code>BeanDefinitionRegistryPostProcessor</code>的 bean：<code>org.springframework.context.annotation.internalConfigurationAnnotationProcessor</code>，对应的 Class 为<code>ConfigurationClassPostProcessor</code>。<code>ConfigurationClassPostProcessor</code>用于解析处理各种注解，包括：@Configuration、@ComponentScan、@Import、@PropertySource、@ImportResource、@Bean。当处理<code>@import</code>注解的时候，就会调用自动配置这一小节中的<code>EnableAutoConfigurationImportSelector.selectImports()</code>来完成自动配置功能。其他的这里不再多讲，如果你有兴趣，可以查阅参考资料 6。</p><p>⑧、查找当前 context 中是否注册有 CommandLineRunner 和 ApplicationRunner，如果有则遍历执行它们。</p><p>⑨、执行所有 SpringApplicationRunListener 的 finished()方法。</p><p>这就是 Spring Boot 的整个启动流程，其核心就是在 Spring 容器初始化并启动的基础上加入各种扩展点，这些扩展点包括：ApplicationContextInitializer、ApplicationListener 以及各种 BeanFactoryPostProcessor 等等。你对整个流程的细节不必太过关注，甚至没弄明白也没有关系，你只要理解这些扩展点是在何时如何工作的，能让它们为你所用即可。</p><p>整个启动流程确实非常复杂，可以查询参考资料中的部分章节和内容，对照着源码，多看看，我想最终你都能弄清楚的。言而总之，Spring 才是核心，理解清楚 Spring 容器的启动流程，那 Spring Boot 启动流程就不在话下了。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,179),v={href:"https://link.jianshu.com/?t=http%3A%2F%2Funion-click.jd.com%2Fjdc%3Fd%3D4jESQ9",target:"_blank",rel:"noopener noreferrer"},u=n("br",null,null,-1),p={href:"https://link.jianshu.com/?t=http%3A%2F%2Funion-click.jd.com%2Fjdc%3Fd%3DyzfgeF",target:"_blank",rel:"noopener noreferrer"},b=n("br",null,null,-1),m={href:"https://link.jianshu.com/?t=http%3A%2F%2Funion-click.jd.com%2Fjdc%3Fd%3DAQ6oHO",target:"_blank",rel:"noopener noreferrer"},g=n("br",null,null,-1),h={href:"https://link.jianshu.com/?t=https%3A%2F%2Fwww.ibm.com%2Fdeveloperworks%2Fcn%2Fjava%2Fj-lo-classloader%2F",target:"_blank",rel:"noopener noreferrer"},C={href:"https://link.jianshu.com/?t=https%3A%2F%2Fwww.ibm.com%2Fdeveloperworks%2Fcn%2Fjava%2Fj-lo-classloader%2F",target:"_blank",rel:"noopener noreferrer"},f=n("br",null,null,-1),x={href:"https://link.jianshu.com/?t=http%3A%2F%2Fblog.csdn.net%2Fliaokailin%2Farticle%2Fdetails%2F49559951",target:"_blank",rel:"noopener noreferrer"},S={href:"https://link.jianshu.com/?t=http%3A%2F%2Fblog.csdn.net%2Fliaokailin%2Farticle%2Fdetails%2F49559951",target:"_blank",rel:"noopener noreferrer"},A=n("br",null,null,-1),B={href:"https://link.jianshu.com/?t=http%3A%2F%2Fblog.csdn.net%2Fliaokailin%2Farticle%2Fdetails%2F49107209",target:"_blank",rel:"noopener noreferrer"},y={href:"https://link.jianshu.com/?t=http%3A%2F%2Fblog.csdn.net%2Fliaokailin%2Farticle%2Fdetails%2F49107209",target:"_blank",rel:"noopener noreferrer"};function P(E,L){const i=r("ExternalLinkIcon");return t(),o("div",null,[c,n("p",null,[e("[1]"),n("a",v,[e("王福强 著；springboot 揭秘：快速构建微服务体系; 机械工业出版社, 2016"),a(i)]),u,e(" [2]"),n("a",p,[e("王福强 著；spring 揭秘; 人民邮件出版社, 2009"),a(i)]),b,e(" [3]"),n("a",m,[e("craig walls 著；丁雪丰 译；spring boot 实战；中国工信出版集团 人民邮电出版社，2016"),a(i)]),g,e(" [4]"),n("a",h,[e("深入探讨 java 类加载器"),a(i)]),e(" : "),n("a",C,[e("www.ibm.com/developerwo…"),a(i)]),f,e(" [5]"),n("a",x,[e("spring boot 实战：自动配置原理分析"),a(i)]),e(" : "),n("a",S,[e("blog.csdn.net/liaokailin/…"),a(i)]),A,e(" [6]"),n("a",B,[e("spring boot实战：spring boot bean加载源码分析"),a(i)]),e("： "),n("a",y,[e("blog.csdn.net/liaokailin/…"),a(i)])])])}const M=s(l,[["render",P],["__file","21.SpringBoot知识图谱.html.vue"]]);export{M as default};
