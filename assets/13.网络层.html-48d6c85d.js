const e=JSON.parse('{"key":"v-25ec69a9","path":"/13.%E7%BD%91%E7%BB%9C/01.%E7%BD%91%E7%BB%9C%E7%BB%BC%E5%90%88/13.%E7%BD%91%E7%BB%9C%E5%B1%82.html","title":"计算机网络之网络层","lang":"zh-CN","frontmatter":{"title":"计算机网络之网络层","date":"2019-02-25T18:05:00.000Z","order":13,"category":["网络","网络综合"],"tag":["网络","网络分层"],"description":"计算机网络之网络层 网络层（network layer） - 为分组交换网上的不同主机提供通信服务。在发送数据时，网络层把运输层产生的报文段或用户数据报封装成分组或包进行传送。 主要协议：IP、ICMP。 数据单元：IP 数据报（packet）。 典型设备：网关、路由器。 概述 网络层向上只提供简单灵活的、无连接的、尽最大努力交付的数据报服务。网络层不提供服务质量的承诺，不保证分组交付的时限，所传送的分组可能出错、丢失、重复和失序。进程间通信的可靠性由运输层负责。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/13.%E7%BD%91%E7%BB%9C/01.%E7%BD%91%E7%BB%9C%E7%BB%BC%E5%90%88/13.%E7%BD%91%E7%BB%9C%E5%B1%82.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"计算机网络之网络层"}],["meta",{"property":"og:description","content":"计算机网络之网络层 网络层（network layer） - 为分组交换网上的不同主机提供通信服务。在发送数据时，网络层把运输层产生的报文段或用户数据报封装成分组或包进行传送。 主要协议：IP、ICMP。 数据单元：IP 数据报（packet）。 典型设备：网关、路由器。 概述 网络层向上只提供简单灵活的、无连接的、尽最大努力交付的数据报服务。网络层不提供服务质量的承诺，不保证分组交付的时限，所传送的分组可能出错、丢失、重复和失序。进程间通信的可靠性由运输层负责。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T15:44:18.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"网络"}],["meta",{"property":"article:tag","content":"网络分层"}],["meta",{"property":"article:published_time","content":"2019-02-25T18:05:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T15:44:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"计算机网络之网络层\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-02-25T18:05:00.000Z\\",\\"dateModified\\":\\"2023-09-11T15:44:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"IP 协议","slug":"ip-协议","link":"#ip-协议","children":[{"level":3,"title":"相关协议","slug":"相关协议","link":"#相关协议","children":[]},{"level":3,"title":"分类的 IP 地址","slug":"分类的-ip-地址","link":"#分类的-ip-地址","children":[]},{"level":3,"title":"IP 地址与物理地址","slug":"ip-地址与物理地址","link":"#ip-地址与物理地址","children":[]},{"level":3,"title":"IP 数据报格式","slug":"ip-数据报格式","link":"#ip-数据报格式","children":[]}]},{"level":2,"title":"地址解析协议 ARP","slug":"地址解析协议-arp","link":"#地址解析协议-arp","children":[]},{"level":2,"title":"网际控制报文协议 ICMP","slug":"网际控制报文协议-icmp","link":"#网际控制报文协议-icmp","children":[{"level":3,"title":"Ping","slug":"ping","link":"#ping","children":[]},{"level":3,"title":"Traceroute","slug":"traceroute","link":"#traceroute","children":[]}]},{"level":2,"title":"虚拟专用网 VPN","slug":"虚拟专用网-vpn","link":"#虚拟专用网-vpn","children":[]},{"level":2,"title":"网络地址转换 NAT","slug":"网络地址转换-nat","link":"#网络地址转换-nat","children":[]},{"level":2,"title":"路由器的结构","slug":"路由器的结构","link":"#路由器的结构","children":[]},{"level":2,"title":"路由器分组转发流程","slug":"路由器分组转发流程","link":"#路由器分组转发流程","children":[]},{"level":2,"title":"路由选择协议","slug":"路由选择协议","link":"#路由选择协议","children":[{"level":3,"title":"内部网关协议 RIP","slug":"内部网关协议-rip","link":"#内部网关协议-rip","children":[]},{"level":3,"title":"内部网关协议 OSPF","slug":"内部网关协议-ospf","link":"#内部网关协议-ospf","children":[]},{"level":3,"title":"外部网关协议 BGP","slug":"外部网关协议-bgp","link":"#外部网关协议-bgp","children":[]}]}],"git":{"createdTime":1694447058000,"updatedTime":1694447058000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":12.53,"words":3759},"filePathRelative":"13.网络/01.网络综合/13.网络层.md","localizedDate":"2019年2月25日","excerpt":"<h1> 计算机网络之网络层</h1>\\n<blockquote>\\n<p><strong>网络层（network layer）</strong> - 为分组交换网上的不同主机提供通信服务。在发送数据时，网络层把运输层产生的报文段或用户数据报封装成分组或包进行传送。</p>\\n<ul>\\n<li>主要协议：<code>IP</code>、<code>ICMP</code>。</li>\\n<li>数据单元：IP 数据报（packet）。</li>\\n<li>典型设备：网关、路由器。</li>\\n</ul>\\n</blockquote>\\n<h2> 概述</h2>\\n<p>网络层向上只提供简单灵活的、无连接的、尽最大努力交付的数据报服务。网络层不提供服务质量的承诺，不保证分组交付的时限，所传送的分组可能出错、丢失、重复和失序。进程间通信的可靠性由运输层负责。</p>","autoDesc":true}');export{e as data};
