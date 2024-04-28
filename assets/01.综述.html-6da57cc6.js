import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as n,c as s,a as i,b as e,d as a,e as r}from"./app-2ca3a8cf.js";const p={},c=i("h1",{id:"权限认证综述",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#权限认证综述","aria-hidden":"true"},"#"),e(" 权限认证综述")],-1),h=i("h2",{id:"认证",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#认证","aria-hidden":"true"},"#"),e(" 认证")],-1),d=i("p",null,"认证是指根据声明者所特有的识别信息，确认声明者的身份。认证在英文中对应于 identification 这个单词。",-1),_=i("p",null,"最常见的认证实现方式是通过用户名和密码，但认证方式不限于此。下面都是当前常见到的认证技术：",-1),u=i("li",null,"身份证",-1),f=i("li",null,"用户名和密码认证",-1),m=i("li",null,"用户手机认证：手机短信、手机二维码扫描、手势密码",-1),b=i("li",null,"用户邮箱认证",-1),g={href:"https://tools.ietf.org/html/rfc6238",target:"_blank",rel:"noopener noreferrer"},k=i("li",null,"用户的生物学特征认证：指纹、语音、眼睛虹膜",-1),x=i("li",null,"用户的大数据识别认证",-1),w=i("li",null,"等等",-1),N=r('<p>为了确认用户的身份，防止伪造，在安全要求高的场合，经常会使用组合认证（或者叫多因素认证），也就是同时使用多个认证方式对用户的身份进行校验。</p><h2 id="授权" tabindex="-1"><a class="header-anchor" href="#授权" aria-hidden="true">#</a> 授权</h2><p>简单来说，授权一般是指获取用户的委派权限。在英文中对应于 authorization 这个单词。</p><p>在信息安全领域，授权是指资源所有者委派执行者，赋予执行者指定范围的资源操作权限，以便执行者代理执行对资源的相关操作。这里面包含有如下四个重要概念，</p><ul><li><strong>资源所有者</strong>：拥有资源的所有权利，一般就是资源的拥有者。</li><li><strong>资源执行者</strong>：被委派去执行资源的相关操作。</li><li><strong>操作权限</strong>：可以对资源进行的某种操作。</li><li><strong>资源</strong>：有价值的信息或数据等，受到安全保护。</li></ul><p>需要说明的是，资源所有者和执行者可以是自然人，就是普通用户，但不限于自然人。在信息安全领域，资源所有者和执行者，很多时候是应用程序或者机器。比如用户在浏览器上登录一个网站，那么这个浏览器就成为一个执行者，它在用户登录后获取了用户的授权，代表着用户执行各种指令，进行购物、下单、付钱、转账等等操作。</p><p>同时，资源所有者和执行者可以是分开的不同实体，也可以是同一个。若是分开的两者，则资源执行者是以资源所有者的代理形式而存在。</p><p>授权的实现方式非常多也很广泛，我们常见的银行卡、门禁卡、钥匙、公证书，这些都是现实生活中授权的实现方式。其实现方式主要通过一个共信的媒介完成，这个媒介不可被篡改，不可随意伪造，很多时候需要受保护，防止被窃取。</p><p>在互联网应用开发领域，授权所用到的授信媒介主要包括如下几种，</p><ul><li>通过 web 服务器的 session 机制，一个访问会话保持着用户的授权信息</li><li>通过 web 浏览器的 cookie 机制，一个网站的 cookie 保持着用户的授权信息</li><li>颁发授权令牌（token），一个合法有效的令牌中保持着用户的授权信息</li></ul><p>前面两者常见于 web 开发，需要有浏览器的支持。</p><h2 id="鉴权" tabindex="-1"><a class="header-anchor" href="#鉴权" aria-hidden="true">#</a> 鉴权</h2><p>鉴权是指对于一个声明者所声明的身份权利，对其所声明的真实性进行鉴别确认的过程。在英文中对应于 authentication 这个单词。</p><p>鉴权主要是对声明者所声明的真实性进行校验。若从授权出发，则会更加容易理解鉴权。授权和鉴权是两个上下游相匹配的关系，先授权，后鉴权。授权和鉴权两个词中的“权”，是同一个概念，就是所委派的权利，在实现上即为授信媒介的表达形式。</p><p>因此，鉴权的实现方式是和授权方式有一一对应关系。对授权所颁发授信媒介进行解析，确认其真实性。下面是鉴权的一些实现方式，</p><ul><li>门禁卡：通过门禁卡识别器</li><li>钥匙：通过相匹配的锁</li><li>银行卡：通过银行卡识别器</li><li>互联网 web 开发领域的 session/cookie/token：校验 session/cookie/token 的合法性和有效性</li></ul><p>鉴权是一个承上启下的一个环节，上游它接受授权的输出，校验其真实性后，然后获取权限（permission），这个将会为下一步的权限控制做好准备。</p><h2 id="权限控制" tabindex="-1"><a class="header-anchor" href="#权限控制" aria-hidden="true">#</a> 权限控制</h2><p>权限控制是指对可执行的各种操作组合配置为权限列表，然后根据执行者的权限，若其操作在权限范围内，则允许执行，否则禁止。权限控制在英文中对应于 access/permission control。</p><p>对于权限控制，可以分为两部分进行理解：一个是权限，另一个是控制。权限是抽象的逻辑概念，而控制是具体的实现方式。</p><p>先看权限（Permission），这是一个抽象的概念，一般预先定义和配置好，以便控制的具体实现。权限的定义，若简单点，可以直接对应于一个可执行的操作集合。而一般情况下，会有基于角色的方式来定义权限，由角色来封装可执行的操作集合。</p><p>若以门禁卡的权限实现为例，上述两种定义方式则可以各自表达为，</p><ul><li>这是一个门禁卡，拥有开公司所有的门的权限</li><li>这是一个门禁卡，拥有管理员角色的权限，因而可以开公司所有的门</li></ul><p>可以看到，权限作为一个抽象的概念，将执行者和可具体执行的操作相分离。</p><p>在上文的讨论中，鉴权的输出是权限（Permission）。一旦有了权限，便知道了可执行的操作，接下来就是控制的事情了。</p><p>对于控制，是根据执行者的权限，对其所执行的操作进行判断，决定允许或禁止当前操作的执行。现实生活中控制的实现方式，多种多样，</p><ul><li>门禁：控制门的开关</li><li>自行车锁：控制车轮</li><li>互联网 web 后端服务：控制接口访问，允许或拒绝访问请求</li></ul><h2 id="认证和鉴权" tabindex="-1"><a class="header-anchor" href="#认证和鉴权" aria-hidden="true">#</a> 认证和鉴权</h2><p>认证、授权、鉴权和权限控制这四个环节是一个前后依次发生、上下游的关系，</p><p>认证--&gt;授权--&gt;鉴权--&gt;权限控制</p><p>需要说明的是，这四个环节在有些时候会同时发生。 例如在下面的几个场景，</p><ul><li>使用门禁卡开门：认证、授权、鉴权、权限控制四个环节一气呵成，在瞬间同时发生</li><li>用户的网站登录：用户在使用用户名和密码进行登录时，认证和授权两个环节一同完成，而鉴权和权限控制则发生在后续的请求访问中，比如在选购物品或支付时。</li></ul><p>无论怎样，若从时间顺序方面来看，这四个环节是按时间前后、依次相继发生的关系。</p><p>认证和鉴权的关系：</p><p>这两个概念在很多时候是被混淆最多的概念。被混淆的主要原因，如上文所述，很多时候认证、授权、鉴权和权限控制一同发生，以至于被误解为，认证就是鉴权，鉴权就是认证。</p><p>其实两者是不一样的概念，两者都有对身份的确认过程，但是两者的主要区别在于，</p><ul><li>认证是确认声明者的本身身份，其作为授权的上游衔接而存在</li><li>鉴权是对声明者所声明的真实性进行确认的过程，其作为授权的下游衔接而存在</li></ul>',37);function V(v,B){const l=t("ExternalLinkIcon");return n(),s("div",null,[c,h,d,_,i("ul",null,[u,f,m,b,i("li",null,[i("a",g,[e("基于时间序列和用户相关的一次性口令"),a(l)])]),k,x,w]),N])}const L=o(p,[["render",V],["__file","01.综述.html.vue"]]);export{L as default};
