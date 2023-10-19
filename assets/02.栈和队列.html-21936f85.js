import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as s,a as e,b as a,d as n,e as g}from"./app-a0e98cac.js";const d={},c=g('<h1 id="栈和队列" tabindex="-1"><a class="header-anchor" href="#栈和队列" aria-hidden="true">#</a> 栈和队列</h1><blockquote><p><strong>队列</strong>和<strong>栈</strong>都是<strong>操作受限</strong>的<strong>线性表</strong>：前者先进先出，后者先进后出。</p></blockquote><h2 id="栈" tabindex="-1"><a class="header-anchor" href="#栈" aria-hidden="true">#</a> 栈</h2><h3 id="栈是什么" tabindex="-1"><a class="header-anchor" href="#栈是什么" aria-hidden="true">#</a> 栈是什么</h3><p>在 <strong>LIFO(后进先出)</strong> 数据结构中，将首先处理添加到队列中的最新元素。</p><p><strong>栈是一个 LIFO(后进先出) 数据结构</strong>。<strong>栈是一种“操作受限”的线性表</strong>，只允许在一端插入和删除数据。通常，插入操作在栈中被称作入栈 push 。与队列类似，总是在堆栈的末尾添加一个新元素。但是，删除操作，退栈 pop ，将始终删除队列中相对于它的最后一个元素。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220320200148.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>当某个数据集合只涉及在一端插入和删除数据，并且满足后进先出、先进后出的特性，我们就应该首选“栈”这种数据结构</strong>。</p><p>从栈的定义可以看出，栈只支持两个基本操作：<strong>入栈 <code>push()</code></strong> 和 <strong>出栈 <code>pop()</code></strong> ，也就是在栈顶插入一个数据和从栈顶删除一个数据。在入栈和出栈过程中，只需要一两个临时变量存储空间，所以空间复杂度是 <code>O(1)</code>。</p><p>栈既可以用数组来实现，也可以用链表来实现。用数组实现的栈，我们叫作<strong>顺序栈</strong>，用链表实现的栈，我们叫作<strong>链式栈</strong>。</p><h3 id="为什么需要栈" tabindex="-1"><a class="header-anchor" href="#为什么需要栈" aria-hidden="true">#</a> 为什么需要栈</h3><p>相比数组和链表，栈只是对操作进行了限制，似乎并没有任何优势。为什么不直接使用数组或者链表？为什么还要用这个“操作受限”的“栈”呢？</p><p>特定的数据结构是对特定场景的抽象，而且，数组或链表暴露了太多的操作接口，操作上的确灵活自由，但使用时就比较不可控，自然也就更容易出错。</p><h3 id="栈的应用场景" tabindex="-1"><a class="header-anchor" href="#栈的应用场景" aria-hidden="true">#</a> 栈的应用场景</h3><p>（1）<strong>函数调用栈</strong></p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220310091000.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>（2）<strong>表达式求值</strong></p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220310091100.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>（3）<strong>表达式匹配</strong></p><p>可以借助栈来检查表达式中的括号是否匹配</p><h2 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h2><p>在 FIFO 数据结构中，将首先处理添加到队列中的第一个元素。</p><p>队列是典型的 FIFO 数据结构。插入（insert）操作也称作入队（enqueue），新元素始终被添加在队列的末尾。 删除（delete）操作也被称为出队（dequeue)。 你只能移除第一个元素。</p><h3 id="什么是队列" tabindex="-1"><a class="header-anchor" href="#什么是队列" aria-hidden="true">#</a> 什么是队列</h3><p><strong>队列：先进先出的线性表</strong>。</p><p><strong>队列是一种“操作受限”的线性表</strong>，只允许在一端插入数据，在另一端删除数据。</p><p>队列的最基本操作：<strong>入队 <code>enqueue()</code></strong>，放一个数据到队列尾部；<strong>出队 <code>dequeue()</code></strong>，从队列头部取一个元素。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220320200213.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>队列可以用数组来实现，也可以用链表来实现。用数组实现的队列叫作<strong>顺序队列</strong>，用链表实现的队列叫作<strong>链式队列</strong>。</p><p>队满的判断条件是 <code>tail == n</code>，队空的判断条件是 <code>head == tail</code>。</p><h3 id="循环队列" tabindex="-1"><a class="header-anchor" href="#循环队列" aria-hidden="true">#</a> 循环队列</h3><p>循环队列是一种较为特殊的队列。</p><p>循环队列的要点是确定好 <strong>队空和队满的判定条件</strong>。</p><p>在用数组实现的非循环队列中，队满的判断条件是 <code>(tail+1) % n == head</code>，队空的判断条件是 <code>head == tail</code>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220322214822.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="为什么需要队列" tabindex="-1"><a class="header-anchor" href="#为什么需要队列" aria-hidden="true">#</a> 为什么需要队列</h3><p>为什么需要队列和为什么需要栈，是同样的道理，参考 为什么需要栈</p><h3 id="队列的应用场景" tabindex="-1"><a class="header-anchor" href="#队列的应用场景" aria-hidden="true">#</a> 队列的应用场景</h3><p>（1）<strong>阻塞队列</strong></p><p><strong>阻塞队列</strong>其实就是在队列基础上增加了阻塞操作。简单来说，就是：</p><ul><li>在队列为空的时候，从队头取数据会被阻塞。因为此时还没有数据可取，直到队列中有了数据才能返回；</li><li>如果队列已经满了，那么插入数据的操作就会被阻塞，直到队列中有空闲位置后再插入数据，然后再返回。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220310092908.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220310093026.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>（2）<strong>并发队列</strong></p><p>线程安全的队列我们叫作<strong>并发队列</strong>。最简单直接的实现方式是直接在 enqueue()、dequeue() 方法上加锁，但是锁粒度大并发度会比较低，同一时刻仅允许一个存或者取操作。实际上，基于数组的循环队列，利用 CAS 原子操作，可以实现非常高效的并发队列。这也是循环队列比链式队列应用更加广泛的原因。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',46),p={href:"https://time.geekbang.org/column/intro/100017301",target:"_blank",rel:"noopener noreferrer"},h={href:"https://leetcode-cn.com/leetbook/detail/queue-stack/",target:"_blank",rel:"noopener noreferrer"};function u(l,m){const t=o("ExternalLinkIcon");return i(),s("div",null,[c,e("ul",null,[e("li",null,[e("a",p,[a("数据结构与算法之美"),n(t)])]),e("li",null,[e("a",h,[a("Leetcode：栈和队列"),n(t)])])])])}const _=r(d,[["render",u],["__file","02.栈和队列.html.vue"]]);export{_ as default};
