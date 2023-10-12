import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,a as n,b as a,d as e,e as l}from"./app-2793f0f0.js";const i={},u=l(`<h1 id="velocity-快速入门" tabindex="-1"><a class="header-anchor" href="#velocity-快速入门" aria-hidden="true">#</a> Velocity 快速入门</h1><p><strong>Velocity （简称 VTL）是一个基于 Java 的模版引擎</strong>。它允许 web 页面设计者引用 JAVA 代码预定义的方法。Web 设计者可以根据 MVC 模式和 JAVA 程序员并行工作，这意味着 Web 设计者可以单独专注于设计良好的站点，而程序员则可单独专注于编写底层代码。Velocity 将 Java 代码从 web 页面中分离出来，使站点在长时间运行后仍然具有很好的可维护性，并提供了一个除 JSP 和 PHP 之外的可行的被选方案。</p><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><p>单行注释以##开始，并在本行结束。</p><div class="language-velocity line-numbers-mode" data-ext="velocity"><pre class="language-velocity"><code><span class="token velocity-comment comment">## This is a single line comment.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>多行注释，以 <code>#</code> 开始并以 <code>#</code> 结束可以处理这种情况。</p><div class="language-velocity line-numbers-mode" data-ext="velocity"><pre class="language-velocity"><code><span class="token velocity-comment comment">#*
 Thus begins a multi-line comment. Online visitors won&#39;t
 see this text because the Velocity Templating Engine will
 ignore it.
*#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注释块 ，可以用来存储诸如文档作者、版本信息等。</p><div class="language-velocity line-numbers-mode" data-ext="velocity"><pre class="language-velocity"><code><span class="token velocity-comment comment">#**
This is a VTL comment block and
may be used to store such information
as the document author and versioning
information:
@author
@version 5
*#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2><p>VTL 中有三种类型的引用：变量，属性和方法。</p><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3><p>变量（Variables）的简略标记是有一个前导 <code>$</code> 字符后跟一个 VTL 标识符（Identifier.）组成。一个 VTL 标识符必须以一个字母开始(a .. z 或 A .. Z)。</p><p>剩下的字符将由以下类型的字符组成：</p><ul><li>字母 (a .. z, A .. Z)</li><li>数字 (0 .. 9)</li><li>连字符(&quot;-&quot;)</li><li>下划线 (&quot;_&quot;)</li></ul><p>示例：有效变量</p><div class="language-velocity line-numbers-mode" data-ext="velocity"><pre class="language-velocity"><code><span class="token velocity-comment comment">## 有效变量变量名</span>
<span class="token variable">$foo</span>
<span class="token variable">$mudSlinger</span>
<span class="token variable">$mud-slinger</span>
<span class="token variable">$mud_slinger</span>
<span class="token variable">$mudSlinger1</span>

<span class="token velocity-comment comment">## 给变量赋值</span>
<span class="token directive"><span class="token keyword">#set</span><span class="token punctuation">(</span> <span class="token variable">$foo</span> <span class="token operator">=</span> <span class="token string">&quot;bar&quot;</span> <span class="token punctuation">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3><p>VTL 引用的第二种元素是属性，而属性具有独特的格式。属性的简略标记识前导符 <code>$</code> 后跟一个 VTL 标识符，在后跟一个点号(&quot;.&quot;)最后又是一个 VTL 标识符。</p><p>示例：有效属性</p><div class="language-velocity line-numbers-mode" data-ext="velocity"><pre class="language-velocity"><code><span class="token variable">$customer<span class="token punctuation">.</span>Address</span>
<span class="token variable">$purchase<span class="token punctuation">.</span>Total</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h3><p>方法在 JAVA 代码中定义，并作一些有用的事情，比如运行一个计算器或者作出一个决定。方法是实际上也是引用，由前导符 <code>$</code> 后跟一个 VTL 标识符，后跟一个 VTL 方法体（Method Body）。 VTL 方法体由一个 VTL 标识符后跟一个左括号，再跟可选的参数列表，最后是右括号。</p><p>示例：有效方法</p><div class="language-velocity line-numbers-mode" data-ext="velocity"><pre class="language-velocity"><code><span class="token variable">$customer<span class="token punctuation">.</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="token variable">$purchase<span class="token punctuation">.</span><span class="token function">getTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="token variable">$page<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span> <span class="token string">&quot;My Home Page&quot;</span> <span class="token punctuation">)</span></span>
<span class="token variable">$person<span class="token punctuation">.</span><span class="token function">setAttributes</span><span class="token punctuation">(</span> <span class="token punctuation">[</span><span class="token string">&quot;Strange&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Weird&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Excited&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="赋值" tabindex="-1"><a class="header-anchor" href="#赋值" aria-hidden="true">#</a> 赋值</h2><p><code>#set</code> 指令用来为引用设置相应的值。值可以被值派给变量引用或者是属性引用，而且赋值要在括号里括起来。</p><div class="language-velocity line-numbers-mode" data-ext="velocity"><pre class="language-velocity"><code><span class="token directive"><span class="token keyword">#set</span><span class="token punctuation">(</span> <span class="token variable">$monkey</span> <span class="token operator">=</span> <span class="token variable">$bill</span> <span class="token punctuation">)</span></span> <span class="token velocity-comment comment">## variable reference</span>
<span class="token directive"><span class="token keyword">#set</span><span class="token punctuation">(</span> <span class="token variable">$monkey<span class="token punctuation">.</span>Friend</span> <span class="token operator">=</span> <span class="token string">&quot;monica&quot;</span> <span class="token punctuation">)</span></span> <span class="token velocity-comment comment">## string literal</span>
<span class="token directive"><span class="token keyword">#set</span><span class="token punctuation">(</span> <span class="token variable">$monkey<span class="token punctuation">.</span>Blame</span> <span class="token operator">=</span> <span class="token variable">$whitehouse<span class="token punctuation">.</span>Leak</span> <span class="token punctuation">)</span></span> <span class="token velocity-comment comment">## property reference</span>
<span class="token directive"><span class="token keyword">#set</span><span class="token punctuation">(</span> <span class="token variable">$monkey<span class="token punctuation">.</span>Plan</span> <span class="token operator">=</span> <span class="token variable">$spindoctor<span class="token punctuation">.</span><span class="token function">weave</span><span class="token punctuation">(</span>$web<span class="token punctuation">)</span></span> <span class="token punctuation">)</span></span> <span class="token velocity-comment comment">## method reference</span>
<span class="token directive"><span class="token keyword">#set</span><span class="token punctuation">(</span> <span class="token variable">$monkey<span class="token punctuation">.</span>Number</span> <span class="token operator">=</span> <span class="token number">123</span> <span class="token punctuation">)</span></span> <span class="token velocity-comment comment">##number literal</span>
<span class="token directive"><span class="token keyword">#set</span><span class="token punctuation">(</span> <span class="token variable">$monkey<span class="token punctuation">.</span>Say</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Not&quot;</span><span class="token punctuation">,</span> <span class="token variable">$my</span><span class="token punctuation">,</span> <span class="token string">&quot;fault&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">)</span></span> <span class="token velocity-comment comment">## ArrayList</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><p>使用 <code>#set</code> 指令时，括在双引号中的字面字符串将解析和重新解释 。 然而，当字面字符串括在单引号中时，不被解析：</p><p>示例：</p><div class="language-velocity line-numbers-mode" data-ext="velocity"><pre class="language-velocity"><code><span class="token directive"><span class="token keyword">#set</span><span class="token punctuation">(</span> <span class="token variable">$foo</span> <span class="token operator">=</span> <span class="token string">&quot;bar&quot;</span> <span class="token punctuation">)</span></span>
<span class="token variable">$foo</span>
<span class="token directive"><span class="token keyword">#set</span><span class="token punctuation">(</span> <span class="token variable">$blargh</span> <span class="token operator">=</span> <span class="token string">&#39;$foo&#39;</span> <span class="token punctuation">)</span></span>
<span class="token variable">$blargh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-velocity line-numbers-mode" data-ext="velocity"><pre class="language-velocity"><code>Bar
 <span class="token variable">$foo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="条件" tabindex="-1"><a class="header-anchor" href="#条件" aria-hidden="true">#</a> 条件</h2><p>VTL 使用 <code>#If</code>、<code>#elseif</code>、<code>#else</code> 指令做条件语句控制。</p><p>示例：</p><div class="language-velocity line-numbers-mode" data-ext="velocity"><pre class="language-velocity"><code><span class="token directive"><span class="token keyword">#if</span><span class="token punctuation">(</span> <span class="token variable">$foo</span> <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">)</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>Go North<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>
<span class="token directive"><span class="token keyword">#elseif</span><span class="token punctuation">(</span> <span class="token variable">$foo</span> <span class="token operator">==</span> <span class="token number">10</span> <span class="token punctuation">)</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>Go East<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>
<span class="token directive"><span class="token keyword">#elseif</span><span class="token punctuation">(</span> <span class="token variable">$bar</span> <span class="token operator">==</span> <span class="token number">6</span> <span class="token punctuation">)</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>Go South<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>
<span class="token directive"><span class="token keyword">#else</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>Go West<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>
<span class="token directive"><span class="token keyword">#end</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="逻辑" tabindex="-1"><a class="header-anchor" href="#逻辑" aria-hidden="true">#</a> 逻辑</h2><p>VTL 支持与（<code>&amp;&amp;</code>）、或（<code>||</code>）、非（<code>!</code>）逻辑判断。</p><p>示例：</p><div class="language-velocity line-numbers-mode" data-ext="velocity"><pre class="language-velocity"><code><span class="token directive"><span class="token keyword">#if</span><span class="token punctuation">(</span> <span class="token variable">$foo</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$bar</span> <span class="token punctuation">)</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span> This AND that<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>
<span class="token directive"><span class="token keyword">#end</span></span>

<span class="token directive"><span class="token keyword">#if</span><span class="token punctuation">(</span> <span class="token variable">$foo</span> <span class="token operator">||</span> <span class="token variable">$bar</span> <span class="token punctuation">)</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>This or That<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>
<span class="token directive"><span class="token keyword">#end</span></span>

<span class="token directive"><span class="token keyword">#if</span><span class="token punctuation">(</span> <span class="token operator">!</span><span class="token variable">$foo</span> <span class="token punctuation">)</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>NOT that<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>
<span class="token directive"><span class="token keyword">#end</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h2><p>VTL 通过 <code>#foreach</code> 支持循环</p><div class="language-velocity line-numbers-mode" data-ext="velocity"><pre class="language-velocity"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token directive"><span class="token keyword">#foreach</span><span class="token punctuation">(</span> <span class="token variable">$product</span> <span class="token keyword">in</span> <span class="token variable">$allProducts</span> <span class="token punctuation">)</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token variable">$product</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token directive"><span class="token keyword">#end</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="包含" tabindex="-1"><a class="header-anchor" href="#包含" aria-hidden="true">#</a> 包含</h2><p>VTL 通过 <code>#include</code> 来导入其他文件。</p><p>示例：</p><div class="language-velocity line-numbers-mode" data-ext="velocity"><pre class="language-velocity"><code><span class="token directive"><span class="token keyword">#include</span><span class="token punctuation">(</span> <span class="token string">&quot;one.txt&quot;</span> <span class="token punctuation">)</span></span>

<span class="token directive"><span class="token keyword">#include</span><span class="token punctuation">(</span> <span class="token string">&quot;one.gif&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;two.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;three.htm&quot;</span> <span class="token punctuation">)</span></span>

<span class="token directive"><span class="token keyword">#include</span><span class="token punctuation">(</span> <span class="token string">&quot;greetings.txt&quot;</span><span class="token punctuation">,</span> <span class="token variable">$seasonalstock</span> <span class="token punctuation">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h2><p>VTL 通过 <code>#parse</code> 导入其他 vm 文件。</p><div class="language-velocity line-numbers-mode" data-ext="velocity"><pre class="language-velocity"><code><span class="token variable">$count</span>
<span class="token directive"><span class="token keyword">#set</span><span class="token punctuation">(</span> <span class="token variable">$count</span> <span class="token operator">=</span> <span class="token variable">$count</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">)</span></span>
<span class="token directive"><span class="token keyword">#if</span><span class="token punctuation">(</span> <span class="token variable">$count</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">)</span></span>
    <span class="token directive"><span class="token keyword">#parse</span><span class="token punctuation">(</span> <span class="token string">&quot;parsefoo.vm&quot;</span> <span class="token punctuation">)</span></span>
<span class="token directive"><span class="token keyword">#else</span></span>
    All done with parsefoo.vm!
<span class="token directive"><span class="token keyword">#end</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="停止" tabindex="-1"><a class="header-anchor" href="#停止" aria-hidden="true">#</a> 停止</h2><p>VTL 使用 <code>#stop</code> 停止模板引擎的执行，并返回。这通常用作调试。</p><div class="language-velocity line-numbers-mode" data-ext="velocity"><pre class="language-velocity"><code><span class="token directive"><span class="token keyword">#stop</span></span> <span class="token velocity-comment comment">##</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="宏" tabindex="-1"><a class="header-anchor" href="#宏" aria-hidden="true">#</a> 宏</h2><p>VTL 使用 <code>#macro</code> 和 <code>#end</code> 配合来定义宏，以此实现自定义指令。</p><p>示例一：</p><div class="language-velocity line-numbers-mode" data-ext="velocity"><pre class="language-velocity"><code><span class="token velocity-comment comment">## 定义宏</span>
<span class="token directive"><span class="token keyword">#macro</span><span class="token punctuation">(</span> d <span class="token punctuation">)</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
<span class="token directive"><span class="token keyword">#end</span></span>

<span class="token velocity-comment comment">## 使用宏</span>
<span class="token directive"><span class="token keyword">#d</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例二：</p><div class="language-velocity line-numbers-mode" data-ext="velocity"><pre class="language-velocity"><code><span class="token velocity-comment comment">## 定义宏</span>
<span class="token directive"><span class="token keyword">#macro</span><span class="token punctuation">(</span> tablerows <span class="token variable">$color</span> <span class="token variable">$somelist</span> <span class="token punctuation">)</span></span>
  <span class="token directive"><span class="token keyword">#foreach</span><span class="token punctuation">(</span> <span class="token variable">$something</span> <span class="token keyword">in</span> <span class="token variable">$somelist</span> <span class="token punctuation">)</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">bgcolor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token variable">$color</span></span><span class="token punctuation">&gt;</span></span><span class="token variable">$something</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token directive"><span class="token keyword">#end</span></span>
<span class="token directive"><span class="token keyword">#end</span></span>

<span class="token velocity-comment comment">## 使用宏</span>
<span class="token directive"><span class="token keyword">#set</span><span class="token punctuation">(</span> <span class="token variable">$greatlakes</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Superior&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Michigan&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Huron&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Erie&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Ontario&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">)</span></span>
<span class="token directive"><span class="token keyword">#set</span><span class="token punctuation">(</span> <span class="token variable">$color</span> <span class="token operator">=</span> <span class="token string">&quot;blue&quot;</span> <span class="token punctuation">)</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>
    <span class="token directive"><span class="token keyword">#tablerows</span><span class="token punctuation">(</span> <span class="token variable">$color</span> <span class="token variable">$greatlakes</span> <span class="token punctuation">)</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">bgcolor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>blue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Superior<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">bgcolor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>blue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Michigan<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">bgcolor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>blue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Huron<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">bgcolor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>blue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Erie<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">bgcolor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>blue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Ontario<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="转义" tabindex="-1"><a class="header-anchor" href="#转义" aria-hidden="true">#</a> 转义</h2><p>VTL 使用 <code>\\</code> 符号来进行字符转义。</p><p>示例一</p><div class="language-velocity line-numbers-mode" data-ext="velocity"><pre class="language-velocity"><code><span class="token velocity-comment comment">## The following line defines $email in this template:</span>
<span class="token directive"><span class="token keyword">#set</span><span class="token punctuation">(</span> <span class="token variable">$email</span> <span class="token operator">=</span> <span class="token string">&quot;foo&quot;</span> <span class="token punctuation">)</span></span>
<span class="token variable">$email</span>
\\$email
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-velocity line-numbers-mode" data-ext="velocity"><pre class="language-velocity"><code>foo
<span class="token variable">$email</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语义要点" tabindex="-1"><a class="header-anchor" href="#语义要点" aria-hidden="true">#</a> 语义要点</h2><p>Velocity 有一些语义要点，容易产生歧义，这里归纳一下。</p><p>（1）<strong>Velocity 的行为并不受空格的影响</strong>。</p><p>示例：以下三种写法效果一致</p><div class="language-velocity line-numbers-mode" data-ext="velocity"><pre class="language-velocity"><code><span class="token velocity-comment comment">## 写法一</span>
Send me <span class="token directive"><span class="token keyword">#set</span><span class="token punctuation">(</span><span class="token variable">$foo</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;$10 and &quot;</span><span class="token punctuation">,</span><span class="token string">&quot;a cake&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span><span class="token directive"><span class="token keyword">#foreach</span><span class="token punctuation">(</span><span class="token variable">$a</span> <span class="token keyword">in</span> <span class="token variable">$foo</span><span class="token punctuation">)</span></span><span class="token variable">$a</span> <span class="token directive"><span class="token keyword">#end</span></span> please.

<span class="token velocity-comment comment">## 写法二</span>
Send me
<span class="token directive"><span class="token keyword">#set</span><span class="token punctuation">(</span> <span class="token variable">$foo</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;$10 and &quot;</span><span class="token punctuation">,</span><span class="token string">&quot;a cake&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">)</span></span>
<span class="token directive"><span class="token keyword">#foreach</span><span class="token punctuation">(</span> <span class="token variable">$a</span> <span class="token keyword">in</span> <span class="token variable">$foo</span> <span class="token punctuation">)</span></span>
<span class="token variable">$a</span>
<span class="token directive"><span class="token keyword">#end</span></span>
please.

<span class="token velocity-comment comment">## 写法三</span>
Send me
<span class="token directive"><span class="token keyword">#set</span><span class="token punctuation">(</span><span class="token variable">$foo</span>       <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;$10 and &quot;</span><span class="token punctuation">,</span><span class="token string">&quot;a cake&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
                 <span class="token directive"><span class="token keyword">#foreach</span>           <span class="token punctuation">(</span><span class="token variable">$a</span> <span class="token keyword">in</span> <span class="token variable">$foo</span> <span class="token punctuation">)</span></span><span class="token variable">$a</span>
         <span class="token directive"><span class="token keyword">#end</span></span> please.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,75),r={href:"https://github.com/apache/velocity-engine/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://velocity.apache.org/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://wizardforcel.gitbooks.io/velocity-doc/content/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/alibaba/velocity-spring-boot-project",target:"_blank",rel:"noopener noreferrer"};function m(g,b){const s=p("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[a("Velocity Github"),e(s)])]),n("li",null,[n("a",d,[a("Velocity 官网"),e(s)])]),n("li",null,[n("a",k,[a("Velocity 中文文档"),e(s)])]),n("li",null,[n("a",v,[a("velocity-spring-boot-project"),e(s)])])])])}const f=t(i,[["render",m],["__file","03.Velocity.html.vue"]]);export{f as default};
