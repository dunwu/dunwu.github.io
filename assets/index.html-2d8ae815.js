import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as a,c,a as e,b as o,d as t,w as i,e as s}from"./app-afc5da4f.js";const h={},u=e("h1",{id:"redis-教程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#redis-教程","aria-hidden":"true"},"#"),o(" Redis 教程")],-1),_=e("p",null,"Redis 最典型的应用场景是作为分布式缓存。",-1),E=e("p",null,"学习 Redis，有必要深入理解缓存的原理，以及 Redis 作为一种缓存方案，在系统应用中的定位。",-1),p={href:"https://dunwu.github.io/design/distributed/%E5%88%86%E5%B8%83%E5%BC%8F%E7%BC%93%E5%AD%98.html",target:"_blank",rel:"noopener noreferrer"},g=e("h2",{id:"📖-内容",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#📖-内容","aria-hidden":"true"},"#"),o(" 📖 内容")],-1),f={id:"redis-面试-💯",tabindex:"-1"},B=e("a",{class:"header-anchor",href:"#redis-面试-💯","aria-hidden":"true"},"#",-1),b={id:"redis-数据类型",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#redis-数据类型","aria-hidden":"true"},"#",-1),R=s('<blockquote><p>关键词：<code>String</code>、<code>Hash</code>、<code>List</code>、<code>Set</code>、<code>Zset</code>、<code>BitMap</code>、<code>HyperLogLog</code>、<code>Geo</code>、<code>Stream</code></p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20230901071808.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',2),A={id:"redis-数据结构",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#redis-数据结构","aria-hidden":"true"},"#",-1),D=s('<blockquote><p>关键词：<code>对象</code>、<code>SDS</code>、<code>链表</code>、<code>字典</code>、<code>跳表</code>、<code>整数集合</code>、<code>压缩列表</code></p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20230901071535.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',2),x={id:"redis-过期删除和内存淘汰",tabindex:"-1"},w=e("a",{class:"header-anchor",href:"#redis-过期删除和内存淘汰","aria-hidden":"true"},"#",-1),V=e("blockquote",null,[e("p",null,[o("关键词："),e("code",null,"定时删除"),o("、"),e("code",null,"惰性删除"),o("、"),e("code",null,"定期删除"),o("、"),e("code",null,"LRU"),o("、"),e("code",null,"LFU")])],-1),q={id:"redis-持久化",tabindex:"-1"},C=e("a",{class:"header-anchor",href:"#redis-持久化","aria-hidden":"true"},"#",-1),v=s('<blockquote><p>Redis 是内存型数据库，为了保证数据在宕机后不会丢失，需要将内存中的数据持久化到硬盘上。</p><p>Redis 支持两种持久化方式：RDB 和 AOF。</p><p>关键词：<code>RDB</code>、<code>AOF</code>、<code>SAVE</code>、<code>BGSAVE</code>、<code>appendfsync</code></p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200224214047.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',2),y={id:"redis-独立功能",tabindex:"-1"},S=e("a",{class:"header-anchor",href:"#redis-独立功能","aria-hidden":"true"},"#",-1),L=e("blockquote",null,[e("p",null,[o("关键词："),e("code",null,"发布与订阅"),o("、"),e("code",null,"事务"),o("、"),e("code",null,"Lua"),o("、"),e("code",null,"管道")])],-1),F={id:"redis-复制",tabindex:"-1"},K=e("a",{class:"header-anchor",href:"#redis-复制","aria-hidden":"true"},"#",-1),z=s('<blockquote><p>关键词：<code>SLAVEOF</code>、<code>SYNC</code>、<code>PSYNC</code>、<code>命令传播</code>、<code>心跳</code></p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200712182603.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',2),j={id:"redis-哨兵",tabindex:"-1"},N=e("a",{class:"header-anchor",href:"#redis-哨兵","aria-hidden":"true"},"#",-1),I=s('<blockquote><p>Redis 哨兵（Sentinel）是 Redis 的高可用性（High Availability）解决方案，它是基于 Raft 协议实现的。哨兵可以监听主服务器，并在主服务器进入下线状态时，自动从从服务器中选举出新的主服务器。</p><p>关键词：<code>高可用</code>、<code>监控</code>、<code>选主</code>、<code>故障转移</code>、<code>Raft</code></p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200713072747.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',2),G={id:"redis-集群",tabindex:"-1"},O=e("a",{class:"header-anchor",href:"#redis-集群","aria-hidden":"true"},"#",-1),H=e("blockquote",null,[e("p",null,[o("关键词："),e("code",null,"分区"),o("、"),e("code",null,"重分区"),o("、"),e("code",null,"寻址"),o("、"),e("code",null,"故障转移")])],-1),M=e("figure",null,[e("img",{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200713100613.png",alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),P={id:"redis-实战",tabindex:"-1"},T=e("a",{class:"header-anchor",href:"#redis-实战","aria-hidden":"true"},"#",-1),U=e("blockquote",null,[e("p",null,[o("关键词："),e("code",null,"缓存"),o("、"),e("code",null,"分布式锁"),o("、"),e("code",null,"布隆过滤器")])],-1),J={id:"redis-运维-🔨",tabindex:"-1"},W=e("a",{class:"header-anchor",href:"#redis-运维-🔨","aria-hidden":"true"},"#",-1),Y=s('<blockquote><p>关键词：<code>安装</code>、<code>配置</code>、<code>命令</code>、<code>集群</code>、<code>客户端</code></p></blockquote><h2 id="📚-资料" tabindex="-1"><a class="header-anchor" href="#📚-资料" aria-hidden="true">#</a> 📚 资料</h2>',2),Z=e("strong",null,"官网",-1),Q={href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"},X={href:"https://github.com/antirez/redis",target:"_blank",rel:"noopener noreferrer"},$={href:"http://redis.cn/",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://try.redis.io/",target:"_blank",rel:"noopener noreferrer"},oe=e("strong",null,"书籍",-1),te={href:"https://item.jd.com/11791607.html",target:"_blank",rel:"noopener noreferrer"},de={href:"https://item.jd.com/11486101.html",target:"_blank",rel:"noopener noreferrer"},ne=e("strong",null,"教程",-1),ie={href:"http://redisdoc.com/",target:"_blank",rel:"noopener noreferrer"},se=e("strong",null,"文章",-1),re={href:"https://www.slideshare.net/dvirsky/introduction-to-redis",target:"_blank",rel:"noopener noreferrer"},le={href:"https://juejin.im/post/5db66ed9e51d452a2f15d833",target:"_blank",rel:"noopener noreferrer"},ae=e("strong",null,"源码",-1),ce={href:"https://github.com/josiahcarlson/redis-in-action",target:"_blank",rel:"noopener noreferrer"},he=e("strong",null,"资源汇总",-1),ue={href:"https://github.com/JamzyWang/awesome-redis",target:"_blank",rel:"noopener noreferrer"},_e=e("strong",null,"Redis Client",-1),Ee={href:"https://docs.spring.io/spring-data/redis/docs/1.8.13.RELEASE/reference/html/",target:"_blank",rel:"noopener noreferrer"},pe={href:"https://github.com/redisson/redisson/wiki/%E7%9B%AE%E5%BD%95",target:"_blank",rel:"noopener noreferrer"},ge={href:"https://github.com/redisson/redisson/wiki/Table-of-Content",target:"_blank",rel:"noopener noreferrer"},fe={href:"https://www.jianshu.com/p/82f0d5abb002",target:"_blank",rel:"noopener noreferrer"},Be={href:"https://blog.csdn.net/everlasting_188/article/details/51073505",target:"_blank",rel:"noopener noreferrer"},be={href:"https://github.com/uglide/RedisDesktopManager",target:"_blank",rel:"noopener noreferrer"},me=e("h2",{id:"🚪-传送",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#🚪-传送","aria-hidden":"true"},"#"),o(" 🚪 传送")],-1),Re={href:"https://dunwu.github.io/",target:"_blank",rel:"noopener noreferrer"};function Ae(ke,De){const d=r("ExternalLinkIcon"),n=r("RouterLink");return a(),c("div",null,[u,e("blockquote",null,[_,E,e("p",null,[o("参考："),e("a",p,[o("缓存基本原理"),t(d)]),o("，有助于理解缓存的特性、原理，使用缓存常见的问题及解决方案。")])]),g,e("h3",f,[B,o(),t(n,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/01.Redis%E9%9D%A2%E8%AF%95.html"},{default:i(()=>[o("Redis 面试")]),_:1}),o(" 💯")]),e("h3",b,[m,o(),t(n,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/02.Redis%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html"},{default:i(()=>[o("Redis 数据类型")]),_:1})]),R,e("h3",A,[k,o(),t(n,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/03.Redis%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html"},{default:i(()=>[o("Redis 数据结构")]),_:1})]),D,e("h3",x,[w,o(),t(n,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/04.Redis%E8%BF%87%E6%9C%9F%E5%88%A0%E9%99%A4%E5%92%8C%E5%86%85%E5%AD%98%E6%B7%98%E6%B1%B0.html"},{default:i(()=>[o("Redis 过期删除和内存淘汰")]),_:1})]),V,e("h3",q,[C,o(),t(n,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/05.Redis%E6%8C%81%E4%B9%85%E5%8C%96.html"},{default:i(()=>[o("Redis 持久化")]),_:1})]),v,e("h3",y,[S,o(),t(n,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/06.Redis%E7%8B%AC%E7%AB%8B%E5%8A%9F%E8%83%BD.html"},{default:i(()=>[o("Redis 独立功能")]),_:1})]),L,e("h3",F,[K,o(),t(n,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/11.Redis%E5%A4%8D%E5%88%B6.html"},{default:i(()=>[o("Redis 复制")]),_:1})]),z,e("h3",j,[N,o(),t(n,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/12.Redis%E5%93%A8%E5%85%B5.html"},{default:i(()=>[o("Redis 哨兵")]),_:1})]),I,e("h3",G,[O,o(),t(n,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/13.Redis%E9%9B%86%E7%BE%A4.html"},{default:i(()=>[o("Redis 集群")]),_:1})]),H,M,e("h3",P,[T,o(),t(n,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/21.Redis%E5%AE%9E%E6%88%98.html"},{default:i(()=>[o("Redis 实战")]),_:1})]),U,e("h3",J,[W,o(),t(n,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/20.Redis%E8%BF%90%E7%BB%B4.html"},{default:i(()=>[o("Redis 运维")]),_:1}),o(" 🔨")]),Y,e("ul",null,[e("li",null,[Z,e("ul",null,[e("li",null,[e("a",Q,[o("Redis 官网"),t(d)])]),e("li",null,[e("a",X,[o("Redis Github"),t(d)])]),e("li",null,[e("a",$,[o("Redis 官方文档中文版"),t(d)])]),e("li",null,[e("a",ee,[o("Redis 在线环境"),t(d)])])])]),e("li",null,[oe,e("ul",null,[e("li",null,[e("a",te,[o("《Redis 实战》"),t(d)])]),e("li",null,[e("a",de,[o("《Redis 设计与实现》"),t(d)])])])]),e("li",null,[ne,e("ul",null,[e("li",null,[e("a",ie,[o("Redis 命令参考"),t(d)])])])]),e("li",null,[se,e("ul",null,[e("li",null,[e("a",re,[o("Introduction to Redis"),t(d)])]),e("li",null,[e("a",le,[o("《我们一起进大厂》系列- Redis 基础"),t(d)])])])]),e("li",null,[ae,e("ul",null,[e("li",null,[e("a",ce,[o("《Redis 实战》配套 Python 源码"),t(d)])])])]),e("li",null,[he,e("ul",null,[e("li",null,[e("a",ue,[o("awesome-redis"),t(d)])])])]),e("li",null,[_e,e("ul",null,[e("li",null,[e("a",Ee,[o("spring-data-redis 官方文档"),t(d)])]),e("li",null,[e("a",pe,[o("Redisson 官方文档(中文,略有滞后)"),t(d)])]),e("li",null,[e("a",ge,[o("Redisson 官方文档(英文)"),t(d)])]),e("li",null,[e("a",fe,[o("CRUG | Redisson PRO vs. Jedis: Which Is Faster? 翻译"),t(d)])]),e("li",null,[e("a",Be,[o("redis 分布锁 Redisson 性能测试"),t(d)])]),e("li",null,[e("a",be,[o("RedisDesktopManager"),t(d)])])])])]),me,e("p",null,[o("◾ 💧 "),e("a",Re,[o("钝悟的 IT 知识图谱"),t(d)]),o(" ◾")])])}const Ve=l(h,[["render",Ae],["__file","index.html.vue"]]);export{Ve as default};
