import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as h,c as o,a,b as e,d as t,e as i}from"./app-2811837c.js";const c={},l=i('<h1 id="计算机网络之数据链路层" tabindex="-1"><a class="header-anchor" href="#计算机网络之数据链路层" aria-hidden="true">#</a> 计算机网络之数据链路层</h1><blockquote><p><strong>数据链路层（Data Link Layer）</strong> - 网络层针对的还是主机之间的数据传输服务，而主机之间可以有很多链路，链路层协议就是为同一链路的主机提供数据传输服务。数据链路层把网络层传下来的分组封装成帧。</p><ul><li>主要协议：<code>PPP</code>、<code>CSMA/CD</code> 等。</li><li>数据单元：帧（frame）。</li><li>典型设备：二层交换机、网桥、网卡。</li></ul></blockquote><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><ul><li>链路是从一个节点到相邻节点的一段物理线路，数据链路则是在链路的基础上增加了一些必要的硬件（网络适配器）和软件（协议）。</li><li>数据链路层三个基本问题：封装成帧、透明传输、差错检测。</li><li>数据链路层有两种信道类型：点对点信道（主要使用 <code>PPP</code>）和广播信道（主要使用 <code>CSMA/CD</code>）。</li><li>以太网 MAC 层的地址。</li><li>适配器、转发器、集线器、网桥、以太网交换机的作用及使用场合。</li></ul><h2 id="基本问题" tabindex="-1"><a class="header-anchor" href="#基本问题" aria-hidden="true">#</a> 基本问题</h2><h3 id="封装成帧" tabindex="-1"><a class="header-anchor" href="#封装成帧" aria-hidden="true">#</a> 封装成帧</h3><p>为网络层传下来的 IP 数据报添加首部和尾部，用于标记帧的开始和结束。</p><p>为了提高传输效率，应该让数据部分长度尽可能大于首部和尾部。但是，每种链路层协议都限制了帧的数据部分长度上线——最大传送单元 MTU（Maximum Transfer Unit）</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/data-link/数据链路帧.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="透明传输" tabindex="-1"><a class="header-anchor" href="#透明传输" aria-hidden="true">#</a> 透明传输</h3><p><strong>透明</strong>表示：某一个实际存在的事物看起来好像不存在一样。</p><p>帧使用首部和尾部进行定界，如果帧的数据部分含有和首部尾部相同的内容，那么帧的开始和结束位置就会被错误的判定。需要在数据部分出现首部尾部相同的内容前面插入转义字符。如果数据部分出现转义字符，那么就在转义字符前面再加个转义字符。在接收端进行处理之后可以还原出原始数据。这个过程透明传输的内容是转义字符，用户察觉不到转义字符的存在。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/data-link/经过字节填充后发送的数据.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="差错检测" tabindex="-1"><a class="header-anchor" href="#差错检测" aria-hidden="true">#</a> 差错检测</h3>',14),s={href:"https://zh.wikipedia.org/wiki/%E5%BE%AA%E7%8E%AF%E5%86%97%E4%BD%99%E6%A3%80%E9%AA%8C",target:"_blank",rel:"noopener noreferrer"},p=a("strong",null,"循环冗余检验 CRC（Cyclic redundancy check）",-1),u=i('<h2 id="点对点信道" tabindex="-1"><a class="header-anchor" href="#点对点信道" aria-hidden="true">#</a> 点对点信道</h2><p>点对点信道使用一对一的点对点通信方式。</p><p>对于点对点的链路，点对点协议 PPP（Point-to-Point Protocol）是使用最广泛的数据链路层协议。</p><h3 id="ppp-协议" tabindex="-1"><a class="header-anchor" href="#ppp-协议" aria-hidden="true">#</a> PPP 协议</h3><p>互联网用户通常都要连接到某个 ISP 之后才能接入到互联网，PPP 协议是用户计算机和 ISP 进行通信时所使用的数据链路层协议。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/data-link/PPP协议.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>PPP（点到点协议）是为在同等单元之间传输数据包这样的简单链路设计的链路层协议。这种链路提供全双工操作，并按照顺序传递数据包。设计目的主要是用来通过拨号或专线方式建立点对点连接发送数据，使其成为各种主机、网桥和路由器之间简单连接的一种共通的解决方案。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/data-link/PPP帧.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>PPP 的帧格式：</p><ul><li>F 字段为帧的定界符</li><li>A 和 C 字段暂时没有意义</li><li>FCS 字段是使用 CRC 的检验序列</li><li>信息部分的长度不超过 1500</li></ul><h2 id="广播信道" tabindex="-1"><a class="header-anchor" href="#广播信道" aria-hidden="true">#</a> 广播信道</h2><p>广播信道(broadcast channel)是通过广播的方式传输信息的信息通道。</p><p>所有的节点都在同一个广播信道上发送数据，因此需要有专门的控制方法进行协调，避免发生冲突（冲突也叫碰撞）。</p><p>主要有两种控制方法进行协调，一个是使用信道复用技术，一是使用 CSMA/CD 协议。</p><h3 id="csma-cd-协议" tabindex="-1"><a class="header-anchor" href="#csma-cd-协议" aria-hidden="true">#</a> CSMA/CD 协议</h3><p>CSMA/CD（Carrier Sense Multiple Access with Collision Detection）即带冲突检测的载波监听多路访问技术(载波监听多点接入/碰撞检测)。</p>',16),g=a("li",null,[a("strong",null,"多点接入"),e(" ：说明这是总线型网络，许多计算机以多点接入的方式连接在一根总线上。")],-1),f=a("li",null,[a("strong",null,"载波监听"),e(" ：每个主机都必须不停地监听信道。发送前监听，如果忙则等待，如果空闲则发送。")],-1),m=a("strong",null,"碰撞检测",-1),_={href:"https://baike.baidu.com/item/%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%8C%87%E6%95%B0%E9%80%80%E9%81%BF%E7%AE%97%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},b=i('<h2 id="局域网" tabindex="-1"><a class="header-anchor" href="#局域网" aria-hidden="true">#</a> 局域网</h2><p>局域网 LAN（Local Area Network）是指在某一区域内由多台计算机互联成的计算机组。</p><p>局域网的拓扑结构通常为总线型和环型。</p><p>局域网技术主要有：以太网、令牌环网、FDDI 网和无线局域网等。</p><h2 id="以太网" tabindex="-1"><a class="header-anchor" href="#以太网" aria-hidden="true">#</a> 以太网</h2><p>以太网（Ethernet）是一种星型拓扑结构局域网。</p><p>以太网是目前应用最广泛的局域网。</p><p>以太网使用 CSMA/CD 协议。</p><h2 id="mac-地址" tabindex="-1"><a class="header-anchor" href="#mac-地址" aria-hidden="true">#</a> MAC 地址</h2><p>MAC 地址（Media Access Control Address），也称为以太网地址或物理地址，它是一个用来确认网上设备位置的地址。</p><p>MAC 地址长度为 6 字节（48 位），用于唯一标识网络适配器（网卡）。</p><p>一台主机拥有多少个网络适配器就有多少个 MAC 地址。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/data-link/MAC帧.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="设备" tabindex="-1"><a class="header-anchor" href="#设备" aria-hidden="true">#</a> 设备</h2><h3 id="适配器" tabindex="-1"><a class="header-anchor" href="#适配器" aria-hidden="true">#</a> 适配器</h3><p>网络适配器一般指网卡。</p><p>网卡是工作在链路层的网络组件，是局域网中连接计算机和传输介质的接口，不仅能实现与局域网传输介质之间的物理连接和电信号匹配，还涉及帧的发送与接收、帧的封装与拆封、介质访问控制、数据的编码与解码以及数据缓存的功能等。</p><p>网卡和局域网之间的通信是通过电缆或双绞线以串行传输方式进行的。而网卡和计算机之间的通信则是通过计算机主板上的 I/O 总线以并行传输方式进行。</p><h3 id="集线器" tabindex="-1"><a class="header-anchor" href="#集线器" aria-hidden="true">#</a> 集线器</h3><p>集线器（Hub）的主要功能是对接收到的信号进行再生整形放大，以扩大网络的传输距离，同时把所有节点集中在以它为中心的节点上。</p><p>使用集线器可以在物理层扩展以太网。</p><h3 id="网桥" tabindex="-1"><a class="header-anchor" href="#网桥" aria-hidden="true">#</a> 网桥</h3><p>网桥（Bridge）是早期的两端口二层网络设备，用来连接不同网段。网桥的两个端口分别有一条独立的交换信道，不是共享一条背板总线，可隔离冲突域。网桥比集线器（Hub）性能更好，集线器上各端口都是共享同一条背板总线的。后来，网桥被具有更多端口、同时也可隔离冲突域的交换机（Switch）所取代。</p><h3 id="以太网交换机" tabindex="-1"><a class="header-anchor" href="#以太网交换机" aria-hidden="true">#</a> 以太网交换机</h3><p>以太网交换机是基于以太网传输数据的交换机，以太网采用共享总线型传输媒体方式的局域网。以太网交换机的结构是每个端口都直接与主机相连，并且一般都工作在全双工方式。交换机能同时连通许多对端口，使每一对相互通信的主机都能像独占通信媒体那样，进行无冲突地传输数据。</p><ul><li>以太网交换机的每个端口都直接与主机相连，并且一般都工作在全双工方式。</li><li>交换机能同时连通许多对的端口，使每一对相互通信的主机都能像独占通信媒体那样，进行无冲突地传输数据。</li><li>用户独占传输媒体的带宽，若一个接口到主机的带宽是 10Mbit 每秒，那么有 10 个接口的交换机的总容量是 100Mbit 每秒。这是交换机的最大优点。</li></ul>',26);function C(P,x){const r=d("ExternalLinkIcon");return h(),o("div",null,[l,a("p",null,[e("目前数据链路层广泛使用了"),a("a",s,[p,t(r)]),e("来检查比特差错。")]),u,a("ul",null,[g,f,a("li",null,[m,e(" ：即边发送边检测。若检测到信道有干扰信号，则表示产生了碰撞，于是就要停止发送数据，计算出退避等待时间，然后使用 CSMA 方法继续尝试发送。计算退避等待时间采用的是"),a("a",_,[e("二进制指数退避算法"),t(r)]),e("。")])]),b])}const E=n(c,[["render",C],["__file","12.数据链路层.html.vue"]]);export{E as default};
