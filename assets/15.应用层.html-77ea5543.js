import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as c,c as s,a as t,b as e,d as l,w as n,e as i}from"./app-dc48b2dc.js";const P={},h=i('<h1 id="计算机网络之应用层" tabindex="-1"><a class="header-anchor" href="#计算机网络之应用层" aria-hidden="true">#</a> 计算机网络之应用层</h1><h2 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/application/1551096916007.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>超文本传输协议（英语：HyperText Transfer Protocol，缩写：HTTP）是一种用于分布式、协作式和超媒体信息系统的应用层协议。HTTP 是万维网的数据通信的基础。</p><p>设计 HTTP 最初的目的是为了提供一种发布和接收 HTML 页面的方法。通过 HTTP 或者 HTTPS 协议请求的资源由统一资源标识符（Uniform Resource Identifiers，URI）来标识。</p><p>安全套接字层超文本传输协议 HTTPS 为了数据传输的安全，HTTPS 在 HTTP 的基础上加入了 SSL 协议，SSL 依靠证书来验证服务器的身份，并为浏览器和服务器之间的通信加密。</p>',6),o=i('<h2 id="dns" tabindex="-1"><a class="header-anchor" href="#dns" aria-hidden="true">#</a> DNS</h2><p>域名服务器 DNS 是一个分布式数据库，提供了主机名和 IP 地址之间相互转换的服务。这里的分布式数据库是指，每个站点只保留它自己的那部分数据。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/application/1551094759786.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>域名具有层次结构，从上到下依次为：根域名、顶级域名、二级域名。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/application/1551094954067.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>DNS 可以使用 UDP 或者 TCP 进行传输，使用的端口号都为 53。大多数情况下 DNS 使用 UDP 进行传输，这就要求域名解析器和域名服务器都必须自己处理超时和重传来保证可靠性。在两种情况下会使用 TCP 进行传输：</p><ul><li>如果返回的响应超过的 512 字节（UDP 最大只支持 512 字节的数据）。</li><li>区域传送（区域传送是主域名服务器向辅助域名服务器传送变化的那部分数据）。</li></ul>',7),g=i('<h2 id="ftp" tabindex="-1"><a class="header-anchor" href="#ftp" aria-hidden="true">#</a> FTP</h2><p>文件传送协议 FTP 使用 TCP 进行连接，它需要两个连接来传送一个文件：</p><ul><li>控制连接：服务器打开端口号 21 等待客户端的连接，客户端主动建立连接后，使用这个连接将客户端的命令传送给服务器，并传回服务器的应答。</li><li>数据连接：用来传送一个文件数据。</li></ul><p>根据数据连接是否是服务器端主动建立，FTP 有主动和被动两种模式：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/application/1551095440002.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>主动模式：服务器端主动建立数据连接，其中服务器端的端口号为 20，客户端的端口号随机，但是必须大于 1024，因为 0~1023 是熟知端口号。</li><li>被动模式：客户端主动建立数据连接，其中客户端的端口号由客户端自己指定，服务器端的端口号随机。</li></ul><p>主动模式要求客户端开放端口号给服务器端，需要去配置客户端的防火墙。被动模式只需要服务器端开放端口号即可，无需客户端配置防火墙。但是被动模式会导致服务器端的安全性减弱，因为开放了过多的端口号。</p><p>FTPS 是一种对常用的文件传输协议（FTP）添加传输层安全（TLS）和安全套接层（SSL）加密协议支持的扩展协议。</p><h2 id="dhcp" tabindex="-1"><a class="header-anchor" href="#dhcp" aria-hidden="true">#</a> DHCP</h2><p>动态主机配置协议 DHCP (Dynamic Host Configuration Protocol) 提供了即插即用的连网方式，用户不再需要去手动配置 IP 地址等信息。</p><p>DHCP 配置的内容不仅是 IP 地址，还包括子网掩码、网关 IP 地址。</p><p>DHCP 工作过程如下：</p><ol><li>客户端发送 Discover 报文，该报文的目的地址为 255.255.255.255:67，源地址为 0.0.0.0:68，被放入 UDP 中，该报文被广播到同一个子网的所有主机上。如果客户端和 DHCP 服务器不在同一个子网，就需要使用中继代理。</li><li>DHCP 服务器收到 Discover 报文之后，发送 Offer 报文给客户端，该报文包含了客户端所需要的信息。因为客户端可能收到多个 DHCP 服务器提供的信息，因此客户端需要进行选择。</li><li>如果客户端选择了某个 DHCP 服务器提供的信息，那么就发送 Request 报文给该 DHCP 服务器。</li><li>DHCP 服务器发送 Ack 报文，表示客户端此时可以使用提供给它的信息。</li></ol><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/application/1551095610521.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="telnet" tabindex="-1"><a class="header-anchor" href="#telnet" aria-hidden="true">#</a> TELNET</h2><p>远程登录协议 TELNET 用于登录到远程主机上，并且远程主机上的输出也会返回。</p><p>TELNET 可以适应许多计算机和操作系统的差异，例如不同操作系统系统的换行符定义。</p><h2 id="电子邮件协议" tabindex="-1"><a class="header-anchor" href="#电子邮件协议" aria-hidden="true">#</a> 电子邮件协议</h2><p>一个电子邮件系统由三部分组成：用户代理、邮件服务器以及邮件协议。</p><p>邮件协议包含发送协议和读取协议，发送协议常用 SMTP，读取协议常用 POP3 和 IMAP。</p><h3 id="smtp" tabindex="-1"><a class="header-anchor" href="#smtp" aria-hidden="true">#</a> SMTP</h3><p>SMTP 只能发送 ASCII 码，而互联网邮件扩充 MIME 可以发送二进制文件。MIME 并没有改动或者取代 SMTP，而是增加邮件主体的结构，定义了非 ASCII 码的编码规则。</p><h3 id="pop3" tabindex="-1"><a class="header-anchor" href="#pop3" aria-hidden="true">#</a> POP3</h3><p>POP3 的特点是只要用户从服务器上读取了邮件，就把该邮件删除。</p><h3 id="imap" tabindex="-1"><a class="header-anchor" href="#imap" aria-hidden="true">#</a> IMAP</h3><p>IMAP 协议中客户端和服务器上的邮件保持同步，如果不手动删除邮件，那么服务器上的邮件也不会被删除。IMAP 这种做法可以让用户随时随地去访问服务器上的邮件。</p><h2 id="常用端口" tabindex="-1"><a class="header-anchor" href="#常用端口" aria-hidden="true">#</a> 常用端口</h2><table><thead><tr><th style="text-align:center;">应用</th><th style="text-align:center;">应用层协议</th><th style="text-align:center;">端口号</th><th style="text-align:center;">传输层协议</th><th style="text-align:center;">备注</th></tr></thead><tbody><tr><td style="text-align:center;">域名解析</td><td style="text-align:center;">DNS</td><td style="text-align:center;">53</td><td style="text-align:center;">UDP/TCP</td><td style="text-align:center;">长度超过 512 字节时使用 TCP</td></tr><tr><td style="text-align:center;">动态主机配置协议</td><td style="text-align:center;">DHCP</td><td style="text-align:center;">67/68</td><td style="text-align:center;">UDP</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">简单网络管理协议</td><td style="text-align:center;">SNMP</td><td style="text-align:center;">161/162</td><td style="text-align:center;">UDP</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">文件传送协议</td><td style="text-align:center;">FTP</td><td style="text-align:center;">20/21</td><td style="text-align:center;">TCP</td><td style="text-align:center;">控制连接 21，数据连接 20</td></tr><tr><td style="text-align:center;">远程终端协议</td><td style="text-align:center;">TELNET</td><td style="text-align:center;">23</td><td style="text-align:center;">TCP</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">超文本传送协议</td><td style="text-align:center;">HTTP</td><td style="text-align:center;">80</td><td style="text-align:center;">TCP</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">简单邮件传送协议</td><td style="text-align:center;">SMTP</td><td style="text-align:center;">25</td><td style="text-align:center;">TCP</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">邮件读取协议</td><td style="text-align:center;">POP3</td><td style="text-align:center;">110</td><td style="text-align:center;">TCP</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">网际报文存取协议</td><td style="text-align:center;">IMAP</td><td style="text-align:center;">143</td><td style="text-align:center;">TCP</td><td style="text-align:center;"></td></tr></tbody></table><h2 id="web-页面请求过程" tabindex="-1"><a class="header-anchor" href="#web-页面请求过程" aria-hidden="true">#</a> Web 页面请求过程</h2><h3 id="dhcp-配置主机信息" tabindex="-1"><a class="header-anchor" href="#dhcp-配置主机信息" aria-hidden="true">#</a> DHCP 配置主机信息</h3><ul><li>假设主机最开始没有 IP 地址以及其它信息，那么就需要先使用 DHCP 来获取。</li><li>主机生成一个 DHCP 请求报文，并将这个报文放入具有目的端口 67 和源端口 68 的 UDP 报文段中。</li><li>该报文段则被放入在一个具有广播 IP 目的地址(255.255.255.255) 和源 IP 地址（0.0.0.0）的 IP 数据报中。</li><li>该数据报则被放置在 MAC 帧中，该帧具有目的地址 FF:FF:FF:FF:FF:FF，将广播到与交换机连接的所有设备。</li><li>连接在交换机的 DHCP 服务器收到广播帧之后，不断地向上分解得到 IP 数据报、UDP 报文段、DHCP 请求报文，之后生成 DHCP ACK 报文，该报文包含以下信息：IP 地址、DNS 服务器的 IP 地址、默认网关路由器的 IP 地址和子网掩码。该报文被放入 UDP 报文段中，UDP 报文段有被放入 IP 数据报中，最后放入 MAC 帧中。</li><li>该帧的目的地址是请求主机的 MAC 地址，因为交换机具有自学习能力，之前主机发送了广播帧之后就记录了 MAC 地址到其转发接口的交换表项，因此现在交换机就可以直接知道应该向哪个接口发送该帧。</li><li>主机收到该帧后，不断分解得到 DHCP 报文。之后就配置它的 IP 地址、子网掩码和 DNS 服务器的 IP 地址，并在其 IP 转发表中安装默认网关。</li></ul><h3 id="arp-解析-mac-地址" tabindex="-1"><a class="header-anchor" href="#arp-解析-mac-地址" aria-hidden="true">#</a> ARP 解析 MAC 地址</h3><ul><li>主机通过浏览器生成一个 TCP 套接字，套接字向 HTTP 服务器发送 HTTP 请求。为了生成该套接字，主机需要知道网站的域名对应的 IP 地址。</li><li>主机生成一个 DNS 查询报文，该报文具有 53 号端口，因为 DNS 服务器的端口号是 53。</li><li>该 DNS 查询报文被放入目的地址为 DNS 服务器 IP 地址的 IP 数据报中。</li><li>该 IP 数据报被放入一个以太网帧中，该帧将发送到网关路由器。</li><li>DHCP 过程只知道网关路由器的 IP 地址，为了获取网关路由器的 MAC 地址，需要使用 ARP 协议。</li><li>主机生成一个包含目的地址为网关路由器 IP 地址的 ARP 查询报文，将该 ARP 查询报文放入一个具有广播目的地址（FF:FF:FF:FF:FF:FF）的以太网帧中，并向交换机发送该以太网帧，交换机将该帧转发给所有的连接设备，包括网关路由器。</li><li>网关路由器接收到该帧后，不断向上分解得到 ARP 报文，发现其中的 IP 地址与其接口的 IP 地址匹配，因此就发送一个 ARP 回答报文，包含了它的 MAC 地址，发回给主机。</li></ul><h3 id="dns-解析域名" tabindex="-1"><a class="header-anchor" href="#dns-解析域名" aria-hidden="true">#</a> DNS 解析域名</h3><ul><li>知道了网关路由器的 MAC 地址之后，就可以继续 DNS 的解析过程了。</li><li>网关路由器接收到包含 DNS 查询报文的以太网帧后，抽取出 IP 数据报，并根据转发表决定该 IP 数据报应该转发的路由器。</li><li>因为路由器具有内部网关协议（RIP、OSPF）和外部网关协议（BGP）这两种路由选择协议，因此路由表中已经配置了网关路由器到达 DNS 服务器的路由表项。</li><li>到达 DNS 服务器之后，DNS 服务器抽取出 DNS 查询报文，并在 DNS 数据库中查找待解析的域名。</li><li>找到 DNS 记录之后，发送 DNS 回答报文，将该回答报文放入 UDP 报文段中，然后放入 IP 数据报中，通过路由器反向转发回网关路由器，并经过以太网交换机到达主机。</li></ul><h3 id="http-请求页面" tabindex="-1"><a class="header-anchor" href="#http-请求页面" aria-hidden="true">#</a> HTTP 请求页面</h3><ul><li>有了 HTTP 服务器的 IP 地址之后，主机就能够生成 TCP 套接字，该套接字将用于向 Web 服务器发送 HTTP GET 报文。</li><li>在生成 TCP 套接字之前，必须先与 HTTP 服务器进行三次握手来建立连接。生成一个具有目的端口 80 的 TCP SYN 报文段，并向 HTTP 服务器发送该报文段。</li><li>HTTP 服务器收到该报文段之后，生成 TCP SYN ACK 报文段，发回给主机。</li><li>连接建立之后，浏览器生成 HTTP GET 报文，并交付给 HTTP 服务器。</li><li>HTTP 服务器从 TCP 套接字读取 HTTP GET 报文，生成一个 HTTP 响应报文，将 Web 页面内容放入报文主体中，发回给主机。</li><li>浏览器收到 HTTP 响应报文后，抽取出 Web 页面内容，之后进行渲染，显示 Web 页面。</li></ul>',37);function p(T,u){const a=d("RouterLink");return c(),s("div",null,[h,t("blockquote",null,[t("p",null,[e("👉 扩展阅读："),l(a,{to:"/13.%E7%BD%91%E7%BB%9C/02.%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE/01.HTTP.html"},{default:n(()=>[e("HTTP")]),_:1})])]),o,t("blockquote",null,[t("p",null,[e("👉 扩展阅读："),l(a,{to:"/13.%E7%BD%91%E7%BB%9C/02.%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE/02.DNS.html"},{default:n(()=>[e("DNS")]),_:1})])]),g])}const y=r(P,[["render",p],["__file","15.应用层.html.vue"]]);export{y as default};
