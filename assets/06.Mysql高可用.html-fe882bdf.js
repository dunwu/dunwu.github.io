import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as t,a as s,b as n,d as e,e as i}from"./app-6ca995c0.js";const c={},r=i(`<h1 id="mysql-高可用" tabindex="-1"><a class="header-anchor" href="#mysql-高可用" aria-hidden="true">#</a> Mysql 高可用</h1><h2 id="复制" tabindex="-1"><a class="header-anchor" href="#复制" aria-hidden="true">#</a> 复制</h2><p>复制是解决系统高可用的常见手段。其思路就是：不要把鸡蛋都放在一个篮子里。</p><p>复制解决的基本问题是让一台服务器的数据与其他服务器保持同步。一台主库的数据可以同步到多台备库上，备库本身也可以被配置成另外一台服务器的主库。主库和备库之 间可以有多种不同的组合方式。</p><p>MySQL 支持两种复制方式：基于行的复制和基于语句的复制。这两种方式都是通过在主库上记录 bin log、在备库重放日志的方式来实现异步的数据复制。这意味着：复制过程存在时延，这段时间内，主从数据可能不一致。</p><h3 id="复制如何工作" tabindex="-1"><a class="header-anchor" href="#复制如何工作" aria-hidden="true">#</a> 复制如何工作</h3><p>在 Mysql 中，复制分为三个步骤，分别由三个线程完成：</p><ul><li><strong>binlog dump 线程</strong> - 主库上有一个特殊的 binlog dump 线程，负责将主服务器上的数据更改写入 binlog 中。</li><li><strong>I/O 线程</strong> - 备库上有一个 I/O 线程，负责从主库上读取 binlog，并写入备库的中继日志（relay log）中。</li><li><strong>SQL 线程</strong> - 备库上有一个 SQL 线程，负责读取中继日志（relay log）并重放其中的 SQL 语句。</li></ul><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/database/mysql/master-slave.png"></div><p>这种架构实现了数据备份和数据同步的异步解耦。但这种架构也限制了复制的过程，其中最重要 的一点是在主库上并发运行的查询在备库只能串行化执行，因为只有一个 SQL 线程来重放 中继日志中的事件。</p><h3 id="主备配置" tabindex="-1"><a class="header-anchor" href="#主备配置" aria-hidden="true">#</a> 主备配置</h3><p>假设需要配置一对 Mysql 主备节点，环境如下：</p><ul><li>主库节点：192.168.8.10</li><li>备库节点：192.168.8.11</li></ul><h4 id="主库上的操作" tabindex="-1"><a class="header-anchor" href="#主库上的操作" aria-hidden="true">#</a> 主库上的操作</h4><p>（1）修改配置并重启</p><p>执行 <code>vi /etc/my.cnf</code> ，添加如下配置：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">server-id</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">log_bin</span><span class="token punctuation">=</span><span class="token value attr-value">/var/lib/mysql/binlog</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>server-id</code> - 服务器 ID 号。在主从架构中，每台机器的 ID 必须唯一。</li><li><code>log_bin</code> - 同步的日志路径及文件名，一定注意这个目录要是 mysql 有权限写入的；</li></ul><p>修改后，重启 mysql 使配置生效：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（2）创建用于同步的用户</p><p>进入 mysql 命令控制台：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
Password:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以下 SQL：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- a. 创建 slave 用户</span>
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">&#39;slave&#39;</span><span class="token variable">@&#39;%&#39;</span> IDENTIFIED <span class="token keyword">WITH</span> mysql_native_password <span class="token keyword">BY</span> <span class="token string">&#39;密码&#39;</span><span class="token punctuation">;</span>
<span class="token comment">-- 为 slave 赋予 REPLICATION SLAVE 权限</span>
<span class="token keyword">GRANT</span> <span class="token keyword">REPLICATION</span> SLAVE <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> <span class="token string">&#39;slave&#39;</span><span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- b. 或者，创建 slave 用户，并指定该用户能在任意主机上登录</span>
<span class="token comment">-- 如果有多个备库，又想让所有备库都使用统一的用户名、密码认证，可以考虑这种方式</span>
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">&#39;slave&#39;</span><span class="token variable">@&#39;%&#39;</span> IDENTIFIED <span class="token keyword">WITH</span> mysql_native_password <span class="token keyword">BY</span> <span class="token string">&#39;密码&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">REPLICATION</span> SLAVE <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> <span class="token string">&#39;slave&#39;</span><span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 刷新授权表信息</span>
FLUSH <span class="token keyword">PRIVILEGES</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：在 Mysql 8 中，默认密码验证不再是 <code>password</code>。所以在创建用户时，<code>create user &#39;username&#39;@&#39;%&#39; identified by &#39;password&#39;;</code> 客户端是无法连接服务的。所以，需要加上 <code>IDENTIFIED WITH mysql_native_password BY &#39;password&#39;</code></p></blockquote><p>补充用户管理 SQL:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查看所有用户</span>
<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> CONCAT<span class="token punctuation">(</span><span class="token string">&#39;User: &#39;&#39;&#39;</span><span class="token punctuation">,</span> <span class="token keyword">user</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;&#39;@&#39;&#39;&#39;</span><span class="token punctuation">,</span> host<span class="token punctuation">,</span> <span class="token string">&#39;&#39;&#39;;&#39;</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> query
<span class="token keyword">FROM</span> mysql<span class="token punctuation">.</span><span class="token keyword">user</span><span class="token punctuation">;</span>

<span class="token comment">-- 查看用户权限</span>
<span class="token keyword">SHOW</span> GRANTS <span class="token keyword">FOR</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 创建用户</span>
<span class="token comment">-- a. 创建 slave 用户，并指定该用户只能在主机 192.168.8.11 上登录</span>
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">&#39;slave&#39;</span><span class="token variable">@&#39;192.168.8.11&#39;</span> IDENTIFIED <span class="token keyword">WITH</span> mysql_native_password <span class="token keyword">BY</span> <span class="token string">&#39;密码&#39;</span><span class="token punctuation">;</span>
<span class="token comment">-- 为 slave 赋予 REPLICATION SLAVE 权限</span>
<span class="token keyword">GRANT</span> <span class="token keyword">REPLICATION</span> SLAVE <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> <span class="token string">&#39;slave&#39;</span><span class="token variable">@&#39;192.168.8.11&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 删除用户</span>
<span class="token keyword">DROP</span> <span class="token keyword">USER</span> <span class="token string">&#39;slave&#39;</span><span class="token variable">@&#39;192.168.8.11&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）加读锁</p><p>为了主库与从库的数据保持一致，我们先为 mysql 加入读锁，使其变为只读。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> FLUSH <span class="token keyword">TABLES</span> <span class="token keyword">WITH</span> <span class="token keyword">READ</span> <span class="token keyword">LOCK</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（4）查看主库状态</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> master <span class="token keyword">status</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">------------------+----------+--------------+---------------------------------------------+-------------------+</span>
<span class="token operator">|</span> <span class="token keyword">File</span>             <span class="token operator">|</span> Position <span class="token operator">|</span> Binlog_Do_DB <span class="token operator">|</span> Binlog_Ignore_DB                            <span class="token operator">|</span> Executed_Gtid_Set <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------------+----------+--------------+---------------------------------------------+-------------------+</span>
<span class="token operator">|</span> mysql<span class="token operator">-</span>bin<span class="token punctuation">.</span><span class="token number">000001</span> <span class="token operator">|</span>     <span class="token number">4202</span> <span class="token operator">|</span>              <span class="token operator">|</span> mysql<span class="token punctuation">,</span>information_schema<span class="token punctuation">,</span>performance_schema <span class="token operator">|</span>                   <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------------+----------+--------------+---------------------------------------------+-------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：需要记录下 <code>File</code> 和 <code>Position</code>，后面会用到。</p></blockquote><p>（5）导出 sql</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysqldump <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> --all-databases --master-data <span class="token operator">&gt;</span> dbdump.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（6）解除读锁</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">UNLOCK</span> <span class="token keyword">TABLES</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（7）将 sql 远程传送到备库上</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">scp</span> dbdump.sql root@192.168.8.11:/home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="备库上的操作" tabindex="-1"><a class="header-anchor" href="#备库上的操作" aria-hidden="true">#</a> 备库上的操作</h4><p>（1）修改配置并重启</p><p>执行 <code>vi /etc/my.cnf</code> ，添加如下配置：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">server-id</span><span class="token punctuation">=</span><span class="token value attr-value">2</span>
<span class="token key attr-name">log_bin</span><span class="token punctuation">=</span><span class="token value attr-value">/var/lib/mysql/binlog</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>server-id</code> - 服务器 ID 号。在主从架构中，每台机器的 ID 必须唯一。</li><li><code>log_bin</code> - 同步的日志路径及文件名，一定注意这个目录要是 mysql 有权限写入的；</li></ul><p>修改后，重启 mysql 使配置生效：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（2）导入 sql</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span> /home/dbdump.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（3）在备库上建立与主库的连接</p><p>进入 mysql 命令控制台：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
Password:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以下 SQL：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 停止备库服务</span>
STOP SLAVE<span class="token punctuation">;</span>

<span class="token comment">-- 注意：MASTER_USER 和</span>
CHANGE MASTER <span class="token keyword">TO</span>
MASTER_HOST<span class="token operator">=</span><span class="token string">&#39;192.168.8.10&#39;</span><span class="token punctuation">,</span>
MASTER_USER<span class="token operator">=</span><span class="token string">&#39;slave&#39;</span><span class="token punctuation">,</span>
MASTER_PASSWORD<span class="token operator">=</span><span class="token string">&#39;密码&#39;</span><span class="token punctuation">,</span>
MASTER_LOG_FILE<span class="token operator">=</span><span class="token string">&#39;binlog.000001&#39;</span><span class="token punctuation">,</span>
MASTER_LOG_POS<span class="token operator">=</span><span class="token number">4202</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>MASTER_LOG_FILE</code> 和 <code>MASTER_LOG_POS</code> 参数要分别与 <code>show master status</code> 指令获得的 <code>File</code> 和 <code>Position</code> 属性值对应。</li><li><code>MASTER_HOST</code> 是主库的 HOST。</li><li><code>MASTER_USER</code> 和 <code>MASTER_PASSWORD</code> 是在主节点上注册的用户及密码。</li></ul><p>（4）启动 slave 进程</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">start</span> slave<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（5）查看主从同步状态</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> slave <span class="token keyword">status</span>\\G<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>说明：如果以下两项参数均为 YES，说明配置正确。</p><ul><li><code>Slave_IO_Running</code></li><li><code>Slave_SQL_Running</code></li></ul><p>（6）将备库设为只读</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">set</span> <span class="token keyword">global</span> read_only<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">set</span> <span class="token keyword">global</span> super_read_only<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> <span class="token keyword">global</span> variables <span class="token operator">like</span> <span class="token string">&quot;%read_only%&quot;</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-----------------------+-------+</span>
<span class="token operator">|</span> Variable_name         <span class="token operator">|</span> <span class="token keyword">Value</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------------+-------+</span>
<span class="token operator">|</span> innodb_read_only      <span class="token operator">|</span> <span class="token keyword">OFF</span>   <span class="token operator">|</span>
<span class="token operator">|</span> read_only             <span class="token operator">|</span> <span class="token keyword">ON</span>    <span class="token operator">|</span>
<span class="token operator">|</span> super_read_only       <span class="token operator">|</span> <span class="token keyword">ON</span>    <span class="token operator">|</span>
<span class="token operator">|</span> transaction_read_only <span class="token operator">|</span> <span class="token keyword">OFF</span>   <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------------+-------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注：设置 slave 服务器为只读，并不影响主从同步。</p></blockquote><h2 id="复制的原理" tabindex="-1"><a class="header-anchor" href="#复制的原理" aria-hidden="true">#</a> 复制的原理</h2><h2 id="读写分离" tabindex="-1"><a class="header-anchor" href="#读写分离" aria-hidden="true">#</a> 读写分离</h2><p>主服务器用来处理写操作以及实时性要求比较高的读操作，而从服务器用来处理读操作。</p><p>读写分离常用代理方式来实现，代理服务器接收应用层传来的读写请求，然后决定转发到哪个服务器。</p><p>MySQL 读写分离能提高性能的原因在于：</p><ul><li>主从服务器负责各自的读和写，极大程度缓解了锁的争用；</li><li>从服务器可以配置 MyISAM 引擎，提升查询性能以及节约系统开销；</li><li>增加冗余，提高可用性。</li></ul><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/database/mysql/master-slave-proxy.png"></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,72),d={href:"https://book.douban.com/subject/23008813/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://time.geekbang.org/column/intro/139",target:"_blank",rel:"noopener noreferrer"};function k(v,m){const a=p("ExternalLinkIcon");return o(),t("div",null,[r,s("ul",null,[s("li",null,[s("a",d,[n("《高性能 MySQL》"),e(a)])]),s("li",null,[s("a",u,[n("MySQL 实战 45 讲"),e(a)])])])])}const y=l(c,[["render",k],["__file","06.Mysql高可用.html.vue"]]);export{y as default};
