import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as l,a,b as n,d as i,e as c}from"./app-c2b0a364.js";const d={},r=a("h1",{id:"java-开发环境",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#java-开发环境","aria-hidden":"true"},"#"),n(" Java 开发环境")],-1),p=a("blockquote",null,[a("p",null,[n("📌 "),a("strong",null,"关键词："),n(" JAVA_HOME、CLASSPATH、Path、环境变量、IDE")])],-1),u=a("h2",{id:"下载",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#下载","aria-hidden":"true"},"#"),n(" 下载")],-1),h={href:"http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"},v=c(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>windows 环境的 jdk 包是 exe 安装文件，启动后根据安装向导安装即可。</p><p>Linux 环境的 jdk 包，解压到本地即可。</p><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3><p>计算机 &gt; 属性 &gt; 高级系统设置 &gt; 环境变量</p><p>添加以下环境变量：</p><p><code>JAVA_HOME</code>：<code>C:\\Program Files (x86)\\Java\\jdk1.8.0_91</code> （根据自己的实际路径配置）</p><p><code>CLASSPATH</code>：<code>.;%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar;</code> （注意前面有个&quot;.&quot;）</p><p><code>Path</code>：<code>%JAVA_HOME%\\bin;%JAVA_HOME%\\jre\\bin;</code></p><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h3><p>执行 <code>vi /etc/profile</code> ，编辑环境变量文件</p><p>添加两行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>path/to/java
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>JAVA_HOME/bin:JAVA_HOME/jre/bin:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>source /etc/profile</code> ，立即生效。</p><h2 id="测试安装成功" tabindex="-1"><a class="header-anchor" href="#测试安装成功" aria-hidden="true">#</a> 测试安装成功</h2><p>执行命令 <code>java -version</code> ，如果安装成功，会打印当前 java 的版本信息。</p><h2 id="开发工具" tabindex="-1"><a class="header-anchor" href="#开发工具" aria-hidden="true">#</a> 开发工具</h2><p>工欲善其事，必先利其器。编写 Java 程序，当然有必要选择一个合适的 IDE。</p><p>IDE（Integrated Development Environment，即集成开发环境）是用于提供程序开发环境的应用程序，一般包括代码编辑器、编译器、调试器和图形用户界面等工具。</p><p>常见的 Java IDE 如下：</p><ul><li>Eclipse - 一个开放源代码的、基于 Java 的可扩展开发平台。</li><li>NetBeans - 开放源码的 Java 集成开发环境，适用于各种客户机和 Web 应用。</li><li>IntelliJ IDEA - 在代码自动提示、代码分析等方面的具有很好的功能。</li><li>MyEclipse - 由 Genuitec 公司开发的一款商业化软件，是应用比较广泛的 Java 应用程序集成开发环境。</li><li>EditPlus - 如果正确配置 Java 的编译器“Javac”以及解释器“Java”后，可直接使用 EditPlus 编译执行 Java 程序。</li></ul><h2 id="第一个程序-hello-world" tabindex="-1"><a class="header-anchor" href="#第一个程序-hello-world" aria-hidden="true">#</a> 第一个程序：Hello World</h2><p>添加 HelloWorld.java 文件，内容如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行后，控制台输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hello World
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,27);function k(b,_){const e=t("ExternalLinkIcon");return o(),l("div",null,[r,p,u,a("p",null,[n("进入 "),a("a",h,[n("JDK 官方下载地址"),i(e)]),n(" ，根据自己的环境选择下载所需版本。")]),v])}const f=s(d,[["render",k],["__file","00.Java开发环境.html.vue"]]);export{f as default};
