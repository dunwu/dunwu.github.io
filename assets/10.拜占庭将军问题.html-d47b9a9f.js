import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as s,a as e,b as r,d as n,e as l}from"./app-ab18ad7c.js";const p={},g=e("h1",{id:"拜占庭将军问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#拜占庭将军问题","aria-hidden":"true"},"#"),r(" 拜占庭将军问题")],-1),c={href:"https://zh.wikipedia.org/wiki/%E8%8E%B1%E6%96%AF%E5%88%A9%C2%B7%E5%85%B0%E6%B3%A2%E7%89%B9",target:"_blank",rel:"noopener noreferrer"},h={href:"https://zh.wikipedia.org/wiki/%E5%AF%B9%E7%AD%89%E7%BD%91%E7%BB%9C",target:"_blank",rel:"noopener noreferrer"},d={href:"https://zh.wikipedia.org/wiki/%E5%88%86%E5%B8%83%E5%BC%8F%E8%A8%88%E7%AE%97",target:"_blank",rel:"noopener noreferrer"},_=l('<h2 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述" aria-hidden="true">#</a> 问题描述</h2><p>一群拜占庭将军各领一支军队共同围困一座城市。</p><p>为了简化问题，军队的行动策略只有两种：<strong>进攻</strong>（Attack，后面简称 A）或 <strong>撤退</strong>（Retreat，后面简称 R）。如果这些军队不是统一进攻或撤退，就可能因兵力不足导致失败。因此，<strong>将军们通过投票来达成一致策略：同进或同退</strong>。</p><p>因为将军们分别在城市的不同方位，所以他们只能<strong>通过信使互相联系</strong>。在投票过程中，<strong>每位将军都将自己的投票信息（A 或 R）通知其他所有将军</strong>，这样一来每位将军根据自己的投票和其他所有将军送来的信息就可以分析出共同的投票结果而决定行动策略。</p><p>这个抽象模型的问题在于：<strong>将军中可能存在叛徒，他们不仅会发出误导性投票，还可能选择性地发送投票信息</strong>。</p><p>由于将军之间需要通过信使通讯，叛变将军可能通过伪造信件来以其他将军的身份发送假投票。而即使在保证所有将军忠诚的情况下，也不能排除信使被敌人截杀，甚至被敌人间谍替换等情况。因此很难通过保证人员可靠性及通讯可靠性来解决问题。</p><p>假使那些忠诚（或是没有出错）的将军仍然能通过多数决定来决定他们的战略，便称达到了拜占庭容错。在此，票都会有一个默认值，若消息（票）没有被收到，则使用此默认值来投票。</p><p>上述的故事可以映射到分布式系统中，<em>将军代表分布式系统中的节点；信使代表通信系统；叛徒代表故障或异常</em>。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210704104211.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="问题分析" tabindex="-1"><a class="header-anchor" href="#问题分析" aria-hidden="true">#</a> 问题分析</h2><blockquote><p>兰伯特针对拜占庭将军问题，给出了两个解决方案：口头协议和书面协议。</p><p>本文介绍一下口头协议。</p></blockquote><p>在口头协议中，拜占庭将军问题被简化为<strong>将军 - 副官</strong>模型，其核心规则如下：</p><ul><li>忠诚的副官遵守同一命令。</li><li>若将军是忠诚的，所有忠诚的副官都执行他的命令。</li><li><strong>如果叛徒人数为 m，将军人数不能少于 3m + 1</strong> ，那么拜占庭将军问题就能解决了。——关于这个公式，可以不必深究，如果对推导过程感兴趣，可以参考论文。</li></ul><p><strong>示例一、叛徒人数为 1，将军人数为 3</strong></p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202310200748580.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这个示例中，将军人数不满足 3m + 1，无法保证忠诚的副官都执行将军的命令。</p><p><strong>示例二、叛徒人数为 1，将军人数为 4</strong></p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202310200748488.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这个示例中，将军人数满足 3m + 1，无论是副官中有叛徒，还是将军是叛徒，都能保证忠诚的副官执行将军的命令。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',20),u={href:"https://zh.wikipedia.org/wiki/%E6%8B%9C%E5%8D%A0%E5%BA%AD%E5%B0%86%E5%86%9B%E9%97%AE%E9%A2%98",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.bilibili.com/video/av78588312/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://lamport.azurewebsites.net/pubs/byz.pdf",target:"_blank",rel:"noopener noreferrer"};function E(b,k){const t=o("ExternalLinkIcon");return i(),s("div",null,[g,e("blockquote",null,[e("p",null,[r("拜占庭将军问题是由"),e("a",c,[r("莱斯利·兰波特"),n(t)]),r("在其同名论文中提出的"),e("a",h,[r("分布式对等网络"),n(t)]),r("通信容错问题。其实是借拜占庭将军的例子，抛出了分布式共识性问题，并探讨和论证了解决的方法。")]),e("p",null,[r("在"),e("a",d,[r("分布式计算"),n(t)]),r("中，不同的节点通过通讯交换信息达成共识而按照同一套协作策略行动。但有时候，系统中的节点可能出错而发送错误的信息，用于传递信息的通讯网络也可能导致信息损坏，使得网络中不同的成员关于全体协作的策略得出不同结论，从而破坏系统一致性。拜占庭将军问题被认为是容错性问题中最难的问题类型之一。")])]),_,e("ul",null,[e("li",null,[e("a",u,[r("Wiki - 拜占庭将军问题"),n(t)])]),e("li",null,[e("a",f,[r("拜占庭将军问题视频讲解"),n(t)]),r(" - 李永乐老师讲解的通俗易懂")]),e("li",null,[e("a",m,[r("The Byzantine Generals Problem"),n(t)])])])])}const A=a(p,[["render",E],["__file","10.拜占庭将军问题.html.vue"]]);export{A as default};
