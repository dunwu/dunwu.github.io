import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as t,c as p,a as n,b as o,d as c,e as i}from"./app-2811837c.js";const l={},r=i(`<h1 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h1><h2 id="为什么需要复杂度分析" tabindex="-1"><a class="header-anchor" href="#为什么需要复杂度分析" aria-hidden="true">#</a> 为什么需要复杂度分析</h2><p>衡量算法的优劣，有两种评估方式：事前估计和后期测试。</p><p>后期测试有性能测试、基准测试（Benchmark）等手段。</p><p>但是，后期测试有以下限制：</p><ul><li><strong>测试结果非常依赖测试环境</strong>。如：不同机型、不同编译器版本、不同硬件配置等等，都会影响测试结果。</li><li><strong>测试结果受数据规模的影响很大</strong>。</li></ul><p>所以，需要一种方法，可以不受环境或数据规模的影响，粗略地估计算法的执行效率。这种方法就是复杂度分析。</p><h2 id="时间复杂度分析" tabindex="-1"><a class="header-anchor" href="#时间复杂度分析" aria-hidden="true">#</a> 时间复杂度分析</h2><h3 id="大-o-表示法" tabindex="-1"><a class="header-anchor" href="#大-o-表示法" aria-hidden="true">#</a> 大 O 表示法</h3><p>假设问题的规模为 n，则程序的时间复杂度表示为 <code>T(n)</code>。<strong>代码的执行时间 T(n) 与每行代码的执行次数 n 成正比</strong>。</p><p>当 n 增大时，T(n) 也随之增大，想要准确估计其变化比较困难。所以，可以采用大 O 时间复杂度来粗略估计其复杂度，其表达式为：<strong><code>T(n) = O(f(n))</code></strong>。</p><p><strong>大 O 表示法</strong>实际上并不具体表示代码真正的执行时间，而是表示<strong>代码执行时间随数据规模增长的变化趋势</strong>，所以，也叫作<strong>渐进时间复杂度</strong>（asymptotic time complexity），简称<strong>时间复杂度</strong>。</p><h3 id="时间复杂度分析的要点" tabindex="-1"><a class="header-anchor" href="#时间复杂度分析的要点" aria-hidden="true">#</a> 时间复杂度分析的要点</h3><ul><li><strong>只关注循环执行次数最多的一段代码</strong></li><li><strong>加法法则：总复杂度等于量级最大的那段代码的复杂度</strong></li><li><strong>乘法法则：嵌套代码的复杂度等于嵌套内外代码复杂度的乘积</strong></li></ul><h3 id="最好、最坏和平均情况" tabindex="-1"><a class="header-anchor" href="#最好、最坏和平均情况" aria-hidden="true">#</a> 最好、最坏和平均情况</h3><ul><li><strong>最好情况时间复杂度</strong>（best case time complexity）：<strong>在最理想的情况下，执行代码的时间复杂度</strong>。例如：在最理想的情况下，要查找的变量 x 正好是数组的第一个元素，此时最好情况时间复杂度为 1。</li><li><strong>最坏情况时间复杂度</strong>（worst case time complexity）：<strong>在最糟糕的情况下，执行代码的时间复杂度</strong>。例如：在最理想的情况下，要查找的变量 x 正好是数组的最后个元素，此时最好情况时间复杂度为 n。</li><li><strong>平均情况时间复杂度</strong>（average case time complexity）：平均时间复杂度的全称应该叫<strong>加权平均时间复杂度</strong>或者<strong>期望时间复杂度</strong>。</li></ul><h3 id="时间复杂度分析示例" tabindex="-1"><a class="header-anchor" href="#时间复杂度分析示例" aria-hidden="true">#</a> 时间复杂度分析示例</h3><p>【示例】从 1 累加到 100 的时间复杂度是多少？</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token class-name">N</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token class-name">N</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">=</span> sum <span class="token operator">+</span> i<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度计算：显然，这段代码执行了 100 次加法，其时间复杂度和 N 的大小完全一致</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>T(n) = O(n)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>【示例】嵌套循环的时间复杂度是多少？</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> <span class="token class-name">M</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token class-name">N</span> <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token class-name">M</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token class-name">N</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i = &quot;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&quot;, j = &quot;</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度计算：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>T(n) = (M-1)(N-1) = O(M*N) ≈ O(N^2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>【示例】递归函数的时间复杂度是多少？思考一下斐波那契数列 <code>f(n) = f(n-1) + f(n-2)</code> 的时间复杂度是多少？</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220320110642.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>T(n) = O(2^N)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="空间复杂度分析" tabindex="-1"><a class="header-anchor" href="#空间复杂度分析" aria-hidden="true">#</a> 空间复杂度分析</h2><p>时间复杂度的全称是<strong>渐进时间复杂度</strong>，<strong>表示算法的执行时间与数据规模之间的增长关系</strong>。</p><p>类比一下，空间复杂度全称就是<strong>渐进空间复杂度</strong>（asymptotic space complexity），<strong>表示算法的存储空间与数据规模之间的增长关系</strong>。</p><h2 id="复杂度量级" tabindex="-1"><a class="header-anchor" href="#复杂度量级" aria-hidden="true">#</a> 复杂度量级</h2><p>复杂度有以下量级：</p><ul><li><strong><code>O(1)</code></strong>：常数复杂度</li><li><strong><code>O(log n)</code></strong>：对数复杂度</li><li><strong><code>O(n)</code></strong>：线性复杂度</li><li><strong><code>O(nlog n)</code></strong>：线性对数阶复杂度</li><li><strong><code>O(n^2)</code></strong>：平方复杂度</li><li><strong><code>O(n^3)</code></strong>：立方复杂度</li><li><strong><code>O(n^k)</code></strong>：K 次方复杂度</li><li><strong><code>O(2^n)</code></strong>：指数复杂度</li><li><strong><code>O(n!)</code></strong>：阶乘复杂度</li></ul><p>在数据量比较小的时候，复杂度量级差异并不明显；但是，随着数据规模大小的变化，差异会逐渐突出。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220320160627.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><code>O(1)</code> 复杂度示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;num = &quot;</span> <span class="token operator">+</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>O(log n)</code> 对数复杂度示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> max<span class="token punctuation">;</span> i <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i = &quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>O(n)</code> 复杂度示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> max<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i = &quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>O(n^2)</code> 复杂度示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> <span class="token class-name">M</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token class-name">N</span> <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token class-name">M</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token class-name">N</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i = &quot;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&quot;, j = &quot;</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>O(k^n)</code> 复杂度示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i = &quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见数据结构的复杂度" tabindex="-1"><a class="header-anchor" href="#常见数据结构的复杂度" aria-hidden="true">#</a> 常见数据结构的复杂度</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200702071922.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,49),u={href:"https://time.geekbang.org/column/intro/100017301",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const s=e("ExternalLinkIcon");return t(),p("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[o("数据结构与算法之美"),c(s)])])])])}const b=a(l,[["render",d],["__file","02.复杂度分析.html.vue"]]);export{b as default};
