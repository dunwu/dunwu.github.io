import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as a,c as l,a as e,b as o,d as n,e as t}from"./app-05b4da95.js";const b={},u=t('<h1 id="dubbo-快速入门" tabindex="-1"><a class="header-anchor" href="#dubbo-快速入门" aria-hidden="true">#</a> Dubbo 快速入门</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Apache Dubbo 是一款高性能、轻量级的开源微服务框架。它提供了 <strong>RPC 通信</strong> 与 <strong>微服务治理</strong> 两大关键能力。</p><h3 id="dubbo-的核心功能" tabindex="-1"><a class="header-anchor" href="#dubbo-的核心功能" aria-hidden="true">#</a> Dubbo 的核心功能</h3><p>Dubbo 提供了六大核心能力：</p><ul><li><strong>面向接口代理的高性能 RPC 调用</strong>：提供高性能的基于代理的远程调用能力，服务以接口为粒度，为开发者屏蔽远程调用底层细节。</li><li><strong>智能容错和负载均衡</strong>：内置多种负载均衡策略，智能感知下游节点健康状况，显著减少调用延迟，提高系统吞吐量。</li><li><strong>服务自动注册和发现</strong>：支持多种注册中心服务，服务实例上下线实时感知。</li><li><strong>高度可扩展能力</strong>：遵循微内核+插件的设计原则，所有核心能力如 Protocol、Transport、Serialization 被设计为扩展点，平等对待内置实现和第三方实现。</li><li><strong>运行期流量调度</strong>：内置条件、脚本等路由策略，通过配置不同的路由规则，轻松实现灰度发布，同机房优先等功能。</li><li><strong>可视化的服务治理与运维</strong>：提供丰富服务治理、运维工具：随时查询服务元数据、服务健康状态及调用统计，实时下发路由策略、调整配置参数。</li></ul><h3 id="dubbo-的优势" tabindex="-1"><a class="header-anchor" href="#dubbo-的优势" aria-hidden="true">#</a> Dubbo 的优势</h3><p>Dubbo 提供了一站式微服务解决方案，包括服务定义、服务发现、服务通信到流量管控等几乎所有的服务治理能力，并且尝试从使用上对用户屏蔽底层细节，以提供更好的易用性。</p><p><strong>定义服务</strong>在 Dubbo 中非常简单与直观:</p><ul><li>使用与某种语言绑定的方式（如 Java 中可直接定义 Interface）</li><li>使用 Protobuf IDL 语言的方式。</li></ul><p>Dubbo 提供了丰富的<strong>通信模型</strong>：</p><ul><li>消费端异步请求(Client Side Asynchronous Request-Response)</li><li>提供端异步执行（Server Side Asynchronous Request-Response）</li><li>消费端请求流（Request Streaming）</li><li>提供端响应流（Response Streaming）</li><li>双向流式通信（Bidirectional Streaming）</li></ul><p>Dubbo 提供基于客户端的<strong>服务发现</strong>机制，可以采用多种方式启用服务发现：</p><ul><li>使用第三方的注册中心组件，如 Nacos、Zookeeper、Consul、Etcd 等。</li><li>将服务的组织与注册交给底层容器平台，如 Kubernetes，这被理解是一种更云原生的方式</li></ul><p>Dubbo 提供了多种<strong>流量控制</strong>手段，包括负载均衡、流量路由、请求超时、流量降级、重试等策略。基于这些基础能力可以轻松的实现更多场景化的路由方案，包括金丝雀发布、A/B 测试、权重路由、同区域优先等。</p>',15),h=e("strong",null,"扩展性",-1),d={href:"https://github.com/apache/dubbo-spi-extensions",target:"_blank",rel:"noopener noreferrer"},c=t('<p>Dubbo 在支持微服务集群方面有着非常大的规模与非常久的实践经验积累，是最具有企业规模化微服务实践话语权的框架之一。</p><p>Dubbo3 的设计是面向<strong>云原生</strong>的：</p><ul><li>首先是对云原生基础设施与部署架构的支持，包括 Kubernetes、Service Mesh 等。</li><li>另一方面，Dubbo 众多核心组件都已面向云原生升级，包括 Triple 协议、统一路由规则、对多语言支持。</li></ul><h2 id="dubbo3-新特性" tabindex="-1"><a class="header-anchor" href="#dubbo3-新特性" aria-hidden="true">#</a> Dubbo3 新特性</h2><h3 id="全新服务发现模型" tabindex="-1"><a class="header-anchor" href="#全新服务发现模型" aria-hidden="true">#</a> 全新服务发现模型</h3>',5),p=e("code",null,"接口",-1),_={href:"https://dubbo.apache.org/zh/docs/concepts/service-discovery",target:"_blank",rel:"noopener noreferrer"},g=t('<ul><li><strong>进一步提升了 Dubbo3 在大规模集群实践中的性能与稳定性</strong>。新模型可大幅提高系统资源利用率，降低 Dubbo 地址的单机内存消耗（50%），降低注册中心集群的存储与推送压力（90%）， Dubbo 可支持集群规模步入百万实例层次。</li><li><strong>打通与其他异构微服务体系的地址互发现障碍</strong>。新模型使得 Dubbo3 能实现与异构微服务体系如 Spring Cloud、Kubernetes Service、gRPC 等，在地址发现层面的互通， 为连通 Dubbo 与其他微服务体系提供可行方案。</li></ul><h3 id="下一代-rpc-通信协议" tabindex="-1"><a class="header-anchor" href="#下一代-rpc-通信协议" aria-hidden="true">#</a> 下一代 RPC 通信协议</h3><p>定义了全新的 RPC 通信协议 – Triple，一句话概括 Triple：它是基于 HTTP/2 上构建的 RPC 协议，完全兼容 gRPC，并在此基础上扩展出了更丰富的语义。 使用 Triple 协议，用户将获得以下能力</p><ul><li>更容易到适配网关、Mesh 架构，Triple 协议让 Dubbo 更方便的与各种网关、Sidecar 组件配合工作。</li><li>多语言友好，推荐配合 Protobuf 使用 Triple 协议，使用 IDL 定义服务，使用 Protobuf 编码业务数据。</li><li>流式通信支持。Triple 协议支持 Request Stream、Response Stream、Bi-direction Stream</li></ul><h3 id="云原生" tabindex="-1"><a class="header-anchor" href="#云原生" aria-hidden="true">#</a> 云原生</h3><p>Dubbo3 构建的业务应用可直接部署在 VM、Container、Kubernetes 等平台，Dubbo3 很好的解决了 Dubbo 服务与调度平台之间的生命周期对齐，Dubbo 服务发现地址 与容器平台绑定的问题。</p>',6),D={href:"https://dubbo.apache.org/zh/docs/new-in-dubbo3/",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"Dubbo3 规划了两种形态的 Service Mesh 方案，在不同的业务场景、不同的迁移阶段、不同的基础设施保障情况下，Dubbo 都会有 Mesh 方案可供选择， 而这进一步的都可以通过统一的控制面进行治理。",-1),S=e("ul",null,[e("li",null,"经典的基于 Sidecar 的 Service Mesh"),e("li",null,"无 Sidecar 的 Proxyless Mesh")],-1),x={href:"https://dubbo.apache.org/zh/docs/concepts/traffic-management",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"统一的流量治理规则",-1),R=e("h2",{id:"快速开始",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#快速开始","aria-hidden":"true"},"#"),o(" 快速开始")],-1),v=e("p",null,"定义服务",-1),P=e("h2",{id:"参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),o(" 参考资料")],-1),T=e("strong",null,"官方",-1),C={href:"https://github.com/apache/dubbo",target:"_blank",rel:"noopener noreferrer"},k={href:"https://dubbo.apache.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"};function M(B,I){const r=s("ExternalLinkIcon");return a(),l("div",null,[u,e("p",null,[o("Dubbo 的"),h,o("良好：通过 Filter、Router、Protocol 等几乎存在于每一个关键流程上的扩展点定义，我们可以丰富 Dubbo 的功能或实现与其他微服务配套系统的对接，包括 Transaction、Tracing 目前都有通过 SPI 扩展的实现方案，具体可以参见 Dubbo 扩展性的详情，也可以在 "),e("a",d,[o("apache/dubbo-spi-extensions"),n(r)]),o(" 项目中发现与更多的扩展实现。")]),c,e("p",null,[o("相比于 2.x 版本中的基于"),p,o("粒度的服务发现机制，3.x 引入了全新的"),e("a",_,[o("基于应用粒度的服务发现机制"),n(r)]),o("， 新模型带来两方面的巨大优势：")]),g,e("p",null,[o("在服务发现层面，Dubbo3 支持与 "),e("a",D,[o("Kubernetes Native Service"),n(r)]),o(" 的融合，目前限于 Headless Service。")]),f,S,e("p",null,[o("用户在 Dubbo2 中熟知的路由规则，在 3.x 中将被一套"),e("a",x,[m,n(r)]),o("取代，这套统一流量规则将覆盖未来 Dubbo3 的 Service Mesh、SDK 等多种部署形态， 实现对整套微服务体系的治理。")]),R,v,P,e("ul",null,[e("li",null,[T,e("ul",null,[e("li",null,[e("a",C,[o("Dubbo Github"),n(r)])]),e("li",null,[e("a",k,[o("Dubbo 官方文档"),n(r)])])])])])])}const z=i(b,[["render",M],["__file","01.Dubbo快速入门.html.vue"]]);export{z as default};
