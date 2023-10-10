import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as r,c as t,a,b as o,d as n,e as l}from"./app-29bcd084.js";const c={},i=l(`<h1 id="mysql-架构" tabindex="-1"><a class="header-anchor" href="#mysql-架构" aria-hidden="true">#</a> Mysql 架构</h1><p>大体来说，MySQL 可以分为 Server 层和存储引擎层两部分。</p><p><strong>Server 层包括连接器、查询缓存、分析器、优化器、执行器等</strong>，涵盖 MySQL 的大多数核心服务功能，以及所有的内置函数（如日期、时间、数学和加密函数等），所有跨存储引擎的功能都在这一层实现，比如存储过程、触发器、视图等。</p><p><strong>存储引擎层负责数据的存储和提取</strong>。其架构模式是插件式的，支持 InnoDB、MyISAM、Memory 等多个存储引擎。现在最常用的存储引擎是 InnoDB，它从 MySQL 5.5.5 版本开始成为了默认存储引擎。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200227201908.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="mysql-查询流程" tabindex="-1"><a class="header-anchor" href="#mysql-查询流程" aria-hidden="true">#</a> Mysql 查询流程</h2><p>SQL 语句在 MySQL 中是如何执行的？</p><p>MySQL 整个查询执行过程，总的来说分为 6 个步骤，分别对应 6 个组件：</p><ol><li><strong>连接器</strong> - 客户端和 MySQL 服务器建立连接；连接器负责跟客户端建立连接、获取权限、维持和管理连接。</li><li><strong>查询缓存</strong> - MySQL 服务器首先检查查询缓存，如果命中缓存，则立刻返回结果。否则进入下一阶段。</li><li><strong>分析器</strong> - MySQL 服务器进行 SQL 分析：语法分析、词法分析。</li><li><strong>优化器</strong> - MySQL 服务器用优化器生成对应的执行计划。</li><li><strong>执行器</strong> - MySQL 服务器根据执行计划，调用存储引擎的 API 来执行查询。</li><li><strong>返回结果</strong> - MySQL 服务器将结果返回给客户端，同时缓存查询结果。</li></ol><h3 id="连接器" tabindex="-1"><a class="header-anchor" href="#连接器" aria-hidden="true">#</a> 连接器</h3><p>使用 MySQL 第一步自然是要连接数据库。<strong>连接器负责跟客户端建立连接、获取权限、维持和管理连接</strong>。</p><p>MySQL 客户端/服务端通信是<strong>半双工模式</strong>：即任一时刻，要么是服务端向客户端发送数据，要么是客户端向服务器发送数据。客户端用一个单独的数据包将查询请求发送给服务器，所以当查询语句很长的时候，需要设置 <code>max_allowed_packet</code> 参数。但是需要注意的是，如果查询实在是太大，服务端会拒绝接收更多数据并抛出异常。</p><p>MySQL 客户端连接命令：<code>mysql -h&lt;主机&gt; -P&lt;端口&gt; -u&lt;用户名&gt; -p&lt;密码&gt;</code>。如果没有显式指定密码，会要求输入密码才能访问。</p><p>连接完成后，如果没有后续的动作，这个连接就处于<strong>空闲状态</strong>。<strong>可以执行 <code>show processlist</code> 命令查看当前有多少个客户端连接</strong>。<strong>客户端如果空闲太久，连接器就会自动将它断开</strong>。客户端连接维持时间是由参数 <code>wait_timeout</code> 控制的，默认值是 8 小时。如果在连接被断开之后，客户端再次发送请求的话，就会收到一个错误提醒： <code>Lost connection to MySQL server during query</code>。这时候如果你要继续，就需要重连，然后再执行请求了。</p><p>建立连接的过程通常是比较复杂的，建议在使用中要尽量减少建立连接的动作，也就是尽量使用长连接。为了在程序中提高数据库连接的服用了，一般会使用数据库连接池来维护管理。</p><p>但是全部使用长连接后，你可能会发现，有些时候 MySQL 占用内存涨得特别快，这是因为 MySQL 在执行过程中临时使用的内存是管理在连接对象里面的。这些资源会在连接断开的时候才释放。所以如果长连接累积下来，可能导致内存占用太大，被系统强行杀掉（OOM），从现象看就是 MySQL 异常重启了。</p><p>怎么解决这个问题呢？你可以考虑以下两种方案。</p><ul><li><strong>定期断开长连接</strong>。使用一段时间，或者程序里面判断执行过一个占用内存的大查询后，断开连接，之后要查询再重连。</li><li>如果你用的是 MySQL 5.7 或更新版本，可以在每次执行一个比较大的操作后，通过执行 <code>mysql_reset_connection</code> 来重新初始化连接资源。这个过程不需要重连和重新做权限验证，但是会将连接恢复到刚刚创建完时的状态。</li></ul><h3 id="查询缓存" tabindex="-1"><a class="header-anchor" href="#查询缓存" aria-hidden="true">#</a> 查询缓存</h3><blockquote><p><strong>不建议使用数据库缓存，因为往往弊大于利</strong>。</p></blockquote><p>解析一个查询语句前，如果查询缓存是打开的，那么 MySQL 会检查这个查询语句是否命中查询缓存中的数据。如果当前查询恰好命中查询缓存，在检查一次用户权限后直接返回缓存中的结果。这种情况下，查询不会被解析，也不会生成执行计划，更不会执行。</p><p>MySQL 将缓存存放在一个引用表（不要理解成<code>table</code>，可以认为是类似于<code>HashMap</code>的数据结构），通过一个哈希值索引，这个哈希值通过查询本身、当前要查询的数据库、客户端协议版本号等一些可能影响结果的信息计算得来。所以两个查询在任何字符上的不同（例如：空格、注释），都会导致缓存不会命中。</p><p><strong>如果查询中包含任何用户自定义函数、存储函数、用户变量、临时表、mysql 库中的系统表，其查询结果都不会被缓存</strong>。比如函数<code>NOW()</code>或者<code>CURRENT_DATE()</code>会因为不同的查询时间，返回不同的查询结果，再比如包含<code>CURRENT_USER</code>或者<code>CONNECION_ID()</code>的查询语句会因为不同的用户而返回不同的结果，将这样的查询结果缓存起来没有任何的意义。</p><p><strong>不建议使用数据库缓存，因为往往弊大于利</strong>。查询缓存的失效非常频繁，只要有对一个表的更新，这个表上所有的查询缓存都会被清空。因此很可能你费劲地把结果存起来，还没使用呢，就被一个更新全清空了。对于更新压力大的数据库来说，查询缓存的命中率会非常低。除非你的业务就是有一张静态表，很长时间才会更新一次。比如，一个系统配置表，那这张表上的查询才适合使用查询缓存。</p><p>好在 MySQL 也提供了这种“按需使用”的方式。你可以将参数 <code>query_cache_type</code> 设置成 <code>DEMAND</code>，这样对于默认的 SQL 语句都不使用查询缓存。而对于你确定要使用查询缓存的语句，可以用 <code>SQL_CACHE</code> 显式指定，像下面这个语句一样：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> SQL_CACHE <span class="token operator">*</span> <span class="token keyword">from</span> T <span class="token keyword">where</span> ID<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>注意：MySQL 8.0 版本直接将查询缓存的整块功能删掉了。</p></blockquote><h3 id="分析器" tabindex="-1"><a class="header-anchor" href="#分析器" aria-hidden="true">#</a> 分析器</h3><p>如果没有命中查询缓存，就要开始真正执行语句了。首先，MySQL 需要知道你要做什么，因此需要对 SQL 语句做解析。MySQL 通过关键字对 SQL 语句进行解析，并生成一颗对应的语法解析树。这个过程中，分析器主要通过语法规则来验证和解析。比如 SQL 中是否使用了错误的关键字或者关键字的顺序是否正确等等。预处理则会根据 MySQL 规则进一步检查解析树是否合法。比如检查要查询的数据表和数据列是否存在等等。</p><ul><li>分析器先会先做“<strong>词法分析</strong>”。你输入的是由多个字符串和空格组成的一条 SQL 语句，MySQL 需要识别出里面的字符串分别是什么，代表什么。MySQL 从你输入的&quot;select&quot;这个关键字识别出来，这是一个查询语句。它也要把字符串“T”识别成“表名 T”，把字符串“ID”识别成“列 ID”。</li><li>接下来，要做“<strong>语法分析</strong>”。根据词法分析的结果，语法分析器会根据语法规则，判断你输入的这个 SQL 语句是否满足 MySQL 语法。如果你的语句不对，就会收到“You have an error in your SQL syntax”的错误提醒，比如下面这个语句 select 少打了开头的字母“s”。</li></ul><h3 id="优化器" tabindex="-1"><a class="header-anchor" href="#优化器" aria-hidden="true">#</a> 优化器</h3><p>经过了分析器，MySQL 就知道你要做什么了。在开始执行之前，还要先经过优化器的处理。</p><p>经过前面的步骤生成的语法树被认为是合法的了，并且由优化器将其转化成执行计划。多数情况下，一条查询可以有很多种执行方式，最后都返回相应的结果。优化器的作用就是找到这其中最好的执行计划。</p><p>MySQL 使用基于成本的优化器，它尝试预测一个查询使用某种执行计划时的成本，并选择其中成本最小的一个。在 MySQL 可以通过查询当前会话的 <code>last_query_cost</code> 的值来得到其计算当前查询的成本。</p><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code>mysql<span class="token operator">&gt;</span> select <span class="token operator">*</span> from t_message limit <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token operator">...</span>省略结果集

mysql<span class="token operator">&gt;</span> show status like <span class="token string-literal"><span class="token string">&#39;last_query_cost&#39;</span></span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>
<span class="token operator">|</span> Variable_name   <span class="token operator">|</span> Value       <span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>
<span class="token operator">|</span> Last_query_cost <span class="token operator">|</span> <span class="token number">6391.799000</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例中的结果表示优化器认为大概需要做 6391 个数据页的随机查找才能完成上面的查询。这个结果是根据一些列的统计信息计算得来的，这些统计信息包括：每张表或者索引的页面个数、索引的基数、索引和数据行的长度、索引的分布情况等等。</p><p>有非常多的原因会导致 MySQL 选择错误的执行计划，比如统计信息不准确、不会考虑不受其控制的操作成本（用户自定义函数、存储过程）、MySQL 认为的最优跟我们想的不一样（我们希望执行时间尽可能短，但 MySQL 值选择它认为成本小的，但成本小并不意味着执行时间短）等等。</p><p>MySQL 的查询优化器是一个非常复杂的部件，它使用了非常多的优化策略来生成一个最优的执行计划：</p><ul><li>重新定义表的关联顺序（多张表关联查询时，并不一定按照 SQL 中指定的顺序进行，但有一些技巧可以指定关联顺序）</li><li>优化<code>MIN()</code>和<code>MAX()</code>函数（找某列的最小值，如果该列有索引，只需要查找 B+Tree 索引最左端，反之则可以找到最大值，具体原理见下文）</li><li>提前终止查询（比如：使用 Limit 时，查找到满足数量的结果集后会立即终止查询）</li><li>优化排序（在老版本 MySQL 会使用两次传输排序，即先读取行指针和需要排序的字段在内存中对其排序，然后再根据排序结果去读取数据行，而新版本采用的是单次传输排序，也就是一次读取所有的数据行，然后根据给定的列排序。对于 I/O 密集型应用，效率会高很多）</li></ul><p>随着 MySQL 的不断发展，优化器使用的优化策略也在不断的进化，这里仅仅介绍几个非常常用且容易理解的优化策略，其他的优化策略，大家自行查阅吧。</p><h3 id="执行器" tabindex="-1"><a class="header-anchor" href="#执行器" aria-hidden="true">#</a> 执行器</h3><p>在完成解析和优化阶段以后，MySQL 会生成对应的执行计划，查询执行引擎根据执行计划给出的指令逐步执行得出结果。整个执行过程的大部分操作均是通过调用存储引擎实现的接口来完成，这些接口被称为 <code>handler API</code>。查询过程中的每一张表由一个 <code>handler</code> 实例表示。实际上，MySQL 在查询优化阶段就为每一张表创建了一个 <code>handler</code> 实例，优化器可以根据这些实例的接口来获取表的相关信息，包括表的所有列名、索引统计信息等。存储引擎接口提供了非常丰富的功能，但其底层仅有几十个接口，这些接口像搭积木一样完成了一次查询的大部分操作。</p><h3 id="返回结果" tabindex="-1"><a class="header-anchor" href="#返回结果" aria-hidden="true">#</a> 返回结果</h3><p>查询过程的最后一个阶段就是将结果返回给客户端。即使查询不到数据，MySQL 仍然会返回这个查询的相关信息，比如该查询影响到的行数以及执行时间等等。</p><p>如果查询缓存被打开且这个查询可以被缓存，MySQL 也会将结果存放到缓存中。</p><p>结果集返回客户端是一个增量且逐步返回的过程。有可能 MySQL 在生成第一条结果时，就开始向客户端逐步返回结果集了。这样服务端就无须存储太多结果而消耗过多内存，也可以让客户端第一时间获得返回结果。需要注意的是，结果集中的每一行都会以一个满足 ① 中所描述的通信协议的数据包发送，再通过 TCP 协议进行传输，在传输过程中，可能对 MySQL 的数据包进行缓存然后批量发送。</p><h2 id="mysql-更新流程" tabindex="-1"><a class="header-anchor" href="#mysql-更新流程" aria-hidden="true">#</a> Mysql 更新流程</h2><p>MySQL 更新过程和 MySQL 查询过程类似，也会将流程走一遍。不一样的是：<strong>更新流程还涉及两个重要的日志模块，：redo log（重做日志）和 binlog（归档日志）</strong>。</p><h3 id="redo-log" tabindex="-1"><a class="header-anchor" href="#redo-log" aria-hidden="true">#</a> redo log</h3><p>如果每一次的更新操作都需要写进磁盘，然后磁盘也要找到对应的那条记录，然后再更新，整个过程 IO 成本、查找成本都很高。为了解决这个问题，MySQL 采用了 WAL 技术（全程是 Write-Ahead Logging），它的关键点就是先写日志，再写磁盘。</p><p>具体来说，当有一条记录需要更新的时候，InnoDB 引擎就会先把记录写到 redo log 里，并更新内存，这个时候更新就算完成了。同时，InnoDB 引擎会在适当的时候，将这个操作记录更新到磁盘里面，而这个更新往往是在系统比较空闲的时候做。</p><p>InnoDB 的 redo log 是固定大小的，比如可以配置为一组 4 个文件，每个文件的大小是 1GB，那么总共就可以记录 4GB 的操作。从头开始写，写到末尾就又回到开头循环写，如下面这个图所示。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220720203348.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>write pos 是当前记录的位置，一边写一边后移，写到第 3 号文件末尾后就回到 0 号文件开头。checkpoint 是当前要擦除的位置，也是往后推移并且循环的，擦除记录前要把记录更新到数据文件。</p><p>write pos 和 checkpoint 之间的是还空着的部分，可以用来记录新的操作。如果 write pos 追上 checkpoint，表示“粉板”满了，这时候不能再执行新的更新，得停下来先擦掉一些记录，把 checkpoint 推进一下。</p><p>有了 redo log，InnoDB 就可以保证即使数据库发生异常重启，之前提交的记录都不会丢失，这个能力称为<strong>crash-safe</strong>。</p><h3 id="binlog" tabindex="-1"><a class="header-anchor" href="#binlog" aria-hidden="true">#</a> binlog</h3><p>redo log 是 InnoDB 引擎特有的日志，而 Server 层也有自己的日志，称为 binlog（归档日志）。</p><p>redo log 和 binlog 的差异：</p><ol><li>redo log 是 InnoDB 引擎特有的；binlog 是 MySQL 的 Server 层实现的，所有引擎都可以使用。</li><li>redo log 是物理日志，记录的是“在某个数据页上做了什么修改”；binlog 是逻辑日志，记录的是这个语句的原始逻辑，比如“给 ID=2 这一行的 c 字段加 1 ”。</li><li>redo log 是循环写的，空间固定会用完；binlog 是追加写入的。“追加写”是指 binlog 文件写到一定大小后会切换到下一个，并不会覆盖以前的日志。</li></ol><p>再来看一下：update 语句时的内部流程</p><ol><li>执行器先找引擎取 ID=2 这一行。ID 是主键，引擎直接用树搜索找到这一行。如果 ID=2 这一行所在的数据页本来就在内存中，就直接返回给执行器；否则，需要先从磁盘读入内存，然后再返回。</li><li>执行器拿到引擎给的行数据，把这个值加上 1，比如原来是 N，现在就是 N+1，得到新的一行数据，再调用引擎接口写入这行新数据。</li><li>引擎将这行新数据更新到内存中，同时将这个更新操作记录到 redo log 里面，此时 redo log 处于 prepare 状态。然后告知执行器执行完成了，随时可以提交事务。</li><li>执行器生成这个操作的 binlog，并把 binlog 写入磁盘。</li><li>执行器调用引擎的提交事务接口，引擎把刚刚写入的 redo log 改成提交（commit）状态，更新完成。</li></ol><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220720210120.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="两阶段提交" tabindex="-1"><a class="header-anchor" href="#两阶段提交" aria-hidden="true">#</a> 两阶段提交</h3><p>为什么日志需要“两阶段提交”</p><p>由于 redo log 和 binlog 是两个独立的逻辑，如果不用两阶段提交，要么就是先写完 redo log 再写 binlog，或者采用反过来的顺序。</p><ol><li><strong>先写 redo log 后写 binlog</strong>。假设在 redo log 写完，binlog 还没有写完的时候，MySQL 进程异常重启。由于我们前面说过的，redo log 写完之后，系统即使崩溃，仍然能够把数据恢复回来，所以恢复后这一行 c 的值是 1。</li></ol><ul><li>但是由于 binlog 没写完就 crash 了，这时候 binlog 里面就没有记录这个语句。因此，之后备份日志的时候，存起来的 binlog 里面就没有这条语句。</li><li>然后你会发现，如果需要用这个 binlog 来恢复临时库的话，由于这个语句的 binlog 丢失，这个临时库就会少了这一次更新，恢复出来的这一行 c 的值就是 0，与原库的值不同。</li></ul><ol start="2"><li><strong>先写 binlog 后写 redo log</strong>。如果在 binlog 写完之后 crash，由于 redo log 还没写，崩溃恢复以后这个事务无效，所以这一行 c 的值是 0。但是 binlog 里面已经记录了“把 c 从 0 改成 1”这个日志。所以，在之后用 binlog 来恢复的时候就多了一个事务出来，恢复出来的这一行 c 的值就是 1，与原库的值不同。</li></ol><p>可以看到，如果不使用“两阶段提交”，那么数据库的状态就有可能和用它的日志恢复出来的库的状态不一致。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,71),d={href:"https://book.douban.com/subject/23008813/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://time.geekbang.org/column/intro/139",target:"_blank",rel:"noopener noreferrer"};function k(h,u){const s=p("ExternalLinkIcon");return r(),t("div",null,[i,a("ul",null,[a("li",null,[a("a",d,[o("《高性能 MySQL》"),n(s)])]),a("li",null,[a("a",g,[o("MySQL 实战 45 讲"),n(s)])])])])}const L=e(c,[["render",k],["__file","01.Mysql架构.html.vue"]]);export{L as default};
