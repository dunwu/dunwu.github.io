import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as i,c as p,a as n,b as s,d as e,e as t}from"./app-05b4da95.js";const c={},u=t(`<h1 id="服务路由" tabindex="-1"><a class="header-anchor" href="#服务路由" aria-hidden="true">#</a> 服务路由</h1><h2 id="服务路由简介" tabindex="-1"><a class="header-anchor" href="#服务路由简介" aria-hidden="true">#</a> 服务路由简介</h2><h3 id="什么是服务路由" tabindex="-1"><a class="header-anchor" href="#什么是服务路由" aria-hidden="true">#</a> 什么是服务路由</h3><p><strong>服务路由</strong>是指通过一定的规则从集群中选择合适的节点。</p><h3 id="为什么需要服务路由" tabindex="-1"><a class="header-anchor" href="#为什么需要服务路由" aria-hidden="true">#</a> 为什么需要服务路由</h3><p>负载均衡的作用和服务路由的功能看上去很近似，二者有什么区别呢？</p><p>负载均衡的目标是提供服务分发而不是解决路由问题，常见的静态、动态负载均衡算法也无法实现精细化的路由管理，但是负载均衡也可以简单看做是路由方案的一种。</p><p>服务路由通常用于以下场景，目的在于实现流量隔离：</p><ul><li><strong>分组调用</strong>：一般来讲，为了保证服务的高可用性，实现异地多活的需求，一个服务往往不止部署在一个数据中心，而且出于节省成本等考虑，有些业务可能不仅在私有机房部署，还会采用公有云部署，甚至采用多家公有云部署。服务节点也会按照不同的数据中心分成不同的分组，这时对于服务消费者来说，选择哪一个分组调用，就必须有相应的路由规则。</li><li><strong>蓝绿发布</strong>：蓝绿发布场景中，一共有两套服务群组：一套是提供旧版功能的服务群组，标记为<strong>绿色</strong>；另一套是提供新版功能的服务群组，标记为<strong>蓝色</strong>。两套服务群组都是功能完善的，并且正在运行的系统，只是服务版本和访问流量不同。新版群组（蓝色）通常是为了做内部测试、验收，不对外部用户暴露。 <ul><li>如果新版群组（蓝色）运行稳定，并测试、验收通过后，则通过服务路由、负载均衡等手段逐步将外部用户流量导向新版群组（蓝色）。</li><li>如果新版群组（蓝色）运行不稳定，或测试、验收不通过，则排查、解决问题后，再继续测试、验收。</li></ul></li><li><strong>灰度发布</strong>：灰度发布（又名金丝雀发布）是指在黑与白之间，能够平滑过渡的一种发布方式。在其上可以进行 A/B 测试，即让一部分用户使用特性 A，一部分用户使用特性 B：如果用户对 B 没有什么反对意见，那么逐步扩大发布范围，直到把所有用户都迁移到 B 上面来。灰度发布可以保证整体系统的稳定，在初始灰度的时候就可以发现、调整问题，以保证其影响度。要支持灰度发布，就要求服务能够根据一定的规则，将流量隔离。</li><li><strong>流量切换</strong>：在业务线上运行过程中，经常会遇到一些不可抗力因素导致业务故障，比如某个机房的光缆被挖断，或者发生着火等事故导致整个机房的服务都不可用。这个时候就需要按照某个指令，能够把原来调用这个机房服务的流量切换到其他正常的机房。</li><li><strong>线下测试联调</strong>：线下测试时，可能会缺少相应环境。可以将测试应用注册到线上，然后开启路由规则，在本地进行测试。</li><li><strong>读写分离</strong>。对于大多数互联网业务来说都是读多写少，所以在进行服务部署的时候，可以把读写分开部署，所有写接口可以部署在一起，而读接口部署在另外的节点上。</li></ul><h2 id="服务路由的规则" tabindex="-1"><a class="header-anchor" href="#服务路由的规则" aria-hidden="true">#</a> 服务路由的规则</h2><h3 id="条件路由" tabindex="-1"><a class="header-anchor" href="#条件路由" aria-hidden="true">#</a> 条件路由</h3><p><strong>条件路由是基于条件表达式的路由规则</strong>。各个 RPC 框架的条件路由表达式各不相同。</p><p>我们不妨参考一下 Dubbo 的条件路由。Dubbo 的条件路由有两种配置粒度，如下：</p><ul><li><p><strong>应用粒度</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># app1的消费者只能消费所有端口为20880的服务实例</span>
<span class="token comment"># app2的消费者只能消费所有端口为20881的服务实例</span>
<span class="token punctuation">---</span>
<span class="token key atrule">scope</span><span class="token punctuation">:</span> application
<span class="token key atrule">force</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">runtime</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">key</span><span class="token punctuation">:</span> governance<span class="token punctuation">-</span>conditionrouter<span class="token punctuation">-</span>consumer
<span class="token key atrule">conditions</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> application=app1 =<span class="token punctuation">&gt;</span> address=<span class="token important">*:</span><span class="token number">20880</span>
  <span class="token punctuation">-</span> application=app2 =<span class="token punctuation">&gt;</span> address=<span class="token important">*:</span><span class="token number">20881</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>服务粒度</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># DemoService的sayHello方法只能消费所有端口为20880的服务实例</span>
<span class="token comment"># DemoService的sayHi方法只能消费所有端口为20881的服务实例</span>
<span class="token punctuation">---</span>
<span class="token key atrule">scope</span><span class="token punctuation">:</span> service
<span class="token key atrule">force</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">runtime</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">key</span><span class="token punctuation">:</span> org.apache.dubbo.samples.governance.api.DemoService
<span class="token key atrule">conditions</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> method=sayHello =<span class="token punctuation">&gt;</span> address=<span class="token important">*:</span><span class="token number">20880</span>
  <span class="token punctuation">-</span> method=sayHi =<span class="token punctuation">&gt;</span> address=<span class="token important">*:</span><span class="token number">20881</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,14),r=n("code",null,"conditions",-1),d=n("code",null,"conditions",-1),v={href:"https://dubbo.apache.org/zh/docs/v2.7/user/examples/routing-rule/",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>Dubbo 的条件路由规则由两个条件组成，分别用于对服务消费者和提供者进行匹配。条件路由规则的格式如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[服务消费者匹配条件] =&gt; [服务提供者匹配条件]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>服务消费者匹配条件：所有参数和消费者的 URL 进行对比，当消费者满足匹配条件时，对该消费者执行后面的过滤规则。</li><li>服务提供者匹配条件：所有参数和提供者的 URL 进行对比，消费者最终只拿到过滤后的地址列表。</li></ul><p><code>condition://</code> 代表了这是一段用条件表达式编写的路由规则，下面是一个条件路由规则示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>host = 10.20.153.10 =&gt; host = 10.20.153.11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该条规则表示 IP 为 <code>10.20.153.10</code> 的服务消费者<strong>只可</strong>调用 IP 为 <code>10.20.153.11</code> 机器上的服务，不可调用其他机器上的服务。</p><p>下面列举一些 Dubbo 条件路由的典型应用场景：</p><ul><li>如果服务消费者的匹配条件为空，就表示<strong>所有的服务消费者都可以访问</strong>，就像下面的表达式一样。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>=&gt; host != 10.20.153.11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>如果服务提供者的过滤条件为空，就表示<strong>禁止所有的服务消费者访问</strong>，就像下面的表达式一样。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>host = 10.20.153.10 =&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>排除某个服务节点</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>=&gt; host != 172.22.3.91
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>白名单</strong></li></ul><div class="language-fallback line-numbers-mode" data-ext="fallback"><pre class="language-fallback"><code>register.ip != 10.20.153.10,10.20.153.11 =&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>黑名单</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>register.ip = 10.20.153.10,10.20.153.11 =&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>只暴露部分机器节点</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>=&gt; host = 172.22.3.1*,172.22.3.2*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>为重要应用提供额外的机器节点</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>application != kylin =&gt; host != 172.22.3.95,172.22.3.96
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>读写分离</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>method = find*,list*,get*,is* =&gt; host = 172.22.3.94,172.22.3.95,172.22.3.96
method != find*,list*,get*,is* =&gt; host = 172.22.3.97,172.22.3.98
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>前后台分离</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>application = bops =&gt; host = 172.22.3.91,172.22.3.92,172.22.3.93
application != bops =&gt; host = 172.22.3.94,172.22.3.95,172.22.3.96
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>隔离不同机房网段</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>host != 172.22.3.* =&gt; host != 172.22.3.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>提供者与消费者部署在同集群内，<strong>本机只访问本机的服务</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>=&gt; host = $host
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="脚本路由" tabindex="-1"><a class="header-anchor" href="#脚本路由" aria-hidden="true">#</a> 脚本路由</h3><p><strong>脚本路由</strong>是基于脚本语言的路由规则，常用的脚本语言比如 JavaScript、Groovy、JRuby 等。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;script://0.0.0.0/com.foo.BarService?category=routers&amp;dynamic=false&amp;rule=&quot; + URL.encode(&quot;（function route(invokers) { ... } (invokers)）&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里面 <code>script://</code> 就代表了这是一段脚本语言编写的路由规则，具体规则定义在脚本语言的 route 方法实现里，比如下面这段用 JavaScript 编写的 route() 方法表达的意思是，只有 IP 为 <code>10.20.153.10</code> 的服务消费者可以发起服务调用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">route</span><span class="token punctuation">(</span><span class="token parameter">invokers</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>ArrayList</span><span class="token punctuation">(</span>invokers<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> invokers<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&quot;10.20.153.10&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>invokers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>invokers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token punctuation">(</span>invokers<span class="token punctuation">)</span>）<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标签路由" tabindex="-1"><a class="header-anchor" href="#标签路由" aria-hidden="true">#</a> 标签路由</h3><p><strong>标签路由</strong>通过将某一个或多个服务的提供者划分到同一个分组，约束流量只在指定分组中流转，从而实现流量隔离的目的，可以作为蓝绿发布、灰度发布等场景的能力基础。</p><p>标签主要是指对服务提供者的分组，目前有两种方式可以完成实例分组，分别是<strong>动态规则打标</strong>和<strong>静态规则打标</strong>。一般，动态规则优先级比静态规则更高，当两种规则同时存在且出现冲突时，将以动态规则为准。</p><p>以 Dubbo 的标签路由用法为例</p><p>（1）<strong>动态规则打标</strong>，可随时在<strong>服务治理控制台</strong>下发标签归组规则</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># governance-tagrouter-provider应用增加了两个标签分组tag1和tag2</span>
<span class="token comment"># tag1包含一个实例 127.0.0.1:20880</span>
<span class="token comment"># tag2包含一个实例 127.0.0.1:20881</span>
<span class="token punctuation">---</span>
  <span class="token key atrule">force</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">runtime</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">key</span><span class="token punctuation">:</span> governance<span class="token punctuation">-</span>tagrouter<span class="token punctuation">-</span>provider
  <span class="token key atrule">tags</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> tag1
      <span class="token key atrule">addresses</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;127.0.0.1:20880&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> tag2
      <span class="token key atrule">addresses</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;127.0.0.1:20881&quot;</span><span class="token punctuation">]</span>
 <span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）<strong>静态规则打标</strong></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">dubbo:</span>provider</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag1<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">dubbo:</span>service</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag1<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-fallback line-numbers-mode" data-ext="fallback"><pre class="language-fallback"><code>java -jar xxx-provider.jar -Ddubbo.provider.tag={the tag you want, may come from OS ENV}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（3）<strong>服务消费者指定标签路由</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">RpcContext</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAttachment</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">REQUEST_TAG_KEY</span><span class="token punctuation">,</span><span class="token string">&quot;tag1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请求标签的作用域为每一次 invocation，使用 <code>attachment</code> 来传递请求标签，注意保存在 <code>attachment</code> 中的值将会在一次完整的远程调用中持续传递，得益于这样的特性，我们只需要在起始调用时，通过一行代码的设置，达到标签的持续传递。</p><h3 id="路由规则获取方式" tabindex="-1"><a class="header-anchor" href="#路由规则获取方式" aria-hidden="true">#</a> 路由规则获取方式</h3><p>路由规则的获取方式主要有三种：</p><ul><li><strong>本地静态配置</strong>：顾名思义就是路由规则存储在服务消费者本地上。服务消费者发起调用时，从本地固定位置读取路由规则，然后按照路由规则选取一个服务节点发起调用。</li><li><strong>配置中心管理</strong>：这种方式下，所有的服务消费者都从配置中心获取路由规则，由配置中心来统一管理。</li><li><strong>注册中心动态下发</strong>：这种方式下，一般是运维人员或者开发人员，通过服务治理平台修改路由规则，服务治理平台调用配置中心接口，把修改后的路由规则持久化到配置中心。因为服务消费者订阅了路由规则的变更，于是就会从配置中心获取最新的路由规则，按照最新的路由规则来执行。</li></ul><p>一般来讲，<strong>服务路由最好是存储在配置中心</strong>，由配置中心来统一管理。这样的话，所有的服务消费者就不需要在本地管理服务路由，因为大部分的服务消费者并不关心服务路由的问题，或者说也不需要去了解其中的细节。通过配置中心，统一给各个服务消费者下发统一的服务路由，节省了沟通和管理成本。</p><p>但也不排除某些服务消费者有特定的需求，需要定制自己的路由规则，这个时候就适合通过本地配置来定制。</p><p>而动态下发可以理解为一种高级功能，它能够动态地修改路由规则，在某些业务场景下十分有用。比如某个数据中心存在问题，需要把调用这个数据中心的服务消费者都切换到其他数据中心，这时就可以通过动态下发的方式，向配置中心下发一条路由规则，将所有调用这个数据中心的请求都迁移到别的地方。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,56),g={href:"https://time.geekbang.org/column/intro/100014401",target:"_blank",rel:"noopener noreferrer"},m={href:"https://time.geekbang.org/column/intro/100046201",target:"_blank",rel:"noopener noreferrer"},b={href:"https://time.geekbang.org/course/intro/100003901",target:"_blank",rel:"noopener noreferrer"};function h(x,f){const a=l("ExternalLinkIcon");return i(),p("div",null,[u,n("blockquote",null,[n("p",null,[s("其中，"),r,s(" 定义具体的路由规则内容。"),d,s(" 部分是规则的主体，由 1 到任意多条规则组成。详见："),n("a",v,[s("Dubbo 路由规则"),e(a)])])]),k,n("ul",null,[n("li",null,[n("a",g,[s("从 0 开始学微服务"),e(a)])]),n("li",null,[n("a",m,[s("RPC 实战与核心原理"),e(a)])]),n("li",null,[n("a",b,[s("微服务架构核心 20 讲"),e(a)])])])])}const q=o(c,[["render",h],["__file","01.服务路由.html.vue"]]);export{q as default};
