import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as d,c as a,a as r,b as t,d as o,e as c}from"./app-64c8372a.js";const p={},l=c('<h1 id="spring-类型转换" tabindex="-1"><a class="header-anchor" href="#spring-类型转换" aria-hidden="true">#</a> Spring 类型转换</h1><h2 id="spring-类型转换的实现" tabindex="-1"><a class="header-anchor" href="#spring-类型转换的实现" aria-hidden="true">#</a> Spring 类型转换的实现</h2><ul><li>基于 JavaBeans 接口的类型转换实现 <ul><li>基于 java.beans.PropertyEditor 接口扩展</li></ul></li><li>Spring 3.0+ 通用类型转换实现</li></ul><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2><table><thead><tr><th>场景</th><th>基于 JavaBeans 接口的类型转换实现</th><th>Spring 3.0+ 通用类型转换实现</th></tr></thead><tbody><tr><td>数据绑定</td><td>YES</td><td>YES</td></tr><tr><td>BeanWrapper</td><td>YES</td><td>YES</td></tr><tr><td>Bean 属性类型转换</td><td>YES</td><td>YES</td></tr><tr><td>外部化属性类型转换</td><td>NO</td><td>YES</td></tr></tbody></table><h2 id="基于-javabeans-接口的类型转换" tabindex="-1"><a class="header-anchor" href="#基于-javabeans-接口的类型转换" aria-hidden="true">#</a> 基于 JavaBeans 接口的类型转换</h2><p>核心职责</p><ul><li>将 String 类型的内容转化为目标类型的对象</li></ul><p>扩展原理</p><ul><li>Spring 框架将文本内容传递到 PropertyEditor 实现的 setAsText(String) 方法</li><li>PropertyEditor#setAsText(String) 方法实现将 String 类型转化为目标类型的对象</li><li>将目标类型的对象传入 PropertyEditor#setValue(Object) 方法</li><li>PropertyEditor#setValue(Object) 方法实现需要临时存储传入对象</li><li>Spring 框架将通过 PropertyEditor#getValue() 获取类型转换后的对象</li></ul><h2 id="spring-內建-propertyeditor-扩展" tabindex="-1"><a class="header-anchor" href="#spring-內建-propertyeditor-扩展" aria-hidden="true">#</a> Spring 內建 PropertyEditor 扩展</h2><p>內建扩展（org.springframework.beans.propertyeditors 包下）</p><table><thead><tr><th>转换场景</th><th>实现类</th></tr></thead><tbody><tr><td>String -&gt; Byte 数组</td><td>org.springframework.beans.propertyeditors.ByteArrayPropertyEditor</td></tr><tr><td>String -&gt; Char</td><td>org.springframework.beans.propertyeditors.CharacterEditor</td></tr><tr><td>String -&gt; Char 数组</td><td>org.springframework.beans.propertyeditors.CharArrayPropertyEditor</td></tr><tr><td>String -&gt; Charset</td><td>org.springframework.beans.propertyeditors.CharsetEditor</td></tr><tr><td>String -&gt; Class</td><td>org.springframework.beans.propertyeditors.ClassEditor</td></tr><tr><td>String -&gt; Currency</td><td>org.springframework.beans.propertyeditors.CurrencyEditor</td></tr><tr><td></td><td></td></tr></tbody></table><h2 id="自定义-propertyeditor-扩展" tabindex="-1"><a class="header-anchor" href="#自定义-propertyeditor-扩展" aria-hidden="true">#</a> 自定义 PropertyEditor 扩展</h2><p>扩展模式</p><ul><li>扩展 <code>java.beans.PropertyEditorSupport</code> 类</li></ul><p>实现 <code>org.springframework.beans.PropertyEditorRegistrar</code></p><ul><li>实现 <code>registerCustomEditors(org.springframework.beans.PropertyEditorRegistry)</code> 方法</li><li>将 <code>PropertyEditorRegistrar</code> 实现注册为 Spring Bean</li></ul><p>向 <code>org.springframework.beans.PropertyEditorRegistry</code> 注册自定义 PropertyEditor 实现</p><ul><li>通用类型实现 <code>registerCustomEditor(Class&lt;?&gt;, PropertyEditor)</code></li><li>Java Bean 属性类型实现：<code>registerCustomEditor(Class&lt;?&gt;, String, PropertyEditor)</code></li></ul><h2 id="spring-propertyeditor-的设计缺陷" tabindex="-1"><a class="header-anchor" href="#spring-propertyeditor-的设计缺陷" aria-hidden="true">#</a> Spring PropertyEditor 的设计缺陷</h2><p>违反职责单一原则</p><ul><li><code>java.beans.PropertyEditor</code> 接口职责太多，除了类型转换，还包括 Java Beans 事件和 Java GUI 交<br> 互</li></ul><p><code>java.beans.PropertyEditor</code> 实现类型局限</p><ul><li>来源类型只能为 <code>java.lang.String</code> 类型</li></ul><p><code>java.beans.PropertyEditor</code> 实现缺少类型安全</p><ul><li>除了实现类命名可以表达语义，实现类无法感知目标转换类型</li></ul><h2 id="spring-3-通用类型转换接口" tabindex="-1"><a class="header-anchor" href="#spring-3-通用类型转换接口" aria-hidden="true">#</a> Spring 3 通用类型转换接口</h2><p>类型转换接口 - org.springframework.core.convert.converter.Converter&lt;S,T&gt;</p><ul><li>泛型参数 S：来源类型，参数 T：目标类型</li><li>核心方法：T convert(S)</li></ul><p>通用类型转换接口 - org.springframework.core.convert.converter.GenericConverter</p><ul><li>核心方法：convert(Object,TypeDescriptor,TypeDescriptor)</li><li>配对类型：org.springframework.core.convert.converter.GenericConverter.ConvertiblePair</li><li>类型描述：org.springframework.core.convert.TypeDescriptor</li></ul><h2 id="spring-內建类型转换器" tabindex="-1"><a class="header-anchor" href="#spring-內建类型转换器" aria-hidden="true">#</a> Spring 內建类型转换器</h2><p>內建扩展</p><table><thead><tr><th>转换场景</th><th>实现类所在包名（package）</th></tr></thead><tbody><tr><td>日期/时间相关</td><td>org.springframework.format.datetime</td></tr><tr><td>Java 8 日期/时间相关</td><td>org.springframework.format.datetime.standard</td></tr><tr><td>通用实现</td><td>org.springframework.core.convert.support</td></tr></tbody></table><h2 id="converter-接口的局限性" tabindex="-1"><a class="header-anchor" href="#converter-接口的局限性" aria-hidden="true">#</a> Converter 接口的局限性</h2><p>局限一：缺少 Source Type 和 Target Type 前置判断</p><ul><li>应对：增加 org.springframework.core.convert.converter.ConditionalConverter 实现</li></ul><p>局限二：仅能转换单一的 Source Type 和 Target Type</p><ul><li>应对：使用 org.springframework.core.convert.converter.GenericConverter 代替</li></ul><h2 id="genericconverter-接口" tabindex="-1"><a class="header-anchor" href="#genericconverter-接口" aria-hidden="true">#</a> GenericConverter 接口</h2><p><code>org.springframework.core.convert.converter.GenericConverter</code></p><table><thead><tr><th>核心要素</th><th>说明</th></tr></thead><tbody><tr><td>使用场景</td><td>用于“复合”类型转换场景，比如 Collection、Map、数组等</td></tr><tr><td>转换范围</td><td><code>Set&lt;ConvertiblePair&gt; getConvertibleTypes()</code></td></tr><tr><td>配对类型</td><td><code>org.springframework.core.convert.converter.GenericConverter.ConvertiblePair</code></td></tr><tr><td>转换方法</td><td><code>convert(Object,TypeDescriptor,TypeDescriptor)</code></td></tr><tr><td>类型描述</td><td><code>org.springframework.core.convert.TypeDescriptor</code></td></tr></tbody></table><h2 id="优化-genericconverter-接口" tabindex="-1"><a class="header-anchor" href="#优化-genericconverter-接口" aria-hidden="true">#</a> 优化 GenericConverter 接口</h2><p>GenericConverter 局限性</p><ul><li>缺少 Source Type 和 Target Type 前置判断</li><li>单一类型转换实现复杂</li></ul><p>GenericConverter 优化接口 - <code>ConditionalGenericConverter</code></p><ul><li>复合类型转换：<code>org.springframework.core.convert.converter.GenericConverter</code></li><li>类型条件判断：<code>org.springframework.core.convert.converter.ConditionalConverter</code></li></ul><h2 id="扩展-spring-类型转换器" tabindex="-1"><a class="header-anchor" href="#扩展-spring-类型转换器" aria-hidden="true">#</a> 扩展 Spring 类型转换器</h2><p>实现转换器接口</p><ul><li><code>org.springframework.core.convert.converter.Converter</code></li><li><code>org.springframework.core.convert.converter.ConverterFactory</code></li><li><code>org.springframework.core.convert.converter.GenericConverter</code></li></ul><p>注册转换器实现</p><ul><li>通过 <code>ConversionServiceFactoryBean</code> Spring Bean</li><li>通过 <code>org.springframework.core.convert.ConversionService API</code></li></ul><h2 id="统一类型转换服务" tabindex="-1"><a class="header-anchor" href="#统一类型转换服务" aria-hidden="true">#</a> 统一类型转换服务</h2><p><code>org.springframework.core.convert.ConversionService</code></p><table><thead><tr><th>实现类型</th><th>说明</th></tr></thead><tbody><tr><td><code>GenericConversionService</code></td><td>通用 ConversionService 模板实现，不内置转化器实现</td></tr><tr><td><code>DefaultConversionService</code></td><td>基础 ConversionService 实现，内置常用转化器实现</td></tr><tr><td><code>FormattingConversionService</code></td><td>通用 Formatter + GenericConversionService 实现，不内置转化器和 Formatter 实现</td></tr><tr><td><code>DefaultFormattingConversionService</code></td><td>DefaultConversionService + 格式化 实现（如：JSR-354 Money &amp; Currency, JSR-310 Date-Time）</td></tr></tbody></table><h2 id="conversionservice-作为依赖" tabindex="-1"><a class="header-anchor" href="#conversionservice-作为依赖" aria-hidden="true">#</a> ConversionService 作为依赖</h2><p>类型转换器底层接口 - <code>org.springframework.beans.TypeConverter</code></p><ul><li>起始版本：Spring 2.0</li><li>核心方法 - convertIfNecessary 重载方法</li><li>抽象实现 - <code>org.springframework.beans.TypeConverterSupport</code></li><li>简单实现 - <code>org.springframework.beans.SimpleTypeConverter</code></li></ul><p>类型转换器底层抽象实现 - <code>org.springframework.beans.TypeConverterSupport</code></p><ul><li>实现接口 - <code>org.springframework.beans.TypeConverter</code></li><li>扩展实现 - <code>org.springframework.beans.PropertyEditorRegistrySupport</code></li><li>委派实现 - <code>org.springframework.beans.TypeConverterDelegate</code></li></ul><p>类型转换器底层委派实现 - <code>org.springframework.beans.TypeConverterDelegate</code></p><ul><li>构造来源 - <code>org.springframework.beans.AbstractNestablePropertyAccessor</code> 实现 <ul><li><code>org.springframework.beans.BeanWrapperImpl</code></li></ul></li><li>依赖 - <code>java.beans.PropertyEditor</code> 实现 <ul><li>默认內建实现 - <code>PropertyEditorRegistrySupport#registerDefaultEditors</code></li></ul></li><li>可选依赖 - <code>org.springframework.core.convert.ConversionService</code> 实现</li></ul><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p><strong>Spring 类型转换实现有哪些</strong>？</p><ul><li>基于 JavaBeans PropertyEditor 接口实现</li><li>Spring 3.0+ 通用类型转换实现</li></ul><p><strong>Spring 类型转换器接口有哪些</strong>？</p><ul><li>类型转换接口 - <code>org.springframework.core.convert.converter.Converter</code></li><li>通用类型转换接口 - <code>org.springframework.core.convert.converter.GenericConverter</code></li><li>类型条件接口 - <code>org.springframework.core.convert.converter.ConditionalConverter</code></li><li>综合类型转换接口 - <code>org.springframework.core.convert.converter.ConditionalGenericConverter</code></li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',69),s={href:"https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans",target:"_blank",rel:"noopener noreferrer"},g={href:"https://time.geekbang.org/course/intro/265",target:"_blank",rel:"noopener noreferrer"};function h(v,u){const e=n("ExternalLinkIcon");return d(),a("div",null,[l,r("ul",null,[r("li",null,[r("a",s,[t("Spring 官方文档之 Core Technologies"),o(e)])]),r("li",null,[r("a",g,[t("《小马哥讲 Spring 核心编程思想》"),o(e)])])])])}const b=i(p,[["render",h],["__file","23.Spring类型转换.html.vue"]]);export{b as default};
