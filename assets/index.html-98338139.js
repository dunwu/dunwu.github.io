const n=JSON.parse(`{"key":"v-31dac817","path":"/pages/5da42d/","title":"Mysql 配置","lang":"zh-CN","frontmatter":{"title":"Mysql 配置","date":"2020-02-29T22:32:57.000Z","category":["数据库","关系型数据库","Mysql"],"tag":["数据库","关系型数据库","Mysql","配置"],"permalink":"/pages/5da42d/","description":"Mysql 配置 版本： 基本配置 [mysqld] # GENERAL # ------------------------------------------------------------------------------- datadir = /var/lib/mysql socket = /var/lib/mysql/mysql.sock pid_file = /var/lib/mysql/mysql.pid user = mysql port = 3306 default_storage_engine = InnoDB default_time_zone = '+8：00' character_set_server = utf8mb4 collation_server = utf8mb4_0900_ai_ci # LOG # ------------------------------------------------------------------------------- log_error = /var/log/mysql/mysql-error.log slow_query_log = 1 slow_query_log_file = /var/log/mysql/mysql-slow.log # InnoDB # ------------------------------------------------------------------------------- innodb_buffer_pool_size = &lt;value&gt; innodb_log_file_size = &lt;value&gt; innodb_file_per_table = 1 innodb_flush_method = O_DIRECT # MyIsam # ------------------------------------------------------------------------------- key_buffer_size = &lt;value&gt; # OTHER # ------------------------------------------------------------------------------- tmp_table_size = 32M max_heap_table_size = 32M max_connections = &lt;value&gt; open_files_limit = 65535 [client] socket = /var/lib/mysql/mysql.sock port = 3306","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/5da42d/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Mysql 配置"}],["meta",{"property":"og:description","content":"Mysql 配置 版本： 基本配置 [mysqld] # GENERAL # ------------------------------------------------------------------------------- datadir = /var/lib/mysql socket = /var/lib/mysql/mysql.sock pid_file = /var/lib/mysql/mysql.pid user = mysql port = 3306 default_storage_engine = InnoDB default_time_zone = '+8：00' character_set_server = utf8mb4 collation_server = utf8mb4_0900_ai_ci # LOG # ------------------------------------------------------------------------------- log_error = /var/log/mysql/mysql-error.log slow_query_log = 1 slow_query_log_file = /var/log/mysql/mysql-slow.log # InnoDB # ------------------------------------------------------------------------------- innodb_buffer_pool_size = &lt;value&gt; innodb_log_file_size = &lt;value&gt; innodb_file_per_table = 1 innodb_flush_method = O_DIRECT # MyIsam # ------------------------------------------------------------------------------- key_buffer_size = &lt;value&gt; # OTHER # ------------------------------------------------------------------------------- tmp_table_size = 32M max_heap_table_size = 32M max_connections = &lt;value&gt; open_files_limit = 65535 [client] socket = /var/lib/mysql/mysql.sock port = 3306"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T10:35:58.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"关系型数据库"}],["meta",{"property":"article:tag","content":"Mysql"}],["meta",{"property":"article:tag","content":"配置"}],["meta",{"property":"article:published_time","content":"2020-02-29T22:32:57.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T10:35:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mysql 配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-02-29T22:32:57.000Z\\",\\"dateModified\\":\\"2023-09-10T10:35:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"基本配置","slug":"基本配置","link":"#基本配置","children":[]},{"level":2,"title":"配置项说明","slug":"配置项说明","link":"#配置项说明","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694342158000,"updatedTime":1694342158000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":15.44,"words":4631},"filePathRelative":"12.数据库/03.关系型数据库/02.Mysql/21.Mysql配置.md","localizedDate":"2020年2月29日","excerpt":"<h1> Mysql 配置</h1>\\n<blockquote>\\n<p>版本：<img src=\\"https://img.shields.io/badge/mysql-8.0-blue\\" alt=\\"mysql\\" loading=\\"lazy\\"></p>\\n</blockquote>\\n<h2> 基本配置</h2>\\n<div class=\\"language-ini line-numbers-mode\\" data-ext=\\"ini\\"><pre class=\\"language-ini\\"><code><span class=\\"token section\\"><span class=\\"token punctuation\\">[</span><span class=\\"token section-name selector\\">mysqld</span><span class=\\"token punctuation\\">]</span></span>\\n<span class=\\"token comment\\"># GENERAL</span>\\n<span class=\\"token comment\\"># -------------------------------------------------------------------------------</span>\\n<span class=\\"token key attr-name\\">datadir</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">/var/lib/mysql</span>\\n<span class=\\"token key attr-name\\">socket</span>  <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">/var/lib/mysql/mysql.sock</span>\\n<span class=\\"token key attr-name\\">pid_file</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">/var/lib/mysql/mysql.pid</span>\\n<span class=\\"token key attr-name\\">user</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">mysql</span>\\n<span class=\\"token key attr-name\\">port</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">3306</span>\\n<span class=\\"token key attr-name\\">default_storage_engine</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">InnoDB</span>\\n<span class=\\"token key attr-name\\">default_time_zone</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">'<span class=\\"token inner-value\\">+8：00</span>'</span>\\n<span class=\\"token key attr-name\\">character_set_server</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">utf8mb4</span>\\n<span class=\\"token key attr-name\\">collation_server</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">utf8mb4_0900_ai_ci</span>\\n\\n<span class=\\"token comment\\"># LOG</span>\\n<span class=\\"token comment\\"># -------------------------------------------------------------------------------</span>\\n<span class=\\"token key attr-name\\">log_error</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">/var/log/mysql/mysql-error.log</span>\\n<span class=\\"token key attr-name\\">slow_query_log</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">1</span>\\n<span class=\\"token key attr-name\\">slow_query_log_file</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">/var/log/mysql/mysql-slow.log</span>\\n\\n<span class=\\"token comment\\"># InnoDB</span>\\n<span class=\\"token comment\\"># -------------------------------------------------------------------------------</span>\\n<span class=\\"token key attr-name\\">innodb_buffer_pool_size</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">&lt;value&gt;</span>\\n<span class=\\"token key attr-name\\">innodb_log_file_size</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">&lt;value&gt;</span>\\n<span class=\\"token key attr-name\\">innodb_file_per_table</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">1</span>\\n<span class=\\"token key attr-name\\">innodb_flush_method</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">O_DIRECT</span>\\n\\n<span class=\\"token comment\\"># MyIsam</span>\\n<span class=\\"token comment\\"># -------------------------------------------------------------------------------</span>\\n<span class=\\"token key attr-name\\">key_buffer_size</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">&lt;value&gt;</span>\\n\\n<span class=\\"token comment\\"># OTHER</span>\\n<span class=\\"token comment\\"># -------------------------------------------------------------------------------</span>\\n<span class=\\"token key attr-name\\">tmp_table_size</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">32M</span>\\n<span class=\\"token key attr-name\\">max_heap_table_size</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">32M</span>\\n<span class=\\"token key attr-name\\">max_connections</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">&lt;value&gt;</span>\\n<span class=\\"token key attr-name\\">open_files_limit</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">65535</span>\\n\\n<span class=\\"token section\\"><span class=\\"token punctuation\\">[</span><span class=\\"token section-name selector\\">client</span><span class=\\"token punctuation\\">]</span></span>\\n<span class=\\"token key attr-name\\">socket</span>  <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">/var/lib/mysql/mysql.sock</span>\\n<span class=\\"token key attr-name\\">port</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">3306</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
