import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as p,a as e,b as a,d as n,e as l}from"./app-4f05975a.js";const h={},s=l('<h1 id="网络技术之-vpn" tabindex="-1"><a class="header-anchor" href="#网络技术之-vpn" aria-hidden="true">#</a> 网络技术之 VPN</h1><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200203095528.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>虚拟专用网络(VPN)的功能是：在公用网络上建立专用网络，进行加密通讯。在企业网络中有广泛应用。VPN 网关通过对数据包的加密和数据包目标地址的转换实现远程访问。VPN 可通过服务器、硬件、软件等多种方式实现。</p><p>VPN 属于远程访问技术，简单地说就是利用公用网络架设专用网络。例如某公司员工出差到外地，他想访问企业内网的服务器资源，这种访问就属于远程访问。<br> 在传统的企业网络配置中，要进行远程访问，传统的方法是租用 DDN（数字数据网）专线或帧中继，这样的通讯方案必然导致高昂的网络通讯和维护费用。对于移动用户（移动办公人员）与远端个人用户而言，一般会通过拨号线路（Internet）进入企业的局域网，但这样必然带来安全上的隐患。<br> 让外地员工访问到内网资源，利用 VPN 的解决方法就是在内网中架设一台 VPN 服务器。外地员工在当地连上互联网后，通过互联网连接 VPN 服务器，然后通过 VPN 服务器进入企业内网。为了保证数据安全，VPN 服务器和客户机之间的通讯数据都进行了加密处理。有了数据加密，就可以认为数据是在一条专用的数据链路上进行安全传输，就如同专门架设了一个专用网络一样，但实际上 VPN 使用的是互联网上的公用链路，因此 VPN 称为虚拟专用网络，其实质上就是利用加密技术在公网上封装出一个数据通讯隧道。有了 VPN 技术，用户无论是在外地出差还是在家中办公，只要能上互联网就能利用 VPN 访问内网资源，这就是 VPN 在企业中应用得如此广泛的原因。</p><h2 id="vpn-的作用" tabindex="-1"><a class="header-anchor" href="#vpn-的作用" aria-hidden="true">#</a> VPN 的作用</h2><h3 id="隐藏-ip-和位置" tabindex="-1"><a class="header-anchor" href="#隐藏-ip-和位置" aria-hidden="true">#</a> 隐藏 IP 和位置</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200203100404.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>VPN 可以隐藏使用者的 IP 地址和位置。</p><p>使用 VPN 的最常见原因之一是屏蔽您的真实 IP 地址。</p><p>您的 IP 地址是由 ISP 分配的唯一数字地址。 您在线上所做的所有事情都链接到您的 IP 地址，因此可以用来将您与在线活动进行匹配。 大多数网站记录其访问者的 IP 地址。</p><p>广告商还可以使用您的 IP 地址，根据您的身份和浏览历史为您提供有针对性的广告。</p><p>连接到 VPN 服务器时，您将使用该 VPN 服务器的 IP 地址。 您访问的任何网站都会看到 VPN 服务器的 IP 地址，而不是您自己的。</p><p>您将能够绕过 IP 地址阻止并浏览网站，而不会将您的活动作为一个个人追溯到您。</p><h3 id="通信加密" tabindex="-1"><a class="header-anchor" href="#通信加密" aria-hidden="true">#</a> 通信加密</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200203100543.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>使用 VPN 时，可以对信息进行加密，使得密码，电子邮件，照片，银行数据和其他敏感信息不会被拦截。</p><p>如果在公共场所使用公共 WiFi 连接网络时，敏感数据有被盗的风险。黑客可以利用开放和未加密的网络来窃取重要数据，例如您的密码，电子邮件，照片，银行数据和其他敏感信息。</p><p>VPN 可以加密信息，使黑客更难以拦截和窃取数据。</p><h3 id="翻墙" tabindex="-1"><a class="header-anchor" href="#翻墙" aria-hidden="true">#</a> 翻墙</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200203100706.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>轻松解除对 Facebook 和 Twitter，Skype，YouTube 和 Gmail 等网站和服务的阻止。 即使您被告知您所在的国家/地区不可用它，或者您所在的学校或办公室网络限制访问，也可以获取所需的东西。</p><p>某些服务（例如 Netflix 或 BBC iPlayer）会根据您访问的国家/地区限制访问内容。使用 VPN 可以绕过这些地理限制并解锁“隐藏”内容的唯一可靠方法。</p><h3 id="避免被监听" tabindex="-1"><a class="header-anchor" href="#避免被监听" aria-hidden="true">#</a> 避免被监听</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200203100933.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>使用 VPN 可以向政府、ISP、黑客隐藏通信信息。</p><p>您的 Internet 服务提供商（ISP）可以看到您访问的所有网站，并且几乎可以肯定会记录该信息。</p><p>在某些国家/地区，ISP 需要长时间收集和存储用户数据，并且政府能够访问，存储和搜索该信息。</p><p>在美国，英国，澳大利亚和欧洲大部分地区就是这种情况，仅举几例。</p><p>由于 VPN 会加密从设备到 VPN 服务器的互联网流量，因此您的 ISP 或任何其他第三方将无法监视您的在线活动。</p><p>要了解有关监视技术和全球大规模监视问题的更多信息，请访问 EFF 和 Privacy International。 您还可以在此处找到全球监视披露的更新列表。</p><h2 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理" aria-hidden="true">#</a> 工作原理</h2><p>VPN 会在您的设备和私人服务器之间建立私人和加密的互联网连接。 这意味着您的数据无法被 ISP 或任何其他第三方读取或理解。 然后，私有服务器将您的流量发送到您要访问的网站或服务上。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200203102422.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>VPN 的基本处理过程如下：</p><ol><li>要保护主机发送明文信息到其他 VPN 设备。</li><li>VPN 设备根据网络管理员设置的规则，确定是对数据进行加密还是直接传输。</li><li>对需要加密的数据，VPN 设备将其整个数据包（包括要传输的数据、源 IP 地址和目的 lP 地址）进行加密并附上数据签名，加上新的数据报头（包括目的地 VPN 设备需要的安全信息和一些初始化参数）重新封装。</li><li>将封装后的数据包通过隧道在公共网络上传输。</li><li>数据包到达目的 VPN 设备后，将其解封，核对数字签名无误后，对数据包解密。</li></ol><h2 id="vpn-协议" tabindex="-1"><a class="header-anchor" href="#vpn-协议" aria-hidden="true">#</a> VPN 协议</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200203102656.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li><p>OpenVPN</p></li><li><p>IKEv2 / IPSec</p></li><li><p>SSTP</p></li><li><p>PPTP</p></li><li><p>Wireguard</p></li></ul><h2 id="vpn-服务" tabindex="-1"><a class="header-anchor" href="#vpn-服务" aria-hidden="true">#</a> VPN 服务</h2><p>你可以选择付费 VPN 或自行搭建 VPN。</p><p>VPN 服务商：</p>',42),d={href:"https://go.nordvpn.net/aff_c?offer_id=15&aff_id=22023&url_id=902",target:"_blank",rel:"noopener noreferrer"},c={href:"https://www.linkev.com/?a_fid=techacro",target:"_blank",rel:"noopener noreferrer"},g={href:"https://cybertool.co/tchacrobat_fs_izci9mc6y",target:"_blank",rel:"noopener noreferrer"},u={href:"https://click.tunnelbear.com/aff_c?offer_id=36&aff_id=7306",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.ipvanish.com/",target:"_blank",rel:"noopener noreferrer"},P=e("p",null,"开源 VPN：",-1),_={href:"https://openvpn.net/",target:"_blank",rel:"noopener noreferrer"},N=e("h2",{id:"参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),a(" 参考资料")],-1),V={href:"https://baike.baidu.com/item/%E8%99%9A%E6%8B%9F%E4%B8%93%E7%94%A8%E7%BD%91%E7%BB%9C",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.expressvpn.com/what-is-vpn",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.youtube.com/watch?v=_wQTRMBAvzg",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.top10vpn.com/guides/what-is-a-vpn/",target:"_blank",rel:"noopener noreferrer"};function v(x,I){const i=t("ExternalLinkIcon");return o(),p("div",null,[s,e("ul",null,[e("li",null,[e("a",d,[a("NordVPN"),n(i)])]),e("li",null,[e("a",c,[a("ExpressVPN"),n(i)])]),e("li",null,[e("a",g,[a("CyberGhostVPN"),n(i)])]),e("li",null,[e("a",u,[a("TunnelBear"),n(i)])]),e("li",null,[e("a",f,[a("IPVanish"),n(i)])])]),P,e("ul",null,[e("li",null,[e("a",_,[a("OpenVPN"),n(i)])])]),N,e("ul",null,[e("li",null,[e("a",V,[a("百度百科 - VPN"),n(i)])]),e("li",null,[e("a",m,[a("What is a VPN"),n(i)])]),e("li",null,[e("a",b,[a("What is a VPN and How Does it Work"),n(i)])]),e("li",null,[e("a",w,[a("What Is a VPN (Virtual Private Network) and How Does It Work?"),n(i)])])])])}const B=r(h,[["render",v],["__file","03.VPN.html.vue"]]);export{B as default};
