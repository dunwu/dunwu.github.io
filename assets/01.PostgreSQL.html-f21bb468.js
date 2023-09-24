import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as p,c as r,a as s,b as n,d as e,e as d}from"./app-9cc2d019.js";const o={},i=s("h1",{id:"postgresql-应用指南",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#postgresql-应用指南","aria-hidden":"true"},"#"),n(" PostgreSQL 应用指南")],-1),c={href:"https://www.postgresql.org/",target:"_blank",rel:"noopener noreferrer"},u=s("p",null,"关键词：Database, RDBM, psql",-1),m=s("figure",null,[s("img",{src:"https://raw.githubusercontent.com/dunwu/images/master/snap/20180920181010182614.png",alt:"img",tabindex:"0",loading:"lazy"}),s("figcaption",null,"img")],-1),k=s("h2",{id:"安装",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),n(" 安装")],-1),v=s("blockquote",null,[s("p",null,"本文仅以运行在 Centos 环境下举例。")],-1),b={href:"https://www.postgresql.org/download/",target:"_blank",rel:"noopener noreferrer"},g=d(`<p>官方下载页面要求用户选择相应版本，然后动态的给出安装提示，如下图所示：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20180920181010174348.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>前 3 步要求用户选择，后 4 步是根据选择动态提示的安装步骤</p><p>（1）选择 PostgreSQL 版本</p><p>（2）选择平台</p><p>（3）选择架构</p><p>（4）安装 PostgreSQL 的 rpm 仓库（为了识别下载源）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> https://download.postgresql.org/pub/repos/yum/10/redhat/rhel-7-x86_64/pgdg-centos10-10-2.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（5）安装客户端</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> postgresql10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（6）安装服务端（可选的）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> postgresql10-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（7）设置开机启动（可选的）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/pgsql-10/bin/postgresql-10-setup initdb
systemctl <span class="token builtin class-name">enable</span> postgresql-10
systemctl start postgresql-10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加新用户和新数据库" tabindex="-1"><a class="header-anchor" href="#添加新用户和新数据库" aria-hidden="true">#</a> 添加新用户和新数据库</h2><p>初次安装后，默认生成一个名为 postgres 的数据库和一个名为 postgres 的数据库用户。这里需要注意的是，同时还生成了一个名为 postgres 的 Linux 系统用户。</p><p>首先，新建一个 Linux 新用户，可以取你想要的名字，这里为 dbuser。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo adduser dbuser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 psql 命令登录 PostgreSQL 控制台：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo -u postgres psql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这时相当于系统用户 postgres 以同名数据库用户的身份，登录数据库，这是不用输入密码的。如果一切正常，系统提示符会变为&quot;postgres=#&quot;，表示这时已经进入了数据库控制台。以下的命令都在控制台内完成。</p><p>（1）使用 <code>\\password</code> 命令，为 postgres 用户设置一个密码。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>postgres=# \\password postgres
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（2）创建数据库用户 dbuser（刚才创建的是 Linux 系统用户），并设置密码。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">USER</span> dbuser <span class="token keyword">WITH</span> PASSWORD <span class="token string">&#39;password&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（3）创建用户数据库，这里为 exampledb，并指定所有者为 dbuser。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> exampledb OWNER dbuser<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（4）将 exampledb 数据库的所有权限都赋予 dbuser，否则 dbuser 只能登录控制台，没有任何数据库操作权限。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">PRIVILEGES</span> <span class="token keyword">ON</span> <span class="token keyword">DATABASE</span> exampledb <span class="token keyword">to</span> dbuser<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（5）使用\\q 命令退出控制台（也可以直接按 ctrl+D）。</p><h2 id="登录数据库" tabindex="-1"><a class="header-anchor" href="#登录数据库" aria-hidden="true">#</a> 登录数据库</h2><p>添加新用户和新数据库以后，就要以新用户的名义登录数据库，这时使用的是 psql 命令。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>psql -U dbuser -d exampledb -h 127.0.0.1 -p 5432
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令的参数含义如下：-U 指定用户，-d 指定数据库，-h 指定服务器，-p 指定端口。</p><p>输入上面命令以后，系统会提示输入 dbuser 用户的密码。输入正确，就可以登录控制台了。</p><p>psql 命令存在简写形式。如果当前 Linux 系统用户，同时也是 PostgreSQL 用户，则可以省略用户名（-U 参数的部分）。举例来说，我的 Linux 系统用户名为 ruanyf，且 PostgreSQL 数据库存在同名用户，则我以 ruanyf 身份登录 Linux 系统后，可以直接使用下面的命令登录数据库，且不需要密码。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>psql exampledb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时，如果 PostgreSQL 内部还存在与当前系统用户同名的数据库，则连数据库名都可以省略。比如，假定存在一个叫做 ruanyf 的数据库，则直接键入 psql 就可以登录该数据库。</p><p>psql</p><p>另外，如果要恢复外部数据，可以使用下面的命令。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>psql exampledb &lt; exampledb.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="控制台命令" tabindex="-1"><a class="header-anchor" href="#控制台命令" aria-hidden="true">#</a> 控制台命令</h2><p>除了前面已经用到的 \\password 命令（设置密码）和 \\q 命令（退出）以外，控制台还提供一系列其他命令。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\\password           设置密码
\\q                  退出
\\h                  查看SQL命令的解释，比如\\h select
\\?                  查看psql命令列表
\\l                  列出所有数据库
\\c [database_name]  连接其他数据库
\\d                  列出当前数据库的所有表格
\\d [table_name]     列出某一张表格的结构
\\x                  对数据做展开操作
\\du                 列出所有用户
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据库操作" tabindex="-1"><a class="header-anchor" href="#数据库操作" aria-hidden="true">#</a> 数据库操作</h2><p>基本的数据库操作，就是使用一般的 SQL 语言。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 创建新表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> user_tbl<span class="token punctuation">(</span>name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span> signup_date <span class="token keyword">DATE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 插入数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> user_tbl<span class="token punctuation">(</span>name<span class="token punctuation">,</span> signup_date<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2013-12-22&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 选择记录</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> user_tbl<span class="token punctuation">;</span>
<span class="token comment"># 更新数据</span>
<span class="token keyword">UPDATE</span> user_tbl <span class="token keyword">set</span> name <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span> <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 删除记录</span>
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> user_tbl <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span> <span class="token punctuation">;</span>
<span class="token comment"># 添加栏位</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> user_tbl <span class="token keyword">ADD</span> email <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 更新结构</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> user_tbl <span class="token keyword">ALTER</span> <span class="token keyword">COLUMN</span> signup_date <span class="token keyword">SET</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>
<span class="token comment"># 更名栏位</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> user_tbl <span class="token keyword">RENAME</span> <span class="token keyword">COLUMN</span> signup_date <span class="token keyword">TO</span> signup<span class="token punctuation">;</span>
<span class="token comment"># 删除栏位</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> user_tbl <span class="token keyword">DROP</span> <span class="token keyword">COLUMN</span> email<span class="token punctuation">;</span>
<span class="token comment"># 表格更名</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> user_tbl <span class="token keyword">RENAME</span> <span class="token keyword">TO</span> backup_tbl<span class="token punctuation">;</span>
<span class="token comment"># 删除表格</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> backup_tbl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="备份和恢复" tabindex="-1"><a class="header-anchor" href="#备份和恢复" aria-hidden="true">#</a> 备份和恢复</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pg_dump <span class="token parameter variable">--format</span><span class="token operator">=</span>t <span class="token parameter variable">-d</span> db_name <span class="token parameter variable">-U</span> user_name <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-O</span> <span class="token parameter variable">-W</span>  <span class="token operator">&gt;</span> dump.sql
psql <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-U</span> user_name db_name <span class="token operator">&lt;</span> dump.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,50),h={href:"https://www.postgresql.org/download/",target:"_blank",rel:"noopener noreferrer"},w={href:"http://www.ruanyifeng.com/blog/2013/12/getting_started_with_postgresql.html",target:"_blank",rel:"noopener noreferrer"},_=s("h2",{id:"🚪-传送",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#🚪-传送","aria-hidden":"true"},"#"),n(" 🚪 传送")],-1),x={href:"https://dunwu.github.io/waterdrop/",target:"_blank",rel:"noopener noreferrer"};function y(q,E){const a=l("ExternalLinkIcon");return p(),r("div",null,[i,s("blockquote",null,[s("p",null,[s("a",c,[n("PostgreSQL"),e(a)]),n(" 是一个关系型数据库（RDBM）。")]),u]),m,k,v,s("p",null,[n("进入"),s("a",b,[n("官方下载页面"),e(a)]),n("，根据操作系统选择合适版本。")]),g,s("ul",null,[s("li",null,[s("a",h,[n("https://www.postgresql.org/download/"),e(a)])]),s("li",null,[s("a",w,[n("http://www.ruanyifeng.com/blog/2013/12/getting_started_with_postgresql.html"),e(a)])])]),_,s("p",null,[n("◾ 💧 "),s("a",x,[n("钝悟的 IT 知识图谱"),e(a)]),n(" ◾")])])}const A=t(o,[["render",y],["__file","01.PostgreSQL.html.vue"]]);export{A as default};
