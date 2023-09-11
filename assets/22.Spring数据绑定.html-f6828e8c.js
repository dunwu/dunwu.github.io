import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as i,c as d,a,b as e,d as s,e as o}from"./app-64c8372a.js";const p={},l=o(`<h1 id="spring-数据绑定" tabindex="-1"><a class="header-anchor" href="#spring-数据绑定" aria-hidden="true">#</a> Spring 数据绑定</h1><p><strong>Spring 数据绑定(Data Binding)的作用是将用户的输入动态绑定到 JavaBean</strong>。换句话说，Spring 数据绑定机制是将属性值设置到目标对象中。</p><p>在 Spring 中，数据绑定功能主要由 <code>DataBinder</code> 类实现。此外，<code>BeanWrapper</code> 也具有类似的功能，但 <code>DataBinder</code> 额外支持字段验证、字段格式化和绑定结果分析。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20230111150930.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="快速入门" tabindex="-1"><a class="header-anchor" href="#快速入门" aria-hidden="true">#</a> 快速入门</h2><p>定义一个用于测试的 JavaBean</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestBean</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> num<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setNum</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">=</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;TestBean{&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;num=&quot;</span> <span class="token operator">+</span> num <span class="token operator">+</span> <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据绑定示例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataBindingDemo</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">MutablePropertyValues</span> mpv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutablePropertyValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mpv<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;num&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">TestBean</span> testBean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">DataBinder</span> db <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataBinder</span><span class="token punctuation">(</span>testBean<span class="token punctuation">)</span><span class="token punctuation">;</span>

        db<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>mpv<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>testBean<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spring-数据绑定使用场景" tabindex="-1"><a class="header-anchor" href="#spring-数据绑定使用场景" aria-hidden="true">#</a> Spring 数据绑定使用场景</h2><ul><li>Spring <code>BeanDefinition</code> 到 Bean 实例创建</li><li>Spring 数据绑定（<code>DataBinder</code>）</li><li>Spring Web 参数绑定（<code>WebDataBinder</code>）</li></ul><h2 id="databinder" tabindex="-1"><a class="header-anchor" href="#databinder" aria-hidden="true">#</a> DataBinder</h2><p>在 Spring 中，<code>DataBinder</code> 类是数据绑定功能的基类。<code>WebDataBinder</code> 是 <code>DataBinder</code> 的子类，主要用于 Spring Web 数据绑定，此外，还有一些 <code>WebDataBinder</code> 的扩展子类，其类族如下图所示：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20230111152225.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>DataBinder 核心属性：</p><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td><code>target</code></td><td>关联目标 Bean</td></tr><tr><td><code>objectName</code></td><td>目标 Bean 名称</td></tr><tr><td><code>bindingResult</code></td><td>属性绑定结果</td></tr><tr><td><code>typeConverter</code></td><td>类型转换器</td></tr><tr><td><code>conversionService</code></td><td>类型转换服务</td></tr><tr><td><code>messageCodesResolver</code></td><td>校验错误文案 Code 处理器</td></tr><tr><td><code>validators</code></td><td>关联的 Bean Validator 实例集合</td></tr></tbody></table><p><code>DataBinder</code> 类的核心方法是 <code>bind(PropertyValues)</code>：将 PropertyValues Key-Value 内容映射到关联 Bean（target）中的属性上</p><ul><li>假设 PropertyValues 中包含 name=dunwu 的键值对时, 同时 Bean 对象 User 中存在 name 属性, 当 bind 方法执行时, User 对象中的 name 属性值将被绑定为 dunwu</li></ul><h2 id="spring-数据绑定元数据" tabindex="-1"><a class="header-anchor" href="#spring-数据绑定元数据" aria-hidden="true">#</a> Spring 数据绑定元数据</h2><p>DataBinder 元数据 - PropertyValues</p><table><thead><tr><th>特征</th><th>说明</th></tr></thead><tbody><tr><td>数据来源</td><td>BeanDefinition，主要来源 XML 资源配置 BeanDefinition</td></tr><tr><td>数据结构</td><td>由一个或多个 PropertyValue 组成</td></tr><tr><td>成员结构</td><td>PropertyValue 包含属性名称，以及属性值（包括原始值、类型转换后的值）</td></tr><tr><td>常见实现</td><td>MutablePropertyValues</td></tr><tr><td>Web 扩展实现</td><td>ServletConfigPropertyValues、ServletRequestParameterPropertyValues</td></tr><tr><td>相关生命周期</td><td>InstantiationAwareBeanPostProcessor#postProcessProperties</td></tr></tbody></table><h2 id="spring-数据绑定控制参数" tabindex="-1"><a class="header-anchor" href="#spring-数据绑定控制参数" aria-hidden="true">#</a> Spring 数据绑定控制参数</h2><p>DataBinder 绑定特殊场景分析</p><ul><li>当 PropertyValues 中包含名称 x 的 PropertyValue，目标对象 B 不存在 x 属性，当 bind 方法执<br> 行时，会发生什么？</li><li>当 PropertyValues 中包含名称 x 的 PropertyValue，目标对象 B 中存在 x 属性，当 bind 方法执<br> 行时，如何避免 B 属性 x 不被绑定？</li><li>当 PropertyValues 中包含名称 x.y 的 PropertyValue，目标对象 B 中存在 x 属性（嵌套 y 属性）<br> ，当 bind 方法执行时，会发生什么？</li></ul><h3 id="databinder-绑定控制参数" tabindex="-1"><a class="header-anchor" href="#databinder-绑定控制参数" aria-hidden="true">#</a> DataBinder 绑定控制参数</h3><table><thead><tr><th>参数名称</th><th>说明</th></tr></thead><tbody><tr><td>ignoreUnknownFields</td><td>是否忽略未知字段，默认值：true</td></tr><tr><td>ignoreInvalidFields</td><td>是否忽略非法字段，默认值：false</td></tr><tr><td>autoGrowNestedPaths</td><td>是否自动增加嵌套路径，默认值：true</td></tr><tr><td>allowedFields</td><td>绑定字段白名单</td></tr><tr><td>disallowedFields</td><td>绑定字段黑名单</td></tr><tr><td>requiredFields</td><td>必须绑定字段</td></tr></tbody></table><h2 id="beanwrapper-的使用场景" tabindex="-1"><a class="header-anchor" href="#beanwrapper-的使用场景" aria-hidden="true">#</a> BeanWrapper 的使用场景</h2><ul><li>Spring 底层 JavaBeans 基础设施的中心化接口</li><li>通常不会直接使用，间接用于 BeanFactory 和 DataBinder</li><li>提供标准 JavaBeans 分析和操作，能够单独或批量存储 Java Bean 的属性（properties）</li><li>支持嵌套属性路径（nested path）</li><li>实现类 org.springframework.beans.BeanWrapperImpl</li></ul><h2 id="spring-底层-java-beans-替换实现" tabindex="-1"><a class="header-anchor" href="#spring-底层-java-beans-替换实现" aria-hidden="true">#</a> Spring 底层 Java Beans 替换实现</h2><p>JavaBeans 核心实现 - <code>java.beans.BeanInfo</code></p><ul><li>属性（Property） <ul><li><code>java.beans.PropertyEditor</code></li></ul></li><li>方法（Method）</li><li>事件（Event）</li><li>表达式（Expression）</li></ul><p>Spring 替代实现 - <code>org.springframework.beans.BeanWrapper</code></p><ul><li>属性（Property） <ul><li><code>java.beans.PropertyEditor</code></li></ul></li><li>嵌套属性路径（nested path）</li></ul><h2 id="databinder-数据校验" tabindex="-1"><a class="header-anchor" href="#databinder-数据校验" aria-hidden="true">#</a> DataBinder 数据校验</h2><p>DataBinder 与 BeanWrapper</p><ul><li>bind 方法生成 BeanPropertyBindingResult</li><li>BeanPropertyBindingResult 关联 BeanWrapper</li></ul><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>标准 JavaBeans 是如何操作属性的？</p><table><thead><tr><th>API</th><th>说明</th></tr></thead><tbody><tr><td>java.beans.Introspector</td><td>Java Beans 内省 API</td></tr><tr><td>java.beans.BeanInfo</td><td>Java Bean 元信息 API</td></tr><tr><td>java.beans.BeanDescriptor</td><td>Java Bean 信息描述符</td></tr><tr><td>java.beans.PropertyDescriptor</td><td>Java Bean 属性描述符</td></tr><tr><td>java.beans.MethodDescriptor</td><td>Java Bean 方法描述符</td></tr><tr><td>java.beans.EventSetDescriptor</td><td>Java Bean 事件集合描述符</td></tr></tbody></table><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,40),c={href:"https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans",target:"_blank",rel:"noopener noreferrer"},u={href:"https://time.geekbang.org/course/intro/265",target:"_blank",rel:"noopener noreferrer"};function k(v,b){const n=r("ExternalLinkIcon");return i(),d("div",null,[l,a("ul",null,[a("li",null,[a("a",c,[e("Spring 官方文档之 Core Technologies"),s(n)])]),a("li",null,[a("a",u,[e("《小马哥讲 Spring 核心编程思想》"),s(n)])])])])}const g=t(p,[["render",k],["__file","22.Spring数据绑定.html.vue"]]);export{g as default};
