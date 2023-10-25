import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c as r,a,b as n,d as e,e as t}from"./app-2811837c.js";const c={},i=t('<h1 id="mongodb-运维" tabindex="-1"><a class="header-anchor" href="#mongodb-运维" aria-hidden="true">#</a> MongoDB 运维</h1><h2 id="mongodb-安装" tabindex="-1"><a class="header-anchor" href="#mongodb-安装" aria-hidden="true">#</a> MongoDB 安装</h2><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3><p>（1）下载并解压到本地</p>',4),d={href:"https://www.mongodb.com/try/download/community",target:"_blank",rel:"noopener noreferrer"},u=a("strong",null,"官方下载地址",-1),m=t(`<p>（2）创建数据目录</p><p>MongoDB 将数据目录存储在 db 目录下。但是这个数据目录不会主动创建，我们在安装完成后需要创建它。</p><p>例如：<code>D:\\Tools\\Server\\mongodb\\mongodb-4.4.0\\data\\db</code></p><p>（3）运行 MongoDB 服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mongod <span class="token parameter variable">--dbpath</span> D:<span class="token punctuation">\\</span>Tools<span class="token punctuation">\\</span>Server<span class="token punctuation">\\</span>mongodb<span class="token punctuation">\\</span>mongodb-4.4.0<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（4）客户端连接 MongoDB</p><p>可以在命令窗口中运行 mongo.exe 命令即可连接上 MongoDB</p><p>（5）配置 MongoDB 服务</p><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h3><p>（1）使用安装包安装</p><p>安装前我们需要安装各个 Linux 平台依赖包。</p><p><strong>Red Hat/CentOS：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum install libcurl openssl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Ubuntu 18.04 LTS (&quot;Bionic&quot;)/Debian 10 &quot;Buster&quot;：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get install libcurl4 openssl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Ubuntu 16.04 LTS (&quot;Xenial&quot;)/Debian 9 &quot;Stretch&quot;：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get install libcurl3 openssl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（2）创建数据目录</p><p>默认情况下 MongoDB 启动后会初始化以下两个目录：</p><ul><li>数据存储目录：/var/lib/mongodb</li><li>日志文件目录：/var/log/mongodb</li></ul><p>我们在启动前可以先创建这两个目录并设置当前用户有读写权限：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /var/lib/mongo
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /var/log/mongodb
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">whoami</span><span class="token variable">\`</span></span> /var/lib/mongo     <span class="token comment"># 设置权限</span>
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">whoami</span><span class="token variable">\`</span></span> /var/log/mongodb   <span class="token comment"># 设置权限</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）运行 MongoDB 服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mongod <span class="token parameter variable">--dbpath</span> /var/lib/mongo <span class="token parameter variable">--logpath</span> /var/log/mongodb/mongod.log <span class="token parameter variable">--fork</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打开 /var/log/mongodb/mongod.log 文件看到以下信息，说明启动成功。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># tail -10f /var/log/mongodb/mongod.log</span>
<span class="token number">2020</span>-07-09T12:20:17.391+0800 I  NETWORK  <span class="token punctuation">[</span>listener<span class="token punctuation">]</span> Listening on /tmp/mongodb-27017.sock
<span class="token number">2020</span>-07-09T12:20:17.392+0800 I  NETWORK  <span class="token punctuation">[</span>listener<span class="token punctuation">]</span> Listening on <span class="token number">127.0</span>.0.1
<span class="token number">2020</span>-07-09T12:20:17.392+0800 I  NETWORK  <span class="token punctuation">[</span>listener<span class="token punctuation">]</span> waiting <span class="token keyword">for</span> connections on port <span class="token number">27017</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）客户端连接 MongoDB</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/mongodb4/bin
./mongo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,28),b={href:"https://github.com/dunwu/linux-tutorial/tree/master/codes/linux/soft",target:"_blank",rel:"noopener noreferrer"},v=t(`<h3 id="设置用户名、密码" tabindex="-1"><a class="header-anchor" href="#设置用户名、密码" aria-hidden="true">#</a> 设置用户名、密码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> use admin
switched to db admin
<span class="token operator">&gt;</span> db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;user&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;root&quot;</span>,<span class="token string">&quot;pwd&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;root&quot;</span>,<span class="token string">&quot;roles&quot;</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;role&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;userAdminAnyDatabase&quot;</span>,<span class="token string">&quot;db&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
Successfully added user: <span class="token punctuation">{</span>
        <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;root&quot;</span>,
        <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                        <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;userAdminAnyDatabase&quot;</span>,
                        <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;admin&quot;</span>
                <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="备份和恢复" tabindex="-1"><a class="header-anchor" href="#备份和恢复" aria-hidden="true">#</a> 备份和恢复</h2><h3 id="数据备份" tabindex="-1"><a class="header-anchor" href="#数据备份" aria-hidden="true">#</a> 数据备份</h3><p>在 Mongodb 中，使用 <code>mongodump</code> 命令来备份 MongoDB 数据。该命令可以导出所有数据到指定目录中。</p><p><code>mongodump</code> 命令可以通过参数指定导出的数据量级转存的服务器。</p><p>mongodump 命令语法如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mongodump -h dbhost -d dbname -o dbdirectory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>-h：MongDB 所在服务器地址，例如：127.0.0.1，当然也可以指定端口号：127.0.0.1:27017</p></li><li><p>-d：需要备份的数据库实例，例如：test</p></li><li><p>-o：备份的数据存放位置，例如：c:\\data\\dump，当然该目录需要提前建立，在备份完成后，系统自动在 dump 目录下建立一个 test 目录，这个目录里面存放该数据库实例的备份数据。</p></li></ul><p><code>mongodump</code> 命令可选参数列表如下所示：</p>`,10),k=a("thead",null,[a("tr",null,[a("th",{style:{"text-align":"left"}},"语法"),a("th",{style:{"text-align":"left"}},"描述"),a("th",{style:{"text-align":"left"}},"实例")])],-1),g=a("td",{style:{"text-align":"left"}},"mongodump --host HOST_NAME --port PORT_NUMBER",-1),h=a("td",{style:{"text-align":"left"}},"该命令将备份所有 MongoDB 数据",-1),x={style:{"text-align":"left"}},f={href:"http://runoob.com",target:"_blank",rel:"noopener noreferrer"},_=a("tr",null,[a("td",{style:{"text-align":"left"}},"mongodump --dbpath DB_PATH --out BACKUP_DIRECTORY"),a("td",{style:{"text-align":"left"}}),a("td",{style:{"text-align":"left"}},"mongodump --dbpath /data/db/ --out /data/backup/")],-1),q=a("tr",null,[a("td",{style:{"text-align":"left"}},"mongodump --collection COLLECTION --db DB_NAME"),a("td",{style:{"text-align":"left"}},"该命令将备份指定数据库的集合。"),a("td",{style:{"text-align":"left"}},"mongodump --collection mycol --db test")],-1),B=t(`<p>【示例】备份全量数据</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ mongodump <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">--port</span> <span class="token number">27017</span> <span class="token parameter variable">-o</span> test2
<span class="token punctuation">..</span>.
<span class="token number">2020</span>-09-11T11:55:58.086+0800    <span class="token keyword">done</span> dumping test.company <span class="token punctuation">(</span><span class="token number">18801</span> documents<span class="token punctuation">)</span>
<span class="token number">2020</span>-09-11T11:56:00.725+0800    <span class="token punctuation">[</span><span class="token comment">#############...........]  test.people  559101/1000000  (55.9%)</span>
<span class="token number">2020</span>-09-11T11:56:03.725+0800    <span class="token punctuation">[</span><span class="token comment">###################.....]  test.people  829496/1000000  (82.9%)</span>
<span class="token number">2020</span>-09-11T11:56:06.725+0800    <span class="token punctuation">[</span><span class="token comment">#####################...]  test.people  884614/1000000  (88.5%)</span>
<span class="token number">2020</span>-09-11T11:56:08.088+0800    <span class="token punctuation">[</span><span class="token comment">########################]  test.people  1000000/1000000  (100.0%)</span>
<span class="token number">2020</span>-09-11T11:56:08.350+0800    <span class="token keyword">done</span> dumping test.people <span class="token punctuation">(</span><span class="token number">1000000</span> documents<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【示例】备份指定数据库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mongodump <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">--port</span> <span class="token number">27017</span> <span class="token parameter variable">-d</span> admin <span class="token parameter variable">-o</span> test3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="数据恢复" tabindex="-1"><a class="header-anchor" href="#数据恢复" aria-hidden="true">#</a> 数据恢复</h3><p>mongodb 使用 <code>mongorestore</code> 命令来恢复备份的数据。</p><p><code>mongorestore</code> 命令语法如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> mongorestore <span class="token parameter variable">-h</span> <span class="token operator">&lt;</span>hostname<span class="token operator">&gt;</span><span class="token operator">&lt;</span>:port<span class="token operator">&gt;</span> <span class="token parameter variable">-d</span> dbname <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p><code>--host &lt;:port&gt;</code>, <code>-h &lt;:port&gt;</code>：MongoDB 所在服务器地址，默认为： localhost:27017</p></li><li><p><code>--db</code> , <code>-d</code> ：需要恢复的数据库实例，例如：test，当然这个名称也可以和备份时候的不一样，比如 test2</p></li><li><p><code>--drop</code>：恢复的时候，先删除当前数据，然后恢复备份的数据。就是说，恢复后，备份后添加修改的数据都会被删除，慎用哦！</p></li><li><p><code>&lt;path&gt;</code>：mongorestore 最后的一个参数，设置备份数据所在位置，例如：c:\\data\\dump\\test。你不能同时指定 <code>&lt;path&gt;</code> 和 <code>--dir</code> 选项，<code>--dir</code> 也可以设置备份目录。</p></li><li><p><code>--dir</code>：指定备份的目录。你不能同时指定 <code>&lt;path&gt;</code> 和 <code>--dir</code> 选项。</p></li></ul><p>【示例】</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ mongorestore <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">--port</span> <span class="token number">27017</span> <span class="token parameter variable">-d</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">--dir</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">--drop</span>
<span class="token punctuation">..</span>.
<span class="token number">2020</span>-09-11T11:46:16.053+0800    finished restoring test.tweets <span class="token punctuation">(</span><span class="token number">966</span> documents, <span class="token number">0</span> failures<span class="token punctuation">)</span>
<span class="token number">2020</span>-09-11T11:46:18.256+0800    <span class="token punctuation">[</span><span class="token comment">###.....................]  test.people  164MB/1.03GB  (15.6%)</span>
<span class="token number">2020</span>-09-11T11:46:21.255+0800    <span class="token punctuation">[</span><span class="token comment">########................]  test.people  364MB/1.03GB  (34.6%)</span>
<span class="token number">2020</span>-09-11T11:46:24.256+0800    <span class="token punctuation">[</span><span class="token comment">############............]  test.people  558MB/1.03GB  (53.0%)</span>
<span class="token number">2020</span>-09-11T11:46:27.255+0800    <span class="token punctuation">[</span><span class="token comment">###############.........]  test.people  700MB/1.03GB  (66.5%)</span>
<span class="token number">2020</span>-09-11T11:46:30.257+0800    <span class="token punctuation">[</span><span class="token comment">###################.....]  test.people  846MB/1.03GB  (80.3%)</span>
<span class="token number">2020</span>-09-11T11:46:33.255+0800    <span class="token punctuation">[</span><span class="token comment">######################..]  test.people  990MB/1.03GB  (94.0%)</span>
<span class="token number">2020</span>-09-11T11:46:34.542+0800    <span class="token punctuation">[</span><span class="token comment">########################]  test.people  1.03GB/1.03GB  (100.0%)</span>
<span class="token number">2020</span>-09-11T11:46:34.543+0800    no indexes to restore
<span class="token number">2020</span>-09-11T11:46:34.543+0800    finished restoring test.people <span class="token punctuation">(</span><span class="token number">1000000</span> documents, <span class="token number">0</span> failures<span class="token punctuation">)</span>
<span class="token number">2020</span>-09-11T11:46:34.544+0800    <span class="token number">1000966</span> document<span class="token punctuation">(</span>s<span class="token punctuation">)</span> restored successfully. <span class="token number">0</span> document<span class="token punctuation">(</span>s<span class="token punctuation">)</span> failed to restore.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导入导出" tabindex="-1"><a class="header-anchor" href="#导入导出" aria-hidden="true">#</a> 导入导出</h2><p><code>mongoimport</code> 和 <code>mongoexport</code> 并不能可靠地保存所有的富文本 BSON 数据类型，因为 JSON 仅能代表一种 BSON 支持的子集类型。因此，数据用这些工具导出导入或许会丢失一些精确程度。</p><h3 id="导入操作" tabindex="-1"><a class="header-anchor" href="#导入操作" aria-hidden="true">#</a> 导入操作</h3><p>在 MongoDB 中，使用 <code>mongoimport</code> 来导入数据。 默认情况下，<code>mongoimport</code> 会将数据导入到本地主机端口 27017 上的 MongoDB 实例中。要将数据导入在其他主机或端口上运行的 MongoDB 实例中，请通过包含 <code>--host</code> 和 <code>--port</code> 选项来指定主机名或端口。 使用 <code>--drop</code> 选项删除集合（如果已经存在）。 这样可以确保该集合仅包含您要导入的数据。</p><p>语法格式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mongoimport <span class="token parameter variable">-h</span> IP <span class="token parameter variable">--port</span> 端口 <span class="token parameter variable">-u</span> 用户名 <span class="token parameter variable">-p</span> 密码 <span class="token parameter variable">-d</span> 数据库 <span class="token parameter variable">-c</span> 表名 <span class="token parameter variable">--type</span> 类型 <span class="token parameter variable">--headerline</span> <span class="token parameter variable">--upsert</span> <span class="token parameter variable">--drop</span> 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>【示例】导入表数据</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ mongoimport <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">--port</span> <span class="token number">27017</span> <span class="token parameter variable">-d</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-c</span> book <span class="token parameter variable">--drop</span> test/book.dat
<span class="token number">2020</span>-09-11T10:53:56.359+0800    connected to: mongodb://127.0.0.1:27017/
<span class="token number">2020</span>-09-11T10:53:56.372+0800    dropping: test.book
<span class="token number">2020</span>-09-11T10:53:56.628+0800    <span class="token number">431</span> document<span class="token punctuation">(</span>s<span class="token punctuation">)</span> imported successfully. <span class="token number">0</span> document<span class="token punctuation">(</span>s<span class="token punctuation">)</span> failed to import.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【示例】从 json 文件中导入表数据</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ mongoimport <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">--port</span> <span class="token number">27017</span> <span class="token parameter variable">-d</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-c</span> student <span class="token parameter variable">--upsert</span> test/student.json
<span class="token number">2020</span>-09-11T11:02:55.907+0800    connected to: mongodb://127.0.0.1:27017/
<span class="token number">2020</span>-09-11T11:02:56.068+0800    <span class="token number">200</span> document<span class="token punctuation">(</span>s<span class="token punctuation">)</span> imported successfully. <span class="token number">0</span> document<span class="token punctuation">(</span>s<span class="token punctuation">)</span> failed to import.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【示例】从 csv 文件中导入表数据</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ mongoimport <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">--port</span> <span class="token number">27017</span> <span class="token parameter variable">-d</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-c</span> product <span class="token parameter variable">--type</span> csv <span class="token parameter variable">--headerline</span> test/product.csv
<span class="token number">2020</span>-09-11T11:07:49.788+0800    connected to: mongodb://127.0.0.1:27017/
<span class="token number">2020</span>-09-11T11:07:51.051+0800    <span class="token number">11</span> document<span class="token punctuation">(</span>s<span class="token punctuation">)</span> imported successfully. <span class="token number">0</span> document<span class="token punctuation">(</span>s<span class="token punctuation">)</span> failed to import.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【示例】导入部分表字段数据</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ mongoimport <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">--port</span> <span class="token number">27017</span> <span class="token parameter variable">-d</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-c</span> product <span class="token parameter variable">--type</span> json <span class="token parameter variable">--upsertFields</span> name,price test/product.json
<span class="token number">2020</span>-09-11T11:14:05.410+0800    connected to: mongodb://127.0.0.1:27017/
<span class="token number">2020</span>-09-11T11:14:05.612+0800    <span class="token number">11</span> document<span class="token punctuation">(</span>s<span class="token punctuation">)</span> imported successfully. <span class="token number">0</span> document<span class="token punctuation">(</span>s<span class="token punctuation">)</span> failed to import.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导出操作" tabindex="-1"><a class="header-anchor" href="#导出操作" aria-hidden="true">#</a> 导出操作</h3><p>语法格式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mongoexport <span class="token parameter variable">-h</span> <span class="token operator">&lt;</span>IP<span class="token operator">&gt;</span> <span class="token parameter variable">--port</span> <span class="token operator">&lt;</span>端口<span class="token operator">&gt;</span> <span class="token parameter variable">-u</span> <span class="token operator">&lt;</span>用户名<span class="token operator">&gt;</span> <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>密码<span class="token operator">&gt;</span> <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>数据库<span class="token operator">&gt;</span> <span class="token parameter variable">-c</span> <span class="token operator">&lt;</span>表名<span class="token operator">&gt;</span> <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>字段<span class="token operator">&gt;</span> <span class="token parameter variable">-q</span> <span class="token operator">&lt;</span>条件导出<span class="token operator">&gt;</span> <span class="token parameter variable">--csv</span> <span class="token parameter variable">-o</span> <span class="token operator">&lt;</span>文件名<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>-f</code>：导出指字段，以逗号分割，<code>-f name,email,age</code> 导出 name,email,age 这三个字段</li><li><code>-q</code>：可以根查询条件导出，<code>-q &#39;{ &quot;uid&quot; : &quot;100&quot; }&#39;</code> 导出 uid 为 100 的数据</li><li><code>--csv</code>：表示导出的文件格式为 csv 的，这个比较有用，因为大部分的关系型数据库都是支持 csv，在这里有共同点</li></ul><p>【示例】导出整张表</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ mongoexport <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">--port</span> <span class="token number">27017</span> <span class="token parameter variable">-d</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-c</span> product <span class="token parameter variable">-o</span> test/product.dat
<span class="token number">2020</span>-09-11T10:44:23.161+0800    connected to: mongodb://127.0.0.1:27017/
<span class="token number">2020</span>-09-11T10:44:23.177+0800    exported <span class="token number">11</span> records
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【示例】导出表到 json 文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ mongoexport <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">--port</span> <span class="token number">27017</span> <span class="token parameter variable">-d</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-c</span> product <span class="token parameter variable">--type</span> json <span class="token parameter variable">-o</span> test/product.json
<span class="token number">2020</span>-09-11T10:49:52.735+0800    connected to: mongodb://127.0.0.1:27017/
<span class="token number">2020</span>-09-11T10:49:52.750+0800    exported <span class="token number">11</span> records
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【示例】导出表中部分字段到 csv 文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ mongoexport <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">--port</span> <span class="token number">27017</span> <span class="token parameter variable">-d</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-c</span> product <span class="token parameter variable">--type</span> csv <span class="token parameter variable">-f</span> name,price <span class="token parameter variable">-o</span> test/product.csv
<span class="token number">2020</span>-09-11T10:47:33.160+0800    connected to: mongodb://127.0.0.1:27017/
<span class="token number">2020</span>-09-11T10:47:33.176+0800    exported <span class="token number">11</span> records
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,36),T={href:"https://www.mongodb.com/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/mongodb/mongo",target:"_blank",rel:"noopener noreferrer"},M={href:"https://university.mongodb.com/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://www.runoob.com/mongodb/mongodb-tutorial.html",target:"_blank",rel:"noopener noreferrer"};function w(N,O){const s=p("ExternalLinkIcon");return l(),r("div",null,[i,a("p",null,[n("进入官网下载地址："),a("a",d,[u,e(s)]),n(" ，选择合适的版本下载。")]),m,a("blockquote",null,[a("p",null,[a("a",b,[n("Linux 安装脚本"),e(s)])])]),v,a("table",null,[k,a("tbody",null,[a("tr",null,[g,h,a("td",x,[n("mongodump --host "),a("a",f,[n("runoob.com"),e(s)]),n(" --port 27017")])]),_,q])]),B,a("ul",null,[a("li",null,[a("a",T,[n("MongoDB 官网"),e(s)])]),a("li",null,[a("a",y,[n("MongoDB Github"),e(s)])]),a("li",null,[a("a",M,[n("MongoDB 官方免费教程"),e(s)])]),a("li",null,[a("a",D,[n("MongoDB 教程"),e(s)])])])])}const L=o(c,[["render",w],["__file","20.MongoDB运维.html.vue"]]);export{L as default};
