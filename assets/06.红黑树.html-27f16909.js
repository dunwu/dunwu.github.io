import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as r,c as t,a as i,b as n,d as s,e as g}from"./app-9cc2d019.js";const o={},c=g('<h1 id="红黑树" tabindex="-1"><a class="header-anchor" href="#红黑树" aria-hidden="true">#</a> 红黑树</h1><h2 id="平衡二叉树" tabindex="-1"><a class="header-anchor" href="#平衡二叉树" aria-hidden="true">#</a> 平衡二叉树</h2><p>平衡二叉树的严格定义是这样的：二叉树中任意一个节点的左右子树的高度相差不能大于 1。</p><p>完全二叉树、满二叉树其实都是平衡二叉树，但是非完全二叉树也有可能是平衡二叉树。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220310202113.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>平衡二叉查找树中“平衡”的意思，其实就是让整棵树左右看起来比较“对称”、比较“平衡”，不要出现左子树很高、右子树很矮的情况。这样就能让整棵树的高度相对来说低一些，相应的插入、删除、查找等操作的效率高一些</strong>。</p><h2 id="什么是红黑树" tabindex="-1"><a class="header-anchor" href="#什么是红黑树" aria-hidden="true">#</a> 什么是红黑树</h2><p>红黑树的英文是“Red-Black Tree”，简称 R-B Tree。它是一种不严格的平衡二叉查找树。</p><p>红黑树中的节点，一类被标记为黑色，一类被标记为红色。除此之外，一棵红黑树还需要满足这样几个要求：</p><ul><li>根节点是黑色的；</li><li>每个叶子节点都是黑色的空节点（NIL），也就是说，叶子节点不存储数据；</li><li>任何相邻的节点都不能同时为红色，也就是说，红色节点是被黑色节点隔开的；</li><li>每个节点，从该节点到达其可达叶子节点的所有路径，都包含相同数目的黑色节点；</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220310202612.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="为什么说红黑树是-近似平衡-的" tabindex="-1"><a class="header-anchor" href="#为什么说红黑树是-近似平衡-的" aria-hidden="true">#</a> 为什么说红黑树是“近似平衡”的？</h3><p>平衡二叉查找树的初衷，是为了解决二叉查找树因为动态更新导致的性能退化问题。</p><p>所以，<strong>“平衡”的意思可以等价为性能不退化。“近似平衡”就等价为性能不会退化的太严重</strong>。</p><p><strong>如果我们将红色节点从红黑树中去掉，那单纯包含黑色节点的红黑树的高度是多少呢</strong>？</p><p>红色节点删除之后，有些节点就没有父节点了，它们会直接拿这些节点的祖父节点（父节点的父节点）作为父节点。所以，之前的二叉树就变成了四叉树。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220310202902.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>前面红黑树的定义里有这么一条：从任意节点到可达的叶子节点的每个路径包含相同数目的黑色节点。我们从四叉树中取出某些节点，放到叶节点位置，四叉树就变成了完全二叉树。所以，仅包含黑色节点的四叉树的高度，比包含相同节点个数的完全二叉树的高度还要小。</p><p><strong>现在把红色节点加回去，高度会变成多少呢</strong>？</p><p>在红黑树中，红色节点不能相邻，也就是说，有一个红色节点就要至少有一个黑色节点，将它跟其他红色节点隔开。红黑树中包含最多黑色节点的路径不会超过 log2n，所以加入红色节点之后，最长路径不会超过 2log2n，也就是说，红黑树的高度近似 2log2n。</p><p>所以，红黑树的高度只比高度平衡的 AVL 树的高度（log2n）仅仅大了一倍，在性能上，下降得并不多。这样推导出来的结果不够精确，实际上红黑树的性能更好。</p><h2 id="为什么需要红黑树" tabindex="-1"><a class="header-anchor" href="#为什么需要红黑树" aria-hidden="true">#</a> 为什么需要红黑树</h2><p>AVL 树是一种高度平衡的二叉树，所以查找的效率非常高，但是，有利就有弊，AVL 树为了维持这种高度的平衡，就要付出更多的代价。每次插入、删除都要做调整，就比较复杂、耗时。所以，对于有频繁的插入、删除操作的数据集合，使用 AVL 树的代价就有点高了。</p><p>红黑树只是做到了近似平衡，并不是严格的平衡，所以在维护平衡的成本上，要比 AVL 树要低。</p><p>所以，红黑树的插入、删除、查找各种操作性能都比较稳定。对于工程应用来说，要面对各种异常情况，为了支撑这种工业级的应用，我们更倾向于这种性能稳定的平衡二叉查找树。</p><h2 id="红黑树平衡调整" tabindex="-1"><a class="header-anchor" href="#红黑树平衡调整" aria-hidden="true">#</a> 红黑树平衡调整</h2><h3 id="插入操作的平衡调整" tabindex="-1"><a class="header-anchor" href="#插入操作的平衡调整" aria-hidden="true">#</a> 插入操作的平衡调整</h3><p><strong>红黑树规定，插入的节点必须是红色的。而且，二叉查找树中新插入的节点都是放在叶子节点上</strong>。</p><ul><li>如果插入节点的父节点是黑色的，那我们什么都不用做，它仍然满足红黑树的定义。</li><li>如果插入的节点是根节点，那我们直接改变它的颜色，把它变成黑色就可以了。</li></ul><p>除此之外，其他情况都会违背红黑树的定义，于是我们就需要进行调整，调整的过程包含两种基础的操作：<strong>左右旋转</strong>和<strong>改变颜色</strong>。</p><p>红黑树的平衡调整过程是一个迭代的过程。我们把正在处理的节点叫作<strong>关注节点</strong>。关注节点会随着不停地迭代处理，而不断发生变化。最开始的关注节点就是新插入的节点。</p><p>新节点插入之后，如果红黑树的平衡被打破，那一般会有下面三种情况。我们只需要根据每种情况的特点，不停地调整，就可以让红黑树继续符合定义，也就是继续保持平衡。</p><p><strong>CASE 1：如果关注节点是 a，它的叔叔节点 d 是红色</strong>，我们就依次执行下面的操作：</p><ul><li>将关注节点 a 的父节点 b、叔叔节点 d 的颜色都设置成黑色；</li><li>将关注节点 a 的祖父节点 c 的颜色设置成红色；</li><li>关注节点变成 a 的祖父节点 c；</li><li>跳到 CASE 2 或者 CASE 3。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220310203600.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>CASE 2：如果关注节点是 a，它的叔叔节点 d 是黑色，关注节点 a 是其父节点 b 的右子节点</strong>，我们就依次执行下面的操作：</p><ul><li>关注节点变成节点 a 的父节点 b；</li><li>围绕新的关注节点 b 左旋；</li><li>跳到 CASE 3。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220310203623.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>CASE 3：如果关注节点是 a，它的叔叔节点 d 是黑色，关注节点 a 是其父节点 b 的左子节点</strong>，我们就依次执行下面的操作：</p><ul><li>围绕关注节点 a 的祖父节点 c 右旋；</li><li>将关注节点 a 的父节点 b、兄弟节点 c 的颜色互换。</li><li>调整结束。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220310203645.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="删除操作的平衡调整" tabindex="-1"><a class="header-anchor" href="#删除操作的平衡调整" aria-hidden="true">#</a> 删除操作的平衡调整</h3><h4 id="针对删除节点初步调整" tabindex="-1"><a class="header-anchor" href="#针对删除节点初步调整" aria-hidden="true">#</a> 针对删除节点初步调整</h4><p><strong>CASE 1：如果要删除的节点是 a，它只有一个子节点 b</strong>，那我们就依次进行下面的操作：</p><ul><li>删除节点 a，并且把节点 b 替换到节点 a 的位置，这一部分操作跟普通的二叉查找树的删除操作一样；</li><li>节点 a 只能是黑色，节点 b 也只能是红色，其他情况均不符合红黑树的定义。这种情况下，我们把节点 b 改为黑色；</li><li>调整结束，不需要进行二次调整。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220310204215.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>CASE 2：如果要删除的节点 a 有两个非空子节点，并且它的后继节点就是节点 a 的右子节点 c</strong>。我们就依次进行下面的操作：</p><ul><li>如果节点 a 的后继节点就是右子节点 c，那右子节点 c 肯定没有左子树。我们把节点 a 删除，并且将节点 c 替换到节点 a 的位置。这一部分操作跟普通的二叉查找树的删除操作无异；</li><li>然后把节点 c 的颜色设置为跟节点 a 相同的颜色；</li><li>如果节点 c 是黑色，为了不违反红黑树的最后一条定义，我们给节点 c 的右子节点 d 多加一个黑色，这个时候节点 d 就成了“红 - 黑”或者“黑 - 黑”；</li><li>这个时候，关注节点变成了节点 d，第二步的调整操作就会针对关注节点来做。</li></ul><p><strong>CASE 3：如果要删除的是节点 a，它有两个非空子节点，并且节点 a 的后继节点不是右子节点</strong>，我们就依次进行下面的操作：</p><ul><li>找到后继节点 d，并将它删除，删除后继节点 d 的过程参照 CASE 1；</li><li>将节点 a 替换成后继节点 d；</li><li>把节点 d 的颜色设置为跟节点 a 相同的颜色；</li><li>如果节点 d 是黑色，为了不违反红黑树的最后一条定义，我们给节点 d 的右子节点 c 多加一个黑色，这个时候节点 c 就成了“红 - 黑”或者“黑 - 黑”；</li><li>这个时候，关注节点变成了节点 c，第二步的调整操作就会针对关注节点来做。</li></ul><h4 id="针对关注节点进行二次调整" tabindex="-1"><a class="header-anchor" href="#针对关注节点进行二次调整" aria-hidden="true">#</a> 针对关注节点进行二次调整</h4><p><strong>CASE 1：如果关注节点是 a，它的兄弟节点 c 是红色的</strong>，我们就依次进行下面的操作：</p><ul><li>围绕关注节点 a 的父节点 b 左旋；</li><li>关注节点 a 的父节点 b 和祖父节点 c 交换颜色；</li><li>关注节点不变；</li><li>继续从四种情况中选择适合的规则来调整。</li></ul><p><strong>CASE 2：如果关注节点是 a，它的兄弟节点 c 是黑色的，并且节点 c 的左右子节点 d、e 都是黑色的</strong>，我们就依次进行下面的操作：</p><ul><li>将关注节点 a 的兄弟节点 c 的颜色变成红色；</li><li>从关注节点 a 中去掉一个黑色，这个时候节点 a 就是单纯的红色或者黑色；</li><li>给关注节点 a 的父节点 b 添加一个黑色，这个时候节点 b 就变成了“红 - 黑”或者“黑 - 黑”；</li><li>关注节点从 a 变成其父节点 b；</li><li>继续从四种情况中选择符合的规则来调整。</li></ul><p><strong>CASE 3：如果关注节点是 a，它的兄弟节点 c 是黑色，c 的左子节点 d 是红色，c 的右子节点 e 是黑色</strong>，我们就依次进行下面的操作：</p><ul><li>围绕关注节点 a 的兄弟节点 c 右旋；</li><li>节点 c 和节点 d 交换颜色；</li><li>关注节点不变；</li><li>跳转到 CASE 4，继续调整。</li></ul><p><strong>CASE 4：如果关注节点 a 的兄弟节点 c 是黑色的，并且 c 的右子节点是红色的</strong>，我们就依次进行下面的操作：</p><ul><li>围绕关注节点 a 的父节点 b 左旋；</li><li>将关注节点 a 的兄弟节点 c 的颜色，跟关注节点 a 的父节点 b 设置成相同的颜色；</li><li>将关注节点 a 的父节点 b 的颜色设置为黑色；</li><li>从关注节点 a 中去掉一个黑色，节点 a 就变成了单纯的红色或者黑色；</li><li>将关注节点 a 的叔叔节点 e 设置为黑色；</li><li>调整结束。</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',60),d={href:"https://time.geekbang.org/column/intro/100017301",target:"_blank",rel:"noopener noreferrer"};function p(h,u){const a=e("ExternalLinkIcon");return r(),t("div",null,[c,i("ul",null,[i("li",null,[i("a",d,[n("数据结构与算法之美"),s(a)])])])])}const b=l(o,[["render",p],["__file","06.红黑树.html.vue"]]);export{b as default};
