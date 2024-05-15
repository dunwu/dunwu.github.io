const e=JSON.parse('{"key":"v-0e2812a3","path":"/pages/60bb6d/","title":"流量控制","lang":"zh-CN","frontmatter":{"title":"流量控制","date":"2020-01-20T11:06:00.000Z","order":3,"permalink":"/pages/60bb6d/","category":["分布式","分布式调度"],"tag":["分布式","流量调度","流量控制","限流","熔断","降级"],"description":"流量控制 在高并发场景下，为了应对瞬时海量请求的压力，保障系统的平稳运行，必须预估系统的流量阈值，通过限流规则阻断处理不过来的请求。 限流简介 什么是流量控制 流量控制（Flow Control），根据流量、并发线程数、响应时间等指标，把随机到来的流量调整成合适的形状，即流量塑形。避免应用被瞬时的流量高峰冲垮，从而保障应用的高可用性。 流量控制有以下几个角度： 流量指标，例如 QPS、并发线程数等。 资源的调用关系，例如资源的调用链路，资源和资源之间的关系，调用来源等。 控制效果，例如排队等待、直接拒绝、Warm Up（预热）等。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/60bb6d/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"流量控制"}],["meta",{"property":"og:description","content":"流量控制 在高并发场景下，为了应对瞬时海量请求的压力，保障系统的平稳运行，必须预估系统的流量阈值，通过限流规则阻断处理不过来的请求。 限流简介 什么是流量控制 流量控制（Flow Control），根据流量、并发线程数、响应时间等指标，把随机到来的流量调整成合适的形状，即流量塑形。避免应用被瞬时的流量高峰冲垮，从而保障应用的高可用性。 流量控制有以下几个角度： 流量指标，例如 QPS、并发线程数等。 资源的调用关系，例如资源的调用链路，资源和资源之间的关系，调用来源等。 控制效果，例如排队等待、直接拒绝、Warm Up（预热）等。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T22:46:25.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"流量调度"}],["meta",{"property":"article:tag","content":"流量控制"}],["meta",{"property":"article:tag","content":"限流"}],["meta",{"property":"article:tag","content":"熔断"}],["meta",{"property":"article:tag","content":"降级"}],["meta",{"property":"article:published_time","content":"2020-01-20T11:06:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T22:46:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"流量控制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-20T11:06:00.000Z\\",\\"dateModified\\":\\"2024-05-15T22:46:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"限流简介","slug":"限流简介","link":"#限流简介","children":[{"level":3,"title":"什么是流量控制","slug":"什么是流量控制","link":"#什么是流量控制","children":[]},{"level":3,"title":"为什么需要流量控制","slug":"为什么需要流量控制","link":"#为什么需要流量控制","children":[]}]},{"level":2,"title":"限流算法","slug":"限流算法","link":"#限流算法","children":[{"level":3,"title":"固定窗口限流算法","slug":"固定窗口限流算法","link":"#固定窗口限流算法","children":[]},{"level":3,"title":"滑动窗口限流算法","slug":"滑动窗口限流算法","link":"#滑动窗口限流算法","children":[]},{"level":3,"title":"漏桶限流算法","slug":"漏桶限流算法","link":"#漏桶限流算法","children":[]},{"level":3,"title":"令牌桶限流算法","slug":"令牌桶限流算法","link":"#令牌桶限流算法","children":[]},{"level":3,"title":"限流算法测试","slug":"限流算法测试","link":"#限流算法测试","children":[]}]},{"level":2,"title":"分布式限流算法","slug":"分布式限流算法","link":"#分布式限流算法","children":[{"level":3,"title":"Redis + Lua 实现的固定窗口限流算法","slug":"redis-lua-实现的固定窗口限流算法","link":"#redis-lua-实现的固定窗口限流算法","children":[]},{"level":3,"title":"Redis + Lua 实现的令牌桶限流算法","slug":"redis-lua-实现的令牌桶限流算法","link":"#redis-lua-实现的令牌桶限流算法","children":[]}]},{"level":2,"title":"限流中间件","slug":"限流中间件","link":"#限流中间件","children":[{"level":3,"title":"Hystrix","slug":"hystrix","link":"#hystrix","children":[]},{"level":3,"title":"Sentinel","slug":"sentinel","link":"#sentinel","children":[]},{"level":3,"title":"Resilience4j","slug":"resilience4j","link":"#resilience4j","children":[]}]},{"level":2,"title":"网关限流","slug":"网关限流","link":"#网关限流","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1715813185000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":6}]},"readingTime":{"minutes":17.76,"words":5329},"filePathRelative":"15.分布式/12.分布式调度/03.流量控制.md","localizedDate":"2020年1月20日","excerpt":"<h1> 流量控制</h1>\\n<blockquote>\\n<p>在高并发场景下，为了应对瞬时海量请求的压力，保障系统的平稳运行，必须预估系统的流量阈值，通过限流规则阻断处理不过来的请求。</p>\\n</blockquote>\\n<h2> 限流简介</h2>\\n<h3> 什么是流量控制</h3>\\n<p>流量控制（Flow Control），根据流量、并发线程数、响应时间等指标，把随机到来的流量调整成合适的形状，即流量塑形。避免应用被瞬时的流量高峰冲垮，从而保障应用的高可用性。</p>\\n<p>流量控制有以下几个角度：</p>\\n<ul>\\n<li>流量指标，例如 QPS、并发线程数等。</li>\\n<li>资源的调用关系，例如资源的调用链路，资源和资源之间的关系，调用来源等。</li>\\n<li>控制效果，例如排队等待、直接拒绝、Warm Up（预热）等。</li>\\n</ul>","autoDesc":true}');export{e as data};
