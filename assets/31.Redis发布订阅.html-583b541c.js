import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as i,a as n,d as e,b as a,e as p}from"./app-c2b0a364.js";const c={},r=p(`<h1 id="redis-发布订阅" tabindex="-1"><a class="header-anchor" href="#redis-发布订阅" aria-hidden="true">#</a> Redis 发布订阅</h1><blockquote><p>Redis 发布订阅 (pub/sub) 是一种消息通信模式：发送者 (pub) 发送消息，订阅者 (sub) 接收消息。Redis 客户端可以订阅任意数量的频道。</p><p>Redis 有两种发布订阅模式</p><ul><li>基于频道（Channel）的发布订阅</li><li>基于模式（Pattern）的发布订阅</li></ul><p>关键词：<code>订阅</code>、<code>SUBSCRIBE</code>、<code>PSUBSCRIBE</code>、<code>PUBLISH</code>、<code>观察者模式</code></p></blockquote><h2 id="观察者模式" tabindex="-1"><a class="header-anchor" href="#观察者模式" aria-hidden="true">#</a> 观察者模式</h2><p>Redis 发布订阅应用了设计模式中经典的“观察者模式”。</p><p><strong>观察者模式</strong>（Observer）是一种行为设计模式，允许你定义一种订阅机制，可在对象事件发生时通知多个 “观察” 该对象的其他对象。</p><ul><li>当一个对象状态的改变需要改变其他对象，或实际对象是事先未知的或动态变化的时，可使用观察者模式。</li><li>当应用中的一些对象必须观察其他对象时，可使用该模式。但仅能在有限时间内或特定情况下使用。</li></ul><figure><img src="https://d1.awsstatic.com/product-marketing/Messaging/sns_img_topic.e024462ec88e79ed63d690a2eed6e050e33fb36f.png" alt="观察者模式" tabindex="0" loading="lazy"><figcaption>观察者模式</figcaption></figure><h2 id="redis-订阅模式" tabindex="-1"><a class="header-anchor" href="#redis-订阅模式" aria-hidden="true">#</a> Redis 订阅模式</h2><p>Redis 有两种发布订阅模式：</p><p>（1）<strong>基于频道（Channel）的发布订阅</strong></p><p>服务器状态在 <code>pubsub_channels</code> 字典保存了所有频道的订阅关系： <code>SUBSCRIBE</code> 命令负责将客户端和被订阅的频道关联到这个字典里面， 而 <code>UNSUBSCRIBE</code> 命令则负责解除客户端和被退订频道之间的关联。</p><p>【示例】订阅指定频道示例</p><p>打开客户端一，执行以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> SUBSCRIBE first second
Reading messages<span class="token punctuation">..</span>. <span class="token punctuation">(</span>press Ctrl-C to quit<span class="token punctuation">)</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;subscribe&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;first&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;subscribe&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;second&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开客户端二，执行以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> PUBLISH second Hello
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，客户端一会收到以下内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;message&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;second&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;Hello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）<strong>基于模式（Pattern）的发布订阅</strong></p><p>服务器状态在 <code>pubsub_patterns</code> 链表保存了所有模式的订阅关系： <code>PSUBSCRIBE</code> 命令负责将客户端和被订阅的模式记录到这个链表中， 而 <code>UNSUBSCRIBE</code> 命令则负责移除客户端和被退订模式在链表中的记录。</p><p>【示例】订阅符合指定模式的频道</p><p>打开客户端一，执行以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> PSUBSCRIBE news.*
Reading messages<span class="token punctuation">..</span>. <span class="token punctuation">(</span>press Ctrl-C to quit<span class="token punctuation">)</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;psubscribe&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;news.*&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开客户端二，执行以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> PUBLISH news.A Hello
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>打开客户端三，执行以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> PUBLISH news.B World
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，客户端一会收到以下内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;pmessage&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;news.*&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;news.A&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;Hello&quot;</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;pmessage&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;news.*&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;news.B&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;World&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="发布订阅命令" tabindex="-1"><a class="header-anchor" href="#发布订阅命令" aria-hidden="true">#</a> 发布订阅命令</h2><p>Redis 提供了以下与订阅发布有关的命令：</p>`,31),u=n("thead",null,[n("tr",null,[n("th",null,"命令"),n("th",null,"描述")])],-1),d={href:"https://redis.io/commands/subscribe/",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"SUBSCRIBE",-1),m=n("td",null,"订阅指定频道",-1),h={href:"https://redis.io/commands/unsubscribe",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"UNSUBSCRIBE",-1),v=n("td",null,"取消订阅指定频道",-1),g={href:"https://redis.io/commands/psubscribe",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"PSUBSCRIBE",-1),q=n("td",null,"订阅符合指定模式的频道",-1),B={href:"https://redis.io/commands/punsubscribe",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"PUNSUBSCRIBE",-1),S=n("td",null,"取消订阅符合指定模式的频道",-1),R={href:"https://redis.io/commands/publish/",target:"_blank",rel:"noopener noreferrer"},U=n("code",null,"PUBLISH",-1),x=n("td",null,"发送信息到指定的频道",-1),C={href:"https://redis.io/commands/pubsub/",target:"_blank",rel:"noopener noreferrer"},I=n("code",null,"PUBSUB",-1),E=n("td",null,"查看发布订阅状态",-1),P=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),a(" 参考资料")],-1),w={href:"https://item.jd.com/11486101.html",target:"_blank",rel:"noopener noreferrer"};function H(N,L){const s=o("ExternalLinkIcon");return l(),i("div",null,[r,n("table",null,[u,n("tbody",null,[n("tr",null,[n("td",null,[n("a",d,[b,e(s)])]),m]),n("tr",null,[n("td",null,[n("a",h,[k,e(s)])]),v]),n("tr",null,[n("td",null,[n("a",g,[_,e(s)])]),q]),n("tr",null,[n("td",null,[n("a",B,[f,e(s)])]),S]),n("tr",null,[n("td",null,[n("a",R,[U,e(s)])]),x]),n("tr",null,[n("td",null,[n("a",C,[I,e(s)])]),E])])]),P,n("ul",null,[n("li",null,[n("a",w,[a("《Redis 设计与实现》"),e(s)])])])])}const A=t(c,[["render",H],["__file","31.Redis发布订阅.html.vue"]]);export{A as default};
