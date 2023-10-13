import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as p,a as n,b as s,d as e,e as i}from"./app-dc48b2dc.js";const r={},l=i(`<h1 id="深入理解-java-string-类型" tabindex="-1"><a class="header-anchor" href="#深入理解-java-string-类型" aria-hidden="true">#</a> 深入理解 Java String 类型</h1><blockquote><p>String 类型可能是 Java 中应用最频繁的引用类型，但它的性能问题却常常被忽略。高效的使用字符串，可以提升系统的整体性能。当然，要做到高效使用字符串，需要深入了解其特性。</p></blockquote><h2 id="string-的不可变性" tabindex="-1"><a class="header-anchor" href="#string-的不可变性" aria-hidden="true">#</a> String 的不可变性</h2><p>我们先来看下 <code>String</code> 的定义：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">String</span>
    <span class="token keyword">implements</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span><span class="token punctuation">,</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">CharSequence</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** The value is used for character storage. */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">char</span> value<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>String</code> 类被 <code>final</code> 关键字修饰，表示<strong>不可继承 <code>String</code> 类</strong>。</p><p><code>String</code> 类的数据存储于 <code>char[]</code> 数组，这个数组被 <code>final</code> 关键字修饰，表示 <strong><code>String</code> 对象不可被更改</strong>。</p><p>为什么 Java 要这样设计？</p><p>（1）<strong>保证 String 对象安全性</strong>。避免 String 被篡改。</p><p>（2）<strong>保证 hash 值不会频繁变更</strong>。</p><p>（3）<strong>可以实现字符串常量池</strong>。通常有两种创建字符串对象的方式，一种是通过字符串常量的方式创建，如 <code>String str=&quot;abc&quot;;</code> 另一种是字符串变量通过 new 形式的创建，如 <code>String str = new String(&quot;abc&quot;)</code>。</p><p>使用第一种方式创建字符串对象时，JVM 首先会检查该对象是否在字符串常量池中，如果在，就返回该对象引用，否则新的字符串将在常量池中被创建。这种方式可以减少同一个值的字符串对象的重复创建，节约内存。</p><p><code>String str = new String(&quot;abc&quot;)</code> 这种方式，首先在编译类文件时，<code>&quot;abc&quot;</code> 常量字符串将会放入到常量结构中，在类加载时，<code>&quot;abc&quot;</code> 将会在常量池中创建；其次，在调用 new 时，JVM 命令将会调用 <code>String</code> 的构造函数，同时引用常量池中的 <code>&quot;abc&quot;</code> 字符串，在堆内存中创建一个 <code>String</code> 对象；最后，str 将引用 <code>String</code> 对象。</p><h2 id="string-的性能考量" tabindex="-1"><a class="header-anchor" href="#string-的性能考量" aria-hidden="true">#</a> String 的性能考量</h2><h3 id="字符串拼接" tabindex="-1"><a class="header-anchor" href="#字符串拼接" aria-hidden="true">#</a> 字符串拼接</h3><p><strong>字符串常量的拼接，编译器会将其优化为一个常量字符串</strong>。</p><p>【示例】字符串常量拼接</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 本行代码在 class 文件中，会被编译器直接优化为：</span>
    <span class="token comment">// String str = &quot;abc&quot;;</span>
    <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;b&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;str = &quot;</span> <span class="token operator">+</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>字符串变量的拼接，编译器会优化成 <code>StringBuilder</code> 的方式</strong>。</p><p>【示例】字符串变量的拼接</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 本行代码会被编译器优化为：</span>
        <span class="token comment">// str = (new StringBuilder(String.valueOf(str))).append(i).toString();</span>
        str <span class="token operator">=</span> str <span class="token operator">+</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，每次循环都会生成一个新的 <code>StringBuilder</code> 实例，同样也会降低系统的性能。</p><p>字符串拼接的正确方案：</p><ul><li>如果需要使用<strong>字符串拼接，应该优先考虑 <code>StringBuilder</code> 的 <code>append</code> 方法替代使用 <code>+</code> 号</strong>。</li><li>如果在并发编程中，<code>String</code> 对象的拼接涉及到线程安全，可以使用 <code>StringBuffer</code>。但是要注意，由于 <code>StringBuffer</code> 是线程安全的，涉及到锁竞争，所以从性能上来说，要比 <code>StringBuilder</code> 差一些。</li></ul><h3 id="字符串分割" tabindex="-1"><a class="header-anchor" href="#字符串分割" aria-hidden="true">#</a> 字符串分割</h3><p><strong><code>String</code> 的 <code>split()</code> 方法使用正则表达式实现其强大的分割功能</strong>。而正则表达式的性能是非常不稳定的，使用不恰当会引起回溯问题，很可能导致 CPU 居高不下。</p><p>所以，应该慎重使用 <code>split()</code> 方法，<strong>可以考虑用 <code>String.indexOf()</code> 方法代替 <code>split()</code> 方法完成字符串的分割</strong>。如果实在无法满足需求，你就在使用 Split() 方法时，对回溯问题加以重视就可以了。</p><h3 id="string-intern" tabindex="-1"><a class="header-anchor" href="#string-intern" aria-hidden="true">#</a> String.intern</h3><p><strong>在每次赋值的时候使用 <code>String</code> 的 <code>intern</code> 方法，如果常量池中有相同值，就会重复使用该对象，返回对象引用，这样一开始的对象就可以被回收掉</strong>。</p><p>在字符串常量中，默认会将对象放入常量池；在字符串变量中，对象是会创建在堆内存中，同时也会在常量池中创建一个字符串对象，复制到堆内存对象中，并返回堆内存对象引用。</p><p>如果调用 <code>intern</code> 方法，会去查看字符串常量池中是否有等于该对象的字符串，如果没有，就在常量池中新增该对象，并返回该对象引用；如果有，就返回常量池中的字符串引用。堆内存中原有的对象由于没有引用指向它，将会通过垃圾回收器回收。</p><p>【示例】</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SharedLocation</span> <span class="token punctuation">{</span>

	<span class="token keyword">private</span> <span class="token class-name">String</span> city<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> region<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> countryCode<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">SharedLocation</span> sharedLocation <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SharedLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sharedLocation<span class="token punctuation">.</span><span class="token function">setCity</span><span class="token punctuation">(</span>messageInfo<span class="token punctuation">.</span><span class="token function">getCity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">intern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		sharedLocation<span class="token punctuation">.</span><span class="token function">setCountryCode</span><span class="token punctuation">(</span>messageInfo<span class="token punctuation">.</span><span class="token function">getRegion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">intern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sharedLocation<span class="token punctuation">.</span><span class="token function">setRegion</span><span class="token punctuation">(</span>messageInfo<span class="token punctuation">.</span><span class="token function">getCountryCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">intern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>使用 <code>intern</code> 方法需要注意：一定要结合实际场景。因为常量池的实现是类似于一个 HashTable 的实现方式，HashTable 存储的数据越大，遍历的时间复杂度就会增加。如果数据过大，会增加整个字符串常量池的负担。</p></blockquote><h2 id="string、stringbuffer、stringbuilder-有什么区别" tabindex="-1"><a class="header-anchor" href="#string、stringbuffer、stringbuilder-有什么区别" aria-hidden="true">#</a> String、StringBuffer、StringBuilder 有什么区别</h2><p><code>String</code> 是 Java 语言非常基础和重要的类，提供了构造和管理字符串的各种基本逻辑。它是典型的 <code>Immutable</code> 类，被声明成为 <code>final class</code>，所有属性也都是 <code>final</code> 的。也由于它的不可变性，类似拼接、裁剪字符串等动作，都会产生新的 <code>String</code> 对象。由于字符串操作的普遍性，所以相关操作的效率往往对应用性能有明显影响。</p><p><code>StringBuffer</code> 是为解决上面提到拼接产生太多中间对象的问题而提供的一个类，我们可以用 <code>append</code> 或者 <code>add</code> 方法，把字符串添加到已有序列的末尾或者指定位置。<code>StringBuffer</code> 是一个<strong>线程安全的</strong>可修改字符序列。<code>StringBuffer</code> 的线程安全是通过在各种修改数据的方法上用 <code>synchronized</code> 关键字修饰实现的。</p><p><code>StringBuilder</code> 是 Java 1.5 中新增的，在能力上和 StringBuffer 没有本质区别，但是它去掉了线程安全的部分，有效减小了开销，是绝大部分情况下进行字符串拼接的首选。</p><p><code>StringBuffer</code> 和 <code>StringBuilder</code> 底层都是利用可修改的（char，JDK 9 以后是 byte）数组，二者都继承了 <code>AbstractStringBuilder</code>，里面包含了基本操作，区别仅在于最终的方法是否加了 <code>synchronized</code>。构建时初始字符串长度加 16（这意味着，如果没有构建对象时输入最初的字符串，那么初始值就是 16）。我们如果确定拼接会发生非常多次，而且大概是可预计的，那么就可以指定合适的大小，避免很多次扩容的开销。扩容会产生多重开销，因为要抛弃原有数组，创建新的（可以简单认为是倍数）数组，还要进行 <code>arraycopy</code>。</p><p><strong>除非有线程安全的需要，不然一般都使用 <code>StringBuilder</code></strong>。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,41),d={href:"https://book.douban.com/subject/2130190/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://book.douban.com/subject/26880667/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://time.geekbang.org/column/intro/100028001",target:"_blank",rel:"noopener noreferrer"},g={href:"https://time.geekbang.org/column/intro/82",target:"_blank",rel:"noopener noreferrer"},v={href:"https://juejin.im/post/59cd71835188255d3448faf6",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.cnblogs.com/dolphin0520/p/3780005.html",target:"_blank",rel:"noopener noreferrer"};function h(b,f){const a=o("ExternalLinkIcon");return c(),p("div",null,[l,n("ul",null,[n("li",null,[n("a",d,[s("《Java 编程思想（Thinking in java）》"),e(a)])]),n("li",null,[n("a",u,[s("《Java 核心技术 卷 I 基础知识》"),e(a)])]),n("li",null,[n("a",k,[s("《Java 性能调优实战》"),e(a)])]),n("li",null,[n("a",g,[s("《Java 核心技术面试精讲》"),e(a)])]),n("li",null,[n("a",v,[s("Java 基本数据类型和引用类型"),e(a)])]),n("li",null,[n("a",m,[s("深入剖析 Java 中的装箱和拆箱"),e(a)])])])])}const y=t(r,[["render",h],["__file","42.JavaString类型.html.vue"]]);export{y as default};
