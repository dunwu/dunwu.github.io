const t=JSON.parse('{"key":"v-daf91164","path":"/15.%E5%88%86%E5%B8%83%E5%BC%8F/12.%E5%88%86%E5%B8%83%E5%BC%8F%E8%B0%83%E5%BA%A6/03.%E6%B5%81%E9%87%8F%E6%8E%A7%E5%88%B6.html","title":"流量控制","lang":"zh-CN","frontmatter":{"title":"流量控制","date":"2020-01-20T11:06:00.000Z","order":3,"category":["分布式","分布式调度"],"tag":["分布式","流量调度","流量控制","限流","熔断","降级"],"description":"流量控制 在高并发场景下，为了应对瞬时海量请求的压力，保障系统的平稳运行，必须预估系统的流量阈值，通过限流规则阻断处理不过来的请求。 限流简介 限流可以认为是服务降级的一种。限流就是限制系统的输入和输出流量已达到保护系统的目的。一般来说系统的吞吐量是可以被测算的，为了保证系统的稳定运行，一旦达到的需要限制的阈值，就需要限制流量并采取一些措施以完成限制流量的目的。比如：延迟处理，拒绝处理，或者部分拒绝处理等等。 限流规则包含三个部分：时间粒度，接口粒度，最大限流值。限流规则设置是否合理直接影响到限流是否合理有效。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/15.%E5%88%86%E5%B8%83%E5%BC%8F/12.%E5%88%86%E5%B8%83%E5%BC%8F%E8%B0%83%E5%BA%A6/03.%E6%B5%81%E9%87%8F%E6%8E%A7%E5%88%B6.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"流量控制"}],["meta",{"property":"og:description","content":"流量控制 在高并发场景下，为了应对瞬时海量请求的压力，保障系统的平稳运行，必须预估系统的流量阈值，通过限流规则阻断处理不过来的请求。 限流简介 限流可以认为是服务降级的一种。限流就是限制系统的输入和输出流量已达到保护系统的目的。一般来说系统的吞吐量是可以被测算的，为了保证系统的稳定运行，一旦达到的需要限制的阈值，就需要限制流量并采取一些措施以完成限制流量的目的。比如：延迟处理，拒绝处理，或者部分拒绝处理等等。 限流规则包含三个部分：时间粒度，接口粒度，最大限流值。限流规则设置是否合理直接影响到限流是否合理有效。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T15:44:18.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"流量调度"}],["meta",{"property":"article:tag","content":"流量控制"}],["meta",{"property":"article:tag","content":"限流"}],["meta",{"property":"article:tag","content":"熔断"}],["meta",{"property":"article:tag","content":"降级"}],["meta",{"property":"article:published_time","content":"2020-01-20T11:06:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T15:44:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"流量控制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-20T11:06:00.000Z\\",\\"dateModified\\":\\"2023-09-11T15:44:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"限流简介","slug":"限流简介","link":"#限流简介","children":[]},{"level":2,"title":"限流算法","slug":"限流算法","link":"#限流算法","children":[{"level":3,"title":"计数器法","slug":"计数器法","link":"#计数器法","children":[]},{"level":3,"title":"滑动窗口法","slug":"滑动窗口法","link":"#滑动窗口法","children":[]},{"level":3,"title":"漏桶法","slug":"漏桶法","link":"#漏桶法","children":[]},{"level":3,"title":"令牌桶法","slug":"令牌桶法","link":"#令牌桶法","children":[]}]},{"level":2,"title":"限流工具","slug":"限流工具","link":"#限流工具","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1694447058000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":8.93,"words":2679},"filePathRelative":"15.分布式/12.分布式调度/03.流量控制.md","localizedDate":"2020年1月20日","excerpt":"<h1> 流量控制</h1>\\n<blockquote>\\n<p>在高并发场景下，为了应对瞬时海量请求的压力，保障系统的平稳运行，必须预估系统的流量阈值，通过限流规则阻断处理不过来的请求。</p>\\n</blockquote>\\n<h2> 限流简介</h2>\\n<p>限流可以认为是服务降级的一种。限流就是<strong>限制系统的输入和输出流量已达到保护系统的目的</strong>。一般来说系统的吞吐量是可以被测算的，为了保证系统的稳定运行，一旦达到的需要限制的阈值，就需要限制流量并采取一些措施以完成限制流量的目的。比如：延迟处理，拒绝处理，或者部分拒绝处理等等。</p>\\n<p>限流规则包含三个部分：时间粒度，接口粒度，最大限流值。限流规则设置是否合理直接影响到限流是否合理有效。</p>","autoDesc":true}');export{t as data};
