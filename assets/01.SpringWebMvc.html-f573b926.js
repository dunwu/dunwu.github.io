import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o,c as d,e as c}from"./app-ee97b13a.js";const r={},i=c('<h1 id="springmvc-简介" tabindex="-1"><a class="header-anchor" href="#springmvc-简介" aria-hidden="true">#</a> SpringMVC 简介</h1><h2 id="springmvc-工作流程描述" tabindex="-1"><a class="header-anchor" href="#springmvc-工作流程描述" aria-hidden="true">#</a> SpringMVC 工作流程描述</h2><p>Spring MVC 的工作流程可以用一幅图来说明：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/java/spring/web/spring-dispatcher-servlet.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li>向服务器发送 HTTP 请求，请求被前端控制器 <code>DispatcherServlet</code> 捕获。</li><li><code>DispatcherServlet</code> 根据 <strong><code>&lt;servlet-name&gt;-servlet.xml</code></strong> 中的配置对请求的 URL 进行解析，得到请求资源标识符（URI）。然后根据该 URI，调用 <code>HandlerMapping</code> 获得该 Handler 配置的所有相关的对象（包括 Handler 对象以及 Handler 对象对应的拦截器），最后以<code>HandlerExecutionChain</code> 对象的形式返回。</li><li><code>DispatcherServlet</code> 根据获得的<code>Handler</code>，选择一个合适的 <code>HandlerAdapter</code>。（附注：如果成功获得<code>HandlerAdapter</code>后，此时将开始执行拦截器的 preHandler(...)方法）。</li><li>提取<code>Request</code>中的模型数据，填充<code>Handler</code>入参，开始执行<code>Handler</code>（<code>Controller</code>)。 在填充<code>Handler</code>的入参过程中，根据你的配置，Spring 将帮你做一些额外的工作： <ul><li>HttpMessageConveter： 将请求消息（如 Json、xml 等数据）转换成一个对象，将对象转换为指定的响应信息。</li><li>数据转换：对请求消息进行数据转换。如<code>String</code>转换成<code>Integer</code>、<code>Double</code>等。</li><li>数据根式化：对请求消息进行数据格式化。 如将字符串转换成格式化数字或格式化日期等。</li><li>数据验证： 验证数据的有效性（长度、格式等），验证结果存储到<code>BindingResult</code>或<code>Error</code>中。</li></ul></li><li>Handler(Controller)执行完成后，向 <code>DispatcherServlet</code> 返回一个 <code>ModelAndView</code> 对象；</li><li>根据返回的<code>ModelAndView</code>，选择一个适合的 <code>ViewResolver</code>（必须是已经注册到 Spring 容器中的<code>ViewResolver</code>)返回给<code>DispatcherServlet</code>。</li><li><code>ViewResolver</code> 结合<code>Model</code>和<code>View</code>，来渲染视图。</li><li>视图负责将渲染结果返回给客户端。</li></ol>',5),l=[i];function n(t,a){return o(),d("div",null,l)}const g=e(r,[["render",n],["__file","01.SpringWebMvc.html.vue"]]);export{g as default};
