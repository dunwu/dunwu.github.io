import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as s,c,a as e,b as r,d as l,e as o}from"./app-2ca3a8cf.js";const t={},u=o('<h1 id="spring-国际化" tabindex="-1"><a class="header-anchor" href="#spring-国际化" aria-hidden="true">#</a> Spring 国际化</h1><h2 id="spring-国际化使用场景" tabindex="-1"><a class="header-anchor" href="#spring-国际化使用场景" aria-hidden="true">#</a> Spring 国际化使用场景</h2><ul><li>普通国际化文案</li><li>Bean Validation 校验国际化文案</li><li>Web 站点页面渲染</li><li>Web MVC 错误消息提示</li></ul><h2 id="spring-国际化接口" tabindex="-1"><a class="header-anchor" href="#spring-国际化接口" aria-hidden="true">#</a> Spring 国际化接口</h2><ul><li>核心接口：<code>org.springframework.context.MessageSource</code></li><li>主要概念 <ul><li>文案模板编码（code）</li><li>文案模板参数（args）</li><li>区域（Locale）</li></ul></li></ul><h2 id="层次性-messagesource" tabindex="-1"><a class="header-anchor" href="#层次性-messagesource" aria-hidden="true">#</a> 层次性 MessageSource</h2><ul><li>Spring 层次性接口回顾 <ul><li><code>org.springframework.beans.factory.HierarchicalBeanFactory</code></li><li><code>org.springframework.context.ApplicationContext</code></li><li><code>org.springframework.beans.factory.config.BeanDefinition</code></li></ul></li><li>Spring 层次性国际化接口 <ul><li><code>org.springframework.context.HierarchicalMessageSource</code></li></ul></li></ul><h2 id="java-国际化标准实现" tabindex="-1"><a class="header-anchor" href="#java-国际化标准实现" aria-hidden="true">#</a> Java 国际化标准实现</h2><p>核心接口：</p><ul><li>抽象实现 - <code>java.util.ResourceBundle</code></li><li>Properties 资源实现 - <code>java.util.PropertyResourceBundle</code></li><li>例举实现 - <code>java.util.ListResourceBundle</code></li></ul><p><code>ResourceBundle</code> 核心特性</p><ul><li>Key-Value 设计</li><li>层次性设计</li><li>缓存设计</li><li>字符编码控制 - <code>java.util.ResourceBundle.Control</code>（@since 1.6）</li><li>Control SPI 扩展 - <code>java.util.spi.ResourceBundleControlProvider</code>（@since 1.8）</li></ul><h2 id="java-文本格式化" tabindex="-1"><a class="header-anchor" href="#java-文本格式化" aria-hidden="true">#</a> Java 文本格式化</h2>',13),d=e("ul",null,[e("li",null,[r("核心接口 "),e("ul",null,[e("li",null,"java.text.MessageFormat")])]),e("li",null,[r("基本用法 "),e("ul",null,[e("li",null,"设置消息格式模式- new MessageFormat(...)"),e("li",null,"格式化 - format(new Object[]{...})")])]),e("li",null,[r("消息格式模式 "),e("ul",null,[e("li",{ArgumentIndex:"","(,FormatType,(FormatStyle))":""},"格式元素："),e("li",null,"FormatType：消息格式类型，可选项，每种类型在 number、date、time 和 choice 类型选其一"),e("li",null,[r("FormatStyle：消息格式风格，可选项，包括：short、medium、long、full、integer、currency、"),e("br"),r(" percent")])])]),e("li",null,[r("高级特性 "),e("ul",null,[e("li",null,"重置消息格式模式"),e("li",null,"重置 java.util.Locale"),e("li",null,"重置 java.text.Format")])])],-1),g=o('<h2 id="messagesource-开箱即用实现" tabindex="-1"><a class="header-anchor" href="#messagesource-开箱即用实现" aria-hidden="true">#</a> MessageSource 开箱即用实现</h2><ul><li>基于 ResourceBundle + MessageFormat 组合 MessageSource 实现</li><li>org.springframework.context.support.ResourceBundleMessageSource</li><li>可重载 Properties + MessageFormat 组合 MessageSource 实现</li><li>org.springframework.context.support.ReloadableResourceBundleMessageSource</li></ul><h2 id="messagesource-內建依赖" tabindex="-1"><a class="header-anchor" href="#messagesource-內建依赖" aria-hidden="true">#</a> MessageSource 內建依赖</h2><ul><li>MessageSource 內建 Bean 可能来源</li><li>预注册 Bean 名称为：“messageSource”，类型为：MessageSource Bean</li><li>默认內建实现 - DelegatingMessageSource</li><li>层次性查找 MessageSource 对象</li></ul><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p><strong>Spring Boot 为什么要新建 MessageSource Bean</strong>？</p><ul><li>AbstractApplicationContext 的实现决定了 MessageSource 內建实现</li><li>Spring Boot 通过外部化配置简化 MessageSource Bean 构建</li><li>Spring Boot 基于 Bean Validation 校验非常普遍</li></ul><p><strong>Spring 国际化接口有哪些</strong>？</p><ul><li>核心接口 - MessageSource</li><li>层次性接口 - <code>org.springframework.context.HierarchicalMessageSource</code></li></ul><p><strong>Spring 有哪些 MessageSource 內建实现</strong>？</p><ul><li><code>org.springframework.context.support.ResourceBundleMessageSource</code></li><li><code>org.springframework.context.support.ReloadableResourceBundleMessageSource</code></li><li><code>org.springframework.context.support.StaticMessageSource</code></li><li><code>org.springframework.context.support.DelegatingMessageSource</code></li></ul><p><strong>如何实现配置自动更新 MessageSource</strong>？</p><p>主要技术</p><ul><li>Java NIO 2：<code>java.nio.file.WatchService</code></li><li>Java Concurrency : <code>java.util.concurrent.ExecutorService</code></li><li>Spring：<code>org.springframework.context.support.AbstractMessageSource</code></li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',15),p={href:"https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans",target:"_blank",rel:"noopener noreferrer"},h={href:"https://time.geekbang.org/course/intro/265",target:"_blank",rel:"noopener noreferrer"};function m(S,f){const a=n("ExternalLinkIcon");return s(),c("div",null,[u,d,g,e("ul",null,[e("li",null,[e("a",p,[r("Spring 官方文档之 Core Technologies"),l(a)])]),e("li",null,[e("a",h,[r("《小马哥讲 Spring 核心编程思想》"),l(a)])])])])}const M=i(t,[["render",m],["__file","26.Spring国际化.html.vue"]]);export{M as default};
