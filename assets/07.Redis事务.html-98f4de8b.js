import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as r,c as t,a as e,d as a,b as n,e as i}from"./app-64c8372a.js";const o={},c=i('<h1 id="redis-事务" tabindex="-1"><a class="header-anchor" href="#redis-事务" aria-hidden="true">#</a> Redis 事务</h1><blockquote><p><strong>Redis 提供的不是严格的事务，Redis 只保证串行执行命令，并且能保证全部执行，但是执行命令失败时并不会回滚，而是会继续执行下去</strong>。</p></blockquote><p><code>MULTI</code> 、 <code>EXEC</code> 、 <code>DISCARD</code> 和 <code>WATCH</code> 是 Redis 事务相关的命令。</p><p>事务可以一次执行多个命令， 并且有以下两个重要的保证：</p><ul><li>事务是一个单独的隔离操作：事务中的所有命令都会序列化、按顺序地执行。事务在执行的过程中，不会被其他客户端发送来的命令请求所打断。</li><li>事务是一个原子操作：事务中的命令要么全部被执行，要么全部都不执行。</li></ul><h2 id="multi" tabindex="-1"><a class="header-anchor" href="#multi" aria-hidden="true">#</a> MULTI</h2>',6),p={href:"https://redis.io/commands/multi",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"MULTI",-1),h=i(`<p><code>MULTI</code> 执行之后， 客户端可以继续向服务器发送任意多条命令， 这些命令不会立即被执行， 而是被放到一个队列中， 当 EXEC 命令被调用时， 所有队列中的命令才会被执行。</p><p>以下是一个事务例子， 它原子地增加了 foo 和 bar 两个键的值：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;</span> MULTI
OK
<span class="token operator">&gt;</span> INCR foo
QUEUED
<span class="token operator">&gt;</span> INCR bar
QUEUED
<span class="token operator">&gt;</span> EXEC
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exec" tabindex="-1"><a class="header-anchor" href="#exec" aria-hidden="true">#</a> EXEC</h2>`,4),v={href:"https://redis.io/commands/exec",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"EXEC",-1),b=e("ul",null,[e("li",null,[n("如果客户端在使用 "),e("code",null,"MULTI"),n(" 开启了一个事务之后，却因为断线而没有成功执行 "),e("code",null,"EXEC"),n(" ，那么事务中的所有命令都不会被执行。")]),e("li",null,[n("另一方面，如果客户端成功在开启事务之后执行 "),e("code",null,"EXEC"),n(" ，那么事务中的所有命令都会被执行。")])],-1),_=e("h2",{id:"discard",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#discard","aria-hidden":"true"},"#"),n(" DISCARD")],-1),k={href:"https://redis.io/commands/discard",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"DISCARD",-1),E=i(`<p>示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;</span> SET foo <span class="token number">1</span>
OK
<span class="token operator">&gt;</span> MULTI
OK
<span class="token operator">&gt;</span> INCR foo
QUEUED
<span class="token operator">&gt;</span> DISCARD
OK
<span class="token operator">&gt;</span> GET foo
<span class="token string">&quot;1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> WATCH</h2>`,3),C={href:"https://redis.io/commands/watch",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"WATCH",-1),T=i(`<p>被 WATCH 的键会被监视，并会发觉这些键是否被改动过了。 如果有至少一个被监视的键在 EXEC 执行之前被修改了， 那么整个事务都会被取消， EXEC 返回 nil-reply 来表示事务已经失败。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>WATCH mykey
val <span class="token operator">=</span> GET mykey
val <span class="token operator">=</span> val <span class="token operator">+</span> <span class="token number">1</span>
MULTI
SET mykey $val
EXEC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用上面的代码， 如果在 WATCH 执行之后， EXEC 执行之前， 有其他客户端修改了 mykey 的值， 那么当前客户端的事务就会失败。 程序需要做的， 就是不断重试这个操作， 直到没有发生碰撞为止。</p><p>这种形式的锁被称作乐观锁， 它是一种非常强大的锁机制。 并且因为大多数情况下， 不同的客户端会访问不同的键， 碰撞的情况一般都很少， 所以通常并不需要进行重试。</p><p>WATCH 使得 EXEC 命令需要有条件地执行：事务只能在所有被监视键都没有被修改的前提下执行，如果这个前提不能满足的话，事务就不会被执行。</p><p>WATCH 命令可以被调用多次。对键的监视从 WATCH 执行之后开始生效，直到调用 EXEC 为止。</p><p>用户还可以在单个 WATCH 命令中监视任意多个键，例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>redis<span class="token operator">&gt;</span> WATCH key1 key2 key3
OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="取消-watch-的场景" tabindex="-1"><a class="header-anchor" href="#取消-watch-的场景" aria-hidden="true">#</a> 取消 WATCH 的场景</h3><p>当 EXEC 被调用时， 不管事务是否成功执行， 对所有键的监视都会被取消。</p><p>另外， 当客户端断开连接时， 该客户端对键的监视也会被取消。</p><p>使用无参数的 UNWATCH 命令可以手动取消对所有键的监视。 对于一些需要改动多个键的事务， 有时候程序需要同时对多个键进行加锁， 然后检查这些键的当前值是否符合程序的要求。 当值达不到要求时， 就可以使用 UNWATCH 命令来取消目前对键的监视， 中途放弃这个事务， 并等待事务的下次尝试。</p><h3 id="使用-watch-创建原子操作" tabindex="-1"><a class="header-anchor" href="#使用-watch-创建原子操作" aria-hidden="true">#</a> 使用 WATCH 创建原子操作</h3><p>WATCH 可以用于创建 Redis 没有内置的原子操作。</p><p>举个例子，以下代码实现了原创的 ZPOP 命令，它可以原子地弹出有序集合中分值（score）最小的元素：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>WATCH zset
element = ZRANGE zset 0 0
MULTI
ZREM zset element
EXEC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rollback" tabindex="-1"><a class="header-anchor" href="#rollback" aria-hidden="true">#</a> Rollback</h2><p><strong>Redis 不支持回滚</strong>。Redis 不支持回滚的理由：</p><ul><li>Redis 命令只会因为错误的语法而失败，或是命令用在了错误类型的键上面。</li><li>因为不需要对回滚进行支持，所以 Redis 的内部可以保持简单且快速。</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,20),x={href:"https://item.jd.com/11486101.html",target:"_blank",rel:"noopener noreferrer"};function y(A,R){const s=d("ExternalLinkIcon");return r(),t("div",null,[c,e("p",null,[e("strong",null,[e("a",p,[u,a(s)]),n(" 命令用于开启一个事务，它总是返回 OK 。")])]),h,e("p",null,[e("strong",null,[e("a",v,[m,a(s)]),n(" 命令负责触发并执行事务中的所有命令。")])]),b,_,e("p",null,[e("strong",null,[n("当执行 "),e("a",k,[g,a(s)]),n(" 命令时， 事务会被放弃， 事务队列会被清空， 并且客户端会从事务状态中退出。")])]),E,e("p",null,[e("strong",null,[e("a",C,[f,a(s)]),n(" 命令可以为 Redis 事务提供 check-and-set （CAS）行为。")])]),T,e("ul",null,[e("li",null,[e("a",x,[n("《Redis 设计与实现》"),a(s)])])])])}const U=l(o,[["render",y],["__file","07.Redis事务.html.vue"]]);export{U as default};
