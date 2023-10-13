import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as s,a as i,b as e,d as t,e as r}from"./app-dc48b2dc.js";const g={},l=r('<h1 id="授权设计" tabindex="-1"><a class="header-anchor" href="#授权设计" aria-hidden="true">#</a> 授权设计</h1><h2 id="授权模式" tabindex="-1"><a class="header-anchor" href="#授权模式" aria-hidden="true">#</a> 授权模式</h2><p>最简单的授权形式可能是根据是否已对发出请求的实体进行身份验证来授予或拒绝访问权限。 如果请求者可证明自己是所自称的身份，则可访问受保护的资源或功能。</p><p>常见的授权模式有以下几种：</p><ul><li><strong>ACL</strong>：ACL 即 <strong>通过访问控制列表</strong>。ACL 进行的授权涉及到维护明确的特定实体列表，这些实体有权或无权访问资源或功能。 ACL 提供对身份验证即授权的精细控制，但管理工作会随着实体数量的增加而变得困难。</li><li><strong>RBAC</strong>：RBAC 即 <strong>基于角色的权限控制（Role-Based Access Control）</strong>。RBAC 应该是最常见的授权模式。 使用 RBAC 时，会对角色进行定义，以说明实体可执行的活动类型。 应用程序开发人员向角色而非单个实体授予访问权限。 然后，管理员可再将角色分配给不同的实体，从而控制哪些实体有权访问哪些资源和功能。在高级 RBAC 实现中，可将角色映射到权限集合，其中权限描述了可执行的细化操作或活动。 然后，会将角色配置为权限组合。 通过将授予给为实体分配的各种角色的权限进行相交，计算实体的总体权限集。</li><li><strong>ABAC</strong>：ABAC 即 <strong>基于属性的访问控制</strong> 是一种更精细的访问控制机制。在此方法中，规则应用于实体、所访问的资源和当前环境。 这些规则用于确定对资源和功能的访问级别。 例如，可能只允许拥有管理员身份的用户在工作日上午 9 点至下午 5 点期间访问使用元数据标记“仅限工作时间的管理员”标识的文件。 在这种情况下，通过检查用户的属性（状态为管理员）、资源属性（文件上的元数据标记）以及环境属性（当前时间）来确定访问权限。 <ul><li>ABAC 的优点：可通过规则和条件评估实现更精细的动态访问控制，而无需创建大量特定的角色和 RBAC 分配。</li></ul></li></ul><h2 id="rbac" tabindex="-1"><a class="header-anchor" href="#rbac" aria-hidden="true">#</a> RBAC</h2><p><strong>RBAC（Role-Based Access Control）即：基于角色的权限控制</strong>。通过角色关联用户，角色关联权限的方式间接赋予用户权限。</p><p>每个用户关联一个或多个角色，每个角色关联一个或多个权限，从而可以实现了非常灵活的权限管理。角色可以根据实际业务需求灵活创建，这样就省去了每新增一个用户就要关联一遍所有权限的麻烦。简单来说 RBAC 就是：用户关联角色，角色关联权限。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200119210359.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>角色继承(Hierarchical Role) 就是指角色可以继承于其他角色，在拥有其他角色权限的同时，自己还可以关联额外的权限。这种设计可以给角色分组和分层，一定程度简化了权限管理工作。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200119210528.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="职责分离-separation-of-duty" tabindex="-1"><a class="header-anchor" href="#职责分离-separation-of-duty" aria-hidden="true">#</a> 职责分离(Separation of Duty)</h3><p>为了避免用户拥有过多权限而产生利益冲突，例如一个篮球运动员同时拥有裁判的权限（看一眼就给你判犯规狠不狠？），另一种职责分离扩展版的 RBAC 被提出。</p><p>职责分离有两种模式：</p><p>静态职责分离(Static Separation of Duty)：用户无法同时被赋予有冲突的角色。</p><figure><img src="https:////upload-images.jianshu.io/upload_images/594774-feb7c1074d151113.png?imageMogr2/auto-orient/strip|imageView2/2/w/509/format/webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>动态职责分离(Dynamic Separation of Duty)：用户在一次会话（Session）中不能同时激活自身所拥有的、互相有冲突的角色，只能选择其一。</p><figure><img src="https:////upload-images.jianshu.io/upload_images/594774-059b93e4209e8fa6.png?imageMogr2/auto-orient/strip|imageView2/2/w/397/format/webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>讲了这么多 RBAC，都还只是在用户和权限之间进行设计，并没有涉及到用户和对象之间的权限判断，而在实际业务系统中限制用户能够使用的对象是很常见的需求。</p><h3 id="rbac0-模型" tabindex="-1"><a class="header-anchor" href="#rbac0-模型" aria-hidden="true">#</a> RBAC0 模型</h3><p>最简单的用户、角色、权限模型。这里面又包含了 2 种：</p><ol><li>用户和角色是多对一关系，即：一个用户只充当一种角色，一种角色可以有多个用户担当。</li><li>用户和角色是多对多关系，即：一个用户可同时充当多种角色，一种角色可以有多个用户担当。</li></ol><p>那么，什么时候该使用多对一的权限体系，什么时候又该使用多对多的权限体系呢？</p><p>如果系统功能比较单一，使用人员较少，岗位权限相对清晰且确保不会出现兼岗的情况，此时可以考虑用多对一的权限体系。其余情况尽量使用多对多的权限体系，保证系统的可扩展性。如：张三既是行政，也负责财务工作，那张三就同时拥有行政和财务两个角色的权限。</p><h3 id="rbac1-模型" tabindex="-1"><a class="header-anchor" href="#rbac1-模型" aria-hidden="true">#</a> RBAC1 模型</h3><p>相对于 RBAC0 模型，增加了子角色，引入了继承概念，即子角色可以继承父角色的所有权限。</p><figure><img src="http://image.woshipm.com/wp-files/2018/07/CN3L7POv7d8Ku1QMnXGU.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>**使用场景：**如某个业务部门，有经理、主管、专员。主管的权限不能大于经理，专员的权限不能大于主管，如果采用 RBAC0 模型做权限系统，极可能出现分配权限失误，最终出现主管拥有经理都没有的权限的情况。</p><p>而 RBAC1 模型就很好解决了这个问题，创建完经理角色并配置好权限后，主管角色的权限继承经理角色的权限，并且支持在经理权限上删减主管权限。</p><h3 id="rbac2-模型" tabindex="-1"><a class="header-anchor" href="#rbac2-模型" aria-hidden="true">#</a> RBAC2 模型</h3><p>基于 RBAC0 模型，增加了对角色的一些限制：角色互斥、基数约束、先决条件角色等。</p><ul><li>**角色互斥：**同一用户不能分配到一组互斥角色集合中的多个角色，互斥角色是指权限互相制约的两个角色。案例：财务系统中一个用户不能同时被指派给会计角色和审计员角色。</li><li>**基数约束：**一个角色被分配的用户数量受限，它指的是有多少用户能拥有这个角色。例如：一个角色专门为公司 CEO 创建的，那这个角色的数量是有限的。</li><li>**先决条件角色：**指要想获得较高的权限，要首先拥有低一级的权限。例如：先有副总经理权限，才能有总经理权限。</li><li>**运行时互斥：**例如，允许一个用户具有两个角色的成员资格，但在运行中不可同时激活这两个角色。</li></ul><h3 id="rbac3-模型" tabindex="-1"><a class="header-anchor" href="#rbac3-模型" aria-hidden="true">#</a> RBAC3 模型</h3><p>称为统一模型，它包含了 RBAC1 和 RBAC2，利用传递性，也把 RBAC0 包括在内，综合了 RBAC0、RBAC1 和 RBAC2 的所有特点，这里就不在多描述了。</p><figure><img src="http://image.woshipm.com/wp-files/2018/07/7MEIhTRfnGmV0T5MBYoH.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="什么是权限" tabindex="-1"><a class="header-anchor" href="#什么是权限" aria-hidden="true">#</a> 什么是权限</h3><p>说了这么久用户-角色-权限，可能小伙伴们都了解了什么是用户、什么是角色。但是有的小伙伴会好奇，那权限又是个什么玩意呢？</p><p>权限是资源的集合，这里的资源指的是软件中所有的内容，包括模块、菜单、页面、字段、操作功能（增删改查）等等。具体的权限配置上，目前形式多种多样，按照我个人的理解，可以将权限分为：<strong>页面权限、操作权限和数据权限</strong>（这种分类法，主要是结合自己在工作中的实际情况理解总结而来，若有不足之处，也请大家指出）。</p><p>**页面权限：**所有系统都是由一个个的页面组成，页面再组成模块，用户是否能看到这个页面的菜单、是否能进入这个页面就称为页面权限。</p><p>如下图：</p><figure><img src="http://image.woshipm.com/wp-files/2018/07/zZMuljfwRvu8Be6oEFlV.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>客户列表、客户黑名单、客户审批页面组成了客户管理这个模块。对于普通用户，不能进行审批操作，即无客户审批页面权限，在他的账号登录后侧边导航栏只显示客户列表、客户黑名单两个菜单。</p><p>**操作权限：**用户凡是在操作系统中的任何动作、交互都是操作权限，如增删改查等。</p><p>**数据权限：**一般业务管理系统，都有数据私密性的要求：哪些人可以看到哪些数据，不可以看到哪些数据。</p><p>简单举个例子：某系统中有销售部门，销售专员负责推销商品，销售主管负责管理销售专员日常工作，经理负责组织管理销售主管作业。</p><p>如下图：</p><figure><img src="http://image.woshipm.com/wp-files/2018/07/eQKuv1vmlhA7eNDvlb1t.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>按照实际理解，‘销售专员张三’登录时，只能看到自己负责的数据；销售主管 2 登录时，能看到他所领导的所有业务员负责的数据，但看不到其他团队业务员负责的数据。</p><p>换另外一句话就是：我的客户只有我和我的直属上级以及直属上级的领导能看到，这就是我理解的数据权限。</p><p>要实现数据权限有多种方式：</p><ol><li>可以利用 RBAC1 模型，通过角色分级来实现。</li><li>在‘用户-角色-权限’的基础上，增加用户与组织的关联关系，用组织决定用户的数据权限。</li></ol><p>具体如何做呢？</p><p><strong>① 组织层级划分：</strong></p><figure><img src="http://image.woshipm.com/wp-files/2018/07/7OfSVWkovU90yPLCAYXl.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>**② 数据可视权限规则制定：**上级组织只能看到下级组织员工负责的数据，而不能看到其他平级组织及其下级组织的员工数据等。</p><p>通过以上两点，系统就可以在用户登录时，自动判断要给用户展示哪些数据了。</p><h3 id="用户组的使用" tabindex="-1"><a class="header-anchor" href="#用户组的使用" aria-hidden="true">#</a> 用户组的使用</h3><p>当平台用户基数增大，角色类型增多时，如果直接给用户配角色，管理员的工作量就会很大。这时候我们可以引入一个概念“用户组”，就是将相同属性的用户归类到一起。</p><p>例如：加入用户组的概念后，可以将部门看做一个用户组，再给这个部门直接赋予角色（1 万员工部门可能就几十个），使部门拥有部门权限，这样这个部门的所有用户都有了部门权限，而不需要为每一个用户再单独指定角色，极大的减少了分配权限的工作量。</p><p>同时，也可以为特定的用户指定角色，这样用户除了拥有所属用户组的所有权限外，还拥有自身特定的权限。</p><p>用户组的优点，除了减少工作量，还有更便于理解、增加多级管理关系等。如：我们在进行组织机构配置的时候，除了加入部门，还可以加入科室、岗位等层级，来为用户组内部成员的权限进行等级上的区分。</p>',61),h={href:"https://wen.woshipm.com/question/detail/88fues.html%E3%80%82%E5%9C%A8%E8%BF%99%E9%87%8C%E4%B9%9F%E5%8D%81%E5%88%86%E6%84%9F%E8%B0%A2%E4%B8%BA%E6%88%91%E8%A7%A3%E7%AD%94%E7%96%91%E6%83%91%E7%9A%84%E6%9C%8B%E5%8F%8B%E4%BB%AC%EF%BC%81",target:"_blank",rel:"noopener noreferrer"},c=r('<h3 id="实例分析一、如何设计-rbac-权限系统" tabindex="-1"><a class="header-anchor" href="#实例分析一、如何设计-rbac-权限系统" aria-hidden="true">#</a> 实例分析一、如何设计 RBAC 权限系统</h3><p>首先，我们思考一下一个简单的权限系统应该具备哪些内容？</p><p>答案显而易见，RBAC 模型：<strong>用户-角色-权限</strong>。所以最基本的我们应该具备用户、角色、权限这三个内容。</p><p>接下来，我们思考，究竟如何将三者关联起来。回顾前文，角色作为枢纽，关联用户、权限。所以在 RBAC 模型下，我们应该：<strong>创建一个角色，并为这个角色赋予相应权限，最后将角色赋予用户</strong>。</p><p>将这个问题抽象为流程，如下图：</p><figure><img src="http://image.woshipm.com/wp-files/2018/07/UGJGmWviv32mWGgEkYpC.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>现在，基本的流程逻辑已经抽象出来了，接下来，分析该如何设计呢？</p><ul><li>第一步，需要角色管理列表，在角色管理列表能快速创建一个角色，且创建角色的同时能为角色配置权限，并且支持创建成功的角色列表能随时进行权限配置的的修改；</li><li>第二步，需要用户管理列表，在用户管理列表能快速添加一个用户，且添加用户时有让用户关联角色的功能。</li></ul><p>简单来说权限系统设计就包含以上两步，接下来为大家进行实例分析。</p><h3 id="实例分析二、" tabindex="-1"><a class="header-anchor" href="#实例分析二、" aria-hidden="true">#</a> 实例分析二、</h3><p><strong>① 创建角色列表</strong></p><figure><img src="http://image.woshipm.com/wp-files/2018/07/KHqjDiWnyZrOxgJnvjRX.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在角色列表快速创建一个角色：点击创建角色，支持创建角色时配置权限。</p><figure><img src="http://image.woshipm.com/wp-files/2018/07/uPzZ1iOh0bQpKkYbWCAc.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>② 创建用户列表</strong></p><figure><img src="http://image.woshipm.com/wp-files/2018/07/x1pHe9duvadzeUfoeOac.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在用户列表快速创建一个用户：支持用户关联角色的功能。</p><figure><img src="http://image.woshipm.com/wp-files/2018/07/VZLXACV2P72RTzJn0Us8.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>上述案例是基于最简单的 RBAC0 模型创建，适用于大部分常规的权限管理系统。</p><p>下面再分析一下 RBAC1 中角色分级具体如何设计。</p><ol><li><strong>在 RBAC0 的基础上，加上角色等级这个字段。</strong></li><li><strong>权限分配规则制定</strong>：低等级角色只能在高等级角色权限基础上进行删减权限。</li></ol><p>具体界面呈现如下图：</p><figure><img src="http://image.woshipm.com/wp-files/2018/07/lGcyi0RJKsKmDI6C0bXy.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>以上就是简单的 RBAC 系统设计，若需更复杂的，还请读者根据上面的分析自行揣摩思考，尽管样式不同，但万变不离其宗，理解清楚 RBAC 模型后，结合自己的业务就可以设计出一套符合自己平台需求的角色权限系统，具体的就不再多阐述了。</p><h2 id="oauth2-0" tabindex="-1"><a class="header-anchor" href="#oauth2-0" aria-hidden="true">#</a> OAuth2.0</h2><h3 id="oauth2-0-简介" tabindex="-1"><a class="header-anchor" href="#oauth2-0-简介" aria-hidden="true">#</a> OAuth2.0 简介</h3>',26),d={href:"https://en.wikipedia.org/wiki/OAuth",target:"_blank",rel:"noopener noreferrer"},u=r('<p>简单来说，<strong>OAuth 是一种授权机制。资源的所有者告诉系统，同意授权第三方应用进入系统，访问这些资源。系统从而产生一个短期的进入令牌（token），用来代替密码，供第三方应用使用。</strong></p><p>客户端必须得到用户的授权（authorization grant），才能获得令牌（access token）。</p><p>根据 OAuth 2.0 协议规范，主要有<strong>四个主体</strong>：</p><ul><li><strong>授权服务器</strong>：负责颁发 Access Token。</li><li><strong>资源所有者</strong>：你的应用的用户是资源的所有者，授权其他人访问他的资源。</li><li><strong>调用方</strong>：调用方请求获取 Access Token，经过用户授权后，授权服务器为其颁发 Access Token。调用方可以携带 Access Token 到资源服务器访问用户的资源。</li><li><strong>资源服务器</strong>：接受 Access Token，然后验证它的被赋予的权限项目，最后返回资源。</li></ul><p>其他重要概念：</p><ul><li>一次 OAuth 2.0 授权是指用户<strong>授权调用方</strong>相关的权限。</li><li><strong>Code 授权码</strong>是由授权服务器颁发的，用于调用方使用 Code 换取 Token。</li><li><strong>Access Token</strong> 由授权服务器颁发，持有 Access Token 说明完成了用户授权。</li><li><strong>Refresh Token</strong> 是一个可选的 Token，用于在 Access Token 过期后获取一个新的 Access Token。</li></ul><h3 id="oauth-2-0-授权模式" tabindex="-1"><a class="header-anchor" href="#oauth-2-0-授权模式" aria-hidden="true">#</a> OAuth 2.0 授权模式</h3><p>OAuth 2.0 定义了四种授权方式。</p><ul><li><strong>授权码模式（authorization code）</strong></li><li><strong>简化模式（implicit）</strong></li><li><strong>密码模式（resource owner password credentials）</strong></li><li><strong>客户端模式（client credentials）</strong></li></ul><h4 id="授权码模式" tabindex="-1"><a class="header-anchor" href="#授权码模式" aria-hidden="true">#</a> 授权码模式</h4><p><strong>授权码（authorization code）方式，指的是第三方应用先申请一个授权码，然后再用该授权码获取令牌。</strong></p><p>这种方式是最常用的流程，安全性也最高，它适用于那些有后端的 Web 应用。授权码通过前端传送，令牌则是储存在后端，而且所有与资源服务器的通信都在后端完成。这样的前后端分离，可以避免令牌泄漏。</p><h4 id="隐藏模式" tabindex="-1"><a class="header-anchor" href="#隐藏模式" aria-hidden="true">#</a> 隐藏模式</h4><p>有些 Web 应用是纯前端应用，没有后端。这时就不能用上面的方式了，必须将令牌储存在前端。<strong>RFC 6749 就规定了第二种方式，允许直接向前端颁发令牌。这种方式没有授权码这个中间步骤，所以称为（授权码）&quot;隐藏式&quot;（implicit）。</strong></p><h4 id="密码模式" tabindex="-1"><a class="header-anchor" href="#密码模式" aria-hidden="true">#</a> 密码模式</h4><p><strong>如果你高度信任某个应用，RFC 6749 也允许用户把用户名和密码，直接告诉该应用。该应用就使用你的密码，申请令牌，这种方式称为&quot;密码式&quot;（password）。</strong></p><h4 id="客户端凭证模式" tabindex="-1"><a class="header-anchor" href="#客户端凭证模式" aria-hidden="true">#</a> 客户端凭证模式</h4><p>适用于没有前端的命令行应用，即在命令行下请求令牌。</p><h3 id="令牌" tabindex="-1"><a class="header-anchor" href="#令牌" aria-hidden="true">#</a> 令牌</h3><p>如果用户访问的时候，客户端的&quot;访问令牌&quot;已经过期，则需要使用&quot;更新令牌&quot;申请一个新的访问令牌。</p><p>客户端发出更新令牌的 HTTP 请求，包含以下参数：</p><ul><li>grant<em>type：表示使用的授权模式，此处的值固定为&quot;refresh</em>token&quot;，必选项。</li><li>refresh_token：表示早前收到的更新令牌，必选项。</li><li>scope：表示申请的授权范围，不可以超出上一次申请的范围，如果省略该参数，则表示与上一次一致</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',23),f={href:"https://learn.microsoft.com/zh-cn/azure/active-directory/develop/authorization-basics",target:"_blank",rel:"noopener noreferrer"},m={href:"https://zhuanlan.zhihu.com/p/63769951",target:"_blank",rel:"noopener noreferrer"},A={href:"https://www.jianshu.com/p/ce0944b4a903",target:"_blank",rel:"noopener noreferrer"},b={href:"http://www.woshipm.com/pd/1150093.html",target:"_blank",rel:"noopener noreferrer"};function C(B,w){const a=o("ExternalLinkIcon");return p(),s("div",null,[l,i("p",null,[e("关于用户组的详细疑难解答，请查看"),i("a",h,[e("https://wen.woshipm.com/question/detail/88fues.html。在这里也十分感谢为我解答疑惑的朋友们！"),t(a)])]),c,i("p",null,[i("a",d,[e("OAuth"),t(a)]),e(" 是一个授权标准协议。OAuth 在全世界得到广泛应用，目前的版本是 2.0 版。")]),u,i("ul",null,[i("li",null,[i("a",f,[e("Microsoft Azure 中国技术文档 - 授权基础知识"),t(a)])]),i("li",null,[i("a",m,[e("RBAC用户、角色、权限、组设计方案"),t(a)])]),i("li",null,[i("a",A,[e("权限系统设计模型分析（DAC，MAC，RBAC，ABAC）"),t(a)])]),i("li",null,[i("a",b,[e("RBAC 模型：基于用户-角色-权限控制的一些思考"),t(a)])])])])}const x=n(g,[["render",C],["__file","03.授权.html.vue"]]);export{x as default};
