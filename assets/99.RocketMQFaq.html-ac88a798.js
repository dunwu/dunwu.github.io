import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e as p}from"./app-207caadd.js";const t={},e=p(`<h1 id="rocketmq-faq" tabindex="-1"><a class="header-anchor" href="#rocketmq-faq" aria-hidden="true">#</a> RocketMQ FAQ</h1><h2 id="api-问题" tabindex="-1"><a class="header-anchor" href="#api-问题" aria-hidden="true">#</a> API 问题</h2><h3 id="connect-to-172-17-0-1-10909-failed" tabindex="-1"><a class="header-anchor" href="#connect-to-172-17-0-1-10909-failed" aria-hidden="true">#</a> connect to <code>&lt;172.17.0.1:10909&gt;</code> failed</h3><p>启动后，Producer 客户端连接 RocketMQ 时报错：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>rocketmq<span class="token punctuation">.</span>remoting<span class="token punctuation">.</span>exception<span class="token punctuation">.</span></span>RemotingConnectException</span><span class="token operator">:</span> connect <span class="token keyword">to</span> <span class="token operator">&lt;</span><span class="token number">172.17</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">10909</span><span class="token operator">&gt;</span> failed
    at <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>rocketmq<span class="token punctuation">.</span>remoting<span class="token punctuation">.</span>netty<span class="token punctuation">.</span></span>NettyRemotingClient</span><span class="token punctuation">.</span><span class="token function">invokeSync</span><span class="token punctuation">(</span><span class="token class-name">NettyRemotingClient</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">357</span><span class="token punctuation">)</span>
    at <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>rocketmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span>impl<span class="token punctuation">.</span></span>MQClientAPIImpl</span><span class="token punctuation">.</span><span class="token function">sendMessageSync</span><span class="token punctuation">(</span><span class="token class-name">MQClientAPIImpl</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">343</span><span class="token punctuation">)</span>
    at <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>rocketmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span>impl<span class="token punctuation">.</span></span>MQClientAPIImpl</span><span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token class-name">MQClientAPIImpl</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">327</span><span class="token punctuation">)</span>
    at <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>rocketmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span>impl<span class="token punctuation">.</span></span>MQClientAPIImpl</span><span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token class-name">MQClientAPIImpl</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">290</span><span class="token punctuation">)</span>
    at <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>rocketmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span>impl<span class="token punctuation">.</span>producer<span class="token punctuation">.</span></span>DefaultMQProducerImpl</span><span class="token punctuation">.</span><span class="token function">sendKernelImpl</span><span class="token punctuation">(</span><span class="token class-name">DefaultMQProducerImpl</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">688</span><span class="token punctuation">)</span>
    at <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>rocketmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span>impl<span class="token punctuation">.</span>producer<span class="token punctuation">.</span></span>DefaultMQProducerImpl</span><span class="token punctuation">.</span><span class="token function">sendSelectImpl</span><span class="token punctuation">(</span><span class="token class-name">DefaultMQProducerImpl</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">901</span><span class="token punctuation">)</span>
    at <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>rocketmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span>impl<span class="token punctuation">.</span>producer<span class="token punctuation">.</span></span>DefaultMQProducerImpl</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">DefaultMQProducerImpl</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">878</span><span class="token punctuation">)</span>
    at <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>rocketmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span>impl<span class="token punctuation">.</span>producer<span class="token punctuation">.</span></span>DefaultMQProducerImpl</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">DefaultMQProducerImpl</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">873</span><span class="token punctuation">)</span>
    at <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>rocketmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span>producer<span class="token punctuation">.</span></span>DefaultMQProducer</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">DefaultMQProducer</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">369</span><span class="token punctuation">)</span>
    at <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>emrubik<span class="token punctuation">.</span>uc<span class="token punctuation">.</span>mdm<span class="token punctuation">.</span>sync<span class="token punctuation">.</span>utils<span class="token punctuation">.</span></span>MdmInit</span><span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token class-name">MdmInit</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">62</span><span class="token punctuation">)</span>
    at <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>emrubik<span class="token punctuation">.</span>uc<span class="token punctuation">.</span>mdm<span class="token punctuation">.</span>sync<span class="token punctuation">.</span>utils<span class="token punctuation">.</span></span>MdmInit</span><span class="token punctuation">.</span><span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">MdmInit</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">2149</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原因：RocketMQ 部署在虚拟机上，内网 ip 为 10.10.30.63，该虚拟机一个 docker0 网卡，ip 为 172.17.0.1。RocketMQ broker 启动时默认使用了 docker0 网卡，Producer 客户端无法连接 172.17.0.1，造成以上问题。</p><p>解决方案</p><p>（1）干掉 docker0 网卡或修改网卡名称</p><p>（2）停掉 broker，修改 broker 配置文件，重启 broker。</p><p>修改 conf/broker.conf，增加两行来指定启动 broker 的 IP：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>namesrvAddr = 10.10.30.63:9876
brokerIP1 = 10.10.30.63
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>启动时需要指定配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nohup</span> <span class="token function">sh</span> bin/mqbroker <span class="token parameter variable">-n</span> localhost:9876 <span class="token parameter variable">-c</span> conf/broker.conf <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),c=[e];function o(l,u){return a(),s("div",null,c)}const r=n(t,[["render",o],["__file","99.RocketMQFaq.html.vue"]]);export{r as default};
