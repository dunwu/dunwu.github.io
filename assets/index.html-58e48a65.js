import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as a,c,a as e,b as o,d as t,w as d,e as r}from"./app-4c6ca41d.js";const h={},u=r('<h1 id="redis-教程" tabindex="-1"><a class="header-anchor" href="#redis-教程" aria-hidden="true">#</a> Redis 教程</h1><p><strong>Redis 是一种内存数据库</strong>，对数据的读写操作都是在内存中完成。因此其<strong>读写速度非常快</strong>，常用于<strong>缓存，消息队列、分布式锁等场景</strong>。</p><ul><li><strong>高性能</strong> – Redis 的数据读写都是在内存中完成，因此性能极高。</li><li><strong>高并发</strong> - Redis 的读速度约为 10w+ QPS，写的速度约为 8w+ TPS，将近是 Mysql 的 10 倍。</li></ul><p><strong>Redis 支持多种数据类型</strong>，如：String(字符串)、Hash(哈希)、 List (列表)、Set(集合)、Zset(有序集合)、Bitmaps（位图）、HyperLogLog（基数统计）、GEO（地理空间）、Stream（流）。Redis 对数据类型的操作都是<strong>原子性</strong>的，因为执行命令由单线程负责的，不存在并发竞争的问题。</p><p><strong>Redis 的读写采用单线程模型</strong>，因此，其操作天然就具有<strong>原子性</strong>。</p><p>Redis 支持两种持久化策略：RDB 和 AOF。</p><p>Redis 支持过期删除和内存淘汰，因此常被用于作为缓存。</p><p>Redis 有多种高可用方案：<strong>主从复制</strong>模式、<strong>哨兵</strong>模式、<strong>集群</strong>模式。</p><p>Redis 支持很多丰富的特性，如：<strong>事务</strong> 、<strong>Lua 脚本</strong>、<strong>发布订阅</strong>等等。</p><figure><img src="https://architecturenotes.co/content/images/size/w2400/2022/08/Redis-v2-01-1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="📖-内容" tabindex="-1"><a class="header-anchor" href="#📖-内容" aria-hidden="true">#</a> 📖 内容</h2>',11),_={id:"redis-基本数据类型",tabindex:"-1"},E=e("a",{class:"header-anchor",href:"#redis-基本数据类型","aria-hidden":"true"},"#",-1),B=e("blockquote",null,[e("p",null,[o("关键词："),e("code",null,"String"),o("、"),e("code",null,"Hash"),o("、"),e("code",null,"List"),o("、"),e("code",null,"Set"),o("、"),e("code",null,"Zset")])],-1),p={id:"redis-高级数据类型",tabindex:"-1"},A=e("a",{class:"header-anchor",href:"#redis-高级数据类型","aria-hidden":"true"},"#",-1),f=e("blockquote",null,[e("p",null,[o("关键词："),e("code",null,"BitMap"),o("、"),e("code",null,"HyperLogLog"),o("、"),e("code",null,"Geo"),o("、"),e("code",null,"Stream")])],-1),g={id:"redis-数据结构",tabindex:"-1"},R=e("a",{class:"header-anchor",href:"#redis-数据结构","aria-hidden":"true"},"#",-1),b=r("<blockquote><p>关键词：<code>对象</code>、<code>SDS</code>、<code>链表</code>、<code>字典</code>、<code>跳表</code>、<code>整数集合</code>、<code>压缩列表</code></p></blockquote>",1),m={id:"redis-过期删除和内存淘汰",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#redis-过期删除和内存淘汰","aria-hidden":"true"},"#",-1),D=e("blockquote",null,[e("p",null,[o("关键词："),e("code",null,"定时删除"),o("、"),e("code",null,"惰性删除"),o("、"),e("code",null,"定期删除"),o("、"),e("code",null,"LRU"),o("、"),e("code",null,"LFU")])],-1),x={id:"redis-持久化",tabindex:"-1"},S=e("a",{class:"header-anchor",href:"#redis-持久化","aria-hidden":"true"},"#",-1),V=e("blockquote",null,[e("p",null,[o("关键词："),e("code",null,"RDB"),o("、"),e("code",null,"AOF"),o("、"),e("code",null,"SAVE"),o("、"),e("code",null,"BGSAVE"),o("、"),e("code",null,"appendfsync")])],-1),C={id:"redis-事件",tabindex:"-1"},L=e("a",{class:"header-anchor",href:"#redis-事件","aria-hidden":"true"},"#",-1),q=e("blockquote",null,[e("p",null,[o("关键词："),e("code",null,"文件事件"),o("、"),e("code",null,"时间事件")])],-1),w={id:"redis-复制",tabindex:"-1"},K=e("a",{class:"header-anchor",href:"#redis-复制","aria-hidden":"true"},"#",-1),F=e("blockquote",null,[e("p",null,[o("关键词："),e("code",null,"SLAVEOF"),o("、"),e("code",null,"SYNC"),o("、"),e("code",null,"PSYNC"),o("、"),e("code",null,"命令传播"),o("、"),e("code",null,"心跳")])],-1),I={id:"redis-哨兵",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#redis-哨兵","aria-hidden":"true"},"#",-1),y=e("blockquote",null,[e("p",null,[o("关键词："),e("code",null,"高可用"),o("、"),e("code",null,"监控"),o("、"),e("code",null,"选主"),o("、"),e("code",null,"故障转移"),o("、"),e("code",null,"Raft")])],-1),j={id:"redis-集群",tabindex:"-1"},P=e("a",{class:"header-anchor",href:"#redis-集群","aria-hidden":"true"},"#",-1),U=r("<blockquote><p>关键词：<code>高可用</code>、<code>监控</code>、<code>选主</code>、<code>故障转移</code>、<code>分区</code>、<code>Raft</code>、<code>Gossip</code></p></blockquote>",1),G={id:"redis-发布订阅",tabindex:"-1"},H=e("a",{class:"header-anchor",href:"#redis-发布订阅","aria-hidden":"true"},"#",-1),N=e("blockquote",null,[e("p",null,[o("关键词："),e("code",null,"订阅"),o("、"),e("code",null,"SUBSCRIBE"),o("、"),e("code",null,"PSUBSCRIBE"),o("、"),e("code",null,"PUBLISH"),o("、"),e("code",null,"观察者模式")])],-1),T={id:"redis-独立功能",tabindex:"-1"},J=e("a",{class:"header-anchor",href:"#redis-独立功能","aria-hidden":"true"},"#",-1),M=r("<blockquote><p>关键词：<code>事务</code>、<code>ACID</code>、<code>MULTI</code>、<code>EXEC</code>、<code>DISCARD</code>、<code>WATCH</code></p></blockquote>",1),O={id:"redis-管道",tabindex:"-1"},z=e("a",{class:"header-anchor",href:"#redis-管道","aria-hidden":"true"},"#",-1),W=e("blockquote",null,[e("p",null,[o("关键词："),e("code",null,"Pipeline")])],-1),Q={id:"redis-脚本",tabindex:"-1"},Y=e("a",{class:"header-anchor",href:"#redis-脚本","aria-hidden":"true"},"#",-1),Z=e("blockquote",null,[e("p",null,[o("关键词："),e("code",null,"Lua")])],-1),X={id:"redis-运维",tabindex:"-1"},$=e("a",{class:"header-anchor",href:"#redis-运维","aria-hidden":"true"},"#",-1),ee=e("blockquote",null,[e("p",null,[o("关键词："),e("code",null,"安装"),o("、"),e("code",null,"配置"),o("、"),e("code",null,"命令"),o("、"),e("code",null,"集群"),o("、"),e("code",null,"客户端")])],-1),oe={id:"redis-实战",tabindex:"-1"},te=e("a",{class:"header-anchor",href:"#redis-实战","aria-hidden":"true"},"#",-1),ne=e("blockquote",null,[e("p",null,[o("关键词："),e("code",null,"缓存"),o("、"),e("code",null,"分布式锁"),o("、"),e("code",null,"布隆过滤器")])],-1),se={id:"redis-面试",tabindex:"-1"},de=e("a",{class:"header-anchor",href:"#redis-面试","aria-hidden":"true"},"#",-1),re=e("h2",{id:"📚-资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#📚-资料","aria-hidden":"true"},"#"),o(" 📚 资料")],-1),le=e("strong",null,"官网",-1),ie={href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://github.com/antirez/redis",target:"_blank",rel:"noopener noreferrer"},ce={href:"http://redis.cn/",target:"_blank",rel:"noopener noreferrer"},he={href:"https://try.redis.io/",target:"_blank",rel:"noopener noreferrer"},ue=e("strong",null,"书籍",-1),_e={href:"https://item.jd.com/11791607.html",target:"_blank",rel:"noopener noreferrer"},Ee={href:"https://item.jd.com/11486101.html",target:"_blank",rel:"noopener noreferrer"},Be=e("strong",null,"教程",-1),pe={href:"http://redisdoc.com/",target:"_blank",rel:"noopener noreferrer"},Ae=e("strong",null,"文章",-1),fe={href:"https://www.slideshare.net/dvirsky/introduction-to-redis",target:"_blank",rel:"noopener noreferrer"},ge={href:"https://juejin.im/post/5db66ed9e51d452a2f15d833",target:"_blank",rel:"noopener noreferrer"},Re=e("strong",null,"源码",-1),be={href:"https://github.com/josiahcarlson/redis-in-action",target:"_blank",rel:"noopener noreferrer"},me=e("strong",null,"资源汇总",-1),ke={href:"https://github.com/JamzyWang/awesome-redis",target:"_blank",rel:"noopener noreferrer"},De=e("strong",null,"Redis Client",-1),xe={href:"https://github.com/xetorthio/jedis",target:"_blank",rel:"noopener noreferrer"},Se={href:"https://github.com/redisson/redisson",target:"_blank",rel:"noopener noreferrer"},Ve={href:"https://github.com/lettuce-io/lettuce-core",target:"_blank",rel:"noopener noreferrer"},Ce={href:"https://docs.spring.io/spring-data/redis/docs/1.8.13.RELEASE/reference/html/",target:"_blank",rel:"noopener noreferrer"},Le={href:"https://github.com/redisson/redisson/wiki/%E7%9B%AE%E5%BD%95",target:"_blank",rel:"noopener noreferrer"},qe={href:"https://github.com/redisson/redisson/wiki/Table-of-Content",target:"_blank",rel:"noopener noreferrer"},we={href:"https://www.jianshu.com/p/82f0d5abb002",target:"_blank",rel:"noopener noreferrer"},Ke={href:"https://blog.csdn.net/everlasting_188/article/details/51073505",target:"_blank",rel:"noopener noreferrer"},Fe={href:"https://github.com/uglide/RedisDesktopManager",target:"_blank",rel:"noopener noreferrer"},Ie=e("h2",{id:"🚪-传送",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#🚪-传送","aria-hidden":"true"},"#"),o(" 🚪 传送")],-1),ve={href:"https://dunwu.github.io/waterdrop/",target:"_blank",rel:"noopener noreferrer"};function ye(je,Pe){const s=l("RouterLink"),n=l("ExternalLinkIcon");return a(),c("div",null,[u,e("h3",_,[E,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/01.Redis%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html"},{default:d(()=>[o("Redis 基本数据类型")]),_:1})]),B,e("h3",p,[A,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/02.Redis%E9%AB%98%E7%BA%A7%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html"},{default:d(()=>[o("Redis 高级数据类型")]),_:1})]),f,e("h3",g,[R,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/03.Redis%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html"},{default:d(()=>[o("Redis 数据结构")]),_:1})]),b,e("h3",m,[k,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/11.Redis%E8%BF%87%E6%9C%9F%E5%88%A0%E9%99%A4%E5%92%8C%E5%86%85%E5%AD%98%E6%B7%98%E6%B1%B0.html"},{default:d(()=>[o("Redis 过期删除和内存淘汰")]),_:1})]),D,e("h3",x,[S,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/12.Redis%E6%8C%81%E4%B9%85%E5%8C%96.html"},{default:d(()=>[o("Redis 持久化")]),_:1})]),V,e("h3",C,[L,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/13.Redis%E4%BA%8B%E4%BB%B6.html"},{default:d(()=>[o("Redis 事件")]),_:1})]),q,e("h3",w,[K,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/21.Redis%E5%A4%8D%E5%88%B6.html"},{default:d(()=>[o("Redis 复制")]),_:1})]),F,e("h3",I,[v,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/22.Redis%E5%93%A8%E5%85%B5.html"},{default:d(()=>[o("Redis 哨兵")]),_:1})]),y,e("h3",j,[P,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/23.Redis%E9%9B%86%E7%BE%A4.html"},{default:d(()=>[o("Redis 集群")]),_:1})]),U,e("h3",G,[H,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/31.Redis%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85.html"},{default:d(()=>[o("Redis 发布订阅")]),_:1})]),N,e("h3",T,[J,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/32.Redis%E4%BA%8B%E5%8A%A1.html"},{default:d(()=>[o("Redis 独立功能")]),_:1})]),M,e("h3",O,[z,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/33.Redis%E7%AE%A1%E9%81%93.html"},{default:d(()=>[o("Redis 管道")]),_:1})]),W,e("h3",Q,[Y,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/34.Redis%E8%84%9A%E6%9C%AC.html"},{default:d(()=>[o("Redis 脚本")]),_:1})]),Z,e("h3",X,[$,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/41.Redis%E8%BF%90%E7%BB%B4.html"},{default:d(()=>[o("Redis 运维")]),_:1})]),ee,e("h3",oe,[te,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/42.Redis%E5%AE%9E%E6%88%98.html"},{default:d(()=>[o("Redis 实战")]),_:1})]),ne,e("h3",se,[de,o(),t(s,{to:"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/05.KV%E6%95%B0%E6%8D%AE%E5%BA%93/01.Redis/99.Redis%E9%9D%A2%E8%AF%95.html"},{default:d(()=>[o("Redis 面试")]),_:1})]),re,e("ul",null,[e("li",null,[le,e("ul",null,[e("li",null,[e("a",ie,[o("Redis 官网"),t(n)])]),e("li",null,[e("a",ae,[o("Redis Github"),t(n)])]),e("li",null,[e("a",ce,[o("Redis 官方文档中文版"),t(n)])]),e("li",null,[e("a",he,[o("Redis 在线环境"),t(n)])])])]),e("li",null,[ue,e("ul",null,[e("li",null,[e("a",_e,[o("《Redis 实战》"),t(n)])]),e("li",null,[e("a",Ee,[o("《Redis 设计与实现》"),t(n)])])])]),e("li",null,[Be,e("ul",null,[e("li",null,[e("a",pe,[o("Redis 命令参考"),t(n)])])])]),e("li",null,[Ae,e("ul",null,[e("li",null,[e("a",fe,[o("Introduction to Redis"),t(n)])]),e("li",null,[e("a",ge,[o("《我们一起进大厂》系列- Redis 基础"),t(n)])])])]),e("li",null,[Re,e("ul",null,[e("li",null,[e("a",be,[o("《Redis 实战》配套 Python 源码"),t(n)])])])]),e("li",null,[me,e("ul",null,[e("li",null,[e("a",ke,[o("awesome-redis"),t(n)])])])]),e("li",null,[De,e("ul",null,[e("li",null,[e("a",xe,[o("Jedis"),t(n)]),o(" - 最流行的 Redis Java 客户端")]),e("li",null,[e("a",Se,[o("Redisson"),t(n)]),o(" - 额外提供了很多的分布式服务特性，如：分布式锁、分布式 Java 常用对象（BitSet、BlockingQueue、CountDownLatch 等）")]),e("li",null,[e("a",Ve,[o("Lettuce"),t(n)]),o(" - Spring Boot 2.0 默认 Redis 客户端")]),e("li",null,[e("a",Ce,[o("spring-data-redis 官方文档"),t(n)])]),e("li",null,[e("a",Le,[o("Redisson 官方文档(中文,略有滞后)"),t(n)])]),e("li",null,[e("a",qe,[o("Redisson 官方文档(英文)"),t(n)])]),e("li",null,[e("a",we,[o("CRUG | Redisson PRO vs. Jedis: Which Is Faster? 翻译"),t(n)])]),e("li",null,[e("a",Ke,[o("redis 分布锁 Redisson 性能测试"),t(n)])]),e("li",null,[e("a",Fe,[o("RedisDesktopManager"),t(n)])])])])]),Ie,e("p",null,[o("◾ 💧 "),e("a",ve,[o("钝悟的 IT 知识图谱"),t(n)]),o(" ◾")])])}const He=i(h,[["render",ye],["__file","index.html.vue"]]);export{He as default};
