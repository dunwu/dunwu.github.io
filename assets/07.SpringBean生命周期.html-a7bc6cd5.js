import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c as s,a as e,b as i,d as n,e as o}from"./app-29bcd084.js";const p={},d=o('<h1 id="spring-bean-生命周期" tabindex="-1"><a class="header-anchor" href="#spring-bean-生命周期" aria-hidden="true">#</a> Spring Bean 生命周期</h1><h2 id="spring-bean-元信息配置阶段" tabindex="-1"><a class="header-anchor" href="#spring-bean-元信息配置阶段" aria-hidden="true">#</a> Spring Bean 元信息配置阶段</h2><p>BeanDefinition 配置</p><ul><li>面向资源 <ul><li>XML 配置</li><li>Properties 资源配置</li></ul></li><li>面向注解</li><li>面向 API</li></ul><h2 id="spring-bean-元信息解析阶段" tabindex="-1"><a class="header-anchor" href="#spring-bean-元信息解析阶段" aria-hidden="true">#</a> Spring Bean 元信息解析阶段</h2><ul><li>面向资源 BeanDefinition 解析 <ul><li>BeanDefinitionReader</li><li>XML 解析器 - BeanDefinitionParser</li></ul></li><li>面向注解 BeanDefinition 解析 <ul><li>AnnotatedBeanDefinitionReader</li></ul></li></ul><h2 id="spring-bean-注册阶段" tabindex="-1"><a class="header-anchor" href="#spring-bean-注册阶段" aria-hidden="true">#</a> Spring Bean 注册阶段</h2><p>BeanDefinition 注册接口：BeanDefinitionRegistry</p><h2 id="spring-beandefinition-合并阶段" tabindex="-1"><a class="header-anchor" href="#spring-beandefinition-合并阶段" aria-hidden="true">#</a> Spring BeanDefinition 合并阶段</h2><p>BeanDefinition 合并</p><p>父子 BeanDefinition 合并</p><ul><li>当前 BeanFactory 查找</li><li>层次性 BeanFactory 查找</li></ul><h2 id="spring-bean-class-加载阶段" tabindex="-1"><a class="header-anchor" href="#spring-bean-class-加载阶段" aria-hidden="true">#</a> Spring Bean Class 加载阶段</h2><ul><li>ClassLoader 类加载</li><li>Java Security 安全控制</li><li>ConfigurableBeanFactory 临时 ClassLoader</li></ul><h2 id="spring-bean-实例化前阶段" tabindex="-1"><a class="header-anchor" href="#spring-bean-实例化前阶段" aria-hidden="true">#</a> Spring Bean 实例化前阶段</h2><p>实例化方式</p><ul><li>传统实例化方式：实例化策略（InstantiationStrategy）</li><li>构造器依赖注入</li></ul><h2 id="spring-bean-实例化阶段" tabindex="-1"><a class="header-anchor" href="#spring-bean-实例化阶段" aria-hidden="true">#</a> Spring Bean 实例化阶段</h2><p>非主流生命周期 - Bean 实例化前阶段</p><p>InstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation</p><h2 id="spring-bean-实例化后阶段" tabindex="-1"><a class="header-anchor" href="#spring-bean-实例化后阶段" aria-hidden="true">#</a> Spring Bean 实例化后阶段</h2><p>Bean 属性赋值（Populate）判断</p><p>InstantiationAwareBeanPostProcessor#postProcessAfterInstantiation</p><h2 id="spring-bean-属性赋值前阶段" tabindex="-1"><a class="header-anchor" href="#spring-bean-属性赋值前阶段" aria-hidden="true">#</a> Spring Bean 属性赋值前阶段</h2><ul><li>Bean 属性值元信息 <ul><li>PropertyValues</li></ul></li><li>Bean 属性赋值前回调 <ul><li>Spring 1.2 - 5.0：InstantiationAwareBeanPostProcessor#postProcessPropertyValues</li><li>Spring 5.1：InstantiationAwareBeanPostProcessor#postProcessProperties</li></ul></li></ul><h2 id="spring-bean-aware-接口回调阶段" tabindex="-1"><a class="header-anchor" href="#spring-bean-aware-接口回调阶段" aria-hidden="true">#</a> Spring Bean Aware 接口回调阶段</h2><p>Spring Aware 接口：</p><ul><li>BeanNameAware</li><li>BeanClassLoaderAware</li><li>BeanFactoryAware</li><li>EnvironmentAware</li><li>EmbeddedValueResolverAware</li><li>ResourceLoaderAware</li><li>ApplicationEventPublisherAware</li><li>MessageSourceAware</li><li>ApplicationContextAware</li></ul><h2 id="spring-bean-初始化前阶段" tabindex="-1"><a class="header-anchor" href="#spring-bean-初始化前阶段" aria-hidden="true">#</a> Spring Bean 初始化前阶段</h2><p>已完成：</p><ul><li><p>Bean 实例化</p></li><li><p>Bean 属性赋值</p></li><li><p>Bean Aware 接口回调</p></li></ul><p>方法回调：</p><ul><li>BeanPostProcessor#postProcessBeforeInitialization</li></ul><h2 id="spring-bean-初始化阶段" tabindex="-1"><a class="header-anchor" href="#spring-bean-初始化阶段" aria-hidden="true">#</a> Spring Bean 初始化阶段</h2><p>Bean 初始化（Initialization）</p><ul><li>@PostConstruct 标注方法</li><li>实现 InitializingBean 接口的 afterPropertiesSet() 方法</li><li>自定义初始化方法</li></ul><h2 id="spring-bean-初始化后阶段" tabindex="-1"><a class="header-anchor" href="#spring-bean-初始化后阶段" aria-hidden="true">#</a> Spring Bean 初始化后阶段</h2><p>方法回调：BeanPostProcessor#postProcessAfterInitialization</p><h2 id="spring-bean-初始化完成阶段" tabindex="-1"><a class="header-anchor" href="#spring-bean-初始化完成阶段" aria-hidden="true">#</a> Spring Bean 初始化完成阶段</h2><p>方法回调：Spring 4.1 +：SmartInitializingSingleton#afterSingletonsInstantiated</p><h2 id="spring-bean-销毁前阶段" tabindex="-1"><a class="header-anchor" href="#spring-bean-销毁前阶段" aria-hidden="true">#</a> Spring Bean 销毁前阶段</h2><p>方法回调：DestructionAwareBeanPostProcessor#postProcessBeforeDestruction</p><h2 id="spring-bean-销毁阶段" tabindex="-1"><a class="header-anchor" href="#spring-bean-销毁阶段" aria-hidden="true">#</a> Spring Bean 销毁阶段</h2><p>Bean 销毁（Destroy）</p><ul><li>@PreDestroy 标注方法</li><li>实现 DisposableBean 接口的 destroy() 方法</li><li>自定义销毁方法</li></ul><h2 id="spring-bean-垃圾收集" tabindex="-1"><a class="header-anchor" href="#spring-bean-垃圾收集" aria-hidden="true">#</a> Spring Bean 垃圾收集</h2><p>Bean 垃圾回收（GC）</p><ul><li>关闭 Spring 容器（应用上下文）</li><li>执行 GC</li><li>Spring Bean 覆盖的 finalize() 方法被回调</li></ul><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p><strong>BeanPostProcessor 的使用场景有哪些</strong>？</p><p>BeanPostProcessor 提供 Spring Bean 初始化前和初始化后的生命周期回调，分别对应 postProcessBeforeInitialization 以及 postProcessAfterInitialization 方法，允许对关心的 Bean 进行扩展，甚至是替换。</p><p>加分项：其中，ApplicationContext 相关的 Aware 回调也是基于 BeanPostProcessor 实现，即 ApplicationContextAwareProcessor。</p><p><strong>BeanFactoryPostProcessor 与 BeanPostProcessor 的区别</strong>？</p><p>BeanFactoryPostProcessor 是 Spring BeanFactory（实际为 ConfigurableListableBeanFactory） 的后置处理器，用于扩展 BeanFactory，或通过 BeanFactory 进行依赖查找和依赖注入。</p><p>BeanFactoryPostProcessor 必须有 Spring ApplicationContext 执行，BeanFactory 无法与其直接交互。</p><p>而 BeanPostProcessor 则直接与 BeanFactory 关联，属于 N 对 1 的关系。</p><p><strong>BeanFactory 是怎样处理 Bean 生命周期</strong>？</p><p>BeanFactory 的默认实现为 <code>DefaultListableBeanFactory</code>，其中 Bean生命周期与方法映射如下：</p><ul><li>BeanDefinition 注册阶段 - registerBeanDefinition</li><li>BeanDefinition 合并阶段 - getMergedBeanDefinition</li><li>Bean 实例化前阶段 - resolveBeforeInstantiation</li><li>Bean 实例化阶段 - createBeanInstance</li><li>Bean 初始化后阶段 - populateBean</li><li>Bean 属性赋值前阶段 - populateBean</li><li>Bean 属性赋值阶段 - populateBean</li><li>Bean Aware 接口回调阶段 - initializeBean</li><li>Bean 初始化前阶段 - initializeBean</li><li>Bean 初始化阶段 - initializeBean</li><li>Bean 初始化后阶段 - initializeBean</li><li>Bean 初始化完成阶段 - preInstantiateSingletons</li><li>Bean 销毁前阶段 - destroyBean</li><li>Bean 销毁阶段 - destroyBean</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',60),h={href:"https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans",target:"_blank",rel:"noopener noreferrer"},c={href:"https://time.geekbang.org/course/intro/265",target:"_blank",rel:"noopener noreferrer"};function B(g,u){const a=t("ExternalLinkIcon");return l(),s("div",null,[d,e("ul",null,[e("li",null,[e("a",h,[i("Spring 官方文档之 Core Technologies"),n(a)])]),e("li",null,[e("a",c,[i("《小马哥讲 Spring 核心编程思想》"),n(a)])])])])}const P=r(p,[["render",B],["__file","07.SpringBean生命周期.html.vue"]]);export{P as default};
