import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as i,a as e,b as r,d as a,e as s}from"./app-9f0b185d.js";const h={},c=s('<h1 id="系统架构面试" tabindex="-1"><a class="header-anchor" href="#系统架构面试" aria-hidden="true">#</a> 系统架构面试</h1><h2 id="如何设计一个秒杀系统" tabindex="-1"><a class="header-anchor" href="#如何设计一个秒杀系统" aria-hidden="true">#</a> 如何设计一个秒杀系统？</h2><h3 id="秒杀系统的挑战" tabindex="-1"><a class="header-anchor" href="#秒杀系统的挑战" aria-hidden="true">#</a> 秒杀系统的挑战</h3><p>秒杀的核心问题就是<strong>极高并发处理</strong>，由于系统要在瞬时承受平时数十倍甚至上百倍的流量，这往往超出系统上限，因此处理秒杀的<strong>核心思路是限流和缓存</strong>。</p><h3 id="秒杀系统的解决思路" tabindex="-1"><a class="header-anchor" href="#秒杀系统的解决思路" aria-hidden="true">#</a> 秒杀系统的解决思路</h3><ul><li>系统上有拦截流量：尽可能在上游拦截和限制请求，限制流入后端的量，保证后端系统正常。 因为无论多少人参与秒杀，实际成交往往是有限的，而且远小于参加秒杀的人数，因此可以通过前端系统进行拦截，限制最终流入系统的请求数量，来保证系统正常进行。</li><li>充分利用缓存：这是一个典型的读多写少的应用场景（一趟火车其实只有 2000 张票，200w 个人来买，最多 2000 个人下单成功，其他人都是查询库存，写比例只有 0.1%，读比例占 99.9%），非常适合使用缓存。</li></ul><h3 id="秒杀系统的解决方案" tabindex="-1"><a class="header-anchor" href="#秒杀系统的解决方案" aria-hidden="true">#</a> 秒杀系统的解决方案</h3><p>秒杀系统具体方案如下：</p><p><strong>（1）浏览器、客户端拦截重复请求</strong></p><ul><li>用户点击查询或购买按钮后，禁用按钮，避免用户重复提交请求。</li><li>JS 代码中限制用户在限定时间内只允许提交一次请求</li></ul><p>基于此，大部分流量已被拦截。</p><p><strong>（2）应用层拦截请求</strong></p><p>浏览器、客户端拦截重复请求只能应付通过浏览器访问的用户。如果有人通过程序发送 http 请求，则无法拦截。针对这种情况的方案是：</p><p>以页面缓存的方式，针对短时间内的同一个访问源（如同一个 IP、同一个 Session、同一个用户 ID 多次发送 HTTP 请求）或同样的查询请求（如大量请求都是查询某类商品的库存），都返回相同的展示页面。</p><p>如此限流，又有大部分的流量被拦截</p><p>（3）服务层请求拦截与数据缓存</p><p>加入有黑客，控制了 10w 台肉鸡（并且假设买票不需要实名认证），前面的的限制都不起作用了。这时应该怎么办？</p><ul><li><p>读请求（查库存） - 对于读请求，直接使用缓存即可，一般缓存服务器单机处理每秒 10w 个请求应该没什么问题。</p></li><li><p>写请求（下单） - 由于服务层清楚的知道库存数量，所以完全可以根据库存数量进行限流。具体来说，就是把所有下单请求都丢该消息队列中，每次只取有限的写请求去数据层处理。当这些写请求处理完，更新一下缓存中的库存数，再去取下一批写请求，如果库存数不够，则消息队列的写请求全部返回&quot;已售罄&quot;的结果。</p></li></ul>',18),d=e("p",null,"参考：",-1),p={href:"https://www.zhihu.com/question/54895548/answer/146924420",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.zhihu.com/question/54895548/answer/259218876",target:"_blank",rel:"noopener noreferrer"},u=e("h2",{id:"参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),r(" 参考资料")],-1),f={href:"https://www.zhihu.com/question/54895548/answer/146924420",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.zhihu.com/question/54895548/answer/259218876",target:"_blank",rel:"noopener noreferrer"};function m(b,g){const n=o("ExternalLinkIcon");return l(),i("div",null,[c,e("blockquote",null,[d,e("ul",null,[e("li",null,[e("a",p,[r("如何设计秒杀系统？ - 阿里云云栖社区的回答 - 知乎"),a(n)])]),e("li",null,[e("a",_,[r("如何设计秒杀系统？ - 网易云的回答 - 知乎"),a(n)])])])]),u,e("ul",null,[e("li",null,[e("a",f,[r("如何设计秒杀系统？ - 阿里云云栖社区的回答 - 知乎"),a(n)])]),e("li",null,[e("a",w,[r("如何设计秒杀系统？ - 网易云的回答 - 知乎"),a(n)])])])])}const q=t(h,[["render",m],["__file","01.系统架构面试.html.vue"]]);export{q as default};
