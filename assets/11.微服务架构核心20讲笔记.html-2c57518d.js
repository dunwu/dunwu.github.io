import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as g,o as l,c as p,a as i,b as a,d as n,e}from"./app-6ca995c0.js";const s={},o=e('<h1 id="《微服务架构核心-20-讲》笔记" tabindex="-1"><a class="header-anchor" href="#《微服务架构核心-20-讲》笔记" aria-hidden="true">#</a> 《微服务架构核心 20 讲》笔记</h1><h2 id="什么是微服务架构" tabindex="-1"><a class="header-anchor" href="#什么是微服务架构" aria-hidden="true">#</a> 什么是微服务架构</h2><p>微服务是一种架构模式。</p><p>微服务的六个特点：</p><ul><li>一组小的服务</li><li>独立的进程</li><li>独立部署</li><li>轻量级通信</li><li>基于业务能力</li><li>无集中式管理——这里指的是可以用不同的技术栈，不同的存储</li></ul><p><strong>微服务定义</strong>：基于有界上下文的、松散耦合的、面向服务的架构。</p><h2 id="架构师如何权衡微服务的利弊" tabindex="-1"><a class="header-anchor" href="#架构师如何权衡微服务的利弊" aria-hidden="true">#</a> 架构师如何权衡微服务的利弊</h2><p>架构之道在于权衡利弊。</p><p>微服务架构的优点</p><ul><li>强模块化边界</li><li>可独立部署</li><li>技术多样性</li></ul><p>微服务架构的缺点</p><ul><li>分布式系统复杂性</li><li>最终一致性</li><li>运维复杂性</li><li>测试复杂性</li></ul><p>分布式系统带来的一个挑战就是取终一致性。</p><h2 id="康威法则和微服务给架构师怎样的启示" tabindex="-1"><a class="header-anchor" href="#康威法则和微服务给架构师怎样的启示" aria-hidden="true">#</a> 康威法则和微服务给架构师怎样的启示</h2><p><strong>康威法则</strong>：设计系统的架构受制于产生这些设计的组织的沟通结构。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220627061813.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>康威的原文中提出的各定律</p><ul><li>第一定律 组织沟通方式会通过系统设计表达出来</li><li>第二定律 时间再多一件事情也不可能做的完美，但总有时间做完一件事情</li><li>第三定律 线型系统和线型组织架构间有潜在的异质同态特性</li><li>第四定律 大的系统组织总是比小系统更倾向于分解</li></ul><p>其中心思想实际就是<strong>分而治之</strong>。</p><h2 id="企业应该在什么时候开始考虑引入微服务" tabindex="-1"><a class="header-anchor" href="#企业应该在什么时候开始考虑引入微服务" aria-hidden="true">#</a> 企业应该在什么时候开始考虑引入微服务</h2><p>微服务的适用性:</p><figure><img src="http://blog.xyecho.com/assets/time-geekbang-microservice-core20/micro_server_4.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>微服务重在服务治理，其对于平台基础设施有较高要求，所以企业刚开始应用微服务并不一定能提高生产力。简单来说：单体服务适用于小团队；微服务适用于大团队。</p><p>何时选择微服务，在于度的把控。当研发团队人员增长到一定程度，沟通成本不断增长时，就可以考虑微服务架构了。一个经验数据是，当团队达到 100 人规模时，就可以考虑使用微服务架构了。</p><p><strong>罗马不是一天建成的</strong>：架构是一个演进的过程，不应该一开始就将系统设计的过于复杂。</p><h2 id="什么样组织架构更适合微服务" tabindex="-1"><a class="header-anchor" href="#什么样组织架构更适合微服务" aria-hidden="true">#</a> 什么样组织架构更适合微服务</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220627063405.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li><p>左边是比较传统的组织架构。产品从左到右流程走，可能出现的问题，反馈比较慢，对业务支持比较慢。沟通成本比较大。</p></li><li><p>右边是比较合适微服务的组织架构， 每一个团队（基于微服务的跨职能的团队），有开发，有产品，有测试，团队都支持自己的微服务。交付的产口是平台，对外提供 API 接口支持多样的业务。</p></li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220627064331.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>DevOps 理念：谁开发的，谁构建，谁支持。</p><h2 id="如何理解阿里巴巴提出的微服务" tabindex="-1"><a class="header-anchor" href="#如何理解阿里巴巴提出的微服务" aria-hidden="true">#</a> 如何理解阿里巴巴提出的微服务</h2><p>中台战略和微服务的关系</p><figure><img src="http://blog.xyecho.com/assets/time-geekbang-microservice-core20/micro_server_6.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>业务中台和技术中台统称为大中台，支撑业务前台。正所谓，万丈高楼平地起，中台基础越扎实，前台发展就越快。</p><p>PaaS 和 核心业务层是和微服务相关的。这一些基本都可以用微服务来实现。</p><ul><li><p>IaaS：Infrastructure-as-a-Service（基础设施即服务）</p></li><li><p>PaaS：Platform-as-a-Service（平台即服务）</p></li></ul><h2 id="如何给出一个清晰简洁的服务分层方式" tabindex="-1"><a class="header-anchor" href="#如何给出一个清晰简洁的服务分层方式" aria-hidden="true">#</a> 如何给出一个清晰简洁的服务分层方式</h2><p>大致的服务分层图：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220627064948.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>SOA（Service-Oriented Architecture）或微服务大致可分为</p><ul><li><strong>基础服务</strong>：也被称为：核心领域服务、中间层服务、公共服务</li><li><strong>聚合服务</strong>：对基础服务的聚合，以满足业务需求，提供给外部调用。</li></ul><h2 id="微服务总体技术架构体系是怎么设计的" tabindex="-1"><a class="header-anchor" href="#微服务总体技术架构体系是怎么设计的" aria-hidden="true">#</a> 微服务总体技术架构体系是怎么设计的</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220627065252.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>接入层：接入外部流量，内部做负载均衡</li><li>网关层：反向路由，限流，安全，跨横切面的功能。</li><li>业务服务层：可分为：聚合服务，基础服务</li><li>支撑服务：各种公共性的后台服务</li><li>平台服务：可以是一些管理系统</li><li>基础设施：由运维团队运维</li></ul><p>其中，与微服务相关的主要有：网关层、业务服务层、支撑服务、平台服务</p><h2 id="微服务最经典的三种服务发现机制" tabindex="-1"><a class="header-anchor" href="#微服务最经典的三种服务发现机制" aria-hidden="true">#</a> 微服务最经典的三种服务发现机制</h2><p>消费者（客户端）如何发现生产者（服务端），有三种模式：</p><p>（1）通过 DNS 访问 LB（负载均衡），LB 分发</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220627070054.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>（2）消费者内置 LB， 生产者将自身信息注册到注册中心上，并通过发送定时心跳来确认自身服务可用。消费者定期从注册中心拉取生产者信息</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220627070105.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>（3）结全前面两种方式， 在 Consumer 的主机上也布置一个 LB。 LB 会定期同步注册中心的信息。 运维成本比较高一点。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220627070117.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="微服务-api-服务网关-一-原理" tabindex="-1"><a class="header-anchor" href="#微服务-api-服务网关-一-原理" aria-hidden="true">#</a> 微服务 API 服务网关（一）原理</h2><p>网关用于屏蔽服务内部的逻辑，希望外部访问看到是统一的接口。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220628070638.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>网关主要的功能：</p><ul><li><strong>反向代理</strong>：将外部的请求换成内部调用。</li><li><strong>安全认证</strong>：防刷、防爬虫。</li><li><strong>限流熔断</strong>：处理可能会突发流量。</li><li><strong>日志监控</strong>：进行访问访问审计，监控流量。</li></ul><p>一般不要把过多的业务逻辑写在网关当中。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220628070651.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="服务-api-服务网关-二-开源网关-zuul" tabindex="-1"><a class="header-anchor" href="#服务-api-服务网关-二-开源网关-zuul" aria-hidden="true">#</a> 服务 API 服务网关（二）开源网关 Zuul</h2><p>Servlet 和 Filter Runner 过滤器：前置路由过滤器， 路由过滤器，后置路由过滤器</p><p>过滤器开发，可以通过脚本开发。开发完后上传到过滤器目录中， 被扫描后加到 Filter Runner 中。</p><p>各个 Filter 共享数据通过 Request Context 来实现。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220628070702.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>过滤链的流程：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220628070712.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="跟-netflix-学习微服务路由发现体系" tabindex="-1"><a class="header-anchor" href="#跟-netflix-学习微服务路由发现体系" aria-hidden="true">#</a> 跟 Netflix 学习微服务路由发现体系</h2><p>netflix 有两个比较重要的支撑服务</p><ul><li>服务注册中心 Eureka</li><li>网关 zuul</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220628070723.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="集中式配置中心的作用和原理是什么" tabindex="-1"><a class="header-anchor" href="#集中式配置中心的作用和原理是什么" aria-hidden="true">#</a> 集中式配置中心的作用和原理是什么</h2><p>为什么要引入配置中心呢？</p><p>配置文件中的属性不方便管理，无法动态更新，无法审计。配置中心可以解决这些问题。</p><p>什么可做配置呢？</p><ul><li>业务开关</li><li>调用/响应超时</li><li>限流</li><li>连接字符串</li><li>动态参数</li></ul><p>Svr 更新配置有两种方式：推和拉。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220628070748.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>携程的 Apollo 配置中心:</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220628070805.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',80),c={href:"https://github.com/ctripcorp/apollo",target:"_blank",rel:"noopener noreferrer"},u=e('<h2 id="微服务通讯方式-rpc-vs-rest" tabindex="-1"><a class="header-anchor" href="#微服务通讯方式-rpc-vs-rest" aria-hidden="true">#</a> 微服务通讯方式 RPC vs REST</h2><p>RPC：远程过程调用</p><p>REST：Restful</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220628070816.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="微服务框架需要考虑哪些治理环节" tabindex="-1"><a class="header-anchor" href="#微服务框架需要考虑哪些治理环节" aria-hidden="true">#</a> 微服务框架需要考虑哪些治理环节</h2><p>一个公司的微服务多了，就要需要考虑服务治理：</p><ul><li><p>软负载：蓝绿发布，灰度发布</p></li><li><p>指标（Metrics）：服务的调用量，耗时监控</p></li><li><p>调用链埋点：方便快速定位问题</p></li></ul><p>契约生成代码： 定义结构体可自动生成 json 格式， vscode 有插件。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220628070827.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',9),d={href:"http://dubbo.apache.org/en-us/",target:"_blank",rel:"noopener noreferrer"},h=e('<h2 id="微服务监控系统分层和监控架构" tabindex="-1"><a class="header-anchor" href="#微服务监控系统分层和监控架构" aria-hidden="true">#</a> 微服务监控系统分层和监控架构</h2><p>五个层次的监控：</p><ul><li>基础层施监控</li><li>系统层监控</li><li>应用层监控 <ul><li>url</li><li>sevice</li><li>mysql</li><li>cache 可用率</li><li>性能</li><li>qps</li></ul></li><li>业务层监控 <ul><li>核心指标监控</li><li>登录注册</li></ul></li><li>端用户体验监控</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220628070913.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>日志监控：Elasticsearch</li><li>metrics 监控</li><li>健康检查</li><li>调用链监控</li><li>告警系统</li></ul><p>比较典型的监控架构，大部分公司的流程</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220628070950.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>数据量比较大一般用 Kafka 作为缓冲队列。</p><p>Nagios 健康检测工具。</p><p>ELK：ELK 是 Elasticsearch、Logstash、Kibana 三大开源框架首字母大写简称。</p><h2 id="微服务的调用链监控该如何选型" tabindex="-1"><a class="header-anchor" href="#微服务的调用链监控该如何选型" aria-hidden="true">#</a> 微服务的调用链监控该如何选型</h2><p>调用链的监控　谷歌 2010 年提出来的。</p><p>通过 Span 来跟踪， RootSpan ChildSpan 跨进程时 会有 Trace di + parant span id</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220628071003.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>三个主流调用链监控系统的比较：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220628071013.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="微服务的容错限流是如何工作的" tabindex="-1"><a class="header-anchor" href="#微服务的容错限流是如何工作的" aria-hidden="true">#</a> 微服务的容错限流是如何工作的</h2><p>Netfiix Hystrix 具有熔断、隔离、限流、降级的功能 。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220628071025.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>说明：</p><ul><li>3 Cirult OPen 判断是否可以熔断， 是则执行 getFAllBack() 降级处理函数</li><li>5 run() 超时 也执行降级处理函数。</li><li>6 不成功也 执行处理函数 。</li><li>Calculate Cirult Health 就是在正常执行成功后计算是否需要熔断。</li></ul><h2 id="docker-容器部署技术-持续交付流水线" tabindex="-1"><a class="header-anchor" href="#docker-容器部署技术-持续交付流水线" aria-hidden="true">#</a> Docker 容器部署技术 &amp; 持续交付流水线</h2><p>docker 容器治理就是解决：环境不一致的问题。把依赖的所有包都打在镜像中。</p><p>统一、标准化的交付流水线。</p><p>UAT 环境： User Acceptance Test （用户验收测试）</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220628071059.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>发布模式： 蓝绿布置，灰度发布（金丝雀发布）。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220628071111.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="容器集群调度和基于容器的发布体系" tabindex="-1"><a class="header-anchor" href="#容器集群调度和基于容器的发布体系" aria-hidden="true">#</a> 容器集群调度和基于容器的发布体系</h2><p>资源调度框架 Mesos 架构</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220628071127.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>基于容器的云发布体系</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220628071152.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',33);function m(f,b){const t=g("ExternalLinkIcon");return l(),p("div",null,[o,i("p",null,[a("github : "),i("a",c,[a("https://github.com/ctripcorp/apollo"),n(t)])]),u,i("p",null,[a("阿里巴巴微服务治理生态：Dubbo "),i("a",d,[a("http://dubbo.apache.org/en-us/"),n(t)])]),h])}const _=r(s,[["render",m],["__file","11.微服务架构核心20讲笔记.html.vue"]]);export{_ as default};
