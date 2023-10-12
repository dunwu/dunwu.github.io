import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as d,c as l,a as n,b as s,d as e,e as t}from"./app-2793f0f0.js";const c={},r=n("h1",{id:"sqlite",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sqlite","aria-hidden":"true"},"#"),s(" SQLite")],-1),p=n("br",null,null,-1),u={href:"https://github.com/dunwu/db-tutorial/tree/master/codes/javadb/javadb-sqlite",target:"_blank",rel:"noopener noreferrer"},h=t('<h2 id="sqlite-简介" tabindex="-1"><a class="header-anchor" href="#sqlite-简介" aria-hidden="true">#</a> SQLite 简介</h2><p>SQLite 是一个C语言编写的轻量级、全功能、无服务器、零配置的的开源数据库引擎。</p><p>SQLite 的设计目标是嵌入式的数据库，很多嵌入式产品中都使用了它。SQLite 十分轻量，占用资源非常的低，在嵌入式设备中，可能只需要几百K的内存就够了。SQLite 能够支持Windows/Linux/Unix等等主流的操作系统，同时能够跟很多程序语言相结合，同样比起Mysql、PostgreSQL这两款开源的世界著名数据库管理系统来讲，它的处理速度比他们都快。</p><p>SQLite 大小只有 3M 左右，可以将整个 SQLite 嵌入到应用中，而不用采用传统的客户端／服务器（Client/Server）的架构。这样做的好处就是非常轻便，在许多智能设备和应用中都可以使用 SQLite，比如微信就采用了 SQLite 作为本地聊天记录的存储。</p><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ul><li>SQLite 是自给自足的，这意味着不需要任何外部的依赖。</li><li>SQLite 是无服务器的、零配置的，这意味着不需要安装或管理。</li><li>SQLite 事务是完全兼容 ACID 的，允许从多个进程或线程安全访问。</li><li>SQLite 是非常小的，是轻量级的，完全配置时小于 400KiB，省略可选功能配置时小于 250KiB。</li><li>SQLite 支持 SQL92（SQL2）标准的大多数查询语言的功能。</li><li>一个完整的 SQLite 数据库是存储在一个单一的跨平台的磁盘文件。</li><li>SQLite 使用 ANSI-C 编写的，并提供了简单和易于使用的 API。</li><li>SQLite 可在 UNIX（Linux, Mac OS-X, Android, iOS）和 Windows（Win32, WinCE, WinRT）中运行。</li></ul><h3 id="局限" tabindex="-1"><a class="header-anchor" href="#局限" aria-hidden="true">#</a> 局限</h3><table><thead><tr><th>特性</th><th>描述</th></tr></thead><tbody><tr><td>RIGHT OUTER JOIN</td><td>只实现了 LEFT OUTER JOIN。</td></tr><tr><td>FULL OUTER JOIN</td><td>只实现了 LEFT OUTER JOIN。</td></tr><tr><td>ALTER TABLE</td><td>支持 RENAME TABLE 和 ALTER TABLE 的 ADD COLUMN variants 命令，不支持 DROP COLUMN、ALTER COLUMN、ADD CONSTRAINT。</td></tr><tr><td>Trigger 支持</td><td>支持 FOR EACH ROW 触发器，但不支持 FOR EACH STATEMENT 触发器。</td></tr><tr><td>VIEWs</td><td>在 SQLite 中，视图是只读的。您不可以在视图上执行 DELETE、INSERT 或 UPDATE 语句。</td></tr><tr><td>GRANT 和 REVOKE</td><td>可以应用的唯一的访问权限是底层操作系统的正常文件访问权限。</td></tr></tbody></table><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><p>Sqlite 可在 UNIX（Linux, Mac OS-X, Android, iOS）和 Windows（Win32, WinCE, WinRT）中运行。</p>',10),b={href:"https://www.sqlite.org/download.html",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"sqlite-语法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sqlite-语法","aria-hidden":"true"},"#"),s(" SQLite 语法")],-1),v=n("p",null,"这里不会详细列举所有 SQL 语法，仅列举 SQLite 除标准 SQL 以外的，一些自身特殊的 SQL 语法。",-1),k={href:"https://github.com/dunwu/blog/blob/master/docs/database/sql/sql.md",target:"_blank",rel:"noopener noreferrer"},g=t(`<h3 id="大小写敏感" tabindex="-1"><a class="header-anchor" href="#大小写敏感" aria-hidden="true">#</a> 大小写敏感</h3><p>SQLite 是<strong>不区分大小写</strong>的，但也有一些命令是大小写敏感的，比如 <strong>GLOB</strong> 和 <strong>glob</strong> 在 SQLite 的语句中有不同的含义。</p><h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 单行注释</span>
<span class="token comment">/*
 多行注释1
 多行注释2
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建数据库" tabindex="-1"><a class="header-anchor" href="#创建数据库" aria-hidden="true">#</a> 创建数据库</h3><p>如下，创建一个名为 test 的数据库：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ sqlite3 test.db
SQLite version <span class="token number">3.7</span>.17 <span class="token number">2013</span>-05-20 00:56:22
Enter <span class="token string">&quot;.help&quot;</span> <span class="token keyword">for</span> instructions
Enter SQL statements terminated with a <span class="token string">&quot;;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看数据库" tabindex="-1"><a class="header-anchor" href="#查看数据库" aria-hidden="true">#</a> 查看数据库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sqlite<span class="token operator">&gt;</span> .databases
<span class="token function">seq</span>  name             <span class="token function">file</span>
---  ---------------  ----------------------------------------------------------
<span class="token number">0</span>    main             /root/test.db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="退出数据库" tabindex="-1"><a class="header-anchor" href="#退出数据库" aria-hidden="true">#</a> 退出数据库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sqlite<span class="token operator">&gt;</span> .quit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="附加数据库" tabindex="-1"><a class="header-anchor" href="#附加数据库" aria-hidden="true">#</a> 附加数据库</h3><p>假设这样一种情况，当在同一时间有多个数据库可用，您想使用其中的任何一个。</p><p>SQLite 的 <strong><code>ATTACH DATABASE</code></strong> 语句是用来选择一个特定的数据库，使用该命令后，所有的 SQLite 语句将在附加的数据库下执行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sqlite<span class="token operator">&gt;</span> ATTACH DATABASE <span class="token string">&#39;test.db&#39;</span> AS <span class="token string">&#39;test&#39;</span><span class="token punctuation">;</span>
sqlite<span class="token operator">&gt;</span> .databases
<span class="token function">seq</span>  name             <span class="token function">file</span>
---  ---------------  ----------------------------------------------------------
<span class="token number">0</span>    main             /root/test.db
<span class="token number">2</span>    <span class="token builtin class-name">test</span>             /root/test.db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>🔔 注意：数据库名 <strong><code>main</code></strong> 和 <strong><code>temp</code></strong> 被保留用于主数据库和存储临时表及其他临时数据对象的数据库。这两个数据库名称可用于每个数据库连接，且不应该被用于附加，否则将得到一个警告消息。</p></blockquote><h3 id="分离数据库" tabindex="-1"><a class="header-anchor" href="#分离数据库" aria-hidden="true">#</a> 分离数据库</h3><p>SQLite 的 <strong><code>DETACH DATABASE</code></strong> 语句是用来把命名数据库从一个数据库连接分离和游离出来，连接是之前使用 <strong><code>ATTACH</code></strong> 语句附加的。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sqlite<span class="token operator">&gt;</span> .databases
<span class="token function">seq</span>  name             <span class="token function">file</span>
---  ---------------  ----------------------------------------------------------
<span class="token number">0</span>    main             /root/test.db
<span class="token number">2</span>    <span class="token builtin class-name">test</span>             /root/test.db
sqlite<span class="token operator">&gt;</span> DETACH DATABASE <span class="token string">&#39;test&#39;</span><span class="token punctuation">;</span>
sqlite<span class="token operator">&gt;</span> .databases
<span class="token function">seq</span>  name             <span class="token function">file</span>
---  ---------------  ----------------------------------------------------------
<span class="token number">0</span>    main             /root/test.db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="备份数据库" tabindex="-1"><a class="header-anchor" href="#备份数据库" aria-hidden="true">#</a> 备份数据库</h3><p>如下，备份 test 数据库到 <code>/home/test.sql</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sqlite3 test.db .dump <span class="token operator">&gt;</span> /home/test.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="恢复数据库" tabindex="-1"><a class="header-anchor" href="#恢复数据库" aria-hidden="true">#</a> 恢复数据库</h3><p>如下，根据 <code>/home/test.sql</code> 恢复 test 数据库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sqlite3 test.db <span class="token operator">&lt;</span> test.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sqlite-数据类型" tabindex="-1"><a class="header-anchor" href="#sqlite-数据类型" aria-hidden="true">#</a> SQLite 数据类型</h2><p>SQLite 使用一个更普遍的动态类型系统。在 SQLite 中，值的数据类型与值本身是相关的，而不是与它的容器相关。</p><h3 id="sqlite-存储类" tabindex="-1"><a class="header-anchor" href="#sqlite-存储类" aria-hidden="true">#</a> SQLite 存储类</h3><p>每个存储在 SQLite 数据库中的值都具有以下存储类之一：</p><table><thead><tr><th>存储类</th><th>描述</th></tr></thead><tbody><tr><td><code>NULL</code></td><td>值是一个 NULL 值。</td></tr><tr><td><code>INTEGER</code></td><td>值是一个带符号的整数，根据值的大小存储在 1、2、3、4、6 或 8 字节中。</td></tr><tr><td><code>REAL</code></td><td>值是一个浮点值，存储为 8 字节的 IEEE 浮点数字。</td></tr><tr><td><code>TEXT</code></td><td>值是一个文本字符串，使用数据库编码（UTF-8、UTF-16BE 或 UTF-16LE）存储。</td></tr><tr><td><code>BLOB</code></td><td>值是一个 blob 数据，完全根据它的输入存储。</td></tr></tbody></table><p>SQLite 的存储类稍微比数据类型更普遍。INTEGER 存储类，例如，包含 6 种不同的不同长度的整数数据类型。</p><h3 id="sqlite-亲和-affinity-类型" tabindex="-1"><a class="header-anchor" href="#sqlite-亲和-affinity-类型" aria-hidden="true">#</a> SQLite 亲和(Affinity)类型</h3><p>SQLite 支持列的亲和类型概念。任何列仍然可以存储任何类型的数据，当数据插入时，该字段的数据将会优先采用亲缘类型作为该值的存储方式。SQLite 目前的版本支持以下五种亲缘类型：</p><table><thead><tr><th>亲和类型</th><th>描述</th></tr></thead><tbody><tr><td><code>TEXT</code></td><td>数值型数据在被插入之前，需要先被转换为文本格式，之后再插入到目标字段中。</td></tr><tr><td><code>NUMERIC</code></td><td>当文本数据被插入到亲缘性为 NUMERIC 的字段中时，如果转换操作不会导致数据信息丢失以及完全可逆，那么 SQLite 就会将该文本数据转换为 INTEGER 或 REAL 类型的数据，如果转换失败，SQLite 仍会以 TEXT 方式存储该数据。对于 NULL 或 BLOB 类型的新数据，SQLite 将不做任何转换，直接以 NULL 或 BLOB 的方式存储该数据。需要额外说明的是，对于浮点格式的常量文本，如&quot;30000.0&quot;，如果该值可以转换为 INTEGER 同时又不会丢失数值信息，那么 SQLite 就会将其转换为 INTEGER 的存储方式。</td></tr><tr><td><code>INTEGER</code></td><td>对于亲缘类型为 INTEGER 的字段，其规则等同于 NUMERIC，唯一差别是在执行 CAST 表达式时。</td></tr><tr><td><code>REAL</code></td><td>其规则基本等同于 NUMERIC，唯一的差别是不会将&quot;30000.0&quot;这样的文本数据转换为 INTEGER 存储方式。</td></tr><tr><td><code>NONE</code></td><td>不做任何的转换，直接以该数据所属的数据类型进行存储。</td></tr></tbody></table><h3 id="sqlite-亲和类型-affinity-及类型名称" tabindex="-1"><a class="header-anchor" href="#sqlite-亲和类型-affinity-及类型名称" aria-hidden="true">#</a> SQLite 亲和类型(Affinity)及类型名称</h3><p>下表列出了当创建 SQLite3 表时可使用的各种数据类型名称，同时也显示了相应的亲和类型：</p><table><thead><tr><th>数据类型</th><th>亲和类型</th></tr></thead><tbody><tr><td><code>INT</code>, <code>INTEGER</code>, <code>TINYINT</code>, <code>SMALLINT</code>, <code>MEDIUMINT</code>, <code>BIGINT</code>, <code>UNSIGNED BIG INT</code>, <code>INT2</code>, <code>INT8</code></td><td><code>INTEGER</code></td></tr><tr><td><code>CHARACTER(20)</code>, <code>VARCHAR(255)</code>, <code>VARYING CHARACTER(255)</code>, <code>NCHAR(55)</code>, <code>NATIVE CHARACTER(70)</code>, <code>NVARCHAR(100)</code>, <code>TEXT</code>, <code>CLOB</code></td><td><code>TEXT</code></td></tr><tr><td><code>BLOB</code>, <code>no datatype specified</code></td><td><code>NONE</code></td></tr><tr><td><code>REAL</code>, <code>DOUBLE</code>, <code>DOUBLE PRECISION</code>, <code>FLOAT</code></td><td><code>REAL</code></td></tr><tr><td><code>NUMERIC</code>, <code>DECIMAL(10,5)</code>, <code>BOOLEAN</code>, <code>DATE</code>, <code>DATETIME</code></td><td><code>NUMERIC</code></td></tr></tbody></table><h3 id="boolean-数据类型" tabindex="-1"><a class="header-anchor" href="#boolean-数据类型" aria-hidden="true">#</a> Boolean 数据类型</h3><p>SQLite 没有单独的 Boolean 存储类。相反，布尔值被存储为整数 0（false）和 1（true）。</p><h3 id="date-与-time-数据类型" tabindex="-1"><a class="header-anchor" href="#date-与-time-数据类型" aria-hidden="true">#</a> Date 与 Time 数据类型</h3><p>SQLite 没有一个单独的用于存储日期和/或时间的存储类，但 SQLite 能够把日期和时间存储为 TEXT、REAL 或 INTEGER 值。</p><table><thead><tr><th>存储类</th><th>日期格式</th></tr></thead><tbody><tr><td><code>TEXT</code></td><td>格式为 &quot;YYYY-MM-DD HH:MM:SS.SSS&quot; 的日期。</td></tr><tr><td><code>REAL</code></td><td>从公元前 4714 年 11 月 24 日格林尼治时间的正午开始算起的天数。</td></tr><tr><td><code>INTEGER</code></td><td>从 1970-01-01 00:00:00 UTC 算起的秒数。</td></tr></tbody></table><p>您可以以任何上述格式来存储日期和时间，并且可以使用内置的日期和时间函数来自由转换不同格式。</p><h2 id="sqlite-命令" tabindex="-1"><a class="header-anchor" href="#sqlite-命令" aria-hidden="true">#</a> SQLite 命令</h2><h3 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h3><h4 id="进入-sqlite-控制台" tabindex="-1"><a class="header-anchor" href="#进入-sqlite-控制台" aria-hidden="true">#</a> 进入 SQLite 控制台</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ sqlite3
SQLite version <span class="token number">3.7</span>.17 <span class="token number">2013</span>-05-20 00:56:22
Enter <span class="token string">&quot;.help&quot;</span> <span class="token keyword">for</span> instructions
Enter SQL statements terminated with a <span class="token string">&quot;;&quot;</span>
sqlite<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="进入-sqlite-控制台并指定数据库" tabindex="-1"><a class="header-anchor" href="#进入-sqlite-控制台并指定数据库" aria-hidden="true">#</a> 进入 SQLite 控制台并指定数据库</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ sqlite3 test.db
SQLite version <span class="token number">3.7</span>.17 <span class="token number">2013</span>-05-20 00:56:22
Enter <span class="token string">&quot;.help&quot;</span> <span class="token keyword">for</span> instructions
Enter SQL statements terminated with a <span class="token string">&quot;;&quot;</span>
sqlite<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="退出-sqlite-控制台" tabindex="-1"><a class="header-anchor" href="#退出-sqlite-控制台" aria-hidden="true">#</a> 退出 SQLite 控制台</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sqlite<span class="token operator">&gt;</span>.quit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看命令帮助" tabindex="-1"><a class="header-anchor" href="#查看命令帮助" aria-hidden="true">#</a> 查看命令帮助</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sqlite<span class="token operator">&gt;</span>.help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="常用命令清单" tabindex="-1"><a class="header-anchor" href="#常用命令清单" aria-hidden="true">#</a> 常用命令清单</h3><table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td>.backup ?DB? FILE</td><td>备份 DB 数据库（默认是 &quot;main&quot;）到 FILE 文件。</td></tr><tr><td>.bail ON|OFF</td><td>发生错误后停止。默认为 OFF。</td></tr><tr><td>.databases</td><td>列出数据库的名称及其所依附的文件。</td></tr><tr><td>.dump ?TABLE?</td><td>以 SQL 文本格式转储数据库。如果指定了 TABLE 表，则只转储匹配 LIKE 模式的 TABLE 表。</td></tr><tr><td>.echo ON|OFF</td><td>开启或关闭 echo 命令。</td></tr><tr><td>.exit</td><td>退出 SQLite 提示符。</td></tr><tr><td>.explain ON|OFF</td><td>开启或关闭适合于 EXPLAIN 的输出模式。如果没有带参数，则为 EXPLAIN on，及开启 EXPLAIN。</td></tr><tr><td>.header(s) ON|OFF</td><td>开启或关闭头部显示。</td></tr><tr><td>.help</td><td>显示消息。</td></tr><tr><td>.import FILE TABLE</td><td>导入来自 FILE 文件的数据到 TABLE 表中。</td></tr><tr><td>.indices ?TABLE?</td><td>显示所有索引的名称。如果指定了 TABLE 表，则只显示匹配 LIKE 模式的 TABLE 表的索引。</td></tr><tr><td>.load FILE ?ENTRY?</td><td>加载一个扩展库。</td></tr><tr><td>.log FILE|off</td><td>开启或关闭日志。FILE 文件可以是 stderr（标准错误）/stdout（标准输出）。</td></tr><tr><td>.mode MODE</td><td>设置输出模式，MODE 可以是下列之一：<br>csv 逗号分隔的值<br>column 左对齐的列<br>html HTML 的 <code>&lt;table&gt;</code> 代码<br>insert TABLE 表的 SQL 插入（insert）语句<br>line 每行一个值<br>list 由 .separator 字符串分隔的值<br>tabs 由 Tab 分隔的值<br>tcl TCL 列表元素</td></tr><tr><td>.nullvalue STRING</td><td>在 NULL 值的地方输出 STRING 字符串。</td></tr><tr><td>.output FILENAME</td><td>发送输出到 FILENAME 文件。</td></tr><tr><td>.output stdout</td><td>发送输出到屏幕。</td></tr><tr><td>.print STRING...</td><td>逐字地输出 STRING 字符串。</td></tr><tr><td>.prompt MAIN CONTINUE</td><td>替换标准提示符。</td></tr><tr><td>.quit</td><td>退出 SQLite 提示符。</td></tr><tr><td>.read FILENAME</td><td>执行 FILENAME 文件中的 SQL。</td></tr><tr><td>.schema ?TABLE?</td><td>显示 CREATE 语句。如果指定了 TABLE 表，则只显示匹配 LIKE 模式的 TABLE 表。</td></tr><tr><td>.separator STRING</td><td>改变输出模式和 .import 所使用的分隔符。</td></tr><tr><td>.show</td><td>显示各种设置的当前值。</td></tr><tr><td>.stats ON|OFF</td><td>开启或关闭统计。</td></tr><tr><td>.tables ?PATTERN?</td><td>列出匹配 LIKE 模式的表的名称。</td></tr><tr><td>.timeout MS</td><td>尝试打开锁定的表 MS 毫秒。</td></tr><tr><td>.width NUM NUM</td><td>为 &quot;column&quot; 模式设置列宽度。</td></tr><tr><td>.timer ON|OFF</td><td>开启或关闭 CPU 定时器。</td></tr></tbody></table><h3 id="实战" tabindex="-1"><a class="header-anchor" href="#实战" aria-hidden="true">#</a> 实战</h3><h4 id="格式化输出" tabindex="-1"><a class="header-anchor" href="#格式化输出" aria-hidden="true">#</a> 格式化输出</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sqlite&gt;.header on
sqlite&gt;.mode column
sqlite&gt;.timer on
sqlite&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="输出结果到文件" tabindex="-1"><a class="header-anchor" href="#输出结果到文件" aria-hidden="true">#</a> 输出结果到文件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sqlite<span class="token operator">&gt;</span> .mode list
sqlite<span class="token operator">&gt;</span> .separator <span class="token operator">|</span>
sqlite<span class="token operator">&gt;</span> .output teyptest_file_1.txt
sqlite<span class="token operator">&gt;</span> <span class="token keyword">select</span> * from tbl1<span class="token punctuation">;</span>
sqlite<span class="token operator">&gt;</span> .exit
$ <span class="token function">cat</span> test_file_1.txt
hello<span class="token operator">|</span><span class="token number">10</span>
goodbye<span class="token operator">|</span><span class="token number">20</span>
$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sqlite-java-client" tabindex="-1"><a class="header-anchor" href="#sqlite-java-client" aria-hidden="true">#</a> SQLite JAVA Client</h2>`,61),L={href:"https://bitbucket.org/xerial/sqlite-jdbc/downloads",target:"_blank",rel:"noopener noreferrer"},q=t(`<p>（2）通过 API 打开一个 SQLite 数据库连接。</p><p>执行方法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> javac Sample.java
<span class="token operator">&gt;</span> <span class="token function">java</span> <span class="token parameter variable">-classpath</span> <span class="token string">&quot;.;sqlite-jdbc-(VERSION).jar&quot;</span> Sample   <span class="token comment"># in Windows</span>
or
<span class="token operator">&gt;</span> <span class="token function">java</span> <span class="token parameter variable">-classpath</span> <span class="token string">&quot;.:sqlite-jdbc-(VERSION).jar&quot;</span> Sample   <span class="token comment"># in Mac or Linux</span>
name <span class="token operator">=</span> leo
<span class="token function">id</span> <span class="token operator">=</span> <span class="token number">1</span>
name <span class="token operator">=</span> yui
<span class="token function">id</span> <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Sample</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 创建数据库连接</span>
            connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:sqlite:sample.db&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Statement</span> statement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            statement<span class="token punctuation">.</span><span class="token function">setQueryTimeout</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 设置 sql 执行超时时间为 30s</span>

            statement<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token string">&quot;drop table if exists person&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            statement<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token string">&quot;create table person (id integer, name string)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            statement<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token string">&quot;insert into person values(1, &#39;leo&#39;)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            statement<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token string">&quot;insert into person values(2, &#39;yui&#39;)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> statement<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token string">&quot;select * from person&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 读取结果集</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name = &quot;</span> <span class="token operator">+</span> rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;id = &quot;</span> <span class="token operator">+</span> rs<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果错误信息是 &quot;out of memory&quot;，可能是找不到数据库文件</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>connection <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 关闭连接失败</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何指定数据库文件" tabindex="-1"><a class="header-anchor" href="#如何指定数据库文件" aria-hidden="true">#</a> 如何指定数据库文件</h3><p>Windows</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">Connection</span> <span class="token value attr-value">connection = DriverManager.getConnection(&quot;jdbc:sqlite:C:/work/mydatabase.db&quot;);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Unix (Linux, Mac OS X, etc)</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">Connection</span> <span class="token value attr-value">connection = DriverManager.getConnection(&quot;jdbc:sqlite:/home/leo/work/mydatabase.db&quot;);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="如何使用内存数据库" tabindex="-1"><a class="header-anchor" href="#如何使用内存数据库" aria-hidden="true">#</a> 如何使用内存数据库</h3><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">Connection</span> <span class="token value attr-value">connection = DriverManager.getConnection(&quot;jdbc:sqlite::memory:&quot;);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,13),E={href:"https://www.sqlite.org/index.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/sqlite/sqlite",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.sqlite.org/docs.html",target:"_blank",rel:"noopener noreferrer"},T={href:"https://www.sqlite.org/cli.html",target:"_blank",rel:"noopener noreferrer"},A={href:"http://www.runoob.com/sqlite/sqlite-commands.html",target:"_blank",rel:"noopener noreferrer"},N={href:"https://github.com/xerial/sqlite-jdbc",target:"_blank",rel:"noopener noreferrer"},x={href:"http://www.runoob.com/sqlite/sqlite-java.html",target:"_blank",rel:"noopener noreferrer"},I=n("h2",{id:"🚪-传送",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#🚪-传送","aria-hidden":"true"},"#"),s(" 🚪 传送")],-1),Q={href:"https://dunwu.github.io/waterdrop/",target:"_blank",rel:"noopener noreferrer"};function _(R,w){const a=o("ExternalLinkIcon");return d(),l("div",null,[r,n("blockquote",null,[n("p",null,[s("SQLite 是一个无服务器的、零配置的、事务性的的开源数据库引擎。"),p,s(" 💻 "),n("a",u,[s("完整示例源码"),e(a)])])]),h,n("p",null,[s("一般，Linux 和 Mac 上会预安装 sqlite。如果没有安装，可以在"),n("a",b,[s("官方下载地址"),e(a)]),s("下载合适安装版本，自行安装。")]),m,n("blockquote",null,[v,n("p",null,[s("📖 扩展阅读："),n("a",k,[s("标准 SQL 基本语法"),e(a)])])]),g,n("p",null,[s("（1）在"),n("a",L,[s("官方下载地址"),e(a)]),s("下载 sqlite-jdbc-(VERSION).jar ，然后将 jar 包放在项目中的 classpath。")]),q,n("ul",null,[n("li",null,[n("a",E,[s("SQLite 官网"),e(a)])]),n("li",null,[n("a",f,[s("SQLite Github"),e(a)])]),n("li",null,[n("a",S,[s("SQLite 官方文档"),e(a)])]),n("li",null,[n("a",T,[s("SQLite 官方命令行手册"),e(a)])]),n("li",null,[n("a",A,[s("http://www.runoob.com/sqlite/sqlite-commands.html"),e(a)])]),n("li",null,[n("a",N,[s("https://github.com/xerial/sqlite-jdbc"),e(a)])]),n("li",null,[n("a",x,[s("http://www.runoob.com/sqlite/sqlite-java.html"),e(a)])])]),I,n("p",null,[s("◾ 💧 "),n("a",Q,[s("钝悟的 IT 知识图谱"),e(a)]),s(" ◾")])])}const C=i(c,[["render",_],["__file","03.Sqlite.html.vue"]]);export{C as default};
