import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as i,a as n,b as a,d as e,e as t}from"./app-4f05975a.js";const c={},u=t(`<h1 id="服务注册和发现" tabindex="-1"><a class="header-anchor" href="#服务注册和发现" aria-hidden="true">#</a> 服务注册和发现</h1><h2 id="服务元数据" tabindex="-1"><a class="header-anchor" href="#服务元数据" aria-hidden="true">#</a> 服务元数据</h2><p>构建微服务的首要问题是：服务提供者和服务消费者通信时，如何达成共识。具体来说，就是这个服务的接口名是什么？调用这个服务需要传递哪些参数？接口的返回值是什么类型？以及一些其他接口描述信息。</p><p>服务的元数据信息通常有以下信息：</p><ul><li>服务节点信息，如 IP、端口等。</li><li>接口定义，如接口名、请求参数、响应参数等。</li><li>请求失败的重试次数</li><li>序列化方式</li><li>压缩方式</li><li>通信协议</li><li>等等</li></ul><p>常见的发布服务元数据的方式有：</p><ul><li>REST API</li><li>XML 文件</li><li>IDL 文件</li></ul><h3 id="rest-api" tabindex="-1"><a class="header-anchor" href="#rest-api" aria-hidden="true">#</a> REST API</h3><p>以 Eureka 为例</p><p>服务提供者定义接口</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProviderController</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">DiscoveryClient</span> discoveryClient<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ProviderController</span><span class="token punctuation">(</span><span class="token class-name">DiscoveryClient</span> discoveryClient<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>discoveryClient <span class="token operator">=</span> discoveryClient<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/send&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> services <span class="token operator">=</span> <span class="token string">&quot;Services: &quot;</span> <span class="token operator">+</span> discoveryClient<span class="token punctuation">.</span><span class="token function">getServices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>services<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> services<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务消费者消费接口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@RestController
public class ConsumerController {

    private final LoadBalancerClient loadBalancerClient;
    private final RestTemplate restTemplate;

    public ConsumerController(LoadBalancerClient loadBalancerClient,
        RestTemplate restTemplate) {
        this.loadBalancerClient = loadBalancerClient;
        this.restTemplate = restTemplate;
    }

    @GetMapping(&quot;/recv&quot;)
    public String recv() {
        ServiceInstance serviceInstance = loadBalancerClient.choose(&quot;eureka-provider&quot;);
        String url = &quot;http://&quot; + serviceInstance.getHost() + &quot;:&quot; + serviceInstance.getPort() + &quot;/send&quot;;
        System.out.println(url);
        return restTemplate.getForObject(url, String.class);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="xml-文件" tabindex="-1"><a class="header-anchor" href="#xml-文件" aria-hidden="true">#</a> XML 文件</h3><p>XML 文件这种方式的服务发布和引用主要分三个步骤：</p><p>（1）服务提供者定义接口，并实现接口。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// The demo service definition.</span>
service <span class="token class-name">DemoService</span> <span class="token punctuation">{</span>
  rpc <span class="token class-name">SayHello</span> <span class="token punctuation">(</span><span class="token class-name">HelloRequest</span><span class="token punctuation">)</span> returns <span class="token punctuation">(</span><span class="token class-name">HelloReply</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// The request message containing the user&#39;s name.</span>
message <span class="token class-name">HelloRequest</span> <span class="token punctuation">{</span>
  string name <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// The response message containing the greetings</span>
message <span class="token class-name">HelloReply</span> <span class="token punctuation">{</span>
  string message <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）服务提供者进程启动时，通过加载 xml 配置文件将接口暴露出去。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>dubbo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://dubbo.apache.org/schema/dubbo<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://dubbo.apache.org/schema/dubbo http://dubbo.apache.org/schema/dubbo/dubbo.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">dubbo:</span>application</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo-provider<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">dubbo:</span>registry</span> <span class="token attr-name">address</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zookeeper://127.0.0.1:2181<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">dubbo:</span>protocol</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dubbo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">port</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20890<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demoService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.apache.dubbo.samples.basic.impl.DemoServiceImpl<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">dubbo:</span>service</span> <span class="token attr-name">interface</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.apache.dubbo.samples.basic.api.DemoService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demoService<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）服务消费者进程启动时，通过加载 xml 配置文件来引入要调用的接口。</p><p>consumer.xml 示例</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>dubbo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://dubbo.apache.org/schema/dubbo<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://dubbo.apache.org/schema/dubbo http://dubbo.apache.org/schema/dubbo/dubbo.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">dubbo:</span>application</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo-consumer<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">dubbo:</span>registry</span> <span class="token attr-name">group</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>aaa<span class="token punctuation">&quot;</span></span> <span class="token attr-name">address</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zookeeper://127.0.0.1:2181<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">dubbo:</span>reference</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demoService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">check</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">interface</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.apache.dubbo.samples.basic.api.DemoService<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="idl-文件" tabindex="-1"><a class="header-anchor" href="#idl-文件" aria-hidden="true">#</a> IDL 文件</h3><p>IDL 就是接口描述语言（interface description language）的缩写，通过一种中立的方式来描述接口，使得在不同的平台上运行的对象和不同语言编写的程序可以相互通信交流。</p><p>也就是说 IDL 主要是<strong>用作跨语言平台的服务之间的调用</strong>，有两种最常用的 IDL：一个是 Facebook 开源的<strong>Thrift 协议</strong>，另一个是 Google 开源的<strong>gRPC 协议</strong>。</p><p>以 gRPC 协议为例，gRPC 协议使用 Protobuf 简称 proto 文件来定义接口名、调用参数以及返回值类型。</p><p>比如文件 helloword.proto 定义了一个接口 SayHello 方法，它的请求参数是 HelloRequest，它的返回值是 HelloReply。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// The greeter service definition.</span>
service <span class="token class-name">Greeter</span> <span class="token punctuation">{</span>
  <span class="token comment">// Sends a greeting</span>
  rpc <span class="token class-name">SayHello</span> <span class="token punctuation">(</span><span class="token class-name">HelloRequest</span><span class="token punctuation">)</span> returns <span class="token punctuation">(</span><span class="token class-name">HelloReply</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  rpc <span class="token class-name">SayHelloAgain</span> <span class="token punctuation">(</span><span class="token class-name">HelloRequest</span><span class="token punctuation">)</span> returns <span class="token punctuation">(</span><span class="token class-name">HelloReply</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">// The request message containing the user&#39;s name.</span>
message <span class="token class-name">HelloRequest</span> <span class="token punctuation">{</span>
  string name <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// The response message containing the greetings</span>
message <span class="token class-name">HelloReply</span> <span class="token punctuation">{</span>
  string message <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假如服务提供者使用的是 Java 语言，那么利用 protoc 插件即可自动生成 Server 端的 Java 代码。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">class</span> <span class="token class-name">GreeterImpl</span> <span class="token keyword">extends</span> <span class="token class-name">GreeterGrpc<span class="token punctuation">.</span>GreeterImplBase</span> <span class="token punctuation">{</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token class-name">HelloRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">StreamObserver</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HelloReply</span><span class="token punctuation">&gt;</span></span> responseObserver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">HelloReply</span> reply <span class="token operator">=</span> <span class="token class-name">HelloReply</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token string">&quot;Hello &quot;</span> <span class="token operator">+</span> req<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    responseObserver<span class="token punctuation">.</span><span class="token function">onNext</span><span class="token punctuation">(</span>reply<span class="token punctuation">)</span><span class="token punctuation">;</span>
    responseObserver<span class="token punctuation">.</span><span class="token function">onCompleted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sayHelloAgain</span><span class="token punctuation">(</span><span class="token class-name">HelloRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">StreamObserver</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HelloReply</span><span class="token punctuation">&gt;</span></span> responseObserver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">HelloReply</span> reply <span class="token operator">=</span> <span class="token class-name">HelloReply</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token string">&quot;Hello again &quot;</span> <span class="token operator">+</span> req<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    responseObserver<span class="token punctuation">.</span><span class="token function">onNext</span><span class="token punctuation">(</span>reply<span class="token punctuation">)</span><span class="token punctuation">;</span>
    responseObserver<span class="token punctuation">.</span><span class="token function">onCompleted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假如服务消费者使用的也是 Java 语言，那么利用 protoc 插件即可自动生成 Client 端的 Java 代码。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public void greet(String name) {
  logger.info(&quot;Will try to greet &quot; + name + &quot; ...&quot;);
  HelloRequest request = HelloRequest.newBuilder().setName(name).build();
  HelloReply response;
  try {
    response = blockingStub.sayHello(request);
  } catch (StatusRuntimeException e) {
    logger.log(Level.WARNING, &quot;RPC failed: {0}&quot;, e.getStatus());
    return;
  }
  logger.info(&quot;Greeting: &quot; + response.getMessage());
  try {
    response = blockingStub.sayHelloAgain(request);
  } catch (StatusRuntimeException e) {
    logger.log(Level.WARNING, &quot;RPC failed: {0}&quot;, e.getStatus());
    return;
  }
  logger.info(&quot;Greeting: &quot; + response.getMessage());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假如服务消费者使用的是其他语言，也可以利用相应的插件生成代码。</p><p>由此可见，gRPC 协议的服务描述是通过 proto 文件来定义接口的，然后再使用 protoc 来生成不同语言平台的客户端和服务端代码，从而具备跨语言服务调用能力。</p><p>有一点特别需要注意的是，在描述接口定义时，IDL 文件需要对接口返回值进行详细定义。如果接口返回值的字段比较多，并且经常变化时，采用 IDL 文件方式的接口定义就不太合适了。一方面可能会造成 IDL 文件过大难以维护，另一方面只要 IDL 文件中定义的接口返回值有变更，都需要同步所有的服务消费者都更新，管理成本就太高了。</p><h2 id="服务注册和发现基本原理" tabindex="-1"><a class="header-anchor" href="#服务注册和发现基本原理" aria-hidden="true">#</a> 服务注册和发现基本原理</h2><p>服务发现通常依赖于<strong>注册中心</strong>来协调服务发现的过程，其步骤如下：</p><ol><li>服务提供者将接口信息以注册到注册中心。</li><li>服务消费者从注册中心读取和订阅服务提供者的地址信息。</li><li>如果有可用的服务，注册中心会主动通知服务消费者。</li><li>服务消费者根据可用服务的地址列表，调用服务提供者的接口。</li></ol><p>这个过程很像是生活中的房屋租赁，房东将租房信息挂到中介公司，房客从中介公司查找租房信息。房客如果想要租房东的房子，通过中介公司牵线搭桥，联系上房东，双方谈妥签订协议，就可以正式建立起租赁关系。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220415171843.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>主流的服务注册与发现的解决方案，主要有两种：</p><ul><li><strong>应用内注册与发现</strong>：注册中心提供服务端和客户端的 SDK，业务应用通过引入注册中心提供的 SDK，通过 SDK 与注册中心交互，来实现服务的注册和发现。</li><li><strong>应用外注册与发现</strong>：业务应用本身不需要通过 SDK 与注册中心打交道，而是通过其他方式与注册中心交互，间接完成服务注册与发现。</li></ul><h3 id="应用内注册与发现" tabindex="-1"><a class="header-anchor" href="#应用内注册与发现" aria-hidden="true">#</a> 应用内注册与发现</h3><p><strong>应用内注册与发现</strong>方案是：注册中心提供服务端和客户端的 SDK，业务应用通过引入注册中心提供的 SDK，通过 SDK 与注册中心交互，来实现服务的注册和发现。最典型的案例要属 Netflix 开源的 Eureka，官方架构图如下：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220418204148.jfif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Eureka 的架构主要由三个重要的组件组成：</p><ul><li><strong>Eureka Server</strong>：注册中心的服务端，实现了服务信息注册、存储以及查询等功能。</li><li><strong>服务端的 Eureka Client</strong>：集成在服务端的注册中心 SDK，服务提供者通过调用 SDK，实现服务注册、反注册等功能。</li><li><strong>客户端的 Eureka Client</strong>：集成在客户端的注册中心 SDK，服务消费者通过调用 SDK，实现服务订阅、服务更新等功能。</li></ul><h3 id="应用外注册与发现" tabindex="-1"><a class="header-anchor" href="#应用外注册与发现" aria-hidden="true">#</a> 应用外注册与发现</h3><p><strong>应用外注册与发现</strong>方案是：业务应用本身不需要通过 SDK 与注册中心打交道，而是通过其他方式与注册中心交互，间接完成服务注册与发现。最典型的案例是开源注册中心 Consul。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220418204352.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Consul 实现应用外服务注册和发现主要依靠三个重要的组件：</p>`,51),r=n("li",null,"Consul：注册中心的服务端，实现服务注册信息的存储，并提供注册和发现服务。",-1),d={href:"https://github.com/gliderlabs/registrator",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/hashicorp/consul-template",target:"_blank",rel:"noopener noreferrer"},v=t('<h2 id="注册中心基本功能" tabindex="-1"><a class="header-anchor" href="#注册中心基本功能" aria-hidden="true">#</a> 注册中心基本功能</h2><p>从服务注册和发现的流程，可以看出，<strong>注册中心是服务发现的核心组件</strong>。常见的注册中心组件有：Nacos、Consul、Zookeeper 等。</p><p>注册中心是用来存储服务的元数据信息。服务的元数据信息通常有以下信息：</p><ul><li>服务节点信息，如 IP、端口等。</li><li>接口定义，如接口名、请求参数、响应参数等。</li><li>请求失败的重试次数</li><li>序列化方式</li><li>压缩方式</li><li>通信协议</li><li>等等</li></ul><p>在具体存储时，一般会按照“服务 - 分组 - 节点信息”三层结构来存储。</p><p>注册中心的实现主要涉及几个问题：注册中心需要提供哪些接口，该如何部署；如何存储服务信息；如何监控服务提供者节点的存活；如果服务提供者节点有变化如何通知服务消费者，以及如何控制注册中心的访问权限。</p><h3 id="注册中心-api" tabindex="-1"><a class="header-anchor" href="#注册中心-api" aria-hidden="true">#</a> 注册中心 API</h3><p>根据注册中心原理的描述，注册中心必须提供以下最基本的 API，例如：</p><ul><li><strong>服务注册接口</strong>：服务提供者通过调用服务注册接口来完成服务注册。</li><li><strong>服务反注册接口</strong>：服务提供者通过调用服务反注册接口来完成服务注销。</li><li><strong>心跳汇报接口</strong>：服务提供者通过调用心跳汇报接口完成节点存活状态上报。</li><li><strong>服务订阅接口</strong>：服务消费者通过调用服务订阅接口完成服务订阅，获取可用的服务提供者节点列表。</li><li><strong>服务变更查询接口</strong>：服务消费者通过调用服务变更查询接口，获取最新的可用服务节点列表。</li></ul><p>除此之外，为了便于管理，注册中心还必须提供一些后台管理的 API，例如：</p><ul><li><strong>服务查询接口</strong>：查询注册中心当前注册了哪些服务信息。</li><li><strong>服务修改接口</strong>：修改注册中心中某一服务的信息。</li></ul><h3 id="集群部署" tabindex="-1"><a class="header-anchor" href="#集群部署" aria-hidden="true">#</a> 集群部署</h3><p>注册中心作为服务提供者和服务消费者之间沟通的桥梁，它的重要性不言而喻。所以注册中心一般都是采用集群部署来保证高可用性，并通过分布式一致性协议来确保集群中不同节点之间的数据保持一致。</p><p>以开源注册中心 ZooKeeper 为例，ZooKeeper 集群中包含多个节点，服务提供者和服务消费者可以同任意一个节点通信，因为它们的数据一定是相同的，这是为什么呢？这就要从 ZooKeeper 的工作原理说起：</p><ul><li>每个 Server 在内存中存储了一份数据，Client 的读请求可以请求任意一个 Server。</li><li>ZooKeeper 启动时，将从实例中选举一个 leader（Paxos 协议）。</li><li>Leader 负责处理数据更新等操作（ZAB 协议）。</li><li>一个更新操作成功，当且仅当大多数 Server 在内存中成功修改 。</li></ul><p>通过上面这种方式，ZooKeeper 保证了高可用性以及数据一致性。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/java/javaweb/distributed/rpc/zookeeper/zookeeper_3.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="元数据存储" tabindex="-1"><a class="header-anchor" href="#元数据存储" aria-hidden="true">#</a> 元数据存储</h3><p>注册中心存储服务信息一般采用层次化的目录结构，以 ZooKeeper 为例：</p><ul><li>每个目录在 ZooKeeper 中叫作 znode，并且其有一个唯一的路径标识。</li><li>znode 可以包含数据和子 znode。</li><li>znode 中的数据可以有多个版本，比如某一个 znode 下存有多个数据版本，那么查询这个路径下的数据需带上版本信息。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/java/javaweb/distributed/rpc/zookeeper/zookeeper_1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="白名单机制" tabindex="-1"><a class="header-anchor" href="#白名单机制" aria-hidden="true">#</a> 白名单机制</h3><p>在实际的微服务测试和部署时，通常包含多套环境，比如生产环境一套、测试环境一套。开发在进行业务自测、测试在进行回归测试时，一般都是用测试环境，部署的 RPC Server 节点注册到测试的注册中心集群。但经常会出现开发或者测试在部署时，错误的把测试环境下的服务节点注册到了线上注册中心集群，这样的话线上流量就会调用到测试环境下的 RPC Server 节点，可能会造成意想不到的后果。</p><p>为了防止这种情况发生，注册中心需要提供一个保护机制，你可以把注册中心想象成一个带有门禁的房间，只有拥有门禁卡的 RPC Server 才能进入。在实际应用中，注册中心可以提供一个白名单机制，只有添加到注册中心白名单内的 RPC Server，才能够调用注册中心的注册接口，这样的话可以避免测试环境中的节点意外跑到线上环境中去。</p><h2 id="服务健康检测" tabindex="-1"><a class="header-anchor" href="#服务健康检测" aria-hidden="true">#</a> 服务健康检测</h2><p>注册中心除了要支持最基本的服务注册和服务订阅功能以外，还必须具备对服务提供者节点的健康状态检测功能，这样才能保证注册中心里保存的服务节点都是可用的。</p><p>还是以 ZooKeeper 为例，它是基于 ZooKeeper 客户端和服务端的长连接和会话超时控制机制，来实现服务健康状态检测的。</p><p>在 ZooKeeper 中，客户端和服务端建立连接后，会话也随之建立，并生成一个全局唯一的 Session ID。服务端和客户端维持的是一个长连接，在 SESSION_TIMEOUT 周期内，服务端会检测与客户端的链路是否正常，具体方式是通过客户端定时向服务端发送心跳消息（ping 消息），服务器重置下次 SESSION_TIMEOUT 时间。如果超过 SESSION_TIMEOUT 后服务端都没有收到客户端的心跳消息，则服务端认为这个 Session 就已经结束了，ZooKeeper 就会认为这个服务节点已经不可用，将会从注册中心中删除其信息。</p><h3 id="服务状态变更通知" tabindex="-1"><a class="header-anchor" href="#服务状态变更通知" aria-hidden="true">#</a> 服务状态变更通知</h3><p>一旦注册中心探测到有服务提供者节点新加入或者被剔除，就必须立刻通知所有订阅该服务的服务消费者，刷新本地缓存的服务节点信息，确保服务调用不会请求不可用的服务提供者节点。</p><p>继续以 ZooKeeper 为例，基于 ZooKeeper 的 Watcher 机制，来实现服务状态变更通知给服务消费者的。服务消费者在调用 ZooKeeper 的 getData 方法订阅服务时，还可以通过监听器 Watcher 的 process 方法获取服务的变更，然后调用 getData 方法来获取变更后的数据，刷新本地缓存的服务节点信息。</p><h3 id="心跳开关保护机制" tabindex="-1"><a class="header-anchor" href="#心跳开关保护机制" aria-hidden="true">#</a> 心跳开关保护机制</h3><p>在网络频繁抖动的情况下，注册中心中可用的节点会不断变化，这时候服务消费者会频繁收到服务提供者节点变更的信息，于是就不断地请求注册中心来拉取最新的可用服务节点信息。当有成百上千个服务消费者，同时请求注册中心获取最新的服务提供者的节点信息时，可能会把注册中心的带宽给占满，尤其是注册中心是百兆网卡的情况下。</p><p>针对这种情况，<strong>需要一种保护机制，即使在网络频繁抖动的时候，服务消费者也不至于同时去请求注册中心获取最新的服务节点信息</strong>。</p><p>一个可行的解决方案就是给注册中心设置一个开关，当开关打开时，即使网络频繁抖动，注册中心也不会通知所有的服务消费者有服务节点信息变更，比如只给 10% 的服务消费者返回变更，这样的话就能将注册中心的请求量减少到原来的 1/10。当然打开这个开关也是有一定代价的，它会导致服务消费者感知最新的服务节点信息延迟，原先可能在 10s 内就能感知到服务提供者节点信息的变更，现在可能会延迟到几分钟，所以在网络正常的情况下，开关并不适合打开；可以作为一个紧急措施，在网络频繁抖动的时候，才打开这个开关。</p><p>心跳开关保护机制，是为了防止服务提供者节点频繁变更导致的服务消费者同时去注册中心获取最新服务节点信息。</p><h3 id="服务节点摘除保护机制" tabindex="-1"><a class="header-anchor" href="#服务节点摘除保护机制" aria-hidden="true">#</a> 服务节点摘除保护机制</h3><p>服务提供者在进程启动时，会注册服务到注册中心，并每隔一段时间，汇报心跳给注册中心，以标识自己的存活状态。如果隔了一段固定时间后，服务提供者仍然没有汇报心跳给注册中心，注册中心就会认为该节点已经处于“dead”状态，于是从服务的可用节点信息中移除出去。</p><p>如果遇到网络问题，大批服务提供者节点汇报给注册中心的心跳信息都可能会传达失败，注册中心就会把它们都从可用节点列表中移除出去，造成剩下的可用节点难以承受所有的调用，引起“雪崩”。但是这种情况下，可能大部分服务提供者节点是可用的，仅仅因为网络原因无法汇报心跳给注册中心就被“无情”的摘除了。</p><p><strong>这个时候就需要根据实际业务的情况，设定一个阈值比例，即使遇到刚才说的这种情况，注册中心也不能摘除超过这个阈值比例的节点</strong>。</p><p>这个阈值比例可以根据实际业务的冗余度来确定，我通常会把这个比例设定在 20%，就是说注册中心不能摘除超过 20% 的节点。因为大部分情况下，节点的变化不会这么频繁，只有在网络抖动或者业务明确要下线大批量节点的情况下才有可能发生。而业务明确要下线大批量节点的情况是可以预知的，这种情况下可以关闭阈值保护；而正常情况下，应该打开阈值保护，以防止网络抖动时，大批量可用的服务节点被摘除。</p><p>服务节点摘除保护机制，是为了防止服务提供者节点被大量摘除引起服务消费者可以调用的节点不足。</p><h3 id="静态注册中心" tabindex="-1"><a class="header-anchor" href="#静态注册中心" aria-hidden="true">#</a> 静态注册中心</h3><p>因为服务提供者是向服务消费者提供服务的，是否可用服务消费者应该比注册中心更清楚，因此可以直接在服务消费者端根据调用服务提供者是否成功来判定服务提供者是否可用。如果服务消费者调用某一个服务提供者节点连续失败超过一定次数，可以在本地内存中将这个节点标记为不可用。并且每隔一段固定时间，服务消费者都要向标记为不可用的节点发起保活探测，如果探测成功了，就将标记为不可用的节点再恢复为可用状态，重新发起调用。</p><h2 id="注册中心选型" tabindex="-1"><a class="header-anchor" href="#注册中心选型" aria-hidden="true">#</a> 注册中心选型</h2><p>注册中心选型时最需要关注两个问题：<strong>高可用性</strong>和<strong>数据一致性</strong>。</p><h3 id="高可用性" tabindex="-1"><a class="header-anchor" href="#高可用性" aria-hidden="true">#</a> 高可用性</h3><p>注册中心作为服务提供者和服务消费者之间沟通的纽带，它的高可用性十分重要。如果注册中心不可用了，那么服务提供者就无法对外暴露自己的服务，而服务消费者也无法知道自己想要调用的服务的具体地址。</p><p>实现高可用性的手段主要有两种</p><ul><li><strong>集群部署</strong>，即使有部分机器宕机，将请求分发到正常的机器上就可以保证服务的正常访问。</li><li><strong>多机房部署</strong>，避免一个机房因为断电或者光缆被挖断等不可抗力因素不可用时，仍然可以通过把请求迁移到其他机房来保证服务的正常访问。</li></ul><p>这两种手段本质上都是服务冗余。</p><h3 id="数据一致性" tabindex="-1"><a class="header-anchor" href="#数据一致性" aria-hidden="true">#</a> 数据一致性</h3><h2 id="服务发现的问题" tabindex="-1"><a class="header-anchor" href="#服务发现的问题" aria-hidden="true">#</a> 服务发现的问题</h2><h3 id="多注册中心" tabindex="-1"><a class="header-anchor" href="#多注册中心" aria-hidden="true">#</a> 多注册中心</h3><p>理想情况下，如果始终只有一个注册中心，那么整个交互非常简单。但在实际工作中，往往需要对接多个注册中心，常见场景如下：</p><ul><li><strong>服务消费者订阅多个注册中心</strong>：服务消费者可能订阅了多个服务，多个服务可能是由多个业务部门提供的，而且每个业务部门都有自己的注册中心，提供的服务只在自己的注册中心里有记录。这就要求服务消费者要具备在启动时，能够从多个注册中心订阅服务的能力。</li><li><strong>服务提供者注册多个注册中心</strong>：一个服务提供者提供了某个服务，可能作为静态服务对外提供，也可能作为动态服务对外提供，这两个服务部署在不同的注册中心，所以要求服务提供者在启动的时候，要能够同时向多个注册中心注册服务。</li></ul><h3 id="并行订阅服务" tabindex="-1"><a class="header-anchor" href="#并行订阅服务" aria-hidden="true">#</a> 并行订阅服务</h3><p>通常一个服务消费者订阅了不止一个服务。如果采用串行订阅方式，即每订阅一个服务，服务消费者就调用一次注册中心的订阅接口，获取这个服务的节点列表并初始化连接，就可能要执行很多次这样的过程。在某些服务节点的初始化连接过程中，出现连接超时的情况，后续所有的服务节点的初始化连接都需要等待它完成，导致服务消费者启动变慢，最后耗费了将近五分钟时间来完成所有服务节点的初始化连接过程。</p><p>由于以上问题，所以服务发现应该支持并行订阅，每订阅一个服务就单独用一个线程来处理，这样的话即使遇到个别服务节点连接超时，其他服务节点的初始化连接也不受影响，最慢也就是这个服务节点的初始化连接耗费的时间，最终所有服务节点的初始化连接耗时控制在一个可以接受的时间范围内。</p><h3 id="批量注销服务" tabindex="-1"><a class="header-anchor" href="#批量注销服务" aria-hidden="true">#</a> 批量注销服务</h3><p>通常一个服务提供者节点提供不止一个服务，所以注册和反注册都需要多次调用注册中心。在与注册中心的多次交互中，可能由于网络抖动、注册中心集群异常等原因，导致个别调用失败。对于注册中心来说，偶发的注册调用失败对服务调用基本没有影响，其结果顶多就是某一个服务少了一个可用的节点。但偶发的反注册调用失败会导致不可用的节点残留在注册中心中，变成“僵尸节点”，但服务消费者端还会把它当成“活节点”，继续发起调用，最终导致调用失败。</p><p>可以通过调用注册中心提供的批量反注册接口，一次调用就可以把该节点上提供的所有服务同时注销掉，从而避免了“僵尸节点”的出现。</p><h3 id="服务变更信息的增量更新" tabindex="-1"><a class="header-anchor" href="#服务变更信息的增量更新" aria-hidden="true">#</a> 服务变更信息的增量更新</h3><p>服务消费者端启动时，除了会查询订阅服务的可用节点列表做初始化连接，还会订阅服务的变更，每隔一段时间从注册中心获取最新的服务节点信息标记 sign，并与本地保存的 sign 值作比对，如果不一样，就会调用注册中心获取最新的服务节点信息。</p><p>一般情况下，按照这个过程是没问题的，但是在网络频繁抖动时，服务提供者上报给注册中心的心跳可能会一会儿失败一会儿成功，这时候注册中心就会频繁更新服务的可用节点信息，导致服务消费者频繁从注册中心拉取最新的服务可用节点信息，严重时可能产生网络风暴，导致注册中心带宽被打满。</p><p>为了减少服务消费者从注册中心中拉取的服务可用节点信息的数据量，这个时候可以通过增量更新的方式，注册中心只返回变化的那部分节点信息，尤其在只有少数节点信息变更时，此举可以大大减少服务消费者从注册中心拉取的数据量，从而最大程度避免产生网络风暴。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',67),m={href:"https://time.geekbang.org/column/intro/100014401",target:"_blank",rel:"noopener noreferrer"},g={href:"https://time.geekbang.org/column/intro/100046201",target:"_blank",rel:"noopener noreferrer"},b={href:"https://time.geekbang.org/course/intro/100003901",target:"_blank",rel:"noopener noreferrer"};function h(q,f){const s=o("ExternalLinkIcon");return l(),i("div",null,[u,n("ul",null,[r,n("li",null,[n("a",d,[a("Registrator"),e(s)]),a("：一个开源的第三方服务管理器项目，它通过监听服务部署的 Docker 实例是否存活，来负责服务提供者的注册和销毁。")]),n("li",null,[n("a",k,[a("Consul Template"),e(s)]),a("：定时从注册中心服务端获取最新的服务提供者节点列表并刷新 LB 配置（比如 Nginx 的 upstream），这样服务消费者就通过访问 Nginx 就可以获取最新的服务提供者信息。")])]),v,n("ul",null,[n("li",null,[n("a",m,[a("从 0 开始学微服务"),e(s)])]),n("li",null,[n("a",g,[a("RPC 实战与核心原理"),e(s)])]),n("li",null,[n("a",b,[a("微服务架构核心 20 讲"),e(s)])])])])}const w=p(c,[["render",h],["__file","11.服务注册和发现.html.vue"]]);export{w as default};
