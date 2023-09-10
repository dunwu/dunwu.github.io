const e=JSON.parse('{"key":"v-7b7c375e","path":"/pages/82df5f/","title":"JavaWeb 之 Filter 和 Listener","lang":"zh-CN","frontmatter":{"title":"JavaWeb 之 Filter 和 Listener","date":"2020-08-24T19:41:46.000Z","category":["Java","JavaEE","JavaWeb"],"tag":["Java","JavaWeb","Filter","Listener"],"permalink":"/pages/82df5f/","description":"JavaWeb 之 Filter 和 Listener 引入了 Servlet 规范后，你不需要关心 Socket 网络通信、不需要关心 HTTP 协议，也不需要关心你的业务类是如何被实例化和调用的，因为这些都被 Servlet 规范标准化了，你只要关心怎么实现的你的业务逻辑。这对于程序员来说是件好事，但也有不方便的一面。所谓规范就是说大家都要遵守，就会千篇一律，但是如果这个规范不能满足你的业务的个性化需求，就有问题了，因此设计一个规范或者一个中间件，要充分考虑到可扩展性。Servlet 规范提供了两种扩展机制：Filter和Listener。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/82df5f/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"JavaWeb 之 Filter 和 Listener"}],["meta",{"property":"og:description","content":"JavaWeb 之 Filter 和 Listener 引入了 Servlet 规范后，你不需要关心 Socket 网络通信、不需要关心 HTTP 协议，也不需要关心你的业务类是如何被实例化和调用的，因为这些都被 Servlet 规范标准化了，你只要关心怎么实现的你的业务逻辑。这对于程序员来说是件好事，但也有不方便的一面。所谓规范就是说大家都要遵守，就会千篇一律，但是如果这个规范不能满足你的业务的个性化需求，就有问题了，因此设计一个规范或者一个中间件，要充分考虑到可扩展性。Servlet 规范提供了两种扩展机制：Filter和Listener。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T13:36:40.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JavaWeb"}],["meta",{"property":"article:tag","content":"Filter"}],["meta",{"property":"article:tag","content":"Listener"}],["meta",{"property":"article:published_time","content":"2020-08-24T19:41:46.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T13:36:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaWeb 之 Filter 和 Listener\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-08-24T19:41:46.000Z\\",\\"dateModified\\":\\"2023-09-10T13:36:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Filter","slug":"filter","link":"#filter","children":[{"level":3,"title":"过滤器方法","slug":"过滤器方法","link":"#过滤器方法","children":[]},{"level":3,"title":"过滤器配置","slug":"过滤器配置","link":"#过滤器配置","children":[]}]},{"level":2,"title":"Listener","slug":"listener","link":"#listener","children":[{"level":3,"title":"监听器的分类","slug":"监听器的分类","link":"#监听器的分类","children":[]},{"level":3,"title":"监听对象的创建和销毁","slug":"监听对象的创建和销毁","link":"#监听对象的创建和销毁","children":[]},{"level":3,"title":"监听对象的属性变化","slug":"监听对象的属性变化","link":"#监听对象的属性变化","children":[]},{"level":3,"title":"监听 Session 内的对象","slug":"监听-session-内的对象","link":"#监听-session-内的对象","children":[]}]},{"level":2,"title":"Filter 和 Listener","slug":"filter-和-listener","link":"#filter-和-listener","children":[]},{"level":2,"title":"示例代码","slug":"示例代码","link":"#示例代码","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694353000000,"updatedTime":1694353000000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":7.23,"words":2169},"filePathRelative":"01.Java/02.JavaEE/01.JavaWeb/03.JavaWeb之Filter和Listener.md","localizedDate":"2020年8月24日","excerpt":"<h1> JavaWeb 之 Filter 和 Listener</h1>\\n<p>引入了 Servlet 规范后，你不需要关心 Socket 网络通信、不需要关心 HTTP 协议，也不需要关心你的业务类是如何被实例化和调用的，因为这些都被 Servlet 规范标准化了，你只要关心怎么实现的你的业务逻辑。这对于程序员来说是件好事，但也有不方便的一面。所谓规范就是说大家都要遵守，就会千篇一律，但是如果这个规范不能满足你的业务的个性化需求，就有问题了，因此设计一个规范或者一个中间件，要充分考虑到可扩展性。Servlet 规范提供了两种扩展机制：<strong>Filter</strong>和<strong>Listener</strong>。</p>","autoDesc":true}');export{e as data};
