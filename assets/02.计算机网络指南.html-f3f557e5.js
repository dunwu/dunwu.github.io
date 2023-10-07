import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as d,c,a as e,b as o,d as t,w as n,e as l}from"./app-05b4da95.js";const h={},u=l('<h1 id="计算机网络指南" tabindex="-1"><a class="header-anchor" href="#计算机网络指南" aria-hidden="true">#</a> 计算机网络指南</h1><blockquote><p>计算机网络是指将地理位置不同的具有独立功能的多台计算机及其外部设备，通过通信线路连接起来，在网络操作系统，网络管理软件及网络通信协议的管理和协调下，实现资源共享和信息传递的计算机系统。</p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/network.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="💡-指南" tabindex="-1"><a class="header-anchor" href="#💡-指南" aria-hidden="true">#</a> 💡 指南</h2><p>学习之前，先看一下入门三问：</p><blockquote><p><strong>一、什么是计算机网络？</strong></p><p>计算机网络是指将地理位置不同的具有独立功能的多台计算机及其外部设备，通过通信线路连接起来，在网络操作系统，网络管理软件及网络通信协议的管理和协调下，实现资源共享和信息传递的计算机系统。</p><p>——摘自百度百科</p></blockquote><blockquote><p><strong>二、为什么学习计算机网络？</strong></p><p>计算机网络是计算机科学的基础课程，也是计算机专业考研必考科目，可见其重要性。作为一名程序员，了解计算机网络，对于 Web 领域，通信领域的开发有莫大的帮助。</p><p>在浏览器中访问网页的原理是什么？Wifi 是如何工作的？防火墙是如何保障网络安全的？什么是安全证书？Cookie 和 Session 是什么东西？。。。</p><p>如果你接触过这些技术，如果你想了解这些技术的原理，那么你就有必要学习一下计算机网络了。</p></blockquote><blockquote><p><strong>三、如何学习计算机网络？</strong></p><p>本人有 2 年通信领域开发经验，从事通信设备上的协议开发。就我个人的学习经验来看，学习计算机网络可以分为以下阶段：</p><ul><li><strong>基础阶段——一般性的了解网络协议分层及各层功能</strong><ul><li>了解计算机网络协议分层（OSI）有哪些层，分层的依据是什么（即每层的功能是什么）</li><li>了解每层的主要通信设备有哪些；</li><li>了解每层有哪些重要网络协议，这些协议有什么作用，基本原理是什么？</li><li>了解每层的传输数据形式（如：报文、帧等）</li></ul></li><li><strong>进阶阶段——系统学习计算机网络知识，将各层主要协议功能串联起来</strong><ul><li>学习 TCP/IP 详解 卷 1、卷 2、卷 3（内容详实，但文字较为晦涩，不适合初学者）</li></ul></li><li><strong>专业阶段——根据业务领域，有针对性的学习</strong><ul><li>网络协议很多，而且专业性非常强。精通所有协议，几乎是不可能的，所以有必要根据自己的业务领域，有针对性的深入学习协议。如果你是做 web 开发，那么你很有必要认真学习一下 HTTP、DNS 协议；如果你是做路由器、交换机领域通信开发，那么你应该更深入学习一下 IP/TCP/UDP 协议。。。</li><li>如何深入学习协议，最好的学习方式，就是深入学习 RFC，并结合实际的协议报文去了解。</li></ul></li></ul></blockquote><h3 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念" aria-hidden="true">#</a> 核心概念</h3>',9),p=e("strong",null,"计算机网络",-1),_={href:"https://zh.wikipedia.org/wiki/%E9%9B%BB%E5%AD%90%E8%A8%88%E7%AE%97%E6%A9%9F",target:"_blank",rel:"noopener noreferrer"},g={href:"https://zh.wikipedia.org/wiki/%E8%BD%AF%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"},b={href:"https://zh.wikipedia.org/wiki/%E7%A1%AC%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"},k={href:"https://zh.wikipedia.org/wiki/%E8%BB%9F%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"},f={href:"https://zh.wikipedia.org/wiki/%E5%85%B1%E4%BA%AB",target:"_blank",rel:"noopener noreferrer"},B={href:"https://zh.wikipedia.org/wiki/%E4%BF%A1%E6%81%AF",target:"_blank",rel:"noopener noreferrer"},E={href:"https://zh.wikipedia.org/wiki/%E9%80%9A%E4%BF%A1",target:"_blank",rel:"noopener noreferrer"},w=e("li",null,[e("strong",null,"互联网"),o(" - 互联网（Internet），即网络的网络。")],-1),m=l('<h3 id="拓扑结构" tabindex="-1"><a class="header-anchor" href="#拓扑结构" aria-hidden="true">#</a> 拓扑结构</h3><p>计算机网络的拓扑结构可分为：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/overview/network-topological-structure.gif" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>网型拓扑网型网（Mesh network）</li><li>环型拓扑环型网（Ring network）</li><li>星型拓扑星型网（Star network）</li><li>树状拓扑树型网（Tree network）</li><li>总线拓扑总线网（Bus network）</li></ul><h3 id="作用范围" tabindex="-1"><a class="header-anchor" href="#作用范围" aria-hidden="true">#</a> 作用范围</h3><ul><li>广域网 WAN（Wide Area Network）</li><li>城域网 MAN（Metropolitan Area Network）</li><li>局域网 LAN（Local Area Network）</li><li>个人区域网 PAN（Personal Area Network）</li></ul><h3 id="性能指标" tabindex="-1"><a class="header-anchor" href="#性能指标" aria-hidden="true">#</a> 性能指标</h3><ul><li><strong>速率</strong> - 速率的单位是 bit/s（比特每秒）。</li><li><strong>带宽（bandwidth）</strong> - 带宽有以下两种不同的意义。 <ul><li>信号的带宽是指该信号所包含的各种不同频率成分所占据的频率范围。这种意义的带宽的单位是赫 （或千赫，兆赫，吉赫等）。</li><li>网络的带宽表示在单位时间内从网络中的某一点到另一点所能通过的<strong>最高数据率</strong>。这种意义的带宽的单位是 bit/s（比特每秒）。</li></ul></li><li><strong>吞吐量（throughput）</strong> - 吞吐量表示在单位时间内通过某个网络（或信道、接口）的数据量。例如，对于一个 100 Mbit/s 的以太网，其额定速率是 100 Mbit/s。</li><li><strong>时延（delay）</strong><ul><li>总时延 = 排队时延 + 处理时延 + 传输时延 + 传播时延</li></ul></li></ul><h2 id="网络分层" tabindex="-1"><a class="header-anchor" href="#网络分层" aria-hidden="true">#</a> 网络分层</h2><blockquote><p>计算机网络如何分层？各层的作用是什么？各层的主要协议、设备分别是什么？</p><p>这是学习计算机网络知识宏观层面必须要了解的核心点。知道了这些，对于网络的体系结构就基本上了解了。</p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/overview/network-layers.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>计算机网络分层一般有三种划分体系：OSI 分层；五层协议分层；TCP/IP 协议分层。</p><ul><li>OSI 的七层体系结构概念清楚，理论完整，但是比较复杂且不实用，所以并不流行。</li><li>五层协议分层是一种折中方案，在现实中更为流行。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/overview/网络分层架构图.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="物理层" tabindex="-1"><a class="header-anchor" href="#物理层" aria-hidden="true">#</a> 物理层</h3>',15),P=e("p",null,"物理层（Physical Layer）只接收和发送一串比特(bit)流，不考虑信息的意义和信息结构。",-1),C=e("ul",null,[e("li",null,"关键词：调制、解调、数字信号、模拟信号、通信媒介、信道复用"),e("li",null,"数据单元：比特流。"),e("li",null,"典型设备：光纤、同轴电缆、双绞线、中继器和集线器。")],-1),A=e("h3",{id:"数据链路层",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#数据链路层","aria-hidden":"true"},"#"),o(" 数据链路层")],-1),T=e("p",null,"网络层针对的还是主机之间的数据传输服务，而主机之间可以有很多链路，数据链路层（Data Link Layer）就是为同一链路的主机提供数据传输服务。数据链路层把网络层传下来的分组封装成帧。",-1),x=l('<ul><li>关键词：点对点信道、广播信道、<code>PPP</code>、<code>CSMA/CD</code>、局域网、以太网、<code>MAC</code>、适配器、集线器、网桥、交换机</li><li>主要协议：<code>PPP</code>、<code>CSMA/CD</code> 等。</li><li>数据单元：帧（frame）。</li><li>典型设备：二层交换机、网桥、网卡。</li></ul><h3 id="网络层" tabindex="-1"><a class="header-anchor" href="#网络层" aria-hidden="true">#</a> 网络层</h3>',2),D=e("p",null,"网络层（network layer）为分组交换网上的不同主机提供通信服务。在发送数据时，网络层把运输层产生的报文段或用户数据报封装成分组或包进行传送。",-1),N=l('<ul><li>关键词：<code>IP</code>、<code>ICMP</code>、<code>ARP</code>、路由</li><li>主要协议：<code>IP</code>。</li><li>数据单元：IP 数据报（packet）。</li><li>典型设备：网关、路由器。</li></ul><h3 id="传输层" tabindex="-1"><a class="header-anchor" href="#传输层" aria-hidden="true">#</a> 传输层</h3>',2),q=e("p",null,"传输层（transport layer）为两台主机中进程间的通信提供通用的数据传输服务。",-1),I=l('<ul><li>关键词：<code>UDP</code>、<code>TCP</code>、滑动窗口、拥塞控制、三次握手</li><li>主要协议：<code>TCP</code>、<code>UDP</code>。</li><li>数据单元：报文段（segment）或用户数据报。</li></ul><h3 id="会话层" tabindex="-1"><a class="header-anchor" href="#会话层" aria-hidden="true">#</a> ~<sub>会话层~</sub></h3><blockquote><p>~~会话层（Session Layer）不参与具体的传输，它提供包括访问验证和会话管理在内的建立和维护应用之间通信的机制。~~</p></blockquote><h3 id="表示层" tabindex="-1"><a class="header-anchor" href="#表示层" aria-hidden="true">#</a> ~<sub>表示层~</sub></h3><blockquote><p>~~表示层（Presentation Layer）是为在应用过程之间传送的信息提供表示方法的服务，它关心的只是发出信息的语法与语义。表示层要完成某些特定的功能，主要有不同数据编码格式的转换，提供数据压缩、解压缩服务，对数据进行加密、解密。~~</p></blockquote><h3 id="应用层" tabindex="-1"><a class="header-anchor" href="#应用层" aria-hidden="true">#</a> 应用层</h3>',6),S=e("p",null,"应用层（application layer）通过应用进程间的交互来完成特定网络应用。应用层协议定义的是应用进程间通信和交互的规则。",-1),y=l('<ul><li>关键词：<code>HTTP</code>、<code>DNS</code>、<code>FTP</code>、<code>TELNET</code>、<code>DHCP</code></li><li>主要协议：<code>HTTP</code>、<code>DNS</code>、<code>SMTP</code>、<code>Telnet</code>、<code>FTP</code>、<code>SNMP</code> 等。</li><li>数据单元：报文（message）。</li></ul><h2 id="资源" tabindex="-1"><a class="header-anchor" href="#资源" aria-hidden="true">#</a> 资源</h2>',2),L={href:"https://book.douban.com/subject/10746113/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://book.douban.com/subject/1088054/",target:"_blank",rel:"noopener noreferrer"},F={href:"https://book.douban.com/subject/1087767/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://book.douban.com/subject/1058634/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://book.douban.com/subject/25856314/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://book.douban.com/subject/25863515/",target:"_blank",rel:"noopener noreferrer"},H={href:"https://book.douban.com/subject/24737674/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://book.douban.com/subject/26960678/",target:"_blank",rel:"noopener noreferrer"},W={href:"https://www.rfc-editor.org/",target:"_blank",rel:"noopener noreferrer"},U={href:"https://www.wireshark.org/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://www.getpostman.com/",target:"_blank",rel:"noopener noreferrer"},O=e("h2",{id:"🚪-传送",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#🚪-传送","aria-hidden":"true"},"#"),o(" 🚪 传送")],-1),X={href:"https://github.com/dunwu/blog",target:"_blank",rel:"noopener noreferrer"};function G(J,K){const r=a("ExternalLinkIcon"),i=a("RouterLink");return d(),c("div",null,[u,e("ul",null,[e("li",null,[p,o(" - 计算机网络（computer network），通常也简称网络，是利用通信设备和线路将地理位置不同的、功能独立的多个"),e("a",_,[o("计算机"),t(r)]),o("系统连接起来，以功能完善的网络"),e("a",g,[o("软件"),t(r)]),o("实现网络的"),e("a",b,[o("硬件"),t(r)]),o("、"),e("a",k,[o("软件"),t(r)]),o("及资源"),e("a",f,[o("共享"),t(r)]),o("和"),e("a",B,[o("信息"),t(r)]),o("传递的系统。简单的说即连接两台或多台计算机进行"),e("a",E,[o("通信"),t(r)]),o("的系统。")]),w]),m,e("blockquote",null,[P,e("p",null,[o("扩展阅读："),t(i,{to:"/13.%E7%BD%91%E7%BB%9C/01.%E7%BD%91%E7%BB%9C%E7%BB%BC%E5%90%88/11.%E7%89%A9%E7%90%86%E5%B1%82.html"},{default:n(()=>[o("计算机网络之物理层")]),_:1})])]),C,A,e("blockquote",null,[T,e("p",null,[o("扩展阅读："),t(i,{to:"/13.%E7%BD%91%E7%BB%9C/01.%E7%BD%91%E7%BB%9C%E7%BB%BC%E5%90%88/12.%E6%95%B0%E6%8D%AE%E9%93%BE%E8%B7%AF%E5%B1%82.html"},{default:n(()=>[o("计算机网络之数据链路层")]),_:1})])]),x,e("blockquote",null,[D,e("p",null,[o("扩展阅读："),t(i,{to:"/13.%E7%BD%91%E7%BB%9C/01.%E7%BD%91%E7%BB%9C%E7%BB%BC%E5%90%88/13.%E7%BD%91%E7%BB%9C%E5%B1%82.html"},{default:n(()=>[o("计算机网络之网络层")]),_:1})])]),N,e("blockquote",null,[q,e("p",null,[o("扩展阅读："),t(i,{to:"/13.%E7%BD%91%E7%BB%9C/01.%E7%BD%91%E7%BB%9C%E7%BB%BC%E5%90%88/14.%E4%BC%A0%E8%BE%93%E5%B1%82.html"},{default:n(()=>[o("计算机网络之网络层")]),_:1})])]),I,e("blockquote",null,[S,e("p",null,[o("扩展阅读："),t(i,{to:"/13.%E7%BD%91%E7%BB%9C/01.%E7%BD%91%E7%BB%9C%E7%BB%BC%E5%90%88/15.%E5%BA%94%E7%94%A8%E5%B1%82.html"},{default:n(()=>[o("计算机网络之应用层")]),_:1})])]),y,e("ul",null,[e("li",null,[o("书 "),e("ul",null,[e("li",null,[e("a",L,[o("HTTP 权威指南"),t(r)])]),e("li",null,[e("a",z,[o("TCP/IP 详解 卷 1：协议"),t(r)])]),e("li",null,[e("a",F,[o("TCP/IP 详解 卷 2：实现"),t(r)])]),e("li",null,[e("a",M,[o("TCP/IP 详解 卷 3：TCP 事务协议、HTTP、NNTP 和 UNIX 域协议"),t(r)])]),e("li",null,[e("a",j,[o("Web 性能权威指南"),t(r)])]),e("li",null,[e("a",v,[o("图解 HTTP"),t(r)])]),e("li",null,[e("a",H,[o("图解 TCP/IP"),t(r)])]),e("li",null,[e("a",R,[o("计算机网络（第 7 版）"),t(r)]),o(" - 谢希仁")])])]),e("li",null,[o("站点 "),e("ul",null,[e("li",null,[e("a",W,[o("https://www.rfc-editor.org/"),t(r)]),o(" - 在线查阅、下载 RFC 文档")])])]),e("li",null,[o("工具 "),e("ul",null,[e("li",null,[e("a",U,[o("WireShark"),t(r)])]),e("li",null,[e("a",V,[o("Postman"),t(r)])])])])]),O,e("p",null,[o("| "),e("a",X,[o("回首頁"),t(r)]),o(" |")])])}const Z=s(h,[["render",G],["__file","02.计算机网络指南.html.vue"]]);export{Z as default};
