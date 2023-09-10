import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as t,c,a as n,b as a,d as e,e as p}from"./app-afc5da4f.js";const o={},v=p(`<h1 id="mysql-配置" tabindex="-1"><a class="header-anchor" href="#mysql-配置" aria-hidden="true">#</a> Mysql 配置</h1><blockquote><p>版本：<img src="https://img.shields.io/badge/mysql-8.0-blue" alt="mysql" loading="lazy"></p></blockquote><h2 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h2><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld</span><span class="token punctuation">]</span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项说明" tabindex="-1"><a class="header-anchor" href="#配置项说明" aria-hidden="true">#</a> 配置项说明</h2><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">client</span><span class="token punctuation">]</span></span>
<span class="token comment"># 服务端口号，默认 3306</span>
<span class="token key attr-name">port</span> <span class="token punctuation">=</span> <span class="token value attr-value">3306</span>

<span class="token comment"># socket 文件</span>
<span class="token key attr-name">socket</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/lib/mysql/mysql.sock</span>



<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld</span><span class="token punctuation">]</span></span>

<span class="token comment"># GENERAL</span>
<span class="token comment"># -------------------------------------------------------------------------------</span>

<span class="token comment"># socket 文件</span>
<span class="token key attr-name">socket</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/lib/mysql/mysql.sock</span>

<span class="token comment"># PID 文件</span>
<span class="token key attr-name">pid_file</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/lib/mysql/mysql.pid</span>

<span class="token comment"># 启动 mysql 服务进程的用户</span>
<span class="token key attr-name">user</span> <span class="token punctuation">=</span> <span class="token value attr-value">mysql</span>

<span class="token comment"># 服务端口号，默认 3306</span>
<span class="token key attr-name">port</span> <span class="token punctuation">=</span> <span class="token value attr-value">3306</span>

<span class="token comment"># 默认时区</span>
<span class="token key attr-name">default_time_zone</span> <span class="token punctuation">=</span> <span class="token value attr-value">&#39;<span class="token inner-value">+8：00</span>&#39;</span>

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



<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqldump</span><span class="token punctuation">]</span></span>

<span class="token comment"># quick 选项强制 mysqldump 从服务器查询取得记录直接输出而不是取得所有记录后将它们缓存到内存中</span>
quick

<span class="token key attr-name">max_allowed_packet</span> <span class="token punctuation">=</span> <span class="token value attr-value">16M</span>



<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysql</span><span class="token punctuation">]</span></span>

<span class="token comment"># mysql 命令行工具不使用自动补全功能，建议还是改为</span>
<span class="token comment"># no-auto-rehash</span>
auto-rehash

<span class="token comment"># socket 文件</span>
<span class="token key attr-name">socket</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/lib/mysql/mysql.sock</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,7),m={href:"https://item.jd.com/11220393.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.jianshu.com/p/5f39c486561b",target:"_blank",rel:"noopener noreferrer"};function u(r,k){const s=i("ExternalLinkIcon");return t(),c("div",null,[v,n("ul",null,[n("li",null,[n("a",m,[a("《高性能 MySQL》"),e(s)])]),n("li",null,[n("a",d,[a("Mysql 配置文件/etc/my.cnf 解析"),e(s)])])])])}const y=l(o,[["render",u],["__file","index.html.vue"]]);export{y as default};
