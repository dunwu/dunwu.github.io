import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c,a as n,b as a,d as p,e as i}from"./app-1f12e18b.js";const l={},u=i(`<h1 id="redis-管道" tabindex="-1"><a class="header-anchor" href="#redis-管道" aria-hidden="true">#</a> Redis 管道</h1><blockquote><p>关键词：<code>Pipeline</code></p></blockquote><h2 id="pipeline-简介" tabindex="-1"><a class="header-anchor" href="#pipeline-简介" aria-hidden="true">#</a> Pipeline 简介</h2><p>Redis 是一种基于 C/S 模型以及请求/响应协议的 TCP 服务。通常情况下，一个 Redis 命令的请求、响应遵循以下步骤：</p><ul><li>客户端向服务端发送一个查询请求，并监听 Socket 返回（通常是以阻塞模式，等待服务端响应）。</li><li>服务端处理命令，并将结果返回给客户端。</li></ul><p>显然，如果每个 Redis 命令都发起一次请求、响应，会很低效。因此，Redis 客户端提供了一种批量处理技术，即</p><p><strong>管道技术（<code>Pipeline</code>）</strong>。Pipeline 的工作原理就是：<strong>将多个 Redis 命令一次性发送给服务端，服务端处理后，统一返回给客户端</strong>。由于减少了通信次数，自然提升了处理效率。</p><figure><img src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7268887661/p514690.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="pipeline-限制" tabindex="-1"><a class="header-anchor" href="#pipeline-限制" aria-hidden="true">#</a> Pipeline 限制</h2><p>在使用 Redis 管道技术时，要注意一些限制，避免踩坑：</p><ul><li><strong>Pipeline 不能保证原子性</strong> - Pipeline 只是将客户端发送命令的方式改为批量发送，而服务端在接收到 Pipeline 发来的命令后，将其拆解为一条条命令，然后依然是串行执行。执行过程中，服务端有可能执行其他客户端的命令，所以无法保证原子性。如需保证原子性，可以考虑使用事务或 Lua 脚本。</li><li><strong>Pipeline 不支持回滚</strong> - Pipeline 没有事务的特性，如果待执行命令的前后存在依赖关系，请勿使用 Pipeline。</li><li><strong>Pipeline 命令不宜过大</strong> - 使用管道发送命令时，Redis Server 会将部分请求放到缓存队列中（占用内存），执行完毕后一次性发送结果。如果需要发送大量的命令，会占用大量的内存，因此应该按照合理数量分批次的处理。</li><li><strong>Pipeline 不支持跨 slot 访问</strong> - 由于 Pipeline 不支持跨 slot 访问，因此，在 Redis 集群模式下使用 Pipeline 时要确保访问的 key 都在同一 slot 中。</li></ul><h2 id="pipeline-案例" tabindex="-1"><a class="header-anchor" href="#pipeline-案例" aria-hidden="true">#</a> Pipeline 案例</h2><p>主流的 Redis 客户端，一般都会支持管道技术。</p><p>【示例】Jedis 管道使用示例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">String</span> host <span class="token operator">=</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> port <span class="token operator">=</span> <span class="token number">6379</span><span class="token punctuation">;</span>
        <span class="token class-name">Jedis</span> jedis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jedis</span><span class="token punctuation">(</span>host<span class="token punctuation">,</span> port<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token string">&quot;pipeline:test&quot;</span><span class="token punctuation">;</span>
        jedis<span class="token punctuation">.</span><span class="token function">del</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// -------- 方法1</span>
        <span class="token function">method1</span><span class="token punctuation">(</span>jedis<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//-------- 方法2</span>
        <span class="token function">method2</span><span class="token punctuation">(</span>jedis<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token class-name">Jedis</span> jedis<span class="token punctuation">,</span> <span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-----方法2-----&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jedis<span class="token punctuation">.</span><span class="token function">del</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//初始化</span>
        <span class="token class-name">Pipeline</span> pipeline <span class="token operator">=</span> jedis<span class="token punctuation">.</span><span class="token function">pipelined</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//需要先声明Response</span>
        <span class="token class-name">Response</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> r1 <span class="token operator">=</span> pipeline<span class="token punctuation">.</span><span class="token function">incr</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Pipeline发送请求&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Response</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> r2 <span class="token operator">=</span> pipeline<span class="token punctuation">.</span><span class="token function">incr</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Pipeline发送请求&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Response</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> r3 <span class="token operator">=</span> pipeline<span class="token punctuation">.</span><span class="token function">incr</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Pipeline发送请求&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Response</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> r4 <span class="token operator">=</span> pipeline<span class="token punctuation">.</span><span class="token function">incr</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Pipeline发送请求&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Response</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> r5 <span class="token operator">=</span> pipeline<span class="token punctuation">.</span><span class="token function">incr</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Pipeline发送请求&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 此时还未开始接收响应，所以此操作会出错</span>
            r1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot; &lt;&lt;&lt; Pipeline error：还未开始接收响应  &gt;&gt;&gt; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 发送请求完成，开始接收响应</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;发送请求完成，开始接收响应&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pipeline<span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Pipeline 接收响应 Response: &quot;</span> <span class="token operator">+</span> r1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Pipeline 接收响应 Response: &quot;</span> <span class="token operator">+</span> r2<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Pipeline 接收响应 Response: &quot;</span> <span class="token operator">+</span> r3<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Pipeline 接收响应 Response: &quot;</span> <span class="token operator">+</span> r4<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Pipeline 接收响应 Response: &quot;</span> <span class="token operator">+</span> r5<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jedis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token class-name">Jedis</span> jedis<span class="token punctuation">,</span> <span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Pipeline</span> pipeline <span class="token operator">=</span> jedis<span class="token punctuation">.</span><span class="token function">pipelined</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-----方法1-----&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pipeline<span class="token punctuation">.</span><span class="token function">incr</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Pipeline 发送请求&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 发送请求完成，开始接收响应</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;发送请求完成，开始接收响应&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> responses <span class="token operator">=</span> pipeline<span class="token punctuation">.</span><span class="token function">syncAndReturnAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>responses <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> responses<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            jedis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;Pipeline error: 没有接收到响应&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> resp <span class="token operator">:</span> responses<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Pipeline 接收响应 Response: &quot;</span> <span class="token operator">+</span> resp<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,16),k={href:"https://item.jd.com/11486101.html",target:"_blank",rel:"noopener noreferrer"},r={href:"https://help.aliyun.com/zh/redis/use-cases/use-pipelining-to-batch-issue-commands?spm=a2c4g.11186623.0.0.1c193393SEIu92",target:"_blank",rel:"noopener noreferrer"};function d(m,v){const s=e("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",k,[a("《Redis 设计与实现》"),p(s)])]),n("li",null,[n("a",r,[a("阿里云管道传输"),p(s)])])])])}const f=t(l,[["render",d],["__file","33.Redis管道.html.vue"]]);export{f as default};
