import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c as i,a as n,b as a,d as e,e as t}from"./app-fcc32256.js";const c={},r=n("h1",{id:"spring-集成-dubbo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#spring-集成-dubbo","aria-hidden":"true"},"#"),a(" Spring 集成 Dubbo")],-1),u=n("h2",{id:"zookeeper",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#zookeeper","aria-hidden":"true"},"#"),a(" ZooKeeper")],-1),d=n("p",null,"ZooKeeper 可以作为 Dubbo 的注册中心。",-1),k=n("p",null,"Dubbo 未对 Zookeeper 服务器端做任何侵入修改，只需安装原生的 Zookeeper 服务器即可，所有注册中心逻辑适配都在调用 Zookeeper 客户端时完成。",-1),b=n("p",null,[n("strong",null,"安装")],-1),m={href:"http://zookeeper.apache.org/releases.html",target:"_blank",rel:"noopener noreferrer"},v=t(`<p><strong>配置</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi conf/zoo.cfg

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),h=n("code",null,"zoo.cfg",-1),g={href:"https://dubbo.gitbooks.io/dubbo-admin-book/content/install/zookeeper.html#fn_2",target:"_blank",rel:"noopener noreferrer"},_=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tickTime=2000
initLimit=10
syncLimit=5
dataDir=/home/dubbo/zookeeper-3.3.3/data
clientPort=2181
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),x=n("code",null,"zoo.cfg",-1),q={href:"https://dubbo.gitbooks.io/dubbo-admin-book/content/install/zookeeper.html#fn_3",target:"_blank",rel:"noopener noreferrer"},f=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tickTime=2000
initLimit=10
syncLimit=5
dataDir=/home/dubbo/zookeeper-3.3.3/data
clientPort=2181
server.1=10.20.153.10:2555:3555
server.2=10.20.153.11:2555:3555

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),w={href:"https://dubbo.gitbooks.io/dubbo-admin-book/content/install/zookeeper.html#fn_4",target:"_blank",rel:"noopener noreferrer"},S=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir data
vi myid

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>myid 指明自己的 id，对应上面 <code>zoo.cfg</code> 中 <code>server.</code> 后的数字，第一台的内容为 1，第二台的内容为 2，内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>启动</strong></p><p>Linux 下执行 <code>bin/zkServer.sh</code> ；Windows <code>bin/zkServer.cmd</code> 启动 ZooKeeper 。</p><p><strong>命令行</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>telnet 127.0.0.1 2181
dump
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo dump | nc 127.0.0.1 2181
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用法:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dubbo.registry.address=zookeeper://10.20.153.10:2181?backup=10.20.153.11:2181

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dubbo:registry protocol=&quot;zookeeper&quot; address=&quot;10.20.153.10:2181,10.20.153.11:2181&quot; /&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,13),y=n("li",null,"Zookeeper 是 Apache Hadoop 的子项目，强度相对较好，建议生产环境使用该注册中心",-1),z=n("li",null,"其中 data 目录需改成你真实输出目录",-1),D=n("li",null,"其中 data 目录和 server 地址需改成你真实部署机器的信息",-1),C=n("li",null,[a("上面 "),n("code",null,"zoo.cfg"),a(" 中的 "),n("code",null,"dataDir")],-1),j={href:"http://zookeeper.apache.org/doc/r3.3.3/zookeeperAdmin.html",target:"_blank",rel:"noopener noreferrer"},A=n("h2",{id:"dubbo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#dubbo","aria-hidden":"true"},"#"),a(" Dubbo")],-1),P=n("p",null,"Dubbo 采用全 Spring 配置方式，透明化接入应用，对应用没有任何 API 侵入，只需用 Spring 加载 Dubbo 的配置即可，Dubbo 基于 Spring 的 Schema 扩展进行加载。",-1),L={href:"https://dubbo.gitbooks.io/configuration/api.md",target:"_blank",rel:"noopener noreferrer"},Z=n("h2",{id:"服务提供者",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#服务提供者","aria-hidden":"true"},"#"),a(" 服务提供者")],-1),I={href:"https://dubbo.gitbooks.io/dubbo-admin-book/install/provider-demo.html",target:"_blank",rel:"noopener noreferrer"},X=n("h3",{id:"定义服务接口",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#定义服务接口","aria-hidden":"true"},"#"),a(" 定义服务接口")],-1),K={href:"https://dubbo.gitbooks.io/dubbo-user-book/quick-start.html#fn_1",target:"_blank",rel:"noopener noreferrer"},E=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>dubbo<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">DemoService</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在服务提供方实现接口" tabindex="-1"><a class="header-anchor" href="#在服务提供方实现接口" aria-hidden="true">#</a> 在服务提供方实现接口</h3>`,2),H={href:"https://dubbo.gitbooks.io/dubbo-user-book/quick-start.html#fn_2",target:"_blank",rel:"noopener noreferrer"},T=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>dubbo<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>provider</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>dubbo<span class="token punctuation">.</span>demo<span class="token punctuation">.</span></span><span class="token class-name">DemoService</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">DemoService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Hello &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用-spring-配置声明暴露服务" tabindex="-1"><a class="header-anchor" href="#用-spring-配置声明暴露服务" aria-hidden="true">#</a> 用 Spring 配置声明暴露服务</h3><p>provider.xml：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">xmlns:</span>dubbo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://code.alibabatech.com/schema/dubbo<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans        http://www.springframework.org/schema/beans/spring-beans.xsd        http://code.alibabatech.com/schema/dubbo        http://code.alibabatech.com/schema/dubbo/dubbo.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- 提供方应用信息，用于计算依赖关系 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">dubbo:</span>application</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello-world-app<span class="token punctuation">&quot;</span></span>  <span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!-- 使用multicast广播注册中心暴露服务地址 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">dubbo:</span>registry</span> <span class="token attr-name">address</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>multicast://224.5.6.7:1234<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!-- 用dubbo协议在20880端口暴露服务 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">dubbo:</span>protocol</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dubbo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">port</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20880<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!-- 声明需要暴露的服务接口 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">dubbo:</span>service</span> <span class="token attr-name">interface</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.alibaba.dubbo.demo.DemoService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demoService<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!-- 和本地bean一样实现服务 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demoService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.alibaba.dubbo.demo.provider.DemoServiceImpl<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果注册中心使用 ZooKeeper，可以将 dubbo:registry 改为 zookeeper://127.0.0.1:2181</p><h3 id="加载-spring-配置" tabindex="-1"><a class="header-anchor" href="#加载-spring-配置" aria-hidden="true">#</a> 加载 Spring 配置</h3><p>Provider.java：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>support<span class="token punctuation">.</span></span><span class="token class-name">ClassPathXmlApplicationContext</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Provider</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">ClassPathXmlApplicationContext</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token string">&quot;http://10.20.160.198/wiki/display/dubbo/provider.xml&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        context<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 按任意键退出</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="服务消费者" tabindex="-1"><a class="header-anchor" href="#服务消费者" aria-hidden="true">#</a> 服务消费者</h2>`,9),B={href:"https://dubbo.gitbooks.io/dubbo-admin-book/install/consumer-demo.html",target:"_blank",rel:"noopener noreferrer"},N=t(`<h3 id="通过-spring-配置引用远程服务" tabindex="-1"><a class="header-anchor" href="#通过-spring-配置引用远程服务" aria-hidden="true">#</a> 通过 Spring 配置引用远程服务</h3><p>consumer.xml：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">xmlns:</span>dubbo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://code.alibabatech.com/schema/dubbo<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans        http://www.springframework.org/schema/beans/spring-beans.xsd        http://code.alibabatech.com/schema/dubbo        http://code.alibabatech.com/schema/dubbo/dubbo.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- 消费方应用名，用于计算依赖关系，不是匹配条件，不要与提供方一样 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">dubbo:</span>application</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>consumer-of-helloworld-app<span class="token punctuation">&quot;</span></span>  <span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!-- 使用multicast广播注册中心暴露发现服务地址 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">dubbo:</span>registry</span> <span class="token attr-name">address</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>multicast://224.5.6.7:1234<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!-- 生成远程服务代理，可以和本地bean一样使用demoService --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">dubbo:</span>reference</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demoService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">interface</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.alibaba.dubbo.demo.DemoService<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果注册中心使用 ZooKeeper，可以将 dubbo:registry 改为 zookeeper://127.0.0.1:2181</p><h3 id="加载-spring-配置-并调用远程服务" tabindex="-1"><a class="header-anchor" href="#加载-spring-配置-并调用远程服务" aria-hidden="true">#</a> 加载 Spring 配置，并调用远程服务</h3>`,5),V={href:"https://dubbo.gitbooks.io/dubbo-user-book/quick-start.html#fn_3",target:"_blank",rel:"noopener noreferrer"},F=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.alibaba.dubbo.demo.DemoService;

public class Consumer {
    public static void main(String[] args) throws Exception {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(new String[] {&quot;http://10.20.160.198/wiki/display/dubbo/consumer.xml&quot;});
        context.start();
        DemoService demoService = (DemoService)context.getBean(&quot;demoService&quot;); // 获取远程服务代理
        String hello = demoService.sayHello(&quot;world&quot;); // 执行远程方法
        System.out.println( hello ); // 显示调用结果
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ol><li>该接口需单独打包，在服务提供方和消费方共享</li><li>对服务消费方隐藏实现</li><li>也可以使用 IoC 注入</li></ol></blockquote><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><p>建议使用 <code>dubbo-2.3.3</code> 以上版本的 zookeeper 注册中心客户端。</p><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料" aria-hidden="true">#</a> 资料</h2><p><strong>Dubbo</strong></p>`,6),M={href:"https://github.com/alibaba/dubbo",target:"_blank",rel:"noopener noreferrer"},U={href:"https://dubbo.gitbooks.io/dubbo-user-book/content/",target:"_blank",rel:"noopener noreferrer"},G={href:"https://dubbo.gitbooks.io/dubbo-dev-book/content/",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://dubbo.gitbooks.io/dubbo-admin-book/content/",target:"_blank",rel:"noopener noreferrer"},W=n("p",null,[n("strong",null,"ZooKeeper")],-1),J={href:"http://zookeeper.apache.org/",target:"_blank",rel:"noopener noreferrer"},O={href:"http://zookeeper.apache.org/doc/trunk/",target:"_blank",rel:"noopener noreferrer"};function R(Y,$){const s=p("ExternalLinkIcon");return l(),i("div",null,[r,u,d,k,b,n("p",null,[a("在 "),n("a",m,[a("ZooKeeper 发布中心"),e(s)]),a(" 选择需要的版本，下载后解压到本地。")]),v,n("p",null,[a("如果不需要集群，"),h,a(" 的内容如下 "),n("a",g,[a("2"),e(s)]),a("：")]),_,n("p",null,[a("如果需要集群，"),x,a(" 的内容如下 "),n("a",q,[a("3"),e(s)]),a("：")]),f,n("p",null,[a("并在 data 目录 "),n("a",w,[a("4"),e(s)]),a(" 下放置 myid 文件：")]),S,n("blockquote",null,[n("ol",null,[y,z,D,C,n("li",null,[n("a",j,[a("http://zookeeper.apache.org/doc/r3.3.3/zookeeperAdmin.html"),e(s)])])])]),A,P,n("p",null,[a("如果不想使用 Spring 配置，可以通过 "),n("a",L,[a("API 的方式"),e(s)]),a(" 进行调用。")]),Z,n("p",null,[a("完整安装步骤，请参见："),n("a",I,[a("示例提供者安装"),e(s)])]),X,n("p",null,[a("DemoService.java "),n("a",K,[a("1"),e(s)]),a("：")]),E,n("p",null,[a("DemoServiceImpl.java "),n("a",H,[a("2"),e(s)]),a("：")]),T,n("p",null,[a("完整安装步骤，请参见："),n("a",B,[a("示例消费者安装"),e(s)])]),N,n("p",null,[a("Consumer.java "),n("a",V,[a("3"),e(s)]),a("：")]),F,n("p",null,[n("a",M,[a("Github"),e(s)]),a(" | "),n("a",U,[a("用户手册"),e(s)]),a(" | "),n("a",G,[a("开发手册"),e(s)]),a(" | "),n("a",Q,[a("管理员手册"),e(s)])]),W,n("p",null,[n("a",J,[a("官网"),e(s)]),a(" | "),n("a",O,[a("官方文档"),e(s)])])])}const sn=o(c,[["render",R],["__file","03.Spring集成Dubbo.html.vue"]]);export{sn as default};
