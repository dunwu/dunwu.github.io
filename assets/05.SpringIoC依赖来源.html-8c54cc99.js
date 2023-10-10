import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as a,c as o,a as t,b as r,d,e as l}from"./app-29bcd084.js";const s={},c=l('<h1 id="spring-ioc-依赖来源" tabindex="-1"><a class="header-anchor" href="#spring-ioc-依赖来源" aria-hidden="true">#</a> Spring IoC 依赖来源</h1><h2 id="依赖查找的来源" tabindex="-1"><a class="header-anchor" href="#依赖查找的来源" aria-hidden="true">#</a> 依赖查找的来源</h2><p>查找来源</p><table><thead><tr><th>来源</th><th>配置元数据</th></tr></thead><tbody><tr><td>Spring BeanDefinition</td><td><code>&lt;bean id =&quot;user&quot; class=&quot;xxx.xxx.User&quot;&gt;</code></td></tr><tr><td></td><td><code>@Bean public User user() {...}</code></td></tr><tr><td></td><td><code>BeanDefinitionBuilder</code></td></tr><tr><td>单例对象</td><td>API 实现</td></tr></tbody></table><p>Spring 內建 BeanDefintion</p><table><thead><tr><th>Bean 名称</th><th>Bean 实例</th><th>使用场景</th></tr></thead><tbody><tr><td>org.springframework.context.annotation.internalConfigurationAnnotationProcessor</td><td>ConfigurationClassPostProcessor 对象</td><td>处理 Spring 配置类</td></tr><tr><td>org.springframework.context.annotation.internalAutowiredAnnotationProcessor</td><td>AutowiredAnnotationBeanPostProcessor 对象</td><td>处理 @Autowired 以及 @Value 注解</td></tr><tr><td>org.springframework.context.annotation.internalCommonAnnotationProcessor</td><td>CommonAnnotationBeanPostProcessor 对象</td><td>（条件激活）处理 JSR-250 注解，如 @PostConstruct 等</td></tr><tr><td>org.springframework.context.event.internalEventListenerProcessor</td><td>EventListenerMethodProcessor 对象</td><td>处理标注 @EventListener 的 Spring 事件监听方法</td></tr></tbody></table><p>Spring 內建单例对象</p><table><thead><tr><th>Bean 名称</th><th>Bean 实例</th><th>使用场景</th></tr></thead><tbody><tr><td>environment</td><td>Environment 对象</td><td>外部化配置以及 Profiles</td></tr><tr><td>systemProperties</td><td>java.util.Properties 对象</td><td>Java 系统属性</td></tr><tr><td>systemEnvironment</td><td>java.util.Map 对象</td><td>操作系统环境变量</td></tr><tr><td>messageSource</td><td>MessageSource 对象</td><td>国际化文案</td></tr><tr><td>lifecycleProcessor</td><td>LifecycleProcessor 对象</td><td>Lifecycle Bean 处理器</td></tr><tr><td>applicationEventMulticaster</td><td>ApplicationEventMulticaster 对象</td><td>Spring 事件广播器</td></tr></tbody></table><h2 id="依赖注入的来源" tabindex="-1"><a class="header-anchor" href="#依赖注入的来源" aria-hidden="true">#</a> 依赖注入的来源</h2><table><thead><tr><th>来源</th><th>配置元数据</th></tr></thead><tbody><tr><td>Spring BeanDefinition</td><td><code>&lt;bean id =&quot;user&quot; class=&quot;xxx.xxx.User&quot;&gt;</code></td></tr><tr><td></td><td><code>@Bean public User user() {...}</code></td></tr><tr><td></td><td><code>BeanDefinitionBuilder</code></td></tr><tr><td>单例对象</td><td>API 实现</td></tr><tr><td>非 Spring 容器管理对象</td><td></td></tr></tbody></table><h2 id="spring-容器管理和游离对象" tabindex="-1"><a class="header-anchor" href="#spring-容器管理和游离对象" aria-hidden="true">#</a> Spring 容器管理和游离对象</h2><table><thead><tr><th>来源</th><th>Spring Bean 对象</th><th>生命周期管理</th><th>配置元信息</th><th>使用场景</th></tr></thead><tbody><tr><td>Spring BeanDefinition</td><td>是</td><td>是</td><td>有</td><td>依赖查找、依赖注入</td></tr><tr><td>单体对象</td><td>是</td><td>否</td><td>无</td><td>依赖查找、依赖注入</td></tr><tr><td>Resolvable Dependency</td><td>否</td><td>否</td><td>无</td><td>依赖注入</td></tr></tbody></table><h2 id="spring-beandefinition-作为依赖来源" tabindex="-1"><a class="header-anchor" href="#spring-beandefinition-作为依赖来源" aria-hidden="true">#</a> Spring BeanDefinition 作为依赖来源</h2><ul><li>元数据：<code>BeanDefinition</code></li><li>注册：<code>BeanDefinitionRegistry#registerBeanDefinition</code></li><li>类型：延迟和非延迟</li><li>顺序：Bean 生命周期顺序按照注册顺序</li></ul><h2 id="单例对象作为依赖来源" tabindex="-1"><a class="header-anchor" href="#单例对象作为依赖来源" aria-hidden="true">#</a> 单例对象作为依赖来源</h2><ul><li>要素 <ul><li>来源：外部普通 Java 对象（不一定是 POJO）</li><li>注册：<code>SingletonBeanRegistry#registerSingleton</code></li></ul></li><li>限制 <ul><li>无生命周期管理</li><li>无法实现延迟初始化 Bean</li></ul></li></ul><h2 id="非-spring-对象容器管理对象作为依赖来源" tabindex="-1"><a class="header-anchor" href="#非-spring-对象容器管理对象作为依赖来源" aria-hidden="true">#</a> 非 Spring 对象容器管理对象作为依赖来源</h2><ul><li>要素 <ul><li>注册：<code>ConfigurableListableBeanFactory#registerResolvableDependency</code></li></ul></li><li>限制 <ul><li>无生命周期管理</li><li>无法实现延迟初始化 Bean</li><li>无法通过依赖查找</li></ul></li></ul><h2 id="外部化配置作为依赖来源" tabindex="-1"><a class="header-anchor" href="#外部化配置作为依赖来源" aria-hidden="true">#</a> 外部化配置作为依赖来源</h2><ul><li>要素 <ul><li>类型：非常规 Spring 对象依赖来源</li></ul></li><li>限制 <ul><li>无生命周期管理</li><li>无法实现延迟初始化 Bean</li><li>无法通过依赖查找</li></ul></li></ul><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>注入和查找的依赖来源是否相同？</p><p>否，依赖查找的来源仅限于 Spring <code>BeanDefinition</code> 以及单例对象，而依赖注入的来源还包括 Resolvable Dependency 以及 <code>@Value</code> 所标注的外部化配置</p><p>单例对象能在 IoC 容器启动后注册吗？</p><p>可以的，单例对象的注册与 <code>BeanDefinition</code> 不同，<code>BeanDefinition</code> 会被 <code>ConfigurableListableBeanFactory#freezeConfiguration()</code> 方法影响，从而冻结注册，单例对象则没有这个限制。</p><p>Spring 依赖注入的来源有哪些？</p><ul><li>Spring <code>BeanDefinition</code></li><li>单例对象</li><li>Resolvable Dependency</li><li><code>@Value</code> 外部化配置</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',28),h={href:"https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans",target:"_blank",rel:"noopener noreferrer"},p={href:"https://time.geekbang.org/course/intro/265",target:"_blank",rel:"noopener noreferrer"};function u(g,f){const e=i("ExternalLinkIcon");return a(),o("div",null,[c,t("ul",null,[t("li",null,[t("a",h,[r("Spring 官方文档之 Core Technologies"),d(e)])]),t("li",null,[t("a",p,[r("《小马哥讲 Spring 核心编程思想》"),d(e)])])])])}const x=n(s,[["render",u],["__file","05.SpringIoC依赖来源.html.vue"]]);export{x as default};
