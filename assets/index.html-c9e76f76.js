import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as E,c as h,a as t,b as e,d as a,w as o,e as i}from"./app-c2b0a364.js";const c={},s=t("h1",{id:"消息队列",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#消息队列","aria-hidden":"true"},"#"),e(" 消息队列")],-1),u=t("p",null,"消息队列（Message Queue，简称 MQ）技术是分布式应用间交换信息的一种技术。",-1),B=t("p",null,"消息队列主要解决应用耦合，异步消息，流量削锋等问题，实现高性能，高可用，可伸缩和最终一致性架构。是大型分布式系统不可缺少的中间件。",-1),f={href:"https://dunwu.github.io/waterdrop/pages/1fd240/",target:"_blank",rel:"noopener noreferrer"},_=t("h2",{id:"内容",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#内容","aria-hidden":"true"},"#"),e(" 内容")],-1),k=t("h3",{id:"mq-综合",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#mq-综合","aria-hidden":"true"},"#"),e(" MQ 综合")],-1),A=t("h3",{id:"kafka",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#kafka","aria-hidden":"true"},"#"),e(" Kafka")],-1),F=t("h3",{id:"rocketmq",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#rocketmq","aria-hidden":"true"},"#"),e(" RocketMQ")],-1),M=t("h3",{id:"其他-mq",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#其他-mq","aria-hidden":"true"},"#"),e(" 其他 MQ")],-1),Q=i('<h2 id="技术对比" tabindex="-1"><a class="header-anchor" href="#技术对比" aria-hidden="true">#</a> 技术对比</h2><table><thead><tr><th>特性</th><th>ActiveMQ</th><th>RabbitMQ</th><th>RocketMQ</th><th>Kafka</th></tr></thead><tbody><tr><td>单机吞吐量</td><td>万级，比 RocketMQ、Kafka 低一个数量级</td><td>同 ActiveMQ</td><td>10 万级，支撑高吞吐</td><td>10 万级，高吞吐，一般配合大数据类的系统来进行实时数据计算、日志采集等场景</td></tr><tr><td>topic 数量对吞吐量的影响</td><td></td><td></td><td>topic 可以达到几百/几千的级别，吞吐量会有较小幅度的下降，这是 RocketMQ 的一大优势，在同等机器下，可以支撑大量的 topic</td><td>topic 从几十到几百个时候，吞吐量会大幅度下降，在同等机器下，Kafka 尽量保证 topic 数量不要过多，如果要支撑大规模的 topic，需要增加更多的机器资源</td></tr><tr><td>时效性</td><td>ms 级</td><td>微秒级，这是 RabbitMQ 的一大特点，延迟最低</td><td>ms 级</td><td>延迟在 ms 级以内</td></tr><tr><td>可用性</td><td>高，基于主从架构实现高可用</td><td>同 ActiveMQ</td><td>非常高，分布式架构</td><td>非常高，分布式，一个数据多个副本，少数机器宕机，不会丢失数据，不会导致不可用</td></tr><tr><td>消息可靠性</td><td>有较低的概率丢失数据</td><td>基本不丢</td><td>经过参数优化配置，可以做到 0 丢失</td><td>同 RocketMQ</td></tr><tr><td>功能支持</td><td>MQ 领域的功能极其完备</td><td>基于 erlang 开发，并发能力很强，性能极好，延时很低</td><td>MQ 功能较为完善，还是分布式的，扩展性好</td><td>功能较为简单，主要支持简单的 MQ 功能，在大数据领域的实时计算以及日志采集被大规模使用</td></tr></tbody></table><p>综上，各种对比之后，有如下建议：</p>',3),p=t("li",null,"一般的业务系统要引入 MQ，最早大家都用 ActiveMQ，但是现在确实大家用的不多了，没经过大规模吞吐量场景的验证，社区也不是很活跃，所以大家还是算了吧，我个人不推荐用这个了；",-1),b=t("li",null,"后来大家开始用 RabbitMQ，但是确实 erlang 语言阻止了大量的 Java 工程师去深入研究和掌控它，对公司而言，几乎处于不可控的状态，但是确实人家是开源的，比较稳定的支持，活跃度也高；",-1),m={href:"https://github.com/apache/rocketmq",target:"_blank",rel:"noopener noreferrer"},K=t("li",null,[e("所以"),t("strong",null,"中小型公司"),e("，技术实力较为一般，技术挑战不是特别高，用 RabbitMQ 是不错的选择；"),t("strong",null,"大型公司"),e("，基础架构研发实力较强，用 RocketMQ 是很好的选择。")],-1),C=t("li",null,[e("如果是"),t("strong",null,"大数据领域"),e("的实时计算、日志采集等场景，用 Kafka 是业内标准的，绝对没问题，社区活跃度很高，绝对不会黄，何况几乎是全世界这个领域的事实性规范。")],-1),g=t("h2",{id:"📚-资料",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#📚-资料","aria-hidden":"true"},"#"),e(" 📚 资料")],-1),R=t("strong",null,"Kafka",-1),x={href:"https://github.com/apache/kafka",target:"_blank",rel:"noopener noreferrer"},v={href:"http://kafka.apache.org/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://kafka.apache.org/documentation/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/apachecn/kafka-doc-zh",target:"_blank",rel:"noopener noreferrer"},L=t("strong",null,"ActiveMQ",-1),N={href:"http://activemq.apache.org/",target:"_blank",rel:"noopener noreferrer"},V=t("h2",{id:"🚪-传送",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#🚪-传送","aria-hidden":"true"},"#"),e(" 🚪 传送")],-1),D={href:"https://dunwu.github.io/waterdrop/",target:"_blank",rel:"noopener noreferrer"};function I(y,G){const n=d("ExternalLinkIcon"),l=d("RouterLink");return E(),h("div",null,[s,t("blockquote",null,[u,B,t("p",null,[e("如果想深入学习各种消息队列产品，建议先了解一下 "),t("a",f,[e("消息队列基本原理"),a(n)]),e(" ，有助于理解消息队列特性的实现和设计思路。")])]),_,k,t("ul",null,[t("li",null,[a(l,{to:"/15.%E5%88%86%E5%B8%83%E5%BC%8F/21.%E5%88%86%E5%B8%83%E5%BC%8F%E9%80%9A%E4%BF%A1/02.MQ/00.MQ%E7%BB%BC%E5%90%88/01.%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97%E9%9D%A2%E8%AF%95.html"},{default:o(()=>[e("消息队列面试")]),_:1})]),t("li",null,[a(l,{to:"/15.%E5%88%86%E5%B8%83%E5%BC%8F/21.%E5%88%86%E5%B8%83%E5%BC%8F%E9%80%9A%E4%BF%A1/02.MQ/00.MQ%E7%BB%BC%E5%90%88/02.%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86.html"},{default:o(()=>[e("消息队列基本原理")]),_:1})])]),A,t("ul",null,[t("li",null,[a(l,{to:"/15.%E5%88%86%E5%B8%83%E5%BC%8F/21.%E5%88%86%E5%B8%83%E5%BC%8F%E9%80%9A%E4%BF%A1/02.MQ/01.Kafka/01.Kafka%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8.html"},{default:o(()=>[e("Kafka 快速入门")]),_:1})]),t("li",null,[a(l,{to:"/15.%E5%88%86%E5%B8%83%E5%BC%8F/21.%E5%88%86%E5%B8%83%E5%BC%8F%E9%80%9A%E4%BF%A1/02.MQ/01.Kafka/02.Kafka%E7%94%9F%E4%BA%A7%E8%80%85.html"},{default:o(()=>[e("Kafka 生产者")]),_:1})]),t("li",null,[a(l,{to:"/15.%E5%88%86%E5%B8%83%E5%BC%8F/21.%E5%88%86%E5%B8%83%E5%BC%8F%E9%80%9A%E4%BF%A1/02.MQ/01.Kafka/03.Kafka%E6%B6%88%E8%B4%B9%E8%80%85.html"},{default:o(()=>[e("Kafka 消费者")]),_:1})]),t("li",null,[a(l,{to:"/15.%E5%88%86%E5%B8%83%E5%BC%8F/21.%E5%88%86%E5%B8%83%E5%BC%8F%E9%80%9A%E4%BF%A1/02.MQ/01.Kafka/04.Kafka%E9%9B%86%E7%BE%A4.html"},{default:o(()=>[e("Kafka 集群")]),_:1})]),t("li",null,[a(l,{to:"/15.%E5%88%86%E5%B8%83%E5%BC%8F/21.%E5%88%86%E5%B8%83%E5%BC%8F%E9%80%9A%E4%BF%A1/02.MQ/01.Kafka/05.Kafka%E5%8F%AF%E9%9D%A0%E4%BC%A0%E8%BE%93.html"},{default:o(()=>[e("Kafka 可靠传输")]),_:1})]),t("li",null,[a(l,{to:"/15.%E5%88%86%E5%B8%83%E5%BC%8F/21.%E5%88%86%E5%B8%83%E5%BC%8F%E9%80%9A%E4%BF%A1/02.MQ/01.Kafka/06.Kafka%E5%AD%98%E5%82%A8.html"},{default:o(()=>[e("Kafka 存储")]),_:1})]),t("li",null,[a(l,{to:"/15.%E5%88%86%E5%B8%83%E5%BC%8F/21.%E5%88%86%E5%B8%83%E5%BC%8F%E9%80%9A%E4%BF%A1/02.MQ/01.Kafka/07.Kafka%E6%B5%81%E5%BC%8F%E5%A4%84%E7%90%86.html"},{default:o(()=>[e("Kafka 流式处理")]),_:1})]),t("li",null,[a(l,{to:"/15.%E5%88%86%E5%B8%83%E5%BC%8F/21.%E5%88%86%E5%B8%83%E5%BC%8F%E9%80%9A%E4%BF%A1/02.MQ/01.Kafka/08.Kafka%E8%BF%90%E7%BB%B4.html"},{default:o(()=>[e("Kafka 运维")]),_:1})])]),F,t("ul",null,[t("li",null,[a(l,{to:"/15.%E5%88%86%E5%B8%83%E5%BC%8F/21.%E5%88%86%E5%B8%83%E5%BC%8F%E9%80%9A%E4%BF%A1/02.MQ/02.RocketMQ/01.RocketMQ%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8.html"},{default:o(()=>[e("RocketMQ")]),_:1})])]),M,t("ul",null,[t("li",null,[a(l,{to:"/15.%E5%88%86%E5%B8%83%E5%BC%8F/21.%E5%88%86%E5%B8%83%E5%BC%8F%E9%80%9A%E4%BF%A1/02.MQ/99.%E5%85%B6%E4%BB%96MQ/01.ActiveMQ.html"},{default:o(()=>[e("ActiveMQ")]),_:1})])]),Q,t("ul",null,[p,b,t("li",null,[e("不过现在确实越来越多的公司会去用 RocketMQ，确实很不错，毕竟是阿里出品，但社区可能有突然黄掉的风险（目前 RocketMQ 已捐给 "),t("a",m,[e("Apache"),a(n)]),e("，但 GitHub 上的活跃度其实不算高）对自己公司技术实力有绝对自信的，推荐用 RocketMQ，否则回去老老实实用 RabbitMQ 吧，人家有活跃的开源社区，绝对不会黄。")]),K,C]),g,t("ul",null,[t("li",null,[R,t("ul",null,[t("li",null,[t("a",x,[e("Kafka Github"),a(n)])]),t("li",null,[t("a",v,[e("Kafka 官网"),a(n)])]),t("li",null,[t("a",q,[e("Kafka 官方文档"),a(n)])]),t("li",null,[t("a",w,[e("Kafka 中文文档"),a(n)])])])]),t("li",null,[L,t("ul",null,[t("li",null,[t("a",N,[e("ActiveMQ 官网"),a(n)])])])])]),V,t("p",null,[e("◾ 💧 "),t("a",D,[e("钝悟的 IT 知识图谱"),a(n)]),e(" ◾")])])}const H=r(c,[["render",I],["__file","index.html.vue"]]);export{H as default};
