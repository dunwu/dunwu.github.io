import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as i,a as n,b as s,d as e,e as t}from"./app-2f2b7333.js";const l={},u=t(`<h1 id="设计模式之备忘录模式" tabindex="-1"><a class="header-anchor" href="#设计模式之备忘录模式" aria-hidden="true">#</a> 设计模式之备忘录模式</h1><h2 id="意图" tabindex="-1"><a class="header-anchor" href="#意图" aria-hidden="true">#</a> 意图</h2><p><strong>备忘录模式</strong>（Memento） 是一种行为设计模式， 允许在不暴露对象实现细节的情况下保存和恢复对象之前的状态。</p><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><ul><li>当你需要创建对象状态快照来恢复其之前的状态时， 可以使用备忘录模式。</li><li>当直接访问对象的成员变量、 获取器或设置器将导致封装被突破时， 可以使用该模式。</li></ul><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2><h3 id="结构说明" tabindex="-1"><a class="header-anchor" href="#结构说明" aria-hidden="true">#</a> 结构说明</h3><h4 id="基于嵌套类的实现" tabindex="-1"><a class="header-anchor" href="#基于嵌套类的实现" aria-hidden="true">#</a> 基于嵌套类的实现</h4><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210520172952.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li><p><strong>原发器</strong> （Originator） 类可以生成自身状态的快照， 也可以在需要时通过快照恢复自身状态。</p></li><li><p><strong>备忘录</strong> （Memento） 是原发器状态快照的值对象 （value object）。 通常做法是将备忘录设为不可变的， 并通过构造函数一次性传递数据。</p></li><li><p><strong>负责人</strong> （Caretaker） 仅知道 “何时” 和 “为何” 捕捉原发器的状态， 以及何时恢复状态。</p><p>负责人通过保存备忘录栈来记录原发器的历史状态。 当原发器需要回溯历史状态时， 负责人将从栈中获取最顶部的备忘录， 并将其传递给原发器的恢复 （restoration） 方法。</p></li><li><p>在该实现方法中， 备忘录类将被嵌套在原发器中。 这样原发器就可访问备忘录的成员变量和方法， 即使这些方法被声明为私有。 另一方面， 负责人对于备忘录的成员变量和方法的访问权限非常有限： 它们只能在栈中保存备忘录， 而不能修改其状态。</p></li></ol><h4 id="基于中间接口的实现" tabindex="-1"><a class="header-anchor" href="#基于中间接口的实现" aria-hidden="true">#</a> 基于中间接口的实现</h4><p>另外一种实现方法适用于不支持嵌套类的编程语言 （没错， 我说的就是 PHP）。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210520173029.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li>在没有嵌套类的情况下， 你可以规定负责人仅可通过明确声明的中间接口与备忘录互动， 该接口仅声明与备忘录元数据相关的方法， 限制其对备忘录成员变量的直接访问权限。</li><li>另一方面， 原发器可以直接与备忘录对象进行交互， 访问备忘录类中声明的成员变量和方法。 这种方式的缺点在于你需要将备忘录的所有成员变量声明为公有。</li></ol><h4 id="封装更加严格的实现" tabindex="-1"><a class="header-anchor" href="#封装更加严格的实现" aria-hidden="true">#</a> 封装更加严格的实现</h4><p>如果你不想让其他类有任何机会通过备忘录来访问原发器的状态， 那么还有另一种可用的实现方式。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210520173117.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li>这种实现方式允许存在多种不同类型的原发器和备忘录。 每种原发器都和其相应的备忘录类进行交互。 原发器和备忘录都不会将其状态暴露给其他类。</li><li>负责人此时被明确禁止修改存储在备忘录中的状态。 但负责人类将独立于原发器， 因为此时恢复方法被定义在了备忘录类中。</li><li>每个备忘录将与创建了自身的原发器连接。 原发器会将自己及状态传递给备忘录的构造函数。 由于这些类之间的紧密联系， 只要原发器定义了合适的设置器 （setter）， 备忘录就能恢复其状态。</li></ol><h3 id="结构代码范式" tabindex="-1"><a class="header-anchor" href="#结构代码范式" aria-hidden="true">#</a> 结构代码范式</h3><p><strong>Memento</strong> : 负责存储 Originator 对象的内部状态，并可以防止 Originator 以外的其他对象访问 Memento。</p><p>Memento 有两个接口，Caretaker 只能看到备忘录的窄接口，它只能将备忘录传递给其他对象。<br> Originator 可以看到一个宽接口，允许它访问返回到先前状态所需的所有数据。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Memento</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> state<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Memento</span><span class="token punctuation">(</span><span class="token class-name">String</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token class-name">GetState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Originator</strong> : 负责创建一个备忘录 Memento，用以记录当前时刻它的内部状态，并可使用备忘录恢复内部状态。</p><p>Originator 可根据需要决定 Memento 存储 Originator 的哪些内部状态。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Originator</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> state<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">SetState</span><span class="token punctuation">(</span><span class="token class-name">String</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token class-name">GetState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Memento</span> <span class="token class-name">CreateMemento</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Memento</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">SetMemento</span><span class="token punctuation">(</span><span class="token class-name">Memento</span> memento<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state <span class="token operator">=</span> <span class="token class-name"><span class="token namespace">memento<span class="token punctuation">.</span></span>GetState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;State = &quot;</span> <span class="token operator">+</span> state<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Caretaker</strong> : 负责保存好备忘录 Memento，不能对备忘录的内容进行操作或检查。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Caretaker</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Memento</span> memento<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">SetMemento</span><span class="token punctuation">(</span><span class="token class-name">Memento</span> memento<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>memento <span class="token operator">=</span> memento<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Memento</span> <span class="token class-name">GetMemento</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> memento<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MementoPattern</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Originator</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Originator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">o<span class="token punctuation">.</span></span>SetState</span><span class="token punctuation">(</span><span class="token string">&quot;ON&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">o<span class="token punctuation">.</span></span>Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Caretaker</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Caretaker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">c<span class="token punctuation">.</span></span>SetMemento</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">o<span class="token punctuation">.</span></span>CreateMemento</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name"><span class="token namespace">o<span class="token punctuation">.</span></span>SetState</span><span class="token punctuation">(</span><span class="token string">&quot;OFF&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">o<span class="token punctuation">.</span></span>Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name"><span class="token namespace">o<span class="token punctuation">.</span></span>SetMemento</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">c<span class="token punctuation">.</span></span>GetMemento</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">o<span class="token punctuation">.</span></span>Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>State = ON
State = OFF
State = ON
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码" aria-hidden="true">#</a> 伪代码</h2>`,32),r={href:"https://refactoringguru.cn/design-patterns/command",target:"_blank",rel:"noopener noreferrer"},d=t(`<figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210520173216.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>命令 （command） 对象将作为负责人， 它们会在执行与命令相关的操作前获取编辑器的备忘录。 当用户试图撤销最近的命令时， 编辑器可以使用保存在命令中的备忘录来将自身回滚到之前的状态。</p><p>备忘录类没有声明任何公有的成员变量、 获取器 （getter） 和设置器， 因此没有对象可以修改其内容。 备忘录与创建自己的编辑器相连接， 这使得备忘录能够通过编辑器对象的设置器传递数据， 恢复与其相连接的编辑器的状态。 由于备忘录与特定的编辑器对象相连接， 程序可以使用中心化的撤销栈实现对多个独立编辑器窗口的支持。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 原发器中包含了一些可能会随时间变化的重要数据。它还定义了在备忘录中保存</span>
<span class="token comment">// 自身状态的方法，以及从备忘录中恢复状态的方法。</span>
<span class="token keyword">class</span> <span class="token class-name">Editor</span> is
    <span class="token keyword">private</span> field text<span class="token punctuation">,</span> curX<span class="token punctuation">,</span> curY<span class="token punctuation">,</span> selectionWidth

    method <span class="token function">setText</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span> is
        <span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">=</span> text

    method <span class="token function">setCursor</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> is
        <span class="token keyword">this</span><span class="token punctuation">.</span>curX <span class="token operator">=</span> curX
        <span class="token keyword">this</span><span class="token punctuation">.</span>curY <span class="token operator">=</span> curY

    method <span class="token function">setSelectionWidth</span><span class="token punctuation">(</span>width<span class="token punctuation">)</span> is
        <span class="token keyword">this</span><span class="token punctuation">.</span>selectionWidth <span class="token operator">=</span> width

    <span class="token comment">// 在备忘录中保存当前的状态。</span>
    method <span class="token function">createSnapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token class-name">Snapshot</span> is
        <span class="token comment">// 备忘录是不可变的对象；因此原发器会将自身状态作为参数传递给备忘</span>
        <span class="token comment">// 录的构造函数。</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Snapshot</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> text<span class="token punctuation">,</span> curX<span class="token punctuation">,</span> curY<span class="token punctuation">,</span> selectionWidth<span class="token punctuation">)</span>

<span class="token comment">// 备忘录类保存有编辑器的过往状态。</span>
<span class="token keyword">class</span> <span class="token class-name">Snapshot</span> is
    <span class="token keyword">private</span> field editor<span class="token operator">:</span> <span class="token class-name">Editor</span>
    <span class="token keyword">private</span> field text<span class="token punctuation">,</span> curX<span class="token punctuation">,</span> curY<span class="token punctuation">,</span> selectionWidth

    constructor <span class="token class-name">Snapshot</span><span class="token punctuation">(</span>editor<span class="token punctuation">,</span> text<span class="token punctuation">,</span> curX<span class="token punctuation">,</span> curY<span class="token punctuation">,</span> selectionWidth<span class="token punctuation">)</span> is
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor <span class="token operator">=</span> editor
        <span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">=</span> text
        <span class="token keyword">this</span><span class="token punctuation">.</span>curX <span class="token operator">=</span> curX
        <span class="token keyword">this</span><span class="token punctuation">.</span>curY <span class="token operator">=</span> curY
        <span class="token keyword">this</span><span class="token punctuation">.</span>selectionWidth <span class="token operator">=</span> selectionWidth

    <span class="token comment">// 在某一时刻，编辑器之前的状态可以使用备忘录对象来恢复。</span>
    method <span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        editor<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
        editor<span class="token punctuation">.</span><span class="token function">setCursor</span><span class="token punctuation">(</span>curX<span class="token punctuation">,</span> curY<span class="token punctuation">)</span>
        editor<span class="token punctuation">.</span><span class="token function">setSelectionWidth</span><span class="token punctuation">(</span>selectionWidth<span class="token punctuation">)</span>

<span class="token comment">// 命令对象可作为负责人。在这种情况下，命令会在修改原发器状态之前获取一个</span>
<span class="token comment">// 备忘录。当需要撤销时，它会从备忘录中恢复原发器的状态。</span>
<span class="token keyword">class</span> <span class="token class-name">Command</span> is
    <span class="token keyword">private</span> field backup<span class="token operator">:</span> <span class="token class-name">Snapshot</span>

    method <span class="token function">makeBackup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        backup <span class="token operator">=</span> editor<span class="token punctuation">.</span><span class="token function">createSnapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    method <span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token keyword">if</span> <span class="token punctuation">(</span>backup <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            backup<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="与其他模式的关系" tabindex="-1"><a class="header-anchor" href="#与其他模式的关系" aria-hidden="true">#</a> 与其他模式的关系</h2>`,5),k={href:"https://refactoringguru.cn/design-patterns/command",target:"_blank",rel:"noopener noreferrer"},m={href:"https://refactoringguru.cn/design-patterns/memento",target:"_blank",rel:"noopener noreferrer"},v={href:"https://refactoringguru.cn/design-patterns/memento",target:"_blank",rel:"noopener noreferrer"},b={href:"https://refactoringguru.cn/design-patterns/iterator",target:"_blank",rel:"noopener noreferrer"},h={href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"},g={href:"https://refactoringguru.cn/design-patterns/memento",target:"_blank",rel:"noopener noreferrer"},f=n("h2",{id:"案例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#案例","aria-hidden":"true"},"#"),s(" 案例")],-1),w=n("p",null,[n("strong",null,"使用示例："),s(" 备忘录的基本原则可通过序列化来实现， 这在 Java 语言中很常见。 尽管备忘录不是生成对象状态快照的唯一或最有效方法， 但它能在保护原始对象的结构不暴露给其他对象的情况下保存对象状态的备份。")],-1),_=n("p",null,"下面是核心 Java 程序库中该模式的一些示例：",-1),y={href:"http://docs.oracle.com/javase/8/docs/api/java/io/Serializable.html",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"java.io.Serializable",-1),S={href:"http://docs.oracle.com/javaee/7/api/javax/faces/component/StateHolder.html",target:"_blank",rel:"noopener noreferrer"},M=n("code",null,"javax.faces.component.StateHolder",-1),j=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),O={href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"},W={href:"https://refactoringguru.cn/design-patterns/catalog",target:"_blank",rel:"noopener noreferrer"};function X(Y,N){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,n("p",null,[s("本例结合使用了"),n("a",r,[s("命令"),e(a)]),s("模式与备忘录模式， 可保存复杂文字编辑器的状态快照， 并能在需要时从快照中恢复之前的状态。")]),d,n("ul",null,[n("li",null,[s("你可以同时使用"),n("a",k,[s("命令模式"),e(a)]),s("和"),n("a",m,[s("备忘录模式"),e(a)]),s("来实现 “撤销”。 在这种情况下， 命令用于对目标对象执行各种不同的操作， 备忘录用来保存一条命令执行前该对象的状态。")]),n("li",null,[s("你可以同时使用"),n("a",v,[s("备忘录"),e(a)]),s("和"),n("a",b,[s("迭代器模式"),e(a)]),s("来获取当前迭代器的状态， 并且在需要的时候进行回滚。")]),n("li",null,[s("有时候"),n("a",h,[s("原型模式"),e(a)]),s("可以作为"),n("a",g,[s("备忘录"),e(a)]),s("的一个简化版本， 其条件是你需要在历史记录中存储的对象的状态比较简单， 不需要链接其他外部资源， 或者链接可以方便地重建。")])]),f,w,_,n("ul",null,[n("li",null,[s("所有 "),n("a",y,[x,e(a)]),s(" 的实现都可以模拟备忘录。")]),n("li",null,[s("所有 "),n("a",S,[M,e(a)]),s(" 的实现。")])]),j,n("ul",null,[n("li",null,[n("a",O,[s("《Head First 设计模式》"),e(a)])]),n("li",null,[n("a",C,[s("《大话设计模式》"),e(a)])]),n("li",null,[n("a",W,[s("设计模式教程"),e(a)])])])])}const E=p(l,[["render",X],["__file","21.备忘录模式.html.vue"]]);export{E as default};
