import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as s,d as t,e}from"./app-103fb7a1.js";const i={},u=e('<h1 id="java-容器简介" tabindex="-1"><a class="header-anchor" href="#java-容器简介" aria-hidden="true">#</a> Java 容器简介</h1><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200221175550.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="容器简介" tabindex="-1"><a class="header-anchor" href="#容器简介" aria-hidden="true">#</a> 容器简介</h2><h3 id="数组与容器" tabindex="-1"><a class="header-anchor" href="#数组与容器" aria-hidden="true">#</a> 数组与容器</h3><p>Java 中常用的存储容器就是数组和容器，二者有以下区别：</p><ul><li>存储大小是否固定 <ul><li>数组的<strong>长度固定</strong>；</li><li>容器的<strong>长度可变</strong>。</li></ul></li><li>数据类型 <ul><li><strong>数组可以存储基本数据类型，也可以存储引用数据类型</strong>；</li><li><strong>容器只能存储引用数据类型</strong>，基本数据类型的变量要转换成对应的包装类才能放入容器类中。</li></ul></li></ul>',6),r={href:"https://dunwu.github.io/blog/pages/55d693/",target:"_blank",rel:"noopener noreferrer"},d=e(`<h3 id="容器框架" tabindex="-1"><a class="header-anchor" href="#容器框架" aria-hidden="true">#</a> 容器框架</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/java/javacore/container/java-container-structure.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Java 容器框架主要分为 <code>Collection</code> 和 <code>Map</code> 两种。其中，<code>Collection</code> 又分为 <code>List</code>、<code>Set</code> 以及 <code>Queue</code>。</p><ul><li><code>Collection</code> - 一个独立元素的序列，这些元素都服从一条或者多条规则。 <ul><li><code>List</code> - 必须按照插入的顺序保存元素。</li><li><code>Set</code> - 不能有重复的元素。</li><li><code>Queue</code> - 按照排队规则来确定对象产生的顺序（通常与它们被插入的顺序相同）。</li></ul></li><li><code>Map</code> - 一组成对的“键值对”对象，允许你使用键来查找值。</li></ul><h2 id="容器的基本机制" tabindex="-1"><a class="header-anchor" href="#容器的基本机制" aria-hidden="true">#</a> 容器的基本机制</h2><blockquote><p>Java 的容器具有一定的共性，它们或全部或部分依赖以下技术。所以，学习以下技术点，对于理解 Java 容器的特性和原理有很大的帮助。</p></blockquote><h3 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h3><p>Java 1.5 引入了泛型技术。</p><p>Java <strong>容器通过泛型技术来保证其数据的类型安全</strong>。什么是类型安全呢？</p><p>举例来说：如果有一个 <code>List&lt;Object&gt;</code> 容器，Java <strong>编译器在编译时不会对原始类型进行类型安全检查</strong>，却会对带参数的类型进行检查，通过使用 Object 作为类型，可以告知编译器该方法可以接受任何类型的对象，比如 String 或 Integer。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有泛型技术，如示例中的代码那样，容器中就可能存储任意数据类型，这是很危险的行为。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>List&lt;String&gt; list = new ArrayList&lt;String&gt;();
list.add(&quot;123&quot;);
list.add(123);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),k={href:"https://dunwu.github.io/blog/pages/33a820/",target:"_blank",rel:"noopener noreferrer"},v=e(`<h3 id="iterable-和-iterator" tabindex="-1"><a class="header-anchor" href="#iterable-和-iterator" aria-hidden="true">#</a> Iterable 和 Iterator</h3><blockquote><p>Iterable 和 Iterator 目的在于遍历访问容器中的元素。</p></blockquote><p><code>Iterator</code> 接口定义：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token keyword">boolean</span> <span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">E</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnsupportedOperationException</span><span class="token punctuation">(</span><span class="token string">&quot;remove&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">forEachRemaining</span><span class="token punctuation">(</span><span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> action<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            action<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Iterable</code> 接口定义：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> action<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">T</span> t <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            action<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">default</span> <span class="token class-name">Spliterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">spliterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Spliterators</span><span class="token punctuation">.</span><span class="token function">spliteratorUnknownSize</span><span class="token punctuation">(</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Collection</code> 接口扩展了 <code>Iterable</code> 接口。</p><p>迭代其实我们可以简单地理解为遍历，是一个标准化遍历各类容器里面的所有对象的接口。它是一个经典的设计模式——迭代器模式（Iterator）。</p><p><strong>迭代器模式</strong> - <strong>提供一种方法顺序访问一个聚合对象中各个元素，而又无须暴露该对象的内部表示</strong>。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/java/oop/design-patterns/iterator-pattern.png" width="500"></div><p>示例：迭代器遍历</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IteratorDemo</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Iterator</span> it <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="comparable-和-comparator" tabindex="-1"><a class="header-anchor" href="#comparable-和-comparator" aria-hidden="true">#</a> Comparable 和 Comparator</h3><p><code>Comparable</code> 是排序接口。若一个类实现了 <code>Comparable</code> 接口，表示该类的实例可以比较，也就意味着支持排序。实现了 <code>Comparable</code> 接口的类的对象的列表或数组可以通过 <code>Collections.sort</code> 或 <code>Arrays.sort</code> 进行自动排序。</p><p><code>Comparable</code> 接口定义：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">T</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Comparator</code> 是比较接口，我们如果需要控制某个类的次序，而该类本身不支持排序(即没有实现 <code>Comparable</code> 接口)，那么我们就可以建立一个“该类的比较器”来进行排序，这个“比较器”只需要实现 <code>Comparator</code> 接口即可。也就是说，我们可以通过实现 <code>Comparator</code> 来新建一个比较器，然后通过这个比较器对类进行排序。</p><p><code>Comparator</code> 接口定义：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">T</span> o1<span class="token punctuation">,</span> <span class="token class-name">T</span> o2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 反转</span>
    <span class="token keyword">default</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">reversed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">reverseOrder</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">default</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">thenComparing</span><span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> other<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span>other<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token operator">&amp;</span> <span class="token class-name">Serializable</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>c1<span class="token punctuation">,</span> c2<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token function">compare</span><span class="token punctuation">(</span>c1<span class="token punctuation">,</span> c2<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>res <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">?</span> res <span class="token operator">:</span> other<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>c1<span class="token punctuation">,</span> c2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// thenComparingXXX 方法略</span>

    <span class="token comment">// 静态方法略</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Java 容器中，一些可以排序的容器，如 <code>TreeMap</code>、<code>TreeSet</code>，都可以通过传入 <code>Comparator</code>，来定义内部元素的排序规则。</p><h3 id="cloneable" tabindex="-1"><a class="header-anchor" href="#cloneable" aria-hidden="true">#</a> Cloneable</h3><p>Java 中 一个类要实现 <code>clone</code> 功能 必须实现 <code>Cloneable</code> 接口，否则在调用 <code>clone()</code> 时会报 <code>CloneNotSupportedException</code> 异常。</p><p>Java 中所有类都默认继承 <code>java.lang.Object</code> 类，在 <code>java.lang.Object</code> 类中有一个方法 <code>clone()</code>，这个方法将返回 <code>Object</code> 对象的一个拷贝。<code>Object</code> 类里的 <code>clone()</code> 方法仅仅用于浅拷贝（拷贝基本成员属性，对于引用类型仅返回指向改地址的引用）。</p><p>如果 Java 类需要深拷贝，需要覆写 <code>clone()</code> 方法。</p><h3 id="fail-fast" tabindex="-1"><a class="header-anchor" href="#fail-fast" aria-hidden="true">#</a> fail-fast</h3><h4 id="fail-fast-的要点" tabindex="-1"><a class="header-anchor" href="#fail-fast-的要点" aria-hidden="true">#</a> fail-fast 的要点</h4><p>Java 容器（如：ArrayList、HashMap、TreeSet 等待）的 javadoc 中常常提到类似的描述：</p><blockquote><p>注意，迭代器的快速失败行为无法得到保证，因为一般来说，不可能对是否出现不同步并发修改做出任何硬性保证。快速失败（fail-fast）迭代器会尽最大努力抛出 <code>ConcurrentModificationException</code>。因此，为提高这类迭代器的正确性而编写一个依赖于此异常的程序是错误的做法：迭代器的快速失败行为应该仅用于检测 bug。</p></blockquote><p>那么，我们不禁要问，什么是 fail-fast，为什么要有 fail-fast 机制？</p><p><strong>fail-fast 是 Java 容器的一种错误检测机制</strong>。当多个线程对容器进行结构上的改变的操作时，就可能触发 fail-fast 机制。记住是有可能，而不是一定。</p><p>例如：假设存在两个线程（线程 1、线程 2），线程 1 通过 <code>Iterator</code> 在遍历容器 A 中的元素，在某个时候线程 2 修改了容器 A 的结构（是结构上面的修改，而不是简单的修改容器元素的内容），那么这个时候程序就会抛出 <code>ConcurrentModificationException</code> 异常，从而产生 fail-fast 机制。</p><p><strong>容器在迭代操作中改变元素个数（添加、删除元素）都可能会导致 fail-fast</strong>。</p><p>示例：fail-fast 示例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FailFastDemo</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token constant">MAX</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token constant">MAX</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyThreadA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyThreadB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/** 迭代遍历容器所有元素 */</span>
    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">MyThreadA</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> iterator <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> i <span class="token operator">=</span> iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;MyThreadA 访问元素:&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MILLISECONDS</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/** 遍历删除指定范围内的所有偶数 */</span>
    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">MyThreadB</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token constant">MAX</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;MyThreadB 删除元素&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    list<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                i<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行后，会抛出 <code>java.util.ConcurrentModificationException</code> 异常。</p><h4 id="解决-fail-fast" tabindex="-1"><a class="header-anchor" href="#解决-fail-fast" aria-hidden="true">#</a> 解决 fail-fast</h4><p>fail-fast 有两种解决方案：</p><ul><li>在遍历过程中所有涉及到改变容器个数的地方全部加上 <code>synchronized</code> 或者直接使用 <code>Collections.synchronizedXXX</code> 容器，这样就可以解决。但是不推荐，因为增删造成的同步锁可能会阻塞遍历操作，影响吞吐。</li><li>使用并发容器，如：<code>CopyOnWriterArrayList</code>。</li></ul><h2 id="容器和线程安全" tabindex="-1"><a class="header-anchor" href="#容器和线程安全" aria-hidden="true">#</a> 容器和线程安全</h2><p>为了在并发环境下安全地使用容器，Java 提供了同步容器和并发容器。</p>`,40),m={href:"https://dunwu.github.io/blog/pages/b067d6/",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),h={href:"https://item.jd.com/10058164.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.jianshu.com/p/589d58033841",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.jianshu.com/p/9081017a2d67",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.cnblogs.com/chenssy/p/3821328.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://blog.csdn.net/chenssy/article/details/38151189",target:"_blank",rel:"noopener noreferrer"};function _(j,x){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("blockquote",null,[n("p",null,[s("💡 不了解什么是基本数据类型、引用数据类型、包装类这些概念，可以参考："),n("a",r,[s("Java 基本数据类型"),t(a)])])]),d,n("blockquote",null,[n("p",null,[s("💡 想深入了解 Java 泛型技术的用法和原理可以参考："),n("a",k,[s("深入理解 Java 泛型"),t(a)])])]),v,n("blockquote",null,[n("p",null,[s("同步容器和并发容器详情请参考："),n("a",m,[s("Java 并发容器"),t(a)])])]),b,n("ul",null,[n("li",null,[n("a",h,[s("Java 编程思想（第 4 版）"),t(a)])]),n("li",null,[n("a",g,[s("由浅入深理解 java 集合(一)——集合框架 Collection、Map"),t(a)])]),n("li",null,[n("a",f,[s("由浅入深理解 java 集合(二)——集合 Set"),t(a)])]),n("li",null,[n("a",w,[s("Java 提高篇（三十）-----Iterator"),t(a)])]),n("li",null,[n("a",y,[s("Java 提高篇（三四）-----fail-fast 机制"),t(a)])])])])}const I=p(i,[["render",_],["__file","01.Java容器简介.html.vue"]]);export{I as default};
