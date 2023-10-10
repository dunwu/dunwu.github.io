import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as r,c as l,a as e,b as n,d as a,e as o}from"./app-29bcd084.js";const t={},c=o('<h1 id="redis-事务" tabindex="-1"><a class="header-anchor" href="#redis-事务" aria-hidden="true">#</a> Redis 事务</h1><blockquote><p><strong>Redis 仅支持『非严格』的事务</strong>。所谓“非严格”是指：Redis 事务保证『全部执行命令』；但是，Redis 事务『不支持回滚』。</p><p>关键词：<code>事务</code>、<code>ACID</code>、<code>MULTI</code>、<code>EXEC</code>、<code>DISCARD</code>、<code>WATCH</code></p></blockquote><h2 id="redis-事务简介" tabindex="-1"><a class="header-anchor" href="#redis-事务简介" aria-hidden="true">#</a> Redis 事务简介</h2><h3 id="什么是-acid" tabindex="-1"><a class="header-anchor" href="#什么是-acid" aria-hidden="true">#</a> 什么是 ACID</h3><p>ACID 是数据库事务正确执行的四个基本要素。</p><ul><li><strong>原子性（Atomicity）</strong><ul><li>事务被视为不可分割的最小单元，事务中的所有操作<strong>要么全部提交成功，要么全部失败回滚</strong>。</li><li>回滚可以用日志来实现，日志记录着事务所执行的修改操作，在回滚时反向执行这些修改操作即可。</li></ul></li><li><strong>一致性（Consistency）</strong><ul><li>数据库在事务执行前后都保持一致性状态。</li><li>在一致性状态下，所有事务对一个数据的读取结果都是相同的。</li></ul></li><li><strong>隔离性（Isolation）</strong><ul><li>一个事务所做的修改在最终提交以前，对其它事务是不可见的。</li></ul></li><li><strong>持久性（Durability）</strong><ul><li>一旦事务提交，则其所做的修改将会永远保存到数据库中。即使系统发生崩溃，事务执行的结果也不能丢失。</li><li>可以通过数据库备份和恢复来实现，在系统发生奔溃时，使用备份的数据库进行数据恢复。</li></ul></li></ul><p><strong>一个支持事务（Transaction）中的数据库系统，必需要具有这四种特性，否则在事务过程（Transaction processing）当中无法保证数据的正确性，交易过程极可能达不到交易。</strong></p><ul><li>只有满足一致性，事务的执行结果才是正确的。</li><li>在无并发的情况下，事务串行执行，隔离性一定能够满足。此时只要能满足原子性，就一定能满足一致性。</li><li>在并发的情况下，多个事务并行执行，事务不仅要满足原子性，还需要满足隔离性，才能满足一致性。</li><li>事务满足持久化是为了能应对系统崩溃的情况。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/database/RDB/数据库ACID.png" alt="ACID" tabindex="0" loading="lazy"><figcaption>ACID</figcaption></figure><h3 id="redis-事务的特性" tabindex="-1"><a class="header-anchor" href="#redis-事务的特性" aria-hidden="true">#</a> Redis 事务的特性</h3><p>Redis 的事务总是支持 ACID 中的原子性、一致性和隔离性， 当服务器运行在 AOF 持久化模式下， 并且 <code>appendfsync</code> 选项的值为 <code>always</code> 时， 事务也具有持久性。</p><p>但需要注意的是：<strong>Redis 仅支持『非严格』的事务</strong>。这里的“非严格”，其实指的是 Redis 事务只能部分保证 ACID 中的原子性。</p><ul><li><strong>Redis 事务保证全部执行命令</strong> - Redis 事务中的多个命令会被打包到事务队列中，然后按先进先出（FIFO）的顺序执行。事务在执行过程中不会被中断，当事务队列中的所有命令都被执行完毕之后，事务才会结束。</li><li><strong>Redis 事务不支持回滚</strong> - 如果命令执行失败不会回滚，而是会继续执行下去。</li></ul>',13),p={href:"https://redis.io/docs/interact/transactions/",target:"_blank",rel:"noopener noreferrer"},u=e("ul",null,[e("li",null,"Redis 命令只会因为错误的语法而失败，或是命令用在了错误类型的键上面。"),e("li",null,"因为不需要对回滚进行支持，所以 Redis 的内部可以保持简单且快速。")],-1),h=e("h2",{id:"redis-事务应用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#redis-事务应用","aria-hidden":"true"},"#"),n(" Redis 事务应用")],-1),m={href:"https://redis.io/commands/multi",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"MULTI",-1),_={href:"https://redis.io/commands/exec",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"EXEC",-1),g={href:"https://redis.io/commands/discard",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"DISCARD",-1),k={href:"https://redis.io/commands/watch",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"WATCH",-1),E=e("p",null,"事务可以一次执行多个命令， 并且有以下两个重要的保证：",-1),T=e("ul",null,[e("li",null,"事务是一个单独的隔离操作：事务中的所有命令都会序列化、按顺序地执行。事务在执行的过程中，不会被其他客户端发送来的命令请求所打断。"),e("li",null,"事务是一个原子操作：事务中的命令要么全部被执行，要么全部都不执行。")],-1),A=e("h3",{id:"multi",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#multi","aria-hidden":"true"},"#"),n(" MULTI")],-1),y={href:"https://redis.io/commands/multi",target:"_blank",rel:"noopener noreferrer"},R=e("code",null,"MULTI",-1),I=o(`<p><code>MULTI</code> 执行之后， 客户端可以继续向服务器发送任意多条命令， 这些命令不会立即被执行， 而是被放到一个队列中， 当 EXEC 命令被调用时， 所有队列中的命令才会被执行。</p><p>以下是一个事务例子， 它原子地增加了 <code>foo</code> 和 <code>bar</code> 两个键的值：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;</span> MULTI
OK
<span class="token operator">&gt;</span> INCR foo
QUEUED
<span class="token operator">&gt;</span> INCR bar
QUEUED
<span class="token operator">&gt;</span> EXEC
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="exec" tabindex="-1"><a class="header-anchor" href="#exec" aria-hidden="true">#</a> EXEC</h3>`,4),x={href:"https://redis.io/commands/exec",target:"_blank",rel:"noopener noreferrer"},D=e("code",null,"EXEC",-1),U=o('<ul><li>如果客户端在使用 <code>MULTI</code> 开启了一个事务之后，却因为断线而没有成功执行 <code>EXEC</code> ，那么事务中的所有命令都不会被执行。</li><li>另一方面，如果客户端成功在开启事务之后执行 <code>EXEC</code> ，那么事务中的所有命令都会被执行。</li></ul><p><code>MULTI</code> 和 <code>EXEC</code> 中的操作将会一次性发送给服务器，而不是一条一条发送，这种方式称为流水线，它可以减少客户端与服务器之间的网络通信次数从而提升性能。</p><h3 id="discard" tabindex="-1"><a class="header-anchor" href="#discard" aria-hidden="true">#</a> DISCARD</h3>',3),H={href:"https://redis.io/commands/discard",target:"_blank",rel:"noopener noreferrer"},W=e("code",null,"DISCARD",-1),X=o(`<p>示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;</span> SET foo <span class="token number">1</span>
OK
<span class="token operator">&gt;</span> MULTI
OK
<span class="token operator">&gt;</span> INCR foo
QUEUED
<span class="token operator">&gt;</span> DISCARD
OK
<span class="token operator">&gt;</span> GET foo
<span class="token string">&quot;1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> WATCH</h3>`,3),L={href:"https://redis.io/commands/watch",target:"_blank",rel:"noopener noreferrer"},M=e("code",null,"WATCH",-1),w=o(`<p>被 <code>WATCH</code> 的键会被监视，并会发觉这些键是否被改动过了。 如果有至少一个被监视的键在 <code>EXEC</code> 执行之前被修改了， 那么整个事务都会被取消， <code>EXEC</code> 返回 <code>nil-reply</code> 来表示事务已经失败。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>WATCH mykey
val <span class="token operator">=</span> GET mykey
val <span class="token operator">=</span> val <span class="token operator">+</span> <span class="token number">1</span>
MULTI
SET mykey $val
EXEC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用上面的代码， 如果在 <code>WATCH</code> 执行之后， <code>EXEC</code> 执行之前， 有其他客户端修改了 <code>mykey</code> 的值， 那么当前客户端的事务就会失败。 程序需要做的， 就是不断重试这个操作， 直到没有发生碰撞为止。</p><p>这种形式的锁被称作乐观锁， 它是一种非常强大的锁机制。 并且因为大多数情况下， 不同的客户端会访问不同的键， 碰撞的情况一般都很少， 所以通常并不需要进行重试。</p><p><code>WATCH</code> 使得 <code>EXEC</code> 命令需要有条件地执行：事务只能在所有被监视键都没有被修改的前提下执行，如果这个前提不能满足的话，事务就不会被执行。</p><p><code>WATCH</code> 命令可以被调用多次。对键的监视从 <code>WATCH</code> 执行之后开始生效，直到调用 <code>EXEC</code> 为止。</p><p>用户还可以在单个 <code>WATCH</code> 命令中监视任意多个键，例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>redis<span class="token operator">&gt;</span> WATCH key1 key2 key3
OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="取消-watch-的场景" tabindex="-1"><a class="header-anchor" href="#取消-watch-的场景" aria-hidden="true">#</a> 取消 WATCH 的场景</h4><p>当 <code>EXEC</code> 被调用时， 不管事务是否成功执行， 对所有键的监视都会被取消。另外， 当客户端断开连接时， 该客户端对键的监视也会被取消。</p><p>使用无参数的 <code>UNWATCH</code> 命令可以手动取消对所有键的监视。 对于一些需要改动多个键的事务， 有时候程序需要同时对多个键进行加锁， 然后检查这些键的当前值是否符合程序的要求。 当值达不到要求时， 就可以使用 <code>UNWATCH</code> 命令来取消目前对键的监视， 中途放弃这个事务， 并等待事务的下次尝试。</p><h4 id="使用-watch-创建原子操作" tabindex="-1"><a class="header-anchor" href="#使用-watch-创建原子操作" aria-hidden="true">#</a> 使用 WATCH 创建原子操作</h4><p><code>WATCH</code> 可以用于创建 Redis 没有内置的原子操作。</p><p>举个例子，以下代码实现了原创的 <code>ZPOP</code> 命令，它可以原子地弹出有序集合中分值（<code>score</code>）最小的元素：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>WATCH zset
element <span class="token operator">=</span> ZRANGE zset <span class="token number">0</span> <span class="token number">0</span>
MULTI
ZREM zset element
EXEC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,16),N={href:"https://item.jd.com/11486101.html",target:"_blank",rel:"noopener noreferrer"};function O(S,K){const s=d("ExternalLinkIcon");return r(),l("div",null,[c,e("p",null,[n("Redis 官方的"),e("a",p,[n("事务特性文档"),a(s)]),n("给出的不支持回滚的理由是：")]),u,h,e("p",null,[e("a",m,[v,a(s)]),n("、"),e("a",_,[b,a(s)]),n("、"),e("a",g,[C,a(s)]),n(" 和 "),e("a",k,[f,a(s)]),n(" 是 Redis 事务相关的命令。")]),E,T,A,e("p",null,[e("strong",null,[e("a",y,[R,a(s)]),n(" 命令用于开启一个事务，它总是返回 OK 。")])]),I,e("p",null,[e("strong",null,[e("a",x,[D,a(s)]),n(" 命令负责触发并执行事务中的所有命令。")])]),U,e("p",null,[e("strong",null,[n("当执行 "),e("a",H,[W,a(s)]),n(" 命令时， 事务会被放弃， 事务队列会被清空， 并且客户端会从事务状态中退出。")])]),X,e("p",null,[e("strong",null,[e("a",L,[M,a(s)]),n(" 命令可以为 Redis 事务提供 check-and-set （CAS）行为。")])]),w,e("ul",null,[e("li",null,[e("a",N,[n("《Redis 设计与实现》"),a(s)])])])])}const B=i(t,[["render",O],["__file","32.Redis事务.html.vue"]]);export{B as default};
