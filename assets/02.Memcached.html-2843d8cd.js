import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as l,a as n,b as a,d as e,e as c}from"./app-d8d56f9e.js";const i={},d=c(`<h1 id="memcached-快速入门" tabindex="-1"><a class="header-anchor" href="#memcached-快速入门" aria-hidden="true">#</a> Memcached 快速入门</h1><h2 id="memcached-简介" tabindex="-1"><a class="header-anchor" href="#memcached-简介" aria-hidden="true">#</a> Memcached 简介</h2><p>Memcached 是一个自由开源的，高性能，分布式内存对象缓存系统。</p><p>Memcached 是一种基于内存的 key-value 存储，用来存储小块的任意数据（字符串、对象）。这些数据可以是数据库调用、API 调用或者是页面渲染的结果。</p><p>Memcached 简洁而强大。它的简洁设计便于快速开发，减轻开发难度，解决了大数据量缓存的很多问题。它的 API 兼容大部分流行的开发语言。本质上，它是一个简洁的 key-value 存储系统。</p><h3 id="memcached-特性" tabindex="-1"><a class="header-anchor" href="#memcached-特性" aria-hidden="true">#</a> Memcached 特性</h3><p>memcached 作为高速运行的分布式缓存服务器，具有以下的特点。</p><ul><li>协议简单</li><li>基于 libevent 的事件处理</li><li>内置内存存储方式</li><li>memcached 不互相通信的分布式</li></ul><h2 id="memcached-命令" tabindex="-1"><a class="header-anchor" href="#memcached-命令" aria-hidden="true">#</a> Memcached 命令</h2><p>可以通过 telnet 命令并指定主机 ip 和端口来连接 Memcached 服务。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>telnet 127.0.0.1 11211

Trying 127.0.0.1...
Connected to 127.0.0.1.
Escape character is &#39;^]&#39;.
set foo 0 0 3                                                   保存命令
bar                                                             数据
STORED                                                          结果
get foo                                                         取得命令
VALUE foo 0 3                                                   数据
bar                                                             数据
END                                                             结束行
quit                                                            退出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java-连接-memcached" tabindex="-1"><a class="header-anchor" href="#java-连接-memcached" aria-hidden="true">#</a> Java 连接 Memcached</h2><p>使用 Java 程序连接 Memcached，需要在你的 classpath 中添加 Memcached jar 包。</p>`,13),r={href:"https://www.runoob.com/try/download/spymemcached-2.10.3.jar",target:"_blank",rel:"noopener noreferrer"},u={href:"http://code.google.com/p/spymemcached/downloads/list",target:"_blank",rel:"noopener noreferrer"},m=c(`<p>以下程序假定 Memcached 服务的主机为 127.0.0.1，端口为 11211。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">net<span class="token punctuation">.</span>spy<span class="token punctuation">.</span>memcached<span class="token punctuation">.</span></span><span class="token class-name">MemcachedClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MemcachedJava</span> <span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span><span class="token punctuation">{</span>
         <span class="token comment">// 本地连接 Memcached 服务</span>
         <span class="token class-name">MemcachedClient</span> mcc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MemcachedClient</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InetSocketAddress</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token number">11211</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Connection to server sucessful.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

         <span class="token comment">// 关闭连接</span>
         mcc<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> ex<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,3),h={href:"https://memcached.org/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/memcached/memcached/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.runoob.com/memcached/memcached-tutorial.html",target:"_blank",rel:"noopener noreferrer"};function b(_,f){const s=p("ExternalLinkIcon");return o(),l("div",null,[d,n("p",null,[a("本站 jar 包下载地址："),n("a",r,[a("spymemcached-2.10.3.jar"),e(s)]),a("。")]),n("p",null,[a("Google Code jar 包下载地址："),n("a",u,[a("spymemcached-2.10.3.jar"),e(s)]),a("（需要科学上网）。")]),m,n("ul",null,[n("li",null,[n("a",h,[a("Memcached 官网"),e(s)])]),n("li",null,[n("a",k,[a("Memcached Github"),e(s)])]),n("li",null,[n("a",v,[a("Memcached 教程"),e(s)])])])])}const M=t(i,[["render",b],["__file","02.Memcached.html.vue"]]);export{M as default};
