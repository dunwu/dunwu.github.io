import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as d,c as o,a as e,b as r,d as l,e as c}from"./app-fcc32256.js";const n={},s=c('<h1 id="spring-泛型处理" tabindex="-1"><a class="header-anchor" href="#spring-泛型处理" aria-hidden="true">#</a> Spring 泛型处理</h1><h2 id="java-泛型基础" tabindex="-1"><a class="header-anchor" href="#java-泛型基础" aria-hidden="true">#</a> Java 泛型基础</h2><p>泛型类型</p><ul><li>泛型类型是在类型上参数化的泛型类或接口</li></ul><p>泛型使用场景</p><ul><li>编译时强类型检查</li><li>避免类型强转</li><li>实现通用算法</li></ul><p>泛型类型擦写</p><ul><li>泛型被引入到 Java 语言中，以便在编译时提供更严格的类型检查并支持泛型编程。类型擦除确保不会<br> 为参数化类型创建新类；因此，泛型不会产生运行时开销。为了实现泛型，编译器将类型擦除应用于： <ul><li>将泛型类型中的所有类型参数替换为其边界，如果类型参数是无边界的，则将其替换为<br> “Object”。因此，生成的字节码只包含普通类、接口和方法</li><li>必要时插入类型转换以保持类型安全</li><li>生成桥方法以保留扩展泛型类型中的多态性</li></ul></li></ul><h2 id="java-5-类型接口" tabindex="-1"><a class="header-anchor" href="#java-5-类型接口" aria-hidden="true">#</a> Java 5 类型接口</h2><p>Java 5 类型接口 - <code>java.lang.reflect.Type</code></p><table><thead><tr><th>派生类或接口</th><th>说明</th></tr></thead><tbody><tr><td><code>java.lang.Class</code></td><td>Java 类 API，如 <code>java.lang.String</code></td></tr><tr><td><code>java.lang.reflect.GenericArrayType</code></td><td>泛型数组类型</td></tr><tr><td><code>java.lang.reflect.ParameterizedType</code></td><td>泛型参数类型</td></tr><tr><td><code>java.lang.reflect.TypeVariable</code></td><td>泛型类型变量，如 <code>Collection&lt;E&gt;</code> 中的 E</td></tr><tr><td><code>java.lang.reflect.WildcardType</code></td><td>泛型通配类型</td></tr></tbody></table><p>Java 泛型反射 API</p><table><thead><tr><th>类型</th><th>API</th></tr></thead><tbody><tr><td>泛型信息（Generics Info）</td><td><code>java.lang.Class#getGenericInfo()</code></td></tr><tr><td>泛型参数（Parameters）</td><td><code>java.lang.reflect.ParameterizedType</code></td></tr><tr><td>泛型父类（Super Classes）</td><td><code>java.lang.Class#getGenericSuperclass()</code></td></tr><tr><td>泛型接口（Interfaces）</td><td><code>java.lang.Class#getGenericInterfaces()</code></td></tr><tr><td>泛型声明（Generics Declaration）</td><td><code>java.lang.reflect.GenericDeclaration</code></td></tr></tbody></table><h2 id="spring-泛型类型辅助类" tabindex="-1"><a class="header-anchor" href="#spring-泛型类型辅助类" aria-hidden="true">#</a> Spring 泛型类型辅助类</h2><p>核心 API - <code>org.springframework.core.GenericTypeResolver</code></p><ul><li>版本支持：[2.5.2 , )</li><li>处理类型相关（Type）相关方法 <ul><li><code>resolveReturnType</code></li><li><code>resolveType</code></li></ul></li><li>处理泛型参数类型（<code>ParameterizedType</code>）相关方法 <ul><li><code>resolveReturnTypeArgument</code></li><li><code>resolveTypeArgument</code></li><li><code>resolveTypeArguments</code></li></ul></li><li>处理泛型类型变量（<code>TypeVariable</code>）相关方法 <ul><li><code>getTypeVariableMap</code></li></ul></li></ul><h2 id="spring-泛型集合类型辅助类" tabindex="-1"><a class="header-anchor" href="#spring-泛型集合类型辅助类" aria-hidden="true">#</a> Spring 泛型集合类型辅助类</h2><p>核心 API - <code>org.springframework.core.GenericCollectionTypeResolver</code></p><ul><li>版本支持：[2.0 , 4.3]</li><li>替换实现：<code>org.springframework.core.ResolvableType</code></li><li>处理 Collection 相关 <ul><li><code>getCollection*Type</code></li></ul></li><li>处理 Map 相关 <ul><li><code>getMapKey*Type</code></li><li><code>getMapValue*Type</code></li></ul></li></ul><h2 id="spring-方法参数封装-methodparameter" tabindex="-1"><a class="header-anchor" href="#spring-方法参数封装-methodparameter" aria-hidden="true">#</a> Spring 方法参数封装 - MethodParameter</h2><p>核心 API - <code>org.springframework.core.MethodParameter</code></p><ul><li>起始版本：[2.0 , )</li><li>元信息 <ul><li>关联的方法 - Method</li><li>关联的构造器 - Constructor</li><li>构造器或方法参数索引 - parameterIndex</li><li>构造器或方法参数类型 - parameterType</li><li>构造器或方法参数泛型类型 - genericParameterType</li><li>构造器或方法参数参数名称 - parameterName</li><li>所在的类 - containingClass</li></ul></li></ul><h2 id="spring-4-0-泛型优化实现-resolvabletype" tabindex="-1"><a class="header-anchor" href="#spring-4-0-泛型优化实现-resolvabletype" aria-hidden="true">#</a> Spring 4.0 泛型优化实现 - ResolvableType</h2><p>核心 API - <code>org.springframework.core.ResolvableType</code></p><ul><li>起始版本：[4.0 , )</li><li>扮演角色：<code>GenericTypeResolver</code> 和 <code>GenericCollectionTypeResolver</code> 替代者</li><li>工厂方法：<code>for*</code> 方法</li><li>转换方法：<code>as*</code> 方法</li><li>处理方法：<code>resolve*</code> 方法</li></ul><h2 id="resolvabletype-的局限性" tabindex="-1"><a class="header-anchor" href="#resolvabletype-的局限性" aria-hidden="true">#</a> ResolvableType 的局限性</h2><ul><li>局限一：ResolvableType 无法处理泛型擦写</li><li>局限二：ResolvableType 无法处理非具体化的 ParameterizedType</li></ul><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p><strong>Java 泛型擦写发生在编译时还是运行时</strong>？</p><p>运行时</p><p><strong>请介绍 Java 5 Type 类型的派生类或接口</strong></p><ul><li><code>java.lang.Class</code></li><li><code>java.lang.reflect.GenericArrayType</code></li><li><code>java.lang.reflect.ParameterizedType</code></li><li><code>java.lang.reflect.TypeVariable</code></li><li><code>java.lang.reflect.WildcardType</code></li></ul><p><strong>请说明 ResolvableType 的设计优势</strong>？</p><ul><li>简化 Java 5 Type API 开发，屏蔽复杂 API 的运用，如 ParameterizedType</li><li>不变性设计（Immutability）</li><li>Fluent API 设计（Builder 模式），链式（流式）编程</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',35),p={href:"https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans",target:"_blank",rel:"noopener noreferrer"},h={href:"https://time.geekbang.org/course/intro/265",target:"_blank",rel:"noopener noreferrer"};function g(u,v){const a=t("ExternalLinkIcon");return d(),o("div",null,[s,e("ul",null,[e("li",null,[e("a",p,[r("Spring 官方文档之 Core Technologies"),l(a)])]),e("li",null,[e("a",h,[r("《小马哥讲 Spring 核心编程思想》"),l(a)])])])])}const b=i(n,[["render",g],["__file","27.Spring泛型处理.html.vue"]]);export{b as default};
