import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as p,c as t,a,b as c,d as i,e as r}from"./app-1f12e18b.js";const o={},l=r(`<h1 id="rpc-高级篇" tabindex="-1"><a class="header-anchor" href="#rpc-高级篇" aria-hidden="true">#</a> RPC 高级篇</h1><h2 id="异步-rpc" tabindex="-1"><a class="header-anchor" href="#异步-rpc" aria-hidden="true">#</a> 异步 RPC</h2><h2 id="链路跟踪" tabindex="-1"><a class="header-anchor" href="#链路跟踪" aria-hidden="true">#</a> 链路跟踪</h2><p>分布式链路跟踪就是将一次分布式请求还原为一个完整的调用链路，我们可以在整个调用链路中跟踪到这一次分布式请求的每一个环节的调用情况，比如调用是否成功，返回什么异常，调用的哪个服务节点以及请求耗时等等。</p><p>Trace 就是代表整个链路，每次分布式都会产生一个 Trace，每个 Trace 都有它的唯一标识即 TraceId，在分布式链路跟踪系统中，就是通过 TraceId 来区分每个 Trace 的。<br> Span 就是代表了整个链路中的一段链路，也就是说 Trace 是由多个 Span 组成的。在一个 Trace 下，每个 Span 也都有它的唯一标识 SpanId，而 Span 是存在父子关系的。还是以讲过的例子为例子，在 A-&gt;B-&gt;C-&gt;D 的情况下，在整个调用链中，正常情况下会产生 3 个 Span，分别是 Span1（A-&gt;B）、Span2（B-&gt;C）、Span3（C-&gt;D），这时 Span3 的父 Span 就是 Span2，而 Span2 的父 Span 就是 Span1。</p><p>RPC 在整合分布式链路跟踪需要做的最核心的两件事就是“埋点”和“传递”。</p><p>我们前面说是因为各子应用、子服务间复杂的依赖关系，所以通过日志难定位问题。那我们就想办法通过日志定位到是哪个子应用的子服务出现问题就行了。</p><p>其实，在 RPC 框架打印的异常信息中，是包括定位异常所需要的异常信息的，比如是哪类异常引起的问题（如序列化问题或网络超时问题），是调用端还是服务端出现的异常，调用端与服务端的 IP 是什么，以及服务接口与服务分组都是什么等等。具体如下图所示：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200719082205.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="泛化调用" tabindex="-1"><a class="header-anchor" href="#泛化调用" aria-hidden="true">#</a> 泛化调用</h2><p>在一些特定场景下，需要在没有接口的情况下进行 RPC 调用。例如：</p><p>场景一：搭建一个统一的测试平台，可以让各个业务方在测试平台中通过输入接口、分组名、方法名以及参数值，在线测试自己发布的 RPC 服务。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200719095518.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>场景二：搭建一个轻量级的服务网关，可以让各个业务方用 HTTP 的方式，通过服务网关调用其它服务。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200719095704.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>为了解决这些场景的问题，可以使用泛化调用。</p><p>就是 RPC 框架提供统一的泛化调用接口（GenericService），调用端在创建 GenericService 代理时指定真正需要调用的接口的接口名以及分组名，通过调用 GenericService 代理的 $invoke 方法将服务端所需要的所有信息，包括接口名、业务分组名、方法名以及参数信息等封装成请求消息，发送给服务端，实现在没有接口的情况下进行<br> RPC 调用的功能。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">GenericService</span> <span class="token punctuation">{</span>
<span class="token class-name">Object</span> $<span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">String</span> methodName<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> paramTypes<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> $<span class="token function">asyncInvoke</span><span class="token punctuation">(</span><span class="token class-name">String</span> methodName<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> paramTypes
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而通过泛化调用的方式发起调用，由于调用端没有服务端提供方提供的接口 API，不能正常地进行序列化与反序列化，我们可以为泛化调用提供专属的序列化插件，来解决实际问题。</p><h2 id="时钟轮" tabindex="-1"><a class="header-anchor" href="#时钟轮" aria-hidden="true">#</a> 时钟轮</h2><p>时钟轮这个机制很好地解决了定时任务中，因每个任务都创建一个线程，导致的创建过多线程的问题，以及一个线程扫描所有的定时任务，让 CPU 做了很多额外的轮询遍历操作而浪费 CPU 的问题。</p><p>时钟轮的实现机制就是模拟现实生活中的时钟，将每个定时任务放到对应的时间槽位上，这样可以减少扫描任务时对其它时间槽位定时任务的额外遍历操作。</p><p>在时间轮的使用中，有些问题需要你额外注意：</p><p>时间槽位的单位时间越短，时间轮触发任务的时间就越精确。例如时间槽位的单位时间是 10 毫秒，那么执行定时任务的时间误差就在 10 毫秒内，如果是 100 毫秒，那么误差就在 100 毫秒内。</p><p>时间轮的槽位越多，那么一个任务被重复扫描的概率就越小，因为只有在多层时钟轮中的任务才会被重复扫描。比如一个时间轮的槽位有 1000 个，一个槽位的单位时间是 10 毫秒，那么下一层时间轮的一个槽位的单位时间就是 10 秒，超过 10 秒的定时任务会被放到下一层时间轮中，也就是只有超过 10 秒的定时任务会被扫描遍历两次，但如果槽位是 10 个，那么超过 100 毫秒的任务，就会被扫描遍历两次。</p><p>结合这些特点，我们就可以视具体的业务场景而定，对时钟轮的周期和时间槽数进行设置。</p><p>在 RPC 框架中，只要涉及到定时任务，我们都可以应用时钟轮，比较典型的就是调用端的超时处理、调用端与服务端的启动超时以及定时心跳等等。</p><h2 id="流量回放" tabindex="-1"><a class="header-anchor" href="#流量回放" aria-hidden="true">#</a> 流量回放</h2><p>所谓的流量就是某个时间段内的所有请求，我们通过某种手段把发送到 A 应用的所有请求录制下来，然后把这些请求统一转发到 B 应用，让 B 应用接收到的请求参数跟 A 应用保持一致，从而实现 A 接收到的请求在 B 应用里面重新请求了一遍。整个过程称之为“<strong>流量回放</strong>”。</p><p>流量回放可以做什么？</p><p>为了保障应用升级后，我们的业务行为还能保持和升级前一样，我们在大多数情况下都是依靠已有的 TestCase 去验证，但这种方式在一定程度上并不是完全可靠的。最可靠的方式就是引入线上 Case 去验证改造后的应用，把线上的真实流量在改造后的应用里面进行回放，这样不仅节省整个上线时间，还能弥补手动维护 Case 存在的缺陷。</p><p>应用引入了 RPC 后，所有的请求流量都会被 RPC 接管，所以我们可以很自然地在 RPC 里面支持流量回放功能。虽然这个功能本身并不是 RPC 的核心功能，但对于使用 RPC 的人来说，他们有了这个功能之后，就可以更放心地升级自己的应用了。</p><h2 id="rpc-高级" tabindex="-1"><a class="header-anchor" href="#rpc-高级" aria-hidden="true">#</a> RPC 高级</h2><h3 id="rpc-性能" tabindex="-1"><a class="header-anchor" href="#rpc-性能" aria-hidden="true">#</a> RPC 性能</h3><p>如何提升单机吞吐量？</p><p>大多数情况下，影响到 RPC 调用的吞吐量的原因也就是业务逻辑处理慢了，CPU 大部分时间都在等待资源。</p><p>为了解决等待的耗时，可以使用<strong>异步</strong>。异步可以使用 Future 或 Callback 方式，Future 最为简单。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220630195115.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>另外，我们可以通过对 CompletableFuture 的支持，实现 RPC 调用在调用端与服务端之间的完全异步，同时提升两端的单机吞吐量。</p><h3 id="rpc-安全" tabindex="-1"><a class="header-anchor" href="#rpc-安全" aria-hidden="true">#</a> RPC 安全</h3><p>虽然 RPC 经常用于解决内网应用之间的调用，内网环境相对公网也没有那么恶劣，但我们也有必要去建立一套可控的安全体系，去防止一些错误行为。对于 RPC 来说，我们所关心的安全问题不会有公网应用那么复杂，我们只要保证让服务调用方能拿到真实的服务提供方 IP 地址集合，且服务提供方可以管控调用自己的应用就够了。</p><p>服务提供方应用里面放一个用于 HMAC 签名的私钥，在授权平台上用这个私钥为申请调用的调用方应用进行签名，这个签名生成的串就变成了调用方唯一的身份。服务提供方在收到调用方的授权请求之后，我们只要需要验证下这个签名跟调用方应用信息是否对应得上就行了，这样集中式授权的瓶颈也就不存在了。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,43),d={href:"https://time.geekbang.org/column/intro/100046201",target:"_blank",rel:"noopener noreferrer"};function u(h,g){const n=s("ExternalLinkIcon");return p(),t("div",null,[l,a("ul",null,[a("li",null,[a("a",d,[c("RPC 实战与核心原理"),i(n)])])])])}const f=e(o,[["render",u],["__file","03.RPC高级.html.vue"]]);export{f as default};
