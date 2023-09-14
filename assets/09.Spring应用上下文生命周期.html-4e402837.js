import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o,c as l,a as e,b as a,d as r,e as s}from"./app-e12ad880.js";const c={},p=s('<h1 id="spring-应用上下文生命周期" tabindex="-1"><a class="header-anchor" href="#spring-应用上下文生命周期" aria-hidden="true">#</a> Spring 应用上下文生命周期</h1><h2 id="spring-应用上下文启动准备阶段" tabindex="-1"><a class="header-anchor" href="#spring-应用上下文启动准备阶段" aria-hidden="true">#</a> Spring 应用上下文启动准备阶段</h2><p>AbstractApplicationContext#prepareRefresh() 方法</p><ul><li>启动时间 - startupDate</li><li>状态标识 - closed(false)、active(true)</li><li>初始化 PropertySources - initPropertySources()</li><li>检验 Environment 中必须属性</li><li>初始化事件监听器集合</li><li>初始化早期 Spring 事件集合</li></ul><h2 id="beanfactory-创建阶段" tabindex="-1"><a class="header-anchor" href="#beanfactory-创建阶段" aria-hidden="true">#</a> BeanFactory 创建阶段</h2><p>AbstractApplicationContext#obtainFreshBeanFactory() 方法</p><ul><li>刷新 Spring 应用上下文底层 BeanFactory - refreshBeanFactory() <ul><li>销毁或关闭 BeanFactory，如果已存在的话</li><li>创建 BeanFactory - createBeanFactory()</li><li>设置 BeanFactory Id</li><li>设置“是否允许 BeanDefinition 重复定义” - customizeBeanFactory(DefaultListableBeanFactory)</li><li>设置“是否允许循环引用（依赖）” - customizeBeanFactory(DefaultListableBeanFactory)</li><li>加载 BeanDefinition - loadBeanDefinitions(DefaultListableBeanFactory) 方法</li><li>关联新建 BeanFactory 到 Spring 应用上下文</li></ul></li><li>返回 Spring 应用上下文底层 BeanFactory - getBeanFactory()</li></ul><h2 id="beanfactory-准备阶段" tabindex="-1"><a class="header-anchor" href="#beanfactory-准备阶段" aria-hidden="true">#</a> BeanFactory 准备阶段</h2><p>AbstractApplicationContext#prepareBeanFactory(ConfigurableListableBeanFactory) 方法</p><ul><li>关联 ClassLoader</li><li>设置 Bean 表达式处理器</li><li>添加 PropertyEditorRegistrar 实现 - ResourceEditorRegistrar</li><li>添加 Aware 回调接口 BeanPostProcessor 实现 - ApplicationContextAwareProcessor</li><li>忽略 Aware 回调接口作为依赖注入接口</li><li>注册 ResolvableDependency 对象 - BeanFactory、ResourceLoader、ApplicationEventPublisher 以及 ApplicationContext</li><li>注册 ApplicationListenerDetector 对象</li><li>注册 LoadTimeWeaverAwareProcessor 对象</li><li>注册单例对象 - Environment、Java System Properties 以及 OS 环境变量</li></ul><h2 id="beanfactory-后置处理阶段" tabindex="-1"><a class="header-anchor" href="#beanfactory-后置处理阶段" aria-hidden="true">#</a> BeanFactory 后置处理阶段</h2><ul><li>AbstractApplicationContext#postProcessBeanFactory(ConfigurableListableBeanFactory) 方法 <ul><li>由子类覆盖该方法</li></ul></li><li>AbstractApplicationContext#invokeBeanFactoryPostProcessors(ConfigurableListableBeanFactory 方法 <ul><li>调用 BeanFactoryPostProcessor 或 BeanDefinitionRegistry 后置处理方法</li><li>注册 LoadTimeWeaverAwareProcessor 对象</li></ul></li></ul><h2 id="beanfactory-注册-beanpostprocessor-阶段" tabindex="-1"><a class="header-anchor" href="#beanfactory-注册-beanpostprocessor-阶段" aria-hidden="true">#</a> BeanFactory 注册 BeanPostProcessor 阶段</h2><p>AbstractApplicationContext#registerBeanPostProcessors(ConfigurableListableBeanFactory) 方法</p><ul><li>注册 PriorityOrdered 类型的 BeanPostProcessor Beans</li><li>注册 Ordered 类型的 BeanPostProcessor Beans</li><li>注册普通 BeanPostProcessor Beans</li><li>注册 MergedBeanDefinitionPostProcessor Beans</li><li>注册 ApplicationListenerDetector 对象</li></ul><h2 id="初始化內建-bean-messagesource" tabindex="-1"><a class="header-anchor" href="#初始化內建-bean-messagesource" aria-hidden="true">#</a> 初始化內建 Bean：MessageSource</h2><p>AbstractApplicationContext#initMessageSource() 方法</p><h2 id="初始化內建-bean-spring-事件广播器" tabindex="-1"><a class="header-anchor" href="#初始化內建-bean-spring-事件广播器" aria-hidden="true">#</a> 初始化內建 Bean：Spring 事件广播器</h2><p>AbstractApplicationContext#initApplicationEventMulticaster() 方法</p><h2 id="spring-应用上下文刷新阶段" tabindex="-1"><a class="header-anchor" href="#spring-应用上下文刷新阶段" aria-hidden="true">#</a> Spring 应用上下文刷新阶段</h2><p>AbstractApplicationContext#onRefresh() 方法</p><p>子类覆盖该方法</p><ul><li>org.springframework.web.context.support.AbstractRefreshableWebApplicationContext#onRefresh()</li><li>org.springframework.web.context.support.GenericWebApplicationContext#onRefresh()</li><li>org.springframework.boot.web.reactive.context.ReactiveWebServerApplicationContext#onRefresh()</li><li>org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext#onRefresh()</li><li>org.springframework.web.context.support.StaticWebApplicationContext#onRefresh()</li></ul><h2 id="spring-事件监听器注册阶段" tabindex="-1"><a class="header-anchor" href="#spring-事件监听器注册阶段" aria-hidden="true">#</a> Spring 事件监听器注册阶段</h2><p>AbstractApplicationContext#registerListeners() 方法</p><ul><li>添加当前应用上下文所关联的 ApplicationListener 对象（集合）</li><li>添加 BeanFactory 所注册 ApplicationListener Beans</li><li>广播早期 Spring 事件</li></ul><h2 id="beanfactory-初始化完成阶段" tabindex="-1"><a class="header-anchor" href="#beanfactory-初始化完成阶段" aria-hidden="true">#</a> BeanFactory 初始化完成阶段</h2><p>AbstractApplicationContext#finishBeanFactoryInitialization(ConfigurableListableBeanFactory) 方法</p><ul><li>BeanFactory 关联 ConversionService Bean，如果存在</li><li>添加 StringValueResolver 对象</li><li>依赖查找 LoadTimeWeaverAware Bean</li><li>BeanFactory 临时 ClassLoader 置为 null</li><li>BeanFactory 冻结配置</li><li>BeanFactory 初始化非延迟单例 Beans</li></ul><h2 id="spring-应用上下刷新完成阶段" tabindex="-1"><a class="header-anchor" href="#spring-应用上下刷新完成阶段" aria-hidden="true">#</a> Spring 应用上下刷新完成阶段</h2><p>AbstractApplicationContext#finishRefresh() 方法</p><ul><li>清除 ResourceLoader 缓存 - clearResourceCaches() @since 5.0</li><li>初始化 LifecycleProcessor 对象 - initLifecycleProcessor()</li><li>调用 LifecycleProcessor#onRefresh() 方法</li><li>发布 Spring 应用上下文已刷新事件 - ContextRefreshedEvent</li><li>向 MBeanServer 托管 Live Beans</li></ul><h2 id="spring-应用上下文启动阶段" tabindex="-1"><a class="header-anchor" href="#spring-应用上下文启动阶段" aria-hidden="true">#</a> Spring 应用上下文启动阶段</h2><p>AbstractApplicationContext#start() 方法</p><ul><li>启动 LifecycleProcessor <ul><li>依赖查找 Lifecycle Beans</li><li>启动 Lifecycle Beans</li></ul></li><li>发布 Spring 应用上下文已启动事件 - ContextStartedEvent</li></ul><h2 id="spring-应用上下文停止阶段" tabindex="-1"><a class="header-anchor" href="#spring-应用上下文停止阶段" aria-hidden="true">#</a> Spring 应用上下文停止阶段</h2><p>AbstractApplicationContext#stop() 方法</p><ul><li>停止 LifecycleProcessor <ul><li>依赖查找 Lifecycle Beans</li><li>停止 Lifecycle Beans</li></ul></li><li>发布 Spring 应用上下文已停止事件 - ContextStoppedEvent</li></ul><h2 id="spring-应用上下文关闭阶段" tabindex="-1"><a class="header-anchor" href="#spring-应用上下文关闭阶段" aria-hidden="true">#</a> Spring 应用上下文关闭阶段</h2><p>AbstractApplicationContext#close() 方法</p><ul><li>状态标识：active(false)、closed(true)</li><li>Live Beans JMX 撤销托管 <ul><li>LiveBeansView.unregisterApplicationContext(ConfigurableApplicationContext)</li></ul></li><li>发布 Spring 应用上下文已关闭事件 - ContextClosedEvent</li><li>关闭 LifecycleProcessor <ul><li>依赖查找 Lifecycle Beans</li><li>停止 Lifecycle Beans</li></ul></li><li>销毁 Spring Beans</li><li>关闭 BeanFactory</li><li>回调 onClose()</li><li>注册 Shutdown Hook 线程（如果曾注册）</li></ul><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p><strong>Spring 应用上下文生命周期有哪些阶段</strong>？</p><ul><li>刷新阶段 - ConfigurableApplicationContext#refresh()</li><li>启动阶段 - ConfigurableApplicationContext#start()</li><li>停止阶段 - ConfigurableApplicationContext#stop()</li><li>关闭阶段 - ConfigurableApplicationContext#close()</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',45),h={href:"https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans",target:"_blank",rel:"noopener noreferrer"},d={href:"https://time.geekbang.org/course/intro/265",target:"_blank",rel:"noopener noreferrer"};function u(f,b){const i=n("ExternalLinkIcon");return o(),l("div",null,[p,e("ul",null,[e("li",null,[e("a",h,[a("Spring 官方文档之 Core Technologies"),r(i)])]),e("li",null,[e("a",d,[a("《小马哥讲 Spring 核心编程思想》"),r(i)])])])])}const y=t(c,[["render",u],["__file","09.Spring应用上下文生命周期.html.vue"]]);export{y as default};
