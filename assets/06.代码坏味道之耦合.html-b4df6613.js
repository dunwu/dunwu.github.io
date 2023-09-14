import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c,a as n,b as a,d as e,e as p}from"./app-e12ad880.js";const r={},l={href:"https://sourcemaking.com/refactoring/smells/couplers",target:"_blank",rel:"noopener noreferrer"},u=n("p",null,[n("strong",null,"耦合(Couplers)这组坏味道意味着：不同类之间过度耦合。")],-1),d=p(`<h2 id="不完美的库类" tabindex="-1"><a class="header-anchor" href="#不完美的库类" aria-hidden="true">#</a> 不完美的库类</h2><blockquote><p>不完美的库类(Incomplete Library Class)</p><p>当一个类库已经不能满足实际需要时，你就不得不改变这个库（如果这个库是只读的，那就没辙了）。</p></blockquote><h3 id="问题原因" tabindex="-1"><a class="header-anchor" href="#问题原因" aria-hidden="true">#</a> 问题原因</h3><p>许多编程技术都建立在库类的基础上。库类的作者没用未卜先知的能力，不能因此责怪他们。麻烦的是库往往构造的不够好，而且往往不可能让我们修改其中的类以满足我们的需要。</p><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h3><ul><li>如果你只想修改类库的一两个函数，可以运用 <code>引入外加函数(Introduce Foreign Method)</code>；</li><li>如果想要添加一大堆额外行为，就得运用 <code>引入本地扩展(Introduce Local Extension)</code> 。</li></ul><h3 id="收益" tabindex="-1"><a class="header-anchor" href="#收益" aria-hidden="true">#</a> 收益</h3><ul><li>减少代码重复（你不用一言不合就自己动手实现一个库的全部功能，代价太高）</li></ul><h3 id="何时忽略" tabindex="-1"><a class="header-anchor" href="#何时忽略" aria-hidden="true">#</a> 何时忽略</h3><ul><li>如果扩展库会带来额外的工作量。</li></ul><h3 id="重构方法说明" tabindex="-1"><a class="header-anchor" href="#重构方法说明" aria-hidden="true">#</a> 重构方法说明</h3><h4 id="引入外加函数-introduce-foreign-method" tabindex="-1"><a class="header-anchor" href="#引入外加函数-introduce-foreign-method" aria-hidden="true">#</a> 引入外加函数(Introduce Foreign Method)</h4><p><strong>问题</strong></p><p>你需要为提供服务的类增加一个函数，但你无法修改这个类。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Report</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
  <span class="token keyword">void</span> <span class="token function">sendReport</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Date</span> nextDay <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>previousEnd<span class="token punctuation">.</span><span class="token function">getYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      previousEnd<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> previousEnd<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解决</strong></p><p>在客户类中建立一个函数，并一个第一个参数形式传入一个服务类实例。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Report</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
  <span class="token keyword">void</span> <span class="token function">sendReport</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Date</span> newStart <span class="token operator">=</span> <span class="token function">nextDay</span><span class="token punctuation">(</span>previousEnd<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//...</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Date</span> <span class="token function">nextDay</span><span class="token punctuation">(</span><span class="token class-name">Date</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span><span class="token function">getYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> arg<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> arg<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="引入本地扩展-introduce-local-extension" tabindex="-1"><a class="header-anchor" href="#引入本地扩展-introduce-local-extension" aria-hidden="true">#</a> 引入本地扩展(Introduce Local Extension)</h4><p><strong>问题</strong></p><p>你需要为服务类提供一些额外函数，但你无法修改这个类。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/introduce-local-extension-before.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>解决</strong></p><p>建立一个新类，使它包含这些额外函数，让这个扩展品成为源类的子类或包装类。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/introduce-local-extension-after.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="中间人" tabindex="-1"><a class="header-anchor" href="#中间人" aria-hidden="true">#</a> 中间人</h2><blockquote><p>中间人(Middle Man)</p><p>如果一个类的作用仅仅是指向另一个类的委托，为什么要存在呢？</p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/middle-man-1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="问题原因-1" tabindex="-1"><a class="header-anchor" href="#问题原因-1" aria-hidden="true">#</a> 问题原因</h3><p>对象的基本特征之一就是封装：对外部世界隐藏其内部细节。封装往往伴随委托。但是人们可能过度运用委托。比如，你也许会看到一个类的大部分有用工作都委托给了其他类，类本身成了一个空壳，除了委托之外不做任何事情。</p><h3 id="解决方法-1" tabindex="-1"><a class="header-anchor" href="#解决方法-1" aria-hidden="true">#</a> 解决方法</h3><p>应该运用 <code>移除中间人(Remove Middle Man)</code>，直接和真正负责的对象打交道。</p><h3 id="收益-1" tabindex="-1"><a class="header-anchor" href="#收益-1" aria-hidden="true">#</a> 收益</h3><ul><li>减少笨重的代码。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/middle-man-2.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="何时忽略-1" tabindex="-1"><a class="header-anchor" href="#何时忽略-1" aria-hidden="true">#</a> 何时忽略</h3><p>如果是以下情况，不要删除已创建的中间人：</p><ul><li>添加中间人是为了避免类之间依赖关系。</li><li>一些设计模式有目的地创建中间人（例如代理模式和装饰器模式）。</li></ul><h3 id="重构方法说明-1" tabindex="-1"><a class="header-anchor" href="#重构方法说明-1" aria-hidden="true">#</a> 重构方法说明</h3><h4 id="移除中间人-remove-middle-man" tabindex="-1"><a class="header-anchor" href="#移除中间人-remove-middle-man" aria-hidden="true">#</a> 移除中间人(Remove Middle Man)</h4><p><strong>问题</strong></p><p>某个类做了过多的简单委托动作。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/remove-middle-man-before.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>解决</strong></p><p>让客户直接调用委托类。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/remove-middle-man-after.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="依恋情结" tabindex="-1"><a class="header-anchor" href="#依恋情结" aria-hidden="true">#</a> 依恋情结</h2><blockquote><p>依恋情结(Feature Envy)</p><p>一个函数访问其它对象的数据比访问自己的数据更多。</p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/feature-envy-1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="问题原因-2" tabindex="-1"><a class="header-anchor" href="#问题原因-2" aria-hidden="true">#</a> 问题原因</h3><p>这种气味可能发生在字段移动到数据类之后。如果是这种情况，你可能想将数据类的操作移动到这个类中。</p><h3 id="解决方法-2" tabindex="-1"><a class="header-anchor" href="#解决方法-2" aria-hidden="true">#</a> 解决方法</h3><p>As a basic rule, if things change at the same time, you should keep them in the same place. Usually data and functions that use this data are changed together (although exceptions are possible).</p><p>有一个基本原则：同时会发生改变的事情应该被放在同一个地方。通常，数据和使用这些数据的函数是一起改变的。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/feature-envy-2.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>如果一个函数明显应该被移到另一个地方，可运用 <code>搬移函数(Move Method)</code> 。</li><li>如果仅仅是函数的部分代码访问另一个对象的数据，运用 <code>提炼函数(Extract Method)</code> 将这部分代码移到独立的函数中。</li><li>如果一个方法使用来自其他几个类的函数，首先确定哪个类包含大多数使用的数据。然后，将该方法与其他数据一起放在此类中。或者，使用 <code>提炼函数(Extract Method)</code> 将方法拆分为几个部分，可以放置在不同类中的不同位置。</li></ul><h3 id="收益-2" tabindex="-1"><a class="header-anchor" href="#收益-2" aria-hidden="true">#</a> 收益</h3><ul><li>减少重复代码（如果数据处理的代码放在中心位置）。</li><li>更好的代码组织性（处理数据的函数靠近实际数据）。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/feature-envy-3.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="何时忽略-2" tabindex="-1"><a class="header-anchor" href="#何时忽略-2" aria-hidden="true">#</a> 何时忽略</h3><ul><li>有时，行为被有意地与保存数据的类分开。这通常的优点是能够动态地改变行为（见策略设计模式，访问者设计模式和其他模式）。</li></ul><h3 id="重构方法说明-2" tabindex="-1"><a class="header-anchor" href="#重构方法说明-2" aria-hidden="true">#</a> 重构方法说明</h3><h4 id="搬移函数-move-method" tabindex="-1"><a class="header-anchor" href="#搬移函数-move-method" aria-hidden="true">#</a> 搬移函数(Move Method)</h4><p><strong>问题</strong></p><p>你的程序中，有个函数与其所驻类之外的另一个类进行更多交流：调用后者，或被后者调用。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/move-method-before.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>解决</strong></p><p>在该函数最常引用的类中建立一个有着类似行为的新函数。将旧函数变成一个单纯的委托函数，或是旧函数完全移除。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/move-method-after.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="提炼函数-extract-method" tabindex="-1"><a class="header-anchor" href="#提炼函数-extract-method" aria-hidden="true">#</a> 提炼函数(Extract Method)</h4><p><strong>问题</strong></p><p>你有一段代码可以组织在一起。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">printOwing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printBanner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//print details</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name: &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;amount: &quot;</span> <span class="token operator">+</span> <span class="token function">getOutstanding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解决</strong></p><p>移动这段代码到一个新的函数中，使用函数的调用来替代老代码。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">printOwing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printBanner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">printDetails</span><span class="token punctuation">(</span><span class="token function">getOutstanding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">printDetails</span><span class="token punctuation">(</span><span class="token keyword">double</span> outstanding<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name: &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;amount: &quot;</span> <span class="token operator">+</span> outstanding<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="狎昵关系" tabindex="-1"><a class="header-anchor" href="#狎昵关系" aria-hidden="true">#</a> 狎昵关系</h2><blockquote><p>狎昵关系(Inappropriate Intimacy)</p><p>一个类大量使用另一个类的内部字段和方法。</p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/inappropriate-intimacy-1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="问题原因-3" tabindex="-1"><a class="header-anchor" href="#问题原因-3" aria-hidden="true">#</a> 问题原因</h3><p>类和类之间应该尽量少的感知彼此（减少耦合）。这样的类更容易维护和复用。</p><h3 id="解决方法-3" tabindex="-1"><a class="header-anchor" href="#解决方法-3" aria-hidden="true">#</a> 解决方法</h3><ul><li>最简单的解决方法是运用 <code>搬移函数(Move Method)</code> 和 <code>搬移字段(Move Field)</code> 来让类之间斩断羁绊。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/inappropriate-intimacy-2.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li><p>你也可以看看是否能运用 <code>将双向关联改为单向关联(Change Bidirectional Association to Unidirectional)</code> 让其中一个类对另一个说分手。</p></li><li><p>如果这两个类实在是情比金坚，难分难舍，可以运用 <code>提炼类(Extract Class)</code> 把二者共同点提炼到一个新类中，让它们产生爱的结晶。或者，可以尝试运用 <code>隐藏委托关系(Hide Delegate)</code> 让另一个类来为它们牵线搭桥。</p></li><li><p>继承往往造成类之间过分紧密，因为子类对超类的了解总是超过后者的主观愿望，如果你觉得该让这个子类自己闯荡，请运用 <code>以委托取代继承(Replace Inheritance with Delegation)</code> 来让超类和子类分家。</p></li></ul><h3 id="收益-3" tabindex="-1"><a class="header-anchor" href="#收益-3" aria-hidden="true">#</a> 收益</h3><ul><li>提高代码组织性。</li><li>提高代码复用性。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/inappropriate-intimacy-3.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="重构方法说明-3" tabindex="-1"><a class="header-anchor" href="#重构方法说明-3" aria-hidden="true">#</a> 重构方法说明</h3><h4 id="搬移函数-move-method-1" tabindex="-1"><a class="header-anchor" href="#搬移函数-move-method-1" aria-hidden="true">#</a> 搬移函数(Move Method)</h4><p><strong>问题</strong></p><p>你的程序中，有个函数与其所驻类之外的另一个类进行更多交流：调用后者，或被后者调用。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/move-method-before.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>解决</strong></p><p>在该函数最常引用的类中建立一个有着类似行为的新函数。将旧函数变成一个单纯的委托函数，或是旧函数完全移除。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/move-method-after.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="搬移字段-move-field" tabindex="-1"><a class="header-anchor" href="#搬移字段-move-field" aria-hidden="true">#</a> 搬移字段(Move Field)</h4><p><strong>问题</strong></p><p>在你的程序中，某个字段被其所驻类之外的另一个类更多地用到。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/move-field-before.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>解决</strong></p><p>在目标类新建一个字段，修改源字段的所有用户，令他们改用新字段。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/move-field-after.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="将双向关联改为单向关联-change-bidirectional-association-to-unidirectional" tabindex="-1"><a class="header-anchor" href="#将双向关联改为单向关联-change-bidirectional-association-to-unidirectional" aria-hidden="true">#</a> 将双向关联改为单向关联(Change Bidirectional Association to Unidirectional)</h4><p><strong>问题</strong></p><p>两个类之间有双向关联，但其中一个类如今不再需要另一个类的特性。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/change-bidirectional-association-to-unidirectional-before.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>解决</strong></p><p>去除不必要的关联。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/change-bidirectional-association-to-unidirectional-after.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="提炼类-extract-class" tabindex="-1"><a class="header-anchor" href="#提炼类-extract-class" aria-hidden="true">#</a> 提炼类(Extract Class)</h4><p><strong>问题</strong></p><p>某个类做了不止一件事。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/extract-class-before.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>解决</strong></p><p>建立一个新类，将相关的字段和函数从旧类搬移到新类。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/extract-class-after.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="隐藏委托关系-hide-delegate" tabindex="-1"><a class="header-anchor" href="#隐藏委托关系-hide-delegate" aria-hidden="true">#</a> 隐藏委托关系(Hide Delegate)</h4><p><strong>问题</strong></p><p>客户通过一个委托类来调用另一个对象。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/hide-delegate-before.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>解决</strong></p><p>在服务类上建立客户所需的所有函数，用以隐藏委托关系。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/hide-delegate-after.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="以委托取代继承-replace-inheritance-with-delegation" tabindex="-1"><a class="header-anchor" href="#以委托取代继承-replace-inheritance-with-delegation" aria-hidden="true">#</a> 以委托取代继承(Replace Inheritance with Delegation)</h4><p><strong>问题</strong></p><p>某个子类只使用超类接口中的一部分，或是根本不需要继承而来的数据。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/replace-delegation-with-inheritance-before.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>解决</strong></p><p>在子类中新建一个字段用以保存超类；调整子类函数，令它改而委托超类；然后去掉两者之间的继承关系。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/replace-delegation-with-inheritance-after.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="过度耦合的消息链" tabindex="-1"><a class="header-anchor" href="#过度耦合的消息链" aria-hidden="true">#</a> 过度耦合的消息链</h2><blockquote><p>过度耦合的消息链(Message Chains)</p><p>消息链的形式类似于：<code>obj.getA().getB().getC()</code>。</p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/message-chains-1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="问题原因-4" tabindex="-1"><a class="header-anchor" href="#问题原因-4" aria-hidden="true">#</a> 问题原因</h3><p>如果你看到用户向一个对象请求另一个对象，然后再向后者请求另一个对象，然后再请求另一个对象……这就是消息链。实际代码中你看到的可能是一长串 getThis()或一长串临时变量。采取这种方式，意味客户代码将与查找过程中的导航紧密耦合。一旦对象间关系发生任何变化，客户端就不得不做出相应的修改。</p><h3 id="解决方法-4" tabindex="-1"><a class="header-anchor" href="#解决方法-4" aria-hidden="true">#</a> 解决方法</h3><ul><li>可以运用 <code>隐藏委托关系(Hide Delegate)</code> 删除一个消息链。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/message-chains-2.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>有时更好的选择是：先观察消息链最终得到的对象是用来干什么的。看看能否以 <code>提炼函数(Extract Method)</code>把使用该对象的代码提炼到一个独立函数中，再运用 <code>搬移函数(Move Method)</code> 把这个函数推入消息链。</li></ul><h3 id="收益-4" tabindex="-1"><a class="header-anchor" href="#收益-4" aria-hidden="true">#</a> 收益</h3><ul><li>能减少链中类之间的依赖。</li><li>能减少代码量。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/message-chains-3.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="何时忽略-3" tabindex="-1"><a class="header-anchor" href="#何时忽略-3" aria-hidden="true">#</a> 何时忽略</h3><ul><li>过于侵略性的委托可能会使程序员难以理解功能是如何触发的。</li></ul><h3 id="重构方法说明-4" tabindex="-1"><a class="header-anchor" href="#重构方法说明-4" aria-hidden="true">#</a> 重构方法说明</h3><h4 id="隐藏委托关系-hide-delegate-1" tabindex="-1"><a class="header-anchor" href="#隐藏委托关系-hide-delegate-1" aria-hidden="true">#</a> 隐藏委托关系(Hide Delegate)</h4><p><strong>问题</strong></p><p>客户通过一个委托类来调用另一个对象。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/hide-delegate-before.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>解决</strong></p><p>在服务类上建立客户所需的所有函数，用以隐藏委托关系。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/hide-delegate-after.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="提炼函数-extract-method-1" tabindex="-1"><a class="header-anchor" href="#提炼函数-extract-method-1" aria-hidden="true">#</a> 提炼函数(Extract Method)</h4><p><strong>问题</strong></p><p>你有一段代码可以组织在一起。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">printOwing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printBanner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//print details</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name: &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;amount: &quot;</span> <span class="token operator">+</span> <span class="token function">getOutstanding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解决</strong></p><p>移动这段代码到一个新的函数中，使用函数的调用来替代老代码。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">printOwing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printBanner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">printDetails</span><span class="token punctuation">(</span><span class="token function">getOutstanding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">printDetails</span><span class="token punctuation">(</span><span class="token keyword">double</span> outstanding<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name: &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;amount: &quot;</span> <span class="token operator">+</span> outstanding<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="搬移函数-move-method-2" tabindex="-1"><a class="header-anchor" href="#搬移函数-move-method-2" aria-hidden="true">#</a> 搬移函数(Move Method)</h4><p><strong>问题</strong></p><p>你的程序中，有个函数与其所驻类之外的另一个类进行更多交流：调用后者，或被后者调用。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/move-method-before.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>解决</strong></p><p>在该函数最常引用的类中建立一个有着类似行为的新函数。将旧函数变成一个单纯的委托函数，或是旧函数完全移除。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/design/refactor/move-method-after.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="扩展阅读" tabindex="-1"><a class="header-anchor" href="#扩展阅读" aria-hidden="true">#</a> 扩展阅读</h2>`,168),g={href:"https://github.com/dunwu/design/blob/master/docs/refactor/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E4%BB%A3%E7%A0%81%E8%87%83%E8%82%BF.md",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E6%BB%A5%E7%94%A8%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.md",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E5%8F%98%E9%9D%A9%E7%9A%84%E9%9A%9C%E7%A2%8D.md",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E9%9D%9E%E5%BF%85%E8%A6%81%E7%9A%84.md",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E8%80%A6%E5%90%88.md",target:"_blank",rel:"noopener noreferrer"},v=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),a(" 参考资料")],-1),x={href:"https://book.douban.com/subject/4199741/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://book.douban.com/subject/4262627/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://book.douban.com/subject/1477390/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://sourcemaking.com/refactoring",target:"_blank",rel:"noopener noreferrer"};function _(B,z){const s=i("ExternalLinkIcon");return o(),c("div",null,[n("blockquote",null,[n("p",null,[a("翻译自："),n("a",l,[a("https://sourcemaking.com/refactoring/smells/couplers"),e(s)])]),u]),d,n("ul",null,[n("li",null,[n("a",g,[a("代码的坏味道和重构"),e(s)])]),n("li",null,[n("a",h,[a("代码坏味道之代码臃肿"),e(s)])]),n("li",null,[n("a",m,[a("代码坏味道之滥用面向对象"),e(s)])]),n("li",null,[n("a",f,[a("代码坏味道之变革的障碍"),e(s)])]),n("li",null,[n("a",k,[a("代码坏味道之非必要的"),e(s)])]),n("li",null,[n("a",b,[a("代码坏味道之耦合"),e(s)])])]),v,n("ul",null,[n("li",null,[n("a",x,[a("《代码整洁之道》"),e(s)])]),n("li",null,[n("a",w,[a("《重构 - 改善既有代码的设计》"),e(s)])]),n("li",null,[n("a",y,[a("《代码大全》"),e(s)])]),n("li",null,[n("a",E,[a("https://sourcemaking.com/refactoring"),e(s)])])])])}const A=t(r,[["render",_],["__file","06.代码坏味道之耦合.html.vue"]]);export{A as default};
