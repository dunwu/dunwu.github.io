import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-002cceec.js";const p={},e=t(`<h1 id="reflections-快速入门" tabindex="-1"><a class="header-anchor" href="#reflections-快速入门" aria-hidden="true">#</a> Reflections 快速入门</h1><p>引入 pom</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.reflections<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>reflections<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.9.11<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>典型应用</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Reflections</span> reflections <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Reflections</span><span class="token punctuation">(</span><span class="token string">&quot;my.project&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Class</span><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">SomeType</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> subTypes <span class="token operator">=</span> reflections<span class="token punctuation">.</span><span class="token function">getSubTypesOf</span><span class="token punctuation">(</span><span class="token class-name">SomeType</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Class</span><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> annotated <span class="token operator">=</span> reflections<span class="token punctuation">.</span><span class="token function">getTypesAnnotatedWith</span><span class="token punctuation">(</span><span class="token class-name">SomeAnnotation</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>基本上，使用 Reflections 首先使用 urls 和 scanners 对其进行实例化</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//scan urls that contain &#39;my.package&#39;, include inputs starting with &#39;my.package&#39;, use the default scanners</span>
<span class="token class-name">Reflections</span> reflections <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Reflections</span><span class="token punctuation">(</span><span class="token string">&quot;my.package&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//or using ConfigurationBuilder</span>
<span class="token keyword">new</span> <span class="token class-name">Reflections</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConfigurationBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
     <span class="token punctuation">.</span><span class="token function">setUrls</span><span class="token punctuation">(</span><span class="token class-name">ClasspathHelper</span><span class="token punctuation">.</span><span class="token function">forPackage</span><span class="token punctuation">(</span><span class="token string">&quot;my.project.prefix&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
     <span class="token punctuation">.</span><span class="token function">setScanners</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SubTypesScanner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                  <span class="token keyword">new</span> <span class="token class-name">TypeAnnotationsScanner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filterResultsBy</span><span class="token punctuation">(</span>optionalFilter<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token punctuation">.</span><span class="token function">filterInputsBy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FilterBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">includePackage</span><span class="token punctuation">(</span><span class="token string">&quot;my.project.prefix&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
     <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，使用方便的查询方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 子类型扫描</span>
<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Class</span><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Module</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> modules <span class="token operator">=</span>
    reflections<span class="token punctuation">.</span><span class="token function">getSubTypesOf</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>google<span class="token punctuation">.</span>inject<span class="token punctuation">.</span></span>Module</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 类型注解扫描</span>
<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Class</span><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> singletons <span class="token operator">=</span>
    reflections<span class="token punctuation">.</span><span class="token function">getTypesAnnotatedWith</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">javax<span class="token punctuation">.</span>inject<span class="token punctuation">.</span></span>Singleton</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 资源扫描</span>
<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> properties <span class="token operator">=</span>
    reflections<span class="token punctuation">.</span><span class="token function">getResources</span><span class="token punctuation">(</span><span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token string">&quot;.*\\\\.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 方法注解扫描</span>
<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Method</span><span class="token punctuation">&gt;</span></span> resources <span class="token operator">=</span>
    reflections<span class="token punctuation">.</span><span class="token function">getMethodsAnnotatedWith</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">javax<span class="token punctuation">.</span>ws<span class="token punctuation">.</span>rs<span class="token punctuation">.</span></span>Path</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Constructor</span><span class="token punctuation">&gt;</span></span> injectables <span class="token operator">=</span>
    reflections<span class="token punctuation">.</span><span class="token function">getConstructorsAnnotatedWith</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">javax<span class="token punctuation">.</span>inject<span class="token punctuation">.</span></span>Inject</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 字段注解扫描</span>
<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Field</span><span class="token punctuation">&gt;</span></span> ids <span class="token operator">=</span>
    reflections<span class="token punctuation">.</span><span class="token function">getFieldsAnnotatedWith</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">javax<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span>Id</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 方法参数扫描</span>
<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Method</span><span class="token punctuation">&gt;</span></span> someMethods <span class="token operator">=</span>
    reflections<span class="token punctuation">.</span><span class="token function">getMethodsMatchParams</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Method</span><span class="token punctuation">&gt;</span></span> voidMethods <span class="token operator">=</span>
    reflections<span class="token punctuation">.</span><span class="token function">getMethodsReturn</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Method</span><span class="token punctuation">&gt;</span></span> pathParamMethods <span class="token operator">=</span>
    reflections<span class="token punctuation">.</span><span class="token function">getMethodsWithAnyParamAnnotated</span><span class="token punctuation">(</span><span class="token class-name">PathParam</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 方法参数名扫描</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> parameterNames <span class="token operator">=</span>
    reflections<span class="token punctuation">.</span><span class="token function">getMethodParamNames</span><span class="token punctuation">(</span><span class="token class-name">Method</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token comment">// 方法使用扫描</span>
<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Member</span><span class="token punctuation">&gt;</span></span> usages <span class="token operator">=</span>
    reflections<span class="token punctuation">.</span><span class="token function">getMethodUsages</span><span class="token punctuation">(</span><span class="token class-name">Method</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><ul><li>如果未配置扫描程序，则将使用默认值 - SubTypesScanner 和 TypeAnnotationsScanner。</li><li>还可以配置类加载器，它将用于从名称中解析运行时类。</li><li>Reflection 默认情况下会扩展超类型。 这解决了传输 URL 不被扫描的一些问题。</li></ul><h2 id="reflectionutils" tabindex="-1"><a class="header-anchor" href="#reflectionutils" aria-hidden="true">#</a> ReflectionUtils</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token import static"><span class="token namespace">org<span class="token punctuation">.</span>reflections<span class="token punctuation">.</span></span><span class="token class-name">ReflectionUtils</span><span class="token punctuation">.</span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Method</span><span class="token punctuation">&gt;</span></span> getters <span class="token operator">=</span> <span class="token function">getAllMethods</span><span class="token punctuation">(</span>someClass<span class="token punctuation">,</span>
  <span class="token function">withModifier</span><span class="token punctuation">(</span><span class="token class-name">Modifier</span><span class="token punctuation">.</span><span class="token constant">PUBLIC</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">withPrefix</span><span class="token punctuation">(</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">withParametersCount</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//or</span>
<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Method</span><span class="token punctuation">&gt;</span></span> listMethodsFromCollectionToBoolean <span class="token operator">=</span>
  <span class="token function">getAllMethods</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token function">withParametersAssignableTo</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">withReturnType</span><span class="token punctuation">(</span><span class="token keyword">boolean</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Field</span><span class="token punctuation">&gt;</span></span> fields <span class="token operator">=</span> <span class="token function">getAllFields</span><span class="token punctuation">(</span><span class="token class-name">SomeClass</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token function">withAnnotation</span><span class="token punctuation">(</span>annotation<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">withTypeAssignableTo</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),c=[e];function o(l,i){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","index.html.vue"]]);export{r as default};
