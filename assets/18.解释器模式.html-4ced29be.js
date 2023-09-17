import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,a as n,b as a,d as t,e as i}from"./app-4f05975a.js";const l={},u=i(`<h1 id="设计模式之解释器模式" tabindex="-1"><a class="header-anchor" href="#设计模式之解释器模式" aria-hidden="true">#</a> 设计模式之解释器模式</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><strong>解释器模式 (Interpreter)</strong> 定义一个语言，定义它的文法的一种表示。并定义一个解释器，这个解释器使用该表示来解释语言中的句子。</p><p>解释器模式是一种<strong>行为型模式</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200726112138.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>Context</strong> : 包含解释器之外的一些全局信息。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">class</span> <span class="token class-name">Context</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> input<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> output<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setInput</span><span class="token punctuation">(</span><span class="token class-name">String</span> input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>input <span class="token operator">=</span> input<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>input<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setOutput</span><span class="token punctuation">(</span><span class="token class-name">String</span> output<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>output <span class="token operator">=</span> output<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getOutput</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>output<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>AbstractExpression</strong> : 声明一个抽象的解释操作，这个接口为抽象语法树中所有的节点所共享。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractExpression</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token class-name">Interpret</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>TerminalExpression</strong> : 实现与文法中的终结符相关联的解释操作。实现抽象表达式中所要求的接口，主要是一个 Interprete()方法。</p><p>文法中的每一个终结符都有一个具体终结表达式与之对应。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">TerminalExpression</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractExpression</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Interpret</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        context<span class="token punctuation">.</span><span class="token function">setOutput</span><span class="token punctuation">(</span><span class="token string">&quot;终端&quot;</span> <span class="token operator">+</span> context<span class="token punctuation">.</span><span class="token function">getInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">getInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;经过终端解释器解释为：&quot;</span> <span class="token operator">+</span> context<span class="token punctuation">.</span><span class="token function">getOutput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>NonterminalExpression</strong> : 实现与文法中的非终结符相关联的解释操作。对文法中的每一条规则 R1，R2......Rn 都需要一个具体的非终结符表达式类。通过实现抽象表达式的 Interpret 方法实现解释操作。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">NonterminalExpression</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractExpression</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Interpret</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        context<span class="token punctuation">.</span><span class="token function">setOutput</span><span class="token punctuation">(</span><span class="token string">&quot;非终端&quot;</span> <span class="token operator">+</span> context<span class="token punctuation">.</span><span class="token function">getInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">getInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;经过非终端解释器解释为：&quot;</span> <span class="token operator">+</span> context<span class="token punctuation">.</span><span class="token function">getOutput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InterpreterPattern</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Context</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        context<span class="token punctuation">.</span><span class="token function">setInput</span><span class="token punctuation">(</span><span class="token string">&quot;ABC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">AbstractExpression</span> expression1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TerminalExpression</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">expression1<span class="token punctuation">.</span></span>Interpret</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">AbstractExpression</span> expression2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NonterminalExpression</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">expression2<span class="token punctuation">.</span></span>Interpret</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ABC经过终端解释器解释为：终端ABC
ABC经过非终端解释器解释为：非终端ABC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h2><h2 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h2><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,21),r={href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"};function d(v,m){const s=p("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[a("《Head First 设计模式》"),t(s)])]),n("li",null,[n("a",k,[a("《大话设计模式》"),t(s)])])])])}const x=e(l,[["render",d],["__file","18.解释器模式.html.vue"]]);export{x as default};
