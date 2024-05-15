const e=JSON.parse('{"key":"v-52a1cbe0","path":"/pages/05473f/","title":"授权设计","lang":"zh-CN","frontmatter":{"title":"授权设计","date":"2022-11-15T17:48:06.000Z","order":3,"permalink":"/pages/05473f/","category":["设计","架构","安全"],"tag":["架构","安全","授权"],"description":"授权设计 授权模式 最简单的授权形式可能是根据是否已对发出请求的实体进行身份验证来授予或拒绝访问权限。 如果请求者可证明自己是所自称的身份，则可访问受保护的资源或功能。 常见的授权模式有以下几种： ACL：ACL 即 通过访问控制列表。ACL 进行的授权涉及到维护明确的特定实体列表，这些实体有权或无权访问资源或功能。 ACL 提供对身份验证即授权的精细控制，但管理工作会随着实体数量的增加而变得困难。 RBAC：RBAC 即 基于角色的权限控制（Role-Based Access Control）。RBAC 应该是最常见的授权模式。 使用 RBAC 时，会对角色进行定义，以说明实体可执行的活动类型。 应用程序开发人员向角色而非单个实体授予访问权限。 然后，管理员可再将角色分配给不同的实体，从而控制哪些实体有权访问哪些资源和功能。在高级 RBAC 实现中，可将角色映射到权限集合，其中权限描述了可执行的细化操作或活动。 然后，会将角色配置为权限组合。 通过将授予给为实体分配的各种角色的权限进行相交，计算实体的总体权限集。 ABAC：ABAC 即 基于属性的访问控制 是一种更精细的访问控制机制。在此方法中，规则应用于实体、所访问的资源和当前环境。 这些规则用于确定对资源和功能的访问级别。 例如，可能只允许拥有管理员身份的用户在工作日上午 9 点至下午 5 点期间访问使用元数据标记“仅限工作时间的管理员”标识的文件。 在这种情况下，通过检查用户的属性（状态为管理员）、资源属性（文件上的元数据标记）以及环境属性（当前时间）来确定访问权限。 ABAC 的优点：可通过规则和条件评估实现更精细的动态访问控制，而无需创建大量特定的角色和 RBAC 分配。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/05473f/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"授权设计"}],["meta",{"property":"og:description","content":"授权设计 授权模式 最简单的授权形式可能是根据是否已对发出请求的实体进行身份验证来授予或拒绝访问权限。 如果请求者可证明自己是所自称的身份，则可访问受保护的资源或功能。 常见的授权模式有以下几种： ACL：ACL 即 通过访问控制列表。ACL 进行的授权涉及到维护明确的特定实体列表，这些实体有权或无权访问资源或功能。 ACL 提供对身份验证即授权的精细控制，但管理工作会随着实体数量的增加而变得困难。 RBAC：RBAC 即 基于角色的权限控制（Role-Based Access Control）。RBAC 应该是最常见的授权模式。 使用 RBAC 时，会对角色进行定义，以说明实体可执行的活动类型。 应用程序开发人员向角色而非单个实体授予访问权限。 然后，管理员可再将角色分配给不同的实体，从而控制哪些实体有权访问哪些资源和功能。在高级 RBAC 实现中，可将角色映射到权限集合，其中权限描述了可执行的细化操作或活动。 然后，会将角色配置为权限组合。 通过将授予给为实体分配的各种角色的权限进行相交，计算实体的总体权限集。 ABAC：ABAC 即 基于属性的访问控制 是一种更精细的访问控制机制。在此方法中，规则应用于实体、所访问的资源和当前环境。 这些规则用于确定对资源和功能的访问级别。 例如，可能只允许拥有管理员身份的用户在工作日上午 9 点至下午 5 点期间访问使用元数据标记“仅限工作时间的管理员”标识的文件。 在这种情况下，通过检查用户的属性（状态为管理员）、资源属性（文件上的元数据标记）以及环境属性（当前时间）来确定访问权限。 ABAC 的优点：可通过规则和条件评估实现更精细的动态访问控制，而无需创建大量特定的角色和 RBAC 分配。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T22:46:25.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"架构"}],["meta",{"property":"article:tag","content":"安全"}],["meta",{"property":"article:tag","content":"授权"}],["meta",{"property":"article:published_time","content":"2022-11-15T17:48:06.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T22:46:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"授权设计\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-15T17:48:06.000Z\\",\\"dateModified\\":\\"2024-05-15T22:46:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"授权模式","slug":"授权模式","link":"#授权模式","children":[]},{"level":2,"title":"RBAC","slug":"rbac","link":"#rbac","children":[{"level":3,"title":"职责分离(Separation of Duty)","slug":"职责分离-separation-of-duty","link":"#职责分离-separation-of-duty","children":[]},{"level":3,"title":"RBAC0 模型","slug":"rbac0-模型","link":"#rbac0-模型","children":[]},{"level":3,"title":"RBAC1 模型","slug":"rbac1-模型","link":"#rbac1-模型","children":[]},{"level":3,"title":"RBAC2 模型","slug":"rbac2-模型","link":"#rbac2-模型","children":[]},{"level":3,"title":"RBAC3 模型","slug":"rbac3-模型","link":"#rbac3-模型","children":[]},{"level":3,"title":"什么是权限","slug":"什么是权限","link":"#什么是权限","children":[]},{"level":3,"title":"用户组的使用","slug":"用户组的使用","link":"#用户组的使用","children":[]},{"level":3,"title":"实例分析一、如何设计 RBAC 权限系统","slug":"实例分析一、如何设计-rbac-权限系统","link":"#实例分析一、如何设计-rbac-权限系统","children":[]},{"level":3,"title":"实例分析二、","slug":"实例分析二、","link":"#实例分析二、","children":[]}]},{"level":2,"title":"OAuth2.0","slug":"oauth2-0","link":"#oauth2-0","children":[{"level":3,"title":"OAuth2.0 简介","slug":"oauth2-0-简介","link":"#oauth2-0-简介","children":[]},{"level":3,"title":"OAuth 2.0 授权模式","slug":"oauth-2-0-授权模式","link":"#oauth-2-0-授权模式","children":[]},{"level":3,"title":"令牌","slug":"令牌","link":"#令牌","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1715813185000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":4}]},"readingTime":{"minutes":14.78,"words":4435},"filePathRelative":"03.设计/01.架构/02.安全/03.授权.md","localizedDate":"2022年11月15日","excerpt":"<h1> 授权设计</h1>\\n<h2> 授权模式</h2>\\n<p>最简单的授权形式可能是根据是否已对发出请求的实体进行身份验证来授予或拒绝访问权限。 如果请求者可证明自己是所自称的身份，则可访问受保护的资源或功能。</p>\\n<p>常见的授权模式有以下几种：</p>\\n<ul>\\n<li><strong>ACL</strong>：ACL 即 <strong>通过访问控制列表</strong>。ACL 进行的授权涉及到维护明确的特定实体列表，这些实体有权或无权访问资源或功能。 ACL 提供对身份验证即授权的精细控制，但管理工作会随着实体数量的增加而变得困难。</li>\\n<li><strong>RBAC</strong>：RBAC 即 <strong>基于角色的权限控制（Role-Based Access Control）</strong>。RBAC 应该是最常见的授权模式。 使用 RBAC 时，会对角色进行定义，以说明实体可执行的活动类型。 应用程序开发人员向角色而非单个实体授予访问权限。 然后，管理员可再将角色分配给不同的实体，从而控制哪些实体有权访问哪些资源和功能。在高级 RBAC 实现中，可将角色映射到权限集合，其中权限描述了可执行的细化操作或活动。 然后，会将角色配置为权限组合。 通过将授予给为实体分配的各种角色的权限进行相交，计算实体的总体权限集。</li>\\n<li><strong>ABAC</strong>：ABAC 即 <strong>基于属性的访问控制</strong> 是一种更精细的访问控制机制。在此方法中，规则应用于实体、所访问的资源和当前环境。 这些规则用于确定对资源和功能的访问级别。 例如，可能只允许拥有管理员身份的用户在工作日上午 9 点至下午 5 点期间访问使用元数据标记“仅限工作时间的管理员”标识的文件。 在这种情况下，通过检查用户的属性（状态为管理员）、资源属性（文件上的元数据标记）以及环境属性（当前时间）来确定访问权限。\\n<ul>\\n<li>ABAC 的优点：可通过规则和条件评估实现更精细的动态访问控制，而无需创建大量特定的角色和 RBAC 分配。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};