const t=JSON.parse('{"key":"v-5bfaa8a7","path":"/pages/1d6f56/","title":"计算机网络之传输层","lang":"zh-CN","frontmatter":{"title":"计算机网络之传输层","date":"2019-02-25T20:27:00.000Z","category":["网络","网络综合"],"tag":["网络","网络分层"],"permalink":"/pages/1d6f56/","description":"计算机网络之传输层 网络层只把分组发送到目的主机，但是真正通信的并不是主机而是主机中的进程。传输层提供了进程间的逻辑通信，传输层向高层用户屏蔽了下面网络层的核心细节，使应用程序看起来像是在两个传输层实体之间有一条端到端的逻辑通信信道。 UDP 和 TCP 的特点 用户数据报协议 UDP（User Datagram Protocol）是无连接的，尽最大可能交付，没有拥塞控制，面向报文（对于应用程序传下来的报文不合并也不拆分，只是添加 UDP 首部），支持一对一、一对多、多对一和多对多的交互通信。 传输控制协议 TCP（Transmission Control Protocol）是面向连接的，提供可靠交付，有流量控制，拥塞控制，提供全双工通信，面向字节流（把应用层传下来的报文看成字节流，把字节流组织成大小不等的数据块），每一条 TCP 连接只能是点对点的（一对一）。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/1d6f56/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"计算机网络之传输层"}],["meta",{"property":"og:description","content":"计算机网络之传输层 网络层只把分组发送到目的主机，但是真正通信的并不是主机而是主机中的进程。传输层提供了进程间的逻辑通信，传输层向高层用户屏蔽了下面网络层的核心细节，使应用程序看起来像是在两个传输层实体之间有一条端到端的逻辑通信信道。 UDP 和 TCP 的特点 用户数据报协议 UDP（User Datagram Protocol）是无连接的，尽最大可能交付，没有拥塞控制，面向报文（对于应用程序传下来的报文不合并也不拆分，只是添加 UDP 首部），支持一对一、一对多、多对一和多对多的交互通信。 传输控制协议 TCP（Transmission Control Protocol）是面向连接的，提供可靠交付，有流量控制，拥塞控制，提供全双工通信，面向字节流（把应用层传下来的报文看成字节流，把字节流组织成大小不等的数据块），每一条 TCP 连接只能是点对点的（一对一）。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T10:35:58.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"网络"}],["meta",{"property":"article:tag","content":"网络分层"}],["meta",{"property":"article:published_time","content":"2019-02-25T20:27:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T10:35:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"计算机网络之传输层\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-02-25T20:27:00.000Z\\",\\"dateModified\\":\\"2023-09-10T10:35:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"UDP 和 TCP 的特点","slug":"udp-和-tcp-的特点","link":"#udp-和-tcp-的特点","children":[]},{"level":2,"title":"UDP 首部格式","slug":"udp-首部格式","link":"#udp-首部格式","children":[]},{"level":2,"title":"TCP 首部格式","slug":"tcp-首部格式","link":"#tcp-首部格式","children":[]},{"level":2,"title":"TCP 的三次握手","slug":"tcp-的三次握手","link":"#tcp-的三次握手","children":[]},{"level":2,"title":"TCP 的四次挥手","slug":"tcp-的四次挥手","link":"#tcp-的四次挥手","children":[]},{"level":2,"title":"TCP 可靠传输","slug":"tcp-可靠传输","link":"#tcp-可靠传输","children":[]},{"level":2,"title":"TCP 滑动窗口","slug":"tcp-滑动窗口","link":"#tcp-滑动窗口","children":[]},{"level":2,"title":"TCP 流量控制","slug":"tcp-流量控制","link":"#tcp-流量控制","children":[]},{"level":2,"title":"TCP 拥塞控制","slug":"tcp-拥塞控制","link":"#tcp-拥塞控制","children":[{"level":3,"title":"慢开始与拥塞避免","slug":"慢开始与拥塞避免","link":"#慢开始与拥塞避免","children":[]},{"level":3,"title":"快重传与快恢复","slug":"快重传与快恢复","link":"#快重传与快恢复","children":[]}]}],"git":{"createdTime":1694342158000,"updatedTime":1694342158000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":9.31,"words":2793},"filePathRelative":"13.网络/01.网络综合/14.传输层.md","localizedDate":"2019年2月25日","excerpt":"<h1> 计算机网络之传输层</h1>\\n<blockquote>\\n<p>网络层只把分组发送到目的主机，但是真正通信的并不是主机而是主机中的进程。传输层提供了进程间的逻辑通信，传输层向高层用户屏蔽了下面网络层的核心细节，使应用程序看起来像是在两个传输层实体之间有一条端到端的逻辑通信信道。</p>\\n</blockquote>\\n<h2> UDP 和 TCP 的特点</h2>\\n<ul>\\n<li>\\n<p>用户数据报协议 UDP（User Datagram Protocol）是无连接的，尽最大可能交付，没有拥塞控制，面向报文（对于应用程序传下来的报文不合并也不拆分，只是添加 UDP 首部），支持一对一、一对多、多对一和多对多的交互通信。</p>\\n</li>\\n<li>\\n<p>传输控制协议 TCP（Transmission Control Protocol）是面向连接的，提供可靠交付，有流量控制，拥塞控制，提供全双工通信，面向字节流（把应用层传下来的报文看成字节流，把字节流组织成大小不等的数据块），每一条 TCP 连接只能是点对点的（一对一）。</p>\\n</li>\\n</ul>","autoDesc":true}');export{t as data};
