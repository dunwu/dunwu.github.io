import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,c as s,a as e,b as o,d as n,e as i}from"./app-4f05975a.js";const d={},c=i('<h1 id="java-内存模型" tabindex="-1"><a class="header-anchor" href="#java-内存模型" aria-hidden="true">#</a> Java 内存模型</h1><blockquote><p><strong>关键词</strong>：<code>JMM</code>、<code>volatile</code>、<code>synchronized</code>、<code>final</code>、<code>Happens-Before</code>、<code>内存屏障</code></p><p><strong>摘要</strong>：Java 内存模型（Java Memory Model），简称 <strong>JMM</strong>。Java 内存模型的目标是为了解决由可见性和有序性导致的并发安全问题。Java 内存模型通过 <strong>屏蔽各种硬件和操作系统的内存访问差异，以实现让 Java 程序在各种平台下都能达到一致的内存访问效果</strong>。</p></blockquote><h2 id="物理内存模型" tabindex="-1"><a class="header-anchor" href="#物理内存模型" aria-hidden="true">#</a> 物理内存模型</h2><p>物理机遇到的并发问题与虚拟机中的情况有不少相似之处，物理机对并发的处理方案对于虚拟机的实现也有相当大的参考意义。</p><h3 id="硬件处理效率" tabindex="-1"><a class="header-anchor" href="#硬件处理效率" aria-hidden="true">#</a> 硬件处理效率</h3><p>物理内存的第一个问题是：硬件处理效率。</p><ul><li>绝大多数的运算任务都不可能只靠处理器“计算”就能完成，处理器至少需要与<strong>内存交互</strong>，如读取运算数据、存储运算结果，这个 I/O 操作是很难消除的（无法仅靠寄存器完成所有运算任务）。</li><li><strong>由于计算机的存储设备与处理器的运算速度有几个数量级的差距</strong> ，这种速度上的矛盾，会降低硬件的处理效率。所以，现代计算机都不得不 <strong>加入高速缓存（Cache） 来作为内存和处理器之间的缓冲</strong>。将需要用到的数据复制到缓存中，让运算能快速进行，当运算结束后再从缓存同步会内存中，这样处理器就无需等待缓慢的内存读写了。</li></ul><h3 id="缓存一致性" tabindex="-1"><a class="header-anchor" href="#缓存一致性" aria-hidden="true">#</a> 缓存一致性</h3><p>高速缓存解决了 <strong>硬件效率问题</strong>，但是引入了一个新的问题：<strong>缓存一致性（Cache Coherence）</strong>。</p><p>在多处理器系统中，每个处理器都有自己的高速缓存，而它们又共享同一主内存。当多个处理器的运算任务都涉及同一块主内存区域时，将可能导致各自的缓存数据不一致。</p><p>为了解决缓存一致性问题，<strong>需要各个处理器访问缓存时都遵循一些协议，在读写时要根据协议来进行操作</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210102230327.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="代码乱序执行优化" tabindex="-1"><a class="header-anchor" href="#代码乱序执行优化" aria-hidden="true">#</a> 代码乱序执行优化</h3><p><strong>除了高速缓存以外，为了使得处理器内部的运算单元尽量被充分利用</strong>，处理器可能会对输入代码进行乱序执行（Out-Of-Order Execution）优化。处理器会在计算之后将乱序执行的结果重组，<strong>保证该结果与顺序执行的结果是一致的</strong>，但不保证程序中各个语句计算的先后顺序与输入代码中的顺序一致。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210102223609.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>乱序执行技术是处理器为提高运算速度而做出违背代码原有顺序的优化。</p><ul><li><strong>单核</strong>环境下，处理器保证做出的优化不会导致执行结果远离预期目标，但在多核环境下却并非如此。</li><li><strong>多核</strong>环境下， 如果存在一个核的计算任务依赖另一个核的计算任务的中间结果，而且对相关数据读写没做任何防护措施，那么其顺序性并不能靠代码的先后顺序来保证。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210102224144.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="java-内存模型-1" tabindex="-1"><a class="header-anchor" href="#java-内存模型-1" aria-hidden="true">#</a> Java 内存模型</h2><p><strong><code>内存模型</code></strong> 这个概念。我们可以理解为：<strong>在特定的操作协议下，对特定的内存或高速缓存进行读写访问的过程抽象</strong>。不同架构的物理计算机可以有不一样的内存模型，JVM 也有自己的内存模型。</p><p>JVM 中试图定义一种 Java 内存模型（Java Memory Model, JMM）来<strong>屏蔽各种硬件和操作系统的内存访问差异</strong>，以实现让 Java 程序 <strong>在各种平台下都能达到一致的内存访问效果</strong>。</p>',21),p={href:"https://dunwu.github.io/blog/pages/f6b642/",target:"_blank",rel:"noopener noreferrer"},g=e("strong",null,"禁用缓存和编译优化",-1),u=i(`<p>合理的方案应该是<strong>按需禁用缓存以及编译优化</strong>。那么，如何做到呢？，Java 内存模型规范了 JVM 如何提供按需禁用缓存和编译优化的方法。具体来说，这些方法包括 <strong>volatile</strong>、<strong>synchronized</strong> 和 <strong>final</strong> 三个关键字，以及 <strong>Happens-Before 规则</strong>。</p><h3 id="主内存和工作内存" tabindex="-1"><a class="header-anchor" href="#主内存和工作内存" aria-hidden="true">#</a> 主内存和工作内存</h3><p>JMM 的主要目标是 <strong>定义程序中各个变量的访问规则，即在虚拟机中将变量存储到内存和从内存中取出变量这样的底层细节</strong>。此处的变量（Variables）与 Java 编程中所说的变量有所区别，它包括了实例字段、静态字段和构成数值对象的元素，但不包括局部变量与方法参数，因为后者是线程私有的，不会被共享，自然就不会存在竞争问题。为了获得较好的执行效能，JMM 并没有限制执行引擎使用处理器的特定寄存器或缓存来和主存进行交互，也没有限制即使编译器进行调整代码执行顺序这类优化措施。</p><p>JMM 规定了<strong>所有的变量都存储在主内存（Main Memory）中</strong>。</p><p>每条线程还有自己的工作内存（Working Memory），<strong>工作内存中保留了该线程使用到的变量的主内存的副本</strong>。工作内存是 JMM 的一个抽象概念，并不真实存在，它涵盖了缓存，写缓冲区，寄存器以及其他的硬件和编译器优化。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210102225839.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>线程对变量的所有操作都必须在工作内存中进行，而不能直接读写主内存中的变量。不同的线程间也无法直接访问对方工作内存中的变量，<strong>线程间变量值的传递均需要通过主内存来完成</strong>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210102225657.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><blockquote><p>说明：</p><p>这里说的主内存、工作内存与 Java 内存区域中的堆、栈、方法区等不是同一个层次的内存划分。</p></blockquote><h3 id="jmm-内存操作的问题" tabindex="-1"><a class="header-anchor" href="#jmm-内存操作的问题" aria-hidden="true">#</a> JMM 内存操作的问题</h3><p>类似于物理内存模型面临的问题，JMM 存在以下两个问题：</p><ul><li><strong>工作内存数据一致性</strong> - 各个线程操作数据时会保存使用到的主内存中的共享变量副本，当多个线程的运算任务都涉及同一个共享变量时，将导致各自的的共享变量副本不一致。如果真的发生这种情况，数据同步回主内存以谁的副本数据为准？ Java 内存模型主要通过一系列的数据同步协议、规则来保证数据的一致性。</li><li><strong>指令重排序优化</strong> - Java 中重排序通常是编译器或运行时环境为了优化程序性能而采取的对指令进行重新排序执行的一种手段。重排序分为两类：<strong>编译期重排序和运行期重排序</strong>，分别对应编译时和运行时环境。 同样的，指令重排序不是随意重排序，它需要满足以下两个条件： <ul><li>在单线程环境下不能改变程序运行的结果。即时编译器（和处理器）需要保证程序能够遵守 <code>as-if-serial</code> 属性。通俗地说，就是在单线程情况下，要给程序一个顺序执行的假象。即经过重排序的执行结果要与顺序执行的结果保持一致。</li><li>存在数据依赖关系的不允许重排序。</li><li>多线程环境下，如果线程处理逻辑之间存在依赖关系，有可能因为指令重排序导致运行结果与预期不同。</li></ul></li></ul><h3 id="内存间交互操作" tabindex="-1"><a class="header-anchor" href="#内存间交互操作" aria-hidden="true">#</a> 内存间交互操作</h3><p>JMM 定义了 8 个操作来完成主内存和工作内存之间的交互操作。JVM 实现时必须保证下面介绍的每种操作都是 <strong>原子的</strong>（对于 double 和 long 型的变量来说，load、store、read、和 write 操作在某些平台上允许有例外 ）。</p><ul><li><code>lock</code> (锁定) - 作用于<strong>主内存</strong>的变量，它把一个变量标识为一条线程独占的状态。</li><li><code>unlock</code> (解锁) - 作用于<strong>主内存</strong>的变量，它把一个处于锁定状态的变量释放出来，释放后的变量才可以被其他线程锁定。</li><li><code>read</code> (读取) - 作用于<strong>主内存</strong>的变量，它把一个变量的值从主内存<strong>传输</strong>到线程的工作内存中，以便随后的 <code>load</code> 动作使用。</li><li><code>write</code> (写入) - 作用于<strong>主内存</strong>的变量，它把 store 操作从工作内存中得到的变量的值放入主内存的变量中。</li><li><code>load</code> (载入) - 作用于<strong>工作内存</strong>的变量，它把 read 操作从主内存中得到的变量值放入工作内存的变量副本中。</li><li><code>use</code> (使用) - 作用于<strong>工作内存</strong>的变量，它把工作内存中一个变量的值传递给执行引擎，每当虚拟机遇到一个需要使用到变量的值得字节码指令时就会执行这个操作。</li><li><code>assign</code> (赋值) - 作用于<strong>工作内存</strong>的变量，它把一个从执行引擎接收到的值赋给工作内存的变量，每当虚拟机遇到一个给变量赋值的字节码指令时执行这个操作。</li><li><code>store</code> (存储) - 作用于<strong>工作内存</strong>的变量，它把工作内存中一个变量的值传送到主内存中，以便随后 <code>write</code> 操作使用。</li></ul><p>如果要把一个变量从主内存中复制到工作内存，就<strong>需要按序执行 <code>read</code> 和 <code>load</code> 操作</strong>；如果把变量从工作内存中同步回主内存中，就<strong>需要按序执行 <code>store</code> 和 <code>write</code> 操作</strong>。但 Java 内存模型只要求上述操作必须按顺序执行，而没有保证必须是连续执行。</p><p>JMM 还规定了上述 8 种基本操作，需要满足以下规则：</p><ul><li><strong>read 和 load 必须成对出现</strong>；<strong>store 和 write 必须成对出现</strong>。即不允许一个变量从主内存读取了但工作内存不接受，或从工作内存发起回写了但主内存不接受的情况出现。</li><li><strong>不允许一个线程丢弃它的最近 assign 的操作</strong>，即变量在工作内存中改变了之后必须把变化同步到主内存中。</li><li><strong>不允许一个线程无原因的（没有发生过任何 assign 操作）把数据从工作内存同步回主内存中</strong>。</li><li>一个新的变量只能在主内存中诞生，不允许在工作内存中直接使用一个未被初始化（load 或 assign ）的变量。换句话说，就是对一个变量实施 use 和 store 操作之前，必须先执行过了 load 或 assign 操作。</li><li>一个变量在同一个时刻只允许一条线程对其进行 lock 操作，但 lock 操作可以被同一条线程重复执行多次，多次执行 lock 后，只有执行相同次数的 unlock 操作，变量才会被解锁。所以 <strong>lock 和 unlock 必须成对出现</strong>。</li><li>如果对一个变量执行 lock 操作，将会清空工作内存中此变量的值，在执行引擎使用这个变量前，需要重新执行 load 或 assign 操作初始化变量的值。</li><li>如果一个变量事先没有被 lock 操作锁定，则不允许对它执行 unlock 操作，也不允许去 unlock 一个被其他线程锁定的变量。</li><li>对一个变量执行 unlock 操作之前，必须先把此变量同步到主内存中（执行 store 和 write 操作）</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210102230708.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="并发安全特性" tabindex="-1"><a class="header-anchor" href="#并发安全特性" aria-hidden="true">#</a> 并发安全特性</h3><p>上文介绍了 Java 内存交互的 8 种基本操作，它们遵循 Java 内存三大特性：原子性、可见性、有序性。</p><p>而这三大特性，归根结底，是为了实现多线程的 <strong>数据一致性</strong>，使得程序在多线程并发，指令重排序优化的环境中能如预期运行。</p><h4 id="原子性" tabindex="-1"><a class="header-anchor" href="#原子性" aria-hidden="true">#</a> 原子性</h4><p><strong>原子性即一个操作或者多个操作，要么全部执行（执行的过程不会被任何因素打断），要么就都不执行</strong>。即使在多个线程一起执行的时候，一个操作一旦开始，就不会被其他线程所干扰。</p><p>在 Java 中，为了保证原子性，提供了两个高级的字节码指令 <code>monitorenter</code> 和 <code>monitorexit</code>。这两个字节码，在 Java 中对应的关键字就是 <code>synchronized</code>。</p><p>因此，在 Java 中可以使用 <code>synchronized</code> 来保证方法和代码块内的操作是原子性的。</p><h4 id="可见性" tabindex="-1"><a class="header-anchor" href="#可见性" aria-hidden="true">#</a> 可见性</h4><p><strong>可见性是指当多个线程访问同一个变量时，一个线程修改了这个变量的值，其他线程能够立即看得到修改的值</strong>。</p><p>JMM 是通过 <strong>&quot;变量修改后将新值同步回主内存</strong>， <strong>变量读取前从主内存刷新变量值&quot;</strong> 这种依赖主内存作为传递媒介的方式来实现的。</p><p>Java 实现多线程可见性的方式有：</p><ul><li><code>volatile</code></li><li><code>synchronized</code></li><li><code>final</code></li></ul><h4 id="有序性" tabindex="-1"><a class="header-anchor" href="#有序性" aria-hidden="true">#</a> 有序性</h4><p>有序性规则表现在以下两种场景: 线程内和线程间</p><ul><li>线程内 - 从某个线程的角度看方法的执行，指令会按照一种叫“串行”（<code>as-if-serial</code>）的方式执行，此种方式已经应用于顺序编程语言。</li><li>线程间 - 这个线程“观察”到其他线程并发地执行非同步的代码时，由于指令重排序优化，任何代码都有可能交叉执行。唯一起作用的约束是：对于同步方法，同步块（<code>synchronized</code> 关键字修饰）以及 <code>volatile</code> 字段的操作仍维持相对有序。</li></ul><p>在 Java 中，可以使用 <code>synchronized</code> 和 <code>volatile</code> 来保证多线程之间操作的有序性。实现方式有所区别：</p><ul><li><code>volatile</code> 关键字会禁止指令重排序。</li><li><code>synchronized</code> 关键字通过互斥保证同一时刻只允许一条线程操作。</li></ul><h2 id="happens-before" tabindex="-1"><a class="header-anchor" href="#happens-before" aria-hidden="true">#</a> Happens-Before</h2><p>JMM 为程序中所有的操作定义了一个偏序关系，称之为 <strong><code>先行发生原则（Happens-Before）</code></strong>。</p><p><strong>Happens-Before</strong> 是指 <strong>前面一个操作的结果对后续操作是可见的</strong>。</p><p><strong>Happens-Before</strong> 非常重要，它是判断数据是否存在竞争、线程是否安全的主要依据，依靠这个原则，我们可以通过几条规则一揽子地解决并发环境下两个操作间是否可能存在冲突的所有问题。</p><ul><li><strong>程序次序规则</strong> - 一个线程内，按照代码顺序，书写在前面的操作先行发生于书写在后面的操作。</li><li><strong>锁定规则</strong> - 一个 <code>unLock</code> 操作先行发生于后面对同一个锁的 <code>lock</code> 操作。</li><li><strong>volatile 变量规则</strong> - 对一个 <code>volatile</code> 变量的写操作先行发生于后面对这个变量的读操作。</li><li><strong>线程启动规则</strong> - <code>Thread</code> 对象的 <code>start()</code> 方法先行发生于此线程的每个一个动作。</li><li><strong>线程终止规则</strong> - 线程中所有的操作都先行发生于线程的终止检测，我们可以通过 <code>Thread.join()</code> 方法结束、<code>Thread.isAlive()</code> 的返回值手段检测到线程已经终止执行。</li><li><strong>线程中断规则</strong> - 对线程 <code>interrupt()</code> 方法的调用先行发生于被中断线程的代码检测到中断事件的发生，可以通过 <code>Thread.interrupted()</code> 方法检测到是否有中断发生。</li><li><strong>对象终结规则</strong> - 一个对象的初始化完成先行发生于它的 <code>finalize()</code> 方法的开始。</li><li><strong>传递性</strong> - 如果操作 A 先行发生于 操作 B，而操作 B 又 先行发生于 操作 C，则可以得出操作 A 先行发生于 操作 C。</li></ul><h2 id="内存屏障" tabindex="-1"><a class="header-anchor" href="#内存屏障" aria-hidden="true">#</a> 内存屏障</h2><p>Java 中如何保证底层操作的有序性和可见性？可以通过内存屏障（memory barrier）。</p><p>内存屏障是被插入两个 CPU 指令之间的一种指令，用来禁止处理器指令发生重排序（像屏障一样），从而保障<strong>有序性</strong>的。另外，为了达到屏障的效果，它也会使处理器写入、读取值之前，将主内存的值写入高速缓存，清空无效队列，从而保障<strong>可见性</strong>。</p><p>举个例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Store1;
Store2;
Load1;
StoreLoad;  //内存屏障
Store3;
Load2;
Load3;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于上面的一组 CPU 指令（Store 表示写入指令，Load 表示读取指令），StoreLoad 屏障之前的 Store 指令无法与 StoreLoad 屏障之后的 Load 指令进行交换位置，即<strong>重排序</strong>。但是 StoreLoad 屏障之前和之后的指令是可以互换位置的，即 Store1 可以和 Store2 互换，Load2 可以和 Load3 互换。</p><p>常见有 4 种屏障</p><ul><li><code>LoadLoad</code> 屏障 - 对于这样的语句 <code>Load1; LoadLoad; Load2</code>，在 Load2 及后续读取操作要读取的数据被访问前，保证 Load1 要读取的数据被读取完毕。</li><li><code>StoreStore</code> 屏障 - 对于这样的语句 <code>Store1; StoreStore; Store2</code>，在 Store2 及后续写入操作执行前，保证 Store1 的写入操作对其它处理器可见。</li><li><code>LoadStore</code> 屏障 - 对于这样的语句 <code>Load1; LoadStore; Store2</code>，在 Store2 及后续写入操作被执行前，保证 Load1 要读取的数据被读取完毕。</li><li><code>StoreLoad</code> 屏障 - 对于这样的语句 <code>Store1; StoreLoad; Load2</code>，在 Load2 及后续所有读取操作执行前，保证 Store1 的写入对所有处理器可见。它的开销是四种屏障中最大的（冲刷写缓冲器，清空无效化队列）。在大多数处理器的实现中，这个屏障是个万能屏障，兼具其它三种内存屏障的功能。</li></ul><p>Java 中对内存屏障的使用在一般的代码中不太容易见到，常见的有 <code>volatile</code> 和 <code>synchronized</code> 关键字修饰的代码块(后面再展开介绍)，还可以通过 <code>Unsafe</code> 这个类来使用内存屏障。</p><h2 id="volatile" tabindex="-1"><a class="header-anchor" href="#volatile" aria-hidden="true">#</a> volatile</h2><p><code>volatile</code> 是 JVM 提供的 <strong>最轻量级的同步机制</strong>。</p><p><code>volatile</code> 的中文意思是不稳定的，易变的，用 <code>volatile</code> 修饰变量是为了保证变量在多线程中的可见性。</p><h4 id="volatile-变量的特性" tabindex="-1"><a class="header-anchor" href="#volatile-变量的特性" aria-hidden="true">#</a> volatile 变量的特性</h4><p><code>volatile</code> 变量具有两种特性：</p><ul><li>保证变量对所有线程的可见性。</li><li>禁止进行指令重排序</li></ul><h5 id="保证变量对所有线程的可见性" tabindex="-1"><a class="header-anchor" href="#保证变量对所有线程的可见性" aria-hidden="true">#</a> 保证变量对所有线程的可见性</h5><p>这里的可见性是指当一条线程修改了 volatile 变量的值，新值对于其他线程来说是可以立即得知的。而普通变量不能做到这一点，普通变量的值在线程间传递均需要通过主内存来完成。</p><p><strong>线程写 volatile 变量的过程：</strong></p><ol><li>改变线程工作内存中 volatile 变量副本的值</li><li>将改变后的副本的值从工作内存刷新到主内存</li></ol><p><strong>线程读 volatile 变量的过程：</strong></p><ol><li>从主内存中读取 volatile 变量的最新值到线程的工作内存中</li><li>从工作内存中读取 volatile 变量的副本</li></ol><blockquote><p>注意：<strong>保证可见性不等同于 volatile 变量保证并发操作的安全性</strong></p><p>在不符合以下两点的场景中，仍然要通过枷锁来保证原子性：</p><ul><li>运算结果并不依赖变量的当前值，或者能够确保只有单一的线程修改变量的值。</li><li>变量不需要与其他状态变量共同参与不变约束。</li></ul></blockquote><p>但是如果多个线程同时把更新后的变量值同时刷新回主内存，可能导致得到的值不是预期结果：</p><p>举个例子： 定义 <code>volatile int count = 0</code>，2 个线程同时执行 count++ 操作，每个线程都执行 500 次，最终结果小于 1000，原因是每个线程执行 count++ 需要以下 3 个步骤：</p><ol><li>线程从主内存读取最新的 count 的值</li><li>执行引擎把 count 值加 1，并赋值给线程工作内存</li><li>线程工作内存把 count 值保存到主内存 有可能某一时刻 2 个线程在步骤 1 读取到的值都是 100，执行完步骤 2 得到的值都是 101，最后刷新了 2 次 101 保存到主内存。</li></ol><h5 id="语义-2-禁止进行指令重排序" tabindex="-1"><a class="header-anchor" href="#语义-2-禁止进行指令重排序" aria-hidden="true">#</a> 语义 2 禁止进行指令重排序</h5><p>具体一点解释，禁止重排序的规则如下：</p><ul><li>当程序执行到 <code>volatile</code> 变量的读操作或者写操作时，在其前面的操作的更改肯定全部已经进行，且结果已经对后面的操作可见；在其后面的操作肯定还没有进行；</li><li>在进行指令优化时，不能将在对 <code>volatile</code> 变量访问的语句放在其后面执行，也不能把 <code>volatile</code> 变量后面的语句放到其前面执行。</li></ul><p>普通的变量仅仅会保证该方法的执行过程中所有依赖赋值结果的地方都能获取到正确的结果，而不能保证赋值操作的顺序与程序代码中的执行顺序一致。</p><p>举个例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">volatile</span> <span class="token keyword">boolean</span> initialized <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token comment">// 下面代码线程A中执行</span>
<span class="token comment">// 读取配置信息，当读取完成后将initialized设置为true以通知其他线程配置可用</span>
<span class="token function">doSomethingReadConfg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
initialized <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// 下面代码线程B中执行</span>
<span class="token comment">// 等待initialized 为true，代表线程A已经把配置信息初始化完成</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>initialized<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 使用线程A初始化好的配置信息</span>
<span class="token function">doSomethingWithConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中如果定义 initialized 变量时没有使用 volatile 修饰，就有可能会由于指令重排序的优化，导致线程 A 中最后一句代码 &quot;initialized = true&quot; 在 “doSomethingReadConfg()” 之前被执行，这样会导致线程 B 中使用配置信息的代码就可能出现错误，而 volatile 关键字就禁止重排序的语义可以避免此类情况发生。</p><h4 id="volatile-的原理" tabindex="-1"><a class="header-anchor" href="#volatile-的原理" aria-hidden="true">#</a> volatile 的原理</h4><p>具体实现方式是在编译期生成字节码时，会在指令序列中增加内存屏障来保证，下面是基于保守策略的 JMM 内存屏障插入策略：</p><ul><li>在每个 volatile 写操作的前面插入一个 StoreStore 屏障。 该屏障除了保证了屏障之前的写操作和该屏障之后的写操作不能重排序，还会保证了 volatile 写操作之前，任何的读写操作都会先于 volatile 被提交。</li><li>在每个 volatile 写操作的后面插入一个 StoreLoad 屏障。 该屏障除了使 volatile 写操作不会与之后的读操作重排序外，还会刷新处理器缓存，使 volatile 变量的写更新对其他线程可见。</li><li>在每个 volatile 读操作的后面插入一个 LoadLoad 屏障。 该屏障除了使 volatile 读操作不会与之前的写操作发生重排序外，还会刷新处理器缓存，使 volatile 变量读取的为最新值。</li><li>在每个 volatile 读操作的后面插入一个 LoadStore 屏障。 该屏障除了禁止了 volatile 读操作与其之后的任何写操作进行重排序，还会刷新处理器缓存，使其他线程 volatile 变量的写更新对 volatile 读操作的线程可见。</li></ul><h4 id="volatile-的使用场景" tabindex="-1"><a class="header-anchor" href="#volatile-的使用场景" aria-hidden="true">#</a> volatile 的使用场景</h4><p>总结起来，就是“一次写入，到处读取”，某一线程负责更新变量，其他线程只读取变量(不更新变量)，并根据变量的新值执行相应逻辑。例如状态标志位更新，观察者模型变量值发布。</p><h2 id="synchronized" tabindex="-1"><a class="header-anchor" href="#synchronized" aria-hidden="true">#</a> synchronized</h2><h3 id="long-和-double-变量的特殊规则" tabindex="-1"><a class="header-anchor" href="#long-和-double-变量的特殊规则" aria-hidden="true">#</a> long 和 double 变量的特殊规则</h3><p>JMM 要求 lock、unlock、read、load、assign、use、store、write 这 8 种操作都具有原子性，但是对于 64 位的数据类型（long 和 double），在模型中特别定义相对宽松的规定：允许虚拟机将没有被 <code>volatile</code> 修饰的 64 位数据的读写操作分为 2 次 32 位的操作来进行，即允许虚拟机可选择不保证 64 位数据类型的 load、store、read 和 write 这 4 个操作的原子性。由于这种非原子性，有可能导致其他线程读到同步未完成的“32 位的半个变量”的值。</p><p>不过实际开发中，Java 内存模型强烈建议虚拟机把 64 位数据的读写实现为具有原子性，目前各种平台下的商用虚拟机都选择把 64 位数据的读写操作作为原子操作来对待，因此我们在编写代码时一般不需要把用到的 long 和 double 变量专门声明为 volatile。</p><h3 id="final-型量的特殊规则" tabindex="-1"><a class="header-anchor" href="#final-型量的特殊规则" aria-hidden="true">#</a> final 型量的特殊规则</h3><p>我们知道，final 成员变量必须在声明的时候初始化或者在构造器中初始化，否则就会报编译错误。 final 关键字的可见性是指：被 final 修饰的字段在声明时或者构造器中，一旦初始化完成，那么在其他线程无须同步就能正确看见 final 字段的值。这是因为一旦初始化完成，final 变量的值立刻回写到主内存。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,85),h={href:"https://book.douban.com/subject/10484692/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://book.douban.com/subject/26591326/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://book.douban.com/subject/34907497/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://juejin.im/post/5bf2977751882505d840321d",target:"_blank",rel:"noopener noreferrer"},m={href:"https://time.geekbang.org/column/intro/100023901",target:"_blank",rel:"noopener noreferrer"};function k(J,x){const a=l("ExternalLinkIcon");return r(),s("div",null,[c,e("p",null,[o("在 "),e("a",p,[o("Java 并发简介"),n(a)]),o(" 中已经介绍了，并发安全需要满足可见性、有序性、原子性。其中，导致可见性的原因是缓存，导致有序性的原因是编译优化。那解决可见性、有序性最直接的办法就是"),g,o(" 。但这么做，性能就堪忧了。")]),u,e("ul",null,[e("li",null,[e("a",h,[o("《Java 并发编程实战》"),n(a)])]),e("li",null,[e("a",v,[o("《Java 并发编程的艺术》"),n(a)])]),e("li",null,[e("a",b,[o("《深入理解 Java 虚拟机》"),n(a)])]),e("li",null,[e("a",f,[o("理解 Java 内存模型"),n(a)])]),e("li",null,[e("a",m,[o("《Java 并发编程实战》"),n(a)])])])])}const S=t(d,[["render",k],["__file","09.Java内存模型.html.vue"]]);export{S as default};
