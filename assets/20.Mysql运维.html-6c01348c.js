import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c as p,a as s,b as n,d as e,e as l}from"./app-ab18ad7c.js";const c={},d=l('<h1 id="mysql-运维" tabindex="-1"><a class="header-anchor" href="#mysql-运维" aria-hidden="true">#</a> Mysql 运维</h1><blockquote><p>如果你的公司有 DBA，那么我恭喜你，你可以无视 Mysql 运维。如果你的公司没有 DBA，那你就好好学两手 Mysql 基本运维操作，行走江湖，防身必备。</p></blockquote><h2 id="安装部署" tabindex="-1"><a class="header-anchor" href="#安装部署" aria-hidden="true">#</a> 安装部署</h2><h3 id="windows-安装" tabindex="-1"><a class="header-anchor" href="#windows-安装" aria-hidden="true">#</a> Windows 安装</h3><p>（1）下载 Mysql 5.7 免安装版</p>',5),r={href:"https://dev.mysql.com/downloads/mysql/5.7.html#downloads",target:"_blank",rel:"noopener noreferrer"},u=l(`<p>（2）解压并创建 my.ini 在根目录</p><p>my.ini 文件示例：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld</span><span class="token punctuation">]</span></span>
<span class="token comment">#设置3306端口</span>
<span class="token key attr-name">port</span> <span class="token punctuation">=</span> <span class="token value attr-value">3306</span>
<span class="token comment"># 设置mysql的安装目录 这块换成自己解压的路径</span>
<span class="token key attr-name">basedir</span><span class="token punctuation">=</span><span class="token value attr-value">D:\\\\Tools\\\\DB\\\\mysql\\\\mysql-5.7.31</span>
<span class="token comment"># 允许最大连接数</span>
<span class="token key attr-name">max_connections</span><span class="token punctuation">=</span><span class="token value attr-value">200</span>
<span class="token comment"># 服务端使用的字符集默认为8比特编码的latin1字符集</span>
<span class="token key attr-name">character-set-server</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>
<span class="token comment"># 创建新表时将使用的默认存储引擎</span>
<span class="token key attr-name">default-storage-engine</span><span class="token punctuation">=</span><span class="token value attr-value">INNODB</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">client</span><span class="token punctuation">]</span></span>
<span class="token comment"># 设置mysql客户端默认字符集</span>
<span class="token key attr-name">default-character-set</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）执行安装命令</p><p>在控制台 CMD 中依次执行以下安装命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd D:\\\\Tools\\\\DB\\\\mysql\\\\mysql-5.7.31
mysqld --initialize
mysqld -install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><ul><li><code>mysqld --initialize</code> 会自动初始化创建 data 文件夹并初始化 mysql。</li><li><code>mysqld -install</code> 会安装 mysql 服务。</li></ul><p>（4）启动服务</p><p>在控制台执行 <code>net start mysql</code> 启动服务。</p><h3 id="centos-安装" tabindex="-1"><a class="header-anchor" href="#centos-安装" aria-hidden="true">#</a> CentOS 安装</h3><blockquote><p>本文仅介绍 rpm 安装方式</p></blockquote><h4 id="安装-mysql-yum-源" tabindex="-1"><a class="header-anchor" href="#安装-mysql-yum-源" aria-hidden="true">#</a> 安装 mysql yum 源</h4>`,13),m={href:"https://dev.mysql.com/downloads/repo/yum/",target:"_blank",rel:"noopener noreferrer"},v=l(`<p>（1）下载 yum 源</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://dev.mysql.com/get/mysql80-community-release-el7-1.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（2）安装 yum repo 文件并更新 yum 缓存</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql80-community-release-el7-1.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果：</p><p>会在 /etc/yum.repos.d/ 目录下生成两个 repo 文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token operator">|</span> <span class="token function">grep</span> mysql
mysql-community.repo
mysql-community-source.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新 yum：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum clean all
yum makecache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）查看 rpm 安装状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ yum search mysql <span class="token operator">|</span> <span class="token function">grep</span> server
mysql-community-common.i686 <span class="token builtin class-name">:</span> MySQL database common files <span class="token keyword">for</span> server and client
mysql-community-common.x86_64 <span class="token builtin class-name">:</span> MySQL database common files <span class="token keyword">for</span> server and
mysql-community-test.x86_64 <span class="token builtin class-name">:</span> Test suite <span class="token keyword">for</span> the MySQL database server
                       <span class="token builtin class-name">:</span> administering MySQL servers
mysql-community-server.x86_64 <span class="token builtin class-name">:</span> A very fast and reliable SQL database server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 yum 安装 mysql 有几个重要目录：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 配置文件
/etc/my.cnf
## 数据库目录
/var/lib/mysql/
## 配置文件
/usr/share/mysql（mysql.server命令及配置文件）
## 相关命令
/usr/bin（mysqladmin mysqldump等命令）
## 启动脚本
/usr/lib/systemd/system/mysqld.service （注册为 systemd 服务）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）安装 mysql 服务器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> mysql-community-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="mysql-服务管理" tabindex="-1"><a class="header-anchor" href="#mysql-服务管理" aria-hidden="true">#</a> mysql 服务管理</h4><p>通过 yum 方式安装 mysql 后，本地会有一个名为 <code>mysqld</code> 的 systemd 服务。</p><p>其服务管理十分简便：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 查看状态</span>
systemctl status mysqld
<span class="token comment">## 启用服务</span>
systemctl <span class="token builtin class-name">enable</span> mysqld
<span class="token comment">## 禁用服务</span>
systemctl disable mysqld
<span class="token comment">## 启动服务</span>
systemctl start mysqld
<span class="token comment">## 重启服务</span>
systemctl restart mysqld
<span class="token comment">## 停止服务</span>
systemctl stop mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化数据库密码" tabindex="-1"><a class="header-anchor" href="#初始化数据库密码" aria-hidden="true">#</a> 初始化数据库密码</h3><p>查看一下初始密码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">grep</span> <span class="token string">&quot;password&quot;</span> /var/log/mysqld.log
<span class="token number">2018</span>-09-30T03:13:41.727736Z <span class="token number">5</span> <span class="token punctuation">[</span>Note<span class="token punctuation">]</span> <span class="token punctuation">[</span>MY-010454<span class="token punctuation">]</span> <span class="token punctuation">[</span>Server<span class="token punctuation">]</span> A temporary password is generated <span class="token keyword">for</span> root@localhost: %:lt+srWu4k1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-uroot</span> -p<span class="token operator">&lt;</span>临时密码<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入临时密码，进入 mysql，如果要修改密码，执行以下指令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ALTER user <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;你的密码&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注：密码强度默认为中等，大小写字母、数字、特殊符号，只有修改成功后才能修改配置再设置更简单的密码</p><h3 id="配置远程访问" tabindex="-1"><a class="header-anchor" href="#配置远程访问" aria-hidden="true">#</a> 配置远程访问</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;%&#39;</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;你的密码&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">USER</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;%&#39;</span> IDENTIFIED <span class="token keyword">WITH</span> mysql_native_password <span class="token keyword">BY</span> <span class="token string">&#39;你的密码&#39;</span><span class="token punctuation">;</span>
FLUSH <span class="token keyword">PRIVILEGES</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="跳过登录认证" tabindex="-1"><a class="header-anchor" href="#跳过登录认证" aria-hidden="true">#</a> 跳过登录认证</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 [mysqld] 下面加上 skip-grant-tables</p><p>作用是登录时跳过登录认证，换句话说就是 root 什么密码都可以登录进去。</p><p>执行 <code>systemctl restart mysqld</code>，重启 mysql</p><h2 id="基本运维" tabindex="-1"><a class="header-anchor" href="#基本运维" aria-hidden="true">#</a> 基本运维</h2><h3 id="客户端连接" tabindex="-1"><a class="header-anchor" href="#客户端连接" aria-hidden="true">#</a> 客户端连接</h3><p>语法：<code>mysql -h&lt;主机&gt; -P&lt;端口&gt; -u&lt;用户名&gt; -p&lt;密码&gt;</code></p><p>如果没有显式指定密码，会要求输入密码才能访问。</p><p>【示例】连接本地 Mysql</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ mysql <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-P</span> <span class="token number">3306</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
Enter password:
Welcome to the MySQL monitor.  Commands end with <span class="token punctuation">;</span> or <span class="token punctuation">\\</span>g.
Your MySQL connection <span class="token function">id</span> is <span class="token number">13501</span>
Server version: <span class="token number">8.0</span>.19 MySQL Community Server - GPL

Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2000</span>, <span class="token number">2020</span>, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type <span class="token string">&#39;help;&#39;</span> or <span class="token string">&#39;\\h&#39;</span> <span class="token keyword">for</span> help. Type <span class="token string">&#39;\\c&#39;</span> to <span class="token function">clear</span> the current input statement.

mysql<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看连接" tabindex="-1"><a class="header-anchor" href="#查看连接" aria-hidden="true">#</a> 查看连接</h3><p>连接完成后，如果你没有后续的动作，这个连接就处于空闲状态，你可以在 <code>show processlist</code> 命令中看到它。客户端如果太长时间没动静，连接器就会自动将它断开。这个时间是由参数 <code>wait_timeout</code> 控制的，默认值是 8 小时。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200714115031.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户" aria-hidden="true">#</a> 创建用户</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">&#39;username&#39;</span><span class="token variable">@&#39;host&#39;</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>说明：</p><ul><li>username：你将创建的用户名</li><li>host：指定该用户在哪个主机上可以登陆，如果是本地用户可用 localhost，如果想让该用户可以<strong>从任意远程主机登陆</strong>，可以使用通配符<code>%</code></li><li>password：该用户的登陆密码，密码可以为空，如果为空则该用户可以不需要密码登陆服务器</li></ul><p>示例：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">&#39;dog&#39;</span><span class="token variable">@&#39;localhost&#39;</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">&#39;pig&#39;</span><span class="token variable">@&#39;192.168.1.101_&#39;</span> IDENDIFIED <span class="token keyword">BY</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">&#39;pig&#39;</span><span class="token variable">@&#39;%&#39;</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">&#39;pig&#39;</span><span class="token variable">@&#39;%&#39;</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">&#39;pig&#39;</span><span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：在 Mysql 8 中，默认密码验证不再是 <code>password</code>。所以在创建用户时，<code>create user &#39;username&#39;@&#39;%&#39; identified by &#39;password&#39;;</code> 客户端是无法连接服务的。</p><p>所以，需要加上 <code>IDENTIFIED WITH mysql_native_password</code>，例如：<code>CREATE USER &#39;slave&#39;@&#39;%&#39; IDENTIFIED WITH mysql_native_password BY &#39;123456&#39;;</code></p></blockquote><h3 id="查看用户" tabindex="-1"><a class="header-anchor" href="#查看用户" aria-hidden="true">#</a> 查看用户</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查看所有用户</span>
<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> CONCAT<span class="token punctuation">(</span><span class="token string">&#39;User: &#39;&#39;&#39;</span><span class="token punctuation">,</span> <span class="token keyword">user</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;&#39;@&#39;&#39;&#39;</span><span class="token punctuation">,</span> host<span class="token punctuation">,</span> <span class="token string">&#39;&#39;&#39;;&#39;</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> query
<span class="token keyword">FROM</span> mysql<span class="token punctuation">.</span><span class="token keyword">user</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="授权" tabindex="-1"><a class="header-anchor" href="#授权" aria-hidden="true">#</a> 授权</h3><p>命令：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">GRANT</span> <span class="token keyword">privileges</span> <span class="token keyword">ON</span> databasename<span class="token punctuation">.</span>tablename <span class="token keyword">TO</span> <span class="token string">&#39;username&#39;</span><span class="token variable">@&#39;host&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>说明：</p><ul><li>privileges：用户的操作权限，如<code>SELECT</code>，<code>INSERT</code>，<code>UPDATE</code>等，如果要授予所的权限则使用<code>ALL</code></li><li>databasename：数据库名</li><li>tablename：表名，如果要授予该用户对所有数据库和表的相应操作权限则可用<code>*</code>表示，如<code>*.*</code></li></ul><p>示例：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">GRANT</span> <span class="token keyword">SELECT</span><span class="token punctuation">,</span> <span class="token keyword">INSERT</span> <span class="token keyword">ON</span> test<span class="token punctuation">.</span><span class="token keyword">user</span> <span class="token keyword">TO</span> <span class="token string">&#39;pig&#39;</span><span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> <span class="token string">&#39;pig&#39;</span><span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">ON</span> maindataplus<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> <span class="token string">&#39;pig&#39;</span><span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><p>用以上命令授权的用户不能给其它用户授权，如果想让该用户可以授权，用以下命令:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 为指定用户配置指定权限</span>
<span class="token keyword">GRANT</span> <span class="token keyword">privileges</span> <span class="token keyword">ON</span> databasename<span class="token punctuation">.</span>tablename <span class="token keyword">TO</span> <span class="token string">&#39;username&#39;</span><span class="token variable">@&#39;host&#39;</span> <span class="token keyword">WITH</span> <span class="token keyword">GRANT</span> <span class="token keyword">OPTION</span><span class="token punctuation">;</span>
<span class="token comment">-- 为 root 用户分配所有权限</span>
<span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;%&#39;</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;密码&#39;</span> <span class="token keyword">WITH</span> <span class="token keyword">GRANT</span> <span class="token keyword">OPTION</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="撤销授权" tabindex="-1"><a class="header-anchor" href="#撤销授权" aria-hidden="true">#</a> 撤销授权</h3><p>命令:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REVOKE privilege ON databasename.tablename FROM &#39;username&#39;@&#39;host&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>说明:</p><p>privilege, databasename, tablename：同授权部分</p><p>例子:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">REVOKE</span> <span class="token keyword">SELECT</span> <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token string">&#39;pig&#39;</span><span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意:</p><p>假如你在给用户<code>&#39;pig&#39;@&#39;%&#39;</code>授权的时候是这样的（或类似的）：<code>GRANT SELECT ON test.user TO &#39;pig&#39;@&#39;%&#39;</code>，则在使用<code>REVOKE SELECT ON *.* FROM &#39;pig&#39;@&#39;%&#39;;</code>命令并不能撤销该用户对 test 数据库中 user 表的<code>SELECT</code> 操作。相反，如果授权使用的是<code>GRANT SELECT ON *.* TO &#39;pig&#39;@&#39;%&#39;;</code>则<code>REVOKE SELECT ON test.user FROM &#39;pig&#39;@&#39;%&#39;;</code>命令也不能撤销该用户对 test 数据库中 user 表的<code>Select</code>权限。</p><p>具体信息可以用命令<code>SHOW GRANTS FOR &#39;pig&#39;@&#39;%&#39;;</code> 查看。</p><h3 id="查看授权" tabindex="-1"><a class="header-anchor" href="#查看授权" aria-hidden="true">#</a> 查看授权</h3><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 查看用户权限
SHOW GRANTS FOR &#39;root&#39;@&#39;%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更改用户密码" tabindex="-1"><a class="header-anchor" href="#更改用户密码" aria-hidden="true">#</a> 更改用户密码</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> PASSWORD <span class="token keyword">FOR</span> <span class="token string">&#39;username&#39;</span><span class="token variable">@&#39;host&#39;</span> <span class="token operator">=</span> PASSWORD<span class="token punctuation">(</span><span class="token string">&#39;newpassword&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果是当前登陆用户用:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> PASSWORD <span class="token operator">=</span> PASSWORD<span class="token punctuation">(</span><span class="token string">&quot;newpassword&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> PASSWORD <span class="token keyword">FOR</span> <span class="token string">&#39;pig&#39;</span><span class="token variable">@&#39;%&#39;</span> <span class="token operator">=</span> PASSWORD<span class="token punctuation">(</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="备份与恢复" tabindex="-1"><a class="header-anchor" href="#备份与恢复" aria-hidden="true">#</a> 备份与恢复</h3><p>Mysql 备份数据使用 mysqldump 命令。</p><p>mysqldump 将数据库中的数据备份成一个文本文件，表的结构和表中的数据将存储在生成的文本文件中。</p><p>备份：</p><h4 id="备份一个数据库" tabindex="-1"><a class="header-anchor" href="#备份一个数据库" aria-hidden="true">#</a> 备份一个数据库</h4><p>语法：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysqldump <span class="token operator">-</span>h <span class="token operator">&lt;</span>host<span class="token operator">&gt;</span> <span class="token operator">-</span>P<span class="token operator">&lt;</span>port<span class="token operator">&gt;</span> <span class="token operator">-</span>u<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span> <span class="token operator">-</span>p<span class="token operator">&lt;</span><span class="token keyword">database</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>table1<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>table2<span class="token operator">&gt;</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token keyword">backup</span><span class="token punctuation">.</span><span class="token keyword">sql</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong><code>host</code></strong> - Mysql Server 的 host</li><li><strong><code>port</code></strong> - Mysql Server 的端口</li><li><strong><code>username</code></strong> - 数据库用户</li><li><strong><code>dbname</code></strong> - 数据库名称</li><li>table1 和 table2 参数表示需要备份的表的名称，为空则整个数据库备份；</li><li>BackupName.sql 参数表设计备份文件的名称，文件名前面可以加上一个绝对路径。通常将数据库被分成一个后缀名为 sql 的文件</li></ul><h4 id="备份多个数据库" tabindex="-1"><a class="header-anchor" href="#备份多个数据库" aria-hidden="true">#</a> 备份多个数据库</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysqldump <span class="token operator">-</span>u <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span> <span class="token operator">-</span>p <span class="token comment">--databases &lt;database1&gt; &lt;database2&gt; ... &gt; backup.sql</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="备份所有数据库" tabindex="-1"><a class="header-anchor" href="#备份所有数据库" aria-hidden="true">#</a> 备份所有数据库</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysqldump <span class="token operator">-</span>u <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span> <span class="token operator">-</span>p <span class="token comment">--all-databases &gt; backup.sql</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="恢复一个数据库" tabindex="-1"><a class="header-anchor" href="#恢复一个数据库" aria-hidden="true">#</a> 恢复一个数据库</h4><p>Mysql 恢复数据使用 mysql 命令。</p><p>语法：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql <span class="token operator">-</span>h <span class="token operator">&lt;</span>host<span class="token operator">&gt;</span> <span class="token operator">-</span>P<span class="token operator">&lt;</span>port<span class="token operator">&gt;</span> <span class="token operator">-</span>u<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span> <span class="token operator">-</span>p<span class="token operator">&lt;</span><span class="token keyword">database</span><span class="token operator">&gt;</span> <span class="token operator">&lt;</span> <span class="token keyword">backup</span><span class="token punctuation">.</span><span class="token keyword">sql</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="恢复所有数据库" tabindex="-1"><a class="header-anchor" href="#恢复所有数据库" aria-hidden="true">#</a> 恢复所有数据库</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql <span class="token operator">-</span>u<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span> <span class="token operator">-</span>p <span class="token comment">--all-databases &lt; backup.sql</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h3><p>（1）查看已安装的 mysql</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> mysql
perl-DBD-MySQL-4.023-6.el7.x86_64
mysql80-community-release-el7-1.noarch
mysql-community-common-8.0.12-1.el7.x86_64
mysql-community-client-8.0.12-1.el7.x86_64
mysql-community-libs-compat-8.0.12-1.el7.x86_64
mysql-community-libs-8.0.12-1.el7.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）卸载 mysql</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum remove mysql-community-server.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="主从节点部署" tabindex="-1"><a class="header-anchor" href="#主从节点部署" aria-hidden="true">#</a> 主从节点部署</h3><p>假设需要配置一个主从 Mysql 服务器环境</p><ul><li>master 节点：192.168.8.10</li><li>slave 节点：192.168.8.11</li></ul><h4 id="主节点上的操作" tabindex="-1"><a class="header-anchor" href="#主节点上的操作" aria-hidden="true">#</a> 主节点上的操作</h4><p>（1）修改配置并重启</p><p>执行 <code>vi /etc/my.cnf</code> ，添加如下配置：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">server-id</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">log_bin</span><span class="token punctuation">=</span><span class="token value attr-value">/var/lib/mysql/binlog</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>server-id</code> - 服务器 ID 号。在主从架构中，每台机器的 ID 必须唯一。</li><li><code>log_bin</code> - 同步的日志路径及文件名，一定注意这个目录要是 mysql 有权限写入的；</li></ul><p>修改后，重启 mysql 使配置生效：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>systemctl restart mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（2）创建用于同步的用户</p><p>进入 mysql 命令控制台：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ mysql -u root -p
Password:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以下 SQL：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- a. 创建 slave 用户</span>
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">&#39;slave&#39;</span><span class="token variable">@&#39;%&#39;</span> IDENTIFIED <span class="token keyword">WITH</span> mysql_native_password <span class="token keyword">BY</span> <span class="token string">&#39;密码&#39;</span><span class="token punctuation">;</span>
<span class="token comment">-- 为 slave 赋予 REPLICATION SLAVE 权限</span>
<span class="token keyword">GRANT</span> <span class="token keyword">REPLICATION</span> SLAVE <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> <span class="token string">&#39;slave&#39;</span><span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- b. 或者，创建 slave 用户，并指定该用户能在任意主机上登录</span>
<span class="token comment">-- 如果有多个从节点，又想让所有从节点都使用统一的用户名、密码认证，可以考虑这种方式</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（4）查看主节点状态</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> master <span class="token keyword">status</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">------------------+----------+--------------+---------------------------------------------+-------------------+</span>
<span class="token operator">|</span> <span class="token keyword">File</span>             <span class="token operator">|</span> Position <span class="token operator">|</span> Binlog_Do_DB <span class="token operator">|</span> Binlog_Ignore_DB                            <span class="token operator">|</span> Executed_Gtid_Set <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------------+----------+--------------+---------------------------------------------+-------------------+</span>
<span class="token operator">|</span> mysql<span class="token operator">-</span>bin<span class="token punctuation">.</span><span class="token number">000001</span> <span class="token operator">|</span>     <span class="token number">4202</span> <span class="token operator">|</span>              <span class="token operator">|</span> mysql<span class="token punctuation">,</span>information_schema<span class="token punctuation">,</span>performance_schema <span class="token operator">|</span>                   <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------------+----------+--------------+---------------------------------------------+-------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：需要记录下 <code>File</code> 和 <code>Position</code>，后面会用到。</p></blockquote><p>（5）导出 sql</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysqldump <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> --all-databases --master-data <span class="token operator">&gt;</span> dbdump.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（6）解除读锁</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">UNLOCK</span> <span class="token keyword">TABLES</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（7）将 sql 远程传送到从节点上</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>scp dbdump.sql root@192.168.8.11:/home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="从节点上的操作" tabindex="-1"><a class="header-anchor" href="#从节点上的操作" aria-hidden="true">#</a> 从节点上的操作</h4><p>（1）修改配置并重启</p><p>执行 <code>vi /etc/my.cnf</code> ，添加如下配置：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">server-id</span><span class="token punctuation">=</span><span class="token value attr-value">2</span>
<span class="token key attr-name">log_bin</span><span class="token punctuation">=</span><span class="token value attr-value">/var/lib/mysql/binlog</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>server-id</code> - 服务器 ID 号。在主从架构中，每台机器的 ID 必须唯一。</li><li><code>log_bin</code> - 同步的日志路径及文件名，一定注意这个目录要是 mysql 有权限写入的；</li></ul><p>修改后，重启 mysql 使配置生效：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（2）导入 sql</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span> /home/dbdump.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（3）在从节点上建立与主节点的连接</p><p>进入 mysql 命令控制台：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ mysql -u root -p
Password:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以下 SQL：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 停止从节点服务</span>
STOP SLAVE<span class="token punctuation">;</span>

<span class="token comment">-- 注意：MASTER_USER 和</span>
CHANGE MASTER <span class="token keyword">TO</span>
MASTER_HOST<span class="token operator">=</span><span class="token string">&#39;192.168.8.10&#39;</span><span class="token punctuation">,</span>
MASTER_USER<span class="token operator">=</span><span class="token string">&#39;slave&#39;</span><span class="token punctuation">,</span>
MASTER_PASSWORD<span class="token operator">=</span><span class="token string">&#39;密码&#39;</span><span class="token punctuation">,</span>
MASTER_LOG_FILE<span class="token operator">=</span><span class="token string">&#39;binlog.000001&#39;</span><span class="token punctuation">,</span>
MASTER_LOG_POS<span class="token operator">=</span><span class="token number">4202</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>MASTER_LOG_FILE</code> 和 <code>MASTER_LOG_POS</code> 参数要分别与 <code>show master status</code> 指令获得的 <code>File</code> 和 <code>Position</code> 属性值对应。</li><li><code>MASTER_HOST</code> 是主节点的 HOST。</li><li><code>MASTER_USER</code> 和 <code>MASTER_PASSWORD</code> 是在主节点上注册的用户及密码。</li></ul><p>（4）启动 slave 进程</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">start</span> slave<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（5）查看主从同步状态</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> slave <span class="token keyword">status</span>\\G<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>说明：如果以下两项参数均为 YES，说明配置正确。</p><ul><li><code>Slave_IO_Running</code></li><li><code>Slave_SQL_Running</code></li></ul><p>（6）将从节点设为只读</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">set</span> <span class="token keyword">global</span> read_only<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注：设置 slave 服务器为只读，并不影响主从同步。</p></blockquote><h3 id="慢查询" tabindex="-1"><a class="header-anchor" href="#慢查询" aria-hidden="true">#</a> 慢查询</h3><p>查看慢查询是否开启</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">&#39;%slow_query_log&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以通过 <code>set global slow_query_log</code> 命令设置慢查询是否开启：ON 表示开启；OFF 表示关闭。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">set</span> <span class="token keyword">global</span> slow_query_log<span class="token operator">=</span><span class="token string">&#39;ON&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看慢查询时间阈值</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">&#39;%long_query_time%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置慢查询阈值</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">set</span> <span class="token keyword">global</span> long_query_time <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="隔离级别" tabindex="-1"><a class="header-anchor" href="#隔离级别" aria-hidden="true">#</a> 隔离级别</h3><p>查看隔离级别：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">&#39;transaction_isolation&#39;</span><span class="token punctuation">;</span>

<span class="token operator">+</span><span class="token comment">-----------------------+----------------+</span>

<span class="token operator">|</span> Variable_name <span class="token operator">|</span> <span class="token keyword">Value</span> <span class="token operator">|</span>

<span class="token operator">+</span><span class="token comment">-----------------------+----------------+</span>

<span class="token operator">|</span> transaction_isolation <span class="token operator">|</span> <span class="token keyword">READ</span><span class="token operator">-</span><span class="token keyword">COMMITTED</span> <span class="token operator">|</span>

<span class="token operator">+</span><span class="token comment">-----------------------+----------------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="服务器配置" tabindex="-1"><a class="header-anchor" href="#服务器配置" aria-hidden="true">#</a> 服务器配置</h2><blockquote><p><strong><em>大部分情况下，默认的基本配置已经足够应付大多数场景，不要轻易修改 Mysql 服务器配置，除非你明确知道修改项是有益的。</em></strong></p><p>尽量不要使用 Mysql 的缓存功能，因为其要求每次请求参数完全相同，才能命中缓存。这种方式实际上并不高效，还会增加额外开销，实际业务场景中一般使用 Redis 等 key-value 存储来解决缓存问题，性能远高于 Mysql 的查询缓存。</p></blockquote><h3 id="配置文件路径" tabindex="-1"><a class="header-anchor" href="#配置文件路径" aria-hidden="true">#</a> 配置文件路径</h3><p>配置 Mysql 首先要确定配置文件在哪儿。</p><p>不同 Linux 操作系统上，Mysql 配置文件路径可能不同。通常的路径为 /etc/my.cnf 或 /etc/mysql/my.cnf 。</p><p>如果不知道配置文件路径，可以尝试以下操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># which mysqld</span>
/usr/sbin/mysqld
<span class="token comment"># /usr/sbin/mysqld --verbose --help | grep -A 1 &#39;Default options&#39;</span>
Default options are <span class="token builtin class-name">read</span> from the following files <span class="token keyword">in</span> the given order:
/etc/my.cnf /etc/mysql/my.cnf /usr/etc/my.cnf ~/.my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置项语法" tabindex="-1"><a class="header-anchor" href="#配置项语法" aria-hidden="true">#</a> 配置项语法</h3><p><strong>Mysql 配置项设置都使用小写，单词之间用下划线或横线隔开（二者是等价的）。</strong></p><p>建议使用固定的风格，这样检索配置项时较为方便。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 这两种格式等价</span>
/usr/sbin/mysqld --auto-increment-offset<span class="token operator">=</span><span class="token number">5</span>
/usr/sbin/mysqld <span class="token parameter variable">--auto_increment_offset</span><span class="token operator">=</span><span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本配置模板" tabindex="-1"><a class="header-anchor" href="#基本配置模板" aria-hidden="true">#</a> 基本配置模板</h3><p>一个基本的 Mysql 配置模板大概如下：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld</span><span class="token punctuation">]</span></span>
<span class="token comment"># GENERAL</span>
<span class="token comment"># -------------------------------------------------------------------------------</span>
<span class="token key attr-name">datadir</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/lib/mysql</span>
<span class="token key attr-name">socket</span>  <span class="token punctuation">=</span> <span class="token value attr-value">/var/lib/mysql/mysql.sock</span>
<span class="token key attr-name">pid_file</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/lib/mysql/mysql.pid</span>
<span class="token key attr-name">user</span> <span class="token punctuation">=</span> <span class="token value attr-value">mysql</span>
<span class="token key attr-name">port</span> <span class="token punctuation">=</span> <span class="token value attr-value">3306</span>
<span class="token key attr-name">default_storage_engine</span> <span class="token punctuation">=</span> <span class="token value attr-value">InnoDB</span>
<span class="token key attr-name">default_time_zone</span> <span class="token punctuation">=</span> <span class="token value attr-value">&#39;<span class="token inner-value">+8：00</span>&#39;</span>
<span class="token key attr-name">character_set_server</span> <span class="token punctuation">=</span> <span class="token value attr-value">utf8mb4</span>
<span class="token key attr-name">collation_server</span> <span class="token punctuation">=</span> <span class="token value attr-value">utf8mb4_0900_ai_ci</span>

<span class="token comment"># LOG</span>
<span class="token comment"># -------------------------------------------------------------------------------</span>
<span class="token key attr-name">log_error</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/log/mysql/mysql-error.log</span>
<span class="token key attr-name">slow_query_log</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token key attr-name">slow_query_log_file</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/log/mysql/mysql-slow.log</span>

<span class="token comment"># InnoDB</span>
<span class="token comment"># -------------------------------------------------------------------------------</span>
<span class="token key attr-name">innodb_buffer_pool_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">&lt;value&gt;</span>
<span class="token key attr-name">innodb_log_file_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">&lt;value&gt;</span>
<span class="token key attr-name">innodb_file_per_table</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token key attr-name">innodb_flush_method</span> <span class="token punctuation">=</span> <span class="token value attr-value">O_DIRECT</span>

<span class="token comment"># MyIsam</span>
<span class="token comment"># -------------------------------------------------------------------------------</span>
<span class="token key attr-name">key_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">&lt;value&gt;</span>

<span class="token comment"># OTHER</span>
<span class="token comment"># -------------------------------------------------------------------------------</span>
<span class="token key attr-name">tmp_table_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">32M</span>
<span class="token key attr-name">max_heap_table_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">32M</span>
<span class="token key attr-name">max_connections</span> <span class="token punctuation">=</span> <span class="token value attr-value">&lt;value&gt;</span>
<span class="token key attr-name">open_files_limit</span> <span class="token punctuation">=</span> <span class="token value attr-value">65535</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">client</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">socket</span>  <span class="token punctuation">=</span> <span class="token value attr-value">/var/lib/mysql/mysql.sock</span>
<span class="token key attr-name">port</span> <span class="token punctuation">=</span> <span class="token value attr-value">3306</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置项说明" tabindex="-1"><a class="header-anchor" href="#配置项说明" aria-hidden="true">#</a> 配置项说明</h3><p>下面是一个较为详尽的 Mysql 配置文件，各配置项有注释说明：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld</span><span class="token punctuation">]</span></span>
<span class="token comment"># GENERAL</span>
<span class="token comment"># -------------------------------------------------------------------------------</span>
<span class="token key attr-name">datadir</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/lib/mysql</span>
<span class="token comment"># socket 文件</span>
<span class="token key attr-name">socket</span>  <span class="token punctuation">=</span> <span class="token value attr-value">/var/lib/mysql/mysql.sock</span>
<span class="token comment"># PID 文件</span>
<span class="token key attr-name">pid_file</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/lib/mysql/mysql.pid</span>
<span class="token comment"># 启动 mysql 服务进程的用户</span>
<span class="token key attr-name">user</span> <span class="token punctuation">=</span> <span class="token value attr-value">mysql</span>
<span class="token comment"># 服务端口号，默认 3306</span>
<span class="token key attr-name">port</span> <span class="token punctuation">=</span> <span class="token value attr-value">3306</span>
<span class="token key attr-name">default_storage_engine</span> <span class="token punctuation">=</span> <span class="token value attr-value">InnoDB</span>
<span class="token comment"># 默认时区</span>
<span class="token key attr-name">default_time_zone</span> <span class="token punctuation">=</span> <span class="token value attr-value">&#39;<span class="token inner-value">+8:00</span>&#39;</span>
<span class="token key attr-name">character_set_server</span> <span class="token punctuation">=</span> <span class="token value attr-value">utf8mb4</span>
<span class="token key attr-name">collation_server</span> <span class="token punctuation">=</span> <span class="token value attr-value">utf8mb4_0900_ai_ci</span>

<span class="token comment"># Mysql 服务 ID，单点服务时没必要设置</span>
<span class="token key attr-name">server-id</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>

<span class="token comment"># 事务隔离级别，默认为可重复读（REPEATABLE-READ）。（此级别下可能参数很多间隙锁，影响性能，但是修改又影响主从复制及灾难恢复，建议还是修改代码逻辑吧）</span>
<span class="token comment"># 隔离级别可选项目：READ-UNCOMMITTED READ-COMMITTED REPEATABLE-READ SERIALIZABLE</span>
<span class="token key attr-name">transaction_isolation</span> <span class="token punctuation">=</span> <span class="token value attr-value">REPEATABLE-READ</span>

<span class="token comment"># 目录配置</span>
<span class="token comment"># -------------------------------------------------------------------------------</span>

<span class="token comment"># mysql 安装根目录</span>
<span class="token key attr-name">basedir</span> <span class="token punctuation">=</span> <span class="token value attr-value">/usr/local/mysql-5.7.21</span>

<span class="token comment"># mysql 数据文件所在目录</span>
<span class="token key attr-name">datadir</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/lib/mysql</span>

<span class="token comment"># 临时目录 比如 load data infile 会用到，一般都是使用/tmp</span>
<span class="token key attr-name">tmpdir</span> <span class="token punctuation">=</span> <span class="token value attr-value">/tmp</span>

<span class="token comment"># 数据库引擎配置</span>
<span class="token comment"># -------------------------------------------------------------------------------</span>

<span class="token comment"># mysql 5.1 之后，默认引擎是 InnoDB</span>
<span class="token key attr-name">default_storage_engine</span> <span class="token punctuation">=</span> <span class="token value attr-value">InnoDB</span>

<span class="token comment"># 内存临时表默认引擎，默认 InnoDB</span>
<span class="token key attr-name">default_tmp_storage_engine</span> <span class="token punctuation">=</span> <span class="token value attr-value">InnoDB</span>

<span class="token comment"># mysql 5.7 新增特性，磁盘临时表默认引擎，默认 InnoDB</span>
<span class="token key attr-name">internal_tmp_disk_storage_engine</span> <span class="token punctuation">=</span> <span class="token value attr-value">InnoDB</span>

<span class="token comment"># 字符集配置</span>
<span class="token comment"># -------------------------------------------------------------------------------</span>

<span class="token comment"># 数据库默认字符集，主流字符集支持一些特殊表情符号（特殊表情符占用 4 个字节）</span>
<span class="token key attr-name">character_set_server</span> <span class="token punctuation">=</span> <span class="token value attr-value">utf8mb4</span>

<span class="token comment"># 数据库字符集对应一些排序等规则，注意要和 character_set_server 对应</span>
<span class="token key attr-name">collation-server</span> <span class="token punctuation">=</span> <span class="token value attr-value">utf8mb4_0900_ai_ci</span>

<span class="token comment"># 设置 client 连接 mysql 时的字符集，防止乱码</span>
<span class="token comment"># init_connect=&#39;SET NAMES utf8&#39;</span>

<span class="token comment"># 是否对 sql 语句大小写敏感，默认值为 0，1 表示不敏感</span>
<span class="token key attr-name">lower_case_table_names</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>

<span class="token comment"># 数据库连接配置</span>
<span class="token comment"># -------------------------------------------------------------------------------</span>

<span class="token comment"># 最大连接数，可设最大值 16384，一般考虑根据同时在线人数设置一个比较综合的数字，鉴于该数值增大并不太消耗系统资源，建议直接设 10000</span>
<span class="token comment"># 如果在访问时经常出现 Too Many Connections 的错误提示，则需要增大该参数值</span>
<span class="token key attr-name">max_connections</span> <span class="token punctuation">=</span> <span class="token value attr-value">10000</span>

<span class="token comment"># 默认值 100，最大错误连接数，如果有超出该参数值个数的中断错误连接，则该主机将被禁止连接。如需对该主机进行解禁，执行：FLUSH HOST</span>
<span class="token comment"># 考虑高并发场景下的容错，建议加大。</span>
<span class="token key attr-name">max_connect_errors</span> <span class="token punctuation">=</span> <span class="token value attr-value">10000</span>

<span class="token comment"># MySQL 打开的文件描述符限制，默认最小 1024;</span>
<span class="token comment"># 当 open_files_limit 没有被配置的时候，比较 max_connections\\*5 和 ulimit -n 的值，哪个大用哪个，</span>
<span class="token comment"># 当 open_file_limit 被配置的时候，比较 open_files_limit 和 max_connections\\*5 的值，哪个大用哪个。</span>
<span class="token comment"># 注意：仍然可能出现报错信息 Can&#39;t create a new thread；此时观察系统 cat /proc/mysql 进程号/limits，观察进程 ulimit 限制情况</span>
<span class="token comment"># 过小的话，考虑修改系统配置表，/etc/security/limits.conf 和 /etc/security/limits.d/90-nproc.conf</span>
<span class="token key attr-name">open_files_limit</span> <span class="token punctuation">=</span> <span class="token value attr-value">65535</span>

<span class="token comment"># 超时配置</span>
<span class="token comment"># -------------------------------------------------------------------------------</span>

<span class="token comment"># MySQL 默认的 wait_timeout 值为 8 个小时，interactive_timeout 参数需要同时配置才能生效</span>
<span class="token comment"># MySQL 连接闲置超过一定时间后(单位：秒，此处为 1800 秒)将会被强行关闭</span>
<span class="token key attr-name">interactive_timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">1800</span>
<span class="token key attr-name">wait_timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">1800</span>

<span class="token comment"># 在 MySQL 暂时停止响应新请求之前的短时间内多少个请求可以被存在堆栈中</span>
<span class="token comment"># 官方建议 back_log = 50 + (max_connections / 5)，封顶数为 900</span>
<span class="token key attr-name">back_log</span> <span class="token punctuation">=</span> <span class="token value attr-value">900</span>

<span class="token comment"># 数据库数据交换配置</span>
<span class="token comment"># -------------------------------------------------------------------------------</span>
<span class="token comment"># 该参数限制服务器端，接受的数据包大小，如果有 BLOB 子段，建议增大此值，避免写入或者更新出错。有 BLOB 子段，建议改为 1024M</span>
<span class="token key attr-name">max_allowed_packet</span> <span class="token punctuation">=</span> <span class="token value attr-value">128M</span>

<span class="token comment"># 内存、cache 与 buffer 设置</span>

<span class="token comment"># 内存临时表的最大值，默认 16M，此处设置成 64M</span>
<span class="token key attr-name">tmp_table_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">64M</span>

<span class="token comment"># 用户创建的内存表的大小，默认 16M，往往和 tmp_table_size 一起设置，限制用户临时表大小。</span>
<span class="token comment"># 超限的话，MySQL 就会自动地把它转化为基于磁盘的 MyISAM 表，存储在指定的 tmpdir 目录下，增大 IO 压力，建议内存大，增大该数值。</span>
<span class="token key attr-name">max_heap_table_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">64M</span>

<span class="token comment"># 表示这个 mysql 版本是否支持查询缓存。ps：SHOW STATUS LIKE &#39;qcache%&#39;，与缓存相关的状态变量。</span>
<span class="token comment"># have_query_cache</span>

<span class="token comment"># 这个系统变量控制着查询缓存功能的开启和关闭，0 表示关闭，1 表示打开，2 表示只要 select 中明确指定 SQL_CACHE 才缓存。</span>
<span class="token comment"># 看业务场景决定是否使用缓存，不使用，下面就不用配置了。</span>
<span class="token comment"># Mysql8 不支持</span>
<span class="token key attr-name">query_cache_type</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>

<span class="token comment"># 默认值 1M，优点是查询缓存可以极大的提高服务器速度，如果你有大量的相同的查询并且很少修改表。</span>
<span class="token comment"># 缺点：在你表经常变化的情况下或者如果你的查询原文每次都不同，查询缓存也许引起性能下降而不是性能提升。</span>
<span class="token comment"># Mysql8 不支持</span>
<span class="token key attr-name">query_cache_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">64M</span>

<span class="token comment"># 只有小于此设定值的结果才会被缓冲，保护查询缓冲，防止一个极大的结果集将其他所有的查询结果都覆盖。</span>
<span class="token key attr-name">query_cache_limit</span> <span class="token punctuation">=</span> <span class="token value attr-value">2M</span>

<span class="token comment"># 每个被缓存的结果集要占用的最小内存，默认值 4kb，一般不怎么调整。</span>
<span class="token comment"># 如果 Qcache_free_blocks 值过大，可能是 query_cache_min_res_unit 值过大，应该调小些</span>
<span class="token comment"># query_cache_min_res_unit 的估计值：(query_cache_size - Qcache_free_memory) / Qcache_queries_in_cache</span>
<span class="token key attr-name">query_cache_min_res_unit</span> <span class="token punctuation">=</span> <span class="token value attr-value">4kb</span>

<span class="token comment"># 在一个事务中 binlog 为了记录 SQL 状态所持有的 cache 大小</span>
<span class="token comment"># 如果你经常使用大的、多声明的事务，你可以增加此值来获取更大的性能。</span>
<span class="token comment"># 所有从事务来的状态都将被缓冲在 binlog 缓冲中然后在提交后一次性写入到 binlog 中</span>
<span class="token comment"># 如果事务比此值大，会使用磁盘上的临时文件来替代。</span>
<span class="token comment"># 此缓冲在每个连接的事务第一次更新状态时被创建</span>
<span class="token key attr-name">binlog_cache_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">1M</span>

<span class="token comment"># 日志配置</span>
<span class="token comment"># -------------------------------------------------------------------------------</span>

<span class="token comment"># 日志文件相关设置，一般只开启三种日志，错误日志，慢查询日志，二进制日志。普通查询日志不开启。</span>
<span class="token comment"># 普通查询日志，默认值 off，不开启</span>
<span class="token key attr-name">general_log</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>

<span class="token comment"># 普通查询日志存放地址</span>
<span class="token key attr-name">general_log_file</span> <span class="token punctuation">=</span> <span class="token value attr-value">/usr/local/mysql-5.7.21/log/mysql-general.log</span>

<span class="token comment"># 全局动态变量，默认 3，范围：1 ～ 3</span>
<span class="token comment"># 表示错误日志记录的信息，1：只记录 error 信息；2：记录 error 和 warnings 信息；3：记录 error、warnings 和普通的 notes 信息。</span>
<span class="token key attr-name">log_error_verbosity</span> <span class="token punctuation">=</span> <span class="token value attr-value">2</span>

<span class="token comment"># 错误日志文件地址</span>
<span class="token key attr-name">log_error</span> <span class="token punctuation">=</span> <span class="token value attr-value">/usr/local/mysql-5.7.21/log/mysql-error.log</span>

<span class="token comment"># 开启慢查询</span>
<span class="token key attr-name">slow_query_log</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>

<span class="token comment"># 开启慢查询时间，此处为 1 秒，达到此值才记录数据</span>
<span class="token key attr-name">long_query_time</span> <span class="token punctuation">=</span> <span class="token value attr-value">3</span>

<span class="token comment"># 检索行数达到此数值，才记录慢查询日志中</span>
<span class="token key attr-name">min_examined_row_limit</span> <span class="token punctuation">=</span> <span class="token value attr-value">100</span>

<span class="token comment"># mysql 5.6.5 新增，用来表示每分钟允许记录到 slow log 的且未使用索引的 SQL 语句次数，默认值为 0，不限制。</span>
<span class="token key attr-name">log_throttle_queries_not_using_indexes</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>

<span class="token comment"># 慢查询日志文件地址</span>
<span class="token key attr-name">slow_query_log_file</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/log/mysql/mysql-slow.log</span>

<span class="token comment"># 开启记录没有使用索引查询语句</span>
<span class="token key attr-name">log-queries-not-using-indexes</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>

<span class="token comment"># 开启二进制日志</span>
<span class="token key attr-name">log_bin</span> <span class="token punctuation">=</span> <span class="token value attr-value">/usr/local/mysql-5.7.21/log/mysql-bin.log</span>

<span class="token comment"># mysql 清除过期日志的时间，默认值 0，不自动清理，而是使用滚动循环的方式。</span>
<span class="token key attr-name">expire_logs_days</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>

<span class="token comment"># 如果二进制日志写入的内容超出给定值，日志就会发生滚动。你不能将该变量设置为大于 1GB 或小于 4096 字节。 默认值是 1GB。</span>
<span class="token key attr-name">max_binlog_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">1000M</span>

<span class="token comment"># binlog 的格式也有三种：STATEMENT，ROW，MIXED。mysql 5.7.7 后，默认值从 MIXED 改为 ROW</span>
<span class="token comment"># 关于 binlog 日志格式问题，请查阅网络资料</span>
<span class="token key attr-name">binlog_format</span> <span class="token punctuation">=</span> <span class="token value attr-value">row</span>

<span class="token comment"># 表示每 N 次写入 binlog 后，持久化到磁盘，默认值 N=1</span>
<span class="token comment"># 建议设置成 1，这样可以保证 MySQL 异常重启之后 binlog 不丢失。</span>
<span class="token comment"># sync_binlog = 1</span>

<span class="token comment"># InnoDB 引擎配置</span>
<span class="token comment"># -------------------------------------------------------------------------------</span>

<span class="token comment"># 说明：该参数可以提升扩展性和刷脏页性能。</span>
<span class="token comment"># 默认值 1，建议值：4-8；并且必须小于 innodb_buffer_pool_instances</span>
<span class="token key attr-name">innodb_page_cleaners</span> <span class="token punctuation">=</span> <span class="token value attr-value">4</span>

<span class="token comment"># 说明：一般 8k 和 16k 中选择，8k 的话，cpu 消耗小些，selcet 效率高一点，一般不用改</span>
<span class="token comment"># 默认值：16k；建议值：不改，</span>
<span class="token key attr-name">innodb_page_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">16384</span>

<span class="token comment"># 说明：InnoDB 使用一个缓冲池来保存索引和原始数据，不像 MyISAM。这里你设置越大，你在存取表里面数据时所需要的磁盘 I/O 越少。</span>
<span class="token comment"># 在一个独立使用的数据库服务器上，你可以设置这个变量到服务器物理内存大小的 60%-80%</span>
<span class="token comment"># 注意别设置的过大，会导致 system 的 swap 空间被占用，导致操作系统变慢，从而减低 sql 查询的效率</span>
<span class="token comment"># 默认值：128M，建议值：物理内存的 60%-80%</span>
<span class="token key attr-name">innodb_buffer_pool_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">512M</span>

<span class="token comment"># 说明：只有当设置 innodb_buffer_pool_size 值大于 1G 时才有意义，小于 1G，instances 默认为 1，大于 1G，instances 默认为 8</span>
<span class="token comment"># 但是网络上有评价，最佳性能，每个实例至少 1G 大小。</span>
<span class="token comment"># 默认值：1 或 8，建议值：innodb_buffer_pool_size/innodb_buffer_pool_instances &gt;= 1G</span>
<span class="token key attr-name">innodb_buffer_pool_instances</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>

<span class="token comment"># 说明：mysql 5.7 新特性，defines the chunk size for online InnoDB buffer pool resizing operations。</span>
<span class="token comment"># 实际缓冲区大小必须为 innodb_buffer_pool_chunk_size*innodb_buffer_pool_instances*倍数，取略大于 innodb_buffer_pool_size</span>
<span class="token comment"># 默认值 128M，建议值：默认值就好，乱改反而容易出问题，它会影响实际 buffer pool 大小。</span>
<span class="token key attr-name">innodb_buffer_pool_chunk_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">128M</span>

<span class="token comment"># 在启动时把热数据加载到内存。默认值为 on，不修改</span>
<span class="token key attr-name">innodb_buffer_pool_load_at_startup</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>

<span class="token comment"># 在关闭时把热数据 dump 到本地磁盘。默认值为 on，不修改</span>
<span class="token key attr-name">innodb_buffer_pool_dump_at_shutdown</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>

<span class="token comment"># 说明：影响 Innodb 缓冲区的刷新算法，建议从小到大配置，直到 zero free pages；innodb_lru_scan_depth \\* innodb_buffer_pool_instances defines the amount of work performed by the page cleaner thread each second。</span>
<span class="token comment"># 默认值 1024，建议值： 未知</span>
<span class="token key attr-name">innodb_lru_scan_depth</span> <span class="token punctuation">=</span> <span class="token value attr-value">1024</span>

<span class="token comment"># 说明：事务等待获取资源等待的最长时间，单位为秒，看具体业务情况，一般默认值就好</span>
<span class="token comment"># 默认值：50，建议值：看业务。</span>
<span class="token key attr-name">innodb_lock_wait_timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">60</span>

<span class="token comment"># 说明：设置了 Mysql 后台任务（例如页刷新和 merge dadta from buffer pool）每秒 io 操作的上限。</span>
<span class="token comment"># 默认值：200，建议值：方法一，单盘 sata 设 100，sas10，raid10 设 200，ssd 设 2000，fushion-io 设 50000；方法二，通过测试工具获得磁盘 io 性能后，设置 IOPS 数值/2。</span>
<span class="token key attr-name">innodb_io_capacity</span> <span class="token punctuation">=</span> <span class="token value attr-value">2000</span>

<span class="token comment"># 说明：该参数是所有缓冲区线程 io 操作的总上限。</span>
<span class="token comment"># 默认值：innodb_io_capacity 的两倍。建议值：例如用 iometer 测试后的 iops 数值就好</span>
<span class="token key attr-name">innodb_io_capacity_max</span> <span class="token punctuation">=</span> <span class="token value attr-value">4000</span>

<span class="token comment"># 说明：控制着 innodb 数据文件及 redo log 的打开、刷写模式，三种模式：fdatasync(默认)，O_DSYNC，O_DIRECT</span>
<span class="token comment"># fdatasync：数据文件，buffer pool-&gt;os buffer-&gt;磁盘；日志文件，buffer pool-&gt;os buffer-&gt;磁盘；</span>
<span class="token comment"># O_DSYNC： 数据文件，buffer pool-&gt;os buffer-&gt;磁盘；日志文件，buffer pool-&gt;磁盘；</span>
<span class="token comment"># O_DIRECT： 数据文件，buffer pool-&gt;磁盘； 日志文件，buffer pool-&gt;os buffer-&gt;磁盘；</span>
<span class="token comment"># 默认值为空，建议值：使用 SAN 或者 raid，建议用 O_DIRECT，不懂测试的话，默认生产上使用 O_DIRECT</span>
<span class="token key attr-name">innodb_flush_method</span> <span class="token punctuation">=</span> <span class="token value attr-value">O_DIRECT</span>

<span class="token comment"># 说明：mysql5.7 之后默认开启，意思是，每张表一个独立表空间。</span>
<span class="token comment"># 默认值 1，开启</span>
<span class="token key attr-name">innodb_file_per_table</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>

<span class="token comment"># 说明：The path where InnoDB creates undo tablespaces。通常等于 undo log 文件的存放目录。</span>
<span class="token comment"># 默认值 ./;自行设置</span>
<span class="token key attr-name">innodb_undo_directory</span> <span class="token punctuation">=</span> <span class="token value attr-value">/usr/local/mysql-5.7.21/log</span>

<span class="token comment"># 说明：The number of undo tablespaces used by InnoDB 等于 undo log 文件数量。5.7.21 后开始弃用</span>
<span class="token comment"># 默认值为 0，建议默认值就好，不用调整了。</span>
<span class="token key attr-name">innodb_undo_tablespaces</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>

<span class="token comment"># 说明：定义 undo 使用的回滚段数量。5.7.19 后弃用</span>
<span class="token comment"># 默认值 128，建议不动，以后弃用了。</span>
<span class="token key attr-name">innodb_undo_logs</span> <span class="token punctuation">=</span> <span class="token value attr-value">128</span>

<span class="token comment"># 说明：5.7.5 后开始使用，在线收缩 undo log 使用的空间。</span>
<span class="token comment"># 默认值：关闭，建议值：开启</span>
<span class="token key attr-name">innodb_undo_log_truncate</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>

<span class="token comment"># 说明：结合 innodb_undo_log_truncate，实现 undo 空间收缩功能</span>
<span class="token comment"># 默认值：1G，建议值，不改。</span>
<span class="token key attr-name">innodb_max_undo_log_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">1G</span>

<span class="token comment"># 说明：重作日志文件的存放目录</span>
<span class="token key attr-name">innodb_log_group_home_dir</span> <span class="token punctuation">=</span> <span class="token value attr-value">/usr/local/mysql-5.7.21/log</span>

<span class="token comment"># 说明：日志文件的大小</span>
<span class="token comment"># 默认值：48M，建议值：根据你系统的磁盘空间和日志增长情况调整大小</span>
<span class="token key attr-name">innodb_log_file_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">128M</span>

<span class="token comment"># 说明：日志组中的文件数量，mysql 以循环方式写入日志</span>
<span class="token comment"># 默认值 2，建议值：根据你系统的磁盘空间和日志增长情况调整大小</span>
<span class="token key attr-name">innodb_log_files_in_group</span> <span class="token punctuation">=</span> <span class="token value attr-value">3</span>

<span class="token comment"># 此参数确定些日志文件所用的内存大小，以 M 为单位。缓冲区更大能提高性能，但意外的故障将会丢失数据。MySQL 开发人员建议设置为 1－8M 之间</span>
<span class="token key attr-name">innodb_log_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">16M</span>

<span class="token comment"># 说明：可以控制 log 从系统 buffer 刷入磁盘文件的刷新频率，增大可减轻系统负荷</span>
<span class="token comment"># 默认值是 1；建议值不改。系统性能一般够用。</span>
<span class="token key attr-name">innodb_flush_log_at_timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>

<span class="token comment"># 说明：参数可设为 0，1，2；</span>
<span class="token comment"># 参数 0：表示每秒将 log buffer 内容刷新到系统 buffer 中，再调用系统 flush 操作写入磁盘文件。</span>
<span class="token comment"># 参数 1：表示每次事务提交，redo log 都直接持久化到磁盘。</span>
<span class="token comment"># 参数 2：表示每次事务提交，隔 1 秒后再将 redo log 持久化到磁盘。</span>
<span class="token comment"># 建议设置成 1，这样可以保证 MySQL 异常重启之后数据不丢失。</span>
<span class="token key attr-name">innodb_flush_log_at_trx_commit</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>

<span class="token comment"># 说明：限制 Innodb 能打开的表的数据，如果库里的表特别多的情况，请增加这个。</span>
<span class="token comment"># 值默认是 2000，建议值：参考数据库表总数再进行调整，一般够用不用调整。</span>
<span class="token key attr-name">innodb_open_files</span> <span class="token punctuation">=</span> <span class="token value attr-value">8192</span>

<span class="token comment"># innodb 处理 io 读写的后台并发线程数量，根据 cpu 核来确认，取值范围：1-64</span>
<span class="token comment"># 默认值：4，建议值：与逻辑 cpu 数量的一半保持一致。</span>
<span class="token key attr-name">innodb_read_io_threads</span> <span class="token punctuation">=</span> <span class="token value attr-value">4</span>
<span class="token key attr-name">innodb_write_io_threads</span> <span class="token punctuation">=</span> <span class="token value attr-value">4</span>

<span class="token comment"># 默认设置为 0，表示不限制并发数，这里推荐设置为 0，更好去发挥 CPU 多核处理能力，提高并发量</span>
<span class="token key attr-name">innodb_thread_concurrency</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>

<span class="token comment"># 默认值为 4，建议不变。InnoDB 中的清除操作是一类定期回收无用数据的操作。mysql 5.5 之后，支持多线程清除操作。</span>
<span class="token key attr-name">innodb_purge_threads</span> <span class="token punctuation">=</span> <span class="token value attr-value">4</span>

<span class="token comment"># 说明：mysql 缓冲区分为 new blocks 和 old blocks；此参数表示 old blocks 占比；</span>
<span class="token comment"># 默认值：37，建议值，一般不动</span>
<span class="token key attr-name">innodb_old_blocks_pct</span> <span class="token punctuation">=</span> <span class="token value attr-value">37</span>

<span class="token comment"># 说明：新数据被载入缓冲池，进入 old pages 链区，当 1 秒后再次访问，则提升进入 new pages 链区。</span>
<span class="token comment"># 默认值：1000</span>
<span class="token key attr-name">innodb_old_blocks_time</span><span class="token punctuation">=</span><span class="token value attr-value">1000</span>

<span class="token comment"># 说明：开启异步 io，可以提高并发性，默认开启。</span>
<span class="token comment"># 默认值为 1，建议不动</span>
<span class="token key attr-name">innodb_use_native_aio</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>

<span class="token comment"># 说明：默认为空，使用 data 目录，一般不改。</span>
<span class="token key attr-name">innodb_data_home_dir</span><span class="token punctuation">=</span><span class="token value attr-value">/usr/local/mysql-5.7.21/data</span>

<span class="token comment"># 说明：Defines the name，size，and attributes of InnoDB system tablespace data files。</span>
<span class="token comment"># 默认值，不指定，默认为 ibdata1：12M：autoextend</span>
<span class="token key attr-name">innodb_data_file_path</span> <span class="token punctuation">=</span> <span class="token value attr-value">ibdata1：12M：autoextend</span>

<span class="token comment"># 说明：设置了 InnoDB 存储引擎用来存放数据字典信息以及一些内部数据结构的内存空间大小，除非你的数据对象及其多，否则一般默认不改。</span>
<span class="token comment"># innodb_additional_mem_pool_size = 16M</span>
<span class="token comment"># 说明：The crash recovery mode。只有紧急情况需要恢复数据的时候，才改为大于 1-6 之间数值，含义查下官网。</span>
<span class="token comment"># 默认值为 0；</span>
<span class="token comment">#innodb_force_recovery = 0</span>

<span class="token comment"># MyISAM 引擎配置</span>
<span class="token comment"># -------------------------------------------------------------------------------</span>

<span class="token comment"># 指定索引缓冲区的大小，为 MYISAM 数据表开启供线程共享的索引缓存，对 INNODB 引擎无效。相当影响 MyISAM 的性能。</span>
<span class="token comment"># 不要将其设置大于你可用内存的 30%，因为一部分内存同样被 OS 用来缓冲行数据</span>
<span class="token comment"># 甚至在你并不使用 MyISAM 表的情况下，你也需要仍旧设置起 8-64M 内存由于它同样会被内部临时磁盘表使用。</span>
<span class="token comment"># 默认值 8M，建议值：对于内存在 4GB 左右的服务器该参数可设置为 256M 或 384M。注意：该参数值设置的过大反而会是服务器整体效率降低！</span>
<span class="token key attr-name">key_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">64M</span>

<span class="token comment"># 为每个扫描 MyISAM 的线程分配参数设置的内存大小缓冲区。</span>
<span class="token comment"># 默认值 128kb，建议值：16G 内存建议 1M，4G：128kb 或者 256kb 吧</span>
<span class="token comment"># 注意，该缓冲区是每个连接独占的，所以总缓冲区大小为 128kb*连接数；极端情况 128kb*maxconnectiosns，会超级大，所以要考虑日常平均连接数。</span>
<span class="token comment"># 一般不需要太关心该数值，稍微增大就可以了，</span>
<span class="token key attr-name">read_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">262144</span>

<span class="token comment"># 支持任何存储引擎</span>
<span class="token comment"># MySQL 的随机读缓冲区大小，适当增大，可以提高性能。</span>
<span class="token comment"># 默认值 256kb；建议值：得参考连接数，16G 内存，有人推荐 8M</span>
<span class="token comment"># 注意，该缓冲区是每个连接独占的，所以总缓冲区大小为 128kb*连接数；极端情况 128kb*maxconnectiosns，会超级大，所以要考虑日常平均连接数。</span>
<span class="token key attr-name">read_rnd_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">1M</span>

<span class="token comment"># order by 或 group by 时用到</span>
<span class="token comment"># 支持所有引擎，innodb 和 myisam 有自己的 innodb_sort_buffer_size 和 myisam_sort_buffer_size 设置</span>
<span class="token comment"># 默认值 256kb；建议值：得参考连接数，16G 内存，有人推荐 8M。</span>
<span class="token comment"># 注意，该缓冲区是每个连接独占的，所以总缓冲区大小为 1M*连接数；极端情况 1M*maxconnectiosns，会超级大。所以要考虑日常平均连接数。</span>
<span class="token key attr-name">sort_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">1M</span>

<span class="token comment"># 此缓冲被使用来优化全联合(full JOINs 不带索引的联合)</span>
<span class="token comment"># 类似的联合在极大多数情况下有非常糟糕的性能表现，但是将此值设大能够减轻性能影响。</span>
<span class="token comment"># 通过 “Select_full_join” 状态变量查看全联合的数量</span>
<span class="token comment"># 注意，该缓冲区是每个连接独占的，所以总缓冲区大小为 1M*连接数；极端情况 1M*maxconnectiosns，会超级大。所以要考虑日常平均连接数。</span>
<span class="token comment"># 默认值 256kb;建议值：16G 内存，设置 8M。</span>
<span class="token key attr-name">join_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">1M</span>

<span class="token comment"># 缓存 linux 文件描述符信息，加快数据文件打开速度</span>
<span class="token comment"># 它影响 myisam 表的打开关闭，但是不影响 innodb 表的打开关闭。</span>
<span class="token comment"># 默认值 2000，建议值：根据状态变量 Opened_tables 去设定</span>
<span class="token key attr-name">table_open_cache</span> <span class="token punctuation">=</span> <span class="token value attr-value">2000</span>

<span class="token comment"># 缓存表定义的相关信息，加快读取表信息速度</span>
<span class="token comment"># 默认值 1400，最大值 2000，建议值：基本不改。</span>
<span class="token key attr-name">table_definition_cache</span> <span class="token punctuation">=</span> <span class="token value attr-value">1400</span>

<span class="token comment"># 该参数是 myssql 5.6 后引入的，目的是提高并发。</span>
<span class="token comment"># 默认值 1，建议值：cpu 核数，并且&lt;=16</span>
<span class="token key attr-name">table_open_cache_instances</span> <span class="token punctuation">=</span> <span class="token value attr-value">2</span>

<span class="token comment"># 当客户端断开之后，服务器处理此客户的线程将会缓存起来以响应下一个客户而不是销毁。可重用，减小了系统开销。</span>
<span class="token comment"># 默认值为 9，建议值：两种取值方式，方式一，根据物理内存，1G —&gt; 8；2G —&gt; 16； 3G —&gt; 32； &gt;3G —&gt; 64；</span>
<span class="token comment"># 方式二，根据 show status like &#39;threads%&#39;，查看 Threads_connected 值。</span>
<span class="token key attr-name">thread_cache_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">16</span>

<span class="token comment"># 默认值 256k，建议值：16/32G 内存，512kb，其他一般不改变，如果报错：Thread stack overrun，就增大看看，</span>
<span class="token comment"># 注意，每个线程分配内存空间，所以总内存空间。。。你懂得。</span>
<span class="token key attr-name">thread_stack</span> <span class="token punctuation">=</span> <span class="token value attr-value">512k</span>


<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">client</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">socket</span>  <span class="token punctuation">=</span> <span class="token value attr-value">/var/lib/mysql/mysql.sock</span>
<span class="token key attr-name">port</span> <span class="token punctuation">=</span> <span class="token value attr-value">3306</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>GENERAL</p><ul><li><code>datadir</code> - mysql 数据文件所在目录</li><li><code>socket</code> - scoket 文件</li><li><code>pid_file</code> - PID 文件</li><li><code>user</code> - 启动 mysql 服务进程的用户</li><li><code>port</code> - 服务端口号，默认 <code>3306</code></li><li><code>default_storage_engine</code> - mysql 5.1 之后，默认引擎是 InnoDB</li><li><code>default_time_zone</code> - 默认时区。中国大部分地区在东八区，即 <code>+8:00</code></li><li><code>character_set_server</code> - 数据库默认字符集</li><li><code>collation_server</code> - 数据库字符集对应一些排序等规则，注意要和 <code>character_set_server</code> 对应</li></ul></li><li><p>LOG</p><ul><li><code>log_error</code> - 错误日志文件地址</li><li><code>slow_query_log</code> - 错误日志文件地址</li></ul></li><li><p>InnoDB</p><ul><li><code>innodb_buffer_pool_size</code> - InnoDB 使用一个缓冲池来保存索引和原始数据，不像 MyISAM。这里你设置越大，你在存取表里面数据时所需要的磁盘 I/O 越少。 <ul><li>在一个独立使用的数据库服务器上,你可以设置这个变量到服务器物理内存大小的 60%-80%</li><li>注意别设置的过大，会导致 system 的 swap 空间被占用，导致操作系统变慢，从而减低 sql 查询的效率</li><li>默认值：128M，建议值：物理内存的 60%-80%</li></ul></li><li><code>innodb_log_file_size</code> - 日志文件的大小。默认值：48M，建议值：根据你系统的磁盘空间和日志增长情况调整大小</li><li><code>innodb_file_per_table</code> - 说明：mysql5.7 之后默认开启，意思是，每张表一个独立表空间。默认值 1，开启。</li><li><code>innodb_flush_method</code> - 说明：控制着 innodb 数据文件及 redo log 的打开、刷写模式，三种模式：fdatasync(默认)，O_DSYNC，O_DIRECT。默认值为空，建议值：使用 SAN 或者 raid，建议用 O_DIRECT，不懂测试的话，默认生产上使用 O_DIRECT <ul><li><code>fdatasync</code>：数据文件，buffer pool-&gt;os buffer-&gt;磁盘；日志文件，buffer pool-&gt;os buffer-&gt;磁盘；</li><li><code>O_DSYNC</code>： 数据文件，buffer pool-&gt;os buffer-&gt;磁盘；日志文件，buffer pool-&gt;磁盘；</li><li><code>O_DIRECT</code>： 数据文件，buffer pool-&gt;磁盘； 日志文件，buffer pool-&gt;os buffer-&gt;磁盘；</li></ul></li></ul></li><li><p>MyIsam</p><ul><li><code>key_buffer_size</code> - 指定索引缓冲区的大小，为 MYISAM 数据表开启供线程共享的索引缓存，对 INNODB 引擎无效。相当影响 MyISAM 的性能。 <ul><li>不要将其设置大于你可用内存的 30%，因为一部分内存同样被 OS 用来缓冲行数据</li><li>甚至在你并不使用 MyISAM 表的情况下，你也需要仍旧设置起 8-64M 内存由于它同样会被内部临时磁盘表使用。</li><li>默认值 8M，建议值：对于内存在 4GB 左右的服务器该参数可设置为 256M 或 384M。</li><li>注意：该参数值设置的过大反而会是服务器整体效率降低！</li></ul></li></ul></li><li><p>OTHER</p><ul><li><code>tmp_table_size</code> - 内存临时表的最大值，默认 16M，此处设置成 128M</li><li><code>max_heap_table_size</code> - 用户创建的内存表的大小，默认 16M，往往和 <code>tmp_table_size</code> 一起设置，限制用户临时表大小。超限的话，MySQL 就会自动地把它转化为基于磁盘的 MyISAM 表，存储在指定的 tmpdir 目录下，增大 IO 压力，建议内存大，增大该数值。</li><li><code>query_cache_type</code> - 这个系统变量控制着查询缓存功能的开启和关闭，0 表示关闭，1 表示打开，2 表示只要 <code>select</code> 中明确指定 <code>SQL_CACHE</code> 才缓存。</li><li><code>query_cache_size</code> - 默认值 1M，优点是查询缓存可以极大的提高服务器速度，如果你有大量的相同的查询并且很少修改表。缺点：在你表经常变化的情况下或者如果你的查询原文每次都不同，查询缓存也许引起性能下降而不是性能提升。</li><li><code>max_connections</code> - 最大连接数，可设最大值 16384，一般考虑根据同时在线人数设置一个比较综合的数字，鉴于该数值增大并不太消耗系统资源，建议直接设 10000。如果在访问时经常出现 Too Many Connections 的错误提示，则需要增大该参数值</li><li><code>thread_cache</code> - 当客户端断开之后，服务器处理此客户的线程将会缓存起来以响应下一个客户而不是销毁。可重用，减小了系统开销。默认值为 9，建议值：两种取值方式， <ul><li>方式一，根据物理内存，1G —&gt; 8；2G —&gt; 16； 3G —&gt; 32； &gt;3G —&gt; 64；</li><li>方式二，根据 show status like &#39;threads%&#39;，查看 Threads_connected 值。</li></ul></li><li><code>open_files_limit</code> - MySQL 打开的文件描述符限制，默认最小 1024; <ul><li>当 open_files_limit 没有被配置的时候，比较 max_connections*5 和 ulimit -n 的值，哪个大用哪个，</li><li>当 open_file_limit 被配置的时候，比较 open_files_limit 和 max_connections*5 的值，哪个大用哪个</li><li>注意：仍然可能出现报错信息 Can&#39;t create a new thread；此时观察系统 <code>cat /proc/mysql</code> 进程号/limits，观察进程 ulimit 限制情况</li><li>过小的话，考虑修改系统配置表，<code>/etc/security/limits.conf</code> 和 <code>/etc/security/limits.d/90-nproc.conf</code></li></ul></li></ul></li></ul><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="too-many-connections" tabindex="-1"><a class="header-anchor" href="#too-many-connections" aria-hidden="true">#</a> Too many connections</h3><p><strong>现象</strong></p><p>尝试连接 Mysql 时，遇到 <code>Too many connections</code> 错误。</p><p><strong>原因</strong></p><p>数据库连接线程数超过最大值，访问被拒绝。</p><p><strong>解决方案</strong></p><p>如果实际连接线程数过大，可以考虑增加服务器节点来分流；如果实际线程数并不算过大，那么可以配置 <code>max_connections</code> 来增加允许的最大连接数。需要注意的是，连接数不宜过大，一般来说，单库每秒有 2000 个并发连接时，就可以考虑扩容了，健康的状态应该维持在每秒 1000 个并发连接左右。</p><p>（1）查看最大连接数</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">&#39;%max_connections%&#39;</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">------------------------+-------+</span>
<span class="token operator">|</span> Variable_name          <span class="token operator">|</span> <span class="token keyword">Value</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------------------+-------+</span>
<span class="token operator">|</span> max_connections        <span class="token operator">|</span> <span class="token number">151</span>   <span class="token operator">|</span>
<span class="token operator">|</span> mysqlx_max_connections <span class="token operator">|</span> <span class="token number">100</span>   <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------------------+-------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）查看服务器响应的最大连接数</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> <span class="token keyword">global</span> <span class="token keyword">status</span> <span class="token operator">like</span> <span class="token string">&#39;Max_used_connections&#39;</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">----------------------+-------+</span>
<span class="token operator">|</span> Variable_name        <span class="token operator">|</span> <span class="token keyword">Value</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------------------+-------+</span>
<span class="token operator">|</span> Max_used_connections <span class="token operator">|</span> <span class="token number">142</span>   <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------------------+-------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）临时设置最大连接数</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">set</span> <span class="token keyword">GLOBAL</span> max_connections<span class="token operator">=</span><span class="token number">256</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：当服务器重启时，最大连接数会被重置。</p><p>（4）永久设置最大连接数</p><p>修改 <code>/etc/my.cnf</code> 配置文件，在 <code>[mysqld]</code> 添加以下配置：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>max_connections<span class="token operator">=</span><span class="token number">256</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启 mysql 以生效</p><p>（5）修改 Linux 最大文件数限制</p><p>设置了最大连接数，如果还是没有生效，考虑检查一下 Linux 最大文件数</p><p>Mysql 最大连接数会受到最大文件数限制，<code>vim /etc/security/limits.conf</code>，添加 mysql 用户配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql hard nofile 65535
mysql soft nofile 65535
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（6）检查 LimitNOFILE</p><p>如果是使用 rpm 方式安装 mysql，检查 <strong>mysqld.service</strong> 文件中的 <code>LimitNOFILE</code> 是否配置的太小。</p><h3 id="时区-time-zone-偏差" tabindex="-1"><a class="header-anchor" href="#时区-time-zone-偏差" aria-hidden="true">#</a> 时区（time_zone）偏差</h3><p><strong>现象</strong></p><p>数据库中存储的 Timestamp 字段值比真实值少了 13 个小时。</p><p><strong>原因</strong></p><ul><li>当 JDBC 与 MySQL 开始建立连接时，会获取服务器参数。</li><li>当 MySQL 的 <code>time_zone</code> 值为 <code>SYSTEM</code> 时，会取 <code>system_time_zone</code> 值作为协调时区，若得到的是 <code>CST</code> 那么 Java 会误以为这是 <code>CST -0500</code> ，因此会给出错误的时区信息（国内一般是<code>CST +0800</code>，即东八区）。</li></ul><p>查看时区方法：</p><p>通过 <code>show variables like &#39;%time_zone%&#39;;</code> 命令查看 Mysql 时区配置：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">&#39;%time_zone%&#39;</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">------------------+--------+</span>
<span class="token operator">|</span> Variable_name    <span class="token operator">|</span> <span class="token keyword">Value</span>  <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------------+--------+</span>
<span class="token operator">|</span> system_time_zone <span class="token operator">|</span> CST    <span class="token operator">|</span>
<span class="token operator">|</span> time_zone        <span class="token operator">|</span> SYSTEM <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------------+--------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解决方案</strong></p><p>方案一</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">set</span> <span class="token keyword">global</span> time_zone <span class="token operator">=</span> <span class="token string">&#39;+08:00&#39;</span><span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> <span class="token keyword">set</span> time_zone <span class="token operator">=</span> <span class="token string">&#39;+08:00&#39;</span><span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方案二</p><p>修改 <code>my.cnf</code> 文件，在 <code>[mysqld]</code> 节下增加 <code>default-time-zone=&#39;+08:00&#39;</code> ，然后重启。</p><h3 id="数据表损坏如何修复" tabindex="-1"><a class="header-anchor" href="#数据表损坏如何修复" aria-hidden="true">#</a> 数据表损坏如何修复</h3><p>使用 myisamchk 来修复，具体步骤：</p><ol><li>修复前将 mysql 服务停止。</li><li>打开命令行方式，然后进入到 mysql 的 <code>bin</code> 目录。</li><li>执行 myisamchk –recover 数据库所在路 /*.MYI</li></ol><p>使用 repair table 或者 OPTIMIZE table 命令来修复，REPAIR TABLE table_name 修复表 OPTIMIZE TABLE table_name 优化表 REPAIR TABLE 用于修复被破坏的表。 OPTIMIZE TABLE 用于回收闲置的数据库空间，当表上的数据行被删除时，所占据的磁盘空间并没有立即被回收，使用了 OPTIMIZE TABLE 命令后这些空间将被回收，并且对磁盘上的数据行进行重排（注意：是磁盘上，而非数据库）</p><h3 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h3><blockquote><p>问题现象：ERROR 1071: Specified key was too long; max key length is 767 bytes</p></blockquote><p>问题原因：Mysql 默认情况下单个列的索引不能超过 767 位（不同版本可能存在差异） 。</p><p>解决方法：优化索引结构，索引字段不宜过长。</p><h2 id="脚本" tabindex="-1"><a class="header-anchor" href="#脚本" aria-hidden="true">#</a> 脚本</h2><p>这里推荐我写的几个一键运维脚本，非常方便，欢迎使用：</p>`,235),k={href:"https://github.com/dunwu/linux-tutorial/tree/master/codes/linux/soft/mysql-install.sh",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/dunwu/linux-tutorial/tree/master/codes/linux/soft/mysql-backup.sh",target:"_blank",rel:"noopener noreferrer"},y=s("h2",{id:"参考资料",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),n(" 参考资料")],-1),g={href:"https://book.douban.com/subject/23008813/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.cnblogs.com/xiaopotian/p/8196464.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.cnblogs.com/bigbrotherer/p/7241845.html",target:"_blank",rel:"noopener noreferrer"},q={href:"https://blog.csdn.net/managementandjava/article/details/80039650",target:"_blank",rel:"noopener noreferrer"},f={href:"http://www.manongjc.com/article/6996.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.cnblogs.com/xyabk/p/8967990.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://blog.csdn.net/zyhlwzy/article/details/80569422",target:"_blank",rel:"noopener noreferrer"},x={href:"https://juejin.im/post/58eb5d162f301e00624f014a",target:"_blank",rel:"noopener noreferrer"},M={href:"https://juejin.im/entry/5a0aa2026fb9a045132a369f",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.jianshu.com/p/5f39c486561b",target:"_blank",rel:"noopener noreferrer"};function T(I,O){const a=i("ExternalLinkIcon");return o(),p("div",null,[d,s("p",null,[n("下载地址："),s("a",r,[n("https://dev.mysql.com/downloads/mysql/5.7.html#downloads"),e(a)])]),u,s("p",null,[n("官方下载地址："),s("a",m,[n("https://dev.mysql.com/downloads/repo/yum/"),e(a)])]),v,s("ul",null,[s("li",null,[s("a",k,[n("Mysql 安装脚本"),e(a)])]),s("li",null,[s("a",b,[n("Mysql 备份脚本"),e(a)])])]),y,s("ul",null,[s("li",null,[s("a",g,[n("《高性能 MySQL》"),e(a)])]),s("li",null,[s("a",h,[n("https://www.cnblogs.com/xiaopotian/p/8196464.html"),e(a)])]),s("li",null,[s("a",_,[n("https://www.cnblogs.com/bigbrotherer/p/7241845.html"),e(a)])]),s("li",null,[s("a",q,[n("https://blog.csdn.net/managementandjava/article/details/80039650"),e(a)])]),s("li",null,[s("a",f,[n("http://www.manongjc.com/article/6996.html"),e(a)])]),s("li",null,[s("a",w,[n("https://www.cnblogs.com/xyabk/p/8967990.html"),e(a)])]),s("li",null,[s("a",E,[n("MySQL 8.0 主从（Master-Slave）配置"),e(a)])]),s("li",null,[s("a",x,[n("Mysql 主从同步实战"),e(a)])]),s("li",null,[s("a",M,[n("MySQL 备份和恢复机制"),e(a)])]),s("li",null,[s("a",S,[n("Mysql 配置文件/etc/my.cnf 解析"),e(a)])])])])}const D=t(c,[["render",T],["__file","20.Mysql运维.html.vue"]]);export{D as default};
