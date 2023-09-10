import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c as r,a,b as e,d as n,e as t}from"./app-002cceec.js";const p={},c=t('<h1 id="hive-运维" tabindex="-1"><a class="header-anchor" href="#hive-运维" aria-hidden="true">#</a> Hive 运维</h1><h2 id="hive-安装" tabindex="-1"><a class="header-anchor" href="#hive-安装" aria-hidden="true">#</a> Hive 安装</h2><h3 id="下载并解压" tabindex="-1"><a class="header-anchor" href="#下载并解压" aria-hidden="true">#</a> 下载并解压</h3>',3),d=a("code",null,"cdh5.15.2",-1),u={href:"http://archive.cloudera.com/cdh5/cdh/5/",target:"_blank",rel:"noopener noreferrer"},v=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 下载后进行解压
 tar -zxvf hive-1.1.0-cdh5.15.2.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量" aria-hidden="true">#</a> 配置环境变量</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># vim /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加环境变量：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export HIVE_HOME=/usr/app/hive-1.1.0-cdh5.15.2
export PATH=$HIVE_HOME/bin:$PATH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使得配置的环境变量立即生效：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改配置" tabindex="-1"><a class="header-anchor" href="#修改配置" aria-hidden="true">#</a> 修改配置</h3>`,8),h={href:"http://hive-env.sh",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>进入安装目录下的 <code>conf/</code> 目录，拷贝 Hive 的环境配置模板 <code>flume-env.sh.template</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cp hive-env.sh.template hive-env.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改 <code>hive-env.sh</code>，指定 Hadoop 的安装路径：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HADOOP_HOME=/usr/app/hadoop-2.6.0-cdh5.15.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2. hive-site.xml</strong></p><p>新建 hive-site.xml 文件，内容如下，主要是配置存放元数据的 MySQL 的地址、驱动、用户名和密码等信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;?xml-stylesheet type=&quot;text/xsl&quot; href=&quot;configuration.xsl&quot;?&gt;

&lt;configuration&gt;
  &lt;property&gt;
    &lt;name&gt;javax.jdo.option.ConnectionURL&lt;/name&gt;
    &lt;value&gt;jdbc:mysql://hadoop001:3306/hadoop_hive?createDatabaseIfNotExist=true&lt;/value&gt;
  &lt;/property&gt;

  &lt;property&gt;
    &lt;name&gt;javax.jdo.option.ConnectionDriverName&lt;/name&gt;
    &lt;value&gt;com.mysql.jdbc.Driver&lt;/value&gt;
  &lt;/property&gt;

  &lt;property&gt;
    &lt;name&gt;javax.jdo.option.ConnectionUserName&lt;/name&gt;
    &lt;value&gt;root&lt;/value&gt;
  &lt;/property&gt;

  &lt;property&gt;
    &lt;name&gt;javax.jdo.option.ConnectionPassword&lt;/name&gt;
    &lt;value&gt;root&lt;/value&gt;
  &lt;/property&gt;

