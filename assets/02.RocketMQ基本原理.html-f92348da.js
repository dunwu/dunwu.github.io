import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c,a as n,b as a,d as e,e as i}from"./app-d8d56f9e.js";const l={},u=i(`<h1 id="rocketmq-基本原理" tabindex="-1"><a class="header-anchor" href="#rocketmq-基本原理" aria-hidden="true">#</a> RocketMQ 基本原理</h1><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><p>分布式消息系统作为实现分布式系统可扩展、可伸缩性的关键组件，需要具有高吞吐量、高可用等特点。而谈到消息系统的设计，就回避不了两个问题：</p><ol><li>消息的顺序问题</li><li>消息的重复问题</li></ol><h3 id="顺序消息" tabindex="-1"><a class="header-anchor" href="#顺序消息" aria-hidden="true">#</a> 顺序消息</h3><h4 id="第一种模型" tabindex="-1"><a class="header-anchor" href="#第一种模型" aria-hidden="true">#</a> 第一种模型</h4><p>假如生产者产生了 2 条消息：M1、M2，要保证这两条消息的顺序，应该怎样做？你脑中想到的可能是这样：</p><div align="center"><img src="http://upload-images.jianshu.io/upload_images/3101171-bb5ec534363e2fb4"></div><p>假定 M1 发送到 S1，M2 发送到 S2，如果要保证 M1 先于 M2 被消费，那么需要 M1 到达消费端被消费后，通知 S2，然后 S2 再将 M2 发送到消费端。</p><p>这个模型存在的问题是，如果 M1 和 M2 分别发送到两台 Server 上，就不能保证 M1 先达到 MQ 集群，也不能保证 M1 被先消费。换个角度看，如果 M2 先于 M1 达到 MQ 集群，甚至 M2 被消费后，M1 才达到消费端，这时消息也就乱序了，说明以上模型是不能保证消息的顺序的。</p><div align="center"><img src="http://upload-images.jianshu.io/upload_images/3101171-5a6313fe906a678b"></div><h4 id="第二种模型" tabindex="-1"><a class="header-anchor" href="#第二种模型" aria-hidden="true">#</a> 第二种模型</h4><p>如何才能在 MQ 集群保证消息的顺序？一种简单的方式就是将 M1、M2 发送到同一个 Server 上：</p><p>这样可以保证 M1 先于 M2 到达 MQServer（生产者等待 M1 发送成功后再发送 M2），根据先达到先被消费的原则，M1 会先于 M2 被消费，这样就保证了消息的顺序。</p><p>这个模型也仅仅是理论上可以保证消息的顺序，在实际场景中可能会遇到下面的问题：</p><div align="center"><img src="http://upload-images.jianshu.io/upload_images/3101171-d430f5a3ec6c48ad"></div><p>只要将消息从一台服务器发往另一台服务器，就会存在网络延迟问题。如上图所示，如果发送 M1 耗时大于发送 M2 的耗时，那么 M2 就仍将被先消费，仍然不能保证消息的顺序。即使 M1 和 M2 同时到达消费端，由于不清楚消费端 1 和消费端 2 的负载情况，仍然有可能出现 M2 先于 M1 被消费的情况。</p><p>如何解决这个问题？将 M1 和 M2 发往同一个消费者，且发送 M1 后，需要消费端响应成功后才能发送 M2。</p><p>这可能产生另外的问题：如果 M1 被发送到消费端后，消费端 1 没有响应，那是继续发送 M2 呢，还是重新发送 M1？一般为了保证消息一定被消费，肯定会选择重发 M1 到另外一个消费端 2，就如下图所示。</p><div align="center"><img src="http://upload-images.jianshu.io/upload_images/3101171-3c0e822d37a85e1e"></div><p>这样的模型就严格保证消息的顺序，细心的你仍然会发现问题，消费端 1 没有响应 Server 时有两种情况，一种是 M1 确实没有到达(数据在网络传送中丢失)，另外一种消费端已经消费 M1 且已经发送响应消息，只是 MQ Server 端没有收到。如果是第二种情况，重发 M1，就会造成 M1 被重复消费。也就引入了我们要说的第二个问题，消息重复问题，这个后文会详细讲解。</p><p>回过头来看消息顺序问题，严格的顺序消息非常容易理解，也可以通过文中所描述的方式来简单处理。总结起来，要实现严格的顺序消息，简单且可行的办法就是：</p><p><strong>保证生产者 - MQServer - 消费者是一对一对一的关系。</strong></p><p>这样的设计虽然简单易行，但也会存在一些很严重的问题，比如：</p><ol><li>并行度就会成为消息系统的瓶颈（吞吐量不够）</li><li>更多的异常处理，比如：只要消费端出现问题，就会导致整个处理流程阻塞，我们不得不花费更多的精力来解决阻塞的问题。</li></ol><p>RocketMQ 的解决方案：通过合理的设计或者将问题分解来规避。如果硬要把时间花在解决问题本身，实际上不仅效率低下，而且也是一种浪费。从这个角度来看消息的顺序问题，我们可以得出两个结论：</p><ol><li>不关注乱序的应用实际大量存在</li><li>队列无序并不意味着消息无序</li></ol><p>最后我们从源码角度分析 RocketMQ 怎么实现发送顺序消息。</p><p>RocketMQ 通过轮询所有队列的方式来确定消息被发送到哪一个队列（负载均衡策略）。比如下面的示例中，订单号相同的消息会被先后发送到同一个队列中：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// RocketMQ 通过 MessageQueueSelector 中实现的算法来确定消息发送到哪一个队列上</span>
<span class="token comment">// RocketMQ 默认提供了两种 MessageQueueSelector 实现：随机/Hash</span>
<span class="token comment">// 当然你可以根据业务实现自己的 MessageQueueSelector 来决定消息按照何种策略发送到消息队列中</span>
<span class="token class-name">SendResult</span> sendResult <span class="token operator">=</span> producer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">MessageQueueSelector</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">MessageQueue</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MessageQueue</span><span class="token punctuation">&gt;</span></span> mqs<span class="token punctuation">,</span> <span class="token class-name">Message</span> msg<span class="token punctuation">,</span> <span class="token class-name">Object</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Integer</span> id <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">)</span> arg<span class="token punctuation">;</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> id <span class="token operator">%</span> mqs<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> mqs<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> orderId<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在获取到路由信息以后，会根据 MessageQueueSelector 实现的算法来选择一个队列，同一个 OrderId 获取到的肯定是同一个队列。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">SendResult</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    <span class="token comment">// 获取topic路由信息</span>
    <span class="token class-name">TopicPublishInfo</span> topicPublishInfo <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">tryToFindTopicPublishInfo</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span><span class="token function">getTopic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>topicPublishInfo <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> topicPublishInfo<span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MessageQueue</span> mq <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token comment">// 根据我们的算法，选择一个发送队列</span>
        <span class="token comment">// 这里的arg = orderId</span>
        mq <span class="token operator">=</span> selector<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span>topicPublishInfo<span class="token punctuation">.</span><span class="token function">getMessageQueueList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> msg<span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>mq <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sendKernelImpl</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> mq<span class="token punctuation">,</span> communicationMode<span class="token punctuation">,</span> sendCallback<span class="token punctuation">,</span> timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="消息重复" tabindex="-1"><a class="header-anchor" href="#消息重复" aria-hidden="true">#</a> 消息重复</h3><p>造成消息重复的根本原因是：网络不可达。只要通过网络交换数据，就无法避免这个问题。所以解决这个问题的办法就是绕过这个问题。那么问题就变成了：如果消费端收到两条一样的消息，应该怎样处理？</p><ol><li>消费端处理消息的业务逻辑保持幂等性。</li><li>保证每条消息都有唯一编号且保证消息处理成功与去重表的日志同时出现。</li></ol><p>第 1 条很好理解，只要保持幂等性，不管来多少条重复消息，最后处理的结果都一样。</p><p>第 2 条原理就是利用一张日志表来记录已经处理成功的消息的 ID，如果新到的消息 ID 已经在日志表中，那么就不再处理这条消息。</p><p>第 1 条解决方案，很明显应该在消费端实现，不属于消息系统要实现的功能。</p><p>第 2 条可以消息系统实现，也可以业务端实现。正常情况下出现重复消息的概率其实很小，如果由消息系统来实现的话，肯定会对消息系统的吞吐量和高可用有影响，所以最好还是由业务端自己处理消息重复的问题，这也是 RocketMQ 不解决消息重复的问题的原因。</p><p><strong>RocketMQ 不保证消息不重复，如果你的业务需要保证严格的不重复消息，需要你自己在业务端去重。</strong></p><h3 id="事务消息" tabindex="-1"><a class="header-anchor" href="#事务消息" aria-hidden="true">#</a> 事务消息</h3><p>RocketMQ 除了支持普通消息，顺序消息，另外还支持事务消息。</p><p>假设这样的场景：</p><figure><img src="https://upload-images.jianshu.io/upload_images/3101171-253d8bd65736694f.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>图中执行本地事务（Bob 账户扣款）和发送异步消息应该保证同时成功或者同时失败，也就是扣款成功了，发送消息一定要成功，如果扣款失败了，就不能再发送消息。那问题是：我们是先扣款还是先发送消息呢？</p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-088dc074c4ecd192" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>RocketMQ 分布式事务步骤：</p><p>发送 Prepared 消息 2222222222222222222，并拿到接受消息的地址。<br> 执行本地事务<br> 通过第 1 步骤拿到的地址去访问消息，并修改消息状态。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,49),r={href:"http://rocketmq.apache.org/docs/quick-start/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.jianshu.com/p/453c6e7ff81c",target:"_blank",rel:"noopener noreferrer"};function k(m,h){const s=t("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[a("RocketMQ 官方文档"),e(s)])]),n("li",null,[n("a",d,[a("分布式开放消息系统(RocketMQ)的原理与实践"),e(s)])])])])}const M=p(l,[["render",k],["__file","02.RocketMQ基本原理.html.vue"]]);export{M as default};
