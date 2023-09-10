import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as s,c as n,a as e,b as t,d as o,e as d}from"./app-afc5da4f.js";const i={},l=e("h1",{id:"elasticsearch-快速入门",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#elasticsearch-快速入门","aria-hidden":"true"},"#"),t(" Elasticsearch 快速入门")],-1),h={href:"https://github.com/elastic/elasticsearch",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/elastic/elasticsearch",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/apache/lucene-solr",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,[e("em",null,"以下简称 ES"),t("。")],-1),f=e("h2",{id:"elasticsearch-简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#elasticsearch-简介","aria-hidden":"true"},"#"),t(" Elasticsearch 简介")],-1),m=e("h3",{id:"什么是-elasticsearch",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#什么是-elasticsearch","aria-hidden":"true"},"#"),t(" 什么是 Elasticsearch")],-1),b={href:"https://github.com/elastic/elasticsearch",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/elastic/elasticsearch",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/apache/lucene-solr",target:"_blank",rel:"noopener noreferrer"},v=d(`<p>ElasticSearch 可以视为一个文档存储，它<strong>将复杂数据结构序列化为 JSON 存储</strong>。</p><p><strong>ElasticSearch 是近乎于实时的全文搜素</strong>，这是指：</p><ul><li>从写入数据到数据可以被搜索，存在较小的延迟（大概是 1s）</li><li>基于 ES 执行搜索和分析可以达到秒级</li></ul><h3 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念" aria-hidden="true">#</a> 核心概念</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>index -&gt; type -&gt; mapping -&gt; document -&gt; field
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="cluster" tabindex="-1"><a class="header-anchor" href="#cluster" aria-hidden="true">#</a> Cluster</h4><p>集群包含多个节点，每个节点属于哪个集群都是通过一个配置来决定的，对于中小型应用来说，刚开始一个集群就一个节点很正常。</p><h4 id="node" tabindex="-1"><a class="header-anchor" href="#node" aria-hidden="true">#</a> Node</h4><p>Node 是集群中的一个节点，节点也有一个名称，默认是随机分配的。默认节点会去加入一个名称为 <code>elasticsearch</code> 的集群。如果直接启动一堆节点，那么它们会自动组成一个 elasticsearch 集群，当然一个节点也可以组成 elasticsearch 集群。</p><h4 id="index" tabindex="-1"><a class="header-anchor" href="#index" aria-hidden="true">#</a> Index</h4><p><strong>可以认为是文档（document）的优化集合。</strong></p><p>ES 会为所有字段建立索引，经过处理后写入一个反向索引（Inverted Index）。查找数据的时候，直接查找该索引。</p><p>所以，ES 数据管理的顶层单位就叫做 Index（索引）。它是单个数据库的同义词。每个 Index （即数据库）的名字必须是小写。</p><h4 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> Type</h4><p>每个索引里可以有一个或者多个类型（type）。<code>类型（type）</code> 是 index 的一个逻辑分类。</p>`,15),k=e("code",null,"id",-1),y={href:"https://www.elastic.co/guide/en/elasticsearch/guide/current/mapping.html",target:"_blank",rel:"noopener noreferrer"},E=e("code",null,"products",-1),w=e("code",null,"logs",-1),I={href:"https://www.elastic.co/blog/index-type-parent-child-join-now-future-in-elasticsearch",target:"_blank",rel:"noopener noreferrer"},q=d(`<h4 id="document" tabindex="-1"><a class="header-anchor" href="#document" aria-hidden="true">#</a> Document</h4><p>Index 里面单条的记录称为 Document（文档）。许多条 Document 构成了一个 Index。</p><p>每个 <strong><code>文档（document）</code></strong> 都是字段（field）的集合。</p><p>Document 使用 JSON 格式表示，下面是一个例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
<span class="token string-property property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
<span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;工程师&quot;</span><span class="token punctuation">,</span>
<span class="token string-property property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;数据库管理&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同一个 Index 里面的 Document，不要求有相同的结构（scheme），但是最好保持相同，这样有利于提高搜索效率。</p><h4 id="field" tabindex="-1"><a class="header-anchor" href="#field" aria-hidden="true">#</a> Field</h4><p><strong><code>字段（field）</code></strong> 是包含数据的键值对。</p><p>默认情况下，Elasticsearch 对每个字段中的所有数据建立索引，并且每个索引字段都具有专用的优化数据结构。</p><h4 id="shard" tabindex="-1"><a class="header-anchor" href="#shard" aria-hidden="true">#</a> Shard</h4><p>当单台机器不足以存储大量数据时，Elasticsearch 可以将一个索引中的数据切分为多个 <strong><code>分片（shard）</code></strong> 。 <strong><code>分片（shard）</code></strong> 分布在多台服务器上存储。有了 shard 就可以横向扩展，存储更多数据，让搜索和分析等操作分布到多台服务器上去执行，提升吞吐量和性能。每个 shard 都是一个 lucene index。</p><h4 id="replica" tabindex="-1"><a class="header-anchor" href="#replica" aria-hidden="true">#</a> Replica</h4><p>任何一个服务器随时可能故障或宕机，此时 shard 可能就会丢失，因此可以为每个 shard 创建多个 <strong><code>副本（replica）</code></strong>。replica 可以在 shard 故障时提供备用服务，保证数据不丢失，多个 replica 还可以提升搜索操作的吞吐量和性能。primary shard（建立索引时一次设置，不能修改，默认 5 个），replica shard（随时修改数量，默认 1 个），默认每个索引 10 个 shard，5 个 primary shard，5 个 replica shard，最小的高可用配置，是 2 台服务器。</p><h4 id="es-核心概念-vs-db-核心概念" tabindex="-1"><a class="header-anchor" href="#es-核心概念-vs-db-核心概念" aria-hidden="true">#</a> ES 核心概念 vs. DB 核心概念</h4><table><thead><tr><th>ES</th><th>DB</th></tr></thead><tbody><tr><td>index</td><td>数据库</td></tr><tr><td>type</td><td>数据表</td></tr><tr><td>docuemnt</td><td>一行数据</td></tr></tbody></table><h2 id="elasticsearch-基本原理" tabindex="-1"><a class="header-anchor" href="#elasticsearch-基本原理" aria-hidden="true">#</a> ElasticSearch 基本原理</h2><h3 id="es-写数据过程" tabindex="-1"><a class="header-anchor" href="#es-写数据过程" aria-hidden="true">#</a> ES 写数据过程</h3><ul><li>客户端选择一个 node 发送请求过去，这个 node 就是 <code>coordinating node</code>（协调节点）。</li><li><code>coordinating node</code> 对 document 进行<strong>路由</strong>，将请求转发给对应的 node（有 primary shard）。</li><li>实际的 node 上的 <code>primary shard</code> 处理请求，然后将数据同步到 <code>replica node</code>。</li><li><code>coordinating node</code> 如果发现 <code>primary node</code> 和所有 <code>replica node</code> 都搞定之后，就返回响应结果给客户端。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210712104055.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="es-读数据过程" tabindex="-1"><a class="header-anchor" href="#es-读数据过程" aria-hidden="true">#</a> ES 读数据过程</h3><p>可以通过 <code>doc id</code> 来查询，会根据 <code>doc id</code> 进行 hash，判断出来当时把 <code>doc id</code> 分配到了哪个 shard 上面去，从那个 shard 去查询。</p><ul><li>客户端发送请求到<strong>任意</strong>一个 node，成为 <code>coordinate node</code>。</li><li><code>coordinate node</code> 对 <code>doc id</code> 进行哈希路由，将请求转发到对应的 node，此时会使用 <code>round-robin</code> <strong>轮询算法</strong>，在 <code>primary shard</code> 以及其所有 replica 中随机选择一个，让读请求负载均衡。</li><li>接收请求的 node 返回 document 给 <code>coordinate node</code>。</li><li><code>coordinate node</code> 返回 document 给客户端。</li></ul><h3 id="es-搜索数据过程" tabindex="-1"><a class="header-anchor" href="#es-搜索数据过程" aria-hidden="true">#</a> es 搜索数据过程</h3><p>es 最强大的是做全文检索，就是比如你有三条数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java真好玩儿啊
java好难学啊
j2ee特别牛
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你根据 <code>java</code> 关键词来搜索，将包含 <code>java</code> 的 <code>document</code> 给搜索出来。es 就会给你返回：java 真好玩儿啊，java 好难学啊。</p><ul><li>客户端发送请求到一个 <code>coordinate node</code> 。</li><li>协调节点将搜索请求转发到<strong>所有</strong>的 shard 对应的 <code>primary shard</code> 或 <code>replica shard</code> ，都可以。</li><li>query phase：每个 shard 将自己的搜索结果（其实就是一些 <code>doc id</code> ）返回给协调节点，由协调节点进行数据的合并、排序、分页等操作，产出最终结果。</li><li>fetch phase：接着由协调节点根据 <code>doc id</code> 去各个节点上<strong>拉取实际</strong>的 <code>document</code> 数据，最终返回给客户端。</li></ul><blockquote><p>写请求是写入 primary shard，然后同步给所有的 replica shard；读请求可以从 primary shard 或 replica shard 读取，采用的是随机轮询算法。</p></blockquote><h3 id="写数据底层原理" tabindex="-1"><a class="header-anchor" href="#写数据底层原理" aria-hidden="true">#</a> 写数据底层原理</h3>`,29),S={href:"https://github.com/doocs/advanced-java/blob/master/docs/high-concurrency/images/es-write-detail.png",target:"_blank",rel:"noopener noreferrer"},j=e("img",{src:"https://github.com/doocs/advanced-java/raw/master/docs/high-concurrency/images/es-write-detail.png",alt:"es-write-detail",tabindex:"0",loading:"lazy"},null,-1),D=e("figcaption",null,"es-write-detail",-1),T=d('<p>先写入内存 buffer，在 buffer 里的时候数据是搜索不到的；同时将数据写入 translog 日志文件。</p><p>如果 buffer 快满了，或者到一定时间，就会将内存 buffer 数据 <code>refresh</code> 到一个新的 <code>segment file</code> 中，但是此时数据不是直接进入 <code>segment file</code> 磁盘文件，而是先进入 <code>os cache</code> 。这个过程就是 <code>refresh</code>。</p><p>每隔 1 秒钟，es 将 buffer 中的数据写入一个<strong>新的</strong> <code>segment file</code>，每秒钟会产生一个<strong>新的磁盘文件</strong> <code>segment file</code>，这个 <code>segment file</code> 中就存储最近 1 秒内 buffer 中写入的数据。</p><p>但是如果 buffer 里面此时没有数据，那当然不会执行 refresh 操作，如果 buffer 里面有数据，默认 1 秒钟执行一次 refresh 操作，刷入一个新的 segment file 中。</p><p>操作系统里面，磁盘文件其实都有一个东西，叫做 <code>os cache</code>，即操作系统缓存，就是说数据写入磁盘文件之前，会先进入 <code>os cache</code>，先进入操作系统级别的一个内存缓存中去。只要 <code>buffer</code> 中的数据被 refresh 操作刷入 <code>os cache</code>中，这个数据就可以被搜索到了。</p><p>为什么叫 es 是<strong>准实时</strong>的？ <code>NRT</code>，全称 <code>near real-time</code>。默认是每隔 1 秒 refresh 一次的，所以 es 是准实时的，因为写入的数据 1 秒之后才能被看到。可以通过 es 的 <code>restful api</code> 或者 <code>java api</code>，<strong>手动</strong>执行一次 refresh 操作，就是手动将 buffer 中的数据刷入 <code>os cache</code>中，让数据立马就可以被搜索到。只要数据被输入 <code>os cache</code> 中，buffer 就会被清空了，因为不需要保留 buffer 了，数据在 translog 里面已经持久化到磁盘去一份了。</p><p>重复上面的步骤，新的数据不断进入 buffer 和 translog，不断将 <code>buffer</code> 数据写入一个又一个新的 <code>segment file</code> 中去，每次 <code>refresh</code> 完 buffer 清空，translog 保留。随着这个过程推进，translog 会变得越来越大。当 translog 达到一定长度的时候，就会触发 <code>commit</code> 操作。</p><p>commit 操作发生第一步，就是将 buffer 中现有数据 <code>refresh</code> 到 <code>os cache</code> 中去，清空 buffer。然后，将一个 <code>commit point</code> 写入磁盘文件，里面标识着这个 <code>commit point</code> 对应的所有 <code>segment file</code>，同时强行将 <code>os cache</code> 中目前所有的数据都 <code>fsync</code> 到磁盘文件中去。最后<strong>清空</strong> 现有 translog 日志文件，重启一个 translog，此时 commit 操作完成。</p><p>这个 commit 操作叫做 <code>flush</code>。默认 30 分钟自动执行一次 <code>flush</code>，但如果 translog 过大，也会触发 <code>flush</code>。flush 操作就对应着 commit 的全过程，我们可以通过 es api，手动执行 flush 操作，手动将 os cache 中的数据 fsync 强刷到磁盘上去。</p><p>translog 日志文件的作用是什么？你执行 commit 操作之前，数据要么是停留在 buffer 中，要么是停留在 os cache 中，无论是 buffer 还是 os cache 都是内存，一旦这台机器死了，内存中的数据就全丢了。所以需要将数据对应的操作写入一个专门的日志文件 <code>translog</code> 中，一旦此时机器宕机，再次重启的时候，es 会自动读取 translog 日志文件中的数据，恢复到内存 buffer 和 os cache 中去。</p><p>translog 其实也是先写入 os cache 的，默认每隔 5 秒刷一次到磁盘中去，所以默认情况下，可能有 5 秒的数据会仅仅停留在 buffer 或者 translog 文件的 os cache 中，如果此时机器挂了，会<strong>丢失</strong> 5 秒钟的数据。但是这样性能比较好，最多丢 5 秒的数据。也可以将 translog 设置成每次写操作必须是直接 <code>fsync</code> 到磁盘，但是性能会差很多。</p><p>实际上你在这里，如果面试官没有问你 es 丢数据的问题，你可以在这里给面试官炫一把，你说，其实 es 第一是准实时的，数据写入 1 秒后可以搜索到；可能会丢失数据的。有 5 秒的数据，停留在 buffer、translog os cache、segment file os cache 中，而不在磁盘上，此时如果宕机，会导致 5 秒的<strong>数据丢失</strong>。</p><p><strong>总结一下</strong>，数据先写入内存 buffer，然后每隔 1s，将数据 refresh 到 os cache，到了 os cache 数据就能被搜索到（所以我们才说 es 从写入到能被搜索到，中间有 1s 的延迟）。每隔 5s，将数据写入 translog 文件（这样如果机器宕机，内存数据全没，最多会有 5s 的数据丢失），translog 大到一定程度，或者默认每隔 30mins，会触发 commit 操作，将缓冲区的数据都 flush 到 segment file 磁盘文件中。</p><blockquote><p>数据写入 segment file 之后，同时就建立好了倒排索引。</p></blockquote><h3 id="删除-更新数据底层原理" tabindex="-1"><a class="header-anchor" href="#删除-更新数据底层原理" aria-hidden="true">#</a> 删除/更新数据底层原理</h3><p>如果是删除操作，commit 的时候会生成一个 <code>.del</code> 文件，里面将某个 doc 标识为 <code>deleted</code> 状态，那么搜索的时候根据 <code>.del</code> 文件就知道这个 doc 是否被删除了。</p><p>如果是更新操作，就是将原来的 doc 标识为 <code>deleted</code> 状态，然后新写入一条数据。</p><p>buffer 每 refresh 一次，就会产生一个 <code>segment file</code>，所以默认情况下是 1 秒钟一个 <code>segment file</code>，这样下来 <code>segment file</code> 会越来越多，此时会定期执行 merge。每次 merge 的时候，会将多个 <code>segment file</code> 合并成一个，同时这里会将标识为 <code>deleted</code> 的 doc 给<strong>物理删除掉</strong>，然后将新的 <code>segment file</code> 写入磁盘，这里会写一个 <code>commit point</code>，标识所有新的 <code>segment file</code>，然后打开 <code>segment file</code> 供搜索使用，同时删除旧的 <code>segment file</code>。</p><h3 id="底层-lucene" tabindex="-1"><a class="header-anchor" href="#底层-lucene" aria-hidden="true">#</a> 底层 lucene</h3><p>简单来说，lucene 就是一个 jar 包，里面包含了封装好的各种建立倒排索引的算法代码。我们用 Java 开发的时候，引入 lucene jar，然后基于 lucene 的 api 去开发就可以了。</p><p>通过 lucene，我们可以将已有的数据建立索引，lucene 会在本地磁盘上面，给我们组织索引的数据结构。</p><h3 id="倒排索引" tabindex="-1"><a class="header-anchor" href="#倒排索引" aria-hidden="true">#</a> 倒排索引</h3><p>在搜索引擎中，每个文档都有一个对应的文档 ID，文档内容被表示为一系列关键词的集合。例如，文档 1 经过分词，提取了 20 个关键词，每个关键词都会记录它在文档中出现的次数和出现位置。</p><p>那么，倒排索引就是<strong>关键词到文档</strong> ID 的映射，每个关键词都对应着一系列的文件，这些文件中都出现了关键词。</p><p>举个栗子。</p><p>有以下文档：</p><table><thead><tr><th>DocId</th><th>Doc</th></tr></thead><tbody><tr><td>1</td><td>谷歌地图之父跳槽 Facebook</td></tr><tr><td>2</td><td>谷歌地图之父加盟 Facebook</td></tr><tr><td>3</td><td>谷歌地图创始人拉斯离开谷歌加盟 Facebook</td></tr><tr><td>4</td><td>谷歌地图之父跳槽 Facebook 与 Wave 项目取消有关</td></tr><tr><td>5</td><td>谷歌地图之父拉斯加盟社交网站 Facebook</td></tr></tbody></table><p>对文档进行分词之后，得到以下<strong>倒排索引</strong>。</p><table><thead><tr><th>WordId</th><th>Word</th><th>DocIds</th></tr></thead><tbody><tr><td>1</td><td>谷歌</td><td>1,2,3,4,5</td></tr><tr><td>2</td><td>地图</td><td>1,2,3,4,5</td></tr><tr><td>3</td><td>之父</td><td>1,2,4,5</td></tr><tr><td>4</td><td>跳槽</td><td>1,4</td></tr><tr><td>5</td><td>Facebook</td><td>1,2,3,4,5</td></tr><tr><td>6</td><td>加盟</td><td>2,3,5</td></tr><tr><td>7</td><td>创始人</td><td>3</td></tr><tr><td>8</td><td>拉斯</td><td>3,5</td></tr><tr><td>9</td><td>离开</td><td>3</td></tr><tr><td>10</td><td>与</td><td>4</td></tr><tr><td>..</td><td>..</td><td>..</td></tr></tbody></table><p>另外，实用的倒排索引还可以记录更多的信息，比如文档频率信息，表示在文档集合中有多少个文档包含某个单词。</p><p>那么，有了倒排索引，搜索引擎可以很方便地响应用户的查询。比如用户输入查询 <code>Facebook</code>，搜索系统查找倒排索引，从中读出包含这个单词的文档，这些文档就是提供给用户的搜索结果。</p><p>要注意倒排索引的两个重要细节：</p><ul><li>倒排索引中的所有词项对应一个或多个文档；</li><li>倒排索引中的词项<strong>根据字典顺序升序排列</strong></li></ul><blockquote><p>上面只是一个简单的栗子，并没有严格按照字典顺序升序排列。</p></blockquote><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',35),N=e("strong",null,"官方",-1),F={href:"https://www.elastic.co/cn/products/elasticsearch",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/elastic/elasticsearch",target:"_blank",rel:"noopener noreferrer"},R={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",target:"_blank",rel:"noopener noreferrer"},A=e("strong",null,"文章",-1),L={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/rpm.html#rpm",target:"_blank",rel:"noopener noreferrer"},B={href:"https://www.ruanyifeng.com/blog/2017/08/elasticsearch.html",target:"_blank",rel:"noopener noreferrer"},J={href:"https://github.com/doocs/advanced-java/blob/master/docs/high-concurrency/es-introduction.md",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/doocs/advanced-java/blob/master/docs/high-concurrency/es-write-query-search.md",target:"_blank",rel:"noopener noreferrer"};function W(z,C){const r=c("ExternalLinkIcon");return s(),n("div",null,[l,e("blockquote",null,[e("p",null,[e("strong",null,[e("a",h,[t("Elasticsearch"),o(r)]),t(" 是一个分布式、RESTful 风格的搜索和数据分析引擎")]),t("，能够解决不断涌现出的各种用例。 作为 Elastic Stack 的核心，它集中存储您的数据，帮助您发现意料之中以及意料之外的情况。")]),e("p",null,[e("a",p,[t("Elasticsearch"),o(r)]),t(" 基于搜索库 "),e("a",u,[t("Lucene"),o(r)]),t(" 开发。ElasticSearch 隐藏了 Lucene 的复杂性，提供了简单易用的 REST API / Java API 接口（另外还有其他语言的 API 接口）。")]),g]),f,m,e("p",null,[e("strong",null,[e("a",b,[t("Elasticsearch"),o(r)]),t(" 是一个分布式、RESTful 风格的搜索和数据分析引擎")]),t("，能够解决不断涌现出的各种用例。 作为 Elastic Stack 的核心，它集中存储您的数据，帮助您发现意料之中以及意料之外的情况。")]),e("p",null,[e("a",_,[t("Elasticsearch"),o(r)]),t(),e("strong",null,[t("基于搜索库 "),e("a",x,[t("Lucene"),o(r)]),t(" 开发")]),t("。ElasticSearch 隐藏了 Lucene 的复杂性，提供了简单易用的 REST API / Java API 接口（另外还有其他语言的 API 接口）。")]),v,e("p",null,[t("不同的 Type 应该有相似的结构（schema），举例来说，"),k,t("字段不能在这个组是字符串，在另一个组是数值。这是与关系型数据库的表的"),e("a",y,[t("一个区别"),o(r)]),t("。性质完全不同的数据（比如"),E,t("和"),w,t("）应该存成两个 Index，而不是一个 Index 里面的两个 Type（虽然可以做到）。")]),e("blockquote",null,[e("p",null,[t("注意：根据"),e("a",I,[t("规划"),o(r)]),t("，Elastic 6.x 版只允许每个 Index 包含一个 Type，7.x 版将会彻底移除 Type。")])]),q,e("figure",null,[e("a",S,[j,o(r)]),D]),T,e("ul",null,[e("li",null,[N,e("ul",null,[e("li",null,[e("a",F,[t("Elasticsearch 官网"),o(r)])]),e("li",null,[e("a",P,[t("Elasticsearch Github"),o(r)])]),e("li",null,[e("a",R,[t("Elasticsearch 官方文档"),o(r)])])])]),e("li",null,[A,e("ul",null,[e("li",null,[e("a",L,[t("Install Elasticsearch with RPM"),o(r)])]),e("li",null,[e("a",B,[t("https://www.ruanyifeng.com/blog/2017/08/elasticsearch.html"),o(r)])]),e("li",null,[e("a",J,[t("es-introduction"),o(r)])]),e("li",null,[e("a",V,[t("es-write-query-search"),o(r)])])])])])])}const M=a(i,[["render",W],["__file","index.html.vue"]]);export{M as default};