&lt;/configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拷贝数据库驱动" tabindex="-1"><a class="header-anchor" href="#拷贝数据库驱动" aria-hidden="true">#</a> 拷贝数据库驱动</h3>`,8),b=a("code",null,"lib",-1),k={href:"https://dev.mysql.com/downloads/connector/j/",target:"_blank",rel:"noopener noreferrer"},g=t(`<h3 id="初始化元数据库" tabindex="-1"><a class="header-anchor" href="#初始化元数据库" aria-hidden="true">#</a> 初始化元数据库</h3><ul><li><p>当使用的 hive 是 1.x 版本时，可以不进行初始化操作，Hive 会在第一次启动的时候会自动进行初始化，但不会生成所有的元数据信息表，只会初始化必要的一部分，在之后的使用中用到其余表时会自动创建；</p></li><li><p>当使用的 hive 是 2.x 版本时，必须手动初始化元数据库。初始化命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># schematool 命令在安装目录的 bin 目录下，由于上面已经配置过环境变量，在任意位置执行即可
schematool -dbType mysql -initSchema
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>这里我使用的是 CDH 的 <code>hive-1.1.0-cdh5.15.2.tar.gz</code>，对应 <code>Hive 1.1.0</code> 版本，可以跳过这一步。</p><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3><p>由于已经将 Hive 的 bin 目录配置到环境变量，直接使用以下命令启动，成功进入交互式命令行后执行 <code>show databases</code> 命令，无异常则代表搭建成功。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># hive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://github.com/heibaiying/BigData-Notes/raw/master/pictures/hive-install-2.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在 Mysql 中也能看到 Hive 创建的库和存放元数据信息的表</p><figure><img src="https://github.com/heibaiying/BigData-Notes/raw/master/pictures/hive-mysql-tables.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="hiveserver2-beeline" tabindex="-1"><a class="header-anchor" href="#hiveserver2-beeline" aria-hidden="true">#</a> HiveServer2/beeline</h2><p>Hive 内置了 HiveServer 和 HiveServer2 服务，两者都允许客户端使用多种编程语言进行连接，但是 HiveServer 不能处理多个客户端的并发请求，因此产生了 HiveServer2。</p><p>HiveServer2（HS2）允许远程客户端可以使用各种编程语言向 Hive 提交请求并检索结果，支持多客户端并发访问和身份验证。HS2 是由多个服务组成的单个进程，其包括基于 Thrift 的 Hive 服务（TCP 或 HTTP）和用于 Web UI 的 Jetty Web 服务。</p><p>HiveServer2 拥有自己的 CLI 工具——Beeline。Beeline 是一个基于 SQLLine 的 JDBC 客户端。由于目前 HiveServer2 是 Hive 开发维护的重点，所以官方更加推荐使用 Beeline 而不是 Hive CLI。以下主要讲解 Beeline 的配置方式。</p><h3 id="修改-hadoop-配置" tabindex="-1"><a class="header-anchor" href="#修改-hadoop-配置" aria-hidden="true">#</a> 修改 Hadoop 配置</h3><p>修改 hadoop 集群的 core-site.xml 配置文件，增加如下配置，指定 hadoop 的 root 用户可以代理本机上所有的用户。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hadoop.proxyuser.root.hosts<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hadoop.proxyuser.root.groups<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之所以要配置这一步，是因为 hadoop 2.0 以后引入了安全伪装机制，使得 hadoop 不允许上层系统（如 hive）直接将实际用户传递到 hadoop 层，而应该将实际用户传递给一个超级代理，由该代理在 hadoop 上执行操作，以避免任意客户端随意操作 hadoop。如果不配置这一步，在之后的连接中可能会抛出 <code>AuthorizationException</code> 异常。</p>`,17),f={href:"https://blog.csdn.net/u012948976/article/details/49904675#%E5%AE%98%E6%96%B9%E6%96%87%E6%A1%A3%E8%A7%A3%E8%AF%BB",target:"_blank",rel:"noopener noreferrer"},x={href:"http://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/Superusers.html",target:"_blank",rel:"noopener noreferrer"},y=t(`<h3 id="启动-hiveserver2" tabindex="-1"><a class="header-anchor" href="#启动-hiveserver2" aria-hidden="true">#</a> 启动 hiveserver2</h3><p>由于上面已经配置过环境变量，这里直接启动即可：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># nohup hiveserver2 &amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用-beeline" tabindex="-1"><a class="header-anchor" href="#使用-beeline" aria-hidden="true">#</a> 使用 beeline</h3><p>可以使用以下命令进入 beeline 交互式命令行，出现 <code>Connected</code> 则代表连接成功。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>beeline <span class="token parameter variable">-u</span> jdbc:hive2://hadoop001:10000 <span class="token parameter variable">-n</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="beeline-选项" tabindex="-1"><a class="header-anchor" href="#beeline-选项" aria-hidden="true">#</a> Beeline 选项</h3><p>Beeline 拥有更多可使用参数，可以使用 <code>beeline --help</code> 查看，完整参数如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Usage: <span class="token function">java</span> org.apache.hive.cli.beeline.BeeLine
   <span class="token parameter variable">-u</span> <span class="token operator">&lt;</span>database url<span class="token operator">&gt;</span>               the JDBC URL to connect to
   <span class="token parameter variable">-r</span>                              reconnect to last saved connect url <span class="token punctuation">(</span>in conjunction with <span class="token operator">!</span>save<span class="token punctuation">)</span>
   <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>                   the username to connect as
   <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>password<span class="token operator">&gt;</span>                   the password to connect as
   <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>driver class<span class="token operator">&gt;</span>               the driver class to use
   <span class="token parameter variable">-i</span> <span class="token operator">&lt;</span>init file<span class="token operator">&gt;</span>                  script <span class="token function">file</span> <span class="token keyword">for</span> initialization
   <span class="token parameter variable">-e</span> <span class="token operator">&lt;</span>query<span class="token operator">&gt;</span>                      query that should be executed
   <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>exec file<span class="token operator">&gt;</span>                  script <span class="token function">file</span> that should be executed
   <span class="token parameter variable">-w</span> <span class="token punctuation">(</span>or<span class="token punctuation">)</span> --password-file <span class="token operator">&lt;</span>password file<span class="token operator">&gt;</span>  the password <span class="token function">file</span> to <span class="token builtin class-name">read</span> password from
   <span class="token parameter variable">--hiveconf</span> <span class="token assign-left variable">property</span><span class="token operator">=</span>value       Use value <span class="token keyword">for</span> given property
   <span class="token parameter variable">--hivevar</span> <span class="token assign-left variable">name</span><span class="token operator">=</span>value            hive variable name and value
                                   This is Hive specific settings <span class="token keyword">in</span> <span class="token function">which</span> variables
                                   can be <span class="token builtin class-name">set</span> at session level and referenced <span class="token keyword">in</span> Hive
                                   commands or queries.
   --property-file<span class="token operator">=</span><span class="token operator">&lt;</span>property-file<span class="token operator">&gt;</span> the <span class="token function">file</span> to <span class="token builtin class-name">read</span> connection properties <span class="token punctuation">(</span>url, driver, user, password<span class="token punctuation">)</span> from
   <span class="token parameter variable">--color</span><span class="token operator">=</span><span class="token punctuation">[</span>true/false<span class="token punctuation">]</span>            control whether color is used <span class="token keyword">for</span> display
   <span class="token parameter variable">--showHeader</span><span class="token operator">=</span><span class="token punctuation">[</span>true/false<span class="token punctuation">]</span>       show <span class="token function">column</span> names <span class="token keyword">in</span> query results
   <span class="token parameter variable">--headerInterval</span><span class="token operator">=</span>ROWS<span class="token punctuation">;</span>          the interval between <span class="token function">which</span> heades are displayed
   <span class="token parameter variable">--fastConnect</span><span class="token operator">=</span><span class="token punctuation">[</span>true/false<span class="token punctuation">]</span>      skip building table/column list <span class="token keyword">for</span> tab-completion
   <span class="token parameter variable">--autoCommit</span><span class="token operator">=</span><span class="token punctuation">[</span>true/false<span class="token punctuation">]</span>       enable/disable automatic transaction commit
   <span class="token parameter variable">--verbose</span><span class="token operator">=</span><span class="token punctuation">[</span>true/false<span class="token punctuation">]</span>          show verbose error messages and debug info
   <span class="token parameter variable">--showWarnings</span><span class="token operator">=</span><span class="token punctuation">[</span>true/false<span class="token punctuation">]</span>     display connection warnings
   <span class="token parameter variable">--showNestedErrs</span><span class="token operator">=</span><span class="token punctuation">[</span>true/false<span class="token punctuation">]</span>   display nested errors
   <span class="token parameter variable">--numberFormat</span><span class="token operator">=</span><span class="token punctuation">[</span>pattern<span class="token punctuation">]</span>        <span class="token function">format</span> numbers using DecimalFormat pattern
   <span class="token parameter variable">--force</span><span class="token operator">=</span><span class="token punctuation">[</span>true/false<span class="token punctuation">]</span>            <span class="token builtin class-name">continue</span> running script even after errors
   <span class="token parameter variable">--maxWidth</span><span class="token operator">=</span>MAXWIDTH             the maximum width of the terminal
   <span class="token parameter variable">--maxColumnWidth</span><span class="token operator">=</span>MAXCOLWIDTH    the maximum width to use when displaying columns
   <span class="token parameter variable">--silent</span><span class="token operator">=</span><span class="token punctuation">[</span>true/false<span class="token punctuation">]</span>           be <span class="token function">more</span> silent
   <span class="token parameter variable">--autosave</span><span class="token operator">=</span><span class="token punctuation">[</span>true/false<span class="token punctuation">]</span>         automatically save preferences
   <span class="token parameter variable">--outputformat</span><span class="token operator">=</span><span class="token punctuation">[</span>table/vertical/csv2/tsv2/dsv/csv/tsv<span class="token punctuation">]</span>  <span class="token function">format</span> mode <span class="token keyword">for</span> result display
   <span class="token parameter variable">--incrementalBufferRows</span><span class="token operator">=</span>NUMROWS the number of rows to buffer when printing rows on stdout,
                                   defaults to <span class="token number">1000</span><span class="token punctuation">;</span> only applicable <span class="token keyword">if</span> <span class="token parameter variable">--incremental</span><span class="token operator">=</span>true
                                   and <span class="token parameter variable">--outputformat</span><span class="token operator">=</span>table
   <span class="token parameter variable">--truncateTable</span><span class="token operator">=</span><span class="token punctuation">[</span>true/false<span class="token punctuation">]</span>    truncate table <span class="token function">column</span> when it exceeds length
   <span class="token parameter variable">--delimiterForDSV</span><span class="token operator">=</span>DELIMITER     specify the delimiter <span class="token keyword">for</span> delimiter-separated values output <span class="token function">format</span> <span class="token punctuation">(</span>default: <span class="token operator">|</span><span class="token punctuation">)</span>
   <span class="token parameter variable">--isolation</span><span class="token operator">=</span>LEVEL               <span class="token builtin class-name">set</span> the transaction isolation level
   <span class="token parameter variable">--nullemptystring</span><span class="token operator">=</span><span class="token punctuation">[</span>true/false<span class="token punctuation">]</span>  <span class="token builtin class-name">set</span> to <span class="token boolean">true</span> to get historic behavior of printing null as empty string
   <span class="token parameter variable">--maxHistoryRows</span><span class="token operator">=</span>MAXHISTORYROWS The maximum number of rows to store beeline history.
   <span class="token parameter variable">--convertBinaryArrayToString</span><span class="token operator">=</span><span class="token punctuation">[</span>true/false<span class="token punctuation">]</span>    display binary <span class="token function">column</span> data as string or as byte array
   <span class="token parameter variable">--help</span>                          display this message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用参数" tabindex="-1"><a class="header-anchor" href="#常用参数" aria-hidden="true">#</a> 常用参数</h3>`,10),_={href:"https://cwiki.apache.org/confluence/display/Hive/HiveServer2+Clients#HiveServer2Clients-Beeline%E2%80%93NewCommandLineShell",target:"_blank",rel:"noopener noreferrer"},H=t(`<table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td><code>-u</code></td><td>数据库地址</td></tr><tr><td><code>-n</code></td><td>用户名</td></tr><tr><td><code>-p</code></td><td>密码</td></tr><tr><td>-d</td><td>驱动 (可选)</td></tr><tr><td><code>-e</code>*</td><td>执行 SQL 命令</td></tr><tr><td><code>-f</code>*</td><td>执行 SQL 脚本</td></tr><tr><td><code>-i (or)--init</code></td><td>在进入交互模式之前运行初始化脚本</td></tr><tr><td><code>--property-file</code></td><td>指定配置文件</td></tr><tr><td><code>--hiveconf property=value</code></td><td>指定配置属性</td></tr><tr><td><code>--hivevar name=value</code></td><td>用户自定义属性，在会话级别有效</td></tr></tbody></table><p>示例： 使用用户名和密码连接 Hive</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>beeline <span class="token parameter variable">-u</span> jdbc:hive2://localhost:10000  <span class="token parameter variable">-n</span> username <span class="token parameter variable">-p</span> password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="hive-命令" tabindex="-1"><a class="header-anchor" href="#hive-命令" aria-hidden="true">#</a> Hive 命令</h2><h3 id="help" tabindex="-1"><a class="header-anchor" href="#help" aria-hidden="true">#</a> Help</h3><p>使用 <code>hive -H</code> 或者 <code>hive --help</code> 命令可以查看所有命令的帮助，显示如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>usage: hive
 -d,--define <span class="token operator">&lt;</span>key<span class="token operator">=</span>value<span class="token operator">&gt;</span>          Variable subsitution to apply to hive
                                  commands. e.g. <span class="token parameter variable">-d</span> <span class="token assign-left variable">A</span><span class="token operator">=</span>B or <span class="token parameter variable">--define</span> <span class="token assign-left variable">A</span><span class="token operator">=</span>B  --定义用户自定义变量
    <span class="token parameter variable">--database</span> <span class="token operator">&lt;</span>databasename<span class="token operator">&gt;</span>     Specify the database to use  -- 指定使用的数据库
 <span class="token parameter variable">-e</span> <span class="token operator">&lt;</span>quoted-query-string<span class="token operator">&gt;</span>         SQL from <span class="token builtin class-name">command</span> line   -- 执行指定的 SQL
 <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span>                    SQL from files   --执行 SQL 脚本
 -H,--help                        Print <span class="token builtin class-name">help</span> information  -- 打印帮助信息
    <span class="token parameter variable">--hiveconf</span> <span class="token operator">&lt;</span>property<span class="token operator">=</span>value<span class="token operator">&gt;</span>   Use value <span class="token keyword">for</span> given property    --自定义配置
    <span class="token parameter variable">--hivevar</span> <span class="token operator">&lt;</span>key<span class="token operator">=</span>value<span class="token operator">&gt;</span>         Variable subsitution to apply to hive  --自定义变量
                                  commands. e.g. <span class="token parameter variable">--hivevar</span> <span class="token assign-left variable">A</span><span class="token operator">=</span>B
 <span class="token parameter variable">-i</span> <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span>                    Initialization SQL <span class="token function">file</span>  --在进入交互模式之前运行初始化脚本
 -S,--silent                      Silent mode <span class="token keyword">in</span> interactive shell    --静默模式
 -v,--verbose                     Verbose mode <span class="token punctuation">(</span>echo executed SQL to the  console<span class="token punctuation">)</span>  --详细模式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交互式命令行" tabindex="-1"><a class="header-anchor" href="#交互式命令行" aria-hidden="true">#</a> 交互式命令行</h3><p>直接使用 <code>Hive</code> 命令，不加任何参数，即可进入交互式命令行。</p><h3 id="执行-sql-命令" tabindex="-1"><a class="header-anchor" href="#执行-sql-命令" aria-hidden="true">#</a> 执行 SQL 命令</h3><p>在不进入交互式命令行的情况下，可以使用 <code>hive -e</code>执行 SQL 命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hive <span class="token parameter variable">-e</span> <span class="token string">&#39;select * from emp&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),w={href:"https://github.com/heibaiying/BigData-Notes/blob/master/pictures/hive-e.png",target:"_blank",rel:"noopener noreferrer"},S=a("img",{src:"https://github.com/heibaiying/BigData-Notes/raw/master/pictures/hive-e.png",alt:"img",tabindex:"0",loading:"lazy"},null,-1),q=a("figcaption",null,"img",-1),B=t(`<h3 id="执行-sql-脚本" tabindex="-1"><a class="header-anchor" href="#执行-sql-脚本" aria-hidden="true">#</a> 执行 SQL 脚本</h3><p>用于执行的 sql 脚本可以在本地文件系统，也可以在 HDFS 上。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 本地文件系统</span>
