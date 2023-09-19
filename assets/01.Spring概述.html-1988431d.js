import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,e as i}from"./app-d8d56f9e.js";const r={},t=i(`<h1 id="spring-framework-综述" tabindex="-1"><a class="header-anchor" href="#spring-framework-综述" aria-hidden="true">#</a> Spring Framework 综述</h1><h2 id="spring-framework-简介" tabindex="-1"><a class="header-anchor" href="#spring-framework-简介" aria-hidden="true">#</a> Spring Framework 简介</h2><p>Spring Framework 是最受欢迎的企业级 Java 应用程序开发框架。用于构建企业级应用的轻量级、一站式解决方案。</p><p>当谈论到大小和透明度时， Spring 是轻量级的。 Spring 框架的基础版本是在 2 MB 左右的。</p><p>Spring 框架的核心特性可以用于开发任何 Java 应用程序，但是在 Java EE 平台上构建 web 应用程序是需要扩展的。 Spring 框架的目标是使 J2EE 开发变得更容易使用，通过启用基于 POJO 编程模型来促进良好的编程实践。</p><p>Spring Framework 设计理念如下：</p><ul><li>力争让选择无处不在</li><li>体现海纳百川的精神</li><li>保持后向兼容性</li><li>专注 API 设计</li><li>追求严苛的代码质量</li></ul><h2 id="为什么使用-spring" tabindex="-1"><a class="header-anchor" href="#为什么使用-spring" aria-hidden="true">#</a> 为什么使用 Spring</h2><p>下面列出的是使用 Spring 框架主要的好处：</p><ul><li>Spring 可以使开发人员使用 POJOs 开发企业级的应用程序。只使用 POJOs 的好处是你不需要一个 EJB 容器产品，比如一个应用程序服务器，但是你可以选择使用一个健壮的 servlet 容器，比如 Tomcat 或者一些商业产品。</li><li>Spring 在一个单元模式中是有组织的。即使包和类的数量非常大，你只需要选择你需要的部分，而忽略剩余的那部分。</li><li>Spring 不会让你白费力气做重复工作，它真正的利用了一些现有的技术，像几个 ORM 框架、日志框架、JEE、Quartz 和 JDK 计时器，其他视图技术。</li><li>测试一个用 Spring 编写的应用程序很容易，因为 environment-dependent 代码被放进了这个框架中。此外，通过使用 JavaBean-style POJOs，它在使用依赖注入注入测试数据时变得更容易。</li><li>Spring 的 web 框架是一个设计良好的 web MVC 框架，它为 web 框架，比如 Structs 或者其他工程上的或者很少受欢迎的 web 框架，提供了一个很好的供替代的选择。</li><li>为将特定技术的异常（例如，由 JDBC、Hibernate，或者 JDO 抛出的异常）翻译成一致的， Spring 提供了一个方便的 API，而这些都是未经检验的异常。</li><li>轻量级的 IOC 容器往往是轻量级的，例如，特别是当与 EJB 容器相比的时候。这有利于在内存和 CPU 资源有限的计算机上开发和部署应用程序。</li><li>Spring 提供了一个一致的事务管理界面，该界面可以缩小成一个本地事务（例如，使用一个单一的数据库）和扩展成一个全局事务（例如，使用 JTA）。</li></ul><h2 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想" aria-hidden="true">#</a> 核心思想</h2><p>Spring 最核心的两个技术思想是：IoC 和 Aop</p><h3 id="ioc" tabindex="-1"><a class="header-anchor" href="#ioc" aria-hidden="true">#</a> IoC</h3><p><code>IoC</code> 即 <code>Inversion of Control</code> ，意为控制反转。</p><p>Spring 最认同的技术是控制反转的**依赖注入（DI）**模式。控制反转（IoC）是一个通用的概念，它可以用许多不同的方式去表达，依赖注入仅仅是控制反转的一个具体的例子。</p><p>当编写一个复杂的 Java 应用程序时，应用程序类应该尽可能的独立于其他的 Java 类来增加这些类可重用可能性，当进行单元测试时，可以使它们独立于其他类进行测试。依赖注入（或者有时被称为配线）有助于将这些类粘合在一起，并且在同一时间让它们保持独立。</p><p>到底什么是依赖注入？让我们将这两个词分开来看一看。这里将依赖关系部分转化为两个类之间的关联。例如，类 A 依赖于类 B。现在，让我们看一看第二部分，注入。所有这一切都意味着类 B 将通过 IoC 被注入到类 A 中。</p><p>依赖注入可以以向构造函数传递参数的方式发生，或者通过使用 setter 方法 post-construction。由于依赖注入是 Spring 框架的核心部分，所以我将在一个单独的章节中利用很好的例子去解释这一概念。</p><h3 id="aop" tabindex="-1"><a class="header-anchor" href="#aop" aria-hidden="true">#</a> Aop</h3><p>Spring 框架的一个关键组件是<strong>面向方面的程序设计（AOP）<strong>框架。一个程序中跨越多个点的功能被称为</strong>横切关注点</strong>，这些横切关注点在概念上独立于应用程序的业务逻辑。有各种各样常见的很好的关于方面的例子，比如日志记录、声明性事务、安全性，和缓存等等。</p><p>在 OOP 中模块化的关键单元是类，而在 AOP 中模块化的关键单元是方面。AOP 帮助你将横切关注点从它们所影响的对象中分离出来，然而依赖注入帮助你将你的应用程序对象从彼此中分离出来。</p><p>Spring 框架的 AOP 模块提供了面向方面的程序设计实现，允许你定义拦截器方法和切入点，可以实现将应该被分开的代码干净的分开功能。我将在一个独立的章节中讨论更多关于 Spring AOP 的概念。</p><h2 id="spring-体系结构" tabindex="-1"><a class="header-anchor" href="#spring-体系结构" aria-hidden="true">#</a> Spring 体系结构</h2><p>Spring 当前框架有<strong>20</strong>个 jar 包，大致可以分为<strong>6</strong>大模块:</p><ul><li><ol><li>为什么使用 Spring</li></ol></li><li><ol start="2"><li>核心思想</li></ol><ul><li>2.1. IoC</li><li>2.2. Aop</li></ul></li><li><ol start="3"><li>Spring 体系结构</li></ol><ul><li>3.1. Core Container <ul><li>3.1.1. BeanFactory</li><li>3.1.2. ApplicationContext</li></ul></li><li>3.2. AOP and Instrumentation</li><li>3.3. Messaging</li><li>3.4. Data Access / Integaration</li><li>3.5. Web</li><li>3.6. Test</li></ul></li><li><ol start="4"><li>术语</li></ol></li></ul><p>Spring 框架提供了非常丰富的功能，因此整个架构也很庞大。<br> 在我们实际的应用开发中，并不一定要使用所有的功能，而是可以根据需要选择合适的 Spring 模块。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/java/spring/spring-framework.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="core-container" tabindex="-1"><a class="header-anchor" href="#core-container" aria-hidden="true">#</a> Core Container</h3><p>IoC 容器是 Spring 框架的核心。spring 容器使用依赖注入管理构成应用的组件，它会创建相互协作的组件之间的关联。毫无疑问，这些对象更简单干净，更容易理解，也更容易重用和测试。<br> Spring 自带了几种容器的实现，可归纳为两种类型：</p><h4 id="beanfactory" tabindex="-1"><a class="header-anchor" href="#beanfactory" aria-hidden="true">#</a> BeanFactory</h4><p>由 org.springframework.beans.factory.BeanFactory 接口定义。<br> 它是最简单的容器，提供基本的 DI 支持。</p><h4 id="applicationcontext" tabindex="-1"><a class="header-anchor" href="#applicationcontext" aria-hidden="true">#</a> ApplicationContext</h4><p>由 org.springframework.context.ApplicationContext 接口定义。<br> 它是基于 BeanFactory 之上构建，并提供面向应用的服务，例如从属性文件解析文本信息的能力，以及发布应用事件给感兴趣的事件监听者的能力。<br><strong><em>注：Bean 工厂对于大多数应用来说往往太低级了，所以应用上下文使用更广泛。推荐在开发中使用应用上下文容器。</em></strong></p><p>Spring 自带了多种应用上下文，最可能遇到的有以下几种：<br><code>ClassPathXmlApplicationContext</code>：从类路径下的 XML 配置文件中加载上下文定义，把应用上下文定义文件当做类资源。<br><code>FileSystemXmlApplicationContext</code>：读取文件系统下的 XML 配置文件并加载上下文定义。<br><code>XmlWebApplicationContext</code>：读取 Web 应用下的 XML 配置文件并装载上下文定义。</p><p><strong><em>范例</em></strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ApplicationContext</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileSystemXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\Temp\\build.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ApplicationContext</span> context2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">&quot;build.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，加载 <code>FileSystemXmlApplicationContext</code> 和 <code>ClassPathXmlApplicationContext</code> 十分相似。<br> 差异在于：前者在指定文件系统路径下查找 build.xml 文件；而后在所有类路径（包含 JAR 文件）下查找 build.xml 文件。<br> 通过引用应用上下文，可以很方便的调用 getBean() 方法从 Spring 容器中获取 Bean。</p><p><strong>相关 jar 包</strong></p><ul><li><p><code>spring-core</code>, <code>spring-beans</code>, 提供框架的基础部分，包括 IoC 和依赖注入特性。</p></li><li><p><code>spring-context</code>, 在<code>spring-core</code>, <code>spring-beans</code>基础上构建。它提供一种框架式的访问对象的方法。它也支持类似 Java EE 特性，例如：EJB，JMX 和基本 remoting。ApplicationContext 接口是它的聚焦点。</p></li><li><p><code>springcontext-support</code>, 集成第三方库到 Spring application context。</p></li><li><p><code>spring-expression</code>，提供一种强有力的表达语言在运行时来查询和操纵一个对象图。</p></li></ul><h3 id="aop-and-instrumentation" tabindex="-1"><a class="header-anchor" href="#aop-and-instrumentation" aria-hidden="true">#</a> AOP and Instrumentation</h3><p><strong>相关 jar 包</strong></p><ul><li><code>spring-aop</code>，提供了对面向切面编程的丰富支持。</li><li><code>spring-aspects</code>，提供了对 AspectJ 的集成。</li><li><code>spring-instrument</code>，提供了对类 instrumentation 的支持和类加载器。</li><li><code>spring-instrument-tomcat</code>，包含了 Spring 对 Tomcat 的 instrumentation 代理。</li></ul><h3 id="messaging" tabindex="-1"><a class="header-anchor" href="#messaging" aria-hidden="true">#</a> Messaging</h3><p><strong>相关 jar 包</strong></p><ul><li><code>spring-messaging</code>，包含 spring 的消息处理功能，如 Message，MessageChannel，MessageHandler。</li></ul><h3 id="data-access-integaration" tabindex="-1"><a class="header-anchor" href="#data-access-integaration" aria-hidden="true">#</a> Data Access / Integaration</h3><p>Data Access/Integration 层包含了 JDBC / ORM / OXM / JMS 和 Transaction 模块。</p><p><strong>相关 jar 包</strong></p><ul><li><p><code>spring-jdbc</code>，提供了一个 JDBC 抽象层。</p></li><li><p><code>spring-tx</code>，支持编程和声明式事务管理类。</p></li><li><p><code>spring-orm</code>，提供了流行的对象关系型映射 API 集，如 JPA，JDO，Hibernate。</p></li><li><p><code>spring-oxm</code>，提供了一个抽象层以支持对象/XML 映射的实现，如 JAXB，Castor，XMLBeans，JiBX 和 XStream.</p></li><li><p><code>spring-jms</code>，包含了生产和消费消息的功能。</p></li></ul><h3 id="web" tabindex="-1"><a class="header-anchor" href="#web" aria-hidden="true">#</a> Web</h3><p><strong>相关 jar 包</strong></p><ul><li><p><code>spring-web</code>，提供了基本的面向 web 的功能，如多文件上传、使用 Servlet 监听器的 Ioc 容器的初始化。一个面向 web 的应用层上下文。</p></li><li><p><code>spring-webmvc</code>，包括 MVC 和 REST web 服务实现。</p></li><li><p><code>spring-webmvc-portlet</code>，提供在 Protlet 环境的 MVC 实现和<code>spring-webmvc</code>功能的镜像。</p></li></ul><h3 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> Test</h3><p><strong>相关 jar 包</strong></p><ul><li><code>spring-test</code>，以 Junit 和 TestNG 来支持 spring 组件的单元测试和集成测试。</li></ul><h2 id="术语" tabindex="-1"><a class="header-anchor" href="#术语" aria-hidden="true">#</a> 术语</h2><ul><li><strong>应用程序</strong>：是能完成我们所需要功能的成品，比如购物网站、OA 系统。</li><li><strong>框架</strong>：是能完成一定功能的半成品，比如我们可以使用框架进行购物网站开发；框架做一部分功能，我们自己做一部分功能，这样应用程序就创建出来了。而且框架规定了你在开发应用程序时的整体架构，提供了一些基础功能，还规定了类和对象的如何创建、如何协作等，从而简化我们开发，让我们专注于业务逻辑开发。</li><li><strong>非侵入式设计</strong>：从框架角度可以这样理解，无需继承框架提供的类，这种设计就可以看作是非侵入式设计，如果继承了这些框架类，就是侵入设计，如果以后想更换框架之前写过的代码几乎无法重用，如果非侵入式设计则之前写过的代码仍然可以继续使用。</li><li><strong>轻量级及重量级</strong>：轻量级是相对于重量级而言的，轻量级一般就是非入侵性的、所依赖的东西非常少、资源占用非常少、部署简单等等，其实就是比较容易使用，而重量级正好相反。</li><li><strong>POJO</strong>：POJO（Plain Old Java Objects）简单的 Java 对象，它可以包含业务逻辑或持久化逻辑，但不担当任何特殊角色且不继承或不实现任何其它 Java 框架的类或接口。</li><li><strong>容器</strong>：在日常生活中容器就是一种盛放东西的器具，从程序设计角度看就是装对象的的对象，因为存在放入、拿出等操作，所以容器还要管理对象的生命周期。</li><li>**控制反转：**即 Inversion of Control，缩写为 IoC，控制反转还有一个名字叫做依赖注入（Dependency Injection），就是由容器控制程序之间的关系，而非传统实现中，由程序代码直接操控。</li><li><strong>JavaBean</strong>：一般指容器管理对象，在 Spring 中指 Spring IoC 容器管理对象。</li></ul>`,57),o=[t];function s(p,l){return a(),e("div",null,o)}const g=n(r,[["render",s],["__file","01.Spring概述.html.vue"]]);export{g as default};
