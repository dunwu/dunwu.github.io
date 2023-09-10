const e=JSON.parse('{"key":"v-1b074cd6","path":"/pages/a1adcf/","title":"系统安全性架构","lang":"zh-CN","frontmatter":{"title":"系统安全性架构","date":"2018-07-05T15:11:00.000Z","category":["设计","架构","综合"],"tag":["架构","安全"],"permalink":"/pages/a1adcf/","description":"系统安全性架构 关键词：XSS、CSRF、SQL 注入、DoS、消息摘要、加密算法、证书 认证 SSO SSO(Single Sign On)，即单点登录。所谓单点登录，就是同平台的诸多应用登陆一次，下一次就免登陆的功能。 SSO 需要解决多个异构系统之间的问题： Session 共享问题 跨域问题 Session 共享问题 分布式 Session 的几种实现策略：","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/a1adcf/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"系统安全性架构"}],["meta",{"property":"og:description","content":"系统安全性架构 关键词：XSS、CSRF、SQL 注入、DoS、消息摘要、加密算法、证书 认证 SSO SSO(Single Sign On)，即单点登录。所谓单点登录，就是同平台的诸多应用登陆一次，下一次就免登陆的功能。 SSO 需要解决多个异构系统之间的问题： Session 共享问题 跨域问题 Session 共享问题 分布式 Session 的几种实现策略："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T15:41:08.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"架构"}],["meta",{"property":"article:tag","content":"安全"}],["meta",{"property":"article:published_time","content":"2018-07-05T15:11:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-08T15:41:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"系统安全性架构\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-07-05T15:11:00.000Z\\",\\"dateModified\\":\\"2023-09-08T15:41:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"认证","slug":"认证","link":"#认证","children":[{"level":3,"title":"SSO","slug":"sso","link":"#sso","children":[]},{"level":3,"title":"Oauth 2.0","slug":"oauth-2-0","link":"#oauth-2-0","children":[]}]},{"level":2,"title":"鉴权","slug":"鉴权","link":"#鉴权","children":[{"level":3,"title":"RBAC","slug":"rbac","link":"#rbac","children":[]},{"level":3,"title":"角色继承","slug":"角色继承","link":"#角色继承","children":[]},{"level":3,"title":"RBAC0 模型","slug":"rbac0-模型","link":"#rbac0-模型","children":[]},{"level":3,"title":"RBAC1 模型","slug":"rbac1-模型","link":"#rbac1-模型","children":[]},{"level":3,"title":"RBAC2 模型","slug":"rbac2-模型","link":"#rbac2-模型","children":[]},{"level":3,"title":"RBAC3 模型","slug":"rbac3-模型","link":"#rbac3-模型","children":[]},{"level":3,"title":"什么是权限","slug":"什么是权限","link":"#什么是权限","children":[]},{"level":3,"title":"用户组的使用","slug":"用户组的使用","link":"#用户组的使用","children":[]},{"level":3,"title":"实例分析","slug":"实例分析","link":"#实例分析","children":[]},{"level":3,"title":"如何设计 RBAC 权限系统","slug":"如何设计-rbac-权限系统","link":"#如何设计-rbac-权限系统","children":[]},{"level":3,"title":"实例分析","slug":"实例分析-1","link":"#实例分析-1","children":[]}]},{"level":2,"title":"审计","slug":"审计","link":"#审计","children":[]},{"level":2,"title":"网站攻击","slug":"网站攻击","link":"#网站攻击","children":[{"level":3,"title":"XSS","slug":"xss","link":"#xss","children":[]},{"level":3,"title":"CSRF","slug":"csrf","link":"#csrf","children":[]},{"level":3,"title":"SQL 注入","slug":"sql-注入","link":"#sql-注入","children":[]},{"level":3,"title":"DoS","slug":"dos","link":"#dos","children":[]}]},{"level":2,"title":"加密技术","slug":"加密技术","link":"#加密技术","children":[{"level":3,"title":"消息摘要","slug":"消息摘要","link":"#消息摘要","children":[]},{"level":3,"title":"加密算法","slug":"加密算法","link":"#加密算法","children":[]},{"level":3,"title":"证书","slug":"证书","link":"#证书","children":[]}]},{"level":2,"title":"信息过滤","slug":"信息过滤","link":"#信息过滤","children":[{"level":3,"title":"文本匹配","slug":"文本匹配","link":"#文本匹配","children":[]},{"level":3,"title":"黑名单","slug":"黑名单","link":"#黑名单","children":[]},{"level":3,"title":"分类算法","slug":"分类算法","link":"#分类算法","children":[]}]},{"level":2,"title":"风险控制","slug":"风险控制","link":"#风险控制","children":[{"level":3,"title":"风险种类","slug":"风险种类","link":"#风险种类","children":[]},{"level":3,"title":"风险控制手段","slug":"风险控制手段","link":"#风险控制手段","children":[]},{"level":3,"title":"规则引擎","slug":"规则引擎","link":"#规则引擎","children":[]},{"level":3,"title":"统计模型","slug":"统计模型","link":"#统计模型","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694186720000,"updatedTime":1694187668000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":38.38,"words":11514},"filePathRelative":"03.设计/01.架构/00.综合/07.系统安全性架构.md","localizedDate":"2018年7月5日","excerpt":"<h1> 系统安全性架构</h1>\\n<blockquote>\\n<p>关键词：XSS、CSRF、SQL 注入、DoS、消息摘要、加密算法、证书</p>\\n</blockquote>\\n<h2> 认证</h2>\\n<h3> SSO</h3>\\n<p><strong>SSO(Single Sign On)，即单点登录</strong>。所谓单点登录，就是同平台的诸多应用登陆一次，下一次就免登陆的功能。</p>\\n<p>SSO 需要解决多个异构系统之间的问题：</p>\\n<ul>\\n<li>Session 共享问题</li>\\n<li>跨域问题</li>\\n</ul>\\n<h4> Session 共享问题</h4>\\n<p>分布式 Session 的几种实现策略：</p>","autoDesc":true}');export{e as data};