hive <span class="token parameter variable">-f</span> /usr/file/simple.sql<span class="token punctuation">;</span>

<span class="token comment"># HDFS文件系统</span>
hive <span class="token parameter variable">-f</span> hdfs://hadoop001:8020/tmp/simple.sql<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code>simple.sql</code> 内容如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置-hive-变量" tabindex="-1"><a class="header-anchor" href="#配置-hive-变量" aria-hidden="true">#</a> 配置 Hive 变量</h3><p>可以使用 <code>--hiveconf</code> 设置 Hive 运行时的变量。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hive <span class="token parameter variable">-e</span> <span class="token string">&#39;select * from emp&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--hiveconf</span> <span class="token assign-left variable">hive.exec.scratchdir</span><span class="token operator">=</span>/tmp/hive_scratch  <span class="token punctuation">\\</span>
<span class="token parameter variable">--hiveconf</span> <span class="token assign-left variable">mapred.reduce.tasks</span><span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>hive.exec.scratchdir：指定 HDFS 上目录位置，用于存储不同 map/reduce 阶段的执行计划和这些阶段的中间输出结果。</p></blockquote><h3 id="配置文件启动" tabindex="-1"><a class="header-anchor" href="#配置文件启动" aria-hidden="true">#</a> 配置文件启动</h3><p>使用 <code>-i</code> 可以在进入交互模式之前运行初始化脚本，相当于指定配置文件启动。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hive <span class="token parameter variable">-i</span> /usr/file/hive-init.conf<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中 <code>hive-init.conf</code> 的内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> hive.exec.mode.local.auto <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>hive.exec.mode.local.auto 默认值为 false，这里设置为 true ，代表开启本地模式。</p></blockquote><h3 id="用户自定义变量" tabindex="-1"><a class="header-anchor" href="#用户自定义变量" aria-hidden="true">#</a> 用户自定义变量</h3><p><code>--define</code>和 <code>--hivevar</code>在功能上是等价的，都是用来实现自定义变量，这里给出一个示例:</p><p>定义变量：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hive  <span class="token parameter variable">--define</span>  <span class="token assign-left variable">n</span><span class="token operator">=</span>ename <span class="token parameter variable">--hiveconf</span>  <span class="token parameter variable">--hivevar</span> <span class="token assign-left variable">j</span><span class="token operator">=</span>job<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在查询中引用自定义变量：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 以下两条语句等价</span>
hive <span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token variable">\${n}</span> from emp<span class="token punctuation">;</span>
hive <span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token variable">\${hivevar<span class="token operator">:</span>n}</span> from emp<span class="token punctuation">;</span>

