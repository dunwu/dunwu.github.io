import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as a,c,a as e,b as o,d as t,w as n,e as d}from"./app-e12ad880.js";const h={},u=d('<h1 id="redis-教程" tabindex="-1"><a class="header-anchor" href="#redis-教程" aria-hidden="true">#</a> Redis 教程</h1><p><strong>Redis 是一种内存数据库</strong>，对数据的读写操作都是在内存中完成。因此其<strong>读写速度非常快</strong>，常用于<strong>缓存，消息队列、分布式锁等场景</strong>。</p><ul><li><strong>高性能</strong> – Redis 的数据读写都是在内存中完成，因此性能极高。</li><li><strong>高并发</strong> - Redis 的读速度约为 10w+ QPS，写的速度约为 8w+ TPS，将近是 Mysql 的 10 倍。</li></ul><p><strong>Redis 支持多种数据类型</strong>，如：String(字符串)、Hash(哈希)、 List (列表)、Set(集合)、Zset(有序集合)、Bitmaps（位图）、HyperLogLog（基数统计）、GEO（地理空间）、Stream（流）。Redis 对数据类型的操作都是<strong>原子性</strong>的，因为执行命令由单线程负责的，不存在并发竞争的问题。</p><p><strong>Redis 的读写采用单线程模型</strong>，因此，其操作天然就具有<strong>原子性</strong>。</p><p>Redis 支持两种持久化策略：RDB 和 AOF。</p><p>Redis 支持过期删除和内存淘汰，因此常被用于作为缓存。</p><p>Redis 有多种高可用方案：<strong>主从复制</strong>模式、<strong>哨兵</strong>模式、<strong>集群</strong>模式。</p><p>Redis 支持很多丰富的特性，如：<strong>事务</strong> 、<strong>Lua 脚本</strong>、<strong>发布订阅</strong>等等。</p><figure><img src="https://architecturenotes.co/content/images/size/w2400/2022/08/Redis-v2-01-1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="📖-内容" tabindex="-1"><a class="header-anchor" href="#📖-内容" aria-hidden="true">#</a> 📖 内容</h2>',11),_={id:"redis-面试",tabindex:"-1"},E=e("a",{class:"header-anchor",href:"#redis-面试","aria-hidden":"true"},"#",-1),g={id:"redis-数据类型",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#redis-数据类型","aria-hidden":"true"},"#",-1),f=d('<blockquote><p>关键词：<code>String</code>、<code>Hash</code>、<code>List</code>、<code>Set</code>、<code>Zset</code>、<code>BitMap</code>、<code>HyperLogLog</code>、<code>Geo</code>、<code>Stream</code></p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20230901071808.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',2),B={id:"redis-数据结构",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#redis-数据结构","aria-hidden":"true"},"#",-1),R=d('<blockquote><p>关键词：<code>对象</code>、<code>SDS</code>、<code>链表</code>、<code>字典</code>、<code>跳表</code>、<code>整数集合</code>、<code>压缩列表</code></p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20230901071535.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',2),A={id:"redis-过期删除和内存淘汰",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#redis-过期删除和内存淘汰","aria-hidden":"true"},"#",-1),k=d('<blockquote><p>关键词：<code>定时删除</code>、<code>惰性删除</code>、<code>定期删除</code>、<code>LRU</code>、<code>LFU</code></p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20230914071206.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',2),D={id:"redis-持久化",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#redis-持久化","aria-hidden":"true"},"#",-1),w=d('<blockquote><p>Redis 是内存型数据库，为了保证数据在宕机后不会丢失，需要将内存中的数据持久化到硬盘上。</p><p>Redis 支持两种持久化方式：RDB 和 AOF。</p><p>关键词：<code>RDB</code>、<code>AOF</code>、<code>SAVE</code>、<code>BGSAVE</code>、<code>appendfsync</code></p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200224214047.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',2),q={id:"redis-发布订阅",tabindex:"-1"},V=e("a",{class:"header-anchor",href:"#redis-发布订阅","aria-hidden":"true"},"#",-1),S=e("blockquote",null,[e("p",null,[o("关键词："),e("code",null,"订阅"),o("、"),e("code",null,"频道"),o("、"),e("code",null,"模式")])],-1),L={id:"redis-事务",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#redis-事务","aria-hidden":"true"},"#",-1),y=e("blockquote",null,[e("p",null,[o("关键词："),e("code",null,"事务"),o("、"),e("code",null,"ACID")])],-1),C={id:"redis-管道",tabindex:"-1"},K=e("a",{class:"header-anchor",href:"#redis-管道","aria-hidden":"true"},"#",-1),z=e("blockquote",null,[e("p",null,[o("关键词："),e("code",null,"Pipeline")])],-1),F={id:"redis-脚本",tabindex:"-1"},j=e("a",{class:"header-anchor",href:"#redis-脚本","aria-hidden":"true"},"#",-1),I=e("blockquote",null,[e("p",null,[o("关键词："),e("code",null,"Lua")])],-1),N={id:"redis-复制",tabindex:"-1"},O=e("a",{class:"header-anchor",href:"#redis-复制","aria-hidden":"true"},"#",-1),P=d('<blockquote><p>关键词：<code>SLAVEOF</code>、<code>SYNC</code>、<code>PSYNC</code>、<code>命令传播</code>、<code>心跳</code></p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20230914071554.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',2),G={id:"redis-哨兵",tabindex:"-1"},H=e("a",{class:"header-anchor",href:"#redis-哨兵","aria-hidden":"true"},"#",-1),J=d('<blockquote><p>Redis 哨兵（Sentinel）是 Redis 的高可用性（High Availability）解决方案，它是基于 Raft 协议实现的。哨兵可以监听主服务器，并在主服务器进入下线状态时，自动从从服务器中选举出新的主服务器。</p><p>关键词：<code>高可用</code>、<code>监控</code>、<code>选主</code>、<code>故障转移</code>、<code>Raft</code></p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20230914071855.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',2),M={id:"redis-集群",tabindex:"-1"},T=e("a",{class:"header-anchor",href:"#redis-集群","aria-hidden":"true"},"#",-1),U=e("blockquote",null,[e("p",null,[o("关键词："),e("code",null,"分区"),o("、"),e("code",null,"重分区"),o("、"),e("code",null,"寻址"),o("、"),e("code",null,"故障转移")])],-1),Q=e("figure",null,[e("img",{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20230914072642.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),W={id:"redis-实战",tabindex:"-1"},Y=e("a",{class:"header-anchor",href:"#redis-实战","aria-hidden":"true"},"#",-1),Z=e("blockquote",null,[e("p",null,[o("关键词："),e("code",null,"缓存"),o("、"),e("code",null,"分布式锁"),o("、"),e("code",null,"布隆过滤器")])],-1),X={id:"redis-运维-🔨",tabindex:"-1"},$=e("a",{class:"header-anchor",href:"#redis-运维-🔨","aria-hidden":"true"},"#",-1),ee=d('<blockquote><p>关键词：<code>安装</code>、<code>配置</code>、<code>命令</code>、<code>集群</code>、<code>客户端</code></p></blockquote><h2 id="📚-资料" tabindex="-1"><a class="header-anchor" href="#📚-资料" aria-hidden="true">#</a> 📚 资料</h2>',2),oe=e("strong",null,"官网",-1),te={href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://github.com/antirez/redis",target:"_blank",rel:"noopener noreferrer"},se={href:"http://redis.cn/",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://try.redis.io/",target:"_blank",rel:"noopener noreferrer"},de=e("strong",null,"书籍",-1),re={href:"https://item.jd.com/11791607.html",target:"_blank",rel:"noopener noreferrer"},le={href:"https://item.jd.com/11486101.html",target:"_blank",rel:"noopener noreferrer"},ae=e("strong",null,"教程",-1),ce={href:"http://redisdoc.com/",target:"_blank",rel:"noopener noreferrer"},he=e("strong",null,"文章",-1),ue={href:"https://www.slideshare.net/dvirsky/introduction-to-redis",target:"_blank",rel:"noopener noreferrer"},_e={href:"https://juejin.im/post/5db66ed9e51d452a2f15d833",target:"_blank",rel:"noopener noreferrer"},Ee=e("strong",null,"源码",-1),ge={href:"https://github.com/josiahcarlson/redis-in-action",target:"_blank",rel:"noopener noreferrer"},pe=e("strong",null,"资源汇总",-1),fe={href:"https://github.com/JamzyWang/awesome-redis",target:"_blank",rel:"noopener noreferrer"},Be=e("strong",null,"Redis Client",-1),be={href:"https://github.com/xetorthio/jedis",target:"_blank",rel:"noopener noreferrer"},Re={href:"https://github.com/redisson/redisson",target:"_blank",rel:"noopener noreferrer"},Ae={href:"https://github.com/lettuce-io/lettuce-core",target:"_blank",rel:"noopener noreferrer"},me={href:"https://docs.spring.io/spring-data/redis/docs/1.8.13.RELEASE/reference/html/",target:"_blank",rel:"noopener noreferrer"},ke={href:"https://github.com/redisson/redisson/wiki/%E7%9B%AE%E5%BD%95",target:"_blank",rel:"noopener noreferrer"},De={href:"https://github.com/redisson/redisson/wiki/Table-of-Content",target:"_blank",rel:"noopener noreferrer"},xe={href:"https://www.jianshu.com/p/82f0d5abb002",target:"_blank",rel:"noopener noreferrer"},we={href:"https://blog.csdn.net/everlasting_188/article/details/51073505",target:"_blank",rel:"noopener noreferrer"},qe={href:"https://github.com/uglide/RedisDesktopManager",target:"_blank",rel:"noopener noreferrer"},Ve=e("h2",{id:"🚪-传送",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#🚪-传送","aria-hidden":"true"},"#"),o(" 🚪 传送")],-1),Se={href:"https://dunwu.github.io/",target:"_blank",rel:"noopener noreferrer"};function Le(ve,ye){const s=r("RouterLink"),i=r("ExternalLinkIcon");return a(),c("div",null,[u,e("h3",_,[E,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/01.Redis%E9%9D%A2%E8%AF%95.html"},{default:n(()=>[o("Redis 面试")]),_:1})]),e("h3",g,[p,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/02.Redis%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html"},{default:n(()=>[o("Redis 数据类型")]),_:1})]),f,e("h3",B,[b,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/03.Redis%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html"},{default:n(()=>[o("Redis 数据结构")]),_:1})]),R,e("h3",A,[m,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/04.Redis%E8%BF%87%E6%9C%9F%E5%88%A0%E9%99%A4%E5%92%8C%E5%86%85%E5%AD%98%E6%B7%98%E6%B1%B0.html"},{default:n(()=>[o("Redis 过期删除和内存淘汰")]),_:1})]),k,e("h3",D,[x,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/05.Redis%E6%8C%81%E4%B9%85%E5%8C%96.html"},{default:n(()=>[o("Redis 持久化")]),_:1})]),w,e("h3",q,[V,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/06.Redis%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85.html"},{default:n(()=>[o("Redis 发布订阅")]),_:1})]),S,e("h3",L,[v,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/07.Redis%E4%BA%8B%E5%8A%A1.html"},{default:n(()=>[o("Redis 事务")]),_:1})]),y,e("h3",C,[K,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/08.Redis%E7%AE%A1%E9%81%93.html"},{default:n(()=>[o("Redis 管道")]),_:1})]),z,e("h3",F,[j,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/09.Redis%E8%84%9A%E6%9C%AC.html"},{default:n(()=>[o("Redis 脚本")]),_:1})]),I,e("h3",N,[O,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/11.Redis%E5%A4%8D%E5%88%B6.html"},{default:n(()=>[o("Redis 复制")]),_:1})]),P,e("h3",G,[H,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/12.Redis%E5%93%A8%E5%85%B5.html"},{default:n(()=>[o("Redis 哨兵")]),_:1})]),J,e("h3",M,[T,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/13.Redis%E9%9B%86%E7%BE%A4.html"},{default:n(()=>[o("Redis 集群")]),_:1})]),U,Q,e("h3",W,[Y,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/21.Redis%E5%AE%9E%E6%88%98.html"},{default:n(()=>[o("Redis 实战")]),_:1})]),Z,e("h3",X,[$,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/20.Redis%E8%BF%90%E7%BB%B4.html"},{default:n(()=>[o("Redis 运维")]),_:1}),o(" 🔨")]),ee,e("ul",null,[e("li",null,[oe,e("ul",null,[e("li",null,[e("a",te,[o("Redis 官网"),t(i)])]),e("li",null,[e("a",ie,[o("Redis Github"),t(i)])]),e("li",null,[e("a",se,[o("Redis 官方文档中文版"),t(i)])]),e("li",null,[e("a",ne,[o("Redis 在线环境"),t(i)])])])]),e("li",null,[de,e("ul",null,[e("li",null,[e("a",re,[o("《Redis 实战》"),t(i)])]),e("li",null,[e("a",le,[o("《Redis 设计与实现》"),t(i)])])])]),e("li",null,[ae,e("ul",null,[e("li",null,[e("a",ce,[o("Redis 命令参考"),t(i)])])])]),e("li",null,[he,e("ul",null,[e("li",null,[e("a",ue,[o("Introduction to Redis"),t(i)])]),e("li",null,[e("a",_e,[o("《我们一起进大厂》系列- Redis 基础"),t(i)])])])]),e("li",null,[Ee,e("ul",null,[e("li",null,[e("a",ge,[o("《Redis 实战》配套 Python 源码"),t(i)])])])]),e("li",null,[pe,e("ul",null,[e("li",null,[e("a",fe,[o("awesome-redis"),t(i)])])])]),e("li",null,[Be,e("ul",null,[e("li",null,[e("a",be,[o("Jedis"),t(i)]),o(" - 最流行的 Redis Java 客户端")]),e("li",null,[e("a",Re,[o("Redisson"),t(i)]),o(" - 额外提供了很多的分布式服务特性，如：分布式锁、分布式 Java 常用对象（BitSet、BlockingQueue、CountDownLatch 等）")]),e("li",null,[e("a",Ae,[o("Lettuce"),t(i)]),o(" - Spring Boot 2.0 默认 Redis 客户端")]),e("li",null,[e("a",me,[o("spring-data-redis 官方文档"),t(i)])]),e("li",null,[e("a",ke,[o("Redisson 官方文档(中文,略有滞后)"),t(i)])]),e("li",null,[e("a",De,[o("Redisson 官方文档(英文)"),t(i)])]),e("li",null,[e("a",xe,[o("CRUG | Redisson PRO vs. Jedis: Which Is Faster? 翻译"),t(i)])]),e("li",null,[e("a",we,[o("redis 分布锁 Redisson 性能测试"),t(i)])]),e("li",null,[e("a",qe,[o("RedisDesktopManager"),t(i)])])])])]),Ve,e("p",null,[o("◾ 💧 "),e("a",Se,[o("钝悟的 IT 知识图谱"),t(i)]),o(" ◾")])])}const ze=l(h,[["render",Le],["__file","index.html.vue"]]);export{ze as default};
