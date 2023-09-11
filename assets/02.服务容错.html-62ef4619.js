import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c as s,a,b as r,d as n,e as l}from"./app-64c8372a.js";const h={},d=l('<h1 id="服务容错" tabindex="-1"><a class="header-anchor" href="#服务容错" aria-hidden="true">#</a> 服务容错</h1><h2 id="故障分类" tabindex="-1"><a class="header-anchor" href="#故障分类" aria-hidden="true">#</a> 故障分类</h2><p>从故障影响范围维度来看，分布式系统的故障可以分为三类：</p><ul><li><strong>集群故障</strong>：根据业务量大小而定，集群规模从几台到甚至上万台都有可能。一旦某些代码出现 bug，可能整个集群都会发生故障，不能提供对外提供服务。</li><li><strong>机房故障</strong>：现在大多数互联网公司为了保证业务的高可用性，往往业务部署在不止一个机房。然而现实中，某机房的光缆因为道路施工被挖断，导致整个机房脱网的事情，也是时有发生的。并且这种事情往往容易上热搜。</li><li><strong>单机故障</strong>：集群中的个别机器出现故障，这种情况往往对全局没有太大影响，但会导致调用到故障机器上的请求都失败，影响整个系统的成功率。</li></ul><h3 id="集群故障应对处理" tabindex="-1"><a class="header-anchor" href="#集群故障应对处理" aria-hidden="true">#</a> 集群故障应对处理</h3><p>一般而言，集群故障的产生原因不外乎有两种：</p><ul><li>一种是代码 bug 所导致，比如说某一段 Java 代码不断地分配大对象，但没有及时回收导致 JVM OOM 退出；</li><li>另一种是流量突刺，短时间突然而至的大量请求超出了系统的承载能力。</li></ul><p>应付集群故障的思路，主要是采用<strong>流量控制</strong>，主要手段有：<strong>限流</strong>、<strong>降级</strong>、<strong>熔断</strong>。</p><h3 id="机房故障应对处理" tabindex="-1"><a class="header-anchor" href="#机房故障应对处理" aria-hidden="true">#</a> 机房故障应对处理</h3><p>单机房脱网的事情，多半是因为一些不可抗因素，如：机房失火、光缆被挖断等等。有句老话叫：不要把鸡蛋都放在一个篮子里。同理，不要把业务都部署在一个机房中，一旦机房出事，那就彻底完蛋了。所以，很多互联网公司的业务都采用多机房部署。如果要追求更高的可靠性，可以采用同城多活部署，甚至异地多活部署。</p><p>多机房部署的好处显而易见，即提高了系统的可用性，但是这种架构引入了其他的问题：如何保证不同机房数据的一致性，如何切换多机房的流量，等等。</p><p>针对流量切换问题，一般有两种手段：</p><ul><li><strong>基于 DNS 解析的流量切换</strong>，一般是通过把请求访问域名解析的 VIP 从一个 IDC 切换到另外一个 IDC。</li><li><strong>基于 RPC 分组的流量切换</strong>，对于一个服务来说，如果是部署在多个 IDC 的话，一般每个 IDC 就是一个分组。假如一个 IDC 出现故障，那么原先路由到这个分组的流量，就可以通过向配置中心下发命令，把原先路由到这个分组的流量全部切换到别的分组，这样的话就可以切换故障 IDC 的流量了。</li></ul><h3 id="单机故障应对处理" tabindex="-1"><a class="header-anchor" href="#单机故障应对处理" aria-hidden="true">#</a> 单机故障应对处理</h3><p>对于大规模集群来说，出现单机故障的概率是很高的。当出现单机故障时，需要有一定的自动化处理手段。</p><p>处理单机故障一个有效的办法就是自动重启。具体来讲，你可以设置一个阈值，比如以某个接口的平均耗时为准，当监控单机上某个接口的平均耗时超过一定阈值时，就认为这台机器有问题，这个时候就需要把有问题的机器从线上集群中摘除掉，然后在重启服务后，重新加入到集群中。</p><h2 id="容错策略" tabindex="-1"><a class="header-anchor" href="#容错策略" aria-hidden="true">#</a> 容错策略</h2><p>服务调用并不总是一定成功的，前面我讲过，可能因为服务提供者节点自身宕机、进程异常退出或者服务消费者与提供者之间的网络出现故障等原因。对于服务调用失败的情况，需要有手段自动恢复，来保证调用成功。</p><p>常用的手段主要有以下几种：</p><ul><li><strong>故障转移（FailOver）</strong>：当出现失败，重试其它服务器。通常用于读操作，但重试会带来更长延迟。这种策略要求服务调用的操作必须是幂等的，也就是说无论调用多少次，只要是同一个调用，返回的结果都是相同的，一般适合服务调用是读请求的场景。</li><li><strong>快速失败（FailFast）</strong>：只发起一次调用，失败立即报错。通常用于非幂等性的写操作，比如新增记录。实际在业务执行时，一般非核心业务的调用，会采用快速失败策略，调用失败后一般就记录下失败日志就返回了。</li><li><strong>安全失败（Failsafe）</strong>：出现异常时，直接忽略。通常用于写入审计日志等操作。</li><li><strong>静默失败（Failsilent）</strong>：如果大量的请求需要等到超时（或者长时间处理后）才宣告失败，很容易由于某个远程服务的请求堆积而消耗大量的线程、内存、网络等资源，进而影响到整个系统的稳定。面对这种情况，一种合理的失败策略是当请求失败后，就默认服务提供者一定时间内无法再对外提供服务，不再向它分配请求流量，将错误隔离开来，避免对系统其他部分产生影响，此即为沉默失败策略。</li><li><strong>故障恢复（FailBack）</strong>：就是服务消费者调用失败或者超时后，不再重试，而是根据失败的详细信息，来决定后续的执行策略。比如对于非幂等的调用场景，如果调用失败后，不能简单地重试，而是应该查询服务端的状态，看调用到底是否实际生效，如果已经生效了就不能再重试了；如果没有生效可以再发起一次调用。通常用于消息通知操作。</li><li><strong>并行调用（Forking）</strong>：并行调用多个服务器，只要一个成功即返回。通常用于实时性要求较高的读操作，但需要浪费更多服务资源。</li><li><strong>广播调用（Broadcast）</strong>：广播调用所有提供者，逐个调用，任意一台报错则报错。通常用于通知所有提供者更新缓存或日志等本地资源信息。</li></ul><h2 id="容错设计模式" tabindex="-1"><a class="header-anchor" href="#容错设计模式" aria-hidden="true">#</a> 容错设计模式</h2><h3 id="断路器模式" tabindex="-1"><a class="header-anchor" href="#断路器模式" aria-hidden="true">#</a> 断路器模式</h3><p>断路器的基本思路是很简单的，就是通过代理（断路器对象）来一对一地（一个远程服务对应一个断路器对象）接管服务调用者的远程请求。断路器会持续监控并统计服务返回的成功、失败、超时、拒绝等各种结果，当出现故障（失败、超时、拒绝）的次数达到断路器的阈值时，它状态就自动变为“OPEN”，后续此断路器代理的远程访问都将直接返回调用失败，而不会发出真正的远程服务请求。通过断路器对远程服务的熔断，避免因持续的失败或拒绝而消耗资源，因持续的超时而堆积请求，最终的目的就是避免雪崩效应的出现。由此可见，断路器本质是一种快速失败策略的实现方式。</p><h3 id="舱壁隔离模式" tabindex="-1"><a class="header-anchor" href="#舱壁隔离模式" aria-hidden="true">#</a> 舱壁隔离模式</h3><p>舱壁隔离模式是常用的实现服务隔离的设计模式，舱壁这个词是来自造船业的舶来品，它原本的意思是设计舰船时，要在每个区域设计独立的水密舱室，一旦某个舱室进水，也只是影响这个舱室中的货物，而不至于让整艘舰艇沉没。这种思想就很符合容错策略中失败静默策略。</p><p>Hystrix 就采用舱壁隔离模式来实现线程隔离。</p><h3 id="重试模式" tabindex="-1"><a class="header-anchor" href="#重试模式" aria-hidden="true">#</a> 重试模式</h3><p>故障转移和故障恢复策略都需要对服务进行重复调用，差别是这些重复调用有可能是同步的，也可能是后台异步进行；有可能会重复调用同一个服务，也可能会调用到服务的其他副本。无论具体是通过怎样的方式调用、调用的服务实例是否相同，都可以归结为重试设计模式的应用范畴。重试模式适合解决系统中的瞬时故障，简单的说就是有可能自己恢复（Resilient，称为自愈，也叫做回弹性）的临时性失灵，网络抖动、服务的临时过载（典型的如返回了 503 Bad Gateway 错误）这些都属于瞬时故障。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',29),c={href:"https://time.geekbang.org/column/intro/100014401",target:"_blank",rel:"noopener noreferrer"},g={href:"http://icyfenix.cn/distribution/traffic-management/failure.html",target:"_blank",rel:"noopener noreferrer"};function p(u,f){const e=i("ExternalLinkIcon");return o(),s("div",null,[d,a("ul",null,[a("li",null,[a("a",c,[r("从 0 开始学微服务"),n(e)])]),a("li",null,[a("a",g,[r("凤凰架构之服务容错"),n(e)])])])])}const b=t(h,[["render",p],["__file","02.服务容错.html.vue"]]);export{b as default};
