import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o,c as l,a as t,b as r,d as i,e as d}from"./app-d8d56f9e.js";const s={},p=d('<h1 id="spring-注解" tabindex="-1"><a class="header-anchor" href="#spring-注解" aria-hidden="true">#</a> Spring 注解</h1><h2 id="spring-注解驱动编程发展历程" tabindex="-1"><a class="header-anchor" href="#spring-注解驱动编程发展历程" aria-hidden="true">#</a> Spring 注解驱动编程发展历程</h2><ul><li>注解驱动启蒙时代：Spring Framework 1.x</li><li>注解驱动过渡时代：Spring Framework 2.x</li><li>注解驱动黄金时代：Spring Framework 3.x</li><li>注解驱动完善时代：Spring Framework 4.x</li><li>注解驱动当下时代：Spring Framework 5.x</li></ul><h2 id="spring-核心注解场景分类" tabindex="-1"><a class="header-anchor" href="#spring-核心注解场景分类" aria-hidden="true">#</a> Spring 核心注解场景分类</h2><p>Spring 模式注解</p><table><thead><tr><th>Spring 注解</th><th>场景说明</th><th>起始版本</th></tr></thead><tbody><tr><td>@Repository</td><td>数据仓储模式注解</td><td>2.0</td></tr><tr><td>@Component</td><td>通用组件模式注解</td><td>2.5</td></tr><tr><td>@Service</td><td>服务模式注解</td><td>2.5</td></tr><tr><td>@Controller</td><td>Web 控制器模式注解</td><td>2.5</td></tr><tr><td>@Configuration</td><td>配置类模式注解</td><td>3.0</td></tr></tbody></table><p>装配注解</p><table><thead><tr><th>Spring 注解</th><th>场景说明</th><th>起始版本</th></tr></thead><tbody><tr><td>@ImportResource</td><td>替换 XML 元素 <code>&lt;import&gt;</code></td><td>2.5</td></tr><tr><td>@Import</td><td>导入 Configuration 类</td><td>2.5</td></tr><tr><td>@ComponentScan</td><td>扫描指定 package 下标注 Spring 模式注解的类</td><td>3.1</td></tr></tbody></table><p>依赖注入注解</p><table><thead><tr><th>Spring 注解</th><th>场景说明</th><th>起始版本</th></tr></thead><tbody><tr><td>@Autowired</td><td>Bean 依赖注入，支持多种依赖查找方式</td><td>2.5</td></tr><tr><td>@Qualifier</td><td>细粒度的 @Autowired 依赖查找</td><td>2.5</td></tr></tbody></table><h2 id="spring-注解编程模型" tabindex="-1"><a class="header-anchor" href="#spring-注解编程模型" aria-hidden="true">#</a> Spring 注解编程模型</h2><ul><li>元注解（Meta-Annotations）</li><li>Spring 模式注解（Stereotype Annotations）</li><li>Spring 组合注解（Composed Annotations）</li><li>Spring 注解属性别名和覆盖（Attribute Aliases and Overrides）</li></ul><h2 id="spring-元注解-meta-annotations" tabindex="-1"><a class="header-anchor" href="#spring-元注解-meta-annotations" aria-hidden="true">#</a> Spring 元注解（Meta-Annotations）</h2><ul><li>java.lang.annotation.Documented</li><li>java.lang.annotation.Inherited</li><li>java.lang.annotation.Repeatable</li></ul><h2 id="spring-模式注解-stereotype-annotations" tabindex="-1"><a class="header-anchor" href="#spring-模式注解-stereotype-annotations" aria-hidden="true">#</a> Spring 模式注解（Stereotype Annotations）</h2><p>理解 @Component “派⽣性”：元标注 @Component 的注解在 XML 元素 <a href="context:component-scan">context:component-scan</a> 或注解 @ComponentScan 扫描中“派生”了 @Component 的特性，并且从 Spring Framework 4.0 开始支持多层次“派⽣性”。</p><p>举例说明：</p><ul><li>@Repository</li><li>@Service</li><li>@Controller</li><li>@Configuration</li><li>@SpringBootConfiguration（Spring Boot）</li></ul><p>@Component “派⽣性”原理</p><ul><li>核心组件 - org.springframework.context.annotation.ClassPathBeanDefinitionScanner</li><li>org.springframework.context.annotation.ClassPathScanningCandidateComponentProvider</li><li>资源处理 - org.springframework.core.io.support.ResourcePatternResolver</li><li>资源-类元信息</li><li>org.springframework.core.type.classreading.MetadataReaderFactory</li><li>类元信息 - org.springframework.core.type.ClassMetadata</li><li>ASM 实现 - org.springframework.core.type.classreading.ClassMetadataReadingVisitor</li><li>反射实现 - org.springframework.core.type.StandardAnnotationMetadata</li><li>注解元信息 - org.springframework.core.type.AnnotationMetadata</li><li>ASM 实现 - org.springframework.core.type.classreading.AnnotationMetadataReadingVisitor</li><li>反射实现 - org.springframework.core.type.StandardAnnotationMetadata</li></ul><h2 id="spring-组合注解-composed-annotations" tabindex="-1"><a class="header-anchor" href="#spring-组合注解-composed-annotations" aria-hidden="true">#</a> Spring 组合注解（Composed Annotations）</h2><p>Spring 组合注解（Composed Annotations）中的元注允许是 Spring 模式注解（Stereotype Annotation）与其他 Spring 功能性注解的任意组合。</p><h2 id="spring-注解属性别名-attribute-aliases" tabindex="-1"><a class="header-anchor" href="#spring-注解属性别名-attribute-aliases" aria-hidden="true">#</a> Spring 注解属性别名（Attribute Aliases）</h2><h2 id="spring-注解属性覆盖-attribute-overrides" tabindex="-1"><a class="header-anchor" href="#spring-注解属性覆盖-attribute-overrides" aria-hidden="true">#</a> Spring 注解属性覆盖（Attribute Overrides）</h2><h2 id="spring-enable-模块驱动" tabindex="-1"><a class="header-anchor" href="#spring-enable-模块驱动" aria-hidden="true">#</a> Spring @Enable 模块驱动</h2><p>@Enable 模块驱动</p><p>@Enable 模块驱动是以 @Enable 为前缀的注解驱动编程模型。所谓“模块”是指具备相同领域的功能组件集合，组合所形成⼀个独⽴的单元。⽐如 Web MVC 模块、AspectJ 代理模块、Caching（缓存）模块、JMX（Java 管理扩展）模块、Async（异步处理）模块等。</p><p>举例说明</p><ul><li>@EnableWebMvc</li><li>@EnableTransactionManagement</li><li>@EnableCaching</li><li>@EnableMBeanExport</li><li>@EnableAsync</li></ul><p>@Enable 模块驱动编程模式</p><ul><li>驱动注解：@EnableXXX</li><li>导入注解：@Import 具体实现</li><li>具体实现</li><li>基于 Configuration Class</li><li>基于 ImportSelector 接口实现</li><li>基于 ImportBeanDefinitionRegistrar 接口实现</li></ul><h2 id="spring-条件注解" tabindex="-1"><a class="header-anchor" href="#spring-条件注解" aria-hidden="true">#</a> Spring 条件注解</h2><p>基于配置条件注解 - @org.springframework.context.annotation.Profile</p><ul><li>关联对象 - org.springframework.core.env.Environment 中的 Profiles</li><li>实现变化：从 Spring 4.0 开始，@Profile 基于 @Conditional 实现</li></ul><p>基于编程条件注解 - @org.springframework.context.annotation.Conditional</p><ul><li>关联对象 - org.springframework.context.annotation.Condition 具体实现</li></ul><p>@Conditional 实现原理</p><ul><li>上下文对象 - org.springframework.context.annotation.ConditionContext</li><li>条件判断 - org.springframework.context.annotation.ConditionEvaluator</li><li>配置阶段 - org.springframework.context.annotation.ConfigurationCondition.ConfigurationPhase</li><li>判断入口 <ul><li>org.springframework.context.annotation.ConfigurationClassPostProcessor</li><li>org.springframework.context.annotation.ConfigurationClassParser</li></ul></li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',39),g={href:"https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans",target:"_blank",rel:"noopener noreferrer"},h={href:"https://time.geekbang.org/course/intro/265",target:"_blank",rel:"noopener noreferrer"};function c(u,m){const n=a("ExternalLinkIcon");return o(),l("div",null,[p,t("ul",null,[t("li",null,[t("a",g,[r("Spring 官方文档之 Core Technologies"),i(n)])]),t("li",null,[t("a",h,[r("《小马哥讲 Spring 核心编程思想》"),i(n)])])])])}const S=e(s,[["render",c],["__file","28.Spring注解.html.vue"]]);export{S as default};
