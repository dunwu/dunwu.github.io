const e=JSON.parse('{"key":"v-60f6dcf5","path":"/01.Java/13.%E6%A1%86%E6%9E%B6/01.Spring/03.SpringWeb/01.SpringWebMvc.html","title":"spring-mvc","lang":"zh-CN","frontmatter":{"title":"spring-mvc","date":"2017-11-08T16:53:27.000Z","order":1,"category":["Java","框架","Spring","SpringWeb"],"tag":["Java","框架","Spring","Web"],"description":"SpringMVC 简介 SpringMVC 工作流程描述 Spring MVC 的工作流程可以用一幅图来说明： img 向服务器发送 HTTP 请求，请求被前端控制器 DispatcherServlet 捕获。 DispatcherServlet 根据 &lt;servlet-name&gt;-servlet.xml 中的配置对请求的 URL 进行解析，得到请求资源标识符（URI）。然后根据该 URI，调用 HandlerMapping 获得该 Handler 配置的所有相关的对象（包括 Handler 对象以及 Handler 对象对应的拦截器），最后以HandlerExecutionChain 对象的形式返回。 DispatcherServlet 根据获得的Handler，选择一个合适的 HandlerAdapter。（附注：如果成功获得HandlerAdapter后，此时将开始执行拦截器的 preHandler(...)方法）。 提取Request中的模型数据，填充Handler入参，开始执行Handler（Controller)。 在填充Handler的入参过程中，根据你的配置，Spring 将帮你做一些额外的工作： HttpMessageConveter： 将请求消息（如 Json、xml 等数据）转换成一个对象，将对象转换为指定的响应信息。 数据转换：对请求消息进行数据转换。如String转换成Integer、Double等。 数据根式化：对请求消息进行数据格式化。 如将字符串转换成格式化数字或格式化日期等。 数据验证： 验证数据的有效性（长度、格式等），验证结果存储到BindingResult或Error中。 Handler(Controller)执行完成后，向 DispatcherServlet 返回一个 ModelAndView 对象； 根据返回的ModelAndView，选择一个适合的 ViewResolver（必须是已经注册到 Spring 容器中的ViewResolver)返回给DispatcherServlet。 ViewResolver 结合Model和View，来渲染视图。 视图负责将渲染结果返回给客户端。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/01.Java/13.%E6%A1%86%E6%9E%B6/01.Spring/03.SpringWeb/01.SpringWebMvc.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"spring-mvc"}],["meta",{"property":"og:description","content":"SpringMVC 简介 SpringMVC 工作流程描述 Spring MVC 的工作流程可以用一幅图来说明： img 向服务器发送 HTTP 请求，请求被前端控制器 DispatcherServlet 捕获。 DispatcherServlet 根据 &lt;servlet-name&gt;-servlet.xml 中的配置对请求的 URL 进行解析，得到请求资源标识符（URI）。然后根据该 URI，调用 HandlerMapping 获得该 Handler 配置的所有相关的对象（包括 Handler 对象以及 Handler 对象对应的拦截器），最后以HandlerExecutionChain 对象的形式返回。 DispatcherServlet 根据获得的Handler，选择一个合适的 HandlerAdapter。（附注：如果成功获得HandlerAdapter后，此时将开始执行拦截器的 preHandler(...)方法）。 提取Request中的模型数据，填充Handler入参，开始执行Handler（Controller)。 在填充Handler的入参过程中，根据你的配置，Spring 将帮你做一些额外的工作： HttpMessageConveter： 将请求消息（如 Json、xml 等数据）转换成一个对象，将对象转换为指定的响应信息。 数据转换：对请求消息进行数据转换。如String转换成Integer、Double等。 数据根式化：对请求消息进行数据格式化。 如将字符串转换成格式化数字或格式化日期等。 数据验证： 验证数据的有效性（长度、格式等），验证结果存储到BindingResult或Error中。 Handler(Controller)执行完成后，向 DispatcherServlet 返回一个 ModelAndView 对象； 根据返回的ModelAndView，选择一个适合的 ViewResolver（必须是已经注册到 Spring 容器中的ViewResolver)返回给DispatcherServlet。 ViewResolver 结合Model和View，来渲染视图。 视图负责将渲染结果返回给客户端。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T14:54:54.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"框架"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:tag","content":"Web"}],["meta",{"property":"article:published_time","content":"2017-11-08T16:53:27.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-21T14:54:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"spring-mvc\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-11-08T16:53:27.000Z\\",\\"dateModified\\":\\"2023-09-21T14:54:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"SpringMVC 工作流程描述","slug":"springmvc-工作流程描述","link":"#springmvc-工作流程描述","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1695308094000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":1.48,"words":444},"filePathRelative":"01.Java/13.框架/01.Spring/03.SpringWeb/01.SpringWebMvc.md","localizedDate":"2017年11月8日","excerpt":"<h1> SpringMVC 简介</h1>\\n<h2> SpringMVC 工作流程描述</h2>\\n<p>Spring MVC 的工作流程可以用一幅图来说明：</p>\\n<figure><img src=\\"https://raw.githubusercontent.com/dunwu/images/master/cs/java/spring/web/spring-dispatcher-servlet.png\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>img</figcaption></figure>\\n<ol>\\n<li>向服务器发送 HTTP 请求，请求被前端控制器 <code>DispatcherServlet</code> 捕获。</li>\\n<li><code>DispatcherServlet</code> 根据 <strong><code>&lt;servlet-name&gt;-servlet.xml</code></strong> 中的配置对请求的 URL 进行解析，得到请求资源标识符（URI）。然后根据该 URI，调用 <code>HandlerMapping</code> 获得该 Handler 配置的所有相关的对象（包括 Handler 对象以及 Handler 对象对应的拦截器），最后以<code>HandlerExecutionChain</code> 对象的形式返回。</li>\\n<li><code>DispatcherServlet</code> 根据获得的<code>Handler</code>，选择一个合适的 <code>HandlerAdapter</code>。（附注：如果成功获得<code>HandlerAdapter</code>后，此时将开始执行拦截器的 preHandler(...)方法）。</li>\\n<li>提取<code>Request</code>中的模型数据，填充<code>Handler</code>入参，开始执行<code>Handler</code>（<code>Controller</code>)。 在填充<code>Handler</code>的入参过程中，根据你的配置，Spring 将帮你做一些额外的工作：\\n<ul>\\n<li>HttpMessageConveter： 将请求消息（如 Json、xml 等数据）转换成一个对象，将对象转换为指定的响应信息。</li>\\n<li>数据转换：对请求消息进行数据转换。如<code>String</code>转换成<code>Integer</code>、<code>Double</code>等。</li>\\n<li>数据根式化：对请求消息进行数据格式化。 如将字符串转换成格式化数字或格式化日期等。</li>\\n<li>数据验证： 验证数据的有效性（长度、格式等），验证结果存储到<code>BindingResult</code>或<code>Error</code>中。</li>\\n</ul>\\n</li>\\n<li>Handler(Controller)执行完成后，向 <code>DispatcherServlet</code> 返回一个 <code>ModelAndView</code> 对象；</li>\\n<li>根据返回的<code>ModelAndView</code>，选择一个适合的 <code>ViewResolver</code>（必须是已经注册到 Spring 容器中的<code>ViewResolver</code>)返回给<code>DispatcherServlet</code>。</li>\\n<li><code>ViewResolver</code> 结合<code>Model</code>和<code>View</code>，来渲染视图。</li>\\n<li>视图负责将渲染结果返回给客户端。</li>\\n</ol>","autoDesc":true}');export{e as data};
