import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c,a,b as n,d as t,e}from"./app-103fb7a1.js";const i={},r=e(`<h1 id="安全漏洞防护" tabindex="-1"><a class="header-anchor" href="#安全漏洞防护" aria-hidden="true">#</a> 安全漏洞防护</h1><h2 id="xss" tabindex="-1"><a class="header-anchor" href="#xss" aria-hidden="true">#</a> XSS</h2><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><p><strong><code>跨站脚本（Cross-site scripting，通常简称为XSS）</code></strong> 是一种网站应用程序的安全漏洞攻击，是代码注入的一种。它允许恶意用户将代码注入到网页上，其他用户在观看网页时就会受到影响。这类攻击通常包含了 HTML 以及用户端脚本语言。</p><p>XSS 攻击示例：</p><p>假如有下面一个 textbox</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>address1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value1from<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>value1from 是来自用户的输入，如果用户不是输入 value1from,而是输入 <code>&quot;/&gt;&lt;script&gt;alert(document.cookie)&lt;/script&gt;&lt;!-</code> 那么就会变成：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>address1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token function">alert</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>cookie<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!-</span> <span class="token attr-name">&quot;</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>嵌入的 JavaScript 代码将会被执行。攻击的威力，取决于用户输入了什么样的脚本。</p><h3 id="攻击手段和目的" tabindex="-1"><a class="header-anchor" href="#攻击手段和目的" aria-hidden="true">#</a> 攻击手段和目的</h3><p>常用的 XSS 攻击手段和目的有：</p><ul><li>盗用 cookie，获取敏感信息。</li><li>利用植入 Flash，通过 <code>crossdomain</code> 权限设置进一步获取更高权限；或者利用 Java 等得到类似的操作。</li><li>利用 <code>iframe</code>、<code>frame</code>、<code>XMLHttpRequest</code> 或上述 Flash 等方式，以（被攻击）用户的身份执行一些管理动作，或执行一些一般的如发微博、加好友、发私信等操作。</li><li>利用可被攻击的域受到其他域信任的特点，以受信任来源的身份请求一些平时不允许的操作，如进行不当的投票活动。</li><li>在访问量极大的一些页面上的 XSS 可以攻击一些小型网站，实现 DDoS 攻击的效果。</li></ul><h3 id="应对手段" tabindex="-1"><a class="header-anchor" href="#应对手段" aria-hidden="true">#</a> 应对手段</h3><ul><li><strong>过滤特殊字符</strong> - 将用户所提供的内容进行过滤，从而避免 HTML 和 Jascript 代码的运行。如 <code>&gt;</code> 转义为 <code>&amp;gt</code>、<code>&lt;</code> 转义为 <code>&amp;lt</code> 等，就可以防止大部分攻击。为了避免对不必要的内容错误转移，如 <code>3&lt;5</code> 中的 <code>&lt;</code> 需要进行文本匹配后再转移，如：<code>&lt;img src=</code> 这样的上下文中的 <code>&lt;</code> 才转义。</li><li><strong>设置 Cookie 为 HttpOnly</strong> - 设置了 HttpOnly 的 Cookie 可以防止 JavaScript 脚本调用，就无法通过 document.cookie 获取用户 Cookie 信息。</li></ul>`,15),u=a("p",null,"👉 参考阅读：",-1),d={href:"https://zh.wikipedia.org/wiki/%E8%B7%A8%E7%B6%B2%E7%AB%99%E6%8C%87%E4%BB%A4%E7%A2%BC",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.cnblogs.com/TankXiao/archive/2012/03/21/2337194.html",target:"_blank",rel:"noopener noreferrer"},h=e('<h2 id="csrf" tabindex="-1"><a class="header-anchor" href="#csrf" aria-hidden="true">#</a> CSRF</h2><h3 id="概念-1" tabindex="-1"><a class="header-anchor" href="#概念-1" aria-hidden="true">#</a> 概念</h3><p><strong><code>跨站请求伪造（Cross-site request forgery，CSRF）</code></strong>，也被称为 one-click attack 或者 session riding，通常缩写为 CSRF 或者 XSRF。它是一种挟持用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法。和跨站脚本（XSS）相比，XSS 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。</p><h3 id="攻击手段和目的-1" tabindex="-1"><a class="header-anchor" href="#攻击手段和目的-1" aria-hidden="true">#</a> 攻击手段和目的</h3><p>可以如此理解 CSRF：攻击者盗用了你的身份，以你的名义发送恶意请求。</p><p>CSRF 能做的事太多：</p><ul><li>以你名义发送邮件，发消息</li><li>用你的账号购买商品</li><li>用你的名义完成虚拟货币转账</li><li>泄露个人隐私</li><li>...</li></ul><h3 id="应对手段-1" tabindex="-1"><a class="header-anchor" href="#应对手段-1" aria-hidden="true">#</a> 应对手段</h3><ul><li><strong>表单 Token</strong> - CSRF 是一个伪造用户请求的操作，所以需要构造用户请求的所有参数才可以。表单 Token 通过在请求参数中添加随机数的办法来阻止攻击者获得所有请求参数。</li><li><strong>验证码</strong> - 请求提交时，需要用户输入验证码，以避免用户在不知情的情况下被攻击者伪造请求。</li><li><strong>Referer check</strong> - HTTP 请求头的 Referer 域中记录着请求资源，可通过检查请求来源，验证其是否合法。</li></ul>',9),g=a("p",null,"👉 参考阅读：",-1),m={href:"https://zh.wikipedia.org/wiki/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0",target:"_blank",rel:"noopener noreferrer"},v={href:"http://www.cnblogs.com/hyddd/archive/2009/04/09/1432744.html",target:"_blank",rel:"noopener noreferrer"},q={href:"https://zhuanlan.zhihu.com/p/22521378",target:"_blank",rel:"noopener noreferrer"},b={href:"https://zhuanlan.zhihu.com/p/22521378",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.jianshu.com/p/855395f9603b",target:"_blank",rel:"noopener noreferrer"},_=e(`<h2 id="sql-注入" tabindex="-1"><a class="header-anchor" href="#sql-注入" aria-hidden="true">#</a> SQL 注入</h2><h3 id="概念-2" tabindex="-1"><a class="header-anchor" href="#概念-2" aria-hidden="true">#</a> 概念</h3><p><strong><code>SQL 注入攻击（SQL injection）</code></strong>，是发生于应用程序之数据层的安全漏洞。简而言之，是在输入的字符串之中注入 SQL 指令，在设计不良的程序当中忽略了检查，那么这些注入进去的指令就会被数据库服务器误认为是正常的 SQL 指令而运行，因此遭到破坏或是入侵。</p><p>攻击示例：</p><p>考虑以下简单的登录表单：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/login<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>POST<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Username: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Password: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>登陆<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们的处理里面的 SQL 可能是这样的：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>username:<span class="token operator">=</span>r<span class="token punctuation">.</span>Form<span class="token punctuation">.</span>Get<span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span>
password:<span class="token operator">=</span>r<span class="token punctuation">.</span>Form<span class="token punctuation">.</span>Get<span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">sql</span>:<span class="token operator">=</span><span class="token string">&quot;SELECT * FROM user WHERE username=&#39;&quot;</span><span class="token operator">+</span>username<span class="token operator">+</span><span class="token string">&quot;&#39; AND password=&#39;&quot;</span><span class="token operator">+</span>password<span class="token operator">+</span><span class="token string">&quot;&#39;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果用户的输入的用户名如下，密码任意</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>myuser<span class="token string">&#39; or &#39;</span>foo<span class="token string">&#39; = &#39;</span>foo&#39; <span class="token comment">--</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那么我们的 SQL 变成了如下所示：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">user</span> <span class="token keyword">WHERE</span> username<span class="token operator">=</span><span class="token string">&#39;myuser&#39;</span> <span class="token operator">or</span> <span class="token string">&#39;foo&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span> <span class="token comment">--&#39;&#39; AND password=&#39;xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 SQL 里面 <code>--</code> 是注释标记，所以查询语句会在此中断。这就让攻击者在不知道任何合法用户名和密码的情况下成功登录了。</p><p>对于 MSSQL 还有更加危险的一种 SQL 注入，就是控制系统，下面这个可怕的例子将演示如何在某些版本的 MSSQL 数据库上执行系统命令。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">sql</span>:<span class="token operator">=</span><span class="token string">&quot;SELECT * FROM products WHERE name LIKE &#39;%&quot;</span><span class="token operator">+</span>prod<span class="token operator">+</span><span class="token string">&quot;%&#39;&quot;</span>
Db<span class="token punctuation">.</span><span class="token keyword">Exec</span><span class="token punctuation">(</span><span class="token keyword">sql</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果攻击提交 <code>a%&#39; exec master..xp_cmdshell &#39;net user test testpass /ADD&#39; --</code> 作为变量 prod 的值，那么 sql 将会变成</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">sql</span>:<span class="token operator">=</span><span class="token string">&quot;SELECT * FROM products WHERE name LIKE &#39;%a%&#39; exec master..xp_cmdshell &#39;net user test testpass /ADD&#39;--%&#39;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>MSSQL 服务器会执行这条 SQL 语句，包括它后面那个用于向系统添加新用户的命令。如果这个程序是以 sa 运行而 MSSQLSERVER 服务又有足够的权限的话，攻击者就可以获得一个系统帐号来访问主机了。</p><p>虽然以上的例子是针对某一特定的数据库系统的，但是这并不代表不能对其它数据库系统实施类似的攻击。针对这种安全漏洞，只要使用不同方法，各种数据库都有可能遭殃。</p><h3 id="攻击手段和目的-2" tabindex="-1"><a class="header-anchor" href="#攻击手段和目的-2" aria-hidden="true">#</a> 攻击手段和目的</h3><ul><li>数据表中的数据外泄，例如个人机密数据，账户数据，密码等。</li><li>数据结构被黑客探知，得以做进一步攻击（例如 <code>SELECT * FROM sys.tables</code>）。</li><li>数据库服务器被攻击，系统管理员账户被窜改（例如 <code>ALTER LOGIN sa WITH PASSWORD=&#39;xxxxxx&#39;</code>）。</li><li>获取系统较高权限后，有可能得以在网页加入恶意链接、恶意代码以及 XSS 等。</li><li>经由数据库服务器提供的操作系统支持，让黑客得以修改或控制操作系统（例如 xp_cmdshell &quot;net stop iisadmin&quot;可停止服务器的 IIS 服务）。</li><li>破坏硬盘数据，瘫痪全系统（例如 xp_cmdshell &quot;FORMAT C:&quot;）。</li></ul><h3 id="应对手段-2" tabindex="-1"><a class="header-anchor" href="#应对手段-2" aria-hidden="true">#</a> 应对手段</h3><ul><li><strong>使用参数化查询</strong> - 建议使用数据库提供的参数化查询接口，参数化的语句使用参数而不是将用户输入变量嵌入到 SQL 语句中，即不要直接拼接 SQL 语句。例如使用 database/sql 里面的查询函数 <code>Prepare</code> 和 <code>Query</code> ，或者 <code>Exec(query string, args ...interface{})</code>。</li><li><strong>单引号转换</strong> - 在组合 SQL 字符串时，先针对所传入的参数进行字符替换（将单引号字符替换为连续 2 个单引号字符）。</li></ul>`,23),f=a("p",null,"👉 参考阅读：",-1),x={href:"https://zh.wikipedia.org/wiki/SQL%E8%B3%87%E6%96%99%E9%9A%B1%E7%A2%BC%E6%94%BB%E6%93%8A",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/astaxie/build-web-application-with-golang/blob/master/zh/09.4.md",target:"_blank",rel:"noopener noreferrer"},w={href:"http://blog.jobbole.com/83092/",target:"_blank",rel:"noopener noreferrer"},L=e('<h2 id="dos" tabindex="-1"><a class="header-anchor" href="#dos" aria-hidden="true">#</a> DoS</h2><p><strong><code>拒绝服务攻击（denial-of-service attack, DoS）亦称洪水攻击</code></strong>，是一种网络攻击手法，其目的在于使目标电脑的网络或系统资源耗尽，使服务暂时中断或停止，导致其正常用户无法访问。</p><p>当黑客使用网络上两个或以上被攻陷的电脑作为“僵尸”向特定的目标发动“拒绝服务”式攻击时，称为分布式拒绝服务攻击（distributed denial-of-service attack，缩写：DDoS attack、DDoS）。</p><h3 id="攻击方式" tabindex="-1"><a class="header-anchor" href="#攻击方式" aria-hidden="true">#</a> 攻击方式</h3><ul><li>带宽消耗型攻击</li><li>资源消耗型攻击</li></ul><h3 id="应对手段-3" tabindex="-1"><a class="header-anchor" href="#应对手段-3" aria-hidden="true">#</a> 应对手段</h3><ul><li><strong>防火墙</strong> - 允许或拒绝特定通讯协议，端口或 IP 地址。当攻击从少数不正常的 IP 地址发出时，可以简单的使用拒绝规则阻止一切从攻击源 IP 发出的通信。</li><li><strong>路由器、交换机</strong> - 具有速度限制和访问控制能力。</li><li><strong>流量清洗</strong> - 通过采用抗 DoS 软件处理，将正常流量和恶意流量区分开。</li></ul>',7),R=a("p",null,"👉 参考阅读：",-1),C={href:"https://zh.wikipedia.org/wiki/%E9%98%BB%E6%96%B7%E6%9C%8D%E5%8B%99%E6%94%BB%E6%93%8A",target:"_blank",rel:"noopener noreferrer"};function B(y,F){const s=p("ExternalLinkIcon");return l(),c("div",null,[r,a("blockquote",null,[u,a("ul",null,[a("li",null,[a("a",d,[n("Wiki 词条 - 跨站脚本"),t(s)])]),a("li",null,[a("a",k,[n("Web 安全测试之 XSS"),t(s)])])])]),h,a("blockquote",null,[g,a("ul",null,[a("li",null,[a("a",m,[n("Wiki 词条 - 跨站请求伪造"),t(s)])]),a("li",null,[a("a",v,[n("浅谈 CSRF 攻击方式"),t(s)])]),a("li",null,[a("a",q,[n("「每日一题」CSRF 是什么？"),t(s)]),a("a",b,[n("「每日一题」CSRF 是什么？"),t(s)])]),a("li",null,[a("a",S,[n("WEB 安全之-CSRF（跨站请求伪造）"),t(s)])])])]),_,a("blockquote",null,[f,a("ul",null,[a("li",null,[a("a",x,[n("Wiki 词条 - SQL 注入攻击"),t(s)])]),a("li",null,[a("a",E,[n("避免 SQL 注入"),t(s)])]),a("li",null,[a("a",w,[n("实例讲解 SQL 注入攻击"),t(s)])])])]),L,a("blockquote",null,[R,a("ul",null,[a("li",null,[a("a",C,[n("拒绝服务攻击"),t(s)])])])])])}const D=o(i,[["render",B],["__file","05.安全漏洞.html.vue"]]);export{D as default};
