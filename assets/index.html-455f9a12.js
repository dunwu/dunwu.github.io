import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c as d,a as e,b as s,d as a,e as o}from"./app-002cceec.js";const r={},c=o(`<h1 id="redis-过期删除和内存淘汰" tabindex="-1"><a class="header-anchor" href="#redis-过期删除和内存淘汰" aria-hidden="true">#</a> Redis 过期删除和内存淘汰</h1><h2 id="redis-过期删除" tabindex="-1"><a class="header-anchor" href="#redis-过期删除" aria-hidden="true">#</a> Redis 过期删除</h2><p>Redis 可以为每个键设置过期时间，当键过期时，会自动删除该键。</p><h3 id="设置键的生存时间或过期时间" tabindex="-1"><a class="header-anchor" href="#设置键的生存时间或过期时间" aria-hidden="true">#</a> 设置键的生存时间或过期时间</h3><p>Redis 中，和键的生存时间相关的命令如下所示：</p><table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td><code>EXPIRE</code></td><td>设置 key 的过期时间，单位为秒</td></tr><tr><td><code>PEXPIRE</code></td><td>设置 key 的过期时间，单位为毫秒</td></tr><tr><td><code>EXPIREAT</code></td><td>设置 key 的过期时间为指定的秒级时间戳</td></tr><tr><td><code>PEXPIREAT</code></td><td>设置 key 的过期时间为指定的毫秒级时间戳</td></tr><tr><td><code>TTL</code></td><td>返回 key 的剩余生存时间，单位为秒</td></tr><tr><td><code>PTTL</code></td><td>返回 key 的剩余生存时间，单位为毫秒</td></tr><tr><td><code>PERSIST</code></td><td>移除 key 的过期时间，key 将持久保持</td></tr></tbody></table><p>【示例】EXPIRE、TTL 操作</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> key value
OK
<span class="token comment"># 设置 key 的生存时间为 60s</span>
<span class="token operator">&gt;</span> expire key <span class="token number">60</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token comment"># 查看 key 的剩余生存时间</span>
<span class="token operator">&gt;</span> ttl key
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">58</span>
<span class="token comment"># 60s 之内</span>
<span class="token operator">&gt;</span> get key
<span class="token string">&quot;value&quot;</span>
<span class="token comment"># 60s 之外</span>
<span class="token operator">&gt;</span> get key
<span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【示例】EXPIREAT、TTL 操作</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> key value
OK
<span class="token comment"># 设置 key 的生存时间为 1692419299</span>
<span class="token operator">&gt;</span> expireat key <span class="token number">1692419299</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token comment"># 查看 key 的剩余生存时间</span>
<span class="token operator">&gt;</span> ttl key
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">9948</span>
<span class="token comment"># 1692419299 之前</span>
<span class="token operator">&gt;</span> get key
<span class="token string">&quot;value&quot;</span>
<span class="token comment"># 1692419299 之后</span>
<span class="token operator">&gt;</span> get key
<span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="如何保存过期时间" tabindex="-1"><a class="header-anchor" href="#如何保存过期时间" aria-hidden="true">#</a> 如何保存过期时间</h4><p>在 Redis 中，redisDb 结构的 <code>expires</code> 字典保存了数据库中所有键的过期时间，这个字典称为过期字典：</p><ul><li>过期字典的键是一个指针，这个指针指向某个键对象</li><li>过期字典的值是一个 long long 类型的整数，这个整数保存了键的过期时间——一个毫秒精度的 UNIX 时间戳。</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">redisDb</span> <span class="token punctuation">{</span>

    <span class="token comment">// 数据库键空间，保存着数据库中的所有键值对</span>
    dict <span class="token operator">*</span>dict<span class="token punctuation">;</span>

    <span class="token comment">// 键的过期时间，字典的键为键，字典的值为过期事件 UNIX 时间戳</span>
    dict <span class="token operator">*</span>expires<span class="token punctuation">;</span>

    <span class="token comment">// ...</span>
<span class="token punctuation">}</span> redisDb<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="过期键的判定" tabindex="-1"><a class="header-anchor" href="#过期键的判定" aria-hidden="true">#</a> 过期键的判定</h4><p>过期键的判定流程如下：</p><ul><li>检查指定 key 是否存在于过期字典；如果存在，则取得 key 的过期时间。</li><li>检查当前时间戳是否大于 key 的过期时间：如果是，key 已过期；反之，key 未过期。</li></ul><h3 id="过期删除策略" tabindex="-1"><a class="header-anchor" href="#过期删除策略" aria-hidden="true">#</a> 过期删除策略</h3><ul><li><strong>定时删除</strong> - 在设置 key 的过期时间的同时，创建一个定时器，让定时器在 key 的过期时间来临时，立即执行 key 的删除操作。 <ul><li>优点 - 保证过期 key 被尽可能快的删除，释放内存。</li><li>缺点 - <strong>如果过期 key 较多，可能会占用相当一部分的 CPU，从而影响服务器的吞吐量和响应时延</strong>。</li></ul></li><li><strong>惰性删除</strong> - 放任 key 过期不管，但是每次从 key 空间中获取 key 时，都检查取得的 key 是否过期，如果过期的话，就删除该 key ；如果没有过期，就返回该 key。 <ul><li>优点 - 占用 CPU 最少。程序只会在读写键时，对当前键进行过期检查，因此不会有额外的 CPU 开销。</li><li>缺点 - <strong>过期的 key 可能因为没有被访问，而一直无法释放，造成内存的浪费，有内存泄漏的风险</strong>。</li></ul></li><li><strong>定期删除</strong> - 每隔一段时间，程序就对数据库进行一次检查，删除里面的过期 key 。至于要删除多少过期 key ，以及要检查多少个数据库，则由算法决定。定期删除是前两种策略的一种折中方案。定期删除策略的难点是删除操作执行的时长和频率。 <ul><li>执行太频或执行时间过长，就会出现和定时删除相同的问题；</li><li>执行太少或执行时间过短，就会出现和惰性删除相同的问题；</li></ul></li></ul><h3 id="redis-的过期删除策略" tabindex="-1"><a class="header-anchor" href="#redis-的过期删除策略" aria-hidden="true">#</a> Redis 的过期删除策略</h3><p>Redis 同时采用了惰性删除和定期删除策略，以此在合理使用 CPU 和内存之间取得平衡。</p><p><strong>Redis 惰性删除策略的实现</strong> - 由 <code>db.c/expireIfNeeded</code> 函数实现，所有读写命令在执行之前都会调用 <code>expireIfNeeded</code> 函数对输入键进行检查：如果输入键已过期，将输入键从数据库中删除；否则，什么也不做。</p><p><strong>Redis 定期删除策略的实现</strong> - 由 <code>redis.c/activeExpireCycle</code> 函数实现，每当 Redis 周期性执行 <code>redis.c/serverCron</code> 函数时，<code>activeExpireCycle</code> 函数就会被调用。<code>activeExpireCycle</code> 函数会在规定时间内，遍历各个数据库，从 <code>expires</code> 字典中随机检查一部分键的过期时间，并删除过期的键。</p><h3 id="aof、rdb-和复制对过期键的处理" tabindex="-1"><a class="header-anchor" href="#aof、rdb-和复制对过期键的处理" aria-hidden="true">#</a> AOF、RDB 和复制对过期键的处理</h3><ul><li>执行 SAVE 命令或者 BGSAVE 命令所产生的新 RDB 文件不会包含已经过期的键。</li><li>执行 BGREWRITEAOF 命令所产生的重写 AOF 文件不会包含已经过期的键。</li><li>当一个过期键被删除之后， 服务器会追加一条 DEL 命令到现有 AOF 文件的末尾， 显式地删除过期键。</li><li>当主服务器删除一个过期键之后， 它会向所有从服务器发送一条 DEL 命令， 显式地删除过期键。</li><li>从服务器即使发现过期键， 也不会自作主张地删除它， 而是等待主节点发来 DEL 命令， 这种统一、中心化的过期键删除策略可以保证主从服务器数据的一致性。</li><li>当 Redis 命令对数据库进行修改之后， 服务器会根据配置， 向客户端发送数据库通知。</li></ul><h2 id="redis-内存淘汰" tabindex="-1"><a class="header-anchor" href="#redis-内存淘汰" aria-hidden="true">#</a> Redis 内存淘汰</h2><h3 id="内存淘汰要点" tabindex="-1"><a class="header-anchor" href="#内存淘汰要点" aria-hidden="true">#</a> 内存淘汰要点</h3><ul><li><strong>最大缓存</strong> - Redis 允许通过 <code>maxmemory</code> 参数来设置内存最大值。</li><li><strong>失效时间</strong> - 作为一种定期清理无效数据的重要机制，在 Redis 提供的诸多命令中，<code>EXPIRE</code>、<code>EXPIREAT</code>、<code>PEXPIRE</code>、<code>PEXPIREAT</code> 以及 <code>SETEX</code> 和 <code>PSETEX</code> 均可以用来设置一条键值对的失效时间。而一条键值对一旦被关联了失效时间就会在到期后自动删除（或者说变得无法访问更为准确）。</li><li><strong>淘汰策略</strong> - 随着不断的向 Redis 中保存数据，当内存剩余空间无法满足添加的数据时，Redis 内就会施行数据淘汰策略，清除一部分内容然后保证新的数据可以保存到内存中。内存淘汰机制是为了更好的使用内存，用一定得 miss 来换取内存的利用率，保证 Redis 缓存中保存的都是热点数据。</li><li><strong>非精准的 LRU</strong> - 实际上 Redis 实现的 LRU 并不是可靠的 LRU，也就是名义上我们使用 LRU 算法淘汰键，但是实际上被淘汰的键并不一定是真正的最久没用的。</li></ul><h3 id="淘汰策略" tabindex="-1"><a class="header-anchor" href="#淘汰策略" aria-hidden="true">#</a> 淘汰策略</h3><p>内存淘汰只是 Redis 提供的一个功能，为了更好地实现这个功能，必须为不同的应用场景提供不同的策略，内存淘汰策略讲的是为实现内存淘汰我们具体怎么做，要解决的问题包括淘汰键空间如何选择？在键空间中淘汰键如何选择？</p><p>Redis 提供了下面几种内存淘汰策略供用户选：</p><ul><li><p><strong>不淘汰</strong></p><ul><li><strong><code>noeviction</code></strong> - 当内存使用达到阈值的时候，所有引起申请内存的命令会报错。这是 Redis 默认的策略。</li></ul></li><li><p><strong>在过期键中进行淘汰</strong></p><ul><li><p><strong><code>volatile-random</code></strong> - 在设置了过期时间的键空间中，随机移除某个 key。</p></li><li><p><strong><code>volatile-ttl</code></strong> - 在设置了过期时间的键空间中，具有更早过期时间的 key 优先移除。</p></li><li><p><strong><code>volatile-lru</code></strong> - 在设置了过期时间的键空间中，优先移除最近未使用的 key。</p></li><li><p><strong><code>volatile-lfu</code></strong> （Redis 4.0 新增）- 淘汰所有设置了过期时间的键值中，最少使用的键值。</p></li></ul></li><li><p><strong>在所有键中进行淘汰</strong></p><ul><li><strong><code>allkeys-lru</code></strong> - 在主键空间中，优先移除最近未使用的 key。</li><li><strong><code>allkeys-random</code></strong> - 在主键空间中，随机移除某个 key。</li><li><strong><code>allkeys-lfu</code></strong> (Redis 4.0 新增) - 淘汰整个键值中最少使用的键值。</li></ul></li></ul><h3 id="如何选择淘汰策略" tabindex="-1"><a class="header-anchor" href="#如何选择淘汰策略" aria-hidden="true">#</a> 如何选择淘汰策略</h3><ul><li>如果<strong>数据呈现幂等分布（存在热点数据，部分数据访问频率高，部分数据访问频率低），则使用 <code>allkeys-lru</code></strong>。</li><li>如果<strong>数据呈现平等分布（数据访问频率大致相同），则使用 <code>allkeys-random</code></strong>。</li><li>如果希望<strong>使用不同的 TTL 值向 Redis 提示哪些 key 更适合被淘汰，请使用 <code>volatile-ttl</code></strong>。</li><li><strong><code>volatile-lru</code> 和 <code>volatile-random</code> 适合既应用于缓存又应用于持久化存储的场景</strong>，然而我们也可以通过使用两个 Redis 实例来达到相同的效果。</li><li><strong>将 key 设置过期时间实际上会消耗更多的内存，因此建议使用 <code>allkeys-lru</code> 策略从而更有效率的使用内存</strong>。</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,35),p={href:"https://item.jd.com/11791607.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://item.jd.com/11486101.html",target:"_blank",rel:"noopener noreferrer"};function k(v,h){const n=t("ExternalLinkIcon");return l(),d("div",null,[c,e("ul",null,[e("li",null,[e("a",p,[s("《Redis 实战》"),a(n)])]),e("li",null,[e("a",u,[s("《Redis 设计与实现》"),a(n)])])])])}const b=i(r,[["render",k],["__file","index.html.vue"]]);export{b as default};
