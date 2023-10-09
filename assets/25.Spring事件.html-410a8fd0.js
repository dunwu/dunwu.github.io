import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as l,c as o,a as t,b as i,d as r,e as d}from"./app-1f12e18b.js";const p={},c=d('<h1 id="spring-事件" tabindex="-1"><a class="header-anchor" href="#spring-事件" aria-hidden="true">#</a> Spring 事件</h1><h2 id="java-事件-监听器编程模型" tabindex="-1"><a class="header-anchor" href="#java-事件-监听器编程模型" aria-hidden="true">#</a> Java 事件/监听器编程模型</h2><p>设计模式 - 观察者模式扩展</p><ul><li>可观者对象（消息发送者） - java.util.Observable</li><li>观察者 - java.util.Observer</li></ul><p>标准化接口</p><ul><li>事件对象 - java.util.EventObject</li><li>事件监听器 - java.util.EventListener</li></ul><h2 id="面向接口的事件-监听器设计模式" tabindex="-1"><a class="header-anchor" href="#面向接口的事件-监听器设计模式" aria-hidden="true">#</a> 面向接口的事件/监听器设计模式</h2><p>事件/监听器场景举例</p><table><thead><tr><th>Java 技术规范</th><th>事件接口</th><th>监听器接口</th></tr></thead><tbody><tr><td>JavaBeans</td><td>java.beans.PropertyChangeEvent</td><td>java.beans.PropertyChangeListener</td></tr><tr><td>Java AWT</td><td>java.awt.event.MouseEvent</td><td>java.awt.event.MouseListener</td></tr><tr><td>Java Swing</td><td>javax.swing.event.MenuEvent</td><td>javax.swing.event.MenuListener</td></tr><tr><td>Java Preference</td><td>java.util.prefs.PreferenceChangeEvent</td><td>java.util.prefs.PreferenceChangeListener</td></tr></tbody></table><h2 id="面向注解的事件-监听器设计模式" tabindex="-1"><a class="header-anchor" href="#面向注解的事件-监听器设计模式" aria-hidden="true">#</a> 面向注解的事件/监听器设计模式</h2><p>事件/监听器注解场景举例</p><table><thead><tr><th>Java 技术规范</th><th>事件注解</th><th>监听器注解</th></tr></thead><tbody><tr><td>Servlet 3.0+</td><td></td><td>@javax.servlet.annotation.WebListener</td></tr><tr><td>JPA 1.0+</td><td>@javax.persistence.PostPersist</td><td></td></tr><tr><td>Java Common</td><td>@PostConstruct</td><td></td></tr><tr><td>EJB 3.0+</td><td>@javax.ejb.PrePassivate</td><td></td></tr><tr><td>JSF 2.0+</td><td>@javax.faces.event.ListenerFor</td><td></td></tr></tbody></table><h2 id="spring-标准事件-applicationevent" tabindex="-1"><a class="header-anchor" href="#spring-标准事件-applicationevent" aria-hidden="true">#</a> Spring 标准事件 - ApplicationEvent</h2><p>Java 标准事件 <code>java.util.EventObject</code> 扩展</p><ul><li>扩展特性：事件发生事件戳</li><li>Spring 应用上下文 ApplicationEvent 扩展 - <code>ApplicationContextEvent</code></li><li>Spring 应用上下文（ApplicationContext）作为事件源</li></ul><p>具体实现：</p><ul><li><code>org.springframework.context.event.ContextClosedEvent</code></li><li><code>org.springframework.context.event.ContextRefreshedEvent</code></li><li><code>org.springframework.context.event.ContextStartedEvent</code></li><li><code>org.springframework.context.event.ContextStoppedEvent</code></li></ul><h2 id="基于接口的-spring-事件监听器" tabindex="-1"><a class="header-anchor" href="#基于接口的-spring-事件监听器" aria-hidden="true">#</a> 基于接口的 Spring 事件监听器</h2><p>Java 标准事件监听器 <code>java.util.EventListener</code> 扩展</p><ul><li>扩展接口 - <code>org.springframework.context.ApplicationListener</code></li><li>设计特点：单一类型事件处理</li><li>处理方法：<code>onApplicationEvent(ApplicationEvent)</code></li><li>事件类型：<code>org.springframework.context.ApplicationEvent</code></li></ul><h2 id="基于注解的-spring-事件监听器" tabindex="-1"><a class="header-anchor" href="#基于注解的-spring-事件监听器" aria-hidden="true">#</a> 基于注解的 Spring 事件监听器</h2><p>Spring 注解 - <code>@org.springframework.context.event.EventListener</code></p><table><thead><tr><th>特性</th><th>说明</th></tr></thead><tbody><tr><td>设计特点</td><td>支持多 <code>ApplicationEvent</code> 类型，无需接口约束</td></tr><tr><td>注解目标</td><td>方法</td></tr><tr><td>是否支持异步执行</td><td>支持</td></tr><tr><td>是否支持泛型类型事件</td><td>支持</td></tr><tr><td>是指支持顺序控制</td><td>支持，配合 <code>@Order</code> 注解控制</td></tr></tbody></table><h2 id="注册-spring-applicationlistener" tabindex="-1"><a class="header-anchor" href="#注册-spring-applicationlistener" aria-hidden="true">#</a> 注册 Spring ApplicationListener</h2><ul><li>方法一：ApplicationListener 作为 Spring Bean 注册</li><li>方法二：通过 ConfigurableApplicationContext API 注册</li></ul><h2 id="spring-事件发布器" tabindex="-1"><a class="header-anchor" href="#spring-事件发布器" aria-hidden="true">#</a> Spring 事件发布器</h2><ul><li>方法一：通过 ApplicationEventPublisher 发布 Spring 事件 <ul><li>获取 ApplicationEventPublisher <ul><li>依赖注入</li></ul></li></ul></li><li>方法二：通过 ApplicationEventMulticaster 发布 Spring 事件 <ul><li>获取 ApplicationEventMulticaster <ul><li>依赖注入</li><li>依赖查找</li></ul></li></ul></li></ul><h2 id="spring-层次性上下文事件传播" tabindex="-1"><a class="header-anchor" href="#spring-层次性上下文事件传播" aria-hidden="true">#</a> Spring 层次性上下文事件传播</h2><ul><li>发生说明</li><li>当 Spring 应用出现多层次 Spring 应用上下文（ApplicationContext）时，如 Spring WebMVC、Spring Boot 或 Spring Cloud 场景下，由子 ApplicationContext 发起 Spring 事件可能会传递到其 Parent ApplicationContext（直到 Root）的过程</li><li>如何避免</li><li>定位 Spring 事件源（ApplicationContext）进行过滤处理</li></ul><h2 id="spring-内建事件" tabindex="-1"><a class="header-anchor" href="#spring-内建事件" aria-hidden="true">#</a> Spring 内建事件</h2><p>ApplicationContextEvent 派生事件</p><ul><li>ContextRefreshedEvent ：Spring 应用上下文就绪事件</li><li>ContextStartedEvent ：Spring 应用上下文启动事件</li><li>ContextStoppedEvent ：Spring 应用上下文停止事件</li><li>ContextClosedEvent ：Spring 应用上下文关闭事件</li></ul><h2 id="spring-4-2-payload-事件" tabindex="-1"><a class="header-anchor" href="#spring-4-2-payload-事件" aria-hidden="true">#</a> Spring 4.2 Payload 事件</h2><p>Spring Payload 事件 - org.springframework.context.PayloadApplicationEvent</p><ul><li>使用场景：简化 Spring 事件发送，关注事件源主体</li><li>发送方法：ApplicationEventPublisher#publishEvent(java.lang.Object)</li></ul><h2 id="自定义-spring-事件" tabindex="-1"><a class="header-anchor" href="#自定义-spring-事件" aria-hidden="true">#</a> 自定义 Spring 事件</h2><ul><li>扩展 org.springframework.context.ApplicationEvent</li><li>实现 org.springframework.context.ApplicationListener</li><li>注册 org.springframework.context.ApplicationListener</li></ul><h2 id="依赖注入-applicationeventpublisher" tabindex="-1"><a class="header-anchor" href="#依赖注入-applicationeventpublisher" aria-hidden="true">#</a> 依赖注入 ApplicationEventPublisher</h2><ul><li>通过 ApplicationEventPublisherAware 回调接口</li><li>通过 @Autowired ApplicationEventPublisher</li></ul><h2 id="依赖查找-applicationeventmulticaster" tabindex="-1"><a class="header-anchor" href="#依赖查找-applicationeventmulticaster" aria-hidden="true">#</a> 依赖查找 ApplicationEventMulticaster</h2><p>查找条件</p><ul><li>Bean 名称：&quot;applicationEventMulticaster&quot;</li><li>Bean 类型：org.springframework.context.event.ApplicationEventMulticaster</li></ul><h2 id="applicationeventpublisher-底层实现" tabindex="-1"><a class="header-anchor" href="#applicationeventpublisher-底层实现" aria-hidden="true">#</a> ApplicationEventPublisher 底层实现</h2><ul><li>接口：org.springframework.context.event.ApplicationEventMulticaster</li><li>抽象类：org.springframework.context.event.AbstractApplicationEventMulticaster</li><li>实现类：org.springframework.context.event.SimpleApplicationEventMulticaster</li></ul><h2 id="同步和异步-spring-事件广播" tabindex="-1"><a class="header-anchor" href="#同步和异步-spring-事件广播" aria-hidden="true">#</a> 同步和异步 Spring 事件广播</h2><p>基于实现类 - <code>org.springframework.context.event.SimpleApplicationEventMulticaster</code></p><ul><li>模式切换：<code>setTaskExecutor(java.util.concurrent.Executor)</code> 方法 <ul><li>默认模式：同步</li><li>异步模式：如 <code>java.util.concurrent.ThreadPoolExecutor</code></li></ul></li><li>设计缺陷：非基于接口契约编程</li></ul><p>基于注解 - <code>@org.springframework.context.event.EventListener</code></p><ul><li>模式切换 <ul><li>默认模式：同步</li><li>异步模式：标注 <code>@org.springframework.scheduling.annotation.Async</code></li></ul></li><li>实现限制：无法直接实现同步/异步动态切换</li></ul><h2 id="spring-4-1-事件异常处理" tabindex="-1"><a class="header-anchor" href="#spring-4-1-事件异常处理" aria-hidden="true">#</a> Spring 4.1 事件异常处理</h2><p>Spring 3.0 错误处理接口 - org.springframework.util.ErrorHandler</p><p>使用场景</p><ul><li>Spring 事件（Events） <ul><li>SimpleApplicationEventMulticaster Spring 4.1 开始支持</li></ul></li><li>Spring 本地调度（Scheduling） <ul><li>org.springframework.scheduling.concurrent.ConcurrentTaskScheduler</li><li>org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler</li></ul></li></ul><h2 id="spring-事件-监听器实现原理" tabindex="-1"><a class="header-anchor" href="#spring-事件-监听器实现原理" aria-hidden="true">#</a> Spring 事件/监听器实现原理</h2><p>核心类 - <code>org.springframework.context.event.SimpleApplicationEventMulticaster</code></p><ul><li>设计模式：观察者模式扩展 <ul><li>被观察者 - org.springframework.context.ApplicationListener <ul><li>API 添加</li><li>依赖查找</li></ul></li><li>通知对象 - org.springframework.context.ApplicationEvent</li></ul></li><li>执行模式：同步/异步</li><li>异常处理：org.springframework.util.ErrorHandler</li><li>泛型处理：org.springframework.core.ResolvableType</li></ul><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p><strong>Spring Boot 事件</strong></p><table><thead><tr><th>事件类型</th><th>发生时机</th></tr></thead><tbody><tr><td>ApplicationStartingEvent</td><td>当 Spring Boot 应用已启动时</td></tr><tr><td>ApplicationStartedEvent</td><td>当 Spring Boot 应用已启动时</td></tr><tr><td>ApplicationEnvironmentPreparedEvent</td><td>当 Spring Boot Environment 实例已准备时</td></tr><tr><td>ApplicationPreparedEvent</td><td>当 Spring Boot 应用预备时</td></tr><tr><td>ApplicationReadyEvent</td><td>当 Spring Boot 应用完全可用时</td></tr><tr><td>ApplicationFailedEvent</td><td>当 Spring Boot 应用启动失败时</td></tr></tbody></table><p><strong>Spring Cloud 事件</strong></p><table><thead><tr><th>事件类型</th><th>发生时机</th></tr></thead><tbody><tr><td>EnvironmentChangeEvent</td><td>当 Environment 示例配置属性发生变化时</td></tr><tr><td>HeartbeatEvent</td><td>当 DiscoveryClient 客户端发送心跳时</td></tr><tr><td>InstancePreRegisteredEvent</td><td>当服务实例注册前</td></tr><tr><td>InstanceRegisteredEvent</td><td>当服务实例注册后</td></tr><tr><td>RefreshEvent</td><td>当 RefreshEndpoint 被调用时</td></tr><tr><td>RefreshScopeRefreshedEvent</td><td>当 Refresh Scope Bean 刷新后</td></tr></tbody></table><p><strong>Spring 事件核心接口/组件</strong>？</p><ul><li>Spring 事件 - org.springframework.context.ApplicationEvent</li><li>Spring 事件监听器 - org.springframework.context.ApplicationListener</li><li>Spring 事件发布器 - org.springframework.context.ApplicationEventPublisher</li><li>Spring 事件广播器 - org.springframework.context.event.ApplicationEventMulticaster</li></ul><p><strong>Spring 同步和异步事件处理的使用场景</strong>？</p><ul><li>Spring 同步事件 - 绝大多数 Spring 使用场景，如 ContextRefreshedEvent</li><li>Spring 异步事件 - 主要 @EventListener 与 @Async 配合，实现异步处理，不阻塞主线程，比如长时间的数据计算任务等。不要轻易调整 SimpleApplicationEventMulticaster 中关联的 taskExecutor 对象，除非使用者非常了解 Spring 事件机制，否则容易出现异常行为。</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',66),s={href:"https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans",target:"_blank",rel:"noopener noreferrer"},h={href:"https://time.geekbang.org/course/intro/265",target:"_blank",rel:"noopener noreferrer"};function g(u,v){const e=a("ExternalLinkIcon");return l(),o("div",null,[c,t("ul",null,[t("li",null,[t("a",s,[i("Spring 官方文档之 Core Technologies"),r(e)])]),t("li",null,[t("a",h,[i("《小马哥讲 Spring 核心编程思想》"),r(e)])])])])}const x=n(p,[["render",g],["__file","25.Spring事件.html.vue"]]);export{x as default};
