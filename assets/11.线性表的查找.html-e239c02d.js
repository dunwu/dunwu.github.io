import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-ee97b13a.js";const t={},o=p(`<h1 id="线性表的查找" tabindex="-1"><a class="header-anchor" href="#线性表的查找" aria-hidden="true">#</a> 线性表的查找</h1><h2 id="查找简介" tabindex="-1"><a class="header-anchor" href="#查找简介" aria-hidden="true">#</a> 查找简介</h2><h3 id="什么是查找" tabindex="-1"><a class="header-anchor" href="#什么是查找" aria-hidden="true">#</a> 什么是查找？</h3><p><strong>查找</strong>是根据给定的某个值，在表中确定一个关键字的值等于给定值的记录或数据元素。</p><h3 id="查找算法的分类" tabindex="-1"><a class="header-anchor" href="#查找算法的分类" aria-hidden="true">#</a> 查找算法的分类</h3><p>若在查找的同时对表记录做修改操作（如插入和删除），则相应的表称之为<strong>动态查找表</strong>；</p><p>否则，称之为<strong>静态查找表</strong>。</p><p>此外，如果查找的全过程都在内存中进行，称之为<strong>内查找</strong>；</p><p>反之，如果查找过程中需要访问外存，称之为<strong>外查找</strong>。</p><h3 id="查找算法性能比较的标准" tabindex="-1"><a class="header-anchor" href="#查找算法性能比较的标准" aria-hidden="true">#</a> 查找算法性能比较的标准</h3><p><strong>——平均查找长度 ASL（Average Search Length）</strong></p><p>由于查找算法的主要运算是关键字的比较过程，所以通常把查找过程中对关键字需要执行的<strong>平均比较长度</strong>（也称为<strong>平均比较次数</strong>）作为衡量一个查找算法效率优劣的比较标准。</p><figure><img src="https://upload-images.jianshu.io/upload_images/3101171-a38f84148d091364.gif?imageMogr2/auto-orient/strip" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>选取查找算法的因素</strong></p><p>(1) 使用什么数据存储结构（如线性表、树形表等）。</p><p>(2) 表中的次序，即对无序表还是有序表进行查找。</p><h2 id="顺序查找" tabindex="-1"><a class="header-anchor" href="#顺序查找" aria-hidden="true">#</a> 顺序查找</h2><p><strong>要点</strong></p><p>它是一种最简单的查找算法，效率也很低下。</p><p><strong>存储结构</strong></p><p>没有存储结构要求，可以无序，也可以有序。</p><p><strong>基本思想</strong></p><p>从数据结构线形表的<strong>一端</strong>开始，<strong>顺序扫描</strong>，<strong>依次</strong>将扫描到的结点关键字与给定值 k 相<strong>比较</strong>，若相等则表示查找成功；</p><p>若扫描结束仍没有找到关键字等于 k 的结点，表示查找失败。</p><p><strong>核心代码</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">orderSearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> list<span class="token punctuation">,</span> <span class="token keyword">int</span> length<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 从前往后扫描list数组，如果有元素的值与key相等，直接返回其位置</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 如果扫描完，说明没有元素的值匹配key，返回-1，表示查找失败</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>算法分析</strong></p><p>顺序查找算法<strong>最好的情况</strong>是，第一个记录即匹配关键字，则需要比较 <strong>1</strong> 次；</p><p><strong>最坏的情况</strong>是，最后一个记录匹配关键字，则需要比较 <strong>N</strong> 次。</p><p>所以，顺序查找算法的平均查找长度为</p><p>ASL = (N + N-1 + ... + 2 + 1) / N = (N+1) / 2</p><p>顺序查找的<strong>平均时间复杂度</strong>为<strong>O(N)</strong>。</p><h2 id="二分查找" tabindex="-1"><a class="header-anchor" href="#二分查找" aria-hidden="true">#</a> 二分查找</h2><blockquote><p><strong>二分查找针对的是一个有序的数据集合，查找思想有点类似分治思想。每次都通过跟区间的中间元素对比，将待查找的区间缩小为之前的一半，直到找到要查找的元素，或者区间被缩小为 0</strong>。</p></blockquote><p><strong>存储结构</strong></p><p>使用二分查找需要两个前提：</p><p>(1) 必须是<strong>顺序</strong>存储结构。</p><p>(2) 必须是<strong>有序</strong>的表。</p><p><strong>基本思想</strong></p><p>首先，将表<strong>中间位置</strong>记录的关键字与查找关键字比较，如果两者相等，则查找成功；</p><p>否则利用中间位置记录将表分成前、后两个子表，如果中间位置记录的关键字大于查找关键字，则进一步查找前一子表，否则进一步查找后一子表。<br> 重复以上过程，直到找到满足条件的记录，使查找成功，或直到子表不存在为止，此时查找不成功。</p><p><strong>核心代码</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> list<span class="token punctuation">,</span> <span class="token keyword">int</span> length<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> low <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> mid <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> high <span class="token operator">=</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;=</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mid <span class="token operator">=</span> <span class="token punctuation">(</span>low <span class="token operator">+</span> high<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>list<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> mid<span class="token punctuation">;</span> <span class="token comment">// 查找成功，直接返回位置</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>list<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            low <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 关键字大于中间位置的值，则在大值区间[mid+1, high]继续查找</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            high <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 关键字小于中间位置的值，则在小值区间[low, mid-1]继续查找</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>算法分析</strong></p><p><strong>二分查找的过程可看成一个二叉树</strong>。</p><p>把查找区间的中间位置视为树的根，左区间和右区间视为根的左子树和右子树。</p><p>由此得到的二叉树，称为二分查找的判定树或比较树。</p><p>由此可知，二分查找的<strong>平均查找长度</strong>实际上就是树的高度<strong>O(log<sub>2</sub>N)</strong>。</p><p><strong>二分查找的局限性</strong></p><ul><li>二分查找依赖的是顺序表结构，简单点说就是数组</li><li>二分查找针对的是有序数据</li><li>数据量太小不适合二分查找</li><li>数据量太大也不适合二分查找</li></ul><h2 id="分块查找" tabindex="-1"><a class="header-anchor" href="#分块查找" aria-hidden="true">#</a> 分块查找</h2><p><strong>要点</strong></p><p>分块查找(Blocking Search)又称<strong>索引顺序查找</strong>。它是一种性能介于顺序查找和二分查找之间的查找方法。</p><p>分块查找由于只要求索引表是有序的，对块内节点没有排序要求，因此特别适合于节点动态变化的情况。</p><p><strong>存储结构</strong></p><p>分块查找表是由**“分块有序”的线性表<strong>和</strong>索引表**两部分构成的。</p><p>所谓**“分块有序”的线性表**，是指：</p><p>假设要排序的表为 R[0...N-1]，<strong>将表均匀分成 b 块</strong>，前 b-1 块中记录个数为 s=N/b，最后一块记录数小于等于 s；</p><p>每一块中的关键字不一定有序，但<strong>前一块中的最大关键字必须小于后一块中的最小关键字</strong>。</p><p><strong><em>注：这是使用分块查找的前提条件。</em></strong></p><p>如上将表均匀分成 b 块后，抽取各块中的<strong>最大关键字</strong>和<strong>起始位置</strong>构成一个索引表 IDX[0...b-1]。</p><p>由于表 R 是分块有序的，所以<strong>索引表是一个递增有序表</strong>。</p><p>下图就是一个分块查找表的存储结构示意图</p><figure><img src="https://upload-images.jianshu.io/upload_images/3101171-b7ad44c68d0c3c75.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>基本思想</strong></p><p>分块查找算法有两个处理步骤：</p><p><strong>(1) 首先查找索引表</strong></p><p>因为分块查找表是“分块有序”的，所以我们可以通过索引表来锁定关键字所在的区间。</p><p>又因为索引表是递增有序的，所以查找索引可以使用顺序查找或二分查找。</p><p><strong>(2) 然后在已确定的块中进行顺序查找</strong></p><p>因为块中不一定是有序的，所以只能使用顺序查找。</p><p><strong>代码范例</strong></p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-2737612c781e66e8.gif?imageMogr2/auto-orient/strip" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">BlockSearch</span> <span class="token punctuation">{</span>

    <span class="token keyword">class</span> <span class="token class-name">IndexType</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">int</span> key<span class="token punctuation">;</span> <span class="token comment">// 分块中的最大值</span>
        <span class="token keyword">public</span> <span class="token keyword">int</span> link<span class="token punctuation">;</span> <span class="token comment">// 分块的起始位置</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 建立索引方法，n 是线性表最大长度，gap是分块的最大长度</span>
    <span class="token keyword">public</span> <span class="token class-name">IndexType</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">createIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> list<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> gap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> n <span class="token operator">/</span> gap<span class="token punctuation">;</span>
        <span class="token class-name">IndexType</span><span class="token punctuation">[</span><span class="token punctuation">]</span> idxGroup <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IndexType</span><span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 根据步长数分配索引数组大小</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            idxGroup<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IndexType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            idxGroup<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>link <span class="token operator">=</span> gap <span class="token operator">*</span> i<span class="token punctuation">;</span> <span class="token comment">// 确定当前索引组的第一个元素位置</span>
            max <span class="token operator">=</span> list<span class="token punctuation">[</span>gap <span class="token operator">*</span> i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 每次假设当前组的第一个数为最大值</span>
            <span class="token comment">// 遍历这个分块，找到最大值</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> gap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">&lt;</span> list<span class="token punctuation">[</span>gap <span class="token operator">*</span> i <span class="token operator">+</span> j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    max <span class="token operator">=</span> list<span class="token punctuation">[</span>gap <span class="token operator">*</span> i <span class="token operator">+</span> j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                j<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            idxGroup<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>key <span class="token operator">=</span> max<span class="token punctuation">;</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> idxGroup<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 分块查找算法</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">blockSearch</span><span class="token punctuation">(</span><span class="token class-name">IndexType</span><span class="token punctuation">[</span><span class="token punctuation">]</span> idxGroup<span class="token punctuation">,</span> <span class="token keyword">int</span> m<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> list<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> low <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> high <span class="token operator">=</span> m <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> gap <span class="token operator">=</span> n <span class="token operator">/</span> m<span class="token punctuation">;</span> <span class="token comment">// 分块大小等于线性表长度除以组数</span>

        <span class="token comment">// 先在索引表中进行二分查找，找到的位置存放在 low 中</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;=</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            mid <span class="token operator">=</span> <span class="token punctuation">(</span>low <span class="token operator">+</span> high<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>idxGroup<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">.</span>key <span class="token operator">&gt;=</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                high <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                low <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 在索引表中查找成功后，再在线性表的指定块中进行顺序查找</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> idxGroup<span class="token punctuation">[</span>low<span class="token punctuation">]</span><span class="token punctuation">.</span>link<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> idxGroup<span class="token punctuation">[</span>low<span class="token punctuation">]</span><span class="token punctuation">.</span>link <span class="token operator">+</span> gap<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>list<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> key<span class="token punctuation">)</span>
                    <span class="token keyword">return</span> i<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 打印完整序列</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printAll</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> value <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>value <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 打印索引表</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printIDX</span><span class="token punctuation">(</span><span class="token class-name">IndexType</span><span class="token punctuation">[</span><span class="token punctuation">]</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;构造索引表如下：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">IndexType</span> elem <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;key = %d, link = %d\\n&quot;</span><span class="token punctuation">,</span> elem<span class="token punctuation">.</span>key<span class="token punctuation">,</span> elem<span class="token punctuation">.</span>link<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> key <span class="token operator">=</span> <span class="token number">85</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> array2<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">38</span><span class="token punctuation">,</span> <span class="token number">54</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">,</span> <span class="token number">46</span><span class="token punctuation">,</span> <span class="token number">71</span><span class="token punctuation">,</span> <span class="token number">78</span><span class="token punctuation">,</span> <span class="token number">68</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">85</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">BlockSearch</span> search <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BlockSearch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;线性表: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        search<span class="token punctuation">.</span><span class="token function">printAll</span><span class="token punctuation">(</span>array2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">IndexType</span><span class="token punctuation">[</span><span class="token punctuation">]</span> idxGroup <span class="token operator">=</span> search<span class="token punctuation">.</span><span class="token function">createIndex</span><span class="token punctuation">(</span>array2<span class="token punctuation">,</span> array2<span class="token punctuation">.</span>length<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        search<span class="token punctuation">.</span><span class="token function">printIDX</span><span class="token punctuation">(</span>idxGroup<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> pos <span class="token operator">=</span> search<span class="token punctuation">.</span><span class="token function">blockSearch</span><span class="token punctuation">(</span>idxGroup<span class="token punctuation">,</span> idxGroup<span class="token punctuation">.</span>length<span class="token punctuation">,</span> array2<span class="token punctuation">,</span>
                array2<span class="token punctuation">.</span>length<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">==</span> pos<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;查找key = %d失败&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;查找key = %d成功，位置为%d&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> pos<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>线性表: 8 14 6 9 10 22 34 18 19 31 40 38 54 66 46 71 78 68 80 85
构造索引表如下：
key = 14, link = 0
key = 34, link = 5
key = 66, link = 10
key = 85, link = 15

查找key = 85成功，位置为19
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>算法分析</strong></p><p>因为分块查找实际上是两次查找过程之和。若以二分查找来确定块，显然它的查找效率介于顺序查找和二分查找之间。</p><h2 id="三种线性查找的-pk" tabindex="-1"><a class="header-anchor" href="#三种线性查找的-pk" aria-hidden="true">#</a> 三种线性查找的 PK</h2><p>(1) 以平均查找长度而言，二分查找 &gt; 分块查找 &gt; 顺序查找。</p><p>(2) 从适用性而言，顺序查找无限制条件，二分查找仅适用于有序表，分块查找要求“分块有序”。</p><p>(3) 从存储结构而言，顺序查找和分块查找既可用于顺序表也可用于链表；而二分查找只适用于顺序表。</p><p>(4) 分块查找综合了顺序查找和二分查找的优点，既可以较为快速，也能使用动态变化的要求。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,84),e=[o];function c(i,l){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","11.线性表的查找.html.vue"]]);export{r as default};
