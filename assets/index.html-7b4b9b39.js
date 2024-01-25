import{_ as h}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as s,c as i,a as e,b as o,d as r,w as a,e as p}from"./app-ab18ad7c.js";const c={},d=p('<h1 id="zookeeper" tabindex="-1"><a class="header-anchor" href="#zookeeper" aria-hidden="true">#</a> ZooKeeper</h1><blockquote><p>ZooKeeper 是 Apache 的顶级项目。<strong>ZooKeeper 为分布式应用提供了高效且可靠的分布式协调服务，提供了诸如统一命名服务、配置管理和分布式锁等分布式的基础服务。在解决分布式数据一致性方面，ZooKeeper 并没有直接采用 Paxos 算法，而是采用了名为 ZAB 的一致性协议</strong>。</p><p>ZooKeeper 主要用来解决分布式集群中应用系统的一致性问题，它能提供基于类似于文件系统的目录节点树方式的数据存储。但是 ZooKeeper 并不是用来专门存储数据的，它的作用主要是用来<strong>维护和监控存储数据的状态变化。通过监控这些数据状态的变化，从而可以达到基于数据的集群管理</strong>。</p><p>很多大名鼎鼎的框架都基于 ZooKeeper 来实现分布式高可用，如：Dubbo、Kafka 等。</p><p>ZooKeeper 官方支持 Java 和 C 的 Client API。ZooKeeper 社区为大多数语言（.NET，python 等）提供非官方 API。</p></blockquote><h2 id="📖-内容" tabindex="-1"><a class="header-anchor" href="#📖-内容" aria-hidden="true">#</a> 📖 内容</h2>',3),_={id:"zookeeper-原理",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#zookeeper-原理","aria-hidden":"true"},"#",-1),E={id:"zookeeper-java-api",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#zookeeper-java-api","aria-hidden":"true"},"#",-1),k={id:"zookeeper-命令",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#zookeeper-命令","aria-hidden":"true"},"#",-1),B={id:"zookeeper-运维",tabindex:"-1"},Z=e("a",{class:"header-anchor",href:"#zookeeper-运维","aria-hidden":"true"},"#",-1),K={id:"zookeeper-acl",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#zookeeper-acl","aria-hidden":"true"},"#",-1),g=e("h2",{id:"📚-资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#📚-资料","aria-hidden":"true"},"#"),o(" 📚 资料")],-1),x=e("strong",null,"官方",-1),w={href:"http://zookeeper.apache.org/",target:"_blank",rel:"noopener noreferrer"},F={href:"https://cwiki.apache.org/confluence/display/ZOOKEEPER",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/apache/zookeeper",target:"_blank",rel:"noopener noreferrer"},z={href:"http://curator.apache.org/",target:"_blank",rel:"noopener noreferrer"},A=e("strong",null,"书籍",-1),v={href:"https://item.jd.com/12109713.html",target:"_blank",rel:"noopener noreferrer"},D={href:"https://item.jd.com/11622772.html",target:"_blank",rel:"noopener noreferrer"},j=e("strong",null,"文章",-1),I={href:"https://www.ibm.com/developerworks/cn/opensource/os-cn-zookeeper/index.html",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.cnblogs.com/felixzh/p/5869212.html",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/heibaiying/BigData-Notes/blob/master/notes/ZooKeeper%E7%AE%80%E4%BB%8B%E5%8F%8A%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5.md",target:"_blank",rel:"noopener noreferrer"},P={href:"https://draveness.me/zookeeper-chubby",target:"_blank",rel:"noopener noreferrer"},y={href:"http://www.jasongj.com/zookeeper/fastleaderelection/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper",target:"_blank",rel:"noopener noreferrer"},q={href:"https://blog.csdn.net/wwwsq/article/details/7644445",target:"_blank",rel:"noopener noreferrer"},J=e("h2",{id:"🚪-传送",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#🚪-传送","aria-hidden":"true"},"#"),o(" 🚪 传送")],-1),R={href:"https://dunwu.github.io/waterdrop/",target:"_blank",rel:"noopener noreferrer"};function T(O,G){const n=l("RouterLink"),t=l("ExternalLinkIcon");return s(),i("div",null,[d,e("h3",_,[u,o(),r(n,{to:"/15.%E5%88%86%E5%B8%83%E5%BC%8F/11.%E5%88%86%E5%B8%83%E5%BC%8F%E5%8D%8F%E5%90%8C/02.ZooKeeper/01.ZooKeeper%E5%8E%9F%E7%90%86.html"},{default:a(()=>[o("ZooKeeper 原理")]),_:1})]),e("h3",E,[f,o(),r(n,{to:"/15.%E5%88%86%E5%B8%83%E5%BC%8F/11.%E5%88%86%E5%B8%83%E5%BC%8F%E5%8D%8F%E5%90%8C/02.ZooKeeper/02.ZooKeeperJavaApi.html"},{default:a(()=>[o("ZooKeeper Java Api")]),_:1})]),e("h3",k,[b,o(),r(n,{to:"/15.%E5%88%86%E5%B8%83%E5%BC%8F/11.%E5%88%86%E5%B8%83%E5%BC%8F%E5%8D%8F%E5%90%8C/02.ZooKeeper/03.ZooKeeper%E5%91%BD%E4%BB%A4.html"},{default:a(()=>[o("ZooKeeper 命令")]),_:1})]),e("h3",B,[Z,o(),r(n,{to:"/15.%E5%88%86%E5%B8%83%E5%BC%8F/11.%E5%88%86%E5%B8%83%E5%BC%8F%E5%8D%8F%E5%90%8C/02.ZooKeeper/04.ZooKeeper%E8%BF%90%E7%BB%B4.html"},{default:a(()=>[o("ZooKeeper 运维")]),_:1})]),e("h3",K,[m,o(),r(n,{to:"/15.%E5%88%86%E5%B8%83%E5%BC%8F/11.%E5%88%86%E5%B8%83%E5%BC%8F%E5%8D%8F%E5%90%8C/02.ZooKeeper/05.ZooKeeperAcl.html"},{default:a(()=>[o("ZooKeeper Acl")]),_:1})]),g,e("ul",null,[e("li",null,[x,e("ul",null,[e("li",null,[e("a",w,[o("ZooKeeper 官网"),r(t)])]),e("li",null,[e("a",F,[o("ZooKeeper 官方文档"),r(t)])]),e("li",null,[e("a",C,[o("ZooKeeper Github"),r(t)])]),e("li",null,[e("a",z,[o("Apache Curator 官网"),r(t)])])])]),e("li",null,[A,e("ul",null,[e("li",null,[e("a",v,[o("《Hadoop 权威指南（第四版）》"),r(t)])]),e("li",null,[e("a",D,[o("《从 Paxos 到 Zookeeper 分布式一致性原理与实践》"),r(t)])])])]),e("li",null,[j,e("ul",null,[e("li",null,[e("a",I,[o("分布式服务框架 ZooKeeper -- 管理分布式环境中的数据"),r(t)])]),e("li",null,[e("a",N,[o("ZooKeeper 的功能以及工作原理"),r(t)])]),e("li",null,[e("a",L,[o("ZooKeeper 简介及核心概念"),r(t)])]),e("li",null,[e("a",P,[o("详解分布式协调服务 ZooKeeper"),r(t)])]),e("li",null,[e("a",y,[o("深入浅出 Zookeeper（一） Zookeeper 架构及 FastLeaderElection 机制"),r(t)])]),e("li",null,[e("a",V,[o("Introduction to Apache ZooKeeper"),r(t)])]),e("li",null,[e("a",q,[o("Zookeeper 的优缺点"),r(t)])])])])]),J,e("p",null,[o("◾ 💧 "),e("a",R,[o("钝悟的 IT 知识图谱"),r(t)]),o(" ◾")])])}const M=h(c,[["render",T],["__file","index.html.vue"]]);export{M as default};
