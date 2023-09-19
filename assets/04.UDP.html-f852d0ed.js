import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as a,c as l,a as e,b as i,d as s,e as r}from"./app-d8d56f9e.js";const d={},c=r('<h1 id="用户数据报协议-udp" tabindex="-1"><a class="header-anchor" href="#用户数据报协议-udp" aria-hidden="true">#</a> 用户数据报协议 UDP</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/1559263939493.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>UDP 是无连接的。数据报（类似于数据包）只在数据报级别有保证。数据报可能会无序的到达目的地，也有可能会遗失。UDP 不支持拥塞控制。虽然不如 TCP 那样有保证，但 UDP 通常效率更高。</p>',4),h={href:"https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol",target:"_blank",rel:"noopener noreferrer"},g=r('<p>UDP 可靠性更低但适合用在网络电话、视频聊天，流媒体和实时多人游戏上。</p><p>以下情况使用 UDP 代替 TCP：</p><ul><li>你需要低延迟</li><li>相对于数据丢失更糟的是数据延迟</li><li>你想实现自己的错误校正方法</li></ul><h3 id="udp-特点" tabindex="-1"><a class="header-anchor" href="#udp-特点" aria-hidden="true">#</a> UDP 特点</h3><ol><li><strong>无连接的</strong>，即发送数据之前不需要建立连接，因此减少了开销和发送数据之前的时延。</li><li><strong>不保证可靠交付</strong>，因此主机不需要为此复杂的连接状态表</li><li><strong>面向报文的</strong>，意思是 UDP 对应用层交下来的报文，既不合并，也不拆分，而是保留这些报文的边界，在添加首部后向下交给 IP 层。</li><li><strong>没有阻塞控制</strong>，因此网络出现的拥塞不会使发送方的发送速率降低。</li><li><strong>支持一对一、一对多、多对一和多对多的交互通信</strong>，也即是提供广播和多播的功能。</li><li><strong>首部开销小</strong>，首部只有 8 个字节，分为四部分。</li></ol><h3 id="udp-应用场景" tabindex="-1"><a class="header-anchor" href="#udp-应用场景" aria-hidden="true">#</a> UDP 应用场景</h3><ol><li>名字转换（DNS）</li><li>文件传送（TFTP）</li><li>路由选择协议（RIP）</li><li>IP 地址配置（BOOTP，DHTP）</li><li>网络管理（SNMP）</li><li>远程文件服务（NFS）</li><li>IP 电话</li><li>流式多媒体通信</li></ol><h2 id="udp-报文" tabindex="-1"><a class="header-anchor" href="#udp-报文" aria-hidden="true">#</a> UDP 报文</h2><p>UDP 数据报分为数据字段和首部字段。<br> 首部字段只有 8 个字节，由四个字段组成，每个字段的长度是 2 个字节。</p><p><strong>首部各字段意义</strong>：</p><ol><li><strong>源端口</strong>：源端口号，在需要对方回信时选用，不需要时可全 0.</li><li><strong>目的端口</strong>：目的端口号，在终点交付报文时必须要使用到。</li><li><strong>长度</strong>：UDP 用户数据报的长度，在只有首部的情况，其最小值是 8 。</li><li><strong>检验和</strong>：检测 UDP 用户数据报在传输中是否有错，有错就丢弃。</li></ol>',11);function p(P,u){const n=o("ExternalLinkIcon");return a(),l("div",null,[c,e("p",null,[i("UDP 可以通过广播将数据报发送至子网内的所有设备。这对 "),e("a",h,[i("DHCP"),s(n)]),i(" 很有用，因为子网内的设备还没有分配 IP 地址，而 IP 对于 TCP 是必须的。")]),g])}const D=t(d,[["render",p],["__file","04.UDP.html.vue"]]);export{D as default};
