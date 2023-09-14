import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as t,c,a,b as o,d as p,e as l}from"./app-e12ad880.js";const i={},d=l(`<h1 id="java-容器之-set" tabindex="-1"><a class="header-anchor" href="#java-容器之-set" aria-hidden="true">#</a> Java 容器之 Set</h1><h2 id="set-简介" tabindex="-1"><a class="header-anchor" href="#set-简介" aria-hidden="true">#</a> Set 简介</h2><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/java/javacore/container/Set-diagrams.png" width="400"></div><p>Set 家族成员简介：</p><ul><li><code>Set</code> 继承了 <code>Collection</code> 的接口。实际上 <code>Set</code> 就是 <code>Collection</code>，只是行为略有不同：<code>Set</code> 集合不允许有重复元素。</li><li><code>SortedSet</code> 继承了 <code>Set</code> 的接口。<code>SortedSet</code> 中的内容是排序的唯一值，排序的方法是通过比较器(Comparator)。</li><li><code>NavigableSet</code> 继承了 <code>SortedSet</code> 的接口。它提供了丰富的查找方法：如&quot;获取大于/等于某值的元素&quot;、“获取小于/等于某值的元素”等等。</li><li><code>AbstractSet</code> 是一个抽象类，它继承于 <code>AbstractCollection</code>，<code>AbstractCollection</code> 实现了 Set 中的绝大部分方法，为实现 <code>Set</code> 的实例类提供了便利。</li><li><code>HashSet</code> 类依赖于 <code>HashMap</code>，它实际上是通过 <code>HashMap</code> 实现的。<code>HashSet</code> 中的元素是无序的、散列的。</li><li><code>TreeSet</code> 类依赖于 <code>TreeMap</code>，它实际上是通过 <code>TreeMap</code> 实现的。<code>TreeSet</code> 中的元素是有序的，它是按自然排序或者用户指定比较器排序的 Set。</li><li><code>LinkedHashSet</code> 是按插入顺序排序的 Set。</li><li><code>EnumSet</code> 是只能存放 Emum 枚举类型的 Set。</li></ul><h3 id="set-接口" tabindex="-1"><a class="header-anchor" href="#set-接口" aria-hidden="true">#</a> Set 接口</h3><p><code>Set</code> 继承了 <code>Collection</code> 的接口。实际上，<code>Set</code> 就是 <code>Collection</code>，二者提供的方法完全相同。</p><p><code>Set</code> 接口定义如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="sortedset-接口" tabindex="-1"><a class="header-anchor" href="#sortedset-接口" aria-hidden="true">#</a> SortedSet 接口</h3><p>继承了 <code>Set</code> 的接口。<code>SortedSet</code> 中的内容是排序的唯一值，排序的方法是通过比较器(Comparator)。</p><p><code>SortedSet</code> 接口定义如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">SortedSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>SortedSet</code> 接口新扩展的方法：</p><ul><li><code>comparator</code> - 返回 Comparator</li><li><code>subSet</code> - 返回指定区间的子集</li><li><code>headSet</code> - 返回小于指定元素的子集</li><li><code>tailSet</code> - 返回大于指定元素的子集</li><li><code>first</code> - 返回第一个元素</li><li><code>last</code> - 返回最后一个元素</li><li>spliterator</li></ul><h3 id="navigableset-接口" tabindex="-1"><a class="header-anchor" href="#navigableset-接口" aria-hidden="true">#</a> NavigableSet 接口</h3><p><code>NavigableSet</code> 继承了 <code>SortedSet</code>。它提供了丰富的查找方法。</p><p><code>NavigableSet</code> 接口定义如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">NavigableSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">SortedSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>NavigableSet</code> 接口新扩展的方法：</p><ul><li>lower - 返回小于指定值的元素中最接近的元素</li><li>higher - 返回大于指定值的元素中最接近的元素</li><li>floor - 返回小于或等于指定值的元素中最接近的元素</li><li>ceiling - 返回大于或等于指定值的元素中最接近的元素</li><li>pollFirst - 检索并移除第一个（最小的）元素</li><li>pollLast - 检索并移除最后一个（最大的）元素</li><li>descendingSet - 返回反序排列的 Set</li><li>descendingIterator - 返回反序排列的 Set 的迭代器</li><li>subSet - 返回指定区间的子集</li><li>headSet - 返回小于指定元素的子集</li><li>tailSet - 返回大于指定元素的子集</li></ul><h3 id="abstractset-抽象类" tabindex="-1"><a class="header-anchor" href="#abstractset-抽象类" aria-hidden="true">#</a> AbstractSet 抽象类</h3><p><code>AbstractSet</code> 类提供 <code>Set</code> 接口的核心实现，以最大限度地减少实现 <code>Set</code> 接口所需的工作。</p><p><code>AbstractSet</code> 抽象类定义如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">AbstractCollection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>事实上，主要的实现已经在 <code>AbstractCollection</code> 中完成。</p><h2 id="hashset-类" tabindex="-1"><a class="header-anchor" href="#hashset-类" aria-hidden="true">#</a> HashSet 类</h2><p><code>HashSet</code> 类依赖于 <code>HashMap</code>，它实际上是通过 <code>HashMap</code> 实现的。<code>HashSet</code> 中的元素是无序的、散列的。</p><p><code>HashSet</code> 类定义如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span>
    <span class="token keyword">extends</span> <span class="token class-name">AbstractSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span>
    <span class="token keyword">implements</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">Cloneable</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hashset-要点" tabindex="-1"><a class="header-anchor" href="#hashset-要点" aria-hidden="true">#</a> HashSet 要点</h3><ul><li><code>HashSet</code> 通过继承 <code>AbstractSet</code> 实现了 <code>Set</code> 接口中的骨干方法。</li><li><code>HashSet</code> 实现了 <code>Cloneable</code>，所以支持克隆。</li><li><code>HashSet</code> 实现了 <code>Serializable</code>，所以支持序列化。</li><li><code>HashSet</code> 中存储的元素是无序的。</li><li><code>HashSet</code> 允许 null 值的元素。</li><li><code>HashSet</code> 不是线程安全的。</li></ul><h3 id="hashset-原理" tabindex="-1"><a class="header-anchor" href="#hashset-原理" aria-hidden="true">#</a> HashSet 原理</h3><p><strong><code>HashSet</code> 是基于 <code>HashMap</code> 实现的。</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// HashSet 的核心，通过维护一个 HashMap 实体来实现 HashSet 方法</span>
<span class="token keyword">private</span> <span class="token keyword">transient</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map<span class="token punctuation">;</span>

<span class="token comment">// PRESENT 是用于关联 map 中当前操作元素的一个虚拟值</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Object</span> <span class="token constant">PRESENT</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>HashSet</code> 中维护了一个 <code>HashMap</code> 对象 map，<code>HashSet</code> 的重要方法，如 <code>add</code>、<code>remove</code>、<code>iterator</code>、<code>clear</code>、<code>size</code> 等都是围绕 map 实现的。 <ul><li><code>HashSet</code> 类中通过定义 <code>writeObject()</code> 和 <code>readObject()</code> 方法确定了其序列化和反序列化的机制。</li></ul></li><li>PRESENT 是用于关联 map 中当前操作元素的一个虚拟值。</li></ul><h2 id="treeset-类" tabindex="-1"><a class="header-anchor" href="#treeset-类" aria-hidden="true">#</a> TreeSet 类</h2><p><code>TreeSet</code> 类依赖于 <code>TreeMap</code>，它实际上是通过 <code>TreeMap</code> 实现的。<code>TreeSet</code> 中的元素是有序的，它是按自然排序或者用户指定比较器排序的 Set。</p><p><code>TreeSet</code> 类定义如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">AbstractSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span>
    <span class="token keyword">implements</span> <span class="token class-name">NavigableSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">Cloneable</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="treeset-要点" tabindex="-1"><a class="header-anchor" href="#treeset-要点" aria-hidden="true">#</a> TreeSet 要点</h3><ul><li><code>TreeSet</code> 通过继承 <code>AbstractSet</code> 实现了 <code>NavigableSet</code> 接口中的骨干方法。</li><li><code>TreeSet</code> 实现了 <code>Cloneable</code>，所以支持克隆。</li><li><code>TreeSet</code> 实现了 <code>Serializable</code>，所以支持序列化。</li><li><code>TreeSet</code> 中存储的元素是有序的。排序规则是自然顺序或比较器（<code>Comparator</code>）中提供的顺序规则。</li><li><code>TreeSet</code> 不是线程安全的。</li></ul><h3 id="treeset-源码" tabindex="-1"><a class="header-anchor" href="#treeset-源码" aria-hidden="true">#</a> TreeSet 源码</h3><p><strong>TreeSet 是基于 TreeMap 实现的。</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// TreeSet 的核心，通过维护一个 NavigableMap 实体来实现 TreeSet 方法</span>
<span class="token keyword">private</span> <span class="token keyword">transient</span> <span class="token class-name">NavigableMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> m<span class="token punctuation">;</span>

<span class="token comment">// PRESENT 是用于关联 map 中当前操作元素的一个虚拟值</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Object</span> <span class="token constant">PRESENT</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>TreeSet</code> 中维护了一个 <code>NavigableMap</code> 对象 map（实际上是一个 TreeMap 实例），<code>TreeSet</code> 的重要方法，如 <code>add</code>、<code>remove</code>、<code>iterator</code>、<code>clear</code>、<code>size</code> 等都是围绕 map 实现的。</li><li><code>PRESENT</code> 是用于关联 <code>map</code> 中当前操作元素的一个虚拟值。<code>TreeSet</code> 中的元素都被当成 <code>TreeMap</code> 的 key 存储，而 value 都填的是 <code>PRESENT</code>。</li></ul><h2 id="linkedhashset-类" tabindex="-1"><a class="header-anchor" href="#linkedhashset-类" aria-hidden="true">#</a> LinkedHashSet 类</h2><p><code>LinkedHashSet</code> 是按插入顺序排序的 Set。</p><p><code>LinkedHashSet</code> 类定义如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LinkedHashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span>
    <span class="token keyword">extends</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span>
    <span class="token keyword">implements</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">Cloneable</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linkedhashset-要点" tabindex="-1"><a class="header-anchor" href="#linkedhashset-要点" aria-hidden="true">#</a> LinkedHashSet 要点</h3><ul><li><code>LinkedHashSet</code> 通过继承 <code>HashSet</code> 实现了 <code>Set</code> 接口中的骨干方法。</li><li><code>LinkedHashSet</code> 实现了 <code>Cloneable</code>，所以支持克隆。</li><li><code>LinkedHashSet</code> 实现了 <code>Serializable</code>，所以支持序列化。</li><li><code>LinkedHashSet</code> 中存储的元素是按照插入顺序保存的。</li><li><code>LinkedHashSet</code> 不是线程安全的。</li></ul><h3 id="linkedhashset-原理" tabindex="-1"><a class="header-anchor" href="#linkedhashset-原理" aria-hidden="true">#</a> LinkedHashSet 原理</h3><p><code>LinkedHashSet</code> 有三个构造方法，无一例外，都是调用父类 <code>HashSet</code> 的构造方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">LinkedHashSet</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">,</span> <span class="token keyword">float</span> loadFactor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>initialCapacity<span class="token punctuation">,</span> loadFactor<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token class-name">LinkedHashSet</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>initialCapacity<span class="token punctuation">,</span> <span class="token number">.75f</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token class-name">LinkedHashSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">.75f</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要强调的是：<strong>LinkedHashSet 构造方法实际上调用的是父类 HashSet 的非 public 构造方法。</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">HashSet</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">,</span> <span class="token keyword">float</span> loadFactor<span class="token punctuation">,</span> <span class="token keyword">boolean</span> dummy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>initialCapacity<span class="token punctuation">,</span> loadFactor<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不同于 <code>HashSet</code> <code>public</code> 构造方法中初始化的 <code>HashMap</code> 实例，这个构造方法中，初始化了 <code>LinkedHashMap</code> 实例。</p><p>也就是说，实际上，<code>LinkedHashSet</code> 维护了一个双链表。由双链表的特性可以知道，它是按照元素的插入顺序保存的。所以，这就是 <code>LinkedHashSet</code> 中存储的元素是按照插入顺序保存的原理。</p><h2 id="enumset-类" tabindex="-1"><a class="header-anchor" href="#enumset-类" aria-hidden="true">#</a> EnumSet 类</h2><p><code>EnumSet</code> 类定义如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">EnumSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span> <span class="token keyword">extends</span> <span class="token class-name">Enum</span><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">AbstractSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span>
    <span class="token keyword">implements</span> <span class="token class-name">Cloneable</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="enumset-要点" tabindex="-1"><a class="header-anchor" href="#enumset-要点" aria-hidden="true">#</a> EnumSet 要点</h3><ul><li><code>EnumSet</code> 继承了 <code>AbstractSet</code>，所以有 <code>Set</code> 接口中的骨干方法。</li><li><code>EnumSet</code> 实现了 <code>Cloneable</code>，所以支持克隆。</li><li><code>EnumSet</code> 实现了 <code>Serializable</code>，所以支持序列化。</li><li><code>EnumSet</code> 通过 <code>&lt;E extends Enum&lt;E&gt;&gt;</code> 限定了存储元素必须是枚举值。</li><li><code>EnumSet</code> 没有构造方法，只能通过类中的 <code>static</code> 方法来创建 <code>EnumSet</code> 对象。</li><li><code>EnumSet</code> 是有序的。以枚举值在 <code>EnumSet</code> 类中的定义顺序来决定集合元素的顺序。</li><li><code>EnumSet</code> 不是线程安全的。</li></ul><h2 id="要点总结" tabindex="-1"><a class="header-anchor" href="#要点总结" aria-hidden="true">#</a> 要点总结</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200221190717.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,67),r={href:"https://item.jd.com/10058164.html",target:"_blank",rel:"noopener noreferrer"};function u(k,m){const s=e("ExternalLinkIcon");return t(),c("div",null,[d,a("ul",null,[a("li",null,[a("a",r,[o("Java 编程思想（Thinking in java）"),p(s)])])])])}const S=n(i,[["render",u],["__file","04.Java容器之Set.html.vue"]]);export{S as default};
