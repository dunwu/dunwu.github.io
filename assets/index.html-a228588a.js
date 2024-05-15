const n=JSON.parse('{"key":"v-200c4022","path":"/pages/a1549f/","title":"Spring 资源管理","lang":"zh-CN","frontmatter":{"title":"Spring 资源管理","date":"2019-09-04T19:46:41.000Z","order":20,"permalink":"/pages/a1549f/","category":["Java","框架","Spring","Spring核心"],"tag":["Java","框架","Spring","Resource"],"description":"Spring 资源管理 Version 6.0.3 Resource 接口 相对标准 URL 访问机制，Spring 的 org.springframework.core.io.Resource 接口抽象了对底层资源的访问接口，提供了一套更好的访问方式。 public interface Resource extends InputStreamSource { boolean exists(); boolean isReadable(); boolean isOpen(); boolean isFile(); URL getURL() throws IOException; URI getURI() throws IOException; File getFile() throws IOException; ReadableByteChannel readableChannel() throws IOException; long contentLength() throws IOException; long lastModified() throws IOException; Resource createRelative(String relativePath) throws IOException; String getFilename(); String getDescription(); }","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/a1549f/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Spring 资源管理"}],["meta",{"property":"og:description","content":"Spring 资源管理 Version 6.0.3 Resource 接口 相对标准 URL 访问机制，Spring 的 org.springframework.core.io.Resource 接口抽象了对底层资源的访问接口，提供了一套更好的访问方式。 public interface Resource extends InputStreamSource { boolean exists(); boolean isReadable(); boolean isOpen(); boolean isFile(); URL getURL() throws IOException; URI getURI() throws IOException; File getFile() throws IOException; ReadableByteChannel readableChannel() throws IOException; long contentLength() throws IOException; long lastModified() throws IOException; Resource createRelative(String relativePath) throws IOException; String getFilename(); String getDescription(); }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T22:46:25.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"框架"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:tag","content":"Resource"}],["meta",{"property":"article:published_time","content":"2019-09-04T19:46:41.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T22:46:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring 资源管理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-04T19:46:41.000Z\\",\\"dateModified\\":\\"2024-05-15T22:46:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Resource 接口","slug":"resource-接口","link":"#resource-接口","children":[]},{"level":2,"title":"内置的 Resource 实现","slug":"内置的-resource-实现","link":"#内置的-resource-实现","children":[]},{"level":2,"title":"ResourceLoader 接口","slug":"resourceloader-接口","link":"#resourceloader-接口","children":[]},{"level":2,"title":"ResourcePatternResolver 接口","slug":"resourcepatternresolver-接口","link":"#resourcepatternresolver-接口","children":[]},{"level":2,"title":"ResourceLoaderAware 接口","slug":"resourceloaderaware-接口","link":"#resourceloaderaware-接口","children":[]},{"level":2,"title":"资源依赖","slug":"资源依赖","link":"#资源依赖","children":[]},{"level":2,"title":"应用上下文和资源路径","slug":"应用上下文和资源路径","link":"#应用上下文和资源路径","children":[{"level":3,"title":"构造应用上下文","slug":"构造应用上下文","link":"#构造应用上下文","children":[]},{"level":3,"title":"使用通配符构造应用上下文","slug":"使用通配符构造应用上下文","link":"#使用通配符构造应用上下文","children":[]}]},{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1715813185000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":4}]},"readingTime":{"minutes":7.56,"words":2269},"filePathRelative":"01.Java/13.框架/01.Spring/01.Spring核心/20.Spring资源管理.md","localizedDate":"2019年9月4日","excerpt":"<h1> Spring 资源管理</h1>\\n<blockquote>\\n<p>Version 6.0.3</p>\\n</blockquote>\\n<h2> Resource 接口</h2>\\n<p>相对标准 URL 访问机制，Spring 的 <code>org.springframework.core.io.Resource</code> 接口抽象了对底层资源的访问接口，提供了一套更好的访问方式。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">Resource</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">InputStreamSource</span> <span class=\\"token punctuation\\">{</span>\\n\\n    <span class=\\"token keyword\\">boolean</span> <span class=\\"token function\\">exists</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">boolean</span> <span class=\\"token function\\">isReadable</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">boolean</span> <span class=\\"token function\\">isOpen</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">boolean</span> <span class=\\"token function\\">isFile</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token class-name\\">URL</span> <span class=\\"token function\\">getURL</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">IOException</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token class-name\\">URI</span> <span class=\\"token function\\">getURI</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">IOException</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token class-name\\">File</span> <span class=\\"token function\\">getFile</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">IOException</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token class-name\\">ReadableByteChannel</span> <span class=\\"token function\\">readableChannel</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">IOException</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">long</span> <span class=\\"token function\\">contentLength</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">IOException</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">long</span> <span class=\\"token function\\">lastModified</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">IOException</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token class-name\\">Resource</span> <span class=\\"token function\\">createRelative</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> relativePath<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">IOException</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token class-name\\">String</span> <span class=\\"token function\\">getFilename</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token class-name\\">String</span> <span class=\\"token function\\">getDescription</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
