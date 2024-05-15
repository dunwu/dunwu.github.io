const t=JSON.parse('{"key":"v-738852ea","path":"/pages/340aa0/","title":"设计模式之抽象工厂模式","lang":"zh-CN","frontmatter":{"title":"设计模式之抽象工厂模式","date":"2015-06-03T10:26:00.000Z","order":3,"permalink":"/pages/340aa0/","category":["设计","设计模式"],"tag":["设计","设计模式"],"description":"设计模式之抽象工厂模式 意图 抽象工厂模式 （Abstract Factory）是一种创建型设计模式， 它能创建一系列相关的对象， 而无需指定其具体类。 **优点 ** 抽象工厂模式隔离了具体类的生成，用户并不需要知道什么被创建。由于这种隔离，更换一个具体工厂变得相对容易。所有的具体工厂都实现了抽象工厂中定义的那些公共接口，因此只需要改变具体工厂的实例，就可以在某种程度上改变整个软件系统的行为。另外，应用抽象工厂模式可以实现高内聚低耦合的设计目的，因此抽象工厂模式得到了广泛的应用。 当一个产品族中的多个对象被设计成一起工作时，它能够保证客户端始终只使用同一个产品族中的对象。这对一些需要根据当前环境来决定其行为的软件系统来说，是一种非常实用的设计模式。 增加新的具体工厂和产品族很方便，无须修改已有系统，符合“开放封闭原则”。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/340aa0/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"设计模式之抽象工厂模式"}],["meta",{"property":"og:description","content":"设计模式之抽象工厂模式 意图 抽象工厂模式 （Abstract Factory）是一种创建型设计模式， 它能创建一系列相关的对象， 而无需指定其具体类。 **优点 ** 抽象工厂模式隔离了具体类的生成，用户并不需要知道什么被创建。由于这种隔离，更换一个具体工厂变得相对容易。所有的具体工厂都实现了抽象工厂中定义的那些公共接口，因此只需要改变具体工厂的实例，就可以在某种程度上改变整个软件系统的行为。另外，应用抽象工厂模式可以实现高内聚低耦合的设计目的，因此抽象工厂模式得到了广泛的应用。 当一个产品族中的多个对象被设计成一起工作时，它能够保证客户端始终只使用同一个产品族中的对象。这对一些需要根据当前环境来决定其行为的软件系统来说，是一种非常实用的设计模式。 增加新的具体工厂和产品族很方便，无须修改已有系统，符合“开放封闭原则”。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T22:46:25.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"设计"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:published_time","content":"2015-06-03T10:26:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T22:46:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式之抽象工厂模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2015-06-03T10:26:00.000Z\\",\\"dateModified\\":\\"2024-05-15T22:46:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"意图","slug":"意图","link":"#意图","children":[]},{"level":2,"title":"适用场景","slug":"适用场景","link":"#适用场景","children":[]},{"level":2,"title":"结构","slug":"结构","link":"#结构","children":[{"level":3,"title":"结构说明","slug":"结构说明","link":"#结构说明","children":[]},{"level":3,"title":"结构代码范式","slug":"结构代码范式","link":"#结构代码范式","children":[]}]},{"level":2,"title":"伪代码","slug":"伪代码","link":"#伪代码","children":[]},{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[]},{"level":2,"title":"与其他模式的关系","slug":"与其他模式的关系","link":"#与其他模式的关系","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1715813185000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":4}]},"readingTime":{"minutes":9.62,"words":2887},"filePathRelative":"03.设计/02.设计模式/03.抽象工厂模式.md","localizedDate":"2015年6月3日","excerpt":"<h1> 设计模式之抽象工厂模式</h1>\\n<h2> 意图</h2>\\n<p><strong>抽象工厂模式</strong> （Abstract Factory）是一种创建型设计模式， 它能创建一系列相关的对象， 而无需指定其具体类。</p>\\n<p>**优点 **</p>\\n<ul>\\n<li>\\n<p>抽象工厂模式<strong>隔离了具体类的生成</strong>，用户并不需要知道什么被创建。由于这种隔离，更换一个具体工厂变得相对容易。所有的具体工厂都实现了抽象工厂中定义的那些公共接口，因此只需要改变具体工厂的实例，就可以在某种程度上改变整个软件系统的行为。另外，应用抽象工厂模式可以实现高内聚低耦合的设计目的，因此抽象工厂模式得到了广泛的应用。</p>\\n</li>\\n<li>\\n<p>当一个产品族中的多个对象被设计成一起工作时，它<strong>能够保证客户端始终只使用同一个产品族中的对象</strong>。这对一些需要根据当前环境来决定其行为的软件系统来说，是一种非常实用的设计模式。</p>\\n</li>\\n<li>\\n<p><strong>增加新的具体工厂和产品族很方便，无须修改已有系统，符合“开放封闭原则”</strong>。</p>\\n</li>\\n</ul>","autoDesc":true}');export{t as data};
