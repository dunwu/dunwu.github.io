const e=JSON.parse('{"key":"v-0ee81d01","path":"/pages/6236e0/","title":"认证设计","lang":"zh-CN","frontmatter":{"title":"认证设计","date":"2022-11-15T18:04:17.000Z","category":["设计","架构","安全"],"tag":["架构","安全","认证"],"permalink":"/pages/6236e0/","description":"认证设计 认证和授权 什么是认证 认证 (Authentication) 是根据凭据验明访问者身份的流程。即验证“你是你所说的那个人”的过程。 身份认证，通常通过用户名/邮箱/手机号以及密码匹配来完成，也可以通过手机/邮箱验证码或者生物特征（如：指纹、虹膜）等其他因素。在某些应用系统中，为了追求更高的安全性，往往会要求多种认证因素叠加使用，这就是我们经常说的多因素认证。 常见的认证方式 用户名、密码认证 手机和短信验证码认证 邮箱和邮件验证码认证 人脸识别、指纹识别等生物因素认证 令牌认证 OTP 认证 Radius 网络认证","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/6236e0/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"认证设计"}],["meta",{"property":"og:description","content":"认证设计 认证和授权 什么是认证 认证 (Authentication) 是根据凭据验明访问者身份的流程。即验证“你是你所说的那个人”的过程。 身份认证，通常通过用户名/邮箱/手机号以及密码匹配来完成，也可以通过手机/邮箱验证码或者生物特征（如：指纹、虹膜）等其他因素。在某些应用系统中，为了追求更高的安全性，往往会要求多种认证因素叠加使用，这就是我们经常说的多因素认证。 常见的认证方式 用户名、密码认证 手机和短信验证码认证 邮箱和邮件验证码认证 人脸识别、指纹识别等生物因素认证 令牌认证 OTP 认证 Radius 网络认证"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T15:41:08.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"架构"}],["meta",{"property":"article:tag","content":"安全"}],["meta",{"property":"article:tag","content":"认证"}],["meta",{"property":"article:published_time","content":"2022-11-15T18:04:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-08T15:41:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"认证设计\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-15T18:04:17.000Z\\",\\"dateModified\\":\\"2023-09-08T15:41:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"认证和授权","slug":"认证和授权","link":"#认证和授权","children":[{"level":3,"title":"什么是认证","slug":"什么是认证","link":"#什么是认证","children":[]},{"level":3,"title":"什么是授权","slug":"什么是授权","link":"#什么是授权","children":[]}]},{"level":2,"title":"Cookie 和 Session","slug":"cookie-和-session","link":"#cookie-和-session","children":[]},{"level":2,"title":"单点登录","slug":"单点登录","link":"#单点登录","children":[{"level":3,"title":"Session 共享问题","slug":"session-共享问题","link":"#session-共享问题","children":[]},{"level":3,"title":"Cookie 跨域","slug":"cookie-跨域","link":"#cookie-跨域","children":[]},{"level":3,"title":"CAS","slug":"cas","link":"#cas","children":[]}]},{"level":2,"title":"JWT","slug":"jwt","link":"#jwt","children":[]},{"level":2,"title":"Oauth2.0","slug":"oauth2-0","link":"#oauth2-0","children":[{"level":3,"title":"授权码模式","slug":"授权码模式","link":"#授权码模式","children":[]},{"level":3,"title":"隐藏模式","slug":"隐藏模式","link":"#隐藏模式","children":[]},{"level":3,"title":"密码模式","slug":"密码模式","link":"#密码模式","children":[]},{"level":3,"title":"客户端凭证模式","slug":"客户端凭证模式","link":"#客户端凭证模式","children":[]},{"level":3,"title":"令牌的更新","slug":"令牌的更新","link":"#令牌的更新","children":[]}]},{"level":2,"title":"OIDC","slug":"oidc","link":"#oidc","children":[{"level":3,"title":"ID Token","slug":"id-token","link":"#id-token","children":[]},{"level":3,"title":"Access Token","slug":"access-token","link":"#access-token","children":[]},{"level":3,"title":"Refresh Token","slug":"refresh-token","link":"#refresh-token","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694186720000,"updatedTime":1694187668000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":9.83,"words":2950},"filePathRelative":"03.设计/01.架构/02.安全/02.认证.md","localizedDate":"2022年11月15日","excerpt":"<h1> 认证设计</h1>\\n<h2> 认证和授权</h2>\\n<h3> 什么是认证</h3>\\n<p><strong>认证 (Authentication)</strong> 是根据凭据验明访问者身份的流程。即验证“你是你所说的那个人”的过程。</p>\\n<p>身份认证，通常通过用户名/邮箱/手机号以及密码匹配来完成，也可以通过手机/邮箱验证码或者生物特征（如：指纹、虹膜）等其他因素。在某些应用系统中，为了追求更高的安全性，往往会要求多种认证因素叠加使用，这就是我们经常说的多因素认证。</p>\\n<p>常见的认证方式</p>\\n<ul>\\n<li>用户名、密码认证</li>\\n<li>手机和短信验证码认证</li>\\n<li>邮箱和邮件验证码认证</li>\\n<li>人脸识别、指纹识别等生物因素认证</li>\\n<li>令牌认证</li>\\n<li>OTP 认证</li>\\n<li>Radius 网络认证</li>\\n</ul>","autoDesc":true}');export{e as data};