<span class="token comment"># 以下两条语句等价</span>
hive <span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token variable">\${j}</span> from emp<span class="token punctuation">;</span>
hive <span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token variable">\${hivevar<span class="token operator">:</span>j}</span> from emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下：</p>`,22),L={href:"https://github.com/heibaiying/BigData-Notes/blob/master/pictures/hive-n-j.png",target:"_blank",rel:"noopener noreferrer"},j=a("img",{src:"https://github.com/heibaiying/BigData-Notes/raw/master/pictures/hive-n-j.png",alt:"img",tabindex:"0",loading:"lazy"},null,-1),C=a("figcaption",null,"img",-1),D=t(`<h2 id="hive-配置" tabindex="-1"><a class="header-anchor" href="#hive-配置" aria-hidden="true">#</a> Hive 配置</h2><p>可以通过三种方式对 Hive 的相关属性进行配置，分别介绍如下：</p><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3><p>方式一为使用配置文件，使用配置文件指定的配置是永久有效的。Hive 有以下三个可选的配置文件：</p><ul><li><code>hive-site.xml</code> - Hive 的主要配置文件；</li><li><code>hivemetastore-site.xml</code> - 关于元数据的配置；</li><li><code>hiveserver2-site.xml</code> - 关于 HiveServer2 的配置。</li></ul><p>示例如下,在 hive-site.xml 配置 <code>hive.exec.scratchdir</code>：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hive.exec.scratchdir<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>/tmp/mydir<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">&gt;</span></span>Scratch space for Hive jobs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hiveconf" tabindex="-1"><a class="header-anchor" href="#hiveconf" aria-hidden="true">#</a> hiveconf</h3><p>方式二为在启动命令行 (Hive CLI / Beeline) 的时候使用 <code>--hiveconf</code> 指定配置，这种方式指定的配置作用于整个 Session。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hive <span class="token parameter variable">--hiveconf</span> <span class="token assign-left variable">hive.exec.scratchdir</span><span class="token operator">=</span>/tmp/mydir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h3><p>方式三为在交互式环境下 (Hive CLI / Beeline)，使用 set 命令指定。这种设置的作用范围也是 Session 级别的，配置对于执行该命令后的所有命令生效。set 兼具设置参数和查看参数的功能。如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0: jdbc:hive2://hadoop001:10000&gt; set hive.exec.scratchdir=/tmp/mydir;
No rows affected (0.025 seconds)
0: jdbc:hive2://hadoop001:10000&gt; set hive.exec.scratchdir;
+----------------------------------+--+
|               set                |
+----------------------------------+--+
| hive.exec.scratchdir=/tmp/mydir  |
+----------------------------------+--+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置优先级" tabindex="-1"><a class="header-anchor" href="#配置优先级" aria-hidden="true">#</a> 配置优先级</h3><p>配置的优先顺序如下 (由低到高)：<br><code>hive-site.xml</code> - &gt;<code>hivemetastore-site.xml</code>- &gt; <code>hiveserver2-site.xml</code> - &gt;<code>-- hiveconf</code>- &gt; <code>set</code></p><h3 id="配置参数" tabindex="-1"><a class="header-anchor" href="#配置参数" aria-hidden="true">#</a> 配置参数</h3>`,16),E={href:"https://cwiki.apache.org/confluence/display/Hive/AdminManual+Configuration",target:"_blank",rel:"noopener noreferrer"},A=a("h2",{id:"参考资料",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),e(" 参考资料")],-1),N={href:"https://github.com/heibaiying/BigData-Notes",target:"_blank",rel:"noopener noreferrer"};function I(T,Q){const s=l("ExternalLinkIcon");return o(),r("div",null,[c,a("p",null,[e("下载所需版本的 Hive，这里我下载版本为 "),d,e("。下载地址："),a("a",u,[e("http://archive.cloudera.com/cdh5/cdh/5/"),n(s)])]),v,a("p",null,[a("strong",null,[e("1. "),a("a",h,[e("hive-env.sh"),n(s)])])]),m,a("p",null,[e("将 MySQL 驱动包拷贝到 Hive 安装目录的 "),b,e(" 目录下, MySQL 驱动的下载地址为："),a("a",k,[e("https://dev.mysql.com/downloads/connector/j/"),n(s)]),e("。")]),g,a("blockquote",null,[a("p",null,[e("关于 Hadoop 的用户代理机制，可以参考："),a("a",f,[e("hadoop 的用户代理机制"),n(s)]),e(" 或 "),a("a",x,[e("Superusers Acting On Behalf Of Other Users"),n(s)])])]),y,a("p",null,[e("在 Hive CLI 中支持的参数，Beeline 都支持，常用的参数如下。更多参数说明可以参见官方文档 "),a("a",_,[e("Beeline Command Options"),n(s)])]),H,a("figure",null,[a("a",w,[S,n(s)]),q]),B,a("figure",null,[a("a",L,[j,n(s)]),C]),D,a("p",null,[e("Hive 可选的配置参数非常多，在用到时查阅官方文档即可"),a("a",E,[e("AdminManual Configuration"),n(s)])]),A,a("ul",null,[a("li",null,[a("a",N,[e("BigData-Notes"),n(s)])])])])}const V=i(p,[["render",I],["__file","index.html.vue"]]);export{V as default};
