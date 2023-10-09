import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c,a as n,b as a,d as e,e as l}from"./app-4c6ca41d.js";const i={},r=l(`<h1 id="设计模式之简单工厂模式" tabindex="-1"><a class="header-anchor" href="#设计模式之简单工厂模式" aria-hidden="true">#</a> 设计模式之简单工厂模式</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><h3 id="简单工厂模式思想" tabindex="-1"><a class="header-anchor" href="#简单工厂模式思想" aria-hidden="true">#</a> 简单工厂模式思想</h3><p><strong>简单工厂模式 (Simple Factory)</strong> 又叫静态工厂方法（Static Factory Method）模式。</p><p>简单工厂模式通常是定义一个工厂类，这个类可以<strong>根据不同变量返回不同类的产品实例</strong>。</p><p>简单工厂模式是一种<strong>对象创建型模式</strong>。但是简单工厂模式<strong>不属于</strong>23 种 Gof 设计模式之一。</p><h3 id="简单工厂模式要点" tabindex="-1"><a class="header-anchor" href="#简单工厂模式要点" aria-hidden="true">#</a> 简单工厂模式要点</h3><p><strong>优点</strong>：简单工厂模式的工厂类是整个模式的关键。其中包含了必要的<strong>逻辑判断</strong>，根据外部信息，决定究竟应该创建哪个具体类的对象。通过使用简单工厂模式，用户无需了解对象如何创建的，只要传入必要信息就可以了。</p><p><strong>缺点</strong>：工厂类集中了所有实例的创建逻辑，<strong>违背了高内聚责任分配原则</strong>。随着系统中具体产品类不断增多，势必要不断修改工厂类，不易维护和扩展。同时，这也<strong>违背了开放封闭原则</strong>。</p><blockquote><p><strong>开放封闭原则</strong>：一个软件实体如类、模块和函数应该对扩展开放，对修改关闭。</p></blockquote><h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h2><p>如何实现一个具有加减乘除基本功能的计算器？</p><p>对于这四种运算来说，都需要两个操作数，差别仅在于返回的结果不同。</p><p>由此，我们可以抽象化它们的共性，提炼出一个父类。这个类中包含两个操作数，一个返回结果方法，这个方法期望在子类中得以实现。</p><p>以下通过具体代码来说明。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200724093427.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>【Product (Operation) 】</p><p>产品角色，简单工厂模式所创建的所有对象的父类，它负责描述<strong>所有实例所共有的公共接口</strong>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Product角色，所有实例所共有的公共接口</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Operation</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> numA<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> numB<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">int</span> <span class="token class-name">GetResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【ConcreteProduct 组】</p><p>具体产品角色，实现 Product 中的接口。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// ConcreteProduct 角色，实现 Product 中的接口</span>
<span class="token keyword">class</span> <span class="token class-name">Add</span> <span class="token keyword">extends</span> <span class="token class-name">Operation</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token class-name">GetResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> numA <span class="token operator">+</span> numB<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//ConcreteProduct 角色，实现 Product 中的接口</span>
<span class="token keyword">class</span> <span class="token class-name">Sub</span> <span class="token keyword">extends</span> <span class="token class-name">Operation</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token class-name">GetResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> numA <span class="token operator">-</span> numB<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//ConcreteProduct 角色，实现 Product 中的接口</span>
<span class="token keyword">class</span> <span class="token class-name">Mul</span> <span class="token keyword">extends</span> <span class="token class-name">Operation</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token class-name">GetResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> numA <span class="token operator">*</span> numB<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//ConcreteProduct 角色，实现 Product 中的接口</span>
<span class="token keyword">class</span> <span class="token class-name">Div</span> <span class="token keyword">extends</span> <span class="token class-name">Operation</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token class-name">GetResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>numB <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ERROR!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> numA <span class="token operator">/</span> numB<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【Factory (OperationFactory) 】</p><p>工厂角色，简单工厂模式的<strong>核心</strong>，它负责实现<strong>创建所有实例的内部逻辑</strong>。工厂类的创建产品类的方法可以被外界直接调用，创建所需的产品对象。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 工厂角色，简单工厂模式的核心，它负责实现创建所有实例的内部逻辑</span>
<span class="token keyword">class</span> <span class="token class-name">OperationFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Operation</span> <span class="token class-name">CreateOperation</span> <span class="token punctuation">(</span><span class="token keyword">char</span> operate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Operation</span> oper <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">switch</span><span class="token punctuation">(</span>operate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token char">&#39;+&#39;</span><span class="token operator">:</span>
            oper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token char">&#39;-&#39;</span><span class="token operator">:</span>
            oper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token char">&#39;*&#39;</span><span class="token operator">:</span>
            oper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Mul</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token char">&#39;/&#39;</span><span class="token operator">:</span>
            oper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Div</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> oper<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【客户端】</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SimpleFactoryPattern</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> numA <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> numB <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token class-name">Operation</span> oper <span class="token operator">=</span> <span class="token class-name">OperationFactory<span class="token punctuation">.</span>CreateOperation</span><span class="token punctuation">(</span><span class="token char">&#39;+&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        oper<span class="token punctuation">.</span>numA <span class="token operator">=</span> numA<span class="token punctuation">;</span>
        oper<span class="token punctuation">.</span>numB <span class="token operator">=</span> numB<span class="token punctuation">;</span>
        result <span class="token operator">=</span> <span class="token class-name"><span class="token namespace">oper<span class="token punctuation">.</span></span>GetResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>numA <span class="token operator">+</span> <span class="token string">&quot; + &quot;</span> <span class="token operator">+</span> numB <span class="token operator">+</span> <span class="token string">&quot; = &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【输出】</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>10 + 3 = 13
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,30),u={href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"};function k(v,m){const s=t("ExternalLinkIcon");return o(),c("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[a("《Head First 设计模式》"),e(s)])]),n("li",null,[n("a",d,[a("《大话设计模式》"),e(s)])])])])}const w=p(i,[["render",k],["__file","01.简单工厂模式.html.vue"]]);export{w as default};
