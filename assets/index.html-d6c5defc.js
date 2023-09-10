const e=JSON.parse('{"key":"v-118cf250","path":"/pages/17aad9/","title":"JVM 类加载","lang":"zh-CN","frontmatter":{"title":"JVM 类加载","date":"2020-06-17T15:06:46.000Z","category":["Java","JavaSE","JVM"],"tag":["Java","JavaSE","JVM"],"permalink":"/pages/17aad9/","description":"JVM 类加载 img 类加载机制 类是在运行期间动态加载的。 类的加载指的是将类的 .class 文件中的二进制数据读入到内存中，将其放在运行时数据区的方法区内，然后在堆区创建一个java.lang.Class对象，用来封装类在方法区内的数据结构。类的加载的最终产品是位于堆区中的Class对象，Class对象封装了类在方法区内的数据结构，并且向 Java 程序员提供了访问方法区内的数据结构的接口。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/17aad9/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"JVM 类加载"}],["meta",{"property":"og:description","content":"JVM 类加载 img 类加载机制 类是在运行期间动态加载的。 类的加载指的是将类的 .class 文件中的二进制数据读入到内存中，将其放在运行时数据区的方法区内，然后在堆区创建一个java.lang.Class对象，用来封装类在方法区内的数据结构。类的加载的最终产品是位于堆区中的Class对象，Class对象封装了类在方法区内的数据结构，并且向 Java 程序员提供了访问方法区内的数据结构的接口。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T15:41:08.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JavaSE"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:published_time","content":"2020-06-17T15:06:46.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-08T15:41:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM 类加载\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-17T15:06:46.000Z\\",\\"dateModified\\":\\"2023-09-08T15:41:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"类加载机制","slug":"类加载机制","link":"#类加载机制","children":[]},{"level":2,"title":"类的生命周期","slug":"类的生命周期","link":"#类的生命周期","children":[{"level":3,"title":"（一）加载","slug":"一-加载","link":"#一-加载","children":[]},{"level":3,"title":"（二）验证","slug":"二-验证","link":"#二-验证","children":[]},{"level":3,"title":"（三）准备","slug":"三-准备","link":"#三-准备","children":[]},{"level":3,"title":"（四）解析","slug":"四-解析","link":"#四-解析","children":[]},{"level":3,"title":"（五）初始化","slug":"五-初始化","link":"#五-初始化","children":[]}]},{"level":2,"title":"ClassLoader","slug":"classloader","link":"#classloader","children":[{"level":3,"title":"类与类加载器","slug":"类与类加载器","link":"#类与类加载器","children":[]},{"level":3,"title":"类加载器分类","slug":"类加载器分类","link":"#类加载器分类","children":[]},{"level":3,"title":"双亲委派","slug":"双亲委派","link":"#双亲委派","children":[]},{"level":3,"title":"ClassLoader 参数","slug":"classloader-参数","link":"#classloader-参数","children":[]}]},{"level":2,"title":"类的加载","slug":"类的加载","link":"#类的加载","children":[{"level":3,"title":"类加载方式","slug":"类加载方式","link":"#类加载方式","children":[]},{"level":3,"title":"加载类错误","slug":"加载类错误","link":"#加载类错误","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694186720000,"updatedTime":1694187668000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":20.92,"words":6276},"filePathRelative":"01.Java/01.JavaSE/06.JVM/04.JVM类加载.md","localizedDate":"2020年6月17日","excerpt":"<h1> JVM 类加载</h1>\\n<figure><img src=\\"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200617145849.png\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>img</figcaption></figure>\\n<h2> 类加载机制</h2>\\n<blockquote>\\n<p>类是在运行期间动态加载的。</p>\\n</blockquote>\\n<p>类的加载指的是将类的 <code>.class</code> 文件中的二进制数据读入到内存中，将其放在运行时数据区的方法区内，然后在堆区创建一个<code>java.lang.Class</code>对象，用来封装类在方法区内的数据结构。类的加载的最终产品是位于堆区中的<code>Class</code>对象，<code>Class</code>对象封装了类在方法区内的数据结构，并且向 Java 程序员提供了访问方法区内的数据结构的接口。</p>","autoDesc":true}');export{e as data};
