import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as l,a as e,b as n,d as t,e as o}from"./app-05b4da95.js";const c={},d=o('<h1 id="spring-bean" tabindex="-1"><a class="header-anchor" href="#spring-bean" aria-hidden="true">#</a> Spring Bean</h1><p>在 Spring 中，构成应用程序主体由 Spring IoC 容器管理的对象称为 Bean。<strong>Bean 是由 Spring IoC 容器实例化、装配和管理的对象</strong>。 Bean 以及它们之间的依赖关系反映在容器使用的配置元数据中。</p><h2 id="spring-bean-定义" tabindex="-1"><a class="header-anchor" href="#spring-bean-定义" aria-hidden="true">#</a> Spring Bean 定义</h2><h3 id="beandefinition" tabindex="-1"><a class="header-anchor" href="#beandefinition" aria-hidden="true">#</a> BeanDefinition</h3><p>Spring IoC 容器本身，并不能识别配置的元数据。为此，要将这些配置信息转为 Spring 能识别的格式——<code>BeanDefinition</code> 对象。</p><p><strong><code>BeanDefinition</code> 是 Spring 中定义 Bean 的配置元信息接口</strong>，它包含：</p><ul><li>Bean 类名</li><li>Bean 行为配置元素，如：作用域、自动绑定的模式、生命周期回调等</li><li>其他 Bean 引用，也可称为合作者（Collaborators）或依赖（Dependencies）</li><li>配置设置，如 Bean 属性（Properties）</li></ul><h4 id="beandefinition-元信息" tabindex="-1"><a class="header-anchor" href="#beandefinition-元信息" aria-hidden="true">#</a> BeanDefinition 元信息</h4><p><code>BeanDefinition</code> 元信息如下：</p>',9),p=e("thead",null,[e("tr",null,[e("th",null,"属性（Property）"),e("th",null,"说明")])],-1),u={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-class",target:"_blank",rel:"noopener noreferrer"},h=e("td",null,"全类名，必须是具体类，不能用抽象类或接口",-1),g={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-beanname",target:"_blank",rel:"noopener noreferrer"},f=e("td",null,"Bean 的名称或者 ID",-1),b={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-scopes",target:"_blank",rel:"noopener noreferrer"},B=e("td",null,[n("Bean 的作用域（如："),e("code",null,"singleton"),n("、"),e("code",null,"prototype"),n(" 等）")],-1),_={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-collaborators",target:"_blank",rel:"noopener noreferrer"},m=e("td",null,"Bean 构造器参数（用于依赖注入）",-1),k={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-collaborators",target:"_blank",rel:"noopener noreferrer"},y=e("td",null,"Bean 属性设置（用于依赖注入）",-1),S={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-autowire",target:"_blank",rel:"noopener noreferrer"},v=e("td",null,"Bean 自动绑定模式（如：通过名称 byName）",-1),x={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-lazy-init",target:"_blank",rel:"noopener noreferrer"},w=e("td",null,"Bean 延迟初始化模式（延迟和非延迟）",-1),D={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-lifecycle-initializingbean",target:"_blank",rel:"noopener noreferrer"},q=e("td",null,"Bean 初始化回调方法名称",-1),I={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-lifecycle-disposablebean",target:"_blank",rel:"noopener noreferrer"},A=e("td",null,"Bean 销毁回调方法名称",-1),P=e("h4",{id:"beandefinition-构建",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#beandefinition-构建","aria-hidden":"true"},"#"),n(" BeanDefinition 构建")],-1),C=e("p",null,"BeanDefinition 构建方式：",-1),z=e("ul",null,[e("li",null,[e("p",null,[n("通过 "),e("code",null,"BeanDefinitionBuilder")])]),e("li",null,[e("p",null,[n("通过 "),e("code",null,"AbstractBeanDefinition"),n(" 以及派生类")])])],-1),T={href:"https://github.com/dunwu/spring-tutorial/blob/master/codes/core/spring-core-ioc/src/test/java/io/github/dunwu/spring/core/bean/BeanDefinitionTests.java",target:"_blank",rel:"noopener noreferrer"},j=o(`<h3 id="spring-bean-命名" tabindex="-1"><a class="header-anchor" href="#spring-bean-命名" aria-hidden="true">#</a> Spring Bean 命名</h3><h4 id="spring-bean-命名规则" tabindex="-1"><a class="header-anchor" href="#spring-bean-命名规则" aria-hidden="true">#</a> Spring Bean 命名规则</h4><p>每个 Bean 拥有一个或多个标识符（identifiers），这些标识符在 Bean 所在的容器必须是唯一的。通常，一个 Bean 仅有一个标识符，如果需要额外的，可考虑使用别名（Alias）来扩充。</p><p>在基于 XML 的配置元信息中，开发人员<strong>可以使用 <code>id</code> 属性、<code>name</code> 属性或来指定 Bean 标识符</strong>。通常，Bean 的标识符由字母组成，允许出现特殊字符。如果要想引入 Bean 的别名的话，可在 <code>name</code> 属性使用半角逗号（“,”）或分号（“;”) 来间隔。</p><p>Spring 中，<strong>为 Bean 指定 <code>id</code> 和 <code>name</code> 属性不是必须的</strong>。如果不指定，Spring 会自动为 Bean 分配一个唯一的名称。尽管 Bean 的命名没有限制，不过<strong>官方建议采用驼峰命名法来命名 Bean</strong>。</p><h4 id="spring-bean-命名生成器" tabindex="-1"><a class="header-anchor" href="#spring-bean-命名生成器" aria-hidden="true">#</a> Spring Bean 命名生成器</h4><p>Spring 提供了两种 Spring Bean 命名生成器：</p><ul><li><code>DefaultBeanNameGenerator</code>：默认通用 <code>BeanNameGenerator</code> 实现。</li><li><code>AnnotationBeanNameGenerator</code>：基于注解扫描的 <code>BeanNameGenerator</code> 实现。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">BeanNameGenerator</span> <span class="token punctuation">{</span>
   <span class="token class-name">String</span> <span class="token function">generateBeanName</span><span class="token punctuation">(</span><span class="token class-name">BeanDefinition</span> definition<span class="token punctuation">,</span> <span class="token class-name">BeanDefinitionRegistry</span> registry<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="spring-bean-别名" tabindex="-1"><a class="header-anchor" href="#spring-bean-别名" aria-hidden="true">#</a> Spring Bean 别名</h4><p>Spring 支持通过 <code>&lt;alias&gt;</code> 属性为 Bean 设置别名。</p><p>Bean 别名（Alias）的作用：</p><ul><li>复用现有的 <code>BeanDefinition</code></li><li>更具有场景化的命名方法，比如： <ul><li><code>&lt;alias name=&quot;myApp-dataSource&quot; alias=&quot;subsystemA-dataSource&quot;/&gt;</code></li><li><code>&lt;alias name=&quot;myApp-dataSource&quot; alias=&quot;subsystemB-dataSource&quot;/&gt;</code></li></ul></li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>io.github.dunwu.spring.core.bean.entity.person.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 属性略 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>alias</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alias</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>aliasUser<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spring-bean-生命周期" tabindex="-1"><a class="header-anchor" href="#spring-bean-生命周期" aria-hidden="true">#</a> Spring Bean 生命周期</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20211201102734.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li><p>Spring 对 Bean 进行实例化（相当于 new XXX()）</p></li><li><p>Spring 将值和引用注入到 Bean 对应的属性中</p></li><li><p>如果 Bean 实现了 <code>BeanNameAware</code> 接口，Spring 将 Bean 的 ID 传递给 <code>setBeanName</code> 方法</p><ul><li>作用是通过 Bean 的引用来获得 Bean ID，一般业务中是很少有用到 Bean 的 ID 的</li></ul></li><li><p>如果 Bean 实现了 <code>BeanFactoryAware</code> 接口，Spring 将调用 <code>setBeanDactory</code> 方法，并把 <code>BeanFactory</code> 容器实例作为参数传入。</p><ul><li>作用是获取 Spring 容器，如 Bean 通过 Spring 容器发布事件等</li></ul></li><li><p>如果 Bean 实现了 <code>ApplicationContextAware</code> 接口，Spring 容器将调用 <code>setApplicationContext</code> 方法，把应用上下文作为参数传入</p><ul><li>作用与 <code>BeanFactory</code> 类似都是为了获取 Spring 容器，不同的是 Spring 容器在调用 <code>setApplicationContext</code> 方法时会把它自己作为 <code>setApplicationContext</code> 的参数传入，而 Spring 容器在调用 <code>setBeanFactory</code> 前需要使用者自己指定（注入）<code>setBeanFactory</code> 里的参数 <code>BeanFactory</code></li></ul></li><li><p>如果 Bean 实现了 <code>BeanPostProcess</code> 接口，Spring 将调用 <code>postProcessBeforeInitialization</code> 方法</p><ul><li>作用是在 Bean 实例创建成功后对其进行增强处理，如对 Bean 进行修改，增加某个功能</li></ul></li><li><p>如果 Bean 实现了 <code>InitializingBean</code> 接口，Spring 将调用 <code>afterPropertiesSet</code> 方法，作用与在配置文件中对 Bean 使用 <code>init-method</code> 声明初始化的作用一样，都是在 Bean 的全部属性设置成功后执行的初始化方法。</p></li><li><p>如果 Bean 实现了 <code>BeanPostProcess</code> 接口，Spring 将调用 <code>postProcessAfterInitialization</code> 方法</p><ul><li><code>postProcessBeforeInitialization</code> 是在 Bean 初始化前执行的，而 <code>postProcessAfterInitialization</code> 是在 Bean 初始化后执行的</li></ul></li><li><p>经过以上的工作后，Bean 将一直驻留在应用上下文中给应用使用，直到应用上下文被销毁</p></li><li><p>如果 Bean 实现了 <code>DispostbleBean</code> 接口，Spring 将调用它的 <code>destory</code> 方法，作用与在配置文件中对 Bean 使用 <code>destory-method</code> 属性的作用一样，都是在 Bean 实例销毁前执行的方法。</p></li></ol><h2 id="spring-bean-注册" tabindex="-1"><a class="header-anchor" href="#spring-bean-注册" aria-hidden="true">#</a> Spring Bean 注册</h2><p>注册 Spring Bean 实际上是将 <code>BeanDefinition</code> 注册到 IoC 容器中。</p><h3 id="xml-配置元信息" tabindex="-1"><a class="header-anchor" href="#xml-配置元信息" aria-hidden="true">#</a> XML 配置元信息</h3><p>Spring 的传统配置方式。在 <code>&lt;bean&gt;</code> 标签中配置元数据内容。</p><p>缺点是当 JavaBean 过多时，产生的配置文件足以让你眼花缭乱。</p><h3 id="注解配置元信息" tabindex="-1"><a class="header-anchor" href="#注解配置元信息" aria-hidden="true">#</a> 注解配置元信息</h3><p>使用 <code>@Bean</code>、<code>@Component</code>、<code>@Import</code> 注解注册 Spring Bean。</p><h3 id="java-api-配置元信息" tabindex="-1"><a class="header-anchor" href="#java-api-配置元信息" aria-hidden="true">#</a> Java API 配置元信息</h3><ul><li>命名方式：<code>BeanDefinitionRegistry#registerBeanDefinition(String,BeanDefinition)</code></li><li>非命名方式：<code>BeanDefinitionReaderUtils#registerWithGeneratedName(AbstractBeanDefinition,BeanDefinitionRegistry)</code></li><li>配置类方式：<code>AnnotatedBeanDefinitionReader#register(Class...)</code></li></ul>`,26),N={href:"https://github.com/dunwu/spring-tutorial/blob/master/codes/core/spring-core-ioc/src/test/java/io/github/dunwu/spring/core/bean/BeanRegistryTests.java",target:"_blank",rel:"noopener noreferrer"},J=o('<h2 id="spring-bean-实例化" tabindex="-1"><a class="header-anchor" href="#spring-bean-实例化" aria-hidden="true">#</a> Spring Bean 实例化</h2><p>Spring Bean 实例化方式：</p><ul><li>常规方式 <ul><li>通过构造器（配置元信息：XML、Java 注解和 Java API）</li><li>通过静态方法（配置元信息：XML、Java 注解和 Java API）</li><li>通过 Bean 工厂方法（配置元信息：XML、Java 注解和 Java API）</li><li>通过 <code>FactoryBean</code>（配置元信息：XML、Java 注解和 Java API）</li></ul></li><li>特殊方式 <ul><li>通过 <code>ServiceLoaderFactoryBean</code>（配置元信息：XML、Java 注解和 Java API ）</li><li>通过 <code>AutowireCapableBeanFactory#createBean(java.lang.Class, int, boolean)</code></li><li>通过 <code>BeanDefinitionRegistry#registerBeanDefinition(String,BeanDefinition)</code></li></ul></li></ul>',3),L={href:"https://github.com/dunwu/spring-tutorial/blob/master/codes/core/spring-core-ioc/src/test/java/io/github/dunwu/spring/core/bean/BeanInstantiationTests.java",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/dunwu/spring-tutorial/blob/master/codes/core/spring-core-ioc/src/test/java/io/github/dunwu/spring/core/bean/BeanInstantiationSpecialTests.java",target:"_blank",rel:"noopener noreferrer"},X=o('<h2 id="spring-bean-初始化和销毁" tabindex="-1"><a class="header-anchor" href="#spring-bean-初始化和销毁" aria-hidden="true">#</a> Spring Bean 初始化和销毁</h2><p>Spring Bean 初始化和销毁的方式有以下几种：</p><ol><li><p>使用 <code>@PostConstruct</code> 和 <code>@PreDestroy</code> 注解分别指定相应的初始化方法和销毁方法。</p></li><li><p>实现 <code>InitializingBean</code> 接口的 <code>afterPropertiesSet()</code> 方法来编写初始化方法；实现 <code>DisposableBean</code> 接口的 <code>destroy()</code> 方法来编写销毁方法。</p><ul><li><code>InitializingBean</code> 接口包含一个 <code>afterPropertiesSet</code> 方法，可以通过实现该接口，然后在这个方法中编写初始化逻辑。</li><li><code>DisposableBean</code>接口包含一个 <code>destory</code> 方法，可以通过实现该接口，然后在这个方法中编写销毁逻辑。</li></ul></li><li><p>自定义初始化方法</p><ul><li>XML 配置：<code>&lt;bean init-method=&quot;init&quot; destroy=&quot;destroy&quot; ... /&gt;</code></li><li>Java 注解：<code>@Bean(initMethod = &quot;init&quot;, destroyMethod = &quot;destroy&quot;)</code></li><li>Java API：<code>AbstractBeanDefinition#setInitMethodName(String)</code> 和 <code>AbstractBeanDefinition#setDestroyMethodName(String)</code> 分别定义初始化和销毁方法</li></ul></li></ol><p>注意：如果同时存在，执行顺序会按照序列执行。</p><p>Bean 的延迟初始化</p><ul><li>xml 方式：<code>&lt;bean lazy-init=&quot;true&quot; ... /&gt;</code></li><li>注解方式：<code>@Lazy</code></li></ul><p>Spring 提供了一个 <code>BeanPostProcessor</code> 接口，提供了两个方法 <code>postProcessBeforeInitialization</code> 和 <code>postProcessAfterInitialization</code>。其中<code>postProcessBeforeInitialization</code> 在组件的初始化方法调用之前执行，<code>postProcessAfterInitialization</code> 在组件的初始化方法调用之后执行。它们都包含两个入参：</p><ul><li><code>bean</code>：当前组件对象；</li><li><code>beanName</code>：当前组件在容器中的名称。</li></ul>',8),F={href:"https://github.com/dunwu/spring-tutorial/blob/master/codes/core/spring-core-ioc/src/test/java/io/github/dunwu/spring/core/bean/BeanInitDestroyTests.java",target:"_blank",rel:"noopener noreferrer"},R=o('<h2 id="spring-bean-垃圾回收" tabindex="-1"><a class="header-anchor" href="#spring-bean-垃圾回收" aria-hidden="true">#</a> Spring Bean 垃圾回收</h2><p>Spring Bean 垃圾回收步骤：</p><ol><li>关闭 Spring 容器（应用上下文）</li><li>执行 GC</li><li>Spring Bean 覆盖的 <code>finalize()</code> 方法被回调</li></ol><h2 id="spring-bean-作用范围" tabindex="-1"><a class="header-anchor" href="#spring-bean-作用范围" aria-hidden="true">#</a> Spring Bean 作用范围</h2>',4),G=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Scope"),e("th",{style:{"text-align":"left"}},"Description")])],-1),O={style:{"text-align":"left"}},V={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-scopes-singleton",target:"_blank",rel:"noopener noreferrer"},E=e("td",{style:{"text-align":"left"}},"(Default) Scopes a single bean definition to a single object instance for each Spring IoC container.",-1),H={style:{"text-align":"left"}},U={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-scopes-prototype",target:"_blank",rel:"noopener noreferrer"},W=e("td",{style:{"text-align":"left"}},"Scopes a single bean definition to any number of object instances.",-1),K={style:{"text-align":"left"}},Q={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-scopes-request",target:"_blank",rel:"noopener noreferrer"},Y=e("td",{style:{"text-align":"left"}},[n("Scopes a single bean definition to the lifecycle of a single HTTP request. That is, each HTTP request has its own instance of a bean created off the back of a single bean definition. Only valid in the context of a web-aware Spring "),e("code",null,"ApplicationContext"),n(".")],-1),Z={style:{"text-align":"left"}},$={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-scopes-session",target:"_blank",rel:"noopener noreferrer"},ee=e("td",{style:{"text-align":"left"}},[n("Scopes a single bean definition to the lifecycle of an HTTP "),e("code",null,"Session"),n(". Only valid in the context of a web-aware Spring "),e("code",null,"ApplicationContext"),n(".")],-1),ne={style:{"text-align":"left"}},ae={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-scopes-application",target:"_blank",rel:"noopener noreferrer"},te=e("td",{style:{"text-align":"left"}},[n("Scopes a single bean definition to the lifecycle of a "),e("code",null,"ServletContext"),n(". Only valid in the context of a web-aware Spring "),e("code",null,"ApplicationContext"),n(".")],-1),oe={style:{"text-align":"left"}},ie={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#websocket-stomp-websocket-scope",target:"_blank",rel:"noopener noreferrer"},re=e("td",{style:{"text-align":"left"}},[n("Scopes a single bean definition to the lifecycle of a "),e("code",null,"WebSocket"),n(". Only valid in the context of a web-aware Spring "),e("code",null,"ApplicationContext"),n(".")],-1),se=e("h2",{id:"参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),n(" 参考资料")],-1),le={href:"https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans",target:"_blank",rel:"noopener noreferrer"},ce={href:"https://time.geekbang.org/course/intro/265",target:"_blank",rel:"noopener noreferrer"};function de(pe,ue){const a=r("ExternalLinkIcon");return s(),l("div",null,[d,e("table",null,[p,e("tbody",null,[e("tr",null,[e("td",null,[e("a",u,[n("Class"),t(a)])]),h]),e("tr",null,[e("td",null,[e("a",g,[n("Name"),t(a)])]),f]),e("tr",null,[e("td",null,[e("a",b,[n("Scope"),t(a)])]),B]),e("tr",null,[e("td",null,[e("a",_,[n("Constructor arguments"),t(a)])]),m]),e("tr",null,[e("td",null,[e("a",k,[n("Properties"),t(a)])]),y]),e("tr",null,[e("td",null,[e("a",S,[n("Autowiring mode"),t(a)])]),v]),e("tr",null,[e("td",null,[e("a",x,[n("Lazy initialization mode"),t(a)])]),w]),e("tr",null,[e("td",null,[e("a",D,[n("Initialization method"),t(a)])]),q]),e("tr",null,[e("td",null,[e("a",I,[n("Destruction method"),t(a)])]),A])])]),P,C,z,e("blockquote",null,[e("p",null,[n("💻 Spring Bean 定义示例源码："),e("a",T,[n("BeanDefinitionTests"),t(a)])])]),j,e("blockquote",null,[e("p",null,[n("💻 Spring Bean 注册示例源码："),e("a",N,[n("BeanRegistryTests"),t(a)])])]),J,e("blockquote",null,[e("p",null,[n("💻 Spring Bean 实例化示例源码："),e("a",L,[n("BeanInstantiationTests"),t(a)]),n("、"),e("a",M,[n("BeanInstantiationSpecialTests"),t(a)])])]),X,e("blockquote",null,[e("p",null,[n("💻 Spring Bean 初始化和销毁示例源码："),e("a",F,[n("BeanInitDestroyTests"),t(a)])])]),R,e("table",null,[G,e("tbody",null,[e("tr",null,[e("td",O,[e("a",V,[n("singleton"),t(a)])]),E]),e("tr",null,[e("td",H,[e("a",U,[n("prototype"),t(a)])]),W]),e("tr",null,[e("td",K,[e("a",Q,[n("request"),t(a)])]),Y]),e("tr",null,[e("td",Z,[e("a",$,[n("session"),t(a)])]),ee]),e("tr",null,[e("td",ne,[e("a",ae,[n("application"),t(a)])]),te]),e("tr",null,[e("td",oe,[e("a",ie,[n("websocket"),t(a)])]),re])])]),se,e("ul",null,[e("li",null,[e("a",le,[n("Spring 官方文档之 Core Technologies"),t(a)])]),e("li",null,[e("a",ce,[n("《小马哥讲 Spring 核心编程思想》"),t(a)])])])])}const fe=i(c,[["render",de],["__file","01.SpringBean.html.vue"]]);export{fe as default};
