import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c as t,a as e,d as s,b as d,e as a}from"./app-9f0b185d.js";const r={},c=a('<h1 id="redis-过期删除和内存淘汰" tabindex="-1"><a class="header-anchor" href="#redis-过期删除和内存淘汰" aria-hidden="true">#</a> Redis 过期删除和内存淘汰</h1><blockquote><p>关键词：<code>定时删除</code>、<code>惰性删除</code>、<code>定期删除</code>、<code>LRU</code>、<code>LFU</code></p></blockquote><h2 id="redis-过期删除" tabindex="-1"><a class="header-anchor" href="#redis-过期删除" aria-hidden="true">#</a> Redis 过期删除</h2><p>Redis 可以为每个键设置过期时间，当键过期时，会自动删除该键。</p><h3 id="设置键的生存时间或过期时间" tabindex="-1"><a class="header-anchor" href="#设置键的生存时间或过期时间" aria-hidden="true">#</a> 设置键的生存时间或过期时间</h3><p>Redis 中，和键的生存时间相关的命令如下所示：</p>',6),p=e("thead",null,[e("tr",null,[e("th",null,"命令"),e("th",null,"描述")])],-1),u={href:"https://redis.io/commands/expire/",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"EXPIRE",-1),k=e("td",null,"设置 key 的过期时间，单位为秒",-1),m={href:"https://redis.io/commands/pexpire/",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"PEXPIRE",-1),v=e("td",null,"设置 key 的过期时间，单位为毫秒",-1),b={href:"https://redis.io/commands/expireat/",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"EXPIREAT",-1),y=e("td",null,"设置 key 的过期时间为指定的秒级时间戳",-1),R={href:"https://redis.io/commands/pexpireat/",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"PEXPIREAT",-1),E=e("td",null,"设置 key 的过期时间为指定的毫秒级时间戳",-1),x={href:"https://redis.io/commands/ttl/",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"TTL",-1),I=e("td",null,"返回 key 的剩余生存时间，单位为秒",-1),T={href:"https://redis.io/commands/pttl/",target:"_blank",rel:"noopener noreferrer"},X=e("code",null,"PTTL",-1),A=e("td",null,"返回 key 的剩余生存时间，单位为毫秒",-1),L={href:"https://redis.io/commands/persist/",target:"_blank",rel:"noopener noreferrer"},U=e("code",null,"PERSIST",-1),D=e("td",null,"移除 key 的过期时间，key 将持久保持",-1),B=a(`<p>【示例】EXPIRE、TTL 操作</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> key value
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="如何保存过期时间" tabindex="-1"><a class="header-anchor" href="#如何保存过期时间" aria-hidden="true">#</a> 如何保存过期时间</h4><p>在 Redis 中，redisDb 结构的 <code>expires</code> 字典保存了数据库中所有键的过期时间，这个字典称为过期字典：</p><ul><li>过期字典的键是一个指针，这个指针指向某个键对象</li><li>过期字典的值是一个 <code>long long</code> 类型的整数，这个整数保存了键的过期时间——一个毫秒精度的 UNIX 时间戳。</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">redisDb</span> <span class="token punctuation">{</span>

    <span class="token comment">// 数据库键空间，保存着数据库中的所有键值对</span>
    dict <span class="token operator">*</span>dict<span class="token punctuation">;</span>

    <span class="token comment">// 键的过期时间，字典的键为键，字典的值为过期事件 UNIX 时间戳</span>
    dict <span class="token operator">*</span>expires<span class="token punctuation">;</span>

    <span class="token comment">// ...</span>
<span class="token punctuation">}</span> redisDb<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下图是一个带有过期字典的示例：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202309171537744.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当执行 <code>EXPIRE</code>、<code>PEXPIRE</code>、<code>EXPIREAT</code>、<code>PEXPIREAT</code> 命令，Redis 都会将其转为 <code>PEXPIREAT</code> 形式的时间戳，然后维护在 <code>expires</code> 字典中。</p><h4 id="过期键的判定" tabindex="-1"><a class="header-anchor" href="#过期键的判定" aria-hidden="true">#</a> 过期键的判定</h4><p>过期键的判定流程如下：</p><ul><li>检查指定 key 是否存在于过期字典；如果存在，则取得 key 的过期时间。</li><li>检查当前时间戳是否大于 key 的过期时间：如果是，key 已过期；反之，key 未过期。</li></ul><h3 id="过期删除策略" tabindex="-1"><a class="header-anchor" href="#过期删除策略" aria-hidden="true">#</a> 过期删除策略</h3><ul><li><strong>定时删除</strong> - 在设置 key 的过期时间的同时，创建一个定时器，让定时器在 key 的过期时间来临时，立即执行对 key 的删除操作。 <ul><li>优点 - 保证过期 key 被尽可能快的删除，释放内存。</li><li>缺点 - <strong>如果过期 key 较多，可能会占用相当一部分的 CPU，从而影响服务器的吞吐量和响应时延</strong>。</li></ul></li><li><strong>惰性删除</strong> - 放任 key 过期不管，但是每次访问 key 时，都检查 key 是否过期，如果过期的话，就删除该 key ；如果没有过期，就返回该 key。 <ul><li>优点 - 占用 CPU 最少。程序只会在读写键时，对当前键进行过期检查，因此不会有额外的 CPU 开销。</li><li>缺点 - <strong>过期的 key 可能因为没有被访问，而一直无法释放，造成内存的浪费，有内存泄漏的风险</strong>。</li></ul></li><li><strong>定期删除</strong> - 每隔一段时间，程序就对数据库进行一次检查，删除里面的过期 key 。至于要删除多少过期 key ，以及要检查多少个数据库，则由算法决定。定期删除是前两种策略的一种折中方案。定期删除策略的难点是删除操作执行的时长和频率。 <ul><li>执行太频或执行时间过长，就会出现和定时删除相同的问题；</li><li>执行太少或执行时间过短，就会出现和惰性删除相同的问题；</li></ul></li></ul><h3 id="redis-的过期删除策略" tabindex="-1"><a class="header-anchor" href="#redis-的过期删除策略" aria-hidden="true">#</a> Redis 的过期删除策略</h3><p>Redis 同时采用了惰性删除和定期删除策略，以此在合理使用 CPU 和内存之间取得平衡。</p><p><strong>Redis 定期删除策略的实现</strong> - 由 <code>redis.c/activeExpireCycle</code> 函数实现，每当 Redis 周期性执行 <code>redis.c/serverCron</code> 函数时，<code>activeExpireCycle</code> 函数就会被调用。<code>activeExpireCycle</code> 函数会在规定时间内，遍历各个数据库，从 <code>expires</code> 字典中随机检查一部分键的过期时间，并删除过期的键。</p><p><strong>Redis 惰性删除策略的实现</strong> - 由 <code>db.c/expireIfNeeded</code> 函数实现，所有读写命令在执行之前都会调用 <code>expireIfNeeded</code> 函数对输入键进行检查：如果输入键已过期，将输入键从数据库中删除；否则，什么也不做。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202309171604805.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="aof、rdb-和复制对过期键的处理" tabindex="-1"><a class="header-anchor" href="#aof、rdb-和复制对过期键的处理" aria-hidden="true">#</a> AOF、RDB 和复制对过期键的处理</h3><ul><li>生成 RDB 文件 - <strong>执行 <code>SAVE</code> 命令或者 <code>BGSAVE</code> 命令，所产生的新 RDB 文件『不会包含已经过期的键』</strong>。</li><li>载入 RDB 文件 - <strong>主服务器『不会载入已过期的键』</strong>；<strong>从服务器会载入『会载入已过期的键』</strong>。</li><li>生成 AOF 文件 - 当一个过期键未被删除时，不会影响 AOF 文件；当一个过期键被删除之后， 服务器会追加一条 <code>DEL</code> 命令到现有 AOF 文件的末尾， 显式地删除过期键。</li><li>重写 AOF 文件 - <strong>执行 <code>BGREWRITEAOF</code> 命令所产生的重写 AOF 文件『不会包含已经过期的键』</strong>。</li><li>复制 - 当主服务器删除一个过期键之后， 它会向所有从服务器发送一条 <code>DEL</code> 命令， 显式地删除过期键。从服务器即使发现过期键， 也不会自作主张地删除它， 而是等待主节点发来 DEL 命令， 这种统一、中心化的过期键删除策略可以保证主从服务器数据的一致性。</li><li>当 Redis 命令对数据库进行修改之后， 服务器会根据配置， 向客户端发送数据库通知。</li></ul><h2 id="redis-内存淘汰" tabindex="-1"><a class="header-anchor" href="#redis-内存淘汰" aria-hidden="true">#</a> Redis 内存淘汰</h2><h3 id="redis-内存淘汰要点" tabindex="-1"><a class="header-anchor" href="#redis-内存淘汰要点" aria-hidden="true">#</a> Redis 内存淘汰要点</h3><ul><li><strong>失效时间</strong> - 作为一种定期清理无效数据的重要机制，在 Redis 提供的诸多命令中，<code>EXPIRE</code>、<code>EXPIREAT</code>、<code>PEXPIRE</code>、<code>PEXPIREAT</code> 以及 <code>SETEX</code> 和 <code>PSETEX</code> 均可以用来设置一条键值对的失效时间。而一条键值对一旦被关联了失效时间就会在到期后自动删除（或者说变得无法访问更为准确）。</li><li><strong>最大缓存</strong> - Redis 允许通过 <code>maxmemory</code> 参数来设置内存最大值。当内存达设定的阀值，就会触发<strong>内存淘汰</strong>。</li><li><strong>内存淘汰</strong> - 内存淘汰是为了更好的利用内存——清理部分缓存，以此换取内存的利用率，即尽量保证 Redis 缓存中存储的是热点数据。</li><li><strong>非精准的 LRU</strong> - 实际上 Redis 实现的 LRU 并不是可靠的 LRU，也就是名义上我们使用 LRU 算法淘汰键，但是实际上被淘汰的键并不一定是真正的最久没用的。</li></ul><h3 id="redis-内存淘汰策略" tabindex="-1"><a class="header-anchor" href="#redis-内存淘汰策略" aria-hidden="true">#</a> Redis 内存淘汰策略</h3><p>内存淘汰只是 Redis 提供的一个功能，为了更好地实现这个功能，必须为不同的应用场景提供不同的策略，内存淘汰策略讲的是为实现内存淘汰我们具体怎么做，要解决的问题包括淘汰键空间如何选择？在键空间中淘汰键如何选择？</p><p>Redis 提供了下面几种内存淘汰策略供用户选：</p><ul><li><strong>不淘汰</strong><ul><li><strong><code>noeviction</code></strong> - 当内存使用达到阈值的时候，所有引起申请内存的命令会报错。这是 Redis 默认的策略。</li></ul></li><li><strong>在过期键中进行淘汰</strong><ul><li><strong><code>volatile-random</code></strong> - 在设置了过期时间的键空间中，随机移除某个 key。</li><li><strong><code>volatile-ttl</code></strong> - 在设置了过期时间的键空间中，具有更早过期时间的 key 优先移除。</li><li><strong><code>volatile-lru</code></strong> - 在设置了过期时间的键空间中，优先移除最近未使用的 key。</li><li><strong><code>volatile-lfu</code></strong> （Redis 4.0 新增）- 淘汰所有设置了过期时间的键值中，最少使用的键值。</li></ul></li><li><strong>在所有键中进行淘汰</strong><ul><li><strong><code>allkeys-lru</code></strong> - 在主键空间中，优先移除最近未使用的 key。</li><li><strong><code>allkeys-random</code></strong> - 在主键空间中，随机移除某个 key。</li><li><strong><code>allkeys-lfu</code></strong> (Redis 4.0 新增) - 淘汰整个键值中最少使用的键值。</li></ul></li></ul><h3 id="如何选择淘汰策略" tabindex="-1"><a class="header-anchor" href="#如何选择淘汰策略" aria-hidden="true">#</a> 如何选择淘汰策略</h3><ul><li>如果数据呈现幂等分布，也就是一部分数据访问频率高，一部分数据访问频率低，则使用 <code>allkeys-lru</code> 或 <code>allkeys-lfu</code>。</li><li>如果数据呈现平均分布，也就是所有的数据访问频率都相同，则使用 <code>allkeys-random</code>。</li><li>若 Redis 既用于缓存，也用于持久化存储时，适用 <code>volatile-lru</code> 、<code>volatile-lfu</code>、<code>volatile-random</code>。但是，这种情况下，也可以部署两个 Redis 集群来达到同样目的。</li><li>为 key 设置过期时间实际上会消耗更多的内存。因此，如果条件允许，建议使用 <code>allkeys-lru</code> 或 <code>allkeys-lfu</code>，从而更高效的使用内存。</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,33),C={href:"https://item.jd.com/11486101.html",target:"_blank",rel:"noopener noreferrer"};function O(F,N){const n=l("ExternalLinkIcon");return o(),t("div",null,[c,e("table",null,[p,e("tbody",null,[e("tr",null,[e("td",null,[e("a",u,[h,s(n)])]),k]),e("tr",null,[e("td",null,[e("a",m,[g,s(n)])]),v]),e("tr",null,[e("td",null,[e("a",b,[_,s(n)])]),y]),e("tr",null,[e("td",null,[e("a",R,[f,s(n)])]),E]),e("tr",null,[e("td",null,[e("a",x,[P,s(n)])]),I]),e("tr",null,[e("td",null,[e("a",T,[X,s(n)])]),A]),e("tr",null,[e("td",null,[e("a",L,[U,s(n)])]),D])])]),B,e("ul",null,[e("li",null,[e("a",C,[d("《Redis 设计与实现》"),s(n)])])])])}const w=i(r,[["render",O],["__file","11.Redis过期删除和内存淘汰.html.vue"]]);export{w as default};
