import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c as r,a as n,b as s,d as e,e as t}from"./app-4f05975a.js";const i={},c=n("h1",{id:"kong",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#kong","aria-hidden":"true"},"#"),s(" Kong")],-1),u={href:"https://github.com/Kong/kong",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,[s("关键词："),n("code",null,"nginx"),s(","),n("code",null,"api网关"),s(","),n("code",null,"微服务")],-1),k=t('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><h3 id="为什么选择-kong" tabindex="-1"><a class="header-anchor" href="#为什么选择-kong" aria-hidden="true">#</a> 为什么选择 Kong</h3><p><br><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/images/microservices/kong/why-kong.png"></div><br></p><h2 id="quickstart" tabindex="-1"><a class="header-anchor" href="#quickstart" aria-hidden="true">#</a> Quickstart</h2><h3 id="安装配置" tabindex="-1"><a class="header-anchor" href="#安装配置" aria-hidden="true">#</a> 安装配置</h3><blockquote><p>本文仅以 Centos7 为例。</p></blockquote><p>Kong 支持在多种环境下安装。</p>',7),v={href:"https://konghq.com/install/",target:"_blank",rel:"noopener noreferrer"},m=t(`<p><br><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20180920181011104339.png"></div><br></p><p>以下为 Centos7 安装步骤：</p><p>（1）下载 rpm 安装包到本地</p><p>（2）安装 Kong</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ sudo yum install epel-release
$ sudo yum install kong-community-edition-0.14.1.*.noarch.rpm --nogpgcheck
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）准备数据库</p>`,6),h={href:"http://www.postgresql.org/",target:"_blank",rel:"noopener noreferrer"},b={href:"http://cassandra.apache.org/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/dunwu/database/blob/master/docs/postgresql.md#%E5%AE%89%E8%A3%85",target:"_blank",rel:"noopener noreferrer"},q=t(`<p>安装 PostgreSQL 后，配置一个数据库和数据库用户：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">USER</span> kong<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> kong OWNER kong<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）执行 Kong 迁移</p><p>执行以下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ kong migrations up [-c /path/to/kong.conf]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：永远不应同时运行迁移；一个 Kong 节点应该只执行一次迁移。</p><p>（5）启动 Kong</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ kong start [-c /path/to/kong.conf]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（6）测试启动成功</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ curl -i http://localhost:8001/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>至此，安装配置完成。</p><h3 id="使用-kong" tabindex="-1"><a class="header-anchor" href="#使用-kong" aria-hidden="true">#</a> 使用 Kong</h3><ul><li>启动（必须确保执行过 <code>kong migrations up</code>） - <code>kong start [-c /path/to/kong.conf]</code><ul><li><code>-c /path/to/kong.conf</code> 参数用来指定用户的配置</li></ul></li><li>停止 - <code>kong stop</code></li><li>重启 - <code>kong reload</code></li></ul><h3 id="配置服务" tabindex="-1"><a class="header-anchor" href="#配置服务" aria-hidden="true">#</a> 配置服务</h3><p>（1）添加第一个服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-X</span> POST <span class="token punctuation">\\</span>
  <span class="token parameter variable">--url</span> http://localhost:8001/services/ <span class="token punctuation">\\</span>
  <span class="token parameter variable">--data</span> <span class="token string">&#39;name=example-service&#39;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--data</span> <span class="token string">&#39;url=http://mockbin.org&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应答类似下面形式：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">201</span> <span class="token reason-phrase string">Created</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">keep-alive</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
   <span class="token property">&quot;host&quot;</span><span class="token operator">:</span><span class="token string">&quot;mockbin.org&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;created_at&quot;</span><span class="token operator">:</span><span class="token number">1519130509</span><span class="token punctuation">,</span>
   <span class="token property">&quot;connect_timeout&quot;</span><span class="token operator">:</span><span class="token number">60000</span><span class="token punctuation">,</span>
   <span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;92956672-f5ea-4e9a-b096-667bf55bc40c&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;example-service&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;read_timeout&quot;</span><span class="token operator">:</span><span class="token number">60000</span><span class="token punctuation">,</span>
   <span class="token property">&quot;port&quot;</span><span class="token operator">:</span><span class="token number">80</span><span class="token punctuation">,</span>
   <span class="token property">&quot;path&quot;</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
   <span class="token property">&quot;updated_at&quot;</span><span class="token operator">:</span><span class="token number">1519130509</span><span class="token punctuation">,</span>
   <span class="token property">&quot;retries&quot;</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>
   <span class="token property">&quot;write_timeout&quot;</span><span class="token operator">:</span><span class="token number">60000</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）为服务添加路由</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-X</span> POST <span class="token punctuation">\\</span>
  <span class="token parameter variable">--url</span> http://localhost:8001/services/example-service/routes <span class="token punctuation">\\</span>
  <span class="token parameter variable">--data</span> <span class="token string">&#39;hosts[]=example.com&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应答类似下面形式：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">201</span> <span class="token reason-phrase string">Created</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">keep-alive</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
   <span class="token property">&quot;created_at&quot;</span><span class="token operator">:</span><span class="token number">1519131139</span><span class="token punctuation">,</span>
   <span class="token property">&quot;strip_path&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
   <span class="token property">&quot;hosts&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token string">&quot;example.com&quot;</span>
   <span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">&quot;preserve_host&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
   <span class="token property">&quot;regex_priority&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
   <span class="token property">&quot;updated_at&quot;</span><span class="token operator">:</span><span class="token number">1519131139</span><span class="token punctuation">,</span>
   <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
   <span class="token property">&quot;service&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;79d7ee6e-9fc7-4b95-aa3b-61d2e17e7516&quot;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token property">&quot;methods&quot;</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
   <span class="token property">&quot;protocols&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;https&quot;</span>
   <span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;f9ce2ed7-c06e-4e16-bd5d-3a82daef3f9d&quot;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，Kong 已经关注这个服务，并准备代理请求。</p><p>（3）通过 Kong 转发请求</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-X</span> GET <span class="token punctuation">\\</span>
  <span class="token parameter variable">--url</span> http://localhost:8000/ <span class="token punctuation">\\</span>
  <span class="token parameter variable">--header</span> <span class="token string">&#39;Host: example.com&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,26),_={href:"https://www.itcodemonkey.com/article/5980.html",target:"_blank",rel:"noopener noreferrer"};function x(y,f){const a=p("ExternalLinkIcon");return l(),r("div",null,[c,n("blockquote",null,[n("p",null,[n("a",u,[s("Kong"),e(a)]),s(" 是一个云原生、快速、可扩展和分布式的微服务抽象层（也称为 API 网关，API 中间件）。")]),d]),k,n("p",null,[s("官方安装说明："),n("a",v,[s("https://konghq.com/install/"),e(a)])]),m,n("p",null,[s("Kong 需要存储数据，支持两种数据库："),n("a",h,[s("PostgreSQL 9.5+"),e(a)]),s(" 和 "),n("a",b,[s("Cassandra 3.x.x"),e(a)])]),n("p",null,[s("本人选择了 PostgreSQL，安装方法可以参考 —— "),n("a",g,[s("PostgreSQL 安装"),e(a)])]),q,n("p",null,[n("a",_,[s("https://www.itcodemonkey.com/article/5980.html"),e(a)])])])}const E=o(i,[["render",x],["__file","22.Kong.html.vue"]]);export{E as default};
