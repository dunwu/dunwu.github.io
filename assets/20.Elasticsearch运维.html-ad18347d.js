import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as l,c as i,a as n,b as s,d as a,e as o}from"./app-1f12e18b.js";const r={},p=n("h1",{id:"elasticsearch-运维",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#elasticsearch-运维","aria-hidden":"true"},"#"),s(" Elasticsearch 运维")],-1),d={href:"https://github.com/elastic/elasticsearch",target:"_blank",rel:"noopener noreferrer"},u=n("h2",{id:"elasticsearch-安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#elasticsearch-安装","aria-hidden":"true"},"#"),s(" Elasticsearch 安装")],-1),m={href:"https://www.elastic.co/cn/downloads/elasticsearch",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,"（1）下载解压",-1),k={href:"https://www.elastic.co/cn/downloads/elasticsearch",target:"_blank",rel:"noopener noreferrer"},h=o(`<p>（2）运行</p><p>运行 <code>bin/elasticsearch</code> (Windows 系统上运行 <code>bin\\elasticsearch.bat</code> )</p><p>（3）访问</p><p>执行 <code>curl http://localhost:9200/</code> 测试服务是否启动</p><h2 id="elasticsearch-集群规划" tabindex="-1"><a class="header-anchor" href="#elasticsearch-集群规划" aria-hidden="true">#</a> Elasticsearch 集群规划</h2><p>ElasticSearch 集群需要根据业务实际情况去合理规划。</p><p>需要考虑的问题点：</p><ul><li>集群部署几个节点？</li><li>有多少个索引？</li><li>每个索引有多大数据量？</li><li>每个索引有多少个分片？</li></ul><p>一个参考规划：</p><ul><li>3 台机器，每台机器是 6 核 64G 的。</li><li>我们 es 集群的日增量数据大概是 2000 万条，每天日增量数据大概是 500MB，每月增量数据大概是 6 亿，15G。目前系统已经运行了几个月，现在 es 集群里数据总量大概是 100G 左右。</li><li>目前线上有 5 个索引（这个结合你们自己业务来，看看自己有哪些数据可以放 es 的），每个索引的数据量大概是 20G，所以这个数据量之内，我们每个索引分配的是 8 个 shard，比默认的 5 个 shard 多了 3 个 shard。</li></ul><h2 id="elasticsearch-配置" tabindex="-1"><a class="header-anchor" href="#elasticsearch-配置" aria-hidden="true">#</a> Elasticsearch 配置</h2><p>ES 的默认配置文件为 <code>config/elasticsearch.yml</code></p><p>基本配置说明如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> elasticsearch
<span class="token comment">#配置es的集群名称，默认是elasticsearch，es会自动发现在同一网段下的es，如果在同一网段下有多个集群，就可以用这个属性来区分不同的集群。</span>
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> <span class="token string">&#39;Franz Kafka&#39;</span>
<span class="token comment">#节点名，默认随机指定一个name列表中名字，该列表在es的jar包中config文件夹里name.txt文件中，其中有很多作者添加的有趣名字。</span>
<span class="token key atrule">node.master</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment">#指定该节点是否有资格被选举成为node，默认是true，es是默认集群中的第一台机器为master，如果这台机挂了就会重新选举master。</span>
<span class="token key atrule">node.data</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment">#指定该节点是否存储索引数据，默认为true。</span>
<span class="token key atrule">index.number_of_shards</span><span class="token punctuation">:</span> <span class="token number">5</span>
<span class="token comment">#设置默认索引分片个数，默认为5片。</span>
<span class="token key atrule">index.number_of_replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
<span class="token comment">#设置默认索引副本个数，默认为1个副本。</span>
<span class="token key atrule">path.conf</span><span class="token punctuation">:</span> /path/to/conf
<span class="token comment">#设置配置文件的存储路径，默认是es根目录下的config文件夹。</span>
<span class="token key atrule">path.data</span><span class="token punctuation">:</span> /path/to/data
<span class="token comment">#设置索引数据的存储路径，默认是es根目录下的data文件夹，可以设置多个存储路径，用逗号隔开，例：</span>
<span class="token comment">#path.data: /path/to/data1,/path/to/data2</span>
<span class="token key atrule">path.work</span><span class="token punctuation">:</span> /path/to/work
<span class="token comment">#设置临时文件的存储路径，默认是es根目录下的work文件夹。</span>
<span class="token key atrule">path.logs</span><span class="token punctuation">:</span> /path/to/logs
<span class="token comment">#设置日志文件的存储路径，默认是es根目录下的logs文件夹</span>
<span class="token key atrule">path.plugins</span><span class="token punctuation">:</span> /path/to/plugins
<span class="token comment">#设置插件的存放路径，默认是es根目录下的plugins文件夹</span>
<span class="token key atrule">bootstrap.mlockall</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment">#设置为true来锁住内存。因为当jvm开始swapping时es的效率会降低，所以要保证它不swap，可以把#ES_MIN_MEM和ES_MAX_MEM两个环境变量设置成同一个值，并且保证机器有足够的内存分配给es。同时也要#允许elasticsearch的进程可以锁住内存，linux下可以通过\`ulimit -l unlimited\`命令。</span>
<span class="token key atrule">network.bind_host</span><span class="token punctuation">:</span> 192.168.0.1
<span class="token comment">#设置绑定的ip地址，可以是ipv4或ipv6的，默认为0.0.0.0。</span>
<span class="token key atrule">network.publish_host</span><span class="token punctuation">:</span> 192.168.0.1
<span class="token comment">#设置其它节点和该节点交互的ip地址，如果不设置它会自动判断，值必须是个真实的ip地址。</span>
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> 192.168.0.1
<span class="token comment">#这个参数是用来同时设置bind_host和publish_host上面两个参数。</span>
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9300</span>
<span class="token comment">#设置节点间交互的tcp端口，默认是9300。</span>
<span class="token key atrule">transport.tcp.compress</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment">#设置是否压缩tcp传输时的数据，默认为false，不压缩。</span>
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9200</span>
<span class="token comment">#设置对外服务的http端口，默认为9200。</span>
<span class="token key atrule">http.max_content_length</span><span class="token punctuation">:</span> 100mb
<span class="token comment">#设置内容的最大容量，默认100mb</span>
<span class="token key atrule">http.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token comment">#是否使用http协议对外提供服务，默认为true，开启。</span>
<span class="token key atrule">gateway.type</span><span class="token punctuation">:</span> local
<span class="token comment">#gateway的类型，默认为local即为本地文件系统，可以设置为本地文件系统，分布式文件系统，hadoop的#HDFS，和amazon的s3服务器，其它文件系统的设置方法下次再详细说。</span>
<span class="token key atrule">gateway.recover_after_nodes</span><span class="token punctuation">:</span> <span class="token number">1</span>
<span class="token comment">#设置集群中N个节点启动时进行数据恢复，默认为1。</span>
<span class="token key atrule">gateway.recover_after_time</span><span class="token punctuation">:</span> 5m
<span class="token comment">#设置初始化数据恢复进程的超时时间，默认是5分钟。</span>
<span class="token key atrule">gateway.expected_nodes</span><span class="token punctuation">:</span> <span class="token number">2</span>
<span class="token comment">#设置这个集群中节点的数量，默认为2，一旦这N个节点启动，就会立即进行数据恢复。</span>
<span class="token key atrule">cluster.routing.allocation.node_initial_primaries_recoveries</span><span class="token punctuation">:</span> <span class="token number">4</span>
<span class="token comment">#初始化数据恢复时，并发恢复线程的个数，默认为4。</span>
<span class="token key atrule">cluster.routing.allocation.node_concurrent_recoveries</span><span class="token punctuation">:</span> <span class="token number">2</span>
<span class="token comment">#添加删除节点或负载均衡时并发恢复线程的个数，默认为4。</span>
<span class="token key atrule">indices.recovery.max_size_per_sec</span><span class="token punctuation">:</span> <span class="token number">0</span>
<span class="token comment">#设置数据恢复时限制的带宽，如入100mb，默认为0，即无限制。</span>
<span class="token key atrule">indices.recovery.concurrent_streams</span><span class="token punctuation">:</span> <span class="token number">5</span>
<span class="token comment">#设置这个参数来限制从其它分片恢复数据时最大同时打开并发流的个数，默认为5。</span>
<span class="token key atrule">discovery.zen.minimum_master_nodes</span><span class="token punctuation">:</span> <span class="token number">1</span>
<span class="token comment">#设置这个参数来保证集群中的节点可以知道其它N个有master资格的节点。默认为1，对于大的集群来说，可以设置大一点的值（2-4）</span>
<span class="token key atrule">discovery.zen.ping.timeout</span><span class="token punctuation">:</span> 3s
<span class="token comment">#设置集群中自动发现其它节点时ping连接超时时间，默认为3秒，对于比较差的网络环境可以高点的值来防止自动发现时出错。</span>
<span class="token key atrule">discovery.zen.ping.multicast.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token comment">#设置是否打开多播发现节点，默认是true。</span>
<span class="token key atrule">discovery.zen.ping.unicast.hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;host1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;host2:port&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;host3[portX-portY]&#39;</span><span class="token punctuation">]</span>
<span class="token comment">#设置集群中master节点的初始列表，可以通过这些节点来自动发现新加入集群的节点。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="elasticsearch-faq" tabindex="-1"><a class="header-anchor" href="#elasticsearch-faq" aria-hidden="true">#</a> Elasticsearch FAQ</h2><h3 id="elasticsearch-不允许以-root-权限来运行" tabindex="-1"><a class="header-anchor" href="#elasticsearch-不允许以-root-权限来运行" aria-hidden="true">#</a> elasticsearch 不允许以 root 权限来运行</h3><p>**问题：**在 Linux 环境中，elasticsearch 不允许以 root 权限来运行。</p><p>如果以 root 身份运行 elasticsearch，会提示这样的错误：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>can not run elasticsearch as root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>**解决方法：**使用非 root 权限账号运行 elasticsearch</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建用户组</span>
<span class="token function">groupadd</span> elk
<span class="token comment"># 创建新用户，-g elk 设置其用户组为 elk，-p elk 设置其密码为 elk</span>
<span class="token function">useradd</span> elk <span class="token parameter variable">-g</span> elk <span class="token parameter variable">-p</span> elk
<span class="token comment"># 更改 /opt 文件夹及内部文件的所属用户及组为 elk:elk</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> elk:elk /opt <span class="token comment"># 假设你的 elasticsearch 安装在 opt 目录下</span>
<span class="token comment"># 切换账号</span>
<span class="token function">su</span> elk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vm-max-map-count-不低于-262144" tabindex="-1"><a class="header-anchor" href="#vm-max-map-count-不低于-262144" aria-hidden="true">#</a> vm.max_map_count 不低于 262144</h3><p><strong>问题：</strong><code>vm.max_map_count</code> 表示虚拟内存大小，它是一个内核参数。elasticsearch 默认要求 <code>vm.max_map_count</code> 不低于 262144。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>解决方法：</strong></p><p>你可以执行以下命令，设置 <code>vm.max_map_count</code> ，但是重启后又会恢复为原值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sysctl -w vm.max_map_count=262144
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>持久性的做法是在 <code>/etc/sysctl.conf</code> 文件中修改 <code>vm.max_map_count</code> 参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo &quot;vm.max_map_count=262144&quot; &gt; /etc/sysctl.conf
sysctl -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong></p><p>如果运行环境为 docker 容器，可能会限制执行 sysctl 来修改内核参数。</p><p>这种情况下，你只能选择直接修改宿主机上的参数了。</p></blockquote><h3 id="nofile-不低于-65536" tabindex="-1"><a class="header-anchor" href="#nofile-不低于-65536" aria-hidden="true">#</a> nofile 不低于 65536</h3><p><strong>问题：</strong> <code>nofile</code> 表示进程允许打开的最大文件数。elasticsearch 进程要求可以打开的最大文件数不低于 65536。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>max file descriptors [4096] for elasticsearch process is too low, increase to at least [65536]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>解决方法：</strong></p><p>在 <code>/etc/security/limits.conf</code> 文件中修改 <code>nofile</code> 参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo &quot;* soft nofile 65536&quot; &gt; /etc/security/limits.conf
echo &quot;* hard nofile 131072&quot; &gt; /etc/security/limits.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nproc-不低于-2048" tabindex="-1"><a class="header-anchor" href="#nproc-不低于-2048" aria-hidden="true">#</a> nproc 不低于 2048</h3><p><strong>问题：</strong> <code>nproc</code> 表示最大线程数。elasticsearch 要求最大线程数不低于 2048。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>max number of threads [1024] for user [user] is too low, increase to at least [2048]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>解决方法：</strong></p><p>在 <code>/etc/security/limits.conf</code> 文件中修改 <code>nproc</code> 参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo &quot;* soft nproc 2048&quot; &gt; /etc/security/limits.conf
echo &quot;* hard nproc 4096&quot; &gt; /etc/security/limits.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,43),b={href:"https://www.elastic.co/cn/downloads/elasticsearch",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/rpm.html#rpm",target:"_blank",rel:"noopener noreferrer"},_={href:"http://siye1982.github.io/2015/09/17/es-optimize/",target:"_blank",rel:"noopener noreferrer"};function f(x,y){const e=c("ExternalLinkIcon");return l(),i("div",null,[p,n("blockquote",null,[n("p",null,[n("a",d,[s("Elasticsearch"),a(e)]),s(" 是一个分布式、RESTful 风格的搜索和数据分析引擎，能够解决不断涌现出的各种用例。 作为 Elastic Stack 的核心，它集中存储您的数据，帮助您发现意料之中以及意料之外的情况。")])]),u,n("blockquote",null,[n("p",null,[n("a",m,[s("Elasticsearch 官方下载安装说明"),a(e)])])]),v,n("p",null,[s("访问 "),n("a",k,[s("官方下载地址"),a(e)]),s(" ，选择需要的版本，下载解压到本地。")]),h,n("ul",null,[n("li",null,[n("a",b,[s("Elasticsearch 官方下载安装说明"),a(e)])]),n("li",null,[n("a",g,[s("Install Elasticsearch with RPM"),a(e)])]),n("li",null,[n("a",_,[s("Elasticsearch 使用积累"),a(e)])])])])}const q=t(r,[["render",f],["__file","20.Elasticsearch运维.html.vue"]]);export{q as default};
