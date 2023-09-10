const e=JSON.parse('{"key":"v-05d9b6d5","path":"/pages/f90553/","title":"低代码平台","lang":"zh-CN","frontmatter":{"title":"低代码平台","date":"2021-05-06T16:57:48.000Z","category":["设计","架构","解决方案"],"tag":["架构","解决方案"],"permalink":"/pages/f90553/","description":"设计一个低代码平台 本文目标是设计一个用于提高开发人员开发效率的低代码平台，这里会采用系统解决方案设计的一般思路来逐步探寻设计方案。 业务分析 低代码平台是什么 广义上的低代码平台包括低代码平台和零代码平台，它们都属于 APaaS（Application Platform as a Service 应用平台即服务），两者的主要区别在于对代码的依赖程度： 低代码平台：通过自动代码生成和可视化编程，只需要少量代码，即可快速搭建各种应用。 零代码平台：零开发经验的业务人员通过拖拽等方式，无需编写代码，即可快速搭建各种应用。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/f90553/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"低代码平台"}],["meta",{"property":"og:description","content":"设计一个低代码平台 本文目标是设计一个用于提高开发人员开发效率的低代码平台，这里会采用系统解决方案设计的一般思路来逐步探寻设计方案。 业务分析 低代码平台是什么 广义上的低代码平台包括低代码平台和零代码平台，它们都属于 APaaS（Application Platform as a Service 应用平台即服务），两者的主要区别在于对代码的依赖程度： 低代码平台：通过自动代码生成和可视化编程，只需要少量代码，即可快速搭建各种应用。 零代码平台：零开发经验的业务人员通过拖拽等方式，无需编写代码，即可快速搭建各种应用。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T10:35:58.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"架构"}],["meta",{"property":"article:tag","content":"解决方案"}],["meta",{"property":"article:published_time","content":"2021-05-06T16:57:48.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T10:35:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"低代码平台\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-05-06T16:57:48.000Z\\",\\"dateModified\\":\\"2023-09-10T10:35:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"业务分析","slug":"业务分析","link":"#业务分析","children":[{"level":3,"title":"低代码平台是什么","slug":"低代码平台是什么","link":"#低代码平台是什么","children":[]},{"level":3,"title":"技术路线","slug":"技术路线","link":"#技术路线","children":[]},{"level":3,"title":"核心要素","slug":"核心要素","link":"#核心要素","children":[]},{"level":3,"title":"流行产品","slug":"流行产品","link":"#流行产品","children":[]}]},{"level":2,"title":"顶层设计","slug":"顶层设计","link":"#顶层设计","children":[]},{"level":2,"title":"组件设计","slug":"组件设计","link":"#组件设计","children":[{"level":3,"title":"列表页","slug":"列表页","link":"#列表页","children":[]},{"level":3,"title":"表单页","slug":"表单页","link":"#表单页","children":[]}]},{"level":2,"title":"扩展设计","slug":"扩展设计","link":"#扩展设计","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694342158000,"updatedTime":1694342158000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":6.39,"words":1916},"filePathRelative":"03.设计/01.架构/99.解决方案/低代码平台.md","localizedDate":"2021年5月6日","excerpt":"<h1> 设计一个低代码平台</h1>\\n<blockquote>\\n<p>本文目标是设计一个用于提高开发人员开发效率的低代码平台，这里会采用系统解决方案设计的一般思路来逐步探寻设计方案。</p>\\n</blockquote>\\n<h2> 业务分析</h2>\\n<h3> 低代码平台是什么</h3>\\n<p>广义上的低代码平台包括低代码平台和零代码平台，它们都属于 APaaS（Application Platform as a Service 应用平台即服务），两者的主要区别在于对代码的依赖程度：</p>\\n<ul>\\n<li><strong>低代码平台</strong>：通过自动代码生成和可视化编程，只需要少量代码，即可快速搭建各种应用。</li>\\n<li><strong>零代码平台</strong>：零开发经验的业务人员通过拖拽等方式，无需编写代码，即可快速搭建各种应用。</li>\\n</ul>","autoDesc":true}');export{e as data};
