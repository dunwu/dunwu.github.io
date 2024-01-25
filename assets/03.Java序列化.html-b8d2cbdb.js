const e=JSON.parse('{"key":"v-43702de8","path":"/01.Java/01.JavaSE/04.IO/03.Java%E5%BA%8F%E5%88%97%E5%8C%96.html","title":"深入理解 Java 序列化","lang":"zh-CN","frontmatter":{"title":"深入理解 Java 序列化","date":"2019-05-09T19:06:05.000Z","order":3,"category":["Java","JavaSE","IO"],"tag":["Java","JavaSE","IO","序列化"],"description":"深入理解 Java 序列化 关键词：Serializable、serialVersionUID、transient、Externalizable、writeObject、readObject img","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/01.Java/01.JavaSE/04.IO/03.Java%E5%BA%8F%E5%88%97%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"深入理解 Java 序列化"}],["meta",{"property":"og:description","content":"深入理解 Java 序列化 关键词：Serializable、serialVersionUID、transient、Externalizable、writeObject、readObject img"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-24T23:58:37.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JavaSE"}],["meta",{"property":"article:tag","content":"IO"}],["meta",{"property":"article:tag","content":"序列化"}],["meta",{"property":"article:published_time","content":"2019-05-09T19:06:05.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-24T23:58:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"深入理解 Java 序列化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-05-09T19:06:05.000Z\\",\\"dateModified\\":\\"2024-01-24T23:58:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"序列化简介","slug":"序列化简介","link":"#序列化简介","children":[]},{"level":2,"title":"JDK 序列化","slug":"jdk-序列化","link":"#jdk-序列化","children":[{"level":3,"title":"ObjectInputStream 和 ObjectOutputStream","slug":"objectinputstream-和-objectoutputstream","link":"#objectinputstream-和-objectoutputstream","children":[]},{"level":3,"title":"Serializable 接口","slug":"serializable-接口","link":"#serializable-接口","children":[]},{"level":3,"title":"Externalizable 接口","slug":"externalizable-接口","link":"#externalizable-接口","children":[]},{"level":3,"title":"readResolve() 方法","slug":"readresolve-方法","link":"#readresolve-方法","children":[]},{"level":3,"title":"JDK 序列化的问题","slug":"jdk-序列化的问题","link":"#jdk-序列化的问题","children":[]}]},{"level":2,"title":"二进制序列化","slug":"二进制序列化","link":"#二进制序列化","children":[{"level":3,"title":"Protobuf","slug":"protobuf","link":"#protobuf","children":[]},{"level":3,"title":"Thrift","slug":"thrift","link":"#thrift","children":[]},{"level":3,"title":"Hessian","slug":"hessian","link":"#hessian","children":[]},{"level":3,"title":"Kryo","slug":"kryo","link":"#kryo","children":[]},{"level":3,"title":"FST","slug":"fst","link":"#fst","children":[]}]},{"level":2,"title":"JSON 序列化","slug":"json-序列化","link":"#json-序列化","children":[{"level":3,"title":"JSON 是什么","slug":"json-是什么","link":"#json-是什么","children":[]},{"level":3,"title":"JSON 标准","slug":"json-标准","link":"#json-标准","children":[]},{"level":3,"title":"JSON 优缺点","slug":"json-优缺点","link":"#json-优缺点","children":[]},{"level":3,"title":"JSON 库","slug":"json-库","link":"#json-库","children":[]},{"level":3,"title":"JSON 编码指南","slug":"json-编码指南","link":"#json-编码指南","children":[]}]},{"level":2,"title":"序列化技术选型","slug":"序列化技术选型","link":"#序列化技术选型","children":[{"level":3,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}]}],"git":{"createdTime":1694447058000,"updatedTime":1706140717000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":3}]},"readingTime":{"minutes":20.5,"words":6149},"filePathRelative":"01.Java/01.JavaSE/04.IO/03.Java序列化.md","localizedDate":"2019年5月9日","excerpt":"<h1> 深入理解 Java 序列化</h1>\\n<blockquote>\\n<p><strong><em>关键词：<code>Serializable</code>、<code>serialVersionUID</code>、<code>transient</code>、<code>Externalizable</code>、<code>writeObject</code>、<code>readObject</code></em></strong></p>\\n</blockquote>\\n<figure><img src=\\"https://raw.githubusercontent.com/dunwu/images/master/snap/20220626163533.png\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>img</figcaption></figure>","autoDesc":true}');export{e as data};
