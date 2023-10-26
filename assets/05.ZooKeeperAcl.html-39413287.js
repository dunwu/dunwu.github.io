import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c,a as s,b as a,d as e,e as l}from"./app-c2b0a364.js";const p={},r=l(`<h1 id="zookeeper-acl" tabindex="-1"><a class="header-anchor" href="#zookeeper-acl" aria-hidden="true">#</a> ZooKeeper ACL</h1><blockquote><p>为了避免存储在 Zookeeper 上的数据被其他程序或者人为误修改，Zookeeper 提供了 ACL(Access Control Lists) 进行权限控制。</p><p>ACL 权限可以针对节点设置相关读写等权限，保障数据安全性。</p></blockquote><p>ZooKeeper ACL 提供了以下几种命令行：</p><ul><li><strong>getAcl 命令</strong>：获取某个节点的 acl 权限信息。</li><li><strong>setAcl 命令</strong>：设置某个节点的 acl 权限信息。</li><li><strong>addauth 命令</strong>：输入认证授权信息，注册时输入明文密码，加密形式保存。</li></ul><h2 id="acl-组成" tabindex="-1"><a class="header-anchor" href="#acl-组成" aria-hidden="true">#</a> ACL 组成</h2><p>Zookeeper 的 acl 通过 <strong><code>[scheme:id:permissions]</code></strong> 来构成权限列表。</p><ul><li><strong>scheme</strong>：代表采用的某种权限机制，包括 world、auth、digest、ip、super 几种。 <ul><li><strong>world</strong>：默认模式，所有客户端都拥有指定的权限。world 下只有一个 id 选项，就是 anyone，通常组合写法为 <code>world:anyone:[permissons]</code>；</li><li><strong>auth</strong>：只有经过认证的用户才拥有指定的权限。通常组合写法为 <code>auth:user:password:[permissons]</code>，使用这种模式时，你需要先进行登录，之后采用 auth 模式设置权限时，<code>user</code> 和 <code>password</code> 都将使用登录的用户名和密码；</li><li><strong>digest</strong>：只有经过认证的用户才拥有指定的权限。通常组合写法为 <code>auth:user:BASE64(SHA1(password)):[permissons]</code>，这种形式下的密码必须通过 SHA1 和 BASE64 进行双重加密；</li><li><strong>ip</strong>：限制只有特定 IP 的客户端才拥有指定的权限。通常组成写法为 <code>ip:182.168.0.168:[permissions]</code>；</li><li><strong>super</strong>：代表超级管理员，拥有所有的权限，需要修改 Zookeeper 启动脚本进行配置。</li></ul></li><li><strong>id</strong>：代表允许访问的用户。</li><li><strong>permissions</strong>：权限组合字符串，由 cdrwa 组成，其中每个字母代表支持不同权限。可选项如下： <ul><li><strong>CREATE</strong>：允许创建子节点；</li><li><strong>READ</strong>：允许从节点获取数据并列出其子节点；</li><li><strong>WRITE</strong>：允许为节点设置数据；</li><li><strong>DELETE</strong>：允许删除子节点；</li><li><strong>ADMIN</strong>：允许为节点设置权限。</li></ul></li></ul><h2 id="设置与查看权限" tabindex="-1"><a class="header-anchor" href="#设置与查看权限" aria-hidden="true">#</a> 设置与查看权限</h2><p>想要给某个节点设置权限 (ACL)，有以下两个可选的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token comment"># 1.给已有节点赋予权限</span>
 setAcl path acl

 <span class="token comment"># 2.在创建节点时候指定权限</span>
 create <span class="token punctuation">[</span>-s<span class="token punctuation">]</span> <span class="token punctuation">[</span>-e<span class="token punctuation">]</span> path data acl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看指定节点的权限命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>getAcl path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="添加认证信息" tabindex="-1"><a class="header-anchor" href="#添加认证信息" aria-hidden="true">#</a> 添加认证信息</h2><p>可以使用如下所示的命令为当前 Session 添加用户认证信息，等价于登录操作。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 格式</span>
addauth scheme auth

<span class="token comment">#示例：添加用户名为test,密码为root的用户认证信息</span>
addauth digest test:root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="权限设置示例" tabindex="-1"><a class="header-anchor" href="#权限设置示例" aria-hidden="true">#</a> 权限设置示例</h2><h3 id="world-模式" tabindex="-1"><a class="header-anchor" href="#world-模式" aria-hidden="true">#</a> world 模式</h3><p>world 是一种默认的模式，即创建时如果不指定权限，则默认的权限就是 world。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">32</span><span class="token punctuation">]</span> create /mytest abc
Created /mytest
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">4</span><span class="token punctuation">]</span> getAcl /mytest
<span class="token string">&#39;world,&#39;</span>anyone <span class="token comment"># 默认的权限</span>
<span class="token builtin class-name">:</span> cdrwa
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">34</span><span class="token punctuation">]</span> setAcl /mytest world:anyone:cwda <span class="token comment"># 修改节点，不允许所有客户端读</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">6</span><span class="token punctuation">]</span> get /mytest
org.apache.zookeeper.KeeperException<span class="token variable">$NoAuthException</span><span class="token builtin class-name">:</span> KeeperErrorCode <span class="token operator">=</span> NoAuth <span class="token keyword">for</span> /mytest <span class="token comment"># 无权访问</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="auth-模式" tabindex="-1"><a class="header-anchor" href="#auth-模式" aria-hidden="true">#</a> auth 模式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">36</span><span class="token punctuation">]</span> addauth digest test:root <span class="token comment"># 登录</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">37</span><span class="token punctuation">]</span> setAcl /mytest auth::cdrwa <span class="token comment"># 设置权限</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">38</span><span class="token punctuation">]</span> getAcl /mytest <span class="token comment"># 查看权限信息</span>
<span class="token string">&#39;digest,&#39;</span>heibai:sCxtVJ1gPG8UW/jzFHR0A1ZKY5s<span class="token operator">=</span> <span class="token comment"># 用户名和密码 (密码经过加密处理)，注意返回的权限类型是 digest</span>
<span class="token builtin class-name">:</span> cdrwa

<span class="token comment"># 用户名和密码都是使用登录的用户名和密码，即使你在创建权限时候进行指定也是无效的</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">39</span><span class="token punctuation">]</span> setAcl /mytest auth:root:root:cdrwa    <span class="token comment">#指定用户名和密码为 root</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">40</span><span class="token punctuation">]</span> getAcl /mytest
<span class="token string">&#39;digest,&#39;</span>heibai:sCxtVJ1gPG8UW/jzFHR0A1ZKY5s<span class="token operator">=</span>  <span class="token comment">#无效，使用的用户名和密码依然还是 test</span>
<span class="token builtin class-name">:</span> cdrwa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="digest-模式" tabindex="-1"><a class="header-anchor" href="#digest-模式" aria-hidden="true">#</a> digest 模式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk:44<span class="token punctuation">]</span> create /spark <span class="token string">&quot;spark&quot;</span> digest:heibai:sCxtVJ1gPG8UW/jzFHR0A1ZKY5s<span class="token operator">=</span>:cdrwa  <span class="token comment">#指定用户名和加密后的密码</span>
<span class="token punctuation">[</span>zk:45<span class="token punctuation">]</span> getAcl /spark  <span class="token comment">#获取权限</span>
<span class="token string">&#39;digest,&#39;</span>heibai:sCxtVJ1gPG8UW/jzFHR0A1ZKY5s<span class="token operator">=</span>   <span class="token comment"># 返回的权限类型是 digest</span>
<span class="token builtin class-name">:</span> cdrwa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里你可以发现使用 <code>auth</code> 模式设置的权限和使用 <code>digest</code> 模式设置的权限，在最终结果上，得到的权限模式都是 <code>digest</code>。某种程度上，你可以把 <code>auth</code> 模式理解成是 <code>digest</code> 模式的一种简便实现。因为在 <code>digest</code> 模式下，每次设置都需要书写用户名和加密后的密码，这是比较繁琐的，采用 <code>auth</code> 模式就可以避免这种麻烦。</p><h3 id="ip-模式" tabindex="-1"><a class="header-anchor" href="#ip-模式" aria-hidden="true">#</a> ip 模式</h3><p>限定只有特定的 ip 才能访问。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">46</span><span class="token punctuation">]</span> create /hive <span class="token string">&quot;hive&quot;</span> ip:192.168.0.108:cdrwa
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">47</span><span class="token punctuation">]</span> get /hive
Authentication is not valid <span class="token builtin class-name">:</span> /hive  <span class="token comment"># 当前主机已经不能访问</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里可以看到当前主机已经不能访问，想要能够再次访问，可以使用对应 IP 的客户端，或使用下面介绍的 <code>super</code> 模式。</p><h3 id="super-模式" tabindex="-1"><a class="header-anchor" href="#super-模式" aria-hidden="true">#</a> super 模式</h3><p>需要修改启动脚本 <code>zkServer.sh</code>，并在指定位置添加超级管理员账户和密码信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">&quot;-Dzookeeper.DigestAuthenticationProvider.superDigest=heibai:sCxtVJ1gPG8UW/jzFHR0A1ZKY5s=&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改完成后需要使用 <code>zkServer.sh restart</code> 重启服务，此时再次访问限制 IP 的节点：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">0</span><span class="token punctuation">]</span> get /hive  <span class="token comment">#访问受限</span>
Authentication is not valid <span class="token builtin class-name">:</span> /hive
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">]</span> addauth digest heibai:heibai  <span class="token comment"># 登录 (添加认证信息)</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">2</span><span class="token punctuation">]</span> get /hive  <span class="token comment">#成功访问</span>
hive
cZxid <span class="token operator">=</span> 0x158
ctime <span class="token operator">=</span> Sat May <span class="token number">25</span> 09:11:29 CST <span class="token number">2019</span>
mZxid <span class="token operator">=</span> 0x158
mtime <span class="token operator">=</span> Sat May <span class="token number">25</span> 09:11:29 CST <span class="token number">2019</span>
pZxid <span class="token operator">=</span> 0x158
cversion <span class="token operator">=</span> <span class="token number">0</span>
dataVersion <span class="token operator">=</span> <span class="token number">0</span>
aclVersion <span class="token operator">=</span> <span class="token number">0</span>
ephemeralOwner <span class="token operator">=</span> 0x0
dataLength <span class="token operator">=</span> <span class="token number">4</span>
numChildren <span class="token operator">=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,34),d={href:"https://www.w3cschool.cn/zookeeper/zookeeper_installation.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/heibaiying/BigData-Notes/blob/master/notes/installation/Zookeeper%E5%8D%95%E6%9C%BA%E7%8E%AF%E5%A2%83%E5%92%8C%E9%9B%86%E7%BE%A4%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA.md",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.runoob.com/w3cnote/zookeeper-bs-command.html",target:"_blank",rel:"noopener noreferrer"};function k(h,v){const n=o("ExternalLinkIcon");return i(),c("div",null,[r,s("ul",null,[s("li",null,[s("a",d,[a("Zookeeper 安装"),e(n)])]),s("li",null,[s("a",u,[a("Zookeeper 单机环境和集群环境搭建"),e(n)])]),s("li",null,[s("a",m,[a("Zookeeper 客户端基础命令使用"),e(n)])])])])}const E=t(p,[["render",k],["__file","05.ZooKeeperAcl.html.vue"]]);export{E as default};
