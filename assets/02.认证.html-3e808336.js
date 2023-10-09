import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as a,c as l,a as e,b as o,d as r,e as i}from"./app-1f12e18b.js";const d={},h=i('<h1 id="认证设计" tabindex="-1"><a class="header-anchor" href="#认证设计" aria-hidden="true">#</a> 认证设计</h1><h2 id="认证和授权" tabindex="-1"><a class="header-anchor" href="#认证和授权" aria-hidden="true">#</a> 认证和授权</h2><h3 id="什么是认证" tabindex="-1"><a class="header-anchor" href="#什么是认证" aria-hidden="true">#</a> 什么是认证</h3><p><strong>认证 (Authentication)</strong> 是根据凭据验明访问者身份的流程。即验证“你是你所说的那个人”的过程。</p><p>身份认证，通常通过用户名/邮箱/手机号以及密码匹配来完成，也可以通过手机/邮箱验证码或者生物特征（如：指纹、虹膜）等其他因素。在某些应用系统中，为了追求更高的安全性，往往会要求多种认证因素叠加使用，这就是我们经常说的多因素认证。</p><p>常见的认证方式</p><ul><li>用户名、密码认证</li><li>手机和短信验证码认证</li><li>邮箱和邮件验证码认证</li><li>人脸识别、指纹识别等生物因素认证</li><li>令牌认证</li><li>OTP 认证</li><li>Radius 网络认证</li></ul><h3 id="什么是授权" tabindex="-1"><a class="header-anchor" href="#什么是授权" aria-hidden="true">#</a> 什么是授权</h3><p><strong>授权 (Authorization)</strong> 是指向经过身份认证的访问者授予执行某项操作的权限（如访问资源，执行文件/数据读写权限等）。 简言之，授权是验证“你被允许做你想做的事”的过程。</p><p>虽然授权通常在身份验证后立即发生（例如，登录计算机系统时），但这并不意味着授权以身份验证为前提：匿名代理可以被授权执行有限的操作集。</p><h2 id="cookie-和-session" tabindex="-1"><a class="header-anchor" href="#cookie-和-session" aria-hidden="true">#</a> Cookie 和 Session</h2><p>由于 Http 是一种无状态的协议，服务器单从网络连接上无从知道客户身份。会话跟踪是 Web 程序中常用的技术，用来跟踪用户的整个会话。常用会话跟踪技术是 Cookie 与 Session。</p><p>Cookie 实际上是存储在客户端上的文本信息，并保留了各种跟踪的信息。</p><p>Cookie 保存在客户端浏览器中，而 Session 保存在服务器上。如果说 Cookie 机制是通过检查客户身上的“通行证”来确定客户身份的话，那么 Session 机制就是通过检查服务器上的“客户明细表”来确认客户身份。</p>',14),c={href:"https://dunwu.github.io/waterdrop/pages/c46bff/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://dunwu.github.io/waterdrop/pages/95e45f/",target:"_blank",rel:"noopener noreferrer"},p=i('<h2 id="单点登录" tabindex="-1"><a class="header-anchor" href="#单点登录" aria-hidden="true">#</a> 单点登录</h2><p><strong>SSO(Single Sign On)，即单点登录</strong>。所谓单点登录，就是同平台的诸多应用登陆一次，下一次就免登陆的功能。</p><p>SSO 需要解决多个异构系统之间的问题：</p><ul><li>Session 共享问题</li><li>跨域问题</li></ul><h3 id="session-共享问题" tabindex="-1"><a class="header-anchor" href="#session-共享问题" aria-hidden="true">#</a> Session 共享问题</h3><p>分布式 Session 的几种实现策略：</p><ul><li>粘性 Session - 缺点：当<strong>服务器节点宕机时，将丢失该服务器节点上的所有 Session</strong>。</li><li>应用服务器间的 Session 复制共享 - 缺点：<strong>占用过多内存</strong>；<strong>同步过程占用网络带宽以及服务器处理器时间</strong>。</li><li>基于缓存的 Session 共享 ✅ （推荐方案） - 不过需要程序自身控制 Session 读写，可以考虑基于 spring-session + redis 这种成熟的方案来处理。</li></ul><h3 id="cookie-跨域" tabindex="-1"><a class="header-anchor" href="#cookie-跨域" aria-hidden="true">#</a> Cookie 跨域</h3>',8),g=e("strong",null,"Cookie 不能跨域",-1),k={href:"http://www.google.com",target:"_blank",rel:"noopener noreferrer"},S={href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},_=i('<p>这就存在一个问题：由于域名不同，用户在系统 A 登录后，浏览器记录系统 A 的 Cookie，但是访问系统 B 的时候不会携带这个 Cookie。</p><p>针对 <strong>Cookie 不能跨域</strong> 的问题，有几种解决方案：</p><ul><li>服务端生成 Cookie 后，返回给客户端，客户端解析 Cookie ，提取 Token （比如 JWT），此后每次请求都携带这个 Token。</li><li>多个域名共享 Cookie，在返回 Cookie 给客户端的时候，在 Cookie 中设置 domain 白名单。</li><li>将 Token 保存在 <strong><code>SessionStroage</code></strong> 中（不依赖 Cookie 就没有跨域的问题了）。</li></ul><h3 id="cas" tabindex="-1"><a class="header-anchor" href="#cas" aria-hidden="true">#</a> CAS</h3><p>CAS 是实现 SSO 的主流方式。</p><p>CAS 分为两部分，CAS Server 和 CAS Client</p><ul><li><strong><code>CAS Server</code></strong> - 负责用户的认证工作，就像是把第一次登录用户的一个标识存在这里，以便此用户在其他系统登录时验证其需不需要再次登录。</li><li><strong><code>CAS Client</code></strong> - 业务应用，需要接入 CAS Server。当用户访问我们的应用时，首先需要重定向到 CAS Server 端进行验证，要是原来登陆过，就免去登录，重定向到下游系统，否则进行用户名密码登陆操作。</li></ul><p>术语：</p><ul><li><strong><code>Ticket Granting Ticket (TGT)</code></strong> - 可以认为是 CAS Server 根据用户名、密码生成的一张票，存在 Server 端。</li><li><strong><code>Ticket Granting Cookie (TGC)</code></strong> - 其实就是一个 Cookie，存放用户身份信息，由 Server 发给 Client 端。</li><li><strong><code>Service Ticket (ST)</code></strong> - 由 TGT 生成的一次性票据，用于验证，只能用一次。</li></ul><p>CAS 工作流程：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200119195646.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li>用户访问 CAS Client A（业务系统），第一次访问，重定向到认证服务中心（CAS Server）。CAS Server 发现当前请求中没有 Cookie，再重定向到 CAS Server 的登录页面。重定向请求的 URL 中包含访问地址，以便认证成功后直接跳转到访问页面。</li><li>用户在登录页面输入用户名、密码等认证信息，认证成功后，CAS Server 生成 TGT，再用 TGT 生成一个 ST。然后返回 ST 和 TGC（Cookie）给浏览器。</li><li>浏览器携带 ST 再度访问之前想访问的 CAS Client A 页面。</li><li>CAS Client A 收到 ST 后，向 CAS Server 验证 ST 的有效性。验证通过则允许用户访问页面。</li><li>此时，如果登录另一个 CAS Client B，会先重定向到 CAS Server，CAS Server 可以判断这个 CAS Client B 是第一次访问，但是本地有 TGC，所以无需再次登录。用 TGC 创建一个 ST，返回给浏览器。</li><li>重复类似 3、4 步骤。</li></ol><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200119202448.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>以上了归纳总结如下：</p><ol><li><strong>访问服务</strong> - 用户访问 SSO Client 资源。</li><li><strong>定向认证</strong> - SSO Client 重定向用户请求到 SSO Server。</li><li><strong>用户认证</strong> - 用户身份认证。</li><li><strong>发放票据</strong> - SSO Server 会产生一个 Service Ticket (ST) 并返回给浏览器。</li><li><strong>验证票据</strong> - 浏览器每次访问 SSO Client 时，携带 ST，SSO Client 向 SSO Server 验证票据。只有验证通过，才允许访问。</li><li><strong>传输用户信息</strong> - SSO Server 验证票据通过后，传输用户认证结果信息给 SSO Client。</li></ol><h2 id="jwt" tabindex="-1"><a class="header-anchor" href="#jwt" aria-hidden="true">#</a> JWT</h2>',16),f={href:"https://tools.ietf.org/html/rfc7519",target:"_blank",rel:"noopener noreferrer"},T={href:"https://www.jianshu.com/p/576dbf44b2ae",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"oauth2-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#oauth2-0","aria-hidden":"true"},"#"),o(" Oauth2.0")],-1),C={href:"https://en.wikipedia.org/wiki/OAuth",target:"_blank",rel:"noopener noreferrer"},m=i('<p>简单来说，<strong>OAuth 是一种授权机制。资源的所有者告诉系统，同意授权第三方应用进入系统，访问这些资源。系统从而产生一个短期的进入令牌（token），用来代替密码，供第三方应用使用。</strong></p><p>客户端必须得到用户的授权（authorization grant），才能获得令牌（access token）。</p><p>OAuth 2.0 定义了四种授权方式。</p><ul><li><strong>授权码模式（authorization code）</strong></li><li><strong>简化模式（implicit）</strong></li><li><strong>密码模式（resource owner password credentials）</strong></li><li><strong>客户端模式（client credentials）</strong></li></ul><h3 id="授权码模式" tabindex="-1"><a class="header-anchor" href="#授权码模式" aria-hidden="true">#</a> 授权码模式</h3><p><strong>授权码（authorization code）方式，指的是第三方应用先申请一个授权码，然后再用该授权码获取令牌。</strong></p><p>这种方式是最常用的流程，安全性也最高，它适用于那些有后端的 Web 应用。授权码通过前端传送，令牌则是储存在后端，而且所有与资源服务器的通信都在后端完成。这样的前后端分离，可以避免令牌泄漏。</p><h3 id="隐藏模式" tabindex="-1"><a class="header-anchor" href="#隐藏模式" aria-hidden="true">#</a> 隐藏模式</h3><p>有些 Web 应用是纯前端应用，没有后端。这时就不能用上面的方式了，必须将令牌储存在前端。<strong>RFC 6749 就规定了第二种方式，允许直接向前端颁发令牌。这种方式没有授权码这个中间步骤，所以称为（授权码）&quot;隐藏式&quot;（implicit）。</strong></p><h3 id="密码模式" tabindex="-1"><a class="header-anchor" href="#密码模式" aria-hidden="true">#</a> 密码模式</h3><p><strong>如果你高度信任某个应用，RFC 6749 也允许用户把用户名和密码，直接告诉该应用。该应用就使用你的密码，申请令牌，这种方式称为&quot;密码式&quot;（password）。</strong></p><h3 id="客户端凭证模式" tabindex="-1"><a class="header-anchor" href="#客户端凭证模式" aria-hidden="true">#</a> 客户端凭证模式</h3><p>适用于没有前端的命令行应用，即在命令行下请求令牌。</p><h3 id="令牌的更新" tabindex="-1"><a class="header-anchor" href="#令牌的更新" aria-hidden="true">#</a> 令牌的更新</h3><p>如果用户访问的时候，客户端的&quot;访问令牌&quot;已经过期，则需要使用&quot;更新令牌&quot;申请一个新的访问令牌。</p><p>客户端发出更新令牌的 HTTP 请求，包含以下参数：</p><ul><li>grant<em>type：表示使用的授权模式，此处的值固定为&quot;refresh</em>token&quot;，必选项。</li><li>refresh_token：表示早前收到的更新令牌，必选项。</li><li>scope：表示申请的授权范围，不可以超出上一次申请的范围，如果省略该参数，则表示与上一次一致</li></ul><h2 id="oidc" tabindex="-1"><a class="header-anchor" href="#oidc" aria-hidden="true">#</a> OIDC</h2><h3 id="id-token" tabindex="-1"><a class="header-anchor" href="#id-token" aria-hidden="true">#</a> ID Token</h3><p>ID Token 相当于用户的身份凭证，开发者的前端访问后端接口时可以携带 ID Token，开发者服务器可以校验用户的 ID Token 以确定用户身份，验证通过后返回相关资源。</p>',20),A=e("strong",null,"ID Token",-1),w={href:"https://docs.authing.cn/v2/concepts/jwt-token.html",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"JWT Token",-1),q=i(`<div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
   &quot;iss&quot;: &quot;https://server.example.com&quot;,
   &quot;sub&quot;: &quot;24400320&quot;, // subject 的缩写，为用户 ID
   &quot;aud&quot;: &quot;s6BhdRkqt3&quot;,
   &quot;nonce&quot;: &quot;n-0S6_WzA2Mj&quot;,
   &quot;exp&quot;: 1311281970,
   &quot;iat&quot;: 1311280970,
   &quot;auth_time&quot;: 1311280969,
   &quot;acr&quot;: &quot;urn:mace:incommon:iap:silver&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ID Token 本质上是一个 JWT Token 意味着：</p><p>用户的身份信息直接被编码进了 id_token，你不需要额外请求其他的资源来获取用户信息；</p><p>id_token 可以验证其没有被篡改过，详情请见如何验证 ID Token。</p><h3 id="access-token" tabindex="-1"><a class="header-anchor" href="#access-token" aria-hidden="true">#</a> Access Token</h3><p>Access Token 用于基于 Token 的认证模式，允许应用访问一个资源 API。用户认证授权成功后，认证系统会签发 Access Token 给应用。应用需要<strong>携带 Access Token</strong> 访问资源 API，资源服务 API 会通过拦截器查验 Access Token 中的 <code>scope</code> 字段是否包含特定的权限项目，从而决定是否返回资源。</p><p>如果你的用户通过社交账号登录，例如微信登录，微信作为身份提供商会颁发自己的 Access Token，你的应用可以利用 Access Token 调用微信相关的 API。这些 Access Token 是由社交账号服务方控制的，格式也是任意的。</p><h3 id="refresh-token" tabindex="-1"><a class="header-anchor" href="#refresh-token" aria-hidden="true">#</a> Refresh Token</h3><p>AccessToken 和 IdToken 是 JSON Web Token (opens new window)，有效时间通常较短。通常用户在获取资源的时候需要携带 AccessToken，当 AccessToken 过期后，用户需要获取一个新的 AccessToken。</p><p>Refresh Token 用于获取新的 AccessToken。这样可以缩短 AccessToken 的过期时间保证安全，同时又不会因为频繁过期重新要求用户登录。</p><p>用户在初次认证时，Refresh Token 会和 AccessToken、IdToken 一起返回。你的应用必须安全地存储 Refresh Token，它的重要性和密码是一样的，因为 Refresh Token 能够一直让用户保持登录。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,12),x={href:"http://www.rfcreader.com/#rfc6749",target:"_blank",rel:"noopener noreferrer"},O={href:"https://www.ruanyifeng.com/blog/2019/04/oauth_design.html",target:"_blank",rel:"noopener noreferrer"},I={href:"http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html",target:"_blank",rel:"noopener noreferrer"},J={href:"https://darutk.medium.com/the-simplest-guide-to-oauth-2-0-8c71bd9a15bb",target:"_blank",rel:"noopener noreferrer"},W={href:"https://openid.net/specs/openid-connect-core-1_0.html",target:"_blank",rel:"noopener noreferrer"},R={href:"https://www.jianshu.com/p/576dbf44b2ae",target:"_blank",rel:"noopener noreferrer"};function G(D,N){const n=s("ExternalLinkIcon");return a(),l("div",null,[h,e("ul",null,[e("li",null,[e("a",c,[o("Cookie 和 Session"),r(n)])]),e("li",null,[e("a",u,[o("分布式会话"),r(n)])])]),p,e("p",null,[g,o("！比如：浏览器不会把 "),e("a",k,[o("www.google.com"),r(n)]),o(" 的 cookie 传给 "),e("a",S,[o("www.baidu.com"),r(n)]),o("。")]),_,e("p",null,[o("JSON Web Token (JWT，"),e("a",f,[o("RFC 7519 (opens new window)"),r(n)]),o(")，是为了在网络应用环境间传递声明而执行的一种基于 JSON 的开放标准（(RFC 7519)。该 token 被设计为紧凑且安全的，特别适用于分布式站点的单点登录（SSO）场景。JWT 的声明一般被用来在身份提供者和服务提供者间传递被认证的用户身份信息，以便于从资源服务器获取资源，也可以增加一些额外的其它业务逻辑所必须的声明信息，该 token 也可直接被用于认证，也可被加密。")]),e("p",null,[o("详细内容可以参考这篇文章："),e("a",T,[o("什么是 JWT (opens new window)"),r(n)]),o("。")]),b,e("p",null,[e("a",C,[o("OAuth"),r(n)]),o(" 是一个关于授权（Authorization）的开放网络标准，在全世界得到广泛应用，目前的版本是 2.0 版。")]),m,e("p",null,[A,o(" 本质上是一个 "),e("a",w,[v,r(n)]),o("，包含了该用户身份信息相关的 key/value 键值对，例如：")]),q,e("ul",null,[e("li",null,[e("a",x,[o("RFC 6749"),r(n)])]),e("li",null,[e("a",O,[o("OAuth 2.0 的一个简单解释"),r(n)])]),e("li",null,[e("a",I,[o("理解 OAuth 2.0"),r(n)])]),e("li",null,[e("a",J,[o("The Simplest Guide To OAuth 2.0"),r(n)])]),e("li",null,[e("a",W,[o("OIDC 规范"),r(n)])]),e("li",null,[e("a",R,[o("什么是 JWT"),r(n)])])])])}const B=t(d,[["render",G],["__file","02.认证.html.vue"]]);export{B as default};
