import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as d,c,a as e,b as a,d as i,e as t}from"./app-9db88853.js";const s={},g=t(`<h1 id="跳表" tabindex="-1"><a class="header-anchor" href="#跳表" aria-hidden="true">#</a> 跳表</h1><h2 id="什么是跳表" tabindex="-1"><a class="header-anchor" href="#什么是跳表" aria-hidden="true">#</a> 什么是跳表</h2><p>对于一个有序数组，可以使用高效的二分查找法，其时间复杂度为 <code>O(log n)</code>。</p><p>但是，即使是有序的链表，也只能使用低效的顺序查找，其时间复杂度为 <code>O(n)</code>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220323113532.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如何提高链表的查找效率呢？</p><p>我们可以对链表加一层索引。具体来说，可以每两个结点提取一个结点到上一级，我们把抽出来的那一级叫作<strong>索引</strong>或<strong>索引层</strong>。索引节点中通过一个 down 指针，指向下一级结点。通过这样的改造，就可以支持类似二分查找的算法。我们把改造之后的数据结构叫作<strong>跳表</strong>（Skip list）。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220323155309.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>随着数据的不断增长，一级索引层也变得越来越长。此时，我们可以为一级索引再增加一层索引层：二级索引层。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220323155346.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>随着数据的膨胀，当二级索引层也变得很长时，我们可以继续为其添加新的索引层。<strong>这种链表加多级索引的结构，就是跳表</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220323114408.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="跳表的时间复杂度" tabindex="-1"><a class="header-anchor" href="#跳表的时间复杂度" aria-hidden="true">#</a> 跳表的时间复杂度</h3><p>在一个具有多级索引的跳表中，第一级索引的结点个数大约就是 <code>n/2</code>，第二级索引的结点个数大约就是 <code>n/4</code>，第三级索引的结点个数大约就是 <code>n/8</code>，依次类推，也就是说，第 <code>k</code> 级索引的结点个数是第 <code>k-1</code> 级索引的结点个数的 <code>1/2</code>，那第 k 级索引结点的个数就是 <code>n/(2k)</code>。所以<strong>跳表查询数据的时间复杂度就是 <code>O(logn)</code></strong>。</p><h3 id="跳表的空间复杂度" tabindex="-1"><a class="header-anchor" href="#跳表的空间复杂度" aria-hidden="true">#</a> 跳表的空间复杂度</h3><p>比起单纯的单链表，跳表需要存储多级索引，肯定要消耗更多的存储空间。</p><p>假设原始链表大小为 n，那第一级索引大约有 n/2 个结点，第二级索引大约有 n/4 个结点，以此类推，每上升一级就减少一半，直到剩下 2 个结点。如果我们把每层索引的结点数写出来，就是一个等比数列。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>索引节点数 = n/2 + n/4 + n/8 … + 8 + 4 + 2 = n-2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所以，跳表的空间复杂度是 <code>O(n)</code>。</p><p>跳表的存储空间其实还有压缩空间。比如，我们增加索引节点的范围，由『每两个节点抽一个上级索引节点』改为『每五个节点抽一个上级索引节点』，可以显著节省存储空间。</p><p>实际上，在软件开发中，我们不必太在意索引占用的额外空间。在讲数据结构和算法时，我们习惯性地把要处理的数据看成整数，但是在实际的软件开发中，原始链表中存储的有可能是很大的对象，而索引结点只需要存储关键值和几个指针，并不需要存储对象，所以当对象比索引结点大很多时，那索引占用的额外空间就可以忽略了。</p><h2 id="跳表的操作" tabindex="-1"><a class="header-anchor" href="#跳表的操作" aria-hidden="true">#</a> 跳表的操作</h2>`,22),p=e("strong",null,"动态数据结构",-1),l={href:"https://zh.wikipedia.org/wiki/%E7%BA%A2%E9%BB%91%E6%A0%91",target:"_blank",rel:"noopener noreferrer"},h=t('<h3 id="高效的动态插入和删除" tabindex="-1"><a class="header-anchor" href="#高效的动态插入和删除" aria-hidden="true">#</a> 高效的动态插入和删除</h3><p>跳表不仅支持查找操作，还支持动态的插入、删除操作，而且插入、删除操作的时间复杂度也是 <code>O(logn)</code>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220323155933.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li><strong>插入操作</strong>：对于纯粹的单链表，需要遍历每个结点，来找到插入的位置。但是，对于跳表来说，我们讲过查找某个结点的的时间复杂度是 <code>O(log n)</code>，所以这里查找某个数据应该插入的位置，方法也是类似的，时间复杂度也是 <code>O(log n)</code>。</li><li><strong>删除操作</strong>：如果这个结点在索引中也有出现，我们除了要删除原始链表中的结点，还要删除索引中的。因为单链表中的删除操作需要拿到要删除结点的前驱结点，然后通过指针操作完成删除。所以在查找要删除的结点的时候，一定要获取前驱结点。当然，如果我们用的是双向链表，就不需要考虑这个问题了。</li></ul><h3 id="跳表索引动态更新" tabindex="-1"><a class="header-anchor" href="#跳表索引动态更新" aria-hidden="true">#</a> 跳表索引动态更新</h3><p>当我们不停地往跳表中插入数据时，如果我们不更新索引，就有可能出现某 2 个索引结点之间数据非常多的情况。极端情况下，跳表还会退化成单链表。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220323161942.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如红黑树、AVL 树这样的平衡二叉树，是通过左右旋的方式保持左右子树的大小平衡，而跳表是通过随机函数来维护前面提到的“平衡性”。</p><p>当我们往跳表中插入数据的时候，我们可以选择同时将这个数据插入到部分索引层中。如何选择加入哪些索引层呢？可以通过一个随机函数，来决定将这个结点插入到哪几级索引中，比如随机函数生成了值 K，那我们就将这个结点添加到第一级到第 K 级这 K 级索引中。</p><h2 id="为什么需要跳表" tabindex="-1"><a class="header-anchor" href="#为什么需要跳表" aria-hidden="true">#</a> 为什么需要跳表</h2><p>跳表是一种动态数据结构，支持快速的插入、删除、查找操作，时间复杂度都是 <code>O(logn)</code>。</p><p>跳表的空间复杂度是 <code>O(n)</code>。不过，跳表的实现非常灵活，可以通过改变索引构建策略，有效平衡执行效率和内存消耗。虽然跳表的代码实现并不简单，但是作为一种动态数据结构，比起红黑树来说，实现要简单多了。所以很多时候，我们为了代码的简单、易读，比起红黑树，我们更倾向用跳表。</p><h2 id="跳表的应用场景" tabindex="-1"><a class="header-anchor" href="#跳表的应用场景" aria-hidden="true">#</a> 跳表的应用场景</h2><p>经典实现：Redis 的 Sorted Set、JDK 的 <code>ConcurrentSkipListMap</code> 和 <code>ConcurrentSkipListSet</code> 都是基于跳表实现。</p><p>为什么 Redis 要用跳表来实现有序集合，而不是红黑树？</p><p>Redis 中的有序集合支持的核心操作主要有下面这几个：</p><ul><li>插入一个数据；</li><li>删除一个数据；</li><li>查找一个数据；</li><li>按照区间查找数据（比如查找值在 [100, 356] 之间的数据）；</li><li>迭代输出有序序列。</li></ul><p>其中，插入、删除、查找以及迭代输出有序序列这几个操作，红黑树也可以完成，时间复杂度跟跳表是一样的。但是，按照区间来查找数据这个操作，红黑树的效率没有跳表高。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',19),u={href:"https://time.geekbang.org/column/intro/100017301",target:"_blank",rel:"noopener noreferrer"};function m(f,b){const n=o("ExternalLinkIcon");return d(),c("div",null,[g,e("p",null,[a("跳表是一种各方面性能都比较优秀的"),p,a("，可以支持快速的插入、删除、查找操作，写起来也不复杂，甚至可以替代"),e("a",l,[a("红黑树"),i(n)]),a("（Red-black tree）。")]),h,e("ul",null,[e("li",null,[e("a",u,[a("数据结构与算法之美"),i(n)])])])])}const k=r(s,[["render",m],["__file","04.跳表.html.vue"]]);export{k as default};
