import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as d,c as s,a as t,b as e,d as n,e as i}from"./app-ee97b13a.js";const h={},p=i('<h1 id="spring-配置元数据" tabindex="-1"><a class="header-anchor" href="#spring-配置元数据" aria-hidden="true">#</a> Spring 配置元数据</h1><h2 id="spring-配置元信息" tabindex="-1"><a class="header-anchor" href="#spring-配置元信息" aria-hidden="true">#</a> Spring 配置元信息</h2><ul><li>Spring Bean 配置元信息 - BeanDefinition</li><li>Spring Bean 属性元信息 - PropertyValues</li><li>Spring 容器配置元信息</li><li>Spring 外部化配置元信息 - PropertySource</li><li>Spring Profile 元信息 - @Profile</li></ul><h2 id="spring-bean-配置元信息" tabindex="-1"><a class="header-anchor" href="#spring-bean-配置元信息" aria-hidden="true">#</a> Spring Bean 配置元信息</h2><p>Bean 配置元信息 - BeanDefinition</p><ul><li>GenericBeanDefinition：通用型 BeanDefinition</li><li>RootBeanDefinition：无 Parent 的 BeanDefinition 或者合并后 BeanDefinition</li><li>AnnotatedBeanDefinition：注解标注的 BeanDefinition</li></ul><h2 id="spring-bean-属性元信息" tabindex="-1"><a class="header-anchor" href="#spring-bean-属性元信息" aria-hidden="true">#</a> Spring Bean 属性元信息</h2><ul><li>Bean 属性元信息 - PropertyValues <ul><li>可修改实现 - MutablePropertyValues</li><li>元素成员 - PropertyValue</li></ul></li><li>Bean 属性上下文存储 - AttributeAccessor</li><li>Bean 元信息元素 - BeanMetadataElement</li></ul><h2 id="spring-容器配置元信息" tabindex="-1"><a class="header-anchor" href="#spring-容器配置元信息" aria-hidden="true">#</a> Spring 容器配置元信息</h2><p>Spring XML 配置元信息 - beans 元素相关</p><table><thead><tr><th>beans 元素属性</th><th>默认值</th><th>使用场景</th></tr></thead><tbody><tr><td>profile</td><td>null（留空）</td><td>Spring Profiles 配置值</td></tr><tr><td>default-lazy-init</td><td>default</td><td>当 outter beans “default-lazy-init” 属性存在时，继承该值，否则为“false”</td></tr><tr><td>default-merge</td><td>default</td><td>当 outter beans “default-merge” 属性存在时，继承该值，否则为“false”</td></tr><tr><td>default-autowire</td><td>default</td><td>当 outter beans “default-autowire” 属性存在时，继承该值，否则为“no”</td></tr><tr><td>default-autowire-candidates</td><td>null（留空）</td><td>默认 Spring Beans 名称 pattern</td></tr><tr><td>default-init-method</td><td>null（留空）</td><td>默认 Spring Beans 自定义初始化方法</td></tr><tr><td>default-destroy-method</td><td>null（留空）</td><td>默认 Spring Beans 自定义销毁方法</td></tr></tbody></table><p>Spring XML 配置元信息 - 应用上下文相关</p><table><thead><tr><th>XML 元素</th><th>使用场景</th></tr></thead><tbody><tr><td><code>&lt;context:annotation-config /&gt;</code></td><td>激活 Spring 注解驱动</td></tr><tr><td><code>&lt;context:component-scan /&gt;</code></td><td>Spring @Component 以及自定义注解扫描</td></tr><tr><td><code>&lt;context:load-time-weaver /&gt;</code></td><td>激活 Spring LoadTimeWeaver</td></tr><tr><td><code>&lt;context:mbean-export /&gt;</code></td><td>暴露 Spring Beans 作为 JMX Beans</td></tr><tr><td><code>&lt;context:mbean-server /&gt;</code></td><td>将当前平台作为 MBeanServer</td></tr><tr><td><code>&lt;context:property-placeholder /&gt;</code></td><td>加载外部化配置资源作为 Spring 属性配</td></tr><tr><td><code>&lt;context:property-override /&gt;</code></td><td>利用外部化配置资源覆盖 Spring 属</td></tr></tbody></table><h2 id="基于-xml-文件装载-spring-bean-配置元信息" tabindex="-1"><a class="header-anchor" href="#基于-xml-文件装载-spring-bean-配置元信息" aria-hidden="true">#</a> 基于 XML 文件装载 Spring Bean 配置元信息</h2><p>底层实现 - XmlBeanDefinitionReader</p><table><thead><tr><th>XML 元素</th><th>使用场景</th></tr></thead><tbody><tr><td><code>&lt;beans:beans /&gt;</code></td><td>单 XML 资源下的多个 Spring Beans 配置</td></tr><tr><td><code>&lt;beans:bean /&gt;</code></td><td>单个 Spring Bean 定义（BeanDefinition）配置</td></tr><tr><td><code>&lt;beans:alias /&gt;</code></td><td>为 Spring Bean 定义（BeanDefinition）映射别名</td></tr><tr><td><code>&lt;beans:import /&gt;</code></td><td>加载外部 Spring XML 配置资源</td></tr></tbody></table><h2 id="基于-properties-文件装载-spring-bean-配置元信息" tabindex="-1"><a class="header-anchor" href="#基于-properties-文件装载-spring-bean-配置元信息" aria-hidden="true">#</a> 基于 Properties 文件装载 Spring Bean 配置元信息</h2><p>底层实现 - PropertiesBeanDefinitionReader</p>',18),c=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Properties 属性名"),t("th",null,"使用场景")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"class")]),t("td",null,"Bean 类全称限定名")]),t("tr",null,[t("td",null,[t("code",null,"abstract")]),t("td",null,"是否为抽象的 BeanDefinition")]),t("tr",null,[t("td",null,[t("code",null,"parent")]),t("td",null,"指定 parent BeanDefinition 名称")]),t("tr",null,[t("td",null,[t("code",null,"lazy-init")]),t("td",null,"是否为延迟初始化")]),t("tr",null,[t("td",null,[t("code",null,"ref")]),t("td",null,"引用其他 Bean 的名称")]),t("tr",null,[t("td",null,[t("code",null,"scope")]),t("td",null,"设置 Bean 的 scope 属性")]),t("tr",null,[t("td",{n:""},"$"),t("td",null,"n 表示第 n+1 个构造器参数")])])],-1),u=i('<h2 id="基于-java-注解装载-spring-bean-配置元信息" tabindex="-1"><a class="header-anchor" href="#基于-java-注解装载-spring-bean-配置元信息" aria-hidden="true">#</a> 基于 Java 注解装载 Spring Bean 配置元信息</h2><p>Spring 模式注解</p><table><thead><tr><th>Spring 注解</th><th>场景说明</th><th>起始版本</th></tr></thead><tbody><tr><td><code>@Repository</code></td><td>数据仓储模式注解</td><td>2.0</td></tr><tr><td><code>@Component</code></td><td>通用组件模式注解</td><td>2.5</td></tr><tr><td><code>@Service</code></td><td>服务模式注解</td><td>2.5</td></tr><tr><td><code>@Controller</code></td><td>Web 控制器模式注解</td><td>2.5</td></tr><tr><td><code>@Configuration</code></td><td>配置类模式注解</td><td>3.0</td></tr></tbody></table><p>Spring Bean 定义注解</p><p>| Spring 注解 | 场景说明 | 起始版本 |<br> | ------------ | ------------------------------------------ | ----------- | --- |<br> | <code>@Bean</code> | 替换 XML 元素 <code>&lt;bean&gt;</code> | 3.0 |<br> | <code>@DependsOn</code> | 替代 XML 属性 <code>&lt;bean depends-on=&quot;...&quot;/&gt;</code> | 3.0 |<br> | <code>@Lazy</code> | 替代 XML 属性 <code>&lt;bean lazy-init=&quot;true | falses&quot; /&gt;</code> | 3.0 |<br> | <code>@Primary</code> | 替换 XML 元素 <code>&lt;bean primary=&quot;true | false&quot; /&gt;</code> | 3.0 |<br> | <code>@Role</code> | 替换 XML 元素 <code>&lt;bean role=&quot;...&quot; /&gt;</code> | 3.1 |<br> | <code>@Lookup</code> | 替代 XML 属性 <code>&lt;bean lookup-method=&quot;...&quot;&gt;</code> | 4.1 |</p><p>Spring Bean 依赖注入注解</p><table><thead><tr><th>Spring 注解</th><th>场景说明</th><th>起始版本</th></tr></thead><tbody><tr><td><code>@Autowired</code></td><td>Bean 依赖注入，支持多种依赖查找方式</td><td>2.5</td></tr><tr><td><code>@Qualifier</code></td><td>细粒度的 @Autowired 依赖查找</td><td>2.5</td></tr></tbody></table><table><thead><tr><th>Java 注解</th><th>场景说明</th><th>起始版本</th></tr></thead><tbody><tr><td>@Resource</td><td>类似于 @Autowired</td><td>2.5</td></tr><tr><td>@Inject</td><td>类似于 @Autowired</td><td>2.5</td></tr></tbody></table><p>Spring Bean 条件装配注解</p><table><thead><tr><th>Spring 注解</th><th>场景说明</th><th>起始版本</th></tr></thead><tbody><tr><td>@Profile</td><td>配置化条件装配</td><td>3.1</td></tr><tr><td>@Conditional</td><td>编程条件装配</td><td>4.0</td></tr></tbody></table><p>Spring Bean 生命周期回调注解</p>',11),g=t("thead",null,[t("tr",null,[t("th",null,"Spring 注解"),t("th",null,"场景说明"),t("th",null,"起始版本")])],-1),f=t("td",null,"@PostConstruct",-1),b=t("td",null,"2.5",-1),_=t("td",null,"@PreDestroy",-1),m=t("td",null,"2.5",-1),w=i('<p>Spring BeanDefinition 解析与注册</p><table><thead><tr><th>Spring 注解</th><th>场景说明</th><th>起始版本</th></tr></thead><tbody><tr><td>XML 资源</td><td>XmlBeanDefinitionReader</td><td>1.0</td></tr><tr><td>Properties 资源</td><td>PropertiesBeanDefinitionReader</td><td>1.0</td></tr><tr><td>Java 注解</td><td>AnnotatedBeanDefinitionReader</td><td>3.0</td></tr></tbody></table><h2 id="spring-bean-配置元信息底层实现" tabindex="-1"><a class="header-anchor" href="#spring-bean-配置元信息底层实现" aria-hidden="true">#</a> Spring Bean 配置元信息底层实现</h2><h3 id="spring-xml-资源-beandefinition-解析与注册" tabindex="-1"><a class="header-anchor" href="#spring-xml-资源-beandefinition-解析与注册" aria-hidden="true">#</a> Spring XML 资源 BeanDefinition 解析与注册</h3><p>核心 API - XmlBeanDefinitionReader</p><ul><li>资源 - Resource</li><li>底层 - BeanDefinitionDocumentReader <ul><li>XML 解析 - Java DOM Level 3 API</li><li>BeanDefinition 解析 - BeanDefinitionParserDelegate</li><li>BeanDefinition 注册 - BeanDefinitionRegistry</li></ul></li></ul><h3 id="spring-properties-资源-beandefinition-解析与注册" tabindex="-1"><a class="header-anchor" href="#spring-properties-资源-beandefinition-解析与注册" aria-hidden="true">#</a> Spring Properties 资源 BeanDefinition 解析与注册</h3><p>核心 API - PropertiesBeanDefinitionReader</p><ul><li>资源 <ul><li>字节流 - Resource</li><li>字符流 - EncodedResouce</li></ul></li><li>底层 <ul><li>存储 - java.util.Properties</li><li>BeanDefinition 解析 - API 内部实现</li><li>BeanDefinition 注册 - BeanDefinitionRegistry</li></ul></li></ul><h3 id="spring-java-注册-beandefinition-解析与注册" tabindex="-1"><a class="header-anchor" href="#spring-java-注册-beandefinition-解析与注册" aria-hidden="true">#</a> Spring Java 注册 BeanDefinition 解析与注册</h3><p>核心 API - AnnotatedBeanDefinitionReader</p><ul><li>资源 <ul><li>类对象 - java.lang.Class</li></ul></li><li>底层 <ul><li>条件评估 - ConditionEvaluator</li><li>Bean 范围解析 - ScopeMetadataResolver</li><li>BeanDefinition 解析 - 内部 API 实现</li><li>BeanDefinition 处理 - AnnotationConfigUtils.processCommonDefinitionAnnotations</li><li>BeanDefinition 注册 - BeanDefinitionRegistry</li></ul></li></ul><h2 id="基于-xml-文件装载-spring-ioc-容器配置元信息" tabindex="-1"><a class="header-anchor" href="#基于-xml-文件装载-spring-ioc-容器配置元信息" aria-hidden="true">#</a> 基于 XML 文件装载 Spring IoC 容器配置元信息</h2><p>Spring IoC 容器相关 XML 配置</p>',14),x=t("thead",null,[t("tr",null,[t("th",null,"命名空间"),t("th",null,"所属模块"),t("th",null,"Schema 资源 URL")])],-1),B=t("td",null,"beans",-1),S=t("td",null,"spring-beans",-1),y={href:"https://www.springframework.org/schema/beans/spring-beans.xsd",target:"_blank",rel:"noopener noreferrer"},D=t("td",null,"context",-1),k=t("td",null,"spring-context",-1),P={href:"https://www.springframework.org/schema/context/spring-context.xsd",target:"_blank",rel:"noopener noreferrer"},L=t("td",null,"aop",-1),M=t("td",null,"spring-aop",-1),X={href:"https://www.springframework.org/schema/aop/spring-aop.xsd",target:"_blank",rel:"noopener noreferrer"},A=t("td",null,"tx",-1),v=t("td",null,"spring-tx",-1),C={href:"https://www.springframework.org/schema/tx/spring-tx.xsd",target:"_blank",rel:"noopener noreferrer"},R=t("td",null,"util",-1),I=t("td",null,"spring-beans",-1),E={href:"https://www.springframework.org/schema/util/spring-util.xsd",target:"_blank",rel:"noopener noreferrer"},q=t("td",null,"tool",-1),j=t("td",null,"spring-beans",-1),J={href:"https://www.springframework.org/schema/tool/spring-tool.xsd",target:"_blank",rel:"noopener noreferrer"},V=i('<h2 id="基于-java-注解装载-spring-ioc-容器配置元信息" tabindex="-1"><a class="header-anchor" href="#基于-java-注解装载-spring-ioc-容器配置元信息" aria-hidden="true">#</a> 基于 Java 注解装载 Spring IoC 容器配置元信息</h2><p>Spring IoC 容器装配注解</p><table><thead><tr><th>Spring 注解</th><th>场景说明</th><th>起始版本</th></tr></thead><tbody><tr><td>@ImportResource</td><td>替换 XML 元素 <code>&lt;import&gt;</code></td><td>3.0</td></tr><tr><td>@Import</td><td>导入 Configuration Class</td><td>3.0</td></tr><tr><td>@ComponentScan</td><td>扫描指定 package 下标注 Spring 模式注解的类</td><td>3.1</td></tr></tbody></table><p>Spring IoC 配属属性注解</p><table><thead><tr><th>Spring 注解</th><th>场景说明</th><th>起始版本</th></tr></thead><tbody><tr><td>@PropertySource</td><td>配置属性抽象 PropertySource 注解</td><td>3.1</td></tr><tr><td>@PropertySources</td><td>@PropertySource 集合注解</td><td>4.0</td></tr></tbody></table><h2 id="基于-extensible-xml-authoring-扩展-springxml-元素" tabindex="-1"><a class="header-anchor" href="#基于-extensible-xml-authoring-扩展-springxml-元素" aria-hidden="true">#</a> 基于 Extensible XML authoring 扩展 SpringXML 元素</h2><p>Spring XML 扩展</p><ul><li>编写 XML Schema 文件：定义 XML 结构</li><li>自定义 NamespaceHandler 实现：命名空间绑定</li><li>自定义 BeanDefinitionParser 实现：XML 元素与 BeanDefinition 解析</li><li>注册 XML 扩展：命名空间与 XML Schema 映射</li></ul><h2 id="extensible-xml-authoring-扩展原理" tabindex="-1"><a class="header-anchor" href="#extensible-xml-authoring-扩展原理" aria-hidden="true">#</a> Extensible XML authoring 扩展原理</h2><h3 id="触发时机" tabindex="-1"><a class="header-anchor" href="#触发时机" aria-hidden="true">#</a> 触发时机</h3><ul><li>AbstractApplicationContext#obtainFreshBeanFactory <ul><li>AbstractRefreshableApplicationContext#refreshBeanFactory <ul><li>AbstractXmlApplicationContext#loadBeanDefinitions <ul><li>... <ul><li>XmlBeanDefinitionReader#doLoadBeanDefinitions <ul><li>... <ul><li>BeanDefinitionParserDelegate#parseCustomElement</li></ul></li></ul></li></ul></li></ul></li></ul></li></ul></li></ul><h3 id="核心流程" tabindex="-1"><a class="header-anchor" href="#核心流程" aria-hidden="true">#</a> 核心流程</h3><p>BeanDefinitionParserDelegate#parseCustomElement(org.w3c.dom.Element, BeanDefinition)</p><ul><li>获取 namespace</li><li>通过 namespace 解析 NamespaceHandler</li><li>构造 ParserContext</li><li>解析元素，获取 BeanDefinintion</li></ul><h2 id="基于-properties-文件装载外部化配置" tabindex="-1"><a class="header-anchor" href="#基于-properties-文件装载外部化配置" aria-hidden="true">#</a> 基于 Properties 文件装载外部化配置</h2><p>注解驱动</p><ul><li>@org.springframework.context.annotation.PropertySource</li><li>@org.springframework.context.annotation.PropertySources</li></ul><p>API 编程</p><ul><li>org.springframework.core.env.PropertySource</li><li>org.springframework.core.env.PropertySources</li></ul><h2 id="基于-yaml-文件装载外部化配置" tabindex="-1"><a class="header-anchor" href="#基于-yaml-文件装载外部化配置" aria-hidden="true">#</a> 基于 YAML 文件装载外部化配置</h2><p>API 编程</p><ul><li>org.springframework.beans.factory.config.YamlProcessor <ul><li>org.springframework.beans.factory.config.YamlMapFactoryBean</li><li>org.springframework.beans.factory.config.YamlPropertiesFactoryBean</li></ul></li></ul><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p><strong>Spring 內建 XML Schema 常见有哪些</strong>？</p>',24),z=t("thead",null,[t("tr",null,[t("th",null,"命名空间"),t("th",null,"所属模块"),t("th",null,"Schema 资源 URL")])],-1),N=t("td",null,"beans",-1),F=t("td",null,"spring-beans",-1),Y={href:"https://www.springframework.org/schema/beans/spring-beans.xsd",target:"_blank",rel:"noopener noreferrer"},O=t("td",null,"context",-1),T=t("td",null,"spring-context",-1),U={href:"https://www.springframework.org/schema/context/spring-context.xsd",target:"_blank",rel:"noopener noreferrer"},H=t("td",null,"aop",-1),W=t("td",null,"spring-aop",-1),G={href:"https://www.springframework.org/schema/aop/spring-aop.xsd",target:"_blank",rel:"noopener noreferrer"},Q=t("td",null,"tx",-1),$=t("td",null,"spring-tx",-1),K={href:"https://www.springframework.org/schema/tx/spring-tx.xsd",target:"_blank",rel:"noopener noreferrer"},Z=t("td",null,"util",-1),tt=t("td",null,"spring-beans",-1),et={href:"https://www.springframework.org/schema/util/spring-util.xsd",target:"_blank",rel:"noopener noreferrer"},nt=t("td",null,"tool",-1),rt=t("td",null,"spring-beans",-1),it={href:"https://www.springframework.org/schema/tool/spring-tool.xsd",target:"_blank",rel:"noopener noreferrer"},at=i('<p><strong>Spring 配置元信息具体有哪些</strong>？</p><ul><li>Bean 配置元信息：通过媒介（如 XML、Proeprties 等），解析 BeanDefinition</li><li>IoC 容器配置元信息：通过媒介（如 XML、Proeprties 等），控制 IoC 容器行为，比如注解驱动、AOP 等</li><li>外部化配置：通过资源抽象（如 Proeprties、YAML 等），控制 PropertySource</li><li>Spring Profile：通过外部化配置，提供条件分支流程</li></ul><p><strong>Extensible XML authoring 的缺点</strong>？</p><ul><li>高复杂度：开发人员需要熟悉 XML Schema，spring.handlers，spring.schemas 以及 Spring API</li><li>嵌套元素支持较弱：通常需要使用方法递归或者其嵌套解析的方式处理嵌套（子）元素</li><li>XML 处理性能较差：Spring XML 基于 DOM Level 3 API 实现，该 API 便于理解，然而性能较差</li><li>XML 框架移植性差：很难适配高性能和便利性的 XML 框架，如 JAXB</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',5),ot={href:"https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans",target:"_blank",rel:"noopener noreferrer"},lt={href:"https://time.geekbang.org/course/intro/265",target:"_blank",rel:"noopener noreferrer"};function dt(st,ht){const a=o("bean"),r=o("ExternalLinkIcon");return d(),s("div",null,[p,c,u,t("table",null,[g,t("tbody",null,[t("tr",null,[f,t("td",null,[e("替换 XML 元素 "),n(a,{"init-method":"..."}),e(" 或 InitializingBean")]),b]),t("tr",null,[_,t("td",null,[e("替换 XML 元素 "),n(a,{"destroy-method":"..."}),e(" 或 DisposableBean")]),m])])]),w,t("table",null,[x,t("tbody",null,[t("tr",null,[B,S,t("td",null,[t("a",y,[e("https://www.springframework.org/schema/beans/spring-beans.xsd"),n(r)])])]),t("tr",null,[D,k,t("td",null,[t("a",P,[e("https://www.springframework.org/schema/context/spring-context.xsd"),n(r)])])]),t("tr",null,[L,M,t("td",null,[t("a",X,[e("https://www.springframework.org/schema/aop/spring-aop.xsd"),n(r)])])]),t("tr",null,[A,v,t("td",null,[t("a",C,[e("https://www.springframework.org/schema/tx/spring-tx.xsd"),n(r)])])]),t("tr",null,[R,I,t("td",null,[e("beans "),t("a",E,[e("https://www.springframework.org/schema/util/spring-util.xsd"),n(r)])])]),t("tr",null,[q,j,t("td",null,[t("a",J,[e("https://www.springframework.org/schema/tool/spring-tool.xsd"),n(r)])])])])]),V,t("table",null,[z,t("tbody",null,[t("tr",null,[N,F,t("td",null,[t("a",Y,[e("https://www.springframework.org/schema/beans/spring-beans.xsd"),n(r)])])]),t("tr",null,[O,T,t("td",null,[t("a",U,[e("https://www.springframework.org/schema/context/spring-context.xsd"),n(r)])])]),t("tr",null,[H,W,t("td",null,[t("a",G,[e("https://www.springframework.org/schema/aop/spring-aop.xsd"),n(r)])])]),t("tr",null,[Q,$,t("td",null,[t("a",K,[e("https://www.springframework.org/schema/tx/spring-tx.xsd"),n(r)])])]),t("tr",null,[Z,tt,t("td",null,[e("beans "),t("a",et,[e("https://www.springframework.org/schema/util/spring-util.xsd"),n(r)])])]),t("tr",null,[nt,rt,t("td",null,[t("a",it,[e("https://www.springframework.org/schema/tool/spring-tool.xsd"),n(r)])])])])]),at,t("ul",null,[t("li",null,[t("a",ot,[e("Spring 官方文档之 Core Technologies"),n(r)])]),t("li",null,[t("a",lt,[e("《小马哥讲 Spring 核心编程思想》"),n(r)])])])])}const ut=l(h,[["render",dt],["__file","08.Spring配置元数据.html.vue"]]);export{ut as default};
