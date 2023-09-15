import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as h,o as d,c as l,a as e,b as a,d as i,e as n}from"./app-103fb7a1.js";const o={},s=n('<h1 id="秒杀系统设计" tabindex="-1"><a class="header-anchor" href="#秒杀系统设计" aria-hidden="true">#</a> 秒杀系统设计</h1><p>秒杀系统所要应对的场景就是：<strong>瞬时海量请求</strong>。</p><h2 id="秒杀系统的难点" tabindex="-1"><a class="header-anchor" href="#秒杀系统的难点" aria-hidden="true">#</a> 秒杀系统的难点</h2><ul><li>高并发：秒杀系统是极致的高并场景发自不用说。其高并发可以细分为二： <ul><li>并发读：主要是读取剩余库存量以及商品信息</li><li>并发写：主要是下单后，系统写入订单记录</li></ul></li><li>超卖：秒杀系统中售卖的商品一般都是性价比很高，不怎么赚钱，甚至赔钱赚哟喝的商品。一旦出现超卖现象，会给商家带来巨大的经济损失。从系统层面来看，比如某秒杀商品本来库存 100 件，但是在高并发场景下，瞬时下单量超过 100 件，处理不当，让这些下单都成功了，就会出现超卖。</li><li>恶意请求：有些人为了低价购入秒杀商品，通过在多台机器上跑脚本，模拟大量用户抢商品的请求（走自己的路，让别人无路可走）。</li><li>数据库崩溃：海量请求下，如果没有 MQ 削峰，没有过载保护，让所有请求都打到数据库，那么数据库基本就挂了。数据库如果挂了，也会波及其他业务，从而可能让整个系统、网站陷入瘫痪。</li><li>对现有业务造成冲击</li></ul><h2 id="秒杀系统的思考" tabindex="-1"><a class="header-anchor" href="#秒杀系统的思考" aria-hidden="true">#</a> 秒杀系统的思考</h2><h3 id="稳准快" tabindex="-1"><a class="header-anchor" href="#稳准快" aria-hidden="true">#</a> 稳准快</h3><p>秒杀系统架构的思考角度可以概括为：<strong>稳、准、快</strong></p><ul><li><strong>稳（高可用）</strong>：系统架构要满足高可用，系统要能撑住活动。</li><li><strong>准（一致性）</strong>：商品减库存方式非常关键，不能出现超卖。</li><li><strong>快（高性能）</strong>：整个请求链路，从前端到后端，依赖组件都要做到协同优化。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200720073346.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="前端优化" tabindex="-1"><a class="header-anchor" href="#前端优化" aria-hidden="true">#</a> 前端优化</h2><h3 id="静态页面" tabindex="-1"><a class="header-anchor" href="#静态页面" aria-hidden="true">#</a> 静态页面</h3><p>把秒杀商品页面静态化，减少查数据库的 IO 开销。然后，可以将这些静态页面做 CDN 缓存，如果项目是前后端分离的，还可以在反向代理服务器侧设置静态缓存。</p>',12),c={href:"http://item.xxx.com/item.htm?id=xxxx",target:"_blank",rel:"noopener noreferrer"},p=n(`<h3 id="按钮控制" tabindex="-1"><a class="header-anchor" href="#按钮控制" aria-hidden="true">#</a> 按钮控制</h3><p>在秒杀活动开启时间前，下单按钮禁用。</p><p>此外，按钮一旦点击之后，禁用一段时间，防止有人疯狂输出。</p><h2 id="后端优化" tabindex="-1"><a class="header-anchor" href="#后端优化" aria-hidden="true">#</a> 后端优化</h2><h3 id="隔离" tabindex="-1"><a class="header-anchor" href="#隔离" aria-hidden="true">#</a> 隔离</h3><p>秒杀活动，本质上还是一个营销活动，性质和打折、促销一样。</p><p>秒杀系统设计底线原则，是不应该影响现有业务。所以，为了避免防不胜防，百密一疏的情况下，秒杀系统崩了。</p><h3 id="限流、熔断、降级、隔离" tabindex="-1"><a class="header-anchor" href="#限流、熔断、降级、隔离" aria-hidden="true">#</a> 限流、熔断、降级、隔离</h3><ul><li><p><strong>隔离</strong>：将秒杀系统、数据与其他正常业务隔离。彼此隔离，自然互不影响。</p></li><li><p><strong>限流</strong>：设置阈值，超过阈值，拒绝请求。防止数据库被打死。</p></li><li><p><strong>降级</strong>：保证核心业务继续工作，非核心业务各安天命。</p></li><li><p><strong>熔断</strong>：不要影响别的系统。</p></li></ul><h3 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> 缓存</h3><p>缓存要预热，避免瞬间流量冲击。</p><p>此外，防止雪崩、穿透、击穿问题的常规处理要做好。</p><p>缓存也要保证高可用。</p><h3 id="流量削峰" tabindex="-1"><a class="header-anchor" href="#流量削峰" aria-hidden="true">#</a> 流量削峰</h3><p>削峰的思路：排队、答题、分层过滤。</p><ul><li>排队：用消息队列来缓冲瞬时流量的方案。但是，消息队列自身也有上限，如果积压过多，也会处理不了。</li><li>答题（摇一摇）：可以限制秒杀器并延缓请求。</li><li>分层过滤：采用漏斗式的设计尽可能拦截无效请求。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200720094300.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="减库存" tabindex="-1"><a class="header-anchor" href="#减库存" aria-hidden="true">#</a> 减库存</h3><h4 id="恶意下单" tabindex="-1"><a class="header-anchor" href="#恶意下单" aria-hidden="true">#</a> 恶意下单</h4><p>恶意下单的解决方案还是要结合安全和反作弊措施来制止：</p><ul><li>识别频繁下单不付款或重复下单不付款的卖家，阻断其下单。</li><li>限制个人购买数</li></ul><h4 id="避免超卖" tabindex="-1"><a class="header-anchor" href="#避免超卖" aria-hidden="true">#</a> 避免超卖</h4><p>减库存在数据一致性上，主要就是保证大并发请求时库存数据不能为负数，也就是要保证数据库中的库存字段值不能为负数，一般我们有多种解决方案：一种是在应用程序中通过事务来判断，即保证减后库存不能为负数，否则就回滚；另一种办法是直接设置数据库的字段数据为无符号整数，这样减后库存字段值小于零时会直接执行 SQL 语句来报错；再有一种就是使用 CASE WHEN 判断语句，例如这样的 SQL 语句：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>UPDATE item SET inventory = CASE WHEN inventory &gt;= xxx THEN inventory-xxx ELSE inventory END
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在交易环节中，“库存”是个关键数据，也是个热点数据，因为交易的各个环节中都可能涉及对库存的查询。但是，我在前面介绍分层过滤时提到过，秒杀中并不需要对库存有精确的一致性读，把库存数据放到缓存（Cache）中，可以大大提升读性能。</p><h3 id="url-动态化" tabindex="-1"><a class="header-anchor" href="#url-动态化" aria-hidden="true">#</a> URL 动态化</h3><p>通过 MD5 之类的加密算法加密随机的字符串去做 url，然后通过前端代码获取 url 后台校验才能通过。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,28),u={href:"https://time.geekbang.org/column/intro/127",target:"_blank",rel:"noopener noreferrer"},g={href:"https://segmentfault.com/a/1190000020970562",target:"_blank",rel:"noopener noreferrer"};function x(f,m){const r=h("ExternalLinkIcon");return d(),l("div",null,[s,e("p",null,[a("如每个商品都由 ID 来标识，那么 "),e("a",c,[a("http://item.xxx.com/item.htm?id=xxxx"),i(r)]),a(" 就可以作为唯一的 URL 标识。相应的页面可以提前做前端缓存，这样就不需要向后台查询商品信息。")]),p,e("ul",null,[e("li",null,[e("a",u,[a("如何设计一个秒杀系统"),i(r)])]),e("li",null,[e("a",g,[a("一个秒杀系统的设计思考"),i(r)])])])])}const v=t(o,[["render",x],["__file","秒杀系统设计.html.vue"]]);export{v as default};
