import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as i,e as r}from"./app-d8d56f9e.js";const t={},n=r('<h1 id="堆" tabindex="-1"><a class="header-anchor" href="#堆" aria-hidden="true">#</a> 堆</h1><h2 id="什么是堆" tabindex="-1"><a class="header-anchor" href="#什么是堆" aria-hidden="true">#</a> 什么是堆？</h2><p>堆（Heap）是一个可以被看成近似完全二叉树的数组。</p><ul><li><strong>堆是一个完全二叉树</strong>。完全二叉树要求，除了最后一层，其他层的节点个数都是满的，最后一层的节点都靠左排列。</li><li><strong>堆中每一个节点的值都必须大于等于（或小于等于）其子树中每个节点的值</strong>。</li></ul><p>堆可以分为大顶堆和小顶堆。</p><ul><li><p>对于每个节点的值都大于等于子树中每个节点值的堆，叫作“<strong>大顶堆</strong>”。</p></li><li><p>对于每个节点的值都小于等于子树中每个节点值的堆，叫作“<strong>小顶堆</strong>”。</p></li></ul><h2 id="如何实现堆" tabindex="-1"><a class="header-anchor" href="#如何实现堆" aria-hidden="true">#</a> 如何实现堆</h2><p>完全二叉树比较适合用数组来存储。用数组来存储完全二叉树是非常节省存储空间的。因为我们不需要存储左右子节点的指针，单纯地通过数组的下标，就可以找到一个节点的左右子节点和父节点。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220311112542.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>堆常见的操作：</p><ul><li>HEAPIFY 建堆：把一个乱序的数组变成堆结构的数组，时间复杂度为 $$O(n)$$。</li><li>HEAPPUSH：把一个数值放进已经是堆结构的数组中，并保持堆结构，时间复杂度为 $$O(log N)$$</li><li>HEAPPOP：从最大堆中取出最大值或从最小堆中取出最小值，并将剩余的数组保持堆结构，时间复杂度为 $$O(log N)$$。</li><li>HEAPSORT：借由 HEAPFY 建堆和 HEAPPOP 堆数组进行排序，时间复杂度为$$ O(N log N)$$，空间复杂度为 $$O(1)$$。</li></ul><h2 id="堆的应用场景" tabindex="-1"><a class="header-anchor" href="#堆的应用场景" aria-hidden="true">#</a> 堆的应用场景</h2><h3 id="求-top-n" tabindex="-1"><a class="header-anchor" href="#求-top-n" aria-hidden="true">#</a> 求 TOP N</h3><p>堆结构的一个常见应用是建立优先队列（Priority Queue）。</p><p>求 Top K 的问题抽象成两类。一类是针对静态数据集合；另一类是针对动态数据集合</p><h3 id="优先级队列" tabindex="-1"><a class="header-anchor" href="#优先级队列" aria-hidden="true">#</a> 优先级队列</h3><p>在优先级队列中，数据的出队顺序不是先进先出，而是按照优先级来，优先级最高的，最先出队。</p><p>堆和优先级队列非常相似：往优先级队列中插入一个元素，就相当于往堆中插入一个元素；从优先级队列中取出优先级最高的元素，就相当于取出堆顶元素。</p><blockquote><p>参考：Java 的 <code>PriorityQueue</code> 类</p></blockquote><h3 id="求中位数" tabindex="-1"><a class="header-anchor" href="#求中位数" aria-hidden="true">#</a> 求中位数</h3>',20),o=[n];function h(d,l){return a(),i("div",null,o)}const p=e(t,[["render",h],["__file","02.堆.html.vue"]]);export{p as default};
