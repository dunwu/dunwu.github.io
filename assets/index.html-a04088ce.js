const e=JSON.parse('{"key":"v-46f432d2","path":"/pages/ad472e/","title":"Spring 应用上下文生命周期","lang":"zh-CN","frontmatter":{"title":"Spring 应用上下文生命周期","date":"2022-12-23T09:58:09.000Z","category":["Java","框架","Spring","Spring核心"],"tag":["Java","框架","Spring"],"permalink":"/pages/ad472e/","description":"Spring 应用上下文生命周期 Spring 应用上下文启动准备阶段 AbstractApplicationContext#prepareRefresh() 方法 启动时间 - startupDate 状态标识 - closed(false)、active(true) 初始化 PropertySources - initPropertySources() 检验 Environment 中必须属性 初始化事件监听器集合 初始化早期 Spring 事件集合","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/ad472e/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Spring 应用上下文生命周期"}],["meta",{"property":"og:description","content":"Spring 应用上下文生命周期 Spring 应用上下文启动准备阶段 AbstractApplicationContext#prepareRefresh() 方法 启动时间 - startupDate 状态标识 - closed(false)、active(true) 初始化 PropertySources - initPropertySources() 检验 Environment 中必须属性 初始化事件监听器集合 初始化早期 Spring 事件集合"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T13:36:40.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"框架"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:published_time","content":"2022-12-23T09:58:09.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T13:36:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring 应用上下文生命周期\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-23T09:58:09.000Z\\",\\"dateModified\\":\\"2023-09-10T13:36:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Spring 应用上下文启动准备阶段","slug":"spring-应用上下文启动准备阶段","link":"#spring-应用上下文启动准备阶段","children":[]},{"level":2,"title":"BeanFactory 创建阶段","slug":"beanfactory-创建阶段","link":"#beanfactory-创建阶段","children":[]},{"level":2,"title":"BeanFactory 准备阶段","slug":"beanfactory-准备阶段","link":"#beanfactory-准备阶段","children":[]},{"level":2,"title":"BeanFactory 后置处理阶段","slug":"beanfactory-后置处理阶段","link":"#beanfactory-后置处理阶段","children":[]},{"level":2,"title":"BeanFactory 注册 BeanPostProcessor 阶段","slug":"beanfactory-注册-beanpostprocessor-阶段","link":"#beanfactory-注册-beanpostprocessor-阶段","children":[]},{"level":2,"title":"初始化內建 Bean：MessageSource","slug":"初始化內建-bean-messagesource","link":"#初始化內建-bean-messagesource","children":[]},{"level":2,"title":"初始化內建 Bean：Spring 事件广播器","slug":"初始化內建-bean-spring-事件广播器","link":"#初始化內建-bean-spring-事件广播器","children":[]},{"level":2,"title":"Spring 应用上下文刷新阶段","slug":"spring-应用上下文刷新阶段","link":"#spring-应用上下文刷新阶段","children":[]},{"level":2,"title":"Spring 事件监听器注册阶段","slug":"spring-事件监听器注册阶段","link":"#spring-事件监听器注册阶段","children":[]},{"level":2,"title":"BeanFactory 初始化完成阶段","slug":"beanfactory-初始化完成阶段","link":"#beanfactory-初始化完成阶段","children":[]},{"level":2,"title":"Spring 应用上下刷新完成阶段","slug":"spring-应用上下刷新完成阶段","link":"#spring-应用上下刷新完成阶段","children":[]},{"level":2,"title":"Spring 应用上下文启动阶段","slug":"spring-应用上下文启动阶段","link":"#spring-应用上下文启动阶段","children":[]},{"level":2,"title":"Spring 应用上下文停止阶段","slug":"spring-应用上下文停止阶段","link":"#spring-应用上下文停止阶段","children":[]},{"level":2,"title":"Spring 应用上下文关闭阶段","slug":"spring-应用上下文关闭阶段","link":"#spring-应用上下文关闭阶段","children":[]},{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694353000000,"updatedTime":1694353000000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":2.76,"words":829},"filePathRelative":"01.Java/13.框架/01.Spring/01.Spring核心/09.Spring应用上下文生命周期.md","localizedDate":"2022年12月23日","excerpt":"<h1> Spring 应用上下文生命周期</h1>\\n<h2> Spring 应用上下文启动准备阶段</h2>\\n<p>AbstractApplicationContext#prepareRefresh() 方法</p>\\n<ul>\\n<li>启动时间 - startupDate</li>\\n<li>状态标识 - closed(false)、active(true)</li>\\n<li>初始化 PropertySources - initPropertySources()</li>\\n<li>检验 Environment 中必须属性</li>\\n<li>初始化事件监听器集合</li>\\n<li>初始化早期 Spring 事件集合</li>\\n</ul>","autoDesc":true}');export{e as data};
