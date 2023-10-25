import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as u,a as s,b as n,d as e,e as t}from"./app-2811837c.js";const l={},i=t(`<h1 id="java-容器之-queue" tabindex="-1"><a class="header-anchor" href="#java-容器之-queue" aria-hidden="true">#</a> Java 容器之 Queue</h1><h2 id="queue-简介" tabindex="-1"><a class="header-anchor" href="#queue-简介" aria-hidden="true">#</a> Queue 简介</h2><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/javacore/container/Queue-diagrams.png"></div><h3 id="queue-接口" tabindex="-1"><a class="header-anchor" href="#queue-接口" aria-hidden="true">#</a> Queue 接口</h3><p><code>Queue</code> 接口定义如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="abstractqueue-抽象类" tabindex="-1"><a class="header-anchor" href="#abstractqueue-抽象类" aria-hidden="true">#</a> AbstractQueue 抽象类</h3><p><strong><code>AbstractQueue</code> 类提供 <code>Queue</code> 接口的核心实现</strong>，以最大限度地减少实现 <code>Queue</code> 接口所需的工作。</p><p><code>AbstractQueue</code> 抽象类定义如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span>
    <span class="token keyword">extends</span> <span class="token class-name">AbstractCollection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span>
    <span class="token keyword">implements</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="deque-接口" tabindex="-1"><a class="header-anchor" href="#deque-接口" aria-hidden="true">#</a> Deque 接口</h3><p>Deque 接口是 double ended queue 的缩写，即<strong>双端队列</strong>。Deque 继承 Queue 接口，并扩展支持<strong>在队列的两端插入和删除元素</strong>。</p><p>所以提供了特定的方法，如:</p>`,13),r={href:"https://docs.oracle.com/javase/9/docs/api/java/util/Deque.html#addLast-E-",target:"_blank",rel:"noopener noreferrer"},k={href:"https://docs.oracle.com/javase/9/docs/api/java/util/Deque.html#offerLast-E-",target:"_blank",rel:"noopener noreferrer"},d={href:"https://docs.oracle.com/javase/9/docs/api/java/util/Deque.html#removeLast--",target:"_blank",rel:"noopener noreferrer"},m={href:"https://docs.oracle.com/javase/9/docs/api/java/util/Deque.html#pollLast--",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>大多数的实现对元素的数量没有限制，但这个接口既支持有容量限制的 deque，也支持没有固定大小限制的。</p><h2 id="arraydeque" tabindex="-1"><a class="header-anchor" href="#arraydeque" aria-hidden="true">#</a> ArrayDeque</h2><p><code>ArrayDeque</code> 是 <code>Deque</code> 的顺序表实现。</p><p><code>ArrayDeque</code> 用一个动态数组实现了栈和队列所需的所有操作。</p><h2 id="linkedlist" tabindex="-1"><a class="header-anchor" href="#linkedlist" aria-hidden="true">#</a> LinkedList</h2><p><code>LinkedList</code> 是 <code>Deque</code> 的链表实现。</p><p>示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LinkedListQueueDemo</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//add()和remove()方法在失败的时候会抛出异常(不推荐)</span>
        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 入队</span>
        queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 入队</span>
        queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 入队</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> q <span class="token operator">:</span> queue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;===&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;poll=&quot;</span> <span class="token operator">+</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 出队</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> q <span class="token operator">:</span> queue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;===&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;element=&quot;</span> <span class="token operator">+</span> queue<span class="token punctuation">.</span><span class="token function">element</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//返回第一个元素</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> q <span class="token operator">:</span> queue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;===&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;peek=&quot;</span> <span class="token operator">+</span> queue<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//返回第一个元素</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> q <span class="token operator">:</span> queue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="priorityqueue" tabindex="-1"><a class="header-anchor" href="#priorityqueue" aria-hidden="true">#</a> PriorityQueue</h2><p><code>PriorityQueue</code> 类定义如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">AbstractQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span>
    <span class="token keyword">implements</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>PriorityQueue</code> 要点：</p><ul><li><code>PriorityQueue</code> 实现了 <code>Serializable</code>，支持序列化。</li><li><code>PriorityQueue</code> 类是无界优先级队列。</li><li><code>PriorityQueue</code> 中的元素根据自然顺序或 <code>Comparator</code> 提供的顺序排序。</li><li><code>PriorityQueue</code> 不接受 null 值元素。</li><li><code>PriorityQueue</code> 不是线程安全的。</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,14),h={href:"http://www.importnew.com/28053.html",target:"_blank",rel:"noopener noreferrer"};function b(g,q){const a=o("ExternalLinkIcon");return c(),u("div",null,[i,s("ul",null,[s("li",null,[n("尾部插入时需要的 "),s("a",r,[n("addLast(e)"),e(a)]),n("、"),s("a",k,[n("offerLast(e)"),e(a)]),n("。")]),s("li",null,[n("尾部删除所需要的 "),s("a",d,[n("removeLast()"),e(a)]),n("、"),s("a",m,[n("pollLast()"),e(a)]),n("。")])]),v,s("ul",null,[s("li",null,[s("a",h,[n("解读 Java 并发队列 BlockingQueue"),e(a)])])])])}const _=p(l,[["render",b],["__file","05.Java容器之Queue.html.vue"]]);export{_ as default};
