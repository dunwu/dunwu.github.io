import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as t,c as n,a as e,b as o,d as l,e as s}from"./app-ee97b13a.js";const d={},c=s('<h1 id="lsm-树" tabindex="-1"><a class="header-anchor" href="#lsm-树" aria-hidden="true">#</a> LSM 树</h1><h2 id="什么是-lsm-树" tabindex="-1"><a class="header-anchor" href="#什么是-lsm-树" aria-hidden="true">#</a> 什么是 LSM 树</h2><p>LSM 树具有以下 3 个特点：</p><ol><li>将索引分为内存和磁盘两部分，并在内存达到阈值时启动树合并（Merge Trees）；</li><li>用批量写入代替随机写入，并且用预写日志 WAL 技术（Write AheadLog，预写日志技术）保证内存数据，在系统崩溃后可以被恢复；</li><li>数据采取类似日志追加写的方式写入（Log Structured）磁盘，以顺序写的方式提高写<br> 入效率。</li></ol><p>LSM 树的这些特点，使得它相对于 B+ 树，在写入性能上有大幅提升。所以，许多 NoSQL 系统都使用 LSM 树作为检索引擎，而且还对 LSM 树进行了优化以提升检索性能。</p><p>LSM 树就是根据这个思路设计了这样一个机制：当数据写入时，延迟写磁盘，将数据先存放在内存中的树里，进行常规的存储和查询。当内存中的树持续变大达到阈值时，再批量地以块为单位写入磁盘的树中。因此，LSM 树至少需要由两棵树组成，一棵是存储在内存中较小的 C0 树，另一棵是存储在磁盘中较大的 C1 树。</p><h3 id="如何将内存数据与磁盘数据合并" tabindex="-1"><a class="header-anchor" href="#如何将内存数据与磁盘数据合并" aria-hidden="true">#</a> 如何将内存数据与磁盘数据合并</h3><p>可以参考两个有序链表归并排序的过程，将 C0 树和 C1 树的所有叶子节点中存储的数据，看作是两个有序链表，那滚动合并问题就变成了我们熟悉的两个有序链表的归并问题。不过由于涉及磁盘操作，那为了提高写入效率和检索效率，我们还需要针对磁盘的特性，在一些归并细节上进行优化。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220316105440.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>由于磁盘具有顺序读写效率高的特性，因此，为了提高 C1 树中节点的读写性能，除了根节点以外的节点都要尽可能地存放到连续的块中，让它们能作为一个整体单位来读写。这种包含多个节点的块就叫作多页块（Multi-Pages Block）。</p><p>第一步，以多页块为单位，将 C1 树的当前叶子节点从前往后读入内存。读入内存的多页块，叫作清空块（Emptying Block），意思是处理完以后会被清空。</p><p>第二步，将 C0 树的叶子节点和清空块中的数据进行归并排序，把归并的结果写入内存的一个新块中，叫作填充块（Filling Block）。</p><p>第三步，如果填充块写满了，我们就要将填充块作为新的叶节点集合顺序写入磁盘。这个时候，如果 C0 树的叶子节点和清空块都没有遍历完，我们就继续遍历归并，将数据写入新的填充块。如果清空块遍历完了，我们就去 C1 树中顺序读取新的多页块，加载到清空块中。</p><p>第四步，重复第三步，直到遍历完 C0 树和 C1 树的所有叶子节点，并将所有的归并结果写入到磁盘。这个时候，我们就可以同时删除 C0 树和 C1 树中被处理过的叶子节点。这样就完成了滚动归并的过程。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220316110736.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="lsm-树是如何检索" tabindex="-1"><a class="header-anchor" href="#lsm-树是如何检索" aria-hidden="true">#</a> LSM 树是如何检索</h3><p>因为同时存在 C0 和 C1 树，所以要查询一个 key 时，我们会先到 C0 树中查询。如果查询到了则直接返回；如过没有查询到，则查询 C1 树。</p><p>需要注意一种特殊情况：删除操作。假设某数据在 C0 树中被删除了，但是在 C1 树中仍存在。这此时查询时，可以在 C1 树中查到这个 key，这其实是过期数据了，如何应对这种情况呢？对于被删除的数据，可以将这些数据的 key 插入到 C0 树中，并标记一个删除标志。如果查到了一个带着删除标志的 key，就直接返回查询失败。</p><h2 id="为什么需要-lsm-树" tabindex="-1"><a class="header-anchor" href="#为什么需要-lsm-树" aria-hidden="true">#</a> 为什么需要 LSM 树</h2><p>在关系型数据库中，通常使用 B+ 树作为索引。B+ 树的数据都存储在叶子节点中，而叶子节点一般都存储在磁盘中。因此，每次插入的新数据都需要随机写入磁盘，而随机写入的性能非常慢。如果是一个日志系统，每秒钟要写入上千条甚至上万条数据，这样的磁盘操作代价会使得系统性能急剧下降，甚至无法使用。</p><p>操作系统对磁盘的读写是以块为单位的，我们能否以块为单位写入，而不是每次插入一个数据都要随机写入磁盘呢？这样是不是就可以大幅度减少写入操作了呢？解决方案就是：<strong>LSM 树</strong>（Log Structured Merge Trees）。</p><h2 id="wal-技术" tabindex="-1"><a class="header-anchor" href="#wal-技术" aria-hidden="true">#</a> WAL 技术</h2><p>LSM 树至少需要由两棵树组成，一棵是存储在内存中较小的 C0 树，另一棵是存储在磁盘中较大的 C1 树。</p><p>如果机器断电或系统崩溃了，那内存中还未写入磁盘的数据岂不就永远丢失了？这种情况我们该如何解决呢？</p><p>为了保证内存中的数据在系统崩溃后能恢复，可以使用 WAL 技术（Write Ahead Log，预写日志技术）将数据第一时间高效写入磁盘进行备份。</p><p>WAL 技术保存和恢复数据的具体步骤如下：</p><ol><li>内存中的程序在处理数据时，会先将对数据的修改作为一条记录，顺序写入磁盘的 log 文件作为备份。由于磁盘文件的顺序追加写入效率很高，因此许多应用场景都可以接受这种备份处理。</li><li>在数据写入 log 文件后，备份就成功了。接下来，该数据就可以长期驻留在内存中了。</li><li>系统会周期性地检查内存中的数据是否都被处理完了（比如，被删除或者写入磁盘），并且生成对应的检查点（Check Point）记录在磁盘中。然后，我们就可以随时删除被处理完的数据了。这样一来，log 文件就不会无限增长了。</li><li>系统崩溃重启，我们只需要从磁盘中读取检查点，就能知道最后一次成功处理的数据在 log 文件中的位置。接下来，我们就可以把这个位置之后未被处理的数据，从 log 文件中读出，然后重新加载到内存中。</li></ol><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220316104837.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',29),p={href:"https://time.geekbang.org/column/intro/100048401",target:"_blank",rel:"noopener noreferrer"};function h(g,u){const a=r("ExternalLinkIcon");return t(),n("div",null,[c,e("ul",null,[e("li",null,[e("a",p,[o("检索技术核心 20 讲"),l(a)])])])])}const C=i(d,[["render",h],["__file","04.LSM树.html.vue"]]);export{C as default};
