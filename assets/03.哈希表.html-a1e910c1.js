import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as s,c as l,a as e,b as a,d as n,e as t}from"./app-dc48b2dc.js";const d={},h=t('<h1 id="哈希表" tabindex="-1"><a class="header-anchor" href="#哈希表" aria-hidden="true">#</a> 哈希表</h1><blockquote><p><strong>哈希表</strong> 是一种使用 <strong>哈希函数</strong> 组织数据，以支持快速插入和搜索的数据结构。</p><p>有两种不同类型的哈希表：<strong>哈希集合</strong> 和 <strong>哈希映射</strong>。</p><ul><li><strong>哈希集合</strong> 是集合数据结构的实现之一，用于存储非重复值。</li><li><strong>哈希映射</strong> 是映射 数据结构的实现之一，用于存储(key, value)键值对。</li></ul></blockquote><h2 id="什么是哈希表" tabindex="-1"><a class="header-anchor" href="#什么是哈希表" aria-hidden="true">#</a> 什么是哈希表</h2><p>哈希表的英文叫“Hash Table”，我们平时也叫它“散列表”或者“Hash 表”。</p><p><strong>哈希表</strong> 是一种使用 <strong>哈希函数</strong> 组织数据，以支持快速插入和搜索的数据结构。</p><p>有两种不同类型的哈希表：<strong>哈希集合</strong> 和 <strong>哈希映射</strong>。</p><ul><li><strong>哈希集合</strong> 是集合数据结构的实现之一，用于存储非重复值。</li><li><strong>哈希映射</strong> 是映射 数据结构的实现之一，用于存储(key, value)键值对。</li></ul><p><strong>哈希表用的是数组支持按照下标随机访问数据的特性，所以哈希表其实就是数组的一种扩展，由数组演化而来。可以说，如果没有数组，就没有哈希表</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220320201844.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>哈希表通过散列函数把元素的键值映射为下标，然后将数据存储在数组中对应下标的位置。按照键值查询元素时，用同样的散列函数，将键值转化数组下标，从对应的数组下标的位置取数据。</p><p>有两种不同类型的哈希表：哈希集合和哈希映射。</p><ul><li><code>哈希集合</code>是<code>集合</code>数据结构的实现之一，用于存储<code>非重复值</code>。</li><li><code>哈希映射</code>是<code>映射</code> 数据结构的实现之一，用于存储<code>(key, value)</code>键值对。</li></ul><p>在<code>标准模板库</code>的帮助下，哈希表是<code>易于使用的</code>。大多数常见语言（如 Java，C ++ 和 Python）都支持哈希集合和哈希映射。</p><h2 id="散列函数" tabindex="-1"><a class="header-anchor" href="#散列函数" aria-hidden="true">#</a> 散列函数</h2><p>散列函数，顾名思义，它是一个函数。我们可以把它定义成 <strong>hash(key)</strong>，其中 key 表示元素的键值，hash(key) 的值表示经过散列函数计算得到的散列值。</p><p>哈希表的关键思想是使用哈希函数将键映射到存储桶。更确切地说，</p><ol><li>当我们插入一个新的键时，哈希函数将决定该键应该分配到哪个桶中，并将该键存储在相应的桶中；</li><li>当我们想要搜索一个键时，哈希表将使用相同的哈希函数来查找对应的桶，并只在特定的桶中进行搜索。</li></ol><p>散列函数将取决于 <code>键值的范围</code> 和 <code>桶的数量</code> 。</p><p><strong>散列函数设计的基本要求</strong>：</p><ol><li>散列函数计算得到的散列值是一个非负整数；</li><li>如果 key1 = key2，那 hash(key1) == hash(key2)；</li><li>如果 key1 ≠ key2，那 hash(key1) ≠ hash(key2)。</li></ol><h3 id="散列冲突" tabindex="-1"><a class="header-anchor" href="#散列冲突" aria-hidden="true">#</a> 散列冲突</h3>',21),p={href:"https://zh.wikipedia.org/wiki/MD5",target:"_blank",rel:"noopener noreferrer"},c={href:"https://zh.wikipedia.org/wiki/SHA%E5%AE%B6%E6%97%8F",target:"_blank",rel:"noopener noreferrer"},g={href:"https://zh.wikipedia.org/wiki/%E5%BE%AA%E7%92%B0%E5%86%97%E9%A4%98%E6%A0%A1%E9%A9%97",target:"_blank",rel:"noopener noreferrer"},u=e("strong",null,"散列冲突",-1),_=t(`<p>该如何解决散列冲突问题呢？我们常用的散列冲突解决方法有两类，开放寻址法（open addressing）和链表法（chaining）。</p><h3 id="装载因子" tabindex="-1"><a class="header-anchor" href="#装载因子" aria-hidden="true">#</a> 装载因子</h3><p>当哈希表中空闲位置不多的时候，散列冲突的概率就会大大提高。为了尽可能保证哈希表的操作效率，一般情况下，我们会尽可能保证哈希表中有一定比例的空闲槽位。我们用<strong>装载因子</strong>（load factor）来表示空位的多少。</p><p>装载因子的计算公式是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>哈希表的装载因子 = 填入表中的元素个数 / 哈希表的长度
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>装载因子越大，说明空闲位置越少，冲突越多</strong>，哈希表的性能会下降。不仅插入数据的过程要多次寻址或者拉很长的链，查找的过程也会因此变得很慢。</p><p>当装载因子过大时，就需要对哈希表扩容。新申请一个更大的哈希表，将数据搬移到这个新哈希表中。针对数组的扩容，数据搬移操作比较简单。但是，针对哈希表的扩容，数据搬移操作要复杂很多。因为哈希表的大小变了，数据的存储位置也变了，所以我们需要通过散列函数重新计算每个数据的存储位置。</p><p>插入一个数据，最好情况下，不需要扩容，最好时间复杂度是 O(1)。最坏情况下，哈希表装载因子过高，启动扩容，我们需要重新申请内存空间，重新计算哈希位置，并且搬移数据，所以时间复杂度是 O(n)。用摊还分析法，均摊情况下，时间复杂度接近最好情况，就是 O(1)。</p><p>装载因子阈值需要选择得当。如果太大，会导致冲突过多；如果太小，会导致内存浪费严重。</p><h3 id="开放寻址法" tabindex="-1"><a class="header-anchor" href="#开放寻址法" aria-hidden="true">#</a> 开放寻址法</h3><p>开放寻址法的核心思想是，如果出现了散列冲突，我们就重新探测一个空闲位置，将其插入。</p><p><strong>当数据量比较小、装载因子小的时候，适合采用开放寻址法。这也是 Java 中的 <code>ThreadLocalMap</code> 使用开放寻址法解决散列冲突的原因</strong>。</p><p><strong>线性探测</strong>（Linear Probing）：当我们往哈希表中插入数据时，如果某个数据经过散列函数散列之后，存储位置已经被占用了，我们就从当前位置开始，依次往后查找，看是否有空闲位置，直到找到为止。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220323200359.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>对于使用线性探测法解决冲突的哈希表，删除操作稍微有些特别。我们不能单纯地把要删除的元素设置为空。这是为什么呢？在查找的时候，一旦我们通过线性探测方法，找到一个空闲位置，我们就可以认定哈希表中不存在这个数据。但是，如果这个空闲位置是我们后来删除的，就会导致原来的查找算法失效。本来存在的数据，会被认定为不存在。这个问题如何解决呢？</p><p>我们可以将删除的元素，特殊标记为 deleted。当线性探测查找的时候，遇到标记为 deleted 的空间，并不是停下来，而是继续往下探测。</p><p>线性探测法其实存在很大问题。当哈希表中插入的数据越来越多时，散列冲突发生的可能性就会越来越大，空闲位置会越来越少，线性探测的时间就会越来越久。极端情况下，我们可能需要探测整个哈希表，所以最坏情况下的时间复杂度为 O(n)。同理，在删除和查找时，也有可能会线性探测整张哈希表，才能找到要查找或者删除的数据。</p><h3 id="链表法" tabindex="-1"><a class="header-anchor" href="#链表法" aria-hidden="true">#</a> 链表法</h3><p>在哈希表中，每个“桶（bucket）”或者“槽（slot）”会对应一条链表，所有散列值相同的元素我们都放到相同槽位对应的链表中。</p><p>链表法比起开放寻址法，对大装载因子的容忍度更高。开放寻址法只能适用装载因子小于 1 的情况。接近 1 时，就可能会有大量的散列冲突，导致大量的探测、再散列等，性能会下降很多。但是对于链表法来说，只要散列函数的值随机均匀，即便装载因子变成 10，也就是链表的长度变长了而已，虽然查找效率有所下降，但是比起顺序查找还是快很多。</p><p><strong>基于链表的散列冲突处理方法比较适合存储大对象、大数据量的哈希表，而且，比起开放寻址法，它更加灵活，支持更多的优化策略，比如用红黑树代替链表</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220323200419.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当插入的时候，我们只需要通过散列函数计算出对应的散列槽位，将其插入到对应链表中即可，所以插入的时间复杂度是 O(1)。当查找、删除一个元素时，我们同样通过散列函数计算出对应的槽，然后遍历链表查找或者删除。那查找或删除操作的时间复杂度是多少呢？</p><p>实际上，这两个操作的时间复杂度跟链表的长度 k 成正比，也就是 O(k)。对于散列比较均匀的散列函数来说，理论上讲，k=n/m，其中 n 表示散列中数据的个数，m 表示哈希表中“槽”的个数。</p><h3 id="开放寻址法-vs-链表法" tabindex="-1"><a class="header-anchor" href="#开放寻址法-vs-链表法" aria-hidden="true">#</a> 开放寻址法 vs. 链表法</h3><p><strong>开放寻址法适用于数据量比较小、装载因子小的场景</strong>。</p><p><strong>链表法适用于存储大对象、大数据量的哈希表</strong>。<strong>比起开放寻址法，它更加灵活，支持更多的优化策略，比如用红黑树代替链表</strong>。</p><h2 id="哈希表的应用场景" tabindex="-1"><a class="header-anchor" href="#哈希表的应用场景" aria-hidden="true">#</a> 哈希表的应用场景</h2><p>哈希算法的应用非常非常多，最常见的七个，分别是：</p><ul><li><strong>安全加密</strong>：如：MD5、SHA</li><li><strong>唯一标识</strong>：UUID</li><li>数据校验：数字签名</li><li><strong>散列函数</strong>：</li><li><strong>负载均衡</strong>：会话粘滞（session sticky）负载均衡算法。<strong>可以通过哈希算法，对客户端 IP 地址或者会话 ID 计算哈希值，将取得的哈希值与服务器列表的大小进行取模运算，最终得到的值就是应该被路由到的服务器编号。</strong> 这样，我们就可以把同一个 IP 过来的所有请求，都路由到同一个后端服务器上。</li><li>数据分片</li><li>分布式存储：一致性哈希算法、虚拟哈希槽</li></ul><h3 id="典型应用场景" tabindex="-1"><a class="header-anchor" href="#典型应用场景" aria-hidden="true">#</a> 典型应用场景</h3><p>Java 的 HashMap 工具类，其</p><ul><li>HashMap 默认的初始大小是 16</li><li>最大装载因子默认是 0.75，当 HashMap 中元素个数超过 0.75*capacity（capacity 表示哈希表的容量）的时候，就会启动扩容，每次扩容都会扩容为原来的两倍大小。</li><li>HashMap 底层采用链表法来解决冲突。即使负载因子和散列函数设计得再合理，也免不了会出现链表过长的情况，一旦出现链表过长，则会严重影响 HashMap 的性能。在 JDK1.8 版本中，对 HashMap 做了进一步优化：引入了红黑树。当链表长度太长（默认超过 8）时，链表就转换为红黑树。我们可以利用红黑树快速增删改查的特点，提高 HashMap 的性能。当红黑树结点个数少于 8 个的时候，又会将红黑树转化为链表。因为在数据量较小的情况下，红黑树要维护平衡，比起链表来，性能上的优势并不明显。</li></ul><h2 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习</h2><p>Leetcode 练习题：</p>`,35),f={href:"https://leetcode-cn.com/problems/design-hashset/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://leetcode-cn.com/problems/design-hashmap/",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"思考",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#思考","aria-hidden":"true"},"#"),a(" 思考")],-1),m=e("ol",null,[e("li",null,"假设我们有 10 万条 URL 访问日志，如何按照访问次数给 URL 排序？"),e("li",null,"有两个字符串数组，每个数组大约有 10 万条字符串，如何快速找出两个数组中相同的字符串？")],-1),x=e("h2",{id:"参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),a(" 参考资料")],-1),y={href:"https://time.geekbang.org/column/intro/100017301",target:"_blank",rel:"noopener noreferrer"};function v(E,w){const r=i("ExternalLinkIcon");return s(),l("div",null,[h,e("p",null,[a("即便像业界著名的"),e("a",p,[a("MD5"),n(r)]),a("、"),e("a",c,[a("SHA"),n(r)]),a("、"),e("a",g,[a("CRC"),n(r)]),a("等哈希算法，也无法完全避免这种"),u,a("。")]),_,e("ul",null,[e("li",null,[e("a",f,[a("705. 设计哈希集合"),n(r)])]),e("li",null,[e("a",k,[a("706. 设计哈希映射"),n(r)])])]),b,m,x,e("ul",null,[e("li",null,[e("a",y,[a("数据结构与算法之美"),n(r)])])])])}const A=o(d,[["render",v],["__file","03.哈希表.html.vue"]]);export{A as default};
